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
    "Ney9F68dCjAsyN4XT7SBh2doJ5wKgwnMWPb1Xgj4wksQDamzVhsGHfXtYq2snphFh6EmGjWPQNVp3T5zXMVUC1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6eBnfmYSv3EkF4LmjASpoQGbys2o2JkTHac8jjohHqoKSK3B6sqXK9ZwLdEGuPtJio1TeYp4cTU24XTMUd1ZnD",
  "key1": "5uPFgdvkhnU6x4hJoAe1esyaCgrGLvWgJisCJjm8DAK5oo4FYpwj8TBes8QkMQy9xv5USUavKg2DgMVrZzzyLCJn",
  "key2": "3nBgaNh8MBwLrscLpuS2KibSK772YNQDmP7ro2wSitVtiF22Zyr1rfDvASmiWFx9dLssKnbnhqpA37iGHftmXY3o",
  "key3": "oskwSz3syd2zPkajQ2bGVcYi997jPDPsAfqyvBBpKrGPTDVJC6q5MZyutdW58KhGYwzvbGY1x7KeA2Wqnb4PNv4",
  "key4": "3pTkqKEb8GcG2pB59mqvRD3pUDYrFPxsmUyJmwj8niKoXKs2uQD2rcxbQmvu43pVsfpLCMPf1XfwZmbc7T8q3ebB",
  "key5": "5Jm9pB1fyg4ytjQ2P7GvnYjXvbHrt59YBqXRhY5uNWECsVAFvhmHGfUNrYk41nf2azHGKCdPnvVNxfWQUZ3w7iQ6",
  "key6": "5EWo5ySLuyPDHEkhtJZwMGpp6MimdRVxTdXLcFPdkpk3mK4owucaarKyfWAdyjaZSJVb7qTBCdMepZXxRfpP7nWX",
  "key7": "Rs7TejkCdp6PMoWNT8riMBNgvG99ijdhQMYJiLKdUXaxEpvWUPP71iVhhxAtfjukbqq3s5JDyB2SWH721o8kC7r",
  "key8": "2Np8r56FaVyoEGJEnbADtRqNhQmZ5QMr5T5JiXN1rGiw8YatECzmpj7o2ZefmicG5VnA2sYSJ1L1EDjRACwBo7kN",
  "key9": "55nG2dPSBJt8dNXgzrX2jjvQCXqNKivkk4pwPMkEzcqe7BzbHGKov5egFcqBueTRMjSGjgjMNpUXnUFNY7t7dTCP",
  "key10": "5HRsiKzjRnY3L5cbDKoAFpcNuNwRUnyWC5VEPY4nFbS5HWbvd2B83AT8a6SUtrWGUWy5onqkpRV5BHFdgVd2roJE",
  "key11": "fhsgFXD7PfJ1XdF4NezJcCtcHjDP9Vo46HY45X4WS6aZZnczhxUZPeWyYeGnyZy5F9uRS5YDoiDbB8x9DfGZ3UK",
  "key12": "5evHDLa4hAtczTuFPZkXVqPWLi2WC6k4T56VDB9MYbusou2dStw7H8pDwjUyU55oA3oqazjzEJNaoVbHEJceoavQ",
  "key13": "4qDrX7eY4mTKHWGxVVXffu9UYkEurRvYSgzb6XnaaibFwH2Y4aySDfqHmwmjRufnsi2cbnkUCWyQqJDB6H672qsx",
  "key14": "25mUQVWPiAEKr8q6xgihqhCEnAGbJiCcS2NU4o8DvYShYQc1TRUA93eUwEDc2eyUcXmN7jd4vhfLSRYPnRnJo6JY",
  "key15": "255LuZp5i5EPrbirwEAyteR194reJadh5CEyfNsaqZWeBxFwzd9omPiH78VTUUCm69PUEBntyepQ8jP3mNnsnHyK",
  "key16": "5urygfsiiXRbTENjhkyhJNh21zMvyyhDvUSfs32huUqoGviX493vo3FfqHqeBLQdAzVEZmZ1SnMgxzBk1ueKWuMW",
  "key17": "eZqRjSfAVF7f3FbpRmxn7Xb5AFAVk4K58GQKnwi9uu3SLUWJ3aPdCbseHGskJX3QaLHAvqta3DgZWkRTdgboPqs",
  "key18": "4qJJt3ynADKUqi7BwiBfn3w4ZHvvpffN2GKcr3CPg8vSyhuthsDby1kV9o1YeXpviwDADety7QNASgZUSkXK6JNg",
  "key19": "uxZM5i8auY7PrC4ts1au7hSvQgzNhQii6YWU8cEVPs3CzUAuKph2yvWAafW6jcmnvzMRxyuD5Sqy2vQBSZWy2so",
  "key20": "3QTSo6dhERcE6zPLSBK6xMwoq26DA7VVqSJt5bGxVS3BRJx82TtLmod2REWJGV6A4hNnrqxuWga5otWCNiri2DE8",
  "key21": "5V71eNz9dxnCRjHUnMGEfEu5egzWEK7jUGwARGJmtaurFaKmTztLpTuX1GtV7sgD9tsfnZnSA8ej8ojx1zVft7rU",
  "key22": "cBVythdWDcHM5PV5CQsZKH7UstVsPSKhB9FaybRzqudFvrFAoKDxTg3vwGBbF2ScsQ1gRxukr9KzN3XNwXbZ2TV",
  "key23": "5EbzVUVa1ETwkHpFxGodAp1QRhJaDke7ztyVavu1hzFLe8xWBZgZA286Pmrqw5rTUZhLceGbm3uyjfcyBLVAiw8W",
  "key24": "4PVkEGSxYzDQXFoYh1P3HMkFfhWHkM7gzbKTh8mvBcjG2cxj7mRWCuYunvgFb63bTbJTbKRCTs16NLMRVWXqopHa",
  "key25": "2WW69qzY6YtpUEMRqvF2ehn8NmeX7y1SzDBQNhhp31JnzSFE9WXvZbeu2FVbjHACWUPzuYhxpu4QNBMd3v87zWJn",
  "key26": "qRdVTYRwcNVQeooXPmZCeMnQzghRPKA9qk8SyLQ9kxWj6zRZBKmHhkpN5VBtMXhsHca17vUE9gtbiWvPGVopt5Q",
  "key27": "3TizSTS4E39dktRLtzHfqdMG25Rott4hYJGvWqoL88W61aa8GenKns3cGTmSX2RUojrukseBfqXghDDwRNShNJYH",
  "key28": "C89t7HVufpfMKmxrKdTxypEVtnQU8dnZmRKFCmZaNmdKT7APc7hUfQyCxhVz8oE6Yhz4yyBqxtsSFjRHdQbkXZg",
  "key29": "2zn1cCwuuUQnn1v1Nn9xwQK4h3288atqpxiWsKPZEfvKZ9Ga8H4fH3XJ19UcuUBVVeyRMkCN3inCVBBsLLR1Bb8q",
  "key30": "3xetsGu4ZwaF2wYRVWN9RmRX77jEoAJhJdhLM2hZNaLNHbzcTQ7hUcn1hpgu7GKXNYFsiYQ8StxBYQQSTCnxqmvt",
  "key31": "cpjR3MCaQcMpYcS5TEWL8ojX7GUtePotwnoGRVRd8USSTS2edZokKet4ynPmXQkgvZ9Q516XkuKgqRg2u2DqxA8",
  "key32": "zDMhPWCAbCdozdW4yRvrBUfoSUhjTqgaTLxwqDLfSTZsS5vsan1Ub5pntwpafdehxYKNfNHDeQfXbQs67nZ6Lo9",
  "key33": "5HYAwU4bBx9FXgRdMnGkFBDz1zrRVgbM7HpJhMUG3cWM3X4zxQzFHgEX6HnrYWQdJ7g9KKd7DAew4M6ACjxc8H5R",
  "key34": "wq3CrjiCa2ucE8qDyRYeh1VgcfkSH8spssY6chGRx6JHBoR1xQ1wvBnjtWE114aRwoHz9C4Zmix5sa1pHnqkch7",
  "key35": "5pZQeJGM7uc8JWKbzjEdJhwZ3XF4vkywWP4eG87BVLYaDQ6h7fa14XBpTuZ5aXTwA3ZTdZgVHRLdx3yXem2SgZnv",
  "key36": "4PQfdtG6uwWkmNxsYZM9S2a98rSWii6QwWXrcJcQmCkuMXx9t27MFG8Y4zxVXAbjgTjEcFLacqHNYBuW5PEo5viz",
  "key37": "oA5W5pNEF3WpPD7gdNGZN5Tg7ib6nDT8tfThJ5ZdCgHRnVyGuqejdKAPiaBZUC8sFNaniEPyuBx992qSk4p6bxA",
  "key38": "UpreUQB5AgG6WEHqTRoB6Fzo3C61EnQdhjUDiQYZtZKR5dDt6vq6AYvLuEX3kW8c3LsonadiCfQm22E4Br3VMzc",
  "key39": "5mtWBd69y4utd8WnGzRCN3XYrzA5fTvtFA9LkpJmhnTStNyvstLUcatUGQiZZMneFmbCB3wadDH85rxWTeQ3PGCT",
  "key40": "5LwjcqRfpiCjjhwAXhK5zGHRp6a6xx4jZsK7cWhbTfwi6hcoDkGKim7ZUhQj836cKLBZ7vGrasJiUAj98TuC3KSc",
  "key41": "3rEfux1zGGXAQpJ9fnG1zA1oEuuGgvFwD46ayS4EWtzjh8JoTw5o2tDCx1U9cRM2yjwf5Ce4MCGXXQm4UBwFB8ku",
  "key42": "5sk2RvMyQZLPyEQwTmHHeSBhv2AAbRvaeU7yVoNrSXXye3gKdmoNY13sZU9bmpDavtHUrP7gEs8o78rveuwfcM2D",
  "key43": "462bUpNk6wuqxmZZQJ1ERFebL2EvP7uMyB45L9wGWmFb99kRF2rE4Uqzciwr4f3fwA7mJw7mdCaQLVKdyEFdWDW1",
  "key44": "2cJ1SNTBvFjVNDjHzrNaR7HdEkETdumUobZUcP68dJEqZfs4VPZUnZARuYhohSuQg9n2jcYAwWnA4Wxh7tU24ZLY",
  "key45": "342WyQZBSyUP6RA8sK7Z2LFxShzTvV3BpP44zCZL3bjJQYsT3UvpJ5Heeqht7nGj9hR9zPffqTKjUwtYxKQqm2hw"
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
