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
    "4G4XcqX85Y9fboE4xJMEFBhcDGyqrdTB1rrDQabYqFpvijRijPUxddwr1FzPsd5Z668bEeLR6HJ4sJ97YyYfkRgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sj7bUwtArHPiGpneZeUcQaLu17Y2P4DFM1jYcNEveFyaYTDJTsXviV6jtrg4FXBisMX9y3GHYhMkruRLZDPGk26",
  "key1": "Fvo2ULX1xr8VC1ra64Ljyj8QxwBM5FZCNrSABZAukk8wm5vTa11PGKHNXLbMRRSW2P6qvNmregYTmB9V52uvNaA",
  "key2": "2G6XtaBDGuDh3Rkn8SUBd9e4kKsnJrNq5ofoXi4YmZV7ScgJ1shKeJHHxYL9bYm7RzCr9hoRCQzneK31kTT8wpdU",
  "key3": "3b9px7mXxJTb2dn3j9enWGcSChWnATwR4MhL7w8CKmWeMrcPQMXWqxstoP9XVzRhH58qNBTUsuLAqdoRhGxB13Xu",
  "key4": "5Eg9fLnEYt5VtqjTYR3wogoJSDQ5YtE84iTn3XeaatuJTcVW67PmYGeHZxTan9ewVTP25pYN9Zwxp88e6RnxKUoB",
  "key5": "5K7FMHBm1wahqTVi5c9bQsxB5Pw5h7o6r1aF8Lyfpa6WnRbxUhEvthP1dXDCR2sYUMyW8hXaZ3PwoDR1wqrM1eaF",
  "key6": "5LieRMaUgf78oi9XtLBHWfiYBHkxVUQYv1CbQRWaW3Ro1BnspW5Uu6k4dHL3paWTtmu5C83iVGm1bgHcdDYKxbD2",
  "key7": "w3nexEg52w2eYYUDWQSgsPFXGXhQNBfsjN9Ft5yq4wi35Ds3eaAWhbMYrez1VmcPm49N7VWcH6FRndevyWuDXyD",
  "key8": "5EoRSc9wsQM1s2ECXUxoj8mhaYTi6Nrs6tRKCaf7iVXbmpMS2Ukg7mbvZLYwJsjDVRgz5m2dXHouBVVfz7ufiM3e",
  "key9": "3Zwo3ZRXtzumBt6ewMemgwMc9jognTRRg6fm9KJ8x5dCPSvkoQXYV4YPPe4Brgf9H6LXA4pdVfGLWYHv9HJMjAki",
  "key10": "uVCHdxzr4B7d4M4AjXBBxXgMxnYW8qDDago2PFbjbhWZCSA4phfo8vDvvihKUAskfTCDyCCSAbM8KReNjZz8ToQ",
  "key11": "24SKBKXsY2wGNChzjc1EjjW1F42LUipMSHU56Tp43K2ubDsYiKyjKibrn4NM9Jsf7D1AmXyTuqBFEhQXQZWWRUpJ",
  "key12": "4WEgUn6veMKHiwAG8dmBcwbr28pVcqRfVYEscjFaiFAnFNLzdrkV5mBnpzRq7RjvScC1wptAkKVGYWxEsu2twAWa",
  "key13": "5Vp1x4AMhDM3d9xtThwDErf16GYxRTqxyiESBChkKnSxWtTMAd2wU4Y5cwk5puBVLe4AWeJpJ8zKiStGFB8Vm5Bo",
  "key14": "4ZEGnYNB8C6PrfDm2ztqhDBwHX1LSLyYnAP8p5kLUUUwKxuWLHdDRxwb2LBLRXS8bSVCKD8sXcfuoQsvXdQ56Xtr",
  "key15": "5WJhVPEsLAc2meYmeBD3iXFw3KD1hcqD766r1PPG5AUFPtaeshiTM2bxxY9LCRNmEmrE6VvtyQsRfuUJfgVhn1nk",
  "key16": "2oY4YLtiwHdMPMiSyF9979RpzMtHXEhKWpPUQepdGR2BBZnevURGntkbGL8mTwYFB3XqwpX2fzR8gnXSHG6FYEzV",
  "key17": "5EcpUcfttnyhFSn3NeuWt6sSRiGQbpRdUvtxnxQBrhyZvemtgG9pTh4GKNZSZphxzKeKzdhAYJNbmA6rZGkhGLcQ",
  "key18": "3js79j57fcWn4NS1drwN5NsxztyWtgMgQFqQygA5a3iR5m2d9a1dpNCnS2oydJc8KYy7gYsQ21riz1vGJqU4hqw8",
  "key19": "39z6fTuB7DnhUbZdPXzbT1EmQegN4o9bD7FBmmL2qwAK8PWkfcbKbKbVzSHEQGribEwLdriuWqLuSS5hfR23LxVg",
  "key20": "SVBzwEkbsB8nBT3bJqLX4YNruCiU7XuR37ixACV5Lx6jjUQtu7sHSEjpUxZJehaQorz8RgiLNS168epM6xiUZY8",
  "key21": "53WFZ1BwepJhzVGuCZD3bicZcvxV99qR7RsWD7hYERxdRHqAyTSRXwcysenFi3Ct76TTq2GA6QRTV8M98syNyxrc",
  "key22": "43M8RzqckiF7NW3EajxyUJ4UBjkjPwdhhMgzpmkMFJuZ1Ts6442tCqhxq8wMwFaVqW7MHSvkJB6RKw51bKkZLpSJ",
  "key23": "4hD8YnZyAq4yfeQa3pPLJ7twY1nc3MBh5Z8nffLdoWfS8C3EYUVDzeGdKVwgCbPyVkYufzWFXY2NAgCtxm8yrhrD",
  "key24": "5mWuRy8MoBgBa5ZJCsouddEFiPh5y8kSmJjz2yoztBuMsxiPDxNf8y1CEGuW94S9qznQt31hW4DcvtZ6uJ18FTGU",
  "key25": "3gybrHviLrG6hmZhgHLJQE9NszRjcD32wLZPmRu8cJD8Qi4uacbbD8GM8eW7mqNP4JQs7JkVdoEM7tBuaSqjdzNN",
  "key26": "2L32fyGyBb81M8vpQ4uWHxfvf1RAukAQePvkjHE3PBKhqYSDCACycHb5mSz5VCCo8sFQe4RA1ttf1f1dC96iZT9M",
  "key27": "34Hfe8BK5UCKTqj1fULLZcoCXTgZJH1SXQPw8SArBfBeGYqnELC2z73eYUFDF8uoev6ssufSabcCCxBN9b2yV5oC",
  "key28": "4Hwjj3Pn8wCVFH6UMLbrLSaguVZs9bGkZDTUK6TxMfAVwAqLwZCwWtM7wMAYgeuevoU76zRZteyeAgHhznUb61tp",
  "key29": "2pyBMh8TB4Asu7bNNsRRmXUp41YpnQfXuChSCJc4R5pq6dWD7vKS1rocvXYuKp4KwsEYeaMRije5LeY7iJgkAcVb",
  "key30": "3XbnP4Ca2HtEhXoptyxz4AJfqo1XEcoy1wRxtHZ5N42wDfwhqB7kbc7ioQsay5GiXBMYAhnE5chyFHYwtvCm3WNi",
  "key31": "3pv8B9oN3vitvxKYVUr2cwQ2WAjshGEBAMQ3qRDrL4aL3BviwVTwkjojqURQHv4KD3q4HHavTnnt3qt8ZN532EQx",
  "key32": "2RpHA8PHmUuVK6x7BfgGPwHZkLxgYxgm1mAUY117D9UCMsckVDsrnmLBRsn1DoLqTpY6YkqzTxUJeBeRdXLkGSCj",
  "key33": "4u9SycnaygqCXepWPjjFvqpJUJRvrftegUpLm2oxZvTTFQYnGFgqKtunvxKRuwYjUrYtyK5MPNydNYPkfDH6khvA",
  "key34": "2jBWAfquQGYQE6tkM4L9g6J6LsXN8siv1R85myT782ayiTAnVtLb11aVT89PRuXGiMiUR1YD9bUTV6UPJjPKE5UL",
  "key35": "2CcZHKmmDdVcn8nNiJNi2Q4cy6pKwLnEXXBQYZ7FSmddD9PLWh7tfyyhxSdui1iKC41fU3vnvbzGsrHGXyo57gmS",
  "key36": "3DM6yQX9aocrzCCTR92hqYz2r39P9yV9YUXWBicc6PRbwNF6HzSrhvJyQbFJWhjbUGziEjw7FQhwhh5KhFb8hmuU",
  "key37": "3tZ1FdhtWMMtgpVLgEYvXqmL7uRSK6ffzJPGMhwNAZhfcmQhAbcVMjq5erKrZJRbfF1uyEht6fEYkUUB4L5ELUAp",
  "key38": "5n9fjFyVspTsy2h4TN9UkzHxCqDv4MbiBNNUwAhxai8x4PebFLhT16uAmUTdA1v9FnGGuHURt7qbevuxz9Kd6QC7",
  "key39": "3qM829LjfqKenPT7fj9rC4yJzGv1WoAhZY5Eq1KjDqk52RWYB6pMJToSw9q5aVs1ryWe2fSoDUz1o2L6hvjc613f",
  "key40": "2LUDq9Xw4Yr4rCFRjaVWvTNR1mr1ZPe5TqHs7f7txoXAGzV2y4s5BzoUYnCYThBVDiFhzcqU6T4dZiNUzhQD9kN3",
  "key41": "2zhvXrgsUrpe742LLnV2jC5URL4hGVVtR3kTJ87F9AaE17Mt5N9wrMih4fG2ukKgGptpN8WYmpR5CXvQMTuy9gx1",
  "key42": "2qYz9PkhfEmfJpMYm1M724uvLXFNM7U4QzgBBy2jyzEJCvA289mTYEymTq1HMzvBKpMqymTA1Fh54mYrenP61Pie",
  "key43": "3H3chdCG9Zcw6HxMicsc4XqBWayUBPR4FcU2ytKTVqExTcX5HBnHSDv8GXvdqvgPSFy4hmogMpRiAM77pAs4Ztjp",
  "key44": "hTm1KfpvTsG65Aqy1XhRzU6VcLj8UHv7cBB5nUCZXqwSandEvySRw4SehJSHDYk5LJyyjyyD1v5TfSGhXwgGaK9",
  "key45": "63GsuFXijhA5jPfcQcBE7GkDjNZpCN9KWKCXLHejqAWV3JXWYEY2C5A9UsYS3pAodLntPGJ1FmDzeoWXrfQqEtHn",
  "key46": "3wGd1GJ9i7H1zvYRHbEkKETDS8eFrtxsusx5RjfRzocnPedcuMwu5qfxgCnMy3f31pG5tJFCV5waJ3ppaffWhtBe",
  "key47": "4578YbxRNmwZ6yrXLg2mCaQgPMXVUBqNFdsGEas5LQ6fvJ1YcZsAsxFpXLKtngvKWWQ6jMd1FdH2Cx41DqpZHXmG",
  "key48": "ygobM56mHKTvadU8y1zb9mMSrwQPpyaTZUzxVqQwv9JHCvNjyfrgXoyrHoj5SQJB1yHubwoJi5cFrA2uSo8F6EC",
  "key49": "3fYks4K2xWGSiC1oNYL3wkxzJZNu5C6yswKyYAhmiriGzhaq7DxmdLVHx2uGkBmVJn5Xhw9cym6NynhgoynuRMQj"
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
