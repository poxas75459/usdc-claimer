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
    "VwC13nbykueFDaivZoRmcd21RySaFpFCmJm6bphD4ubPdAQ118vLrAZsaThhwV9Ws5kudPgH4rr4FQGkzGpKjcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFvFcTeEG969p18cyrRnjF1vB32KE7MEdG5JTMK6vS9g93VnMtbtUuv9x1zTRCwdq2ujADgwTSRV9ToMqCKHRmG",
  "key1": "2vAwxXWeEWsR46httMRBNerEa736c7t2UYHcp1BY8sscyC9yMb173ywVU9CzpbRensHQhpe83rrifwuV8gaATiFC",
  "key2": "31snxaGz2QhJLEfAeebPkuftVM3EK4RNsTt5gasacbNnJxVjboyrZTS6d1wHhyDzeabXaC1MEvnfK5Cg3eQEGSqb",
  "key3": "h6MG6jm7BAZuKo2rYCcqibBvj9cqi2UewQxp54mo9vuKYT9y55Wfj2y3QA7NoCcWfryC1T3FB8ad2HnyNU394Tb",
  "key4": "5yp6BiQ76C8SE4iZKjdZHKcCMJjw1n3Gr3Gkjy1crmNnTzZdzbKttfhywRsGJLj9cgUjpiG3M1oafu927rE8NwPt",
  "key5": "hJQr34fVXXeiZ1mLzRrnZf4AsuPDLpc7tE6UjeKKR6p5XCjHVjuDdodwHdHGz8gUSGEcmQBfVdPqyEUjoyt5gmt",
  "key6": "5jKWJuCtW4m95iUT8LTnq5Vjzab13Vj2pop3cszw3q866Moi87K3KqWYax2CX1Hu69Ba9uACx2LYtwfk9NVDSwVT",
  "key7": "PZc9P4dNZPrt4tahFay1ZHmx1M4ZWUCDNf84sSGgVP6X5tFUEw5YWNKb3aJcmATgq9W3sFesQQYuuNqLQpAqDk9",
  "key8": "5Wn7sB9uuUdE6igDpdhYDwTVW2mTBY9EVKapSXmFNiTPMVntJAYNzYjEAwUASgqhLxwWWxETig6SqQMVjbmjgWM7",
  "key9": "zcUDh4eU1GqDBW7R7B3GXHKDNAQ6AoPBrwuSJMpB5i2StfHtvM2m7UuD7hAuisEKLzz6Zt5mrLS9P1jbHq1VyiP",
  "key10": "2tSHjaYHWWnDpzseBWuhk8WGRLybdcGaz2aVisEbKkALgPo1xoXVmwivd4pW64Hny5YUeDCwpxQ11Hb5rBh3khjW",
  "key11": "66XQpHeXJSB4MTSgW9NHZ14A7CvsBDQVQpjcs2K2ww2iA3aut7doMKwCcNEEuFK3FJWrs7HTiFigBe2joGhsUepD",
  "key12": "fu7rPScbJGWAS9eZQCeuAxYNLg5bfvwdC4MBVE86MnAQRj1X7j1a9xpSnxkBu7K56JdVLJsMHaQ23hpQsxLqZrY",
  "key13": "4FsNiW9TqFnodNcCn8Gbc4RakPgtsyBhqt1oUuzAZjRbyZePNZuXAkSdaC9um6r2U1RUBwgBnpBAmVaUj9Y9cD2z",
  "key14": "32xMhj6n2jfQchnEoX58kWCEjY1vxdTxSNAXfMgcFFk6bsUeeTrMWnb3qVhrrktqn9Ls8twyrz3SMZBoNChPXJHh",
  "key15": "272civecma2pTfrYgCQfCL2tT3MyN6gZ2h2J9pJELQTyvP8mgrxDuoostbCe2RmDUPozqFAi9DZ4troMrAtYFCiW",
  "key16": "4RW12s2eiWjyYuLqUSEcRyqq85raaWp7zXEtzzGzAHwS7jxa2ge4dditniYEgnUQXAUAPbkgVuKCmus9RbysApwG",
  "key17": "j3P6T98tT7paP27ZF1gxdwuRSN8MbFTiQo3AfvA7G33wtBJHpf3nKaq48ZqTzKEwLRk9p9HfvJGGmMzmTict5Ba",
  "key18": "3nw27u1H9XJq4S3UnEe7gjmqmB1dZ9SiF5Kf8GPHK2T97wFV9QwXtqQh43kY7DA8VRSNqhcgzUsha9Eh4gojZB8b",
  "key19": "49N2fA8XW66G56BTU8pmBU7xVwY3nu98fsRFTszSpV4qgA511KLQJeWHvuBVYDyLeR2ftbYfrkKEKEMs7tGJhzP1",
  "key20": "zcsCkZPpEdBA4bBiL36MAQhKjhxKCxvMfhAQtFcMZF1ULCJ3HMKq9hxxtBJPaEjj89LqPCTiNgshG6fFNYgdohr",
  "key21": "3JKk2idD1Fxjq3izmDGYvUsnKgLWqhJmH9HKBVrvn9nLbLkibv2HuKjkLvz65KJGNqkxq4C9wQjmHUfBfb2mRUr8",
  "key22": "5WY2cpFnac93Tj45SS28yC8uXxXsVoj3BinjnjAEPUHmgBLgcGMQd3yriTmcfGTVfNWrXYS7u1NGbzv3bhhuwB4k",
  "key23": "5V6vEu1mQcd5m7WqdW2v7Gwd8MwiXfwDwZgWvWWL1iuNogv2wgBcfACuidPeEj5991LXYN5oF3gx6B4hyJ2M27Cp",
  "key24": "4wFrRgwR44VFgLyG2j536Q4iTgpmMXpXLA4NQNF7chqXRPVonm6nnfEbyEsVLBEH9kokqaNizJ8yQNn3F3fSqJqF",
  "key25": "5RitEgj1GjpRK9bFT38pid7UcCe4XawuZGCRuCo1SYrPeqTrMRmZusshT6jzNR9MQfUY5XXRQ2GNVNj1cZUWU9zf",
  "key26": "5iXrJ89bYLKbEVjy8Q88iPQQiGF2cwG7xRmcixiQiKwqj9kujMY8duMRSXehgDDHDrpSK5kK9XKjQFFMUuEdMdZh",
  "key27": "4269nEv2u5ZKj9jQXa42TKoZQQA4thqETxGhPb1v4ndd42qBxUBTX7K8xw6Bf1s4v8yinFpkdhF3SAAbkZLECJKi"
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
