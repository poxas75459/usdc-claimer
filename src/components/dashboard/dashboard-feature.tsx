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
    "3Up27afEEQN7uqdKHoaa3kq4de3DM37vFrTaDmpnAvFWYCbzpTjdBr7NegjWvy3MRsuUGCL9V3FeJVTwwrbYuYFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXcESD4uQtQo6N1nkBcXDQruaLNhkB12giaERWnehtHJiReJHSznvG3jcy569L6NLt6sUvitx9wDgdZ4q7ghjKg",
  "key1": "3cXo6JHQX1RRbKd6hYyux1mBFi9oNAuQBSu2XHijSeoFcb6GdyPsLhxRFQHSTmR9m4wg4zNx2b3EuhMJP5UgmQxX",
  "key2": "3W5dUM4mUNKrU8x6Cep9sjUHk2i9q8yPmrLXW27YZaKq272wXXNt9fNM1FtHtiHvjDGN5cVEAorWiiJq3QwB2ihj",
  "key3": "66c6ii5Tzd6Q3LbVohueWQLCBdNrkLyF8Lqbi19GG2Ds5wG6okPUMLf2XzAvB4VHZhzbpCaEPZuXSiti5KDszEEP",
  "key4": "55GYByrHigjgmFwb7pYuZ2Z5XRtkaWMkvvzX2uYVevdigujMzQppEFyJ7LL9pYL8eJAzoTyQNzQuLLBEWzLpDPb7",
  "key5": "2sWLYh1EsCeH6u3sThh5ZDj9X7JGfQ8EQouLyAqNraD1NoXq6BH6RVZsLdn5u2sUYLCRJKJjRVuWSSDyS4DvL5Tw",
  "key6": "4MSGJzHbcDteiX7Pu1Y46NgJB2WBrP5Xf1T2WQthnGNF41FncgVDacQL6pbcYCNJTWXXhWDgutuvpq1gMGrYepVX",
  "key7": "379rxDqgDX7gMTAjKFjdt677B2PoFSDcjoLc8BTx4qHCu8ihCVNBEjFX5cBhuqY2fuzudth4yLUpNfJQ9x4nx5Nt",
  "key8": "5KehDsxt3r7J1nhskGkLZWa9E1MRnnJ1L4xPeRFwZMh8ucdC8WYxxPf4K9CksnyQKe5SQZtrHFJGwj8mxMBMQ6Q1",
  "key9": "ScjBcVxbQx45SaGU8kZc3jEimM1xuetmgMY7GFkoHGQ5dmbgacjttFjKoMusAq5wfhNJtRmAhMSvRPNeGaGScqo",
  "key10": "4cVVmn5rptwDaKaMhDzqzS1AVJxVVxD55QXLjozmSLtZ2qCkK7PKCYdA7D5sZeNPdUdrhEZNgAxuYmdPmPmdZxFU",
  "key11": "aVjbNwS7Dyxy6xHykNrKQJA2gkaqsXr9tWYdST2yUFGuAjrAa11Hhd9ao2PtTZ6qEgDHt3fDjsGTNvkTYUXagxE",
  "key12": "22PhHdHxjDbGv77gXtM1moAankGpZ5WomnHJ7WcZ4fBGMz7nJXDkfCNkA6FDWj2CJNDrxxQPA1eUaARPC6xybwUK",
  "key13": "VyXV6vcm9w3EibRGhsfsi1g7ofJkUcbk2wyjn5181FxnYDfT8fbp5jP4pLPkHG8hMA1kBCx4mCRML3yRVBHNSDD",
  "key14": "5G4zCE1B6zywFPvEKK8sNKrS4H3GPpkiLXMFFbiZspwrZvowadWYD1P3n9tUbDQmpnfMsa7rWghFVYnY8XXRKYJA",
  "key15": "AjhoseZFJoKub95iW5NRKdndsuQBMTgBWT2ekybQ5JNTuNU585TExHQViPE9jTeqbsLSQKg8mNov24iWGoZT3nC",
  "key16": "29LFMkHfi9qES5gdW1igyxYGL7KzXYBb1dRt4a3WAV5GDKbpkXw8shEGmgZRUhAnrhmXwgX134cCGqksi6qawPqS",
  "key17": "5DyHu59euLJGMpK8UXv1d6F49TP3WVfimq24WFm49KrsbvWhohVazHigEWSY8oMZ6r1eiHDqB4ZrDCR6fHfR52DK",
  "key18": "3pdAtLrbjhSAApYcvsHM4CMQZsSsqYDMmX2DXx4JpfefhATm8yzDLLUF8SZVvv7AXScqGrntv2iiHM4JENJ9d332",
  "key19": "5xK9Y7FQtMmjmSFsFMSaQ2YAdqeoXdBnCVVdvK8xdcbhAw5Ln9zG1RT7Vk6ujdmdmBVQ1kcdXYWZGFC31HRzWRtK",
  "key20": "2scXwJxyhqDHyAShQxkNFRAPmmXtHbb4saG8HfDte9UQe9CsXyxcefUdk16hwikiPZq5BjhvgHK6gd3kA6GquF4d",
  "key21": "qZJu1TJ8gJXbzfxtaeqF19xiLCpfmqt7AeUo5NAorMf9TeugBdg9HKLs3LoifJ8KE4QgfvPpwcuyQAxL8gCb1CX",
  "key22": "2Jrk1EtuQcKDqDQQNiWcphm9Ri9y25UFQ7fcM3fPgMgku8eD12DsFCkPWxYRoYJzWNnBZSgkZvTqoBp5yW1ZRJNy",
  "key23": "5G3PmXNUeZ6p5pEHC2xM3k7VyvQgmNMBGUnXK528yd2ZpiAAM5xPvxeQPv6C5zH5G67twnh5pueRaG8jwpZzCc75",
  "key24": "H5Cj1bm1zH1sv9gFFzFTHT6vJmaC6ZauvewLnHgsg2j7XwKovoHqh4KUC9BaeTeQfpDFCeKjuorKNU3NEg7TGC3",
  "key25": "52dkMi8gTusQiVcQ7C7q2jGMsgBfNow6vKt7D149p3zvT5SewdjgmAE4cvqipsM4NTp2KL4NfefvQD8Vedx1FbCU",
  "key26": "54aVgP2NHX8vucY7D4EK1PsLyfUXtprrUXyGxhudqkdodDpXL5xbQ3JJLhSVyWrStva9KyiVVPBVzPf7EDigjgdZ",
  "key27": "5NqrAEDyvHTaqo2ghVg5NND3qPCa5ZPaxFHD7bDKtVZdYv6MNswVktsgRURAhzuAeSMf5CBujqyEEkHK7jAQ8gyw"
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
