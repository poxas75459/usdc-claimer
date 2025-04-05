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
    "4HgHKDrLPwq49GrsUrynyS1pwYua8ahpg6VFd6k2zdhqaNeYdbBbm6VGjy4D72FZq6AdzH1ZZDQY88UTumP1U2tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6hDRvi8yZeXP1FsfQSgvH5bXCZJVZQbvbPMw4H1yP9Ww3E3ypcmGwp1GMEQBmxA9MJqouGA4DcuaD9FfvVXJyr",
  "key1": "MmjHqV81wXu2A8jGLyHc5Mgyz3cUXFgY71poomU4pL7pLFAdAkjZpusNUge6Af5Ag212AS1ztioWiaLQNUndtVT",
  "key2": "u1EnjmHo6x3CqSRffQdfZmcZsPTEPKqUeZjxne7MGwpB8X4PTqBWX1srudfit1ngnhZCGqskZLVQPQGxDbtVrEf",
  "key3": "4EaizmAL9E9p8F8pXWDKtEEivQYEBBkgH9Ut5q7LjYLUxHkS29u5ETwLVJP5EovpaL6QE1qC9JupDGfN1H32KZQ1",
  "key4": "HuycHgYt7AxCbNNaguVCi3Q1mWYC7Dk1JuyET8NxRhjAr33VXyPFbVhn875qpTtBbygHz5FK4U6ZTJWjZWDN7nd",
  "key5": "5QFnKJ7JHbibWqE2zETDknL2VQCbv5VRkbLBsaiWpUUv24Wjd6eSr2XYkafBRsgFQRJT9UgjXNGsnPe71c5AdttP",
  "key6": "ZZ4YZf35RXbpAfnG57rs7UzjnUwuBLmT9Whb4fG4DBKWUJusWzwhueWZRVuSu2GBxbQVUEPs9VD8XfH9wZkeBrV",
  "key7": "3fGUicLfuAuYHgtYpEjJe743fA314XjiXzzGK47qqAYtUppaH1anSR1XGAhbDW4PCXdWM7cTvqeopm85TUQHoqzA",
  "key8": "2Ha8Ma2KG75scdwuhvKturJQE1aSqPpP3rUJLsLFtPcsKKcUtraShdBuaME35oXKDc1s4Sfmy5B8u6grov9iCuN5",
  "key9": "4n7BPS4UFQtKwx7DLgn9oTmbg737n6baAPV7Hcx99Z2tkKZEg3RC9ZzMhoLmJwRKLkNPk5mpnE5xdQyQB8Qz1q3e",
  "key10": "vg5qr9GPJYkUW8vaXs1Mbus9bPoisMTAKFYQdYpz47zxyMXkfPUmLTw2NagzqFCNnr4Yr49uw8KUyn4bkbu223R",
  "key11": "4YEY84y7kumzzyfJsqPxTEbmQaKKLzkSymsQzuEqak2mBDtaDsrfSs2F3R6JhFH3jw6GNYAe5H9na3BQUvHRjEs5",
  "key12": "5eEixNzDydARnbqTHbU74vZrV7bY13ijoTzCvt8XERUD4WLB5jG2yb6L3aHQEFQwZ6KApKpJsCtjkw87EaNvDRHC",
  "key13": "1Qkrk8Xs7soQmmQkuUz67VNp8zmNR9tAGjTPFGTbeZvXnq77DgC8vWCTkHgAtf11mgWokRpu4RJDvirPJsJAVS2",
  "key14": "4bUMnZGu2wV3LkuKLC4tWCxy7c3jAhCVB2AeDqC2HSZWPS7Qr81V7eBr4Ub59VuVNknSwCN5sBFnECT8xnXvBF9K",
  "key15": "3nQR4oG2KJqcYY3V5M9YkF1MfYSuWcBZ2g1rLJMM3GAxR1K4PWi6e1nGKYBKAT21V2fGBadiuaUDBMecXjfT2RSg",
  "key16": "8f3cfJgrJtPeb8ZHfftT1HcQHz1uQgTUpWjp5ByAYcNMRSuiqw2fZn98xXWYQMTPx1m5G5fEYB53unHM9qt1PXz",
  "key17": "531ozATfVLqGyTYDCMzv4H1J61MAAGRMtKdfRTnZpgn98gioFEjLvthW1D5HnTgxLv3wGfQuUFWoCyJqmvXgMfjM",
  "key18": "uqDRZm42e84keuQE7URLpnSxbiXGJnuUZTaSMbz4HeF7kypKvDuhV6pFWTN6fM4DPX7axrb9hVVeSopFofFZ4Zu",
  "key19": "57GtXF9bBsSaFv4pHdB6wfw7CzXZDd2HT8sCLiLrWJuVJ5N6DBJNGXx2uedvg1uDTjvtP7EEhtfZzBaKXBKG3xho",
  "key20": "3aKpVuNJhBhzwQMAS3BbyDDEhDCgJHA6Qeyyyj95AwtQQq9QAYyvijcdZmJxw2yAXkBUtCBvRwo6nJJ92x2LYUdk",
  "key21": "3vghognWBshxqdUZULAsGFh27BCyYTU3Yuo6bGpK7wxx2av6PdrayBBomZepp35GjcosgDae49fBDuCCnoq7FmS2",
  "key22": "2jqGmxbxGRqrLdMKjNxYTBmgv6A924QMcsNEaMCvRURV63SXeHPkxqiwqtQbEeyoT2Jm9F2XYSnttgXapARynfTZ",
  "key23": "31FCrQqt4QmLkWQxLrVb27bXWzedG8zk8CRawUSDKHCcQcA9Qpb2DjBNFbmYhMkrQjHez8QEkvFrU1LbGe9i9iHL",
  "key24": "4TukoUYSUrd88kiuXW88gBd6Tf6t8WMZTUwnwAkaZ8qUn9MeyZJ7LguD6KsngGhQWwbb8nCLXvaxhJEANQ7LeKXW",
  "key25": "3HqQTt3nqgns8vYKD939wyeik4jMTYSMFFjBdBBxDvKo2QkyGmRJk6AaMfcPtWHabZccnaLEMMDyDGapa1s2nJ5D",
  "key26": "3827cnWaHyUZmZBh2i1rjHJhYqTaAMXTgvpdkE3CeUJLxobCSida24AG1epZ3dVUYwFTYrkfthhHoHq77Qy54Rzo",
  "key27": "3kqkmth1mT1gD3k5o5QnNvXEyB1YSbpij3x2DPH5qy5wG2X3rbkAqg4mZQm4EUMtiRiH7DAUsWJkSkEXHVeEqKqm",
  "key28": "2LQvkTzERNDDzKPnSekG3tNJ3dWArE1fYLb6mjdbCy2Q4LQLWPKT1obW5vQZt92zMp5Jg4TBm1nh5AZv7oZ6KMYs",
  "key29": "4q8g29ux82HemesNys6VTv8PngvvsBtGVVmvtyadGEjaNMxobSuyndDF9YWMuuHK3v7LLLNuNMwKZksqzQEZypWb",
  "key30": "2WYBCAU33v2jGeJpKMM6Uiy7cnb1h2cMvKUrSgewx3pfzGx1U9JjPqT6UGPZsZ5yfyMX4JEFthjLu3x9UK3nDt3S",
  "key31": "5vQ56HDrEviD4VZsKgcTkUNFmNpd6LJXibK3fM92kPYY2xDNs2tSgPYRR8nSUwbD2cMgAd6Lfn6s4PXVFo1tjJmr",
  "key32": "WKwQ93pp3ywehK6w8JhMJiwMuFJn39ATaxsoDHhKdeoZiS7syYVp1Fxd4qSUF5EwLSwFsAfBiSkERRF6MZiwwZr",
  "key33": "2pk9YyUsQbKuTKwHg75WGgKsuUdBDDDNVZY9wB3YCByRrkcmcPKgZLoCag3ZHx6DUPVoXm22HoNFneWoyfbinUr7",
  "key34": "KKEQoGqKdiUCC5we5ZRUf8HvJ55Y975wz1YQ7vBSQ4uTvUGPEGrzm87svTpaDqe9rF4EUAbY8QdprTqpUzDN84B",
  "key35": "3247Nb4VFQqf5HyGWWxTKn24NHBQBWFZQpDgK8QntSa7estKqFYaMt3rGdXRiMVJddTPa3acScZTREU15neQhDt7",
  "key36": "2nQbZWjVG3b2DKw5AwXMFhg2SEqiye7P5V8EGNffnzCghjgSnyv5R3cYgzS1bJ7iNToKrJ34f5MNi2fd7nUY4UPb",
  "key37": "5jFHEULsmZP3AzdP5fAqBXmyf6XHmEJaDTpHL9DQuESak3Umrpsh9aCyePMirqvEc79ryEm5ywg1qbnCA2BqRwdm",
  "key38": "2nEVzNMWvfBYhyDx28M6AkzGZKJybF9cfKbpGKaQrAKadVwQZUWXLnLi6kfGnCiAwcFYm6vEhTyru8ZCjSqU4Bpu",
  "key39": "3C3AECTadsW4E4Ro9pP3f3JGEqLgDsCdAEJRdgAAxXKAL485Dwgu6bKNFnaSrgmjv5pwJSj3AAu3sU754rLmjdCc",
  "key40": "4qReon7DBrVojtK1YGYcg7xGpvXjZHfdc5LgCngrFiWP6aNJNyqLWS8qc9nwNwY6eTbnPmCPv1FHFyEjzMvxAYPc"
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
