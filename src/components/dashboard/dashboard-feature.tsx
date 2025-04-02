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
    "3txE44a1qRRH5GkcNcxPvCf7oNSxWc8q1jS9uFHnSbnKjzjtuu9SxMyVZX8aiBi77feb2tLBr432rTQtpGYKuTuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34c6Y9BUHxE4BJfSkDU24m2r1d3rZV6fPLhPviUCWmpYxC1y4NbNizVLZjLehVBhgM6tAxfQeB3exAeZUNi259s3",
  "key1": "3daYWTp2n4cScSkD7jjkUaXwWDb6XACAqyPYHxf8zPiqk8aJuEnedbo3dorP4qekxhQ4WBpEraSqurFcPUf5DyXr",
  "key2": "5gK2ueafKZsYXZ4KFvfUiAa7pJxryNLc2fsDRGu6khzav2Q5DptyNiahF9ZxYEwtvew8htAJX8vVFzLgRgErjGCB",
  "key3": "656pdpzcsQ8BYacZAa743Co8bmCDUfr68w2WKgzxitW1Ppo5sqqHVzM32uCemz22WYKq9r3iNqPwJC8dzK63x9xz",
  "key4": "4Hez8c93ST9tHnzYkTBQNsmU2Z9pvReAXTzHNAxPF3tGXaitMMkfP66wAmR3rFSDHTuLj9WDxFR9tmSfuUgyShwS",
  "key5": "2BqLcSULaHhfHCErLxdgFZWT2ZPtuiJf2mP8ADKUFSSHhiDw1BHCNYCCtQywuTexsGcvcsftsvAMbBdUcAQpBrAB",
  "key6": "EKiVUaCDEMcbfs9mxbMsPbd6cX6zWQY5jDXfqnVgMYYmtvju7yCBwkmhFNpAM9AnAMkMtanSqZrFbMNr4cKF1Gg",
  "key7": "TEGpgnFdGnPgzqekwzWTdrFurok3P6qYfzFD86NyBStosxEiPm9aqbZqDTLwvv9GCq3oGSzYsK12uFY5fw7hiTR",
  "key8": "5J8c4mh5o4e4LWUmPkirB7XHutwcKGsCdE5dpZXvrrbJdXmvUeJ224S6Q4YVmnobQXoJDJToGTmM1Wm9xCJmaFLo",
  "key9": "37UNgXWVXPo97kp7d6ERXXGt8id6BzhSNdP5ZHTJqtXKux5St7AD1peBSZLVzSBQqGNji6iHESHwA2RdFtfQYZPT",
  "key10": "4iy7Ai67nzq2kfU1WPedcNtv1FXvUshHrAoxCTtGA4Rsc34eHUj25hK7Uj9rGkcxcDPc9wQTgxKGZxf9ugrkegES",
  "key11": "58xNKrHV9fwCgptaA6k7bjofKuofUXoj5tEwgxCW7zMZWMUa6kwip5gGF7xgbTj5Rd756Z5F8ZrTnRRFC4nN134S",
  "key12": "4wgmd8nycoCit4BjnYrypwXzohoCg3MBxYdx2FmEuqW1nvkCmmUGLw9cTvAPr1Q8ybYxPu8rhxg9m6wreL83AkLv",
  "key13": "3Rvr8c3y2a9enz1sZUsc7ELRKs9AMiKCmsGvvxzaEU2KnbJX5iJDhr7os7k3NLxNzdJXLLXDosDSJ4Bf1bTYG2JN",
  "key14": "275PDbwDF8BkyKnMHYMzSzWUWnw5MbpUbHi5obwajkSXiEbZJaDvTEp9GTe2hf1agHUvjQhXoceS5jGo23hZuWas",
  "key15": "grRwRk8ZuFNc4NuGGR3ehjzxZY5UQh2fjC9C2UXLK4obgLPaZJNH2xRf3tjwQfJMF5XK7AqxtwAmLsAk8V4JUXv",
  "key16": "3sc2vjttr2GKoUg3fqS8T8P1jAyTCH46NBCGBA8DhGsNJPqboqLygQNmV8YyjrQ5mnMthL81cg4kmSwpgN1qYeq3",
  "key17": "AiXkqvWLTBuHj8PuegEaU3XcEh47nrzduKkuq1ACMiK3SYzBtyFrDYrzXJZA9Zkk4aJLRBEfUGpFJMVfDsFsaFd",
  "key18": "4HJMAjuXPRDLzYhuMLpkxBKsrGyXVHSWXdhdm5pAohYPj9DWbEXGa4BaDyLZqpc81Lfsad6aBqSQ87HP2W9qjkQp",
  "key19": "5mJnZRohr6mmbW7virPv5mfueBydP1UhytwrkCwVqw8CBW7v8qvjbHdGhBdGoeJ4JMimup4U8BrNxMx5q2VLDrjC",
  "key20": "3jvLRemXZRY9myDoVd9GdqvoqFBjKyuXftdrofGAiovVBFiKNAYCUhCvN7ps6tbhWDWBfoq295THNYZVy97RnqAS",
  "key21": "VrDAYan5yAg55FGhD9mDwo3mx5786uFx7C3NicDDABoo9UdYdaKiLCRx5zR2mpikSuyDb4ZTDdtg4bM8hTTbiVJ",
  "key22": "2gYiWFskho6CA9WxD5A3Py9gkmBJPvvSp9dBrPfdiupA4vDstWdfTBJQj8gFDCDGrMg8hrZsLifeTpS4eRUYDVjz",
  "key23": "ni8dER5bUSjgNVXRv9Kggjr6EiLYyNxYve4Z1FkjYBZaXpfizJ1zpmuQ74Y7RkT4FsAZJahwfDgArj5qj3zRtBt",
  "key24": "w92iC1PWok2BJNBH1w6XZUQxhdmWhNtdCsGeppFt2GY27NQ7kWwgKc5j4Dbzs54CmNEHXxdG4pBsxTnjFrPnDPB",
  "key25": "2yyS24vZMJDk362jsgHmKXoi5KGNsywVw381grKCG74Hw4GvSHRbE48Qj1bdEwpFHSCeXhPAHfL2NJ7ws8RC6sjH",
  "key26": "2xrBFXSxNm7YDuLddwu7XUSFV6E4PiazouqvHFZxGTKXhVdjrf4eBp2nTZ3wWWnBKBd1CGb7a4SXMZfwcdJXtQaT",
  "key27": "5kLhtbWammVxhaJRxQ6tPC57ww8MLtQn9RTYErVUzfGC81Bm2pDavaYQAKXucWiysH3MZtvd3sxVGNSN7CnAM2T",
  "key28": "3i5EuCUYH8ecYWwfovrmBzUpkhATpzcgkcwz33Cbhoe2DPfcH4NrrShrnvXh1wPxSpf8Kft3Pmn2JpQqFZ1XHSHf",
  "key29": "41hJqLXAAJJkXCeZSuWPMoJswf6VrjznfaibQjsp4qbvaDeBcvxzPNkdhJpzmvSguRh3c2HZBnysMmZZRJiJVN9",
  "key30": "4nJ8uuUBhfopKQGkZndXwyiu7t5jCqgUvBzmJMMcPNdWhMVTnearm88VF3GGM7trXKHdtbWJPmXGoMt8pKUX7fS6",
  "key31": "3yfNBCHKmN8N4RpqUUQmukFdK4juV8dWk6huKHQdFYvKALrJ8tW6B7tVhcan4JVvUqZDRwgLwbEiUccLji6peVnv"
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
