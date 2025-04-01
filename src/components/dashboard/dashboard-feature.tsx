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
    "3t6QK9kmrqNEdc6AgxxkHNsdNTzafDGDdbhSLkcvBY88qT5eMEfo5uzAn3n8uS6X6zYybUHykvsnFpwwtMNGe1pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9oJd298BaWPEXSZupA7VYcmMBMfs23WTB5empTko71CHe7EHAsbw5q9a2wcDR9gg7RvUNaZYFcjWiCQoc85cgN",
  "key1": "2PZKWJ1Rx3kbPfvb4TEpUY6VtGvYw6UyYTCe3JWcXV6nthXGojVt3MBXUa78oJQNiDmrwHSCsTYPBHZNGVsyEUEE",
  "key2": "51J4pCTjf8Xy2rRHtRj2NSGcH4K69xvUioRsmhzLFZJuu9Ui2y4ozPDE1x1WLQXFKpTj7ERkTN8JXCv7RLKRJPBC",
  "key3": "4W9ywzN82XCneMRWrgr2Rs21nh4HQPHNzMqSQVYxRSKhCMasp7THnyUkNVdreUFbHFRmHZzpYbtSuqftE6ZcoHCY",
  "key4": "3mh6n1e5qqnutkpypTYaB5Pu3frf5dZ7sg7jJNFYKeG9Nb7i8mJrAetkXYCaw3xGCH2Hox7s13QvGEQdpbkkaaQd",
  "key5": "5bwmJw5ZrJWT3fK1aHk2EjQmSSVaGPDfBQioYry5xhk7yHVsYhjRBdytiFSzJzaUnvh5yccHq4KmTfQ1NHe1yQMz",
  "key6": "124ddbSYUGju2hogkJynwuJEwWgeMsRwHxdpThL4jYR392frJ16LW8Y4dW27f7TS6smKt7NFmmmKzpj3EdW4s9uG",
  "key7": "3BWWvuUhCyjwBjVSqTb5wWG8MJ1Lr8Ko27bg9SyHvSjEz8rxibY7Y6GtEhS5dBvviVW5TsKyFzeR3CUsnFkrfBTL",
  "key8": "3PbA6Tfzz6CqQsYZiFB6y9ZAihfUYSXSZhW1d5fbzcKWuswAAikxxBXDf6Rw7VdJGhcoGatu6pWLJcZMpePFMBz9",
  "key9": "2WEKHk6xpq2QpemTXPfijKt9FfoEKpVMzi9JKnZSbZKSDijQoXF9ntFQuiuoxduV8CRmRPHaZEpbUtWYSScGDihU",
  "key10": "3xoSBQ5h9TQxwfAMGRh4erX94EJQPnzK6xb6zw3gDxNGBCNMrGgVHwBvgsU1PLguwdM5FPVfGeJ9P1HdVpRX8NEW",
  "key11": "2AxokGued7gjtNF2NUEmJeuJW8JC37mmz7kDrweCUsQ1quTPNXJhpSRRs2VPZGstW3xydyY9eAJJfSKWcPdTKqKy",
  "key12": "4nBTxfpYLb4vdp5WRb6Wqm915nBWDA81XQ8kPeqDduwAWxQ2LMYKQT3Ujv4QnQK5TGQtSjeBaw1LDD3CV9q5d8iU",
  "key13": "taCcgA6r7Ke4FEpsxLUeUxk123bud2WmM1QNmBnPjRKNarZAWVaEezaJ3rDDUW6pivbrXQ6zcQMUVw4XA5FYLdP",
  "key14": "5Exty7ACa7bfzdwmNJm13haPmDRsN5mmkXUBd4qD1b71mrwHGWyGkPyhV8Ue1k48rw6i43x3SnkSKRPrJfdUQ1Bt",
  "key15": "39xNgt8H64ndXy5sq7yHrNDiojf4TMoZt3A3UjaRFBhurRuEPDN3B4XRSkF6vpgVdBsDwk8QXDXnKWRndxA43A6U",
  "key16": "3F718vz8xmW2b8EJrouG4m6MpvXijZkH2vKyWQBB99AMNC7TvkspYQsXWF9qziN8FqJ6fVYS3rNK3YVY5bmKnT8i",
  "key17": "2pkkCU7Hd6Kfee57i2CZof8AFTJtstpndgks8bpqwf3D2TL3393rVXbtRfYmkix799G6pwBCht24ufXEvD414K84",
  "key18": "Wbfs41BFYKm6HXrE4svppCgdrEVyVzD2RR6cUwyBjiDR3gjZMcVDnWLhEyT1pgezftnyJcghJFj7bchh1ppcpbG",
  "key19": "3MKd8C3w4p58grQfPfogNRZu2RowP8dFEEVDepw8dWrfmuTBjJ8cM2ba9Bbc1sqSQbd3vfWmcbSDLNANaiqwr7de",
  "key20": "KFpWQQ2rDPVVoaBym5uaa6WJiqMQ6fee4TMd3e9CDnNJGURBiHdC7dHuXhHtpfxLjkRwCHmQKLBcgytBGbE21q3",
  "key21": "3gntTqUibokuYDVGc6XHCPNhqvjubTsnBuvyAYQR3sLnMpPkqvD1nK67p7xVuSLLF9chzJmn4GD6QqxftuGJZd8D",
  "key22": "4xVz16JNbnmRrhzQgKdMQnwewUKaSN6bc4f5VEx8g8c5CxCD7GApfBDhuFMKeFTUBTvZDNapvvy1YgnZo46aoCtc",
  "key23": "2XvyS5793wPbSbE5qXWP8EVWMcBwtvMZUQb9P4KMAVKkwP1AxDf7UzBz84DbBjRzug8EhyQjC6RvvmWoni2Gw3rb",
  "key24": "5awA1GjC7hQbBRvUGSgbq1ci3XusgXPL3E2f4KDqiqAaMVvR79FJUCsUATRcpXAuX5eKadpHuYg4rhrsyip8eSYn",
  "key25": "bw1RcGds3sxqgdUvNtMiLrvVt3ksRFNti78udRq3nDYEKznNmBxsoHEevnZkFb31xdXbt8KiywnXDcRmPxLdDg2",
  "key26": "21PkvVtqBq69p1VDp3RyH6H5wwQbE18PPKYgJxf4Z7sDFicNiqMy9p2jP3bP6hVwiZR5gHCpHmPweEHaMd6ze1Am",
  "key27": "4KcftgpBrEq1F5XcMq6inSZYzr6PtjV4cVChD8T8d7B4jArKmwG2wwhzTR3XusprnHW7dD7saFgU3Uj8mWSjZ793",
  "key28": "5tPsuNwwf5BhLTFKjcmGdP4vcXees1zqQ4Hypr9qPwMwbC6MrVxfH4GwLESgZhfB4TvqD5JFspkEuiKbMJYqKW5j",
  "key29": "ULCSF7Vf2YANb4VwSjBPTqpinSgnpSV3nPZLB7cuP7Ju9QVT32efmPih7R1iFuFBvjpcKd95qna12b9Xvd9Stet"
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
