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
    "3LvwRnNWpaXrnq8asaEACMP72C7xqQZGTm8nLYf4UJipyz9afLaLjeYeoPoo5xrDEyBjRVfx56CGTHkSwAcjv7Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUZkoSLqnNX7w87ZWqbWSdWw7g2hzqsDw4dSDaoVkyVjNQ8U98e6xUN64oxHsfknkXvHCnPRL3u4PHvygUgQ8yq",
  "key1": "5Hefi5p5pD7mwWwodosUuRJRKEsmm5eVNMFbbAjuRyW1Fiuz6o23TA8oiy7PVggoz2m2qv94gD11MG3sDN46Ki9e",
  "key2": "2yP2CEgYu6YcUSUag8YKVAZHrvFCxAE2UbC81FSjpYFJbLAbidaE1jAqh67LGMVT1pJ7ExmRfPEAoa8qW3fyygAF",
  "key3": "dDv49NnFoGGUggLUCi6yxseKNFDyHzMyAbGzzV7AzPAaiA1rw8KLpcVyKzvYGEWQso6umiwjdVBKTT1Sf8AbuVg",
  "key4": "2QLiUtKADedRwak9DJedTegGBaSbF629CpJTKjwxcsUq7TGbmTynefmzeENwGHxA529TVH2f79NbVk7Mgf3CEPTP",
  "key5": "4DHJKrqet575yxkfP8anLBindzdsy2Di5AizFWLZnMHdaGzg1A8J7rgJvtyDqXRXaYxtzbu1NspxfELKsw94BxpJ",
  "key6": "3xidbMKtxkjD3ArA9xwSMWD4Sg5X7JYMjZeRDNoNVyfyCjzbCtbcaKrMZ4bMmqwRQvvgRhi9s1LZ8X5YZNcQn1B3",
  "key7": "5K2HPHhRMoFsPRJ7UYgF4cov4v5xxFiPfxotffMGLchmHTQw8pFNTDgdZWFLwbtiVxbCKHtHPxMEGnUVmomMD7Wt",
  "key8": "bhdZYtbCG8vqhgo7tp7SSdPLMs17ScSUaviSBQsEBkNYzdrsxkSVktS4qrUNQmLTUktBxw7mAsjRcvcqLyuAuzz",
  "key9": "3jiHySa29WoUdGtvWPtVWLD1B5faEf6N2fdJUHAavuCbcdi9KMSc7iiUmbY5CW38XsN9tu14B96G7xP85wB4Fjx2",
  "key10": "AP3ZxH3b3oajcmoQDBLFa4AqCh9j4AAzusb2czgeqQ5xnn3FHBZnhhzhUhiWYgzsyEjTSszJhNS35V1J46SxeCn",
  "key11": "4VHEpzGFGhkbTNv3WdeBSacG2zjWseMadFf3kYMgeWszUy4dGJ4urB8dc2emsWGKwXoJ9KcXcQHeaw2cEFt9TxTP",
  "key12": "2MhLwztnYuFZrqrbxMnquc72gtm6UgSTo5EXFRp4fUZoMUt3zLUDGdECK8zD3jQL3MRUjdZPWr7qXLsADJUdqWwr",
  "key13": "3v6vRj1qSAAWkxpqH24wGeoiCvRnwyxLrnt9AFhDN6xrQ9DkPQUp46H3yS9S1cXVaHGLoExacDvXoQ63BdEbdQVM",
  "key14": "2k1d2Az3ezMeD5zosjhvGLdJJehSbd1YMcT2PJ7ZdPgapCzLLVu9jDhTscHg1p8a49AHEAh6PWCnYxmsTFxBUE9F",
  "key15": "3RNyt4j8ba262RqgRotSYSPUTt5eJSBimtsq5Pz5MVSVVS4KFNVkq3UyrsG9s7d4ChFqCDkfv4r1PdbDA6ydW66n",
  "key16": "4z5sgyDYr5SGfx5uzvsfVXwYFNh6QjQ7FwkZJjfWXTqAjryQvcwRozM44GKDkgzXsddV279VNKsxwMv8vn8witNv",
  "key17": "4TE8YorVwtzRyaXxaPakdZ8m8gQq9VTzZMgw5smpBpmBnG7GEpGZm3cpTdyCNiMkawNjMJDbXWwGESz7oVW21XtJ",
  "key18": "4NJt99gvwFBNjGdMTaxQXvtvJbBDNC69xypiNQy3ptez9ENFay2WE5K4vTsQXenvD5ZWHMFUYV2bHsMfRjcLvEaA",
  "key19": "5dQ6cPtGbXVZD9iXWRqS7MykQbo27zmQu8wU6SzF2h44rKh4jz5FmsaJvwqyJLGLgxCT9L6KWozqoSv1w7ghjCxk",
  "key20": "52FyQmCT39UEvjmyAAbeU7wSf7CSxTY4Zxst3hrjYKiaZqQ2bPQrvWqgQqWtpUtvhaBXEbobdt4UfbTkhDvNaWi5",
  "key21": "61rdggyBWDC4U6ELi7kwJcpLcEqK3CYXgsjEmXdu2CdZrZScYfRFt6Ko85VNbfbwTjpZr2px4F2PFg56YBEDYujt",
  "key22": "aaixLqJ9wumd7ABwMsMRso9kLPpDo1DWnPzYnDFeANu5oPETFNQsQTCxHE9pZrbqybkeyEgSx23MALn2tARc5S7",
  "key23": "4gUY1q61YZPrKBJqJ7JbRgzp7wqMqWvBayWFnXyDKWFAXkyV77tFVpyphCHeuHmqYtGvbA92CYy35fyMJFzyeSVd",
  "key24": "4b8FfWZUJMxo5hKXVzhzFqeiBVL7b4qTVboQ22CskBKAnFwZqLeDvKYREndfkk53XzUgcAe5tg65fpsoj2419pos"
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
