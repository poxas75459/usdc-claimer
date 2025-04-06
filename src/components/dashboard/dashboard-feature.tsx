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
    "2tKVydFLMNKXs5S3EstVcAskESQkWAoHJasUGBdtSRWStGQPgcVKFFdrSELFJWusxK36zLEYMz7j7JLgq52PrpM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRzcfrtfyAiD6edUdBKxMqFKFCT58tiwmkQs1JHHapUdSDA7kLwn1PdPrVhPsToPe1c2vCnzSfa5nYVT1WeCgmM",
  "key1": "taQ3Bat8gZ8imVY7xjUgmRfg1wHM6FggZ4wUGGYvytJeh4aZ43NRf43Ymo3WRFgKzo4P5ZLWR4WFqNdTX6QkuXu",
  "key2": "4r6FeNU3e2tW8eeThNq7ygseCZscTWRGkCkvt8QaLnGWFGvntKALknJVsTwEyCvQMXtT5JMBb6LtfhVtZRJMpwML",
  "key3": "3WiLcjt2zLUN7jbUd8v227YcihQP25miMSyuCtc7pL4WLkEPnYbZspmk4c78XZuNVesEwdTDawRfZCJmvS3RcPPs",
  "key4": "4ga4HUKDaX4xG4bJpjocgd1UoLnAshMQW9yLBxdoKnS3bXDiZvoGphfquNfZ9MLxdYqv5mTEytZ9hRYqo25ncryP",
  "key5": "3LyUhssfRnXymCkCriieeNW79a2Mn1NWVyJUj6W8RQWeSoZdPa3eux9HrWuirLdsoEKmZgkSjPEM29zzhGz8xoxB",
  "key6": "3KWoKHicmvfe7qS4GZ7qh9oec4mt1Hni4bLnk6aDvtS1c5D74rC7Jq3qtwFfYsaCCAgnMH69WdZX2ZR87fyMTCPW",
  "key7": "5AKWzYbp9oUUDHtjz39QTipHXyTbRjsMRKrpcyuSF5NrpbUF7t2mW4sZXvSW4cyMXArozMReoGTQ2L8ER1X9hTUL",
  "key8": "48Xe2EWegNmVPSTGDjUD1qNt9snEogKKLdR5iZcgmZYiW3ZKYWNY4ncLssbZEZnBUdRc75uP4TCPByd8z5SpKuhF",
  "key9": "44tUxseqJggfLtxLFEebNaUQWQSenwfFqyFtwxRxoQk7XShT6HbwvEkhXYTNyE37Y3SJ1YtvLJnvL4ERk8iofg6c",
  "key10": "33ynqTc1WGWrCidNzYGFnb5qQWPwnZLcSavKZAZNnCuCseK7w24dSiiHCZpws6DpVfeMWJ5V5kbVU8t9E1MLkPx3",
  "key11": "3HhJ4ro7bcXLCunSKusT4vhzcf4rm8p1ciozV1JgtbDZpHkQ7M35124gFE4YCr56EJHH8RcaWNMkre5tq5av6tjY",
  "key12": "5jUVrUG3msTrLf91bnP9dGqpdM3xj559LuyTJ91iTCSANmiH5UrW1NZRaJVGPkFuV1cqihshWbFF7Kbcaw5wQrr",
  "key13": "66xA8hncGfw9SY3oL4UppAe4MLs8KYLw3CHWHad84jRY1bQzqDUFqnzQL1cMmoZ6HEA5RDgJZ3vnHGhaPZUnVnRd",
  "key14": "4AXs1c54Xy9S7wvhhwHGHKxPaQGjVgyYVG1KN9yqiLZpVVLZYdt6yAL4jhnYRzswvwgEcqoiYkFAnpVzQ1bppw74",
  "key15": "Ja4W8AXDnB4dCSgYWQQJS7dT5V7oDuqVyqYfYNVTTdtUaNRx9qbdep9UairfCTgqeZcpCK8qYYTyY3mfZ6RzvxP",
  "key16": "51fXHUU3KPEsxxkmLYyDq4vdWYo9MsmwSTsAGa5MEmwDFWc3U4N1bZXhu57WiSHmBCRSTTaVDqJhYFEsefHvUQf5",
  "key17": "4sVvMn5cnLnWFqFnTxrND5oZMdws6PB4RgTSAyMH6fXzsb1YTKUTtZ4RLStY6mPZSZrmQr9GbF1PUpTXXL9uaHx4",
  "key18": "aLEqSU7CyJV5HeELf9HeYqjthD4ASpe4PLE1d2RwH5NqMKKdVTi6Q5fnQLTL7AwKnoNHTHzSqE9gYcovx4mSfE7",
  "key19": "47gCR8HSnTCmRGSFjkxGiUxHieJQQsuLA9NofzAxJwstxYnvhAn2SJqqcTAzCd2yLTTCT8taHLaXELJX6HuxZSiu",
  "key20": "3tLbonbUafascJ3uGPe8GGLkqmFbw3doqiXn1onUajYGAgLD7RPRBjux5brMXhWh2hF6ZpzABPKruUX8X7EWPXfu",
  "key21": "piA6zryAuvZYYYMza62ub5mw6wJ2b8Dec5gCjU6xAGsczrS9FKwyxWtT1wBLTmnbrrgoUumPaS1ExMUJM1zbc95",
  "key22": "4UDu4MCJYEnAp9aC9fzHjE4ra9EbR5m2ZpTaBWKupbze74mCyaAsKMEEUvD4EU7kspvwRS8Y1GjfYStHR4JztT5M",
  "key23": "6niY8T5UjKx9dxdSfdFjG9Rotc5qCdAGKP1bHQqVu9LrAz9NFuJ5bLiyXMxMu1pMvaLhQ3AhC91PqTNN4AJ9f5z",
  "key24": "5wbnB6eBCdgpLtKcXFNNS8yQyDgCvYfxcdLuhXMpFF7QNTmyrXTFMkMQhSbM85yzXXDcM1BWtNTkbtGZDhigQvK7",
  "key25": "58b2eLcsVHzfzsJoyS8Fb1NqLWKzjX7bgYR6AzwxKCMRbTQXPzq2Smc5AHhUT5oxaPi7Jckiktb4gCvT1LRfxfxB",
  "key26": "tP9HRuSxuxQFzVYMGNPY2KvVNQgZrSkzA1QhoLBLKQwMRYTLQjR3Gx2NyALGU3WV8UV5UzJwh4sQajX7AtZyEqX",
  "key27": "51hDU6f6aChi3rcFmLrx7pKRjM4E7hzoirYCUWSAUvT7EeNoX1M3q2EbpMwE7UBf8jrV5dKjEgexJBebjG99RGHs",
  "key28": "3ob2hgyqY5qtEAozPHTv6a3jthKfcRugcQqnSMANmA7noiWHcSi4kfvBk9xUD4XmRQZMPZUr1sUz8dwxHuwmM1kc",
  "key29": "5XSmYeoJa1W7ruQFsQHbyc7uQioTuAnHTVCXMZAR3roZnV4yDkhXP5qGurmEvSkFgWBmHpKAvC5d7KnCLXcqEY3V",
  "key30": "Yse9WFnnPi7sQ7HxYz2UQCLitRRCKpAtwkt2Vhspq5TUJyeQWq3fy5HHaTZrzaJQrSQvtbQABADXY9JqhCPrr1K",
  "key31": "5LcBsym7myoFKMQ84Z2ohFzBQPfMMBNuiRmJWwH6iiooTWrQYbKrWhhHAF6UCAdVi1ab4cgBA6iLu5TsSyAbEX4E",
  "key32": "3xBCheStKkCz1hUmbp1BPYbUcLCjxXTCu8PFaz6UE36pATb2rJJhvqMH8ZStgbRQVCjfcZCWWSJ5hJLDa4G7DbMU"
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
