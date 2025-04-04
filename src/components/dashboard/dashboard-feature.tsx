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
    "YYdVrYKDshpSow3soVwY5VFMQJnZR1QdDccrraEgtdghjH8fnxtrzsgSQLgFjpAu6tERSFS31m4R6ovh8RPi9d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTHLoDJmbrBieEr31JsbKCbocME53UyUhjDtr68zifXiQ49F17WdHbzi1FqrQjXuguLSmJt7GTW1imdnRSFky8B",
  "key1": "5amSePupuPCsnnHmtCFmFURJWsiM6VDxU4YioBheYaXzr2Xaqb5J449TfNLJRx1vDA5n5MYRcSJJn5KvP7HEAgx3",
  "key2": "2Ybcgkjq96UTawPy4DPzPx7V6UEDQJNJbv2j8C7TFBbcYWaZU4csY9QxvhM7hGbxXcE6KhyRjE7B5XBuv3XtsgyY",
  "key3": "4jqfGXh4RyfGnVy1P4DZ9UVY2XnNyLmXgcRoVSpCNSjMVcVt3t2Jnci91RfRZZcHpeqpeTHfj6SCfTUpQWpCPVfh",
  "key4": "4LErABuvRwjeRMTwn16n6xDWfGGrmEy82ZUNndg1hcWY6xxHgwJrKP8t6VxBFBa2yKNMpfjhqSxGqMzQEpC8F7Vb",
  "key5": "3Tsm9SkcmE2AWEQDBzdJCtAqHWPawA3SGjLQ6yEY81vAz3ogCiZbxd8m2svn5T4KJ2a3CgUg99SmTL1yzLVBm3nv",
  "key6": "4adK14t7ekc16HkqQN8KJnXzjg7kjGYVeoYh7RxESTFyJTBXFqZWgpCg9U8jVpxDhaSbv9pEzKbDBbyZpjCxNgJ5",
  "key7": "4SHgvtWcJCr4t3H8D7xY1qy1PyeiCq6AxAmckCZ2D4yoN22SwLcTy5u28GdKi2u27EJXqfLc6J8aZbtydd8ZYBdm",
  "key8": "35yTUQPC6uLWwehF1t8a24M8JGNjNiQfrL6tD29gbPt8Rd8WMkBYjwQiDv1KKFXFgQtWtUJX42u5CWRtqLRnayWu",
  "key9": "242sp1wt5JY8kBeSB6UKKdq7wDuBDt5y84Qen8czVmgixtoXd4XxcisjvXXSwmqDneNowkTHFNNjDJCsqGG4zroB",
  "key10": "2rimD4BaJryBtVu9SRneRh6gXmVPduCVnBLmMiHnF2MXk4xuKG5BTRrQebfKWe5KBZVWau8FZpjxu3p4R4jD9HKR",
  "key11": "3xMhAHVw2HqU4n6mKy7Qgid6CR8zd3HtCFjxZAQaE27R1vntLCrzNaDeLb3KnRy9sQAARg2oyfUgRSi12dMwxM4D",
  "key12": "4gF352BYHhtmRk8Tba8SFvcnfvYzUaaiQ8SGxMr1KGaxwL4nGiTwrcdttRbbNUHLRVbg5SLMLjWZk9qJph8NzLiz",
  "key13": "3qYjXLsuCEPxjACNSzXFLPbDyccwB1keW7sU3jdtwWE7E4vyWrKS5hhhMpZ27NquudmiV3wDXnS9HFjh4nYv7as2",
  "key14": "3nA9DRdoeqggXdh7QtsjgnWKFWVZyKUFUP9ci5npZzStbdG859upabvcAeTUu2V1JcYteZXeJFVANxiTyjU5ECTh",
  "key15": "6GebvzWoUEW7GgYgW5AMoQQmzD2tVwrXoA3d5mv9BT7YfE8wyxYf8eF84FW4bZJ1fzQh8ZWzz9Ns8WQnr7voNRA",
  "key16": "129R4NL7NUhhFXCPk4DiL9sg1cRoZXQm7WsmhoYYbe7u2MxJ5U4e5x1Gueeon449WakpTvxgi4PSauQ7kjiFXMUq",
  "key17": "32VAZdg7p1oSxikb13V8qJW23MEL628tyRASYxMfxP7sPAKYc8B5Y2Zme1BPfjTmA6VwoiPQhMngdD7KrAAVfEoj",
  "key18": "PhNhwsDH3ZJcYLfWhLYTaH156AHc6z1kp2kL2Nnwv7RjGrN3irwm1WaBwGacuf91DJD5fHMsx3QM9jgnEsy2Zwf",
  "key19": "3xtQxnP43CtiabFDxejXKLSoA4Qy9hjzFjxoKNhYznxvsaheMSmnHjLz3DeVzdz1pnuqq5WiWcLREAVsPxezimXQ",
  "key20": "ErtxyJgQGqotU46g2U5hDmYAkaJC85PWSWx39KeBeAvLAT7gbFw8V2SB4mNzykrNoc8E1xfyHZaVSPkqWCn5NnD",
  "key21": "2uKpi2HLgkouEK5xPdvTg1LQ6qFvEi1Yx9s1QTaHn3sVo3Qs3YCk8RQav9vaMeXjw5gz3mkGxFTuioLH4du1UDYb",
  "key22": "2HGHbxL3nnDePRmGaZyB57TSET1axqU72YcXmdjTmCBRcRGA5k4s87NCwQe1o9ipgyWEsKMJ3sezzQn3wEn8PRMR",
  "key23": "U1nXFzEAaCj3GMvZiHreyUuTaseiharShFtsNjCjstJRH7wNysLGtw3TATJ9ySGMxEC1r2Y4dRcBUcCrTbBQxDW",
  "key24": "3jUxeCeLbKydEuCnZTyXTJ1o8QxsAwYfrBBfQH2f4h7RZybWv2zQwP3ydyUQSWW1sbY3iMmMGSZ1nZtjt9hbUz9b",
  "key25": "5FsJHyesQZTBB9yddbAK5cwG6kzBLCZj5nuDtW1Q7vq1bJXatHnXyyj2xdndnMKghUMugPyjbhiqrkSsphdc745u",
  "key26": "3xStNEf4gWVw1eSYgwhM5rt9jvZENJYwEKu9S8C8JoD1umCebTStHExQutfAdyAiWTPtbiwSHUF7NiBMDBQcKr2E",
  "key27": "3aFzuA4b7QsfLFcVmhqB8aujm3PzKQ7U54G5hLyLYNmYHViWKpwrSxGyeuWi8pXvwjAHnuQ9QYVMLB8sPwRybXfh",
  "key28": "4UCWMAwQsq8WbvgzjwEy6jGuv6eKDQhZrJMjsbBYG82RVaXcyCrbobrn3ffQpABTU7vaKM4GZJk7q9cCxE5U3omo",
  "key29": "2oatB8PSBq9MiFNCxsP8KueE41MhHtY7DyepqQAxNM4fjwKfzjjZij3aKtyYP88v4Gng36eVa8Vkvh4guq81dUEW",
  "key30": "5p55mtdbtvwECnGMe6wSEymF6Ho6QAceqRLUbfsUTaeNDt9Jmy4es3RHhXZkemZxWDDXex16ayk1oMsbRNyc1NY5",
  "key31": "4VFwjvSrB6a3tBz6eHn2SRExbg1bK88a2VeH4S1qAXwZV1NUKSgLdtZWLVqdYf2GHQr7DrgfKwGLBCpZJTkjG7Qt",
  "key32": "4MCDMbxZmWbHMyrDXn75Ye6Xov3ffNMjqNEKFfuv6p38w8wB6Q8rwoEPkmAMi2rbQSoZRUizTCaHH9RPkVLrmjrp",
  "key33": "4ga5a8idd17BEXgvyVZ1X3DToibxD6Ej2TFeekYzCM2pCH1fbeA3kj92nbTdaJJubnZTgthk1PuZRYKKZP8dMK7L",
  "key34": "NygSrFtQeGtJPbZaLwZmyMnY2vr6b8kcBQUDdFVWzr1LBGiH8uYv571UhgebdaPdXxpyGpDoKAN6SK6KcXSMSd5",
  "key35": "59JMPBQbVaLPDPcK2Fdua3UXLfdjktHh1VkaCYS9T31MV5FJa9YPB4UHUAEpPC4azwEZvBcuNVUfC78RLVUWPT8m",
  "key36": "5yiDfYBeVZGcaQeoXo6bxbpZDECadzR52Us4oQX19hypYUthsuscEUqgQiDvj87wFbaPix68XnipofxzjLVgEYcu",
  "key37": "aWtAZXXxafY3WkCGMknsBa6FiMz1FCeuH6WF5otaqZQ5PJS6yrp69M2k7hnaqtJ6Yz1EMBZmEdr5ivSgqfySAeW",
  "key38": "46wDF2hrKCD6z1Q2UknoGs47ornhEzXVtUZUzdzzB2FMgcVuck3Vyak8XnsfvHLhU92CAgWiaQqi5ZQuRYyDf63M",
  "key39": "3BFd5tmDFoJj6NnYUhmXPTSA3aN3N3GATQ5VWL1trgqEnKZpJR4zAxdQyUwFbJbKzacrTooxrLgGu6YDAiZejH2c",
  "key40": "5ENPhLsGFVdjgaBPL3WhyaEeH6TmggseW38k5iRnM49UmcP5cjtD4nCeFvdvWCCVuFyDGZt1zQWvE3xnV7oSpDyK",
  "key41": "T9ZUgj2Yd2GcUdZP9fYbm8r9CmQriXU2V7Zqf48mJDLfiH3VxUhpNhHx8duU9SxGguMNfotygprkfZiDDvyAhz2",
  "key42": "Z4CM8UHWkNanXfyqoVNzzg4ApP9hdWAJZFkhJD1iXR8FcSYJkkYmsdRjBNGCpqjfrZEDjNmzKiAco9nap2rTmP8",
  "key43": "4erriVQtoUQsV8kT6RmKaW1ENUj5g24GcTHpzFjSXXFSdvHmpiuG8ZR9JLCqWy9XnTZEVdzZHsASPXZHLyAjk73d"
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
