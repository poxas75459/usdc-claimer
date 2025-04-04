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
    "2pfRXzgr47TeNXKBPMuFVyB1LoH1mn5K7Wp8CphgXmVr8qtJd5rjzBzcpDdWhuoPh6Qtk5SYxRxqLuobw2J8cpe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67noKMeYrTJW2LxdR1tEsob4qd7s7PRG7ZL4meVSCYNeDVvRJVKqzgaqC9WFVX5e1HoddT58ArXm4wmz3kxUHmcU",
  "key1": "24fLqJY5jHqeDnHcUpoojKhoQcghr8yq98KhaBgvzkFDQkDEw8yBaadPjzxvezC1RinU5WXihDVGrK5KayoP3PP5",
  "key2": "3g4TUEiNThQzBj6zeEihEogPSJvRdE9Ktg5LmAf3csyrmh9dpaA2PNjU4YLH89PWbsPWUpWgZd8NYqWaeLes3p36",
  "key3": "2gWNLTbRyMjHq8uDc74tc5X8G3xsBqMD9DMZfixCrxU5FQQBMyKz3w7n51UWQhtxR9jhUzHHTMUtuVNZEsVMeLqs",
  "key4": "2keUQrYEjr2f4XSjBuwGimFS6HVSw6k73dwvW5Jsv7hNAqZpBYsxV2QSQFWZAt8ncQjTPYUozsaGd7ZYurUhyaPA",
  "key5": "4dqbzTpXATRF7NkL7zNndJ3xzLRXfdnUGPg8HgjwthkDKcDUwmDstVg7Tw3UJmHTXCGjGy2EinqRaUPCwayxVuNi",
  "key6": "5y7R7LP2sRDhYKaeLvLWTSp7qyqZK5rymokr465hQBmPGaxD4V4AcLyQuZk6s88YYhccEruze9YWxnX2bT5k2w9B",
  "key7": "3sTXpTnYKL6MbNMDu4W3Jq16QGqENqxU6LoGr9HE6s6TVZ8a4CBBpABpQVLkaHZf6nnCXWD6RgJzgoA2q4ZrTxet",
  "key8": "EJnZQLaNVnK7h3MktAEuqoEzqZtFn9ZqnmV57LHTBn9Ej6UBYmPDkBwyxPZLxuiSmfZ9f5tsDaTjEAzqoWPSd5e",
  "key9": "5C8cVipNjkxvX3f9Lk7EWkbSvZJzj8FNqoSWTKGvv9yyQGxDG9gxn4pqBxPgdNFqRfmSKdzPKS9cVcpggFWpX4Hp",
  "key10": "CWmeYeJBKJt5d2rfNCSPRc3vVHjthfqugSB3RCJ5Ph4VjDPMi8dV2JRqejxk7mnGNpGeMAoXrVbBjpmivvPB9vs",
  "key11": "4iVFB2AGYP4aqRHPoKfgNeUeerXPJMdMwpoHspkZcUgRAHK21iHivw7BT34rzN4qMCorNY328BukLdEukiWF2x4p",
  "key12": "mdf3f4C6TLsBcPPgcYkVUfEpXC7Esp3A8hEZsyoxi3yvHECgRs75kH5fwh21VXkemD4LnrPUjpPyMBRESkQAwBi",
  "key13": "2s9mrEhcf2oCLkLv6tiuqmbAUC9hXwozB87SFwEdfMRB6WXuAenbFU3sVVPRZZF9TB6Sj1uMAJdd2ghTuEcdeQTT",
  "key14": "5U8zHobikQPgh7E7FF3M8mf8XEaiTjVBY5urZYFPQyfN6kq9uDVB4XpfBSxe6uwrrc1xiQD2HeY1HhFZcmhnt9pX",
  "key15": "bKneY2etixZc5wiNjbUa9Hexe8dj8h3b25A4wHAnrBt8NzoUSqkHg1qZV68s3x8MEnNdf94ryemhfWQqieBw71m",
  "key16": "2RL9dwFMQrs6szNuUWhCrfKBAnweTK8zh6eUY7By3VhzASt788M7t7Lqiah3Ndu7xQTkem5CAgRnUQq9viLC7fEL",
  "key17": "5ybjR89tZgQftJNRQ79Ehdb42ZBru28phoF8Yp2BrfQSvyo95pbSoXmsJyFGn51gZpNU3DCqndjb5c3PcdeXkcV",
  "key18": "2d8iBHcyHzmaHHsaJRqTN9cc3Jq5xPV27RPe43afwkrE7gh2m1ExXSfwdBifFpewSjf5NxFpRnxpU5BFbogBuf1H",
  "key19": "2WSjgpLLaPX8bmB7Pd5tpdFRRvYTeKa8JqfcVtvG1mhQc1hGZv5DiGhWa4yB5rdsMTD137LYUT2NwCPttsXxQPcp",
  "key20": "2r7jwSehJthpSdaGfWpWkWAhvqgrJv3ssSgy6wT2sXKKr7Lb3yM8xb4C2NcJGez9taokPHtbgbnDEFYSLoHzre9b",
  "key21": "3xG2dFeWvLDy6nDdWYA9GQBGMRNMmK8mGnFNXJd2Pfmp7vk9XAhV9DU4XadQ68xPAAzLZayffVo9q924vkPhcTbZ",
  "key22": "21jidRtuXaFhEM2bs9CDFoyrnqLRzMcFAigFPPjAK7RjqdabTzXnr1Nma5juNPadsB6hDijg6pzVDtR9ZuQP1roy",
  "key23": "2piCnmhb74ShF8cNmX8JDJ8PaXK2vBWynCDamXdEbxUdpoRV7niXS4kuLSVmY2795bBHYmf5aqoasD4uJkjPZm1t",
  "key24": "5uTPDdmp8Eevrnir4gg3kerHsmbEn1wKSWEakxSEP5ep38sdPx6yPkjfWEJjsuZw3ucZGMUwrjAnzDagVyhfCk5A",
  "key25": "KQsDP7nGtmzpC1KVhrDFnYK3BDCB6BTeZPMujpzHNeJYusbJRvkHPd8seWyJ3LYKTKfKyv5RbUHSAdQJ54qdSRV",
  "key26": "uXk96PnKfpXdaYwu5LDsXxVGRKU9aKvVMmdgiQKAkLJHjE42fnfjwHVV24etAbMmafCbSv6fkwoGk1w8yR1wCzw",
  "key27": "5UPmZSpZnzdreJu4ZCu8M79HkQ1xHGE2W1CyXfvfwb8rUSiQUSf5SuV54nfg8151AP866w6cUuEqjREC5CUV3Aog",
  "key28": "5kb9ZDHt2nUySCA12g26ijKrU73WC8dXQSH1hrVbsbQF8bEatg1W1P2VSVprPWn8MwqFsde7R6Av4XBCGDXprN6E",
  "key29": "58DtiLF1pwcqoGMKVf2xV7U33MTCvTUQJ85HMDHX1s1izidN5cW6Jby8u5JSU8nEd9mpWsez3yXqtUWg8yeJhWVd",
  "key30": "4edKz9yJQ1aY18a59bQnLKkv7nEGN8qaooe2QckauWWfvRGZ1paor5FiLM1xn5tpi4LFwjzeuXBfAwrEmx2QBeZm",
  "key31": "HN2sFaGScNzp57fFp6ECKzYCddjXYPVpNEUWtd9goZn1y4a2shhxXnAAaqeAJqrcGwQ9Lbtsp3rTLEHmeJV8YSg",
  "key32": "2aYMGQF55tcfkXWRWMmYa6Zpr2NWjg1xoQbNTdZWixLUSVvyZAvPVTm6e4bARvdWbxMPUkbU5KoNnXZnsNfiPgLQ",
  "key33": "22FwoCai4NNPo6M88KSCjWoZvm8oQ5eMtozKgkCSGkzPXsqFoH4mv324tSJedKDSnLzGUkNP6pUxfGfCCGiPVHFf",
  "key34": "4LVKpDfGgNqozrFPzKGPqy7yf1gBQpCEbUFKTp3QkwqPjcfA8tHWH11PSShLJXvqtzEafkbDBgn8uqXLS9zgs9wp",
  "key35": "5Ut2Z6EcEByoDTxgrfRmCJcYhEsifkPG9JgcQSFDP817EKQaQjp5cgiWDm7LHY4uDUmsynWkecCmE4gJLyVcQF73",
  "key36": "jdRgkyonuuT5KzDCk1XLwZcwDiGACXLrfvzeiTkQsRkCTSv3tYx35GkNw8fEm3aKisyJjdJvvUAmy65bbMCmJQ6",
  "key37": "iYRwaN9pv938n5W2FxgKAPKSSuAYCMRNv39BHnwEktKT8QAyzUutWiLnxG6wfTpfmdJev3YLZAVCkZ9QDDQTR5K",
  "key38": "5RqgYynDkGrXApGmeGpmwj4DBLPxuiXYR7WAVhZwuCExp4m67jhTndHRi8y6oWxjZQGmbXqZhBn8Njh7r7sxeEFC"
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
