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
    "vYQ1Hy7PJH7FFGdSWS3Fka55sSPJRuUaQ24ffrkMT2CAR6zbPvtEFehv4CGZjtyjFUGWyW2LEXgHWWopMcjajj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JARPmedjATHBYX4k1BdjeoL9yef9YkXHk8ee1HQRAQiV6rsLz4cvavGA7mq6uvfJib4obZ9NRBePVaXKZnP1Au6",
  "key1": "5yiYdxmcV3SgoBT8p76B8oXtT9TsGPYx2ry9Dxby3bnYNYxDFVyF66QuTEivD9VSffcb9Y8HVoDimHgzCpkWHZmd",
  "key2": "2Ux7HWUNvp3cSxePu1fp9EQqqfGF7HcQ5Rjfgh5Dv6WAfjws2QCSwmMWkygtKnyTS3Dp5XyUGsKMk3stvFyb1zf4",
  "key3": "2WNG1VuU4xBmCqLdXYj9EpDwFLy6CabNZ1a3MGpPj2bvcmZovTEYNEnpBYgpNPPydKSuJhmHLZSZG6yXL7uzLNSp",
  "key4": "ztwMxTQ8zQLt3rZMinRxA6xFBh8UTFizph8JFS4XKX8v9b6LBR5mqjcJScdn482PiR8iTBpBMQcxGfeZ3vyiwge",
  "key5": "3sEw2QjPxnFFooDuXiaUAcSgzur1TyFcLRgrsPjBhmgAS222VrCgjqawtVg6N5Y2KLpT6QF6bd8EdTWD4hdo4yYx",
  "key6": "2vvkdULiGUmFnRDbDWoV3kCs7kvUmHzhYvB1ynWC8XvobBEhCRdbUsqYdWfirFSzSS8g9UEgEKHNPeBgjhF1SvLA",
  "key7": "23MaAzJPAAB6oq6RQ9L1VLnatDoevEtrfmYSC83cEah7pFXdaHCLWJwkNuos6PhgAsrqjtceeWKCEebaaNXPmTa4",
  "key8": "5cDuXz1LRcbunZjVVQhihoL6LUbGWb4EBN3C2eDTry2yoGzghVaGcfQyEAfMYLBY3cDVehRATKSk5xPnu9NMpH4u",
  "key9": "5iMZnviV9KqtTedyoBzSv1aARkXDCPuMG1vYEfq3dEqJrKF9CGXYLsue91meKVDSFMTgnJcFnWQNncu4Gn9b3vVU",
  "key10": "3FE9qQfgyi6t5gVVA4Z5LZMo4RFoD6H6ZaVgjo9ju4sX6i1M5J5QSW6GgfCJ6j4RJ9VZgLzL2vwCW7mXzB1AbfaH",
  "key11": "5BUNyAkTKg8c929LB7JoYCpsz9rUQ5qL4wGefEZ7EjNk8DoYH64YzQxqKGX6FvhWrSX8mKceYCEeBJp2CR82Et8f",
  "key12": "66rBzsW9qJkxs8S6mDeYDnyDwq6sgskaPj4S2swFBZe9dD3yBDtEuEXvpXpSYbGJRjL1WuMgdoCBW2DZKfRTsA6j",
  "key13": "3E7hUeKjUUSA6F9NEKCozX7uxVeYg5jtws5pV8KZUcL8zs8kLp6EbZa8615vDY1it1BHpS5oVv5xbtAVitTb2WE7",
  "key14": "5CE7RnMB1Tur7jquZqBUa4iVajr318ay2LEaTNPkWG8q42HcjXn5uvoCoBUvvZ91DQYxq6j9qXtvrkk3fejXUF6X",
  "key15": "PekrbgFpJeDjwGWmsuUSoSrSj5dZaRANw6Y3K6dds459hHwuRMiQbJ3wK7SUrqFyngzDFeYzVFc2aNVv1zSur7K",
  "key16": "3MQyE7TUKnk3xVVtauRY6s7m32Zgbewxy8YFGydUdZrK5DymZPnzcpN4R64TawXzirtxLdC2qecpxexVrTAXinaq",
  "key17": "23M8FV9hmoosn17SXqexusbZtAG1rSS3FXVhT3mJ5GFZkZJckJGpDmwcBX7thoZTTRCrcKbzkEaSFP1EbarhMa1P",
  "key18": "2efcFYuGefd9LZJTYtPmGfbdjAhZsmQnyfgvMiHXgEsRibZuhMj5NQ9v9TxpY6xNcGbHCtFz6vDxRtxTJLDL6Z2t",
  "key19": "mrsusgihwFpG9pZy45HVueQV6cftkedmZM7qmx8dv61ei7MioycoFWoVhVdEtEV8ZLjAc9BKzrJ1vnHx2qNZERH",
  "key20": "9w9hYE91QnnByi31MS9i3g9dAZpiKAAtv2LDjrzvWcYYZgMp3Pp6YWDnV1bm4ggBtTm1zc5rfQrzJynR2H2DpT8",
  "key21": "4WnxKq2kUQ3LXvpnABqzVDvqZmsdLprirkN1VYG8p1goM9H55zJacLfwjVDisywvMD2TM6RMhyQxd1VketMa1P88",
  "key22": "2uVmcwhcmNcJPQ145ywx62fEurcegoDmFaE5rQ4J3Lq11Zfm1XLg2vzRXsHsN4135KNsakoP7iiH8JSzUeo4SXKL",
  "key23": "35Tm3xMuFxJh2dhF6ZtsqePgL7TMem2CGpjFcPQMZv9byP378jUKFNTPWkpD214yyG2CqnfRHVJthNwdKC8wA2k2",
  "key24": "4zmwry3gQFZdD2nyAqs6eS9chSgQudahKYKL4ZU7AzB4uaMJgaFETqWeNmVCcMvyrSmcu5cYpFFYThgTEC1iPfqr",
  "key25": "4GXgvpeFTanh8it1XK3LbJtdCKTo1qe6H6AZqTpjDN9vztWbirb3dXS4DeXvoLy4fVXCEYnMmoEYJJptdCyHxfbd",
  "key26": "3dK8KDAyaWPcoah5PzBXVuuC888Cwv9jUQKdSeJp9Kmv7D5cv9iF3UGF6u6VfdPCXyhJKV34bzXSsXCZ8Atax7g1",
  "key27": "32bCQwUEs98pQ6hZDzxvRmEBxLMyHnXPFtuRrTKjN9NxXGyrcY7GhwTqrPLCXp6cxgFDcrq9u4u1ng6jSPgDSQgM",
  "key28": "4kWF9PQRRwmYCwuJZLK2zg76DvbrogUxq82oGPptHFnG5uWoXeVAv1ZPnZsj8bEHAqfGmaM8rgcHKYtQ763Vqbio",
  "key29": "2twTfSgbjmDqamhgtfu759iPnTmxsDin4EzxYHR3xco9Vw3yWuHxBXmtSBLiKMfFQmEq7aAwZCvU7FcmnsXSJGPm",
  "key30": "5kzcsttZXb4e2Sj2qSTzAdoirKoCQxxwSQAw7axY9X4Yb12BvobBVFixRAvDwUWE3w86AdGfHnt1cPQYtKUWKjVn",
  "key31": "4CowkNyme5NvQzkDYHHhgJR7nykyoK1cKnTcpZD8eoYA5iAKYzC6HLY9Q72kqxsAhJW54oqT1NWDXjvKoeGZA9bk",
  "key32": "rKNe8ARY6AdTvQAcPrBh61Pem5EhCBVtFUuAuMfFoH4NqU2GUsJtfiA6eLMzwAxCa77NHKAVQt2HmCkGyaJfG4r",
  "key33": "5uHBcmk5T2ePTAhVkhy7sCo7VLAY4SrARBTYoK7cMqFot2o9DXHmdQhKPDbTFPa5WZtjoPtGBkrp2AfrM3WnH23B",
  "key34": "33HVZtAdqtmLbeTmdgGyHaJfimCvDVPARw78voZzJACT28cDubUNR1yGazwEHx2fsNQmFEbCYk3q7eBAPEQ52mRB",
  "key35": "2P3pDM4Jp3qVyn5LcNJFVQtZCtwxfHBpkygcyaZgMdYJJ9B2Z8vPhBbyLZighPr5ZiXqnyAxTSw5tfjm1X8KkZt8",
  "key36": "2SmgqFKL1BBANC9gHEgJRZ9xsbtfJQnMZfpNtA6mu6q8SBa21SxcENX3JSrXzWvxecBtB2zXq53WMPcBXJSjtScp"
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
