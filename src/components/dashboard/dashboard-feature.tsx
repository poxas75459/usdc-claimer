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
    "5AyjwsxzqvPo9oHee6JVB2brFQ1uHKecKnAH9KipgBSDZickAGxNFP4b7JirS7LjES67kBvNwB7opYDbjqGCPD2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJxeGARqXhFAuPdUaZoDuTeSWd5vKSfK6uvk4LxvE1eAYU5eBoXSGE363KBCqVorzeLF6MtJDX647QbmRh6P1zr",
  "key1": "29KZRoowteqjgmwgDrZW1dLwHqL4Wm3d6kQGBkShqjdA2jzZ9HkFG8PMd8rtXjMPSSKME2J61BYZFcH35TCYBKhh",
  "key2": "5R1pVQqZTPJZn6nkzuztZf8SjatARsf6vPTVfncMotvpSANDYkbwNNkNY28aj4GC1U7rFsmVEtPvGfTxmcsy1hAn",
  "key3": "4pQ4xRPCcLA87gd5VLauoS6tJ8fdccsWSGrjK3fQTvGFDnCj52Np8XBQTDMJg7f1zDYgBqfXQoFKEMwnktvKMKjN",
  "key4": "4YUVYLDYRucuqhXMV9enVL38d55frk8R4WoHPQ9oxVMKTtZKrafShbjZHKeBHxBT2vsZLCvJ6tdSBuyojmthaWyZ",
  "key5": "M69SQhnYfu3oUranfqKdcHbf1k9wokaHpzSvcbEGSE7dSXmhW1ZZP7RDsQpjQFkLh6pbPdak9xsz6hi5ziY4ksw",
  "key6": "2egYXakZo9Fv8A38b5QCDckcpVscCw1JvHNMEm9Ws4qgMwmaSutNnPqnvJXMPS5ejf6nMooiebgheA1ZYbH1wCZg",
  "key7": "4K9qRCug6qUFHk6CGhLn9DiXqzRLaUCBpSxVPUiY7rnicmKH8FUxVf7oQdXqgQKHK4NxAQCxC7VsRESmQPWB7zFf",
  "key8": "5WYowtpA7b3ruHRANU8xCDRubZX9BE1MveKwsL9LDU8u1HBAFGguoYMUvkk6G3n5L6wRXRBayos2bea2HADVjmrz",
  "key9": "3JyHBgK4SkByPGYu5FZi47JggEUXhyxV6HrgGcfZeoxpcBb3uZ7AzVRYQ2p65DLwc1fpMSfXyazpbgx4D13ZYnoJ",
  "key10": "rHFD8zwWt62WX7Zuosq5pKxfu4ZfbBFT1VeHDG4Py3NPgnB5r8DFbjtkPa1FjQjcwFD8kkzgxDW8LpZpyKgZ2EM",
  "key11": "5oqptwAAupmSrt8ugZ51yD7VFDGPXSid85etr2g11dM4S7yk1LcoJEGf6xu1yjCtQW8u1sCzmN5SGMTn1rXpeRfT",
  "key12": "3GXT945ZwhGSN8FGAVnxRr3ovErqSJ3XLWWDAymQiHHTdy4n2nb3zC9DGFnsZ3fbKTv3Uf37GU57Djx2idaGrgVr",
  "key13": "5FT57t1yKyRz8mBSRmStCamUKTWKgGBffJw1sTWAhQbxWtEb8B6Sr9jPk9wcyFCFxdUDDruJ6SFSs1o5au3qZQJT",
  "key14": "2v8PbRLkCJjbfLMKtTfKTWNBjjTdf4ramdesP8aisaA2damRq1BAhq7WcFbBJR8DrKo5JdH2SSjbumUp42bGrjSa",
  "key15": "2fFjpbXWdnmfYYiseWXnQrzFLgZGHwhrLtR38vuGWatEabQ8WQmPKwFyoHqhPEc4SCyT6nsYa23JiqLVe6GbWY6S",
  "key16": "212UPT3o4bT9Hw51gSP3i6aZ6AiQn59aVX49KT4haamQFVnLxZT7tijYxQinVHSjApAcWPMVVxEgT3g2ZckmCgaL",
  "key17": "4natmWZ116WwhPnhU5WsDLHNjzdPc629wKboBho7Tm1m5i5kTUsfkHudBJgzFqTxRcLLYVCEvmzUnrFAMQiL569T",
  "key18": "5aESNVTsWHn82zvXjvKecUkKK7u1iuqdgq2A9YcRzDKkg4LUwvQgninrtPoEP11pNcyGL7gpJNQz5caaDhGzzhqj",
  "key19": "5GNMHDyVTaZi3hjFz1QTwDhHxDHGb4GJNdMmBxdczzFr9hhofBcnJt82CmdaAqjxpBaY5QQm3ANNXeDjvkvCy3jj",
  "key20": "2YjFL4e3ho1QKuG1KMzGEkGtoEEakXpR6XjAesoNe5UusYR3Zao7LXxT9LrLhmSRGtxBVjL2s6cdK77TdU6V1LDq",
  "key21": "JTrAbq6sb6Lb2uGVFMfQ6xMaZ1MBMxAqwcuytzFVvbEp3zgfwccvTtZaFVqLQJaaLpXQsh7Fn6MYS77Cs3Ssrep",
  "key22": "VnbGKhDf9dVfdigrhThwuNsbTXc6E6KVtWo8Bz4q3wyf4rW6mHAgxzYR1VmvSBDsLxbfdmDDiJGJ9pMmfneJHAX",
  "key23": "5TrUMmaZdSVorQv8cab3bzStJwgAvTVacFanpm8g5s4kWbDVJXk8NNJhXXC1oFPpwk8jbsNSceTTkbMytTfTawLp",
  "key24": "fbwRuZi7CuELd7Bq1PRAczLpe2tGvnKevRM6LTumWymfoE3q9XbNw5fWaQJzY9vJa74gKGxXJS5Hnnz5jWib5CD",
  "key25": "5yRhpvG7jAxtbuUcN6AQmj8gY1qGWrhTPZoDAKcYDaHUFtmTkJANyZubrhydUh1FavpFhu1CWNcMrmBNFnHYvTUF",
  "key26": "3rtsJncjFAMde5pqAPYpSgnbxisWiDff8Ua7XLr6BNYM6MRDwz5hrBSQjYxZhY7PR9NhvqgM8hQU7VaaYdxzSXFc",
  "key27": "2UMFdXG5z3HRwnmF3bM7NRs3tcP5GTi8eQ5SXqCA9mfVVNfgVnHZNqo1ng3fxhLQDhWutst3dBfjckYpfdNdyDQh"
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
