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
    "ygGm3dVVp3JmsBZ3FVLU8ZxcLr1UZLwJswr1XVP6uTYhscSy3BCHJ7gCyFaGszFybQZUzQFKWQTe2ALpPacCpfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uwc7sVAxYRjuWSKK7hEt5sbZwgEv5XBGZn5jbd4oF2TPRcfni9nyJZmJX61SuQYBDU3Tsw8hC3QnnQUhxWAvge3",
  "key1": "5MxPtCVazPVCUafCcJjwrhfYKLv4UWhebGig7szDjrVZpibaybjsB9VDsZyt4gZRuJiqpdYXh4hmCiNyEwHhJLaN",
  "key2": "wCr9UJH1QL2V9Ppnkm5HXt6EnT77mfU4jmEUj2GQtkysRt263sBGZVJ8q63F4CDWewPGJSSTrZpiRdczLUJxbBc",
  "key3": "sJV4pcshsSHcwazoS1jGkVhhzh18HNUudYKzpQtehQjymihRcja4deZ97D1roJb1AfraceAe68rCJKAZ8RVDyXV",
  "key4": "4wG4CXGPbdidUKirazJsYDdci8brRpg4Uk6jDFpxjcXFBHvdafEQz2BhKBRkVBWQR6MA5dj7mk8WvHRqij82dauc",
  "key5": "5SDQQhnJ7gfhVDLkiT3pPyumsCHn2ri7MTVvto7QC1LzuP27AuU8unbw5m2iUDNC6jnoJn5qd15KikLaaBxqgzxm",
  "key6": "5qov8Akzyp5waVSU5pykPQwvLrVVNiYNxAize1cG8nLyUMpaw8tQWdk2a5hwWcKp8iNnhQufvnRSaBoA3HJu4WvM",
  "key7": "2qFg7pexuWcEh7sMsWTxNtzUpqiMBEu28WoiCXTXxrE1FPjhThMgGvnXAfcnGHNoPsr65Xp9UKuoWNNL7NvmXfDM",
  "key8": "4iCZp9Tk4xGLmHdYQS7ZnpthyWMd8aHK5pSMgXZyG4rf6QDNhqBY3uQNDXf4fMbmxeVxU3eYfvtJ3bn8Lz3GzQHs",
  "key9": "5mBqWqDKbEm2Fj2y1tsss5eRaURTius5xqrcPRnfa6xzMqfYJZGbp8fgEB5m4BFuW6sd95PuKKg9rUL4B9RSpy62",
  "key10": "3pABpiE66wdreELj8TXKswhC7dZmkXFtP4eWCBiMTFEhZRtDB7LQEK3rfHoKABwgmaj2vExa7oEHoPrgPQLuwVsB",
  "key11": "dn5s4dnVKTUxB1tRYkfifZvXefWzPF5UfdWvfQH1UUMba5Q9kdmE9p19p8nqRHHd4LKT9HkBg1o878myafeAefM",
  "key12": "4dV6yEHZCLaZfXT35Tyd7kthBiX47pVktVjCLhDLzi3V7pRRtrsbD4ysSx1p5XYFSsPNymeUFd3WfAhK1iwjAdLa",
  "key13": "5hckw2dcurnMu7mhqc1NGPVvBxNEVbZnEc4US3EPGTYo7iJBpLbUhvdgaj8jQhyKrYdZpHgVZSQqpULqSqqMoyvG",
  "key14": "4quR5trdB3vK5U9TUBLWrL7yRWtjocek78WL1jqPQyca7TaGLr7CPz3NmKK5Kgu92GRmWjw7KLc3pNTeSMRpf7mX",
  "key15": "1NTxq9miiJhwd6FvHRnrTq5hzpUahYbPeihwafik7vFP8JqzGBpayxTLesKQMyiyVR6NfDY98fnkAScVS4UH5Sa",
  "key16": "tyeq3Pwb4sKLZWtRz8UNiY2aJF7czoMTjewkRnkFzaEmZXMMgKZigqcRkKyoS45AyQ9tv5J3Dn7u1KX8mw7QCr8",
  "key17": "CGjEkyknTkyyJrWVZUmYmJ7nfn4SRvomZWDzSF11mjxt7UyExRiCow5r2GDVQAAZEzQDGtkHpcrEbpZb5HJQBHg",
  "key18": "YswPwBZ6dWP1P9GGbkB4Z4x1TmRhZ12kPt3z8pT7aBDSXhknQjUf38rmwSMxBnNPf7fzPRGVSRacQ9WxEPa4UUh",
  "key19": "Dgsnz5ioCPrDNV2iKstssSnPb7NZTQp2SkpdCaxwnaLDwWX7KV13PWRZCeVoqnwXMyKQZMfEjsn9ZkCfmTg2jUv",
  "key20": "2EgVWAgko6KU6GSEnP4W3WHqUM8VTjg1MpdNoUVgcHynzdsLeSBjjAazrTacLUn4ncd7wsJhhv1Sw9f1p4U44b8B",
  "key21": "BWoVUtwVgto4Q5A4QPAM73BaBBa8AbNTf5DqbY4LrgBpZnNTPgAuHAU2FCYS8o9yZjcfapQKNjJ5d2m2Np2ZuwR",
  "key22": "4MRQmr1uGmqjdp6zgfwxUiCf5KYbBuPWni7vcU369fML5iLdye4WsZPDekGjwpC8dRUcgWyFFeq5yKWyMeMh5pef",
  "key23": "53AeE6j8nMcsr2fMNTc9xEyHgheNiSDU3fGn2ng7DXqz4AXrQNWmJSTVvy1dCzYEyN4fSBTW3vbdLvRj6oh1PDwd",
  "key24": "AjFKkcaZAusn88pCDnaGe15vRYeCgiJdb6mpRLwE5oKJhw2MDhVbKyZq42negymNEXVmrCrdue3oMdu3ifmfRee",
  "key25": "FJMCV7jmQwvWHM35SGXcp48EP1GGyFHV3KJFrUmaPpQCaEpbJihi4eCp2DyaHBx8L1Uhm73uf1hFVgGbt14pi72",
  "key26": "2pkcqRLP2GwbMNrtLrYvQjcxMo5DeyhtmgZoLzE11pZk9W47m6Wem8tLkDz28yZJP6fWds7Di57TbbssXJ4cqWDR",
  "key27": "448WtJHjWKXocU4dFYJ3kDvstYmkR7G92c3HQE3FUgy43vgfFLJ9UH3ytknFgz44oNEjaRZi3qkUhyDqXCwFUVda",
  "key28": "C6vi7zCoxcJj6uxvYSsVoA2ngHhr91o6Y1SgNs1FKFs1zcfJ2Xbvv7kb9z1DSXYbTP5m6dPiAQ1AGJMy4GJx5o6",
  "key29": "5AMgShZqNpY8KCS3jLE13ZcD4SqsMmrtuNqG2A5CYDL8YMUVs2RACfNKoFpoqFbw8J1X3vHYtHj9fbR5nWecYdhj",
  "key30": "2A78LkvjRnHQTch8GRqKY3pwW2GmGJBwKogTDZPRL6xabyKg8rXoSBgcEJGd1PvR8qBTDLU8bY1iwmad9pucZgHG",
  "key31": "Aap3d6TYgqFuUgyK5xVQD27aprucghaewgaXec5yHya1GQcTcydPxAQYyq7ADLdGyA9PUhyDue9uqhMZMdXKd9G",
  "key32": "4G5H3D3Ze9iUgKYFM2qbJ4z8MxhjRRJP5SUsYkfkNkGjtCxyWh2w4S4xKRZcpaefTWunVF6GHxJSjSMGtkBnrYPj",
  "key33": "5cMMWwdqB9XASCbUJonsRddkgk1oVogiSb2ENXPr44f2eBqBpuhniJYs48kbp4TxNDyAXrKmnEok5AUHi4cRSj9D",
  "key34": "4Cz6rWkYstqkL7SRhX7Z7RbQDdAHr5izJrtQdx33VMkZGXmSYRCoFGMn19dA3W69QFCHzPvzAnSph8saFk64iYkq",
  "key35": "2ckUzLiL1PoFtSDnrSXBHqEjCMQtmLEfhSpzrnChJbRquZNDzS3zvp7hPyBN79YENBqse1a5du5YCvxXiuKPqqXX",
  "key36": "4moRVDe7GcZe9grqNEnPmzaX95JXwSB16AkNF2xUpgSYnWYnTBKkcVUSesFkE1TGBw5UXixZ6yVYuDRP2YbxcbEj",
  "key37": "ec15Md998yxpexHRbTd6Dy6Q3hGD1QNZ76FAJobi7cfLKbCW2D5Zjhr45C9Wyozd3yYihtf6YvDHNioJAywJmcX",
  "key38": "37y7vUVmMeJdvRXDbFVkq6DbPwG2HKXY9BEirNxmx1X7L7dKTuTcMQKTKctE3AXY3rpH1ZW3QPpBbAwbMxZRKx4h",
  "key39": "3hFWnkkxEj2Ff9GjPzJt7ayp9k1PYkwhcndvuTZCfT2DtgZtBHqJpq8PKsqkCMjk7rwnNF4rMViAfNJvTG14u9S2",
  "key40": "3yZdupCjiiLvTi8znMRWQzWsMAm6HkJjTArDUtnXT7Ehn2e48SmRyWcMKmk1zMiHnH7NvVSW1HNQtQBr1Ts2WGQw",
  "key41": "41SXrJtwxGi4ZLDaBz51cQLpLhmVYkWpLubaBSsjowge9uVMsQzZsWD1YPrSwTcV5AVu8984Mdj15MdpY7Nr6kZv",
  "key42": "6VcXP4Gb4gUMkujncPamrwJPueZ3QC6CfmKn7NpSckkRNBkwHAmm5bfRPoY4yyS1J4Jfh4T1d9uwgaSxHNcuhzs",
  "key43": "3yHPXcPLnzYrLMGYVkZqHbcFSGwecpEFmUpToNAk6D735qu6R75ZNE8khRNyB4cCkYvi8KkfMwfLQrnL7wT6uXWF",
  "key44": "2sWyy1qLM4WEUFcZFBKLTDMBEtHnhR9XKLHaEhpE3nYvPBzveWbJMdiMPMvAMeEtCpy48ggXcKtm2YrZqbUiwdYs",
  "key45": "5gv8KPqH92rWRFCe6SLXXwu4zzbEwjYpR3LpVNVwsHyumHcDZEJG89TUk8kUpLvRFyMWV91DgipLD6WZfxRgBSTg",
  "key46": "2CYgXyj3fQ5er7rPjw34YZWiuGt4SgVdi8RmS27CFqAC5J83Wfiiv5LSVERpGghJzGU2gJnQBf13AywbuBXnxTBg"
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
