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
    "443FcmKKqGJT73MuBgXyh3uvgW9PhsBgim5ka7UihLGziQtRYWtmS8rzEshzTtDZwjgDxokTg9FwCgT3U6C6XWQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uaWdRqGeYYXXNZTgCxK9BFJGfmmKdfQQH2CpwmyUNs31Pf3yYbx5vn4BjvrvGFHUwHrh3EMKTRYepoXXg1xAMhR",
  "key1": "3LHU1ZEKdZQiykktjFHaAsEdV2g5k93mmSM6z3v6fd6LCkKu2NubymYneT57omPfUDv4RPWfHW6NE9odTSpDBgHN",
  "key2": "2wSw9bHwRN5jpnrbt1nVEyXwPMcR9oETQYLnVbKpt2XnDGu7wipP668wrLrKvdxH8vw8cg9gdGKuF4Q1T6RoZ7pg",
  "key3": "nYjB238JY4EMxrYjtkCmWsmjDqns7PZpMirTuLEZcJvhqDkgvGjgdpcYDYRhGkaQih1iHu8MD4Zv78HZvebT6V1",
  "key4": "r7J9y3EdMocJLXV4XsGk7Z78j9XMhzNscAQgriP3L9ADPk988oJ4gjruS25ibgHXpA2Dm7wsfKhFYzVJhg1uxa7",
  "key5": "4EXgP2dSLtjikXHii4cg2mLydznUNEAQLFXve8txzkybaSbEiDDrdGgQ17WJY7F6tkuGEXbc5DCrswWDDeUBhU9J",
  "key6": "RosMuRVw3eesiwgeqTtXTedDaxuUyKHWx1mTWACH5kJnfPtqVhr3Jj7DL4FRfBab6NRmsDEF6WLxw9R6a1pxwnj",
  "key7": "6nbVpoYjYRdyXqQP9Y9HREPCfpvMnzir6bdcHjrjaojb6qoKeVKZSuufMZiySCT1b4KUoaksgCTF4UPNmbHH5P6",
  "key8": "4g1bDP2gVpNsB2w1JrmhtA1ykx8h31J1J9ZCj532zrDE4b3tfeHwH7bnptwTWPBfhyvSqoCnJkkDzHfkoJQNe66r",
  "key9": "4iVVnfzTUV1ARSdAucL82ZFZGWjUhkFM7ABNYQRYg2iKqg1hVSEQbjvnmEXt4dk3ydkTG9Sd4Xqp6S3gwn5j1teP",
  "key10": "2UtvoT3BoeBRJkSj175YmGpNbAghtr5czd8aF3NmBLjbyC2FCsBYdUDjWGUqfyi8ntmFxTUBpC8Y1diQM61zSzju",
  "key11": "3skfhoEXocraLiKYaxrDYaP5mkmh5XyHEme8ReV4JvAgWhUtuXYUCeB5DZLRNCxrDN96CXaB9aD2Pxk1NGYwHbJ1",
  "key12": "4v9drRtY7hkj8nmTqc7SxWiZjqXeaxanVDFExQhbSur65FmVq6WeGvSqyFfsrF63abLztFfSR8LJW5RRjvuX6H99",
  "key13": "2godBRM2tCwgUgf8NLYWiBCiFPs81QDxnZUiP5Q3NAYMarHrBkAifPt2YJE4auiCd5Wd1ueNQKhRUGBYGLU18hcw",
  "key14": "4e7k1zW3hPdHcY5wMohCirhytTaJw3i7FrWq7TvY5V3nwzhsxw3LjxNQgWTr9Lqx8s9ebe6KMX3paUREJd4gE4tJ",
  "key15": "4vpx1RqniZt3tYU8KwzamQ4zd5mk75kucGPkZJvtE6EPhMXnJi44Q9THmz6jkDZztifevXTgpoHtWsvLLD5WTk5r",
  "key16": "2iac2WBUg4iDTutFGS4p65t2hEtXDCK7tyW6gw27mc5hTbfxAaiodhTTXLZyBgFmtUPMwtNwdVk9GEL2HYLTrf5q",
  "key17": "3n2uHDwDtCcJQmtMtp4QiN4vxisdoV48dJ4Kwh7QECxeNbBEPPyM9TyiZ4sCErZxL6LH4ub3Na5S3kJbEQCN2fvo",
  "key18": "51bUzQFmbEZZW7tkJuLncR2RWwN1Ay1n1G5F8xvMF8oUmSvPbzSYiPcn6AXnvbraTkS4UydQf1kpvbRxemmwM1kE",
  "key19": "2xbNAkmzcueiBHy6VSUnGMi3SQ6Bxwhu8V234mSFpA11w8d4gzUdQCypEN4jerE3ywWbToygTe6d2sNcSKjcduqF",
  "key20": "wh3zkQWpeDmZZ8SbtEDZ1X6587r5rr3KLuKynSGPgQLXrHsv9RtYBLDekrmXWBiiBzQLLyvZTZGXRoNjs8YdWYk",
  "key21": "2egejhYNUaTmBUVy7utSXuoVNE2zGkGNH2fq4jRPirXp89ocvH4b8HeToG7faAWSF1j9aknNPm5hppVofNv8xx2i",
  "key22": "4d7X9pQ8HL8ojoL9piRXX1ZHh1LTYXURxZJzJv4xrcHZi9FkE5C6Jw9Cvqqcbq31Nichs2ModcArJthUJQEY55bi",
  "key23": "4dm1rbSgNxpBEH2s59JeEFjbrzvSwwVY8BE1VLU7UXoFUhN2TpsqE6sQqw985yty6xkS4fc8Fi9CYMUa3fUxXocf",
  "key24": "3z6ir32RkeraJuGpp9wjV9njFQNXS1ZZEdH3ygLaEPXgBnCjMCiL5H5EJxCYQpQZg7mDUmeajwo87vYQtV6hK6iG",
  "key25": "33SUD4HpgGydu8jwLREJDguF4n8FR8TSpBHVZoE8ztT886Z51C1X1MReMPvyWVsTR4i196QogfFLq6ysfi5CPEfJ",
  "key26": "5XfnufdDUz5LPxhEm129PKswEiLekWdKxGx3ZF6bfef4cnYfZVUbH95hptTtnbHwRb2LYABheyrhosgStcuMhMN8",
  "key27": "2tSraq8dE5K89c2xZ4d3xxM7iM5BzBrRV1UWfAwZ91mxhMLsMSAkxmtAAByAYuVyfhKPf4XH33SeuDSjVqV1R5r8",
  "key28": "2oNvtBQVA6evoG4QfANNyahfXBymVEWJ29Twm155i4Thv79hBbCbJ3aayzYwBSvZxEsrCgqNnvWiNLvt4LzDUdSb",
  "key29": "5LjTGi1yb9PybmbiiYYEpTRTN9pJ5Kwn1Lw19fk7rvQctx35DWy6SBAzmNnu2nF6KedJyZ3YC3ke2xkNjmYT72m5",
  "key30": "4Zyt1CJrygLC4oTvKCdkMAtJAHHavguNGCrbWt7wXX9GGoKatopPHeC7X3fDr2Hstknr88RXkeDWt8jCtPNeTMhD",
  "key31": "61WxZrcUsqjyAvMpWV4SbpBTaFXhknoHcRNktyahNhVivEea3i2TVmuyAAGRnruTqgau9DJgKBV4Nfy5GKhACC76",
  "key32": "3FSbNGetTw5vXHJz7uQtuKBeZmw2A2cuh6KratoGP3zRJ3xCzms4GUUzcT5Q8mdmcv86b6b9k9VX6pd38qKteSif",
  "key33": "4Y878NABSf2KZRpdYZjdfcVMdSE4aisKzwr2DqNBVLaAfVKt9ngCQ5vGYQTn16nk8ZFMmTQQyvxw42A4TsCZRJ7G",
  "key34": "htZG3LTCBhRZZhapWvthG3LLu4iNu6xD8qoh7Afhww5GffEsdoEcU8mS5qjm3XXhzjST1L6z8ZMvPx18pyhne61",
  "key35": "2ZUNWMpdhjhwM8H6gdFiNLb8ftUPfCVUdiHpnFRH7xcNnZPRVWVg6acHfRn5yS2gLxh9eY8z6CH563DDzxHnQJgU",
  "key36": "3V6F9UjHRQm1UeQDAHFtmWUZDqfRc3zZFgJfzw9cTpC8ZmA3a7wjiGssXaqywaGrxJJ1i7ta8gQSxxCUMknyHdTC",
  "key37": "5yKNHCQS78Fa6jNcAsLSPmA3KuSKYP2yCoNYYhHUVAeRPsS6183VQzq9bHWsuhSm87WHGxHG9ZkyMhjDgHJqZFEM",
  "key38": "2jyRXBzMauafjHZVwnrZpweSowRoorHZ7To8NxR5Ds5BTQNmRJ6BxGe5WoXpsgVGHCR4prm2KLTSjxCBJpDhCUM1",
  "key39": "5S1uYS4e5G4q6E8rMKq5AWzhZQnV8vK4yVZockVzbQ7iocnQBSAKVnAKkuJzDnNAsPYChuow7bCa6zi8oopbuHey",
  "key40": "5rdV8MMXoAiywoQ9oJ2BFpwMAyT9P8zvYJFQrKGaABVzuaQBrwW4wv5wMfwDDf1t6uybAvSxctvVtj97H1NUQft4",
  "key41": "hn3bJNm4ZZ1uDcCYd69S4cvw69nBiWAoNHuReWKrLESLGSWKTL49mAEaVZcLq6Vh3oEjDeVGcxMQ7LsRRCukTaP"
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
