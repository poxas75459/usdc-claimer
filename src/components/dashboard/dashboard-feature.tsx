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
    "34MG53z235VV2dzLrzuNMNKDQi7QSNYYkGNVpFwoCH7fHCg67uCyyvkg48AUuoFyob8iXzoqvTUAsuH5dEgtj3PR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbmeaoX3uhyfNHyVyLZ31X4RHQQ7RGQJ5C8RH2VXRCBF4k24M7svoskUBd4d5E2Scp5CsVydpMTytcu8qHxx1Fy",
  "key1": "3SGhRrx8iQ3SK2cjaPZFMXrC2QvQJyqo5qW33upbEy1JWp7v52DxCBsFst3iPxo9gCAn4QV1h9zsmTMzCwX5nG4u",
  "key2": "53VkJyBomVZHtdWNSdrMdNDgo4ocQggHkJZf5DxCioabEmB5T1F3eSg9MqDprD9gANUqekyCk5pTXJ6qoLHECsA7",
  "key3": "5nsmpj58UdpBeKVACW6Qzu72jPzxkLPDJZ9yQi7xN4TJeTpEU85A2Ybc7HFodNiE13T9t6XNz9j9J5qZtQeFQio8",
  "key4": "2sUPzmtJSfypjVX1ZqrjEu3aV1x5F2dGQSea8ywTWUwARYJy8Nu28btHnoukZWG4c1m3yHwybjHwemoLdCRyVTcZ",
  "key5": "23uU2v5c5acJCgStpeKoL5hfKhzTkihpoojFbo4pWEX1hnxBQrjjnMJqsCKSiBSGg3nhvdYMRmF9MeavoFGvcUNE",
  "key6": "3YYomJ9MwYTX4iLC4rsyfepgnhjqAyhXuuyrENMddzPrpQJBcHqvHoBuuocU6mEpCJk2kETHgDimYU4yEJKbcEqx",
  "key7": "2YCpqgFfNrfdooSHpBFPWKPGjD8EjUZkSbttdrLzTYFtpNjfAUU8wSdQSUHv3myE3rv6mBa1H9BGaosFP2uVacm3",
  "key8": "55mQdh5vU7XBgnC3jJQGGBjPKnx9k2RMP5Vxg5hcgErtEvPfnLrbg41fwFD9hh5CLJXUVi4xUfPRurLkwpg5Tem5",
  "key9": "5umsT5TA4PSthqEHq8XaLNvJwAvad1uQYZtNQUFgLgKixjR1XckWwZLrCBFbjmgTX3qfh5m8BLkZaR86tx9p4cNa",
  "key10": "3tL7AyNMiDP73sMu5Sm7mwRrcJfkUCmpphFHvpub2DowJNJbuT5wihsKCMti2jUKEzmD1oWfYB3meLhX9RbkSGwd",
  "key11": "3b8Cd3PND6ChJv8Fi2hHrECUeCgxb55TmBmrue1t3LMcQFV8bnbPLVupWi7TwxoH2TH3iybPktMgxiEXxBKNC9Fx",
  "key12": "3aA1SroYfbok7CDNm8ndDyHDMCNrNjNpkx4sEnF1Y18TdXMnEZUX7pmPVNsQ335AyVq4smX3HzQFgJhud3iidD3T",
  "key13": "567fo9NzVZNREfoHnjybocxJnpP5cqLiS2EyRSvpQhtuABSiTmA4Nsd9drwoB5yFeHqHEHVnGwujFUxgSLYyHBt",
  "key14": "GcSz1XL6wGwB7Ge74X6CfGDJWbx8s8TqWKnt6qfJfpvXLqV1XRoQdHPegFi8feD6VXu9tXhCtJkJtfmUSnfJAX3",
  "key15": "2cA76vb1pGywZfdwEevYrjCqPqeMe9eWeQU4fmCY7xcpeL1Moor768kLma5uDd2e3L6uwXvbo458rReeXcLaDPkD",
  "key16": "6335Q46awax8fwHXV7xk6V8gtKqTGFLuwnjqfBCGuCN8XBto1Cu8eAkJJ7xmojrkJdu7kjsxxuxcbTS4x4LgXNaS",
  "key17": "2PFHYd3jhrGzynk62ZagCTLqsEkb2XFvpwF8J93S2py3zc9bdSxauYYdVgSW3CA8hZz3onNXDCWS1Jsj5oEv2CdS",
  "key18": "CmpMdU693tJPoWapDieGtsdfeNG2aCMnfR4VGvQf2TWikakL9spo1ku4q9bMibPAp3SBcnRLizkT4uzWHhQsDsM",
  "key19": "36HcKZ8jA1cHT81mg6BU2LKn3psT6fUqLg94YjhwgzsGXpqaqFCKMpu4dZKP1unYUQpumVxQSMzCkuFLo37sPfcp",
  "key20": "2MDrtbEBvqyFNGV2JrNapb8mvnc9U71ag3gEwnjFLTzLERznHUaTpBpteKwsvSQx7nFm6aaYXexuY2r5vcf7hRBp",
  "key21": "4fWfgHbdFhdQJp1jXi8dp7xEBy5iYqWUangjQYHzyKoXpQsSSXF3DBz69k373Ft69XRL4NCPMkJvSPYKpq4puVy8",
  "key22": "5iQYmhmqyz3saDn9Nmx5juTJRQ1bFEkCqZYfudvvZFp5XUAQJnxThJV1z5fSyGRN2hz4XHekkFxDskr8WWhhaiZX",
  "key23": "66FaFMWiDmNaVqi1orjCg9oDSieLCBYFTUZkgom9X6uX9ipUKcVDwhkbZtTjSQJsEAyC8FSwzsoVzG4BqAAkNd4c",
  "key24": "rpEkVyawUa2ZT36b5NwTaxinVimsopmcJj3mT9DnbiLLGQ5y1doVbQziYG95RBsq1hnuq9j5rC7r2VcV5mSZqx5",
  "key25": "2wMiymMMCRXpGvfMed3yNDX2u6bVGSHQnFxT619bBV7GaurWTmnBjDte824GhJpzJRaSYBC3uYjyNeFjHzqv3rig",
  "key26": "4jJmRGqXBaZYdFnEARcXmss4max4jbsHSHZmTZJMujagJLyWHtMZBue88k7hQnsA9rGfBtAdcB3bx9FsHpRrZfjQ",
  "key27": "4ZPiQqRK4ZBbNXwr3q6PhPZAUK5zCC3ySi1xG1ju7wXa63QeCFqafujT8DDfbDnDAqQtJKcxaeBsSbhqQso7dwTQ",
  "key28": "f2V23rXAVR95uK1NvoiuiUgeh9z8f5MNTLyx1RNfJRPtJF3kLR4FLu4qrEU1Z9GZPwZbNWkibv3DqwioPWFshzJ",
  "key29": "66k2DsduxfoAQ6ht78VBVxnSw2QMbKzVZaRKccB4tjLWbE7CjJPaL3ZB2SU7h67fTrGbaYckQMjTvnenmERH4c8A",
  "key30": "nPCHdf6N4ypGJ3j5Jc1oagPrL2oWmUrtsW5K1g1fZFp5LDKhonm8wRwVMjtXQukiaBabMrwQprwLUMspKV4mW9F"
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
