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
    "4AaPJoGSG3eEtBRqfQAb44N5hi8eAHKLwGxyuLrWC8QxJhMwo5yjyFwazbKFy8BD14VknUC6wiuXsQsqxYJZ2cUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ze5WJ69KcK1UrRTc6F4kRF77voPWGRP5Kzcb2gsucf48NvMMqU66Xy4bXWzcafVBiT5PPyW3awuAMkCJfHhfD8R",
  "key1": "3NdokYe5hRfxKibZtmsriU9M1hxa5MpXPm9wP1tPBJHuoCnUcnx7WeLqRks9oHTm9NGzrfzKQdJxf3JbnQCFSTsQ",
  "key2": "51yvmuWFxYWtraNXeYRHWufxJKvMZboeaWSdKDBqnn5RNAd58QXqQkuzmZHZMXXiy5YfLQbQY4xb7AajHb5YFEu7",
  "key3": "3oKhryvcSN1TALNUH1ATteAJktjxCRVZVrePLmqmErccKdi2W1sFvXfqDNgVHFg5KJcrVH1A8Ez6XHNzqHRsMnHh",
  "key4": "64Vr5degT5zriFzK7evSe7BJDoJgAddzXbNvQThTgxfh6gaEHmX7pPYa41SGa1cpiLZUUSFnEF7vRGSmjt1i5aYk",
  "key5": "2Ky7P7s6Y7dVj9GaCxDaKQsGFKgfE73dkMJs3BgaxCn482H8wstezivj8VbEJyo3Nq8JYLDzD7GdHaDmsPCtWVq",
  "key6": "3dMrdSJfuzrXEF2MPJsTjcPDx9jcTXEDTkX6HedAYchgd4riZy5w2aAb6E7tasKaJB6jHtTLXyecu4xVhKRC9VBW",
  "key7": "4Hgue23dQZySzDndcQZYeeikV5rrTTndWGd4GHnGkNRk1uz66b8TMFzGzxXJ3mF7uc1xkWHEhQeVMhATqXZY5G7p",
  "key8": "2YyYMcJf24ptbfCd7teYePEu9SwZWDXTs5nuD969SvFuzGxyF5RwEecwyXgWhoz3Dgai5GF282ZxA3PeGxRABx4M",
  "key9": "cVEBq1y28tGFiiFmvdGWno3eSWebWYXi2LpT6HMu4KtwMGry4tML4pyBaHJ2gdXZqVnyraTuwkb8iUoSYA6VhmE",
  "key10": "5wddwgPgjgSy1NYZMBHsKD421tVQ2YhBooLafekTYntz5KeCVjgVrfMgARjAUAbGViKpizAGinBcqiRWKspP7gxq",
  "key11": "v1sa67tpNMrMtsdCpB9LaKvbGxuyMoR3RZHG4vHVPp77zNfWY3pHEp94aWm111xxqVaGT3gkBdE4deGBubeWJBz",
  "key12": "2oX9dQUUVtVt1HoAGydKjtUFNZidGiGebC1GfmwpFZDUY3jSjx7obfqfEPJEUNHgRd39kYQMY7xZpopM28G2pZYE",
  "key13": "43oP3rFiv3BGQcvJokMhifrwVRS4wCB9dMqDVwUYdH8exP6YtZ9Tjjg14kYoFjGsZeQMbZov6qFi4uvAL9BeKDGg",
  "key14": "2Ms2yawaMKNeVnCMxLHkDCorKCSVKs2wxBiWQ66PYzBBijEEWomxhnDHS1v9vZdpnfr1ZL7fPRjcHo8q2z71DGK2",
  "key15": "54DovC1sk5q9mVDATiwK1cgrH26dXG2s6qF1zGvB1KKuD5Q4D1s3iyjhesFYFExyb4dna1oXabdL9XcXkGHBDNWR",
  "key16": "66UkGJnZLoHkg8oa81prS1GAcYr8gyUKBLXcSeAxwRCapSd8ZVqSkTgv7JZKv3w31dEJD6Xig6xrzfKrWqytpJVW",
  "key17": "4sYKNUG7gsu5nXdiBY9AQh6ZmZymCgUfQv6kfvBaoB2qd7tFbTgSVRWhtQrULBtdTV6LT8uzwz1K1ckQk5GA1vNW",
  "key18": "4tN6dKFXJ4ryk1mxNE1BvzVHcqLGanLKPLMeFpm2jmScf2kwXomHogbem6Z9CeyLcufNPPLniGPujTwMmdipnPeh",
  "key19": "5Sm55UoVFGKhZwDjHrtDJh3wybL5iDGziT6hYhP6rLrWT8BKvvJw2qm6x4Fb2TRf2RWQJKJzaTRzE7qT1Lgt8ty6",
  "key20": "4jMkfP8PwGwxonHxrtHv9BuQbjZYPYBtuG5Qa47cU67zCoEKnDn4HJcZ7vkj2WZVBkQ4Bxc69ZoivXLEntNmBpcZ",
  "key21": "2HAemg8q8YpDK5um5fGsb3CnknaZBHsiJEx8DTD7VKsrSACQcKq4bCQDhEV4bNZTHi9EuGVBrvPmVQ3EmPDrz2yk",
  "key22": "34yyB4HWMWxzaS6ZR7MMnNCnJgHShkzpustJm7qTW7M5wRSYrXvnMGtjcfZo1cm9mTGThzHUt6XBBZEhtdRoGCSH",
  "key23": "BD19cMgxuDQN31bMpGLywwKE4V4bgkxDueRQVxyvGcs632Au2sjCFDuBmQZuecDFuXBSzpADuFcss9gcUAhJ8rL",
  "key24": "4797SVcsMfa44A7WR2tpbddPP8sRpYNx3bqSiXXPdv2vDVLrdbkZrzQPuTYfm7iEpLt2qewybHdq4vFmuALYdxyw",
  "key25": "4rwwZgNZ5q7JvHT1Ai1dP9Bn5H9CTeeNimPJ5km465dpwXY81CDANRyKKxuxZAEh7Vh2sXLGJ8KwGMEu5VY3kx4F",
  "key26": "4tMUJDWdNE1pScsaJGkkXDSVLbVKk9YHz83NkZmMCcA55jtFAiocih8k6tPTqBkbEPfD3Ltc3wWzcCoVvoRuS3SF",
  "key27": "3WjDbJusxCBhBEPLDEfiK81cvaLdL6ZnjFSv9MDGMpNhhJQo4uj35FnALESrSUMXJUihFs5tueDUq7yg9YTBJgBk",
  "key28": "5LLLNzB32CPHCLCsf9ftfwVyAZqcbofG3DwRtK2cow4gCz3FGbEYYwv7f1MHqf7DuugYrRQei1yJoGUS7yzLDc8y",
  "key29": "678YXzcgXuBSoWo42WMnEjHXnjdMt3rtCjEjoTBhsSRSr3Xp3veRuNxed5AWxX2Toqhvru1qvWWxvyEvGznqxkTB",
  "key30": "2Hv38sgiCvnFCUVQmrTs2zUv2vwMn5uMy4JKWj55yjeESk2rpDUAxRzAKir6xKvpoJwFA5GkEB9FZPapwKjAUYqo",
  "key31": "3DxtGNHyDY3x6PXF6cc8LkcPFn9gNU7fJ21XeoQRkbdhsrLwfhuxpPv8xaAQPh1mEAKMEfRn9nUcEEuBLqTmrvDi",
  "key32": "4LKDDUExRLTjfjTNZtHC7YxysAV61Bbfx8LzPrnNaMy2JmxyyG7HNG4qrXWXWMYYw61EBiEc4DE7VQCUyeFvarLk",
  "key33": "d6nYr7SG96pFwL5UYi9caiF1Hivvmvfz7ET5wYoY5gERsGDyD3DcVnNSKyDn4mLBHrKt6eHLWeYtruiXjdYqwWU",
  "key34": "5Bnw2fnA5ihUgxPox9NyqUPg8VZoxNn49vCS8JzrZUeoa1KKvikw2EURHn6sYLQ3a8fpFxqXWkS8rxBJ9jCjoEsr",
  "key35": "2BGpof1QWXGar55zuMg4qeu2mPcHaHVvAbikgmCee56WfAExDyJBM1T6q9gBYzTTiAks3gpUwDLSCgU2dWhHhnCW",
  "key36": "5hhYpeFWxPZBn7BoUuWDWZVC3EGHaEmwXozejoUbYzvVhqMnBnj6sTZYGSDbJV316Z8sxhinYiHvknLJyXXqEWoi",
  "key37": "3THhKb9MkoMgL6i3J8KTCbZQQXGvEgNsgGGrAGgwZYGz3WknR9AREiRCVn5nFX3W4mRYmXsGuUE5DCVJGpE8ut3n",
  "key38": "pPsBJy8F9sZAc9LJ5ae8NEtLcCRYT1XK9TndwJsBQcxaMsHhBAvTopVv7aNVirNkm5m9GtXAKATivb2Lp7XCMvC",
  "key39": "25Z98jL6YSaEvJEYxSe6GjLbFqL1QFjQ8bwF393Yyeo1RQeaf367peB6DSKwBKvEZeGcb3QbwqmLGFrNwHhLeG9q",
  "key40": "nGBN32mCWqV4v9x1bhhNftcksAcnuR9KqnNhkWgXMJG4dD87WcGyzwfoCKoWwRURWDTcKD9BHaZ79yAshYLdTiT",
  "key41": "5PRNZeN3UHECd3K4AuLB92zPbNqXFHWawfh45eFMCRvG4cwvwy2WEXh2PJ3XcDkD8i37Loo5qcur6xgm4V2Yy2qB"
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
