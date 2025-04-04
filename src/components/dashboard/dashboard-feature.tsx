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
    "4kX4Ho78fYr3ptP5zr4zy16mgpn7dz3Lyu8YChtN2nQnxnENWMGfEPYuv62jyYkYDAXCpR59JcSjXV6Uo3NGBBBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DN7a1ZfhEmFcTViFp3oWJX8Mdhx88HwWxdtrn1qKsMFrzGXC9UdjzrV5ttCLhF5yT1MDtQnUbaF8PSTvwehiiWZ",
  "key1": "63FA8xG2QJDvAkJhDCvpeNbybwwiyUZRmLr2adU2a6jj8N5r3wy8kUaFgpxvrRC2tyrBGcv81rm6prZXw72uVWhk",
  "key2": "4NrJbZEHzXNMUHHCvvzUKt1zNnb2yy6jSZm4kjRCbN1FzUqiVCupbuapWonRwYpSS39BxWxgUNoMDbC5bJMHh6Hw",
  "key3": "4ZAK1yy9Zn6d9zpFdgZxVK2KakC7Dq4t4HKJHx6PWyVCuxpabSDubLa1hdESAuKCMwhQAocCeSTHMf3wBG6RBdNL",
  "key4": "GWKSV58fGwr2nV6BPMW9dShi8xY6dVPk663ScbwPYspJmyoXndbxanJBbM7A22WaUpj93wVKpyPxAQnu9KtFL5b",
  "key5": "28usbRXFSeF2qVYRrmufeHybGwoTYTiun5sLR4zZPnyfJLv2mnPkKk71YVnCSPyeWxFoF4waXEqo7zEvKpG73ncx",
  "key6": "5AEnfg5oC2b24bptJ5V1ZnF11YxRmxjyFAuRkKvAu8vw9H7bpL4Bfa7LVsbwK6zvV4hLeVS1se5Fac8WJGRjN91G",
  "key7": "5gyDqMGCtRiPMUBKQBxeaUMnhdA5DsDDWpqGXysX8kKwJfaGAttPcYLPjmk78zjkzpvHmqCz3kPEFwnukiwqSu1s",
  "key8": "2eBizGjs9cgxcKV1UAKGYCem5rgrmRivEaAnksNhq4pyqLTqzmb3At3o2Z9ixyLwkRriY2eeetH6Sex1mdComJn1",
  "key9": "3X2w5ozk9mZXEGW8RG3ZeuVaQCB6iQGSWBvuXgaLnT3HVWTG31g2yABhRJdEtHvUYqdDFFhCdBwYu4RQUUvrqA5e",
  "key10": "5HREoRVFNFtMFx5ViuzuvXZpw1hiVnE23BG7Ht4Zd9UsAn8VvreygXQxhahCAa2GhkYdf5BKAdA6LCAuhcyJeACi",
  "key11": "1ZQVm1hxdnUHuVtRfLNNvT4RDEmtmVZ7Ps2ptSFqigCvsf5c3YzQnbUjZ1jfGDgksNvS3Vc3LreVrdUxypkuXqb",
  "key12": "3Pzaj3CoFhuGivWhZSovMGBuRhX5KTs5mYDizDn6otUuoxneb8KogNcksZhBmfrMFBAGtpLKjJAFUjho7unJzhPe",
  "key13": "44v8xzEMLCngCY5o4qS3RgrW4rjdpBNwkvnyUcQYNF6krp9bicBk28SNtrAXPk8rU5hoan4xqG4FGAx48fyxjtZL",
  "key14": "eG3hzpWzQpHEFQdYyw2K1vNvkav8F4sTTL8QiQk8wynbityD5naD3gBs2WN4gSmZJpQQqKtA2NqJZLnbLmex1YA",
  "key15": "Y3Xqjx7YtunBBAi4M6yQyQCYGdR9vUWmzgLUdM6reGs7h5KeQnubLb6jRmpTfdFfLLYZBMfRz2j3tL8cACL5Dim",
  "key16": "3FzBBgZXjZFmrXYfF5biJANkwxNa2T6N3YY1SJXZqy3u5RDYUmJk6NrorgsrTDZ85YciKpyA3tm8USTu8a1Xdxn7",
  "key17": "2UQ2fv7QYPfBSHovekySvH1BAYZcSHU7EnpByPpPk6TpqJRwfgkyVBFFKBjHiqcN4Q5peevJY1U4BWgg31eGGcqq",
  "key18": "wYApDTBrk3eop4PkJPbzQZUpaoFdfEefxdzUan3oGTy6XARGKk6usSXUH6jTnrtbhwsoeMSuXoEmq3JbLELTxGk",
  "key19": "kXj4ypZy9SUC48YYQ1gDRoFJ8fyxHYLCfg1wkyNHcBeDLEApvG39nFdnay7DcREFjMRxivRnhwEqpSZnaNoCmpg",
  "key20": "2givvQMH4FHKbqDFxcq9DqQtitSU1xbnqKTM6jfStjdDMPnoTvj1y2ZbX11McuwbZMcZKzqaanDHF23cTmcFtQjH",
  "key21": "ViHutGr8zDXsyZPjDREGR6anBUZR94NLcZvaWXw4TCBQ65UGhrQf3LAWxq3g8qFE1nDQZA8oMP8BZRxPAMWXE15",
  "key22": "MPQu9kMbFGy3WSA85WCdt9qcFtAg91oUzycExRuTgWihMednc7ZYLsEkL6GqugB1BbWg8cMpQtiY2noyMBJDnrw",
  "key23": "2NgCYwdL45WokubPBbKL2XyrJbYFtwisFzABr3CRJET4xNZJTLPX4RTHcBuBH48jQpdWd8xfRKtkLE2pYQ9rzrQP",
  "key24": "4TzbGtLt2fQZ5yUJiCteantnzXZZxP5VWjwDumqmXk4DSQg8AwWUEG8vNrgEVFUSq1iyg9HQMmDY7Kso6uNFYYqU",
  "key25": "2PtDKfBy3CH7McoMNbAiUPdXyY9Q37svFGrj34NfPEhMwHm7Q1m1TkEM7xFc7CTu32662mugfJ9hbWB7L4PEKMov",
  "key26": "4Zeu7jpdr5DxToVFY7T7VwtNgs1sK3a1wtWhUXjbhxHgyQg1wByeepWcx4pwjvnLRKuthAmUNAgScbwGALH8kkmR",
  "key27": "25wKMJRVXLFPnSmhuy1KzUYbYguAHJcur4FKjqgg2z29SoGtF4T45v3fg1H4cGmhQTHWArkCfM9gVgp61xrohhKe",
  "key28": "5CJew7jrg2sYUQ7eritYNTSzMGK3W45htWpUM6Cf8qc9vo1PiXw4EwrXXi4Jaf1LGfGtrHcnYnNzGghUzntPsZxv",
  "key29": "Mha1DUaUQf5PYFCaRa9rfLBK1aUimJz6JsAfNLaNqepgvEvD2i5Egfct4vANiijWcHc5W6xzFhZjBVsQy6Y8TDF",
  "key30": "dw7xJF68JyryTB8iZXNQrUCDowEXsshMe3arJHop9Af2UQPHv2Do3ys1Zi94gwATRTvAegbA9FUqREaZU45rpBp",
  "key31": "3f8JsBh9SpsTTPwVP1NkK9yLfK82iWbBFtvFH4XPN8CTaqRdf7irdCNYZzGTHV4Uout1NJ3S6ZfePPSR1UJn3Yu6",
  "key32": "3nMxYhaZyweS22zsF8h5LP6r82AL9AFA8cFe8FzvAvQnx1EVesidxa5tFkzhT9Qd6mrrWoEW6BGe1uMfEqBHSzSa",
  "key33": "2jSmobCeFBf9EczTH3vvFPGwUzUwCXXCvL1TsDYqhHeBvxxDeXE5gsKUeePeVp6tKJWFhiwmGbjkRwXXVee1oTX7",
  "key34": "Dk1RXKVakLL8fcETpDcxaayFVt13JEZDzK68yuXJzHxhvSaHS5j87USrFZR42dAM4NxELpKfCidPSu6DWDym7TA",
  "key35": "7DczTA4a1kR5wo7zdSdkZAs6DHcj9ZMStRjsissZE47hLUCiTVArbiQtG9L8SB8MqikPBBLVzDiFxvBZoJTGKFB",
  "key36": "kyrN3JaBxkPkHAHQfNiKdPRJWhKcXSSZh5WJED6K35znXEqFWBkZp1kks82ADbdqRcw1vyLF2swHo9QuZTn3sQ9",
  "key37": "2mCnknp9xp6tykDECNzQEfB16VWGfd41nbhTnTAvnNBHAJ76tussFK8eHf9Ac7tz9YwYJspvzW88PxnFU7yqPxN1",
  "key38": "cgqG7bjJTAdpqVAytKfGyGDcmA4c7FMm6nKbUAnrNpCafVDzzgAudF9krqdtzBz95mh8ejGNL54eCd9SY1rfAUQ",
  "key39": "TNmQczKxhh7oX635kMduChxxbCYqMuF3L3VK64wCceimNhBt3rxcEmAhdZek8uVJgU5cXGcbC1AtTKdLdyn6PTN",
  "key40": "5eDdQqzTy9dSPJLhkdDL56di4jJR7fC2gH8P9bqToDM6Gp5ZmH4PKLKCLx7f7moyoGhYJkXxHcru8frzwafMLG7Q",
  "key41": "CRN2TFq9jN3NffosTEuvhs9UgusMeBs8B6zUBfMK1ESk89Vy7UDAeQvmqB5nzT8SU67JZ4JcP4shopKy691tXRC",
  "key42": "3CX13hqG1NUAnUZTWF7qckByPuEaB6JKpVDhwgz48T8GasS9d6uWMJzS6jpWekGFD1e2w9CA3YXmDhVzjE2Ya9P7",
  "key43": "2U8wGM4ixEj4M4ovp4aK1AzpjZmd7WKPi2dEgn4cTuVUCTWQh9RDLg3LpsV9AGmDMHZuXYtFLvHmH21tDyvrxbiL"
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
