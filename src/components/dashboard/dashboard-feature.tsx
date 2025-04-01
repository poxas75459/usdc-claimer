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
    "5XK42AMxofXattZuRexccSYimw2pyARrHMiKmrBwSjKjSkPASaKqk26x5YmmXwzCDqgeApMWKmy8UykYr5pDnNQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjaXobD4KLHDoSbjiqyCWVVw4vH9kTfVfXpi3gtcxYL9ttYKr2w4zZMSpjTTj4eoKifvuWBpQ9pzesq2Pf68xMN",
  "key1": "2mqFzxPgncDb47TAXpbdeq1rzDcZKS1B28cFEeaBBoLJhkgzhCY81MzJzBz3SrkyYAbRzMjRF8iwKqZppSGCgY7n",
  "key2": "65hYBkqLHJooV46FLGZNttTjMyJFgwbotsfhVVoQUEtkC1vbuEmcrmfNLhLWaeu6wvnNsgzaiwnZNcfyDCu99Av",
  "key3": "4Nw4pAVMcbrnYrF27V5AgxV8T9YKgGywKz3Ekz5EWRboxEWuoQLJcfExdQLPq1dTpqZTYMFnzxBNAxTGNPqS3gBT",
  "key4": "434cLRMd9dTyULGWvykVudstNTizFZ3139vJX7eNcWvDwGAxg5EkcQ56QZY5k2J6ZBWxZadY95uZonnWC8VQEs7s",
  "key5": "5TPqteQzLwEVbK75D7PMxyY9hybTrBC2S53Re3W1Tqksnth28WCk43xKhqfWAP9Yt3DFuGRn6itrUMobH98qJpEY",
  "key6": "4RAo5FEfDGG2M1YXoG9QyaEj45VY4wfyq4upBZcKaPA5Jrnnd81KMe9at3gtMdZpCYcCDcLGgv52F1M86uFMj3s",
  "key7": "NDAthmrUPQB2Dahzfob3GMaQBMbBvGJ3spGCxMkdg9HTKWxhhjp4GJdcZQJpW2MRy8jTXkXxontwPByZqtLoZij",
  "key8": "2DuydXEHgKHMnzXSs1qGFcw9PPnM3UvUwP3GPqL1R8kRdWq32ZZV9u7R5Yypgnhnq11xhDrjEykSSXKqS45QEkuV",
  "key9": "3X257wLTUNLKjUuSbKJDP9mWyybzrzYV6MitqcetHgYmZFCg6Yh2FDphGxahW5qrMNcCbsxDcR6m8S8fi9icPbc3",
  "key10": "5ZUfiA1hAenvatoQMKza4FLCDNqdUAkwTX9bWGXHXSqcjU4rTkq9QghEFSNoznmLBPkd7UDSfJ4QrYxQg1rzU7kZ",
  "key11": "4wx22uMzorQwviXkDabkDR2s3AKegKSz7PNsPb2JongihZyiT5rvhtKUjAwaGtvDk3SDyRns1AmGQwyXxn8zXgkv",
  "key12": "4uyqBSeURttZReZg4aoRuiic3FdHReCKd9w9CVaUdnPp4RVf37rpxskEGU3T3ER1XegFVzHAR5hSmhNR2ariBe8u",
  "key13": "3zXy9GWAV5ZLtNwbiFUHxb81LVkQag5wn9ZVFwCoSUi9PZAEKQX9N2sUJPCk1C78HaRDLX2hsYoq6quB4VoWegPZ",
  "key14": "4LELVLvxFtMynHPQ9GAupQ58QvbSy4P5mYE9eghUpB2PiMPNMQciVfQL9UCE85bHkf55nBPREo2oxURoZN7c4ifT",
  "key15": "3ZeCB3pHri8jVvNDLv2DvmsQiYkN3PDXnWhUBKxeYTwFWo9sZEzxWQXbWwVt7oWMr2SRs2qkySTmajpf1PEaByfG",
  "key16": "4RCwmriNc6aKMEksz67PfP7ufJrWsMurCChduPX2zEyTZuxwZH6bSoDwepnvPwgCGnRmpCtS4xXDDe56ktphV2uB",
  "key17": "3SLbK65t6Z2Kx8cbiJUPS3z7DhDjVPgPVFLo7mQ37kuej1kzVqs1wRFvVRtSswWaxXAEgUge2qS7cR9BHc26W8DC",
  "key18": "4CDRZvpyh4vyB3uxA6h9ztKV4pwt3oShTxXKYRYbQ1e6icQmh8vSZcyEM5vVY3ExKDtTS4YYijobDtejaw2qwuE",
  "key19": "39WySmD7d52AWqsAX4yH8hGJHS7kQhotgrTu8sc4gDnRaPosg7CW9wFps8DyHRqV9hVCr3oN4sxmSMvz29XjZBjh",
  "key20": "fqvm97MEy5rLuf7XFUmLQ1HdA6oK5LGXDMJgjHe3o5Matzm3TXXTipwBFe4ghZdpMKDSNcULbeogN8UM6CM6sM2",
  "key21": "4TCo6AcGTfU42v5Z5xCw5bZWCNDkVYau4E6CjNE3ADorC7zmovCXoCJQbBbu8LA5vcfGVjkaa5W3EPydwv2qVhMu",
  "key22": "44VNqNnxRxB1FnQZXsuCxiv3nwM6pjKqhgT5bLFB9tjRS3HxEeJGPEp9VSzqxPaRYc9hzcSQnDNbHK4MR9JFvHVu",
  "key23": "4TCB6vWANH9qxxv5B4nbwvDSeauScyZMmB1jA8LaoE87ozqfKYSjssyAMf5nkGG1nLC7B1SrJLLP3Sque5Qymw9r",
  "key24": "3U5u2Yfu5iawF9bwgSyTjnb7JQgi3QZqE8XHootmnru3EFkZD1Xfvyb47MYnBmncYdLTPnyWMnMvMeRacfackDTE",
  "key25": "63HJr3Tmqfu2wV1oiNqDvvUJuMGubBrvGCj5EbpfhWBUNZyykkP19jXik3CncqxH93uHu2U5nb6wMb6jnQgrzdSY",
  "key26": "u3zcDse8MS5aeeXZAgYocXoiJGGCPBishM83yCQyS5jQJwLE4z1PNSoMy7pQEPwHvdvM17rcXH9jfLoiU5xAB6n",
  "key27": "2gPix5pPdKDTpebXqFjd8c9bk5puApYrLB3YUcsU8UJcbL9aBvePVwpTPYZBo2vQkyUBx9RM4jrCGP7vJxdsuc6m"
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
