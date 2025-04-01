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
    "3X7sjKH1d6RfNpvN68RmPr3G4Z47MDLtQUw5ENHgU9ngP626rp1qTpA59iipyRGmDvbiKtWJmoFPukudKivcYAvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCZM8W48wkpYFNENGXF3iVY3FQsA4jWkrMzmAX7e616q2W2Mfe6etbsEVde3otTBXHKC3ETCSyNXSeYKPV84pR8",
  "key1": "2va1yyhYGeQKruMCeqxjY1zH1Zx5NEsodKRY7BFapzLnGnxTUyortuHpY3axDxESkJExpcsPqWphR8ZCvpar6oJy",
  "key2": "3rb7Xyv1Nke8tnDLpvkMLbZhSmU7HTpxeoifHnjUYJYWqJB7mcKP2sqjY4omiqC3xswa39GVbv58iwpZ51fF6P87",
  "key3": "2kefbmVvN3MMNssPzJHBYXUTvfJxaoC6EfNXo3R592HbdDmzX2HbCLJ56FMwUXWZs1UjcysY3N5LPdFdEF3Z4JGC",
  "key4": "4xd6Wk981GyEfsHsdWV4972MXwJ2bXyrLDtMMaWNVCYCrocWQvWCCtWuEKEi9B9fV4UnKWPDpzR3bDHjLrSvYgTx",
  "key5": "4Uan2qy4aRARzVcWCKLZvu7D26M9jriXK8JUPBJCf5Jq8zVEwS4B4S5azn4zoJUZJTHdhhwpDXEh75pNcW767CBv",
  "key6": "2z5AYr8zAthT5pvZQoWTxhkexKDpKEo8EJqJAd8ArWVoSAW3o2cbcddD3TtCRxdSZvcqdL1Wbt7zkBCsVf1AKYwh",
  "key7": "2DRKA8eyxv9YX1naHAbAmJD8Jf1MbqNkUavn6griXreyfrmdYVdc6hU4V7JVQMkb9sDCgRVZqVruwMovKBen4S4t",
  "key8": "3UveEN4f3FehAm3crkbqwc5BgVb7VBcDJCegcN5chs1sE75JTENXRUoE2pGMHrg3miJ7EsiVbSV5dgsTq3LWLuxV",
  "key9": "5CPpFR7cakkin1Z36AYgCeu9gzXzDfSXkmNKeUQZDNNHT8sojsTjHr6TUp2dA55SF2zvFzW7kpn6qQZrDMYBvNGE",
  "key10": "2epdk2wHmmAavBRZRWRoFuAXpv6USopaxxnBuWfeZJVAPSjPgPd6MsZncEz2QP1BNF4H3JDppoJoFdpSYoCK621k",
  "key11": "6hmwVs5i8tmLwLJ7f44SkoZu5tu3QHUixnEAPC4BrSgsbWXtKfSXno3BuPBnzyAZYBwqH1yVgsPBNGterebfJSd",
  "key12": "4nGU42LsbUnWkSbpMfosiX91ajXqfskLv6NfzaTuZgcYd5fDjKMZS2ABJ1Jz1ZhLv5G1vkugFHmXevzJBuEsmdav",
  "key13": "4NujA8h856ZzZeKX9fERQQ2KbbPkBkd4VQrawxxE9EFDJkVPduYDkVM4bAN1aWa2m3SLa9jJDfqD1TJ1snEWB3s",
  "key14": "2noBGUA1k5nSQS359SP2BNo8AM21Hf42YbY14WsiumvTyjmRFqH5rqj7b4VvhMiiUqJQQcbDyjD6JsP5ag2RZMem",
  "key15": "2btHegRG61JdSGCF6x1nTBbg6TbdgzJAJXBfwo8ZV3UyZ87H6r71vnYXWp2d1HbCP1PoPuCxwU19pquFx52GzMuV",
  "key16": "2XVtoUo8kb7CR4cPyX1Z5QAHYhSfpaqXs572cZ9pFztNSrzhAgGxvKGrHQuRyCc3V8E2gfGReFJy8yHp4xCpiHYY",
  "key17": "2x439AGop55LbuFAWuvgkqrEHEsCTP26NWeLNLqCojZcqpsLPc5At14CVEkkFeGX1xJTheXagASpvo3Av3BhPfRZ",
  "key18": "4krHL8aUh18jW9Su6tBk5XWyJUhq2jga94EGxeEhBLQYhabycaL8GuJ8qXVv4Y5JQjDD3ViWaAb4J4JT7sh3f4fn",
  "key19": "4FNQLpduZB3qcTKcyFd3nCRzuTZ8PZsfgS8EbMbsppHaHWrXtKo3V8AMDvQewbbrzTEcomAg37uZ2GhRq1okHTL9",
  "key20": "Hr9e1aWMkGHwX42KHxLtSjdzvwovtu5kVmGZVfjSP5VhiG9zMAWmyFrKzU6zmTfMdbJKJ2nt5oeEciGv7vVBYSk",
  "key21": "2JH3b5cexMkEJm2myBXwh74xuz6RQAMBCjvLJV91H4sZhFReeWTXgmnb6XeNPVsiWcKHCSUscHWCpuambxzE4NCu",
  "key22": "4oafC8qJMMHUDB3Jo6tmdLoybMGfvZwZ9Rt9wg3vmeH4PRQTuXdRLrRUNxuAaMHppos4MqfnNdQnGTsVC3HvTZ3T",
  "key23": "2Dnn5GjaPJGfLtzaCnvGxmCYu2BuycvUWTVNq7gVZZCbs3dyYo6w85Gu57gabKZmw6HevDcC3hNP4RFESVX3B6xU",
  "key24": "S8yrLkxVBPUvAJVrZeStYBwVPwtnafMafk7ds4eq4jC6uBiUZVCW3hs6nVTHU3NX5DxBFqXg8wiE8gAZcxp6X33",
  "key25": "33WD6T7XSjyJDWSYeuBc71fbapPSRoUnqdDQo1pcbvsTsvrDd5sXNubbEcW4yAYgL3qYicXFS38iiRdzZfLrTYJa",
  "key26": "5qKDirkFmVniPCpynnxfBEdDggRhgVWCVvZxZSUpBdGmSjUNstYLSNkTirWSSB43Epkq15NTPMkrjuMXdtxrL2MB",
  "key27": "58D4rcJD1Wae97xbHNWYgeBo2mQafsgxacgdrSG2vv1dRu9L6eoZsLRL2bmjoV16DS3W2BKTKMUStxxbnJmnWxeW",
  "key28": "3nvVVpTkBttXh9S1N3AieydUdaSzvxCWKaBvDyyn1nK1LGdcCbBL4KCMfkECzkMhNskMiMnxHtaEumYHmyt8vujj",
  "key29": "5ZV7y24fbTNytQQ55BDQXMM9ZrLs9jLmY4v32NMejA3WV23U1BLh7X8RpN3rEjfTt8fQabRmfqR8hTRNsUG5cBvB",
  "key30": "32tz86E5aSvUsKAhqKAxfRMQWNC4yFRaXyW8gcHBSmvk4FWswyGF3jprNc88x8gbptijowR9ETW9AtbEmvm9oyjX",
  "key31": "3UNZEEGg7djE3Ra1tjpuVyFpiBi5MB3GCQvQZMyptS2JDyN8JeFqy5ai44ufqcukpB4ueK6UMiVkdtgPQTEYxAvC",
  "key32": "3voAVdroJvTyBKG5AUPyMkpWrzyRs2zt26ebwdPGrgkBTWTtbKmjfdqaSn6P3Mzs7KHbCwgk5Xibnp8tAY7fpNyg",
  "key33": "5makmJqYdbyNvkLD4oXwyyruNAXdVauPS31tLbmkgVdbZ6VL8S47Vcmc7hx9zVZoqp6P4nCUo7Tx6A6ARZxqNX2q",
  "key34": "2KHNpDjg9ZTLahWriJFizUqLmJtxVdbsMnXZ3TVdxGf3U34pnfa853bWJMumYGKPxBzecN2yVVhMqNTRNgiHunYr",
  "key35": "3TanGPNHqdVHprAf6DxobTBnPXAu5iSQcPjkdBLVEdQghH86yVp3UkwQcr3bDLYGyYVCk5yoJdjmWnFUZZCz6CEZ"
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
