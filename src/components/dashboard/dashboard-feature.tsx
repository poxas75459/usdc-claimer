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
    "3rJVVPpCYbWDMA2exC4ZDC2hUjnvytcquBL9ctxoqqtjp2NrRQX8HZR6MCTeaPWSGeKrmGvzjE7J9kzE4mj9ikPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vyxgz9nrTMDsCTHeQpmyA24YM2TbyEKAh3h8LVsrh3hCoBwtJkrsuvuwZ6BbmfhKAYH4kLxvSg13JRNagQi8Q1r",
  "key1": "3ZZtQh51avWg3SHMBaDgPfc7n4oiJdXRC62RH2tk4mWnDoz3vN472RwF3t6a9h82jsCh4enfGGwEbAQMM5StczAG",
  "key2": "5Xu66zo4MniefXLd7zGzks9uEKbkqZPQFqhn6XiZsLt5fYNrhAwuU3zFDD8RHYCkxaGjgWDiRk4hc4L9PPN22wHf",
  "key3": "CrnMV4CL2exJjE3whKdbhiCbN6GcnTHu7xVTBW8LKNXzHzpZ7VZBLExz9wDJPvrMPSP3QVjm3bm5ZNrYETi74gP",
  "key4": "2BUniDkevh6syNrCqB6YWsTnE2o7ZgLbNJhN3rip3gAJd98CqTzZnAs8fonVU4Xc8dKtnQpH8vpYLyENAVHKAWNA",
  "key5": "pSEFATinXmy9RAwwFk7LeNhSH11Jf1JvKPXKMop4WGzLLtcNG4gbRKpwn7EmFJyRM5Bbe6Gy7Lcyxh3KHhHr16s",
  "key6": "4PdYyabAWL1eXRUet3zP6ExNFPQQDUv2jEbZFbfND4DdV1GzcCqbnZrTEgLProWJNbB1fxmmj2VKg46we5LU3ffd",
  "key7": "43PZKRJC7AsgMxZo1nXvpp7DFCFe1HaVFdJTznn5wE3UJANVdvXaXfcPhwWTHXkRqQQ6JZXriYKKNBakm1V6CWNP",
  "key8": "32yeqQDKNwA4ZWddu5ArHRMwAw83VCNMZhDfyb9Dokte6VqMRT8ksyAMUwLD4aFMKNupYjCmrT9sGCkuSZf3Dy6Q",
  "key9": "2d2A7F25Nh9TVGL4gkCRQFSQ5CvXXZogxo3NPi2k1aodmB2usx9y1PRFukNUn7m7iV8YhwGLvoCibBDbpsRW1D9k",
  "key10": "2K62TXzhJsAep2sWkoDkuzcYUuvx6SneSHLjndddzEtg5J313JXzkuxg45grRf11YLCz4jS8K8ueGZWCSMw17SRX",
  "key11": "5aXtZrx9CB4vv8cqgekM8nDWHkxnd4hgGrvk8TYFg3TxR9zMM6Yv3bxmbN12LuZCp6MJcSAqkZZjdDMNtJcvyJu9",
  "key12": "3hEfKzqjWenn4hPQxzpmYbnsoPA3GHJvVvYx5ujRwAGE7s4LGoV168kbx7BdYxo8P9fiHn7mEt18AZsmyZi1JVLz",
  "key13": "2GMbUxPKB6W9BEuV9zyBkQWq98Hs9oqQKQB1Xsa8QB6FNiNkd71HrTArYGXA4fBtQCTsH7VAbiM55yVzPZrPADu1",
  "key14": "4xzCQKseETwXMVomz7zcMH4cTQbTnMcB8awyX6RYpVpLopN3p4mrU5mE579Eku6zKsUD3eUmdRp2GuyeqDiMebSK",
  "key15": "5BBHQSi5B9Q3fr7oHSpe8KJ9dDFwiAoUAR16EdoWBPcZs9YsiMdbUQRosp5JAT6LV1hJPfFvkFKeguQnciqtm3ju",
  "key16": "2T4KGEx4sX4wnTVdGEH1NNhHZhSh738RJnCp1Azn2AGHZPwwZb7hkGm1PJhAg53Lte3phWaoB1JdHz1gJACYmrDx",
  "key17": "4mAd6w1Z9ei2JbXrE2FqjKcAsYHtWt3EFk7b8Lrm3PXiGKftMicNwfYsVChrsBCzQBhKiTSgJKaxK8aeEGXDLpJC",
  "key18": "3fiNHesdbbu7UtAC5yPFcCvF99QReGTf8m6bZRGwbBsGwsxYFnvMAPRtX6nt2NXPTvCffUWW4z4pzqTjWDqfBpSG",
  "key19": "3BaaUMsFL7wnSkfBLUBDcbftcLdvkS8btMXKQCyvHoXiHabs7zLzxdYp4AidDjddwnixPFDeoS4MY7nB4Nrpgy3r",
  "key20": "35RwEw2Hs8PTiHENgxVFMLHXP3UqsLAf92yWLNf8dCEdEqN1Xy1pshmaQfHFctbTa9Gn8kJsxdSgB2BWtrswSuB",
  "key21": "4oPrR9eegzzrCpFJeeexXVzeGuLg95SQYt7GHJYxQY3URBz6XZQLupH7yA4aDv2AT3xkEDSAYmnhX1Fm4LZ8jRA6",
  "key22": "2CR4bh3GKRFQS2xuX8UnfRFKdtwLJ7sbScN7B1xgzjef1Uq7ApE5p2gSxaDUooD2P2739BgYB4qgDTrBpfyFDiYo",
  "key23": "3GPq42tFTUVRVchRar164qQYYkNuP6cXr4r59wQPu93sedkiSQykMbwdRGr38VF7u5Bp4d5mQdSc8tAbER7XDMVu",
  "key24": "A5oWz1f6jpCHedjDRYHtr2iVfC6h4eSPyBW1CwkRLJCPsoo3koigt3Xx2r2QBjkKYu325JjS8HVs99AA1iwpV7h",
  "key25": "4hXCnhLMeiWcbmKAJZtQvVur97KBGsftTPXkUpU9atvpwd5ZWAn2wJfWLqmTYYxTKyM1NF7RuJobLfNC2XfZGVTW",
  "key26": "4p75AWf4MGnyaY3owh2h4zyDPmkhPUrKcsBi4hL1733s3TP1Qz2PEfDrFRVJrfJB6m7xVoyGaUnaau5UpMWaT1LU",
  "key27": "5ha8xiULFcYhmvxGr3N7RJ3kPhd3G5GYkubK8UuxQ6r7tNRg4mgmNjKnLTeygSiST1A7RdbPyudpzBJQD7bCBkH5",
  "key28": "5C74qFd3kDMW9XJvbGm2UDuNCSUUjvewdVNtQizVWjRMNBJZgkjZvbjC2sKnj3pnJMe55sk1ab9FiKLqdKjqbK6p",
  "key29": "4ztWkGZF9r3AcA4FbkvHU9jbMz4MKwJ2TUWDrCw46oZJGqSJcwxiqjzFygTTFm9H9YCpSSJjhirfPFMcmnLWRv4G",
  "key30": "5sEc87uRjTuVXe7Kk5nAoM4j55AXZVbXHmSfzKj6AauZdUGxiHfRmAi3yfb859eJBoS6ZfYcg3ZggZmQG7WsXkvf",
  "key31": "23ZGxmmskCyjJMS5qCen8RNpPVr2je2kUvDBJxRamWv2GB9GixMezjvDRHh1qhkSUhgTmPB77Ty5mDa6CrwMVvbv",
  "key32": "3MDnU4W6PVEvi7qqwi1PNsHi1kLbZUEJMTKgqHcMbXhLBJyKF8iK8MgRrthggwioqCS3zkkiejuxKqgWkyFfacf6",
  "key33": "5tkbXC6StZpAPnyv6HiDtYnXJgVGhVQtwHdN8AX3wASxajnULMTFmMJRgp7UXDFTBNb4iZxB1eNQxK7jbhqiV6vV",
  "key34": "4k4rBBMfXYStCZPjmEWifoVsfM28HFr269Nxj9oGympgTyrDJ9UCzfwwdwTDpTmgsHMVk1MjWkfJrFBrJhmgKvFu",
  "key35": "5bgv8gphGerJdkzQ1ebN9mhMQxcVveUm62NrBRUeJBJkKpFtFa8EJgDm4FgX71wXXnY6zLgRz4QPR6ex6f9G4rxR"
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
