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
    "4ja5QuKmo5z9cVfkdxtM8hoqKp1XN85iTNL1EVdWczsng9dT1ncGcVSR9mD1EgAXvkzd5YfDR79SBvE25nxz98zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ws4DMSca7sT86eh2XfNrP3YcdX1zanyRZciNrzAjjkT1ezC8aCrguZd24ErcozrGFguYuWS5jBzGKdcFta3VABr",
  "key1": "5yiu5aiks6fseV6Z2oxQFY1URYtjXSxRZBVjhmxvsNpDdMc4ek7yPVbCvcKyVMg8N8VbBqGmeXxfVMct1FJhpsvk",
  "key2": "678rYfucfrbvdQdsFHzphN6YXWExEGLdFFAkf2GJpgN31KJYUgy5x1D5UP4J4V168aPj74Fggq86qQuWvGa2oby8",
  "key3": "3YBmyBJKM6vmmQePsvwEvjL7cXTe3WKJF2gpjucbGJt2E2d4ifxfENiFdz8wFoKCz1Qguspk41EpfLZEKPJ9f3Pr",
  "key4": "5LDMF5cX8KSJbbhofJBuYq2SAUcPrxHmVYovEq1xU6NZ9YWVCjeNrz4eu1BJFnarjAPt11cQgTfAiB2Zhj36T5D1",
  "key5": "5GhnkMKggAgMXKv6W9GQTD2eUvBaSkBeAQeox54AdpRNoQL25UN87AWyf58s4BtGDrefmJF6yGviZfTrxueR6Jfc",
  "key6": "51ry5rVWrTVeZ1MAYpG22pw7i62ebr3GCL8C1CTJrcKv7rUXCreDT73t6f8wQQa7QH5oSqAV8TosMU9zquxsL5U9",
  "key7": "5F6W8XaCCABhMCtV4n8Cs4ee5qtoWMGEWfCPRBaBqaWdHcdFsGhAb83nzhH1XYQWx4jkpND35EJ3eWq5hKfWbKmE",
  "key8": "4GUGnqPyJrHhkMxxsSs5KbQuAqeivsYM7X16EigWNgE6h6mLKdRgkMpuRgWVpY52c4tVXeAC7WcEN34ThaqZ8Sj3",
  "key9": "38FtUSFfUHe7i9PmU3nWRtFw9KoRmhnpdN558Sjqm2qDAiuRioc6KThez42QFzUnRQ3Xev7y41tPSYFm5qAexfyf",
  "key10": "xA7Yg1n17XLd8QwSv8pEp5ckRjd2juCEPMmCGLPFf5ghn8RctyS6FLc7YVmrDGfMfNtnMny82dJspcndgPq2hjd",
  "key11": "2EyLg5QGiNiReucMyTLczMhhsYesFd5wAWyDfHgWZA9NT7pEcHeUVpLwuDakTyapa8vxz1sTPzLdgmyC9gQsYEPF",
  "key12": "2Ks3Vq5WvtrEaUXxSuPqYQj8QqpMfw7ph6mDtn3ZuiYvQsm8Zoiyfw9o4TCQR9wf3c1b5MqbGqRqHR8hsEPzobqj",
  "key13": "4sbziDTZjcLJGPSddHXbmaHL7Jz3cTgRwbGBkD4vc4mxGETuxjYYSoVU8iJZPufPxmanXURfmBNM3EVpPD3KPqQk",
  "key14": "3rZD44A3JSS1h96YTen3jADqzTwNCFn5o6ETgQZh9SZZCDP3xgrfmi4hJQpMKCLNnQcdW5d2Dj3r8fvrKbwuaMQm",
  "key15": "3rRMiDfy8afQH4cMXG6gMotCDfNzuAXdvvoTuMiaRxmZj7FQYGhsY8qses2myB5QM3BLuVS4QxmsfR7MtMNrz5Jq",
  "key16": "5ZMc2vWFhYqagVcCcPQMM8nbgdZWYecuGAiBZYS9ntojW6hibU1rKAZSJobcp7dE6GVfBxqhWdqyFwiwZALTqwJg",
  "key17": "f6jKEbsphTZ6rs1v6dBAfc9bhg4JJDyzoB7ZX59jLbu6dWUGDif54oZektFDatYvwEs4PPwNXZ6mYTEqU9uF7km",
  "key18": "2AkFtiYBW1f5NQXe3zW7zaEW2FpjBGtoRZK2inq7Roi2hXEzowmAnDe1wDa3yb8EURNzgWkosiTG6cyipyxCquu1",
  "key19": "uwmjTLX2S8BjqdhPEqhDwcQnanTkb2BkYM81bSxSdQVrFNGT5v26WsVthf3JhQW7DCKUhFSeHwMkz3zVFFaz7rK",
  "key20": "2Cnxw8GhpbBMNGbSN1V1BmHJ4aAMqDi5Yir93RsQtuyc6UmeZ2kYDd4eT8fU9NKiKg6ShZLzxNnZWQ9Fhk6S6Ezo",
  "key21": "4NUCNxCkd7BuHrNNzRSGgfVPDefjwkxqfZPcHZkmqu3HmcfAMooAmvsKqUjZbP6Xpbm2M89yWb56NjxeEVtiyxj4",
  "key22": "2dkg33H2PyCEnoBkYDj4RiEdoFk1A6LEfkszFGsnBSEKxYPM4uhrnbAmVHLyqaw3E6BcckL7FKKhWguVUsGwvkrY",
  "key23": "2m28esyEQv43K8MAVUYRfFS27pko9MYcnLttNuBxgFGWd4dfhgM2oPaSYB7Q62HmruMKEEK8TTKRRJ1xWuNteYW7",
  "key24": "12AWhGQTweAPMbwNEaWD69veTkBfjFa8MzAdrPn9yfL1Yjm2oZ54q7VeFMzsX5GZCZA36bfa7N1xv5ipbjfVwpa",
  "key25": "5kLpp6hPw8SmPJoZvZS9ebhjD5mvn8yAkr1TS5PbxCUP9nzpLYX31w9QKt1HbDSajqAtHPVhMY6KkdgvJdbe9TEc",
  "key26": "3Sd8WPiuUWabirF5xiRKF4ZRAffWjBMEvnL92My8RfVqg79SwH1AWWuxLdnn6xSMZoQvvELAu8qVrcHvHKvQS4Us",
  "key27": "2A92ZaibmZYJRtZnbXQ6vqCpjsYBsrrfamWJ627LFdZ9cBm1RtnwveSxve6UFyMJM6f2DMtbgMAiWQDMiZDGpcZc",
  "key28": "KysPh4SCK6246BAj8KkZf9zcmzdwB9ZkRoEQJ8s8TLQcaoAv5pef16cfDDgEU4C95xkmXvYWqYgrqBV9MceXtbo",
  "key29": "3jqAaCkJhBCa6ja5bMNACGpHUWXrZqkKbV95rmxyHNkJd1uEniJRkCN15YjJS437FBMuht6vLbYcHtU6ZoubxvvZ",
  "key30": "3yPtC1azAQpY9AXnGXTvu5ZwNhqZM4RE55TREFqqTgJuzSGMrUp38rrazkJDvFhgeJZkLAer26DMbW79CrV2XS4Z"
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
