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
    "2dUR1TWmjFxpq2BwuzPmcXKhJS7Lf2cq8jgSXG5K7dmwjz6LX1HSACFjNySCp3Q6jvaD86McMWpCgi3AmF6Tfn4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6BqNBKhPFeBvBZrNaHbamitWxm98tnajfxwo9cahCjxxdPXLyEYYDUrzEJo3VGGpbAGoYvKYRVQ94mTvir15ybk",
  "key1": "3JzjC57XhQkfoMKAb59cX7bwDcM7M9J8XC8uVk9qRNx96jVVKvRNi6c5wB24fZKaF6X1uNsZi8zdP2MNFWWkijWD",
  "key2": "651pLPJwDi32zPqt4LURpHXacsWKYNjGCnRVvfoCeqF4rW7V84gRze1HN7FKNeEYp8fRGUK7TcnctEFJEHN4YkpH",
  "key3": "2GQF4YMuHJTPsEvn2WPHbtXLP6nNddNQYiFwk26sA5ec84mg9n9Fzvm5YtouiN2U1tt2XKojt3EUVyAmoFZKdsVL",
  "key4": "5khD4ZMNsY43hyjmuuykqehUUfGprBaNYJDaxqG7EhZXkz87CSE9RBYs79E5fsWRhTrf5GnFEkafuXuZkvnM3T2Q",
  "key5": "4jDwxWHuY29Ht31HhQEHgbaoey77EVRkFUbciMbTK5TzfJLKpnSkVVKsLfbVNXZUJPhmPgwY9sdZkXKeEVhV4Av1",
  "key6": "5GMfXR1dFc6dcrXRyX82v5sSErZVgjeRzTAF9MaSvB8dVu1fxBknjPGLL7FDZhe4V1gWdZtXGbYq8xxNiaYC6zGz",
  "key7": "3iXEscAFyNpuKHrPhywHnx1HzeFjtPFDpjGosCN5PevmZQgh5eQoC3UKfNn1QRgngRdYavYTXsHE772Qj5a6mFBt",
  "key8": "J4k7ZQkRZoEPgkz9wB7DDKcfq9tyJBzNhQj95r7768tCzyfykc7hdBmRtFUUzLFxyrfrVtzkMMm3uDcwdEJZnoL",
  "key9": "5yhtmcopchipD4CvyxtFqKV54eoytmXyAuwtdfwMeJNzf5Xerm19couZsrCsYDGpAoZo8jL9BfeC9Vy1Qp6GDZiD",
  "key10": "uDfXpcGjahtKy55wkTH2tiz1y2sWpx2P1mSoTS7i3LsuwWWjEYWhGYdDSng8Ly1HQkeasUrKNdYBWWqDJCgQ5WE",
  "key11": "3bDRis7RjeiutVWBKuPBApjuFzsbKXF84TRAVz44SBeLxWPG18ajJaZwzzuS535ucRrzK3HBmgmD5Nz4VTCnUZmF",
  "key12": "5raCGi7bDyMJLmFu2CnjKf9TA11QHCvooANBR9Bi8uj3WA6d3FSjUg7XLDD37MyFdwLURDXDMpF65KhCnns9Y3oV",
  "key13": "3rqwz6UwAjvwHcfLw17vG1LapSRtHk3sH5kopeTrr8dUYzrSLtLxkw4vg3MzgQHAA4FKuYwgkVH4QzCQgA7rQJaM",
  "key14": "63F973AVEHTThFtYdQYVVt8ESRAt7CsGk5QaCDx7sjY26eZuJLzDUYiTaeRUXkNqPtMTVrNxRW7J5vuAtvbsLR65",
  "key15": "2DWJmxdm51Sq7ja8S7ZhnvA4ebg7gur6gfnkT3cUVFw8yionrNqFUQ61DMa9Xtng1KEvWKAEQ7U3gqMnwFve5ah7",
  "key16": "3opKkCQakMvHEpwydPqwxczfc9CjHEkCBQgSNsjGKnhLYtdXBbdT5iCEJKRCHX5Zq6VfZuS9ETu4xXEsz3xpDjQ",
  "key17": "37rFTzccpi1VKLgGa7rR9sqif2dzcPgiXTMJjTwk6WNQ5xiKcjsqn1hHkkkdJZxjvWWSzSmuYnTUPe82StqYdu7b",
  "key18": "3hw2Xsk3uCVt26YUyw5ir6wDsQLQtirt9vSUBfjAqyn4QwYeEZxKiF1RbSPwU5PFMJNG7vgPB5iTDcrcMghLcFXN",
  "key19": "U1BJK6G63xvRCWqfeJqyxiEj3gLGpSohoFr2kzFfdk2hr9cqmJUftzpdefeJTDLUj6mrjAQZdeGPKLJ7gv5MifF",
  "key20": "4BxMRuMfjZRdhad9X5f89mxYAYU6KYSKPzh8qcrXkCxhzfGNninWYgFzfZk3MRtuSW7bi4wyFz9QUEThffXJ4PW3",
  "key21": "3cpyM1ZhjN3ZUcBHUU98RaLH1EioyQiKdas8uzUzriEhNbSiKoLohoZKGXxUBFwpELZE5HAiVVQcZyDwmyURJXMZ",
  "key22": "2pYoAtTcCd1PrHVviDmFMTxfpbEVnqB3S2yrowdvc4VjgsAAJ9eesQQ9L9PzGVaAfMRixSpHocG4zkGmQjqEg46T",
  "key23": "49Jt2kCB1KJu4ncNepn93yEP93UeXPs5cGz4sTxWdCQVR2jcNw7afLfPEM4dVj8VA2utWBT4ESrjJKhnZ26kyMzC",
  "key24": "2hNdjHL81woF9iFo1DdieJfUkAzUCupBqkxLuw8z8Xp7hqspyAaSXB87N9pgc1JsfTb4pPHF72RsbtmUDcH7YJKi",
  "key25": "y8QqXhh3dxc51U5NFRmntExxg4pVxDQKbhDmEU3MTUsNnyVYgTGd21hLCkBFsgSULkHk8nXZy2gJYC3YLB2k2p6",
  "key26": "xButAUt5RWwJSA3ghRVXvgddWaUrFjnxN721hNEfhzMydMx7dgL9Q6hE8cLizjnSeBarehrPXnnDhqAhFP8t2nG",
  "key27": "5ogSUoVQVr5jMZvVXo9nGNPQEQUep7amMWjStDJF9h7jA3ySuCNx9ywmk9v7AJ1T6pMn3ompWzB21qVTRLDHKhfW",
  "key28": "4mRF6wd9rv9TrWYpWiiSjcvt2vcBxnRBwFwxPFqMp2UWC5ZxmJnT6TPp56ne1j1XNmqXwD8M3cBEttozK8TXSPR5",
  "key29": "3ATYMMcVnqwWkdTNN7rDEemSsE7wkjjisRWnEdALGR4QSQjVsoqYJARpMf8APX2CDdkn9ZbmEq1BeM8XRAm64xZG",
  "key30": "5Cnm1KwcM7jUtT6tPvuHS53XWzEtM3DUesCWrPUWgMRUzzLPGptaghn4LNr2BvtrhZYFobhYzusxE7XYbcGTSy9B",
  "key31": "1F9rvW3YWTFa25gRc7LuQiBFocfC8e3faAQdkf7Ks3nAh2T8naTtDCrcDpiHgjd8kAXwffoYG4sjyApiSvWKSFB",
  "key32": "272Kk1EUPBc5c4zHoAJWBgrEuiKkEyXEXFTgDEWoWpkFhgGuk88bHAAqg77rJudcy5R2J1hGVGbJV4oQoMyJPx1r",
  "key33": "4hCcEyveXVzMLocSnqt6oVQjAN417hVHoqjuMnsGH9SkQ5TntTKWh8PidX1a8Hj5CaLr2NR946gbkbaK1ZSwCAxH",
  "key34": "okz5SsTkgk3tzZyLz9QxzEmkmsyL7wHU78K96RfRhzoAuJWQc4xDXyUTdsAdrV9Cckp4uWSi9dVdTZ1Vgv5n5BT",
  "key35": "4rgA768BfQeP8kLapAW9drPaMCNXyVTJD2qDhnQi96JJybs2CLqeX7tziurAP6XaJmXQrDFkW6J83U7HVus6hHVX",
  "key36": "3L8hXmSL6UJMtkGv7XbH31XA8YjK7kfmzy2FN1LCR61BCHPFFV91gWd2PA481xRW6ksForD2Mr15WcJjQ4WN7Ejh",
  "key37": "5KbwHc4datagdAn2coH2pVoUKctTkbHgfubrnaRKc3vmRja73NSG4SKVhsXNwPip2XBdYF36Pz1kTdzCAtUC5C3B",
  "key38": "4wV9Mumo99Xt4wvqp2iE1gcs3ebqYYupeNGnBj6BTz8EoUGNYspEn54mZGB9hfKe2uZK1DfTA8xkpgrE7peVprKE",
  "key39": "2roWpsPkSJdYAnZWCdjaNtSztKj8pFurGHMqcHkwAaaZwP6fMfAg41QL1X4fqtoFKwh4m4LSpybRPKzXK5jEKM9Q",
  "key40": "4q2HGTqThM6hJihXjBciizAdjpjAGq7ZANx1XJGrbE9zjf8CPCPVmuoymZRT3WFMWMHrLNwc1jYSoMr7WTatdTJY",
  "key41": "5L9XRgQcJtuTVF4L4xikFvpkwEHD35NHZPyVDd2w5b8XksniQ6Py1hE46DH81gQgXTR5QNf3AiqWD1F3UYJMEqcy",
  "key42": "2RFJzeLkxaubctZM2uWZEKw1NEytuJBpBy84ds3AqBYRz3XWxDa4HoYFXKseW6NTAZSY6rEQd6yZWfH5ktw4DDPd"
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
