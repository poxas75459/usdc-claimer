/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5vw1rupuSePxeKzfVQ5JgDvXcBWpyEqVM6Pcvg6SojsnQuDMX8KUpFHh6XkTZkVASw3cP3VVEELSGNwcTPuxBkA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2Q9KP8wVE7hiDrb7Mg3Ri7Lt692GS9EBHdQr2MeoitDJStfdRrBvbWiVRNckytKSVsQD6Cz3aHdyEzTJ2BpLAM",
  "key1": "2TiYf85yH7U12fcmKPEUjNGABzDNGz9tZaZ6tYWeqhSX97CSyfa5px9VRZ8HAeythoc7QW36Y6cy2fdzneXQEaMu",
  "key2": "4e1NJg57n3iRqnff9cruAWfLPKx1moPxDCC17b8YYYnAqXxGuMpmiErubTKYhnKDW1HPhC8HmR4Xr44cMzT1fKCD",
  "key3": "35SaNtuWZLgKzGtKgMtdKxr3A7FHrRVM5PM3qipNjYA4pUbPnmPwMr6U966R7Nngpft15VEDmYjkuZ3ZdRyhWyd4",
  "key4": "3pRvKNiFors71Y2cqSDjRinh9cD81WgfWETYk4fAsVsx9zsuSxLssWi5s8rZgbfqKL3saBJrbMqDmGGC4XyNNRkH",
  "key5": "5ur8p3sd4vw4LsCjGN72xNtCSBcKToyxykEAQReegvcuf1EHFC7DZhHBbw9XzMGntQoFJYYkZq5seushbLKYNXmK",
  "key6": "3gPLjtqMEJut35ZGAntvfmFWtGJiShiHrUWkghT5h8bQ9FHYzo6jFhTm5cExcuYGEuy2g9C4jXeNcytiDZhrNxL5",
  "key7": "MC4DS2oTRqhXbe4AeyFSeHixMierUY6mY15rpHxDtnkbJBCmWy7co4rDF4Bq3ojMnwHMo7uJTzo59cznNHoFqby",
  "key8": "4TWubabeH2pjrjJ8V71H949MA98oq5LBJs4MTGTL1LpZxfUbvFYoH5dgoBkKjKXQ5qfj6UxRvj9GaceXXRDRfVos",
  "key9": "4uwufADozm7DfD6a8qh3PaAg1e3drvAdLyXTiZw2LHpAXEbseb4soxmBWCDAvxGqJBzMjqB6dqSeT9sYiBybpqq8",
  "key10": "2VYm8SuyHTvnuHYbA6Stxz9QaCKdMh74sfActtw95hgQkoDCHc21LXo8DnFZJCqJyEJFBTuUX49aVgHfbpuXdDhr",
  "key11": "4b17kcZBx1PMAzip6Vy6mRvcycxQscStxMAgs2hnEddRpqeo1Kv43kZ2XG6fTjpttJsQBpfa3jG9Vq5EZ5DSs5mt",
  "key12": "3Uvc6VcK4sBMtivqERH2V4s81s29DqVPUQdDaArxtUws85j7U8aLKBfZiRa8k2EMJdq2ND5Z8eWxTzikRFsg37Sb",
  "key13": "2Vm9VKUoKkrSRq7Vtp36TRyg7xTLJ61KaCsDYpSZybRdBSNe9GTEaSm3EbyVaGdR3w41yVJsvDzZbHuhqav14GPZ",
  "key14": "3gtksnc2yWhMK1UY55QqcMpXu8LurB6ujmTLAYeKhEyEVMqHQgJ5u7VTEPMUvBGkd5NPhebgKvapMWFqUGKmJW2w",
  "key15": "2amc9iTCntYhK2xwvTqKoc6VuC1w2VTSqDkzUBZbmnQ9EnJMNnJLEtmpMdi2kr6KAd6fggGALZJ4XkX14YTbXEHa",
  "key16": "5tt3WiEzNjSovxyfYPzvksJ78ZGeerUX91TrMpXJicEz9P5JrxTa2a8nVcF2e8k8HcAGn7USkVv6DN6u3fgVutcF",
  "key17": "3uB7gjU9SynGMpGDKaebU3JK4mLLfpnTaCaXfd4kcvaXEZzLkAgtXgCyQDowR5XA43JvZs8YSdpvDpaz249cYqPn",
  "key18": "32hXJNP6ZEA9PU6ewTWhR6Wce4RR2gc3JK8V3Ci7NwFYVytRZaT7PUUnasWJpY6gAWAW1Jr35dE42UnJ3g4h1v8X",
  "key19": "3UvGX1UwNfsp2wvmckVDCeR96P2qY48HfsQXsXFmXv5gtTF9Hu4JjczPmnjABy6F9us4E9bEqyn1awNAqdHEfNRG",
  "key20": "2yqVWq5FE3ceSUvqZtDR9pgJnrkXL2LxSsP2M5BZ6M4C8ENjb4jC4dqAxMvcpSy1SNe2cNJyT6QPDvrfpFCADSKa",
  "key21": "eWJcMQtYHUhCnjrsn14oBeRksrj326B4zGbeGncu8cL4ZS7HyF3RHPEERE49kYKXQsT35YXxobjPkxVJ8wWn4Pr",
  "key22": "64udaWpyayAb6obBBCC4v16dkMpgcB5MXG6gek5s7KGZXNaq5p36ZY55bqT83VM92bDMHWxZxS5HFYQdcdQ7z6L8",
  "key23": "4yyNaCuTrxYKzsMJoHpXwBiw4a8KodECr4RwFURxm9kMPtcN8ujiL9rXZVDkP8CJjEqQFQLej1kzTvoTwVPudsR1",
  "key24": "aTaWWpbXfZtRriCMCHenf59DeYAjuShgRQjj5dVi2zyLvsXAEeim622JowboKQ32gHjDGq5bnZq3YTyAtSCAe4n",
  "key25": "2YQnmG3UCfQJb1158izpiYF8XEdSzMnWLXXpmp4iJ5Lau4BaqUsG97dHkTrrrKNxXxdMy64orVAZKMSFnGBqJNbb",
  "key26": "5AsRdPjYNUNQf8T6zD327EwUfLYccLVdxm1HLR7jK4r4C15f2YmBEDGEqx8JL3W4auSY7v1TfQxWET4pNyuB6z6a",
  "key27": "5VRh869THUY8vjeKA2QZbb4H2opgi7cUhHK5ZxnKGhhK4FWyX3oHExznMYH48egESLZXdfrdrrE5zTuYDiJfoeU8",
  "key28": "5vy1YVJvJ7tGKu6HvLuWGJcjLoBYPqW1vZAJZgLG7K1pigLYvBvjjhEM5SxzkYe4hfB1kNEb8hZaDbDPiz6uTARy",
  "key29": "5LXPunegkaierKXSjDTGGaVgGz8Xc4xY8jj8CpsLmDv9Lcnie4vprdurA52SasTCmBWzPc642NZ56nbvZBorLSje",
  "key30": "24DFwHxB2Gi9qu8MxnmzmugB1EajQKYZQjpiDbpAzgG2tNWmVLssUytXPpsCuzMEi6vfuRRw6hKqz8AVyhU1BEN3",
  "key31": "3sAS4iHyLTKPabC7ZxhQnZBU1gfVNjXxwVXwYZ9UgZTxHbBdz5ZPntEycBMaQA8jVFZds3QRNcXwRGjcofZPQPTv",
  "key32": "5ADzFYRLSmJfwbGTFN7yxBtQE1n5sZ6oDHhExGTLd4TpyBPP3QzPn36m5i9ypd75FLJ8xqYjzF73XMcfJTVFRZZ6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
