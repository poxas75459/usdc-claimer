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
    "65pYaZoEWbGdJ1MBpWsMuoWet9Rh5eZRXfbQ3ZgYp7J7kKdkkNkiRoWZqe6hx9tgoya4m6Yu1jAxWWFHzgzhU5sS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2gKkKvGVigeNqzYcjkXd7c4jDRjbBu8CEZj6RRsPy9tP4LL4LP5fZ44Hw7GTcd3LamEmWQpQ1z8kNF67TsbJiY",
  "key1": "47huprPXkpJY7HMkxe82MtL5yBKeTmkVubamnQtf6SzY926TVU7Wr5WAdQ6pX4mPjwrV2FW6vxGWRo7bmzwU86uF",
  "key2": "349ovxPKY8hSczEyWujiuNcUiUzN51cKX23vjE76gVDy2k3LH1BytyHRYMk4Y1KuCq3YLS9aLgAnSkBb15HgsCuA",
  "key3": "4bUufyVudFB3DSNWcNoXDe3vUTUvXktx7BrMRYNEu86eYVLqCkxLcQigWZmyfRDcgrfXRTfnhvzW254m5fSoq3Yw",
  "key4": "44LNAMnm7KvTCAQShMahph5nVWex3yhQbwYRm5xtm1hP9pxcGDXu8cKJkk6NaJG1a7cxjvQSj8uAmym5RC5VeKjc",
  "key5": "5McRkkpa1CdW664qWS84gSvpc83KbueMNx6pe3sc1qWrWNCKoq8mqsyR4r27LrMD3P2wJvc2a7rvGnWiHQoqXxVq",
  "key6": "4Rns8k4sNHfwGx7og6BBYPuJdzUBAbpwuJEb8kyMjEHoFjtwo7cFDhXZHSf5CJTG5DSaNQzEBwhJuANsvmG8wvfy",
  "key7": "2fSeTNeHzn3rGxPaS3tikpEZFZRT452aNUFz1xiWVG5zEawa5xMiAL1VcENytpDeQUaHkjvs3wPmhXiz3xfBKL9R",
  "key8": "RLdhkgA4TZvok4j1maz7XBdNyK5rxKwR4XYvGQkuQWZ1KckNST6sf7MqyR8j3awu93ngAQZncggu5rbpnzKemcn",
  "key9": "GJ768Ebn5QvtjPoQzRKTHFE1AfHKkkCXccUMtmu5JTZfzyfUSgJFtD8mBzyJa3TUqV9vFDaJkrVZfoRPVFTHFiA",
  "key10": "5UpFDzR1ypMLLZ88GaA8Vq2WPdvyFrZ2rkvMAhzNBKQuHdmYY9nZUa6WAroqeLj9RGXnwxayuoVr2GtX3wbtSLzb",
  "key11": "2YxnXJCotWuakHgyvyCfqeycUHjhJ5fHNkqQoEarui4upERcrF3uKNSCdRkfcnceN5Dumxjwtf8UNwhQcw9s8t9F",
  "key12": "2nJ9ioTKXFMtRTTNwycDJziYCWmY6vxR1wAe59oogFBMSTXy5cEU1xUFtTUeu5PRY7L8cej7LbDJtHV8V3RAU5PH",
  "key13": "5nhUwg14a2efTr6ZFCZFiGbpQx9wqnfkxGFZoPdnzho5SsdzxhBZ3HTU2L9XAXqEB5hKMXRugt6ZGG6uPaJcA6pc",
  "key14": "3FQ879s3nHkHuPXoN8xLrQwWz8HkdEmiKk5Wv7KoQTNuNxUysuNN94p3Cn21aHjB1QBgwuDRYvbYm8Hb5jmzSeBy",
  "key15": "3kfu9VCKv8pvFrosJpt5rDRrd9UfSspaKPYnjAtkyZbejpb6UoBQ2nsifD7uT9fUMd7td9xCUc7MpvenKC5ENh7f",
  "key16": "5LHz5KEMZhF8GkBk4DTZsCXpyGBNihKFn1qARdab58os8Y784XtNwRS8T1ZHgrr8cvmA4nty5GhuJzTiu5kpuu6o",
  "key17": "4f8kyyETQapH5Xmhf292nzWswoTpiV6FqUjZc8VFmh4FUSmMPQfqr8UNWNdGry4SK8ZQPmwV5JTjoiv1bCmdwVE3",
  "key18": "4EjyqeVngM9RkEbjXgsTiCy4F4LT2My9twUqycVn75c2qy9SVrB6631h8vCcvCuthFDcTqYEMzyWfLcAvWEzFCVW",
  "key19": "5VexsPCfSWfr4eMKCqgvx4WDsGwa1VjUaU9DPgmjUqHjwXz3pdjAqzhHbtu2gRfCLXZrm9uWtnmFoubtitxSSMet",
  "key20": "3Ewb1YmwEjSVkPZFnFAZiCfxjNFkGaLuknRQvwi6QwithbPtqP5BvD9sunezg41gzszpFDv7BzaepoWzeyzmwtF8",
  "key21": "22o6Fw4j2tVWVEMsTK9yuf8yGdkwJpbtyJES8XUtETwu8tbdxbE8F4ZPmqFVJXz8FKgftQdQaiDijUEoBunLSxe8",
  "key22": "43qiUTMskrY5qtsRs3XmWowKmTP5iTN8x95LyRKjT3KaMwqTjo5qETud5TUosLtveAP6fsoaqwSRY1WPjFebPcJW",
  "key23": "4pFz1eqcWG451CihU4CUgptqCwkZi44r4WvTmzn2vQuzLZqYqxSB3tRZM3Pe7EhUP9jGm1zE4EKxNcg47SYzEvSd",
  "key24": "2NQjRZpn69wKrjiD14JpZijqKnZrhzTzAYtvdDww1zLtkFCekMM4s5BK4tCzyEaLUsp582QPpJH3qV6eb5Vm9eUK",
  "key25": "2kxJxieQ1A1KDfKvwg2AafvsFkurGquCTFX1efhzH3MvaKBf1hkZk7WAdQDGJUYbstWNz4T3i1VKSG5EQF7RgF6f",
  "key26": "2CyPzwLFn3oZWJvn2RTiiEUVECrXWN2xDWPtEHkpX5m4CU8bp9eaNfACtgkU5xM6n9oVZqkp8aLQ3jyUfBS45CET",
  "key27": "3VSaJDLijuoaJoShtSdA1MPDPwqWUbkJNaovV2Z8jSWrYmBd9m1adr4Q5VxwdZyUZTXpGDvv7TyjUwujNTj4DLW",
  "key28": "4fCWKsFaZ72M8iKozwQUDXhGhi2Juj4RSN111NZTkWAUJsVw46rJzu38NxL2tpHUidrWu3Z2cWeQw8MRSy5CZPed",
  "key29": "acerre1e5FURrqVeLXngb33Z1KWJ4frbNhdacwNsQgtY2sncEtmtbGqn5rUAdWS795G2eQHu28AcWfK8W9Unmcj",
  "key30": "2FHgHQPxUZHz1SeQHnyNkL8WFYhiDuL99xzQL6CSfMX3ZDPGezH9zi2TbiHBRebHdq86Xy68prEsQ8U53vF82GXW",
  "key31": "2v9dgs6RgHdu5Z6GgLvYfCXRjaRqZZc1er3MPRNaFFYRj3NLwbKaznE3JGkBcqdBKVKmPzp9yBz3Bsg9ouic9C5E",
  "key32": "2iN3ZvYCjpjD9CDLFJSNLgsEc2yMa5dcBk7AWiSuguQVY7ko8pbhfCiFJCBk2XZLUUaXTjfXGjwTdGJnnQMaAu15",
  "key33": "46fTnBT1n2c5fETHUGAA7gEbv4pwBoAMoJchFEqZ3YwmWqmBba6LY5qki9NkpxV74PnyLxy9nghF3BfqdFpwNeAi",
  "key34": "667LeJc9BWnbwSJo8xLpyYLuCzimYKHB5pAUR8Zi5ompr3EghVEYK3Mrpv17hm7mkkrEGqGqU7Q9fDiQRCfWgAuK",
  "key35": "L7Au1DWdGRRAkUopnh2B4Fvzzng5NPw6fDM4wyuMASnJrjTBoenztu7pdwyTqeQjUWn5LpCLMDdisuTdTsxHW2H",
  "key36": "4GeAevnjx8mVAFPv9mwaxwziX2DMKkC19PdTgXvR4ZK9Jf6aHVc9apEDd3VV6qpgLAfLPyXyn1yumg5EtmGHgoUk",
  "key37": "4vNJZxA1opmhP2b67QC97tdYQgfzKW4XxAHV8ZGsdWFVonqUHWYjirRxJj3Va8UPMpzew2vP4dsdLyaVrGg4q1B3"
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
