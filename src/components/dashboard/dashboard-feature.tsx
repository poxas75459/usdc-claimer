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
    "4z1KYcPqeusKTd3VqNSqxmCjJwtqsBJ29GmruYqEKeUnPTRkQgZKoqkm4CNornsY1pDvYjF5xhZuqG18M4N7toP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvxhyCb7CjKPTgEYGSmec66o9xoYbx8kiFSUSJeqbq4pDbwoYr6XhKV9pmNgmwqQGkheW8yrRzF6f9wArNQSrAG",
  "key1": "xWsQC6Nreazt6rty6bLYrhwMeMt3BxU5ghjwp9L6zqqhUESeVG8QD6vdwv65zhUc2FTEQmgekgkRbATEniAuU4r",
  "key2": "5N9Cuzidm1QziR1SWtjYCFJsRrt1eBmbwRbbBKfzZaGA6Zv27XcVxEFPtYLNnQm4BWtQU2aBdDrTydu4ELv15hjo",
  "key3": "bZttKh6ZVNRaUj2XugP2y6ufYt6TJR9UpCwKZsoEzU4s9NNUB5iJotbM2k8G4yYByTUMgjLvqL1dTFGtSpqWJfY",
  "key4": "4zzMk6r7RYQxXNmpZnqpvt3NzGAP9cNxzCKgtmynritRKMzGg9d447E1y4QSVWmSr5MsENxDFDKDRqxRpLEUK6LY",
  "key5": "4hMFdqJZjgL7n8oGEYSKfzLZ4E1ox2crLcatWYimwJugperBcvUsTojGSqFYUamoNjw7YDrnn517XGjbonm9YZe3",
  "key6": "3ux632mUP5TsWhnRZfdgKmfRxPwpiifkSDzLG3auwchtu66Y7ZrWwTSZuoHxdgnmH7GVjekaHXS43QdSnCRLEWNN",
  "key7": "2RJoLQ8arct1QtgeZzgfsqwKxKQY2B9MUzEF1pbAYunc9JWXroGg9TNqAPni3unSEcB1ugH7GHQ9Wqz4G2F8tSyk",
  "key8": "4eeKw4xKZEo218yggaoiMqymPbMhaZhCV6QubUWx2XjDcRTcbPYVJLUkjqEyK1LRnEaUsThSUtLf5SLmN2Z9iH4e",
  "key9": "67k6ns1vyTLviXY7DDsUc34Nab7Qk7QpuAXL2T8G1Sij8pE2WzEoKcTBEH6AQA1hwpfXb7eWpqu1JdA72WfJ2PG5",
  "key10": "4DrgGsRxs5svZ3RyaHCMR5cFzLe43D2iDd5TSQQRdP6YsS8hXaBXstmbtrraUk7ZHioUAsqojXeKwJzjR276eca5",
  "key11": "5qNySFfX6p3itP7H9joKeN1UBghQ424JS1oe95pbaeCLx4vHDNee5UdzNQvxF7LQcA2GEb8D4ChAR8sNhR4Q8D9e",
  "key12": "3JCfkkmV1zY4PBKLKnTE6UNDUSnYbaNTUTq364YHjjzYhPuS6ph85bmYNVEuU2qwHpFcy4cNVczHtDjAYMxnrC6h",
  "key13": "2nytGKTTXMFoLWq2yAAeFNUzmqRmEu2SiZnvn1exigG3xCnx71tfZFPxgoVijMKorhKeLNAajAxKtPkCCg56FNYM",
  "key14": "EgPE1LqiyChbffBQi8YkY6ECdswgncJNAWtmFbz5zHTPCXCvTbMxAPmsBPWBYVKLPGCagmexrJfjfz9zvYLAZRF",
  "key15": "4s7AeCBGhwmekEVyjyuB9MxM3UMLBN8g5bgG2CqG3jeNQn1p7ifjEV56jtxtWkcQ2KwSX6i6YYNY1x6demZB7cCG",
  "key16": "5eecKfRECNz2mg6atDQVsDANyEDmnakvqC6ySYD29C9XvtVj5wdUwccuzKyt41YTceYU38mciUBwB9i2T19Ppepe",
  "key17": "3ZEmHt2MGGqHowoMygLSmogTg1NDnqgSPebSwhWGWptCPRCDGoRjwCg81DJGpkXAgcA7wpSTkdKH2J8JwCpn7wEH",
  "key18": "3KK2h8hxUbk2hgqRquxhmPRKZpySY3Y6dbv838nAafWrMmqquthURgH6D92se3Hh92qyRZU8BVrwzmDXLtsKUnW4",
  "key19": "7gkEWbXQm2gNm8zE9C2Bm3D1e47vpWZZyeNARErfbMf7Ek6xz2SkpQ92pLb7Rd4kjE54fmyuzrSxc8FUTtrabgn",
  "key20": "55ysCDtE3DQuJ6Bg8gYWC5MQZkzJGi8HgdZxiwHYVV5YeP4mmzKrqA5TypYYMXx2s1jZcDuZ3RNiFywDD5E5eVmJ",
  "key21": "56hYoHEYJpoouqicrcVAMPRYgVxfXM6AaPwzNXQRzHZtBGqWfxgDGxE1inzjUAWp4VYkgjhwCwwiAHPHeUmY1wRf",
  "key22": "5frjQuEVVMCQLvd6u5xk6Ejq3kXoPUYqy5YLCveq2nWb1yTKuvchEUQa8yoXuhPXcP6XdxAHWx9e8rC5pETX4aoG",
  "key23": "4TA9bvG5HdaxNY4Bhv9bjTmD3qXmqxBApjfprzT66xR9JgQCd4t6CTFZJcf92mdKn8ZRQZs67ENz3HpQmjpRDXDC",
  "key24": "3UNiBvk3epZVY3AhtK3nJKkhkVzfojXBLafhheAAM3Trv8tzPP6Z4pKXsLzHLQuqoSk4aLT4t6qnUjoox98N49JM",
  "key25": "2tEhBXZpgq1dW91ZJpFAuAnB71NNQm11T6ikiq76TS7LnwbW9bbbtVqgheBCqmkVqWAh1cyy3Y2AdMT5jYGAnvLd",
  "key26": "2p2Fm6AyyPtp7broet6h78fdy6iyjknzmcS8oHaEjBgtF6Nubi9DVkH4FQgD8zozY1ss41emmJfARLbXo8ZK6mSR",
  "key27": "rpv7FSLXVoXbT4QvVE4MMD9QhUyjkAUGUPiFhb8R4kB5HDixPMotoNQVAaoeXGQ83gig7im5T4EHqe54xWEHNAr",
  "key28": "5qrLyBL4Pf3AU2Gx6qU1jpBNx1bWw6fHc93Ro5Qrs8SgVkZVtf6g3VygdAu8a75LhTNHZWgx3TnrWEBVBFQc5mP3",
  "key29": "5WY6Qip7QmG9rMwnEQ1m9JchwaDNUq4GLVuYQBK3258UAwnM6Sa7a75juS1pjGR3iSofCH9sBnTPfgkWsazXDBSb",
  "key30": "4FrR9MwZeWq4jMavekx1aMmEFswxDVaqfLFjSYctSjY2mSypmSE1VFvVXzfzhq6hMdnnEtNmFbCMy1rjyHckt8u9",
  "key31": "2QoaDkpbTNXqvUsmLkzobqmikpu9NZeX41jVQafhiWrjYSN4RQKkeDpPm67GhbdCBnzyYNbTkcj2SXj7aBodQN98",
  "key32": "2z7SfsQQ38HjRa2CmjUHS1DZV1h8ETHki3A1q4XApeGM9w5kzFUnh1qxcq5r87grpndA9F3RRqEUEcfYzznszXEv",
  "key33": "5v8eeGnGxuYAHy9guiap4QCXub6omg5pVFonM5qYHQg8mKnHkqhDNrWuU79QqG3HWea1DhnvNUUKmQTkgnjTzXLQ",
  "key34": "2sG44q5BrMY7EJjqLq7fVM1cyJBxfwcVQsBF7gdiK77uXpx47mHfCTVJQg9V8kopGYFVmJ6GFCoR4VDCv54dyyY9",
  "key35": "24M1bo2DskuKGujk2jcVNuG4381YBaQS9rVTqPpL5zzMhdH3ZXdfGWQF97R9p4PrNg3hvvu5UGZP55aqwLLPyptj",
  "key36": "ucFQTQbkhsVNiMdutkeYPwDz1D4AqBhVeoUpMBUFANLhziB4W15qCEXGLRSvWmuxsYGXbDiouHsMhc8V1wm7vcL",
  "key37": "4AV3xAeAS9cGbLbiXwYHiTeBCyvNGKRP1QVYzbuz4bAjDA9E46AFXBM7axafe6u1bKgYM1tHUVKC5SPQZ6vuV6n9",
  "key38": "4JtyLyqFVrW4LNC7Ym38m62QuNmbTHP2ki4MTKechNyHw5SrXkVU3fSUDFUx5L9oVd6E1exqaFbyq8coG87smuTA",
  "key39": "56trunTUJekGQDfBBqb6ARUVGW5xCanrE6tJeLXc87ukxxS7T76EC2MmHr8AyvDDT4T7EXK5jQi38L6m7uqvfJZx",
  "key40": "ThCY9V6NHg5omeQBJeSNCWjLMmYsuVDcsRGEuTxEGAyZPaffvmHpapbg4zRJAzcnNo7S2zjWa6NudDTwGzH4C1N"
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
