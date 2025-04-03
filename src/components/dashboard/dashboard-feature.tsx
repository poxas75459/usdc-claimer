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
    "5n6zfr2HCMQDB35TWmQWPnbtfjamFQYsWzUFfqmsd6KRdEjCXxr4MH8ciyd9YsnUPns51NFHxAJZ4XyU5chtYAk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wmuf2T4XTqnQE7DD7FAEzqfqrAG5nMs7ygvPH95zBc9nhZ89id68P9LSLGhiCgpLg5N2YnDFipH7ax7obZrEtjd",
  "key1": "3oCqWeNzhzeiDuTAwecNfzUg61YfyHKLtQJg1Fy7xYYrVz8mzUbtKZtJ1hgZ4VNfo57gqSGMW6gNURa4ZB83oc1D",
  "key2": "5zSUPx47nmMiAnSQspriDvLsSEq6JQDqTSjdr6DSgoQ2cSdxanBYFbzv7byEYThVqBdgzjt6t8gg5qTMMyP7ypXe",
  "key3": "3YG2BrPkJ1y7uxXCPZdf7KHwAFTEwvxksQdCy46h1dbZMzgNkRFPbEaCf3zgEVkgZ1KFx72m1syFhqsTpuukjkbL",
  "key4": "3hLunVTUzpUofKMkQ4MahqvxpFcr1xqQXA9hVLggZSQqwmb6YxfTxT9uxeG8bGS7cqNLhhqeVS8fd3HKAViWScjv",
  "key5": "51oHYZ6VqTzEQYmeGYKoB5n34BDnYSUT9wZapdNYe34dV4fjRkXrHfsmd1v1Ugi7bsmLe27yDMJTNVV252ThernH",
  "key6": "4yXdq6wcuGbmWS1GTx4pqgw9SpqiaJ3g9nDn6bUErhUZny8nVc2uwheRoTzQ8E7zCoQPJhyBjBN94qWGx54SiXzS",
  "key7": "5H7xVVVvUBW9WJESDgnwKmUwvB8uR1ucwSjntNkwcJdzGxw8dQx6PmbqBvLCmEGm7u8ii8DtPEc5gfD9MJiE7qeg",
  "key8": "2XubCNwmYQkqYAdAJfvgXPCnNmr2jNEMDp9miZGL7NrDYxdebSZQTqZaiSLFc9CZ2dTWjBWZdwYpxhCtHcZimLzj",
  "key9": "4XjKwGQn3c9ZL3J6puPb9QYTB7oLLQyivzDBT7L9tYeHQgSoX6tgaQCVU67p8JrWMsDVgkbZHNPRvn7r7PJb6LJC",
  "key10": "2cfsYX58CjCmRJnkPRKeQbcz1p3zgEDKPb2hPXg73t7BsgSmcPK7Gm94sWvZvazPQKgoAK7GNoGUQ2Zsy8ajdrVa",
  "key11": "52CzAof5jTsCBmWoQqDpiQkU3khZaPzJwX9hERHGvmf761eMzmTjYFVKqeeyASVAnt4nPVEiihSvUXB6UrJTBrvS",
  "key12": "3Ng19CXxjyNkQ1cKhJdFGiL3d9qtuCnTR79xkPtahsGHk5JG8Ms3Zjhn2UGZhKP9sediHmjMDzuUw6MkAUMiRXdu",
  "key13": "34d8XndYFYBWYULy6znpca6gvxeZVCET4uGmDy9PTkxGmLxzeJBELJZEzyD7kScaUtnw2J9ujYkwzGrZP7oejVFj",
  "key14": "2TJD7nJoM4ab6eRBCP8yGc8t9t1JwgySsmy8tmYyorRMDtekMTdD2db4Se5k7J6vzfzUboHWuQXrqKRAoa9NPdp4",
  "key15": "4rChmDKX4c5H79mioiM3qtuCPT1fpTNvnVhcZYaG8JESztzmxgRW2BdNLpFQigocDc58kdhh3k1zMruCDHnpLMZi",
  "key16": "hUNhVbychvBWx3apwKpJBc6X3RBPcYEzQK4qCkTwmMx2Kr7jUACXMAHDnNWuRpGqV9normhndaBfL5jSvutE1Ps",
  "key17": "5AZKScvdiooohcCKi24ycCUsfnLmYJVTbz7viAYSpCcS15JLGVhPvAaXdXmeBCGex5JqBJeYp7iC11jbp9amtnvK",
  "key18": "4cynXYhEQ1cUdisRUExRdM1bR1C9dX2na8GY56WXrpU3e1LDdShsk7eS6Ye38F2XW53LrSFwRwqzVimBPMi8ubgw",
  "key19": "2oDTAQWpSGHvy4HJEGPk4UHPhgPzW8zZ3Rz9CTA5BKDnZ4UZzr336vyp2tf3aFURGMxHtRjb2MNmyf4RwuQzMRF8",
  "key20": "3QKZY2nXvG9ZW6eufMKrr33pbGWmGFTCA9YTRF7nXvPvaMkMTCm1huYcfS33ndwAhtQH29tghiijyf2GpNBSrCJY",
  "key21": "463Q36j2ynXB1FN5PKhYr7591rZAn9hXFQj9WAB1xRYS7kjJRTkCzpVyUvwNYnPTi2W369XtHFgjuFcys3FhcDfp",
  "key22": "2x6vJKF3qseYQxBrqa2tQapq5mXawQzhNybnVP9ttygqYWqyUkMW6QkKtUPUtv4UApD3NqEmyLfPvrZNSiA6y35m",
  "key23": "3HgjiaCWRVw9bg4cpVFTyvkb2vuAzM9RYobB9jwhtzmuz2oZ3kvsh2J8J1itUnURzrbmnkyN2oK4LRHX8dar1oWn",
  "key24": "FLUesGERzVXyHiKEvjY4UYth1SddahVESuxuS511pjH3XvuSmJLZm3Eo2Sccjb4aVxHkDoor8KsaSkm89hHgn9F",
  "key25": "AsrA4p9F1XVVHc3xx7ZPae7rgTBLxDXYZVV1GgrV8iFDG3rA444mPL6uqQS4cW4NsA9MCAKDFon9cXziYS4xegc",
  "key26": "2K5DjzSuPRXpS9YY8uhzv2XUqcKsWv4y2ocqSRKirRt9tjvbYQqXMdhCSniGSsfQcsnPULDREd6xgdw7iJSGyFbU",
  "key27": "423YNbXFpDA6TcuHX6BFYSU5pSUqtnMkg51ptMuNbPnwmRakeJ6pVMBSfZoxuRjuj1x1M59CRU92WUEJLXRDFz5Z",
  "key28": "4L8VywX8zvLkUm2fjZ9ponCqCf2ZB83zFzXjiZwBQDBAFzGrD2KE3y1XUMSoGzssUbRCYZFfE6o24nfKHYuTYPcf",
  "key29": "2sAhJrggyCAnky3h9wB2K8psBMjMGD1pVfKpLPE4cxPqrjP2fQFrA35vWNMDo92rfheYUC4uT33EWvvbftmsMNni",
  "key30": "2UPYDLqzR5rCbmvj4icdBJ8ds6ocrTyZeT4Npu94bk4svVdwm93cDwA69EZ5bYBqk6HN2eLwuaHTKJJJ9MeaidVU",
  "key31": "4jwPqEmA8LUkp3yTkjaXiJrxDn44Wm72cQkn4j7QmxuH34H1fuCyAmDazwLJE44sZsMMRtwjuVf1N4k2ChZJbKJe",
  "key32": "1kFui3vR4FUEE5Pq8CvjpDiqG3YyZZWy7YhzbmAZ2SivKtwuwVSxLZFCBaAJNZBw6c1Cn3U3KxH5HjzFcykpMtj",
  "key33": "4DZNxkPRt7nYiF9YTCs7Fkn4dXaGFNntLRrNkBgko1mSWWQdrneCp84kHFVzK4rztNB2cUi27FyzpqiVZCtqSYuR",
  "key34": "HEoGdKdoCvJpRBjqr7bD9MkPZMByZdMc6Di2YaxN2ZPNTj6bjJFERrBKt9Q69pZnyuufjXKXwWS72nH6bB9Aadv",
  "key35": "GgzHXinuw6hMHmQz4HyUsBPqvx8s6UiMUpDU4hQ1A8qC3pc5xbnP2UkC1NfrxaEKVKjuFDAFxTzRrW815RHdLNP"
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
