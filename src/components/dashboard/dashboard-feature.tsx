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
    "5WrWcTEwh65STNxp7z2LGJoepnFzbPF9EYfC8ELd2PuFZKaCLLzFQVrjXKhyKwG85WiK1b2Thxtx9kPUEMEBDQum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TU2FEh8gCk7FULkJvzwCULTAHTR2oQsHzxYPYYe48qWgGKEhH5CiZPTQQf4KHp6MkQFtFfQ1qybjGoi9efLZgbE",
  "key1": "2QKkxtp1JWs5mmNxLgTV85GnMgUY8hp1qTnCw4SRRVwArZkQd2zyUthaTRCkhp2TD53z2Asn87zByh6Sqo1o7zYk",
  "key2": "23odXoHFh3hh8wb8CUNf8aczvfqnqdsjQwg5g2rNYtBAdsQCkpyAqLayDQnCtMmLahKzDKcEwfeotQqyQqmwwK64",
  "key3": "rSananKzVVPztrNv8KLR23T7K425Qi4PQ6MnEeFFXDpdk8M5t9H7aem3zKS7R3qffS9h3gtBFnTGL5mdzuRDUyZ",
  "key4": "gXdcicTC5EXuHJvQvfoqs2rmXz9qdEWemqKc91ZhEFL2V6NGjXZKpQPigDDZmbUyDWao2vhAZQFduadULpSR92L",
  "key5": "Amk2pxbhWCcT4EiLimcorqGNL8pPJxeNaEK2NGEYGTeC2LTEqXg7D5YSzzunrsGQeWEQzNCwVLNySVdKA2fL4uX",
  "key6": "4jNshA1pKuygbcN5rLzP5nd8uMPLHPtTbdRSteqnnUMc7fz6RaekaweKSrVadXF1GU9FNdvkQmzu6RvSPgd8K7jd",
  "key7": "zx9vAJSz8U5HEx2tAbBwEM5rbdrU4E6qJfSgc8i5Avt4Z99kay2nBE8UpxhTRK8MrWZ8DZBQ2VmYK4UuYDHSTha",
  "key8": "4dnB83xrRHvTgz4ZHzzzjoc7YoN6okeKzu5WUv3iwxnNbf4FGSKV1eYdy5rAX3zAppkkXs57c1okEs3Lr2yTMsZH",
  "key9": "656ZRonxx4WA9aHVupxidZRB4UMhsmPxoHNhYes8HALtzy4SAxcnZ8rLbkMMcVjjvVL9FGh4WDdEGgQLbvW2rRgh",
  "key10": "2U4otMrxBcqMKpSpRsQjmbQLiNDvzd8shy5jjj6MEo3tf9TPLWDbFAHT1ygmwJFoUyq5y3HnNGR92sZjFKL73m1G",
  "key11": "2YZzvKpviN2mUA6iueR4XG68JSMwHrHinsETrqgpL3wfb8gQLiK1czEAonQJ61Md9c9NFrPcgJu1Pt9sqDwTQn7w",
  "key12": "2oAPsgqedNAB4NMC3LkXc7XdVxhc7daLVNiNbj68rv7z6W9JGReVy4LPdVp4ARJVbMnjjEEKEeBZSzpoi1tF2BUz",
  "key13": "21Ryf3fcm8dwjqUtJhoMzDeubrLKPByJrPAnZFc7ZpjjNc3hM8jbpDj86giTPxqVRPK9DDqJn2fuVu9KEw2uXNgx",
  "key14": "4NnYFVxHYrsv2kpAAbVbr1H9pMYttKRkRNh7oweA1iQA4zL81gJAxEf9w1CSHSTHk7SbVkhyt4LyNk4m1JZDexwd",
  "key15": "85JdJR2sPDsL5PTyLTdB556XmGWwtPzJRnmpJYj8nSxqnmA6Fogm1VUHty9emnzJEzhR7kBy2k4pBHprKFtH8Ev",
  "key16": "4b3M2LEKwrokNk19hLH18X4J9Nj9yKye3PwRAzgt7WfFvr8bf8iWzQQGyXJVetKM14VXhr1uiKamf58wth1vf2gv",
  "key17": "4CtnSCy1Za4fQPYsZH2LGBBMhsBRqmwkbX4fgNvb1bebZ4MHQQLowwFri9R86fSu6UT7b25PXVGMMuHe7pjf6hJP",
  "key18": "2c9sYNiMgjn4Vkc5Lq6bTeYHSXwcFQZjpJSoNd4CVLfpMcm1u1ZDgousCvSGFkxPo6fGkcAXk2apFGVFtJUmc1vG",
  "key19": "3BNG4zvKFpJhTd5GCdmmxXWZ5fVZVHUWXQWkRecP8Bwp7FQ8nV6AXAJifyGpSuACL2nrWkCBLKoLeiLUiqwkFiEt",
  "key20": "C8tGw6RuuA2HapGvBTxhzSiqrwenmJCz8eSJLdw84LMtk5bBA7zat6TjJ4b5g1iesWGhk3fp8hTAUhQVvPrm1Dt",
  "key21": "3sj1enTkGAaXTYeDybn1LXPEakgaHhCK6cx31LBYdSHWjyFaqRyBSkH5uTuaJQEhvthmptFTFeec93KAsbXDq7cA",
  "key22": "4dMe7y7bngMZ2AQnqxNsY9bLkrrYmXdYBunvteJbDnxiHtkPALBXob16vkKW4yv58ehtpixE2f6XuRjiMbXRBVwS",
  "key23": "63xvi76APuyBD8ZnNENwaLc6MgnjxHhxQDm87nRpHp12MmZyL7CiTNZKL9b7KVrQ8jKhL88r1mcvmmhhenKzXAEd",
  "key24": "34Yus2P5zEhEqQAznBJXtSqD9mjzgFYo5kLoZTs6CAGp97f7XHQNwTWrYshtzCqb5bFxmyc7SBLhKtwxiv3Q69uL",
  "key25": "3VY3r8o3uiZMGeser13i6U2pLCtKJQXhsQ9Y6iVbg1pKAxAcn3Mpaem4Zec8g47hdxB4Kvm8ai9zR8MozBfE79Q2",
  "key26": "4rjEpGXysgySCZnv1NxHmGavadvTvzZMBCgVjNxrUDSxwCDZf7taDmLnGczVv4DcuHBzrs8uSN9Jrp7jVzDXYLEf",
  "key27": "4dq8JkoR1m3w8USPGcuGVY8LieLsN2j6eTJ4GM6FFGbhUW4fbjJVFeVy6R1M2a1p3WEo5jqUCoDyg2Jeq1JXaLyX",
  "key28": "ATiqXLppnnzZzCzpPjRfzqFCFBL27VZPGS8JmQUxSLkMNPpqpSq8RAK8S5tXUWnzDZQbaV2GEWVwD2TfUQS3365",
  "key29": "5oMHMq6cRGn36GUzZsMnhns8dhy1R1TxJSrHJ516WyYRid54wB97h5XGbhbobutuZeaQ2jq2QynB32w9X3VCuAXR",
  "key30": "4YRLMFszDuYcWrUvGdhFoQmLgGXpJH4L5eqNkSqcfsArsprRK2RHV9sH7ahhxFtb4vc9fxivHQVY7TjQVi8XXLaz",
  "key31": "n1199ExetBtBCTUTLNX2CTztpTQSe9yj9cbM8jFBonoLrEQnZPx22HV7NGNHS2kK3X4ZFZrCA8DsjiZLhtUMao5",
  "key32": "5bsjtKY821vNa7nVMbxveB1hS3BGxvHekVKaRCA3m1oAW86FF8iTC1Y32bxDs4oNXR5ryeWv9GfDAitNoPMKwZff",
  "key33": "4rigouvq1vvNQdzLCSg2pfvQaUD2FVWWyi2wKwe4zMJfpA5t5N4R912VGmVagF92iV8yZdeMt9XEjusQKeh3wDrx",
  "key34": "2SzzdmTd9UVUFGwgWeSkdTAWEoFqrB9nXF4y1HVFWBdD5AonQ5uvFjwHttYoaEtbX5vArxnuLHxnFBgez9WgNG8Y",
  "key35": "34uLk5rnLQ7NKM8KWCnmFNJWLtyog54UMX47pxkJDwU2PTjLFe7qsx3NMxK8X8VJmi9M5MPNd2rnP7bHJqCLvbdw",
  "key36": "4PUHHGmheEkZXEBvXrQ6HUqLwRaXs5wXkHxCgCGmY4D6NXELkiHUQywoQHwJG83C3hciGSz4NJrwVGNGRDhgbnzJ",
  "key37": "58HCuTHQLgzBce7XAiui465XXbvSJ18VC8m4aVDCDL4C9jLKxkHXHWP75mumgqpRQFV8hLEt4zLSgkpej9DNNzX1",
  "key38": "2yhv8QKZwDq52XWvNF1vZtbeUeMsetCt6r6y8iqxhurYXkUKNCNSj1xzJ75bZZUtpypFXBdZqEtnVn5MZSJ4Vpjo",
  "key39": "2gb7nNiBAkVUnvzuP4Nquz6vxWZEfdF2t1yacpQHgbcM7tr8MWNcVGX4yB2LtfAxwdrzzKPDjDja7UjiYM2hWuzj",
  "key40": "5TUd2mWr9J6fxLwhc54JcVtf9mv6QU1JnJVKcsuC3eFtmQwFi51AfnNnpcHMC8HZ4TgYHVizeypMVCBR9RkV1LHB",
  "key41": "61zrafPAC1w2g4xzCnnq3t7ziS8s6KzCCXdX7ot7FDwa4pRTMhJMLZWJ1YLBJ5B6Q7Mv3tFC2gyCBzPLcxF7ze6G"
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
