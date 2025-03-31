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
    "5jLPzTcEeZhHFn2xCBMmkHfS5Bb7VcLFw2hf1DqMnoFNvBXhzP7YfZgrZeZxRLk46EMLqXzCJnFq6y9TyVKmEwEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqCRMJyuAzKcweyBXB5PrbdiqknnCs3jtGTKSdpG6SiTKsnVJDzWdfvKSRrw7aU4WetkZ8JEHLZojoGCfHahaTV",
  "key1": "H3j8tmD9SB9zfDBA7emtWmcVwoajDF1xLazuZEuwhe9XPESHuH4tNCVETfU38u8AcchbMi1mGVpSFFJzPanUjt9",
  "key2": "4VTUBzy5ZotNHC7b4MQq16WB1GDeczXfmQv2MHuwN816TM2yjJAmXfzwznic5GTotFq3JT3kJvhLrYPZKfLvpX8E",
  "key3": "3ew3gf5xwXe6drGbtnM8LXd8v9fWk7upGB36tqHx5fdCJkw22gjQSiVZkvJ2u1jsANcmqZkhwsdwWHrpwPXi2129",
  "key4": "4GvwgsRF5LGEzoJWLH8ruVe2baswu2pq6WmBLfgqXoam69b7LhFGRzqazcuwwoPJ9kcnqyXvdP6FZC8a1RzGP7YH",
  "key5": "5fHr3AZandJdQy9docKruz7gpRdaqdw2VQAYwbNER14E9rNDjYQd3humXVG39axqwFK9fcmXdw3WjHvKr9tei8tE",
  "key6": "4HcEv6TgAVKVdMiXa9Zyqc2wFk2G1MTtoaToPeBozgkdFvRnUg9q7k12uMVbyRxgELoaJxrF5DKzPkFNqtkh6WWu",
  "key7": "2VgdzTU5u8gH2KCKrwUGHEFhgGNf9WHrtQdywXxE6XfkwdTpGZ2s4jB1TiK1JBQqFY5dESVU7RaNMwHQ1v3ZjpR2",
  "key8": "3aLD4c8zeK77jzgDc5sGUvNvfYCmCdQFZFnDJwpAbFzmqf8Pk8JPdc6zQ2JaaQNrvE9Saiu2HTrL4R3Njb9wpt9w",
  "key9": "rzcwRJPwNpTpZzkA7qZDRzsmZeXSjDHPQtjAKtqaucfVFanYh4APaWNtfyHY3fdX2i8jCEGrAkkJ3WifAKtWBHf",
  "key10": "2zVWpP9GNE8W7dMJN6ewKbqnFyHxp65v7tJiRgJfrb74fb2edPu3qftaCqSrqvCQ3PpRLTXEvL1sunkvuu5nYqVB",
  "key11": "4MAm1qaEzXWcUiEodNN1TLe64ZUYYriZZHQWyhL26x4ACAtFbo76spFjnEPuSCU4RQK43z2Bqj6bcWQEwVJA4sLT",
  "key12": "ssYUHhBv1GjZc7vQ5qzeyT1HBPsqzSR2QTGWH13Lzk7SbnsJzqCF3ysw9AUcXsaTYwqHEvrQ4j5PcEyADBv9Suq",
  "key13": "5fy3ZWXR6sKmDkrgFEJBSL8ha5NajBdG2pmv9r39AXHqF9vFaeQF33ygV2GuL7VnGbwBMFZPNYxFu6zXL1n7Vp7o",
  "key14": "3Sx5k1AYJsYK59VqETnXe89rdrAvSA5Cf6fafZj2V2sY4JGqoBKoZBZJcSsFwoDJpta2eewrqhtqAA2427ouQ19S",
  "key15": "5iPHnF1LgsABEV57qPM8Kdb84jLWt6wCpUq1J7AEnDSBszUn8XssHXbkqpGwasZQBCZgixJ2LgiAryBxybyQrCXZ",
  "key16": "4fTkawz1hE4XqwpMVJeKd391MgyMxUjoKemP2RXU12JdHAm7wfBfPa2hs3WHF9ohxhswmB7wZd45RrP1Q62zMUmK",
  "key17": "5qwXJTZWYQJGoqdVYssVSkzMAKQjuCKbMYDxAJXbjXmwYVvay6wrwmLYRcCKUQUkLPwXmffNfd8r7sHmopcnhAaG",
  "key18": "5yiRvTp7q9grA1BxBDR9j1A3P1xxMgJ9uou2FSKotwTgTGwcZGkSj97Z4EjryXRJzMmuF6JjoEkf8oubhoTMV3Cx",
  "key19": "ibA9pZbaqV8ibEyaitPgVtQ1nnw8tc9QAPcSSctM4E8GKzJYyMWbVr1QL9EyYoi4NXu5957cRZWikgmxvVYk2xx",
  "key20": "2gWfcvFj1o57ynLVe3Ve4CLR5iTstFpMPuHnzHBtsLJf82Aabjfx5x9QvDWYRcpLhxJNsPoq4ThACnapKiJjEx4F",
  "key21": "4P3XJohLEXTrGmdwWCqDc8DSjJHJbNhnzsr9JNQ3tP2Xk6o2Cec115tepjQJvTZ1KTExoDEhxbUKFoFGcqn8ber4",
  "key22": "4oMqwUGfGfzztrJ1j75HGJ33WdFTBQQFBRTAXzSgAkBwYiFoTVSbYfmciPTpP1V9d62Y5sKJ9QdUcraJtV8f44kV",
  "key23": "5NXyjVuMQQSyxXv49Hh1NvSxe8BGzdWfobs13sEnCM9jUVZY3xvKZJ6gpo5AhuXNQB25d79qVEHyebvmvdmm6ndv",
  "key24": "5afr62aZcpwc61JFmjwUHCA3txwQYc3sCS5trakVcYPRgnsHrqVu75YnpRvVJyVzSvdqYm6r9pgwNV7EPevDUfdF",
  "key25": "3k18rb14SouFsKdzhcvW5oddw8Yg6wXGQMJhCMuxTvvYVRSezB6FgjBwU5wnhRJL1VDv3iLBr6pcQpAaTfvGAwxZ",
  "key26": "3Wsg6ngcbX4WNqxHXQULCFUWg6YXbHw6ZuBnnTJjXjcZ3kcdFaqSTagLRGmvVpm7snVehN2nPNb3EyS9kXqn4bLT",
  "key27": "4Vh6gQeJEtucw3KBVqsEW5gY4KjzFm5fXXobJahfYLty3h1CKWsjGMEJ4G74EXKnUsyzsWWWjvGRdgfQJbzWPYms",
  "key28": "3VaMRNMQxMp22cxBs974DArSS7r9tsyCGjBtJma9znGu67cUexd5zWvAxKWgMeptNyRTwkPj6rN4rTtoaS6pHges",
  "key29": "3hLhsrNKiHfVK8bedutrPRnK8NmXUupFsqvGGeRwjdDBk2GE2PJJ9UX8a498qFLeaMXHbqmF9RFAWqFfRyxKGFzo",
  "key30": "5zD7Qjt4RgngeAiPsWGY69awUr56qavn1y5JghMJ9bKHMbBC3HvA4q7bTACBRmKdtGoqFxz8SBCqaYrKLA8ZLNV7",
  "key31": "1Z8gCX4YSRbfcX1C3gbpK8jxzJ8SuGGfqBtaUitidnxELni2tk7X5SA1MTr1kKssYf9rvubAJBrtnFLrWX5V7BR"
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
