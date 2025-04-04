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
    "4YJkr5Zfwm66CXS8vTTfc6s7YpKWC82GBc5q53dV42HDpw4MaDKqzCJqKyD6nEYsM3ttkBHJFQDC6GNnxVZ2f85w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ky7J8dToSPeMXMf7cNk49HatjqSXHzDwf8QmCudVB8HjkFAzG3zKcqx8jb7NJmgLhD3o18EViQ1hSnZEiDTV65K",
  "key1": "2WYgSfhZfD2WMYHZVQboWesKHgadThVDeJE34VdFXvt2br5EsdDvQA8PVvodaatiucghYDejTfNgawoCc1q5js1D",
  "key2": "3yjsmCa7J7GRnes7Hch6q6vtjVcbmZS3UsuHdjAFpjerNivCpPfC8jPdh1YhVQQi1b1n2rJQAbitcdfq5h8D3s93",
  "key3": "4yREK7PeHnXCzMdTe6qUwSxVkR6XNZWFgBqNLUn4YotT69Dw3xU2wui7toPJaRwyAMa9hZuakdEWKaisQxUa1aHZ",
  "key4": "4QXgXoJDd6si2PEUCu6qqigY1ezeBjRiadBQ5ZxxRjq742uDucMeLPBvVtAeU6RgtgigASB9pc4dKaNBoLta3rW1",
  "key5": "2o5adEnsEnA1rg6AY2YZZf7hcsQjgdBwGydovUP42D2JBhQ673Pns7YHQcqfj7EYst8hM7YT87n8SoK6sB3FJv9P",
  "key6": "2mXXmRS122ydEpXa9SGd1gyHFZ1Nb91LgqoMHfeKNkkjbzkScQYtA6TCBVBxfKfKvxaca7zRXa4q9AoEpSZZV6Pz",
  "key7": "455kZahnqpcynWMxyrp5u7fsDgh2A7uRErgAxvunP3R8iYpSQuRWevqYtjPHmv2uVqGKRWngwKTtdAyEAPvaFNg8",
  "key8": "5dFV6bSLGjkL6sfWWmH9TcehPURfeg3sMkGyDAPE5wmpsTxVbPf9UfRaENgM2t8pWp7EXNJivyCjVG7DGEdo76mB",
  "key9": "4q8neXYtu7Zur2SJKZQvVmsJfgg4LwVDeRfNFoRCKWdWnipnFgbeZpQPqPa5q4XSeB87skaeAADzAJG95hMMQC61",
  "key10": "3yZn19T7XNcbAF2CJ3ZnWzB9KgziRR97FECU43L7P4amSYm9AQFB8vU6ASYWnA3RkAxyctq4vAM4ZFP73CwNYhPF",
  "key11": "3UPFJwNsNQcRF3LKW4uFD3ELVARf73r4ZhjAHowfHfk6x4EBjhzhpBjmZ6WvpSxx99DWp49sZdawCCWAqU9SBbhD",
  "key12": "5T5jY6Qcze5Fj7RKAYKEoVxFwn9Bq6vhPE6tF4wRq5hFArYMkd7HH2ukbSAAtPGAk3HNVTrvU36NaUhvUMfA9Kkk",
  "key13": "4ZfJUg2jBC7jznuk6HxL3WttUUgWPxGoncQufS1ydGgGh9v6R4i5vFYzT54z77MEMHySqh1nZb3CaYQKXAsvMbKk",
  "key14": "jQNVRCHTMXwgCkUeEKzQrd79HnzT6iHMzCWuED2pTbpNkRaWm9NoGPtyYur7aZAxQVtFELL6JogWCkXXb7RTFN9",
  "key15": "5Phixp88Mye22aHrkDz5bABx44r1eN68zipioCjJqDDoMXTyDYygL7LgMtU6CQ1BDasY5qPyjWyzf7NDH6QpCJfJ",
  "key16": "KDoMKp5AZ8Aswz5kdLt1wDd3NRUv1q9Y8WQ9GyaFYJ7RzdmT7oDQiQPokDA8Vg61JY5hcQsKF6hhZUeg5RTrXbg",
  "key17": "5qsUnw9aSL6hyqULPBeBpU1TXaPWCZFWhBYMfak1FWfYKkCueMFkqg6oZZtUz1pyrMqVRw48jhVTmKXTzHZ4LqYu",
  "key18": "4sd8fGPLALfKk7GAtLFAPiZSE2C6LUv8dRSVwKkiGupCqrTuvTF4UoaY7nUgK28vqCisPkciF24Qz36HBwTkBY1M",
  "key19": "38PoSBQZrUXzoEZ1SQG8K73eSmfYGtNQ1cLZa8GAiJ1ZRa8gTtXDc3jTz9tNRnRTJDZWeLJcqkLSWG7qQvwQcAZi",
  "key20": "53BqSHfRc6Y4rwwgWsbP7YR5L8xFidikTwu5yri3Phxezq32QgdSAr7rmbUYgXg7uhTRKEackb3Z7C7A6vUS4LMM",
  "key21": "iHZWvfoBcJAdfQigZ3PpFYvNybJzpBN32xGuNBZmHqLuBcqMkcYzpGMqrk3FeFivfxRZC21PdtFY4k2dvv9ibw2",
  "key22": "59MM43sEHwbwgxTeQ4ejzHibkj9Ai6qRuFGDF9HftctNZvbDRNtPye38VMuHzb63TaVEq8g44xaw8qbq96Zkwsx8",
  "key23": "2wWfZLvnYC8tT6NKWB61d6PvAveZBtFcvJTpavPh4yFQef9rs6xW15hMKUTY2J2s9XYpFChcDFMZnTZJKkY4LgA4",
  "key24": "2tv4SMBUStmyxbSSBYsnadiknzgejfAzautPwZAQXyj3Zapik9WZABN28Lb8rCA3RGMQ33hBUTUrUy1ivBzVzyf2",
  "key25": "Kae66CPFnWKAc4i9MJgcwRHUixTcnq5dU4Gpdy1V5rMVeFmS2687g9tGe8AGJtVi7jbaydcBWT5bLo8gxr7L3mi",
  "key26": "34MJjFPMzcy1EBWqYaLRV4PavvnrFgRWU6GQ5Niw3T2E5wXhxr73XvBU6JhgYhsp4CKAD1JdRUySyezhCYzPx6MD",
  "key27": "2viASecSGA6n5ey5DFR6GFQSpJqTQiZqQwq5xR39YN1vyJYziMtq9Z1LJ4Df9HKZaTJc2Xu42hADXws6ePGR7weV",
  "key28": "25fHsCcsqJXRcgKhqWjDLvpo9NqdaaxMw5R7gaE7fVGBftaHXGxotCqtijCi5ZEVPeB8dGbAQLiWiD6BwQx3rapT",
  "key29": "4mmrPkuSevSzN12JKUdRFSBJPjpBAe1T65opUyXm1XwmpXH7DdgEpiXpo9NwfuKKJ9hV8DxAzaHwTock7BHeEvrB",
  "key30": "h78F6AWNJDauZXtck4XunHYLmPNMCx6YAw9qFLob7xRhJP8RU1hkJUdoCETV14vjCEi31UpsPF9DLqDL1QYnddf",
  "key31": "2yTcitw6Vs5YjniAczJu8TNMTbjU6paZCrunNZuvxa67PZYjZz7CQ4N7X6YqxxmXgPUxJvZp89aAEDwr5HCkWPpb",
  "key32": "2WVQofacUJ9wENoAb4ZZareXf677s5U1a1FeZ3WKUrFV2zmdiRgdVbBPyixTVHtQXeevFYtXwo9JqkgsUpqs6kTq",
  "key33": "5LE4D9b8Hzty57iHycpqTrswFJadxrCAjHJZi23HPfDy658JV4LqC4GuZvDp5jreTMdjQLTZo6Trecfb2rvsRQQz",
  "key34": "5mrbyDYKDfyaD8o7mR7hUMnygKuL49Utijw6ht1G4GNWfDZPRTCJcGYuANTSdkUBChkEyRBzmriKVQpdDJCmuYNW",
  "key35": "XPdkmr8vwV51gx932F3QWRyiNKtqwZR6zE6j3pbYCpDWFWN5UQ2jLnGWVfWq4TmjB3Y15yykDbwY4B5qpF9bkfC",
  "key36": "3Y8GSNCkpYFVx4eSgRsoPGbMs4UQXQKCf15LLr14tP2C4od6RNqvNAfU6uh1sChAga8heQ2LTbY2eVoDRRU1FbLJ",
  "key37": "25B8JDSvRy1AoaXNo9R1ZQ32tRm8uJFhYw3y3SLXGBCEy9ckFYAi996hVRafdvbDLxbMSMpxKQD2YWKMHaFpip7N",
  "key38": "2AEjLy3xMb5BPgNMkMJHQYvLa7Xgpm9jDkoNxhXRJcqcMeUwWejHmpGm86NrxEvajytp7CTGGcvDomEjMcvLN6ot",
  "key39": "2amjpdEHFrfr9RV9peJ8Kbnu6vyfQNVLWHSBJjcXXgQSVqbeusssT9fGHdh8azZBT4qAHhKyfVUyiLEd3hVSjTse",
  "key40": "3nHv8mA49G3qSLwcTfpwyoeK8bjxHhk99x6XebdMCxsQ764W5Ngmv2Y4SU2aM9E4jnGjaYAm38Z6QXssVKsx5ahw",
  "key41": "4YxYJvyopjwJUvac4CCnzdPrfMkWUEvFdZCbgTFcq4W2HsVxVjhvQbU6uVLiAX4dWeTDn4i9LbQEBYEC4SddDfYy",
  "key42": "63R4SMTDtC27JN5wRyhM6s3Po6BWYmt6EJcHnKbUccypVezmhXsJrfFeHfsVUnCf88t6nsrLqfymjoxnipjeohoS",
  "key43": "2XZc3UkjxkhA9MXs99LzUGpEgVFc7oLyWBZ3tCBd2PjEqRxjskWegJJ7He6NErahsp3kojGj6fXZMb6k35bCwgSC"
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
