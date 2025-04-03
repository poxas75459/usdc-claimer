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
    "MpJPvujw9B8pAXCR7dF5uQidb8mA47wDH5FLxUoLSEpXSYWYeLYDoZYFt3Pye3bmF1upJ9cuLomauJhMqSeMmyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZwWZQvz7eQAfkhzuE2QZLF21mJba86N7ASsvE5iZwLZ19X23LHgLtRZvKxaqcvCrw28HwhWbzCoEiwRko3Xw9d",
  "key1": "25pEAf1mnMYiA63tPsyGmNcuYUvUk3g7BsMi64PtrFxi5VjvzUvzBYoUm3by3r7jGmiJbauCTwZGYB57jGktr3QX",
  "key2": "4bmvxtMJZJEnN1mb7d9yuVB6DeerrxzLjHsPV2tvopKiXXTxDvXESfXvBLJCXSQbmk6gGnyrjnw9PaHQAiestTsf",
  "key3": "22dqPyqhCJqK8cwihS4aXHVRgWmR9BuE6ZRSVUmr2CLe82z32CzrHHbvz9c7TLtd4m9f9NY38fYs1vuPPC82Kumd",
  "key4": "2hJxt8s1HY2tRJfgfHETnJ5c8czJjDcVy3YMrWvCqv8ccLqoCkhVC54BuTjy2nV6MPcF3NM4CU7HiW95FNNBScBC",
  "key5": "4UxQkBJoFyj7gVPfJr9nSHRZbJUPTLzqGCEQJGyy4u1Q9chYK3PxTBnxxjkeYHR1Nnb3JncQhHL8uFQ5duGKo3ud",
  "key6": "4NANuqyzXnN9BFpigAJ6smUsBsn8CbUU1SHRtfphqL4CPRWciMgfd2FLS4fpNXwFABAGNoB8KdAqgYr3nBhyjSx1",
  "key7": "4kF7AT3wZnACtQ2ygukTrygi7TWpoRBVLdjHbJyDe3dnBfadbyFZtiCzv4Q6tzDj9TaLb3d3ughooPwViTdPncEt",
  "key8": "5wN4wGi7nEj1uRHBnQ5B4JEtpc7Q55HfgpFhD8pJC4QLaExjqeKQ2cPG6BSu3Xv7T99BoviYy4yAMsioTwYnUREX",
  "key9": "3chP6fRuoqtjACowuQrJemCuSH8tm1oUMmGX5A7fTBxwskgGEuViRRmN2AZWNJWyhiYrb1EFD5HGSRmrZzGtrjYN",
  "key10": "65TRcKdQwQXGSKdHvSmKs3NSQJUewqZiA2YTdryypM1q4gbs3jVFr3zj37kHPCLL6RejZEN2qbXqgJh3qcy9DfWQ",
  "key11": "2ka4ir9Mq8B3hfksyxbSzSqUS1T34PBsefH9sMEScMRBVNPhd2xLx7TFpi8HAeRdobHuzu9bUbxFci5ZdLQD7qzF",
  "key12": "2X7aCe5utx6Yf1UCQ6Kgtv34Y4WQLeEGe1EVKvbTMFYtknuYq6wMM2Sn7wyDj7nPBW9DysHcfDG7ZiCTogfGYCkB",
  "key13": "qXeg2F1rrRTmttRCJMKCnVumaTGqwtWwvu1WJMRJMH9ABYoVR2yGT2hjt5YxXr7uzjQSYw5ak6bdjsg9nz8qGvD",
  "key14": "WuknjKqBqUFreeA2dYQwLR9qh5Z2bjdXjX1yWEvyQUUVc36C71WTACszanb8AfP71E6BcfiySdU64ooEy5519fQ",
  "key15": "2NKA9fCBdRFAVyqQtWw4EewEAbu3YgjS9dL4mDrfU9rJy1AHis2W33kXhAXJQP5MNEidejAqkKZD7TmR4JBZpFyB",
  "key16": "57ovWCAZ3bAsUMS69YAuHc374bCyAbA7mqYyW8UnrMMZDCR6FpjXFLzJhGYecX7e7W1g7vCU4gSvLrpvoDgybpiL",
  "key17": "3naRvRmuJKq1C1VUxuDeqM3rE55VXKbfedNT8qzaoApWJffauPU1jWU8kwrxkvRreHTxxrGsc3FiPe4sCSyTGUgE",
  "key18": "5XWs8xSLmmDv9LRZ2BM7W3s2KVfXHYteXeErLfX4rUmi4jZibbcNtYeS21eDk3CsxV3M5dF9saevQLfJxDkLEkPE",
  "key19": "4fm2uU7TXiz4z43A66Si8h3wMjibQ4CmCyUf5WfXryZwNMU5pcr7BkYKT4KaqcKm4sgNx15iPMoqXP2xBZmuVwWM",
  "key20": "3ALkZjgyNZSVxbMzvsWRcye7qFDczJHt95zVuETiGJs5hxPNPZDA9XQ3nM3jimMK35maFt52yT68J5VmXJM9DNwr",
  "key21": "4j1fAXKCKnAW2wA5XMsxRbb63H3ciXkHqAAvXBtFpCrWoAeCu5HNDmi2bvkMGEwpTw2j51QHirw3kzPaZ6uafHcS",
  "key22": "3mhbBG7Qx54itueLm5FRqbMFmbk5FmgrtfC9fwYWY41zGCd9DFiXrPY5zZRbzrWa7oWABmVV4zL7fKRii5TEGh6M",
  "key23": "e477MeBZddhazdw51JK7USPHaFQX5pmn4hsR2h2nDhfgJTZXRBT4sg4KSK4hPq5qkdsJcb5WkmVJfCTwjkKFFN5",
  "key24": "Gq69BwB6s1HMHXnJtkBbv9arrSUMHwC7KLvgdZe4nbhsk1Fg7qk96ffPkDNY1FcGT5pxjiXQs841H6g2Rw33Ce3",
  "key25": "5u4rEdRtWLJTJLKHDFfzDDb6FnpQZnJJJ6TUSHDNoirLqJB1UdaNGSDQJLDr38vGaDyBcUiW5Kqe82sYu9wakA6d",
  "key26": "2y1EFztQpvkWmPk2J6bmFp18XLP8UhUPiS5X3gEZ43YL8aeCHGjnGxN4dasKLDFewUiX6AyNqtokFBx5DSCzPbpK",
  "key27": "2rsQF9izGEqkKqyojvhuj6BbyvZCuWJ9mx6nRyUhJcKPSj67HjGpNB3ASzzEEkpNjPyLMGRy2Qs5rPuVKV8qia38",
  "key28": "ctS7o6xwQnTWc9eNYR1RK2pZN3ZrrWXV5KDcyUPSJQivnEZdBo7hk5x7MshfCfFXeKg9cNAEAwXu1hkFPRSt7h9",
  "key29": "VASz53WhqqWHETFPC3W5HtJvydBzyPBdGzZiHywg7ZfuWFf9HtJb4s3Yi2iVk9QnZbrfc4WaV3nrQbmu4wNeE5r",
  "key30": "5PsA9Jrr5HdKYXFhUUBo8qVE9NhbS63yk4NHuuH67TH6HGt7DobSntqoAaE5r2YpnkxbRSz5NvAYqjEnHgJX98K5",
  "key31": "cCSJ1tMqtsqJUUmKBHR3BWQY8d5UQWisUPuKvNMGo9A6XFF58jNFyWmcnWoS7JiFvwG6Y9rTUn7YUooqE5bNX7t",
  "key32": "2twXrMAeusQtDY7WZQzqEVZvpT73hW6c4mm7QzWHirfmFY9NsGxDkS4Pz2yrsXWcrKoze56Q2WbAo7DtHoKHQjmZ",
  "key33": "RvHKaAwFpPyH4R4c178THfpvkBRFFdNhpuJnqpK5qbZR5qogtmErJhZUVsampigzBMFi7nNGUVtsvWihoQm2j4v",
  "key34": "4bCQEcKu4NmNcp5Gp32cwWZZ4JRK3EGMmePikR22xrEgeui6Y7D32MctFzigd8bnneo4g8gfWiLGzTsEUKmRbvy5",
  "key35": "4UrPVK8cFiwS2CCSGXw4WfrLF9CztKzQAWqhJwtWuigUehH3XnEc3sVqLeLjZdmjwdKhVkTYSAM5ArU774JhuaSw",
  "key36": "5ChEaf49DnKFCAh4f1JXTDLrpAkhwPBJqj9arjDB2XU7giahncP9xyFz9Tcy11hT6tvKPTGbL3pAHD3RuQ5pJJjN",
  "key37": "2eH4UqBAUBEt8FiR9QTdwhCcZEV4Cx8EaF1bWgbHudborTDmwjcMcQjETynmzmeXrsfZNcxYTF7LHPn6aNUUYKg1",
  "key38": "3Tnk8XmQVhXM9kibpdRt3nCNgz3PjSyim6w667RLaa3D46G8SX1tDmwPvxETRatMGsAVatDqFpkCfRJn7QhvVvGc",
  "key39": "5QzHDHQBEf7fHdeUoMzpCbFA9b97gQV1daevNuVWLmEyFU6cfwDrppESaENzm9svcQGuVKnxvJ6kTWauRAbkDs84",
  "key40": "5oVCagMYzBGq5adsEX1Z2xhQs8PrYmy38CYwfMBPGre3WXMCicL9C87mQYBeD3EvzQjFKg5CSYsFRuMfzNnTuDX",
  "key41": "4mf8h5269pmZEvaTyVHEYb88htPVDjNLfDhC3mWt6mtzWuboyvSRFxpV27BDFtMUUucLY5RqcmiXTpmYqjXB17RE",
  "key42": "65UhPHbdkahHnmkR3yt49gpSx3ns7wribJ1mzsC62awDu9UavLz2sx2VWt5NyHqtD1p5vyRLhonLy9VTRqY2Z5xi",
  "key43": "ajwf3m6dLLBKAFgPh8rq1eLw6ZwNW4QUqS8oPedDvzVcQw1cfKpR8xaHVkGCesRdunoTP6sjG4GTB8HqqN3RJpC",
  "key44": "Bx4z8NEHhghp51E3bM2CvPuqwNcgrUJJQBFgNkpdddn2iw3Csj6EuF34kwY6KZTboemzYBxZ8ugKnTzGeSA5znh",
  "key45": "s6gHrRuwd5kcHzUNKqWUdDJL64cuLvhEPMRpDed6cXixVpSBoHqNCqsAPEbzBWLA63DMj4tg9dtKzc2ygc1cWUb"
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
