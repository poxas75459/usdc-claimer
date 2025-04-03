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
    "LR8JJ3R1zzsi22xEtcpmyXthrfJKXtG6efuA6nDAXKFu4sYGbM2HcDvEeyaxWrf1EXrz9bvs9zqTMySe1nmnkjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JD4oGUmSvASHSmjKrX5nttqfoAQYLbcLLu79NHVxfjXatb6cAg5sRT7KVTfCGCb11Rf9NWibYQUSnGHxe17rTE9",
  "key1": "3ZqN5FqWjqzvJ5jvJYzRaBMY5iGoRFVChf71o2HDraDpiLrrLbQs4UGGsrsSPj67du8xYRCgkdhCgTJKjySA41WH",
  "key2": "5geHEPZhSaD5MQezdAzwZ1jbU5jWBnz7BsFJ97ueFobiWjEi4E6gZBQrjeegRx5NcVKLFYnzdzNNKxNmf3WsXHea",
  "key3": "2WMVAA7cP7m4ZSfxphvHmYvhEVveYQMQnTa85YQxxzh4zCyzTkxU1T77jX4Jue5hwuhdKVbs45D3Xw97TjUkXgcb",
  "key4": "TM3vBGqjK3vrpt3DStHBzzwU4CJJ4hJ9N2gmwT2QWvWcQW7b4QZwTnCTgRnKzEAgXPP2WmZybrPtNmfBTGaDzL3",
  "key5": "3LRuGwHM4nSWZumN3Ez8xvn38JAH1TZUb7eERqfEyXWaK3BH6ZZxg8chJYLqo9fodSGvhL8Fo77o7FF6zH53gUAo",
  "key6": "5aGRh8DRjjBLR6xJ6dByS9DraF8jN8FuRDEF1ARELQH4ywfopM5LQS1CTYya7sxd4QfE7WLtTSHNqaiperKg3krL",
  "key7": "5fQRyy8pw7chqupUA767LG5FVbS1bDxgqKs7DT6mDDq2EuLBHDSzWaCD6BpRsN7Fs1iwHLKnUMjrHtjnqtGgB5rS",
  "key8": "J3e1qRKDAX27GXxav6nTqqVsk73VjbWUk5fD1qSkmMC9SDLxZvupkzBLwrX7PBfLtccBfbStNcurkBew65Tz4LE",
  "key9": "36mHEn7RPVCFJE3SXGwbYgXwciD1GC1mJtKVAiAKS2ZzytFqvM9gAVNdFZQMBRPPzgWVVjQwVM5jdrMfqJsAsqvR",
  "key10": "oPd2KxvWgmMVkQWAXfcvH1ocJeCE7y95j1NbLmmJCBuD3LsPn8KubFS858d4ybwUcyiBEpFBp1HgQe8NADeSeo9",
  "key11": "3Jtis9vjqwW9fBNZNV6wiBpiqaXpKStKAxeiSXcedUvv27tzMWNB1w8frrj58aG5oUZMnVumFaaTft1MvdmC6Xfm",
  "key12": "5hW36cespF43KcoGtZtj4fdtLmBxNd8DZoqqhn5AJvPTiyvsSP3jZtonmKCKg7krNDuDjoDcD8GgiSwgPJ8AHsZf",
  "key13": "2sfHXoRwcHZWKe2XQFhsEioRJwY6wZwQnuvWGj8gfKUgqdp6josXgNg3FnLSgD5SQMgQ4V6WXqzyhVT8uKr7wFhe",
  "key14": "53BdLWE5LWXTwD7bo7sPCagnpirfmHEaEqWc2jFzxNFfzxtn5gTQmESaCwiFHbMxg28cK8p7jZdDr9qLh9piKDCm",
  "key15": "2HkWPTo1Zor5B3876xtfknxBA57Mzvk69CG7DqCYtbpvNFzuRnaeAFUQQFTte2aHzgbM3PQZRsD7hGNKQHax8Y3J",
  "key16": "2NnBHif6Ro9JSBTmKdwfQ2NMhvLxAa21RpybvhyUEttAqmFpHxY9SbitNXuTUZaNWS4pN56C5XJqot2cFf4FSGWz",
  "key17": "5eqs8VqMUxcRCJcegM7roe8XXBBwDcyPhfdt38bLzKLSEPmjZXd16PeuXi4K32qm2ZHaRTYyBC898n2q2xwrvJMs",
  "key18": "5NVSo2v5jTPXhVAeYPUy414BtPyndspPiV6tp1jA9KHXDLNTqzsLMh5FCCCLFB8HXZLdi3cy7pa9SK6VoBtRSfSt",
  "key19": "2aYdYBDkuGXMhox7LNCuxxBLvxEEreQ2MUwh5inpjNFL6y4aCEi6cCNmjazgZv38MvQMhpcm4QkoYytjvd7MDbhP",
  "key20": "48fE6xivQQB5AB1fxUCS6wS8VuqFu6tefxbELwvVZ1w6yrbZDDuL5EBWNHMg27P7wewdedLQ42RGyuA49fSAYVBH",
  "key21": "3GzcbR9w1RrN2HxL3JaC8wFHmu96ZYcybMFJAGWozjF4wP59o7nsmJmngQUNjwh9njm6vHDQ5oCCEYq5JpwZsF69",
  "key22": "2TbD84hF6DxsTJPykatj4CX4yAhoWUbmxBChnwFpDqwvcHib741XYhucSfY45Ccr7SQ5Jipk83dYDvg2GTEawN1E",
  "key23": "667116yKDMZwHRUdQP1uzA9EjMPyyAg52av6f6fegqui7EU3i1XCaahdWrhpwAKW7xj11N81FdzX3FzBmdkjDsLK",
  "key24": "3vjqszUwSgn4hzQE9vHRCmtRtarCHdmwumRqKF84LDU3uBnk18ymxiYHE4gxrZZ4C6v2nXCavLfFH9cMpKw1px1Z",
  "key25": "wAXZmHLb21c7KBLg2zkKrm6T44az3suWdaepSfWyua78Vsch4aTArbxxr9yHmpasw8kC8DpffrUMHp4fakdXKHL",
  "key26": "5py7duXS7MmKcyspThS9fHVxJMAjGTyjBMj9QcNyWBxrAwmyVRhcvVHAH6bsK5FdrbTDJMLZ8mSJik2BcwTDTv2C",
  "key27": "2vTuVihu6KcAYTnXkrt6cjhL5duh2qbVoAFsT4STXLprEpkbdhaE3NiJNJbGFmia53MXEz7esE13Xqq4HRBDo1XY",
  "key28": "4HD4gy2vGQtFYP3o8Qdjc7Z4fVvineQSzJZkgDVY8r4jyAYkcMFiaUfgsyR1fGndAZTdfoDVtLmspbC2Q7LqnRiV",
  "key29": "vP5YAQUnSSPCWYdvc7RbYRJAC4cTsAxBEiBrumCrMQEDhEJFD2wu4BZ29g9RS8eiPot8u1BnRLNWhB6NuxFAh3t",
  "key30": "nABVxuFizVNWfcxuzKjgsSdjSCVMwznm8eRgmndTDVwtTN11VuDDZgSiHWxBp6nsJeQWumP8ra2utV8jFDhuqxK",
  "key31": "4ujkZkD5Zo1tLnnn5VuqoM4Dgw2F2dHYTeeuko7BEuHXH9SnKF6w3iaab64gH9ZigBRzbcg3WPajrYHYwfWS1UCi",
  "key32": "4mBcdcCCzuG11AdN9kfjsSeYPG8YmG4PgaeN4JZRN9vU8ro16F6NsDBJkP3kHq1TnjE7fjsH1TnM7sJw45SPDi8R",
  "key33": "7Yjuu8w7JBCPtcyr9u3qyjW83dM3afAp6He3C6poPghwpEgNCKxcFQfpUUL5PfbrdHTKwae6fVL2bXczHZm99ZB",
  "key34": "5HwTbx7WEDEjD8r2RyL92jmTNSC3huWNSqxCJKs9t4q597ad4F7qWnbWsEktvpjTjqUTfZDbu4Sdh8ARVAScYXku",
  "key35": "5xqFNXhs87g3J6ompsEUS5xdnKgweLVGJeXSwEewHLDZUUAthjZg87AUCxnZtHGXAuF7GnpVtT1oyPLQvjzDDSoS",
  "key36": "KN43DCWGWTzWRoyxX9iwnm23c5iaVxFC1PUMMYwMszgzvWVQcj3c6Y1y9s7bnN7MnYMEuk6DyjA5HCEYiJv2WNd",
  "key37": "Se3Dz6aEGZNAzZriZv8PyDTQ4YsY8sppgh1ri6RRXrjih4oV5U3wEpoCxJidgP3ZWWQQxHnKPY2kdnA7exEd8w2",
  "key38": "3nTYZsfXrrfT1vsw6MwSx5daPs6c7ZZgcFBQDrkiT859w8usSAfguJJKZrqtZuvhysvSgefkDcLC7ztA7tkrpJqL",
  "key39": "2Ap2ykaMuWxBPsAoREiaC9vxE6Cn11ReCDEhr4thjBAmZS75bc1Djh5ZY1m6YWd1nYQytiwBgXrqwk5rj1FTTfCz",
  "key40": "5WTuQpaHByFiWFcieECPAZGwvrQpdJnmrd8P2Y3pLgSJSiCjPAxQnxMPyYzQXQGiV1m64SCBEjaFoC7Ro1orhNES",
  "key41": "4xD5hdcrGyhmUaYvKTNTqw1u8jADqKbASyc3djttecwf5Map9Py6M2WUeRoDYiHFCU3rBRtmVWmWFGdj1f6Brjy9"
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
