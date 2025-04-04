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
    "8VP7zECK7Z778kWpVTnLB1fdKARKqeLGY134zKMyRPSVB98novx2xgoaBWoPVC1br6PatdE5d5U4qbp3QsDuDtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5733HtedRg7U3B2McP6XscLrV8XFcqMpzEkF7rBsecA6hbHC43QberUorLfhmWEVg57GJcVdnf9bSn4m5dXffDzU",
  "key1": "PSUHsL3tJaBUBKQZXNjWZnf1dtC7JMc8HUmNKzexbmEyq2SQE7NMF1P8dsJLK2WhNMkbm1JMcyKPZW7KjgmwKzs",
  "key2": "4ZG48fnG2Wcp32LebCZ6cqpKw5kvPBjWqqSGcvVZyEvSWG5ikQ6g1E1hZASTRtPq5brqjD5M4b5cgdoNiDju6uQF",
  "key3": "5Uop8fK15chETTYVFxAGzXGFs63RD8z62mjKnmNQjFmdJBHQQaJyVnQmLUqDXwpKjqT74MjaASkJ6nT438JNW8hn",
  "key4": "2dTRAxrKwb53XDx4nq5Cq2QRxcPoHb4SDeHuF3UKiWyuadqJiRy4SNTPJke8tmgNbk6t5vfaw7mQCwbrWwGkHDrr",
  "key5": "4h4kBNPrX2YSi4qpzPW46dkSY82kT2HnPL7Q5fn4kgCenUWtUQsrdS5Q73fGXfzaSpKiXGCPb9prBaGwGiAMQXqo",
  "key6": "5JVws3hD39D8tXWUfeZUvn29UPcr4BJdS89uPxzuaKU2yPUeJXkB1nvkNU5gTo6xn6k6FhkH78pVWrzv9pD2Ve47",
  "key7": "5c29kS9twaUvkMNYLFd9yiwcGzjngsYEWGeHD6ibPhbywfGFxyZPWPCGUXjhKuFkfPHjA2bsdJh5DdzNcASUGq4h",
  "key8": "5k7v4Pk2KVnSNfsq6XMmuKYXqMC6aZVSuvN3xF3h68XVCnFpzjbXGDYXoPxPPtU8mM9PMYawFzHYDgTR44uQNLmY",
  "key9": "2JFkb41RWAVBFXEG1VZSXNaGrZy1FGTqV2mpsMnTrR51m2U152M4PjZLniTyLHPzPu3ebmgjNUt3ppbr1GQrwCye",
  "key10": "2UcbNN3QcATh1zi2Bc2oyYENgZetrS8eQETZR1B3ig3eak8RioNWvPnZ6xNQX73rznJRudsBBn6KbmPWosMvGjSa",
  "key11": "upbKB3khZoU4cW5pWDCEfJ5TSTq8EgMkBwvb9ymiXDKZ1uAqRukBjXM2jB6Yz4SbomPnn2TRt2bXCj15LpCAvHP",
  "key12": "58W1CPNZ34w97pGDNBHaZcnAxokbNLdEssNvakbxQuybvWqvdsbDCmAeNwMLAsY6Ab7Qexz9GUjktjQrjUerq2b6",
  "key13": "mLJqfmcVftwvtEe1yYZRtTCgKoP9uJvuXosHNbwvypbgi72xA3ztopu96a36x9f1KdT8Y29rnvkRWNmBrBv6Bii",
  "key14": "4ofEbCrPnbypTjPuAAPV36kuZ7za29FGN1GUpg5B5Y5En9Zp9UbyPvV8rtXemH8NnVc5S53sE4xRbCCJTDZG6m1Q",
  "key15": "2qHdpHWP3aDi15GCFd4zMhy3rmEXrWhjAwidspNrN22MPB3uHfqSDFivGgxPsu4VH61SZ1m9zXBevZUG4QTNaCyb",
  "key16": "4pXdEHM8sZkSXez6aGSQt4BGuEcUUR6BSSjhAXcmV21Vw1iL6cj9gKnvSk1L8MPX5ew8xgk24HnyZfZ2g8yMyrgs",
  "key17": "56S4pu64W9u2a4pVCSsDhpDGaQtJcJLwyw5H5rm3MrdM91nihXRFg6HUAtT85nWj4YiAZBigXmVJZg9tJfJhmNGz",
  "key18": "6zfgwBCLmWmeF7mGytGQs3g9pxvGHMJ6ByEPNDtetTZrcisD9ZoBW65tJW8KrY4Aw7fcN216asCLUN48w5GHiKb",
  "key19": "5Nrv4xZq8VYQeLrT8SYLJXzxaTD9eeSpqV4sQDmWPodmVpT5Gvf17d7Y7zibLwpdGawU9SiGwKcfYWTBfijRTP9N",
  "key20": "2fURLcjhK5KH5Nkw2cdsp5vHRfytGuuatBuQevZGu1sC9dttbZK1AeptqsWUmT81dufSWBC6rPg8JHb3m8Nv4xhP",
  "key21": "3ALp7JK4aBZRRdmJdFg1rKiLPoBRUXQJk4LwCqtvhCVnAvWQVEwHNvd1SEkBxyYXKDDW7CJeKGJPqwjiCVczSnKu",
  "key22": "3wjRTSKKYVFmaxQF4MHkjWsLgizZW38cE4S2aBX6HiDsZBriaWo6vtwJzFBg7mzggLqVGbt4mtLNqVRMRWG7AqqJ",
  "key23": "5eiNHx3TJGjzUQ3zkcJktksWHfTb3MRZbA3zzAqwBcBermqDXNtvMS1tkxTfMWdzppZWduQU4sag7j2oVCu9sw9E",
  "key24": "2XbgBwa9Q4n45xacXcbFXoft4dB713CRACEQy4ZR2vdZHm7DbrbwwRshhyK46XnoqP4n7WkQ2oumyYcj2PAZ9zJp",
  "key25": "5aVptMbKhBAnd2J8khXkmBkhEZqqwZh7yo4w7J2kfxtvam3PLavth6S2x7hj2m7H6GiZXCR4UxGsE4meLMZjg8vm",
  "key26": "cd3Tje7TQeQSZ7oZzxTAYP92x4YiL7BQNReFk5zsnKEcwPo7Zr2mwUX5FWY8rewAtFVEH81Rf7aFvDaFWeUTVba",
  "key27": "2W1TJ5yJV6Li7NLNe8RaMZPGCGE26nq6gGJHGeyr7egRiz5k64fmJ6yKiJkVhRnbJQdjnwEV9WuCrMEpdQV7ZugB",
  "key28": "4QeXUsMtnV6KXwGFYgPeZuAZJo68E1FtcZdhBCT3jA9Lq4FATkz6eXcJgNsG4aNr3rbKmgEYkqHuLQ8wWcLL3mgA",
  "key29": "Uwt9ba2Zzwvns1d5WSesq4waajmhQeRoJcLf7VR2sg113BYfWDhugq3x7B1FtCwBj54h8SoF6qRsiKezk9WM6cJ",
  "key30": "3UM6Sw4C25C7PAiAAYTvAc8YKz2qz3cJDw8wjzDAQkdXhNwVrW9AccMk5vQgJgxHmGqsscZ3fqNdnffVSpdmExAp",
  "key31": "5jJakYpuTReXEQ64PTdHyPfFAyS75ZpEXVZ2a6tEdXb14b7r2ie1kJBRqcSSDBjT3oD4nAakG6w3Y1zve6Uizrxe",
  "key32": "5E8YNKEKperZQvb7p85MhU8bZjbBSLhAjAdKBiu5KWSyZRVEjYkZsm9TgSz2623PQVbMPJYcH8Tr3V7Gro8GQNpg",
  "key33": "4RjHM8P7mAXca6CGp31kWqtSLAtS71XuUeX2AdojzQAXYFfB832eGzB9BwQuRqyDdE41kBtx5PAAfgyfjHtSDYGP",
  "key34": "3nf6XyrCLg8BZ2zqs9V7bo5KYrphXbxek3meVN6txEBtcB3BLA9b5zkXKD9UZHxqukzzUzsLv3LXm29ykVZZjzQ6",
  "key35": "ihzM8uxTrikiZ2mfrqtzoUhuTeogkfeC1yEQ9xHZ2LEMND7ZDpYskPhY2isMsxr4cU7tfQLGqbG5B84ayz1VZqu",
  "key36": "5VsGSsfFfJERMEfAwp6Q2W4XRqxApr6foRfVJhXtGFYW9MLPRvEZSHmg5urwEHX8U5ABDFoCHRE4D1eVpEqvgNUC",
  "key37": "64vxDoGpgCuZ8z5ifTJGDmAF2JNecrVZX1SwZAt9WPKqzHCETafptqdtmR98YVoKcJAcz7DhpqYXwcTBCGMWXqr4",
  "key38": "Vsyfb3bA7s8L9wKd9yG4rKN6vEY1ixaqA1gM6Z9JjLxNWxovWV37TwV95gqnLuRbkq9xYvNksmV7c2reNRupBoA",
  "key39": "4N1pyV1BfKG4M71oLSua6g4W6VmBzNAy78YzPdjtnvFnnTyUPDeBHX8HcjMXXPjsYX6BFTaiUT8YGj3LnTwMHD6",
  "key40": "5SpLW9ckuEo9epY4Vkg9ARDncQZqjckbhXhm9TSgCcFqEtCBwhKaVSMK8Rdjnvbj8nG31PcvnRiNfgZMZA1FTHAN",
  "key41": "ensLCEuoD7Bgfj8mwstC2CfBDwBAohv1GWsGnzyNZ3cRbAzVfEyryTRgSdt2PKLvrn2C4cT8swqpc3i51Pg9daE"
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
