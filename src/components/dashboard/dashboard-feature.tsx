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
    "51F1BqLySgn7fr8p2ghveicPAW3g7GPYyNjrvVYu6vTyRbbzEciBA9u5oQUWvwRfwz76M6mu5aAv9gE3doxcsdt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p167nU2VjojTtA4eQWCwnbreYZXiy3BBqCunVcfLqWqoQ36n1LFP11GJzMD5vve5jKsJy1XSQtmp7t65rsGmUUJ",
  "key1": "2mBHeUegTFu3wU5uKkS3FBR39EUDTkz1zz66QD4P2jeJwGEMc5hLEdBKJi7jtRt9R5VioZVkSt7sUWNyLbDuqrCh",
  "key2": "2gxAuGhwuDRj7YTT3kRi4wPGUTxwY8bmayzz3RjAvCGcf7DpMJG53bZGKZZnjJ7ubUgEfLNBrSQwQigVYvtR1Szn",
  "key3": "Cw52g5JWSKVuGqoFvpJVbrYXPSBcGdbmUUmtG1pxPey2LB85PKU8p6rpkagGXazhYWU5kEhWaV5PT5Au1iyxzxA",
  "key4": "4z9HQoArVwmixmuTATcqZq8UURVu34ujykEnHv5wy6PWCDvvu2UrqtzgUYCT76XtazBH9zLFCpWqM4upXo8VbMMd",
  "key5": "4NY5cFQqaqfNRr57iydQA3r8Mu515TsFbt1qzzJWC9Hf4G1LagPxDpo7gH4cAT2Az8b8gADJ7TGL3gCwqh7N8nZF",
  "key6": "1243cCq5BVZUnwDRvN36whaSoaRVcxQey24e1jGMQuqcR1UP3ZyDANbeDiATe5ZNHZzensKFA96ewFuC1MEFeoBG",
  "key7": "4b9uQdkfvaWNKgzYqCJWJSR9YoLa436BEFobhw7ujnCGTJeP5miu9b88e2h2ooUkzPUABeERrhANfMqrUpbhFZLX",
  "key8": "5eAPZ8onrw2XtiQeKn8JaazDYhFiBcZjnpnfEmFwsSavrfjv1zTiHznq4Js7N7ZKJsPjyPCcrbGeNfWRsfrxDsrc",
  "key9": "4axVRRQXJxoBBb37EBHCCEmsndio4h9kABPKKq65nAy5Cwezf68ND7RGUjR6usUsvNQ8HjDgYFy8KwfquWErMmcw",
  "key10": "2356UbYsgrXZsuByZbB75M93HbJUk1cUaWC3H11UNTf7oXnaajVJY7rqCvbozaCsBmxSysQ3NpYRqkMncAs3Dnra",
  "key11": "2d1Ay8r6Tdku2heDS41Q9gicBGpiU9EM739ko2CEWiMVnj2fBDLLxaAYFfCDJ4TA2p99wxgE1WTy1LW2j3Li12fi",
  "key12": "3WvoZNLPKds6qogNSsQkVeXqYpdKrFGqrwS3YyXRczVQkXfwiS2TKJt91DMw1dJZ2fcNDcKRvhHovJrEj4tfhLbS",
  "key13": "2wzYiyjaQa2Zh4pHeJXBdRm2qUK9PNbwqNtddZFbDJZXmDRyYVjYH9F8jfLCS9aNQGzCNSNA6pJAZddefN3nf1zR",
  "key14": "3nkiBHgo3pUqqBxrmy5qoUH1Dahxg25iqnzhAM6eCrrn9wP2DZDACTBwd1iDub826H7xNAm3yS5tijg9qFweKqJm",
  "key15": "3udhbxtmPRY2wvvWMQwiKq8oVNbfAQYLBzX1KGxxJhcLKbGTz2EGG1eaGXCVxoeUeDVHMYMwQkBpbWpNVqPtKGR",
  "key16": "1dWyYXUNfYkLds7aPMLA8ZPB2WaHLmz5BkANvv3tVXngugi6ZC7ZVG23fWoALKu3V5mLMq3ixSJbAF5ZPAhcRev",
  "key17": "4udTy8aQxQthR6FtKYhFmWTt7VjL1fLAQ4y625xSw2eyxavzNrYi9iEYSY9wcYA9cQC9tHcfR8zMGDQ2KHdsTZrr",
  "key18": "47LFo1x6R52JQa6TKcQAERx3WjFu3zqe3zfdW6peYuM4qSaXT7q3VGfUhgnpTi1TZ6yosqxTJeyM7VcsMmiQEUMr",
  "key19": "3idU6p3RgdP43hYuyxaNpeEWt5k6x7UmfQBqM9v52bikXxsakqmFtgb4q7ynpCfJFzCjtaiQNtqTd8c6pf7Mk2RD",
  "key20": "3hknewo1rouEwe9DjpQYfJjuWUCTvexbsq2MBAJKmT84C6yDA3Ez53rKTgb7rjEGHTkwZfLZugSAADG7bgb5Rsc8",
  "key21": "ywh6uH8m2wCFurbymgDQYMybwh1ZRUzWX3rXymMJnT4jDYCownS4ocwUeLD8AmkahNYbkRZCuVfZkcsvziBs1PA",
  "key22": "tbqTQCccRSwhXEKREMXR2i2rX889bmE9vBBBVbpcBUdVrCpfpkDzicVCmQSogSW39aZzN83jaAzuhTcDYRiwY5G",
  "key23": "3oW3n5byu2eDiRVeSiK2UN89KBQSN4T9Pbv3kUwNKRTAHHNh1SJGFDwBfxT7uhuoSo3M3BKmBVz1KNGa945nN9Eg",
  "key24": "4P7pWGePMcPzLjoHEzB7JcttDA69j8dt6HR93k5Qsh3mXbY8zmywwky8ABRAE5WxS6b8VW4rKjCW11woH9nA4Y8t",
  "key25": "DFyFX11DGEsZU3SvRKyKPWCCNaWhgYyQTcxjBzbj5ve5DFkS6XkaSFi52Aej1iJS3U6RD6phEUD51Zrn36x9RjX",
  "key26": "4d7MZBgzJ62EHD7FudCLKxrnvKNoGxp91WajGJpJLe9ufGSGrDufuWRPvpNSUUq1cYcxLQgiGJ6TzSi8kDyfE387",
  "key27": "LefizC3fa7GZ2ZVutaWbGQxKQTaQGu99viUVEWPWmiMmyDXekS8y766bevPUx4bJwpBqTZKZytoqy18EHpanhjt",
  "key28": "5KhJ68aTtHr32qhnYun51GpRv9KFoVtSTw4K7jYQ9nHuK6ajbcKRcmgEzX3tEP69qgzLPns1uV5Hr2iaoGFugvZA",
  "key29": "3X1q2okF5SRmr61yGRWgSPNKmcgYirTNb9Lij2UhvxusR8Y2CBdUTvzqHzCgPDsHhiDKJCW46waCzSmXnitENi1X",
  "key30": "2RKK4G163sVYUHUnk2QdAhKkN8E6AVDrRSy3GjK6TrLUxQoLsHiy3RqmxahLurmXsTNrTqybG6B5a3g97w8dPGGj",
  "key31": "5JrXxYC98cTifkg93xZdN8ntqzaZCQsU3rJWG6AmazySNcgUkWYpg55scEEExd1yS6qRL7Ls4bSW5yah1wGEz6mw",
  "key32": "4Mb3RCxroeERMk1qVsQDuFBR8TW4yBJKhqurwxCUjbhPsTHimCKHFJCU7bL5m89vb54tVLqVG9UraMRmHnasai8u",
  "key33": "qvBFqx1W14P3f34emXZN4cP6YFc1rkzBWXgqPypagC3dm3MfMy28xsh1UnebyvvXSYcxGf3ks3owF6DQ41krB69",
  "key34": "67PUCBEXPfJwGBaLvFFRMrxCNS12dxW6oeNKTfjEEcA5uFn4xZ9Xb1bS214wuZGfcJQJnRotJBp5vaTXF28Eq6H9",
  "key35": "4BJUsD3HDidGjK34ufa8F7VV46KasfrxZHVWGMC4s15h12Z1Vyajo9Hg9qbDCnt38Aw4gbbBe8X7nSdGh7Guw98D",
  "key36": "MMq2or43xi2Qb4NLchfjv2hGrPqixe53JNoPXDHKFhjpWZZDa9wERnCQbrf2ofpgweHDvzxytGeTeKU584Skr3C",
  "key37": "5iPpRaHzJiiAMrMNnLhDkpTGJbrHoNj7aV5PQHhZtkSayFXD6NxNp8VsDyZ1zLvCCS6udT8xVYkTH19Ab1dBThx",
  "key38": "66Lye5atEG8vfZcQDFES36w31BQz3H2cp8wBqAey8kDhDDbn79WsaFvUwEXzKzLEAy88mcgBWZN9gF7CsnwzfNyF",
  "key39": "2QR48kmrWhTPpCvxdDdvqQHhXoN9SGFs76tzJDVqe3w9NozmTEcjVzi2HrM76gqs7uDTEqqcYhK8KGLs4gd2M2TE"
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
