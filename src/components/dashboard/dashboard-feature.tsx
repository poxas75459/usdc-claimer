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
    "3p3zzxPVjJqSRQcTsBWgaX4CdumXTzK7N5SJ6wYSQ1HCWCFTEu3tcQNNbtEuojohJ8mMx2UFWfi2A9ajFyMsb3tX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX9wgkKvUQkytVCZjkTiHnoSZ2VcnMG3oaRN6b6BJMPp3aY6WYTGW6ZwutSHvpuaguyfx9DEgVwDt1U8BKq4nDQ",
  "key1": "62qTcr3e9Vi7TYKdNUFW1kriKQRzURJFt3cSTuJv5fw91VidZfvshdBFcJTcePoQBtLHnzkXj3TpgsMHDzzroYuz",
  "key2": "2aN4KcBvMpjJxnXHkch5atkYahk7kjAwbPmPDxmhEF8oLMx7gmxmos2UsrpZHsDNSvxLAZ73w3Qz8EVNwfbLtDtx",
  "key3": "51BovhnMyfhVX6xFwoztGYQj2xj7weQjjhGb2iK8ida7ddw8PTQdWQ7Z1iqd2n9cpkLP5sMgu9kaMR3tGgM9xb5f",
  "key4": "67qak1XXx9QwiCfaJ9ZL2GvCixAwCzLDrKkS5F4sfJSEfMpW4L3UPikEpkwDBL69voZJEvz8myBsZp5k8oFAwG4E",
  "key5": "cP813EWRx2pXC1iX1j7P7x76zx1frHUgbNubHV5tLkHMpVsvWAzscDodxnSrTjH6HFWyttdkf9Y46eynVaQVzzR",
  "key6": "3eQsghs8AqyyWnJ6zNdJ8hVAVFZrzPjdLpD3KpHaUqZU1Tw4PoFUdo3S6EzH9Yuxxx3m7EDzJvDMyfkQTTsjEjes",
  "key7": "5v2A7PkVbsnha7K9t5jbctFHfZF6V8wwwxU4B8ZqigeEy6TmB7hqprmXj4XwDuhh4Z1VC1BNHHypCLqUaWeoRdjQ",
  "key8": "4VmaaUeJoEarHV5USD57dSEmyfRBwjpqdJx7yrczjGZUi1JT4kzcMhxmyERAMciuCuoNwm53S7BPPHMJiHpntUmZ",
  "key9": "4RpQ3xah8Ge38P9BNTzytgxXjvTiJshJtXzEsAPjX2bjuwFrVLtJUY5TXxUrtPG2YFJhBAcYhfs3MWGsHaW5t6ns",
  "key10": "3k631WJrP5dkwsSwyHYeVvGGb5GgzySSTCd8XAb63Jb3c9ZbXzwgSmhQTBoUBMovLe9PeE7sYGEQgv6X9qQAV7UT",
  "key11": "2qNfXdHbKefx5gzd9iViM2sEaSFGXcCTZTryicEZmczAgun79owUthe8fQfKE9MNfA4dihg6TXgXKu8xkFnWfw2U",
  "key12": "q8yZtuLy4CZWuJjiWMhd3iWnDmPKDus1WKM9vPzY9vry1H3L4412Ggk5yJWgXVZF4eWZ2oFofxC3ojanQG13nba",
  "key13": "5GEonp4fFy6AKDoznbHmr8rKW95SVv8uTEmQJTYuk1HZ9vdhXdVVSeBWqBxdyrg3YUFsDzNQG8m4KprhEzC1VsDt",
  "key14": "2ogfFeUUiFtRxW537kGqfoxFhrjth8EALTQB5z4B1VaABQ7gGwUTHPEq57aTnuoUgJ5HG7DdAJp55cTLHJ5h1eFQ",
  "key15": "tNazt3qdJvEPj9r9jkSwcbveXFsp9mTWUMbP8we94VS3ai7LcDRUEGC2HhtroGQkn1jACbNzywBTDJ7nzBSyGqf",
  "key16": "5RG4k1EVUa5qtkHxmH33ZS39WZqw598TggUn37hr8q39v1JM7PurFcX4FUq8eiGNNxb7BvV9Hz45BLKMSmQxorEQ",
  "key17": "4L9foZmECEDZ9jfL9pbpXHJtrVjV46kUzREZcwZdieJ1Be3gd7UqAJYCyTncg5sZoyhfECnQgShEwNcYV8YajmvC",
  "key18": "32v4AwrGXs11TM8hA2aPcvS1MpLzHD4oF5pSQzNUE7drr74JpxZTxKqXSPGUmktr8gJ9ixPgACh9f37gJgeYYMYd",
  "key19": "2NkgR5hoVN2VtFw9G7eRakV2rc2vD923qoCL41aJLf3LcX8h9vzMYqqwjn2fb4pmRgtmf8kGm2LVe86DmSpR5rXS",
  "key20": "3AfFFrLmVgSAQJJtp4cxBus7BeG7TYuZqEL6Z48xgRt5C2y9Gp5ydFsdHTgJSj6a9HCZEDCi7D36LuLmSVzm1Dor",
  "key21": "ZwKATEwGuLmJkdXKG2mh3KKxMSwU18HRCi8B3CLMEMnLCiEJTNXp1iUCapD17ih9LCpYDiyRDrdTyfH5gUtZCro",
  "key22": "2GnyMtskmMfLiqDE94NXhsJwoj3zecarJmJXYGGF8M1AvQLsDqGZTKgVj37RfptXfkByJFgwkze9ETcgwvvHnkm2",
  "key23": "MyC9Z9GGBvTBLjXH2PoBepFFJGvSruY7UMfhu1nzKzAW7CjqYC9WgwSEnHozbLsMmN4tjwXXVHFBm7vZKSrt1jh",
  "key24": "4Jf9VbvgtZaER41wyNCM7xqdvk1hegrBMswV8Ja9p3d5bFwSrYp1qTGqdspfWrPitYX3D57ebdH4oDgjDna6g4gc",
  "key25": "3BpQP18ZRKXNdBGaa7bCuMSUfsL9TiUZnCGy7SC7md47GJfvm25xW3fgoPyUBsCi7j6DpNeYZFpT8qVaCSFMup86",
  "key26": "2ud5vPpLoM23gD7R9WHsimy2pe55NMcxwPu3dBfRD623NpETvadMeXmpACsX5PemB7jjBCtTgpBWKvV5hS42bqeA",
  "key27": "3TDGLrgqSuv6znygYyoptq3QWeTXDXgSL9YfR1RouPRhpvRT7TBSjCsJsGwxjrBRbrfitw5nrZGKkexc1G7Z5J7F",
  "key28": "4UL44ieEX2vV37dHHpuqtU4YR3tQgD7jgDftEFzVZJeAAtH6mNhtnKdECwQJ2ePhErTeaThcuRnYmbgFEkRvAdrc",
  "key29": "4HGwhQXxPuJ9FtwNdLie84mc8PiDq8tv9GtMsV5a3i84jrpo5jrEJR6nYMM6B8voF5EesiKBcDEwvZrzkRQj1v8f",
  "key30": "J8pTRSCK1EevrLdufh5GDQTx7eXie78sbtxDT14hJy4Er2f9spcpyfUwZvnRLwL7W8Y8PDhV9NUDwtYmYS5yw5B",
  "key31": "5tjRkSpoiM88LLB2GUYtMiCgtg4q8VDAH4gGoaEpgF4NG9S9pfmYiak3UBADH9yYnkKAhXFsBSjm6QS4yKpvmy24",
  "key32": "3hM9EwwFJ4DekNJUve2MBhNsRUkPZtRWoFAPRB9UQeAQWHSpMruF2Ur7PTatMPLS7L6HFtHYuavjcY3Tgpiorim1",
  "key33": "3f16wygkn8yT8HkeyEDGmFZB4YhaZFArC7ijV4TzURGzs1WKA4xoDyQRwwNNQqz3WATcXC8JHHm4HBDGNyjG2htf",
  "key34": "5cyXrH1wbAMh7Rt5jKqH8gGqq5629UH2PFrACAPSSffTaNho52Jm4YNFRCTiVaB1F5x3ZCUKocUzmF9vaUCurQ5J",
  "key35": "2NvCrFMh82i4sMtHnKYRSNW6jWacyn8Nxo6PqyH48pS6GU19BonD9vSWmfS7LGepEzgkgSnxeGXc7ZD2CruXpKAn",
  "key36": "2EfB8c9ySH43qfq4n1ArBHdS5bfApfderLGoDxANF5aRnS53GhscHYUdDtPUdXfD1mFKTgef5hEL1S41Kp51wdKp",
  "key37": "55XPVS9iEgRhGzTDoxuQVyAkR9S7nANuc4BeG6CJoLBgKJ4kQqm1bjffDRrXzmcKBtmfxybXEBxY67C5BNBsUCca",
  "key38": "3J6DoNMi83jMzXb1SZLiGRDNL8f7EpFcgcoDNkGRh1X7JJXjex9xoihy8uQxZceF2jVHe5WV96WW36EkY89VN7vJ",
  "key39": "5N5vaE74fZQbkLiVCBPghaKifKryTd7DuBgLQK1jG7xzv2dScDyyYSppKNyc6iSEhT9yrEmok7XXPn5hrKYRUGsB",
  "key40": "sJ9ELrHekiZyzBBVxwMmjTeR9L46i85m4MVetGmyKtEfw8t3KnqMrJHBGFnVE1WunDeMTZoi9s6AJoXqB61fTKm",
  "key41": "5bhRwyFEVsCyJEGnju3K9THqXxZgPrTw3wQ9hHe7o39LK4YuV9YSL9fG5BbfNqqo3hnsdRKeAPhbnJxKxDU9MhV7",
  "key42": "5dt5ePg8rU1eJyg6RuyYzwkZX2YA6SknroLXKNNBBLrNzkgWYfHZCSPVwwy31XRjPczs9baj6ZtJyrJpJzgp8CmH",
  "key43": "UoMbA6icuNEt1yWpoW6u2y4LAB11mf9oC2oS5rxSUvJmVv8RoUzREe22Z3smwLtHKfUrcfam7FreFtbxhuX9PR7",
  "key44": "5b3QoQ9wE48DmGsnUqVwBrgZVEC9Cxnm2esm1rwqMpwsbaUYMhRnEBNtTLzpbVmLenHXQuNnZTBynyBpZC7W9HD4",
  "key45": "5KmDL9TcTWJcVahwDSnrAeupuKUXyuw51LbMeftFyaJ3VEiHLsDAMWgMb61bDwNzaP242PEH2dzyYnMB3Lkt9UVa",
  "key46": "2EMMDcugdiBbrct9EBijBg8oz8LZTCYvdXMG3YaEqTTZ8kgmV3SuKqYQJDbXXeAeFYMPRiDcNTyAKbpickamTQip"
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
