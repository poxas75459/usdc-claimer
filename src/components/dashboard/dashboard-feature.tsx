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
    "5wJWXsX3y6pLSgttneX3QsE11eRVTdAeStYf1oW73NnkjBcEYEerPCeWmW1YQ7fcXS7MBgsREjshiBhtnGYdxGTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eiYnbZfNPbAni2KKjBU8A1oDiusWfxRGNBzdwcqmLSR2QwMD3mMXCYMdVstkfLiKwX2pg2JLYbotoAtHsB6uvoB",
  "key1": "wR6Ac7QxCHkEWbmeenEuG2rRbNT6mAUFXwZ4yTshuyfpfP1QixVjznRGTzRsAt3Pmyqhcawnnav8Jb9Nd9aBemp",
  "key2": "25yYHRoUcFL8NMbnoE5yFW9oYJhhuoW1VujYZ5FBzf1RaPw7n9Buq83jaV2fBzBE4zeqtMfuSB4F1mzwDsxo9sBp",
  "key3": "3vkggH1reprVwhpUqfUyNRLZkWFGQbu4sM9dmVmerKKGB9WXr1C3Y9H5hYsQeY19TqW1yw1yVPhvqo3EKGyTWz71",
  "key4": "4Xugp6WLLoXRytDM5YDXYYHiyg5u5zspZVKFGVYFxDusDKVZpeoxYCr3SFwQCqUFkHJyzBWUJVzhZK3NptjWf4KF",
  "key5": "4na2j9bG8M7xvbwfFEgkMWZ2sXGWCpSLK8v5bujjrYmK9spBcJFyW3JduLwR2iECXcJZHWJtsGGiWWXCMSBt246y",
  "key6": "4vfBmpdEZHzQ8hyvBMUzNfgFkhAoTga3GTKK4sRatQZiAkbJwkbMSaB6TcyYZjfQRB4nhQEVWToPW3ziCUzM3jVU",
  "key7": "4TMWHCj4NQZs4KVYpjoqip3ZZq9VfnDFDFQ4SA2yaoQGMQRc7TUvSRygD1iMJTJTqGB5mSoAh6P3W8twFwQgY7PQ",
  "key8": "22QLtZVgiUic11m2K3G6yN1F6vWfiicpF9QFsqnDdcvLhBRpdLHDDNfCJvU7LJwrn8RvTqZEQCVy3yno3Uyb6jCi",
  "key9": "5CSAPcdQQigUTgCbNPmS6putV1EqGCGwGHn6W6tvCVFYwUWVYXdvuA2JhckpZYJvEJuyzEPmgVvk4UCRuJnL23C7",
  "key10": "6W4hwQ5dxUBkfTi6BPrGDFunp2UNnypF12KCtCnm82XBX9xJ4qgmQUjG8LiNnDf6AfoqcqPVzudXc8UzJaq9jzx",
  "key11": "UVLDvHv9ideLBJwFPkmdCGt55wpp94QoeemRfFP5H3TkGeNsaFitF5nKsVk9gjvAd54JV3ZkUxQFEzjM6wd8jie",
  "key12": "5kACqmiWwQKQNXa6FufVezHFdbE1e1yQmr3cfhNwoXMek1bctFMAmhRp7j3Vs4aDQPvNQTuvP2CYpY4VJjm84gSd",
  "key13": "2a2DShESMXS29egttS6rp9WQD7L9DRYuCMk63QTejhh36mQh2sdK266h9jtSDxrZ58ScgGzedZGjm8ZWcAREPpWh",
  "key14": "3XNHoGKzkKGAv9tFUNHD2idqCfGb4eUPdVroMrRSP5pFE73UttWepDRxTsexkFMuR43GLgW28rzirjbVan6eWjDP",
  "key15": "471a5PiruEUtByU2gUKeN1krXJkvMFQL9JXmsXwqYrYCLk4hnN7wYbdQNiRXtcJUR6K5ZqPULUnhZNHMFXVUEWpF",
  "key16": "wVGYV7KXKcQ7JwRUkeFKNNbf7HEa9zosPNBYrJSQwDz7nzGUU5Uk5sCiN1m2DYuLgwwrAs4xhnWf3wTPuM7EMeM",
  "key17": "3GS8BFvRvYMifQrxRGmLQLiHVBjUa1NNCTc7AzB29zUCFMqHBLzvzc4vqK3CrjdAvmdfTbMaKYDbg3XMgis9s19a",
  "key18": "46U8wUJLAPbKZgFkWZuapC7hvCJvusfBx1rjdbbtmbK35RdTDLwaTjDWGqKZeztjPCsWRb4dkTjotwFLXmVdvwSi",
  "key19": "5c79Kd2Y4bL7bxQLvhbUkgd5YUDtN3m8ALXd2xaiPdCS1A8mZYSwTCR1pby6Dnm4fKgGYnG58JFo5qZGAZ3qHFgt",
  "key20": "5j9fMh3kXK9SQMu2pwPJwe4CoeykJohtv6ba5hPeJYTShRzW4sLSLue2K1n6RJUvhWBkkAPCSVmwH6nXZciZxiYm",
  "key21": "2ZuXExU7uQT2bSgWS8tZxpJNfNEuJ6dXk45mQ8waAEA9eJFXV79LAu54v2upjxMNFoZv8uYvKsMXC97BwBbvSgL",
  "key22": "3gtzmo34qRkYkCVgsjsFFnuS18zCESJkqPeEJsy5zgJcvjAsuNPQZdxRVNisrbSZhtSCEo9bLAZXvC5dsuUX2SK1",
  "key23": "3AEMn9R1t2cGUsAUdGs7EzakV4kCTrdSGG1kdbXynnAvS59C23C8AfizvFB7yTvGMVj76xjHYZ15U3x5nFBTauJS",
  "key24": "2wJSAYaTFWyxC333pYRxt47NdGgN2N9eh2SaXoRgWDFvn1CmhwgJyJFnYijvkY3ftW3eMTKos2nhd4xPnqfqjpfJ",
  "key25": "5dFTYQFRzWaQrcpWeyHgcBjRLTvXAPet5T4Df3M2oMG1w5Hv6hNMw94DSrqTjebkf4dka8bkPULckAaprPc2rnTw",
  "key26": "2ahgFwNmqYcnrLGU2e3sGVD9sSSnCEWqucijXSVGHryMwj13cZnXdoDKReFt2jUFEgAHFC7Q317gX9HUmMxghQrk",
  "key27": "2wQUTR5s4JBcM4Dk6bSxYq7AZ8Hm8GxJAx8vYb1vzfiv8fkrWxoXczzGGuqJtXLRq4Tww3wmXHECWHwLbgdC5CUC",
  "key28": "4dbgraRjf8sbR41qofg4Tc4YWcQuEgx1YSBhCb9ZywLAUb54mLnkUNWRGZ4qiTKULDdqP2e8yPT4EessA2KcPfgH",
  "key29": "22yM1cH3SVS8bxJfnXa3Ch8wQEQ99MWeywJLLVoFmd48nnAjoYVcpxLd8EnUkCJSgQW2QTAn9coYyhuTvHxLQJCX",
  "key30": "4whZZ28qnQE4eEPSGGaPJ9FMCzSco8WfczThuMMyNvogskN9Z38uRqY6yh7m1GFcecdQncXoreWTqm6ehghGR9oJ",
  "key31": "36pBRti8cyNQtTzHN4hZQ6XWyWhfmpXXTSomWXULy9wQgXwPTWm9bgnxaM6KBrtsNxTXP33WKt38t3jLseJtmqJn",
  "key32": "skQFPW4ZCjtQcKJbzULnJrnpLkymSmvkH5gmwQxP14HGJ8woVMmco6kkShz1FhHdvyYNwQFfbGKDFK2Ai7bKeA5",
  "key33": "GAhE2YEga13w7u3qCFKnGAxkb1eKPdETi2NZK4xQLEWFxgV1kvJKpL6kNmoZwMCy6XSJjXFVgPxDA3y9DfPZu9W",
  "key34": "4sZbAkk34xoFDzca7B9oRGxdhCF6tJtoA7c7tEBD1R5czBoZtU2mkQSBU8vN8gM3y6vMtPTMx3Suuajh93Tw5rbh",
  "key35": "3okMJgcAXYneiRgPg6DhwC3GoPN2a5xDbzyMXezvedjWTG8NKLZX7Qoa7c5kgp7PdaS8hg4tuG7yfHw7NBJoJJRm",
  "key36": "24i92mrH8YNVysEcKvqsob7D1omYoD3UdmYNpkKi3Vte2wPqjhPr76zy3ZJDPNJNGbh2btkzovJoiFnxg8Wc9wuS",
  "key37": "5BE1SjeQpMPwzmYyiRNNWs3PsKxCsmAaZvQP4eHNxbx4ZExteXWcUti1SBQaKqZ2KAE8cR4JPfCgSY68VLVuwvnf",
  "key38": "3CP7ph47eRnGhH2aV5ocxjtzz2jkkUTdmdRZ1JcMU2W8h92d1vPWdXLhjA7SBmZZL81VH3PeYyijsqKgi5vZEsW3",
  "key39": "ZEbxwhkCe2a8cXX5G1SzCQKcFrnmjJpWQKMMsHpDPqtaNDKLG7UQEGFsjvwA6ksptNtnSntCQtKDBHWBArL6wgu"
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
