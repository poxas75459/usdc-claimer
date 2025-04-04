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
    "Zwmt754kq75yTBhHdCwLZZqFacq2wWeW8pEviVduZMZ7LbACVpFNv7fHAqkLmgJC27jRBgQmo8bCoCTUKjvoqL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEW6jZgmbjRnCDNpWPG7S81GgJRb1JowyCJNYRnwksGaw7krUNe1vNG9awp1vduyUX1RSHN7W8HZMihXBrkwrY5",
  "key1": "3aW5DaryuZ3fj3Yvv4pWPS3RNZgEknruEDkHNbXGvAiWJALbi2TiKQSvAhisb2DFAQQ1478afH7jKv3Bo47MB85n",
  "key2": "5fwFEy88YHcGBuNto4hkqwhbKM9Xva1NBKc7K1Pzwpa79WpyzqoWqXCLNL3jmNpQkmGXqdsXufDmQnDZCYpnTHXv",
  "key3": "5iY3SNrXBrGUVXvVRVxxaQKJpzp8S4CEkopaPKNugqt74223Yo4xy1cneKMxyLfHu5Kq24NWCKeo7Ay1DLaV5kNw",
  "key4": "5CiXE6PzMkzJGy7dUdvk3WwrMd1b9zFX5848dEeKyGVxuoDGFJ1JU9Fbi7bfz6N9ZUqotToPoTqW3ApaLxdm2BhM",
  "key5": "2o6dmvFVmeuodrPKT5XpCr39KjwCpbdLu5GXj5L3W3CFmxqPKeziuZ9TbspzpJzJCcNQiJJz6xtgVpJUGXPQjps8",
  "key6": "3V19FR3rpnqL9fyT9wj2xLphYhBmePPiLQkQYYqgjve6YzgcfUDuX7Vu87tuZid2W8xstihy7GknCCyh6S9wCm6G",
  "key7": "4NSSfiXej9xcgyGbv7D13WgvSE2XtMD9v7KM6V8FiTM5wATGFaYBx6UjgMdCrgoidwNJjK2JqAjy67w435sJcgpN",
  "key8": "4F3sUcMbmNszajCGapNeQLeXuSaAPoWrjgDsxiWd8mDNhucaEccjG1GHHQV8k9kzBJocsymvdH57iDeWsof1krnA",
  "key9": "5AHsvKFHzJyUkyFpYJANQqJXtKYa7cNyN2iJGCMHkqRm1caUgH8KHC9AE298QcqWnu7WVnNPfzSxRtqzL6L8JsWh",
  "key10": "4TP86FhZXNY7NPiRxskTaha48jN4xrL9sViaRK8AkVS9SZYmrmnW3Nv6f5eKCyHC7FpPRMFXHsQhPXZ5sTd3wKyy",
  "key11": "2fLou32er5yeTth7MXcwH2vHicjqMecX2rLAawL4fgZf3mhawchgM4AjwTTwfXQBrZFJg4Gak7c4NTYWChhWucpD",
  "key12": "4HUmBaz6FZsQqyx92XjsuPF3RYce7Scm4xpKVDAhzHYeN6dLJcWpE4BSrGMCp7cZQebDSp4p5Uq5Gpxr5EBNCcjk",
  "key13": "3wVYa9syfLAUKd8vscPq8afVjPdNMHmj2vVTxBHD1aCpXfA7exuwH1hasYeQWNhh4s44mcNoPWVMjQWpYAK3sZWW",
  "key14": "5LAf6wNqi7GDPdqrx9yQbstHhE4vhBhxXb2hr1GYPxrTxih8wGUzLfH4wcPfP6Gaj6gFmrfNiDoXk9GGrvmPhhoi",
  "key15": "52RymwdsUrwx4eGhaQofwzXtqrUiLon7UpwuNQBWz8za2JfuTEuTwNXESGJ3jLDe8CLJNjN4dCqnKJojWJi3GD7p",
  "key16": "66h6ZuHyKakbZhsRW62itx4xxLhJxzBuKrHWci1AKnAiNJwMk9FR4ARPhZHfe6veyZFJsu6m4ycJEhjKdko4hLDx",
  "key17": "VfJSZKcwoKfjcguKBPU59BgoGmC28L2enyfjKhFAgV5XEyT1ctEeGp4gx1U3LBu5dSbynxF6vUhezdp8ED1kS4r",
  "key18": "8MUzgQBY2u5tTSb7mGpgJXQbvDtBmm1ZBnYMCsjAVRwMHKZ8HbY6uCgrEzGx1yn8dQu4VrrTqxkG8Q4QmaYQjj7",
  "key19": "37XgxCWvwboaaN6ifWXNE6j58AfVgoPANpsoKgYiyR6x7rVgdwRjniBdAeHZbycYfJN8grMDbcjwxmAi1hjTK5PV",
  "key20": "2rcGRz13qXTdDwQnNjgp2LF2uDPryVZFW3ncQmsdWdXiVTHE3NEaU5NZezD7A7H5JF9gWrJSX6m5JVBh5v4ftPVM",
  "key21": "24U5YCFFT8Bfp8zwde2GfSxWhWKYKkj8Ek7WiajyacTaM9rsdrUDrgZneEzbM7scE5f3Nv9oj4f4HavAAGoCoZAJ",
  "key22": "GfqAXdPz753GhTPjCXo4NLKRHAxU4kLuNs5hqBewJdkGJGKVJQrwsBuQ6vczButb2AU7TztEHnfjAVyS6MkzRXM",
  "key23": "4KDmobAFAtYJce7M5qRvCZfsMHgEzwBYsHZJtJRSF6HeLfE2saEntdidibE3YMz57S3aPjpapo4WHpYyqPqVEssE",
  "key24": "3dgW9D51tNQzHB417ZA8iief58kXP8w52KKaJiJGvhwLskzqHGwbHhfHtmopsEhTJCLKHpzfhpBGLGMyz5L95fhj",
  "key25": "7KZsAvYC2LNM5qr9nisynC2ZjfHXeYw2wCi3tnJcGsh3JRjvvFP6w7Qc6XrbGefv5tiJWQfpYp1kdN37gB41itW",
  "key26": "2jYa3mcmaTGwNLxKSwHt45YV5SUvMBCdsc89c1cwbbDNr1jZFQG21iBxAEZQJnozEyTqv2255P7nEDPD1wqAcWE7",
  "key27": "4Sh118m5779X6GSZ1jEiEZvTkoxm5rkSApzBexnyWS5KqVx6XNmdcAr6KcEyXXKu6rR1AQy2GZdKgwZVaDixrvn8",
  "key28": "5KQ3j7dChENVw9QFR29kHMN3AgLaFKPXXNw9Nb5iHJ21xQn9CTCroMcMr12CWfbrKnqKxBziCnW777Es3s8nSfsH",
  "key29": "2rJknEMkCra3g4Wmphzuuinr8DkTxPatmWvk6anKVvKKm1nLKTrKWhj4R83u4vRowc78kq1LMK6daoaSGasiPG1X",
  "key30": "4e7xTHPYQDFqb6yuJe5iQx6LjnTiv4CBpXgGHaugwSDNMeAP8XKc49Vtof2w9RsBPjzARasZjc7kpfhFTELHMGgM",
  "key31": "61cwmeKjc6znzjTtfxiEPTCoBBsH5jPxhRL9mSTeABKZGPidseazNkyAfYSgVbxr2AaCcTUtyWeKsz2uUEsTwZuT",
  "key32": "2o5w5dyrm83ktD8G9Z51BTNMq3NjF2JBdcdwWnhNteXjaxVZGdsTEQfaK18VfCjSEeLgw45bgSqzH8GsmFfP7S3Q",
  "key33": "21w9tfskBHbCHguXijBSLVkgRChgKRXUYiUNx6njRjLJ3jMyjEhjc5Pqyj27ScJ92qBtVe1hPHHUfba8SFeGE3rF",
  "key34": "5vwF3okW3fyCwgb8kYhmR2QsvBmQ3TUfk7CSiVmjiQwHuM4R9rCajUsb5PsbFZRWdqqr6K8a4WdVcCcSFauRAMb1",
  "key35": "3mMVQey3Tr14KWB9XtXENM2kk3DeqJBtJWZzFSNTt2Ne6hHWSJVXcZcPS3CfGcd7Cw3k1RvyVyeDNyCC57c11JYQ",
  "key36": "NdzWv4BD3h5ELBuj2vgrGWvPGaKPM6VsPPy92PL3KfsefPhUL38GKUDtBtFTsB16qWyMdGuNkukMV1t4mMSg8kw",
  "key37": "4FuYX8i3p3nxvQ361GcF3sJMN9FG6zcrZhgvW4radyTkPPbYeiBS9yVkkUiAWf91xnYzPmEHKTguTdtxMtPiYYTx",
  "key38": "2iVe8b5HyVLAcexsHD5R6zRu6RD7ZxZ534VSrnzactFiXoojPFkipqw59Z7yDiZCyELh7PWmqBBHNvc3dNzn6GqA",
  "key39": "3jCpHZzxKXpsnbsxqfEp7zm8jirECjRS9CnNzQG3x379E2NmpVYY8tASj4kCXyYMegyxa3v2ycrhj5oL6JEGaKEm",
  "key40": "34hqg1gRSJNsj7LNqoJk7fDBTXjTKV2a7Rxp4fJDp9zkWN3skBa4v57TUpKPpchwWT2gFPBrPu2K4LKM1Y7z3jVd",
  "key41": "3no3Q28prmV6t5MNJTEKJN1TJ2tDzk1w2ydYj3H1R7VeTW5qh5qHKrJYqbiPPDMzFtSPqcqx1z9Hv3x7BrQpBQca",
  "key42": "CjmDPduS1NwvBw3RqbRem27mpbLJUvSdmq8YwG19NLwA8QVHQvpCyJAPWqoXGuGydQf6UBGRfrCxDVcMtiELs7Y",
  "key43": "2gdKgX2gL6GbXAc6Ga56Eav8Fa2rvZMprMyfLBaG2yJeSPq26KrUwiYaRPqV5TKUrE6D7Pf9igdfkUKu2RsZWUG8"
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
