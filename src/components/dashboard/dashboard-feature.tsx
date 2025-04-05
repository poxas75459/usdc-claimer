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
    "51NSyXpgxTDf1RSmA6zeJs9Ptn1MDT1xgAE7Mt9ioTvKKtw2sLU9v7PE9hgxLhsYDm88NANPSXs4ehrrwuRWrdFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XBA6wkyNfSFyttSKRcRQbzcDxXKG2dPW32mFneGMqtJjdDAoDEPehKabnudYgVpxwbGupZ6wfdkApSx7RcpRsk",
  "key1": "2YhX3UTeb5hxHSpqAaECTBXGVr9sFUTj3T9VskVK5MAimUQgAuy245qvD4DS9acXJDUo7MsqriWGnM75MFBUp1QP",
  "key2": "2DZYRa9ExtmRvnv3Y6967L9LqmfWKR8PMMRngDdjqXSk7esKH2RjfkvS6WAK67T4xC7aWVmDyuTejDjSCbnYnhro",
  "key3": "262Ve1xvxwk8WC2CquWwsKbESMMyLuXEPxeNJpeZoXLWeLcYuZuzdq25xcgCVfuuRGhS5sLHrsZ5FvJ2wskorWBv",
  "key4": "h7u21BVQbEZ1zFPWc2amphUXhzhomEGSRUFW7oTXPPMRgjuW7uW7iuqTtKXfHPnT8TM4pbAvKvU15K5oqPEwoqH",
  "key5": "2SSn3iSFunAcvVHYWmVRm3xHf53SCWN8xM8magDowKJoCDX7eHFBHkRrK8EyZgToP3xqPWySdFxMHk3UkAm6yuH2",
  "key6": "2eGbZNERgPVDjYxAXLhh8Xf9mVfd54TgxswwMP6iC7ZnfWaQ5Nrq5W4upKoM8kXULt1W9SX6VyTAV9nmKh2V6uPR",
  "key7": "4RWwmtzShrT9iAsnPXgK2jtwSoiEMPkLt8Efp1mQbR1uBnx83NRQqu7FizSQTFcm2ViCh1n1REvkeVGSVv16hgJ3",
  "key8": "4YT5C2wqZt7UkFmSDLbNmvsngSU2Cb6WUdZmUkRt2WDUZ5GGCBQaNChpqNqENQTANwCcMM6wQoEncARdq4HXvaEK",
  "key9": "2fW8yPPqDESbWEDKn1TATLjNiFfZQnRhTzoTSqynepw4Gu2V94j9ogEgqkhnL5A41Pnia8rKWscBo2mnS8FjTjcb",
  "key10": "uBqAJFWCKMRe6nXmZmtKwtaCuLGoVYS7m3fwmFdaHoaeNGBUiKNXneocJK98p3jQNkEuSoEHbkfaaVFbnVWcxB2",
  "key11": "p6vNVP78tiR2jPavsQXbNtBm3FYW5VShteuHQ5U2RBSHdvjie2ibt47R229JyWvxE7WGMpzph8LJjCrfqLQxFPc",
  "key12": "2KM8KzJUoEZet8zeN1jhAE6MYwoLNk1uWXGNSWfaN9tjm2Nb3fkFd8R6VZx8XgyFj4nXTU8VTmhQmMhMRFXX8WBh",
  "key13": "5JoX8eu9bTCwkWrZSuXNxNossjJVa98T8yeTrM7fT1yXpmKeWz7mJby8dATqpTWMUBZSXvQaAQeCZg331qydyacF",
  "key14": "4dbxzSMoohpF7A2nHgYCVqR2WyckKeA9BR8LxhbQybaMF8fMUtUqb4fxaxAcUADj2tybFxeAZXWDFdWSuBKZxjVc",
  "key15": "2b8anj3GrSZPUCPRzAMQ9xGQzYMVBisBrXuyCZYBgix1YMmdJN7EAAJWg76ZECfDZJqagefbEdo7Zv1HeByqMoDc",
  "key16": "5wp8oiZrKBdfvVkQMbPPe7tqq8P3g8EjgMte8LUoVQMjQncVAMgnjoUcnsaB1MbtMxgdZyEr8UYVFGj2uNFQrUHw",
  "key17": "aWeyA2su5zsMBvJGUa7XTnjppVoXJ8X6tNhbcXnh93uHUJHpYw2w2q9rig8EfhAg7UH76beJ1HFbYEVyLNSDHiV",
  "key18": "2kiDNvgZgiApitLaYdjH8HkAKrttB6RzgChdXgUynK8g1RUVtWcpaGat1BpgxXyNt2ZPnMT7pSkcXMZfL6wCxoiv",
  "key19": "3xGamPfvLxKLhLp66CnMPwWybRxteCvzd9xMun21xB1dmCXtwbxvu2mZKA9Uy7ng3rv5pp5VmiiqWiii3Hm8ukhV",
  "key20": "5645xVkSdcVVAbpmwBH7ncRJNCLdbGk4yeussEvQ48rYAEfR7JiMurh3HiimwytcEcMEaMMM6frkGL4zxp1sMPgo",
  "key21": "2PcsC5hKLmrtFtRqtgu5PVmgzHyN31uccH3bqSPJYpoTDKZXe7YmcuHG8yTGbt2Gmi4bhQtytnXHXDieQGtYtUgP",
  "key22": "2eEmBVrrQRQ7DhJQszJEpjZXTamenJhgHQBo4fYieEZSqsyw3GYQKn1RhMgYSWvEHT5U4PJDtTvW3cU9tH5ACyXq",
  "key23": "4rD55GvgcUb1RNgSYTVMJ8kVUcLD1SCv4ovLZyiGDEb9k1QYZjaT4gUnNWD1nLQkwciH4uHjK3iNL8RKUqh26wXw",
  "key24": "47jG94bmAEN5T9MkvTmJG7PUMtTxd96ZAB9wUGr1yghtFvfXD8bKpe7NFSyWor7EdnHbbK7vpfsQFGZG1P1jDzcL",
  "key25": "5kTV2BVpwiTjfXGjxEt2nECLhvKMz9YbnQ3fMk9zokeq3ypP4X5XPV6XfNEu1KAPgHyyvwkSAv6uWmiRfKWv5eDG",
  "key26": "4yd1rxd6yvhQNFeVkgxHehiS4mBC9H3YMwhSsuhH5pMNUwmmXx6ES4q1h4ksE1WS3JJuf66eGa4pEC7tqVq4A4yX",
  "key27": "4QsJzstXeE4MFjgJNHdQXimLi7T4yKLxnTjb7EKNdnpub5sGif1A64fshzmmiV4Ssf8CKUGuTaKsn5i1qWap1o8q",
  "key28": "5zbsQwvcdgxKBbzKb3CrjvVJGy3jmgj9YJ3cWiPNrT4wc2LSPx9o7kNgYeYWHnminjYWhuuA1bguhniqPE1CbWGp",
  "key29": "3yJHA1K5aqjWuL5KzwERxRCtmdgbswQDUmftVBvFvPtefYirDnGhfCmy1qPLt5MjTmuza19pbuBBNZ8tNgYyYwfC",
  "key30": "3j56raaSY7cyBUXVsgbqA1zXRoz8FeF5HQZQCKgEZgGHQ48zxfPrXCq2msjaUVBZH3Chjy2WLBLj16eyRWXn3MZL",
  "key31": "4KRK5Tz2n6Zt8bajvL6joJXYw45y4B4zfMsUcgMdCPVefPKLExepwPKPosr9p5KwLMSYFKmReH1jSKiiwK1njQfx",
  "key32": "5w66drHgxa23xRsxZwrvbpVFcSwrW2mgQH46Rkp7uZeyp6XbbwmSPDqxi14xCnGKZRU7eQaXQz6GuXhoT4gjHTH",
  "key33": "3owvwW9xEf1kreKhWcrJFTYygB4TVAZinYFu1ZSKceTAYUiMdnCKK3VyxTwv9ptS47AxnfykwKPMcHuEhUrFqLfm",
  "key34": "2hBsXvcCQHgP14rwKZWDzopNjNVE54Ba7gfELZYqdHbntiiLMmRtcKZ4j9ngfeLHqhKSwmySb48EVVThTXtve2YQ",
  "key35": "MVSZiJT8o1FhqJzT9hF1c9P5jhcGmXnkT8gqur7KjrD1fXosUnofvd5gZEQDLX1Linb8gtCyz8Km54kQJ2JLLjq",
  "key36": "yWSssRJmPpoL2qBk17tyrMmsWALDS1PHUhcmxdkFVsmMSr9rAYRphZhrQwgNM5QLZknoS88NA1gdM2Q5mMg1yKz",
  "key37": "2BqjgF9sjXxTzmizHAwaZBXB6j4AuUetPYQgeTFozM7AbAhkeYznzji9cckWXbxwQWhuawY5nqeE3CYYgdY9Z8zG",
  "key38": "B7YNgZoDM5r2q48hnBQQTw6nTBX7pmsd9t1EkZoWdQWur7mTGySvRCJzzEMukj8KyxicRUEvD7HNdmAvXiBBajF",
  "key39": "JcG4Kt7WiTTp7b9uJ5UQNivu5X1yJfp4BfKKh7eR86sNsB5HjTEUe4rV9MENs8ZgS3AeSG4zFGXANgYQyQqDcfz",
  "key40": "5Ej6nwCFPVFYZFf8dwb9YmGXaf3mHD2jQHb3xJu9aUAx44EAjGP57FPbAKPrAuGHibhYwf8vUJ1jmWihn3npy6ic"
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
