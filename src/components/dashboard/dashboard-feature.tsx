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
    "fejKL54PfA9V9y63wBZ15P8nQv7u2BDRgRUPNSyzy5F7njJaytAEA2D4rDDQCZmYxGuRZs6MJ6LG3B3ueqrFosZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5hFhP6SowbbT2z7ZjpxurwQyr4Gbiv8BgcomefxCWjizhHwAeh7TP3z3ERhjTFAX2T7FtBKBQA42MU79Rxw9ow",
  "key1": "3n7116ZtpoSSyGcyDS2TPYz2wHtGuyHzWufsmV9b4uccC1XHKqNd2Pv5Pbvbzj6y9vLkNYvthZRnLE961CQe9ED9",
  "key2": "nnUwgUo9Ww3D9Hb9iKMFjkvDQZBoNmwFAbPh3B3DYk3yzVBbTxy37Y9v2CJERpbtRDx62iNR6m5KQURy7RUcXbt",
  "key3": "vzdQQALe4WhjPj1QLQWH84YDbHPmAyzy5JqjSbrmvC8JqGnVevdmnjTJFpCRU9k8va9GbvvnZ2dCNk6HTCmako4",
  "key4": "2Y13wXfUzZ7jF5ReJPkHR6TpC3oTeV4VjQTs1Kj33aCyiAUJp64Uwm7k8d3MinLtj7piLybMUf1cG4uX3jvgWArt",
  "key5": "3zLdg6uoijzodg2Tuf2c1YPS7yoJMcP1a9cj6BeSvAndH9WbQbCx2ZyuTmMVuwsLjTvtFiWhsDBxWSrQJHstvjPn",
  "key6": "3x3Xwg4fNhwZ6LKVjFgC68EmYRKoWHq4T7iyVxe19VrVsshTEfiazkJBq6mG9y3JpFikKzcurJyty2WzWJNt4wqN",
  "key7": "3NHLB5irFZSiSZ6CjsXn4pBcorihsa3tVkou9sT5oPL1dFbUvfC4WJjF7NWAiUv6LBicoDjHuK3fi3kPiJ7F5pfJ",
  "key8": "4tG3sSMideQYe4CEC4Y4HYJQjR2drdFWtyWf2gycYp48gHkJxqbqQXPKYQrcHLCmKx4JGRyWNptxT65WDA7ru29t",
  "key9": "2gYCbVgduRMcTtN5KDWWBbhyUPpWWNcM8naPHUKQ5oMBq9orMVs4iCFuu4XFcNe3MFvEvLPaVFNA5jzQkiu8FrLG",
  "key10": "2vETE836iJomFXfK9R8MPdF14YDWdhveazhSoCgXHuqSqkXyobiHVUnP1QN2zPT6UW6Ssxt3CPXxvW8R5oJ8QJAP",
  "key11": "5rSYnnB59EdSRdZSSsFw1JReSgzV3mzdqeMVNYeKj5Gq2Na1D4V9W74AcqNg51gMfnbvfUTtEwXJapmcvGWorK2g",
  "key12": "5SpnXSJ1aPvpLTXT9VDxNd4kirrsMyUPqff9a1YjxfiYdCEsBsopT6aj5BNEi7gredSzu4eQf8yope6zzhZ2WbAj",
  "key13": "BRhmEqp5x58t5ssWbpao1fuswnfZCF8P7b7nQXJW1xUYF2XXpNx69Ta42jELpuXLD9UztX5bhPJzKxdmSDP3Vbk",
  "key14": "31zeA3B7GAghHXaJroNBTn9H2pb8rPn3Bh4xtdjT3sEzYJSDavtwLc8bzgMkE6tSBwo9CDEqHopbzKzKhMnFn7ca",
  "key15": "4MRJftsNqFBsWf4E71NkFVS6YPHNs6LATPsMpg8QUav3W7aT2NzyFsuZC37tA94JY3rQ9Tuu3aEa4xDjE9aaa3nv",
  "key16": "4TAn7XGe7atzKTY1CA6CVUchD6t8D4PcC68Hqq3X6qHwh7v4KFV7ui8wWD7dz8GVnPZ57QYJqV6LWFjvra4KkEfR",
  "key17": "35tAA2vVY5wfDF5r7sFRtGPyQgitMPQVgkwHkCgxzLe1yuLgP1YRuhUEJhaBM5aYVWWTjA47kn7Uf5pchhtuNHcz",
  "key18": "5QB37vnLVbKqpk8PkNMs15yfeGZXjybQsJPq1bSmK6QMbLvEWxMGgcN3mCtggejoQenUVbyQ6yBebgRXcbnNDku2",
  "key19": "2WMQc3wL57ZvY7L4hDSu9GSwyC1Bgpiqa2j9AW5kL51SWKAhtQmUdndJ8tFtJ6Uz4g9k7LBnq8qt2yQHHDHT6vZA",
  "key20": "4MzY1AWEruAUieH4MbHSsm9NpbrbbYdr5saSP4ggPJCdKYwUcG2qUrSo596J2KXvUtZAGWteW7eTY3giMvDWTSD7",
  "key21": "51NUpCKRLsLmDG27TwCqPBuCpiQGXGVcf2RK9XXgBxnk7AX2WqHczVk6UwsoWTJLWt9JQ9smBLaYHkexQp51bJ8b",
  "key22": "48H9E5QVNooQb1VZeXy9f3xa42UVoxF9xShchDs8FR9E5muqJdnqPH6EEBNAE7vfnX7kDGyq2icwGL2cTffRaZsq",
  "key23": "3DPFiKgFKAa4AhGD1JvUDMZAucgPW1kos8TAFcMjQoTCTCDopAyVNH9yeSmJeHnC3tfckTtd2RaTvxjV1T6VtVWj",
  "key24": "dnXJUjQXBGQijGFbKN4MasAD46WCHfCtA3s316ZPSCJFVZVVJJDE1ZKRooUi4vCc658xinmiX1rLvKau5e78v3f",
  "key25": "53T6G83ZmsqqJ3hhwnrsqnxptPtJpb32XyvthHmZLowSc4nFTEx8d7S6ik41iJoJwUuY9p3s55DQ5xMJwZ7uAAGr",
  "key26": "3PPzyULgL7mHsq9MpWjESzWftou1KkNNAoRzRhRyexY9L8UZd19xayydHhJoiahWqNb81rogArdbkowk1vyFTtUN",
  "key27": "2pkP5PVEsh42J3teL3gJ3bzh8jhpUN99z9NABdrXa3YBu4DT7ua2tZKcu5sXfmHb2Q5AVWkLfL7FozFsaTmyuxZE",
  "key28": "4gV61A3r6prg4VfdbbWo2sqURSY95V4MeaD64V4J2reVfqyVSzY5dyqxgEvNqHzTgaSZ4NeH8vGbUwB3MfvZact6",
  "key29": "2PRcnfU2Kb9sy2AAf5F9GcbK2gU7ngNowSr1zDBqCtFccUdY9uxmVVtwvRwEzFiQjxrcnmw3afh82ee88uwan9wp",
  "key30": "3gyvKNx6eo1btnT8tpEgXqJctCu3R7u1n7xMbSsw8C98ZWbuRUZhoMSTKp6n8kkvMifL2j3Q9ZXrWqhG78sY53B7",
  "key31": "5d52pQe5DqFhbkeEv4BAvZT2VgLUVSnypDPny3shkkTT9DKJdoHq882PG16MXtYkKbNjnrJwW3euE6mxbtFQa16q",
  "key32": "3uCpF8k2MZn2ASvaBGxXdMn7rhKHH8g29kAxc8P39YqPwdQXH4yshFq66VdroCuUfDNyxbzN8k8ZUGj58JE4pWnu",
  "key33": "34u5sgfVLVeN55teBcZgM9ZoiPWWGTBpwETNZH7BjU1BctHEK8kAFdSX7qjPxPw923px73jnhrATsbuvCfkVv8sw",
  "key34": "26gaWshznTPqg9rugTVZ23tVhrjkW44QK8jKQcAX7tWNHnuKKveEyoQHoc7vnF7nnqxvzsNYKNaL3c6shXYU6iCe",
  "key35": "3GiWUj9vcnz6RycuCbscCba2scFu743HjW98H2p4XKtQHaTp9prFwuYuutDQd3btjagEJLDnmPGBajfnGK1252Qj",
  "key36": "5fv728rwZsksHLFcuRM7nS44KRMEckafnuN6vY2B5sA1pgjTAzpcd4JQrbsnDFzeAmbSayYEu8HczduvsppFCHYb",
  "key37": "263MSof5THfZjFMCUK34qV1DiTUepByynZnyw53MCbsY5KkweepyLXofp1c6CwEDMZ7bocqQQf83kqz5kvXkLnRJ",
  "key38": "23pNSSdoCGKnYQhPZKSEfAfXwB2M4XRupQ5UVAWcdADHVTcP8eiobGVnxsRNNFmjx9uycoeSmAhaMJe8J8HkdEut",
  "key39": "4yZMzsoowJeT85XycLuL7STWwkmt3kPxjwS7GWs9xVNnbjEDDGc8meaSugVkctSTYg7yn4SryCKgDDcQHKGeRSLS",
  "key40": "3wDPAcwSzmZwfwGVEXZ8XAG38HRPmoRCwNc45RbeSmsq9LfTtN1aGZEjhZkuZTyAucaDAJkEk8biY68UoFXop6jo",
  "key41": "2aHSK6mUnU8mGJsyNaZcXjfSYjqtzPmCgSjCyo5Pe5A49jmUvJvvzVtGf5ucua7USoVx78AwGh8t7yST6EDTAfZk",
  "key42": "2a7RSx1EL3GxD8Sjk5bmsGd45p33izLP6WpAfaSeZYqvmif5zrqxmtkebZjfwjbY2AiuS9r5e6utqiL6mtkCLPqA",
  "key43": "39NZK76YJcjq97Q7MGWTwhiZgheEq66YjztvfgMp1gDQhGLYHMBoYgzwSR66aZa6A3wT7vv9NGDuZMyfNJWfWZLk",
  "key44": "5sWgJjDd8knXR2KSGWHofaXATddSZyDGJZaj8kWNuxqjUUcP9ncVGNpjwhTKdKvyEod3BkdJ5LKQuwjSpTAJ4Pwi",
  "key45": "3H1iRvcZDpz5G4gRdG13N5eZepxtBzHMQxmnudn9rgHUnyaQ6mtn84vVnXbD4u3Hka1znxzBCkT9MudrdW1NeaVJ",
  "key46": "3kKRU3rUGddgP62pdwM9QtwopVQUCE8CwGgxS8T3eQC3w4R3FK4JnhxT6Eph7SRZFczpN8XdsPpk94F2XxomVYpk",
  "key47": "2h8R3TnMjNG9Hit8FobTbiUbKp6gZSbu9d61VZzuPZHgCBK3MyNxgwN7VuXRp4ze41Ff7WgZMYyMU7UCabr93zeF"
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
