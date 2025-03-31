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
    "2EChbCZfD1NQ2cJjyRRdYMeEYNLHEanNKd38fhH37DXU9woGUUihro2v2BqtaNv6dWk3fv58nT63Hv1zVpU8JUog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEAFzmhU5XwKb7ebCfETFnUnCLFmfPJZjSnSFuoWZD4qYjuDGty98bfRzbbiCowzFF6qjx3G6HYBwEQwBcoQcWi",
  "key1": "4Fj3FtiZfbW14ZVYnb2K8wgHhpWHJQsA6uqfDws92R1u5uiefXyrygVmoQ3i3cqavXgk3epDKQKPNDv8f8jfazQw",
  "key2": "2wh3XcsjgqKxrVTBtb4Yr3FMmsRbeF5AYmqdw6jmzjnwwgqyxnyD9VU5eAFVzaEutJcKMHzp3DEkwFmZkb7UQdnT",
  "key3": "3YKuLjT3wQ3vHQ8GrJj3pCdwHMheBpcjPdDFSDGt4dAQmxNKnxJV3hVjFPbuvj1egmDEHScM3HAikiSAfLuuagTo",
  "key4": "3uAyfZB3AzJshzbEsL18DA2gh8Jv43pCPFn5ZPjH78Za91DGiNyP7vgb88hFDcAQFtCbDTpJEgMP7NhanVSbZbSz",
  "key5": "3zTnk2Wz8Zeam4vxWRmE1EjCCgTAD3Aqdo8EgC1XKUE2tNvyhLcvjfSbTRXgusH6wgkrvviKf1nYTXFpTzAELdQp",
  "key6": "5jBsbGgw4mfch1A3oAhmFNyqE3hUQQT4kBcycnxPjXEVBi95Htm8ATZEpM5Ck4t7aotaaJBm6RayejnnNorinTwY",
  "key7": "67QkDLnBDbtX8grwx5Wy16Jf6bYpqzr3YSJVSqPPd3gxd6gzqhyrEBRGR2nCJXHLLty6SC4GTsa2ESxDtWw3qLfQ",
  "key8": "4N9f2Fcg229SuoZG4q721GJUrPK1Gt4cg6n8Uqu9GYBH5kHwy2CW8G1icMoK6CHqFQY74LF8iqgxAsByPAFtFpbA",
  "key9": "xRCZvXjuwjSgFcbrszHyizDJ1ie7kPAP1Sfnb4uveowa31X6UQeXRuy6NTnpiig1Dek7rA1GqJSrvkcG1mrhhxg",
  "key10": "3JBmBquwzU7NYfdBz6iz37RdjyCB7S4o5uAKqKFawWShpYJKvRWwn9gTwTXrjQeS9PAJix5in4kbsC87psFbxGoU",
  "key11": "4abGRdPoRoBRHGpGxcs9BtJ2WHf12PvjMq6n9y6gwnpnLmfvyEUQtP8XnfiYSWm6Gysiy56kCkEs4vxu9onbRtjz",
  "key12": "2vwkUUdWpj4CrWD8QyxmQpMdCawgAFWKryPNbuxc1zRAyzX89kPRi7rennFM2Vyh2LKpjn6UneGgKEvtWUgAP4hF",
  "key13": "2HyNyKgh9HNAJo5Ka5ysFAVaBCFQimGsh6xe7NUXvAJckyrSSigg5sEVZM9eXC83AavPrMNv5q4S1P2WxonU2gk6",
  "key14": "4H7i3jYyfx9d8S5CCsYRkwSY7XLuedSRRqW5zPuqEzoDZfvzLzHf54SC9rTGiiKz5HCpYs2u8kAsYkYm1Q7jq2aX",
  "key15": "4dJ132Bpk1zNSrAneKk4VHZrVzs5LFSfXAt6RmhToGCg8HmKAXNatWLepSA9UAyKvXHx4atFipueLLqN32cmzeYP",
  "key16": "GkeDcESgB38VLnX2wxbsLWWHUJfgMKKzHkhTBuFe4bdVkjHuQ9CRJUbH4qESyBskRRtMvnQBFMchm5udueo6V7H",
  "key17": "4MEbjxS4jTgj6vW3FjisSnDF8RyGJGXk2Eg6f7sYXcQBJxJM1uZPqaCZABQUPTWdtgAGZD4VY2bPHQdCBCiWub84",
  "key18": "14EuopeRNUMEmY9hhinp3tbqtvCxhBWg9cGyJtEjZe3JJzKDUHKP6KWjnqfZCpK7nEBgu8hLSD8dTtUGKQWGe6K",
  "key19": "2bCSBbz4vQkJbaKCiWFWXFU2wsHW586XxnrGG1puFd2Ur9TRKJSJ4gjK6Xpmb2QuZm7uzdQT4zFjs2FSN2RWWhcf",
  "key20": "4kqT5eH5TRN2RcR7Z7xsDLvDGHYKsAtA2H626Fx9KTtcAYEdc292YhcUHXPaEJZWCQcdtXMQcax7khwatfn9hPuf",
  "key21": "7WWpYhwBMbMsr2vhUfNCLR25CZDMGHnULLi2Q82uLPAsDUBADgyq6MEmxvvYwyQMZ9fsm6ACMyXTR8mRRzMiyLv",
  "key22": "2L5KJHpNEk9oRmhVN9cU7uSYAayxRdG8JYq3vNc1VsPESCPybHZgEi61jEYJmtohHmFqCu1uN4as2YYDBEQEWwqK",
  "key23": "52rcpSD5staojXucMatEQtFgyizjYPTwEUrBT9Ut9yrAduwCc9A9UPqyQXKYc4k5Pa46Hm6hMr42g65WjXqrBzdi",
  "key24": "Yy7ZKZQbxNiDeSuikHVcnRx2W5vVjb4BW1wJvgtMMFENZHWggsGzR4pXdJxqiKT9j7SkaVjQkqiiqd1oFdyiVp4",
  "key25": "RZscAWGf5ahv816GKycUQ78r4qHwgA3YDdMqKJmCDp29aAS13sePGnbdt26qu91LQWzbL9xzWovSPHsgUsQJ8Ls",
  "key26": "47RHGF9d4FXNipuA9Hxrf4cqWazMBxPNDZJHBXfPcpj8NF11dpa6WwtdvNgpm5NwEx9riUMBLmWcfY6hx9Q5iuA8",
  "key27": "2hCpVBKrZwHKadky4iBpbQ4xMst2BFchkCS4H6NazqhP7sbkP6UV1PFB3HNja3vFkCuAu2ris5ymyy9zPVgGLSXS",
  "key28": "4wuwvtcCSne84KEwnYZ78d8AtboroKonHe6FWaFV53ABzgxRfC1L5TgQh1GWAHXMSDDtkNsf7DK6vfzSSRCm3uN9",
  "key29": "5N928h5kg2HwzsprtSdKuwkKhFiYTChFyhpsVsJMyyUR5dwdwXqs39DrghFfQkyzsyVofaGJKoosJiXUs2Q7RPyx",
  "key30": "3WBB7VXS3qNDvPVoNoJ3EEgwXfaewM89juehjhhzT71Tvrjdu1T4qcBnQ8HwoxznipEMMJdC591YJp3Pw7gL87pg",
  "key31": "26N11Av4CH7RPRCfXysWUPUQihSM4bth6CMu8YCb4orADjyqfseqrVUye56r5xpFpx7V2it6T8aUcSRqNNbXG8Q3",
  "key32": "63PKMsj659UAygvXT3g989QFnLFuPMkfLgcatRP2t48NATpKrNJ69emJQexWc9RbrnGBR9VJ49nmhZ7jEjZW8mP7",
  "key33": "yLtqFBkFpYX18hSYDttMPaZ9S54ASS1j8bKJZP7mfDqbRf3tNKsYHabFbA4tR1sX56e6YDWG79uAhzP123D2hJp",
  "key34": "44uYhAgmsqBRH4TtT84TTvpGZnZB2H3eFTtNxZ7uMYS7qXSC38RnQM97F7u7RUASPngrxRNc7uWEXQUDEmtP75Qm",
  "key35": "4Je4eHXTEufoLf246kZ7KWjCQjWN95AgQoAx3RDKhezS11Q6cW99AazJCntFpv3F53zDJyxK888jiRYYcaYUEg8N",
  "key36": "hsTqADj9qGrofE536w3fpfeVC8qvygs7Z3s6sAztp7PTsdRCJKEg1hTC9A18eGaMxkCHbLRtF65mt9qDgj1pYCG",
  "key37": "586DbhiKktXJSSL9BcxU84zHT5WBBp6e8cCBkiLEB3Q7cUz2YTMgYGnCYTcYz89nf9FdjN2R56frevtcf1HqSSsC",
  "key38": "33JT4LdkckSPp3Q4TuApfPnFHSXKLjrd5dg1JufHJGaNf5BuSb7bb7yKRem7mr8ZvQ6tPD2X7zgpJ36Uq7FfejtG",
  "key39": "4aDukzVmxFHfsKjrmYYrN9P34JQmnpb21is9pxDpoETPnyXoXLnMa5ZaQAteKzaVABnzbGKiMfZY6S8zbTnCYQBf",
  "key40": "2HesFD99dBVPm1Zg42XjnHgVFsBmsad3DkQ9beB3jLFMXzq3wxhYtjUmKdkPzcEAYGhMaRjPccNJgGN1DRj5iuw2"
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
