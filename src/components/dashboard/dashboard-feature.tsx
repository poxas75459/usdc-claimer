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
    "5oSE7RXT23aXQLKAupQyMS3nA9LvsVG2HSbMvXsz4F8kk2BPAdEAfBXXoKPsuyRr6VLz4mSxivDmPej98tMtxsZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bivo7AC8fM3rMvJvguzFCvUxp6WdJdSD6QkKa1o9q3KqeNXMdUuJ14W43BrD4h6W6vwi5aJiATkwDn7oQUAU9Le",
  "key1": "4oaQzJFMCGVoxv1t9mDnLSSBVKhvH3jfWc2oqehKHBD1rvr3z65tBbAsP3SdxwPMWd1uy7cPVmrDrrYVfPoy4Pcp",
  "key2": "2mK9kuCVJk3UVRBStcBFprdByx5ibvUTJqNtkdVy43CBW3bxTKZY9f2c1y6KLuq8rFHb52MSXrDyxvhznryAVQRH",
  "key3": "34jhAhaKC3KcHRVAxcVzFfVjG9vWn5fC4JCiXepzS2HEVPEfMrwz3paRGVzuzWfZbKdu2Sub3gZCBXED8y7WP9DG",
  "key4": "3rLc5t9ozLpeuwH8DSaQBLQPLx8tLAXi4XyXykaum23mURoRWY2mVmownp18UAXMsW6iTuYonCNS5K3tU6qZWBaV",
  "key5": "3teacWcK6GN3aJnXzXrYqPRa3kZxHB4QpHpFxu8mPQNJDMUF1fmjUXR72J26ywsfJF3xb5oRs12RFscV18W9pWXB",
  "key6": "5Njw5bm2P6HiJAGNZTgcc7BvgzT4sb2vBLeLWMFLx33zuxjoYJgZS7Vt9abYKyTC1ns4XveR78KkojqtLZRQsr9",
  "key7": "2EUoL5ae9tePWTMRYABx9KH2TNMWot1qHgXXo12UU9pgs7acYPUezMr9HAyNc8Heod3ya1JLmBX5UFYkZxN4ghj4",
  "key8": "4R8QUPjQag2Dy3w1KMwVByGxHS38fGqX9qhV7aQdGFKTqwqx7SeU2WabXtsWYpieogFHNBhhgxm5SYxrTYu2KGtV",
  "key9": "4yT7W64Cko1kfHWYPx52do6R9DhRCnP8Pwh5RnwGrAHKxC2kk6MppinXFD3AymSAdkUHgCE9Bs7WzRBGqYy3ABxo",
  "key10": "RpiCR4KBsyisakmFNYRyXRNnZKGFeVabdbvP3S79DX3YkTKNTGSGhDPZVcrsiX8Sb86jSsCyP1csGvFRmQ4iEUD",
  "key11": "3dCpGsvNFqyPHhduRJdNxxunrn6juSrcWDr58uQT9TFXXPevTp4q9Dx46wLWyAFPTb8A4ydYMYWFgjnwj7ZToaZC",
  "key12": "66yZaQQ23P6r35QxF2BEv99jPjGn86j9xQcw5ww8VmWTHk3kHqVh7uBG6otCX5Y4PCJu1FbLpA4haHEhMLTa8L3o",
  "key13": "2kaqNSd7EKvwQLbsc1ieKCWatDrwkXmmP8FKTWAYKyA3YuogG7yMqP6MSAKixfGmP5RrrkssD7Mjjp7hoA4NuzEf",
  "key14": "2Y8PiT8A2WaSpB3z5efPiZKgJ7J8vyS3RhTBEu3NojCeuiG5XiYxHZAckb5s7U6cnhMN5tmRpavv6drn7xYPvZB3",
  "key15": "61h4bxyta9mgGS2vMpi9NfdZJSJc81Ts7xhPC7BKS5Cv3eGHB57oLwnDF4kxZCjb2Qbf6HLwJJMHht7JFtYWmiYw",
  "key16": "a2TtjA2TyY5YNvDhjs8r9yZSFr2ATBAM5kzefR6Yy7uUinEq5BKdmYtUgw6vDkrBpBkFLj2TJxNehTHVnGKNz72",
  "key17": "2DrCXhTtokfbrALptK9Tr7yqpYUguae8dionUz6hU5yBddoAzmU13e562uw8dewYDLqmNDPqNvaPWnamp1VfFw11",
  "key18": "39wPS6r898yaszNJMhQSdkrWiA2riuJ5szubqriZWCUD23RyiiNU8NNLgfKqLM23eK3Cw39p2ryfCCfL1oWKqmEA",
  "key19": "3BSAEQSJRDAaKQRCSFZ7QACBmYahsHpgdyFqafSiWx3SqLaLBq9sYxttp6BPacS9zUqpWWrgLJuYAX9nt4MnXgJt",
  "key20": "PkqRmHNKv1axEgMUimbnifPs9zgYfmyGL9JZJYHxcNfhcYZavtJrPaawqnkhX5FJybEKJwqBeZq5Hp4ZTkAn1RP",
  "key21": "1MXUUXio4VCEjYzLZVASHphEcj8SupJQj4mvE3apo45iye58qWxoinnUZmcUZjdMPWUL98uEiMbysTzvpoPRwaX",
  "key22": "2Q6r81Qf265rhd1EG7zu3u5KKtkuyYAow2vzTU2N7CuMEuy8BrNpc3bLuDQYeEwZhgqzUbMEd17cHEqgbeGnodUN",
  "key23": "2KgTu1N4W635amr5xwXYWmVSXzkxUw3oieJSSr9K6sthaAAP8LsXW4i4v2SoTkf1t4XYQWT3iEroKB14U2WFsHuF",
  "key24": "2agsykr16amYi3tCwvyQTZsNrg4ZHYbfcrL7mXC6GHVWU6a382qDEqjMd75rYCSSSmbMBiJsW1M6qerXAXRo3Ngc",
  "key25": "2r4WPbhedZ6bSxz6wbKFd1iYtofQZPx2sJ9UfobMrFWPjfMLsK273upEUiRRoNKuU8rmqca3aAUGCrWit9EJYf7C",
  "key26": "qctPs9XCf2YKv36PAFbP77k91SV3RRqKiu8zvUU3tLgLXe2RfdijtVJVAekrdqnGDcRCZkygKNCYcggFKZBf5tN",
  "key27": "2xUqBwPtpifHzuBTPAvmwESCwUK9HAweF69yxFPGZ9YCckQ8tbY7x13GRuX7WaZPkBBbNzY6zeD1cUEDh5vHG8Sh",
  "key28": "4Wz9GRH2CkQmJ7NdTMicSRCdxHx6Xmr8RFNMtwHhUbaR7dLxkKBubdSWi75rj4gYrYr6JQP8yJhnz9HMP5Kgijxw",
  "key29": "3EvTs63q2y6NPxfPvTpQhcURxDYMKXW79SfCjJye2kdSwrWRLm1yy7tYsqcqjrUprxycsyQAeYgiQRUX9z5hUKFY",
  "key30": "VZK5qqSHwd7bYKA9wtnxoGp3u3vtNnkMnkAo4S6sBYqRh9z5MbL1Xr2FEfSSVzniZCJZQsFT4dYRKVgTBGJjkio",
  "key31": "2iVA3dHpByVsR7qKNcWjDu4y91YXkAjDz41vRwLEnEzM5SkA7b75YpyTBXctCDtj6XDN8jBnRknJPaPAgcVLEuK8",
  "key32": "rXCTPC1RmbbjT5vBF7Xvt5rU73nUU1YULuirg3c56g4N1vLJoJhwYP7cMvH6m7Pky58GTTXhLNjrCqQWkyWy7EC",
  "key33": "5Qu5wXpphhhJv5GakdN9UVHCHdWDBg2ofx7sBujuX1m1t8KmP5fzPynhYwHeJxkAxL7h2D5iuDsEJyEE2YocA9yH",
  "key34": "454RAaa7MW6TThLbkqu46JEUMusE7GjzVe1pTQqaZocPucFioK41f69dq8vvRg5Q9HrQr4Fgg6hevC436s4sWsKs",
  "key35": "3p2esoZk1PAATp1FCcuWXVB9jip62GycN9GNhfBGRiMXgvuBLT1KPhdYtNRsDpRiYxfdj9kC1Q6g32Xu4BtgU8bQ",
  "key36": "fpN2zn3WmcnNT27ypaJHAdz9V97ZZkGHFtK9ffFQMMwAvyLXHTS2j4yUphKxzugngKX8sznR1A4yAppwSJHykXf",
  "key37": "4wN3EuGZqSrwueAgvLUCMryvDnxWpCQM8Cj2Kit7rKeW56nwmfT4g1aFZpcYXxAheQNUk7aYzBigAhyaNhh9wPGh",
  "key38": "3XHL3pkFkTrZ3Rv3rZqGihsw8rBPkYBbv8GouAam8aGmQTWd6M1fsvh4HbW5pqHWfVbBHbWjztd5pCq5XrvjTwbN",
  "key39": "351xumTGq6tprJKZYy6MArKzwVtxJ2vJCKWq4X8xa7Gn41ffU6qvsAZKwtyagbrNPHSXvEsXwtHmW8Kf2a4W9RAE",
  "key40": "3A7k2dvUnFPPu3rAvtBY2caUotXkVo6U7GY1SHKZ6zptEdtLy787u5VUQcaEi6EnZPJJ6x6ZsHjmVZKY7e9SPFxM",
  "key41": "4CmU6WWmXsNhCCn9apUH7c61wheZu9c4YCStRtNxEPYRuEENtQcxGAbYrHAbsDfWFYQCu6vaTvqKhReed6dD3Rdo",
  "key42": "2xk5pLm6PV1j4BNGbZcypzhsChqtrXoxWiyL8uFtYix1s7cE8bTioCgXk1rrjNoArzK75XhHR122BijDEvBcs4Nq",
  "key43": "5yAey4BpN5eaXy1urAL1kGdAN8VBSpWEzmobRu1LVqVc3HWZmWoCsNeaLjryDh61pvYW2Sr74Xiuz1TSXGxnP7KZ",
  "key44": "4SiA7SGkSFRDDgsFFtuBmiJcC3Qz1YRFH1uTohQmXjX7h4DQ1W7KmuGk9M3Qk13HFAJtpBECECmXd4TwbVPisfLJ"
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
