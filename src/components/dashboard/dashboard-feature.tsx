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
    "39au6LQHUPK8h3FeYVYuc57YtXVf7NWsCWLvNA1bVc6hNrXj6giPnsMxacniYGQzmvNvJtdRucqqdSj9hfrKST8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwUALQgU6Ew35DHc66DMSoiU37Y4MdbYj169Swq3SVTMt48XYuuNipuFdCKjhRGCN8cvZE6zXGEQb1xV88DCvf4",
  "key1": "2Y7N5bafJYMKsnBZW1xiKo4ayDjhHYT9146mBQ8vqLGsLriH9irQgh4yD2ExAKdVCTrpEVB35fzX13vADviKFQu6",
  "key2": "4YbX21kBFNsP8Tjq4usfkWbxhD63tR946NhWnR9yqLmr81P4tcphyaRDvPa7TBNfpkaEBFY77me5QQSBYHAaGGST",
  "key3": "2wXj6ib2aH9hu5Wv7RjByNbZ7F1PAsTo46iwq6GozE7MzLr7tYySVp5DvG7zhnUTE9TDM4Lhpm13MRRVbvHMQ3pY",
  "key4": "7VvAe6oSi9b9cU2dbggCQ99BEFcUikZdtonQevhtiJCJjKN54CRUGxTLJf7e1BV8PSXPLMXthHVbCQ8MmBJfTp7",
  "key5": "5rviUAubHcjRpr5rDZhxgX6xbWTtKhYSByem8C3H9ycbaez42ZZ7n8gHTNRnGxtuTeY7cykB2zLv6W4BJxncCkXh",
  "key6": "5oB3a18CVuxrW3GhXvv9hTVNMFfCYZYuYWfCJkTEtsgPS6Bvtt6HspPmc7fsmrPRnTKBQqoEKcyZhSEUjFHSQhPv",
  "key7": "4L5cFgkTqXBezExGapA7QBv5hXiDiLGf8bTPnSCcQLgJGS7AY9pn9Xuut91D8pzCcxiPzTKD1cnc37ofh5gG1KkJ",
  "key8": "3bF2p2LG7fESae617BoyswXCsrpvznhMic8qaEMWdtnKQvku6U8Ry2kijU7LwqQeR4NYYfvw7TakF8vFb3QiZunp",
  "key9": "23cusjEPyUEa6AiHzAzQtVgg84CKyyn48TW7UqLoe2Q6aj9kEpbMpzFH3qNkTjMRTfDz5zu3AwD3cMtbKLt252hE",
  "key10": "MBMcpeevMCB52r395Mf7YWo2kPyCEURhgTbQvoYfQQ2hqXrhZmfC5RLg2SijbqpEAwWJxC6doLHm1ixqnCrmPF1",
  "key11": "62vhGuaqSm4LJpJKTouoFZo6sd1KqU1SivXroEoJK8SMqRFVnnH9izz3o7BmyVPM7pG8eW55fxFob535hJV7Ffdu",
  "key12": "2GV5MaeJoAerCZCWHZguRszaWK6CmZPgokhoUb6btzkcLczCxG2MBesV2oMtfFwk6wuvS9AeB2aqXsg82BPsmpDU",
  "key13": "DVzDhzRvEB5NJwb3GhTQ1UutW2EYi7ddoG3hTRq1Ra5UMmwCRHRw3LSUYrUsikb21SXUwMQ1TNT26yVHouLPz3U",
  "key14": "3e4Qae6Tr8ZJvU8VV5CjhwcvQMfTDVMJKzRCruftejHsvQdCo85HYVxkTTFtcqxQshwJBfL47YPUHsQFy8LAh6ed",
  "key15": "3N9CaKBZspfQRR95S5VHSTmRHMRbMJmo7w9PbUgB7vNPQ8ynmaKVWGVMCYtHE2HWXW2gDGoQbVhDvYYcUH3JocJH",
  "key16": "Q7tQbtTkibdWoTEbY3C7qCUTiSndENHupEk1Gh2zZfyoHdzLsd1egUzSUAxvvqyfrvHMjwjSG1Ryh8aVH5CF8d3",
  "key17": "nnHCJbD53xfKBtfTvjuFf2hasma1y2jqFHFPdtyjenBKKJiDYPAmtoCceRxx8Gp1S5GJdBZt8EZh92xAPiWGvBY",
  "key18": "4F4mRjvh8bq1aSNXLMwUsEdTzYxumfbmf5JM6k2uaWGYVjC3WRBoyH4dqX8WoCJWUeQiPFN9utXAqtDWCY5VcXCN",
  "key19": "VLXCcR3eWNWa3J5bK9Bn8BL6K6y3mfF5ACMxDKdHug8NKE4fHNJXqy2cAK3BhMnBFTm1ZK5mcdLPGR88efG1WyH",
  "key20": "3wv7T9KyL45LrMcjKhfTzzgjLsC9XHmNAzUcoZvuTUwVsLz4Hg67J2ZMX8PTS9MfC7hREsrqzyPL4JD92FxxofnD",
  "key21": "DZ3S1WUHReKWdHRVacnKPnsZQbscsfvstBayvmHscnk3VJsrsAacxoS67yQURSbHtexEGxQLNiXw6FrT8SYTicL",
  "key22": "ZmgfCfR67EVrXFpd7zMwCbw5HUVAR3dg1yeWZt5jb4NUw9X8DmbZPnhr24yNwvi5G2oAfjeexdGTYbV7t8bLtcx",
  "key23": "5w8CpDLkTDnqx1fkCwCkeXxdkaZht2EkNakX77RbAHeKgs87qCGeobGSNgjrJEadDNTANuv5JanUVnF1D8LZWKKv",
  "key24": "2U7ipc3c6dZxoeYrySR2ZZHyxFDu1kvw3ERkqZLdP7eRKCzmZFsKEUbjZdWeVKJjKEhwFk182v9pz5GFUBmCxv9f",
  "key25": "5ijv2MG8gpdPeYqPDmiKayudVydna6JxZ4efWSbBp5HNTjMpMoeFDeqgrFgYCiVKYCg8ZAi5L34CFnnoqUeDBzfT",
  "key26": "5Ni1bgTemNd4UpuK6PmgvzuC3KuVTCinwBNnsZqzWbkMcXTMat7rkUjRdMifSjjVamwKBYjkFGnZ7ZpmTcB5fPPC",
  "key27": "4Q3XfKGd9QY6VL9J29oAEPWezhUaVqAVGt4XDK6PkdLrUynHHcWJ9pey2wsLzf4hzpYfz5LgjV7vG678e2ne8NQj",
  "key28": "2uNFjfASVnSMLRRZSJgGRSoYTLLhDpP6493mTrJYpGrzaUSnYeXST2Q2LCeSqtx3fN2yktaBDjpnBWpe6dWyACim",
  "key29": "4U3wqGrhre5PrAXMzzeVcGMYgRgycs7h8Jfohg4nuwqwLw2SVbVFk5TzTtaBrjXLamqGp9CvcbFg3YuVJcoRmBZ9",
  "key30": "5KxGP5VrAoDa9RKtMc9RkS3hZNmtm11sK1yMJcHJ1kqcaoApSVPhv6pR6vSXfwcZAAZQnMkcXL2NKEWWogvrN5gY",
  "key31": "bxPrhxY7SQnhYRjrsH51jH8Wn6JNr5aVXctYdKYCJUvXyG41MfsBrSFKW6fTg5oVvVQYp7djp8h6DioR4eSDyi9",
  "key32": "4vtLHnrKpHrcof6Ng39GVwhXhuM67vejrheVuEb1fCX7KupsrkDGjQJEnxUuwTcyEVGkDU5FwwNbRaAJF1VdXZDG",
  "key33": "5waKn8F1rfWnwnqEkWczwLS4cwDW3h26dRtg6MzyyVas2MRcpoRApZ21x1dmhH92cfudcz9Z2jVT8UK9W7qtsfjB",
  "key34": "5AHYdMqymjw27iSC2xqfLRGpEGQXtZVubq417z7PW9WK2tdGKH24FQgp7zRkXGTqDMKBFgc5AbqTtKuyJgF9334K",
  "key35": "wzU7joZtXvSxxTrgCkepe56mjjdRArHGnV3787TVwJ4wuEhZ8nMuWcAiDRfY6UjcBoA8HCy89xY96w4So1CfYzW",
  "key36": "3PmMaHcHj24Whqy1TKdv2wuJKAMrd3xTETXkPxKezc7SUWpVb9usSB1GN6Zvjfv1kZrs7Q5akKpvGFBgCZdBWkq5",
  "key37": "62qL7Ct7AVWLvVB1WNiLFRAmzVLAfrmdhJDR1V7PT32ivwjFJxUQsDyR7uwPpGK2rZch5sHQcYzpjdoSQnRh3X95",
  "key38": "3MQhzKZgtW6m58gw3DM51GgpPgvLFKkBYxKexZif6HtEjigiPahTdSr6UZ23ix8wyprNapKuWgMzfsFWX9yHySh5",
  "key39": "9vF8RaethWzHDuDJ93FV2HSHr8u2qT2132b2MHtZBCT6VC2ejj5wQBRNGXtbgt6MpB6eQpVvKmMYn4t7EBowerW",
  "key40": "pnGnSwsmewRqjN3Zj4PmLYQMvkbjKo1EmPWtxqMVAW4mTmNuqZRhyvXVJAuGm8RQYAuumK6odTS1vqR3Y8o9MMP",
  "key41": "2iPN4D3CypDGzMA3KbAN94teztNnz45eLkHaejta83fJecVgDUt3xcN43kiL167VJatA9Ssmg73yncxXdgxHgBvb",
  "key42": "g7mRa9pDaUhvnEd7qSTmXUASrLRs4SiPypVZ7FE1SR3XhjYFoxRXSxoMTJaH3ScsVK7uYnutrD89zJuyn8exHhY"
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
