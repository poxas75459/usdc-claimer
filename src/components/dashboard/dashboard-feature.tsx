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
    "3QaB1KpfXu76zBqMfjUdsXg7ER7DQLbmACnqrUz7T3GQZP4tnVBi2iyVZADz1foAKLqwFaCqVbhGRGaxEuGqu6Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQuR54uLEfxngaeyq2Xtpnq3y2vkpMS4pEqDwj5JsDzvxPDbAsuL2GDQDDqQ7wvGeV1A6gVnid7epprSbfXWCB5",
  "key1": "5pSyKoqtkCw1kQTzt75tVVwGJEJCoX13gb1YX4DCEorKMJqS9Ku9yeV7fCXLDEvqXKsEBsGvwqRYpW2ZuwTpdkA5",
  "key2": "3u3KfZcrA6GqdgC3Z9JAbGSUiENQgd17KtPR3wGQzM3sXxsabZRJsdJETAVVE1ijbpNVXET1bnWujXcK6s3Eiten",
  "key3": "5rnxR927HQuT5iFSDT8MT6GYJhj17HQMfzK9n9WxsSrL5urwgUoLSB9fwwoPjjyaB7xuSeLjzKcZJyLoPz4y6G7R",
  "key4": "27YvFNA6vt6ZYruhgdWE1DKBDEU3GfMSErfe83Stsxuyqgw7FmmAi9fegNsJsz7RbXc7z5xoHrD1Z6VhEez6MstR",
  "key5": "P8vkAQgiLW8fBfS2jM91iEEyv3EWFgTSVTpjf1MLdrgSK3NaUNqBorPovXTthkkaSAqKBds7tDF1vGMmJoK95Y4",
  "key6": "4u5P7cL4cRau4a8wMGToP6rSUnzb5cRqeqyRyw9DEBt9U8r3DENuVsFD5QSzTMre6qa8NUAGZStf5CVbVJg6td6j",
  "key7": "3VQ7pixUKRQH1VG8a5gp2n5NsU7HmjTCKampfxs1HZSzsdLBixjsPzcf5aUPWH2mxyS7qsqKTTWVzwNrUPnmQ2jD",
  "key8": "5xz4F3PETY7DytDAcNMWq9wUNLeCZKMdGYhwrW9ri7tFwkSmHbJYoUGzHcE1sb4mcpDwoqkeYRjAhat7BUQUYdtk",
  "key9": "2a2Dp6TxogzHFgqMp1vabbjirnR1tiUi4hs3Jc7kkUpY9SVp9gePVqQZTP7BWTBMZhe41sB4aCxEnEjAWinHricZ",
  "key10": "3Ga9dVBbB58ELHPiFob5NkvWFdRqwFSs5stiEZCct2WQMydrQaqxfQixfpurHm4i99ttiwqkPLqCY38gpwq383Rx",
  "key11": "2KUvFaVjBpzjNTNF4gyNhMCtXvtYYWKPBXxZ7CBZcFyfCdATTQ3i8z7MphXwKpZkjvn9w4Uupq2KQGV7S8qtJQvY",
  "key12": "WXo9AQeMyL7zgamivVdcgjmsjf12PcdpzzPZmhtpAJNUccMYYF2ap53aJaCjQY3wTqxaJEgCeQHL5UwrjEAc5b3",
  "key13": "4qd6E75qGnDfdvcnbmLxzhcDYnNxyzRC152zsdQbo5i4v7T5pkkkGtkdDtFTMSTgj8WcdLhjo4A5SqVPryuHosXT",
  "key14": "2KGeFXZNQNXHyQN31wvES5Tw3yLedYC4sYEa9fB1DvFUeeTu6JKB5B9SsBhujHTk2uu7bk5a11dG4qjsTVycAWkS",
  "key15": "77EGQ2j1XbhWuNFQ6TqucHgY7m2QxGPmuYjibWeXJbA4XbkXX4USQDVNuS9bzChhPJbzTbexhndB62b7w5RZxRV",
  "key16": "59EfpJRswZzgjN36UGdfiT3eDSCA6kvxfXMe7zgp8Z26uUJN8imcTrXfCTWJ9hzFtVmHAb9xxHyJtYdXZWiUMpSV",
  "key17": "4Lkrkgs7oPypQS1XthD91wqGBBpfnjH1L2omyaCVc32v5ww8o5oEjH2BNrbxnpk99hSDg3LVfkv1PCJh5gA4J7T3",
  "key18": "o8b4LdGGj8iaQRY446epwQ5ToDqTccFNJ9PCD3zanL45kzhhPb3iFMxuSKNtWvtW3K3WuMSnghNdDMaRn2zJC46",
  "key19": "N9Yscysb7jQfg4Vfeux4KDQrLtnmxyfrnL3BMXN6AYSU73Kw8ZRc6nHQYjABmXtSnHSFu69QnVp5nyGq8MA829L",
  "key20": "61y6FcVMo6fvJ5sE5jPm9dZNP1UvpaGwMnZ7w5xv61Md4yjK4B253EGTmwfxm2HbdEPW8iRdaEaQfWT2o3Ze3ub9",
  "key21": "27bAhgvVdKG4nbf253PYnxi4EBFDppjL6AjfoPTQvcvcEn1SbSBXh71Qj3nbY5WeBq4GPKqVKs3Z8gWu4CjtgHbB",
  "key22": "AAx8pK2J9ZakdCLHszxxGmxTt8HC4mS5DSuZQSLDthPX3acEHDKT5PxZvnU4wahnnhRyPuwEFTRWvPQxqYrgeoa",
  "key23": "3zrH62otqmc9U6rX2WoA3LmC8gVTUREMbK3ohnHoXkatWHYa9t7nBzgJZP1T5MA8evCNonTVhaHyDWwP2ewxM1Gu",
  "key24": "3Lqro6eyimsrh4mHXCb31dFSi96ATZcTYwpTan3S4pPykXYTMtc1cQeQvWuHWHHtz3fb6zV4W9MY9gXyuhTh2dnW",
  "key25": "58t5Kh5vMTEcUsrJsEuYucN3XBAzakdv2Nma2EwhX2QQfirRUWSZH8EkdU2H9EMZ3AQmCttKgsfXcaU5SJEix2F3",
  "key26": "2F4jbVrsa21f9aRXTVo15sLkaow2Aj1LWmmJaEeLJRPUR8LPt6tskMew5jRdK86zdkSXNYryr3KQNbGdXQx9n8LL",
  "key27": "4TZmY6dFrcqvw7CkbLjktpkEqo8ddoV2EnLWUsA6VfevMH3LX9gNhAmy5Ct2wKMC3KSyYCT12PNe3jDZECz6DWSd",
  "key28": "4FNoEQ5nw2qfozS6QrfabZp6qNEtK9EG5PwXenYgw8tgNN543WcbvUMjaYdj6auDBY86Wh4KRgHg9Cy9r11zznAX",
  "key29": "6JGNVvic9gQoLUN4oWMLgPa4dQVGKzavYuijseKFDEuYB8Au6WJctvqVVui27mP4gaw4MzJoeLPP2X49N4Yf9pQ",
  "key30": "5GxiYd4ZDy4SHLF2Xj8vTdAdNEMCQw4iYuBJ9vw68yuPZ3RJ73MFuHx9CnEgP4VETtko9Ermmb5iZmyB4MabiD6y",
  "key31": "377zNBnXNUFD5A4a2Q7KL22FYf4kZkLnUXQUfU8gYEUAVknrVa3p2jAy2M3y5SC776yg9P5PJ5orM6bm531Azm5f",
  "key32": "5fpz5W9588rWDtWgnmAtSV5g5vZsN28MJoWWwd35NbtyLJEvxPWBgZRUJxLNDaSUmjh9RHmJjkRzEjD2RS6ZsvAe",
  "key33": "3ju2Eu5G9S5NdHmKNfjAVJCtnm8GGiSFa4m4kNphwGM1hFymqvAWugKe7D4JVdUSUyHthZXD8HyRDUw1kA5uXS2x",
  "key34": "DaxmjKSGGd2tznWNMwxmooxztozRCBsYNBy2nNxHYzcvPRgyRPFcodSYGFWi1mgL9yYgPskS89DjpE8wrJmqVyX",
  "key35": "3JuPHjDP7KqeuKJZmYmP2Z3j1G5rHDj6AfPTnjTdNCXphQnGPhvB3iPsgxWFpaUg1gMHd9Pq6RWy4XcEeiVG96BS",
  "key36": "28Zo1mPfoj8CLEUabQZbJik8BeczrzviUUre8QCPVjC4VLzeSaZP5SWXE6dQL5LM8P49j6ki9EKo3kjoVM6kuY7X",
  "key37": "CQ81xEcJghqWiKffyxzLgDe2pmoh34kRJygTMWb2nm5Ff5rQXzJeTyreZFwJTSuWMVmjtjtHrRFzpeNM3ncop6k"
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
