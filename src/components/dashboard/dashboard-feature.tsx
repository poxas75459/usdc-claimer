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
    "4k7bz3mt8h1MzajdLfB9RmMCgL5SN7jF5z3krGEGowMXqUMYJW9GvTajRoTrtubqfHV2ccDpnrT7BqCwmrETjLmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cd6gkYMf4KSvxjF82HVnEU2LBASggFopsz8AfH1PdioPenXJQEmpTJ1nG2Tr2odjRgJt82ipEnL5PBvTxLkJn2K",
  "key1": "4xiDu2T8dkiTvzno21rSCNk5ehiDAaNj1DY7jEgsFXECCRAjcPsy7rPzjrKAG951SrBhtoHepcKRWYZyiUxJHbF7",
  "key2": "5Gkmcg8Neh1PNB944N7Wjom8QCzt13HYysE2MEuFWd4Y6JsMvCAPmynQuE1hqeJFEvdA1qC33GcFUP6xdKU5mXxk",
  "key3": "4m9pZZzSDp1FHhbEEDzTTEqsVdSDuAaTpjHTFjqpq6hbWWRGcV4z4qQhQ3sLv2xhEJQVqGHMPDg4kJsujbbR3aX",
  "key4": "36uaBciuzRsbCENhKTMENmZuiYJZQE5R4SRLFWRrr2KYC3NmKwwhJt26YcBRmNqDJMsJ981kHJFda3fy5injeA5P",
  "key5": "FBEengLDb6dM18WHbPcQe7W4twDNrpNyb4SMuNvGddme4txxoDAEW1CLjjmW6okRSbUej41PxnPtFyE5n7ekTDV",
  "key6": "3SLNVqdABshL5sWYbt7KzEAMZhmTZWsxG5vTQUmrDfsgcAPSu6dmdwmh2yDaiXVgnWBKwpJEGgoMk6vwTpMe1UDf",
  "key7": "4RmqqK8UweCwpGvkzFVCcTdPw9jG4NZVwGfdCWyBuLeuVc48oQ1LHoFD5GWBCBuCCbHyDy2zcqn94MnYVJTSNXfR",
  "key8": "3CjCETmGsdmtE8e8bacvfhgALVetx93E9i8CLdKSFhjr95UzHET9oKGS25Y6VEnMhnTuQNXMmGRpGz7y36WT17dA",
  "key9": "5wRbv46es1FU1u5VkvjeSMWa1gZEUhNVGtTbrEJUv7dEHennXpQ3LrWN7VdLVxgtKd5jQ8Hb21F57fV4Skz1KYUP",
  "key10": "Z7hN25BY9L93w8f8PafEQfqSuYDkgDjQkJVJReHAf8A6Sx7dafjTwS99ABcRPhU5ipZiraSvHzh81eepETUUjtW",
  "key11": "Awnef64rthkpxJnCPqt6mpTNn2yBnaMwbqSY8Fw92RhCpvUgsJrBGDBVr9KtqK4Y9Nf5YKapJjfEV1jRqtcavzg",
  "key12": "rjgX9BzzTAx4NgmWTrWFqKJkbaELEzvXoRWpSEd3hyRpf85BidJDtrc8WtsB4zoJfDRX6bfrSM6WufAUK9rTsQ2",
  "key13": "3JiZJUuxr7xLPQV2vYZP4EfZBhu7iZKd5931MUYuV1HLsTfZrgGpGhF7N314HrfV5fM3jUQzbE2cfYSLK73aS2s1",
  "key14": "8Py5WXysoRxFvRzS65PAdiYA3KBnwhVYZ7UkVUWFHuU5fJt9Q5Rgpboag5cEqrs77yivH3WW3LK8QzSnoQjr3br",
  "key15": "3Tpii1amEU3HY4wmbWkMtCMCfTDRq1yjyZHTUfXtKQXYf8ZRXcQhsp6pswpuTErfdy1uGKH4buvWhdYP589pCQLQ",
  "key16": "ntt7jWdh96kCTNeJ9vi56H4aAcRX5kzEVHmewSyjS1uCdC5Acx64eLiscggHqLAxM1tnmJwtdmkt9gDGdsUp6qv",
  "key17": "551R6ins5rNFU2ME57DLTmHaNi4uJmpBDGu8Uz5bZGeXXcQXDcgvJR89NigA6D4cCgZJkYukqmUTJcP2JxuQowGP",
  "key18": "5fnqXb9tzeqB7ppk1WF3n43v5DzwPb2d1wBnJgtxe2d6qDQPEragaY2JerdQH2y1WfxVTba7vouHewdYixPRDhwi",
  "key19": "4HXyW9KuEz8geMWLFqwqeiCz8pwo77sFsWHGkBoF7kxGcLXi3WHBMCHPFU1KMW7Lrxx8A3Cus23LEU29n5E1Grgw",
  "key20": "5HqupiEU6H6Bdzr2oMep6hWU7uZ227AMrQ4mrL5PdHR4Rh6Zpw4twMDsteYBcJ34pHCu8W8Mmq4CQTdKeHTSYRZj",
  "key21": "5P7ooJFuWG6tKa7gawG6WbSgUhBHHmmQbU1BX8jkghDFbMcLaQvgWPuzR1rcCHHvzJUEJB7hm3GEQxc324dT9vVg",
  "key22": "42D6fqbjT6jZnrDfzzLAnDfvEM5BGpEKqK3Wy4XWPdvfN9Vjp8eXsuEd397p6UU7egJb9tC6cAzzXvDVP6MvfzSf",
  "key23": "5kgvZkiX2bcaUXr4VxCsjdJNsDfjpBEZ3ZFBaFjaCmwX97TybSchvSNDWB5XmxiMr3ibjEf8bjPXmBjnTDbWZXZQ",
  "key24": "E4XagCraNfZd9GdRyYmMiJ23Gu9yAv3TeSH14PtaPqofxntq3v8icJRYnbs7pNSSJPgkJo6mwJvTviKjenXYhBe",
  "key25": "28tv257oztcPvrHYd5iPt2XCxfWmCB9VGj2SHA8UteKKHESBW2hzmkyMHJUZV1CjTK2222aQMfqkQN2Q4K4Y2KnK",
  "key26": "4r2FYZmre9aUnM6jpjmjciysnhU56vX13YKVF4H6rCNZfS9ivbFcQ4W1vgz1rb2WmBqpuwxCRvFjrfX7caQSB4Yg",
  "key27": "3BPQ55cnLgJEz3vZC8KTF1TXiUxUNSM5zGrw3wdqP7kLo3cJapoipxrAZA6mb9imSafAjXbYC5j1Ge8e7CaJEHzY",
  "key28": "48miaAeyvnXiFQwomTUm9GzkcWekMP8eMk23JvLSEG4eoLNoD3xKmm49LftjgNcRDJSGPjifiH1Z3v4zCQSHxwid",
  "key29": "5esFMypJK3Shu8CBF9UUTtheRBMMZoqzcFnQu4V8U3eBhSG8HwV7fUTcUPbX83KAeWwvKT8dRdXiCFZRBU3Gfm59",
  "key30": "4JruS5CNCn5JSXqQBVZ7vHCnwnNfX9r3XEnhMzsq4Ra82XGhNAbEPKoE6fZXRjsduDMa7C6TwjpTTbis2sw6Wv9W",
  "key31": "2N6KiZCtfcMMkaPsaYgZqjzsR8FdzUhbUyEV911LgYtYBovunHXVSsk8T5urJfi1FbBXkWv3NNYQNETMeu8CE8qV"
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
