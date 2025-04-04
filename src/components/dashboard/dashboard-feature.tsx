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
    "3zLCwLrJQAEWnHqZymgbWJZVzwuCSsqL9cBRyYc8NXAaEpaghukQSQEFwLMK6B7qs5dgNLg87BwtEFni4K7b96Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zixa7nTLydJuoQRVEqDVR1Qh5nChU8NYxTufpujdFqCtFZdHZTnju6t3DvA2WnymtyRQ7tBDpph2cUuyacLfZ9x",
  "key1": "dUZ1QqvVFax66hW322Ft7p1W9QYLSnZ5JTRceC91TMwNzndnWL2vF7GGum94vQXFnJW9xwGKaaGLnXaL4ndtZYq",
  "key2": "598DLAAXe7tUhMpWiaHnURUZK2rFNc4AstfT2P7EkUpFEtZuN66rYj3coZVqrtFuMnS7GRg6HdmSSL6sRwnzRQCu",
  "key3": "4WnCBFBSp9Xceu1CyGgJ1TqAJuqtfpHTqkj3Mw1U4qRzJ9dQn6EF4FTwf7GEwU2Ye2o9LsTT1v6rzcp6zgLSPydG",
  "key4": "5m1UNGWem2C9zbGpFLbdQVBwW6jyVyFayPxKDtgcxhjARZJU58MNqup7mWsZ1P3BFaG7Gz75SaFsNmyxDEuriEvy",
  "key5": "5FbRhU6wR5jtYDM2o9NF1FJV6Xq1yrFjZemere71VpBdw2FBw9wPtRipxhAeD2Yv2atuH19rsPDNSqadm9nw7Dx7",
  "key6": "svns6v4GBTWMDSuFvivNTD184LcwnoHtyMKhYSoiSYoppJpG2mfnpLEzs3kEtN9H9U7fKoyaYA43dXLDffnEgcD",
  "key7": "4SSX7NGqsF6G2NwqmqJLRsfsuisJpAyy4tzyrvNALipg4a82Rtbhf34sSsMGX4zMDDR6rS7G155Mw9pgQTaqUhcm",
  "key8": "3REnPP9pYFedZtgNNUmTuf3J5djntgHiDu2aShDssVeuJFAhz422Vi2Tqca6iv6ucTGNMzBFH64GDZbR2H2qgdHT",
  "key9": "sNSmtsnayMsxrhXBGEeos9AJKNuxAeBK1EjBZt2cJsDnhNx9DHMqp5vz754DiEQDG9kGqw4sQuxoyj1NUz2w2eU",
  "key10": "4iSsMoL9QCzzECn1ixTSgSBhYdg1rqVstU7YnPBryk9NAVzwDQtAFLEM7mr1aLyqih5fLb6dztyGKvCHJHN3xr5W",
  "key11": "3dwQDCqBNgBRviGMYTSh6jHkCb7xfgGw2ofT4wfiVZngbNQz4ax3mqUcmrnzEd7fTxpioupDXnSsu9C1FsY7EPWL",
  "key12": "4zHBcATuC1WpmzmLtRakVXDjNnt5BuQHxnWA18bdtk7zB4TggGA8mn9yGFnJ2NPr2YCxfsu6eEJhC7yrrtVPa3ZZ",
  "key13": "5igFzV5hV8EcPHWjE7s6j2bmvHmfwgS9uzxtpuzZDCtV2pvRLNfkpPYhaSKL4CRzekVPLm8ivMs9zUvZUK3WvFYr",
  "key14": "2fJ2MyLMch3JWAKGPtcHoju43SmURkPnPcyfvb4SHNyNgrVBTWAsmWnnbMPzvZNWfRJWqoBn57xR6RR5bXJNAG1Y",
  "key15": "3JBBDcW5V7uhStKyjKYi3mLpqPXFCPt8x8E6QGXu2G1YjNiSc7urHE9KNRPcZrcDesXHn47XTgJDqPKFFxZ3Sibm",
  "key16": "3nqqajqaNsidfzS1mGeHoGggnXcZLrJqparURhcrNQxkZbdg6ESmFVGGAdsAuwDCNePvQRFKxwzobkoYm85SAJos",
  "key17": "3YrJah7zqdd4tkrcQ3GTtpcmZ5ZLHEwmpkn2giHS3uvpTySkokVWrJQz4CxSaPknqA9485HHt7jPEwWA2nexjdGR",
  "key18": "3nujgaouJ5GwwyLrhevQtF3ti83pAtKthDQYkvdzc3C9PvD5gW5VWc169MkXqSYDac9zX1ZtF2bVJDZX83cqWboh",
  "key19": "2p318ezu2bRfxoRAHrLQxaFUNkvn4S8A6oo2qmJZczyPG2S3RhXLYNN3zy9PSv7bdAv2i8W87U956bwGmu9xUDXq",
  "key20": "3tPAKsosyyNDPzRRbw9aZffYJnXcgHFwjTCbzUGR78Ny5d29u3kXwqyrVxG3BaEmLcGaNHcsXecf2TPkgNjB1jEv",
  "key21": "4RqsBiMMx6PFMEquNb6sVezQeozEvLwLuJYXz5msqEZu3Ue66RTH1ZTtTNKyE8kHXhpvWocZKt2258wMJ6ev9xyb",
  "key22": "228Ua8KSEqLjPjnDkS8WMhHmMVwgHKqFES4mBApv91nFPLXyY5zRevRtHEHNdkL3pLKYXqCpT9p7BYGdK1s2YU3K",
  "key23": "36ifnByZDS82JHhXj3ov2xfkAZpJKYoPvTFMYU9e8LcRKeC7vuXm2qM7EVyQmLs5dmZDRmeiWghGDoHtqDcuJ3mF",
  "key24": "wdhD11h7ncuwZj7nXngB2mNiKGHgS1TFqhfha4Lgxh5sj9QqyRDwEc3NSNGe2Z3LsnfPuNrnny8hMvC9yqTk5Uo",
  "key25": "C9Zg55X7VgVkVmhQouKvfGz8XrfDpE6DSqdi32iNExmew6vvCQAQdPVML8ZNufpxbaks8tm69XXsZEjvF6ShMDK",
  "key26": "4qX54F3UZcEx6Q57q1d6tmpAfPGGDNUXpW9SCC7WB4uLnRbUcY7rvbVofZCrnnURFycWe5AVzmcJ6XrtJRKF7CBQ"
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
