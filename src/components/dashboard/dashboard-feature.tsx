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
    "389LReoRNJJxrT4H3haYxsXf5pUSPDfNWKf1uRag53CZtADqznTtASp72cVt24PGzE1i31K7fT5k3sLpXmXqJFX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TwFT2A4CGGA4P2BLF6A1garm25pqb3SMiZtCyGFTokWiwKdvNGfA43gtf4XL41AUF4aMHk6JVXjFgYicdcad9tR",
  "key1": "4Dnm7AyksRLGHk4cn9XMuEfDXrdJLAznphVvfCuNefp4VeGmDGK541jcYXcYdJEmRqbckNYGPHGhMVEQdHWDUbSZ",
  "key2": "4yz1AeyH2KYtv3SX4Bkum41PaonZRDrfx6fSwhogGNhjnnwa7Gd2b6H4poHVq2xzKFhZhbkqtFEzDeUgXGBDcTms",
  "key3": "45LkvYyvcKeiKjNvqtnDot5BKD8MX8cxQEQznkXYzJtinPQXggfa3GBkeGpLCYBMMrvL7FcfuJKxP3qhEDhMveBJ",
  "key4": "3oQEMeLJUrHchQyu4YJCciF46yCouW8MwuR5Uhf4PisrrBddAErErqNW1fbsWr6EhogJ1NUrQJDtUcR7VPVtidgA",
  "key5": "3yDnX8pT9siVWH1yRZvzM7JUHg5kDsqQpnvY1vbCMRUcj4GTu7GPw2dCYF2yeaY4A2ugYsW31rbgz9Xcf2UKvQAs",
  "key6": "3uPa84DbmCJ3Vh4QMFYGPeTr2d511DvZ2TnAz9gbY3XQmZ8pvBmDgCNi6V8EDJm8GPfUyuGMjqNqwxv6m2uUCACy",
  "key7": "cZS5hDEhAQgZPMErBA56i68Abx8usv36efPYzxc3CRiJYb6SJoEvWv8oXZeKuzhmrX1oioYsFhgYetLxzXSL6hb",
  "key8": "4KBHjjwoWWLk9WMsHNGyw24fAzyNSLswzZyTdXtFE14Qas2S6eTstwJj3cwJr7F8r3Z1CseUHVDLhVyEK2sRXP8i",
  "key9": "4hfjmsTnN74gM9THKFtTuUCHuXLLX6ZnM7vgg8zkhTgkiK3NdnQDnrRH6sNfEg6hhpxfkaaqPp4r9KMgQjdWKNJw",
  "key10": "5gHDaBiF6caiS6EDBQLx8CGtoS3VBZVHuJUaztnk9U8JzAD1z7LrnBc6VUWvCtbhjE5afvPrmS9mzQyoTUGA6RWM",
  "key11": "XENwAmwhumkNCA9yjiHwWrwBXeWDHzkJ3Ez3cEZ7xvh7rpTt3vueVAqywNVu6bME72tQaJ6G4NtM4d1rqwH79hN",
  "key12": "2uuSNwzSqLxxf6vcghdN5oRA9x2RPjAnWrcBrpcudtH4Vm8DujiPbxBEviYbbxGx8WMabysMuFN7AvfRhME2yEJh",
  "key13": "56LkwUatrvhUm7yhPXvrKBxTn61m7Ww4m8LPdNUxwd6nJapTN7U7VcfQ1pBmZtLayhV175pphVJQaVm4jCF61osv",
  "key14": "5EwXtWP5xNXA2wjjequfmfRaVQorFnofaA7K6ATXwKV8kQ4qjmaUdBTKa3a7NVVdn8VVy39XW1yLbtoCiauqndpF",
  "key15": "2pBCYmK6iseEJeruvXSdfsZqXy6zGXnSuau9nfg1tSWPA9uV6ws752GxDghWF2LWfVSFK7i5wStFY4bkPhe5JbeQ",
  "key16": "3ZQqrKuXkf8UAcnNMHmDNuPyGj5vmQntrob3zbrimV3eEhE7mshSDPebFPCu9gYmZkT7vtBbg7BFJd8ToRUttPjg",
  "key17": "4rTQZpZ5ykySynKpRdaaHYJbFSD5Yin4FgqP4aDiMQVzMMwA3yPJDDkNT1vDgvXoLSLfz5EZFs8uxmT8twkAMNPB",
  "key18": "5hGUbsHfrwpfPP2BxZPLEUkkP27LET96H46PuUG6c8kDGpLE6dYALgwZARbjJ7uhS1gLkANjvoTTvucfPGZYDXhH",
  "key19": "ybvok1GQnZDZcvzzMDcD42pEazrkPPdDm5Em7zQc8JDZ3CvJe6j6jiGnSZMMAx6NK28mEoyb9yPvVpd9AZAf21t",
  "key20": "2F3juVAKjCrqcqowrvCSv3JxfJAMGA3PSWivGGpbTNK3Napr6H1o1dZjV5s1ic6E9REEbUW8UJYvSZQ6bVxytAxC",
  "key21": "vbCoummcGVNrVp33i8nmhphLjsqa75yecNZ9CTk4DT1v2Nii3QHgD1D3KDDfBUkp8DYicYgiWyx9feceU8xW5nA",
  "key22": "42TPvhN1feXH2TMrB2JdW13pwnrHMgs634Z7m5tj6rdcmTgGnXhVEx6cikvH53RjnQvKpdn3FzG8vBdnsCSyaZmd",
  "key23": "2taJq1fzvn51Xh534f7QR5zBYScyBH21NxC24Ez2Kvi7sKpEcuDtcZFCa7TCnxU432j4oCMybWPmu7CdrUvpE4Qi",
  "key24": "KLz2eD3zQ9akYXd3oHEmGL2UrWFTkeV4sRJDSsFFDePmf1vb8oXFqjj2BmKiQdY7Nw5d2GEE4vtv7kJnanNcsNC",
  "key25": "2cLcqUhhArSZcAPpgjuhWbRem7DLtyoiHRJ2j3RornBwFxH2aEhJpXKLh3qYVmsmCdSem6trc6oKbLRn81BfAKNR",
  "key26": "5Ciy7g9JN3aqJNdjNnoaWJrLTSB689EcZj9Evant86so4yApMcHCZG5s5ZKLbkeZBXUeDzszhjRCx3FxQsQerWH5",
  "key27": "3nhdFhLeRDQy79P8pQz8H1boXWFVFaQxzJkm11SqmgpNxa4WeYkgQWDekZKc6svyeFGoEmA3Q3umAZLsmVTF4SMj",
  "key28": "4DnvjVvnyAGGCdy2d9c2qwJhQ28hY4xN6KVSap1TjJjxy4mag9Sxi1vZYRgGakyWQsG8UEcy7pytsXiXcMxnZrGA",
  "key29": "MSVLzNyZB7X3FBGZG4SVchSCwKPP1YpBxc5UyNFgdib4trYyug2wfoxnLGfjHBpmXo5KEzcheZmab5KEdjdpbTG",
  "key30": "4cSER2CU1oVETcZ8mMTvnF2E6AnzRKwx1RkLCmRp1bKwz469pL4wUxNxyTti3gpSriGMAiLJrnTkgdAtzehX7Wju",
  "key31": "5abNqZDMVZ3Ge6pUHmgFs81obc8zGn9tpYb5qosLAUrimD2sD8pSnFYrM8fEykDiYDRQykU5RjqunkqUgF6yDgry",
  "key32": "2cFu8TQkaqbdm3Kp5ouMLD8qgRXjW1hwv7FFKpWUHvB9SAh2cwJ3aMkYnKabUR5qQC15CVLp1ZKVEcZn4UwrEvNN",
  "key33": "2UoaXjJBxCnsGD6aoRpX3GGUroc4k3Kpm84jC8mraevywvDwGqR8b1pHob3quRPFHbuS34LwEnGG6jRn6k6KybsX",
  "key34": "sDo1RXfkREDjESsSnzr53Xpzr16ZaCb7suLe9yiGM4uvVGMEjnJoQwPjgNcmndRw3MArB6oDBKvXhLw1dRwMkZ5",
  "key35": "2iXHdU4ZUUqVPt3N3KCqTqJ3bHBqiVPLQ7ckF7E8oQoEuzXJ4BKkYJeouNq3JoFGcN29CtSepnnBaa376ASUDsux",
  "key36": "V5bRBcguN3R6tozsPRB1DUKJ5tcLwod45pJ7hbMojtPM9hGEAqiowpuMsGykDPebWLanfYfp9KRsS5abZxx8jSY",
  "key37": "29Hvo3L5NJWr1FDtNrRHeGjQfDpJPoAQDXwx64ZmYKU3jXBNJa5FjD1uJxrB5KRq5Lrmef7TkMi5tyVGx2hPA4Cg",
  "key38": "4RiypaQtc2ELVUhMMPBZFds4NRDRxJKghNNbDFJZ3uJMxurCLXZjLdbU2abNhd4vY7X3q6U7K67gXLHhy65sH1Wf",
  "key39": "4tjNaNh9HxPi7EhwjuEVmA4AnDs9FmoXNqZQ2jYJxMnQSN1iddF16m8zAkasvbhtNs6gcsMKSzpoLB5AauBzEEWs"
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
