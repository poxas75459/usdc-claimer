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
    "3diq9yx7wD8ty2XYMsvS8RHqj4ysmNvrXe4jJsjeyKLJtYWcSw8TPBY2vPs6VsHK7h3xk63Ejk8nQhH1pVHderY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYJDTgZXREPG5MYhULu9Zacsk5NNakShNPwcevuWEnvwh613EDuQXQp1CuSgXveGx5cych7j2wTj19HQbNrr9Kb",
  "key1": "5fG2QgoPMqUvHHTHNDd3E6bUBmdVaDsfYD2JGeHuxLhyDbYo2zCzy1R4b6DLfF4RRhNR9pvp6NfFE4WPr3TqJNeC",
  "key2": "YHhN4BHMu9o5SVYLJFynWBDWNMTk33WfxW4BshX7M8JdKbZPCDWCXuWVyN15WXUGfthnduZ4qDgUCLw9ktcYFVG",
  "key3": "ept8xz1VX6qEnETDzyT7P5jdEYURiXD53C7GHkMFbhCTSArctVcnhBR8iGLcvXrs5jSYTTjRU8jzq7fzwubG7sJ",
  "key4": "61c39r7a4LjRu7oZNd6CSxK2gQDqPKFe7dcJyBipkRvXAPh7tZBTfdq8ZAtnJzWBdXLoMXap5eQQ8KRXD3HSgDiF",
  "key5": "4nMM8uLuRq95SS1hwAYe7JFPpKQgp7X5QLDhqMbFBzbnknDDq9P6unaQQk7R5xhvtnLcyPiG6LNhC5RLpiEPwjR",
  "key6": "ZCTfn84cttRP33XhPTQ47AZuznM5rTdtCbobjWJDt2Fag8pVJq5Dmijhyk1riTMHaQpCGxiMuH4K5n7u4Dxyiyn",
  "key7": "39uRj9cWDnaMyKP58dAoVtPk12xC5kjcm5A293xn7VJoCdPSnnjxE55GQh6cHTtYyePEZwZTSgxb56TwQKNunEWT",
  "key8": "2Aq1MNKiyViFj63Kgr2m8UAc3f6M42XTK7x3HF8bqSCsnwPj3RYcRFCjd1YhXbE3x1oH4U1pDJ3cDN1PwZf2ho69",
  "key9": "5WLoDKD3Y8NWhFJqKGb5hKzBCHBEaL15dWwrEwa6jcPSDfJg9mNPBwrLKATj4CQDeTARDSDKZyqeYBSX7yov9uCx",
  "key10": "3euKihPssP1HYedjfMQqhN8enUev5BnNUg3ZhFGxkMcKV6ZFugzi7dVMMC9S5e2YfaWspKX6RqUPenHxL348Aku",
  "key11": "4gZJLM5sqKCXrbgCRfJJEvgCQGfdGMkENRTi3QCpjfWA33Do85Vduy6P5Vz3x1hkFCvNTFb8ZpxuRdZd9cwHV8Ld",
  "key12": "4piqpctiHA3pCnJV95LZiujGN5hHqh4RXgNZaSRMj14WyCtuhQmPxRV5khYqzMbLBSLRvKYMZdoxoLFY5ogz9sHq",
  "key13": "4ybnu63Dk7BuYrkwQEzDQvxoYpS9qrD7Ao9ajTA7E8FE4kWGPJSf7DHvzQsLKSDSJF69f9sQHsUPPEGDo2ermbH2",
  "key14": "4RsBXwZ9cmBtZPJzWShQuqj8pRBAbNGJsoWBuz3CtXAwNjURueD9twqWPK8iLByBbKvq9fJwkCUPnbpYTsyUV5T4",
  "key15": "3AGi8ejYxZGJnQroVFf49Bnih7FgXUamPV5RjRUo2fwYU38s8sV1nW9m7mPdtsBn4UppdSLXyFdEih9i8uHUmwcg",
  "key16": "2hSQgzWQaX9BsaYw2REPWxASRtadW9soLBSCxgLHvZHTsfpXfGHa2YrSjZnK9fsc654Gk31U2ofvWfc2NrDPQs8x",
  "key17": "4FeuQ3Sv4jL7Byw1c5xYengJLdCLr4g3X6YNFF3279CFcAhpfLieRrixsEMQ98vEfx4q9wPwoPvL37PEWuhH23kU",
  "key18": "5N2UdT3qPYUXvRKgW2abwWS7P6dAmXS2p4sfUrQCFZM4AXWEGeGFSN5j4ZDS3AFXcGAKi21eLQcc3NMDTgmZ4pru",
  "key19": "2Zi3bXP4GX23De46YoA5jAagGh9s4uy8LtW7eVeioT4trBSyzqxzjLf7qKrkKwoyjEBBMHF6NPU7Zy8oiNezfPpn",
  "key20": "3u9LYHoGKbMQWhPRsnaYFN1geRtEgmPL83F1CfV4ZT3ZKoGtVSoVYGPHyUmAbVo6jzkpjbT35HLuZncazFaL3Zu7",
  "key21": "pmVKY8vC2hB9auyTQNyBWxymmqLeTtZmwpKmpc6k21bGHG5ShkQ2A8hSKiFGHr3FMyZiC498ZNyGEWNDc5hWsrQ",
  "key22": "3Zr2W31tphnKuytHiqMVbDa9BD7winEZ6fMWQxk2U8Nw7iDdwi3tfMBzZmBCPPivcGXgzXSJynk7qmYs2apyZsah",
  "key23": "eg7uPCK7svwpS2JQsNhyPXdkVqH48FfNDBM65GrFjK7qq8qj2ifcXDxShSMLBHyTH7h4hWfT4xXhsa63jdKBRWB",
  "key24": "VHjhAqWmMHw9RkeeSBQvWfoeVtLD5P1WiSLuwYVo2nBhDMgJksyrD4tCupPiiBBVae2GmhikwaRNJ5ELt2V4uGD",
  "key25": "3FMtgVDfyFAKxdBAQUzWKABKTxtJonWD69VaMtgkUon5inW6uxhVc2UX4HPLe7dNxPRm7AxcEprnRSzNjGpnCQZq",
  "key26": "iEJKorm2QrGEPz2C5W4qgtXRYfFYSAYVhZrcYSxWqpdoScwCpvYuPrtc9FkYTTwAeCWNR3xLVh5AKkw5VHpVPNL",
  "key27": "3bM6anSW1Jo8tmRK65ppURh2jE4s4A3kcm5Y7j5qGCjubeuTLsNvsdag2NvdSvqQh6PKns3AqXj7gdGbF2Ns7Btp",
  "key28": "2bSxecMgZY18vpATwLaZXVxSy6a9sDGsPhGGi8df6mNSxCnPDc3trBRdw2mko3JqLJwMSkcMuJZgpBViXwi7Zm6M",
  "key29": "fT2DLJMTVNx6ezefxF91Y1PSP1XUDZKE7jNGHRnakGeMWtn2QRPJE2MjeoNYphpEhk4NMGuta6ZUL94q4tYxvqZ",
  "key30": "qTyKKSy8gFCRj5yUd57qqpcJoHReTUv4sfJ73K289gxUXWabteR3Bb4xcKaj7JUoCVJG2xbERCSzg5shRc28F5d",
  "key31": "5YCTPNRofUQ8ecCMJNgvQDmR2xGyP4ZavshdSkg5A8A6erx8HU1QfPQM8yzSe9PiPcW6C5JRWdzHz25cNffoF8Ns",
  "key32": "2HJ3nKM865fsk5jqW7L5jUSLN3Ws5XsPngnVxm9PyPZmACksZox4fnE8XSZcFGX9yqC6jFxcKGmZLNV83tf5tsEX",
  "key33": "Vd5uFsjPY9drVz8LGBZHQ6YGh3UznrMAovFuvLHnez4QgCZMRwc1pW28weVMuiE4fZ5TXM4P5ia92v5bcCDAbfJ",
  "key34": "JeCpJdn6W923UQNfWvRw3mVH4ztuXhVrvi8CrPjD1pUo9hWVaHErmyMyjKQaHh18CKkejHLhzCjxS8DxNsGCAXw",
  "key35": "JFN4WBDbkUrNcWygF3oohY8c96SAariBsSZ51EWkwBWqTrmBaKhHXhrf4wnv5XYzmXG9n2nwnRVFFmHSL9r4EcM",
  "key36": "2AnZZAECmA2UmpSpUYQr16CbaDAb17627aLPBojzMQPySzHg8Cc25rZiUwvBasmzuBvq9PJSZH6hmUdSaTWftjxH",
  "key37": "GuiQ88RFFtT1Snmb7u61gffzD3yEnPP4NeRqoHyp6Kjb7fbFoZ4a7r3YV5LcBvNxSWdNfr2VtgUzzDxcQsD4TAF",
  "key38": "35JfuvntYzqe9jPNpc24JVBEAU3AKnSNXPqyhFgedVqZ6aV1wUrb5sxfLZnVUYB1Ew4N9AcBCgA1UH1zBorp8As6",
  "key39": "4obXiXJU7jyZRL3jjDKCwes2no2LFzqptCctKshN5TD7ggowFaJTgvp7Tw7W18aqFREmM4pqJQfxi6LpUNinuRny",
  "key40": "3f6XMfr8nPZrqZ3RWRkq5pvWYh7NM6r9VyvfVVhfvmTRJxqQm9gGVwYjV796S968h4gFpfBdT1iaEygNMKKafT1C",
  "key41": "5ZP6kbvbXWjHd1W3NtKmELD14L6y4v83iywPdv16bKkp23vMktfpfxDW2WdaF4xt9VLxUWASJkRBp1aBM88dyZWJ"
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
