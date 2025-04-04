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
    "Wf4mdUq4u4P2RzXvJWEzLLvbs2GQapchNveFFaz1MWMUGK5hRfzfT2kmV5m7pBfc6SmQA73d1NA7T5Dc8dJe57m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h2jphu4M8YXMe1F2a5Wj1QNfUvZymnrEiiEX7v1EGQTKXkHWMTWoRASx13ZVZoW58orpQKjmZHGFaTedZmCUArG",
  "key1": "XH88eexdJVXyRTiL7vkWkLjWMeH9AJUrGreU3tWfKr6b2CiRsu6miMnh3PwXuudFxLEJfbrgd1hbgAzC8vZHh3g",
  "key2": "58vEDbXqWWuQLZMbfzJ3SX5P4THB6EhWoDiSR26LBLuuf3vGcYL2KyzPkaVWCSQDrnuyK5uZXSXhrSPSjAcGxc5b",
  "key3": "3H3iZE6ZKYP9rjh9xHfGJDhCPvGQT7K1rj3m4iVNxZL5kvyTkK1B4sGZeMC4dLmeNVyK4bq8h61vQ5phMyFQ2kDN",
  "key4": "3GccG8E7ugCK5b3CPkKms85Jon7v68thsr8NYZVxpXXwKMQk4ZFYnKwA2ASsYRZr8xzKS1qSrioweWGfeFqdNzbh",
  "key5": "2MyhSN7WpVM29qkLHsUUYT3q1WtEjLNYCkfyxXoQ5JVBiVLNbcrkqf6cmmgwSquzribog6ZqBLTG39tKNnwgLtQa",
  "key6": "365Bf9JrcoH7WDJMg7KQeHW5JjTZczF4Bj6UhwnvpWGdd5VC87NaSVLGM8iwnHhjPQhF3HZ6yV6SCVNmHPzYinKC",
  "key7": "5vfAtij7CQDsbC98CtfwYDGfQ8qTAfNFnphfdLDVc7h1iy2HLwZaNXsNfGdRmedkYCDSyRbcyjZ1BqdyJM7JF3nV",
  "key8": "5ktLghHVJxXX4jRitkdkxbWsuMLrJ17tUUMTb4Kc7xeytrjQGGjuUEJzx9skJctDCYhyRhjtS5Xij6XDDK4E3x2y",
  "key9": "3ycnLgGb5A7EUNWciSP3BwaZ58ELq4kXrs21VQ25JcbQL2scw1juoEyj3tfZLEu8cFVvssQ83PSc74XUrJaJYD1Y",
  "key10": "2TnpYjzYAZpAYM4ZriUpXcRki7Bgg58gHYbC1fn6G3Ub7rjNSKH9d8tqfQPoj1PbFo5XLqoSGpNLBM9nxdkmaEiF",
  "key11": "22w2rk2aFjC2G15ngKCuH1W7BRzpwUD64SqqwnLBuieh99WS2uMQA2iMpL1u4vBc7FLy26avXe9mUXrZAHyJz31Q",
  "key12": "zd1i1tQkDvtZShMzbVDP8vk8LnFKJr2KqeYjkqNduntyNa7o4P3p7NNpVogNzysWKpA9aQh7tWztj64PhtvepSB",
  "key13": "4C6zadRHZ5Cy4zRAeUVqXn539cysyjE3ga9Gzsy1gwHhTEk1GpqXCe6yhXEJzzRrawPU3jSR6FUZB8EzGhPMKCpC",
  "key14": "38oo3i71gdv8sZdJRVK7jywbiGjmxrUr7dSnhvhXsddm9iFKuabznvVEHmEAbCkhfAc6fo8AS3cEkCWDrU2NFXDv",
  "key15": "4KzRHTQiKVaSw6R5ZPVUHWSYo2rD6Gf3a68pQwMt65kzqhkP34yrr4H86XGY6w9mo3gb2Md4KpJbcM8ttN8CgoVq",
  "key16": "6LhohZQ9Xb1uFdRUZstSZnLRDVQ7zqgPPhatcr8oAXLhp6TqBkJoj4x5ZVKN6hA3zWvgxxFAYXCvEAr2dENKoxt",
  "key17": "1264pSs2tznsCx7cemN6jmCbhdpM2Rmj7EY7Z1k2jwvV7bdfej4GEw64uxg4iyAFTxH4J9Kk2dWzS6e9qepbq5dE",
  "key18": "3qowLsvVwb1aDc712z7WNMP1pXjo97o1HBFES7WjbYeQsXK6kyK6cV1V8JwkzY4mJiSej7HqNE3QzBu9zeQRXV34",
  "key19": "3rRs5M7139y63NANjwETR1rzQzC9XxH4782pWopf6fJ3sQCnMCBJmLFj5xzRZD1yZ5uVQcExghiCYN2PAGicp1Ci",
  "key20": "8BnTw5dyCDAQkX5sdVGZvKYQhbN2ZYe3tREVX3W9xVuM51HtWbvENr9eD5m2Gqx7GsbG5cUvegMFoFXYLxMhcwJ",
  "key21": "65ZpjUsnrSc4vqhLXqFSRraGHYp8ZWzoziCKazX5JzqWudiZgGq1Na6KdEjyVognwZLpV81K4eBmKfigxzCRAzc4",
  "key22": "w4uHD9VwHabfdHz2gnUpnSuY41oPXtthq6iUy5HWk2a7fbcGpGQGRs3mAeWHssfrn7WxCB8e5hiJJmcMUo5CCgH",
  "key23": "PztNWSRijp6jPSKmeBHKZjTGA3naQZo3xJZ4npus3VgZXfhn3qxraPWWYdouYcwfZiBVy5qSsf1mXAvNdDAwseH",
  "key24": "Vz9YACY19Un8oY5Yis1gubXXvfxB9c2pjCKFhD4qkTvHD1RkNJ3ruaaQg3pDEhF9bqMw1fX4nDbBsV85DMYmb3X",
  "key25": "44DxgC5YBUjyLaYkj6yrmsv4b1u9UQnwYMUma9sYFnrxye2dNe7fKqVcEyPAug8ZCwZXr8gVfuxY1yTPFNH7yx6G",
  "key26": "63YVmL4Fw2HJTZg9fAM35cjMxuqhyAaLjh5wRSTYZz1EF2d11J5LLnoQ8NR9iLR4jVca6vNESMN1WgZMvDtg4TY7"
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
