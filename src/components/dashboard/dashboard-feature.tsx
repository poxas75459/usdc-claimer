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
    "5n7juzaovnzn6uT5EMuxtZinKoBNX3pvDy6rH22W42T4X9mfGXmmZEQcaT5tJ7ZUAWuVJ6jyRCFQYnp8AaWVMwp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCrfXshTw1moNEqxL2BgRcvWL5vMDDJjHZGPxKT2AUREBMad8mn78Kh2BTCyA8KGjw8c1LNwmZgZNsyuETXDjZK",
  "key1": "5LuKEk6PBLY5Deu791F2heVUDfUMvS672raJsAMEDso87gfCtrWuMK2RUkETSYj4GkaFryQQbzWngpKwRTdu2QCH",
  "key2": "41AvTHAvywWGMtUCMeC4rw8FXfLDTkizuFPXdLRX6isTK26XPeYLTBPZb13LU9ZPa4k7LV5WSG3dtHAaY2yo7tmb",
  "key3": "2Y5tLziuxg3qFWRA7yExHQf3AsnxfevRovvraTwuFLSakdxE933TsMUPtgktiFtKAUSxrFz7hsePR45k4BFQdfVc",
  "key4": "5N36JyEUndBd2L4c4f1ULaesdMzFyJsB25F5T5qSrSAcuYymmnH8ZFs7QpngnB4oKWCDyy4cxRSYkws3nCJBwx9U",
  "key5": "5wzua69UxUHYcY45uURKcgmgHzZ4wavV1SJei5xuEKhmigs6BBxK7WNDomV7T5or7GaHYDqKZDHeKr2v7zJh2HJP",
  "key6": "3T1Ux3qh57baQdQH9h6cYjP11WZso8kaMo3hZXGTaPdjz7soFSetLWsAm3hVEPvpCVdzVG4wRuv4428adiTdepiR",
  "key7": "4dGGhwn7WDPJaAtSAuyBp9Q7hgmJK1y4BZgV7z97uzNmVU7P8UZp5kiAxpDHGeWbkFSh5KBFZrL2kc9BfjiiMbZA",
  "key8": "51WcPS9hbusModnh39rVWG9GyUhWQRZVaEvQbfxt2PiyVBDRUS4hrQHH6a93Y34cuYv9wDip1kmCtNWkszfAnpMe",
  "key9": "54XXgcrDmmLAxKfwze95Zpx6ZA8UkPHgjkw1XUpsyrdmCP1BPDHS638EQ29MtSHMXRxiYWC7Y1NrknZ6hu8Z3Na5",
  "key10": "3xm6NyurD4fMRgmPt61FT4bnwZa5ttiEQjDptqyEdpzhx9eCMiyK7UkNxp37PUszSpRYdENLwRwpQykafPsLR49E",
  "key11": "qttKsyZXgGwDGnshGqvfBqC3auMmj43RmFYXUzgMNEDYXFAKw4yqzwvufxReWAgfYsRYkKa3kpCpxfDNY2fbd3Y",
  "key12": "4YhE5xJ8Jrju3nREWEaUP9ytUZpJdwhAw7862NJs1MT9pAkysMJQ5D12pQps8ua1zCszqjLFN4buiRq8CVHvUrje",
  "key13": "5oCA7ocZEQ2QjVK2hizZfXmdKa2KP8Aqmu1wFWjN1WYKUHZ3Uw2oHPdyu5jriM7Tr8yQMbzSrVRwkGmXf6cXoCS4",
  "key14": "2ZsXP47PdBSZssFEbcUv2GoAo9VhbRrcrxFgu5JQu8quEaUxt51r1bF8zXvppiyFsxXmWUSBUXrz8fBup7MvE5sf",
  "key15": "4rYwEBqmd3APLx9TiyhzXMz9dTpjoqu7GXufqP7ZRvhwQK3gsxfuMX5e6wzKA5WoR7WVXjDyqogWmi5aUW3wacU8",
  "key16": "3QHc12TbbZn58Z4mJzE4ekAFyKsCCeNv24PbgnReH7NrnDZqPTD6WXrA3NA7FnzKSte28pg2DYDUCGaonm6ZyCV4",
  "key17": "4RqPiS3RmR7GXmnNRg9URAh5pdnd9bw3KBStwzNTSVFh6sUd3979HwhQRhSTXSUwSTQB6qxjffsepiVrj5nGjWwn",
  "key18": "4vmCQQX5kNKrCyjuEhpKt8fUFuVUJk37Paw2bHaqezVcTAAGiFD9jvqEiVe1mJusAKcew1FxdiYfSMGmVJbDWKw5",
  "key19": "46vgFJqnHsMJ5tsrnh9DVNztTjSJWiYTwgbCNdrvF9wVwNt8mKgjpScWWjum5cypsBB8scnKya61Z1xeYfXYJ6Pc",
  "key20": "DXvCDLommwXNvp7KxWrmwJ99W7nd8M6E8mPLtqpePjEgsbM5t4ubSrrNHapyS3Zg1R3EwNoVV7m9nF1YBnRFvos",
  "key21": "22Z5mhhsPpABMvQpy7aGeGpTaj3DnbyeKXra3r9TLRZDm4DzKMT7bh8eMyYTxGxmDMTDzxHuqhhdcy2gHg1o1RnL",
  "key22": "2u9pMMZiASgTnYvSHsFMEiE2zgcbMSLw4h4LDZTivuBEXeACMEgdQijDmy1zTT44ZrebStXfMwqorFKnoAxFXcks",
  "key23": "4C1krdTeN1erDNYXfgAEK1zs78sFG9kf4KbTUP6Bfr56vKgRMQ6Zk1k1DSZqkJVT3AQALqiEU8cRLmQVUY9kzhAy",
  "key24": "3DirmcW3M8EH2P4e7yVNRaSmVBUsB7MQtnDxf1kaQaYD3xQDz5E8kFKdzodGNRa3DaMDMTSDvGtsbKwVLGE9ud8f",
  "key25": "5BGDqkjjsH6fS8TpzppJCrqjVBp15PJWNTRRfdBqWRqpuVkBjf6ahASPe4BvkhY7c56ihbR7ZREq7JzbAajBsNmp",
  "key26": "Qz4URnstAKGE3qfZ1iJ3pxkENfV29E6YMMg8SwiCtxUUbYCFNY7RFjvdXvXnABGjbib6QQjCcXVwjJsMVvCryEy",
  "key27": "4n58QcxTskwep59C9mZmx5nZc4mQj9MuWKG5rMtRiCWYSv6ZMTJmj13Sxc95PuETtrdw9gaQd8thwFJzik7eb5Sg",
  "key28": "66fnWjuk6ryZkvMdzfuezhB2rCjTt1Hrh2S1yk36E6CevjBWwsqMPfC8Avh5ufdgZC9UcPYf1QKEMt8xcAixrWLo",
  "key29": "4rSeHAvr4S5ZZpiKkic7FAyjYjMVJ6c9YDxWg19aRewa1AErwABbTzFRM2GKYhFFdRM1HoPzpxeYWgxA1XoCQtkH",
  "key30": "5nQkwLYJ8LmjUBBT1Q5U4VNvomK1xhRnezY8PWafL4JMNnb5kge9J7BHTU2bP9pdEtMMHyr1KVmHo2ShMs4CEYyF",
  "key31": "4kycr15BvFyasxqVgVj4gZLiSywA3joXrBFEHZB85mQninNJ6CHyyY46fbQrLAgMptPmLm7PQCRVst2QeoDbtExt",
  "key32": "vuB8YgMnPR9EQ68b3CeYhjnrDQmiUWDxKhYidAFGiaF9Ko68BT3fRbvDVfAZeTBcErzzGXGnmfcQAUQ4HnBGjFp",
  "key33": "2Bc7JnWQncaWBZNj1WUKHA1BeaUiWxwJoDByB46fGYM5x8xFMGp6dyChVjC6aiMyaecXDE715ABk1JcLCvNw93dZ",
  "key34": "2oqyXAGYseAQiS2ns9zwd7YFjEMVvdqcATWRBpMWR8boYbdg6BGT27cJgS4sbDAzeR66jfb2JaPGUjKPPSkyy2ZM"
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
