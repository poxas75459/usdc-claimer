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
    "3gqk5ohRMFsGoCCCZh4LDJxQWKwbBkuPv2xFnL6Mh6Ph7wutfnut4AhAGFJNdEK6fcPY4eZw6i2QxDYuTiCCNqFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QuiERAsoJKPXKy8u3sCbmZzecfF96sQ4qhqWjfJbDB5J3MUvATzEqnSvQJBGyCSk245RFMXpak3uxAayVL2GxA8",
  "key1": "4Y3hgfZyzczq3xcqENPv9qCB3fRLHPxzTtDqUgEWnZEzjk9MxGWHoEYLp99xCFAR7SHZhd6ZRZMSzfKNbceggwUE",
  "key2": "3ED5KwphJtA7Qs7tuPPHrw2hb4MSHWuA9b8Z5wPKXSkpdEH1GZxRpQFaxs89U2iUwHp2CVBMytoYfd2Adj9MLEdT",
  "key3": "51fiAwPnFAmGK4U4KsybjFfqj5RFE6Q8KVZBMdCMju7mVaYXbxMkLhVGdXnfr7gATSobCQYxptvm8EwLUJKyxCJF",
  "key4": "3ihAAoZXNQsVNbB98H5BZMdD8nijRF8Stu9r8XbFp4LRwkxhMU8e4w41xagDXrqtACHqUhgWAcGHiv1Aa3SUEQXj",
  "key5": "2bpLZkUJMHXay3J2PwBj3iopDCVc5E1kb632FBFHrPomvbnDDwGhvtzEYrdkPqUdBrwqGapmMoCBRiUJWstMDYxk",
  "key6": "38dtiGnM5qwAUwqbrgKPe7ftkGcdQoLWJYGpLScH69Hc4Jz6Hfz38inHCRSysa2GLAmVkq1mf4wuFt92cKNNhCFp",
  "key7": "5wyujNA6tnDh75gMzjfkxQ5Bj81pucyjBDme11YZPfUdPpxnGSWzn1gY4c9N9mzwUzsq1m9DVzHR7eLS1oVVy3Hp",
  "key8": "2T9WsHSjbaWBJ6xmkBMi5d2h1MpwgQaxemp4or9xoscAC5KLQGPNtPxT1LeTSc1KrNAXMwcfXW7RFpkyy2Rv6BYw",
  "key9": "oeD1aYrViNhTZR8R5Mps4ebkawN5FK85stxfn7AxNnAwUXFys9y7pNfaf6AJjFWaNRPqaxjXcGoBTGgG8jKhTFc",
  "key10": "4jxz4H9UUbFLKiUE37sx6BSDbq556fnZzYDu8kLygEnNaDmwGmTiBmpvsRnnn8gMj48XXv2saXxnPqrBneRmhoeu",
  "key11": "5Twjt5gA8v5Y7V1t8Ti38UhwnrgQz9VTfDPNXyJ7sxp7jmHT2bRRmw8Gr3UPXkhmoFKnXsqsvK9BngynKHrkGpDe",
  "key12": "2TwuT8ZMQzrssDgNvob1aRoc5yAR8ittHEJiSWGuyY1AY8Nkaqd8aDPCzFPwLvNRDRQPBHx61ckHvvBMEnVgr9Ju",
  "key13": "2UdjbDKkdBkbt4nWujwj21RpvWxtqvSqmaQoz54LciiN8NX1o39yRmSeCeyK7qDc98PbwX5EiJy1tV52R84jsFhG",
  "key14": "4Xppjwo88q26Uha71e8HBmKjkicZYXrvyohC8trxuR2qoRZj9pbaZAP3PAFUajTezrGTph6fSWYvE5N4GctVQ3Hj",
  "key15": "sd8arzexCrrfGr2t2G3Boh2NxLvsbWpKbe1sDnmmw9TSyJ3MwbKRkogBWPLnijDGp1soJ5BDeu9Pg6sTNMpfvqm",
  "key16": "2AkK7hq25FDN4rf2d2SoAPJfWKfbQiTqe4fF6gQR93tzwjFifLoY74NWfzsaKVgk8LWiNeyKyWkGfhfuAMHdCfBp",
  "key17": "49xeRKworwHG9qYVoxfLvSRTrgvhpCvNaukNCeCFu8nxYvb8w9jKSkw6b4Z3FHXsTDZXSNAeBxEFBt7hLinNL5RB",
  "key18": "4sFHmy592e1ctc6Md2dcWJR57ChHVBAHcNVg6G7tv32TYXbrKSQKbT4x7ME7gGGofYf3d3tJi6iMu2pBLdXopQHP",
  "key19": "4YfxVfm3g7B3grvfUJ7zx2VLzxftUYwkyawigwzmRGav2yzCMdfGb2yUpsPj59jakp5wA3R1N61UqWUiVCb3ihxZ",
  "key20": "2aSAXJmacHEvtBnBH2ySA97wLGYgiii5MBcTo5ALL9mwvUd8sSCnjxzCSrNuMMiuusWm55vz1kWKauCTs6AcnGe7",
  "key21": "2xw1eKvZY8DK5YD3XQdvu32xbfnMUYmddRF6U4wvdcZ8AnmXuyyv9MfvfFTtyK6bTJMaMu9YaywfDNJgeQ3vSkqs",
  "key22": "3fNG7bRoBTDVXrCraDF9MER9T3ufz4myaWiWuNuoFQ9RJYYQUd7Xxvx2RPDVhaWfwf2gypU6h2qABDpdSC4zgDkW",
  "key23": "3fySfAwD3pv2xa2grMMFkgiWHjSay1ncGMdFmQhn1BMbemNXhknBrYw6MaBAuGvbguudR1zCMkDcm9h8gtBmiFt1",
  "key24": "4nQpquCSJ1wAEw8A99KLSoCJNj24C1Uqg2j47FetYMVMMeQ8p2ngMcwYmvqs65usvYXgXWCYG4dycRFqw61Gyjg",
  "key25": "24WqQ2ucwAtRkxSazWrBZt7zr811XeMYBS9mbWbUsFjzTrj8hfFiDXD25ZBjBfNsT1BPnorYSBBLStKaTugXAW9M",
  "key26": "5SJv6yETeaNgJsEem7BKcdm3uEgBzH1KcUWmudfVEKU1FjPkoxZwdrhAbNKNvbFeMoKdCxwF5t7CpRK7XrzXfd18",
  "key27": "kboF9FHzbt22ZpwfaqJSNytWRbYgDR2rSYxA8kTnmuENBM8fGH9ZhA6RdHSPixNwAhGUR298mC8PyCREhf6bUgz",
  "key28": "4Qc9mN4vdduyg7eAgxziZHKk5gxLu12EkiopNa224n94SCRnwGLKsdiszTLq1Mmi8GRQnM2bSinM2dAhvfBiuayw"
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
