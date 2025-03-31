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
    "2JAo4Shb46ZRMhP6rm6wcTu7q4fR5874Li5qVwfRhCYGtPsBdaXs8gb8ELYsFEfjc1SpwqA7FMSpHyRB2PNK2xsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnYvhetexaNzsGMP1o1GFJ3zMZWwWemR9eSMWSGEc6hcG2py5hd9u3Sd4V6o3ZdQVTpLuUA9fthzrdsFAcfPw3q",
  "key1": "5Q7nzNeNNW7zjQ2iZavA7bKQrPDFc3PVzntKNK6wqyVSUsgsg7b3icAgqjWCWYhBSuCKi8EpWMwKLxHRgm9xHu6L",
  "key2": "28TpuUZY3yELRthjo2tv6SWCpnGbzDXdBBnyt9W5ypwnuSjZhgJqVLPjdQQrzGBoQqgDxDZrGCW42D5wknoUe27f",
  "key3": "4Wqiu2kq5mFAQog3ZGDYeJRUW2Rs2nX3EnjxcL1dDr6Hn6beSywwepdPo49gw5ydK6F53UkYPdfswsA2TpKDc29x",
  "key4": "61GVgrbaoTwQ27AQzBZNfQJ7YUsVFUc9TwafSB24v89Q4vY1CzKZ5qMJ57ELKS8dc2nEgzAZVKTKaysiUcoFq2jB",
  "key5": "4BbUZ1uRSUwNnvyJLUaGJws1Z9mY5LhmWEVVzzgCEBFzAayKP4QBKt88FzgeYz638HmiQAx9X31KkBH7cLPoahqE",
  "key6": "3fA4De21ZoRUVsifBAzLNS1KS1xKa4mSUomqtnF2bwuC3YVZpjKojCBAR2hR6yTpkV6AQZddQUXXk8ejS7FRyp1n",
  "key7": "2cBGqWF5hGvPi2C8TKPWhHWrt7nSb77HhzpZNcDyFCHSSBbCSokSq2jicrn3B3qmN2pdJwY5yimgWdvXM8vFcoFk",
  "key8": "4d9PAKevwkJ6BWWEFK1RnHerZYcmtvqS3ptneYDUoMGWykGveLYojMQNF9q3pTUNpskPuGVhbQghTBdQ75rNk4Yc",
  "key9": "NfA6P5mnGoTGSfYcnbA51L1NRAeKgNsGKHTaMkxkeQsEdPfy9S3Tbh7BGKr39PZ9NrShsLeVRNEvxZoNDjQE5Nw",
  "key10": "5P7UA6WQbeBrnJaQFDHGoz7A8oB18nSaDbZon9A5F3DWvGbqep6HbJS1Ejp91UsAP1enjFaZwR9AWCQP14SFNWiF",
  "key11": "5tn1PR2xEWJ1FCFVKkFj1LAeAgZimQNq2Vcd7RGrkWtzzeYxgbW58d3SPhpbAmwwpicWhThViUhuehoLgNtWXRux",
  "key12": "4uPvgEakUj41rQEieZfSJJjQVeX2jyQinWEUTm6BrEnVPboVEikyYcAaZpofL1n1YSU5gC6qD82NCLjn4RjAXebm",
  "key13": "39xRRtThWKvTHFa3haEmNk5ijyHgFT6dDU21RCwnQWUPB7WN1gc29p8HFjHeGVQXNhdFPQ3ybqFVrELJM38a5e3T",
  "key14": "3hjibonZABmgGq5xENXaHf93Vt5XBLN7YHM7vFjFrwbEWFiswCxJg5dyoC58Zhp1TJSRF8c3AUJnDaJfguRLHQsm",
  "key15": "3JZhUYMYnwfaY7JnM4KXGN1EHgyxsv9rEBQTAPFQ6wyGsP5LazmcutAXbbnHEuu8AsP6zfXj7N97niBUenn9hzNW",
  "key16": "4occjBQNf34qV91TR7rSyHb2S1RS9Us8j5P7X9PtpTvSQ7LHeHiVBcGy8DXzfNoJZ6MeuPugCdxWJuipJmHyqVJM",
  "key17": "3syJ4gVKkMpaR5MGfmV2ohbj966NGqSYXzKDiSotFjo9c46Bh3wchjQeuub8wF8nJbHba4MAjFQwuhWY9542RcGw",
  "key18": "5WzHHUGnYfqsRQuMWVyoBRYYR2En6ERJUC6VcEDoptZKTbRad77JjZ9GkAQfcYb4ztpgoaCAsfZhLVDCwTQ5oHQu",
  "key19": "3nkSgu7pfCo5vxUER2kYZy3rqEyL9ky7ZmGF9NzHx2HkgM2RME6Z4eU5bGpPNkJxBNz1TSXizTgC3R3k3GRkDZvQ",
  "key20": "3R3T1dLzMdzxDTMZgvD9wAvKpaDPDMnwvmk6ABdKdymqNKtZEL6bZdsFerVJbS6qvmqjAsrWa1js6BXUJZeGqjoP",
  "key21": "4HDnTHv8XX6mLkj42UVVJDJ6wKNiPSqLrkqNHT7fSXHsayh8kA61J9AXPB5brg8tosh4J6L3D6wGNgkXBHFNmhgZ",
  "key22": "4FALSPvuSZgspgLRaXQQ2zZvp7R3ER1DvFeiMH5zzvvkFmi6sDXZGMMpEYqfibNHYBLNq3JxJioavGvbBCWn84QA",
  "key23": "2e44FiUVLjaEtjRLn3B7FFej4tX4XF1c1E2t7W2K3eqK2V5r8GCKGosdo7B4dbYYAKNBinHeq3JgKmdBT2SYqbWs",
  "key24": "4Dy3KjTEiaE3GMNrHrPn2yLWJzooCNSK7629oUFuissjRyVYrVibDx883kQpJ57j71o67d7h2xARJCsofpq4Ecre",
  "key25": "58w6uPjTnxruMPENEffBDQTkCoRZCipKC9L6rwvdnCQKZvqWMcCssUSXRBZHaSAUnTSBBdMPuQM2xKbZXZfG5QKi",
  "key26": "4Bf5u8rPJJqEakLQGvrqgkXsXYL9mVYAjZ6HnddFsGA5b5kq7C5XJtuXXsVgw7hD2cDJ3w6J3ENpnSBByJPLesMK",
  "key27": "41Zkdiy2NKepAFhrk5ooDeaCNZtjwddCZy2nVGH7sNnBMRuyRc4E48Lj38UCMeRUxXaukTNNS17TDa4GfaxWXLGG",
  "key28": "5qEn4QqXBJeiqffpAbcAsxs4gcZvBtZJAK6Y7J7MKUua5qcUR76S672a3ZZExJUM1LHZNuCCz7JyfbiYVe6kPdiC",
  "key29": "557Wq8HHCbeAEKjTrQjHB9KK3uqoki16hRJNhAnEQxArvGD23WLyrpsxdyqfPD727iKm5hYqGqinjskcWDrsmXk3",
  "key30": "guqb2BouVJbQEiFwHTz2LXfca1ZdVg3DAuLAp2W7kGjcWoK9zgD8vQ8zhpztbbCTEYXJh76htF839BRbfpS9TFr"
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
