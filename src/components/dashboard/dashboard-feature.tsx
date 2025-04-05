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
    "JFwjdJzDgtNpYFow6EsbhFQFGruWAH342qe3kH7NpwY3nnd8xYBtwB4MqJkBSsr3xQrdi7ztHPCoXqgM858nTZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mqm9AFRfp1s7EHXMZAxgevFhcnuMnCajHHT5EyefyRSnp5KoG5eRnaBF6qtydfuRXgXWRoj6XJQjjUM5sQ2UX8m",
  "key1": "8Dj6RK6s5Zi5G4F8ZuMKibVpd5db5iTRbQyyCtQUpxDHsvzNyBQ7NJjsMNMMaSgefQdPz2N8Y4wMFxuusUBM5Wa",
  "key2": "43xTdXM8pZmcD2QkExh6z8YoXHzBHegu6UKbhB3MkD2tFQ4HBkP6zs7WBkWUkWG2A2MRcZ1Ne59d1FGJ5KsGHqAT",
  "key3": "4BoYMa74TqADAPqCszBQzYAdsrbdxSfgcHgor8zWRpFt3AybQj7xw4jaPmBUAFt6sTpvJ4NjCtyFSbtiu59paM6E",
  "key4": "55mSx8Jn6gjxK1x4SYt8VsMXWtwZC8dA3BraSY9BXhSawA7dAF34rdNYwDbooJJ2mrFzPmFksTGiXB6dHD4JkYG7",
  "key5": "3TVgxE2uE1eGc3ca8Cg7R46H283PD1294xb4SNJMi9ctbDUpZs7GqfZngehUz8FYvsHfrpZwczUvtmLQaxh13BcA",
  "key6": "62fLqQb2gtEJz6VH9VkHgZZRazcPURG2LuEdVP89J2EJTp2gmKjgAwk3Zcsv8biLmuFLM2ppJtgFBVJsHhwAfXTr",
  "key7": "31sKrmstHYsv7RbRUbRhcGpKE2AmZYn9pwuHdWK2nKYrXRcUQYFKjJUYrfSaRzmx5PrQs188P96VPHqqd7YDmGg1",
  "key8": "4Yyy8kB9BxhFfvJzFexhEtBA4DRnWc2vDfph8wFQkNA3UpCAprhhzQJwHanD3S6oLsiWoJS6LHPbEFnndrhCWheJ",
  "key9": "nvKRaP5u93T5xBtZPSivq2M8zbz6uGKUo1UXdh29Xqc2pwU2UpD6buzcZnJVknfQKThoMyZh85Ed975wQi2riPo",
  "key10": "5Jte5rye5yjkxfTRYZj172mX7rmVz5duh8itbVgDNUhfEetNCNvWb4V7KqCHkGPAT8yRALSYNk9HeCPfcyWT4BUf",
  "key11": "47r7gGrnfRwvhZWKnRXkDuWPueL28YrX1HhyiAjC3FBma3w8v2APEWQEcig2nA4HYBr5bt4UWHw4c1HdrPaFjikS",
  "key12": "5beJXfcKUFgwCQSF9NWF1kKsWbkDSzu7iwSg4qfoAuuttfKsLJnqqGb1wdzEbpuyHTwA89zFVjwQjr2uCQLC6fRM",
  "key13": "2mmWVvLGzpvdYiaWjPCWxutomDYQeezQZ24xA2RdzQnhY5Nf8zbE7xPdc5pNgaFYtjqKkqw9Doy6XC8vu531qmJG",
  "key14": "3aG4JziJxtFy94SguqZZ97ojUHBg1Le58ptnqAfpHjJ2Hauh4668nxX9cEBt9zD4LnxKcBTN2nQ3j3vDCcLrAwuL",
  "key15": "643oo5hCveM16QAb5nanRKSmQwSoQ8ghhBNZaqPyc3F9tT3sdj87dgq7X78pzvBKhVdVrJaNcqpiLnYjT7AXrznq",
  "key16": "4TRbtR2vbP7UjvMtNWjXunKWWX2S9m1hNaMSJ5DN6EwgTNzZA8Wt6vwjFfUyDpUnctGK1K7CuXzBEJ3Bh6UA46sh",
  "key17": "5Wdk9ajKEY4a1uhg2pjSo7FashmMbMToPmJ7r5zo5Dz5PMZEEb8kFRFjcSmYQu46SxaLojCLEPPpwBJvZqEJoYPi",
  "key18": "4XioiP2Z2BLM11VS6NowtFXXDYG6FVJjMot3gHSShb75ETtVKqfMZhxjuupEpuUjiZxA4FtnfEKgUJ3HenaBN76h",
  "key19": "2esTBvboVwpxhaErtR26VpgFR3Vy6BcV7i8es7mH8etLf3fMbgCjTmnBMQ482k4q1dwM7avbPMH9CsHRj7vpJPgD",
  "key20": "bsfo4Uf9fhJs6BcLds9fcV87UovPZWZCmvCajFy1kBy5cJ6Q3CRg3cjdA1mRrrkhYSHiYiRtAYCJ16bL8GPS2UE",
  "key21": "49eMY57vj4LtviPHtQLqJ2ZLxsifNSqPzxo7Df6JqyhwzfrkYBpuqsECW14dQJKvPmDRmbJcGX4NjRS5CG4EzwB2",
  "key22": "5QZZK9vmHBCzqRU6XRpW25eSZshFZL18AppCtB6K6DeXCpd2t1Ng7Fa2NNu8iaNobGViH3jGeZuifiH4Sd6KdqUL",
  "key23": "pzudYDyCcnBsmaQj4bKVCeMjiTsbF4HNuDeDKgGQ3ViRzUz3SBvULEgDtv6JNRjJ6QYQWD4fnmuCpyTKiTXiHsq",
  "key24": "4fvnJLze4qtx9FoouzGm8sLSMe2F2V8jdPDpY75zRevSw8MQr6PM8u2Vzys2Vt3wuUtjniwY8kMkn3mACgjpbMZJ",
  "key25": "3WUSWok7Ahj3emo6hwXThYN3xLn6oEhiWqwMcrbxsw7PpiG4gRfahWAquqwwdVoAgURXhmmWGjUA7HXxEVepcYyg",
  "key26": "5XTgvbwe2ZBeZZUxkJfAXb2QGBbJMGnjA42j8bf1hzWn2YKQWBk81jh1Rx3e3o8uEAY57ER2LG3kbQAnmoEV4y3n",
  "key27": "5f55372KNxgGdoB8vdA2DDPZcPpqT3UNarGpUtkW7SUwFHowiBjhpcBE1Qj6k4SpohVaqwrJs2AGavsD5cmxnSHJ",
  "key28": "4C2Z3UZT5zAYXaGq3bwjVdxFcuYzYPgzxYhY5eQCPkconNKvWQTTP669JcL1fp6Zu3Qfm3VkTNHzowgE7mDDCfWo",
  "key29": "4gxKpwGhiqPZ7ZbFTiKVBi3osTbi43Zig9du5bS1W37pfygoKFUHew7cDY7fxNyXA8uB6GcH9CM1RuX8jQaVQRBK",
  "key30": "5hKXT1378SgQ6dY7NcuifKh4yevsUmNY2WMwYoonvwcedzqr6hPYxALNNyHeTwNVQXForY32QuhCitBsroT6m6LV",
  "key31": "eLQ4q46754teBtmtWAv2iEeBBLtZ4KKRVjySkfUZsPHEvj5ZJqfzKYNzzatH89Zqd5wi1SnRwL9Sd9PjdrRVHwv"
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
