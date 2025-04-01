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
    "3HT9HViqtyiFZftEmJpPr7q8XuRk1JDjmSHkyDUMTEwbMBrmcBWkx57nYuMchJhRDfkiFU2BasLuf1QuwWq6wPe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GVsbrpaqcnN1G1rkrKKX1Y1RP4AHVczwUNPnQFTtEz9uxf2GFA4hFC1khbBpAc4pKcx1K78uWQ1Ncw4tuNxscUE",
  "key1": "uqf4oqvjXSKHifjWdncVKecrf2oyquFV6fa4MzqjoYXsfuRXobwUurKDeNSLsHKMwdU7gYWPrWQJCD98Sy8GjQ2",
  "key2": "urcmYXZ5WHQcRmat565kFwzAbV648FGgXd85XU7RTwEDDbmkx4tTvLiUJc7cnQiMHmrM59QuFpdJ8nE7ugQnYAk",
  "key3": "3fayV1e4Qfi74mRmiVn5AunmeLUkSKaTqGkyLkAvRwQRJ5UqctBFXqfnnoRJmMA6WEsFFZKd1BtQwCfup1PZw4zQ",
  "key4": "3Jj5oU6bE75LackqPCx2rKDX9NZbDCE9VGwm6i4JHAPhcU9DWVDgSGmnpTgAnsCmq3hcq975iytuiM4aDFGnpGtF",
  "key5": "5YsvMuXRFMyDU4yi8hFRT3jU5ELTLojAWSoQSm2yEtizT1hCmee91qfZKn1vgjaGK8ZkXe7utm8PWbX4kejSVPmR",
  "key6": "VPNUc9v5gRS5MGQHuDmUzGUPxZSAC973FH6ApPWCP54BDLbPD1Kx8KJP5iZCqoFWnVUr83thezZv1TQCQjakuBj",
  "key7": "21csiMAJMrSc8qUyqNvGcscEPrfyRpLAy5aWHkD1sYXhrJgC1C1XgXmU9tX3ihqTHZ6wcW9AwD2MBx4BxqhUsoYg",
  "key8": "3sKmQk4ZUkAKPCrzqJjxgQFVQVaPQAcsWryPLRnFc6MTbzKaHoFY3toVkRfzcYZHv6q2jYDgwijKxVghWbGgRxJ1",
  "key9": "5SzzmXUYXbZJaQGSJYEBUWzyiFZ2fyBiVkyAcxCxycTeefCKZNXxmQULXQAw1NcrC7hqTDr9zokm5D8YWY4Psdio",
  "key10": "44BpYp5YeFakBfnUFJi8eZtVJkShxqzGULqQz4TPFSgvtoDENbgCLzgLqemWCMPZHdF5UduJSEYuV4MDuXRW88gb",
  "key11": "4DSvGRpgHjqy89uobqmLF8y8iHwHxR7EDxGXxDbwTVC8R5dLfQXLpBDSTi1ZAMYwsrHb75iQrD2RN4dsj4EYmQEg",
  "key12": "5uy5pKsFT4mZLNJvVZkyuMnyWA4VZwiyJP9uoxnpDKrgbVPWdPRJig8JkzHuFJ1HYsjpNodEyCTBaeP9o4TiAqzm",
  "key13": "3qXnkjknvMCN19vnGCMeNu3ND4Ku7eevFoJcx7w7KtTvwyUF6BwbXhPf8TprehjZV6odPtL3gxfBbuXHqDES6839",
  "key14": "56jkt3u36c1jSvKNxeHrbHTefPnyA3fFTGVnY5kxaAKc9bLg6FPwRPgchfFgT1tvX5FWYBvLyW8EW5J6kTntiEVK",
  "key15": "4NTDkDb1Htk1Yv2zLsjibJSxP7yEpQs764subZSUCLckHGW995K6xeVRmUqCu4UvuRLvkixBwRd6ggtM9N6fsEB4",
  "key16": "2otctXGMbfUtUSKVyffSa1nFo8wMJanVkvjRK7K5invAuB3Jt7nMqz53cstVF3QAFpPqLfVGkyqBbEihC6NZGaQW",
  "key17": "4PSXLws6KL1sYDvmno52ZdBdC5gkFFGS2D4C97J1xS5MrtWP3KjtobnsSnUkRshdP8kVDAhgXata7PdQ4XRBBrmU",
  "key18": "58HL3ZXPZ3uMyPE8sJiAVaQ3Vz5Q1w4dvy4wyTe5dEdQFCYmwPEjJcA5nLzLL3uGYSKeRjVAukjromWL44pmFE5o",
  "key19": "3F44rravwLmpxYneyFS2UXc4iV9VpY5JM2mnnKiNT74rVU41iixKn83JmBCNqW6k6UA6vyaToaMc3VJx8oPdL8qB",
  "key20": "oBXnF1zuDcon1Huh6SeVwGPe4wCCTjUtCDyDXrGir3LsQ6a8fraFwmVPS8bKEsGrhJTTUSTcL7E6LAjqJ1o2FZp",
  "key21": "5CSBDJZeuNCCFKytGYfXbUvAgUiGUUTf1jEn6coRzwA929vRVABNuPchs2qeADirbwwokhFdivy2zUc9W3dJEURh",
  "key22": "5nKh2FpMcowGX3H9Htod3fJpMothLHveNS9vYg8LAAEAcUq7zW9F2ePrgfRxtTQci7CuUmZiS7XUtBnPnw84NMh8",
  "key23": "2drHdZkWP4sDq6pmdo9KmZ2zkjCVuChMpTYWwk5tPsknuTpqTEdW3RYNHcKKtyrTCwpdPjS6BgZrRMENZiFWM3o8",
  "key24": "5nbPunCJQMtXWvF55356rmcFmMnJiz48cFo1Ks1qo65hDAkCZ8xLFijfntFbGm4fNXDMywgxqNHaA3JnWHfp2RPW",
  "key25": "4vZqZQS6QGA5o3xwDaQSmn3QSUM8Q8GhdQJN6457TFA3KEeajjEVu9KQu5TB5XugVVMW9zNxLEq5wwBKBdmy3igM",
  "key26": "3B38qGDgvwjZDvEvEd2GCzVbsvLrybzXihSy9aUZULWuRRWe6A6pvqbSGVrQLLFuUNHbdMsfX2eTgp1wPvTKH4NL",
  "key27": "2apx1eoGw8HTTfb6NQ3KyPNwf3b68bK9mPe68MXzZMtP3Gd9Souk9M57RS5AqvNw6yPa7HrDC9nqLfJB7S5ZDQXn",
  "key28": "22ANSpByiEQ62DY5ASY2LgsyCJTmsAcxzi5sVodA6v4xGT9PWH3bhznxJDMB4RJgPrwNYrXa9TQTqgjxUd4V7i1M",
  "key29": "58qbWZZXCW8sBu57fKD8UmUYQgk5E6agXfQfe5SkDkQo5G3YBaWrB72cMUUCq2xBj6hBmdk2mBLd7dpikK6br8vb",
  "key30": "2EN884Bzr2LevKReL9sBSRFzGcu3S4K1RTxD5pPo91qRW728jVWYN4pGVE1iGYkxXxF3DAH7XeHrN5LcbdDBmvMP",
  "key31": "DkNeRvs8fsvXsxtQPTwwUnFTEgVCuwFZ7EsugaLEq3FeeAogRwBkRouFGVim1Fb8LCm2NEqfCGoaf5kvbqhyL7j",
  "key32": "57o934UuEpTLhEntVRxGqrGEaimFJRWbBfEeffjE6k1iq5AE6DBHt2PdZwBvnZbrHhJj8cpKUpH6hkMXGehqy7dV",
  "key33": "4YRjCKCJRVMrueAnfrtZotXjDp6TtS7Q1Po6rfGm6vpnjVPbs6KstF1dMDz46tLQxFY2Nh5FLUEXWF5DBDo4C6m9",
  "key34": "2yEHHGTibzRjrzHJmwN5hXrysPFpUyyjE4qGf9B4NfXbzBjKE9GrLbpZbqTpRP42NKqHmRbVHUoYDBLJHXV1tFK6",
  "key35": "4LiERRuW62UbSSwozb8ntBs4WfndKDYRU31QsE5NmXy6rWatkQqwokkeFqN9QGSN4sUir2v3P2fSSrr84vhfpint"
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
