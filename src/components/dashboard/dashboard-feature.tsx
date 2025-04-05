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
    "5GkvcHnPX9nzs3uGYP3EtEgdHYEf8hSc4XRNkm23QHqD9vzpCxVr9aVwpSq5XxttB9iPcJYhhX4KnEz8Bxvv9ap8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AUQgG1fv98im7XKVETj7wU2qMS49CtGq93NqEcDeSLQcvJkuvgRoGgPAFj7C4ucinfDw3Zd9yg5eTpKhsjokys",
  "key1": "3PfE64xZkoMfLzBneuwwKii6HeXAopP1N8KZGFr7GGe656WLD6GVnDASSRfQ5u7XJXegzBh3daP7pifDKzRNpaoa",
  "key2": "5aQEQwXsnAbUyEa1Ye2LDAxjUkr5uNZrPFGMhgUQKEN9UAYnSrTre211jUD6zMZPZ6G1xvtpNPfxHpm9GNqARMsL",
  "key3": "3kLbREDjLnWWYpahZzZsCEGij6gEeUMoB7VZBAmKQGHuVgM5QbwGfBc4P4vgzKs2JiWxJzZrsQRzyVT4UmN6WuSv",
  "key4": "2ZdU4g9WUtQWqDjJHAuFK1vqinrzc2VabYjBtT91fjLJdqtgQ21Ech4GGXShL3T4npqg22rsqdXVBmbTWph2EjA6",
  "key5": "38rUDcmtXK5rw9RRAjojKhYMi7E9mQxMYEqaYT8x7F5bdya8a7CATABeC6U69DoxSX7aTqT665XEPegwcW6iLQxr",
  "key6": "2GDAY8ztqZVCWMzMeEeArUGZirmuCrNMLhdvVJKyL6zBt5a6syUhF8Yzd15AQgDSQv3Mg2PexdNME43e3QuAkN1V",
  "key7": "4fPfGJ2Hf1WZRqfmwU1vzv18uPesXskfirkxcNQAhZTnJ2x2dgfWJyLgSqesEQpy9PpSqkszErPJRd3vJbEVMTFS",
  "key8": "VvFZcuonvGq2riNdoo3mf98pEWuCmGt9zsZ5kjwg6gvXuuNZKrej1GPWAk2Rr5b9ERbjaw1eCzjdDhwcg7crueq",
  "key9": "3HxHQ3oNWvAuFNq6Fxv69Q2kKoPwyQ4U3HQ6whi9jezK8QkcKpER5vjWR3TJhGLXrA22cSi9YqS2pjxGKPwr3fuE",
  "key10": "5P1WcMQyHhrAZMXig659jXr9j9xyoXUfGsNJaHoNqc1GaMLuPtn7g6Y14ofjY1zdUkyXMNYYnKsB652WSt517FNx",
  "key11": "5sticas28iH3K1rcBGMdK7tktKxptMUZNbunnECaVUpJXCEbK1DK6h9q9yNgMQcHTTgb94B2KCw1xVbwq64hqmdp",
  "key12": "3mhntz8SvW8SxrecdW1B2E6NGhvCpntpdbhSbZSp88DvnVvA7HrAPbjUeGa1imeVFA8EnFSkVhgizoRhHRSyV1iF",
  "key13": "3pADFHbAmxxozMURLn62uyB4TWdB3huZZkbpJMVfaMJqqXwGx6Rgd6uEiUeUfg7RhsuqNqN8yu9rpv4X9iiQ9NJ9",
  "key14": "c5r1QHi8g3ontnFj9rimgZ652KpbRmdUnZk9Eqjo4kRSzsPMowdVHj1UvmfGmsSC8Ti38nhaRE7NRGR2eKZpPN8",
  "key15": "25ZvN6NdSxWfWVXdmA5TKgoEGMj7X6ZPLWrgnX3zYfVZdsncwAY6VEos4NczWtqT4oSsk2E6PgCtaPnBFSt1fKPH",
  "key16": "5MyDjnEoWcrftQYzAvMPcndgQykbDedYyaL4FcJxSLWo3ir3J8o9jkLS11NeSaQyg8vHsqvyi47TwaNRJL7cbapM",
  "key17": "mHomccQDktUpgK8yy1jqiE9Krn4xyuhs4d3u9ApDmeX75brXuzoHS4jNVmPYP4zMDN73jQTwBnZtrXfqHhgz9Cc",
  "key18": "2pj3sKHVjEVxs7U9SiGtC5gMvM1HHwRHe7KDQBNujmASHKCyLPr3k2CkzWM1QcmYyFZbjUNz9vR4RdNYPZn81ScD",
  "key19": "4FQ2iTP8mo5PCosXPWLx59rQ7nGsG7zgLxk6G8bEn4s4e1QeNzhESvnRGb3ggd3JoFhytgrS7PXcQUAM152txMXN",
  "key20": "3cm1fch4jXqRnWAMrbP4AdEWn5xkRtphBzfECSrzY7jif6PyFUcgeLWT5tSPfVx62ZXPSUA2JfBjv8c6gxQCnAVe",
  "key21": "5Q5c1ugu41HBfyYSUspyW2cp2VHrRiztxicQ5o4zagwg8XRPMTmgDU1hUHvibqryhsxXUXC2N5XWjphPfgH112VT",
  "key22": "2aQXa4wxjRBqDsrGYJJt7qdYCsC7hkyZgKcgxiMd7pdfvBAcSvrmJwjiy9G9rWXAnHYJ1T7YACDyz1gy6FqUXQUD",
  "key23": "3dDUFUYqpditZZwumUmib5Z6nYw4zJXSPMmj2iZXt27vLzPQRjKTBgKtUWfFEY2prAb6vyhKZ3Lv3WozCAHhsxvj",
  "key24": "5UETMm8K73qmUtcRpWqrShVHD3GGdkRkGkESLgpxnFgiynPmXoYcYGzoCu2vP9EtmYYD3W7yPUE9xME1k45WJGpj",
  "key25": "246ksfwSRrWTjmWnPWoJC784bPq6da3AVMqChGWvEqyosQcUBB7Wdcnjs9ZCmLjrA3vRDU2B83cJFF7gpePwZUuf",
  "key26": "4jrBxmggWUoAKTEEM2ZKV3ZrYtwNGpPkWo73VBQ1QQwR1y1baes7WJ3wNqKJj4A6rdrnUtXNfCJ7DwVNtiDZ4i5Q",
  "key27": "57vv7z1LxEpFxuz9Suer9kThTN8xCTKZYhaX4u84X5kjF3QqeRKTLkq9LXbGuo4wYtAvUmudfJGKDunkzWPjsw8R",
  "key28": "3oboQWLLkawd4XWxyJEhXZeij4QWH5BfTuX42DEFoEgkfBC2dNCBedUM6hviUoHM68Z5j8Q3R3u5WHKjkaJjqaEg",
  "key29": "4vhUR7o6icq7ThrSYb7TFi7s4dB8sDEFwjpGmmgEKNjnLVyeTvyNHLSe1J6Wn2tSr6uqTziKoHNz7xNVkcpty4YZ",
  "key30": "2yEos5GDboFyJGU7idXZhZTxUK1cNou2BqZtbz17mC9TDWKaNs82PHSvtY5AQdvYNEU9mDkPW8eg2yunGNJYPAE4",
  "key31": "25o6qv2GVLgUeRrk4tUHFP8TonySoecoLASj5Wv94Vj8KEdL42KN48Wt4uXBLMmNkeWeoshAS3xBoEARiCvuZwq7",
  "key32": "3T3F7jmpnM8k9EM3BbSbDJMJ4aAWT8C1PUrzvRgBomqfLtMEGXPb8RDZhvT7WjWeqX9z2pTvuh2kMjTH9hHVNq8W",
  "key33": "2prdTEVb3qbdxMHWwDG3GuaMZWpERQjuQwDADpQVCSvaayVa8x3oKj7N4BvUEdPAhoXwyn2JmfCjTcF5Hefjkxqs",
  "key34": "5kj6wtVhYh2GJDaqwJJdKqTbeZnoerLXmixtY9AF3wyVp864gx9rFjHn3BZg6MtW91T2TYhxwom8NoddMtZLRdd6",
  "key35": "4aeqbX2a1h6ty8cZGzRTbNqzhDZfCDkEGnGUiaLbV5ZF7reEbm2BUdots2FHPMxXpA5waoRE9KTFw79VW66H1bgn",
  "key36": "38T3foFveL5y9FfUG4XHNVyuLqi5uJvjzxxiWvrT3HA63TZKV9fPdsz7RnK9DsRPLL4pWVa1JKcSEpf1wuawziUf",
  "key37": "2ithGqhaNyErWgoSxZSYyNoHF9YJFUKBW9Vr8hhFbPfpry7ooZoQHdKGixJ7TKYNGd6EL97JbVyHT1DkpBgmjfHU"
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
