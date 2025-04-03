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
    "M2M2LWGEdEbT1YT2hWUdGxsraYyea4bSQNLQacfYiK6fissPYrUDVANkzjQCRU55zV5WMsR5E9rPdZrx8dX7qJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kt9d9PCjzY9G4mp6hDLS9m64wB6ruC6ZozFtQdpNmcpngewMkomRfthNyZP5rzcuQMxwTMfFMzXqsCJShtYzyz6",
  "key1": "gbTnXPRw8KJcW3VDSiBwtF3rPeSGZewKUchhU7kZVVsgWmBYMCLA5NXch2brwCnEHo9ooYRaeBzbkJLg1TPLNL2",
  "key2": "5eiv96ucjnJgxMYuLB2U7MmiybG2LKydoNtfpdGB6i74CTGEcZmUqjfN7YrazkJxP7bZzUxfLhYP4KoXZGdV7are",
  "key3": "63mhjrP55peTQTzpNegVZF76gHDxzYddApy2w3VewPBE2aaQJFcUp2DCC5XSZCZY5M9jcypvg9CCYeoXMjafoCvC",
  "key4": "2EsFtsrXyuNdAqDnXnYzuj6SwX1JPUMN7N1ZjJBwx2YcA7SzrrW98bgthukwbmbHq3fvhnwrGXpRQvp5jYhDvkRp",
  "key5": "Cuc9P3q7Ey8sY1D9w2A8mfFE922RZZQCcQj4BFDKar6agFMTreJFy6rCBCPRAqNkzwcAfchSpDXvTzTqQyjwq5Z",
  "key6": "2vPp1Kb4Z1Ug9HatB6jDtkojqcZfPfQYoD324xpf8XVoqdwfmTdxssG8roNnpsd4VtyyfYS9sdDx5YiYTTpTtbun",
  "key7": "4bfP1aNoB2Z8L8H5bzQEKxDftoi1ecpo5TJut8rrJggCKZCLQwGoDJM1LHmZaME2XdibmwfMJxAsR2BojZctM78A",
  "key8": "3KteisdPg2gAESka3CLmDwuL4igUQ1u66uvBoG4KBdCFXnourzgGyrXjiMJdh8NCdpyWyFTDQHgDbDhHnsq8jupv",
  "key9": "t12Eu37dmLiHiwJLj4d9E3157kfKbC3q99w8dYJrsPTZ8FpwvNfzesPMMDrAzMr1N1VyuV9x8VG85GUbqPnPrcB",
  "key10": "48pkzWXvjKvgQeC6SeKZJNUKbmJWZ4hatK3L1dQhhe7BgpAsRcTa1R7bcFDGdgcju2WG5hHrBDQiWTtpmAybpCyP",
  "key11": "4JnPm9JR3fGpsPmFMHwcjsGrMWjMcvfECSWPiU1TjhJTcMgduvuP58GwnxbR1znGGwXVLMQuWMuEgwLhR5ppwd8k",
  "key12": "DiBsHHMKaWZrwKXFRavxtnR4rEtcuModFvvK7q35k7hHrgFE6sx6Ye21qNGgPhr1ps3ASsLyG3Wb7pJFqT5fbwa",
  "key13": "5aL55aFwEuV4pkhGdFypy9mDB5mprw54jJgEzyonbgYoCTMnEciq2tPXNrNRc5vVhxXa3CGdxwcKx1eFMoQccXva",
  "key14": "4tM7RbcFP816XMHGPZWzWHnLC5KtSRaFEBRpZMvbuodUb9FHqZQnyJEdaCB8ojr3PHqdtLHDW5BRbEJf6WCPQGcb",
  "key15": "2Gn28womtDKyS7HXtUe12JyKpon2MsRghCosGtGGXKKno4bJ4fryiKiN5gEqS8qsuL7dgQyB7NHw47S7mMeQDS9f",
  "key16": "cBygDTpqmaz2LV8Pn5zx8ywhCRm3L9zoeSkrnBDV6tKBezVWfxH1uSy3QkbwWEApXDdJqgtR3RiGkP2DA4MwhFc",
  "key17": "CUY7Gshvo1rqMo9jtAXyEX9MtoyNPb653qmhQMXEhPUUTPJ7zH1dddiwwU9S9MyjfLXE7HvDgUhxMD1FHzPVFnS",
  "key18": "4T1d1o6mN8sL1tgbtmYZH5UvsoEQriP7DL9mDWoFSCM9ahvUCs1RuKC5sXoVWiPFh9hxjMMG3iEUXvLM1Wpz7kUw",
  "key19": "2feD1paP8BjW2kdGeXxFVZVJk6u8DaQtwiWLpTaKYhkpbFYjo4942JGqdzLkr8XgEQYxo768RUKCFcbjhFv43qoE",
  "key20": "8QpsGeyy4QcEWAxcX9io74LVamcTGbPDVP6hepbMr7wy2s6utMVt7NyCKbwrX5TbGRSuinwcUjuSBAWqnByS4FL",
  "key21": "2rUeUDJCtqKtWZ2TYVhQazK2VKV8ZFUiwefwDdb5HBhkLjkit1WamH6avbs1o4nSLSe6GeVERj6uoDdUqt48iNe3",
  "key22": "2FcyLn6V2FKCFwscfv49RHqpG3J6BBQRXiaNGYqM7bgibtfpskwZ3MEM8STG8ni7Ty5fiEEApBGP5qKt3zfzC3TV",
  "key23": "2bfqq9LEv12fayhWea8SKpsVoMVQZXyyPrc6xUVaZokf1WLRuWuGXbU4M788F1eu46ruFAmaQDFj1sFhNe1ZghGr",
  "key24": "2jezNk9AhhioegMK4tdWa24ajw5zHHRMq7aG6xTQyRsnTZpEpDQ95zVYu5uUTFHE6RbaMjBx1YRdw5Uv2aBAjQwV",
  "key25": "5QwrHwmpr2b1cRZveL2Pu7kmVKqrk96qiXK9hNVx3dQ8ecMUgQ2ok1XXQCMCM5n5nNTCHA8isKFPn8hEd1RRQQkR",
  "key26": "5uGHhwmwjqTmqUfYMLi95Ni7LXDMvfBdnrM1uE3jFdQA16e7DuZYZ9qLtTobTA2NmkUpDfWZbZaKPsazCfRXnpu7",
  "key27": "3ZNb8xj4Fsr69NK5tRCrdr7XqRqaipdj4DUnUjr6cBCM7s8tKD74scXvqWaDW5gfkGefnGLxd62SdX1h4uBiTrNU",
  "key28": "2q7MBgC9twJnGDDgStJWRbusejVkuPfeb8TNG6YPecrcTXhBnPpCoegaKyRHiAHvvAUmL2RS4prQ3n3NeFJ5RUEi",
  "key29": "MWm4KtCPK6a2UiXB6jeaa2Q2zjSxEmG4nwL4PUewT5avGzZijVTZRvxETJS3kyVdPFX8DhViCXDC4or6uJMXsFc",
  "key30": "4kqeDUjEnSwYxUeGS2QraemjS6Q4dnwH3WyWSRmwLjQ6zD1yfbGbWFHGW4f2czQnhJ8VQamh7o6tjmU4qN75CVrb",
  "key31": "5f7HafHNSqVMYHSiyqpSMAMoz1TsBMUtAT8Qr4YiLk8XaKToVzkomyt2w8u3qjueZ26JNy2vuvXHQqDc5h57WQTw",
  "key32": "3HTuoucHBnAJfKjrvwZscCZUFXE9NyFRKJ5CCtJHC9HddrDNskTnCjd5x8AK4GuYnG1YcCyT9Jb1DS4b13zgLv1K",
  "key33": "3FzZCdHQ8cDMZ3ytXMTXzHGdo9X32X3YCbKgSWq4SqK41MJL5J4YG2ciftYoLcCnESdZA97Xvvkd9Nsbrwpk14an",
  "key34": "3bJQVSekU9Jrv4ohSiyH9oL7BFVqqZ5NEtZUiZ3vHqjvDZLLPQtG7jpuAGYsderCDnVxJn1PQqz3Rfh3rpePeXAq",
  "key35": "2iESvgB3kSvKxZHLVD9nNw1bYrmEmgQXR588M6B4wjnfxzhXgDo8uyhsQkT3SPB3zuWEPLpAHkouwLGN5AtvyeMK",
  "key36": "3McZ7h6ymgyggt4t4EsjC9XNMzHCSAB6tiW7STsc6USYnqG3PoUuJeLeNwHQf6Bv5as8q97s3HAP6GY435WxZqbv",
  "key37": "bWUs1L4WTtXMh4nwCzR1j2zrN3dHj22bhSNe2xxdPVf5RCFoTkiJwqeBAe11noBRiwpo8bn8AvzQuWmAMUq8muV",
  "key38": "4Won5EZptRhG4ZJMeJex8kcpkMETuL2T8NLu4zSPTWEBqrtxD3P9umTFb5EHHsj3c9Z6wPM9wXx5LiZuXsHr4qHf",
  "key39": "3zDnB6m5yqsrtgZYA2mYDmBcqnqyQ74gzNhrTuz2z426xWPzT6z11EJ8ueqiUvfaoZxtZqnpxAiu7kM6tvSn6M8U",
  "key40": "2ycA7kNWBYzdRnkBBoL93wjgipQAiCaJz69pzEo3zy6yvRAuj8og8kLxYF826BMxNLfpWYS5rkb3PyggerWqVMpf",
  "key41": "5CT3NrydarxchNaEVHNpVVVxaY3Pk1VjRvwXSyeMhLcfcn2V8m2Zoubk38AoDTxkUDWTT9vNUkmaAJg8xTtqkicx"
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
