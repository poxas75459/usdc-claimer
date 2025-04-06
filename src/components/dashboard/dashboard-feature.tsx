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
    "5piKvw4JCq2YXMzfuG9qVSRPpj7TNQMsKbVpcUC8G7Wm58FYieH5f1v6KYAz4Pp2vS22RjS3zH4ubJiNDNwiUEYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TqkkEpf47oyhYLJWrrS4Y49xamYPUwcsGna31RwAKQsqgroPYPzNXmuL1qmTTzbnxhEGi8scNGJM35GnZ8U2VSA",
  "key1": "dBhatsTpnFwjfeitKfkb83GD5Bt6YcLVAtj3QkFZQPtnJ29fwAM1ayLiEpRmwfeZNTGwN5qhzxRGVTZwhh4XJgf",
  "key2": "3gbnEY6A14n2TvzwvQJJfzLZfaQqYuoT4j1dvvEMSFVajkkeW9P7oRvDX33k6pPZPLD4HTUGUQV3vFQiQ4s7H4rm",
  "key3": "2BKyZmVzGmKqY5fs8gcAKPaotP52ET3cGiuRyvXb7XvKZU4ehDK7FKJvM73wR6wnUeJ47M9qY4AAR4xPAicRrc1f",
  "key4": "rbsyns6aBMQx7uez45jVyppMWoXWevJagNxokBFT3YUbPtoJ585Tcjb4EFFPndjCDw4RjLW1FJJV7h65BwrSbhE",
  "key5": "2EtTaqfMDYAoruFT6VUsHkQpvavchktxDr6aLW19PJQN9AsTgyEsjG8o57psBMA5an3tyg9rnXyFupN9qSGAz5B2",
  "key6": "2PMBPv6yWFWKZSwAXkHMLoEjvXKQy38ehQuYFFQRhEJuvnnKZfz7rDETMzVre8h21n1UrU75gXqCeymDU6qeiVjg",
  "key7": "3G7z5d8EK1G9X9FMJQysX4jdHfTEEV5b5GWBs5SmYVmpzaBLzT3pytUESPvAGCKDG3oZUzQeBBtWdQ2DcTXLM7nR",
  "key8": "3k2zTAhohBiuu89PvE9ufr8fEmkfwY5AokUxN7wXdG5aisoKMZma2i2WZBPbkYWs67fmb92q1tsTQg9DjHuWpeL8",
  "key9": "5NW44mhuXwtQqsVM5gu73RDHRhGrdfGUZSxH1WMf7LdBJDsEgisMje5t9Fd5thZ2HHoN2wakgv9YogX81Fb9q4bL",
  "key10": "5BsddC3NnSWXxKhGTfiDqGhSnM3s7ugXhyjXqeQVM7HwFny2zY2w5HWkRkZHVsNwmjVqqG3Vm2F4bqFzvhw84Svi",
  "key11": "2sS5MwpgJV9g3fo7ywKKag87Jd1FYtvL9kptBf6AfL9MXhMvhftjL1jiNJYecVpB9HYNMMURfcgGFVvERtjPatkf",
  "key12": "CDT5ZuSz5KLozY8HnLRZjFao2BRLFqti4Dfs1nx4vs1B4H57XDNB8tKAGLarKnKb4ANT5B3QZy7iXHHTFHx6uXr",
  "key13": "4fou8Hzmf4M7E2a45BHu75qdU19Pu4AnpFEUiq3Z1Uot3ATEpaMPE7o9SZz48iDhauJ4QB844duAPbRx5WqEBxj4",
  "key14": "2VFnYPKjYuxGYxKi7L4uuASkGyqx2XJRtUBdUsknaS5QvgL22LhbZ4Lcg1fu8bcNWHL8KJSRrXr3ZR651QiQJrWU",
  "key15": "4arsiBupwZCaR9sD67tcwRBewTmBu5PCiMLoZYRkGmdppfthRnNrGJuugrt84NaJv9fWsx5NeY85iB3HdrHDGM2S",
  "key16": "4deNT3WoBWhGW4ko7KujJCog5DVvqT543VJGVrY8L6bbFbRNkDk2vw2PQxr2VCK4h7KTs27zSAoUpJdRGertLq9u",
  "key17": "2ZZfCGaC87kJQvEuMKXmTu7ymjoDS8YTx2sHGD9sGsbA9vyCN9GmrYcp9VZMYNxNmtxY6XatX4QRdH8YcXyo5nmC",
  "key18": "2TSzYNyBjRcryfa4Qg3jduXPc4Na3obS3SosFJbEJvYWknxcdfBJtnFG251TF6GnEDhnZfBrBHHzUZcKhcHsyafw",
  "key19": "5y3FVWKnf7VyUkzisNfES287rjQwm7mXfpSpSCYCZwbJgCSX3vzkiqNCFiEXYHuM74ZB9GkCLSocnqNCtpSoCdqc",
  "key20": "5A1rxH7iWR2pNF8SpXqwr1y7g7sxxaXgYLMS2mdJPuZN7ciDxBJurrub1bigjD5Qt1ZTTzzm4arZo5pWnskw1hyW",
  "key21": "yZdbucUFMnchT529Qy1wucjdZ9WcbCePXYXG59vg2Q9EV4X1geRH9zS8NTttXN3LFvZU6fQVVKqL9U7hbGt9GoV",
  "key22": "5DqXVDu4cLuYZCaXU4X2XeortpEzGP8djS6PXUQdKrHdybxP7p1eeKqEwMBYEGehJftZ9ccTmVj3xpKq4H4aosH3",
  "key23": "3xP9Dgw74y5NWhb984ryREFwJhurGTwBqTmNbLH6RsYA3CMfis4J9N8z9tG69h3iysgdc3u3LRjdFpmLnERiHjzA",
  "key24": "5xwXGGtoiHwwxp7wFoeg5dd1DfSzFeZJbgKxnMWxipMex38pqviogDbQub3PZG287Yt67WcPzCrZ7yLb3B1a3rTN",
  "key25": "UTqCxNWb2zAC4NFgjccUhGsLaaaLMBUFBVU83CEJ8NzdFmsbuEWgNharQR41WNfj8dWyEAHcYymEqAR3YbTbykK",
  "key26": "FJZM84h9spddfyPEaUQ5Ln7E91JmX4sdrU45WqcnkgyMkRBwBD86QHBG5em1cxUbmowmRqUzPegRXpLwRpEaZfG",
  "key27": "26QscDN9DiGmaNH3mHyPjaQS9PxsJmXButxjAyfAt6FJpGUuXTQ13GEdVPvhpBntfXsvGUSNFnaWHtFysv5Y2Ycn",
  "key28": "r3Zw66fXHx7W3coGm8hiLTiTuxpDZR3HCTvxo2A66Q4Q879jdXkdiAWkYnVvN9Bc6TwjnwnSM9bTHhUmhVXnQBD",
  "key29": "38BCyBAjCkFwp7mD5GPurawSKagqWsu1uikDZfexDC8xN4AiVb4uskS4biW4EkFwko7MNjKDTH2okKBzAukzzTTy",
  "key30": "TF3LMRgwV5EtvFNzXn9TCKD8e5BPkK1dYx44SWMuWU5dVmf9RHX5ytd8UwyUCQd6ntPgq4zNHyaZ3X7hD2ygA8w",
  "key31": "4eMBKToxxg7RpdGWLn6wdzNug7e6g1GoWCQYo2RBpQK6Q7PrnNHjVjiXk45kkU3cY5153yJZpcd9A3tFPwAEMqg",
  "key32": "5PZwxyMxxNddsg7KPrE1pasfa4xzvYLu3bT5qLwyWNGuakv5VKXpszce68ZVGQ4WErvJHUb5BbgZzatABNyNMEMC",
  "key33": "65X392TVAPY1C3Evj3mN4QKXwtLzwieMWMstnJh7gXXGBs5yYcpfXvXFRhX6TFxCbdC3gFhA6Q3nABtHyc6Qe5qd",
  "key34": "2x9R2u3fmRFjT6XndFTamsgFeZno6nGaDB3C4q3iH3RFwfFa5cuFYuUXquun5FMuJ6rn5dCKeZEtX7nEYjzcCFub",
  "key35": "tydzBcdFyJMoWio2peERHPC4zbFNgv7Ru1ymgGy2Yb3hPtnTpxdPtpErWjJnxrFd4hrQcNGJ629M27ybaD3PuN7",
  "key36": "3tWX4euKiEKVM7Mcbtyt7be7SLDVWJwdhkpQpeRXpFQUwx5hRr3GvE353DkJrN3A2LBEi9YxwHuBBpXwpBMm1WYq",
  "key37": "4Jb5dDqHHWM79Jf5QPJA1XnfHR1idZVZPUzwVCKHbS9QskF3M2XnWa8XKQsbPrjEhqTm7CFpAUHef7hV65jcDocA",
  "key38": "4Ej4xLSgdTzbybmiyYTBjCdXsg2L7B6eA9J8BSqdaKrkNJbbJQJTofAHD7cX22vyg3z4KD4veoHv1WJAAkJyNpie",
  "key39": "5uLc4rW5aGPMipw7kRYSMpUtS23iuLc8QH8HHLX5BFqxvV1py9KFPWZJXEeBPNvZnAYesHTKvr6oXSYDjrC6oj9Y",
  "key40": "5oAFfbhxgR9WYD8iD7keyK72Md4pjgT6hxz76fVsEZDATr9sY9V9KCUchqTW45SMu1F8UYewboBpgxnrRV6sJ8jx",
  "key41": "5LqPjU3kSMbW9HXbf76gFGJ2BhtcFeHZrmBTuDGwx1CCkkm86qd1t2sbd1U7FqBg5hFspgLShYNognPG55prnwnC"
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
