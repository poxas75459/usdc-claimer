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
    "dVnr8MnBjjib24mCvpp446SXRF2DjtJgSSjhm5u2jW1oZkVRBS3T4ixLSjxhx87siQLe4yCJvpAMHEmoF6XHLMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcb32cEJmvnXnJsZFCn7Qg4tRDoCfRRfZp3cjqvu2UfL7zzGkzVELQwuuYhLsdTYf5kcYCEouGyqerLDD8hE2ad",
  "key1": "47JELEj57TuKSN6QGF7XCasF386xSk3fGsfpDxTaY1BhYPu6sG5rh3P9SzHjrdwYCSMtvZSTRS1kzNLJEWw3cA3W",
  "key2": "2rYpbs1GZ3LaTuwgfvYoSXFR3EXGXWgiPHk852FiJvbcgYTYttKdNgfWUpisdzECe5aJJogFikCCsPro7kSEQKxF",
  "key3": "5Gy3r1vC8zzu4QCJA6ALZs5KtS5BCKTZ6RhvKe8JsEBeB1fLepLC5J4o9QEMiGtwxAD1Lv46PB5YW9C8EZPZa8Y5",
  "key4": "4UtpsZ3w5Ee5QJVpwgAfJqWBDNYbQt1XFjgXYEEoYcfj5AtL5APU9Tpp7YhHRSUpPHtDegg7UkMqdEazpjUves5y",
  "key5": "5UtNGAzDLWLh2A7DRboGTciujp1zg1WN2Gne5xBveGNQLv6CCkqtW6bToQdebp9HKn5GDncv3ZsBEMWjVe7SpW1E",
  "key6": "2fQDmnYzU8wje9MvAXPYofReWzjbTksdohKvxzxqNMwcUikVt4pgrjfUUWf97QJK9CdLPpv5UoFwatSAQuwrbKzM",
  "key7": "4jfuNMKwrEe53FJdzQ8tTKa92HCEg3Kxjz9CFZFTerRqHP3ggWxDq5jBXgUNgr21XDnpJQJiSeCWg6ksEpxcM6iB",
  "key8": "2RNUpbejUwii62gWLC6L7fhxGPm8CFisjPeawtnUH8Gd29Uw7BB3MXfUxtEYpFM28N53q1K6zqqVKu6rT6zxEcvn",
  "key9": "5CGXf196QSB2HHkA7eGSEmtLnPfUPdDxograEPDKw39MSbAErm63qa3Bp4ohfEHQ4uGfNuPdzYj3nGTXRDpaQ8VK",
  "key10": "2Dvtve8DPZSHqgww7BUYNQ3ksXvBMXjyasGTiBuZ7jS8vfAinEAmE88YwR8tiesfjvnNewhQCVf1SMhmTbvwTXQx",
  "key11": "5h8i1Lu6Sd4EVgnrxNGJyKWaviUny7YcG6psSs68UrbGcW3ZtQu4TH7BHhPemzotYsjkGGnTUGy44Hevi2omNVUc",
  "key12": "51y4JxKNaG8iZ1sVdR9frNnR5hZ4DY268SfYB69qibDg8jYBUWeeMRogXn7XJfyk5wJgTgPZwKArQ5qAryq7JabU",
  "key13": "3MbP9myuXWZMETvrhBA54KfmXqedEWrL4rd4xKAWWmQ2PBkPaoJkvtmeAmqbt7snr3X6MNdao9FcHySTPXmy6bHF",
  "key14": "JPrXtYWEGAeu2F4gDXbgXCXMEPANTbXUNeZdBD63YhkFLtgPmh7mBmAJCzajwibdgeaUYZfbUsXMQwAkhXLH4gD",
  "key15": "2e4Lja456Dm7C9moHrGQkXb5o9jZvDyrUi37LA9nF6jhfParyKTixcmFSjkveMVF2WNSupthPSWWJtahi1jnEEC1",
  "key16": "nxCUMHhPr2Bgt4HnCUUVSDP5XCQP4bH47xrkCvhHoJxFQ8BaKbXhopR8iTQCgW5JgUKvyWkJhiKLyQyNrQG61mb",
  "key17": "3BzgziU9r1Ncvpu3uDCDvJeEGobcpNvtrVWkTAaDMfghzSHrcx13DjgNpdxDNTibuzYv7Uve8AX5LsSSe1EsfPen",
  "key18": "2T47nc1vjFFtMcN4b9MSwr6X5BK7ErVt4Xk2NphfTcsF3kWP28WKt7aoVmLMqEzzm2FDRBJw3jmD1gJZsanPXwcy",
  "key19": "253ANH3o3HXLJtBxrQc7iGSheGaLBC633N2zJdk2o4HUcb7HPvQTiQjr8bJKdY6U1o6kzjjzpkapmodrPfbmaNWk",
  "key20": "3AtZtPYR9wpjVygdgrEutc8wvekd3HXV8c9QTdQZGsnwUuaBX3n6BkLkP5bqYKCfX9HKgfHJ7ncXpvkut1jxaRrp",
  "key21": "6MzDZLjjVAcZVMvkNJ8obTNhgWPhYUT8sLEDaidiQBWz4hu3UdDejhJHH6uhSibKNSD2v3SCFtG3HcyFPpLKxCT",
  "key22": "4FSoTrw1G9nPUjuNkB9vKa346xrNaBhUpca2mhsWq6VhsJ7CqQEGXZorypzbxR5KU3FfmpKbM6bkpFjnoCnh4722",
  "key23": "4FiE2ub1LVBb4QPwspymhHXrRLQtcSSAf11RTxWradvLgNKHMbwm5Mp1GmoJzCBP2mHdWd3mLtr8QhAhLvzbfXyc",
  "key24": "4yyCSGoAz5yyL6KF5Wsq6xdf9uC9Hfu4LgL9FaWMJiggmQEhisERASXgZEbDJFW8dggXJXboWAU9UnTuKRJsjVX7",
  "key25": "2RiAs6GM9VVDNhiSeMnLt5yrfabNCnyHb5Wzxq1oCTxpepauAZoPvGm2hx3L8VBYPAZT6Rtckb9VDHSGZhjevYx",
  "key26": "128QFmQU9ig53iVGW6etdjPtGLRHFiMhRMSiycXuhS4ctNSa2iUixvf2mt3FiqJQK7hnD1KzL6bpjoivNzJ5FQ9D",
  "key27": "3mszaXuEgK8ojJ3tBT8WDGpzNrc7rvR7BRmMjVgNz3LmFP8gddhrLXYbJWQQrPgM8Rn2HgjMASEKq5A3uSZYmwmw"
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
