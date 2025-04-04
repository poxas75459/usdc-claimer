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
    "44oDfW1jeNdG4UW16YnBvXQPer3M6u1SSWDqCX4dcqKmrf965vZbK1n7Dqo7q7sCyuCj7Gkcgs249junswSGsot7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6Qp3NmRECAw7Fk7T9gqsAZvfUNeykCDYvKUo93y9gVTHger2fAx2gAX9EeYx7dwgVkooBj3JWMG5rBhAWo5u1m",
  "key1": "4AZTzs8d2qh9Y3cCe2gaBbUtZeTpXvkxTVgmL1RCVeikumBKYKnnvHLdRTHXYVVRQkqYV8WxruKZ8Ydpkx6tvtxK",
  "key2": "eknHuRoyn57EwG142yU71EPxhsAGpXS3nfF1njuRNMnRRW4iGaC9LBVB1ktYPeCxrg5sVTxiF4CgsKyfWQBy9d9",
  "key3": "41osYkaBfE9Fz9sBiFp9vmH4YPMrLEUwMsadWMErvvwUFYd1jEoojPcFFXvzsYsLVPnEGdw6kMLPSYZeuHQKRvkA",
  "key4": "518HhSd9Jw59zVXhvqqqaj9XpvVAqhFriPHDX8qJsvTcY4LsvhBPSiJiTd9LMBUo5CpM4tHT92Y4yD1ZV4T5UPEy",
  "key5": "4fyLLZYF8t5WZLc7ATV275iA1nceJDkXAXofxHp4kTDmQsq1u2C47hXhqxR9LPCh4sRXj6HfdbBgYBz96TsPAhyG",
  "key6": "58yDG5fYYKVTvnha6GnH5jisCrzSaPF4GxtrawxjTTngkEDEdEzNJ2We6HtxdBvLw86SqDrjMCaPyoys97P1yDCq",
  "key7": "4uecJP7Xc8pSAViV3TW5TjswF6rrdYPLNu34eyK1prXEWbRXmkewJ79dBWSe33HD3An9MnvJR5gjE7rk6iiRHTVi",
  "key8": "64siYYqd3Ahzc4MxAgCABTdmU37CBy4f1eA92eGhtCWxBH8ruCbeLg4BmE7KHrPThCndU4PQSFcb376EzZEE2hLG",
  "key9": "4EREze8QtrkkaHPwzFKvG5Euo3uNsnie6mzx7fZSFURdJwufDLyeKbPZpK7pLCkfocPymSJm5z5MP1TBd52mXmqR",
  "key10": "4URPTeRVCW4Tnqp9MRvBhaEoEa98dk4EmSCvLKaYaGe7gigRoDDnaJf7UWTEBv5NCJ2kSBvrij4KQcRQAKzKdzsT",
  "key11": "c8yvUsvxFLxHCkkDg6si49NQcegwRY6hVvjeYzdD6rFQ6tUWqBj9sk9hJFUryNtRxcUu9k9Z8V5nLgq47ySqe68",
  "key12": "2zqQAQLaeTZUadancjg59gktKrYawZuf3nSN7Kt4SkPB4XiHBU1tJtfFwiww87HTxRkdgQwxyy475q9a1oW9jkht",
  "key13": "2y3LVxSCoo6UKmKu9gwp8yY4FzHBr5zhX5oyN9ucKt5WKGeA8VN6bv3Kw7HssMmUpfT5Y6tx2WxwZ98BcTcLkECo",
  "key14": "5nez5gT4EyBRyS3anD4fVCKisD3WMiT1tLbhapRohJaKiHcmm4CULfKj5BmyXsPMUtqTW72VwLDB4dM2exavJBry",
  "key15": "3USPMJa17uduV28W6B5zkStbJT9WygqmbKDxfvbTJoAQQNVk6tWq2vVGQnDWGQVCHbzwGJoK7xCJQ1SBePikrea6",
  "key16": "nYsh1es9oReHrYV6kXZsSvEP6bQN3hTbbVfJXTBaGnTzpfYJSWvD25ENtkv4pQepzEjr8sZFDzhKqMy1xa2NSMK",
  "key17": "2QdiMk8uK3x1928Z3j4bT3dHc5oAQfVqQ6J787QzD8zrJ8QHyo6XKhuDrM3z92m3jV7aQ2DQdUGpU2sv6WkqUQXU",
  "key18": "5m7HYtskN7WBdWdP1AfchZuYYukZciTVY8ev6MSoMpBNV8awj8Ueiy7Sf8gi2BGvjPUsGWtzrwEMq1D8ohwMfwNj",
  "key19": "4Y8P4XUTXJZMyvHvdjbXTrkzaPBWt7dA7yTCtCGBavoJDRkeUa1ej3XkLwMrnJ78TGhX1dWUXRyWdvVp8XiAu4XG",
  "key20": "4bFBrDnMwFL6E7HhZCM8J5izVgEiWYF5PtyxTYgtznLVkaEuBKDvcD9dwzsQHrNzqNEy6Lun8mDV9yWaytczMQCC",
  "key21": "5hcY5jkvnzs6gb2gxgGY9jEC99hwShAVuMz8xNXZs8qGZyUxUMy7scYRn9vWXZwNKbsju8DJghas9VDRJLZvoGTn",
  "key22": "FDWJTvfsrZNQhrnNdb2TYhdmzfMdamrW6QRvAoRZV927JFaCQqeNCYL2TTCGXSRWVXNKirSXuFFHAHZMgWbsCwa",
  "key23": "3QbNdguQDg8N3xzPmLqrJ7izVwNyptxzQC5v1pUoJkEA6iR6PqdrqQXbZbgRH4hGyb5ursircoqBsgmGRWiu45NN",
  "key24": "2nkgwknS21MLBb65epMkLb2skdhejjpmWhxXri8ZZi6XfMnLpYy8higWbLUELPmhYzhJuJDDgzjsYk6vSJXzLN7s",
  "key25": "21cwXCT3ZhZX5sci2eEfy6s1ifFtJCMvrJWPwN7Fj2jgGcnQDqAop3AqJJHuh5xy1vWJzuv2JBU6ki3om59Kns57",
  "key26": "3s7uAwdnUNc2P2gfJcDb5ZVwLWUvzW1gwTvSNgVcitmeM7A1yfNMWoy2CDubwTcGzWX8rEXSpRJgmgM5HQSqGbYZ",
  "key27": "4xPmtqwF66jBkWPSems4cXt2xPEz9X74NMdwFWGzdk7R9VVdQsstnKiU7FcZovGSYfBni9ExDUg2JSRXgGUm1W1b",
  "key28": "3ttjh1aoNxkmnELQbzddYmwNxEkyBJ9secEQjbpt9ngFCdirV3BNDesCX4PjsSrMzWTnCH1rGDC8rNYnhBWk2TxS",
  "key29": "2SpjbHwrBrp3nT5qU5xcxaCaVHkiuy32ex8aDxEKcLYbmKoXh3my4vFftWCnU1oaXH7yTrM9wnafi5g7XnQh6ubh",
  "key30": "5FUFt7rmoTms8nu54afSpkzyBeGhvHDxddxxiQBBpPEWgKaERa9HW7rijqrQuqTk9mp5KUseofAS92JY8dZjC3By",
  "key31": "drpw3cnHRQ3Hyxtdgkh3ebvzALhyfLosXFKB2JMo4v1VfYr7jgRdeSAcSuA3eMUZiHgezw14vLjwSzb3gouj2qZ",
  "key32": "h92Ru9dst4EnL8FmMVTJ5gnucXkrevABRg1FJj9FaPbXXFFPT2v1tQxorLcT21r4WXeNEJRB7ouZpnysNerCYMz",
  "key33": "2caZwSmUWVCnZLDujdgneKXygtDjUpag7xVjeLBH12dJChiRRVCpswt9m2XRdTAL24eQ3hp1UPvpxA2XwWExQPXH",
  "key34": "4XrDqsbM6FrbpnXjYfsjHCqjLTtVX4xvshMivXbRGjqzTjkPh69G1mgFErJvx2ZjQCynQ1dukirYEFDDU61WLBXA",
  "key35": "5yN2ULSznvApDL7zaeEUkU8jXQHo1uC4KgVz2ioUpKhavocqmd7b5rhgLe82n2PkMSXk5xXsdkrpDh2ofbstJrLQ",
  "key36": "3YmqYUWezsL9SdzThymQCDikoTuvrdBCw4jmtSk43duFcnC579fp8KGYHrRTENZL5YRgfMfP3FyX9fxuzf3Rss3P",
  "key37": "23Zj9zU35jX87V4yuPGcCCMRzrkyNc72g6md2XY6gNq4yeA3esT2mfvehcZXpwPvXQUK9XB1UeEwBcRMHXRwYgNT"
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
