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
    "28Dhxm8tqpW9xNtpxiBUrFwhyaSMwbPJ9fcUjaNrZxr9MawFWdmmK2PbiHy8nkvGEBQSxgtrPZxFh4E4ttdpCYqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SqDa2gsaewnJVvCHV7thWmMHvgBXxYBLsrxNP8gVzJaGFs1rsSbnhLqQXZp7tCquWyVW2kqQUkNJykm5AZM3Ct4",
  "key1": "5FhXZqNheK1Ka81W9M5EGteNNSLPbYDaFa6bnSwYeatJakFoz56GVJuC2L6dn4qPS6pBBa9cJumueDCkRcHPYAx1",
  "key2": "2oBWBNzsNs6JjW6PMA6d1VYHz1koTcw9ELDbZcMCGx1CUpXfvhPrWmS6VbCxtank79iD7YMvuADG7cjMF8Up8QH2",
  "key3": "4wUGhWc6gi61ss4jMEieB2xSz39qCufxgfdJjx8xeA5QeL81UKCUuKwonngdeVyE36mCFCqD8zdKgf4hwFFGriKW",
  "key4": "2hhL3YS4CViY7ZYHXMXjwh2HKoXMpws6jpzwbuZdCvWC1YBoPupzD316qEvSV1KfwBwmE8D8q54kYkgmdfQPpfpE",
  "key5": "3f7nSEGFWLW2Bwda3F4aRvRKevQYfKVnFgQ1Mhqevmxd6g35d9egujzHeh5BkyysidEh6szqhHNWrAYUYBDJAxSi",
  "key6": "2rx7FBfN749EBHk76Zhu9y27DRVa5K9vbY7NMj5qUrmDKzteM3a4Qov26TPxeVUBecWTfK3RQP14ZjuSSfY4VYUb",
  "key7": "46G4zX1HSC6N6ksgWqWNF4euHDSnCKybXS16R7hsh6DRE17WnHqUWiaGdqymmKXv8q8jmpBkTPxkUHSrdswKU6oK",
  "key8": "4edjBpasFv5nWQ71Z72FfhyesbmhAkbKZ1wBAHCzvAx5BX7zUNuHbGkq921g9Jgj4peCZPRJNcqrEzXxGZPWmSa",
  "key9": "4YH4DJFi38xvwQLq8gMEVdSALAV7LiEzt2VYkHq23jaemwFcX4TL3zWth7rA6PzE46soGKrryghYM9F3b7YXn6Ui",
  "key10": "GsffHqx5j5wLxeonjKtosBbqQnTYSxP67i1wvAQiF4VdUEBQTNojnhvRcnLttbrH8PiNeKrKqWQPh13ZJaNyej7",
  "key11": "31yLQJjBCykFdGkXoNnbRyEPmDuypFMRoLU7fnDAj36FLzosxTjux1vtLVisu1zoLCacyU3hnrjFzMCEvhJM5WLu",
  "key12": "3zxXgmFYSPkjnpBWEWNhhwf5aXtnbWqFgCqHeHFdJwA7GKLmoS7cRX7ZoTxAGTzRFvPQDV8djNZi9D13CnofmQmR",
  "key13": "3utWDcDmkDbomtHv4c4no6smuzPMNTCn844K4XJHmnSZhokZmxBVBpNRRDrPVq75Hibfj8X5eQ8pahrvunbv7SUX",
  "key14": "5ozoFrCzVrYtBUkJBmp1iPWbUKqX6s6xUrM3fGLCTkohME78tXZ2HzWcPGLggeaNhBAzR3uwx7UnyRGPZn1wUw6U",
  "key15": "5A8uH3s8wk1JJjJziBML1vshfh5skWRthW9jYd958FHDtnsqAnrG2ibfcsFbR545hdBmw8tckWnsxHB9YqCgauBH",
  "key16": "dcE8fTRGiLDPG9XzAcz6rpdk8ZJRmxtkAAJW4v27UrSDCVbr5GWCEpCaSEHpRRSmVMDPnM77L6mAcEWE4MuFQSU",
  "key17": "3b2dovquBcJetGn5c5H19aqe9LGegYvDhFjtS3J6aQ56zbnXcGVZsLmdN196dFXaPYEC1ukm6f2tdwQXReAnBaxK",
  "key18": "2YMXiaEbEaFBke6VQXziTPRGud5gtfJXFfcTV8BsKxfUbriQQBc15W1C8E3vN5KrAkhVVR983HRFaoMk3S3rg77k",
  "key19": "3FgPVu6BQzBFZVTapkcov28DMM9Z12FZz78rbYC4JZMyNJKQQrU2HNosyG4kVhFBQU2Bv6hhQxKZvkSNUM3x9xQz",
  "key20": "TYqizfpdc5CTSn8Rbp3mXZuWyMJJwgxbjjpkU3VtSu5AEFhcACQH32YD5baS5WkpTN8JkHzwfwvfv21jZhLzZWv",
  "key21": "yKk6E1R6kF9SP72NAuD5rtoqQ4Vgspv5Tqnkd2tDmTP5exaMkKqrhTpJRQhdpkNARppXtKMBixWFQBWf4ripydE",
  "key22": "5igNjRNKAMJKytsJZP38wVDTAv1CwCyYek89JhmvLzrRcTHM1tLbBKi2K4jfuEMfF89xqyeuG6z4EUQj1An2gT96",
  "key23": "51iF3MfvQHkK2uc7D5vQzm5SJnuUwXB3z7p8DVtvPjoRou4vWds8gpaG2jKDhQrBdMgxwGXtANFsRcyKFEUdKzMe",
  "key24": "3Kyp5rt5Ns2eNJ8pEH7qkzRMWZtWB3woVb43CPd1zPvBhCntD2Dhs6B1fT774KeFyJ8FywSVt1Wckvs7wYqbdHCL",
  "key25": "5YT916fvvSZCp7C7VQXLo3vhYhi7QyJPai3tqx2KKocFMEiYZtJza1uZvNGi64cvs7Wsp181t73WEamB17r4iX4K",
  "key26": "2orCuyoE8PhwH8ZKwFvsgm8nAN2hV83YTRV8aMiqR5HfWBp9R6mxiE6JFFuLbsWsDdayAhW7jLfWfQZSc5P1Kbta",
  "key27": "4mKmfm5vprws5xbaPWriJ4mwU7R4Y81aFD7pUfsXGJyVAtqGYQBjL4V3FzoT9TxBZzQKWPX4fKeD29vnHmwnvasx",
  "key28": "5uQg2rqQTXZ8cyhvxe85YZLCLNiNCttcSy5Wm6nBsBkLZ8rMKHoaZxejh2NGjrojF8z3p3zk33ZdVbjT1gL6LTfJ",
  "key29": "mX9dTGkGcYRZd3to221puYF281aXqRNKt7V8mVru1FKH8AoDtUktcaFY9fuNBpwJoZMmNk3ZUupwkUWgLz9QwuD",
  "key30": "5uKUrFNiUvPYQxmNxW9yWABu5tbpVi4qsakv3qHZqtja2U2NNKu5T37aqgqhseUeFiLjvRV2VLAvR3uDm5u9Mcdf",
  "key31": "2ybiGMrcTywj3siiQTn8EDr883AqzsRmGyKaeku55dpvLNJowBkFizCp8df7bXhyExp6Y2uHBWLF3bTkTErTzRhz",
  "key32": "4zBgvDdwm7EUVacSuhJYCTRdh2rj42r462HSssCGGZn3kZa9tguMFf1LZaX2UGmvYtgc4wa3MiotjEy8eXN5JsKt",
  "key33": "xcC7BVBn4c5Jw1i6Ar3YyCwzetoGTVXvz1n46xShb7VtruJCMBbcCtKKWcSYizBmdGg4m2b18HhgSLF9twq9MHx",
  "key34": "2N3vUAbuCdCKCJNTmFNVJyxYcb6XjQDn9kzYv1y1ed3qn3nXySdh9B9ZFZhwNxLLrwvWTuvq5nSo5FowphPCUMPW",
  "key35": "3icBCEm6HLK3qpgAt6ndtroG3vRj9E2RdrzaBcotwxN3dHYe9xwF4GS84wv64yHcSUqYhpBAFoEuDsLPk15bQi4j",
  "key36": "8oUbYcLS2v9M3UrkGG17SE1eCqfNSb33FjB6P1baVet5KaUcmqVS7ANwXMzaT8qEFnGcbDBnPq51Hm4jU4wW6po",
  "key37": "5MiVFSu8tHziKoXBcwishnEKQjnyDp3ZvBj15PR6mTpCYXQ7uNXnPBXvPnHgEnMYUSrk2gsqdSdKzbREvJnmU5Nk",
  "key38": "4nWdr4XA5VrivAA7WsYVoVo94qq66V6xtrqZXy8mTJD7aTuTX3G7e4inrf7Z6TQJgTBdHRRRoTFVt1mzc2bbsmgN",
  "key39": "heuGSfHpdFAAktfeAGbNp1dMdeTP6vhf15oCjUsYzNKV4SEtYXZpKn8cbE9goFeRgg3RkS6ooywx39ecrN1txdw",
  "key40": "5Fggy5Qa3ZCHrLZboe7ZCfCY5gqX3ys7hbVBnmYFGgLCahViZNf1UfqUSwMFZUupS8EqnLLQH3wMakLgoEm3kbY5"
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
