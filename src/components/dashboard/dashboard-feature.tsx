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
    "3DPKBm9qCGoJxJ6NywceuBzYu85P26Ye3ZuEs3iZKX5Ne5BRpXYANwDUXrUvyDqJ6KPvttXGEk4HJMQp88ZySmjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4MVnFrcyjSVDLz7xenh4snaWeunRTY83CebrC9cfzxBJ9SMfNkYpejdkmz3axgdHv33ew3gomdKatdN3QDbevs",
  "key1": "5jfciQeFPwwNUoSNsuGiSiUFdU5NukLHLWunBeUC6VYKLqY4VfiH2Lz9wru9Ub9ifFxU6xPxBhCxA6ui4MNqp2Vo",
  "key2": "2WXKRmdYeZ5QMZ7KXA91324RHGVTbKTcncXUWQjaLVQgiB2rAiFiDjxTWr9QwA7wkkgZWeuDLUz3vgyE8PW8tE6a",
  "key3": "MF6bVUiZfrTeqsmBj8qYrNFhyce87vXMMFpWLRFPgC7ED16GaDThKPe2oA7tTzFQppYX4JinAMYc4jeaq4Vncmx",
  "key4": "3FQ99nWzNMGSi3nEMdosAGXBCK4VM9og6P5qSNYWWMeHbjUBJfN9cjw19PVTJVJGddovjqekxdZinEqwNocuikbF",
  "key5": "4TT8Damdo1Fx2aS8bTYVV6XdyRRHUGatehEPVWaRUurKvWjacaUbTJWHgM29gPkyeubgDY4RLB36B8kFZumVa6oJ",
  "key6": "4RvmDqWdMagy2G8Hvw3w9WM8fQzUYdCGPzCa63AjagjvaAQsKnVXD98fXTqrHtWh28dAVLUoCzSUtFbH6NyvDmdp",
  "key7": "22QX85qBGAuwgbRMZw5i1sDQS6LyYm3GAGTM6nyLfL1n6gBPcHRPfjKug5JCVvAhGqovGwWhrYGiy3oEePsjsYUx",
  "key8": "5BsnjUx6SvvwYYyWcymRqz3gHhVRHshWCcfiUhTX66ifz2qFBdUuF5aTjZ8FASojJ2yrMvTXd54FmaSrTAWyd4Pr",
  "key9": "3T2TQzptrostiMhAFjfGYmJbog3N1joSix2wPAhCdM9iCSKoyRgQPog8AvnnvqxkQUVa3RuBVhxER3xHnRLSn4b1",
  "key10": "42ixGMCUNhEPEi4QvV3oMHhXiZtogSb8cs2i1UGb7NvdEJNML9ShiFTn7etcE9N4CQxCdXsnUXUF7aBQ17d5HSat",
  "key11": "3CPJAHqiHUeH3SBLWxaMyPehCsdktLg6r3KHxAd8bZjnRAotwUcz5npPypZc5EZUDXZwdEvBcubf7SHacmJjkZdD",
  "key12": "5JNT3rsxySu73G9qghbDwJ8EAVNCrbeyDCVAb8JvF5Ls3ZaLexT54ooV44MTc3Raw76jfm9rkvuUfMhHYZvJoLEK",
  "key13": "5PSaxfj4Ca3PMgQpMznUe3mg4Mps17gfATW31LBxBPgyJqSWFCC83oizLyfFh3MVFfLLLqEKU2L7Fn5Rd8UnMUNv",
  "key14": "ksKFEYN7QUFs8mGruFuYesSmkPC29jpFLBzSL5DNG48mLNHn8MzsL4Ttdt2SvfUorSRK4PecZhWPA9VL2ZE7MUC",
  "key15": "3ncQe7WiuQgJTwA9V5jutag3kL4R9y9G1HCQoXrrtZC23DeKNEqbMqVPtUpgC4Uoa3z8uwC9Y5Z1X6sCcukuZRuT",
  "key16": "Vau4B7gYK2JgXYvPzz42j2Vo14p7ULVMtfirGqiPGbsPbnHkjC4cbWuXabmdpbhFjWMRAke9k1RzPr5wcTwSfTW",
  "key17": "26aBVf5CxGGqGfSnzWD3rfBv19JokGzvRsFheZYpAbeNcZcehjiFwMsatCNtEynawNvKaoNkG9kcWaZeKsbGmUb6",
  "key18": "2YiiK3JvmgZ3XGtLtjHftd8w3WEe2MbBidWggSXgUSqT8jfR1ZVJzbsDuzEMUo9SEAZNE7PP9oAdVkYZ6ZfnmkvF",
  "key19": "25XiG5iUyZSfN7ppSS8p3jpMDdBBfqp5oM4BvJTZPPVcRWPPnu5nhTECKZ2VJgwhUphN1sXQsFxw65RmaXurXV6U",
  "key20": "38y1Rys5DtiCy5pG98bguwo8H4KpvfYNVsqZoEo2Yc1v3LyFRhu37TyJzDWAyr1M2UNrtstUu1KYk2PnTZo8iPJs",
  "key21": "3WtRhE5MM1Ug774m6ig9zWweDaRx7Qq2t7Abq2ZmgVYzAruFV4R3j2pj6K9mYSEvv4TUXDW25PPaiTxGsX3L7Qv6",
  "key22": "5o2Fce6W339m4dmXpjEGEgZY72vvjHk1h7boBoD4jY2DfUD917kUgZfmF7yL99gbQqz8bddKPL6fEFkhV8p6cS82",
  "key23": "tHaiSwGEJfRtVParsHMAyV8fRRzfY6YBpB3UaZfqPakSpcyXJRbMUszA5Ez3sYjRBQ6Go7s7Qze9qcPhDEGrcrR",
  "key24": "2U4J9ZBcBXuoVQRgCMHxEhTMuRRymkYVoghvXTuQ3rsWFYSSonLPjatboZgAGr9MU9iMpVcBxqzgTcbLobTXmx3U",
  "key25": "21dgKrg6FTWzFcVDp8r7jW83qJLxi4RcaHUnvaQLdP2wfui4kW38zjbb6kiTyxQdaYTJNz5qM278AondyAQCDHse"
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
