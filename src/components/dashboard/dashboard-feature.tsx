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
    "5Qg4W2FHYZfBcLtLsZVc5Nw5hp2UKH2VSZPSkeRcXMkXNtAZ4SdSnGcvJXgZenKRXL8ED9fBRYn2TNzVUeVHYprB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFY9feNv4fkKmjPpjzjg8NuFaXrWHrLxnX4wShF1HQzwSU6rGQ8jXg3HuL9zpYbvuZdaxA44W4qHq7m1gFZ1ZLw",
  "key1": "2vWK1yGF5jQMYbJYgzreDNwk9TZcHMjpzXcBUFwTGn2DQmS8gdQxRne5P5eAF4M7JfSiyQmUspLFsRRksooJxbz1",
  "key2": "2nNckyngXJhEK4Emn1W9j5KrD3FAzFR84dEaPr6fGtwU7ajvurj6YgRL8thSWaDqBobiUrWYzaacAbNJDaKH8WPa",
  "key3": "bdVx2UeCPe8UV31TEskwEGGZUdJ4Nh9AFWHwU9Mt75a475oGwfghKtjnhTJgVuqm9VV46BWosEHQZR5urahpDFQ",
  "key4": "36SYPPAZG5UpBHgGaSxB6DHFyWb9AJBX9HjjpXozALDop3T4H3i4sya3P2mdP5njWKGRZoTo4jTd3mx39XzCEWdb",
  "key5": "5cAYEBx9GyJi1dHHJqW6YBKYHjJsv5iYomJB5SYULUYG2upq21zS13TXhrCHZLjUNdcfLcr8F7ekPkrC2MpVxiZC",
  "key6": "2ShoTgc9cFxbs7hoy8DaDvWQnECqzhffX3uBdWhjKdkdu48WR7i4BPhhdwTP6nP8wEH7QjK3xnRn93SMoaKTy5qT",
  "key7": "51GPK79LnX5sWZWRGCNL1gz7jvCYkhxWjp93tm5nSDdP9h93tV7GeQqTcHwhaQ2docY7685tTfzTdkLy4PLxGxdp",
  "key8": "4JE2qZdHHe7jT4PD6vXQNXubUUgdXKtyb2qqTecnQt48XQoF9fTkZejtvrwbG3ZjYMbHDXAcx9UnADEJdZy5w1BG",
  "key9": "4atCLmRcaJG5VaunfNYKoDYBKC9G1xpyuuEdVMVwnS2FmJhpGcTDLUzqxohGhbYwbdZQ65Qe7gQ4AgSt6jYeGLKQ",
  "key10": "HC5dZ5oSH8t3bDQ2d5NHan2Y3grBR7snM53UFyerMdQcrdsjr3DdEFJyW5Z1JyQQN7Vf7yAUo1cHAn1rTgn2KhP",
  "key11": "3pv41YVzmfi1LTpJkgPYo8KjKoEFneHqdfr3yTonbDbocNZraZNeoJHCdETUi56ifFAYeYq4h2zG3h8RRNdQjFF",
  "key12": "129b5MJ5DyzvM8zx1dcnCZH27PqaCgSQ3iUZVGKKR49zJQNXhVGijiejKkJwz3SAZYtiiF4w4Poe9MEA77dHpi56",
  "key13": "2BCHRP6aEE4eMFW5BEz449HSrUm2GKbfU94c2rY7skYCqSSem5LrsJayHRmQkbdmr6mqtxxia5a27xtr7zLp9FTR",
  "key14": "5cP7JJ87ysfer9NjmcBntVJTRxz7RnADCukeNs3gqhTYhZRoT1FC9sDhGW6vtGLjr2VsowiKDdfYoXdJP3MRASKL",
  "key15": "5oMFzWn97GrGrAfcbdcrjMo8GP5J88Wi3VYvuowXWMhA2ocyQ91AfcFtwdY5UxN4sj5Jg3SdAn3grD2SdJxvHaiZ",
  "key16": "5pNhBR9Yd5XvPyrHxvnwkz6PQ7CfUgxpp3DyGWkTqZfLrmBJiQR8TUY156C7SvVeJwPwnALg8sizRe9frsXZBXmN",
  "key17": "2TPS7s5uP6VQmA1AdN8TziE4KuTSRUcbskLMHg1wMHAEoKiLy1da2CJjDN5dL6q1LRfBmtV3XGR769imjX4VpjHg",
  "key18": "2RyCGyYQM6f7FKYLDRZ5yQUFTExA61Cu4qBwkosh8wha6NdDSNhNcYj1SrxqDyCnvyUEA6F3BTks4Yqkny2Ujioo",
  "key19": "25pNoysv8iG3rJARqD7k15P95mcdBgSSpem37eCium1x7454HswsrvuqVgi7qNSowKWHXueXMzjEaz2dqMhAk7zC",
  "key20": "5RuY6dfvsnwyUoNqYarKz9boPJrP5RFt8BvPNzhgyCwZh9nyNhYzj3gcoVk2mUAyYW2xnwwy8UrCKQoShuMiDC7H",
  "key21": "3rpXr3nen2NxLejoqFF5pJ9Hb5Ssut4aFkXqczzAVM6deSZpCyzmrgCc16nmpsfxaNPV4gM2ft49B8XmDfAosuTZ",
  "key22": "4nFoT6gzg4dMVhee8YeGxWWj7TSmtvTniZAktN31Wi1BzJHCqrqovza4Nt9ySvivNQyLsm1ZWyAzUT2EMJVjcx2s",
  "key23": "3xvHZufnr8FN4tbmyUGCnAXkD3jLGdHttaCz87DreqxHYKNzseBG8pPyqdTmfyCTThMVxMb6oDANTkuGoGHNYtDV",
  "key24": "4YFAJkPLGDmRXNmzUz9eF6tnuQMEduE3ree7NM2KCfp1nHd2DRTKJs1QVikfSai1TWmmrRmRA6caKvARoSBAg9ao",
  "key25": "528h4PUFiy7HJKU11eCoPcwi21mFyhmi1ERzph21c96qiMV4Bv5tcgYJVDBCztKMSrM89FBbPsWVJcrH6uBvBUvR",
  "key26": "CsqjTEPNzw9TP6Ft7yswq5HUNZyRyRTrhnSsGgzYMqMwqGf57AcdjQCcJBAKiCLv1vWeoHS9KktYvMqgX82DChm",
  "key27": "3Ha9ftL473P2Cc5PownmYPKiBYpPVZVxqNWFtnnFf3PV7xdU6ewZwxGf3mQEgbTNHtkU6mfgcsPyKw6sxpBJi1h8",
  "key28": "5i45LVWJKmmiBwNmBjtyrREuEFDguS7ntZwsB4X5znN6QL4oCA1mi335ukdPf5mGShdjRv2Xz3xmVnEo2stQoGxk",
  "key29": "5SYKDeMhJNbbtX4Xpu5qSxoJwK6xgmi54d9XhVWYxzHdLb3UqRuJkyoq1NtzKvMShyuBijggvZDZsKCnjjY2ds4c",
  "key30": "4F1ooUS6MAdVCepPMsLn6y5NDJQ37cer84UonLLwEKF8Uf14cmTQ6RyJL2vK5Dc59fUrJyhAqFW9Ek5CckCB9uZZ",
  "key31": "DWvZzPzANRK17KYwf7Cx9mwGrMSyuR8evTQ63R4UoUbSgWwjTFx7tLeZewQHRSiRAzT2KUWTgYgHcKaxfSzDTSv",
  "key32": "5GPanpX7M54jSL4FTgUtTDtVzGfYDGL4CCHLAVkVyb6pEkKmuD7RoZyUzqahH9snPEQfviDC6U4fvbohP9HKWfQ3",
  "key33": "26xXXdvywWJwiYFv3eqPRbfydSPti2MZMshffxwyzqsGrpsFCiLNdwkhrFp7YZ53JDpN1j8wygvwnps7pXz5ytx2",
  "key34": "3QQZBePqUNDUN6Kp1VkimQVCizsqqUR2nnUz1EmgKHguz8vb39XaXqp9jqcHn9uJmy7tVH2yi6ugXEPk8DZPxxCr",
  "key35": "4syAQ1NcVM4u2GegpQZAbzuXTWZKGqVyBoCgaEB4GynqN8RS2NymSVtvYb4aeknJ9rLi21vQttJRtS5ojsDpQMdH",
  "key36": "3XecHP9SvZy6izTZrpSCvpMC5sX1uTH8j6feTUE4LJajjvtNsP2yauxdcSrvMe2MrKCAZ1kFAr8ohuY5wmenyyQX",
  "key37": "4A9xsmV9ciRqd8PNMybQSa5WrDF17XWPYuVPEFeJ6eKhQjjQF5t3V9PQfmV5e5rYkcmRk5CpTDYXANsrh6gJmtNg"
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
