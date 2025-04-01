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
    "Y1AwNk24r5c6T2tA7K2pX5tMJueAmUjKwA2ZRadXisgUDuRMzTGdyjnymhrfpQBWEcy9dH5CK6iaFfAGK3hL8Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GKFgHJUR4GU6E6y7RcaLRFeBBfnN2Q3pqdupnr76fHQeFVZdKMqM8QNQv6UaurPbxDDZYTKTDGTL1MtcsjGvPH",
  "key1": "53s8ZHRedar5r2E455cmg4KneNSSJfBx68EquxzZDHWjy2QvaUsXDafgdh3V3uTf5dkAi75vX6VEFqanNrzuDT1B",
  "key2": "3GmzmN9v4sussaRrdPqUWrPoF85QWbdHh3JjZiBLHHCLTyUXYpM7ygXhrEBnvLJXvHto94P9qUUU5gz1iJ2njpp5",
  "key3": "5mUZKAkfrXA1GhJ6yQsk2hUCHKd4Aptg8gFYiCRqWzXPo2V6uzjtqZ3DQkk1GKDZXPA2AkAkCHwKbuwk3Nrqw8U2",
  "key4": "53YVTgcoV7fYPcJoYm1hWhPbDH8iyVZitKfNwAfz7xvxmWuSYzki6qtUrihBeGG49Xf7xRdbC25cZaDGXEy4CR9v",
  "key5": "jUsqYroeQCS1m9FgGLqcRgGFcK6UgLekQ8Ayfq5xVeGbqc4J8GVka3z33imEnU5sfPsyCWm5CiWW9xxLeHhA5ip",
  "key6": "5dVxnpQtKFMS5XHMGCpZepB1ufCqTbTUWncZ4PXrqog1Tyv6C2C1B8wSNqCdgomySBYwJ3F4sxje6XoXPZFuFV3n",
  "key7": "4EbgFeEktG9hWN2SA3nXWRZGfU5h8Y3ctuzEnrGhQCApHMp4bAz7re1NvErMTEdDxtrDTcBpEptZwZysHyrB6RRb",
  "key8": "2T3gApuBpYKD1TrQDmikEh7h9s2yXoniCeQ6SxMvCenpuK496p4cTx3kAEvSPBDcAPa5bhG34nxMnvzdyh8pusA2",
  "key9": "VcJuNK7ebMjRHaWdUQZYnSfyv7z7uuLnw9DiCgrrfDrHizXgRKqyVbzkwbiCK1fb9H4vPEETmz13MDEXKT9zyAc",
  "key10": "3tmUcEVxygtD8ZSrQ9JJXVpMKut2T515BEVPygEb2tFYAKqDoGBWK8CdrXt3pZEXUjBKpkYgSm9f1b5vPeQBjT4",
  "key11": "3qQdWPA3KjEfjDX466Va8vX9c4WCouutYrQTeCEx38wnCcCQYFbheTiz9MHoVWhnbsxc3WTeh6HYd7357u3k9UR1",
  "key12": "4YErn1QzM1ELTyipTuifZehMC99JMfy1EbGFmZPd42TJvEjd2Mogf79WLLKZu31aYco7gitBw7AbbUZ32NGdMirF",
  "key13": "128nkwSy1hAiFLqBS4shwwPiHxnioi9VUPhst3hKneBUxPoqQ2hgHSmSfkHbDjA4wKpYBka2zn2bWxNKwu9u4uzd",
  "key14": "3QPSxDjr6qdEqJQLLnRsTaqTjczMMhwzRRzT9TCRN8kni6GsXfV7qgREDHy8vC79LjAQrRQMo7xR7rMN1M8QdF9U",
  "key15": "TzwfBdjuPtmWuh9pPZVNNV8ZSxG1WHPqJqKcQGZhx31iTZFU8recH4RDH7PYR5EbTG6d6yvccsi7MC23yNDuVXe",
  "key16": "TuYwUodZveCWCp8b8SwXW3St3Us9d85r6PN2Yhre71MdXUmiFPTSFRYyGxibR92YndVujtuYu3yzeBrFTtmGd5n",
  "key17": "3aKqSAMv2fUuKMP7rsJLHwHpWjndgVFYskJiWK6m8pqdnqK9bm5pWQ64rmpq4eXABC8o7xE34Y6eU5mPi3NvAWb2",
  "key18": "5FpovU4iQQ2WNadQtYx1wUYigjNTQZaSkTJpGPPng2fsRGW9kBkTJAsY2wtbqnVpUR6bR2g4bHbPH7nW2qtbiX1b",
  "key19": "mzbAAziijzctGJtRUcDB3rXV5DgvkV2JDQGd4J6epJ9yqwLv5xTr7HnTmVU4YpLgpH5ARDzyh4r4o8V71abBerz",
  "key20": "5dmV5irderEvCBJsdFuAQ2stVRxDDpLSjP7y7bWoFYCuJHzjTZWWbzYn7jpph8Qo6MbrEf6DsNWqdwd54caTZnBn",
  "key21": "21BM5TM8CZpWpabF9BMPoLKmKJ4ypMjxBMtyuZcCPZFfJQU5zoLtyZvaHpeC8gVaBHurVJnqtXpjreJmGT9SZj2A",
  "key22": "231BwhhZmSx12xdiZYsExeZZvNfzUBpo6hyX5BJPxTXyaSR9sYp2xqCcjXcWigqN4qC34aRUzLeqMJftuNRpTETr",
  "key23": "4LuhCJWP2tSH5jLJQSfZmB69XketkBZF6Yn7ArCNtur1YoqQpPcUfNn7GnauGnyGnpkoDUeEw3AfWvmy5oCuD33K",
  "key24": "3xbFbRD6dpmJPJZZefDyKgWxmQy5cYoHAX3RV4efap55E1QXeWj7NesbNCuxkJ2xMBuYw8E7kx2KWPeDCPjeF2nh",
  "key25": "5SpJwKsGisZmCR4XEYDcswA4x6i6zM3H5Q3o3WT3riTZUjcKWK2yyBNhqeR8bd5qgiAaGFb4wDjgXGJ73WNDxu9q",
  "key26": "2mQxKSxNiD2as8HdEiVbvbqLZ76dPRw4rRcZJvo7QDvdHcLnboL55TXNwYeGpZ5AwFDZaW7uUUJBGDZyd1sR5b5V",
  "key27": "2WYafqsFrcCXtUWyyFi2v6nL3JTqWnUXWpfu24o3oQqcz9Cgo9xBPcmfqaDcV1CZVfAPw827RMiDoRGPcSLzaf11",
  "key28": "2ELbzGSe8ZcPjpXTJY5wiUmK1qSP71VZY16jc8MhMrgrHJnmCatdhmwW7TFWN9JZc7fxjGcbu4DnzXHdETRUmAHH",
  "key29": "3CQGAsXHa3urvHaGJyTm3BaNbzNEFMQWUeYptNxTTTGR6kNgHYzSZWCxJJ1UXzUkg6xSWGTZkqiGJtyrPHj5GwdX",
  "key30": "27Hamakj6pRgaDpBqXwRAef5gpdLPXkk4Jcw1NtX6i4CML6B2ySdmMQD6eexsgczotbtxc7SUkkuagLneiXst4Qb",
  "key31": "4KGgUUMj5Y7zA7jB3BuamNm8KCfRVrVqUuo6VxpejCcon26GPYvT7DWT1ZMugeWz6chVoH28RKsPuH5vcExAUtX9",
  "key32": "5xfGPuuP3jRoc1qfSLx9fbxmpKNspPRjkLpsfvNqxgdA5skCbVJfnvfMpB1BCVkH7331KNJFd8Zt1j2oimPaUHeq",
  "key33": "2TvWrxxsguygDbHSoZpN73JfihDJpbbcsL5bCUc2wiVyScSvN6mjdYHYa7hGASUrB5Rytq4Au73rSaTkUsCoxzog",
  "key34": "3VqV2nowSf4eP2S5bcVsjfDaGdme4jBtcZJy8B85p9mAwDxXEmk32RfYxj7CCEDQHAnXaRLbqaWDosLTmXi88fLU",
  "key35": "vpB9sbNPKJFbS2AXBh39hwUibnQDwLEUrsWw7JVprFSuzBBBTibhfAyJxvWrfUwF5gvyi8J731R8kN5GaKWwPz2",
  "key36": "5ijXMtDZ5FG99ubfyuYDyBCU86jDmjJvnd5bdggBTQ8uEKYc2rJnqCEqjyerwN4WitYBKatxDhoKWJqGYEUsa22C",
  "key37": "3G3MP2Hro1Czx8arEp2Fi3SPoYhgarQ2avR3ibqd96x5tba5zgZvfgqx6ZZxRXb4MyTZfvYGmcUxLoXLa3EUgwDT",
  "key38": "5EUrL26ghJXTfyUVs8nNV5MKei9oom6Z1PVcoWePBbagfbJvtUZERSu7tDcDtQVdbHRcFfVAomT84zLYBjrhfuLq",
  "key39": "LTnjTh1dAMULU1vnk4k1Usqd9CvxUU6yFthCe9R6LPYtvuK3hqbAPkQJts3YP2hsCzcJDR36n7FwRpzCkvjXHyL",
  "key40": "25AAVqXTearruK1USMmBrthsH2EZcTD1sDugxSEyx2zJkbnmx6f7dzTTrASquEsphxDtKJuT56Qe11Rn9471ywiU",
  "key41": "gZomdtckwYExquwmTdWwN1JKpihbBGhQFc8ES4XhwK7FwrFeRLkbng7y4tXVztwXdpBuvFqE3YsrSL8GUJ9am5z",
  "key42": "3zNDXs6FL7r1jodxEZrjGT9nUnuQU6VZFSjHYZX8miUn9LSbVtahp7wWHEPYGuLDF1x5SrqiKTooyi2sDDAE4FFD",
  "key43": "4EQ9kwtFE5YKt5oWNnLcGAfk1bU4Zb52N2bbqTEAkyHKiApCafTYJgZgPKNYzJYw15WYMxjQQ7WS8LyKsHMx1eWW",
  "key44": "3tgVkXKzn6QtdVz4rZK44ygwsLV8GUAnquEFLwkb6aSjTtSdAn8w83BUNJdvv7tmifnstqFJajQrLocRzs4wwbXN"
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
