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
    "3MYezJMBwqX2bvSRiZhytgLAjB1ggDjHf4NFXLLDtZbPnfwBfnVKV7Fj4xPzD86XM1VEpeMMSvDS15js5sCT9Z6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaxZcHqJwrkG8Va1uCrzjSqgUfVBV6L6Fd9qrYr3AHe4VuUvHJZ6PyDhG6ZAzrK1zVpXH7YL9uaPmdtAhdQp68n",
  "key1": "5TGzvGDbT9UrCoCCyByCBtFMwFxUi2uLed76TdmGjUFf9HVy8jCRsHfadzwCkc2mPeJjVu3fhYK2kvBrYhDki6QS",
  "key2": "9vHKJuMjjgvahBjPNS4eZJas7ASMRzHBEG3TRDrjBc7zNArkNbLEnwJGvUpvBv4HVu8DGBmW68urSgzpCQweATM",
  "key3": "5vj98vxHsTDGhQogKBEbpx4r3MvuD9Kjrur8CekP2K53uZ3HFYJrKssWtM2wY5txa4z7QxsMHYak9DRDhEgBfnsV",
  "key4": "aZUXXB8vrQErqy7ETmvYnJ76C6WXX1uk51WY6Cw4nfXGAsxC1rXWLr2C4p6FeH8K3T6kSrREon5emFhpfSeageq",
  "key5": "41nEHaBT3HaxnzMZtWypjjKa2yeYAzGV83Zy5ArDYKe3qRcjJdmpytkXUUTiKoxzrcmAViCQ7X35F5yQNEqfNVWb",
  "key6": "nLREmbrVoLjFATcrzyeNAoUzU8DUAvvT4fcUGwG4danbGx6Q3Zez1b6JSFnoYusVQj6JrZFFja9n12mUkkpiWrG",
  "key7": "5ESeNSkmvwKYp9w6RhGHVHAkVCbfDZKP3tCuHhpxQLAr2HXKcwC2BU7WE2GJxXs8q9XjLZjW8ntV1axZ3NRQ6BN7",
  "key8": "4dmaeHbsFLHaPTVqXkcDjSDgCcaXkZkXHHr5jJRo7mXXycmsNQyZ7S42Wa5RCCKgCd8jxkf4WqWDRaa7dH2hA8jD",
  "key9": "5m9XhSpcKqUqs8esRXk6CMy796VdtJJ1FvPwUieLS2t27YNG6Bs3Vz8HHMngSTTexnCnAXsV9MSZzUdTyRmmWtmk",
  "key10": "5jUWLn1hSqK4NC755tXd9E4UgdyG6yC5Xgq1yb68aTrnVXRw1TeNDWPebbS952zXYXAVBR5ZfGwfd7dJMp3M7Xir",
  "key11": "5QujfD8ewtSkCnsh6Jw3NkeirT3D7DY3kWVxWsSPN4XMsBsw2NfMXepkvJdb4VwyLcgTr1YNJpaRdGZhUUvHX9P8",
  "key12": "3Xu3pX7qRZJ7CXNas8gpWH5QrhcbhZnXq9x6imCKPvYv9jucKwP2kQaUwbdQwau85JAGSomnG9kgi9ptaRre6Frg",
  "key13": "2GudHzop4nKm5QM3RjXqVXSP74apEEj2T1VSpqgaEsKa27J1X2KmTMG4cgCj8GCbS5HHYdEH6HqXNq9zD54BDdue",
  "key14": "24s9yFbDgUcneB9vQSL3RRLhKUGwGAXkAqZJkzL7PmHmetegsAp3BCQGZLivvHjbN2dkRgqGkCCKF1oJRX8PmYiF",
  "key15": "g2DNR4DyeCjqUesg9Lv3nxrN2415nhofw7vwe5JCaCDmvkyVXnSiGjvQ4PfxwuVb2LsKtsi3njKXs4DV8w3bseR",
  "key16": "2Xj7qhuuNjMQYx1t94cb3bfQEaq6RXwbCLi3ketiUxpwRRCjSdo8kRtppi1whYcmFkkdmMciUFbniWfMgUMRZh6P",
  "key17": "2HXTg6UPg3LWuHU5DCswGyW849HVyBrdUzKDAM621Fyj5zyyVqgE8oXPM1XsPSMrdaXLWWU7WBSE4SrHNUUq6DKT",
  "key18": "4nT1Q25apapF4WDSmqNSTeAyrwRLTMQHZxULtq9SSV2e1mBqvE6cw63wjf9p6ytyNem9wYdu9ftivBUdhqZQX9vD",
  "key19": "BvMsLjWkrTiAod6ACzKU1hYwH45mPxtuTdikkjHcVaCGx2X3iRUEbfdcBDLo6HA68wKcsHdD5u52LHcpp4qB52S",
  "key20": "2nivCoPoyLA5YvxRxcFuoUqQR38VLwRCAtu2saBbZFf69bR8DJivaZtipH1TW1oTHdmNZ4Vb41A2jxwNrQ9CgEoc",
  "key21": "3P77zFRVe3JprA7MeXFegok3Z8xD6QLZEmw7XGXs46SgPiZGDw79YQW9pDYpJmGKV1DD7fkxwn38dURj3vBUhXfP",
  "key22": "2nAQXN1HSsgSj5TgA8gPZYShx6cYWQMaz13corpFeRWG5kPDZfjj3oj71Uo3WvZ4ZzWXNQHKXoA4s3ZrT9Xr9s63",
  "key23": "3SY51Ez3EFHAvph5UQTYfGUyJA9zf71azu3EpGSe66eE1grBHv9iyby3keT9qBAgsyFkUSnbZwUSohyqpXUx3GR6",
  "key24": "3C5RGBwSNp7UHaiL7uEXAHSJy72m7cgvnnENgMXTM1LVe6Rt8hJBkzp7SXKXLZyP5b2GxNBix8e2sGy6Se8szdzr",
  "key25": "D9TN1BF8dQT5DnqMxTNeuS8VwaCPq8hMZ2PWiEicZMkr8yjyKvdvzKqekf2Ashm2euFJPbg6GAuop23kHoVz5ze",
  "key26": "gLa45cBkeghEbx56s48gHCnGLpdbysaSCtSaV9pR44wFZx2FeLXWNRDiiv8PwsHy5G85y97VKxSJfya7L8Sfuc9",
  "key27": "5mCyuKVQ33JaYkvHyM6g552sC7Au7cgYZP9yfMhGgN9MAYi1iqJi7B6PCuvH9fyptVhGvtnXfjXq5E1tMVQvKEVi",
  "key28": "N5sihrDJhiYmGyfvFf3fzUMsVbFAPvw3QWXXfQ4i7BpwXizzzdiYU5QXbFpV5TnVwSK1SawJyxD2bcPcpFtX8Bi",
  "key29": "mYSLnTpNxNGirX2brEnmFjjvcEsNeCbh8C4dwtxMcZ9DJqS37tRM5QqEj3JfH29FxU7kD8KwuV27XUF2zNDn81R",
  "key30": "5uiud1BxdnCsP3GJhTPXRvtDP9eBJDQj1FwYEnKcB6ycgNndKYPvvE7PGScXTmaffZnrDf5J1W84z9fnLoyFKGtT",
  "key31": "2wBnZxa6TxWSSfVGJkhhgttNehQYvukdm4RdZgUrzft51MJWNSExcvCQx7y4UN2F9A2azHd8aHtGjEJn6QZGGvdC",
  "key32": "5ZfNPhTKvqRhVWQ4DTJUpfXU93aEEFuv6ChLgAoZ3k7cwNj7VEWZN8jQ4tgY6NR7Wh1iY8RvUjGp8AzTw9GnsGFm",
  "key33": "58EPCLsYQAwTKoKu35BdTSaJMiPwRfu6VZbbrHLE2P9pCkGNgU35drU7TJMwBeTN2wXV8AnwogqpQUbEUyEAKWF",
  "key34": "5bR196bVbeARanEzTGHsKwijhmLunppkXt5eaxGEiFuAYPPRFAYCfZTWrzuGdNuHFSNjZ6o74Qp3BypJkp9Rb6Hq",
  "key35": "59KuPfKbxSLkEyvV8o4k4TEWaQYVeimKmksMY9gjAJZuDoeNuwvKot2LjaA5sdTpKAkLFC4QWR52reTMGcUSM8Yp",
  "key36": "44qyfHhTJ2w8uTB8EpCXLC9ipoXDZN1QzhBsLe1e1hth5zAMsMiv3v61LyUDxL5joPvapmFxqBt7Bq72oHFGjDkT",
  "key37": "3zPXhUYtX2gDt9mevY1eUhTu9MXTV5SsN4SNWuLNKFUTYeACFb6LNNJ4qzb2x18p6DrYDyBKR78x2pvLoquHcfmV",
  "key38": "5czRXqkaFqHkch6buYsrTUBaRuM3SjsqzyC6MRtW7FkxwWnHsvgRUJDs9GMmi8AKUjavRwdRkAtsiUmctcNY3eq2",
  "key39": "4UkV88Q5PC88tgfBaX7xvbKZ4vfSnD74tm5i22eKnrFx2TwP6wSDXqX9p9f52bX6Q7Nb7tno1z4Vp7jJgh3vHYof",
  "key40": "3e8XerQx7MuTQWf8LSUkcgR1njGJScnV2wJyqLEaSTFP5nS5ao1p5gpuSNEwhAGJYwVec5RM8YrwKWBwBywLcT6u"
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
