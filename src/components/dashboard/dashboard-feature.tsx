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
    "32LF1CGHRVsTnjvpSou4tX43LoeZQUDsX7QRB6YGusUrG3BwYYxYLUkz1HLCzXoxLP4bnBQxScNPTpE1hfnocwfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kfSPfARw6am1RqJSNkUM9oiVwF31NGPK5gFVLFUb9gqZa1JHqAAvGXoHhiT7urfhnedpZvRR7G2qkj5KZarWK",
  "key1": "4K5K6XbpP7p4YPCmN2S8pHxeKuBbXxGvjDAHhTXvgrB5Y4DyscZmeWx8SebuAJvzW8HhPmJTx4khUuAetynYRUbC",
  "key2": "3k2AsRbzH8PrnnGP9fRQASgLjdhbzsmy15K3136jctcMLXqAYSscfRpT7TRFbNnQKPXauqHGpdLnG3SDL5w6h9ap",
  "key3": "4EydrV2c6qhPqr9HhwDZAFk4tG5iNj9Q2VrLVyvjB6kZCyqLZo6MQbjtZRqRBu2e62ETFw3fgQzY4fChowep1dtm",
  "key4": "3GxFJ82MzFbyKjsuKB9kBmX9t4YcACR5XVYmEUngncvEjWCQ5LCx4YPKw1n1oeu8iSUdmJrCVgkvqqWi3xzYDcdp",
  "key5": "3bUEyix4BmbZFWP9gFyuGiEjWTgrga2c44Mdj5avCcyG8SC7KxzEhQQV4KwJSNz5HrkFaaNMXewFCeExHnjn5X8b",
  "key6": "3QqWZESocstM3DA9vQ9FCdSN7jmWW8U7Gsi45Xcz94qxuZrZaGuZa7vTxrSg5ZUXJpwDU9F6XyJ2mfLMbnXNYcYm",
  "key7": "3ApLgw4BHgmbZQT3ionhJp9yGqZ8W2HaaMD9V5P3YZhXBG1M4VY4MVvGSAf3EVqpB8cbEY82CiRWj2TnyKjLa5r3",
  "key8": "3sbsiqncqAqUuPVAKNrFr9CTQiDeVwrKcdVtKiWJ1eg4FyaD8U8AjzBGXUDm45UFmVgc7cVYAi7gbwPZmGLpnpgH",
  "key9": "4W3keuRyvnSDRPjPzL6jBbZ2Z6zQTtQnLZWB6iJKoXF9m1B9LrZcRGSEN1pqT2iLj24mcBBC18sLnMLzbvQhbAeC",
  "key10": "5RURfkPXGXZ3CS4dSj8nHnqbEmqXDJrc9NF5t5qHVsVu8WMhfKr9LBZPBmWVgCHCeqK2BkN5vsofDsnjGE79nqJM",
  "key11": "55oHexvej1o2GidsQaK9uXBZ1CgR4UJHqMWtKFgUzoSURYae5BD13vmw8a8VW35gjeKecg7caQt8DJQwDRPdr4s8",
  "key12": "4LNcP3zoqqzEKVpAQstM9mKRSZtSVhHqPbPJyeKQnHxJLP9Xw5fV6URF9PJeAnCvYxjojed4kqGMwXfFjSkyueKZ",
  "key13": "zHUUZNSrsU6MynhbkvddNS3RwTMzvQ7cFragD5iduwZMeBX2itqGP39BA5abu3W8MEHTkMUDbNvLus4G9xYvaNP",
  "key14": "4AC8bttib2hb4hYrnLbDSwMmcRc588t23DTAK6PbPaArpwaoGPnUXBwxJLs4wHQuV7kyR2Mt9RvJHw3CgfWk3Be4",
  "key15": "3cVQyXfsHfMiUtEeV9p3DhwA51GTyPs1p3UEnJZiJiUjk9LUkcBSQ6kmwZUiTUmjuEn4Vn8wcGMNeKsSofeCubUX",
  "key16": "3JbocwRVa8DU1qPY541uctPWTcJDxJJPkkDWZ7W3MtXDCj5pj5aiG78F4VQhRKFfoMfoc29EswfyAEYo24mYnk8",
  "key17": "3THHaDdhXr7EXymCQ2j29d3ZzNXRvFsAN2ZXmPakD18UjZv2xYZEvExnLsqnvD3M8n3vtbZGdQBx22eSTGvo6W6u",
  "key18": "3zu5jhqd5H7tMiE3PhMUbaaUGYgYSyydj89xC9maSmJTiFXYkuA3RA1MJJTFxwsYBc9zDWDHxpcNf8ofHdBe8nkb",
  "key19": "2jxvYokdSbzjyeqMtZjWvDxWcjV4RqEuyQGrLVEiacgqnSURpJPTZmBwmNzxVKEGWmhrrBHCEGKhHJuPRDLxNQjq",
  "key20": "5DCCrhvwZxKDpEszNGwXPeDU4zSU7AUQrhH47qmgwQ29GFcpzb74NyWgeKSsz8RNnvyqp3neiJNaKRmPDZLStS4u",
  "key21": "5x4xa3PMxzfsFeTuU51Y9rwpvUJ2hfN5DWXjYWfT4JEVWdnTXKik2MZGvaLLcUM1cBRnQVAoC7YGLd9ftVBhggpH",
  "key22": "Zef1gRG8834KPHH3AJw9sUZL2P8yv8iECppUrKBKKCaRCU7MsPoo4Tc5qxacWHuXjFknSva6PtUv8tZ93X96HRd",
  "key23": "KsYkQf89TypCY6UfCHY7KfaETxvt3dCNvXvDWyfSBvvXyPHeX91tZ8fTWUNBp63mmFy2e1z4nvLrRz51TSyuzdM",
  "key24": "3ohxiB6Wy3wDHYRYMHK73xoqUCf3nkhVNsTBXXf9ZUBTEREkiCkmUKMvDu3zEcZX3gqQL5A1cRgZRVJN3w5R29n",
  "key25": "67CU6U6cVRPP3fXTEbUwdF1Cc8bV33sdZBDXa74L2X4trnSrPevQD3soVepVEAkNzWbYh9nEv8An8ypUPqNowTD2",
  "key26": "2ETjhW6ASuG8XWiWZdk5M47fSkDDpg5ygUsLnMzUrVd6333XxLGp47MzxRy7oXCHfECRcvqqZ9o8WKcUzkQSKp3G",
  "key27": "iqVvrdVJjGmXFyhKRpa8SZ8rhboti11G7BXybaSF6DApBLYNApL2yqF23fssEvZo9zwxHLbSKDuwjPCumWnrAEK",
  "key28": "3vvhNQUFoERCZZcVJgMrAXJuqEUEvb9ijrybQnjHLWyoBq8Hg9VvMCe9qDnjeFRpqP9XvobQCGLqrhSqQpVJVdnv",
  "key29": "54Ejtcfc7Gsbiwb8A3BXz8ty4sB5PGf7LYv7s46auTSnreBJgNQB4mAUxxkiZDbGzPFVWbrs1StopPMC7y81amXc",
  "key30": "2FtqXH9K71cxwnBsPdyz1q6UXF3xG7z6XX2oA4fM52WYvospmwTgHy2GqKaDXyvkTBa14ifjvHuYpxLiSGLt4Hpw",
  "key31": "MXPPQsr7FQEF36EWseX7HyoKfy1uGJx9G5Ua1U8vE7cCQjsAX7L31DJBB6aQDAMyDwkL7M9wdTgoagLfaT4Xbsb",
  "key32": "2y2p2tUSivJx8T3bwsVrfTk3Xg4LJAdg2nfuP7pLNUSTbpwWxx8wJZ2Fc6iR5bd3kQ7VezquQUbpphUPfEnRMQXq"
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
