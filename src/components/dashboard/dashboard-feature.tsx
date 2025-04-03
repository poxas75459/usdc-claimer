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
    "3Sf7KuWzNCpyJ26KqVvuVQzFRrXeHg33oXagbFurjVBFYHXzTapdSqYHRE4HodkLJJAigV3PSgWq7iKpvs9ou5h4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTMgcZmdHZX6uEsqB6kaNtAiThkBA55bdtV8g4d9MtrCEq9UKmcRZUaHGZa9sRo7wXcCkg4fwRYvQmv2GhGFKVb",
  "key1": "2PM317qAKJdYw7RM4D5wW2qJhGu3ZVK4serVf4V9Ft8zxJrknDpM9boXqv6Q92XRoxboNtNX2UQas6P6ZsLj9GAV",
  "key2": "w1oZ8aZtkw6k3qAU3ZBjUbfFvkDWK1ahHx16K7VD41EM99R39Rd2kEmiHUnavJSBYwuAq34iEMcfcmGKKAhsRUz",
  "key3": "4VkMAkvbnNBW3mtTacGn8DXRFwGHTa3zLWGqZTYdXGpjNoWnod2mACKa6U2gqcH4GTMPtsxCFghZMdQHn9jAcsjc",
  "key4": "3Z4xhq2mEcWoovbW8yNpUNoLxJVDHUn6E89oMeQvWJ4CpDNP5CFokeQeMKL7vqGBqxA8M5NnoFNqMz8vXx7LZN8x",
  "key5": "4WkhYppe9Bkex2Mj23wHX8o4AKDdWz9mvQfzthcPekeTkv7QiTTfFyVUdi6egUTvPLVNQhmjpP6fdEwKURmKY7px",
  "key6": "gTctA32CUfTFN8KKYjamJ6L2X8KKfG2dtJoqohcL17kr1da8JervHb2XJz2aTXsJxuPphySKtR1UVkGEKhu5MgA",
  "key7": "4XHZwQ8BoVRvdAxL9ZqWxMjnNtQHXXWKSXzas6C7DWjxWXbmXjaUMm2QUUPpkCw9zghDNGoVeoAuFMZGa7hLBHaV",
  "key8": "3KLHHnNmNwRhkuJ7DmLPsnWN2ewQp7RDZeeU2LUTJQicaWdZvFiyFonMiSbpkYc8EskT6jeiKVuDHeY7AnyAJX9F",
  "key9": "uWiTt89hFrGa6mWhHTcj2a1xd19TZ7BeVt6BTJPHYSvzVgtWAfwkoLgNtyyyEZkrYxcBNBrzF4QZX7bf95fP44m",
  "key10": "4nDSiCJCLnb471cNUbzpR7eWtf9wfTqPkw6T5GGUpmtN2mF4wVx6axUZPuWydsgeQNyhXbCeLQd8xLNNvkLZ2Y4v",
  "key11": "39d9nefrsyK9wyfdzNbcbLpTWYk29g5JDdxZehkWaDcoTgtuiGeMWARMKcLZCSSdxB7MxUxmH4peoRrtXyBEZbRH",
  "key12": "1UEXnThdo1mT9hHgoSdS1494P65iAxE8CX1jRX7fVvZcv5dLy69AiRPztqD9Sr2Vhxs7vtUzznwJ6GexQdeEwqj",
  "key13": "2p2mMUsXDsP1j9pqurHT2RhJVZrWLhTAR1NYVz1F1i4Ww3CUv6QNmXCFfb5hkq9LnFSqGRSD1aZCswL9p2R3kLpX",
  "key14": "3V9eVUfACaQwaUU9uCFeq9PqTu9bu2wk7QK48VjrjFXTiJjACYQuqe2M79rw9meFQQ7VLda4ejg2m5KcJoKuyYC9",
  "key15": "2poE9iMzNQMQaKrtP9FAd2SWXzM8vMykmhfNA8o6usqXLHgJPJd4tueBnNqqpnnp6qKpWeYwby5RW13rD1CfvLyx",
  "key16": "4Swk7abRBT3SM5jFepUECzhJ9VzyiN91kB3gmr7wtGtVXVXTvZW4BkA88H4WXJRGPFTxTxSRH4hRCW975YCBDSEJ",
  "key17": "4HbvCHRnKLDPqjaohCqkiFqSVwBteNyC4mh7xbkrs8qv9mLRJXJgjK2SUgJF1TuYf1eu51K62K2hBUbrf4Rq92Wg",
  "key18": "3W7hovEugehVeFQoaPsA8tNStX7UguKtrfRuBADv6XQwvzKDKcZYU6t2X6hruDFHGdZvispHyHadLv6FgYrdUmDq",
  "key19": "2BQEJ3yBRNvh8d1dEVb8xMcZkbKgbLJfA9rT9cSeVfjTGMZphX1MEj4ytyHgUNegiema7vNWMV98rkhy6KHyKtZY",
  "key20": "2yrzj5uy7JqfY8MpuAiMKsgZFnCQ7a9Mbns2vzr4MbEp649DhwjiLEBqrnDmXuE2px1iEjG5yKKMaXyWAH91ugQs",
  "key21": "pNsuPgNt5bM1K71fp3NTjhTHhomkcVgwofRDppR4aMYcfT4TtRdtVjqX4MvZP7hchitpTixvW1F1NwksPBmPv1S",
  "key22": "574uYYtwFkpdpXirW7FskBsRKBTXmnyaigqeExX3FvwkSs75ZMuA1jZ1TdPjZ4xR57vsu6CcNporCAK3K7TPTvDA",
  "key23": "3Cvu9438zUVHGoeyyk4Echz6cbFqqczBE4SpoCsMkWVBUJh3VeEcqKhJZAPhMKLZ8uLfioaV8haYzG5L6F27cULv",
  "key24": "EQs9JQXoUw3ie6VkTgR6AupQpXUcKzBUHxzGnzf4b4p2g452d1B8NJiWb2kiqnfz65pR8JdNNbzJtHKNownVfSc",
  "key25": "2x1MtxsLrfHX4auguacsBrbR5Fa9Mnrm7VqJJKKQenMs3Gum4XX43C83zLL83QSvJMNzGXjmBb2M2rEQPRRDMhc9",
  "key26": "3xdWkfrq8DFrWyaXx4vDr5FNGx4nMvcJXu5Nxaoz3Vd4rYowipTLb9DfhGT1exhksTipQX7kAhVMejAiWuk4V3g7",
  "key27": "5VFHyNci2n5bgcSMUN9KGVJAG1AAPBgRGUCSr6zWCry8EZJm1Aoz1sKms6nHQYnNTcQ8JAPXVD2CYSCC6g2Fuh8E",
  "key28": "amHA2Tp8qBvuHfhLMzZv9sTo3K3Lu777pJRp9th7DR7pqnUoff21zEHzJVQ7MgyysFZ2eQvHBXNFZjANiKjoJkA",
  "key29": "59NF2crQAu1jYFb2LJX2Xapp8adWJxJTxFQXCEiMVupqLAH579akj4vZVafNV8NKrhPL1ZFFugetmdAACfYci4FX",
  "key30": "5TWSHTouoP24oKQENBtsqaACYKBi7gyuDuZaVhzFsW7bdzwHvJR4H9YQ8iqDMUs6Ce4u1Jp85EBXUokTSn7hLSMo",
  "key31": "2Gf4JHFBCi8i7uCeJD4Ygc2UsqoVv8eWZaBgvwLMyMbEF4V591C4wvdKZm1mPnPtzZU1B9R7b1LAbjWLtsVhruzE",
  "key32": "z5Ytn3VCqBehy7wLzhiXCSfcY2vTTyUhuY2j53Ffm9AEgfc4yWsaehfoamuMMNrgUkJMbbofZ5cN8fwLcbDzF54",
  "key33": "5koS9oR53x7yj2X16DyQ4JryayP9WL5ZBq9NwdhG6ewUrYY6jTECECDVtyiEoPTBRvkbQ9151qMLvgJ1mRcrdY1X",
  "key34": "HMf9hrtUsBTU2ESHaDsJ4RDwUG6SKZ7HNBrK6sMfy9SDoBUaiRiuzajejkknnJcnHNBiYuwSGqboEiukYKFxstn",
  "key35": "56vT5KmP6grigeTdDHHMXnfYAavke2JMD6PUzX7WGMSeVKxHaaZ5BHhkVpiwe7oG8nVnfPd44KQo3Q2J4HhGYrLU",
  "key36": "4ehmeiitaQZAGCPyfghMWi5GTSegwyd4mZPWKwQCVBNufzmygVbbdqoVqf6ujJNPJx8kTLNmQqQZmEtTrtS9EcRa",
  "key37": "3sADNuN1daWYtRRiHwgHLAYpVBijfkgp8QRGgwLHv2xoVA3qMzwFdhgYq1A4YskEYmhF9urH441dSEJ2xG8wkHgd",
  "key38": "464J9yVKZLbcMpEwwJXgnjLTS3CEiNF2s2nCWwswj68vGVQjdd9DFCfFaCQADLRfjwGPxxznLUA72gvni2esxTRA",
  "key39": "53ozLzN9FZMikHHSYbpvS9KfsGbzNCuFk5UBuPF3MpFTqahUFvRQRWtp9NqWAzVkovoLs8WZvpAczLWyHzXuVN3n",
  "key40": "3PNxkz8sPxipTx2y6rAjqBbwjnC5mwoDE9L8oE8E4bif4VcvFXhBePcSDJuaa1bWQ17QiLgygUyhtTFUkQe1VnZB",
  "key41": "56RHcxQEDGccWmdJr8ZELQ31Mfz5UPWcMMngfEZ7WfDphbarjndbowqNQCwwVVd1uEy2Q2i3D23arx5gf3UiTVYC",
  "key42": "3fDaA7fa4tTCJiPJHk2KqV98sBvJgBqsKhHVvESAFjk6P9dwWwdHEZej9tBt6XPNNgu1ha1GmNAUCaxBNKG6UTrF",
  "key43": "5imvCY86VPabzuhCiAanwuHYYaJNUBEnhsJYzxWLrH4pvtfZ38AQZ1Pewczy5yQdbc35SbJ3dTTDTeYZ4SqgLB4P",
  "key44": "2s1V2cTiP5nmoULLA4Dimpt4wEyd8RTKeT8m6cxHio13pSGMwsTvWWnQT6ByzcjsPbijqJVmA7Sjyoapnd8BT223",
  "key45": "3nmi2rEefL1XH44Nn7feS1LCFMkZjK5ZcFNXjQ8Ckc7DCtiU5nP4FeUpXnfcuDZ3u9FZ3bE9c3gtuj1hwuMAWsE1",
  "key46": "fV4rJMZwjNoB4zX83wvzpp9QVYHbEgSZwebaj5iVwZyZhN7b61zvoA52UqfBkPjbtNPKtGBPZttHW3V5QdaEQnQ"
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
