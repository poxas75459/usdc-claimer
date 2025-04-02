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
    "5CwHjVNW5hy3JbJ5CU3ksJYJEsVBxN2rSyvnC9noVBXPh9oEWBxeP5hEzQH8B9zXVt3pvp6kLBko92WchVLejaPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQTjYMEwbfdaJD6tgzogqzWnpmoN5iTJGzSyGHGQ64AEGcAmLP6aepAG76eYCLSdW25CY8YMFCwDxWxrSw3csET",
  "key1": "4JCi67qKNY1vabRv54fMHh1iLRK882CHSjSjmXShtokEhckgfGX5GyxZ7hYaR8qhGbKvUrk1BeWv2spCJG23rADQ",
  "key2": "4K9VHN6TbFiF1h5Ln3cxgRFR4TP5Henu9DEhzje9ptQ7pDPNDNoX5zJXCjEc2njkan9CcMT1tKyyLsBRZ1suKL7R",
  "key3": "4m3etCPkvM8LtW2cp4UWcTvbPhsoQ8qwe9hmwTLcwwwBtTw5ymfgEHcdP3Ws1NbQLC5PRucx7LFcZ866NU5fXxK9",
  "key4": "4DTwoEz2yTon5s9JNzvvo66YeWKDFsKZRBFX2DAzj27FU1LrprgqCaPVcVnSrzxhKzQya1ybDbzkZxMV5k7wWv7R",
  "key5": "2Y4x3qfrYzRHfW8rudvZD4Dtg3PecpDBVVLdu83JZi32ft8AsPy4DdP3dnSmYdtjv8Vb6NeqHLSgUBojbXFrzvu6",
  "key6": "39VqehHmhgK48f7iLsBNAwhdS9QW8Gnb761dRBXjPYRM54SzPBRH3sSt83UkLtmoSVoETdTLT2F1mDkfhSr3Puzq",
  "key7": "647Bedf38EqMnyRQZXfknn8PNyeugACDQnFq6fKXKB4AzEWeQayZPJE5gxrN5surDKBf9fhEegmCbuykjP3eBKGA",
  "key8": "vVgT558eeeEKMNGBW6z2PFDemuyGHYz1Knx7amyZH9dFnub81CY4r4QV3ogwpVhPyeDNNQ2rf1sz4tmxTis5knT",
  "key9": "36GZ9C1XFiCgHDVyieotJBShTR84FT4wEesKXPoWZZsyhA7bfBYnyr1jyTNb7Azu5BUTMWFcx6Yk1M99kYaA7JiH",
  "key10": "5eTEgCWbET1s2TFa2XKvAp1QGqLmawehcVg8zZdT59PUshURCbcF5M1GLuMDwYYbwBgGZXuhQGscAkwNMrSRwRCX",
  "key11": "2keTCMtET27LewHfXsbxBKrergA36rszD7VLRHMcNEEN4M5Ts1C8916KoNUCRFnsHJ2M1z6TQf8GBFmehNgue719",
  "key12": "5kU5Lnd1Ss2ebLuE2yCrRV3EmFUVyRjPv27J1QgjkkeTcHzSgJvgR3tWgPTJ4EKz2uYmuSxZQpqZrLnuQ9z3BBxp",
  "key13": "r5oUaJ24h273rSqgQbZ8osbqmPr84csHpTz4qFwtnzTvf58Jahj6UGteBEA4vkkAyCwhCFVwVvAq4JUr34xCrJP",
  "key14": "37atVv4JSVByDxb3ZXzFZXrZHgozyUwSJM7b4JptBYVUumN6W6tSVRC7BBG3rPZE374MJXqbGcY1CTydgTKD6ez7",
  "key15": "3J8HkNCWgwYVU67kt1ov4Mg5rfJ463kGMsQ6Qoj6iajGbvJY7PNdrKNfattvaofKZasYxFTsWuKXQrcqBFEXKP3h",
  "key16": "2ry2ooyQm9Rb2m3bi7hpdBxWFVCheeKechf4uHy63LnsSAWV7Qurz9SFs4TNYHNZ3f7mHe6VpdaqUJf957qdaf6F",
  "key17": "3XRP94AvEwfmATQktNSGt2cRh8HqLsgwYFFxvLTLeFeHenmpLWDVBJfamnRg4dtm31HU2K8fYm25H2xgsUnrHXYV",
  "key18": "tZeKjCeKxstqhWpAqKHmnfjT4fUraHPDDcs9ZASnb3gjT8diUWjSQUpVjz2vqkiWK4sxvg5qfGXcybTXwYk3bAn",
  "key19": "A4FVBBtEnGPrr3ZBT9vP6NDaFsBLHivPS2etdWf9h14z5DNxE6ZstL3xVeFcfRigNwpH4AEddwPGXYquRiGo546",
  "key20": "352T843TFN7iPhCqax7nVhQgiLYjiHRdcJmhnHBksw5wzLaQ8oYAwhK6VmSmUcTkaDDCTZ6rZPwUmvy57VS76ar8",
  "key21": "2GNWBt4bs4LdQkwYkDTU3QuB77z5w12ckR3pdcJQeTAPP7yCbmbaKNSDu58ViTw8UCk9dUQVpFGGxWSibAJCP5VB",
  "key22": "2YL7EYnRgQerrcKFnraKAja8jENHBzyA1JAw2MHjf3eDBDSS6FijcxdzCCX2CLTpSNZmQnMXXReeWZBw1imk65tC",
  "key23": "5CrcrKfoDC5ciMoEwwFebi4HiMtcSzSQstSnzk7Vuq9HwMeenydVapM8gRh9LsV7CFZHr7maQPxWTcGAzWFVb4eh",
  "key24": "3fahYnB49rfgAG1zxNbzLDjtkNDhBFTaFidzWxRg6fcwpYaVVuviWsV967Ld3e1Bq348mWqbUKV253jM8g9JWhs9",
  "key25": "2sKbmejq8rBGBpe9ofqDYwizSxX1VnYKaxUtXtNzkFuAmCmJELzAqWaqmSaU1reoi7wRj5y8kRkFf8nVCKdvzkAB",
  "key26": "5E969ZNTRjqpEtC83KUu3eySEVkAMb4KhSgVWCkFgoWXhYUscgx5w4wZuzLUxpA3remV7atWFMqEv8XUCjN1NPXZ"
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
