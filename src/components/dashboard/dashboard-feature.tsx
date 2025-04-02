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
    "3TBNmUPQSNx1U8pSuT9LjuazMDj3Ki8wqqM3CpWfXB5KESgHtRQiNJJDq4rLYCEHQrR6jAiD7AVuz4QF7y1kiJ12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNj7HdfX95zp4nuiWW4iM2KrjK9swDCSztfXPsYaPYej4mMh463crV6A6jFV4pEjPmMKWMLNPJQfPt6yESke7J1",
  "key1": "4VCM7X1zPTWFDMoMLsUK9m1sxyJwPAMVgNyd9dhNeDJn52NWWy8qZNDf56E9GMhBvrYfKY8KUiNaZaq22rYTjQWD",
  "key2": "2PMr8xVEBZR9giB3Xw2dC9SB2kGmuyUfDjuhnxDUVvoDbNzHg4AaL1bs8Cc9coTCK4sZXZTv6TnPFEMPG8vUMUvK",
  "key3": "2pnNKY4ZXCCae6eiJckmt9bsPUEkhuvaGpWAKNGhpfk5HkCyiqK1D8JUxTY7tLknfPJuuMfZWNqWz42E3QuyDXwu",
  "key4": "E8s46Y5dxpRnVdut1xW3CBTZm177HnUuaJNRsyijGyW53A9rVdDbxBfRum27tA5142KBstbGwMrHqHAkYJCLas7",
  "key5": "3k985TruvqmwnxUxgnHiSW56bK6JVZJ4Z8YnojN4953pLzsFUJVUkRoNDjGFZLCSRMiA5SFF1cb1Vs6voch2Jmpq",
  "key6": "64amHyA6xD8qFrPkkYDZo6uf6aLUV446AJ5Siw3pXKyQrkktSQEjdKH6WnYqvmijJe7scqpgAunPqh67FhJcWE1Z",
  "key7": "5Wh3prwD4HMSHsVFazdVGq6YEiyAu6oynFkfpjwrHJzCYoUzKNHnFbC9Pq48BhVumocmKkZ1JVXWGEEvrA8X8htB",
  "key8": "uPh1NdgjqwRGwgDiwbAijVEEoCujjACibzRZsUvVvrp6BSYkv3dUqvtpJEb73QV8agDcW7vfHhbXqQoY6SmLRxB",
  "key9": "WQo62q27pg5WXURvAgcMr2DPa1iAWMNHtM9s7nHxSJWTdtnEPsFzbkyQQpMCD4Hne8YkAySVrRWEmY2q3vu6FrC",
  "key10": "3aQmKcszD9AWckHTuhBJhA97xH5UQWsxU8xaKFG1H7SYFJK5ZVH5bK5URpEF2WM8fuHgwtGRjDyvT3XGDXQwBojz",
  "key11": "Qj15mD1u7nSAUJecgoday45JtbFB8CeSg6edshRFfG4NbUunkgTPkYLA1e6th7KQ9QW5gZNB65SitzRZRQsXuhW",
  "key12": "2E6vUdPqSjTYb4tUMjmbPy7FwHrQ3Hfg2p4PQTxmr9JerjQJTJ2Z5mjabrM6qVYxTXRi6dbtu4ZeHKGAPtf1KqkD",
  "key13": "3VncNx5k5qhiJDktXToiBU1g7cxRfH32e5rQLW1Vouy5eXaHXJBmkLVnoCLunEwf2RzZuo9E9Pg6q4hqR2GT8P5r",
  "key14": "3qJDP1SHns7uRnHZzbCXJP5MHxnVkTQewgVuZohFQj4ieoBXY3PNHeeN4s8Mq1rMPM9cuK4nDuzXNVSh9xUGsv5r",
  "key15": "XwGWusULrMfycS9X98j3XdXUnEvyqWV7CQ84RRMh7cBNG3cwfkJVV9HW4in5MYAqWp87HDvNAZ57ab3nXigwR5x",
  "key16": "4d5MZqCiqP7wBHYoqcvTcaB2rdbX2T7NePDpv8SGB59JPetkvQSYMU6vXKTZAHA7gDBsCmgctLzFSahr8r9gvj25",
  "key17": "4vTSe5zGMVqKy3CYMaDc8LMvSetaRTzEGQwTpPLnp8xgFEtEEWhCuYGk8JmDpmj8EcYF8zQUKFHrYkQAgShiUvKy",
  "key18": "4Ut6CS5rdY4G53Ugewd6JTdwdaHp2A3rmG6nqEgP97Gq94oELDcKUVFWFWFSxuys8hPijnEZAVrVhEfM1JNadELL",
  "key19": "35jG6KMe8voYSuFiGsmhJbb4afiVjWN5yjjDUK87jbBFztfh2N2uD1xNWJgXZeYzaDBEDW58J7WW1u9Mj8gvG48w",
  "key20": "5iAT5qkiaozhifG55jn4RMVS7CTpqWmq3rZdg7wHvBqz7kfQ2qHbsEQ8HH1Lo6HJ1MbLh5SVH7VEaosTP6Y5xLcC",
  "key21": "4RzioCmhgqj6cBF9FL3gZ7gc3YqciwD5XaWjGQtUsQ6HnSVC6UtSQZwfc1staMNiqDfVC4x4P4wNUu8PimwvoZdY",
  "key22": "3tYYsr2RW8qMDnkVKdXedhmaLoHKFSaXx39s9tpPmecEEHrZCH3zuPN28YoRFiQHtDgJiDX6Bt5zFMqW2kgb8aoJ",
  "key23": "2zN61SZR6ACEvo8A1AwPgL5XZakkRPjDGYeLqF8DUJY63rpLiPhdZr9xXbSC3wFJr85NW3zPdvkcWcmYKDEBWZTk",
  "key24": "3Zs18iDJydashNo2byvGwtzPvBbNiMx3PVpaz7BgQhWyS2owhq2547wmXXUnM9hCSWkjHbRPoYp8oHsDjpUCU5H5",
  "key25": "4JbMeja3iaaonFLi3wCYVqustXtC9124zHrUJSqRKu6yj8sF87ZvWDibYhMGneCuWJoixAaP39SSp4GVmcKtitVw",
  "key26": "9KmyHNBfackhhMdumTt86cHiSUrvVnEzeAEqY2ak4HTWVE19F719ZcMLD1pqaXsH9CWM9q7Rx4pE7HjTr9GHeRV",
  "key27": "1dUM1eCL4mNmRft5QZq5aXUev5uTWECokjxmAFJyjisohB1gGjXVcj1UCuW5dRV5Yd9jYqbwwEMUsnvWHSjnSip",
  "key28": "4LiSKQG1V3o4BD5cjmXSzqufCMHXRpYyXqSXKJzyjLqxbeTVoXUXfiXcV3qYzYQUfsiqHV3YUQSmhFJ539hZDZ76",
  "key29": "3xjrErSHwMk18ZQdvZWGtsg3sg6aLoWfgfvoWz8vf67T8Ly5vV7imHPJNJNYZNepBzAGkNsAddX6caPj4ga6N3Ci",
  "key30": "4ZGJWc8YZfrmxn19hKBoCQkFu8K9dig4wLSehkGWZx8THZXiG9QsdobcBgUpym3Ukaa9Kg8Bd2XdHnCxkWgNY7MS",
  "key31": "38Qp7i7JNUeUs2rwrdVxHZousLinTLprXdDCFnfvx4mEaPDGSHTxQs3RW9Jt3LbnbeRdytC3A5hYuY6a4NGd73Wr",
  "key32": "3V7HHq5buuQJj7CnpMkkdijPQb7hLfE8yEKXcjeEqAfpegc6bTYXeFoF8w7oz6Ld7GpQxKmagEfJZVJveiw8WF4s",
  "key33": "46beaBWHyCX7NCSaNkwVQDQXwZEeSTgcRQM5MZt9e45GTPs86vwY28ejs1pjJNZRNZ2KJYiTqN5hfrt3KFvH9Ziz"
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
