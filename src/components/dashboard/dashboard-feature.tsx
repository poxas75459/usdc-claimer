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
    "4nfzUFCWu38vqafYFLAt6DgUXyqQ1Krj5ckaYi71NpLThPjsPrkRukpiUpMgb6THNCjDuaMGTSPLsDwUmx7zb28v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RhpE1VNXUkX9VzReQhCD5A9JArmoULDD3ihcZhWW4yjcUy7sdnWXdkLkPvUQHQS8EsJD3yxxPVku8GVJXUkzQT",
  "key1": "uiTp85Uaw4ihUyvEGewnuwkrqTmQeA19yoZWruhK42wnR2sfSM38iNcTdBKWRMLvMuWP2frQqTbBMkiYrHZEJPR",
  "key2": "3zURanabqbjHS9M8jyeUzcUkswaYL6mdsaReJ4bYGaDVMMNnPACAafHmmUPHy2DrvgCdopJSEUF9o2JFzvTCjSAz",
  "key3": "31KcWs6i3RsXJdrj61rKvkMdKwp3RDVdLuPbxsawFwhv1tmz9VuYLAWfKacBX7o8TQnB16WnL171NbFkkFqDitP2",
  "key4": "5xjvhmNhy4xov4UcuRn3r2S149MjxJbrEoAzWahWsD5kmzva7Y3fz3CrnAWGi6JKdo6QG6Rt8GWfv7Wg7vYh1xdV",
  "key5": "4GLzf55xUWdYsxN28NQsa5byNhVdFhNxbHdjfocrayvfVduCzBC8oHZsKQRohhy9TfMCF9qSJKXRfLhGhrbykZUS",
  "key6": "5m2A4rjSJeNfh6ABAaMHG4joQmFiRHFPy8SMUcwcqZpnFMJ4RTFW6wJh7TdU9VxNi3QS7PUds7hL6XgfsYGQcZSw",
  "key7": "5cBkZiD3MU4EbRuV3ZsKuhRyC2pMV9QR6gT98nmzgoDpsr21GpFnUEbjWvUesw8bsXFsjBDhxR2KnNzSNHUEyHrK",
  "key8": "2Qez6fZD9RGfF4G9yUmFPNWJitTMmRyG2rQ2ptzUCPCvnC1PasUmyDEJZmqE1kTmTirgNkesuag2a2ajz4Veke3k",
  "key9": "27MUxHcBT4KviAfnu7nN8uPCbaNzfZtKrEvsEcBhRc4isFBUqqiFoese3J96r2akvAGadpAzdhxk2Pf27vTjcL7P",
  "key10": "2v56jLGxSRBnskkkSkKD9Gk6jqKbFGdZyQx5h7WuBXcdf2NyFwQBmmqsW4ed6DF88qjdDRLbCjDuZuZra4gnnn4h",
  "key11": "71CbNAZH3hJTWLGb95TUQtqWQCrjkfamAbSMwXCxiAb2HKs4mWRPh3VUVBY4hhf3NVTwoTseMRiSmEwAzWj5Vcx",
  "key12": "2rAnh1JkaTUZntkVd9o1bjWgvuvV7vquyu8267upqrwJQT5SZhxcPhSdoRpZfaXpze7oyNDSE1wfHtf4Rts9vz7i",
  "key13": "67zNsLAGhGxXJbsAfoMw18oRSGFyAzabPnbC8JczSEeu1bKMxnWuhdhDosPvVausgcvrf9c82ubKVfjKgZo1pKM",
  "key14": "RXZoWC6bJvYKUKZpTuoAZihdJ3MnVmDDM2SrGavyCD7HnMaDRRsQnqJZQxGfrJfH3X1QzuztBocNRrLL6BKUqaF",
  "key15": "d6XRJeLU1WEMSpJpCctLkaEsBJ8hdLvvLvtHjRdk8DPAsuZJa9JKRqAuiecmoH1a1Rkh9Qgr7nwebrb4P9TQc9F",
  "key16": "4WWb18NSddAsD64uEuERTBe2xnThy4gKxaf7W9p9WCnv4u4wXHdPBRwJDmXDm48v4pCN7mhMfB9e1s3wfG1WefLN",
  "key17": "3Sz2D9ntLs5yTJ2LcutFzqJ8AF3qWt5QXabQ8zEQFUq51jpcgvozR7TxbUfCH8zfoTBARS5s4N8uH8nDSAE72Gfp",
  "key18": "3JBMB5jog4DuD3vXAUbU8GVfWTBQ2EMxZdyj33nXbNH9RvK7rnkJbS9pY9pYQV8USSXCrQtSBsiLna739XSt6N48",
  "key19": "44BnLpRV2dfys3LQZSn1ABHYQ8BnYUnxXZUt62o3C7YP3AnKuqsfpbREGVox83Y79wgpjYvfvu6XyvTiYiuRnZ8G",
  "key20": "oMpirFK8zrr4YkNzAdzp7XVJrjRWfKKmHWy8xZy5CGzDfGHUwxhtL7GfdFu72hVSvSx6aHnvFPYGcPeppx3gDRh",
  "key21": "KybU5B92XjNCBnbvZ5PYPFRSpJgNf82fEuZM8isGR9nX7cVpb2LFvY37DAzaAXKFYkZKY5X19VvYSf74myRg5dN",
  "key22": "3zPFRvZuhUL1Y2VBXphmeNEwdmf8vR4rK3cGf1GK7kwR7cX2m3zNh76Z2tvcdGr4qgP71zdMs1NzHBDSC4fQujvA",
  "key23": "6MDfrrcC2STE56Rz8orw7qy6JHTLYBYhUXpRFSCgANE3NNTghqEdCtBnDPMCHhbz935cQADc2gQm3j5udhjvRSG",
  "key24": "5saBrHnNmXWFFccxdntyhuggdcjuUGPJi6H9dwoQ3KMwtewXAPjAA2Qz2Ssrjw6hkQrP6D4W6evFNv4cG5Uf6f1d",
  "key25": "3CfQAAcTVnzUgitZTDWsVmmxyCCDDh5AkevjRMkEd8P4RyYnx7ZmwYbBwfobUfhPoSziLWHoXw6aWgdumhTnMGkg",
  "key26": "3pPWgXQKLcHu5PQecdJ5quZtY2B1B1v98DiHLn3yNtZXKXJsEYufWChdYvA4GT35gxWxGupsVEroyW6rjsatEYDS",
  "key27": "WVsvvsMkF2Xu5ZRYDs58cxc2YPEr2ks6bfREa6yPTtcCm5cGUc61ShLxXKuZEB7SdsoLcdH34oPJUWgbyrkska1",
  "key28": "4VXhwkUKmH2XZQB7dSc7d9w1Z47P4Hn6ULJQk7WoRNhf5Vg1N8ksNPJQ1VKpH6SELUNYjgdzechDh51groE9xVSE",
  "key29": "2GLXG8TpwLc7Ts1pchtZkhdymf5D183YrZmdVsUQjGdiEf1GZc7uLFRYi6KkeEJ33RZo2X4fhDXCCC8rW4Rvnak4",
  "key30": "4ysG9ZZCyeRMhT39Ug7f4xaXdXPJC41JRnYzVLqQKMMXdcsa73PthegKkwBBY8peWFv44EYbmM9etk3tWkMA5MGP",
  "key31": "2LpCVM4ADhQpFTmXq7KTzVaWLpDVXmzeq6vyZ6ucg3yNHbkmgBZV6ijQW5erv8kx8jLCiJBor7e1JX8SbzTPcyfB",
  "key32": "2N2rRprMAtPb3BqYGhB2dxR18MQ4wdACh6B1SdbXwceC112KuMPyGFFqWsrH1Hfaohnzx2R9EKkrETCN2yy8uJ5R",
  "key33": "356gYkXnoRhQcEZQ3L3qprsSeji5xJZSp5QjMWgQ1LZQ63uL58s2wfsk87BPfnTexRbo8zhAD6jCtCBzayiu9xwm",
  "key34": "6735ek5N6Pf11DEyTiM7U1KXrxBP1sLagFpgebE2SuxkxwwXrCP5tHdpyUPP5HQtwKq4LkXQeXKpQdWt3iELSUrt",
  "key35": "2PnqLAoQUj7j5yJrm8iEox9A3kvAFCoFqfC4wJySj2aaRWWYvhFmRr3W87szPmx9zKrg7zS5g27jnWXHmqtPxzv9",
  "key36": "2o3PtQ5mq1gtJxSiJRhui79bs6eoXUEteuMAhK8X8sNdoXGGnXXGaFhZyUXCvuRrFexuDpps3Abafu32mnBZT4HJ",
  "key37": "5a18nkaq9FYYWbEex76u2ZoLVJsVsbdGWZi5i33szwyN7PDEPsUBXyjdi9iwnNhbPLXcSGUSt8Kcy1NAQgvDL14r",
  "key38": "5p54nMboqdqPtp7SG5FHPY3xgMqC6pUhYtyik9XQ33B8i5ptGgEMyxVrtDDJij6oZdXDyH3BcdczfW7magiZkQtD",
  "key39": "HAZhVAewgUwRm5LixUdzSKAEZVtbG1Lpz6GRFvn2E8dDMqrBkZzZphG2rrchxkaVEBi6vEiMjEfeW4rLPqW1pSZ"
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
