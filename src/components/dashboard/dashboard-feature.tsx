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
    "3yBLuqsJMeEhuVSZVhVWPK7vq7wpPcs8EcoE5mkwmyS3sm3QfnCuaFFn1m6kzEvEYjLtut2Vzh6VFRwEbYEt6rXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5qTsEW4atLxrNxoRVu3qujywsLn4QbSrSYysLKoY1ZBwJJigkasLVW9mZLyi95jx7ZdiFbsw2yWxeb1PYE5kaf",
  "key1": "5CwXkrSbRgs37VnaTA7rodXhPJoX4xoJtE2LikMhhC9q4UwGNDdSEUeNLBc9nQBMg7YbzmzCPXH8M2aK6C1Qtw7E",
  "key2": "4VFNgMEudB2GxHGmCZEYUy31M8GHEt3DkuYinVy5ZyVkt4KDDdnV8JbaEkMiC7N1qp1dmbiSkfWX8BfArRrASBf8",
  "key3": "5PAgfsJpQNxzm17GqDuKX515u3JbfKUHC4pvtDe7mDws4EobDSZoGF8XYyjfYACuuLzuwqHL7o8cX7bV9SsKaueP",
  "key4": "55oNFpm5EXcjnDprrxvBd1LsiPivKYhtdvoMvj6idw5XhdPSXYJbj4bt7sdG17AupZj9VJR275zruCCYYyvqz2D7",
  "key5": "63JWNduKXDNcN8f1cUiU4NHShzuoeUs5Q4ADS4NLJFNBk3PfaKFNbppZPvD5ip6XRWe1vKdbkV114otmykSupepk",
  "key6": "Hg4wuASLcRVw56KHFsuAeRPCWQZ11RsuUVStBcXVLQ2fUcp6MLkwKHcKmz5WcFwHg86CPfHJJx51JLANzw9rZQS",
  "key7": "54iEdKvh2CFGMLCXTueUmWZPct4z2qWQifjSN6Zu4CEqiFHfJZXgo5SKYB9jD5hJ3yJcmfBE1dfVuKtWYtjbA1WZ",
  "key8": "gQN2TVXdE3wqbCExBQtsxttanUZiTvbQDQhKrTthQoQpKjF1cisLxxxL8Jrqxagqs9E3W1isneYrA52ZSWn1mgS",
  "key9": "3AnQp8W4R4bCfEC7X5qYoDUre1dYMRXmSppU9sJ1KS1uznkAQDZfLNnGc8MV51tpVcTeSJZdHF55f6S6qPZ91Z1z",
  "key10": "2mwhRM9fKRwvBGupDzrXB9q4icoYApieaEv5PxkzRu3CWnqgaSRLkJM6RwcFr4Mk1YnXnyhkCF2YLbwkhpZy2k6E",
  "key11": "5B8eMniA8krxHY5dx1FRvw5hE1GNcj9BkMDcdiSkM22v8xiEcHmctx9cz1im3SsmmtdP6XQy9qtqDx25NyTzRRW5",
  "key12": "5WrZgzcWA5NiG85u6xze66ccPhASnPavs7sWc97qkp7D8A4XA96nXwyQTh9t2KRUjihxJNoZ58XHeSb8xEJHUn1D",
  "key13": "f8JK4MgH8g3UgEPHV9igxPh1BKATPR85j3AYqcYiUkFhQ3s3LfUeZw8YAevqYDyVe31y3tbG7jzQiWvvNUsk66s",
  "key14": "2kB624dcYTHEyNeuTH5cVSDyPaWD3QMjTreav5iYmGkiUegi7T2rupJvsZv9wh6LWMZJUsRwSXCcMZGziJTZ2Ruc",
  "key15": "3bak3b8hAMHNVuWwKiQYfXmhFBQHYeejQfxGSKWowAibuJqbMFSDRKv6nER3Aw7Zij9N2K5cfk3wuTYBUq8UaKpm",
  "key16": "3Q52a1v6cQqs5LxEsHnHzFaQsiBq4tFZ9r8Ld2TEuV4hbhdWMs4vk4fxBKuhjxRG6K7GFPnzYf8tkWK1ATcrKVvC",
  "key17": "3AhBUGM6BGRzm3owZQWMv458BEFCoGtVhGPqdnNWFMMyn5gWeMRCaZ31CFoYD1KAUFgKreShkWCtgfQiAnkKWg1u",
  "key18": "3E7MTkLZwkDKsXBCEM2sqnYAK2JAZLNYBNmGgiJDsHywdGpD69vT92JTZaPfhpQttYL5VYJ5xmcwBaytLgP3peaj",
  "key19": "eX24a4SPRQmrFS3djWL3tc3BuF1qa422X9Uu1coagfXifJgv2PFJq7uujKGhoJshuSmyEoqXq95pfpaiECLJbce",
  "key20": "3GJc8cnS2eSBAhEF8ErTATwvWhC3CA9BUxfqaLBF3D9d528DrogHKnFaiTq5dqFyXTXApNVCcnUnKW1f4P6ZCSJs",
  "key21": "48bjKv37DX25Rgfikbo2qZdyZszRFPrzX1Tx5oaJ7JDFyDWp894zqWyen4oG3Lypxt5UGiL1YRuB4WiuhsDjsVwF",
  "key22": "NsKbm1Jx5P2csT5RDr23HMpEcqVwxvqsg9CBjBKbm93v9iPvVo3duRM6N3MgAZt5zWVCNjm9srLva3HzdRTCJKg",
  "key23": "2DVMUWBAM1MDUoerVucxsv47rr4kWgz3878wDDnSEvKd9AZKQgE2wNPVBnchkVW11yueotX7gwwCTPdNVL4HqBtE",
  "key24": "5ke667c254qeihz4YECQvr6dbSsdMLFyWLHQ9EcYgF4ccovLYVFNBNQoL2T364caH51aDyhafJ587bW3f9cGvjRm",
  "key25": "SUAETZYZXCuzJ3uGoFH3GgJQKHS6yWd3V9TKKcbvS4J3kCPGVLn6SsW4ukB4fP2V2wKPp89icKGKnKJSJthw7EF",
  "key26": "435VipAtYkcpoJ5atW1PMTQYfyumvMc3T6xTiAtKkBRNz5ZHNx8PxBUSkVXQE8F3CUKiTUdYmtK8rFQ5kqhZ7Ppc",
  "key27": "3Vm7pAeZQ5AqxRcHmMJrBR2NsTEoGJr5MiBcyNFykyDzY34dGHimvHUZ36y7aktZu6rrMN3uLnAWzfs54oa8Jpsn",
  "key28": "2LN2tbg6jPJ89ZGtctoyE6NW1Grh49Vr41Km7fHQ6Hs76GLYbZbxoq7Je9D6Qf5jPUCpwUMHNgoHJRV3PDLmCfFh",
  "key29": "2yE3JoQ423jjGEEL7cDcBPq9xq521FviKVooSU8mtUcUZZ3Ds3QhzTLYcyMrtNx1AzGtGZmgPN3CVZE3qyTY1BEv",
  "key30": "52WVnSMhPq3e5cpdbGa33tkpffrNZXdsrRTwAgdsvQ48tAXKnpz5uj7Ypn6Xb8NqKDgcMuCWHAUHgCkttPjAC1Ru",
  "key31": "3qdL4UrnWgNEEfnBfm1HNavpSi2DGAmiALDGP2VHHZYMDpnEAd9nuwnC72et8GUFwMKBdvzvTfb37n4UZzAEN8hx",
  "key32": "VqnJ6K3uPosHZuh2aBPCLn5rFRSFkv2p8n7FF6ALXASY8SN9sMzsPinQajb8vK94y5ixguqJBVfARD1eGqAQUAC",
  "key33": "pY8DutbQ7d6VUTeKZkXCktJzwXLwg5yMhqZMHzLrEhZnB1LJ3ndWSMP5s8zhsxBpFPkKRCi8JDuWsM6o8WaQpEE",
  "key34": "3R6mX2EPeDvxYXv7gWJxXMcS3TpRr5cFahPw8r2TfYDxFvPbMZG4n8AHQpfE46K35aWNyazAYBwXbkYB8wDkBEGJ",
  "key35": "4gxMv2RmJmX7mHXoVUtoMtqKAtZ4mkvF3fjXRQgi43aNoEQupQtmRB8Tih1n3CXCcr8HJz4oZmxFv6Btvpn9LEsr",
  "key36": "2DogRnKqCMHqQsjUyT3XGuiJmShdGNbs8PKsGyTT4dpJWX6AEYdJi8rEAE8Z1SZVwgjSutBmgxzYhU6AuLUBZXTp",
  "key37": "4b3tWZPWeb1BCGdzLMVqbyfX2aejdTh5DhukUePWzwi5Xe65vyQcL7DthpVgYrvhP5snqqPupG8aRPUd45MkJ1Wb",
  "key38": "4K5ypXqDL3wyvFpe8mjmQ8ZR58pAWdUve35YfR5cdfV9o9Hnq1aKWdVHCUeGqHu3HPMPXnLKYwMer3GPW7NtxXwZ",
  "key39": "6g7moTryir1M5BJCfMzURbZH4Lbor8E2bmFLj66DsjuSbfPpDsrjPtahUfLmkfvYSAj2uqDRbUFUYP8rzgocUrn"
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
