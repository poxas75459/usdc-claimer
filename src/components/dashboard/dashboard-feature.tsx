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
    "2b3DEymVEFvsn6w3yyskLR2TDgew19o9NLUpWBsrQ5DirzpN1fEFhmd4sdcwkftqouFQ7SQ3HNzE3dnK8q1PhtG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "snWEPz62NZYXYakPCF9PTpsdfpd3AD7sAWfKZXUQRp5XCCuKorMWjiXKzRSNdmPLamH8DhTk5HWw2c8SZbKc2KJ",
  "key1": "3jrP72iNSnexGuALQJ4oPy9Utoahj6zEHfp9wB1vKMcVRhQFzQm9DuhCWvbcLpTuyYdJ4JsKZRdz6XW7vKHeNVo8",
  "key2": "swWNxUD226PTQVJ3hVTdouMEfRbJMqMzqYEfZfioSFTRF5sEonYrQeREPHCHHjSgtdRxSQmNB57zNKxvZqEaTNt",
  "key3": "62SsJcPYDKo7Fvy5zZbS1CbS9AVzmMhr4HQpGJqqeawZf1ZxhiNoTGJJaaXtVkd8nihKfjhbcPJPi9CEohZFji1T",
  "key4": "4CdGSztYNznZRpvHoEodWHobEYMxfjfPuunfqnsa3VkFa8WKkU8HT9QByoF9envJfsjk54cjWVXmsAvB6T1T1F63",
  "key5": "2gcqyvFnzCvppzW8L8D9EGAj2V1AaoZBGQ41GMfTnNjgHdZdARspXTcF1ZWn9iXLkz9p2D8X7pj9uodFA7DvxjHe",
  "key6": "C581njjJiaNvzaMLbmTWu1y2ycoufB5DzGE3qPN3ZpG5auW8LcwTx8nDvxZRpXFdMhDSyCgtWwavtvUT23fex7Q",
  "key7": "BAiGubyfmqt21pkhYrzc8NL1mZ2rRHr7pG5YT8jtfFn5XHGhEtybkF9Nc6A5LBiMsy8Fywp4aw8Dp5J958oUrFe",
  "key8": "2xUav1J998W7YKBMaHRKECWvnusQtsE6UedBbBoWizdfamTmiyjCUBjrxjSy663TG2XjFavptYj6vMANwy1zedWJ",
  "key9": "3uhXBaWVrNRjTbT5zwx6R758ScouHEzhgfoiXHVRqZKyqZR4wtPDMqJX4jQH4WLfBjF4K1KYpoRHaLtdu9y8c1ZK",
  "key10": "36aGXV1ii2kvxoBmsUjHMYXKSabZ5jpYaUVk8G7aCw1LQRuZ1gGPHSYr4WyKJra6mHFDKWDTqkG14QVq2PoTzGzd",
  "key11": "sCX5hnTuou8FKuDBc6gZWXw52e12Z76uHhh6ypFFvd5WGVh9vEtgHZ4PPrkeafoztBmRqTDS5xr2sXjB5G3id2v",
  "key12": "4zCWpprS2nDmFYVCBHcXWkjLbYQ7Rn8H3V6Y7qSZyFqrVubcn6kZZaRLXAqA439psy8RtptMzY8Uv7XrnhXjg7Ts",
  "key13": "54DLfL1KNBJzuLLWpEG36poyxTsu1bK96qcc2yhEss9AX3eBV2wbQQytni6HHFoBryBG4FTBBJaskobxSSDnV3dR",
  "key14": "47Cm32ouEp1KKLq7MFbvYTsEhp6nQ4f1mApZmifBTR4i9XEftdmaS7pBFXfi4eyzG17jMYMoaZMd2c4SGHKZvBXb",
  "key15": "4YUnbNuYJ8dUTCjqFAKDYJ8ibGv3TYkYURcWPRo5BJVUCxNR5Ga13NryDfevkMQgweDTyAWJzyhf1hCjMs7gBca5",
  "key16": "2EvX9NkmvhJ2Gy9A6rBJ3ayUhmA1pEFwp4h1w9twSkEQvyezvuaA2568UzJbCtWyMxVL9mi13mMhyBZDvhqmuCki",
  "key17": "51HaeB6RybtynVRsazD5YDHfHrMaHajJ9gASWoC1N2toicRLK8EQXJtu5sPLozGBS9ad17rxjL5KVqqdyY9LYCET",
  "key18": "25QPc6GzVt9xza1yPaFFPYq4bRsZfGAyXJ25dH2n1HQNBefXN8j3dH4dzsB3qKGB1SCXkHZiYcox491pjPMfmbSn",
  "key19": "4mFGq9hHwQSGV1uJdP2FEJqMkZiuJTpa9cXTybErMfMSG8UT8zQerqjW6Z95rgjPDczmYEVsJ9HGhSK7wKgXJtAu",
  "key20": "5qANA9nzXGoq8h2Q7pGGS62pHV2Uy2S2j5KgrAwo4Duz1zup5w3Mfd9JzwyRhaFB5ZZqw61c7KcSNNiW4DKKBHZA",
  "key21": "411ZsJPPHit7JDL8hvoKQhoGVjy6pGnKn7zp9iuH6SkMePneU83nRJhhCQwQJ7gXzLuzn6VuBmWxoLW4eawZS9aW",
  "key22": "5p59RuDYaSkQiAp6ofkDUnKTDENF2sPrFdxsH8yEskokUVTrSgLqwdRgVR7GSv2VYvZ8BuHmbqF8meUaFYvm816C",
  "key23": "5MJLAFjKcvc5kKkpQb6etWpSM9ESwG17t8dyeXXwBXPjGTNKXvvai9PCMzxzAU8y8HBehq7vTYtbQJEpao2aeUVr",
  "key24": "5o2xjHwe8Lqtzapk8UAgdeJdUHe5g5CFiHmH71rygBL2wCYqDmQTpQVmWc26V4YnGqjtfN4DjnfUznuLuYEefqP4",
  "key25": "4WtYUtbvhZGgJ36nRVy8abPbfW362TFNKSdbE35j7SNQauPDtYYqGuxUZ8vx49KuZNGMMftP8ZPee5G6dp3uRHXd",
  "key26": "2RnbvMktJtb5NYEZf1fMzh9Mh5UcHFqnyXD1MBm2qy8vwtCPYfGUKqygjWGui5fMsrofiXEwya4i7dC89Kbs16S",
  "key27": "3dwRZrp8LPeg4XGQHtDyWdMK3taXZqNtoFHDpQBZuBxDuXpSa1WUpifwz9g88y5NMynrWbjjTigFb8CZqgs7sryu",
  "key28": "4t17Fw7wbinhvwAigJDXbERTP7HmSB6qiE8UhkoS43iPpPtv6GMojvz66stGf3ik2EKJUEZdQhFGo8xnjkJ1DXKX",
  "key29": "WhRDtwvVE74JhU9HAjtB9B9DVFggKtBYwDiBpAy1HmtSLpUS5LLVsCqExmC6cFcMfPKB4hEDzDq7Xmi88VjdNgS",
  "key30": "4rHbisFFBzr57pj887GE7KGFf1aJPv4UF5FMQuGd2SRTpdmmsHh8ozwne1exBxu7VmaRC5TaZCYeVkiQCKtfFkxA",
  "key31": "2VqHnu8ZT9ZxTWWFJhtrZqWNEi6W9eK3ostdS2gSgHsE9NMueaBzui4ir4yjJaykXyVkwmPj5FWTovCmLYUhkXJu",
  "key32": "37iXJsCdxzjHM5kLVwHGCLfns18UZffRYN94kVsuHCNNnhfgMeSVAiPcaj3WXHAmjhfJ6wowj6nLAZnmerx3tiFP",
  "key33": "4K6tcFnxivAcxBXWyySjVYGRB7yCpb88UMarPbX849YCmfajr3HNbqzdZrydGUzx5WrHe644mifE5gEJSQ1AmEih",
  "key34": "5BiUoKa1SyAD3vZX6mwrQDiboiPUxnaA74KVxFC2vochWxZNK3EmUmck4QouEznagoe8L9boK564efoSNF914F4k",
  "key35": "yTjz7NSHix19osj24gfRE1YYQ1uhQQVdD8qvdP7wqVmyRkzPiaZca39sWHEAmPEpeyiHcGiQV8Daf4Bc3g3S3tq",
  "key36": "35VPhWSudHLx4NhBCQMeybkLc91h5HfVhtuyrZ2pLddA5Pmb4AqjkRFwS3qGHcJRFukY83gzMvw5G4bXpoV5vJbi",
  "key37": "4kx45F4kBaKbSsvAy8Ti6qR4cF3cgjmWdb7qJ8rL8UF2Xq9jvQdSLJiKw8yptstSEcjJYxCCYYAshh67k3U1Axjb"
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
