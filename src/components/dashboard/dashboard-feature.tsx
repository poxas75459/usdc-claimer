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
    "LnccUFAsNdnvjH9GFeCHvSND65fJkz2q7YoUiqx73kSXKYeHLQFH3izaEbwpwWCca5bWMbY3us7hgkWJcrdSUbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKpcBunkV6CqkjbqooDFapoaLAX35WeDrwEkDEhnPCDRUusbrrrLb76rt5BBNzR7VWU4kcaCQmYXiS3uia3eV7F",
  "key1": "2xeFx5YCWCbdwK9WJr2H1PLgqs4iPNaGzyNnySZ9Lyz2VHnNHTEaJ8i9Yas1ip8UDEcDgoDC4xpmCaKwKQo7RF1a",
  "key2": "5UQvKEfeYJmgeyRPkEauHdzsxj8SqQppAXYa1C6tzTV5DUhjubJAUUhuWKjTEQiu9t8wTqGbiL6SQ1oXUWFu5AGc",
  "key3": "2VuBjHdkoiTnftHpVSrJLK3414o96kMfqJSoipZfvW7PNQicp8tWMNUV5CQBDjbHCPNgoA4MdZcVvN1Z1A9L7bcG",
  "key4": "2vVexK1f8XojutgeGb1A279pcVTbdXN2zRAScx2RYhsC4KienvFaFgkPUo8dcxKvhbDDzq7p9dgikks6qd9DHX9K",
  "key5": "5c1kuYYDRzseMX2ZU2UZAgsQzeG6h6kvSYzSbtvm3HEGDnHG9rYg8jz3J5CEDTz53P14MnLAPGAWFsEpfTcqB2nw",
  "key6": "58F5MFtVMCqXvjG5ohvRoPj7LwQchbhXUhwc9QT5AaxugdYVcrhFv9sBQKoYTqvRg3j4nQcWpLfKEY6fzAmKbDcG",
  "key7": "2noEhsFEDbEyYxDXmvLupq8mTTJMUEdgdQdstnMKNaNYHRLWKbdNKKPbHVULKW8wqXzCK6XyGjCkS1rsHKCqfNzW",
  "key8": "JHnDnEiqynZBLcJSCL7ZfPZRYV7qE15rKUXraczpcjm3MfVcLHJ8BNthVmSGmW96MQu6PUzLepyA44WfgZRZyns",
  "key9": "qz2XyGQdUi5YQt2bYhLx5SnvB1g2tcMS7utk24ZGPg8djMN84hph8LSwx8BRv9zfby4hyjJe48bNJoweBFHv8V6",
  "key10": "31dzCEbRce4abuC2Me414mdZwtPxfaCXuPzWcXwUcVVNirapLk3ogrQjUY67FPtxueFuKopm9kamxdCRZ9d5Yww7",
  "key11": "5hZxqbZnWSKQQPEuXJyHRwEmTx5ww2wMY2BtxjfoeWpZjEK4EQSYzX92y7NpYed7vFWs7UHgsgyEJ1uVJDTgTc46",
  "key12": "2VBDW8i3SMgQTcqBeWHTh8LvrGLNBYZte4LqJ3Qg7E7yjEtNw1eXsQUUDsQcmNY3U4pWki2QNbprXFFX4oqESZ7K",
  "key13": "2rbwBLWmg8WkdqfZTsRyHP5adZQRXssFxfUmDk7UuQtbDpdxjHo6azVGiBbbNM5jWFGZLxKqW39mCdbST2ZrRLzh",
  "key14": "2L7WftzmZwkmsKwqi8sP6w8TPdjHq67M9Px72NncswgQV8rvtXSDyS5dzyKGxnotzDKRryqxBAfnM5VEAEoWZgfb",
  "key15": "Hdto3Eb6aJqTudHt4WyhWMXDFr3ntRH4jJadou5hSExu8vB2q9Ci2QSHSHP1sRi9vWFGMdSKWiWvUD7jcLmsZ24",
  "key16": "3ESUSzEtfnGvkQcNQpH3tgeTdLrhTcZj1bBrZGsrAHfQ9zmkTLEbS8q9B2YF9iCaJU7i88rCk2xzeXZ1M4UDcMwB",
  "key17": "2RmaZYfweB45s8RPbnQKPPa3jdEr1y6ZfaHiAMYNQouvFw3Je2zijiEME84uvCT32UXfUUDY9rJiGVbu3mMn32TB",
  "key18": "4RX4kJwcvCAg6YVk9r5vaSXKqJmwEQP45r11o5frfTvipKFjJd5jbgcWoe98q88yAaZQJCyotozDuvgY3oPfxHWv",
  "key19": "2qzfS6T2bqkYU7SQhhQSVX29RDAGrRd91oab6YBcK4XAGbx673cgDspjSop2rxoenHUNEeowKhSnzfhcC8SfQ6sc",
  "key20": "2NrMgJPv39bYcEHvqNQSUyRiAD3VzByFK8txtxnFuhNDrTM8o8ktTHXRVeQu236hG5Mv3VwrQpHHw6BuSfE6KokF",
  "key21": "37PJ767VAZcaZkWFDTCFRwQ8mEegBFmB5cPpYsPVmgJLGNggwg6HnDRZRd98JCJYUHUmEr8ytbopFcAckxRSRnok",
  "key22": "4YM41HKzGQK7F59n3RdgMY4Fh2RmquPexdGCjtRSf4KdFMsrPmHYxANP2phjciM9Ucj52MGpqyMWuHLJuAmCZcue",
  "key23": "3f8UXFvA6JKCFo72iL4nze9oxjbf9yMtRRHc6UYbpy8jQLPsfWs8ePzp9Q5whFPwckF3t7ievydhdod2nq7RX4hM",
  "key24": "55qMZ6pRf4ZWaQ1uNXcQdSjK4JaS8PmUhZEMA15ShsvHv9waejUmqzUWDVXbcJ4DEmLm3tLSmDgq8mvF17nkZ2fy",
  "key25": "4V46mrxwVjd2yJ7wqzXfwJrN1BCi5457sxjSCLi5mXypzaQGTJUyXPBQu7EdcWbJ9uATVrgpoKtW9n6n6fE31XQ9",
  "key26": "3WBrqxXCToan5qgRgyNkR9njQBUdvnQihH19mfSpbRyKpiPnnBsnUcK41te7hb1Y6ttUZuwEHkZRcEzc3x1ccYdb",
  "key27": "3ZJRfg5hdc5bYG8Wzocu2ptKEvNKNw8KDVcwQrDv6qX1v5tyXZ1ybgZqbMFPq1Gedgnb6owwFkjABANReGcmE1pe",
  "key28": "QSR3GF4QYG19gyD6ig9z1vxdeFQTYZer4ULiQL9oTEFMYaLstKPg2abAxM4NdBRproKmQg4Tz9uqgKywg8QsW3W",
  "key29": "REXiWq9mtbUQwkRzz8YNuucg2CVRwb417Z1roFehUmgQg7VmQQc4K7pqpYkNqkWZT98bohDgYHrWtp4hqowuAcm",
  "key30": "4vfU4wZ79mzHesrTTBGxi8rtpqE1TSrKn9YtMU44qhdAwSXC4pfvPfURt2wEn5VLpSvVHJWUcnX3te4LpuuvbsTZ",
  "key31": "4YGiC6TgDd7ZGLUBQ2udqwC37UmjeC4EtPSCeWqmW33HUndFVXQudKYzBpetteJMj1qWbbp8KTKwSqc3E6XoAref",
  "key32": "4pSLcgNvZ2bMS2AVRYhnwDc5yZH8JTf29mttvEFp7MWyovvVwn5XKyuw3R2P8JnbqMzi9nEMrvZvqNHnTcc1j1UB",
  "key33": "5hGmtXLDXoamLjaSD8M3YkgCuquZoGt1PWVM21mBWVyxnveMboZYeJB1R6L6JnMuFWwVAmh92dFaT7tZVY6s31y5",
  "key34": "5Q87YPPEU94cBUwR6L9Dh5KgroZk1bJ4oYQqsbW94SeaAhvxsdfx4WtEYjWAMNgyFR3ujWnLhYX5nsNAE1NNR1Tn",
  "key35": "3N1mDSYbCtJrCt1MrrKKpL7dVTYkRs7TCZ12ZwqXaV2XYnsu3njpiM7wHdsWpspTopyAk7jPM2TKWBz4kbauaLww",
  "key36": "5Lmxb9gPM9ewCWCaus8SVcDiVQLSA3iEbXpCs4vpqTHmkH9pv17D8UcjBQSZ1D8qm3nRygL9J78i6w3KaPreYmv1"
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
