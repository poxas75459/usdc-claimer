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
    "5qK46MjxcNzWcozizTPJoPKFLaAEt1fpt1pejLjhXx3o65DvfUpWuoPsimXqCYjUotw1UtZhDKFCPHEpuDAHzjaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQLqgiswGFfC7udBgUqmdATLXo1832UGdceDfydRqJfSykHobcbUpYdvwRBnAanStaWh3Uam5xT1gkd2YKuY8z4",
  "key1": "26NzpJFyogtH3eAyBzGrYzuqH2shyTZKdzAFZke7GiQZwwpNBFfeeZk3qz5GrKVEUAD2YDXuiqXzBT8rm45Dq4Nj",
  "key2": "5LyNyxAjtoDdj5r5PSV9RVg6g1PYGiRbkMh1Pzf6DTTsVjdeRREmknjuYvCubjmDK3CkxfaNfb9gK6pAnYDs7Kgc",
  "key3": "4dHw1ue97QWvRwrjemZM3sMDm1VVtVxw1A4FiH9FNLNPC45Fcc9mQEXrZmyJ1wQhS25Kd69wvrY6VA4JVPV1fhkA",
  "key4": "5u9Pb8WnVAUCLGbuSxS2nQgiWP7NKf7tDDCRfTtBf8XVP8samtNFHX2zsY7UNY9TeXxryuVmnw6d44x8fRBod2k8",
  "key5": "3E82FUMwkavvdLGMKaxxtz3rJ3Yj4U8vc8mFb4hudMK2GSYAdohinQVSasVSHafinnfqekbLWxozbGkv2EvgXjhv",
  "key6": "3fmrL6iUqJYd6Dn5CiYPncEQqLLdM9tLo9KahwrENdw825p6xhtyiwQGq7Sc1KpHHTVSwjm1gMwpRCVdLuG136SG",
  "key7": "41j4JW5G7zuyPoDJxafqyekxkN2ZgTX334pfpohWrabHoNrUrXAi14QPYQjP7Lw36oN85kiNaNQDN3BxKMxe3wrH",
  "key8": "24EeZhR38uBmdHSS4Udr3FbBRwE7jCop4ExbKZvvHVUpb1aLr3zgVu69ZwAhFroRgCzPt8njcnAHNw8RqWJf1fDH",
  "key9": "4AGXhnCbVy4Yny6Mjo8WGTpXTuRB9VWnhw5UfTbG43tPTKzGZqWyZYHGuQW3SN9jFvyEmQWjDZWS1fr4ecxucDnw",
  "key10": "4HUVn9eSnVToh3WXYETXNS1CMsBEVyRtRhXwhqmuSefnqHJDZKkQc6PvxhgPuJYQAHXk4QMXJsj8c9C5ztUka3s3",
  "key11": "2KHvAJBqFSZ5sgoYSsNLL1HiEnepYCn3ZT3xBhzzUq6yZihLBdLuy7Psm8z9aqCQgFhAET4VjRi3419Ubs2KUS3i",
  "key12": "2PQzriaRkGzjAS3Wf9S3h691eCZnVSF5gUcESJgmjMz2F37DfiPcK4D5646VFy6hyPCMxw5XLzwZTzBzcTcc7Vs3",
  "key13": "52ouyxUTacoaQycrP57GNWd3kSg5i9hvPHyWobCJQDfcdK1NW4ys5ZRstJWoXfmvwNoFJS3BxfSeTiBW8HDiGWig",
  "key14": "5Y5CX5RnS8n13kocoGcDvpKWwevbgqGmTj1y8SF4pPc26rcTWtWvtFTjSBNgfwresEib4ADhLYRfceB2G4bkcp58",
  "key15": "4e1QAyHdnWBTX1kKbsnsTd4zSjUii47Tz1D4NyweJvJFoNBb73ESCPPESjQYdZmVo1CdrBVnoeM6oaVDELFJSTKX",
  "key16": "4XTCiJCCkUEmD9A3xV1vrUCwVQJR8V6qGY7ysjge9rcYiKvzJLY2J2wPXZJbjLN9fSfkU9BgEGCfvo6QpWBmsxeW",
  "key17": "63EGmEJu3Es27kXoo62aCahCwmGZHgYLkF8KAGmT9soA8riW5iioVjajGwFffknE8i28MCeT7GamGZqGtAJasLQ8",
  "key18": "RV64rnGwpZv7GvDKwnM7BQFuriHQMf61zdRgufHMZ4EnSZFj7u2SuwJL5F7nvZc96texwSdS7nFGwAbEMjs1uia",
  "key19": "5mmvzE5RZeosMPrUp5H4PDMiTetTPpEf5wEeRr2WE6GWTmsxvq2BUGdyhXv9x6JKd8qQK41GU7N9rtVWHuwAqemS",
  "key20": "3PZDvbZGvNg3tw99D6kbV7r1PVsnRxNa3U5WdXNwWWDBKF3ZRt8K4xFHjGUzdrT1j7RRdBhK52V9numvLVHZm37A",
  "key21": "5cq1SjkSuD1ubURhJhb1hsbDz8UeWJW8Mx9GBpDe467DGUa1rKQM4wUZvHydQdJ71NuQZEWLqPGWgMrRVdeHEA6y",
  "key22": "5DfVak1jSNCbzgK94mP9D7quS7S8xRjzgEDzjAoGzU8uYQyyhh4LQ3o2dR5hJNbSmZW2gQuUuU152dEYJ6vzoLbZ",
  "key23": "22wJeoLWCpxBDTLPawe4nV9FbxHEpzQnEKzKKkW17XvTrYpx8c5HjHhd3nttcw3qecWohw2NjFMxqqGStMpfcW21",
  "key24": "28zZbicZ7q35yLzuvRf5aBn6TgoiDVUBWWcvbuHbYhTi1TSxZxJAcPBfAPqd7YYuYKePQ2jFe8DWP7nwYkpbHupN",
  "key25": "9qah1VtTHMKagG8psRXV7i3H3u1MGu8goD63y8prtoWE5WSu1BivVshZLnsS9L7f34MeU8SMfLahiZghPDC8Dbk",
  "key26": "4iberTrPRG4UPAuEYvPD64DRNgDJdtEet7ViimkuHm3x6TT9JP3UJrCToXuUmsDEFNjbza9xNaCj3b47qdmps7Zg",
  "key27": "33ExiUzAvmz8CP5E4tLLqMzEzFNqKEsQgvJcNEQoMpvnhyWgtTNuhr7PcNFBjR7pBnjNTPQw2qfz4F7E4kjib7KA",
  "key28": "Q2TthcngvVKRtaAyHDMdUSyCry726Z72DiagXuDtUYbcXSwm2e9msXBu2gjn9xDNqvY2Zf3MuB9caPN7L1ygu3W",
  "key29": "4p1xB3Whvpb11yMrigoG7vNVe42gcqgdv3YzBQ2ob7ncfVnDGWEqsZqQY1iqKkjyMtaaxUqk4PHRN5FuMaHT9WTF"
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
