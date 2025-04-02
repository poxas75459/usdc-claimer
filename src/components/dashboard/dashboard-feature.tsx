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
    "aGXoEBC7UeRxzFuLGumo8bBSgNSMUV7uxgXf1Ghyw5LMFUFvmjUod4Lopk5iD3RNBJcc5BSSnwZxQERidfvLFVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFcTeoshB6NMtM6nNrHj6aLp7vXFE8cGxFHVox3A2TFMyRiLsnwUhYM3QgNmhHDpu8oFd3mf5FsgV3tHBx9JSgK",
  "key1": "4WGWkUdLzHHXqXf1WyiPBLV7Pxmmyc6kuPcVMV15yK8bgctHeLYkPWnj6iDURX7vYd7wSkUHmQ4vPavxn9BS1mdV",
  "key2": "2EdqmS6GsPf71kzw4TgWNarmhPWbCAkfti7aSydfumdqmD8hMw7aPUee8nUYR8WDc8KTmcCDB5M9EajnZRiXyEZu",
  "key3": "4mM6nL3ezJr9Q4Ee42NMT835Es6qf4WLFy2Aqn7kBLNgm2eM2yQgkijYdmtQidBc1FmDVdgWuXWcXJNvy1u3SbAZ",
  "key4": "wcF8QbfTRXBfmm3LDnZk5KE4jmn3j1fdUMifHfoNPPUPCBfWAXWmhxbLubitcufh8H17pM1Cg9XPyzeBAAkCcdS",
  "key5": "4sq2cz7texF6UwaL4DrPKknRAkaisixLnYo11ndtRpmJK7rZvWyDbrhVsZ9ziLu8uryA12udimKzQz6szhTsmCxP",
  "key6": "3Fv7yodG8voFznNXxTUccnbJyxwrCQRnpp5dqQzmvhaJTmoxyebdpg8tMoTD3GR5L8xXTHaAbmn2fhjyTESGHM32",
  "key7": "38tKjDXWBKKfzzy8mcUHapN242jf4azFus7LMDiytgec2kKKaRssPgK8jP5MphrQZiH5RoZhKLPMrJVzrFNsbtuv",
  "key8": "4akgqQyUphzqyWHodJa8AAT9ogEJBrZ1vZJCuQQjzZCs65NBMMoq5FnJAkoK1cK4swMdWhrdKNctpc8LMgiaMhGF",
  "key9": "3m89XfQRudo6FRi9mGRYxujzvFgGEYkmEnfQYsQ3DADJCguVByPkdqSiNeWNP7qJSWpRZ2vTWgATd6P6jas6BJWS",
  "key10": "2hqev4r31uFtZAXVSDJ4Y63WkPLUJSi7zocYHHBs4HXLSmbL72h2XUabGTkhjFRfhctPK2RvncGnoL67tPcaKCq7",
  "key11": "51wEHaRL7jiy2zCBQovHRApamwWaHkXcYoKXMV7p6dVhRX8t1Jck44wzKVUYqVKhKtecsRAeyr7QUmZecpLvDfyH",
  "key12": "5ns9fiDK2bMGC8JSAMibrn44G77Y5Y2TKXuNVPBCAuxtxt9BRbFHE9h1wMvEzdkPmAWdSg926iT1EFW5gaPLMYq1",
  "key13": "e5fNpJFy7t2Ez25Ztb1xLxZsvJyUSpbY2zkYaYj4b7i2eNUvHBUYYbL2PTf4jWneoXnm4aM36pitNxcQp7R9ESt",
  "key14": "L7aymLxT3AVmqwKrj6BmzeYE7sHFB7qHJozW4W5KRNdXB7Kr2aEz6HSc75XYg8hJrpRUzEurRLGP9tjmXYHQne2",
  "key15": "wCA7WA7FJGaKqSjNa9MFzJZchzgoxHQdEkW44vNSKibA2dAdBNU2euBbj8ZWBT2icykAXdYZFPA9HtfBZY4p43F",
  "key16": "5x6zgs9E1Z3g2ekLpQxBJDsLyxD3726Tgu7B2voBVJMMofgEzCQyRisrKyx9ZLBgYyHzmYA7xJsoHJ36MWuJQQPh",
  "key17": "5xMZAtR7SueT7MAposgP9FJ3Djz4x1LCk2bd9b7A3yS6FoUnr3kRYucfveE1ys4SEgfCZ3Lcdj8pasc7DQ3VYzXW",
  "key18": "34MzrYhrrvhFCT9bdmv83svt83u5kQ8Dj9XyXkmUoGsGoiXLb7avJsxUTdoGVtymidupGMgn4sfbU1BpqUJwKVwQ",
  "key19": "516JfXmwnr5iZZinqeCLVkVP7v8dPNcmFxEA8wh2pwSNBSwMbT2SHUsXLScfzyT5emrLocEjNkrZQcVUP12mkH7i",
  "key20": "3CTv2kD1b16PNJyGzAEgSgWhJVezvn52NsXr6afhhacJgdzGba61VceQyDmqUTxCSdF6dsYERpN4fJiwoSyqNoqG",
  "key21": "5GbXgRrn4KL7Ueui61mpwEuc9ajzV48BCzwHVhGWfcuxmWvU6QWvs8xogyQtD1K83tKpjbeoVcUXV2tjfaeb45ms",
  "key22": "665bGan2n7GNDJVMhkNvqDuH7ZisTY6jDaz62Fb98rFCBg5hCNp9B1pZEtwXc6gPz8Yxr59j2RMZEAF7cs9BEnpR",
  "key23": "5GrF85A3EuQGbXq42uKLFBGUbL87AmBWE6cvWwDzQ1TdMcunVZBYFWNcvPu2GPbAjS7UCQV5J8wDvqACTwuM63bd",
  "key24": "6726smxhtKzUYQLYGKXZh8hjLnjkPtb1ve2mVMHoAvMDHaQsrpZNzur6Bs7MHmYePoouKmUCsDEZsfLwQsQqudk5",
  "key25": "2PyGedHrGchJswZu2BDeHZ2fJLYkcw1T51u54CDefgRF1od9GKUmZiEFnD67TM9af82Tfop5XErShrjXKTueEuqS",
  "key26": "2BNuKEx25XhZf8EmvJHJYYHX2RACx7CKUZMvuyq7EtDF25tX9VrMiLpmZSZXdUaehwh2ti3XwFDLdHrrjPMgfY7x",
  "key27": "5EUbBsC93miMNU9m4Y61g7BiTzHiHrcYwCyLTJxLBoNh7orcpavj4g6SionkBb4QysZCBVdyDLcu722aMyQHUXq5",
  "key28": "3upa4hdi6UD2abQwYCx4tf8TnXN5abxFVPVdmBkG2KuCJAseKfspmrXRFnakpWefEab6X24NR9QaEeLF7hXyZg9D",
  "key29": "31AmB8cd8TMMrxUSjwghH5kDQBtjvVANKri6rigJk5FD2Uub8uG5wWPMdVSfpi3ruR7EYJU5mmtRn4zqgxRnkmkd"
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
