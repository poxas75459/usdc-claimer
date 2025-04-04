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
    "3b4zannDNBFC6STywop1JWuBdNtLAfR5FrzuKFRNmyz4peTwfJdReKJTPx2HtWHwPQLL1gHigCJnYiTVcbADh96T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEiJjGvbGNknGh3JiLK4AHD8JyaH6pVX7fTeRTPaGmsnuYKRkaQLWumjHsme4b9P1zscuzzpPnueQJGsYhsFGCz",
  "key1": "49vPoSrVmSqgqEbxhErQ5v7qnNjrU2unJ2YJGp2oSFpQn6sq9f9HjnTc5JkrDfXwFUGshgzV629BJAfAzHMdXMW4",
  "key2": "2kSMjbMHuqdv6L239CoQgzjRPetAWJ6azRAiPKFAKLaZVLQbZECmQC97h3mxsG4pRLdhBk5YamZFXBKAN85dvPZH",
  "key3": "26ZVpQRXdrvmFtYXnRv5BsmNQ2Gve2Ai5EXnm3cnnSZt9GdZFxzvhcjVwCc7D3QHc52sdFb6PoeqfDKMhhx49vHQ",
  "key4": "XXiyZNN1X6Jf1U4gWWnsNcWnbPEGQC5ViHVCA7ZEHyFuQBeTX8ds52X5wZM4DEqc43cEU49wtNfHwRAubAMoKGK",
  "key5": "4maQVxHM8J2vCG2yMuysUZc1qCfEcpPRLrRfe9j2LHsxBtjD1uGTXajWjFRFnQpwsDADACCy7AQ1zeunL4FKNJ3",
  "key6": "sJ8qTgu4NzzvGzisn4vf5YbFb5HqhYyLuAybn6NLp29p5ammxPvUaWuBcEGA6gnwkJmAh1gT22LcUjwemq3ZoUH",
  "key7": "2TWvQinb2SGAw8Rgww1TiujjoSiofHK1QygUwE2QC3JFzvt79WcSaUfDmKtynVUFZFKXdUe6VG521p6QnZ9vFnPQ",
  "key8": "4YyjzYQV5xY4YBXAh2qV8BEnE3GDzPFNSdbKAJYCmdKhTxxF3mje13P5baHABFXA7FPbamkE1PJYeavzLT6CXGiu",
  "key9": "4DGEANyfRwd8jrRJs5sU4xVNzNVErgDFGxzDhiY7bJpKXLt19p8V183iCaZqeC1BergCWBR2a3PkxB6azGNEWgNH",
  "key10": "4SGWX2gp5sQCCmYht4eEiSF3nXkoKe8vKffWigodByt94LFxBoCH6QPMx9ZdUWk3SKCh5ipebqrwMtornNM2TbNt",
  "key11": "5VeQQY3wHNrvYdymULZf5yRYzdPnM7zqPFW67tSadSBgR8XmuPEktpwmGdejaHNBtEyLhUtQd8oT9tMSRYi3mUXo",
  "key12": "3SWa7PWUMVph7uEuTV6s42USCf6LhXguKXC9ZXU62RmJ17dQQ9yhAzz1kCL5M58idK5aLXDVt9p8vhk1eDv1dLFx",
  "key13": "4UXhhvSiDtB2n6yRAwZDtmQQBHPUvuJtSS9XxRBv39i2QYHRCfjhBkJPptXV5CgzNbeYjLBKe4xyUpDsG9ecf2HB",
  "key14": "3SjyEqioG7DYLS6A8UxVed6oHbH6WtX77KCvx1vHhmFvdcwZ8CwS86CFbM5WoZH2gKDDqhnLqVGZ1U3XciuQVB8i",
  "key15": "qRGjvruQ8maHRzsuP96n8St8Zftny4hcPtjykgDJmCi7bzfULDfGhvmvKWeHBojJ18gsbBz8diEz8nYUVoZxKca",
  "key16": "4VWmQgCEJ7ZQskE1Ph5xPopaVLTpTCunvVgiay3hH8Tb5YXtgk9Psd9jJqwhnxs4FWZ1szRU4MqmYu9Qv6kqzSRW",
  "key17": "34rAUEN9NnjvjRgDsQwVop2qgasVrHKXazpDLKmtJZTnMNLzp2YGPpEBohDLyPRyiDhZN9kzZv4VAz2Kcz5aaHeB",
  "key18": "3jEfC5Js6Zqa6xwkWKak3QvciFcJLNHNShvmF56CV4bSPsYUbC9t9fHbkTaNnGeKBzGDHYqENH4K3r57tkAniSog",
  "key19": "28L4RwmF4ttXyQdQoGcfhVdd9iza2VUD88cKUa4V6ro4LCs22NUkFoThSPAmb7adncLYSggBcGmicd1hotN7gnZK",
  "key20": "4wja7vstfeQ2dUMAHcVkPvBjATV2iJjfqAgmYxRfbWRnnYRxsup8vu5xqyd5gyzeFxSyFXpN5yjAdDnFMjd1rzC1",
  "key21": "2hNuZLM6JW9Wfv7kphhn3qShAfHTbZpdQywwqQ6wSnoHtjVd9w5VfjWZhwbQF8r44vgCq26FzhUKWAxG4dFszAHU",
  "key22": "D1PxGezaccifPov6qofSxocNSpe7nBku3FpYeYz7eMbQQTHCyCny6tUWfMeycN16qvmyUiEVkgFUb1QNBiuG6gJ",
  "key23": "3NxDEJ7Q222A9r1cwMaF21Wu9YXysRph9hE5HjTEe24khK8YQsQ76fpK6JfrVbH4aj7oGhomoQnbJhZr6YSmJii1",
  "key24": "5UxCENwQ2NAjJKctK5pcBWewpuiQ1rsZmSZa7gCdpbtQeGPXcSfj9LdJDMkrX5D2NdNVN2HyfW3p2bm26eUAKC5R",
  "key25": "2caeLSBxQUepRxVDKzq6gUGktLk6LpC7iezbA2iMiiEWZGZUzUoKUH6tzzSmY1ErC29dkYqPwRRBv7hmy3RCVWTu",
  "key26": "hX3UoWj1Z2LXSBSQ5csxUkL78aveqmWGVa5Vy6r9fxjBvzC6aopZajTkAvgGM16ZcT5Xbmc872omGDFF6pNZ9JD",
  "key27": "xXfsa4vSErDSQh7unBLFowSUejUcp14HtC1zaNBbpctEztYN2RPhvhNdjUDCGzD93JkepuetxcY3G6j1Asvi3rE",
  "key28": "3g82r6t3h5NrnKnKMsnGcx74nzoWPRM4yZCYSY9eD2L6BXZ43bFV1EgASNZ2z3csz5FhHSq55c5Q4C7pix1btoco",
  "key29": "4YSVvjosg2Y7pq5BHMq2Hs5jgmQGYx8zrE7qemP3DrxxDtUE29asDCtS2H6xqEyPqG2CJ1UdPudxHpE85oT7GQix",
  "key30": "5zhEnnbNwK4fJASASqGtiycALXu5WVoncK5R6egbDwBn2i1NxKpYs2WvmPxUXrgW5MY6N1dgLrJJTGUCYg3DpkfQ",
  "key31": "4uxneUD3D8ZtoLCamvy4BeDa8hte6FeMdT7CbMyvRngs4d1doHBHCe4sigYdr78yVvWPsmpwXFYDJjGm6QN2cnYM",
  "key32": "2TvowdMNZS8KKu7goq72NH6aJ3zGBe1Zfe3dRzoUJTtTyynYLjqKHDcs7JX3koe5keSKHA9GkMn1gJMaHCHbvLmv",
  "key33": "2EvKRBVx3hiKZvmyvXzATpmeWVEjCb2XMKp9WxiXdXnmHZK82gDgqm29AkMphZtQK5RH62Z6WQE9uxtv5twvgUMp",
  "key34": "5wKB6Ymr4s6mVVsaex6fDAQ231h4teH38yyfsvGPSeZjZfWFXBeRawQqck1Jr1RvnBPbm8ekgJEHW8VaHQMBzvn",
  "key35": "4mMdsF2vNBLnXxFbGndVXEKHSBwuZ9wHYQwKbr4d97oU69kA8HaLkT6GczS14fE6od2j2fSzymsMnxsr2iS9MYjB",
  "key36": "kwziVXycu4iKuCjJev9JRuggQsLRTvL1PFaCat8JnH67PqWsgqTxedPBrRQqPUqn2bsi7S7h5U7umzs7RV6e8XD",
  "key37": "aj6hAiWaRtqQuycNC2Z1CuGqwREqXNRxx2soadEADuwyqY45dY2kj5F3ST5wKEU9Pxgtntanme7oVECWmEnuxe5",
  "key38": "2MqcvnDmbq6VHnJSkQGcDciwXrLU1hzvgrH5MDJxLYBBVSa3sUVGQ73vrTMovsuVFj4Gamq68WN6xASCCeYL8Du5",
  "key39": "5ywT844bH1MGPvuFeJaMS3M8PagMURr8J75ry2Qb3h45GQHmyXsiFJa68CPq1AmFVgYy5RhKsKkhha1QLvmegjA3",
  "key40": "2cHWLoMArCTE4r58TGVPuP9C5zyC8xpPveX2nVpexV9emofbBAANuUqHsjCChNKnX7uAbJN6PgP6KYcxzFDpM5VU",
  "key41": "4nuqiJRz2VDq2Num6EP5yB4iMeNZhYJ4mNprUKZs11PJ8csM68yGhupVNfSuTF8z3AQS7HA5eqvZStAtpaLoFHyr",
  "key42": "2P9aNwpafyRBk1gNZEQhnmirrsPaHa5MgLeJPDdTBb8NuJH1VKFvbGZjwDZ6YeUG9mdhZftFzkUqvsGoc1dV8TVM",
  "key43": "4nW7rd3CPdxocfJmhJeqdcWc26JnANcUfmqpGSKjdqkcmLhBoDWiqv7SKKAQrBd4agHErQ56TKUKqnxVmaZQpktG",
  "key44": "5UPZQrzBH7Q92NswE2j8P3kBnWCnvUKUqtogr8sMLTTtspCu9a2Zmsm4DVAk8A8gw56aRUi2jt2BpBisMyneXSkh"
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
