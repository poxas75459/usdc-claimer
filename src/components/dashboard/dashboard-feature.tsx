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
    "2UCHCtBvKyn7AUkiL8cS6upy5D1ZcFgp2pgy16U22FiBz4QKFmbGtRsCUtqQSNbTjPWogdS8ZnhY8W2HQ6Sp44zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHUytKftCMGjJbeQYQV1hU8jsKyNtJrdFdHtGQxMr1xaWsC3qsPFR7EfNLrqtsNCvdPQ57K8En7mNQzk4Leu51y",
  "key1": "5JJ8rkBxCZ62iWJ3gLXn1LwQmWpMh1hBMvSz6AyJdyP9xMyezgPXB4cyWAWfPkgPxZHU1rQZho2DuKXNHM6Z1y6M",
  "key2": "2z13aHWDGuEcrPsDPcipnwVg8ttqgfLRCY7SJBxXsAQ8tALyVvdpqWUdSfNQKBiVRsZdrPWzMNH7Jp5KS3UZZaHY",
  "key3": "5JwLu1m2hiXuuHXVkpCJ9d6SeQJ2wpaXbZQBdGBZUekpPWUCFpsneaRyLL6MHrZjwsgRt2TK5ZDfS53EqSZcToHx",
  "key4": "uRbBq4sUgyhHUzaWYqeooDZ37hDon5phgadnV7kuuaB2LtF2kxwLw33Rk86U2foFhDm7Eo6JYqLFjeghPphSGF9",
  "key5": "iExiPhVuWfzAt3fHu9H1Spfs5wBNA1EAmheTEA6j3BovAHHvwXrL4K3Yk96qM5VDsz8TxDQfG21DiHhsgyyMe7u",
  "key6": "65CjmfXtWi5BbZ9qyf46zYpYqeaG9z9tW9Wzde8ob8AnfB5ZuN9hKDJ1EajgFEakiG3gAyzy7EiHzBC3vJU2G86y",
  "key7": "3uJNykZLcsmokv19HTfoWTrCwj7GCvgkDU2qpKXqAENvKHuj78i8JisWZjBRW3ia5BVWNTeucZKuCUdzx9XKxUB2",
  "key8": "3mRob9zk2dEavb2T2WzWHnunP2wDom4Ab26maE34Q517Ua3dH16j84vdGocVMsrmEPbTdrxN2rySc4NfAbGxJxb9",
  "key9": "5XLuBm6hGQnG8EFGHgmsQvj86q5rsrj8En3yzcEv568UoXNVn8Mc8PdNFaVLdi7DxWdUteVx49w1FJ3Wajo95q5E",
  "key10": "8fdmtYJY644Y2UU7AWq3JsKEbEgT4F5vft97mCmSLEdesdicZMoRb7yXsj39iRCbXTrsnUGZV1QdYAxfQZaNkzt",
  "key11": "3REddnQvZ1kR2xZqYyPe3u85AxtrsVbJj2YBrmC5Yay4WcjRyJffWkezbXx4SMacC4p6w2mHMGXhPDavefAk1MNt",
  "key12": "HN76LEvqD4Y4FSNnAQ1safsbwBEqZbTsanbmoLp6yHjD3Sqn3cnYzJuaY1cNJ1oXEpfr7voyvaetQzztHdcJJwg",
  "key13": "49A94iSesdjKE8E2ZGf7CE3JFcDduFLzACY5vDqUZU2ZtEJLimCAzX22PjwPkkgHxXr1BG1mXEG1MRDqMtKCAxN4",
  "key14": "38Mz8AaZVPGHryEEx64UeKgh3qUsDTx4kQpL8EwoecnhkdrNnS9XogsgYhS2hLFF4ND3SkzTft579QLZSUiNi3tJ",
  "key15": "QBPxpECDTS8o9NCLoVSLUCamgaVEnZ9davY7Hp4at2NQXD2STVwtiwKd8TmCH6D6NB3jP6nBNfZNbBiopggLaLv",
  "key16": "AiZ43v1Ni7mG96fuLoX1z6znQ4s5QGmq84QWdMvmcBfvuttZ73ER2HMUYA31TUhH9b46Nf46X3YrbUyaCNZemXg",
  "key17": "4CnVWmSDzgWnQrV1JsKStAFhVEUGpTKLqxv7pNQSiHNE6eAtitPoryTnAbBGb6TT4tVahq14DDovmTp78cdj5GV4",
  "key18": "UWB74YSikqiGRC1EeHdgYPN4b75PhsTKeCiHuYCk2PEDMZTp1ZKLftQnsEYLzxKTJ2WKK6fZukCfEg6HMedQPWd",
  "key19": "sbLNs4x3UWQ8RByCGf8g1mZ6dpkEcHAyTQyYFkDq3jQdgwusrs16j72HPPoDwuGUC9mrjPQYjutpcmtguXoyPSe",
  "key20": "4yYTtJCitKwauwoC44Pmgr65z4TZNXyUyNupdu9Nn613QStGU2ayD1J6sxmdzuCUgtqcxGuqjiCeytA6CxcjNxru",
  "key21": "2V2ZR1physP2Ta39Wb3eY34t7CsNwNSqe8qRPHLJ9Gg7e2MFaSdhVDwFWF9TY2vCaXwgqMFLK1Pp5RJVvwHAvgqf",
  "key22": "2X9JkjCEPWL6A3AjqQQiRwhptsULKBBS39rYnTBdzR9GQp9ASTRfZV8dSeV8bWy2cTdvSYHWw7cykFHo5f4fNfMd",
  "key23": "47a3qT6CwPNVq7viNUFDn58kv2V5Ec7C6M7ZiFgviQ3X3gkNonJepGNKARRbWe1mXWY7XjpviyP2V4LDnXYYTMhw",
  "key24": "oYYYUK7zW2D6Sfm257dKUdgJKSSauRcu8qQoSd7Pv1bHXAEWKYz183BGtvYc5ddAVL8B1prvps12Nk4qNt7nqGY",
  "key25": "3k3PfkNnCB5WUsfAfe7KEpXQgBoHhExRQmHj6ctEkrhzhNXU7MkKCGaTmBCqizEYixJsEnPvz9nh2BJNJAaax9qY",
  "key26": "2Cw6qg8jBno4qXkcDYrJTgdPhVLUKbQiVWtJi7x2NnLkAipjhDrwaU6JMo1fhjbfR1t7LZGG3SnLCrpe56AHKrDK",
  "key27": "2dnyz6sWniqZEz4975JWkXMZH6fji6K4MSWUEWDotcuToDyGYMXsjpC3YYkGLWSv98cNnoRvdi4qjCgtDsXhmvcH",
  "key28": "y8H6mXnLX9P9G9cjvL9gEFSetsFwJhH1WcvDWtbUWT9fKn1MjLuauxoafet67UsYJ6SnEZhzz3eQmkVa7v82v34",
  "key29": "5JfxjpBJ4a646GzDGGUfWVY519dNP4UuaqzWRJpbTt58g6bszVEKjV7kkszbzuT468MfyAZ1zwVp1gvJ2ukn3vHN",
  "key30": "4NVxXBn5yRRqhqAc31qEaCrSJnGRQpeV9P5GffJsVaMv19XhQEsSRPgwjHcnFfn8XxrEuGo1Ctq4H8RxLdxb4dgz",
  "key31": "3u9iUh3xXd6cLiypaB1eeuBhvxKJZUStNeqWEAANpJR6mnBQFeyc3b2g3F4dP85YxtUy9rHDCh9FG3qQa2wvFiyi",
  "key32": "PyyENp8dYuMikRZkTPK8EDtcmgcYbJuqM8gFeTAfyYLbWxGeudVaB8bHDRyXyrzZassM94wdtnLiScomqYEuH9z",
  "key33": "2nsPZ1a8LGcHvhnZR1bxa1VCjaAtFSosKQ8nnWmM4ronjmDYouAZDAgaHPUnuJ22bx6zJAC8yQFCmPcu2eNht1Tz",
  "key34": "5UksJiwYhGRQWFjmdJCqDd9GbEStXo2si4jeJnkyT4EAZbVgxuv1TjT7YFUVbwmnhLvYkYYi5d1zo9sbSXkwoFXv",
  "key35": "4euD3wvDs4t5KLGzEGhg8yqHR4yDMJXa9ai9r9uwoAzD9CMy3tWCyoxq3g5kfVGGPXERxzYonBTjKdC64MeXGTZw",
  "key36": "2JXQeB5ejstdtTFLNDuohGTLiumJ41UUW5ARGWeycwPsG3pk3uoMtsyFLv6TnsC3zTUzDDp5jbu6cwzFJtJbUXpS",
  "key37": "keBPvKt6NW1fqohuoV29y9QbuoDRAJPfEbrCoxZZRr3wfLSpc2yeetm6bbtjjNVYdfUdUXXnx6xkE1GeVueFumE",
  "key38": "26TKhHAXSeCSkvxvi4Z5yXt8wPdhdfwZCE3GspXxwj1Goxv17TFzzR6yygR7xMgJp3pvaqyenEh9DTjJYTriraZZ",
  "key39": "26qr2pPFQPxc1TwMAAZq89T88e8diqUfbS5K2tdK79MGWcUUd1s6QguZckHu8WKBfJZ1Z5TCCC26hmmG7bh3f7cj",
  "key40": "h91kE4j9m2Ywd7Laae1Y9UGfZjSG7iPvx34vnu5DGJ6HD2Ni4AQowcAQUToHPYZM6FmkyXfGz1uWK8TSunXEyjX",
  "key41": "4yrjyCrhbXVTg9GDaPcN9ZkXt7y1bXacHXsu2n9tyjTouTe6QquMhfDrZVMjJ4n41ZhZk2Dw5cKvps6C2j24sin7",
  "key42": "24e5UKiDrqB9e2QV5gyYspceCDfRmk8KUrKzXcDeV6Wo9ZKSCjGZz8V1BDBy8Hn1ir68cGvwfpFYJkcgPPZvbigQ",
  "key43": "2KpEJUovPWUguZtX9EEKj1xKhUzRRcZxUVftTRxhtBxBSpBxtsZKwxjdGn4enF4nDEzce58v3vfTxuA1p9nSdBRX"
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
