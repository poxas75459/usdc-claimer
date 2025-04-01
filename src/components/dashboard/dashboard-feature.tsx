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
    "5d5NiG9dZyYAXM5HB9UrZgdN8KoCTNL2Hk8d2kQnzAcDc9UPexN8buxa9yxyGyhnLyqdk8EgqA9uAFiawFxQJuaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chKXgQWW9XVWu97xsTM8suevqBm9yxPx6hvbQEADmpFU1so3Pr9N6PQJwyB56KDZffX2eiBxBwSkosFc57XAU5o",
  "key1": "2AfeL1bxwYwLXjdECqxGrUoef6vc6Q7i5nKwF5qcKUT5eAVyrLakkUpfvfSkFS8W5Bn6Mqgg79ZdCY4ZP24CynfL",
  "key2": "3FdGLE1EBctzinxxkvvoqZTK9JYGCdPBmtuB63MQKrn8GopW5HtE2T9P6hEg9sw12VBKEgaR3pNY1VHRsmbBmQcT",
  "key3": "5q8Y7YGmC3tWmLLxt5feZsRjdaimwQwmG5FRaJU6XcvfMZv64EjsHa1E7aYmoUqTwRHheBAUPTwjKaidxShv2dyH",
  "key4": "cUC1BW81Xjxc6NPBmEEpp6gY3uiaQXBGbmAUK7AC9WVWL8TATbJdL4shPCeueH9g82uCLP7A4MuCx2q7xiXVRku",
  "key5": "2MX5ignh5UhaZJGdW9HbH6w85hXJeqFZctFdkAcP5HC1TZA4MdWGKTkDi7S7739sBDe1kYKEUWkjjmKqkLTFhcKh",
  "key6": "3acSmN6yTCPsRP6jNJRdiiqKWPFDMtt9jDvN6WGotqqyPcUKkACMJFkfbq7QuPzLWPCfWEMkah3jkdHEmkELtKB5",
  "key7": "P3oYgjQ4Hn61q7R5kQFJ9bYJ4bFxfxsDybhFXaLanpzezUBjZPN54RcKFND85faQXW9YfrpwFryyFFgM6HC9DNb",
  "key8": "2w2nSFKGPg6dFKHR71WMF8nk6bA2ap6MndZvTzp6Lfxnxmd7TGTnyRDRH3aJ6K8Zxdn8tenY5rNCsTmhUT9uGMrn",
  "key9": "2u2xZxHLFNWPg4dEvySJz5DvUvjVYK4Spag3iEzDS7qgnsS1wfSU8xZJS3NMotFqcApp1hY2Vs8fk2j5SE5qLEom",
  "key10": "4SeBer8BMkFB6HSaz6izuv3Kknpz4k9NipZybGnPA3kzLGs2fnZicvdk3Gu2d85vBKMUwj3MH1smhDCcpmsGFUX3",
  "key11": "J4TXFxddJbw9vQeWX8mC8jUpJerjZ7NwYgaNKmifkPCE8QvG2WJDLcCiZYVhnxp715jPCNgZYpi9ENi5ur1Mtzf",
  "key12": "4mS7bndvPT1GeQdSQGtZmQnbqutmHGWvC8HYW1etJ3ZXsQtxFeD1q3ySWSYJoGKtMMej4T9PtAkpJB8eCYHzcV3Y",
  "key13": "2yqtkAomv7ApgFE2AfTnGvw58aErU51aTef7ysiBY3oP3AGvUkMh4sGNgXVsDC64P1q567uDnjZFbbMqmbFVjiQh",
  "key14": "5KVNjcJS9UMB8jnQK8Gy59M5FcoBEYuwUqCqmt7eKRfrnK5LjVigtzeJsPQTw2nsgrbUpqPPPAWkgPdjSzyn1sEY",
  "key15": "3Bn5234TSWf77FCsoDu1Xb7aVZ4W6f6aaEgYXSg4SHroLCAS1sqJcggwhJ5ZrRNAcaLU35oRkK9hgTRn5SDbNAr3",
  "key16": "63tPUmt1CcLaJcYjkn1c9LeKykbTAudACD5eAWR8ESVfbCqoxGgGC5Hqa64VetNrk6U6eQxsPJjmxnFsgsMSfnhq",
  "key17": "3SZyekcLgdZ4q9HMvDQ9MeqBqd5pmm8iVArtc3sCWhcv9egYo8aYpPPo1UxRQM3oMAqyrYq4HtBAdSG9HpFzfVme",
  "key18": "25RdssKSmBRe6Xmn4L5WUt9ambxNewd77WEkJW9m2QSdNE3KSK4sfnkeST3wA8ccwc5upWKWRKDggr1X8fh9ypfa",
  "key19": "ECXtrFvEohLZHxTDAtTVirWJjUxK28ARmgCTLZqrNa9PEaLSTgskCZTTzeJmM8ceFWBjAC11zQpbw6siufx52Gc",
  "key20": "VhtqMKcsgEFJCxeE9UBrbKhpv9aeoBssHakpQEvu4otzjCGZdQt4jrVSDcjrfhf71y8wNufZnPJbDVDvPYyk2U5",
  "key21": "29T1ceTzCuyCyjByB1ZfNkm7GhLZYPzgGXkPUEqvWbNceuFt6YMMfBVJ8caHSkMpqqD4TzWQDJa8KY8PBgFnbysB",
  "key22": "2T4vdRp5jMi9bc1ZL8ztr4iC9Ur9eRPVpAn9DGaJ3S3UPCmoH5usvd8LGpbhpaSXmbaKqRjPWoFvtXWV3DVkknuH",
  "key23": "62fbqwDMXrjfKdRH2hjUW1CbrhDo9SezShxXn2jxF2UaPCs2YWsFpBtfsi2BRAQoAgJgzcKZy28xxs7Ex2MdRYAs",
  "key24": "2KBg1U16wgnjr6E8uvrHiorwJAFvE8B3Hc4YRSrNpdFWv4VFD3C1xCCT42wKn77SM2xK4esf4ESnhWgDAhmDHHK3",
  "key25": "3hZYnaHdU6WKyRmFt6WKjwfNPJEoXNDAzyBqm65Z3Z54kxtqMggSg2nQ1CXZiebpSUhrPthraEKcSFLaDVnZRNyE",
  "key26": "fAWyARYGLHT7L94h8Qf4R1u5VtCTTQiq4U2GiDzo6eWNmRSpiQ6pB63JJ9u6pTq4bLyC41woCJYW4iczuDL7xoS",
  "key27": "32twznby5XD5MuSQbQSSyEGYFF2f6UAeKwwd5KLn2E58BpmxtocgZPz8nQUc24HzCzAPbKstrvVTC8ccnmUvtTau",
  "key28": "4if69zxESeuTJxf3XSAW9nAWkzwaT8SEaJNWHMH4RUzxw5XMaegH9vVaVw74pn4CiXm3ZRJcpX4thQrA8jccVXV3"
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
