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
    "MkD7tK6WJHZoPB4rvKFNdidvyuZEYp92TLzTNv39XdriKFwAkV4EYfizVPrdvu6D2nQ2aBK1BiXRbiKSr1KJn1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpNJcfzLs5BC3bfdbgk9UyanW9dWydnp54s9LmEcbSnTNhKiTdWvKHwoU74i4CArPBsoNq55BmSHeZ3KnBekPhD",
  "key1": "WMQvqmR9FzZbKCi6pRn8BZVDxAoWspiYAch33GMJoqq6BHNpyoxpz9N7o5DLXDGj3SNTnv9Vk1xmKeqDJPhkGag",
  "key2": "4E3uWQDGnKYsemyGSejfxhXiurLwLwFG4mt4f2BM37aumscR51r9VVkJzBr25Bts7PWqF52mJSsQWDCjs4QiaZWx",
  "key3": "5TYkuLgaA279FjDmcnZv3qKrh7QBdPfH8g7YegGNyLX2xRqF2FLa4RxgZnqTJiH7iUWtYcoYNCvbw3THR3oSLvvd",
  "key4": "5L2n4NXwtsugh4yy3Zy6G7f1QosFzNghav9e7hSWoQLr9hYTkxDjX7UpovEfZxC7v2SQXJuP6CgQ5ZPXLhUFhWVH",
  "key5": "3dm9PXoR8JGHnp4N6KErh9gEtGqwaG5ZdomdsGkNKpWTnyto2JYv8P1t4xv33XSnMZSaMS6eX8BZdGSgs7jkZ2gq",
  "key6": "qW3FaVyHFc6tocXB6SdTQBASCy9qgL53QfLfnNrjjfzV2E7uHpLF9w8A45E7bMXKRUvVcc3Sx8rhjGymWJoRFEV",
  "key7": "2ndWWXrXhWyFNDhDRW5NVdRiFjYN2nZuFoULxL5aZhScUCck5QrJP6GsLc5b1QhTai3a6VubYrzdB8J7ZKvUaYmy",
  "key8": "3Lda43UJLUBfQDWGturvdt5rBwnbCj9crSRAAKi6fx2hTfdts2uQ1WPe3JxEizC8y6UNpSVFxyBDtxmnwegHDXTJ",
  "key9": "2pfrhPfGHT9tNu3wgxvwdn5oNxCC9qtwJVu47J1Gqybw4aaoXbguJW5gjWidY3jTsrSGmiLaQdVnsVW7XTyeVaeo",
  "key10": "2XDC3b6SU8U7sYKRunpdwqf8YU2TjHDPxCcRwPyJgC7BFQFGoq1Anu5oMRFdEgxc2BzoFwHX5bboMYvc8671YTVr",
  "key11": "4rhpJFKAJn2421zXwuRz2pbweytrgKWMcicjPQpkxCimvSKNgCy8dUAFhXjJxMNtVWhLfDhfT3yUvzRRRpNh9aC2",
  "key12": "4ewCmVYfZY7b4AYJgr72CASmDB6d58HHBVvyTQGqbDHG9upFMveVuUE49gcVEvfJd39PKNbZiVXQcCQordmdNxoX",
  "key13": "34JnPVLuET7F921GL96eVWgK43RY82zB2qKf2Z9jW58GgtGrT1T36aZCfwE5akeLRmTWEJwt2fYTwkUoqHPL15TT",
  "key14": "3mCScidL7i5ajC471otqRHdmQvtTfjZXB963HEHHghUq363AuShQwNPrE5sxVv4ijTbsVAXebFeGHwWcmxTQRPpQ",
  "key15": "2ZcNMfTRZzxEHgrZdcPeJvYtG32yDcKJh9FR6WWVkBZfxNdEh239MtBjLhm64MYdQNx2WDQrNgZKJTA3La3s4ckh",
  "key16": "5Q2R21MSiAL1JMAa9vLX7J8t6KZWBZuCUyJbJZ7Pr8N7J4s6DEXsEufFj14SrU6Y9BysjgHC61FFccC4rTGmNLbP",
  "key17": "22cCzcy4y5rhXpjeX4h3jyEdret7maumNssskkHyVokCL1nQDS4imqzzjZwqtouHVtYbD2tidWdwPFoDy4pxrK9v",
  "key18": "4TVeCiJNrYRgduoLrC5gQR9s7XUv75YJGhcFUPRmcLejtAnZeLrUaLfM8Gxc2B6agz8EomsSLK9hLbEgtG8FnDmL",
  "key19": "588bdpmbmLx6jBPZ93L8YL5XM6TfzgDC8GYdBYfujhTctk1vUxSbb7QHHBWeaiLakuMQSis3DgFFzXCR4X1K24vv",
  "key20": "3F3bHPvMUxgkgh3pKdPTjJdDHjTqC99gF1L4v3zzeFFtMFcqMBtCkJGMtauF1MR7S8AqRWWRLhYxbKQcwmnDhL7q",
  "key21": "Y61F5n2cG5PxcjerVrdxURgaEWZr7PtvWGMR1df5ReaxpnDSczeig9dR5WQMcFGar2Zyyb4JrDYXTnaJuVkCnpQ",
  "key22": "3q46wrNVQ5Wb62MuR9CTtP7jbL4Sd3wDxP1bF66ozs1ARf6BKw35MVLm8gP4xHUqmhBUUXWrVSDN7cQMBV7pijdm",
  "key23": "39z4p8ircxH7hey7K1qsLV9MXgtZcSHZ9EgU3icv3KLFkkQrhtFXFFTpwemhuEkBWN49k4mF7FhtHuYW6qTjkv37",
  "key24": "J5G8AvMdvMkhCJKa8gLpfjW39Xxe9FAPd7dngyXnms9MUDG3Pd4b97ExmHWp8vxcMphWJYLuyrPjgD6oy54cQk6",
  "key25": "4Mz6AEzz63PqdZ6S7fbwGAjeCLKgcyBqRJoBtAFTYzsXBPDapeHoUyyMVkbF6wFCgTinixrqozemmFyoJdbbpyZi",
  "key26": "2kMjnZazf2A1oa51rBu6rZoGsymZqA5qC4rzmN1J6w1nEsizjvckbxz3chcnwX828Vz69E64i16hL8LzPuGPnTsu",
  "key27": "5SQMhpoJBnT1NYg4Bc5cMNix9fpDWoq7JK4XUj6Ci2Qvay5uC2ypUmSaattMBN4WDW4CktVz1JpixHz7heaysSpo",
  "key28": "5HBRr9tTpHcoBMm5M1cYLxVZs9RpEaG1xD9MVRa3fW6ovT4cSgXp6xfVZMu4mK5wQBPsrsDoDUarNYxch3CKVjoB",
  "key29": "2z8pgT3uTm28euPkMRW4Eh8pJJSCyYi8RT1Am6t5VUSFPPXM7mUCzBZn7hYWv88pE2nN3M3Bq5LzHBxYAW96jA9u",
  "key30": "3LSerJhMzSeAdrkbQE7Mc5CaHQNayriqFvBnaggT1F89vZArzBKijJ6uD1YQfwhQ4Tpko6BgDgevjkYd9w5hm8vw",
  "key31": "4DyK3MEExiiNEWyZHu1kxc8pqfrgdsQEiBgbsr2gMbKkVJ2j3c9fyJVFeJh5geMGbmmBSvLBSnm6qA7ScrzobSW1",
  "key32": "3jJPFtb6PACjLLHHxJWXaG3QvW9PEUMeTnDYDD5jDf3edPGw3wAUxc6ZFQdmeh8b6Ws9JzZGDQdkvKWnHKpdHKHB",
  "key33": "52GsLGJNZVxd2K1yUaNaNoMXcBNNQFh2cSne8X1Y8r4q1Bpkas7y2dz8niynAsrbqajxzSdygejwhwd2739qYahP",
  "key34": "2mP93ZZxNiYsxaKMrqQodRj72h4Hb48RfsMkBwFKpSFkqUBvf2gg8xJ98Yu8ghheu5XcJ6xG4q8gUejzZVPio3tS",
  "key35": "5ufiQWjrwjX1wfLqg438b2QqiJBKhWgfRHLnSBdi5oCbfm1oUUaVJ7MaK42heJsWHc9wEb2id7dK5rMfvtiNC3PH",
  "key36": "25EJTkgNiKXQ7oqM7gxVNxiU3g3RpxhZ9sTvWkwo4tco8JU18Be9MUWftuXn8PWneEMKM4V4kVLyVXp16owZ1JCx",
  "key37": "ADRnNcbsqwMBF9uqHHEqL8YnpWezaxSu9WmkUe2Lk9bmjWkFApMtyRRw6nFjku3MRaWsZfNxRw2Xii7Si7zmrMx",
  "key38": "61T9ooakGVMQb5JXY6akRJXcQ2pcNnd2TGYqAETnykwepds8kD64mH34tEHG1o4CXgiqK4UgrneF9hgPaHa6rLN6",
  "key39": "58m4ZHYNcCnyTsrMwWgzNmcrYP1875HE9r3vdYAh6TquziSDBs3JZz8q4H92c4r9u86t2FxxXktkNpcZNaPH7AVD",
  "key40": "4cnWK9uE7AtXcpMvkobAUQT7D2Jk13zB9Rng8D7iQfpNcju32sfAXtV7mN18fH54x2tvFsNPCser488iuM574By1",
  "key41": "4e6hfYYyJV5kgqt78Qmz9m36NTecYuKuY23z1FNove16XBs4j24u6sTcgXJRW8JaWdxMyD8814rRFPGCfV2VgWyY",
  "key42": "5XcqqKpgfRMyZbyN3JTfXzFHzdMuqPkw2saf7Z6SDRRa2qdJw4Sp1b3wdHzBbPhKQfUJET3MTTCpAdtKrxe67UKm",
  "key43": "3KSaMc5eMZUBC3zBg81tpp6rcyK4im7UhsEPKYRDSVq2VSP8VK8VUdtQ1vc2JRNYD3T3H6q8YiWzxsKAwmXiEpGK",
  "key44": "3cQezwEHsakZhZVw1iA3CE4WGA7aptnhEP1EkADZvRu8Qzb6zzQvuAd2ib631K8qhnUFvUiJqZHHQiUGWCNbf1mz"
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
