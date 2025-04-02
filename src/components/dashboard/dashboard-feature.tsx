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
    "5dUFNYPtkD7jpjk5MRRouURXekB9ReBczoGd84DCriEVUqkwJiV1JkNqBSrM4xf1RhgXqgepHzXxAyDnP5U19xRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSgsFz2MERGZHfzinW9p87qpJk9BqkPMVEUNDGKJ7Cvqmtk5NMdaPmH6HK8qKk2RHfCESutaRZoqxpSC8G7Y6aw",
  "key1": "2o3a6Df8YRXdry9Uffr88oMNXyFpSKDXufSYmy9i4YbZe1qhCkk6Lz3GgKupRUrqQqm3K4qrruQ2QUnxp4xY2cmK",
  "key2": "4C3LZC5M5kzkLKY8vLBebVuhkEGVnJJnesk8mfaHsnVpZPGq35pcrH5DxbEUa3ev2kdApVpJZAc6z8k7zNHvCRBR",
  "key3": "4C31Mkt1e7dCFcvaBfhpaJ5XK5xPHSFPyGyAHkLDqcJJQmoLe7ARddwk3abqy4kGuR3D374mJozkk6FgMEt1dq5g",
  "key4": "3PdqW3s4SA89CrKeP4cEmrcGsfjhLybBadxSZqhZ8SAaFbWjG2V9SbCbsF3YxCREncLYf26LjVAQRCkWmZpSFcgV",
  "key5": "SZYPBfT5tYThvojjRZwhqR97o4jXbq7D5f1Y6PtnEviXcevocdmxt3nJWg7U8dgrp5DEqWjaCa246W9ybuFVtg5",
  "key6": "33QZn5CgDXnyN8CexmApCxWGq2MFfcjQYSGFE6KQUAsoAfDwQDyBfDNBh6yQXwTLrdKzPgEvB42PoZ1YV7XgWfMn",
  "key7": "3P7ETtCu7Q2Tjp2bcoHszSBhnVqVnYuEVPtLhbqbWti99BgFLjzQbDHa53muaY61gS94ToaxA9ZpoAbs8nHkM582",
  "key8": "3DPYKpj1eZjNRxm9eeciR9gLv85URCaxpHVVFagzQ6hT21R6DtyTGh5diPkWBThswYKa9TN1ahFZjs8yJMrSycxP",
  "key9": "48ufGhmQDYhxFuJdDG3x7qQPtzNJxTR5KDZtXCYNGy9HApo3nMEs7Y1hsuHWzwsgx5hbzievck2UMKVDWxwZuoGG",
  "key10": "2Q85ysDgVMMkGaXwXDfLMLdEMJYR1iL53QcXbr3p28EE34v58MWzmYxR2ZfuZPxttfmtcHy89urprBcw9jyekxA5",
  "key11": "2YmHLYvy8di1ubxa2BevmK7vrsHT1prmFVySjLGNs6j6ehEKxF1DYxbRYKrHVPi8mNEB64KPWRwaD1G6FAPEFbCT",
  "key12": "fW2cjAS6zYdsXyQobZy1ovVmLNdrz8ooP7tVyPj1MHPeNYhjxoCqqEv4wGx3kWYKfW1mK2dmHWxJ1T4j16YW96a",
  "key13": "2GQtLZqvEfY1pNGeco5wUEuh9WAsbyUUM2ky1zrhZXZHBV7jpXbBjSWUCibp5aKBw3qPGC1dhSPTLESx66mR7cfZ",
  "key14": "47awCf5KKZG7iSuxjR2qbNfBcZjQJ8sontrU3icm9v271WUBJ6GmgrLNVuVyefiwrS4KibcEdi5ywR99U78MuG3s",
  "key15": "625gqAiAfarjRMR2dngMTsP8ctZ7BDegDrcFqEGL8sVkEf7owEmvi4QMd4FdoNZxySLprnFysAjKaUopig91pfUB",
  "key16": "Zekt2FX6w4hh7h6VtVTyxB7tahHjxmp7pQVRqnd6C4KR7mX6T7wthk271d4fdKv9CVsfXnJ8B1fJ2SkcE22zE9n",
  "key17": "eYVgwnzBVReZrvLryNzQUcCzK6tQUTWSSrY2ycvpQzHMEsqZgiZHnN4gNBJHQ8BPhMXokRGeqpPa79dyLuvcZ2f",
  "key18": "4SfZa1gCeyeYqQodLvuJ2TitfAsYWbVqTwgCBShNwBcmTpixPa6AhxmQJ2y2HSi6jJf5WXmZaxKDKcNc5M2t9uL1",
  "key19": "2dKonCHAjmzMhCJqq4TRgZXjxju8mZmyxaPGN1tMT6XJEJw9m9dcakEEhpisbCPJfmTuPrKQ4JoKWn53UQ84Xvt7",
  "key20": "5PtmYhTXYicUk1dUJTTX9JSbGZaKLdbeVVFt1sdZEK9DqZVdEUFGgk42taG474P92Zvicw5mV62tFbi2CHmAUoav",
  "key21": "2zCHM9Rzm9jS4hX6tqeh1DaEGdagA6mhzmN7pRgX5bR8hc6oa5YXQsA6wSKDszavgRxdvVymokD2WRdF64axKmaH",
  "key22": "4DxKvF8zSLFXaewf2jB4yRB2LX5yUUBxzpF49t5U6Tm7wfXzmWSjqZhbkck47PJ8GtmPK1W2bYSoNNxCYGPLqXE5",
  "key23": "mmvL4mgzsM1pKUB8xuQ5BbMTy3hx49EF5BJnc8ARjd34ty97fbv5SK1EeBa8wbnZRkgDkTeHP2bSdeZEm3qX9oK",
  "key24": "2dML6EaZ2SqRPpdnKZirV9tV9vxLzYPqcJGKJVHTBZ21uP8SSdeZKTBuETvmEzdX8deeqJwa2yj6TPSvoDRs2weL",
  "key25": "2DGoRVcfLJrm1ikMKvrUXM1ZXjeooteFMxnMuB3poMz4rth22SFwqWKvXpKkQzZBWtEjGhDcSC6PYgVdg7stFv2e",
  "key26": "51aUC8D2Jbt7JEbJ8Gd6hGW8BupEwW7Lm6FwQU6UhSSsnrQV3XqZ9qBVYfeznuF7TNserSbntQ4asC6fqpjn6adg",
  "key27": "3R9yqVuRaHr4EqCb1FNu4DAJA2iS4gM2gCVi6UkrKL86AwZB7V67YsJ6jUPxG45YKDcXB2VLM6NvmeqAe1GT9qae",
  "key28": "2bowgQEisNE6ifc8wTrhsHsXNzjTcBNUTi3iZXf9K7JkZcfBCqqUF1kQ3MAmRou2GhdY4Lz3RNjJDJaJkEWLYe2z",
  "key29": "64yZVvjYwsGjmpsnXJe4PWa9i1gDeBQPWUqVxbC1WeWXQ4XDn65DJmLW8voqMxUGdsJq5eGc7ckE5Zt6PwftbxDr",
  "key30": "3JSuobzWFS71JVGYoWnPG2x9GpxQ3jLqc144TGzRpDQybrwbBzLvoSrHb2n1HcTgeAyhxWc7MZCB5MkLcxt8M1LU",
  "key31": "4DRTLXbyJSH9R8RUpqvkFfgoXbd2mzRsevmKNiqmdSA7rJCFUCZonx1Rpxj8j7zbD5xt2zknB4Eno5zudecSxSUH",
  "key32": "23xPf4xFaceBDYm9frzCTfToT84Fv4J1D2jFKdq7VZtozWGdVSZhBRx4t6AK4D7etETXcuj3nf3iC3yuP1YwvR9h",
  "key33": "geS6FThEdFWqusfLRz1pSXYSoHd6oqVpaSDaGjW3DFSL3eucf6QbzdMeYvv2KMybS89oM8w1EQQ6NHXPAES9kbw",
  "key34": "3Nw5UyKn49ZLCDdVPTVdbsayypGDDH26coSGfg8dbBipxdeGFGv1n8sQmA2BaeZ6PeuCD3FwESUgmhkRsE3Ww26o",
  "key35": "271JSe8bhzpuGnqVZzquT4ECLLSTK6BqFTEf16GskioCayTD1e5qSbq1gX9jPQxDKnMoJArTkmSu2eZ7394RpkMx",
  "key36": "CBdf181V4xooWuXoW7XiST9iebFdwLmQmXBupsV77bJ2WK8zYNtR4cdvghvMwcggWZXM2o71M2fKUkWFd5qTwkW",
  "key37": "4uR9YtMhiuaHn3JHqkkGbkCTBhaf9Zga5ZzrxiZQh6KczpjsE1stfdeEvvHgXBT7JvapcEx1XBXkAjGW8qNwHiFK",
  "key38": "32virpbT4kqTiLRXdXhKhAZSwWz98LKbvEGvGyZY9tzMhFP1ybJSbWfHSCgTNDGGtdn8WwxH9F3cHyi1T4YVf1k",
  "key39": "3W3hN7UR6QoeGfE6MWKSYaEwpihUw1mwQ6TKBH6Yf1DTyDVb7QGxHabSZ4S21k65yUsWYA33PXdcQLZLggMnqYip",
  "key40": "3fSYHwPzc6xR3JvWjVtM64jHj9VnkxQi2t8Kx45PN3aumtiNYTpudqEqzDzRRMhFXcfxASD57vQwNaXnbjUx3kUy",
  "key41": "2PVGbLWRHvE8vXgajhDqMsSyJdz85uhpK3d9cQ5P17eUJXyymZPRnASd4paSskqzue8jxvFdWYM5Xhxtnr2YUct1"
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
