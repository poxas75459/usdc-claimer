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
    "2VmqDtnVn7tim7PKJ8LdzpzisU7NVTv6yuKQisQxvJRnZ9ZksScWpUmo1VCgQiLnbHnGdDcW5xVmsKEt1MWZW5oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8EMTPRC5jbqwPqVZYhNP9GTZucShbanubKwkrvkGStiNAVYCvwLrK6w9ybmF9cb3etd81JZa8WB1qUHeL4r8AZ",
  "key1": "4NGHYtNxCfxvNKtH2vY5tzTUGpxBwkwZrwes8Ub2hQW6NHzBdMFYkdXE4V53xeFicn51MYJ4atBjfx6EKZSt6Sz1",
  "key2": "UkxP7mRADHyDLo2Hru8JiGJmwBo6pKHnHQaNn6XsCGSVwk5atcc3AvovzNGU19LT3Wihsgd7bF8hk26pKWa4cG3",
  "key3": "2bJabLhWXw9b9J4KwdG4nAySrVCKsQm6ajsM5gqmvxAnXPxfM8yWo4tbvErJRWw7J71mRR23qnUfdN9kTcVp62bF",
  "key4": "1sHySsQT5pHVr7mNJ7birKW1Szkq155hfoREtrM2DGxgehPLPx6tDF3Joz2KEA4B9t8x1ocymGmryfp2gLc821c",
  "key5": "3mtM4nCMeqTuHMWcDDqNdA7fisjrmX3L7FSUqDiqGrQFdKYJ2oqsZQ9RZLSr3478QQo1KUAp9XDMZiBCpiRAUpMr",
  "key6": "f5nMgixh4qjkJpZGR4fGdW64sijxxNBkC2osgKYCBpoeU9YHCR42mKqanuhZtxRoFTrYWGi7ZUmCdQu8vB4H1na",
  "key7": "29k8fopdBhD4GaqapLV9KKNjY1jrZr4SVdxKKwjQioaFqru5SqPKoBysAgRSyyaHqa317w5MP7AZAag5fcYNbpLB",
  "key8": "3rBHhuRJxiLFT4E96DqvzDgw8ES1CoCAp3LiAETT2MR9e7zwodFFNFAs6hFm6DG1jge2wyCSTpBE592dhXaXYazu",
  "key9": "4Cv3oNCWaBVkr4FQzHkWxK6sHiMhZHYj8zKLA3jrnYkrM8q1iQY4Nh8EQMMcXNeotntsKuriRzT58A2J171YihNq",
  "key10": "55EUPLV3AjYTLREC4b8T73zPEWsCYvvG2gtpYT4sXRigskGDGocE48rbNEva7QdZBtr7kZgjA3PQKVdVShjgX49T",
  "key11": "4mZMb1i5FHhWrKpr6jfLpjBxp94sapAHKa86fR234AboUFn2nBWtRBYgLh92iG1mra5KUs45V5gmg3imz4j3gafc",
  "key12": "2rwpuX95rxm4TfRtMPN6CeBKqYyGQ3dx7NXyYFkuSeCbjYAkihxwPC6CPvM3HfvbTMo4oRE4YfpuSwC6N9K6hVMK",
  "key13": "54Xsgaau22wy1rEGTxgkk9Ei8D7dGmrZkgFXxvcerGAHVutMowwMXob2HawoH7KpHeACCpg6qG6fyyvjPPxPzFL1",
  "key14": "xDuqtwV2xQFsk2sPoSFjd31sQ92xnvsZC1GUcgaLnWyzTvPffoB5q5EjA768xRhbYKhgk1BZWV5pZtbFcuCH2ch",
  "key15": "3kTgguyDKemr4AgPa1jeSMeVYNDSZEzSZ1W4K5N1DCKk5v9L3m2MCpz4tJ1ePH16DBm6xRcLN1CJ4ptYSKgDaUqt",
  "key16": "57a9kzGYSQSe7BbNd9LQ98nvENxk5QdS7Dk8Wa38UmxMhVW9byFgcpWyZxKHdATgDDajL1Xs537hUCXJzQF32bWH",
  "key17": "2WacWDEMTfWp4dFYtZJ7UQxkM1uXK2GzmsL5vBbC2uBrqM1jaMU5zsQzTQrzsk7Zi5YDaJQCkwkoR5Jwqf4MJBFb",
  "key18": "2QktExDCKhtUfqao5ReJ5EH1Ug13ejgqAbZJbaiwFPnpFbWjJU1NuWyoDYLFeiqC3wvf8kaDRtGVFT9vUk6wsWm",
  "key19": "XYQ1JGFBSd371recJU5qgRqK96hmcoAnz6f97o9ZqTn6G8QyXZva9YkLhRq1AM2Zqc5Cm5tPmre8XtFcVfWnpZj",
  "key20": "4Hg6u5sFD6QPzR5gzxKxM73V2bG1QomHNinfEuqJVJSs6EZR9LoJ91fqtjYH4j1sJV8pK6tLYFZP4n8fJQBhgGB3",
  "key21": "43TgsofVK7NfHbqzfZa6MNGepyW73SR3qg8hBxDw7MQmyfY3DhkVk8ytLQVHgvF2BGuuAGKvqziq9RuzUhHYAaNQ",
  "key22": "LucNLhAUYSVM1z4m59BnHjn4PwGt4hSTzMKJhbAfd2Tz6hR1TvKMrSZ3zmfVCPtjsAshfA5ZfWjP7f2yiGmE46F",
  "key23": "3MJ74vnHLixYCwbjq3uUNdmaE3X7kvUECTuRCWhNfd91NKJaEQ5mxX9wQPXm5f8jwkL9BMngV8couDw6oNtmF74C",
  "key24": "41cZv8rHuaaH6bJQKrHocVuEJKhQV73CgRvYK6smVRfuozeWbAbW6eiqKQ6d2ZDoM7V6Bf7f1Scum6aCbpDiSrrP",
  "key25": "2zE1aTduvgGdJPJSCgRSu47d8rCvbG5czXCVa9nWCXWYnWszuiR9FpWRUkWZfHCaRMpoarXrTutXLH1fTHwASEMM",
  "key26": "4aXEVrNC1eVA93LZqYJ9ijCnfD53YhsU5YWjvCR5NXmBWF4knCeED2WFM2QsAuv4knMYYfojMvGnbaWx6KHb84yW",
  "key27": "HK5dgTxGdLpaNYwZkbPuEhGbuD796SMFs16dPWN6wB9y6gupDs6hwDym8PpxektH1zDwQeSsHJWtB7BAuUzD4qo",
  "key28": "2dTSh42Zqcp94Wv8UJfoP8dKyQibTBPh7kpB4yrztnxEFkqspvypaCFC1bga4jKd6CjPxPqjmt3HFSMp7LScymys"
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
