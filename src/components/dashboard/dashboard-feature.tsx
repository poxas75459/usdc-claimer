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
    "3bNzR8N9c8DiMrPyrUbq2gq7uAhkEw2NJdE6YYxvHnVJYXbkYE4Ujr2aZFACwewk6umqAbJicasZQ6QpwxbGxWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRircjFd5toRLBqX5ZgLanpUCJHFWiFwqUPW3TuuqS8saSxB3Wk7R1ABRyL5MTcBYhKJCS7XSDF8vV6UJRBSeFH",
  "key1": "dgPL8555ppuaHJrJGtqLanQ51aMBfB1mrkK72U9o5dFUsx6PoPkCaCiSeQYPhD6UNtZUZgQnHhyXyPg5jzaVAnq",
  "key2": "2qmujZxKzs2KndEfozLwm8XyTqqGLWCFfKEszhFGvRWFb6tTa7b7mQ7NjudnHTZ9AXNvYWB1CV9PUbniWbomiDaJ",
  "key3": "S2eBBJYwfU7LQULvtWVVCfLvGW6kogfU3LEaLSSyZpJ4QkSQ9pVZYPS1CVfcEcPUe2XkCEqYh7WMf6VfFAQBkmH",
  "key4": "2Fy3Y3LJifEKUawKfcxRNcEn2X49LmCD4CY1Wpjhn3PigD56Q1w2518H3yZHgvHmEHNQk9ETNWsKqkAsA3c1RePE",
  "key5": "9GYvJS1icUj6GJ669EKtMoJWe3A7S8EK3da9zrzRqKfUDGVF9SR9sFQAsjNPk3KrRuwSLnrea7U2Ke4hE67YpZV",
  "key6": "4AdUUETeyq7CvwH2r5YUAzGNJ8ZpyHKSRhEjaVCEyADzUJAw9bt7dF6peGDMrmgpngfibgGq6DnSmQBvLE6mVo3E",
  "key7": "e1bRtBjY2pwe7qJbKLiL7LuH5XWmGnvq1Yhq2kX9RDbubgUBczC2BqsRSjCEpT9t4z4Jkp94LdGCrgB7SA4Nv9e",
  "key8": "iisrdGoPonkZKf6aTKWy1sDKYx4jATND5J1wQzN7ZkmfP9pFUus7sfdJVuSywaZwbVbiePmQ2xDTn1WZZJ5j78s",
  "key9": "4edXs2N3casghCtVzh7CczWiw1GPGS4DKdHuksvygQm8m2xwQw3JP4KqdFhAyPGb5ZDHcYm6DRHErnhMLa1eEm7z",
  "key10": "3h6uPkusNs3Fi4wy49DyGxnPaWXYCpxP3X3mDNDAr66xBdeAk1vP7aiJEbPpkDUEvw1fqq17egu7x5rVTo3NJ3Qz",
  "key11": "4NdXBQGi8juYVNuA9rzdjnP8hJQLpDyrYKb3f62eJb2NFi5y3a6A6G3e9QTmA9qsqegUYC1jQZH5Q9ZJ3ss2fR49",
  "key12": "2vdy6KJPG8WkWww5aBAQirYU97tUFWtsAhjNiyfm5buq49NGFAhHw6yambo63LRRst6y6KU9hC6aWU9diokzD4Gp",
  "key13": "4EpNPg3DgiYGshPmG8bg5dpQ23jjX9KmdNrm5wJBb6CUD6NyTnxxPgz462QhuvHuvLg3ZWhHRvhzDUJwHTrrHUcs",
  "key14": "3fkzQZg9hGaPEQ93rFpgpJceEWko25zbGAR5dtA4o3mbErypuN4vWPoc9KgdRh31gSencQaS5HBPrJG5dv419PLz",
  "key15": "1L3gxnMXoYJt6aBBTcUcZ7JGeFFsTBSPtf9H4P8vSj3sbMPaKbYUzoVdcjqVoGYpimLW3fpFxKHF6PTPqQzP3Ws",
  "key16": "4FnLiCZ2i3T2LJGkM2M9TbF8cJ4yspNNUkLVUibn3QxURne9TqTcWAtsAqHK77N8tAaaDHHhRDxpH9xxMCESHqV5",
  "key17": "5S7rfE8D6XFHLVDsfvkU2meoSdtBFEgwJNdpgW4BuuYyRMwekv9mtaNNd8xNqSKPAptjVqsvWuAV4XhtkTeRkWKP",
  "key18": "4yF1eZXBAQafnFKRHuw3WeVvNypM1U55MmZscbRar9fSVU1p7DmuC11Kxr8Q9JHLBo7fjFBvfSDWpzLGVmt1vbVp",
  "key19": "4mtWLXEs6c17HSrjMV16QD3uyDFyZxbcBWJKvWzXGtjV3NUENGsKwrwmZo8M7JjRjNmpHukbJ2Zec5NZGuPax4yi",
  "key20": "4HZv7S5QGngbWcdYfARCbm21e1sWfXeZzt91bRm2aBAPV2VToD7vaSL7zxjcG3Hmgk7Q5vK18xEn789cuDBJfJd8",
  "key21": "3qhhdXz9N1g7TiZUrEay2CqTCTbM6bKApZgF77Uq4rrqLZ3UKBbjfAsdYB2MEmp9te3y5zyBsB3HL95twuMUyZbj",
  "key22": "2tUBsaUGFuvFXa8g2ZRU6gQGA1CVMXVFmVDpnCYdoKodh68kbnrPd2KgjHvdzDsMzuop9wznoH3rVeESfMzCYc26",
  "key23": "2PpyTEdY8Q27vJ5WtcTQbGTmEfDHSgqtvZmsebdyeobAGpSHzsE9EnR9FuuqZkxuuh3xM7s2xMMh66H8znXi1UkW",
  "key24": "23LncZbfVGoq3hx7e3BNSsmtVc46AmoWmv7Ni93GsyAvW3WpeiGAozimcjM4JrkMFEmHPSpkmM8hsryiPeNGT2UQ",
  "key25": "5pLkqe3fCxTaopnNP52FxAZPpkgnuCteU39N618trazRDC37aSNJRkK6rLgRdrXMUN9x1WdgKcAZA1T9AdYPvcTi",
  "key26": "2BfgzixvDWLwi8mut44iUTbLDZP74bEw8JAvTTuB2EQGtoxrhYdQo9A5WiwuZ7pWhQgvrwQeYqy7FrSbbwzS72pT",
  "key27": "YAeiMXQQAbxdk1RJmRm9CvKqcwWVPQ8khwiPBme2oDjkX1nbRqLhcozFMoDhLz9z9NkYuJjEVkxLFPDVWBJ8kLm",
  "key28": "2YQc2ag9AF9f8trMffjRi72WWVsey6SjKEid62JpWoCU1K2FvnmJC9RRQ1Ht5Vsh4uq9ZhK6raxZtsAM5qqn1hwU",
  "key29": "5Gy632nPuAAdr7MWTJ2YxEJptDiReeLCzbSTa8owb5UJuBQMxcBLMW1k3VZcYiVWPZ5rNySP5JYadHR3JynbzkoL",
  "key30": "2ncboD6Xa7pJ3CgjkPW242HQrVoab828Xj4WQyxpwAygDdngKrc5bzW91BX9mVB3ShPGQfwHmZjLDSnwzYtjNBRh",
  "key31": "5SqZSnxS2G5pCuj1fgiRYsuNZMbky9uH76r9g6948DGMdiytgdiLeSMTJoKES3FsBMriKwW8MtNyNSPwa1ZvQBcm",
  "key32": "4qPEtAQS3ZdRgTw7ThHNua7SW3jrMSn2ioTTrdThMYkoRkWbi2dJzoJqP7FKX4YLA7B8XSpnJRee4jRwE2JD8Pa4",
  "key33": "3MYv9m3jr5TkKvfNyPZdA4a6qmXey6VcpPxCuZCqJyKgQTuQuJveNkbvUG7so2pG79DW8RmW5ebvqC6DLi4yiywx"
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
