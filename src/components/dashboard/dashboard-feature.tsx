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
    "5v6XnbAEioUQMjVgbRqGJ6p6RGWjn71Ftq8oFwJHdLLqLoypprSFr9o2WJFMNiGoVzgq3TUvUq29xBJZCVxETs2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQPFKaLXA6hiDj991zxfzWpaC19MiAKz8xNVh3jQVZJqzdmjC1tRJTvBZEdpagQk1LMvPmHEsZtN1MBGvg3FGwi",
  "key1": "572MVWh6V6SuDmiCo4a49KSiuSN4Z7afsPocMiuUCVk9EThWcqg3wNHetfEZS8gu9JTqBqWypSqH5ANqpQS81Xn5",
  "key2": "5W9Zc7KeKvma4DjYETxKKhzSjyBtHX32iyWnoEdFPMEZek65U5reMnHkJsKZMbKwBTB25d4hcPArwzQ8hThqZCoz",
  "key3": "P3fvRJzxvvQRfqNNjF1cAhSxt4UNEwVudqok3ufcTfXwuy4UPDDz8H2H1spgqMMo7v64dH2SNbSpST3Hm2sbC8R",
  "key4": "adcphEi76hgKHFCwKhSkuY6F8FAdjNHMZ7q2vWvWPZGyqKdNkD1qEJ5CCp9ji4bZAz4yMKHziEDzvW9nSx7j18s",
  "key5": "5N4LttMTvLfA9jTZtBBthPBnUyUrJRxoeTLTTt1eFrKr6TG7ZWjL63ZCZU9mFbossjmf2qshGoHDzeiMZv4VG19k",
  "key6": "388JQKsvhZQMC623K9yfMYzvNdU3gVg54ok4k2coqbNtuKZHbRdt3v4DKovV9wDkrdphi1VPX1wwoEUhCvN2nNyK",
  "key7": "4WhYVMeFbbEUNvgFLUnjnfb5G6GBfjLHZVQxamEyAEX9on7qeFF5SokwonjUYXYfMhayfnQFWm1gpkv3t3BukiUX",
  "key8": "4Vu8xq5VyhcGH1f79SUsSr2M3dAptHB6tnbsLdM5iKB2nwToKnBpiPYupLeh2esLfbTGPRZHr7tXZAGYzp6KKRzV",
  "key9": "3pD1u34oavtNrpUe2XVEZD28fiRNpPV9gxk7eFWH6CErrrq9HgkDyE9K8bCB2T6sQcizQhEGZ2ucD8q7vH64FBhq",
  "key10": "GQ8pQaCLbFxQ26HmNB9ptxVEbtZjhZqgvmhQZ6KsyZZMKrchMVdWGUSfDr9xhL1wa45sTFNheqwpojjTG1usgNz",
  "key11": "5Cx783oWCND19bfKK2kAspf3dFLxNi1fA2nNZSvptiZy9fKtL4UsWbdNjnPrs6TkCDgVMbaFp9WjpS2ZgkLE9W2g",
  "key12": "3wZu23Vqq6ULBnfiQQRPeZ3tUKDMK4cU7MkPhrn9e4rcEssY3ctSKghnMuZojKcUkbaJMsGZNABrvzEHj9G3jyaY",
  "key13": "4ERXQhkAbD1kQzUh5UqTJ8j7D3zYz1LY4Sgi4K9bicNDdsEQLdXAv2Zj7ekwp5AHX7V4FJNUtis9bgn9uMoAC5t8",
  "key14": "3nqjpXSnE6b2Jebuh7aPCGskfYZTXSGSmpKe3Nzoqa2x9249fo3P1Esh7LtxJpFNkvptQgtG2wzcsvHqJqnhR86o",
  "key15": "8enfhES4jXqkhigP18fheQA65uR4VRCUNAuSdWPjdW4QVb551y9kEWH7aJkP44uxUBxnHjLHFWpGAizRxi3M3bN",
  "key16": "5YgE1bEhXbbkdERo1GWBbHtRNP1ShRBBfmT1yANUdJ2Pn2dozW4bFfHsDAVbPifnuvKyxABK7Zb5ENY8V2Lp1cbB",
  "key17": "28Q8tGmeyuD9TQacQz1mtri89pjk2GbW3Wo8H7AJ8na761UuUu2vKNi7YsPox6PXToFH6RDURvT8oRHjyM7BwFvi",
  "key18": "2qd7VNXXpvYrNFeTTXPXUUN5GSXhJ186Z5K247vgk7EAvMmCoCjNtmwZm4PD4PUB2osoJ6j54cNfGQFmqFsD9vCY",
  "key19": "3XXKa9VhvuUYMFdoTuufoCecaLXQ7gFjXFe55DkbxX7LFwa9Cg8EEJ96RYHGuf78r36pPXYzM7DUvxN2cbocG6A",
  "key20": "5USRojkeqnD1X83UQEPJHEzTtzWhmfDMcHxTeaziPfyj7LPr9iE3TL4NkjoHVMYZiSiJUyuGma4zZYsK7yhenhaM",
  "key21": "ALYvxA5uy5v39osYHqTAaHXrcWGv5GwGS7mYnnoRoqzp19BejMj5LY2BtJW5CFdLxTMgwsicCRZmuTKVocUPTPg",
  "key22": "5eJaieVX5DmSTZdRCbK2jUAvk7sNJnyc2NJsdMkd4V3QM1nvb4wYMxjFgEECHx2XQntMd2dzrrLaQ1pRJ4512ZCJ",
  "key23": "4St3TZo6Wa829xgUP414bR18J9kPRoBXD4HmKdJ54xmT5UkXoi1EDPk5HVmdexH9JRFqPQ94SyoGWg5BrueNGg7F",
  "key24": "32e2w7NGAEgdhr9SRLVGvkrLM2TNPdYRBKvDf7egWVvFc9QUHh1hBKLr33pMR33SgY7bNpfFDKKByJYtR4v4TQRi",
  "key25": "iZ1Py8mWWysfzYsWkFndZ942MhG3PMfPhrXhCVx1HacYtNGDLixg8Ty3osCgAFo9JM1Ebkn9QcZoDUjgDxkVD6g",
  "key26": "3C4w16WbtparCVrpCEYeFHEdGUa33NaCMN6RvCNdGDbk9qE8wfxeHrTsyK2ZY76TvivCp6ZoeTee6WKvgBtKnugF",
  "key27": "5PEiiqNTydzogzdX6gZj5z92fnktYLvycAsgfquEst3r5nayUzn4kNgdkfTPPYRw6Rx2Vqzd2DSBAhgQ2vNj8at2",
  "key28": "27LJnRoDZTZ21iGxSVzuCRin9y7YzuKK3tShgdd6wogykRCY1tu9ZcpYsfDRNgpGKCExvhdN2GjNmtPCcnvJ3SQe",
  "key29": "5po3mVELPTqiBmhxMSmcE2uunu7sWubokPin1jPQoFbBF1ii9aCDPHzRX1SCZG4TREeCxj8Ri44JA2aLGNcxpSDF",
  "key30": "29apJwyrLmVd7DKHe7wppqCHPv1Agkx5R5yVwUVCaXFpQJSd9URuTDcQ5WycxsKwrX34u6buRN5BkWGRaCweUHZ5",
  "key31": "2TYPpmLvLZ7pqLUHh1GG1711AtWMdbJrfxCEo9bgTtsgmh2gNVRPeDKBzoBieQRNdxYyhLmUaMDRCwrhG8kzUbvf",
  "key32": "2tGpwog7F2KXuTid3dm6Gv2HjVTDKRjeikuptf1jd8mLu7QLAfx8FAcSMJWjnFjtjX8ju7DcZqMoeBHNi1UrgvTU",
  "key33": "4MCbt9KavyoU53cuH2WHYbWQNnYMKnmDtY7ctbJVXjrdoxz5vAkYHVXaWvvUFc6kZNKZavDVHnW5yXHERknQYeS5"
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
