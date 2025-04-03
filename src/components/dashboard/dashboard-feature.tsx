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
    "4DBYrjTZrecAr8q48XyNgKpasS4E1nY4ZWqurWJAMHKbYcsPTuCPuPq8WmmYABP7pqsZd5kRUXkwGYqpVByH1HnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3Wu5JZSrz6vD5WiXCCaV2wVzWz5LceVBq4zrajgvu19RqNtuptfaBCbWYwKqAJdtcQdxtNpEPhWhueHFtCC3NA",
  "key1": "CiCt8JYAb9MD7FVYRiHpyDSgRDWcgXz6TtmKiBwDpVHZpzgpVeKPgcjzE1JSqyMHa3jfRELvhdKx7FxXxnj7A9o",
  "key2": "4m49N1bu9YLGrz4peuugHCeLZrrsiTnDbGPozB4m8EnqFJTkccSGSnEqfGQuNpXFaYnnFtf74pMD5yEip3EQnbD8",
  "key3": "5voMfSbanAUqTo2q5jEE65DLnUQCirQXWmf5CTKjYze8747vBY2wXkTDZdFBYDRUWATdsApehEwgpKdeTe9oqKLu",
  "key4": "oxf4bYvVLQ4cW5oT8x9mAQfPtaooMc6qWy1QvUABfvm6c7UFeLZ7MZjp1p1bzhUFDeM63HjUZpnnzmxaYQKwM52",
  "key5": "4qCwti7mbtfakNEjN5MXeN2wWpiDhiErH8r62GcqWBUoWXLnRg2U1W39KwBPV1vwoiPPy2RHCmTM1YF54rz4b65R",
  "key6": "2BQhSvGdg3MV7yAgC6XvTPymCPESKbJeAbFijQ9iFhkJxj79yT29VwQ67iT1ccPMqcfSs1SN99f1VVGFYuECuxJ8",
  "key7": "5dARVQUkHq5YddBBBV3yvuLzqDJe6xivCFzTgwVZhG3YMGw2LAjxv7oybt7cX26iD3X7ihym8msTBY7SLv75C2t7",
  "key8": "2pL2byxFMU2iDEtSV44AWraVYM5hNYAFUSJfqTcj96JxQzbu8rCbQWCmWWX6b3T9jmUrwGvrQVPUiVYLQP1UPkfg",
  "key9": "9YxVVuW9hkddf4yRDD3HMXV67dbrad8QqTsbSyryiNQea896DG2qzD5y6BdAbtX37y1KNU7C4gX7aFY24X6mRh8",
  "key10": "4fvgT8Ci3UxijWbUN8LAShjYnsYSLjKzZiBxRfb4DWWkxkfL6sfnHre4jFntivp5LVqx3Tedu6cmBEUfm23BLumn",
  "key11": "2WfkRTXPjz3SiouexNuLjkRHVtmXiY3LKyzuraBVj2gwzYcbw5kQJ74a8t1rU2kQQze56nieFEYfqx415mnfqJxU",
  "key12": "3SpKZiSJez5cC8M3htubEDziQWrDifmEbsv65upW6BokX33cfiJaU1soWBY7MyEbooNXMVcypbLHg2DCGVoFxKo",
  "key13": "DgjUEvvAc51AhdXqqqWUyMmNiyadu7o4E22R7WqjAtDNk2vkqiKX4ckVrw74NtNnsoF4AkWYbuMkyDKwRxoRnhk",
  "key14": "5ebyCa34qcYxcXfh7N8BsYgJMui6o5TtVc4fFFJWmT86ejvMAgFwiuUDjSXjdV9AqvTMPgLBJi3gtXDAM1dunNTK",
  "key15": "5zk2rQcFsAYeEA9wxQguv8AwAh9wkqMVLZmpgKFHURvUE5dqjBWY8r6NwaeN1hksv1VBrCpPcWqgd7pzVcViRKiS",
  "key16": "qC2pipTdaW3pMp9JxR9H85eihnhjEJwEAfVEY4pfhhLCAa8Mev1KG9pcMsANb8QcXotHXyh6DL4cDpwZW17SzrP",
  "key17": "UewsqUqL7wJn9cLxWgHzWXSUwTQnzqKJVk17kTinz2BXsYuFHcp9wekU98JrravHu3Aup9Q7ZLpaW8MVfMF9snQ",
  "key18": "usCcszTP8LmTxriSQX5AkgVhLQuYaDaKNgDJaJ9PyZCBZBSyB4wN1GwygDbyBvJpDWgeyXqxz3K6JVzUhtg4A6E",
  "key19": "5v2cgbkAYdqcd42B4HAXVuj6hhYnX1TC4kqB6bQpJkB8tCT12o1w3grmKnVChx5Fn9Uw148pCLxkdpWurmP5PKZW",
  "key20": "ATy2eKQ1mdFBB4oJ9MLhgZz6jiKAiqYeL8iB7qHwjB4Sn1usxXg7KSQTTZFoN5dyBtApEhy74xPX6jmfTaPTppN",
  "key21": "55gTEgLrxN8oqaV9TgeCMAGRir52huz8AZJYwwSddhz73n65kF4pUazuFGwiAD4hwANyRe5jZe45nNMwJDWF9b9X",
  "key22": "2y4YW4AEVMDrwHhrQLH6FJn516V5feNu3eD74qDZGnU8cMNJEHmgMFAgqEcvMKG5qNJU3A7jQWoNsvcFG8JjgeRi",
  "key23": "3K4uKAEJPzaXu63spks5B2FF7JVTTh53vGRPUrNUQhgZZTd9LDTsbRzTh1kD4u2hqgpgdaW6T1XKcMtGpHc29yTr",
  "key24": "5ujPUdhUT43p3wu4HUApgQKaFAegpvnDN8aiCXwueoFZr2WsaWK3LAe4ECskZ7kuWduwgnzH69CBXpeMYjNfJY9W",
  "key25": "4yv59MACfbW7ja9tXBfRQEpGNKASdUH8WMAPs1PQa54bxTmruqhQ5wWqaKQebHE7EfkD4hk3MzceBWwxa1BDdj47",
  "key26": "6675r79m3RG1ivgkrtCZsbpjd6MTfLUdYeBCDMwerY7a5ipXicf35QhKzNvoymGy8XsTjp4Si8VhN7DxDnaRcfpK",
  "key27": "5SgsBoTvBfEHVY4qqSpENDMmbTgUF5kTEvypSPyfyqtr9Vm8BQ6XcKr4jMJzwjgcsLhWkguiYtymMnuMtFweGbJx",
  "key28": "ftCSgK7JgX7cDPQU7qjXTvT11EH3vQzFTuUUB9oord8Sgaiyy5nRUSenHiNu2aHcMwYD12avjAFT9u6KbeKMr9H",
  "key29": "2JvuMFEi1B5Lqygd8tYjKTWkMv2SPQYUeVyQLUZS2AchFEUoK4Dv45768sd1QneTee5B9AcrW1ivNbpTzJPLxFEW",
  "key30": "NzEjJSuVESkxFPdZfDKgq5EPbVwiAeKUfcYKip9FDhT9F1N5hzbsCB6rmmWhawHMJ8vHY2ogpCjhwmyrnWDWhQM",
  "key31": "4fw2Ef9u9G7bSrH9SJbmnLb3RHC2F27D616csfSPpFw5JYS1mFBD1hDmbrXrPD5z2z5pkYdsXv97TGFSKhb1VfKs",
  "key32": "4LuJsW94xJgVupm9SdNLF3U3Yku31oSaA6jpNQJfmUrDRrQMZYhgyVs8gCpvUf3TJYirUYxcEZwU4y5C64ycd65w",
  "key33": "3AZCcpaNE2srZJbdp8d8yvPcvmXPoAKtY4E5AdAaRj1mSyT44R3xXUammtLWQKAR6fUGuuAe9SNn9uHpovHRqGZG",
  "key34": "3hdkykwDT3GxpWbPftW3Y821WjkXR68gCZAdHYguWYBq7rYtL79NNrNz15fCt45xUMozvDFnShndgy2XEdjYm7Mp",
  "key35": "2HUsffqixMBLV1Dn4YuFbsWrpg6tdWZF1XWESiEVvREGRc7egQtcd3nPuE848c2aQ69NuDVZb5eRs54A1RmVSLrq",
  "key36": "qbfsRyzXTimzqX4gMN29eeshvbT3EZRAxre1mg43haZH14EMnnfhSPHkAS9ATj5uNJdoKgRMjyTqpnN5VuLk5zB",
  "key37": "3w3UCDHvRhVaw7PEVqfAP3ifBuXMiJ4Zcq16qSXRZqkvftmAZrsbYK5nLyPRXZcYC6XcNxJyADGaesJZD5wU3xPp",
  "key38": "5HGabzrFhGW98t1rfrsmefzioTy8scR5kL1t9F8P7F63Z2svtpeH8ATziFB8gRhPnfyjbHFrryQ93ZiopWCDZDLe",
  "key39": "3v1rzs5XTWCRhhKbouPmcFTRURHiv7aRPCWdLZV4kjDa6bEhrcmMm2DNfwVRRYgmL4gdKcKQhq9SdwRtcZZLN1wv",
  "key40": "67h4mEYv3Q1WqPRT6EuqZjFYQ1iCWYXNWGgaotzuwbbNYkAxgia8MPqX6ELo8N9gFgxXgDCvVskmMopnBqu7ncbC",
  "key41": "4txbKPd9LRMgTuWLmT4FG3EeAdfCdNPbJuh71aikbHkJ1eEkN8867sNESiXunneZQCoxNApNX4WZUKbcxf3gS2fP",
  "key42": "5PYAhBHU6WqX2eXUX1Y9ZSUSL4Szi6XfMPHVGQQm8hDAAKCqXMzyjBEzSU7GGaqkTzUhCkZpedfnHQGMGbWjq5sk",
  "key43": "T199jx6krkfxmWiNbyZ337NgWk7txNCJGWT88QXtwAp9MsuDL9X8Yt2n7hMnmhPjvMTrfbKi7JMU5EXeEX6cXZj",
  "key44": "5mCkUuKJe4N7sY4iAPZgK3arYcHm8dZr1qxU6VFZrUVmNGwaNnDKntHuoZJahJcmUkoDhVoSX1J9z93ERmUzrhNY",
  "key45": "UX4bgMhhGPopiqXzz4jyFKkaefvD5TdNpL8ozAzP7GG6v6tNT7EChvsuXsPoiNQ4uq42dXPjXHA6b1cf7vQDoHM",
  "key46": "3wW8bvogGFjoGLr1mcKgFpeyd3FCpZza74jBF4tp7Lr4CwbpQBxpMNi5KU5kGtMSJndfHHj451TTAXPwkPzryjgQ",
  "key47": "313raK9jwbxcDfKJyNw6yaK457ybLq4SwresrpRJ5CQveoagV7TTX2akFaEnxBaLeutp2PirpihiC6wKft7bXs6P"
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
