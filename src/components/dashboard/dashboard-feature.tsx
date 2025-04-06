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
    "5smmZET9KU34et9CQhA97giRPjEXEGNbfjLL9EtQUtoNx9jPJH8spbVyYz8EGWEFuEz7rzmdg2wgmmG2UEntkxJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oG75W7kd7T4UJm1VMj4VCQ91yimcpdmxQAfbfpta9gxu3rhpovumXfeNXAQPTnnXkiRLJBdnU2QyZ2xJNF2N4mi",
  "key1": "5w4fxDpWRXeSoaAPDksGRGC9H1L94zXCqXMDkfBAGSEVEFeZqV3TABR42HMX71gqjYbwUzfEEbnbiFKAbz2Z9SXe",
  "key2": "38We5Yrg7HzAuac5C3peLR3AnRDWvLUhbyzv4wbwV9xgvNFjEsJ8Ab8MYuquvZdMeJU3eCiZ4LzgoLxngEHHNEBT",
  "key3": "DJSABwTLRjqwV5bP47QqBSKL1E9VRdmBB7Lff8goUV5KTCpWc2bkMUqeoNfvVpcNKN9m9kGrzaQ8Fe1ypkLyK9e",
  "key4": "4C7YeLrnGpphzNCeoKe4nStVfJMxWpZwExH9fE6yQU1KDeFuz8cei1LSgVr8n3Knd2Fu5Yu9PfcFqQR3ae837sQN",
  "key5": "p4mmThzyewdJh9odL8mVCRCGRuqPpUvw9wsEC731Tzzy1HzQ7pVfgL9zVX1Xf193q3TVTX3jjnceT6QMKYdjakR",
  "key6": "y19BQLAXo21FxzBkuSSAP5J2mLf7TEsde9s5chTW3WsyWKCQbxA9951WBqNNHssjbabh5hDeZ99bPYkNPYVHiw8",
  "key7": "48gB5T4Y7FFyn3QsGYVFhzhySZ93vD2wPj5ahcuCG43kZevGoZhGCjkniMcecycTYMHcWRP7FP4fyocWS1gW6wYZ",
  "key8": "4VRu7M6qagaakjtE4fCGnzQXiMgTQjyFN9tDAEF6YXXsoevggbZ48t5HeukUMcmNfqT4JgZNNWCkq9kuTpBXmPVK",
  "key9": "45q4zDwi9TChFeRFfbHL1rVZJmRNz9pnE72P1PA9qwSTHV8Pc557W2yGQJKC4RRjam6LqiL14gwKgMPJEaKN4521",
  "key10": "XgcPUjEkc8pRwSsiRuCYzhs99uAREW1p5QnkbXCqyb6f2LRsCZFqxqgh9vcTYNbkFsMAqJJQje4fxHi9G2zF11M",
  "key11": "NWABju4XP7DS5fmY77qbpXz57yvPczYp6gC5gxq7tPXYoXFPMvJUFd4uR1m2cURR7hEe6zb3NhTrLGHBWdT19iG",
  "key12": "5M8ncEwy5aVyHfFzaPxZK4FG2vkQ4GFTfYpAuQYtKXbVC4w27oq6uY2AzVGz4drkiAxuhSVGo5gZ42ebR45dR78U",
  "key13": "5BDUaYdtbjcDNTLXCTabpg91XS3JXaM4uidEDssqpMqpCevp4SDhU5D7oVFoAE1jBEeNyMetUcw3NvLxwtqRyR4N",
  "key14": "JRVa2XRhxwjC1Xp5GwAk8vkYxzQCD5EC6rcSqyJfsbMgBdJ16PQi9vpzPTs7jKVPjCU99g3dhVUWDoh3StbYLmc",
  "key15": "4gFJqd61PZqqqUnhETyBqFt8MwwFZJbzL6NX7i3JPJ3KJDDmPyVhgdMFt8BUoMvmsqRzcJm1pHDd3dSAtQ26JXMo",
  "key16": "2qWLbzxf8eiQA1Eh8eFJ6Pw64AFw6LRxLhBUx4Cjuv5dEy7ev2iPau564zFLDpMWjePnYUtQp8mLb871XN912a9D",
  "key17": "3SnMQAqtVdq845mwvHWERD9DY8avbpygPFoRfVar2CfesPnu3jtYxxn3jETjtQGwfYR3ei41rn6sAjUtLWtWCccX",
  "key18": "5NCp3QdYNh2baFsmByEJeoub9HHFqMVgjvYgR9ZQkkQ9i9FUijgL3nDFa9s55ifA3McZMfHUR242gWBg6txCq2JX",
  "key19": "4uPGgQT1oLTwjBUihBe6YwQdPi3roh1szRRrZ8NsHnTzWfyhGJPax23VCg39MmB8pxmxZf7LAtTheXxKYXuGLHox",
  "key20": "42NEkoszDZHMtX3nNYeha337fhAYUpzFivDHkpWPBkRJ4e2Vkuzva9UyJs41dhp7UzreAJUeWnyeKHHEbsH2aW3G",
  "key21": "9Jhg4kLXtrmvZgs4PYYFFt4YkYwNmzW2jLn3Aynom4aF8F56VjirFErhpUGXm1EtpEHnDcX81o2ZHUruufiNuru",
  "key22": "e3Hn1LzcNRaYZ6Kc1a32gGL1styuRFAL4BAebj6SVq3a84jwUqhXioEkSQTFQkxLqsN7zEQGXxAqJ2YGRHzNj4a",
  "key23": "2AmhUbzMezmN13k7LH73MshwH1ceDVB1Z6PUbhpZPvPZKV5fEvBRU4vcoy2UViRoLBwTxzhhTiVrtNm25Px2W85L",
  "key24": "4JLEwpKvbepkH1ceJ9hpfYAtnpjKNq4nQhYgrvXh9eUcRbiopGCqk2LiDJ1PujMvwbtEyCpJ1SbSuJr9WrWSCYjW",
  "key25": "4JRVE1PQQYqZQh66Qc7WrrwUrt4GNJ9nyvgtvQEp9s51Xz1ffumHDF7e33WZJS59gMNBR4JYyG7UaJhvz4TVjkBL",
  "key26": "2jH7P73ghx9xL7dAvv76TWVE86sYjjytFe8BfYj2pArfL86oCTnpfLWtc1MW4S3Y5jjgxibSoKC1BVpkoP4ewZYD",
  "key27": "35G3VxVTHmGkD2wyLNnmD3fVtRUZW1frD166Bi91saaPGoY3A1tUhUnsRUkGUWCAw6UWWRDpQu4FzABhL1JTiWYh",
  "key28": "5iNRgG8phHqZWSeJuHH3APvgaAeR3Cg99otDFAsgkcBeWd9efNd12VXfyRdC9uF6RWj655RSES75eQsxBDfxkRR4",
  "key29": "4co7fFu6yzY5AUBpBVXBvJkMVzzZ9X2UcidXq5iXaURvZzw2TnFMmwdgLw74q9MiKk9NePr9geq1dzYRVypYC4C9",
  "key30": "2RUGMaXPpE6tATeZiiqMXjbQmHhb6PhA3ub4ZXTqwBeMhJ89JsjbhryTcqmFfXh9GBjg2pSPe8ejtHuSBLBtD4op"
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
