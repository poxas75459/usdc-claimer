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
    "4U7TPfGnncrMJoM9n8hZkgNYto8H7nnApci5PMRJH4hiRgXbFQ1ShtCzbRohxwByaCwjUT7Hmwkc8YCwxrdzKUkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPqAq7wNmjmsXKSFDtmvjECwt21q8Zi66nXnUuNTeSi9ABr5ZCobHBkbdnsig49Sot8zGcz83cLA61D1RaCPi3p",
  "key1": "6GR8iHp9yWuAhE9LRmxX9Xwy7JRrh4BrdLDSKY8tcq24Djyf3KKTtTcyhbyCE5MqFUCrZYejswmySHecdFQwwo4",
  "key2": "dDKdRfJzbomyqWXzfc3CgDGWB6tNDxBSrqaQZadACbCvnwxGBdpGbUc9vXyh5Rs8Rue7T6pvPoahGyL6Up2Fvm8",
  "key3": "5b3GjnjsHySo8Fw7EopEg5jYB7o7WcC79HLvjFZLfSHpKNvJ1xkKfdzLtkBCeQbrZUJB9dcEJtemhqq67K6Ra4z8",
  "key4": "4LXcH9mREGCDpya94eS5TdQwXQus8LjjHhhFXiCWcmCbWZcvbQ3igMP5AmmW1FfKZ94jecASW7Vat7Ykwcp9S8Yi",
  "key5": "2FYjs5xiUxbxyG6w4T7gaUT4XK6ef2zbAjZX8YrGnYcvdN1gDBNCa96hciuhXFxvSEPyqLRtyvW1X3DaER6tipV3",
  "key6": "5W3bAqXpQ1gHAzm9dy63Zk5AGnHYCbYQAkHTJ8sKV2wukwu35CTjgZCJeoNUW8MFxw7BQNQncF76Jtwyqx7x9X1o",
  "key7": "2BXqrMRJvomHxtoM6dzHJzFgdcFLjTSUfGhfkbxSJKE2RTf6NFnRdNw3RyrCSKLkF5mxZg7J6r6uhW9YvC7HZcji",
  "key8": "5vEV38jEn1pFBkdLuYLCt5t2CDYTkzC4HkVmyzkQh7SWwKKg1fMGPWqQCnf29qZ7f3BRB6r6ayxfdHz21LuTBJhZ",
  "key9": "dmZqdcRaq4xcDDAF8hY7N7LzjC2aCCcwV9aCRmmwHehKzZfY325jaBTC58TASLXM1nCrjAqrVhMUaF215MY67gn",
  "key10": "59r2iMHUmpro2xUPbmWxfzX5dkZvy36jnsow8N9nsbTMoWZ7n7XTLyFnj3o63khLpC4J2sSkQdWAURfM5G8Yjvry",
  "key11": "2BptegkFDCyFfbT97FkW4J2pitLTwfcHZzGjiATCB2bPkXKX8fvPUYCtiEKFheFMdYPeh7hzJiXjCtgXuWH6oCBX",
  "key12": "4q9wwiBn9naNQNkkCXwQnE9MooEzp8EbcNg8YRrGZSgMSbb6xhXPPNH6KgP9yWjELCyEWG8wqhyP1gEwmFvZiuJk",
  "key13": "4TWgeYJJwtCjTkwvmHqEuU7ycYPQ51F4beZ8VTiq7vci5WedRLdgSejfFj5UCFHLE2FfYr2pp1TovfkM7LcxHd2U",
  "key14": "44f6HmnKVw9cWfZxjLMdVubUtS678GxXvNBcAiJUrB1gtXNS5amGPrbGLNMbG8eVt4o69YA4TiS7N8gcNjjACdEH",
  "key15": "5GoGngsVDGhGfazCQQPrKCHLjQE2KE3ojzU4LmP9cKGNgq7ZBVE3q2yFLPFvN4dWvCEChLMfX75ssjJucreLe233",
  "key16": "2xc9QocKUambbbkWQry4j5jSP3EHYx5FaQHu7kaFjBxbJJEJZe1fGD5fpknrzoKm2usAXgmFw8jr6otYjbhnUPTn",
  "key17": "Jm73XqatrnGLHbLkKW9ebHviQZ2VpS3XTQ4UtvfzgAXamRPLUaVhqTuqFxZAfhuYSyUu3pzqJwFP6X4VBgYhAWe",
  "key18": "3mivdguePEHNAsq6Cg9FkaVFPpSjgg7ebibCHo6ZzhkxAjCyXaafXxmGQYUbiykQ8rxZFKWTTHoaUNvPU1BRC74s",
  "key19": "45T4J7BN2LAEMxgnLhHCZAnjXLKpAMGW4EHpGiW47fSxuWMt7KduTqDu1FDfMNP43h6z2jkTZUtYqCRiPGfvnBtY",
  "key20": "4AvpobZHsJ7agLFS38fRgUfTxTCAL4gNkNdduhMHxznUzjNmjvyqwAhLsCFV1w1BK3CsUkm7rhK6Wxr86jYRPoby",
  "key21": "5nsMbGoWtgAdvQoCyqWGxTdJ7nPTG9Vzrco9gqNa93AHQZS6PLoT51Q2rYwdezW6PDquE499tcK1NCozFYfF2vgK",
  "key22": "563cbCero8NqwWooJ1sa48sn1YT61ZWFAjzwEeVYJjRR7XSHBHQWQoPAxCxjHXy6zPsr8awc3V4QAhcthG4TEMa7",
  "key23": "EZsCff6PaW45yEKzpjoxZop3eeBVJFLcoC7ErBA1KG3PeDv6QztyF8FLG3R5XbYkvMj3qbjQc9gMrCDSWtppwFm",
  "key24": "4EDQMSvEFYh5FqWRnCCA6wPu7tF23DvvPQSZJEdCPv5rnqV6UcpAk2yZYNc2LiTn21qZwnyTafo84e1rScpfi5Jv",
  "key25": "gPnWSKYGNVFhjB5JHn1XXFMb2tUDwFNk9shh1Vbj6W8dqdpLJpNfwqsyhG8qpKfprLr8e7mqWUvLjHNeMNmhaUa",
  "key26": "63fPnHTkj3uP2xhgpbUn9ehAec9mwSKcsPg3ZNR1sfzG2wyK43B6njBJX8kcbKrpQRpSkiayDdMYN88CRY94ya6a",
  "key27": "4VAb4y2vNhZ2qHyoj1J8wvKBWfsstrUj1iL1E7dqmrirWsc5ZDGivoz9qZ5SX27zh7JeMEXp9jZVzQRt72qUKZsh",
  "key28": "5nt9v7r6hoYJ9yqXx3nzTvKLwPrtKPtPxdxx2pRKz7FD6zoHuUzkQJ6ZUiXVjEYheTcxTm4CmF9ibe3N3eNJMruW",
  "key29": "2TP4GwUo1W8cn439H5SgK9svpbpz9FQWt8Ng5ZwfB3A1ZXaCo9xYSdFQwJS8W61smm1sNsd9ZQwiZcji21GftQSy",
  "key30": "4yYLGHtKytgSdSZ6VAx8BvXVosX3n2SbqL7h3BQbRusyYveSEneLCXyYYq6XZy3TuaK8rjEWKWuAZCZ5Gcszh8A1",
  "key31": "2vN4fBwhau8CPfu9XxqgtRbsiy9VH26o5rYNJwoPFpDZtrCA8YoBFHU4bo712VuuBydTWdDsT2s4HGjxXgVUTL85",
  "key32": "2niXKczrukpsDaHtMkJEvenRpWwNkv9ck5MQouekw2umf7zWhFuRroUH9sPouAFXs2D47AfnTWBTQfTg2DrJuRR6",
  "key33": "3aBCzDxXHims5SGtKyrmCiJABbkxAroE5kZGqFSDizAH6fM3iDUYDaW9YZz5DxWtyuy5HsPsBws5Hw8zegipkL2u",
  "key34": "rvdwsUB6w5Q1hX6fnwRPooFUfGzLG9ttsi4cjjSb5DQbqUN7HdDEBQgMcUhuGWBWdFrqQVFhMvC8WasgUh59X3N"
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
