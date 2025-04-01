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
    "2s8cXqGbe6w236VpqZ7PTS6ivJYp487wJi4PwLMGAa3tmNw28FUmzz9zrvWENrsHSYrEskGBcRUnu4ivHuYo7VqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1wTToaKmPjT1ZVrXhEweFDXX4LEEDmNX8syvpDo4CirVbKAoCmFXC8uxRG1MFUy96DjNa9pjjvTp3iKrkX3XzW",
  "key1": "54dvBoBnzeGtPg2kjv5mo8mBbQM9gqkYT26Viu38kz6m8j5dugrxT1DhJsjbFoUULRyhsRZEQmG1rYxVoEK8WizG",
  "key2": "4ExWU9GcMqv9xxUa4mtms5J6r7Q7TTjwzMTDHpigjWisqxiDmd6Bo4cDnR1YAU6sPou4xxEk5EcuzanQBmCkjAQT",
  "key3": "2LWg25cHMdXGHYUbBFz95Xn75TWn4A5zTQuGKZuVCLTKcAoJ66ks8b6ZLTTS9iaFm97bZef8jtEgwT2JuegX8XkR",
  "key4": "UyoXU8Xo9KvRMbEFTbiJbW4trtHwKCJmrQGC5cg8mMpJFeiJRwdAanpadWKzbginpD672Ebr2vu2M2DDZw75CJY",
  "key5": "3EwfoF9n5HVnJxiepQbNmzEcXtXh1snn9ug1MrX2fDzfPy4haAgQughZX4B14TJSgvM5TQQrV9wefe5Jj9m2k3WX",
  "key6": "5CdSVGUL13ir6LSTWUKTEFJNoPzXCNNmBH263LFfHxP5q776ivuWJhw2BNwLtMdeYVa6C8kX67hhxfvw5zj8HXue",
  "key7": "5Q3nErDjzERbkfcXbBKFCfwtMitPPBvCGJ6V2uuAnuSzJXJyqBqY4o5h1TGybBkcypg6e9cV4JeXQtQZMYDyHJJ7",
  "key8": "4Rh5uZRPWFeLS23HKzPg65WCpHZYfMHvRbc7xTKX5voNRm4YDdDqqHARXcforrpYgZBZoQtyy1HnV2uYAGz9wUL9",
  "key9": "3vYweU2QP6PS73vrg5C65D9UMKZqETXKSD2BVhCGtjAh3v1y6cr1tEh8ggkUfgHF4A99gszspQMezeN7MuRxxAZ6",
  "key10": "4qL6qFJb3TQaQy17EXzV5mSyfDSaGpXAgzNLL9FHx9FG1SJM1x49BhaGDoZvLt9Abfsfwvdr79ubrtt4LnEppoBF",
  "key11": "2NeAYkUMLrNGCBf31JvKs7dwYV7Mb7uCberFF8Q2bMc8F43ctKHgWTRw4niR1m2NFAQXv5qT1cuvA6BMnHEL9Er5",
  "key12": "4LxyEbK9p1m615fFrkKGd1Sj2mLrh2LsbP6wa6945XorbgUo4wJZvjtzJhEPEXVuV9Y5Y2Ha51miy6KTHN7JvZZ",
  "key13": "3EpiS6GFLWAR1HFx2JBKmMQmxPZphL4W31WeDJ6HiLWpZdB3AG8Mppza14qoZ5J7MUYzmteJ1s76Dp8KcWXRFAJe",
  "key14": "5b3gEJQ4S4VXSC7YKe3idHaw64AGLFkxSiQMpi5VaDBVnFEqgLVFd3Yq5sqqTpJ2LZayTmfdLHQgqDm676pNWxaU",
  "key15": "2GX2iEJpxgbEs423Lwo8LyJH3Ev1vspPPcsfWrfC1sgtLKTyVAm9Y4i3xgX5aYXEbQbZsg5e8B6ofbnyuG1VscgW",
  "key16": "QMfYeBEEemeVyvdJhvFWcbdB7WMteHaHqXJvb3PwnUhssAsMeFhWSoTrNtzcaBAUdnWT51MMrEPLygkMzjKDxTT",
  "key17": "37yj54UpQfN9xPmfPfVUochCD18FQcCLddMyrqMXLu7raNxt7Sj8QU3vdG2WXkTG7MyAev8CbCfRJv4xXoYZ6o6e",
  "key18": "52wJNvMuBZ8R2GKMajse9rP2yTDjkzFK5c7ApETEehw64QEybU2koZyobNC6FEwAerVhm6XjvVbTbsnCPFRvH6Kn",
  "key19": "2teAoBzDqXy9e1LuTJmWvHNS4v3g3Ngd9poT2nA5UNAL2j7jGeaKkudiv39DUQBoW737qjyp4edwmgD9pc27LVE9",
  "key20": "4BpTSW4aYegYLjVoREwtuuuKj1fEC8afrG3zxS8SCSGV9FHo12pfydbx1swJMYiSZXF8uEHKSRAUjQSZ1aaZDXyD",
  "key21": "3Rn9jE5vdNX6BDdkcPGXQGicHUwMER9qBoBXsv7ND5Drchq9CGXA9scgxcgwXVeA5buxcvnr7K8n8eLkJ9k8SdhB",
  "key22": "3KsRWZxF3GZQ3vWRLoF4zqKZb8UNUawda5euEW6oC7W4qkANsezhCZ1Hn7jWv9z15uKk8fNDbGEfL6LL3jr4AsS9",
  "key23": "3AXbBCYJ423HAuyJEkCnnuQLWGiGn6P56ykN93W9j6NqZfSRFCwEiYxHX9bK9Lo4gM5RnL4vtqYwqnMkBRuhqZ5f",
  "key24": "4w3RM3drhjLJDJKjVHMoY69SNot4bd8Hu64ck9YHhwq2xXP1P7MDgcR7gK18ySRGeMKLTMAugBH3a6k6LE6GeE2K",
  "key25": "5nhxRZZWi7gTStDt4LDRjgxBQmxAABz1Ya3hkwJg2xKBAGFXcRtyct7rYVWmPEn24LbLfvZeoMChJ5Hvdmd9Bzb6",
  "key26": "2Hdfqwjqo4QA7ER1CAk6aibxEPsp8xWER65iLQnRMqm9FhtGSBPuvSp4SnwpQk4khSNqrabYn7eA7hcH2aG8WG6d",
  "key27": "4Q9BDi7YVtnteFZB9eo6pGbRcxRtzwQMZECmDYcxQCzi9432Z8DcKmt44H47S5Mfv73JT81rT4FfcjB4Jf668vfP",
  "key28": "tHh6PisMfknynXLRs2SJWe6j4AkLBVfDPyb9BWuwq82VJanpAA9o1BRwQoS9xnEtXSaS6rHyp6BKfuvGdEkR8x8",
  "key29": "Ehqifs8R7a9ip8jCiC6HXLuVhw8kin9ZoTArtKnxW8Gyd43zwJdN7vDQPz6tKV94TVDLRXUBNRhH5nymPh9DJmz",
  "key30": "4NJ962tWq5sUA3aj4gdwoYwtN6zYRdHiN1zzaCyZZuf5cZDfoh96hLEZurf9movgpkapFFgsZqSFZwvzGZcM4RLs",
  "key31": "3hKHuRGifyHq45MnQj2SkRDAqsUfvxh2npgMMhMdy4Xa4BRGucsjykUT2tKoENEVvNZTwCj5eryKK5tabrFuEyT3",
  "key32": "4wqqD1z6xgCq82uXgHAPu8q9AYWi1VMcJ16DaekQiQA6PR4NV7WBScig65cY13NEQBcHEmoZRVeJQjZQLCeR969z",
  "key33": "3EmrqK3V88NKYzPCY1MbWvDEhykgzRPSZL4zW8uzQKcsiaAGSfXgsdSjef4EN9tfjGnXXf1ci4MLrKg3Gp9fzBiw",
  "key34": "3aFMxXKLYZTLFCwF2AUKgwhMeZZEZBrs8y4cRfALXGxmkdXTgp1U3SCRzzsF5xYHuayqgvGmkG61KhLB99godRHy",
  "key35": "5vpsxGdt6ZA4awGJbnvu4Rm6P5QfLst2Gg488DWfPo5KbUkvrUaa68CFUthvRHnxHCzmh1pHDvBVVhJN84TXKQkK",
  "key36": "5H3rkvpZCaF1m2uPbqARyZCsDFhCVLRkt5GC9BBC7AyU4HTD22KwnYCU3hhfdwr5UFBL5o6PDq3VCv3Qnmhh5G61",
  "key37": "5g3Utur4Sb11pVXg7KBFAtK5spicyomf8bQxtuLmnpKVKZJeedQXvTMQBEfuVuzrC8oBghukGqzSN91itpBKcDAe",
  "key38": "54R74Chw9RncTT682yqstf7cz1mRfKCP8NxA7zo5vd67tMDT7iKs9CdzL9JPFwT5j3DUiUP6NydpG6ej6YWjpRge",
  "key39": "4z24tTuD7Un3JqnAGWTxyD8uxqWEuDmvrTzRvLd94zU6UGGPCojADaa5fGGkZ69MEBKQ5ECniNfi1f6997Bz5LA5",
  "key40": "5oauvMcdDHYRsEToTkpaDaXyQnsAK6cTsWNktMpxwnb35kJt9eZNgr4UCc7yYjwjsmP46cRRx1HHoaw4cdvAbWfg",
  "key41": "5Rtx9CtpMgAHYNf1wVEx9XUPZBCUsgrtJG24XPjEXSEDRUkxNjEWvhmyYg2aAHgDC3JADrqWnoFYiSN1FDTDDgkm"
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
