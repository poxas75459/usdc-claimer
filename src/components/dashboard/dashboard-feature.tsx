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
    "2bbpXc7YmWg6MgbEuU7rEHZbAh55fwG3u3LRsMkFjG6KXMJkLe39GtmVT1wfawxHvn3k7nXAdKc5fiH4mfyRTjJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6TUBuvqYJwHwN3okSH18bEzDoXJK9ZdqZL3vbyKw3fSdjYTqneFjPRKgjSaAHk1FqS6hCr2joY256MYEH34swq",
  "key1": "5dxYBvTzmqjQwBgjbhSxzfoGDTDVHfozeRDGyTAMRxHJR1JfT7mTyNsorSraucChUknyJ5jzzS6pL2uqMAXWM2C7",
  "key2": "4ygWm4vYfJjXoSYHUPm32MMD72DBTwakHGtay8CdyQ5ahAkgoxWGvNoGNhYw4rg5k9B8xYvS3rDAxQeWUvyH11sY",
  "key3": "49A2yA48HVqcGMAxakaE9gC27m89hP7RprJWxM7n3VQDdmrQCvJGQNM5gptoxZVxid4YPRQ7TvCoCG2Ko1AHCjxU",
  "key4": "59A9trjzrHxcEsfcuo5UExUfUhijSxjB41wQkcLo7dqvgZ7Bv8nSjMT7SUbovCQo4YdcC2kJxT94uGko1oYDABUz",
  "key5": "yLeMFvnvpr422rb5EYE9i1K4qzwgCUymNecXo9rfyfjTUxtRzea73YBVWoFCghKM7uor8A8VzVYvJjceGmAGw51",
  "key6": "38vjjYTzPx1oz8MqjGEWFdZVd9gwQ194jFTKjRjS7ReQ1iyzE6nE2QRgcmRfNnygArYjWNKLvMjRety2YW4MVnUi",
  "key7": "4fXyP8Ff5dXY4YDMnWQnNKjKagnYz7tsVebk7Ap18jtskgwpCFJJfrYkJ3XP3dF89vtcZsUsUQSDzerjxgNx8Xza",
  "key8": "2c59iMByKLegxcKznQzsHbCT7VnUbJuqqHjesQ3dH8UirtkhhGn9fa7kb8APNAYZroSdxoWaoLeMeffhSW2RDBLQ",
  "key9": "3yuJaQahLXnMixvXQDiUmbpf4v8TxPKuz5YFkMbwLE4UG1e9g3Kod3xwFes4xHB7Jse4gQKeWzCVkxwBQkn87XZj",
  "key10": "3UYM4MFWTuHUz4mKvBzMf3s2jsN2jiG4BS9VwVDD4SzxQuUHBCaYsHPuGA85V1GN781RLk5TTB1SVuaXSHGQE2nM",
  "key11": "5hRneCXPzieT1xpaMMnNjg3HBSkhm7cGRK3C3qzxSrA4ZzXhuCgDN1yRuuDHRKMTuKoD2fP72R3T2snSGCqiC6Ei",
  "key12": "33WX5Z14evGE4NCok5tKkb2Edxg9oT2jdjRN13LQp5GfLh79tJo5bSGrFaUWHwjgyqkp56WW5EydbfK63ZdgWskM",
  "key13": "3HEopuZbjfZj4CrNYbAKRWbw9sKXmWtjen3DiCm2e5rMYkspDb5e8TnTAUQwRVeTEV1FYegTfQEzsAMPomSL7JUp",
  "key14": "3LP4nsCgUpaBdkMHpiRrwmcLaLnMkEssoydrQBnXrn3uwmRujtVZsfU92iKz8dCbkSes8GB6gV6RVkP7qqCgvT8G",
  "key15": "2kUqXgWLwFQKPKcEdmntWMd5eNcLz78dRAMUSJs6bWXDFkgzpAYsd8q7csSyeKNK6ft3ySHK1wRmk8TeijcLdKp1",
  "key16": "46STKDHHDRVSGmSVYvBTHmsRCykgYs3hK4YDnG7zkrF7rDshJZzyhwkXgGYaZgFXVeCndm6qpCoLT6Hi2sXjnkkF",
  "key17": "2m1CfKu3nR3BLP4d5atBTFYh8KAobqLLvJZ3pwF3VNm3RCMBKak5AysfpfVnQ3ZjFXn9s1ptx1WPHgmK4czCLDS4",
  "key18": "4obkPovPjQyE8k6S6YQUG99kCU2C9tqsfR3JCYNU2sm176WkubwY3ZHUkWMee2p9cY532KG9xD127nyB81vDhMxU",
  "key19": "4CYwaA6fPSaS7vZsWuevVYXobGgrPQKnmGEkvmpbGGuMUZadBZKd8vgPodYbwDoZDUVa78mGNRwJrafeHtGnoZf1",
  "key20": "4aFyZ9QdPRnv1irbPt1xZWgTkjAgcB77hUbu2RwMrAYAaGX5X7PvBVzJadGEZBqdbV9bRjaa6QsWXsJfLp9M2Kho",
  "key21": "3NNzAiSBW8R9fU95TwusPYRf87d78fqDminaMn3ZnxGnCZk91xTuzqTkJHh5dYP5jEya9hJXCTKjQ8eZEtSLT5tw",
  "key22": "3BK3HvMJyFztbNmYM8pVqf3Piaqu8SkrR5w6biuYgosNDryHQuYHUV4aBHf9FFrm2zksJVh1kvHupHzAuHfw2qtv",
  "key23": "5A73B3uv6HT4VTsw2LtsBRJCCeX2VCSmPxtZvieZX14GjGk4AnghGKqPiQGRauMd8wSjPYjfBEGbajsKNjFkhSFT",
  "key24": "2b2fcjrWrbMGZxgwi5q1SWQ3ue31v3YyMfdKw8iKybph9tcnKoCf2VcxLWv3G6h6bBhjVKUtLmbGmTMMw8j8x2Tp",
  "key25": "2R4nmaoKhguswiZYF4PYVqTbRuggL4ftwU9N6wPuEoPPcER17QwPo18hdifWNy3cEAL6RMHpAnheGLAYNunth1vb",
  "key26": "jG317vsDk2NS251ci6Jbm8vPxwoHCdVxAbRUvYcBk9CpLNgg72WuDDL8ht7atddW1zE1zJuRx71uSwKEtpsXotF"
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
