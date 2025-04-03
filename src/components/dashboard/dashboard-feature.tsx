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
    "RrUJvjDjQbVZbmVgiLuvG2DL1Y2M1hW8GGpAtzj42Y7K8rHTDakAjRA1NDin1f8zm5HHnkJLBLmgXNs1yKeFR37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKRCa3U6NTauvJo3vT4E2TJqSaKrU6qeqt56HV6TYwxraVQPBPDxstoEef5EitPNbZbNP9JY39JNGp8ARLBtaCa",
  "key1": "66tacW2LMzinFgTPoRigQuWozuD5oM3vdagn6BCrFCur5f8aafGFn1EwzfXhNsYPLQDu3K7gyZS6w8mY43ckq6Nw",
  "key2": "2eMvNEDGUuhJs1ka86LBR4YG1rgVswME5vbmWaXrNXdyd99xuA6SbD9gKSDrHb7cpmsQghpd3GN9j8zCXey5zZDg",
  "key3": "5UnHWmYbuGQDH6aFw7nxPTaVukdXzSFWLQkEBr4g9KzadCDFXy3dPKpaLon4gShJPr3MhmrWobvK5ZQhnqKMDa26",
  "key4": "ana6T5vVJJbT76kb3LE8FkXYbYoEdqStPxem1MbdF7Nq72AF41oKy1bapaHkzaHfzriCyATTg3FmCLDeywBfMq3",
  "key5": "2YHYpCuXDZCvhKAwWeA9ayb4WcBmNZES4knTQxBzUfNEuUNTcXxQgziuMMS8j6xtJJBZdM48f7ne3ZVBhLNiYF65",
  "key6": "5pAxWJ4ejATWj9K5nB1fiYJugEGVDpwdr4UiqH9H9rYmswXEbhAHDC2ZpgAkksLNmx3smqtMRRcsBfZRJvGAWcf2",
  "key7": "28zG6jTHqRB4PZqLrN6FdFsS7bhrhApWXeKeXhJK7BandrubBVBQwLcbAhSBKhGAoqDqqDFQsCt5CTRXV5uq6Dro",
  "key8": "7jNZHETjzXcoNFqiRAtXxSZcMcG8ckQufNkWKRLk6r6mRxsfpmkJtPdCQNhtm8HEBLoL1Ey2hXoEqh97iMEULgs",
  "key9": "5bGjbB56FdGnTEFXT9FBhnBt6TmJf5tUhtpCHKK3HHQ7HcfBLtTbZNPRi2intYaxxU8zdaK1QaZwQcTuRNTVizmb",
  "key10": "4ysbqdRuYSA5Jk8swMoLAHRMMfnwnd1NCXBF149tvEM3Ma65ewsLBgASWcvvJfAESVGrfLf6LQ8D1xtwgp4sXS2c",
  "key11": "4buajw7Jj6B5E3BAXYh69MUUXFptP1DdeoLUorEreHo2dnjDXBsGt5RpygyjY13mRd4N7ZFZajJpyBi3GSYvPgiP",
  "key12": "2U4u5pA2VxMeCtYpSDsj7eUiQdwK6kEGDsYMH1jHXMAFUo9mtbd2nEBMcPfc5x4Q1MCLhbjn3hokM11KQ17gaoB8",
  "key13": "Fyudh7MBWRs8WLMZRV5pDh18iUJC3MZjj7RxvHyag5FwmgFEXn7P99AYt1wRxR3ReKzNyUsBmwZaPEDD6h7ET7j",
  "key14": "5AGW9sCCwc6HxiQ3RHi4Akkdwp2HuQNbvAa7Wm7a3rAty4onYMJvEEjGToyjoSoZ6KvHpbfkRudWxifpT312ZQWb",
  "key15": "3RVAv21tqy6pN23bbLiugkTRX5nh28bDMu646HhmecL4zggabV4oXD8Y65x79eF7D3DSxb8UyjrySQjT8AKdVDxE",
  "key16": "2cb68q8xfmGoEfqAJkkwSRftx1kb1PCvGuVVwTMnkNzpFTee2usw41hAvBpMDPr9ejLHRtGpwtPFAUVw5z7Z8YjN",
  "key17": "2k9fKmPxWhJvtfo3Wzx1pPoA28c1sbPXNdbyLgP7F2C4WosxHCHpZu9Xe5VypemGveZEEvKq4jVfJPY4w9uqyjtG",
  "key18": "36nE5QQVEYMEMvvSSL9N75gyUggv3QwbCSCKqfqiCJ3b6zpvWFb3pqaVokdd79U8Gp8QTLCSz4guCUDQPGH1TSUG",
  "key19": "4MU1XQ4KPhy7RkjSfrXVhKsq6T1vJxpFen7Js6oDsEQ6xSKZ9PVrNj1azCSYJB7e77ceaGtWq38YSsGQAtc3wLJ3",
  "key20": "2AJ2JjVVbNZXVeLwYr68PS1dGCCgYfzfAMJ1WT6MUgbHZgR1hSrSKzkxALwjJNmvfh3f8CcBaHKrQMdVQij7VFwu",
  "key21": "2Rgk4zkckbAWAgTzs5PbsgRZ21fBU6tBX9CYgCvCiYvsoefJ5cxHZwhnpqpabkJoBC33EbNW2dauhEe5YGJCf9Aa",
  "key22": "2j9J1DENvYEo3CfXcJxtVeRRUyuLX1VuxJw7P8my3fR17zDbJ6kRK8TApsswxbxiqVBMecu16Q1jFbB2k2TdDD4P",
  "key23": "4tZjDmocTX5KqEkG312sVS99y8Yxw9Gg9PwjXEMFwD16adAQPGsGGKZ22DyNYVs1ka8aYi3vauhgwrejgXH6hGky",
  "key24": "5xLSbfznbFQSCwYvQrNUwH7izni95zkD96gj6hAcCdxawJnyQzmRroQAn9KWDiLKJC1TMzamW5MFteCseuBkL2om",
  "key25": "a4ueVeS1Lr6q8YX3KydL2r8rdVSm5hyU26i6e1P4FFRfDVfVuHmGAkadeM71NFhkUi94ZcPjSqASWGqKCpLgJtH",
  "key26": "4NPEEK2FjYeHVyZQ4W3P7zp8Nc65sADsu5GmEX8XVj22hC3hvN2QwERK4q13EHb3isnBNWRLLpYh1GFyXtiuGBHB",
  "key27": "4FkLP8coNUACnb1ybYfqPTPfVnwDRoFhBFzvYM6xYwvVrPYbCt5po9TKrnoVWv8N5iwG7CzgikkDJ1BL6QUeSZ3o",
  "key28": "54jvMLnp9qA6MWP6udxcwDkaoKm7neVmCooQ8mxQkzuzaxHTkNnfXuwTtM8JVMqYHS39xEgrEEQqeSF4hmrP7sBa",
  "key29": "3jVUw6NstQZpbUkYk7vvsLJa5gJxRAyeLwKYZJd9n5K3PxRmDMAyBzj6z3LupMjSrJ8yZDFnQu6ou3Fxt68DaQqZ",
  "key30": "BmW2hs6SJdoMLt8R1DNRYAeanadJDxjkuWWM6oS1e3MhoXjFim8UkzFiunJ3yGrGzayyysrpu1i7FnesVWwMEKF",
  "key31": "23bA3QT4mJ3SR6XdUGqHTvARJbQUmHR3Kqb8Yic5JzBz6bQ5f1gzk9Xn3Mgx7G1uyvJw4m6hLvX4hpqdiy65WFxF",
  "key32": "2QpsS8xq3CTEJkoHTpPfFr9dQGY95TXVZzvYcd8LyVu1v9TRzsT8HezQ2bZYZUxcGUiiW1YJaTev6DGPsHELQsJ7",
  "key33": "PJs8sxu1HGzx5K5mDQxE62a3kkCWBMXLzonjKZSnAQxygqHXGwat4sai5Yx83kxWAYnQHLE8q1D4wiBvoYeH3TY",
  "key34": "eFD6BWLCN1xT731ZQKMpTJkjFCgWgewxeLjptvMB4pYBoX7DAbPpvKF3fKJmXEkDqJsYJJjkydm4DXJSPP1DNma"
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
