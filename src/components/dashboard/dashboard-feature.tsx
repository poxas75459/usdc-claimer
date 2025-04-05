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
    "39dqRc5CGKeCYcPFFq3mZCMkp5gLhpRVuDHXHZwKB8Twe1F5vs4RdypekwBMkcqPraxFrXKGRH14yCpAPbcTE4QH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26uYnXFTsE9Ux1vAoYWTnEgCK9ozcToJvhgu5DJvXKzA7BPhp8N5LevkEiP8jsxeXRvK4QmY7oyrsfZqYsdSGmfF",
  "key1": "AvJ6dmMrvZdbDeVLD4uASH8apuhon6TDwSNw5GM71ZmozBy3eRGbe2G2roasvnykQNUtWGrvnULZpFRb5ufeUxo",
  "key2": "2mkiA5bkSbwaXHm2VuTi69yEdfgdbBQnHBdiBJEQ7LHnxZk8DTrQ6Qkr2eVQFU9UEyQPX2te5hmLEKGeJiBtkWG2",
  "key3": "4V7pqCo4HvGB91U14Tzt1u3FKPGFwMpw3XUQaA4APCxCRDw8UNE2D3gkdBV73GZCgeq2wHrkRQWxYSF32dthEx59",
  "key4": "2gmeqXdQZoxM829JoXsK8tqnstnp9VnmjGRzM9TaZ58YU8ggcBDwB3JTeB6cySQnoAgryA8VCFzUZmtZV1MS5y9G",
  "key5": "5iNKA25FkC6zg7FMSXrfd8NR5c11qywFgZqR3BghV9xM5KDytB2PPPgfqss2eMtQWE6BCYAU3ZUm2y39NUAWYXDu",
  "key6": "55LhopCPPc9oBDkm3A2d3HSaT777BErqzwYYFQF3aSxVGQNfZecJPDfg1wHtYfaeSLWCe4ewa279rnwAmAo5JcSH",
  "key7": "2s8h9NjcwvYmJV1PF5GLeDmWZpoS7e9mtK6Lz8vAqJdUe92x4Lhq74BVkTdHkxAi75mhkvKcqdiJyhjBWTdFuX6V",
  "key8": "24LWPLfvY39QBzTY42Q1AYo65W994G7kcxXgt7W9BZVqWii1gKbZCPatB2fz1MMFyDiD3uunVnbsoSoVaifz64et",
  "key9": "2uw1z7UWHTKngYdNj4yozjSeTfHy5WWVxcRZBNZbruLZo3Bpx5DD6i3pB6Xt5psa3eokoLiFVLgXtmLpteFmrDuf",
  "key10": "3Z7VCzc5BNJvkbYA4L9yxAgcj45azDAGFXS885jYmSbcY7oK5UiAosR4Es2MwRooXoHVLMJK3J22qvujHumtpvyK",
  "key11": "5ZDVanb4SLRxfLaXTpq1417hw7NuMBhSCCCzNoUkjJyA9ruhNeAnHZ8ZVhQiSa71RTaEvT4gGro8wo72N1YYA6Lt",
  "key12": "4pUgh3GTHJ1vajSj6aNXZPBcygGQFmhewzkW4pzsJPzC3dyuiVPAQTwZcwhBkM5iXHWZ41ZEPQv65WgtQXYUoV2c",
  "key13": "65drANEFf1vUjWbbSNU8z9kCz1PSS4H8NuGXPQmefsGhWkuJkvAN66dWG32i4h7AJDXHRk7Q71uwuFH6WsVVnadY",
  "key14": "4hJpz8LjJWjD2zKStLewSgBrYTaKPitMWBX6v3SNcewvN43RA9meZo19cJpaJAoqyp2E3P7fcdAEcReVTrYrwRy2",
  "key15": "3fQ7Z9iahnaBPkK6NSzuEQtEQaA6Yu9JjKizyAsbYJR9rQcu2fXmaa7mKdGL547X9WBgZ8Wvt873eUkBmd9g3K1P",
  "key16": "UuLzybuD8e2WiVoQ6mjwYtLNxQZP4pSv8WF3QhiDr5NNn5pxfjSJP6i5tHGeoUkEbqbvSXA9Ga1aLAz9Fead9bi",
  "key17": "5Qa4McBEqi9bZ8cCU89uhzJAvKaU9rF6zfauyfaghSxv4YwN2gZb6BP37mkThethdB5Y4SmHvs6h4eRJoyRg4nUa",
  "key18": "hdhJxig7AFdYUXBGi3vYi1T3f4g1eDhrMsrpatzUGNdrjAjYegqP8h77ws3mxMvAYa5cUyPmNgQhFuUxQ54ZVUF",
  "key19": "3DWR4qx6bLQZUAhChqieJchg7auA6nQBHXVcxkGpLD4qQEr9DbkmkELfXS6fiXG9XqZnY2ihyz5ApVtereYiwh3W",
  "key20": "2kWA9vdcQqunCqBGC3MUVUFr43tWiAer2qVugZ7xkRfnsM2PMUKBniw9pZoJJQEYRdVrEEBt7iU6PN6iBNfaaN9H",
  "key21": "253AvWTLcFjz5PisJdRc4ii4k284Tx2TWgLzmsonHt7tT5sJxa6ZPdM1VtypVKWh6x6ZJ2fHbuKsGz4zozXY4FeW",
  "key22": "vJ81VuKyLSVXe4SQKNmaRm2gDcn2qKQ1SJNT5p6W2Ca7jZPz3tbC6j4hSoT1Tzn2CtfHqWwzrvDxT5sDsdrgEVr",
  "key23": "4nLQCUw6RW3xTuwLLbGYVVojv9AVbQKgELN1HuHfs8tFRPK4jjC7o9vxf51vSSUBHURctFC4FHsMQfrEqwh4W1sZ",
  "key24": "3XrW36SGgQw1X9cwFJu5LpfWKhM135FLxdzTe1KkaCd2xQdFsUsdudrYNS5vSV2DzKtqNjQcHN3TH4R15dpaug94",
  "key25": "2YpknzxEZGEhHNTuYiQagkt28bUXnKsGgqtVU5zVRNmgXFfX6N5USDbkm39LmEt1HY2xdXaHfUynpsZkBxAvfyrG",
  "key26": "3zPZfm4Rg7wmMxgBfryLT7okxDqvCxPrZoSqGTeNBRGCsZZE37SCHj9CnAW84mgDpMsKwsc8EM1hMBD2tJPU17jQ",
  "key27": "5v7DhWRCFxzdYkZWNFBnvhcLa43GHSG6Cch1A5qzZYYmfKxQbqUiezSXjo2sfGbhpuZ1xGuHXeJd2NCjkSK3WsBK",
  "key28": "SDi2aV64CnF44ABL9XwVXjTeYKJBPrGL5dVKsDqFjyWckdqmXTMCaom7J8T7zzYdD9tGQ9A5G97oCuZYMAN92og",
  "key29": "2mBtBxJ4tqBXJxPoLYm5ivHBDWYam1XRsVd8CBLxfnss9RXER15buhR2aYttHHjnawpgu6WPDc4Pf3jA8UyuuPXE",
  "key30": "2xv7sohahq7KBkxyn9RvFhaoMY2EZbxMyxerw6QnHZNa6oyeuwG3GRdey7LksptjAY2WZpwwnFbAux5e6ZkE5vT",
  "key31": "5QKh7KqacH74dJSuwNZzuo6FNrUAKJBPFpUcCL6jqyZHnUtzC9ojp2TvXkUwbztuEs9azozYK3or5F5r15abmZy1",
  "key32": "5vygLHDaVtw6zecbEtfa2VoEMZxLu9cQUxFXpS7fEQTnUjpncpQBd9JEySw8dmdjSRMW6iu6fjiJQnpsasJRHyou",
  "key33": "fk4xoohvGGJhDNNrJzNPoyb8YtyuMDFkEFP5XH3XXUtBatXmVeKY8oBUuFE9Pkauwc1A6T82dwiBxzJWU34NLiC",
  "key34": "SFdbh8kAsKGDQkCvQ4KvEDKTTjE5gNns8HxvassaiATDy1zVhec1hZstM7XRcXadiJieeFMgWQV3W4tWEzPQxg9",
  "key35": "3CJ8NisT14fVUnLhq2GHL6A9vVed2cffwJVKAj39EQ1jHg6GgS8h5C19J2wnq2J6pVwKuVg3d6m26U3o9HWTAWx4",
  "key36": "4cqBKKG5j1kqb2njj4N9tyZSht4BsTrGcbeSbpf4MXVDEhbjvpEkRXBs1AL3zhDAPAbWpzcPUFTWzmgkGidog8ry",
  "key37": "599aK5UcVimJMfJN7Tkf182niJk2e6wdwacTsqz9h1H3st1wHB7sBrStZsqeaQAaFoYfJpuX8RWfzWfyZQ8aTtF3",
  "key38": "uYdjYAkmtfaSJWLLAWX14MNjzHhQhAG3CuHdTPPX3s1PfqaxYwToo9R4mgzWwomecZe9kcqFX8bvJWQmQ49WAKz",
  "key39": "4K5jZHQ76EJHTYeEUcDTBUaze3aqSGXmMuFAtv6nUbyi8tBFFFGnufSbZ9XZhLhsvZeWQ1FGwbkUVRWQ59sk43RW",
  "key40": "3sEjwirFW6rVuhgiTRzF8gAeQfovTiK3oWZYmSfjtHehcDR286bifnJgFrQHH2QnXzununLEAZP4SJknSfvdwnFo",
  "key41": "gsHc9LNQX6brs3HwHaZR3ZPjQsBGbDexgdT8FxyB47kUxefKqurBJRF88isUMQNY9WrUDGBV2QpPZx43x2XW3zT",
  "key42": "5GWcEWaSv7ZhuCc6pA17BvET7zBCGFH9TvqTz7yhuBvBdpRMjEJ14yrsgru8P9c5Qfo3cAUDst8MPqjMgpZmghhY",
  "key43": "3yvN4Ja2JQZavubvZ7f8SVnwsp6hKYVxxo1ecT8jPsgSqAQCwuVWGyRmukBvNW8mKdJ2NdxfMQfKb62qXcw5RtX8",
  "key44": "4qZrVV23q8suAtcGGdGVXQhfoLC71PdtYEWzBP85WWuUYXw2GpfsA5r69Uf1AdjHChx91hp44Go4ke8iu5qqtb2v",
  "key45": "5qMZMxvpMtvrZYmxmQFRhUPJ74YetiC63QSpSDYTtsq87HrDx4bXwXoJToNsfDdT2yX2XrLkzbfhGrF1uNiQC4Lq",
  "key46": "4hxxefL52YK9Cwpr6rs3Ysno3yrqPotm96pZHE26DNRht2rDpYc3V5E7Veo3miQMwtWADQSr98God71rfwGxJ1dB",
  "key47": "2Shr9ewpjEFKCKKyFxtNa2eN2qrM7eiucpD2s9Y26gX5ChyFmQefG93112P8JtrywLgjggajvhYQzSJiwMa29QpS",
  "key48": "65UDMijRVmvKgHsFC2hhNRDqdqupGdr8ak4WbTekatA5cTF7NdgggMeDt72nUdaDyKjtXts2wmomFes6Apz8zvkM",
  "key49": "5uZ6JQGojrrnkspggSExZdgrar62vjf4BXmfFHYpKDVxV4bjsoJDf52pEt9dmbCbZQsHea8UojnXokVdZ5JKVeHk"
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
