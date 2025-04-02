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
    "5jgK38UeTCcTWjuVGX77HnAqUzTx6YPMqwWPsBb1Mh84neS7CeEWwXKk56HTwA141CQMnHV1nU1UWpegDMgoXH4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GkCnJCgSTp3H4YPETtHazqJnzxj6wjUqLrMypo7WXrwB3C6BtZ92V29yXj9MFBGWGng2GEs2pJ6YxnhSbVFiSB",
  "key1": "28r7Kr5UgQv7n1xMLZMNKd3jNNKDwyVpzbXAY3uVrGBe4DfXKMuAFKGWu6xwTL7vznqKPzskiPLfptvEswfNScA8",
  "key2": "5VvxpFuuJ8nWao5GfkMjYH59qveakKjuBjAdc9xsGrnKRU2zUh9wXRsZr5xmhYDvdg1idFHcxxXPEe16djTCaESc",
  "key3": "5tA65W6dHSVx64W9HzrG6hA4gyULfeKo1DX9Rk5gxCC5QYLwPAVQVhokWrXKbj4mxs8f2GSDtTKkZpFMCbaMEGPT",
  "key4": "v89C4NJ8BTfxLZx5o2HeAaT2ULY9zWzcYVcU5hvHU1EAV5rDYLa6spx4zmvGPQtz1yzsCFrc9tC7ibRcyLcL1EK",
  "key5": "6W3PkixYpDxP8ioTUTokk7RCPv95prAc7mVK3NNm7ugP98wZNoAM6RLe5jjw75pv4fVNVkwu3swKmokmHuxXuFa",
  "key6": "2MYhDy9xJ5Vi6gE134twdgNXyj5GjnyV9DC4BhhNvKgtwbc39S3LJBEDfqRSFN4tRVyGq8VfDGdhzXszD4cPk11D",
  "key7": "5LQ9usHZXaJJscJ2pyhwFCPTucPtUXNK6BRy6WWC6dbTaPNdajnbGBKGiS8AceisE89hsvtKHWbGsigqukEHsYes",
  "key8": "2NgXk9rHKqJNcauf874GEpv2pELHsraWmXBtxU4KXW1NCLWh8GbemQamTSfkAjgCtbPvGcgwCmdBRpkn4jg1hS9c",
  "key9": "4GAxSp6emyAWgRByHsNmdNsZbr8yW77fgNQFpdBZwPHeEwo3Cgapi3sEKtK6coyHkTaq6XY6aBZCGSnEKTAry4hx",
  "key10": "4jp7bhZ1x6RqfoK5GzRag8jcFAmofbPehZij2fR1fq3As6cFvpHcL9UEfRD39indZFZBuL5swtwXiV24zBvDC9PZ",
  "key11": "5tVVi1E2TRzFsHFgrPKWf3FdRUR7TrqEZwUnX6CqK7ND9H7gBUputa3BXR8JAGwNZ7jaeFY93GDfithnx1cb7GKi",
  "key12": "43Risq86sfoYtqfPPoLja4hyH5etUmdDVLLyTqZKbhsx4QptJeU7M4aFg4UudAC86gptfSQssNKSQaMAjE7De1N2",
  "key13": "2L1dfJ2pEL7uUUGwfgJx5eE1EHaWYcrddHHFv6dWPZyRPwRRtVBBTPSKARATocfKzPMtqSvJ6T1VMMxYWHtFJ294",
  "key14": "4o43Eu67B8eGE9AWN5su4WPMHWqZxzfpiRdJrm3pe3kdTUCQXgDQK9XwKXCYKRThQRr67cmRCjsf5BeBFKHBGg6i",
  "key15": "47TXn6LyYSKTVM6zU7qKEn3Euh6hXmRmqxDnmwpRGYoBWtFNWxXUA5kZGcgcGpETN89PUarNFWUZEC1MgzNk1abK",
  "key16": "22gE9TNyvh5oeD1QSEUAnpGFXx3EZuUJydZHkQ51iYbCiWHDshpZs1ZFvmtKWL7Gf9GSLC5Lx94mkHCRD9edqwuK",
  "key17": "qmp1rxdpjhp9cHVjyahmNi5bHsK5WxRrEb9f6HfH6QHVm17p89NTP3XUCW1zaQtp4QYirfe8hG7otDkyUUXtx55",
  "key18": "FxPvQxFhhFcUQyM3ii4w5RFuqSRUcVSBkfgE4pdFscCX7Cz7J6BpbwcbmYYz1f8aiJXj9Zum9bH6SCWTNwz3XHe",
  "key19": "3M4tCea1fuedipz2Q8A4Tkd3eB4miECA724vFWMK7VQhzhA4MbjLg3aubUzNAja23mU8fm77W7jKpJvwkp97oH1n",
  "key20": "3AyPWZAXNQztVh5iZKKQE8ojP8TiCzgvWy4e6ZahF3ZbykUDsJaCtNxWLoSn4S6oEdvT1f1cmvfmw611n6hMZuLR",
  "key21": "3b1k5jY8TdeWzqH6GNyptDw3j1hs24cPhpLXtrL6FrAgjkYynUk4wTTEB7iDns4qKrqp2okYaBFpFWCmeSQF3spE",
  "key22": "5yrs5R9mWhxuWTQn4qrqBJJLwPeumxo51r9kSxJFpXq39gyavBxAhwNzqXZ5bhdjK7rVAddKn1Y8YktQaZbFVuRx",
  "key23": "47VgsgGw2nct5ybSgP5f6uPQPhzdtMvn8mj6WEwBofaisUY9F7tcKcXJHEJW4JiHupmCgmgh2JAumZdJdSrM5dGu",
  "key24": "tvNqkxg9SmLwdGXqiv2VUb6X1nHv4YdSbCSpQih4gzt1zb9TqeoEzBqpq1KmrBMuoMKo7rJzJxRCJno3Vr9Sm8M",
  "key25": "59zeapucMkEGBStkFWJofoxkuqELb5syVV1xrQwHb7bAiU7WRjBFVbvLmipp4CQsyZQKdtRxJb3C2WtQ4Z4TbRAB",
  "key26": "3VqnKMGCPRcLJixij35fryUhrYTSPrXEhzY82KrrcBNLEnqeXux1XLuXDoV5Nfn7usSsZ7fuT53zi2ydBJ8cA2qm",
  "key27": "3UudtrNGEDo2roDyZ3n4woreZbU51PSuXFMj4RHRaT7HP8v5iXLuqAkkw5exxhbQqZgea2uBtq61cwdhRBKez5PN",
  "key28": "F8VR7VavLQxrJZWEpQQVxcQTtTPV4WHLjdFHN7oMJVDEtK5dKXp6gxeZZymdRYVun8qsXzsdJ7Xvyry24eSD6o7",
  "key29": "4xm8Bj8Np7MZ6wWEMvZXXvQheUiaJ4nw64XT84ggj6SFxKKh9Cev2nYMPhZmcEEgCQYZxQXPWJEffx18y6CNuegd",
  "key30": "5a625dCXaYQ7WDoRG75bc9BEyqjwttZwdzs3dFH7r7KhnrffoWNLnpcr8LTxZVaDsJdPoUoXJZpdZTxDvQEcxJAe",
  "key31": "4ZGc3prZ8wgmyGY7mcCnwHVj3swTZGfTsJzkxzJRh4DwoTfroAqWmZvngWwwAbwdMBtRPWKBcFYcbAVJS9DDrVt3",
  "key32": "3ZTFaJvguykMh1dBseHRZa3jtoq9YrHaDYaAQSPsT7uLHG4MEujM32XnRh9ePD5XWdqMsWrqhUmjgQJ7X7TPyjAs",
  "key33": "zeC1g1SV3k8mhpXR3jnKCUCDqFQZ4gz1otmwEqPqnJHyHHKo6k77sjj1zDGNEktqNVBse7NPvougoYWxa6LAKTg",
  "key34": "4Usarbc2SDmjyabbHfbfCPCaJzND99eiBFbiDjJacuSrUcKopkT4x3gpJMc7Qebk1VRN5zYXsz389VLmQSX3nuWw",
  "key35": "4aEApDTHv6ZNJPsE3wA78WpZxrre5Jh7vcRE5v43eYNrEPikXvQcz2wovV7WACakhBa1WpDi1zgox22UFnSKpmNy",
  "key36": "3VRkJQPbxS9oHi8jTuLMnpdJ2bn25y7rkMRvjjhhF52247jiPVNZnj4hoCw4i22tStSiStRog3tDqPheDM36q3Dt",
  "key37": "51v6ZApXPwsv2n6HUrdAmgrkQ9CHNRfPFFkHSqhZzoeybTs5Ku5xLu2WvSrXaDGTQ7Fqs6FD2GoZxZA4seqsMyqi",
  "key38": "SrF6EetHQBmU8uMHzNrgic51CZYm94F8Aurth8kz2RT3qfERwQKQ5mWZTY6waxGXBMo7vb99skkF8anKsfPk4TV",
  "key39": "4bUXFpzKhsskRrjmd9B222BpWBHqCwfWKdXhU2sFgKTZbHmfb4P4o1SjhNMUnmKfiU99861FT6462imMaCfrCzHU",
  "key40": "5XHHGPutkV5EGv46GxoWNb1CVo57NHprUYfw7uqik9WccSE9SRmkpS1jhuTMTqQ3N48GX7tPMhXPLnQBmyGGbHgF",
  "key41": "2ui1tRAeweBDNyFxRh5bJ6UNqQVKiyHzDfBjxv4Ckbnsdh3ERJXbZGN9NduS2Kdtr9mqKsK8EVNEW4u8o5EuYdJf",
  "key42": "5MKeCkPk6ej4KuZutYK5AHEgRneBwKLcaLUEM1hmzgnir5nP8BHgx11SBT2aBXQfS95GMH3AWw8SM1Z7FhHncPs4",
  "key43": "332NoEvjmEJ8kdZypr1TZMnPrvAKBA2tZ2aqFMcSDnw2vmxaP9Wq9tAigJy2GG6yyhiwyWcpzjUYDT1eHBHRS5AL"
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
