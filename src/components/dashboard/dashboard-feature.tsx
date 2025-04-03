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
    "2jMFdFxHaSoCe1jGbycuVcdazmHafap94uvtcZbPBT8cakSKMZUZ7TVArLwFY8joEc3goUcMmXE2WUFs5X2kLigS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ychX6psEpBSZP5hPdVvQPmVyoh5imxJTKRgj655rY14WZcnYGtYP5xhrGt3ReEekWwaP1FhZKcUVRH6agt6HuSH",
  "key1": "2JV9zs6pzdtng81DRRft3jyemQfKajBtFyNKXkD63h5iXHzK1E12qqutuMc6y2LERAhBT1YpiUcNcqNYBoFaNuxQ",
  "key2": "3ZLuS8TjGNJYjpN3tKJS9JctTYJknVjXAvrt8RVSi4GZzMPRVnAJcNf9rkP13oVhQnvY44t82shvtZB9gwfyVKsR",
  "key3": "4cyg8jzAsjLKL9SCio5L7f9F4ZtWycHfTLK8TEKcZuYjPMGfVz7B6sB3eDsJ73Zr8rqoG3XJ9R4hFHmcG1UcpU9",
  "key4": "2Gy6as2LsSJyuZmGu839Jw7Vnu2SEdRBrask413NjcaKS5Zaz3cxHqTQemo5SdPq4sDH7KFDFMLY3R5QJg1LxEjm",
  "key5": "3mVbCDuT4JFqR51Q88dbneLGWxWsstAxNBfczxvoVxmTUrUKbFyzTfVry5pJsG6wEepoGaxQf2zEWpVDsh6ZNy4V",
  "key6": "SwfDGAn1wj5XiLhga9nJ3DYN5N3bsTrG6wU1WcoveEfwu6cZHVzm1ZN2oxEYb1pURJgh2emQzcTm5eGfJpXz9iw",
  "key7": "3jEUqVQpT2Wt1MUHfwbpEoJSjBXJNjoHaj9JoHzFrt6AsEQoAbzXbyVfkfjEcU5JZ1sExc7P7qLaq152YTnJYMmm",
  "key8": "2crbQQogUqmbaGDqY4mZaSWBSvKQNULYQvqqb462VCcjCFtp55Gj7uqkqbyQWBytwzmeh2eHzKVLD9a1yja8zp16",
  "key9": "4v59CB4cZFxmar456ZxKbgp6MkAoShCrduV4YbGJENbWRfcvobK6poWD5sq1mEgEbaNyWHo4hLQN5daWiwBULhcQ",
  "key10": "52CcxefgY9zrZwqqPhvwne4HPtwJJ4xoxRBTLTxswF25zSvyLEvDx3LPqwhi98ypD5KZCR3Zco87UQgxSW6L8Zfa",
  "key11": "4iHCcEou3BenFo9iDYrNrcApeCCQtpJn7ieAmrQZvanq4DoKXevAdG6BvpCAUQowhyrhM7CFLeDPCR3XJVW8mZgs",
  "key12": "4Sp4gRHBFgct9h12dSpQ42oVniWjiTFC89J1FnGmrwDRXUyn5ptTD5RUh2GGDa9Rbi54Rz6TMQh6MtL5DW8nCy9j",
  "key13": "5tRQRcq9QMzczDxg94vn5EqPgTWZskAsZZ16gjqwLQL1SZpcLQkkzytD3dTcfSDsXXxVWovnfg5uDsT92fQrCx98",
  "key14": "3BuCoUDRZBuZEWT92GAngyg7ipc2XvGdhyhjK6n4hciFAkVxLobYwSt1rvRoKKuwy6NNqEYJTExCkLqkeYwb7crH",
  "key15": "4vVtZSNiieWPLEEeXTn3GZ4MaSUsCT9HNLSgcbbocf7cUVosFuAE1cPkWxKbjBDGGT7w8aKbzNxefZCSZvRvfbrE",
  "key16": "HroyFQWqEUoY3uFmd2LorbmkQfm5vhkWgkUVLrbAWDTSLGQZUZQsHDKXkJW5SAKUBfH6cCRJsf4Dys1RVjap8iu",
  "key17": "4RPDbCtdQHTLnxKn9EmuHyQ35EYLd1bp3ppXzkn9HS6xPXupBGJhjwBd8Tyse545bawJstdV2TUkaXEFAd7XfKJP",
  "key18": "5Bh8uExP2JJ2s3JUtLSo87tQ5AhiKHyuE4jF37B9gEos2hk3MY6CJgdQjBKn7gmc2z3ugzuV1WUE2vERB5ZCj1py",
  "key19": "4gDFqoZ87wvRRcJpE5HMGwAHuzw6d6ieWK16p9ytcLxFraHdjmMe1ZUgaiho3zxToaMJHS3UQ7hQUGBHKszu9hCd",
  "key20": "2Du2DyLiBbYCPDtMe1XmTpg1A6rDRK2yAjW9yVMJXZvYwjmez7z5LdyaktQcAUSzyL1FyxUxK1AkpLXeSAFNXtNb",
  "key21": "5YAARy9pUyVrGHKnUWmMeXZyELTUyRnDbJ8QXSs8MpAWrDAnx8hb7yGaCLsivdNYxuvVZK4hvR872qXATABCfS6m",
  "key22": "48V1DGWSFrZ2XTVTZdC72k8Up5WkDPtXGKgQ5NLt2D7vXigetjSfTUJ4NLcSLRm2mZ55DZ3kknxz9DenBSjrjX9h",
  "key23": "45tZaY3vd3Nb2LxuiHgY7Ge4t3nbjqWqVdMUheX1w7z6mDSbByCzKyXm98aBgQCUTzVzTG59QbKAqGnrYdk6hcgZ",
  "key24": "5AnEqPZDrjDYhb4ysezbzLzW8ezDbfufkCj5JQW73VBQZiKL6SXAv4JFVBPz9FwaNNxdf3SCcBzygFDFEyDBqfgR",
  "key25": "zoGAmixpyKgum9H72PipX9nP9HBMU75ANU9yJ83rpAmWqgZcMxDqdSWaMzC2UaaYvEAcsipXcB54qoTMEAH87FZ",
  "key26": "534sXwqUpW39UeLkvRZ29b7y1o7BskDqJTq1zUw2UZVV3WtjkXHYz2anVv68qyJSsewvFqjM6GKdUa5BGLRJVtsg",
  "key27": "4okeAhFfZqSXoHpBXcEsLLKvR45pT1eZhgDdXiDqzvVr3kYKuj8oh9BqDxQT36PN3Yyw7trzfmif4hPU53EDFvx9",
  "key28": "2nR8fPaSEo1i7m9BrWisv7hDbdiYNFQ8xLU3boQgvXiZ5erAW1AmWp6S4znMLM23nQWQ7VUhKe4GjxL1b5DrSWMR",
  "key29": "3aRhkYjU7xrLnzZb1ZdXXPUNL7etkeRBxezksXJgxdeNcTa3LLSMX3PmUXaknpWg5W8uJjFvBU6fz1S8mhZdq9VH",
  "key30": "4ztTGsJDTpvqDBszfMVxkybnMbBi77398BguMWFfX7CvLpSkUbNuwnimTKrEoY27ea2Scf6HoFL5794RD6iJxsGh"
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
