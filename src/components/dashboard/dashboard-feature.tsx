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
    "3gzKLUgB4iupVjY9dCerDj6SA7JbmyEqGZnVxi9diNdAeuL1c3CGxQBrUkCLv5pyCa57gyFmcJkw8cExFu5ShGws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqGJVoYUhjnb69csa4KEVwJWYfhoawhVDnF8GnMy1Lk2hiDduuks8oT9PACwc9sfxKoKDFMcdsmvEPJAsjmWtq5",
  "key1": "5RnXgNm8cR8DUbo4FpSwRmAYgqiUVnQoR8ZT45YGhxPx7dhXiiZf16FBhWrQL6h1T91bLE5wydbotYv4UUWEciyG",
  "key2": "5kHKJm54zNzDk6QunHH6Jjf8WeEwb7J65d5SBz6Gprcw1jKs96EoeVGimJLwHEiUwR6Y7ZWZ4jTZRPAYW6W7Yvch",
  "key3": "33z8C63pRgnWBkUoVZChgvAXkmpWQswJd1Lwwr3pfPZi6oE5QxZNdpXKcQeR4zpew9gYB82cSCJH5dhHj8SnyFBR",
  "key4": "Cbj3q2124VAJMY2iFi6wc9vmvGCAb5khcVgos3HjC5s7qG8Pcv3mZzUiZjkacHRvU5GW722Jk6c6JoPwx3iQYHd",
  "key5": "3MN8X859dr6aVs9SrXN28ShV8K9wqDN2W2NB6Et3D3TZBvzXZaJumtSEGwgujGSjiDF5VZ555uFGkwpGyD91GMqF",
  "key6": "4334oHAEg8BnHAuKdG8Y1ciKncV3cpSj6MyYmJ2Pgosg8SD4J1ZoHfP8YW61BpdSwbAqaySQ5se9YknQucpF7x21",
  "key7": "3W9859VxB5d4cW2aM5rynmjJMCJi341cFvj2pNGriJbE39qEYmx2EaFCHzcHN3adrVtRrQfvYkAZePwEjpZqYzgn",
  "key8": "4zJte1EFt7M3EYb1p6XgujCdKanpu1unCgf232nmP8JVu2c8HTpUjxPzL5eGdv2RKR8bY5uC1CGYFr3sehfCYCQX",
  "key9": "4ZQW7V5gRxarAnTK8bqMJXBr7Jnb7Nzio32bfMphVrdzjqtmnP5Hc1izXp7DT8zrw5VVpP2HsFqPnRep7yr4uDqq",
  "key10": "425CTiUoUrjFySWqtbrsfJUhSpZUK2YXWSym4ECbSk86KZvSYaD9aVwAPT9DNq1qH4TZpjyYhznnZNT5mf5gYNNE",
  "key11": "VJ6w98uYhywTAzZUdpJzfJufURnHf7bKg829pK7kAN7jmfeu1WPJwMwqWLCDTorL1SvhKss3SR6hFoeEovPZnzg",
  "key12": "3zPLQxR7gGtgRpbySMsYjzaBanyuUxrxMWhbjJQXKxaif5MVgtEU2bHyS4gJ1xfLb3aBoyf9tcvD44nb8TBN6DFu",
  "key13": "3RzV3nFojRgqBjjwuDJ4kqRnENsMbP5PmdyAAmMNzM6GA8K9JWur4MZ3kDArgc4EJZPLgRahtbDMxXFJ7sMwLiCT",
  "key14": "3vVjJxnyNzpKDJwpU1a5QdDqpUMuLeMdhoWD8R9C49Ho2szJwBFpVHRKiF5QPuq5pxbDfCXYscjxZ68mx4Yr15Re",
  "key15": "5hov2dPVNr22EwUnCtugVCM69jJzNRtS6zd49oduodZ9NnniSXhXeoKTcYGSZgqdszKs8UZE9tU4zDdrykMcB9fB",
  "key16": "WRFFcivQmNUECg7hAVkjMpNhize8n271kBQkkjF99NyH46mmLFiBkDjZLhsgAeNZiSySmH4dPvuZmxub7hcanbN",
  "key17": "277jCJ6XZHV6ndVUdRTNhbcyEPzWnmeutj6qZJ9Wf8QwDSwcNGbsr2TeMG2pzkX5R1ehuwhP73Tbhxde2YjHTrED",
  "key18": "2j45EL5uL9Q1m9HVVLRqmnkBKhrpo4QttANeS3igq3Y8K6xBG9ksvohDP1YbSHBkyZuFBRLpBY82eSAc1v3BwkKg",
  "key19": "3795mxvP851U92tECKZh5d37jTxJWk8ejGhiowCSn4ghDkDvLosS1QWC6M6n3c9Cm3ycA7cKqNTeLHX2b7KV22KU",
  "key20": "4X3SBZD4xpzpX7Sue2bhWrrW4YWAB8ewmxoLMBX8o7mrQGzvJFwx4NPEUCCxBpAfJZ2XMPGrNjpKPGqZFeeNvxLA",
  "key21": "1gbziU3r8YvefX9a6ga8dfMEFDSk6Xr7SeFkKpXY8xbeyZJyxxhfbPEyE1zHJZbeHqVFaph4uDFMxo8poRYR2wV",
  "key22": "53y6AyScYWKkVMUUAMeKj4Rma6KEtwNbrLctkEaSCS9tJhpGpc8vvWzkBSD4FeQCpLZWSPPngRBdjYQ2MHcTVWiT",
  "key23": "2PRjLUutvLCaCQ5gH7HdgnuacYww4Nh4wR4WhRjWvgmi2tspW53cMx2zVdTJcD2RQTtxKNF1orskdiqXcs2o7uW8",
  "key24": "5p5EaD7Kg9nvYD1FbPdK1tW4nqoHcqcQ2N7RYryFMayRzMyC2iQZNdJJrNYxJCwPHt271sEUY4hHhdMc6V8ZCJ19",
  "key25": "4YoSYt9UKuhYtU9Xotq4Mveh1w8C1QB2DucgUapbfg57shVAL9dziV4fiy4gb1o6BfeaJXiP9MnGKTVN6v9WudCw",
  "key26": "2JaFtztS2pCxw6dv67pxxnxPcBBCuAZzzsEgWFby7Mw125Xb1n4QYZhjmobgctafA3gGmxkoZ6Xg3BskTTKCd7Fa",
  "key27": "4sbEYNPotW7972HqRBUybvqwWiZBxSycGLp4X3k9F2JcDWgnuhkwu4vGHttitttGjnJCAjoHE6SzKTU76eF7T8ht",
  "key28": "5bka7e9rNxCcmy69NVsSZMbLJ29eikvVwNxuk8URNZkSkPZLq2Hb77xck5yArBi8LJikEq8TtsiZHhZc2YnqknqA",
  "key29": "44h9AuXsrjr9KEPc887N6YHhYKvxyCd1m9r6Vqn1f2bk9svWSBPnNcf2U4z5knBdWGPZxvVWcwkKJPe5n94e5WT4",
  "key30": "S5ZEikAzJ2mQTtYFYvFNQbtN9ZkzNaHPzksEmPgLSEshzLk8Gtx8uVuPLsMMs2ZwGJfqHHbRzTbTvXu8J5yZRSc",
  "key31": "3AFugyqVBLQr29BwS8nZRwy8JoUbyUwCABLfDqyAuBC2qzJLq1q1VZLFhcvWEdGXwD5jkn4czaWLSFUu67BCfzp1",
  "key32": "5VMEFovnmcRMThd2LiCFzwAYq42CJPgov82B8yKK2ossN3Qtuca7CvLJAiYFiwxEo7Z2pWqyCkv6eeReodcevzCg",
  "key33": "3GzLLonQjz1C2pvFJBbQyWvvahD4NxFwcnweeFZpW1ZhsznTxv5hXjQZvNzTE9ot3hC6nNxodgeX4UHtfSKN4ZmE",
  "key34": "2v2LRZQ6csERvjoegwNPJB8joLWPCrD9TrnSy6m83j6qDPUV57A1o2reywiWk7Jm37Arg97Z6jyoC1ABfvia5mUH",
  "key35": "2k4DJKHGLkedRAaCxQGFNShkqbLveawq3xNthfTAUSAyTBpMe42Yq3qhQD3EXZWsKjSeLUSqqD3nDtnMiwLVajJa",
  "key36": "2XzBVEZXL9bBSF6xKv3b8WaGLVq1qPGNXe8wWF6EQMYizTYtPxzjvfusEacYRcsPkFM9WeA3rhJgRSL3gUYyPpEf",
  "key37": "57ABS21QsHNZfATvvy8zL2YMrU8tVfLSq3moBRAu2K5DgCTzKG8iH8fk95qXHFvGD9kiczbeMYfBDjY8Tv5n8K3y",
  "key38": "5GxGQMD4GEJnnMxWcBiZ9oN3mBRrJkxX9a1bJAK4YeK9iBApqNKesCVNr2u4zkJ1QgpeUJ7DhJx8ZuDyiquaccCz",
  "key39": "3jK6fYC3iSLwKH5u77MS7VrsYyhtPj8cH5Envf719UinhjGWPrzeRz5rf67dNZDQvDTMSSdtWWEAXUpRbC8yzUyw",
  "key40": "4WKYCaXxUyLjwENnwZRYqibT5uMFHwQHYSyEvSTxUA7NGHLLyfSffY6iutSZwhWBzs4vQSgehtDQ9eRRGk1gTJAF",
  "key41": "4mbdsZMcxtb7tnegNDRJLE8dHb2LbhZrX6eVKtuP81fJJUJXGLeYa5FSLVFB6fxdyW5n5EZ274GvQpSnAmtz4xaz"
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
