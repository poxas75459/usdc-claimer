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
    "3awiK19BQ3oqbLyNDBSxzVMisR5CKstbY1Bt7dK7vKbL2JqBB6m8MaEGY6PTAEaSGS8zVx6rRMAxVxQ6UKgP8n7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJ7RmF9naXpTJbeXv8E6p8w1QMnpvHBCdY5EqcWVvD1RcbCm2UmuWMgmp4Nf7Jmf2b5jevGJNHX3SLNhZgWLgFR",
  "key1": "46u95rQr33VFCyuFtuNp4PEQivxsr9RBwdCWfRDL52ETt4zN7PtnzoKDeBXkaBHopCSnts72YQyf3xpMUaFC54bQ",
  "key2": "2WwF8wWbZcvNSWukpS7iLdUgymdDHfE1LWDvcFuwuTvGsnZ2myy7TbHfy33ELSQGSCZtABuEboaMzo7G7ypd83u7",
  "key3": "5A35QWSKwqkFQV8EJqzBYhjJknV1cguvJqgMYDdm1HmxqVjoKZ8rZjBHJnePJwL2HAWAxagb1cAGcEbfKz3oDddL",
  "key4": "uegoUHq4CMzpji8qk4PdbBQERcPXacVbG1igW6mSv6iT9nYwoSbrmZMUK9FKZHCcDuTxHpBkyhBx1joNzAfNdbv",
  "key5": "4iAV7ZksZ7KWh3d6Yk64YaUzteJddgPxDq2iHC4kYaJuTBEW8uBTCEMUvFWDyFf2R2BmV3DMdo8kWUEKGbbUbVKF",
  "key6": "EYctg6REFmunn9jC9En5YYoaYr1AeE1ZCY8vVjHZTeoXLVRT7bnofSKZQbQToSyDVweJ952i9fTR8XwwVLpzf9E",
  "key7": "3jyrThti4JYuKUDayBfBqPCHDRHAR4Y3QJTJxC3LAY7Vuk77if1gUoXJrjS3Zunjh399AyxnMcQh7a4kCeUy4gxm",
  "key8": "3GYuTe2FsqupLvXpzjdg3Tw7LBZPpdGSYvS5ivPLW13feSSRwvHuMt18yAAbSzoeqsyYXbeVXpc6W8t7j72BBtmE",
  "key9": "2gWX58SYCVdgusJV2MYCrFHV3uf6bQiYVdYcZA9SYpmW59mfx1bV2Q2fNijTfg3vrgRFLx3ym3kQki2iNVKevC7E",
  "key10": "4BhupoA8Y47TUFEmwtYLB6mwa45qs5ppn6mRhhFxd2gyqLRjamjXm5U15edDjw3Ry54CnddmavQzNvPtD4zu3UNP",
  "key11": "47Pgg3qvXPDSiqbV6MrqCMWvovuF2jqdgyaw9wmB8dLXU4rXzxAMtGTBh89uRBbftiAy8ssNq3NTK7pZhYcjy7ed",
  "key12": "2fUf6HcWojQtQ8G13CPVfSNZMAv7CiYGDJiXuVwP5QSNkGxhDqxe25AmPEgGoc8MYBdFqz4wLXeJ6zWrodF64C7f",
  "key13": "AEJwGobPcvSNdXqAA2EgnaX4pFfubhapRXu1hSW56eoLzdhjiK8AxK17aEn2nAoH77NgfjaYVRMex5DLtH481Sk",
  "key14": "2mWqMoi62XK5dU8aRa4C1utrsHW5CVVo2szsJmgu5G9g618ZUtV7pi74vs5DA9sZw9FBrPgyaemQJ3EG4zUnYYcW",
  "key15": "4ARmtX6tFhn1BeZE4jNk59dEgGgRi6CuD3RGA77JN3tH4F4JGtAeRQD3ijmqqMStxbnJ6H28X4V2cCF4yGJGZo2c",
  "key16": "47tZdtTGFMyLt39TcwVcyghSbEfxW1ZyehQ2FnP1TzL6DPW58iAKtAJAVkLiRfDqsFzySKmJwczt2umXUGhTPVzo",
  "key17": "nV99zdagV6rBAL4xqbj4b9YKuYUatEXfodpsn7zxHYCCfM8wueF6TAWGo5e3hou2Y417X1fqbkNYo75Y48QHK68",
  "key18": "aeBRq1W5sDetZ8F1PcLAxmKYVq8iM9TqSnMmhTTQs6XSzUdpb9nUWAxVVqSS6UzUr22F8ByAbqmjVLfkP5Uf2xs",
  "key19": "3G8ZLY2P2UeZKvLr6JEYQBsTZkYfAiFCWit3x6t8DhtLveCzRFdRSp4ZcJzuZMfuHHaZ52SZsYfvBjZVD4vqRHt",
  "key20": "agh7R2DhV4NzS9eHaCqR9bTtUcCLcTzEAVH2rn4Ai4s5UvnR3Ka88HLxue2pgqVVwagTJfnaUUPKGee2jA8ZFGg",
  "key21": "4t9jytBFniUWANaoYoZSDTiAseuoiQKLBhBxinE9Fg1PwBbiPLik82Vya9bZDvqzqV11Y2eaiGSxFvCUDNB9Wwyk",
  "key22": "31sYrV8Xx3ivs9pRAUNitMXFHx2xYLvakAhZ3iGEhupd4uRqzCrh9tUw1emo7z51Ge1s6vRvwEJWszQva6Z9uqyU",
  "key23": "3iLo3w6fx1Qd9mmEQqg3RCq3QH7SSma9Xa9wpuEpDenfB8c7mxWSS9yL5H7btLLA7hBEfucA2tWttHQxxtrpXSHA",
  "key24": "zV2BNSQiRAvqpAWGSYNWvysSnhwJ8pipVBKAonrSbC3EGaasocXCjdhQB5QZiujZ26KdLajMMmfm26vZMegiYNu",
  "key25": "5dZahbphDRTqdngaQNvo8PbhBJTd7JDm3VHrBLurFmXH6hcQzxWtWTXJmBt7PGjRgBDuDo5cWdGfV1UPayLqfVbZ",
  "key26": "yVjbmUosdB6RYSvJShRiHuyjYG3SZ6c51yzDyGoa32GRt9X5f8neESjjokzTG1DutYN64ase3ojvyhS48nCB57g",
  "key27": "3Q46T5c6Bt57vWEWNQ3NLjv7KNGZvVJJUidhXUnpVT7YjpXJ8LhTjFx27jZtjvuoFDbdTqfQbqSXRDUGyns9kV8N",
  "key28": "2WaqmH4c3fWNJLEZvRu3SAL6YCaA1c13LAAi9KJpuSsAdZyNK6g5kRJZZZX9Uw4UccVxmVx5KauFjh37bG1mTfJC",
  "key29": "2vhL5DNYPZZ7aQfQFtUgTvB2VwvBhccLLteWpfocBQ2kAito8xnrrB442DTSUyLZqqgWHL2dU8CARPceLxGKf6wR",
  "key30": "3AkMYP9mUNn29JLxNDf1VAmtyk9Jg2rKpBU7FQfTHv1WgE3FUyrgw5gUzy82PQtAP8CRvwo5RoRfFN8dBgH999wo",
  "key31": "5RAgejgsoBat4dsRsbJbxWtYDosLGauZL7tkbNvLiE6JGZynTDSW8ycLWtYz2aLgD3o8hGYHco3Fiy6T9K2jhtLA",
  "key32": "55N8eZYhmsv9KXX5NNtNYfSdU8usQJJJxqbQpNeDzEycKbtW6vfVLtJPDuX2JdBQu47k67t3k9kuz5o6v5DAZxFX",
  "key33": "3aAjfEX5bHEXHpmxEoBqoAJByPhAencbhgE4Z34QhunKcYindGynpvkm7Du76AG724v6ecQgFJDx7WWaf5pB5s7Y",
  "key34": "4zBqy9eDZoCsYCy4JbWLtkA1JJmW8NS19RDCoE1LXg8LGmHimWA62cGWi9ruLmK4xfrCMuqR37qdz27UqDYm4hev",
  "key35": "4jYSPtg7fNc8JMh1YrE68epQtyCyKqvq6BjUFCHbWLhq6SvBgRBdyuVqnr7c2u9oJDtgWY9CGFTgzTz34osRMyNW",
  "key36": "KcALx46JJhySxpaVcrTSuVh6DQEa59kBjLGWJ736fUs9NF87uH4PEC6QGbooExDLhVD9YKo6CcHFiUwwGXQrKTv",
  "key37": "31ttVbkz1sY3WudjsRwDguFGg91f9449xGQw9ang9gXHjDaRytxPTMaCK5HrjL61BiagAJKeQBXi75MzkcVHidTr",
  "key38": "2mWAZSCizyBs2En4fZxdXPQHANeppuTqvica18nW4HFux4eZ8bbsKVLo5oXe6K9yw9CuV8ubn15fcr1NEeodL5rj",
  "key39": "2m9c4CXo39Y9i3ZV67pXk74W93DhDNWJydYMzJXks9wiB4BVkESJEZgfKLVMGs4JZFCDR8uqgx5PBXdNpXZTwRwH",
  "key40": "4hQvdRbeyt1sEK4pw1F67skvFSgVFAS92zDLqVZqhyoYD4AQaUvVDKE512NGeY6YvTfvPGAyRRkRVPnMAKTB5BJR",
  "key41": "4nGL9LhuCCttCKnQaS9p7inQZjV9WAFf8hQfFnMC1riGuBtT6GUK1fCqcmfusWcfA2L5xjndr4RMC7NSbKuUcDfD",
  "key42": "5ruJDPFX4Yt4Ki52d1HHdtTxusKaTDVYL4FwgK7bxW42aVh2mrB1RGq13LmkLQpF2qoLZpvYYfjqV4hCMGC3jxhy",
  "key43": "2irFiTjF2p5a7UKA73BsY2kKnkXQjXnCp1WiME5hr4dfWnCfx4segb6mZisxG2YypNK6DdPCUN43sJ5fwAMKDKqp",
  "key44": "58P7pQ7YyCcyLFfDqs3pSyGJS95r42JMCVCZuRAC8EmHRRR46Kut1dob7xQXHJX5vktgg4gxW5qtdUBzXNCuMGzL"
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
