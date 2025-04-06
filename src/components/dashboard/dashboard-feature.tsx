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
    "25KYF3Tc1xmVSbpXtvtABeXEx1ZJxpwAnZfEkRnee2HZVxP5A5xZAZPU1GfZ1LjbvGuxbTZFuYHzzvkRatw6Z2GR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zG2AyafucDNVirExvorNQjuQXEXDYy9K8DsLboPSqL2j9AGtteQhy2cxPkGJDUWgpXnntTTsMenddUzeECuUeX",
  "key1": "2ifCTn8n2NcSH9Q565vx6Mzxt6xAq92QZDNCQBybaUinUKUqQQ3wSe1Ud9qnm5SJcWG5SMNG9uxMv1P5mwqezghJ",
  "key2": "sGunDEzevCgQE71FCKcHTDk9aFshgG5XVxXq6ZHzRX9FUHxEjet6AMaQpCHBom44yFX5qs4SrEdFCf3tp8xaBj5",
  "key3": "2jj2DoUXmzcnAgVhrxgiJKUUNfV2XjAMTKuNV76qbtMdgSk6uvLHZfYY13DYfEvm9pYJgaQa5gRPRiBHVRx7fshF",
  "key4": "4bS7CcgNr7MAKqxEKUap1LNADVX2oQnLy1ubbSCN8KUbb1dUtXydWqvX3PqUC2ghKU3nRxWRzBjM7zWY98vZmKX8",
  "key5": "xDAQwApN4RRrcHN2rZQq71GtSkPBJPz7thNUqwW2VW1sEKmt6pnZR5D3acTQLUi6kQsojJ9caoziKqsy2pvkSLB",
  "key6": "5pBw685fWqQMQNdEP3Z8KkC9yjzFW47mHzXqVYqHvaACgoVhm29BW3oLaX8SCw3MNwETtC72gL26VqVLmd9UPkaL",
  "key7": "3yL8YfLikTsHMgUzMtUzFKauvPeLtDk9wVyYXs31s9KQfXNUhoujFhX7oAanbPxX5KsGyc2eC5UCDqW8MvrCyZSP",
  "key8": "3rBnHgjaxKt9PoteRynADJo1d8vNipQxBJZ7xbojwAa6ZcFDkrvt6jzvbmky2qQjMMqYeDQdovJX7WhorVsTfkS3",
  "key9": "52dTBCmqFzd9tPKqSWGRfWNQmjHAuVGMFguvyGxajWFkRutFN8uQQS1LpvS3VkTp7eF3aoMtcfb9XvwK2ywJdB3p",
  "key10": "zDXrRBFD2AG76DN7Tot8XSWohqLHnhoestaKUQzYdj2fFZg6SYB9PMdN5fokeqvKY1hmiYsasTSXw7u5JVLYREL",
  "key11": "5WVJbQmS1W1sk6v5vRiRyPHCw1HQT9ESiyqeM9wJbKWKm9dKzdidTAG81fUEcG53X8zd7x8MuKdAMpxnx4TAk4Ni",
  "key12": "foB1chhx8UxE6VJLSaJJzzLV26PXaNe5D1JMyebbFvarmSKAqGYjiu8eomMob6qLfj1earYbpYH2N5CZ9pj5skE",
  "key13": "S1zC9byyDB8FbwFjMmJ2oDiF4LP5hHdVxXf5sPMLhyyc8YCdUXjPSLoYDYmucZvPc2ATooWgda6VyNpR2Y42LAF",
  "key14": "4CAiRAuWS9h8SdwwjmJoAPsFZECDUAFeRmbXVSVJkYCT6TddApzb8RG3SLn1bmdi58addphUJFQPcSEWLzfXGL1V",
  "key15": "z6magjtTnfoxKkYofET33miPe9ZYMWLRg6pJ5XRjHjUYukg97a4FiwUmrEALj4iGQ3waT7w6HWSG1XfswPfyLP4",
  "key16": "2TBGS5mt8vJmohyBkCucLbNEwvxRBy44YxKTU5CzypPmgs7LpWJbqop1yjG8ScvffKfzsZN3TnrHzSxuwgwFNcZ4",
  "key17": "21UrCaMrw3r5zYxG695ypt8PjUk3YdD8sNhjjppmZRABoRxZw6jBmtTy6BQAWpEuHpQW3UKv3wEjA6zU54UsArBe",
  "key18": "5DjmoDVC98GD5xkD4BUA5Zh3VQMqieGyz52kS3fZcaK65Y3raq1CaraqijBxoBfcPjKSVTNYVFGCLztaRuEzsPcQ",
  "key19": "ry5jnPu6ekLx5hGU4MwtDNzN3LewT4HRS23ung6e89Vf2rrgh4EKoXtmQdJ43K9XY7o9fztKQdBmbuUCohXcYn5",
  "key20": "4j92LKD6s3DWoVwTPeMSZT4itVxiNbmciTek6sL2S8xohTAuThKnzNX8wbFdaQGwEqgPR1xsCW8p2myzXvkNG9tq",
  "key21": "4Y5HhGinrSfVHWkCA42VZYeQRJbWRFqyQd59vnMxYiC2amqubAseBCqJ3avjB6kQfiYpVxppHjcczsazJz28W81q",
  "key22": "598KeXpMMVYBxJ3MBjAL3UxPoSkdkkusHxCS2jx7TnyBCopG8fFHiU3cb6Cwkg7wKmzL1dQJQBRpkvjZFA71xQiW",
  "key23": "2UTeTpoDyfivoik9ryGtVM7UtM3BxRrZYhXrLaYPoeGWh2VbTeAtTLjZTAVf9fnL3ghJxoMZ8Hr4aKcCZ3ad3mp1",
  "key24": "3QDyr6RfUtdnVmKessfgcUFdg2QriWGiQjh6GfioWUVRxEXViznECfUXdQKXvDputJvMpusyBu1x2fSLFbPz61zU",
  "key25": "4LF1cZoQTyr1kr2DFrzSSVnu5K8mgjU7RNYsfei91CirnwRRqhFWzDdGzYjwyE5XuHszjbf4EpeYhBRSGSkQ2HkS"
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
