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
    "3us728QxR4vceevCHGZMv3qzTMZjLiEzxAQPWLgEukwwEaLT1PuEDtuB7a6ryFR1TaGfWHFeUwEwp6aWmfFrFERA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJrkFKR5MPDV9tKB9NMocuBM52XDLvwKHYqqLnry2oGBSFjphHdS8SfAVZjKez8QxrRNb2PiCMBvXSWAF5oifDP",
  "key1": "59aDbRvZGUpp4q28QB1M9PwxWUMxfAfJWi7V3JfRzjFT558bmSDLvmxda6H2LV8wAXiYEC5ByXbMpUZRWydY96tA",
  "key2": "4s2hmdQoNat2eNDpHA8RsobF6qUhr7PspULe22y1uKMbiiK9PWi81eEF6qfRaeZQR1s5E9E4E5eTQtJ45iUGyimS",
  "key3": "2gcsQDuEYmpHzWmBzCfJtvVK81xuyLR3CduEBEMXeaLKJb2L1hveeZkEb7RPgXepfBX5khWrRHkm8yNGBjXhpnnR",
  "key4": "55vRb72ietV8efnLjEUqBRzb1fEWgc5qovsZhQ22pZofVkJfU4w5MpDT33uyY2958uH81BcVi6xHq36khPHno6H3",
  "key5": "2GoK4F4fxmTuKnhBUNLNQZDjBVWV2uW4pe3iChXvdq4nuQ3E9spr8oxu3B8TuEUnVkbn94ZECXSdtHTGsms2BeV2",
  "key6": "4uXWNPXCFnH77a5WtV5bXAQCL8KUXMWxqP9uVyfBz1m5NHhSDDKk4xJKw8jeh3cB8s9Mg5gnMecrBiZNggfXZxG2",
  "key7": "3t3zm986fzxzAnctfy61f6viNG6mBUpKkajRjBz2XpXgHCBeCU8SC1mCaLgw7FgWZNbzzrY2TBdZ6tLtbNzNy3xK",
  "key8": "39CVZQEzBeAvxshqHbgvTwKzLrcA26PchzuRFFng2Qw1FcgEbTEKrT4LMKiUeRXSSsT2mtxnXBZnhevt2eZoDGbv",
  "key9": "2Ya1eSoPhWYUBbm5axn2UZcJLL8Ych9eL7eqk7spmMKHYSnwpoE4JZLoQosMM8o4wtGnhqzhb2dgA13ZmADzyru9",
  "key10": "2xQVSmAvCjpinX4HDXB8hPPik1wnxa6cEFbtiVf1fyT4oUTP5SJW8Q3KbZrJuTcLLpajq4aCYR3Kaq7RoXVB7JtN",
  "key11": "61ZRUCjjqG1oXAQHpmN1BAuBNe25PoddhM6FHzEeoNumFNB6922tbX12cTZRFxezqo7qxK6GpTofDbd1rnR1kUvN",
  "key12": "63ZmpXfAPRczwnRRmXTwLukJCWCPnfpGuAWhH3f1akHRLQPgEbkVVBoon6sv4REJ3YJMMb7N1XDePwfAE3HefDkL",
  "key13": "38Pg1PJF2P89QAcxAXa1QseP62yKiLknL1b1VunEptwKic9EYzjfdrBLy2AcMMabJgR27qMTyh1KiqCqiRVw9a6e",
  "key14": "3Wh74d8hg3E6LtzyMfrUrH9sn1dkregore6Lyw17iqfAaizvjqtXhkwpPD5Lv15ae5AeNNbr5AWUKa2PqB1V4zeU",
  "key15": "HaQQvEY7HQmKisSoXFVTATgFRhmshr7jnxVxCHDxcygsaW5qPs41tLzW1BLF3f7qYkUR3DAen2KyNVnWUCgQL1H",
  "key16": "29SYtyAetpvnieFdBy1N9Kjqurs2utJdipnzLtM8PaFfdsZRtFm3BWfpEPQYwT9tfwrop1wqwzcgBHa1Wdo76KMu",
  "key17": "2QJfQukXTi5GCQe9tYUX2F5BWPQAtmnHy5heKvzGgc3QZGcfiaXu9B5CyzjxZjmpbtn3ynH6VZAez1NSLZVQGXSC",
  "key18": "5vFPr4YzEHNegz8kkwyQvJk4ZbPSRouCqJ5twdhHGpjM8k1ao8ZQZs8C3SAaPPZJWry3DiaXARwrEvZ4rQuiPimV",
  "key19": "3Mq9frEQo2VLwCBTfduVGaYsTBEbzmWEGqfb67CQR8HgUdaBZr4nhGgctufUGxtz2J3NXoD7bbgBMzaWjzAbb4vc",
  "key20": "664HGtPs3ifaR8A2ogK7r43PmF2399RzvvtgmmujsuipKi31zSktQQXdJ7vQoHBCmpA8YjbwCgkn9aKwD6fEVZQ",
  "key21": "3vegB3HiFBtoxNbhxM827kJmJkSD1TnxgKgh5LmqX4SkTudTEQRkSwy3jYXfEwwaETxZG8fQpKR9GSgiZgCM3mXB",
  "key22": "3bCbifR1VYggaaHxbgSt8vKXA67pTosE7yB2ABHtPuhM5H52jtSskst21D3gJzEipcqJYS4F7wR6BqTT2WJNm6fF",
  "key23": "YQooEL7i45grjksPNExCUgbuN4S8p92upyYsasJMPVVsAuyfpq37d8hcS7v6YrKYkJKvsw5rjpw8aPuJeNRiiiA",
  "key24": "4SMkxkdXEfHz2eU3TH4mzBxZWXMsKd85NV56GnmfgCiJ8dLpa8zxroWx4moLcFNQK3oZS3wsAN62sNRfkwNYGhBw",
  "key25": "2vahvbTAZGeHrKsCqybNby21Kz4kfZW27Xf5HDiujRrSfKqAtR8XG5G4u4PPBMkiTwFDZsrRFwzRzzqf8hz8jnFY",
  "key26": "2LsmaRDVHHigCg41BxujFK7WYjrYvcypQypbzDyLzebg6SBVtcsC2RUdm9fBdDFMra3h7LTGdVBrkxjmwc5pm5Gz",
  "key27": "3RwpzHWaHGanVqBCRFcYSnKPzXvtbvBbb6rvhVjAa3zZDvfqrdbWDTwK3qZjioh6XFBnuFJzQU4xUZ9VRoGVwkTX",
  "key28": "519Gx9xnEVDNjkz6RRjT8wjrmdiLHZoP9bNVMmHExgAwTrsYbFXAJtCmUUJpqVvTVZdUoHGNcTD9vQ4h7i9nNZKR",
  "key29": "4vY9qTQihdpix9cfWdGW9EKU4d2Pk3gS2vc8rEwTAwFRXaQB4NfQox4sfbTWQnM6MWD7PqDfs2VY6Dn1yhsRhbiy",
  "key30": "3ctHXLo4q9ByMsDDpz5REFwEd1AySKBNawT7MuLo13mtdtjNhrj9HBtgkFpGk4U7Ttd1krHiJ3HNYN5qMzBNoRwA",
  "key31": "4kc9YZHnyeEuVPtd5m5mujGUbkU5NRfh6QHfuNkY5HPxdkVZQpWGaeTNY3sHUL4ptVahyGCpgAJf9h7j9VESWUrd",
  "key32": "5HPDWGzuHehKYuqJjZhhF5myP9TRTTyBUZKGYyRVd6q89rXvo5naJcdmYTCEP88G8ZAqppsVz4nK648MtvVQy7Uc",
  "key33": "5b8iTkwQJsV6SjgDWtQak3MbQF2S46vmDKCaFmfMJgjCDGfgmE62qWYqasdp66k4nWt1rQQP1BwrFNULn9BqDyj2",
  "key34": "21jQzMEhZybz82AJq1gyBx2mt4TBdzm7aeV6HqKFDmQZ59dy4zAPj5PqP4uMHrkzdrV9q8gJmrhAg4BgHfhWcaNE",
  "key35": "3ErP2JNSycAwjY3EviHwbzncRdAq2kijNR17eqkLY2DZAXUsvPSXkZveCwk5QJrX8Dwy6ja9Sn8sCGuUgrpsYE8X",
  "key36": "3KmYpXWQfGSczgDwrnBYr1tYj7HqL7ExfBd4c3iXRUVq8CwLkwmnnpuoPe43sT4Psh9HyC8zXMyt1tFkQP1mZhsF",
  "key37": "5jcHHQJeTcDJVPFV8QGg2Py67hgWLwHezfeB4HEJME6jv2ZTwzFtFMigGHFrzyV197fTHsSvh6t42c74NJYx6yAq",
  "key38": "2WjbzsUKV6dRicScfENPLP4BUpEBYMQD5U4UckcQ1fkAUqBDtrnzwWjA8P4iL6VeCH88aGVnZPxeLXLfKm875Qah",
  "key39": "3wgUYDxvJTLvHHsRYXrN5aULY3EiKbownbfXV2K7HWyPLQNeXaCkrqUsM2qJNyLmVYpGLZgi57xiz1RQWHKpZJ1S",
  "key40": "qMDHQnkzcu7p6v4pDjw5D1H18WMSep2bno336rtg8Zx2Yt1Cogqb4UXUsYbpS7RbB9wECNxfacr5upW8Q6iJoLa",
  "key41": "3P3pWn8rXodDJWZVScsfC6wnWowqe1RBL7tsxqh6S4Rm6f3yA6EPsihhPkzdjdDjhaqie8cRjw9gaypC9S6KYFhT",
  "key42": "5tSQBZkvfdn9ZDryhmjNFUCNvcUBrcfkVyf7pohwhPRNiUv1X5LYCCzaA2MFr3XM5aR6J6MTJG1LaJ1bqGmN2Di",
  "key43": "4wughq9JRLpPqB3sTqBJ2721UM6sVEThFbK2krsgiMbNw8vZMFW1jgPFfzp7FVnXuVtvaEKn6tBe4JZXZxh4DqeQ",
  "key44": "62fQPskYZZgidddCJjVWK5HjhxqVeJGNMFmkwFvYYQ7AM3yHaGoNxCa4mTbbRuLQrMqLVUtg9ppospPeUaKikvZW",
  "key45": "3MBHvFWpNs5BAHFoo7jNpepHPGbLuhyzpx7Z4Dp2NzNX5UeyiSpU14J3oe77BaAwYC51LNVDg6sCyA41xRU72NpX"
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
