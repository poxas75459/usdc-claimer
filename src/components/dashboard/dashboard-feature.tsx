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
    "434jzv7sUkJVePVi4zAGvnMZq9P9oUP35Hn2y2yosYTobkSytxS9NQBUDcXddzgMKA3EF4SxPC8AmyZuj5zFyhWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SzRE1VdaNLmHy3eRFbEj9iMvPeFXyCP47sa76NP7zjAJDcmjsFs8emvXRSkfisYHZXhjJ5t7hEV2y6EEeg6YXq",
  "key1": "pC11Na4jhsZmSD2E5aSh12mDo8oR67JpQsrZXvp6L7FziLMkAivMdxuLyg3dQNgQSeYE6DLtWfgtSemg9nqHqQe",
  "key2": "5jXUrGHxLvTaNiE6k82MeQJm1RhiNK34CWixXYj1x6o7gxygkZJ4iUU7p7SxZ5wn1yELRXE7VmfDdv4QAjHL696K",
  "key3": "2m1V4b8bzGdseZTaFBjoWTyeWsBXz6ubTs9NLHGQwTGFba5397DKS2EigooQV1FyPTBBUtgFHpcUnDeq3gBBf49c",
  "key4": "4j4ZVLNEtsQEER7vjE4GWgRk4of5ztBkBDrMMWBTuh2bia4nAB2pFr36gZiJFniP1SYLQZzw6BkaAxFmqjcHDxXe",
  "key5": "P5DVbDhGMxpzxs3n6oQwxPRriWuBhLxgmuVs5JjTjT48P8qQ9pG7NF9nmNfCPn2fo3TroN7FGnjHsoYmXaxthEH",
  "key6": "QdqSh3caTXW7gmRtmTHsyJKHvJDqQfv1VbtwMKiRjEx8hqD2FE5tBSpdd7EJqcn8RBTBy4a3KzVWDZdVWqPao7i",
  "key7": "4cBa6xAFCcM6HThxF4EivmUyYwarok4pJduWUyhPkX9DHUYoSCvo45zh5fQDj6AFUcYfDvQDo7BrqfAmAeN9Qsdg",
  "key8": "2em2q2kxcS2oGzLVqfJf9H1KXAoETyb4bkzmohKhpVEQ2kTHqesTPReCXToj1zXR39sxpSXLwZhEer3HgPmHugN2",
  "key9": "5kZCLdDW53cYSZAZftdduBeFZxtfQUH9CZ48kbUV2nK4rbwZGdc4t5jd1yuNsSLHvwvb1KJdQsCbCwi4B31xQ9v9",
  "key10": "58QS9XqNSAbWq2qtLWWsyu6ZLb1Ay4hbJHoFYHZXe82dnE9hq341Ffetscw6tfhRQKgq7NUyUkXUPtpma3oe5zEt",
  "key11": "2ZVdcdNqoZq1AJ7829m8ca5tw2REnrXyjdtsfCjsU2e1vA5TEWVomdNExh2pB6HNiDN9eYCNjV9h3pmkHSdM6ack",
  "key12": "3D7Xe7T1MuJSwSnfMyrX9ee1oA3YtpSH8bevEaXbAb6uvnuRD2CJogw1PmuTD6JHpnpE4UTAoFq859qhRNr6MDzc",
  "key13": "3xiMCEV7s9Pvk4P4X2ei5SyTDteaE6ptutSuAh8htGHKzNxRTK8k1kq78vM1BFogdcKB7Ax56kxAUKZy3vmejFK7",
  "key14": "2atBMtxdRp6a4e6eDG3BgnkXhQSdtpbbKMfH4GeMVA8Kg3ERVcGotT1Pk1E588A7D9gGtXhJ7N3ke2T7pmHHk3je",
  "key15": "3ZbKHbpXKsBi4pA1j3iR9LdEZkDjDuoKj7hRaztZ2WjRbKbD1TkZRDqJbgDiJo7fQnga91VyQAHCursgBNreEN1y",
  "key16": "5n7QtcpqpE293gVboREPEvuiLr5sa3h4h2HoGxjJCGGLQYFcnMotCRyVhWD2D8uTyy4ogHiDUDKDH4aWPqq2SuNm",
  "key17": "vammgUSB6nx9mRW1JEuHve3YMUvoyNVDonQgtmteTejCRStkxMUuuBZ1eMoe3UjeTiTPJaomCBJdnvLvVvTBwTD",
  "key18": "4hLF2oRwF3q85FXxrn3zw3boq82QhRtk2DW3q7tbRfyuLYmb8kLGUvmqkoYYr1hKEUJQU2ZFsRgzCpb6ay2ZBwiS",
  "key19": "59JVKpsApPJPvyskpofhYEYDmVZLwLJtKBcHqdTqvwQxybqvNjTKV3Y1duSrkpm3wGfKSEWbWAWTjSnut7sVqv4y",
  "key20": "A6cm4dPswzbevm7kEGjhyc38LxfVvaUTjiaQ1RsYNgeTwgngDNrbhu1e9Zb9u7S5E8ymEC2z6LEMMjmti8e9yBp",
  "key21": "2bb6yKT6sax5qHStGrdJsJHhe74whEER8f9joQfi8uhe3ouU3F27fahaW1VXnUyh2Z8rotzW4pvpT4bJDDrBdFag",
  "key22": "32qb6hc4dVHWJ2yKjX1nqN7nte7jrdWDSNKUbRVrfdU1KyEQfyEKfM8w3fSZMbTv9Aw2Q29YJhFfRvxkTo5AYdtP",
  "key23": "VWmp3s4ocyr8FuP1kH9zz5F5jJH39Vw2cRuQBeL8AzsntM51DTUpELxfuzCPKq9t924fpyLRurBHFsQbNzk3HtV",
  "key24": "5xFz5qWqFPsDPGqPe2m5oEfH3h5pEKYSDLNWjqvBWJhsNHSMzTPJczxEQ2ihNDD7ZiS29EdXyLsQLqWJvcYUQZup",
  "key25": "2DGf2T5WanjjcPaYuBjnCAPVMv1zPSpBaSHEBTuMHhcLVe9t2TXf3GZVJu2fSmxZvaCoHy83EUq96MHP3H5qib5E",
  "key26": "399uHdqvxx4XWXzX7j8Mnzo5Ug45RytYxLmkkWGHfam4TArVaLHmHS6wr2a45oseFLFkzb3MNJfm5j73wi99KofL",
  "key27": "2zbevLaPxwAgrUmbGuiAANC3baazwQ4WiN8srs96d5Y7Kg9fpgPJj1oqWP1CNqmaQQN3fBmWecqUjw6wowiuwCo9",
  "key28": "KJg1jnMiXXaCa35vvtM39QBL2fs6bJy5CMsXuwuUv5Zv4XXdoReU9p2AzZxogeRpYgfhzimyiEP4FdL8UjwSYVQ",
  "key29": "58DVQNyF3V3Lb32xe4sLVLHUK464k38B2KUhBXVsAXXF9YjHg2aT8ntPMkrgp7nsmXrWm739bEPHAnUdsHi7GcMH",
  "key30": "5L3VvCzT545sBYwbhNFrRkAFpBZWjNmYJdoSpT9DQR44kpJEH77PJzFa6fWmevWZDX38f4wvbav99tKu7QcuzLLD",
  "key31": "2KnaJQDcdsoqySRGJka69GPvsRFuNb8ruoqNviepBuTrZv9tQ7DKzb6F8qoNP9EnMntJtUXyE8QtoVRq2JQds5QC",
  "key32": "2mBnBxtaA9LepMKtAPmGktmg7ikkgsuq4ybhWC8oyYdzSAwW48G7KuKaH7Yv2PkSCheSpaTr3HBJvwZKdxFvdYpT",
  "key33": "47HiZLrTEjwKgxtJU15LJutT2MZWeYk6kYrajgA2kwnJ3whFety8rGXaGKE5p7CQEvgRxv8nSuQbwwP4cowuQuyL"
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
