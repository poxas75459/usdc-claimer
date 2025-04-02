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
    "4fzdo54VJeZZ6ynZ1XBbW8b9mincBsiZZ1BoyG6nnXGkUBN8DtAs4vC3RprBuXL4pgNmLdDnWxrtRS9qXnfV9pv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qn6yDzG55VHf4ceN5Qebw6wHksZfjTnkd6YmdnmMqSoAW2Sbs96s5bs4Uu39NAV29mQBdDdQRSRC1Zyh8xPpFYA",
  "key1": "3FmpKYhSXuY8ysSzXBBCfHo64v3nWrKhAZzEUrRFVmYZoor5MpiS9tisanzfy138G1jHe4JguVZyza1vMGSf3ErF",
  "key2": "UmjVAj7dsdEiFas8biWqC1S7YQf6FhgC85wUnRi7yuT5iV3RjQZ8Sx6zUK9R1m6jKf93LsBircjzcaZxWbhcTBL",
  "key3": "5Q1EWvYoXDZTBdpVBDijrLruUp3QEhjrUuLwPULRk6xsVihuW4iuzgq1pu6wFMg5gf75bjaRdmiLkmnx9zRmB694",
  "key4": "3V7fLss4GnBeAAVWGCiaeZrcJmmH7EZmKDiiTrZJJFRfDYd9879qthG1CFbBMo7qkV3WAr42QgCvDEj8gvioc4pA",
  "key5": "5aE6robB35s7hKxGvxnem5o2m7mEqoTotwXmvFuuBZH9jZaCcQ4rPvDUbaf2k4XKzeJNiNF6VY8DMuiuaTYhy9JE",
  "key6": "5wpq1zYqREkqb8dU4haUmfpuwBoKmXwdV1FinX4HAwM99yvraDVZV4kP2uVaEU5q4NCdBd4FwxWnhakexEVTmkg7",
  "key7": "2AxYfQ2vQ8xJ5N221zGVTMncwte1Mm37XnityviUqHZBetMHH4KeRZCTdiH1qoWvugahHYRgHqg52QLDck4Ysb4q",
  "key8": "3zxrcFrp5fLkp46pehjS9apiwV3Ta8dzL4grrXXuMofcfkaeWuQcN3RpG4587wcChNdiwNFQgUH6Fu1UeqjgJNme",
  "key9": "4UZYEcM9oVKJpWneDvdwQ9pUYZRJ4Nf5cABVt4DzBGJZq3bEh8jyyVYgSQ9ySunM2y4auBwT7vMTxZeaGmPVxDQ3",
  "key10": "2NBRWpp4cbkEbHhFuuuz6sZ5EB3JW6oso6sY9SCcfug92PTzbtqFkLmt9fx19bczDGntYLfkuzfi2PiDe5VxGk4j",
  "key11": "2QZuNBv9u3YkyavFgCi8fhz3pKTgiV4Ys1Re9V4Cd7UjtFB1WfKhZqSLZ9Wf3Szxcx4zPWT1E3Phd5GtKzPkJXFB",
  "key12": "2w9qN8SB1QNFerJ41AD9LdJ97qS1kFYsutGz4iKnKMLgc3finPnNnrfviVHcYcBwtEwfHPbPqyeWkfmkFKV4DU5K",
  "key13": "22Pgg6xnz3qdgfimQD8DAzcKcYr2PMt7HuiuUBsBeFNCf1LpvktU2RPx6rBsZ4R5a8gow219ZG29x4TB9HfKDxC1",
  "key14": "6Db1uLcZYpAGLFn9nHq11MNBvciBNDLkvsKrrDBcWdG8X6TBEKc71dsSPwuuvS5RknXwFsWj1RQ5QLSBSny9HYG",
  "key15": "2bBY9zwpHbkbeu1pNP347WDxRYqwLbmien8GnA9ge1b3xgPN9oVbKzb7sU9zkwDZPyPHJV12ap8LDod6JAmaBQ8v",
  "key16": "2ZvqSZu5hbTAg7GBX1pg52f8bjHiupj92UsU2iPnyNp5mEF8qKRvFe37YQs7EFrGVmo1rf2nZGZHxACkD3iLTwrz",
  "key17": "4fZzo7Kj9SA9BRrak82kYNkZiwv5Dt3jkG4PThqwuoQPyaJtmS7Wiu2RN9RwsieB1CXgNdgiURYrLvdnVsUTCWmp",
  "key18": "4xiQ9taq5y71YFuNv7n29n3jMFrLgtgGiHVR9szqWt5Naw5Ms9ri7SudeNbCashNrL4oz81PqMkF17xZSsd5eVTd",
  "key19": "5Cbxtzt57PfJwMop7k56gZ29onwbtG9JSeqNgT8kxmnRVHfaEj6WnQ9nLWMxsMf46tvsbBwzdwDrm6apYbmrRV5x",
  "key20": "2DxxG8WWcaYa5buB3VeWTMTHp22F385jok6FdrHVYTBnWvHJ3CLAb9YVdVTnSfqcddhGsEvbc6vduNcwQSFJ3YCR",
  "key21": "54mnxob7WjLSGHfQfdDrcLbfBrDzMreLgFrpaZmy6qBkSDwBKow1mBtTFUzEGG8zxZzHAVr7sMmyDERCcDHf9VHZ",
  "key22": "2hSX4fba1aMK9EEeZt5gbTt4zB8nRRm3T6GTSmW6WsiaKxAz6MiujhCyaeHuGo7HLTKYSmkvv8NquD1ia74msr8V",
  "key23": "4ennEU6HW2vrJi8L1ThAF5vZMPHY3wiB2jvhQ3nYopTF214inf6ytahKsrhqL341QDAhLs1TVo2ir3wxEX1y9cbw",
  "key24": "4ghHCVMyYddxdeBn3juEswVAzP5t5nai9pLcrLV4aZArtByTayftgAtpLATrfXbEeowms7yYHBzSqzZiakFEeQmZ",
  "key25": "43CmYm4Qqyf1vJRU6yvaCLJxFbLnL94uzEEQikqCpBNv9n4x5roQQtEYyUyAxHxSfdiGEP18n9xxzkymjmZsBX5f",
  "key26": "5xaPDZC3VY1MNAWEsJVimhXqAVqj9qiypuwoZaSAdBKvQ5cZJT9B1NX9AKKC1vspi3U33gQhzpookh1QnBJKVsQC"
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
