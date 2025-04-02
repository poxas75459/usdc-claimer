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
    "2U3J5dHkjtziikeHaodhEgpzh6e5ovahAQKATL33eNUjREaw2azZpfsgUufAMDZycRFzXKEd6QKPX35PD9N9JYtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKBm6GJPhdDrcTyrZtcPU1nJ2Q2xuFhthUmzJPhPgYLA9iEBubFxWF484sGoD2MsUrngwZM9zBq3BktcvoLpdyd",
  "key1": "3TVZTKAtUHkCztNnjZwtGDuTmKgsMrTL9JtYSqJivHK9H4cMzqWiUqaz6ywHbNbyqZ7pLCijVRm7KM623F7zWCYx",
  "key2": "eS9wQd1Gskaoz3d9YPm9ahhbDdCQJDfqMwTEpceiRe8etcV41SMbGLwvMp9GEfH4JG3nX8XomdoELhjPFcyse19",
  "key3": "2JeeFnQv8phhZ87Tgq9tDAo8N5aRdxbyns68sjhu5hnvtaQRkkCGrqPRMRsH191AoRBQhXCsgeVWSPCJipteLjsJ",
  "key4": "K3ugvgkbdMaza4gvVU9oLBuETEffZtSWsQbhMdsjSYzobfHWp2dzuXnbAhCYCCvKoch6a82NgoZ6rQtFSDA63VB",
  "key5": "S655WAcJuCCX9j4xZPokXLbYrqXf3C3ipH4gBSFMCkdn9XN2qdTjqRJwCZwo9sooRgbCadYdgyjV8W9KWHQFbZ1",
  "key6": "2RzzGVWduCPAXDqiMizcUfQYbUrQr1iLa6GWbfR31woAiqdVSwFbk7FkRteGr1Ey4kuBDxzy1aLRvjnuxKSTA12b",
  "key7": "4dDfpuzFJbfkkwviVMFqZd8SYnhgySUwdErMvTitkCnt4JKeCBtqs8a1LtvGVMkdFdRLE1qPbKiy39CmXs1AHzsS",
  "key8": "2zdDtqsFdnenhCzHSTZ2eXuyU5DEdMVctMpHps43tqMy1FZrpT7a5GbaJytFtgCJHqjgDjDeLCSVskxzm9dpkzLb",
  "key9": "4c9cB5kn5E1aguYNHTB1oGCz8P9ZRc2xDJmtvyNATnEKNJBqtzYDDtqd5qThHbisTvqTsduU1EdxUxfLsRCYnkM7",
  "key10": "59zLoQjN25szEVeK8hFzh7LDvn8CRyVFm77sgoqttdsbHUcHcD7xqpnrXvwshjZGqgwJg4StK4VdKUCtYHQZHyte",
  "key11": "4YH2quR7AcFJTWw48r6VxL322CxrTTgi6c2SN2eiokhaShHBatzpD2WBn282hKdcd12awKqs3pybRT5AaSqRX9Ag",
  "key12": "2F2wgZqa1qozfMguBEyUV2f6MUo6sS8F2WmjSWT33n9LQ9GQbAnjhoAAu6gebHL8PgJcwSLVLb2UArarSP6AsjMq",
  "key13": "42YipXHeppnqXRCeWmGoC5ShFpBTnwp4sEwAHCYPdTWjT5Z6b1xyCLXrg3BBQZarXERsN4aLq6PDWd3TJ6XhCmgt",
  "key14": "u7zHmEavTB3WbDdpwMysD5L6ckJ1ocjXJCBT32f8UCTgjQMrTGrf373N5vpmfg8cda2cP3uYDb3CvPLLsgTQWGL",
  "key15": "3ZpBHxrasvxU37Q65oeRwpGyTuRbE92LBsPq3U9jr6PdaFpuVteawzSb3FxMcnX8eg85763vDpo4b43DNPW5mFgM",
  "key16": "5fx7Fyry6RYDvKhzYntAwTaRinYH9sLiTW1Ta812VNNQ7yuwb2wYnQiFQDKnJjDoQkxqhkaWPtTqw7fGKCHJanwh",
  "key17": "5Ph7XmeBEzFcRaTh15VhMEoURX5GGFw11VyxXZkkCjfdHRk97s1CuDTq3TrVnV1xkTBAcG7kkbDqQRHiB6ZRwd7z",
  "key18": "4Ad6bGfB65fz4a666c2PB8wtMyvMTsZNqUNrfBxFgvWtsMs1oqLQuDfVLTWUTCSz6kLDNC5bs3CwfqSpz97ooSE1",
  "key19": "5LcrJ82Cfrp8CnATT5ozpWN4PgF2cT4MfSGVyvMLfTRiPiPafTYPUdW4esMSZo2Z2YNk4fZfQmpxJYoU8jLeXhDK",
  "key20": "3X6a3ZtvxWvmLk2G4hYNSXLofNKU8o47ZqD5qxPePHvmV8By4qkzt96os5SgwXDA6PUaz5AJSjeH8bZapAvbURbj",
  "key21": "KwACH3sAZTpZkJ9D1QHBxYSphsJWpBUpjTR5MX1RvMyoJP8dUkPXzG5szV8bM67N2uMA9BNcFuSo5oPRCSpNCoJ",
  "key22": "56pc1Tz5mETohm9y6MYF7x3L7MdX4RUM79DpoDWt3WY7V9pf3X8ZD2MnY2vxY95hEQDWLbKCWsLdJ2Ww3gPHpr65",
  "key23": "3bBRHCCb7Gu2rqJevuCWkgU87p6M3LCwQdBBPsrqMuABy2iAT9JPE9xweDa9sdJ9DemhMJ1ChosLpsdGN7NtEqoH",
  "key24": "5eKogFGVzix4zib8JrxqDKbAz8h4SXauk2mT5L8br5Wi1dGcKn8eDc3gMqNy6qk6a8iDhPmnsRX6wWnmQP51XFKX",
  "key25": "8LB3Mjk9oWLCkuLRb6cyBq27SfHhszYYn1UJRkSj5sC5CuZ7D7c44Ym1qY595KnKFTyLJSBvsbWGymsDzBNSKWP",
  "key26": "kyEMKNViQduyimr2SSgr5FCBE1cpK4ZjtqiNnQS5RZosDVyymXEa1DuGQMVwVp2RDPo1RAiy9KjFr1s9MtR6c1K",
  "key27": "4ijbhjpTSb81S4rfTFaHWYnynM21uSRyWEdHPBiC8aabTxNF2yB2qMu9RTz6E5sQXWN5REpaUURkz7ZukmwpvoiK",
  "key28": "61dhbv6tpNQWdpTf4WRJbWXpD7L4z6SYH5mHvJJ7ynFGEMqhdnemrWh3WGCt1UD2E4mdjdyZ8qTiG8fi8ZrjavnM",
  "key29": "3jpCudACJcxjhB367FNhgsXJ9v9gR3yEeimDbWPDVbTBY6ni36vq5BtpimpvhG2bzDYMKuz7xBJsQL3yMkHVuznC",
  "key30": "4GPTq8hJDuU7PrTWubTcn2oFr1syEevFUXCCmFxr86k3EYsUJt5fkRCwkyb9iubnT1nzPkLNnLT6tGRD5iiBaCRH",
  "key31": "64eRY6TNRmRib1bxzStgnfEhosyYthRKoPssyn2s8ZWHPJuGCskhVV4Wcr33rFo7rmkcUge41srNgekgHzizr9nE",
  "key32": "66ETA3yFCdtYufmVi8NqWH8CVNMXpWgJJK3NP8shq3m3MubAYUiGULWQY95xELiRSuTb2fTBYvxLPEKjjTUfpauJ",
  "key33": "YYYEawfGiDNApwerPScfrKx7n3cLcAgNjX6FpBFG8Hpe74VxLW15k88EXXQE4xwNnu8zBkbcDWEmhpzuZS34AzE"
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
