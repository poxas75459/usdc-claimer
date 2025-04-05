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
    "3yvzYDpdoKjNcaG8gTHV9oWrB6HarE16c93UPCJVGgT5TqW7SAZ7QAfVRA1krj4UhnQLJkvqg287aatFwR6U7mXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37CFqkBFWyXJ9QKyKTuTEHYhavmRYBuNKAALATyUxYoeAjM8hc3tW5A2nqvRENK227YvMQGYtkefWZCbTrha3Bqv",
  "key1": "5wUNYnWanrX4h1ML4XJzyT7wf1agzva1XuazXrT36jYoQ9P8HZtrekKLSrSEVkpiKUk7tCtawSo7w6ac3R88HBtG",
  "key2": "2CdAPSKdRnafK5F6SWAxjAaJmrqeb3AAmGWUEWyT7km9H2wrh9XC4ekNQm8xEwa9j8CbQwdzDtpF4RrJh6GRbsWS",
  "key3": "PdHLz3CZEaPQpcqBq6apYWn2MfghVPfPoqdXwpzNnz6taUyfWxtTrJyukT8g4iu5Mnp93h37dWQFgrF356rff2x",
  "key4": "57GQjwZL9odtj15Q85AixTQENfJ2H3nmv9MgNpZjTpQ7SuMjoJyo2Mzts2ZB7FYDKcrJf5D6mLrFzLaZULYtaxN",
  "key5": "22HSn3uHMrraABMj2hmcFfRuc1wSGZYJaAGB9ocCjhWPkwnQNs5VgHXN9sdm4qYMFg6QYZ9EkAfNaaV2Msa8UDhg",
  "key6": "Ydr1CLd1MArm1Qj5Kn5WQ98gsTsyL499wZXPKgd7ZuEfgJSsynY7Exn7BidfjdnCCPGDuyx63HFEbisrsH6rUuF",
  "key7": "2NN1wbJymkpr8w9JGoGYPPUuyPeCxVC32AR5tAT7sDWps3Tr9r2cP4TAwe6dNnz7s9rN8EMQd4iHivjrQiZ2aZV6",
  "key8": "5RiLSp8GSLSSQsTN3K7hsAFemHSRBfaLM9LruzAYmiMsEg8X9WyjULxtnb7bbqS4jbj7ohTQE7rrRryFxK1FP5JK",
  "key9": "65BhKYccaPdeAntYoVy6zwPmFVnTVVVrFeN4A9DnUd5f8rz5nQM5k7ZFnaqPXxtMwqPthf4XmMi3eyeSKW7J636p",
  "key10": "5FuSm8nz5SdXL94eDoDu7nXH5nKw9J6ywhMfVXP9qUTUbWGBYHdH9p9uN1P7xesdeiDUATVHAiiQxpr4sy5aRvcC",
  "key11": "ngpXKu4Jd3htpeaP16si72rJYqQkUeNwemwLgzbRXfP7syneGnBabQnMmcTzu3hUCJY63Bopav2Pjqt88rGKuMA",
  "key12": "5RR8Sp6wRiPkJLYSJnKVaUMoEHXLbs4fX7YBW8kp1VeV6y5TmFr6HYj41pAycksJNXG29RrJWk9N5mW2Yg6qPMRu",
  "key13": "5hifycsW5LV4AhVMhKiiSD7Ssg6Uq6ZQPCyibc7a746niVQdvcExSZi4rk7YvhDwP31fV6LQFAX52uyW2BZQjshe",
  "key14": "52drikGAfV1p7ocTKVuQGgs6Tp46yTBSfEVWVi88d9AywbkddfPNU3hzVPTPsbUyAmuDqKWuDT8z7pvyV8GaBDxV",
  "key15": "3vL2bwHhDmopS3YrnAmeZVzAeSYZRgjHXJhWRwX1uHkSFZQmG63WmGQAg6gJNLZqyUeG66CJFiF2TFrNnyM7jP5B",
  "key16": "2tT8FpJXn6YLz4KQKSnzhHL4ABFyjErgA2dXN1LWwB3f72jfbA8aruKU3b1cmgWvimj1W4cn69XZkCQ8YVeSGPvy",
  "key17": "34k9NJawRP2dZSzRBSbNwTZdoozVRfb1W6vYWVDhckjf3dETGSJtxQuNCBSgKLt9Srge958jqEsnDLHasJmnySqP",
  "key18": "5r6xvCywXjXxaV7uyUjG8B893Dr9ohbe7LFvBQA62bBA1ySGEqm2UWyZLN6h1TcEwab5NNUJ1sbTYoVmMbMpRueu",
  "key19": "2BNSikBGXp1m1ymhBBAHovaHRv99SNqoU94v2BEsqiJHN17pKv5ddaBpvXNr7vnuaPcctTRF9gmFTazfmY6nyKZ3",
  "key20": "4Smnx13SL9hsz8w9EeH53ndknd6cn3YNYbjH8Rr1qDE4HUEf3cr74iGuXH9ZqvgD7G3VYEXYrgYudsFQYgJcjqz2",
  "key21": "zuZrS7btDTtqpda551m2Mu6zbFRbu6DNL3JvouRVNf3uwm7Tri6Nc3ogRE1dsAjfExWN4x4EgYZikQQYQ7SQzDq",
  "key22": "5xfHSkFWgYhAACnsSvDkuHnHnzAmGzXE5xAfvvSvH1bW4V54c3AVssLFDb6WSZoz2iL59v1k4yLQd2xGsQgfMHXz",
  "key23": "3AghABrd5cB6k2LUVduyAg6vEkqgGG4QAu19Q7PDrG8ccFKypC3wCnjg44PTrqykSX81U2LErSBY6gksUxWhUS1q",
  "key24": "fZ6gv2obUKE9sBKCHfZhcVPVf9jvy8XL48RpFG8tFPrEeVSo2i8utj3bdSXiJD7yShThNSEs3nRypcT3PasXgwb",
  "key25": "5ynfPWKFGUyNeHYetFv9PmKxFNH541ZuKjA2eVmPMSQDKrnaYwyMTHcbuKhnD9e7briiPJMCWy4GRTfAMn9tzKbY",
  "key26": "3uRhg3WmERKz6qEEymtW4ik7zDtchaz7vMqaLQxHwRhsZ5MLDS48aXXtRqk65epN2e95FGsc6GuZpGQVNoybQUW9",
  "key27": "36pg513uA6vJb6MCKjcjez3DB1N1GUAUBXg5yvm8rzPukeY4ZdEdhX9NeQYzkjaSQAjohs8tZ2d6mmRMxwYnx8aq",
  "key28": "2MR4TRjByfyJw76veaNFmpjZ4SQTou4cGh5aFNejFrKVNiS51gnFeo29gAYGGj7AXjy13pWDU13SQEwnWcWvLpP9",
  "key29": "K4nh29V5FHathyQpBJWRHndJY4HyWD7EmgTaxVFZzijTtqPXeP3eundfSGY9kbUh2PvdPnJ85m3epPD2kMaSfMN",
  "key30": "238oDS7TGWjppitVNH3jkQRNHy8tPDY9FM4Pe8PGj2QCmMW37on232kPpoRQWXAdQ3r89GfBALLpUWetUgL74Er6",
  "key31": "5r4d6nTYqPDzPergmPyj53JgQdyZPcXQnh78YquA4Eqez8C6g3itqfv6GBEQiNG1gj6SW2KeKRdaEobfnjdg1fGu",
  "key32": "wJ3qjA8jpXwdfjBjt3Jt5DGmumeLp91HBkwn3EsZGFeBvHoRRs5SALvmtUZq6Tf3gwPyDEyzsJ43mNnjDPAv67n",
  "key33": "5JSdKj85t5T5dmCEfVw2CMXT16werTQdXKxxoVrxscb6sZSkttamhRWto4gnx7GRCbKdsfkDKw2mZk63oXZzSJ82",
  "key34": "xphfA297LBT85EVL92HjZqtLdssZZwZNrp5nYYtp8Dw5eXFtLJhjVsVRBV4ezKDdMP7VH4jU3YCKqBoLokTFmA1",
  "key35": "5TgEWFRgp1Pz4tJFZm3adLMrPbpomHET3EgP6s6uRhWitmynMKn1cc9h5FdY2S2NUodn1pY9tz29ca1dNG3mK6LL",
  "key36": "2QUCpKAKX212yUGMvXNiiRH5Fy4dZrTE929yDXq5QUhZ2qvF8mruDeiLrRy2PFrtA2oJHpisqpLeVXW6aiY4DZzB",
  "key37": "4ZJcJNVqioPyNXLSqu8PTeKMLgiw7zKmx1r6818Tz59DfPHMG4KNBpX7YRiVfZ9iDj4DnFSvSShT67CjSEDyZgmw",
  "key38": "oLH42jpyEzXTGt4qq37wJsbP1rrh3gxF74sFdbh3bk5wWMxPpJPess6y2T8SUBoyXMvRuNkLHFHKytidcBpyk6Y",
  "key39": "3ixY3m7JSrFZdCjkCMoKZ9S5ymC6bfaR9QBZkYEfxFqCjjULASMVjbLw1TRjNbg7GpvKA2k66sainfVBHy7zhpTD",
  "key40": "4o1SdUkWMNdWMsSCy84AeabbDPDiXSD48mq4STFq54jUDJXK9zzzRmMtSf7udMjwp1k7Xvu7K5nfqwRZ92aanmWU",
  "key41": "zL83eSdNxEn9LBci6wwhzL2E8WZfnap3vRfYQAaco14KWrLKUoJuoQyVNSMS6Sv4fUpvEh43qaPpwbA5aA8isXW",
  "key42": "23QjxQypeent2PqBdYhigmrm1otnbUHxX9CuLLbrabW2xG7qdePsfusyWDw8MtdVYbJb4GnECAvkMSQTb65MsGep"
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
