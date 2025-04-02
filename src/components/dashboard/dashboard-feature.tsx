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
    "y2qXykQYBecJbKViwPd1aGpJK36ZiVurhxgwr1YuoWsiwojvFJ6CJfKJ1vQz4BFUViiHTxcnwSbKvuzFu3xsvpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Xz8TKQh6P6tL3RpMWvbV611iT4y4sVWMW7bs3UqDP9qV7dpt1eEpa5KFGYNvfP1pSGRT8GGYqf5N7ZNj7cB23D",
  "key1": "3EfHrjhNjj7aA1QpLZTm5xjKw2CPwuhWZ2MjRYUUwHJ9BCLVL4XCuX38SDQ4auZho9g6zXS9EP2Lga7GP32vSbkk",
  "key2": "5N6W8rpzwZrK7W3UkkbHHumsZjx4dA9KSfpnmXVutz6b3YgoQhTH9BDXaqeZBqW7XRjnw1b2Bdr5emoT9TR4VWru",
  "key3": "3MB2tqtTg7YqY9oZkhL5qDUvMv4th7qvAqxRbLQEFVTG9YP5cBjMCsADyZ6arm273MnYcLsaqPy6xHX56kYUsXTE",
  "key4": "pVjbgd2bk99psuuHAc273TrrHB8xdany7XxV7UStpSDrGhuQaUP8tQHGvQsnGoC5BiNeDjymNvD4mfuxQWh38ex",
  "key5": "2WyJ5eFZQP1RdT6zF4rLxEiUL5iRSCRUc1SGGDZjSgMakrpzTwVXgekY4wBK6ErdVFEu3bTZFpA86v9y8BUpTNcT",
  "key6": "3nwJTnbAZ2P2yJGnDz7SjcsstMfnG2ZgJN98aFAcmetazgpeaCDC1fxswP4fkv4Bn9YSL85Y4GNqircUT7Y4Dphd",
  "key7": "3Qxeqahuz15aq1JodPsNmXW6FWHkBEnchpyo1qccW7rGHkybJ2qyE3bk4nnXXjATyRUbNZGghcymFF6UP8ptHQVL",
  "key8": "45Gfehom1QwfYLBUgUMV7t4RYmrNvNArLmtroMB5reLRCuhAj75EADwv5qPPf1hpdNvZHn9BQ1mL6mMiF6KTNf7n",
  "key9": "59VqqsGJQa63HEGChkCPcB3tqV7RGftL4PH59qZsR8SkeZCP7z3FH64JoBFfqCEjNWQ3HE2Lc8rpyavvPiNSLNhW",
  "key10": "5RJ93SkY6SncuXRXhMz87fLZ32DC9Kn7soNzoK4dn4MdHpS2mQfUbncatmZPb6sU8ZhL2dCHZVC21iZVxSCYk34S",
  "key11": "45MsHLQv27U56m4GNrpaDL8hj81Yb6B5QH1SpaNq79oYzQqW4Xu8CT8pHQNFgdqHgyyMK3TVb7Q15igngHZrQVF9",
  "key12": "54SxVSBoDU2EJqD9rMXFTAK287y1CNUyMJA9cgWmf2y8FtFHJLQ4HfTz4ph437g8RAq8kf6nW8zpi4R7Kz3q39bq",
  "key13": "5wNLtbcMfXtR4oFE9Drqp5X76UDc6b14c3PwiHMDLwFgWP7CrhtLUMnSA2j7rbSEYiy96kUzHBZY2ex8pH8YhzPZ",
  "key14": "57fgSwuHiFKa8zbpoZcrbir8AxBiNkMkjArs7vVdJKrPmsQZGwcpQiYG1hEiTdCS2m9KokGCiCRTZLhwSK9g3WUv",
  "key15": "2P6Jf1redVCaiubamFeuCTNZTTDQqpWvCdoTLwy3M15Pyfmw8ufDoNC5LJn2X5xe4cZjuN2gHLbcFuGytVDD51Ze",
  "key16": "4Awa2BusG7woN15YHeuHdnmhJ9JFnjwMmEBJgG6aRKg4SSCk1TPG7AQadWKcM9EKaqx2R2ZD8nt6Hrt8qTYHGpBT",
  "key17": "2Cb726t58pyovhquyiWMrbw7pkQq8EyirrfhzjrGcbwBf2sVw9Gdk3RVj4RVf1H3vwoEt9zZvNVmurj8HUAMDkkN",
  "key18": "3fUSvBMyVjn9KhrgWaeynXNGxkefXvfQffUEoFiiJMciiNSSWw81yhcfaHpLiQfpFWbGEnYvns8vabuwMbS3wx3a",
  "key19": "aHcSD86hs2mc2KMnS7Vt9d7AX1uW22ecPVPsUbc6YpWbmVCfWD9ypBEUzXknEjvSvfPmXs4eDkq2wkaf6iPZShJ",
  "key20": "Gj1F11fDqLm6wHGu38xX19HSYrZBvdXHm4rLzoSngid347zZWNR3HZqJboEJNjY5Y37vCNzHipW3VyRv5KVuUeX",
  "key21": "42KzPec7e5x8Z3ugcKXr7aq1uZZi7WSoK9K7RicjGQADehCd2mTgA3137Eay7vfeZvPPWHsniAx2J2eHtAM4pdez",
  "key22": "2zme8AK2NHNVWPLNdSwmVt8Sq4iYEznpaUd59zvdgqD1ckCJF52Dy9mXwcgYzk2YBVgJJftqRAWkKZCHq4UtsxEY",
  "key23": "5aK9zhB4X1ac8fEmNBJz1yKXmeVxiNsVvBLdEiEQpVaEg2Lw7CAJ1fmkyLXK1x1p6XM2HfJAHUoRKAKAaAMZV2hj",
  "key24": "4GMJyHvR5WHZtB9YH9iuDqDAJghTEMXYH1J7wdQymnQuAATDjx8kNMfwXjAgidqD5Vf1sqQnn6uuDDMw3VETrZN9",
  "key25": "2F3YEHacMEVKMYS4mvt6VTRJji57UCDXXxrqnj4FDdXjBgaJWh8Et28D4aYaPT73fhUWwMUKxwpSHrXUjzFHR1g",
  "key26": "45BETka84t5STStcKE9VZvS2uzK8nEhKudQ7raUNVmkoNk74GJthgFrmL6P1198f23oEtgLHbsThhVXJJ7bETwmc",
  "key27": "keANtwnD4sRTbTjAnCr9DsBtcfVJy6TArhQnQeGMPg3eJDb2PBciKxcSzUfsuTsG9i7gDwSJhBQgAyhTqStAPBF",
  "key28": "3xsfnhWVxnCp1U6wzpep5uEtg6MFzMsnsneu1ojDUUhUMt1pC6FVz9YhaiRB9GL2i7xcFcKmjGWHafaDPVJq6pTf",
  "key29": "3fh82wwmZ3P2sjNBJGAHGHnShtLTc9KDipspB5gCjF57JLTZeK8QZ2ZgkeUjVWdnEWNbpXYr8dhkc3uRU28zaHZn",
  "key30": "MEoC2sjhXRQywB9cY9uc2kNE8e1AzGxxnzAoNAVRaHUw76EfPToZTwEBVBpQ8PNf7tVJ4Pi1M6CLHFdC7LnimKu",
  "key31": "37PVVGHjrYMKUHwDPoTKMoz3QJm3GqoUobF8mTT2XsWsDecDbmaAcUhMfq5qKjv3vQKmCGRYCKHDTFSc6TxEnr5N",
  "key32": "KrGqVYBGr1RjS1xacoL5zN3LQRLZNN8R2DfJ5zMXxCPc4K2veXqEvj8dR7ojz19DqZwnXuTHDz7LQmMpXBRN5uJ",
  "key33": "2tAgXG8HjR7NC3E4ycfS6HeW6yzRRZXnYLC7a3LQGophukV8GHVhyM1Lx6jV7yLWhRdu1kXpCejjhsKbbtz6yFkP",
  "key34": "48qag316BvuFAZ4of1YLAp8kFh7GadiDiiW5t9WsGzAcVfL9nU4nCE9NEEoBUSnGN2hkDr1JbShKbiRXrgzWsJv8",
  "key35": "8Cw9XscEZpizfkv8eLfTmLbfLEJdMRWiqRK7weDLDK9zGNTbsq3DsjjcCa1qKo1Zw96NrjKQias1z4dweQ49pQE",
  "key36": "4vLJKQbW1vfpAktUk2Kv65kX38mrgt7sJRtYojeomeLY1qJtywWxm8UKS8G8U4iXFmEugDTk4UY9UGGhJHC2TQ1a",
  "key37": "4R3HLA4x5hrZnqb5WwjrJfcN79hA7wwUoofBPSXdRg2iDMNtF4N63eT6JVf1nswjavpGshAu5j6kr4R1DSV3cyQY",
  "key38": "M75m4pc7JdyhTXyjxCegL2ZEFzVU6uwMxabebzUJ8sbjD4QsabwCwXXa4BYnouQxKwHRKMkjetBQpuYbFsWkkNo",
  "key39": "ur5GHA4xxKFY9j8gXrNuHhMW9LuysUUuzHB8ETbSztB7k36TamrPKgVPmcCQ8zBwBUgWoePQcpY4swBN53wnr4c",
  "key40": "DeoraCShRBBsK2PjVFvz3jPD43qkQ65t9mSoFaHeeVVeDQJbX1oXXEqA5z7p3FZFPQnFgzY2Ymp6TbSTTBk4FJ6",
  "key41": "3N3pVRZJFb4iNyf88uztN7sLWMFaTG8sh1oeJUwRRQqTmtYh1NNz2MduAyz3qR7S9CCs2j49CXUNi7EMazVJyRYy"
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
