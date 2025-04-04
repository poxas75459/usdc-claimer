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
    "rztcNuHX9WjCrVSxbuBxDamGnpPLFUSsTfjYDPYvZm9G9MpKsQPBU3sy5mdWDBNouaBWgJcaLWCMdVk7VkrM1BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Xw9W1Cpqpj88Akh8uueMy9h6ZWapBCqLQfrqesEsWwifwqTdALXq4Rci1sQrr3QBg8j8wZwbsZfJDbXNXikj3D",
  "key1": "5F9ZV6yaWSe9QR3eHk8RvGuvmEEQkfPWz5VGabB9wj9bd1MJnqZnzHU5Z8sEXugWg96hcEcrS74bW2R8JBZ4WNbz",
  "key2": "uu4gv1doVzYJwJLEtueYH7qwmN7zdHo3kH746N2DaeffL63v1NWfNDHnEeSfd8TBp1U1BdDA1n1iWdrzfbtQrZc",
  "key3": "32HTcBuGS19FyXtx9maDkrSB3pJmNz1ByDJNckbR1suZwyfMStC1nstUYPmFU3DX1gZBWTErpUc6Q43g6bSuDc3o",
  "key4": "2gKgwvp7bwq7dtWQq61PZcg4CJtFPzK73A3VmF1ys3ZS8icQA9KGdi98CHk2tefbPcCWDSf9CGyfeMheqWXbLrgY",
  "key5": "qiaDU24EohGj2knUnyeoJPHRuG6ecZxfnRPXDn8zx11HmarqdWwqZKVZQ4TXdxbrPjt2Gi8F5Wk9ArAyLu3Jw4Q",
  "key6": "YsAdo3dpps9ySHTtLh4iXYxMBdXjuU1eJ5Lz3yzc7Wpf3KdsfesbajToTqcxg6XPWgZpKpynT5UmHPmNh5eN83J",
  "key7": "37LB9DkvWDhBm4xtcuyk4Ue6ZnHBGHbUM22gjJqPG1d9eGSekdETxWehRMHVd6tcghKZ6X2JZgQvP23rcyHjGFFz",
  "key8": "4WmeFqJ5MdQzahKkJTksUqxkTas5NtNGfqyCo84XCFDebTDTSPjJUadp3zm127VhAGhnYY1pjHk9wJSiFYrxLWdX",
  "key9": "3d16MzpVRdcZXwfXw2QxrwsEkz4tCrFLtG5jqe9nGzPaQABp3xxqHKyyn1VctKTZFgHJZuTM9jPupabjZkSqYsNo",
  "key10": "6MTSZVmexPHphsm9K4gkveuGhXkDMkFL3ouT476W16mhXuSd9ekn84AuGzcCW6pjpRiHNLRuCSgTnbbyYZhR33n",
  "key11": "SMLf9YxqsizVscVzhhD6eEHKdL1ra7vuMgLmAX7RHzC5KbwUQ9oAJvUYKLwgs69azuEsWD5rd9V8NRRK7kSffha",
  "key12": "yG5eGi5PaQ6EiRVwR8S6Pi5rv9fdbiRxk89MFNMYbvnE9hydW3GxMh266CbZhL5YYQLHfWC8WRVKdkLjifPxyRo",
  "key13": "5ggxa2jNMfxyq7zYwf2RMiGGJwLxwxGmuQvWtmC86s7EKNBgbQaZskUFaRqRHD7VPQwBXpYxftE1MkNrPj9BQCwo",
  "key14": "3Q7XPQtQB2JSZ8wJrtUL4W4AvCu5GyAVMAvaJ8FWVMtVJMc9t6wSkQfLMkMsPk6sUg7dQA8wrfpShTryNy86yA9v",
  "key15": "4hemhWsczoqqw3e7bU8N1DM69czmuwbBXWPafnWGQ97UCcGanjKc1jCn7oJGX2qx8DeZcFaWd2Usy7KipKqyr32A",
  "key16": "3dk3uFbjP3V72MenBqL4F4DWKivzNbsLSAuG4aXpu9WPajzPoyrBCWDexGRhWS58rTnQGiwXSPbNdrZ57d36ceYi",
  "key17": "2G8jt4MQiGGRmZPwwtxv4oqXUSbd2mBkR9DmACjTL9MCdLLC4nqEQ6DyB1j6Wgbovkybgj7dcsHtKcHp5cbDfmHU",
  "key18": "4tRZWb64z3P24sSjC8hZGK7kG5ZdMxwrPnBsxJyMZxNChZTzEDWoQ4BBXchuoe3wMUXLy3KusV3zJzYnrSTX5SNR",
  "key19": "Br2fnwBY2xSwg8eN6QVvvUsTj3yMK4TZEmnPiKmcqYaib9iAGdC2pRJsEPFsMDZA7f73YCK8FYthE5aSN7NcQDT",
  "key20": "2WLRP1StEHS474kGMzmMMbv39kaiBpAbSsqWcSMnc9TukWhVMzMm64A259AZhyGWKydMazQDUuVns7YPgKGoiLSm",
  "key21": "47oggax1rmofdPbecJrrVoz6vXDwBaFoNrZ7RBfuB1BPGzN32NAFMwYpoYxVCgHnTBwkq6sAC4aLYAWe37UXbQP6",
  "key22": "5F4pqo9RcFWF844JgH8uNYdt363Rmey2xZeptDKikhYduaabjHCnvh4WHWSyZ2WjvJ7b2RCDQWeWuLWZk7ZpBHdj",
  "key23": "zCXWQbix8QZjrVB4psNKGzD8tRvDNxYo6qqcLRusjrpKXsQ4YyzJAENYpdZaCv5JPDGh5m6SGqiA4assPX8Jn2S",
  "key24": "37ExahfauyU7Y88SAhTy3ZauAbg3TYKJRdZtEWm9Ri5km23qEQm8naUdKfFGbPfAYbRw64A19ELdWdHB6mjPeBii",
  "key25": "ZEGr5pTLPZBR1zZkuNBLmPJsJ3ueXCk2k8oZn9TNpVzZZhSmABuQMBxifmMiwtekadqcYbNJzCmst3oeCWnWq1u",
  "key26": "2wBnHXCdYy58fCyoLdafrL5nBkrWe5fVKFLAjQxqkafHrYcFjFxSwVPasQxfYxn8pL4qbFhMxgHAxuMQFGThjrag",
  "key27": "hW71K9mUDQ8MqBeAjugmp1WtraP5gpeyTnSK327W8Nz2RxhL8z8GnwrRbrDhJxF7fwfusxnSy2pamWdR5NjMQwS",
  "key28": "4bBsvntDirmkBqdaJs5tMM4Dr1sTXymYTUTSy1HcqL3evRy6VmBo3QgeaytTY6ErAVCG23k7dvfENN1ZVGJYnPH1",
  "key29": "2fxwosdBGPnFWLx6cknpcx7eVMo5dLuBuU6NZEcNSPbggbppcSjLr9etBAVGrCmiQbKT5R4tULDiXcGtYSR5RgQj",
  "key30": "5ELDQqnmZ2KmgB5w5LTLezfUu4hNk6DNkQBhttvfgEcygr3zMFFiS5NCATRzsCSDW4EaT6FKaGhPxrtEtCLmML8n",
  "key31": "3Z4NYgLDaVgJJpwzC9SK4iuH6zieWB81PojAsfRjfTMjMeR9XQDDwJvqvY9hqBv4yDZdQZ4G7EU6uNZEKHimeLJf",
  "key32": "3GN86TbkyK6FMFQANfkPzEk3nnGiJ13GRvXhRzvLaKD66J2edcQGZjBERRcLaQLLzF6MKoJoKLKDyAhiyTCMjorK",
  "key33": "3oVJBPBkfSwgk6ZpGrgx7co6no8bDxCpmHmx1vtCHHugwPhj5vqtXEzkJAvL4RneKffHoctB6bqchPuxqk7xmt49",
  "key34": "4yxGR9iscH1zm9NB52wYKUpWAQXitb6wSkVtzoMguusJKSasou2sahcfhAQQm9ZpEPAFC7sEuYmqchUHhbkvcYUW",
  "key35": "tS99QFrEy55RCDoKgExYAYkdP5J4vVyQSeaxsS5yDxS1yZMMx5wtdvwgeF1ugAFoS1SU9aM8sx2nEgyobHe2dgy",
  "key36": "5YgWrUaLd6kCHBoFY24ZEDNSbvxQzR7kdwad9Do987HGeNqfxg2crv8ue11HJKQgpueVbpTXCPcywapZ2UrEvGjF",
  "key37": "4B96tvmMEgJAXVUhqeh5UVqKhshHRKWBE6qwH2h8NS3XdtwmPzqQ4Yd69i5JBnjfx5UB15wdQfBgZSufB9nNjSi5",
  "key38": "5RtVb4EhR1doeqDS58vLFrFEnGJwgwdzq8ddHiLdxwP2TJDWw6y9c9ScKDHbc53CPirJNNUnF5LfgR2jjk2hTxLC",
  "key39": "5gCDfx7mraxRCXonzSSR3xYZcuerft5FTH8LEkpGyjTmHzFMhHVBMkmAhAFqX5SxGHfCVDCSRGfiZTi3Jx4NUD9T",
  "key40": "5SpEbCvqafrTpsEtzzhfW3xfVUz8yYpNJcDxckbaDRN6v1J9jWGCAEgDoH54xh4L963ed7c7JuaySBD9NeETvMac",
  "key41": "2J46qfvkxtt1RtGPiY2w8s48GQt2UzVqw3Uwawr61wdSCyKG1MHQEmCfDrAwcFsR3N6b7xwT1v7WLXmDYPhH1Aga"
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
