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
    "HDcP58dt3u9RjSJCY1USYUbNydJNvE5fhtcFH2nneMjd3bPs4DueVhBYQqVUPU2U5V8AtgVKbaxXzD6Z3yCjZjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P5Xz1n1jWfY5H9fBK2FAXpni1ScbD2jqQUCHmG1ALo6akPPVyLCQ3Ma8BKCq6H3ivL6ZH6DqUgewMJhg5pQDvcE",
  "key1": "2pu7pY3Rdv7MYZbWzdQvUiWVW58cW3okS4rLxDM7WEw7G6DUxLLxQ97ubgJBLSHFojkX9w9oU1VyB2eeYb7Jyuh6",
  "key2": "4kTiu8V1dvgytP2UMZ8ZFjgALZUyakCutqhAgu7njdTVjYQeTe4JvoRJSe2w4hXgihykw6Xr4bfMvSyu1hbt4Txq",
  "key3": "3KtWnEfe1DbecaPE2frZLTrMYnXvze2CHTxYrfEdHrfPi8MHivysRaWfsx3aCdztkzWkb4XJtYA17ZWshiNnXjK6",
  "key4": "48hp6ocGRtZ7hBTNEJHiMtjmmEnTAcPQDEwKWot7m6sTFPwzAxLvVnZnTbzYMRYBCVazUNXGLcBwtr4ufFNAvU6h",
  "key5": "37RHFiXU3STgNmohHQ2vWP3SAQFCZNMCChkeULtvG6pfjtD3DKg2NwFL63YGoENXAneP5NTL9PZNDFYzpGNkoWmR",
  "key6": "K7i4KmZcEByLP9b8JuEVT8vNncR1fPRQSoMtwXRNxNt2VYejCcr45AmLw8yFwYjg1EJ7sVt6hFLSLMVozeAM9ND",
  "key7": "3N8SGESAsxRZkXzA6BCxhRCnXMuBEP8xzNdqUSzcQpWa81U9iFt4YgqpfA872YCCyWHY95R62Z9dPwNHXUhP78ut",
  "key8": "5KFqzu1NRtNSi7MYNEQX8vrLARNWzNktgD5M345BR9TM6ckHCPyjzQWaaJGkCikxoLFioc5QCduEmPC6d4bkhJ1w",
  "key9": "2NPtuAQeJqrRVxCh5A6xmgWb1r3mtY49papqC2yYqZFzjx1CtLbrvGaNEpurxBoZ8EGxeBQEj2HKVq1ksqPbyfRc",
  "key10": "3wZF1i91Aat2svYvM3fRYZBrhysD8XsqBeoZgaz7wNf9MRzTjQopcDMpTNfsWWyAXCV51fCZGvFsCX8wjxoxwXDA",
  "key11": "2wCfCTvPmLBBY7e2m3bYSYBd6tvkKPfU7Wem7BpfSfUVvujKTuanJau1UQjTZLUyPWoe6X4AsNpGzWSL3iNTftoA",
  "key12": "5YNxickphdfNEgNWu6QtzbvoQkqcTKigxAof2eTtRVUUJttL4B7mjATLmTg9LVG4BZJ8b9AqDos2tUSgQcgf9orY",
  "key13": "4j3FnaaL6hroCV59xnFudGZdijPhLfEgYWoT2TrggnZr8vEJj9eyq3pjnhQm5nXDavkHKwLoWyN9U56BRd3TRGfT",
  "key14": "4sdKvD62XR3d8gEYuh49HTU6BrhbmS7LC8WSVC3wMyte37hdW8dUd1aogW3hotYdyodTzAD8HViGVm4od4xTGGS3",
  "key15": "2QspG3WBuMvyyFyAve7ssEMz2UNaHerDV5d37TABuMVYJVHrQs7tnJKr48mSNcL47kyZn7oTimV81Jdt2wYvgHnb",
  "key16": "afNkYSP6e9gu2K5FLnZ5mYWeFSRSX5aFiUo3wFBnXVg3TmBtcFpLKdso3HWkGNM9rT4Bf7wcXwRsroWSZVqBDGz",
  "key17": "22ZZge3tukukk8P7gG3PF9c1yhidXyExRHWbb4j5giQDd1jkLiBSY9aspBJjiEb2KBsXJDDbeW3FAnvgwv8QxNKR",
  "key18": "2BccWwJReMZf4bsTGuLmJs8asYuv38mWKJkmM9eEZeK2vAdLng1KzvnanN3ygqhgr3ALKLznsccNcYWYVREMRhBZ",
  "key19": "3Min98zphEfjRAg9JmJ6rFKikUjJohQFLXB6cY6kZSdvQ2KAARBubmSVRZ8P7gViQyM4RkzeshxbkqY5Bw8rxqJa",
  "key20": "5Lf63yTBchRc91xjqqyaDpo2dwD6o5JtMjkErFZrBvxVUUbPRCJYr7fRSrKABiGsZsjZr2hWYBSMfHtTUikEAzbs",
  "key21": "3x5hosn4g1jRp9cXxDEAqq79kiAic3aes2eSmW3JTkkWYAvsYvfqe15dqtavamEpRxQ2NK6NX3TzZCaqP7QiJXfB",
  "key22": "4RiiaTDV6wjvokTGvGHNgkGw2GDd7uVaD7aRDpDTnEdBvnLX97qnvjyPCewFMLPMhPVBdC51amfU8Xkm3WzZRYAz",
  "key23": "5ANgpfwVTFxGNCuHjm8DjivpCZUMCM6fVovDtDATScKN9fyLdCfYo5b7VkGT18Ea4qrXDRygBhnhw1jp12RCnSUb",
  "key24": "3MWe9AzPSCefJWeDGjcvxBsKFsfF9MRA7YBjzjGx9muBvxamnRXznw1JR1cxWFNfRFYTpXybdTCNkdpAFiN89Lzs",
  "key25": "5BxPo4DEsNNAdEK2E2B9c7XFKSRBooB5u3itBsz9dEZjHmLtEM6dYcdMZ8sonYtoFCW6HNnWh3txia1itgejyWSe",
  "key26": "RpV24aJoGHMqjVpJoUXZySf9Ze59XjSxckCPeBP7JnCSZmrwfWqpcB37ouGhf7mv5GrmUG9epkwf9G63mPWzJKq",
  "key27": "3rTHwV5EY7bx2uRGFRcqPGX4XPXH4UZDSoU1YZd2paUC1BaKQd24qjimYudTR4yH5hoJxh1t2RzL5K6jY77NwVq8",
  "key28": "5BRrikWiV1Gb5vbRAzk3d5FZbpuJez8ZmAe9iZr5nXPfGG89aZU7LhgReDANK2F3JkACTH9MkzGzCi3FGUn21DRm",
  "key29": "36FA2vaZRKWcPUPC7MJaCGj82EPHPvZd98vS1aqtsT7oJSKVx8KApiEfAm4q1yZ1WbqZn7E4N2adNjGAsHsWzKxc",
  "key30": "xQsZ6z6NELgG9aePhjVawDRyXe4HPR6PpAefsr6qsdYWWszAVHMk2hhYNkvMx82KPQX5kfan5bYHgi81BWgwwC1",
  "key31": "4V68mScJjYPrCqzXvKph1sE9CYsfEt7MUmUZko7mKj3fDzNi2wZZ71Kq1P99d8KrP2VhDGv9wFvuthMDhZTUhai7",
  "key32": "5AErcheoxXz6aingozPKvuMJRhub7McCMMqLHncTuX64zUS6bxfWBXFF9oojTGRA5QGeR1tDSLToJ4bDA3p8ihzt",
  "key33": "2K51EDHRfhwyusUukcuxVp9BBaV22YRy68JeGs8WhP8UnLUxfdQShXvEUKry9gSXV7pEAEAHNxbRa4Zb67V6oVG1",
  "key34": "Ztoaj97q7LUwskFc8FHwZJpzKoaM5E543Kmkyi7gan8DojShU9TBeEV8FDDjNJzroGS62i2U7rhJRQcK495DMkP",
  "key35": "2YWEjM3WBHJr1sg5P9hcAEdSpUtVQetQzxGw5dTEHgpidZjmiTa2mDfY2gPmoaYF1xY3wq6M927uHTDUxTAsus8u",
  "key36": "5Hvvuqn62v8nrDfmPomeUwtzh2LcFXYCUXkcrubt5UWgXdiYJCL9tCDfPty81FNb9nVDq3SRTvzTePZBCSjP1ZZv",
  "key37": "HB4iYAbSLjntvvhkF6a3VYPUo84QvdJxV7ttp2SKyicSPmKG6MYxWcm9DP9fqt1sJPb81qxxk5VgdmbzDdHLTcQ",
  "key38": "eSD1nZA7EYygCwwWfAvYTyd7EB3tKtVvkeCFiub8hJ7H2Mb4JBbFyj2D5t8h7skSQN7j5ShGPdUYN6z8fpB1cRw"
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
