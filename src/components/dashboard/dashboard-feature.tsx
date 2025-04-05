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
    "5KEHgQMTpZqMNGymyApTFF8i3o19pnbcMLigzsKiPQhwfgQ7EABcrooLKUi5P4pUCoUeBjBqbhUj7jCkBHKBZpRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JytDzhDP6jVBtravx43juzZWz9tWPT4RLQrPeBgrxtSoHj9xN3zn5vJWN3mKxBEwoggJ1hAZj28LuWDV8Qh4GjG",
  "key1": "43hfLwpxeY9TUvGv2tQhfyk5wjSAcvtNoFXqAuxSf3oM3jpMPsy97VScgu5YbUXd4uGqBbtqK4vPqm1NtYTLmpib",
  "key2": "3cU1157Nsu8BnYH7v4YpNx5MAaT9zA9XMhfaegRM3FnWCdNZwXWm1CUJZkhF9mjEytEr5WqiZGVVu5V8owwZD5a3",
  "key3": "5jUedU481PXmNSW8pokWCcrjNoPscMFVX4g8AJbLQ8Bkqq5ojPVS1Kj7tFCAaNEKR8sUkVMSLMMyZbSvUQ1eDqYm",
  "key4": "3CYm6J9TgVy4nATVgc4TTDpmeMPQb5rwBsQGzH6JiP5LPMnCweNQpPuUZXYJ4k8RpiuVpGtCN6Aw7iEwThLb22Nf",
  "key5": "SrwxyYjkNzfMDydE8umtttsWmNQ61cLkeveCStDi4qfGxHcHjBTteqQ5ce74anfH8JKotKWu9ywgSrtaqD15UQW",
  "key6": "5mnJCeif2gpBWyRiKrUMmS7KfKS2A9d1paJ29X9dqVdzH4aXZLFfN46XxhSNXrv5D48RyembH8pD259crkMwWsUm",
  "key7": "3JbYsvuRquuHFJ165oFsu1RCgMvtxYL7L8VqGSL63h3YxJht83Ms4r2VjKo4cEAfvnvCbdtdG9T7eh3mYzNxDdBz",
  "key8": "JAXT8yY8sbAX4kM4EWwxC6aY3qCXfdYT1moxDx58bPg8tnnQ16pv276sc1owGHEQdciThryBMLKfHGxg1BEd4jV",
  "key9": "3QasdCrwK4aXQHtz2DNcP1U8nknVnL1SrcWtvtF7yVxqS8mLyz3ZmqKzy2HhfPX1BYdVYo7jL9u4Cx5jEpVtiaqF",
  "key10": "2Gd48XW8BZ5Hz3fonwyjYxZMkFANgfnCvJkhaRe55h5auF4HvEw2uK8c1kBUi5QFJEaGD12HjA9Uiffv69Tfyeri",
  "key11": "2HDtr1b6z3Mh86wVDFy9sDvwHXKbXS9eDNK9qNDD6apqYkUfBHWBhHh1sEspZnS5a1U98uFgopyqZ9m1z3y3ibWg",
  "key12": "4mgerMeGfjosNHXn8ejDqEYUxhjAEkrXbL4cwQtYySaa8QuvrKifkNeTKLa9QsPW66JKBX8KnXU7hWJN85KJkC7y",
  "key13": "Ss2jCSC8enMi4fpwTD5TjJr7f5tL7DcjB4SGxh3GEnwF8Jd4uXzCdWmHAuv2dtHAs5Var2HdJDvYDxyKnYisSDd",
  "key14": "5EqeWaqz5k4z5H2JVgXzYYbZbEwFYTV6bV2WxjGz2acF8vA5hK8ShUnht7ZrdBzyBvL6zmrnzn3MEviNrAT4Toa3",
  "key15": "3pFzH6iUv4U1N5mwPcPwzMhA15RRYbu7gzbq7bxmmVfoGxYvW5q1sVsw2Lf4crnwQVzqtKiPkH21yNjPjoMBs597",
  "key16": "5oUYCi59tkRxGUy425gXH6kMu7rsF5JfWJABYtTFXkkqa5YwifqQBmHr4L4uwuSwmAVty2kgLkEVSenXerKZhPeH",
  "key17": "2zdZAVBgKE53AfnVF6LwTYMqbxp7uKvieWFWQ5UGG3SxEh95T1LdsKhcsYUsGCwLki5WzeHxd5PhVegaqdacBbZi",
  "key18": "35SV4zifjgjMc14kvxz6QGke89Xcuoi1TFqSiD95gP9jVYhYePbbge7Vx7vJ3UBf9znPehNbfMBzgBf4YY2Qbrug",
  "key19": "67GGJkMn9WPaxDKj14zoMfNqbUiBd6YK3qwNcK7Xw1S4YiYyVbuXbGtNGQXcFTr6z2GVnTuzU9ZeLfAfi2XH27xS",
  "key20": "5qMJU2d5Bsrt3qGocMuHKFzoWS7Nrmma5ZDL7bRfsTeATg6nYe7irgzn3RdNxByp2U6LXZm14CRimmgNr87uuz5e",
  "key21": "2ibdtoes9tprZi6PafmyF4zZ7PcybefLZXy67KUDAm2h1w5MgEXuerK6yDM9VEDJt4q5Ypy481KSQ6deMpEtUVCb",
  "key22": "4UXVcN2JWcnv2KYqpitYVvVLsqL1Av576wusxJc6iY7LCRWCjZS49xnzBRXALA3YQaY6jNpfoU1kRKZU5XNBRiDw",
  "key23": "5RTqffhkRVPn1uMmxuQgQvh7MD4hwa7u9yDHELfQJN23H3fPoRGQH8h77cw2qnZfXyN4JzgmoF4f1jbU2mWbupXs",
  "key24": "5BME6D9kBRzUr27TLE4gsHHCUbbAdQSZWrnnH1qVYNUMx7xpQox59sYKKbGCEakyQYiiC8vp6wJxbukgNDVU9kf5",
  "key25": "4hY61UXGT3DqbQfeqMuzVfrgFbzbSugHHLjDkC5FY2KZXo9v1YYBmgNDi4VjKMaZ2bx7YJfdaeS55FnT9Z1Psq2Z",
  "key26": "3Au7RSif3Tfkrx9maiLstjrQzXgaiAxMUrmZhCDVg3Vzy6nBJT5tqeeiAh54buScSRQGwWBHCRsDZ7jQBTxcnmR5",
  "key27": "37mioucj5GqNoXzKrsDFFWUBDxfLzCEFGvddCaCvffdNAT9yUeJeazVhcUjZkFLgDZqercTWxPYK7MMG2Rjz35Uo",
  "key28": "DqFVoK4fKRXw84kigxsb7QTSGVyC6Kjc53C9eoJK5G66gqB9fLL2X1TpkDmEEBhAKFFsqGZoyzU7LX2vS1hcTHg",
  "key29": "ty7PjJjsFTahPJjxAhcvCgbYxEEwrf3uzGuac72Pn3pWN5JgtMatm1nj4YixLyNdWwDLJMtBggiQQ2UhqxzqgaP",
  "key30": "5Fb4Rf69QamXkiPsSEsJGMYXyeFVWFcjzoPsCiERwGfCZVoV3fATur6eRFYffawpvxyTqmH41spCrD6HuZC88EKC",
  "key31": "3TLFayHzfN2G4chhyc3WVnqwLsybBQbxRVc4cDfax4p2g5P2T7uatdwQiJBrNjtoxVEkH6HYUxCSGAw4bvrXxx5n",
  "key32": "2WQoPbyzR7pkrdWrfQ7t2fJuHdACjCUbiLB9XAPVT7gjmefQSqYXsk5N3YwWNeuSvM8ziLTuDHRrDfPh2BV3RoAW",
  "key33": "3hQbw63j9AZw2styGX1Tu8qnif6B3tHn1FJskENQh1FfzqKk1oJbE1X7MRQBJnt3NhYPXYSDR1mPznEL7JGbNTRR",
  "key34": "3ug69fR6bSpr5gACrVH8XL11eHr69PtxzadjrGora34jad8rJMNxGyiRt1KyPGrtRqUp4vfDzwrkoQoXmh8KgVKg"
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
