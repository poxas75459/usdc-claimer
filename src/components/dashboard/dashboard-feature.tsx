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
    "4r2UCgsEopTGfb64jZN92oRXVjgWpjRdA98M96qyAVtP7r8da53AFY2Bs7u6Eo8cT6E2vxe4CDCcNHvTtqreCatB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nr9ruzCpuJohHK9dwykCrrUFeFrWXVaSeCbNz54TDRZgW3nw8Rx8xQAYkQVr4gBXjy4qiVbh1K59mtLXQXx53e5",
  "key1": "41c3RedDMVN3qAmsgM25B8gZPiMZNNZi9uXqZ1xocn7ENKGaX4rXEsFTtHWHqQkobCyb8XrzgLrptwjcCrnTBV83",
  "key2": "5DzHBHYRGGDyfN4RFv7sY7JhZM7kpSuLkypsA3AeWs9Yu9JZv9Q1fQzCVnnMTGbJWL9JxLiucdi3HiDMNX57EctH",
  "key3": "kds4kMh5bXFNi7CKnwH4DdLYMdUGH5rW7TQV2WnmeUhM9xfuQCB5F1fzZ5jhNpA8NtPpp6CDrjU9DHtwK8KuF4K",
  "key4": "vVUj8Rxcicxo1aBy2vF2NGphyiGbS6nJEvYDQHECAaoZuDyXTZFhB3a7F7hoB4TdMkohGSMm2WkRUD2D1E1WcXe",
  "key5": "g5V81LoTLyX36mm44ppSQTjDeKqQ1Hi5QMfb21wmxHNfQhnfQSVaSWfZYajmW8eL8koL3yRqquoPiNXHy3ZZMNA",
  "key6": "f7LNugL2fz55S8xE2NizFYkkGNZhJ8U9fKosJZD7SZAacVMLQriTfosdyQBox8bbs1snFiqzGRxU6b5TxfPew2t",
  "key7": "3hjgggaVhoXMTiTJJhAyL8rb8yrNMJE4HkCQPt9ycaVuTydBfXSW9FUZP6isVDtdvtDTAJgiq1tP1wrNx1p8qBuW",
  "key8": "4nzuLBW2yBy8Cc1sn7nRbU2BnNZLMDbtfLg7rtvsaZjgn7SRf47dvN4rz755bfqDnkkYNXSv6YE8Uddi3tuvX6DP",
  "key9": "2c51sqXNxNivjdsDTrcuyjWv5aW4S7zj8nkP1axSquZnZb482QcCH1Bvc382AtRF3PikU2LXzJfYTRwEiafHhxBZ",
  "key10": "3DzGGdC3irRFSDXQgit3gaiDF1DN5pKxnNLrkqq6KopTMX6satpDx3YJCDT4pt9DC6njhivgkhNDoSWSix6vWyUh",
  "key11": "5CLJsQJeuDev1gSUxNsauxm2P83HZWvQoK2tWLsb4ChZvpsLyvoyhdSMdzDoxEanaoKegKBRLctJ7fXqh1aMs9oG",
  "key12": "5TEq4UWwwM8qh59E6c9TsxRGUxvjH6BhsnZNmNMBM9Dan1srMkZXjUBngGQVzdU5tp2Gdt18AeMgoPBtzb1uCQQy",
  "key13": "2Sd6R8cXGYF1V98cL84eFMm1dSWz668v2mSeJWhts4FWCh9mp4BeSgB8d2HB6KndvRuJFCEzZFFLkRfiPCF7og3u",
  "key14": "2RPhFtSZ8wM6DCN3HsJ2hXAtrzfwJqC9Jrgn9ooUPd7LDLeCJTS8h3n6Q4MnumtLhmyPCpx3E1W15713J9BHzH29",
  "key15": "29jWzPYwjBeR8m5cm2Lu86d57q1roVsQCWwU1oRyDPQx1VK85CajJg5TokTCdM3PXE4Zd6ac9io68F9HbV1SbGfT",
  "key16": "PrVbiFZuHseXsWCZXD84KekBDAikDjFvcEhpHFAGfEA8N33s9UzFkMhfNv6wmfPTXKDrq2Z9JDkuzUgNbshabNU",
  "key17": "2mu8C3S1y2Ner9XY8EhhHUs5yUs3HaNSuw5K7S9gLRG5yRtz2BQyAFutVmABeypkiFi5qmTbs6W8qt81cpABDojp",
  "key18": "2fsQMgP3YrTNRLeScCANxmw8QiymnUW5oA1LQUqdE2kTzNKqA7t9crDvEc3sqTNFQvoJu5esorPgABBMLt4jbCSP",
  "key19": "2qpFMYm8iHUPVfohttbhVHgFjYnmLrjeD7LG2wBpTFzj15bG2MYh5Rpf5wUWPWQwCsvrJcVAiUYo5xvd7mXMtSLF",
  "key20": "3jVvbsybNgNqKRw4yBkjqxTFLgcvekhiz7ubHr3m9MHj5Fbfg6S5WoGHa4MceAiyn8ao2T27gB1QeKn2WsUoHFMe",
  "key21": "BgitxMFoshEhqVxxNNvnFafKW3mtWtw5kX7YNheKeLUd5ixFtSfLLXwDd6vTZuxmqq7hctpEL7hwohqoZQk4aVo",
  "key22": "5JgUNNwgEmyczAXHL56dAzGfkmFmAU5HYsJbfc4zy8yBsLrWEpb2T6FCiQuqRHMAK1dcqowsmDmGZ8Rrve4nJSSW",
  "key23": "4ibuZD7Y2WdoPcXPkMLPMpMXJEiEgGz2Cx86yqsKLb38dpyGgfcQ9VKgPrseCaoPKNs6QHWq6YDQtKXDGw9xzEGd",
  "key24": "5T3Ks922USbWx6Cxgu6ttHxc4puShdc7u4JEWjzbqzFGNUCrGJLJ9trtngJR7rXcsr3KqHaJqd31P8ynRjUQijZb",
  "key25": "sJaZ7Brqs58yAVb45qygx8ZxZGhR8wnVJd6nvxTihCfMD93dk6WxfjLnGPWbrqWVzRAGc2qpcRuJhqJdYJa7vpj",
  "key26": "kGiBKGSunbfu9sjYrAUWEZvzDpK2LRzZo6FvccJcFVTf6itfu29vvmTxEdtqwLmamM9sg1y4R8vBbiuPK41iaj3",
  "key27": "3daFaHPuRg2kVhdMGK2sZpU5VQHmFyV5wqZ3wqpb9mo7o2bJuQHtgNxxiU5KxKjdz1HgGJjGAqA67JruwYu2yXjS",
  "key28": "2rUbw8NXS1QZhnBoAHjHDqFsZBTyyJ5jRbzBPwHU26vahEKxnVAht8TSdgHRWR5JPPRJSNhsERse7ZTDDQZjPFGd",
  "key29": "rcNFWVDppw85JxJjWtVo4eK57XhJeRNKrzQFoEjctVzrjMxLGjKiXUMBvAmf6z7D4u2WwGDkNAGu5CUgBtnJQb8",
  "key30": "U3zwkThR9e3qpULSTnkt79ugAnVg2f8ihP9x651UskTqMhZ3EdbwJqefAexgyF6VF2RA9T7zEw5B1AnyDirdYSk",
  "key31": "4LbKMe2DKBUCg1ZFNC2EeJtgdRFhF6oFT2SHQhJ4ocUQktnPYVCDLn67uUVvqee6MYEoJary5ZATCh98SH2LGv6m",
  "key32": "5yVMiNbqvvxZzwJKVzUC9eAy1T5AU4PHhpdXRcHaTRqvBF57kwfp57gxMtAwxtSXQXnNm1KjTMbrzFNH23Znsnd2",
  "key33": "3GXgTuo2rLRHN1zhh9wH8nBcxoaoHSZMfg9GxaevXmSFGd1j79mGFZeKf9LoNgHojaRG97h7kfkoMhFGPjimL8ZV",
  "key34": "3Z6KwaPRB47YAQ1PsTPiUpFMCXeCQySEwC6kNFGqhmPZLdFM3gEPQJ8zk7nDaZk6MvgnQXNJXzhfZhvteZjBqqY5",
  "key35": "4NdH5YkPBdzBubqVD97CV1ctkeXhck4nXihcW5yQQienmYhCysFSp7ENEMohU5fsjxSKx4rfkT4E46tf5kPyALBq",
  "key36": "e3iMxQAe3dzjW7ZRVkowJwvBarRF5eQnJNLi8KNGeVbNQVZg7hmZ5v9UW4S7BjEJWCFdriGa6LFcMhPYsi3QKBt",
  "key37": "wLTVTnzLYYYqrcDPNdxqAVva7KgL6ZA2WtNKMhDhYZpoH3UyPDPrDKhPfrrSMMAoxgKMy396wKfacGvCgqXWvfd",
  "key38": "3VYfVEC7CyK1LqgGKLiDD2aJUc1RyUC3oX8e7izDmB2VxyeRrPMrHBLkdZLRWLTitq5ioX3ru4qfCz5fEcrAnk3U"
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
