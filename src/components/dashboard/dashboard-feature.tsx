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
    "WCr4zSPYcH78vGe9CfX5LgEb2BfRiiLNgkWCv3KxuYMQ26buvBmjgzqEmnVBV1TkEXfwfCSFCHhA3rwkaz8wHnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J9iqJ6woPTiYipb7jbzYEyksh8YfN8GXxwdSE7x1ahmBj17HRRoukXYETHWuutv1k7Q7V2TpxJ1y2653daCNruF",
  "key1": "5hnMc75qGENHkJwuAeEQhXtjfcbfHeR19KXsCaSM8AM53cnxXCg5FNeKpdijdWmwd6MSp5ivoiSWZomn1U6tswi7",
  "key2": "4eW4XoN4KRontrus5nk8EL56ESvo7wnWm9h8EZS8hj5v8ytkcsWb555qvRnEka2vucNLdp5SyiGoCKQpY5Aw6wwR",
  "key3": "GzEmfDwX9kkcDkwFnZDbGJun8aXwFuYkVousKY9mdeE116nrvkMtx3s3J6x6SL6Z6FL1jLyMzjBkQFjoQobsqbu",
  "key4": "378UE14kLc5W1tzBbqEg1TWnVG74ZYNkoV4R79umZW9htBRpsyWp1VnXHqzVpXYjGvg9S5B1EFuPqVyKLi6hMG88",
  "key5": "3uTKWzQdnVUizFpAu6K5xzMf9rRPdK38dbVwv8GMUUytYj1pGWUc4eeWxMXn6CebXnhNkp6FExHRgrXiRBzaeRhp",
  "key6": "akM4NiB52vGcpxmyrAcCkHmjAvJPUUeLPp1DrMk66F1TnGvikfn1GoMydcL4svE3ei4yiXaAvqTnN77mXL13AAU",
  "key7": "3WSHbCCefjsf6v8FKLhw3zsa1daH1wv6jJsEfc16ctqcAhbsowSThP3PPBgS3wt9G9k3EmJoYuC8zyTcWe4xECZ6",
  "key8": "2hJ4Y8jWD5HQkaFrhhR8CEPJ3mCVsew6doTj2zAGBiwKByei245L8oFubD48bDPNSFVGNHgiAbPZViqsWZwc7zUE",
  "key9": "2BvVsbD8H4TpzwXdfK7uVMukzem6NTZ33oMBg8a54JZeZSvqaAS8u5noWpfBzUFfm2n6uygG1mJr3BZNyRKy8doy",
  "key10": "3b7Bced5nfiAd5bZfkBmQQRLXyoEbLYb7ChGZARFaZZMEcoyFbm8vWo1HD8r1RioHdbS4Qp76wt1K25saCrVss5D",
  "key11": "24VxYEx5q6EkgTghkVH9ZfxwgqTZiPCdhCh6jzhsapmpTxJks2tg25s1JevrAyPUNDRF1qncvfqAoug2QX9K2NYC",
  "key12": "4jDrhFdHCDBAJ3pNhzhvn9ksdhX9D3hmUMNebgBwwqVEDCJdAk9kZkNT4msCT4bdtZqmuDL13nGKXZFeDK7dE3C2",
  "key13": "233nfmFjpzhJ2jXpDFV4otymsREz2qLQDUciBi43Jwdo69kBSo5CRXKrJkDqzredFCAmHFbWdH5cGbry4eYj1bEV",
  "key14": "u6WS9JLJB8MWNBGK9EmFcJKiGkXVB5a5FjULcdfxXNrwthDGWcRp4xfjAg3icqtPPGggkphAH23pYwTsWQMX4ey",
  "key15": "3osZh2KufYUbAAGRP7Wccutpikb8hL4z61cL2MWdCaBNWttayA2XYNerLGpqPcSs67ky2bEz3fFYJuuozMsBkUTb",
  "key16": "Ucf3qn8wnYJ9ngwkomQ3R9juRbjxT5kts2KJ593xhomvXdDWtgMJT89LJ9ojTGQe1mmd2AkdNGb9dbYFSTsPZxd",
  "key17": "2tn2vVRzQUVR3KVB2icM1jQMtKcYrT4tFGxz5pDZBtoeXq4v9eP763atqK6uq1tJopsPXacb7j9TowDmrFaaNFER",
  "key18": "29fLtGsBNASRzqLa4sZXgk3vVSjJ2zL2ajAoEZDMmVGjMiT1HTSdw8566VWKpXCydC4C7pfNo8HQbtDZ6jiwtcif",
  "key19": "Fk3wqMTC7DLwu9nWf1Q6njBcdBzVFW8LXGL9rh5vkSEw3Do6uwVp4geHvodKkqJjt217YHTnBW32VipDq7cxqNd",
  "key20": "43yUiuNn5CeULv5Lz1zvynfSJxmguAsELs2ipbimJkt4AQ6wroPkpvh3AY1hacVdJa8g7WGtnYk2prX66aXfSWrr",
  "key21": "63CYMBwPcaa5dq9sg9d3zBgcUC8GyakRmwmqhCvhxmcRXtzMu4e3Afg4iDDobxWvk78BaV2Z5mEWS5RNWTfrP4Vm",
  "key22": "5YVo73qnRYA787pk9m99ip7d6aEHxbJPkhDwg7MwqTKw74eZ73LCFhmgtSYPXaLBR3Wx7eADErszTpyMAYxbb5fc",
  "key23": "3GEEsCjSAirrGQScJu3JbJt1Sf2A6JstaDuUw7fGLjretKrdYCVKRcYKCY7BchLPs8vXzntxf5D4zd292wvH6mBV",
  "key24": "58KwUKnzJGmaG17BoMQDX6wN9WuDL127zgkzCsDW6btbYxjVsdntgeVRoyybHEC6ph5SCYZaUwEfLMd6J22i4siC",
  "key25": "y2myt4xB8BNVWnJEjkMDfvcx472r4jsEkKghtxRgyZ7FxsRXeHEXHzCqBYNRBohsBLSjTuFUSA76u9udd6344dX",
  "key26": "5FNdwDLpvurxtti8azWx7pA7QQUujjpzTTA4Ljtzm6NPxsZg5WDvFhvqBdCRSWwCyYXxr5eRJZjEcv5fCSrRJ2rk",
  "key27": "4hAuwSHqBYuFZgpb4UQnK3au18Ej1RaQeQw3ATmq3yxhzu69WYjT7wnW5rdkcjMYgZwm3NNBW2XXidVb4PPNAQnb",
  "key28": "3qdSr4vW292nJnwL2wrpP6fxYuj1GRH58rSE81qSG7wzx8ZtqN7yH44zjP3mRrr4NF9DAhH4x5hgfKkgjJ2koPAy",
  "key29": "5BwXzAbJfFEStGNoDnW9JoRKiXhLjjgCwK5opFEjpvUJ7pWrNt7GvUXscgV7EP28E95Y2J45BkiMAvWGrhpKeCPn",
  "key30": "3buWNZRXa769qFaPrMjmPoAQp4BHzvWDBg5TvW2jsVru3LQs6vEsGwNMwLChmNZ39Q4LA1eja8TBbSMHC11Lgyk1",
  "key31": "55yENND5kHjG1soNPLLZoW1XjRcghNov32wke5dsFadWmaZUfxcpFYLEwdcqWgfjDzr8LBBEdjjQkvmG9XQitg5s",
  "key32": "iUQKoBnpdYRQa4VEXhZYhhPcquRvoQHufnCkyQEWvMFpQpfoHRJCeAuPzMjA5NRV6tigSz6Gw7K43SRMAo8CHdH",
  "key33": "3JMa8BfG5HGGYukLk7gVQhkFYD1upBWM6jFtCbXJsvKV73BhXcSRZkjbSDcLfsyTsShUuL9xmd3ZmDwJxmFA3FfM",
  "key34": "AMTqq2cqjJ3xQx9sq2DjvxZDeTxBFtKbt5rVavasjGaBGtNNB4xgsvUWH3AR7k2BU6rCAo8p8kdMdiTDRsgTHcH",
  "key35": "4ysjo3Lp2JWYL8dUeQMP42EpePRzWym2E3TJp9E38S5WBGL4DEDH11pBraopKBUbBfrNdiDE1hxAbUEHvpL1V1a",
  "key36": "5vdW5MtxurWaiy1cxPEYGCPEtEKZCz6icc2JSKk3HxiSm9DHjw42oiLx3R6LuQh2A7CKMnmDQzSCEjTKBbPzhG6y",
  "key37": "46sUMR6R7Q7j5anQQAY81NxfVDRJqSi1nEnu84aJJ8LNB769b2ciSanhwzAGuG1V2KrQRxmbDZve2CxmHzau1onD",
  "key38": "3KwDntd3jgytkdoeG5x3ptnrkpszUHSHtoDPuHmMDmsWwXY5WXwtUJoTnhQJSA7b6kngzxpEPtWZd5kFFyBTh4Qv",
  "key39": "St1moGsyH59eXun3gc4KYcrc9vRX8fHmGuF54WmGZjBViGe9yt1wefv2vgHCZBEKkkFMHdP2nwDx7q15i6wRgkp",
  "key40": "4a75WRABM2rggvCDrvK5Jpkg9zJkSVQYjqGNqKsvJocacGEyzqTrARHTBYpwrYQUDUMf5ZxjfCEzpDaZqARWXgG9",
  "key41": "633mwJNkRZDunVE3THkidtxB74NEPyTif9db5K2egCyvujkDYHCQpZGL8uQrq5seEPixT1gygrhB6SDKt1STNfnw",
  "key42": "KCg1ntwXURPrWWtuUVvB42igS5U26GMoxahoACeRnaShruGrj7yi92dJ5W7witXpC1RxPhwUTpxAxt5eVJ2oMzH",
  "key43": "3xrimHUy5yPXZ3fXDvwito54W9UeuwxAkF5HnxLFjtqzhc9HNcFJEMD7odza3JVapzEmqyYiixCKqVZBz61q79vK"
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
