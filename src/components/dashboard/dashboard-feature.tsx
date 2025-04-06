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
    "2XvevTXtstSbkwec5MFceJHzpvWrxixNUTSQT498TAfo3f7pTCp3MMqPF5rGeJsGJKhbTjWYdVbaUryW1H92Tnp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCe9fvCTTrAdCiEaKAc6Gi4XsAoGEYZiSuZaQDcrRm6R94BQG3RdXkr3S3tBWPdk7n3ijkc1QR3LuxY2JiWezpk",
  "key1": "YmZeN2TfAT1Aogt9XwumT3mETRL71vTf446fZjNu7N8Cdntp2rFQuNW3XU72h4fSRYC91vzyhiZDrXbu3oU7RmG",
  "key2": "3XBKHiYr8D425hb7NgiiD67Xa6vjC4qCv3kEQow4iGnGJi6iifbMcVnZ52RPRdcsKoj4VaxyuULdFwdzVF3hE25n",
  "key3": "5RVtDPSkP4o7UHt33AAHxtGute1pe9S2iQr1eCCNCuSisiaLSSG3ndFc8CSujYGzTiujEqTbWuGk9fADek7vkSFJ",
  "key4": "2tttYpnYC23NYMq5SUtx2co2EVt9DaV4CLVaEtCkmac8LP5EoJgmjpTNP6CgbxtwdygS3hTJXPwvab9MhkhEkLtv",
  "key5": "4ArgM1R8Loq8Pw1jnzasEfnoVXdTgGJ9LKWiEYrJSn4V3RfSiVk2sWihreEHTWgnwN2o3ZQTkZFbBQJ19VBT4TxE",
  "key6": "3wLCf3ZAUqb3zGpavMJvYyEK3maap4FTYccdzazAiwfUX3zKMYTT7TD4vxniuvGUWtTpjUywDry3LFow2LzgCfdY",
  "key7": "FAKvy9UYdQVjnsiFSZWqSWkKjvuwwkpVkMX2dKVZ359X8xakoof4iFCeC2nbHZvYN2dA9fx9rgYGQT23JDdmuD1",
  "key8": "25nEHohEacCPMsfqtFJmsXyoUtBKC6YUYtwJUxdpDtr66Afz5gnUhQPNpQ2s9U7YQkgir8URmmBFGzw8JX4YeADy",
  "key9": "3XeUQtNd6bkz1Rddmg2YSGSCqKXapb4cSpBrb95VnyvqBVEvM374sA4MuuHeXPoWPLfY6eLGCZC8HkRuC63qkLcg",
  "key10": "FGjJDV9VFRnLoySassDbTyqvKeWr5PJq8Bh3HjCHvpQ4UYAMLMqgZJFvAZy3syxt6J9W9doK61Do9zfK3dUk2KW",
  "key11": "2fh41YwSd7B6UmnfWPByDrr3uB5QCVhuksZ6uwmprrYYi5xpGBqS23VxhnAbpAbqMEiCcJnQDTPN9wBt4SrzGrNd",
  "key12": "4NKorT85SRqPBEWBuXBycu6jEup6FjM7TBq8Yfg7kavc5hujMi2vQeudnFJzvqMJ6ZWzmr6r8xCZ7gu5cCWGgFet",
  "key13": "Ja3oVjkwZTrxZvvH6CdJNTGr85iqRr4osCD1wqtA9kfUxNEM5h85jR357x58Mmc7xcWY99jLSzJyQtwJFukFNvo",
  "key14": "2c9D5bn6nZbuFqKYRkLeWahouL88yGTbvKoS6UdGgHa9xBkizP6QUwUUhJ45VY6KfU9N1DfSUs6qDaTgj8ctiVhB",
  "key15": "3J3jHBNSgj4BFVEy7xbrMs6Cd12tgDwpC5HAW8ZMSW4gxYyQ2HpsabmqF9L5SyFNqaeR6qgcYbX9XVdkUbDQvcuh",
  "key16": "khtTPxNEM4xGm1KsqPX4ZacbzLqNHUowoetDJ16a2famSqUAfynCKWFHwB6WJTrprXsMVt2bLkDbqDQNg4Udgp8",
  "key17": "2wPh4QFco2KHyZLpMq9HxyjhqnvTrQGB4mFobVb6evqvRvUbzDhEqFN5SRadYkQqeHCoxjBiHutBLXmZAnRfHWjX",
  "key18": "3eauaPNnUwJGrPueiiX3mcWbfysnKrZ5RUQtM5xeMwHDZoKcUGQeo95XopVbbgB4G1drXgJSEKRm1faGYeR4nwwN",
  "key19": "7vG6Gq3uBmCK1h6LHqdq1hbH9KfJr7kxMchiU7esNVg2SXFnKSDiycXrJWHi4rvX9c8ikqg1LwpHxDSTFiA8bzo",
  "key20": "27EPKnNmDTQPWzuo6jMyiXQyQivsmNcKUYoEC3wLWHLFS1QaqU58srJ6zqzjZVrhsM8UAARmWn2mN9Bd7n2sJEPe",
  "key21": "3Fj6LEqLCCiU6LqVEcaBxseVSQZ9D6ceKNLuxcSFtKvxoNfgMYA1iDoxSLawm6CWnRRjd2CYdHQyXB4VVLRcNXc2",
  "key22": "57og5PBrZTdH6hnZ36mua2FuxemeiSVe3PT2oAyCHaCbxirRas8bzq3VGchxRHySUici5bfgKxLXqZAWJpo45ng6",
  "key23": "5upxNypcmhyPjUtSJTQSzYd77VJVKSzZMxk4x5jSnCtGoDsL9WK7MX2NH3UFdKxXx3MDfYBg9i2eWdtFhnva386M",
  "key24": "TNtQtfEvhCD8uQwVuWTmg8RZcxY1vq9pVhiQABz3JDtFfyLH6kkUjMSBhXFxVhCtXcnTEWa9vbGj9JNfNAGa4EK",
  "key25": "5jc7SVMgqnVZebHHTxHip1BRez7EMtjgta5N8ua1R3izmdVuTZRwuNN941GUJogm4RcKp3a5EE2Edu88NNbdXpFF",
  "key26": "2FfjkQVGx8j5MZJXBDEGV5xGtEqds1gAaxpREDx9DCHAhRgyHsNNAALzqrU5H5zdN3CezLWJ9AJdptRRyHDrMfpe",
  "key27": "5MBiGLcpZtVeSrQ9bcCbuygz7kyK6SxqQYUDZXFcBSz1LEypurVpejwmHWQd4eHzk7dcLhkeVfPMkUuEzkyy3GLm",
  "key28": "47DncWkfbKXSx3ion4BmxN17MBcpVbYygjqJWybUsWga7JAvPX4tVDRNQoHefGXfYV8vYKS6WCvWoKKWhk3XuJAZ",
  "key29": "441UtMYAoUXgmxxQP3szZEnvxGPdz97GNXXYpToVKXtFvSApfKFYQs66uKcTYinZUKZfVCrLRMTzqS2qKQK9upZF",
  "key30": "3kcVRR4g9A3ismxPhrvnd42LK6oPqBBUqFSZueGBZL4vM6vXr2R6QoQ9jqs3ivEgkGcCryWahCSQp5ibj7ehV2vf",
  "key31": "XQN761s2bJUhu4RgA83zx7ADahoB5M2rmWvHWPxN6ZjN9N2VnaKFRuQERxweaMXqHNmc2fSDRZYxeYZExxZbiZR",
  "key32": "5HtgJRetb5z2TaxZZxD58L1gXA21qjXbT67s999mSMeeGZeG8cXepu7gHpvKTVQaZ9j1JuKPYXARiFdpEvcFZooe",
  "key33": "5sQnPF37VmaZk2Hh2zo5rzJGGVESAFqJmKXbZJgpRHBM9GKSGfRGQ2WhS8uwgiV3gb5uiK5P8D1turqGZKKfssKQ",
  "key34": "3g5k8zxfmYeoVazuuRmxkfdWbuu1or4YMH98Vwckt5QrWLitS1gXRJ5dSP1tCNZGhY1rBvG5b4Q4awMH2V7MaBvx",
  "key35": "2xgF8uoTLsUwiNGfNso7cF4jP27oLJsDVmiLFDySA16ShfHgkyC9LrHrDtPp8DCHZ6eHsBVAt8qgqixAaQ64gEEF",
  "key36": "5EAdVXAVtsizLsaGM8psda1jrgc5LUrp71aTqjymLxQTwVr8FLrNRF7JanXL74PEpfd3rEithFvLW4JZNPvyQYQZ",
  "key37": "WgP2vY4X2jngHoPwPBTCmcDof8C7f2d2L7jrTQEuHS5CkzcXj4iXLjiMZexFLDxgfnLBkWF3kHR6T1wiMbNsmds",
  "key38": "3sYDbrANQZK8JKw63XJaGDPsVkp5gwd6rDiFckBDHvbbxQeKanywFmLDD6t9DnSMdTafcaVeFBG78ZWDoVjf7TdR",
  "key39": "2TxsQXr2sZcYUiZb6RKArD9ZHxskacXinKRwAQL4ZdGkZTdWrTwQsH41AGfAJbcTAdjfEnhdysoLrrLdajLyKdYP",
  "key40": "2shoeUAen6wEAMXoJQHdBcRHQ4wbSvcHm9Cd2HXNoc3ZD1rt6md5u9UVG4nFBwh64xmgNPyjSNXASoD4BcwMW5Ah",
  "key41": "61Dz82fKzYt7R2t175PEdu4sBZ91cP4kCFz6DTMN7yKtvLrMHjYpL7BSCnapJRUfhELFuvZYKUQDmRqY7DD1m6w2",
  "key42": "2vx1LkpKRHN7SWsq2MC6TwFmHoGCwpP1TMBWrVvzxam6oLcuWsuMt22WACFp3Y29i9eh1EcwM4sG95mRWtFDxu5S",
  "key43": "4LBkKTkTeWyHpY6mpm9Liah7mwgnLFTqdKnpq15LA4JCjY85rNfgTJSXm3Q3UfjNc3MqfVwgAhMbWCfn24gSttNU",
  "key44": "ZrvoZfRB6Tk3wz8zkXkToDKFcQDfTX1ESZUzqzvgk4BkePpc2fWeXK2fqamoKa6mRNKQhMb1hcoZTyKKCuXSuWW"
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
