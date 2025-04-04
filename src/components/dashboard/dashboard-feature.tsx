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
    "38yXyD1ubnpTaoinujm33ugEZ1L5RQveLstamWMo9Mzc1DuZzvzJtTcMx7o674bz3Dj5wMYaFWLp6oxWwYUa6R5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgBa3oZvti3pS9v4poyJXD6syoGCfsKY4ZM9H1NEwc91q3nR2XahS7j5FcMACfdCVpYJT7KRDJ2WyUMadTFucyU",
  "key1": "otKCnp3qATycJzMnXPWdnMSzMCyy4wKzc8yfuUxsoKDRfhqRbifFN2AYFyA4QDJsVZhUAAYPS7ihn3L43FhisLL",
  "key2": "216EX5ubm6xAJX4EVkLtUcT3uxwUPzTBfSHRzxALWVEWWupN6tUGXG7581ayukKKTbo8EMumqcbRWh8G68TQgLuE",
  "key3": "3S3vFaEc9ryAnFYzd41Hg2QVBc29PsmysRcXVxyVKezyFPRyA317iepm4a6wESp9GMDfP5SUQKT7oqLPZ7kBM8Js",
  "key4": "crthzequBRbKam16NjE5jQKiv2MkWVcaDwyD4KyFTbrhtKUUoGXuCnCpKNs1cUTyxmyXUAR9an9bgeHiYeqxVBz",
  "key5": "oqcZS2KrqrJ5K67oRxhJ9bsmyA4TEtBVivdDwT5tkghfJLZb3mRXnAGKeGBJbcKUySXhK4jKNmSgKfiYNh5XBoC",
  "key6": "D67TQhjPXgCHEU4yxPfdsqWNQbbtBsnRB3WeoFHX8Wbq2VnZXhbsfubCsLvfBaVcbGKRHr2wr8tgGG1fEzbh9kD",
  "key7": "58CsbnA7ZbzMjjVaH7SAkJuGafcwMMitQGXg4Qib22c9UTfaiZSGTzWnwUypaqeoJuefBax7e5ue269z9CB6j2tQ",
  "key8": "4t87THpbU4iJJoYofJZR2FAKvpFgAPw9aWnCyN3UMXhwsk6S9ACp88NzpPRgw7nCsKA4ZnFnja1D6PrLR58pdQy3",
  "key9": "55gCiUhB4CcPJVhAEoduYB41yb1qJf9XhJLLins5FboTHpAFb9GUpFW1C8N81KFv6sKakodpvNrQSHFiFzJxQNPj",
  "key10": "3BBVdGajpsTZrKnS4kTBykDaTs2eduNnw5VGreUdFG5KndgDdZpgxUcCnXr9p9LbZRbBrJi335cNLQ8ahipfGzx8",
  "key11": "4EB7sVpbc7bDTY7VM3D88maAJWK6DWXLXNSbouz6zTsE2NuNHs7rUdFCwPid5iMq3CLP9VvCoXuRerDZZrVa7PKx",
  "key12": "5UD6xT98YR6NWQwYqpj6ZnA8XmUKhbvjUVwc3oiCFYiJ5eZZ53rc9TjfvRbAEQtLKj1ACAzgTAg6YhTEsTsjA3C7",
  "key13": "3dRLytPEfP3zr4ea345zNM2iB7mRMPby75DqiQL8UZYnrdD8iofwAUMJkXpn61TS7VsCHZK7mGnQKRGBLNiUmM3N",
  "key14": "4MipCsYqSvHvc3zTSmsFFZvgVxFTAbpPcAo2oDFeZKtKtQqYXwZfEWxAXnSMoJm6Cdn1WQ6XixNgFYsBuhTC1pbv",
  "key15": "5bSZkVdYMWHsroga8weJLVcjmzjX4EW5uixuC9acttycb4DuRJxTdmBagibdV4aBe9eKW2HpmkRiWN5EkDyFo3qW",
  "key16": "2s47sBocmfRH1JQwiwtHLYsvWjuKrRECip9BhFjxpbVH46NhuJdMo48w9AsNmSDJcB7T7Qut1zxjFr55XzVWtPAn",
  "key17": "3TUkAH9aZw2cNq9fJbcfLqi4FWgNm7fP9xY6794BU3xK6e5TKHMKCqv1n81Tn5h4NXK1hcSV8gnspBHEkNprb8pZ",
  "key18": "PEcN2ykuun66km3bW7wyMGXyd5o1Xyubd2FMx5P3FuzzS9k9eSxcQjzFAVZuxP4LiSpLB6zjJxZtU73h5znoKjL",
  "key19": "4wCem2DFZgpT7HFSovoqHGtJUxVnF4z2twZLUkafqZee8KxKJxYLjv9e45BCT7YUUudLPXNJqGqZnCff5VFKDyKs",
  "key20": "5Zapcp5E3yTNq8gA7zpBPrLouS2hqkhzwqbEk2VYDEpHnNeVmd6bacJCKzTTWq5JbKbSZMwXMkb183ZLisSQyD9P",
  "key21": "3yPrj8qi3vRdy9W9ykCsGbqEv9ks9gjbcRjsoowFygzFo881KHBPV3XRPsJCG5JFQrea7njDSCMPMRXbriPwyJBe",
  "key22": "rESEPavJgyiaVpDyfexRKzLHTUytqzEUtK7eeeJj3LQBT7TE19MmxPAEjy9fXjDQcX7BSoZ7x4befbjQNkFUVGD",
  "key23": "TEaidQB2ABEdq4ntoHz9wT6we91BodXt93iWeHjSoLnDhZmtgfLTiiRHDMBYnyPezaLbnTZ5QH1WUYtX5vzZTEd",
  "key24": "3sTqCXwxheoMgKrDHhx8tSgqttpo8Np2QiCiR6Q2MuNnsxAqNtB2Chz3WFZycRxurW7tvtpsc4joEMBBtyXLrfe9",
  "key25": "2wG7XA2LtdKf1WfMTuaJX7fhNqpzDoricWsskjtHdyiFQqVXB91MQ1gdcHqoyQoRUmHouYkbVpfVa9hhMaA5c1Gr",
  "key26": "XcfSbPHhPTYca6BK3NNFdY9CEMbMPyYaQ1FFSQT5cN1LWHxjQN6LZuhi7bXgZ871SUat2vFzrEPp3hrBLJ4AWSi",
  "key27": "3svq6FPsVHAMNxR3dGAxCsjp2U5iua5Ggi9ado8Mrgt9jjesUN1No5v1JN3ZV9YRCpKfpovjvgrVFwXXekzxHDfx"
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
