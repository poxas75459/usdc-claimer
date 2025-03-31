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
    "4eojF2x4bBjgtC48R4r6zrkr7uyNTHrpxWfQdjUpnyHTRXA88nmd5kNHu1fXYck9afSjEzHDZ2stJyGiXadhyuLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M419X44Gci5nAheX3CGLFa3FTdMXBU29LiAUF6mEK27fL4zBKX2kynknYbuqvzSuDyUvHSGK86LBYwStVwi9ChJ",
  "key1": "3cEcWBpzPLgQL4EWqGfAVwnrfz9Zn4ar8qT8wc1tCDukDnakrAdJN6RxnRWnaj8dxJLn8ar5EdJN4L7SmqJAqUM4",
  "key2": "HP9xoDywHwwRSnCW1BJPxPy2RxNKy1NVL7KNEm4cJyHX373tFxqCx3WrMMerCgsPYYGmAZS3VFtv1RmfG4yRNah",
  "key3": "4GQz4AcfssLLPivxjCHmnJoy1a3CdRooeubNRTWsmzpHS41zvnTsAwxGesMZo8wVG69RuzNuX5336mjTZ12zCVP1",
  "key4": "4QqFrUwDYV7At47LPpar5MRk6TvX5URp1xqXNPsyYXLBDuKK5DwVvpY4qCVhG8SyXqg7F57TapmMMJtCNKASpbc",
  "key5": "2eiPANEDUN1pDU83btoGYLw7WiSjMSMUYCYVHHpWxta1RcUCnyoPPS79aDxVnSwWb8gyt2w7yUsTMQzSDqJy4KQT",
  "key6": "3pB4aoAp9MDha9kA3N6subDQbuw2DWBz7G2W8fEw2VgQYqfzLN1tGb7Z1kqBTjyvZKJYjP6kQWixDj9UacCrS2Ug",
  "key7": "26dAy78Y4Zrafc6q7SnjAGjdykpSxxSJA7URPxxju1NC5Zo1vbbbBFuNuvHNZzxnM9y5hAiG7bhYeAdHkrzdEzeZ",
  "key8": "65xaUSCjnrVENrQnmePE1TAmz9R4hR9XdXBdx4He1WR7DFLEj7VPHdukBUygHHyhn5Qz62mZkisrjwWxFnaT8n2q",
  "key9": "zbNrjvb5VX8bfec3DeHyEJYtdnMUwindkWb8Xof86TK7H1e7AV13p16bvBXJ6mPzu9EKk5w6emRVEAbH3ty6sUK",
  "key10": "4QB6fNNymQtD1Q7CzwNV5rGCPVFLgwFVN4NJtvQa849cchBi2tGwGwZ5b9uy54wREsaA5MRi9QnCJzGBYVYodv2a",
  "key11": "2Qyv1kuajfVkQSDGDjWmQmNzx4ADKBUSGrxioXTDC6AgkKNejjkv4tpToB91d3jz1fJNcA8tpQ1Adb1HaeFcJvYN",
  "key12": "2S6fVJc4AyQLLFQuDM1b1zxWKL179G6ZgQuZQZUYhsVwFvNyovenoSkJa3di8BHrpYjDy1pwhRx79c7YLYRadpGK",
  "key13": "ZC9gPYKBGWaywRvpG5VEwF1qFgGuW88tdGhyh6dEP6PWdWwEYzBBGwJvZ8jiJyQbrkdqv4FZiGLzTnmkCKE6PQg",
  "key14": "NvP6jzxhyCJHzFrbSHq4xr2K1ufwoDNcRptfyNnLBQNpsjBMnMgUpPU3ecNy1VLBjPAs9GP6T8Jw1yGEma1cfNj",
  "key15": "4i6NLseA1JqHJkfgJCU2XNtQmECfWbFdYuAZBeAGbyt47uqV7oMXGpsJmanSKa7pcczMtzoGJ4mNJbqNdLQbnfwL",
  "key16": "51EYpTL551GYN1uV4dt98zUgiHH35hxxMbLRLpEJ5vEJZS3ncERWhVh1auksbvNhR4mE7VkcRTbBXf1V6GJCJP4k",
  "key17": "3q7meXiBECouxLuBW6YZrhpZ7vnQ5vx162VdcgTADvjyUF287Ka45zJr3EujbNhetph5RLEKqJtqabxS1MCVewtX",
  "key18": "4TZMvdfwHP38LbFxuNKkFAEbn8jFdMSoKxbsmEhStsoH8CPNJ3GR9Zh4EGnrxbx35mCGGFbv88nhopzyXTFuYDNV",
  "key19": "2iRcsZ6DxFP7Um7pAyp593C7DqVnD6jFc8o6QEygnEK1DeGmGhxkU2aL6DVhDWNxQBvd8GGLfohBSEjBgpxV57U8",
  "key20": "NubgKmDdtk3x8yf7pHFBQvXzD8prfNeGcmEyfmiTPd9GVcMQwcwYzHUNj5qyvW74fY42KvLT7M2QB1ZqqTC5xcB",
  "key21": "4a67LaA5hSHag2aEgV745L9CdcDT1eusQuGWAKVbnEubNSfMhmx4WhKsrL6iUo38Rs5iRKZy8oWq9pg8ML8zseXu",
  "key22": "34W4L6PMC5qmQNCp1QKkneXTXZCjjgeRdpctyodAeJZfhkbvpkPFazkwAPzYodjJsg6d2LgUhSj1ztveBhNaZYdx",
  "key23": "5kkGdxwiBp6Wp1aCPpBVyHWwX5VUMFmqfEgesYEKv1Y3m8zvBaZVyEYa6qxgHkxV4Aod9KP3RdCQ4nr243qCdB9x",
  "key24": "3aocFWHEzeUnkysDWCTFE4RoFjue75Q17CXfqetxXh52qjSMD7Jm4AHWEJmQeN4TmxYYZb6AfdqBpnBv1Twi78Q5",
  "key25": "38bPP9SCLbpBtCBTi6W3oxGGcrZvYbZuTtDHEjVJeazzW2TcPXZosUU5R2mLLcGnwGys6rkMUn5QqP51tBUcBhC",
  "key26": "3EHSvnn9PGX3ASS48tMqtEqegqBhMtGzx9DSEgUAbES5m5fEky1VkWQGTqLFsM4iKpPCWAMmrmShXFgoXxrGg6Sf",
  "key27": "2maSZNHqgs3RgPXVve3eEzLvBYG79VsoJM7tgs7purdeeyPpRojzYywQCv9wBX7VGAASJzcFBi11wozUfkeQyzXZ",
  "key28": "47xhJ3TXvASDFmqjrgEBzYpMX1iWYe5fYNaxM8Kpm3cDnXztdYx1tsxF1GNd8cDSJHDywnxhCLvYFWFtEKKpzayL",
  "key29": "MWv9cC5zycunLoEPDPZ28bu4EfZK7ghZB2q1XXQhobrwRo1Nt7g9dX5zBNkQ14ebS9TAhz4k6cQiNRct6ngZpDv",
  "key30": "3nsvrNVJNui9ErzWZJKtkysGKXug9FP9r1Rcz329AeavDeN2pN7dqfi8E2BQndYitv1UoT1isZPCz914HxvSs9mp",
  "key31": "5Mn86ngQaWBEtVArV6uUB56GwKVSDh7E6hH51C5pSbS1ZfprYj3n61Npuw7Qsoc9aTfosWijEmL1f8WKN149jmUJ",
  "key32": "3ntPfSHA44BQQBx4KcwiSEqYZVAF8H4wfRUwrhAUoVct6WqzUQMeA2ojToo3tBCsC3UqvMhjq4CrUsHRyASvQ15M",
  "key33": "3o2phZPruaYuBiPGPtFXPaFdgXZsn9gdzyKUov5hjQYJ27DTiYvGTQvAG38idvNSJ1iatkcgbeW6XqmMxj6iThku",
  "key34": "4PRQPJw9QZiKmcYJwxU7CGXXyiZcbLExJYjsuJXZugCS6z37WbrSNwenZB5Aiou3YzK6diUVSmgY7mULbVDbx9Sx"
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
