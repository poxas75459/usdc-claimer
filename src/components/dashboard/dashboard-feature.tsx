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
    "42dih3Sy72Q2kDn6ybboY7wPqza5STW9RBXWWrZKrr9NhfyNtCGiAgsPUb2wijCLyuQGqcuWCVvojmZdG2kCgXpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKZiGKUyxaYKLL5LvzRvJ17kkYPKBT4CSPxytgpvX3yQwZVsctzMmkSqBAWuMkWkrkXcUTkn2YAAJ32y81FvJ9U",
  "key1": "4kZKWSnfquzMT4rhzZpxmAiA3JkT47FG5j3UX41UNfrDSLBUaiQg75fj82XH3eMxGN58ooW9dytMoFiJ9Gdt34CP",
  "key2": "3GueYthyrgW7QpzQpMEHuNvS7UvUH1HpNvoPDQFK8amYze1xsjXPPoDvqVxj3gny7J89NiGXVu1onQU5gGqG14fG",
  "key3": "K3CB4v9vHGSyMgHzEQiwGwcKnaKm2tFE3Dd8HHG7BojLYsSkhPE5M9mUhghfX6C169bhD2fGVcuUqvm9PAukdGA",
  "key4": "5SiGYCZYFhEWt7TiMT7zXzhhCdUBeFBxA9j2uzty9UL8FBcVi4cZa1ZszMKdJJQsTgRU5Q3UL7pX1ti7y4bsXS5t",
  "key5": "4BgjGqKZNqa6GLaMhbZ46VABypnzcFb9WtSZBCjv4MP1dfjoQyPe84vLmLA7QUzJ8vNpJYAsVr7iXvc9pwErWb4L",
  "key6": "66FPBhUVJuuhcgU9nw2bPcvaVcqkktM6ajxfYX2BKwWKosXMTgyqk5pVxMosvEE8DVAWevXLgqkLQ14aR1Cejr7m",
  "key7": "2q91dL8u6U5uiCSCk9msVsJnY9zRj41Te8zk9LZrsJMMwT1RueRkJRWPbCQdN9cnPNfLTVcRFkY4tMZKHiYCmfnF",
  "key8": "Msbfthz9UQJxez2Uu1HxdxSZLwP58n9fjvkHVGqcoJRbAV9S2xweffwfMPJ4Qz4rL5uW6B6bJJhaiLvoWcfgBce",
  "key9": "gKQb3SYYjsqSfL3vX7h5TgTkfhwV3WpwBcy1Gpmne9nZ27ogoBXMSRY2RF5rP3Yaea1AdiHmEAcredoy135PoWL",
  "key10": "o1eA28KygiRjA3wuiHiRfpLYYnofBgPQvBSQwekaaGyaMTPCUSPM12vDb2DhmfdpCVLFiW4JA2AVR5nh1DeKb5c",
  "key11": "z7cUx28J92guwVUi6Rwm5PwMVFy4wZRv7XFhVXA7qPVkzReJ4CRjfXvweDVupG3Kvarn2cMTmffRHMi8jyCYsLA",
  "key12": "Jq6ME5XQ93Csu2bg3TEUNxydM3D7PjWmgFgUmnx6vHv48WbuAi2wG9G7gBR6c7rS1BbWMMsz2NC7dBEUecjFRiP",
  "key13": "4m5ZRCUPX5dww6WnTuNJ9UqZhHSZ4D9CwFgVgJmU6CetAVLknjS2JtqyUBNdSQrvQQwe93zU3jnx74LMi1BaFmGe",
  "key14": "4s78k9XMRjWo3PtVZe64Kruah68PrCiYm4kn7uKcEJh9MMPN55jpXCDYUKxekWeWGuFaq834qKsXH1EcmwyvfRXf",
  "key15": "43ksrv4XJyU1r8Mh1HzkDnYHG3uUKSujszLmcX3hcsLSNNCRVy4zy9PFAXkBXqRe7qJPFZvqMEbm3AK2U3zBzpor",
  "key16": "4SpYQE5AqWXWWhzhtjnPPNJnqR6enjWjXy57wvPAUFr6KHv9LtaNbU5xjq5mTFyCzq1b5Vgy9mst1NGQRyCV7zNE",
  "key17": "3vGhqJvfJAsQ2qyQVgY4xTt9Mszz9q6C2iDW5Lzb9xEXsVwYAqSzfCR6cfBzmeGhP6WWA5ZYuAcxcp7rusXCWgDC",
  "key18": "qB2HHuwW84xLaQgWi3DzpzX8QHJpG5CPVhpj8zo4uh13ZjehFWd2N3SVhEG4LmxDatmg3oFer3CssdpSwfC5Q3N",
  "key19": "22nZw5SAJ3nck9ZbmhrB2cgQ9NrCBSEoXx6wRzd5wfpf33xuKLwKS1ZNnV6Ceuwj76QrZSoFtbRtom4rfSHtC5DF",
  "key20": "2jHpuFQjxy1hyjV7GhgGVGY9rx9RL1XvyGsGSw1cYvgBZsnHggqZz6SYDEVWWqqazcLkk5UTq5eNLisemHfpAhrz",
  "key21": "2bksP8wV6BJAuhRYdcuSVLpptwYqVRMcRoX8387W1XeHEDDYiVwoBbF68mXDjo5W2PWZE2rveN4SKQWhPKf7pWG1",
  "key22": "2bovEkjsrw6YvezLLQ7TJA4KZYbANXhx9DbZjrCqgt3aEXWVQGCDvoqB3RNSjkknsJHmTkcgbzxmydV8eH6KcWzC",
  "key23": "513LzWqeYVPvCwzL1jcv8RhgceQBqN6UKFwRLzYo7BQuceKDH1KRZq8UqccwmnzhwYA2xAMLw1iK8CMcQjDLP77p",
  "key24": "5SGasxekkqGUyPddoAAFikefy5GewkXZfAm9hoj4MrJpW384pUe3ydwUt3Sb7dWSLLpKZ9qpx9DaX8J1CuLiGEKG",
  "key25": "2yhRxiy6zcRWaT24CXRBc8vFdu6rqQwv7z5P6vo7FsrSzsNvdoUkRtq7AEXN6vrp9f6RqW2mN2DqTyCeXVYmNcty"
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
