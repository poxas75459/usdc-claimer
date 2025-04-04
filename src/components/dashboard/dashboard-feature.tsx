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
    "2m9HtREnLUXr31s17P6aU9NjdhxWJsKKuzDrCQMJ4HxAf31iq9vh9xpPE6fWPCCLCigWwMXrTUFFTSakFPvL6kCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtSo76YY9bfaea34xYuFagujXCp6BcEYLp7QARhjiXQsuC3iYYLH9mQ39wNLGYmBkFTSBvstbXQZhAPLDrh4iDw",
  "key1": "35LKhUFctkKKLhK6wDTBHykNfpvTENYiLtT2zjBmrN4oJm23pZsNABydyUw5NFUr54iDSQKpuJCNgQaeaE4jx2oU",
  "key2": "SzRbYin3vfzVVSanzpkLMatTs7szegV21kWjwjGAy4cu6g8soCe5xjozYu8ZcjeBg9weEy4muZGpBQ5rfkD3KQs",
  "key3": "4j2y5pqonQ3SJfVLgKTPZmaMZS2jTWo2dB65egA8reGPiAYppmWFf8XanHMJLuagAU9wdUrkgyFgimuUx7g4tnrx",
  "key4": "5wdwAGWNhFJDvC1iXEG4ysLcomPph2WLhXjmmNqwWg9QnM2BgddcG88STinPDLE3iFNvgC789vNjC6ynhTJWXAs4",
  "key5": "59SssaAgH5vfwSABFRxAfZLqKUBJk4dH7zQP1BFfybguqeRPF7XadULUrxH3K5MZ2BwFzyGP1yKHMirhKmbnMTsL",
  "key6": "5QZgUMqbrDVejtwGdLE2zZhjFPqAWGf17hASBym5P2HgkVJ3W3RtMp9ERfdqc9iMumRPE7a4u7Th58AGnXw23Zjt",
  "key7": "5QcxT5TRU83yxCwEtBUKKTEiVnr63ssHrKFc28FJ3TcMLn5Qw8mxChjftjdcuxNG6nasK6aYKuVnFRr3qamj9drp",
  "key8": "3S9GyVy41GZJpdiRGjUPcY3WV4APbg7aHBae1G8VWPdDTwb4Z8Sb3LEcSFsu2VCyXTtPJeh6qThu9nLGYAZBrB9f",
  "key9": "3vNUajXvK8VwiyDDsSqg4Mt3RdVnLmPsPmrSM6v8oetLy87wbdfmRgAdDoT1NDsc18g4yNoo6gwiNA5tZNAkfkb5",
  "key10": "3ATLehsCGm7UH5XBm5uBoWRSsnM6ebBaJbdzK4z5UGBWNGmKAAvrFV5tFPG7aes2Wd9cmZ9o59W9pPLKpCsxiuYt",
  "key11": "5fxxJRjjtLPha4drY8ftdMW36MVvozZy458FTmpjvef2XMFCJ1tj2yfVxfRjt1D4f4vwSnRkZfYSTyve61V5jaYJ",
  "key12": "PWoY7PDyjEKiNf8vHvdoiXNSiKY7DXBUG14e8TMwbZjHwFbqWiQ564Hw4ck43PVcL5mpcC7QKQaHHvBaN6vvpN1",
  "key13": "cfwD9VWbMYoRqwUUVjjdP1YGVMBtL7hhAVQcZMgQqrGaFyVgwAxJL5EEoPzt62G6u4hqjTAVsLjB7n3WMnJmSBf",
  "key14": "2HcrtS9q8bWaRnsaNKivspUDTjDss8rSKfZGeyYBpqiDczvTZxrdyJk8Li9JxCP8XRgdEWHQUC2nfY6Yi1qBb7ao",
  "key15": "3MjZjMYJj5d5iGgXehVygvb5iZDhyqKHxkuHRwbw9sdEEtvvzkbkL9yvCcmxR7qAesuRvB4JRfZXkE7Xke5GAyku",
  "key16": "3wxJCnXjTWAGx8XhV7rwXs5sJykM4MeRtPiiBHyWjaWKKem1pM7APf8QwszNeaSYyxJWFnskLgdPHoraTzN9jifj",
  "key17": "EyL8hXsfqHfruZKfi9sKWyXiD6eZJVs9vA6ECjrgz3G1mFZi854Q3pRVqvxZGuhZvNw3E5F2a7XJEsyKuLFDGTy",
  "key18": "4GMHGMTDjK2zwxbsmPRzv31VLP8tgasCTyTgYSFwfWLUhh1eVsopXi1GXyhv6XGsjk75ATuMMuUR3GMYQq7YjHZn",
  "key19": "2zaeuZSe4pwveacPv2fXTFV7HQs2FT3qFQ3tMjfyoY351Fa93YdXCufoRLEDkRCc4kt4xUowX8bgEuhwqBv6Qowz",
  "key20": "3KxmYBc8rXvpma2tEcBZhJcGJ1MiWWeK4JLQcH4rxJLuFZySz56Bj2ebWSbRTfaPoAiA7ahCY9wFd8RMVqntVicd",
  "key21": "5RMDs31Dinb1Z6UFFuCWRQSGXZGiiWAdK1qFdg887RXn4vv13R54ygffvSXq1AbJq1nT3hz6ThDU4X2e8HbX9XPL",
  "key22": "e4VoXLXuho1gHHuwRckLmXSYQRFYgmB8UywnjCfeFruGeBRWiGojwkzPoM4USByCrWqQgaZgmJi37QKFnxMrTsS",
  "key23": "5byXSWtMiWb8vc86e92brLXMvZqKYrb2fBrVvpcVo1vUAUGZqhWsQfi4yioGd2d3P9S3JQ6VWBCQ9PbDAmGZLhbJ",
  "key24": "2srmgK2ybwkwuAdQ6kkuyUd3JM4VpVbUC1aoNevdEyYpYtBD1VNcPGiKueQyuSCLpdAqLZ5o563FFEgpuTEfVf33",
  "key25": "5FhPNwrNrzDB8cnA5FcMBgLWRooS1QWfB9U9xiz45Jkiunqn5DTwvTggd9J3ZKcxRnjw9jFaqeLPrVwFETh3QgPk",
  "key26": "4ozj7xtosZqX1WWoPwSj2FC4btEcZRTLdFfZLDEq6YRVyf4xFpfArtigo5Ba61aKEMroJMVFB5iWPcposSfvkcRE",
  "key27": "52Upc5kD1exma7gbvXjKouTPq1NQ8L7B6BLkh1bLFrNmigwLJH83kLvzJsh4awyQesj8LU99YTygf7qNMmu3WEyi",
  "key28": "5Try7smDB9Jb7mMBvPRxVULKvBkVgEZxB5Q7QtBGbxCa7zskJGajDXkw8oyFB4CXQLTLAhLbJcwoR1uUHocE9RCx",
  "key29": "4UFT7giHRrLQxgjvKZ9Tjoawpz3o6HSFjrYbB8U3yeJwWdv9SKEjaGA3Nic82VzEcwaUmZGc3evsZ9jz46XWFYZA",
  "key30": "3xLwzfXd2Qi1iPEszKQaXVjicutqhCUff9YvXBh8rW81EZyykAaLCQGpuyTVRAuByJBaBtxpmBd3dp8HL1ezHAmi",
  "key31": "3VbmyD63eMk8bVWrM6JtSaa63yD59YjBFcfnKxWMXWz29fJCAt81xv56FSYUNvxQDkzE3rsHpee1rMNsWBqqogP7",
  "key32": "2aEvjaYsnaLhQzAxHbAR1r6M7jCf76srpx1qdnwxn4hYg5bPn2X1KxA1j9qJxsc5ugbPcMwaa8vG3roPEZ8w42Co",
  "key33": "3KXpw7LJ4HLvijHAxfAyJb1ndMjQeKNR3huu1GjowWY9kuL2dRsBYbPawh6rg3qaaHfhqcCnMBsKKJYYBLPw62nX",
  "key34": "2EtDkGun9mYb7ZyABEjP3FT8CLeoKtXifkdDQjm9QSHB9n2Rf2tXLN2EsGtS8iUz5nAdtbdcrP29rVKVddUCde84"
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
