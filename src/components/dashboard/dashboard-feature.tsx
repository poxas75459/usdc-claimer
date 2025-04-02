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
    "2HN4ktf2moGC5LviBR5MJgxAC8cyfQ7NGTGUeGy9NRePPJm7Wi9o972aj7VgSG6GUCvXfeJUh66eJ3moFUCPsrTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPnBxNNErYvuWnSVBjq44zLgzEHSxVmRFksgRDYF6SLfw4wyz1ijJ8pCKnZQcXFU7QKBwUmZdizaHTSgq8t28w9",
  "key1": "31hHHBxW4fhvvBurhBLvz6DHuXeKLmyPqM4GenaqaYcWhmnhz1zVUWtWzNnzAr5hbYQEmLZ6nM7qJeKBDiC9pbhi",
  "key2": "3d6J5mRY2hfyKuTuPqGZbwNnNyqeG75oLji2fTgGEZufqE3GSRVPkXxKqwNtygn4ViJv4tYqcC52Hf9jzhKYk7o4",
  "key3": "21P8NpRoMvhZoNwPdF79BR9iy5C8xxDLduW7AEQD648Q5hsk7tQkwTsnEp7bSPy7xM9pEaYJh7bb5d1RpHiyaTSt",
  "key4": "3Gc6nArtAowUag9yr86TCACY9AmNAi2TmpBFVGCWgv1JUHca9EMe5nemmzyVJQzGdaUeWHcPBMCAWJgUmeBJpz7G",
  "key5": "3GJdKaYf6CMqQjFTR3S6sLy8vcrBvQSNfH5xsWs8exTpJTkJSuuF5a1d94LqbZaye33gUm99ojSZVmFE8Qs7qiN5",
  "key6": "27oj466TgzscfokuJVtn3bdhkbN9v9v7Phrc1e3Z6geCdh3RKsazq5gctTqx7VguervbWCP4bTqWES6nri3iwVCw",
  "key7": "2TowCHWhcoa3PeC3jUBm31avujjWnMiCoXbfP9qqVDzuaTAdrn57w1wkVxszkgmuHw4xkeKtoVEarSqX9hUQYybj",
  "key8": "3gvpXeDkZzVx8iMrGQf5uEhnSy2egFH92xu1kmxCpWfiq8iyKZqk85ZVAKRKADv1h4oTE4zJDksAsHZwvHsMt6MJ",
  "key9": "62vAoS88edgscyWG1pEFvGpANsRvCVEp2WtEWYPLPTuLnK81uAX7zihdM7VC9AtMV2DgNHQCZ9yPDu4qqznJZt6u",
  "key10": "5R1dU96ynNCM8ybasDPpYYD9P4irNxWummX8iznwyipKc45FhUTYfGFQTACpP2fCcDFfbo6hGbLeDzYQrKx6NBTa",
  "key11": "2ZNmyj9gvTR1ZCHzNJP68tHmkfSTqGMqbxq9tFygZ2XFQvFjqjVZ8jeH4tLvNavTbWSVQ8kPdnixe9tDTdJVQcFP",
  "key12": "5y4GUb77yQiE7PBfLRHDN6isjP48eugvHSHu84iN38dBuUgNrtJuWHVkAFKzKheCQke9XTFAgrxbb1KqBLV5Zpm4",
  "key13": "3ASPvwsuQ2Gmg87pyo1PnNqsvwoP9465PgHbwDSja5DGJqRedeEFWTsowxn3fRF7uXuYkJdmsBFCRPqiFDHwHosC",
  "key14": "4HMZduRWvtaG4mRgrspfLCz91JR5s6vF13yNGjum6FH2kL4N9wdjF9bvv6tVtBearJNjiLLqHFg6essFG8gPLpi8",
  "key15": "5aBwyuL4LKdVDxit8v9s7RSpH6QbjDCGKNJFmYpigGqiwyqtk2pZjj2Kct8uUdLwxFPbYagfy46822v4W1va8DE5",
  "key16": "4gULVGKjH72jrWsjQiugsavMaH5JgMAVnA71acdqEjAAFCfCKwHLJz5RkhU5dXcMUHTXs4SjzwCru5r5sNvieU6m",
  "key17": "3M35AUXTCE7p1YD8MPUTBuqroBgPyLvwkPxJBN4MhjzZnDdyEaUPQfrR34mtMnQ5T1VSCzTZVPybFr2MxD8CKBHF",
  "key18": "MTv9VwYYZNJiiTbtU1JLUVLBeDJQSQks6xUisfGg4JWP63UDvnQbjVsg6SMTdnUbeEGmjKDRK9ga2pGW9nz1qBq",
  "key19": "38hu55xAywJsuiDkFDx8gK13nJNNH1wnyJrzNHnqkKfXn4WRExLXz2CCGjDc8XLucTnPSqtEjt767g1VU6owbme4",
  "key20": "dkaFqoPkQWNcwTnw9Jmq5PPtJteCfPYCenHc2Gn5Y7efoDazbZQbKf1bbduCZvBmdhrHQWwpmqEnYjHJdivJzH3",
  "key21": "3MVEoMat6vzDKJcffZCkzQT3UP29nqvbMFySPMsMXPDVCcX4CxEst8CCS293zogDeD3gLyQiJhKq2XUDiNDi3rK7",
  "key22": "3bBUKchgC6csmGZeXUMUABWCPQvzBRVj9cxfQCQXyrpmPgAT5es1u9Ly53moSqD3rMa2scnBpufDDtoyk4H5KNgv",
  "key23": "RD8E7DwvNbg5MzAGNpERFSLYYR3oE3BRnbMB2NKo66uD5ekURS7d9YzUJybN59vAoAkgVg8mw3W5kgVNRJR9mei",
  "key24": "2cua6EsyTwXX1UT3hcwvtNdeyYuxJUYfSvsS2nFBs1ESNke3mC9kqC1TcSSGdDNS9LzbM6WrPSq3x24s6kZ9iBor",
  "key25": "4hiy3gwPnwLfH637rgSCy4pSAvSWUBQz3AiEiwDaM1bzxnVAdB74wqsbD2B3ZbGxYGoyJftkjpcfVUA9JuiTNibP",
  "key26": "vSDDKjFCAVQayaytjJHypCDnUuN8woTZptHn9RQZm34zKKKqxKK3QcvVLt492Y6rAgocwFtZtZdYFjBoD2GTMiw",
  "key27": "3trsjAm4ckwRuHScGbKVZJAZABAJ6aSvHcqJZDSciebE7FNqbVn5Xn9FsyxA8WrWT4hRNqKPUM2bub15NK2TEQ64",
  "key28": "2BiLcmPdxJYjEiu95MvXFsgkGZ6j9TSf4LyW6Y6xocenLFgAyskYHggPE78yo82vHz52PnNA2hToQbLw8sjC2Ftp",
  "key29": "39VpLk72S72GwMBX8abzoF9WtU6KfB51uZZfks3MUcWceV2TeUXHTM4RUn6Rq5578reVkgeirg2eq87oVi3RU3t7",
  "key30": "2r2iw1ytfdWpZzudD7L7roqVmns25Mt1TAjwe4tXWFYRBroJNXs8wy2LdjQ6QpDp2udAT3rJGnsjyCPLhS46aZtt",
  "key31": "4VsdwhYpYH8z3DDNQQfVisiJd52P4LwNLxeW6WoacqzFLz9ZcUy5MWNk6ygvibMA7vQoCyMVJrv5aknJTYF5eJTG",
  "key32": "3oR5LUhRDkg3C6jrV3MSZseC6o7tNaNiMVpCxWPB8KKhitQzSrWFXa8oQshyGek3KpdQc6RSwQUYVuPzyaZjxXkh",
  "key33": "2pPoX49F5fhUyhURQwgVg6PBWruNazNyBRCE6hoZRsYnHbCEsMUoqYk6gezHZ2kcfhaiGoavzBhJMCXdYgGQtdMD",
  "key34": "4UoDS6QHsmzsgubKwmd1MeEiwHUVwC3CdoAkh4ntkLg1QpufQ64CRRTucJiRVz5WhHwEawEg4AiXFHB2emgorJLs",
  "key35": "qHaYjskvv6ebnn4WAoZi9keUDZrp1AZGkNrctrENWcupzfzXdxvtfEWaDMrED54Uw3RX8gNqrhTHmcNfwTzW335",
  "key36": "3zdGmBbYTXLW5umK9zZmEmVaF5Bcb4xqN6DW47s355QcH3wUW98UUsfHKUjA2B2CGg3d3feHo5fMq3qE1H124ztD",
  "key37": "5RNiMeFeCx3y88tSgiwCBifDbffBJj3Xs9bxxDWxphddpjR1B1jddkfnnHXTzjMtky4eDgWS8caMtPUTDHj7LZun",
  "key38": "4tu7wzopJQmrcH4Qrn8nRHokGhSC1VSFt4Hp64WZKcWpMeqAnLDFE6VsmZ4aHgh5x1XtM8AD4oLnGxeJyXcYjhdr",
  "key39": "23JeJkMLeputthxih78JV5t7FsCM3dQGYLgq62bE79DT25CsVi98iA6dzt98igxrQSKJpm2ujo6W43E2km835GoX",
  "key40": "2Znr7t3J9gQTAYqQA4qPRLCdxy8jucEhSEayPb3WNjRjkCk1CrCZnatMwu1b7idzKpvL2ZJ2exSvkF31rGgpt4eJ",
  "key41": "5U6fkoWtzeSZP93Ckh5tD8CaZ6ayohKfToRFDrp5eGreiWgKcds5wJmLcdnNx8uK8BK2Twq6mWq1xxr5rGbm9fmW",
  "key42": "22bYZWFmHyA8pt6TwQkaJa9ss9kcMAodcczJ4Bt2gwRmggrfeqX8YKRpmeaJiaZQtCGTGNCVAdc744zQuVHssLDx",
  "key43": "3TFwFXzEM6r8PZ3aoTcEgTpshVB99Pd78v9hbfngVxG9Mt5QUEEbEEeJvWXygiQ2wGvB1BhkE7KyqwhNjSt99mZw",
  "key44": "2cEoNU8EYee46rwmuHBKrvNimCxPdzNEqw2UixUuavKFnbAnVQXSMPFgkbJ7DkPXGYJe2y1GLxbBtrMxowqhXAPo"
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
