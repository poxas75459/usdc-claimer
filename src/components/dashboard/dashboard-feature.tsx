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
    "3tft1ds9UbMpiBC94UK9WWRtMmUvRgvEDVc4puxSkmH7tGitwnptmd82CiYghNe1e8tDvHxdsdym2vC8NCN6j6ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfS4Kcr77gGe9zbi7Db3LWUUyoisiWFfZh8kQtHVKLumUxsC34WsnjXRCyyCDStasAzNMoeCWk2d4B5DNQLYKCj",
  "key1": "5FEW33yhWsrJJqmsadC7VB3XZenSKoKKpruQAL627kwNYNHKfa1ZLoLEvG6uxe4zjRTWTCPh1HS3p1pbej22YgZP",
  "key2": "2nyBvVpJJCcfkBi3x25PshbhELzDM7LS7wpcDQryfRXYB8eTfFbPBr9vSUNjc2sdepprs8qF6HLSbR3NvLvaG5kj",
  "key3": "5dnJo4Dy5ZSQi6389x58HgXJHJxxDRMD9QSQJRUyyZqiKcuZm2DDgHkZeprzQgkLAAV8ELEyyXiifnQu3SBWDd5J",
  "key4": "5A1j9qssPmRG5qkTC54XU4E5FK5gqwzsf4D886CjKuBCvRZbHm5gpUKwwChEo5m4iuTQy9gtVAjUGLiyGhRvGyyd",
  "key5": "4DhRGsrzoDnYXuhoxaDAb4nwjpEYJcNVipZD8mXCgawMBypHaPNr56goVr9yGD2PUtoSuZW9D8ka1tjxUjwJJhwi",
  "key6": "9BAc7BrGoXqSrjq1wVeaU3NQmiMXPbraBqZPenq1KzUoh75fkaYeVhmyW92c3qMhrtbYajYVHyKb4nPvqoCR3eB",
  "key7": "3Y8wRPQTNdcrKdKjtaAsq4D7su2sa7atxNm8RwMonFsaKVK25adkYU6QBoijS9CZiCHp9dqVMF7LSqnrYz4yWFnY",
  "key8": "2YfHUXbBuFraTcb3vm5Q5EGWJfosFEF24FMMGbYRmS2BvVP3xMhcGDG9Yzff8U67qrNFgvfb97xn3HDwmNKCYdYT",
  "key9": "2rdzBadqj9MAguwBVKJyAWiFLHsKGhqDstRAwYmMvochiAXHJZyCmaKXAvmEsKubqbUWFMwBsSbXrLH1nk7FrURb",
  "key10": "5qmt81dAxLyH3rRxgVr3Mfrjrv9ZwsCkY5puaGhibQRUAPbrjEAxxhFwbyg9sC6Gk32w14uLeXVnMt1PaWEr9v8h",
  "key11": "5B3caoMCDfPYa4DzZYqvUYkELQYmPkNvaaQWvoppqqmAAB7cm2yFckZuTomE1KnSCfe8r9ksreAc24byBsEo7iSu",
  "key12": "3Dsqyzoqj9qbMTzpcUfZnfoz2o8RRjZxSdxzhCmCN31sLPv8Y5mQJee3FExF1SaRkC1SS8sYPfPEuP3J8MiMZUv2",
  "key13": "4nGzcmB6yqauXXgg9cQSDNr4vxFiXKhG6i1kSZ5RTtriTv99KzAwFxsyq5GzA6VkLynFcVttM2apCxkTA9hkp1az",
  "key14": "4kvKwRcxSQJN9SqTo8fUyd6JaexjqRkuELHNqFmRA9E4rFDtcDvMpzRzKrchdi9SckMmAn31R7zsB8RRHHfAdTcv",
  "key15": "4u17DAZkUVpGCHgQnja3xhv6DxQcBmgUsVWz4QnbZixGxYZwwpFBmA4A1cmrH7A7f787UZmDri67vBRrJYpUBAdj",
  "key16": "vieriCJqK8dKyZe1HWyFFEpA4VTg66EXfkQmKAYx4sWC1ug41UzZUbQ3xtoTRQ7L3PA2d53JmArZEQ9wjc2vo8u",
  "key17": "3fQj24KAcpAHjjY5MGzyAFGh7ap4eEdPCzWAqd4PaBbPfrYcQbGWtwdVkbtNbdJT7FJ4ZWdqCHnvVEvjgrtjpP64",
  "key18": "5GoitmJxHgbW5QLYRrLa7o8H3oUpCQuZXJ2QYiVwVs2pjyRuqHqv9D9VRvnJ6K3qyi94WEXx8cGu5ho1GFVoZffY",
  "key19": "7BcbqWfhK4848weRZ1qG7LfCbtdMK3KHgwveKnmQSXqnxxd87kz8KzXno2VQ4sum8ksnU1TSdLbaWf6ff61sPj4",
  "key20": "9nH6EUstbiFxWyQ8vZEqYUFsPCEbWXhzpvzSRhky8NSW7sy7QR2sg8U6x2Fr8asDoANPx1SisaS1ArPhBzGS896",
  "key21": "4QFaP5M7dC7CGozy3CvEXPrz66Z7yijuh15LgfwKNknNkGTR44Xf1ujsmiAWBJH89KujgVWNptwbTDyR1nzWnL7m",
  "key22": "5aJMj6BSrVSBThiVa4KPVq4HB9oETHinQDUPvuZ658x9mc1seq5jQYN2x5QiZfDJhXu4nDxSaEQ8VGYpadDQL4wV",
  "key23": "4xNDLAvoSKmmJhdcBefSco9j1MLqcJQjpv2RuxuZWHyjZDh2LFKgNd3gQEMtgwiXmb7BpWYKF2gcN1LSmq13fb4u",
  "key24": "3bQo6s3NaxDGD3pffZFrUUFnBv8xUVQHpYGRNNd6dC1NLDCzxcCv1zkukQRVU8uC4DSyAYcD5dBgwFghTxav28Ec",
  "key25": "pczKm1fo1zbt7d3fSAHkUVThcTd2jEBViXKBd2zEM6Esb1DenbU9WNT48nGxqf2SWht3d5xPfcjQg2FTb2o1b2a",
  "key26": "25uf81amv53pLLsMNejwfxdBaJvwkgXWoxMdy3eKkRvyJvqrMFMxYe3vmi1AB81hCfFVbHGAhQePVLL7nJTp1xcQ",
  "key27": "32MgooxwQb3HCx8jmY4J7R4r6PyXoqhH4a9njPBNnuMY4AWxWACnnDVBdYz7Q8f7WjsXXFEhGcqnnn4miqwQHbre",
  "key28": "5spib3aoD1iaPKX4RJmtFRB7aUFiDBmmDVNHSRFVtZECmSmbE5JifFog76Rctk2JrUJaYgM6pXo1suSfQWwDALsw",
  "key29": "x7R2Gdp5UBhbkUxbAXY3hoCuVfafreGqBaPoyamUe8gqJziayoF4vf79ZzTreEVXET5BVBpwARDZsKwkguDy7oo",
  "key30": "3Phdd38orM1cr1LLvXESLUnLszoFTa6iAaiamrXDiTMy8Lbu7GvuRHEQa2No7EHM8oYVACGPB2Z78CMEGP8r1NP5",
  "key31": "4DjM61eSHQQtGDidNfnRUoSZ35CaX38HZCWEktCyUnC8h3MBdvq8QPEpQ7gd4DaVVRjVN8USqdHJvfyhJVo8pSbB",
  "key32": "62cLg2T3LRLNnXGugjE5YkbNWKXyjVDLmMLkzLrF3K3T9PVPbjDMAFiMofix9Hjum1r2c3MxgMWULoqpdYoCtb94",
  "key33": "FJWtXgXwBL4fzz5jps9b18uXs2pcBv8Bxt437HQP2M3XrjQ7cnDXZ2iNEXtFRbUGBYVZ7QwDXShGfxtvZDovkkh",
  "key34": "3jci4iNZj65eZU9PUvj1Z7upk1DG4XmCPxaJ2FnGNeqB6Htar5fXpHakvYfPdbWCsxsa5exuT6w7k4ZLVgeCtQ71",
  "key35": "4AijfGc5fA4YypjYTfT81xuTPin6p19ivQyJCS82vzhnxERNffYZKVYdfrgeJcvnu5n4tr9W6zLgpaQsH28cWVQF",
  "key36": "2D9MvAvs775DxZjBGB12iaaqGjgciKMGecybufroJDNUu2FuGDtSL8ikvvqZigeAkXrgPDhxxxtfs79idd8e5pRe",
  "key37": "5f73jxPwGbTCnLKmotjPZpEzwgLsqmEfSxJfjXUGWgk5RxiC4XjMaEtAbLv3AXgNt3y9gqjPnYkfVZXEPn24q49P",
  "key38": "5u4rZXSq12KV45ccGh4EX5XB15MHDT2CnHrBUbJxMgMEkHTrz4etdsnm5VLqH16nFtwPCuquQ2iqbnPycAjsXKL8",
  "key39": "4rKaHZpiXarjUacZJqWnj2Je5NosEqcZUBKMmMd8YHqsjPEhqAEpQdJj9KeoFkA1gaD86Uke7AYioUDrxLz55JvX",
  "key40": "NSzcjH4TfEqTbQfouNvaRQGbssW8qUCBrqpMChCCvcSWH1oStn4DShgynGCXTQogqcwjwUpthZSA2TTUaqxPPdb",
  "key41": "yaAQNobjZuusinnZgRLaNLUb4p2jzbwcVF3jn8vZFbMdGsoAxGjGGGd11Ay1BMWesm6mzwR8oaVwZXzzF9JWAae",
  "key42": "5sEcWa3yWpc1rBqt5cRcR2R39DD5UXoQi292JwC5aVUK1HwMSbfg6ZarX3XqQUkfftPmRHKYtUBknsTA7NbKa8h1",
  "key43": "3jizc5npbb4XZ2V9WSJWGGDhZgLQLZfjzLeJ49a78yiLKpgGpgCKQ975bc9pFEKdaVZoiXTjUJA2F62VSrKRmufB",
  "key44": "3jZcYi5npwHuY3t81fNoArjtm8Ap1BsNZqfu1NLSc43MhiDvHV8zi1eMTcgpkxzkn7tFrMwCwsy6bMsSpjQnQCN8",
  "key45": "22taRcVLiBVTnZE6P13gzkXciggz96gjfKrxApGnWs4pa4WJ3bxSMcyyra9JQAdKiiFn5tNa6gmfsNFY3RAyWiGG",
  "key46": "3QbWQW1VT3RAkDYpLR6dGkWro5sB6QUcpeaQrMfAPLKdFm8Bm1kiHedZfGvbCYuK2LG55pGZfSphTmYJ9nDLgPsc"
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
