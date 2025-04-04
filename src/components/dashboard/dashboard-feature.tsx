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
    "5uTRG4yrttQj1b5PUswf1Lqp4PURAYCEAZWecuuPBVbL4ZTfQRPUaSAmPshnYJ2n1FdgjcCxPPgqiS4TiqXo6vnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCdne24a2jj986EFZDDJ8Un5VvFABeahHv9xNTwxzcPkLW3uFQEZk1VPkLTBU6wTb1776hWEm8W6gCALFL6eF5G",
  "key1": "4icsSTfE1MQkMvFqYG4N3fjLsniBxjC3Fw5ExPz6rrhGumt2sG38qt8eGRW5aY9gmc2Q4qkapmMmqa3nEU79TRUJ",
  "key2": "3KunhMZWvmdBPYqe8YjwHdjpgnhA3udfKcEM5vVc3bHLz6HwbJoKXuPwKGu1YPQvK4iJH5adQKp6eUP63DLAMTxj",
  "key3": "rmFD5kFHdocDsN3PJmWDbuz6mzok5jkH5ahUDLo9R7a1Zb2hqUSeWEbuYNm97c3bm8gqeswg8d9KP1AwKum1ttk",
  "key4": "4UeQbEtBw2Ugg6ZhqNyzf4Aoz8cB972KRxx3gN5P2MEd3u1QXxzy6Eq63MSsAbgwSd64rLwhgKiTRoCXPZSdnmSH",
  "key5": "ZCRE684SrfCAKhQv2Hv6BvEw5U2cXperCt3Yb2JpocW12FsJW5gCtFV6uK63xKt3Cxfow7FJHAzdyjBq6M8JoW2",
  "key6": "hCcGaniZDXbyPyKHq2ryigLdJHddpDdWUuBqBW3ThEByBiXqt8ZF8EeR6MdNY5TjokDZYeRyTuAbZY4RJWToUhS",
  "key7": "2qJPEPDH4cL9tRJbAjvmhfoxpUmy5avB8mDtqfdJgcKMsx4nmrFWYH6TKHZ4qxTaeHArbUJDt7gRRd9jRA35P6UJ",
  "key8": "3xzjWTnU3iKu8w6n38BL79QCLNrVYXkGRqeDfbK4Yh434gqSBBMoS72RuuCfG9AfW6FT1EhrmgGLhVsJsPCcBWBk",
  "key9": "E66QHQA7AcNmYbiXhg41gA7zqTSJ8NMDA5YH8GVnhtVbHg2Hb37LtvT6HiPfg5h2aFJ3ELkDDbtpWF8ZeGNNvzt",
  "key10": "3e74Wi1jF9GX82UsiSnXDDya38bgEK3RAq7fGDuw4t7idfjvFQYXpN3yx8yAji17YmMmdciCwjdQZ8JnhVV1fScS",
  "key11": "4VRAVXjcTABVpsBP97X3ugQXyEdoarNqWjYtG4j2nCEYKCxysiKSZi2nJP1YTJzYHQLG89HCg7iPBnzUFmN9i4CH",
  "key12": "2tXtG85UTUBQxmNtK4WUz7hkaFRUGXLEDnp8axZZzPh39Q5Bm7LWyhrRC7BDBFAzcprCYtcEHLkcP2MSx1A4rB85",
  "key13": "2gLBfVt4RLMXFfXRUA5zJ5tM8m27vD6d7imjHr7zfLjCuKxEnuTg9WGqoRvy9qaiemG6HmVVLMAN7crK6ZDybyin",
  "key14": "3rKrCv3XNK56XFbyH4L9kFxaPsDomDsyqRB9jMKGeM1uYW4GVXy5vXen2DYq1QVuaQmnNEMVqnEjycS4p3AP6c2g",
  "key15": "5x123g2axQrcJikLpnr5jDshMu7fbXWtSsezvhkQbtV8huDXQUemzQqqtmtbuBSKQk8uwd9kxadyhycmiowkxgSw",
  "key16": "2VALwQQfMC93qe4MjtDAbnD4DviNAjTrk22ecJAqtuHKKfvaya9cGzNXa9V18s6n6BSZ9q5Hmn1QijjtF1dgyEvH",
  "key17": "2ENn89g4fhj6J4PuHkjbujzub3VY8KXJv5XVpbqjvgNMdptYCUF4pzqkDemEFFe4o15a7SUgryAyPCLppn63e3oR",
  "key18": "4aDA6Hjft27C3dSE93GW8oh6Cuw9PdMUQkyoEMupaYh9Suo3VupLSjrqk13DPgtznhtLH5Kxj1oGBXBSSqdPNLH5",
  "key19": "zb8JGe3kEBchr97awS4b7gzQCZ4r4DhgSDpzEk6Kv2SQjoDxYT57bF29T1VCqiVLUtSpZGY3nfbDHRJvBoECFxi",
  "key20": "4fw5Z576Yp6MZmPyj8ZdCQx4PaNJpiENjYsu6B2wVawDbQexU3nLKrcaJNmETG1pRhVacccaxzTTxJXLEPtjrd6a",
  "key21": "2aaXFWnSQ5KdqEUAxM1BwBrtCeXBvTycXBVKvPJwUEhga5q2Pm1ULC9TtnNTxwvmxS8i2nuuK5T7vu15gr8dTH8j",
  "key22": "27iziRVq5bSfitAG14bg8w1EcY2AyYSrYrGpfkRfv9LzxLU2yDwhPQrfcvUdskeK1okvACUKtFCvp2bFbhzKubBn",
  "key23": "2rV3NCCBYnCB6SpnkYJ4bbJcuQLEk7isaWYib3iK5yBwBtK5wTi1bJzKEpEMb3tnfJ9zD3AEhJPFN2kxw9fEP2D2",
  "key24": "5bSSBeTTguHUYBKk9Qs7JhbMyqodg11wTCxgmK4LWUfsvcK1Qkx6cmDbkFNvH7VSMgAL964qyakea8e5FmkBgNKK",
  "key25": "2mRmNkkQuYRtRxHFB2Pm89kLTvK9CgXQq7chmzmVm4d5peFhs5drP9FbK9qcSCfhxWy5TcFYrydhXuAr4MJBFqHv",
  "key26": "3UusaVGMdi43TLmzBQfD1NjtBNK1VXJX1vmTjW771hVohGgarZGAC96h1akVh4otKjfbnMCBWyVommGX7qXSKbzJ",
  "key27": "2yR7WYxvYvM3Fr3DaLk2ZXPqT3rR3VNe1HLeeow8qkHHFaT2bViJLzhivJSt5Aw4ZTnif7TDPvsArdyMqBeTtbqJ",
  "key28": "5Hz61sNY3ziGJfUtYJ9P3pn9QB2PsdaUYotZTq5TauQoNW9E2Xk1XUj8HznBp1oYXvRCnm9MiZj98mJjAPepcVdV",
  "key29": "3AdEGBsYXtnBzyCHy5XpaZezmW5JaXW1yUW696HmM5N6JktszL1qZn7kkvBPQ9qLHW38tq7Q1KU6umjBDbex1P9h",
  "key30": "P5cDrXRSMSk3yWHxuCRDk98rdJEPjixGKLp9ea1QrVBovicKZBXg3we21pfmq9aMzUiB6B86kNgvgFoMkNassDE",
  "key31": "2Z7QaYQ56s2iUJwrafB9D3pVhX2GWaStH3A2k51R9yRRcCyHEhvCa688hsFps57vNnKz2D3LQgkzWJCEqqutatFH",
  "key32": "3bPt4UqkiY43VabjtkSNFFHwwYBw7reo9NXTGr8MVxVTTAqAxE5KNyENbTzE4xHKX34N4QT4BgGTeBKvPsRqVUjy",
  "key33": "63zvAde4FqbgRrH527BPthjyejrfDbnvLDaJhuNKQnmo5TzX8JYwMBJbt9U3uzSvkKMEs369Fvkdvcow5EYviP4t"
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
