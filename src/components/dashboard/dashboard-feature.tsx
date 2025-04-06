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
    "3f6y5MAYJQtMnuqqB9pDS7kEJGf7MutRTRhxGLj4jSCfT3bbDoWDCd1MGxyJb8FT8gTyjchamSZyTy9RZSuSoTPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7pj2k5N335GysCNpJqMuEwM29J9haZvk3y77JvCQ7umEH8K7CzbCpXwyVsLBS1aGgt9wPo6d7TdFYJsNJJDRVN",
  "key1": "2VgoLhAubYtP21q8jSVMqHeg1DwDjfSrNPBqGQ63ni1HxAzBCo8zMweEjGFnf89bzwjgAvWP3NS9znf48JRyyrPw",
  "key2": "4DYstQ4HX3kJeeayQFYrfCGJ4KWmeoV7QN7MfmEoUzjvP5FKbR49SVgtJqbXghX5wYK4Ke8gaJEMK4vEMph647JD",
  "key3": "2xH959bumgqFyzcU7tLJUWcwFjcokd1YFpm11LDxhV8BJLzJQcqVBs19EGBvFoiNEx1hgxr6En35eGWroxzEGY39",
  "key4": "erJX85yfk8ADA4S4BMrfUGuAN4WeYsG5ncGZaKujwcwoRo9UHfNp4q73YpDAPkoF6nKqBv3hWpxN2qUz2zbtSPr",
  "key5": "4qUW6xBvCkWVqzT5scBt2Sd9R9FpKQ37btDP7UJbz3ncupF3se1GSwdj97c9D7NS2eXsdLUYgAHfv6XU1YGbKv8S",
  "key6": "zefLdynW9TjewTDDWQ5V5sqUwsrrLKvdveKNjCebYW8kfbke4fxFm9aDkJeaZ4kph1HodvxVYEPe33p7MoHPckA",
  "key7": "4oJb888gBxKaBYichvpGzPxh3HuRwevmAkMRPmeqcMhLZBNTbY4UjKNyK974fX3jCrCec4PiC5XpkWMKSgBVefJr",
  "key8": "JwenfeNioMAUXLj3hntg4YF4CHLc9xa52YAELdcRYYUjnMddKSFgsVRE5siC8TKjyNhh4CVNAMCSyVytB8c83LE",
  "key9": "5dJm2p2tvG4xpr9wf22LfKLQQje6biikVSCV7TE6SJe52eet5TM9qezYJwu715MMVDEUtqo9Q8aejpVgEJEA4FJ7",
  "key10": "5Qpa4N5inSMUCQX8ii1KS2gvu5kraMqDbKoeUkaAShaKhM1ERtke8E4EDrezMGaa17p7SfGk9KMax5cNoBZwZ8E6",
  "key11": "3X2q2T6nrbxyV9aaLZG4zL1cpJUcfavXNn4vTtGmhnWpWZ2TzQJgo5Nj9TTXBjgpZNTa4bKPx2oJUPyB2TFGJfVd",
  "key12": "4FGU4VDWKqtCZmBiXgRVXZdEbZTraPpGkCNFVmv7qjMh8dS7cHNMSJx35kzTFmhgxNJkjken78xjeG7B1cv9m1y4",
  "key13": "p39PL54tPLDAUeCdQz7npKYj3bzfXfaac8HYjyFDfHrq1GsEhVmFXefHSLBjxex64mjAehD8mVowSFMijFzTsyb",
  "key14": "3GF2YyYFhKikhpSQ1fstaWFQoyrbhXi6kobRrzDLNsmYCTZ1Zw2i5S8aqbVfchDMSZ3JURv1h2VQydQegs7uDcei",
  "key15": "48mLHkjXs7gJhC1gfUcgabTGcQRvmstrfcZJCW3LNfMBvzV47TeUL3WAxXJStzWraoq598owqYkAVVuvsjGLuJzo",
  "key16": "2xDnUf96afLN8dqJFPfd4VA18n6FAgDgSKLXZwzh1gcYd5rCqrYk9D5BjQ923uA8DzwHMkMtZ4Bb9Lh7iBZs25DR",
  "key17": "2YbVJv7yHeA5Ppt5rgWZSx7uYpaZrYaVZ8zhKgWGjGMFQrz1MMw5ZtMzcgBQPqA1zdNVzuKEJ7kzKJn4WTmu2g94",
  "key18": "3MzW43vCjTVyHUP9cUvWsBdXvpRVPYE5SF9hNUWzPogirc5TnHCpfeK5Xz7LN7wmcFYf7RLL6R4e9HaSvRxbZqZB",
  "key19": "3KsagxQDv6qCZKRxvsom3spvo8S6fTA2JeKYEGJVW6cUaeFfqGbYQJ4FXoLncvZruvDPCmNEDY9zmALhkW9wAjFZ",
  "key20": "5Y14M1L3XZba9hwa9GmCiyBS3E5nWcMgWfsjFo6oVUh4d51tELMeBe9D1GDkQWfmy8NYQZgPJS3KGU2baH8bqDD6",
  "key21": "3jVYqufrLVmrVMBtqaW1tTj1WuLbjB2ZAfgoXcq46SF7sAM2oEvLxoBZ6DhQBzbavBvFk52Yyyh49juV3baEbhur",
  "key22": "3ov2V5yMSMKDfNoAE1Ny7rJTLUGEetTAZgErdhD6nN1TMRci6giPhx5g2sgDdSMvgCywB8BNCeHxj835ZDAvRv9u",
  "key23": "2vvcWPpBg2KrRaMuBxzCdpkffWJv3zWdqkeASJ91eEAuVgDeWxskpzzjMLE2qB924pSfAfhptVLR21tKv47gcV8k",
  "key24": "313Qgba577v6fd4epsqPZgFqiEJhytRzSDCUY7aftpVoVgURNZ1NxS3kBLtuSyqPug9dxTrNfYyuii2fBJMayUGW",
  "key25": "31diHFxjTWhdMQrrnYhuuLWHHVwLKsDohu4akZBJDqfQu2T1WfdqJw1oMeAZDCasXV28kmHTGnDcGc6DVHWoFrzD",
  "key26": "5wV5Rq9C5J8oATjmmhcemdSHdv9jaqVkbD5ngqYzL97gAc1eN2RPdgtPg7YVWh3j7oNrLoFhXme8m4svkMKbzyJC",
  "key27": "54GjGTquTUGMPN7LLu1LATCoZkGnzD1bupJfdZE7LsxRtZnBi537ar8Axf14uqqhEmHa3hW2pH4qBHwitxuTxPUk",
  "key28": "4iKsPhsNtJ4ik5beZKKwarSvcCyTSHdENoMdogDdP37F8DDUHcwVe6Sc5bDzm4imn83rrzq9QAhPS6HEeBqgFNkd",
  "key29": "58q7KKqrbvNmyCu1w8xqSnoX89zyRmzMA4byz3ktDSiB1T7jbGUzGCmuuFEtMRk9CJccYnydq86LTHcJK5kiHPTb",
  "key30": "3GE97PcJnrgFxJHVYNudz4NB9wxMrQsY2LnZmYVgPZSmNj4CAbu85dQyYh7F3zXbQNPhcojY9ULBVDJEBmRsRFDc",
  "key31": "4Bu5Um1MXpu8fJP9xmkn97KC5b3LxvMXDtc8AwBULVBcdyK3WbeEcRGWZkWV94gSjG6nKH4y9XRqp5SqYs6QJUer",
  "key32": "zbeiYzPTUKjsucBp8W5GRWnXLS8ypsrnN3DLS5GqCJp7eqchLz6ZkZ4wnuy1eSYd5PiokoX8sida5ZdgqncDudL",
  "key33": "4AdcBvNtZ4e4M9NWXiZqBW2JMebJDNyRLrULZZHHziPgheJ9NREQ6NrVMeesRwxRYwmsTK6Zt69G63qVPrseFtZa",
  "key34": "2vhVjEcydU4rWdPAYmLg5bt6g3pdFFp6BGFxsAvY17R74dXdTUvGJowAsXC4iBPjGTMnVWKjkpfc9K9Qp7y6adZ8",
  "key35": "7ApyRbhDwUBYs1RD1JpDtQs3CS7Pe5mhMRoi74C3Wgu3iKvDwAdBkUG65XCtpDDYZhU2RFPmdvbbrF1fextPZdp",
  "key36": "3Q9nE2izpt4QH4PQmW43Pa53wp7F6GdjiEZfTQrDT6fQvB3BHugruMxNs5UxwDLkUNSHRZ16k4BfAk16NAFvS8gc",
  "key37": "3uKwe8xqL46QJWQZQuLh6ow5qxv8D97385vYkjhd5F3WK1KAtRg61PLmt8rsBLHfRnddcSXSh3qtJCH9vARmxhwM",
  "key38": "5W49RyDFyu1HmFkVRSwFeGT6gfjPSjW2oE6CovYmVHJyNxoiYAksDpXK2yYoznsmgB6Xy7wK6iUEvdvhFm15RSDF",
  "key39": "3XDqhpo5g96XA4Tnytkfk2fkhJfHvtgrtymVSF4Mo22yi63Vqe5NSxyQ2t9vCjP3qRvJ3MHf9svVPutu9y8iw7TY",
  "key40": "53BNJUycaCXEQsRTiNCJL9GiPJ7DuZw1W3SvELa8pA2NPwYjFYp12Qrkc3ikaZjqrvto79qj1x7j87ChAaugW8Lu",
  "key41": "25Gz24oAfqV9FE6PumZSHxwmtXcY2RbbLqenyZmj9sWkEycroJUWEPfVpVNTK1iarjSGjWT1WcQkJk7gtp56dLTB",
  "key42": "2HGty68RTxiJYR9fMJSefL3QLVQVP6RzCaqqNBZZjzPTzdAJa9zecyoy2gBgakfLTdn4ykQvSBR5gwVrfY3biQ5c",
  "key43": "5eLRP3oVsg36AE8RRZGksb5eN3zp1qThXYpEvMhEszkZ1SQtckdUNoGrXctQcvAwLjgSMYHcjv5xNu4y2rqkFqVy",
  "key44": "3JVhyec91ZWhmXmEDNzKzoB53CVqnZyoAvtxmg3ctijLgfupv3oHqNbgYe5BFaLcpPzznsprsuUo8Co1psTFGiDm",
  "key45": "22fyt5wJ9qXor9PTAt3oDxELbb8ujQVMcrhsC5PgMejLn1XgMNtfSFKHeyVq2zTixEXebQwMh1ew8FtQMxGPzxEx",
  "key46": "27JJmN2d1Ukuag9qooueGu2njfUrvB2CBmcP6YPUeuiTDY5PD2YY4kumQKnp1cgrZZvE6zr4sXacNDf1foCngqZA",
  "key47": "5tbqzdkxyqwAaQy3DzEUL7aTqvJ71Z6fNPkEsR7PtYTivLXXW9RgQSj2abWx46qHYKXtVspEWnDPCG4JoJX2pwK"
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
