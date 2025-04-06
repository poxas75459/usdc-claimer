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
    "2KjvsXJjviowz9Cd1pG2CqTZEenrBrGieMH1A1vtrDupZZBPkQnTDtBd4wuEc1sz227YxuDdwuex5v5Mtd7rMV9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nm3FmRWUbYgguzzL1CxFCEqvrfWQ92oFciUSq8zoy91JP3EqFmrYyifAnJ45uHSA6PtNCi8vDR6ja3mnQon4MJP",
  "key1": "nvAsUW3uRWJSc4WZ6JQT5K2n15MHE996V9qFL5sUwmQBJUfBCR5QKndgMWYDr8xhzssF5u9VPjKTocXUuNDa9gz",
  "key2": "63FDFAbs68RnmCgDZQwSPw8uwg7v2fpGL8V9oQrnAGW8bhmbBEgq1fhD7RXEA9rHN7M37UCXrDsYj6uCTjYLhLvw",
  "key3": "5dGe12ZPpMV8Ve8qpLAuPsktPsGR6RQzA8h8a2nz6MnDz1yGerCguUCMbZEs7tbwnp7BfzpFTBqtEn5D7o1eSxri",
  "key4": "27qf9v1MixANz168SsS91gPRPkKMXMBZmqHkavpVLGMJXH2gPvxcNYrCK79dmjAqKVb7DALgBNDnZK37osSCK42v",
  "key5": "5MU2zrNdpsJek2pcVB4CaCUQ2aQjVtpyFtFR2Q1bg63TLwZcWmoQtowzBamXCm1UQDmosgnKizhq7atM6pguABDX",
  "key6": "4w4KwHuzpMFnKKK4xwN7UNbXHY1Mv7WkiwDaiC1cZzNnCgu21LbEiq7KcxHs6vRqHEzgPfEurhxaEMfCpvzvA6ge",
  "key7": "3aVfjsAVdS2qRygX9856QZSqq7jS6rJN8pPtmnYLfqvhdNcY1WG23PAQGPc6QAZcsMzTeFJKo1ytwuwHAajx4vuw",
  "key8": "4UAaqyR48xrTEq3QWsAYygg7CssF9gaLBfr24GHHd68fjSFWFbdS8U7Fr3ich2YR46W1jVLWGoJohT88yfCWdW2M",
  "key9": "5jp1YdYhYfx61kJoXqmRrrRn3QCqffyHkL4d91HcTKCExvPzhDCjaCZkx9jntAJFudGmJ3TnD3mNUA5Svjrkhq6j",
  "key10": "2hE8EsGsGrTVkMPER7gDGw424GG3DnYMbewaTr3W9E9NqoxEmnmbhKzhXDeWeoJ9r5LFCVfMYZKcN8zgCxCMKtZe",
  "key11": "4mVXBnDqS75EBxN916rU2HdsVh6pLm93MyUjEHdmsMGPhhd98Gj9ZbnsYgpmVWuFFn7Meb9is1Zc9U8je1RYuNt6",
  "key12": "GtwKGAscy9g48v3sNoxf285FJoTXPgap1FbGM5KtXEte97u5P2AHCjv9X1C9tJ3WrCMbgtoHRhGpY1mAK2wx1Xt",
  "key13": "GyM8KzaXtUFV1W7dkBVBw2KHubYowwzMu8TdVq6GQj1CCnWbN4p81abLGk6ytTk34fyak5gCyKbieeATJNutNPR",
  "key14": "3shni4cGv4nRqf2khjiSaUZTbUBukfqP9y5ea12rPvhAXEBT5t8Hk3uZ1fSwzr8tvzvFoDKX5j3FRgc9ubp1KYbL",
  "key15": "5rqJkbtKbG8jtqJkhCqM8DWfCvopAvx3viftpANB45WMMsqzUzhBs7qakyLe7URVScqXKUmmF9yjWUEyaTM8jUh7",
  "key16": "2wM5pB6iWg4GveQJjHPW9sBUQW7zHUc8S58j1kdfaUNeJXsdkqKqTAezfQFJ1U9gofGGGut5fapToXMhr2h6VYox",
  "key17": "5kpQATaZMaT84ACjP42YkT5hBm4DbmEzNF1zvspvLMLXKKXN4ajfkJbpYCWtAspCW3ReJ2mFCTBRVkDZHg4tHYyk",
  "key18": "4f85jByyREi9RnDJNFU2XFrPE5zx1JzgsAeP4PyJsCn1wZH37g9ACYBmmTto4dfrHxsVgyaraH9g63dFViVwVc6i",
  "key19": "tJp2wax5xy8kynNop9yu8Ywzz5ob6X3ZTS6wt5Pd5Dkfm17guWJRg3CgyZKKV9BKpGyPr1qH5Dk6rWN5LA4VZmM",
  "key20": "RxQSvH2W6srWZr79vR3hvpb8DEHUak97NtNvGBWP6n1VoCKwn5Jnxe1o3UhPdomekogbz38fRssMXfcAQNpp9eg",
  "key21": "3iKAgWctkmw5DpTZrr8Ag1BXdDft5fEhe8uLbziVBPv4TX7GHGPCpqL63L6SQwxVVM7yBBs48ugVnUaJwixMHGCq",
  "key22": "2iyJYg7kBtpx2ne9pioWnMutNAWQeNvVLqhSnkvkvoSiTE21NsYksQqbBGcHcWBEyK13JYkirZiBAnT7aoC21Ee",
  "key23": "1eqreH9EHtjVDEuEm6e711TqawyBHzqYfXYENinQZBqEiXi5VYsT16nbr59xv8vM3WZ8ezjFZ6C4ERv5aKfrnDn",
  "key24": "e25PpWGkUKKd9L3yKikKd4YPkBjJn2GpYvtxEtqizd2VGovrRUcgnJZpjBVtWbLKYra89gab5iCxARL7RHNWp8d",
  "key25": "2n8utnvHGXSY6Qj6sSwnnkj2e4hV4KxnWpCYnxw5EcVQenPVuA7f4df5JC6AiBLUwUXkQpMKkHTAqRvSyhqZahVo",
  "key26": "3gKS7ykuJ1aNqzNjD1B1PTjHgDqiWcq9q3kXJAkxi5WXEVG5JqFzKkuU1EFpgzasBmVzgdprYw2i2wPJR1FnisTF",
  "key27": "5BEnRUe79dAihrbSJGFbgCtEV6gXj22CnYkeiwMJj6y1W5QJoehGXXpwVppEddFFtoi8Jb6tH6TZBBk2UK7n9bDV",
  "key28": "61hADaYEAGrHJcSScWV9etBFuJTKu9WSMztCNWf57rpWS69RzoEgeBT88zeM2W5eU3WPXB3MfSvt8WXq5fd1Hin",
  "key29": "3hVcqYquiLkVZjMNfjAHufTSBkNP8pKioFgJSmgSuDcYNEqVVm2BsaaWdfiJhPeW4tBM7ZhjhGpo9LhvRqaArN8i",
  "key30": "63HfxQH7fwS2sniDbYGmktjmUtDintYMQ7P1cmZq8Bb6ZSR623UfJUqdjVY2oYTWzExj3R8D5WiiLoEAJFqSvwAB",
  "key31": "5xG4JHbi5CdjS8dbEXQK1xxWQZzipxTnaumZzAqpJ7hSV3iRDx6qeqfcRBLmR2ASjZxRcswiXZp1U9HhtD2h3zZJ",
  "key32": "jwLpzyp1NWJ8s5PjTRpP13vmUEvuV9ZTRVdPo7RtPWVk3sMsnbGtiUz7pHnamMGpmghMEk1FbTiAej4QxeWopYc",
  "key33": "2fYaT9WyWBYkJu9HVMWfnmfS5vTv21NcoVBKJC4tN4dYADhEL5WxBSF4EYgmmUYc66TpJ6LctYz3qKYK8h7eNrXz",
  "key34": "21sbGeQUNXEXDJZXnN3mqYvxFqnt2TXNfLe4wd1TFjDenuQ2FnA6DWtAkfyK31PZezBTY2bZ81gw3GskHfye1pUb",
  "key35": "3nLmed5zZryDMrdxjX4RafNCR7LURdvULVYtoE76WuadB6cTLvi5qSbMecu5mDc9QxnBEndC5dyZc3YeLkZQkcv4",
  "key36": "3KLooUg32miJbg1fGD3NgWGmTPw4omYq3jHTJWbh6spLNCw6QS1B5ntwRqnXfwVHjr5HT4wYDzcuf3ggEk4VNpMJ",
  "key37": "2zNyiHsvfZ9Gxdns8tew8F9N7HS7JdbaicLSfYjHibxYzYTD3QdungpDxyNeST5hQRnh1JnoyEfynSxUDwnXzt8a",
  "key38": "5VH5FziHtxywqfkNHSp1C8xUT7nt5CxrySFqsd1GwzusWYGctZ8bY9Z5j8y9hZ1ZDGVA5DJjVPsf5vCYvKPHz9NS",
  "key39": "4qdBvCxop5UytVV8BDd7qYwMj2RcP4ZR9aGrDikAf3iDYceW6p8y3UREjhoC3UoDtNiRtsS53YPRd5LRZvX9W9WR",
  "key40": "2fJBc6pKjuB5ogifKnjgJXkV1aFBqJwZtsFmoCVARgAc5Nt3BGpUCH7hXJzhiDtfHotobzDpzZ2ou77SS9nFKJWU",
  "key41": "EC6MbdmFEZz6h6MDUHn4Y6NnbHYQJNDuy86vjKNvpNyaRqrPdGZJXQZGuVYGZ3Z1NPMwHNpKQnyhgmnVDiLpvpg"
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
