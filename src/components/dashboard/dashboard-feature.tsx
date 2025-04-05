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
    "4EFYaaBFdwH9VXiNV8AmBRVqXX75Q1Nzug8xrr8At5fWm8DYARq6ETmQTMmaMGNyQgxf546A4krUNUwGmoyoGTRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rds6Fgg9Q1i44WqyeVAr5JzyKsN5HphuErRobLGnr9qqRRZhdDpb8QnM8ZNyaFpiYwA1vN1zCnakMrW539mMv3g",
  "key1": "45dVLH1Z3PQJimG7jd5TB8yKcbcwi2fuJsHYJ5tfNX4XYBdLRUf94wovBZcCkU93qaEiDNndq5wsan4rCo3KH8UZ",
  "key2": "48Qq8AwAJKzp27ngRgFX2SiSUg8jzAAAHg5APyihjn4tg3JS3Mse7v7Wst8MQPEuyntYaN3Ju4tzYUGqY8DDhkwQ",
  "key3": "2S6LtmgcQiM3SzkeAX9unjx5dtVGedexSn1UBWKM3n1kJEf2nkbDRA52uUFiPXCFyiZeu4zdfGZekeE8ingDDEvM",
  "key4": "sodkKeyq2zozgncyvK9zncpDzc1gT6vZf9UEWdeLNnAtdV6BsCsB5gpR8TSmWkxz4MbziAvwusE4ncCQkMvLrRv",
  "key5": "3pvHdHq7u1L3qxLpJ9N1oyFD1rKNX9PTgyvhKm9h2Gngck9YEkh1kMWShLSAz51GchFsTzMXnedhyzRdFTTBMikG",
  "key6": "4fk7xA2AsLgnpNFEBfXvShFruX4EtC9Q56u17ZnR3wnKuCasyupoGt1VoNFbr9c2z1f7npDgW54oTsTY77EWaMhk",
  "key7": "45SoAsTiYKv7AAFPfbbBpE6SptNwPbjydbaSnMPgLsHxSvUBVq7CRYMb5U42Axn22iYn2QAN8414nqAm9oVJzgvi",
  "key8": "4tau6YgVQbDujzd2xrsnSEiZGxMQakBjtXxp8HmmjDfDupEgvSkDufkseELzib2KdXQ5HzYMTd2gjoQo3W9W7x3n",
  "key9": "3JHr1gTSLZA6CFPy44DMYpaYDc24yfPGv5Az3dju8f61tcwkgDchc5GwNfdfFstZFxHsHbpjHb8F6fNhFcUwo4UG",
  "key10": "2wi2ZGLnKkMWCQnzr2mB9pA47WsiwVpghzKUFc7j8TuiZFobempRbFRh3FcuqyZAqu613Yjw8C1NDkMFYWj4yppg",
  "key11": "4FvpAen5uztTYUnHxmj7NhUp1UjE9HZyMdtsXY7AREGEJJx1kLV2Sgsw4xYu1KHwRcDySifEqWyg1bfz6ijruHLA",
  "key12": "57G4EiMZrej4Fw45WHWhT2FZoJoE5dcWUK75YBeGG1XsNsjE2tEMMPWwRJKF3vVYSXiRrNt9FKQMXrZE6kdDWP6",
  "key13": "25vhySsfcthSeLqaozrJE2mihZqJFKkgnZrD9hxNMf9vrN85TL5NvyjP6mUNvEx4kUfpY7zRjra3NPi5kQTNHq9S",
  "key14": "3n15Kb5KkzVc4YvLeA7Yaup5AzZd13x6HjfpBtVmEYq4qtnqsDmGvu6Cp3Y1qQUXZT48Bx9Xk2NaX7iWKBtbAiEC",
  "key15": "2ycX5VhzZBcoH3KWvu8jcypQhMFodaAxGQnwwNKuQ4j62rXQt7SZx316eXB3SPnpySgkY3Bg3p781b6kKejS9hWx",
  "key16": "5BEMoHALfvPbg5m5izFuMVhnw8UaJcTf4QjfmZu2hheNJGPFdKa3VKLAYN5jXXU99cGT3qk5irzHac9EhReunHAQ",
  "key17": "39RF6euSQej7jhZDwA4vky5dqjnuqofVRDRJJWZAvXKt3G9i29tk9DbWRkqBJA7Pj4BhYMFh6UbKPk7YGE8S6qmR",
  "key18": "5UHqKDaXm6A7wtdN2nvxXsgzMUhJLUjQpR1oXP2TkNvu2VAKDJWGdyq3nxRS4D4n1r1qWqzfXDfWRSuhqnsD3b6D",
  "key19": "F2Rv93eyc77PmLKm7cDfBoSR1GDY2K2HXP5BYLMA7BgfXRMdQV7v6a5XK4iiLwNaZGvheybfDmYbW3GBAZqAxo6",
  "key20": "5AFjxbyMsjz453raJEGtgc4CDxSgQjQcj7raZbyJ5VANk3LFcyRwGYFt6Bq8iyJmdbsQhr5G5vqQ86yFzoJuQfu4",
  "key21": "44hhMAQJABzcbrHKB2ygXvDLZBzje7ZPF9PiH8gyf6wNVKLXTwonBPBfA6NhRnocwRDdTpKgxJZGbq4vFzg2p9mc",
  "key22": "3pM9tUgKZwP3ebuFFesM675BTa25LnDmqy9wNepn3tcJPpM7uMCj1kAiGvXMojSdqozn5bed1DGc9G5Dbs8wvmHH",
  "key23": "242qT4LudBvQghyM56Du3TTSJJdJTe35AxTFbbS9Vd4etbQHz2rFzxBV2GpBvhvVi9eYQy5aBXm5jYoczd33YNNU",
  "key24": "ZuCFMjFqGnp3iGchPB49Vw7ppD1f1mHbi1iCbXNSBxM9a6XBWjepfVR8fk2kYRCXgi9B2dAuc8c3zAr95gY1zsC",
  "key25": "3qdBjuqFVbsHSCBFypDJ9QzLjW9qAtKQ4KHFaZyob7rtJDTpdGMHZ9kHJyjWcYaa3ncX8EmaapqoC2aQ6hXaYs6Z",
  "key26": "3Tb6Ktt894RX4QqArptEeqaXfeUi3VyQV6WAm7CYm2kFDMBR6g8ZwPWjabaXdLVrbi4KqUXvERLuc1ccFcDbfizf",
  "key27": "2t3YKcUHDPnuLhJWFUGkufkfWKmuUKS1YbjYqWdSuP8kgEE3PrkUitz628ecPV2QL1TgisGGtLpifCC3F7cfPGZw",
  "key28": "4Jcu2wDTYKdhBpPDbSdyaBGKwJwWwHoDrPkSZuARdegqs4kCX5URy2FC3ZFpLBytHqiGeTEJSctewmvyda9Nt8TD",
  "key29": "3yhCNc7EnxV3LucYvygst2B1kZYmQBQdcnGpxNAFND1PkPeGVUWGGiNbUPceaVufRkmFtQ5ayqZus4sehyXyiaQ1",
  "key30": "Dg2ttBxysW63Qa4JVcG1w5DM5EfUKyBWPZj8sM2tcvTi46jqoB2W2HPowXDTp8Gx757NFvYWzVHezcKjUgpGEDf",
  "key31": "3r8Q8wD9pX1vxaww6GPkrxKkXNNDF22PpKz2NQThcNZDvJ9cxYrPEECLVAktjjAGQdUxfVTgC97MbtQVLYfnAGy1",
  "key32": "5ov7Zk22RaJbKqn7ZcjfN2iN1BkxTGy5wSzUJkAhtPLnzd5uGen8QQmZH3DKZZqZwmj7HyUNBNSgTHh3d1X9tRV2",
  "key33": "67LGZguvDJXhy3srf6LCU3ZP6mXs4xiJEDDo7wQjhVYxDy76DjsyDyvkAx1WYY74iAAVXMqXm1bUPtuS9aRQY1qd",
  "key34": "3SaBxHDw2hPiTLjQQCCAronsHDUFY1dYSKhG9bnVYSH7h6VkBexeC3FL61c9a56RtNMjhqrS3SpiLYVJE6ib1SmY",
  "key35": "4ViGnRakJDVHhYjp79PBiTNVEraTwTTWaABSa5EdqGoLLdXsoa7XwF2H9uY8NBpVvAKX99rTJVNvj7Uzo2AS7XfE",
  "key36": "5hF5pC37CneqrDvgyG5QoSDVRDJ9JuwN2aRftvRcr8PuaBQwSXW9zZ1J37pqbmr8dWGZQ2ZgKgdY6nTwNQ9KoLtu"
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
