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
    "5enEMVJwYWC2P2LmKjfYR8q7vz9gkK89cXPX7DS28KpqSBahkCHpBh9Yb6H7KCSiehvTLcKFb2zJyYtoAQypMKpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkYEDUbXor8WGSiy4M31j17aCfKshbZt7JxoMsLHbqr9ZmPKxv3q3wTc8VxYUQbLxRmq93pDKc2gB1HrUsTMLjo",
  "key1": "5errgXfGydjMYYsdzHrkcL4toatvrpQ9nnU7v2yZRiFWwkaNvckGPHzvBw5junTo43v4ynk3xXHd8xPzwkAGGkNA",
  "key2": "21FRvgbk16day5Vh8WgNxgmt89Jhw6pfF8Yd8bFX38MwbZMbKayWXXXwAfWz4xMqJnhDURU2UCRpL9SbCSex5f29",
  "key3": "44mYxJyrtydiyeMipgdbBfvJe9KuYbCux44CdAE1GGxpsAeUrfjt1srN7yms5XKWegFhnrpZSzvwvPGyLCL1X3qz",
  "key4": "43zhuG7Ces7jH1bbyihMDCQKToUSdVau4naGiHkzRGyjq6mJGumLWFtPBu1iYJyTM3133zTKgY6pARjHG4eb5maK",
  "key5": "RCVH3mB6so7Uc4CUtY56dqBB7oVbWMFoKbck5LMG2NMnUdQVkSCMpxbzYNjPzSwt3Q6ZjLL71zBzWAxFathZbh3",
  "key6": "2PoS3cm2wjCvBc6efaiHNuUMc4FpKJGxCz7f5jbF63YGAtNzNQ3KJWYJ652RVmMxQpghjjJJiJWG3b2G1DeuP5W",
  "key7": "28jL42CxQC7YySuur9Cx3vTEfY24EoHYW9yxrBSbEMdyzWQCRJwjB2VUcUU5VYqRHm2muQNLVHH8VphzFVe2BJEN",
  "key8": "5Z6sCi8QN2y1QqLKijWnjx3v3xypmmMXm6sReMPfBcN733AsdDSAGkJj9tE7EXYSzU2dfVjY8RHocsmxgExhqu1z",
  "key9": "2BrRp7oNSUGBDiQLD7bdYfpr5FWR2meJjdquo8Hk83bgFkw2D3bYSNuufqWrdrZdW6udDcSo5U7x3HMebgY1GzG9",
  "key10": "4mfMxq1Cx4KrTTodPHLXNBdfEWYm5MP5EXF7GUVeSs3EWtk71EfBxK4TPc3wd9MSXK2nUJS5gurKLhG2K1UC6yhU",
  "key11": "3scAxZFmGknCY9M1GqDQL785Vsz9eA8Fso4efVeAD1cuouoi8EnRe9ZPLG4AUUEof545shkFFQRCiRmYDdSUTpLp",
  "key12": "5SVZ6Mjxc4PZbst1oStL2hE3cbXkAqBWgXhHbjk38ZsES6jPZvuw6VovtdDfJRHU9FSMRyL5fkNuNciVkZatUxgp",
  "key13": "4SG6UoythdVjtXUyD5BniSHHsDwLtTJ5FjWrjp8VXWrNKwUzaBxsAKgTdu1wQ8tzsggk2zinsADrKG8mrp756dGH",
  "key14": "kM1qZxoTXXEqQktNwFdqYin1ftyUH7KkYboijDi7MHwcwvaYJsUsxG4BqESMZaHb5WSLc996t3VhKwbeuRLAVqM",
  "key15": "2YF6X3FK8DCBjvDymepzCr2AaLxtN4MLHCeLzUKKBKeUFc4oq8G2VUfktoY7dWmso6XrhjcU3CbERdcqmfYcbBjH",
  "key16": "5nsvkhV3ZQbfDzAndwtriftbFDLM22ws7B44WaEv6wSS1P6gofYscF4f49iC9W5YBhhapW9Dsi7tb1Ript2ascLj",
  "key17": "2Xyjy36vcTyWZhUiXP1Z8EJ2Le4MdAzLcH9kHLASX5VDypGG9V6yTn1HHBinU4CmSckc5iPyRWkjrtsnY7r2EDEW",
  "key18": "4FcUGYvL8jb7j7LWbJZ9rhR5mSifDn462x4XaXVf3g4mCTyGS2VSLcQ5SmDoVijZrjSHRZxdQYx8csXFXVnB99sv",
  "key19": "3KMPY4mTPfgGBoYHUe85kwtqSpnwBjnvFQP738XrbjiCWuw4KBHTU8seP3CR82TAViotUdno8dXJrWWu2i3m4swF",
  "key20": "4Vq8ko4pyTnvxdGn9HnkbE5WWbG3EvLVSzmFVDPgTxigZ3BXTWDcm7wnL34dubkwLWAcyaRc2h43BkKt73qJnRQk",
  "key21": "29Fpweg1PhKMuhoAADnPmjbTRhM2Hs6FCyJGrDHfHF7pTuyK6WDSxgzZFG25Ew9MhzKwqqwhqRhaZrxTnZdjVDpZ",
  "key22": "R7YmPPJXks7MogdjPJr1LsDLvtCZ5LAVYssS4268otepBL24RfZRzfwTavBRCtNGNH6FjDkX9JmeS9FWyNYQEej",
  "key23": "5CnfvWLxjUpWCnZ4B6VqRWx4EZB89uMsXru5KL48x53MjYVbXAR8UAYjvaMnWD6Bpw2ofGHFM76dRev1oygnLFjm",
  "key24": "4zgHiQfHvXw4CsLDgsBhVEnDaWYUsauJJy7AXS3degAKz87DeuB65daRPDJPWVgZ7BQyoWsxJkYF5R6k9Duzezrc",
  "key25": "28irBQfdajABmgEfhUMKGgY2m3gQML4v7cEnwCKvN2TGJ2tgq2rA3raiCtSEM7KjYA2qvxi8aXJ1Gv3Z2N4kK5kX",
  "key26": "2Bo9R7PpPmchqmMzkGPTfCq4yQ4gXYY9V1iwpRkCiiF22o3HQ6YVuke9j6MdQB3uv6CDfb8KX3UjNcQgn4yznP3S",
  "key27": "2iV2AHChyTXh4oDcduBDgvLQ8pZ6eLZmefRRYKVHFnuMQnQ6hPTNgVmyAUXUoAuNhew6nk4q5DuDbTZhyDoN22ix",
  "key28": "4NqxEtg1NevZjW6gPahrYsN7UB4nXBCqmfRgDzCyHQTYpN86iEyoLa61M7vzJjaLsZH7mt5cE7ifcWd9WWfpEVto",
  "key29": "5QGMqHLTmi2Xop3zJ9AyTjLWDuWa6wJVkumoxWWPoyosGBnSUaqe15keHSKwdiQYoJvhbkuKggBdtdzzZWNqHRq",
  "key30": "4F7LA6YTbBksUTafkhzrk7YDnAqXz98jV54JkutDkPh3mT2gVRSgpS6vW7pj85uvBQSnPaarWh4dQSQ4rfH8ycSX",
  "key31": "dZ1KMGNd1B6DUxUrPoZAiHKPEG8iQ3ta9sNQY5bfVu4NepAd349tKGXErVJQNAngwoiqcQr2arvmWKaNzR9z3FH",
  "key32": "2sr2WYoRx7eYbubYnizDCR9RozmGUhzubTeGjsXuF9xJAUUTomK9H9tBip3fH6KiaTbAuqwNSfnhKHPj2wKg5Ce8",
  "key33": "5LPjEbGxeYwXQ4KCXdaRkd4ftqx7KBVszTtoSSDbanangJAPeHA233uFErqTwywU99NpsRXMcC1QTNUZK1AVyLW1",
  "key34": "4DkoxLkaRveUs3ALpaLKPvgUrVBNZ9sZZNSReqEWTDpPFCCti3aQopHSdMRXbD2bQmT72nhPsQTvteuMQ1A6tTje",
  "key35": "4VTcMtfw9Hiq5zV1uV6ufXUoKPgStbxDCRfQN9LeMAPPdedMvW2vgwRU2imvJshbncWcv5fGgXnrLfzdXA6FWcN4",
  "key36": "4D5qxiApVy7BrrPJrHdjzutfosE4QW8vvp8APZVFR7VQRzZ5mh5gnm6GGBcT5Aqhckj8yR6Jydsy8cHzCkai56GE",
  "key37": "2a5yggRhi7vaP8YdJPdFRbuq4qspaC9rRKiXSfSgJk2iYrkrf9kdYi3iP1kF9s56SX5qHe7CKPsSz4ozSqsqQhQD",
  "key38": "3Rt7DsSnnsk7z7gf58WXoaHwFkuQwCssuqV3SKzSVs9yFYajxwuDfZxaabqvHm1WHDw456XimkMxwhynhNh75yaW",
  "key39": "4DKuH8SzxaeMgcwaqaryGdkgaPoGdC39orEsXneMerP3N1bU2Y2oTnjDPn37o1vzUW9CUUFn7Sc2uaPiWsMA5dSS",
  "key40": "5Wx3BWFiUADLYXR1HxYNJ9qGPywYBQs3EGbBJQVJc7Kpj7PcgkrVATX8XTrLky6FtwTtxFEpfoyCXRwXnBhR1ChS",
  "key41": "5qE8tGSztp8pUs3YMqTxKQd3aJfhx5mixjC5ZjpPFuvi5WCxALEH8AscZ8epMkTSXZ5qQFyPwU9YNnYgxnmN3F73",
  "key42": "mW3FbUWr3mkVd1vxqsfjHtQyTboJQeYgFVaZzy2i3KBsaPhCzvEsF38mRhpx4cgWYg63dm3eKm8nSvywxXYxJUm",
  "key43": "27zgb7D6yLiDM42ysrXbv3BmJs1vueRmjyA4sinxoNpcoc5hvzQrvgsHHVXLtShVd3Gsn22qLuDdee84CaQA7BbT",
  "key44": "2GaWWapp9ZwnFuARMMsvr6ahwLeJwZJ3vHTg3msMN4ifpgJku48tcE6Sc6Cn4xWRXv6eWRFLBmXLWWgvZimQbMKg",
  "key45": "gqn86RjPC8ovsEFV5ebtTjuBVRPh1dUa2EQNdgXPQF5TPnG65cLhviN3TQcpYfcG7NvSqBCnp6FKgJpHbjvhSBQ",
  "key46": "63efY3aQ7H3gr1zs9zb9qbuWbbSbd4U6JGXfTBrfdTiL1nDcYvffqYGx8HNddyNC9xztZim9DuZy8EBFctJuc6Wp",
  "key47": "4VCVt3XJorTUKVZY6Cu7FaGHSWnhvrn8f2CTAWcJnAGr72hTaYbLA8BKU1uh3XBCqiNfo4JtzEUU9AGpzScz1HpF"
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
