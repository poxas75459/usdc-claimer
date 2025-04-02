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
    "3mYU8smvtG7iBWWvfgo4J5XkwiF6qzn3BbwX23uhsUVLy9V2JLaGUJdHxemtDwui5NrSfGUZ4uB6YK84k3LTSY3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23B6yifg5DaJ1kAp2L6NWbCSyFCk4ySMQfe8WCBu11pt3SXKpAaCQuQaBVsqU52msYWQvfkyrJC41ehBw7HFhWeg",
  "key1": "3M8gdh5h5njPMHx5iyScsWCHYDJGRuPY5rrsP5VoL3Uhn6d6mgHAmJE6Xzg5A5jpuwihr2Qr5tDYt7u2r7p8BZzH",
  "key2": "5F1iHvZPaSKyUmYVZC1NCTaj8jzmQcwJuFD3LN8mstR5Vd4GPGdUehyQRHmCo7QzsZbfAVBkytyegtTrU4zfKCfR",
  "key3": "r9HKmmP9QR2TaZaVGP7k3SepehFBsfro6D5at4s4XbuirLhpZVMTZ1puuA2dBvZpjwB3JhdQfmD6SAhwPCeQVux",
  "key4": "33jYjLoSjXh9PL7i3h5WdY5F5gvXV5kPkHxq488hGqJsw1d1qU3qqbWWEFnxueBjXfjCQ1rd1WScf8ATpnwBeAjB",
  "key5": "63jVFRCocv1jibuPiALY2p2VyYNUY5FRMnJk8yJf3o8iZcUkK3PEKRHvhs1gRPmcZEvRs8eZjawfbZiobMTkH2Ay",
  "key6": "4GoPFbRmyTFwWvrD288Mux241n26xBjShNx8CiRUzUabSgzZrbwtNXVqFpv2WP8XjtTr4uHikVoHMD7DY6pMZefj",
  "key7": "3cB7BntCeYm7GZo2GMZbXMxqGMx4m1o1wWThTnrinnMT43gW4YbST741beqW13QPY5pqma5cBus9Y6vCcRpSwWwF",
  "key8": "1268vLHbWmH7f4WGvRsokaqTQprTPQTikcrMZ3NzjBiECrJci2okvLRtuY1UudTXNHvxtRJZGYRAPpqRur3yXHj6",
  "key9": "c4oFc8YCmi4zYs1rXkNm2zAAf4h5ikceVzXfac7ckRnmBzg7vRrjLn8Vydm34XBANzsQjrqdnH7DqxwB3pxqnMb",
  "key10": "37xGUbffADL6Q2wHrL3Fuj5QPuXErsZL3LaK71VCAiwDcrxrBCS297bcESrWP2YPozJAPTh8gbsYtiNgSGb15qfU",
  "key11": "3Xz5EKfX1q1uHRTcS3mLrzFdfJhHrtQrG1hxUAtVtnWQG5Eod7yvn11VyPVVDX4uQD9Bx6EtzLnnA1emN1hYzj4J",
  "key12": "5EYpAFZFR5FwPsbKsZZt5B9pdraHcF3dcrG8YDTqWNk8QCZ7i6piZmF497FFYXLDqwPmCsz9FP5s78Cijspq5f8g",
  "key13": "3V53dcaoNj3Za1QXuG97u1xtyJiYreXcCtBcTdX2MgyXsLsJSoF9QCsgJyUEAqRGa7JszNJwGHA9gTcs9sw4bh1q",
  "key14": "2CtVNKmYymEFYiQXyHftCf1imQTTQ4ejfN9pd4pVKNqX4W2tpdWqBJ34WXY682wjwVFWhXr2kqGQz9sE5JoGzajh",
  "key15": "3SYBtxprDsbVUoD6zEdkfqK5WgB8YyGUtWHHi6ZMqAjMvX3nE7482trMscncMMsV9iBpYfZ4dT8a62Grrb5dVZ3Q",
  "key16": "5PY8k1JvQoLjv6bCXE6rddUnqAF8Mp5c7gnMUXEtdgmFEYS1YoGWtnmUE8XkifRtBwJaaBoyRVHJPMqnDco241SR",
  "key17": "2ZDEkz4H7nmqWN7K57NH8Rdmn9gdXPtKs9R84uon3zULiEzNdMWnTj1CCAn9a1V9tF8PM44CGXuiEbCkNgxyn9X5",
  "key18": "4WDTyqGGeKFUTApQUcwVBgFf4xfp3yPgqscdVv3UGuVPVk1ai3uWyrTbmeYKEG7rNPKasGZnt1MSWjhP8eeonr7k",
  "key19": "42rhTWfnSG1tfkRfEkXywYBHsmBr3gJnhVZLsVTZyLvTUf9e5JLVFjjQ7DnoGFtHyc7GPGAAH7MpfaH8RfAi7xEr",
  "key20": "2W4sJFjE9CcQ5214dRHFc7aQ54XyacRE6Qe2JASNxKz38wZKHH3R5vmyddYmCjAHhmy5YHKaPffrN2uwMSNocgPR",
  "key21": "3RnygyQpxa9UEVe883JXvtHzBbP2BJVeQhbHg45gycCYfD17nqyzGp1CoWiXtJSqaxJWJWgD93YnoQKRKvcEPa9u",
  "key22": "2VRNiXxv75vRHTQfMSwhF8U5hDs2PiJXfD3b7yKDRKsCJ7aMDQoFxza3hR3Xt8TdXpXjtoNvVkyPkvQmaqoUvB7b",
  "key23": "Sn3QDdMWqr7JVqzd6JVxgwLodF8FVkVn1XveiWy62fKRrNzx4oojBKLfpJyTqzr6Ny2zRA6iU2x1pMKZDwkU6kt",
  "key24": "xxJejk7JJirNyZ9WTEj4NkkSpifYW3VQvucmntzqV8dSLFXZDxFLCgGqKAxco98ZXXdxzntq8ZApKjU6Mbt8qSD",
  "key25": "H9QMpaAB5yJmeuD29GCsJQsk4nKudCKTTkeKVKeL9yXCmW5JZ84p4mjfu29Bzy1UzUZ9jsuGcZoBfjdd1FdzLPp",
  "key26": "3PN1vZp9KG8BPesXccQHbsQxD1Kku5ntho5xnrHGcroc9CaVTMy3Qhb8YunMWdV3vHHLZQaBghdEnkSF3tpnc345",
  "key27": "exN3kgnNJuYxXsixqaQJ3eQEusa42YRvYs1rfyxwgwpkwRqrF72i6ShwMFrTsKfXbZ5uaUoEgRWw47PdQdCrScG",
  "key28": "2Uy1z9SbU9tZSj525aCWHSzynFhrasiEB3spJjsJWhBR5VSkX58jNZ117oo9v89jtiQ9jfAtCyBSuhwLQPTZ7tfa",
  "key29": "2vSFFi6SneUWvEZ8j6Yb6mdzzvy8KPdjtafvcMB4eddyFZR5u6kUsooby2hbcTtV59AJYwb5wgqeZ3YqPsQD9itZ",
  "key30": "wVjY85m4SkxmTUAJm6DPhpK5ccAEf1qiDD3cv8VJRhvhUSKG3K9RkcqFWckEdyFuqcheYXoNBAA1M6Q5YYNSj6Z"
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
