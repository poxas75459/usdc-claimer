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
    "46FLvp7D9aizw36rpVK2L36S5c62zsL3N1w4CiJ17QEyhvMHoaPorM46FH1WCHDrpMYrsNV8Kq4qR3pmJ4pvpF9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TLowKhtwLG81HR8BhbmwdwZDmGMCrezXNNAdJYjCJGd4bD9n37LqpMoEUXD5xaP4p88PtMcHGPJpUoAikTAtD3",
  "key1": "52gYzTwvknP9MM3mcVhJSaDVrgH4oiUuHHaxYAKupAwb2x84aUp2c5gfoEqKUyu3gp3CxQ1dPZfMn8pUk3qFsEX3",
  "key2": "5a91p4jMQv9EEZSrb3zxGownGRrE3YEEtyA4Dxgz9kdZLcQ3EqJyYwSDEkFaZjmpxWJPVTmS5iRSdyDkEBen7mUQ",
  "key3": "8W4y5Utqv5ZqMktJKrePnnE2DqEtzVSRbcCeMXPZ1FTBMNopWp8SQXYk3ntPScKrAGXrhaRvnayPRmJiymKsvpR",
  "key4": "5g33LEWAdVxFTBCQkX5NsaFTa6ZTcD7kWP6apqHSqMoMMeokHixvTEzfUrjFYWTYSGxaqyuZ5idUtfE2emVZkK2A",
  "key5": "3Tz4Z1EXVqU8SELeCRrNTnZX5LjZqkSfXxZeXUgHDEqwv3Myr7sinnkM1227zKAZZVaWtdQVDSgZy2h88UGZis14",
  "key6": "5wsAAYjnCgEzXW9vp8GV5DPUMN3qPBz1FTfhPhHnpi6umn3R2KRsmsqfrNcxXpoBp4p5JBw5KVYvPF4UAuhjiaw2",
  "key7": "4ofW26HZuCrzFw1EfWAEm7BTqon56U3U5avLZpmz52ruNxv5SPGXDGeMr5eacxUofcDwrrS1Qu9AS4TYgnwfGe5E",
  "key8": "2wVWBFmtjkaNqyPEzNqaLbVJ4HXopvkxdu3UA85GMbkGgGcsz4TUExXWR6v99a48ReHWpdXcmD14EQcvQuw9Ft5q",
  "key9": "3Fzjk2b6N2xn2H443LeWPMZjQC6HMGHN5LPzznFDjHAT2J56G9qd3ULaLmDpbHtUZq23qVfdxKUYf3hGe5T2Voth",
  "key10": "4HtUEjmXfwgMhkh2vMMXQcbqjgnr46sEZbLkQUXNzV3uKTt8rHRz9F4iirwt23ho6Tenmb3mCfyVyZfDioaJ4HaE",
  "key11": "43e1FKPKHPFSQEEFC7kvtyttBQFRQXDfMBtsDwX2PWZ29ESBSjSg4vKS2Ht8FMzcHasThqVWhSq1QgAMvvMdMnb1",
  "key12": "3fHAF4HWJ2m4xtw2WMN5fysE2f1ZJ1Ffb8zsZLtpKHQzLehoMkfMLJEhrVKMTPKqLS5Z68vpfagZ47AQswLmsdWX",
  "key13": "4R2htniPYpWWrPxwtqk3KaN8PVYfqrijPpJiM7TGXQpdibKKUbXEwL5MvNBYsC4ZaULGnyXMkh4fuYamRC7NSNG3",
  "key14": "2KRgmqWTUtfbs76K26Ji5QCcMbQzTeW6FtQtLDFbJZB85yXkXLL48Zfg5Re3tjbDrRmmyVoLmbaHfzccpCAjVmKz",
  "key15": "284QMWYL6MCnt1k1Vap7ctTJqCFCkS6Qnf3hGJy7KTCpD332u292WZQ8jTG6d6iypLv7co43X2TRWM1VqB9dRukY",
  "key16": "5nTVTmbbTgpYT1KPChd93UgNJDUZsDErfvvc6dGBYetsZyU5M333NUmdw3putBqqeX1TGgS2C6UdKJ62af2dd2Wo",
  "key17": "5Z3pjPqpCgMMNYWNQs8w7m3gkPmWcNk7BhJ7NuJAXK12ueZkA8jsgfoMnLXPqxSE6YC5H9LHB5DjhvyDvFHjv5hN",
  "key18": "5J3VfsAnAa91AAuwoVk9FC6LVd4kNmPQBFEG3SMJnE9TWP5AAY6ixG6RWjNwGHacL2sPXiTABFkJ1pjnU5GPLaLv",
  "key19": "hcigYpcr57wQPDz9TYE16Rrhks2HBh6GvXorH2rfZkn8UDcZ96LhBYcPpBCZog6ootD19g8ULRB2kXu74NQ8iEB",
  "key20": "3anYfqCt8s3qVyq8YrdwRvWvim1vAhEtobvQxXykbKV2p2bYmgmeKeD2JoDpEQU5dY7WsFVnTx8dLaNkyb6H9qSN",
  "key21": "28Jw8z883wQG4fbb6YWbNM4wgjMEd6AfGcmPF6aXLicA5656sgoCWtPsJZtUHW4miZiWHGjxtMPihD1Lo6H7tx8S",
  "key22": "2ajNqZjYNYiR7nmgxEQEMDgyteYjnqdGqrktBZzjyFxxiK12wsAekZ58NFx9R7dZPqLSDeVoLYYC1sHasTF4hDML",
  "key23": "2N6En2yQ4crVedudqzZaUPMGcnduubGki8movfUJeNGeiEfJ3P45V9vEGxVgxoXeHJGMKS3x58CLALubcDbTvLjE",
  "key24": "VgDfBJys3rBLQAcqPxtqLDVr8mVLyM4gAua7i6AZAgdJ843of3nJgX34Ke7x1RoWafXreUpQeaSJfRBinJ9ZN86",
  "key25": "xc2x3tB4Jpifuma7zjBhNYRa39CjPBQUwg6eptH4KxfD55Zuqt3U3PEKLS55DV8rJej5Zv2HnyXuEQQdzf3xX89",
  "key26": "5zUDbNR56gUSK7SMf2PH75rkxsoVczaF5hj3JJivsQVXpuGRjuRbRT1YFDmYF4y87A4HUftJZ53NFtaSp83RhA8G",
  "key27": "5DRPodkb98wQDPmfZGjKxojTvgenfNCUtBAQsW81UwURkK7wa2CQcADAxtL4HmCmq5BmP4K6v5vdtiif88dF1FNX",
  "key28": "5PagDfSTyR9V18eAdy1GeknUQDDU8bTDDLxvCiskiB7TxUZQgEM4Fn4Hmw4svwEiWVCFDFVEaYUeFY4ikv7wuohj",
  "key29": "67n4E6sqKvsJ15PKL2fV3owLGEui3drb3aFfYmheMPBKyfhJQi7zK553nX1tutaEUV6x99X3wtrCFum2yv12EQrV",
  "key30": "3rjT1xRpqRcBBDCA3iyGGiTyVVUcXYuAggHTk4fFQASfYLS3CaQgAuY5aJGw6f3c7JaiG3Po1uh3GryZVzZ6i4Z7",
  "key31": "3b7PuUKMaDDepuhudNwmZt1AiuhHn6Ntqi8abDPPTiK1xGXAwrBStsyw78FmV5Gg6AuBGiVWeayi5Hu67EB429t4",
  "key32": "5kNmFWRAQzwEvMrHn8pyfZWdUXS46eZ7zmk3jwu8KHTWwezUrAAEHCWhxJw5meSwpY1hmcjV7pYxcM5RKis6tNdH",
  "key33": "5vTpUdNVcUqJXXJT6mSM7MSHkhyNGtDSvbtobtZPs9zKApo9uDjGNjarCbNVNAoZBsZxGAjYRNBKWk2jtGfRghKN",
  "key34": "2wz83X6xNxuKCJyYS6rE9Zdr1W6WK1xxn8KtouwWLZk8d3RQJ246DpC87wjD6CK2xFGT4L7HwuVRgzwhvNvwoXUo",
  "key35": "5R1skCFCo2Zeoeqb9f1m1WDAwGkrpGJFojAKGyPRu4bPmytjJMDXAkU141PAaUWdf14HCkYchYuHpUphK4FdQ7hw",
  "key36": "3tWJsyTBRHXo7GQpnD4cPc4ZkqJMzewDDVUcY9K44u5HKy1wPUq3h7ZL2gWDePXGF3Dgd9QLXNMkX2XFw2ncTvYY",
  "key37": "2eYpPEzQsYQY3hwKR5Ri1KXDwmWF24d3j6dyPkXuNJriJqyRqCFGUW3MVjNa1yMsb1vu8bKfAppFWfPTH7CRDYSE",
  "key38": "5k7irLse33QaqEX7udNeBAiBXv9PCXRvKVNZ8Vf9PJdiQbBRXH4dhSuVB23owBFvMfKAmBHU1NrtBPCgc7ZmeCDR",
  "key39": "3BmU8DDQX2PYV66VgCyCM69UBSe1inPb1vPoYoB3ga3F3Zfu5RT22yHW4uAjFgMj4hSsyPtywCQZywXAf6wHsSUS",
  "key40": "3S1thVvePhr2KvWVwefAUS2WTVkd7hooH5kZ1P17SSjgTcLWwvdwiAXVd2XT8EoJvz1e59bx96XgDywPWJVqoNNU",
  "key41": "4rGosjiWsQa9a2AV5UJsj5kGpuhfJSzxnS9fruVsubKHg6aFPAYPM2n7howAPKdX2AzyaDs7H2tNjbyPw2Hycnqm",
  "key42": "2Ut1zUnAR8Z2GVKbJZjTXfwhKFm37xS4Gq2kwrtFsNHMuhh7CjCzd7FtnNVa2NpNr2n4Ui2Lcvdp5Uo1EsgFm72j",
  "key43": "5ZrDmSNeBexGwdtbs4niJxyoUPeVk3WxrRVA6LDF49qKmNW1tDyMjfXHppCCwDRfzgxPSXXr9wFb8rJ4Zep8LEuB",
  "key44": "3mbwAjwNavzYWjv3EeZsnx78zHPGQT1RmFceyuKMktJpmGMii4vNhqMBkYbRY6rbGUfuWwwwDya8m7WTcc9sYY9Q",
  "key45": "67EqYD2GH4zYnK4W2ddHKato7iGgq72ncFEKU8HVuF8kkHSkYrJdmz71YCxY4ru2jxsVXKgQ6LjY8mQtcvDSh9VA",
  "key46": "2YuagfN5EGQJgaBPAjV4K2GM9feHnnsFJm9jaYMap7Tj7CztU6rYXAkLRF8PB4DaGxXdyEtzdouTyoqqsQSPDa9D"
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
