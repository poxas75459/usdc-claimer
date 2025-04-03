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
    "5Bj84jLhmB8v52KuqtgPcx1Y2y5RBVFoMxi3HkcbRQtAb21FeV5gD3xPFDvrmX5NXSoQYgcq4NZ8wm3uEK7rjYc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brrMPoKLwiMAFneV7LUUXkaBYe7b5J2aTmJ5r1qKEbq1PMn4aJriWParj4ZBSuDzKLPRKoMqG62EtFQmdTVr1sg",
  "key1": "sVJZNDfLnWMwTjByw4a5xMhNbsZk4fy5ujSHwh3iNC2ctoexCUmMeVMb1vqW21KyqCTLwKc32aHoAKzPkY9G1tx",
  "key2": "42gyMUXMvegVc3RdmnqUy26QSvYX2evqt5HjgvyNnFDhDm1S8wFH7N6ad4AuvyTNykMotfaxjNhvBVU111RUBmaH",
  "key3": "2SWR9kVsSrhsVV7bbBxtTBN5DyDnKb3yNgbzGJHJRCfHNFF9JC7qs3or1KSetuPsbD9igGoauJWEuqrmWck7tJpV",
  "key4": "4BT4bM3HeYntHurJUYtWBGjS1ZFuK7z1CraDi3zbbJYLaVNf7WsJQRR2Xu4yS8oscBDdFCRKnkLKaBk9X75bVYoR",
  "key5": "DAjWnU9fePBsdQeCmb4Wg5aciAJ73YnPfJF3hkPpDZUdKUKYEwCKjiWrfT9udwUo9uYG3bJTkzkEAHiHBB9T4dq",
  "key6": "5hJMfSRArwZBdRa22ac3RERABWv8HdmMYk1cSdGhgHtHwbA5Hf8nGqakN7JGXTcJBCdafooQiUawUR3a5UpAEDiK",
  "key7": "36aMjorpKHbQWDxSdtgsm9hiKEn4xTogPpeUNRrqjBWBCHCbCbyUSb8YZXdxVoo6j3Z5xyyZjP2GF2BvsQaQ5X5U",
  "key8": "3mb8f5kdXonKCFvXwN7vnCyAH9StX8tDfrMD5ECEVfomyAEtDB5wBa7XvvMz4EatQbxMe7VQ73q4Y2bkZUNU3Re2",
  "key9": "2unJFCguwzsowPzLg3ZKNEzhBUtFgKrc66ZWruHTMKyjiNcSQNmouAGTJX3aqk1Wr9L6TMwvhJCWcPJDibLpYih1",
  "key10": "4U54WFTLfEGi4AzRe9Rr4wdnSh1MmrRMmzPSZKzTKvPZvLvRy6PkMH3ZXf6XHumRaUF5uG3pfRwb2B4aZS7kswLw",
  "key11": "8zhPPM4z8RGrvwWnGuMJQPukejbN95dh5Xws7QTpqZAHQazr8tMa9pChWxWugajLN9VSQvkjd1MQDjKYobEkfsL",
  "key12": "D5mBzM3Aee4EyR2kAgWuaDRbDEuwsiDW6KWSqx41y2y34ipPBx3cs2KZiY1TmHTsrf81xL7ctzzXKrgsLrBPVCf",
  "key13": "4yyHV4g3KAnqiJ1wDGtuWgzBiZJqsJ3Nnd5ro2rDZnBSACPjhmFo2PqkWwYhqQxaWWdjyTL7gijuph2LkuygRFLk",
  "key14": "2bf6eruy79vc7MWvJdKKdAKhQ99W8AwZ1NQzUf6aTMqPb3foHdfmd2aUchvBvSmfS1Pr3wAswJ7f9Un9qCLoZrCa",
  "key15": "5QFonwSnJYFrgr8vH6nY4kQ7LiF7zd25KfUBg7DdNPs8fAchXbuPio3MvJG162sads2aLKuHG3P2gT8d9eGMQCyz",
  "key16": "56YHmT9vXbHZo4i7kHWXjy93Pay3hQmq5LipL5qkunvzg4onWsJZBT471Eq4oNnBxJsHRKfHeHiHm1YgePpm765A",
  "key17": "v6ECQGLFdYZu1auHeXAo9YnEoM4DMmUd6npq9gdoQwyDmXSXUDtpjSBLdeDuhCwo5h5fcgD1JUDGsPK5LC92ERD",
  "key18": "4RxoAgeF2LpHcCE8qvSteU9DHyaV5Jj3QEHssmrNJgdo7MkKwiybs3wVdi9TQfnEC85MjbyQWmgwHGpS4ZutGVk",
  "key19": "3ZJzGVZj3hZKmiCbQBB7WfQBEzqGLCBXBqsGrvmAtPcNN1wU94BHxRK2WXBRvobdCGxqWMCFtKrHqeeYEcj5oFpn",
  "key20": "8tmTqduapz9sNq3PmQwzQ9y8kvFPwAgLaRurPixBcAiTLCe9Z38NdmMRLfnGTcjDqQ8ATfz8wsUwdzjqepZK61A",
  "key21": "5NWpHbExM5hnjMCtJXbWAueEGtdnKQu5mzm1RTYREWJA9NNnpVhYUu5JxBn4HTYJDf7HZU64NMJqkYEUSvWDywvH",
  "key22": "Trn1XZEm6EbVNQszMxjwBpLTbpwo4Hnr91kWEajwEaHAotLQwFZEi7yRiJAAbhZe6ct1sRZyGqJSAJEC1yYLoG4",
  "key23": "5exeNqivyMtU2T4xDJKxqQ4eipja6T2NHG8PQX6K83jpsPz9AV1R4d7BgMq2rXvxQNWqxy8p9URWboggrqtwPWoi",
  "key24": "2fDcoAoD8kwxtx1E4T6rDUjs3B1vaXvew7j2fqJbLhmqA3YBDzgVAzwQzkdtQJd1qDSJ2Yqafqtk8QWWSYVLCoes",
  "key25": "5NkHwPdscp4UFDYJhx4Zer2L6Thifd6nUvNs7dDFY1tuGGSpaCFUS1n5MGcQ9zjHEWhNbq4tXYEudWLYFPemNuUa",
  "key26": "26V75p9JkWFGmrFiA4sDhmt3UnmmbtgkxHfLwCPGds3oPXCkMKntYbKoj1pSFFgzhwr97pcuAyMbJKTRmeJfj8qJ",
  "key27": "2whciQn4PcyKpyyEdT7RQnon8GhjBtJUcw365GCBaSgK5UtiEs1K3fcb6nw1KCXdNrWzEbeA2tY17bEF9oD7vMhE",
  "key28": "2Bz5sPRUYkAYvkoKjRGcNBEwyc5oJ452jLVhqo4WZqod3nJVKTSZTasDU9iT2u97vW4EyMLKvajMknuE9yKNEX7P",
  "key29": "53uahhRvUhiCFQqpSEVuW9Abq4GpcohqybyAmK3bRWephvH3X4jzj4zaSzpmfkgK4L6HKQxkzV928xZ6VxUFGTcT",
  "key30": "3H1reHJ7oFcbtLDmhW8ncT55aNKioF3G32GZjLNHo2eVJ3dckouynTctPbS1uxXD1vrnJXLrGZ9LREC4NKU6R57z",
  "key31": "3KWyTBH5afvXhC82BqdZbd5b2DNBcKg2xKDLGnVNXZCPR4L9ibaxjWsjXLypjYANieL1QE2r6N7gzxNQq1sW1kHL",
  "key32": "jGHnWmbrKHM3PvRmSfaHFFq3LcmtLbuf9UuLFgYw1mZhMm1xEbqVZ6SH5uwgVqDLaPJgVf2nE8DXyZwA2koEyDB"
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
