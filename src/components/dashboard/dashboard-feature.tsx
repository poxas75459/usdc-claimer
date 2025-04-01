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
    "tGyxwRbM92DXcXq4rgPSUANtJBP9FMZrARn5T6wwGVMiqPora1Ew8TdozEJFCTcD6t74agFkQ5SJu1Ka4WAsAcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CrD6jsJYVaAKASp3w4SdEakAQLFb6pkQcF7WDSo51mpqEPfaquQSmwopWzusFfEgUy9eghSXW2UHkZS77MqFkN",
  "key1": "5vzXsHb1rStDjNq3SbHfEGsgvLNs3bKsQg14besvNTSQsVoi2r3YcRPEAYEXGA3KT6XtcoBbSFChkcnwhnnk2KAr",
  "key2": "gKpSgSkFp8zV6z6yGyiHzMmcFT7gsNxz27sXywa2H4ezNy1qJSP6vVUW5ahqC8LZ2Qf2V7e1Hys9kbTj8B2b57w",
  "key3": "6A7o429UQ5zST7scrBKz6yV3L9rtC3Mx1B9cF8apEmvNZrNNi2CAoGBBpV1oaPYK31Aama5nCZaBTKqP33d9hhx",
  "key4": "waSvL3N8FyMZKwKP9xmfjFHXAusySUPBCm2CvMqBaQVytS4eVCDiEnZa9wLcyztNkSUPvvFZh6y5fVtvPPKfvpt",
  "key5": "2ZYywtA4jpLqTPHW42DV9REPfVWCsazmue4JJvR1Z9SxcwF2UjmgYYLs2WVMgur7bsysiu1HTASmuqRWvEkz4XZD",
  "key6": "4kWg58HUE8gyhoMpVuNfAPTaWaT3BGDRpbYHcH6jWq5gaB4UdLBr1ce2gDjLf7Dh5RhqpMUfRY2tZKnddzL3V8k",
  "key7": "5eKwSTeXt7BsPwCVQt1TtVGBxEC9917eoGY7ber5GhRzgVqM3WLCQNMtk6hchP7E83e5UR36inAR8WFXXgJqHy1C",
  "key8": "3xtxbAU3N5yzGFyw7u1xty2VaBPFqCsMh9f23atrPf5ibVxZmA7fK5aBCMv83X8kmFDUjknGsHRwAkSoPqPKQqhL",
  "key9": "5rAuEKUCUDXSxpgwcKWAXZaL56hcUEbNov7s7uAFK4JA6tDEWW4JbAxhf68Qw3Ckzw6BoNbGqEb4MarHwozdeqHR",
  "key10": "CHMGSNoHJ1BDkXp5FPBk7Tqhh5hj8LqS8cQZ5fMMzRsT6fePi7zYzQcAk7BZtPGhBSgr9biDPg7KB4mhXFGatpy",
  "key11": "Z9DeLTBuEB22USTzqusoZmiaoX9RDExANcHcy8qwoa79gdHaocd2hftp9oynmnJPT6ThHQgNkiSVin38fd9mTvT",
  "key12": "4vVmm3cHttc69zAQFRdzUa1VXkZCLARi9EMQsPqKfFbMijUDeWAtsn5iYZA45SkjiLkFoEM9mN4cQw6KxmDe4FMa",
  "key13": "5x6MdV6768jWboZLVRwX9Jt4ntDgSXbLrFZnq8Z8NzEULjKLWwvfNZHzA2kc1JK9W6YCYQc5MCRgzJzy5Ccr1cV3",
  "key14": "2DSo4uPNKdjfFqX3KcnN6A3GxYXpHk2p9TqejYC83dqrCVtMd2reNKte8FZoQcsdz9XzUBC9r7ukDb62mK1ALDxd",
  "key15": "3AKTTpY8MYoak6KPxPavgijs8rGWSFxTb1gC8mBZp6jPLrxFqHf69pttJb5izf93WvJRorB2d5vL5CfVHraCoUdf",
  "key16": "4GfTozM2qHpwNafoaF8zDtqJJ4rSyiy2uvn5iGGbNUPDVmAKe78UiHy21i7teUX2FnSYs7LGkgMn1Yv6MF2xuWUZ",
  "key17": "3gT4MLah7fhANLUyQYi1NMiJoJScd3QhpjAZKSqCebTR7NgTqQqKPXGCPqo3UVqoRFTsWPULRND7RYzB64hRu4Bo",
  "key18": "J2FDigXnxwiS7uUSbU4TGWLAmmyLMk5ofSu5XU4guGYoVET83sd7zZSvagxj9QAfTXoPwLGHrvMbWAxer5BHPhQ",
  "key19": "wwwMnRAM3AdyitNqrfkACEpcusjVcTnLekDue8ojzA3CMYgf9irwB8ovn9K9TfHbGXkR27yYVRqscP9RiKKXiyx",
  "key20": "4qdGwD4UAjiSRUPFNHQAThf98DXrNWKg7dAftEzukDezJZvFBmuyytRMhrGYutk4ecnzRjnAkx9cEV5P7VhYZDo2",
  "key21": "Ww8VjkmNX6kwrhXXaWmrG42oBmHHTAAcANhmeZJVkUsK1BkPzpk5K8Fx8A4Yo2dDfjGV5gXpfxMWwsA9mSpLtFX",
  "key22": "5XpzqLet9zYjNfw7c6XCN2KSUW3ABBn3hYnunge9rkmPhCiQftSpAWCXPVZbgdfCsxmBvymWf7Kcr7pT6RUceBr9",
  "key23": "123SVc3N7Z4AexY8TeyBqGYJADyuKZBEVTRbxJ9wCxBXgd9v83GrvA2pppiGWcZzkhBGmD2Q54v6jPHBQ5L4Kkka",
  "key24": "64V4wsd3d6kgotatEJAddtNn4pT2mynFDcrdA5wziGfaGTqSzuTxmzS1UUhQ4HJPBAa5FFBRsVfDUtH3u1WgA97j",
  "key25": "4kp9wMLHRpb75asb9AJt9tHsaAvFTMgGHVUgTufhZGsKfbGTpr9Sau1WQwnxS1J3KB1AeUsX6JAgu4pWXbQMQFXx",
  "key26": "2tNdJeWjEffhLdAYf9eijd5tvTejZPjUnNbxN73tNW2yDiEWdPz13XBTeM9qmqHGrc65mYSazmXXyGGJeSnw7w1",
  "key27": "SuVpcr4iukCXfgYtcDh2m2gw4UgErgXMac6xsRXe4XAY2DcHBa7eBtX6YKurEspPpWj94gLUpJwCFq6yE4wdRZx",
  "key28": "4P7BqsqCnvEE5qf9uUFxpCufkxQ5N25ze2FqwCSq7mwrZPZFL5CuNnqAYAbmBvQHiBq5jSRZfpeRX1Gnxnvn4t8k",
  "key29": "2sTzeUfa32MpxdZRFfD3ePdnmDJNBTyeDCBbV8gKnHUpAgd7jaZKwLq7qBQr5Xtp15M1v3ALBn2hfD9nLaB6GT35",
  "key30": "5UaMpgdAWybmmvqj3pHHtzx3hh3spvT2YbfYpNBACGBvmYGjAiZXWyVSTosQYyNsvNwCDPf9BJMyqKLji1dTQRFs",
  "key31": "ie5EwjwnuGLm9wwXkpe7afbQfVt5zveFdW5Ue74o2VKdNzvwKQAZJNSCMrZDBMz4BFMLbNFL9pna96MtnrCX1hK",
  "key32": "3uDdzVs5Rpnen5yLEmZb9vwyfjgFzuuS9wi8FtCHXcZZNFWwfkoeENJsoLauunQdCuQ1WgLan7dvDr5sz4X8wsVk",
  "key33": "pVHQUPwLhfTW1NkRZ4UoBvJhzcdrqWfAu6ryD3QQKAgcRsew92CALBPoKyDragCoGRN64jTSoNTWFXmRXbF8GpM",
  "key34": "5nwyyAkpCsLg7nmk2aLdXcR8gj2LqdEL2hHPnNEwupSeNK1yPwsog4KSSTKBZqS3g94SEswmPxHoixbHn4oYLMzb",
  "key35": "3tbX31scDmFFxp2XcuSpTib4hQEmGj4vAumsJN6AjPqAaFvoyFHxzpsFPxJfiMpKusorCHoc45aikriAWfFjsf87",
  "key36": "3u3PX6xwTUdxn95UX3godBXZcd4PVMdRTm9Vrc4pUGiQfygeYcEH3JTbgRY4dfSSUa1WK9ThHiX7YnFaj6BKSsrX",
  "key37": "3ehwdeK4rA4sDSPpgtZwTug1rWtXGe9aSkHvfwXaeUdNxYpCZtKBQEgLqjCqQ9fjrkshxK7txCuYqpPiUHwzCfxK"
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
