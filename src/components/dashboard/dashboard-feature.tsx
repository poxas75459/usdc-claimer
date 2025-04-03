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
    "44TiFsGSApXE55q36ToGvGSYpGqZ3P9YpZuE79dWDRYWrgzGciXvfpKkBoCtP7Dj7YC5CP1pP7Fdo8SeRJgYumQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPDe71g1VUHV1r3U5PSMLn5ChSUoLa9C85LFMe29E1gHGPaTAmqP6W3vS315s9wY6SsX2f9ccgW4Dg2cFTWYU8o",
  "key1": "eW6tdPWLkahQDPfNNBtv2nkRMznnWYeNczDYAgFDJqCUPW37euM4A7AUFrLDANx63zvu5Vfnq3VwAwKAnJx1UvA",
  "key2": "3fJ75tkW6YLwpgU2iNANDfnqZ6d1FctgYPckES6rTXESSSEeEWJm3WDFAMd4ZD1UJapPf6gEB3ksNvjqNB5xFzrg",
  "key3": "4igMDduQDRM7vW9Hnb6qZS9NnDEyFUVDJUey5vXXPQ18K5rUZsRyZgDYwY6uf6x61qKmjjt8nkZ2Bu8XvYEiPWJk",
  "key4": "3MSYdnoPQFvvudDKSQpgQAB6gY1zsi6teaJUbSBEWVb17qYP64zGBTsozjCsgSuYUMr6M5PTL5eehfysXLR7wbYn",
  "key5": "2rffpsnfYZoDXvftHEdxZGgKnWm1UnhBEAMD795KKKiRXoCR7zLsyth3DQpciQEpf3WdDgJtBfkWaZsaBKJsKYtK",
  "key6": "2dg2fCfjFetcVqDQ13fci1hUKZSNBLYDqropVCewUcPgTTegXLpjjGbULgBMLMGd1oDPYrCig4os8w4D8k2aRuVJ",
  "key7": "2X6T5uuLugiEsGRD1bRb5nyT5P7zLaLCN2UZVKgdooVTSrPY1DEMttZQg3EPAJgHHnZJd5MKuggCNj2Q9EVBnN62",
  "key8": "bE6hQ8xvw5mZoov3VawgoWYp1GHgMqyDT87JUtNMMc48fSvLCByXrtcN2yoNFmPcxUaqZeHdJDoBFeWE91EdzPu",
  "key9": "c7VYrymLYWq8vdavdQzXmQRuuFGFF1PEYDPMgwPkmAnGSDbC5M9oyrnYTYBRwLCgQmtByegVjauAnbo8SvcpQia",
  "key10": "2na39pHw2rizdaoB7o5d7vrbtZgrE7gdBdxXReTK5uZRJXaSDMz6weUYP1v3ja8ppNyFJBvY2ANxDzQJu2aY44of",
  "key11": "4o326PiRbP3qojBUAKXkbe3p3ZmhnvQATTKVYNtkTQVhUSWTzbidtvD8PgTLp3vYBeGiAbGhG1MYEBVJ68PuUqiQ",
  "key12": "9sQhWpk8YJVJXnx9VxhsuT5yTeMfQJhMtp3ef7cCYcPt3AquewemqcoVEc5j1msmxKXnUHYnPFSDDGAL6EaYFGD",
  "key13": "4qeSiecFeMtCBJwxZNs7ds78Za7FrWLuSu26s1jxE5bySCRedKDGze7UJ8SMRxbdX3PCiHyEf1vKyc13MGLmF6Qf",
  "key14": "2qAm1R13WrW1mogpFrTHwMt8xbVNWSuxc9igypUmZDnqTXEVEjmmmPAnkazVH2R4nGp8aBpJ59v94K4yi511FBoa",
  "key15": "62DEWmKPWGMSv3dKpkb1zgc4MG7Vd6MpPJeqgznhM4cZvEQZ5nikSxbfZLNHyGHRAsoxA38H4UMCduDvYxtiaer2",
  "key16": "5qm6wmMw5c6DfEcKnTvrkcTYhZk6aDuLr2Tekfd2sNmkStig9jSqA4ytpjygzWZEJQKnYMwBUkJoosZ5rPtjLMtD",
  "key17": "3iquHCVd1cfau6mpUh1dreKWYRRxYYtBFPtE3uvkd6m3ELgHAfF6iG66CS4wdVAimLGj2UucMQYGKWZT3gjCZ9i3",
  "key18": "3b6AoKWYbMVPUP2HreZAhZtj1HtEtURGgGmtKLCwZ2itMYufVQbGLRbratxsCcVDLv4rkYSqLS5qUqwdNXerjbRa",
  "key19": "fJRwYhaDQWa95U75etNeGXrkfeaWcT4ccsCz4N1KoUGMGZ4AYMNi2P5nwGH1wKf6QvWjpY59tz2phJwfEsKu8Sf",
  "key20": "4rM9WXDgv7svyAq4Eisn3JQ9Wd28Y196Ng3BsfzN1uBbJnKZe4LsV1YezKScDw2TAwThLgHd1fs9vkQxBSESzsfq",
  "key21": "2H8oC3gHHvS5WTz1X132SeW6LidwK8F1rg8kHs4RtBf6mkDiq4K5LTsSdprXoTzteNPbnzpC7AKJ85TXPmFF52oR",
  "key22": "4BwGW6xNGeWqmLU8LeyzKEBhPEezSadpT9ZxZ5NLeVRAyNDvLF9f2M9HyaWJGWbWj4g4GJArZbkRK1LG6ChGAdX",
  "key23": "3pMgtDFV4LvLH8JSaVHaKLgFy22cXpHGbfWNdQ38tQGw8rvrwDfZuMT3Wr1WEXFEfd2yAK7YMK9LHmmG9u6JYeSb",
  "key24": "5nYkyDiLDjcH6nY2jFLZUuSJpuWJbyPu1Z9T9tk6A36soNQoBefaJCF5Josc3ZJKXTKGgszvT7UoomeziKabpagS",
  "key25": "3t5mvoE3WCKjurXEWYcuvhxn7vQs8hyiwHzgsGZMisC3XGWrUEmHn4F49xFS9MXegqvjHS7WKiGcK6QK8rcTtsn1",
  "key26": "37RQs1JVn9rfqr6NxiFbRjtpdGWhJYFn1F1uGyfystRAk14pm22rEJXGRCrbiHD26eZc8bYiNReA32m2u2NZBLiw",
  "key27": "24on9Szpyb6F6SLDs4xhrQQQEpzN3kq6vRFUiCspQJRjNJWCZ6w35rTbgPXw9btvyDQgULzqDouyumTce3SSvYpw",
  "key28": "2wrUJx2WCQJz6mrjDnmxqvaTgvZBnyAHM5KBAmVwLJKvaWC5XwYvxQkivokakWnV7GXTqQi8DtmWcVtGCNzsyfKf",
  "key29": "55XAFBNr9Hg6YTNtZjrv6x71fjHHESe5z6F5NAhEJnv4HqqPWzUcECnkhpthv1uFDt4WY36kQ6dvgdAPoB7uCDvS",
  "key30": "5LXJpyfkTZ4eKUb6Hi7DXbddemMAJpBLtwtch31gnm4jG7csFSzoet6R3YsgTkcvd3L1gQ7oBosymJfp4cxQFohr",
  "key31": "2S2BcKXTDBZSC6WFXeY2URn75xdoEo7L3nrxoJQwhLS2fX92VyALsikWZE7FB2HFrht35nYiUxqqAP6TX46tH3FL",
  "key32": "5HN1dZsiXNLqaF87AvGmUBAnB4rUkXRBCeKbD4imcth398NWm4LkgNReu8LrLpCmHVkMmcqq16BuSPd5QCJ76iiB",
  "key33": "5Ze6m8mFiAZdYQEVLxrcV7Wf6PyLto1jwh95pxooDq3AQeRtt8DqrBvgrPHsDvcXxeyUtMGyZpsSZMox9WgkjJum",
  "key34": "5spYMkzENao5csdAZpiHtGtqjB9Lfdbk9P2yCzqT2xKvdoTPsYa2t3Y6Utk68ABRucHTD4FXraDvL2pWNZFKpreE",
  "key35": "AmTjsLYmm6hK2kkYoEcsgxnUn8HJJH5pF8FX9c4AXRQkmf9CjT7aqT7pNKuNkRXwKwSWT58e3Va1eoFHGjbqfPP",
  "key36": "4x5auUJ9uKxA2pH4WY3P49KKiYQWphQibBNVrqdmGBtyhrKd76p7THhJZNoRA8J9GPpKbqPcg2U3o7QWL35VRfEY",
  "key37": "2ZFBo56zNrV7uWGjUeEvt2QCwdqTXVhGJ41KcPfNoKTqUSbgkefut5YKRk6fMkZGjBHJBUCisfdgKW3HGdEcoB9H",
  "key38": "56HYMrxJ4eaPKkzGnb33BAcBidK7WRmvbo2Jw4ADtpKhZXNPMBpj4iejHXfAE3FeT99gQTBTBDKcVTQEsRxYSvXZ",
  "key39": "63PN5AFRuLa6jSab6fvWPk3DbaHJKsafKiK8XP3V9DoZojZqfLVSy4JUHUwbjfMfhiC8DdwcW6oijJbHNtBFXFBS",
  "key40": "2UhSjS2WNdTTVQbFJELXo25bVc5Ydf2odsxVnDb7ZbcRiVjwDHhLcPrd9zX4TWpahePxpyWn325SfyrLk8KgEacC",
  "key41": "42yUF8ytqCXc3nvjdQ4pneqoJuzYmTBUxHiYHkUNvo6nfVTwYUQPTGeq2Q2Ghjmu8XM7Bozg9KksARtqpu2fnC2V",
  "key42": "5GyfMi5Vhhef1GxJ8XoxMZNJkWE897hLLbqqznYQy9YKu4A3KM9EELG9HzEofPTXSnfrAf8Kz8hdHuun5fZpJTkS",
  "key43": "5C5VvTS737iZvL6yxr6gBKZrt6ryFYGdXne5q4RWekvosUapzAL5Fg1KGdQndhbHNcejFbcG5F2z4XUmXtgJnyyf"
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
