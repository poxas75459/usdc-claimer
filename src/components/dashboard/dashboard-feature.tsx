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
    "27ZDTWk9ZrEwkPH54vJBxJMhDkStt6hPTHZNK7D5yYdeFtkE8CXzx5jrUeysVhhYgE2vN6nGJRXSqYPS7tBG1CCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iN2eqT9HUA5JSDah1nb54wFmXbQPTjPn12xbEzJxTKdeEonY9mj2GkezX3guf8kwRtKipVNrSaBXHFGo2gBy1mh",
  "key1": "2mVsxWKWBZsNtq2DpdvuzaxBPsS7k8gNDDR853HC3X6PUiQhYEdFxt3ZAgqoswXo3b4mQMDXAQHtgGw6BhyXkATT",
  "key2": "2dVNFGfBKm6zH2rbQoZKERqrfs5SSrxXRE8RYePG2ywt8LEfMPXBnQFFAKthKeUa6DrYrRnovCCWwwzEpGM8Ug3L",
  "key3": "43wK51unMhAHuBzwodRwmWwobMWTcXTU7LTAhJ8oy4E6SsPHFki1Ps1YvATa7FtVyLD6sYjFdnx8VKeE3ykANpbN",
  "key4": "4FteGit4khHfy8Y3bcfUgTiCKK5o6UvF71bEttuqpJMCiCUBJzmXndjryedgGr9YVii9unQjo65UuipdBb9ba6aW",
  "key5": "3BgEbUrE98vM8ycfHjVWtpr8u3x23qNMaDCquXYoxkhBbwhJJruFU8dXPLMs1HGSdPcGMYJFR66MQUMxuLBvnoju",
  "key6": "497nJCRWBNob1q8t11Fe1L3J83Wht2D14wvPS2YD4nD2YMu1CBdA4aeLC8FVno5bt7hJTTWnC2SzbReARv312NaZ",
  "key7": "2hw4pNuHCnAnRYzp8pnAy9HmQqVSN3cTseydqWenKp7udhcE39MBmuX5MGsPDGVpfLH7jJE7q3SFJscVHvQbDx2R",
  "key8": "4Wi9woaCn5utMqV2esa9aekVrH991FNPYCyxs4pb8mfc3rJ1PH3TWE7ZPWQUeHWYTjFsPmHB7XcYCnq43TCDVVnM",
  "key9": "5bpvmzZKC574C6jbhGKDEuaQGqo3WzKcyDQLuV7FmY1bTiymnoaKdgWFPnWzK8Ag7bi2Rpnb7yT8AcB1drf24Yit",
  "key10": "5xGAqLQagFZMfkqjysCQUmVY4hGU1Zisp6HC6jMAGfzxB7Zg43CNRAJDE7McqTzDVTHo4BZkq1paVSLBU9RthGvq",
  "key11": "3XVk46hja1VD4XeEfwXCD8bikF6Y9MQGsmomvM856EW4BbdboBbj4AgC4gbBEdk23Tz7AEaujfwPeMc43sh7RNKq",
  "key12": "3saTDeNQX3Jf7f8b7zvdR7KW7b6gSWD4PAaoUWe3CBphHLD8Szk7rzzU1SowvdQ1eHq15hdA1ND2Vu2H4BrprtRj",
  "key13": "5LNv8StR6mM6sHQCkrKHCnYzs4Rfj35RmN4k1yksWWeSJ6baW1SEBFgNaTaC27dxKZpyna1cTXc6e5Dy9vYkJLyM",
  "key14": "5dcAbJMuSr6tuLp8VyewxUMBJUgWnu613EShBG1TTiDBgfKgu7w9S9uH2pYEXyhPjMt2ChV13yevS2DZhHgwxnqm",
  "key15": "3xaTwBDk54cL3fKuvMFP3hDzvySsg2zy4hXEY9WxMmqSrVSHVRsktA66YzUVgwUDtSUW2cqpx7UaboNzsPXXvb9N",
  "key16": "fhRfpv7wkX7s9CiaQ1AqSuekLK1wKy4JUmJ8KGxW2f6Ku9RkoRkjBfUhjnJCz2hR6VTCuZ71voJudY8MZPB6XNh",
  "key17": "64Y36bjDFbgvGXBrM66GecjZiVoAjMEHNv5KNtaiiqMBm5e72Co1Q2E9PKResDG7i6qJKfVx1NLyEDoC69CmnaoT",
  "key18": "3csDNTJoaXPo55XBzfobQk55wxUBBWjLrBoSb6G8ApntjcFxyY3uj8drYkKViu1HfjrmS3JieDGbVtoQTMaGpbHQ",
  "key19": "2fDiQNootmFCQSiKiWy2SX9KLpS6vSjNPjVDQ9ni1GhVDY8uYFEXBtKmuF6i23cFDVrm6CM3A341dzS5fPYZzTMw",
  "key20": "2muN4fBDECHx4zD5aSra5FUYZixNWcjXaypsdgCj4nLMYhBwmy9sXZKR3RW1oWMDGdEaBS93kBQfGX5xZNgtZ9xz",
  "key21": "2rszEnempnZJ8y4kUgkFG4vADRP6SufrTKh66gZY9tKtWemNrvnQB75VKNUzyD7RLioPNsWXYMo1D2YE41cFZuqn",
  "key22": "2ZnobayZcJ8nzSpChs3SfteE2bY1Tjhpq4EWUqJPjNqzRqXJUPRHL5Fy3qF2ABPpJMpevVgUHoVZU1Z52nYHSBXg",
  "key23": "4EkrzixJuyd2ea4PXuwVfDBQ61xfi5cxvjdSgzDzvKzGnb77L7enN91o687DTkjGQB48Q3BxmbyCWJr2mcisktd4",
  "key24": "Q2q3oFpG2du37X1uzZ6ZqnHMCb3LhDeXk4pbfnYMoUBEQhFmSaYpQJt4pc7BLJiSqR4M2AHKB39NB8ZTX44SFP4",
  "key25": "2VH5ktSBwXQcV4uLjkZSfS64R4Q86BVqeRdC4kHVWJPdcjcu4PDnVgWQfVKTxarPBWcphhV9qAb61QXQWVx8Dp58",
  "key26": "2t2s3gY3pDcoVNdRnYqoqPofkkpMGmKpFm5vAzYrFB5BkuMcxT1TVLyEb57LpqhiY8tbUqUmuNbBA7TmDKwWzX2n",
  "key27": "6C3nFbCxyphP8fGRjikEu2bJe1gpJYnAGWqgsSAeHyP3J7gaofBt2sJ5TewhJFsmpq2dcBEoSDGzyrJUfvHWPui",
  "key28": "38bqmyr7adfzyjGWeBG3o7WYSzXk6QMHeCEaWG88yhMNc1XqfX65d9VGZNHjXfwDbx5gyy1zjssohuNLvgDRWYjP",
  "key29": "4UCMEPpxG8N7RmayoLMnuCwy8LDrdRgq57QDap8q8DspidhtkoSv97foHxZKYLwYDCjNcaTuQvSp3fSbSfHYGATm",
  "key30": "3DAi7koBpXUsjPMvm1FqCsF15mz5pMqLfinwX1qQqWbyomSf6BphN4fB6pSvbRqatfzUT1efSyAhYFyuCVJ5cLBb",
  "key31": "3K1Bo1nkRqywfGpFJYjCPaDoPhmfhfHP2QZjpZ53X6UTZZUV3vxfN8X1Qb8RxNaqdMSuB7FdXuJRqtc5TKNbcyNN",
  "key32": "4yua3L2oRzb6GX2m1WQv4srkZZGY7JmCK9DmkfoNGNebPy11KJRVFsqU7DWtgN4EVGA57781vpFGD6dvU9ozyavZ",
  "key33": "49uiKT6bP3pRCdMTt8CeSfmsNkas3eZe1nmzGLvfTUdBMNTNjBUN3erzYxC7kMx9PkrffaZ3BRZD6wFmkHD2Hedu",
  "key34": "5adnos3f3Rcb18CwZALmSZ2N8MXqSwNFPgSYtNxT34uKnS9w1uhPPgYhqaqtdVknuTCEM6UcmszstJ46THahfJHm",
  "key35": "53M9xXAYrewtUU2LuVofBLXtjdYh2SFzixNLRWjGE7cSztJLtAGF2dH2DaKprv2cnKrx85UdqQwNRFnSW87GJXf3",
  "key36": "67FBsmH1PcYkMnTfYeVoxAFFWR1FSecDTYzxkc6Ea9gwoY4yo7xgAUb8hWJvRcfE5wEgcK3qbde1VVtbHN8N7buB",
  "key37": "21stLmKQbJJfVjF3vH9ki4sqAHh2eeg5AyL3ZQXThEmJC324viLh2GpTTTq7rXxt6EWZ3FGgNNiFtmfh1iNr1xfd",
  "key38": "iCWyMFFhVNw7cbSoCiQcRbevBiKjWCxso5uTLkv5WBamDH5o7nsrM29hDXhDVM1nPNvQE1i1ZxV2wsiGpwKp98z",
  "key39": "3QEN6E5H8dsvwUwGW8ypQ24Hzb9FVQEzHZAvkiL7srWopzHCtjZpzE6uHQapovRcuy8KKt2sqBQdLJQHgkWFFH9w",
  "key40": "4wF6mpBXVtavsLT6iWaAtw7oUZgmVnhJJ3sTJntWoo2WmQSgiL6ccHaGjKN4ENyy28FXDyMQoamGyXnQhMWgGqFZ",
  "key41": "2MMFMaZWfUmNKCCLaJEWsdMPp5KTbMmtxJ23kJi9cDCdTvLr7JxR2F5omGUVwoCmXbp5YeNZibopzKkgknyNUJnN",
  "key42": "2aeatMr8P856pkY3CvQQvkpNV57y6o1V98Q3sTnevceUPhXsBLvL2fcmd9yH4eG48jfQfrk5WtnyTMDJ9iyPo7ce",
  "key43": "2jvG5MPjAx6MF5dYkAsJtT1kzZUgv3ZxwbJB6q5SYdLi3mpmZKqDmY7syMDL37cBK49KzexTBszFx5DwNXwhFZSs",
  "key44": "5XM53yx8v1Dv3c1hLcW72DDKRDHPtkRvK3YyX1Tbs3Ncd15uvBRGwMW4bqZ6ZQmPvpVGgFNmrk5RzKfppQmQRFcq",
  "key45": "xcF6ALPS4S6aWQZayNGApmLrokwAeB8Dv6Km1Mq86c3jomWTv9HSsf7ZxjjuyLsXtGrNyFquV2y3yPaeXxf5JkC"
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
