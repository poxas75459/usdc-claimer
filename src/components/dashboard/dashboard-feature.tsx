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
    "2TaV8bvLB9umMzPNssBaFX3sdsDc491VyQ5FS7F4wZK9RPD6EnhLxWpGoj5EPXVBgUJMk5J3xjfKBpNXBYHzYh1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MP22BNExXTz3xo5UACMWKLNgrdrFJ5yTh71jrepquUbzJfRUTuMLQY1CZxFQaiidnRN2y7KAN4XQubcQX8Qjuxa",
  "key1": "4TQvuUSh4bNZ7pZViGRiJLWSA6UjhEMNGJxBYHgjk7u7uHijfApwPx7LanUiNC6nUc5BfRyeMtXd4SkHpFo61gED",
  "key2": "2US7G2gCsmjqwzw7jLDoiKfkrxaDK2bamryibpCz16pVogzyCteUKKYtZx3KG9HDaHtnGKDQiwwjETNaew5KNN1Z",
  "key3": "4NESDTPDuUUiFKqeweDxuo3miMDrRiZzZeY2cCkjXZTNdgiwcKZS6yQK57453EJATPm5eHYvFQFBpXL5xA2xfM2S",
  "key4": "4b65Arfw4VHN53pSPmK749CMQfbnwHC8QkyGeSjjbCHPxNTQPV1Mg9rAcC2fj2UEW2ccsu5QAJVMPkWQ8ehejLRC",
  "key5": "3YM6NFHREKuDDB9S7QqY3nnLGrJ1c6Wdwskpok4v2FyTLpkhpK14YZYLiNoPWhL4pmW8QtCE4MfZ3SsWGckhczBx",
  "key6": "uX2zhjRQB266egDs67Rem49oJaYHHTKUFW3VgaiWWNGSwj2YPwZZYTFgLpBQ4Hr1hth6ghmwar2FHKYRyphDAHJ",
  "key7": "5ZrRWPdS862gaX3ZqVjJMoiV1FtksDpzPkDXCY4ydKfbh5UqpNSDiPixS66fNWYmeR1C7tePF6rm1FYewHUxcCjZ",
  "key8": "4R192U4FwJEKcjEUixiDaB5yUqZ9nwyv8gBjNrFGXExTLfEg26BtiTAjUGLxQ5mnfqpP4YjpCKKm8KjA2m2dkG9X",
  "key9": "2HoG9DdaC98iYzNLqTdLPUN3Zafy1BBPvzcrs6mY3ZJbDfp4MjoUNVskyCc5cFLNRMSQ6BoMzjmYzp7MRF62EHQ6",
  "key10": "4ids3H8vHP6En1ejA1o46EjXPScMAprCY95UoAjjuVEXwNxi8NskErF25VN932G9hvpPnrGytJGbKWqPVcffBdzj",
  "key11": "5zPx95VXEZHrJGPTPmfVPmvGiV9XCL4XjKy3Hwwg1nxM1uYRqduWQJAvjK8VJydSP56UAmn6TJyFoS7J9CPdWN3s",
  "key12": "5efgEAiAB21UM2nynfRmX2FPVLLpSypvtHxoUVKn57wjqqgb1kqgqWCUSFyZ7namxbm7rQJNSjhj9AqyDZ4mQTBm",
  "key13": "4JNBJ1Mn7guiUtM22beftephNihQPjPN6x6gnw76PHABnajwzBdrKMUAm9vb3MZftkA5CTd6PtUsKR25KPHcpxhi",
  "key14": "3X929EpiAa8secs6zsRYm1KuZYWBH8rx3yWFtdjpK2efYSkK1HmQHZGuw1zsgeoDRZrXLZJAYQ8e9pAk293nncfQ",
  "key15": "4Ggan1JrBUrcLMBqJBtfV5jCPW3nRyzzNJ5bMXwN7Mh1y83gnzeMWBpZabH95DXBq1CFJexpYJUp7rXwL3yHjX6e",
  "key16": "h2Tbtk8AyYMaEt3bqPYYSDmiUhfPKtzsrZQurbbE3pq3CvPxTUxQTPFWLZtwzKyKkRAAyvkSFota7QLwm1NN4as",
  "key17": "3nLtapCY89Sso6Geguiyze14VqJngacyoJyv5b32x9aD695Lwoj6dgQ26NBq3FwX12EGknZu6JdZNBcaMxfqEbDC",
  "key18": "5bfhGnCyy6w5kJ9zAy8DF7DWsr34bDzStUxQrcHsNMgjiN6izAPUXXos6DVkmjNpEfgtJZhphuEAiGsE2RcD9obv",
  "key19": "2A5Ky1s6g3vrPxRE2hEs2KqBgMTXTxY14MHCyqHePGerdY9d2YK2G5RbLsZM5fsHTAkxa1CthVcUs5D8C2U33ZVN",
  "key20": "5dMRtV4RTVjgKkkCkqHZAQBdva2oZLXmXL3yWYUCNfe7KoeHqUJrLm3PBUMkcThewrHetbghpqmW4zJRUR4X5iPi",
  "key21": "c7Vs5sHdv38itSkgNWawSEc1UVVe5Tn2dMEWWQMdpBwz48rXoSaUDvTcscdvVr7wYkr64KT1dHu5qYB9ESFmrpg",
  "key22": "4KzK2zc3Pjjv3DbYpnC4hA5sTGDeMRgT3p77rRX9RxGUjEctaYDcND6DBLYMkG71j5oFhHXHr9rW2NVQJUSuDnsf",
  "key23": "2V9zwzLBbHXqN82RQwvr9nvpNFfyTJRjP4vXdYfXMiwGSi2mHHK3CueR3NHYQXQX3ch1rKQxJD7BEM4ddkQJMcmk",
  "key24": "43N2BaRaYWP9bqPpsV5ojEmfYrQANxZxWWjgt35nKxyZ4DdHa8m46x11j7tx3nbXxiQpHba7mgrW11LKRxoEjaVP",
  "key25": "3SJVMP5YjeJoGi7FujcQ6sS6CMZg5v58vnNwLmhEGrhWgiCmHkTu1idPzLtstQQRLW9hsDiSkzmicu7HJCkUqFFg",
  "key26": "Kdsz7DUMp5CoysN4JPua1TiXCaUCymK5aVQAEUJLJ3g7ZVhQET8XRFifbaLnj1zb3pBCCVjshUoEkM7XJV5a55D",
  "key27": "4nvCk16FHX2AMeQYSzQ9BKeBrinqkhNfuZkXYFbKs5hHAwm8cDg4Gunv3FX9kWjVd8pvcw7ZVyWM3Z5yCZkdsYMq",
  "key28": "4e6bCFjxNGqeskXF4hPLm1zfyuzJzGq66Z8fzuUZddiBNuJ3BVnqnZXT3SpGZSwc1weAnFnk3cJFv3DgrZkiD6JJ"
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
