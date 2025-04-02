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
    "4gtPBcWNDL2LvcXmSkMcm3Xn88HQsNRFitVRhTHppgnxa3nFua4chfK9UsEfyCF2Vvgj4D5vQiD4QXKyXMrGFbvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahnoFp125GnZoxQVexp5wDyPcpsRN4pgibnSV89xMuRzT2HoL7e9jkgmJ8wPt6zFkBSwe7YxxmGTAM4CuH2JeiB",
  "key1": "4D6zNtVTi7VGzdLCNS18qhdUsvGRjUP8LbKQxQpU8fmiJyTPKuq4JWsgKEDenYnUDJYoL21ogEnCnRbeEMH91XJf",
  "key2": "3R9GPgAjveDLu5h6xVK71GMdsjuYp5yHDSbszjGPUfeM3oaU5x2gDKUpNh8NuAUBNFD1B1tkRX8r3JSfPh56C68k",
  "key3": "kePWz8ECmgnRd5USDgkhxKxsFdjoSXN77qorjdPbpZSXXhfbUH5EqWsRDjjVYZ3Vpj3hG44aSVgMHbYUh9RqRhG",
  "key4": "3bt36QjcmDt6gqTCaj5ZiUUpMW9tZzksoBqmCDz2addKugJ7dPThJEX1ag6oguwjUdcbcm3ZWpi7kZsos5Wedyin",
  "key5": "AqhFU4pmGdRFm4kmRdUGCTxm8qpKjEzzVsA8tDM7g2Fm2DaEs8pNyyTnhs8mroNY6YYaFyKKXj4xsA5qvbFuTMi",
  "key6": "4y32rERZF1d4drqXM2A6MAu77VZZnh89hkQuyYkmBA8ba97ase8K5taWy81HP5vj6X5N9Zu1HuhYsGm9yjEmbGtv",
  "key7": "2oRpxEuXdZMsfxtgpqX47XQnwEAafsazdp4j4e16rc9ij4fv6rqXqHyEapjsk8fwfdFTg8NRPYTC192q7PoEsaKb",
  "key8": "vSXkjSPv48ZuSeTckAah4mqhEdpJjGUUvQVe6hFTcUKjjv76wFWkW3xdTnnVXng7ZLjrAuokEaM5gLEGWv7uLeT",
  "key9": "2kSwduq1MmvhAECXAABpVktLkRoGZwjf2DU7YnUwk3LYQZ4snsgtZVHkub9zjVZfNcpKMZJpWdzFG1dGsohkaTrw",
  "key10": "ZcKjhQHM2YXcAsg7RQPd6NkDnuWawtZ9BWsK3v6iEYWL6ZYt1ypSUBQm7RVUe4uuq52EstHY55mnqjRXYpFr6EE",
  "key11": "5w8sKLVuc3qWUZnobj542Tyrwp31Ut4FuVYazSeT6BKs555P8bXtMvdJ1W1mds4KcK1vgE79uHukgiZPytV8P6XP",
  "key12": "3VdR7ahR7eRPGc4ymQkQGm6d8KPjZkAKb6Qx2Znfc5JDwFZxHeGSPTQudFjk8G6tHwpwoq9jXVGUb4QzySZXoGu5",
  "key13": "4DneimP5pEUcGGrHFHeqE5Y1JtckUMTWLUVyhKLKY98DRhutt1xE3Lrkx2CmpM4WHR8HKVTYHYeDsZt6gqgWigN2",
  "key14": "4BPN57XF3CRHYPRvxTQSQwkVsszQoimYeWzyxx8PHvu1MFbdWi1d4FGyEwgSaXFiHJWtEVRixgGW8QcRzBqFxbB6",
  "key15": "62RUyVGXAtSkRPVCo4QPxdWyqcSTe2kJDYZZq86xcN8o5or4FuTcNuPLJxeArx75Tj6JN94T9gHNHAqJSfMzPxV9",
  "key16": "5vFNPTdc4LsuNaGDNkn4cqD5j86w527NahpUoFrHxTESV2J4aPMz1dQwtf7vfyiaBfSfxC4KhgMsDCLtqDyf88vn",
  "key17": "4XE2TQBYBGuTmswuSPB1UQjgYBG8VQ92JuRSFeLbXw1JYo3pZRzQXbynGqRdcEBrDabhxsg2MJqfEpBRUvwQVdYn",
  "key18": "2HZgDoWBe4ivNsHZVtPYK9oagXhyPqf8W4PPhKQNs6piFiUJvNt5yC3T2xpq5aSXE8tiS5rwb38hR85Tyu22jHsr",
  "key19": "5VCA84Zn3g1EDEsj6Ki2FSXYtxVB246QJYHCfjQJ64VBx1pzNtnFdAk9ni6jeRZqoqoAJE9zKbkCfQzhcqvhvgeu",
  "key20": "5KgT9EghwMbKjxL4X7dgcMSyH1zCDZJZ8QjAMfaU9ubKXVAukutz9k8nwsifcmCtse3Y3XRHKVEhQUv3bAzVNUV2",
  "key21": "ba49a7gZ4xZMTHyyXbBGr5a8nZy4dGnFCRbDj6pzrb322HA6fWcxopez8qcYh9FqF3C5bHWfGJMoFwvq3Cufi6X",
  "key22": "579LipwKuvKgv7wFHB2BQbcGQYqKhG8rTLsHzHUEFzqfvyRyrX4ZFnELJg9pjt4EKzYXSbNPi1u7KZAUFSxa3CsY",
  "key23": "2BxzBg6vQWEGWGVs4pWWAa1GgAuB7uUt5q3c78rkwWtWdRxFRxtArESh4DwWNTa9FsGUDbzcEZxnZPSYBMwJHi8E",
  "key24": "m17MmJoTdNtkYPBaYCGTkzJKYqngpfSftS5VR9cQCBnuKfKdDkvZCrEdjGUXBT7NTJbXE2TujyihqiTWGG4yt6C",
  "key25": "3gcsgnXRcURjq9KyEbQ81msuhvbH2Wf8ibjDhV4ihzMgAnmWgPhWdE2dUqg7xjVf5CEmz2eVRcfmjX24h1JxHwbX",
  "key26": "2QyHrbE3w6k54XNryyJ8PhPqLH4H5UyEiwnFDxXAeCRLchEuhMzRMg4h3rUFZB5xmcWRwBifevXKyUkhAG94nkuD",
  "key27": "5DWQDjG4Fw3phjWSQtZtwurUc7HbMudjj5DW6hS6GGUiSvMcqex4wiGM6hbfRhGvvVaexbjR1wvL7n58rshr6DoQ",
  "key28": "4KixmRDaxQGqHkq6J586e7ehBcSZ5AWpGojuRhNAtLfC2f1RPjknCotAQNp4LYMrLSH8Ka1ZhNbnUKF3H3pcNiVV",
  "key29": "5RvCNybAXwDRiDkTskFqMt8mSdfzck8cKnVwQ7joNuK6pBh5Yq9zxaWFFrC1tHekugN2yC3TKiYmWKYkMpjBNfF2",
  "key30": "67VtaSDAxRKYE2M2VtsQSezpa8WdTABVRyGBYHpe5woiJMUchXm3iP5hDpMybxyEj7G1VqdybuB4fi8Pj1wagqT7",
  "key31": "3qHscXufkTNJm4EgoBQ8NpKJdHcGKCy5C2pzoYGSKzdtsnDxNjWoViinpMXLBfTkBd12ug9aB2pGT2TtKHp3bA5w",
  "key32": "4C435jwxmhpXcHdn4aaCSbtqMhLwhrY9gHKAvoyYc8iBiiqDJUBjQxKeF7h7BhUJhRqE1irvKNJS7t8DVo7ew83t",
  "key33": "5y3nDzfwaiSzjNibKbmzL1xDPCcrkXed1upg7V4sieztgaT2DwH8BrokSucDXEy4TENUnKf7jkqB5YP9NLZspZpV",
  "key34": "3qadxg6QJxWRQW3K1itzFNU3wHEBV8GuKafATV2gePQwdrk45PXA4dfeTBf6oxoSnuHBApreyTzktrUEuipQbyz",
  "key35": "5M33ehMgDzsREuWW7QoS3mUY4dcf9Dx2yuPq27AP7V7hdXbyt1hd6E46TbPzRpYQSxnCkFh5zSQnbAgzXyKWYdPy"
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
