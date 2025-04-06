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
    "3vWMyUMGnjvEBgsBm8mtPnStXhcwMvdDVJh1tUh7K6VAdLstSpENbC7mpffAKeHUK8NjF2SVs41LiRGfUEUdFhQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HKz1sHPUi7cYNS3TgpKbEeEzUVW4peWkMs4BFd1E2YAPtYWP1GEDSBiwrEWWJRpWmizuax5Ks9UuZvxyTEfs8L",
  "key1": "4RTSfTykzeXPNj4Y3xk5fyFh1DsAhdasqrAc6AyJM2W8FrzjnqvfzFWHqwnMNRtGR3tX7p4qknMtJjNVCKhcWWtV",
  "key2": "2erdyMA7a4DrW1kaY16DjJiTh4ZXKj8krFaUxYHsFwVBW48CUkgn2MCR9GbhhJhR4KBF58YePdUJHcPRSCDbEPos",
  "key3": "5YSEoA9cqTwVYhFGqXvoZ94e3uEUM8xY7H7g1nrGC81fxrBVaTeLsjkwKQEaAcgws2gpcGAtUv57toEbK4eHxiBC",
  "key4": "3atVoByRNjxVmycQEzoXqA9YQ4MyuNComo6kqeGbRumfeW9sPDcyYiHtNZbNSLMyXrahZgJxiCiKsxAwnSpPVFuZ",
  "key5": "2jgakMB5s86dhakHbh3gYNLKnCbjKLUaEu2Mb86WsNA67rV8pQdEgtuojVbDsDWaxTg6h7EViY5PpYhPQ32t6Tmy",
  "key6": "4m9BLfnnp6ZuvWgduCdh3CzYk7TVqcZinhjiLyHDMdNMP8KZbxcGz4VF343ppqKSWzy7ETSE4Snpji9jiq6Jmk82",
  "key7": "41BdLaZ3gMbCvEvMbMaWGQHhUZrwrostnznLtP4TFFKvKkg7vqc4D5BKHiRmCWi3GRgXRL6wSLakRKvk3xK6Vv3m",
  "key8": "4CNh3AHKaPBWHCASej1zWHCJWC8NwT9RK6SexPD7hdQyxFNkugmB2UjLGGT76CYCVaJ6FkZR3mAW7URozit774oy",
  "key9": "2xzfUXVFEKsBHPQBv2RZd4ASU42CTWvK5b2yVNSc2Mqa7XGyFtk8jChbhjE8Lf6tvK2MvniE1BbjmMncKT275Ea9",
  "key10": "CVUjTVCUdaGcn22Qh5Mh5pfaHChE4c6wbJHVWkmV4M2iWgix4U6g5Ff1aCqZTZvQvCkttkgL1v4HG7GsJoEsoFH",
  "key11": "4uzbtXHX1kdJrMc9wAvFr2p1f3s878RSJR3HTBVVsV6pqSnXLXo35KpWjAeWt4CKJ72QkXsF5EGiPVs4ucZLB2o6",
  "key12": "wtk3SsFB2LokHR6CBNzTaTVVUCSwivBfVR25WXFVbFiuNoD1rDCufCSudt14rYV1pZbimVtSNnA4THtJ4z3Ex5M",
  "key13": "22UtdsKR9neWy3b9k6E5bWP8tsvbRLWXpeksYAgjTR459WVwSE9t7szosRwNqK9XN5DEedWkRxiMojPwVoGkZhNK",
  "key14": "xZ7q7XsrSHsqrurmmBkVQiq2NBdmykHThCp5L7umSVmTn7akkvftExwt6tC6UtUwDtfu4SS6Mdva6eroGZE3BYk",
  "key15": "5Kkhcv6vN8qqVdtyd6TfQfgSUqPk1HMACiH9kYb6cR2oiMANQs8szALMtC74HYDzLc7PyPnsM6WChTMdkuMig5db",
  "key16": "3biPpmBX55PpZDNFU73jTgZukZnyeaLWbhaDtznvbhrrNC11aoXKadvGNQYmwrqDbxiBjtNYYwErhi2UJTC7pBPC",
  "key17": "3UdMsfmP6S3JsukSSvHKhbTbxTSoai88CtJF1aaayXe69QE2WyGW7tfU8aKdmo53L6JDw8FAb8LRpPeQjgbRuquT",
  "key18": "4k1bbTYvJnt38WBFD6u6owkbTzRTThMftuk5QMQ9R6jc8Qufve1YNyiWv7GxcdiujRnyxWp3D5KqJjTHbkdJjznk",
  "key19": "2jfrr4gBcH9sp3bThnzsJ4vDusCRbzCpx3NyDuVvtR199ftEEcv7N5BkydSeUsn5T2zJDPS23oXCVQYGtQCiH2cC",
  "key20": "5DJTii65iyHRvXquuCJw4vuRb3xFCgmQY8c3ehzxT8bB6kxQoghnfcvgAGvcj4bMV8mYApJCgM2JdkNV8rp5jdWx",
  "key21": "5hphqXJoroZ2QVy2X9fHk4Cf6egWempx2aCJXWdPHXb18Myq2gdfjRfCdxz3fFviaM3qEWt7hAWEXN4kER87Vqn4",
  "key22": "539dpeomC84McfguNAwz5FjLpMc9Mmrgvc5fCcxiM3WxuYXTtJC3gD73ovWMjYdoDo97Eb8tL7WzpDSxQsKq187L",
  "key23": "2fBHEiHzafDFGofdiiMXiYxkaMDZVKPJP8hvdQW3UT9TfHvqm1yvj3XKcTpPh2PYGh5Hn8KH2FMhF8MmqCP9VG3j",
  "key24": "XZA6Auxjn6iZrCQWhZs3fre286XKv885f793voQpQu3rr2ffMXhEfHVsZ3LLA9tR1SRzxnQ9wQjtDJv1kMLJVFE",
  "key25": "5zrwuTv7T9CLYf3sDzzZXg1HHSpXkBatAJBZyHdsQeqgcPJgifzXtzgQVT3CQcMgF1DZwb5cYxcGmjXM3ZJ3cpsT",
  "key26": "2YWKQqcq9Jcoh9m8DpF3j6VmAw2V3BHwP4MnpJoSsCcWAhnXWdSGqPZ8cj2u6dugHwtTViJDyLTVWwb6HGf8jvoU",
  "key27": "2PcRm5qS15mrLyEQKtSYacXnuxZaFwL6CFUsSdcqTPqPwHdSn9H1HL8RBTQj7nqV2rxhgUmvHSpXkLJGKHKiLMbD",
  "key28": "2K9gPr9Rnqc8V2WpKjdf86PRJcK9wXyQBpwKZNaKCRvPWPrSqpznXUpoEBUf5rbsDecSmsxKqaZTkB9GUgJ32WeU",
  "key29": "2ZZSwoe9DArmTyvDT4CtQxyYM5UzXTHWsA55PvEBhiEc2kB2nX4wANCjHDCgofmVsJMxf93N2rcHWXCsQczbvUpF",
  "key30": "2B1HWyjBt1GBKzeDGdejh4Y5meEJxfiZKQUEZPkJ9jSHjSrfhJuN68ApDFmY8diKViB12fB7PCyFa6oT2NtpBUQv",
  "key31": "u9dkAsiYqwrsSMQqexrhcmHZQvE4JVYwcwb3dJFfyTxYtT6jEBnuoMZsFgDDPhHpxJ28xb5DLnLVsaNQGLM2JjW",
  "key32": "4ZHXEFJ1nMzKspPMiaWFEbU7Qzk4sXNGfJgc7ek7HzDoF72ZVoeukwAWbepNxTfBRNS8suE5mwnDicdDRjNSKzER",
  "key33": "21Zj7oft6fn4v6i8dy1KTEyHHRbmjofpzfNLH9HUYB2Jdh9N7TyXn9xKikadngL2UZaZ3KEJmwU3Ccp4EGPWkVNe",
  "key34": "37rszpg8oMFSH4sACALZHJZQXjLaFYJE993oNkDyMGuKpSMWmANZm6APvRb9EgBX1dzqcjc51otYt2iqwHbk4QBG",
  "key35": "5k8dtvPmUxQ43hhwJ8wegoqKg9EpnydcSHLB1BHpiRdUTxbNfgSF8g5UP1K7yKo9ygS1XvtLkymk3Fwpnz3BzfsZ",
  "key36": "38ewn3DF2SYaSmZyQ3QTx6yN4ZubRjxHZYJRjnr1qpBcPHUggkLhBkpuAuG19YH1BVVfSaomwmGLJvP79vGhbsUe",
  "key37": "4TS64Noz4iAnzUKUC4tmKDtGUsPccMx5GuyRDPmRGSUeYvgoJJtv3tPBaNzh77uXBh7h4qur55SrrFZkoLB3K7Jk",
  "key38": "xzMefJZGaLdMRUXFdYyQJo4RQvNiH6ZdoDZuv9hc9rZY4Gu8X65a4up51cAyBEJczdFV6BCFpDDY74RuQEtQNxP",
  "key39": "3ogy3q41dm8TbXM77aho6JghN9hqQ2pETa8icc7NsK3V3AHfhLi7wtz3ieq85JFW6qDbng5FX2D91KLWWXXirLxx",
  "key40": "24hZaxqs2t2zN1Jope5zatA1avEXKHsQXW4NfneojrukPk2A7aFgxX7h4Yfsq2yQcJ64qSQApJM9FroE5bQuDttD",
  "key41": "2V7fDhzVHXHztneryj1buCeSVBzrDz3HzjFt4SF6shTbgQsHDuw9RKJYjZgzWVpLAYF6zcGe4bV5LFqnh8h96Gxj",
  "key42": "2kaaFtveFChBRRpa2GPL3Laz6pC1zvYdQSz5K2TE8Tici41oKcKAPYKpUyXQKzXE8WLDZX3BmHEwSoZvBjKJrNRU"
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
