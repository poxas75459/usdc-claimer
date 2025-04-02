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
    "2GMSnJgTWfYxCvji7qQhbwvM1AGFaaLUDJixjoCoTHpA94xpuRRoAU6aXjKAV3NFMgn4coB4DNatCxctw8KyHoge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfAzhjqUEG1qJWBhRkPqDLqsWFfti93F6Jkcfs1en3q6AQq8kVpHmsHM3ttMjNm6QEa24ZixQU3oULgByVT9wUz",
  "key1": "4JJFKBxp44BBDjxFYX7oBRLg4Ahyp5LkEovqg5dzoDwoae9QMrKNf7qemVPVrxVS4M6eXsu5tK5ypD53yuccDRuB",
  "key2": "f5XbSZhb5DNGUi1bsr43qu96PyLhbJoiRiPJXqGMS5j34d9gTCMGQySA6Z2DA1y2HwSQ1RqfRXCTzZz2kEEmPmx",
  "key3": "Gw8CJA2fQYfGWMumeUURKTrnUvFTxMQKiQBdh2jPDtVQmh1UBy8654syH7toXq9pXMk73hCjbNDGZg1oJRf5RN6",
  "key4": "5BFdur5y1WoV1T3f13U4HMPFb77hCYVBbi2wZNPvqKd7Lf1g8MHpAK2xQb726ifmmaoDmEpXe9uCn3cSZfZEdDAA",
  "key5": "ki1C6W6sF49b7jtyh4bJ4akdLFohobAsNcJTkHNcYRLbsKJwZGuH7p8i88mAcmJDNweXT23y6ujs1wJugj2Gnoj",
  "key6": "5TH16RA8zQbqsYyz28i2KdhgFqJFEMCHLL99jj5JQ1EaYWeEKm1kDCTZ9oWoAqCZ7mtiAzziGYKVYFucVHe8381P",
  "key7": "2DUqYhb4t8Dj2vDtsj2eU5FH3FnVuHS9jnDLpFQ2DHdSbfq93Zu6zrDjL9YzUcLeh2QT6SPqEovEqCrjDNM5dRzW",
  "key8": "3iQJV1VqCzoPDggfTZKypizxJn1FKnVBFnnx2v4chvErFyjFivP8mGrkT8EHsLjk5gMZRP41Uxr1cLpUuGwZLM8V",
  "key9": "3JY5YYPgEZhLD5sTfDxh19VGRUuZc8bnX7pomXDgs7rntaJkAGv7HraE5pNPU31PxGyS4mJRBShHDHfBbNsuiVCi",
  "key10": "N9k7hko9AXs579x1nZvxTcyKgTbKW2PPohzVKnEFVx6q5viCQCrZKoDZg6xrbygaRMS8ittytXFrWm3BnQtjsDe",
  "key11": "jvYdw4Zs9XHLUaDHB3Q62au1FCm3c7sVfQPXxMTvLb1xhqfYqiYmETMwcaWV8r5R5fsGQwZwcLqTczVbv5VyDhv",
  "key12": "3k8Bj8oa3AqZjb5F2Z2Cw8k8Z1VbcYSKEa1XzwJLgXTPbWiekYCgCHCria1qgqMYSPZk22idd9zAq2s15AraQJf4",
  "key13": "5rppNUEMzjPn8GtVAbhzzZgCPUDkzt7XECbhMPfcsQTrLusdTv5hEFN74GsT5P7tbQz1CLF9oDykUGYJEfsu2Le3",
  "key14": "BTnFPQiSRwSZzXrpBrJ3XqnFv9eUqfkzhzdLKjLQci2WneRFWEy5xyePBDNnp58FPYyjPpYAJrBYcp4c3QDyeSC",
  "key15": "5sZbmV7k8wc414Nz8Lt5mehENFrMpHy5y6DAtXTospGWbotrAgJH5xU9YeZAHxWNHPB5QKyjp6wCKeicN4CnTQdi",
  "key16": "mhnrK3JJvMw9drrnPe7DKkyJsR7ndiGsbzC1LLPc1pY4XcqtbUURgYisajDN45xAu7aZ3aHzsaJmhV3gnG3QbFA",
  "key17": "26AXHWmuEkh5XiqKKTd79JPe7skTnRvZmLc8K2u6zpe698FakyQiLXJ1q3hNzm51edDXt8KKA8W13iwdc97TKh18",
  "key18": "3ZkDEnJQw517dQP74Zyh5NENU3pCdt1uTgBg9XWjCMZamuFFsDz3uUkKmej8oynyGEo7DSeeqvz24UfrDukne5Vc",
  "key19": "2q81QpAMdrHbMpDb3iKAAj2wo3C9YCNtABjz8SPmwRYtEh2h1HknLcw9Jmi7NC7LsafWYNdbXJftq922uborZN1w",
  "key20": "5x6ZKsDhjaXs8h3FTtNr92wStjKau4HbXMiqW4AFT5biRTXY4rJjQ6V4Tj9nnUJZpXH9MEwR24TW7RnEyWBwuKAt",
  "key21": "2TPkRDuo8UewmbMHhpzj3WVoLWGjyK11GoJtQuzcYq5ndsnnf63BjT3Tr4qVpF4bxmwknHSxnSsiS195v4Eo6Ywy",
  "key22": "2MbvwKFvPC8Wu8XNWi9aUcmbmXPqg6gSuzv4rMxJTgq4sMSh9vGMq1okms9MHrGWnaog1XpxqRAdbvFVYJn11REG",
  "key23": "64x2UxBmDVNuGwJZ6vsVHB5arzLipLpuWWNHsDrGY7RzoUkr7NrFt9SWdMh3sqega2y7FuoKpjsuEDQLMPwF8FsX",
  "key24": "47dyerayRUU5qn3PNoaNz3QzAJ5G2mVj2FhCvuRHQ1Eve9W96mS1AvQ496rBx4AGTp32U3FmCKqsekASbeVDxqXG",
  "key25": "2c8rboXsfkEZsvdSyUs89AcQwDarnWsmq5dfzzjNvD3wgRBnNvQi5PoqJ78RgbyUPvCjGgjxf6wsGGh5HBzZ9xKY",
  "key26": "FwpSuV6NaHxjh6ZpxVujx7ACRZ1KXxAU4Raim7WbQ4viihFaKEXgc7QF1dvnKqbMSrKASk8JCrWnNZQB6BWU46C",
  "key27": "3h6SHpvuaFHXXrZWLA6jb9XxazvekgmJzHWZYWhmWgrYuD2Yc5JmRo1sD6FJc1o4CdGrnWT4hteyHwssbjoXgoYY",
  "key28": "26wdH4KQVrsib4Lh7sV4c9s4copPhGaCYdtDCttybD3ZC5uaZKvkagQ6e5gnqG9hMVqeg9nTQqMt8XsrAjgtYFa3",
  "key29": "4Vxc3JGML6sF5VRe3apS6qkjSQNy4ZU9ZVZabEYGq7SQD3b35XBRDRxbqk6Xq3DJoqubzFs7sWBzpr8aynPgYTch",
  "key30": "3EiK1dJKY9t8hm6TwLYoxJ4ZDHBwxnpcArPJpMziGYia8nQ55AdJKF6cH4gj4z8JVmUYabK6VG6MWJYmA5ocp7Kq",
  "key31": "j1GZ77MHhk79NhgzRWt3EG3bhyWy4QJkhWReWLLCe6W8nyYQMrfxoYMQN68fvysTFe3VGzsE5Wnify1WjM7DF4T",
  "key32": "5H8wbSBVyp9gbnLJ9Ncby2D7nqNrVQnS8TohnWgsWGKFsvdZKFUfGhy7UFgjNQv4GLZNcpe7ShKkfxDBRq3mY8gc",
  "key33": "3pdmJvoi5WnVXDbs1ABiSvzTQv3nkuTNspJiKUHGL4BuzkhkTe9g25M5uB6A2g6VWbYUz2M5Uwv64YFw9EYw4eQb"
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
