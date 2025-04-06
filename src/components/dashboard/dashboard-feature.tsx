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
    "5K9MxxF2LXWGpxr4XXFUg6iiSu4JqrDfheNhd7A5Hq8xcuvPSKyagPAcnZKEtiveDcJMsMrvL3WBLCwsoB84XKSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rm7rtKBYMLTrUjaj7k32P8FtPViGYMbyvTZbMVEwpiPkx62sujiUEKnywpJRzzhKoMVsAdkauXaFzNojhKAqgB",
  "key1": "2JtVij71JFs5jTajwSjjgMZHNEhuDuX579H3eCY18iAidDmU1YmRYWHusYRRCxmF8HwRrDuMwVkma9ubufBc1yTN",
  "key2": "4at9pNhGQMsTDoXdQmQiXHubhwNaAtbKN9hcdGsvtQdWsKg1tsu8F8W4sQMn9GdTwoY3mDeBfeKdCFLLnM7dqeUu",
  "key3": "2xiXBHXREd46ffz36KCyeYm5WKBNP9WWuPogg6bA6FjdzVRoQKTn2BZgfxhLxorbADFQ5GGQx2Cb45XSA1EgvSto",
  "key4": "4VfYi6MRw9JPwXDhxgyJNN2W1LBFa9WWbnPcWPXYCY6sK4UXsp7EC7wue3bE6ZUopBFktNQtXnzERxu4GqkDq8Sm",
  "key5": "4DHoJ4rH8yy3R9uNNzAkM7ie7wgMoM2fcpZGTZgdV9x42jqt7jxY7JVzSgH3Qx8kNSkLrqNH9WR35EKCwvuRKXgr",
  "key6": "58oN8P8zSC3NGDCG9ENW1MSL1zkeyZ7oud2utsq5z2Y9syeggyDNLttBiQPESpQ1ZJKt2nx1MeVk3JeTXz4AWwpu",
  "key7": "4QbymsLXdKhVKLhitJUBxdXQnhwBFFLKkWSiBJ5SrsDz2AvLHRZwiaLQrJZK4ecGkMBrWeWtxbqWM7XmhwmayEdj",
  "key8": "JbL4ZG2JeQzkVy3vfpnLVTEzro26da74ZudT8TSePYpxzPPshow1a24EsqPyw9Ptv7XrQbB8CVcREPDc12KhT7U",
  "key9": "3AFibho6gdgrUkizBkwqxq48Xgk2xuKsW9vAZ9U4eBXfh6KZGPYSvUcDmKsgbz4FCA2kbEECFW5Su8XZki9x1GgS",
  "key10": "4Zp6wnADpG4mCwDM3gsdobYBwNVUcN9Jn1FioCjTxkTi5EqRSbX5vRCAt7FwH3Lqnb796zPZPqqNiFVqUF5b1A8Y",
  "key11": "2B19qdRniRY7mGn3g5pngFbnKTm78946jNJSfAcbhHqcJcdvbUBnkQcMynb5oE8xideUQd4dfshfUuMkfU1P6ES3",
  "key12": "3voKPN3MG4tXpQhs8cHUgesLWWWMsTxC6Bwr4pXczaU8FqFuX5GvLVQi6LRpxAX5TAzcdatka8RwS68R9A2vM77q",
  "key13": "2uxTdPPN3XuzafWKdND3XJhRArftB9UPr2YJUiFamU9yEHqruUB5wwNHpGS9ZfCHvHkMjEpACrLXW5fVH1PgnrXp",
  "key14": "2AL2oYxuacU2mUjckjKMs4gvUKKtAHpX9389oHho5MkLKWFYS8Ef7tooe98UkmoVeFJUdgk8GVPVufBPb92iL9zk",
  "key15": "TTGJ26ABXLSdSH8zymoYdFtkKgZsnAbE8NzqJmTRvnicA8ainad1WrUUECVcSrDco1A1QDnRPcvJQ3Cx19QhNXS",
  "key16": "2KrSzQfm1HxJDcd4vDQNoxTUxpNyVNpLoz8XH589UH1LZJ1ivsSuhMCWcfDM1r1S9aoFm9PnCdbeoCvcjjRR78LM",
  "key17": "291fWjf6BAVN2u9wgxYxKcQXUp12aLE3yTauJqcxN7K8oZPJEHTJDNceyzmaLAFYeBMebt9o3CoJrcmNhBckGSer",
  "key18": "n1SZ2dt1dKiRm7VVuBbCxXZsd69xBfKDjGpR4G4ZGTWE2ihpo7dyYMA89MbZ3df8z1buNneGJjsK1E7dr5Kz5PG",
  "key19": "3Kxxxsp5Mv67MZW74HCWsxYt8MiwsidymphP863nzzZzD1re5j8dW5uQMJQ5FrZnypKoxAFxDynEuk7WVFTbFfnk",
  "key20": "2JDNKLjFmz8iAHw9ZJSzeww2VFnxPtYrUdWLAVfR5ShNmED6FtiAyzaMDoVrfSsbk9U95aBKJe9npRBUyKvnzYJG",
  "key21": "5n9UuVZna8i7ETkgMfRqoaiBPKW5fwaeHTXDZuiYXp31u5QvdNVDj42oDqP8YfvKz4LYmjEQ1Wz5etYdgbspywQe",
  "key22": "4qDnKpnXCHKJHNKDj5h6em2KpnUh32sPLJssWqosNonmURBWLQs3Y8QBZgtRg1qxKcfeiEvexrBDRrmD4Cks1VJf",
  "key23": "4qsXgqkHZXNocC65VtYvX2TzUFToVR6b8gSqTw41HZws5gttG9qLnAV7GvjjNWLkm8Mijbk2HhcdJzN1FGqoJ1MZ",
  "key24": "2bvLwopRdXnKEqqdH7MrjigFTAHyPrZ6TtfckV1vVbA79KpJawCUhPZ7sEAnXeTVmCPXeJPQUwqBgtGXjMaMTufW",
  "key25": "2pHuns8YGi5i5n5aaom5gBTiStbhUk5BAF7GHrqQQBMjz3iQ7K1QNFAm3bK696sPD9oHwRY7Ryn3hGf79vGmZc9u",
  "key26": "33XpoGiZHmkc1PRjPrdvPy3Gk5PzxEyMiQHGUhoe6KYmseBvMuHqWkN3xgESz7q5yu8gAmNfzkXpUokNq1RxzutJ",
  "key27": "26WwmgiAdzpU4rUqn2BAnUU494UC22cAggpFp8Fknbbw2emjScftFLUer2xtSXhxgkPumWHXx1rmzCe8GZAsW73d",
  "key28": "hxBoRAX4sXiTR5HkM812r58eKvmWTArKb441fgsTcGMc9KhT3VUrbhNSfbjdWyQrft3kkqmMRdqNiqGkYvJ6zE1",
  "key29": "3CrCWdKtUCx8T2A87tGD8F3Pt8VZhGE9jjt5t8etVNNbHdoJN13bBGBtpGSYmZgipcUJhwwk9YYwy1h5iEgmyW3f",
  "key30": "HhniS7VfMhJ9FcgS2UaihGib8pZ9AjXyddzWzRa97FyzNz9UKjJNKjjTmGbYyxAA63r3coRG6qciiRoVAGfvfqr",
  "key31": "3r1KApkDAxpwoksN2BCu1gv14ZZkuovBiM4Y7k7YfWtKCpNeWAUGbxEEmMbj6X5JHRXsuFqpvRARnhyjdwF8o3vQ",
  "key32": "2qwJqfnZB8Gq5Dfaue9qr8J9uNNgNgvv7KsyVAaLwwc7By1m6BiEfi5Lma2pTN6R811qi7UsRPdEa6rqDgHmwTCt",
  "key33": "5dZksg1tceTNvRV8vCJqx7QKc3DWJoBxE3y7Z6azFPT57KpcxcXTcTUww8ozcME5wKdGQxwABDVRdcTpDGLM7dLY",
  "key34": "2kdok6g9eg6cDMUwEUecvcYy1bWHkJT1GZKftjAE6aH3TJX2ueTq9Mqz4odhi9h8Fwfo2J3yzjBQGeyhDhhgFxtJ",
  "key35": "4En3oSx1sJZi7rdsgYyieJTkAKyHYtmT3oMqbcitLnKqnbrb97uYQjNuznqACNgzZXRVA9n5BeGDc2EdfQsCC9yR",
  "key36": "4865Gsi1gz8KGebWJYdm6RJXGTm5qui3LPeuokWLnn73BfgFF6PAZZAwUvz8YZn7Njjg5h1V3TUFPZarExP3WmTk",
  "key37": "j1mSsPHXmUqgr4rzKtw9FEFmsp2W6N8Cy1BhFnb7X3cboyAXbjjoFuYW8xRjD3Dz1SUnH9cE8x9hWgncfmFHM6A",
  "key38": "3PGPKofVXNqsdJWQUg3r61wcwDBD6frnwbR8c62fVFmL2EmzJX5E8BPwp4XmmXxeeYUCUkKH2GwJ1qP1ktM27YP6",
  "key39": "PY8hAdipehtW6r2uQx9yfpkubrEH8YEAY2pZ4fhVuWdBQvfgQye8XRfwbgdeBjWWydfnzAPHsZUbBa34An6gTCz",
  "key40": "R8mDVk55C88xMchQKe2KdqY7YMXm3zKxPSM1uH6fu4Tsh7qKhvsUTQHYHK5PnbFz4G6AWomsnqYYJVKCbyzunXx",
  "key41": "UBcxsbvijgjDuLbJ5DajXNkDUhgeSHiuvKqQ4X3U5aWxz3iCEuRHBq2aSizBU8MatFDDU2CyaYEJu7379msmswi",
  "key42": "24k6gEo6BEM9bQNPbm66pcBrqBgtsGVqkvdzGJQss8Jd372TuqrGiLyqw6g7py1Jsa9AyYUgeS2f2MkWYGzokyeZ",
  "key43": "uEA6QKMa1wN36co1KhpTEQx8uvyyHWwn2WzvyGXjZQbr1vUZdMTZ7udm9rmmH3yLdMfudmu3iHeKpy86nuTt35L",
  "key44": "3rNy5pjHuXDnPebD9mhnrNuEWF8RJUyR8Wbud8Xt72mzPysqfqbCSaRKs51S6zLvyU8V2fSDeiVtPULP3P55nrHF",
  "key45": "4xHTs2p7pSasNyeV1KdpCfXiyotTvrwVTWTfuPmWov2GGTPpptCPUGek4tzVQ5smePviUtb9vAd618F18R1U2MPz",
  "key46": "37iCDMu2DAwwGBr8HRBhfT58ZHi7kBpYoCp5H9gCBrSWPYdDkzweevxjE1v7czAp4Lpb4qJc1NMFz8NxZwp1yWKs"
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
