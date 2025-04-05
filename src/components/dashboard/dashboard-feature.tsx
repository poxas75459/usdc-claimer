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
    "3uomWAWAEXF3hWahVgrJoruiViE8zCPjxLp6TZjzMmpbyGJANh2mVoFBVWiKs6v2nMchbMC9a1s5VCxSFR38mLVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pgn7RPH76aXm25zwGHiBumRJYNPVWReqeTvDUq3Y8pQNsuffkRE8WNrZtouwqKB4sjQrJMdw6FmRoY7YAJZ5bA8",
  "key1": "3UzvR9HMUoC6nRQwuV7W1KbduqfucC8VWAKxbuXix2pqJXGgVtqjHQk9nfhNHCNqv62v61sbySq6cXyrizpunYLj",
  "key2": "2dZ85q58d6B1raJj1ksuKP3EAzgRu5f2pccdcqbsUNc7DckLmfMtzsmTvMLvrXcDM24xSM72fvqXF47Phyuhr84G",
  "key3": "LNwjDuEbjrCP3Pj68TEAqJNUiDWZdMnFU2YaTevs7YaSjsx9QYyaK3jjdndoiLet11BCndbCgqVPMSpSz6zLWRc",
  "key4": "DuBMHLtnZQWfSsVRkd75tg6iBq4SsMzjtTr11QDwKdZobj1EjhnnCHGnSxe9jyojNQWL1y1LPU9y23fC1Pw4Xe9",
  "key5": "27Mkmaw3kVWzQGiqioXChXdhj9jjrse9jXPaJHHs9pPbhiZ1wxVjhGBwvzC3m7rb31imjVtuVCvGDw1mZpU3CHF7",
  "key6": "26Qd4Cc75NKxMjrv5s44efhE7BumBNxPSMMJpE1jTNtaqvkWe1YePbuf9yEhTJx6qmmuEYJ4xtcVLd9NuiAUR5nz",
  "key7": "2TTffQPsPofUXWavhjrpphbMkb922QXyrnyZxcwsqZbaffArSeqCTeEu1o857ybstoHVBAjZtxdwhUQ9v1xaUPuG",
  "key8": "49RQBzuYa5fCySdTCxCVisMHmtSuUXWw8MifAi7pTGs9EqhbDQFB557y4Qi9Ljq8sLMMn6YuzLLpGqHDTv1iRpD",
  "key9": "wKSxMC4zL7umtbvntMA5XWnemUjMqeNkUyAqSDnsXP9aetxP1Bi2XoVFRBAJ4a258ei4UZb5ZbEDEo7mM4dhZRf",
  "key10": "2YtGhyVkyZGRHcRfFjAxVcS833fY76kkCN4NDGFiYoCf9Xbwv4GG3ku9XyHYbwzUKemXvRNRoZ7gUGMkP3r2kWuJ",
  "key11": "1EC6uXVBcbYWFLxqDGAXXi8TLtbTSjDXuBcTo7vYsYykLvJmwpSATRnD9jjWrJemubioKimyWnfzySSVQWkZF6E",
  "key12": "3idDahJRFVkc5V8jPw4D9YVqPtUTz9pRkCQNqyXaVzW58qe1TwnBzN3fVsbUtKJuLDTGYjxxnYTDfi7afRR79rG8",
  "key13": "2HDzShbLgHdAdj5PBtSmgMgYGDaFs6AP4GLxNHywaRszdK3zNXoMgP1qeneJqWe9y1tJLiiVnL2dSVesRLg9bda7",
  "key14": "52N8NAKGnE93eDRqtGJjJ5t3UR7NvX9KnWjTQVW1RNx9eYmeH8LLXRWT27jmBDFRN1BYnrXp5LAiY2Ni19CVwJZ6",
  "key15": "2HX4de2jwA6nmzHJKsLMWF6k85Zy9oLrLA2Lvv5YMtbpjtRpyKEnRdEmzQ9J36wkpzzWjiSrVHvGbmb88snwaumr",
  "key16": "38ZVor9qfQrTD4T9q4V4oWRmyEXMu98xA9QKvryZKG3WDCZgxFATd48tWdgSXPpTWC1gtQGHpfFci7ejWSbMatsG",
  "key17": "2xvLMZCjSwMoksiewj8PGpoMjNJwwMSSDRDPxJFkfErdEiSUBkLHswT9CZVRZiBFRATZPwL56SGNKscCYxQVsbaX",
  "key18": "55D3oVvCwAqLUaQn91cvR5fajGbDD12TZf6YinS2ZipcAGcSSDiabBczRTouKeiKRvDxQVaXawbhMqDWm6EU3gzu",
  "key19": "3iFkzBGEb2MhzBGHyopDWLTwr15RRj8WuGQeLVa1ZqUC2ig98h9yq96jBi7NAVt1WKBtkthYdAdRNc3pN92x1foF",
  "key20": "4HtWTBDQy4HwRYwRdDq7mdCSdzVjrNt4HrVFgXJp6Toty3jWV1DpEWD3UVaaW8qPcSJVyEnUfca5aoWL4WfAvfAY",
  "key21": "5i9iMXvdyR2R6T9pVsYvV6SoQzuAcgtRt4knoNJCVVmCdGQ8Pjks2mm1mHt92wJz9FuJ5Pd73NaD6nCbr4Daaedh",
  "key22": "3q9hdn99A7KLzUXc1ji8WcLoAH8KZdpMLcaANVJAjKbQUKSsSZCQLnkx8rY2yDrZyg2SyJoRcVTBSoPJBzVvvBWp",
  "key23": "5za1fGkbqgSB7tUXo2D2tVtfpVRcL6PQTV8kurfL8DDJhnyHbuPi9PmkebFA1SCTGN1358p1QmaJvXcpoR4pa2QG",
  "key24": "5WbdS73j4PyMBMAmNYzYripKhkWi8FCJbu42oVfTVG3nRD4EWPmSVDFUc5QWWkrGSQ1Rbvi26CRhK3n5hYDYtAzS",
  "key25": "2y4QKis2vj5RXAGYVuEkpeqgpHruxzt8sFQgDADBgE6qFp8eG4DiWcsmH7HHdPnuQuu6WLCe2VKWfoH9P6uHaKfG",
  "key26": "2ydWbRwK4qrcCN57XPr1sHXQo9dNau6R33VdhMDzcsimnmvywiF1W1QVPUUJC2GBaAMWLQrPZ3JERLpdYQ7RvmfN",
  "key27": "66HJRBZr7cpzZoKNttdhFfedZ8aRNqNxG3LTBSN2cGjxRDGv8kqMovEtD1QjreoNYgfs3bQcbaVs34kHVAjRnpq",
  "key28": "PgoBDEhFUg1ujg3SokeRfJAdxCHbgiEY6zn4hXdTfCjr2hvCA6kXVV3GaRYwTuQXYF2NZxYhhkzoukBJC1Xe6Sp",
  "key29": "42tBTkBjtC8vuf1RjBwWh8GheE69LrGe3eeicqQevqHSBtxM7JkcQLG1cmt4kiYK3vvktr4e318sn9SMuR6ecrbv",
  "key30": "2yx2QsFfs2BzP6DNpWnN7en1WtFkYgjQdJ2PnW9ei9jKMGiHuLbeJWZ9xZkhce5PoFCVfy16i2g9WFwXuc68QCnh",
  "key31": "4KZs1FwCYva5eHH8xHPxxAA9vudGjnQxDf9yDoJb8CMbVB5ULQVbFdHrGvxcmpkuAGUbVARDbk5hsxrV9vMTComX",
  "key32": "5pBrjKZcofodxqe4yVrzXs93CPVeq134gkgFUPDf48K5Vy7Y3wmNXgVLFpgc33FyZMfkSe5b7Ugbd9Sks6FFC65H",
  "key33": "4kowZeuWf2TCrxC8EN5HUL9SihEsMxG8hb1xYVTmiGtVYZMJ2rdGg2Zjru87vT4jZSRBfVpuhzJqXte5uEa47qj2",
  "key34": "2wMpdUVvYk9B9tkGuP3xtK9AZz7xEZqgrKRiDuFaGpBAQF31xqCyP6biYTG9umNx331EYcdyLPdHzfD2DuTTBwqj",
  "key35": "67QKCm8JPwe9qyVQ671mwDd9QdAkCCdP6QjbYjuFDWiuRJgPZGQ65sd5JrbZTmRQLxWV4ztVu6Vdmxdpq5WN5ys9",
  "key36": "4sCKQE7tM77Nueai19F3A7ZPj4VwStKqzBvKx9mxnv2bNMsw1KhWnXeJQEDf7stZPX2dVFhgEfFCEG2LLStE7hLv",
  "key37": "46uFkYTK6vv2bVHbs2FVCT4uiC6NuXGs1TyBstr3nZ5bmhWqcHwRqBm9dCKJippi32WewCQPJuvJSvz2aviT4PWY",
  "key38": "4VPLukiMbYZB9eXXjbL9qNzkkUrFZvHLqudKBvwWc4ssvGR9Xv9ETMxMmDdhYRDriAYEArpF9X4FSfMKjEhtf4pQ",
  "key39": "169kWqNpbHnfu3GhBxxrosNnEXkf56Gj8wLrbYNWMzxhxiff1ad6PHAa6isufmab2yhRXZBPActctHMs5AQVdsM",
  "key40": "4ii95jsmNGJ8oR6EcUdcf5EAUKfcXiSvo1Bd8qebf1XJ4oBhaNLaVHr6rXxtwywmL1gLSKNthkbt9BF9D1HNSfB8"
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
