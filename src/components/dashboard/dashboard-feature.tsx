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
    "3S9vGFwvmse9FAcS1CK1ndrdJKmLxJSRwSha3a5kgfk8dXmu8BBmJnR6iToEqEsJq9Cqo5WjKNPbp5TiaNFVTyXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doEmf9HGuaiSGc65bgdNp5M4peuNRHp4hCYdApVy1UfaYHDSNNrHWY7xr1Q1rhQGTWS1XuwzU6cBrew9AarCpqr",
  "key1": "3epLuCA2fy9tRcxbLHGKkCdt6ThHyA21N8GQ4tFefSEvxvxXpzZvTub4wsxWuDwYg7kTugpfTkth44F698ArpHve",
  "key2": "1PqxJsDs8nqhMbe6ss5EJswVxYodyW98nZSEbqSj78XfVJur5FCgsgpKSzUkWTX2mLMC82o67rrMQsysNLjBEbG",
  "key3": "2RK1cpHLpZTAbbdLvieeoiXXtUuLc9BzqDAq1XkChH7B2jytBcfJW73WSJYau48yU8mQCFJEkieJDUy1qhULErSF",
  "key4": "4AhNu5WnGKNqCqsKscPNUcfgBFSK4Hz7S4nLhhDiozkXuZFpbqPJa9SzRW718jp3KW9fGWqg3SFFpfDdvyFFcK6Z",
  "key5": "5uwzfJ35j4cnjriHEHiEmqzkuDAD6RgbLAa6dT6KFeQqwsRt4fWn1igzjzr6myXrLCUENg3MFEtxPzEVwPxTELuH",
  "key6": "NVNh4ynHAyvKJZZwcQ8TaVqGqpbXBzKe7i7Zi4wQv8Y8aGD5VyDvqCBvQjxvWgYhWLUL139vaNEL3HuALy1vu58",
  "key7": "3QU8UFcStVzBrPst7SYRTnRV1P6hyZWWqxop6n3QXFSootEkqzj323mZmTzLneMTMzzzJQXNLw8rEKa6rAhH4sXq",
  "key8": "42QLK2ci4GYZ27VBYCq2FEfwccwqTJJMefs4ah13T1qzLeFvEyktxrcGpeQ9hkyUQgYvYsCnPk3PLPaqFdjWJXjh",
  "key9": "5BztBn3KUYQzLXWeG8uTmLdqUY2HX8qZjxxTPrpHNz6EGQtVpfZRLd9jVjEKnJSEo9HD55sDvzod8d7qJYjdxScv",
  "key10": "22SMPMnDbgjcBm1U4VoD8e6Xp231sfRVPNPZgr7zcZDwoBNnk9uQ7GXzkFfXc7u6GQZgDZhTSaoudAXtrMicCixP",
  "key11": "3A124Qx4rF8HFANVRiN2BksRpieVAZPwWoBtYVrj1ZoDY71bNoCsCZtmNFGcFDGFN6ed2ksS82WxqqioJACCagkj",
  "key12": "3wpFUTASevz69iNUBXk7EZh7FLfg8c8fUcCs6WsSHRFqcCoYBAKuRwnLzmTncT3KbXB6mPM5MGBtPfrg2T9cDyNC",
  "key13": "2nAa54b7FWDXEnTcJGziNg1SdDZnMZsgHjfehMw5oTukR6NnFWZZpSqabKqwnQ9aVY1Nw2Y3akQvD4vNN29saHsv",
  "key14": "3Bd264EpHBw7c634RCYjSmrPYWu6rpnZST9wwXf44EGJdHH98mwudDrd4rSJ5yxpHZKQLSNqDwmxcqVdQaHHYryq",
  "key15": "3FsJA8Rdex1TcwQAZ98VKkNAcVTY8gEQV9bqgPuigNHjhbte4kER7tpKpLVf4jfvSDHnJBY3emcVFYZDp3DfmdMn",
  "key16": "KfYKJm6uaBF9ANnzZT1NCnriPqaAYHGUfJ8qjxaJ2nnZFWvyEbsGFTJSmHc9n1btPcTTBDG18gzBH6oHed2DCam",
  "key17": "5qfkxz2v51jfcjVLcFN5sh6yvsG6Ew4AYcDy5ijn1wpZUvLQodV9egDtJUUkUCopevAYA4hK5yN19f8g1AR3gEyt",
  "key18": "3Ywk9TVSHZg5325s9Q2DvJdCQ21sZFMxHMKmob6qUdxSUAN9xiaH4HWBSZLpya4Ht87iAJ8kQYDnsukv6aJ7K6R3",
  "key19": "4oydqeZBPhXZCUyCvze8j3Ki4vD9T3Vz7cLX4v3WJsWHPu1ibHzRnK98xcyVkYM3anfKfTtcTBm6grWwRXjueYJz",
  "key20": "3uV9sfGw5ncwTzSzjTEHvW29A1cPHq9NCvqNWAYgpsSz2Zs3ipDFQmksr2yMAwjyN1HSMoEjkFKdcRBsaG6K7X4c",
  "key21": "3fekQs2AqUoNb8JGifpfED9zhw9KptDuCaVsX912QQZ2essj1zJdgkrQYz84Q4wLiwmPm7MLUjpLZRXmTPvssCAW",
  "key22": "yrfJAoaiiPF8bcRQz2fYoykU5fPVjz4DWQJKxWDyyv1SdCHihQcfPQWyxb1vmjG6WdipKkE4JYwJKb46KyfZQWv",
  "key23": "2xB6oBQZinrYfS68kmVnoG2GbC9y3nBFDVP5PRKSbsoHuEAWG7xC8VwUBdGkMxScJgtrPeFRrKhAkA5C1JmiSnNP",
  "key24": "4CgsAcRiZn78HTf3XKDx7BWotLAA6WoFPLnGjbjgu1igduQ6vMFD2hx4Jqpf6g4DSD9BHFuixiZjM1ZkuyGKw9GM",
  "key25": "YLUdUM7jDUeYsGa2CjJonrvKNi7difS8F3afPGZR6XwST21T7KVWWzkQP37TraU3sma2JS9R5ZiQg8AypofCUeC",
  "key26": "33hjhfqByr2XtDCTVbQCfrnJ7fWAXrWmHPaxoPNXvL6HRCKfyq28hwrpRQdNgp3SGjJoNgyaZjeswttub77MtGjC",
  "key27": "QXYC3VftA9fzT7uGLHJQUMfBpV91d95hS1tvwEgXGq8Skg7HdVHCHJBwMAQbXAoaEXGL4LJ8tu6sXJwGwsNTeyb",
  "key28": "3QdyM1PTe6af2ZsgHgkFNW3XTPRL7e4W9YBeDhti1oShqeD2DokmowyxgENG8FFJSGzrKAKwBYm6LXXCJ1r9XQix",
  "key29": "42Xo9ABwrfC7gPxZ7knGTu12Ynz8xUMwd4VghATTKManpg3nmZTSqJdurw7atZ8dSH5tBDQ32erKZtyo9K5HwpZA",
  "key30": "2DAamKBNQATFStb53BJ7utQnEcAVrfTQAiRmYzWhc5ZQsxaKJ3XsTShuJ1o3bZu8bkxwWssjEjdjhKXQy4t6gn7o",
  "key31": "2iALdAHQ5zgWUsKRboXkn1YwqFBjjWoKJLLnUN5rEPfd1uFGdAxB1C7SzygwRfAKuQdJAdcwHX9LVZmiYYo6e4Js",
  "key32": "4A3PKB6MiR8AWQ8yDVxaWHyu996qvJcLkQbyLjpat1Q9JZtthKsjimK8urTPe5vsuKJH3kVbfzFNvr2K3XuELPR4",
  "key33": "3mRWEDaYEYfMDuKXUuMPFZ7GW6c3hzpzsgE3HtLMbG8W749j2UjAwZwZQsmwMVgGxNMx6aRXBnQnT5AJWokx7q1f",
  "key34": "4GDrTc1GVDqyQ6iU7dYmK8jtZAXaLafv4A1TLPQmvrB4eVMjAw66U98zsRgvpshmQHEGvq2K4AshT3eRd5vFmVAj",
  "key35": "4e9yt9UubWUxXkfGTCd2SEc9sePrtEbrfeoAdnePSCxEgNw8ADv78LMM1mLsAN1ifZhyArYuuwfBAX7MJP6QKBUj",
  "key36": "Xo65E9T5fWuWSoSK7jgnjrHDDcyRqGBZYKxqzDTuXP8Tx6UVZy7P7Aj43TtjkQCqYJsFjmN6sfj3VBJbcACJ9kf",
  "key37": "mUTgz5RFDMqS3tN3DSDCQAQjmBrhMgVsPxckeAN4c9DR5csdaYwm2QLezDsQJaxjfudS7Fbce8GzujLVB6a9hGB",
  "key38": "5gBuvaRjW8wgph4jS5djdVyLi4ExKEabVXkpTi5V2FJBr9GqsCdFu5UjLDUeH6ESGYBSs8e4LmUB47d7Tgk7qVmq",
  "key39": "3G5dDXRbjL94cni9hSQ9ChH7AC8QJX6ZNSDXJ4Aa3pvY314H48grznKLwt5op4BkEix2zCxaJV3nScyvMkVnG7n",
  "key40": "5oUBFPHTS8Hc8NxPVP87UvtTS8vCSvnijLWLGDvuWRJBtVqfXMF8j6tR67BSh9r3rYqaU7gxhPb3tBiV4jUKGSYP",
  "key41": "3K1Q4UczBeMVmYFj6WsJcb5TLGcLmU2Fmfkzs5CSs2TVqjd6jbLBBg5bthZScDRrwTEmLmN42CiBGb2YG3ZM34Q8",
  "key42": "59K6L6eyL4KKreFCrf2GuAMC8zSADBmTqK6Z5179sMYcF5qi8SAeDxCLvufceeVx5yZ9XuoP3eBJ2vkhaPQLZTi6",
  "key43": "pemKE4Vb9qC9VjkixHu3AUGffyoxmSknB1dtfo2g6ZYsvb8uDF44U42jpqR1insovWvEf49QknP3zV9T2ZuxyEh",
  "key44": "2WafaeEr3Bjvexs5tvmRUjSr14JgnijsZDZntoeLcY74S9uygUGG2CWM4LDMCRc3y5wGNtvhtTyUmjHGZrrCdHiJ",
  "key45": "2nSi1WuraBJhJbvB52MycdXdm9cRhFmjxw2imF5ShdzUFktMDG89gkJ4dK5Wh5XQGPP7EK6voXTtxhUFstsz125g",
  "key46": "5jnrPkeQoXXapjwrCs165cr8HD5ZczAWRbNSsrCzaGtHxPLMw1Agvinnhmzek13DCV5jgXkCawN83QtwStgpFpH8",
  "key47": "2vAZvmBAB6Gtwg7Nu21D1tjjPbVZmoW3cjdtvx9nC2h9KmtgJjATua5dPTjPaQVoCRFrot6gKSUxPw9hdrFYwi4j",
  "key48": "4A9gU9rT9wb3rCg15FAHZLdYRMyM4CAytsuA66uXU5Agqwcj53P2Qm7kTq66axqCkvqtRbrLYgAdceZkWMybUdZ3"
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
