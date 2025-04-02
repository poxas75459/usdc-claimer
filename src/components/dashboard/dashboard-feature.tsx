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
    "4SPraeEKeT3QigCFD5YBksvUFL36kLojG47e8bqAya31rRhS5ySxvf9XHECwGhGrvttxMwM3rZxGA1CWJiFc4JJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLBWZW797jQi6vNkBD98g4D91LzPuNQ43chtaXg84MepW1VsWy3e4zvx8qxGxVkKVzw6LeWdDs9rPcWS5ZdLekJ",
  "key1": "4DVHekXEAitbmJRPy1RvdL3bDCLoaeHLkWpRgykVvWZG2zQsts7zdCCt7qsXLpeeHF2KznJ9LdUkaYv9YwLzufTn",
  "key2": "rjVLTZ7S711PtqfEhAQZJdBj1Wnb911SJXdNnuUbRJEUNZWHRXiwoSooe1tk6FHsLoR5gwYqcZTxuUPPGsbcyh1",
  "key3": "3njguLrDEKS5tdVapgjcKJNwKe5NF9NYtE9jfAjC2xJ9qYviMn3gUHZ4XvjnBG54GjhZ8hAQ6Uy1qXhMbo6jwTQy",
  "key4": "4rGAqiTbBXP94QfPntV8bkRfdUFq14T7GYUL6rvK3bWjxgFvV2PAqJDhZjTik3reDPBQrJ8jWXKU5VkGTwQwbax1",
  "key5": "2jqG1gXvdmQLfUrZ4aikwZpc9u5wmUNtJMJBZzNsd8Q53RRBtvBNF8JYzPPvXsqM9bRDRAqgMAXUwdRojobrsMCw",
  "key6": "4mxZKKbbwsXyLWFE1oXb6329LBRZ1gGhuGiwhD3yDgf5e4irLNZCxPtRLFDVWTUPG5WDLzCxj1jhtd8U8YcVzTDg",
  "key7": "4ajWwKMop6TxAcBUhHie8J3eP8z8eGzR4NjoDPD1heBXHCinFQp3iLLaUNK4SXmT5Y7Qd39wnHr6WBTFRzsqN6sg",
  "key8": "3u5Ptbt92vaxqWwi7ubHLYVyaP175LS2Vos6mFyJPj8Fvt45cxtQk6mgqEE3om5ReCAhUcC3YvxxceoetetKvV4D",
  "key9": "248Vo1P8DQfZMSSHjmaKqKpf69ccWShUE7MThgNTKkktKdaZA9CK2CqDzT6BNwUuoXguUdCjVZU8tEnvd4DyECxw",
  "key10": "5KmsN7W9UnBkwQQ27urZuqMvRtm8mTCRaheVBEDa3GUjiLu9res9e8GrDmZrkDZhEna5h8TS5q4nAVRWmwCbdZyQ",
  "key11": "25tZ58GGMJGYAybQW9Pziv2SsZd1RBvGst6CtBWfsSYS3Pc55rt5iyYe6adkrNojRkok3qpYfL3HYoevn91RNjiZ",
  "key12": "2J6pJagHVVeNwBXzzjX9DADTsozkeSaRCjuFQ6aUi1DQPnkwFcqTRiADHgxdFbwXtWYvkxZxaXeAYKjChQFWeaHi",
  "key13": "t7JG23o3wRfi7avj1ET6WMQPA4NTnPYTT7NZBixto1UphDXq8jqFfFDa59HijnGusNVtqNgFLfG4PkPzi86U4aW",
  "key14": "3USSoqSM815nkMCR8FuugodmtCc4m5GNo4Wafoux9CN16fZmz85sFWGBBw1VDfrhHkGzAwaZdEoimQGQP8XYo4yC",
  "key15": "4pr1UP5N2KXARt5qqcNSG1An6G8DAcHTJt6GypXMz6rwzoFa8YzTnESxA9oh2Uv67psmfHRGH4YTGZFRMg2z4Chb",
  "key16": "44H1dWUSaCX7LcuUhHxWTVBed46yBfWUL4EByDNEfGchjm3t8rUk5BuBf8Ne9pPVFzo9wzHr4WvzkbpJfE2UTkF4",
  "key17": "4tVEG3ka58rRSZ2gPEF1Z8mXWcfHrV9im5YaXHgJ9Uosoij4WTKWncz963gdVjJRh5hEfq32ucmC7Dbqm27e1Sa3",
  "key18": "28in1sgUpwo5d3yh4vi8LVZEp4UC9xFraoaxXVkXhz1sMuJz3GijkE77EGmJ12zsxxfEccKat4JtDrvqfc3PPkY1",
  "key19": "5cvUbxMeP6oHtGpJb1PzfNoiUgLrVaKuNngxNB6vurVCeeKctfK6D4N3kdCW1B2XMC5NrchfAv78Wfyf8t4y7iA5",
  "key20": "6iMgByvi4xGFr6e3uoukWYCSyiVGYPU1p31nPYGzJyX1k1aHhkYbMCkhHwmutUkMkDEVQZJMUKcK1gtKHFAeurv",
  "key21": "5eC9HGn2ALpNhB4qNESHuwfFn9WKL8gruJdwNmrHVMTQVEy5EwkmfjgtQnjpTr46EQRtdp4z8pMk9MEMSZA9eZyr",
  "key22": "52jXeSNnDTGrzutSfQPgPQgk6TBH6hGgDhB3mVgutGKBiDhf9Hv8xeaPCkDqwTEpd1r74KAQSWBQdKqBc1yo4tyU",
  "key23": "5eTRsWpvr8rtZ3CNCkcatFUrXhVpuCjRw8x3UMxj26s1Xkw7uTmXXF13eDVaJGenDS6MXbHz7r7jGYi7PUoAwqa3",
  "key24": "65PmME1yvgWdpYdLv6ZLqd8k6bnvPoFdPfinmx6pY2cfyq6uiDNuxBVDc13Kd3bSSEHNVqvCmMQcaKgpPnVZBQsw",
  "key25": "wwHo5J6WRSDuhkrb4hYjzEhTqFAFvfuKNHUosGeYNCLRVa2SEpzmJhCBHp3FfC7HiAg5sm9GBCo97zdEs7Kksgq",
  "key26": "3s8vzUg6eTK1VG15CNJ4vrBmPpjXnkS42kbBmBGnxPpSvj4ssYe9nom8ZWDFYsrz8wNfUx9Fd3k69uy4dcMnshT8",
  "key27": "4YS8PercrVbLeKTVqDaS3XMR26zhgkfRKiNXVSZMJvXqUTJ1V4oXphbEwVGoJmjrpLhdBN58kp44SHjYLNH3GsF5",
  "key28": "243jbkL5pRpQH37DpvtMT3e9cHTn39ghUQXxrQFLAJTb6YJigg7oTEePwds6sv99UZuBLZELdJkFvovYXDADwS89",
  "key29": "4PSmvpmFEFgQhGMbLcPSX8yHVS5tdYJV4sb3uZEjVr7XqjBFYMF18vm8Ec3B14dCuZZsjMAhSSKouggJQd5XyNWW",
  "key30": "2zk7MTdHyRAbH9YcZ2EVHF4iVzB69WtyCoTBJFTXPDTvsP9z7ibUAQXy15CrJsH28Chf7Pp3MntH3La75bVxvrqb",
  "key31": "5ke1isHj8yAqY8SeACrtwS8RSrkCpUaKfNNM77PjJjBjwo7mZMGiUrhs7JsXYrNXgDx66KfujTubJuasHCM1iBm9",
  "key32": "FV5qeuCTpnJZZtzQAa26PHXKRGnG8n1uVzgj4n9Krg17g9qu8Nu21xhofDacqxTw1fAoYfHF38XZf5NJrRrmUgT",
  "key33": "4yURep6RDEYu6WyUbvgDHrE7ckFDVJwnRPLsm5eZsF3mxhhQuVMeH5g5ZKqinS2RRMB1JRNa7iKDwYKLMxMmjMgH",
  "key34": "2Vem4gYebMCNjGQzaP5HdJokZ5FnhGTS3VTi1TZb5oKywWd2tRx7cpRtWyKYHSzG1197ZwWH9QX7648ZKHNrgDDs",
  "key35": "61XW1BZ2bzP3juPK2hXqJMcmUy4MjmeqYHJ6itStKh1Pqm5Sim9XpyG8KivPcvp535Eo5CtqNqooCv5uJEK9o7C3",
  "key36": "vYtrScRbKWTnPuiTTFmxBEV954u4cXXgsz57xnuVnWeCw8SDJhKKvTZ52yDnGwpdqBAsUqpHmKGzKNgoSWQmVGt",
  "key37": "2KVBjy3pP9d737G5yDNP2dyhzwQuopiD4TY2uCYCeufxGbvLpPyRjXRpneoNTAibNM54VRyfr3fQJcZrTZeAeDck",
  "key38": "84Ex7ybAwyCJS8UGiaYDX7v26kztGaPT2ef3hggbLDEs9NGwmA5zsNkvLvpoKA6mJpErww79QpHG8WHNKLA2c8W",
  "key39": "5ZoHEtpeaDwxYqJcLWsCcqKTMnDTLCJ1Pdc99jaVKr6eGkhZvozK7vtcerrggmXghZasXLeDyUCGZZ2carGJ9ZfN",
  "key40": "Fdiz1ZBMv8dofDFjeQjWBEnWQUmVB2KWdWs5kVj7Y3Moz8G9giRF5x1FxbcwDGWQUz5XWEh8hH5rY3RG1xrF89y",
  "key41": "5pixv9Q5nPN9y2yV5ddcUyQ93126osr1dn9TBS55SqP6DKg7uZvEAYaL3fZQwDmqENvdvfL1sHEnKxHZKt2Hr53g",
  "key42": "2v4krDahKCiLMv7oWceM7qehWra9ukYNAbTbGkGbm7MxMHf2tzRoXXvCodCYNyZ7a9m7i2kdbeduW7QiVXAnnTRt"
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
