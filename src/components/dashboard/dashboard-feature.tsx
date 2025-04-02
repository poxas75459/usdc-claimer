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
    "4PDDcKiayLhv2ewQFvRZ7KroctHNMN2SqfN1pdZnNnF9CKHWAEWgkQ7e6ns5vPztyqqfNsJFPBUs95J2dgAQbBmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nkmgR1DMmsj9Xmb4gyEGCWbD3tJqAwv5NeeDdjKLFixkmUYQqNkohQTkYpub5ugFZXEoJADLRWmxpBYUpT7euVj",
  "key1": "4ntTHTkAZLe9yXKZz2Jo4FbXgnGeNY1kDjUutjKsFVBfDzfye36vD2Bp8LggQoXKQ9g5hgpqgMLETzgbxPBYkwEt",
  "key2": "3RNtNAJsYf2vov5hf3G3SNUsHRBAxQ7r3EQ84CSDyk3evAvJWbL2gYttvZpn7jpNCaJfF9A4X8bDnMXL1wUj6udv",
  "key3": "n4zw2MLGagg5f6aFj15A83Jfd7VS4GYVHdXQs79mN98EiEkiY95UYPFPFji1ya6yMeRKkZWDD3fu9S6WJudXgAZ",
  "key4": "4mc3p25HTsQoj7DY1HD8x55jbNGRTqXQ6zVjrQ37APG4fQ3XthT4h6jJqkUPi2nXuzcWuDGnff4TrivbWmFhQrkW",
  "key5": "3gPfaYcqW53ytvfZJPq3VDf5f9tQFFbMdvvXcLNfaqAdrVa8NFGNnMV5chAQnYjoUqEeKWTuvWVpatBPWLfeBvpn",
  "key6": "5DMBiHroCJ53pDjRRWCzRv5evB2STmNQe7pK6uvMkKJPnNDxz9KJWCS3QremNdVn2TPQdoyuAK9iefJn6AAij36G",
  "key7": "4nLTKRCVsKWAD3QPHKEUCQgbWQEBGtNmLhNpNvcRu9ezu2LvcEktZmDprYVM7SV7ERwoKYR85Ysez9P2WCkhSYyT",
  "key8": "2beNm9xcHhVt8Axkx5ybjz8zHWSeK2oGdRqgt4ZfanrDiGcQUhjHsuVhpwzhAVGJc6jdt8r2KLE4tKF38sTfaWEd",
  "key9": "3pwFSADwYLyikqaq7xPXuRSEaHLBdqk4PES9q67xaEMatRhda1YTwQeoC2DXdF3AmE47iaqcchE9dad2H2sEfMh6",
  "key10": "2TeDXVeoHU1S1Dx4xCyYUHjNiJ69tFuY8D2yiST7fdfmk5LA4ggCCXnCkdfWssmCMGtVpQyzYqgVj57BtoDkxwbH",
  "key11": "3bwncZ2fAJHPhFvqX9mNkXq7D4gsb4gZSQxq3QAGebne1hYVrtfhdAFJNc2SnVHyyuQ3D6xqsYA4H2hoiD5wytMu",
  "key12": "4C7gdfNTK5rZHogqgyKcmhD5ZpUGsdFhLj6w7eicf6kKeTt9JiJ3A1VDecnDvtGgLkjvPxgfHMcVv81Cy6azruMe",
  "key13": "5ALeqzSPQvEBSJdds7uUd9onTYqLxuaPDzm13nhEAi4Xy5sPV5HyQSFLQozsZ2mubdYCa23BAubGR3r98mAyoh6F",
  "key14": "3D6E3VtQDisSkdJkS6zxmyEcUW46eNV5n6Fo7tdAHdN7tCykGf8LhvLLbbtwHZe6oUYiNTCTpadwNAQi3UMbGNyd",
  "key15": "3qmzFcAwHuExqNdfsfu3gixhczYXFRGa7jHEwmdB7vN5F6jdjVM5WrfWeTH9o6ZA824DkQqyzbGAH9qDkxJgjV9T",
  "key16": "DbaQAD9uZretDEQhAUz9McjrEi2jUjEG8a9VJ7xtzEq4BMTsrenbk5pmAHqqwAeFMgnHC27C3fQ1ewTM8p4gSeg",
  "key17": "4MAXhRU991uJar1ELL3ZfXsiin4dJ7rpqq9tqfL69kAxAaGpF6ccQQ6ySUEpNv7Chwpf5HjhhzQiUjYep5mXVrQ2",
  "key18": "5oBjrY7gBn3k1rHNfVtgose5fZiDqX7NiCSpuhw7NS2z7ZgxZ7nnF5ZdDPKaSosevMUBZACwZMRiz1ewiDvuZWFQ",
  "key19": "5uJgh5G82HqD8FNtFkaw3K4MWEXDmSmugPNizGYudmWMZTp9NgfAKYAKThtPsPMSHnvVFbnfcD3brzP7sXqBQs5s",
  "key20": "5bysdxkJZk1zkRxYAXY8FS86Pogp1v3W72cBnQaQvkKnUzjXUFjkNXfHVUowa71rR6SeaMHVgiD8ZscgEK7RjfXm",
  "key21": "3T3A4EfJkMwe7bwj5XW9zQLuUYxeoXYgXzdDFvSsM5bL4JbrNNHzTyLABt8hDi8buVvWFGAk9P4So2q1H5NsNLE7",
  "key22": "5yhowAT9qNZ2G9ZQ1uqjup6f58eRzk4FisG7pmDNTeUG44Eg5yFtJ8Ze1FJZtxvV7i3QJCWvC8Zp6akWjVivLRGy",
  "key23": "5zE8kCtNgM7Q7ztiC5gyzivTX9c7LaG8NqqMH4gijFcT2C9RcBkLZ1Jodvzy6ZZtZjJ7SzWYgBa94YZsAomhygpW",
  "key24": "3MpAXj8NZCTFTAebyxhwyEdoBrPmF2cEB5Gzsc12RDMTVHJ37AefxwCiAfrkQpb4WRcCba7siQKKrvkW4GYZUarW",
  "key25": "2DPPWEX4igzW3tPYbpfM2re2LLkDLALEzffUZLj8BXQomXG8pkAASV8BWqoTENJcbBZ5dEBLs69c53SnEJN1BpwV",
  "key26": "5muEQJpTktTAW2ikBiuf1LYevZizofhJFYXzLYms7GneNheFKbtWa9sRxy4hyBnD1kDbHCeBtJvjWwogDZafKuSK",
  "key27": "wQUvWLP1J8v3siXeWMHR1atvYGdviVuAC5zprwACejqgThgLjwSsJ1UMUaWynWe5pTEou8XEConicSu7obZqrEZ",
  "key28": "etrY3Ky4nRiF9cg27JA9ZZuvL25zt7NXaNF5Mw6SgvY8j7R77Y7d5Q55Nf4KAjJGJYJbADvDL5SqMxjTfzRfhkM",
  "key29": "63eKhiDk8s9f8zfHe82WJTBcRMqakpp3NT8wnFc7TDCSc7z4ztCwhnx2M7mHfexbLCVmMjyyFBnvQK1zDGmqTHmF",
  "key30": "4uR7ThWQdRqJZfNfGkCzDx2xz2Y98NZWTqd6Z8EJckTEfoCf4raRUna4NiwBfZ9drtoGAu1b8t7o9sStGDBgzPwk",
  "key31": "5th2UfwmUzagrQuYSkPzuef9TTbjXRPLcabNa2vhddVvmXpbfvP3GgafFWdAcV8dAY4DeQ9fT7Ae3KbnkM8hBPUS",
  "key32": "328iforqWPvQTXHcvfK31RLMDuudeHRvPXxGExKyiFrwJmxgCsd79PHTdRm6dYV95bHAqymcuNYB5m9tXL7FhMua",
  "key33": "2C4DehsqoAs8ab1H7eDuMbxRWJecQpuaHjEUAok2UYupiT8B56Jtaw1wRD45dG2RmY9JW7DmeAgLg7EgD84NC497",
  "key34": "2wvjiEkcgdtJ3EAvFXHdXmKkec1uibphohiWaeab6orr4RhjFLSeGS8h5tSiwWQ3mUnZ6oHmqUR3KHsfMReg4FmT",
  "key35": "2rSPKTsdbKXWCmsFqM3nQdHkwvAQFo7aM8F2LeomjaBL2D3oXzNzFYKQUa3AZH3wRpav9vYJWkxCfWq4uSpQXWTh",
  "key36": "2UCpSRE1ETxmh8rree6Ty7ui7np3eJW4Ff7hmVYskbbSs9HdUMeRvJkczVCVDGiuJZu2jXZj4MGeTwFPcZEumuPM",
  "key37": "5F7n5LYxvFNAwiw5vdq2MLBg2Sv472Js85sBr6DXiBHjN6QpCjAiFj1CdtWbwiMwARTSSkYztCgYxdwvijWGuTUC",
  "key38": "2hWfdpbYiPhp4TgXh12ZrfCnWtyD2YKGFESGsoBejnyvQyX46mo9UUYqWaDLVnEEFeoD4Tu21hL4ZQxkqddov6UD",
  "key39": "5TfFZsBRer12t22VrvyhDHUJKsFJJrejzQBrujcJ5KXxPhhQpvc17NY7N5CTicKGWWU36oLAz5ZgAebVqSLBjeMd",
  "key40": "5kFk7HMPaFufeMKWJT7oEeyaedEdkvowjZhndcBVq3eQoHZERkcF14z445fCYp8WrA6iF6nyAVdASZFLFquAP4ne",
  "key41": "5omqZZCiC6CbCpbxY8jwgV2EegrFFdi4oN2xLoDbyCKCSqYyUGKaTdTHtSkHA3w2g15ivT13ZKhTFd7aFBiJCAo8",
  "key42": "EnpEBhnmK4YHqmxTUSVj9KVHERfWTSXXJrEy88QzJAi8uii1wp6sPa19HnkDSUzzjptrPnoZT5x5cY7BZ42NtAg",
  "key43": "3uLotHbZJ9fE2fVjEFEU157XKZjA7heBTn1NyZyEFimQp7aJeKoVNMfEstPBWNPHxtonfwHSBmuP3Q8i3UAWtyPG",
  "key44": "mQXcHAvuL6gmM6NS5a5yPXZfjAPkdjv8geANm9KYmF4Jw7NorepU5sAmKkjHjgRo4AnRZU534Pdk6DjaMDinMtN",
  "key45": "7Q5X5mXWhiKCGa3Sa2w8CYaJdXn8YoGez3iW6JKKy3WeJcF8n3Dn6ph1EWJHaiNFSdqfFZppAQs5GRwFdnxmz2n"
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
