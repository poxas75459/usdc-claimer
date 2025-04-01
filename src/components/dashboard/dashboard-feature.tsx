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
    "5YDTqNAnA9snc9P1xRx5icJJaF8BDfpSqg3pipoQncZqWNBXKxaU4BpQUjLWkodBhyBz3QYPuRek4cY5Q2k9J7r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSZfJadJATbF18TS6t2mCirmhPBzzpNcYZBxeTZWFRidpDWXU4UNwqhPZaZWS7g25SmZ5ybUwTvjEU1UBnxHJw7",
  "key1": "5Aq779yACegYBxG8KNj8M2HbrWJiUH6H6K49PiyvbK9gqmbzfwYEWcAU2cRQBBggE7zD3QgSGsMRPARnB68ihBwh",
  "key2": "2Coc3FkAKN9x6R2u4ULQUeN2uNUuan8yosmouVhoxCFvtCAQW1kjikUBuQWGj4TYjp6yA9MZZroS218z9MBkerrL",
  "key3": "3yKn2bA82nYDp4mLSrPzR1nQDRfxjnKu81bq5GT8e7em6tmiXREReCuCacoPwcwyfj1sRAs7rmmVxZXxAfHsTBpN",
  "key4": "csdtPcbwU6whM45DsQqaddG1ktwnWifbsipn38FAwkH7wcGX1PUMRKRMhD7ivugGY8MnU33ZT5DJ1Ki2TstCKqm",
  "key5": "4c9duCtBjgqiz9tQ2EkS3SRmFuHsdCzDL4949Zgq4V51JkmJKpV7omh46UCKoekZGUR24VwNu56vBJhRYzNwJJnz",
  "key6": "2xe9qowbnqroq5j4VZQNA7Tx3FAne45dbAkcU7riEPW6EPXJCYDfjh7Wn2WtitDLwEWZ8Yc9zEwMTzfQvD6pWm6D",
  "key7": "4RwewqB81VSKEYxSQwNQAk47EFjwmeSheN8WGzH1bAL3BzPNYy671qDxBx9c7ZhGVzCoFxqj6kJBuekeA3dPyc6z",
  "key8": "4hVjDhMbuuJ95cxYvSi6uGhGd4uE5D9kHpmtoJfnNpdLuW9ZaFk1qjJZzM8JKQmsxmSYTVffkRZt2FetdPSW5aAL",
  "key9": "HfKhuqX9Fhd5asdw64o9y5F7YCmdQUz2tL9FjgUrbksfj2D8ur5uSWokv8brw638zMqhXGQDvpJ1pz367SVcYyh",
  "key10": "5pCjHhus5uAfzHjJruCrgyCqDW6GmKkTXdwiotdgetgjJcUtFkGsbPQ5WwUNgJZVqdpur1Xwa4e2Eea2hEzBqR2k",
  "key11": "3P5x8UpE7QJHH8hCH7wTTZeFRkWzAyxz21CQngWHq7EJNkoUeEeVyeogk4gYJ5dytbZXUmVwzxZMFbEiNdAqUqvR",
  "key12": "SwDCW5KPKvYqbkTQEm8k5mEiv7oCGs4Hb73dWd7KtEaydw4hEyRhC8GwbyTLAMtK7odtVy4T9oHsdgnWwV2BJve",
  "key13": "26rgUZvbZ7h8bUa58XQtFkivZduZCYwjJKPvUhXYfdYs6ZpQfJ9RyTnntJ2ryC5M7f143rnB6SA1wRXtAW5tokYJ",
  "key14": "2PpNMLmfSbHHFgoAhu9J6T3bn6Ynfatiii2knAN3T41ZZ6pMx18BCgdZ9VuChuqe9tVk8m7oToeBDSLczQoe3dq",
  "key15": "2gaV4eQN8gQELgGHYf6K5XyuNXAZhycP5wPFTgKWUFkS6VWPee21pfrJeoiJaXnjbKro4mSxiTrmMzgAqapvt1Fv",
  "key16": "2ixvGFLmM5h5DcY1sjd5Jn4bGywQ2ZUDUGtjva6tYwVrT1JKxz9535DtGvaWdjhVVWSujDvDp4ixJuX95yVC9gEk",
  "key17": "4qVbdd8mR8u9vzBXFygSmLwK1sH8XZY3Fkmaknjir97kwcHmvovYzqLxtJPDRgUa7VkVQUeTwuxvoQc4jdtQ95jj",
  "key18": "4B5QufuhsCU682qGK4DUJwM3NMQbxQUQBQPcsBkRLLLk4TKKRGaUezsEnhxK53W6PaUz4QsMk3Ak6zzt9eApntia",
  "key19": "2RDdybnWwchWcS1ikemFzcfZG8RtzS1hpZqCGcpcSakEsKW8p73T65RsVqQ1upeim7jjYEpCSw1Qo4UQ2vg96Psc",
  "key20": "2CcAmGWCN6tc8ptQm6gUnnb4heYLKrazyz7jozkUrAxTQAAbJTmLNHH78HP1Rvydnbm32wfuFL38vkNah3fRg2am",
  "key21": "ekSwDroN39B51LLNAdP6ADhkCkF9jLtdNxQXWZVQ2uo7d4NVygWcfKYnrtE3YQSrWDPQqpbwFUJ9qWTo6MJZetw",
  "key22": "qBRZQowFeN74r6acY6myxCG3RxUB2heGYGd1pgidHLapFoXYAb7HACBxRHtniUSxZaeqo5oPx2RXCZEBd9i89Xi",
  "key23": "cVR6RiBERUPVE37HYmsfpCiqfKvqt4bTNBHRxafgDsqMNEQewNGEP8pfSPT3wQ87jtumAFJh4rL3BBQYVXsYXmE",
  "key24": "jLyhpFH5SqFnTv3Sz3cvjjoLaHhnR7WyLMmv3J24c1RAacVkfh7p35weca2qBLi1qojEpfgESGpFJ39kHUmXKWe",
  "key25": "GM8aoi428hmYrLWbDNE8MJpgDyJRSjuXHLVdt14kqf1jmwFFtvwAwDPPUx7iRbYxHvnqGvrTUjrXz7bTzTHHz4G",
  "key26": "4EhBFeJVKQ4rtx1Q1pFqzUdehchbB3VdqBQqBJqNEVutBJvog8BPZiRAQnXCuqYxr6gER3Zh4X8GwoUTLDxQ1YHY",
  "key27": "3vc6CZ74yjiNjbaz8RQy5hXLZYPoQhKqtL4s8zRSVvHJsir3TQuXsf6wcZ1NVtS2rqWw5U2CpCa768yeZmm8NqHK",
  "key28": "3WUDb9iQBAdWZscVcGfsJZ356rNWAFEcx4GFNbwr7a37VRN75n1YpumtPWfDZr97BQsFRed4mb6oEQKZPnrDk9PT",
  "key29": "3BxL2X4FrZTPGRVDBoTasP9UkSQRFgZCDjZ27migCw27RS64C9RZaPou8DvQhwhTHwAcU15iMXCEKj1ewEq61t6r",
  "key30": "5nXuqV4XfwwWjEzGCsAB34zwDC8rncyMCXKGYv9YCc77xybRvsCBJTxw6PVcGRiqdjhHkmc6AVmmuZLJHeDH4pmv",
  "key31": "5x1u5SburGvggvF3kjnmQDDerbK9skdU8GfK1qZ6t3URTsTuWj4toHNcR2ys6kjHt2vMpeiRCQ3Qc4FU88B7jRLe",
  "key32": "3NSUBjSCCk8uTYLZw1w3f2h6xJ9jLmezJ32uE6Q9YR4VUr9SfuN2nxDN1ubwgB39FEpWx2xS8pTMH2gaPnivJp9E",
  "key33": "4M5515xBZHt6GY3VSzWBZwkv5tr8S3dqnEGtpm3pTckDHVaun7LHbwwfcZWgB3EDmzV6pjeXWuymCEqeCQjBmZvF",
  "key34": "4DPjxZ3xUjXmYfaHPECqaQCkRcsohoEr25mt3u6y5KFPFxbNgxUC1z3d2Ron8nj1eVcQTVQLUaca7TytNbuuM7pt",
  "key35": "JSyh6XQPDzg5jNKPMBW92BFuaEtRqz3w7TttvTf1YdAKXZbhe1BHQNTmm4vJGKjUseMWr2VFRS3NXQujkNzgvGE"
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
