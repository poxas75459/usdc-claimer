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
    "3UWgw3ifkdUy3NkW1JJ6MPGEgZjKqCoQ5jQmq9Hod9knAKCwtaoqcKHSkimRfksCVMM2DRzYLx3AG8N5k3Wrfja2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHrxeDuC6wkiccaTEWgCpdxssnpTMuRoYgTiy8WqFXBwLdW59FiUJ94vYUrjzaGraV3KYKZpcAxwM6CL3M865aa",
  "key1": "2qsybRxKQ3t8kQbvXdYwisqMzvBX9gxhEEsdE4EuTJhP6j3LeTwR4KeJd3a84Wj6htwpaW9T2K8azr2keRZXQaFU",
  "key2": "43UNbBQQtsRq7Qh79bKaPSFzVE9z6Eqy9qyrEnUPtfFV6PNt8nrouV6WBMCNLivWXoPuNJ4yeiz3CJh61ux1z8Cu",
  "key3": "3a12h1JDAEHNyGnkgP4neHnswCsbFiqZ3Y1r8UjQrunBJhwTxenKzu4EzxqWsLYMTQbivET6gGQPgrsFLLwWxLP1",
  "key4": "q3UyDh5zqHrhZVAX9CaBGjorDtgiXf8djbmtcNhz7YnHVN7tPGhi9czqvfyy9CzsbbVWz82kkJKeeYrDhcdXrvw",
  "key5": "KmjTXnZ3w2ZqiA19vk9PM2Ezxi1iMn4Gh5APCbtpfVVParQ6nvXnWki9GCXxPh3BEJMjY9DJu3WbckMm2McxyZn",
  "key6": "5xg6VjVQNrekrp8389wevSkCEU5NhTqpb2bQKvtL6urTTdC7sFFKEn2fkvqZcofM7LF8j5SBubBkGxn1Yekb9sNz",
  "key7": "4dhhFMcgGGL5RHiCD8jHvEGfFXkUwbNXASj9gWcJWTinZiVHhqhr6xF9Wz7pJXaskyhhzwSbxM97DdXbPPUrgF2u",
  "key8": "3G6TT8tv17gnAyBvmvvmA8ucpqaNm6quwybTZi1Sv4YpRn5xihv5YFZiEKkWZZKYLCSFAovp4cWxjbSAS4rkzRmy",
  "key9": "F79SjyNZvjrpZeo8XQtSbNqpG7wrH9J2u89dxKajgAWFkbUtJTCti8tya6dzj3AwdJgKwLdKQ4E7thxmSiByuAW",
  "key10": "4PVyuM5Mvb3kfbyQNhE3vAvUXJZtm2mCwBwkb4qzZGPyuaGqcB7BhP1ki25mLny5fx9ZuNZ48UYaBGwKYrEDx2yg",
  "key11": "2MEbYcRbfXLE3rme5Grv7o8eaGCMRtGaHQW7rWVDnw1qAhL39oaoQLZWL3ug1oXdpqEqnnvuW5CtrPpKiBETQTN1",
  "key12": "5DqYKpyZgHWcjyZiKQWsQYpU3Y8EJ7dm38gkFLqZCRx5YVLaJVUcTqs7qJh7tMoxaJXWvMoWmfvYcbEovJWAyDmj",
  "key13": "4PySfrrzhUGnqUU1iSyJ6h1K7P3WmpxSgy2aPPZHwQp79eXvaPkfSTYjzXu2f5wn94yXifRftHi8YmjtgzQqw3kN",
  "key14": "4RzUuBMXefeb2RgDrptUvF3a9p4Aoc3FHDg3q1VqDMmZecijuZc6ybZqYuUkzEUFBYxNtnwaVG52KA3t8G42TiEi",
  "key15": "63nWX7LjPhxvQoA7eYpJKs3ucBmfLxUzSa7iuYRsNmhtoU4kJj5zKj3cmB13PL6MUSLRi9XBpNnJHao5MaaMSpjf",
  "key16": "5zadrmXQXps47kPqWhWqrYmXBcthR4FBMWHxf5Q738EVuEjpigSxD7uJV6egfGeuzaoKEUZdpicXMfdX7b7irm9B",
  "key17": "5pvJdMqmv3iR228bm8oanDhtpiHEzNhyfNKAHerWPdkpyknmyKd2NDf2iPgkudF2FNjK65ZCJprGz9BCC4ViR5pJ",
  "key18": "5Y7DCFLEENLDc4bAcqY4SzDFH7RNenJ4XdUjBb1ocgmYpLPcTkaWMhpmCpEi3Q3X1jSbtpQjyn8ob9zXRaoEeU3z",
  "key19": "5HFjDwDRM8RHi1JgHBzvZrnkTr2jj1vCegNXYNPzWzAShpTNZTRGdpJfkySNUFrEsTY7C6tgfcR5rLaCCxARNVb3",
  "key20": "ztXbyvdZmnreuEVQxHDLeM9yT5Z8QEZ4SLUuTwJUetjDS2Fkg8VvoiKFeQD2Bq5Dyjx6w5Wca7rQq7152BAnpQT",
  "key21": "QncSTvDYGKnf2Ria1tP9J3rVVBGJ6UsPCWjqzsrsXF2Q24jfvzqrd6iaUUQyFoEupTcDzUYpgmo4Lmrq7h63AMv",
  "key22": "4kxjAXbyTLWtG58FGEuT8MfReG2HxZ2cfxYbzHkeYqf946dfocV5Qd4CkDjtdCSzGCL9KEBLgYgJpnd7eF4tKH8n",
  "key23": "3a4vxDAbTxyYN671CMWyNZsmmMnjUkNfojLXddKuGWfmUYpSDW4usnWXQVAM523vzfsRvmAJR3eMXVuVh4JCzxNC",
  "key24": "rihE1kG6DBbQPDCMTpjnZjstSXb1weDHDrrn3RJVdWykFTTMY8VjfjLyPPZTumKrUBM4LyU1ib9z6DxSQp2eZmW",
  "key25": "441f4Nu4ZSFDBA2cUchZuwZk4LX7gTNcT41CVasjuECWnguQS91WBBpRy8fYq9bgu5W6Ka14uL5gZThZ14m6fHLT",
  "key26": "2UskVNucrWvoxVReU5nw8RTmWR5M79wAEiR7DngCMjhZY4SuPetc75gkJGJyrHcc5pH3gWbq3YkDsZcjVe4boYp3",
  "key27": "3YkQTpQVxAi88dR2gfkJFTysRxP1Wm4KdvuyD5kE9YaXD2ZXj4FgS1QEgLzBSdgqPov3znMqYEWuVRCtq2yVL3Ta"
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
