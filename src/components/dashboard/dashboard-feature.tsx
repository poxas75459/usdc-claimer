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
    "2SCxcqv9G4kcxf8ytcv9raxqfG9imGq1EEPxxPvdihPLrm7w9WJs15DSR2bG3JRcbnFjJi362ZW5ZHPKWbHPRVvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61kML2dAZuduBYpDKzKcd4xrdErMjuq2etimb2uTGmM74H5ZSgKe4rzyjo7xHDsfRstKSugFY7mc8114qA3EmZWD",
  "key1": "4fUoCZjyKLV2Azic9dJWJ3wdJTRu3bqTDeG7LSTivrNFS2zzvMkRq31UEu3BsmEshHeFLA2w573nWBqEGWXTx8xc",
  "key2": "Je4kKi3THfedHRnhb3J2moVXbmHwW3hB8yfBm8TAAMf9k3ReJz2yn3NeMVg6p6KNw55ygdnLsbS1uH23zXkFfWs",
  "key3": "5ApT48GixRmYV3X4tCSDvnS1U8ZCnkUzqWd6UTk67j3XNEoBB9nJH4fvDWsm1Q3HG23xCEqYpdnq9cFKHAgrdCc6",
  "key4": "2y291GEAva9KmaHmiMVYWkVMnrsZsWzX7Jx46BTBYoAB2Uu2AH9S4zkDMCFdCX89Wxk5RvPJHBZmizkPjnm3ZWh1",
  "key5": "4PLEg6ZsB6zqS7ntfDBUCkk5GY7WRFWohXjicya7zfotz1Hp9NEtcxRm1BmQVtsr4TcbNBh2UxQaczLZVh7xpS9r",
  "key6": "4avX6qHq8fjq1knqm9yXkShZ3yzs38HSanc8mdUF9TB7b1rbT7M3cov22NRKgLS76hadBs1H7WKDMD1toW6hFbr7",
  "key7": "5W299i4F2MpYQo9Q5Y6pkkWDtydsr6Qde8FNPETj7udePpMWFhJtBSZjxTPimapxxWCnzWxJWEGQVyc8ATExGc1g",
  "key8": "3rdjMA7jQHd1WiAGiELufkBPLaHSkWKD1V444xZbwoYnauSEP5JFEuDYtYS2X9sbz4HYFYsboT6S6USM7QNmiCnX",
  "key9": "2EefxYxZpLmhMeoapjqakfDdyBbAwXCTDdYyCKKvP1Sp3Ki1rdktH83Pmc1Xm4ZfzJnTpUG4eoyaLLr8CCTkhcZP",
  "key10": "3iJuo4jZAPxnVdfV5Pd7jkwr6Zt1deAzPMZoN8hQHKDoxNLfVGJMT6KBPzyMuNKYrwmcz5MCgsQJa11B9cVHbkrk",
  "key11": "5Sikw4tvhCnDLgVgV3zx5qkBubqEYXSu7z7PRDmYXnmwkZpSu89oL8rKfVAjouBZduCvkVMQm2H1uuPeF1y3oQdb",
  "key12": "2urqLPqyzcghi4FXBsQWQHienhUHdYYQ2s11Tg4mBfQ6Q9fXP5aXueFwA85MqyP9ooNMm7URfRp2rE7vqXwvc4vp",
  "key13": "6UYc2Sudu1kSM3Fur4Zjocb15wrzfCE4uPsFzoNASnGWtjgnPUfY2L5wuD2R129ZQnnNaJxCPi85RF1Mqt2EpcL",
  "key14": "31w6gjQ97EHzdnikjos7rJEU5DEF8mxx7hSp3cLys1ibnj81xkGo78D2wcPcqQWCKGU8HfkRE7u27TTcKcCPXW4g",
  "key15": "2VAjmKBPaewQyL2RUTEd6YXXtkx8i11vbrB1WMz38dGWd6K6MpUZB3kUt5iDuKHrwLZvxbSDQWYWsGd4qvRf4fWi",
  "key16": "swELNSqyKRd5bk7kQiT97k2Q9wrvEfheSdkn8554UFzgYtVBUkgTGjB3esgrJBoBX3ncJ8xG79oAWV5GKFP6s62",
  "key17": "2rMPb1aKV7v89vQuykkY2QWhGdHYpw3Wc9NtUriKoGcPCyRNaiEQUktnn7vpcuSwpvZbaEzPrLNxWJ2Uuct6dShz",
  "key18": "67Qd5MumST5bN5G3ZLigsHYAQ5yquUhLHshgdzxmhv6BTeJ3uLqi1JNKrYVbfVbn51N2YeYTjPYwDHTHkU8HQzJJ",
  "key19": "3tzc4qkChmPJ8NVpwW1h65MHzd5ouhwNSAJVbMLU5FP2j4aDsGc5iJW8W7QxUGJkxDDHmb4S9ntVgNzoL96AvNSV",
  "key20": "4N2B948DUZvKcc68TfKWnZWJhuo5mt838NsoscGuTj4qAPeTZZrrrg5CzVae8eSLTYA1yjv7FTBAK5rAqWg3FHJj",
  "key21": "sVhBB1VM5n8kUq9NtpzFCXD7Dvp1KWsHMdddUrWEVz4uV9myy24pzxz4XFNvLsHAGx37WAemsvUnJPspMURriJZ",
  "key22": "4Uyk9n9udGRBKjweciH93HAUHB8ZCWH1XxQzHeAURe6XouWSowm2fbcfAyNEcAJZgP3G3wGvF8YUbUogbKSSAhN6",
  "key23": "67gaCzP1dUp36avPsz31GEJH1xWDWVtmjVX6yR2ydC3edCQB2gFo2akvM51PkjtQ3ruAV7qRMp4QMFviwHcVJvCF",
  "key24": "39w4aUthq7Mn3a17JLZD1YVcAgTjPUpvrsitUhAYmsDEy4JN5bUZib3FimjdKP9CxndD71KT4v8Na5ax1d58MnTv",
  "key25": "527NpYqJje2fe7aJr2qneUBEvhojSwMiFT629ph1fZz23mMCRFY3XcMDxWpvUMLQTFeMU9q9Fv6ah2a7xu6GGm3Y",
  "key26": "334t8fhscQZATnZx38EGNRmTJsZq5zLoKBVNAuqX6ztRXx1ntMmAKuGsYMCjwsen7uGa59YF3KXuwJscdMvPBrzK",
  "key27": "2ooCeqybLxJVBmBkitBr1eH3kwUf54CbvFj5vr28ULBXEwz6C3t9gt8JYescEpQTC1Fmo7CDGNtzJxhhgxPTuzNB",
  "key28": "2Qx5f3hymcAjvdKEiwy5Rw6ADAaAKvppfZg4XYJdqbBkyKad4V3a7pr5r7s1vnsUuKzXUEd73JpEKKsZR8hKcrXn",
  "key29": "4eAYbbZNabeLST2CzoNsniqtAp8Cw85jGtf8djT1pmXujmcZbdFmtWZ9MpyfNx7uBU5Z1xTdsPmQ3WaL1MCZE2ov",
  "key30": "5niwSnojqcdeHkjbeBaftxHbtfd3pnMUGKKr1YRQmdJTXoGbNz4Re2iBF4BCP3bqFc3ZCwnKsi1zYpmgRYdRmiDz",
  "key31": "4M3VRxtUPigaEjCQ7JzHQpNSAu3CzVYRtNR7aydE8ugF4Uu2FExmQ9vxeAK6VMhDuPNzQRm7PfRzsaB49oGFgT5u",
  "key32": "4wCt458vMJ9yHHnDJhPz4Cth2a5x8MpnSXzYJmK2uhgRma174dC9z8DTAcJcVawd1UV4BGXc9sLy6dpGYwdD8krB",
  "key33": "4L8EyZBWnZQUhZHd1FhiM1z9wBzrm9f5E4H12Psjm8K5NTkM42CXujYU3VwoJbegg2RpHAV9aoEwSBKk7JMzarYN",
  "key34": "2WF3trj9XwHCjYTFxUjou7qsK4Yw88Q2TocDGV3vABFcfsPJ3yye2HkrobqV4hDoYrjhGrR4uTCgmVbHT5NvGRv3"
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
