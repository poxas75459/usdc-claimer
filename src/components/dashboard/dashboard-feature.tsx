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
    "54k2SmZQRmkNEnfV5hqMV4CMUEhBVU5u67u4MB1pN36nmVRWgZHf1Es3kwZGg5v5eYaFSJQTv9JdSVv5uwttBsjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rv7p4vog84DaxMoWnddtvn5kYExmFyoJoF4F3nRVnF9Avshpp68CVAUc6dwa7AC7gW4rDaHGWPm1kaWa1kfisLD",
  "key1": "3aT8oALKMy7WMn9WWbnE2tudxs6vyCVRDpLsNoumpsM3z2dNgSAySF59JHh4VxPoD7ieP3qp5hXhsdWkidR2Y1w2",
  "key2": "3GUsbk3VbBVENBTJax75dm1qpi8XBhpq7Pt3gYXrY38HoamPQuWhCgDR8gkRvQz31FkRU4snnhsVwEFgE46h7zes",
  "key3": "2o5oxrikQLuuakupbJJA88wktY5w3FQBYF48TMAsiUUQn3QD4AkEcSUnwRnjUWCmRXjhbcq8DgXTtcYEMRf4aw9R",
  "key4": "4DwVicpEHxPcdmge1WjHbc8wzzVF2R9DFZ9V3181o8QS9teGHFxSgnFBWxuwvmNNVVZXX7UdCKkoBRKurZaW8Maj",
  "key5": "3RDt7XptwE693S68xef7aE3xqK74MrTv1PCNrXcKiG46aDYgyTDSxPczstS9HHUCkdP5z9bHsQBPbL7ZgFX5bmAu",
  "key6": "5bykY5qK4nzCmgv4obgBmoXUxFDpjfX4joQMCr6aEeUBVTo26HTJbAM2rsZWoawqLggkHCuvTDZ48meCxcAjDyVW",
  "key7": "47oKvYRjoPpRqzQebx4BH1CPKzAEJHpAdMRzvnA4VemRfMLYMC7ECLjTc1Ary2c7hbWEoU5f7u5rm6VSLonwdhMq",
  "key8": "23tyn3FosCQewfY1NTY1uoEmmquFU5mwTu2g59t3LaT9TyAQshegEod8eLLMMeBwo99CUdkihVSbmqPT8JU7otrH",
  "key9": "5xYCEmbF1J3LqMbXwCD9ccFS9HMRapAvdM1A9B9aXiyLUtaH1pi3BKcnBdJHzvYBUARie1j3psKb8HQ7UEwp5Yjg",
  "key10": "2MQkcuuf3FpbMASRRTC2ye2UWxAqftEqhc9su4V4sGaVH3sq2C5t28XRFhwLqJBt83di54FqQQYHXsiXtqTAAGQi",
  "key11": "imT5tWDsHoyxkLgkXcQuxCTtDUGjKaA5eca3UrXA4eS1BZgqsT4Gjnnur2tEj3be9c84qXzXJGAHJQnrvVFKmVN",
  "key12": "25xa6dxC9knNpaCJTobStFAvLyf9jU55of3B6cHGdzDQq3BtB9TpWZhLmnXqe1qTFywb9KSt55QSgMrv9orkwzA7",
  "key13": "xRfLwi32uBeZ2M872sFFftFuM3vreAUDorfwEjyExkA4J1EVfg2tRyQ2ziFPQSKbRgHDQQ8bizMRi3WxCYWzYJP",
  "key14": "2bwAvGmvdG7RUcPFppzRPQ59KCE5HZtxrc5ryJFp5JnA36pEvVSytPU85daJ8w56TPF7Ds2KoPE1c6zdowh1f9rD",
  "key15": "4ejCu83oMG1iBnpm5DQRLDZC9YMBdZKsQ6xKhXJqZPQj3vXS8Ag4vfxUBMYdLyRGfaFqDcwfqFrJ15kRdjbVg1jU",
  "key16": "5tgb4SfGxyZaZYX5JVyGNPuWe8pKuvRMnog3BjQ8UkAgM1Vnzbc1WDDXjEsTTcr5oHFDwhUJJiS6xcfvJUunGAbx",
  "key17": "4AdjMFRcnWntLvgwMZsCxKiLL2kxqcSwHmc51sg25RLdSVCgRLAirQKAESo4XMLR4BynFCy5wopR1u6x1ixbbgmp",
  "key18": "5J9E3zJPJktYAYLkNJBKHgbzZVUpWJ2fydszNs4KDhKxXNBiqL5e7gjdsn29gRaz3yJz1oubFrrcFtpnKeF2Mkn4",
  "key19": "4pBvDRT8QJdDonzMuyAUuwBjCJW2dP2nWY5yr42D4UaDZheGBjtgPgUHFaQKEGT1xkcR9LLZ61fs7LTTwfmB15MR",
  "key20": "2yLyEKGJErk82PxtrQ5XMtYvFY1eTZd8HMjFsywRPdnEzwqvEkgVjn14PM68MAmjUC9XAsgwC4FKqj9T83Lp3fJ7",
  "key21": "22qye1kGhpaLMt8XzY1zgUmBtRBg5988RRrK5TCxuJJPkDTfLWQQnnooEsYC3qWx3poSQ5mmdSM59j5oAXX6vtiw",
  "key22": "V9sEVNKRGWdXGPzRFRfnbckdJKTC5bbq1jYXBRhs8mxqzt2PaVs81eVkVmsQFP4VAvt9fA5Hnph8RYDSuny7PzT",
  "key23": "3RcQmmNpXAehCeX31osd5Ac22pee6fuwbqu1nQtmyEHhKr2MjzgVtNztqECRSAiWao3mXcSCh3LPTc8tG57VQGzV",
  "key24": "5dbNNbTeYhPgQemnapSfPLYyGs2wG2zsP1SnNV8KHbjXXazuSbwhwqb1dZcK4siC51V7Vfq2DTCBJ8Twe5htu5kB",
  "key25": "5NX2diW3rbSjZJALvScziqFzoVNn2jPUXmjBjQv3Mds4T2zPf52MwcfNpxE2uZSngmAnsVpkvsSivTGiv1HFwoax",
  "key26": "4Ya7KqDVNHbxbqYaPyaha1hzEJjBB4BTUtU5YZAk88XRcAf7R8872rrpVkgP1F3NHCVtJsXirooqZAKj1qati6pX",
  "key27": "76LCfSrPNpEtm6s1WBt9m11UyTZ5oVH9DrLXDq7qU1JS8ps5TVSmMtYKhDp1tbWH7rYpMdquT2WKRacqsxXsCLB",
  "key28": "Pv8gcsr97x7gjG6gxh1GPMqCEcC5Jtx79RXmPckc6nzGZmry2NDNgV19i6mAvac4yB8eZUCw27hCURET11qcGdJ",
  "key29": "4q41VQLy5VwzmgDaVzymgkTW3swct7ES1x891Zvv41Tb4qh9Yju3DcGPNzN4tDPpkNt4UXVQMbHJt7k6FVXpoje",
  "key30": "5P4NaubFJtn3qnTzCc7kwZ8561ZFDWvtPS9Vk1zMLsCTiBf7JCoCdRFDwhXWVjscSx9dTWPJ34X41LJq8pNSDhAN",
  "key31": "5VhHFVw8PrEEhXpf3eGfqPTCaTymxvMUZPa5bqvwcVxDDQRoPBjAXWFs63ivf7FnU26enMuRxVS3xvyigc62tJ8j",
  "key32": "YJcAYSAbN8KVGiDnY2ZAKKyp8W5CvwGZSEU9MwYEMaBVvLuPHLET72Rk9w6VwZ9h4fe9cnx77yWxuwiq8ntAPiQ",
  "key33": "3jodhpCHsdFf68Qksqyagb3E84wxt3hgWnMZWdTyo1Za4VV759QZckYKa1JLFBKntzKurXM16sJBUPNiBQ8x42Sr",
  "key34": "562NpLsiLohzQDJrdnJATaJ4SceUSLLVZofvgJSRrWKJDBRiXgzyMV3CpsGg2YoPyfL6EqzfWYwNwLUDMm7AJQDg"
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
