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
    "5JJD1YJRNjBdDcGdYEPmAZuhFQjzpJphFENFXpYniBFZsmiETQKvSiHuxNE1L3HX15i7HqcNCEGZ6phZNv84c1ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3cPc6uccn4tRKTL17sC9PWNi59vniVZEKwHSLBmcyeieT46UxqVQCBgkkLyM6XDQ85TfJu1nrWLhhoqCMMribE",
  "key1": "4z6eTYSFYGPHGGv6KPcD2kmGG6udf8jzwbMRXCGMLq5pQRsaNweKFDYBoVCvS9LkqDgttG81HmeNd4RzDdavtnN3",
  "key2": "4ubrFkopH6bPAEpQ5px5aGhRw3yevy153ZRHcjpVxiY5WbqDt9XkZ29JmzCMAcDCbCvq16WcFthNSZZrJtrog3e7",
  "key3": "55VCdveBwz63rJLKd6zfE4RKnNyzbyoDEX9iYZFxwBi1znCPVk7bWhM4pmuidrDtArYBze4w6jc5jU3B8FU2q7qE",
  "key4": "3nC1MbgLGxyR17guwkWDyuEb2UaLaGbyRFinsDxzK8KYdHi9Q8aemDCDFXB9164TaAsahsNtSJtWxzLDYFZSkx8i",
  "key5": "5RVfxg79dorMnZqruBtK2aESYe4FLWTEG6CAP7VcvsjsX1F9RmgNcSaDZcc9yAvseupxpFm7KxsSX5NMMkwEoDbt",
  "key6": "3TKKBWuXzmRWYTEDh1rxffkBdeKocLw66tWjYAng2gTQqKsS2Jw4EvYPT9pHXnoE9sQnG78bNNwoJFNJeJ51KpDK",
  "key7": "67dUyQjdXseQUYtMjoL6J8YeNkrV6QHaLykWJTx3qWVzwbsaXW7TwYedQMwGVSYPA46zMjDp2R1t7yCREKL9nQQq",
  "key8": "i39YErqhRPZn3Eu49bM31TpN3xyfHLZ4GR5mRGKLWNJ27nirjpxJQeng3KAKhNhvG5V8PPqZpiyTK6NQ5hcGLvZ",
  "key9": "BVFFTv1MsL2ESh6dRBYWihABX7yDDy8XBg3ML7xNtNiG92XN2iZRQXencJ58oyTdbm9LeTBdAtCT7YKMbhDKJi6",
  "key10": "4AKs8KAy4WfEaxo9tb8toswFMBdEq1vzTfxYrtDgND5FXva5y7ix74JNKdghHhdJaevgeBFi5ssmLwrD2sYN2ubv",
  "key11": "4vo9mU9Rr52RBULvzHg2ihBKCxT1waw5VEkYdoERof7GS7MhJqNcv2mdhLv4Pz67fQfTVTF3Jojp4DLAhtmQmo4L",
  "key12": "26znngoSQ2TPfAMBeLT5U9cz9Uytpiz6v2hGTZ6wACFfZL2CS7fgER3xCFWJk9U8cMpeDdBTYfeghhfaesBaMF96",
  "key13": "3BfPJvbk11TfsHN6R8ENiuhCgrqDdpX5Ftq9sJLQajMUttqJ84y1hdy2KwQmTrXojGe63FgoGNSKzrDQcvAPS6UG",
  "key14": "28VeNxiSx9FzQk9L4SHVhrssdWp3wTCdv5fvtv8ZuBbnf5UM8bjKNpbeX5yn54Cmr9GZHKJ63kdmwbHSncNZBAFJ",
  "key15": "66dUvrGGuEQpFym5aN4w21mxmsfuf91hhWiegwUgE2uCUihuZZtmk9LEPUuj81JnTTqFbG9Juq7EfVKvSD2tLMBr",
  "key16": "2Vk6NH13GYepmfoyqqK8xydEzCmDuqGrzggrdxW3znp7UDeQ8UjcbnegpTp2u57kZCgoZE327Q266phme3PCSbZJ",
  "key17": "4kajoZDgAdxvQVCzSFaP1n3f6qTda6zpu5pufg8dDvriKubKnrz9Mx9fnrGfPGFnFQuYSeFUuybWuRr4pR1Zddwt",
  "key18": "4WF7teZu9ZSkUEdQDTh6d8tRgUAd7nhV2UZVCuVuypEgEjzNnT6E4racZFN9AJVk47k6fPcpLhhsNVdK1uYxGhHE",
  "key19": "5DZ32i89jyBuVon7yzGcxtHkXYTw5kMBbaNVw8yy11ufU3FN5pMyNze3BmyB1q4xQrxczmgmzLDBMViqVtWkv1X4",
  "key20": "3EmPuy3v9QHwGAP6Gg8uriYFiA6bdcuqhQqr6Xs2dKEwjLxvLHoA7LJmkA2kKpbai3AB9N4FAcB6edixKtHCoQGe",
  "key21": "5TXuMHRY61arGxRLfqCUpEvrVeHA9tqrYxbJ1D2J9KxL5AgGrGVtFRY9Gb9Uu7YR7BmHbtURAWAPnZiCrh8F1Dvq",
  "key22": "2avnAsgGDk88J9saAjArV2WNppFAQC6rPs3neznYBmTsWmpbR73bsLqm6iFdiGAoqJK6JgG9Kjn58KmxVKUZECpb",
  "key23": "5kw3k1MsuhaRhx2WEBRPvBp7Dg8mjWNXkPff8y9J52dRiUjEPXtrSKuF9zDGrVGyB5BVvX2p3JciGt7SUWeKmj9Z",
  "key24": "3UkJXio3g2U6ipMwSZF5friwZD4NoPENCM55zv1SxT5Zh9PJ28nxemiZXwKijZ2Eqd3CvaRzS2af8pGhpw5z5RZp",
  "key25": "4ZfCWDTg8DstneGU24XhTwDKiLVsfETyJRdz4XEn9bEYQdbFGtuZfat8sBqmJj8Bfjxxe9oCQ7WuMLk2Wn3vUdge",
  "key26": "5gMifT9fDugQypy23oU9hJGA7csRHcaAgDuuurqRX4EL7Bqtj5UVwAc7DhKp44SEHmULyGWbVDG38R6MzALrVu8h",
  "key27": "37X6BevZ7MKXCc4bQts9FpTmWZXLLsFZ3oECvPfkshv861e5y1qRHcZsVd9PkvWinhRecUBqhK22M8HcxbZt6EE1",
  "key28": "sCx4Jok4kty9DQC6GY8jRBqb17FE2FGDHG4CaPbRJDfxNmCrWUi59jMx4M63tdspdYxb63TKWcSiAfZAsU3d4Xm",
  "key29": "5UoQMNqZD1wF7kwhuMkhMvf2aymQxox2E8A8xLkr8Z1y3f2qqSFrMvcMgAV6xgnLSqTaN4Kb9mCXT5PhymBWRaF1",
  "key30": "2znqLsXgBpJz17hDVcjXAkGBEjtKYHHVYaNggm5iSqKLokkLunjFczf2FSpaWiTkmJ8j3XqNRutKpG34RyfPfysS",
  "key31": "66vXUUCJWQWjaR6hqzqv7w1cEpSHP6N4CASnvGA5v8kDM6e1mERbMkRsbVXu4m8k4tkh5bFEwbXZi5bD4ZGzDeEx",
  "key32": "3XNmQ5MbyWgqT9TRNfVsR9UDrWH4o2xPZXWYJ2Djsxt5DYvGzfptk81C6QK1MKJTz79AtUGbdFYZ8wQKkRzbjunf",
  "key33": "5xQBcrcFHCDnAywqNBrHgJ4oXyX7P2K1gW5s17AypqrL5bc7spKbedtckUndXM753yKkvCGDUntGvxVdNox48hUc",
  "key34": "5WNAGuLWGmvzhojNoWhi4qWwYQspftXeX4JyKdVfVCAi21ft9ScpS1JpVQv5Sn5Ggnx2G6AabmqXtUe3QAjGiQYF",
  "key35": "5X452oFgAeYfmVyUVvxQSZ6WDLDb86Fi7Win2Xac3UVkyDiMjW8hm8ZTqc7mH6GUJSQubTdW5R6bSD5sRKDv38gK",
  "key36": "tyCe9kt5jGMcngkwCekbjesZekx2tqUR3Qi7C5usL36KtBQEpnBTVPp7oMFuKq8nPhZb37MQJPFsMAUbYb7iCvT",
  "key37": "3MfafKYrwSp39MNgHT9f2myDyEB5r4UdSeoXLZm7hnN5fXK1WDFJf8Tw14Ej5jo7fwjcxTsqrzTq992okG94xr6D",
  "key38": "39QSKxT7Cz3erdRKGFB8BSTsJfR4PAf58987pyPZAKcB9JCKMmer4raWy8FVWpCA7aQVCRT6tTb1H3AoCEU7rzjT",
  "key39": "9NuBsa8PhGLYwcqMVLYCwmEGJA2ogKbgdK6LA68qefe14rU2YvvjdgMZK2JZCq6EkdztSZSv3NjWkjQNNrv6jSK",
  "key40": "4XViqpVjb4yGbo3RecF812Z4zLBaj4dBq8bMVbPWdHHnMScdwtLFayyZK9Z4YcFqN8uYA9BWRCxNR3sc1kvzWNaV",
  "key41": "3ZjDQytii714UxMppFBB2VNREKE5LnkYA74m7e7G6hghvVaBcjqSzRTe45w6EEQMNNL87AN76CZV2rQs3WkHQvmZ",
  "key42": "4tekF4D72WWdN57nQpzPaAmBW8LkXyXWpfWmKQB4by5oERpLWPArYhH5J5wW46WPgms79AS6yviTr3HaASfQcn2f"
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
