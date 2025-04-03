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
    "4fiPF7aeg4cZ5sdsMBeL6tigWweSJurtUzMW5w7FQr4iXM3ZF3VqqPb8jDx1pGuR3Eb2Y7MRww9CAUGMWZJxEAUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bitSod4Fozx1pX4bawLr6uNgHukCxbKv73ZEmgaMSp3fbRn85tmMUQuaJof3EqmNKSqT7JDi6Rv7UD7TaMETMQs",
  "key1": "3A64wf3c8EAYVEYWSqTMWVWv3no2Da3o7DZad376wpzKh83Z7EsPxcU4Qj4JXT7BQguvHTMceCsrxRLRSwM7pHCX",
  "key2": "4t5iScEyeTtR3Bm6GsG5vfDoagLFd4tGJuQWzYCrtuGDUPaLkD3hE5VtoBcyyzLsr5J6BfNG4tuCJWhbtjw329kR",
  "key3": "3vEjZN8tCSzUhyv1HUwtoZL9b4i3mFcfcAmhLxZmvftdErHBKUxmi1vxN6fqKfBYGy3vXYXfvYqYsAupKQFXoPfB",
  "key4": "5Q6pf5G668FKqgfpFvj9gPavKCzzu8VJrQLWdyo2povo6y82jQaDuBhziabPrdUd4ivDARQff8zoBztjsANNcKnF",
  "key5": "25dYdMHfcj8kAtAHX6cBZjGUXzSK1TT3jCGPHVKtmdKtndRmJQ8mnF5HUSFajgkhqd5PVkHSX8Fysvv6FRzpyNMs",
  "key6": "4KZpsPQzQhkXPE9LsadZxMsTMTEPSQwgyUjoVvt4xPANDZqT2uDgQgNdWbReW9EgwLq251FtLuAUQnTj1GVRgUUi",
  "key7": "5UG4yU1tcaYY5mQJ1uKE7XfxitM1kse56gFuc9S9eRactc8isFsW6okcm1pWxQz6YajKuCCNHvR81xM39XP4RPbN",
  "key8": "5kfrkqQDWVJSHAXAywR5iUfqohvR1pu9coWWKsssSSUmxCfzCKeiXqYYueFQ8dSYceXxKG9iQSFNhS5rL3SPsNYZ",
  "key9": "32N6PSgfSqPhs62hFYzBVEdeEBaquXK69mjAgbvH99uvYY4r5vXsrJzMkdEbnEa5RJ3VsPGLVEDGL9RYYtsXEHCh",
  "key10": "56LeRSBNqzLXxfVzZk5heRPtJrtBccbceiBJp4yGvjwGejTAL9kW3FEybs9WTZLSHVKsbje1WYUgWVR6gihnUmTY",
  "key11": "4btnptNoJpcRWmGAEqNhLjF6KmVieUknPthqApPkhqfY6SAWsyknaER2gtLFT46jGReC8drmWTUBekJyuVLN5HEn",
  "key12": "qWb9mtruSRrw9G69uNjWvic7c3FxMN5yeGbHZVJLoYc4dzqAUf5vD7vDm2WkXcMiQaQReA1wz7fYEG2JU9JkLJh",
  "key13": "eEwPvp4rdHuXchQjaKDzDJL56G17bxaS967LVwD8hKpEnkPnBZDDgNyzZWsB6dL9hHgZ3eHXJTp96Tt5cQiKDd5",
  "key14": "3mVJm29TH9UtDgyUu8yDJrqJLZ72mTkjiHaAwXL2JAet76Dw9DUza88uoywfrM3CoMJMh5KtYzfNbZ2p2pA25UZ6",
  "key15": "qRH4YfCeqL7KU23JqMA6updEvhpjeHnaKWXdUdjyWH4Dgw9fBHWykPmxBnPm1F1U3bngXecHUX5t2GkZtpRMDT3",
  "key16": "3cp59TvHFAcQV5gYXWVVzWEDk3CjqWHb6UdHaHPukVJ1dGsowXU33aTLwoXK643p2WopgCzXUBR5rvJhtTDCDqfN",
  "key17": "4TuVXX5ZPDcc9nTgoJ19DMvVQBzBRasf2arx5VU5yKqaopPkHG3yE6LoQLNnRZ2heLhNePvatAWcdXXSGWBTNcG2",
  "key18": "5Kypyp79UGHhCRyU7ypzvdpdzYJQpPvexE5xYEGYurg7monXetzMXrgUekXdGoVdH9pmGNkMyZFt1iwNneFpZuCp",
  "key19": "4m7FPQhg6c2B2ZLXUJ3pv4bHG3e4TjVesLQdYBxB7DSKqtksjJ5Xu2z13xM6Sv4YZVvckZtzr5oenYVScQSEBtB3",
  "key20": "3HtJH7bLKVnXtXePyCDWd4Vow3AgoaZay7xygeBs6Wz1AkwaKuwVd4gEHj5MyzYTRFFZaFz5E2RwzUkrjNpwpWjW",
  "key21": "33cwenvEHsRtz4db5f76UZmhSmHUXYCYQmWQeefXxgHpYekpd4kUDPgUkYthEFGw1dw8sxNjR9BHeE6PqiuTpGJf",
  "key22": "5jmywfuWS4mKrzra8JWMjKs6vy5KktYL9LMVUsXukSqTc6ziR3cnXeWwQaK6QFagS7zfDNj7hwY1qjLrnhxD3zfg",
  "key23": "3D1ZmFM3f8Dtz8MGR89PxvNPBoXdMS9ZabcuNn97ajZeZuKXNcWTKsbi85R5zvRsJ5EEwhjmUJVJ8AcB54sZEg5t",
  "key24": "2f1gHtD44cDhGk9gzUVd8gBdBiLakHv99ZQ6heaNG7fVH53n3AZq4FoNYqxbM8VJLLcQov17CkfEomUCimjUn6px",
  "key25": "Gg6uUuupzEE6r7DxqanGJFVwH44ggwQSyxf7V9Km9ZbK7MpbuGjVxhpmAD6zKnqaHUVhRYrywqHmXQNPDpR7JJQ",
  "key26": "3Yhha8P5T77HQYiABxPc2z5gYDYReojgBxA1nPSqugGUhc8BxbzFt8DWUfCDCMS2DgGVWcwHWbKHFZHKpFTvVyNS",
  "key27": "4DK8ezghrKgNgp34N3hJ2vQZPU8d42cL5J2pGM6xnknAPMafhfhqUuB7KCktH1u7GocEaXmPxhg9M8CNtWhVWFP8",
  "key28": "5hVzpkth3C3c41a3ddTo8tU9fphAo5A1FKj9RnBWnAoZ9mxWYRNMrfWTSJzHa1dunuJRa3N14TfDQmwFzU5AByP9",
  "key29": "3viSstNfCmaU87cowujPA7ooyrngbaK26tTzZzS8tNunupXafZqLmqezGWDaPDbfuqiadr3QwfUf3MZotDCpHadm",
  "key30": "jLpQULrzH92c3Yrn6PtzBjhV6Wronzc15R2PhmfZovaPYY8T6EDvqAmTYpJk2XznrZN25cGoeu7uQjWHX2UciJo",
  "key31": "rwEGocB6FYpgcHVxtmBaXUX1gg1j8t4rCXyiR395tbHsVwJ8y87bPtHJNJ6AKe4GDXk5nVRi1BT5B97m564Fw5E",
  "key32": "3vjPmrQZBh76yGvuKYPaetnTteYok2iMB3UteKcMBC8TUdzZBDncS3UtjwRhABT6aVJK16U3EaPK73nJ28RPZYK6",
  "key33": "4n6kgH5MA58hEfjAS2YuYpJho531UXuXAhfezKhLfqkHVT5vQuFcGyd5J2utzRbgZ8zrEggKjz7421sq16NCsThM",
  "key34": "5LWkY3f7Z98w6kGVmZxCoC28Ukjgs2mNFojAG1cXmC7Zm5SA1iCfq2KfpWfgcmbY1eGbQSudPwq6kWij8qo9JYqR",
  "key35": "4NZHbMcy6CVzND29ocYa4zbS96XhZ1M3uxDj1osMXbHhBRQ8f771auBFhYDJ7i7XtXwZjY1udHDc3r6NSwjJqHwh",
  "key36": "4NxyTZrWQpwLSp15bt3kYRnWWyxKevapBU4EcuFBwX4oA1fHqUGwAxQh68EUEYzqM4beFEjF3zNmP9G8jxuAvWwm",
  "key37": "2dXQWLhcz53ov45LYM9Ctn4mFBnyave9gt1aVuUhppezhcDAXaMBzg6tvjvxXWP7k833B8Xohgh2t8ATX2TPwQwW",
  "key38": "3nJdsj9aADUb6ubpQkYBQCcDaV2Kay1kQqtEkxwLMYMR4JMioVsu7PnyrGZhDPMS6cPDe7nE8Ej8ie9TotCbGKuY",
  "key39": "2JS4GN2aco9h6pWr4rLqWi3S8qmFQAzyrKAJJeYzfbykB9AGkPJLFHEiHDHc8DyYwhrgk9EoJWia4zT53zvMaZ1n",
  "key40": "LiRsDg3mtUMtDBShhxUjBSumsKnHwUXCasjufnBLXMHCk2hzAMTiVhbdh2FwW3Ma4E4kyb5L4spzUKcCoocM8Se",
  "key41": "3HJpCr1Gti2BSg7Zd2fcQA4d4xYrKop7erj7RDbjjZf38FDLYQuu3bKne7xvnW1HbMRewWMkWGobvzeYPP5X2Eo1",
  "key42": "3esfUxW1qLztHnExpJAgdgKvK3pQKv5Bj67hRbQQiHNuHnrdR8rd7X5haiuupgQefM3UWXrvY47hnKipKoagMGPP",
  "key43": "2W6RZz9ekYT76eeFZpSLqjNjUyU1oD2ELDV8sRpxdmNudu1sx7medKJctCkJu3jA5KKvdktMQX7A24WpJhRnvuoA",
  "key44": "5JkYCBKihJYQvTEeLGwtAUSZfY3bFG4gnZaU6UbSGkPLkQ2VL9wauPzPCNPGnH8ndhLAueNkudNkTcSJxKzH2tgA",
  "key45": "GGCS2bWD2miREPCH3m8Q841AdJWG4GdheXnv1sByRV9Nd1sSVffzka6VMegucJLnLdvsqNAr48UqKx2W4vZz9oh",
  "key46": "f4atXmFjt5t86Sxxz4XNC1fd8UbGgHnUA1JH9nAwrMgjeWCLvykZyKDV2V5mahMSuJq12NMdS4cECA2rZcjGk1Y",
  "key47": "4okiBCyspdLBgvfSNHbJH8z2rPSP6eSAxgmxegEXPD81dEzfCvxcBu5VEHTgWBjkvNt9kdXqE4dmxp3Qw5LBwWzQ",
  "key48": "4gRi5tWP6RWtngehtxsCVHjv6uakcJxqs26sabYgE6vB9GUxECFvxVToriCH7LTRAyHtjqe7nC8Sggwq8yHcj1ir",
  "key49": "4yhPMx7xMsg9wYLYtvjNo7ysUb7R3sF2rMhFTBE8A6GNh499wr5dUJ2xm98RAp2DsemVDJHXFDrUnqxmz8WLUztV"
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
