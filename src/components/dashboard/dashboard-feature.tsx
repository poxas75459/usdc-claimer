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
    "5SbWXYzj4tTbh3DXUUVNU4WegYmhKEDh9LiMpRG1i2sqzcMdvfagn1626VqCwDz7pLq683fLg2Ec7dVj4BFUwSu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5JR4hHGpHzoemwo2uVKcaTFjhL4qXJpRP6rk4zm6cXAKP7NojxAdnNBLG2GRCrfiU3w39QM6QaXVDNNs428Bwf",
  "key1": "5979vNKizEjNC3EXrnkkLDBhpZ9LQAMGJH6Nyje7RmgjEU6sBiVhLuuJ82paAUhra6QsZQ5bMTejBUJhpy5f6vVD",
  "key2": "5pWQXLCf1AFCpi677Npv8UrivbLwQNmXayfxEPJhaH6G8GCZGoeeH8CK1v7eF81vLDdZ1959QAeVt5SLJLr2q4ep",
  "key3": "3NMcUT3Y9v3Ub9gg213v1D7gtQtMphDk2hLq9YXhhLMbcaU5VRY3tUhJbh56gzcntiX5HyW27ELXgcavZ1ik2pyk",
  "key4": "2fCM4RCMF5erfB2pMF7PwkgjrLYt3AxEBHP4tSccYjByREdcsS41ejkGcP5JVxAzP2H9iTycf6378EEXJQrMCWZ7",
  "key5": "9SmVD45TmenzkwtPHfbY97sj3PFJUbJoKyHQR8Q7F5q4HmonMVppB5q3oX1Wz8N5rT22qz3mCmMc6H52nDTCFma",
  "key6": "4KLmakyjuRrsvs74ppFvVHkxznMoLRZLYgdWhMiCH9qQYvvN78CP6cgNPeVEHYtpfDjhyek5uJchDfynpF5QED67",
  "key7": "46aGoS3nbNWABDySkP8EuEYzRWV5V9GrEHuNs4mTMXiS2QnJvD8qtZnHbiT9fK9f6Je6qM4gpXZ2mzbNgn1mbsAN",
  "key8": "2yMnnjgSaAsd2rNcjj6QucZA6m2UYbphNSvkPYvTLCZFzr57Hfrj79KgS4t1QpQQAdeEKWcteY4uMMmATjrakA3Y",
  "key9": "4fYgbP4JXV4P5SAvrGQuyn59mZ5v2CXEgiR1jSq6jTxctkCDeL2B7MBdRgQEGqmLShS1aLKnCNn82EFEXom9Jh2j",
  "key10": "5MRVHEvwz3XQyg7FquZDKXcqoMWCWSo9A7BBpZ3du7AQnCXLX8vWUyMHp3tSrnWCmDtJs8h1jUb2t4PtyLzNrkF1",
  "key11": "T45SkjxjQmJ8YeqgszBjrMMYWYbcpWcwxvr1ueKndfn49WHxWd59zxFg4f2aHbteXgYLxd8oxxZNsvVcaRpoXwh",
  "key12": "3dEzB2qDJwiwCVfus1oSWb5i37qN8B2u4gXb6aLoDKsDexsWC7B7HUNxjmXpDS6ZGBSGatKYEyP8bLvaL3pFVdt2",
  "key13": "JJV76dFq7L24wBmr2uKDXsyWaAeYGb7hg5CaJtR7yTHDzR8bSiVVb48fFeC77F4zFVxJLcGzVNBsh5b1YgosJUw",
  "key14": "2vke91TFakQSQFLNfXTPd5s3hP83Gg9D7XbGevkmqir4DcQAaJgxPu1LgmFd1fS8q82PzWDa1t9y7SiZHXE53ET3",
  "key15": "2cMn7zkSG3rL9kThyiWdtkdBQPgXXW636rczd4aFfhTqPjvqcEExEyr1dxvBg1yQZRovV98y8RkaJdEoSALCRaAX",
  "key16": "BNfsv4e854UHQ4hxULSWwrYNZ4MDwaUyi29ubUXFkHbWZHZBLn5wNKgRjTH1UaT3AtEHu1bAAHrEMAE1fcyyqkX",
  "key17": "ziux28aYE2T37XZ4dZ3ao13jhPa2mUvR7f5sonMT7hruw8CXJ93i9xYKZqfE1QWeA1zrpxhEuFM2qY3HfCQ6cw7",
  "key18": "wMtTk2v3hZ8uoY4mj4NmdoaZ9jRJCNJuJgMX83H473F9NwnsqqArZ54Vo4xmqtmC9AScLGRHg1hyvyWzQEH46QH",
  "key19": "3zeTvMrhS1wCURb9eNnUrqyi39TvkqYW9XaYiTJhDYRxvzmbAmsePajajr5QeZbSDGJiEE9WrRBcq6VmJFFECfn6",
  "key20": "2YYV1Tv395hJG5Z6WEJ2vJzEjGC2kFPSPywsXVhs8vdDtNsEhTPnErvjRPvz2UqPwbq959VKmkk8utv67GfAcNBp",
  "key21": "5QunQLUJxWfB29yvAFK91SSSK89GvrZEZzZY5TwM4KGkzu85Nm6jCTjxznxGLk8zZQ1nXNiGFCeoe4xUa9VpVKp8",
  "key22": "5xzGxLawCyXG9xSEZz6jRa4YoWDAJGG8e6HkXF56YanEfsKCCgRcNRsD2HHyQtLD6zpAvNZ54vvNcZe2wngagpfw",
  "key23": "2k5mmjKRnmvpUMCEmVM9f34p42sbdYGvAF7qTGBU9XW2n35Kdm2NtyWCH9ShKKWBTRpjH7MHN7GTUHT1Y7f8w5QF",
  "key24": "4V3FUYwqCu2ZoHXQVB9q94dscvZjczfK7pGNsxvZhqZf1StvRgqa21c5RBKU2x4BsfBnC9rV5wuTEXJZXnTRMcTW",
  "key25": "4pe5WKeMZvmU7Lnj8Uif2KV18CAGkwFm2e1sEdRsmWjwFoL2QziFK6NoCLfoipBKQAhecaaNxgL3pkx75KZNxAAD",
  "key26": "2QPLDLNvD2puwkK8jPApruFhoZsQUECgAzfuqrHHkiacr82s2Fj3rLbR9YydFRPNmnTCC5wz9XEbdetRwaAWwB2D",
  "key27": "2ohXFhQ4aN8dKD3Y8CxLwa8bdDQY84JDjvHCS5ibUBXVmASCnjobYUEkZuejwLNy3LLdtgofMzpUJ5jnn894yqgA",
  "key28": "DWAkzFQLAFiU229VKHZvKnfqL3Mhq1o7B3MRmH9PximEnKxq7N1AVZaezWVcRPLbAx3dDZoWe6MSNdnq2vTcUwe",
  "key29": "Z1Z4aRZnN1gW2N7vMBeFSnPXKpiSQ18qLJL1P36bU8Vo3RKDNEE2JqnUzncHz4bu2KNi3s1FWqxVvEiki95dB34",
  "key30": "K6cAHHFrZmjrvMXbZoKXKkQUdK33ip7mHZynfX2jitcq82o5anGMQrW8szg5azYVsNEAeQH76bDwUR9CfqWVfSu",
  "key31": "38CvoEV6otWVhAg7khHKsJra2Mwgknkx7uvo8zwP41FAPFmz4NJHNHjeCW3y8ZyZCqVY83Rto86yuuXEhzTbD7p8",
  "key32": "2ZyC9ped6JtmoHU6uUmi4MvMRyFRyYhhptyxkhJRHKp9xJ51JJWGSJzjuKxicvvfN7EYGn1ULrCvNj8hczk5nNLd",
  "key33": "3E2Lk2tSvik3vtjQ2eRcJz6vc5qroDuYBVkT1dJpJeUCZ2xAJeDp5W3dxEQc4sqjbkct6JFeQ7iT3KgpbMdWnCd4",
  "key34": "2HmXAvMV7pbTXukQenTEM2qbeiAFe9TCiE2NrKV61XgpiF7Ap254SfJEy7iki6c4g1vrJRB5Y8spmJnjKFBHjkBG",
  "key35": "5RBLQvZuW8DfWj4NNgZmJ7ki81yM6DHZhY6q8aFos1GmEomVPJQGXRewSYdZztcpmD3wK4NqAmm9eP9k4uc64a3f",
  "key36": "2wP9Bahz2je4CgBDxq7D9C8HzSmPhcyuujHG3LmawiUKA1ruXanj9z4K64NpyLsNrot87SfzAPhY2KqhB6qXE8C",
  "key37": "QDbJakxCvH6cCmaQyR5hVu8GByUQoBcjcWBykKub2prqjPuEW43WuEZyEjfXqwMbXGB35HKoVg2gfSVajDxV2rL",
  "key38": "PGCkLeK66wrkVgYLaPgKGvhkNu6CWrEbjUy1QAR9qF2YoGvp7BWnjAhiZ72umJME1nrojjXaqsfR9tbLUjte9ZX",
  "key39": "Tkha5UmCu6Xr9VuLuURQV9sgXnqFhM26E1mwH73uUrbG7podVHLj5sCSf9xFQHfCq5kRS8Gt5ohFmNsdw2phA9R",
  "key40": "kCBuk7rVgL85ZH5ZZfvprMARRYHf3dGVQ6E3WPDsv2faRi6dKjYTr6bMYBxZA4cnXQdccigbJUwYT9qcgK9Kydf",
  "key41": "4pXp96MNYPXHdoq8YCcf5pz4szM1AJniFbCdm3yhdjvKvrrzWuLaUQKgAUJjtEu73N91f3P6MD1ZqECnh5YVGX8d",
  "key42": "2FF8ct48V6KsFDxZzLS7er47jF7HaMTkTj8FHMT6cjUuHSvE1Bw4rvasN7rfCgAc74Z1ZKJmYqMLP4U44FZAuLtv",
  "key43": "3kXUpB7ww2QZnGzfcgd5d82UNveiwgsR95VxkAQkh5eQH8CtCnmEynu7xL9wDD6DzbFXre3huUQotCuREbREzcL",
  "key44": "H6HbPFKFwytE7d5u2tiTkc6dYWCvbGCp8NnmxZQzA2rkMdjFy5rsqgmA33Y76bDw2SoDctvJiYFBSHqSJkdKJPQ"
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
