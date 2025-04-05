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
    "3eRbtL3uMujAbWda3fcTsNP1D3eevNsWv4ysBnwEB8NBMq9Vvq5hnpiJPH2cSZ3e5r4Fm5ZQRkbfbWwJGdUaVu99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHM2BD9KUhqBiSYKB3red3MbR2hmGSL5CMZnDheJA74sc2t32zbmcX2DnYpHnEFeSpfHuMGSNgH3vNhgMUJYjJf",
  "key1": "4woP3SfnBrkHxgLWAzFWBPDc6iEBVxPSR3DegWF1mEowqJ2FkRaEKEzHBumnB5HVUQrEG6jXk7JfUYzpqc4tBjXr",
  "key2": "2sHtCDYMFAhpZQLnyhiJJftYuQ8cdxhwg7McwsL16dtyCSiqN424C43thsArJM3ZHjQpBozJrpHyN4X3hHxDi4oG",
  "key3": "3A8X94TCMaewHr9dzh7k9H9bE9aazFszvtM2MSr63CFK67rPS6q5nnnLwyJn76ep3VvhzmhSQGvdA8JWejCsfDpW",
  "key4": "2nUvfvsFj5AiUsfkiN4sEPiBqnXVAAnxH9PjpCbCyxru2Ew2LkRVPmFBaKD7Sjgx1VcfZhpVwE5hDdQRqU4Weips",
  "key5": "5bNsj7cgpc55Mi2c7NnyGK8dqDb7DWq91ZYbKNpZNTUYfcqdaGWgtXGwaxy6gxqp4bMderpwZZAZmYZvn13Yj1Lt",
  "key6": "5ZCAMwuo29frUqFVxcdHYNHZnqH44edhjsfb2BzuB2e8GirxTSBx2dQRpJDyzp5vYWtvGCcz3MbGN1Ts9BaZJxMv",
  "key7": "2fswmwpPByCGx7ekM6AJC7aeGkhbL6eZXsWfxPvnR2VCp8affxF2CEYKBj7xHo1H1Ee9AAPTQNEzKN2KF4xrsM44",
  "key8": "5eDJ2jwz5RBrZeqovregXtRY2Q8PejhZHXo19bntK4CJbjxQc7mt3xPiTv1zirwu2mF2ezLU1NXQ7spmA3x6eUip",
  "key9": "49qpQ4h4aZKQqRah48xeCqHZpNNExorqWcWi7qe7w1MC9fujT54fgx6CmzZapBregoaYgppxquX5vAn2BCEZL3Ti",
  "key10": "5vsuYyXanAkLn6PRgX5YbiUZLEipaeSULWRPCG2q56GM81Uu3UZY4WzKpDWPxBhqjzFqaZYV6HjW85WjGBVTZphD",
  "key11": "2BnM5u7kARsyRe96kwu5PjzumP4NJ7voNkEoWLi5EzQViay4wpZeJn1u1Wrks9rqpzAbQBovX5u88994xcgU1dER",
  "key12": "5rxp4CGdbW8jZrV1AagrvZ8ULSVTtFRWpwaA6HEtSDP9X7pNydYHSDGWXRXFK8noTePMm4rFzrLWpiA523kf3WjG",
  "key13": "2DZsUX1itQAy2fCdagPk5wkVgLggE5rCVZ6mVAHxznzjcw2XmLL89iEHLruCamzwMSUvJm7CMZVXjujpJHddTebW",
  "key14": "2YiqhyEAQeEDPugu4Pe3uHsEWdFUAh5RitH9e1zGimHXmH4kVxSfNvCRb2EUw3GHdo1nMKFHicUMK2CUknhUzBAm",
  "key15": "2tiF3qWPwQf1xkC7VgSXixrVgZubQsF7xhwzvZR2EcM1w1iZtBc1o79Kn9oBFBoEd6H1E9FrbZzA48KsUF4Tms2g",
  "key16": "Voy1ECdx5vPFvWomHKWBQ6d4PjLjgtgifaZ9wXVVpaDRdVmoNzqmuvjWDgWy1yav1ahbXg63Y5mbU2xEPWAmPg2",
  "key17": "872ZNC6dDbcRR9dQMhpqAQZJeoNV3Dxmj55hFDCLHE1hMrf58wGAYtiqv7yZMCikwU6UuFhhKiY9ZqpdJp9UGZQ",
  "key18": "2XxerdRqYhxm2mat4P1iQkZ9X4TC9gKcUioQmTzvLd72znybKimAB7qp9vYwH62C4d6x8JFjDZMrzwHkXhdRXuwv",
  "key19": "5YxJfAZUuBsC1TvhsrAVbZER5wWLnGrzbx5RA6G4KbDHpTuLuELAKLMuBEWLeGyfu8Dogg9AhwBP15hrSFjNEBN6",
  "key20": "2k1VcWMvrw6bfQBWLypXVbTJ2m7HFCRED3AKU9YbUL5AhGa1Yrst3MyivK3BggaFYUEnAerJnFV3S1nUH4P27WXg",
  "key21": "5gFa24Q4ariZ621D1mQm2CxPkEpGZWfURKzVPKPGCah3z8QRPoJMgMi6sfzCtwigXGLTK4WVieewCLbnYSgsfZLx",
  "key22": "5vrpjsMbfFqy8TpgjzC4cqMwvLBVuNdo6b7zmy62dVfMq9bFELtKDoaefmMv5jbSoYiXuive3v55f3w3GkQkZFRB",
  "key23": "MZ7ZUBkQzXV8pTyD53cwcovjn24eozonQrraY2skkN9Xe8mVjUZa9eTW6wwzg3TBi7E4EehRhsjFnT3yP3upyvr",
  "key24": "4kSTd3y2hQSo21d9FBvxKrdXTZ79Vg4Ut3awF7D7dLFgDgVRyrddG8LzVpsArPBPpvmuVBsnQRNJiN1xjYvmdPzf",
  "key25": "3ahcx3gNtHLvaic15V5QJmpjLLxbSSUQMKPLLLKNsitcJRBCkd2y2ypCWbEQtLmsJVh2PuEbndWMFebXA9fphGjP",
  "key26": "KLkwnYqyzmdp7AXjscDKmVAi8isKcadUt9jo7sVkKj7ohmyksi97jzi79KKfjMmMkAZQxbT2H6PsemaawKeZRYi",
  "key27": "Xk2djfd6z1uadsvyDnDcXQFJcTaxxeWrNQEF7szEyeGhjCJuwRWf6FcGF82bSCWWP5iHbRocutgtKztoUPaWXVU",
  "key28": "3HPGbHKcMX3WX9QgMzRVReRDwRSYLfXrsjW48Lb1Aux5h5UeENHnoStGzXN1zLu4QQjR2PC1hwSj4Vr8ZDNSmBdj",
  "key29": "5mmBkiyEVprtSrEZ3eapvYUcDQMxqXMQQXroKP7dN8strC3HxMWxyUKxFYpAC1K6yhoP4NW3CDsG4fqQy2HBN5LW",
  "key30": "3zz7JWPw7X7JAG7jJTLX85rmsJifbYFzZ7WcffVYKXLk7n3SE9fiqBuxBxfLYrEfriLAGka1rMaSTEN2bmVBpo5r"
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
