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
    "e14R8tqjd5oP1fe7P9RvJ4rM1trpTBd49ajUc2qRr22Mh289Jkaei49YwSNx2CLsd6xyX7FddF4FNsokHzWWM9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rB8sed8uPcqzfm7V25jyYuAm2ET8TwT2nVkkLtTF7pAMjNxc4fvGFjXD3NBUQLJafzepCLehiggrUzCbmfmz681",
  "key1": "5LEbr2pMc8zkJ6v9KvRTUqtZ22fwbj6G3mJC9rcq8cfHiXujs6VbwhGvj6wLoxHeqZ3w4gmua1jyhB9SwZwEcveN",
  "key2": "3AL1tMBcmY4Fd1gntzK5EGDp7EDzCCDs1zjgNsn588zRmuDtw82hfWMGeYVsRbk17xctRY7FYNvbS1QsM9it2DN6",
  "key3": "28ZJv2SgvV6ceoeRETBcGGQmWZffCXUDCPLALprYaWkAERLtW5vr3NvUyQ7vVoKpdGPPpE7yPMMKK5TS8sJii433",
  "key4": "3CKCoaw72bcTuS47v2ndxNCzpvcpGUVM8peTRjoBpdD7uSDYkJsWC9xLLVR8q778uqmWhJ3wTy9BxK9psFteKkao",
  "key5": "5Jdxn6cuPsL3BowiaXJsh1UuVqpPgfbFByo2u8TEMSLvLjuNSXEXWt4DkZas8DmPXFvHoRYghEKQpmojX1gjtJ6s",
  "key6": "33zvQs7pHwEcrfwPHTnahLwCQ7VQcPbCov22kcLusxqeTKgQTUUToa3HKha5kcuWbRm7sDJSP2Z7a8KAJXrTjQge",
  "key7": "5j2xN495Z5X8KVVX36F9xepcA9DA4tYr7xScR8b4ouK5zMppvkVqGg6Ungs7xEC6MA7JL4KweskJzueZwdXeEnEA",
  "key8": "66GZtDWj2nbz6H1vc3nbEjudPNvReY1TkidREwE1zZ17T9dijwPZvsBr5TT2cgLEr9gUD1Pzz9MsZrH7Kckb39Pd",
  "key9": "4FMSwofPtKVuJppYYfB3WKgXp4358LJ2ykGuwUSCuzjYiqEPsSzYcZCtRZFDNuoe2aDwuUoxt8KjQ7pquU5n7sHi",
  "key10": "3CJcMhaasEZUE5wduJm6kMYdEUTAL15z3FUqwntd43ikaT3PrkoMYAewQnTMvBzTJNPdMciNGLbTp7LLXJpMto7o",
  "key11": "5TPLca1Cqt1iW6Ne4VDP7pbXadZByyrgQv4gSSBm8JkjXLgKhm9no2b8DbY24W1yDYEiGmJnuxDYDU2f3tVwX3cZ",
  "key12": "2VzgVVMuUsJfrdfX7YN8f54dFWh8b7PT7TEzmKFeNXwneVjtwi5RZaJjJTrQ4NmeZ7rJk2Sc7GJonTiScC4kqu6y",
  "key13": "4SDVkAry2vaEMYXqBjN6xTXnzV2bVwjGF2Wd5LgY4XFjJmH6YSRQfwoJSmdNeB5zVStDM1PmKHkPrscpwnHtBpn6",
  "key14": "3gzYi2WWWy3ubyAsibWMF6AUq8XYVp4dVnApPfjkJNX1T2icU3N2WAVGvX5uwkn4pymNxihFrbZhQnH231GMbdHz",
  "key15": "128WYCPN1GFCwWNXNqeC8oVRn4VnUaauN3KcNxhZ8pgsCFNUzFD6K4WmJk1d4WLRLjDBNUVuTZS9vPsKbJaH9owe",
  "key16": "4YtFQFdZVJtVpz7A4qPFiNyKtGy5rNSmX3n8wht3VegbkKWPd5GkHeUqMNHBUFxs7m2ardEhqgW9omWZRQhzXHvW",
  "key17": "4yAKiErYwewNwXWQNTu4BuBAmPcfvPqVzD48zVmAgYiw3uMeZxHP6cuBuaiDeE5M6SJBGtMKZRHtw9j8btdKWzHC",
  "key18": "2B8q8jdU7jFJAXEg3aDYNEdE7VHWTekH3eZdGmtAfzP1KgKz17yrMyDWoYnog1qABX7rqnDeHURk8tEwwZdUmEWU",
  "key19": "eAPM8QFVBtXMw3YZmeJXv4Eszpbw3i89Wf7SoSAkLQc2FDPYU9YRafpbKPew2C52t6TtZsrBuB3czWmQsZG7vmn",
  "key20": "4hbEMHcGY8YsKfmeqw5Hse22CXUEeVBg2dHzaPZyiSVnxn8Eajz9hw6px5gJgBSU6huD83JwFgTK4iDYmTFVhNbG",
  "key21": "2TtCq8f1AxkuLshRLZN3e413fDk5E5qcdMYv81w88LRKAartscBVmySfMcshUD1gioiv1K7v8yruioKdSRNbWVpo",
  "key22": "3KuRhgMpGozxCh2Zz9RRhLG759aWE5fUGWoW7mA3pGZfnj92wokohLNaKBrgcBA6Dda5xWmTbQohsii4yybrUPfH",
  "key23": "5eP5jDwHbfJGCpq2xXvp7A9eCo7asFwHMt9RENmee2uexz76BKanDdkJsixZ8D8EzsiEN9KdSiRWJJb1v5iYC3sW",
  "key24": "M74EVCEHbvtbQBa4QoGipEudPWiTNPGEsKerwVC6kDdM6ArpkAQ3A3Uok6avAWTmjDLEYmufWWbZbJUSbNN1SEN",
  "key25": "5kGXECsdGmACwxh4YKaN9V3sVfkKFXBMWL5WTWZjM5ZSJjGErwfypbkx1jKic7m4zcD8ZCPgePbeEt84JFB34Xgm",
  "key26": "2SxFAqhatzNMLW9Jm6HAzhtHq27Ecx6uM6K4FQeDESkPPUbDEQ7i3JJbPPn3r78rZ7vvuJVcXZLFmU3MxKinCUhY",
  "key27": "Sfk3NoS2vwoJUdKSrEs4EXqwDxWmGZo22J1qHXEh8NRBx27haiwqMZ6DoxysjahME7Ruzm8buMRjvrdcHLerUHU",
  "key28": "4cM98aBXw2vryxHMntYoPxY2Go3S3WNByAP6F3UQUBKof98qbu7M46a9SAXjLJbL8RG34QawPg159ukXzSvMCYco",
  "key29": "4K1WYuqUHR45UpdEwRHUkL9xyXvfLc9KKgtXTr2Pq72GKosZ3nsEYcqwP7yxVK1W3BmCfQWbhC9gYAdMYiDP7hme",
  "key30": "2bPNWe4DpAU26oF4XUDHdu4knE8NXhrVFcCmYwQeLL9YZGguyoUtMFb6CipKiq6XFeRkhU1NN6oGFZDzbD7tRNVS",
  "key31": "G6EDUQ4xz3KfQK3sviVESCQxjwAb5P9A9Th7G43a7LGQxLr9WW4HvfTDKoAHuHzhLf2A4XFoE13pUaCW93Dyg7G",
  "key32": "4g4Py8wxpHHRD9Y5Ky8zRZeVgLrFRDLVojxvXEHAYr9ygNL7FDKnQvpAG4Vt3zCGnL7zDCU3q4B6scMkBmw2yGZs",
  "key33": "3Gb2pEV2AwJrEqFgZwm74ib6XgqWL3deR4FQ8pEwhgo9nrdBwvKNWG9HPpKYNg92vn9HsAs5n4V4PSHiCwYy8NSW",
  "key34": "2jzLdePoueX467HzYwniC7fgAVvMpw35tQD5R7ksVWhaAHpQfPGfRv3nbYmmdBYFErMxFdJ3GwB8cufNoa7nGBKv",
  "key35": "37rnG5eM6qqte26R3r7RF7DEDxoLLqRRXFJvYwG9oTza5xicAPc8wCtxV6EiJnTm7cAw4hXCt2tzFxMnunfdZqRm",
  "key36": "2QxyAaQL7p9X3KLi5Y19N9jeWo5eDCdvh6J113Q6CPBWYkeZTviA7iQeZ2Z23BXom4NZkd9j5RfXEqudMDmYwYKw",
  "key37": "4doWmCi1oKex7MhcGu2BHCZGc9Lz43BfvjhmdWvgzSetkbAos5E8rc8SLy4u2gyuiKkwB2GQwYDQ4mihwY1NGPPw",
  "key38": "5duGKGFAF1ZMH57WDKyLSJrowmxAYo7ZMv6rXJZvvYj8NGfAiZLwnLezr6FNWp4u2v5CrBupVxZXZaJXm79Z2kZv",
  "key39": "4dg3UrkCizBeGZca6xdQQ6dmPxuychy3QdsksoJonwiobN5Y7oyQUF62kvgCpysraMmuTqbe8ZrG3nM8FqwEjDKf",
  "key40": "3ipEPcp21PPzkV45NEL2Xe6rU1U5KF9s3wu7Nz8caD1tJHJVtuzyxhg9koZz3YhhgzVcw6DBzbdewktaBE4nYnUK",
  "key41": "4rLhjhawpvVunuA9esKvX2BnREQmyXVry7DA6oX7mq5pwuZAAAK1k4EAuKwchavQKabgqhNeWzknohxeWicmu1YK",
  "key42": "4cT6mDBrvgVYAPx2xLowfMx8ZiESQKDVpSS8kQA7smQhALmQrZBxipTJerQ3JGgjci2wRqrQPuNQ7Vpw2zxDa6KH",
  "key43": "2cQFZn3vi3XXgBPDeBfKbEdiZyEDu1hxnm7NtA7qsEpM6NrbdK3X1vUkvKrCWuJZJ1SC6uj9K8PuUr7n8B6D4uXi",
  "key44": "3rH7a8kHGzYVfDKNuBtnyeN1T1WmBgUMnupBdKTW3YBQmjrHAV2yQcXrVFm3Deze7h5nYiSqqc4HAWf2pjfuMLZy"
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
