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
    "4PvZwLkZaZ8ZvBtqu9hP1ArrEMxjygmCgzXneNPxpdQYSXjfrVsoMMspzTezQ6zNvFKpzBRWjyVcQAa1rjXTcJUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47aw9XjJAyKw9jJEPGxtqJ9rVABWxidWxXEXLX6JPr8PSZ4MBZkC2PtmSbQq2q4q3JmrfBHxw68atD15MWvw4d3J",
  "key1": "5dZsSmGJAS6XPPbGsmkDJzzgdzyvHJF3FN4LP7Q9oo6YjMACwu2UdJJDDtvB433oDQwcwdGvwPWNkbPkm8nznLt4",
  "key2": "4RUUYx2uv7uzkWbGHmN7fqypV2bnZDsZhikKKPu4i5auPzZJQLKjXgi1jrsPfq8ZvsM7HgpbA5Q6jFhvjWyuXpvz",
  "key3": "mqPKTi6NjpJJ2Ke6pUHM1HwShKyFwtjtKDLyfxmvsmMy46tMXeKjJkZUC716evYPqw1Hr9b5jsMAhmE4oCBg2tk",
  "key4": "5EjG4BeAqWDdoctNoBmauXcWahSCDHqrfuifbvjH8mDEfWF2Bt9nn6vxfb7vJ79cXK3jaYKHZHG5dhEt73AyDBue",
  "key5": "3CCwGNU6sGSbghXzRHq3vSrWonxRhWsbo1N5XW5iqfM5ButeZWjfRYzUvC8vDuJ3SgdzNSSJ1tmBPq1DU6oevWWi",
  "key6": "4Ek3v6bNk5Hss21Cw4Jj1CfPLxLTHNgVma2EsTbRV5Dq77GV8ReQDtHW7jcmxCDVhJXprrxCegmS24TK5z8WeTYW",
  "key7": "3gMmbyvQduzTtZQ4rxb675Rjds62udpyxsfyUwjz87AwMTcvax2ip1sVjSNK6998RKiKDw47REZi1BZGhnfrwGoU",
  "key8": "P918JWHYSZBWkebiMmir1QTTRSGj95jz4gJQADJd91ZWupiUAaH3g52E9f9aQwXdkJnMWWq6EAiSbfCQD4XFZBE",
  "key9": "57cp3bB8DTf23YfkRw18L29pgyRtqt1vDJN3ude3Xjw9hmtuK4Lc4pr6jpNgZvm1zroE2D2aUnzsjDf71ZnQ3ena",
  "key10": "3pNbpJLbW2d9hsMrG1yceboLJ1Km4URgHsRbqdXXPqcB49BmgJ8MPfC5M8pXWv7whWAaKRtcm4GY5vNeGfDDtKEs",
  "key11": "JFrABw658thZM2yCeZhF3tqwQoZgyaUYXzmPec45iZmf4eeFbscFacC4MK5bc82YPFD1XbL8Vh9KKnAPtowkRk9",
  "key12": "5tXkgHw3T626hN3tnXyGPLuKPnPohgEp7izqAYviRBydp674gdQzLrBuBX6c1XUZBs551nf2Y9jknXU5ugCty6ak",
  "key13": "5RdYkv2WpxZ1EJdyhL7P1mfDJJjtZMcPNEwYNBCByQjvabWuv5ZLoiyehUZ3BLGS7wVTcXx5SMKWdUhy849MnmXn",
  "key14": "65svzTK1DwZtmAnf8DnC8LPAaqKeujB8x6iQZSUPa7LUZpWGk29PdBZDsEiWYhV9zFa33gb4tkMsMetGfjev66Rh",
  "key15": "PFd51txkXCrBD3xCWvc468pArnMW5HqTUdWgp32WmGnp6NxTmX8YQjWwWJtb9gEGzD3xTK9bANU3UL3wk7fjg1v",
  "key16": "5yrK3NQMtV4bTGXABB85Hi5qhc4vtgHr9UPXFSsvy2Zpd3scufX1DHJsvMREGBo37kHn6UsbcffGgzt89c4oqEVx",
  "key17": "2kKwygKwDZ1eEzzv2HoCLJ8zesCmFDwLy5ddf3sr79gfQKk4uqa3M2NFiJ675NUunyBimL2dEaNiNkPw6q7Uw7sv",
  "key18": "4oQfetZ4Be4CxHJjmd7twiZF5xvsJk2QAbTcDLNJb81gHXGkvhtPDxnd3rsDf5fhFtHVQUHS87YzJV87Bct7E4Ki",
  "key19": "55uRXtw835VEiLsuBidR6hWygFdvTZzipwNWv3AzG7MUbv5ySBLycjYXkcmPs4qS7GM8q6AjaKG97tz8ovDiMC8f",
  "key20": "3W8r2CoEyYuAJj2HbfeNL4ZGUAazfG9kGhwY2PHsz9auWmGBQv7tvVHNUTAEuxjmn7dnqhGJsapExAhDiLXgaA3A",
  "key21": "2jYyao5dF4QnQZLYkozHbUdisvEapchSaENLZbzYF62uXBmySxWDRJT9cp86BCbbZg7LcuPvC3nXDmaP7cqRzVbZ",
  "key22": "2KViZgM8YzUhbfqTaa2Lh9ntGYwVCRfwnX7EaoddP479qzsYVmrwNqAM5N82ceaiRw3MABLiheiFpeHBViyf8Xuu",
  "key23": "4ncMt6LXuVw8Di64J3AFswk7AGfSBTbMFCSTgTEokcApu2MSLU72qfn6LA1dJ6U16AZa3EituXX82b2Ug9FJtyVF",
  "key24": "2dN6AfDb2exmA8QLsGC7tXkcfp2631djz9fpBKbb8gpPEti6mKqZBvceBiZbURGMiBA1R8styQqEDz2f1h7pa2iV",
  "key25": "2yLvrmWSNhkB4JM5UyZUqjLT5pigeiFARSbni3u3kbi8tPzBkAR2cQXm3gbWcZBHXxq44FUdMpVHj8Uw97JLmj1T",
  "key26": "5LDxH9wJctKPNv8bXteCqcak3JUNsmsUrRSGDUf8U4FwGyg1zpLcnpLVGRe2vzHZxZV1wyCT5SUb4f8zRoGNkbeb",
  "key27": "mUNGiwCbjXJBCJ3K8FdjZ58khoBhfQb64CZZb8uVMwc9xWHd21yyb3qCHwzRAXEQcpf8SeXFPsvmbGKkcZYh9JY",
  "key28": "4j2YtL79qaiuDSriw4GctfwWbUH1Y1R6yxts62jTiUbJXUMmiCnKQcnTMkaZV1aDCWSvsNiQmDDDefpvLLnXgqUf",
  "key29": "3ueDTgGGJYD5HynCs2MkfVE1aqmZoKBHQuLhSkWJ5qRgT1hCUUgUnHwBrPAyNmeQhmK56Wj7LKzxe9oBAGxmSJpS",
  "key30": "593ys7GVG61tiK39ADcHxpsKzupScCT3vfH5ZRMksE77B2EzYJuA4BXid8q4UbixE4EoWDPf41nEsnYDjjSBJwYW",
  "key31": "4LQK1BRkPMgYjbnsyXjrkFGX8tmXYSB6aEUWFB5JNh4Ya9jM42gMMZjgXvVhmuj4g17vwGnReBEVpmZSEMYvRgRE",
  "key32": "4W3HqoC3yfgKU2JrMEpcAG5CoPiShLFZDcUH6JtMTYVDb1DSx56ZSkEZnvxrtZ1HHi3a4J9bu3cF2wbdBG7z3rwv",
  "key33": "4zhZAZ9Agf5FHHLbTPqdYMQ9vNdMVviFv9qeQEaHZucqHccfHgvddm5tXiYrtxvx55Sj5zqKBBchCyT46faHCKDU",
  "key34": "5weoegJj7n7F81N7qKugKapHJN3wBxZPreYD13FNkeUNbAVKn5ax4Dbtpp57Q4sxHvW5NEmbPjvkHvFXHJBKsnCZ",
  "key35": "5XcAbaz6usaNQAJcMvrCfbfvYZXq3E1NcSF2iMJcPRP3exmnHUcQSiaxnGqgjKvkQRKqnbM3pe24j4HsrvhMkpj",
  "key36": "4xTFhC6bmFPayzfqwSDRWoPRjCiFZjVm5PuteY23MndYPrN8UngjkYHfxVWYYCQkkjPop5wTrGcQaDXNJXhEhoxm",
  "key37": "2eXM9ubwZpnkgaTKxajLLNuFL1CsnhPFKVhTFkemN119Ys5h3t2vVDKw8EpP6qvnyViBGCCBJEEiKf6y3u3uaxx3",
  "key38": "5i1HGdH5iUCYT6nwrKzzKhGLAqFhwKmthBMUztCpnmPzfKLf1waiCowCKisD61te6VrZghnbvoii2trQEbtF6qnq",
  "key39": "4ggtD7SqVnJAXnvL71YWt2twgQgnjJTn5BL62oa2HbQ79CU57AS3NVdt2V5kCmRwT1916B6YjG1m8XxRppEBfyTG",
  "key40": "3TJWFcbnNADiDyLJgeR5zRLbNwtYbdqwM7hhDAYfC7ZBhLVVpr7A57oucqJ5TN8ZLuKsf7Eo1aD7RfGPn47fAB6c",
  "key41": "2TrdAbc72cYsZyWs2nt1s7tiECPbpQ6Nn92HYTyxLU9DP22Hk5RcBpjXEq7kyP7ughpi2bU7RukUEgmuY4GHnfBG",
  "key42": "2XV9sg8uwNdu9u3m7Qb4nuaL6EDUHbWw4kdnkTtK77GouWRoxXsWXBPog2bLAF27mciPFtTnfRxdLrrnGtgNvV1G",
  "key43": "2uhkYLrmgbw69J2qSUq3SUwJnBFpJPz5Mw8jtEtSCx8WqqZeCPRMoKR7nKzNEZfU5NCBdXJ8gvg6g9iShj6JT19W"
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
