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
    "eiM5CXkNb6uzEBqnkAivMRFmeYpKBYJ68iuVcnG8ggEcTM8NWEko4RQUVYfgXwv1KeMV9bwew4NTvMoLRvjSi7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TCZEch9WBzjMfVv7wMFTCDWjywatDQ2hWsfdcQsTogxXZFaCLm4TAQvXaZNhVZdFK9F9Eoc6658uEmYHJBcJjS",
  "key1": "4BVzbwh55ucFFLnEM9u1FEAz8nnUXr1kgvM9Htv4dqobeMCAdPgcmL2k22jWtYwfcF3oGPL28sbSNJWSN591m3R2",
  "key2": "2NGksjYz27JFeDE332MAsYiptEohUhx9xk3BCdML6qairf8ABfLAgHENDq63FdcZ3PtZK1tw11QUb5MPmNVR5q8V",
  "key3": "5BNMGHDYeoLg3TXkEyqxkK9MTYUSvCkur9yvABGFxL9nGLUf6tohSLjH9bhk2RhsgkFG4NGVqMVUB3D6Pcf8DWoY",
  "key4": "5MCAWahtmDNAWC54G9CE9ADAQiymD5MtHLXCTQ5E6HAzw7oNDCiJKy3o85KDFcPpgtoUdzsZVQxAxK7PsZzPJmrb",
  "key5": "XXWVLHdV6Uk9fCFdGW79g4mGEhZv2oAZV5HCdZxW9DJX4r2EBQ4jqRM5HFsHcv4dAFNhBsd9WXXVddxqkUfija6",
  "key6": "nMV1KrN6VsTqmXRgp6aJfgHywnLtugMbvSrAFFb9JWjisrHNwrdDFDM3EogKut9DStvDHszfim6ajmS35kPaGP4",
  "key7": "3QWhBooVyFodHugmzJXkHwNh5KE6wUAyRwvrdJUiRAJ8pa9dDpBkmTHZQXsMnxhkyarN7mYRT5DsUbk7ReiToNg8",
  "key8": "3YX4DS1uF2LPDHWeEmkEXC6YYee8h3KnCJ2iJYdPhrFcgJnETB1Mm8sxjxVXZggFUSd5WVwLFzH8zfQ25M1Q6z8B",
  "key9": "5k1DL976xYhgYkLE4hCJsPQfkQRNsogUo8mGRzWaA7xgvznUFp4j83LjaDMWs8zVjcLycj65P7Wd3KE7wVVs1oEB",
  "key10": "3fLDxZCh9Z1eTiwy55Dh3f9hnKnThcw6VDSgCHwFZGcwQpU47CxqxE5F4x8rPjQ4cUHwZ15bAko4iGwWk46Yc46X",
  "key11": "5d7TeDydRqtvnQoyerwwNgXXSzK6CapEDX73i3V8K9BCPb8gABpgjnfKr6ykcKtqyPCiEK8qebxR2eKBz8kFAxki",
  "key12": "3SkunMHtxAbPyDtdivVS28qcaF8YkvFu3Jijy2PbTKT6q5nJTVEuNWNFR9Pzdijzv7Q4vRbdTykPWSUfdB3ny9bW",
  "key13": "5JG7Q6jopVriUucge4bzHoxEbc8bLqAjFBU8nXoCV7Z1jic6buQ2PhVLpKA8H572jdnsuQw6z6qaDivK9kN5ECwY",
  "key14": "UPEGzktbFYPvGJfMyF3X4uC7XBWhZ3MJ3cKRQ2w1bW3ZNztmGWNAbrHmbP8oZCWDvyQ8gRdrKTqP4fQKCDw8AWt",
  "key15": "WtiEpQrjK2WEwYrZgKWapPLR9mohrwhRzWi6dantdh6Zs84ZQJCiUHMRA5vMJoigFn7w7iT22NuBZqHgsZusDga",
  "key16": "3Qs7wjUvLHFiQTzA3FSYLxymTPtEhdANXNcXKwe8EiwYD5M63kJMFZtYdvu7wRAS2UDfecTMEVF4TU8TqX8NKPoa",
  "key17": "5V8qGbutEtLfdzCF5uScWe6cG3fyDUEHySGqxDGWTjNMY6tqDYCfhZewgTAXzmhBVbyjW7PMW91u3QiUsWwZcCtD",
  "key18": "5YVGnrdqsNRCQKts1eKcaQgt8KCRWJmnrzaqrwyF7fQQzMtjcKk6iW6rHg22m4mkMzzKeAoUs1KtrFyj2XsKbL4y",
  "key19": "5e8iFoebt4d7UsoJQWZt4ecRV3J4yzzadE6n9RshRcjnjnZysGCDADX7ZiLmWiv6nhBLzSHMdZBTymMB9BtjQ3VQ",
  "key20": "4B8Ym1vLC2pQaGyhpYvotF2LKb22UKuSRjzZxr6euaoGTghjHdLezYifXmY2qbYpYPFaFT7ubWqGiHVsWDKU2gGV",
  "key21": "5aRNNL8HxNd8HpieAR6QbnY6hpV1jRtC71MiSdRG3ieMj6taDzvbZ9QZT9GDsnqaXj3FiWfKKFJGa5QcfaMikSTR",
  "key22": "aAQBMAmjyjgAX7ky7ZzH1AH7eTjS8Qg1FNn4G9CU5WRHFnMus5s1VaY1fAzPPtnCGXvM43csRebWhRuYKLfkan9",
  "key23": "63ezvVK9wdVbHVEUTXMpajCSQftg4mFJQuTXSSdpbEwfr1JoUeA8YRBBLrAPWJ3uS7oUGbXuiXerJHQTF6HxBttK",
  "key24": "5yoxAA2PhzGMF9GdkBXzjyDi11piSGax4iZYd3Ymds3BoJnvX33fBJZppusqBn66MnSX9nAXAi7tBQ3nXRcFLGFq",
  "key25": "2hCo7wbE1fiBa3Mb4dQL2QrwPxzoDvMMjHjoxk2q98a6tNkK6uhYr87eXY4cCvEC5cWqfGwTa4jDGuS4cFEKK7YK",
  "key26": "2RKfaPVo6FPc63T1NqzmdQEXYKoQsbhZKymjm94MvuBx4WGN1aUe9LG9g8Rys8FNu2ZZf9ayFBKydL8tRTob9XRW",
  "key27": "46GieYqwYH7QFWCmzxykmikNCykuuxYKZyvL8W7VSe9quMtKjQ2W8SRQNQc54Ki8ZS2UeEkJ4P6pfdXkftbcQcd4",
  "key28": "2A4zXz8Seq7y3eKe7YrP32Q7qwTqZdS6KE1A5uL2fy3s5HHbFCetX4cn2kFNhCzTwAUZ2xN3jPm2AbGv19WczpVm",
  "key29": "35aRosoLPj1upfhBp8nBRCxWztx8PoDDhj5zdfGdRAZJRSg1x5vEZgLeJXraMDZ5rufzdWfwPQdLNEUPGx98rfaW",
  "key30": "5kdi1fAng9tSZMC7xcgjivobXTxWwZ9E87auF8ZQJF7nNwMCN8Zh2zqmjMyCGsKbCBNTGupttcG2LNBsypqGpiAx",
  "key31": "2EGM3hf4jFDNf2zopJMriFbJWFnrdNgHYKjHTRRJccK83ELmLgTJJsxUgEn54dmADk7nmQpucB7EvNsN61JpwZP2",
  "key32": "2MkDFbmP1bsuH68byT4LHRj2H5yLyr85xKyyt3wxijkLRyRrHHpUCgYZBNjenQSGcFqYCxFqsKndevnzMGN6rFeD",
  "key33": "eEYpf3VVncMSZNBHSZbFAmZoJYuTQDwU7FH7GnuVi9owCPAaEqG8UXr5xPWXmyZCrpBF4qvNRYKQYmVcN7UGcL6",
  "key34": "2ggKzE2KGjd4WXAdmqZyJPWZY5jk5FJFYy1KXDsQ8g4X6KBMJpihWoGkyiee84oHN9ePiBtP8ADvMGEcgcR6jkma",
  "key35": "5JGzBKiejpPQHzg3fH61xGXxxHUQg8g3mXQJKMGZLtVA145vmBg6vqRDpuFM2UorBdRvRpn3G6WuLfj3TDkWLsoW",
  "key36": "2GaQTuz7rVkLunCQdg2xZaptJD7mUTPK9azdzT6Wcf65Gad1T1M8dAP4ZLD9pKoeKndJnNXuiYWWAZwZk4zoNMq6",
  "key37": "2Hg1q1kjpkSmVmWqgRexfopT2bvyiSxBkDTXu8zDwMi7xyEvDtyUQkuG3vC1Z5KRuw5RKa1UaA4nXQmW5tCQEvd7",
  "key38": "5fagGhRQFzCu9Fgg7pHn8PtXw56wFkkbdDpCW4RCncELzBzQ9fQFmvYMvi3z7wv2s8QF5Rps76greBXdVBbqRtm7",
  "key39": "2NLz4R2qiWhPxvPN73Hn5oeDKj6vUhm6b2tefB3gvgfKbgp9wcov7oAZVaTjnkihdtJzA7eo2EvdH226BDy2Edn3",
  "key40": "5tUfv4bcMbsr5h92SFGvkvJZwNk6SxBDUJh8veppdwJE69vhGV6FYnMkC96GFH3ppRPdyBj6DTRpsJqTLmkkw3Ur",
  "key41": "X1g2MV51KZLvSKExSjdrnuhPRZRmqjyDGE26YnXNSMbUogcNkK6LnYAeeXjczRYgy7f2LFLabvLepos19UmjoXT",
  "key42": "WdNVgZiPd9GUUPAyxb9GXr92Dcruu7dSxVeFqZvbKgsZdzaBDxypFhsjkVdfX89VVDPuTCh8SvmrYoxZSEtoNov",
  "key43": "4zfPoUsZXhMfxWwvXjN9UiHiUg5PpD69yBGNLRDEBDuNrZ2v8k7VhEsnhkr74YGgz8hrRDZJubzfBAsyJrAehr4A",
  "key44": "3EEsyDhJBiqu2T1eBc3TQBTeZgeyz38YhCrsBxBMcV117rZRmdMiwqKc8rJjCSxSSnt5B3w8u9yvUX7ECzzxpBiF",
  "key45": "3DZtWK3r4hCBN2gfkG8oG1SMYcCB84GBTUwYc52iwK6iobLEUWiUkTpbiKsUyPGRMVH3Z8bw6myDKQsHDtx9xCnT",
  "key46": "3gig941kn23RQJbrdkDWzbvSCbFSa5P9Q1o6Np6tfSC1a4MD3ThvkbJkGWyzWQv2k5ikb83pn6TmeK3h9GdqerKR",
  "key47": "53w9H4oEjFMV9boSwHqq9airAfKje5CZnV81eBRBQPwZ5vjVEBD1M2o15CoaCrv3bkTNxG9EopUDmigQEYpnAycF",
  "key48": "24fhGKeh7gQgcVbThGkBSt5723Kvdzan7qhtcgwRZMYbW1LkyHinuMRma5dvmPBCas7CE6qHhmw6Yjo5fSCQzp6Z"
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
