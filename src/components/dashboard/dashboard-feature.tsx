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
    "emiJVZy6bX7wocACnCEzqQcve9RgtDJrZqexTiFfAzDG4d7PVym5x6hvKGXVobDjXw2rH4BsVcPzLEVKEdy4Dxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPNvAa9wUdzNchmkr4gZ6MGs8hY3Q8Kng9DjGbtm3AZxLZmHHxSMd2MabC2GwDRWXWBYXG8bNesmpJLckjri6gQ",
  "key1": "2mmaxVytk81vs6xXsMWtUg2dCDzwvZYoKWPF7xGGFV4MHUUw3ZgFwMcBEqFDt5BBnrrNCtbXvui5bDXVv8wwmGKs",
  "key2": "2vGWHCxhMiTe2DLbw2hpxZWqqmv1tBLpLX7SsxXewDp4gB3Pj4wsR7hXxPr9L43EDtC4fTw77XjCW5qRr87PkkDn",
  "key3": "3FW7iyU1UGBmqNdnVKE6pbSBwih8xocPXxhDb1fHv85ge99kFKBgnZVwyXXcWMT1bvoBzmo3Gk2eWrXtFfHR824a",
  "key4": "5zk8Amch8HYxWyi3R9wDf5DdL56bFR24g7UTMuvJhGbZcYqoZ8QXSCPFFMUUHgzb7QYqkwfYDMkdLvTUUGTi2HFk",
  "key5": "4LkgmAYRKpLzNeMbPrwN9fdmADfhuzqBTpWjnPBA12iMtMufoSuNzXFK1mi6bDMNG9PXyMoNh94r74aMN18LBdgq",
  "key6": "4cFhS3DYmyDYn3WekMbXyZaMkJpHjweSsq3XbFthr8fZ4t85QcZvrDLFV4gKAng5sjmGnfLH12gUSfW87mnJ6Pur",
  "key7": "4U9UGud2mKUiLbMv7PxksZf95P15gLsa1P4CAiUwohqqLeRprHdYSpC8DkHWfzUtTo43RCW9kVRYvYwUiycXwMrp",
  "key8": "5br6rbGProHdjHGBMd4FpfmnxsVPVVcNQTL7AB3RFtut6sKWiUEJV9x54Uxji61y7ujPNMWhyGDFmBuRuVnmQ4ZD",
  "key9": "3gStLaA4QCEsVxDhQ1itAtG1M2DMVYTTAhqX9kriwXQdbeBbegL6aGZ8w1XUnuwYUFKYWQ1G1NxAuQbRcVhUMxJ9",
  "key10": "52qxfH9X9E6R4a4JsWKCnvUFCkpETWzX6kbaiMjBYLQaVzhxAEBniaMMHjQuwyrd8UU5sTMhztuqkCB9ycnsjNBb",
  "key11": "1acxbmiXXYJGzFAbR3ewnJst7jhexJj56uYZwhXc4LuHqyTtvTxdzy145FjzUrepEeStHDjzjFspcKRuP6xR3mS",
  "key12": "4mYz3hVhVYmBuhyWKcvxDJ1vzDWVsW6AwcwQZrpFfnXnJozfeX1wpAWtwDrjVAqickhWNmGBq3JaPu16181a4nbf",
  "key13": "2JDy7tLboE9CCz6r5rDWSqreNNq9R4bJH7zYscBi99sv4S8sq3ao5VxXDjDb6mnNTMm4SxEsuq5u9TTXTcpgYkpW",
  "key14": "3JkQKrZjQpLkucCeRm21EuUk4ymGu7jH2GnECbNSCGRgX63eYEEyTj1Ypq9iuEtf6Nn7cVbDWcfcAbftA8Kwo3Ja",
  "key15": "2HwD6YmCVPqrwmAxXnGjrUXib9uyB5YkGDp6mBvNJX3ogSYL2nm4pkvYDRs6sqZpKLhwZJEAQnoXXK72ZmDKCuXb",
  "key16": "5Z9b4CgNUPo1XJMFV16XcGcL2fQxmFKQfomzbrusFRWJt3PAH1w4SAwzSDnVwQBPut25VqMmBkBudxiEoTBrZjHi",
  "key17": "3NtDH8B56V8qUWtYYr1ab3JKgAkDYBmWgRSLXmm8U7iyp4aCzM9QeDB4LxHqJi8Q6ncx8FTNyUWxRpCJkGL5K1Cq",
  "key18": "2p5kwV2wtCxuz95FWp3Byri1i2TYwwkBWsBS7oe3ZcPovevHSAEpkG6F19pRKSqUbFP9Q7fStdFppBE2staWmYUH",
  "key19": "2ECLFHH7k2AhgmB1Jb4XLkspFx3C6Zei8LXdxn4adxb9rfk7oj51n748yH347ugDvaCcQ1i5w8T4aajuERAPTcmi",
  "key20": "1kYGKPb24MnMUnZcMUCQVqpmkvCgZ5DMktAHxcg3927HqgNDfd5wWQGQU7918NCzADaN6FsznkYhynpCCQWQ2NP",
  "key21": "21tec686M4PXGWeKrEN6My2YvVRJiH1rgVuNFo6nFXhVymYTCnXhJoz9gQimxMeLnn5gXnXGfREqKJGP8kcUwtRY",
  "key22": "4Z1s7yhkwntFbhAX3CrDSw2Vk6RH11sfTF6upckeWRRShJdP6BskFTtTqyax9ZLT4wGWT7fbHz2y88WVuTw78ufV",
  "key23": "2KU2LSZBkaP2ZCykmBFAXY1SQje28oyXn8HTy2fAsihMtYsU6QsDZsSLPu1Z2hui866P7FD8XjU31WHaBChCjaQ5",
  "key24": "3EwGzTYpyaSqGXQJGb4jvaYGdBJNVRy4BDmvNj9z32iGzn37efS6CFz8BFy2pQ6dDNz6cvX9UKBvGRpf6hFxq4iJ",
  "key25": "6vKbtQcE2rL2zhDANt6HBfneXX9x5SPftEP46Qv6mCUZqa3B8V41rQqfN3eHyBJfdrJVtDJ8tnPR2ayEe1iNvpC",
  "key26": "3pebBFPLt6v4U7PncEgo2Py4LNhsnm8F6WssTbv8YEWXndpT3tFEuZk2qY2miEWe66Dz681tnHH34u8M9AFCxPsq",
  "key27": "5ok5FvM465KDDtTDymGFFudxzyaorHgz51CQ6ta8fMDtKrySNspP8V3mWRi2bwiFfrt6X7jBaFQKCyammE2mYt61"
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
