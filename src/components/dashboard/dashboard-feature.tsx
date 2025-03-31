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
    "2uNHJSjBFqHNZLDaqd8fevURu3cLyGvZ9ocMqHQwdghrhNiL1wnGtWW8TMmhDh9ZnnnVU8HYN2LF83uVZ1bPU5Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tW7ZXP3EFZuxmvAzwe5xjQcv38FRyvo3ACBBhpBuYpKRE1QQ5nhpYSYeD36JacxW9MGHqWSb6c1Dd42U57yMJcw",
  "key1": "2KexW44zbrNv7QWQBjnX7xExGDfCFTZy9jE8gJ4xbcyuv1kjrYCeZVpTrdwCMsjnKyjsCwkzi2pLfjDCMRCcy8RJ",
  "key2": "4xvhfXUQaE1zpHyVZPZ6fzTZ1fspxg5xmdmSGFb7PSLvNxuNCyaEnmqNZPnppnN4bXTNJMKCs9q26zMTWQbmF6v8",
  "key3": "3w88VR8GqpMCnhoR5dsECa2bmketfY7ifrQoUryc98DA72ugBfudKF732AD7RbWF8uhJ3RzhJ1cZinqnTikqeLSq",
  "key4": "35NJS38iiWjXaqWZgnA4t1Vux6mtPcUVdzb838gaFRMW4TFLRfi4qBdN8KCxZaf3GZ67vz5GYyrfh3cm8CXvRbGk",
  "key5": "5XE6JkZ1SrNJN6EWm1dKHpvoC3fsGSYLhRb2HMtSrzT7W1L8j3D41CAekF1JYM6n1cwogAFp5kjWedcKyXny1hMw",
  "key6": "3JnSZEYvAN2vf4PxdSy1kGEJG9orH8GE82UeMsWeq9n6rm1sXK5cdvC1FzLnzUhVpzMyVFhwCd5L9DHpnBpZ1SK9",
  "key7": "3ehUCnsEKgxZRw18A1u5AHXE7ozrH3prJomLHzrVV61T3WfC5CU5yZAFkECxNvkgtJRmAMWz41fWRJnJYe7rhyUP",
  "key8": "5ZVHU4dwyAhmA5DJbu1sQNE2UAVsZvRwGjy7V1SFrHtuxqeXz3koX9qWKBARphYCX4MA4rpEoiA33KeGz8UTveqg",
  "key9": "4crZLgiqYt5tELsGcXEpZxVpUUbYBMSDAzGrgpHtibiww3kbgoLtFN7NBiv9ZxpiYZS8zMFxyGE6RgmyfoETFswR",
  "key10": "4eDDJbekRaBt4m3rRSgcYUe6evdfa8kyFKyv89xxyEyfpadUS9YRy5VJkUyrX2XYnAU4t8zXfXuVJFyrwR8kwipn",
  "key11": "t8VZtX2kiQAB4pciAQ1YWUpSS22Ebp4HXLJmn29C8BU5iokJT9jDauXNvZWhpNTJUHNiP7NBLRukGTYq5eaY5pG",
  "key12": "2LzNjFDGe6mqZBLDMHdrVoW9h9sVk8kmBg4y6Q6XB2EqASMxeBXXrqTTRFvtXEnWL3x7zeTP5KWDtonLPp9m5q6m",
  "key13": "3vAe5Q4bVPkR3EnSFVQ2jrjdJpdv7irrTSYD55K46QMU5dU8c9XCAYasMiA6Lo29g5Zz7mdZaVeFmvVbR19u4r7W",
  "key14": "sU2CofupoAwQYePsqSQLmsAmGUPj17ggjKEvMXbc7my6GQ8hVQr2NUtPVrAXeMHndMkBaoSrdvjXche8iAkiu1t",
  "key15": "4j4keSxc2Vh94rYAhgAjWuZfwxshFiyHHr4xJPBpDBCuNbzXKGJ9BDrTegEQSH7vudBKsH8kT7FmvExX5BZP1un8",
  "key16": "3xgDghWftAcDXF8DWxwVBw6j8DFSGNDVifVi5XRY9YTfJEJ5B9xgTCEj3Ar2RTxxYCSrP67EPHRtqHj5MyGA2W96",
  "key17": "3kbWpQre5vgeqM1ZUHzEw3MPknnAMn2ptojteScQJYM2yeGhRymZfnAXuN7dmoRiptBA3nRtVNtMMcBPRXsTjbhj",
  "key18": "3TwvfByFtN4DcC8dPpvMUDMB4E3enfZhKNxzEnvBZgY6TJAjg9G5F1eGktFTnjFYUVTuqUEbHQpETqgHMkGMMWjo",
  "key19": "38P55ZL7sufqkW4isUxisBC4hNuJuHA3ipuv9cAUpQpQHrgLA2vZft7uwY5XD1v7gS1n9LvUMYoMB4sGkxv23zaA",
  "key20": "3EgZXK4L6HuFv1dGUoiC45TBUMJg2eL3ehp1Kvk6x33HZ1Rs58b5BtCBKnbJbo66F5tEAoNGq25kv68nhMme474e",
  "key21": "YSFymnX3zEYr9fL7DjQ72qoE61TezMvniUXdHWVXj5UpJ4UyBwBHGhLyPhgnoXFAiKL4VMSJ4Ggg4EMWv6bhuMb",
  "key22": "2tVg1vYvV6gVFzC2Meb3GwaJX88SJjRVEcJLm3ACh8L5Riv6Ah3z2GWqYD6WR7i5YJarGBfkeZAtjc15hqRia9yG",
  "key23": "2LCdgq2TqttuDK4PLe82BLsTqaExNPNLPkkdB8TLJkZCbYzzRU1x5RsG3rKc5DMAqTdftHvgECcVjwubA3Jk2wJe",
  "key24": "23NYd738Fi2bpBiBpMu9FHawVZCo8eNBfWfNugWAkshnYtptfzCt3PPFGdLZx433rfw8tzbKEUgMndd5e6L7zkoQ",
  "key25": "4FyGQTmhyeRLbH5h82s6C5LGcwyG43rgwKrrqW8Jxd8SaMdZzm1tFmK8sTSpZ7gBYCZWUePgT23JhPsTqPuxci7y",
  "key26": "4EfYZWy9P84QDowCxCzGci94rtXVVHfVUipmUREqkF7RNe7fDidQZB31LbxhjKsU72TruUiPgfWDdbZ5Yvfpm4tQ",
  "key27": "58eUnDcDuHmhK8DE1UYREmDJTxsA61rg5BmPzyRDCjYayxzZmtdAV8BTrqAQhyQxrHLGvp1yggvtCCHG7FXSRf81",
  "key28": "5Bfecn1zMtrEMQ3jmQ3EErWmZRg5ERhJ6fd9o1DTbo53Geoz7kPmmcsNwkhRwZaEcLZP43yF25LVifUSmrmHmgWL",
  "key29": "3gfj4jAwrFx4317NPkxPwZGm1osP8tuwRcTJ3HAK7zHRkXt8N5oLFCFu6kPSj49xdfwxAmxfdV1uNsnjzAoE2PRb",
  "key30": "3iYXK4yox3e8WLpSXQ4ExPq11rdAvQuADhxW5GycxkbKhTkvwP2au9DNyW8o9XWuJNp6oJpeem2sMHgKWgggVX75",
  "key31": "4rJv2YV9CNetCWFV6F6tZWaL5q2Dr3363FwYGRLnZvWei9rAQWNp5DDhUwsWpxeCcw8rZXNN6LDeRMLqpnjXbgoE",
  "key32": "3G2qxb7uYTjka4SUNTFfmp2hKfNHkXF4aoE1RvBKfCDHu6DGpU21TEqsr21Xi93Vw6o8PAS7XPwmoKck76iyrfUQ",
  "key33": "2uVe8hapxbW9w7rqZFh7esR1fickMG7kgg8T8iafiT9ofZQSgmgwfdcbQiBju23FEM5Qp2H1wCnT9yBHmGkGf6SZ",
  "key34": "4apVZ1DCKe2vXwaYg68xSkvuK2oucMcBA4m4XpJxM9MLtviRneQcjeKy92fG8mLZBmhkvEivQmmt5EPgLss3d4LB",
  "key35": "4tAJW3LDDDhvbFcDssYNc4DfeowVnFoyCZWHaJqfTey5Uqd6YG4R3bUe7oQwS11Tyawzz2UZk6EGgo3oQHAqvQgZ",
  "key36": "5iKVmFfiEQKS8DwvA4KrraVEX4CkpmBNHUH2eq4xjSfoDMmZDNFbqG16sRwC2V1soMsFXGmVh3cabYauEKTKntvX",
  "key37": "49nFrEfJi4P4VSb6fr6hXPaTaGycLNLmc9pam31nNB1S8pZYS7cE9tQgjjjFB1f5e4ujroMfssR1AHAbYUy7Jkqp",
  "key38": "3aJJQrHQQK4UzDu98Jta6xW3uSG3b1kvmCSPgg55iUVFtSXLadeqWYsryhMQNf2frFkQELVLvNCWa99zVRRToTUj",
  "key39": "2WF1JEuBKmTrnxp5Y2kwMsFjejsw54ubUNMdM4W2qqQ4sfXRAAaZZcwkujWPFyrCsBNJn8HA3w2YS4xqQZqGAAWT",
  "key40": "2EvQcu52nK3qd9srQJ2zCizYnxdEAa2e2zCPDN3NfWef3eQ1K8g37TnCg6zYz8jLJUAwXE18YUdMj2jaX2yUzMka",
  "key41": "h7EZmRMM9N4YagabHTjYACQFmdJ5Wkb89cEgcvPB9vR8GeKAaka38tkRc9xvqjjmt7ThjnkJc7X6S36rBG7GqaW",
  "key42": "55kzXiCkCnZvahyhcRB98Lr3PoVJZMzF4PYxQyZ1gU8cwQQPDgAyKkATSDUiuuuL6Jm6SwMMTjbDXFJNXkU9doU5",
  "key43": "477tZWnvA1E6BzomUddn1prbLi4s3spn8LkfKWHFZgRJhFRpc5uX3QUJFvyabALxWhNJieNXuAGKP9LaAQWNaMAm",
  "key44": "21T2hV2YKV4TxvoEpoj1wwDMXVhe4VATTdzzT3FXtGwJjPsGhuFKUE36U3xok9fF5fBdaDh1ABb6Dxv47AcuxHzq",
  "key45": "2VPYUpvzhHShgjSSkLW45bhgf9mJfDiqBTZkS21syUmjrEcM1QdyMbvLCKpqyr8JKedYmBounH4U8f29Ba8mNhVn",
  "key46": "5NesniRjBfERLVeYeGPV67cCAWmJmf4tH2CQDur36oXdRLT3xxxqwiR8kXJrJKP2inPa8urC2DgwT8USDWtHk2SU",
  "key47": "67TFqiNkZBJ4iG1Fb9uomgnWip98kgcURQTtRcTbtWyZ4THRZRPh2j7ecQH93Zynvi2cpVnYDaECKz5ThgJYd73A",
  "key48": "3Lm3ztEciWdjZsDmr3tufCzfmKmUTWpHg2XtwqAWiYfZPNBnE8fPaMzyvSYPg1NygSgtjemNQMMAYNZfK9kRLaQ6",
  "key49": "4tYCFSvjsy8TCCwWXwhLVSwBswwHBLRUi5vcDnP8LAeXpaRMivB5QtsBtW7aubBA4cYZUCPT6q2rPULSDU1JnXKJ"
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
