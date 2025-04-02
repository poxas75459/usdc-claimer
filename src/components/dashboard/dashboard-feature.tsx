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
    "o3MAx6xz2kM5QZpmg8apt8ntrHGpFtHXrxfGzRhRsQvarqGPdZBe57NQFJxdFVqu5fd3JrsqujuuNxE7EMpxCv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HNjRDYQk1hrxSwBj53aE3i4o8TRJNudWvn6drDqAVegic2b2nCyg9eDZLqpZjaNydbjDi4ExQxLL3jKWUTBy3t",
  "key1": "3w4SKQhQFYtfo6j7R9bBJYiz63fitURtHNUkwgMRAFdHWjQvrpCd9byMk5xntDB89WqLfpoMoaJ6uwCw76MLii5H",
  "key2": "56uXeuJx5LHWJuimJUj46JatK1ydBbjxJtBzADijqi674CqGv8V7DjSYU28eytmwSRA8jzw7StmdBUmFtqJGmptM",
  "key3": "3QKURtZqcZ3FDgWGhhnxsmwHCbKf4mQBteo3BpXTpo8mNmHt8AXqJkSWuMdwizqUw5Vd4wYHbM6zFUF1NRJ6onqq",
  "key4": "4cFpesFCWFczP1TYBga6isgrBAthwVCbKL4gaNj2ZVZ1sZfWGrPwnVZdtAiJFsrB6MowU6QWobPEbdQS2Sg6RccC",
  "key5": "2jLQY5234uzepXFcM2CHFiQAxXm5srP7P1vXtkvXUUJrJFQ7NEgksfpKQadZxLauvkzDndyU1GjdcaBDQbqwwtAM",
  "key6": "28PX5pJ1FCRiyrwwfEZNUikq7wNqMYbdS3RXQ6WpdkE6GY6ahfbJZc3HEgUYUnjGfZLyY5rZy8CFAgfEp6VXFKAr",
  "key7": "24eKtyKESmj7xY36XMmNNVMLYCvqwMHhF9SYji9kdAbEDr5ePkedwu5v5ojyZf5TiSTycrf168B69grnCFfn9xw3",
  "key8": "4ru8KxoZnt4vLkSbW1JhSEDZq2FmvbdyuovLLujxYPmwUBFTCm3SpxwHngSkBtabTKRXtBV9wVkzJkzMeMBjTwEA",
  "key9": "3REJe5VkRSqhsKYxkPdXyT7CpbUjgg9zKr2RNtNUNNF1gK3cv4rfiP9vnWKUqNgseJdEVq3sQZcFVZptBhoU9r3F",
  "key10": "3YQnNEkJBYtTz86ZJRpMeJixbk6qXzfbu3LgSy6b8BddXk4SukVxBFp4bggqFiP1Yrtm1Yh6Z73YYcYdgBrPg93b",
  "key11": "ZHejjd7M4PGJnG8y2DBe9vAinAXR5wssp4S1V1vqHSvNbSFc8czKN9dU3YhH87x6pdfyQwJFkoQnhy8g5bHFYjR",
  "key12": "tz9cMkTw7GJcVUJtPM21xFVtFNVEZ5up5kVWQFP8rjHgundiuJFKExErAvKz7fDrqiyXPaV7Q8YVQGyZZaBRHrD",
  "key13": "2BHWXTDwMxiQE48ZmLFBjGK1WhwN5c1wrX1Lu1JuPrV5qcX8nm1QK12WUcJZBzHeFeRwsMpfMkCWNVoE7hR7U1RD",
  "key14": "3VDR4WnZDtd8XXx2JXUL9FSVS6U6Ab4sqnwnBQRnRW8WdaZnQBT7RSmPCLe5C2P1rn84njji9p4E2Rc5tGRgVD6u",
  "key15": "3JNAUg5pt58G5mmtu4Dmrow4pxbET9MgEVGZPSsbwufJ5dfRpbFaaJub83JDrSxPhhNf1Y7evd36qanchbznUtHG",
  "key16": "4smityjW4LiNdX1BBz4mSBCdMpHgHB3j1bMu6csHZkhDdp75Jdfe8okZxrizrZQouXHgdCAWEPjfyr7QY5HnXxQH",
  "key17": "3DRhcay19HdasaojxyRJPMqE79CRDv2mhAFjUaRuFUPPJwL2FJfaFsyKff8VZwoLvvWqcrAHyZCVK2FhsNZPiRJh",
  "key18": "3KAhvGysYYKo4jZ6GjhY6uDop8VPkDvYs7Ei6vGuLxZY3i44mKXuPbYznz9eVs818ZgwtaYN44k4mwfKiVQD2wpg",
  "key19": "2ZeWtcz7e6f4QLqWJmRq8uVbfY5JkEJ1HuXhBrzjGMXhEe76EATPoh38jQnneCRpbQV3CXKQsE9DAfEhv4MUQFgx",
  "key20": "3eMJubKhTWFSUjo6XHJr1nbN2eVdMmekKYuUqokNkgKXXFAXpEzkiWLCEWy3CiwBTx8wDq9gt6oXZDEECnRpT7Sn",
  "key21": "2noTqZU3EsJUeZhqa9RhKpjHFADnMS3HUXm8gXU9HexfwT3dPmxV59ybhpzEvN4nYLQ2jXhFQ8uS8adGt1ahxSRS",
  "key22": "5UubBAaast38c96EZRbBghJmKV8e9jyAfJHnPVzaFvSPBg3aumM6g36KoYUDzSsLxKrWj8CNmhxt3ysuFb6QMwHU",
  "key23": "2kbSGKnULuvfCX112TCJ2cSv6rU2YL9hSHuJLzzqwVQZEGkkgnhyLx8YSEWbYdKyp9jUx3ANywKv4Tr63Ds9rx7h",
  "key24": "3rw4YeiWyzYFGZGWjgV46CHxfZuLZGYRmMqqyVcYY38zLNbgdU58PEXKvaPhrzth7izWy1kpVjcMxU2HDetu3yJN",
  "key25": "BcvmiW1wn6Go41478a3612FvKs7u31F1qE9ZUVnxrjMCq7nL9AE1PVvWFxajNySWFDScuRzKR2iiy9ojBdVMb9r",
  "key26": "2awa3cF6ysqP9gBGAYCyFDmdVbgf8kVgfP4o6MwKwE3eUWycDT1HQrfefY4JphqYaTrXcG6Pvajbtvej82EdFr98",
  "key27": "56w9VD161gvytc8DJgihWNhz43EKGSULwjn1iuQ18NhJ7o42Jq9UccsM2JN2MCZ3Hx4QUWaaguKMeQGecDDeeqRh",
  "key28": "5xZzEWzZFZUXeXh1E5VfPg5aHYSwYybQA23fJ2BGMZaFAQcHGazStiSN9YnmNY31MJbhF5P2A1Y5EMJYymuiwLGn",
  "key29": "24cp3YxyFrRqLJ8bJDcMihUZSKFVhQzvRzhMinXWrSgCeeTxWLNavYXyYXnkR4vQboWeHxdtpDv2dBHB4cWRBapp",
  "key30": "65J4LPe3P53wyzCBzgJUpEjjSa6nkT4x3rMkdPbhw5zcVCC3QPhmQTiHbG8VB2Fkv1aSehSZxuikXCEGahJ4W8Y4",
  "key31": "3YPx1RdNUQzKP4vT7ADtedr2KzR7UibEboxnwkiSccd4UL6tn1tJGBfhFbViWweDz59MEU3uzC2qPwCkncjqGqMW",
  "key32": "2pmJSbiagtzzmwUgmCyRJWtuJ7A1uuVAnGsaSTQFERuTTcMzWvQNmMYeYSNQtG1B1BTL8kxQhr3FVSqCWxttLdHA",
  "key33": "JhwhvsVKnA9ALhkX64HjNCnk9SymuwzDZKuVhRxmJvTN8oXoCszP9BG7cvX2Xf6WepVyq1ZT34C2EUPzrGTr6uX",
  "key34": "2wRXWfEr9m789Tuz8BvYyFLD98cKW3xhUyDcDZxsQNVqLJMTUGNeZVLKV9pXgD68L9xwVvUrA96iLxQZmr8LHSZS",
  "key35": "5FSyZHXRqVhkguZ5CJGJKiWHurabAq5p6tuvtymv7D5Xu1yXm98uTZ6mPiwgMWtqafkBcvPupphLv5JCApYrvNWD",
  "key36": "quHs7JeipMK7XgYZuTFa1CM7UF8WjJBbdjjEJbTnymtSvn9UEAAYULPguff7FHFFjTLB7i8dGbocqNwU19PuwHa",
  "key37": "5tXTUcKrDatCErS6G9g2476hV5f1ghmKgKNsQjA9ueMLmeWaYp3BbH9DiQ3pZrzM7rjBsMzKirVv5jgghzQSoa96",
  "key38": "2u2g7GFpSbPxm6kKxiQeExuJu9QACJRuDFrChmocUSPccuvVC1imgBJBzyY1BJtzfv5g4HdQN1nm25euDi3vce46"
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
