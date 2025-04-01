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
    "rbEGzFYHCnt5nEEVf1x2R9eS4GpeZzmpA4asmNNodQDp5vPwJqxy4NACgeQ34GpgFyw2DNM62QiTepZZJvGfrnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZkC6f18UKXX3XonmQ5VG93SeHhMfhousLUjdGHKPVioTA58t9LEUfxXjiospJaQC7zg83vWFMjWtW66zWpDURTx",
  "key1": "5zwtBrwXntVykKA4uvp1ZvxBSEGfkWYUMZrRy4AETdJEPyj6fbvowBGXTggNEsFz52mVadwoG3M4N5V6imYh5Nhe",
  "key2": "2W9WHThoz2cRg5xcdGYWKZ1YeXEmsXphZ58Yf8TgzgU49e7F1hYW8i47x6AkDHvSWjqZK3GAQGui8c87Bgz9tTdb",
  "key3": "gSBHszKnNCEyjjVsYaLdRZQsYeW1Syb7o4GsKGgLwqbmegDWDYmpiq5bwiTjhoeHRioYiH4ZpetVfjobQUyNZW6",
  "key4": "YYCJZU9GiVoTVZrP7G6rEGyNrKSGdJv9pcqurPyLAcL5LXPsVD1ngGYQyTBrbts3GvCwaejP1FgRPQhqa5QwJLT",
  "key5": "QiByD68ohSA3mHFd9Tygd5XZmqVUCHMpHewBmK8VFwj6MCurGrJZhNjEASXmYxB5j7qWUchgVSDafHSbrvgx4fy",
  "key6": "4pjAi8SFGb6YAvj2LLAf6hU2TTGLVppaydGBSz3U4wVEREASSKabyFcZNYgFnFuiskCfinf1t6jwvRhKkK9UMtzY",
  "key7": "5X4rLVfMGDqHpHv8Bnf8uE3WmBgpsqPMdrJH13yXjFVe24soF4te7CKkfkbtgJrxWeDiJJf9M2kQKkU8yVgpDzdG",
  "key8": "4EM6cCK57w2ioE72kG9ecmnGctAgb6Jpc8dhz35G5kmJ53yLPCqssrtrRdqU4g61MHqteDnM1PjbeqWd2rpHbFY9",
  "key9": "4MDp9CGa5zUgJ2zPb1gQPmHEyd5HM7sdHjboFv6SUJ65dgw3TRfoLpu14CAM6FQkcv64TRYbG9k3WxunDFyHDWsb",
  "key10": "34UTcHxE8PkZmw89NxcKv4tjjViDnxk1iCtTdj1mVQbK86VTMXnruUgJYGtf9K1G3LRgL6vGyiVr9mkj6TwuEMuN",
  "key11": "CGkDn1ta9oxkjwgLpniQZm23GaPDjRH5acCdjYoAGVatf6wJnzPbJDGZRsRSxTEQ7BsfDZgU4k3cYQwihRAGea2",
  "key12": "5o4w8zb7UfM722WSZH2VUuvRDBqQiKaznr1amkYYkY6BAuKVyFggHpkCXU2x1s2viwUrNDobsBvQ7M3ym46JaXAo",
  "key13": "3NAq3cvyP9mR9AJ3D1wJw3pNSJ1L8odwvHm3daR9382RHMFSdtC71ZaqChxPUVXjVB8vjuEH8ufuxhLfAvZ56RPk",
  "key14": "gqs3rT5e8sgyrzH6qyFyMAiKin4vaaFsdrFLzLPa4hj4takhh4nvVoNMAgm3RqJtFGmaUsYM9wEAZhrJQZavtFQ",
  "key15": "2qaGhPXwU3FiEKRjSjpkFiiGoNDsc4nHfSkf1ELRcQbHDWLgQUF3P6iM4VPzvK1qLf6oGvYW8BGczUycFfS7hiFd",
  "key16": "5D9psJ1oHXtRpmgYbt1DgkT7wMUZvBedNdo4h8mwQcrEN3kTbuKWbW7UojFPzGGu1AyfSSaoPAn9J4ZfXJNkypWX",
  "key17": "5LVwESQFhvdD3LeJtDmfbSm3KRygEyeh9RBHGKF9M2fKNqW8dQ8VA8eXr3twpfGk52jHQg5KTYMgYaj9ozdMqJ58",
  "key18": "2b6BnzRjEbfuko1RPQdb2Mi89GMitH3AAo5oEJjdvbuJG4riukKVvqrAKkBrpEyUQRLXvJgTE4vE4pgDhN7dVzE6",
  "key19": "3pYJdeG8gXoVvYvztijudCbF3dkATb55tMyJXoSCCS4RqqniFmHacKKdsb6iizYUXVFrkXacfpLXV3y6tLNURSQs",
  "key20": "K4pdRYNAzokXbtvEfdXB7STRmKjQFnzTMdDGt9Sgp2rDyVuYgoiYDnXAZE79eLU28Faorpeh7ZmyUkLmiLU2xtN",
  "key21": "3xXBUzD1cFjf3ATiJ1QtnFrr5U8Fseqxp7z2y29D29KS1D6AFSV17q23iQAvmD9yo2EmqDcN5RFJD5vmud9YgPz1",
  "key22": "38HFLA3ywo9iV6cKCAmceTr8cAv9jJ926UJTmtGp2HoJ4eVc1AQA3uF3siKF9HgAFCNhCqbcnb8fVsadUYeV7tuk",
  "key23": "FXWE5RSEnaxgyPdbef93v7NcbfkDGVCPbb6ESYb9P5PZodTxnPJiPXuc1QrNDKRsrB5B8NsrXKnnnHQaKvon7pp",
  "key24": "42MLEypq5yaB9f92CAtyZNrhcFt7kJojecEkxfsQvMQaiQkvTeFFYgDxUzroY7ZWmCpPRsn4UUiog49hzBgSgxdg",
  "key25": "3yCERKB5596Shu379MitabqXbWbzgPHfx3jHdLqQfn19ARimLivbk2SLPqvkB1fig8nW5kqp4DXD3akogJ7ArEw3",
  "key26": "38pPLbZWAKLZdP9KJ11qExzvsMoq5mFZdoAotfPY3qkkZ1e4uhBkmkDu93EN5jvDYqfaHgCj7iZmdHS9FjPJ9fAq",
  "key27": "5WfKMBoCN14DRv2dwZsRD5bhdoj7pRVVMUFwEZYrN5WzjzENYfawqizXHyVwkkDzfJagidGiaqeAB1uCMx5ejwRK",
  "key28": "dpU3h7c2mJWsPZvER1a62cbHQTWAKXzUhjcP161gQ1tRXxNqJShzbgypk6hpwPTmzWMhJiQ81ReUri4wnRyeWKD",
  "key29": "5ojpJCf2KiBvdQXzG1LC7XtFEt2qE4k8ZUbqVdgSHqJ5pLhtgYTGTGGLm3ZJX8ngXATmdmqhbnwXu22RGjEfexWA",
  "key30": "2K2BExUiANL6brwoToTNWkenw4NGMVb49iGpZuidYi6Q3p6HYTLrkbiVGTEkdDWJD9Crpu3dad1mfjmdsX1AjssE"
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
