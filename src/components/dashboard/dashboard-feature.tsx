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
    "4qTJrFh3DNojqw264GdJxiBwdftJqnzJLJQh7yQ6xPoXRLQr16kg7tPFSiZmBaVacX26wT7cjQ49cYGaJQemVP5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvrnHnsgukpgFH3caYci9b4EmVF15xUe8UQS2uBcCFuDuMxJ15eM5Y8LSvVz83T7oNqq1pFcWveTc24eQJFu58Y",
  "key1": "4JyGbD299oW41o6VySeX9nw1CGK2BDZesBZVYrkobjd9hboa9p59fYzFDq8ErLg7wMEuWu3bEbJLTqCt5X5CDVaj",
  "key2": "2DfCKAnRSb9JxXvMKR1CcZNKiQLmDoNXPUWoa7ozhVZugwyNDNZsBpBnfGCAXqZQJSD98tRtP8yZXF7GgZs9CTLj",
  "key3": "2dsNYJrPBoXff4owgMWDHkQScy8rFUe3Kf3dUqwvezQvjxqcqsvEuid5ufWaQnCyRovBtjuzpf8rWAAwZQxLv526",
  "key4": "446vSoikwSUmn4ToLcaAwYAh6EENUiVcD9h1gq1ZVc78MJA6NV5HY172nNN3hsnKEQCMSNWuGAuYs5UCPaXkfsAp",
  "key5": "w8HkGF23eWk15T9Hh9edykf6afo4xbX7GdrxDEuDitD1qtuC3MDqMKoX3CULUuxMdMsc9oHDkWiPFdHHonpqVuc",
  "key6": "4HtLRv4sjDKPNsUGvfhFttkXGPt9zx6X71z2z2UHCwW2RgVWC69KPrMFSbrjtDnYCafpWU3v78ZZNZMTZ45KG1Nq",
  "key7": "2AEp3ViG3tsE7sC1JdRnWSKWzLhQbZtMnRHPYP3srVrPx2jfKp3GvA1K6FcjrvH24HuSWS4VdTkdukmzoUBpMdhc",
  "key8": "5u7bjHGt9Md5SMo8h5RLibviQ3qGgnAusGQuG6zBPVZQ17co6mqrbzzrvxqPkyFcKZstHHNH4aeXs3AfQfgTgiKc",
  "key9": "gcjjxnu4HvpVn62Uy61H7zP9FVjqRidFD5W2tZhbzggtx1iw6D4jJLXYxNCvBnNth3nzCYoq17B3AaHPrTNvhsJ",
  "key10": "2qmJMgJbFyVXoDfL1yiievmwXoPvut5Bujr3a2fLwytdKRqCFaGXo4tJsPKfN9Yga2bByfZJyXPqLRa95nGPUn3K",
  "key11": "5kkviJi9Te2kzPHDTMQTTpSKp2o2jdyLFJwbY3f8HNWqxwoxXbBoYYnKePgTMSZY5vvPPEUmJPKCY9ZT3QjsJZNj",
  "key12": "4SR1HJ9KEzURHU9zmjmS1RT6JUPA3gZvcbW7ReAFUxH6csGZrYaMRKHjRXvYUSLUpuXjPRkWvoCEXBYXxF1Z4p3C",
  "key13": "55KyR1bwHY4bEW5eWdKp6aPXDiQgBVtrGeHPDWPWTofp9ZP1gH7kiFd6pJqfj3jHXYckC4SqifxgRfYCCVeDFwpe",
  "key14": "3QXtVxxHfHN2BMuj5mhhuFxEQN92dE1UchtpkhLdE9v8CMgkrW7AvhZHYFZAJQrAs4R3p7364uantLMtAF15uv9M",
  "key15": "3SNGRQpS51YWaFza8gTfG7bPHpo9kEkn4eLnwayGtkhLtbKuxHfkJTADYSSg2y6x4CC4AHAibEZWdwCZpxMBqT8U",
  "key16": "3A4bmtZQ2Btcb3H8piRTfufHjgyAvaD32r7GZasLPv4XLMy55ji5gdBj6tS8mZYTE7XXovSkAAA9cGN6cbREZsE",
  "key17": "4APHXYzg4FcC6WyhGfDz765xRpUdgb4hXANJA4S2r6bCwQwN7RsQVG5gWwwxcH6V4aS2mCShmk46TKsUCzLcUaiT",
  "key18": "3n5zNw7Q7dNE8t3bB6E4BbZ1S1kc85wyjtedFZN9hPpvLAZ7uLitBuzjf1G6pcPsfHHsgJLWan2MYQzw9shyajdM",
  "key19": "3rZiTtWu7gy6rzvUGpwS7hpHVsEp2gKy6ffR9FsrhvR3WZ1Q7cKSTmK8AqcUiLu3wv9Xs63HotWeqvBs54WuA3j",
  "key20": "87Ys469YhuAegyXVXyYXcmATXJHCSb4KjLVHFXVUCDCm4Qn2y5H7k9fV9MCaeexF29NVJU2vGYZi3mTLAFVLzJR",
  "key21": "36RQbGZDkSf6UzcAqeUPmSWm1uX3FKJ3LtqyVkqHcYGce6CUjQMS3vxbmywjUUugMgyJ4XmnJfSpANksXZFcaJcS",
  "key22": "3fRhcE51PA1PHCJvi7TWRUD6LYbDh8XhjyKFQSoDxHPaju4W2gBe1ayFpVCuTNFz5NvPZaCACLgz1mmUC2VRS1R6",
  "key23": "GUQGnYuAKT7vcUoXheBZ8NMDRe6tG3tBgHV7mp83X5Z1GtMgaX4tbSZTCqmjnBCm5aq6h6PZ3hVsFvbgAPEtxgj",
  "key24": "2LMZC96xi2T5mKVCHyWuAnDLgoEG3vmQW8GEEwdjkHhnLrn7DkhdoBXmjXfYJVfRvhxBnf9nDgCUZUFzPRAKTuVZ",
  "key25": "4jvj63yuXfKuZAvm9SHPUabkzSSLk1ehp1YLq5YvtSTEBez4Xtay1g6Ctc91od75skkTKmVBRRyCUX3eXyee9tgC"
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
