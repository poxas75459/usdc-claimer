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
    "2HecnUjwhxYgppC3GKHzVvq3kSvwR3aKPxV1vwJViuNPjhqfcVoVkTC73HyfJxW4rComoMKjicb3AQtnixgkuwJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293Wx2CekdcqE3yD6i5ngurCDq6yixLkEhjMvt41XYrLrn5w7itHRJEqyYoEpJCyt27hrv2xwAvMLFaomGS15syC",
  "key1": "4D78TjSEV74PDxPBbt7DHEnSRXuMn1SeD3nDwZ5XTdZKa3TXzSZMi7Ga6XcDC4yy1HHcTQHfkYDzSqANZ9E3SJwW",
  "key2": "3dtncSCcBPkJKCVp2ZQgnRznJoMWiwMGkU5QN6hB5anAuxxnBZL68vr7Hi4U8bGhe2fWEFNHBFt8UZjv2222gV62",
  "key3": "24yMfksRzHy7vzxE8z8mVpJiKqu9sKWgbPyt3wZYKTuZBmhhhXc9BkGWobhV5ehAiNfrC9Ahdwe8pagXR7b6d1Zk",
  "key4": "4C98MJQaVWyB4hNQ9zNivk6wL44Z9HVy7Ncq23NndSzyRByF4TWYu68j38S87k8jS1Y6TuyjNJT5jTMWBVS965gD",
  "key5": "4GMGbLTfjnmvaCpu23ooZ2G2teAZmED9ycFNE81YhL4PgQnEQk9oss2ty6rNoUJ6QjUtjZp7LJAxvbKoqyZUrv5C",
  "key6": "3s3e2tHR1BjHPH6sGggYX8yzg9oNcWwczsDuhTjUq8uKqWgBLPAG15SbuhEi3S8uTrNNS3EEY7A4GPzirrgQv67t",
  "key7": "2mhYw9LAsbf9YwdZCZJ3yVVQx7YtBWFYjP4Ru3wmUCyGbsjRSVJb6d7TJectfFpoLDj2zoxyXMysxAzXLvyyJTmx",
  "key8": "EmsUGjSo8bHju2eVPtxseyPhtPxjhUQHxF1spV13JBs6gUhZ51TbJVSUzav8NhdQVfFr33nwHgWS3q7nBtMbeMT",
  "key9": "UUCTjwfckfUED8Cb4tVyLgki65WGpuMA3hDkjX1qJU5pPfRadz1bFRAG7xFuKKTfVKo9c5t3QXGsFrLhtDyKK6Y",
  "key10": "67FU239Un9cmCtpiv5ymEMZnQP6shp9nUFf2ZeAb8qc8Q2JkNNAUp9hoGRaT2ximLVg1fBfX5CQGkfS21VPnU19S",
  "key11": "4aGQLrQhZBgE2iihs9aDGb7u5nZZS1ups4UeHYghYxDmAn4uzGYvyWvsntqM7A9TC41sZBA5aNrzk6ZVWHZqNz9y",
  "key12": "4Yf99LZrWv73xEivjQ5a5PazsVzuA6HRfYvkvcM5w2ibCHT7nc9nSFTsdsUhVo81ZXB7hrVWhU1y3pQhF9BGt8ib",
  "key13": "56TpQkbzfhN1EZSvJeMNbc8kjaeefwtdPWiEX8Yn31vJX5PVDRCUjAzLpQMtSnFdkZwAQqJD27oTfpjKWUKmzG7Q",
  "key14": "tjomMvCDUBuw3vQREZcyTMgJoaef7joaquvK8aZofE5g7gz1vUdy5G5D2NyY7ra2EKvRAsBnT3mCaSPFAwAFfFC",
  "key15": "2HDxG3urFoHbCR7M8s1NQq64kBiTDEUymidoQC28kgMN82dQ4Ls96jUUtxWLQCwGBh3caak1xWLHoshCeeHVVhLo",
  "key16": "2TFBTkKRhgg4BR7iLybr2XYFXha9PMQ3KmuxTrFJC6LqaqjE74fvwhJUfHCYhiAVebs7hmCt6Lq42mxC4CiTsHTS",
  "key17": "4KgGMSnrnPdaQwLn6a2Hn7qPKbutUnBxnqdNogrTEN5Pb89bFySu7VEyKf8EWqtnYwkSv8HmLtKKasCYCG2z13Ty",
  "key18": "4uawNHYSm1fSu9Dv3iEk1CYsf5wxT3azDdrthWzREPawDGeLBXzYi8T2m3Qmu5zd7Sihky5HGmjuwss9uxMtChAd",
  "key19": "4Qd3hrfkjF9kPmuEWaifGtKsCqRZd9rjaPKi4Tmo6VNzRP5fu54SjMgkUUSWYHsU36HQWvWHxMWhmACCJzP3vvZP",
  "key20": "Q3VzHEHTifpaNUmEkUzZh3dfS79JZtQvJ4LTKnANi1vJ98zFGr8Sry2DMNQd6U27eWvXuniiENapqceWCw4ZvLK",
  "key21": "3XBvCc6XKWFh7neFpPLqYYSt7KsgzdqFXkbbSFbNQv7YppyoE6hAY4qP89c92ffPuxaKX26UZ3ZciCdr9zyh9eD7",
  "key22": "47gWJ7DeADqDw4r2Bf528hAdra4hxTJoEWUdvNm3gGKSvHvKdHgiLRtCsPzPw4GyPJcQzSgRpSxfP8n89i9Mwixt",
  "key23": "2W3zgRRxdqLVaaKtVcLudiyKjVRaQnvp2cYiR37yvxFR3PKASb7EU3BVLqoC8NLTcCo4U7Sh57kTbL1vR4PGTxN1",
  "key24": "3kE6NkWA1FdNVqtCYu6nXsFgNHr3oA9eR6F9AzmCtxjZPEjeJMibrFXcEdNjpxNwZ2k6VaEWA67G1PhC3rMyExZe",
  "key25": "4X6tJVBwC1AfyuDwBtboShpVZD4R9VuVpX6PUqSkYj7ftNoCDhqoQD2jBAvUrK4GLtqebfczC6r2CH8WQen6C7mC",
  "key26": "3TGsMV5dt2hJjWddBVSEadD1n7TM16EbSyRKbuwfMe81hzP2q2HbFALnBfYBFd2CASfF2rmi5mQ3TPxtswwTC9hv",
  "key27": "WfmTEtLMsUfDVjm3835xLNt4YXCyFKZX6vSqyYg6sVLwegWXcSLP9vf3GHbpr64517pZM9wt5BCtbYBwCNTmXq5",
  "key28": "5MzHj5vGnst6U7jZAspdDZgiSuvAVJuLM64nB1HSpTBTx1vp23DoxkeqBng5q1NrFp29vmKDT2Ncr2qJTgnjKRoo",
  "key29": "DDvZ6n9zeJrpLRyqLTTUszSR9wdscwJXDMdLQnWV3aZPiiiQPoCToW9od3b2qPU5JbpHEC79HdkBW8n95sy73CR",
  "key30": "4aV5nFNkosXjtSwXc9yfLACpf5QeaKk2BC5sny5ei3iRfDukUJM5sRP1xW2oWS49TPUFKdU7UTcfth2U2t1vKDe5",
  "key31": "yA1Vwzarx6kiykLZvqKaVhC5NK2RPz5c2QSDEg7QRMC9ZEMcfSQtUT598eMRyjoZ9UoR5Yg6vGGaXULy1yAzT1G",
  "key32": "2fMLVE3j5HM2HCTkxYpjCGuCbC75mFppNv4NhMvuhmT82wQRFaiBWtRQ3SDwPAumRA5RrmsFxHs7NPLiM5rM1o7a",
  "key33": "5HJiHEWUoH7hvXDCjSbtRAqtcwNE4DJ4WRpN4bxaB8mmwqbrBGagP7y7iz24prJQ9LoZSe4Mub1KMutxf9wqoH1c",
  "key34": "3Kg7QUyZjVcPZE5jCQMhnHFuaACwF3hvnaJA7n31M71ESjohPNAc3WjuQc4WcGgRtmbhskXyhevRnzhjHhtE1t18",
  "key35": "4dQvxDG5KynrxLffv7d7aqWxNTZ25ZvdUDRyY1nn8sgdHhpPEzCbrftfdDvkXzu9xTdsYYcafGrmkYTb87Zd1aP9",
  "key36": "2LZGTS3t7eqMzA1JbxjVgLVK8EnQyGsjQCHYdaYLTUxQg2vZyeLwKZTs715aVY9CKHCqUSMQGb1SdLMMTw8YGAa1",
  "key37": "2RU1XQLkAdBw5fTiw7XFo5GG79PEcBu7Mou8gDYXRyj4YhF4ZboL9CTgxGGcwjrXToBiozLPYFSbRxFTPcpYHrPD",
  "key38": "qRSbHV1App13U1aMPtbdoh7Lk3A9LMqEy9H1qmJQy1oftBqi5W5BFpkXkCjpjoGBV6ZyCdo2BA2S4oQL6Q1rPL6",
  "key39": "3M51rHY9Lz4RuXUnzAw29gtYHqw2t6Nyhti73dpWCGvMqG33yf9q2MLDdsT4f6J9X9XQEsHFJnGqd7KC8z3HwFwJ",
  "key40": "32mvxAyb3NAG7oZWTgwBm3bpnFBhjFQUB1VnGFr4Zv8Jrdkk1fMqpJGg7qqYz4mWpxZSkvfkunoFcBXn79puuNV3",
  "key41": "ouGhPJsiZ1pTEF4ZKcGhPEn3u66C7BHyJySB7HsoAEgPXpCN2cfvQs6GB8yjRnVLc61RSFmxf5TDEHHj3b4VWdp",
  "key42": "UJRAoGTfq6b6XPSHJnUyomzDy4RRYuTVbMaZpmYSFtsVidv7tmvhMamEi3Kdi7iqRJPuQYdLmuumzwY9U3Uy7Ez",
  "key43": "3jxybgMzorfWEKcwjp4nygWsyWKTTRtdyexk3VZUzqqtwodToxYjU3HcN6Do4pJhoEPihUdBPY6YkeiWc76HMXsc",
  "key44": "57zmdHQ4jDb37hREajgGhPYC73spjLNKC86BaqnkDQN2cWAFMRWdp1bAX39Cq6WA21Cci5wAp66PyP66ed9gQ4Ao",
  "key45": "47CntawPYmycaHv6ahMsG3NSRV3Q7oGiqRQhgnnEumFhJmonYCseL6N5SrczCeLRmZSiizAbYhg8kag9gictxLA1",
  "key46": "SMSAxjy5o35PSyHVibwwmsX2WTBNiWUkDD8ZstUGMpo2Z7r4fwiddDtkVhaZsEBnsYZJ6EfWhsVefxTa1LaJ43V",
  "key47": "wmhNhdC3RHW27GgL4BXkfXVRYk8XEZgPDg53eXZswkH5rkThbVP7sMKUUCmgGrr9D7hqLqgbJkm1XxuwELb47Yh"
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
