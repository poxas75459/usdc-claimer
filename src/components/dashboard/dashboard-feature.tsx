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
    "3rMGq8vgt6gmdbd1ea9ycszXW6CvQQgzYbYQ1tg7WdYJ7vnT9rRiHjh2epcN9rS6KLRtP2cPx4kmYyMjnfefBuYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGrtzupr65mosX7TzHxnq3uvpTc31sVSwMMg3Je2VLMwg25HEXS3JDHAiuL3qYuxNQ5TYcUVioE2Zr17s2wZPU7",
  "key1": "U6r2NexSieQcRFvTz6WagXjLueE9As9NLWhqGM7nLHpJrCFWmC47bVmcTbxgQvSYCNNQat1EPLcWmNnQFiwYUJG",
  "key2": "2pFnQoaYmQE4yaHtsxDwiVhi3fVNWZHKPct1Jo9L6RrYNreNeoyHwfdXakQ6v7oZNhP5Z3dARt6L7s38dzprY2Zm",
  "key3": "3VqZE9pV2EHJbMx7TdJtG3pSa4KZxBDHxo3BvELA6aMKBsF69mDaBszMXjxbTBAxdZKSJbQFn3bFeJDgsw8HyiWd",
  "key4": "4zjho2SUwESDQmcnGKEP5cR1JCpeAfPm81wE1VgkA2JH7DAY8pP5r2e2UYFWn8qtLCKhUmSo9g4iCmPNVznWazMr",
  "key5": "5XbNccmjbAuyf6K7LHvKpibsB3aboc1P623oxLywutZ35ZxLtuRPh9d1VmfQ3VzyCSUtcapgtcF7QdRex9re3bUC",
  "key6": "BtBmRkmg6jSmrLWUNhka5uwTbrExh86uj2JfjKQxCXodnm8wvbkceRNGbsgoYZiLPfcYESkv7d56gpKCYaByDbA",
  "key7": "ynqnPinJmfPiXtCeKXqksUxF9v1PHwi4bJcukyZL2V73c7NAnwRkc2ZkgwzH6ZHqa34YgR9ZmZgXkwo1fT3LwyC",
  "key8": "2GQvPFYoCqz6dpzDsFPjBcC7W1MH1fHKAN6SkdcSLTKDKCmvo4G9XQQ5rJsEGjqGkCKfx8GhGLZKQbyvSVqNgYW2",
  "key9": "Mv8CV4ptYLqa1JyfzqUUU2ybz7Xk52Q4fEcHMz9YeSTBYbKobxk8Q7HJsGhu3zX8hnLWFKSdkYRrTKYYm149MWF",
  "key10": "5ZKBWcFYgm7grGwyJXAVBGZmRBW56rrbH8NrQu8zpd2UL7gvbAyvSqgAGDkU1am8ikF3M9tJmFnHDBHexq5ojwx8",
  "key11": "WkPJUVLjtJp2tQQYWPuZeX4hZon9pWL3QHf2UwSrpqPgoy3iENMRvdi3hwxBU61zUvstKh79tJuP6JDnYC2SEj5",
  "key12": "33fC7F24USnBoh5vwCy62Pj732kiRNY7kkhgrbuEDuSkDxASLU11BaQG3p5vTjMusVqDQ6MrNgXAYg4FCA8EFaef",
  "key13": "52p3VgAKMG1vmTc58KfZtiHTf2DCt3oFLJuSdARvnkKXKDTuiYnwMByktNUkGEtroKWfK7EEFxaZoRyUVzCtJEVg",
  "key14": "3NfsBeDp3dfbYLSSM8XDNvc5Uc9Bp6YbvKGpvEM5SPXxLW5RxRYyxBuypKfhJb1DUPjQWNbPKyRodnh1KzHHsTTq",
  "key15": "DJMAmzLu4gMBQXdgjWP3idhzKiDPfhzN28RAWw68HTtKEukMEXPYh8nsW9qkq8BQuRTRPhs6NfgEgNv1uFx2uwH",
  "key16": "tpZtXmYKauYcjsP2pVrpwWmgU21TSG3ALZLwSPD3LrqWmkAA6aLtGWJBaJqN9ozBFFumxHsXJ7vmVucmqaNLvVf",
  "key17": "5P99WfJJskauEZ1qv1EQd46n2YiFTzAuuSs1DBcYiT543MGudGfbwGhmWk3UPF7BpGcb23S9vhNbM6cP3dmRY9Dp",
  "key18": "4cgUEaFU5d9tEZSZGZnESVFqQeYuGPvE4pxDD7ec3Kd4fG4tppnUAtnpHL9hCT2zicZynym7KudcpR3AKxCYyikX",
  "key19": "4TDzLqeovriNdVB6nXyP2sqJBJokGJwuQtu77BZLUjwMcJjGjakrggp4nZ27vxbZSgMZRh5197hFTJDRJhPgpKbQ",
  "key20": "3paLQysVX4fj5TM3gy3y6RyLYB3vm5nkm27hVRPwx7H2JqdBJmocrowFPmtphcnmtDxtC8JhrdxChgbB9RSqkM1V",
  "key21": "21hGFsfsFnapcXmCyoXWPp7oyjq7CnVwZkUgUcCMg81gxrN1KAo8zYtwPDBVYgjRLgKg1KHvee4BJZr6GSnr4G9p",
  "key22": "5NajncJa4JMJ7FmW6GAy4CkzFZYGUQmPNVFqm12EqfWx4G7cK8MdTTB7PGWpnZNJxoGx7aMYg79uf5MJRytDWcK6",
  "key23": "4zpED2b2Akqz66tnYinThM9gfJsuiDqXcCQBdqUrhpqEJsnBR7eHigcdFsLJ7bhn9oKMK1vxeVheveffnonHAfqS",
  "key24": "SeVE6J72zjE7ng4yJXZdFiH6vf9yakUUGuAbQmTcD7tCNNUjmavNpuaVB7hoGCdecS1wsnrWsvtvTZ7b6LNs5w7",
  "key25": "4GzD9mTZLyAwKrWzCphsc8f5WGXCt7jac6LnA55xMVSEQCK5SMs1X9jVKPDetdXTQUroTJQ3twSyvuGpHQAfLmN3",
  "key26": "QGjYJCWSxCZqmWZEeoMPpExBNu3cADNFFRxCPuaHFxrG1fsd3oKBrQuHSQEZdiDGUbTPJDLdrMp3XHapCrnyykd"
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
