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
    "3BikPTSfqshB6UKsBFmtqPAwgQME28MyyFfi1W2t7r33qjosTNmFtGfK5dpe5pU5MVaT6VtuJbTJnpYSq9b4Unf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmCScdsZ9wANY191hdSntW4QDHb8ecSLscZELL7Z9FqYayN1mTthsLq5m6bfTP4NSWC6BE7ctx7GtnT2eB6jCXv",
  "key1": "2YyH5uwJjUncC7i4NjJUJuLoRGJazCpsyzRWgfyaXnyT24NcmZEvPmomY5V9PUChYaUrTaHRnS36z6rv4GWuLWr",
  "key2": "2nywuHwDanRVEcn1mejoCVVZAXRCfC1VRnWTNqm1wMrg35X61PKi4Lp2Xi1A3nwmKVsJGdnkncRcUsxGBtJgrgzw",
  "key3": "4S9QeJ47cqKRC5fQ9XKny8LvkBS3wtdEfhrhNuracXoth5MLB6JMVfBozEBEzV3ydm8M9G61josHAFnRXHhmdyuj",
  "key4": "2z3VqgEUy1mfcFoTr7P3h3SvsY7CVCtAqJqULLhuNyNMZprQXdvYo5ASXeSM8D6RXkPqivRKiBxBYK3wTuuCrEvT",
  "key5": "4nVjmrjX6VjUAeagYf7WEo5LcypbFp4uSvKw7W72u4TLMvgAXxU2nQ6K16DZcGh1bdkaDop9HKNhxVV6DZHJK5WU",
  "key6": "2VdfTudB3xbYUCJU9EXVJZiUq3XFJeWnPZSLLpE8x8Sau6V9w84SnyXjvGEqhDY4Eg3PXHfmBYhegpXKqEsTvfVD",
  "key7": "GC2iaYt6AaFTpaXd4jEtnbCjcbpSsSL8x2C7p7xdt3jYwfzDMJgndnr4G2j35vFt1mKRsrsnDz8YbVHHG7hXntj",
  "key8": "3m9hFBB1FWMDouMyTR1X13gVJ3w2dhjAmQyYVZ5TixXafvX5e7MNc9jMmpFNZExJNgDPWVi8fXjbbiC8jqePPcgY",
  "key9": "2RTPixDvB5Ut85VyjukCsZeNrqPucZQeA9uc8Zqo9bapNFwmzne9UhUCU9aRtox2vvjBYT5bnd9uetSGH5L33YtZ",
  "key10": "21Pvefpu2o3pzcnRKBUrsyNtvXSRw9s41pzC5GjhAcu7DSsnMyxFeaigFtxLnMVCH8hUJdtmvTF23J4LquX83maH",
  "key11": "67eXHzpTivToep9iyEdZRHXuFyQY5ekhvGJaKNKE6BPkuDquSnsAU1bWFqbSAA8ifLEKEWuyPny74uSMYxsbEogr",
  "key12": "YUh8gDho35wuHkyxsrLUiHNcVGeJemeDvcVZpbh5ECXYBV6PUHf6VnRU5KfQQRNMvYrtcPCUGvs8eNaNiZmMCoQ",
  "key13": "2uH6Mfay2VC8daGYTAhZaG232JTX5U91Gt8hwDxWhFjsoKgBTfF3AQTjq1FzphTTwbtJJh4SXdrsLvj9LTSpd2J6",
  "key14": "MJPb2TXH9njzr9HsmiLsi6Ng92sRAPtdbMcfnmi5tTcQSQSuQ2kJ2EPMH3oetVrRGv16Ds9aQPwV2aB1PEzLtPy",
  "key15": "4Lsxk6btUDW5BF7oRMBkjNgj3zuf56MjS5qKhXDmyAEtH1saGdis4BhXMJY8LpR5yPRsbBkoE3MRrxRssvgucLXC",
  "key16": "2z2on4qMTXbNC7JS2LSoUWmrN3cRvpY5mGSUZXJx8v5NnAvziaDfMCQ2TBMVAus6cFhrGZuNVJ8R8NciFMzdYEzp",
  "key17": "5Aj1w5wvQLDExLSMYA24vcFZGSgq5WVyJrUcTVkwERhaHMDGdvdo31QD5dqCyvD5CaHwA1dfnBMjKo2kRASsEjiN",
  "key18": "2TotzKx71YXc82RJCNHeFeCzWrAtUMsNNZ33zy7w8WRoxeEFQXs7z4AgjZ6t6GJQF8VfDCiQp8iZru8gYib58GH7",
  "key19": "5h2GgGnwSRryZ9EQFC1mNUPM4h66B3r59E9VnJiovnAVx7B7sZhH9nGxpRL8P1KobjvoqfaeZKCTDx6W89xCJmZg",
  "key20": "uCztkUHBngu4UmxB1B3yqjpNqUHPRgYDs1hLPRRxGyZiTHgT39Eux7eW2gc6pJkViXA13W5hMKGvaAzVFCoLkcU",
  "key21": "415e5idtGD9MRp6GuMrpghUKycmVvUnL8qmTHztDqtN3iCxRVELEbVmQjM6VR2JybgPY8mqJN3uLBFBCXFAqZAx3",
  "key22": "5Rk5LsKPp9V5eSxnbQgaTSTFgY6W1CrHKLBbfusQZTXD8r9kYide8cmFyx5UjRsEqzHZ33MuMVQ8nZ7yssQtwWyA",
  "key23": "3FHsoajKiq5CGQak8q8Pj5kUBTuS1r92tUBnbUYo9fi8HzMMX3DdVuTWCoNeUzdvGUgq3iemdkg3TUmFd1zdUdRR",
  "key24": "32Fa3rsyAjuePsa7YJgixxa7fggWwEF44uFVnfLKqym13DS4FiHcgyLic1uYmp98kTXqh1yfDrNzZdB9A7vNTjEA",
  "key25": "3w1bAVHUUWZzqxozy5btABup6b5sSV5LnTYqH4PnVz9uz8heeSmoMUtnMTjAwE4yggyXHiAHC4WvHWQa7Zhe8zVW",
  "key26": "vi4py26zPRAvbj4QPuJgiJisxWJQDLaaHxYgsKSqZ3S6u11U5fB6WVRmUq5nmuq5BGyyVqHyCoCNCt5ZNk6LnLr",
  "key27": "4Cyh4MNXcUoyTCST1wvf9VRswisxvToosPoiJmrsJ3tn7ukKNJ3QREYuYXF46eFnoZHj7usjXX6aL2UUHWEWcUP",
  "key28": "3cQdvfkQg6qvz28hSJKjX3fnzA3vvjTNYSahsKVc78jrcn1URx3VQnSzqxa5qaNdXeV4531v1KVYLNK9iXwx44u7",
  "key29": "eNKGRfGzDhzUFNhLUcF1ELweu5DKQpZeMYXzykqpdpWvyPftCMy3haR2nVD2yEBMvbNb8dgU42qS1tjytSUnHaj",
  "key30": "3S8Q5bDBLGWCLXHV3h7hrTVZoB5vsQFpMvn13sGJKANpunFEWSqBtQRpU5A2kVmr7KbxVpeQMuXdeThU17aSXAkL",
  "key31": "3bmntiz1BoafRcRLyr9S8FkET6Y5WXy6QUPsXXJkQDxJi3cSRAJ6ZMDvDtACeeE1dQWfD82eLRzDhrn7yo5aQJmk",
  "key32": "49DkJkDXgabaAQqAWaVMmwDB1hA93xKHo8zSydqs3vDqKxkC8R3p4TzwN1ihCKjJnQhjNTjUQFxhm8aDaifU183c",
  "key33": "5JZGfUA15zjT9c9sDNBBGHZB1cVuJuBcJrznGcxfNAab8P9RxifGQsyZHJPvPqmaNzPp7Df1NEJm2h741ekciD7F",
  "key34": "3RuK3U5kDem2MZ77Kw7Ts9zZXheaN9rRe1HST6s6DUfToDCv193xA183ZQ723tzot7tFkzMbUmjuLeFoYRSPVAKJ",
  "key35": "5e6zZxkc128N4jQNE72NkVRtba2qJx11YyVP8rmzNx5oD6jDFcHV1EbPaHzEqSadVnzzSvzeqboJCjKTLhXeayJo",
  "key36": "2PETCCbTfAzYTEZbQ9mG6uayDT6s61P4CrpVRUkkMsnrAZFY2Epfy6JBGHYiuQnB64Wqde5xbRa5Uo65sgYJjsJz"
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
