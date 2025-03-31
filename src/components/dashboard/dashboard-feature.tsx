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
    "4Lv8FcZ2weTjXFup4iHvv9zhhBm8UbLdYGoBUv5hh3T5NGyYUgTt6UBdPTa2RPWp5T63jrfNGhcAyjjTowoy3Eoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNYJxfzr2BTQDNseZmN5rQmWNMQd42Nbo6pa3AhxHs2Ai8cT6zdXZzqVBSRDu8KBFdaShHEqT6LA5QQu7qNCPMw",
  "key1": "2r6M46jC1TkxFunbCM7yY3YJVPPdPiN97tLvzRxzN2EeSYpP4bH3CWyREjeNxE9xG8KDeDSScEKDGZEdGT6zMp4Y",
  "key2": "2f1qKjaeuGdRsUTT7CBbwXSbK4vyN5vxYU5jgh26pqYbduNhGpFPspXxZsAtCzRGtXXJ6XULLWiPRJ9dbjRpreow",
  "key3": "2LzHdRG9sMFNWKFu8eBa6McXmqmyKunNg1ibhLtuKdSwxxSttJ5ULFPgqXgbwZKB8fVYuEKhszizNkowGaMk7CB2",
  "key4": "3s9wCzYUzBpTs8CqmGT7a2vf1GjWJ3Y7Hd1kp6SuS8KsStdPYauU46ShsAt5AuhQyDs66mRH5tjtV1cEqQHXS8mk",
  "key5": "3n3EBXHxWZxXPB4pVnQ5mJftJQ4Tkuc2TsHcik1nUQJ5G2iuU5r8CFoRTaM1qdSevfhynVA5mVihVz3EoeoD2YLm",
  "key6": "1HB8AhcLV5dogUEDx6D8tikjXfqtKdmuzhBcjA85o4rW1dXM8i9bAE6PC8xtZhpjW3PvpKh2Fi17yZURAMvzH9h",
  "key7": "2cxuKjSKeYAewXeJ8CRM2MzeaR76HxoUGNKngpX5tx6yPgU19BbwJh5RJs2iFMmmv5TgxzdC7rqXqjUG2FjD7Sug",
  "key8": "24hXjMSSJh2bzyQvfRh9fHXGpnggVcjjYuv71aXkXVo2ddUA9VCuHEzPKuzNZtEw1PtjTpDGHjo3vyQkXsGhi787",
  "key9": "49hBesZf2t7weQCFA6viaPuLxtUGHLvhd7fkQ7TSE2os2TrCmLhUYxTg1WjyATTPo6a2Dk9vjpvdLLzRJ4Ah4E4t",
  "key10": "2PYV2Yx9ysmgRmjJwBqy2VqHbG5BuceF1vPi4LohEcHXxrrB39qGPs5dmEwzt8wCsJqqkB6wc5Hbe94JY6b8wCb7",
  "key11": "5jsvS5UAzK28gaU3qG3p9hpLSbhnzapZbgR9HK73pjdKWGhbsSteHPXuKRdYD1uoZ1unmiFnWBRxCh2Eu6GzfW4n",
  "key12": "3uHCSPEH8dynhqsJssyU6yPnYM24Ti5vWPLNJq9VZV1WWrEkRJpc32QhMG4XmxNkNR6YKemvgREmJdBmT6bfaKdR",
  "key13": "428X51py8XPbXSs8sY2HyMjSNTEsjvsKnnJoNfrQGqmKowjkyRgdTBTzSgN51PSsZHxa8G8t6HHdDKaRYTT1wG7c",
  "key14": "WBaZCiLbfnuvbHprmf37ek8dPRdj1Hz7CE6Qj9v7Nwgfi5g4ZmySNGBfHd8APBvXahSsL9oV5yJv72ocuWfgLqM",
  "key15": "qDb9Py7rN27mMVR2ZRw3XPpLHRZJbzr65E7WTBerpnc4cxsrhKD3pEDyjwSB4ZQit2cHGyGS4gxgSLykSvULqzm",
  "key16": "GMnPCvjdHTm6UXFFx9MLnH9WtXkSWpHh3ADFafjoqMNNm3hzYdYtqFCTcsbasYT6DP65LWUh2fjVc2icZHCra6U",
  "key17": "51Hky3Zi6vdfufRDVqBiAHBoujr42LEkv7BoKnRrnnKGQXf1TX6V2y6Lvx7GFSiUcyB1UAyT57Jkg2wCjrLut1bT",
  "key18": "2FbrMU4BZLpdmbdoC3uZHj8SCuTHPFhKrzk4hKxxW2FrLBhQZKzS3GMH9z1dgKBtGw8vdBs9gdATYYRY7xJuWdDK",
  "key19": "3MRVLgGaFCXBSVswUbRoEofgqku2sKRTNUr5wkb8XYHcxEjUrWW5dCPBWGPwREUD7iBfAPXGgDKNY4QTni3r2yqH",
  "key20": "42MeqyohW3G4qABy7fmcYmutkf4FEqqGndh54ovy1SDVKaizvotgUdw9cHTSded8rS29ohH7UnhR7niZJY5K6PzG",
  "key21": "2n4Ao6zf2xUVs9bKyHqSgMMN9BtRhNhVBQRwonoAUU93xA9Vee5K5hSSwQRvZiXybMoAuk94dakfqPHvHopaQhiF",
  "key22": "2MwvdyYzt5Rfz7hHjoTjpc7YW79pUwTACwdeZB5QxTJbetzAntqHAjKqVL3zpQc3gpL6npLCnqnfGyera9WmP8yV",
  "key23": "37GFMR9v3PvNGm8WYLTZtBdmFJ5w9EzHisCvq6qacv3hb28fZ9uMKDLpJCdmaGnPizfk8qWHz24zfZBJy53TuD5o",
  "key24": "5zwphzh9DiRjmjrtnyWCUHwJQZ1LoNB8fD6kDGjN8SJCjpQEG7Nhu2BZ6bZ4zw1Cj9gUEokhEpWccvaZt19FHVRf",
  "key25": "5wiTHTtVhGM8EpdK8cqWkF92XGGoTyVDZFvcHcE5GQ6868WkABS3FsYzf5jkZSX9ssoYiVMLNn6sVouqLc8PW8d",
  "key26": "63GQ9fBrmH49Uthi1V1UmgTVTsFdFzGHyY8NraEYqZbQTEpfiVunNk3dddS9EDawneWd6UDULVqYifFqRNyGFd2F",
  "key27": "2e5qzxTd3eryQwT6EYuQy9Ykk3Kd6tLnhUVL8kQMLFeExbDyLBow4FJMEn2XtDhM6C9h3zK3x1LKC1FQkmyPoXNA",
  "key28": "2KKrGE1aWoSocXxw4jGwkMW77uwqTXqHo2QWEz9q9ceY2yFAWXPDpP1AraTAern1kwWDdVN8icgk1NdXArMsC6D1",
  "key29": "5jdVNWazpQrrKD1uv8gym7DYeiZSmustdSeJxNUHE8ieanqoU46waB9NFPmTY4Kvo6yrpPeazstjLwSJJKz7Jmxr",
  "key30": "31aUbw9CRYyppngMi21C82T3sNKaTpi1RbnqZJwCPbNUuZ7ZRJc7AJCpENCzRSZLGE8THbzLa4tFWqp5pZWm6AoQ",
  "key31": "3ymrKgPRDeyVpAayr1PAD72soJNekNMgjgKDAcGyKKTeebfiqa7v6Bo6LDJVYXyGJNrxk4h4DkFzHGTuHgusjWUa",
  "key32": "3oc9i8nPYYT4rSBFxTyqxhjnreGxJdr1ueME7G6bPtUWQQzo8qXmo4kyKpz2LJRfdSMAQsXaXqpC9G9TLNKLaUK3",
  "key33": "4GMRKyCS8u8QjVPWEo5GwA3AEAzhv1RJGBFEwgMiAGmgyP8ubZyEuNJU9svQAvrbxpemq6w8jrWpt6qZktBnTyDD",
  "key34": "4KrQMqCmUhFyTCkz8xKhFwLwBdqZx82XLi5YUPEubgvpQYaDcCvYPscq3WcQbqR8UovqasGGPvu4RtvWiS46ULH2",
  "key35": "5M1JRzd35hJekBXFLQdSGmFzL7KKhzuNPL4A4Hs83iE4KwitSjT67pEXLsBHqvsSgjTd5wZx4SijMGpgStXx7Vbk",
  "key36": "3X9SaAXKW1HEkqvV5vcfUMtW5UhPQ9Hh7UyizgigHnCfojRwmvGU4t3M62TgVc1tXJRjA8kdX5a6hZwM9WeypvJD",
  "key37": "3m2Qff28d5C63XV9R5q9aq9huiSKR3LPBdfoJzSQDduDfDmJ1jQaULPWjgfizG75RDqA7aqLCqihB1ZtGi1YvP9k",
  "key38": "45JXRnrsyoMW1vHo16Uztgk9kPd8V7zDUiVBSzY7UDbijd2u6gpcobD8WViwHNYwgEZBxxCHdiLRASbFrQN2B8aC",
  "key39": "3US9F2sTW8xh9KGjGvoaJGm2LA6iwYZUvCDdyWeHEGKas1qbwXQjuhusqULQfeSe1qcSXTokvczAVTqrUSyXHDGu",
  "key40": "2ubgsDXwXTX1fjaVxQZcsxx57ayrFsrKFeVMUVmxpVNiu29RGUZesuQMJLCi6J54oD4kqkh5Zr6CnDjuLMtvhktL",
  "key41": "2WPn3tkdqiN5KH4WMQsN2Zi75SQCrbGdZpKCRiDhHuJYNxV6Ckftpfa3h8g6PX53uk77DU47w5TSFE6ACCEHJu3E",
  "key42": "3F3t5MC8QbBv7TjEoP35aMF2xE64Bozxa1j4u2yv1m8qg5aiG6fXzupu3iKpCWqUpyFnnFEsbpSyKvsj3mFvmSyi",
  "key43": "TFCwHZyozEeg2ruSPpVyRG1Ua5mhbJVQA1nf3wuviCsTB3k4Kzy6zjthwPHkJSyFbHVgx558wJXxyGoBBjMGWTE",
  "key44": "2csvE8sECyqSjP3MbKNhN7ZQfvWzZ3Cu6XUvjaRgajw5dkP3aj2SxnpjJ7LZW5zoxjNiEkK7H8RhJsVnR5UXeSKJ",
  "key45": "Js6bkffmExCgsrFKZzofxVyapf6X3WXdgPd1xcAS1XjE3L1uVgZdSxJpo9W3uEZBe19tMFxNGkKvmACPagAtHML"
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
