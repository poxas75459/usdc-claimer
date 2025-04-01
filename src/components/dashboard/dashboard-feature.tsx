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
    "3sdtAHk6rt33SXrFPVLq1e5PueFN9Jf8AnyB5ppsCmFKD7YX7KbMCT8naUuxxEkmnbScejQccqEzgkhTh9xqKLDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGfVqXMy8o9kxuxPsZTwKq2gYYoJbBBD8njrKGACR6dHH3BecYqGz3oHmZJNHPjD1t1Mr9dzZe2RsznUCJVfCYj",
  "key1": "HKf2VgPcaLgcZtrVudGsjo3mZuUCku2YDRfDUv1WxTJ9EF6j2qEKQwaGpra4ymxBAR8KPvRLMK1VTaA6WtrtomD",
  "key2": "2BP7RrnWXngm1gmtejdqNzJEKdYY2SRufXQXp68NHbHseEhVEoSiHLU32rvhrW3JZQKt9ABecCX8yMkJ723WSvYN",
  "key3": "4s5JK6CPo38G5GU6efUfkgZymksRvXgmYmRGv52PksMS6Uf4XM4LhSTrB55mVWsjgx5WyM5ahdvTiY3fi7SZZEsv",
  "key4": "4GFfMvL5auGm2FYvfoVYiU7va3boFL3TSMma5XSaoTafEWq2vNEiFBXxNj8q2AzeGPSTeQiDHCdGY13gjBJo5rb4",
  "key5": "5rfWu6JtNH6e6FXTrXChybj8t9evj9L3nuxeFb3Pxu2Py8VkEMwivNyuu1fksdLqRbnEEgshegxQEaBK1ofUGqQM",
  "key6": "47rbijrqNXQhmiC9pPGdiVkm9KrazGLHMpdMd3GXxshy2oR19fS8dgDzEmoJSGdGXfX4JYVr9HS9QP7ukzAv5hoR",
  "key7": "5UjG7ojgPEwRVFC1zo6cfSGtN2rTFAJA6ebAFjd5AQ6rV6kLgNbmb5dYiAJ9ydqZY28qmZfqBa63AfZ1SsaNcrhH",
  "key8": "4grWhKJvBdGA5FRvUEfD98TfsaoJSeyq5Uk2acQWboxj5qwWaXJAyf485vpBm939JpswKtZKUStaLAydn9cHqBd4",
  "key9": "5maaWWoFyBfbyMXQdUJfKao6qMBAqWvZiLC9XmYg7hpL9Sv4QBeZcD7KDsDMsUhbfn8EpCQEeL4nFCBDBA5jxXjy",
  "key10": "3qoTvi4BWZfTJSgCUifw4tLnaNugFe8bbk7xdULCPTcBtKk9LpbMmNgbtw96nrbSkEbmJRDg4xVpRpaytEGf3Xqa",
  "key11": "5ZBPuV8cb3gRnM7eXc2XLNEzmpPAL3uThe4exVKQ9ZBa4LTkrTbYpJrNsDM3Gy4SVGa14zfWJKvwS3YKYApdoegs",
  "key12": "2EcZd8xHSpLEZjopHJ2JZ4zcxn5hHgDXtJzNeq8rwAMfQdWr4i7dM8VyxBVjpyNoJWmo8TCYXGg6YGhPH8wZqHET",
  "key13": "41KNC74dESZsUpGg8LBWpqeBQoSJcKxvZqsDn6wD9VqRkxEK2oJ9Zs9EpcACAMC9aaAmxnc71F71DJNAzKt3xh4T",
  "key14": "2bMn2kWmjH5zhtMvsHYH1xVq7fpTLRVYZxf7QoUVmj3N3mAGCQUYY5DAZbNY4mQqjvoPsTgYg2xd1TvWywqJweCh",
  "key15": "3pPKCwEsqRj6DgL6zJBtJzEUbMJbkVFPbrmr3zAUziRGAeuhrcFnzen1aEeiU6DGwndydZddh7eFgpG7jN6jyznX",
  "key16": "54BHjHKVqkEDN9SRVQWeyybuGmNhpB8vgjm1eLt918NNubJB3DSsu4w3HMWcigpLXcu48ax5sqSuDv7JsmwQwZ7c",
  "key17": "DGTXu99cvLT2gMJd4mUUtR4vN4RY2bJqXpfQjzRqsJHhP7agRfJF1JhuDWa4ZD4tW2mt3hbL6QhBpREbWK82nZ7",
  "key18": "48CZxo6AexW5bLwRjNf7VsK94K6bDHG2ALWiFkxiD59aFE1aneqhxEDo8b6p5PHL5NZ4E3ex69Dpp8j5gHmdom4Y",
  "key19": "4YmyjRTfdyiMw57VLmjHhvccg78T1wfssj2C8KvaabHd9bFGHX42kGsf9Bnsg8rsBXQwbSCqdxgHMxg4Ss89gtkG",
  "key20": "7uPQ8D2k1vHf4ZP3iX89jBUSvLArTHekZNEuzyHyDGoStAPB9xwMACwynhYfimeFLQuXQ3qEHq4TU85nrx1gyCk",
  "key21": "5yyqGGtcgWMzz9AiRQjn33puriaU6jsZhEv46RhER3YXSK4mWP4h1qwQwj1b1Mh7gj6WycGhd1dXXw4udtwsYH99",
  "key22": "2WAe9bDwgUzmBRwRGPA2tcgtckpu1fZeZf1fQZBc5UjTjbUCw3bozMRFuB6abav5cFa4hkKiriQGHHjhPbPMXknb",
  "key23": "4EFUYs6a645uiyg4rXB146QuVfpdRaV2YxmcRPKc1G2ZAgJV588TZMaaNe85fXCJ5aYxA11yJv69BLJkKFkvFimC",
  "key24": "44aUUnuKNgB6ryJHZgdiKg1CJESq7k5V1rzCesZWekoDzQGcKmPPGNbMwrtaiJwg6L2k5mUKLAJqLFHLkXsgqZiE",
  "key25": "TGttBnrVVKsfUtiBai5oHHqjXusFy3wg62Djpdj24DH5g5v7ST78CsNBzARsJnm7ft1VYvgSWrz9B8w3efxDLJ2",
  "key26": "2pTr2TM4rCcKLtgS3iivzBpQnbncyre5uD7XdSiG6cJMKsXFu9bC8mto8ShN1F5y2G6c4G1YhB8gcX7L2sm1YFXJ",
  "key27": "3nJJYB67drZE3h3ja13YyUGQyDcYYt6L2tesbob5eALNpEw8KHncp7JpKe48s7yfx7LPM8YvAH2tcuzsPJKRxtZm",
  "key28": "57yHVoxfzgXAtvhicLSF6DUQ3aFzw5HJgdDqjHQA3MRdNKZYzqkftATfsWBJ2t1cq5ComLnbmrEUV5w7Ga5Z6vEn",
  "key29": "5teFGSftoK4EgWQnKHqpKwKzEqRm8fcvbTh2nDpQRjohxp5eNQjb5TsKGKGwMScYDrEhFJHJfpApwE64b28HnceF",
  "key30": "4AjVnLaBq2eGvj8fg4GXg9wfBRwPeJayudeA6oroqosjPQ8dckxFPcTV2mTe9RxpJUDQ3VUMyKdxapnhSrbEb5xv",
  "key31": "5gWYPn33XJRKom3UgzEHmTfpSrT3kr6YNLztTiL1ksiQJEcwLDVeX1DZFQfmjPiTrTiepdN8hjmuF89ReLY1dZF9",
  "key32": "2YB9MkjFx66bGJvrrGVDH1R2chHJMEizy5muJGHuFvaERo9GiXMhY1EkccwzvuxmB6YvKNwu5X6TTmCctFLVrxuP",
  "key33": "4X46ANGuWzE7PSqmcsdaK63HeLHX1DagtDdNwHWeJNnqdVJkv1kH3ktyU7bqdqgduyTfJmuPZK9WFjKHvEEx6ALB",
  "key34": "3whbYa3eFPgX8Gkis5J136oAr8FTk7JeJ4h1g9kSxYJZbsJooBj2ewbv6giXCzQb78EH9EdYTgChVB8CHNbe3G9g",
  "key35": "5qzMRXgs2k1jmoRmjKMSi6amCWxym7ogW7rBhSBuqbuTEYEV1ph6rLbCk9hpzWZWiahvAD7Rk2MHNGDTnPrqvnjw",
  "key36": "4CMXoaW6auD2UGUANAotJhQgfnUSarNnCB56jxjPLZjj6Nb5vHFMRx3gsW9dw4LqLgxSbLn8Khnm8yKwyheQTDtq",
  "key37": "5LrKUDCBJhwGjDgo4c8ot6uxqBpCvDJ88hWPevNyBH71Gb37JwVyo3pZa3ktFStzNhg3PpvB91pByoM2vqXY5hvD",
  "key38": "4d9rq3UQ1TG9SvRn1UiSYwa8M7Dcfi1FfufTvhL6iGi4KTsNTnuEDnpaPxrSuxp6ey7i9njjuv6Ujt7GxhLBRS9X",
  "key39": "wmRWDJwLTQuuBfgiuqUEh83Lte7fVudw9KWnWPHJcwazjTNJaPYvZ4MFTeUGrPFxw5q82Qiydtvshr6jGQ1QVv5"
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
