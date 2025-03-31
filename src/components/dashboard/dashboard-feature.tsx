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
    "5ZFiiSHn8NJ7CsmCw4u1W3vsMcXSCQs2F6bB8csKZdcpSXcJ8g6kNG2c1jbuVoQPSXtzefE3Phg116jQaN3U451u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459iVPs1LaAc31o4K5HmieVxaug3stMjQYd1X4amQAViqR4TQU4D4Kzdp1Szv6HEdiYATSNb2GzJJMhGXegqn5yj",
  "key1": "3xF7ModAjXhGfAbQEciLNiAAwJSs5y3WPUtycPptwVb7nYCenkDBjS5TkzrH3xEoZtNPNR4t7qUZBV9aE8Fsddk8",
  "key2": "4tPCcVdJzd7iP67vFCyw8YqfhZvty3KhKEAqtTmGQ8zY5HYUDwnTanurPxYbAG8ckz73VH2swP5bcVXKNJ9WHcoA",
  "key3": "5UYe6sCqtAJT7oHeaaMGZ6catkMZ8iVRYbKC3VBt1JGqjUYPGrMHtWjfdqYniKtJL9YnuVSvjxXtSFjBgMeAdRDT",
  "key4": "3CRxLrDxWoPjP5BP46q1BbBthdXdwvJ8hJLU6UjBDq7s5YPdrgT1sJURVwrg7XE7pyAHBcs1CCwxnRSx63n1F9vw",
  "key5": "4Z4HgDk2JLvc2tzuS7GZJMe79AUAi3XMuyyZMm4RAxk9KBhKp1YBZNLCAC9i8WHUSpgCGbQ9RyoSFHbVHWejq8TB",
  "key6": "45XND76xzjFS3eteAGT75YRUtzBr7RbUHGcGEL38rCqJVyzoPEy9VjeJoRKjVBVi8yR3oL1xJSL23LCUmjBefCaQ",
  "key7": "5RBWbk1M7UE1es2GmEi5UZdKAGg521Vjr68CjffyiHvfeqhcwm9gt37DWxgEkPA19zju12AZXcMyC3biZAAg4yvg",
  "key8": "4i5nMLj4wbzXoNpxeGZHoLF5sKhTCNmD4gzmMZPBatNNhoLJozJGWoYuG3zpt1Nj6Sq87Zj1LM49deyiLh987rJH",
  "key9": "4yNqiUgdERpQGLjsSbkBWq2uH1RkULDtWBijaxacnDUhVaYVU8vPhwviRxavt4rGZeQNsSnEzq8yQHW6sddSy1pH",
  "key10": "38a5YepwRney7QyCmVy36io8npigKA4q7sbvC2kh3z73Vzh2qvnaibHLSWotf8FJbLnouWKeK5Sy7FcBh7gqYaZc",
  "key11": "SJpnewngpXbLRhvjgSxs3vWqqiEJjtoA2k3S11iQ6gei2vzLVBr65mBxHuJNsheRSzd35xrmFPPZk82hDV3cbAB",
  "key12": "4K9RuQAYVYKsX9suvY3gWMXD7annYaGzHjNbNg7zPESF5NGFW8VcrmBWgd53kL67vBwr83a3gMyPn7GgPd558bSp",
  "key13": "wdgXUW4xNsQhrzWb1rbyUrsgW3L3GPUC5jEZKUn9pLcBkctyndfsp7cWkMKzfa781WyiwkHCNia2uhXfjzuVYsV",
  "key14": "3xgU1D2EpC1nGsqJViTM3wX9hm5U9WHKxPSwcnSzKYpf7E5NsCwKFmoAP1xAYXXA77LNdZLjvwMoRZ3vPNnhHDjk",
  "key15": "356SqT5bEhH9R4LSg42ZMa2LPrHc2bAEzcb2XfSvtbhxqECpnFhUpuacHkRQc22Mh4fn9Wd38MSHgQMQjgKg6xFi",
  "key16": "4iXJ7Wt9VLDwchBwkiBbmJxAfvoGdBgfiD9rmhNirVaNjM29NuQ8KoWo4Xzgct1k88NCqEPKYmpWNBnAGLaRfRfV",
  "key17": "4jV9YSJ2ffAs2zezcgRASG4KVyYFWZxNjN3vB9vy5QPTWpJrcqzfq2H1LN4Ragvxfymw514SYHXBL7Ap26swU93r",
  "key18": "2gGPhHhiTznrbkEhKFtGesdkWUVf3HJkL2PbwkqtUWMLhjAz5J5KpQLQopZqn7NbdRBMHKmGUW7FVbucoLbBx696",
  "key19": "5UKhhw2tmTJpLuF1nvZNQGpLNj2hrSY89SRxP9u7DJ1vumMyuWxJjBmuHFdxfkBToDeReVxF9APrYq6H9khRhQWQ",
  "key20": "5fUDhs3ahzoL8J2YtVKDAJ6ji7gwgyGFk7TRX7Fz7tuVVZ1XYF2FhRSMtMYGcCRWmw2oprHqdXJHRCW2JjB3JgGs",
  "key21": "3gNkBYf1VoXsmLEY4hdPqAKWc2VAqZZov1qBrWxV9GZVSQ3oniKh7n8atnb747wy9aH9FyGE15iChXybS2KxQHHm",
  "key22": "42UdBHQpYWBSH2YQB9TvLLevy4tjrky2FWE6FytEmB3bZ7W2RqmcKu8WeEFxY5s12yoL6FzQNf6CoUXCKkbW3vvr",
  "key23": "3RRUs4EpZPmBKux1bjw9RL4eAjU2AfS3RPRQ6smXGyS5a9R7tvQ4Asb5P7B24Kcxd3oizgobkATd5GqaKZ4C9rHF",
  "key24": "2c7z3W3Dq3sbhJT4VYRA2yxXQoKnEff2fdSBouacj8FZTEGsDsJRwTPHpsqkX1zvvGgNXJ6SocZAD8QGQHjCmVwm",
  "key25": "XHaGxPNP1YtNxNLLcJZXcaQ115wrtybsm39KKn2ixYUX1WJso1horWUz9NYi9Nef2QDD3FLaRxVgSQd7YZhp88C",
  "key26": "3B4jauoXmYShnFBiRu2Qvr6npbCpKcosEyAp6xXfNa2cR7dWf2cN1sgXVEGiSnPnn6iNcT37qj51vRubWPNHnt4n",
  "key27": "8nbPndwR5hT1sHLxwmHWGPb4Uj9NdZKz39axnc39CAgvEASDVVLJA1muonkiRTkVJUqciykSgVYnQxWKCZDKZhV",
  "key28": "3jRbkhrY4WsJyyWH3VspFacFsVwgG4CFscrKfmycBYzeT1mLT9UkRH61N431EG2F2GVo4weAR9Ntey9s4yvFuwuc",
  "key29": "4jgVsimYTJGTziMHtK4BYuXUqCYfyNm3htaQ23fv7Ho7bth93u5RBMQZ3EZ6iv68cB8XfYLhD7o1hqKPzXrgzz2Q",
  "key30": "5g8qZLC6G6d6z8KDSK5VKsrtjFK952hFKZUqBNJdnmFU2zzz6uhdhriEnVYv3jZJ2DrSbyFHf6yLWH4RgywX1zcH",
  "key31": "4Z5vo5N6h7qRtrWdL67k5BBBDVig6hicpenNcz4vU16Ajvgha5xwVyzdkYGoUovL8279Gmm7wXnw1ey1uh8VBene",
  "key32": "4E4YB829b5wtMQkgvkUPsbtHNtgSVomvTWzBZD4F9k3qnLPLxvBPhopghXU7mjPYYP3shQoRhH1ztfiWpzZfsuJN",
  "key33": "35L78pyBkGFLa316MGUQ1JUPdPDv9BZhYofeDCvzEv6h7kSU5TfyELfAcJQ8BH3fyDkjFyKtnvifEQM6AqnKeS7w",
  "key34": "3jUc7eGmkAPKCkiDqQyjdmspVGtewkjbnA2PXG8zAGXESYRpySeRar9Mz77mTLdDWmGVx4ZDTh7hZbW1Fk26WiTr",
  "key35": "3cC53oLVNjkF5cZLeVRLCwifCdCFVXYpLaLcPnW9tNKu5VYVTwzs9NTjnfJQbkh7jAVwcNHwQeV1Br8bH1iBPJUs",
  "key36": "2MXQ3Z8eNXUtMtKE3bw8nzmiYBUMWWiXG4P6oMbh7ao25bY9pQrhAN5qobrHsW1XuXvPcHbYu7nNJ34xMzQXTzVK",
  "key37": "3oeMXRfKaxgy4WPQALtLwTqG4iqqqY9GQMURgDabsxsLoS1qFQ8Rt9dhHxKN7eNBNJUenbEELDwXnUZcK3225q7r"
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
