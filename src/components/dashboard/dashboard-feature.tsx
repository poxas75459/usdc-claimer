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
    "4qk83Jhme4xtZibMnjGGgUEwu7Y9Yhwc3HBWQqoebuYZZYDaYE2XWN9UiTfCcwSUFuJ3nFheYQG84FmEs6xS7R5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BB18YTvcyD4BP81wFDf9wQDM3G4ckirWgUDAfk6dSBngBSg1eMoUQMA6FJFNomeDsVpkDo7CgswTV445AFDADD",
  "key1": "5T5p7jaxr6HfA9Zg4YY5iBpubF2YSvXvBc6cKe3YnstWVX9s6ymY8awoeDwkjvfzwUz2FDbmwV5BRuRYWs7LP4Rq",
  "key2": "3mTK9pCTtbJBXw8U3c9DnH9DXAzycgYWPAQSfcNodK6svTbuTwSgtFWgK41gNKNoZmYPvdNp3kDAyJZWCnhfBNWk",
  "key3": "ypM9wwQLSRAn9LMhi2P5hd2LnCodPfbUkDAuS7Q7KC9JCokjvH56uiLgd18sbzCqqvZEkYvRoAN2tG6acXpcULM",
  "key4": "3bAnwmEtN37RbW2HUwweejuHsjq5yn2W1RHVY5RKnzM7d81ctu4ugpM7r9vrcuGMjRNhZZeR3f22TNBhCFkmTt9Z",
  "key5": "3JWVf7pwEqVG742HLcwQZwTp7f6EPN9KRGY9SqpTAydjftj2FaNM9Z7mHpEvPthRaJXuvajxi6ZQV4r5jRQQSHyE",
  "key6": "5xdKkvG4woj3qCp33PjwvTtyCSC7fbURUD97wwAbY3Masi29x5PWP9qtA6k9TbBjgWrf2F3z71CXXxeQekAgPg1p",
  "key7": "2uYUYsMv6vvkaF3JcSqCmrivaa7qmr4vd5WePe4q8dFSfczqLRY3G9QQQhyMwc1d79rovN86uPxaLdEXF6gU7aE1",
  "key8": "4Mjj7pDfNK1LcBqmMyLk2U9cyY2HukLNtyUGymSjwGgRvsdDXkiTCr7wB1ZgsweArFZ1bCeE43KoCuceM8ybmEVV",
  "key9": "2QTn1VHLJN47ZxrP7ubJErS8mtZZqjZwWkJ1nuRJGtnSm4jxodzPADKhzqiH2FKs8RzTw68peoUUGJQQponogEoQ",
  "key10": "5K3dyZi6bMP8KgBVpJ5r5Rp3ornsdzNg6VvMdsRnABsik72jBKoMSVHDcKfFZRgXUwLFfSfX6FGiACfaK3HEqKhg",
  "key11": "2m4jJwaAJXNXhLzpQqK48Nvc4w8M4oXggqyQ7TwcaAUggi5QQD5vCGpMi9tHBn6yrQzVCA89r1UB3Hw4qU1LNT3G",
  "key12": "4PpUamhK2V5KhxUW2M2Ra1F7CU2teH7WB616dKiGAk1YoifaKnKiAMgWzRhbTYBr5NEAZfmh41UbwH5UedeD3ApN",
  "key13": "2bHnfhF2RQumxpkQKJ4G5AwjAGBJcNifUKPRiyJeFqWQbKzHLFu67m7UZvEFYAZkExm8beDdgCyAGuiFyihQKcRc",
  "key14": "KN9hntCBeh6ZkyKTxu9FFRCuH5kt7tWpfq2nBYhrLs2RdED3W9S2P5QqXJPM9QnK5AHyhnLKUtixTwbtp2pnhJj",
  "key15": "nEBA3cSeBHE6uULHkWYdSPX2woFkEtnA6kByF6v95CCnPA8fFYt31okKqVwrGgpRfkEWzGWqudzh9swvWVFN7ZB",
  "key16": "2UZZco7H8Ye9EuKmKrLPPTaBuPFyPV8N7CUx4iMSb9pZR7xZAPDQoZndZrG6n5mFtG9Aaxve1t5tYijRWQfrCjhH",
  "key17": "32zMhhbwX9KKPUR46YYcp55PxFxG1GvTbEThY5fDPNy6FHH5FTuUJyEK2aDzXghpYBuhtZysUkGowgSi37RLZsoa",
  "key18": "4qvWGyX7pSPG76fxvwXsL3QBaC3QJpxaqBjkzqTX8Q4BwkMcehtLLBMPb8kuA7Yu2JaqBwk76HudYg8iQXUweiiA",
  "key19": "62BwWvMJEQeeHFGiBxoMJTxTgFb1opLCEWNMin367ScWWmSgcVWEb9gUTjMjb7wE3AMKWhYrPMAWSKQUidq1ymra",
  "key20": "2yxY2VkbBkJu6tJ5zT3s4xNReEmUceoXtrnk3yzNXDHDaiDsGESuM2RAiZynzHQa5e6FYvCmudnG4nTuQ2X3Fpng",
  "key21": "4jYry1bHYoxxw4F7GuboibgVRqoUBUg37PSbxiLnZMkx6TdLHsrfJ8jCdQ8Ji6heUHDgRcEs4esfEWuqq1pPFjtz",
  "key22": "3PsxhPKUvmAPDgGm44viTjHBdUbbbwrp9TPWYLKH6jUE8ZJiKx34afCXUiywhZWfvgQdrq9NgTiMK2SRiHnPz4Gf",
  "key23": "54W7f8XWvMNvmg7CLPrcbfqvUv7mGBvgnRic2tcCDcQ3vK5qLbT5Lj7WqfUa9JbxdBtKrZWswA9TniPmzyZBcuPc",
  "key24": "5CRn4zFrcmF8mRUag86jVfnE76cyL3WUTXMhBZ7K4fqKGfcyosvFrhcVn6DCX6aGanVm4jSdLHMmgFk9oSiiXPka",
  "key25": "4z1RMrehSgLgF9GGg2m1miC6fyMHUHrC8i4AaHk1WYMvmpaTFBoxfBmmS55XGD95U18zU6z9dvzSgkB8qT6d7gSY",
  "key26": "5JmHbxxhtPiviVMmY9gfo8Drkxn6UPhRJyXWYjWhL8zpr6x2wgVG4eDW3zupUFRRwZ8b1P6XbVkHt7KrwKgGyZKg",
  "key27": "24ckaNzQXHpx8PskpX2MTAa8LrGRjvcxkKDsXCb572mvhQXkjXKnRdcDTxwYW7nZCJNNTk3669BGYhsHG8zKRYNq",
  "key28": "4vkLc2VSwyHqMP5neZKa3f5qyq5avNVVSJfpXDzjvK7LBbqVsLYaswiP1LXTNBkspXmaSCaXEv2r95bkcTuaacJA",
  "key29": "2hEyfwwF9TfcXgycKAP798wyfmXq1utZe1rwprwEoHrss2Ddc6GB8Vz21oBkEXtXFjvWuhH72ADKHNCJB6TPUn3u",
  "key30": "5kqiZ2dfhn8vbhZVAWvxGF5y2iPtKsU9b5YZjCswaQqKDxH3wGWu7zQwDVNGAww6bRs3Nki9XiUSpDQbCXTkCCxz",
  "key31": "8ubxPH2vrF8zfWv1EotQaRYQGEQpihsL4NXQPHabyJ14WDd2kgf6TJCwPr2Wf3NhtdYFDLbsdAfgZf45zTFvtKn",
  "key32": "628qQGXXpP5dsc6Gbf1NuYraeCQ8MJpSQ8rn8Btgx6FjDaVqmjxXY9G1aY9gyp3VdvhsqZcfgzCNGpy93X5Er7Hb",
  "key33": "Bu3KHXDNZoFfw64tExdd3YQMgFHAQnFMoSjjuspk346CP4TuUD2gtSbiRxDWTUxVTdQL4cLsvZdA7CnjUKVRRs9",
  "key34": "5ipUuuZaXi97JdiSbyWzrSsZpbUxrgX4GkGws3mTdYVgnBfhzpFhhYHhd1bQP8Z6QRqZyGqg2Vt16vYKBwYn3hrN",
  "key35": "3578hLEb86tdbUSjnjkJ4akcxPHQcRsL4n6qttucpPoTRYJb5duQzxhctVDE2FzbeHNmNCkdhKRV4dieneaP1MQo",
  "key36": "66FLMZqAahxKYFAtZa6sBpwcoDGiks94uYZ9NoESbvspkqZw3X2htSQafRKJHS5UNmZycnGAUigAS1y4Yo2FpKYR",
  "key37": "3zAFRo7EK1eXYCZjKicbiZUYa6vJ7qzKV82in6ejJm62tTWmKD3mKGEfZe5VJM2u6Gdk85XW5FtSvyuPXJ36f39G",
  "key38": "4pST4AbaGsfMqhhNkGncmJHsFeV8w3vCCQ5j2W8a1DKvW7M7hubWyroAUv6BLSJ9J7zjneGLd2WsBfBuaUhkSL1H",
  "key39": "4FqVw3tqCSQCy9K5mR1pMgVS2cbfzmgW3sXGzko45v7xgZEtq6MSHgoNRGjdVK4ePQ4BufPtVdWfK3Cuv7uuFDy4",
  "key40": "2bUA2xota1sCbEspubCHHoERzFajGiyZcy67otbS1U9tcNrueVf8GmaJ5ZYP6aYybjBGkYi92Q8LXA85v7WG7XTo",
  "key41": "5wFYJRHCaVbXzri51297Q4v1NKJwAeq7HTtC97noHG4SeZwyaHsdbhDUi6yezmijSDQKXUhaEZn7g7qSpVcNah3H",
  "key42": "4ZBkKsoCUwddT3tmc8NRRNNVNyWuq2EZNRqniXuHxDci5r53iZ23hFRpw2mvdgrcfbPKPzdqX8VZ7EQia51rSyhL",
  "key43": "4my9rzVQgq7XAuAKVkzqhVNGcQZP4kqd7FGT3uigW4czc8UM1ZChb9QGfYo5ttbdM2KveVTj8Nh8T23odg49so7a",
  "key44": "4Srg9tqFsp4ZrxnSWZevMHmXozeQ5beYbvvqVAFqZisaqfgmyrziBovCUVbHFmRTcR7Qz6o6Lf14StG2C4RmpREd",
  "key45": "2w69oVcVZeKxMdYdhKNhTbyLXV3q1imXcNBj5Zcc5cALunztSYQzVfbf1Jni87g1wVnk4i35ubzCfBo8p4NWcgHJ",
  "key46": "1o6zji9ajQLVgcMe37Dg9UwqA1C3WR2pj7kWSLWo6xz12WYyu4Hn3sNR4t9D8ZoT2dtor3nQm1ByBogU8HQRp7d",
  "key47": "4aMuGtMF2xAoCo47FdutHxxMho5YTvzTy4kDfC2QBBkNq2wytBUFvLLV1tqATyXnLYVycBgqzZtdq4LrWvA8cRCV",
  "key48": "3iPMhkrhHxKN8uDmazLz8mmYUCF3CdbHVXvnWmYQMB3zSsY1mBDrUtQJ9feJN2XFvPR3hN4ihrYnTXpSFKrS7j3J",
  "key49": "4XuF27gMS2hx7pQj8WegDuU6BvFrW642p5Z55X8eqnmrKeJj9GwTQJfgSkvgPFiuKfrYY5ai8cBu2cDZ5PCXEdZp"
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
