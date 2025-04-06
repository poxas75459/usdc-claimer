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
    "49PTwsZEaGUuzx16SMXW7nwUpkKb9w7UKuzW3WqUrAHL3wPx6fKsLUCMHxHsyqTXv1UWmq784sceCnnr9gDUKWki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpLuc7i3o1fpJkKsHWWXX9ihk8fuxmDXiMsEjJ7FLhSQ3kJBGduBDVVfpZbzQsmh78n2LfUPrtNQXQarZoETTiw",
  "key1": "4dDRJbWYepy26rnP7fswtPqSk4tLYBvPCmMte1HtcW41gPyZnu817vavHdR6kEHQJvWqZR1vvEanuU7U73NjvXxw",
  "key2": "4Uhcjj3aYUCsKfFa36Dxn8fU6y2Qg7qu4X7Lo9vMobRDCKL13UzCnG6F1WNnAAboiv153a9gLR7uKY2k9YdRTHnT",
  "key3": "4hKfRQ5jzqFsQUDPntYjHk9p82BXDy8mCFGydv1tGd8sv8M3QMJ6frewtEnoTCkzUdw74iWjiiFRDTFNH78rKrcH",
  "key4": "47DdWUrEY1exwup5h2cFUGfBm3UUSnHY21QXSdnRrHidQyNgNp2afBpQxuq41jGGXzXHrvK5VkiR8Z5P8zWncfoc",
  "key5": "5BroYmpGkJ3DK2fdoP215C2myp6QMdjTgQw3aL8UtqSJbhg4XwqEXqmAiVJ1Z3GGttmx6zph9tzsJKqrPSZMGHRZ",
  "key6": "5tHdx23CYsWMuBbbqiSxQ3wsusUH5Z9spCrqdLtCRKjnGoumfEKHtLVwe2NWEgCXm4dGCgokKv3xHV73v9mfimFF",
  "key7": "5JJ1N9iByJHiQ7sgYyvD1yRDcxEUFf5gpbRnHcjhfZWS5tWgzNXJZgyvkSwf2U6odg7ZoXGhuhRBDnwXhzY6kd2f",
  "key8": "48khofdvfNb72o4C3NVP1MgfMpDWweSdzD5A3ufEVwUnpMDvNnRWRNEg4NToJTiVLtey2EC7NaDwMRwrcYiCG2La",
  "key9": "2WrAi8AqHds96AXLBcb7dN4ugzgyYADmZdyiuuRtCoQ6u1ZzYhKptUKeQAXvTo5vSSq2eVnK61gad8oaLaB2cMqe",
  "key10": "2YokQ8y3q9VD1BuZ6xFNzwaBATrBQy4Ljz7669LPtXizhoyE91wRxG5o7VmrsFCoYfBHzJwQyDGosNAZV338w6Jn",
  "key11": "DDaf6XTf6Wst7RiAxcG5eRgGBc8YjCrkJRPCWhvCRJ524VsvDRgm9zgkyEdi51nKdMPEGT6QjpuCj2fhmDYCJJv",
  "key12": "2LZduu7b5qyTH2wrxieu2kTR6iP8jzzH84yP6xtzV8y8b1WxVZ43yXtwQnS6Js2hGc41xQjgu3q6zBnpWpELwXEt",
  "key13": "3YpRfTCdJzsZWBGRcP3DArwp1dv4NpRGDH2MfcLt7AkYbpLdxfTJm2EH9wY2LRKvD3jBP4jfNmXKTqu4GiremyKm",
  "key14": "4HScNHhCZWxWo28q19GTZULyQH2qwbmUVe8qDi1M8zFnNwUAb4ooW968wAeeTbEzWey9w5aoVAV45CqaQRP6fXkj",
  "key15": "u5c7zCeV5s4SKXHSVPuA45VdcvyRs52j4GWvckHwoa1BY4fxfoL18jfGKQR3SoaZR6HYFVGzBrRnVdvwEBRu67d",
  "key16": "2qtfRKGbqHLRH5cgcZB6X7ZR3eDiCtp2grX2ZrfCWuNT8EaxD7WNKWyQWmiXTfXxjUVVEcXED3jfvYJSUTkGxwDt",
  "key17": "2Vqa33vbAuQNBPeCxVEnaU8JzdmSV12gbwUSRrP2EcbcNs4yfYXM87KciqwrhoWGnsbdGCwRxLdkTq2hTnvPJkma",
  "key18": "3Mqfsug1vwFRYtvirPR9pqNbP2ZSuEzUX3T5Qo74eoa55Qx5PdY4B7U29LFUdhRFkgvSZ3WiaczaLGRop5J47kR2",
  "key19": "BMVx82ewSsdz3i88Xyd3AnatLjZymPWCGBvM9zEVadusGSvPFCbQz7sypnmHW1zjc4JoFxnkwJ19kfr1Yk231WS",
  "key20": "5VkEaQGQvFi2Q6degL3o43zru2KHWqoGeT6bXpRzJHGto8z6ALCnwg4K5ePh5d7EP8ASvEfvUkymHccNrCBGs5JM",
  "key21": "31nBpZ9QVS11xmRn8JFoybFvwrpiiKwQkQdJFNUjoBsDWpxc2BQhCMqiP29iDWyFD4YkERBFQxCffHaGv9zjRRdy",
  "key22": "2A5oT448ivz8rfc68QX8fvC7XrfitUwXWzqBQaUssM5oyiG8EBtXpGubW3gm3CYKeuKUg1iJ7UMHgkeafmyLSMGp",
  "key23": "4F9R7z1MwdMdNmE5HnPxyDAkbMCLm4gzXLbLiDDDnJLUKySchg41J6Dkqgeu7epnP3gDQg4FZRzUVQP5AJRUArA",
  "key24": "4AHu1VWrtN3HYAvS1mmWb94LW3yGHPWFKkQxrZZaHMCo5zWQfjpeZGXMu3As6xZW83mCsDsCWUE2PQLxGQ7oHxwc",
  "key25": "5FT4sDFuQfKg6CxP9DzF3nzV3tMtkbWRMYTkmAYcTkhWdQJq74E4X4qrcrxC3Pc6cMvCeXJsbRZ9PJiWYMqaiQek",
  "key26": "5Jquh8YFcRamxqMCVxxToPkKUz8BBczw66Uqu4QX3vz2pj62S7To1DTFBLpxDoUa9nJpprHrgBzmhztrZNjvweE3",
  "key27": "XrEgMCv42N6ni3EQasXLaQfVFLJY2oSWiKNTWapygSLgUvWhKp4GfDnM8pP7q7cEaAbTuSDJh67W6LDbVtgPKVS",
  "key28": "2vMWw949xbwDZu2k5zVtrm79DtSdpbSd2a9TgotZmrfHp9wF8UrzjWRUUN5kzGnzS982RRPtMfZvC6uNJFoZErrD",
  "key29": "2uxgfqMBL19cXrTwj3EQAUQkxnVp2fX8nRL6wBnHYt1xmRynX1uNGMdLS3Z1b6mbMiXot9MxVCYzF1CeNYWnYQRy",
  "key30": "5peNi6xnujbiPKuhz3KpfchmntZNPhzZbVgnEHJM69H5pKU9DV58acZ8Fajkkdudt4Hf7CaU8LJgPgn2R2tu7QRW",
  "key31": "3pahRCvLvmzcs1jWNjmyJ4fvbBhk5WbsuLp7Bu8uxAuXt6rthKztXGeB6Sos9QTaW6fvueATfrMQsx7mMAyzG56U",
  "key32": "mVz4CGJECkmbzbsSdiJnJzHk9eKirAHVnT9Zsx666kRkR76gcTJQSyQY3jHLQuo3HDYpFuvnsx9s3vNkftu4cJs"
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
