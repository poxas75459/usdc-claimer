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
    "9kqNYnHEZ29xpQCuc1JN53XHhc8HRMJTy7Ees3Et7apjWZmjq38ncMKajWieApXtX8boPwHiM4A6zS1Nk3AYzff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58durMpZsEaaqyuFGuMYyrZhikBDtEdP8bWcpkunTKHu1eU3uk5WH29hia9zTS3gLVSwnwiQhbBnMWBvVwjKq9Sj",
  "key1": "5S6SrP3ZYspGnt2CFY9BVfg3436odxQt7fQAGdjyJbsQuTK6oH6NnsZeiKx8puj819KbdJo6dbKHM24wSMW1nzUL",
  "key2": "5QHXMngTgUvSbi7W76XnwwekmPEAobmQPsdvNmCaqfKB1wz9ivz83K5rme7i4sRski7LwoJT9AK2reUPn8rHv1tz",
  "key3": "3KFWsZnsBJXW3Mozita147dySQi3hyJB9f8pzV1nDWxso35ghR9NsmcsgP6w5Zs4br2LAPeAPrCXeuazus2s6Sg8",
  "key4": "566GF8EgqGJV9gY3zpAtSR5HYucBUW9Rt1W9CnwSPbmTxyCQj45icEWuoA25WCfJYRiXbCBfJ6X1ygSfG5Eg79qi",
  "key5": "5NEomXfqVVrdfoPnrv8DipmVvA38vJ9jwQM6kq4gCXasw4wr7kpEYvXc8BZxJkvpweM4Lv2Jy4YwVREFoMNW4g1a",
  "key6": "2GcRkDWoz7aecpExDt2wxq2CHAn96BU3LcHi9g5VkwWrNZzgyxaJMjYCNgnma1ZTBLcfC1aUZoafEHrC43fx5mLn",
  "key7": "SQCMfBkco6XSwQrJzDvdkhpJTnGfW9HE26griVV4USzCcnYbwUcFL4hWicftE8y8TkkRp787DFFjw7Gdj4zUFzw",
  "key8": "2EvbPMBvuX3wMxXeNhtYHF4sNjcrdqzCEbGapu5MzkgKc2UMMFhjuS2tuN57W65bGUznRBZ3AktphCMhd2rcULts",
  "key9": "4EdBh1YgpaaDwGoo7pcsYvSBWeD2VE42EJumPEav6txfTDmxwrFCNuTJCeijrpXUW3tUNaZBc3Q1tmxB5RxEVP3j",
  "key10": "2gTRUBiVVvcDvQyM1FMd9hBBLQpg6WMe611qbn2sH5RUCuXsoCLmtMbrVd42W6VNbM2Gc3zozVe4FZSrYTpjoCCe",
  "key11": "osezXM2MQeeuShcqm6tvpFvL8GzEx8fWrJEiExCM9wnDKP8hz7JDe3HW7oLQy1v1Fjf44T6ra7rdBF2h1qY9438",
  "key12": "53sBpoFLrbAQiQghH7ssyj65i8tCtLQYLJfCBzxbdvSsyaoCUEY7D2Cqxr7ARcz1NQaUMsu4dDbPFgb6useDPAvf",
  "key13": "4eD9LtymJdnNQfHrZxT6n7eDAGgH5gU9axQfWyyfAXNsSPuQYMNQ7j6o5275TshkYpWQZMLUGzzfUTbhMQR5ZQTz",
  "key14": "3YkfLrL9DWER9ThfHSKP23vP3gWiTDSxTcRqzp6TTXd8x3qHwGJ5TP1Gfz1vXy8VSWshzg2HUUfju6ZD8a3GARHh",
  "key15": "DFgUFaH33UD8H3KaNk5scb5HbQvksmvBFU2fZT3Uj8KBnMbyfjLHzsFND2WXGZb56sE1na19XsrKBCo7Mpiz44T",
  "key16": "VAXXVKMw9WCTRZMPxSadkAoDMoohmnTjRwpnXxKcXov2YwRwtxbijoXEFg12tAwmXjn2aJiXg9rHh5xR5HSrCf3",
  "key17": "3oTVztWkX3NGdqrV4L164si2zcvPVpRqhR4Q6EkHZ5B4qNEyPaeiNxN6fqTm7rHpyRLw8Dm8ayHWxhknkpsbWSU5",
  "key18": "4gQskBdo7bRMTBjVJo5L5aekVnZfaCFLpfe2STf5stbsceUAorfdhUJ6JDqFSKTmu9mujqyb5P99xCTj6RHzdEkx",
  "key19": "3WAm2biJ8Mn9sdJDt1expz3er7mxALYTzxhXTVtwCtGxKAnN8oMEQNuWfbsxKQwXrGrUandswbivTwTBMYD8g5R1",
  "key20": "4HGBXgsFpUhWgDikfgj5dqehg6RhkWVFjWXj2AiqeiQNhhuDZuraC8aHJwoH8VVfgYKDtgaza2VGJPyruH4bqjNS",
  "key21": "3E2jFPEJKPTnJExc6BVHv5F1V5ss5z3PC74nRthjnT5XFsQAh8dGJrndRXPYGPfVA1LNTZsE6SoHqTFmhvfki4kS",
  "key22": "5mzESyfJPLxd6c974u6vyPpEjUzvQYhzXmjYHd4qyMGa7GwGi8EjVhgHpvAAHmsB4JdfY5R53LiPsHub3WjCxXm3",
  "key23": "49yLQXU3q4x6PPzxqLwuk6z2rnZgBLy93qHrRAHC58TtjgpL9UTPQbEyLvqBaCWoyS1STH2yjVXxCG5LNMCFdY1e",
  "key24": "33XK4G6vqhc4zR17bpdip2ttUbaJwtvhyrYyHrHtDVRASi1Ba273CvMTB6b8inDLZ8ZXtAW1wNHtxFpPfVfQMYmR",
  "key25": "3Xq7jakU3dSjpZvBnNZ2znQFXE1uUUBcNjT89ySZRa844kf2rcRxN4vYBJ974VL19Cm2k5TWvRWgQ3xHfNMPf6hS",
  "key26": "4abhfkD9uAuvQWsSraN9fzsFHch696jpj3aNweVcFHyWe7zDKrAMZoonanZUAWXcfMnJesCpJoCqTXwBgX8fDs5e",
  "key27": "4XVdcp7xg9qMKUDn4N3UrJQaek7Fnwj78rNpd4HBztGjJif69aTxy8ULdRYcu2jYzdz5on87NjRL3iJ13C4ZtamJ"
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
