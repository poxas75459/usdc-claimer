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
    "3dpzNB41SJFbM1ivvKSYTJu9hRUQ4b1zf2faB8xbk6b1NkntgCSMhDcMR38U5GPeFqU2Kcg63eSqXj54p94DytLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuuZfWMtqbJTotyyx48MRhtaASR7ShAg6kG3UwZu23TLP2j23F4nyAbhnzoapqbpEjS3JJ9Naqo2N4NEa6bd8vY",
  "key1": "3EHq8wxV66Gi5AHMGw1Q5xW5jQgNxXAzqacTZaZRCemNW1TcbfFLmhw2MSkYj5yf8Ew9FefrTiEmVCHUcuX53jrV",
  "key2": "4cgfg9neMWXKHdDQ9b2ug14DUxVsBoxqDoRWxXGSFsJpZQGvXBTbTK64KBkhCMW9AWE5R7C7nZa7n1hcLtKocSkf",
  "key3": "MxbKEHVTraZndwzonT4YBzhU5M9fPQGXSypU7BqKhhmE2tnLRaPFcU6M4WdjnTLY9BcEvT3fAMhCE93G4oFHd62",
  "key4": "5JoEPTcYQehVuV8it1fAsPDByUgqEZDQ5uaursn9GyUrSdEoQhyyQyCWCyn7u8H2GAi5wpaBzvqarF4mLRcvWVNV",
  "key5": "4RmaNSdHWj7WbS7uE6XNJ97yNnthabLXRZ3dq69HdWBaTDUS3pZMkah3AU1vdnwVSFNgJwC6KA97tLGkSmzVaFHE",
  "key6": "3ayFd8DkYU1KmBzoEPpaZH7VKaLhsYmpVKRBvRuEcaV8yjbi9CDXQrL8L4ungPxnvjASkhJLvPwfzCMW8xcLBFfM",
  "key7": "93pNqFv7ng6p2eFTahrKHMD4N4EU7PRLv5m59tW6eXSLktVFngfu2csMELhgtXdt1TnmyabD7MJXHfiZecUuvZA",
  "key8": "4cHJwcDKsmA1mQHgGJLXQE6w9STVS5JLenMZd8JXPC5CfAnj6yw1PNKGXyeqaJ5JULaKvwYTg8kUbdr57WDfiYvw",
  "key9": "EjFiWNbHKnMTzNJuxUjCJhAaa9XoxTehb5cY2K8QUmUpX9ApfjUBeE6HpdPrP3Kcz2BLNDjngFpXgRLfJS24tdA",
  "key10": "M86ScxQnAZpJk9WE6KLdcFp7hEiVr1SAEJHLwTXLVjEMGa8oE2rCbTBboXf9XXvCKjU9JErWhLHT4PyhdCjhTXm",
  "key11": "ccUQ5kJtv1xC5vQp3k8QmL5nAz3vK5Fy5N6TY6HGyjv8r1UNJDumc66Bvjccarx5LeUkwVCcourndaV8raTwfgp",
  "key12": "hs2YyD7r5kn4oRdoXtTSTHKiiCVtawMt5aG4B2AcqhfUrBQmwuzHGXgmwpeFzpkQtAz7eYAqqfD1iExSuFyomDr",
  "key13": "gaDFasfgMjCnU6oYcfXfE8JVAA4cY11xds2CCmJqZhBCZhkFJJPUKrbXENFMUdyH6eB5fSDroFfudywFXt6ZjpL",
  "key14": "Tcjg6iyRAuo15K5TdwPnEATYcxN5UaK15bbZiMqPFvvHHxs2btWbbaDb1uqJeFdG41twT8dAZSH34SZAcr34VRs",
  "key15": "34LoXpim7BR1Gp44DfYADaF8ip8MUsuMJbXV4UKvZddD8jnuWCLaqmVibwQkihe2z2GfzVvHvME6bNkreA2etJwG",
  "key16": "5YYUDzJ2kMMXQhTBxZRTdA58cKc6hstou9j4EZGqfCLBWNC5vvdKofwb2ryCSVwLh96Av73a8JhGCae5vnhxrpts",
  "key17": "59Jwsz5ZFEJrEei66wXgW8Zbqz6H8urzhCXpTYxYp48K97Vq7vAPkq3f8RNqg3dsziLpx1hsr8RsntCN1qnWG18W",
  "key18": "4ZrCeQpYL5af8wuXDdMXwroK16QXvesXCA9DP2i2zntXcuX8orEnC9LAQMoYkRWfMegkdoFB8ekAQMy884grrEHC",
  "key19": "4Xg2YPBo3kBevSf7D4DKWmqeiEC7GFF4BYCJRnw4niLQNWEs6K5rnH92A4Q85ePSrwEeYvqQmhH93PTGATRNzf2j",
  "key20": "3v2LhFmD9ZHv8oTxUs9u21iLu9o67FGB1PmTg2RkXpWr1jdzgS6FPfsKMAuSgSWFyAxfddVw6q35xPrkgHBYBsfb",
  "key21": "32yks5qW9VwozGda3wdx5onyXfgbAYF6uW2x3YsJmNV33NGjm26coimReBadC4n1F9fyTwMZbbqhHguKWzdDyu65",
  "key22": "3Vzc2H8PuaWexy9y1ahorYWZ6mpW1yRPvA7eRi1Erdp3pdAJ9SH7TpCf9VGXTq9D6v5MQzyZCrJwswn8ReuPLJ13",
  "key23": "4KZMCSnKKNGHiKeqCCEY2X86Q1trsDAQVWouA94FQW5Gtu8qxhCxH2vSmWbeEeSjwpLzQMJG3BRbPZh91LU4eHvB",
  "key24": "3JnoToctDmvvUX7zJpUwkcn3o8r5ypYRcFjGVwnLTV2ptpP9EFqMyqhxBx38F2nFidPz6v82H46xcA2F33bCbSTb",
  "key25": "DzF8kJ8Bn4qDNvYrAMFr96VoxomNdvRf9uQtH8vekgfznwBLugVivgj8uBQT9N5sZDf7QNW7ZnupTtZrkw2CSy3",
  "key26": "3jLtw28LXyvwmoF4yzXgxjgzW5XGnuyXhgAbruxSGTtqLTRBrnfihNKQsaVJHKkhjeWjiMiuMWbc5d4yWii7dZEP",
  "key27": "4tK6ctEiCo7CxiDnBuadzXV5vsm8BsT7dDMX3U2wxLZMXgFvFYCz4YHqhW8syVLmkgvTamrek1HQmMXRhDZsyyAL",
  "key28": "4vtTEBLrF7pBU4Yy453TEfw8ZqtV122hv5kpjJ28zCvq7yYwZm5wMXWDhaQHh1rTphtaBe1NomteRHiyXq8sCDyg",
  "key29": "5EyWtHuSrcSUBpMyTnyC3oH529ErsVM1UH815wgwQisbgeCdzNVsfUJDggfGttiEpyvFb3s4WuhG23mefmYZ3Y5s",
  "key30": "3C28EVV13cQ8VtaUwBRhnEb28gqQiqzVLRffouBqtUK4i5qQXa2BEZ1AXjW8K6Z7DiR1XAtV53uTD2hSWpuHyViq",
  "key31": "5gmcYHv51gu8XjtinATbQJoDhDZQS8zYNobESQQh2yM7gsMtPEp5PT9SbZZZQkQcryH9MqzQS211XMhTYJ3Mxngn",
  "key32": "3dsSfrNXQBfkh4xn8c6EzEc6uMeEeUGsQXDyHSogGY3xAT7mkuXPgpDDQefX8PXqG7TcbZwoz2JvmBygKNBiyLsn",
  "key33": "3dEjfa8sDNemipedVnHHqdkdkr8nWUShw2bf1Kg1EqevcaZPVJ9ZpKFujAp1mXoYV4ARTtLsFomJmFZTqHJFp1qE",
  "key34": "5qqbStbM5473yT9GHWg7Bu2jGNdCSVddXvCASALsaUHQ9C9uUPAMgxoESruvNZpEPejQz4HGUgNg7PPxvcUCMGPY",
  "key35": "4mR29skFwYy3jBcuwV6N13Rk6TkKBmd9JKrCMbrSf29u7V9adKksc8Sfi3FBUGxevj9ryUTS3wAPFXfQrdUeDqV9",
  "key36": "4F5MdJiBiQrbYDzvhqKXL4VsQYtiVYY43YoJr2Dp7gsPfdbDB1djY4TxGqyDpwFy29rgJzHs2BFf8pGNpLhXbQP9",
  "key37": "4fa1BEq3wr3WSh4tjQyozxFuqE9cFhQbgqysaJ1jE3DP2f7UuqT1gpCHDwQhcX2Q5GavKU7agyx6k92TuWGTc1pC",
  "key38": "Bur3TR5FiQ1J6o39yZPPJdTKN1ASFFmbtTe7LZY7ABckaeJTGEMCfuCkUPGDrGzr6x6a4ED8pMS227nyWnaj9yK",
  "key39": "4YiUAiEwK48WNwczPsX7JjvnqDfejPrsnwd6e24Kf8JBq4NXWEAAVUSohVJQrQRArqKHW32pL5pSMmJz2PXvbhw4",
  "key40": "2pu983LmwkYKeU6Ls7f1pcyLSZs9XFV3fL9p48XaiJP8rYrt92yESGKfX9beLuguwTfgHEN22CS9thYLgjoc3jL4",
  "key41": "3CNPXfWguJvVSN797oaqALQwZku57Ctzt24AnkgJSh3v3FcbDjsQQ8DMbcjzJeVK4CmWZWJvWURQu68bHVoBJzRk",
  "key42": "isMdXHThDg5xsSjjKagkTBF86wmSdnUCFrc4eAr7Vaxt74pUZgBykQy7xj4j9fsSQ24BwByzjVRSQhSwoiaHoP9",
  "key43": "5LzEhNDtYL9LwhHqjjy9MhiGLiChBhzZ6zCnqz8cNZD3mQusPBzzmrxar4eSHmBxHwyLzZxzrDamEfRKiRWW6UNJ",
  "key44": "MV1iMTPzzUPpWTzpqBAyJvqKjypB26RsNZxum3wJ3CZM8Dj216i8FtFrCLsxDzP3hQiKNymT4gahbehh4xTn8EB",
  "key45": "2pb1pn7AQ97HTYSr2tmgMw63QG3S2Kqo1egEpeU5N8qPnxYXSch8VcK1L9GtqAdZApmjNFutYFNTsKaFQamDLJHQ",
  "key46": "2BbSzUJxyKJ9XKnTBx6pBAU6n8m1Sf5tTmjBavB4Uafkkyp4yGbxS7vsWEhhQ4SbZ3vCRRwvAqfVQCPQSkHV1hhL",
  "key47": "yr38AWHHnKgCNj4pPrN3e31EBYWvKsrZfyZsLuxUXhBVPzUctLtFmUbtF1FJDx8UgiFxtjEnZVMzhVMyhYrf4wK",
  "key48": "2Gten42KL6oA7aiEPnZvVyi4mrDYpNUjj7QSMQQA23AN15vsWiG9VLxiwADEHo6fQmZc18cqBDBWb5mzjqrtinns",
  "key49": "2WhMwGAuCnunuphuzAsWy17QaBiUMxzr8whjV3iDTz1kUF4wn4QHeQjJkksj51vJHH54mdP4Pvdu9evgPTcYK6a8"
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
