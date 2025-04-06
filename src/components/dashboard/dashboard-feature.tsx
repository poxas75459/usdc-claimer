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
    "RrTsYZE4FKEakDufDL5dirduP4wsTd5KxMZ3qcPDsjdQzzi3ceah2VvhmL1TmhxJYEXub8eLz38dqDhsyC6UFcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38AAbTVNyQPZtvFYoh4X4bCo6q7Rn9DkNsTNCyPDreDuWuUPxvRa3st7SxjdS7uaA6gVxVe2t6BiYECaj8AWyZFD",
  "key1": "37KtRV6HqKkBXfKQ9UHH4om6K8g5odWx7oSaJKs5jC4Fb78pwJ1e5JQbeuyJSt27LiM83ugmNK3DYR7otqAysVhw",
  "key2": "5hVp9mtwzvU7etvJ3jgFQsQ4Kgc4kdMBgB338nkpUK1Gp1mYtgfkhnWzREcANNp2XCCHtDR61X5f3ibNMvjGJTrH",
  "key3": "2AwiyRNHWBqofHuXfikXj7ZeCAZe2VvX5hN2ZAKYGiVFdWEwySDtpmPV5JDpEaKnvEcBVaWzfAxCs7U2qndUDC7x",
  "key4": "3UyHeM5NCev1yXLshBXa6ZVr8fdskYQdYp1Rn4p6ATa8aXZLg4BGKyvigafQDiXa73ns9DzBx17NW9wthBcvnAE5",
  "key5": "fs9jy4p1Vs65m8u1JJZGWcDktyiZPAH9DfxCgBoMkE8nejU2BxNKj2N2AarevHUf5sCGRas8wU5ZdvomciEq2t5",
  "key6": "4LRriXJumejHohye8VMCYEJMBPXVLpvTcbZeCogW5xZwbCJ9VopWEwgmid4UPuHGWbQMVuia5g3jLe5DVE6jU5bt",
  "key7": "Dz8xF9hwj9dwU3V9HfZndT4FzryT52ZwFahwJ3WW1r3djbVu43Hh6Q8xhEEsMCxLcMNT9f8JAiGUb4UvJyvEeoR",
  "key8": "3WDv6Ha7YkPL5BxZm46ib1FDf7mpnu8QprGxm5kj62yeBjAwS9BndxreX1ZDvyNDJ432C7Rzn8yAubqq73GPs7Go",
  "key9": "4Jw2rcgmTKvobLv4FLdKED9ULEPgTP6E6W5v8KTdDqWJhZmqJkBGw6GGZvFURXfyPJ7uAeoq6VTvmHbX79BaZDui",
  "key10": "wpJkj7psEXPqAQQmKNp4pUv6iG44jmk9Zmg6ZjiRgfFTtrtHynxxVeqHSNJ3JDpSWrDFChajw8A7NpVa1y5skhL",
  "key11": "3XiqMvSdZDYzaXwnWFLjS2kq3NL8Sx8Zky3Gcz7akFsDVKGySzqqWS6U8V1WFyK4BfnN12cB1Rhk8XDSrSY1Leza",
  "key12": "XxvMKXxQ7jAwNd9UrHDX9Xy64ZeUnwo9uaqCsQQLiMP4QcqBrQ4X35wAKaGzUw7djTZGa1MzzquSsNUqni8KDRL",
  "key13": "2YwzNPSd6n6BFPGk3538kUbX5YuZEA9aRdQcB9dD78WrtHn5uWpRc6xpssMSmkniHoojeTYZ9eiSbvC9cirR5Jnn",
  "key14": "4TknVmiFvtVp5P9qgjVrrZHzttDY6NA6fCUWqr24eVxFzq6q7CA82GyzYzydKz3UfLoNtxbQAgT4M5e72ZY2gfvb",
  "key15": "4pCBPD7CrvDEVgZ9R9XuqcQN1pyYmRYgYSGW2cpPEYNrMRaDhk4m3DfPgcYdQDhs7qLr4My4kCaR9YpFDukFY2xq",
  "key16": "3yWPsU6X6ETSKiuMr76rFRZ2ouHDK7gJFUFKZS6sSH2MfCGbGeAuNChUXSuAf1MRMWSpFqEj48a2vksEP8NwbWde",
  "key17": "4Rd7G9BFJNXc72GzAurgZD5JBK4WpygKMM2Bb2X83Qusj9RMQ2yMrdiY3VBzWe1D3cSVN6erYMsNko4mHgVx37A9",
  "key18": "5kisW27vRAYmt7sDME1yYf1rPFdDrj2qX5RCWDPg9vPvFYh5nXczUjK8ea8HYe5Epb72Cx1esvRbfFiMGgba4Wyj",
  "key19": "5eFuyPrBnsZk9L4jwUm8uQEzPMAChBgM8bvAhfP6pW1suK5CaWxBcANwDgVBDq512SEvSMgyLx4btstLNSY69Wqt",
  "key20": "5pBRqGZuKi89Fzqhageu3UmzYPzaqUDjSkkV5wFBQnjkxXQscBEQdJvqTfTy7z3sTKbCHzpMwuC7CH9yXwyozkD2",
  "key21": "3fLT29NucKbiYNispHixJbiQQr61rzkw5vPprAN1WXHQuEQS7TduVWqaDNXSo4hW2gH3RRhcuuPesJ5YW6BDMKiH",
  "key22": "PFWR75bBpkP3aUQDeBvUaKKNGgFVtNMuUVYftitrNbvwcXAbejoLH4zViWmPHWnqRZbW9qvMCxnXL1J3Sb1Jh9M",
  "key23": "5yAmsZJ5a4LPRjtcnWWYdMbQh4CxutHQhyCAzcZZFx8GU1Fe9PFvw27xY9veGhikaQr8K2qYNPgvhCheKxecfbQg",
  "key24": "3923yS8XsEJi9VLjWvz4DHNjwFZYRkajoc5586XH6RpqDc6gFZbcpa5awaogq4aKSrYGzY6mkBVQ5sv2ZD365pnz",
  "key25": "3CietVBEDVhrUh6teEeTRigACxaYKdjXtagbhATBgHTLm1zJVDmvijfo1wxxawGd7nEZVHNk6jgWvUAPWenN29r3",
  "key26": "4gQamAjVRrXfugwy5MkoQKfEFWEkjW16VDTyb5CRt8vRm3jQPQS1gJUHyR2yKMKWCDDDBEqhyHfgyh2vKTQKaieF",
  "key27": "3DuQs4QHxDqtE5uLKXGPjuezWLK2PWx1U4GpU8X9yB8wpB3hD15EQEkq9hCePzqreXKM61dPG3e1WxedTe3oNLu2",
  "key28": "2RWceSFgGVgNemHrkwqdiRuawDi4GNRnP4X9XbroTN85eJCLzpPxRv4GageP4YzUcSsHFTHWA92KR8tSLv6hjBeS",
  "key29": "g9D7nGjtBjBJtgyCcmpgmF4GB7xAfqEk3z3JJAJWpZjz1Fi1cCop6r9CRc6RgYzvXZAtciEgJvUFWdZBc9LF3JJ"
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
