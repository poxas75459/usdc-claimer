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
    "4EUvZTQmYG6WQmP9Wbp9ZcfDVLoa4vxm9nn6qRkzsPT9qS6kPaPtPr1YtVQxJBeY5ppRXQqanwL4PkMDHuS7KUVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GmT7N79AcjRRa7uPf5YiKhYTvgTW8fdgUBNpSqo7rgrrBWQsKFE11XxKENWgPsVbH7wZnSakxxe2qxtKaxJNsWh",
  "key1": "66gujgJqArujSDgwiUJ4Lo5GtF9cP4Z4nbxcN8fRKJdn7vVF33gHVxGKXir1BEnpLv8iDRvCNkBAths3RzTh4QPS",
  "key2": "5dHor4o4N3gLZCaP4hHSNi52YYaHUFZDUGAwdidhCZ4QKek2ZCdFqZyFE1vcU421Lo6ST62J9NqxR6e7BEtn2RSM",
  "key3": "3iZvoe9MF9UG5fq3SteLKDPMezpXQ1M3sKY6KttFm7XCC9pYX5PRjE6sYcgsRuK9F3h2RRZ5bpxXf9tVixy2hUWa",
  "key4": "4DXj56yYdNfSeirqAsNn9naSgn7F1vmGHtYEnqwiN4Ffme3tgrTrcVw1dJdKxsXpiihAoacaYUeUfKXomkCygLqX",
  "key5": "4gCgvyrtqUvNCzj7P4YFiif8purH3XPTtZPYEfjAJTFuKJvf9BmuF1cJ6xnQ84TwcCuWJBS356fnBzR7EsGFxw5M",
  "key6": "3FR5peYxG1AfimHYS1ud5uzwd65rA3JhgJE38V5FBsf5uWhF1pUVxCcyJ48p3YvxMog7GQdVvJzMs5hMVTZTHtXz",
  "key7": "2bjaWFoAdyhJFA5vg2u1TNdPYD9kDZxwFCyQovJd62FpM787DS4dRApS6R21YZn4aqewDApCWAJUrrogodoMKXkN",
  "key8": "3xPTPbw1hS5EvgdpWHnGZj7BycygV2MKGAHAY1xQ6RmrxVoP2uaXgUBzQAfovNavr4bQ3ragmWV5X53nBpHhBSLo",
  "key9": "3gzp1qaG3yrv93p6HW23u6guuNwcSvghz6gFUcfkqZHgn4rTBZReAKnUkfioCxFw5gENyYoePZAH5L1bS3nzMHZb",
  "key10": "124sLpxbN8RDeXuD2Fff48YPAHdMb8QXtmBPJ6hGHBmNfx6r34vgri1zgWkbCD5GQ4pR4G9rg8Mdy2U9nPk5s43K",
  "key11": "4p2NWzKyqvSG9GcGG7uyDycYBc56uF4LPDZyTJ3i4RzpNkmS8GkKjT5nL7uiDKc7WoXzwxjeFuB87AZS8M8CaRUU",
  "key12": "4sxfy5ziTFq12ak5tWqhC2pK4xTLEihfUxRm8JCL52mheLJgSDFyQ8zSA9V9qY3zTg8wMftjrMgrm6ctqBs4NksK",
  "key13": "66nEuP2GSVrnN4QFx4qbjoP9pYkE5Y52sfgHB6yawdTJ8dSRYH4oJVfgiLdLpSLWqJFFSf5TdtStocR99YGRj27t",
  "key14": "3TP84x3wAdVb2Msh8tXXyAQyuwdRoCEKyBRA6jYVK6jU5Z5hRWnJj6A2rHZi8nwpRSSu4qWcAKp8kAyEm2rHbDpJ",
  "key15": "57LZW7tvnThuRooKsonZNrhvEu512tj1pgsLhnRTdGaA6XPXbW6J5v144kBLNUjkW7JoB2kUezxL4XHQ7yVPGruk",
  "key16": "23HvWFeqTkYYz6v9QuuLb4Ufzra2wwPTGFrpg175TgeNRUkkViPrYGzYpLWvfYMEkGXzVKwy2qLmEQWPus12ocpE",
  "key17": "5CSggkT6H4TJmDzUWSYWyueNCLGKiNGsoaacrHWmiRndJuSzF8xGD9ebTWgKJKx2NkUKHZNVKHxgivjzpehaz9NF",
  "key18": "4rWQsCdjwDFbh9PvEj8Arw8xAtzzDj88NzAu995bcqAK2FK4adXhrkfCw1mheSNxsedPGRZ1dZHZ82bqS9GSE6KY",
  "key19": "3PdfJX4rpyo8U3VDXLs9sq8W1wF2nkFvUsLH4a1y655EYhMSGp7aNPMECwA8LByfrGHS8smndcZnbYiCxmJWui8e",
  "key20": "2jwtj5S1cq3jZm3pTf2z1wYFCx4jGyWDYaUQSNcFsjf4dce3BYbnXjcNtLpmrJQYbmVi2rJtFt6g19o1XWS1Wiwk",
  "key21": "3J2jnVn5RP2rKFiuns7dSX5eyXZGwLX4ZqgPRAaze5Yux9b4buLorEsgE4B3Vm6dQDBmn6Jt5hEjz7NVRUfJBgif",
  "key22": "5vmVH8cveAZKqZo2vsau91QsxBKcoFVgc7wH3CbcrRgwSMxgFjbA5Yd5VkxN9R7ANw2ajms9KXbHGDjLfRB3wTxc",
  "key23": "3ytaQQWY2ChJUwzN7G2rz9b1cTB7WMtmwBRcNQq9MjChU5yJXDS3AvH6CPDmzsT8F7ZQtyHvEkt6ojcV9Av87uEj",
  "key24": "4KVwL5jHL8cpRk1jneeWPe3ESXoQRH43BhMBeTtKBFiJjdH85ZGtkDFTg6WKuVRrwmkpmayo5JARLqTptCJJbPCx",
  "key25": "SpuhU4CMR55wvog85kstVyLzYVu2J6GdWgPfLp6YP1CuiC5PSyRcuUNyfabtJZ67oeqrHWz7Z5K7UvT7p9KzMp3",
  "key26": "56G6mdeqVkqPC7EfVGkpmJo4wAeNYGQeNY5zXEhYwcXv8U47jGV8AHZfY9sbzTxBYGV97F3j725X7DQ7QkzCQ9Tt",
  "key27": "4AkqVt35H7DopXJeKKqB9ovepVSneVtJ9uQXwqdzmqsPwYMT8kYCuUzpNhhNsqbdeMeWtanY8KPMsU8NbHE98dvM",
  "key28": "3cmmbnqELWFoNhZsKRDcoVmXZxhz1xT8B8y3m9fyPxQbs8uXmMr7617pqncPuGXpD544mRm7uf4JCn3bFLWqzGjQ",
  "key29": "55sJpM4HkqqZPHzkqy9cQGzgapLPsBrSEVhMy89hhzpBn1idbVKjb9XbybxjoDy27URUTZiAk4L5FF4bYTDLDrK8",
  "key30": "35ie6TWYgXXZNRrw6x4RniDZJUTox6QyXaosAqTPuovYCHSzP5733i3c3FhtE3sfJK3C3mkmysu3yx3UtjTtVAVn",
  "key31": "24y42bqz4tGcFLQeQC1iPrCF8fKYatDWANyu73QYXR9xiWU8oKs1aUr5TURU2k1ivALZfLdhi97iLfdd6W4Np89K",
  "key32": "jQCtnSfLEwNc13St58Q5PKJTJrUHTPLDiRoNGfrRktNtfqf7BjCgud7qAbdfdxeZkqe3vGf33hYczVQttfbpTok",
  "key33": "2HpgTkiKtsjqF73jE8cENHkNqto2gz8Pm26Wc7nizTWLWVxKkRXa8yCJUTfT4PKhH7kyExb8jTJg6oW6UbFxi3zp",
  "key34": "4KLVDUtqgoTZTQkwM5v4vJ5GPvca4vuVarXx3VaFppJfYTdU94VpBkYsdSJwuQaCCLQh2hDesNjUFHZE9oFS6Eth",
  "key35": "26jWBmH58X3KAGvTGqP1zeMNgD3VjKLLmy2LmqgR9DdNv239Ei47NytzLJU8oGcTR8V9TfrRZzaxWuGwZNMvimLH",
  "key36": "5i4Rq6Xd6ym1YLoMvZkTmtqPu2TkjwZ6LWhmgbzLEMWeX6mfR3Sope9zMGwD1Ps19L4hn5ngNtuytPHCG2e3pZEL",
  "key37": "5o7Fsnji21aTRGWucmCZj9vAsrcH4qLYebuaxyMRcTRa6saqWUnPYQdNH5hkofW1fkzT3RHFtwoCzwGSitQFkyHh",
  "key38": "2TrSo2Ekq13spP2BS9tPd426TyeT9BkV6w2Zu76yG5iNtShBhm7qD6hTQPc2fjUNbKbqe1GTNH1Qfv29bnaS6VWh",
  "key39": "5bPycrWeeYHUqxM5bbPJLpvcqNXuauB9tYkHfKjz7j3yVUuA2sJ3Y5p5GH6qnwPqYooHh542j7GeCSmprEs9BUJH",
  "key40": "5xZkp7YSejCwAqetsY8RdKDnAHQ7boX64d8qRaGujdCfJRaacnKdx52pZ23hxsSTdmCrnijoTVguPYQydeQhn4jE",
  "key41": "5ReupFCB59Y2rtq7iTnM5WaMom6BVoSVDwZQECgM8BM1AWJqLMopDprQEikt9XtdhgxMzzRNWLyC5bzrQG36p4TL",
  "key42": "5CxxMzFvmRRi21X3ZTmuxbG3xgECiNHK87hnXq5Mfzd47a2c6aNCchLusbs3kVsKtaFCDSWjP8yYoGaX8PjhYCap",
  "key43": "4ESw2yQVhV1wsxs5MTtvaDKYiV1NKDY8imRBbujrPkGPrBcaKX1NH4nqJysKw5yEGDa4otA6tgyH6Ag5kp7TLBiv",
  "key44": "4g6Nty82aKq7Zi3yJpix6YwfpH9w1nVPivSxp6mcoBHvpwGxg2qN1NYkrChiKqeLDJKXzqGBTsDzjqfk2TRqoHvA",
  "key45": "45qbXaq9D3mH5tuQDHHcLBTqQrdHF2yAjjBhD8Kvk6qubz5DEUKeo3ywU1jxnr9rsybFcrUofbdUpwY4nujgFkj2",
  "key46": "625hbafMuBszyZe3986yjKBsTUw8DrtU2YaZzSkzuG7bmtDsCmhznKAzaHVWkyTiToB5rQi2svNZtj6v7qG7ZqQz",
  "key47": "2GEa7spYRiWQegVrrPK6xnEe6JtzXKqkGZX4STeC7CpcBhTBZ3WsES8kiepQ4KSqUwqQpUDPB99PDkLVpT1Bds3h",
  "key48": "4eG2ArZCb7wb8HJ3XDJEy5XR7ZQSR9JgVEx5YLBjMTZPLubjjuqwxKkpQPYvVPwFu8GnAgQ6KUqaN346Uq5544di",
  "key49": "3yz6gRKG7Ei7AXZts7KoSDxctoXo5mppfu21WRfTUsD8L7aJjzg393kwj3wGdzhTmDEeDSqDf1oTCf1Fak9cVCuf"
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
