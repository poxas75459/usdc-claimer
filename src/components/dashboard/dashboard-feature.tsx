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
    "3tsAdBDC71T6dztj484uxwBPyETsgsuwEkZYEiB6s2AfcgYaQLX6g3jypJh79cwiNBX19C5Cot8nRYDZRNfzBckE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbTjrdiypSEQ4JfBaWB1JMFAFP8SvSMnGhHMmX2Vsc44iKfwc4MCC9Xb2CEQywzUtjBpETEptDUpz62z1qKtPPw",
  "key1": "2kDtNxAYVdaS6VZ6G2ByQ5TNQCa164jxYe7L4DLUbLAfoqQR2asVZwJsYMZmxfEet117D5F5Uy5wuJFqTXoY5wuX",
  "key2": "3xwN8NK6ccayak7Rqx3BDJ5Gd66QW8QVcj8Ao89tSnFqSvWUtEmg1NpVS3ahxT5thNn1QetYDo8zBCYRD1g146gf",
  "key3": "2zozcZJjGLeH2NHU9d9Yd39x7tj6Vm3hj27MpZerox3rLJWkfSPiGQd4q7gkGA1QWCg5P5NUPvCRTTQLAVt4Dj3e",
  "key4": "2JdHnV75BaJyTYYqKEDN2wf5sYLpA2AtK4pvB9oh4Wd8ULRQba6TM6ousDZTJa95EqcWYCHAdZRkY4FiS4GdAW5h",
  "key5": "3cBBjYgxu5st57q5Zi7YYopgeZPjWGGspvp2XsTL98fmWEAkX9bz1UsqcVWy8Fsu9f4V7FLmQpwnq6yzTuYaDWTn",
  "key6": "Wsj2nVEyDzMidb3RL3M5KZvMCYX617d7YMyqxiYi21W9pWjaKqN6vRrS3F3rg25fw1zh1pYrM257CGoqttF129P",
  "key7": "2AxVWdP9jkBqkCxJLPauFMgmk1zoWxjrsuZJi681FPcunnwSthaFZXURhSSvDA9zzVxNJYBkVkZ22DiobABUxGe",
  "key8": "4mZbU6V36bkuTeTrRmXrXSWqeM2C3fAFMzPnNXHTN5F6C6379s63GkWP3RbgzbXNa4vBaiySiU81X5Ue6jN3PNwi",
  "key9": "4BfBX2WxZ8CFm9Veio93VjE93aYT5oRhiWt8gDRZA1r6GkwQFmzjrBF8ukGXtRcT3n1QvWDKGwAZ4yvEuCj1v6we",
  "key10": "45jXTsiY4Y6dSZAAWEDiWwJRRYqec2Qccr2vfCFoXnSztpnkUMXuruZYmptT7Mcmf7aKqZmceWTFJSeB5RZGEjFx",
  "key11": "2JZyQSMWJD9X5JWpVp2D46hFaS2hS1HynbfDx9A45JbwCWFGqP9Nq9bLkEiTiW83zPNagP7sDFzGmj7tbeL3yNtd",
  "key12": "YaE5Kj9Fhs422yrUPFaw7Jd5z5zo46sGc18cnrfT7EbBzwmL4YD5vMHmMqezHJFnqHboNavedfNGb7CKCwHtJe4",
  "key13": "5PnRnA94RVSSohzatzfBM4ZEuJG8TVB3qah1KEsQMmYU6vRi4R5h5rfWXbCxpbkTQpMaTnuvtn6so6DtJsSPMDYL",
  "key14": "611q1bv6AbLFRfYroAUeStaS5uKJFkEA4BzLfEYZMiYMezkTXj4intQV4pDkCNuJii2ZGcWpNy5BW1TF2XBW58YU",
  "key15": "2f5wbNKnh4oWNCmV7AdyjvQG8h24cAXd8YCJ1r7NmUZqKzRSToqavBicpsBPTpiG7isdzYySostNUS6WKRLpfNCD",
  "key16": "5DccKJ4cNPddodRLCBUdfo9H44iVyFTR4Z5rjGx71CPaGa7km6noaNUS5L5GfZVy1WidpFbRRjXwZpP3Tv1uKmZx",
  "key17": "5NBrBDTLBikUiDmg4xx5JQ1hkP369EmBgqA7Byf9KUC2o2ZFFXa97BAVq3MP8gHnSEqU2W9SQzFrJJiGnf6TbxKD",
  "key18": "3THGUQtbTyFo6K8KGVNGpa8RAvzCVxvLrRL1cU17ZugSwpJ8Mc2behBcsPfkYc5E3YrmFvTDY2v7nVnreTijpuFr",
  "key19": "5yzUVaMvcxJ3LbhxKRnk6svpk64vkENkvu4qnVt2VrCqr1zsgqkhfhWutDUX63QUSiNT6eZcNnaeuLFPJpjxZMgM",
  "key20": "3xQYS9sdmVDa8wKPsED4cp6SKJQwB1fDd9wpxQs59hashYmhRQKPEyZdzkMp3pFReYQDXMvTKjdNXPxok3ggke8F",
  "key21": "3fLiKGQ3pshqUXzUk5Za7zvp5vEeJj1YazesYceSeLd6D7c2Rjoh7vDvbcAQoMDK6XeGmL4Pk69WktiHxXwSnru8",
  "key22": "25xJ1PF7nNrfgRDfxfrz5PRyptHRisqGmKsPJDGrNm7uh2NW4A64RnkzYpVYxv6C1Kb5YWAUsRPAbvq5kQfHttWk",
  "key23": "5K8wnC2eiAsiKnoHxmUDyGNYreVAypewpPAJztGGxaiUatsem18b2d1YBSCRkhFrvQdzhyHj62Ces7arezSJxoNs",
  "key24": "4GSzgeCQKc3A2U1L8MHoC96SJka2UX9tfwWJ7MQ4VN9SXaT62UW8mwqLQQmYZN352FSNPq92bvSUqUJzEhmPfxZL"
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
