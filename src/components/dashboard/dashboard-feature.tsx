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
    "AC8H31uViWdiBK98wzYcrpPgBUSDJcyR8bhhRwoE1QSCRpojH4AhfF2cHm5RdRgqfLTZPmjiTGZuuFfSsLV32b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QEVVXR1s8BSc8Gci92hBZD8YSV3bDayQ638F2MiPXzWjSpZWf9mk4EPLBRAVVyLmTnok496CZDYyvmj6aYaRzg8",
  "key1": "2EB6pTz2iJT9odqcHvVazRFggrqgHfiGpB9XgzCjwCdVP8tZFAzEZwBNBwXFejs7Pv8dbK6V97YcdKTqqKBxo8d5",
  "key2": "4JNnLZt3KEu3TZCcsmJqCuYJJfPtQNpLHEpdZEuFeuUNPCcoq9S9Y1C2pUpcnsGqzqCJebHU7R6BWyrwJGjrHC63",
  "key3": "37RGgBUTHB843DRGHuufbTDbJGsM79fuNZzzVdJk5Xg7ExP5NK1jrzn4zgwEru7jnUA99pCAAKdNRz1AGZJvZhwn",
  "key4": "2BE7u65KRsQbECa578vzGTnEU3pjLrzBZarNp3gH466QxDdCdWNnAk4D4s44Y2u7RwZFJWtzGJ1ez4mPajeQrp6Q",
  "key5": "5hs6wLPS4gKyiqrccML8kwgmareHLR54mF1c4rF9jPutPi2Z4AQwdY7dRVN3pAkR2SWjMkTiwn6NJUXVi4GLcm7F",
  "key6": "27qm6rWu2Tbd7XPA9JSnFoqZEDbCrir28Gb6ZNbw3qYhnSHxin6mgEspaMgbH7SzVhBy6ohtgWnWgD7My2ixmvAT",
  "key7": "3HvDZUKDnVum5KYi9wJ33QE1wVCJcZSN2dWeJa5ZC8uYxKMYXVakcgzmfEvBxikA654pBqBLdRzsgEBBYgRHGzru",
  "key8": "5hRmYda8zQ3PaxRdbDzmdQazyRf8faFvngFkE1t7YybXd7Hh8t1pr1457kWxv8kbyGtNHom7HSF6tCdoYmd3rgcr",
  "key9": "CWy6vNnGovVyQihGSzJrXtpMatcj97krPhMUdjccEPsvMeQsTic1Q29KZYmRMUXwq3XLzgCr1AagFMaYgHTzzVk",
  "key10": "59mHCJZYW3Fv7jrQacQ3k6ZR558k8to9oLQ34FTxEBz67k9ciHkPhBRSvPVSBWYoX7PqeYmzQEH7qYoBR2GoEQPp",
  "key11": "1PQjUHNUDViZXRhWPsr8dSTswvoHgPeYjRgWdQobAVcg54kET6bwFNhzeuduEhyPEAfxGkCTqf4mPB5cZQDgrp5",
  "key12": "2ekAJifzt1USqgWKqJGTxVCS1Wo1qHLcWg63uhXsrVxdDG4SwWjdL4zFBRfixqDUreiV365Li1y4yzZ787S8Lt2G",
  "key13": "2mm4DaChxahJtukYGX39W5ZpuYfSnMNBtGchHbSexUpWVMZjBDr59Uk9spuWZogp8v9MqfLVD8s5agkrzXkhjpTu",
  "key14": "3aSaX6WxCMYWaMTrp1hhBPbzCEog71L8fkWgB8JtdZvbfbcLzsDznJz1efbdynUEJTxga86PrSFdmvwMz9XUZmqa",
  "key15": "65SeXAVChVxa2NUAVWwNrMQCduNyj7F2kP8NRc9HDS1yBbyst9WEWfdhfc9d9XJ6CJZ3aJMnHTXi86hxPt2Amfvg",
  "key16": "5z1Cga4B7fDDiTMEJEC6NLJYFAFu7XQHXGxAPe4t5vv7b3BHVhVLjTernRZzuNmA5rm3csBn3pURg51Npfbjini",
  "key17": "2PXJDE1HiuU2Tz7ogwutCcdYDmJLoraUpKEo4u7hFU6PYuJKDZKk8swAQJnZhR5vKSJ2rzkxdbF1HEV4ejhBM7QL",
  "key18": "SzTLUSWE7V2Ems1AEZWZKm7tw4G44cMQkaJ1h8KJ9z1gG6WypsFTMXXumA3PGnWHsrk7LnqpJhXWkfXDtiqjEcn",
  "key19": "5d1G3UVXWcSztDHbMuBEwDmFisZSaJFdH9CLqQMmDujcy7XCUcJAupMwr9KfFuReor77LWgm9HEo8TvHBLu5vLXW",
  "key20": "4HPPT6oYyRV61aEijGFLytN6PWrdbscaD6xqGCWfo3f5JeMt8fzqmwTpk54rt8TnZchiUPBQwZP9zQjYhXBCs59G",
  "key21": "376j9JGsqP5YgDsZp1bxG13DPPMhkLMijtKcKXdnAc1yQ7KnFquWejVjdMs6WYSg3c8MgLCiaCNg3YLtbxu4qghV",
  "key22": "5Tq4KyCZgQbPfKr9eNuTHzQDgqkumraCpwtfMDjrjKW9BBuUKjMzLXqGvZQqCbz6xgy8ukz46KEcsESJNvbdLNX7",
  "key23": "3hDnpWjSivTEf5YBUTnmYwcjuLx2Dhx1k9K3Wam9jjqtxAbyzvruaDifTjEMTPrX8RLLjVwbXLxQgBjwESUruBvi",
  "key24": "2757qLb82Ro7216QepqU9ijkoyfcfPEWgNSdaT7rejrYSZugwUPyVhSqGZNtVyroLqfvZRGvYHT8waGdAbMJ6psV",
  "key25": "5d9wf5Qbvu6UuGiTes7AD653iyVXdt5QAjaviHEUkhjx3kaCNz7JoqVJgij4JMKt82bYJ6bUj2656LUM3ormujB1",
  "key26": "yJDj3Pc2drtfcAY4Sgo6oTHuChQEnLxGh9SkPR5CvJ1icSkDQtA2PYRRZGBniaYNg3q4QZyjMrfD5SX8AZm3s7k",
  "key27": "aaS5mjNBLZXFRFxvGZV8wQb6oTczUxTUjv6rQ4Vjyszckb5MgdNcxeKLATqNbNzcT3PqNFWSr3E9cE3qvwb3WCm",
  "key28": "4aqRiGiGypM2zP7sq7nrYi9vrQkMgBiBM5hrvrCHBS2eny8Ymn1NJZ21TQ4Stppv49Hpg4iW4g4yAdXmoNAJrX2c",
  "key29": "4YGKTTXMydtVeJ4DzBZrTBYfs8khFAZr1dVcq87igfk9eDoM5qod618n9bfu9t8jpVFXs6P8w9GojxhTPjCvPTSb",
  "key30": "5n21r6Jt4X8sRp1CxFpr1DqQEhMmNMA7mKsfT7XvgMk3y5U63aUU67WgU7cHYaziFavEHaoM4dUGxn4fwibo4ezX",
  "key31": "9QDEDBGshJUkMogJPMmGp3HdeMgAFnQoVpUC14kCxPnuR3XTegH7u7pEgbP9xkSRj7D3w2QNw1qEKNmohcq64v3",
  "key32": "n3c2zEYWfi4ikDXaAza6LQTCuhSBdJKEqT9RMw14fLHFNQ5cTXyqC4hjh2KPDWGtXiMdFG6LQk65ffxzotEyXxM",
  "key33": "tHGHYW1TrRb7G7g9M5GbrP53j19psvqiQuVDSvectEiLehag2QEBx6mJNux1Cu1ibLCmUrCAYqiWz9FgGgRNu3e",
  "key34": "4iYmhP65d1cms4Rvwp3k16dNoP7MGYt28d67wpXaEQK3QcwXeTo9ZH5ZexMEzZmDbJfFuUYDMLMzrfdERMjwyAnn"
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
