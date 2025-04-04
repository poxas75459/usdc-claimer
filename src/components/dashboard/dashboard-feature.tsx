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
    "5197Sf9ZrxoEPt8RUnvEFg6TveUMDbgqd5xbc9QxFbnh2WVgzt58d2199rnnkwN6wt2GyxnXzwgCg3LjjVrFndQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwjMaoqmAQK6MfgWun2bGr7stDdRT7k8LhNR53JaXXzRP5Zyrh2VLjmbcDajtBp8pkxBxUkjxodw46kD3w5TtPc",
  "key1": "2cHZFo7jb8Gonbbhnhk5VR1Da89om2e6DDMMBpfuqZjwF4d2PxHtXV1nCEA7jigcZLu4i1yhQy5TWLathC3JbKWp",
  "key2": "oKzzu66zQPzzrn67GX6kXapfg6zU43Uofba4yrvy8d1yYKFDTk7cAcjyxekSEv2upryqS9shnSGBYNxv51CNQ6w",
  "key3": "59k4MUNQ6fBj1wZnSMfAd4CjjDfCFvG37VSJKvpTM4SBh5urA2iQbFVMgbcTb2Nw9SCk5ihYpQYtapvZvpY8gDv8",
  "key4": "5dLVCMGRUQokmZdMmkL2K7tf2Qm6829EkDbWarwgyb15bcm3DGe6WQvAasXqaWxWQY2A3tdMHJjL3M2Dm2oDmtzd",
  "key5": "4tskeiFZcnuFE6dSHTfrRBSU9qLyhquDytsAYhxx2FnhxY7nPAywcro1qH4XP6ZAVNiFoAMAQAe6TVBrRbviphsa",
  "key6": "5yecJZETL4Ppfc4J3gEqnsXSWDD9SnkcsWXttCLwQwidd18z7x5UFLfpATrfzRRGfw5amn26kMmy8omqWnEWmxbG",
  "key7": "2Dtvg2mgKjsVs9G7mPuWYe7KR1huCr7QVWZA3rNhcB7JHMnUuvd1xn4Uui7ZotqmG3oPigpTkhLXN59SkFp8yAv3",
  "key8": "3yJasykR6sHkZSFRLszNj1wysrbddfwNKaSra59dJjhWfamSa7ypPtfo7G1r36PAqVttkWWVuQcf3QRMKbwaGaD",
  "key9": "fk1Kz4Hok1CeesHmPWJ8ieZ7TUbMUS7RLANcjZTE2S2xXfh5Y3eMkv2656PiPNT2mTvMZQxmrmnZSJW5DcSJPwK",
  "key10": "4kgxEQ1xek13RnXmpAMMrAMoyTUxdmmxDW61bH45GaujFEPf4P8T21m8NCJKgwNSZGdGxLZW2PELgW365UYMS3yu",
  "key11": "5N2qjmMNS6VvJoJcL9qxB1ZvWiQdZT9UMskay1L3HPdX52i9WDPiqvD57sG4yZWaeXjwx1ASf3VbxVouK1zQLpKs",
  "key12": "MTHdzFtZkUBdsBPkfziXKiT3ajRtBrCGf73Yfvw2kB4ddM3XQsxRDtmxvsFNJnrxLi1K9ud8e1Dcm7bp9VdgSKX",
  "key13": "m4erXvmmStqgxNV9KovVskga1PGzed22Lj13VU41UHHE3JfmEUfUBFt17vbXpu1c1ZhZ9G4VLwVTiC7Zn4c1SPb",
  "key14": "4sHAiQ9WDMG5x5pTs5RNpPLFr2ZrKdr8Toh8JfgbJ2ckYFGX5PS8ni37hmuefqtV6T85vKGW8jEcx4u2EGvSxBog",
  "key15": "3FSN2Q1BEMQ3UEHt5DJn3fzT5ig2AKCyAzagYWT8p2LihhVpLYf58qhhtWkZZWAcDiMoWCse91DiXPdYnYrYqKps",
  "key16": "AEaC6aR8ThB7GDhBVraGjn57j8nFqYBGCNvXm9RmnfniR9VSiLTcBvM6qPGBzekopR9xuNyqHgZv4sNsGUWQYfe",
  "key17": "2VvduwqAviVoF5tJvoXnmdHfM8SadZv8t91BgjHDgL6Z8FDd6pdK7w1hxdLMLdFVRNjdVGNUB3373ZZKs8QAHxzd",
  "key18": "3kR5CufCBvWkGvrGhJqGboNVUqma9dRapyogWReYaAVJXQ8LECZtfa6f2Y6jRavAauyMYNHHVMrwtKeQ89gUBpCn",
  "key19": "jGn3uCzKHska658wMPMV2ZiWdkezhc2GZDqQhZNfBZXzwN8E6gYvfKTdbfWcTR24R2fz4RoJ35VGRFKJVRcz6M7",
  "key20": "WkXgxHyTFgcBTNTZ7YwgQd63kC3PHkxzQq53vS6Wr79MBZJdcrDmkwfPTcRVHMiW8tQ71nhWuD4dwXKYqFwksTY",
  "key21": "4QB8nC8nGULbvQ1JpzBnUqGsz1JeFNEKfnwkTTRfwgo5osnXpE2VW6afq7kCXMM6jiFHHqEsvRa78fAYu3Jv2cmJ",
  "key22": "YSmLkeXa4hPtW7K7m7MnJtMLAGWxVrBAdHvt1nwd4169D5s1H7H6vpe4qTVcQ4MtpLbdjsJXyKe59fZSaHYyMav",
  "key23": "5yXwy9SMzqpCZyXiFBMsYCXmm2LzxTaH8tKwzsEjAebainXXUQ8rAconPe2j781PTLRpKj4RgWY9onjmBpu6N3CZ",
  "key24": "3uHTGBBtmwBZvmdm684igPBd8KqDoLvqEcLy8geQDT26puM68UhxJ22eY2U4tXNkHCS2AFDkUXBKkLKXe8sz9JPj",
  "key25": "5Hw54zbkwCGJvjb2pDE627hWAnih1YR8DGxwkakxfAL51kAx64dWFscRSJ6w4HoGdvfNA4KoYPnBsta1Bpeb4SzK",
  "key26": "4Yy8f7pDj5j4JiMKUUxLjkHQQQ3w9yJmH1sH1hSFEZEJzxFuECz83sFLu2iL1Apps1b6d9QDy4sxMW6ZrhNfa8yq",
  "key27": "EMXYta2Kav6KdgtngEAQg4BwfRRQSuP76MBFQpW6YdNDcZmMSEz1WMNrDknvjzFctQff5v4VjCSKGbZAwqo18W8",
  "key28": "Jt7qw8rxMZKGA7s7RBd72iTYMzqLr8bWL5h6S1iDCTe24MERtC7Y2EQi38WiU6mKx8hNzTWCv3SruHT66CZTzsX",
  "key29": "2xCQnHegrNq8gBDiSujSAzr8jSeov18H4CdgVBjuKhqBbkKZK2Dw5f7o9W2vDiYNQ1Apbn747y6bA5Gi8ozCEQaq",
  "key30": "4Szk8i6LcQSNrzCC85STbKDvuJnycADwQCrhUg9NL5fU4oUJmgY24zETNCmiaLYczP1AwB2SHnqD1AuBDsbLLkuK",
  "key31": "5Py5UAowMt3N9cEVXFP1heosgMo5Z9TJnDpQ7WApZhKU5ohPV4Aw1V79y1vUfg8pJpPoJDnYoAxEvAAyBN9KCr6g",
  "key32": "3vEjAWzCwsxY7VpheLWZLC2YXQTjyNhfpexCA8HxU8G16hhVzAgHApd6TjMwsqqEXPZVAp7Syb2bmmkqkuiJcNk9",
  "key33": "3cVbKBcWtzSvnqQkSTjMgzpYcM9HmgwYciUM9S6VDR6tvV7bHM6iHS7YsBjrwDFZVff6s3KDHWv57j55QSqF1hXG",
  "key34": "2wQzXx3JLyBibgQ7dXMafN3DjXfCsVhD6JpYz9dqEaGBrcUX2NWiVbeVnhpHyMMsHAfukk4LFrTtA4fFWuvLsRku",
  "key35": "4PVsp6ebVgG7KzaoVHDnwZV48NguzsSDYzrXX6A6nYR6yDZMBRYAekfFZyt1Vr27oXQgEDNwUncTumK9vwC5Vevy",
  "key36": "2iV8E5JNnQWrhL76F3tGthQDHidv4jEnFFnuKiiSj9hsMW8c32LKquvzGotcA45kQRhMMfzoedBrJX7gKL8dafzQ",
  "key37": "4bRjbD31tMjsozGyd2hW6D2kH34PCwzJ9V3mRvpvZiTa88s9P5m31cd2bJRRUnP5LbDCB1p2W4SHFYFjo3NdxhAr",
  "key38": "3eJyu876caCm13G1cMMzCoyF8LxiRjgQLxx9DWwyVuLZaQe3mSEjFZS9kiHLCKHEa66AVwFDfxdYAW9Empo2E1HP"
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
