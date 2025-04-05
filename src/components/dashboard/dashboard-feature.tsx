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
    "3wfZixQCDedKvDkS28tiWKS3Ac22JTHVpz1DL35FEh4C5fo3ykw39hpZEixb1aTtAt474L1Hi1ndgVBWBFiLJY6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSaqEYqfeR9Bth8M15Li7sFUcPK76P7TA7wDuF7U8BYdtDnXkxjsCSSUf6Kyj57bjdnT2aZzFMgAWwNqcUfzMye",
  "key1": "4uUSaBdbs5VupK8dtMUN2zieATNN7p2d3TgH3XktCYBbjfp3D9qr8cChG2UZKCedT8UpUJiSZPSkhX6GkxoeMrQ4",
  "key2": "43XLjKZ1V1vGMnTzSb4CUfGq5NAgRmSCaFb8PeYd19XDzgbrrosDhPWK3JKtRajaZVoNLnHjg6hBXP1azb1BwYhE",
  "key3": "3xfTpXb4MUthsonxLXqkRoi83jWonBroJKptgN3sCAqWApa1xbJ1ZMPjM9SDT99MQXKit3KNb3CeUaC6BJKb9WjN",
  "key4": "5wVhRbeM67dibFUwQtmRumAwY9vPFQSDifQHvVrVsji7Y7pba5w1wBSuiropbxkaFvNNMxnRb8v1MgikMfret8Nh",
  "key5": "2rxhCiBDUKs5XzUiSVimxuYamiftdBx5M9QPeaKsjWE9YBPiJgn6TWHbA68mdt9jXrkMsviB2axVa2Ht7ANA5gNC",
  "key6": "5AyRPg9me6NN95QQr8E469Rj6R4aNHHb2NTFjGQ11wFXHrEw3Y5gveVnz9FW7wycXyU2V22eeJvEKpRns5R2aRA7",
  "key7": "4WkzyjZKeZHMSXfMg4e8s9WAs87aTR2igUAsgofert58vaCfLhzLYMEpnpxRbFzX9LgpJBh2UBH2rghaBvW9gvoA",
  "key8": "2ZMcg45hov3C9rHsFzupNGVZfaBXWnFzB3fRyPMjsRix2ifwjYi8UDejSTS1wjMJsxZz8zjqtQ23JGEH2pyTM2C1",
  "key9": "5efVEZ9NpGzMLJjbumJj7jP1bQSDX6tCpsJR2k2jEonv2BqmZXGpHKvCbEqygSt4PGFbqjK1uMEtd5LcQagA98ix",
  "key10": "57xKxB6N5SMcCF987qNXqmiz76Wz5q1XjJZoFpktp3zuExeaX4yBs6aXi5izZ1Eh74G9FJ7gQo2fK3jCKwCpfSYp",
  "key11": "MNhLBYSaPRg3BQvxjPq2mPdyCRJoQ3uC7YD1QapphkR9hBKd6mxJ64BZeNEiiFKfUYMQ6nGc7Y1aAt7zasChB1D",
  "key12": "1oQKhZChyJPhT7uiZsRHeyDwqPTm2HCK6WN19X1EMdSJWUNu19C1ZYLtvK8V4P82VDAqk1xKykF76Ld2mVCvSpJ",
  "key13": "UD3ZFfQ8ECHqMGnaL5k33xdnVEf6e7xBqwpneW4rJgfwf5xKk2r9SgVNoANwoyMZBLs8DqNk2DAQqRsmqsqEw61",
  "key14": "iWmiy2Ezv5tTV7fh1D1XQd46KfRCbVU8QbfbfAKKEKpn7GBYiD5i92H7aRkoDcjqiFk7bnBbRZovRMjVVRQsTWx",
  "key15": "5qsRov5hkF2jyzkWSQCcCBWoUEVKTufcJ5CUG2LMmpPJZSeT3w28mn9FkAVgF1S1YvX18PeZH1E8z1NQvV8Bi8PS",
  "key16": "3eMnsbEbP62JHbkT2Sw9byhkafUmY398TF9D8MSj5bj3sYgL2y2PJ26mhdwXBTDRipumRTvdvs6aYGdrEvD64F5L",
  "key17": "3ADHZjduLLeWan2Dx3immbkcnCCEaiyDSym9c3ppQVpKfyKkuk7juaee8b4EHBrF5pLU8eFaZHr6wSVr7BK8Xptf",
  "key18": "4P68Mix6UumVCKyJJhE1QZGQFy3vfgooay6pneQKSZiaN2NVhGvgzL1cWvYghfFiFYsNeK617GPXAoAWzR2R5D5s",
  "key19": "deKrzPANKy8Gq7kgeT7UG24n5D7Ddejst16W4cBzVL7j7xn2riMcG467sXByG6VPKwyKR9yAddg7JfSQiEKgxrx",
  "key20": "49q1Luq9LMNTNKRs8KSRFWk5AwubaUxeFfwJnJr9UarV3UxELBJWjgqjmtSu1cL4ZQ2qf3a1Mwr2PgDFjGEcE3Kp",
  "key21": "3Ugy6SngT7Saa8D6hPGZEvJhU91DPFyTJdjGEkRV2Qepi1TYRZ1E6hZnGM3yLgzNYn9xWuWoN7M9epnrqRS39Jq5",
  "key22": "3Bfwgpa6u2FGnWd9uHB3Sv39qoWx7y4dvexAYJSb3MdA3YKejABNfjrRS84FQ3XE9nZua9bf9BHBJFA9BmSPetgh",
  "key23": "3gVNDBSc5WPG393DpRwESDXVX7ZmqUWqS5PehUekUJ3N9LYhZHZBokhiKN85C5XSrcHEA5q95iQ6mBRdRG1KRT7k",
  "key24": "5bLvjYGY4u7uaQTZhrpJSrGXV9f4CR9mSEpwzdonEmfffak6nP83HvsmmqVkkWWeAsNYwxnspEUPvfd3Bs7ZMZmG",
  "key25": "3oUMWpQMnLCsAfAZzNP6MHqMaNsabKkFQiJERMEhyS2z5pq7XyrittUhEtx2F4KL6XgMiXY4gE43swgHyCCsQ5Dt",
  "key26": "4BH7vCXZoo3aw5TNTeWKyJQ7HWXEk9jYXd73zidLftSDrzz1bL7DoHj7RnfhkB9geH1rZ784gewqmSiQsn1zh6Ax",
  "key27": "doLccuKECXdqVFvQVmaoGoer5tSR8o7uXPmc1WFt2HW8MKPBVMoGovFMU8iYmQqfL28LjMc2zMS45XVRjSpFPcG",
  "key28": "289MdzjQWezx5jU55RqzpqSA4P4G6rhKB9d6xS5QQ957EzNRZj9cZuBXFu3qqb34FQcwcAbL1KogmrSczKgzCf5H",
  "key29": "4QB6iGFZPkCRn4CeMGUDuozsKjsFhdvqU6jaMzS1GYth1YmWwEMgXMf5Ct4QUhaKuyW5mG5yAiAUCqBQyeQxrdij",
  "key30": "5SYcRuuLbGpqFaH3nyAJWjRR9v3ThV31B1cEgmSxWESEh4qCNSw3ECDsz8ruUYJooNCv5jrvE56k4GWqT1dCSpUU",
  "key31": "63SZrV9bGxn9MgG6XJBhezLq2He5Y8DRWxnJAhCq3hCbDNoP3rB58wx3BujXFKnpdRTSRVx8pn5wzDsD5rxtpPwG",
  "key32": "ZvHxvRZT4yK7mt9SGwFHNfFbnGiVctujPDBARKcPSrcXbsnY58pkqiGN4kFVyvnxuAQcAivAVK7H5jCA87y6hh4",
  "key33": "2KgmwCUqhAibmwRwFnJV5rDq51Sc9pof4rSYoeQbX2fbq3gPUGhtH1EB5qrmn81kdG5tMfdZL1P5Jf7i9AbNB71u",
  "key34": "VV69gcxuqPKWjXijE5Ws8S4boLUMnyMVuJjXihjwTVJRkK2VoJkoRgoS6cy6S72cxFStFQu36CyZLosdQimrPrE"
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
