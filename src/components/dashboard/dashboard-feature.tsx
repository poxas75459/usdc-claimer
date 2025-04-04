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
    "4GVTgTKtaUgQXNSayZgREnfFUqYQdDbG8P4B72XNARyXB6pATxLED3ZhXmNLmGkKNGFo5MvUbUonHKnbCXU39nSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uEiPF8maS1qh3UHfrbC8FWRBJNfKz2CdeM9nd4XbfNtz9nWyrE2rSEbW2M9zXAHzsFQohdGZmoC2HYic1soBf1h",
  "key1": "3DCpDyrhTtjeKg43CipqrJDbrDJsrXgrEQm9x8J5CeKPkYRGsSzArTur83pPfy9sRar1c2tVcgcMCG1p6RjrysJ4",
  "key2": "2nE6teUffePon8RyWxqtsC6fvGYCENaTq5YWrQTiZRuDqDC55joGkahmkNNXsKJiDtsTKG5SnqzyGR3QfydByPNa",
  "key3": "ZknByZszM4UDDWBDU15S411cuiYUaR2vyHi6VkpFSfJW6enxg8bZ78PvfwTC2iJupi6jS2Xy6Vuex2yzyksknG5",
  "key4": "4w1Q2Hzo2KP1kNyxDWgMLwsDQ4Sihf4ygaW2v1gnjB71CZtL8XjPpA1Ghvm75Je7ssMYkPsU3v7Gicg8Pv6p7Nwp",
  "key5": "3bXayuA7KCpP5K8EUQyW9q2ovs9v2tE1XAmrcza8xFWEZavfiPaZgdNTkYRDom5fiCVUGuA7tuupqmPBDq3JJ1Kt",
  "key6": "4AuM62cFpjnfxmXSvAFbCb4K3Dxfvy8rdNmvxHJbhKSNJTtVcQSd5dQGmRQPbwxS4CCY4PHbTdoqJp6mtNFQKTrn",
  "key7": "5MqsTvJVF2oX9CbYHsDkTsiDQuxND3FtWueiVQbNRXqz9KWD99PAbtas6S1NxX46E6REQAopANM92HCCMvzBxbAd",
  "key8": "TdFwbUE4VpD4fVb4eUncd7kkC8cQmX7GZn9wZSE61awtRsbRy9HdppAP23kbHQfzAxxPrWt4rqCbe8uUsSpguua",
  "key9": "5gabyew66MaH6CnZDi4pMQyfqs2ehAiEyQGmCXbPWLT3ZbFYpY2jYcFEo7Gch1zG5J1WuALxTpiu9ZbJeE1QzsFk",
  "key10": "SDUmcwXURZqtekzQiMbksdJzFZWyc2FfLyzhujfW72eupwwKKW9bk4q5CqBjwPxhMQpSYKki5TmHXWuxVxkf865",
  "key11": "Rn9p5AUkSSTVucffmxZ8X31DGGFZVGBK4BiQW4aBBM4QiGiXRLjxKjDm3MfzMeaFx3GG63bQ9gLwdrJXTp7tN3R",
  "key12": "5Pd3awXxyWANsoUhGruVxcui5qHe8fbNkoU8MTthBNqqKmi8w9JyJ6i5fzSpAq5LdaXuoKvogsvKGSZyDVchSDwo",
  "key13": "4wEA6am3oHPCtD8peSyadq8aHxN9NShQcVLFwHq15pDNgkKLiSFZY9RrGpTwhNrRkfj3yEb3T2XVC4sg892hp3mf",
  "key14": "2QKi5BPWdcLiRr7UC8ipqWpdQuZ7sncGAPwXBDy3mx7mNNjvt3RVZsA7vQ5ZJiCy47T7DEBVLbX3FV8ZBBLoADJt",
  "key15": "hzUvrVNXi8o3L329NePBaoYQGknewHqDbbWBBv9hbwvShVM4pcSfDMqRfF96SEHbMatDVfdsXCgLos5Rbn8845k",
  "key16": "2rV5k8WSsd856PT2TmTkmS3BpBt2M69o7WcvCn4UuEsZY5mSjUG1w7hZuxoBm4rvMEsHYY3fnaQhJfDmiXmGov7b",
  "key17": "4fQwag75PcwmKpurmy7B8XXRE7QA6M23iPBHStrNFRYQUGRFMscP29uGPEcMuR4uwqLwCLAzDg2kpZ81a6yyzGLU",
  "key18": "3nj18LhV3GypT7CvDtejNd9skZgfXUmo51WJbALxBc9dpcsh46hKUrp4XMmzgENzKYSVhr6vpaVdVkwgJtnG9abe",
  "key19": "4LdWmejeRhzZh4kUmXeFRDM4MBZi5Hd4hzC1rdJRuFzGt59PaDH9oQXW92iQzekUhMQBhrVhpvwH2a7BUQEsvPK8",
  "key20": "4sFdwXA2MauFDtrMZCB7EyuBr4KwZsHGmxRFV7X3hPA53rwDdyi55kSVwNN18V85mCTFUQ9TL5Z1YJFXahUXyu93",
  "key21": "2V5GhZZwLULUm2Ds4dw5gXm3cADaN7qoKc7EfjfQbGCbakv3f4rkxxjeWpfJsgQAd8dd99GLMTaG4NW5uNswp33e",
  "key22": "3AKoVQkZnGmUcB1sZ7bRKSPSraziHrz6gBtLQTtMHHbwHSwHwNvVkNWqguKbLpvfrBopeZnwRarAbuZPPoTFzSjr",
  "key23": "61ASDCVvNMNQ1P7XHyjfGNDVWJYosp1GZQDE1tNZPogba9x5p4mufUSw8JRjLjXL4ZNiZcD7h2PTnGus4dQZTESB",
  "key24": "3KfRBrMgiGzEGEt8Tq5AxmgdksBM3v9hmKHavjLh3qWbKtM21DQ39zST3Qd6Wokcxw6RqUSjSNGNv2Z4JfHX733B",
  "key25": "3vV9W9yGp9gmZjSqhpigsyFA3tCeZy4WKgJhi8e1xe6F1x7qZ2sC4RfJxnpGnWKK3b56mceCZcAGP7o7agt4ELaX",
  "key26": "35YM2gdjqHAMA3TPXzqnzLTayFT7KuJhdYjCSDR63635p7AzpUKjbPLWTL9nJ7Baa5s7Thv6Prj6ybpCof9bYGRM",
  "key27": "4EhYZcGkqjsEGEwNmh6qUHwMxZkFkfV8VxXit7CQcsYwLyhq2MEf23kaTGneLyL9XkMS1xgRtT6Sk6APYLBxxqyw",
  "key28": "4mnABTt47UaiChq5SGhPHKkBJpJmuaciyvyXGEfXcfmM83debUC7naJsjjdA8W4uiVzZkwgA9SWVC2gsuKmrZ8cR",
  "key29": "5C3THCa1q16k4HHuYuy4n4Rog8NzuoJuHCSMqLcSpqtpNcURo48x5emomFRTG3pbGGV59yDp3RU3Q4v2xkZePA5m",
  "key30": "2iriVxoVqDUtT6KUcz5CCiBEmn7NmYsndLAJj2nzzgRg7frWE6dDRZ2hJLvWpafdgN3MH2KmoacdFsPk1C45D5ua",
  "key31": "4ctbubZHbK4pADwJfVbsvZCuKioeYcQgm38E5iQxheHBXmEmWMWeAyGiNuSCq11NAQ3SRhs2spwfQQjGJ3opidfh",
  "key32": "37EZvjc1YRDdmvZzWECwSTbwLzcwfHzPwuVJYj4W3Je2e4qhMkuivDzK9873EdaK4HPuedjPdgzSzHc4vTYpxdBG",
  "key33": "C2YUtQsbzyHT5p5nmEdb1j8HJJ96fkrPqd1VkpoVdmFnv3J4PuRsnPjw6ziZs3vqfKGPZE4cmff7viFqWNvAtB8",
  "key34": "43DM1VaJLgZzqeiDr5egVok3a9hriv4kK3RF7kzEdBG1fiGQStDg4qD1wiztUmWxMUAafVUtbWrXASGMgELisUAo",
  "key35": "3zm97zrFJWNUNo3F4RoR4G4xicQq8khxSQEt6ut8VtqkA7wHDJ6fivSBGUYpwKLBdgMBYZ5TTQUtBe7k9ZC65Q6j",
  "key36": "2gUeapM4GVyXrhNLHgXJLzbDng6TQRmib9iTnSH1X98BGNgxYXdPCeYfwz5SMHM1i1dmP6JitYmUwnF2BJA4BUYb",
  "key37": "reENwjSbWQcXziyVdqmubvDvH8weWXZkUpwCEYBKVfPiPqDBjsFGG9yJ1gnEEvkc4ubWAahysPu1L6Q1ZcdC3HF",
  "key38": "5T7Hn8ekKV9eYqaLjrAhvAzTwridxYaznk4Fzi5FHHzNt7ZxaXcjJBMpCqFRtUccs3ibkNHMs7AYSLgbBQ9hGcrV",
  "key39": "48cPigKaG4GuqTxPnMWJd9Rt3F9gUkBHDzqRgMxZR79RHUFozD2we384RNDywi4oVgQmxktTDD55rQ2dW37ka7CH",
  "key40": "2tXYc3sjqsZDWgH9PEgpKxHtnAWHCZkSCPHGXCrg6CpPSnXqcUWuwa8XAVgztiLYhsLkK7xvckXehkzC2vmeAnpB",
  "key41": "Bd4CCvmSg3rFxv9nPXEYquhtR8SB443R9qW37QPN15oSUGF51pqQ7uwb3YV3NU8E8m82YxCbFDAHTgnuQQQS2Cq",
  "key42": "22QmynW8pj5uRV2knJPYpfAEkJ4ZhDDLtV7S3L4RzfPAX3yUFzcnjeMXiE1Y2rGhFqihX1eCDtfzxZBWK8enaEXf",
  "key43": "2xLtYauHCDHrv5TQacnNvnG75K3QXqoKzYxf2uugJimb43eMuvobwW1x5uufTg13zywv5nxhF4HVGdZ5vX3hZezL",
  "key44": "rkTbPrANAKBb5PjYHc4J3vEoWf5bpi1p3gH7s7JXZEVtRGDwuDBuGJtsjjCj5yMNjdehQnjHrv2XGjAi6xNEkAW",
  "key45": "sZ8ZgZtTBgWpNp7J5GWGFAf82FCno3VNAop5BRKpFJDKs2KYAbTEpazSvNj46b1EU9KEBb5ovv1y6HrvDRSRbBM",
  "key46": "5vUT2DJZgNkUxVgHo6kUynFcVYp1W6gyBLYBmSKLvMC2p2RMCqBdnbwSAtupKKpedjx1pbC2dwfthWb3esvW7epz",
  "key47": "4jzfWhu35f5GHDUQKGbwe7wjRyQR4SyuAJFqg6aru2FfPU4F4U2LyokNrWVpsTL8kC86Fizx6z1ojyrtHfmJW3uR",
  "key48": "59CMJQoimxTCt65KutbJz3njnTkjeSSzjeo2ypiCqXSGcPpVkZxt1L5ymhPbiLt1yfiR9RFVeyxiBysUTzGxSKXq"
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
