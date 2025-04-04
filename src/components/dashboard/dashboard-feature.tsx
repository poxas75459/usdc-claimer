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
    "f1GxhbNGJHPvptT86wusd9pGqoWX9GwtTdsFZRi2rm5BQNxtDUgSTu3RNm9XtszbvnJoioE51z9Qsjzw6Bd1nh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2s5o5u3pHJYFp25oRVJei541psE1zRzm59FmwV2rVUvqtFd9TDg4fxDsCCNmHTzXQKgk3fXA9GZA5CmF3gwDgj",
  "key1": "2UpzF8AVin1GA3NdJ2ppubj87M4nnmxsGWzbSf9QeoponrvJ8WPLP7qVCHindgdQp3LvyvJj2RXTdVxioHRjw4Tx",
  "key2": "21sjKJgtkG9qUsdcaEevgXRUEFW7VaBuJ9ojYSkM5KNQyqQycE9kRKm1xo99xy7QMtJp7cc2UbhafjQuKJtGaFpz",
  "key3": "2D1cWCHVXLRPx6ADrVF9KSTHa1nViduKsc7SWwTeBMzR8uxzXQNKzZRfXyK4J4R7wqF3Bem1nzJQ5XUkUfuYNyvj",
  "key4": "2LF7kXPxK8ctScZXQzD2kyHxuxwRBSQGCtTGigdjL8ew3bCvCaBvQtX6WKrj7rY4wdt1U4XZVtJk86Zbr8EfaKHv",
  "key5": "n9p91rhetsVuubG6aaXNhkXhsLo641qhQDLJ1xCXgFCZdZAMmXsrixYQAGFr9zY4NsDa1FRrf88v6WNuruf9LKx",
  "key6": "tUTgD6h5nrnm9LJVtMJ1dxjuFJeaj3GZxrByKpsvjqvuWx3SsUvAhjw1zie3ChujJjo86RWr8vNWCv43hxKg8v5",
  "key7": "3LvURZk8MrPVSVZSee8Si9D5q6cwycZonDP7GuTWgeVvn5ouwfjmfYdW7w6kadg4K17NqaAcBqqTH8mKNAUNaoyA",
  "key8": "4bNLxj1JtgBimmAwJCHkfEdXbpL3Rwf2E1EesjQTqrkBhqPoyDZyzsLSWMJQnkTVJzrpsFncucbnyABxd83G3mHu",
  "key9": "2ay3CTVGqQVDjN9Epa6tk2p7fuFD3T6Zqg3Vqb5owvUrrokhpASq4cKnSkd9a2pDXS8oxJmbm9fwWZZq2Kjjd7G5",
  "key10": "zZrthCgLkgKJG78WuMcu4SnucRsjmbbppjFkCDBu637NbLD225HWm4aF8eYnYK2KAT4P6c5UgcLbCiUWqRex5Gh",
  "key11": "3enhpVk9osxTZzNnhx7vmaHx9N3pjmMnP47Kr9y1pfgSt4fmNzpEEUWnswkBXCfgFrV7NmC7mxbJAaPps4K4UwJ5",
  "key12": "2X8fcjryGqd7MD7iirPjJYkF16KBFfgLgb3Usu2TjzkuH8j1L4Hdh4hNriXUc8NjN5HVykeiES16T8WPRi9Nosri",
  "key13": "4J2s16q75awuVfS88yMM8KNSZzeuVLY8aTvHLncAEqkpBSwp4p1EiLEjNvnF8qab1xB9ftzJtSVVp7UGwmdD6i7E",
  "key14": "3Vt5gvcatRubth7RuqYyMnvyPA4WT2hUo75bWvzKu7ZnEMRE7sDWyaLvRkeDmYkuyUpuPJEyUiccYYiCmuKNCX4y",
  "key15": "5uMcdZvkEe753ugwkzYQtAniqodR9Q4uneGWruqNEiH2x7XF9APLuJJgwTNqSHZYG5VZEynW6AgRHjXkXpyNNxA4",
  "key16": "3uQbaNo9XM3o7d1GQc5PgjyA6Es4gJoaJ5Piyg9AHHT5teQYvqx7zVtuiaWEYCPm2bc1RAJNZRZ75gmCv8KxeFLh",
  "key17": "3kdBTCj22zmsZ5yMENSwetMYxpFYGh2bGEDtd5zT3fDtjWqAtYx5aMoZeyNFgfeWwBmxjA69NBjKG2VQa7hhzQQ9",
  "key18": "2YTaW6MmAHrkcsjaWP7hydbeJrUfdauK1Peo5KX4hKkreNJoMfh3Mf1VLq1ME25rZZv5LgAVrNz9tisqw6KqSw1Z",
  "key19": "5EKNg55ymo4M2HxcPXUnDLMdHqpXG7Gb3AwUe79ku6kTEMT4RyjrFdmGGCREAmb3p69fjQ69LBZ2sVJiKNwtpgpb",
  "key20": "2V7w2p15PnuBN2zVbTBBgxCMcEXndtLSZtcmwsbfP6FVMj5YSc3pMTg5zh4ZFuwTCRP548uBpTnj6aWBC86UgbVJ",
  "key21": "3LK2bMtzFpE9cEAJYAbfB6EjyR1s3CHRWvfCSZrL5vPnwk48euPpRxRujUW6hH3bLiBrT1zHu4ZG49qwhpfdmG5c",
  "key22": "2taVHCXmuPTfGcKTbX5wjE9XMZwW9YwCuy2nUDBMQknVzaB8Q2EvRc6HwVTEcs6S443bhdxRC7FHLh8dPjJGsCFn",
  "key23": "pp4sn5twXd4cJMvi7QtLVU6M1zj9DP2Z2EGtSn6wqYnMS4vEQzy34RdEK3he7di7LH6kLE5mxfu1B5FGEmemPQh",
  "key24": "3EUAwZcYdqPp4wRQvYSCAZaGpoWLLzJWudc2ToXdQuaKKx91NyAkcCtN2nwzJHJDenKdiTKkJmURnf4Q5DVZX8Nf",
  "key25": "3o3d5zkpePAjBTGZJDFzK56umkPYnQNxSQc72aFmzvqb1x5tRnTkP7pycrDQi9Rxh1VamVFvn2kZmeXYCmVkffXZ",
  "key26": "5BjXeuPG2HeUqK1v3cZEwuLAmzpiebpvLV2kDLDrHqxSKP5kdwy8MCU9h7Vqwy3p7eEgLDfyZd9r995g8nYab77h",
  "key27": "4ZFQEiZsuzHrdRqZn2J93LUzWm74PGUTP84Sci38EpxFJayHSBFyjK6osxUQas38CrXt23gFXREKzV7SJdKhnU2V",
  "key28": "5PkWzwAmXcDhAmXL7omuTSJGwSH4aWsxQteu2zayQhmkGyaHdHkYcvVReqVwfZ4HNuPBHTbFiXyKM8Cw7we47co2",
  "key29": "4KCkPpLpuhikra5VzRVnzFAHCQAzrSYcgNBciTrZTDJA3MYbVMoKBPYs5f3jNjC6MZiGdAgMLFfKgFF5Kz4WawrU",
  "key30": "4M8GyhvDwMSZ2UjHxn4p33Ms6JrpMrtvJgBMxJ5jRcy51xKaVkEiPz2RmPqhtSBYmFmd2U2gcvXyW8xyrD9wN39g",
  "key31": "42ucbfsgV5b7c8YR1rpnGfdpW4TdPeDawLLsqgREJf85Dd8vigdtan8kTyYjbRu9AQCsFXFw2FEPcVRiL2EmBiQd",
  "key32": "57ei4iQCZ5j25gsaF73C7y3rbdHjaAEb4cyGbUGGYSDhjY7Q6MCFWhWnVDEoq2STZT6TgoDxKrzkqD6cW8Z79JSc",
  "key33": "4aJc6ehqjGWw1Yp8dcFHz7UY2etK1t1odwPnwMckt9j7q6P1znPkyZ13qjioZP8m1ADKehspEPNLyfuoFn4VZDDy",
  "key34": "2EH9DyHgu46Ft9XxZzpf69uvUJ9WgNtenUkR3sDFCg7kkV29anijE1CxEPK1LSQ2vayz7azDRERQmZsH9qcDg2ZW",
  "key35": "5KHpQqTeB28Gvp2KpTBLdj78v3YtBaRGZi9XTpTCw6EBGbUAX6wCSafk85rPGaQu4isfRUYFcuj2yEwT7JqofJdr",
  "key36": "5B8s3VwnK8QpRKKiSxHqU5SLgtzJWzHAZ2RrCQ8CFxEo2YYXuY3CWU5fxBmubJBcjHKh9PihLYrXGuFvEUiFVyZv",
  "key37": "3KZ5L3W4a2R2GmWjScjPy14mTrjGom5L1Phv67ohKAmmWfHnNnfZduUErkguv5A2c7rGfrweFV5MbZJvSkF9txfx",
  "key38": "61riiNBfvyt6Qh57ZPdAmtfb3zHYgEMY17GpqH9L34hCuYb2oGqd8HYmfNcXoLpNWTcABhuKuHotxKfprQCfqSRC",
  "key39": "3Y9YMeQ6TpxiQYsFNCwJfbjAPpp54g6qNo4JG9RKSHSc9ZrEEoMJJ2295bFZB5cz6CCFVsiAmUZx5d4MKhkAUkCW",
  "key40": "XoNFjXgvEonegyBk97DvnfrsqezVY2CPrr1JWPNnqzKQoF2hF1bW8bEVpXEkYDQyNQWuRbFYT7kwB7ELzLxMRUJ",
  "key41": "3werjuaB1yKpTTXvqfBaz5Cjwr1cP4TM9W5hgHMxcrdFWapXAKrJCvB5Wpf8B9AUkivSHshrcF78WvFyqvBXZbGJ",
  "key42": "3dK6gGs5nkm9XHqcxZy5JwRiAcT1HgN1bFMACZVhyraXB7gbupkqPbQVj3UqzcrBEBjcX3GGyJdQDacBQLWVMg2V",
  "key43": "58QUM8L1RmUyivgdgH7ARpNWqSfw1xs9V7ULSoEkhbrEbEWK1jBiGemGAC1WSg25M6e1qsbE2KULydY7irJ6cipZ",
  "key44": "wqBmWGGoMUfJ1oQpBPNTALZgeUrKLuw1XTvQkES8C5u53tGNckR4F8bs5eHTyZNC27RXbpDv2mRghxm1Gv6ghTs"
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
