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
    "34mcUnVumVJT2RUwM5eB8WALUXkpyJdLCfpwz4mzkZ7LyZSy9Pbp3bmdiamdTm3XokzmByorDHJUuEPuTW8dmd1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnZGJQLoGFK56nQ3UjABum8Ji871hyc8o8QwYXZ8C11VWTWZFHVbX4KUEBhZqz9beiRteV4Xsy6CA1Ax4LCiTFk",
  "key1": "3WZY3j5TKgM58qFEcJK6E57yZcTJ11WkvLyFkaX8AadmF2q2zUYwLTnZvqESuLhxsgqtKJhsrxb3cmH1EHYJdfFW",
  "key2": "4mAwEFXNvgW3Ra3MfP4UNfJpvJwvMmxS72cLtXGnCMQZYU7Fa14ePtjXJQPMkW8bWu6BjvZ9gz6vHdiHPAKQJyuT",
  "key3": "1MRuaaa8ByuAEEakVptbbrzN2oiHGu3Getr63U7hDGNjbxegTKrrjrKR8WN4Mh9kYi2uNaYLsfxoBYnpoLCseKY",
  "key4": "dvfLhkAxSooA4fJDyCqPqUPJsVZueTkow8dg3T9xDEBojRHukjkiSndb5nJxbL5VnKi2TEQaz7Sm7RRBbDEXpPj",
  "key5": "4N8YMcCSTPSFfChDCkU3QjGvHUn7HycBYsdPxCegToJ1Cd9ReY2W8KVD4vDdaBq5EkhjHBNBqLoFgNQyhaMoxmXe",
  "key6": "3UYBjCvT4BYGHMbexvNEkk2snErb2jFR71H7wKwAQwTU26HWpJ9HhMPg7KJQs7Tzvb7Hqzv8WXLsn9EQPWg225mk",
  "key7": "2w6H2cBcVKhbpVT5SzNstH2QVw1WLZWttb5nwu8PochebyqdBA4txUrPcEyCzn4ivmN3D8Pm3y1CLiBdV5EUYNCR",
  "key8": "67nXHW5ueRioUmrMgHanfT4on5Pe9PQfZMKXorLRWwPoKEE9V6qSobmoy3a7wxtqHxWMHaScVVCQiHtaJ7xbCtHh",
  "key9": "GgBNACwxv8iobaTE2LGujyPPSEkTZMvjVMQ1961PvDUUTtxsq4Vf65AMaCy8LD1vkc5Xo5eL7Ejj8Dt8PoVYq2i",
  "key10": "kmB8Sogkz4vpJYoxyobV1aG8iqF7nMhFMwyKAxLricHPD3Xw6E6sChMLXtfhgpYA1XVL6sM2ju6kv8spH7nw2K6",
  "key11": "249StmK8g3ys1BegKAdtFzJHv55uM6qaX2rVfvUN8rYGBWAmgdgm4vTrMYZL4qwVtqWqKyZzC7cX13BTARHYCXvL",
  "key12": "4BUFggSRYvSHwMdvUCoznPazhzs1Kp8z2f7YnGhWHH4bvooTy9yA84t92pGFHJeUpMCLEw3ycKoT7AS8QLZtQYEm",
  "key13": "5xgN3R1FYiNTujyqgXj41MJNChNWFjZPRBmsTFPnvqsVNSCH7YRoxx33Y3LXj8CN2dCbv7xe6BFpVVH3VG6e8JSE",
  "key14": "56pB2u8snpaf1Do9DsKKLse1gEhBuUm6NEuccYSXKsQFJYbgYFyr4TN9TXLWQqWp8i7pahGy34oeR2Vm8ETvnoCi",
  "key15": "2Mkd3Sqjo5PYvaUujeV1a174CE3qeczDZpwqGr2HTgzcuJe9sjf5AuAwifyVRjtVeZdTxBQDVw32VVJzZwfXYpzo",
  "key16": "57e7d4djgaXxpgx31qTE7ZqWDYHiRJQjQEtnfxVh6533dVjb8kyvc3HQjJht4kX2AnCVWexN73uqv7Wdu4hQ8kXg",
  "key17": "3oD3LkuNFaueXpvfZsmeBbN2vJDuNW5Hhqb3HfbPs1L695sU1sWLbptKqLwCpCrYYAWMiz324ttHvAbc7aHreDu2",
  "key18": "3Q8W8mBm7Gp7RVL5tGDEDKtMNqCWykrSUGC4jpHeMnXM3kLp5ogtkviM5FKYN9GogQqa6bVm1cqkPrgafJEHBkux",
  "key19": "52AprLKXdomZZ19Px1vtDwtmZ5PEXqQoiu6bc6RCxjkoiu2wMR99uG4741JrFVK7H2AC5YDDqgZ5xjhBF4L61nGR",
  "key20": "4o8teqHNoWhhXosNxnEKvitfDYTFUzWRVWZqpuiuDwMtg4rujV6V8DCvzrk2cqbAYyjAQ1YNQ9zKfDPWVfAwApQC",
  "key21": "GAE5TbyYKGYRDvgQnrRqLRT8Vk4gTAHJiAMqQ8k6ubuMriS3WzJDotvjC3retKqbn2zAf9pjhcvUKvBoDkTF5zM",
  "key22": "3sUBJwC634fy6y3HC2SHvwnHGgiGgPTGk2crgtASSbtGxLwkdgrGY6BmaJWzqtMGCN12KE69vgnFKNhj9tq2ZeWR",
  "key23": "4a59Kf59FWoRQZaqy5GAZpFwPc2SMZrwKKuiSiBTqNU5eDVDpX1m4XimMscmVJ6qaGVdmhYzktzhNJYZSLWyzvLD",
  "key24": "4qMFjm9c2WEaKMj27x4bbM9YyxDrbQfufNbo42qKsGKc9qgtJhjtmX6QWa9nwHAdMPf6veuKYoqiTSbmCLDmE4sY",
  "key25": "3xmesyFB2ifyG8czWkzenetXGP2SMk6KzKar3ypqZHgpn4nskwsHx9mEKanoC7ipjLiQyPSat2siXg7mi7GWdcsC",
  "key26": "57PKryK76FL1KHZmNWExQXTZYb8sxKsPvGiuVW7tvWN7LnKQjandm47EGVxvv8jW1TXwhKHjgxue8qhNfbJvi5pc",
  "key27": "RAGv1Liih5qojPGEf342Btwk9knGswvTz49pAqc7u3GF3VVUiTHkt9RVXb93UFr2yb5DaSu4a5GdRNXpExMGtZ5",
  "key28": "3G2DNCPq6JRhXbPes1braBbva5Zd6wFBMppd7FGtu9yqEBGWszuHq3JzHhkqQMTzbFJMC2oe26dcAJV3zGaezmMQ",
  "key29": "4pxYxjUPFTtPez1XTZmmVuBsZpphjVuPKYmGrJzLMg8KFNeGcV7AhmW2Hw4gqTFJfyvHN3WnZWpgp682kDifA8Ev",
  "key30": "5A65zFqUz3m8RAVwqpb7JfH8S9jeeZwbWohd7FumeSDmaxTdJUoJAeuDoYaeZHBFV9XamxfEHVMRHfYgjLAayVbH",
  "key31": "wvKRFvz8aJjuV19U2ZTsmaHj9KzZj35L81AJ8xtxUdqdRYZB9n7t4iyqVt4wcC87ZSUqFiav5KYECw2KRxx7Paz",
  "key32": "3nXpte9gdz7WFBaKRx31npkFcjjMLucSDB7zj7c1UAv9HJ2zs6BwT5WyJWEsU5cbBpURMc8DEDPGQYZ18xYr5ENW",
  "key33": "2F1Vc7iYv7VvmEWQSg1y8JQyeHN195qUNStEwcjF3XRLkQN6pZgySjJrH7U7JRVCHWMSt3nW6U5nG8qTYXa6ez4q",
  "key34": "3WTZxqcvaeK6LJ6MTz1itCBacNtovpRyuwW7KNbZza78B5EsV7FkVobXHGrgtUTY2vBnpqMj7mKyMFeWep7HUSQZ"
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
