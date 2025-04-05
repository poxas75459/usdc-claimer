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
    "4gJYv9GSzBqtd9PQu1z5TR5fi9zd6MezeEdL8nMkkWdPGXbJV9yfw1kMfC882DNRrZxCaBn3SBerdKyzML5LCJu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dvKDbj6ChecEyrkc5h1WMW6xMgEhvt2U8c2otN3nvupeF5bg5WFCqoATZWDgi2dyXhHaf2ZuLEDqJwCZrRsj6H",
  "key1": "FRyy5r82vqEW7QFDJMHURs5XQSPCkAx1CvJEdezNbXJPyLN7gB2secNfXDdUpCWa68rFeWGBsefzKehi5HunZAq",
  "key2": "3kDtYmZ2LHNEK1Aqe3RM24WDU4s79Ro2f21QCATNAJpg31miasS5pTjBcy4weEyyLQfnFKcXDVdoqLCKx8h8HAHG",
  "key3": "3Gzvusehp64HufyEwx9E2c1AByb7J7ikhZtAEk2ijTsv35bYQ5ryFikGHcBwNwcPcctt3U6opGgx5JmheaJSaouu",
  "key4": "pz88krUzLMnkh44RS1BNzkMMkFgTcNBFFPvCAybxDZCrz563XwFGK6rBgk1dR9bX3Cm65MMt7vzuyxzQXJVB4Yn",
  "key5": "4a4gZaHri9MpZ6mQWXf3koxkY9YRJKQHWebigSAhQ6yJkVBN3GTF8SCx4ojHJSm6yo5GvBFu8hfyeqDE8S25ag7y",
  "key6": "3SSoxx9Si83cohcxu9uuSAE2cbCkpNuEEgAoR1etogcaM2FPZWTqKyefPEqiL4HcyfFG2GTXdJsmCnoQkCYrdaY",
  "key7": "2r6xtYaT26z2Fsgo5UucJnqPjL1ePGXDkSSViu8WV43yq19GaPjXzHfXJewah7jmBGXyLaXK49piDZiqNaodgC23",
  "key8": "2kVaN7pCV6EounFsQs7StTT1FNn93L6BFy4BjiULoWvMsMdvNcdT4ao77NvshVJogWN5vdGP6Uv4hJ3Dvu68pVXi",
  "key9": "67kR1vVqzbe3XnmHKKGnx1Qxvxz9pASrP5cpLDjAas9YKiTPLAQTqfAW9CdPgzosBYk2XmCnV15gWt3L9m8ZJyDV",
  "key10": "54cp9bTnoq7gMso5y1fWJeGzBr9dVU3fNqvwtdHJAmRQA5d5brxm6dz7c3iDdBu9jT1fzM3ZqTC9rPvADRFwQELB",
  "key11": "4qdCdx2augscWWRcDosmdhFX47qKRb2jA9VP6eaBnjPyX6NTRMKBJrjw9yNRttQSrEsG4n9A8vRioZr8daUmhwno",
  "key12": "3AdrPNbkUcY97PziE99ZmKSmgDK3zF99tQYgSBnVWVHsddWXVbgiSEQxXsu2EHK7sXwwW4sNqKpg3bSGPqS9WA3W",
  "key13": "3SLrLGVzjnMjz2HGGwVePkUXA3Y4jg3zNaQ1jSQ4nLU4SWB1nFoohdd5SdLpSud6SE7thnwwWovcCCT2MtuaUjV",
  "key14": "5ZsY2rmZD11wi1MV3EgRZ7M3PxdGEE4UUpD2DmLeTU9GWAuwLJ7Qwnu5yLS6YQkctKQbVPXPQEPT8k9j7aoEpRTf",
  "key15": "5cC4HGaz8AU7axkPvALA2wfbP7FAkVLj4cR7Q2mMuRFgma8qqP8DA13Qv78qoyRqyyHwH8pH4DLZ61nKRafkGLV",
  "key16": "5ty7uxKjxxvegUZsMNEj7TRW37nejPwqBP8XtdThLGiKQEv8KT9EvjpSzh2x8csHiHPihkjyCqMa4nApEduCH4AT",
  "key17": "PykdAwCrA5tjD9o8hYi45cJgGmdpgqU8RhxwyGNTcgp3GwW9YY8rVjbFP9KWPQsyQBjKUUfcAdFvviu7HG81N4u",
  "key18": "2WrCB2e54CoJdvxRLVGxcaBCReyEBPte4huJvn1SsXzG46QYdnLf7yxU6MEQ1qLXioq7Hvi79S8tbNJbwsskVszv",
  "key19": "5NT2jm4bVGshE3ko7TpyuqkS7UAKCoAaujBuJjKTnEYiQiUr7B65Q9WCNaQA8r65DMLY5fq9FGZk4oJcyvr7NETx",
  "key20": "3XMLek8NwwYjFNoVtqRTyaCCuUnqGR6eJyBVpjT5GydSrwTf3HE6TCtvrRqxANTZnSTYHjBi6L5kE9wgHvScBVdw",
  "key21": "25dp1VW3jVLztgLVbCQ6MrwRji15WkhqrFxFUqwcg8z7WRxUBKRbjPshUcY8pd13x2Z7SJ8Y7upmQLoAbyz26WGs",
  "key22": "2AXjSAVFm1DyKv66Pba7uiMMofyvffBDYzpzYUBxr4J2izYWnZDCrtBU5zqQo499Vvqh5k4B4A2zsZVqBDGA2xT",
  "key23": "4Yf4ncvb9MdzEjpw7h44pJ6opv9TBHsXbKDJEFuhz1gFYddRQpTEW24VM3F3FCaKnqaG16E7XmrhphVKrVV3TF4N",
  "key24": "537QLPuq9ewYB3h6X7GZPFscs2ymAQQsm89eSje3QsGr1caPQmkct9ESNKGdK9uNH3QMuy7pCDaWTJ5ogZvjV6EM",
  "key25": "64LbDiQnvWY3Fm5tRny5HWWr6GyzNQQEcDxSKUNFm5M2jf5BSMu6VcKJRb1t97LhvAvFYpHQNnousxqZN5NgPq22",
  "key26": "35rHDEpYtyDH3nbesVDacPHWrXpz1vcjBsaw5ojZxXogFF26mQS2MxmYs3nJUS7fZ1WB5TAeoQ5PAMe9di61W4j9",
  "key27": "2qujnoExhAThvo1mLqdYMpZFX5x2r7NuCH96KiHHgK3q7NU3QEKCoxGKZyi1xtGDZnh5AwxSuaYq3cQ4QoVfRKRT",
  "key28": "3Sejv2huiwM6pYhRyuJWBQdcVruXRQE61xU3jCT85iumeZs9Aw9J8KWc1pczeoqBQzcjpuDX9CFiUH7awHNMEpdx",
  "key29": "5L1oVAPWDhVxERzGr1N8jDJXZBqJQFwXQPZyLhmXvaaxjLpJH9DdFQMvsWCLcdNm9HeuSWHxuNhLr91NyoA5TkcC",
  "key30": "3WndHtNevsiTt1yGRuZSsfJCFMDQzfZF7X5T946DpvMbsthTU7ydBGvRZocJA9EaVCAsjK6SBsJwed57r4pxKixe",
  "key31": "izhhpG99hpnHSNSXo6JBHMVBQA54XLKEjm91Duk5iT2BnVX7JfQsgNM4nhzBBsyAkjsscfYzCNpb5wFiD1z1Hax",
  "key32": "3ZscW3jM5bEqKxDhbjxcPmuKWwuTr8EPPqFb9wcGGN2cXCBYuUDQGuvTuU3rBiRGc3d1cjFwQwNMTobAAYDAhdJr",
  "key33": "2t4PumnqhCeikRisNEV5DY7JhFWAzCh3e2fAQEeCcyvEtTSeMWMWcdvzTzmVWWLQGfgRQPpvEAGeX3ivhdzPW3J5",
  "key34": "2ALsZ2UtzWYANEMhzAg85EVSBXzfFizNKFAmG9wExDbxdTb7vJGF7wWALZF5ajuYtMZHW8Vh7whYnuN8boPM2rSV",
  "key35": "k8HK4KyETL6yU8ouCQPUT23AD65Z8TXqFYc31mBV4xZX8qKDjZxQcK8nWBKJFH9YoCfbNgT6W1Lk13DRCtAgcgG",
  "key36": "vWDRH7GH7EwEzMLNztNfYPjjLsGL9cZUNixASbNcJKCeyd5fvMqgiY1tDjNbeZLoM6FM8u2NyzKB1y9DSyxh57T",
  "key37": "45XxyfJJGu4266mHBgXCjC7nXmNhz8eKk2tQ7sgNWEHcJN22nwv2JTHV9Cpa1tu7F72VebisqWghKMs5LGa7VZQj",
  "key38": "3df4p1w3hy3tZbHPvCyvuawYkd6vv8mVWfm6rRkdyhd5Dx3AXRWyMXSwvUgLNohBd4yULZZMcmoRv3hWUnYPniAn",
  "key39": "5RXumZMqEJxcz2ADuH2T4RZx2coii7y72PuGV5x11PxnNSVEcZnpJJPuFRs3JT97njhZFxwyX7nPN8yseEGNTpQU",
  "key40": "5c4iHqbR8a5n5UzkKKNJ3Mk5r7iJidAhvmWc27fJ8GQFx8nq7WxhthssVBSqDMJPKQLgDmB2QyjFUwqtzZ43z8PG",
  "key41": "3KXNJXVBdHdd8Zs1iiupK5SW4EmKA6Lr9pHykRHuBNnhDvLbASRDCmGpUwCAxRr8Xyhyk9zJE6k2WhMWL2r4xapt",
  "key42": "3XiVuL2WsR8NKtcnSTiaRYyuBabjsBQLVbRHe1nXryVGrBEmyQ3potbqo6cmUUZ4mVNbqfSx7mnDkn1YZJNnQCPr",
  "key43": "4PHnAzYVKxjCJNjbJ4NnbpvbhtV6ECh75GFrysyb4t3XFKWdE7RqBjagoZDG23vUEeCCggE2p8n4MLr1tEfhpGrf",
  "key44": "5Jo61vjFwRs4gPzH3gRUCy5R5bXD3zaTWkf8UahoqoaQyCGCi68Mc4aJdBWphtHFh1XacVBfbaAFsgtwVeomNzaS",
  "key45": "Qewr4H4dUcnzvbUgHrYEyfUgVsr4FVfXGXWrUiL3Gs2A3caZZRkwaEAAkF3jMCkgiBUaHBYMahc4FY4TNadXaWR",
  "key46": "4DAjHamo2Wwasdtp3fznxeMGYSJF6HzzwiNJAUJ2qkdCZTrTKG2u6Q8PwuMM456GQ1NrV2iQzfgsvkJAQpYodoe5",
  "key47": "4RbUMCcLqcPASadZiuXW9xabTCgkxVB5k3Xayz8weJRpNcymQeaNNWkvEk4Yf8bx5pf2TjtUMWLNPxFRraCDxogh",
  "key48": "4fDwq1shoyzoiQxYhL7sr4NyrBnqxVsdS935bzAy7UBBXvEcHzMBTgCgXk4NkzTeBBf2M4muTbwNssn8fRx64gQo",
  "key49": "4Pi9g4QwJwDwmBtqMAQ9rjApYdKbMnxs2J7LXN9UMs7fWdYqBY2uxh595THuw3H8R6viB6FFEeMeqSMNAXC9mRvd"
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
