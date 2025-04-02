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
    "5NXedXaVrmdmE8Q8bEwB43bqk3ZFzptRe7ZPd9HJgtT9LPx1QMkGh3PMAxnttnVnWrFDiQLSq7v8s4V4wLgkQfb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r34xoZFY1j5CaNAdA6yVCcXD8bvsAxBahhSaieBCovYmxcoiqVghRn5MQf97dU4dRMkf51DoCeXXZE5Zvhx69mZ",
  "key1": "47N6sTV1LS7r7tKHmh6gHpcUCW773uAQRPtXBxCfpYsLH2DDAB2rSEDY5r7sA94tww8GttsWmAx9FuV7ABEWkWwQ",
  "key2": "4GPvZXwJhsWNNEghMU7d8zSWudRGAjReM2iiyaYcC2UJjt1oemuSp8dienDo5Gv3vde1dvcrFHzsnDWMgXqTiFD",
  "key3": "2hCQq4BFLtGYTH6DdYJJRtpBHkDX5UHa8eUY7Dgv6oVaninEfaeS7bV9d8uM6pbPvwGGqzFJFTtYA7tEzavw97hS",
  "key4": "2bci6gfDFHuS7AFLk8aYhRkCvYfpmgNH8gNV9enEjsmu4oqbH4WakEVuQVTPnihGKgddCvD8ssgasqzsjiVqov84",
  "key5": "24WJVTMdc6U852nFpxfzbjJ2PPs4MNEyh4ybs9WJRSNMXHTXFFfiHcePsEVVyB1HFMhMoCiBMjXo2c5jN66gLd6k",
  "key6": "67a4FEbjf5y5GmX8YfnBib5Vi1dC9jUu5re8n7dNpjjFU9LTm4MNkzdx6GUMn4dep4gWwnTKdsfYLy5zw2ABxGeD",
  "key7": "2KT4Egvm6tv4GV6AJ3y7T1N6dpqMM5ujMi23jw36L2T1xZ8Ao4v2DyfRhup7zdSFKtLPJ6Ftiuq8vArvBJc8fm2X",
  "key8": "7tdngZgTE5DrG9N3up23x8Zju6Mo8vVCb4zGk34PuazwsmD6yWQu5eSmC4M7ZANEWYermz6PVB1nEY8prrEx8co",
  "key9": "4ZSyaGTTBTfrRmkuoXMW6WNE48LYpLVa6fe4gAYkwzd8dAz2f5kUDcpmpep4wRA6TWQdCv5EB3vkn9Qef9Kp3i47",
  "key10": "j87SKi6uUxoi1hHcYiTsowTRh5GPL2RbAFAaxhv7YhFdADMhLjYtBSZ8zsjSakaB57sKH5XcyZMHMmFksYUR85U",
  "key11": "vUfquwLVUfTJXPnWHr4TKWg9CZMQ4ojeb6YfYiCsuQ2Mt2ckQ9TCfBoJg6c9SG9v4xZs9bzvtgfJ2MKWc6EFoyU",
  "key12": "3FsuEbzEntNyHqETFWkhM5uK4hyMpYohTEUp1KXrDAsCVjmHmVUJ4PSwyvntUCg1mZxTprUfm5XMbKgyaRFanb9r",
  "key13": "4b6DHeQ8xwKTKAq4JQs5t21PX943rvQ3s1SsQct6cgQsSsSpYStZgsVRiffoTcNBbCHeziodEKFAWJZRayaJxyYM",
  "key14": "2x1nFRwXvSGhjkwiHsWDw9powBChbV4gn5BrGrB5vxHivHB7SFoKPixw4RzdCCAsdQPQHcL1Pp6ubwnzNWuRgMQq",
  "key15": "2xywVWPpsw2Z5SSrQL3dLYoS5Rnu8aiQSaUAE7vxb6oRPvLXXta1JonB6EU5AEmybnkUDZKAbjQaAoHanXevhDmW",
  "key16": "4PAokX1cfw8KsejhVKpY16nZqQQTAkaadSoAzpF1MHGgPEPe8Dv9zG7YsThqHTzKhxUSQCQNgLT98uy7MpaxCSes",
  "key17": "2aEinZyAjFSZnUW3urf7W6EBZrWCMSwMFgcxQAwi5eJsYr8XN2bRR3M76Qt9Nbc7KX58QsAJc6aknnTvJxT8cufx",
  "key18": "4x6rRTmDmWRcGZPutFA2BxMHTDS2jaqZD87uYkeauTpBUxYBvNQv28s6t2tQHSg7545ach2bG4WQNQt89s7GpBzG",
  "key19": "2G7TsPfNGmnAipm89VTDEAL9WemLczRHBkrvEW4JF1kgiPWjQThTSC5M4PoeesyEjRqMwMZhkT24HCMwcfqk2oqy",
  "key20": "38EEhBYE1mYLjhrsHeK5JRfKhoBJ3n9L3zRkzwxSMCeBQmKvkdwewwJGwpVtdaMbfsYiQvvfNCNVAdwcYR1tP7Sk",
  "key21": "3PgZoBwFZ8f6Wu1sno5ZGkUUcEVs1nnUtc7J5SJZTBtvPp47Ter8Qw1a4K5oZq5sRAWn1QuuK8U12fnJtTQVegAn",
  "key22": "4PjwD4oLTPZXZLNSVemWSE4KuHbZcs4MthJEG7UK7Xb2Boc51oQEnGVA3q9FU7KUdEiaWqTE5JrJZNkxz4Fq6tFF",
  "key23": "67K7qk86id5un6u9SEJhznMRzundNxbaxTFGmTVbPgTopWBirksgUgnmK3FnYDE8TE11W9nmLgShwuUESMVm3dWj",
  "key24": "33JxfYy7Z3T5TS7V5EXi288QDksB4kFHWot2F8g3xnYfnBU9FdJShUcHo3SMnZrtLaWJ4HCSBcCt6sNdCBV6xib6",
  "key25": "67kq5tkC3MEpGFTounVi7NDhKJMfpBJq41zNzmvEpJJm6i5zJbPDyFrRxSgodjQHAW6mz8ygrf3VgFQEXB4HSea2",
  "key26": "4fyrJBpYkLwZgUomxh9BjNGkk9wBGPCUuAL1i2BA1dZs3veoJb7HL7THuqz4dHemfhaiwuddLCnb9kS7cCRMPuH6",
  "key27": "5XesWMVMcK7A38HUh1R8z29uw6UhjR2k8CzufDw9D8eFcKznycemecTu9g6Ukd87c2VSE4B7f3dxqZeYbq7S7veo"
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
