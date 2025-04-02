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
    "rcdyf5G24nDytDzUqZMbhS1xwLe5xcXCqdkATox5bVH5R5A1cNPff6AhGHxgbYeDtQ46tixUmzae2dF8hkxxhTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFig6LbUCbDvV9qtkNRSgUA5LTqUAZpRLLFrWSFQ2SE8kbNqMNC1QGgDKXHfZYLJegNFbnjo6NR45jHD9zTdUae",
  "key1": "4roy2hBHZHoJU2ax3zJsw27PZv51TpNzec9wdMdVmHXYiK6mnDmDVwy2u85cz7uqPB6MQVBb86ak62HZxiZoFQib",
  "key2": "54isEw1sAHuWQiyZqRygoPVLByBfDoTrG8wao8SUWwuNC8KDRmeL7XcxpA2YofcMTJ1BP47hBnn53kTnSMT7HwW5",
  "key3": "s3B6BDLocNHkDR32HXmqDgLxazbVwCpP2BNyNEEeq7zEmEPchBMUMCsmvrnjrznVd8kkcjmyAuyM1ip7b2wfXrV",
  "key4": "X4QFo2XtraNmKb9wG5HLdqjbQuPjRbqzs9wXbFAch4c5Vuk5YdmNRgjQE3torjf4rGRwT2oDN4UaLSWm4KV8EER",
  "key5": "5Q1m7qFHRpkMGuvLZ7xBewAH88t7M1gJowhhj8KVeTMv11HZ3YrBXYqHkkVFH1ySEL983xNCE5NPwNfH7czdZgMf",
  "key6": "2vG3xRJU6wJ9ePSdJSaspaNmzVWeDEoxy8othCfmCR6H4PhYUXZYhJJh2DuYiSFaPSprgqLwDAoUYGBqdRba6f1t",
  "key7": "2sQ6QzT81zd4HrKdq4M7iSu1MGKfcMgJTnUiK6LVWHk6gq2uedm2CdsLeQ3yYZkBQEEoQkxtqYj21RRouUebwGkq",
  "key8": "5JhfYyLHJAnkejyDoZ1k6oeoppVo23fQuvWguyQ9Cp2eysufq3v2JpD2w1g88USAoPdcZstazuaFWepdeF5V5QmF",
  "key9": "3QzbrqqgLxoVUNCJzVxhQnFnnhNgcijgpTbYyHiNMV9yb7AzEE7vFGsTBJMSy1h8yVHGkQ2kRuxzc4ckvP5mtZQp",
  "key10": "5HBEKRY7bskxejLwJj6i145Bu9wpxM3MuK3tzdPa5CfWJM2HwcqTXDzn7d9jkxDRKuGK38L7GsGWy9PX3hQck4Tg",
  "key11": "bNaivntsaDPb2Y513XLhE5WSrg7rPk2j1yGTowWWfgipJaPNjvxAtNbivuLec6fHRsds2E7PYG91iqLL4qWTpUG",
  "key12": "1HS6T9QXnwZeFWfycXBJVHRkod4QdGm7Kbupt1nDm5ZJEVPzAX3Gawu6S2wJUcvmnm31ejJ9tiyZBvuUJ6UVJ93",
  "key13": "3LRxExEFGgFS2wCyYxg3dRGH88nyVAjDsuFdcekncL8xCj5AF5RgeF4ReihSgYooyqES2xuuSXKcgiAu6iXSgJFx",
  "key14": "tKiUN1PLKPJyTShVtRoYaVMneYx2Ds6KPVvYABLkf25via2zUnfycPW5zNNR95YGJqVCkunnuf7T47YbzdnA8AE",
  "key15": "yQJxihSCJbHJT6ii7cYuXbgwiQARzpiUH2uQd8UjyB2xp51Y5ZPDZHhAQcaKbXUFxjDrqZCH3WcYXQEVDkGduHd",
  "key16": "586w3nwBQgUjWuGruVciuHQqoNWeyfpvXqztsUtKdzs5thwiv49Z4pdoSwDKLdsjs7jCkRUHZu4CH9dGLwreZPBq",
  "key17": "2cbwg481KujSPnA6qFtExdLGqWR3yipj388bEGPmvVMkSHTJgbs1nuujQcaS2QgUbVgHk3xrurKqXnHS7F8Myj4G",
  "key18": "3RgKT7W87dvEuVG8co4vBaGpec5MEnedDJA49N4CLH8cB7bNsi9Msggk4W8aYkArADu85meMJ5jMXQf4LddtnrPM",
  "key19": "4oQ8u418STFqoQN55hNMfsgbneQc2WeCZaX1SSe9vyS5pkbVg3YpMnbZsxHngBsPRCifrYyLpBQj9cEegZwBk9ii",
  "key20": "4D7xg3zmDEEHmBX5D4TZcM4uxHpNWfGDXUzEdvwtXzoGxfmECvhWzXSy1gb9nW77NTT9UCUURiUA1ng31fnYbEzM",
  "key21": "49vrnB4Hya98yuuXoNJGhwMHu9hh3tDNmd4vsE6WVnEXSzwbX9Jhbx5MeqDwHjM8DQKMy9A4CFRZTihpBZsm5rDy",
  "key22": "4dZg9HMAaMg3WCu9Gndf9dS7HEupUc5kdG9rr45s8EjDPYDLwQgfoYjQ2RYXNKXXF7s7gBcyS959dfQKa3WCbbat",
  "key23": "Bg5LFSNs7rLxWJDCDDo88vQW2oH3GvbefvN7zM3nmdkG3ZKeENBLBs9YPC1LPeAhJqGW9C5Becg7h87vxhZ6BQh",
  "key24": "3PiPm9jeqXMn7C9hG6ppykFKp8oCkPosFukRAAABreZkFa2KQMgyk899kDXPKbfxiVmCroTX9R3WkrSZJwBXiUfp",
  "key25": "2qRXhJa6B2tQmdsUL4s71JLNPfcLYepygN9N4gnhQ1RRTcinaGCJPRCKTe4prYfYYWSYP4JmLz6MEBN3swSzUgCa",
  "key26": "b8T8R8iFYM9pzV8nBiu4EvmNTPRDyp1eeQX9uvZoDyU2NoHMMy7kKM3wZq7NfQrx21vMQyGqUkUa8YZqWduGHdt",
  "key27": "4piLE4UEHqsWZtUSjccD4WdFNL3FhPbtENmWxjuLyWq66RUDExJn2tQ8wDWhqJ3xotaJ6oaUqpPX3HnwE4gvjQFg",
  "key28": "5wL33hadsbvhuUAkjU5AKS3oeCDW6iEZs1raLk6vowJ1HkVR3JUgzDcaVAHS8oEhSi3QyJxAL8bg2sDjr5frsfp4",
  "key29": "4Q8uteatpWxhzG9vrdghaRJyhp6Pjk2cdDe3W5fQwr2rbHxSxBgh69JcLN7vZsEp8EXSeT2ZbHN5k2z8UN3vFp8m",
  "key30": "5K2knoHNFdBbdFRvMXVvwzBQ36Tay9oXPJpq1wmwXwfTuvKKVVd9yXvCz2EKJzLF64GhYhMf23U9m7Wx1mF6pr7V",
  "key31": "3LvBEcp67kxr1Mxq3ZKu6DuL3SMBuAJG2AWT7fibQyo49fEp8pfCJocWDdZ7su5NDPpWs3inaQDbBPzoEyh59oVz",
  "key32": "4NtftGcGq8B5bEY3o49zY3HT1rTMSQu8eQCHVuKJEyb9y8zb7b9QYhF7dy5kxwaTn4w7uUieH8yKSRsPwvrAoTf",
  "key33": "E6nUpTtsuKsfNXzvKRngKkZho1PXFV4AtQC2Qdgm9LeVgvvAXXfpsfeLKWTiebs8ZiWfhwcWe35GVaHsVaA8GDK",
  "key34": "4neREYP1p3VQ2ZwVYTwxrkUSFp1rSLtfEcTy1rKK62ZXrsaTQPPrnfZ72eWNUnQWb1P616VSzK1MbnMo73Mq8zBf",
  "key35": "4k7r2qEL8NcZFo5BtMKJ9uBqT1RMfTpizk64HnGq5aVHqBJ1mTxWvk7YSgiwpvBjo9BkHAfLsGXtCMfFvZsYB4xo",
  "key36": "5cABCWLP7uHzabbqvAqLeQcdjtvUMotMdquTFWfAS7knhP9VTXiWBnaJCpcRsjunzvSEnDmFWXCw6q686XxYpsJY",
  "key37": "2Emf3CnaghSufDDw2A1nXdaxgL9AreeANWGo96Q913AsbWsNGx5vPYDGNdDXDfnxyDeTHjNZzvoFQEyxcsRSMASj",
  "key38": "3VvqmdYHFn3QWSf9DFDh97yaMoTNBDskK6fM4vyAKMMhnDSX9UjTuKxZtZ6qYkwEUxV6t6UsjPoSwEs95m5nBo4t",
  "key39": "2wUdkpQtaR7rhZHYsoAAi8F9kxRrS5FDouv6FE5AKcyWhw5Jdw2JKGbXUWtFSeGa2ULUoQGfPrCMsqRjkfL2dnYm",
  "key40": "5b5fWgviY1mUpsf54z8ubKtYLYu28zVZCuZSCrGLrhe84pgPSxChcSfHgBytFsmSfm4GbS5ZNHufFX2r4Ez7qZgC",
  "key41": "4ESZ1z65DPckmeKpvzucyKaCNqtqKPTBMjzEe3CSioggHrb3nFWaLCeVWMRSSAtGbAwH1tmTuv6Lkaa2dy2twpqo",
  "key42": "4fZKyJ181Wx3BefXgJfvNn4t1Qbhw45rWRSngqnnxDvZsHKeCcQf1W4UEfDPvqK8vLtCwE611x1pf9WU3gFyVWm9"
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
