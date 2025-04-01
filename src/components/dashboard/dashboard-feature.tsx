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
    "3cyyEtTH3EoJSDNd6zP2kDB4xxFqxqTyho2iKav4BKFWhDKZ4NLDySJGnwBT5Mfpk4p6vdbDvFpyEp9m9RanXvTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7mjWNgTwE5aZ8xsZJfV6VCsNB4kN9qJZ392Ciqu462tgKTDsZW58bHtyNdukzoQNdvDtdztG8BteHnBpsVtUNh",
  "key1": "2e6pw9RJiMn1QEbPVJHAMmarjv7DMEPFEJrw1HA4fBruh1eW544FVp4QSzHvNdZpQpCGjSFRSFk3Qqsowazx2NSb",
  "key2": "3fvpmEqwJAapCxFeT9kz1PJN7q3C6GxRcKqR9EKCUhj87No2DLFqMe9dFpbnU7gxTb2Pg13pBFehrws5E8naWXze",
  "key3": "3Ruyjvdy2URotfVMRD3CGapVPfRhdSBJyPbqR3fm1knSwryjUXmNX7eVafCArMuXt5YZfo3hDvvsyUPw8MG9AYgD",
  "key4": "5yQmDvqBRvDkfgSZA2Axy7yDx3QYuW9M92jmWm7MDvggGV9oQcaEugb2HTKUbzQw7BbtUbQQ9DQfxSxu2ctsuSDi",
  "key5": "4vqVqZ7jWKArEKonLfxYK4Rn9XFr8RYAiMKRoWYbisDs9AHXJEmFYCPU3Gp221f6hR3iFX1F33HZWbXGo9dGertB",
  "key6": "51jfZV3NrsWQ3A7rrdWNnJyK55g3m2pu7K6an6yjawKJexJ7RaJ7KXe82deEivfrz9o9sqBKGLWPFHWoi3mcENW5",
  "key7": "3RsJJ8U9URBQwcjxo4B5bpL5N9YdVkveVimW5yAAsFrSoEwC3rfZcyS5BTRzom3MWLj8sFWSDXQSPqcJcCVaafMs",
  "key8": "MYqjKYQwsgj4syhAycHQsaDewRuQVyxaUWqu414YaQjnXhzLcb6oHz9s6QnZ6yZvfBTUe1DJM8D8ttfWfcecZ7b",
  "key9": "5nkS7KTjo59F3t36etGtRn1Q9rNeyr9msDReAi5CKugpkS1MbFyvi45zAKdi9v8gzqCapK7CQ5tTpLR93mDujZZA",
  "key10": "4isySHDztm82eopYnW64gyEmr5b8uXjXGTBBjXqWNf8RLvz49ujJSEHSDkgFgT73adeBKAjxHz8Ffw7Cie7GGiW8",
  "key11": "EByCJPgHHtc1n3QXagAYhh74JBrYBGWZkiZFLUdsfrdzC7UBPaRtCgRCgS5xX1iFfALjCsqFbXCkTvThXDSGov8",
  "key12": "3mLWD5ALeQjrBJ1YzUPr2hLE9XpaKuehomFwZpCJXLtbh2pgwUbs5MpcLPJN4qYi54BcfaqwUNQMYTSZ4jBdjHKT",
  "key13": "i6yPJdawPfcfjCndvnyU8nPW7iBDhnL6E6Rf4FyJCXTWqRVqyLV29Krr2z5cNkvbfA6wuenZT3ipscx6sYBDZBX",
  "key14": "4CdUsNXHPFcLfZGp3SvcZtWwmH5CJSsQBBuMsgQh4dxZtMFZzicgwopH8hdxThoy7E1dCqUtN2adTu2go71Y518W",
  "key15": "24SSBLUFyUzHzPCGWKMbPsGw4xp4MYTVeDadKyF5V6gvjkQqK8Pg97AoKUmCrQd8Sk9VjYb1AVN5vmvkXebQCHKh",
  "key16": "2LQYrMkpLxuvmLvRGrDRpP3Cg7ujNjWbuqtp5YA6Xv2fC4sFSgk8CZTDkTNuMh4Lq93g6v4d9LAorWb3uuiaTWR6",
  "key17": "4KpKALzscRpNvskDv92xeq36N9kk6yjpXpHcD1xkfpsnNqQR5YnaDzaxiRq5877Bwn6yGHNC53536q2EPJ4jxMq3",
  "key18": "52R9N9eiDoWtKa9faRb1CJwTDaXX6KjfcNXSSxNTqVpzmgdeeaH74J3tDApKNCqyjxjeqJnLZ6FGxKETviBwVeYG",
  "key19": "EV8VgoiDauJPLKZiuLtPZzueqhXW1dFd42aRerDyJqLWQYccZMU1HKiHBRTajwG14WszYMJMYaW7TJBcUcf7XMW",
  "key20": "41G8WqrxCyeDgY9gSKM9nycymgtjG7QbaaKr21TfnLnDcZhoXFkWDbsK71m83YhDfxDcqaLcLm2MXZcdr3z9pqhZ",
  "key21": "4QRfcpfAsy6AeYs5DF6gCkg8AA9RuyX3muFCewJwRCTkHj5p7DWXAEBi3gJmABQS2S2LWDANNGppVe2ZhJi6WVij",
  "key22": "4iPfCtdqwdamkP5kM658q8943iFWNrepd36f2GypEaKtAZ9bQKZhVgznhQbwy88RG6zBLzF53WAxjPVjmQqpxyRy",
  "key23": "33hFJEUMHuaVoeviqmor6SP54U7AWFhMuEshY6Awm3JpUd4awGAiDhNjfFpxF96tJfa4ZUGyPBqqoXE3XV37m2kB",
  "key24": "2fWkcwyoxR67UGTPwD4EwvJLkAgosmREwjP7HTbbc5mrrcPSomWZfCzyjs27zWKfpqfayYkf54JR6BNDpygvV3RT",
  "key25": "3hNz6xFLhXG9Mp9nQXzLtNMNKdGQQUJPELenLyAPqeyRwTHZ5HBCkztqm5DKZAckthsQURGfwtGhihWqvfdjoKaM",
  "key26": "BH8ZtR3n28peDQN8vzUfNascwTx2hez7XG44iEcrvn49DaC6s6xxKMeufYY128KmEr97dSzKTxPb9nVnQ5gpWYu",
  "key27": "2XoVjHPURLEWR3JbtZrPCgC5pFw3Q6NsghMWznTbU8S7RhBA5AYJSkAKtHLkqozSisYKtG6wmpQUUtNnUP6abywB",
  "key28": "4pbLFo5dGRefJUbUfukUML5Y6WECEixfDRxHJmpBT67JLB8KnEY6iohi9YqLrVAKjDqMwZKVfjxQTrqgrcqSUN5g",
  "key29": "2hb3pfy7D8cgxHFoGYBhdPRHkbashYMf16UJHkh3FRuEms9BtHqXnHP4r59zCuBUj7pxzAH1KmspxZuPGvJv6nR9",
  "key30": "2bo9HoRPp8tmjbBpca1TuJg5oaHfdNQnRXAHpPJhPDYD9Ph7ZaRRGmzU5g4Kr5e5xVmCtJfeYnzM2SM36bXvEmPn",
  "key31": "DhsYyjvYv5red1cYge6iBaUq6d3FMdgvdz3uqAsktCbiBUn6YmDjnhXDC6v54T2WNHLp3PYQ6pkPoDV33veQyQ1",
  "key32": "49eijb2PJSbjY3F51RhWVuJr9V8vj8pH7YfkVddejACff3CT3Gtxec9ZUfrhHPeaGk5NvE6J6cY9o6XsLtZsT8GM"
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
