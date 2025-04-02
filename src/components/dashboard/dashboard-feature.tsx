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
    "2VwweV9uE3Gtiymdx9tWHCUuqsbJBYV9CWmPH4bDsVuPNNYNHLGrUPCuk959ZRbvc5gbvmZmwn6j2i8wq1HyVGJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fT44nNRW9MtJaCcgdVFxoJ4BWh5Ej7gC8kmhm7AxVmfFkB7ZeaSeUKSaPMJUUBz1FxLBa8av6v9ykEcPGBRNGbL",
  "key1": "5LUYVBy6J6pRcYpSByKLYti8rB2u4PJwfWEv3WV6fBVmxNRXWayqY4zHUDbDLyLnZNFfFiuDe9JsYDR31zFrKGMC",
  "key2": "337iLMSu2N9VxLT912TFxg8f5GPTiJnvicLwa3ZkbJ4jyNj9igJqVuA1bzDJob6U3Ugodece8SZPc1cJoy5njk6V",
  "key3": "VALvv4RhqToTkGQ9irtsyeHaJYtsQx2VLdVAEvGHG4uHAkQRgZpQoLZQLmGp2Wk9V76QoniWVtEyNaCKBFb7Y9R",
  "key4": "4NMDiAhd6Wu73qDvicsrydiCqf45iKvVK1Kwz6yERho986a4hWDavdRnzUtrCGPYXpsTPHFZzWqXJ1PZx7zoG9ND",
  "key5": "4K2qANHmA8atLRHutaA2FdbWXdjEC62axGKfDzqgobTcDfCJV8fBaZJJzqThiSsD8VugYUd3pe6tNQYqkRxCjeUa",
  "key6": "4x2kwUWqx9Fbkpa1HLwEZh9Ec7DPqxhCaVPXbU76bnS8ZDRZaAWH4TLYAbM84N7ZzmwjdPfeW6uRMtvU2Tr8YTXa",
  "key7": "3h7UvBsgdyupRtjxgvd162MUnVdsFS6bqzMM715vPUoTQWWdHQTvCNY1iXTFAseeTDKXDxNQamVQfHxCQVMBp1K3",
  "key8": "2rW1nv5WyekYRfD6yWufM3PgGftJzdL9jsjvYv59RxVQGketo3Pnpgz6i8gxGLZoX4xfCGTFjXNd7biDFVNztgp",
  "key9": "38zdw9ArvocemBcdkmvnREa2t4CKJzxakTECet4Zei85xkyWE3i4WDXpwbdiwSULoX5AjvDwYdAXHXEGyW8AnyXQ",
  "key10": "4PuLoCNt5KChePDNmVZXmtRe3aS55j51K93VRQgBW9iBmjkCkkQ7genfsR4nXvWgKkgry8AvCwuXtDRadS3QJ78K",
  "key11": "3A9CZ2UnrryXwUjhUJ8LijpWEfV11GoQGrYUEeKZQNoWBL4yikx5qvBG4DGV8RZGY5QWfRjrFAYSwuoCMSda2Hvd",
  "key12": "4Ff7CdBECVrhgrYo4kHRCWrcFruZ65k5LYzUp6UDGLvNPqVL6RGBy2WC7tXtqHF7Us4aK6gDSjfQPPKASvPKFp6e",
  "key13": "4tuPZTFu1eYk3Yw9MQ8Z8ibzrz37EXRzmxZFwvCS5A6o46X3Toj3FmUF6bFrq9cKxFiiWuVh2XUc2Zkz7TToi7TP",
  "key14": "2kYFrWcDBSy8RpFnVfgmm3BGEugkLhsMVXJWHYEgBVGm5RviUfFrrgkSdVeXvcDKBAKQMHdd8YksiRrf5iQaHQqE",
  "key15": "5RFDhyTG6PVcSWFnkhkkTqiCooTMDrt7unKZHTV6FxHK95zkway68U4mKaMa4gKpPJMHYHBtZ8YtExy8fHq3fboD",
  "key16": "54r9rR3SUs92VkXH8JinX4y6jBbMjsqzFhEUymBASgSrWSys66EjegYzY1UQ8nL2oDYp7SA6gqax7De7wpWaPnFd",
  "key17": "3paqM6tRHCKNcLRPmHGGu85en5X5U56YNkSqkthdYSrF7Mwocu9tn8oXirSumg4zDN6NuJ3pPaEQCFyScy4FQSja",
  "key18": "4x9McbbMG4DUduJccBndCN5LhDisCTeDcDaMMcL9T1KY2b8YTfpusb49o2ATUpoF1oqUwR6Q8V6JcBLzSsGLQE4T",
  "key19": "5X96UXAika1GpFRfMs3JntY6vjfkeJg9jQTDNjBEoYuJHKu63HqeZNb2Xsg7pu9U8rCDtALmPo3pcT44QHsLyQQt",
  "key20": "3JZNeYtTzQ3N28fpoLEo61mbmrmwPwaqqvD2E5pQ3hgXezmKD82KyXrX52hRfjdhbK3up4BJEGxF4QLw1VDPVHAc",
  "key21": "4SkcexWPDsZhdSDgeZC3Z1mAKXiaMdbEWUia8EzTciNFwUcz1suQxtUkoWDcPhj3A63BF8shoR8A28J3uVuRrigg",
  "key22": "3XpGKaRBCgRVt7mkuyaqRR767oyy9M5T5zUbmDwtTBD6UpjgMgZ62Rpx3J5g5mSxUKwSTrMeG9Mt4TGBKCtUSA3r",
  "key23": "4NXg4o1MLfmMBehDNqpf1ug4PuKmSbbSuZJV2j9H3t3yTm5ZPcWveqkENT5jBz8j4CKZtSgQQhNnbDMac2SyxJoB",
  "key24": "5vxsYQyir2osca1v3TNJ5wUgVjeY1hbVAf7egVq9RdZ7GCrBY2jYHkK5XUzS8zgMK2z4DSmuW1Ag2mjTbktg7pG8",
  "key25": "m66Vw3YS13hkThk52ToXeRpK7oR6BEpzVxUxBpxdRNYH3hHf6tKX6KL9mjmBXwRgCGTtLLeLjdW2YDBPQzRdAP6",
  "key26": "gGYifmDnbyGkLbFCcV82xACoAxs5KynhvqkWiMGJ4WwXcqeGbXA9AS7onBkeBS8wGCmSPeuku1oHhLqEoU4xxGL",
  "key27": "5dTVYARJvE1KSvyvTQ99fu5CBBZ6zpDgrrgVHt6MLp1dAa5V2fCsc1uWfTnvw9Gu2srEzzXUGTzJJgJD7E9kCzye",
  "key28": "5pYSZHFVGsgP8eG86d4s1SiwEtsMCK1Htbor1xjKgCRZFNMeUwyjCvbgJsvQioXb2vVCydVkQsP26zcQLB2KDyov",
  "key29": "3fVn5nrU4TQESsaBWseTQo6XiEp2FLHS1uHLyhdpYgeejaWtBpWGzFL6gJuRMmBSkX2U4f7iZDdrut9B1P162oHY",
  "key30": "4wXrqEhPW9SS4tHo4BMncFu5Arv89RQn48x5CPdnYXE1E1UG1Vd1mNMoyBnVDMxjjcgu6C39Pc8kpCu5G5ZCMMaR",
  "key31": "3KtdJsv1crYctfBT5Bhbe4nWtqfQ9FGcqFqkQBDesxeG1oJVGqfnZjg4nfBeohdLwrBqGeprrnVGHW2EvXGJ1T6J",
  "key32": "nWBViGRzo94NZMg5yrhSjKeN7K8VdGkSsnsP1BhZa9ysb3ohDkBNjArFwG3gxuKzD8N27kVAKjescG3ij6Nwcuk",
  "key33": "JxpiXyFDDanpod792M6HVzU9MAmpTv2N15PC5XvqFhn3DswdAF2jzAFStraHKmp4wgTVnfseSwhSRoSHQAHqgrh",
  "key34": "4SKhTnaiXMcwhFvJdjKqzMPUzGZtSDB2gsUukAKUfXvLpAXhCB7KStoio7M3p3YnGcCYPp6wTjAtTH5DTs4wsdrc",
  "key35": "534RSKXfSdpEMjvthwvDu8uEsBoVSSXbmQjArjkTMpNhXki8RrkkAeHtGwubwuRR5mRAvDdiyF8xf9CYxQs8xKqu",
  "key36": "VRQgiJ3JvqycF6Wparq2MV6Dbdyi1FHVnsQAEGE7CHysvriVU7fMq51pkdZjqWgD5eh6w7MrhTjHkHkhq4meRhz",
  "key37": "fPCTVChooSjZXsv42LBC7tS6Au8DnMm4W7toSuGdt9xtjQAgGiYx3sKzd4MXJH7x2ZzKheYfjTTWyQG4DeS6NLe",
  "key38": "4kVp5b4d3EJv3rNeH3TTAqDS4HERbdosPDVywnePxi7y5Xih2fv4Wuct8HzVmhMGuQwcFzjwQEso7D6W9rhXnfbS",
  "key39": "46Eavqmjva2dVpyxyUkUVmppJuQ9fT9H79L8skA8RYKdxUGGQhEpdzGMpvsSuktGBvmDmt4nR5ufRm6ykuRFK21m",
  "key40": "2ojp6X7Sjg9UE1yNB1Tbyn3KPsn75HKDtPhX6eqWtZJBmDrhpGgzxvtte6SJaWmBHbTmhEU1TwqefjywEnzTi6fk",
  "key41": "M3MBJHntHFiQczmT3NRHgMW1eRUSmMAd5zfpGNpaTKvVrMFkWBuqzm6NtdQePT6g5b3yb48LvdmHo3gwggaBrEx",
  "key42": "2BGxujnefyKF27tTjhWCquu8iik54NFihNCrcvyURnBeBR3YfCVHA3WEjx2idij9VX2nAsHMyeU5vGP8L33J8tDr",
  "key43": "5oiQufoUd3BGbYLC267AVwM8vjNWEEAeFPxw6pryWBh3U639J2hj8diQhe2Ui1NFPKHUPZHv1oLqF1oCTMUyMjL8"
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
