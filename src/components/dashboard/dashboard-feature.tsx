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
    "5YGhpzGkYGS2E6zQqbiJudnSpoXT1oRmVjjPxiFN5ePHVGD3sJohi5rER69YGFkLnYxawg8RSs5tqpUm6yuioxjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AdUMJsa5Kj5NHa92Mn2bkjnpyADQuQ3muyEWqxkVo7ZEcc45qmFUXSxXetX9qK4BWzkBCYxgQzWh4UQF5hX6tsM",
  "key1": "5pFudBRkTsQK73wpxQ9TZV23T7E2ejVZqVz1dUkM9U6jpgLtokVJFKGFM28nAiYhba3d3F5dnQQKXh2Y9kYt9roi",
  "key2": "38MiKtHAwrc7UkEZnLAZzLCwctUCUHpHJ9vmwERwgtjdHKEbdc8cQbxouGhf1pJi3sorBBaWRqrjGr3UYUkfp3dg",
  "key3": "x1HqySXxDk9rZPfeEoHWDBjCFt4cHxQXwzAbEb8K6acMJLrqTALEJQTGANDt6Sz57e1M97G54SWPRX8bhhYBGKb",
  "key4": "4TkCkf2RgsHkuk6UsWkvD9TYhaAL2rrDeejyftmjDn1fZuqwRq1sfwtabFgsq7kXvZo1V45NvyVt8g386EQpuS89",
  "key5": "3Qb5MEPRxGQSHZUvY3DCwdjk5vJstoMkUhJsx3PfzUH1acYkLSvAgdgmwyaQZ9PsGDUSjPYFF5UFKmPBog88WGSM",
  "key6": "3vXFjk95LpFMJk2oidCaUTLFMd4n9zLgKRVFs4a6YXnef1zWW6THpsuMFNXvfiXnN6LGiDkieGp7tfzJf62zFEYs",
  "key7": "4AT9UkLTujbzfvSvr9fey8gkuDQtteHFuYrHav1xSLktB2wmVocrGqZ2xyBfYKHe5GiWHZbg7EgVhNyKrgqEVLvU",
  "key8": "46knv2aWrNWz4XX49ayJgVZWrtmtgkHY3qi1NfZSHDuTVgzxVj3RyqRb4zZBASb7c31xtJtEq77N3p2FjvgZMyX8",
  "key9": "3Co6hKkWQ5LyzJJigHTWDwAdEXv6WtgCCYmeJBubutq2iMU83rBsD4jFUU8RVTPa9kAL419VC12jPh9awcgGU2W3",
  "key10": "4qDdwdrRhpbthAYzM1vwdsXDDBRbfWDXNQDtFMgcCFkcswHG8GUmD67UigEs6wXAhtDMsfzdxSpCdKgvr5Y4fHbb",
  "key11": "4vSVdFzKzDPU53YhMuoYMFRyyLJRFGtDKSwg2WsJELkbZuyP9Jaw17CyyvQbfjmsWBgSZG9utnF52SSKsoamJfTX",
  "key12": "2p1WzLsEXN8fziWyjtED96aNmJG8nbz3aQ591526dc83tnvEkLJygi4CwuMuBC4rSf1Z39TBDPBwFGRhv64L3Thr",
  "key13": "5LTykL8CHyoy8ys3U9uWdP11Q93HWVGZ1dpyQ4cSVtateDt8myNR1B3CmZRJGKDxg44uzPtebtzKJPqjAhapBxK4",
  "key14": "MC3iSdjXmU7YDAaVy4iWeHWAkJ1WiUENA5dssewrTwpopRoRTaiUBZiUHLg4r6J3Yyw2BRfmHy3W12wrvzRZhEo",
  "key15": "4yu18NhocwaWXJCNcSjmY3MWeyN3vEe9ALg4Hii8wHWFkYRz45RjqeaoqxkXqMzBRehMwN5cqWLN6oqAuPGDw5Qn",
  "key16": "463q9WU2PnSKZUaA4QChZTR3bSNG9QvV13raGkLnHr2DP2ipKYUFZpm2rj86UK2nk64PdR953tv8fMvDmrHNughf",
  "key17": "3GH24DQxwNByaabMoGQZjf5TtAmEW79eJ3mHgJMtbJJA7wekDifaroYSzgW218EZB9ZhdWWGEseT2CBdZ5fwBcdh",
  "key18": "3Djpcxk1mnELrg3HvBCoEbhCZppJRnXgzckUBUacKQvbPpfRJMTmV5swwE34LfTV7kQoHcRnPdULmgy8Df17VaZ6",
  "key19": "4KFeACcJfP16UGHizLQYDKorCHh49zuntd8Y1GzCGbcnhHmkt7VSPKpRCLK4fMjBkT3FAYLJg5LZz3V84H1Bt8qg",
  "key20": "tEXgDAixH7aBZDoiosznjHvNcMbxxWqQwmMfquh6C2zNWvqeJMcYD9chXRCFRsKZ9X6m2TzwDGjKEvSJy9NKDnu",
  "key21": "5wm52LSDffsFA8odQttmP1EMQ14c6qLUKp73W9ywimqKFRpffkxUXfMpV1Zj2FdhSbRkuahw1nm9jQu9GFFhJfzg",
  "key22": "2QXoN1NkjjoEWPZmKjbCTmHwHgWCoKfuvwAdzv26iStwS87QTp73WJNYbY5excZXUC6onWDxkCV24yTufYCf93Xs",
  "key23": "gF6H4tASr16XUPqYxEPS5Gc4uktkSwcudyKzjBKwjFkz7kDrDAZkRxpVMxRmFhytuAUZpZe1p9UtafqyNZxX1XY",
  "key24": "2PvYu6tRLSMnHheAki7FXkiwPG1wHuhR2GpTDZVo41hWK9jfqXTMTHccZHnNhrvZZRxqyqCBQTwMGmQSiXnLzXLJ",
  "key25": "2ezzod8sxarUAKLuca5LctSJgEdbfzkrBJ7bP5QHKZWYdifMtLsdx8ijrFaYfauJLBd9NAtAJ9HhY87qXkfsShrf",
  "key26": "5H7FZPexYWyPTyee1hd3cVw2FkAFMVi1ijqhjrYViMqHWBiFCZpxcW7Hnt2Gd342wkVxTYBdgicXF7RRpA9T6H1u",
  "key27": "4FGzRjhHBLYh5XHW7rctujopQNPhdDix9ZovRvfdjyHJoAqAjWdDW1sfP4tGcke8m62fuXeEv5EUcXpfPZtJZfgo",
  "key28": "3yfjWWPe9S7mda8sxQhTH8FKzHFRnwxTN7KzTLU1BHUg1Bzv9nxhnH1TrSjHcMyVwQYbzKJcEL8Xnj4HcsPzYF96",
  "key29": "5XhvLVxwBqqccp1WKs94Lgnx9LrdKV7Yxki61dUbfwfzDJtZEAmuHf2WPYEk6xerqZz9b9JL1JZANhU39oJmxpWv",
  "key30": "5bWmeCgJ8Htt9xzn5Zx81moYAeXbkwiduKz6e9nCC26xfXLQFjqtNBwWoN45vF9FpLJy87cEdMQWT4huDDvdd3AP",
  "key31": "HzaAURcm1LKwp78HfyjcAZ32p1Bvv8rYtLCHRJgA92JpRHkN6WVvvqwsemGMhWuJYKELT1D4SbNfE3WvH6MpMMf",
  "key32": "23VdDsDZtkp1z9Ayzreavg3W6A2qpfjJYLTnU941VcPRbfQxeKxfDE8hzH99BdHLChP1QGzfypNjJ4pSPsGUkArP",
  "key33": "5z7zTUj5EWVJM1zo5Jad37FtP8N3cz7T8xoSLmsomVcqoiZaMxskG2CXBhaJ6v1nijhTdH5EJmib5riVsqsV3Lay",
  "key34": "49C2Mnavb1wr7Yz83ztNLbWirgspG2CmQFaCQ7ZWXUGbsqfkYvwYJzVCzS1H5dEsM2R32DkwkRZVziDNVHMyisA9",
  "key35": "21xxQQHRkbq2JYke361eKytJto2jJ2FgQvGwd5CV9FBCaHgf5jNRq7RuVhxbzwHzv1gXjAaeGE8FZr6xYQZebe53",
  "key36": "4DgbmsZoiwJAVtYFb3MGtrgVcE684VVJZWjGXWxMMP74g1nUsnVrcbVFmZBQ661FqkPM751AVNXzsqdjBd3apktj",
  "key37": "6697t5MgDbd1PgBxZoWiPgy61qVyLkujdzWJn5ombyz2V5x31AsB6ytCwBu88ZNZNaaL7mNuCujLxHoPCJZgyeRg"
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
