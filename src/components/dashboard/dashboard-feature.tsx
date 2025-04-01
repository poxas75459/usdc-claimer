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
    "2VdRvFHuUHUPVoBXmeVpC5wT9StyQDDNXtEHNADbr422MYQt1sNCGSb5yecqK5cEBmMPrC4tNKKaK4iSguqR6Goy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jF8mP5N9YkCAvLavumZTqjT12EMyAJiBwjL2enWRBC5ZjevsLXMKvvmm8zyr2iZScNkKg1JQ3uSBp6zUPw4ySkn",
  "key1": "4p1A4KcFwb2JFNgakvJpzkFPoJ6fG7qpLpK18jmrHnVTK73pDGx3nEUBv7sV2Bb4BjYDXrCfQH1dT8daiUPNCtVN",
  "key2": "2dqQatV1f4eVoiViyurYjHv8F34GNzhcSdD2b22VGHLfSydZSTXaZnWXqkiX5xVGEDRw11PtjSRzHC4xQD5WtSwC",
  "key3": "5gNBf3q9LgxtudmCxL2tP5DqvmV9omAGxbYns6KwxFYVDQAVFrmMujK3EageypUKZvaeLQzyVfzZrjJSe9oLC1mb",
  "key4": "rzicxpmW2Dc8ESYH9faNVHnjyUmBvRB3DVW6m1Zzk4LyFHnQd8cVyE2x3Ft886it51cJedYtsxUDHTgLC2BLrKk",
  "key5": "2hdDF5PPbTUtNDSi6u8GKm6hRaoGo3E84uu3WtHJjCzwsj7PCVbSRTjVZrj8RufyJszTFAjgfZPcQYr3F7MtyWii",
  "key6": "4mw28eUWuFTuZApTQ9Ew2LG6u2dgMyNFGJUXtY6N55NZuX2Nyb4kCAJjvf3q5u7cAHcUzeHir5hiq7QSxoQvYQ7P",
  "key7": "2pQG51ABLy9GcgGww2QTcNiTFSWhX5UxZMW4SkKHYG7XQBmpfUg1et5YNdLywPHvHrNZpKQETP2WhxHT2GgjPKJV",
  "key8": "3tkWnZemMvw4VpJFNRC3hM2dL2KqKM5aTsvPZ7FxskBw3DgSgxNER6SqCEKmSUrtFiUSWpvxjK8jM2iopyaTPFzj",
  "key9": "48tJNE6wkwFpHaapbYjcvGcoMFdPNqaT336va8E8qQfRnbAxkUYejhgixbrikSHGyzYkpFeJ9soQnShyLJk7DcaY",
  "key10": "5982rwgsqL2RwUbtgQGpiMp9H321PWjeWTZoYxC4C9dkdrCE8Jw6j6tzcgZgaHW5AUt7oq9iMEdvFWy8qA1To562",
  "key11": "3YVAKjfpzHyfhB1Bq2hPJH4LQ4pmiCc7zK2DSiJYngji7dZryMCdqxGfKiTpahcXaWMJbUBLgXqvzzGKitgYabwu",
  "key12": "4rEswMRFuDATnionqUx5mr3dkEbBX6GXgDmxYVpdTe4UaX1NmvDJY3wn4SFW1Bawv7wyGjgcP6PgczhxzcBxd9ds",
  "key13": "2A9hj2jGQjtCFkKvLBhTftCDnAABrTMJqdgGW2kNeTbZsBA64zNMN4ChkTbN4WsfTdyfUhX9AHRCPigq1DAA5JcY",
  "key14": "4FKPwmMQJajMvfctVQunjfq7VtLVDgG4ize6wry3FfjdLSJNwus6WVtpvYmgrp8va7nVgKJ4KhnZgo5ihDo8ekJ5",
  "key15": "3sNYqCcSjM4pgyExKeuMC6gohrp2hxygcjhf7qXApdKxanRUN2FDKXceWxmojWXKjfQsKRvybyFchEc6VNNbv6sk",
  "key16": "4PeSBjFdTr85r8mXnt6KaRF6jeNDj3af5cTZr5xA1ZRoaK8eXZQHM8K6iptUQaa1EYuAFMpMfP75VZmAKJbhHcFB",
  "key17": "4kXdWyKQ7w9Y27LiQ4mta6Qmbz6WJoyj7YnPeA3ydUPogEpwazCw1g8Wde8JcSBCfNnXQhehMsF9KBQSeiYvoRyP",
  "key18": "587p6b5RNrqMJHwSnBB4bCf4XtNcrRyoZUpdxcjCrYbmxDhmfDeX6Yd1Kgiwd6V8qRHzYoYxe1VjzVNrA6ejhdbr",
  "key19": "3eUg3axfshv5XLaZo2CGJLBtsSeoS1rxjKjnmHkazGhbmXQjY2fNYP2ddahwPeqQ3mh4vxKh8UrSKh2stH4cCuEp",
  "key20": "3Noi6bVpiGgHwGMkWFWnmpevPAPGdGNaFqvzDKVzGumur9BshHZDwYFekZ4FvRQFnbH9w2ihpbViUEnhLWF5X32o",
  "key21": "2kxVM1Cy6EGhbJ7Yorz9xQEm6YRLyy3pck2myBHySUG74aF3yq5nysZb4gXhozBnrE7aw6QMhzZaxFaUjuLa2ydK",
  "key22": "JjW73JGrbqVuRYjr888BpmmZKFp4QSckw1VG25gLvBKQBogDrM9aSPL8ySznf95f24RuQuGeoeta6iQ9wyYLRyn",
  "key23": "YNUkA81KtaKuxUWoqkfJhnWNuioDXFFMjNYBZ5aVcsvTAVN1XStz4GHqTtyxY48qLb5Nt7cmxeLjPJKMtNTjwZx",
  "key24": "2Tfb15BWi7xFVcaoexuUj69QXThbzBvGnvDDxqMH7XMNpKDTrGbD1Nz63acahyEpNRNen8LfVYwDcBFSCv6LB9Li",
  "key25": "FvNRmKyU66sWSM4DZMFDNTk2Uoa2Zqidfk3rCbcRi1mcg34dbdKajAHn5pu2epuDF4kYowbCSfBQHa8SJcoBYod",
  "key26": "4KwHPf71gQFdHpU4NYubBBDdcEVRBnoe4dEftwNFyzPXjsoSHYdayF4DfGLur8MbosxCt3kemGTqyjxJG8wYkQhr",
  "key27": "2oUbbKnFtozjJVVs9BjhFrouH6ty7TFTUjLMk6i1KBdGtVrJ5GkLnDiXb2tZARhVFi8XUcCVcWnZMpvK11TJSAsX",
  "key28": "3aBbB3FFeBwECdEUdkHe7qWp99qQxdcwdpCSBJyL5N2oHDwbFmzFLrox2uBENDbm3mcM4tVJRp2DVN6DaPNbcVuV",
  "key29": "2SE7EWMkWVfnZRwXwq9i36hK4sFsMqSW8xqb9e29CKx52ohsXKiKLssxnpjXwcMyQKdV2ykAKc6GhdMwxEAmWTfr",
  "key30": "2SG6f9jmzRHwPSc18sTwwwyVK2XKJEzhtsmhCHLxCdbhYsoXNP6Ha77yeMh4pzCDtxY9HDXc12U1dciRjeqX4LcD",
  "key31": "5c8W7tzTGXgje42YPDz8wgwPqVipgCkjL4T9bENwrMmC46VmeGhLPaJHCnVM72u4iUi2Jm5y8L7JbarfXBP6T75b",
  "key32": "3XD6Pf1Tt3MuNWQtgdZGTMZ4a9w8nn4vA7qEBj9J1QYbcY3uzvtNvGodkqZiCs39h9S5N97rVHZh2vZ1GsUxA5qW",
  "key33": "38y2cGaRBo3yGVgra65u9HMEuyq1X93ja72u1THLT2u96zYn7LQBx5qhujKNhAUKHsiszhdceFhwzwx9MK2CBnJx",
  "key34": "42HGLdgKrky3h1p5MBAfuqQ3YQcuk9uKPbtRmKnTrrjowixCvcbmEqYdJPGoMVTD2dm7iPacETyysPayXfgPaffd",
  "key35": "oyxBSfR4Q7KXM6WzYwrJNJxbh27RdXrAbojpAYdZTkttxuBPLG7oe5CFuXS39uTPmWo7DhekdfvsLwnd3r7rZom",
  "key36": "4Bj1EfBV7U49khpeLHTRzsqrejWav8nnmpD5TXSFEKUWo8aZcjQJdx9s7gKRA2PgFFMctDYXb5TAbBbeTowJ325m",
  "key37": "4cLBRDPquVkdfV7yg4kRLocCBCkUJES36NjisXEauSjYiafPgszgoXmJcBx2BP7VCmqBqCURFPfr3dBpd5RAq7BX",
  "key38": "QaR5GFGChue78Q7CyQUMZGxcZQ3n7RW1tD8LdK6NJF2PBgtW8zEyDASphM8odzBiRxH2PpRdJ18anbzqdpG9Fxc",
  "key39": "4cnDfCaYcFwNk4gA39e5ss9UEvF7UurXxhb9hpAgWX7srG2is86aA2cR4edmTtEktvVxBdkJz1aroRSQMMnVriSE",
  "key40": "3DLqKfwWa9YcWDwNxpzoBfqakd2ngSDeSsq1bqgy8vNDBnty95k59G8PLYmozZY2UHsGyPuFtTYwUFgYW4syuSbz",
  "key41": "2RFxcTGmgXFhnh33zJndM6q39j8EZ3kRD9ffh93LwP1xC8j2bRAmq2amjcGxfEdbs3vh93tAYqbsBdSYMFGisFog",
  "key42": "5iFEhB24GGUhGL4xWh9ULMNhrfDC5MLXyg49p3LakjfwnP5yoFjEy2PhgY4rGmAeQ8c3tC2cC3Jz4NmHxupf518C"
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
