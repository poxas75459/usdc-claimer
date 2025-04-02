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
    "f6S51RhRPDZ7QNgFar3AfnbUEV1L9tDYbvkaVhn7PikbfABUVXNqjqa137ZUtmoawi5KFduRU6P91m829MjfN53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9qkwMBccUkzwrys1waHMEA9CddpMnA9hrpKwnM533SoshPVF9khVXE4gekcjdUJrUXYEiF9s2SNFet1hQio9Gc",
  "key1": "2N417sktsatogQifgVYZEUFwpe4Mm5ZriYAGfnnmgfL8J8HLnr57YjoyAuDzxWW6QSeevdoRBca8hZV39V838ufB",
  "key2": "4rzWUL7ybvdPMv1GetvGkiwP6kg4xUVJg2kQnyyThkJcG65M3xEE6ydMNKcm7EmhVd6uU8Nji98h9nrtvtSQb2GJ",
  "key3": "55QmjSAz2j9yeoJ58HhCDjE7AXB45sx3RDRJehuuAFGvLV8sDZbWEV2NrkpSDBWvBgZwX5AXiT7VywD4UxCatgr2",
  "key4": "ysVmNtQZPX7MmPUEXTskHQrhaEdpCWSqdmduqJRcV9JLcjWqFxkMohyGLxXDyRjVNU3n2VNn3LEBBEwAm4cWZVR",
  "key5": "3redgJXN8X8D1qa49k1buyajNeHrgoxViBzAV3eazhHdeABNSWh5mjqvKRkUhd7LEm9iWuWVzJBJ1opqq2MaAbWv",
  "key6": "L4Sk8bc95mh1mCzuUUibgnSXTpfHr5ETZsHjszKnFksQHuuyngkVWVK9hE7RDsS87CiZ1X5ygsMrjqo5Lkv9aqZ",
  "key7": "ZrbUmnCgYFRaouc2AmAJjuPTcYV1nfNrzpvn9hkVB7FFyNtmMSGaE5o6owWS7zfwR8z9emUZGWxEhFVM9WoQG8P",
  "key8": "5QyBRGDUZMWg7sz1cYNbTmjcWLML6FZqho7gM8yrzo6tE2jbsZFRjKrXgb4MvDECqvC9NAASi5KiXeicxELJqkLG",
  "key9": "2cWuAML7oQJMAzKKceqACavv6uB5NVfB5HZWnw4yQw2Stdu4CPEmLZvGS1xTrSrTdvLfw2jbyCj3qW4y7uAgsZLW",
  "key10": "3LYUeMYzxSwipKT2RxuYw7VMUHz52sQbnSVHVpSTsN45XjvQfTo2VMfoL3H8RsqKBFZjsQpBH4D7Qv7ba8nMmcq2",
  "key11": "2yjaEzhH9AeJx36CbVgjCSVzrFHEsbhHu2ZGdQFbDASW26QEg5dT9SzjoiSS6tMHT97XgYd6ce8AnvJJhKWtZGBm",
  "key12": "4owj97jsuFSBjpTKAfrWQioHLEoQ9iurWHGMgXxAohZaKSr3Ft8nUhuUAnq88ivLZgnicf6umea13muTd5EPZH5m",
  "key13": "3xXqLL9nSK2Wfr4dtjBwHJSu5v2zFSFA4R4ryRpiNNFQ4zkkx61KquGkm4rYriX85vWjw3VZ2WEM19Ff73dRvSTK",
  "key14": "KwXp7rUtxPJSuYk2mfceFqEd4UC7KFto7U1rz8Hw8yBuASp7FZurcsbrFP1c9C2nqFWhhV72DYxcDDPLFYFRrTc",
  "key15": "kTQj6jghQ2DNtbgjGuxwSERNb979XSzjEe2HG72wopQoQq5gGTwpnvznTtFopjQPurPwx9ZzGJc6dyadzGJ1nyk",
  "key16": "49Q13RU4tXhxgrzc2LFtM85b9Yn8Z8dt1i5GEnv3E2HChPTw9dJAuuUkHsY6MELCraizzJmTnTVbg1df96pAfUdG",
  "key17": "YgqqBFPctg2NJV8FyFHmpm912kAppdgttp1Qbxv9JV5eDvJViibMgg24eveS44dn3pFbZNtaSzjBLBK8QcLA1g9",
  "key18": "5tmV5kk2jmXK2ddEVJrFPNjGAk33WgAGMaJx1ndp8o3WB61Jfuc7safmwyP3iAuN9xNKrWyDzwEsZsXGFh8dwZMx",
  "key19": "3QPLCKznZpKK5zwdKMR6A9Fw2uUj1wNWUKHYK3uUefThWfBkm8zDhdMGthBsvbt9vP4sCbUYtyonLWsBCLWrn5Yz",
  "key20": "5RyfFSCwLsgDVTzedDn4Jr4ZCpsbufoTByhxeTjG6C1vpoqpiZZPyJhc1JQtjKiJdLV2oUjPteAyM8s5srgKRyHA",
  "key21": "2p6fZP7DPcG4L9aEzqpgcsmX1KtAnz2KrqweeBdXrpM49Eu9HHLHbcj3RFe2jftbJh2MsM9Y545nMQ9byp4wCYc7",
  "key22": "3w5VycpFhK5S6JXUXQwmMZEFxmuH2W7cUBSh8K9MstW1d7W4mDEvxotaa5CKyBiZkx2LkGQdUoWxKt6G5FXgBKCY",
  "key23": "9zunniigNYowkP6jS1V9aGhk5qvE4gDnBB4BZ9Uyc8Bttc6RUSj8yEFfLdhcUJFca1nvDW1uXsEDJQwbjLzEh2P",
  "key24": "zqj2WwbSj63aPkARUduudTDBZzRttenhrbR1hGVwzyW9bTGiq2iYZuZEKyLqeyw2SYSbyH52HPyJBCDtYDm1Efh",
  "key25": "57uEPsrnhJRyFJLHnVNwjGnBryZdAkdSYXDZnkP1GSTrjKErHNWN9fceGpENctLZdcm9Ez8qFEaNQwvzR15WazkJ",
  "key26": "2FYYEknMyeuXEmXFhdntYVkk6masMWaVaYLWvwZvnBuP9ZBYyRAiEaDiNwBFwc2bedhujK4W5e92QPuzEFRZ6hc3",
  "key27": "PezpdyJFeeCnVLkESympBLrbGs8qoY6MmGpyzWtGWsB65rRVAcZXV4Kfh63eTLDpFpoQ5eTe5Bu6Jxacf4YfD6T",
  "key28": "5FzSiJxgpFkjPM1zZW6FtNSippPmjHJNarydJQkQcbSxQz92S8uqUJ8vhYtaGPbZpwVb4B1SnWQeUVvBWN7VnikX",
  "key29": "4M2y1hDSbND3acmm6pYrEV63GuHJ8SNnQQtYmJJUnJwD93pP9Wsw4qVRdEXH8Y4cg2P7G6CNxyqYyRCbs84eqJL7",
  "key30": "5DZH4kLqKHp3qG9ygsU1Fo12sLk4cQq9d4oNQ5snkFAYGNFvtrLpWrBTKBCt6vYcWV9bqC6jrF5sVCNZoi8JTPyz",
  "key31": "263z9Sm54E92MoPKFJQkiym8Fx4RngqWZyhGPsNZJ5rjcbWMzyHkhvxCqyXhbs21SMAaYccZfvq3nBuPgBA6gPSk",
  "key32": "2D6w512tEzAJCppVU2zqPVS1TSHEXB7yr22hzbFXkKSJGvyyT8TSrf2JLDTjL2q64bN8Lb3Fo6NV67KQoGx7Q8FV",
  "key33": "7UrTouYWbZqMUqpv7JsPDSWZpsaFrLh2BZ7ThyMHioZmDTnCrScGTVd9pvbKfwcBfj5KDdznmQEfeBfpFLzurpF",
  "key34": "WYLdck464pgT6iN8TMWGwd8q7bDVGrTTLYv3v6vG68ZTTjKMcdR4p94ryiu9Pau7xs7y7vGhh7W821pZr6LX2pH",
  "key35": "pWXpZq4zBWau2ERpGrkVCsWURo48QqA91auhQe1sxkxg5p88w6YWZaSMZ4rE2ZwXGZ4iANVLFFsuwfcwVHYX3oJ",
  "key36": "5u6j6AkdYsYqbvxeos8NCBqWnAgE2zyqbHY2De8CQncztFb5aM5hM3Npfz9mAjj4uJXRsw5xiMxp64GKbYo8Z7fa",
  "key37": "2iBcvToFtmY6LYcgKo1gwBS6KVHD4ar5LP1w2G5hUnwCjG68te7boP29jMZcte2rpAsQx2q3E9wJv7arbuAP8xAe",
  "key38": "4G8XLBDzV786iUHcGQC38Ag71Q98geMRpLttncyrXe9mjcQR4Zuk4yfsK8sL7bELkagLWVcZfauWL9osSKbzyFvv",
  "key39": "4kF8wkeBYjPfq8WqvLQ8nwerNCyxC2caWCEYBKLCwxLsPs4dv7vZ3NhKGpT3yyYxTQ6f8H65P5C4Gq8kjJFq9zwb",
  "key40": "3T7CxyuDvwnnsxLAuT6t3QrQ35kuhFgBQ8h4W4mu5vvFtU4YWJnUsFEd1PSpQcrCoc2QkXAWgGPerbk5QWdv7X9J",
  "key41": "4vHCnyXyVQSBPRmbjWcwQR5q9TLZad4VC4wqNgCDsyyxzN9A5QA7pY1yd3SzthZdUPzkj4k9C4dhBvAX2eXeQzek",
  "key42": "pj8PPCrXmdZ2oQC4vKY6bQtZyRJ5mBoLxrfigZYyx12S6tmUUDtfTJmRKuLz3yrnyy7CY3itrFycqdL3hWbvzms",
  "key43": "4yeeQGZWe8HRgnn17gFTs3BFftZ7obP1nLVV7UizcWLzoCbvCuU1ehiLHkwZbuKgoJSwM75D7PVMjcwVGDzYeanK",
  "key44": "23SZMF38Xg23rW3fsmh7QSMWg18nWP3inZ5k2GcC3rmZ2KdRHnsnE7YiukzsXGa2Q9XJv7mPTqvhTmbDxuSURxws",
  "key45": "ovzSUXngmf5rroxqHZVYak89nihu2NJXzhtFYewWxHStheqY1guRvyj47nQJRH41b4wpKDHwa9CVrjXHiYtDcQ5",
  "key46": "62uGjRLEn51KWx1GhvHxootJZa6y98tfd2tHZQZh1gB9uKh1a6GXERBZwrFTiVWWhcuacHUyYfG63qdqraCpswet",
  "key47": "4xNu6zCkiR2wmVW21hjJ9FYgdrz9kSnvoEBNrpUW7jjxYoShVj2zcgL7Aj1NbagmEPMYu9oSAeMEFAhwPixvF45X",
  "key48": "4Wi6kGDycPue3UEVjYjCX1Uq1LL6RJmrf6SEWs1XT6jzYKby8SXxvPrREpeg4mw5wSYkwWRgWJQiHBcCwfetvhDW",
  "key49": "3yQWtrsaGnfVFuWwF1RKsipJ3KjZwhzQkjH6V6r5RXstSnBzDHBDPpyRzEB3SrQtmEjqyk7WBZdscChvFBACAjJk"
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
