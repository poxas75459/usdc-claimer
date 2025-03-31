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
    "43v7VNC5twmY6qakppzXiGFyGrpY6fheDvEoh3ZYbBDZJcjqvJGvSD4C6mE5uRvx4RWyT56z7oiQqPYMLzHD5LNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXRaD6ZQLdqMP9vhm9xnLcmZ6LWY7xBGZ8Dzv6oViLNDMRVmVfZ9acKhA6v7xePeXXCPbWgYsA5PZwvdsWwm5Mp",
  "key1": "2JFfGp96XqmPXfhStjs9rQVS5kHkumCNW4LFVNea12DApqJNodxJYqvGCPUq5asiWhgseNbqcomRJxGjbPXxd4Yd",
  "key2": "2zUv1L4mgiaGCFLMdHpXiR7gPFcykgtidrykLKfJZYHRCji2FTFfwxqWjESzMJdsEhT2xhmhcj2Uf7JLMoYwFD53",
  "key3": "3sxG6oQWkx1fGRdzjeAujchqg8ZyHSBZmcr2EndbHYEQ4ov3rkNigo9pbPtrrbesQGvhvdtaFUp3WA7FB6uGeioX",
  "key4": "KkLtPB5zeN58KfUEYhHp3HqAh9FPC3NmbaeWr1EUUhNHTRTpNYo9tpHTKfwivsCRats53ZkH4pb2L3Qq5y3RVQX",
  "key5": "28Wcmoa48aht5LT9mSPsNm9rGW8gZwu1ZZWpySbYwcp2YmB1FhbybhGJziaSfWECMSgdn7z1CVvAVDmMQSm9erxW",
  "key6": "4Uy1W3vWsfkauFg3UV81fD4FD7LPidtzKDxG7FCzhbfFXNTTSQ99hTHfySNYcNYwgnzKwbpLKMZC7Ygg7J81vqXd",
  "key7": "618phnrCX9kcu7HeQN6RxnKhTKpsCM4zpeWWEDih5r6KT8pzJhFnEz6j5aj5zQ6NiC2HdUAPGxFvrRWsRsC4a9sn",
  "key8": "5qFJLbEeyMPJYv2UJ41PXcnMV73iyVipkHpvHiUTbwrTgSpxhxQ1cPjpUD6S7SmqULiTCApe2PyRanxk4ZaCLsQy",
  "key9": "7ncnPgkth9wN3cVzGcT3i5ycWicE1eR6PjvyLPakzmAQwd8crxJXwVmjEpARt5bGLdHck6ECy9jmPvnSvevYRsr",
  "key10": "4X8BhH6FgurdUVw5YRzPJNk8gsUVEiSuZXkSbKV9M6MiVeS4FGBUwVbkqM1kbC4snYXSjh3yd1FbuQ6x74gRubNw",
  "key11": "55VHwmkgdSF8s8U244bS8Rc5zhrvLuzJgmTm1DkJhirsFoqp8kiDg5v8efiv52ofeRf39wimP9FjLCNH9yMVkdux",
  "key12": "3kiJttN5seLiNL9ARKQZN6Uk43fEYMV8biLYr2KMpVuRGDD9mQ4GBD8Rt5dmfNwerWoii6nc92QCDqhLc9fJqA1R",
  "key13": "2dLCok9goz19MPxWeKVgKRaVvjBgWz3fZixXJvWxT4yVvGzQtYtjiGC9nRaEcbtB5nE7HvnCPiwGW878KjGWTpuR",
  "key14": "2V5RYt8yDXGwG7quhiZrhkvx63eBumZTL9zXx1KyX4gJtjkRJhbE6Qm1uNsDQkKp2v6FRPaYUX8LAzWsAgdVSiRF",
  "key15": "4CojdKSkHVf9oWy6EJ7Ata4mScLFys71Qz3QADFE6F9heMvs22rks3rHYzJ3fvNTnViZtvQJ1VNccp8CH3ouW7Wy",
  "key16": "5B5MFXcgSJiAAVMJWSduhZ5mB4B6Zg9qajkjPv1M13famsUG8dFQ2p392nUo6jZBdSxM9CzZVLQSX2FJid4EcmD",
  "key17": "59n1QaRT6xNXrSDbXtaW2wMS2KGPht1uEqAPcjXLx8z1mipRtnyS3Ur9Bw9z1nVmDfWDh5ZjPxdsguHJf9vWxckL",
  "key18": "4jE62xe419qbfCaC2cduKjc8ua6Y8ztHBn7BWoo3kNo14ncSnJqb3PJwDT3G1gMHeZphb5QQH7AVVEbkT5tmSB5H",
  "key19": "5sXkySREjFxuNa64VrqnNqERcy1y8x1xvLXUcGR5tBJhZjy943JvAK3aXyZLmv9mK2obwL7Y17nWdirf3TNLGCJ6",
  "key20": "3dN9usRuqz7X3wCwKzkGSp3U8azY4LKTrH7CAnVwByXoRQcJjY3FofWYvY3bCXXK8Ab62JLa6VjR19cURbrzUQnb",
  "key21": "5c8QSiLM7KMjKuRj2JBrvLHyqHfnBG3Mz9FELHjyVXc2Y1zPrp1PVQZCE1ihQ6G95BK966LXvMRtAjkYfaFctWeb",
  "key22": "5VCSzKf1ZcuiU6R23zEUV7jjb4KSoDTbYNGkgYpNwbTk4MRExnyNHRAG4aLDYjbZySMbMGh4Fb7rP9QuVSrnxDdx",
  "key23": "5DYzoAymcft2Xxofd6eCX1soygte9VEvzwVgt6LMVd6hLCH2PAZYSqLEbUGKsLFFvGhBdDcspdcKNAHZX5LeHTnY",
  "key24": "61CK3L2gxFdfsywFL6XJDSGuNJpdf3woEdNpE8cymsqay7nANzuHuopJPfxMvRDdvkgSuf2f277HoEr36kFbQ65Z",
  "key25": "5xxP1aT1qsTGt39WRsvqjqwibaktLoodWnyGAHvHYfRP9bAHv1wR8xEwCsVYGAVEBUKALsTjptsBhEa9SmygBogV",
  "key26": "BxKAtvsx6zTmXECNaTMoNZWSPcLHQ3xN9b9NwewA74uq3mybBnap8x26si5vT88mCHTPMXHiHDGe7JN4WsF2Ctr",
  "key27": "5ThphBTP3bLEkRHtchCXBDxqFaKSG46U7GMqSZDyBRjWQAMPzLfnMrJmsNDGhN4m3KTKfK3jQW8RDpBp7rs6dAsu",
  "key28": "3eTun9rnobrQei5odF43HbL5KCv51QAH1MKqMHHoWorWsmRtEBgpUnCrgxXQgBi5tr7okoBZ49t6WfvauRx7ydCz",
  "key29": "2WZwWoamjAujP6vhdzisGL2y7qyvrvpww1msGXg8xoEYRj4jKwPdP3XkZttAtHrc15365ykDxedbcoWmLXyrcght",
  "key30": "5zWjoFydFD3R4djzHnJ1Fv8uJHL73bwWy5hKekGY6k7WNS6dhfJY7zCCMb6Ce2xQyM7Xma1H9gTuXgoA3tkpBvui",
  "key31": "28cLMrs1RWT3XFXG1J3ZisPkAFZ6aTo9MBAsmj5QgRH4EPjP9ftJXKupaRv5S3QHZqcgyQHs2LmanqqWGCGEp7X8",
  "key32": "2KLHopDc2Pa1MSzGcUZxAUviwJscU5FsFxrWNxhw6YD19hi4nUNCCpkeCbYMp7m3DLgd8ZB75QHEfPhbWvQ14Pwv",
  "key33": "2bKhB91FVskshgJJpHiG7WhL1bWpWMwgd2nUYY5eKB9i1RLMJkzmKqBEweTGcnzGKXdDmoWoVgoFSNZoQ7myscKB",
  "key34": "44tugQgKADtn6ogFDPDXEH4jjEpYDXdMgfsLaqggfPmvPbs934oDmBQnkmkmf56gaL36DjuCBG4uC92bCbQ9eee3",
  "key35": "4mqbwcma4dXDNXzVSBnahHi72MAdVyjWRkKbQ1bry6hrgPYm1Tq2wWRufVHXGZmvxpFzp3dXXzmxDMfhJNhZhgwL",
  "key36": "2zS2pWz9VvT1pV1vbRx6fdn3GHdEGtiEB1R4ktJu2AqjUsV3AW76Nmc2UwY7YhqNJyNsK6AeutVU2SELDeHBHp3W",
  "key37": "egsWzFAknGCEt2461qcZF5zszkBsyn3cJTXyHosCWfy6ak7a5yRGph21P9k7CxhmH8b2krzGPcSEPggb5z5nTJY",
  "key38": "p3u417bgJWkb3wRNpdpZtB8FhPUiiYp8HgiNc9yzZq1F7LfNXExGc2wptB34nk1kuF84fN4zXitHs4QavZacYBU",
  "key39": "3NnPGGwakLbhZUqAcnM8MTamsCQTHc5scZ39ZyPZtKGNcuJvBW6V7QJEuhARjgTtAEpYdT8fqdFEGupcKUMwMq2v",
  "key40": "59ogmu7a7uD6DsD8pjrmHg3TXbBCbfRPx6txwoMPMLuw9G1gA2igCn1n44HFcS5MZVNwuQv7sFvtckxHWvG6ptpK",
  "key41": "okPScKANd8sRHUWQ69W8o9fSeg1219hXhSKhhjs96LLkETRZYdTH2GtysjEvVBMLt2GMdY5X7ApLMxBcm7xqhUR",
  "key42": "4eAUHQgm7M1sG4e2NCuvhViDjahzWdeEMuaxvANwY5BWEL3htP4p69ZBBcE4J7ycRr89wfx99VzkAZCB7j6v5UxW",
  "key43": "4BvLZ9es64uyBzfpxsHdUJnk5RYcBpZUoSGjHU7qQadLPkVRuLG31QoA9cNJB2cmVZ3jNoCzLvzkv3e4kEP9nhxR",
  "key44": "3fsEruAxPE58cytVLk4A8fx8tgvmdiYgJwgt9T2HcRNafcqr57Bmx7iCLkh8FXKXSuPuwC3WFPfg3Y6gsstYDKKP"
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
