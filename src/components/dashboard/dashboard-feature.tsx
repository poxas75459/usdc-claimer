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
    "2Bsqah1SM3QvvVg2Azp6ax23MHdmUuV47UdJHK1a2HDf7AJXLZzzbMhgLFPNJCJJ8ATpAUYsUxZosNvfwVgCnixa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrjWG7367EmG58phQ1ax8JUA4xRLV4uxq153A2CJKzGSGxLhJTXfpTNtdbmgbhi7MZqmcJJDP3iSc9GiQPBH66j",
  "key1": "3reWLuBumHin3FqXBXnKEZ1ZC32ZtKqmQhteJUS2Ko9rF91HUajfnSZuRitGYfC9B9PbhVhKGL8zVQEmtu4Goys6",
  "key2": "NdHCtoEm1sUciP8L5D39HgmgdA22CArh9k6BWKEK3NEYJmkBFXA9t6CeZFV2iwC6LbShQSXNTThxvrGfnsVrHsp",
  "key3": "3Pp1vesB4T8aAVpHXfrJSR8XqMqY6EwEtEGNuAHdkVYDZvW2mumY6oMsqGNRDpwrKwcuemAKCULcG3rQXFFSyJus",
  "key4": "2SgGdbUNMrer6kFoZvMJhJF6jB3LQ6EBmVXpe4bNYaY2BtwvTeU3BxmpbruNV68uf2omC1MurotwUxoMa9i2WcvG",
  "key5": "4mQLKu3qa4ULHzWjxc2khHsbTLbGMdJfL7DJTBZVo247UYQwFgK5kJFe3ZMwd6Sp4v3GFyga1JqNCse2C5dzyvJ",
  "key6": "3HdpyfUTevk3C7tN1PWPhTBGJVa2n4fVLH95jDDihoN8NFww96xrcMSk7JNdLzJuQwFduhUESBprCQuXqfZydrAt",
  "key7": "iwdUvtdWcEnLYKH5cKTCUM54dBsuPCmBKRz5eJH2or9UV5NRW4m3E5F1KyxVRLL4H8PCMNR7H7igH9fJmaK6rTa",
  "key8": "2UvhPxxUYASKYTVCfHtv9j5qGfSSxNL2JRwaBM1StcH3eBj3v7ZNnYzhaPou3Ja6xyA6A1Q6UybvSqVXATRjipNA",
  "key9": "3wWT5wGSnZ2qmxkGqF5SVfdexgqMEQyLjnyGKJofY456YuMw4mEeuRQqsiFUk9uLvdvVK3c41b75aNHw1udD2aWH",
  "key10": "4BpGUbCSHWHjDGFsKy1VUCnzgPUC3vsG9Ty2kVyAGbgyofLvDdBur1qddMt6aMwqQmVV86uGJVeMPhcLbLhDK8Bk",
  "key11": "5hhSNUxtJNLva93C5yb1HGeH3NE2ZdDMkR3eXxr2JKAtywgai2wKCa1dceAAm6C8q3Hryqaa1XBRBKkr7c4B7Xsz",
  "key12": "2U4CppaXB8HcTDSFKseK7jz1JibaZZoDnPAZrQVx69VnY3Kid3NEWSZHVJCAURJvApCh4fmwBct8VEqsd5sNApBV",
  "key13": "5bodq9dfABMQ7gg4sMikJKVnAu4No3BKtBQhUVDZx5USyQopQVofBpDvxnzCa3n5yT996b81SXDHnbMyxkGVJnn9",
  "key14": "pM1WAxF2J3PNEVZ1nHE581juGnr6pPzBjSiESq9tcmGhLBJHDkjDS2rMnzZDK7ixeku9fW34p6hDcnZTUfLrbUr",
  "key15": "3KCHPczG8hEdnVvy1GdPRHua6MqMg8CDJV9ZkDKh62XtvwzQ9719Ufjb9CnL615drZ9T9BCNN8srz9kxbHrzryGh",
  "key16": "QKzy8vdWLzvm7KmNiK6DoXfsezZUFHEwyqSh954h8zwb95JEvdkd2gFWqUPmWBJzmpHNgcQmryn2vYEXtx6As7U",
  "key17": "67Likce8xvC65kbqfGacQ3J5QSX2rwnHWttMxJP75bWQHeQfWnzVNY3DY2c1fidmYfax7WRaZGymyDprzgLS3jJr",
  "key18": "5PxsC4dZgohcosVfELZQKUh3irhAbc4zFVUtAdr3uUhzZV2Y7hmoRE1htRb8qrcWFZMrwYg5FzTfCutVXKQkMCML",
  "key19": "5LSUXs7rXZmYgwWDQh2Ac4x2wCCaE7EKTraGgDpCXX49XQW54NQkKS3DMTni6SyAndDXUKC9WQ1UKYDYn9VjDueG",
  "key20": "3M6fLZpFf19biVBonPrUYu37M61vNVBSNkyAc7gk1MECzYEdtRCxyjktuxy2orAdYi6pcb5bnUQE9omM4CN7qCSi",
  "key21": "4PgUaxuwzCEwxrifwySN5odtsWxzSBGnbJpanPK4YoE2WnVgGiAqZpABBkMDRuzb8Gp5tbzAuzGJDYs2WNxdyB7e",
  "key22": "5KJ2LLH9ToBEqtMk8mtFW1s41HafSuz3Job7H3KKRYQFRwjDd82Skpp2c2X2nVmKVF8rJR6FBPotQH1XmLfJjAGH",
  "key23": "3FXjF3gxyqrCssYWpYreqEdw24i7xoneFH15qCb4HGdrmeas218dYmV75Ph8roXmjnSWtRf9mJQmr8zYxxB7SvSi",
  "key24": "2c3GjWA8YZGrdt6aZ4C35jjsVD4vHxZyF1SMUrKsh53hYj4mguruWznk899B7k5UGUUSk9kV1gGNWoqXhvzpDgLM",
  "key25": "2CtZzLngeCwDs43bM1FEaGm2coWrVCAL1bGq9Q1E1FZiVvwR7pmr43waCvQZtNnFybSp2BgGZmj6eTpqfGKgxN1Z",
  "key26": "3wk2BxYtGDvRK1T5GsTmXCPeN7cdKXKtTJX644NiqnzVgRqLU2qyZV9tKvdfYYj3XhkHMRSsRfSvDwC2EMzgGmLx",
  "key27": "3A9aJeNrG84g4u1dUt1VNn7X5ctyyUyiNdtoLZmgCJFskVtirGCjjtUcaMms8s3P8yhgyCp3M3Cx34uRwAKEbtr2",
  "key28": "qYL17U7Tfs98JXcZiyPNVqAhDAkEEdxxRoSBLsYMoxS94FNxZqMiHeX7NbsVQ8RnfwQ9cw8kyjxD7dev5ASfzYR",
  "key29": "2jqruxwPBiuD4HtzUP2L988Y2uTTixzkCLmTQvNXQyX2ewvQ3wxrK2gqsWaeDjRNcXDdXNNWdPYgehNVpepTwNtw",
  "key30": "5DETuYo5n5rsrFz22QEfTrgkg6haqmmZAGKdV47gy3psBvsyrxUHW1E9zNx6HYvpxoSyJ27FhzcWzcZBgimzPT6C",
  "key31": "hgsKhCTKFfcfW7cRMKYMRRuJqRWxGFreujxdDsfccfmJB1qrA8gGrBGqiFiLTF71CS3v7bscgMHJuxTB5zCH9td",
  "key32": "631JetWxWsrMjmxK97VdVohSjks6NtxtRjTshQJ4tfKfwaGWytXdiwqiztabga9Awv9Le2CNZDVo2RpjShsecqi7",
  "key33": "3f18nr3hBuZuWYhpL5EwrWm76UWuE42MwMBA242o2YkGGhPX6yzWzqdxA9ym19Gip5B4tZnF6uYvukTmzoGtnNrR",
  "key34": "5Dv78HMLLAtcd1fTWkCwV5NjWcKDFrewvMh7rPQ5hVEB3DMMZvZRtC3w6Z1hXxmSxeEu7aRkCCpLxwNVmvTYKXJu",
  "key35": "dbrAnx14784ZuhR23MQa3pafoAkpUN8J28a4XocvW5mfSGnf8m9PTn8pHPvgdxyKVrRoRxe8WWXiCLmRbix4a4m",
  "key36": "5U3k4XDnzpdGGSwWDBCaAF9G3MMH3VadxqbC8sb6XkHJaJctTgU4Nh6rw6MYBmCzoxYoSJgwYFDbiMqpSvVVhVHU"
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
