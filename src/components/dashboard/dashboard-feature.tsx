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
    "5oG4w7r8zTXXCLRf79RbRnS9N7bccXGpZ1sApgtVLaCaGpJY1nPA6obe9h1iJtNHEnkd3sVS3DMdwpdQ7yv9F9F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K2K5uPWHMJU7fkzAzKcSKBt7Mi1rCNs5JixRuhRhdhDo3UKGkjfGyDxQRoNDVdgdDk216zULxMvmtn9dnL5B13d",
  "key1": "5N58iPELtHLxT81eRML4VS6y2sqEXNePgL8pPh54mrFZVVKMeFzydtFm86ZZPfQpN5n49395oRVtfPzF2pBszRTn",
  "key2": "5XWe5HqpAexw4qbER5C4syuHPmmAAujTsKeLHyNdQiJ5X7GB8SDZi6rAAh14GE2CPRimMbJ4UxnwkYVCkzyWkwX1",
  "key3": "2vzJagEZsiD5VrQbXUgaSsUfUhLMPHhSdsZ7wvibHnRPUzbUo228aKcMTFxiH8HGufoQzjKHiKcAvA65hBftSv6s",
  "key4": "4Mfmo51ab9TaRWW4DVnJ4vAwm6KSd3FvpHM7spcQQNA9zRK973LEQLMPjDqawKA5vffzHioz5nM9j1uBWswZL7fK",
  "key5": "3CY3K9b97Qxw16QFDQpBqEQQJsR3QdTHsSYfwRQ5rPTT2xAtf6rrKFyq2f8MM6MAf6j24o6JtVaWjnYjADHqFnMW",
  "key6": "53DcsGJSWMUqHbZAWe4b8PQfq21nx1beaAFf2WbCbdVFLvYs71CygvR4xSTySCdR46LGEkaBwS9krD9mhJcWm2JJ",
  "key7": "4bi4T5taXDkZber2iDbWdWkzRa4StzR9DHx8TaJ4kg4iEXTC37wyijsNHFnjMwsb4AoAxrUmLqYSQcazv2rsMaUk",
  "key8": "4BPtKmnJiASjUJhCaDPS1NFtDJbhtbTWK1rjCEFgAHoVn7ecQvDRBSexv7mTmJjagvBsgr6rvZCPdPW65BABknCx",
  "key9": "4BgPsAJkwDoiUFoCPe9UZXCVfixu6MNqaKUvdy74DC5WcocseJ4f4dNDtzP6FAZMKTdw4489F6TWB3ZwPTbGgEin",
  "key10": "4PEYD8jqjtSZdm9Lb4jidoFq4969khoytYqAD1XciQf1iDQDtGW2y7145DMwrTNgoy1nwxZGBU1ADnGspjh81JpE",
  "key11": "5g4NqRMqp5y3pDds7SGW5BanAkpB1m562WC2NvZtgQc5vUTJDstjjwnmZ5fKwY1AMQchmUUE7ao938yMNLePfTNL",
  "key12": "5zJnwtCGngvw9wa7BxGXvqxC9ntsZfivjxnMbqt1e6fWdjuA4E15kjEwC5GDKHnQy5WM6nmj6yW5M5AddVet6aSC",
  "key13": "4YF6HbLwacy9YBjHfJBwW3BXGHAsqbGgq4HhZSDQZyfoxBHr2uv4kmtXg4v64kJdujhMQ4KcDngywhSTKLpcxzQo",
  "key14": "Ro4yKic1iynfUwXhQeEfxbu65eibT3eytv1U5J9SDdW7MyCfrCdUA64nHzsCTCTxJaKrViXvrWbDZy22Jrm6RXy",
  "key15": "5z88mo1G1gJ73P6LWKM1mP3ZThpY92wuEXTLW1Qvr5snU6xWrrbSVwvDCRdisNGi3zYW1niSzbumWwDjkRdF1Az4",
  "key16": "6WdujkTKF1KUf3U7w7VMmFLbtJhiCB68zvimeRB6VFmKBrc7grWn3SpB7GLrfTG9CzAHujjSdby5raBKz95Fezi",
  "key17": "NNCgQFwXyJhq8RsqJmDbJANTpAVFgTL8f6ycxb1sBXed6jqegXcJcL8EUjAMhqeGmpvciYLaGKfSDGmv348zCKB",
  "key18": "2tVwZbiLKJAprcBJPwBMsFfux7NiQnMH1hm6tNMG6CaJvakg3LgcAKLPgXaX3URLDFwsfc272ZaekAEoB8wqn6Ja",
  "key19": "2xR3WL3kSANZTHYsp2AXRCJn4ebrTS2tafw1MfUvwUe8dWcMzytix74T8E6dwTvk43RxAuPUAcosfHo1TMUFSNoL",
  "key20": "5kVVTRjmaj8pENAjwwNKsVm3XN2gQFwhqgjnqtSpCncyXZS7651W3w6jDtSdjTrH7Fvhy8wSDwcQiHQ16Y789tJk",
  "key21": "3ZwsquUnULPa6a9miA3xYcoV9wdfYKhSCvsNyvKodbCvvDLyw8QgrCH8utPstJQuoqKtqKfqLE3gw9FW5RaMmXdk",
  "key22": "2j7oFghVohpCUkbTSkAE9vapaPbPTDPyzHciv8XGNTuUM58WFbV39TLjGmMHK17YMLRUkcdbjgfwEEpFGRcVDNsx",
  "key23": "XKAkrxhcwUtPhtuHLKmZxWCr8tAcUkgDYoqUaFp28TweZq7kBbXmL6pvGK4Hia69BstZ9GFdEEaC3qaabPmermv",
  "key24": "5GU7uFMqURrX8Lc6qJQ3VJAw5hvsKKWcBkzSZotVJUo8DwYDaVud1XYwXYLLyw5seLCoSB66sssFAKmvCgoGr1PE",
  "key25": "4dAuu5f24B6Ea1bFbvGgxTFfQ2SVi1f9Wr1hmsMWyLMgVgftnERk9fMXPpE6YDh7nbfQzW6UCfqpbQMikquiohVq",
  "key26": "4Bc7hiFhabNhxcUGgXYJcHUF6H38bCGeKNCcGo9X5kQfwmbfauWwQVKkenGXBCMtipi8bBCAmUuLHofdEKjD1CPH",
  "key27": "5kFid6thZ8FFErcpnY7Cn3mGotRxe4EsCGUZmxUcJsJDWQCopZJ4RkgKBFBB14fUh5vrbztCyKoFn7RFNQZJcf4U",
  "key28": "4Q6xvfHd3FfGehcayHrqA3vqYZsSUThSd3PVVhVqsYXqrhBNiMqPf1RQnxXMTQaQ4biBDVN25hHsGKnx9oPozEja",
  "key29": "5wFfamycJ7hBH3ouHAxuDDpHt4nX3aYzinDfRbyeVMCYb2R7Dr3NQQLySVorHYm1fdhyHYXfksy9ZBKfFL7bocPp",
  "key30": "5QN7QLCzRPAnyX5uRwANmHgNCiqkUNnXf6q8hqQ2gp8Db7YVFAWG8TA7aMpBJKJGtNpMsphwLwSbSeLsGcqxNyLi",
  "key31": "4Ntueio1xzFSHpZm9RbXHYfPX29E82fDJ916u7QJj6Zadmpmjspe3rjwWbHssdYG1vXcsfGbVN3jMwM8PPei9hVz",
  "key32": "4Mb7PqjwRvRLRo5s2dWoweetzFPGF4QpZR9xiyrWJBHtUYep84P8BjNnKzjqCsFZ9yEsZiPkK5N6XYUff7aZ1bKT",
  "key33": "5UN3PXgdnvnVDgsGqhnnGPrim18aCnGxq7XBAtoTHhpCRiLyqcVVdQvygTC3B1yGe38SNekP9chap9mEoqxNKk7s",
  "key34": "2t9CvwPkZTiKnfaeCnRM5BGEp6fPnxmzuMdK6sMqNNPnNgy4B7Leh1JNWAcqd3oMYofJqzEcrWbE67A7iv1KPyNj",
  "key35": "4g9hJ8nuhZZ3u8FHvNjMSUX8NCE7bUd93GvEgtB68MSHATKRvT4yFQ7cwoyvG5DChJrzydFjiBYMH4gQbs5RpHGJ"
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
