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
    "5eBrCuXPcz7Yf881zAaoMcL1CwDKQACkE1tdSx8MXMUixELuV161zpJaTk47QebLb6dnp4b7gdiqMMomGikKbfC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qv7pXUgpwsrPYXtbYvSzrn14jTwq33bC5uVtoBkSsH8FrH494rgfpjrfdC2nrHiYhoz768MM1xyWMtfvTL8Ejyz",
  "key1": "ZMJautz1jdbKkbKfUsreUNQeCec17RMfe6ruNMo1m7WyA6ZwFxS6FP7JPXUJhdH319sgQqTQwsLzQELeAGJjpEz",
  "key2": "3hLxinMDq4YwomP3ynGkXamVkxtNoTy31Lce7EmkSBxbJV9htTRPwdSqo92pHkZ7EWzUaUKDhVYgUbSiM83QSyCF",
  "key3": "5xNz5nUusQDNqwZHB2iUo21yr9WZhozvmuczsKeasT5XBwtgJdNSHRDyZzbBviuQdNKob2FjWwNVAsyvoSpC8bqD",
  "key4": "4dmNnyL7zbjrjTt54xiYNrbpPprnQ7fFcYnMStyv9nz8LqiJmY9uBSCPNGaNAMwPUSzGSwsGkWn1eCTBgjaCKa7R",
  "key5": "24Dix9uRUebf9rhaLs4hLK2CKyX5n17pvmSZjoTGuiGYgYpcacvJxyonp4LbXVZRjNfVtq8hiHHNMWMs9FXnd4gB",
  "key6": "3e8J7YbLnfxqpCb1t6kjh4qWK4Yc3nEniAm72Y5LCLY4fewEigXTfhztxxUyp1qRnPrY59ageVFDGnaW1g6zw2jK",
  "key7": "3pMLAEEs7ojpHthpuJJkSa3y4zPj3LurLk2ZCr5qYExj5y36iEDXReBAoT4M9NQwqDjtqR9W91EfvFbSXhvKLX81",
  "key8": "22RFGM3veCMHh7WmG2e97b4n9wEWRBen7GEDsi9HcVwcLfDVS1Hz2UrZXTHu5FDcznYAqfpySffxDUTyWxri1Xnt",
  "key9": "2a6NEYA6SyBSboNJUcADYCnTFZyM3mX4Z7x6tN5iodYS6jePXD56nwcMA1XpRBxAULHoiqpdsQPd5djZSw43nt9h",
  "key10": "2bff1c3aiqbwhRyRhdsKfFwpSerH2o6ttZJjcipzY2Fcxb4RE5CDQXNHnx4woABKC8iihvaR1SY29m7Dx7wshBDN",
  "key11": "4VS3xLhYSA4AFBMRgrxbhcw8NqeYSiu1sDE8oTwAC6CVB5QNn4TRYVXN4ePnqpTpuYb9EcyfXDKxE3KxYJdbs6fT",
  "key12": "4F3uzq5CUfHEutMXBgVXfcmASzw2XSYRad6ewV61v2gAWLSkg3umGDVYeUZTAtxr3tPudFNS7hVu21ANErEG6Ybc",
  "key13": "onUnQ3iNQPFLhDbCqJXpsxugBa3DaLjFgfDCaKQngWX3jUZYQSHUWwQxAce8jfnVyMfKVp7vrGpryxfTFUK26pT",
  "key14": "21BEqXK9gxAgnL1mzTru2oi9SvzDEfaZofbw4Hf6WcCzsaQeeGqsxSJgcmC5bZf6XdLM6cETe7U3gjmtw6DvZ2jd",
  "key15": "2ex2KQnXSafMLNkKpqrc315xVHhiatA9tkauziyEv4riuNj16piGbdvdcHnUUWxHJsvBEXjjrdzFWm9JUfnxLH84",
  "key16": "RvZ4uGR6pV78yMgzn3k5zbpKcqriAHqms4JGa6pqHcAjRkXm3TtQRCLGRdfiMwnnpoLWWZsAHt7UGuc86XhpKSu",
  "key17": "29wBEbLGtikbNBaRn6TGhbPmwWbCuqH1jvLoccQRDWot1gUnnyYg1ZQfp1DChNWBFzJotJubXmzpfHEYNtwELFhS",
  "key18": "3aLPviBt2RyS9oAZHrCQA2VBJuqKk2RKoDkCDMSXhyRPZwm2xh6AuVa2NcJF4SY86BsvpE4JfS4Z2RuJd82oriih",
  "key19": "4vTMFZnDjJ32eKXe5U2HNGSVuDP9crXDgcDmtt1kSVXb8TveYdCzGfUDuF71rV9Dn8eyEznbuAp8LnuBb3E5Zvby",
  "key20": "W1c8DCq9vE7bBtGYXYTW2V2W9Yv3BEsCFqDosexugAHSYD36A2i7BtseuS333EXEwL6XzQJvkLeiZ2bvkqCJu4R",
  "key21": "tC6TvZXTi9SssWG76kNB1jSeP5qg3fKPHhP2pSuWK6X1w63SdKQJoQHD3EqHvDoHheysVxRuaYefYeXmfbFefCs",
  "key22": "31LGPVPPSYnYLvSEVpmyUuwjupgn2tarKbe1Civg4vvHTE4qByE8a1tqio1PumvzCxoxNX9VKWkJg8GqFwyT4FjN",
  "key23": "63Yqp3vD5W87ozLbJHsT19ti5ewkPm9o6MFCFCpZcJhxT9tBbyW7K9pjqZp3gzwbJ6N4dc9ivQdz2efBkaPfimh8",
  "key24": "5ajoXPzVwnVbTxjCJzdoMBh7d6RzqNvGgrveT1gkK5YZdGXTXR19Ub37dd7TjdZPb8hEVYwHJKXkkxgMvg27V1R8",
  "key25": "5gQT6xPLHqkyts7R1vmWzhG1xbEQHWh96uyKnYd2u35Qgws3v3p9nzan7nzu6u9TTbQxGJEeRA5T2dGcoe2YiFEr",
  "key26": "3drdLdxxicM2GZbwKZKysZ7YkwpDsxVtEedspkrvZbL5iYj13LJBEjUdpeUcCyQoZe4H6NCW6Degmnxtnud7Sv7w",
  "key27": "3rC1XM1z7Wfx5kMdJyvdYyimqyxzvy7rtmNq3GTygF9hpYa8w1Dx4YWoJQxyujEvsud3c6H8yBpFxNG7cyQCcU42",
  "key28": "3bbN7QB5a4YH92E9CQ1fijSMePQgmFNHxQJhiBm1tHhhYwWMAYWEhLtrsJbtmbn4DtbYbZdHiB8og5FQkqkp3oDu",
  "key29": "4sNEDnS4hgqC3i4jeW4pKKHm5FrDt3rJMFkQsw6UpSLgLzkqaRTLoAqJSW1rPkUCaMwnPdpmM1YUxAUpecai5qxV",
  "key30": "VsEenuqESKUAUKtt8HRoVUfirYLhgnQcMn1B2rAHyjo66QL8X1jPnsHWfPg3NRcUUwYkjHvgzjMdspfRodvyYUL",
  "key31": "5o9tQEoQtkz8PAEYgmFAm1HqSLsUAJoyLiY5Lurhjum82qTSzHTRXJDXbUNGzJnwHebaZSTcY3sWbL9KAuy2kQJb",
  "key32": "4Dt4Y1yNNX7L2avJNqDnRMtv8qB5gJk9K5rKnYV2211wivv7rn38gntNHaDdjCxthQ4jAZcLUjQYo7efnUTTpGSj",
  "key33": "2VWV4H4Knx35wtFk9jkBwM3jms63jedKZFM443fPJmiC2PWKEDRYdaPDT7PdTDfWL5tonvH5G1ypB4ruSRwMPxGq",
  "key34": "39ZDyvNYXMybrNdBxUpD483KTMKc6JZzwRTWzTTq1zmHZ8Uk5UpqwTBTY366mnq6ZAjZoNGWfn3ziKnnSxY9zRbt",
  "key35": "2VgZPeiH7B3nJWzwsExb2Yj1A9KTo3V5SPCx62jpEKvd6ajnAYBSXATU53d4GMeiXR8KNzjuvireJ69rNrDxxXrW",
  "key36": "WRivXDv5GburK9NN7RXAyPtGiTr1W53MLUtNxSuQw4suoxWapWZc9WRW1pQKei6eQyGaeJuR6qtU4QgKKcjGDRC",
  "key37": "16FFvJiRLd2vzbVwxVo8hjUK2fkTFijKzW3qm7epXEHxLDq6sZ1GG3HbPRrr7qpESqcrLMEaq9nn3hPxibkBC3f",
  "key38": "RN5bGeXfQr5ZetiGcfn4RoAtvr6R91rj6LnSCaQhm458zhvhY9ZrRafJfXe7sdRYbypPCfQr973E9iLUdVr37JQ",
  "key39": "3sN8t6kWqdyQ5vcDTJjwgyBH68swMtb174NmteYzjikXiQwtcqyoHLmswrQbPAUQdNNB2QZRyQmoSEf5piuApwtS",
  "key40": "2wroLUtcPdfM1tDu8YoZCNxR6psFmSu4QKGwq5aNwJqcUWZDipkNULPf8UmCSCbJKpC7KhKKcBirqMpaJFJJdRe2",
  "key41": "4UpNfS2Y6L7jmHFmH3z6kp3pHkUBWpZjzV1kGXq25PL46sMYBJNm1XBhRmG3c7318pSsaCgSzXz2R2JeqUrfJQo4",
  "key42": "51qA7mMD9vvJi8stSEXJ5eLGCxotj4QyeMonM37G5GHzvSg8M3amHDPbkga2WsW9QD4DE2ZWSgp13GhoHowxioG",
  "key43": "2pS9PCM8YAabVHXM1F44U7DcbG9XKt81PHwhvGaQW9uFfuu1gjaUKYgGQCLAHTECF24bNqshT8EWgGjN1SfSz7r3",
  "key44": "2JQXLoQVX6PhzCJaHvFi2MHddaxEGrwhDTmSP9NPemx9pxEWFP73aVgLZmQpat9XH4VYgV6DJL7ebcpFtPwb1FNG",
  "key45": "27HEAEfaLccUNVFWxhPnVcBBSPseY1fTe28dHEVkPyyBgyPuiHNHZgA4JzoLYW5Js3usFRcEPc441KZHD2nWGHjP",
  "key46": "3gNQ7Yz3yBXrmVCZ3ndX6jHRFKCpWZrEi6ffULTomJCuNHKXhMNShJ7X2wNrxh9xJ6iyExBvoPBVYVehMW9BLf5g"
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
