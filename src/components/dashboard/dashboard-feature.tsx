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
    "3MuUwH88ccC11YDTudGV4hrhnhq7wYhnDdTD8htLPS9pxLeK2CU7hWAGmm6EGNDmKr9ijwLSYbMAT9yjvTA7ehBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWmUvXhQyexE7ZKLxhxeL72LsAEC6wM7jC9WXuUz5MLaM972MqTUaLwy1Hr9Fpr3mmw2VfA4yX8XiiarTLteoR6",
  "key1": "3tFoKXu6JWwyct2qNGQNNXZSDmdZvaG3w86tcBsWvsXuy9zCQHmXdhvSBUuU9vTETQfBMq8nkmJbLP3KJNV8Dema",
  "key2": "3raapfM6CnFkRTPQeo5DBe7orjTzgByA4pP4t3GKvpfsNCWTzEpDbr8RH1pGqbuyjDiqMHHTmxTLxTERdvQuD7A4",
  "key3": "2bawB8JLkBVNnYm2YiawwNfTnH52ioPswd8zFgAAm3rkZwBfLJ8z9yTkmKSGG4rmPuKEDuTzew1jGDWbJjEdeqsb",
  "key4": "3cPrhyppPpFkax7NjVyoqBmThBrvCpqvmMF96NuapPbHMfA9qir1etTZxuMp9wmzD2A4EcczoLusHSN5SGYmz9xq",
  "key5": "34UYuB3o1iLCWEnua93hEUsX7UoGsLDeNU3RcvaHcxKj4dfuiTVueMJDos9qjFigTuseB2cJk6Dy8v3z8MQcR4Gu",
  "key6": "3aniuB6hdbSu2EpXAue8iCZXiRDxpdgMYAr4ZrA4jsNkvQqgMMRVDqLSCCuGX4KXabBk2pYh3QfheB2xpLZX4aR2",
  "key7": "388YSFZute6YwFDd1MGngG4mjzyWwt7EQVbHDykoc4ZxtUfrurQBmdYopfggHz1UoguJS9st7UTDMbwNgpHgVLXC",
  "key8": "5k1wfSWMi5bUQha4CjnvRbg3JHD6PJ9D9Gqp5N7F5jYoF9MWpSU1GSYCJ7x79xT17q1JtsGQqjpNVSfnBxkwx9Z6",
  "key9": "FwX4Vkp2MHB84DTjeirNaX8USc3FrZz3kBjgbbG1Mmpt86DEmDEcrS1CHkqszgRKXBWcpvtFiVWzG6MQgTV4mSY",
  "key10": "3FZL4CjcKg7gNGMn6LkAvNuhfTZBAwtd4PL8KMDahik9bgmQr9kCiFBYB71RL2YLDqiJuLSsmigtV4u9JQtSze9g",
  "key11": "4bZUrz2776TPNFDnAG5F83tmofgmEb3ZJZDpUWN6Hv1Xmytj74y17dkAUxyu8AcpmFXU3qP4vzMEbreyMJ5b9siN",
  "key12": "318GBD7ZcWa3QjguAr66qEqxR3KXNemgBdzrbt68H6u6FMeZhxCPpSgcRrM2LR65F8qFFgvWQ1FTeY1c3uTuvTHf",
  "key13": "2Hohew63oc652KMfRp4F9i9mABdEudAftwuDNHbCFsW9fHaBgKtnHEpjeB2vbFZLsXwr8yoi6a3dL8WfYsoaaK5A",
  "key14": "qwwpAhiPNM1DT4zBkTe5Kub3m25WT93Q9FjaoVkcQKtuuFSPNPe5942WzabCSydu4hSV2BTdfczXY1wzkQsYTw9",
  "key15": "4AQayhYgVNhW2GLnnG3VcXfdXH5Uxe7K51a8jJcnRsnqRHTmduwXGvST4NJDmG8Xh4v9yFQRDwW5YgM2jrcXFx1h",
  "key16": "Vvq39EENijokQdBo7wSA4L4NauEepo2NTv1UWA1bKX2EhtTHUjV9CQ5axW5wDpTFcUZw9nKjwtdrX2Thu6xDRoQ",
  "key17": "4PFAvyYiMxLKejk5PcYCwcR3pGKHiED57QtyBCDnjZrswBiSFF1q18rws8c1x5fSFyW3efPHE4hvv9HWFqcPf1WE",
  "key18": "4kApGVzrCic9J7vRmaEzuHTRwpE16ntT1Dyxj2ncjWBSck7j3bY752YMQqLmS1vrg1aFt8TN4GVdMik8cvJ4HEZp",
  "key19": "3FdGUx6mR37q1kGFyGLV4kFYtv3nFxNUP7reHct7epuWifoUVppFThC3pVDPif4wkPLMmkBuDLTXNRDTC2VkYvym",
  "key20": "vDgL8Po1hpS9K7gxXQud7JmNnjdh5ZUcyXFPB94MrhBbofyUkyVRV2QBLGZAFHQbXwWJ3qWpakVTEEzCBHnHMwG",
  "key21": "sWpDpVcrpogafrFJiuc6e5J1e4skDyK57ng84mB7dEKFBKnbd1N7d2dYGEkq87atrt3vpsm6vTUZzXyJhQgCckh",
  "key22": "4nTzFt3x3R9N6q8SAP5AAQtPwn8nFDe4wAPRSM2ieAL24XtyotsTLuwp5ExKME4GdCA9raRmTzXGWESP64yAyskZ",
  "key23": "5nXNcrpq6T2ThZJKmG5GSqXgq7v9iwDj2BH8Kkdjf8WiFaEMG3LgKhyYLQ7asESmNDouRu8EDcHFDMoRD4kvjS6w",
  "key24": "cCDDgcC8RjpV6AFjg8U9CqiC7s234oBSqGxJJ2V43HxwxQmAEhJGKGGau47UaqYCBDZHcqj3ef37bQZutnqGBXD",
  "key25": "5iaD5HoD7hrcTBdUMHim2qJ9Cd1ZdBdFuvRfyDmVqgQ8yj4QjhBizPrA3hdk8m18zTEqhDNpd3iU4x2ZJLUZLZmc",
  "key26": "2TYS52VKzrqsEsdcV5weatrc9WzwWxGEZXmnWDfkQVFVSc7QMS1KVRp9ZdrNp1VM488Vsc3PPv3cMrcgJ8vCufVu",
  "key27": "679KjqsuJ7ytcLtK8n4FKzQn6NoF46kDBWMMrfAzQiLFx3pdNC2WCn3kqZgF8D7fJxAG2JH9irFsc2fcL3nMkVuM",
  "key28": "224CvDUZgf1gSh8CSeMP65LCcEXFkghQ3E9PxMVKyX2JmrvSQxvccFoyjFT7BytTTqwJduUTQFMfUhUMh5mjBoVd",
  "key29": "Txkv8C6zZ7XaVyBWNJb7ft4MACxkfXX9XtsSxddYA9tpoaup4mRgXsd6PsqiHZZvwCbXzW8tbUp11WCMMXxVHvz",
  "key30": "2DdgYoNK2dikznKG5KMvgy6hZUUmizGVuoHaqKEN3jxyNqMHhwUCRGEU1qDe4A5781bJkvQ4YpcUbGfCN8S4zqRM",
  "key31": "3c5yrU8FaxD4Yfh9oULhvqLyfXjmPF4Hv4yc4awAQB5A224uLGz6KjevKZb5VJDKc98NgWy19HbjH9bJyzCQ892t"
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
