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
    "48ZzY3psHR4G6ZC1rxA7iiJbVb338SfjYrVtJjdwX7htzZnqYjF4ipfnoEKcby4T7Qvjxm24Y46sVWFTPdbBA1A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAL5WSv2DNZ2SDv9uJG2oAJ8SpGcSYZyt8fB3GhzmrTEHytAK2SP7i5E26fnDTh861uMTDvTfPAou8dcNb4YyvF",
  "key1": "5WqnRy6it39tiNrqZduaUCuZUTmVN6FNu4pHYrfjW7zXQYDkHRFRWg8pGXX1jGzLtQheACxj5FUiRci2iUewZVt5",
  "key2": "3Q8dj3JjfWj5TWMkLfGrtQhQRJ1nRVg7fFiUhzL8mgbMLQScG6eQb3rnWAprTjZ98L5AyjXCksvABmAKPmL5FVRr",
  "key3": "3bxrhT3QErc1wB7JqbsCcJSdFuRnet7Aqh5Gbfjsa6ST1jigc2Fr3sPBRu3MXbAuFSpWpLHum5KpYBk2bgyCYgL8",
  "key4": "5rMBGcVq5qD8xs6gNW7CRxebjrxbaVaEhvLinf9QcXmSh9Gxv4TJs4taU4AaVHB8hbcNUncuEGyr8nzKJiNk5ZJY",
  "key5": "3ssbM9YapJrqP6DhazHPLsv18VDPa1sNhHwXrKmeuMDiXvqt5qqWFuA6fYZ74RJMgBwH7VtYYezheyX9QJ4x26hx",
  "key6": "2TJHqB9ZNVj8KpodttraeM9YpqfZ7rS6wPnsN3sPo2u1hP8S9T3vjYvErnmYUDXW9An6KHcGhUdaGTBaN1RsNzUt",
  "key7": "M6DFqFuuZbYbDpE13btXzpksgec9kWtbaipxEwnTtyYiyRcidMRURaq2jCaL7nVpyfjfgxJpUXgrez91S5iDthj",
  "key8": "5h43g3XtpNJ8C3MUiZ1PRSXGAPde3iUb5HuW4ZD6UoyBGtsDhWN4D6eyiK6nmX7xXBnFpnAmA25qfUUeppYpm5yW",
  "key9": "yAPbgca9XymhbpL5oueLsygRMiatHbEQB1qwnduFbuKCQAvQv8y3kneMxrxKRMvtcE6FoxhGt4gCuMftAhHPiY5",
  "key10": "228E1jmXnhFSNLyij9bx36wcFfnE3RCgYcBFc7thuWrnhpPgfspcL9K9qt5Xm52dnkrmMUha1eanpsCqJQSN5Lcr",
  "key11": "4dk3WQSBBW6xwkNuKTQeXAm3sTQ5Yvnm5c2JcYfDGmFqftQpuSHcNU3TrozQW7jZRE3fqmPwQ4nD1fZCSRpzDYKJ",
  "key12": "3YPrzE2fmstJPn1GwVh4a8jggZmwSpXgEwzzzkAqX9mQPjWNqEdJZHKqe4e5rYed3vpXNEwddPk3uvZiULmffNbJ",
  "key13": "omX7bcSPHMTdbqGmgfX6sNPHZHbegBkyaxgQZt6fXu9G4gxhHby32kmR1ha7c9gz5td2VGJYWbSHNrhAcjazcHg",
  "key14": "4vw1hDS1WW5mFwQ1CsBcM6ZFwgwxqCUQFPeyPfS2h1wUQPXL6jbKM8WK7E7UCjaJQnt7XmMdo6qN37CVuv9PDzsB",
  "key15": "26wUASZ26CYsmp2EfJp2tLiPPi8XhKySCmG5EZRaNbbjSpgWkTsBqtHyeqfXDWnVwpwDstyFyhPNru3sakbQxwXE",
  "key16": "5L68HhugHEx1xRbcYpEbS5vPCSVzndXgKxSsRk5avGgRhpNY1frbbUWZqkyPJDhUMXMgWSKPZA3jD4d3qnSD5C5A",
  "key17": "5cSNH1BGAPmH4SwKshjEER4xDhub2he2kKkePgZuUtmNPboXe2i8Zq2p2TFWMPtvjm5PioYdEcb2jUE9pa71dsu6",
  "key18": "NF2nUJ5HhNhcYLXs7gN2pNjWtJBEwZDAj5w6e95V66zsisocAsVLNtNLWwkodMVUEkt44HiPZCAuvzUXbXb8FwN",
  "key19": "2ki6R6iYbqo7ypZ11MFAgUMogMZxrDuotJ5RQAKqmeqwV6AtpjAghHRjgaSNthDgxcN3V7WHrEQqmTHgRs5XKsFi",
  "key20": "d5pjhw1jFvzFZ72zFN7UMnwsUL5VUmbFH1b8dHyjc9FH9XMcoUm7D3qsQfTW1jh1RN4R9qkn3L6epPWJ2kZWNRy",
  "key21": "4jGeVmzBRMQZ1XNShYdyLj7pmXEzMH3Y899yZAgde3f7fgbrs3CZvoT3e6JCk7qPXqczrtgYhyv3ML5Fj7KLv5e8",
  "key22": "2JnkNRjXj1qCkC9Wnmf2nDid1H1FBLBxFu6J9ZnZhvAaA6Ecta57uGmVzrYum9ujPKitN9GVymwWacAZvrR2jYvk",
  "key23": "4LU1NWiwcuJjw9SpPU6r8tN3ygNpRvxqM5WuJxavk7QjAfMq18RTu8xWufAi3QcWgG9onJLoxxpB41fLx63cusiR",
  "key24": "56Bf4XrHy1UXMKQTRp7GoDXiUjyrmNTYB3bKki6fzhYWnKdTVuBkJ14NA4rzi1wNwLXhNzXGYgeBRVUsePmJp994",
  "key25": "s53T2dCki7KDaYv3j9SsKcpKEf4yHCQZt8jFGresQniqJv2anrLMEzfYjTZV1NoNKmRLn2UmQmbugCACUnQj2jq",
  "key26": "MgBZ76oYUqHPmVAVdrUjh7mcPHZeRHRPHRmqfi1uPVE5WKagjSdSKLDuQVbbJV72kNq3QUB8z5TdY5nX6n6bLom",
  "key27": "5UPNv7VsDqUf4AGvs1UJZ9RkSvBsGDsqz2xES8sPqdPUYCkpwGDYKwcFkoKSqSrGodBy7jTN8oUyUN1r11DfKvB4",
  "key28": "51YJLV5SfuaHGHhvgxGw1wuSVoMM6QpaHJjkdUkVburSTcB84TJvZJZXnayh6unbFcgYL6XZ2ZhkciwpQqLqXeBv",
  "key29": "4Asng7EJ8ZJes5vdWy9SAV472RHovCMDe5ZjSEGbKcE5XT782qaL2UR1AhcWyXVm4Xq4iXAiUSrqVLf5rMWn5Xn7",
  "key30": "8mCDaiWruZdy3EMprZ1wRihczPvR5EFB1KyBEpo947L1yqSBf5iMd6vf9rsVbPyRRgewWknYvH9TbJJRGuLRCvj",
  "key31": "2BTmwu9fXpAT96QStutqsPu7pPWzeZQDz972eSDHRS4ujbARCJ68RC9Am6WXKRhyucg9qgnA4XDfRxQdb1nzuWUT",
  "key32": "UWgqJ6efHwhz7hVEysxgNhZPSrgaUjsHXF1oT3ssh9jCqx1sjKzCb8J7WSbtJ1HQH31iibZR6Bhic4F4HNXMrkh",
  "key33": "4xyXHUbDUFBiNk3Rye5nGi47VvphwERpNSmLnthyHnZag6YJ443Fmy8tYRZuDSfnzDhS9bNqGG3byvjfxzgEA4rc",
  "key34": "4VLz9RoGoSmVe2jp9qeCC53UX7DeazJJMTZ6CcvTY8JnWsmRm8uBUF41JBUyjUZNfqwg8CVhYtpvTnU7u8461JUT"
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
