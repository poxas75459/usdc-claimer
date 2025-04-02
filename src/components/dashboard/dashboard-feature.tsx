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
    "aau9UmRVJbpcChPbgJxQ5db3seVUqsB6TbSpWsfvpetnMREN3TJNNoKF5EGvwt7Rf3umjQNyc5nZ6TuwjDk8dwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5wmCzVNRPGccaeLcEFKrepco6Y2o6u7GpT6tFGZhRpAJtmKnWfFNoJU99GeMYx3ZoxWLLGnDtF7N9TSAaDzhz6",
  "key1": "2rtkVaLtwqXiAvtm8J75PDM4GKbkzaFDGo3bgDTk86FgkUUANjN59aUYz5FUnqNrNyy5SnVL7vgWXMUb2kfbkKQL",
  "key2": "UqUvYtwFgjuKSR5UHh3oTM9H62BbEj5JPAzhBkAPxWtfSQgiKgfy3tnCMEyxphxo36naCsAJvPsTqFBvEDNtjm4",
  "key3": "kVZiRMqqejAZB9otGJoCaQ9bcfYW7matx6ovvehn4T1QWt2Eo6fMRdYUh4SpBCj9QoQX4wBmwufrgupTgn52HUP",
  "key4": "2StWMh1makgiCsNWcNqziS4qkwY6ptAhcd5tTrGpNLja6MQNqSenuZy4CCH9A9c1Gkfa8mV2DEnJk7CJSx7Ztsjd",
  "key5": "4K8P3xZBfWPXFNZbkMjLE9NZTUAEezAeS2zkp8CSDeKJUJBDowr1MAJxYPcYXQYipr5YqBeajFd2FAjZ3hs73uTm",
  "key6": "4mtCVgRiVrtxRPXozXVhcuDUMbG4JNmrXhcMuh6MWLBVMUv1a9w8AkvXU2FY6mVGesPn5cRCG4VFVcbwYUtMaFhn",
  "key7": "3dkmsaUqz5bioCVtmiMpUgL68oqXTFsj5L9nKwg6VuYNqCm2GvMaVNFKmwRfB5FEJn9cRdpfaczcwcFvoBwd3r6g",
  "key8": "57WPeNoRBqNAonDZiKm2peWmsXXUyJXRiDaR7Wc9QqV7UFtWN4rTREHt8JJaR8CLVnFPHFWZFPn9kxvhtJ5jciuM",
  "key9": "tggLKRg7HPxFVUuoYq4Bg9pNJ23LjT29pz34yNiM3GvqjMSBFuWYTMCRqutGRYAtPpCn6GCcpWaAV2Tv3h6XhA3",
  "key10": "wWuPHpUJwM6AamrarTEtDYi3JvnVQbFvX3t4M67Dz9s6xqNdFgyECUJrBk6CEwgqd65xV6AhTTpfwiA5DZ7fjzY",
  "key11": "5PcV5Uz93TYkoDuFozS1cjW1udhQAoR7YvB1XwA3CeLgMex5cgPDsHK2hRGAu8CFRvJoDSgeiVMZPLLJKTZ9JvUk",
  "key12": "4GXcg53XBg6xbG5V8cqVaZ1T4J64yiHR6x6abFa3hZ96BoaAUqtn1rnnNpPLYYzXeZwjF2WEYBPnffUTTX1qmCSd",
  "key13": "2bZBvsQR8A6Qy4nxUQEfTgVgJvgcm1BMdSVEK7WKUeircRxTp7pkqDJhvG66a7eDc3RDB7UVpRr12aTHdf4J1EgJ",
  "key14": "5Xi6H1C9bjRVXRpyriqkvgprzdkMthC6GWLCYPCtdNPUxMfEF5LLtg76ycNkaBWHHRkFVVMvowSETdGByAmVs4uX",
  "key15": "4RwHqUrk9zMrKpxGogR6Y6FwbME7ZGGzDm9Q2UgxSakwzSDkMksrA7cmVmD4hvyXkGkstK7eqcq7LVrJUpjNPbAv",
  "key16": "2ZCJnrixXJyFBv19GxMiB6xiZYc6goAC2sawg8gQa1ndYM9CZZNg8xMVykVqYQz4qwsw8Z4SNwiMqNKczJZHrkpC",
  "key17": "4eUuoHdF5avJ5b3qxqK4mgXECgqB9S6sDgmMxuKnnXohfhvwYqwJ9TNnggYBzqPjYkALapACyLSaND1bGZxcmqhp",
  "key18": "3nN8nWRHzvG1QA5wxBJdrrwRD42MNkq7g6uAZfYNwm2N4S9tPzDJDUdBYvdfecqWRqNRrFH1imoLU6XADd11yqpY",
  "key19": "3nidKWmazo2nebQSJBbzELaBSoYBV4rryc9RxT8BLpxXc6yYkrvqLNs3ZPNxdrQ4scShQkA4rh3bJFAPvtrxL1f5",
  "key20": "2jDxHxezXFStFYFC5Jf9Bd7avcQG8cKAAVMxf9q88SsxQpJcsKoWNFAfiYGuPTwibv1unCEXwNHpCUSNzWYsbeXp",
  "key21": "4j6uRmG9w3mbKLhFGw3d3bHBxMmPRKTKDrSqeg3BDx8yKV142QCx1s4S6eREDVGXGueJS7nSGow8rLAGLmg9Aust",
  "key22": "38EwoCTZ2CHXroYyvAFFPAJcRLehJ2VqD4JEahZezreaMNazWKtnoA8PobUaPcSru6bpGXMEHHufJPnTuB4zhYoz",
  "key23": "3Gnpisc2evn91hm3nSXPisYXtLxT5bAXwYRfzgwnrPqfZJXujQbhB1VP3tpuQKQWQeg1bqdEcwnddPYTfYLxxJY1",
  "key24": "4bZDGR3Md7zXwdbZk2j41JSvweNFw3rVio5PxJZtr12GuVRuU3ndCA5TvKD3fYuHMwLbePNF6eqbar7cNySZyWQb",
  "key25": "3QJuUDRumurTu3zx2uL2iiGdsTDfQtK4Dt1AvKeGw67ez7YdDFbQvQjBzwY4kHVHjcqpWY6Tc76Kz9ma1L6agWYC",
  "key26": "4wGuAyeFtXMBDgg6cTyfsjoTpEWuVRNh2my3ggjs9EuswWvqea2j8Znn5dbJJdms2VZS2TYLvbArnWreFLvdgYhy",
  "key27": "4gbv4cJ2w28BWKUCuXBFF22iNhw5gcu5kiBGNH3pcN2B3nC12deqSEA54m49ka5VkxVeETkXmjAsdvuZ2dG8zATm",
  "key28": "5az9sVt9e3eWTaTuBKEiM2LpaS5c5xVs62yzQxaUnvFb6q1LqrvawDJY7c6Rp5zuJhA6SRPcGRMVtwaRDuqpoNZF",
  "key29": "5KvgJPwqcPSavcmNmUohiAfqAWega9KQyoaCvZRrbs4PHM4L9wpUjUJyZcfd9Gn7MYSvFEmj1ZBEMwTumooyFbvr",
  "key30": "iqsZK3RoTV9o8ytXcD41sw2FacKbCRz4dPj4115Tk2eq1HQv5Ne6KYxM7oVD9X7kHT1DzL3WY4tnU9CScamu7Cu",
  "key31": "3FUPzevGC8HicCsFVwXxhoPPjeZ321aJFDZhh3qLMBu37ZuuM4a3XinF98GQutY1yWYFCsNuH7trHpuYUVy3TEDL",
  "key32": "5XCUXeEZPC86ZX8zdmPAkYeG9iF2yQTgmxGxdnhzgyFZtyo8uQLPmZCu8VAgvUg7n6T5mMonxE1F9U3yrLeB758u",
  "key33": "57e6sCxzF2qYhvYWSZkGgXUyb1gsyUhYQSuWBtprMSb99YQXP3ChEFkEs2aVnKxLgguAtz8RhHa51o1dzxi2BsLi",
  "key34": "28wb3Z9Ddsz8xrYxzq5BM7V1zBWYEPDAGwThU2yiG4A9aM7qYPuYTxTSrHLiezTSdPW2oTZ8CTdDcFB93ux8be43",
  "key35": "46fTy9GMJHwimTmorMq792rV6BTiRuMBhaQvPhwM8c8Sy9Ci3g7d2XkNsjbSSn2xw3jAphBdLW6dHTNyM2xFnvSD",
  "key36": "4RJsWC88jyz1xLDXRYgGDo69JNxsk7BWP2Tsmxx7CCU1raiLTov9cQ7zS3FFCrj2mZ6Fwz1ETzHb4JdV1aSom1ot",
  "key37": "5qdxPA12UMMnFZTDjkAtbnDJG1Utbp94eAYJ4RV3vD5qHm4sFaAJD6E1nEQdzbQz4tAsLfCyD7fqohir5zmordvJ",
  "key38": "wT339bcisTi39kK9rVapwvb2EwFLVHsmL8z26K7CteYwzeKSrCiw8N57idWabDUPF8cEsS8VwZd6LjsGDLK9enn",
  "key39": "4qygKnWmPLYyhdChYCmTrcTZoSDzQq7TzS6vibY8P6uwxPwgsVQ1x8Up9fPdVmGLDdTY1fHM4q2agYf753Sos5N",
  "key40": "33eiQco2qy9FQHMWa2U3n3tXqftheDYPUv6P8Ushc88GgSUkQVtkzTAwCidt5WMSbz3JsVqkTxU4MP68oDn4SxcV",
  "key41": "2W9uYUvfNAfMLBJgdVrTjyoBGLwry75GMZ9iNdENus5Rc8WsbxctLBnibnaea6UotnZ91ZML2xbk6gewCQ4ybmDb",
  "key42": "2BjCwLCsmvd2ij5yahGRxdx9Kw6cQugwp5csy4FyPpaWVKFgemPXjEYzMqb34NnsSDJeKKJFs1wARCYCtTEbSJxg",
  "key43": "3bUhnLxANfhuYpHxoJRocw1Eoee2CBsusQtvmNrPMH41f8QDRj2Dd9xXWYWQ1DGb5VaPFR36te4MrrCQHPpuaWWW",
  "key44": "4o1zAsZS3u74rbSkCUWSmPiHNbj4hkcxpf8edDGC5hkQwZ3pzPvS19w355DvWXTY6yis7KxpLH1nYnJDuJ4SSN79",
  "key45": "48WqFUWo3nGYLu73aVwb6vJEFuSBVX6ddbbko5BD7TrrAYLQ3fqF1zpnckKZGiHhuFqk8wp2qm1aQ4y6TiX9fLN9",
  "key46": "3UEYCBuK5giSM9MWToqT5yCb7UsyaNzK6tDwqxJSA37YgYCkHp1Q3TijvBjrEpskAE8H3aKHrhXwYDU8bjssU4Pd",
  "key47": "4mWeaiyf5qotswVqxcZQXXGdSEmEDwEGfcXhQUkwgYf9ynTGk8udKyshKceSJrw7kcv3TWDAUpwkFZ9ukn4s1J8g",
  "key48": "5uerCTDcYTwTZVmeDUK9XdpRKenwYfDrbkbfJFsjEX3eFmv3ShrbX4NC9fn1xnSRaSLp367PAbUEALDf2LCxNqXJ"
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
