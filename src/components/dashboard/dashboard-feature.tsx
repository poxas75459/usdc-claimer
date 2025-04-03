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
    "3BwKyJXdL8SYNQ3UqFDoCut3XJYc9YLdvAhiy64MycLwoKxNZtxyoVFN5VFNUuD8K7RArZdjQn17M3APRRqR8uwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6srHgL7YWyWb8fuy7zXuSephpb1iRuHYhDrDavfpNzN3FVncN6RLh1haDWHSsDnBSqu5ZBEmengumo1naEELSTZ",
  "key1": "489WCiHKitiHA9ou4rDghBEki4ZKz1aRtNiczEohCRxMyULWUwxtqbKUE5kHNTMax3dQac8guwmu6C1mtnHrrkhc",
  "key2": "3XeFWPnU8Bt73D4sQUz5LRLDU5hhDQbLKYEgGmw6Yd59SVTDD1S6e1LVerBD62q28vfjsNee3XeiAKTdibcw1hqG",
  "key3": "YUrXhGVxsaQGBK6KdiLdSW7sT77DN9ZPY9pWuUUWD9AmApkcFdVSLap5PwAEgbSi6sgVdL6Z8vVJguQNrvVcUAp",
  "key4": "31YmKVs7ZQbsgaFegXyWy5ymygTWRcQQiJXjWAJDT3qhL1D3NzUtjj4HWwRf1YMYsZiiUATYrbet7fisuTPqiwFz",
  "key5": "uiwpmvSq2GgKExd5gQQAkP7jS2gaPzqfmtmfXmffq25S8HhuP3gs918KeTjkRoVVF4QQjZjfL2YvaUPmqwwJhns",
  "key6": "2aki2bb6BwDEK4U2t543vASwavAve1RTfFMjWuJhCeJMGee8Rh1haw66vMiwLXfje1ibKfekHdFPNJjKQN6hZsXu",
  "key7": "3HyXkFeDiyYPLJJc7c9N7NTiDLLh6gCsdt6vUqgvXxoAvac81C7QMz5Mghmj7suLWgwsYVm4LJth4Pxmw6wN2EAa",
  "key8": "23yDDNDYLdQmqJd9KJf2JGqU9MDH7tq66Xu19SShB1TjjKDY8kC5SpZkM4YUu58BtfzPtcjnQ75TQBBBCEBaRxKY",
  "key9": "4ZFHrUFvWibL3eqZWUcCgERQ6o3nA8HuWbkuwthNiHEkmZbCrhEGWmtcb6T2GLtJgmPFbpE5XCJDpBdjSg54PMJ7",
  "key10": "3h4yqEwQmM957mGXafNAnaZnZhamQrPxfVvnGz2PpBECdQUmsri8oCDWrGBHxaKVdL2bkVcGEaDH26s9C9aRznR8",
  "key11": "5KZ9hHgxV4iNV58aXo8vxptx9sRKcic15fY6tpHv3Wa9P9EyBU96kMi4guvNJTXwRTfQMaizbPcUB3bTpZS1y1Px",
  "key12": "33StNGe2gWzr4QvH29rLigoUCsdLda34oTvutVtR3dBzfQtEJZTJ6yTq4mVYuyP1D3ctywmeEQqfRyHcTaK6bmxG",
  "key13": "228R7gTt8pBrMXkNwpYW5yCjsiiyWPBcf5DzAjXEUP7gv3mMx6zXf396zsnMVWvUqRsG6CKAQAKKQtv1JkRkFudD",
  "key14": "2a9wSoXs8VxSDz3VoERm4A8q96gsJmDdks15VGjuo1dffHr5W4vmJ4uy72J1yo9kLXfYsbXJf938r8g5uK5o4fZR",
  "key15": "5Mz3cpWuZ6C97x2HTuJxd1EGKUioN6xYiAaYWKJJppxrToNNa29q7vB51MbV1DqKgQsjqRno9iL3oLi2ttUVvBmK",
  "key16": "2d8615FCzeFeFnLPuyToi6NWLBgwyPt6LBqCeKZpS8YQkr6A2SaUHtkWuzLa15iHYi2mKE7xKLmfKfxo81Nw3jfV",
  "key17": "2f53BLeces98e95iHKN3GvbLmuc4CkxraQfC7QJ9sT3pKbp2AS8ECrJm3RMLGsJXYZjhrabqVFsJELrYMxVa7sRS",
  "key18": "3FAvr5tNmuwebzHv2ZRXAKgveaBTsecKkzSR9ZuP6maPhFEtzYMiHW57y11ZwgZq24ciKeVsBQRuzFDfbUz2YCTh",
  "key19": "5ZLTjLbRVP2gPBKmxsSui7tns8nuSsGbekHBmQKqHG4L2p9WggXUtD2NVW1Qs6uLzMab1KC6gZG1GpabhRhRQ2zk",
  "key20": "5XR23aKapKNm3NxGevhgpwChXtXR5CXLtyW8TSrA7JKpZGZ2C9APXhdpCdNau7VqFhcRjKKoYzWDrunS1gLNXaD6",
  "key21": "5JJLHugMAMjuNkKDkrsGinYzaqfc9fpazW2SkWYff68yE8xd2iDTL3k6pH6qpG5qK5oibyrgPNZV5DtNwa4P8aV5",
  "key22": "3hDYDterdDU1oB7U9fQBQp1ZQMauU5ufF5KjSApN8uxr7Z9VG6Vrm5xK15oaXTvV9M8CUzCCU9hwwFAD9KLj315E",
  "key23": "4KK8JDDAD3uXZoqvsvRpJj88bJuCqksMM2CQMj1whF8gieAVfFxs9uqDs9gh5zmsdbxbNX8BEk6QBLvt15JyxkPG",
  "key24": "3KUCJCEY1rRFufquCkuYsRtNwvF3zUA4wsLHGGKpW9VC9HCm7Pfq5S2pJmHdkibCLVjbsrS4fQY9BNa5sjAHQpyJ",
  "key25": "5qVzjmZUwHxAa9iUen2PvdVybgabBq2hEiYBQP3hgZM3qGgK6m3N4vWewj3r1bkuZkHQC6gdbzuTENdLHUiZT2c4",
  "key26": "27yaaJ7VJR7cphson3HEv17XvtPdHjU1i87GtLJocs2QSYRuCC3PngechBQPgY6KD3fmUvrLrnCiV7PmsVUXLHHp",
  "key27": "4nM7EyqjrdswASRP9KShCjBaAuXng45qeF1Ayu5fG11ZbdQes8gZ5Kj65u7fSzWqsbijizxKfUKXnDJRMn2vgxdC",
  "key28": "3USPWMW5MUZads6W9ze2SPKLQYSh9Ywppw3xSZeAKrkb21fuYaTzSMk66XGAcXqZULtVCa5YUyvG6VSnhaGS9YVB",
  "key29": "53PC8eCTYu6fE7gwvy37Y5fXKZq74LbyTzqutQ3rYQZVofGXfFzMuXyMBw5jSdfiZHiQ5S7Mu18QmYh7gJnniiFX",
  "key30": "5XaEs5X3SXzXkMNvDiVdmwjtrdjN7vP9gRr6iZtRjaESA2iUupPy6kqkEx45fASFQy9Hm5hL5Haw1tByYpdxYA6k",
  "key31": "5dVZ9h7nyMzZoKnyVT8pJbYp7yG1S7ekjKNL9RHob3yFwyjShUB3JrAYPDgX6A3TQQL1xakwEkBcoVxX2NnmFGc5",
  "key32": "5APZ4uzwAoSqptQsueHYsX73YrF4nVdHvj8C1UCuK9TA17d6i5tfvRDZaA4AaxgeSSDNv9uhHrBDHVY9A2CGi1j"
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
