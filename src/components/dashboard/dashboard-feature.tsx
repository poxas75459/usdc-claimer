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
    "5sm3xssxnoTgmDqFU5u4N29LG2bas3fH2Y6UGoax5ZNQmsyjntZWF9jsufshbMisrTKscWhzyiMiBJp5TmvvBaDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6yPqnT98mdPMTXgdqBqNxCajGrLiLtbLcN4eYpsodMnC7d1eqw4jNQsPdw3siY1Hb8x4e7i74woGsXQ2f4zRnZ",
  "key1": "326nfUyPWjawstWPSrd9DtMS5g5pq7mKYTBeum2aKYCFRvJJ9161j6oXtRSLxUVLzP4D8qyyvuCPLfsMRLhEiEec",
  "key2": "3VFW6iUdJoaeUXqtkPLvMj8EJzGXsgUYiXBGeoWkBuooxtWshqUv7RX4nTR94FwKxY2yTyEd5snNVEmuFPycURM9",
  "key3": "2BQYwdvUYNRdKZYXo2zPQ7N4XgdwSjDszjYapLQpbp8QGkqfVU1UrypbBdJZx3qdFakYfWsxwqzqRkMRuz6HjRw1",
  "key4": "27ABYGKmgbg42AANEdqYntd39qsWhDTKucAA3GzWWss8urJ9mmyT8h1o28BUzsN9Wfzz4HdG2zQVkJZf9RZdBteG",
  "key5": "5nv6LgS6f51os3Bh12CGDxrNghPHvPrbjckwugRHFyTCivYP8Eyrw4S46Pp5XBiDZg1bbRtie1iLbCudf5JVW15P",
  "key6": "285hhFpEVnqTZu5GnbjGGqyLDZ81cqqWb1sMqYDcQvGUEvP9wZ3AiNRMbTZDnCBoGsewmejrpJzKrwB29F5WvfDf",
  "key7": "34EmiPW7o9pGj69XxyR3r5DNu41xNaRj8wBvAssFuhtfWYX1enas6rrG6dtrP8nUMKLTxRxXWZNtFi3EEURHznkh",
  "key8": "2YdofgWqMnDaFVCYoWeA9K7fp5K8F983DzFMyc7SNCMPJrkfH69kooUYndUQNES3c2QwSLue8GA7B5B8FWAY8dHQ",
  "key9": "npMCLVgbH9Fy9nGWRzPJ4QtRC4wtHKPZ1NsmBB3J97kgG6AHD39TK9zmFnCrBoFz5psvLnoLNDd6RiU7hMQVuSD",
  "key10": "5JnBNF5hf2mxLnMszNXb1VJtLuPbzZzjvK7bhSCWhfyNJKVm8E8ZhwvrAiTD2dGHUHvgaYQZYM4T9Csk2refj59e",
  "key11": "4DYSxQcHEAPjaBHAxdnsaTkZ3k14HrbPnbpspjMxs8Np6jFnA37bwE2kMbqQ5pG736x2uWZGfs3WfjrRYeCZ3NYp",
  "key12": "5q2UsAf8gaU9AU5e5edC9KFhk5GQcaf7juPMmibBKvFA9zoab8esq3aqjhz2Ku234xFzenzmqUn3nHgoFxfKQLKt",
  "key13": "4srV52TJ5BHEMuW71D4MtbWdz9Sj62q1QVXr6LoHSwt2HBAXMY13SPZqcgDAFHVLbWD5Cw1YGbKYSna3n7AJHAEy",
  "key14": "5KkfwMQfCpum7NNgKnx1E7E8SwsajmhY9pgPvPzCRCF7WexgLzaZ5fYve9w1BXhKytReyZhZEzdCxaR1CywrEqRn",
  "key15": "2aaCgRSuKepo4s9DpVVuXWz62qznbJTTANUHxx88cvawy9Ne2tC9wdjDHTWFJSzsD2C1EvApbPYqgpPgmPFJ6z6S",
  "key16": "4RyQhfjQ9KbRoDKLPDatRMETBoQUFyqWJwaAbib3rZhiatYUGum3DBuTkf3rDr1FGyQoAAb1oCyS7XQELon8uquy",
  "key17": "2WD72uMsMaZdDhmApiKUDkC5yDyFTA7ySr5DytWAHbQ6KwGYQQxiGGtU7WB5ADujkJPzXd9HFpDzr7H8HHXcbGLE",
  "key18": "57SpR5rwhne8t3pia8qjFBvRb7bRtBF6WkjjJL8veF2EbkYRHkVMw9SXwrTY2j38faA8dh9TcpYQJVFfRUYimD8E",
  "key19": "5NhrpPoBPHdRYLpbcuG8ahQgmncjahj1VPofYn2LmAGxBbkHwSry8FER8JVA1rUAP82dUyGPSjvgL4LwLYPRSyYh",
  "key20": "nnyNXJ4dHBEUYRXZwKU56T9dmhUmRevJaHb2EPTjXKLPAsjgc53PsE7o9qt1S5zPwg13iDhMMNqBfJ3AQo7GVPj",
  "key21": "NGRHSm85SJyr3uqSC5RAc6Recz5WDLbYgsa6tv5Lp87hcon7TEabWdMA9nh8mCUft7vbC1VXcz4jN6nYKqTXxdx",
  "key22": "59XMu4PSDoEDBi1S5LVXrVCtjfVmbQcjnJnuoDot9qhRvVPKFb4XMexmZxUYp7e1vcfkz4xbQuVF2reX7DbFKzhp",
  "key23": "22qSxHbZ9jxRCukBtyNDtqec9NX51bVV5v7fM9oZUBbQeMkY1qQ3tQMBo5mF9cACeaqKE7xcKQRHDm15FcVxP39H",
  "key24": "64LvazbFEGGpczJ6sc7j8wjYbTAKAddCjjVnKyb25u5xuAwJsvXkD7o4QDYMGEisQGkNDivWVdWAaVuACoNqvyCD",
  "key25": "2wMHVEDvTDkNqhixmXd9cMeGVLdgEbUYjg1XSsgH121JJdY4fywuGDBpsAW32fTTPVujmava5NFsdx1FRiaPKVUx",
  "key26": "3jwSe5pcPwTBNjpQaiM2kGSMaATeBURRVCi7mChHTUJ6JkE3Wen3ajRKs1NfUEYA6ZUmr2KwXacJhpPV5kjsCm1f",
  "key27": "61UZdgCvW5TAuwfc7gaQkaRcjv6mQ9YpH3Q3SjUVrj2jHxiER2xEDPVkXLCfFySN481N1F58DosAR1hUJQyKYZVb",
  "key28": "eeeXdS3K6zBTB3mdnYwAfUsPAwfvuxGhp8WQB3dLjoedpezcqZXiS7w5dEpTiXK51SPekrY5yi2NMuXfQ99J8HX",
  "key29": "y8T9RMVV3b91o7f3uQMgfZgRHbTdroKwezXTuBDsFwYvbnFKxX7cHMmrWiD6ZQAQsttxCdb5jEtCKeRzGZjyJ3j",
  "key30": "9buk3ZtMzYdwx5UQETxitofwKfVqz6JFZAZ2EasYgoa1TQK3uMAbTHJritkH7AHmgnnreeLwLqffQepdmPd7cSm",
  "key31": "4CMfwi8xmRykFCHenEuY7mdzH82jPKMixkgCmxDpo1QJWGJgDomcR3gZuTXMXY8PSgZ6qxJivsxCZvVmYc8hJUXW",
  "key32": "2sk9yCYFfTM8szaypYAji7HWs42tv8hcsx2dyxCjFJcLhp7tbu532f93HqYjneaqU35FQ1pfhge1vaMCtZbNCJUD",
  "key33": "2Zs35W74fkF2VJocjKBzjbYk4FbFehD8F7La6VjF8X3RHrvAsdxXRakmDVFk4ARXCG1BxhTbg4SPhkBrcn6oSjXw",
  "key34": "2PvXJNVs8dvv1iF6QYiMbZ6kZkHRRU7rq67mWtjvdvv4Pb1os4vwzwEYtho3BZSdL67mWaHFFBjzNWkuEJVrZGTE",
  "key35": "5q9fmsyeSv8FLqALPb69C7k54PyzG8f2wZjxTno7QPX9AM8ZM8smPfyQm4yVpvNw9o9wfbtMjz6ocpYV7nva6puF",
  "key36": "3r5sWQ7WKihvWfEZr5Jit8T4A5LVU3CYQjwMJCYMQbsn22N2f5sjkxNL2HgqgbBxtzhJG3NsQPhJLbLsxusecCxg",
  "key37": "4xYm7AwT9MeeXDPaMBPTLkCXaCKoGrJM5umvUX2zCpnhFLQYeD9ViLJTKMjfDLBequgk7dGucYJjPu3fQ6sWCKSJ",
  "key38": "2P4XobgSmA3FpkphMJymbMhvXdbNk7A2UZb3R8hncnX3jbiSkyBExCVrWdAUEaY49naAYN5SFtUnr6Kavw5hiYgo"
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
