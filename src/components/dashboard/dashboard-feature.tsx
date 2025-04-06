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
    "2Zy4wCDPfkBx9umtaPf5UZoGra4QXNBALm6Jum6Zw3Kfp9Km3gkmdQREbFG41GprnfZCAdXKT5hPHQkSvKN2MppY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfwNMPLiyXU2XvSCHY1jphjvrjTpdBX2cL9mgKGDPwhMfEV4wnwdx3MFjxJt7cPSKaPCcXxm6iKAXDvEwtYuJ2M",
  "key1": "2KGzks2gUcRfADkF6HxKmfnJnmeDZ9XPVWCojw8UAnDEsREDFEc9dpbaqgKMeUEiS7gQpznQFzZtJpAdBf5zPBPM",
  "key2": "39LUxc7jFamhBRohPGB1xANvQNbwvGrU1y7eH8zLm6VBP9x511NVBvA5hiFiwtQfeinMpXmbT8sREoLQg3ZLvBQw",
  "key3": "5kpfCr7gtkkvyaBnDRyZLBZq4S7ZRfi1Y8sZZC2ja5KuzPsHkjuF7VSPT7jeA6AGb3FS1F8AJCweAf7FjmsG5f4h",
  "key4": "58VJ3NYWZnSsQWw8ewrqRghhyCgYtRomBpTZY21BbgfMWsuo9AZEB8FmeScfEbNSVwj7sHu8EKCfJmaXSVbvx7Cg",
  "key5": "3q1sTjwwixdUsT2HPgzV1tUrTVubsZMa8wWmCy48gSVkGqrqy8f3JRLcY931Lu6PgHrS1eChTEjhEXe9podohPjy",
  "key6": "61Y5d89DL86hajFfHBfHqgvS5a1xGwLUgneXoAQMEKmJaY5TMpRoZFy14jHCudWG7Db6ktNqjgoTd1cuN7DdY8pX",
  "key7": "2q7qABDTrXXN4k5fHS2FgBrsjVzGnYZ9WEUPS5issfQ7KzoypoDwRikwuVm5NMnQ2gduQW8QqzcLja228gr8JNMy",
  "key8": "dPxc61Dr7cWDTsuvrL8eY6wxrmoTykT8CLSbYbLMe5R24s6N57Z2tfKnHE3rFGtzEYw3gdpvLgCeHW2UVB7sxtv",
  "key9": "95e4B4r7WSMvmYxh8fYZCiGpqGCoFFyTzBRfL6iZv7G4QC3Keb1sHGZ9jEx98tJ6JDdCyiyT2w8KumjExhg9jLw",
  "key10": "4H56DFRtnpe6XMdKdHK3ZXWhnbhMJpspgNCeEsV296twDpyeXszwVNJgvpeNyzZR5LgimkSpon543bfKtmTtbHcB",
  "key11": "4LUn7myw9fNCCwpxV7KXm8gWr958E6Y5bTkFdYVVSVaNRZeh6dDoqKkqNV2uTjG1GBHGdW91aS5e48azYvqarEau",
  "key12": "GPMnpFi35FF3U4NNkD6wAPsBWHJKnL1yJrzdnQpmsTistnyfFE3sgAbsRzzFQjbSSR73AzrLkaAqaiGwmGuRVgs",
  "key13": "Yc2DeJEfdKrRbtTnH5ZGLSrMyMjSECvG6pW7PinAuuwcgbJmqKsJgyiDYXedsUu8z7NYQv6VAdnjhSVSwwqWdD4",
  "key14": "4gCmUVKreYVSqTryKskfRdH1GvFQQFmMB3RgBRNNaDvrd74yiU2AuWhY6c7JALUjmvWhGdX53VpXgJ8TQmg23jhq",
  "key15": "3xYYn342E8aAehAorgiF431R1cfy5CeGbfyDGjAoXVzP68s98r1xzsdyzuAueNBNnFGhwKUmqd1SUZ7oE5L8Hwx4",
  "key16": "4xVzUeXac2QHuxTBe8838w9X36gUi5ivZ9UnrLsem38heq2fziELiz525huvV1c2M8kVMUXo9scQgZVEB6KvWcgt",
  "key17": "28xuq95hPMYxnRWAqAdkGJ3FYnvAt7embioFkN8Mt1obgWntdiZrKXKJJhMd8zHHUMZDkw3pjpD2zuA9uVfqzG9N",
  "key18": "63PyaEFJzDLvYumQYbupfe7w3WN9Lm14UJsbfZHnkKZTMuJTvQRRh9Lfzsw9nJizwAWEXRweaNQwJcSW7xa7Mrab",
  "key19": "3Q758U2rmh3NB4F91TtWuVCKinmWZVtbrA8smh2jAAg8wTSALupa4FvDxU9qjfKumSDBUrfefnVX3q6cX6i5UKxa",
  "key20": "QBYEjYMXWz1A2H5h2ybbGgvxFMfntZRvjcmPGUyuzDHp7EzskiqwDjcB4Y9WpVmZt9TN6fg3qifxbethAUVidSv",
  "key21": "3XiprGSqZzbcNMpFuim6q1CgcU6M7ntZ4ddkeZwLbXYyiQMhkfJfSVLFEdj6gN2WUWQB7sdPzqe6BCJpDvUN7fno",
  "key22": "58ky5bwpubXuP8kub6rguvZuzJeGQXpMJ941G9fDSzV3ivJcukgMRk5zBNNo2pUNmumj5BytHMdeUGRjUAmZcArb",
  "key23": "2ciztBKo4X89qLqBDWai3Yr1zKgPvT7sWcMuaEX956YqXPHLJnsLaE3QZNts65ePYjZCZXPNmnnTRo6tCUq9p6vq",
  "key24": "5LoejCWTKbhVJ3G5yxFD5Z7iPKnx4hSXxyt8BNUpPQHsEKNWN1QPMNarxZPy6tFLvuojsCPN8WyaPVRpyYiLBhJx",
  "key25": "ZyPVq9eiQ322JMdpDZwvin4rUpUeqoda9Wzd99xKyd4V2zGCUYcDoN6ofr1zLtoqg1SvWwQjgfr7nLVwKohcX8h",
  "key26": "31XmEmoVDV1EyLt1UjjrPG3ZYJUHMEaqkq5RbrzUfyuER4zFCadjeoEJJXgw2uWYn8wtyb8WvbhikYUakiHhrDbi",
  "key27": "3Y6pBsBxJwDDfcQkdQmBqwBPBGU2hZjxqa2zicASNSS9g4rU2ZYhgHdyHe1vC3hQdMoNHZgEVMFUnqZwcG22ejwL",
  "key28": "2sQuXQbUCtEoppEjb9obVgmzLa8S3DodRmZisNdDmahTLyco32b79XK8RfC4d1YXML89EbT9NCugyrSh7698X27r",
  "key29": "4pqNYpqCSn4UjH3bR1zvpzHNncdSbxQCeNQM3yP9UhRyCEtkuiZbzj77ietAZWGM8RTBmGs5awzrLSzZ9bhEKckg"
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
