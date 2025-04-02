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
    "4rN6Dr2a3KqiPMLsDoB5sZT7EjvmphHdz9Z1AavoRsG6esAeJSH2CXMA3nyBiB3bx78e2KST5KgCcP8oc8K5EWpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLhyxp5uopsLPNk7WdHpweQ6brnjjri8JnnSVcbvwfhbuJjScgRG4SDWxiRuahqBrJgb9D4zmB3Jqs8G5H2NEf2",
  "key1": "5BHHf2ZanMX8yNdk52f5ipFwqfuw2CoDdewE75U9aaf6AmT5gUj5fbqGFoVoX29GaQSmsgJZfMMniMc5G4ydJ9Hi",
  "key2": "5nr99fB8fCFi8ZoZPuN9yLxUAyF2KRyLxhUSkNZui3zkUQiVhDYCjLahxrziahndwhSi8hDFGz9gRgqkmiQyPzj3",
  "key3": "2tGGSzKhGVTJHko3xq7vQ9EbyK2LESfxnHBB5s1Wpn6U8Yudbi8XALLoigq5Edt74rX9zxesrzk5bBocBsU4uGFQ",
  "key4": "5pFC1Vtdr8py6HEjs44My1Kva7Am9rKkqHHAHjP6XNmEnAxWpCt78zjCe4yBqwZERYyzzZk6rUdTxuNy7LPNjir3",
  "key5": "3AkRMTFxG3Psiwavb3oVwxcKBHwYAEKq4RNezd4XzgiArQi4JsMmK66tUtnx1NFQCtc883Z7inZ1az6NLRvMoeY8",
  "key6": "5jnupgKjKeSu6BQqAqBhiXZiQ4ti1zs6sUYZiaZRjzvX9dtxmXfP7bV5cAPpeMVEnscewi8pzR6WbxnYAcEsZbuv",
  "key7": "2vijkBZ9biWkyTMDxt1d1oMjZuJYef5Xip75hTnMQyRTPUy8dDeQAb1v7jSKFNe7CYgmuruJu1vVrLRed541kpSw",
  "key8": "1rW3PwbRdyn4QQJhEsLfwPfaFaxfvUtBrcbn8pe5ZZeHBtVkmCXNqErMbT4tHLAMr1tFkpmhURobAx54dfRsgQQ",
  "key9": "3vva9GbxAoxQg9nHvnKUJy5XrFAqVTjBXSVX6aZWsn9vAvfnnLVRfx5iPwuF3AE4GEYKRdCtMB5hQTRZzwNL63fQ",
  "key10": "eSjYXJUjfAhBMsoPrnf4jaFBcw6QLGgjxsPwc1bCEnv5knokSbkSEG26zUjupP5uSFuJe1J5PXLpSn1ezcr3Vbp",
  "key11": "4UhK7QhuDHUhBsMD28erLSy4mXDQHQcdY5Nx8cxUkxJRrr6h9wpHpsMxVTKFdcMfwjisFzDCyouqwAh3ox8cDNLf",
  "key12": "4KztdhK1Aea14ybu6pfBwMThsh8uAn8Z111XWJ3kJnFTttwj3g36V2VRFzsZ3V95dj8C7LT6GiUfk4gtmmzir3ur",
  "key13": "2o4z2NFdA1cRQiVK6DjzG3z3SBNj5Nf2mh7g3YyKBMHkzk1QiVB6nAXw4C1T12bUhsUHW23AmoLNT1PEqVb38D6F",
  "key14": "cSjAXDAVoEJN7NggcRsYHhhx27Dx6oqPpnuj1WDfYncrpeDGXYRJGKD6eQFZtx5tCaP15LWceG2M3RvtpNezPcm",
  "key15": "2fJbiiPudPwZTkDu11bDuvhfyuJBM6UiQRj7WHZYsa4EiKZSXUGrUeCat6QasyR3GHyB35d4WbG8yNV5BuZKLTcP",
  "key16": "2vAY9KnBBJjnpup2vAYenk2kG4sziYjQqso8T1Yz8YdfNCmsaAi4CJ2oLmbCyvugRrpR9oJZdTJ45Gu2CHgpLkvz",
  "key17": "42uK44P1RYTPxkLSRf2CAnE35miccTMXfKGXjiFJhBz4n6ktdqs2jjXRNv14UW5hs8Cs9pziJyjCLacusK9o36no",
  "key18": "4Zh1p91ra95NzvpZfQVt7WzfpUzjmams47cSH5PrTU72JCBRx18krHW6KDr26NxrLCpRxhKzsFEcwcDweTqMFGHR",
  "key19": "66DrRc987Ezizxqr4LK3VRfdWuRcNrdrMcZebhZBwqjvpvMkM7CzrVZBtKGCf3sCqxJTRMbjdk3JE3CZqMNpFb8M",
  "key20": "4wZbUpJ3SxZW4pFgFn1oWK8fA48NSDUT57fCX3Lpfn4zsk8FJ3JBqDBY9d5xzNMisUJB5Cho4GfE1whRMwJvpdWq",
  "key21": "5woR2N6hz5Wacj7epWrufS1uxk3ZAFu1UnX9MKyUmZCqpFeZCeZt94ZJeazrM6RXEx4NbaTBhertBB26PqqTpKPM",
  "key22": "4uyyQTvHzPJ1wJQMBWGVRP65xFVFrk1iyzyzXVCvVk3GMHESHp8ogMBvf1BEyGuLm29fNJ2fqEnYeE3656VaM8DF",
  "key23": "Ypbth5s8wEbwuAB8t8cfcZTouVDEQomGhqAC8e6CmLXHB98uPf89dhH8nipAU79Jy6XW5suRqsuP57DEZx6Be1X",
  "key24": "28aGNVhT3pA3GsND3atzVCLdrJwEpo2ioSaRjpC28sUBuFCmeS6uXdjzDeLQpjnZEWTZCxQYvjHnryzLqZv6shNE",
  "key25": "5mKpd5hkMKP8jbMyNoBp7LM2TDoi7seWVtbUmxrMq8ctjc871Nap22iAscU9myhgiwQqVHVojenaF96L4Pj2v2uv",
  "key26": "4vNDhUHaRy5R22u1E5oAx6LTChWGGjY31wipMTxrM2H7txkAX6ZYr3GJAoZqAXmc77ox72YE8vvp4ykK7Crverrc",
  "key27": "4WVXbYsXyk2q727uJQjEFdWY8FKyiBU1KENWsCuQPivZxCLwFaMijMDHByZqy3Jax1y2HRUZ1BRbjfck9hzP9ZY5",
  "key28": "425Yn1632xNKiDu8y1ASopMqWPjBxFfMD1cUA36x23spYPU1zTuNr4cJGmPu8hhesytK4dKNALNhZ1ngSkG1TGka",
  "key29": "3hPrQ7uFWshioyXwwM1TUF4rrPVuzD8HccWhTrAX6sjRMatFY2TjVGhwSiCAeFmwAgLAzznWCQSHq9mVdX7Ecf2S",
  "key30": "3P7qCizgT8J1cfS6r3AP26Wk7ogouixAfLfEJyN3kkFRk14oACZXHBKNmp7BmsnMAnR9dv1ypk9PiHau8bwWk4CT",
  "key31": "D7zjGkYWinqDReHhVxdXaVFTSryJMPopSPoNTP2Qa9DU4NzYD7CMWvDs61jFQPvKoRabS2PF9bGWUTixco7Ffx5",
  "key32": "3fRqAi83y9RrBXuFagzE9Wr9cJnQWGX2d7r4pKmGvBYymd3teCzhUkz2yVFzMH3eCXJTCAyaT8WVk7jr8hnHSveA",
  "key33": "5PCykScQS5TBFE1Qrr94db74H887qs39d8cMohzpB4peHyZfRekxkPQ6GpMY1427vdGvKEJBsz33q9UQXeQ1gbC2",
  "key34": "48qNEKYvsD8tKtzTTdokvpwK7st65mJLLsmCLCb2nRUQHGNfFTZhyEYGrJ9B3Hsdxa71mipc8UbysCjHo8M9CNDK",
  "key35": "5XSB2QWFGZoYBELqFd7M3QGTSzQzP1LYQxqDnYRA5evPAf9wVrScexqShzS5dxFZ88FqjfPiMufYd1HpgaZCk25R",
  "key36": "2pkJ8dnB3xHGcowa1yHctwBa9rXL9FjdivTFWQCbxskGS2zq8pa16DuJT1MjDzYoqyghqrX5UHNjd6LshteULCuV",
  "key37": "53iciDCFUV9EucJyLFxt5TH5XW6h7SgaK7nxkwUUHTzAfcFriyi8dBfwjePfC5vnKGBUCbX43eomFDQHfrua2DSU",
  "key38": "3W8toxkjFtoWbM1GzenDYVraGZX7aBSeETLukagdvtGqYaVSdQxaqnajGsqrwNYZS4ELDeBoEuMkZiyQshERAwwg",
  "key39": "48EQzpZv7j8jhyQdQvUpKwx4T3CUtS2hNmavtYXyjHDxZyZJYTxD5taviuXtBJ6tNM8xsaGYCgfipreCZpgSzLnA",
  "key40": "2uZ3xaKB6ejSdZ6C5T1PzRiMipnCAScZdNvpZyZGQopdEzCtv1yWJe6GEgGUPimNss66tPagMkZ23sSkP1FVGQkh",
  "key41": "3fb9wKKZ2kX2Vg42JoVxJHU5LfHzKmd8fnKhdrAYYfTqXnVaRx98xrXE34Up5BRQcSyg6VaSBdqVYrBiXiWc1YX7"
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
