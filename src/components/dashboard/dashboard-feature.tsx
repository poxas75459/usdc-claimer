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
    "2JkgXh2YaLmLGzUrg3GUWvuXYXT7zrK4i5eN69MPguj7G893NMup9E22Nfs5jSZu5w577mUBuSVjKiZhQiTyQ6Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQXA8Ywh1nP1vGK8ndn7ecQowZRFAvVGocgLiZoanScckrtzupJ3QwvTLnQFgmkaK8PQ5nB9aeRueo5q6SJQjW4",
  "key1": "3xVn5JKqZFgxAdeSeSEoLBL4etzkhX1VvBE2NRuhMhuSMqm9tkmGkTa1pFAokXwPj1C2M1UvTTisY5YAp6eUeiWo",
  "key2": "4RKDV5e4u19D1jz13D4WeLjC3vvbDqvVy8N7B1VFdRhJV6gvDeC1KroVekk9N5xYhiqLftzaqLwTHYZu624bwukv",
  "key3": "3N1FDCK3uM8FJiLYBCa1bHe3JBqofU2mvt93k32RNTP6AYBeckaA9Ma1cHx3uX3sEDkY4rLaoXpU6M4mD738DeWk",
  "key4": "3kBrUft6b8ZP4Xp28FKee5LKqYn1Z2x1vkZD6vBPXRvFuRAPHif9kf4VCURoVwiiDE5Kwv5a3ZjkLcqhRTaueRr7",
  "key5": "UaBjAJrLAVuNZa1LML9EnYJQnN9CN8AR3cEUFi9WyRqbh3LgfvVNp5XRV7q7FRbVmBbCLwqDeKLT7RoycUozYRn",
  "key6": "66MYkU5fSHcwo4YwKAjR8JDigy779dNwoEVBvuSxAC3Q84MTJej9ZnyT3t9byMWNpYL6q4RHvC6MxuAj8xHeFxJM",
  "key7": "4fMAddXiymTgZQ8e2uxbSXZuV1KD3XSD2r4pvoG1GNddWPzQQcrd6qjYMVjN39QJEK5nPtTAMiahy8A3rTT28v36",
  "key8": "5JQ5E9wMxSgieDWn2XeXAhkoQHM6KmPKkUwKX6ZMxqLio74eeSYppG1t8eHL43GV1ENviB7bgDR2qfbGoiz9wdc8",
  "key9": "576iutGjqhabVmL7C2TGJcbifaUgYYJPLDeQLzPhaUWqyZqmYk237op9pk8nMF74iXwMf99sKh3W8SBMP3Z5DRHL",
  "key10": "3NTc957YU1XzkUPgKDGebZ5doQCA6qUo9W2SpRhcm6ZMbrzHi2hycnfhoH1hFxbNUtHmcGdFqs97nUpEJ4k1vYtS",
  "key11": "2mzdJNXHuuqYuXcoe2QBeESQQVVcThbbYk9c7i8GUgxminkF7YQVdT3jpLjPkn9YGJTVxxcorwYd4gwwX9y29cff",
  "key12": "4r6P8gUvNC4nKnNanQNymCCeMLMYYewoerFRs2hycUUSzCJzrPMMRb1CEpR4AnXpRnEQBWyHr8cupH8cztETBAcp",
  "key13": "51FwvAaKnSGimNEgCmNPA8rUR3Ua2xz7rXRevHjD5mYzReucQgCvcXnKsoFD2Lu4jxZkwCpYZAuL2KAVuWsf5FMe",
  "key14": "2gneE2i498F2V7sDNPfJfTrn1CqtH76VqwgwArtk2cuyeTeAiRxV9RHUN21PKWY3Pvk87qpD5TZVHyKPjdUaVpT9",
  "key15": "myWsaVmsGNyhXi5wu9EwnVMyH8uFVuaKbSqx4As2XiqhrWsbrr3QACh4vj8VAQs6wggDLGm3PR9DEzYzN8G9Sb1",
  "key16": "2K5UnrkrhcASYhu464DEbbZhwB8nN1qPFCMTHZmMjnfGBTR4kqTvAgGcC81Uart8XZqb1bNoPB9YSTksXPTqN6CN",
  "key17": "3tGoUu5Xoc1Q1WjaBz49rYhoFor66WtDohs7f4u6ZieeCKQxY8KrxnWTRxkB8yAz4q6A9DyDqpuc67YEZc3BsqC7",
  "key18": "3yLWVZKwMmxcU2VtATHEo2bSmXv8wP97m6kasfj8VaZawHbqzAU1KXxBtDnJtt5jddaKHhupdYvhXxGoDuhPuohz",
  "key19": "2a8CQ825962VpmBxw13EgS1VzEz5yrtrRjfkfF3q6TL99YWJ6HockocGgYfzKC1Yeroy2SZCttRdQUXkGRPkp2Ua",
  "key20": "2211ccEHsESs2p4by7DRdkH3yKNwJF6mGDSEr9Fp3hyVMv3nrFKZjJyvMWEjYKSfBBRXRaB2rECkPhKyJtdvQMef",
  "key21": "61pkWRXGjeDMGBSYUxjNt2HBR1rwbkBR3C1KzE6AbYL3N8L8LLLLqp5FKNb5u2PNA7P4t3yEdKc8gUbfKNXskqtv",
  "key22": "58U6EDxXbt6ziurtBxcsJou9eo24EFXt9NZ152aWhg9jeP1uemwL2DreKPJ7aS9CTMtrb7iHEhCM4czM4YNFbKrF",
  "key23": "5VUzZbaJgwNPxWrF35tqG9Wfrqo3MVozRq3AjsPWiwctWDWMKA3HcBnJ99NKrUkyncLm4ZR777EdYTxLmNHSMsA2",
  "key24": "3kZLAkybmVNmKwDRfizTAebcTZnKndQiFj5vNJxxRQYYeH53k48zjU9WC254xhsi17ieK8BVUvhPyGEyaD63uxHt",
  "key25": "4JQHAWriea6ZR8oCHZ6a4VH1c2jYNohhvGircRJFQEMcFtdkraKMqXgwEccjzSwhPXUgGA1FRWxe2ztTQkhqFpGB",
  "key26": "3mw2BKxabhaSXS5pVzSNtsc1LKnwyy6QBBjqka8kjtCFY3kp9Au693qfUh8mrAztGSCZakj9w3q3Lqj7FpTWeHn8",
  "key27": "2RqWyU5QtQg88THZ6DJrw2EQCS8WNomg4HYEeBbc7X29LpsdpSsWz45WgWrjqT8vRgzdEc3nCBf1UCeAfSDZpwhQ",
  "key28": "5GGrwpb6s4jG61tSXwbzJbJ4Tdt6HVP2Zsa9HSYqUVEzXarR95oRYqspc5JNStR1ESuZv46UL693UwsWSihjNNbu",
  "key29": "3aGbJZ94BWCjM8LB4JwVvYWmL6ndL7GmZqqHkMeof4CfVif5MPqsXjM1Gh26z3RvmnyzQCNAegybL5ZyXMBk4K2U",
  "key30": "65wTsauKPd7NtwFXqmro8ySNxuQkUbTcDf3cC3jq9aUfXkwefr3CMnq95C2zUSbRUqXPfhHkj2giUoqU4zbuhBTz",
  "key31": "2vZZXrT2kKmtmVet3q1WY1ZSDWD47e5Md8xph1Nh24mV95StHZXAmAAR5sFDyZMW2bMkRv24fTcEGNC4x3iMZS8f",
  "key32": "4QQJbqkq37iUFrR5rpwy1D16STKzzZu5CpohU3VVgGtQtJkWPdDYq61DmjQgX8ZB7KURS2eKVPPrZskk5F1jgEss",
  "key33": "ATSgdhAw7PSgv4usFMvRSyVCrZn6cqykuwcvCTrw45yBw1nEd6z56c2cExQKH5zBTG13Pj2z69yJavJ5kdNPPMJ",
  "key34": "44sNeiT2DbRmz5sAW78eVy4d4ySnZXbHdSsxktLpgEVCYSstXv89q8AcieKPmjS7gqwtDebePoKs8yr44BcMZcmH",
  "key35": "5631DKdjsL9aogE15MXFTbXGrhWLJa52A5kXrLUmgB8BjU2qEjFSqJMvHtnTJKknpA17FU5bHwTaVKYg84VwgpME",
  "key36": "43q7c3HFJc1XiJ6G5Dw92X4bWTQ2uzP7KabaKW9QKgR4thTDxMeiQyKwsvZNSG66GQsy4cBf1aUHbuo5TuUx8ZEz",
  "key37": "2SkpeA39jKLbRxmHXPfGNEheeE2yguLvy4mZ9TZEBWjti1ADpKhnSV79wVdbkjhgeKrDwrpU2xGr8KTvuq8ux8LT",
  "key38": "CK3KYZJhkoQpKLjY7Yppde25Vx3kyqtqxWKt3Ur5MLB4zpD74bndGAPbQgiC3ZwoeFbB63oL9GZnSvyVLgsCBqs",
  "key39": "2xCfdQ1NdjbhKT9cqXZSX3ciDYsr6v9zr7qHGdVhRcG8C1KzpWVNMxHyqaJ9zm7oRP9YavyCaFaAenXzyj5YtHHY",
  "key40": "XYrmzNhJz58iDRbwmTq8rUViWrkTNWy5U4z1PATtxj8j7McGz8k4RfSsVFvCZDURg3XotNA9Gregc6dTNAkLZHa",
  "key41": "5jdfYnnUqr5VAfBiPBvy138UPGursWjBie97hCiNWuPPujmnDWMTjRVoJwT5qZr6dqq4ob8h1SCAhbx3SjCYBCAy"
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
