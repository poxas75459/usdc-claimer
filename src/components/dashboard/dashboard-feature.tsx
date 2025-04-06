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
    "224GoHAKCagdFrXSM4hi8KxuHT8e8CFmbCjM89Zf38BGWHFUpACn2sBnSRK1Zsn4gX9SyQ12pcYjb8kSeH5PpJf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmRRyNTZe18dTFcL1BTcdEqUuhnc2fu8XdBRJrSvE36oZRS1R8Wo6oMmMX9AAvPvqDJjeRYMmhF7emqKJSsuTcj",
  "key1": "5gi23BQj49KXiHNk1yLNHtyG6y7oeFpYnrRJssBK1FBamNWADMQ5ffxiVEpvnPM29zqUbrXvYrS38TvXwwgx9LCQ",
  "key2": "5oH8hw8RGPzm5N7tNwSuVy4Uf4qqJS5Xc9GUFPnn58Btt2v5uSYDiFo7FmfaS2mFq2rjmck2YvTSjdAqgMkJLRzN",
  "key3": "63v1gVe8LeQzeL78sVhBqgSphr2crCXxDwwakcCpJ3fic86XHGnMgwRtfViiERerjMjUj7yGM9LBTAsnZXSWn4G",
  "key4": "4eQX6VrGPmFApw8Hq3rTNJBGv3vKqHMkYN9uqjukxGMTMRNp4wkr7U8CWFQ4nSLWEAjs72JQAYH5P3N4T5jTG8c1",
  "key5": "2eKiDpZoZvPTNsuCfyxKao1TZ6FJmh9YtVyGEXMhcWjCoCHsteULBGWgczg7SgSmUu2qpM2XuZ6hfdMeTCXW4PDB",
  "key6": "5KaJjYDgAnGaRRcnsnSh9WQ6LnGRjcGwqoExMcmMZcdijKU9pCcayzaV1uM4BdbNdFkHGuF8iCFk22tUJDi1ATVk",
  "key7": "3879Wm5KzFiNZ4YPfQ77EXNU5A7hS1WDeHdvX8wuc1Q8XMx9YLB9Xsta5nPV3KE75A9cmqCqu58T8yNy3zkc2DP4",
  "key8": "5uphwkRyYKMgsGjJAZFFpFmALSLkYVP9C7ZUEmZNyGksTy2tQpK8Zsj68Q7eTSW8EXhxyPaMEcKZZ3DpMxTZ8JX1",
  "key9": "49Ay4XggpXAJXo7n8DfzxRM7wiEfvungb8Pz9oUBG5yxnsfdCSrex3zPc9HyRLjMz8J3WqN73LYUQtCjAyxKaUau",
  "key10": "28oAcuRVYzmCXsV8j61H76YZYLUVwZoxprWAtTjZzYZcziG1XVgHrSa2uwG913arou3zJgSHUrc9FZSw6U33zMXZ",
  "key11": "5WrioTvDUY13PZyjx1RTVutiYTPyziFmMPQJSwjaU22GMJ5DFUpfBSkfcJ9jDufd9GukmF62myU1vCbt5jpFz23P",
  "key12": "3TJXJB7n8Fcu1g7qVMgpa9iZYs3QvV5RqAMe12WDcX8xBxvh8K5yPGWNpu2kmb9M5s87k8eNQk1Lv6cr1YipEnxd",
  "key13": "34v1uPo2M5fsd2ev3FK595unqFi311ZSe3MCUxQb8VyxTUt8Afiop2AZwaR2mx5yJ7LW7HxxM7MMoMukNCwhkzbf",
  "key14": "53Gu7xhKkAqFKpEHFqcoPPnEWg8FUBYKPAkpzHb44huwu5CocK6oMa2zSqsbaAYCQjYcH51axCExmczedsNRymRv",
  "key15": "3EaKTa4iWDj76o8kytzce2KVX55tqYc4Lmy3Lvh4zhGuehLV2YAUGxPwxaVVXjnGjYSg9M2pEuXqbdEUvq5j8dr6",
  "key16": "R15b1mmTSp6rvxYDxhp5R2qYuYfqh8H7mVLVKAXA3fjEzCcqJoWnRsdHTdEP6RALFhSDUYrytQnmubvwYztyPmG",
  "key17": "5B7QasJUZFqjrBFo9MyDM7RB1da56f5DTWtdvAATAyaVTzajesJBSHvAU4PxNYt4TGcxqH68dYJFYaS7dpUfaV8U",
  "key18": "3rdbatzF53TLPnyHCCS19w5N3D3SGm8iC3WodXWjWHrTX5k8L8CGC3Nvb4iND45gmDXVRpkFEB5xM7MFomr5YGAT",
  "key19": "3r3APzDnwDdvM4J8hHMmHLfQi2hGT12nKBn2QthX7B3wGU3m151vjVzxg8v6rfoDdqpdpLggfuXNPrWNmkeCnMyM",
  "key20": "6tEhvqNYwmY8vhByYuArFq6bVBzXXxJ9b9KSFaJbuvt1tTr8WE9Y3TW1mKwL19mj3YpHBEwZcNbq539XWVuSCxb",
  "key21": "521Uk6ZjZKhdoVzB3ruXhrhQzHBr9WvnQy5iJmpFppZ323uDQaAxPkUUu6MDXwpkHE8hcKugRoaRsuSZGz5ezNec",
  "key22": "34b1G9MyMjQre7U7ugbqsgGWtcJXvXzmeiEKNw49YeivJ42T9ZRfqxpzsRvFHQ941wjzrAYWMiB7LymS4b7o6nSC",
  "key23": "646nYasHBjnK6ijucqDFKFGEdZvUZQtiAdzrzvPhioKCyHH3Ba7QwaQxWv2doeyGcmfcgMP7GE7UU5QT448xVSj9",
  "key24": "5gMNCLDwiGJZF3QNvRj2KvCu1Fo8qpVpQUsKv9qHJiysTEk665Zex28Ad4YMH4gQeBHZ7hTHpzk9vGmGzbkNDiEe",
  "key25": "Btn1DAjAV5gSVSnzuP84QuHeeQsP82yxdyU8vTbpiKJzhE5R5gzjpiECBSDUg1mAKVyqsnzhHp12v4JJczufwPJ",
  "key26": "3NGGyyzdq2ZBdcEiPbjCRVvWH8RuUr9rNethJHdgEKXx8CNh7bRaR8DB9G3GC9TofGudNoG4quAGEBSsq6Q8nLfM",
  "key27": "4PNMiWHYNSSD6GYxLTPxR7VBUWQHwqSxnwNKQJZtGT8Q6UNQMtbidkJtHCgEJ5usUo9Pz52DMoBNVaMn4jzNrQQP",
  "key28": "3p23aJkxBdcyw1UNKG2ZtbHkqpvzxuWAaRzdVSKwAdqfvcsDCppZa59QuCbxWpu54tczs4a9PCmFkrw3jnaCCmuq",
  "key29": "3UUSQrnp1xc5gCDs8XydDR8cvhysTfaMRdG6gpDqJyeuR9W7Ajk7Z6wCmTc4hYBar1UqdUzq56ZwQJedMyJX5tv2",
  "key30": "4a1R2HNoqrkx1b6z5JkTeJfobAbfNxph5z9TLZH8ht65DQeGWMBuywwCwtaeDUCToAfkZNJcQNT2DmatPeVnUV7m",
  "key31": "Z9mvdXzQTFiG7NP4977GL22LbT6vLW256nj7Kad8gn5B2VWfYAtuXKbPQ1TiFCb1VDyXYk2AHphoAKuqPLiASSp",
  "key32": "491VsJNcdtrypdwNuZsanzuVYPfu1xhvoN77SkytCKWp8HVaewhGvBADR8jgzWeKgyitaAitSNw8ZGK526jWbraY",
  "key33": "3PgLHwqT9p2CeoJEYSpNCPDzH5kgJawJmFr9YibdPx344HWPyFnEbE8fBwLpEXobWH3MSiARNpSkmTkFBrEDdRxP",
  "key34": "3ntuzJ1MAn1t7tb8dXiC54vL2odMgDxmd17YY8MnEPQAdDwLxA4TSZFsH5tP8TgqfUbJyckf9Bm3CvNtxjWRtJ2h"
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
