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
    "2FXkUjYhz3cSPbZsLPJ3JqChLbYfwFb1SDUvfgoqUqXJf58hHVjPi8qLeD9oFh124LFy4TvuXQaDLxgVcar6NJe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eC8fwEcAEQggGbBqM9qmD4DAQSnVqM7Hmt7syqJ2q3bhRDwcDhwCx41vGZcH3pwYoQCNrajn1XcCpwg4MDMF6b",
  "key1": "3Vwp4EqobKLiEdSreKmYwMLg4Uw3AH6hFuWDv46cTLMMACpq47xdtrRzDamW1K6H1kJ1M5XgJZQBsa16RYDuC4sY",
  "key2": "3SGbQc3G4VZWCTPzgSpzxnTXTzKB9tYRqGdF8mndhKwWTqzbrpALPMUdnFfNHmoHbmwpYgVNFfZB7f2kn3dbyP23",
  "key3": "2gufgXJyKCRGGHXo17GMKdwdJLxXvBymTNL1Bo2SgSP2sAUKW9ivr3cGSCatA68NmjQ7tSLKgKyLt3bhmzheqGWK",
  "key4": "5hGxZkLiQwSRBihrKQequvxDhEFgGZDvCqBhEzn6kmaTHwfNhMfx3Fzeoi9Vsk6VxMbkbHvysEgtHoCmF3db72ia",
  "key5": "3LUJyJGrJf4jF6vH5h4m6qwb3tqpPuvTrDVRNJLvGTvphW22rhajMMgmNFUTDYS2AFrPh8Noe9HJyRLf2Bt7TCjb",
  "key6": "5arN2keZS4rfDSVXiAGqnsRCbXvcTUwennsiMABnqWAFwCtzZTVebXJfVpVHc2ZjtkLyuwSH43q1KBUp2fEE4fe4",
  "key7": "2h7hxhDWQFSTPWbH5YkAY1aTmPZJ8PUVQVWFji5LdmTFjFSQDwGgpj4r5fAZLNupr51awivJdm58Xqc598uPoL2H",
  "key8": "5yVQtLUzoL3FSxQbTYqd7Gavj5j5rfSqqyA45fKpCrZgdxE6cg6PEUis3MsdATmV7CLq4RhgK48HzrN8M4svA3Ax",
  "key9": "4k4ofHikaVwmpZawAtsZnqJHsTEu6XigLiqFnZPwwFZN97hhSxMPiqLLxkgTMjc6T7aMqA6x9V6dEKY3kL4TLxAL",
  "key10": "2fMtRJ8r1qiUy6y9hNsHuW5R2MU14EM9hZKMjh9Y8L1rpv38hGhWinEyRXpUir3iiSbZ3L9CA11Z6BrRVAxHvJb1",
  "key11": "3aFxp3fdtkSg3oJA7pK8JHaUsMeDhFfnzLBVSZ5iao4RcarUVswaNqFZnn3uPkYuQQBHPHzqbTyEsU3crDA26Ek3",
  "key12": "EQ8Dw59QGZYRViqBzjchWrt1na64Gi6Mw14KZvKhfmBwT3Lm1M8QYzzMW4LtvwjhchLpZhgaB4EW6dGX3XAqVJd",
  "key13": "4VpJp5Ji4rnSWyTwPZkYuvnv2yPA4xQjwZS65sZWnPSdVmtm7jeWgHdUXGN5e3FXcnzXPYGosAkScLJ5tV8nAGeb",
  "key14": "5UrSVq6ZfEV7b3XqnPnhzk9sZhpo3GMbq2kQoS55jgNXDn6p2GgJqiekwEywHNsnzBmXkA44MwCZB6jKT1o11ZPf",
  "key15": "3QNqyPTkq3in5XcvL7t8btishjJraxAt7jo9UigWGDPohXzXCjEVV567aPLrrCwF4vUdVPRyHbUnziTz5FQ2x5DD",
  "key16": "4hKkvuXf5peNz5T9Di8uAWLenrYeG78Yotn7SuE1hS6RjiRSc7MBaKSxgPHPAvgJgRBTSWwNFrtsKtTkV45LwYBE",
  "key17": "5Sp3DAKmLd6u2rmUvYocSQYZzLLMDEqgtntmtAZKrkVhu5zXfUkCfbdwtc64oavuh7gcGh84oBr4gMoU9h3NHbbm",
  "key18": "4Tikzcknu6qQhprZEbY4yymiCZnyu2GbBuYpNWTjMNCLLrvsywE3kPn5VTJ7QUQsdbF3mMkTa4k92X5YunpPg6XU",
  "key19": "3Wc8chDfjLz4785FkkQhwSZScE7rW4WiE55DMhBvPjUjPHrM3DoMMiKvaeGc9ke1d6buvXVj2yTGXBZQw628FdiD",
  "key20": "2LnNRoxJHKjt78av1AT7Wzd3Gv3QjkMHuHYn1rVbHmqgFsLbbdVpTy4BMTytdXn51Gi5vtLW6mdJ6F88XTzua4Dh",
  "key21": "3u3G4rr8F1y4rhphtVbsjrTpwj48GLGvmFcBdn3ne4StbhzDCVruM5PYngxsiv6X3oZJrzjTWeeB7p7ytzD2Wy4S",
  "key22": "3TXc8YfgJmPiPAyEuJeSBSN1Fz7mehoiugTzNmCSJzJHXmPuHjBGf3RkJ54K9oA9q6LTxT23nrztC8cA8NERnEnr",
  "key23": "4TYacDWpNXTJYJy4SeeB6ux9f3YarrkRYHeSHWwo32ziDEgKjvbejfvoZYX7MLUPKzwPFyqsX4yatFnCQgbaV1A5",
  "key24": "46yydAu2GLzqHq3XbPPgkMRC3Fb7YSZPZgE2BPajJcpsNYCMDmGGmidPDXVoVDvRnkFvkShzCP3o5NKBzVJBrP4G",
  "key25": "kDCx9LH2CFU7NckPL8jQiGDgrD7tRcGBLUTuJFDpwSWsb5azXAPZW3Mqevf3Phn9iE2N6vqpPcANjgjfKuc8CvW",
  "key26": "2ZssZ7wmbXDQp9D5Co3CYgpW2o91XEdWnPse26YsKhM26KE3QTxiBXgm7fVbJoQq2sQvfxYWBmVfAeXdPWLutdqd",
  "key27": "3NYC9AKP5vKQ8oa4iibxgM753sNqojCnpJpka4mY4zGPgpWESavJciwHHXNC5qu1MwZ7zSKCjMx9CkbpwpKHbnXB",
  "key28": "3yoyUz829MyjFbtMVY7ZsoiSgx45KT9odB8a9r8wg8ubkG73ke1g2VYgxNaqbRM19nsow6fwHQRKXZLPWuVoBR8B",
  "key29": "CByhB2uc2kuS921XUAgfdgwW4jcGnFhZEXPgMHu4v536rN8N4bLTLowFQsYzH6ftFD31jsJKgsmYLQmVew72hrS",
  "key30": "3SnJp3tCn8tAfnaRpXiCARvKLv88VtgeKQNvAHTiPFF7NvttDt2rnmyAprv48f4MxXh3D6V6Vx9kpg2N5fcLgfx1",
  "key31": "3zNCUQwPgzHyNex3bnekp8g64Rha57aFCQoWL8HJ5tqeMEpJ471YjWxKbPVXNF6YYfWsmSYiZDcTWS3wHPwq4BJT",
  "key32": "3ZDd5voq5eXnZ8rX5ACsxmimf8c9cZshnsDgU83b7k7biRbMqQDu63wNpegK6NgjZggc4dCzYQcAfHSJuU21A6zF",
  "key33": "5a9DJkyyEeDfPxkgbc5gaF25umE3Je4NqaDSV3ujeakstp74YS9FEGFQ55MGE3wS1ppMDb1iYbroA93seb1kkYhD",
  "key34": "4fX9gfTWRcrodJaExi1bRm3D7PqUi67aHAjjJEg12q3r3Qbi85N87Eo9KdLC6iUFJXA5id1VwW3rnEBzJ9DFmWbY",
  "key35": "3DD6uXz7KE85kRcYhNPBcboTyMTFe78MHFLr7ztk7BDY7BeHXoWyhNT1gnbRRp8q9yR84LpE681vczQA5rUcpW7d",
  "key36": "3hFGicKKeptDzVXQnzHboZivvMzyfydEcsKaEFkmqw8C1wLaUhYRKjXtFUWaAwtHeb6VYXqyHHkWvjU1ckNDTFeJ",
  "key37": "3Zyjc9iWsfzo7on7Sp8xFZKpwv1ZDTMDD2Ei3Gxj6cPFjySEY76EZr4rWtR4WGoaTDQtUPgDVGL4rtnETecsHXcF",
  "key38": "59bxzkxCM2L2vmnF8kBkZsnqEbFoe619nwZQ7TFp7ZhPRUBpQFR5TeixZ5Xxems6gcyBEE2SFuP6Tp1N2QEm4gHa"
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
