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
    "PW1AfMaAfmE3HQxAXy2b3ZrA9phoSjiXsuDrr9LS4t1ERV1J7TU7tcKJvVJUZdmN27j4wwmf5T7VW4H48kN7gY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoTLeK4mYf29e9oTJ7e2tNZFtjAmKv7a4sS8rmygybXongSaALrCu3LwJ1B69z7YFmAB1hcVaQfiuVEjHkJN4qj",
  "key1": "PJ7DtC6oyhYZM2D5p1uVGyjHeVvCTNGvLx3He6JoReUYp2VEZ8b1rF7mivSuoJ3Rr2YRzGdXEakWRGyto4N5LbF",
  "key2": "34ZPqTKYDD9xFdhB3gvcMAK462widFWRFjY3nYnBcsPe6ztZV6oSVxpsSTmRCaixAfx9eKY8gcthej2PYFErLMB8",
  "key3": "hQjvFkVF2E5Dcv4xVVcv8SLZVeq6nvJq4d3zmftiuRr9zkqmR9CukaDadDxVxNWtS14qyrYs7EfReeV9tKbP9YP",
  "key4": "5yF94wBpSpqLFgrXq4i89RDkt1wCJLrECQt9HHNXDe1pGuqJeZuLFoGVVwp2o3CLqb6ZNTXBMYdNkXbf4V4YSDYx",
  "key5": "cgbhoNHtVfxiemktjxoKAvtLKgkzHNv4kyDVj12GqNfJeRG3cVitCCXbgVAxEsRfkZ3mV12CzbRBrPMz8Kthmv9",
  "key6": "ULb8PQwYjNUStiMEbRmDmpzTsjBNZPZiS7sVxy1By1ZBg3myF5ddLEYbMH5QwvQByTB9K74MfFsbEUNKShERXC6",
  "key7": "4h3iyeGvq96E1KUCWyzPFh4Foxo3Eqs8L2vXpmNw4BJJ2MaktJGaKh5vmhEfWEKq18gGsqj9oZqHUzsTmNrdpQrV",
  "key8": "3D2HRfsXsVdE6LwgTrcZB3xd5sDFVn6pfyjNZPEkBv7sDdoQgAQPbo9XSkL1B9jZmod3mnYFK4WWHC2XuDZDn9Me",
  "key9": "4BG6kqRERsd7G8iHRJb913zTYGxPVQ67XRwHRyUDD4rfupYBAbPL1BqDKxVSxTrBzuEgfLt7Wmn3rvE8gPNXHNVX",
  "key10": "55LCCSgMEPgiKmFdyp5BcRd6Jbu1xkTDrH468ysUXyZZ8VteViAFjLJs6VM8HjSTekshWGYuQxgAC2Rr4ixQ3fpx",
  "key11": "4uFki5rZXPFfM2aZXp2mwAfaUU6AysfJSM4gtyqmvwpQH5udRCJDmaPVmwNAdmw7ySzCwSKtrsHa9VuMqg8g9bQF",
  "key12": "2e35chMaGSKEtp93fLWdsjHxMD1KDqxZvYzNTpHV2pYnr4RbLq5k9FovtQ1NT9J7JvNzzZdW6LLdwwnjv9xtY9Pu",
  "key13": "5ZWEDpjhyRvKipuV6KPqafweTi6bqT9eMcQ46iagPqPnd7JT2v7ipwpfmfY3JDyqbamiSeMXiRAnNQk4rarMmJcE",
  "key14": "3ARxvVSMtvFJ1Ji5BuDkCi8zGvV5LcMiTeW4qS3MxLfAqJpXrsFwd8NFtmRgQ2xg4vruF7uTBgqMkzuVnmoEb8NL",
  "key15": "4DSFNtjm49U2zVatAZz6Kbim3uMVuBJnYjRZabDaezqprJgon9M7DLmQ3VcmUQPgPTtrxqQUYUs3AHS424SbAeWC",
  "key16": "5oWwCmZ7LWbxCjrYofzo4DsdHVpBpc6rGYTAsHdYiVufUU3BeciqeRG4YrJmxCXCFKpkwQxcaA85McDefb66o3DU",
  "key17": "4idbZFsj8RuMVSkDQsL91Wu4JENfJJ2YNsHwU4QX2QhnyoGba9B6u16MuD5h82SPU9Yhx5B4EipHBT36VYUpuER6",
  "key18": "3MNaUtu6PwzFqN2rqbEpp54BTdmCwgf1vznzcSUzEpL16q6GKtWX8JaK39L2Y8bUBYHFxp9Bmm7QhJMSQohwHzMV",
  "key19": "4HAwQkuWNU8izBTWkumHtdgkbrL9GvBnNXRD1yF7ECyJXd7MoJi5uDiyiuFLGf5kJpaHisE4nTwa9j2qaQ6299FF",
  "key20": "4qVEM1bHQMnNLzoijpVGB9AYH9wcYfDicQjoD7xREV1iFJnjJATJcrj4YbGL552vAd3b97h8Ds3aDBd21JYQ3RVA",
  "key21": "38C7rHMMCC7WaC78mYdeMcJSA86Mp5PZ4sksttTMMgPNBNxtq2kz3D4k8fYiUzqqP1kUJsS9Q5aT2tiR6dYQYk2Y",
  "key22": "53hyumvEDwKPWjAGeAFjGLfmT8k7XtCVNPyWZN81fuSPfaWdsCbru8FKXr8rWMVN3mfjkseRjNzNCu4eSTfEn9tt",
  "key23": "3QVEFfYHG1hSdht5EMPoTdyTxaULwWSR6jQNiDEr7z75bLtd5BrJYZHppiue9yNovjVYWkWY1xwfR4f6PVzG9rJy",
  "key24": "5AdRfvdFg5Z2frhSuxAswe6rorrycgxZfokRA178THC8hzLcyWNdEgwmtrJxMru7RdubWa8tE17pzxLydeEP2aM8",
  "key25": "ZRTS3WGqpC88Dg33x2DQNpmrtA6eQTAJDafz7hnfzMDXfs6eE2TV4Nibi4MrCPV6Pd7n4xpZ1bVxhARKCckK72y",
  "key26": "3cehfEmJm94qaHw71zCPDXQm6afvHXvBdguHH6LUftbFcBqWun53XPmtTA2X8ctxo9DAz9M1stsPBNbfbEGYK6vk",
  "key27": "tdqMaRiJo7veJkDopyNyDmreubX9uYuHCmAu6wxn9FhquuKMApSpRwvMLjYtESKPnVuVAPJi9JPx6Va4V8fQ7yn",
  "key28": "JdMvMPRke2SV3auNPnfacVoKGogT6Lne2fTKPFgRmKkLr9CSHLEqfVy64CHA13uyz4RS2kKQX6J831vDsaJCGdW",
  "key29": "2Cr1o2NG6TG2eini1ae2nZ5ttgFouxiMdkZqBWeMv4v1H26cczEQVKn1M9jMEkBoB7YVLo3PJ6Cvvm9oZdtHqaN6",
  "key30": "2kjVfRcqGcJqHfgjN7c5hsiWCGmiQzfUoM4VSidiWH3oBjVjkpujdppMDeMJBEj6GCGnQhn5fi7ZpYPMZMDPoyid",
  "key31": "5xQqjhxCNAEDG7yajJZr726p98K6f8FrUB9Y5WiJy5PWU6QZP4j6qYe3QbozkmeDR7bBRNzjBpTXRL5WEENzPbFd",
  "key32": "3dZcxr8Q3JqjDBTVGcGZrgKcWBvez3tjkHdKJVqy1UkPW7kNm6k5Tigyt5rG4jmpRXpe6KtB28Tb5YKxrfFPqtSa",
  "key33": "61nJfktQgjcNkEVzR5WbbF4KZpn3ZBG9D8Nczr94wiL6sGVRpBvMZdQQnWjJ9vDpwnAacNSdVDcRmTtmwnYSxqyS",
  "key34": "4pt39APv8QwzY4DXSLAPF3k5X1tyWQqxnusKdoTPn7yjXEznUjf6515EuF6Fa8DDjF5GxgsWpt1foGiMxdD383AF",
  "key35": "3RChyJ8JHNH8qQi2GzVnMtaTLbX14rCtH4cjGvVB2PfL1XqVMi6UwTf5tLURqpSgkv9Q8GYSZoGWrv8ERP5kU9kW",
  "key36": "mhVitbpxjemQ6qyGcguvN9HLtPdZDiYY69AqdNRkf6zn9xrtPXZMiJzQkDaBHPS2CYnwksSsfuvi9EowjCA8bu6",
  "key37": "2JwCYDZ34osiHxfsRgXZLbJzM67aQvrosxN2FqtiAJqq7xuQWrqJs4wFFxNQP2pNJb8S86xTabZ3u1xCBJyhb6Rx",
  "key38": "4KKGgq5yk55xhEWwJYAFGRsdAwPxGoFymhUCBQsmFjVyU6aFxrCmWF28XJiN1f93K6hXwXuAjeUC4eZhp9CeAmws",
  "key39": "f2o9EKsRioiHmLZz2qsubULbVmtHuquMmyxT3q4VSUvr3fT34SoCerbLrW6T5ypUGzFRgRb22FyW2cMgNC7LDLC"
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
