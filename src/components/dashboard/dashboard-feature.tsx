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
    "5oxi6VMXA58vvjSt8mzU7ha5zHH1Jp3eCgp44tByznLCBZbnQfhqEgYuWB7cVN81RXm5zvPTPb5Utruewt3oMg7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWm34AgLsiySFfLkj8NJGzxZintXCCFVg7YKvoCJUu5c5tYUXCsq7rHLQ6TMsmVLAhZRrvGt4o9xm39Mjphs5TR",
  "key1": "2cCCvR1w1tejok4xSvECW9Rgd4cAjDG9YDuJYCu8u1d1rb4aTtwRJzMj4vn3jXxL45naEsF31Vs3RanTNNoZJv3",
  "key2": "3pQVm8rUz5MqrUvrM9YDZffuhgaRFJ8xPJoQBYXUBmPrWWMnVDYpFEUidUuEQPMq6bqBNLiGrtV4s45HLWTJz7o",
  "key3": "4gyogyCRrnzt4YzLaEwMHMnTHibB9gtX47yrmY2x6apAXasPndVCtL6S83sRADWBPBjZpsmTQKRZpi8Lk9taVDEZ",
  "key4": "4YYo7KgWx6AGnD3NfUsqbJaacArVovUcA1w3QL69NPerhcyiKMmSbYMmUrwFL5JjRbau21ZfoGM367FRVnhHciiW",
  "key5": "4v2SKpVNjqeNQRRbk5WKWNGKugxUmfcz7oMdgLhjFmSYCQc4jw8dBDzN3P6mWomVBvJnFBU2FabtR1YCNXECp4pt",
  "key6": "58RZQUswChvwBFYZJPMY2P1ww71wceC1bJcdB3xgFKLGXhBG7ngXbA8osCLm8dBWuCKscBcR5pynpB6EH1hTzHxv",
  "key7": "2k9Xc7Lfg1EZ6fSTgBnR7ebwYGx6CDRTHmhGZu4Yv9LcVeqez9VXaaBTHkRnSiTPNuzH5HoMMSV8gHVgycHKcWT6",
  "key8": "5WyAvv3w7aKGr94GkwLspyb8UAsqZVK2m6ELkmvbQ497cSu8MUFgJmhUVe9FjFsfHYtephNjHvjQhJr2pJeiLL2n",
  "key9": "5t6bLz2jNkSi4dhF1Eqv1kAm2tsEPqPMeANGRbtC8NVYinPTxPBAhwJJDADW3zB5NziDgzSaGhHcnBzSjYMfvZQE",
  "key10": "cJAMhp4XoU7m1aRK4VHW58myWteetc9yzcNKQNxLNxKnTp96p7kkaMCHgUkqXaXwaTy3mJp8XvEJ98YXuDNYeAf",
  "key11": "42C7wLkhBcBNBg8CTSuP3hyjS7oNZZqax15j6wFJBNFqwyZBJqXbWcRaPuvAhjuyREQTe66mCHWd7z6qXrwM9qhH",
  "key12": "5A9jBz8739VU3XLqXDXQm2iLg4AURMApZcmxWHmJuyMRmvgxYZsNgw6xKNq2uBCBHtMCr1JEjg3aL5FGCxg9QACr",
  "key13": "2xJvCRNFDnHkswz7qR7XisJw5ZrrzFrDScpdh52CCTmH3FwXzsyWG62fwBkiqxXCMPHL2FzQnphoGKoU1qCiFC8J",
  "key14": "4MGYy5NF86TYJhy9gGjuBXqNPfjeBdWeJig2MytTBzSWvHKjS9fKHbLmB7LwPdYopdJeXvFzsGVG8jo7ysdaDhvV",
  "key15": "YLENM7CPoE2QaeJuCYmh7qJx13pmSuEbuZJM5EtPpuJy3cQsPGtjsiW65txM7MQ98TcRqcsfzJCUXv57SdcofcG",
  "key16": "4PwzbuRbH4kCbTTuCceHnJEd47BUDapTX7KwG1fobHMiaPapaSNd1s3wnqWfHgTP9BZrRJJLdT5CXBCBJJzLiGet",
  "key17": "4uibc9Kxsv3q5YUuKhrtg2p2978Y8ANvduTFt8PERSWARCmushGDrkrBHgVvrFJigF5nhjX54eM8v8vXa71sPJ2c",
  "key18": "3Fy8jv3Y4UJAJ2YJC7jtUuzobmGUrnMuwg9w9yv9qneJd7tFbm1wh35NYeGrMqVLb5dHQgjMwzo2D7GJiVeyUngu",
  "key19": "4VkCHsfZYru2TRiwkhMVNvQFzSPvW5KPBm7C5Gc8kViVNM6p33ZG6PxSg6SMi3TUWfHCnzPFd1YugDk44eUhtBAS",
  "key20": "33vZqTwa2pa12BDAoFoyjQiVDApdtvffRK4P7KYtS4NYGwrgVSCgmJEvkr7kbTVCkpyAzXgVBzgdbBkQZfuqf3PS",
  "key21": "5rqTW21HuFmJYjW67LXJEor6wHwVuNdMsaEKSBUNExW71e3hmGK8kNuJomqnjfPVfJvqpnUFrxepa9QRKhtiQ2Kb",
  "key22": "5FcrGKFHCxZMCms3J6Hbwx9QwzWRkRdoQBauLfMsZMSrZkEQKhD4qALHYeX1QV3HrjmDDdLXC1XoNFYWEV5eY9V6",
  "key23": "3bLKsQANaLYVKxEvYgK79Tv5EwL2B1xWwNtyDXL6oFGVu6Rd2gqQsg25uW75h9wdtBgB2Lhdu6odAuAnz1vJLYAr",
  "key24": "41CQ8bBkKLbE7vz4qjBmfm6NxBDaNYZioXdFPFg5CQxBVHDFJjxhA5o5kaz3jxoTErPmmUHX23enWAzvm9wfP54U",
  "key25": "5vYvKNjbD4KiNxfiFb2EWjkgPmvWj4xRHtwRfuC5tmtjNto7P3jJsWue92fLWDEqQPAifnMtJqn2xJ7ge3BFiK1d",
  "key26": "2NuaGTeqvWWY8dgeUcLzdZsnyFQNn7S6mYADex8jz1MQwxeNB54rQrMSLVf9yUM12YTPaQaiEbWkyuwCJt1Hs4Tc",
  "key27": "YAAYEpDZFtovtjCMqeaw9nAgDMKc2rPj7sW2ZPLC5pREGgHc7LMte2ztyehPshZio3b3t35fUTry8B3rWrvunLS",
  "key28": "2ViNKyLhUqccraM1jfUABMmbyRLzYap76D3MgV1ci6zTAK3kfwKsMrc9xTKDL4oHJgXpXV4WXCZ6BWvVefULJh43",
  "key29": "4rY9wKBRJMH5quswm1vae82gKhjKoDypVZJW57uVmmEGiseCGMbjgozJkiHe2yFWv6DCmXEjwdvmXGUKUoeY48cR",
  "key30": "39N6CxUUzAtfbvjYvrX6WtdjDQnn7SXAGA1fuWRQbkMCkNx6Hw8M3K6mGkqnFz68Cp6ZEVzFgu2BFFB54cxT1rhu",
  "key31": "3XkwXUviCbUHKduyD3MsFfuhmRN3BJDRJntFNhYkydkYv3yvEiW8n2Gr5wwNF5ctrwyqm5DUu5DDQeL572XaLqXE",
  "key32": "4hp4gXFq5kdzXUcxhQK5HkdYUXxYS2SFHpaKkpSqyYEXX4eEVTZpdpPDabXPcWDNtbUscgocYy7jurHFtg2xT5TU",
  "key33": "5Bspm4j75qb9YPqYUK59okhiW27D34AbdG6b9zG6xVvnvG4i5YPeYAwjon5S3ARGQCaPrs1u3PiE7zahy9iGUqcY",
  "key34": "47JhuKhfFLn3vB5poyqNpHNknis9RqrE1typUk9YSH2e6UtRsfHwLeGhqe7TNAy4cuaC5F9K2A82Php79ek1sDoQ",
  "key35": "4EJHZBHgE2KR3TMBkoDQbNBMtowQdmU7DfuB8v1DEsMXSGuyQhLMAyedmy2y5xeFKL4giWh3AWSsXzzNpnXTq3en",
  "key36": "59AZXUnwRvqyL2XqE79hVK7VF2rV1m6iX4RiB6MsUh5vVL4W58zECQ1y8B3vsbxVNowEntwwKJNAxEwkp1CNnpu5",
  "key37": "4YNUgzuHLXhuugsQp7Ryyred4P1YEgH2yCJML1RkN4bFSKyfzt9mZZ2rNjxK5vCtXULdK2hanqgupAXDAmPDJG1x",
  "key38": "izbJiMrBpNJT9N1wweLZ9SNDvYMXabEXskit7xEGrBpG4EbT1tsN5yyzpTCvzhjXrpo5C2t1PVf8TtrSbRN2C77"
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
