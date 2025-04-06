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
    "2hR54PqSom1PJpGBL6csPYpVyEysCBPMXNJxKLU2vWoAzT4mdYM1G4eZsKHWfoPyUVDfvSooR9BFHNNx2zKJEkyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCtXwhwwnJskhiAuB69Yr7DNFEafTcDoMEH7tNgKReuxcFd1kuxHwoPC5TuS3ogWo35dAQis6YNbxYPAhkWaomX",
  "key1": "5YDPhPb9wp8LSxiZ9WwBFHqj2pWcZRhJb1A33gkkSi618D3svX3tYUZsmmcycVquzQTJawVax9VH5TBUeAazDPep",
  "key2": "4VvWmTpZ5u7HLZbsuoPALiSM73BBKHZjjZkG2F5kS8MqmbWw9WhphtVEB65mDf5BWdPRePFJFBHUPSjWhidY9TFr",
  "key3": "238MmHbaD5EYtvEnpFT8KTCXgAEtEpSn9c86gYaedDZVUtQX4jMTvyFCJnQziBwZo4KqmBaRLN9C9sdC5ufPtgch",
  "key4": "2PdzkWw9mtURusQCTCm53HVsVQFut6qNVcVKdBUedbV1mRfjZhKgSx59t1MvfGFiJt1XyW9oYbDm3fAy4V1FaoBF",
  "key5": "XZ4mn5RnkopQxS5jeznz2ZAfPdU69a4uWmi2xcvSR2xL8zeU1TbhMjbYsE93LBR1J9R3mBobagbZzcSuPf9aA3M",
  "key6": "31AJPMZD4ogZZ8944FdFu18bppUePzUmfFeqmN3Hcp2wBDv5EqKEsbDdKnCDjUF6GSGyeuAXgP61krgSZZiM7gcz",
  "key7": "5cB61RvqrWdCQnVESkGZeFaB6h6BUuKcwcCJUAv8Ws4ioBLXNqoDJ25pKGbYsC5JJbf17Ui9diH5EufnYzP87z84",
  "key8": "5WgqGvZfm36i3nXHV171X6GhM4YiCsEeQP4heUxaf6L6q1GnDDkPuT1GwtV939DRc11X97pEGzhR5mbEzwjirzYG",
  "key9": "64y7vFs7JbQoYasuYVi9AS2vcvLv2TRaoCSJixxNQFk7yFbF5znRCzdX5PG9Dd3udUgGpXLgAmpKFmvLKEPi3LZt",
  "key10": "5ni1HhK8fRjMGgwinf4P15P6aYF3UP3mjZwVjfjSZRES8k1ADMbey23goYzvPDW91UQixPk3Hhx5wheZ6nk72AGG",
  "key11": "icuXUq6pUHfZJHobBuf9sCCYXTrkhmFEPxRYiREGxktgAjgnoG7J2MCp7LBC1PWJJb6inhRnftgXpEmBFvxGENw",
  "key12": "t3M7LwJn2NscTe3R1cSbfuzAMjUmq7VSPqrtLaigRNo3JtDu1nABAPM7sUjuozfNPyxbab4Px6CzsVNDCteYN9R",
  "key13": "58rXsaqdQyGaRfqW65cvCpYZJNYSxJDKm6LDpVsb999rxCxUBcZE798K58sGJgq163hbpWgTbFdzg9YFjAfPNyZf",
  "key14": "5QqtKZMFPEbNFHiSdeysDpuk22N3c467sPG8BR9wFCz7gqAZjw7y9ewu7CHhhRU4JbtAc47ikDw4oXCZ6SKGCjXg",
  "key15": "5D91wrFYxUnTkhnBz1y1CB8i3ue1NUrwH43q5FEyNQ7hmpFBoTf4kxZdfcbdoJ1KLTdDtPWrnUKJFSXRY47ho3ab",
  "key16": "2PknoRPZfd177nctpiv9W6oTX4UqfuiWkFWQyj9XcRM8j1a627RC76jzyYmD7kdzeyWvoA2TxAE8oS8qnWxjZtpM",
  "key17": "5U3ysSPe6UFEMMx47mBvPhqDDAtEVdiHtNjFwELSfQfqNMRVCgTDK3eTt7PWzHPrdgaF5k5d6V3rCijuBK95Giug",
  "key18": "5Tqv7tRVnbYPkgeBN5FQr2ok2HN4hATcuJfNhpNAkC3HDtdkmgVjwi8DQWUgFQQkCqfLPA4ZTdArUSF8trNFZJar",
  "key19": "32EfeELps8JaqTQRkJDcdtR3pxpwxFbtTvvxQxtQvVWRSEkdMvwvEbbjsAwn7Ssneo3RLDXKDFFRziRVahAnhhuG",
  "key20": "2PXN5o6ysm7QBdFCbSN1AKfHyFit36G8izEPiRrMw7CpTBKkguHtV9SbQQ449xX7A91SEefx5aDDbMndi6CRj7JJ",
  "key21": "2vevCqURophXdShXGT7ZkekeesdbbkfaBHamT2yWa8QcN3DwvKsUeSR7dNHf8ysr1bfnWpdX3Aj58y2iB6NzDJ6V",
  "key22": "3aHEGga7j1JJM3TfNxqJUUQR4SxWWcPt4JtBkjkHG3dT6ehwHBvzs4o1jYKF893BbcSy21eYb7FTtKWpWVhsjGjG",
  "key23": "4QUhM3U3mCifKadQn5KQM9KY9DQbF2roHwH7iRjjP7ZzLJgX9cpHq8aQsU8mPt8Y9wQWXRcxs6mofUdQM1dM5MtX",
  "key24": "4R2fnhfS8sYy5fRg3ipeB6Pra6wkfAEq7e1GWKciNcxGkXSiT3he73t7keAJBsRcFJFvUvGHoKQmH8BbhXqpGdYM",
  "key25": "2YVSXsEMTqtfvHJaEknRg8qqnBkBv5XvxhDvV5kJyiCV4euwcSngdHaYJ3o4bTwdM6ZQWi6jc2NyJAyV2zTQBKxS",
  "key26": "5ayuNc4CvNVpZwmnXcHNLYow7aETF8gMTs8dwMzQf2SnG8VzhH9sW7PmdJYMNkc6dpbVC4QYSMbJbUYkV8LiTg8J",
  "key27": "2wo699j8fcL3SMQkeux2YPBCicNDABwJw2rkUV5ynArmKqdLvkoL6axPJwzVymJn1Lqi9ZJrsq4zH4pmEoevDCfj",
  "key28": "3wjGR6cVqkqowwtSLZYvwaSQCF66p26SNiYN5EjQd1Wofe2vEyj8jvVK1himDfWMRKRwcz3mqKgjsobfCSr8mtSX",
  "key29": "3ozgzCLAmsah2KwWyH3CXSLX3eVaGYfUu3Zuc9tjs2VF53w35qWCBrg7ee4KBpfLAHDDTwysfMM7Wk4yGzjGoV19",
  "key30": "pcvWWgWRfPB9TZHVapVwTTAb7zzfxTGWVB9fnuKKhDjotjn1eZaNqv7fsTxmMqpGop3KHXBQXpNakjGRXVetEMw",
  "key31": "2UsswRZRzKgnCGCJ1oSrMTNw5ip1gLZ2n3z4LcmdzMcsyYhYshpjzgo8LymHeaXthkv389izRoVi8KRfjJarbqUP",
  "key32": "5zMGP8EjE4XxmqJcEd5R2K8obZek8GCPsDrdusAFSppasxuFLAXeMfLY5xDFDgpeqUcnjAvm19U7V2RGkA2gMnto",
  "key33": "3Y13Rm8Q2wbZro3fc92pUexoA95V9LKmtRPcZzz87bS8xsEaSr9S4vxogXhrzeYigihGuP15j3Lwk2MXThnzakhr",
  "key34": "4YKytMFcNhzXB3sUDzcxbhbNVKoKJ7ZNk1bWK5nTj23GpBvYemahULXy4q1fB9HrfJ2KotwDDor79k5pP1nDSdDY",
  "key35": "4fpqy2C9UNAAmtM4j4STt5sUHAe794gstHsHpFqJJnHcqWrT87aaV8CFUafvaWPrbMVpsnMD3HRLTmz1xBbLxiVL",
  "key36": "2ouuV8PVqWjkPkMx9fTzZ2mS7u7mcArNdwWU9EvW5JhZeZXqbtHRXA7Ev57wFduQA5uwHZQ23mvGWABqnHTSQKX1",
  "key37": "4RM5XJvcQ9hYXAwW6ZJjLcDkute2q6GSYwMbjKjb7DBmdaTUvBUmWzUbSKpmizJXuftmwQUbeirspytJP2kgSpAu",
  "key38": "VXdLmrss5g9VgCzKNbbdUxPShXnW8kcbf9FB2wbrf9ga3Ksa1rbWG2UwzNDtZsp7SEAV3P5wQpEdc5xXVDmUE9a",
  "key39": "3hgMT28PdgMoyiPnEKhX7qSU2MGdDdJqvEGqL5CdtsFn5SpHsWZBSKGXGGnjBStEHZMBu9XdFdThyByFxaYiPUqm",
  "key40": "5S9JXLGEeF6ctKbYnYjWRwUgfKpXFFVJE42eFqSPkt31brvd9MrjxnndwEnGxssQJK4skG1XnrvFAJRJrijZ3vct",
  "key41": "4Nmw8zCvgHzVBJjCZ5XuDt9ciCT6vHECPmcsSNSpE2GekeqXKVGEsZfCH2Bpt9bKmiGMoM5S8avhrLca6rpxKH87",
  "key42": "4JKGn5t88ckShjnpLhKRP7Lye2esuffpnNi31PNxeGS7wkrGabUBbzbNG9QJshH26Wb4opjsoHBPGUyzRqPRhwvR",
  "key43": "C5N3yTfGtwZES1RNazuN8Cut1AUequpcSR3F41zcjXGbPzDYp9kVMKa6WzhQs7MxBMPiRbhKb5AnaiZyoPchLh8"
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
