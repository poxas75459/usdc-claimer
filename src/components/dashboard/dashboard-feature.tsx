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
    "2JAqwRVkd9fmmNT34qrkenVH1u72aZ4j88CS5qtAg8pQLfJbkbaWa6BZCVPHZu93grMe1ryHW3QJJkkBybfx8L1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjFPqn1hZrdLrBusyywqnBCDjfMLbYVpuN25CGJ78GjFLxpHU5Fh2mLyjVt7i3MU1NNw9khpHn8mZtSSuP43iFq",
  "key1": "5tQ7ujNiHAhtsKz3bwUwJJNqEKDsuWJbFxvsYtpEDyyaqyR9VzEXqXRTUGQc2rqYNoX9ShC38wS2L7JRMvTHn9PV",
  "key2": "2w4rFfkbiLRY2gS1BwREHwNuzkVvtrMnPToJmRiSb6frCT2bMhLEWtMUVQ7uQDLgi9oR6oU6b7Sii2Ly1YSKeXVK",
  "key3": "4c95QfUWKWhhLRT9Pf3Pfvd7ZFTKwjbRghVXFVJBvqnHk9inKi8kR3gEAk9d2sa4NNAhqf4zdcdc33qKSpYrPS2U",
  "key4": "23jqf2HMHKU1536hDV4Qzaw5FVhbTKVEfsTdjXGaGAHA9uLNQjibJkpWgncFScpPMQU6D3fcsVxJsUuW4bjG1XL5",
  "key5": "37mS8jDmsLLhzkNu6gwn1LxHcXHtCKitSqhBjoP9isiBsiSVjSfiu459VSpkEphvo2hMDJWrc89VxtsnB9cWtERX",
  "key6": "2kegyFjcfin4iGBb5LkF4bWMXGXJkBoBWiVAPDuCjwKxQmm35Rk7VoNoQjcZwRFLzEhq8EfGffntt6CkVQVaEgRn",
  "key7": "3cTCJYJcSohDPSuVzf1YF3oDK3Vn13DRVqkxoEK3QuNdsx8J4YoSGCELTDbCCkVmTsmdddPryBwBNYRzxiwzAQ12",
  "key8": "5EcdVWVj9rH6Lrn2t3dK8HdKBnD9MPsF69FqPn9dJSj58nwJuzCq55zhtKw3HZxJ142gbbB6JVzDStfDgb3yG1dz",
  "key9": "2voE6qdTwTjg1DjFD5brfJMbqhpJEWRnErpZpW4JP475mbhNGxEzgsrzA6g6EgtwSaqtDTazyaqvg2Ry9afov6tJ",
  "key10": "2GDupX8eTaRkeNHCkvcCYFEqPmBG2Y6WhDhQosxXoaRKb3TcopVZWX7cetQiLkUeSCh1THLS9uxpsPUftjHTriEd",
  "key11": "foi6ZPM7tjJNHmPCj8xA3SdMy82zNKhyMtnczzoKiSUjpGff4LUkcJUcnDhAaej6g64LSyaF6KjRAoDa1CJu9xe",
  "key12": "5wfWnqaMvg8Mfzhtxgvtjiur99mzmdX38rNG2SBAhGNFF34F7THSFzkRFS4FLmBsmzNFYziMG5zemtd21oKChNpm",
  "key13": "2YSGaNqY369aeHM9eBZzZnwZKxGAWKW1c2DgAuMtRoeTJH1nGHBdip1qvef57LibWK4dJKKibaWNahC6sTGFJS56",
  "key14": "4Amhhz85M9hWUh7nDQgsfNPiss2iMmn5qniEs3YcFmNQkUur1HSs8dpDsu8dFqZhKj7FsfsJztzft1FiV6N47Dnw",
  "key15": "uoWfY8yJjgEqECoPdCoiS1uy8mmtDTR2Aj3unyFHaoK1ba2ZqVJ5eviUCbJqcu3s4JpRMeeTj4zkTyeT9QqfDtD",
  "key16": "3arz6u3Uuwr3ELZdajs2SXJhdF8kDrjqQdWek6ETsSWmEZe3qR7qxjsSGD8KL1eeCrdK8RoKVL3QxM7jSwS8QL9o",
  "key17": "34mDxqeVb5JbgCtpkTiN39msuj9jGRyEYvMJ9M7cGJHD5BqhzhT8YDeKh5zGzWZzss1idNHtUHSujcb7Ni9zNLJi",
  "key18": "35g8JAVcyNudkDrZgzwWuEu7BMHZUGY4Bg4BPjUdFQotfKQE5g4u95AaXRvJTTctaNdP1R5Vkpoi7kvGiRX3PBab",
  "key19": "4Da8pm5S81WvvLuFgehSr1ETPx3XA8b3JuEsxZLDqiDmnq5LXF5MhmjPnJd9p7KztPfbJJxJstKTqPQJZe8w4M9U",
  "key20": "3wxTvNDYo1s1oz38JKZRGmAXW4Fjo94xMeFhhHgGBF1FowVqhtQ1CV6Runz3zYw5NmViBEAfpJWi8cMunK44BSb2",
  "key21": "5AqyVSz3EZBYHAdDzCtLZBcyZdrHDy76SgnFEXoy2zXedVc9oEPwNk5pJr2FTCEbUwrZFrT6a63nLa31v7QzGxk7",
  "key22": "4TyM7AwJsXrss11i7ceBACCZ5yKRHWMCnZvCUksGsWnmsGeXiN16XF3sNgWfbthCTiZ3fkUYkRi4ErGw4srRgdf4",
  "key23": "4xc5FMcEWC676jiFzgUcfpKkphCiov7a6VNknvqtyUNX5mPYd7uhpiBjxbEJmsxf1S97A6E4LgYFfqR8swd4oxYs",
  "key24": "3iRKHLpRKT5uwEdjmknfCa3fJ8zDbMVxoRcDqV5XQoVVsMG6xdgqKJFshn8aGpddcbwi691GiJbuwDqP5xaHhRcL",
  "key25": "2Z2YgeDVaJGVVMgj5JQKyk99nU7auPAFEDoYjRwz4a1ynnbTPJHqAGUXuGfjVU5FAcrPn9GExU3SoAKAhSzKhGSq",
  "key26": "tFtq2zbatczPJiAfYXo58P2imdXZgb1eRZMX79r9hpVzPsrS2YTCb1xtGqtGijLMWhjY6hH23MgDA7cgtuUi5D4",
  "key27": "2Cja7Mx9TE33Mn44Kr6AXXhQqgag7ot5roo1WQ9fz5sKTeQegZPoFxNBqWyvm6Nye475hDzZgVZU5yLxkfuUmNjL",
  "key28": "qoyWXuFTzWvqTxqabJXa1Pey1PiidtXwvSiEZ26em2oqiPZ89P5Q8aQQuXHe1ZeWYhgVWkctnwNDHE9mW678HQq",
  "key29": "25D5y2ZdkyEtn6G4NKqspxAuT3iSD7cjMF2YUdGaqhLUy43WbYgo1MbyYayvg4HCjr47jooFmasWduKXrzXnheVs",
  "key30": "3QGF1VqRXPDeV79tBE5tbWXpyWchg2YScGNYPpAgo3nge28wN72QqhCJuBDtgq5RyHe418fAQbNB53SnDrSAZKud",
  "key31": "4fX2uQ6Fy6gCUN6bNMs1YR1D5ErhMZmqbQKJ3DCCEWRV3kz7pgUq6pJDhxz5dMcCtpzXFTdXSuaeQUBPpz7rPiXG",
  "key32": "3ez2AJJyVumxvnjmB5NHERksTVTgzzezjU5Pbdtg1pnsVpCkgf74NTDFEhr5c3VFDqsErST8uiHQZhkkKVUJiW12",
  "key33": "58WKJd4UhhF4JMkf6j1FviWSPDnDs2rLuc6fuFeoqpsKzDzYn79UBkkdSnQY3iufKjBTrH9Ku2Zz4jDJsY9a29xa",
  "key34": "kwb4ihh9FKhtUK4T7G5WqeN2GyiLmanAY3ngjiU4VDXfxNzzYzb5bPQdVEGMbLKoKN9evefo9Br6vC1zu8NPe7s",
  "key35": "26XKLUfMJ8wustvWJVJ4KZHbXrh2C5dNxaowppCgVe1GPGJfZkYte5eLpG4SdMNGmTvCDke79wtUMHyQ8fZ3tVAS",
  "key36": "62TkG563FPsCkqAehH7sHUNUaxeFbQ6ePwTXeCazCMpgfFz1RejNqsMEeHhKTZS6hbrZjTpiLkBqDPhM4pE32gRB",
  "key37": "FsfQoC3UUqwXhxUYr42LW93LZEG2kK3dWvNtCQEKDsJF8YPe5q4ySaTGZePpkJeNVBi4NwiHBVAtPZHgdXUsUPF",
  "key38": "4JSgLfmvmEEDN93G3FB4CbSyJ5osbZjuKttuygmrq36Aggm7wWgCKihFvvMmQg9tzi6EmXvd4xKdnQzrvTJDqk7P",
  "key39": "38PtiG79koXpjFahzouBa7zTa7tL6toMFQMofMEuQGC2nJq7Eitd1nAT58wTUbHJmyvHmAhRTNFnJvfPR7irGrqf",
  "key40": "4rQRYArN94WHaR9AtBoBvf2d3G5M1DyrHDtSbMb2PFKJWnrVTwxKPrWXSKsjXppZKoLFDgKqFhA9EEfsQJd8eRSb",
  "key41": "36D5uzAMPbwXu7BLEkRpiHgkDjkF14q7m2xQXBbBCEqb9SUrTNuqVnHBduMpEUvYxkhvcF4f9xfdhswuX7y2Y3be",
  "key42": "3d7yEFx3xpp7YV9SyQUEGLqB6pFdcev8dwgB4xW1B6yRoECw5rCp53snuk2qfYseuGvqGLK2nP9W5V57yr2fNNCL",
  "key43": "2UEhUqamxdi4Tzbd7JNndJn5NSqLcjsTfwXtLHQpKDXCyykQNJD6bkEy6thuMoiwGn6iWrSMnEU62kFDwcZJoaQ5"
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
