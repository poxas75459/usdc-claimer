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
    "3DBi2we2iPLAUsUSCDB5gc6SyYodg4vL3ZzGRbkqLgxQ8GLL4T4sbhQLi9H5RQL4jUGvuxAVWt9bfDY8YLn6JYc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JksZHACFpDfMahW8GwpwJ71emAFuYiJ1K8id1DVWv3NTsbsJzJoPixEBLY5u9SCMfnPNfAw41FabEx6Lnp6MgAE",
  "key1": "25YXaPYEUy6cNiMHkjobqNUBUUbEUe6v9A4wzMVzk18wSXF28EEUcpXwghHYaCDjHQuADd14EPV6uAMWi2jasjjN",
  "key2": "4Ah1qpwuLrrHdxZgimeFb3pfZdWfQAUfqK2emnUUKiHF5npcF9qrn4fQbmBKmDnimdFhZNoXUXYgDkW6j6bAiBCe",
  "key3": "2vppZaiTmYFdP3bsb98uPruW6JbHcAcHK4VXXs1ty6J6CsfpUDWpMWmUB9MiDAaSaaY1QqkkED5AWR7bYrbGKE1H",
  "key4": "5W1B9V5or7xBYpKoEB7fb1eoAzvWVuVfZWB2eTvuWMuJG6Y7ZDXS4pXpaHTWuntXrL73x93bGFWwoip9LRkFRzNd",
  "key5": "5ek9kgXtzqEqnfYQtRr2e53VjJaq7txDM5tF84q3DMFdZBfPBdNgTh5r6m7m1DzjBYYZ2p6SxHtVjT2jycuG3PGW",
  "key6": "4T1QkASj3eGoVpojW7XPPSNPncQSGJEcajoJhRps3kCu7CbZfy29SgpstD2ZoAbdsF3Xrt6vL3Gs1YVmrNE17Uoo",
  "key7": "Yd4nw69aNdBEe643evJxzzPjygAFN4Lip2QsrBrdbfG6rAJTFcamEmC4P2y58c7kQuo821jDuh9QSg1ySiJs8tr",
  "key8": "3KD485ut5WQdnFMZbTs2N7vrSnab1adcdUFVmXqocmsbJJu5xv14HQG8iTi2wrKZJtSsfXHt6PWCHCrqG1YAurkq",
  "key9": "4QGn5eEM2hA4f11oRT5VXRQKwWjhHZbVrcTxjdKwexaiqHpwKYX4KC9vyaFLhqy6JJEZwNSpCtYs64LU8PZ1ZEdc",
  "key10": "3kbsFiB25DcMXnqETphfvpp6oXfp146NRqJD1AdLWUnFxDVt17qgNKXC5KB2Djxw9hMu1o9nrb4JsGyxDRHRspbD",
  "key11": "51z5ggn2rXhfbqc9o75o8K4aZxX2Hgz52mpoPXXeuQnfnqkUvqDRHe8JCrzeu5VRNw1Hauw5jpnh8ZeVbtGt6RVj",
  "key12": "2R77bHMkxXmGF9boAVYeJndyDRoYwsgkoDtuwZS3775HtdHQZ8LzwAttxmujA9E2Z4vVxzmDjrBrXBwihvymYJi1",
  "key13": "2bQTxGx1SSzFZxRjtXUej7J2f9h2AJme36D4ctaxuRxm2asUcrcx6su2qybTGcYCsy2BKU7wePYDZFFjPb8zwAx9",
  "key14": "3hgfEVYCryMnepnR7jXNwAJupgMTcq96EZf7uQRYLGjsXi5yCZVmwCQyY2dXnYfzzDAxfJsKxM5Bd2UaKP5uhyKa",
  "key15": "5biDao1UbYDiNmn4oxch13pug3y3dZhgcVDqGJHXjRqib2TT5fb52ghztoJjLEHuvDk1NTRgZiZrNX5JEvuMLgkt",
  "key16": "5SoXRi1J7a9M4RVs3HengFMp28h8Vo8SesCjNZAGTg2VrL4ciprQHFgF9ABwP1Vrzqjc4qGGG7Q9j55aBxhRTKEb",
  "key17": "3pe5ntvZgN4vSYJcDcoKAF2EwMuUvgzaJKRXaCJwZwBU8SZvaUFWfV2nVQdBHK5bQzPEYW7qXqYWfjP1bVbBUUYT",
  "key18": "62iqLqASXnm4dLRyJneUCWwVwak75MaLQ13cgrWgfbe2wqRpkmfgX1s5Ho9jcKdqaBj7dxz9xAN7BrTLD9He4Y3e",
  "key19": "5HQTK4KrabkaE1JK7cwfB6RjyfmCLquZtviwBgxNgamjHaQZszfyrjPRJCg25PBmcqWpxbDSs6xQkcV2D7nr8J2D",
  "key20": "39ywUyNPD1SbrugWYfRpb51QA4cNnZpdtewaNPBuE7mG7BWbtB4KwRtEcgpA4c8iiZGr9WLaECXYvK9WyBc62wtE",
  "key21": "vkrUS9A3wR2XjTgkvBo573hpwxkbtPfyYKAdhvtcf2dJiCLwvgQEhV8SrpBhj1eN5yP2iGt1ukFj51Uypfjdxuk",
  "key22": "35M13nsqMif5odqU7Ph2wmSGadBdGtznTfvnpE6q1ucYXY44nc2GHmtfirvDAKcohrvzqqssWNmokbtD1YcV9Byf",
  "key23": "4qC5rsp5cjwb5TtSBu43gAEUKVDUTTTL83YowuTMgy1xQcGtx7hchGASd7XeZNbCpWSHLveTx2nXkhTVDCVzMJWv",
  "key24": "tajGjq4xJeynQejRksMqmhJFWy3zi6TNicZSJsr9WG6EdL56iVkJ4Btntf4kMuD1nX7ohhFQz911WKcbbXDevdz",
  "key25": "5aT4mBtQNjPuYPP5wAHLGQ9SLQroGmBzEYSfCW4YBxgX6Fo7XQEyt5N9NJo7fZKi7uBsuya9pMWTQFPAk3VmMULB",
  "key26": "1JFXLkpipA3PTDP1DF28naXkMcKPe8VQWUMYiDjGpx4hubHaAMjEPeGG6gy8g9D3DkKpFW5WgB4jHcCWGTEXqSP",
  "key27": "438P8WVvYHxnNikbu9KP3n42q2bvY2eehACxoJiev428iaAb895s6rhZVWu6svum6WTVzr8LqDAqC8xcJE4cuNVK",
  "key28": "22khkC3NfxJehu9BZFkeMH72tkortRnMGZ7NxLDLQMsGe9SnvK71nZuo9sVKvHAQaxgkRr3UVruihmbwqmU4Zrx3",
  "key29": "h6QEGixyvYbDWQR1Jxiek8nocM9HfF5JnD2FSsWxrceLMY3VLGUx4Z2zJALa2xoYiVk23hro5sddocatRNp6eEY",
  "key30": "3qhEPRFUw7WfS12t7YBnW7Jk3EfMsKAL7s4sBopBia5RY67RZrw8fKA4PsX9tzAZb7v3noM9gaDr6YZ7gj3EGoSp",
  "key31": "2ndhGuVzysu5xRvbkT1nCsv8QEBfiCMviJBkbxTdfL2S7PpRW1TSC8HC4rhFH1D7UrL7Riu2vthRzjKTn6WaNPCU",
  "key32": "2r4eDFzByAvHb3nQY8D1CDoeYN3Ex4MZh9rdnySWp8oPUgBtzNmeT9gkvYhZGdWMNXtzUk37uqzc8k87CeKSjrzi",
  "key33": "4VKYffPoWX5dzeKPqkdyC975gg8wqMgi4hm3DVGzdbLFxNiPHWsVAeG8gECNeP8tLMAYSFaDj43zJ2Zv245VpFqu",
  "key34": "3Vsc1nHwk35qVHaERGnByC9KyiH8yGufYmYVd5tu8DshBP1eEK5vk186jpmPy5EtHEbD8q36AMCDT7rthJW4cLwc",
  "key35": "29FcU4GCPRvPRXpmovAZZ4F7M5woWkLcBHda6vwPHuCL872dBDxhgsuNpEqhpqQSG7tGLYrDQQLXWJ9vWktxyceb",
  "key36": "24F76audFkmG2iiMtaRGQ5Y6o91veu5aLp16GGRUbLM9SPycdiu8WbRaoQScPjyy9LdneMuJykjwb8ThXH4YPLkV",
  "key37": "2A7Msvv9VJgbY2K2fFP3ATfhcQrvVA3Z8BPXo3YTmHcpgZKWLKFezQNc96xPKePsneW6AEmn1bbrAyNuC21mFqkV",
  "key38": "126BLwBd91fznt7BKah6muLhx69s2MYdS1bZN9puQf4NdUfDhEGff6YeF9QhU1PBSoQTsqu4CZAmWsF8JMHVG2Q1",
  "key39": "4Pca7CTmf3BhwkZWHJL7B2DHFcbYAFHLSP3ZKUjGcA2MEV46FycW3PyW4PNhWmjDLHLL4mRQdqAP5XR5gZ4T6Fg"
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
