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
    "wyQ7VCQr6gbtqJAcba9QtMMCWJf39F6wp7yuG5ztWwUF6Y4UY4UYVtR2jdJQh3w1S5xV1axzQwMdaWm24UPDFpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkaQau56ewUPA3ob7MqrZASqqBicSoZVwE9FVZGy28DTFgvZsWPZbTNmMNpUwgJXpCX4hWYShCYM9W6AmSV4qPL",
  "key1": "4SFCdX1JSXJMbTWsEEjL9wPqNNh22T9pJwDyEyH3U5tt9AzpsKLbS3z7LLKBTCGFDwYCP6bin932rPq6Ma6nTU7v",
  "key2": "2vETTNFMP9SdYuihmdumr9x4KZQSmjGwNST7SQfzuTdGK1jNLc4yBgnETnhQbM8osCnigAjPrAffJSBGGSXvVpXt",
  "key3": "51zp9PrVDXwfNBJsFLtgofAkQsdDUhzPkJnk15WfBmUUS1i2Zq9gYsGGTqUKQgiq6gx9grhCKLs61vJvLKTEwJMg",
  "key4": "4UuKjiEKzuSm9k8VjNwa7ugkVai37EHKZnP6rTV5ZSKB1VaSFeNxcmeUW9PuFjzWsW1R4ekFxACwwcAf7AaBovGQ",
  "key5": "2VMm5DQJinJ33LbrTZGsRnWGCrQTyhRZmSyAkkJwnuKLFetQmQaQTSpeZpyztsCVqFLkheELn29ANcmHCPuWCfsv",
  "key6": "2fTSYi8R8cDR1yvzLdxd6PrRXLTfQmNGka5PxaU6PwgwmDWSxx68nJost3Eyzj3VdUhkvjGQRTdZ3Y5iKTb7bZD",
  "key7": "3iMRCyggJ1GtdhEDFVrYsBmsaBpUrVVtyLMVqy4tGRqS3wuN7WZbC4mvi3Qg2zSi8BxJmCxCyaDq1Le7KskqobJP",
  "key8": "ouxuQBxx4YYFJWd2v27of13Vi3RaGHoJATcLpq1L6WPSbEoqJcMuDyLi7LTejTDkTX9fp6JhQpGMyjY6pbXu4x6",
  "key9": "24aWozaVs8TUF4jJ1nc4BD7VZW88c4DQ74jZaZoSatJqEXNEX2mzpjGZkh52Ay3Jifrxdi9Ri1D7A1euibFcRRZh",
  "key10": "44KN9zio7jB6oiuodXdEtTZX4fNoHRGPAz9WYRqkfhaoAkiEPkj6MmuXnQpXmsKjAhJt7zva3pkFM6v1JbJx13Dp",
  "key11": "414vPokoEX8bq932gASZCiLsqYDj2Qt3gD72jn6eGxHR2r81jwmY9egua9BATWeKgj7pFsq4tcMdJm8RFp28Vn3a",
  "key12": "QoZXvnjaQZ953rkbtzwqFP6LTw3dTmmGi8fMyVWYstqjBQP6puqkFeXA6U1GeVw5K9SrrqVrxMPr7kAA9qhh57v",
  "key13": "4fdQFUUJHsyfwKGp8ucY1TPfH8TUpT41kbs3uyLZZdiPNYzWT6pVWLCJ5btVfewy3Rd47rhuEsEsn7NnpDjDXySe",
  "key14": "4FJWqe2MqMsWJZUTBdtzJDEbHSxKU1sXFu44zoNbuhJ8H5bB1jP46C9SaGVmdtj1AXFahZT1eZaNyzAujzGEB7Uh",
  "key15": "3ABM6EkmwgnUnKwViXftQaYd8TVZ9sEkzfk6UoFh17GmJ3exvhDDuCbVx3SUZsbkCx8ggxJAu6SKr9Js8Z4P3pk9",
  "key16": "41puURZD5LbSY1iFZKHgKmmbQ1TEnbyWuFYuC5Buef9Cmw91mfxGBjWzLbiU9g2kGY5Zb1Z6fXq55iqFuzwudZTX",
  "key17": "2ZYSf6GpqXd7cFvpMNyYJeEu7EFPP65ymJBLM6pS87kniGRzN6ksAZpvdhd5USwdLHojcuDDS7Z8VLwyKKaY9fuG",
  "key18": "dquBincRUF8TqM57Gii9dm8ke9V9tW3nnGTJcbqz9Koo8vPcSLEkCWLtsFzRA9QFZ4cVoEiLbLVWhYXbcqUVxuc",
  "key19": "QNd5piXqqbEER3ZfsuFiXkPFx4wFt5MMSTzd5rwzcJnZU3UMTAb8coAEVvUwmBSiDv2MKntK7NJfzrNukFXQ4S8",
  "key20": "5Fdna4zu3FXHYEzmL9rzPkD2sKBtj6RUSrhZaJTrUPLyYo7Fi9icNJ15H9iaZffqmiX6rdYSeAnBPgux354TQB5",
  "key21": "4bSoBQyL4ss7a6zxNuMoNhT9GfVQGXtevnaPttFfcH4aGRikKfiXvMkKmuthwN4HDnGNLU4BFLGUETCEdKZN2iv4",
  "key22": "2gjHduiz6B41UG1guTWpM6GBUZma7R1c7zTJT2QytRMperg9LvwzHVdbtXNQsQUpGqVqnQeTK1S1HiB52GsjEfg7",
  "key23": "4Ek1zT9w5DM3zMAta98Yjio5PwdqFMUBFmf8zwhduaps5Lu7bP7sH9idJGkYmRgi7PtfbYGviUVUqd8gurZk8fmp",
  "key24": "3wpSMiYu8HT98WBgweoqsqwRcPunQTfXzz6t7zRPUewsB47TWgXejj4iZMs2cW3jcCwMxGTHPR5pr7NcptHTw8Nr",
  "key25": "J68PnRRZ8ULCgdG69GW7fJFxwM81EmScs7PbqLbQvLEjQanoH1KyHnGTsJZa58BdJSFfUBZ5QbQcQAmm458jKmB",
  "key26": "5uDDPneHy1pKjmrXzh8DTsRwggZo642tt6kqA3TPtL8hU79Pk76ufwpneDsr7DJTM6Wbm9xMSZNvKotKqxfYtfEU",
  "key27": "4bZzQcKUjjuMYZ9ScDdfWzSD4ruU4iETTp7s2WX4esMDiTnrctWR4EFbNQVnBSMgKyTULw7NyPFouQpVtMbXowE2",
  "key28": "3RQGZ7V7i84PFHx7n9adEsgzNpP6ng6AwW4og5Z27psop26rtU4t5E4WTuBwYZHACH1tCk2VydonxyF2QDuXiK3D",
  "key29": "4p3p6k1VVeg11gwvP29B7CzPkApRPBSM2YLmKyw8Ph2mukPYtcV2tUoAbhL6CWmMRCJiTF8fn2acTx1qGF7LKezF",
  "key30": "5zzYzxf281fpe1v9rCSmrFfF2rs3dQJsyD7EAhwWBhsjeTpe9oT3xL789aRF6KyJmnLCoPut1yPhCVfoyyQ7KeDN",
  "key31": "35rUdEdEUrAWqF7fHbnSjNkDZwZowRxMBDTaK8REYRRTzj3Weg2dEwu9yuXiUw9Dnd3vqY737Hhjq16jr6fwpkAH",
  "key32": "33H8r1NNXHXVZREdBYwifvfWjkYGdvePf4CbchueSAEjrVjgtNGKoyWDiCtrjRTyg3noby7AD2rY4fsWkwuMZTJi",
  "key33": "65823ybPQm53cEKVYpJGn4MqNhwSKDzppCcY85wbhG1tSdGy4oJUB3L8Y8E2Mga7HtcULN2qkdYtqqAgoTG5fEiU"
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
