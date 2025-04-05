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
    "3pffWtmAz23LPYFh7iaADvxeBmhAkj8CRnxzTqdFPGaPEYWkuBCudBJ8wae4ywRrZS3G22181193QCxFjkth5MCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkui6nWt5xMQbpKYRmaj1L67LuCBxiAuFHbcrmYcBiGeFQc1KKaE8Ymv4t2udQUDvLtMNwvdKcoLL985JDXzRAw",
  "key1": "3UgnGXsSLXQVEoWmVe48T9kFhSF3mq4XQqcufLKJmQtJqBfXDn96tuPEmYqf1SaxJZBBjNfRboNjZrc7geZqQXrz",
  "key2": "xtHpab2dMr87Bc3iycAatF4KTSVNjXM8WYU9wUmJzrtucrvLqssXye279nD9zjKf79urpePjm2kfiacGYtcpGbQ",
  "key3": "5i4XqfBT4qDuX6DAKdnDdCWdRBcXvfpAGFN9ShnYvrACtuBPYUBNJVbg9JNKKsaxgTnDKxLZcMmGpxchoCMAtma5",
  "key4": "5cDwNP6cyigLWxSLHxRVxdfWAg5E1iea22qponQVfbfpckUALisbdphmeCRyyb75ZGsQctNG9ADL47CbXYjjA5AX",
  "key5": "XdGQ68LnS81qJFfwWSikiaatDbm9rjjdXEaCfqt8P1euLX7qjexMjaVEqXESi3RMDnN8rr46SiRM6NRrBqrBd6E",
  "key6": "bXeDkT5RtEiyMDKyWoB3Df1fFmJYKWxtRojfuNe7xB9KJkCr9Esv4LUCi9d2v9dZbrL4aqkjZ1N7RmekhMorgP3",
  "key7": "62eu4ZDNvYWA5iDF6vu1L47u7twtUZjw4XT4DmvPDuGpvKUJKbkPepCNYUzvKzjPEYvFNEhts8jao1B6Z1pfNoTq",
  "key8": "58RTNs7vTEfQKfmEKPfdyHux8up62kEVfZuNDrKbbNhGXjJNeHn4V488mGwgpcFtsfudkAG78Xs6WSinrt954JAp",
  "key9": "5RqREJo4LGbNcmsgYcbSNEoGUYbmUTFktpbg7jcXwuFQ3u6XJNzitwsRZbLawdedEckHjeq7ajq4ZaVt7rmhRM1P",
  "key10": "4j35cxth7jxBrwsKdJJKY6N8T24UsKPrpL25VAcEvz4m81xpZdYVpVthqefNSGhDCdCQLSt7SaobB6XVieVTRn7A",
  "key11": "eAYjPRcf45sKRud83P7JYYf51p3yc9S38RBECV1fCHBbxavHq18v3Mftt5AygvvbugqHQEZbSwDs8FX5C7Fwb2q",
  "key12": "4hXJeTPWARYkT4F2DhYKLaJB8Mx2xzh5ZmbEJizr543RGuQAE59XxqddYQdVpMabpsfw149NjYYwU2FFtmnfyQEy",
  "key13": "4o6i2MuwisPR1dEns1KX1XVu7RT1KrTFsBf1QabeEifWJawTwxAyvoPWjrZwPzGYyPGnk1vcckPsLLN5VsSPqAg3",
  "key14": "43cV81ku12Y4qjsLeL64CLZRTtffGdjB4dmcbBBXUN47QTpG34zHRnTqW1n45yj6vcEgk51SvPzMmY1bwFoUm89p",
  "key15": "5MN7nKuceSj49KJBzYwHhDTHkb5G54bAU4mgPCxXf8xQQnadJ8ReHz5e59vJr3qGt4kbsimy2e1dff23iPsaEvuA",
  "key16": "5NgsGEV1osALbAVFsMuJLtiv8grzjRNBSUtWf1CrcUeCYfk85jp32MbZhAKtbzHDXKpFHVqFcWw67FLuPbrU1AHM",
  "key17": "4zHdZ4xqv4g2TkY8hsyNGqw6JgHVsLnAM4b9pG2V3HyyqYXonBQ1KkncVR59gzzeCtscmDxpdNrmfJh2GrzsinsL",
  "key18": "3sgr1VxrQ6QuXgryDYDE6VZqWV7wHxHfbm7AeeaANW64dfd5U9X2H92BaXgG6v89tJ4vBhrs7inAdQq67nXCEVU8",
  "key19": "2QKrS8c6j1pNdcR8rScQxft4BdX98FkbkFLjWmJYHLWPmockwxRrVCKmNyJiPNf9ZdKS3Jqj9zGTMzKqndgAhHzH",
  "key20": "3UwDkheuPHcW4cKwSdx1yvdxME7rHmJQQaiXZxkmjMXBUbZ76wRpZSJXpRYLLJhNLWHB5HMWmcewfptS6yqiB4xu",
  "key21": "dxqH9214SWnQi7B8RSaMnwWkmgwgEwKGjxLDVs9LbGZRuEHmNsJ6HRKkeSUf7EW9s1fzipuMnYTVYoSt9u8rrPf",
  "key22": "4gtpvwBx4Cb9Uxhr2V4D8CAQkmuCFDbzUfmhNriL6PXquzmUhfPQZf5mtqjqo5stV9GcEdn5ekoFf8q6fDKA6Zi4",
  "key23": "3pdeAXrLygUuKvNE48VSNbn4QwpkvoWyc5VParQWpBa3zcdaLE3WZFPnMBzTBwMhggC7V85o1t9yhq5PXYTc8jcJ",
  "key24": "4CerRBmowSvCGedqEHzL6xN5VEQZdVk6aKhJSbfL8sWT398HX2JeyM99bu7tu94XVwTMNicDqYazB3bYBCkKkCab",
  "key25": "2DLT6r5V88nkqe47wYixfth4Gf3njcB7wJzcRm81fQVSCcBnBVtSabedZhbbK9UjmFoYkNUGMUz6armMJmpsqqJW",
  "key26": "GYcs11jBAprwrGtwopBAW6mcryQHKoC54hdm1mubtL2qaKyXwLDjCBcRwAyPGkHAZr2UyZDgAdPRgHGhCMqV3dN",
  "key27": "4MBBuRGM23AN66XLa2mvZJ2r2vzZmjoWjz63qpz9RYMtHnWLBh8vvuuKq3Vwj5oLbD6wp5mfMFHbCzaraV8LmoAz",
  "key28": "NAg2RuCyffWZWBmX6XJo2m6gEmiTiCKLUxvmupFZLrvXtzHyt7TQVNMqW1s2cUprcGWLLqkm4WuN7FdScA1CpkT",
  "key29": "3r5bVzSsGPaNUHkYNdJkZSTX9f3ztAt6n5ZTFQDu71GXWjFRPusEwk3QeQnJoftpxp2dASkXE4qXvmC5KjyfseJb",
  "key30": "23X4KEbYghg6K18SuyvLr2THyKuGpnbtfcnJipiRf85X8cFi7T4pBffYbMPF8kDni3jbAiVfLjHKtA4DfRvDRuLe"
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
