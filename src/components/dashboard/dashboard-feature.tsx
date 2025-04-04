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
    "p3JXWQNqrt6UPZYcnM9QD5i6uVo1UwKpJaXWTHLZLEiocrCXzhvTVPxpNAGqxfxd7AqBmbqFZ1NQstCgYAkCZLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ASLKEqx4Px34bfssQRhUfQam51Uhx6U1t1qqW9PvrJ1Husw8C5QPHb9zEXbErV2MmZWZcfCwqPgGfbeV4ddAiJU",
  "key1": "4bNX424LzyhnPXpV1CpyvGH91hZoF5YjqhZu9x87xUDvLf14Q2Yy1uCCP9WE1RVNnuLqLQcXbMLPFhcmx4Xa1FcU",
  "key2": "5NSEJCdfE1zomA7H6q7wbnXGQRyV4TxrjzjN8p4ohYRXirZKk4zCxwLArFrt1m8Lk2GbCz5pKoAXMtVjATZtwh2v",
  "key3": "b7qspePD8xtCxFfpZi78TkPvMbxwBne7GS6hnMaNry1ViYKFsnnniKwtjwNSCgFMwjnMP12UdegojpDL2TcUMgf",
  "key4": "2whnHW7ZjHmkKraXddpMTD5bp8yHre23kETKwDe34waUG5fnxbLdy69aKcFfRqvnxpGgXLsHAzjKVXSegB4ZhLK7",
  "key5": "4nx8LJ3gooY16nZjJKBDuZRxiWCQRXvBVYbHoojZcfPVUYS326vfDCQXJuBkebHFff1emJiToGZYh12g3gKAuMdg",
  "key6": "4kVai7ghaekvtTYijpbBkfk7i16qdRgmyURyhAZ5k4uFrbPRoCQ3KwgHLDG5ZT3GqXA1o88iWQpoe36WHU1J9h7A",
  "key7": "2gWEA5UGRqBWz97hJj24pWgrYDfGLEUuGEx3cwNNufu5cyjXGLnJ7ks3rB4poFngkEmd8v4WLo43RnH86EregDit",
  "key8": "5aN4VjJg1BArvaupDX5v41JLtPTTyrN15CqQub4D8Vmvhu9qGZnbAycns2WJ5ZdDt1pUsKXVtktKqnLjSewrGaKV",
  "key9": "PyPmDvxckd9yjfNpydGUUx9T2TwNCQbe5YHoepyTmu3UH5WLH889J53fzzS3A1zt5mHrMQKqjV1tAf7sv1nKJfp",
  "key10": "dT2j2Z7a8jSa9kaXu7kRQ3y3zB6H4d6cSnKz5Uxbzu88bh4HvHp14uAyVAPUEj9tqJQ2JRJpDEEXC8CQMSzAQSK",
  "key11": "w9LJXUHC2RLyh4ZFMvbg1FJu54tTGEQD3kGXfykxmy6W5fn7ovsEgkHG5UD3X2D9mMqeZtsXQthBjCP39vuQiLx",
  "key12": "7jSA7NJgGEcHy6ZC1j7c4xdUoeQNohcDqrCPojVWrxSpbn3pqsZ3V57J6G45S7RK1rdRNxuvbYtiUoP1uLgUHwN",
  "key13": "YKEeyfzMZKbpRjShnKEZrF4GJ3q5dSdSRU9Jo2H7PWxVzkoM7eSjCiitMgoTxTexGFCiEjK4E3tqQDQsJLpxz4F",
  "key14": "XL667fnF85G5hck1fQH52tmarKvLpiAt1PPcaL5N9gYLqqidLAcjv9rfF4zfXVePcghmGMQmJFPyXWzS42n97yh",
  "key15": "4G6AqXBg5ftnaeRrg5CefFBQ42sYhxaZJeBACD2Je6Hb45wMExDrYYbBsmfwrcwmha9bTLy1u4oEjaBTJoZMGLfU",
  "key16": "58kCpzf3LBCHufMchkY6Ksxy3AfBTogh8Qmmpp9nLTmYpFDn3xdrAkfLxmJGki9D1uJWbdR7vCxCMPxHQ7EEXtKD",
  "key17": "4t8yrFizBFFTKuUrDvCeq5waoza36cXSEAJb35Esh9XUFQK93dXdDBN9PSU5WBfTxeAxsyj2w5YMhNY7LPVPYxky",
  "key18": "4amV3tdxQVsHKgfTeUB4Ahcgus1zsiURhnp6fvB1uEfF9rf5nJyrMioBb7CUSPXoHUU1tHe1rFJkbhcBCYy8buNj",
  "key19": "7irovQtTCSUSqcuaHURgMLmuC2xJ2oUsphZqBFd1EARdZsPw67M4eEpWydnWWJgqBUF8GMtnFC2Eg3i2974zQAt",
  "key20": "3ZXDnmLj1Wd1NfPDTZdCefRYiRgroSH57UNYHg6f5ZqcXgjMC39zFAk6HojgtptJEtViWgPoj2H9BQ2D25UxA51s",
  "key21": "61C36ktwnASXPLXhocPa3BknVCL8rN8E3TJZUeuk61zGca9UTELDLuUJ8Hrybx9pZaUtQgna9LufJpShVVgLzP17",
  "key22": "DpRrcLj2UyVAT9Qg3c8NiFJFLVUHEMGXbPuf3pE4u3rGpBadm3Z1vyoTRKjsfi3J4UzkSFW2NKaedQBik4DtEou",
  "key23": "2xsR85h4BLnSFnrtXfbkxNF9V8uEG6SJD7yUhkWo1KYiMMoeNyXwUW5rtx5RoQD3mCY2RzDyTFXX16GTJ1JsrBx1",
  "key24": "yAbgiVeX7msVi1NdEZApsQgPp6PDtW5jcTsCtXoKPEjcJ6eknGfwUvq1MhcPYisnTHZri4HnkUdEL5QGKk712Ei",
  "key25": "4rrcD2CBMGbMrt8MPP3xQkGusSGPvcLrqhEqDDt31ADuoWUuw4oG9rSEz15aG4X2uhksVBzW3V1Ht8yPqov1tU8R",
  "key26": "65kbWsimj84Z73CtbmELdXS6HJFq3b5zRb2syQGArVxDYA23TadVisszfYht77iLsmjrXomu354qcjKHYevYwqu7",
  "key27": "2sQH87nrTRKJBf7f4yj7ESoYPmiqTSTXTQQqERNMJwjDMX6eXfskeXTwP6vb1Ba6UJ95TfUETvdrCrGDxPGo9U6d",
  "key28": "aFUAQfQ8STfXvT1JeMUgjuyYsU2VZuDSGox5HapG9jAxsTriFKoeQ2QRobF9hRgPDhchhMzXsfqWUd7jCcuz8eq",
  "key29": "4A8y1ZxFnicNWhDpdSqDCa3zg4yDha6VnL3BgoheHZE9YshmjsgVVsWMhMRuECiGL6fzpxgKuEy6QwdySjpNrswQ",
  "key30": "5FDv2yQaVZ3RyR8ACCKzaxpjHN3jPMH7NpQJWKx1wc1SXoFo7e9ErCuyY5GEE7vac1BDa5chcrMJbxNySa5CcLhF",
  "key31": "2v1a9VYV8oiLM54eYpL215VDWfVYpMdokASiM4QQXhXav2EKg5ZeSUErW7JKzRg8UniAiZEPyK9dhski7pcanH1y",
  "key32": "4dQoedTAoJAYtanJzjm5Wtxb1iGHNfpmsbsd6epRf599oEz4GLbeQJTVmxo2gtC1jcHtBCSkoBiwB7N9RYvRHTAH",
  "key33": "561CkofG8dAbW8uqzKXYmniKRxzqRWXAW9Quzkcs43UyM5RURC3Z8Gp3Mx4drFp3iszSHvEvMt2sHoVQ7PkUmKMH",
  "key34": "64zqfq15KqfocCU7NZvWzxFpVgkngr3WpBkwuXpb7sgntSn1DUQwq2KP7MFY37oDuLGrZ6pQGVMcAtXseci8uyQy",
  "key35": "3to5oyey5Ps2Wvn2Gzu4GK3cKkXDPECxkh5R7q5osdLsCPqaWAPRX1HbSzVffn1h9mV2fdoCdY6QXDN1ioQuE7km",
  "key36": "65FSiNdYX9mKeaHtAcpnXidh5CdPDYqkcWmGMkxQqHtb3g9oMGzEqTFWzGjwYgh2vT5gM1p9VntHSUnGLszUigfr",
  "key37": "4X5kAFAAA6Yx2ch5f9i3gKDPkUSmtjqVvQgsRLcAa4wFMKHb9ieweG9PnrVyzJxo128mkNVBFCgP3BdZL7Pm3LtX",
  "key38": "59MDdJQFivmnPymhJTAkA6HXaWVGuh3cuocf9jtPf5DgzGEGZYxbE8vfqruh82GbwhipcEYWPk5CwVaNqxPXmsVP",
  "key39": "96ZrN9DwdHZpwgPjTiMnNK7VGRbBHXohpgY8yoUJD4YAhmgpsBpJGoRp3ANS2fZTXLxrD7ud4oi3kDaa32z5z94",
  "key40": "3CmM86qrDpgC5vAo8hHDrgTtWSQzSGXdisyxXe22j7wqbYfWkMfg2H9zjSPZ5o6Em6PaP8tPHwYoqma7sXDpjFvF",
  "key41": "27ARYVyAAcwBvzYhEpzBnnTVg1eZnERwT8ZeDLLzBo1V7RUUipgqFgRLQiAMV1Yx1oe24vq84vcWdABHDuB6pBuW",
  "key42": "5advyfpnu4qwVTR2W8JxYzyyZhoX4i4HEyopvoMa9vr4Xt4yjwhv1Mi9r52Cd5QjzHQHnyZ2gS6M9KdzcGiR1Yhy",
  "key43": "3sKNLEs1rDRisRacTEX7fu45xrxoyYM1ctKnBDh4UKYh3JEemwG6jUuD5aaTkwC5bngLUqQb5cEkem17UTfrRLfJ",
  "key44": "4T85QL5bdzjpccPH1eJeGnLWQUZLK8xpxmxdJz9w4F3LyCxn7op1vyGNtLcy1CEYsubfWJ49PodM84HgX4XvNz9Z",
  "key45": "8H8yaNAMwfHe2xiJFdfSwSEhzGcTGFYto4C1V5oiFGjMTh818sNGpSRDCXQAdfjrTUyhaB3jCbiBukAcTG7hEoZ",
  "key46": "43bsK9MZow1pLZ8Lj8Ujr6h9NZmazm2hSKs42sMC5F7D9XQhBfQr5yf6ZvbgychdjTTzdK6b6kcNAqwGa22CCeUZ",
  "key47": "5ugGKRSs7XNvXqjpmxUNBUr2xiAHt7xUgXauv6Y6pKwSiyfHKTz6cZwPbn5PnSh5F65VdM874PPJeFN41nAyacb3",
  "key48": "5YfbHNsp3WaCCSpLLDxe4rXTmoLQVZbq69HTwK6j7JprMiDHuu3u1GZGvUyfDCqLbHKFQPUgCBzLTGBvCdeoKVLi",
  "key49": "5MuuhbY1Y1jQCoYDzW657vabB7rC9RfJDjbuWfsSfRD8iRQPYfhWeuMiADBgzmbmCzsHJW2Exd8BAnSD9Qex5K6C"
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
