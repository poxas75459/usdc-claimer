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
    "2vhgV7SFTBJaxdPQGbqPGgxqc1oju3reieCS8Pw8rm3o4egdvNqbXT9Y4agpRUzKvtXn919w7mJrMnPg4ioukoSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N18EZWjshcnmbSrb79ZYqbSCT7M1LV51NtdB1AxUFFLWYmB1DVrfnNLxVnpWe6j9HPcr78zquSmaAz27SzhzYGq",
  "key1": "4JGF4QCMJM4d3S9eW17RKZJCJdwvsMCJwnE2coXg5PayyknuTd183SGfM6myP7zbjJtagydNXjJPPAxBAmoYBd5j",
  "key2": "2GCSwEZPF8jgLPhxnUcMHfMV7dtpuzvPW9cEGVBF45q1Q36kiZyLBvfvgSCGQGJEf5fpXaxEneKe9XCA6r9twQtR",
  "key3": "3FWP1kfrWCotshpDCyWh8o81uJx59qFbKaBCW28oyL1cbfUeU51NaxR8ecMtfoqXaXVxJ7NCrNSwP9nZ2fsSQVhq",
  "key4": "2u2w3P28KeRfvtvZFriui9usojsd3vMawxNDPCvDb4dKJ1DH3uio2XPjsN58VgiVBRKq4ZsptpCPWZtcL9bwHfG6",
  "key5": "5jQvs4jxsVbP9zE2ho5Vy9ApL5BDEiK6N7KCbr1DEC7AVjqqcttJxvoPVzSydCkCiL4KTAtFWtBKR9YrGygcvLa",
  "key6": "4GctB7QAXowg6FMXExXsifhQApoxSKXJgP2t4JRnLeoqFVomjteZsoBLQjhxWRxp1Z2yzXGcyh85MvfZdMGxECRq",
  "key7": "4SNQyZZz8TtBMLYrduHYkuRS9DHpmjjfqmPbmns7pioRmuZj5jBjtxDzZraRiPSgsNRssLPFgCkqj5ah8wvjJtLn",
  "key8": "4u5HPm8WmaGom1araHhNpuXGwnj9soF9N6ejzqJbsdUdyfoeCQoTCNo2SddBPuKY3mpEoe7Ex1KnWZUEhVCudjnX",
  "key9": "3QJPCgvsJop4JvQgWBVkTohveuJqxRmvgS1proXdodSWnGu5EdKaRw2tFf1VLbq3tjs2TA1ya1VStkhVEFmasCGa",
  "key10": "3qzKBmVoGxYUa2ZYSv75F8Lu7rBpDzrPCTY45BpnE7XzccncGQdAHvB2gam74StQ6zvqAgQXZ2yENw1bmKMxC4vJ",
  "key11": "66B9TddydCALYwLosW1x8S99Ltnzz4XuJYKqgXt4GGQjUBDD2khkFWLeRF73herB1dgEUQhDkrgDy2DWvPAmyUn2",
  "key12": "4RU52ug3xZpLE4McCn2VUeRLznr3dneeVNqfGprt1Zy7TGyVtuijCsh6WBcWAF9vigMw96Xjg7qijk7NWjmDoFdc",
  "key13": "5j3ZQBChd9TYddCrdpG6iv95eDSh3TxtbW5ujRvXcpoKRzgqCxLg9C16yHtVuSwBpv8ffSoTE5VA7E7bQMD3WwWZ",
  "key14": "EJnJQvauQ8afELjGvn9z3XXYenLt98DtA1oXdBDPwEkTVe3o4ciw8oMDCKctCpJRdhAArV6ZEBaQAEzKB5Q9Rsy",
  "key15": "3Bx2gbdy6x2TDMJJZexgu8SZAgSRmGDGXmvHhHzfTnyYtpDU79Kyrj73uMuPcKkQipTMqNofH5gEzM3D223vf7ah",
  "key16": "27VeBYXJaH3A7Cq1vd55fgiN5kUWtsnvjvjb8CiUTeUDXzmJThxWEiTkg3xDQ3X5kGZqaECNitZab4ovtxTaWW6p",
  "key17": "5eVtBM9fRfnyHfynMMBtGXG2ri8cpHxQuzsStLVZkM9S6ZH3gSLmASRX1TnR8GoE59kbtbq1k32Y7V987ziVzNUD",
  "key18": "4TzNwUpQDxPUgEgd1epPA2GwWUwA8c3ZJWdm5oYNSkDV2ufjRiNdc8Ue7jtJbA9JgQzSNVxwYWJT53YEcmqBrWCo",
  "key19": "2rcYeeo8GtPwFuj76uNi9H6vBAPaFDMAYJXYiwRXZCjhLAebmZdTzywhhc3fumL9WjWsT4FEmTt98khWgfHQBQ1v",
  "key20": "ccqSMcQHgjT3pae927r2P7RryaBWXzBejQ7tvLx7MhEKsV4rnqRWWytFtKEBkmb8L83eTC76nCpBK7gtNE2J5oA",
  "key21": "4bpDVBTPSJVuXGaqdHf4w41VYkNrhK52RyLJWiwz5Y3iv97wpSym3ffQMn7UG1kTqewMpbMPgQZYumDA6ADeoWJo",
  "key22": "35XKvWMmqpvaE6LnZxFXc8h7f5ohqc4NAE8gYv2fUD7zrMkkctTFnP3xAonSLeG3ATkDS5PjGfRnLmWMT691PmNZ",
  "key23": "4hbELWUMav72YGDdPRaCUC7aYaNoiaVGoAqYJyb97iDcC4jndotBDhFd7JHcy8Vn5PMUDBDBcwBkUgw7LeqQGSPP",
  "key24": "2KcTGpy2eHqUATuMdi5fyFaoi6zyXKRofz1DoP9HusCtWpfDovphs7iMZvKYYSvV1JBUMu3EvivWX49kMezT9VbA",
  "key25": "4BynnkAsafqhVoTGifmLzTa4e1pFpfsMEq7UVHyichcuFYFYmC64LqngmKfyzz4zNhyyrsu2MvYp3xfg5EdGdWre",
  "key26": "5QUVzPqB1VFCmxrDqwFttDZKUeP2VodsL7WgKgKTwkrqFMvFwfiZ83Pne7VRosnLAQVr2ahPRFqPY7iYLKELd4YF",
  "key27": "2cpp3KXPei2jYjUrtgTKqnxcfoVxEm1Pbv8JB82mBmUErZ4s7oSKDN3wunb8WJwPbKmjMJeLcQkP8TXHUD4rRX5R",
  "key28": "2d3nE3NMVaVCD3MtbEZnGsjDHTmE8Z7EJFiiu82NEYmGQr1TSg9AtgKJGy9oQPEn1vY3fWJVv17p8tfrTbZg8HAw"
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
