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
    "4nYtqFSYfMhzanu5sPz3cXYEUw4gZUNVi1DCJs4Acze6DsAJYJPhrSde32ibCrgM2y4oyNrNDVVXt4Tv9Vmr8Haz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRAVDR3V9BuLcWAXXzGY6JCvwA5f1aM5wmQbZvN7sS5yKEZb1pobywE3piFHxF8XDN2QeEo6KPivMsRQRPFPmg",
  "key1": "5RsjNcFpajGqrHY9RKDvyQ7sFQUg7HaGDhxbKkgRV5dWFbRFmGb1wtb8PiikVRNpakeqNH38bWPEdNQBnJjpxDpx",
  "key2": "8TfArBXxiKeRvCbaMqC5wHU9Tf9d8fMgMVZhnN7jYcdv3rUUPLVFqvLU7U5MG3wMQmJA7hxKMcaLE87wNfdvvZh",
  "key3": "4AkFM61csd7NV5G5VYxVnQHqmP4JfkuMbHgVpXTpgSXvZF3Fxd4iD82Fun1z5BvLf5oTxBXFF9bBhnhwPrF3jghu",
  "key4": "5Kcb4oBFwWditpzdGvXD4exekHogyqBjZEG9SNTLV6YM2CiCXyxzVSYp5RaD4Mc4b4Enjok9zHeF5Eca3n49HzcA",
  "key5": "4jwfrc2kaW13drdtgGRhQ9GvQh54pVGp3BRHH7bVPubetvFfAznAogBPwNWmUJxtS1mZp9JaCPTknmac8aSSQsrY",
  "key6": "2AGmQn1MSMZjzLkerbLsCGJrxU8GoufbL76rR5FCcAda8vBpoHcM99XUqzeGSimemCfa1pG2euUuErmwuzT5EnUj",
  "key7": "4WGUgCWZGx9gVJkbioBA6BQa33DZ4xspgULLqPe74ZwzfhAyf4ZU2L6RcqZ8pSDvc2ohwyPbRkw16uCHWdrcz2UD",
  "key8": "FfkFLpbQ72kfpTuVTEidNu5iMAc1KuyoVzyLdG2VMV6LmppMLodwicXMj65ojGkJGzzYmpaVhBNu88jjQmeUoes",
  "key9": "5vrFTjqiXsFyi7UMUfcXg1qBDCX8vzoT8LjfPd1xBT82RngUP845qoUeD7tRYY99S62HUxnAFwtDfH35FuLfV6sx",
  "key10": "5JMEPp5HFWBqug2rhnY2ZEiGmAzovBgXtdEyFLKpBEi3wtnEmze1QCQSga6wAuvcuQioYQoKF742gDGRwUFKQ6Qy",
  "key11": "5QTzderdBmrSL6dB8Y8sz1gg54ymv9DhZDWQc38ksQ5FtY84d6zhJiw4K4ynSNWuXFCiLkznrn7HWSCfaJFnjST4",
  "key12": "3inZQAFPHYUgMuVCinkerDoRSprT73bgqNQpH8Gcws5oALE3vzJjnWZidV8NBThGehxCLJFi2QstR7TY7tjbN3T8",
  "key13": "2utaPZfAMPUwN4bbzkC6vDrFmS6AkLB76cmkKe7SMZPd4BanNtytNaUTLu6ZB5mxkgtRThbxVSJhiRST4eCuctiJ",
  "key14": "5mD6hLqffJAhdPVRwJLYAU97QHXLweNwxUhrApKCZCS4E7qTgHZ7e2gjy9pM8JPCvCeVvw6cGDFY4bqSGpVNEu1u",
  "key15": "5mnwrdg7WVJU49bYLR7EdM6Nifudo2oQqy6uhtHxZjAe7BGCs6hYx1GErG1kKQebmaP7WVN5dtagNVp6nhY8Tshd",
  "key16": "3BF8umyaDuuX8LDHbQrGksyELi7mmtNB9QvgsZSXexpbpAizTHEnJbSPLw46fBS9vNM6PzjmdZQxQRk38KYSBPj5",
  "key17": "3vb56Go51C2tVvi3gLVLXGXVf3Xr37V6RHAVva3U3f5p2EqvDdCoAna794v48YBYmCzJyJbPFCVeHcz7221EjLqB",
  "key18": "4c5kDYBrB2QYmE3ctNFnoPfFZR2VNJXhqomvQ2pMpP7Z5AbP214gbXiTbkxAkCu19htRLXJAQTysyDFsoVwQtWeb",
  "key19": "263cJeDHXVBNF3QkGKpfoWegZnZqY6qgEexvpGHLTM7XuPwxtZHiG6RVuXqPE2TpmJ3XExQjATUVa72TukDuGkn9",
  "key20": "4s6DnvULJfAwv8KkS1QxN1f5aqSPSWWj2WwCGJULsog8LGDRMqQsiHQQ33tXXprNeeDQEXK1tnspEPYGPZYaY2YX",
  "key21": "iDa8o57VFuH2Utuej3zHQaVpHXW24tCW48YTMHaTxaip5gX3iuk66G1mTKzRcf956JRnt7hGnF1yu9CkXPvNTop",
  "key22": "46BpZzFNVCU7xgwVDxL5rEyYa8jvxePDBkMiqUe9Cwx7fJ1nwD9pkL2QbD6KfBkVJ6XeauErC7TZn3tkExeX5f2L",
  "key23": "5VKmsXoURLfakwprcMmcwz6skkJaLZYwM8sp9BGoCCey4gCQn1D1So7sQg696xwi9Vo624FXbprDvsW2ZzfZN5AP",
  "key24": "2tRtKqQ32rgz77zMV78puEQVJdKEWKZVv7sCCG7TMGXtHkAqFkRRz1im3Nqt8hTjoUpK6q3pGeVooWCHzVFCcGhT",
  "key25": "53DjdKACbMZdhowASsbWEviQFAsF7MVAPFSbPCNfFs95NDEuhTepr1B6LVsCp2981GvaUoHcL8mgYxkctccK6wb8",
  "key26": "4mDAQsQQcUnsnmUa6E32eHqU8k3A5B4RxqwWNJC6roT9t9FfhbfosWYA3wQUcyGoEXPqWxKH45g1aF6J4mwL9UbG",
  "key27": "4HAT2WZWK5fbqsv23hZJB8EwtQLr98vwadpvzHf9pVkkGP3QKv6qpaVL1LAk8DAa9J2gCAYEmoUb3kSnpZGoczZ5"
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
