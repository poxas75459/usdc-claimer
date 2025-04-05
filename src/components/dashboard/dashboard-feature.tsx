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
    "46Npax7bWpe5fphiwQ2BkFoadF6WXn5hJuCdcyCQ9ETeHCWFNKu8uRZGe46PtcnbdUmk89FXKxsAadnqkVSxLf5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gL3W1oHycSLD3uYRGaeZ8WAGASXrkpUtryq2DAVDfrCp8WiUZA8dfqWE5ubjLozzwqRCjvudb8H9DcVEY75RzmM",
  "key1": "49Jk154UrXT3gboqJ6td7ZjaBFCtvPr7PbTYsQv2SS7n5G87r2NkKVwGQkiP1JhSA9m9fu6bo2Pt4ZMmEwLk7QY",
  "key2": "4wh4G2ptVCRmvC55kNbNrRVhPSASRm3dcAbWu3bts9bngAxnqyZ4hifSyDMZLzKNh9VqS4d3bzz3WHsCzqkUPFhw",
  "key3": "YWh2oo4HzrAe6gqg934fCxAWdgMXgEros4dZcXAXWnxFgeCKFoXtQx4quxKxeacf9qgoXMhuAK7trbXB9sLYMP8",
  "key4": "3QJMtWV2DvZQ8SNCiF4wPA1qvf1fX9Mogb6dWL2Sby6xo8V2rmfXRzyT4SeKNvceahDpfnkmwvbmJQzVEPY3EeSx",
  "key5": "4KJCDRLYgUv6tfAFU3ERjqJPqvcJYNBY2KbEv83FgGv7efSiXNck7SHJnZRszZ6y9CwdQvCZkxMVerdcKPQBJSYX",
  "key6": "3iZNLJSH31nUoryNGKvqY7vYyChRc7gmzA5wox86g73YWrLWQsW26t4s59Y7BpM8cA6gQtqyL4mFA1E9gyZBhLWE",
  "key7": "4TAbQxGxA6nhTfzCet3FJ6M9nBafXKDiqdy22L2NMmzYMHCdnBPzp9BSh4vBLgNsEwpjb8HCyYBqH4ZdAGy59rTw",
  "key8": "3eTwRLK5LehdvycWS7KGBd5QPUsyHYaZXAFD3LYWKo7GAnK5iNuPSsG3nfHHkXXSi9N588M6WPMZtyUb8u3yFQX",
  "key9": "2J1GMqX15tAnxfZ284b8uW6AfK3iv7S6qTAcibgXcmMMNo1TrkS2uwBC8Jrn3eTQsRegDoZ6kymNvonGkDyZhj2K",
  "key10": "4VgRTzGjELeLBQHyEvUitzHaxp6pWUVfQczvxw4JSptREFEaSNcf5SwdcMHkCBV95rFH5shz87VogiPhTTv7jny3",
  "key11": "6pXDb8QAE3hnP8e3cGB2VaSsZWtb5cuh6dy85FRSVbY9TwD2uE1zev8NM2ffXodHJ1cY2nT2EZwNREugmfGcxBs",
  "key12": "4hrcaZ4VJHWSyhm3iDg7aP9s6VrTUXZ4P2mkT9BCdmKapKo3mxRNwXzv5hL7Uovyid3efRryN68c93MEppETMcqv",
  "key13": "4XXoUMbvmQCG4wbGVQYfmTP6AwFmoYTUYh6BXouKthnKkeUkAfnQ3s3eXu93QsdgDNdXfvh9oKHxFaPzywmfAcwp",
  "key14": "48MBkyA3Cwrjzrheuw45NyCWSyiV8UjZxdt2ZYvj5JreA3SEe9wNVb3N3WWTPSwdDdsS3icVMB23zusJ6RN3xqLq",
  "key15": "3nm8uVDhxi58Ja1NbBVLzFbHH25wA5oQENTuSoFNPPKa5DCkpVi4MgpT8fnRbBQnNd31CqRtrcJU1UkifcS2VgQp",
  "key16": "4xEuZx4vZrHKp4vMDmtTtMndmBjE8YfA4LjV1zc63YGTurx66n7pt8fuE7A4CHayRXYC1nJWBX37z8XUgqTSyTik",
  "key17": "5kG5yzseapGy36aK1tTm3xijwWofZbNym89uD9F7tGmkZEpjWxy1n4a477dGpQPdBAuQMCB5p6Gr9hJjabJHPf89",
  "key18": "uJcNTKZRpn2no1DMgc24KioWNqRLk4wJuzKjVMDo1XzX1NjyNrVgtzGHEACNhuHBnUcUtr5oFYFKc8wGAueHM9q",
  "key19": "4Wx4o9Buk4K5BSS1bbP7DDixiHyLNXHkTrhBetVDui7CFH5XAJJgLZAisE1WdYTvhMtqEkR7XLWkzUw5H1qZQUE8",
  "key20": "5kYhYypw5P1Lw2tLorJgshfSECRRaAwcTxVMGdwx2zv7pPQ3Zj2TWmmCY7CKCF7QUY63eSBV92LkKtEshj5gzc9D",
  "key21": "3bkeVXEicoQFaVD4AymZJc6Uy26fAWQFUu4F4ZCq3zcTTCgt3YUFSDdNWiQC4EctcRrYgnDwH1icmiRbpmL4eRk5",
  "key22": "u2PdUTKKJ3FEjZZbrCzYkviqRjf4fzKNznHgZh4JnGcjjVEEg66qBAkZhnFix987sjjPZ4qpGFeaJWfDLjRAht1",
  "key23": "37cpsCJ29DXRcejkQUm7Xmy9HQTPYSMFJkrFJLCuxN6XDdra7bqReYmXiMzxj6NAUTQRt5bqugTiXFQzjePyyewn",
  "key24": "4XFDb81zFBk2unK2TdPMxBHkpjiFXB2hYv4Ts6pcJo496uEkeT4y26JuArTt3vFvptJXduweySEoihdgCVsqBZXQ",
  "key25": "5V9zko7DcfmZTKfg22utNEAJbBQ2Tu5jCqMSuKLu33UWxf4EZRer3KT6qqfctbaYem5YqdggPPNka1d8YA1X9YiJ",
  "key26": "aVpgcn8ndwhvBeeDb8heTnhhxYqfZMTta9ramnmnp42HMVEKY2p7cvrSWtFxgRBMQjykcaWaQSYb7Ux6JcgFnZi",
  "key27": "2FHaer98NqmvSVPJXjtKuta3qxF2mVmWkFfNvTAMt5fBB7EHkF1FDRXdFt83GvFGB4mHy2H9Wxo1YdWZ5NWzqNgE",
  "key28": "3fTrqFfjAcvxgjUKKt7XJax3EjnRoYREGtAL95988gPCTz4S7Y8meN8u1fV1c7WmgKQunvJiw7zTDCmqKdNWepJT",
  "key29": "2ncS4LVR6AogzvupcXv44tbJTbtMGfRVKaoKYzoq3b2mZwPR2p3K5QxQm79kRuXQCgsX8UVtqi6bt4EPmFtieMib",
  "key30": "3KqKJES6PJddjQ45unioPazYMk26xZH72wz4XX892evSwQtbMUme89wG7uxuuxCNNMXkwZiNwVD9qKFdQnHzzX3K",
  "key31": "4BnzjHK7bEiQyWSKqMsD5N6WnhtypVoNzzHuBL9gtFMVWzwc9taduo9GPAL3MKf6MkvjrvAqEJCxFSWhpEsnkYCE",
  "key32": "FJqv8JhHjYDxTxgU5RhzV5NU2kxjH3kue7YGLYobZvYn7exPXnedZa5roPAqa8kcmKDLDb6mpJqqj48WhK6hJRQ",
  "key33": "5FLt16mao3k1TFEeqUPgcJ65CE3u463zmcYDt3oeaAD2QTih6tEy6ox6tVj1STGZeRyxZNKrfr2eyQnPsJSEjwmx",
  "key34": "4WKn5z9svywa3a69Quqxf8wdwqX2FFC9PyAzvhZF9XamAfkoZZhKFgEGfkrsimsxcD4DjDcvTwztiDgMj54UAnBN",
  "key35": "GgRVp7PP7GXTECDpF8CFKu5sQCNAAgNejEAmDptLUTxKwfNRpQekvp5T2QzadLoq1PVVhrwFXzYpGgNWGxeToT7",
  "key36": "2UFqYc51LCE98qqZP1HYYZzJkpYcwQGRyMoEdCgmr3bkiq6KSZws7HZWhVAC5rmbxdaj6UP7KJ8mQ4HuuTvKjtoF",
  "key37": "2zicoEcSd1io9V2GqdYogiH16WYAbjccqVRbHYB8SUNwqTWPGygm5YV46sDoqynrLWvYJ3ym2ot493PxzVMv5MWQ",
  "key38": "5LihDsF8m4kAQ5gjCiKJ4KUmzgbwbyNqE4x5Qjvxo2AtEKoQyRjEFEJN8pSr3ksvdRHMkqTxpnLqaaKDHCzpWtSp",
  "key39": "3taQDiZpSTeduCpqDjoTdAAkxfDkpfG54AZCAaM3tbAWLpacvaBXMu7AfqhQwhRgVzcstQ9ducvjhEWprtACWqjw",
  "key40": "5CV49oPqEGxQqk4BuwDMnFXWbAud3RvHZRBkvCS4jyK382eRSsvVnCWtU2AjLRN9hyLH3qn5H1wno17YdTnHGYMU",
  "key41": "42eMGm3UqwuhG8CQo9sqzmqBf7sM4snx5x5nnVphnNBWYraRo9qXxxGxsPoAYH7AJqYVEyuetgPnqdFJU1nRR4Xi"
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
