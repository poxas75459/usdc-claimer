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
    "4Dp2MfZRWv4tTKJAd3sygonMrthctPvPHKxw74ypsin9H4voACxSSuZGc5SH7tGBPo7sX14C6vkeAhsNauX4zSEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i58FNznNYCxRn9gdYpWPGjPuG8xdhdrc1jRiVdc6VS4LZK376AmFL9iXAXkAeAoaXpBJ7rfsr2zTMYYTwrMhYZj",
  "key1": "E4t1m3QeHCarjhZe6YuAXj23r5zHokLbdZhMeuRdV8GJnTsTAgwRHVjmbsYFYkxK4WUXLzKk76JsoMBiXX92cno",
  "key2": "4t81iHRYm3kXV8Wyr92hcpa1oV1eFdmy527gdpmoBEbepS2d4NYEUfCkH25Pfhi26gq6M4qwG9dW6zQAqaNpLFMd",
  "key3": "5u1uKDG135wD9vh8KN9PfZ7khAxAHypX3L2CDihFRQDbX2kVtXhP2o5Vcjx5RgUKyZVMpwDEQau96jXayndhbs46",
  "key4": "4fPsKbTgcPrCXXoU122AXgWnVd39rC3A9RdsMbuyVuM7BserMcL45vQ4U8EVodH5L5TSjUKwg7PFd7KWvnWBhevt",
  "key5": "5GaXeb85E1mqA2C9HDJ74VzDQqPs6N7bGPvxwWnMD7Rjbmta6wvUTjczPucCrDGo8wGfNcoL1N4Za7MMeUmWEgXT",
  "key6": "3ycsoRg5eAHFq6npYgeiZypbUmbQrsrhMrceYSeAHVNEHqh17Wypw1xc9i8aJemCvnhF7KpeQrhJpuaiVHL9MGu1",
  "key7": "itTf3uhZy2zXZmqwdNNKeWX2etX9NAj759AuJRAsymZnEo8iL8BtL1hFsLo5xxt1yAVVVBuuGEhFJqDui24ok5h",
  "key8": "4PXf9YvVqZWsKq56to5jvsBgrVYnYpHfqqzwd3UFL7CjPvpARuR2wqYMCVyZdYSjU57pnQ2AwqT1uHtvDumi5Rug",
  "key9": "VZHk9jric53nkfvozVjDNS7YygkjHcr8xBMYjP9onHQ9yNYNAoBCgcVvssDTPodTjCRjrjKfUYaMqAcomEEPLBw",
  "key10": "62gVtGVsaxbceALpJ4tsFrWg5BDyP41x1W8rwJJcgVr6uySG2UxHzM1YcgYQHZm8Eawmzs95jxt4t6GrouetGo4r",
  "key11": "63H3zHw8RgwwaaStCXLXL6BFLDf4ekXc79Y3N9Btc5QQhiMvKbW2Ldm559VboGi7j8Se6TLwQ2L7XMUMgmdse9ae",
  "key12": "sBEFMeN1SKRPFsoA4u2xcqQit2xhrkgr972hMuAxiU2gW4rtWGGGL4poKYtoJo9DajdF7zniVL9cpYZRnMmz2uL",
  "key13": "5asGVi5EYWSwp4TMkEJ7xfVNde3e4nmgZKk1oaKTG9k5Ro8P46n3tXRDebEpWBdnJmQqXAiga8pNodp5gxvCutj6",
  "key14": "hPpUCWkMTbSePNM3KLTfkmX3SEthtAsPhMtpQcB8D8DZUFLz2M2FWEd65sQqf8gV1RfZttrd7uc1kj9wMuUWj7d",
  "key15": "4NMpCAvAJhFCTvJm9Rdbnof3RZoftCQc4YKA5rgWMciz3t5wHjYrmcv613XKCGxZx7NwjPXc2ANieF5jx25xQkzS",
  "key16": "6Wj36hPUeUHgqZsW9A6zv95fdpXK3WUZknknVWqXrgTNbvSSJjRLfb24nYAUnHzDPQ9EoqNN2m89hUXCmBUNn4o",
  "key17": "5bTcuE3X1WsygXMnrdcxXxSpfT1LEVimAMVPNi85tcfMdPSpNHCpruGfffkn2R4jPwJ4HZT4TV1k8EoEbcJq1BTo",
  "key18": "L4KNuyGeWm36e5TmG5YZTxhyAwBaGGSJsu1viV2W2SeNUyW76WBYGTQ6k4zdZ3JMhABHu7VrpJ2YDUN9LJonjBb",
  "key19": "21q1cKPxySAEN3n2JGhDc3bAT9dpTATwgkfAdAceTCRhyR3PVCS9FzmdL7NZjaLRkPNC75nU2Ns4kjfn2N62d64t",
  "key20": "3J5LFuXedaWFHeJDHu3T51c9g2jV3voKoGYu6wpvcpPQHF15AZsSmbnKMGfHh11UcZEiUYBDv5Jiq9iZwz6HpxbC",
  "key21": "481bWziJAD1wMqXXPjwE4s2qxpvNznAhonFQ21ReuQsZcQeCmeYaZ7nJqAXWb8xK6PS3sF1ynGbZakQ9TvqJKkCC",
  "key22": "6VjzcbzabTdotqv5RZJxJh2yZnSyHHBmyxWSyr6yV38JsjjyfxSh49ut86Zx6gj8YgMcHzF6iaz5JYBVp1GSMZH",
  "key23": "2khF5FnmBbKipARVLjH3NHPMMh76xrbn1ieWEW5cPa2Z9ciar22NExQMHbTqaqghS1ajrK59nF19vvv4zP7hjNhR",
  "key24": "YeEbtjvZzPhLYc1V7sC92AP1qs7cXsLzWCLFwiSbGnscfftou7poZ2b3ofNDQWfHNJxCShuEVxrG5GCNitzhjdt",
  "key25": "5zo7rjP7ST5b9BeB62Ppx7iQGPRZqMMC5XdXj5XVu4BtP7taW91JCi82wPteHAhDkTT7L53LeMGuRdkiyjrWgkb5",
  "key26": "5dKr9mL5MXXtnh7HuzeisgiQ3mGbnsm9yZuenjG1XWS9gBz8KnLeD3gxEjrhvDN5EuYxfRYNh5ev54zYXjgc7e8N",
  "key27": "5KBxhr2ZDrm5LfsEC5v4Hi2kECTfTn3C2fkj3Vb5UKE5wfWwEnFFULshL8eKvB1aCP8Cn4JBS9mWicwb3au7Q3Bk",
  "key28": "3MsAHLxg4QmYUEQgwSMzYE6DFPCEewg7siktrgTHXeX3RniPJdo5Fk5qR1kH67Dd2VYHnbwRQ5NnpPp9oSXYgFZp",
  "key29": "4zmugJaBLLJ3GC4aEKYhM271Mpnp1b1ZZFQW47wAkNG27ZveADp8kuw43u4nUPCRLXpVmaXfFZus3GhJ5msk1HE8",
  "key30": "5GJGrJTtiZG7x1Fog2CwQ4KiLYgFwa19UAGAjW2RSV7GVbHnruNN9WhvWNb9JzWkrnpTmT8UkLAFusqrfu1zEtAE",
  "key31": "3k3nhec1unGn4HjR83cLyEpdDCG36VLxBfYa9fVhn8f7uEQLXXTPZG1iFMftu2AMkZz8hggvrsriXkFqhBjZRHyP",
  "key32": "4DgZnGfRN4ZNijRSArg98FimGfehTto7KLCHcALXGYGeyAvZ5x8gEAcqurZrSFDy7EWFjiQAWkh157fucq41GVSB",
  "key33": "3cv1XajdUTigpyCMFFY7nZXg9vdXTajpQHV4rYCE97bLyd23vTZujdDwnjpojsutwBfmHNz3VKigxvWDCVU6e9tx",
  "key34": "NBnwwwvgWhoTeDnG6PePVC643ddmFKURFeU7Ay3xDqCHy6N29tVNeis47qmzHDtKRwFhKuvhwUHxzqvPaBE462a",
  "key35": "5uvCCiarPQ1tWGtSs3miYWUX8CsyzC27nXuT4FgJHu2zBsxj5fa4uuHUeBac1XDstCHH8WWt4UP7SwVj4piLQnwu"
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
