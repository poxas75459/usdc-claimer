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
    "HJ5LuwC2SfbhcaRwEouP4WkpV9iXAZfmKVywuxYmMoXWaE2ekE4TqcCshu9zyKgK8c2v3XkNHQx2KSTTgPydAdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phUhVnctyfCsKEeffwdZSBWQX8EvTekMX9eqa1XkL5ZqZYvRhywJgvNQUyDufo8CP7pHfGe7tUcMXoimpyq7nvs",
  "key1": "3XA7MKXQXZMSbRQGo7hfELm2CHzKhHYUNExUw1rbMHXyz3n2TJ1hTu8Y6LuWMZaj6cFGX8PDkdDAJ6BXZxBshLUj",
  "key2": "4JKei2Rg36YKWMtLAHgBEQZJ2LJwWXp5NcZX9ofod4Z3wSgYqRCx3FBHBHkSAQJNSuyfcduc2qidkGBANyq2Ct6N",
  "key3": "2FTw3akQGBLg6MJQuzYTNpZ8HVH28a14Wm84rritvPDhpyydtT1q76sxS8R42cTviMLN3PVX4fgfVFUCrgabGgBy",
  "key4": "24mxTcWcPpZLbvMqPdKZAKQTjn5QUFMrpTYiqZAYTtQXCTVxFF686nvP1GXNVxVFHZ5qwHAKU9Fkjmpu6D3zhwSG",
  "key5": "25C3PKaPDb3MEENk6MQYxhQjPwnBh8B3egrMZmqYSWTjBX3kvXmDCEiZMiMpsraXoYQ7V7MPzwzVDJehNETMQvRG",
  "key6": "5hif4y3hBtJQUF26RrufAH5ELvHRHYks8KaaDua88mVGmfdBwJphUrH93toyfD6DWCU9q4Eazr9PbR96nujNxqCo",
  "key7": "qgnLHCCB2ASnegR6ZUfmxtyuLDQMMaKXxZCtNwGmKGNaLcCJuq2uSCBsHtPncuy1D18GJvXXDG7ZHzXNUFfCpQZ",
  "key8": "7XKvHbGcw9xwc3w8HmpFnGcaTY8Q2FRTZqG7RgNe2b6SiV4f9yQuXyEDm1U4izuKHzDgr8zNhTH3TP1igUUGHM5",
  "key9": "mwMexEuwE1wxXxGiLdhzK7Wg7wbb9m2jnLPFUii1vht4JmbCNjjtiKJsvqrh2WDZCJHunXRSGp3gHyqmkeE1no5",
  "key10": "2Ffm1XGbrFzmNQAR8k1QejkeMaLpGwqxuKgBtKpZ1G1jot2G2SoEp6ecEPjWmetf1WJYAfKdFgL6zh2x46S8jNL9",
  "key11": "hTx7EEc8mVRfb9jiPCi9DHBEQ3AWVQps7m96Fo7DjrqXwmdnJPJG5vEfKFi23J7wJzXWtf3nskgAEnLWGcFm6m9",
  "key12": "3xqXPCPWx1FtRr8NYG7tyLLySEk8aSte5LLK5DgBnSzj1YRqXYxppm9viQfhzqKaFdTfR7vU3P98hGdDZ8k2498K",
  "key13": "2j4L2osuZdJuipXyignurENSxY2KjRhfHeByg2f8rzhwfgYidSLoYzWrpRmrMmTGBedjLmDXHx53hmjmjxbJj1Z7",
  "key14": "4BJECxBjRpXHVsFeeLxP9jT7aqVSZkRPVdzyVScfeBUEB8ZRMxMBCzH4k4ZQa9V7j8a6a5ck1VXFvCgwhVoV5REp",
  "key15": "4cNRXDfgXJjByXpn2ToEbLGCVUu55g8RkCBLVu3PSyenDt55H8KShJ3HDP3XA7inm7i4zuuy62MhccfMxEPfbLHq",
  "key16": "4wuxmKFDJUgyA7Wuy6zxhk9WP25Yg55TvKG3NoeNHNF5y9diH25f73QEiKyULxZaPnFGcLYjv6hcvYMufeL3SGCm",
  "key17": "4jHfz2JngGCVHGHuTuxZ2CAChicwMRLeNUKZV6FcnvYwDk48uzSY4zcdPZGTV5HJBWzT47HBySUuYV4c4HWhgh9i",
  "key18": "5XUui9XiwEVjBB2duCkifCai7pGMt7GsicFAvN6g6aW8eDyxy5hA1v6AS4T3qmosQbL39GREmcSh3sCTnJg9HU35",
  "key19": "3FJs3ogx2eZMaYJAtUMKZq7xjxLqw182xpYDXQZVbuN4S64aQR9fB4BQNBKcwFr3fTGmq1bNnBUfWyy7YtmdqNp2",
  "key20": "zVbHzTDtqSRMRSM5cnoJTZFNfoogvmoPzLZ6WYVeJfWWQe8YA7rtqvsw6hSPYcyBeWFtjKPoFiVSDy7fDLeX8r3",
  "key21": "yvUXqLJFiRvzeHouKBYxPCtVAhpKobQXU8LwksSsV4KunqS3frki4TpMHXFrYeMoLMVPyN8XVtR1Y6wDYJiAi3F",
  "key22": "K7V6k6g3hU7iRghoBeRSf9QWtzZmyRFzQNxr1tUXPV9Ftuuy3LCLbwg5w5SvAWB8ukD6eZ8bs9XApGzHNSWYW74",
  "key23": "3zespezToDEGdXimtCkpoFAa2t4NHZBTDJBvdrXm2JkFgeEbj335hYddcjpG5Qs8xQ1PDNccmqAKzAQEAZD7eHRu",
  "key24": "5c9sfLrveJHYWS4miFa1dHiK9FG3izgsL7DdzzVUG6Yiy9umAsMn5cE2aftgpS8w1LkUxvdPrRXpandi5tn7qmn7",
  "key25": "443m8WFgnChBEEFrGhbVz7bAG1HAxvyAdJ1qiJevsGxFURmW8tBBEKx4o3ed4zvVkqL3WD1zFrcyiKdYSL8Gr5sP",
  "key26": "442mtNipBQaRgrM6ZbAZnpNUEffAphqjrKFUx5GpvnVqNPeYqeXT58eZne8ERVt35RqT9m3rxFtZydJxmRb56RtM",
  "key27": "3hQv9teahp48FfPTH4TvGuPk32CbdKjvTRAJ4xaDmgHcqjBxU2Qix1MhPxXZ2pNV9bnMhxVB379xiwtbjrYNtsrK",
  "key28": "2QG9EE3MRedz47ZjduSV7eo6sT4MYnvGzPdshEouFsjwLohFyE9X59zjNJe6FUGKJvS7zvKcYiqdY6CkmoJnrfzU",
  "key29": "2BD2ZHN6WYnRrhvWspnSTSas2T7xAkxuHC6oEsjQhae47g76YKfxfuccpzX2c1r6FqVyEAawiL1VyMh8jkiGgnRU",
  "key30": "4veMeV6be91bY9gjHVg4LibeVhqYaoXZMR2PjwYzzN7zACkLceiWTt2n9nzuxNdDCJW6WjzdPdtLCoSG7gwntXJ9",
  "key31": "4TEVJ1kxdiq1w2Mryzzg7JGJ3LznbHTFemxrb79fiiAQhZUsTTAut17Wfa2PYnBWKFqwfhKbADSsKHLDv47A16G2",
  "key32": "eRJq9uS3feFjrptfj8Fvwd9KsataKiDWcwzz9iq7esHCYgdhxb3BxhFdNjpn3qFjz7rD2cHyXRm9dourkDRRP2f",
  "key33": "4G4EKQujZuW2ASPwLFj81oDM27SaMpp5QDSMoFJcDULsmMXggrQjesschfH8bqebL4fqEuyZNq9VfTcrE7Y1hs2r",
  "key34": "47YcttXykToVgfF2uC1Fqqqy4bk5bH8expmvNrnuFPuwBeEKWLQQfdrcyQZZCZamtAubd4vHvdSXxKkkiAbTgqGG",
  "key35": "3iMNsSqvMFJfGhLDMZoxRWWiy9iaLYCUyFPBQ5EUV66Mf1aEnUStBsu5U8swZUwc8US6vYWBDQT46JFTxBMnEKAP",
  "key36": "551HDTWeWscPZG83K5CvKbdMrPhybrtfVAgwnSskyCQ667XNkNykAnVmwVBHnP8aMx8aFyT5E9BUXSGX23RBK753",
  "key37": "3GAnjKueTigXkm11eyX77KqzpKx7J3snygxHiRXFQZcAsaRkpdEJaQQFYuLB2pYzpwAqebmR4TxrWrrF4mbuWqME",
  "key38": "5cjBtvFVWwAPSz3keiexjuANqjAVf32x5BE1ryFfQyyLApTL7qTM7MG4HZLZWvbtuCWMk4tuCXQk6XKYKCYPpKaL"
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
