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
    "63w9gwxeernQ45iHdeUU9DncEqLAw3oeNonZ4669ybPb9bN1qYRivg1z3EuobyTYKkP6yBANJtHuP2isgnLWRDDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKQGjRzNs4AJREiycmWaZ7HSw5HY9gC6p28eg4RnHsMCbWFChcEnQgiy1p3fnqfscBBc3XqLfpe84okhsbHMoLV",
  "key1": "2xhb3UcrzNZfVLngJ1MaNGctp7gDptYhnUfpF6CwxsGL8Agzu5XJwmnECkXSqMtQfmN95Vui4W7dRdjMNNm6m1xL",
  "key2": "4wfjCM6gaVbecVm3BxwoyfZoHyiPnku6qWiLTJNjsVDfdT3n8qinFv1KdDrW7twSadqPApsMxPLdhuqgbfYB1xr4",
  "key3": "5AXRuNUtLttg7wJZahvUqeVndCsw4CuJgKXj6earhF51twD3mhKuRxjMSLjhEZXqRHTMXGEfVy6bAzTKcPfLd9zL",
  "key4": "vYXi4jCLeV8diKKF3AaqWsKLojutTdi4LM4kbaZqtrLAwGwNhq9n2xLaYWocEAc8mGGNbx68aBGrDbfD4UT7hQ1",
  "key5": "3RE7KYEw8UjPdZzvCLPJfhWT62QKuS2oYPFgXLnXXKWEyPeaBYigeQ6AMLRasy2mk2gDzVyVDPyM43N7KjL3Mb5F",
  "key6": "5dLyjDqwBbUiEWSCYGKHBsGfKaSTHoWAJQPoAzs1MXYjQCtYBiN7nmbAaTLjJxgz82fiCr9STsCZBtLmnPQpNab7",
  "key7": "3ME1w8BDqNM3MNmi5FFBXh3BHAhcXbnHyyrJGgRmsxQK3TYWfxEsA37bd1TbCRaoy3bC7sRLmniZ16poA6ptK3VH",
  "key8": "43PrupxtGQTkbbG4QdUwov3aPjGECSJEtwwggD6pd99B57ZRkhRQ5w1HU5AvVTsVbS67HdtrRYr6Z12ktSoe5PTk",
  "key9": "2TfNYV5S5ahBx7fsHgZvQimXEpGrr4hPSiyhgJM6W4CyFXudbe1ik8PKe98w2F5hJFyJUQPbUnnejo67t1FmsBJk",
  "key10": "FW4NnryJ4tutW5UjMhFhvpawMzNdK7ktga3QrZUpg8V4KRQ5hLh4AE7c5Zp9qFchQWw66XshANA4VFdgZy96PRj",
  "key11": "4QysXbANoZiQq5dqufGS2zb3EfQenVa4KageepoGCbSobj7xsN5a79SfVotfuNPAhczExqHRvhGtfLHB8sAFLppw",
  "key12": "4zABhxXtwRniM5cT9cJbkE82WjvT1NfJHK3KaWN2S3pevARSENY7HnyCiUP42QkVfgbodBeGw23tFFRhgztEdBcG",
  "key13": "3h861YY6Cm517uxrGT613BreAP25zdTAh35mef9gC7wx36aLcHB32F3hjKAzwxzPdbcxexyABTrCrpN5pfftjZqb",
  "key14": "5tpe7irSVHNEei1k2R24xrBdedGkTgjeqN51Zi3CkKB7DEmkJqaxdZyejbLH5eRPJHXDpxGtwZjvtWH3PPHS5UR1",
  "key15": "4uEfi2Bvr1QCmFcWo3QaASZArvQvv2U7sHbr7UxAC7dovE36q7WaPhxnwnVQGYSABS88ifaVwh1zNK9hZ8QKxDkC",
  "key16": "2H8wP6ZksCwhBXfqEPzJfnngJXsXxysBBTfScGDctUbaJdSNRHz3PMnLEpss1SvzsDL3XeHLwwxRYxzK7q8rp3n9",
  "key17": "2AMUQY9HV2jTctK4VGZmzaaJDLYEvnm4HQzcHAkrLKuizyiDhNR6qfmkQGMtD55nRFQFSYNrTZSERv51bDn83zfF",
  "key18": "4BVob6RZaeg3fUtEp1AEy1C1YkCiFgtP7fWkVJ97banVLqCZqSsJSUPtqGS9Pf2J6aa7fyBwjyxSZRowbWkxvUaz",
  "key19": "5F1pSTNKnvxmt3M5gcCBYr27X9GxewLehWFTsLkTEjDdHJEpg15ZB5TGzjuiBNHE4nbkLt3rmn2sD3RCPVgib6wz",
  "key20": "5BZe4k6So6ffcVW3qjLmFp1KRhcdGR74zdkjHpJXifEYdCJgqhRti467erTdfaQ1rMMeTSQQdUdE2dApfhYmemHC",
  "key21": "2j1Xos2Bmq4bna2eE7bXgdcHMPkjzxtNxGCHmZYHiDoNRkAgaRDQqwzJAiABtxLrVnqp2mBDjUPFv9wyNuS4YXd9",
  "key22": "3r3kYhtxKd5gHDP7zjKcVWBfs8erj2w8WfRHKz5DToviDRW2EBFjRLsf8f5iqswS2cd7mSTxK6UYNBvJoCBgmm9s",
  "key23": "4gLjnv3D7KnMT7ARbnHT7TRBkzeSHoXu1hseQXpHDrq2NuZpoSSofuYDAf6WSRyS5bEtGpwDtYfWsyKtz7JYQJu1",
  "key24": "328mdjziBiCmDw17zT6iwqqRdCpLCnjuEcBckc2gVpkd3EGRBxh17F3cH2nbzbUQWWiPkF7nq2LG1oh7K8EBHnYr",
  "key25": "3vQFPjdm4Tfngx4x1qnZXAzeoMbmchsWMwgLWrW3M1u262yxGwxpuNm1BGxPwhCXS994TSNKqVztnJTFcX3Xqbyt",
  "key26": "3HGA4KpHihvVT3JCgck2P7XcckM72GEMZf2Kmczns69uFo5hX1fV2W3JsopKisEQgUo1t117XaT8GweRSDMABXRC",
  "key27": "c6VY7JceoDkx4Lc2UUTYKSn6uFkx3oJGAJ5B1Y2d264KjQ2rf3pEjQsqWdCody6WNaG66dZA9qfjymdJT1fiibm",
  "key28": "32Adjm11n5J5sHXNpsgTyfV6Zp2GFkiJZg3VNuJRaweFUcCTdvhQi3TRgTSwHvAgK1NQ9E6abd7cfV4JaLBp1AR6",
  "key29": "3S6iWQRME7K6P3MVDvTSX5Ae8dcZavdutK3HSz8gsAJyG1HY45CnY2YX1cEZwsMPY6CeZcjCroN1KtSaWm174e9",
  "key30": "5BGsrW6kymGM6UAQDrX6pp1F3uWG9qs5BudiFNV6URy268NaorU3a4vhqtYqYkfVxzVEpt1nuAMYyauff5AFnTwU",
  "key31": "2XB9E7VRjjgE5HzVtrE5zX2ZoWamHPjJqpaAF3Enkx6kacGD6rRBTWpPYuSq5HX6T4x6fQ1bZSz6HfHJ8P9f5hpN",
  "key32": "3DQ5Csj5TagoNU6pNe9oZ2r7Qx58gy15NJEWij51YRNpUJ8ngFLBApor4FFt8ERuULgDLiGYF53KsNZJ6LE5jnnf",
  "key33": "2s8k1BxKLEpoAS2P3rSWtxsJ6gMS2pQLkGjdCGPQ3G4QTtvHNS7F2zV3E6tKDxtGuTmXEdBDNnB3htpHy8fqf2A7",
  "key34": "4xEVp2CwvYovJmkLPjToxbb93Uo1qknY5pbaRBf8bhK8YbrKN6334obbCm69eLCVG5uNcWt5jTziuosVdpFbMuXJ",
  "key35": "KKT9Q7mdYgeghrvhPM5DSNpR6arvU4DQhs1CmFzGkQydtZM3XGmE5Ao9vNhEyZjkFw5KYYDDhgmrbUMEEvWqY32",
  "key36": "4kbmtwp1LwqwPnKWKNSCSy2ytUL8hvm9WfB5MWWFPdMshbPdcCE9Q7TGKq5AaJWtczDb2pPMnea3TvqRaYCuhBF6",
  "key37": "3n7HBxoSc5uPvWVoKPmpKvw57HUt5xHzi6tiQ67Wtb5VnVT8waj3VL6HobCzzXVXK5tBjF2BFhJGTJLzizF1gNVs",
  "key38": "2zxUVX52f7Ay41UEZZAEqwbYd66SAAgzzXUau4FfEDnHNCEBeJMjdGCsnfXdFzuTfdDGz8irmHYh5zaYqANV8gM5",
  "key39": "vdUP6EACojNW9Yx55TZ8LirHTFqiwejNYQ1c9byM8NfcwgWfBDDCWFVXnhiHdSpeMgcPAQ9AZrgyHtUFyoMDVHr"
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
