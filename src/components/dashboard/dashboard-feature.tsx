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
    "2jsBStGg5okqDLtiT1iw9q1T5nZxBCgumEGCaS4KuoGrpg69Z6LfapW6m44kHdWjrAmywA7iYzTgdmzk4hoUZ8Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cyUwdMQx3vHtJuQt6N2w6NqqPZGudoTx458aJsbqRGKy9JfLZHYavS3xEoAvxsmuXaD6FejGnGy1Dmy6tXH8sod",
  "key1": "47TTmwV1ctVxMcp7B8V4a74BWgtsEJPJ6xjLNxMgvZ7NMNkgSE7CcVDNLDH7XVk6BPcxvwZszXoNnnd8hyztTSB4",
  "key2": "2NeHE4mwLQgGziwhyieqjAA9YvKkHq4UnvETs7v5BeSvPUD1gN7TaQUJmYXA3EefzbSpZY7NGx4vde5d7fPwbNv8",
  "key3": "62z2nSh2jREcAPg5ARiLg3C89vtT2cgL1hWw2KM3qE712hKnGK1NmkEcxtce7acvpsP9yz3UW5uspbtqgjJorpFw",
  "key4": "5khyYxGYhZxza8Sg9HWJwdnxaMjnFB6nmnukf3L11F2VfDu2w4K6ZU1V8qsiDLwbPcTSYYhzNzDoY2rZNQgu23p1",
  "key5": "4rNyT9c6GBsKD6xwrgerncZ2DspXyXe4Y1tCjYr68xbTtt8mWXVd8GNLjGd92EKDmmajNP9jdyu38KVTqeecPFfC",
  "key6": "64L4NnRGJFuJiiA9xJbpMDi9AWnpho4h2odV5zCzhMYGvAKw3wKwg3a1Pmawg9T7Cm5UcquiCw4CK1S1Pg46k4Lb",
  "key7": "2mppKDMoTeYeg2nts4jpqYnssyan1TCndzHagvoCcG9XEMFohPYu5ZdzX4wK9XC6ARXUAV53nqD2DaZ8KH3g5DmD",
  "key8": "4bfL4s3p7npqAUu7WWRpTBvgyr65HFyHUgaTd9UBGu5JcT2jwKZATquBEY3ddSAPRpfk6U1nbVtpQXg8SZcNEB6E",
  "key9": "3cW2oB7GhpYF1ehFBdHbcFukj2dMrTGPv2hTXVXT1eCoKt7n1GDh9mRLDWgJqdj4feXiY47bEvTw2G3ggowo6MoK",
  "key10": "2pzg2sN4rEueRG4r8UVLRhwHEgQcgxbCZ8K4jALKKLhD6psk1aQ1FQNgrcKKDqmq93DG9CERwTx5iPTCrLRzVeaB",
  "key11": "JAbJh9rraRvMu4JGdRzMFmecdWwYsdHFFtHw57AFtEEauyAVUQuuy56SSNKg38jS3DbSQ7CLsaCv66TUB57TxeF",
  "key12": "41kAtLwa4ivo1wT11D6NXYPRfHfojHztV6HwCbbBRGLrWyQj7YB5Z3c18j3XQRWXmvLN1ofANJHBWxF1iEGwqFiU",
  "key13": "23jrGCSSLoVmcfemrQKm3fWyVrnqopXJqpMGpt3ro6sXcyHB5a7HnFNc13ohUba2EXx5N7yf244y8gKY89y4jwV2",
  "key14": "45Fpr4q6E67evBC2M19ePL1NgGCQGtLKQe6LeDwMagE8XvWhMfdNsUMJHM67RmYF3ibzokWKJfy8yujdxHFjRp1i",
  "key15": "5bERCRswpbN6HtVWdhG8yvW3ZF34LieEWwxc3qfz8DD6dBJkJJubRwgXReEKt2NZJ42ZzNqHPwDG2nSP3R2bqWsF",
  "key16": "2cSUH73XcTtiwcbWXgdgjJmMWcK1qabKRbN94vtD1XKfaSzwPZDfgCZYBK8mRdKvnK8Dg6rUdSBEFFffrHnFev7q",
  "key17": "2HEQurdJCzidj59Km1w1nsjvS226fWNEp5Nt13kTaAimJkJ5BvR7yCtAKqp5nf3vkFgdzY6io5pQY8JTGSdDnbFa",
  "key18": "gdaNHbAxastAL8G7CmDUUVzXmev3Cx9gtERiWB3u1ZFpMfnrEGEE7J8NiB93rKq7nCLrpJFgqiMZ5TR5UENaPXA",
  "key19": "oY81qNam5r6BM9YGSS2sxwdxv9y1d78j42qJKAzjn6EDqggeN7M6768RAYkYKxpgdv3CJxLRWJMvnnPk2zgR4wP",
  "key20": "5r7VxA78ExrWEqG8hjtGJg7fR2CPM8ePr1EVBnByjsY7B1ChuF3KGVJZZJrALKUSF58oSS8AUGjSuqmtCSdbqnJY",
  "key21": "ihd8AroedGCSbYLfKXPiDAXCyayf2x9eBQegPaTP9L8uGd9RYc4YWjqCYpUivqYqk1MjxSavUEzeYHgHKnnyurZ",
  "key22": "26rzmjpbs9GRieyHmVMiELJP7kkREt9p3UQki7SgU5WNMvaJBcTeHigiLztRMnKeVUa5s5djov3utynYC9EsRmoG",
  "key23": "48RxJfssZWx4pQmBvoqgkNd1k9vbDGutduo4CJPdCXVtYVs2b6fhxXdRasXUSn9J4s6xd2nfWD3GKf7a83eEZwyg",
  "key24": "4ns7pLvLwaoAfSVyxvRumYuXwKKK4fsDhjk15gErqJ6rokf2nnZUodX8SCbyyVun2hFZFWe3Wn8XsgNdzJTBHTCF"
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
