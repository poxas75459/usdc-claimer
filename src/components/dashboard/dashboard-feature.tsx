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
    "4EpqZfdAfjpXGwEEPSBzudCTWi1iT65HuHXvT2EpCM97obbvKww8Sd6hyAu1b5z5iim4gMpcBnGZr7gEHZskBoj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZCmK31vFDZsbwHisQWxNi3QKKFMBwffScw9xrmCG9kJhvFuXnYcB9q6zReu91tAoWfKseVhxvLJDBwmvzkLnFR",
  "key1": "5372L2hcK6agNjH8owgw6enRmUx5LuboAKBNrkoUwUqgsUZj7EcT93BwyR3hxpgTfU9kcVVA5DgD7YR3e6vGCBSo",
  "key2": "4chs2CYthzBprHDWy2oV5YSYWgZ3sv3LXTuxjGzt7HvhQ1aMjTphEahJaDjDQFgoWYp5gkrgFZa1qLUieb1zkSJu",
  "key3": "2hivrHtZ71MrGwCT4Jk3P7Yx24s3YgfUWT6hWGMk1xeuUzmToeJJZWY2nMjWNcG2U1dKwEqLeXkE6J42HFZa9m2i",
  "key4": "4qzMB4nZajwCiHoK7GyvKKSeWgtmUt8iTkihxZYmhHN9BzJMXMEYta3wC78NshsRaHMVCYLbAs33t1yD4sAgioTS",
  "key5": "4cdy9eP6aQ7jyq3XTdhMwxnKNu1wBXF44WYcyeQP1mkX9hJrc7FRb4occpjC6KcKp6gXHrPR57yrwky49q7irtWU",
  "key6": "471pwXQ32hPNC79mUxYq3DCeDxxdGMBSUtC8cHZ6Q8ea4BKA79jCcwCCAD5sWB1CdDmNDCeiwRou76Dn9EcRzVVF",
  "key7": "45Rp6bnN23PqxovEZh6qQYpFQb5GRa2onJ4B3aCkxS54h5YtRXHBLv8eFJNYTGXCtR9pt6Mu7x2zz27K7StfJMvB",
  "key8": "43n9XrcLUZefe4FWcwev9GYtc9sXz8hsuiWN3WgKvcPDTf8dQ5zVKdixX2Z9bofUmjCoAYvDeX2h5r2ShF4euoWC",
  "key9": "2pX2E83LD1ApRvd5BS2hJTr9nUd3D6sgWavWHdB1BVE7wSPNYdnVHG2NpjBGh7nqD7erYvPaYYqqrt8ezwTzpmV2",
  "key10": "4AkSZ8TsEDcDbC2gQqY3roKLJ3Tqb3cbZGHq8umi6BA7c46VCx43nm1xUuBrfCL4SCNjzQ32nJ71pf17CFMTW6Az",
  "key11": "5zuSVDAiLjswfJzVQLHLCnKSsWKzPufYuKMBQ2ds2JNHuTVLt261BWs9Jwg7HTGiiFFZCv3Z5tyb5uvgJTJGkvPk",
  "key12": "XszszqAYsM2hosgEKLo89SdKYfPy94XaRWpuV8NrWpbgYqysE7RvUcTVkqeHJyv9z9PnF1NnEmUXr4M7EqoGYg3",
  "key13": "3fa7c4Ryy2HUawgCQx3QCk5yS5Uxi1tZvJpYpMvjBFse8WDz7YRa1B9f2uTZgTPY2VuXdMxExRXSStsRiif8c6fo",
  "key14": "3YRhw9j2xxc2ML5twA2zjJK48z7myxhjzrJPeqgsiadxvYvSwqHoPfsJLMbnKjfF7Yv5K9Amrkokyn1saoiUPWuU",
  "key15": "2wDiEpDBFi9P8gUec2Sjs39SzqGBYhYSRT1pgrsqE7nxsnviK2qo7ySbR8JzFUcfgV2iMiEQ3BbWfb93vpTZLMae",
  "key16": "3YnFAwFAnCZzKRFFgAh6P96t6o6bLpfnaATWxU4KkCvQAy85xaKNpwmyF6MCaLufYmGg45pDg3rbEKgD34ygiRJE",
  "key17": "5bhcaY2mLdsD9XFuYD6z2QMQKVSWMrBAvaZv4nrEXmEpCekSeuaFFQmfvAzYqbqJDntTw9pbhz6PHP4d68bdH1u7",
  "key18": "ZReD8xQSoSBFu5EaW8VtiWAHeDFcG8KFD2G5jonof5JM2ejqqvZk4R6zLrHPKQqt8wc4nrKdZkhT4eRQa4G8t5B",
  "key19": "2TYvZKAwjxGZQUtJac3mfpN7kYDamfB9pnzkQC41UgEjUqV2EZBmwZoTiiBW3CxFdLTRa4E52mQic82579fNcbkh",
  "key20": "4z6cexx4tzQLvaonJ95EUcyqEYjKdNpBu3igoc1cSoRfsxzHRVaDiZETKohpYycDBaGK4ENo2nKi8FRsLbA1Hmz5",
  "key21": "a1j1acejrXpb9KN9UDSxFdgo1uGToUef3kz3Ge3AsFQxAYfZpJo9sXRvB4AeT2tfTBCRRX9qc3XHt1qEBAc3WNF",
  "key22": "5Q9iXgRjTzFJbv3PVBQSTfhgybJs6UEnkvyBvuVcC8xCPLCfHGWgHjb1gAaQwVbrKSdW2epC5V2LVtsVcXG6VpA9",
  "key23": "3U2BVuziPzeWd5hTHQ4DZWnpeZQxEFSH6xHXasErefwgZ9zhaBRWeSuQfyRx8z9JPhc4t2UpLXLYVauyHfmQXhwS",
  "key24": "zuuAjgbca7YeL5PcoQZfW2ZzdUAf1RxZtZZyW7iupvc2qk9rvpf2ieHhyDrdRRcZ7i3SgwAt7dNEcB3unvsX4PR",
  "key25": "xYQqErZcCAFevH5aHkXoi7Rgjw6M1AhDVU8GCAXGaiVTgeZs7NiLkjGxtEorvip2GHfHYw9okc9jezuQMcvA7Eb",
  "key26": "4azXPHbezxTF5MEyCN5gWrUf6sAwbUwjDqY2PbCUmYocAezJdCppn3rqnpNNT7Yk6u5MbEHBhmUPdNwgdgLKYaaK",
  "key27": "4yexGDmyFCp9wbVyGH4FqawvtXSdwCGjDss3m49CQTK8SKu6Jw3rUmXW9BUoGHkPWy4t2jgkVJZigmYxnqV2mzFR",
  "key28": "fdLP41WSZBfn7UBYWxmHDFCJ8RTspNFE7be18tv9dcXiHAh85HTPWh5xFFPnCZwfTvYFbaSnTJBv5EpzxFiPxop",
  "key29": "PimVzhMZ34tvnPNho87qti2kVno8RuAP7g2Uok9es9TAJVieSj9AbEHaR55sM5fRacRc2KvpPcaNh8WPKqQupW2",
  "key30": "31UNEKnXLcL3EEWHewY7jorxsocQgh7vvcHd9ewt1xnJfKMLKhqFUbSefLuP43jCdnvks13snC3GcqnvQfbtoE8w",
  "key31": "5Web3t3X2ktcFK8KbvoEDFeXzcUmEwLtrJX5pBDqWdXc1yNXnrZAL7U71SGJZrzjy8Ut9ByxiLm4bU3tym5DscmP",
  "key32": "3UvtUsDYjWwQrM5E2pn8hr2ArR6uR3hXwfGQYzuMbos6Q4YYRbpiTBSaE3E16korptthX6paZoyB1VcVDbKhJnnB",
  "key33": "2NLwUtbaiCFX9WrPSgTkEhgPo6EYvKfnqN6cfS7j4xXV295SMe4Xnz8AzrMXEZkXWVdJZaFhxsvEZKYK4bQsarCx",
  "key34": "59PuY1Haxh88EHpPKftZsw9qfJ2MLbGXgXyanqQ5fgPKpxbRtjVrb3JeQ8kvHTUvfLiqjcBxUCZ7mvsCn83XDjAr",
  "key35": "2FXr3vEDL5evvzYfWEdhFrcAkgSH51nKXwYVpycarakj2kqS94a3NPBUycs86JfXsxihqicqKfngjedAqf8kYq6s",
  "key36": "viX141xN56BuMEDgbBmj6AGyqGoXKF3gGA18SUkuXJR16noDYVe9C6M2FN6SeJp8WE63BwemaMAYadj2RawaLLU",
  "key37": "2ChVCt6GW75d8FdFWD8W7e8QX2JhDut9otLdeBCTiPxJy4rKdPTA1Sjctpkhf5dLnPmrJNL2oFGteMBwTUuFMqPn",
  "key38": "3fePqGcLL1aTLoYfvRRwVLczhV16wU73W2EcmXRvjn2D8neP7w2UTv7PLSP1AVPRSWoQNTZugnUMnsPuLVsXQaPg",
  "key39": "55LTfRmbvwqHg9Xw6g2QdKbrF6Ww8yshbGxYNEKQQkTvEVNEujrBrU6UmPFJjUSL9JUXTijCoEzkuqwJgMPRcdPS",
  "key40": "3D9dYjzRPHQMnqMySiPKEKJPa8zyx7MRwDamuXU2x62VyV6TDbD5z8NyGb4DcJ9Au9oPN31cMW7bZqR271hRK9Ks",
  "key41": "3Bm1zdJ6HcZcJ5XUmEQNViQY2EYBBZMnGUC1rTApC5Y3CmNotz5Jkb63tqyoEAe8VPBXUmR3rZ6S1RpoB1TzJJMN",
  "key42": "3pz9WJ7ACErA46fiCmhbwxciZGDHdJBazoXoufm4brxyHRsRRy1FanydaLQKKvcX35envuz33B2e9o6QeFqLAaoF",
  "key43": "5jkp7A3GSqKqWFFPv1RqJkrLLDvCC2Pju3iQVLcTjqQpsL7VKcSZ2tWJVFPvvRx9bnBRwuLjLcpjgoWasCGsMcws",
  "key44": "svBqCzTnjbgMF74bW5LC6fpCTDAFLCkdcN5ArhScqdKMXTDvxnvE7SufUGJK9E2Ks5gUK1yJiY4t22bp6wNzFQj",
  "key45": "3VpPA4npmBdS84zoxWDEyn3kf4kQSiWfhFRZZUbnZzeMQXHGApmtFAcVUVbKPDo8CTxwfoq3ZpVq112RWxMbbVWJ"
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
