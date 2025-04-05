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
    "237RDUjmSEVZ4ntJwtbVbCxcNT9a5Ws4hdWJcVZ4rvkkJhoz52wZiCM3fJWdYiaSDTrXvvHEMJjMUNsqmtdWke5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUAzc8n4nrtFs76ZPq33AAE8zvCn5eDiRRB8QaMNxZXafKXUGAtfU53HC6DzQ7G6BAgMzpkCTy37Zj7B7jrC79n",
  "key1": "5umXgp1mFuVmaQ8gdFAnGq5jsZKSZRqRnJCGerPxGSzsPs8QAtd4YH1sy8SsBT8gBH7BGshwRBVDbq2B3ov343xi",
  "key2": "4ZhMXPUwAh59x18bfUZ6UwMLuKUVkUXLNFeFrucDBpgriDuXmJDRKtVmqWE8sajTX7Ng8roVWZVtF1pNPQaHsFi",
  "key3": "5oYXpSJjU1nsCR3XojntKJ7oz1ZX3TcmLpUYP8mDUpJEdbUjpbKRwtzqxgJ48rbA6HWsMsLGqapWfpCtqb8Lpdx7",
  "key4": "2e8hVZV5d5mAUEGrAeqS7CTX7eGFFv8Su3pzEWx1VSNJMRpcjAQjk8AeYXb4AcFyyZmW95ZtDiQEoppnmRccikA5",
  "key5": "3e5jwo5med9TZZw4nq47jHwwRfTBJmMVmzY6vMnaZ8S7GHAiM1JnFNaFQveH9JvRnApK3k4BnZTeZwE1tfEuVuNs",
  "key6": "4tCShdj8S1VxPbeFT3H9Z4MTaXLb6VkaaambDzz8DBV82BcvjAiGfehSqRjouxzndx1h6YzzcUubg1ocsyVwM8mi",
  "key7": "3ykC7LvvmE3Vo5bqa4h8J8MkkzVHYbafKC59HcQZ2vQ2RQkBzjNvSmWa6Wm26gRf3HuF9fkBw3g7LZQCpnnRNRVp",
  "key8": "53hkjLRdwb9SvcXUYtfWcS7dsXp1WR3CBE576WJgSbQT1npTD4SDB8HaG8ZqCn7VUx8yJDQbs2HZnjUtsr7cdZjA",
  "key9": "2EoRdispXX3FZXLgSSpq2arFVWV4937yxWSALnpJHMDwrpVzVRqXqt7Rd6kUEcteeihSQeC61heLnBrSr6SPLDBo",
  "key10": "GTgqGSyJ7vBwSQzAbCjTr1Xwp3JditNnjwrJWwZQVzsbLfQ14GNKedYYfZvMeSs2LD17jbCn4YnurKNjUyAkb1K",
  "key11": "4Nz68Ce1RGfnJBqrKa8aARUi9PYhWLbdpfZz6UsGd6X1YLnHa27PY7Jtdd7AK3gVuwux4gtWZfZEksMSnJm4yJJz",
  "key12": "67HHgFmBXCp121LjU34dyckhRxPCbhfyHYf1gJCrKnAzBSeaq6epw4stTxEeHGE1ukPQDhLAGyjiSAgzCupXtfip",
  "key13": "2jLqWMXqrhgytUogTyQDCFBG25kesW79maQaaUGtPCRoyknwKPoGYQJE13uXJm1fuPbNidRfv1Hgq7d5XUNUCaB3",
  "key14": "9PLnDA1p4Yvduz4aXCxcwoT74eHRV3anRGeWo9TjPWzSXyMmn7pnAqvtmFDs9UkHXYhyVFZktC1E7FKdtrQLtdT",
  "key15": "5pMKxfYYeDmSkK7r1fZcGijkpvdYLFE3NQNFXZjd7oxRmR7D45ir1tkjsYiWBHcVzerqQ6CRusU74Cz7BkDQWWS2",
  "key16": "m95TBDAtUcm332jKuANTLQcGF7DqB2um7kg6vo9n3hir5tD56XPs3Ey79K4qJsRtUsrXH83o9GNQ5ZG38eLFCt1",
  "key17": "3y8sBiPEa7VXNuijXh72wnMyxZgqtiCS33Q4fCVsniu5vTM78sUbDxXzEACq3aNRVewnt4am8wedDTGrrjTry3w5",
  "key18": "29J9evEFSvCNoGixJdbZx4GgDwWdLf7Weoz2E1wUPYmnJpWGERThjAbuTi96v82txwxBAxvybsrZHgvyaNw6mxNp",
  "key19": "5qzvosPecB8Yfah3CQPeYBLaCihXD62Ejk3JfCTXqKdXYLTsCDjSk8dMUbmYzUu4ejJGPx9opnfzUrDjDBoZMn69",
  "key20": "Mibg2gpZzcxaVWUxH5t3iyv8vmyGvnNkGMSetPjTJiagkwQPxbBBEi5HN2GkfTK55GJcVAdHBjRDtE158Vnp41c",
  "key21": "3JLsEzZTNoadt1x4Q7jw3emtEiS7SgBsfwaokNHfwmJCbktJH2yVbLaAMFeeMyscRGpRnHGJr2nJFZLgNAywi8Ed",
  "key22": "67j9cyaKGDqLt82GuFNxeDxBsJYombwghUw3a7ARWWk28fpueyWi5GM2682hEJQxmkJHvcGPdEYpYA7Mhj79SJbr",
  "key23": "2EbL7VjhfyjsHPRzyrwyUhjK89cUZqEMfNuLYMCFpiAovCT6TWwV12pdfysrDWrrmwg6rB68GdUPMS9A8jxRJkUX",
  "key24": "QSY1bFwYvZHqyKW2msJ3p1Sv7PArKropHcBdyYRtEpMuTf4F7W2AmQZVKpjrYMY8sKpd2VNMQrJLGTXvQMk2FdU"
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
