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
    "yWMzdiLG3R8aCDezH91hmaMw5ma1zpEKTCC6ZxTVDDymJdkEdKuoyQnmntkVyUqf1yZCNuxRpbVLn2FVMnfGLCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtJtqwNgccpkexFMinaPN4CgV9TfR3ABzpLqGVVQJAv4Wo2UrH6yumwizi2Nznoy5GTxN4G2fKM2Z6ZvZ2eKYiW",
  "key1": "qe3AnycmTmbQh3BP8QiPBnNS51a8Qsf9DJN3F35WfRPaWip7e2ULm4eptV3KDdSPtarMg4nwwFdaaVoEx2HiA5s",
  "key2": "aGbb1zByk9PqmvLrByKdTrddvXQkSu4sL1oVjSWNfdqYXk8cEMDjaDRHyQ1SrBNYSgADX7NLhd1q61mGXReFiqx",
  "key3": "3LzXTycdr67GGEXex3HbEA8ab7h8G3XbLXrhbNEbL98VtZaPadrMXcHGRU5DKhZ3XnrKMyUSEg5S94GC5wU55q7m",
  "key4": "5CVB3GpWgV8rDQZvkCYKeCqePHmFhhJ5ncP8tg2ncSzsuZQErtn6AhHdLJWnjBos6fLApgguPG2dhBinpaunT4WH",
  "key5": "55oc4qNkxaR3eT26WsE96T81abk9ME7cQeiJxrYcXnXUvhpRn2RJ5bpe2NSbp8aMdpGsrry6kRbLNY7GwJWTghws",
  "key6": "9n3WCVbX7Th8H7Zgp4UrYCfGj9wq6hXUik1dApVqEcpw8C5EmFcvHTbpDHvfmhZzQue7qiwPocN759z67APqgxC",
  "key7": "DZbsPxa6ha1GW9cGdcqbc5MqmwvQLR737TqucmPNSghjuGpngkgJNHXW1p4kC52ZvinFG79vbVL24wyohkeXoG8",
  "key8": "5Wr31ivArkhVVj9ihm8quzKnZ3DgS1Un63QzudfYxtgyDiMqMYCgHpzNLwwLFvYGtzJknLpybWauP4cjPY42UB1",
  "key9": "4PEK1CU1zLutta862UohFTMvoMihP74AuMY3gc73ryk87HEhZVWoT4sauU7vuYZ2VaxgyAeKFTTKHWfjp3fCA3uf",
  "key10": "4Q4mKFQiz7wMiAVq8o39CeZifGB8U8fsN2JJT2bxT6UA9NhBQZvMbW1TVrBogXJM48fK8aYan17qu5D72nqNARtt",
  "key11": "LmqgSHkKL84SdPwwY6Xv5AXwwUnKp6qMYD62gQDPTVKDpTfo6W3sNQGdJeeFqk8kKSsPnTyM3GZcf8arnZuJJvP",
  "key12": "2KQRGLbBocy5GmcykfZqbiEGpPSMY3NrSMZhPpEytWuWz9FPNCZRKeoRdJWaAb9KDXJEQiNM2SC534Tcqhz1YHuW",
  "key13": "HWVdbBEmURQSBFRFV9MuC5crxdnrcHbGRs4Pb1Zw1fgusuGRPKabMP4ifCs4yHBWPHGXgSyNVA1MWJ9AsDygBWw",
  "key14": "4ggiC8i5vK9TqEUq3j5aiyn7UFzDZm9g14qPjNrJue1gkRZWXTbPj7jNb83V9SCMzsUrkexeyDL8soGSqrfw8SKC",
  "key15": "3zZvcovd8axQEH2YMWozgAemBu36pK7AMJfFPatvhJ1Vw59Us65eqv361U3txzR2Tn2urop376huaKHebr59TyvR",
  "key16": "43ZHaZrYaq6mqjFsJtswzsRZvhNT4AhFxUuWDmqME49kFjHtJgom3fDRZWdWuNVHGHsAe8MPgn6uhndDAG7fsU5G",
  "key17": "2CNESQzX9GinME3QQvF5Xc5V9wNaxycWQR6pZNDwMPkJosn9goZyxExiAy5yFFeFdbAfr6hZ8wBBxkVmwtN94GpQ",
  "key18": "55T8xD9nR4meqkcUy7jaZTdgckQ38eY4gF4X2NuZZCVGvgNCmMVbH4nZcJY3NVVEgxLfJpxEtkHDkrLCt3oMEfDx",
  "key19": "64xR9cVgcXHZbdWC1p3ngBBkNjMScmbfpUqXk96FXoarM3vDqN9B8E8qRniTKVbEAE1t9rfmVDQQcMPMQzCrzQ6U",
  "key20": "4zRD3Vxn7tNS1FakyQhpycCdri8XqjEZ1L3ZjEby4poXcBStXeXy1McgXDvdPLtj6jgJHJD4RotBagYyTNEV8811",
  "key21": "3Jd7c26DYieNR6vEc3d6h4iwJGqNYqujHpJqqG54RaCPf2wHznWceGSjx7wS4cwhAvbFLsnMmLJ3xMYX5CKKJb8z",
  "key22": "2mwSdeTSLTXabdUwDbA1a12FX9S58q7XacFe9bWDSgVjrREMn3Pnnqgi848ziHuFTFkk4yXZGfLaxqgWkzpLCxCT",
  "key23": "4UziReFvrUZ7fSgedb9nd8En2QBEAVSdzfcgk2A2hfXehSoTSYwQ7LDszVD9cUeC3QMdpHanoNP2CmZUVPywkNHR",
  "key24": "3p4yQy8un9h14KzY46Ao4R9twAbyZHhYe6ZmchkuWtfiEA5mTcPDQQYtwHEHp5Pg4SZiwzJ9dzgWLy5AJ1BzaB7v",
  "key25": "5ygU2rovjsnDySDqzjcsBcTCUrJMQ2H9Q19Zph6gnJWJTcVRSvMsGXZwBxXyHCD67DSWHD6EZ97Dun5g4KVc13b",
  "key26": "UbGvXMi6tHY8GiA2YCwGCkWGWuryiiHZBfztbS7QBNZQxnkUq2c7LpCXNg8M12ZdYwxMuUpAKbCQVRVjUjpMSLN",
  "key27": "62NE8cpStCKaUnGZH1mYNTYkNsaLT8gs2MZc3uiVEjiBPRF1jpfaUkWaHVrUfM1NuEQT5f8hS96DV1z8XH7vN7t3",
  "key28": "2pa3qUA5TEXndnHMBE3Lq3hEHY22bxqtMYXioidUQebqu3hEpRu1ESJJ9XkBySDAy5ASfETRutJ8U5TKZXLQa9Xj",
  "key29": "2iLNUhbwpf2X51rfs5aDoo6r7RqCyN2Rw8piHLEqiJkJ7YQjFUhSQezeoyrBM3dUXyQXiaxvfRef4ZLsGWeEy4wH",
  "key30": "3H8eJnaZ1dJgVkz2VHpTmUx7uKUA3kGdUbzUgHqN4C1RD38f2Hu3oiKVxjcUA2NCoMbucetrKqvdg2WLQupjBdrg",
  "key31": "5Jdj6UAw15ZDQ5XHCQ9yS4Rgyak3en1TT4732ssVSL6GCpyQKHpVu4u4E5ixtD8jPnThFqiSv23E5tAVgeckh39L"
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
