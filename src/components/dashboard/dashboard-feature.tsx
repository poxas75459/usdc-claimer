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
    "4c8BzQ8EA6VkhnWwMNNGMfxAyaU5HyErL9sLvmLfY4apCGmVEhs4oMtaaicLjst6rhtRqGhaEUZHZys7wQjM9NFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osXfz2aNxgNzSevZeWsGf9Vs43H2mVTdwkC8LeC9DyCCwRWroFSab8Up8xLar7SSvM2xrhVEUBcR48FKQ71wqA8",
  "key1": "4SMimaufaeKn2q1FF1bd4SiyzAGD9b3EkEnARvZopJjmKPAaui1ScwMyQQMspoVFTtUk2efoR6gzgtEzjuJg2rfk",
  "key2": "re8ufTH2fHPFAbBz5MQNP7xwCoT5Lt9mo7xTVrARrV8JvPVNgNXW46Tu3ECFcmoERywqbxhQessQXw7FKJsKX1u",
  "key3": "3jbUEsM8tBneKqeg68URq74worPC4ipPjPhqbQe4LT628mQvZYrZXk89vnZWGW17UzLYxC9of7SzDZHqycp7Eota",
  "key4": "4tjER77y7ewYK5Ub4kK6XZXRVoHQ7wdWvDmPAugkjPdkPYNwyjznfWNJRgXrMToSt1PsECjmwrg1roky2C3Ay17v",
  "key5": "5rTe5zDWKrkniAYSwFpD7YmC48Qaay2jo74C4JbUrYi9ixUzP4LwX3Lx6X3LjYqcB3u8CAP8rZNf5sUkuUkkvvZJ",
  "key6": "4vNVNZHcvn8ZbhisxFrsDc77qjV398v86w2wnkvw9dFVy1oDMVUgqnq1AEbGVsERdpXqQLWUNQTDAVhNJwhUTX1o",
  "key7": "2eGnb4kzU1RNaBpKGUAJr3puDHYTsE6tZjECBaEyGnRDTLYt2pNfi93LetDDuv1Ht1jmNkJb2syrGd4oKCGFhZRX",
  "key8": "2GcDxCfV3CZbe4Y83G4Ghk66RWdxrQK3vB9ZRk5MBavt5TUy78iBoNz6oAs5D1Sur9YymZRoNvt97YFvEvngCMLR",
  "key9": "5pDwpohAc27o5gQc4imeXUsQYc69YfTyFuJ5cMUJv6UgCVamNkzGyYApBgJoeFSwg7hpJWooQdDyeAC6GKoSKYQ8",
  "key10": "BWkF2vqjfC3FnS3A538JhKbKhsWAL8o52fa7SezQ8nzMu7a2cAtxWQ1mACudRP5cdxBC3gEH4vEmTbCDrB6xkWR",
  "key11": "vQiN1tg2goSWeLxtm1Q1UvU6XfzjC17Q3oGSYJgdNunYNucMXH4jGmbGcRnedrg5AUYj91fsEUQYspi1dghKgHc",
  "key12": "5LtWApQz8LVAr45AyVHDpcXZY7HScysscPHk1qrwpBUg88DJjustcSGMdDPhdd5xuuJ8QchGLQwBZERnTLr4B5mn",
  "key13": "5RjHDUKzs2wTC9tc3WKAVebsu3miJTsd71uEwJhbTyUQyrPjNTf4a3sxTPFmzhHmyzkbbVFBG3nsAPcpgUD96GDr",
  "key14": "381cz1SgM9qK3ewkXcEkFTqWZj615VEc8QrJQq51NnyFnG1wPnWFuXQ8wxkpHbTdRNGWNfRuh7CykDdHWRV5aKeD",
  "key15": "2jfAgcQn2i95DT9FcukVd24nLWYcK47RXDGFLZLMNaMQMw53aGiKEhJ4Hax9btbNVV8T8sy57gmqVGjNi8JNvQ6W",
  "key16": "9KDbuVnWJLrPZWFL8b2ipyghHfnyR7eEQCY24bNpkBJ3rLqxKvcYFgUuFMoGh6DBAXHoBUPyZtVSkfLrAHHXNAU",
  "key17": "46fJNBEiSngqy1oUbWW19tWtj274aY7yMeKJ4TMyZhD6TraQ9FoNDnH6GJ9ERv7Kr1N47YkN2ZFbsNDUcMoqT6eg",
  "key18": "BfDGsiAZHCcwXvgVWErHFQY7J973aa767jyABKz8ZCADGvQPpdNj2W9hwHqstKd4pFpc16LwtJrGn64F6GtGNDb",
  "key19": "4gTEDmBC2XuBW1myx42Cb3kPMFC9rDcffAN2PkNC6iNLfBZX7enGjhNxL3aQEMuCPtxTkCcjntRqWiiAbbrn2pco",
  "key20": "3QFcdQ3gdUUgpddx4PbccARpBqFbkFUagHrFheUVTPgzfZ3uZw9CKGJhJ8Sy7xTYjALLxYwiPy8gYcuYk9m6n7Eh",
  "key21": "28iscNMH5XzkU2iitTb13c6geh2MmqNhFBd9TP2LK17Li8kWXJKxs9fD2thvosdAW4u6i3maQCDsbw8kCdSU9WBk",
  "key22": "3Mc7SmvtYKMo2ck9E4ZuxhBEJKFrXuQ1wtHdFqDbCvmjMsUjFkRHaJ1UHeeHXxXvKRSke1tJZ6vC6u8ESS5a4HpL",
  "key23": "4nwDejhR1QcLekLdV3xmdPfY2jjuXAuDqpbETaaWhBmE2YnwSZRipSnrdYnTgQMdGAFRYJ1BQq6i5rFLk9JgGc92",
  "key24": "2T5kP8NkgX4V7RaJEa6rfj9Pg7TiePo6MoBSmJbdJT3iGwTYPSkDuD1SPDBh3UWTLrWmDcgTxKEuW5SBFk8LWpja",
  "key25": "A4JxrjwzwTHwRLGmoB973cNZTbpmj6FyBB1AKgLnNwaNUmR8KM9N5F3KMLUQF1ttFtbima1BABN1ag75Ep5kxmd",
  "key26": "yboMLGxSivZgvoGVF7oxF7qXWvNLfjQiNHwHTd4tfhfFjxfbm6mVVYZKa4WPgdjeC4skDp2BB4GeQbpy3PLJ1vo",
  "key27": "3QtSey5FsAttZfb9Wo2u25DP8cS2Yd176FjYaTFZ6pZd9HFKbTicxPFUGFjmhemabfPZQUfBd9Y58BGBstrUHTDg",
  "key28": "4cQ86aasd2NC9N6YBsmhxwb9BXbEDHB2Tiq9gDgt1UQDsQp3iHQk6e1pJ34r3oCE438qxMdDnJaX5ggsYumZdaxx",
  "key29": "5eHHyzUu4bGGu845ZHyEsoh5skjEpvZUijrANNDWXnRhWcxGuYPVSnpLHLdeDutKZ7nkFkWgpJESTztT7JuQtNEA",
  "key30": "2fGWNQGPhBEwCFcNkyQxUENFwszGfH8habDBpFTUwithXLkULouoTU9Xo7xkY4igd8LGC5F1Rd3cVRrqcYdqHUQT",
  "key31": "3sGLPjCpomii7vRAZg8XAV4gBW9XhzmcJ53ZF9FxRQB2LyJy9Nw8v4EhVRyAr4uydJbZGgQNS5npaMKxyriKHUL3",
  "key32": "4Wqy17VZoQSjMBV5Kcj82Gasz7YYtjr1LyHn44H8TCFthnmHfXV3m4zgvWUcJTU85Q5YZMLxo5EtA4GbjUkUh5EY",
  "key33": "5Ru4fmtpJaJgoiqeikmzK64ViwkpiypYGCXkmFxRxACVPE5Enet7RRD3NBYay4WuUdArnnctgEEQiPV57ELgFtfe",
  "key34": "EH81K8JPLqJV5vMw91MoneL8KQ6v3ZcYggkpG8CiLYybPhRVPBDtfzacumZ79md8qgBryRyarNNqzpFnkqyzJf9",
  "key35": "4gpgcojEfARP2m8nXMy2eLq8dG8tfTVj8S1N89sRGT5i7Fbf21tSKazqCw7RE7X18J64JiBYNPgxz79LxmPMLaYP",
  "key36": "4twe5xaA8NtDDjvvVA5L1W5oVSY2BqoLtTHcnYZcWimemdcytjtytuR1bRTrU3WJLT5NKZnDvE9j92qi7V9jN4iZ",
  "key37": "3RytB15pdC8hbQT7sjom8iKNdM6EFwm5Vd5E9jMMHoWSMZDSiXo2tT7yZQJxSvehr1sRBjdmZpzE4zkPix39jscf",
  "key38": "PG96xyjNkytyDZxVGpfpAVGq1SiNDE5sh6FQjPZr67CdrPhYZii2ZBJHc6j7iUDMScK8Px2siQrFP9gD5wEVZpL",
  "key39": "5Kd7gSUtkQFeyKZH3LgqQhRCKjRKfg38DycMpwuK62i53zygSY4c6wr5F5Mhk4ofZ47GaoPprNknr6bG6SZ7K1h5",
  "key40": "sszdLGrFu3h6cy3NKksJhBUZ8Z6JJakEzgjL7uikTd2KtjoUtob3smgpd7XdChBWE3Tf6vb53NUTpyRVsy1zVWK",
  "key41": "wyVsrYbRkAM9FMq8DmdJsFgQUEC3QVcuuxHNnkXm8mpzpmoZ7rgvXZUFrAswZgeAPwroeAttQPKBnG1Uv5YfNuB",
  "key42": "2BHB8qxwEyB7CPfJmBngEXjs76DggkRe9NMnYnqzTQvY3hEMLUibgMiBqCYqwyRNQjYTt4vvnRUqNBuordPuFU1J",
  "key43": "3vgJT86kmmbdzhHFF6nEmWh6VZHGtu7Ayq35cQrhRuUNUSaX9cBsRiDnAnPn8HrVEkc2cutCqqQPNGaaEPTH2maP",
  "key44": "dqoEmRdycoHzhXtyEQUk8Acjy9DNJDts653iDjAwuw7NTBnm6mTRJ5j7tJZCZJG61J879sgQUB8dRruHSsfPWLe",
  "key45": "5HtNK26B7q7jFyur5bg9hBccCJiPooBw7zvQnRanAU4YL4aZppRJmLTxwm8XZJSRXoqkzyta7qj7XzRJwir1DUQH",
  "key46": "4P7YZJTnNvss3gqCtry2Z6RVZipB22AoaWhu8dbvxtgWXYCWRvNm2fu7YHasrX8ANdB36WUHE5hrtPhMXm8z6oQ3",
  "key47": "4hEdkSTkJThAYfxC7UKaCjTJq6EkEFWTRPeUQwHdt3JcXbqQDho9mUNGassFD7ay1eQRS2gG2VnspQajCETQSai3",
  "key48": "4GFZvoe49ohuFbLBHzwDr4e44DwfvdvcASaSXRYwpSXM6p3bv4TcPHJSyKg42pCp1DdbgT9zGfbJ9vntvhWDHCx8"
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
