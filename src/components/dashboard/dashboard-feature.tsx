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
    "j1sQi5vapkEmwLBRcmBhSJB6mTiMJyZZFuLAhHTTGyAi4ngvPuYZa3ft2ouvozGE1VsAiMKVaBQ5o2QKw72cLga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P5bCLckt7ZC7qjEswA7y6ck9MfbTKiWndcGLim1S1vHvtsptSQrzpzEWoPAL1nHoTRxHVVqKku8ADwoC1qDJuxx",
  "key1": "2nV81n8UJDsv14P6DRPk25q9U93ex45W6sKq1EQkEpD7Xk2HhpojTG2ULg6pystkjz4dKmzFJBigXykRrcduyfA2",
  "key2": "24HhQ1mmqNebXGwUEkCftJPmpaNpdMrkDVKGbKqxUD1ZXFGGKcKRAco4vpNoh6BrKrgsjsbW7C69hy1eWULdVerm",
  "key3": "42eRfX73kbMXnkK877gEcWi3G6jYXQft1XTu85i6bLjoNz3AH8E2nztV8coTxduZNRpJVKx2TJRbKBjNZ3ya8mxf",
  "key4": "61w7fDjJc4KNZNcBTwtctTZvyLPyayQSkFnAoeUTELFd5ynfaHLExiP8bGAZzABJWhutmgowPvLTtMMjAGdudb4F",
  "key5": "5n5ri86tkb1PMh9uEKLx9W7Q7uG5yLMW9Mi3mtnaEhk24dknFKbYqBtdXL7WMCMg3EYPVDEFvfxPTXAmx3dorHZr",
  "key6": "cQMjzHhZH1NkLiL9MtnRgv4zqNRkF2RooPCDTCzAURvMr4kb7do89rtDoZNimFrnLcwUQYLC4s3CCtxjpawb9zD",
  "key7": "3anAheVoLzZDmokKF1RvWAoau3Qju3MLAbgxXR3FLhnXye72i41Xc5QHTtYJ9YFHuZYLW4F2mf5LaoVW3NzNMryf",
  "key8": "3uqvXapuyhpmHgKty5YKX4ANgbcepxEFBv8YXDG1cpc751XEnFWZdxjBWGWUmEZh5fE4gGihYYJ5vRsuWEg2quAb",
  "key9": "2EuYUjo63SE9FVqvRWEjSvVy76nRVzkcNBcNp38tsZGp9cMtcp7LYVCMXVay8a3yrMjZPTrsFSsLviVNRanABaCC",
  "key10": "4VtFypCX1YUquD63sMfpwRuHKPNFPTXqmCqEWb73MPxma3YuHz5mcDvSJ5EuSbFEuBtXWP2dsMifyu2RFD1Z9Prn",
  "key11": "3F86aXNkM4qnvbgAqEYYxUjKRCt1JAuR1f7cbgHwAjAVhwUE7WViCzLpcY5LjmdkLGn9uS1qaqkXYUSZ4AJyCAnh",
  "key12": "3Qf7PkyUwvdZdn9UmbULiCo7rAgv4ei8ZFY41uSof5vUn5V6j6WBw2t7EuaFKNCwwXd5jCa4RXb62R7jTSieSysJ",
  "key13": "5ghDDuG3QWqiiZAFFbQA2X3MmQ8apGLuX4V6bmkAq6WB1KHbXpYDCe69hZw6Cd1j4QXFGtbE7g5EnZ72q2ewoLKs",
  "key14": "3bj9uWf5Yb88mMLsP6gnaB26X8FbZnVF9peQJH1MQBXbxDeoJ7A96ti8CwYqC2JX5JnqSZ8LHHrN5outzHiD6v2M",
  "key15": "oQ3EYL69wJsGz7nDVFr2MYNWp34nXbwwzTLR5eevCJ6YEziSsb9AoXdG7MNTtrA2BKVbfZV9Nw3q4DRcRdNgd1U",
  "key16": "2SZcRPn1Froo4yuzEXFRf2UcWkREcyjAwKJkW4RmP9LJUe8kmtm5eWjeeWJFUCqMRdXwqdWey9ZBMqrUATiHgttq",
  "key17": "5PeUDU6JghH67eMfpM612yYyAWcdWvNvRbhZDyxXGikfCJsG135qQrUeFffZF9LGzt8zpK1ncQkG8xCzJR3V72jV",
  "key18": "2YMaUcYEacRF4eioArvjVT8E99MsoA8pDPXtu4tH8HMLb887c9byqEqzwWLB1GuXKbjtQaLvPRFghtH7DCywBtkF",
  "key19": "JV2Z9HMVUAAmFh24umZFpjVhyiB356qZCc8Cx5hzCouwioiptJ4AwCyCQ1a18tvg4ec7S9tjdnZhsm5u5pd5Cid",
  "key20": "3ei2aNbeKj2W3mDRo9r9gHuN4biNvYAUS12RV1txdzaFTUhvDnminXmEqrWuix7L8wK96DsGeqQN99ydJHzoBovd",
  "key21": "4tS6m3idy4ukc6B5gAwCLjwMzKUc2MoukdQz4cWjdkg78xcvfanL6h263huPV2dzAskiTTBYruB7LvwoQyaPL7eM",
  "key22": "37yBEsUzkqtHuNGWGgrrMYYPiqMFn2HwjPKQQze1XwFr1q8c9yHPo3FTLXfifboSzpNoau2cGE3D5tFJLRoeLj1q",
  "key23": "TMQQpwpscwQwfrGsw6xBW7LsKUdEbLE1N4JYE9F9VU3LmPLNCPQkGkz4EitUifPVVjVkuGT78xyZ8U3hTJ5KoTh",
  "key24": "67mNPyRzkuTonEQf5yM2pKmbFPrZQL9RvZuUB7BssZ56GX5Tcxt6t4Gs5AuXtehfYCzbD3U6BsnsWaNS1KqFKFyo",
  "key25": "4vtqdPR1mAK27yWDXywu4MAdRruExDFASn5nw2rQV8KEZWBbEYLTWGU8SutTXyeaaMfhvBgoJsxsiwbGLaHWEZbV",
  "key26": "5BqXqHVzwrKSGDpBmCHreV6UM3rFoK5mDXNpac7MUEEYYfN2KTA7xiHR7GPm7EGe5WEjgrET7Hs1pR5nU24kSoFW",
  "key27": "3TQkbNRMpCWZxz9UbaotEe23bnFerCbky7f4VLuWWfV5Mu4YzNrnuQgCWXaaw1otG8Myn4jmGw81VnDFbJcamNBZ",
  "key28": "RE2qN7Jy2WtpxtqKTXdoQN7v22RKXoVNE1zrsq82LvcTisifLKdJ99JnPHk5FY6NCBgW9917jANNUGgCNqEVipd",
  "key29": "2e4wkHUYHsktgJ39SzgEnYFMBaacX7QNKtJFtTy16tcQm4966NbiytHTXid3QBAfoFLBGo9wtu3uC7KFyySdtokf",
  "key30": "3c9DmHgJ2EEF9yC8sL2WJ3CKF1a9FCeZiM3AngVAFNSorb74dR5UyanmcCMZUpt5f3iFMJfj34mUyPTUBDizqH5h"
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
