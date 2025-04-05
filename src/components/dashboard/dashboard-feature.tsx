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
    "2tgjFx4XYhB5Wkc3PBnzDjjtw6Sm7aXEQRaEN7mGsi46iwnCenvpka7iN5BFqxdpL7ay1dfTuEAzbGEkMDopf2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Fne26oD9TqCnJGmuKN5XspdB2MMkVDVwvxF5V2rJU4HddaPA3kvydgsDfm4qLD85YiJNNAYZgBKbzd5aoSfbV3",
  "key1": "AbRUjounNCAJm4QKw4xymYrPhHxXw3p9PRBY8NkbfWtZwZVjnkUWvu1poJpAR9Em1Pv9ka1vj3QK6JRgkCYwZnk",
  "key2": "2S7dzSnoBXMkiX6T2UNKoDbDN9G8xubrtB6vX45QuHbwuYWyL4Am5vjWgRFrVsHLjckUErpPWBjUVLjkSGxvZfZG",
  "key3": "4RyUer64hyajkJsFeMmQcXjc7mnLKXk2kAFLTL8ZfzTRkBVCgLV16VY8t1n7D446bevVnEfqW7Cv7zFU3riybi8e",
  "key4": "51ntyJG8FVMeRzryjqbFz6pbPbtbyyzTiLTPKY2DwPB7Pah8nfokMQd2swmQwWghUKCndCUPHFcEBb8AvzHaaiHn",
  "key5": "2QgXiVadkYPmHrs8KTKzEyHmBLiV5XNE8aPNg6yeqKjB9qmji94Gj9zBRCDf8byqdPJFtpa1d9KcbYGjrcps77R9",
  "key6": "2KTke5rdMUKiLLMwivgxXKQcDqWe3ZM8XH16z1jdXzk2rYgys9hTftGKsgNK6BYELgaXaPRr5BuPi7QCsXXBe22H",
  "key7": "678ywBJpMSDCT2y8UqdoT1RNQ9ENcfR79rF6DEXKtsHd4LpXPNtqpRvbhMaC2k38B1vju9pkvnJCUv4qyQCMme9r",
  "key8": "2Nr5w9UmJSGj1McWZB8QjvGU3s5aJvEhseJUATrgK3fcjgsKVgQknGKqRLkgA12aGi7EGMnHeKK58fVhCtMP1FLR",
  "key9": "5AyVeLGBdo3CchUKMnZUqxqqadBUr7XLMLdLDiUTyWgud98Q8UgHUTsEte3LAoVZ5fR7vpbFAdi4N5AWTAVZTEAL",
  "key10": "4DqifHmNRH8E7P2AHkS8r35qTGtzGsn8K8Gze5L3oV9429USe9TXX7rhPW2Do17yX3m1iThsER6KJqPHJ2qYYeGN",
  "key11": "3vhUH1jAtVfhJegJvV8gYZL2ER9Dpd1rzTxBLzNzJjJq4sumxtLmyasiWvfNtaP3xYrMzRQ1HzV2kuB8cMSnKA4f",
  "key12": "56ARL63zDPhpYDmmjyTLLMmbxkC5LzQWMSAVFnitzLct19gN48EAvdodHV3vVk7RcTcZxqaxdFek3TPv55S1NU7X",
  "key13": "2ZnzPurAQXRAfR5wAeB4DkL9k3LFb3a8e4s7Niuc8ZMzDG95kmi8SN8PyF2rDB7JCBmuohYvT3TMquUVFfbtQ1Kc",
  "key14": "5UfcjdG8bB9yBQMWhdFvzzJpreDddP261DqT22ekWSPYyRQSRLNcPm13ePeRxWvTs6528zh224kWZX7WnembFM6P",
  "key15": "mDPm7xxUJTtCn1E1x5Ku8mieeGxo3boK7beMBjbQmiDPKFLEcynR2qYEypXJRijssPhJcMQ3YgHwC4rRsih1TnW",
  "key16": "5f91RhFmqitB8pBKTFnBLD8Y6SYbwtTFbToETw19WBAtB87SS2SjpsTMeeYyRpm7oxFyAvY2PPoG5hpjeXa8yRnt",
  "key17": "RssfQY9VVkAR9Cdi1jn5cfZnVDVXyJH8DrRjz8HqDU6K9ny7dF2QRgwPr2x2696aTC5wp5TTQeddkAGN1FABgnZ",
  "key18": "2jRXyfbuA7bEUev8yiPjfmjNKqrQxrxrfQrC1GRu53sj9dFFaGUcXSPWRX8ctb7Y7XA1BpvdKJMMocbNCu5w3Mau",
  "key19": "4y7bpNrSTkLhcLsuaX4xdKFRJKg3cAyiMRnU8pdGauTSR32KaeVkvADvnFNDoXEGYP82CKd6SCxDeLnU4nT43YM4",
  "key20": "3m4JfujpExkwbTQYdUb8V79azWBNfPaywD2EeLTcg5M7ftPKHqS8KprS45ridr3yTPcGfKA5DEiijjyYnsu9fahS",
  "key21": "2iN5SoBzicyhXMQ5y6wUkaabmVK9ikDfoRQ3p4yXP6XVo4kH6BPJmf2Gn2pxH69UcDUXmSCF37bSdnXE8qpFDYWW",
  "key22": "3mzzdQvkAQDSp2XUoLZNm7iWEbd8s4Xy1rRbzu5nEjPHM6vdgnJbCYhr54kh9KD9eKGVPEZvrrrZcootNsshrqFM",
  "key23": "2ckwSFa9H5JoZNVEg2sQCE2VcuPn79arCQFyVgR8ECZFjK2u3kNVcNwELJRcn68jJebAqGCWs9TJJiKxogH8EJRx",
  "key24": "4UMzRbUckmSw2hD4ViiWNkdVmtdborpYKWHmVSKF2Pmm6oEqDi5yieGhYA7ubC6LJgaW4158PausAkkgBDVytE8i",
  "key25": "3iDjdZ9K9zhpasA1QJNjPYV4eKuVFCCJfLXvuBUyVWNyDTxjL8tN89EygFwKJ5yrgrd3c8gK7TdoGMjmytyMUCS3",
  "key26": "4c76bFRVcKt13gGbUT8SWGggCTkcxcouGpGdmrBo9akpQAYiRhwx5hK2obcQKxqebn6C4aBPCMMj8yHuvmEprXrV",
  "key27": "5j9ergvdWDqc19nXMwy6T37dWvyrGHFszp4s2YJXDMchXMuGXCwcnRdnwgbB1eUrfv2VJedEVrtd8byxvDoLmcN8",
  "key28": "33S3K77HAshqw3JRUZxyyREA1wVN3aptvKZ6gJHXxpkEHvDCPJmebrm1LKagHpXkb8bvP3reJ1ZtpZFs3iHNKDA9",
  "key29": "2VJ9tuQNH2hLfuswAgydNAcDWj1kmG1X2R9wt5J195LDkULc4o7pB3dBuzKQeJZVyEU1p7F7P5CPo13P4D49nGMA",
  "key30": "5EpbtowD6yrh94Ss1Kv5pmPiDDJxX3tBaFrqvVRvZbeJFM4kGCF6RFjZ6R3oduSXJFHQuLqD39VJA2EoDYzzVobX",
  "key31": "4Dgzi8jJTjM2HM1iGH6XwoYqBELFMBGsNvQMFLhJBKyHYvkKB5cLVPdeLnN2hqxTp5fucqWKoXDfxtt7B8w1419r",
  "key32": "58XZBhigcZ88mLpbV8n6yUUWJXxTwTzkz1YsST3e9sDzFGa3n4pcKKSTwB6MkBRMWE6R9DkzdM3Ksd1nxaWSovct",
  "key33": "32HTLdrJLVqL7VTPwh2hNDdsYEyX98UjuB9qtQsMPkhEnnQ5YwTdiZvJegjyYqSbyxqfGdxuaJ6QdrZ7aXui58KE",
  "key34": "BsAo3icPtwQh4yWnhC87qNZ7W5TPnH8Vd4ndemuvQmTQv844Nak2LVPFkXUmiPGoaGiPvCoYvd6o6o9akfv6NhM",
  "key35": "3K1Uwjb11VxkDxCEw87yhAGCVjdxcEg68ctrCYy4WMbDD18TGxnB9DkHs661dDnmrpkxkTSakcqhdKbrqAQSUS6E",
  "key36": "4pXFUjNzkRg1RVzgKKt6wWrYyQ62WvQHWwwZfvaSsUygSjZEZ3rqTV2645k8UB93F5hgQJnMNnhxDv8wcHDcaSYB",
  "key37": "2shDh9FByT4PrRp3mLd7WZffU4Li71x9wTDrhruhy4HHZnbx979hWLHnA7xEHgKexh9KuQ6QMPYnEtzwyDCYZQ2D",
  "key38": "439zrZhJHfwAKMJGEHFCZdEXyzN83vL3LnAJdRfXGvFQWVqjsGm7Z8Z3VShPCoMqmVwi3LV8JC6pi492QbMzGMoa",
  "key39": "XqSwbNwTvTkZgKiXmgrG9HHh1vCV7c5Qe2CtzKyNfqc21VcrAiFZmtpwUu4y7neZ6M32Z2yvo8H9D2hpHGqE9cF",
  "key40": "3xNa5k29VYXT2LEMeSve27wA2QUxjXxUPUbVjJpsT9rfucFjuErhbAtd5cmMySUGzC9AGLkGSt6N4p9Q2AzrqYXu",
  "key41": "4vapTK8kGVonZTbPYezJ3NrGfcddJJLVdTXEvzARFTuGu7vkKX6yPeay2wQTqdFvNdQZUZNioiendiWCzC2jtXGS",
  "key42": "dxCT9DemQ8i1UGSr1jKqHoWBBP2TSS6btzQpfxokUx9tMCfEiLKCwQD4xUP6G3yGU2MZd5MkiqdcXZLCYGk688d",
  "key43": "sfaQYsH3FZbLnEBLqJjznVHtcyek1CX75AUVV171M1WydBKFBfYDL3yFW2P3B9aox1kkDMsfZFgPrzY7EvtJrwa",
  "key44": "BNAP4q1AqqqtFboBPuJLg66Xw8RHVPdtyaQqMq8J14HppDVX3msXBSoBAjs7Ka99exnk9xGQq7Tgg2y2YHsoeaC",
  "key45": "4DfzFtJnjVyHCu67U2MDJHRWRMgQqehMyQoiycKRbnnYFx6SKE3GTon1f7otnoXBJbyDDw3E9eUqn7ToTT1NNAwy",
  "key46": "4GFQ3n2paDc4WLwqZ5HvqMp18by9hCZmsXon2RUMGjtoGVevPtPrRnjx5JzHitNF1MVyeaf93hLQ39ezGHFU2PXW",
  "key47": "54dxUGUFhgph6oac3wf8F7QDNoEwPa739fETQpbydoHeykpvSjyHCZpDMHpQWnkawdk1WRYqNh19r84znfZMAFbH",
  "key48": "5bFY5nQdhHzKwqiNxBnC1pzww7eC2EjRyYMT13EQnKjrhTnb7QYcetgHE3TcvSUa5i1gcn4kjhRzkb5irtaSsSq4",
  "key49": "23y3U8VknD9Lf7kNoDs9Qn7s3aBt9yC1zgBmsR7DurGC1tUmrg3RL5h1cH9pJg2y18m4kj4HSamQcTigHSRHRRfu"
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
