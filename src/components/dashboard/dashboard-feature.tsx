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
    "375P4RyLJBeENYFaLUYSSQy1u4bESwxWJ7F2rqFrwUSzt3s8BpPZ6dM6pwg3BytcauDFsLxbD9koJgHV6L6NJMnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qroqx3azJTeo3JCc1U3C529cJewjomrdaHsVRhvdAAzxrgTGQEy4fHGECqasNRNmncKLMA6kQ4x3VYbtnq568XH",
  "key1": "4qzMEKxGaQWKydBfnxwgSmaDhgXKaiQkJEDURLGsCLoiKhyGo9KS4JT6hgyoxc4dxyGsVaDpZyH95612TDUvvNmR",
  "key2": "5a8PLKPc56TA5umCCwNPA1HWW2PKw646FQxn1u1braoo3HAf95VZBCU7EoZz6C6UMSFSGHSX5F1cMWt79U6CBdMk",
  "key3": "3HShKhaQQhB1dB48Q5FXPLrZDXtKy7fFYirQyaCwokDTXWvUENRiigrwJNSPoqETC8T3dfTbb1igzfNzky3ZuoTL",
  "key4": "41RBYF86RfSSx7stFbfwjawvm6Mo8bJt8ps8z6C7XSuQwWnYnEp1DWasj3afqcjJWwSjFTixHhx26RxP28VspvbE",
  "key5": "4qF5NQNPhCfGDkV83AL2FLGyQV1wETHgBZDFZJ4VkQbxfqTrpANPWqs8rBBrQ728vHuZTBj48fvFJAQ3knJJ5LK6",
  "key6": "4RQtH18HcYE1HRbNTYNXfNGebuxi5aA9zzHBiHU1cNVJYcuedYCsDDYXv57FYjXJ5az2MApBGJuUuS3n1ezBUU2o",
  "key7": "5oUDNW7EycW3BCGbw3kaEsQTmNtdhP3coxDafJ32MbXoEzZLNNo595D55JZtK3gK77h2jPyTt7chnVJeezy5PBbZ",
  "key8": "2uNWP9Zr7idWnSf5KvpB4Fuwr1biDEPXQqx3q9G5iCkQb7YWgey2c94voT86QTyt6XVuvCXTC4DV8sWi3pCyMjhb",
  "key9": "5bXTWmQwJFXNjb385PtqSg3CjMitWLeXVbCvkysPBUyCd67AuWscRhsRE7k2JDgW7JQA9wCgWkVWxHNJ12P9SCwr",
  "key10": "2on4sysKkqhFu4UctqT9PbcMgB4G6cgmduPtBnBvKo5sVhjdmv7CbhCqGzuk1VRZiCK33Mc22UqScpFEh3KnRYj7",
  "key11": "5qQLLiYUhvPaQ6tRJF1uVkTbV6aw872czWmZZ8S4CNKPSgELPAbudHmAv8oubNCS9cG9ybeP2CMmfnkALXYiCVjM",
  "key12": "62EFJ1uxbeoGNSSik7GfeP2wo1fyys7SmQEqCW8EXVxzs3dLPCNmcYYYgmcnu4cjorMqJ6fEMsJHhPBPsCH2Bu1w",
  "key13": "s4LCdK9kaztVysBCz1qe7Rpj9r3Sjjc9VwBJhUuqg2WHycoZa5c91cXJbqEKtTdV6PJQBMWVBrzJSMYNEJWJVdt",
  "key14": "5MMzGqy3NburpzfMPKWK1zzLaujV23DatXg72NZdsQ3ZxYEfS2zA8EFxQsjyNrZ4baQbPeAqM6SDCgGt1Txjmv89",
  "key15": "5doARJMThbE698mqar9kHUxsLTDLMM9xfvN1epBAZTopU9xPBopbotJrY9FRoqHu7fzfKHfEqJq2DmAcHxNVKCr4",
  "key16": "5W6oeEvVvd13ahmYvd2QT7XLAVE46tjxHJuhUsfgTKzobsVqc4MudwNvHGLYWHe8v2PSjKJknuvEaG5EYxY8UU7K",
  "key17": "2chYEwzM1eCta4NQYkJi237atxfpxf5hLqLTkahgFRyScZSk3e6TdGHzEBiwR746KvsYMp8MzruXc2dv2eiRJtUx",
  "key18": "4GCp9q21YdqqUvQwMHReHKRwPnsYXJLAuYeuMnLKoDCsisnGeSHWi4XTBnZSGUK54cE8YVxXRifmoGcUKVULFGVm",
  "key19": "XaQW3vL3JeGPrUq2A3VpBTV9WJCfnKdK36QFoNYQP7BsoHrZtehXNMZMe13k14UBaKwHh6JGRyq8etUgd9HTLQ6",
  "key20": "5aFBgQG933Y5udEj8njnGwMazaRcT3uXkvZ7bL38LjF59FuYZVVrzZF3Av3RAq11dQcvM9E9oLQ6HWsajRya4dMB",
  "key21": "5KzkAJJ7u7XJksQvkgg1gLgYFh4af3EWN6TQw9CndSDja8Dg8MTnBqveMZezKRrqLamP4ALXjdua6Qfo3u7BHsVo",
  "key22": "5BHcSAA9qbgcwg7RmniRBNZqCYb9s11SNBtBtVE6EoGMeY1h7kY74vn2WumgeLnyRVwTjRjGhtKEQxRVoHJ1tVkS",
  "key23": "RYAAdNrfUfriAM82TTnPzrVAwcaA5nbQMLp5ZxaTbZGZRZNBs9mEAmRafMQdyeQ6XrjF4xMvrsTEsckLMWkQdf4",
  "key24": "5fhfHSYASXa66PC7FZteGt2tcFkFTY9kbtx7XfLdAfQ3ZULPiEfixuE34Yuh22KLUnUREnFKzBJLUSk64rq8wqam",
  "key25": "55MMr2Yrhe2LwGQy8Ec3LEbv8qkTcBw1SCyUJDU8CR9MdxRbHGUhDNVjiocjHZ5raMdT81YoC3QcRWmpu6bEohwS",
  "key26": "V2HkW9oa7GdNLGsKn6FcdvvAtLduJFcRhqRfCjPRApUsyNZcusaK7ZVi3PF34NGtAuWUZ2gDBLzH74cVyk56CwP",
  "key27": "49at2QmCGRmCX4KpptrZjmCuaHKnszdEfBKLfkWQZiASKPp2cLZHySgCe4LPp9VechA3Xx3jAmmExhtakXiRYUjF"
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
