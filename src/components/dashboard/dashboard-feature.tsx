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
    "ErXGu4a3zEA31Q1WJsydqkMkokTaxgXdfMtKtm4YcAhhm5x1oC87fjszX7skdmNz5B3fFvbkYc963P3mnFB3RJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ajJATX1ZDMg6CqdkjxdrR9TJbGwSZ2w8jhKtirJiaznpYCz2LVXZTZ7Xp5Xhj7BSNmTX21iVoTFdobvtC97MHs",
  "key1": "3NfTADUsP5tcHK6bMyZ3URREo8o5PAHYVwfTD8ts966Q8koPavRjbWGLc8fZ8nggFBLAL7SNRhN4b9FKyDk18wUH",
  "key2": "AXfRZVsq7q5yVTJkKFSi5XxAKgvpYBoRUAaodcrbggS8GortZEpeFCMQ1T24VRn31j2grHoGhdJ1FK29pwWmPr8",
  "key3": "3yt6vbQukCyWAWcQdLtZNNDDKFf1fpDUeZ9ugFQ34nvWxbPmebjc5i92gQq2MmL4wqZkCbkRw6imh4doen9LRNjk",
  "key4": "5M3id8uGcX37rZdc2mABUg6XAfQUjrNU824pssKHTyHcfZncK4bZLzV7zHYPrYfhBFLWZEzJSGj7e1vctUe1DY3h",
  "key5": "4GgVU8D3YT9GggrseSYS3c6U69uVqp8VpqzseZkVEveFd9pUHWvuMiKCshr8c62HgurBPyR6GXhzt9U7xvRfRr9n",
  "key6": "5GoTveQ54ky3Qmsv8zWfHJK2wesAN1z6YcXPVzb4JLT34EQKPWv3LkFXimvXc4kyw7DKUSCTnA844V9rkoLMHRj1",
  "key7": "4TdEaVtLDkBbhnFgJnMLAWZd3oprRPVftXvD9eySNk6bRNGzX2ApBSk3ieLBsdYqy1LjSCGycWLoWbtdMN9mstg2",
  "key8": "5cXfj5KSUjNjHvh2opqEgPUY3vwn3ztNnGRmwdzoG4VZZoFJAm5daKLAt6YURnW3Caszurhv1VKcRK6Uvd9Zmv57",
  "key9": "5M1wsjD3XL49T3aLzz47TVAGD6C9LqLRJMNZow1nLC4zBcyvgoLVPXTjAWD87YBUfCnmVK8JeEtTWePFVCw5QczX",
  "key10": "2kcY52qeYMUXNskoa3v3iepvArDVETHYyHXWYiNXHjHx4VndafygF6YgETL2V3PDxbQNq2gxBeKwRBMExvnfh5cq",
  "key11": "3tbzz9u7r6eG4sRYd4hMrPtxpBsDq9kgDNba5qTgRR3i9QvofWGKbSuztL5sr7A6327qXR45E4FTS244NwZzXtmL",
  "key12": "2xJ4JMCLTrD8wWgmpM6oXuZWGMyXMhiLoiGiPGTZtknQ8GW1bQJeiPEw25qZeTnVezNen1p3kFLnRZtFVZ2JDV3z",
  "key13": "45FLSmroXazQNqAcKALWtbUzk19XJ2MfkFEbLidpSy7tYknUZaRHkYnDu32gv8jUSSR1Bm4M6kgGWGZaQoDuXfQ2",
  "key14": "3kArskJkT71uHqSnR59LXS4qz4b3eeacTmptVPzDrX81BWpYFZsHfqXbjWta8BDiZepxCMHdHNHDwjPvAjyRPpAd",
  "key15": "54mu29bhGKU9pYCggoksKGzMpdWfX5tKBYDrZXz97HwLZbtM8DmhmHcf54bwHSEKvBq8ZLvP6wqC6Cf4iFB8BsGx",
  "key16": "3MaVcxabfXhqDorAW9t7vSPwBkr8EQiHQAwwDyGYr8u2dTAankxFpZQ9SPDEKCpY9LFY6TEKefDMXyciyTWWtFCL",
  "key17": "4QvautJDPZ4szeyAG4wXNDF2GeZxU4A6fcWxwro2SSAACr1faiHAG1eq6CT8J9R3h5MUJ117FxDPBtRCpKt3jfFA",
  "key18": "31hKu7mMm76hV5bLBo44wC8s6p5VJmEeKuyLrXxWpZBNRoYf9ugHroBY5sLz6a8NxTyXFqWLfQE7XFa9f1C2pTzH",
  "key19": "5Lnix3WrieRAt9DGtCSwAF6pXnze6XdGacravRcy9rNQ5RRxim6em4QrMyv3F1EHq1m1fQx1o5bJbg6y2wuLdaWt",
  "key20": "3kvVKG49GNGVy1oN2gRqN3VDhwJJs5SxDT8Hr5XHgoF5Zwsbze3n2RD3tdbam7pUqaHV5wyzQCv9i6QshdZBAz4e",
  "key21": "33EchKKAMTdh8bYQgCn9dooZDDfvpHsrehN5WJKfeyPo6LeN1WD7VyNbiMx8TwkH7EaTRjYk1XBDqAqPT8ATdamX",
  "key22": "3c5FEVtwamErYW125e6srY9QqyuVEbuy1jAyzX77bQnLEZcQpByGfgao7BxJNxQmWHnDqU7h4rC7dfjeRVKKZMir",
  "key23": "61UUB4sh4t9ZSTQQimV6stcPNK67in773QF79x4pr3m2KRXfCxQCPysiW7BBkenXVWecJ9x1M17gNXuMrokQMvcX",
  "key24": "3tkjGKD4MuAUvrriMA2Dfx1d3e6F6vuhEdXAt2AESZfs8vfpHQqPzHva53dbXhdoaY8YbXHJAaUyJaWJqGMDJuqP",
  "key25": "2iip15e45sjHUa3uGWFsV4cPTQjmNVa2aqXkQmPmcj16xPBxkxwAR311NBnFqKRsWmWM3MvSbNAvhvHStX9mSWNP",
  "key26": "2wKS4ygNsKWJpKyKCwGxyp4pXWkADDvM5s2a4nVxsNUfbisiU16ZuDhsxgVtbWusgNxEACpwopak5n2vNY8GJ3XT",
  "key27": "14vwFAmH64T8BUcW6C8QqeCBEWy72P69tSTTzLbx88qJfyA8rVcmKWdzFxArzXZv6eeEr6XU1J9CuQorLHSPERc",
  "key28": "5nvFhHWSfreHzh4bojxsPoYcuXSn5273VBat3DZ51zD38NFNK7aPLQbxL84RmM93RzWV1w6uu6Qc7229MwXcN3rY",
  "key29": "24aKZpuA7ggMKCFkYkFEpgBnBwmg6Ht56ibLjoSRXrcsYwddizSVZJyyxgnF7a1WvKog8kPzPzkw4YEbpDKTZK2V",
  "key30": "5DiaoDJ62o9xtUPdWGFStgKJxBS86xKWrzdAGD11A5VzueWNSDt5S8ggpecxVW5rQoo7aYzyB8X78za4mSHQxd8N",
  "key31": "2eHab8zygJNGyjBspGes44rnxjev8HeKBncxi5oZT73ouz68ek1EMq31ZAoKoz2Hnd9ynvCGLC4AftbhHbKNtTAB",
  "key32": "hH5QSzSinKNvjZSXXfcGWCB1nEseZYFH7vfViAw9Y4Hn1TEctbG9XKP5VBNAs9gKs6BoEt7DbkWWpCTPQLJ9TbE",
  "key33": "3L9kQDRv2Bqr7xE8L9Ea89Ewoo3MV4QjGmL4kZvV2mA5tZFyJJsEsXd6B14njEQvo4UiUNrHJEtHV7oxLkP27PFU",
  "key34": "5ucfjhHoveHReKShmpMcyiFMHoySL984iPt5EW82VWBZYDqHuFeFi47dMjz66eRSvAB1E8mLyTDDK3q3GXkB2a2S",
  "key35": "21YxKWUWqDCm1X88tSjbFbwyGdKqrSRvGKjHVtkiChH87w1Em7mSqjNGrACXnT9d9EGvkVuVGLq3uQGYBjfDPHYq",
  "key36": "ugACW3BfigF6XZvCAGE9KurwK7owuU4bxUhHcuhmXyv1ejnzJjM9UJGAzpUArV7VBJQdj4dFzs9G7BisfbgRG3G",
  "key37": "2UD655ZWNutYbBqvAdqv31pJDAn4qKgprtnNXqGYnZtZ2jMno9LMFwNVBUz599kkHa6UnHDWpRygi6KF8E2K53bt",
  "key38": "4GvATHWpm7t3mNcoh2FEbkYzdk8qJyvgoMvU5oDk1FCwnV3GmcRVbH8fkc1nbUGyVq8pGQaBQPpXFtVchASnF2WG",
  "key39": "4uo85YqiTsxYwEAqandfmLeZhAY1474D6ii91e32Nn7CZicpgq54znoy7xJxqDyKV39y4VRaveTT7MB7g9iFZ8Wj"
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
