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
    "5GxU6u9cpasqmUVNJvviGZBj71G5diE9AVkNXkdA7djZpWcZ6JvFpANf4ZnResSPqpHcJqSyJn4bWnqRcSp41UxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCAKH4qCCXivpAtBRXhzXms7yimdhjR5yNDhSqVxaBfNqz6JyCiDjqdCvEnLtQuBjSbDPuHvAnf243FMkffoxbW",
  "key1": "45PwyLJcZgADPz4AzQktXwg6NSp5SQZc56aHQwNHcAV6Mue3K8EbJMTTb5den66npuFWQvXJyZWFwh5QUWi4Zqjz",
  "key2": "4wY9oku9cnEoSS7Wuzm8kLisGERU1rx7fdSynSwpYMKen9VUnkj2nLJtkcYhQAr1C2VCDTRSch1LSsDymvQeFZwm",
  "key3": "22Rk7MYZaWAPEJzF5rQtXVB7iWYah8GPsYZDaArecGh7pHdAXX3FuVqGUTzfsAaXNYJgzUPEygvb4E9ReVpHAQDz",
  "key4": "54AnxzURMz68UW8TnVsLWVSX6ptqZK1y8DtvLrFCB9gcZB3cbUaNLZ2ECGA8wgVeBYfzVxjS31f3sVkoQZoqVax2",
  "key5": "3pss2zhiDg544Ubku9Kuf52vgPpigDFbDfjNMd73uczkX2WUgoB67r5NbPKqgWCWCuPxJnnZX884HNvD7PnSbQNn",
  "key6": "4A7qz588YcjAN9JFVmhGeM3F6cspxrBP2hqHhbudZqe7adAV7he7Ykqivjx6zPi8gGJp3jrZLwXwgXkAGoaob9vd",
  "key7": "39h4uRgBbEP6bTaRf2rUV2dq9JVWNwRKMAYAjmeTCAwKxSwnqrM46DnueaQZaYmNoVmKwid8yw4co8mo7XbARWS6",
  "key8": "4rnyRKBycSkhHtsigkcopoPqp3xAyAEjk8XGUa9tf2U6T843nACzYGqNKir48r7Ybm88K8Wq19xaEotPhWsqPK2r",
  "key9": "4bqJNuWhxpMif2ZLhJKWr5po8Kx2xbHxmQsDyP7SL5HDRhD5W18HQqEQK67EVWf3Md1AZTKLzXb6BKUftpQwbrvQ",
  "key10": "3JqFa5JvyuMgzkcAX3vYCHthuTrQ3kKYvxVNUz8hPEVCSArYpTHtRh1hAnLUmCmrUUfANt4NWioUDs4eGi5q9jBy",
  "key11": "4bQ5kYg9U4TFQyRxhHUFPJhKpDDFiSjB12gBAD9e6aegea9mz5dX5av9tRARtsV3JqWDimyk5GfPP2Hgr97DJrxs",
  "key12": "3SveZtgdHbcJ98RuF64t9QNXVP9epRKpuhAr1UG4ze58oXLike8NtWJshG8js43oNYn5BUG3USy9v4SDTwuKpyd1",
  "key13": "byPEBzbtaxSKDiEYmr59cjXfG4pFyHwJ8HaTZNFpvoGrZucumQ78G8DrsapFu3tm316YnH9rU7g7AomiNWrtnxU",
  "key14": "2oR5xdsicdB7tdRExaKnbCMEtch6Vm4ZwTZ5Z3soLhd436oZfuyCt9gBP8BwH81vq4KZgZJPqVVLjpknp5rocDnE",
  "key15": "2rzy4UMxHQqDBXRnKJ2wVQeWvMAjBgWFhFQ6LB81ZQVZRvY3ScGZ1rvVLWfPjCNGCJPQM4XGi8QRym1fmuW3sRMH",
  "key16": "5LVN2uzFUb4oWJXw39Q9GoqT1xCXB7hbJKPZqUByjHQRWWCzX5wrQdBCyubdom2NgDQ9mhvpLpFWX7GuhXquQ6XF",
  "key17": "PYFA66cWYbZkUQVmVQNiTeCVWA4sSSZi8fbRgyYY3bqWiXwPo7UFYmdamNuhSuQCNe2QLZzpwmiDvjkeki3AuNz",
  "key18": "4CZ6rAq9sTiW3RNF7ngW96RpqhoN2BZxixyE6xFFxDzZPyUMzj2a6wECzyRAC9L3hakMFSSRoza9xUjjV1mJrG8e",
  "key19": "3xZ6ZqMCWymhxiCx3x8cyN21QKMqzYoj6tEczoMNSDfizFDBEbAtJYsNRvBFe41NqPyVbc1WWv1hSWufDZjm5B48",
  "key20": "3ewQ5nycvm43bsCbKL7wtVkeNKsdFVRni4Ljr1iheYXuAn8wYHKeiAwBNiNaJPoDZrGVakLKwDiJxbKnvUUGWtua",
  "key21": "23TAsUqT9mhAPNsp2xpPg6vZUB67h46nqMwKThyiVdugqS6DL378RxsoLcoazduBERU1xZoootATguY5Cqzdjbip",
  "key22": "5W5KsVvMy4coY1XeSNJgkMR31SXqyAakmv4Xxe3CNDBbC3Cafn4pVd9n8GzCmUpTMEyqE2VPEmXa1a3LcfNeC8wd",
  "key23": "3NjT4iNSaWSJkdiNDMsxRTqKwqpdzsyeBbQ9gn4YZpJoQfGEbsMvbLBQBLnccKQgNVJYCrstb9XEJtmRFnHjmASG",
  "key24": "3RVzxGTR491YHy3bVk1Yd9NdxXK7RJGtT3jHYtafnUkEW9jknmnfqNp1CMHM2Ho8sEsPnQGiNt2iAW3veXyrRZh2",
  "key25": "mj3jNkKbviLxQPGvd36BweX1j73QBRGKDvSSH7ecq4A8m3kwxWnXa24r4aNXmpARgQjTQWwkunivy1VFtCPSe6Y",
  "key26": "3wFhmcWHHHecc8jDxMdqtWMM1iwnCGpjMYTNG4v1T1py1JEtKzPuLKnzqMVW7KSLPEkn1rAu4qHQLCbakzHZSmjo",
  "key27": "kdzLt6Rqm6aEQe8DGDZ7Pnq6hETgc1NzqW4EHLqiogKt4qwoKaUDBsxgMNHbg7uxjDymB9ydWioYjgqhBsQW4LM",
  "key28": "5BRZzeHrpTy7zGKX3KYP4Cu7kzrZRPQY2jHdCc3npChpybkNtZdzLFuadAP2ErcKrLuJ9Nq81FpTHLkwYgBusHvt",
  "key29": "2Dth16TtsifiaTUuCwUoWFo2Ve3vrhUDfm4fpQxMYJd3uNCn2RA6mLTTVPXDLhrAAkwoYPCpsow5V9bL2ZdNjnrN",
  "key30": "5FAxWvjxP1ypv2GxTXaKcxQEMQwhwtdXjCV98wmytNzjZWgw4qXqZnBu5DhUwUcCiNHr5KQ5wXjYUbzqU2o9AE7W",
  "key31": "3PQ1FFLcLyLgwutDHXYgXWVRw62QbjLFNY1tvKBqXdarDehuS3JAdCi3ETHAtvB2cGVXAS4NK6UYBwGdSrWMrayy",
  "key32": "4z5jEA5U84Zo8gyUK1NpBPWuWFMZ7i2pBNs8dQTwjvANxphA3fYKPjuLRXQ7tiziBi4AXtX6ejNcFy6Xm4GEUUmn",
  "key33": "2KogRfwQZbAm95trdt3Na7SCtF5G8ENytpsyZbQc2qszPte9okwXgRkQQjqa3WPQqvEFddzRXSFhnC52FCKLFS12",
  "key34": "4xAEBEtMPL2DNb4sUwhZghBi8BP8UqJGAqek8QqSxBSsTDkco4qbyc4LHzfoDnrfo85nbGeNAMpJn1nCwpedpHMc",
  "key35": "5tVTUtZDMQ9KkMhTCBLKbp9QkVp8GiRrbsHEEfTqJWnf3Su29fXpmsh73rL63me9pQXtSkv24yxFVr9osUgY1VTn",
  "key36": "4pTPfgr5AQqQ3issEK9hK4VvMY66yKaxYDSXWfPFfnrUPsPRACGsr2suWCC26UbkQKYvNdHbamES1MKTujsZArrU",
  "key37": "2PSzQZvGquRUhfjmHwSwaaoiMTu6eSbfB5kbcpTXo7RPgT3H1Ve7mDhRaSrCwYY9GDjBePjt28nNk6hYRJtzc5H8",
  "key38": "2CXZW4u7kda3epxuEA2tBVF1fgSbXeikn93DjG7LURuQjYFScB6Gok8xjBBkx2y7DCiYD7Tf1yKi4b1yQrjQqkWq",
  "key39": "4rS1GyYTK8THYbRvuyNgYvKESNfSzz4qpm7RY2jR65GBDtrX8ZsPS2mURW9PSftKNkUSc13ZqtvjLPV2ngxj7cgb",
  "key40": "64ZSAJXwBaCt1ZonwPExy8SdStqbNTDZoRrxz1WrBSbk1iognWLTFz8NsAbqCGmK5efbhpGuWCiG23YzJ4BFzkPe",
  "key41": "6Uin8uZXXDbMcRAFbEjswAbinTJnrhqEjEyvoeyrF4vzFfjVwXuqyfbjWojY5UboiQS3fpwgHE6SEARkZV9PEZn",
  "key42": "4FKmb4USKsudeRCazzvik8BVaB3YQhx6vWqBfcAxqFJFbWCeFKoq45f1qZ7k1jXpXH1DjpX7oPSZTBvvY5PdB1NX",
  "key43": "4QdYgvJEYfSvTW83RSMBFVLa39ciZiDkAmjx4eE3AMn6XR8EDyv9ZAPZkS7AyRDWyrnbtLdCsFH7eKFgKDCepWnj"
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
