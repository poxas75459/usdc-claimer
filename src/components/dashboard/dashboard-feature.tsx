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
    "3KJs91ZhC49afhk5pNR7aBxva9yt91nGMthAi4Kve36cmwkZUKMLP4ZXshUsSt9skGEFg8qLzeMcRWLJKFqHuhkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hv9YW5bSwgeURHbE5j4HxWcm9tQWfopn74Ki16mRe8R5heTukDQ8tG1ZXrrimMdQ3fi4LGY5kuFvSiUgVvexAA8",
  "key1": "5FPopvg7imcf9Cg9GDidwzAZmfdNvC4mZixXcPQK4eQxM8pWBkHMRdGgbvDmKBtuWoqa82s34yC7nepbWUaKgZia",
  "key2": "3Fm2mFTDAniBnoSWnYQasxg1o8BPY9w4db4VJuYW9hZX6Bqzo3XDXKRDFoEHnsSa9Yk4SVK26RFRz9aQgT9Agqvw",
  "key3": "3sfpw8X2AYCZdTroujJsNSQ3CTsfuyPPFUoQrf3DDpmyLnusYBmEk9wA3vfGW9orDScPh6cSm2eZtZh5ZAiDjkvM",
  "key4": "4DeiXyXA4FM33R2JYE8TpTTQXaEdSTz5V7GLfLDQ9brsDNAPA8Hy6PV56PwocEcxLEUPzNFi8Vidfua3CfdvUxSK",
  "key5": "4hS4ReR1d4PQxnJRNSpzmLGvBpZzyXpJx3zSezpvWasYf9NWgj3L4LhWrPsU1Be4EoEt2GR9iyekTPP9iN6eZmmV",
  "key6": "5TUQZz2kSZbKurfBE4jjyTdbynYkmZHhJx1yfYeEycDYEKPxRUvEW2UE8ATHkw9QcfqVKbcwivxeQM1aqDGhuCdx",
  "key7": "x99RsmRq1QjW6xT5jpp5DNubvGk8d1GSSZAzaF6LmRcUNAcDmKq6KdCt4V4dLnupNQJJJDH9zouLQNZiinjm5Yv",
  "key8": "4NnA8gALU38vnk2pvbJevWGvbdXxWiGXC1FroDiNcrJUGyouCzfnLd9jn7uMr3qdL3d1P9uHWXFE7aKoa7Jz9Q8C",
  "key9": "2NgYP2EygoMqGWWV7aVJ9CyzRyAWsGxVNm9mtWBrjq2XGoFLpSSF3LUPaAibq3ebFRpD695S8Cd21JKzsYcfachA",
  "key10": "2nD2FSVUbWQNwtP6NjLvvA8YsrZmA5vLFjmnua6P9RY6p129dFeSHP5AtV64X3jFUfNAjbsXC9xDGYKbtP9NzBQK",
  "key11": "3BJUvYfrRndhYBB99f7nhVZ63zxe3uWzUfSdaDwoZWxgd2wXn3sPJ6bUeGFwgcXr2KKayWNUN91DHM6rxZM9q9hn",
  "key12": "5iZGeWgVHviY8XYVvkbkc9JUazUMBcECjSXbwS4vJiJQMuffj8mcu3AFmtNSsQ9HKzdFUxks7sp98gLSiAbmNNdr",
  "key13": "2ZfbxgYNzs2sPUN6hZHjuYaepugsRqjVTno7pq7xouQfeasRVWgu2GNUG7CZeqL1h31m5617JpJGt5E1ogDZYCc9",
  "key14": "zkBLxDACZxk8CanHtw5ojd7kYHFAfgJEDwiRJZSXwQkxMzKTyoZqUBxg9QCirLyndDJMSXrV3o5goRBJc2SftTp",
  "key15": "32XjgLb1D4uQJKGZQXNFiCKTQccZ8nnhaPa47R7fFJPA3AeRGHAyCCpo99t74RSmAMv9xJm4pwhqL4LaW8MzHkJJ",
  "key16": "4Hj7SUW3vQsRezNo7wiG6PfH1JDJXGLBHiT2WejQScAVvRdw4k3A8sSRhSMsMnXkNKLqYhdsbUGPLL4nU1ByFFYw",
  "key17": "5eDE9KAFLAbRiTZY7GzxF5mqaZKQ9Gs9fPaBw9RcJPkjGEJsVMfExDauWPqGY4gG7XfUaZvnfKxHtNQ11Z8ieMR7",
  "key18": "8b6DHBHtwXmCjcqT7idGLWowjsvokZFBAu743zqP4RgYJg1YSYrnqmHLsEa6XhJJ3feJ2bT4813xrwvHidfxc8t",
  "key19": "i9nUDBUQMH3Arra2qtDe3TdcghMDzUaagER4SpkvYu6JGxXaNWEAJRWYisYNqipycN9sCGMH35NrHUEHHnRkimD",
  "key20": "5ePpErWffGfXPtEfsKfutWfmejKEBSebEqaYoaQ7CqEvDskcGBDvzGyLztAW2psPjysBt4CWBwscGejRNNtVt4sz",
  "key21": "4XsSu96Hw1734dxxHZZVpGUrfxFCjm2m9iWt99XtZok57MJUb6QdJF4qJWmvRv1wF7Wy9c2iQf7wWrehBMgZ1jAg",
  "key22": "2cmZLj4zboWpPbPV3PGXe7N18q8SjqQ2PQNU88SxvZvkqzyXdG4AH7Lqvpr96Zm8ai2ZntCdVuDfMHJf5mb4Y5WS",
  "key23": "47AutVkdpE4tuqrFU8oxg8s3A7QM6SQXfFr7CCZS1EnH7CkJWi7AtpoFs8Cxh2uNPGn1pxwrbiThgc3tu43MX8qU",
  "key24": "5WGnD4Jj9umY4qZoYRYwfiecvp6pdPPMy9W5eUBiXrLSkmymYTwo3s5AzVAG8qFhiPP2akXSjkvpqs6t9MToLE5v",
  "key25": "4Gsuz9K8sMXjXPbutsBY47SKAHEJnwzwwSjuWEgYAUhufdVNz2zQUyGntic26oUCGvZnY8DnU5YgMHzSTVEYM7Pc",
  "key26": "4xJcide252CgQWC76MF8ve5DMV4xE9iHiUVCgFxBeNemXKrwTomPwMM524tB3eBLpcbMLv5UXbMyA33a1c3u4sHw",
  "key27": "5BMwo5aHMbtaJLtAcBNJ4nWPMuGQtqjWVnaQihTTKTiiP5b4KmRHWMuyJFnjFrHA6kHW9oJyMEcJrAwx7QDSwkwy"
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
