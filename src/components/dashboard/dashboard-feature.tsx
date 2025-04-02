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
    "s9tEfADiJ3KVrZjo9qpTsNNhkaUcEUvihcfmDpYmWpkNtN8hPtJFgZ7ZJ4t9naWhHF3HW6t4C3gyMqb5m6URQrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbPpD1G1s9wDaokwRtyxJvx3ozWN2uxsAobDAy3wKTW4HgdEY7FywQgDZuJw7ETmGqQY7389xCcm6jbGrLGRuhZ",
  "key1": "eTzPXfFoDR3TvbJSirp9LJCZN49DsfY2fNEM74UTqVZu3JLxkgmKboDWHDQctYMNeQMuxNRV2D91sg8g9swuGiW",
  "key2": "2xUnAjtu4f8LHnSQZgw3zpSTYqtZ8YsdRS8b6PaphRGh8d66sgCj9KC1cDHE7GkMxuPDEBDKcvLKsuA1MxQRZrb9",
  "key3": "2nM87Lz5nCxs51zpCBG4SYC1JqqtUBUWG3KQ8xYjc1vVJ3SUkA7vr9ThMLY3UY1toaqvhJu7rP38B532fHaXu35c",
  "key4": "2Ce32gzTgS3K1vSr5Y6zFLw7okb9BqzYQ9SLdnyPoEAnR6csU4UMYtN1ocpMnFocq1DbcKWowH1kBq7B331Qk39X",
  "key5": "y1NgmwNk3XuWL3B4ARh5tBtbj3UQRqJUxt7KeDtDkmXhfSTrB6SwcdUDaYhsVGFnA7vba3iNZokcPAZP595VAfv",
  "key6": "2RWvU31acfHXH2cJDEctSCdQnDHMsjF9HYmYCLgNSCB9wUYHKgD1KCFCgMbVWtoSZ8QG4X4uKRbzEyhELvSZ9MwL",
  "key7": "5pHwggzW55BRnwViidPKBUmFR53w3sokgpWryP6f1iAHmT3UwpN4arzwVBNoesYMJJ5BNTkj3QpkBDxsg2RDAjK8",
  "key8": "55shF7k6RjLqxnSeaUwRSAwczAnomRiydtbbngzoiQbCbeg1w6iDgh36RLBfrRYVNoTn8zAfWgdhe7kx6rRKwZ2X",
  "key9": "61RtxzGtU1rfgdaHY82NgjQ5oEVBQ8HLnc22Yff4MWExPhXVqsQLZAS9kCbLLkW4DPmsrVMhieos8DriG9PUxu5k",
  "key10": "3G5vDXP5Fh7Yzz941e9nhbQdWMYWaD1aY8jq5RJYsiJKS1fRKjeVZdwBzLv1m1vvyJnhQ8yRgGEk3stptym26BtQ",
  "key11": "2QphDFcpXjokmMzUKs8zRgwDuebXdZGxTrVQnzKEe4RDLuVfVjtSyn2jD81Ec5coLaPwrSXvcdoHXRAcqJMwroP",
  "key12": "5mb715JGQZLgNHQ6agzJHYpLfeo8PB21j8K4jSMRi9R5d3iUR5eCY2NiMTSyDmFKvkDpAMqEBJtCdkWJoRdv6bqF",
  "key13": "wNG4qR2yhirJTKZQCoREZzkR7BE9A1aLnW1aezy2ifE1479SVZCNFk5nCi8wBhGx1VqsCGMa8AL9bUKKXPUzYQa",
  "key14": "3HGY7JowVfBmKKo7buG4WewjfvkkbV2F8JiSujpU2v1sxTyR7sgQbvZ2B7A4BAJpG45f2SLvnLXvmAsoNBqkL4kV",
  "key15": "2QxF91VN8V7PbnMYd89tuWMVh7w55gbwzaqyGWFEZRP2tw6YKJdubgyPAeL9d8TwfdWJJBS49vcKEzbHvWoFoDQg",
  "key16": "63ybJtzyChkt2jMypft1hHrWk1fRB4D1rUQcxEJJDRuuNFH1N4M7yjzM1CBDYgtdmkC1qL4mbRLVU4gfcSVd8H2z",
  "key17": "5S9aNq1RhMBBg1cJLwxdP7y5Vya8Mjn6kqbvwHQK3FiwL9mk3C1ZPUzcCCkZPAwZ1t44heWxuChMxbzjtb37zPTR",
  "key18": "5CfAsPKkPUCRXQ2ZwREBHNrnyQCQtkQL5VeVvBaUNSHnt19UZCHhQpwWfDxQswS9rT5xhJ8VsRmWbtNXfbWuWqyX",
  "key19": "4HPnRy9gbcMfhgNg86CLqBh6FpNq7JajH4S8wdM9u7vo2TtJBXfdwSFZXre1fZVrufqzv1GGyrxv3aGeVdz8qtbX",
  "key20": "K86ujeRGaGonxQ8wpCPzbuYSTZkJLxted7jfRk3zpzEouBAQq9p2E8FUf2HcdG6qjKtEKhq52weraheasefgMJ2",
  "key21": "3gccjCs84TfAi7AEf9DnenTwmSbFHhQy22UdPtgAZgAWFK3ws523cNDPWk4ydUw6GgWEss6soTeJZZmFS4oLMjGz",
  "key22": "3nqBvJPoU6ogY3PghQsp9rSZEUar7h2Cozwv2L22bVfHSpuJBSgdQixbSCyMZTMjpuwtQLpLikzC9NdtUGhhQjbk",
  "key23": "5JkbJfEoBYXpr6R2d75vjc1x6jCVJv2qy336pysrHVT6XA4oyaj8Y6daaN1kiGsq7ekEiYmCd6Gn1gyhhp4YZibo",
  "key24": "3S3tDqdD2fnq88QrPwM8jEba4GMZnrjubc22DrdzGUG3cAWsrkrcBhLeV6qYvkkSCxqXrfsqJq8kZD8549GhH5zJ",
  "key25": "27EeLQSx6YJWMrgwZqTr2Le2zBr5C9d1xrCMunf9rdJU38yjNojTsLWwXqWFuAuSATWizw6sxxUYxWBXnmezgtJr",
  "key26": "XEE9Ym22qHJyR8oPr7NeqjmhCvBCLQKcib44z51NjaJ5kogCgZcW3AoyPDuHAMRrJ4ovSfEW6PfoqSuEKLtQPov",
  "key27": "5ivJaAq7HtfJ2aYgdhJunpwBA34W1B2j2VEcuPnb69CpHzFc44upmLC1JKb7SHi15LZfLiShUdX5gvYTSbJGA2VD"
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
