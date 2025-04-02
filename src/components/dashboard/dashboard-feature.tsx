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
    "4vd9uj6KhN2RnywACHGNYGBaU6R7fc8dcvtmEERNB793URF8PRLBr8RaPrbw4raFadRCKSFiMa7ZfrW3jJ6pYn6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8wFkotf8XVG4TUd3fxLbfQYhZi8adrywscS7GAxjees9dyXyVbL6PodeDpL8zeBuQUMSxri68LBkFiJE1WPK3c",
  "key1": "2KdwGkyBvUNPnWqEEq75YfW6Y9efqdBWy6hqKhkaxFLvZZvr3tToTfrstrk2tXjMiv5Ro3ftbPA5WBnHbKnzAPVb",
  "key2": "54cyzSbUF2tbShTnCrq2tLtngD2iwxKV5VyoqsW7tL1z7Lshy2jibVNxwEXCFweV4zryaE9NU7C5Fj9yjsfApRqL",
  "key3": "3BNuc9h8SsGJs7ZKPtAMoKe8cctttytCMFtymVoeNDuRrezADEmQXZK4aRBELtb7YjSgDY8VWjajhjoSigDBYNX",
  "key4": "31yNDYihFt5nth43vNcmBKwthHHxatuVs9P7Ha9LYjjBoxyfXGW8br8jdhCKCTnqjGv3Xc7qyyoJhLSEn7ruy29P",
  "key5": "46yoX8ymD4qSqG9WJP8qDTQScr1cjfenjESxtufgJxYqWVXgMNUzqfiLxmbRvBQCgBGkqFoNsgJbbd2rQGeNdhnp",
  "key6": "JQTGMsvEe2JcaduZts6eeSx8Zv55HfBebhfoWFUcK6bmqFn5R8NHrrBeqyTisxSEeeXcf7jkjhzuoZkpznoaGpu",
  "key7": "5vqa3mLdzv6MDW9ZWgYRMLAsXH4epMexriKfwdaQYyxv4LtrFtXSrzpCmWFbR71eTXvr62S5ETtPrmHPvKED3qoe",
  "key8": "3VrKiD7z76xwJ694FkBraJ9fC8CMLMEKxp1qXRfwu4VidHCVCtEANThYJtWtj3vjcK8Weoe6pQRfh4XWxpRLwUru",
  "key9": "54Kyq7DtZicL7ih5Hdafvuy7fhu8Xr44LuEaAvVwSB2bN5PvFxHWTJ26fpZcnrnKUqP9uQK1LD2cihZnptXxXzaJ",
  "key10": "HK8UQaZPeHrZh6t9tmn7zRTzgqXkJW3USGfrvGQ5o42787bhRSHD16TFMhGzfEpLWwSPfvEvMbhzBEZbjS3wS8G",
  "key11": "2c4GNoEcmag9o41ax2vTSeo1PBRiXMt3t6Pu7cRCw1uSt7YzwgycdvKHTBKHwvbynhmpPaJVmbwxhcjwrdTxY4wY",
  "key12": "4rcvp7YKyp3b5meghuEKkqpZWJCiXnEBNxvz5yHJN3JEer3LXbFKcmc4vNQnhJC9Rvmdv9zEwC9rrQ4qunyFMthy",
  "key13": "4meuZ4UwLv58rDCnfeCnhQ6ngqy5ykXxXhwpWfEknnmfjfyQ387WC6SkRvicNWDasdSj1zQ6YoD53f4S4f4Z932E",
  "key14": "66quz857MPaogg5dDhPvGCKS8ofvvQR8UkF5nbpng9XxSe1mnZkYhY7wavQaAH1nMMQzQ5JPMsFpmLZXCTpLcX44",
  "key15": "2dW68ZnViLRA4bqnL11yxFZYhUerwrq28oFTgQ3CCfXqmq6ZizVVaUCVoqP5NJrSYpAcJy56A1dmmM8Rqiiv8EQW",
  "key16": "4GmRpf5hzUPuK5nuTHcxs91DeRDDiYz16Pra2HJF1FtxBHFbaaeZYGHhLSySPmNo8s2eWuVKyUfgsVqXuYoXMGxC",
  "key17": "2mDJwsL8u2byy3aCB8mhzkELMm1Em9uMbTXsqWuRP6X7oEYZp4CjZkfrNjpvM4oGdJmZksxKvN7NtsreXYTZYZYZ",
  "key18": "4iLFUiigajGnkva7E7NyjhVd3KY19mGjpGmxdTj7Ng7q5vXv9giEKdz44jMmDbykSt98EgyVsc3BjJ9yqWkePrqY",
  "key19": "yYKiUP7YMys4qs2rBtrvpEm8XBMqrmH5teoM2Gome13em3v5veWWguwPsjQCTGcJBRu9ryEWkXKqspEGSt9j4jR",
  "key20": "3fEPdD7REaJoY6ByujAtokmc3ySAHE4oJB72EQvb5J54e8tUC8UnXyN1ymyrJZmVdid3ZCt4BTr28hU69LZLJtA1",
  "key21": "4gS7N7YTcL9F9nk6aYvJKUWBYCbnJT9pyMVXcdiwSEjsCsjsF9SZXySpui8FN1bPQJtdebGiQh6eJSTTvn854Jwx",
  "key22": "grvox6kiQwZz9B32rfnhnbUgntMTFDCbU919uTMQmmdA6aR2qFRdu4EnebsJgawnBcQFQfr1kKvVeu2E2i7nrkT",
  "key23": "4m1PPvgjbWakb4HXbFe9iqVf3Ky4qmcGKqyp1nfJ19GPHiYyhP77Kz8arZEAz3yygov7e9NuYL35C4qSpsD5H63x",
  "key24": "5Wts1hhJSm7uWcRpdg2Qu8hhrTmwdXMtmvJxqbShGUghGowiUnYjH5dvegvp67Z2amYypnMuiSzqFygpJDs615Di",
  "key25": "5HdbDbYyZM81DvQ1CsbgaA594jVNWpRFzeiKYgS8kKY7xiWQi8p6QAyP4WA1zMjKC56NyhxzcogoNtnEkuHZjDHE",
  "key26": "z9cX15SUrSetZ2s7YmJywcbLG2byphfXjYvaoNFYKNhLd9TmMX47rs7v6aeRyohRrVhYgsFnUjg9iDNfQRHLa5h",
  "key27": "2Z6T6Rn6BZoyXYtmVXbz4sgddLMdyt1Ew7BYeJF2RoiC4nM8HQKL3NawvsqNP2RKjBT3SQQTCSTtp9guDd854HVW",
  "key28": "4LS9aETgt11ZnoMdJ2BNHF9fFhUkW115tLrPXn87YADJ4zmx68BVQUGWCS5oAYyUt9KktUCNKK55gFAJfGy37w9p",
  "key29": "45jqBt1LBRQ77oEY9Ctroxajr15LViyDJW958HiqKEzxmghJnYERGBC5pHZMRus9ZuXjaSa1HGdSwe2hpcKZ5toJ",
  "key30": "59XtRFBXk8AFPMM9GCoQWakUjRhvZRFTLt5i9W6CrBP1YMoGYDvmpcHpafSxe9TpNxPPqLd7DGTMDCjKYvmQR8cD",
  "key31": "34uf7LpWxuLCbNQTnx1HomFTzrkYJDHGTG1BcudCYthZFVBjrES9RqS1XjjccmxsmYciyFDnyaEPrE7Fu28uPAEc",
  "key32": "37QUchF9xQPteZWt9VtmYtb6eEtXEK92Xc9L26NS6Ud9KjwCW5pEAfyyFmog6ymWQaruxxTKk5L5TR1VTraiMCcF",
  "key33": "2oitBn9ucAGiHPo2PNfyQezPCGATTdxo2BQNQZyzy33ZjELBT72LnRT5me6MtJWzoYNmtFtDNisqseyVTLKB5525",
  "key34": "2pNLx4RL44DHyZjU7rZwfRVQsh1ZF7WVKJ4BnbT9QUjhXwq1yZ2xDziD5x8eGZCu5avFbMg5isdJefJqFyWrsnme",
  "key35": "ZzJ57jdHFEGxbWp2yzY5HA1FmxtfJXLH3W28ci7rhbYuymPywXhSphC897VSYFbGb4jQJw1S6i1M5ogmwsrF4G4",
  "key36": "3QeG4UwNGwJVNxnaJHyi4H6rxrpQcQSpP9gBkAju4jFoJg89dzFvgturWDPSMdHL5wbgav7MXWgxSvAiAKaZ9fyt",
  "key37": "5cfx2JamFhDvSLsr9Cy1qRfGtavSN1rBXCq8ksPAJcw2zZ7cM1qnRMnUkFNvUdBpKtr3vDGKeFiepXqBmovurHdm",
  "key38": "39NDrMHY9jVSnKgFMrEdooe6ZNwVzGsz12RYPfi8dvFxMkRQvgXTw689TaZRAKx3gCYxUQkLmJkvTntAmBvHbLcY",
  "key39": "3v1de7aXMdpaAaG728bL9YMm3qDMq7rwaj7g4WQYR9b9hzqwT4PJYqKsJXuZ95Mgeq2ZAZjMUG8efwYKLASBtiq5",
  "key40": "5zoqcyYdjZYq9R2tYr9NDCmAvUEkJo96nUBowjyzTpUMt5B7ZSDmD915Ds5VnhCKZgrcKGcYUdk8P1nGkgYrPGRL",
  "key41": "h8hsZHWYv45Xs9rhs8eVw98vhMAdvNT6VgbK9SA1fmXZZFXN6TNE18Ug8V1yYjwEySYJiPBxwDFLwtWdBNoL968",
  "key42": "2o87bbhAGtgmd9A4kRVkim7XoSNXXGmpn6MFDiyRTraaPUoPdibhU4xkhgJoPwHKmNaQG7FtX1QNRqEuq7BrFpPp",
  "key43": "3Thpq6JoETpm5vFrrVJMxF6Vdj7nhCAyNJCMTsbpbGWMgaQ5JZempy8bcykumiEjnPexqUKPAErQ3T7dm4DfTRv4",
  "key44": "2WKoPLoVM7bYCQvhJRzfhFuqXbBiUVKQNNArSrMVy6d68eLeDcpwafLTMnXyw5Zz3SH23jhbe6g6jD32LXZ8rcZY",
  "key45": "um66eax2VSHLgWfCs3XiVwXNcKo1JUeRuo6fTuXDbMgRFvJaRzs1wEhb67JqogWicLvqp3eTLTY5fo73Etuidnz",
  "key46": "3CfKVLdtTq71x7YHd8fNmX4bsPBhYZ8M9xY8BnxNGM3KjPorGYwMH3hS239NFKa3hFTKcNFB47QUSuisfznjgLMN",
  "key47": "3jaBDYRxBF58eapBAHoTj857ZJNT2yxipwbaRoiXWniNwzuvrmbW32wJwkQQbtA68CeX714bmrwV3uMpidTR2EuN",
  "key48": "3p9nmaKpZLXDPfrhAZgeTpzrPZDqiyGcvtAQhvk4swhRwukTtx6wqjyTMoNXyyTRkVjStBSiSZSTvevprV5AHoDi"
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
