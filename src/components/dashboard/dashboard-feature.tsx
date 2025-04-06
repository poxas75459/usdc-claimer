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
    "3QUyWWF2GHcyCybdfC4TnJbu5TCx9eyGDCJmmsbeBrqWw1rDZCd8C5RRcJJXGQcmh692F89RZXL3hakUVUfbizTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoKKjNFx8xEjkeSvagThrVAqhekrcAatYcydXqH96WnwZR1XsGTajzvQ9TW8WsC1bWFY9DCE1aKsqvAe9FwENzc",
  "key1": "2CioTJsHUSwY8vjYwHhQDyDKn7xjGD8sES2MdeLLfv3Hw43JFVuPhNAgxMriuVeNrzEBBoqTL5jZuofib6hEmodx",
  "key2": "BUcHasVeZBDEmCKdPzxq14KyN8TDGxyPjq8D1EUft4Ge5cbNXx9ucKoS8qD56Tadj3kY8nCstK2EfNkw6qRz7hi",
  "key3": "ycnuj6bkQuMmZ57a8nKB1CKdwjgTYQNPcApBa2KHoWfTZ6L4dXjJ8HJgmcmKApC8KRxTXRqWVVFtUWYCw5xAQni",
  "key4": "4jnxDjyaSW8UoLXunP36tkSxmaRz6q2wfah5yMMTPEjd6vMARJ4AwrMjkEGNoDMMkUP2yZZj3ofGSJfE8Jod6nXs",
  "key5": "3Ze4yJ65KZsjY7j1ULKQKJGcRwbVzLAdmZVHymL5YUkKERbRSd83TWNeojbDKSpBEagmM9DmonCHDRAxNa8Qkvpp",
  "key6": "66amaWbyKafRWgSUmCVQpaU9dt66Le31VZre3uLSyD65GoqdcE1LHGMNSbxNKAaoMpAZcq7pqoAY3ZQLayBuVrcT",
  "key7": "5iECT3b7Ly61fKWLy34pKdLL9bqWCHyHvfzGqRqDMHbBmD8iigXMiMHBtdgKcxiEgC5N2jh47hi86zVwT34FpFZo",
  "key8": "5ExcHzhSz2TBq7eEUdCi2M6os3cmcmUPnoc1jypZE7qZX6egjPg5zhZFTDj4S3WKANLWRH4YfRc6FvCDd46xLxVz",
  "key9": "4WwrX1THwpgznKaZ1iExc1DGD4FgvX9XyaZBXHaAGKnjW1ePaGPDNts4tecf7vB4ujf9awfHVBe5rEk6NKpTLhJ5",
  "key10": "2JjPgxFeCRdsc43JCYtGMJ2z7TRXZnpu2iyzTYQWzqMynTzb7pxGTBKbg6iMitcdXaaYDWDfnDVZPLMv1659WKDv",
  "key11": "6119FasK9Xf87pVWZBLD3BYWwTs4vDBrZjNTwyYGqkyYaN9KYeE3YEXiWPvd5itK7xMXhsd4WthDBmp6s3J4CH6E",
  "key12": "3spLQCYN2jF64Lo58EtozwUbLbehXTijAoLmDDLxJeZLi9Syxt4uDeaQy165ToP28iAcNUgjWHzQkgAEbUq9SjNa",
  "key13": "2pgYZ7Cxc7LfhCNzJ2Jjd5qheFL4SsgNi9U1mvQLQFC1RRZivA1sK3VgL1H4ssJsHn4742Yem3Ga8N9X1dMuDCuF",
  "key14": "3ndttPKq7j4V4n6vkQHoySMQpi7Z7gsPac6NsM87NE15ov9Fbi91xDVMZrums7gD2sek5ZeJcZundctUDkgiKTDM",
  "key15": "3b6GT9qz8jFvrwtqQp2DYYjkhr4S8Ap2o67NmYtafsK6jfBQtHtC52ox14cqaeKMdwZqoFbjwQkdHrcYPx5d2SG9",
  "key16": "2GJo9TpiZPidUwcc9RuBXbBDGhjruxYZ65vJnFZA8HdWNopqiJPB3xrgfaktdyim7UBDnGoKm2cyneCk1vKkFFdv",
  "key17": "3mHmRAhfd4S2Dmf8CsbXra8ss75UmbXuvQvXepkxXvpMwUTou2Y2HCUP3pfjD4qAYSbYCfNAvPSA3cxZ3dfJdUQL",
  "key18": "Ltzd1kcuhVdeBGQfRJj9E9esFRfiwXj88UnzaFne5BqeUf44GaN2W1vedzKA1TetxXthKSWrFNqxiJNXTfQQyVo",
  "key19": "KkJKUdEvFZxuS33q9GtmtaypVeU4Nbp8x9GFP8ooYwCh4cDtcWxw2RXxybH4iYC4YRWAbAdr51na641inzPBMdm",
  "key20": "4qu8hwCKg2bZyiDSSa6Kw6Y7GoxkHnraXKUGigMysapWW2A6td7U1k8dJ7BBP7nTT6ac5fkpJk4waM2Yg9yXH9S8",
  "key21": "5PaD64GTkoF8GEg6opXhpUQf52wmfzPm1sdyjLkW1vgMsD7ZSYjEXogyfH1YQ6NGehx1g56qENLqiWj8nSjvxP2x",
  "key22": "24TpyRuhiFnpe7fYi7Lo2Y8obfpvoa2JLtYuzvTc7rgoRX713ctX8eXYBqUWv8zUUaLZXmydsR5QdjiNcMjE7JGJ",
  "key23": "471WPMQxybUBFp7zbGsGGdcGCqcZ4xC5oEBtoXjShDCsPHPfp33qEESmykFrVTwXMr1HqtyRoHYSimhc6hb2ySLW",
  "key24": "21R18pZqVundySJmJKffvB8ubzLBZgGDujKqdk7xEunhy44CQZJDxKDeWvXJFshHgCpeSvCQoMdfh24vPTfLviwr",
  "key25": "2QTbdCvvwh3SiKwtZ35BFX3v8h3nh9iHTRqHphDNZuf1vXsjvXeug6xXhXBwBC9iNYwwjD7MCu42XE37Ty2GxR52",
  "key26": "5hAbKnNxR3SZmqfx6k7GTQ2w8MAbCbAhXAq1pYYDYTzR3MsVH3oZMaFeSbLS8sBsXvCGpbGc9ArAwcBesiUdWLqn",
  "key27": "4mS8ycL6VvejS6fdZLabEj1kaLym9f7uDwjHPYH4DUfqAJjiCz6CmgEroR3TVMLeyRET2xtbb2g8RLPyPzdUo1Uc",
  "key28": "Vdo55ZLqddfSbEH1quZt7mdTpdcy3bShTv8uDKNfgCEU5wsegTbg1tJ9N5imUXph6k5fmPuiR8eEJaiNGv9juWw",
  "key29": "3NNtMYhtTavCNvDd2RBLsSn1PjEHFYtmwF8nxDpCXuWrPE7gAnCTVhPcFGpBbqwU14sQyffLjm2J9RGg6FCTtEW8",
  "key30": "3WdgvwPYoENbExTZqQEGxqY3XFaZKtRyXqVa65CeYSnnfkBhrUN7JV5r3meCgVbPtWgHGHqMBNrg4j8tjeMuuqJM"
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
