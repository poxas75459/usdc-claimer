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
    "2YxLuhnkATsL46zE9CjbyzTCzrYyc4qiB6jBit3UwZ8Qg88wSRxs3EJap12EeT4NUNfDukofPjfMJB1gX5ZMBqPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKpcYzC5JGNFaH9JmYPoHeYYPuVhfdX4jACbJMcxmWnzFyWeTVnfY7Kbq8QDdPYXgCPKNCVkvMUeYVJF2LhswAW",
  "key1": "4wVh3vFkqDjU62kEKeNXZc9jAoaBvAKc7mb9EaxnT9mQcAd1BLUYDcUTh3nvAjvAJwXLm5Wg51SuAE1DZjZYtK8j",
  "key2": "2TwLccVYCusjZrPCKvMBb1Ud6AvMsLw1nCCuc9wptZ4JeNV6Pqk9K6niVVvP7NNeyJwaLEeeKbKU8QF6S1S1czWc",
  "key3": "3sLkwxQ4k2i81qsV1zY1jVa1xXNh881UwUHtGMi7LVUZht3xhz654rWGBmbDehMbAivfVspCMD1B43wBafpyrFKm",
  "key4": "mpStG3WkNQdZKrWwzYK7bKaCC12GwuBBEByRVu7GsLWyUVZnGQh8TGHZ3mRWsnUP3XNJYHDH3dayzm4r4UPkB4m",
  "key5": "3moqDW7KuVZYngbDwiiKBvX3AQP5X1rwYRv9LTyNj8Xd9kJiKbU5RpeBSgheZXdZ4aEcowuhQTgm3FVcfbYSGNZp",
  "key6": "346xxe4jS58P1ECkHuie1bJbEzb3pD4yXzh6TGGffqHPcBvuS2bPq4MdHkAanGsCH21JKhkX2XC1bSK8ndt5nf7B",
  "key7": "2gZaNCoWXAHZ7wY98oQsqpGyc4Y2BASWuLJDnkBjDS3vi28y7QGPkvcmn2KAY1wyHcfwJd25eASPqCgJVgvP3rCb",
  "key8": "4fWXvr7en1gG87MMS2CaS4FUyNYSwdwivi5Z88bXSukkNnwLuqwmWsaHrfm7ceBzZnc2aoyZtpuxBSAtmp1Bchvg",
  "key9": "4WYnoBvvQfGN8VKLzhdtjS6XyBsKzDyW3rXWrVtM2AzoTDs2mqzKaRBy4BTZwihpjUrFXjdT84FHFYchAtMYmkNH",
  "key10": "5QttNK7GgZTXhwWmMoRhSsSFY2pXsAbdMwi4rzc9DbZZBJL4US11R4DpgxDjkWuHeoKbGRtZ4rAFm4zxceBWcof",
  "key11": "3ZYwxrhpqM5UVWpSHCGM9xbqEQjGy6dEZ5r2ctAJ3G8RgsdM3i4RXZcSRGnDpfMvaDmgaGvupVenEtgxtvzCr3Qw",
  "key12": "VVumjGqaQaCjH35EPvKsurKFsepd8S7oqJ3pRua1txmV2miJXEQ8Wj7BJF75SX5HAEwPQ7HMmanrWXw8hRoYgR1",
  "key13": "49xKgVjGUAty2WjqVuPBs7ZYK9ZJz5CrJsb6MvDbt4aXPBwkPrZJFHZCpnBQC1oyKPNJjvC7769S6agCv5uE7i9n",
  "key14": "5ynUELGmMF5GeJ5qk6a2YpCtd9nH33AukjiEjyhrQy7yRXENgp4AUAfN4U1iqhMPmP7KBjMVWrTwBg9FUA7Kwdec",
  "key15": "5CHJdZLs2gKWuyAbJDTqShBtQtfTokZrvpfcv7mdymsN3ZS56QMPip5oSff53hFgj9eDo6QnEPs4HHhfvxCeUd6Y",
  "key16": "3PYvCCMipeWEEnCeosG3rhyd76fRc8md2eTRUQdc5jKpXLMcet6zfRB597oh5qYsmhq9NBrKYE25stDsD8a59MLt",
  "key17": "54Nv9iteKygknqrSJRb5pFzk82rxxzm9aicwKtAxy3V9m74ur66xHzrkTiQp3B9xSL6DhnXyzNwQ1kfuWA12w3WV",
  "key18": "3tL5wwVJ1WtpokrkN86Q4y3DjQfr8GFqb4bVp3PgvLQ93tsJW61XyEZ1YfgUrHGjY8Mi7d4yht1BZsrVnWAHTCCB",
  "key19": "5tsuFKXW5piwDdwS1rcgn1UdhGsHa1SYqmLDfmhKR9FW9stwMccLjVFAFEbdrH2BVuVtUj3eesudxcMPDksR58bU",
  "key20": "2rdL1L1b2D96cytA3L6byMFN7B92tNaJvYzHFT9PpmpJGi9dPGynh4rbcbz3HoBfxgGEFmQQeWFkNT1qxZByB7QX",
  "key21": "4Z13J7M5f6w7qSb5NJCXJZvSXiixUxCJPHrkxWe2zrcKdQ8w7t1iGBDfei4avRy8ANufHX2vPL4bwTshGBtf9kPc",
  "key22": "3cEdw9iV9E1cxSErbhaEhN2kNh4ZhdxDb4zVfKNjivxVvhki1ghK6oiyMG2tqWFs8cBP3e5UiQ5rb42EbctkvwVW",
  "key23": "2Q4p3R8qumb8bCbLaVNLtqAVthTzbvaPPyazYnj7CfGXpMMWpDQLWj2Ppe6RgDZztU7jhsaby3iaLy7bb3DS6Jqi",
  "key24": "e8ifHD13kP3hCjYiW2h3m4hRg2ERz4VNR3n3oSGitzHX6KAsWxtMw2G9FgFHowpYv4fZQwqfCj1CnL91oeE6git",
  "key25": "2MRpoYc2bPj1A7ojLXtHSyKxSb8hiLpieEtxQqJgqchxfJT2qZJVqX5W4U3mEdxA6A5EaRWYZCaWRqjYKzzxgFfa",
  "key26": "5A67qh5XyquW1z5375cf7XZ37fi5HoSUvF38vq6dTzbyfSCuDjdHwJbWc5Lu4uvdWfy5KUKn9Y3XEqr6Px3AGjsV",
  "key27": "5WUhZPuDrqJyYMkLMR9Fhs22mKK9iuGsaTzCvzk6FwuD5kRELrEQsUVWNzkHGfzD6qXTZESjod7vWCRFrtkCG21s",
  "key28": "4CMaSpuhNNrfYzpGvS7PnQRTWjAb1EB8h8Qftid56smiGG3ijHSUUJvMaK8VGx7QbWrA3Brfhv1pWMr68dAaoKgD",
  "key29": "3sJbhKgu11LjmJRPRrgnEvWzNer9KzWwoGiuBnp9esb5krx8kmPZv8N2uExQjsx4AoR5QA2jt1UmgzWsjt3ucnyj",
  "key30": "wbefp5VoGoVUzPF2cuYpvoigvkW1THWFQxivc15PyjZwcCHmPeCNLvajLKVNmBFZMjVfkY3XoUdPNPHYkujnUkx",
  "key31": "4qQyeech3RReC5AqZaPrRxfDs6wJfQQ3pspxoUuiwXfsY3mAFHm5T9j5NPE2siF2XmPvKqxpqH8GCPrJWKJmF4zZ",
  "key32": "vi1ZvSuvgnBa6Sr3sBwBtw4HCMM271vK9cfYHbaFGQosevmAow1adoqVEAH6VSFiR8wnnnBkZxBp6NzxBYJyuLH",
  "key33": "3buoMN9ygQcMWJHiTP1Lwt6VbxKHFQKaQiPyZxQBENikf1cmuRKdwAYpZBWcYhLrk6iNTT2UTjYC9KTEYKamkFpw",
  "key34": "4qMy6MmbrM1L93aVemNTJcvkyDWyXAU9wTXgqvmkEb8HdRezW4gq8ApoxgQ6Mj8VaB21aKEzLgtnQgk4MG1fz5Pk",
  "key35": "621AbYsMEaYhabZjPUnjRiXo4pSRPFC5nVwwoVQnCD5hUnAVAV7WYxHBnGMUmM18vCRbdummtBGwX1G3pvEpEWpB",
  "key36": "2vuSkxWTABrgeY6n1Tg8rMkyZuqC2nJgXbe16nrzdNqx66dzKeZNxS83UUb5z6akv5FvN4bKPmGXVFuGdYmFPwoH",
  "key37": "3krfu8SeDREgthysk86c4VTV4qvpUzdWyKd59Xz8wpZGxLZ1Q6CW9kdKPSFYsSeDe8LruDCf4wLvdkGPQhoXKT6e",
  "key38": "4a4SFeddDzza3x8fMxsVGDAg9Ni6FbQMdPNwDJGjpcyvvrkXsq9FJCLpqoNmUXxUp7JpVV2t8eLdVcfyqQdvMA47",
  "key39": "3Tmia8B73mhmRzr64JoL1wT1Y1gVWxrJooHmFJmdSuK5PA1YEWKt6grmYYW93hbrFgNXzPVWp6NAPKnLfPTKFkkD",
  "key40": "8S9JmA64Kv5NxXQTWciyAQAtxdt4W2kaY7mUJLVKGGs8cwnDifJGJ1jzQghhkwXC3XahwpmqT7t3pzBWsZdyRZW",
  "key41": "4Sukk4cbYCHSGt2FUX2fxpMmNxvwH25DgsF2StC1Nt43HbXwmTdJRUhUzyRZrtztP43jn5nE4qStLrtFC8oYfH25"
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
