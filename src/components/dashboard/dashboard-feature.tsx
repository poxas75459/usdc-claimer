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
    "59BSJt9x9MwkhdgQBzSsSSPnN3Pk5Bp2F9VSox4ZfHzhLScNokQF9673HTsyDtPhq42FyhKG4ZBnLkJhnSNdmfjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AM5uyfUA6x7hwwhtv2PekVJC9tNC3CVcJr1TqjXqogNioMYHK7tTfy1uEwRwUWYUJJav5utyZJVnHv5fbYk75i",
  "key1": "VYfDpxLGkYS5FByD8UMzPMGZeLdhqxtpJu5sZNJvLtmR5oP19fTwmiDnVGjpFtMz4LxLTqXV9SH5ZH9ghDSGXtB",
  "key2": "4YYLCUxZXpbUNee1XX7MHuVnHHH1VqLjZCsao4SfniNBSyU92Ajj1n8wZoUNZfPF5oeJavKEUFv6oGGBKVaxxycV",
  "key3": "3FZLj5U9Hd4YeXi4X9wQb9y1LPyuxLG1V1ADAHsprqqgey2TR7etQDQ13QYvn9groNMzMebmgrPn4SSsWG8wTRhY",
  "key4": "4fFNdQEZDCzkMuQJ9dX7X7w1B1gxmNxj559scJsDXKoZ1ayLzZPjXroqW8xqvn2qdZDGc4mqYDbS7xkpzy5DSZYu",
  "key5": "4ys3goBtes7GZBMULoybEyPFdb67FkmaG62PsLZrDUfQWH5C8BdkKCkVfYAwGLVuEd7ZbZSko5igtP2tvF9jFphA",
  "key6": "4FxTBQMrYywarCcPE6R8uiPbGUrKcdaZ2HfSKpy5onB4VM1nazRz9EKrLhkYtvRDR1cKM89Sv8rt5SSx4qSjAPLA",
  "key7": "48Ls3njmywZxX62QpD3E64LpQAwnYjL3x66XrC5mncPQ1L4WaXHKrQKY4ramr4a8K9v4p1fc9jE4V4Fc8TnfyfzK",
  "key8": "4LkUkkhWhEFyFsTeSAQdm3xtf91UCRRajxsj1CNfrzs9hFi7ripiHFsMozZsVC7dLcwfrn6Y1QMEe84CTjnjLmxt",
  "key9": "2qKU1idjXaSVSm3jfXTsH38xPTExQ8fTvHkyV9nngUTNxiiGN83tnsEuQUgBdPYyFF6oRG86aHRhJ2cZ86DTdbd5",
  "key10": "3LqZtZ1J5gkqoH9sny6vrtRVTmJ8yYcTURdytL7ARSSGzSTdNax8ziChoSciZNzPVq8i9witW78SZ5dCvQ5FpYdq",
  "key11": "3dNp55Hd8yqz9zzopLKeXccETfWKCqjSQnHJjhjSw8gE7uZdrnkXnfxNH4QVdmeXEuNe9XTxKaAnstAjLnNtjkK2",
  "key12": "3hqr3mwSpSqTBH85LH2dJpB1GgUNhqxruv3ULCdgv4Qh6JQdVAbef2hdaDZdJ6JhTW653EqUBehRehvghi4b3oGw",
  "key13": "3P7LZk34sey5LFYDMhy44C3GWY1epG7ApAWAARcgC2Bt3MSgqshu2MWK9zp6ekzw1K33ta9UcEwWbXQSJsuUYiWV",
  "key14": "22DqsXcBXPhCJdENqjqitX1dCkU4BvTej9rgYd1H3AccyobpaaxjMzySUZvnQ7fcAnhhqV3GsmHq49SSYf6vwqrL",
  "key15": "2QVLMNZJbHgYrS336oz4EkMGv9ZmUF4everx7Kaxz61pUCbsHNYWSYSzptUTGaby5c6Kf8rrdTcCNiGDPunu88M3",
  "key16": "3ALBwSLrdnscXbEEsWKSfHqCsR3CUAjyP2iGiKPEyCb2Ne4qSgjKaPtpkunEGyoxhywRqMFcGvMVrqFwk54X4Bb1",
  "key17": "5mjSpsY2CJRMTRnN2yHmPYrkgYPRAPmkn3F6AXNDLUvyxCr6KvND4ioA4FkxhZxY3RL3RcxjCdhha2yD4rookFxK",
  "key18": "4uJvY3d7W4UBbDCTZpwTa7uozWhS7s8N4KBvth7wQKHErLXaWsjvs5V5rqSXAhfD7kh5dy6NbPKAo7yj5npXPAis",
  "key19": "4ZVbBSqDBAd9Q79ringczWwAcSZFYkrfmQ14JMemg8LEwZaoj9V8WZkFHH9RSacTPo3fKsnYDAZnzhiLpcCggrCW",
  "key20": "3orFUtzfLA9woMDtjdJQhHA3fL9NQePdp9ew6otQVUQGmSAUWKP1bJmMTzXihLkuhr8pCy5SCGQe8irPpMRcYqeL",
  "key21": "3iBVK2VJS7KNUZz1rk267iUWwU1UJFmyYDgm2KgupGfeEWXAmv3GD36oaffUig2jej6pYxfeVUm2FHXQWcHZG7ug",
  "key22": "5zjtg7shUwBpTZK1p8V4iWrgbWkKGKtFw5Md1y9t3warfwvtjqQC1hpwgXGohzukhwPfeBwGX1ZPjibXeWv9DczA",
  "key23": "5WrjjhaDRsN6F52RyAnHy1Myn8g5nNG1faZ7FhWBUmEsJCWByPUspTwCTPjFd7B6C37d1w6ep1SVR1BeiptvgjyA",
  "key24": "2WKFdTE733zEmLjbizRqbG37Wyire3n3ArNhFgA3rdUeU4wGAFW2LghGmeuALJ5CMY8kGnYKKh2Qg4Pb24qA4U8x",
  "key25": "3xQdB4FQU54PNg7ijkjoBAZbaFXawDQCcKbTjjNQ3rZJgcsBUsEz7XEmgnCHSS6XVUoSqutJfHfbUrtGRzbe3hPp",
  "key26": "52gxuekbaGtYonbvL7G54XtdxbKHLHTdds2Sch4VsMiSGwovVeZ3X7euy8AAkVwqerP3QWao3Xczt9TQWoavKd5s",
  "key27": "5UxMkGre9Np31TkCPjqWUULBfz56iKufqjQ9S5aD1LBSMLuqoFHEg4sosCHgGMvjaWcEDjBsWEswdepsZ111HhEW",
  "key28": "4UyVvRwh6o66L374KqBdyep1bwynEHCw6igLQZchgA51mxd2RP9b5d77qqf8h8FeDU3PQVTZPb6gyF6Jn2Y8JtV7",
  "key29": "2HrwiQqYHVWiWpNhasenKF9uEjKYtddh28z9i7APNDN2V1J1Awe7RjbQbWAUqG6igZnwhJUihDqgSZaHi1QQGPij",
  "key30": "3FkQ1Wr1bv6AfKXQ8sEhLqgLFmohRxcaaQadPhgVTHfLzL1wEF7VhjC8E9xwjTifTmHidTTRh9Wgapr9YL5TUESi",
  "key31": "c372TqSkcNnZkJtkyT3sCQxC66k3bo753qz3QZUJKFfHZ48oFcErAXxM4g3XMBx3wng9J4kpkkJomqL44fCcfhP"
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
