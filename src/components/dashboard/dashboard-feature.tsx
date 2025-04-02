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
    "5qApBy2UFSMqZxrBj94gpBf4ezkTCVNVYsi8wYVRHt6xiXNYNiYCSYSRNGxnxJjVmrs5fe927ofA6wwnSpKT3MTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KU3XHsgo5qGFhqdPzRrGhivSeUFSxL5Az632qyHwqJqrT7oByFyHyMZGKhSeTdKG3J5EVdzh1fMBMw6iDnDwkDQ",
  "key1": "2Y7JFoDosuskWqzoZAfz7sZM9KnoPrbjrnuxd4ZSgSRNSnTG7nXE2x9K1LtEFSZD4eQoUnSXRNSj6v6BkXK6bJyU",
  "key2": "hw9UZbn8cJbBNd8aEH7AmwV8Sae5iN58VSjGsoSsY4Drftd1VzsrVg8E9LmTyuGqPT5x1iBVtsQ9gxHgxdjKBDh",
  "key3": "2vK3QytJgjjnkvf94L43nzPA65rh8Wos7Wc79JHMN19NboWaKKnGBeYgLveVSk9a894YkiZzMwH3xPd6YwAVvYau",
  "key4": "i2kckkQe2FBSxoY585mziySC6v5abPXwTeWT2Cz7ycukSj5BbbDB6BS1GV24gNd4psXrAXutB8hRbqYeoLUdfxR",
  "key5": "43gX1yBaVokLC4AEidJBVjw4ZS4zjNvyvBsxmECoi7kg1bSdsN9gjdBRi9aztAYkcVji9sS5spxyioMddgNGVjtH",
  "key6": "37vU1PkJynZDSgsJKVo2xuNmgRYKfgEHcQzfqhEEVCHGgY5KL7DNALYDNZ4YeJongL4ADXnmZxB7A7cTfozD7hef",
  "key7": "nWThyQ9yAVK36MDeKUsSNMsDnJzeQjp1DjW4uiidamKrVL1uC3sq7ZYhLex2ai8Y1UcpB6G5Uboz3bUK33onZJr",
  "key8": "34DuV59RqUajxT6f2G8FBJcawExoeJNKcrD3B1TWJKueJibE6RGUHyVo1ijTwQ1pMWkx863H8Ti9gjPR8oAcDdYT",
  "key9": "H5SsYdsV3QusSFkLegAk3znppQZCbKBW9afiKMsazJfjYViTmPb7VmtcSiqYABRvTh588wYJ9qfTcMtKK4Aedi8",
  "key10": "qadrd5778x18JtAcnCYDswcjnHeLwW1npCb3ATdLjGvkyspkS6piqnwP5wN7s1GBxRp38BM6yE2DYyE9pQTu57z",
  "key11": "2H3evgGQwtJABJXsph2zkaJbU5Xfdgj8HnkaasiwmgPuNMFkbRhyKeZ3sUSBrBiNRwfJZPT2BS8ecHFMWMvv8Xq2",
  "key12": "2f8JxSNdoCcNX9UAN2WLyhPcxhhnzKwyNtkhJzHVsn32kM6oqVyb5aFKNNAnJtNDbAkMkTY6eHZQAX1uditscXF2",
  "key13": "4CGxqf8VTWwVjS31VWC4oMq9NQ6t3WnHYGjRHkC2ioGJGxsTN7E5NkK1VcdrUrpWQ4q2h7XuC4rQXyXu8ypypJJJ",
  "key14": "2U95K8YV4kJ6qxwsqUqgaYAbGnN2sETebFQhvLTxCL4a4Q5p6j7RD7saSDuY1ToAAWybZaaF9AsfiJiBBBivtFEz",
  "key15": "4bPNkqJ68PA2HBtYFryN4JuNPKMv4T8Q9AAccHycF3qL7pQZxbU7kwjRonCceuXbmKEkbUuqGXGBCf4gLpKZMo84",
  "key16": "3p6tMvJvUSY1PHC5ZkiiWBzBKUB67U26Pj6LDCC8nLW6ADGJR1UHqvZ3nhXzwMm8sE5Zd1fCvDNUQxTmmhCnzEL3",
  "key17": "5AGT5yWk9o5gzXXs6Go3UHzMDYRqqCdSzDtSYSVFU2fx5pN1FhTmRMBbMAGZbsNf7h78gfs8njSg2Ko5qzSzoRQe",
  "key18": "3Eo7jhJHmzzTeeMU2s5Z5B9724HpN3GUH724bAp6WHQgmX693AZZz8KVyWrbvLFCN2yGLCSZ1uJosqT2w1RoVNjQ",
  "key19": "5XMTNHx9JG4KhSjjratTQjsodw9ceq8F9jBdmhJC5v82WneE5favHckN2UDgDG5Heni5wMGkDDYerotne7q9uaiG",
  "key20": "2zcE4Q8fb2MRL3UkuYsScy1ov7J44Hyp6FigE24bFtmvxPrfzNWA7rP5S3fVQ1VfGo8XjsRbRVgLjLsiWUBG7k9u",
  "key21": "5M9Pfg71T3LFec8k8HbXNbmZcjSk5mNx8pswvQnpiAsCFUGVkLBR316k2Xt2eYYry1zdXpYc9Sa1aA3yiFPnDcho",
  "key22": "4wVYFAHjtSV38nxQUcfGHbk7LBzGCfgicyhs3XTyW3HZ2vzBns1ag2VcwjGPHuGP3HrXfH9vPrn4z6ukAnLSjXca",
  "key23": "5g2ZhfWuE4pdoVidXQ7uhENcHWsrq1sjqANmVJX3JZrJ2TqsRk5c1HKxzNiP8dZywEczhjrmeisrfuoNjonJqTkY",
  "key24": "svvX71T7zHQyoXhTBR9ZenA58qnPayKPM3bScUMbacUeFSQaYQ5MbLCaGzmYt8oLxwBHAyUzSh5mwTxf35ZKXun",
  "key25": "4QbvKyqFUgjEQNBndtZ4A7XjAen6uNCTPVRPDmyLEZXVVXnkZS29hNYxj9XMFD46TkGqzC3ZcbtQovctqA811ubh",
  "key26": "4zCHcVm6mTKvupoYYFdhUqu8cCAxYGg73YcqKkEAq52uyE5dXwNP4FyAwuBpqCajvz4SeMJQsejSRPp52JbaUYEE",
  "key27": "2J7dxUWpCHRAjToTZYCTG3AW7sT121CDdLbKaJw6xGCV9xAHn1igF9zYhaMBmiuXvUtfJoNaf7PA9WSfQc33EMoG",
  "key28": "PpNtmKjB6Z5HgLdejAPd7kH2sYhzNRh5kVhiEQXv2RozrWEarMNrwFoYwd8wg5GUG34MDvYH5dc8JEBshcx3UCp",
  "key29": "5x1T6qSuRuZDzi8wpWP4UBz9tALraSfDPfDooiNj2iX2WNzuz5PTcjqtTjN8CqXV2SDeUccvmvZfmZw1TfZhh76G",
  "key30": "4Cavh9escXDWeCfxBDq9N7GszmRZvrVnXhC1LTmeAwdJU5pf8rTKaf1feVwa79NMAToVQ5xKKmtYhi38wmM8uoAB",
  "key31": "2JuxzVzEdMqErpSL9wnMAFqXXn5zCmsho3SJXg6gYz6K9wnY8foTvRh4tcTEEFMYvqdXNH5VJxtuybVZHZanoJq1",
  "key32": "6Xp25xzDXSvDRM3ApAPPZqPzWxeWdQyz51WiKZirnpUwsjBw6x6YtSa8t6xxH3JpChGuk91HRLxkc5k1rAXJzwE",
  "key33": "3w2k7o5gaqHBZPC44GAAgft5Dc6t4sB3MrnC51bvcM773aUZTUHNDzKvrsAZ7zYDr9iRZCH9ftrsMaM55uJuwy2e"
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
