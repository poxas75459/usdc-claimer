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
    "GJiZ312HCgoBR1mVVD5NvzBARfetofRv9rhg5TZoW4vFsKm3njufmpLFkn8NHUdHAy1zNn2EZHmXDE1oFzjsmnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PWWZDcu38MLShiwtVZe6ZKkSfQnpyNxdb7SneYxFinXRyZhXiKCNGZwdpTEhULCBnstkdCDQmu8UMvXwt8sG8U",
  "key1": "3wDTeffA9qA3TrWkd3ZcvDgPf1r9tX7zgLs4ASXxcGRx1qKkVQaiRH3fug4nLg4AshWsXTP1Ztnmc9f4oesHbLwu",
  "key2": "5wDP4gXgdefUdUSjyfgYorwcWQNiqS1EFPv872JkmjitTmQ7xCv7UzuPg6ffqmtXz8bJshrQHo7Zcfjwe24zSEr6",
  "key3": "17fBt9TK2iDuLghsRmDSGYDWGqyFrsfoMAxKvHxuU7buN9nAzJRXehvmUu8T8tjkjQth4KXigo8o9uJGRjant5y",
  "key4": "52qaGMVSqUmpn6hATpPCuTiX1JnGu4uZLNDn9A6AeQSbjh8QfSoYaXpRLrwvP3gAhaK8a868UunRzrVz8zyRZjUJ",
  "key5": "5xUR7AwwRrPfYgwWVbj1cxKhxmjErAcSxtivfA6T3H4y2p4Doucrfswi4QRorMef5DzPhyxBsvmoFAobBY9MnAX5",
  "key6": "2CkMu73SELkm9JiRFCSHkaUwrzzMFtghQDJAR7oAyPW5vfY9gMMM6hYj132necEeiMNJsRtnopa1xjwLKXNjMm54",
  "key7": "5oxYPBuCRa7Mbwnmm21f9DXtdAMy76fVoqDNj5WJBzFefeNUzYsgCRns6G1rpTRaHqX617dUmBgRJnLs9aKdixfZ",
  "key8": "3qB2EuTBHirT5PkTf96CCjynBfTpVxoiedAPUBpSFsPkvU6fAwJhVk6DXqBnFnbB3gh2j7rtfB4rX7De3h2nY8JL",
  "key9": "67dZLryHcjaPqEkZbhidynGXiMmeC6UisfLkMobGrvQ2XTf8BraZBYWtxGgHAdMxurvHfQ4eZMr5HsBy4HPqVbU7",
  "key10": "uaQkubNRmTcHRp5iKhp7JP89YHkVKAXo1sMmnTFUHssWpE5ScXsLrQep38EsZBdBcJ2unNxmuECQcfqFgumBoRX",
  "key11": "3fULetmxH5dPL2cmjaTGtxgbQsBWZAWfcN1DxcdePSYUvKgPxSfMnGLfqcSWis3tvRSTiMFwUskfAeZ6KhzzqZSE",
  "key12": "3aXJyHK4vaXs8nj8YpoNkx9T9tFLm82TzMXVNRL8UgySnZpgpGLYWLqxAT6cRiYKsiWVN927hZdBNrqUv5qNGvta",
  "key13": "5MRL4RKXmqSn7wrGSY38kdRRWC4H38FNPn8bQBQ4zUG8u4aiXRrNM54EFndUTH8wMaFNesiUMvLtdAARMzTwggX2",
  "key14": "62s64hz52SPHiDDaNDsz4edz5cR9c43n3JgsU7LVmQ6UdaA5mWDsrk3KPGhUTLfniTHh5tGKFg4YeFVg4cA8HXSh",
  "key15": "58DMnsAvaHAWCokFazFypbcQzCS53BGo18RiA9f8WMjnxpDfTGpafsR9ooUb5JEJqJMzisKgL6VJTpqHhYB9KsoZ",
  "key16": "2JxNyjSJFM7V9iLyJAMW2BUL8FK3XhYELS3EN4573xQQPwFgHp9fzegvA4s8g6CJwAJhKBTg4kK3aAvLs7fYAzxm",
  "key17": "2wUSK3CzwbDASyHNQtQ22Nuq68e62LPgepnPS3Dmi8Lh9qus6ZiJMnE1YGnsQnvMQZS9P5F3RZGChNcWG6n8Qwf4",
  "key18": "RiCaCRS3JKiSApnGktbN9FyQ6jL3NMhju239axLMWakqpkyPw2aMNDgPS5UGjBXSfJxGtPwSbJnm89JnKh7aKxy",
  "key19": "3TKWJ9yknthbqXrusANpxaMkHGgW7JoWjj5Wb8kjkcTQ1qNUDpEbRtYbtmYut5wu4ttDPnfZbaot3BDiiB8HpWe2",
  "key20": "3gUbYzUJmM4bh274sAwmwrR6ZHotSLfAg8yGh6bHtpjmEvcw93dgoYgNtGDyrWQ4kpXuUzshuusucaWjiwBYczQS",
  "key21": "mfn2XoBU8t2HCBhkAEHr9wDAJyM4AAo1a7SMFnVX2yKpY8NnmAJh75P8b3CQJpqYNKNQZXoGBjVP46Q249gMoyw",
  "key22": "4XLvk7WjAXAVxmmZYTPfsm3Rhozxwjh18TcsrZWTvmoKHmjcrcFT4nBgVXVcE7tRiWj8HC4pzGEhvxXRyMwZSFxw",
  "key23": "5bSus3ybmkQBQvw7tCA6gP1qTgxmMwEtigUe426z8mLwgtVfvfLRgpaLtApVLziSZrnp2LE2XzWgYAxTHazLsJ3C",
  "key24": "2UAyb8hin9wgCkrivGkwqdpdFjp99hZqT1akHSoxVT8YvoH6pv5n9jzY6G2DaMx5fhnKYnaHqPpbefGSFd52xZsE",
  "key25": "2bEZmSpbi8tHL8MoUdzvMCNGRwB7GBrPbLYabpZuJQSoTwj5Rq7hUmC3qeCpc4wcre5NAGX5JgbEWdSrKu3bEbK7",
  "key26": "34a85N3HpaU23frNwz1zUoR2XosddjSLV6FVn13DHZrDkEh53DSomGGnLoi6QHJYjsRmQKuKnQCB7iizzv8MvVAD",
  "key27": "4gBLkmbpyKzFrgeduQZrYboPUqUvoSjg9pUnMjYG73oFGeEBDRPeLYZfRaPYedMCj7G5wLXmyz6uJWvFsPFed5kN",
  "key28": "3h9Hx9NFgp2Czb6k2vnyTN969YEC3fmDNP3VamYMQPBegXfxNdcHp1tBYGhB7dCFnkmG4yugyZxMgJ2dK5GY8Qbu",
  "key29": "3Hx4sdrRccCpvLXZX8MmyaeHE8LZRksjJnsQZTHFZzv9SAqY2AJGV8ohpRJgorQDaVvmTCdXL9LYH75gHhaskQz8",
  "key30": "3JG4tJxEkKvLEg3rHPxcCTGVw5i7tpmMAY6v6b7okAMx7VFmNxwPCZuAnHYHK6UeiFNvqSyc4BE2985ZT7tSMm6S",
  "key31": "yG8oBMi74BUmc8ZfcYuTG911ZGH9FjjgZUQr7dJNji59Qqw4Fz2P14FrbPSQeLVue9Z9YymjEfwkamJLbm2KxD9",
  "key32": "3uGdSLHpRcz45xqhGX4NghAXbmafuy782JNBgzKWaHawZry9radDYxw8aYwvTRAjK7hBdf4BSEvadmM5aZ4b4d6C",
  "key33": "5nYzxb14x2fSmBXQnC2YvZfwRWTRo9A7QXBLGxzQCXwkAivBpHbE3acwPm3vANz6zkykVtC4DoV9Cjzy6ETejHnp",
  "key34": "vDjUFvyX8z3b5h9GiTSLPfbpjuYTCBEZHaLaitPqdJv6YL9oZ86sQjo2gGERUPLebqugXCf811kxRQvxj9498yZ",
  "key35": "5nGF5s9ceDpLJ9eDd7ncqreHxp5MsMGGe1Xfy9dPYD9LZK2jN8Wp4H6jtEJQmmmUAYLg7v4kQb9KPcFbNSDhR8Br",
  "key36": "4pYiEi9ni6XchGzmw4vUsvFKpzehtDuvk3umphM5a18GZAzwtyFgfJJTiHTxYDS4d9MAgWonVWQxz2mdRPe3g5WU",
  "key37": "F2NyStw3Qxjft656eXACkCCoySsidQthw8QLdYeEae6rn7KgbXL8SYVAWFHrC2RzfDh89YANQDDJZ4dabC7qdJT",
  "key38": "48MP48ocPRAN4qXPh6mvXU7MoAGLASXEcFeXuvVAqv2XnP2JC7nxyDaYjXaXLkXQ7apXKZfzYSydxZUfXpYVdUaA",
  "key39": "xc9bbFaSqJiP331imJHxMsQtw7trHj6JmtJ4BFapugS6McwCUnN722MW668aYK5rabrC1cTGatQKtSisizesa8P",
  "key40": "fb4tm8jRLF6MFxkQVNXZV1XDxR2EvUvo845hX3m5dnMZSAyLZT91mfrkenjqzBvmpZh27LV6v9ufcwvZJavarh7",
  "key41": "47AL77m6SDYKd1f5Mf2KTb9Hh4RXuacVdgT6aouKTGzaq14nbYov1V9EW65FAgYS9gGCWKEAg1vu1jmy2jL2qAun",
  "key42": "7F3TcSMro17dF6JDxFzvryVexekj5gQdcUsNbtACSvNtW9G5QdTMoqYR9H1KHRTZE2W892hPEESFwgZ26P6FuVk",
  "key43": "GinGEJ97b8XLXhXZvSbWQT3Smvub8jouhfz4NCMt5hD7H5Pm9y8rHt1QA64ar1ViQLQGVGNp5qS8M6EfzBDyEfw",
  "key44": "4PzyNSpK1BaUXgpKZcncYGwZwqRjE5Mq3WQnxGziDaFmdt2HreoAXTR2XBt31uuTpxMppiEZWY7NfJWyLZaEtmtE",
  "key45": "48mEG54xjaJrYTzcbfyTcg63HEiQ2o7VfuwDBmChrbi8N29HEApPkzhPLRYsQKPiEdpUDBymPSB7rykXdSV8cc1Y",
  "key46": "29kwN8A7HXBpgDi7d4zzooo8AfnkZz4ThNM7ojAwVZA1urhEXCRAiJgz7NxPT2ifW6swMepQos8QHp9vjepZFgRg"
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
