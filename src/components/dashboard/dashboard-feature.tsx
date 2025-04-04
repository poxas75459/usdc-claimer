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
    "2Rrrsw7o5rGcpyEKo15gkH9h8h4KsJT9nvDXefbqAqiwEKEHYTNRFdoG3eQQZv5WnBBEh9eCeB2Kq2EkKUo5kQjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gc1SYYa4uQmsf1631ZdoDExUMRms9srHzM9CRuVuz7QzdhFq9YhG3PyWRYFD5Amzgdvs6CH878ewy4HdGVTwEB9",
  "key1": "3BmR9X9CkXCY2MSQWTFUw6TRAaswMoyCfsSX6uhzKfnApKnYofGEUGeAXcLyN7Y4SxceNDwWURtb2QnTyd6yupZX",
  "key2": "wrJWZieN9UnHB2zUdTUBaSKmtC3QPbiknEsB9jsW9NRX54DHLFtSQqCeKavLmLgdcnENv7qLGp9fwogxFjTprDV",
  "key3": "49bt1rTZbEDk1meZJXk9NPNjnpLW9rPFTdwPGXeVWiZmS9Qe4xNm9YxNaz311BchLBjJf2yYrbw9FQc2KS5fBEM4",
  "key4": "3RmpR2Q9NEfEMVxLQBkvnYgBv2daUp7AWQ9veSwapoZXz91niCiiwBVmeXcJBvx37TzLvupt2eRLb2mk2XoHGdiP",
  "key5": "3itbbu9XB3PULjrTmVzAxEDiwEPNcz7s6mHeYqfTdBHmwAjHVhCdhqsMYxqbXtoPYZHReXXvZSiGPHXvJ3SLqfaJ",
  "key6": "5nmco73AoPXA52gJYcEP7vrbp1T9Sz8e2uCtdfnZ2fqVHz1Hnf2HZ1h6vjtc2wYBd6pK1TuUQvQ32sXdZcbkEr3M",
  "key7": "55tLn4TRcT3nAd92MQTuJQswGLxwT7UMf1tE9GsZkKPWydSM49JDkQd5R2Z8Q5pRW6jU1pG44ajex6QvMFSJKiGr",
  "key8": "3kHcESLHij2F2aECVmjxPsnGjVaq8SwyYxjcEToiYknbXRx835jiFbUGYDj6nhwJDvJQZBEZRHHBfXh1J52iUmaC",
  "key9": "4n9nB35tJZjDEsYhHjVgho3oPNJLsFVayDL1WVaSDtvFmrMFppukq7S8EpHFySXWMUDRvRzVCaMei8zaEoySsm6Y",
  "key10": "3HXa2KsphpAdg8rBcw5YwwDXfXbGD438TCwBuRoyBsYH33T6rVvoPrbDkWLFGcC1fyUoYinY9vxuvsLcHy7qGtcw",
  "key11": "tLtV5NHUWAbutiDDnmLm3DSugvPfPsyE4LkENGCEbSnNCp7V7oZmxbCHa99238kS2Wgh69MV6hGi5nS7VJT1Yt9",
  "key12": "5VT59axFZL2XtmmGVtfReYPEx8RrqQL7CMPmTVWHmNnjYrDtNDtCmo6c7RxVfQmRbUVc8CPQdbsK897yC6fSUxHA",
  "key13": "4MZxGarDeEqRXtasGS6AZtZ1erQd538cQTqSzjUYGKRyZSroDQKxprA3ymEmA29qA8iFA4zAGybXTJuR9gpjG88M",
  "key14": "dd9CCZz3VQKFv3wenckGU7uePFNgbm9VvYieSDXuvkZTsuKhFW4etuGuBZrCvakcdQqjrv2GSyJNoq5yo9auSV8",
  "key15": "4b9y8YLLqb5UNhLNxpNgnjsrqBKmBUov2KDTen2yZcjES9bSvhS9oVJP1fuXLMboPMBWGhWg9zYUgZ2uZhzUA6KT",
  "key16": "QARa91PNuu7Y5AU99KwFz5R9d73rR39cMpJsj6uwCtoV1k7R8HrosVCfn4rNeojWqGcnz2e4itNkAaphKkz4krm",
  "key17": "5fsmm9jqvfhstX7qkbUrPKkZTQuw2do6fgnm7FDpFjsCMCVQCWHBy97owjGxtQ7rTJB9sLBNFCANuRAVDcvENit8",
  "key18": "2cxzUBBF6kdxRhG51qYnr6WaHdXdC2WAkkfTnajNXTMsPijD867B6pe9khVUt7CwmBDyqjjGWFHbm2ZL918XLTSS",
  "key19": "28MZYM3iZS8TKJ9iVxUcn7WzkMfwPiALitXboeHmwr3XovwcdeMU5dyTycGJgMPL4SDzATBz6BpXeUEpty7AeGbG",
  "key20": "Emai3fMJnQ4RuLCsDxSsAvov4wgHbr8tCe3653SabAwDwu14UrLh7Pj4oQkuviWpeveDW54Gw9SFnQdJruZ9gAv",
  "key21": "4RWNVv9Ai6ujSF545YhEhvrH64s9MEqyjxmGGw5MmhXCs3qfD95YtUkEV2mRTj9FVLGsLsmJSKjWdYBovcLqYQ7o",
  "key22": "3HHGPuGrJRmsWrMwZYSd4FDqrAjJmoPumZBCESDfKBriLjBbAtofwWz55jxV4Tj7dPCv8ezd2egPV87mm7XGN7QZ",
  "key23": "538HR3bS8aGCyGTuNFQaYYeKLzEhvW93LbuVEvbd7FBBnRFDVRisqyZYA75DCeYyQz584GNkNRhnK4Wum8mHVVHQ",
  "key24": "282YQEpxhNMAzGcnfPSeAvr7vzaF1jWxr1MF23y1SZFqFbZdBcN4RaBwESCteJZTE5M2q2pRCb4Um8UaQNB8sLF8",
  "key25": "2zQore73HuUSJ5L8tupQcZ2yUEpGXMJrkAuRvDeCsRjqVSQojSzu1yLLU3tMXrWVnmUf7WjUUvHTvtfxgSEN5vmX",
  "key26": "3GpoFZmLJrbosdT2cGvTndRFMkmKK1oXKAtwCaYYn8p5woH5mxx9zm3GLkNfCqomYJM71ktJi1krDsuwaAXic5P6",
  "key27": "2ssAbXLgAhKFTPYU1xKomDfJCW5MCXSVQbd8Ln85Z5LVLArPFxqfEg3mwyHvoL2zWh6oRFjQ5nq1uxf2kKbYpuo8",
  "key28": "3gswSH6N6tjvg5fEv3hKfF89keov6mjfeCJmrbhWj2w8cLETUHce57pLJWu8H7pKWo4sMZzGG2cybrxTd84hc43A",
  "key29": "4VBjKZ9Fq9Wix6Voi366pNozouYLfZkczPJAx4CtjWF75xz8hSBvDAudkCUXdZBTyehDM7eUHo2Qr5xTtWdghJGH",
  "key30": "2YELMyMjC2khyTmkMJC4XwGvYT7xoeH5oYkp2piFdtGbCVEvzgWD7PkqW8RSMXpMrLpnGRLdoN5CHGAkB6uSbtez",
  "key31": "63gbkdrRGyNUbwPj8gYL4HndphmapbNRNVythY9Ktje59Xc718b3FLLNwvgYRMyia6kXyCtBrvHPr7c88zVJUCz4",
  "key32": "4V1n788KBe3r3DNZBFgGTUwvZitQtatR8m8ZFswfZKjE7AZtWgZMNAGCG4G2WmPW5VPTasfLhsHLPN2ut26oF3W7",
  "key33": "uuSvPCKxgxTb1gQkhxoSSw1CRMz1f9VMJyoh9ZeAXox6vx9HA4X2Xb3dqGBE2X9J3E5wfEsTHYmcxVHAG3zSfYq",
  "key34": "3TQZNFPQ4DjcBuJ1m99QSvdLsTLFvyodM8fR1L3N3QfPCbcAeQCJ6ub7DQhKd67KUZbsZSW9tn6hnKnCsspbp7sa",
  "key35": "3pLkK7J7JLyBVv19UBK6W9r4cEYHtWjzKYE3JPFseXJUvVvLoeCj6ygffZGCKSYwFSaaCDvx47YrPwYuyMUELHFd",
  "key36": "57WG87n4pyBubnms4nrQKHpQkwvTctrx3rGNN6EjmD3NSLpCSPkJBiw6P87CU3uHRbWYkE84SHZCo4u4vvQSXDFH",
  "key37": "oXb2caFrX5YcG5RWe6kV6sqQyW7tS8tPX666hG8XdDnisjjqAeNUXkZaASRoGVQpxHXUeCubvRgajDgjPop62Dp",
  "key38": "3YFKGJu3FpFRkNvMQHYrGvwbAoDCVVkqJEUa44y9o3q4dEGFXRvgmHdvx3UXP9AP1WEGEVr65HZhSx7W8kPLvspX",
  "key39": "5E6gDybdTMVrCRQQvGsCKEs4uLzxoBTFnXqX7aoDCryty4EFnvejiZbE9yTzQrE8G9YqkaPSdcteETdAuMzHY382",
  "key40": "4fzJSeRy9ZNisbBA5U3SgwPxdevsigYBKvkDA14EoDLcxzcpGuGiMM5o5S7CGf44NyJAYeVS5wj3bdMWbCJ5Xqbn",
  "key41": "4bzka976zPUsbt369ZeaUMxS9kodbAFFFFWpRYJHmQwfkE4ypJ5FMFNYcjJeG2uBuYZ4CU9GhWfcWgkRbmDZGGEz"
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
