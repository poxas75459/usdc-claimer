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
    "QNqSVzuHugndpX1UKDUgbRVVHLrNuVcxyieUWsbktnDYxiUugaUCkVkeUxZpeZKUWy6zDcdj3rWjDf5YRyGFCEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjRYfBqH41raQxhHLTLffDjKwveKVBEkuzPKfZxnkKhR555pjqCNk4bSbrCdzH2fDPYTwtUwXDfX42ZUWXbZ173",
  "key1": "2inYZdHgb1ePFgU6eerVHy3wmQurVMPeBoWVAAELn4FR6irRvCwYSmANi2Tmwiox961S5G71m9hWqfqYqW14uDbd",
  "key2": "2LmDMKaFKe3tT3AF9u2b26y3TGeoPFf5vmMKqrAJdjKSv3RnUHjbzLutdacMkx2KhzRvDR63hxNnjBeB8BGb6xaM",
  "key3": "3TDi784SxpTgiV9PJ9RAG8K35t3j7QNFFjjXQxyJ1YumhAC1Q8XtMgHATaQEjN1r5SNE6QYEvpK717ZR8NiND1Fm",
  "key4": "2e6YiCKeCd5c4qEnvWbBxEt5Wr6w7DweVvDrLwZoNbepejKPCKCFDB6UiwqQuyQRaFNBDKmdkw4cjTGPCFkLr3qr",
  "key5": "5dU2c1hFe4ATXyYxzpMf64a1wepPam5hQBgb4tRCmCc1cYPCmKeSQLFuLGxTb36idAdho8DmR5mSPFZMjkyi7wEU",
  "key6": "5fhGCkCoWbAVnmh1H8EKDUUxHs95DJLKcauUhqYVpu3PPYWu8KoYJK7RrG8gm9mWY8KmgM11KnwSUyyNYBCyGNwC",
  "key7": "2ZE4oGDSvpPbBj7jUrFqLFba4soHR4zGAXL4wkwoVzmeJfvibhBj4cj3XeHfEyzXkqEnQZkqpki3cyzcWHchTkAm",
  "key8": "5QQnDux5PLVLR72Z2TYidFnZEdcxD1q24d2XnitPqkp8LyP3ZLeTs3aysZj8XH2wSdFuTA2CfkFjAyWsHmPWY497",
  "key9": "43rc7U7Sx8sjTjCgvPnF6EzKGDXFoCvDQw1NhZ65nUEbLxduAu3seFECCQS4iwzCNDmc4aSbEKHUngExnNAgUMzz",
  "key10": "d6dewdS59odTv1hBKeemwsJN9MXXK2N4gjEdgP3jdxkmUWRdgVMq9p4t3a3FjnNkdjboLacxVqagENQtfaDQHj3",
  "key11": "N65eAenDh98HyuvuJfKcNTVy5Fv4g3SJCbf7aGtcVN8bqobbou9efnB5ymNydcjLFbcngNvhicG3TyjkG29zAYZ",
  "key12": "cdmaobeEZP7zfV9vSN845ZKTD1NZnNdRd2YeVZMrCt8LH6gmVu3bjuH4ut5oAFtFjQahHUrNQNe68qiWGg5DwPu",
  "key13": "49tjxaG6zxQNNpspKKRwdXa8rrN1919rMdGBxQQPoVKAe1q7zHMzqZJgFt3giSPHEkLTaPGiuWJ6nBssHKqCWJiH",
  "key14": "5tJbVnAMxpZFqHikwkRw6DLgP9iwvZcZKLTCAjt9x3KXyEkGm7quhKsdudgi1TGZjgbzy31RDsi775CzSiCVzE7",
  "key15": "3su6pcoY4Wd6WRg4ncFrbnWBF3aQxRJUepxyGwjDnigzzcUu4TRcmwxY1pB37vx8JoMtZVaW8eekD87q5Mu2abgt",
  "key16": "4ncqGrf29gjR9dXv2P7HLbKXqEF3HUFcvvnA57v8ZCexvKdZD6ggGGMck8dcYM3iqtCHjL2BmDBZzwzQuDSeoWC4",
  "key17": "42bm88XcC7Nn5agt1KqVaPaZi3RzYKMEFmaPnsrH7nJ3vfxuE4WjfXGt1DFHmeY4X1uuTi8gQV5YUJbVANAars5n",
  "key18": "65VqYGp8upVvKNQDMLTcxHGKQ5hueWotn54jhXpMX67wrKbRByWP1UvuZzHjsAmgRRa73n386T6wdR8Bdo3q75N8",
  "key19": "5aqKCtjSgkse8qqDjCRMA4mWiTHrtGqQ4SfJGikXGqAXz4LxeWgTgCSUnzPPNkAwDVjrS34XonmsJ4QF7hmikNVF",
  "key20": "2ajs8tqsiYehV7ZF3kvkrRTn3ZLZVmirXAL3c17pF7fEFKKyNoNhxXm8j3Mu8BARkyyqEpEUbcXwve54r4rmgkeD",
  "key21": "4twD81hEejrW7HVvaXv8TwPkXYuHpjrJPKwY4gsbGU6hPxymUQCYzeNJUCUab4ZEZtCrETQbHGvRjxEUDSbua5w5",
  "key22": "4B9dcDRU57ibDW4CfyVdHKVhzDBzVazj1k5kB1bLAWexLDU7coVPmY1pqJHQjehpT79kJ2ujmoyxfrbtLGCYe4rZ",
  "key23": "2Z3isUdoioKj3vYLahVjULYXpao16ZFhEK9snsDrYvkRmLkatMMVHaFYNjSSkvASSbP5d69FPt8aZ4tyBCwuY5qV",
  "key24": "58RAYLKfBeUVx9PHQrQSTA4pSMSk3RoPydKab32yDmQDLPQ64AnLSAUx3gvbCxH3AYKPJWGDvzWUVuwBhS3FNdP4",
  "key25": "p7H6qj1yUT66aHqmo5bd5ndWnvVAPioPE5VZF2nbEFPuZxqiEZGwXmq3bCh1MibQYwrBMVMyWY5JVNVovysn4RS",
  "key26": "2MDe9pzZeUtZugG44EbPruHKFepgBFb64PsV1BrQ7uK9DpqApSyswNMiudD38STB7Enj9ivQGQVajNPuea1miuxy",
  "key27": "3w4NGVNJwbCY8EsyeKKwxCyEBeTpCXZVD3pTvy88V7KGVmqLwNhnuufBBwELg6qZp769sZVAcHMnnnGnPZZbewY",
  "key28": "5wczHkTqb8LbNMmLQ9b8NfoLA4aJ5ivZFVpWuV1PfWp1w7psbFdWwbiZ9y8yBuUDV5BKPqZiUtYx6F3WHpahon3j",
  "key29": "7HCtLqB1ZVARAJokvsq64Z3gux7J6TDKRxdnj4eMVHnjFvRPveh2FfyjFLqbYjLLvK2bE6trViXmdQ3fAqGxVie",
  "key30": "2yLqpkz5sUM8uKbUtiNu4C7H3xAdWUVvDCNi1PEjX2UDSBoCp7dWawSTcGGAe6SeN28wyDSkUSo1MDXrST1hKbgT",
  "key31": "3skNmCp2adKK8KsHDDQJNGr4EeaKarfefLM6uHLpZUtyQ3hui1ijNtUJhavkYP1Wxq9ZcyJ4x1BdBrQHBxNCRL4b",
  "key32": "3RoAsSPTLWf73bRCbTFHfZBAKW4ocRmSDnSPqw2CJDR5BmHJejUBWrn5ZJuapx1KS2S1YSsVYnPpq3ALqiJ3bZNf",
  "key33": "KFZ9bqP1MMymoqbQik7zhBxT8K4FfC4FKc8RW35hz1UrCfU1QS3hn1BHK19rNhgdW5YCNuZKcRU1gVGsrRNAunc",
  "key34": "4K1GEj52cwJcHL9RfzmxfVkSfCfMsTScaJyPoHNcbfivG3eh6ub3iR6fi7pFNKEZgn6XHQPpmnEK33FytLcGik57",
  "key35": "4YKVjW92mPktQ6Kvq8tKhGqLvhdfpC84qBYAUfhbnwo7Fy8CT6tGkVgYFSatz1eN3gPV5siwfxSVskiQyGZzB8K",
  "key36": "2HE4Kqbbi6wXNCgYQ64DpQBkkJE8TtBf4SQwUhH3STGr89VaXHvzGtvAcFsFWXVZJ2Z97BGE1gPPQCGe4cGJq9Sa",
  "key37": "2fbLUF5ZVXGjEtA9y9gX48N4v3hrKRFeosZkuBkYp3HEFB55hb7LnQDY4Tqt9684qm69BnsipgYpd4e76eewVnWT",
  "key38": "Pn6NeTjvH61W3ed8uucEJvjQrgE3BmokMgqgfPhHtXdCrDUYv9v2x1PxsWkwm8xna9v57dGwEau2CcknrTG4fnf"
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
