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
    "5nNsq9snCTzgq8prhWfjTPRd8Mp4iTQXDi4er6wXA7fDtbXasJiChEpv6PkMNtjVHNHM14uK5CxP42tcf6Vc7aW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FvDoWTYbah93mrG3Ae9JM9uet1q8aZ51qq573BcFeEo1NUNVvS4ozabDioRXgCFch3GixHtd8bHfPGRLSXjVUko",
  "key1": "vFu7h8HqcTa9TyULvXVuMRMEmZyiJt8jmX9MoZxu1dQRNTYkpn8CY8bCKtCXj1NyMELWYAWgdJH1hktuxffs7o8",
  "key2": "5JhmwyRb4qyHm835CzQQuCoVc8HmzRowL98jBtpwd1ZP3jMSCxxnh3QzJRovirUgBWRguveKR8F25S9GjPGX9gdi",
  "key3": "4hyypsLJg7mun7QwoSYCbd7p6shKXFC73GMdYimsMzWN3CzpV3pGEGE8BVRaqnauyjc98grj8iTw8uMRQoqwyKeN",
  "key4": "65CRhj7W2jmS4pfYPQ5fwVizuSr2qXTCjr6AiFwGLNxFXuudjFTg53BsS5Eg8vrmNMmFFLP7uYj6gRDxxje2qCYD",
  "key5": "65jZ5kXbeBy1bWdB4TKAK6SFPdimKQdrPkEJs6R71kPSJL3BhPKiRxaPaf1F23ZTEtzjcjAzwSKXKtL85krxNXay",
  "key6": "kHpV32EQ4KEz45SknYcd9V7wTPfFyPHg6GEeYUJxHjC9gsiMbKnuRWiCLtVX7ped4oGjr6PRNmyN3BVaG9LtbeG",
  "key7": "2jZKqYjxDWHy6gJ1byftofJEqHhgbKHKKjz21ooBW5UThhGg1W4buMbmxLPACeypP3YfJF7kqpXaCLRNC2uMAxAg",
  "key8": "xGmuaPFktq38K6t5qf1pNujLUTTVxpk1xk1iTNQKuRSKbP67Dorw97CSud3DoosHXmtw4gxYBDXbvp6qpsZY8SD",
  "key9": "yhL8bM5xsMhDPmG4viKPH6j7yaaBjcGBzRx5MozAmwmgT3hDeAHNL6RCc1LMy7nweNA1hDNdpmr9hwMPwqTAdso",
  "key10": "5MA81jEXp6pNMTjohYQMnxTv1zPe9VgBtKqoC1a1XNbX6H6md1LPuRQ1hzyD83CkxDAYkWdkH9MQChB8owCxSDyP",
  "key11": "2D9Pxs9YeNzAmCJ6AbsC9K7pjCUHyzf19swiDGMjRZAgX2WaFqFXUNwhfDMqUxJLXUSGBxaHrYLxMwxbYjn5hwBf",
  "key12": "3MqfvrrPmMBwZKLqA816D1YQFDbr5FcEtgiMoRXhTKrQxfRXjJnWYPzA3MV1dKn9YNG9CjcPXNVKbAkmnudgde9c",
  "key13": "31hofxw94oPH8ubxYuWnjiAsFAUfBnQ8WUZMkPNUo7DBK6semw1P8owi8xx6oNXpYcM1sgTeteQ45mh5NhXw4G3y",
  "key14": "53DgQhaiijDRNqit3xRP4r9hXKZ6sBcBHvG7cYV61ku9DVYUiQmpVpBtzucw7EsJWyaaDdQRr4L91vTmR3ZBP1Y9",
  "key15": "5L1xqGycoX3MHSyVNZvxRkYL258eidSA2m5MBfr57ZkwMgUBrrJzohvENVJKn3RYaPFoVotZCHrNGKLLiqdLMo9C",
  "key16": "f8ZFkWyW2uCGkBn77NHhC6Vnq68FcQaq7FfnTqPc3pATUqQM5TgAFUr8oe7XP7zTNKTZyvRhnax6GqigUm4FYnw",
  "key17": "61UXwjnsiXz3sh6No4XakqrdK4RM2RZ3nsD88Ar1u9hgCvSMoGooTh2H1ZyVFgA1oxqPw3pGgaVa63y1rENTdcHc",
  "key18": "txZcKUYwebSw3qdxoeU9uKCVegD46kWocMkXaUAk8rSbv9TJGuBkBzPz9U3ThwCKoxWXNJRE7czDKFLTSzVSTjk",
  "key19": "465UkPotbywxa9DWywM1st7K2V1vdhtToKLMc6HUHTEiDjz64X7m8yHmvLtu5v8wuHiSskzudycoN99JoeC2wTpE",
  "key20": "38qb1rJKSfbqiKvD61uVqQCfftBzq4NJJUtyx1ysKviU1rbWHS1d7YGiFFb9H1aD9RX15qpYQarUSg17XoiVGSHs",
  "key21": "4GypVzCJovHs13konQ4zy6aKpmFqwuVvzT53r6yusgrxcXgCwDzzLnwchNF7xyKG4Unvsq2414jyTD64GwkkGUS3",
  "key22": "ZkYXPMom2m33gGmJ3Fbqv93K1SnuZWnYUYHv1ifXiuXEFF9uXdxsYy4u1KgDkgc9npeKigEAchgNRBUL1uLrgZ1",
  "key23": "5A8obnKuEbsQ4zey6kZtpyCwbWd7n4113m1yK7hrn95Ajh7z9TuTXmqLBHaybSNkcXe5ZdcSNyNuVegWpQsBAMz",
  "key24": "46SK4WXeMr7yAAmR3GkbHsfyK8PqRDXSWHsaRbr5Rct8w41MKQcH1yBp95Ph4YDaL2MDM2y6N3cYXPrioPYpauRq",
  "key25": "xW6L4rF2iRfniYZXVMxthHFf8hkqhEW1ezcAaMYNWN6W8GhqpgG8AidFMe4N9zKWNRPZwjhiamWxdamBavySM7U",
  "key26": "5KYeBbVTBzJicZPWF1zz4xu4oKCDVFoLwwMKkk8pcbNd6M2uVVbX3j3P4hppZxbzkGHcuE49XiztKuQGBz73Kiez",
  "key27": "6jZN6ecbXYyjDKnwAGoPt9t61Gf3EioAsEytcGzWVBpKi56ru6VxqdKyEWr3Xd8bswgz3hAoPbpLX6TsCDAmEqw",
  "key28": "5spovs8bpJWbZdUHh8Ucnb4nLvwn8evLUJ2gVZES5pea6kraHzt9orXcYNTAMguwTEbTPcScJmUuQDZU4x9VVBT7",
  "key29": "67V1SJHFQmWcngKAB5ZkZ5KKQHDaDNRyUFRtZtD4RLLgy7YSgWp2A1TTmditLjpW9QSkTF5N8cVsz3w8Pxehj1y3",
  "key30": "3SyYQNoXhRDsVQ7kGtMDBSHgEopjgzxgev68NryqtwpvcykYwLhU3a75QMqUn9WYaZkg4xfYXuBehELaJbb5iCjS",
  "key31": "4rmEqoAH1ZexchXZotvjZWeF6XcQb68VW1pp43mrK9waM3n3z14yjL8okjwA2vn5YSFheheuMBYBzUuqKKyTpKVx",
  "key32": "5nCyqBM6GcoEtHmf7R7TMjUkhF3miGZqjDZSnFABEitHPKzQejQnnuzCxiXyrTovVW1QUFVDkc1gbPnL3MxT6UJQ",
  "key33": "2TD2wmyHsWbpZUdd3R4A1CEtvKNiGhiebwUaWoydpxc5euXGJRXD53hZ6PXBdApaAs4v23JsTcH4m2yoUPhppqk9",
  "key34": "5T7ZsXGvitQb9BnzxUQuB6QRhnwS1Dgfi11QEXQXG7jrdfktMv37QkibonewezxZEGVXSNkBQjsUrgnePqdEipqH",
  "key35": "5zTL4x3VVaFrDELh17hykNiQDPkMh8PZZKcbFzKGMEWCeGQhdzwNja4YHcEApkgRbjknhaKg45S4JrDT2ixAR7RM",
  "key36": "LkZUEwKRgRC3bEhmd8Laffj34UXiSa2ovAqT3oogVzYJYHmt7YacrWbr2A6JppswnfDGKnApzCANkCAHh5FUiHr",
  "key37": "s7xkMjdQJxC7yPeNkpCdyFvCYmbwFDeapdXaKnBfF9ckVAc434MRt5dKqytQ2PCsBk3UTJdq6GK7F1GLDL9v14X",
  "key38": "4k1MyHuqrWkgBeiqNsZkyy8kCALvkfcmriYG6RxCpm6dEV3CfpRHfCAYMT9NWTdGgH2kdDi3M6QdFS2rqyr79cvu",
  "key39": "31W23Qo1AtyGAyeiEMpAQHZGb6i5Se36FK8dMKy6NuP2Wn1k4ZdWp3P22zMYWvCUbZmuicu5KnWvJ9yUbg1hvpEB",
  "key40": "39CynYUQjks89KL6Y1WxHJjnLg8fN3Si7Qw3HT82WQahrCJ46D9G9jKxBdtLNV5pVmQzN4ZdqwRb5NDZz95cjLaD",
  "key41": "5x3DrcLjm7SziZVzPxMDkZDqrsPjtkVrjGimphhtgvh8E5AfgZhnGn81N1PW8VSKPvRjETb7X5U7u1Rj8mrPmLwS",
  "key42": "5a3XY9zWYrn1P8CWznHWYVitJqg8ziZxDEkZh9vqbVEJcjLDRPbsYC2s12F8QwvHZhbbyoknHnqSUY3neMiRR3MC",
  "key43": "2ZxKN7ZxT8y7WV79aWHsiuw8PiPsd4VrdEQXM4XdRQwJoRfKNQi6EVh6h6yAUJBjTce9dWk1qZNA5UrAXG9mVEdT",
  "key44": "2nP4M9PkDcSEvKfGtVCGX5diTt7yRVPENML3fKeU748m1eNFWVq8B9KFpMhCAQF1bQXHz1mLHaZmiqUACdyQ321J",
  "key45": "5gvCYkc5ow8R5X26mewY2aSZ5SuvPCtvnowE6sd2Ej4qCMfMSf7QXXwazFxQR6QbvF5Ue8TpkVe2wEeNhYCGNGTn"
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
