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
    "vTF3FMbb7Qdpq1toZ6ifRQ1CRFbrbubEcgesDNAv65eRC6326qMP5MBg6qj3kWAqEgn7BLhfMTJH1QNQHAUrjDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYKicbk4UvRfCBLFGdp3SzscLd5yLc4eVGK5qSybYiE7sQVuqnpzksQagCtnR9CcYqtaP5D49fmYNAZV4zJNt4C",
  "key1": "4HjskSFG7mYTQkGxXAigaRY1V3CqUoqWN8SrKKFF3JyjFDXkprtdbdcZUrG3bCAwqqDZkU21ts5ixx9z9azow53i",
  "key2": "3TeuaGWiBe5FLJpba9bAS1bU8VopiczKnGiNv3vq44JhZLuxzuJSzwAAzoo3wJTRLW86XReitttoCYudVG4ojRRD",
  "key3": "2sXr9f1JA3YzLQ5VpxXRgt9UM9JRef5wVwfJHmZdy1FhuXK1d3gALj1BAqxFNirKUqoU9n3QdkACM87EUTxf3WRw",
  "key4": "3EDkt93Pi9oiXA9xBz1GtdgXaztKQgzijSaKYFppULdVuVT3k646Cf55ED69kxdTm8du3zjRa1ZCw3FxwPwWdvm8",
  "key5": "3USxFZvaSfccXewuSE1HQQoF9tdRrUAs3Ms77qem1GnYBLN5MGcEo1PSkEBNC4JjGCGT6hJKcRVasBcZaoXsoCkW",
  "key6": "47Sc95JxevisH4udifhTVoKreYFmjDi8vfichi7UqH7zimZGfP7eCGsJrFLgxhHbKwwYE55P7gYqB3szjiGDe7F1",
  "key7": "3fAMFbhA7RMZGEkPagkYgsddVZHs2nVA4tctFzq4d34dyr59vzEVvhxXsPqgtijAs7Mp58kcEVARrvkdN3Hqzfnv",
  "key8": "22o1FcK4z8jxki22myESSWUqdNRwugxswxhnasjmxehv8XiFJVpW5h4Bau54xFRWCuoCeNzvga6Qgx73mkx2saU7",
  "key9": "5zXVAW1czquwd4JJAhtorB7pqLGMhwU4mqeGrJL3XwVxjPS9Yt5z3CEqRkwYVkePpx1fqcsbWjLC3DZ6gZXG5468",
  "key10": "65ZTA8ktxzZE8n6knGq8iRS33UePT2Py71VpFEzKGdEUoYuQF5RE5Juc8XuMqjZaTKsA4ViGvKDV2oNAhbRgiQpm",
  "key11": "uP5eD51NQaPEL5ZCG6BTDSeUwdUNvAGezCZNzR5itsLnHw8PEaAfDqFUkG5rkt27XYNq5VvbMrV5faYUaPLRuHp",
  "key12": "2QsDu7gXY9CAh3Zatz646uLGHk76pK4LJj2xLJLQhSCwPTVP6X2m46mTkbEqEeNYZ9rHU6YZJk8Y8Xqqk2P72hdA",
  "key13": "5BYY4m9aPsMVUetJytnrdi1CJUzcUESdbqCipkgaLLUk2qgfPtSBa8eQzjc13wL28ya39ymAauN15UGFvAWtH7zf",
  "key14": "3UYz55mguZyM3RDjfaXwgtq7xArTKD8Sb16ccWV3HguhhYQhSiysbd6rqz2nLc3Nqa86pihDFUeFUwoySDJFCePC",
  "key15": "vJa51zZbB7H4DxrqTPkD1G51par7JPMr4Hdt7xfiaWwtq6fLcRxazLRkomuJ1PJEySgDEzWa3ZDw7Z5nKxrgHKg",
  "key16": "3YALguEDBJfucYgc4Svt35sigCUB5zXRssYXYfs7Qjm1CSmHMTJSbfGDgdK4iQ6FHWSSKgQ5bwjdyo3sBawxFZhC",
  "key17": "3Dr3DdRTzuHaH4n8UcsNZbAAybgrYJvmRoz5Dpevr6VH1vLmVTj5DQsB93VeWz99DYPyr8Wf2hxpN5uSyif4F3r1",
  "key18": "48M8PLHchLNK3yfZTyh4ohCZ6ddhLfhaVnny1qEg5V7kmaDgvsFkGW81fGBoWD1r46hGJdT7A3frunH5Kv5dqDnr",
  "key19": "2BnfoRmFovvBpF8csX74disESf4t8vYoiJA3oRFnfofnmwSVnSrvo2GY2SC3VeiAngQKcs6vFLntCyMtgwZ31s1T",
  "key20": "J6DgrWJMzu1MrVDSZhejpSYxqV8Ts2o9yrHu1N5pZB79azogcSJzRPYABTY4akuUmj19nDyXSA46Eg35HPNysue",
  "key21": "iimsBRJP8f4hkejN7TbLHXBnz1vrD3J52qerhpBuY6PXetjgWm7SxZjmd6yBNZsu3WV2jHtrR7xpmREjpdTFDSG",
  "key22": "5F9nCeh8VhjPUc7U35NeXwHsQ3uhpf5GfMXYWNtS97PXBUprXLQgW3bSQYzE1Aws7hrcFLRNmrKMJNqSiFVQVyt8",
  "key23": "3kSzs22oknHVuQbjfvJYFytYD8CJ4ATFQhrd3Ke1dQkZV6WHTm36ikdicCrBpowWDbkvu1BSs8ny8MWHareJBBEK",
  "key24": "3mc1NRp2Ks3R35ScQphnAdMzyEHeUmq6dKSz9yKu3Ub6MWgPi2juPpkTy6fySrK5RBANhPmHw2jvoofVRExQdCGJ",
  "key25": "54DxFsT5wh1jSQUEU2PEHapSWZ5MimcDnKh479CHypDrweFNh9aXBvDZXtDSa1L4CZ1vyRx3dxykv61NbgXr5mK5",
  "key26": "5k7YKUhSCnKZpN5B1yEN8M7tMQBwg1xUqZSNpQpX1R3eNZRHnXdeSPEFyfahNZPBVxnXGVwTnHwg9iJqWrt2rqB2",
  "key27": "2k5vA623TK3kyELtCB6SyKMP2JPohUYaH1QXWmJ2cmWdrsEqJXn4yekeeqymra3nxdrPCUYLYBQk1KJEpgvCmWjN",
  "key28": "3jrSCatu3nCFauGAGDhPxm2kZu1s2oaMctpy3ntiCnyxGtpsF1eGoBVLdkfF7RWBQAfizxTyFdykWdpuFdeyv5bR",
  "key29": "4HVQ3sYRrvyLJLiiXHpsduj3ddykCPRdo2mp5uX6Ki3kgnZddTbEtuCnbKR8ATS2NAWcpRoP8Bm7NqUayJLphpZv",
  "key30": "2ep5WMCgM5Jb1XfbPJxs2xWZSVvjVfrCJc2CBMGbE9Cjnp47yM3BRhyiWr2MAgPRRvELL2AKbfed3RxrR25YRwNq",
  "key31": "4S2jBdm8S98wNKJRKBFKd4VsUzxVQydSSHw8112eH5HaigzBLFyZxemc95au2T1yGWyLgYGsTWX5ueRZA6Wrnrei",
  "key32": "3dWqXMjuvoQbStAzghDvWpeqUpFKKWVGqd1CTTD5JskY54mVYWVXVk89t2EbEocBAWh6mnbMfQz1aRfNUQM26mMp",
  "key33": "48cRrAv9Ghv5aRqUBU3K88XEDigZFh9kfyFxYMgwThLjXUKjX6HmcbrYgpJtwBXAaZSVPBaC2CTnSB3L4pvkYiA9",
  "key34": "2QudLprZy4iRRpuhiE4gWbavgWtxCKY22WcvH7bRSvnYmBJ8b7CPCExD4QQYGAkr7wgSaFLdAJipTL2gasFCtDTx",
  "key35": "31yNiaVUpeUo2yNv4qHSMuWsAmez2RVeStbTMF129MjDg4zy8QJ2ZjDCUZB72e2T2NAUVjsWNPC7Ldz5pshfQEcL",
  "key36": "265ufMTSrfyJ9aNDDCyyP4Q2ku79ZCPvN4KPRL4WPuLxvMCeRL651SiLrR4iTa6WTwh59NPmE84aWA2QjFJWcRrh",
  "key37": "55ohSSV6Ny4F5gY1HN4i8mDKGJuQJMhyWaeJMt1pys64QGDvZqjWHbat2cmSNZTHddmdmJxGoLMs4Qja9cniEbQe",
  "key38": "5H65EYPZnhZD5evhrSRcJ3ybketWibEERuHCtdeDTbNTECVfyB5eVjQE8urm4tX1tn1UxnSJgijXkG6ecUhPiPGv",
  "key39": "gBwP12ftwk6Si5BxmiHDbUBoYhU9dxB6wCaKLRy6fdusVZZ9b6YUWp2y4Y76mTxd7ZEBDkWCQiMv59fgCT5MY7F",
  "key40": "1cBoNVmLWmKYUSNifTUZKKHjhzASWydcKERi6boRssUYgFHZPgDi3dKs8qsNUNmNG9m6FBof9KqdyFuPQbG9K4X"
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
