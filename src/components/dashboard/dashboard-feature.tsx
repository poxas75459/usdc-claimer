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
    "4ciFk2a4pXvWfEA6oDgT8nqNqR7qaVFiTv1zpNYSwvDc8o7YrAFdazYqphYqh473gtw7AS4iJsv1x177Q8fgHMVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwMb3pcifmswdJSogqskmj9FV44GpwHgbwQfoPV7BcnC6f9FPcqDeMJcF1p5T1Z4mhdj67G4y1uiGdVCCUyWiHC",
  "key1": "3h2WP6iQ9XtJCmUkpY1eWK1Tjm7J5BPccj2NqZUx7bLQC55SeTJ38djrKwF6aP5AGswFGwtqjyJpCHd3joEAjWF5",
  "key2": "54AzDkNA1ZWDKy7gmH9S75AppJScXMcD4UsBzTJ2AebE4ZxfbZTeVDUas1DyBfyWfpyWK5AHc1f9ExRYHzGU6X9A",
  "key3": "2RCrHtbcATXjBSMrr2pJYaN72HfCz8Cs8ceMdNcpksK7ijvyLNb2Apg6sEXCmQvVfuWSyN8M8P98aQBm8ip1cyLp",
  "key4": "3SN6DwqL6AjsGg5PbPBafBeX8tnyAHz6rbdLvSTEmxJTWyA1AffCBQYWi8okZz2FiCje8wHXuFH7vs8sfNVegBBJ",
  "key5": "4tfar6NqDWvaFa19kEHpFF9ZrGXRgV1GLcR1HfuKWduCf6j7d6n4XxpngnxALQtkwvbcSGz7Axb5sNqJDN6F99jF",
  "key6": "3pZVCBi4cqKbNuibhwoyz81fnMP61dipsCRMXmXkfZDewnCiSwX33oapaoppWEa3dBgJAgx5J7Q6eXNv75aTEA3P",
  "key7": "2tvyzFHKo7NydMk3Anjp3C81zNNr21fzJerH9tGhWppV5qJZAn3CBK4pnPjayp2sbr1a6PC9guprc6v4Mx7ETRtr",
  "key8": "2e8gpdRRaSkdejtpLmuj5ojVMNubET7mc5CYDEGm3b4cKrNzWqc4LQqcqmXXGh4baQ5xeTfvz9CkuJYuMse4rf7P",
  "key9": "3w329RvxVkGFMRWYqrGxRLV2d7RP9uXubCQnAhvYFkefkUTMym7zNdgjvGkUckVC8chQ6X6WawFMuwoqHhn7iu8S",
  "key10": "2gjdsTHLrx2JYfXuFDnybqFV8wK7uhx8oDdbwkZ9cSrYAVYcHqsQmiAGSnJV7KXJyQRUPTANVeXfMhQSwSauY6GU",
  "key11": "2iY379HrKMTQhHPgrJgAcYNgfakJ5vkcgzDT9EYHp1QbNfQbKnWquNizDTH3XeaBxuLCr46idMbo4VUBcFGxsCup",
  "key12": "JeUDaC77B5Q5iQQnbDKXnQzXiPgYVyaCAez5kAmPLbcD3TufDzLE15W1H9MwQWaSRiUtQykgSMHZMSQDazKxcao",
  "key13": "5Es5mUtge4u9Gib9amwPuzhi17JQJ9Q4nGomDsi4ubsLiGqEJmzrcCEKbJvwzb4XAG5H5juUmPr9rihaBxUixGG9",
  "key14": "5oX8PGa6ghWeuSNbBetWYCHQuiM34cxZbNtufSwyg5da85tfoAqBQVxD24NTYyVJ7E7QCLLDFpicbPjKHnpLNLds",
  "key15": "2mifXtuR24mN163T1PNsBMBgn29pZb3Av9B9QtniSHPSN4gX8wPRPDKjnAczTTaBoMa8cSuvXTqLVRtafXdn3GB2",
  "key16": "JvkdHzfPu2WN9an4yejHGNp3gNsqfrCAwxPDSP9iLtxRo1eXcdMCLkJj8FwuT1Pt8DXwVBQePQYr1LiysVBESCi",
  "key17": "46TcbM7SuT98Q7B6otJ9jqZnQvesUXYVKPNeV1hGdiepxQ7vtoGmsugYood3DVJtn6gmSWegELd7BwbucMeuBUcG",
  "key18": "3D8mMLG3HiKBjgm3zsHLqBzEWvUMWGYUze9U5c8SxcgenS7VCMGHyXvAeBVCrXEfqW7RiCG1nmgGHD7ofuiUrUcU",
  "key19": "2waDnp4PRPmeXSLsKx5jwUi6JnXqebLsHvBZYaG3bNs3nmC9xfgttZmCKxW3J734TTSR7h5qQJfF12yvjq2nmsVW",
  "key20": "2fKmzE8vwf2K511mBg5EcrnVmUgyMYmLVcVmwPUqRkW6ttzuSF1K2Y4VUWXaeU4BtbHZs9ATDmY942tAY6J2fUcC",
  "key21": "2dFhuMwZBnWjBNYowmiXo9MVH4S1bVKGoXMtLfHnimW4Md9sboYmN6jYAgaPYvovSjGLBtWCjqpMXAHtPGZ5y3Jk",
  "key22": "d2CXrD27kcs4no7e2fJQL5xp742QuakZwEcyHoLMtE8uNUYeQew41zMmK8B6UX9H3L5y3hug1wMAZQfVKqT7GVk",
  "key23": "xeXY2NPY4J3vQcLtgcERfpvQvn6AQfQdbV9U95UBvxL5ZkrptxZeaKqGQoEpwXYLJE3aR7MXRjajKBYL2AQ6PRX",
  "key24": "5LNav6QDG8mhtGbp1KN1nt18jt4gND3Qw5WbDuAkRUECFkvwrtZkjFDxRHkpqg64XRwzpy17SpdaGUGdZx5sWYtm",
  "key25": "3ymkXmDKTBvWC1bNnWps3mAjv9126Fzp5HhdKpsMj21XK4tw5p7h2GVZZdDcm51He2Z7EAvr6bQ5LKmtN2HEAsTu",
  "key26": "2erbhzn2EJfEvgpw6dotUxFdYacQi16yfuGyYcUMJgmsJFFKwCHLDfWdq9eDD4qjN12aKYC8wNnzRtLU9fd3Nxbj"
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
