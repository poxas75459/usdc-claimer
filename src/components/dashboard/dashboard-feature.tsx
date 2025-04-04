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
    "2YJbT9iTTRS9wEZcD1yhvp9x4vEpH2mvHDid3QVAGhs6u3NvKLe99tbtusqnihy8K1rhChByVtFR5JmnAsEHEKRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEsBQfPtgsKD6NZHb6ePPLvHxZa9C6ph1gwh8UZvYSUXQ37hcmyNu5wx7ByygA3d2VuKMb2gnBtr8PPzxWyUEtK",
  "key1": "4mUnNszoA3HWAhG67ZrTAcqmzUS3kPUz2HbYuytELPqoQas4utF4pVbGrhbB8turZFW51eQa4FmaaffSrNv4zP6p",
  "key2": "2B13VCqWH7t1B4PaZR9bm8gr8TfnX6DRyfPGic6LoW9FinSwoTnv9fFaiKNZeGskBM6PdAWdf9ATxSpTym1TX5Eg",
  "key3": "4r3MKV6yqwzqAtkhAqnXyTM3UPJ3tu5y8CML1AMw1xYXGv1ryLnx1qgGn6jfW4QLyd5mfd55yxyqcR3mMczkJxa2",
  "key4": "26CjXzuxUhyJdvAwCK6X1zAMjZ3NmPgF1ZVFqodfwU32ZmeoG77nGSjdmbdk2q8XccvAP84DpwjE9KNR9S7JTui8",
  "key5": "5vF3WMYvZArcWvqc6kPdx6DYo2G7imEz4Pj535aguVZgVRBL19jm1mczKA8fJjC1ByuD6ot99w3uwnLGQQQYq6Sf",
  "key6": "5tAKAvbHLbzFLGxzFVjkUFGTJTJNAbP8gMBNEbRwnPZMVCMvLvZZNZuHMpEVMwWzmgvUPuL4RsoJS142mp4KtEuC",
  "key7": "2K8QzFda69gDta1bsW7jUy6LHNzunyqrh8PLrbr6k4SyyGrCcXSeVAMBDM9EWxuxLViyshhh1wuMQt6JYqFtpbRE",
  "key8": "5XtyY5pYowEoSSAiaiErJBA9VgQ839wKpDN5XU8J7n4pM1oRiisstZwWSZnFbCTp3qrLtfxSryegiWeaN26aA9qT",
  "key9": "4aPX1Zgy8pBQFbtfvjNh2jDQaJBancX5k1dHvXfoQSMTv8iRAZsEULkUyuWmAHwVUvjrjvu1SmmqVyB1S467A7Yx",
  "key10": "3Ujmx4nyjet64mfgQyu1xFWhs5Yem1gJVKL9SoFDX23KXuMmAkWyX6yM8B1gug9Wfwpc7gmGvuvuoLNqmSn2QLfH",
  "key11": "4bTnSJGmfWQ5jz1panfYWABaxhT3aD5UVcy3koqqbdqxQuSV6yC4tqS7UJ7rCpgEPZc12Znt99qW4D4XqazbWit4",
  "key12": "5DvHaPG2b6QFgdijLUNDKcM3sgSy5LouMG5RZ6eCH1JjAsE42TogCvBqRX14BWdShBEbJmfGtHqcjCd2wcS3hHaL",
  "key13": "XH97FvWaEjXJJp1EvsH9yGXHJHw1tDAi6a1CvCrgWazmBQ8D1mvbAj2vR7CjuBuVDMPmAopJ2DedKeXfBueBEgU",
  "key14": "25btEgy29qPTTzmAhquBKTwX8Kg85KkH2iXv5gCSNoEsXrYPcALByD91EUd2emoASKdTfuKRb4gP1hYBnyBVkJet",
  "key15": "2UWP7dWaxuWjd8i6EsbdXPTx51apXfHLQ35VPu2vYQxzWzcGtWULKR6gMUifrqKcf3a21E4eAZeD1wMxqoeaBoob",
  "key16": "5iagkhJt3GPKBoZ4wFFqYTJDdNDvyDKZkpD6zCX4uEmScRe7x31di4HppXXPNmeqMWaY9H63RWMUAKS8U8QuLDRv",
  "key17": "55t6iptgRwJdJPHYYBjtLmM2BnJLSKNzw9fxvgvKKoY8PnrwFkq2zsgvGasogMwzx4cGDYuBGj4m1DsRSgsBz1XE",
  "key18": "32tpTtsD3HGUizqNYxwXMgYtgMmpGiEYKj1kicdY2VziGoBzCYicP89T9cUqXqJe4Y682MEtVd5tf3yoDXguVrxH",
  "key19": "3z7yjpf2AKYBA1ex1GjTRLDgKLE6EU7tWUhYpTadTviecC8ygFqL5UFwBcWLgNcXxNUjb4NyLNm636mXTvRxe8cU",
  "key20": "5BQ41zDThLFGKxSXBkyJWuhjsSM91yGzYBwNSpSkGArfBt3hanGq5zoe2a3XYhMfcJcGonMCGHKyqjkH77ZAenF",
  "key21": "5fin495DWcBtmnRSs7FrAGCMnSxPpXHJHsVddiSuqd57Yq7XwknU78f4a3dZZVtbmoYGUBe6DhvS1NrfmEwrnQDt",
  "key22": "2aTRLeppo2R9aeaSUDtBssoe1T1tQZmHQKXXh5idjNrKzhrVgC5m5mN9c2ofd3c8v2H1MdkLe7sX7Gt8t6v7L3uS",
  "key23": "2YYQdRgZguLGaCky2sF9Ag2RkJbQErGn8RjkGrhCoYnWsKA6xQCncursH4emYXcb24HZgXFiRpRsDKnb8NqhukYn",
  "key24": "26LAAtD75jzNNAiTbfV5nQwYSCtF4cGbnh7k4L4rgymWafA1iq93JsEAEPdtnMZGXQXFTK5XBFdhj3VAyokmLJYu",
  "key25": "idMUKQQPKrPiPVQjNDtUy1S9te2dFMXNbfcT1P7RLRts3s3kdC7yk6NGgdhXSmqLZgj79bwyra7knyEXM4sxAeG",
  "key26": "3zHXaYH4iUKq1vj3RvihaPZZLaqunzMZ4rZUEtSD94UZVtQsLp3Ah8EHMduySWisPyxSfyARHeVb9MysqLtyU1p7",
  "key27": "2gmvsgdG2Ss6yU7jQt7JTn5LChXeehgkxPigkq9ZWa8aHn6GeFLxysXiSLBPsp4u5QoFXpWE3JzLt4YKVH2UEhYj",
  "key28": "41x66VUPim9XjC3Gs84xCy4jR7ahnuWSwBCSGgitxbB3z6Uw5ZsRZrCMZtmx2M8fy4PAur26Dh4b8tDr291S8jTR",
  "key29": "2WXRwPFHwab4WWPF1VEqEnr17ngV9Uab1FwoNZrvA1853MibGGNp1vAcp4uXyfqPikavx7CGRmDQCe4wwpqirzd8",
  "key30": "2CKNhTR5HTvQghLgD3baSjhDJfW4qa37wcX9Nkd5VWLBASRPrQ1jzoB7y2DThDYCdapZ7D5HVf2BNwdsrigxjAoM",
  "key31": "35pVrGXPXLx2mZytHLSDsAa9kQCGRuWD1G9zVxcnDFcKKtkwZFoEVqvJeCxJHjmHWre4YGCeFcE4PhujcJyxQ2QA",
  "key32": "4VNYp37pA5QU77GpYTtgjLHBG53qyrwyz1nWDa7DvKERFk8MfLcPbKHZQtc7zUzDrz24mQ6WkyNRKkW7ZpDaZwMj",
  "key33": "Pcwq8pSdrxAMBeSE6tGfiUNB5xmogHpaKRWeZQE4msTwkWHuXDjFRweg82eLBjkXG78J2UvR1d19L1JbqyQzKLV",
  "key34": "53DPcwh3vqM1KS312Y3FmQsz632HD6NT2R4qwRMNFzKF5qHF5ZhBnV7GnkbBDyM1vEQkcAT9iA5pxdnEsV6ffNdx",
  "key35": "iWiNN1oJ43YuchwJhqes8jwVqQ2bZRjQ1nTjkTcRF4eUAvVZWAckDjbTGhW4ANvpGxeJjjcdsHs2GKKzP5wqPfi",
  "key36": "GfnNExgrYgBTHFmw4RXWzRRH3wYNXFSU9vunhY5g15mTJdqzaVE7hBzu9qCEpCCiViQubmaJeudWUDtQQdJcHMS",
  "key37": "2rQSXafPn3T5WHMtEJJg1ykXuuPYMuQ6DnDjif3amHm8PeRDeVTekGnSDHK66Hfa1AX487QbXPwvmEiUGi8RzqS5",
  "key38": "4vEaZRi1TgfcBXSXFcJAvGAg3R3NmZYPX6kyNpsRJmUUjK6N5Jx1Rai4eiMPLCCKbSBbjnMqJmwckeYfZHFL3gFb",
  "key39": "5fjUVEyLAj6cFdSubsyfuJfsv5dK43dNgQ4EFBRdjK263qPskYkzJrjBG1WXLuHjNum2dmTA79nRJgZUnUTpB9rf",
  "key40": "y3RyA27xND9UcqWQSASgwGbYosHkuTfWgUgNNBXAEhJ8SdXawyzASPUiavXd1p9jknw9cKraxbNMtoaKaYShxTD",
  "key41": "jWT7tccS8bSGAmEkVRx7HXRVLWzE6QgqxzqGr5fwBE5B5o1FhQRPdPkea4PXYAtKDXdaKTPESy1R6UcrLhw9oaG",
  "key42": "5vK1Z48nmceK9eDn7sqG2wcg5rLUqGJaiB824rDpSJELPx9Q3xTRWzXSon1SNbmrBw8NPWPu4kWVUZgLyxumEfxF",
  "key43": "5dXJmCA7s4c3VFqSSJMk2yHcNXyvvSR9hjWCR9QXxHYNyU1v3R5rjXGgS7pk55zrntG55nm3G4tDqZhehAZiSTnv"
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
