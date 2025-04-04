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
    "3hMUyF7nUN5vGJfWmkXxqvTgqySFAKrfhANsLZzsBngM74p1GM3fEacy9pkJjq7WP8oxpjpYFdTYN57bKQEfLbL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDvhNTh4vkXGQMGWwT4gaQgCyw4t2fLyyy2gZEJ2snwWsfEMhnD8jHsgHmQTHgnsw1vGd8tXp3vN4t6rhEYcvRQ",
  "key1": "2zwHK2SsDNvmMNexKoGZBR4k8BDakjTE1NC95SY9dujynkPAae7dbkNc5btY7ChCcPBPPisRTPXWkD7KV3BuQq9D",
  "key2": "4w2EXm9zPf8vxtUMSwFFv18CbzhpNYth39jPufytcT2vxgvFD4oJwGCYLREri9jWiS7HQs5nAicV8fXM7yKxKX6B",
  "key3": "BJagJf8m2XKTiJWMNVRbN1APkF8mRR4U9PvhoQMmn4aN6AsK4762fJGeMfqdbx7ueRrnJZFZQHomHHYL5rG6DKQ",
  "key4": "2PQQe2Rasx5FquvXc4S5ptgQ8zZSGhRkXs2Fma9uerpmDgQrBS6rHkxoHZNSRf7pkyNAbUWzZqiok87BCdFx3Mrb",
  "key5": "YJMdtTikBKPwygHekdcEEzuiqq9jeab2HdHJpJfnGA58pJb7uXuuGZMiPRz2DbLUpqimFnpsxpQVigyYkZMpsGL",
  "key6": "2crmEQ8uhdu6QFJX2GA9NAY2Zpb6JTfTgjRKCyDY6GNtvNCKxkAD3TsnxpvkZTG45oKxuSzxqV221p4vehvyrrnF",
  "key7": "5hhHJoyKUyyxdMTXBH2GHmbR5pRFFQfNe7bDaHCNXed9K2VQTaCxgSF4U5LmmyWyRYL7ZnKoHBsRsFSfeMpQXw9e",
  "key8": "52enFqRweaRWuqi8Gmr8pk2XBXVfRTSRSyupYfBeWiLKRkY7sBdnoPhYVLMJN3sj9LNxfgyDMzpR3oLcFN2TEe7x",
  "key9": "4qEy5EhyqQCRyqyxUPs3efXx7MVxidJv695Wtd6RuQw2Gn4JpE7hEjb521q8b4BAsgh7P7nKj2erN55sELMkgR7s",
  "key10": "35CnLwtSzbx1RMaoFa1fKL8SGduU4hQewqxkwssr71CjtmxTmNd1EXyLjocanX8cUrTWMgTscVrgjdaJz284eoAP",
  "key11": "63QKLZzjLdWA16yDi7SQ8dakVLHo3ZtdkzARAWhACVS5gvsBZ9YdeaRNcSk7n9eJdX2Hj6yjKghbt3B6akmfUfCq",
  "key12": "2kWuUrWnUU5EsRLWnXwBYQSnxvhf1HDN9TbnqryJSa2gcmeY5UY16WSTYRGRRrfUw1oEkU5vAoZSB2UkASn4rqye",
  "key13": "4RZe4rv1EBkjh8CQjUmC7RCsyMsGkFjGptDpB6B6Fs5q3gZrnJxH5z1P2GBRKon9PTpRpSWfV8ys5q8cYJz6wMyz",
  "key14": "5bHhQdsbC6V8q3iS6CcBwEZ5x3FAa74tTUCKnYHrZ9G2y2fTHM91abk768Hn9TiWitKTvCsLNJXFRaqCoKopqD8X",
  "key15": "4H7A5LgcWVLw5HTfQSdx8xuHM7BhEaCa9MKwC2rZKcKyRUF1BQLLaLPMdYh9DPgb5dM6D5FDhNuzqZGJc2Fe8jP",
  "key16": "2ji5GJUpMFVf1A6eKe4LyU5YopLzZWHo3LreobJ3FrRxMDfDgWxbLCmZBtPe7dJxt4JMrn4CdTri1vpQwHERdHaQ",
  "key17": "MtjmW6G9fL6T772eewj8RPc8HHiDoBUZtWWGMjub7BYrVdeXrMHhyJFfAACcyN5W84ynCSvMSxNmVttNHfV7SYN",
  "key18": "uFPRbudcShT13KXmhaF8KnkDEirEzc1EwELgZKWkqBabgnN3gYLAjNzpyAwmhNqavrHRrPjnMtXkHHdx27YHM7h",
  "key19": "5a3qyXTxggLmpxMqAVM7teV3DiWraKJzKXsJJAivZ44bMtHPFK3wxLAfE7VfokW5fbfTiVyKKYZtFp5EyY2Sv12q",
  "key20": "3a5krLWq4kMJPm5kjtCmB7AnLwT2v4N9vezWEASxpy6WXEuLWPLr9SS8xvxPfM9SVSV4y6o2eaBApkPJmV6UpXDd",
  "key21": "4V87Fz8cSZidXac5Mp6GVBLBTdNg6kGMs8H47kKcNXXxN96QLF7N9KpTd7C1n5wiJJHtVMVaS1jfBCAaEE5pxgXb",
  "key22": "3DsBr7niPZvw7KdRYVi3jKpYWSAgPmHADx2Xywd3zZ5Y6dJWFRuj5TbwwSeNkS3tGCzCyUeAAsB4DjWT9XQkGZXQ",
  "key23": "5PEgSrV8JBjfG8FK7Wrh6jHEqEWv43QDRWhPexcEoQvQHUmHdDQiQUmtvngPE5ahBqgvoa9mYjL9aDCnivAGFajP",
  "key24": "3EMyPf2yEMDtrxuUk8URiVRCj5MYhCrWBKBuLZjimhuhLr4j5HS5EKoEf27UzfPiK4fc24VZnLZD9n2eozrw9Svb",
  "key25": "mDopuSgNj2WRRQVY4QJAxrvb7293GbhuApD6AcKwi78G9oEZNMpyBzxRfypTiKj9eukSAuLxmrQKSpdmdJEB6jd",
  "key26": "4zae1PjqwnLQtBUXgswshtsZhQ2WVL2uUBdE4Y8LH52bbzS8osdkhomYc2CpDFc4rh6ajebSXTE9rUmJJsWn67sW",
  "key27": "2jPXhh6hHEsHzCDKt9j2jMNveB149X3tQQVcwpmTAtTAwGCQuuUPVRS5ojoYW4MsqqeRQa7kEa3tizhQbTpo5arz",
  "key28": "7D9yrkoJ2ZqLKotbXREwDDMazRbtaLFsxKaLse3YyTYLCuL7LjZAuqJ4vdE19T4MtjMUR9zanEsxVCj65j5wXDr",
  "key29": "59FQEVeBqoBZXr9FJPDhELrdjg5dJjWBVgWWKi6JUbnj42ZuokMQi3pBxATvVSesxnb1SovC5Pzfctu6RA14xrSm",
  "key30": "46wRVtxnXz2e2c6o7A2F68wkyta9ZStFai8ivoKxZskVUJedLvp4S985zQLnrfX3heqMcS1kuARv9qArwJhKEU1F"
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
