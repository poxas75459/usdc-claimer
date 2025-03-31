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
    "2ek9gtu5Tmzh4KjYyDTaZvsgWX5km96jgFy3r8PePQzmQ25D4nvtuyXyc8xdHmsdFVhW2ndNJZa3BwEXxysyLGy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9dv5V8jdzQTmXGKtQ245F6RK1hhftUsiMzZvGkHPz2jGTwnTRVVmURr75JkkxEKxrSCjPeE4QbQMV1aVnvDVLT",
  "key1": "2fBTkP7kcCxV438pXuNz41nABPaMHCdojH8VfK7exhPAvhhRVzWM9ekkcnQzGtWGUmZ495JG65DjnFvLNPANtjWJ",
  "key2": "5ikmrVUfAZEC54DbGCNGr1A89dtPCPCEaBLYf3oSCCeeTDbRKyLjsqt5WxVdXZ9vuBFBY4C2oXrcaupE1Ry2SC5a",
  "key3": "5tmZ7BPdakBSBYagrpZ5xWqYEvnEFrfsB1XAM1koUerMM31YCc9XsufLLdwQugbu4SEM3LoNhD9gCFbvDnYJcutT",
  "key4": "4DxQ5Cpi9J1VyEwrNADhddh1QhZk5tjw59WpCLPqr793AaSBrmE9imDRQ4xsn5PKst7hjDSWXeHfQ3v8qfgZSWfQ",
  "key5": "mHZqi6pSJuKUUXocpn9b2GMunf5DUfUCba9WtTZxaAvXcozExMsXYGY3Y4jQQKPGVWrB8JsPszybRnYiwK1NA8s",
  "key6": "28Wbt7atNZWaVuzzWwj1DkvJbCKVPQ3g37p1fssqSrrmc4WGzUWb3hjF5syB2qMpaAzUnroPfrBzPPaGbJA9nJsr",
  "key7": "515wi77sq6tA6ek2c7BfM93F3LbbT1PaF7wrVXR3ygLBKW2GJRTMVfSYmHMZDL61MYaYs2Pmn676SqTodZcPrjm7",
  "key8": "3cfqS6MUExQEqVgAJr5dpHkD9k1qA9QBmpryNk7VZBh2ojtUtVvw8LBS8Gce3fjQcbHE7geKHBEHzQgzRwdkxh8G",
  "key9": "YTZCaPPhXQxpxoaJDYpvpAX1hLWL8PwoASMPG6nHLW4szHH1fC2vN1YD6JoRceRffibSzf7ZJzWGSzMtTDrGE85",
  "key10": "56zZy3yCqCc3WmfuVy4dvaNz3sPASZFohTS9VHzmsEx4wWd5YdkKP33YiFTsTbjVEMLojTwrDc4sthiqqhcvdDof",
  "key11": "JuJF9FJdkRFTrsP8B9Tv8En25G1Y5nU5rckjvY71c4AdzuoP5dfnvxUJa9qZfnpSP4YKcJBuY4JEGqac2Ayj74p",
  "key12": "2vWvwgwepxkV9hU255TXx3WLNmjBmB1LwfXq9ujMRG8hvw6JpAcN2VNV4HmmxWxvQpmQTZDwNjaHpiJKgraZzz3x",
  "key13": "24hVxQsgBkbHxCvL7KZqU6wKvFzKnGSDRnjS5pDK4gQACzdLCLEaNzudpYgFDRtfHUFgWkD7PuNxA67caVdvFhMm",
  "key14": "33fFMcU9WmQqZJN1fhaJMaHYFR5v6suKHCfd1MDzqdFjJDQuYHFwvYUMhUA8y4eoevpfNFe7iGksoSWGcHmT68Pg",
  "key15": "44dvG5uNhrMwr1LHKPbjwXaH9d8utc2P2Xf1EC7rNgFkT25YeKjF5SavJ4Y7zZ2E47sfTrMr19nykwGQD5ZV44R4",
  "key16": "4cgnToV9Jyyam7WBbY8mPoBCBVb8jxrFUYVDbjqw6V4uJkruPpYvyCqGwJEBZ9cFcw2Xm7HdMNpSNWcJs7S8PXaH",
  "key17": "aua92Ed16RuEGTtZNzxu3rKrmSBz7Ff5Nhc41rsk8thsmT5g2sHhYQzMiREhFeCYExkk6GfteSq1MHMjGFjzAS7",
  "key18": "2LHHzKVSEGQDpg6LqgQUczUN1JgFQxrYkPGwpPXT2Y8PXyNJCBFZRHqz2GEcfhR9gKHLP53sJYT7R9mBZQTN78He",
  "key19": "5fRiQhuUPVRV7hcEPKWHLZLnfeFpSWWrpkMs7e5WE83reNPDzSp1NCv3Vqi3kJPbzxuz4ZtYDjCiu3PUYWrvPSj8",
  "key20": "2dmJ8G7Wx3x8gU2CBqauEpKHnFvVKaew7PMizGkhm4iQYQW8TJNfteWEnNjRj4wFfBdmCwrvn7BKxe2PLTBqQnEM",
  "key21": "5EPXaqSRpZr8tjEVo7Ps4fZfNhMycm9xvs7S7WZg49AiUkKbTU6CxbrytwBAzLZ2Tu4pT1QMfiXwaM7sLVw651VW",
  "key22": "5kAz3NDyD4sYws6RLtu7KKda9KRpAuDPaDfCPbhARgtqiBK2j1TrhrUqf1g5T2B1gkn3369dwVDbPdgWTBQ5rh26",
  "key23": "5VPDuRkbL723acAA8fCnwQi8ShzZX85hwAuHrAfuK4Ec37Qyrz2kTFjAWNN7fPRVLCH9vUzXA3mVNtmWjxKCc5jU",
  "key24": "62SEEBdyPFSxSC3o2okjYBLuWufp96rkXS7kmks5kUjzob5i8CVyCvSognwD7mgvmoWHdpxmADGgBu9zUv4FE1SH",
  "key25": "3gtWNTr2TmwjiqaqdTaJ5BarfY8FgYrQWBsxMJMLGsNRMgN7tC6guY9h1RpJSt8vUBh5bwc3koNJ6H3LNn3f6Nq2",
  "key26": "5hdNyuKbnnTaTgWYn9ExH6ReL5b7KdFLyCe31ugeQ85T9Y5qqYEoERu7hxvBDhQRz61RUGkEsAtZjx4dTQsv2CYw",
  "key27": "39kDTKgXzz6APjWFTmDgLu7gUYXM8sF4bg58gCWQQUnqgz6dBFcQfsXTnq6bpfT9LVv71adXXxZnvqey5aTyxQ8W",
  "key28": "56j3mqvY1E6PDqjWptyaRhguNLuQXLPzBACzDG1E71UHNFkeDrpWEL14tCPMBJUyUYm5rq1HjX8DJDkXYA8dcij6",
  "key29": "41Bax9drJ2gcfYqLSW1Ze3NmKdGiDTej7w3gSJekXgK7g3EEaydb6dCRZ2MHhp9SMBXRDovZkvEnDnb5goWZBvrv",
  "key30": "x7imnmpVz9Stfq6qaazetXtbF2sSMMzxAucNMbVxBTQwmNpkq4GzERVKyb2sTpveNzeKSxX2xsxN3LhdVcaqEQL",
  "key31": "2UytuNh2ftVbFWooUhaPQ62y7qD1u5FmrdQuGGjMkx9bPqUwQ4WxsZqsGD2Ym8fv4Taeiv68gDjAqPt7gY4Ao2mS",
  "key32": "5d5vSYpwEtBJ8zQkqurr7drfUVHWiq6t5rbZF9pA3EAcaYj9ufUiGuDs78oWHNyLBXu12Dyvi2nN4CXM315KtCvA",
  "key33": "2pSbSszvaaEbknGPLUCDkEJeiigiE4ujLyMzSwa21Cifw6yJcfn5eDWgYovMs8XBGd9TD5A4tw3xn7hpeQTKR7Xj",
  "key34": "4GzRbHM7fy2w76cNR4fDjJ5Qa4WB9UrPpnYd8vwHGYHZbjE7zGjYHr2gbWHMRHxsaTYA7gwPjjFZuyoGG9EMgoZT",
  "key35": "5F7pbga9v2ZRT79Nj7PdPZof4r1dy3DpovwvEmS68tyBGqhL1KSdPRHDspxrhKahvegKCtXETCxy7hDS9wr48VmV",
  "key36": "5xD3pne3wnAsWhc6GRi9Jy5ZkP7tvXVXyisfmYxpJrW65mdMrJJaYbpJUQt2oY4rjNXkrMXWuzEAKEXGwhN3pKFK",
  "key37": "tPTMS9moa2pAvo1aWy1eeFi6tCRt92ZfFgF6CFNnYar2gjgKYc2jA93n4VHjmpe2RUTSxMccqpPVUqZN3DJ8TbA",
  "key38": "3SFiaz8SCiA6qFB7wwsZTrAWK17KH9eeAkfJYr9YXVZ9YfCYN1RT6fqYFB4P9c9qZuKce8cXLPQoonLRytNsS6CJ",
  "key39": "2GDpU2q3soD4C3eZUFWaZVZMhuhwwbXaV6QP59pJJsYjdXVHarrhyStH9efLyqKsZa4YpHnNU8VvUe94PzNhxFQp",
  "key40": "4PeM7fE6hR4viQMhGF6udTrVUxd86kK8tDMXkJpxB2yvTeeXkaMA3CuDUYBqRwocGqQQWzBBWdcAx3fvHRLvekUJ",
  "key41": "5AfN4VHTM1PRMZc3ZzgyM7Y3K7qFwR27LJtFjjSNUjpxSDVUkz5WTvDE3JHxo2J33zjYtKFPkbJp9KyWNEHzxrp9"
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
