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
    "3Z85PcNDZyFTPwbZveHBKsJ6VHMsee51K2GdsMg6XNztSuzmY9CkmP7bMj5KF9GhmETGS4DquKv1bZNbF7gxGZRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npDyyV12PF6Urg7HkopRVikd3SXwzifscAzJAMxBqKEPR4grmDPQPC6u5uYeNpCSJhdAE6gWsp1tfo19xSkeWyS",
  "key1": "3fFySRjnYASz4QpByuGAWMv4SGe8QFNd3tDthrAP7tX9Qb4wk29R8o65xVT8e4kQVvsBFaMJ9zgK4ck4CG61naK",
  "key2": "2ByYQaVEskQFQS59McZMXznKt9rGGArFP5xnVL3tconuiZY9YcXEQLeSDvVvfevHej67dkrU3kcf1UoQhU35nr9D",
  "key3": "2Bm5cmNfpnKwiTWHgkMZ9zuVo1ZG8qy6P9WRzpWrEuXturPkYBEppeHxf3qY7PQLUwLeoYaLqw2fs7TX9Zk7ceRt",
  "key4": "4yctbNLV3EXdG2HwCd63eZpQcLPWFAuaayCQh24rxBShE5CfRe7LLjQ3VhPrAMzyKpG835C8fQUygJcFZJEwbyvS",
  "key5": "4M9wGY6Y1oseZ9dAJBxG4qjqtq1bLphv4H3ZVQJz6dbY12gV68gMWUipahzFPXEWuHp7qF1Bw9YwR1W7dLoijDtw",
  "key6": "31HQNMWEc72Dy7oXqfjHvKm6WiLTyByDgBaSsFpJRX94LUDSzxcLZGGQQPtZs4NskoWpZS8t4AP2SndVXF8EVjgq",
  "key7": "597H1BZE4qCcdb3qrYF7DHi2LfZVySXjfZgMDWPjWKyFjYXzSwUZc312nqDj4KsFJQSedP1mF3ZFpP8NdDKCuzu8",
  "key8": "X57onazU5FDpS9qiTcSS8aLptuNuHd4PgS4JxNutCtnucs8vJ733Wvt9266YJcxxUXjXoRoG4dqQ3rCR2MRzmU7",
  "key9": "odCrE8Fwnmb74kBCU8PZHqTi9uowatCPRBN6MX7PQowQRQPwfdX2kwaCuC8cFLwLiW9aaEFssvHXqk5Jwk6qCpS",
  "key10": "5quPgHy6mvF1fZdQ3WaPr6YCzcYqfF6tXkCwbqPexY9p8pgxGBBXVTmad7eHB9dUFcQ9VaHr8H6CGJRyKGayogYQ",
  "key11": "5HU6bEfF3Ysst4T5pVpHxH4PN8wbS6UqVZug4uTimRMZbf4wfpn1AHGSznLUdrJDuB7StqDnNViNibVTR5gFV2cR",
  "key12": "5ZriFZdYPbyc45WaxXNKRtHcoZvja82nL3A2o2zYVm5x7UBTJM8LjRvPBxY43xgRaLstKuYBQHcD9rCAnGHB1jVK",
  "key13": "4LiRGLzQW4gGRNa9biTih1Vxgxw354poQVyQ2EY3BLhu3wnu1G3QqWa3djW1daKtEopu3SeEFPDYC3NYyKA9rqN2",
  "key14": "2cA2WjUau2YPXaLUZrk3U6tm68MFzCz2NjYdTeugN89bk3JCPEukZfx6tUMrehmiuWKB2QFuLiZauhfd614fZNAJ",
  "key15": "4BXKzD2QrjmWRLbsct9K9KQ1CjHzfyeLkc56VVcJWwUfi1gTLmY1bPE3nVkh2BpG2BDqDpPcBu6nHBNcbSJb4Uvd",
  "key16": "43Vi3yXbDpRBTNXy43A43UWWfuG7WWbFgtWqJ6V6ZAQaZTQdRFefAA4NG9crFFAwfmZPtHr7AUie925wQ9cNC6Bf",
  "key17": "5qUFfT6AR4A5WSyongP3ACqs8GMaDgMWxtA1UHmVbJekxECm5V4niBvc2FQ62FeDSqoB7y48i72mC13wYksMqkJH",
  "key18": "4NP6KRsVeWWDHz9YmRLyKHdrxY3VMgbuVFtrVdgJ4TPU5622T9QTXCc3akvwR513cTtumHkp74ps6fBf1eTtbVKC",
  "key19": "2who681HokzfNmgNy2RMhNhabZ2d2Y5uDwi5b5tzL1xdgNJKYdTgkGq4icbYAQVsPQMbBDcS4aTLcUBJ1VCuJVEy",
  "key20": "3SPnb6SmNLdQ5hnbw5T98cYWTPER7FdZR843tevDhLpjjCMaGkVmxczYwmfewkUK85wFgDqV9uWvTV1shfUuxtza",
  "key21": "5ZnoUhJM1xjDHt1f2zc2NovT69CyZryRq2RGJMrkfagpoNMaPuVjGBguDr2BYwNecEJFopJmYFy3WvXQTys1q6iA",
  "key22": "3dYxjLY2ruNkHg2UcWqtj2o6TeyWBMWmhLSMzBSEth3S1TP4hmZu2843SrHq7yNAZzJthZ4DcaH78y6eAhxFVb8c",
  "key23": "Wp6f5D8E3KNwmDnPNZd8g4jbaMMY1D33q3XfSP1GB2uW7FVQMwvN17Y5Qh2FAkgoTKVTQZmVrxUGNLYNkaQJ1ij",
  "key24": "4mNoPBjR3KgtJRqn4i8dHnYgbqLJmiQHLAjEW1w5vKyBpoGiYUQJYUphkmo6yBagWMpTZjVX6LjMhqHT5aivA2qw",
  "key25": "4LwBfDvV64hoLAhaqzVKoWwEUfWELDyS4wyZM98M8rBsJ3ufVCK25uZagSteNEJw22BYZP9oBnxz6YLDGKW7Gy2k",
  "key26": "5BUhVwTFcAThCna2ECxzwxecXMtGN9F6CDR6SpgnBfEX78soPDhKcsJQuqGNsCeUQKHUJDPLjubcitBYieEUFKL6",
  "key27": "gHMkDubVwbwkd458ZPwY3qtZ9UkMbJs57W1E6g4irNHYdNASBv6K5iXdtWXoYUR5bm1beN1u63uS6WJut5ji2bf",
  "key28": "dFE7haVD2Bhai6udXMqfaKuuHLSCiry5cEkJL1mHWmGubWewmD6JAAHEJgHqqsGmgf86yCcxTRWF6Si8q4HpxZH",
  "key29": "3YfZGxinDWPgW6eJm3YNMGU4143cQ55qXjQuA9Po3FLGSkwD9n7uKSMv2U9DR4zvgAvNXEqi5TsAdXwYX4htpUwi"
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
