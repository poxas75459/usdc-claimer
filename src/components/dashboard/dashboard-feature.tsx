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
    "2VrLBrynw2fuxjR2wqQJYNuB58HuQ5kkyZNuwkj4wfy4XEst3etmivCpd65hFVJEKZKk8kVcuJaeHeQqv64BpztR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7maUi6W8xGm9dU96z5hvYc1v46y67DM7r4B1CvrykgYbYFWvdk6sF1BiSpV5JLdR2sUSTL5QN8SkqbN82bExUd",
  "key1": "4zrG4o2GqNnRxAZbT92dMXmqUA7w771rFrjGhuaTUL1Y8tyWPEpKkQkJZ6eQkaAnFCrwASbtDYb6M3cmeCojbhsa",
  "key2": "4ZrL3JShB35G99EYfeZz5dnMy9ypoq4sDoj49MrC7ES35Gq7eE9FGywxofgcxxfwjkRUpJQdddqhwfmquxvPgsgu",
  "key3": "235q2SuyHDhLr4wjTr5ysz6nwt9E6fMPryZEQPg5igUboaH8E1FGhHJ1CxZLBe6U5H3xs6Kv6THo2epbKGbKAo8S",
  "key4": "5pk6c57Rb6NMPQk1dzWFUQFa33PW1srnZcWF9Uf2MuXRYJedwCdzGSz5LYnBkB3hpeZATgY2s1GCk4cSAoyymjgL",
  "key5": "5JnuQ8kMU8FmKVEp5WyBCVfZco8CtDDXE6Bn1oZtpQ6C3DsiAGDKKvNQ2XeX8FNfNDnYBdXJamy2vJ1qFbKKPKks",
  "key6": "4x77uKjBBHjRxbNAi6WgKTbgyDGbSNgYe3DkXgTwunx9sYuapMVXyHRuMt2YwnjoiKDsMjn1FniU8KH8do5YAHwk",
  "key7": "3orWQ3wDoVNekqeapJijycq1pLp7wcLxsoUpvvdWyok1hseeXBZZzvpErx26rymava2xqukqGjTdxfrnz6D6pMh9",
  "key8": "4WM5Du6YtxdfuLCESUW5PzuqyGsJrFBcqCRJ68vvGodeaKkME9dBzLJrkmYYvEkUPaUfjcrp3M9LrkQkbBoNRcvZ",
  "key9": "3y3AorKfDwi7QEKTc8wEphNv1mzuWH5mPn1R5M1bkSu61m8jtYUgsvfadYpYoqHmoAcU7x5z7uD5W8t6GRijD4qj",
  "key10": "4Mvz2L81tZ9bAyxAREPUcraBzL7BvSqrMd9V5tuCsjZuzRGcTK8szot9FnmPfgDHk5hqEptPfsc7pYPqoFrhNCe7",
  "key11": "b9jxCdVHqdku6xcEgxEnA67Z9vmfai1zgYMnR8fNTX7SRDpQjv1nEhEC4CZLfPvMvsw9cEWF7ZeMCCa8gjfnV4L",
  "key12": "3xprjQ6DLtxKSykV8PgURN2Wd2ad76BJs4rCdHce6GR4oqd9JJYyAqLD3AiqQcH8LNs8UmCjytbSNwpViffFC9vN",
  "key13": "2Jt33e9HnPWHcT1et9FZxX5vbFWN2MLjG7NPPx7SQ1AF9V9jkp55oRXyhQ4EsAuuwcXVkeSvMzXCKb7duNSCWS1C",
  "key14": "4U9EM9wxyLyYUnabWoSihAmgnoKDMFr2VDYU3c682oynVobJtxh69gtT9pjZjx9EsFdDjyz1n87nGeJ8iKQ1FJwJ",
  "key15": "ZeTFZUzysS9atMwoNvJ2mswvvxnSRtJzLb7B8fC4E8K7JVPkK6pi8kQh7KuojvN4841c4bzohcYMdELZBHFu6Sg",
  "key16": "QmnSGEWYHEhoWDTRV8Z3taVbTRnTSYCLBRxpM56wV6QgtLiELD2RBAJsUTVTKrr4chgsn1nw4DXhzEKVsNA14oj",
  "key17": "5NksWfcRsoN3LUrJLeJV9Tx5TsMHLSFfo5omMQuMWhHw3DwMriJLEydsV2cUuHZGFCeMxuXpFRS8KRTCcfE6JdV5",
  "key18": "2G82sSRSNMMYv71jCRu3zGjgHHQ8T2VzMqC1w1CxHTbsE65TF8S83u2A8XbaVuRS8qwHFv6suuHFgK6x68RRba2k",
  "key19": "2b7RVMfvPi9XavuXDTjhM2oruwJ5x3oWdAbHNgAj5R3CwcjMQyJuJHKVJwZ18uAbGb4jfCfUV5j59ts4Ltpvydxu",
  "key20": "53wcNFQkxTFVZf3h9FsLU8uF2XihAgGP1Xv3MmWDV5bhNUAXtyk4hXgzcJx4xFHh2FdgNXUEvVMBdVVyZRiCUsn8",
  "key21": "4EhHftiqQUR8pkKvNWh9BvzMsmKU5Cebq5178xpRy9SgkM8B5mnxhVuKeteNos5RyXnTbNBYKSzuxWSXWivFZfRx",
  "key22": "3h5AUKWFA9qDx1tjbtpXrY6NUTJJFxMV5LpAk5DngSFCjeTdKit5uen7c5vMhjqEvjHnhjhSE1eJYDLWzPzJnDU3",
  "key23": "44xrqPMTzYNv9rRwqbFffCJiQ8A3n5A7GPpbLr7DXa5fMQbru2JQ9XKgGPRU1EXtfxZZsiB9a7Smnr3JfUYtSCzF",
  "key24": "51GKR4k4uD9UET5P8Ckkw3En7iAXFyENBMsnZC11yik6eGfgQNZfPL7ZEE6rXJp12Av9sCwdAgQEWeEcZknRQuJw",
  "key25": "2Twm4pqergk5agfcKJXc5R4dvVyydnAq4RNfpUzWk2myZK3qbsCt2kRBA2NhDCgMs5VMXEUsVGHeRbqswVzQXrYC",
  "key26": "3xrjGCQUyXzy7QBwAKZHneyEnXjNcTqeJzuMd3D2hZ8UY2yiujNab4F3dMERrrWjy6ghvcjKcegZCZZhNUGJ2kb4",
  "key27": "5gWauMV1GmpCF7iu6vyboRTzaP8ph6bTZtvuS7CXJEqR9HATATHfEBCfTkKzeAoVfP6aDAw1QQ2uiZo3qFdSY6cd",
  "key28": "3zYUjUfzAmEseaBBqdZuFxSvngp4yxoCJgyhEDH2cBK6vBW2GZJWQ24ALbEVpTJ16U1k8t4rxKioVZXQqCqaFmR7",
  "key29": "2KrmvZoojcQ5a6uywoPQZhU7UGT9o5TKKLkcJWC2Lzz8sKQ3jHyaTyq1frqwYe26QCNyPDzDnu2AEJ98wsd81w2q",
  "key30": "4p35PVb3eo6xdMRGJ5nJN2rdgKZXeyraMHbP6CyyZnmMqjabdUi77LhTujvYVnpnncd5phNJBCP2gHBvLfmjaafA",
  "key31": "3gN8hukgvBcNXckRGfSqoZP4GZhyg938NsjP5AhNJHtS4jnG9qPgSvH2nHHvVeZHhLfYHR8ZX1u84hXK8c8vq3CD",
  "key32": "5nEDe2EZ9Sk12bduoesdgGA5ruU8T7K3agot53KeKBHbw37eQmfEbwj7GXg1kTfWjsAJe6YUhUbr7akuJDRx8hP4",
  "key33": "462hogbgQHFd4g5pUYW78ZRnF9pizBA6ygpnTsnTzqZTm9MQ55sCgVM8BvpaDsADvzfZ69CxSdJvjTpGwTn6cqhS",
  "key34": "3KW28dfAvdejVEZtPjhiH8V1WWgfKqtodQQ8qQ3XardmEKbwATrU5wwe5keNTCA2Bdo6DbkQBScmMiDqGD1i2U2N",
  "key35": "vWCe4xnwn67ATgX7nTDJW1kxAR5JU9RsPBqgi1apkot8E8zSQiJtHw3TXTBrCPbGm2Qqv5gcayiPyWYKr3o7ueL",
  "key36": "ENTcCfd58uuPs1t8H2Eor4DACdn7jy5a3pHGoRqoigmXvgy1nJU7oBoe6qBM8ntBjruHy1u73otsrvYVepCpjGH",
  "key37": "5dPncezTBx75perrYN99wZwvZC3cfvfJc3eC2YH5xi7VjSbY5E7T6mn74GQaxzmcJ3gjju7gVUS4nXi9d2JFS4Qr",
  "key38": "2WVnH52C4f5rqtfY27nZVSmVJxM31B1wt3i5uNj3N1AoXPVWNx7s5cVkY6quyVXWgeNtGeftp3Ao2daLrre6N1VF",
  "key39": "2SH4JKuCFsLzWREniZQwGSQR6etQgmX6UGnZUXMCSVdG7EXMNFTooA9XzEodESZRbYzAfwAEZWserdZJmvgcq6ee",
  "key40": "ySh2BGGYnQzL6XXhkQ9vqkxK5aZsjp8xyvMB8KXm85AaNtzK8of6igFgFBg6kdcUz7eWAXMqGCQnK4p2vUyg9AB",
  "key41": "61KSBE56Xxn4mCASrV42hBvCJy2saja8b6sXJ17FfgKr5faDttCkyLapa7eRbKLKrvDndWjfmNQJafNXEZzV7RUY",
  "key42": "2px5CYW5hCG2qBXRNx4bCQkB5eA6EkgNHAtQErdGguWgaYGtv3maft9ftUdJJbyfD1MeiK4rjBHEAJyQqjSxnzyU"
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
