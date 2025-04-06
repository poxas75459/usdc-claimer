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
    "2b9gAU3CexTJFH9wb5ncXddfkSLzR7zB6h37DiJzZ4YG5CSFKQJnGrFHKySssmLXKGJ6RjQTpeyuh4a9kE71W9G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dkgR2Xw5XMSSn4v51nsxuofdXghBEFkTAsqxcNa8yQk2vMXvzVPxBeLXonG8FfgyREgxmvdQ3cEP4Bxcen9Ug3t",
  "key1": "9Z5WAULyi36SHQPeesAyi6NkYGVJHTCL51WqCF7JGWv5gGeg4tXm1EytXxgp7aiDZxDLV2urteDJiB6UN44sz7Y",
  "key2": "2BQCiy9MPL9AYCFBaSMvcDawZaMyp947FWN5LfB1KiuGKteZqZ8iSahsFFozThg93TMbsacGymVSZzE37mrXWGe4",
  "key3": "42SmqCXBMVVhnASHdB8ZpCY67j1oZNAqNeC6DfoxgFDbme9x8xd4QbgnGXe9i1uN6vf2CezrEGpA7KXZkh1rAJDZ",
  "key4": "2jr2Wf5CGkbic7kLZcQ19vV4hQFJqCjq767ms4j2BrjLya4tLzjzCtjCqtEtoD5S9RrhAP8kKLBndSMxmHRcLohF",
  "key5": "4CfgJ75wHNVJAhfKrcWvJW2hTUWhD4eyvnNFXntjb4T3hMnaft2wSrQ8RceeE26KVjENk5iSPbTJUFnmHX2yyeu7",
  "key6": "52GyxRArM1M9nSoZn4Xj6QpUdMYrT3fFvNRXVGg4vFfVY4ojmJyUJkpnNZ1enVAF342mrJNgW1xqJ4ApMW3Qtdau",
  "key7": "fwkxmpTBGkPWkyGpQ64WVX8zquXkXZECoxZJzQboNaKUY2cmoUJNdBxg7zZHLpsz2rMbFpjy1Hvj65iNerH3Fhg",
  "key8": "235KQKKx8mmdYCyM4TJ78dMRCCHq6KA7qXLPVoL4hwd4cmviQrgETdrJMRLGn6jAv5uwEsfbA7qpAEMQ5UhUYQUi",
  "key9": "5XmokxnXmqKmG8ef9ULH3ravbBRwQme3VZEM9r6vrNeToUixxsS2Zmx2NcxZ7CmFoFeLP69fKASgj6zyaUQwx2Ni",
  "key10": "2dNC8Yc6aTTw6YZhX61KsR1d37YTvQ93cZw5F5JzvnaKewo9ZwsiQiSnLMsHgCQnZVoYvk6HFftp3Y8XKF7MEDqy",
  "key11": "3yJoqQw5ZZoSb7BzGRCccUVBsyWhUxKSeWqXkNQiW1WzaKLjnCGdmPHtv9CEa2UvbTmWTTz9NWrBJrTjVFbPh3tJ",
  "key12": "2BcboCXMpaQ7ybNPZEja8HdHyPXKAKJzzsm9QLAYqSSHXnVX3wNKdrgEXBT1MKBvpYMwbrwmpZMiTUxSVMQjpTQ3",
  "key13": "2XtjFg7M381bQc1RohSrW88HqhZgZhsWXjZXsAfZMdSkgMA4qeRf9j3wu9rT3zA1P39sj4GEVX46JXhENJovAqGq",
  "key14": "2GqymvwjpRHqhWrbJ5Tpq8dnZGsUZYK4rHJB1qAtkTzBd3wUvZ8dMFGYTHofEq1ayusvyxGrVcWWFTssLhYTHGC7",
  "key15": "48ifKxBe1fe77NVd5xu5734hHz4dGmM6cvQLNtQG8Z9j7Aj1apKEixdkMsbbWDJrdcyHtxzxhE3MQG9WWov2qTcp",
  "key16": "4r21KjiN1uupFBYA6MBTzpcWJkA3k3toR3hxssFjm6csD9XCwWMzPPUwXv7eZ9BVTSyen1fNQ9jwJZG14guTRCNm",
  "key17": "28RpWz3VrXuRXe27d13MBUMtTREVFgK4RZNa3nzwHYSg5P88Urr3PRHrxpoeCUDG1sN9WESKvofroFeTSCNE1Tb8",
  "key18": "2tjh6yjRcwjvYH5krKP3U2fMVnqwsuUtmLxCEaiGFSs63mPRpLYgeD5oUqNxNuGzJ8H8J3omv6UVvXPJMG9Vtupx",
  "key19": "2CVxbdDJYbDkPEz6SMZzKvJxePSMvRNmwf7NyvPt6noiCUvczMTF48ctoHB5NTh131mM5ocN4ozhgRGoVG8FPmHk",
  "key20": "2J8f6PjdzQDc8p9694KF1GDuMU8XecGS3CzHwQPWf7BjCtwr4FdKJ1m5aL8ZG5jL1iMk27EYqiouHBu5xvZEc5Pe",
  "key21": "h1YAYVKuQHdrdYHarJnUrsbadyeBXYKGfhzCuGAsE5WjSayDeUgbG2wpomftRw1RR2yQVUpRodHS7wo37WiEpmQ",
  "key22": "48R5pkXKMAM4cLT7mp4D7PMCwPagR4FpF3buYFPQQ66vZ9P4yLAy9UEsonAJVLqqbeW54X4hV5R6sBKxk9t5HdVA",
  "key23": "52ZfB1P8A7wxuDQvtL2dCaJaJXoddsRHuxYsNHQZTSFy1oLUCgzcnkmShbdAj4BehqhkGBMi6CfYyC9uMxBFvts5",
  "key24": "34yFGnUNSf8WHX18G1tAbF87edAu529vxSGx5yyEshfbSGvbVbiqNskU1u4GP7G6uUEafiJAx2PrBwRJhdJiXbEH",
  "key25": "31WLYBqMvbe4j2HaBxemge6b7KJoxwdnDJ5q49GszxBuwUnipc2MEbnZpUEb7AvX9PsAsH2Gybiym2irouhRmD5J",
  "key26": "2HnppgDKYRKipqeKMLrH7Y1jabQFSTB1YLbJBEuxk4i5yK5MQzx54mXXSKbs9sWvwuzeyMzUdVzj2VoQobBsHd99",
  "key27": "3CBzwUp6bfd1SmGLoT1EEZPDa69Gey8cbNxVW94qWuqW36FGUu63hRjtmk1qgS36LVGWkA6L2nkkUGYBiv3bysPv",
  "key28": "5WLpaso5rGejqoAh6aurHG5AWg33m4PjYjP9kb2vUpZJB5PkqWQg1JaK276png1CQ6pZLdgSGtHrzsZk2wCP3TKp",
  "key29": "51XJaXKNvq4suwiCTt684z4szvreQV8ZbfiXfZvmJ3sGKhTuLtKwi6BZd2Wc3DcPs4wTY4EaKcFkR7VhWqi2dzuV",
  "key30": "2Gduppx6tF84xAgxc92X7Tq67n8L1gTfwgSk5gMbBFozhGMxXDV6VLEBPaVzprLfqZEJM4g7tvQH7R5gXjvjYAB9",
  "key31": "3KwmrRA3VvZSU7esfxQE4sno8VsXNKw2ojS2U3M3VGDcYZ3pfqhA6tbLwEX3yKjcvxk8kNSdxSnSQiG5fVz9qojG",
  "key32": "2wg3Me1j2WuQKAxkTUzGgQ5yxGAyyD3qxrjbw3F4SP5JgEqpYoXtJjgzDqDFLNx6GXpkr9uksePGoThFSXEFDKcd",
  "key33": "5wNBtiftCcMDapBmeCUtpEN4FNg2x6RA2QFxP7g3RDediNQkzzRtmVTqRyzJhRPb9jC6cC5nroy6m6nU8C5kA351",
  "key34": "4RRUZwR8poPkWfVMhRKxigfpUhdjEb8dLZoLsd5gaGLeDeW3JCXcXfGHHzhdjc53yBK2L5xTSey6tww7E1eQZukX",
  "key35": "3Fpgh8Xd6dWjvJ1eutXVoVraijvypSaV9VzFGDZZShZSfMc29qPQcrvSwa8hcsnamkCmEFyMp8ijfDsRz2p6H7C9",
  "key36": "pY2tPq4eGo4hbux6oYDuAZBd6h7LCtgXLPvyx1WtYrycJZjdmrmZm74qLV5f2SFkqaQxDMpW4D26bsk59qk5nQ4",
  "key37": "3udhc3KKrFZP1KJrES61HXn8ALDg255icrPmY2ztb7eTaUtCMi26EQ9JWKueB2CXNEpcfEHy9JAGJPdBkGhYTTUB",
  "key38": "33egiFBeA8UT8qKrDfJ2E1Gs6CUqRRKBHJMgXk8dYbQ9jLEwKrBRMR8xoUy5Ztn44KEDuPMuZJfLcW3hnuh26cga",
  "key39": "4KKPTSTZvYuRXEBDE8zKddgB3SwfSE8RgWc1KMt7SnQbFjheUm2ZFsmRVU8EkkN3nizthskCVMcXggr9u7QDYwNk",
  "key40": "33nBjPw25MWnwrVUPJuTnn2M6S9NK12fV39Kbcizk553UBgGzT4SUB2FedwWwJ9bhxKBaC7sdBq52UH3gmxjNoBE",
  "key41": "3oWtjp5pixWVYkFxdatJjQRYsYvmJD5B5uKJLssSGNHfreGqnRd8Pav8rVQHRgtaXuKkShg3W1i5GTJjUCu7fTtt",
  "key42": "5muyJRtC8tjX3r1akK9r3FoKCYM6o94qgYX54PA5D3SacDUAkAaZsKsdwan37x93rjShpf2kbmZAubrPY4orViQ5",
  "key43": "4G1eBVyr4Ex3BpUXSnaU6fXo89mnEDLz5Hx5tc44To1s19AkLPjAEEczKGxN1eWH3ydupCee4YPxZqnK3rRoaze4",
  "key44": "4N2pFumhqaowSjf2w45novTkSQxmU4KDSqsJpVZ9Jy6JV28F3rm7biNhN7wRAf6kDpNNfSu4DhGfTg3sdbeqy9sd",
  "key45": "2DPny4ihXF384x7uJzuUQk5CbSS6M55wdFvs2po1RAFSN2sYZ5DBVcqc8ZQ7h6N893dHTWSgcZNHFJbFiBBgEHLi",
  "key46": "47pdvaTtosmZ7Y44yBDPC7cAuM5R9vEQFLKTLZXpy41NhbeoHf51ULzyxmoKgbTzBrjxSQJ9jttYdk2BXHx54mDW",
  "key47": "5Z23UcZPdyeHxm3PQ7UsQjEN2t62G4akS2HuTDNU7ZepB7YpHFVZaCgw85Lc87EZhLYqKQU5EuWw8qHqp4ToC2uE",
  "key48": "29dgkjMrDebkD1EkZ2RopNhna7zR73CKskuXxDR6mZ4kf7fRs5ZPnbZnQE2LQhtwQ4ou5nQpqfDbb5qz7eUW4szr",
  "key49": "5VqZk8yZown6anrTpRQnpVepc3TiPoV8c8YUc5VASPUgFpdUew6bisASpCS6Yi4mq7UeKt1yzu6hFVH3iCrKSxTA"
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
