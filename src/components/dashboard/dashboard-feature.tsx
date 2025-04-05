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
    "2v5abt68Goe7D7deJCB7cGXodQhAqbiLYWFjFM739ERJrsrHcBzvPbte7CumLLm3DBt7vm2rhnq9GQHwPHDXMQGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meuerVFcxpJgJzaVDb6NRodjyTdggCZ8nDdN9NmSV4z4qGaa2tdX7yrLseqfYrEx82aRqNZFBfwR1ReYgpkA1vz",
  "key1": "4hq6kPWGJyitJaPvgBtA9KBcJSfKVfLrGu3VZLxU8V3jYaE6HScjyHToBmx6DqRM7tsut3gBL6S8hz4ynfdUaa4c",
  "key2": "2igiog2aiUWH7fsqB2H5Dn2DfMfcMmhu9vU9qWPTQS5nJ48b7em3RBypcHR4Czn4dzZVNfKNwPAwmswwsMmpn6XP",
  "key3": "4jniKJtCMSRPRUSBcY16bSGskcAxCo7xhQqLvwA5tL8hQUiZAVjDd3YoSh8xnDbUaAcAytfnMn71yC99ztrdMpbo",
  "key4": "B4eWHUjwXYGqDKs8kfyakHpNiGdvB41UkyMeZ5aMANwhyf8rYKfyN2m1DwNxGehUvmhYGhEJTvKkev33Fftersf",
  "key5": "4iKcM2eJW2XDrsxsDqhv8wQZYtaKcdzTc2FULtj2Lus5twMknvoDPn8ZSgabrNSwAL8nfznyFK6SE2fxiJoaNLmG",
  "key6": "23MAM1vGxszWt5cduUzeDW829qgnEw9FYHyHMSuzttkn5hmwSL5rzy6LBpgWUKjNmfwaz3pVEBzcAnDm641XKcsN",
  "key7": "2dLtZyhQEBcxzddzQXj4tHBQ1BpnXZwMY74EyjzbBfnQZWnUjHbptzP3azjika4EsxgksBkXygcfDkJQ1ERaoXeL",
  "key8": "4tejdL8Kxe5nnRfdg2kUD7wcBMstVkvpybEjAQtEKxErGdH7CywvhKo5FTs46JXb8LWuMTUN8GJuDX4dimwcUuK5",
  "key9": "3eERPA8SxuxQaLTFXfjPYKEEX5Syasa339DZyuNEgeSn7a2ParLYHvtoXdNpL5H2wFwS8T1Jj6gK3Nq1vg1Vc8F8",
  "key10": "4m4MJwcAUU429JQsr246t9M3hgWUJundiRv8kG5jgLTX5DEu2zA1agn2SSmubUWn46W8Y9Zkx1htdSNHhuHMf7rK",
  "key11": "4rrwYrszE6puyKN7q74MvzgkZT96TAe6YXZTGWu5PyyGpzge8Krmu6powjbmGgd23u25EpJs8keYK6QUrgFe8CcY",
  "key12": "3Q1VPVDJs4pCSYC9JZb1UuhS3C2wrj2YtJbwfaMozaNyev5e1UY3GXjggZqToVKV957nXuo5BU4LnaRfFLeSfxrX",
  "key13": "57invtLaKKppAZuXoHLztfJmxKqCfB5gNVKfJxfU8zegM3hcTzjNojWk1G7LSgYGye8N5G1KhaY6dF9hk2mfnuHw",
  "key14": "2cSSidAwH3mTS3qBuy6Zkw3byUT8YH1TAF3H44mYU82qbgCjQMMspjoHHEgEz9J79sr1QwMvymDjRNmYBZjZM1J",
  "key15": "4CdYh3QD42kdbjfWnoqe8Gfc19mfuW9qtigYB5K8TAJYTJWCe9N1ahacyVYn6SjvoCUK1vrjmtgkjusGCaAe1T2q",
  "key16": "3qqfyXovHUVFiXuG5jGwoDyKygdnx1a8id51m8PRr23KXe27eT2tuziaYxDNLKeG1nndKqMUgVf2ccketttEHeR6",
  "key17": "3DX7p882RDzMem5WL6RCyuWGAhqEXkYLmYzkLCaQvKa4MCUcrR5MqVrXCuUUCQVVqNhqZnPENpKWZT1aekgQa2FX",
  "key18": "398mqPiSnkKCsdTskEHtco1qdVEeGRA6bNbhUb27GAJCE6rnn6mWC8zeRwcGTUQryC4Zj8nHaJVte55XMtURPh1D",
  "key19": "5ZUMqV2cCcaLr7r2H5XWfqWV2aQ7dkda6u4ZKwCu5GP6wK5y6cwDapL5LCH3BUw1v7faSzFR3xyDS2qLifDYYrgD",
  "key20": "2YSZEzAdZeVc1jd8x2zcKV2sfNXDYpyzXBCiNgssAcwdc5vVsXMcsJhscbQ74sTeA4LnhxrfLngU3ds2J3pxf161",
  "key21": "2mENY6ZXzMadUp47ZopdSAikhVbxfcYq6aqTz74YZmNmc9pQfPxx3474sQyNPg3QbPysVinmNNxQV24KqYC3hTwX",
  "key22": "4rSopx5GL7HANrstRt8DLT6vr6stmZefTL5DXnQLrEfBPgqiYEsP9X1Jg4fdh8xtjw4QRxMru3MA2dg3wKBTTNUF",
  "key23": "4fvREJkmb2sxipLnshqDnn5GY5TBmqTQzY92B67z5RvQt95KZ4NNd4NsryQEFzTodicauufetUXHBXNaFWAh7d8G",
  "key24": "2gXX7JAghfX1KzmHiXpfQ8dLPQmMubLJizumomy6tstLp4kF49bqpGGfjfX4p4KKc3Lb7Bh7PrtEgRtapH2CyEDS",
  "key25": "2EwcaABdWQKnWTSkMRNLKcDuQ1wD5pFzTj44dvLiSUV2zu62Zm3eq6AU5NX3qtWHa4Vg5aNahLTkkB69cywe1ycg",
  "key26": "5JMJskeSthJ5GkjW3wSP5nNwzCQTcHp2T8xsLFZkrzQTT8CGg49qyopBCgJmL3JAw9HC9pSq313Wadtu72JwxyMu",
  "key27": "2fQqnYHCYopidDQZ9bDretZTu6HMCwJYWMVb4uZHWN7DFNjxzxQkRXfUz1Q8WXiPQ2QVGZtjsgfAu6mYi7udLMC9",
  "key28": "3vGuiVst9nCwXm6qVeVZVj4XQX8m8DvwoU6Yr6FRtq5hCHHYL94VoD9u1imJDDCVdjWvJo3sjgbzSiy6wpRdWkrp",
  "key29": "2qXWLuPfJffam6hh72ducVNzcKm5Bt3ZG3H3QpAMTaVDnSth7NHNs7aBZvchFPwNio9dcM7zna7U9kfgMJCosKWN",
  "key30": "5V8fwEVkdhVu6NUy5zKBK6vWjECM6m7ox2iM8z8dxjGz4BA1ZSDsKdgvjhXq6u2nrwVWUkYG1gwzZe79drs9mweu",
  "key31": "WchZnntTonWynSRg2wdNySi7Vztf9dpt7QyUh74jnikN8WLwHbtJ61gbAMNJzBQbt4c9QSJL7tWT2XwtB4rRXBa",
  "key32": "2i8xyXVCV7MwgKJTzva65a54E4mTk1FS1pSrRsEuU46abtLUgrP1zQfKTpekmU3DGuMPsLwrUuszeZthdkrdr47U",
  "key33": "5fBS5a2SjaLnG7wSLi6PnRWRmrNR1bmccr3d4Hcwag3xRMBypopKVUzD36xAaYmQYKgsbu32t4ajxqPFQugpKeC2",
  "key34": "5UapZ21ERjjs7GDupWfnA9rSteGs1Leu88JkoDR9pGcHL2ESAyJAWAP6Gg9Gv2cLo2EDsYoa29RHFDbJwifE9TMQ",
  "key35": "64Q7zRBkmuhJTvp9Cc5XnMADNU9m8NTZizQmqKVdFK89Foeu7PzUQ5orWQPfCF4SXWBVdaNzNnzHfapZYRCM34DF",
  "key36": "3LGEFYG9HjBHjYdVodRg44m2TnSXwMrbfB61JgnCCR1HRGPUozCD5RXpy5KzZgW1iDyjcFyhKWKYeqzaewXjzR6i"
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
