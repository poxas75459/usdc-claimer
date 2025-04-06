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
    "28mJuy7CGDGQVWXxhhoWTgNGkDbcm6mH2ChNdZhWJrDeb4vzyfuuexjShUsUXB113i5pRXmckGsrihSNCEXuTWWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9quZEsb2UVrBzszaiZuXgtBryupNHFsJkzdBdWpYSg6JHuHAgnnrEv7W7vUtVNVe18fh1nMP6hpitKde85zRDz",
  "key1": "3qiGCZScAnU2XBK7jnLsrQoyokBrCPLvj5vqmWHi1cRSJqnHBmiewspv7dTMvFETWUpxWJk63MrYehKERpyHsBAg",
  "key2": "8n2v8HUVuBVWEmDcFg4W5UCN9JsboY2b1Tob1f8p57CCHeVCqzBsvd9zVqy7XVpdubWWQN2a32wYYsReWCRpGy9",
  "key3": "3NdnUjSHqWst5GmyFAyV2xZLJ6syfUi4Zxyo93YtgqsqQbaJ2SSX4L8q16Epyp6s4CKX7rsrfhHadhCBTyLinDjf",
  "key4": "3pJKocz7EVzJCdk2CQhrUi67FmcagfN2upJDrNKyzDsHacRdQmuUFqYd2y5ySqEbmnTsXiRRpX3o6erpxLHf5AyS",
  "key5": "5yxyWR5o3qy3nkc64RNNDJrDJwJQtBvUMqaBWcdgtuayLikYL4nNy7Da8rsGVhf1TsRLjd8FA8s6n2sC3PHRFAw3",
  "key6": "3nhhbAYRZkDB4Ynhgh6bjKRBFmtU2ifJQvoVzQMMQCbCtsGJdgtPWtxygjFU8sNgrHxmECfqKkbEaXf8fyF8Tc2S",
  "key7": "ebtcFH5JZByWPDu6sBYXW75ypNh6FPWBWWe3zBEUF9G577sDCoCJvssoGCpjXWY4NNArc67yRNkVYM11xcr9JTH",
  "key8": "4S9KDUcDD8YFurJQgZWYhecvgnsUiPDnh5DCZvRKMy9Q9WZR2qjJMwEpDuSZNdhPRCANritH94sybtkJ2Ao5aygx",
  "key9": "5afBsMSeEvuQxmVVJGQ5Vke7f1wq4xDJ7xYiPEX4EPkxvFEFGGCg27q1jkjHBdufgnWBzNzFMr6NyV1JpNv3SsiK",
  "key10": "63g3p87GJoKec8ydTMKeQfyNSSpbhNi6j4Ahmfm5w8DeFoX6TdUUw9GzyNQ594o3JUswbCRkBMNCQa8dQkpyn4Fg",
  "key11": "4iksRbx1e5Uuiyfeqa7HCSNoPu59io1Q92GWC8BH4f41aPj9kqEEFW1RYiAGWD4AVghwbxSP6KLfDH1656CRkJNJ",
  "key12": "65aiiaNTnjFVRfS24Gi43aLqZ2dZPHy4DudKtgiJ2g3z3h4SossPCRTyxBKa6WQmK6SLoQtF3u9UccH4yyiKy7mE",
  "key13": "4XZGUr66DyDExRTXSNhpj8PKLTh1eNjTae3diynYTx1LCHaFbM5CeK51PxQYPL6zX1LiD6JMQFUz2FxSSYUf61pR",
  "key14": "4qWcahfKJpb85NypWG93FJY1xdX6rb1zKAfPFVyr5R7HEdGJYNpAZMi3RUSz252ZqhzCx7fXNot8tqhZLEDWzGbR",
  "key15": "4C73dyMmHZbKweVJrXEH8onNDE1EeViSjChkJRvw4AhcifqtSHw3X5rkPqwkHat1FzQAEcob7Ns2esNxxYU9mLBw",
  "key16": "5hEQT8YqHSXd2gJ9K4mKsRQ5armcg2TFQUJgfDFFWBCMEHLVZk7REsU2bEF8Hm7Dy9zTJu5CxQYac84Fh1wTjjPt",
  "key17": "5qtH2iXoM57sBefTRYctdxNmHjz5ojfpgVeUkytU8oFupw5KyZsGh84WCr9evCXJdM6kB6mjVfrhKEPvi2WTEXwW",
  "key18": "4kh3xNXotYdF3GhAjmFvEZDRoEb5v2tqBiPcrmbAb47ENjv5Sn7KfFfx3ETjYEJtBdGziEzn8ZDoewtD9xedGTsv",
  "key19": "2AgyyeUEZ9uTUSNax231wDCqYF8LcHaPkCdkXxqPRL3BW84BXykkRzSADiMtYWARFUcouF4jk7Tbv7pq11bj7iHj",
  "key20": "482gUtwFQmNUmKgwVmy5AtYexj3AJVcRDQhdgdP1VKRLWQz4RNbkLPdEZYvwXuQSdfQWQ3koh6wjtBKu5xGPEFaR",
  "key21": "x37ZvBBBuq2bBoPd3CxyrBvDsQf7dxhPSZpygJwyYDefpC942EEZBcEMhs2zsBynLADit5Rn78ZJgYWVCXyLhuY",
  "key22": "4uAavQsUr6ZRNNF9HfRyNxgREAUQekfhVesaZGtWz3CGboJrfk8NJzwePCZUqgBtifE2vnyCepHSfni9JpXXnyeF",
  "key23": "3nX3kGeKokv31ZbNStb9TBXrsimZJmtrwhKtFsgFNXgVNKwPy7UHZiLNBZMTTG8eW9MYgJuRXxZFrUQyRRZqMbSm",
  "key24": "3eTpS6hWMBsMSw3GQvcgHP97YpNwHGdqJwkvzt92SFpLtAZC5kxLHp7Ku2pLQfj2YrDoAE1wgR3H7B7tTt4nN3me"
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
