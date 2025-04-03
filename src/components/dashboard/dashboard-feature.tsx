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
    "3zoUWKYAy93erCMEoCw4GR1zYgtDYchbvkqFxWhgVsMyNBdcaxe8R4e9usEcXe9ZoVtkxXWM6e8JLf4VAJs7ThVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "moFy29yAZC421LpNzsn2oUS1vAvA5iCjmah8EcxNMd3g6uAJ8hA6iqbwDyW1F1UKH9UNNmhFJKZvCrjgxfaUEL8",
  "key1": "4QfLNqWuE89fdWRABNavFVLf26xs9WMxjcN9LFYLKLtNa7vyVCRcFdhbu5hKEFV2TuFHb2nmXBwA5C3xq3ZbcZd",
  "key2": "3fbfvkdgB8WiWdShS77Nzyr7beE1oj9wuqBELBAfqYcVoG44Q9428qJGmUsPEDiwSYDoZ1zxufgHQDfJHFngzQhS",
  "key3": "21kjUmpZRi498uDv8tzJrJ9TsgzGu4anagqr7xY21bDwYCo2dL7xjoKB6BkLzuw4agM54WPr3jUfmWHbUi9xfChX",
  "key4": "3BxKqpaMdxU4eo124Y6NBv4sqxBQUzLCRdQ7MJv1Ctgr1HfFzBmPN6Sm2rnBSTT68tC9u4qahXt6oRptPPDF2uZs",
  "key5": "3YtA8x62LPVu6wGXMTCCYhvDZq5LaTHZ3mW8R5XpLToE2gXMxmxHof1wDLGaCbHwRyfyX4SMcDpWCEjLxKNKnuiP",
  "key6": "2AwZHDB3kjUTY6BMtAVmRgN5DQt9axA3n8ZJoeyx2BvkAyMBYwbHPMbezH6bb6p5dQVbX4xAqky23CFCL2ksQoAq",
  "key7": "4Ncn8tXvda3SBUojwe6JBAs5mm4vx7WJp9VfwRB2cXiaViKPCqXhDR7WXSmd6smFJs4fKJwkax81Ktf9dNfBj8to",
  "key8": "67W7ApmJRgQdhAaWJ4vNSTXz8G42yEQGNWJMCjBbXuyWt2DaZqxsgY6mGMs78XnQpDgfRH21uavYZfNPHkz9V9C2",
  "key9": "4Cf37PQYg89zPY5qjRR5srHStH2oVXJFinh4t6eshkqAW6XmQnCp5RWpd73aVsjLdMfrstqve65RjsAYAiZaAsiQ",
  "key10": "5YAGS69DYUgfPhWFAh5pb2PtB8LDXJQKmd5VStDqYkooRDRQLcvcCWNUsTwbHMnUGCXFppzAf82Qh6PJXuKyVXiH",
  "key11": "3ZM4tCRKvTGxgR5KeQdfRHJtxorpwPQsUbEv5ZbEba1NQtyWQxWd8ACHqJ4PiGm6Fa3dkJqhuaNrf4RgepiK4UED",
  "key12": "5EztrHyymCmGQq9H2rAYTW5otntis9XGJWdHxJsEifL2LeEDz4t6F9pyCkNPE95YLEoRwwowL47Hmv52R8H2KrTQ",
  "key13": "2LKWvrtQvryNdtuDuxCSuTc4MBhRDttrhtGtQ8DUVzKsBUUXKoSFaw33TFP32U5CctE2HzANAFpfZU88bPdgFGHv",
  "key14": "WvKsZSw29pbmR42RJbvNMeGetJigJV2BDibmETM9BbBCh7yVMpaZiG2ehn9CLnfot3HuFLP9cftRZZYLLSjxmVA",
  "key15": "3c4ZJ9AwZ5b94rGFNKZn1xNcYpxiucS67FcCwgggGrWvSWDmbnwWUgLGWzY5nHgTVJ3tkgQJHqn5uBojWp9Y6QAK",
  "key16": "21bhTztNapnF6RgccLi4c3T9toABrtDWBrcPvhgddiUfWjnXuz8mWFVb2K3kybdTLSBe2n5Xn5pwsVQgprMbn1eQ",
  "key17": "fSw8YX5WTJieSQmBgWfdTwFJ9kRxquZhA9kggLNDpceYfjVgeq9PDfpx3oeK7xVQN9stZ8DEh4fWp7jwpzvwmEE",
  "key18": "zQLBMqN85YrZ7swxXAqrWQRktLXrDqnNbSBh9jZSgnPaiJ14PXKRLNGHhTnFBRvGC5Dtbckkb9i8kNswKn4LA17",
  "key19": "JnMZcka6KcHGUwTq5KEcsG5WuCVxrqU5XDETWBLjrCyDpm38G6y3VmmGKTb7J1y5NBdZ2wUZ6wNm5ViKZbqBgpf",
  "key20": "nHPi7gt5RHrfuvDVf9bgpdsYgWD6pYxRkG8EZw9YDCetWDqf2AYcX8a1MKL1UHHtpLg52SsE4Yqno4BrwaihES1",
  "key21": "268v5KRb6SGXnnsg8uVZpVXhsotbEfvxykzXM5cwMsRSSeXDzXq1x6h9WbHpVf9qotEAs6VZfgh7QL1zZM9f8WeS",
  "key22": "D5ty3HY8pqfBZN8RotG7sYxMW5gMugsgjRK2PrhZCJve16ShyUFeVuZkeoo1LZzjt6fubBof4zzYWzBLT6uuybU",
  "key23": "4HNis5gJJje1PRHdrprt6uWZ9f3P4Enbn1yRKpfjUDniZArXWoBt9GXgbPgK8iVT2LKXeKae2QzJ4tWSrxbeWuC3",
  "key24": "2rmj4ZjqvkAx8sQAHuqAyxmTYKhtWfvGAywuhnmCvjX1ztg7R5pWgWs5Rh9HdAp7qFauaLqqV16Gkmooh4iWfTnJ",
  "key25": "5XchDG4345wL37WatQwSMgNXLd87hfgTK6AEJ9uCXEw5mgqVRMN8j9uK4WUacVVbVu6nBZjnmhWJJvKJfjmdfxMP",
  "key26": "kixseKeyj8LSf366g31YTjGzu8XnLsbHomSemoZtggHastJg1j9i4Z8GahFN6r7xmrqjEt1hbvHKdypkdqYGqvh",
  "key27": "GtorFkZ2DGJWbgRrnSrFPdc6nR78Kb4mCCCWE1iHropotiQWhSC5Qxe68KwMvWw2Vax33BGkwcKwNosd7aADNTP",
  "key28": "2aBkWdFCkFJZ4WHP11YPm8jwMduWWuEmwTcmEwyzCpmoPtXdBDFSV8ziEjjgLSPpnCoJ6AcpqLBzbAN69ucTAB6P",
  "key29": "3LtGMpJpo9yhBygiDD5cRFDSU8dvGrEYR7mDYgtQJdbc8PD9bhxq2jfwvRMQ8FN1K5eZVyg1Cf9rKGkzAEB1hMaH",
  "key30": "4BLSAEYodm3gJxnieJWacvPwUUuhKQF7EVfFeutBHR71ZNHxiSR2n8aPZ23n5o6xhaswzfh9PNNLA17rF3x4RthZ",
  "key31": "4rRxbfG91MBfm2cXUaW9Pdvsm8jbVbHguHyjHg8dp9qvGg8bCha3B6NDnHDgzv3Q5K3mjfe4HPoXDeE8DcfR3Tjf",
  "key32": "42EhsUprYaq6g5ZyGhMtoQ9CqADjNsHbDjeMUuKb6J5bVKedi4i4sGbEPigQYhZ8ceo3WypyfwZts4B759Ncj3rt",
  "key33": "488kaCSyFCDGef6eJgDJXPWhmdaaQDv4R79iEyFybuehtkb29EhG4ts3HJsUZketQxFz1yTLfXjkeAtBMn9ftuH",
  "key34": "2tuVbNRKPmtGhwFo12nswH7XSg3mAaPn55BG8BypyiGRpSYN6UMBz1eCWRfSBsoEAbUhfvYkPnYnSSyeV6QMFF3Y",
  "key35": "49PHHSZNCwtBSzypymGaxU6QTLRzTRkyGhABKZ9zTiqbXGD7CgD7hVfSRpg75XS8efJFVwfhPrADCCRpEudkDfh2",
  "key36": "3UG5JuCyC9AnnJqr2q3b2UmYiuxyH7qhQB3yCnd4E9kGC3N2shw2JZSmAMBj7w54mUtfhqmhnyZFSBYLQBFxfT9S",
  "key37": "Jh3NVHecmtqdpxCYZdLXABX6wG4ZSByzrQ5BuwCWBmc9mieyH8Mq7DUJq1zTtABMDEoTYEXVsrSkzzjzfCZo8J2",
  "key38": "4ymXg3ZeSMYqXf5WSDcY9XFMvbS5fqsu7MmJY1UfJL3bMqAw8gpp3vJw1Wkn25AvcQzQzXaroWLR7Jwkgod7LpSe",
  "key39": "7gkyj2asEHaLfcr8LCmaBkNLwDWfimR6e14XAGEtMEZkNZq2h84LEAFgdp6Q2Z6iAoNoEEUELZ1Kw1r4rZzULUQ",
  "key40": "5rHHPuUsWnj4xjwN9sxfjTHwpVTiWfK4EiZbdT8McG6E7apjkgZeFQ4Y7mvDxjsz3g1vQWN42HVQT3SRMof76zRC",
  "key41": "5v32DFnamLSZgBrsu2sspGzv7ZdMUwn7PMtMkjepxT7HhGSLEd8HwqRytvnoCXsE1vqM5D8WpVbMP78dAe9ceycp",
  "key42": "5TkbcXUZfAhwNjyqASLzyEf6GKpUwrmM4LTpL2GtoBbJWtBLEC9ftbS9W6Mep76NKzQh81THVaqb5QBWuRWADkGk",
  "key43": "5t6jJS3wrg1FjwoJhJ6Q6EmnkuZjJscacPvzJy7xaX18yjh1jC9Ftu9pTCRwoCMAgUzp9JCiCDFFZo4MkNcjyJzX",
  "key44": "63fDnYS4M2fX5x2ikwz27hbAdsAotQQfszH5wFeWF85mi71D2YgaQ2dXtVKv2NDqYFN72u2WBPS2btgZApG6eBZX",
  "key45": "nBYiDEyyqVPyuXHKJF7CkZDeksrVjyKWr8G35YdivW4UtZCUUCPG38zS4hvkPsTjQXmfB8MTRi5zwC2pN4Tei49",
  "key46": "648sCGRERrro96ss1fjT7Ed1cyNziscgpLQq7GfBQ15sXrViwENAMArQLmSSyWpCEogKc9swXCSU4U5UQSyGZFNt",
  "key47": "3Xg8vpauzLrjJ5n1GB4xfVqSaRjKJc55Yj1LmVjcTf6bc1UZdmsMsTn17YkmStMpNrv29LCUz7P1BmwRfgakM2mc",
  "key48": "66X1JfuFRNaDVt4t9A6NxYN6qvSncnrt8Xncewvry5DRanmJbionzf7GNPiBrtq1f7rRzq5sgHrQrtBfavg9ei3t",
  "key49": "4bMdE2Xj2rXZWshAHZaQeSZJaEXeFFgkDmBdmeN8niAYkqUiiZxZTfEKkGyA8baJitsooP4g4aNuaQ4tFDCJoVYP"
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
