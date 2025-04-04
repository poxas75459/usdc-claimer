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
    "drwGBDL7knVdXnqVnRPhNnbz4kdmbmX1vjhKGdp6X6JCHYTS3Srzu4dDzceSMeYxp3jesPFBPdeJhcoFQ9cHNAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTn4HC44iN8F8XSRQX1U23Vfn854eVTSKW36nf7rgLRg6xpoVijLafwyWDCPdWWEuMacPoxJiB2LkkKehqmZVaE",
  "key1": "3aXsFM9s3G26JeaZfVPGc5K4cyw7xXM32FBGe2xRxinZWFehgw1jW6bamp3MBpCbjSR8tsg1ofDRHChrzfjMFNSn",
  "key2": "4gTejWyCQmJvi1byLx95fD7dbc8vZjzmyLznZb95S45pUgterZ7RK2pvYe4vbtxdxPLAT8MVSRj51XzSLAhdnVzz",
  "key3": "531myUHv4KRcEehWJRVSX2fqxtNxLzgN52BjKKPTUFNNqzStddjKAJVSZaiHMXjsswNxA3vKSk1qpMYuMT9ngFZj",
  "key4": "3ywqqt5Tw7qUgtyQ1hzkbYjEts8jjmmkugbLi3gM5yGmnC2SbfE2m5RdrhgMRQeAxdSQ7fX1bzvJUNo6oZRXq3SV",
  "key5": "4k8LEHCL4zMHRiCGkd3xXrAyjFoBBiWvuEmhEwBju7UxN7jDthkcoJiojcLNTm7P5fvSWzuGWLWsb7EXThbkWkoM",
  "key6": "n453fFsVzYtSe8mPxVxVV47cqQYPvEuDTwMmXcRMwGLiHf1ftp4gvGjVKHERd3UAB8LqZWbhBSjwkZ38kiSrtVL",
  "key7": "2GsUmGGwgbw1r9jchNUFVYHxLfiHKDvM4F7ikoSKt5p4rNjhynPUGAYvffhnaqq5joQJfd3kjcjuWTVC1y4w5B2H",
  "key8": "3Ldzh9R6GJgiUFjueXyfCiCU7N7pTPQf4LPNTdxqiVL4TYUwEAVPewPEVyV2rN8CjRydwQ2QX6LveiWJdc5UwQV7",
  "key9": "5a78EMnBYb6igLYcF3D8cM9G5xuxbKcASBUJcEYEbedVdcL7U8EsvDi1HbXdJsAjDSxEjUMqVsrgSFGT8tgin7Xy",
  "key10": "2um3EMDEsn6mppRmfooFQJZWCXg59TiTAE2V6cRuSazdQHEZJTir4Nfk9YtBvXSnnAEb4RzAck29X89H7EZZ41Mx",
  "key11": "4QZGs2if4A5uYNxPbUFUt8jdX88WWcNyPE9j8uoz3eAgrBU1dUK7e6GmXhhjqfWdUDDYiHVaSpCWvgkg6MBhBhfY",
  "key12": "51UYw67fubE1DjgvidEhpJS2qFBJrCDPhWGcucsAhWTiqRmeVwEo5rihGCbWxSDWue6YbUXoHNCYDrwBbwP5Xa1f",
  "key13": "3v8mZzBwe1mn87CFM452hqpyZ5tVFLNFsQ6o3CCpg69ANsoBFSHvvJB82avwFHWFeUCDccQxnL61LGgm9vxxT8fT",
  "key14": "3j7YFGjFLTyzKRWr8iEfRnMRu3gnHFtvAazBrhG5ihdNoyf9PN2y8nAjcJTRPjDrx9UEcLoXxRSXDKbEAuCk2rnX",
  "key15": "44a5wAnXw7wQ5dkUkfiMWXt7Ps4bywEgUS1x89PuU9mpbTCBpma5BpauHnXUK3SrUzUgizbnq6USoPEC2mhxT87o",
  "key16": "4qF1rG2Ma64hGAxWgXvb2UQqr6GiG2bfHcsM9f7BypDFNiucTrMNNLapf83pwn8vAG6L8iK1BdtajukidcySGiLt",
  "key17": "2hfoivTFKiP6y1WKRvzvCe6TY78NLm3s66iDmEBw2qX5V94Yn7QqqEphSjUm8zd8hZPqh8ve1SnPrDAz9761xJS",
  "key18": "2s5HyZ2two5rincoBJbkpRY6sbZsFa352T9fR8Pehkg4Jt9eL2wFhF6UudxfoehxZA4gBrztthHrwXRsgBnAQzmG",
  "key19": "5oS75Zwef97SinBTEZ4KmJL3jASpgWGywhXf4Jaok74NbkxetwLPiPvyqdE3kMX8p1XRxgLxCZ4ryLiTPDMvidtW",
  "key20": "4VhJ5vvMuscyB2syRFfALs78KvgGCGNfzxZ2ypd4pMwKhX1a4DqARfu7t9YV2aD97FDmaHNTDqKA7CbttwqjNk2N",
  "key21": "2bCuaUYZ28LBH6FMNZHZUGQUBESthXD8btRo9QatPEeU915fCPwPcLcb2Utff13d5gk9VRiHuvJk296JQ5dKqCt8",
  "key22": "56T3jWgULzi7wphFywhH69KusjcBXhrUwahW7umtxs7aWa3Rme1uLrwRHYK5ocDPSfbQAuubgGLagJ5kUfjAfmWy",
  "key23": "3QCZW8AfkehEnkTiVQhEK8YeveLdvARMA7r3YBY3wqYtZVGfXeRhH14GcEs5YJbiscdKjgaG3nypdj6ddsdqqTa1",
  "key24": "67gxg9p1xzm4N7Cy7nnKg1UQdruqMzY8qzuWDwSNpDD8a4nHivWK1TdrXRtpwZ3jUC9W7iUYxviNKauyhjPkW9u6",
  "key25": "2iAhyq9thPEYqhDG8n6Q6998ep4QhnecnuZ9JtegYFevDBHk5wQux3T45VHcLtjp9H3CkxCk38ZReDf98zzXCwoi",
  "key26": "491BzHiBbMpzPwfJPvVZk277fsmooRcJkzUgdjKjwYTTBn6wJMBkD5wXDo1QvqiTaXGi94Bi2nBPrdttzyEfFT4h",
  "key27": "58peykjLuuUiNF6cxDA7E9yQoCTztzVvDpq6VaMEdvi5CuAJEipwXpVQccdC2gEa6YrTqk8XhbCgHHXjcRm2uRdE",
  "key28": "61yePd4j4HuNbZ5EMxMf5ij9NxWpA1eGnDgP3jd6gYtpvkwk6Xn3xuRC9Fr2ZGvzocfEn9UcXXy9VHBMeZy1hXPT",
  "key29": "31JRdncLaRC3eeg4AKVhk7NBqo76DGP8Uaik3xNUtQwMMCbX6uBbBZUYWZf8fCysD9tG7fcPMASPfP4tCaJ66W9F",
  "key30": "2eC5YA5m38YSBxmDgcUSqn7yuhSRNvhDcgfFebMrxnsrz6dG4b2pTCU8CER7vHq4mBzGfZouQxkUMoqro5NFWrKR",
  "key31": "3dLYxD3VdKqdJWwJuzagmhfQM9ztV812U2TxrqjWZsDZju4rGXiFx6BjnzmrG4hzBpWD4EHhuaWd3wWVvrLstwaq",
  "key32": "3MroqWvxQgdyqNzXjVLvsqvngh6SBdqgBpeg5MdDH2ZUVZtzYLvd6YtPYtecX6wVxtPvNb7Vhmm5q4GYzbWYQDkZ",
  "key33": "4Dvwf4Qi4r6kcD4pWfpQgqrFcE2v3qr4ZVuBFvSFZH4rJuNRocbcUcyeSUhbWH9Bck6nx7TsYKMFZmPEpdD8UkWP",
  "key34": "5tE9Bp1GWUBnSby8ecMb7VB6bFCmVKouSAFv8zkUQ4ffu7JZXMxg9PyjLLKajBXHkASrMgdw7uV3nAsncbRUNqk6",
  "key35": "3dK4q2bN81kvcFGYvBDsPFX3ikdkxr5HALXa5dPtbDTCePvmEdmNshpEEUtLSo5nQvUqNaGEYUvgtTGuK7Hj1yCH",
  "key36": "3P8iMhSSH83ZhnmpbVS6BTGNXcMzmRKBXRfRmjMUqQDqf62XZTA85fBtKc4uaRNmHNwHYG733ybhR276XmYY2gF5",
  "key37": "37LemiXFnXQP58WTAy7VA5CPNj2HNJLjYn2B4ntRWZU5BsQ4wmAVmE6EFm3mBAm8Dh6FczYGoCEeDzUAiYDwTbLz",
  "key38": "4sx1ZRti4A1wHgjxMPj5j3KLEKQzyMbq2Ei7Aby2QEPXZpA2jktKZcPxPWheTHApmvvNJWTbpYyfrxU2vd9DKun4",
  "key39": "2RJeuX677yveTuwNUcfSTcv81x1J7bZQ4wcLTbGvi85KrSZZj8ZkKZ9xa8AGdVHzQku2r38MkRQ1WsKQBUBACQjj",
  "key40": "4ZRZ3PwFN1J1kkH2QZF92W3LzxuE6nAf1ii4rVPjXqoYcmHPqFzAfyUjwGgcUx6gKhQUjdDLfKX9B9BHguwbitto"
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
