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
    "4PzDDB3fD7CJRWX5HgSPPK5qCn71dBqSshfVvBgcAaXrxwbEYYndwUj5MExU9X6S1VEzMgcG91TWArgy2bxHawN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfNiamqQCVBcqSgB1H8PMZf9pcuGMiebA284LjCwnNkLPTQtSFQB5dXqgFFg9DYYjMpH6rsATJUYKbmdp1Je89e",
  "key1": "4tEKG9w7GVmD6EP5HRQZGq5yPMfFp18ZboTUjCceLSEmx78xrmigQoxYNzbWMYjDGWxQKineAbaGxtjcyrCu8tzh",
  "key2": "3qTu6zirW4hXGC4zrXijq2LBZJPdGfny4GNShPkBGNutXvF67eGG1of1dPDngQseR6b47EgmLLwat7j72y8mSUAV",
  "key3": "3HVrxjm2T351x1qFChtaEna1D26bf3YbLCj7Cp517rV3gQveEw3j67uiNryeYobzwjmUB7imAuGPesneTzf2VEUZ",
  "key4": "29pH4D5zUkFD8bJf7X1QMuMJFi3buvKLQqos5yns1c6bKsJj4pPmk4JznVSkkzjjGJJi6awQWsXaFM6pHHMD5jxU",
  "key5": "64JCh4E5LEeeykhTsC7Gt4GFcfU9qduLbENBGiaFA5xAAuUWeTUzLUZm8BrUJESECZLWJYN8qs3Q7bntvDqpjXTJ",
  "key6": "3k1C92PKttMoycEgPB9rGAscKSw5tkotATFUNhmnUEPdNudTNN76YCVXYbcVNnHjXFmK3jjPjsabVS4YZJKW8us1",
  "key7": "4Btu4w8td2ub9QwhiQRnKEdERQD8dmtDQ4bArWb8eMgB37MQAQZfbruTPVZukVmhY13x5fmpNno4vAwME23YSVf1",
  "key8": "4je9WNHmMehnNiJmq7Dc1YTLZ5aDJYKGD9TMfU5uTMZGXYmQXx2ZkRxUwNYQffgbUUZUAqfN1XL9h6inFSrfzc5v",
  "key9": "4qZqwyXPsfKBok6e3Wbf6mVPV32ucUTfCFTcRjGkADnQgNM2QVcSycVoNuwBTcC1e4D881eHxBNh765FYXkgs2iY",
  "key10": "3S9MsdjdDVHWpQTBy62fzNj9FCDqtTmLRFRxVjFcBDA4Ey27gZh6KemKCC9Qz7MUf3rZf4StWBUMfXkWjZwSadHr",
  "key11": "4tN6xQ629fVc5R6NRt6dFRCt5Ks63mUGtJkmtwR1Xj4fNAVAzMbwtLjhCzn3NyX6F25dntCmaRoTAioki2DayydX",
  "key12": "5XkK6Qxq8KKXgwBmuLXMuoRm4Nmcdghggeh1iDUGRQVdmC2qgY9sefAmYnbWH4ZcqwQTCnqL2BvuF4GhX8xLKDL1",
  "key13": "2ZZipG7BuDKJj24gtCKExVmpZziXowi3xyEUCSSeX1ZojtakPMf1MLkfmP3YGrosHhusvAoxZKE9HE3EABQ6M9Ry",
  "key14": "6PjmosdyHFob6wxdW9q2P8XgUDskvWTGgLyTDJYiL25cEBQyqhZ2cNjefySUo28bU2XZx7224YbYMyuBtUdvEU4",
  "key15": "3Vm1MU12HkjWGcv1LgJ47Aos1FCNTAsuMyETRrEAayjfLRWMhm1qkE6YFQzqUGDFpXYy7RPisRzPgXjTa8zuZUVM",
  "key16": "3hePvsusjyr6XQMK5s4mU27Wi7T2CGL5qHFDNZ4YkFKxEozVVTJY64tQu4eYzaWFTnHkKB5hC3gRoHotCGcjZfMP",
  "key17": "YcRkRF3GQMwy7PttvSE7qHz3VZn91tq1iaPQ8Xv4SuSUF3awQ3afbZUcEHRo7N2EpPRv67XL26PmfsR4yDSme7C",
  "key18": "5d3Hz4PBBRa1EM3Pr3HA3gzy5nbHbvtCDQwe66hqNqAKnmuk9g55MV3sKSbcNH4e5hMqs9mLDP526SQ25655573G",
  "key19": "2JgNWBQbcKvQB9qh4CHr4gsumYqoZKhsoXJdiQuefqNzJiVC9mSGSV1ZUDvnMK5pkwTUcpZPrw2GEs6zLMghwLBh",
  "key20": "3zmKDujMMEc8auZjcpWcguhxfRpQdK3JsCHziUPfQh1ZyYZRotFJ6oG9yM2w6wyE2pva32uChPNpV6Y2qr6DSSpt",
  "key21": "4RufPini37Q9Zs2ZWmW144vT4F5yebXuP8tUbXwwKUocKvifZzM366f4wotMXmkrzJApeuYmEF3Yah69zgjeRSzT",
  "key22": "NqCki6N21vuM4A8YduwUnESJjU15gHRs2zhpHimsw3o1p9rqHewRVsdTP2uBA3sUJFrdjZgQEo86HF7VbbysDDf",
  "key23": "T14FW5RE9RBx9QAxquDWh77u4FHznQS7wRUCLqDZHJW8TmaPewv32r7HYwddK4eLJSSjMhc5XvvSCWUwVhtDHPp",
  "key24": "2EbY1C4nRS9RocngoujKnZJeWzY3A3GDjuL4rgan8dok29vUabWdqGnskYgFNmbySVX9CfvFUtkBLuLwh32DF3r4",
  "key25": "4mY9Sz5TCv5LF9pfj93VddXTjsKW6JqCdKBPfzE1K2wLVe7bTdG9sEKckDNNchz1o2F6FLLtRf1qyJq7n6Vd2jXt",
  "key26": "nKqmHNspVUSzS75VoDu8ERdRNcsUuBR3moqe8PT2GGJRDHuuAmvQMyPpMzDaSwyJJSBALDeS3Ewh8XGWfwCAYsS",
  "key27": "3JbqrDLwSbYHa5Xp3Qk2RRSxKvWqdEFAP7g2rPgz1y8jJ915pkwX9PBAExDEFLqKbSqKSznAhbaLgwUDB24pCC94",
  "key28": "5kBTSt2F6kzva9NWbqZsP1Q9HBXi4etnEgfcF9geso5wfkSgn6nPaYQCY7U1BFnnkWd1APnh1Ai94VRGgZUaH3DT",
  "key29": "8dFoffmaRuVyq6vw4mUxY48YavQJVDQEuStGe3vJn3kFTQPoFNftMSQTPGxokqd19LJwPv7MuMeuiCtLo9cpVq1",
  "key30": "3pJCq3S9E5s7DyfJ9zRKjRFoJ389dPj2HYUp6LQ7hNRHryroimzLY4ib2gYkn8hHmVePYEwRyrLJAz1qHMA8UtPz",
  "key31": "5r971gyhmM1XARbJ1rqqPQ8rMpWrDRE4XfyaK7dWjQKEK3S6kjk1bHNgQbQsmsdtsocutRy8ycrnuSnGK4b2eRzt",
  "key32": "5btGrmx99TCoMhrfZS8bqA9gVsBms4SW9s2AtDVL4wHzHKx8A7dXQfdmGKUh8Kw9A5Kiric3PaWPwotiKpsYCSva",
  "key33": "4YgzQF7YbXkYQS2EMcQauvxHq4WRHyyNPfdZhX4Qi8DHK2Ef2sKBfBY7A5vTGFJvFkc6YQUGnM1SBNgT4zD4uKfd"
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
