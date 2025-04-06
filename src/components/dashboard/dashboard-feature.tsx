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
    "3KFRML6uyV21iyRaKDjCn4Kd1rvFdMnreHAJnoLtM85GFrUqv3dBPeeZLoWhCE7C2AgRjPW6kfpiQs1r3hg9A7uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMfCqtnFkdMHhvQcm7LCWJxw8DPgEMTypDWeAxFNRzJYiBepuxA8g627rKV7xN43Jr8zZa9vq7EyvpmLRYvtufM",
  "key1": "6DLQftrdNRC29457JUMcw7tsKPJLqvFsYGtja5dR4TtaK7TKoSQY8sjUJ2LesvFgg837QqLazFvxkKBNeeUc6ej",
  "key2": "2CeQ3ktzc4TcoUEVoxWeuQqvTGZaZvB79rYMHv3Bzh2dcDZ8N91AFFMFjmpmzYeJvGT6HZtk9vs5WaxBPsFHTzHJ",
  "key3": "2r7WzMMQRHZSeweLrSy7Pd7ZMmUsNMUy7bpW1y3DXDpjF2vzsTaKjEcwuwQpeF1UqDUb42Nw6qRo7b8pC6aoJvjd",
  "key4": "MLvcgcpHs6VmXf3PSBghNy81EtkTfmKb8FzvXvnqq5h5qyEaGkPuuE4y4jpHNgLU8t4AW3r13MNRfD4hXQAXpmY",
  "key5": "4tYNvySgf68CBUUbyD6aD1JJVcWceGdxqGMRafumjS312KtohDHdPuYrWnjzA31nacnpbfw7p7bJNjRmDWrh8yk8",
  "key6": "21zUWNnvt4CzMFbtQ6NpHYrNW3pW1uXzqo8vcoCFUKNmt8wHtvKWsgFaaQoFuuqiBHfiXeWuNGYvoF7YMaaWhJJB",
  "key7": "5FKPw6M54pXPTB59cwvbdNq9jeHW4eSTbWkg5CXv5AAqgYvFfqjz56aoqnSiWLPjufHuTvNrfp3MPfLMfJjDMJTD",
  "key8": "MNkGh1Feg1TiQh7ndxBMtbfYyyajAdo2XodtXBWhSXLasJogn2sPeZBH1rXkorVwfKCUfovhsi3B288hVYZ5Nyq",
  "key9": "q6v2kRpUy539Xk5Zxuo7x7mFxtKYZHfqWWuNzjdvGtygywLc1J1bcMtYoCWCmYXmJMsNS5e6rkRDKs9Ec8MNnc5",
  "key10": "31VrtbVj7LPJzcaSHMsK7FZgu3ji8bfuBpxc6V6yVb2gCG9KNVkpwiWvL8wpS9pbkRaFdsoJj87kP9gRTXAUCH3U",
  "key11": "KZWPjc9TvsxKfJSHkCtpDKHeLnPX8ybUaiHtC4EWfdBaXJXbgcmfBeinst3grjChjnP35eFASKgAyv5mMR5EDLC",
  "key12": "33GAN2eonNJjepew6dytZQ7Uw3Ct61Ug2e13HxKYP9xujjRaHi2eBNZudXnsTto7bBwqpkUwoSyB7uctB7fQhavb",
  "key13": "4sR2J56ArP1jNzekmjTyMCTR9pQAQqdd9q2HPuZti3gLGXRNz2SBPA35mn4uCzwhA3irabgkokQXxvooWUzzhfUr",
  "key14": "MxRgE165rVKX8XXGsja4L6FXRUqacCpuhpgFqChiNn3y25oHU6yPDoJwjaCsTKfa3Uem6zYYXWhJQExZUvumCmr",
  "key15": "wEgiyHSv64wuTjshLZwRnb2zNiosffNisq4iKvGcAnF51eynK16Tq48XZHosCpErcFWhby8svbeQYQ4RRpKbWDR",
  "key16": "2CwxWHgPjb46VAfoP6t1YBL2jnMWTNLVZSCFTt2yFQijX2B5ewBrNyAX15jepGxrpR2YHJckrFBSJiDDzXyrfYJo",
  "key17": "4gAfHiScitTWRCHgyTeejeGUr8gPVZoWXQVo4vwvgoXdgVrrFhEL8MhRo4XDTLHXnhLJzed2vriwaudXsMfqqc1w",
  "key18": "zSmeixX533F3RUJYWGe7ihmw4kFV1BNF6L9emRAsyxPNRfkAuVJSHSbgPmykDRMqg5o73Wnk3piE1gf64QNFvhD",
  "key19": "3ob9KagMSBvY4NUfK4VR2iNxz29sp8tJoJUWpsPBN9rFVMHCykX5fRm3iZHq6SuomgziUsrURHBuQfzgkisngJxv",
  "key20": "2bz63Qs8dXTjQEr1VdkYgHETozKuVW6RfYMJL3ErNRqrdRBwxNCSvTtdcS2bFdkLLHXYejbHC3ofH6kVHsnz2ULV",
  "key21": "3mwQKbRgdZEndr866PSffjfMx7PAXnYAM9U9tavSbM7p9HLkKzAXCx4yZLfUxDJDhYZFtZiujrDKg3FbTU48iENW",
  "key22": "5mQQMsjWTSJAhremMaBxvhwDzYLBHu8bqXst4egBGMwh6ziua7BkNQtFQeFcUCCQY3nkxprrYMEu2w3TxqfgRs7s",
  "key23": "3TxEAxfybo2jxTRAzQmfLWpFK12RXq8a6PFqr1PZkFbMjo7hUL7PDn8aagDLLXDAaerDCTTvrGWejBW4rnH31DuS",
  "key24": "4KLYpSFT5mKLEE5MY4HSGY7hVjBvCEj9QUzQnwfW85LMvLVixTty7oknyFdaUQnpi6Xodvo8GTYkasmgAiFNdtYi",
  "key25": "PFsZtsz6my5NuM7My9MP3ru2jjRJfP3FohjUDd1HC2NDDc3QteNBd8bjpFr63HkGeQXF4tjeuvxjmmSQS8erHx8",
  "key26": "2fuF2X8SDz6AeBueAEpvPpBUyDVMBz5uGKTrPfK5igRfkWD2RkSQctrQg36cnx3JnDNFL8iNv9yndkHToTAuSNpL",
  "key27": "2gcyH419U6ji3xgEamgw4nU1Go4BwWpj2UqdhRhGthMb4g2117ZWmHGB5K5VBu6sPVt28G4mR9HxVBcymZApriM",
  "key28": "5iNL8CJYMCGcmhLbvsiFGffpnUrHrjvLwmGwcUpvD8Efj73dHmMamvHgR473qAnehsTvTUkoGsjT5dTELoNSYDhN",
  "key29": "4UhGHvERKD5dqyneqrJjaCyfKJtWodicdxThmWZdXNX7yd58Bh4YTiFrs8LSW3yd9Ybz44eRGYT13EkMwfwb2VSW",
  "key30": "UQz2vDS5TU3B2jf1Emy7DNgyH5FvUAo9HdooNwVhXKZaT2vWz1YaBvbvFUnsLt2wYKdR9XtRc8RCpCxwHETV9jf",
  "key31": "2jBFSM77C5dRZEMoCCQ9UeYEyTErB7urb2QS6wgAxudRynAi36vpxvCuo2CuqtQeK7Edergf4X3dNc1KpFjDHYhU",
  "key32": "Ja11snnp1eyEA26YVwHu34J1YtXqukPipG6avjnxcJjakcQTMWhWxWAE7M4kW6M9sx8LjPenaBYHqe9asxANE9c",
  "key33": "7pfjbHRiZLxZq7zFPgydXYXg3u9xFE5ED28X4Eg5f7mfPpF7ygQNjqycyDWpAqwfBShVgJmatnysQw6CaMbUHMx",
  "key34": "5W3FGEDqKqiw75nKcrgAr2dHswRPKRG4u26YrFvpyueuxEeXbZSseB5Y9mMrR72HbdomnnCvGsXwPxDFy4dLTvf4",
  "key35": "HiLDzHHiNqJKcuY2Y5w7pcfhGXBWGEeQAfBnNvD7sc2PbED9dJX9qvSCqUn564YHJ7E2F1rbZz5H6osko7Rj2oX",
  "key36": "bC3yzf4qJ7Y3N6iLii1mx8MAm8UdT8iWwKUH33NC4FgrVH8zesGhBxnvd6zGGsp1gnn95zC1SoTvvP5iBUm4yr4",
  "key37": "3ZQLcFNZkDK6AktN6fW5Vn32MXnYMZqNY6ASE6sbDtdVsSgp7J9ztS7BiLGoKSR75ndhPmppbm8dFGfJHfqYKFhA",
  "key38": "3dJM9jkMfyD4it6W1bT5FNjCib1Sv36oBpqJapyzVfx3qWJpxM44Mnz2FEzVbnio2WFpiG64Eht2txtCUrihZwUe",
  "key39": "4tvmb5ToisjDdkyZzagpT1mh1cmsnRHvN3b7oAkYEoxtMmKs6xM7pPSKjiGD8VWUs55VxMtXAJqRcPcwa9wETAo2",
  "key40": "4BAAEfwtbxRLaFgqmXHM48KbUXrtJDSaaPbjtsv4idCcGWU55tu39ueHAwVLFKbJgwS3gcTubW5tW8aKkKmDG5uj",
  "key41": "525nsbQmDFzRq3MwrFZJqi6hC4SjzXbBBP56rhdoYniQWWKZzQ6vDw3ArmaQY2Sih5HEEdMqcfcAE4YsC4SYTX8r",
  "key42": "3M3DKaFV3TamPYgKwnk21jQjd3vgxiNHvYJSyndAsBg6esjK27nWfkzk5FYC3UiAsCfVQP6iDAPVZfaUh7jyuFyA",
  "key43": "5q9hbiFu9DL2PYHrdVv7TdaA683LcUFGxpPc5mKnk547dJ9caEk77EKuLUXMwTeGfSsGV7SXNT1YFSRSiXBw3GKt",
  "key44": "25vX6QcyNGhXYBqPzD4vRJrVAgxyVDPnh6ihW1idkE163LrNDNV5jC6toKK8zqjoph786d4bN4EeN4X6v3mKArLW",
  "key45": "5EM6iUv6kqG8DteHaQDqxuZu5NUeDjPv7brhA9vHHnChXiJVFHQ9i9ifHisTnAQzw5QsyKtUykEJkRcUug61rxLU",
  "key46": "4yu6fJSTMYi2uyR5NUJjDSrr96LFH946ZJnBBPgogLqTyEwHiZhHzF4tZQb8Rkv3nZc8jVgwwkXF1Y1k1FBxdQy8",
  "key47": "3ZDYxpGKVXmnp14FBfXK2Kj2awoPjSgqarttEBzTQG4iKq6bs3GJkPzy7ZgeGPAgBMkDfcp9pF9UxkK8ovRGLy1a",
  "key48": "2XxvaaSs6GpCHtxzjpGc38nKjcRyLdD1WfnpfB3AFdDkehP1jvChqukRUWJxMKQDZDkdVRDA5puWoGXqTNKGEwAo"
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
