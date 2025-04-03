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
    "CuG4v7xeaGrx9knhxoo1mQzEAXQkLuyesJgkCSdHeVxT9mEZUC6Cn7pvbeC3uR5tLxPz4LGwGbGSM1rG3ifCAof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dMy3xZciSJtywwkNECxVyLwG4zVNCcwBJfDwGDZHu8XD4uQ8w9r6e7mkb2jy5W5pDcwEH8guHme7tny3jYR7ED",
  "key1": "3e3eUyFCgkBkRgxHKfBUKkysdsX1vpe95j9qYjHxzb8FLTY1YEedYiGmG1DHw3P1r1FqBDTdT3puUhJMboDP8UbM",
  "key2": "2ibrwFcCSvg76su2gfU54K9uC2dVj1JkVDpqGGTwKrdm7ZfNaQgrvGAUHSydAFxkskhnxUVzZhPJk2b7mg9cxmbq",
  "key3": "5f8cemrBGXtLWpj5ZV6oHytqAKXmXTN5X9JFfZGUr2esWLBub3hzijtFLRsTdW4gkL9j6CLfsEsRZggeoWPBgyPH",
  "key4": "5LZ9F6dsyeJYqC6TmU6rqz9AKkhzDsNhmuYVS5kyGLw693vPAyWJAyL8TgeiPGTuvnej2qgHE8wfS8DF454v9Tox",
  "key5": "2M8qYcQwtTfqaehgKB8eEVEgm8oYK57Ep6KqEeCZtRePk4QQFY5bwbjWVGHAwAukVEQUYFWCst525CMQczdxEwPy",
  "key6": "4pkf1gxM9CTQ41skHfGTy3a7VeB1EtBWr5Ho6tYc3EUCJnBxazYdoBaw4uHYU3967qaRfoDQW5WBGjEkhCi1mN3o",
  "key7": "UrMh2fwuTBefiRcMozT9TizSyBCFen7SkQRQ7bfsVUCBAjYgoDHBxWHobF9kTPeixfiTpuW2AbymhJMb91FJTqy",
  "key8": "2KcYHnJ5T49fM5vm22QGGZuKD7cbHMPnYird5psRS7SyrGLgdBDtWHgu1HrwLdFGwmcPNAnof6BFtc24sHGAB5Ki",
  "key9": "3j7jCDMCGAGaEbfSoiABCVL3KWeMJH7nJaACJUYEFuccmcQMVFMJeFoG92oJY4QGiLBeq2ufREQwUKt7P8WgfNH9",
  "key10": "2eJexfAxBXq3BsGzKWZwoEqbAr4nMu9rDJEfmmfnnEgojPxJtf7isQiqcEUmtWWW12JHnizvkBcVD5Zy2oBH8u31",
  "key11": "2CCNmPCyX14wmkUMHoCzYjj7jRean5YC4XK8PSQfPofyrgJ6zc8Lh3kkMuusk5PwS2NhXWr5gbNcJc4W5hS9cFr",
  "key12": "4H4cVCCcM52shttL9LfavzsmW1VMPEthyNeESYCEjLesnVanT3VQMtgc51xUUoEYYw6mEUJGTtnCDEKhC5jHQMNb",
  "key13": "2w8yQtjMXojsUVGgvpW5kNR3UUhxXndBiRHpsAyiqkFHvK13NeSC99DA6syjWNTTBdihwnLjvQWCp1vtnEvfF1QW",
  "key14": "cr966ehVqi9jV5Vk3RrFvc9fgTHP4tEGTWcy596RtBZMtU5kW7NzYE2Pb4MkGBJVs3wbGyyTe235aurZdgzWktn",
  "key15": "3jzwqC9m9MZeKYJC3Ffu6zeKPxWi9SWHwxgBt5k3ZHgxabw6QYVcRN3P8mHeDWtTk43T5UvKDcbfk5uPm78ZiYAF",
  "key16": "54ni8Y1tsJ27JsdjLzw7G43NwNF5U4miLqAnSmXFRDzDRcJrLEn7TqSWzjfF32KGFxZMVsm8KuVwWQQF8p2m2yah",
  "key17": "3QnVWs7NaYqzpzDk77ufny59zx7ZFV6QAasTzwXWYh4X238fBZxFuuisUfcSGivoVTNXE19yLEt6AH3uA43RJVb2",
  "key18": "57Fm71koFUDc9CXcsy6HrKWBpUZ6PH1g1XfJjovhj7cuZn2dUhKsmfD36LnaNujYt71ZSMjEvjjomyyYi8DKPpT5",
  "key19": "4iog6EZsgGKSEYrtTSpyfxeRfiTC3nuMgnZBkaZRLrHyM1dDzUngsS3cfbYLkFBgEn3czxuqbbXQJCKi85E8UGyk",
  "key20": "435VNocUGieaXFexMGn9yxmLuF8TyMBJNVwMfSxLdbRU15WQk6yjmWSHVkfWCB5aoyhMdiQEwcdiBZQn32B5k71B",
  "key21": "oFdRYCs5CcUsLs5ieF8Png6it8TsusGG4fAYayxDAJtPAdb564Yxs2wN3kcBpwySCGZ4Va8kg7yW1oBAD91nApM",
  "key22": "46FvYbkeZQAo8GmnYNJAeRBjprymdykWXAwcTohZsi1YbwL1tZvUz6Y76HFbVYtrVkwe5fv9ZkTf8nnd7ZpkHEKy",
  "key23": "3cr2egHcqRKQ8jBUQrr4zUeh26c4yYeDPxrdfZKdTPa4YsGY7Nc7hWc9QVVdDUFcaeTZsUKAhRNBZUcJmfGFjDji",
  "key24": "3KyHX8mJGMTb1gsqBpX7jhyqMgKPMdjsdnjDGo5qjcejNrsePPPk9M2pHaPYwL3iAZBZqox2BZMYA4SGert4njPq",
  "key25": "Vc9Wj9ZhcfY5S8vf3TR1qYqGmP6GJuctX7Y1qeX7MZcrDKMcFswpLWRErGJxKfCMya1e8XRZmGT9JWSFUaJNQWA",
  "key26": "2H723mzE7wHBJjjXnLF5hqybj3nPdQLCmvZ7cTxuGiLsfqhxr8xcxkxCMdib66JTs21UL8WbQN9z9EEw6qhvQ7d8"
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
