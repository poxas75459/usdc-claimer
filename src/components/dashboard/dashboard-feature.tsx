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
    "5VzbwwddzNsfFCjkuQV2G4vYZpZkXexfS4DBsgqkbLam2Y9eJJaBi7WwVJP1eiTzypwsfNvjEwsMAREvtWyF8kGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CohqCC7BHMrxuJn9VaPu5o3q3EcvpbboHFUEVWjePrdn9KCbw7gN1a9PTzMGncAAEJ5dnybenCx8xbLPqAfMNc",
  "key1": "48gA7qGyhqmtzWTBy1az5E74EzS71Cbo5sUzXyxgmUNRqeWnkEbkQW8WiiXiuq7qvirFWLTf67TAWCuKqxhEU7uV",
  "key2": "5KDsGMCDFaPdbrhsWQ1g1hgL2ha6p3tr35ahpQzKHzTFGHBX38fPHqbm7nCxmwPwc2ugpm3UJwyc3CT6cRBLcb7z",
  "key3": "4mvpaLgpngje6fyB8jmoB9gycNArB7mjXh6kCKvMXP5KdMnmfK45Jpvx61ZS2f7wKLkHcnaVXwz6Xv7wk2rCqVZf",
  "key4": "67mTV7fyHtuhp6QQyeEHpTJFQS8XAWBHbw39r6VtMF3sinhngRycQCxZGP7LjzvnxhitLZiN7iB9iJg88KGQF44h",
  "key5": "4TGN9kxHVNtZKiKuh8JT2UMkyi2JWqNxBjKY8xtk2af4cj3oR342CSQcLCBHkY5onURHiksmnvabKzaTJXttngT3",
  "key6": "3KWBRF7pdh7LiwN9R3KzveiYwknkc98bkesfo223CVug5ifRQ72TpQCzs5QTB84QYnmerHLYWEhEAgZSL4jvsw6U",
  "key7": "5X48D8ZbKBsSgkQmHdoEPaXgWmFQe6EvNJq5epppmQ1bQGen1WWWzKsA5QcTFQYkcYHH7QjZXycC3F42uYkjeGj3",
  "key8": "zSWHfcyvhQYPTcCtR39CSKNUK3hrMz8ABBFvd4uibiPnQkWKqg4kyAxuqoMJK4uj2q9XS6sFxPMVfWPyXhCnf7W",
  "key9": "4YDdpuRajmgcJhyAXoLsC2K9a2ejnshAcCD36qpnWWCwHdFdyEPubsjkBSy6CnN6CjdmhvkUN8P1aKWdUrje8Mxt",
  "key10": "5RuM5CaX2f69qYnxUgiv75eRVw6Ce14WVV8bXzZkov5wCuX3TsfSLtf674M9L8cLY9tuRGRdCJyytQARVqietJkM",
  "key11": "3aPm9Nkj4JJBJJvDeHUV1UtH7sEJjeADft3GPXK2YLTuzfSXoA1LC13yTBXXyRPefCDt2FdxZpCF5eM5o3QxszYH",
  "key12": "3Qfdau8RQ7W6SmhH6XpQ17ftGogKQhUq1rwAHmruv9w62KqDMcnpbce7n53MTgzTX41B2YZJVGpxT3rsCY7f3UvC",
  "key13": "2fNmnPgcJk7tPez6eRmyxu26gFr3vTQSK6Yo2xkCw7xoWLHyhg7osPfTQMn787nD1ukbitMkwgtr4CJug5sW4FkB",
  "key14": "5zcNzckSYwJdYcSewnDjatnfaT74vWXWBw4BoiAHJZcch6k38r914ViX5EFkXCv3vF4eEzm9NqW617RCTr5BHPop",
  "key15": "3g4DGkDiaUF7Lh5QoP5ZLBqLaucdXdnng2GRV3fheKTydqowuNWQUiG5ahruN6EdMpHbuv1AbNhv8UoY3VvECjB8",
  "key16": "32C7ErXpJLyym89BgS61wExERw9dcrShJ3MwdqR56SR8BrS1zZeRFTpAntn1VBZZm2x414c1dDZWjoaZkEzobdoP",
  "key17": "2FkPsS6cYT2rexKVCm2mCcQoUDn6eqZeLEZ7dx5jUixaiQkYhaQzEjME2RPSkVX9u365sEfha7SGqmdnnhEcC7cP",
  "key18": "5YP4eiR9ifnGQViYGgcXjNkUzQ7FPaYp7gzbkK3zFkJz9xgSgGFaJETa4MMnwC6UW4SHoSB2LKPDqGtLSwCvcNU5",
  "key19": "3oii5bMaV5Y9vWtjVqf5Dqud6Ek9sd7zB9pBDBacjkzBRMp9C6wGds3SqEMUePX18rAYgNGQQNiLAPmHCR3R1GE6",
  "key20": "5YwPEqgeuRPLTFZLv4HiZkGQHYracJ4KHXBuTvsQdY6RZqg29tZrUH7rVRG3dXAV4VZ6GVWZQHeawaGMnu6j4Uaj",
  "key21": "67fENDbB7XRhM4U1y6mc26VwLXNZGPFPoarcUjRKp7xsh8oREsoYcnM8bLnrEcxXUwhTMUW1fQtPvAsGrQPEjhiC",
  "key22": "4ftmGnsXMWAQ1rP3r4NCuAZZXgVu3TNGRELpXtjtbqGbkGf6A6RtwA31NxbHAimxht4pWXZ9vhLkUdDfUbWscBbQ",
  "key23": "5whMkUKM2Z3vxusdZgndyxepcdzWkPBsmFiphXTxpf6gw3o2uvS7YQjzrut7BkguNsQSmmT33MGKLuAET3TsFPxn",
  "key24": "5gQR3QMfrk2amTEiZxudeANXGFLW64DTnz1rcJP5uGs5PnUwNtLRZZ6wCXiQbWo5NWoKEcUJqRdYZJjvW4wMTfTK",
  "key25": "4ybSBE5KZuh2yo6XUj9C77R1kErMifn1JXU2Qv5kX8FGEbKU6kUBT6Cim5937fSDg8abyhCY5SsfD6vw4pej5Y7V",
  "key26": "3XushN44i5mEK9Cpx4NhF5VPHso3ovqkxKQNsjfkgPwxJXETo8MGSEpepYAPKh1wXvtTvxoeLVZVvBrYbBKoRkRo",
  "key27": "56b3JRSjYoZKLdZmrj1UFRgjEMVeK9UJjcHxMe8dGB6S2eNLkC8gGAHq27voNuPLd3Zadg5cMU6DzXtpDudHxo7B",
  "key28": "5ZbbbypWFguVUShRQSSQRppeRbz4MYrPugGyAau3yLfbuHAjjw2dWvRMUZMNEqscVVypXXB9gpEe2kDbv8dr7muK"
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
