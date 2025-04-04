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
    "T193PE2iv8ZPVJUkfZ1KD3snkjYBZBunSgLAMyNh9dHRpb7MxsFat1UMkTT4uHjo3X9tt5szoJAGRpCaafYgj6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhaGZ9bGCZLVqmHaVDCHbcBbdztRqKWxf98EgJLwYJCRAfrgUKpEemcyP2qsw7hi1Drbnp4N8udMQcFXik4QBqJ",
  "key1": "2TzXLPgWwKVp421sh5YT2bSPixpZHMBQe9u8Dfuyw6JDmD2WMPTUB5L3UeRSEtiwsMsrdbiNkRD6tMuNzkybsKHR",
  "key2": "3wM552Sra5dpzFNNKzLM9P8DdLoVjywaJCvBbRPjSB9RgfZigv4Ba8YmSPKGPfQhD3jcZZw49t7FcMXUvwmwLwKu",
  "key3": "2eRNRo8UpcGRToDygKxTASYRrN4Zit2uzahYfLqrCyLaK7kWWwh7EFAQfkUVoLNJzPWuockQ2bZYRhJVqB87mAW7",
  "key4": "a8zyS2P1vNFyhovqB5NUwpoxH7boou2iJ8y3t4Y8gKZ9eA6xLuSXZtjFht4hi9sJUqn399ct9pkxKxKqToRHYQ9",
  "key5": "MN5C1B9Mi7685oxFygZWmzQwx29YpXiLxdffAceUcs3o9eXFZeuXb8nB9DV9mLeeLTMme29SG6kQamPvQcZzyUh",
  "key6": "4kskorYmdFyfZ7wKGFtAVFXjaFMnXQcXsFVymZLncZ2pi1KvaCsZJJkh4M1EyKTrrCg7MF5NGRBG3peDQe3J38Ye",
  "key7": "WNoxQjKSSHTW7nfbonqhYCQxFehHtgXcFqBwKN5pWLtrs1BtxjhgxmkNSNark5fMJ8Pq8PCWM5G4B1aZPzGACuT",
  "key8": "3X4XZYi33UEBky8BtM92qpgsWnWwQDqkeg2MoWv6Zyki1AnDUSpPcRZbzrbrFYgUx7VbT8oeATEzW9iVQwo5Lb6D",
  "key9": "28VNYBpEZo6mgLFjVa37b5SnvEWkNsD9xfqx8kEqDoWVxDQ2v87V3P3aZMkTRRdPztSccuTxVdCjWextzuGV2QRc",
  "key10": "469ez8eTfyWCZsNHdBA3PJSAQK4Mp2mamyThqRXJv5uo8HfFS5xFJG5wRGWFmvYC5stpej4MLrvjt6z8mQiaxvrA",
  "key11": "4ZrJhRSzG6NgFXsjqKG6fXGmJqDXqEQxoMyNkkscEhQnZ2xmuRk824CqBDMWRssNsRzGtf9Wk9kuhpTqvatXrqL5",
  "key12": "4jzz7GWhFJJcrpVmX2rsLPT8ysn53hSKCTHyX2DHXREsXXcyAVfc5TWhpHpYF9u3atNt67fjXsqqo6X15FySU7Cv",
  "key13": "5AWkawUPnsV5JBSGAofsivRPp63URcH1f5icpS9n6EjRiYtidLQ432kSCGvfeixyTw6rQd13bFYgzSJvfRLURqCK",
  "key14": "4om5LkwDZkkLCakM9a4vb3eLShmHt973ioWmAR4AdbJPDjCy2249aGhvuJaWZmJvUuCx4ockkwgTChm8iiX6fg4e",
  "key15": "4uERXvgCDqWGKzr5nck5q4bhuD9qEF8RQvpxp9vf4B87ukQUfQbBWjha8nE7Ft2N7a1of2nfEXtdfPcFvVrtV2y3",
  "key16": "51ujzuuaghi1mnsQoRMLmyvf6KgfJuaDMBHwkx42zz1J21mFWUtz3nAXSRQnP49H9Dv7A5MaLxXjnKbxpDDxyxZr",
  "key17": "5FXRLzF7QBFXk3EAb3pzA8EcSYsYrrtpYXmxWJSTJhMaox9tAUhjipTJdLXRgWNidQedec8FegSjPKVFznZLCjAh",
  "key18": "4S1fu2VrNUhjF8yEt8nDcw9AgyTjd6ZZDhezpWd9ZuNqFfyKA31nHRcBm15pA3pz2TfibBfoZmyyGUfZ6gNKYfKm",
  "key19": "2n2o3D5AeAnxBoYiK4gXkghSr5zkfSGxNo43rjJJ5WcVQVvTicuzFnrfLpTFgQudddaib15znFyxHyDMhmaGNgoE",
  "key20": "oYMYPXazDPhwdTjwVQvEZB75CD9kDLaZD79WiFzr1fsxXuk3Ebcs5VhYzakgDSoaZYcHPNX4aJQ8ZhT3kC5u7fd",
  "key21": "stSLMZQpwZKtK2KiT59x9ED5wv8rh6A2SSzajYmhhvHJh3YQA6jJBt3LkqcrJ5mkLVm8eR2FARotagQgsMgeiMi",
  "key22": "pjrnNcBnf7u5jz7bq7oyLkxNBp6iS6C9shizWA3PwH8zt3kMaJAtXe6voXDDrGWFoL5eQqeKEJV3XB1BBMgigSN",
  "key23": "2A5AzMcDJLZsLhhz925Fgrid51QzNXE8ubPLzWbtp4C3iy9ngMdg3agTwT6ZSwKHaP9eLuSqinhSLjt17yQgMQxS",
  "key24": "4KX17dxvYKe2LvS9F4gV15peNpvxntqZEkmcQffcCY9i5gwnx8TksZcQqn4vJusPhJP35w8hCBshcwzXGxCNf79N",
  "key25": "5UtF1wmmTYBdJXr23DdpZUk4AXuFs7CadLAiRsRYXvnuZGUdMtCVpEDcvw7CRUxpXhYZqnXjnm6AB6XPvMcXyDLS",
  "key26": "4NaPCpWqRJTtteJCnvygfvmXrH3biB9ziZLUzUs2UrkbwMtSBztoRrWMD5x3mKkEPxJdiL7ogA82EKjVXMcQT5G",
  "key27": "4Wxo7suMEUsMha1tRitC2MckzGLemnuqt56x2G83AqgTYtHPYcntQo64qp2QPFmQoGgnVTHruVpxm46Tu1eRrwYE",
  "key28": "4ZKuW3qLA2LJmcYUL1zfHnzBWMUqGGr8kCvo55kgr7KvnHTQxVHCrCHUyzda8fY3UA3MN9jtvRVRf1uWVDMD9ZMT",
  "key29": "t23LLTCoMdpgSHgSgusVUYsYYWs7VvQFDeJXYRqDRuYqPcxiXxxBPpbbwNCPXSaMxjyf64E8K3xUkSuDMPNsdFm",
  "key30": "2dpBUN24fj8ViFr5Z3jpy2jBbad3GR7B1o9W49q2oGdLVEvguMPeaRmBEzAqtRBtqjvnp6aVBV7P62tb4wb7YjzW",
  "key31": "46mXnbUBpmJGdWhDq4z5QyqtsWZMxY8gfvT47zUghAVmKPNbKd5wjCW4puNz7uVp5PzDBsruXxjcZJfvcLaxX7Dt",
  "key32": "3xb2gns8FdBHGfYXAnW3eeCYFQYfzHKmG4VHoKjbfaBFbp3PN8xqUsFii6NEtSpcyH2zQdZz92yCzCuAxzV71HSa"
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
