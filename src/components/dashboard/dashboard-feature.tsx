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
    "5FoW8RaU1tXMWybxtenTDYrvhSGag5y8pqVidBYuPpS8c4FVpbTXnFtVUG4bx4rxNEnFTmyyhqNj3AfqymretuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNXjHX9vbaP319FRLavY6XJLEV2tm9ZhWmzCNHBob4H6a5FgmXm8CihhCSctotAb87TqgpP4LiGdP3vyLsmpwj8",
  "key1": "2R6RE9WgRRnE9wGkpDomWnTzCjSQcTfimf5zYPiBVLGjYQ9gyPzc2iSK8Gt4dxWDqDHzrma5Dxun1spxEFH8Lv9z",
  "key2": "3saPxGLgKEq8TwKTCFgpUaPuXr7Shjbv9gP86EBy7k5vsvcBLEy9vpPMqCaPToT3krUBAapqxikXraTFgHwrR6az",
  "key3": "4hppG2WQN2yRx2Z9xrzKK9EvCZhwca7ii7SEPgVikyRi2sLm7QfhBr2FKZ3rLXC7Tf9QUHmjVJZyYzs8d1maD3eC",
  "key4": "3H9sGMjdBXhuFPZEk9CbaJ6cGKpDFQBDBAKffCuog55DxksMs797WPFsVkU4ZmAWVu9DrzVPB8n4vKvvkHhvWu4D",
  "key5": "5PzP7KYN9basSwh5b1VHau5u1CuxVPWV3sMsEYc5N9xmWjKiAu3PuKqqXxa2oXiwchR2bYh7ZKYAD7WBvAg5au82",
  "key6": "x2HZihGnoD1KBSzVHoSsFnyRXM67abezkgErb481CtPdPfxnrPEsRMecof6yjAv6BA8x91XJ4yHD5eYta38ydcA",
  "key7": "272HRRjqdN1X1fVeVvfYsNvZezEzNCuu9V8JVu6f7z986GPLxXg3yn7qNaegTQbXKqZ7Wwjm5vagnV5S3tGJ7XEV",
  "key8": "4ck6ykmLp1AkaxAdrc6ZM31nUXX7r3yMfjWyq6wrDZ9PhZ3DS94xYYmRbUXSkRmYh6ATYZuoCpyvVyVjduP13Xzm",
  "key9": "52PEU9oCnS4i1uoowXvkxqTR8qpvNvGpsn55GooP23TmQ6UKoKQzCzAhUsG6rnbR4Zywt9dVwLf6wx5C84hus5yP",
  "key10": "21ZaW5pLRaa7V9oRBLyP5fFxJns1VkNNXXkNzygVSAdmcbBVJ8dc8rx3bLU3Qn6sR6nXag3XLwuD2mwxiVw8BCKW",
  "key11": "4sDZKcz7KRU665fSLYvieXbfREC6hWbAyGmrz4XdPiidX5Uu75TQdFc9gaAHKU2p1xFdsfNxh9J75pBJHyoztpAd",
  "key12": "5H6Wnk6DNfZAzxfvgY3johvV6e42gnzQHgGnGoxcnWkPWqDZDnYQoHWC2we7AQxS22RQ95tTtmwgaMj2jDqNPTd6",
  "key13": "3zej7sqAhEeWSVKGrTec86VWAU9A2esJYPKJgBFjyA7MNVGSFUhm4vuryc8YcLQN6CDihhGNvxq2Ha94AA3Qgwkf",
  "key14": "5kS4LtpULvnWgPEm3wBwUhNNpq5cbed6sSeNrSqfZATvP4tBZHVXEffaPAprFi5obkGF1cqTSMv8EZnYzxGshqhq",
  "key15": "4kdEZCPXASidHDLeiskKKd4QZZv99H96GZeZ7FUzsrrcTK9on86rpMgebiu7sivC6PZygAdtifUVY16xNuVBrwC4",
  "key16": "5WvcEeKFdxJ4JF2T4wPJ2PMS93x787sVXEWVDvxN3WSZyeAXFsE53GBLJb7SwxdqzWLW53S2PYM41nGqPQR6bqFE",
  "key17": "28Y1cwXpxvkjyayyUgcdGaaKWsu1H9ymVrwZHwHM79FiZ2cJ9bcAh2afnHVKSoBNaQNfN1rHKC662nhg6i6mrHn4",
  "key18": "bgeNLcoZ5DsJpL3HypuoM1wzr2HD6CvwMVN8WNBkbhenY6fQPr6cKNBHsKndtxm134x7p2bpFASuTyzG8ScVuYF",
  "key19": "2ZGusAJcsm9E4LTLGN1hLr2QiMsbgS9eQubdFVdtEXyvwcNkCDe6R2oR5iwK9DzgWKDywhaQF6DH8ihbAaJWeV13",
  "key20": "65x6ZY7u8ExYWDXVPH7eEtjvJbjYYztAdevRNYfgos92zDDsGm4ADBQnT288RbWePBzuok4bhCV8f7oUQcaS6dyG",
  "key21": "ZJSurseyRVNqkLQH5w4S4LgXH2TRmemJL7Nf9RFWDmTs657zTH2c11cXh4bzztH8p1ws3Pj2q1uuPzXLQ6YR3xr",
  "key22": "4micUth76BPfdhiiHK3NCSFzeyreR17vR7GMsi1bTXKMUXbNPJVr4HtxP65BX4h7VLqvwTcKToqBzJyeV4auo7GE",
  "key23": "4a4dW8JFSYtneFkLJRY3bm7oLsb29xuCmuMoeRZwFyZDVdctXhce5vKVsAEnx4A2VgKZ2WwA7STpbfNfKUdV6C2L",
  "key24": "nSPjMdCPFFAV9wPs24jCyB4BVeQpgmE5RevQbQmkkg6hhGSypmBGdqKen6aU7h4pMbxdqKXpqaNRjn1WqEXLFgf",
  "key25": "4TcusZ1mR7uxS1zzLbCkoLCKUE38k69WQeVdzokBvxbb1uosxKNKciNm6mS7Yp8amhUxpMDt7Rw5ZgppXi6F1igW",
  "key26": "BZxFzeWY5C1nLoRsyaCngd5Nguj6cjqFEryWRdZU7SHFeNPZET4YgqdmyYhvet3rJfaB7Et1bHGN4dy96aoKHFL",
  "key27": "yPmd5Tj1wqSUvbpgGyAM7vK4YJYtoidf92n8yr9zuPmXE2wtgPVsdnbiLn2s8Mi9dtMAoJreXHFvMSdjp4YNP9i",
  "key28": "2g1fGPkiiP4hRP46V6CTdSPLNBeoHzGjSMLQ8ZAdv5qLccn3kRoybugyYCiFUANekN6C8gw9rPiiAQTEYUVa3MMr",
  "key29": "5sFESi2HrALHyHaoTL9g23MQnV9mRVEkSLvo9WnqH6aR7igTyDkrvLXdxcU4ceK2Kqypppuiy4zrUrwVNojDbG3h",
  "key30": "4Mz7mjxeqC1SGuXgFEQdmDRadVvhypKUNcbY5TuBCnLZbBSPt5CcakyDr4WPLzfcqZQwsPzRX94Zxqsftip2KpfW",
  "key31": "3yWut3dMjo2dCPw6qqVvdkR4RTbc4VAhdD55WfnC5sraiyjk7dZtwyvcmY1RWAQmmfPezEs55WGYpL9pbtnpanfH",
  "key32": "3LHnzL89ckWFH6zVZm6aaANv4pkysoFJCaKcRyRj5Rppqzwn6Kc7fsKZhz93jig5fDGkctJwra8zGixRcw426JE7",
  "key33": "PVusttzX3n3yVJNYqaGccqnhVgrJjywJBivreXZqeqgxvPcNcguQwQRhrUFsR1FT7dh52hgMNQepErKwnrhKdM4",
  "key34": "651KrHx5MwJ34DHigPhGSngiwyjvoPc8ZYvS1wd7NUD9Gpwg93xBLs2Pa2Mp8ibFhmevUvjXXjdDtrnG66hjyh59",
  "key35": "2L8Sd8tCetk2APpMgN1UCCNn5zXU4DhamDF4A4pekXGzY4Kwdr77Xx8HN2aiJLAbELgks8KYgYnKJ75qz2EARgJZ",
  "key36": "4h2f2h6yJDbJAKkj96WPKw1yQ9GgmB7E3P1WZzyD99cWZexBwztWVXRuXXQREU3YALWABrs8usEWTCihqi5Q7Adq",
  "key37": "ewhonoGVD3Mh2tZvsTYdx7wnT2sQSvpkG1CdpdSCtUqksWKYYeLncmAXEawmVESV7sVPHWP95icPuF65hmpzL9L",
  "key38": "4XtyrtNqkqwupDUPHNuzduHTZEKWPiUJM9xQqZQPJmD4UZA6amxZ9n3yQ1x45cufoh3ARD3fvB93JL1iShF2Yy71",
  "key39": "4EFkfyRLQDrMfoYU7pLo1kM5NdHwQwon6HRkeWENnwCipxp3ApwjDSe9TssX3qG7VgaTdT5QzRqcz9eGXNYVhhs6",
  "key40": "3dxHQtiBPeWx4nxb3mQhEDpAsMTbBapKipURYHPmyCwHana85tvNjb5Nx4PjRZU8Q6E32RdsYoqW15Z93ufc5akL",
  "key41": "2sW7zV89HFAev4SGowvdSVkvoQZiHu3JLQbsnhWXjwUCsgy7ZvN3mWMaGtEjUkwLuWx2AxnihfaQrPsy9DR513Ma",
  "key42": "2GW6f6kE8xUAKY7YMBV8sLLPn2FzeJMewW5gz3U4t3Podq2wMzKiSWCFmaDYvWznEMm2wQVgNPHm1FWc5TsG3KCL",
  "key43": "2h5xwtSfEEZGLcF2JmiJyG9iGqosYyQVf8NMYo8bynA7fpkyM5b19dcctob8cmPRrwN2Ue34e4N4KqjF2H68sVeV",
  "key44": "39ZgZ6UwQ6uPjdfXLxo82bYfEb6a1xXE3UNhttM4Uf5JJYdupCNkUBYKTvNifkznSNXujuSZnuYJCWHc3vfFL1hP",
  "key45": "3KCngvqAjJqABeYwFa41wvJQjRw11ZLshkSL2GcEbZ6RtBfCbTk9yJP6oaotZWVX5vbcsrPipR8YVHNP16Nob9Wt",
  "key46": "9WVwfc7gyZZSD3ZTwvd5BirbVWxBaJns813oGiYM2Fxssa6ZdaLU8Yb4ZceiMKUNfvU3DfnsMro4Q1FeZw6FhBu",
  "key47": "kDwFuMqjdkxGtUSEwVnSjd2vdCe1XhMhHEtRHahGrwozVwAJmgjj3Ru4iWEzwnJKEKDzq3MuT74KUoZJTv9cnH3",
  "key48": "3P8CjnZ2duFNjCnKMBCkoCvW2gRUcqvR98m6F3xWqoTkLPVaF811FwYhqWzUmN1xDfxW2h9zy8xgpGuLcQTUyqDP",
  "key49": "234VwTCnWdT2aXiSwKgQY8Jy1sThK1SoipmUeSMvmAy7fXtVysyuGYmU5Z2fVNJdx6ktNSzQTuDTKw8MA2V9korr"
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
