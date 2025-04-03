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
    "3785z53HisSYC2MTqyHTUXdhHY4JQNJyf4Az4XRAkE6uajzCGwPz26BaACgYGsAj6LLSYjuun23vgPqzX1zE9VBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdAuu817wBCJZKwqvXnMiWLHHxUFqZQkVkTh8PW5rckGJfgTB9KKYix9vY1zaa9ute2gP6DMGDQPChxz4UjJfCe",
  "key1": "3RN7asWfrjwLgfxiACeBTb2ZaixeWuJijp1XBWDAz6bfVtR5gzkkh7Ltpd1ufGMZYFTvmfp7qFzXo9dzEv5jT4b2",
  "key2": "3FhwrQMDUtnqmanS9ZbpT7uhJJCzHycPtVWLBSzDDaoUG26Mo59YB1zDQDCdCtCNMhmrmbAXVbEAfYTj9s1kKno2",
  "key3": "3L1yt3FNobLm82hSuMi2pi8M8FL7cMDAeSgx93j8WwqsmDqBkvtEmqSvNMzdySza18j4KMsJfuG2McApZ2orv4Y3",
  "key4": "9s3jwRy1VZGGEiyLCR15cmLN8HqrJUnkMYnt1N4RxUMVt4kCYAkxgWTqQi6pP8EEMfeZhfhh4C84WVQsVv6pMWv",
  "key5": "5yZnN8Bnm6WWm9xAA2KRk3fKop1jXKmjcWKwAabgRJgqsH8gi1DHGmYXwwYpbn1YL4pHSroSydK3xgDcfdjLt8rb",
  "key6": "5TtJTrJjJELEKAYBitqfSqqGtAAmLTvNkzYNVRYQjhqfuTct57wC6V5SHzAPeHS3ox6MCbAdUiACmAE3Xhmg8Afg",
  "key7": "4woSVFfhPPutddir7D9TSjRJMiDM4pwXS2qV7q1fjmRxU5WdB3FU5VthVRUqW3a7A2Lqt1mmRpuuy71p7feZKw5E",
  "key8": "saUq6JfK2owpxhhDNPPqgksnVSpxjV9cpdus9C8Snre97B515HJUtWNkdqdG7aBDpXTKqC7kSrq8vAHym7ye18f",
  "key9": "4kM8G5fzeiWmyQjFRy2SRvLyasFwXZDNmU3RCARDh49ds2irHwjKo3N7zNYm1WdaobbVMYERApVP9n8kZCPfozgP",
  "key10": "UithpwuLzDdsCanEBzBMQjH1WY1LueB9SX3AR8LbYZbhHEaZNHmWjvTyjqvtm4gFhhLdTBMbvNkF1yqEBSv8pkJ",
  "key11": "3C7gGcPBbmmJ9C7y1VmXasRQr6tX1jjonzPUz9h8jaTsxSs1PXyV9bGBbbyxzSTtbgeevvSP1bGJ6AbcmByxxuKt",
  "key12": "5raf7Q7Yv5GMsX5xhF4Ke8GkgUxuDiJ5PoHcj7deKJVBCjRCbG3AB4Hi2eKj2zMjmrgxjqWDcyXUoHEvYm7LDigN",
  "key13": "4fsuzHhgyHPKF38c7NkQgxDG8FW1273cXagf7HfAgFUC1wdSUqkbnZbVuPMYCN9EhdZpSJbjjmkiCjvANd4HJ5bE",
  "key14": "31yW82ojz8VEuHKShNDGXjJL9BzvFHyvCeorzeexXRbXMXip8ozyfAbA6TAxNK2rc9EUfbEboLymCJLyv3icpvov",
  "key15": "BMZsLH783bhWxrRyD69RUMdHvKTtDPy1ijftYKEgYBm4mfh5LUATFSRdC3bFHt9RgMxV9UaM9jXcK9y2HBHPAff",
  "key16": "2odqwhqXNi5cQRFqTxajkFVMFgLLVj7sL76sauBQyDRvhteXeDkDK1JDECzsLRjGRW2kht7M8Wukk6F5ayCwkJrs",
  "key17": "4FkL6kUvG6NBK2voouyw68NDhMLhmdNiK9jp4twtw1wU8zZ4BGYYnACwnMEivS7ncEeZeuWu8ghy4ELzTzm4Dw6p",
  "key18": "5NSWwTVz947zhPGkTEgDPaeFthwiKpCrVE9nQJkBbdQnDNxQPZejd9ekZYqgkcPSnSaVfsHNQuRW6tijctHAPgfH",
  "key19": "gfask8uh7jyrwk2Ec79e8ftUvmBZqD8H43wmFNbaj7GwVAQRsEhNrYtkvMcrdXaTZc41t2fMeKRZAcAKxtUSHQi",
  "key20": "HFwVKxGeUQUySXga73p5oMzs51jnow3Xr1fQuSozK112nriNriZRpxmFRwGKfvwkkvjkf29kKd7QreKod3V8dXK",
  "key21": "5AkKLj72PYu1ce2CeCHfNwXnpy1G9PNt84NZd6h7dKYfDAaQE9V7YrebooLyDYsqFMN5sXaEX8B8oKmXwa7ynJS5",
  "key22": "3wAYi8dDwR8rPRPtA2DYWADbt4fg4BVFX4EaEyR4EKjLhvZ2HJSmYioSTeRbEyrDgh6WD3FoL46iHdxVi3Jsam2D",
  "key23": "5an8uhjkB9hvdpereZSUsB3TVF3gmWK8g7rGfUm2xjY45HXJbrFwth1K133n7hau79zehit4SXhSkXgcjZrnqJTW",
  "key24": "3A7esaXCYcmeje9fLjxRAmFAnSxoUJBVuDRaTcBBrWwjh6u3yLAdV7ytrLvq5sJDtkrejpmDB4qm62ddzUKiyhHR",
  "key25": "cKpUGvWsNnfQZ24Ve84nSHB8Sai7Q2vmpHqHxkQotqeWnbyktKML3fiNC4kansytUBqjuc4ucbH1Jc9bRuRSHkQ"
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
