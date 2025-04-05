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
    "2raNtJzTfRewyx15V55MRkZnBZt5vUgRBYfMFFkwepi94UHHh1gANrAADK4Q9NUjNhWXzFzkZv79TpyzmMYk7Z4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xoVs9WXZLeEENPKrn1e4Gr9sCCXw5pnTjuBLEo2RtSvLchRBhegt2oEd1mWTg1UZKYos6kEatg2f22eqaJTGdoQ",
  "key1": "59pVVZHE7FDNh49Gaf5FzSe3cZXQYGzkdV9y6PgTXUANvECpYTyXmpskCqjQSqzEAF85kygLyezcMEXqvQ1xaRGL",
  "key2": "4saddYEGnHrVVa81zVp1qFXH1umkcVAc5yfhZHxzDPLkTP7EfzN6Cv6tq9usvqy4nkTvgkwGpZJi2LZonEDz5uUr",
  "key3": "2ETe3hHote81dCgFvSB2LskZnmg8z4RBmCtjwKDMXKhonuLQk7ygEPA54LJ6Bsf9CZWw69arfUYELoXkkSW7bYS",
  "key4": "Wcq1vYVx2UuUVAHMy3Fdw5HymeZDaFcSp4zzmbASuyUj3RnkF3ggciPwAVnzitRzqV69yzkkcRd28RScqY54tHt",
  "key5": "2agNUkp8MyAkQPY4hVHNtni3FSUZrwrAPCaH54bZAvxZHstuPHHGCMkLVBt9iA1r9eayPPN5XWeVzZLBQ9S618Hv",
  "key6": "48uFBkEC2GscXhJU2SRDbuuLc8sMzVPxFdJaDpSaLHxdaLYtdgqwsZicS8pGZVH8533YJrSfkghn8VnoMb6mqWt5",
  "key7": "278utB7YovMsudSQ9HpN2E65GkVuzQpHUFTa8EccckMTn7e6TTgxeDz3NFQviZ4C8TFh7mGMttcQGom5woHE6qR9",
  "key8": "dz6b6DuPEwNR2DiPxzjWaoVNLfNfwG4x4VmiwixDQz7m74MqyhqxeQnJ8ASzQSMiu95DCvvCU5Lc2xEXmY6cUXy",
  "key9": "2DiQ528o9fNPuoXnJZw2GVUbJJ1pgVYpzfdBMx66Ry43LZ5UaQsuh4o1M2GXQgrVmVN4qKUTtQzM9MsmbanRYjwN",
  "key10": "59z6Ge6ihbtNtAzy4rEAM34939sLrX5e24R34HPfxk4gFM9gUjXc7kNpvv68WMvUESi8MTCbv24JQx8ofwQyshgS",
  "key11": "3xKCuYtmFDPihgBigCQBrDVPFbpCWVhBYfcicQ4as6xLGzCaTsg1a3inxcBSYhnNBWrUwNgjwRKUTZbfRCeJD6mT",
  "key12": "4Gg71DeHiLDhe7wQgwUEob5FXYGSUzyErWgeAaf1CkyLcKPPPtS8TNCuUiRhrASNhNB64ByqJ1U5HxF4aFdSiRBf",
  "key13": "3wJpajtRaF88yGqmfFFrAkfG7AoLjyMJ3frEWUzzds6dLSRBFxxLRuHyNJiu96iiEm3tTMjUxpoWKt4kAHTJPqdq",
  "key14": "4Wc8FbrCpfabqUakV1RQWC6xbNTLkXsn39SvgRu3TKBnDZxnHxV7y6iwhNGGdWXPN5CXdSNLimACwhftdNJHox5j",
  "key15": "5prfjYHuLnmBSo2fGW6hkkckTeB6fQ5Qi1wppVSdBTLg5R5fUXTovV37ndgKmtVKAJUs1JaeYV8Q8FMA4wRfKUCC",
  "key16": "5JdLqSHy1dcHUGFPCZkmFs9Apghqkc4EfmsSZanPaWmwHN5dqgU9E8XSy9RoQzrSAtGTu4v3GXJjt9aPtkZjfHrF",
  "key17": "5A1jzP4zGAftG5aj5Tt4ym7WE72wBRnR4UAUw3fM8xMSh3KiyCukvovbhd1ocSwCTrqoyYUdnf7nekzdbw4xWJMw",
  "key18": "T9qshoYY2eZywTazmZeXjkRVWboWRzuXFnQJU7YpuwvbcGroDJoqywtLop9y3mLwieDe2WkFJyjkLR3Dhud7Eku",
  "key19": "3cCwZdd5nujhm3ff6ztd7iCJ4jK1ZzFhB8x9iCbNcLsFxtGmPK9xg6cxc6QH9zDg17i7KNQD3mUkP14Vez73TQ6n",
  "key20": "YEHfMBv8bdTkjfvpoZNePdoXHpgiZybwvZo7uQ7EFrjN8C3H5AngVDG52CsxCGMGYDVXi3WUgphuLZP4tUxuTDF",
  "key21": "5AyhGhN3jVGFxoBQ6mxhLpMP6YHgSyUxx555RHpDWgxHRGWPGPu6tj47qz8nwMrX7WKznzrd3ci637oBK5KUFmyb",
  "key22": "2PNqntLsUPCAccxRM5pGaSNkhqkdKWNzY7mfz3MnpaAnMxugJTz4cgwTNcHzoECJHoVLUjPsCgLznjt9Ci8142oY",
  "key23": "5RhSosmGd65fPRVzPSLGXNRqfxboVaFhsTzUbzMfw8rKfRjckQuB8EmUh4j2W8sRqtGk6rRk38db71MzFicTnVtc",
  "key24": "5B1xmsbvaA8e5xav1BZxE6kcpWc2QX1bEcjQ6yaBqxhnRbxFFUnP5nWz2pJU25iMryjnyeRjAomUfm3iG6b23JxY",
  "key25": "58F2tL3R5nCre6hzhRQ4zedFq5Km7sHA9FHWF7vHVC3mYLGqy1AAeMA7vbhKNbaURvwpjmSabHmCq4rnucv5P3a4",
  "key26": "3emojGwxLG6pMEb8Xf7GrhnLgd1SWnE9XCjPtmtu3XY6nLtV1vTG7AphnC5n57YsADwaMsMVxf1Yrc4rjZ7h7c78",
  "key27": "4NPFY8sqCcgj9hXL8JPN6KzbsRmWugpqxJQpejNQ4L5SyX9cKkSH3XR2FAc4i9ja6yVyRKAPDiH5GWyBD5abQV27",
  "key28": "2sUzSdnSxnhzZMMFm2RReD9KKXEFGAg5Pje4g7sermjMvspzwh5p2rHok7diNTUtwmTHGcbsRsoQW6fowPFg5PeT",
  "key29": "2ZmgWDtbAXoUyEakBVY7h4CLQpuxdLL6oFiKNQyxjfrDFvfZnXCbVocutVVXUJXcbCRv7fKULuH38FWC3pFVY6Kc",
  "key30": "5i7eQYCdWHT46i9rjwhpXnuxJFdewu2NpoV3KizF89rBFhRACMuAykT5TbFqHHfh9GFgnZoVhDcXngBze87jZ7fS",
  "key31": "A4RezmfmpvfWiaMX9k8UeTUUcQ3wn5Mme4eo4XVFwBMVrGznvPc5NvgKzzEJXu392KNBgBm4n5hTrqe6SBcrSaK",
  "key32": "PMAS6Jo5ea7j7C4skpkFjUhHTePx9RH5UjqwmbkiwrKY2EkWqrSBEZQ3SaPQmyJwBsuwDBDUVrxAro7KQBG98qX",
  "key33": "489MdfkMs64Dph94abUFA5iHnXvETd2xTkYejJoffpDA6rz4cJDuHvTsDCzAyFNudDb66XxGGpXwPrzBmRMZ6x8p",
  "key34": "4Sz5YBEdcmBLjjTqem1UxwnRhcZFxEnPRTTU1iERfzBT4PhEpQ4wpzsxpAceNDaz4f7yaTnuj9L26gQzXEWSZwB6",
  "key35": "584kEYWbEpcAwaXpJfmSLGTQMpXpycHs2whfE4E3sHETbVfSewWm3bjxx5kz7x8CD8fkt7wyuhsb9HcwpYiuLQyY",
  "key36": "gbdstH3osQ7s9rbuJVQykeYzq8komhEvfB8KDhJNR4AAHssVE7Yu5cn92kUdSXwF91wWFF7ApYKchCJ4nrVwYsF",
  "key37": "idvM5vge65AXk9Yp5gc1cbrjTwbYTueC8tJ6dJNxPL9FhS7ZcTcdmiPMqCEx1eM5rw2V4dsnpQNkjAPQkEr9oWj",
  "key38": "3BjXusz1A4xEssRCtEDjV6CuPUib5L2kMy8bUTAxPrYzyuN6qUpWGAAcycxxrYo27gt3CknfwLbvPy1uq571ioh7",
  "key39": "4rWHPnN5VbryzmGJa1zpddEDmNidhzhnWLH6BUkZdSCCGfpgytX6xXLpDtJEBw552xmxXh5CNX6GDJgdaft3APGW",
  "key40": "mMxmSdGcU4YCPUk3Lf73xgdtxkwzE3WoQXL2CgHRBEV47jxQW5a6EvNDpU7NuV7kHuxh3UvsHgvEwwFtnRH785n",
  "key41": "2pMhyb9Hs9tBLcsg6Dvr4sLuR93b4b5KRLZat5ckech415Z6q76BrYHoQ6jbDhJ8urbRTCU6ADgpGTCXbxuHMwiT",
  "key42": "g4QgaV3tgQ6NBjwGhA63vXfMRzpJq7kuqiXNJ3BKbXsX74W9S7myJeooQM1pVXbA3mEJhPaGxvYb3373uEnaLur"
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
