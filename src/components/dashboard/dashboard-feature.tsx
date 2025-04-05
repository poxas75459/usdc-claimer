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
    "2vkA6zgwL9r1nekzpaW7kYYGTcWA3PxQHqbk4n69ZR9o9AjEJcEeQa5nFsrRWk9Xe7JMGyf422Xyw2BFBbbx7pmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfFceKy8gtb4oZL8JwYrfnzHPFi9yQk3xwdZQGf5kyHSyz7GzpDS2TD19cdFnnk6ExZafH2bYozfHWwmucxmBUv",
  "key1": "2Vz6FpUhcaaPnQDawAwSt7XwGVKbtSzGZBEYXRztNySBu6yAmLBuUoNXURdEa5KgLvpQD8gsFoZYs2afuaoz7cTw",
  "key2": "624KCSdrhZnQno7bYexhuu8UhvR3ZbywKRPvhqqKS8G3WijXmAWVCM8bBGe1sG5ZNuf2EUcB4X8eXZxE9TLvqHDi",
  "key3": "sn9seSiGxDcRrmkh7YBQwoTwoLRWxokSsx1ZdVDGKvpNLnor3GFVQE7pivHJUFGwNuB36mZ5wy3RV5zP6GWKGoD",
  "key4": "D9jYhZe9ALnDdopHu6B5yrksW9ewcXYzPVAEfcKiL8tHCV7mKFQ4eFBwh1a7BMAHd4Qxsr5Zv4nQAzbE5ZbBiVN",
  "key5": "3RkW1q2tDUwCmHkj4YVf3sX4N91UUh9AosPNYGC4suZzQ7BLDri6P11NLQADzHjKnq1BdHWGJ7KYP31o9eZz6yZH",
  "key6": "4ohqaPqSZhnPkZRt7kLg3DqmpGyKJXpfbeQ6hwQE8hHHZbGAGtBrcag4LqfzHFoD9mFEumYdiH6p6yvGMjPVkR7U",
  "key7": "3LFqpGizv5DF8zAHnrp69LmcQS83g8rm5WsVvNW2sHKJfeYbhsM3yNpVLfmA765FkX6qTKPeibW6z4EiQrA4P7Eu",
  "key8": "4WkeigteH7ZYhJWL8V6TCqM2fPfPVFKWDJXz7vkjpfy4TfRcrndmqFPhh5fQsoqDxzutb22uebntDLBCpoBMAr5P",
  "key9": "yQDtnyNUy29PsTv29L8VF4d3SXBrJ7NkhyqfHRjD1xGytZxKGN2fRDj1N6ggm2hUDEnp1JovkpnY4J7cWzwCY4C",
  "key10": "Y6PQDG3RmKRFzcqQiuRCaF6U1bgw6yG8HES77qne12RxY8xhh9u6ueR7KiJfY6zAY8qadujH89XfXFUz56UwPYu",
  "key11": "4sBRNhcYBjcoLC818FoextTDBYjGk4DrBojtJRs5zah3zBkHoHZNHYvmNyHG7hKhfhoGfaPPLfVgFDUqBFWxCWrv",
  "key12": "4mYecjRXdJn5Epwns3PB93bUnkvNZZ7VEnsYXSEJ9JY6HSJdMx6a46cXvz1JSBRAsbARbTVJVhA3k1VSKqr5BWZ1",
  "key13": "5wpjAy363VzTNJmaMabS1E3nQPnK77UQ4XCDwQbqqeHMfdZDmreGfGAB2Lj9bskZtE6F2rhykJZtrocBdH7h7nr3",
  "key14": "3Q4SLCCupnxaCEoe29RUoPx4xhWBoFveCB9qMuH5PdsU7TzbsyqCbn3fUtPKbF13ob4y8JVVthYZ6oJjFfnfUEwj",
  "key15": "acK5tggwMGWaC8yVpzxA4BRHa98Jd6GLbA1wxBsUta6svfKSXsT5ti4zqpHmfJ2TFkg3kdzXifvCe89bgccsWZR",
  "key16": "3r9nWz7BkaRrgZy1EHsQ5oXh5BkQW2sTeBNZ5v3Jcm3DqsUeS8b4KyHgor1Js3t56S1UJ7U75X5nbFoQ62k2tbxZ",
  "key17": "4TBdtNEKKH1obX4qyESWYaXMekgP9SdHKZVLr2gNgbnTF56ZnusTxBiLZGWzddX4STCp9KfKQoHBFQQnMMZz3Rze",
  "key18": "5fTWBSGnAZwMBsd4v8c5uuKSgZUkDbjp6VFyC7zXvh671GBaKPBcZu4hPTZWEMcBP1oFfkzxD7nDWqTsSsNzQEJa",
  "key19": "2LgEL2kwj5jN4iRScGZzkKxMpaxyhtmreHBKdGdygNDJcQrhe8s3reZF6ka2fSRejULu8VxDGZKVbCAYJvD7jVaS",
  "key20": "5dSXy2z3uVcHrTmBzeVCjxM4p62dqk6F1oeGBhZCT2hj6Ji3qqySbZXMqZDGiRNWU4ePHVhePLkh8mC34ybDStJM",
  "key21": "3E8p69iSEHG3ZRVStAkeXEdWGjQisQpF4QPEc85yfqZ4RrN1hcgJenFAo3jrcJgWmTuge32dakxof8Fy1vusDXZ1",
  "key22": "395Rm4BJTCnnGj9zcuRdgo8hvkpmDfYLwpvQqbST8LeutdFk9Pso3eyXZnRAESLiQaaqbXgoYQm9yWLiBBUN8zJt",
  "key23": "3ycBSpqfcx64v5CbSGRiz999tzDTP9GNUabqksBMmNAtoygKbZpFpVht5UUXfvYtWbygHTpby5kLVQ4WVyDN2GNV",
  "key24": "56f4dULpGN4RvsiRZkmKC8KT87zqGoaD4aCm6yP6FpLr8HBazboaV2sQx7et9pVNpzKpWcS9RKUAgLM6DciTxXsL",
  "key25": "3uaa415JnLnbrDEY6iRLZuHfoXwtt9xJeTZYLrGPb2Td1QMiptVnT77U9ULNMjpWkJEMNscj9vzi2CMGRbXsZWYA",
  "key26": "ANSsxq1uSHVHU5Cy7cK41jDpTUx4r4xS3ZAsQG9MSwQ5cEAaQ3Nv5h8q9UuuoRmhUB7JXtUm6RJHD4cFTYJUz9f",
  "key27": "23QUz3ztTPNpd3cL8bD8dZupBqPp5EwnAaQAgbYeXjgGPUFLfbsAydyjxGB9yyiW7CcrUucTAxK7c9HnbSJq7XEs",
  "key28": "5y213wANkVjAbPdak9fC4gcyr9mthUeAwywRpdCF1vFUtXRPxH9eqxej86Rzsn7rMpEp5gAp1QjWbaxatLVAczBp",
  "key29": "3pn1vwkjM5cXnZpHheDpiStEZ4XGZ1RPn23DdWDStCRh7bEsmAxuEaNyc4HAJuT4REf7EgpVSc4Pz7YfcoH92fXq",
  "key30": "5cwNfHWdAR3Zj624hbpb6a98tiAo3yXwKXc8EX6iNEwp8hDgMVUs2C8eNbc1MUhNSiW8PtsS9rkmVmxtALxwPSgf",
  "key31": "27hLQFLCMmG8QjDtryqgFsJk9So9wDgmc5RAzadEmp4iaCXcWHwK2nXEa7hrsVetyEzU1LJM1HnZm4y3ftmaPMcY",
  "key32": "3QWFku7d2NUx6Mxhe2NfAnDxQrYCUBMXHbwgZ6VE3kgcbu49cNXZ2xbgXmnUTgfQGdLQVYnfTqFBKXjjK99MPUzv",
  "key33": "4dPo7sKrS4BNoozVZGWHXuRL2U1oufjLgMJ73344JjqrEPPXp67rXvWkgHMoedDYEJNvkjR1HgwUAwgoJ2BYyxNx",
  "key34": "Ts8Ppz21RUzvG39ydios7osjZtwDAT6LGQJze8TUT6pNrSgQ8VUrnrVZbRweamJ63Fjn5Jo3BnfT2i59cza9AgM",
  "key35": "5mqfkHs3PGezatVFw3PEk5VzD6BfejWKKgmJasyhfU3YXpxjGfgq7XnurZVqkPXEhew9s6d1CkjWym3z9WVsHJPx",
  "key36": "fJHMAUBqRNW7cxTpGtN8fLbGNAxxMGacKMdJ5EvCqDDRCEdCiacnYoo3yM1DvYBmKaHqFMWPwZfzrzWuTu3rAB9",
  "key37": "JG37KPaLKfcnFAAvfB7ehHVz4cPXhMsh8aBKWywS8gFVSoKkjtrM5VG1R4usVsVtbu2rZEENNVSUhyYmXHwQH9R",
  "key38": "4RM88QAoYpEkYMvPfMEp4bqphAjh5qi4PHcBbxmcgJAYLS2ZbMokBt7wVURK4SHk2frehjDtHQ2Kcb4QK8ryt913"
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
