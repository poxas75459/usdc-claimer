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
    "gwGZZPJjjMM4syFCDF5Z2THS2nRh4P1EpykvjA4HufDSGv9JkcBxMNjxKJeKsjhJdnNywCioYrqpb3d8vNsH2S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRhZcpUdTzV3EyZZZvG3EcLSMmr5gHcuFCya4gEiNP9CbYXSfgjmp4arBgZuVEtwxC4iMZnPbWUEA7HUu4DWKNd",
  "key1": "2aWjsqMPFhetgxBT5sutiKegJ6TvD1SnpoLQggD96wQaomgmVc1Q9T8QnJkRGeo4rTAds72ebcaqYQFDntHRsyzu",
  "key2": "RZkJMYuUXhDdHebP5VSWNURuikZuK6LsTFkQAcG8dudXGC8wu7DvkdWDX4ryATNQdCdYRZbqt3N6zoC5haormcY",
  "key3": "7BNh2FwieHMTuVUDg9o6TQfRoue6JgBVD5SY7dwix5JH2gT8CfD78d9PebPxUiLM2v4gioCXqkVMdu8EQ7L2r8r",
  "key4": "4j8Xwp6SFNiyBVyz87Aop8R1UbUUAXH17ZQ1jCSneFq54AnUkV5ndMyaNSdmi9Xw6jZ1gUFUR5Z7L4rL7tiDkcNk",
  "key5": "3tCjKn91WqnBSNLr917Y62khEcifaTMoh9S52U5awMJRn3PRep3HbQrTGVaeBpZ6RvUj5UH9xX8FsuXVy7gH9UUz",
  "key6": "CAequzXhW54iS631zdLQZMWM8KGktpdojy3XYXeq77HDdCwR3YvnHRZ7BR339SUqx2MJyBswtFNZe2a7cXXXpDc",
  "key7": "3gx2dnQtdDiNYkJZFyYMaAMGDpi2mcw9qpsRDcjCuSqKSpK5cGRvPxTFEAfRr4A7CFWA3e3KE3xzXCNkPhLoHM6G",
  "key8": "2jNVEptX83nWFdkbQrdJpKFiUWq1jiGQyoQsWLv5tTW43S7c4rGa8AVVGNkEnUzQ3NuZZY5qzRo467HTsf9k3syG",
  "key9": "2BMMvwTJwJqRiLfK16SAJUbEwx3VMAat72kJXtxzrS8XnQmXwimmVZGS4cCotTYDfq2fRKdwFp8uC31GQCQJEyTh",
  "key10": "2KBsHHQUfErrgdXHxgFazhdE2QkXyV3WgSDi8p1Wo8xfdwKAFkwSs5PnSvx72yqaXhJPQHT29nXRrN9Xy4NXyNvD",
  "key11": "3zQYr324PQDW8KjrvCmWcPwowqmLMNk13CsenDJXEJAf75vDHcAaTbUWXKzxm2A7pyV4Uwg75b6tKaoSPe9E4Wjj",
  "key12": "5FAHMvDLfxzzuvjg6c2JVJvspBukTTysmx8UUWbGjLyFpfb5hb6FJu1L7KYfaXEq7NGEbXJRMjkg5RFNbaqrdF2V",
  "key13": "3rkbzKGKxyRYWiLrZB4tz3UH4758fABrjmm8W31cvWEhP6RcvrGaU4ebwtYmFdMKQrLMuiuPuujQK2F33MJfXeqm",
  "key14": "4C4SJHsRfTsKqH7o4ePrdk1H65qW3Ln2mJ6gN4GfpmgptbiwA8NaoAmyYqbpbMXjw1ssZtxXVGQ5L7NJMuvVzozN",
  "key15": "5ZA5WeZr7FvzZLrhM3RaVC9k5PapTxKg8FnGAm57CWk7GES3mJKCjBbkUGAzDaSmnf4szc3FMP7XPqVzEHzFQ8v",
  "key16": "3SUoNPE4SubYNrX9bJ9ZiXPFTzQ2BGfgYpF4M5YzePfkxkajVTyMARZF35qmYcRhh5um8CitM5DiZZ3wYMwaE2gd",
  "key17": "3QhmjvddruvgRTEZy1JhGtVfR3PqxBLiz7Bs1NamNgxXmdFvh5rvztu8APpL3QuyLiTpxFUY2J6uDkABbg2qvJAa",
  "key18": "4wcWxTmnL1J5Cnw85Bg8dPCUAVMdPxNpWKqDEY4N2mvt2byhdkcLS3ufQ3aJwA6xMj8LLVAnFTdf9cSZtPaQPzou",
  "key19": "3VQrEyJBFE5vv2HRzwewjz4YborxhdLPqB9b1LePaGsgV8vcRLAguduGSzvy9gXyqihjvufJPBfDYmmpWTNQSQ6f",
  "key20": "4RCByXugCKXSi3fhh4CVTBKM627UTQBM3AbD7WYwFAZPy2nmzdYRMZAv5DyXJJ9FKefXtTiLpeTFtetr5RaakYMi",
  "key21": "3s7fT6anb8RoXy7csYPZZSicUuxcw6WxC9RySEakzn9WKDNyqo3bafhtWfbbAGNU9YRFSH4FPDeDWQxVZE5pXZf1",
  "key22": "2HQjQYefVYSe1XmENLCHnjciMbuPFshwLSVCHkCrTweJ48mbE6PZwrgU3H3K8FPPLBoo8hxeCosCfdecoS3UbCbE",
  "key23": "3LhDqN8RLpsbsFaNwXruc9xzDLxzcHqijKLGYztqKxh4jFDBXcLNKLdxr9vW6ZjrCMfJ1N4zKjLH7PWBPFcsnUcG",
  "key24": "1x9kpXzXz73MwWx8U5AdaBVKP8yzp7BqvKFTErnFZFr7gNeW8mcttgoUYGYbePddCwNSUkpcekwDLNu5DEfeHhP",
  "key25": "5t8zCqCXN6BGGtwobrG2mkVb1kMzqDvZwcBcyASEsYM4Sjq3sxna2dehs6nnmFCnNN5UNDehv7VmvGGtMar3VRuy",
  "key26": "roqHr2rHHzzDv8jc4xUz8fu9coFKpD7a9B1PLGDDmSZkL1rENN1ap7J2iB5votuUvUDLzpKFw9oyEH828qeAxzA",
  "key27": "vokEyGCETNS6z1XAbXMMgUbFtaoeAVj5sWqYfMxrJKyncd8htgPnEjvVzXBdxt8TV7EwuUPhNVa3b6dbHjQq4n1",
  "key28": "5qLP43hfz4tm1pAhoqMZn9Vhm1Cp8sNDj6Ch2dTaneQ4Xc8FffpDsw2XV3HGQ5MdsqEieh6B3ASsrJw8tUiKg5mr",
  "key29": "544rsDYdhQHPP4aSyuqtAaRcNBKopxT65UdiZAqq15bQRMjKqSgBbdFpzNgjYiZoxRm8nC6g5xP533t1ZYHH9ZxJ",
  "key30": "4PXT2jmx4pWAkDVSyCT8SdoqVKm38HHLA6qwaZ7vUu6h2b75Dme8H25KucdT32mDhVTQUBN8L88D5nYVa7JzBnVV",
  "key31": "3hSiEqrCeh7AVEbDH4hx9szRbowrNwV7joYryhsZvJpjMKVwnbicJ4dJrQt6JAzo1M2gvqmrHu1SaD9Zd9Wuw3Ji",
  "key32": "4ZXVD7cMvg16ydWGS1aM9N5n7kN6mmPpSD16Uf6x9m34vkpMz9VqNZA3VWiRRakPvWtE2LemtBVMeSpJyDxf7JR",
  "key33": "3dPD74JFgLfLet13iVr16cnKHNmAsmj32TBNfMLqRGfjSvVa8uxYJSPPQX1Wj4qmkveT9KcELLWSetmod4ZEi5oa",
  "key34": "5Jxp7zPhyS9qHKmfcBC9xHKLd5GXRjCNpSHubrzQiQ23U27VCMUs7pfkPosnRN1mNBYApLksUwxRAs6Q9kKDE7Um"
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
