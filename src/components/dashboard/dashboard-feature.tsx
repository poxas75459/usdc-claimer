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
    "2q4MvLph6dcX3YLyNgBF1KSVTz7cQke5FkY5ceP2zgCgTmaokP6EeG5HiSmGokePytHnT6wCZbhunuSF3nhQprrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DtwCdTEwprEm539tkN5v8Dkr9pRLGiKx9MF78W4DJ1B7r9fSQVXSKuZ2AswUxz9wQVbayzggVGU6ck5DFyW9yi",
  "key1": "2nCBtjdLCvA3C7WZ9v8Ep7AJBzrETauH831S16nMpM5op3DJw6X7nFXzCgSJ1tzwyjVrszVeUP1NzzbUY4k5dQQL",
  "key2": "r96HbFLfrEJnEY4ssKiLihaF3dmaSqWsRh1HPjQmPifSsaHi9N2KYqvjVb16iVNnZDDniQwVwg1DBGDpQKyang1",
  "key3": "4tV87VBwuPfhyftJYiKxGU26xtwEr8539XyP6kKctWq92XwSmugzkcHexeLLqPL81wJ58i4jFtivQ63QpSmeK5iq",
  "key4": "4qzCmqWaF5WqSjPisvz3zvSPqDriAg1drvjUGkSYYfZ78ysEji9Bu82cWF3ttHoBVnJRTd47k8uSc2uXJLQGGWNH",
  "key5": "46A5A8FDo7P4D4LAtXLYCYaTfojsL9XgzaNG6PkFY6fYvWVDFVFBrWMoDL3WbaX1fhDbRqbo64mucogiTUwJVhmr",
  "key6": "2Mk386qm3stn34hwWh82uY2qn9xs62tjAhuk9xuc2npEuSfR8dq7y33L1RLx1JcEWJZ8gzMXv6ywRtXXSQMWTqq6",
  "key7": "mZpDRzKsvHnuspnhFpHNzibcEYp6RkTwEuZcjETE1eV2wXNGKVJUXayPUssXyc1XZDje9hKzR5SP1tZVpzYPv1n",
  "key8": "unE3ruteKoeQcvp1zibWB6C6RJwgzE5EBfVNrkhoVfk3K1y1zqbZ4w1uLFhdndT81nysGD8My6gt9ZyGMAyZT9X",
  "key9": "hfqV8ZWZxYpDzhPMPqMjDW2LcjmANfPe4ovYpBBQdKN7Ahd7R8n2isrKzhMHL5jJjJXkCKa3trrrvPw27mi9Sur",
  "key10": "QC2R6125JvX8tVBbM5zJWYJnB9AA5uFuJwpTnySf4eJWoLA8hwD4ayBzkRCcNcp8owLah7p6sHuP6XhUYRiRPJd",
  "key11": "2q9toRpnmKQ3skbws7rEyRPoAnfhUWUJkobssMcEk4kfTmvbpv9iwt28hoc5UqKt57WVe5ng64xNUZKHK9UNNF8c",
  "key12": "67NrQvF7CWp56fBPCr8Bjy3xLodMmiC9WZfqwLy1uii9zVXapdtv8BGGZSoRiqXK9Yjk7HxyF2w4jsgf5sawJtzk",
  "key13": "3PmAndJ6yEBApEZdkQNsaATiFrBN4fneMXfcn7fbxKq1ypbe5w6up282VpDtfHzbE492UvmZYKct7j79EDJimKyS",
  "key14": "21nisfbdD7cnXxxoJNqEAkoMtnHpL3gzYzp2CiJG6D9hXqzzqvmiGPz3achY2psvMqhqQ9dkrPus2DwBfzcpyJaY",
  "key15": "2bcusDv3YSFSj8kseXRbhKGDrLSDDJfYUJNMPJK4fSCQVuiHAYyK4eYR2niLZF8Y4gJcsNGCC4ymFMgsCwff9nwK",
  "key16": "2eVYe8kTtiQgEhNKQvCg6ywQ2GvHBMPEfM9sfr4BiU8tm8b26JS7F29eg8yN9LmCeRJJrBxGbcALmB3SpM1wDbLc",
  "key17": "4oJLg6VSoHRPaMgJUv1pjeH86pDvsSp4efiWQ7LLcRqVjmTNvVnVBz5ynT1fth7nZmmziRE23UwuKDcUny6hGxJF",
  "key18": "4WnnpA9ZSArcs64APcVJ5TBFJbZtPpoeHtjq9jeEby484xnxsrKvccBKzJYRpyNeuvoLiDBqmDfsodJtqdEAzuaa",
  "key19": "3apBSfHiAvecevpwxmAkRvxUcYwDQgTFRBXukWEkY4RnE1nnWmy1UPc3KxWonVS1xbyvJ63e5rvycMc6LjGhunbF",
  "key20": "2S9utQ2TB14S9qRHXUttv7BHnMeyhLApmD3b9WuyYQb8tW9JikGhmhVJNjknJLT3AvBAMfLZZeWMTZN6rQGbqKan",
  "key21": "4JXKb9zTRBGM9juXMBiKLtWvvcPD5xe1tFwcZY7ySK1xdcCb9mo1tBCKCBwGRVuNxbM3P9FgpDR61xaf1Y49RYTJ",
  "key22": "M7XFMm1vzCSxWzgFpxjLC7rscbiCPCQVuUUxbSMdi3ArHpVPS2kzjKcetkUqm8zw1DLwqRDoGKwHYvdtGuiEzQm",
  "key23": "7n9Rn1o64JjUS3fFsSJRUaPc7nrHeYW8prEGUaGt7CpikPz6NT51FWt8LWwuC994P2REMj7hzVuJgnjw97PH48Q",
  "key24": "42HwNBmTu5sAinbyheYKiDZJBogwcPQ4gqJvmHVASATrfyCS6PdtRbh71bFfCn2iWJxshb42X2cSEKdQQ21UyjC9",
  "key25": "Ym9oebGiLGktGQ4PPLwQnr5EmTHcG6QMwyoBu9LhDv3FF94w56ttsa9VE88VFYtVhasXipdeb7CHyxF12kJn6Gd",
  "key26": "4Sh4R61euxfNNr6ygeVFZpZBG2hkzWdstU9m6eL92fXtYatkHqKetwJdd6by16iExcnsSrytHAzLSkqCh7tFjNTe",
  "key27": "dTFT8aRbkTYyg7Sgeykeba72dvkFN6a9iuKXXTtd3GjkMxDwCkS9VqnRTqdBMncc9L6UMLMMzvgNAASW8CZ8KJj",
  "key28": "44Gn57ehPpQ7bEFLk4LmVrERZUA1TDuZcC5ns4Ni5VGRMC8hcTGutP99bXiZ3fiikZVmuHvi5gikgZucwZ8yaD1",
  "key29": "5vkRkqYuJDPZAs3K52cjSt1hDNnimSgLewwz6JX8Cgh8HJHfb68jy5aicLUDEjjAa37EpxnZpYnqRJis948uWgZa",
  "key30": "4hdyHN3zEZkusy3hGnXcywCCUgpRQyysxpv23RDk5Njrq3kBnTC1jrY5vfe5e79mDnYtbfkVD9DUfppgi7vdCXET",
  "key31": "R3bsqEJUyMMf9qvfPDRWPoEsp6Q8EH4YtBbjTh3RaVLkzghnUFwooMxi5wYmeN2N8DUcKQfniCFQEAjRg8t4sdp",
  "key32": "4vQJ4Zm9ovyreh33envjmKayFeWgLww9NUNVUiWvsa235uSe6NziTjLQfBcpynX6evH3BiXHPATjtdVgRA2yvhom",
  "key33": "gpjiEben3QEC6pMFGHciifDPokuDKiSfnBFqD891c7FrxyzUgoPm3zSRRxMBZovrhyYJRLGuHu93k9wPjAdDwgq",
  "key34": "4M1mLYCp1ftieZ6KoE5DVGvQcQ2Y96Xt2Lq4nGgFZhZmUJjJ9E1DV6MNZS1dTxHaWFzwEysUEqE3D8ciTtSFfbs9",
  "key35": "3ZyBTnrTTrzWfb5Kj2hZ8e4Ek3igXpLAzoNe4ys3TiTy5G98pYPXnkoEVhvvwaEjKUUA9gfqKXnh9wSTcpMMkN9U",
  "key36": "2XeUVBxFkDEopED1oYr8sgHFeSAVdXXoaWpDj191pwZd97RiY3s48R6AmsGtuJhhVUiSM7XJd4dX3v72LCyArktW",
  "key37": "5eDB1ofpk5d5X8qw8FWgJWZ9xUBqSLp63kw8XoSmz6QeYVkwuQ9qjVvLufoQDovDBUVDPQ963F1McQrbtS531xqc",
  "key38": "4o19Fo7C1LsUFxpkwspBuTcdCTU5FAF465MTxQs1wZS8VyHv8rpbkjTpjFE3c46LH5XxGPGVyetNER8wQmbyWowS",
  "key39": "25tTz6MxPJfLDJK96zk98cr1ZZ2GWKxoTF7c96difxyrVq7Mfp33MCR7Fxu5GS2ZuxmnFMuNSuUbQti4Umrs9fSU",
  "key40": "51FptYQtKRUTYYrGiavdhEzzYLLtnq2ygMCKGBxwCXDywjCt8j8ZGBd7FHLzrYSapp2FZ56Xtwgy8K1SrHRJhc1z",
  "key41": "4bme5nY7xWTcAySyxvvKf6morQPvNCv3jRYHWTRst2EwZiiaWTmUCgqigLw8MMS1CE39AhSPoxKV1s1yCS3vQepH",
  "key42": "3U8SEQ2bJiag1qR1P4FQV2LC33ewgSRctDKYxxH7pYJat6wjW1QVhAQVt6SiMz4xnPrrc5hUZyBRxayqoXwnpZdr",
  "key43": "2rXbkpf3S8iA5tBRx5y3VKPbFAFRA66jnNWiD9daiTeujbvS7jpGCGVg5X2ttkJknWx7PeU9RhpJ98X2FovrC2VP",
  "key44": "5YKzWSdkSUjb991xaiLjYaGZkWv8gyLo9SDAf8TrCQQGsxaj1MP5y59UEcFgnUskyQYhBqA9GngECHKeuYW8nPhv",
  "key45": "4S96QLXAkPL8YqYNPdDqP38CJimMm86u6XGyEGjkJdrNu9t9r3Ep5u4NquwjopHBFGVFGzKewYp94u9fjXL8XRvU",
  "key46": "32FEagvBYwy8kMAwUmsSzZ2hQzsYseLuS8AZA3TVYj7QTazDcF4GnLyhiZzDrmgnpYLA6rF3sj5otNUAQTEF86T3",
  "key47": "tJDekidZ79NGhmwYPN3Qn9raYipiG2Wiz523hTY1GtaVN9g3esWDsYcT3hi1HY5BKdaL4x5abTgYGeLrrSKZyWC",
  "key48": "5imQdfoJwgdvcxsSPREBxUgMZcNmPdN7QVojYEcQAQBk8GxfkdHA3k1xsFnMLi2kfTTAqfAMJoMuhfYMibPH7EDs"
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
