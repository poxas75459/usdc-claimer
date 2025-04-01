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
    "5Y6qcLyNE7LYea9dugSjCcs9uWnjWWkJ7yy5Hsr3vLW5j7JEbQENH9M7Fs93AKe6aiorpwtpEuVhmaRcDUAriJbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjgPR2BfiPd9MYSDHaUNDUaX9fLxkAZXPqcf2BvSbmPoSDkc1CUuePAQCvDp8YSjgdmqDwyXiCUS3fbgLgUmUS7",
  "key1": "wfreAuce37UB9MFfp3tdjnrugFAA63CWhafyiYDvC4L3bgHvDrMrMdfRdZzsezbGUDJCenrD5qY6X8hiweASXrt",
  "key2": "5dC43fAXcvxv4T8Xz9DZp67Y4jzKC5arP7LPmx9Ju9UcgqGjcmd6NAh5pdGtuCuA95wKyGEUixdyPynwTNzSWCSN",
  "key3": "4fco1wejBwNvXBPiqeuJ3RMNfpe435EiiPvGdZeZ9rmwe8phCTtTXLmu7bs7ioKbvL9fWZJBa78XTeb4gAMVVdzV",
  "key4": "382twvCQausxynJqVYX7TW2gjwFEYwKMpTgF3UYG4gDa3V4TEXdeodaHw11nS2j19et9ua83wXGxgzSM8e2NnkRh",
  "key5": "WjfpbDd3JCs6ZvrETXqv9U9tyTAmeDN8CnLavU7sGHpuCyzssRcF9tZrsU6GpvsrUpwXe3STQeaMiMyjQEAaYXc",
  "key6": "Ge1JrSb8517RYJgcepNRkd5UuhXeGTFztzft2uPDfyKxQcY2HEz7yfq8ZeKNXF9MBBBMQNbfhe1keJFeE4R3Ruu",
  "key7": "2JoMA9zxRYopMa728MZvXLwpQjVWHeHf5tmQi3n8TjCVp7sEdAaJjuyEiRqhbvjVP4idFyzan53EcKu9xcws2ycM",
  "key8": "3fAdrFdDsP898eStribxyHU3tadT8BwxPJKRpzUMmhRsDS9S6iJLKX57KX8w3ZWcxCBQKDpgrd5RvzgF9eLC1NYm",
  "key9": "btVE4jK896HDQzHL8WBcaM6jH74VZTTQRAjK2XEmBBDNVHS9xZsHyqsrVgqfBc6KtxgeXS6fcNEASZvyxjSPHzf",
  "key10": "57x7hc3WM9oR5QnhV5hSKNk9DHN3kV1uveZYczzCdFq77LucNUhBg2wfaCcorQpoTrETAEirSAshhU9gBWe4QDWF",
  "key11": "4Hq71Ssdn5idT9yoz5dNidmx26oubcLGyhTqg8NZC1AhAfQnNEDCkDHEDC2ceFvn91VGidB8iFwT4Jf6ueyyCNMF",
  "key12": "5pRSew1WZ5zRVXsPLdk9iVZ574qG5KhxQHpAntKpjHXZg6M5fbD5irjfMkeekxh3Tsy3tW4qzXsrY78hkYrj8C9f",
  "key13": "2sTABihibiYFhepamh5vkwbKAEVjpE9AW5dTCWDpjr1Ckks6FBqEYYQKeAgZpjUUFMYrLdFtnFQBmTDzmK3ith6d",
  "key14": "2QfvM7xvn8433cHwReTNWyLEQYUyTUJZ1cyJ1YkrhyyHy4GHgdSLmRc3AdSw6qs49jZ9EyVCzDLzVWR9rt18r6Ua",
  "key15": "4UD8sszvF6ubCDqHFFrhErvkFcohyhu3FW1bZccFUCro1mZqRextBnGUbnBE8f4P5s55CqSenE9Vtc1EeZs8YPDm",
  "key16": "4ypbbD6TYv5qy9FiNWrzD5ZKZJ6M5vvyB4bSAi2hY9WJb7EVPuQPwqeqWiLBMz7SucivkPnzCkMj9fTcLhg7HAou",
  "key17": "25cxdKgEP7eXULKyJypzPPehUghb4o1RNUkk2nEn4hMgA7cjd2MqE3Do7jyDq9HSaSLqZrZQzxEUFB5t6UkK5NTY",
  "key18": "4q9CHZ6vqp713TtToUVeqny6ukwqtpcvQF34eA3puBVNwSuooRc4Ti5FiSCDeafUmSdou7WqzvNWHGPXTMQBg8NJ",
  "key19": "5cG7DUyDcBJejrJeeNpG8tcb88Sf62XmLrASo49Hqfk11bxbJCzNLm5e18YHAPjiePzhbpoHidMSDuJFbHXDvY5L",
  "key20": "3yVkBP2n9YXRghJmBtwjbNgirDGNTZNV7QsbFRgeUUGvY9KdUUrvaB4wUjXmLmta9jBmdgvExchFwbriVEJb9Xo8",
  "key21": "2hu4WvkKubtL6E9gpB4BxnF4DSnk9zJtstkguCbDJym7HFZ134kVKpobECSz2RCbWwSCeq34GoZ9ZBV7gosX61pW",
  "key22": "3cuh5Ejq8FezHFm786LMSvuYVRuXWDHMCerh7sbigAp4CSE5jxvjnhDe6tY4gCQ81YLqWEt3F2Herc6f5G251PdT",
  "key23": "4jecaXLhLr2HbD4DGDxTrWhas2TJt4P3YKbJsWvCV3vxdLqQ97ab9kNuwxzkHwhEJxbwC7ppxNavDW6NpYDjRWro",
  "key24": "2N7j9oRKM6qr3raASxPb1cUE7EjvtPysfRjfffUdeUsskQkVGbWSjdQYrG3xzpgnR8pU4BkmHbgRs3jGbhii3kUT",
  "key25": "53Hhtj9p3eB5VHaU6FtED1kT8DQfXEKRbKYpbnAPYAqdMssLisqhMBkxXEkT2L7dVku6WLJKRBKQ1knXx9yQujU4",
  "key26": "rRNkezWGyEZG179ay1ch6owuwC25cD9dJJMw9moqfSDLNZVWhfSUxb4o2FKkBqt5Bhg3vUSqLA4722eypQeJxk6",
  "key27": "5z8zZ7tA2D96N6RRZwErdns5fbE4sZtxcB6gCAXh2mDJAp5FSiSvB6XN1CVKgRv4ntvHsaMCXnwNh3uyJMfGtVUH",
  "key28": "254tbAaBrMisauo9GTsVwY4RTLWbxgnS5uwtPsEjjj53aEaTYmsczCNNNRQiRPYY6Dw6sYQ9adPXrDi5XM4SHo1i",
  "key29": "EEMjZa6rUCdbkZXKYVXNo38NbgrnUDxTG1pK6evUkG9cWVW3fJh3jGg9VL8cY1jMVEJjGXyDQiHjoS7pLAB5Z5G",
  "key30": "46hqXrf6hTzuRJoUwPqY5ogmZfYLWYApoVNSRTgR7KLBWfKtpiCxubmQiqubmvZnS9UhcyEQ4LrvzpjWK1MomaYb",
  "key31": "3XKtvmaHUuPL3v3rSaj8PnFL8fUJDvfgipbBVM51tUuNK3NTriM3sfdYqygisj3rSEK9ixdFwGAYPQvbkcMcLgQX"
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
