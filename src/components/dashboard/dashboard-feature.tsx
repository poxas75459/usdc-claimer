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
    "4mu9PfxPRvGKxG1QpoYfQfFLV4DQV8sbpG37Gk5d7Bvmuzm51X54N6Ui3jXLXtJt6ePcSVdpVdHpi8CitgRRNLRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avCVrq4PzcjLvfZkVt3errbFMdzygMdHY85qNRsb1nSNz6vBfZYGXH5CSpKLZHgKyWFQyn2Bp7jDTgxHuKzEqLB",
  "key1": "jfTgHZZpkQvk5nfUTZiz15aiKSkcRDUTPxoAh6nwohmWfMw7nBLGezvsLsAmshp9U7GQEz3KnLbg9ZzSY9uqYLG",
  "key2": "F1afT2V6mjT6h5iQ4ZFjxL57RB6owCNCUsqq2YbQ1q3U9zE9Z2nHxtUqq57fGKPpwr4jWF2frM4BKXPrQHBCXCv",
  "key3": "3XKsoBoJQV1dpUgC7JGVBRm62PpX7sFZU6hFqLJ3rpqv7zj6cgKrz3ikS91LjyQgwaRFxtbatNiDktvrk5hAQ9BX",
  "key4": "JvewzC6g6bcvfiwKXrQwr1KN8Jsdmpf1LZaU6N1nPi32DPjik1u4HjR5yHcuG9nJU72uAx57H3wZSYgQXUd1MFF",
  "key5": "5Ff89n8ZKdK3ZknS3Zsht2dg4ape3HD2KNdAXim2QM3TMVrEDbpsACPMXj7pbKEy6FFcaTDRTxBY8EiWX2pz2Py9",
  "key6": "5BVgfNSLtVYFRqnNWdnrDvovgJYq2Je3PkVwF3CzQta8GceQbWt85yDTm8ycp7FLYXSzayDciKfCnTVkvGXRJ7rs",
  "key7": "3gh4VQdr7kxJH3gnE7X9Ytrn7t9fmSZzipypqH5izg6NXuPNBkKRjyv7dyzEvwcPiFYGVRMSDv1957jw719c2pJj",
  "key8": "3By47NoqiQinbwy5Jx3m5RwR62jQd8chGYUWp3nKCmDi4vgzx7t73XtT7CV44Kbdh4JFGJnEfTsF8ipZvUUtxeDr",
  "key9": "39KvppkjbcJF1BVePj2sdVBvAPALH6YhNYxa9i9RAYv3PzMhokJQFibLHnmfKCNT6AzNMHUepYqBpSL1crqR6Tw3",
  "key10": "5Jto2zuCsrzdURFCw7G7UiY9VKHiBjUBNrnDZ96v23pvTtWmaUfZuT5GaEKJcgzH1NnsqEhTa7g5TnjXVkd8ofcM",
  "key11": "654qMGbYgo7N3a8WzYRHQs5XG3MatgyGoHhy54EK3y9GsJ9iyWUBFmNPJwBSTKq2R8juXLsTSdEp8VWZU3VE6N3C",
  "key12": "2n8nbhZes979ntjaGfinwJogGhBNvov94ZyggsNtwkEQk7tbJ82uUrj5K7RzjaQDC7NSsEXuw3JRAvrFSEci3fux",
  "key13": "4a4oCqX6dabL7nfVeBkvGG8xZoXhYHJu3UjsPMqeWouizB7odYKSQ2s4RttU5AALQwo6yEg4NedMCW6qspHWGtgf",
  "key14": "3ec2U5gUTdB7AwCAnNzzFgLHSWAcGjAmewnPjzbSpMbndc128i6GBhWhigWsoio9ox6ko4tLkaL3aosUSMD75uDW",
  "key15": "4cpyB7Y6fzTrQsN8VxdJfUQrj5VBH12FtCW1eTTwCoHNKT9GZCUfdbU9rH41TJwL9rbhna5peFggcPwPmbVGLjjS",
  "key16": "2Jaz3DnH8xwxKWt2uGe8EyBAazm3ErGE3eorkmv7NLsqvkjZtzRNV7JKnwEeGqCKTFimoW2EAL1mdJpMHQ8UDb4H",
  "key17": "KpgUGfYfhnx5iopqeEtrHsgHfEJzKT5XhVAJahds138v9xpofxQ5yQ5Q6dxvENGYgfRwXuvcw6Jizr3vMRTKyAX",
  "key18": "26sz4AK7zoGC83cpD2t7mvxuWEeQwNVCXvLeHGKVNQkkBGHDCrg4rWW5V6VtxaodLYDm8F853YuGzD1XbuRADSU7",
  "key19": "48ykCxLW27jCiddeiRBLziH311D7dDyRg1iSjhgQ274WJpBKNuCmL5QxbrYDX8xDwgDizzatQGTSDKYNcN74Cadu",
  "key20": "65kyM3wWMQh8b6WsNNMUc3CSkLMWHZqErnerMkjkoeKk6vHwzBAoHndg6AfcGvuNdu7P8oqeTXYrtWSvuxS1RfUA",
  "key21": "3S5JZamsg5utFu57EVyWJDM9cHVkotvLq9BAmj2U5P3CgY2bMNaPYmMHm6RZSKEHFeWzmS9yx192xss3d8hBVDGf",
  "key22": "3ZH7tQPdtSygmrK8WonMFtM9Xqyj6fSvUep2sA7iXMH4EgYRKXQxUqhV9CZgEnZXp99P2UCAjbAat7SD2FWo9o65",
  "key23": "2vuspV89xHpXmgQGDP4tJqqm3GYeAv6k2HHnWWNEK16WmqeXjeP2hHqQ2QWAhJCMDN5TDqvQJPx9xKAwgmxMJt2k",
  "key24": "4zimwTvC6AAQr3SQjbkzxyothCFUCUew4KX7SA35tMfsQTuxWPiZhvAAawBgnvXifdUJQ3qcgyvhGzvW2bdU2aPp",
  "key25": "52qQYbFDavESBVNnH8RaRg2wL95XywfxtmBnPZts6iwWADib2AdCTgtahzzUe3YcsNLfVTGmK6CxaNZYkztLY65",
  "key26": "423mYZcG5fJRgHmFiq8RDDZssEZPxrmz4gvr567hgCeHU2WyJ9ZUXYxJbQMDihJnaWBKHtunvqcQ5qrhKnWLYCNB",
  "key27": "29oQaKLpZ9vgnM3sr6ebuyUSVLB2ptC6eqTmsxAsrWDTku6SEzdre2d9xt3G5ZqzhRDGLUzgCwNmtzK8pFaFz2Yd",
  "key28": "5MLypzaPTzAkZdvV5UK7YHj8m7i5Qnn1o8GtFbtJsGFoUHBqMYodEUSpt14v7iVeyDcfwejZGTUJpZYXhZqV2Tvw",
  "key29": "cuAzwDkiBtqtd7boBMbFo99pWAWgM3EphthHsUq5MCH1PbZVMZL4vYT9ffFbCYqFFrEXjmFGYiisUQtyzrRtvnX",
  "key30": "3nheRc4nr1kGhTxkNxNod3wmhh8je5EaoWLUFfDNR9nvAXkTAULNKPDuBdRcrJyoeGg6rnX5SWb6Xt9khAxFyk5s",
  "key31": "55FXJjYvN7SGr8HBwzaL5sC36TS4UU48K6xTfVSaGLfBDHCU4QXv8WANXhWGtoW4M8nsqrQh9LeggzncY3gnSFwo",
  "key32": "369kRbpVroTZQAfG62pPt3QCxYGCJRuz9cAFNGBHp9AbSW6desMZR91LSk3dH9TzvYyvUmQkTztSmLsa6WLKAiAr",
  "key33": "3DG4BEU2U8LErCiYbNhJN9JfJyruU95uVgZyPPXeGjH3NacWuFGdhdjhS1FSi9Fk2gxooraSiPMDXaakCzeDPeNa",
  "key34": "5PJyXc4ro6SoU7cRP1mYggiyH2QCqcx89tzZEHt3rodYBfVp7BuxsvVRUdUGHXMkSCebW9zuvzDubCRQNCq8fPEv",
  "key35": "24AM1riTxeCMUQhjSe3oWZ1Hsy77hjapQjpHVEpqg5ZbS1uZm8jzj7L4ddbSMby5vaLze8pQkS42mL7d95xL5K48",
  "key36": "4u7CeNtjrmuMz9LPq6BjWv5qTQ7CYZboAu2xtbKVf72dEEX8qY83bS9kyaVx3r65qiaEXarmL4RsfvgTXtkohfWJ",
  "key37": "5TibE8sowDT6aPfiPisvZKnWyXUzDL18XMSaWEAoi2NRYWy7rN4833N5z9b5dNDaoHQNiyynX3uXDUUb578thwtU",
  "key38": "2WY2uvqK1zSxK4TYYkS3g9M5PtUBfjLaDXWKvuY4iqwcDPnMYUsATfNd1idKPe1E7iZLYpTdK7FuRmU8Q91N3vaa",
  "key39": "5hEiXrLxNF5pnTZWcKyQxPAu9SnbCEDwkoqFfJXSLLkaiotdpFXLtHB9RfE9cFcZMKQLUeGUCb8CJWfwbED87g8v",
  "key40": "4vkesPJqAgQcXaCi45DH2MnyP8aa5rLBfwWXyv9ASpVJj1syBR71k7L1vLk1tjzAxrLxygpMk46SBqmd2nFhTi5a"
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
