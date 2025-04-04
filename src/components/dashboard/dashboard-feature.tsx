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
    "4GJrPfvcfNbtHbbW1KfpLXQdXuXZLCVjVYYSSpjo43JMqDt6Ho3p1b6DUmYSQ8KxG5jFtaBWPozoTmwvSzQQn21s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gj9YyZfqs7iktaLhH6Ukbyf4NwdV3MQGkXkUA82HaUXidmdVSw4GFzpxNsKMPtodiSeY6UvPZCys4c9uqMub9Ve",
  "key1": "2DzjCuUDVCJ5MRoaPHvritXZEJ5i2HfRZJxjmeMPC2b3d6CDy5az4Wt1Sepy1y6u4HbSyhaMCoF4FGKJRWRqRgv9",
  "key2": "5xNZ558ERGP59KxLwUsidMojDaTbTPfFau68dvyowHNtbaBbxMZ3akqJEyG2KryWGj241rQLS9PBSAoCecbHWaW",
  "key3": "3KA7cyStfiohS7xjU2DJYujByZjHcV97TiahDygtF2F6nRa1QCtjrGotr4YcPh77WjXKtQ6enRiKkdJUsikhMqKS",
  "key4": "hLY9HQHaAZHoGn2dx9umtTCWNyiSPr1N3Yb3PFVgobsUXn4S6A7dYwjWxzweNp9XUfRDw1BvjYwunfLVF4G2vZM",
  "key5": "2GqPPvWfXFuGFZWfx4oKsPBChgKH4TDfkswBwmqhtRkbqJHWCWxUoVxCtZwHHms1mnfyj5dEdkiqQ8YPXiATn7yf",
  "key6": "4qBXdxq6tykueXFEPYdpQSVJYxJCkmRY1Wy5BdXmptaqMq5i7ZpbXZzLEa8hmS8JyQaj7Fm7nvBJTJcF4EfuGo6P",
  "key7": "4cWjsXSzDWpauVxt9CDMCrnMyTmtnBnpgYeKV7J9soL2Fv6RUgeCavpukxaaQRcpGYdh6idbhhMbaU7wERJSRVB7",
  "key8": "3U97nWasHEgcviTpUDCb9YfiBkTmhGk8Hh5STUx2JTLATYgg7itGQGK5CUK9ePVcWCDzf4ZrAgpnj6e34b2TLQfK",
  "key9": "5fo2ep3Nn88XMTYWASf3tGvj3tXj2J51MAG5Zm8X1rtffBMEEViuM9Th6UhGhBHCPUYNK7hYQyLdN2LRr9Afqrzd",
  "key10": "4JTcK4ybkJPVP59SwiHzQUbRe7q9k47Fy7mWMGsaCXnH8dBDrvR6HeB3QZmuhm6xzPd8sKUtKs27Kt2AxaCLgqiw",
  "key11": "JC7gAxxqVsztPgk4xiEKDEv44xjLYHwFokAyQ1YoyJjC3MhdPgZvM8RVyzEYnWQbUMTbw2ZjidLu1ix3FY3jXwc",
  "key12": "3GxBJ4W4YBEvgf84xjr9H2CnTko6dgHgu7GvUzzLPTnQmxxL5jQKbnq9iFgNRyrYdPdnLgqLQ6wo5tooc15vezHf",
  "key13": "4wAfGhJpJNPHHQ1JB2CiRt1xa7go9ueMGEBDeczJw1ArodMyYhFzvkpSvVHjFXagFzrxm8ucpr9jNJwJ5DQooozN",
  "key14": "2tJ27NDQbXjzCKLDThwxCwG1bXnnxDKk3UrCNskkVu6TRnE1qEe2AqrgRwt88Q1j6SzenTmuxDmr7EzFyTnjxwLC",
  "key15": "2DufQaLmDgPCsVtNus5P2EoaBDNsJ9nzGfjEsyhhF5R79QX9T5UmYVxgdzgbPGvGgvkph1FLDG3Y57VKd6cAt8TP",
  "key16": "49cguZ8oKeemFDePEzJa3EzpemK28ezsmvgKDCQSY1AwEmKb5zoiuNoUMABGiJbQnzCXgxE4NezAejRgJiFxqyJf",
  "key17": "3Fcz7csJd6Yum4Xcty1bMxv57Udg2nxfngBYKW2fKbmSGNygUP58eQVq6vdk6wSx9Au5b35p6Z6SaYzEUpvSFtSR",
  "key18": "4un7SDVcM6HaMvLJpeQJYQYm2TURRn9uZ5wVgDSCVdbPrRqKeJzwBnF4Ctii9MocAfibgRKSFTGm2dD8A8s4bmC9",
  "key19": "4tmM34XoBiWHfPKM7jFDzhj1BLc22zaoLseiEFzKFMnsmDDR8zZLMeasB7Xfj78TRYr511sbJTdz25mujoiCtFVF",
  "key20": "3jyHQv7mgSyrpe9VUmtpS3UXrdsyMPDLJzYEpqVScFHyyULeQqMwVpf1q85GJjZfuRdpjV8GkMW4rwzxs96nwxMo",
  "key21": "6J4Z6LrkPAA8N5UnvFzcQfSgsjYt179zJBTNtRQdTwgxPTxMBrS1FppCTuD3qMBaxQeBqewVaKoqZsuDef2rUfk",
  "key22": "2Mzw5cYhcvv1uVHxksoUVKEgH9REy2PzBsp2F2CcBZKCkX82Wpai9fmqpykS4VpeppDTKsXReaHvtQRkJGYDJQCj",
  "key23": "5un9Rwhq3VrxZSyiy9md6cCrqDpoBPD4x8jDzJiRKAQ8Jf8uEfbsEY8qLNw6Y2EVNhjuvDm5PJZeum9HDNfUixXc",
  "key24": "K9BjHJm3NUQFiCzxeU8CuGV7frL7fgnEgnXRj4dVCunGUfEMCgUcqqom2gzBx9X97SroHdraatzuuba6zTSN8ky",
  "key25": "4scapkoMv7gxpke9ts1md5v3Bzji555DbTtSrFQ8aW1VF4N2zhmfsxHijVJQuXoD56ioLQvMqLPD5Hmr5UisUdpw",
  "key26": "5v7RF1t67uSYMrbcuyzS5fLTrM7JZm5zzMhmL9DhXgaqd5UdXCaLLuSZGjLvJTz8CgeGEETcxjN8ho6fbFSmGYYm",
  "key27": "4JUvoeujm7PU8hAhoZW4EYPGcE44kR451PDPZrjsSxvBfJ356BM629w74nhKnGYzU8rQnknMa1CEC8sgmRzpc3tv",
  "key28": "2FdhiZLaWA86DBa4Y9dJ1AeBkCsmCLCBtSABa3pmsDPbe4vfD1xx5WDZ5Gnhd8pCRJiuzuEGvuXwnMAJaqAWYpjb",
  "key29": "3vrnq8Rkxxe59SYzfzfn37Q76DrpVo7JmqusEPDR1zVsmJLogtaXqaRAshkRtSRu4Wtri699tM6anf9KTo2wusaQ",
  "key30": "3EF7HMGNP8o33f8doszSvxkM366PnmAhXukQfprBm4ssvZtM2G1opfPeF2LsFEqLExwPvSS7dUmkHZdym6drQAbU",
  "key31": "5SmRn4bNsB8QX73xE1bRVfTb5Q5vKoCwZhrVzjbeSyZHfe4kdJzaHVfrtmURgoDMAvNRu8ZPs4Xpfqh7yQVKZfNr",
  "key32": "4hntmQwPs1D7Un8WdprQ63g4Bj3jJP6K7LyyEBZMdPgvj1J8a8QvmC2JgpPRmAxwqRyuggpyJ1Cy1MWKM2YAp5PT",
  "key33": "4j9wT9s5JANuVrbSG63ukbbuSztWLCRANTtN5T8C4fCb9KkqiaaseDk3EinhsBm6aGxJomwGSb6bLnPw5Fe2Xrep",
  "key34": "4drZfyPMUxvp5bhJem2eYxM5QTpT8baztb9A1RNCPnoLTjdZ3RWLRTfCcmoMJjmbgqkowcbf4kCco6J9hUqvcsWk",
  "key35": "3RqZm2HRtuKJ2hRryA8KZa8owD7chTYtzRCz9ygVXkkw35R5pfgUAJVRh4McaWejVLfjdTe2ZoinkckeX7gEbt19",
  "key36": "5C7YHN4kX2daFHDTBDAnw22Fv75eqvz39FFij2tKeFsLKvY69qELk2zLxazeXzFU6a6sQi3KdiqXmMDE1oFWyjyY",
  "key37": "3Q6zkCYvUL1DBjZF9b8DFrLZbay9dsoSqJDGSPSLEBbshDJyqSyhqdNJqPvSNiy8Lcia9AxXAJj9hSDixVHqqKey",
  "key38": "s4igFKFmhyobiydWCGuoRNqsGBn3tGWT4W9vrnvVnyyxzdYTpcVdNdHiDy1xwj5jbTnahikmmhZaMnVZdeWnY8s",
  "key39": "2EJus1WztoQKwsD7AGk6EpQmuP9ZXMpfnKkv35Md4WD1pFmR43DwPdymT9hGQCo55MHrCgX6Wkivst73ESCwYyN7",
  "key40": "5QPrX2GJRZSeGvSSFnc3SAnaeg9ttFFwnNyVfDfuCetRBMYpCdjhucDExqqxntfromfp6KMofniKuMyvVrzWXE7H",
  "key41": "5sKVLSHoutEUNqvKa5Tz6oX8cYaqXgS2GKiiVNnh5KeJGxTa4eSUDjMrTEunPPVyHkmonWtjtKRtdKgJ1ZwvtxZA",
  "key42": "yj23az3Xt4SWewZxBUsGbg3ucG2yAukFpX59UoQKPVwAS7zQ6tZuRjcw1W9bL8VUMVVGJ6TDT9ppc5K77sGztWb",
  "key43": "3sQnB2MXwxQ3Fw97cbY4kTfyrmsJHtnCf6eyTXQyiBUdMuHpAaMrXu5Q9Fh4XFY1ktVEFGBEF712gmWwQA2sbvDN",
  "key44": "rJEEJGcqDz2j4TuR3bhKS8xN6e1WYtVSMX21P7GtweSaZs2FQi2pa9ZsSA8e71i8wMijdUkZLV3aBKTe6mzgyES"
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
