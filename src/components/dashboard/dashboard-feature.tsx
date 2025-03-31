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
    "5PcTXaq4N8UdAPBsuacaAKfT7fPfViFY146LjaQgs3Hq5fLwBhuw7kyA3ERrznXBSLbcUSEnMYQDfvaPrD6zuk4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bx6VacByHdZhmHDPK6UGeP62hCeNNM2xA1HUQ7G1jonrr2ubtC1e4L2qgHz5zUnYSZBYx6duPYkZiaAgGqwc2wk",
  "key1": "5buoFgqKwgieJYFRPkt2o6y3n8NeaANLyvLambctCt2VmapZy3qvbWtYwETpe82fH8SR2XfBWszzPtudfUeuUzvQ",
  "key2": "37wykh18Rzmdm6EF6LaeDtMgAbxMwr2VmWzKZwwFFoFEfc2oajpqa9J7TGxy2wuNZHk8SJYgMtcLnKTx9butRJW3",
  "key3": "4Fbqhpb9meqTuixeTXWmN7BeM6p2DXQYcRLpqtPVys2QAFwa7bmmhvVhMvxJK7RKaHb32DVR2AidvCxB7zXRXfhC",
  "key4": "4RFccHuYo9mwmAjk1HXYiin5GnUNNcEWf17NJrcCLfjtQCUFZCMvvMJpHGmPjpmNex1g51NDKA1PYLNqYPwqJo8S",
  "key5": "4q7eAR3cJABYc1r5fek2He9TkKAsyY8nNrYfsSMdSXzTdHDHqp9mLLLbZsKHe6UcENjCqTAz2Z6aKjRX8k7iM6ia",
  "key6": "54NYp9M94HYv7TR3AoX6SVeWdTRLenvDXcLumnBUsd7Pn26ZXqzMtJ8ZeMH1D5AaV4GwegMHBZfP34U3DXwfQoBH",
  "key7": "4FpdkUpcUuZVSEp4vpYD5BmVkj9wBJpUziJKUCyV3sJVPcAcyrTryJ5J9z6ncGjnsHGDJ34MEtVp3krSNTa9Gn9y",
  "key8": "5vJoDfAPhzSXybnjffMrEUcUSZx5V8GZ8F93tn6BprHspM631dkk92AuYyb8V4Wtp4dXn1DaCUkmnahUVJ9obudB",
  "key9": "4X3F8hZuNnGskXMZdzNwDPueYDjZfqNLcDnzJxBVjoWXTd7NCWEwYiA9fpU4hLNvNn3BkW7GAT43JYj5wnSFyeJP",
  "key10": "2i5CuAw28tgcx8qkb1UTQcoSZNAgRFiySBY72Pnzp1nnLmYHTYs6bJPDz2rLbTZcQ375CpDJtqWnK72cYvXb6f41",
  "key11": "1nRgpLvaLAcwCiyy8cNmqp1xKBxASqnfrT7CfBdvoZDfPU8bTXzFYPruQkzVE18FvGV1BZjPejmKaUpjVRd6WzJ",
  "key12": "2j8SCTuUVU5QvyCt8jgCtdZDjBaf8fAwkV4N218ojHLnfApQm5R65xyu5V7oPhS2PqZdd6Dkrk7BTTci58ezm9CB",
  "key13": "5hbQosW8YFjYTVRSPDR8Rg3nT2sTS3atZ53D24wY7DfVnyqeEAUBWNQRx3UWJc3NmYE3WZBJ4n7hgLzgYFJ5Uvk7",
  "key14": "4tWoLXCzAArY6xqy6zuRZ8oTreVDEKHNtdS21a321rmD9175Hy1cE7BkxuCwG8WDhgNkPqUvEV7Q6cBJnBKHLniB",
  "key15": "gFyeH93HBSTQFRRzT5DrvfuzcBnq433g6fpAtKnnphB9Pe7VgentTJ77HYzUGKUpEC5GH5KgWEMwxpcBk7T3MmH",
  "key16": "5MofFTT24sP3Gr9B8oYmtezjx33ixg7wPUHEiL9hykRJWSwi3zbSMKgnV8JbwVtoMUjn8MiFYgjqJrLvr2eBqTTQ",
  "key17": "4mzeVsyCvfajiKKnFaaxNyRtFdaiU3zKVYJcDRYmtgkp71S5X5SVBtLv2zPa1iB1GUYL5T6YzsQWr1WD4iJDRFhz",
  "key18": "2zCYBS6QSxqJvN2a9N1r5u4hF7r8Lm44QLH6p9ty3Ve7rSYv955QDmHqjtjU5fQAvrZ6irTw5RgngS51LbYuRrLH",
  "key19": "41VYN5UQc8MjzoZQXJouURk2iyxoiF6vSgUqTbNaURyYDrNsktsXwfpHf4DLzUFYeMVuxsPEHb5YxMYYDaUK1LQR",
  "key20": "5S5BbCPrNHq4toFKYRiNf3BgZJVuwq4eC38CRV7cEtMpreuvW2c8AvJjRxqWzrTKLACkPJtD8cH7zk4ERdS78CsC",
  "key21": "3nJ7w6Yeskkbjxn8bj3G8TdjvFm2uXMBmhLgTrd4CQuAjkETtKmoUnRYVQD4Z56pQQJ45wcZ2A3nB61ZTnG2JWPd",
  "key22": "4Z3YvaWhkdCGqz2jRPfysLCfS9iE5Bup7SLXLiugRG3t89Q8zz3CSBwW3HSBFWLEBPWZ2ZLnmtiUtAGwh8DFJmH9",
  "key23": "5uGnQBrETv9RQmZyvstLgBpb7Zic5Crftb1Q5xcyXMfo4Z9khJRysNqugV2So1UE62vtkm94vCh44HMtYAUQLNCZ",
  "key24": "3b2bbS3GDCBkQscBuZ1WuxdDyoJVF2LBbT1uTCQyqNEWNwPEVisgr3i3pkBGufGZPesXffxkvBAjWTvBEeVydFQa",
  "key25": "2uywKT5XXjradiXH3KTGsR8scgcKQnQyBDUwF9dnJfja7D11u5gu7fzc4fAHookPdwfvaBRPnPxpASCFAQ81Dmc9",
  "key26": "4LXFfCKupew8kohfSz782yDiRqdNDg91jKDQ7cbA1w3QjtJf4qWAWVtQtB8SGxb17288fZr3TnUnBiZW5REYunRP",
  "key27": "4yY5zu6ojJVBettRS34PhoznxFFwPfQSsV2DvHa6W4cB54RKnx7ioVDo3eCnc5Qk7wcsET4sa2SNGHUWQyBQXcZK",
  "key28": "4FBdmuym68gVTG23eeHTWsa1CQSAwekJic4LETgjcHQ9xCUse1peGxTXy5kgLTrf1C2iyLEyWotL6GSNspmBWhp2",
  "key29": "3Amy61PbevRvzhzCp1xQFGLQboeBQfAdjhr4zqxq12aHuiTG6AAQxuWUmHoj7EDpyhERhuxYiTZx6GgjK5d78EJ",
  "key30": "3JFbnTdvRk9sHcvxSfpvX2r3Jo8NYFemnjACQ9JGzpLSuSpgstX52N3zKjnQFARV7Qd75Evq1ESzRXJ2tKUwMNB5",
  "key31": "517QZ2AuxfbHbHsqUokgc3S45wj3er9m6y2mS2uAqYVBabddmFs4F3T1VAvxWSUhBja9Z3N9UFp4AhgPxUz8Qj25",
  "key32": "5uWZdxq1t4kaG4Gzd4mDBjCotNof36dqjhe2oHknRFMsX9tWcLhDcoGnYvPC7s2SxdYGLF8ioP3UjjJA5FC21LB8",
  "key33": "5nsrAqSTQ35ScMKkEnBrjPJZRQbYDRcXsWVcixZsCYvfDAm5Ze97SbWeAT6CdEtXEvRWZVyXSiNdRpbnRd3s8EPC",
  "key34": "k7SVA11KNWHgwSqmT193jVpekUGvc3Ufd7TjuC6eikzuGD952M5VeqUGcZFeB4aWk5Pyd77dsRnXENtTJSk6r1i",
  "key35": "64ZLFp9sewLZRNEcfKgkFEvDaNjp7f9FDtqaQQFsD9jmgtv93UkGGGpyuzPvGcFdPQp93QY8GCu5kPux5XsN7Wyd",
  "key36": "4z2mmg2WRAhUW8Mi9HC2Dm1ybk86FNAQiGaLmAacTHMmzUUWswUZUi78aha57BcB5mt2Zmj24uUxU91RzYjXbFcC",
  "key37": "2HHDbcAVPJupEnBzWnvJEUixtpnMyjucWvTrAdwZ7JqYgFhyA6H5LQLNGw86M2whMcmTir6GDV4WwT6CfEkhVrFD",
  "key38": "2SPsjPfmtdzkmz2evwXq33vjhEfUg22XnCLdhMmJKi52qKUZtD1h1KTWGpkSAX79bJMyugMnKCBcQQvRLbdoP3pj",
  "key39": "2hkCKfNzgG4SiJGN1RztmUxz8kdjXYAEWi4wqbq9QbxzGY5avgsH1BZiFSnSEA2B1zXUVuhumSFKEUV33YWfSk3K",
  "key40": "4hM7qEbEANf5YrQHJugEVr3AiMrKRmHGvYgFTdo9Q4Sm7H3MxjqreiKXcpZomqyuDAbdEQ64Kjm6YzGwYiP3GHfN",
  "key41": "5TFVEeJ3FYpgZVtaGmBrWc9whqcnVkYST8s2gSa2dri7wAfnChEq3CBTXV3UZUBjtmdtJQkHPeWPKjizkVMSrFnr",
  "key42": "3sJ9dAZ9byoXxKzU6JZ22GVaHhKzqXvd3e8csBP2f3V8TDxbh6DkxTdiqx8J3JD45GsDC76NWvoXnE43LZska7oi",
  "key43": "3iszNsqmY2pePVNiiNY55mE7YX2RxeRpBP3VbUTUceRzHegkz26PjBSigM6rkP3Qcq2XtgHN1b6HnYW2KMftdtKU",
  "key44": "DfG7rrTwNkzp5N17Uf4qfijyPK1MwS4eoh3esrq96zwXW1Vio3B72u22sjjfEMQ1orgTgsjMBTywTDo557hAQYU"
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
