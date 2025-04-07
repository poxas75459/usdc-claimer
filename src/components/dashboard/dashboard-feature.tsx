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
    "hC1JaHtDKsLtEfebEydXuAyrioDyN4KXLyn9JPtormW7NJLidnZKJEkzoBxWAMWsaQccoURXVSFRhvcouJdR9ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3peP7vk8V5RjsKv5hDSneZCYYD2hc9873V5HzsYMSSwuVWTWKTVg5sbAzaYGgAX1f2coRDX86NMJRqBMgzHTN9mB",
  "key1": "5mQevmA1vLjZQ1G1EaueXxw7vKErVfQvxoU4Vdor1yoJkSnBhBZxz41tdsCVM4mpwi8J8gCnNFevD61TrriWTcfs",
  "key2": "4dbYdmnWAcEejKH24vi4Nk8FCGooL18q1U6C1Rr7F47STSjDpWJbnDJMj9U7oPXEVtGfNa4QsGEv5VgZNEm3qqyt",
  "key3": "VqdUmvLZX3SzgEJbSerpkv3NEJuNx1vXxqo5A68PjmWyK5vBAjgFGjvKxDfrEwtfEKP3HneYNX5uLKgNzEBrKqJ",
  "key4": "2TjA61gkT359MtShoS4VzhBHhKjTpUeYG4cSjE7AoQq4RT3EwyZaicQbTb4gL7LcT3d6Y2Cmq4X7CBPYphRQyuD6",
  "key5": "5rTqxP5g9CbdPboTtEqFfiHkZxNL143kd1aHJgyTzXYFfP6SZHgXGQdGtf9QnEhFyT2VpvhYaEUszu3E4Tfgeggr",
  "key6": "nu9CoNiT56iHzrGnFYHdP91cgfhHBBiMpox6SJcgztJPeHx9XAU7gBYVvkkQibWQS8Yx5X5HcCiAwvaqZfs6Xgu",
  "key7": "bNTe7oonawgVsNSBAxRQPUJGPtoUSdovjUyQgcV6KEbzecm6uePLZsP2BLaaUyLHumkpPTJhKjNJWZgVMWiH7N3",
  "key8": "4aCBtpYRvVDuJXSv4UTAaBRy8SAh2fGZYDpY8swMjfGHdyT84siJL41KdsHssGttpVbJkSNdzU4jpAXJ1MF4XQnx",
  "key9": "4Pb5333FNYjUwYcmKNNsTzZnS3ZMX5RMKBHX93Akx5LgSJsB79ru5vFWoDP1yrJA9oMHgTJhMJYCVMmW8dJobMyN",
  "key10": "4WQFU7o93uVXTy2uofJwYdDBQYXxGdNShm21AGhmdorpJMvXaGpCGdTt58y8Ge21e3acr7KqqidwQKQAYVLyyZuS",
  "key11": "XPEEFQS5X9rDFD57RqXCQWaE8bwYyQHo13XQW18e14tiLm4zDcXy5s3x3KXvVvko6tFcfqVSNHjub3BzKJot7ip",
  "key12": "2sTmH6sprJ5EqBiE5rshkiUGXTqbrZwnZ8NBkR2Qa96ESu3Thap463DHgQ7EsDp7z9LVm2ME1aLmPXfF75Ygb8kC",
  "key13": "5co56WxM6mnh471CV83v4F7jUGXGTYbH31kgWjauh1hxzekUeVEByS4pF6eUNY2XYSCsXstsu1CEkFtDibtox3KB",
  "key14": "2vDEUDkguaGeU46XF3DUCsbY7AmzKYJTKTxgEKKw7scVWaZyLZ2Ci6XW2nRHDxxvhLNDmDGDYCsvMamB8pZqenDW",
  "key15": "5pWc7XimHXjaxuTCA3vFJs5HSADbmetiG865vm3NuJqoJy4gi9oKKcMqZMdyga83syctEUvPiN6LxijzuKRM7bjZ",
  "key16": "2zLixNd6sWHX9CKwdR3Em75iE5W9Vuj347sjvDC65L3fhQvvjrvzvp797TU9seERMF9oUJ689yavZ4EjzD63R6Nv",
  "key17": "XqkorYuy5jE39YwiAro6Z7rmyug7ER6imC8Y4yWCwiYQWwPMQxaLZfHSLqhgQXxeEMmoaRfLEpDScHz7UXy7R74",
  "key18": "4EBdoPEahRBNM6iV8HU6JwZFht4tKjDq1UWJHBofNvBp1Wah9vGgF7SCb7kXpJZMWpkJTFdAJwufhvAVoZZfStbA",
  "key19": "2yFdvTpYzYU6HyxYdnGFtjEzmVi7TnFCAPUnDUaqstLt1p48bKbTenAWt3XhBpNbgH6Q7RKEfvfVA57B5tAnPYGs",
  "key20": "5iREvDe5mv5tyMnBWpE6d2yho5iS44Rf6euoKW8F98tszzbJGgaRpyCMkwfASYvkKey7shBmbymUF2vdWo8V2nL3",
  "key21": "5LvehUHs8HXYc9GvWXdqxDbBbLrevCgNdbrJnN9dArirzqrS5QTq2i6sVhJ66Zh9WH7aKWMLDmrqjDGZwWFwKDG6",
  "key22": "3V2kfjyy9Eq7bjugLYTwr9HKLmb74RkMABNBzTzALmhcv4CjkdWV8WKkQwMMqSR35zLPd729Vi3vr3NJXMbEThgE",
  "key23": "4rkDH9rSSc7hnjt3MquBFjzyNN6xxKoa9kpXRRp22ibRVQKVKBN3UnXYBKp3BGKvqhvNTvHgXgjVNzRMBBSHZGf7",
  "key24": "35b2gmHgKiVhWSA2ajR4i5sdJ5Yw5YMHwP77E3mwUCDNonCaX9PN3ZXgbgmpPZKhTJDNdjFApHVQ9dLjjvnB3ShM",
  "key25": "3aPaoFSJrB6MTMFN5iEE5o5TuscqAxNFvChtzFDyqWdqr8vYEqiqHfRujQircvSSqutwTtQbY2iYB4HnGnPcw6EJ",
  "key26": "PwN6NCjFZMYCBCqt1MKUi6PK7R6wVFHkjcaNuZ7rKftpbD5rxbQebzyUu1orK3NXhmncnMbfkBovR6dRsJGWhQ1",
  "key27": "3mw6Fci6MVSXsMh4qmUeW1KaFhkgoKqSVHtei728i4Vao9xXVSid4kUJEuB8uYc7LvMPyiqjySnfhhqpJV5w2fGn",
  "key28": "57TwsuTSfmD2cc3MPzGV8XVDuxmtMYnpGwE5JNuGEompEibtJCq61dK9vShggmKAkQC7JbcU78DABqBZkv6MMeSF",
  "key29": "4L8ToKn2EJ654eST8p8Z3GR1BPzBrqGjRVHuvzaQjbbNZzA99zedntSHsrrhN2EcJUbm9cowJGAvG7xUqhVJ7f8Q"
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
