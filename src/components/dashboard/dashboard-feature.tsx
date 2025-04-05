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
    "2kxPpmuWtyL99euDN2CKWNAyyNgFUwXnnVBmAkAShJBhVuYyraWnCYXGNzTE7j2ZTuawxogC8YRiDeiSatj3NkXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtN1PKvCQdDDpG7jiWmnyvireTkSTYJXx8iD261nxaDLXAsF97jCZBdXXUyb8zrkgWBCmDsnA9pRPqN5QsyfPxr",
  "key1": "3gxfDbFw3txP6t1de5FaTMPP19ctEfYR8gbHAi9UpHDRiNJ4dpUJQRs3LkuPPZg3WZE6oKG8EXSKiP89c7hQjvyB",
  "key2": "2Tm7ajrpdGsCQp3ieubchsyZWQiLAxQ8JQiavyaAEAkDhMvjrYikMvs3bKgrdpnmwNGdMdJKT27guupLVbEHPsUX",
  "key3": "3AwaJq91rDtaF6i8BzN25Vt9kDRDkaPFtNSnvK4qNb13SMoeExK1S3RBd1yqgA7YkK72ULPSECVY6WrLtAUsEpL6",
  "key4": "2VxffhUNa82kpu4GgoPoGAg4dR8ixCeyeSWKZQ1KjqizUteeGhZwkZLTs5BgJ3n8Y8rZrfwA88JhxoP8hBLtdLTS",
  "key5": "64keJG1yBz4wC1rfk1hVusS3w16Jrw1Chp4xerkBTxZwb2dKcbsBhuhHVRro7LvVMH96mpcV8g9Jxik7GJERwLeR",
  "key6": "2iNqMHCGdrXMksHr9XRsCCQWoSX387yYyatb6Ud5T4n2D4Ly7dk1WYJNKSysGkqDvCVFFVSmmNLbAZkKjSVqGed9",
  "key7": "4ueXhschH4EJUS7YSeZ1MkRxdBSaR9ek3yYDds2E638vfX1FQywRgu1JhAj443QSmpj7r6Aavh6GNyWNYTSdCi4t",
  "key8": "2yrewcK84HtB5F7zCDjAWcnfboKYKnmTGV2xiuDi1mcQtaUGbfuA1okbDGyCpWTppCjY3r5Fw7qnwPhL2owmVXPE",
  "key9": "34J8gx3Job5cu6Fu3RBCgGfae9hjVU8ianXaM8sXkwyBtHXRau9pyeYpeb5c8zVkaK2vRUwdQLPyu1enS1dwdvqf",
  "key10": "3UPgUpebtYQNonAt4vbkFgKY8E9yLbiMT7dYDkPRDdSdXfBAejF2mEBSuuKeoX2V5c6oSAuvuvLqZsvVTHMWt5xD",
  "key11": "4mFsF4YTFrE6uf3a6jk5EQ6K4Ms9NrTPFyjgA7SAbAe5688sSoW1j3ob5S7Grob7PjEYka1xxyaP1FyY8nxfkLRy",
  "key12": "5ts7iPfTyzMaACMM4fmtmXcYo3M5kMjtXhDfBGm6jehrF2dXMxKbBciUBDBjR8HkCiwFXxakJMEvCaqotvASgBr1",
  "key13": "5mEnwY3JK424p25XmZLGfh9Uqdm6V7A9VTSThJwGNQaCM5GLbXdSdw2PQACGoDJycZoTvyt5yxqy6aBdsU1aZJ4X",
  "key14": "2s977Khz4yLAShQq5rs1m3RDJQ81kfoJ4ydcAGkxpG92nhjv2hhZHmwoKBk6zdH1DH7pUg1xYzwc7iwqTSg9zEff",
  "key15": "nUrk4hNex5s1aqSt3k4AHRxp61UnVXuWS1mfKRgFvBchqQbVzs7PqhSF4QPuCWkSUzj2WaMGYNy7mPQuow2gdhc",
  "key16": "4djTEHRZniAWQxAN9MQ4iP8pSvQBU9qWgE8Vc84N4UVBbsGph3gekmfLgj4EG7H4DbV4T4nNZVv8GNFkj5i9LWAV",
  "key17": "4DY2SEgDHQ8Vpic8jK1cf8WsmtfZLey5gAH8vdG9h2UNBJEZQ9YYJgFMR6AHiFpFCHm9vwApJjQ6SgyUhGcKttc7",
  "key18": "3fatedkLqjjAvCKxtHUQEmizWTzHH13ScEj13x8yauxagftYb7RH6cPhwuhj6wMtkG4EPYzovwXPEG1jpQ1SvLVq",
  "key19": "kPvequ34MBBT9vEZzMpMvGoGFtgaxpNxatxoYaJZVFBW7jitM4JUCCcjfcXTpYKroQJhWQpggNKQ5Yg78YNZseL",
  "key20": "3wWudQr8TENkLWc2qmZt5AcuoEQkQLTE5AwPbusLVYvYEBUj2QgxMMaXFuqakhShFkap9VXB4qAeYdtW4TMELbri",
  "key21": "5Yrh4jtNJHi5y4B4q8cDVZYQ3SbKPiVfAdoWvGScNqZH6YtuMM75sZvvKZXvXiG5TfKaNMSX4HxPJ42XNH2SPCx8",
  "key22": "2p1xmQp5aB4iUnoWWXcqDMGfJQ63Z2Nr8UUsdi8FWbttdaMszUNZG1BSdbuj6Rjx1XbVAwjiJiuaTHWjT8G8R3Qd",
  "key23": "3F6VSZQFbhTK1zzQBBEScXybydteKvqrWaAXgg6inHARWo3kD1NnsoJzgbsFHJsZ7dexAvJP9WnKhiPdQEqij8wM",
  "key24": "4MRBRniMuqQDUPTs3V9cT4KiMjTvS4aGr4CfseyviCq9GM2amQWzXuLe1kJhqjZH6E8XnevFsYJUXCVvrbowJQ2V",
  "key25": "uAVdCXLgziYLjXuFda3VSPZPurPMDtH4MRb9EANdH9xxHWdzsB2mXbotczLJH3ax5oM4UHtE22L8hpmZ9D1KJXX",
  "key26": "Z2U7dtXPk5mmDisG71Y1TuDohDyHyQLJ1Xg8CoYhopbYZ5ifJFBx95frhaJbqzRxwvvrWUWrqc61ow7gj5tHMGX",
  "key27": "3mx6K7rYUo367TDHkxAUwxr8qo2ovikTZJwLRzXmn4GiCX9fz2BUVeSRmUnmfb2cLRoxFECUhUiuzeSMYLaFSFob",
  "key28": "3WMDR1aqYxtEJsKFWwEfvNpZeS4yojZd7hbmPLcuKgZbqyYy1TefiMecejVfiB7DHbnZPn6Kdn2boHnR5QMfC55c",
  "key29": "5XPfk7RXQcXxGPgdtqo8vstQHAAJCCWFQrZiKpKBMb2ZYgGSfMGBGyNauRKJirtZWxUg4zyXJw42BeKCv5Zkmk23",
  "key30": "GPi9EGTytmJqPPzh7fJ8esX2ebazPA8VUrmxZ63LZbC2RaTLoD6JsjjcLaYz6Wrd4YgmF8f6TcL84bgR5Zdd32F",
  "key31": "3rE93pQbzR91AjXiGU8Wfa5foddo2EVPiBHWnZmfduNeDBMGJEX58Nh2dXANQVnyfvE9AAuMcsiLBNPFN9ygnpNN",
  "key32": "3XHVvPftfNJDk7w6uqpwEJcGAJMDjxfupjMwK1gPhpujnWT4rxVGoYsGcbD19MJcPSdMmoRVULEEx6cckmFSCGRb",
  "key33": "2HRNkZqMh1exsye1UVP6oduVHXGW8biBpKTDufnEB6AV7sFx1KXen8AQ1M1GBDtJXadY16sX2PndjVHHVhoXrweK",
  "key34": "3hExbBrV7ikuzNo9U654Z2eaFMtEzpqseTa8CkU1q13BqwFWf2qhCWuCiPCTLyxgD32EVgXXDrfqsshHaiyPTpeM",
  "key35": "4Wxhj1fwbeuTMCR5xxe6ow6HyHK8xUPmsZLbd2qBt2zG7A89Pt845krzkdCnefmWmP7RwKfuRbXCP5XnZ7wC3De4",
  "key36": "4kfegTdY74cKC32or5F63LMngcUDtTH3aTEonfevgWvJSZJrRJVG5mvYw2oG8WPRt7yMweBauQU8Wxu24wN1oYpm",
  "key37": "5RQHS3AUPWdgheA7RE4LTcjqVdqyC4Y64sdCXiyJU4CZ3LjS7EdAqMa3UY1k71nevRGrPxH3KDzFLma4nBrp8iUv",
  "key38": "3fmcuk7gYV2ChevBTvFUNaoZGo7N6afQkWWAiQXkAELSe4kphwyKnx52SSSyHn5yy39PM4nVS4MWPf5Q5yzTtvX6",
  "key39": "5xzVYrPmoPKdrmJiqdpDLw77uHQHwTDf1gkdZMGv63XhWnV7FiXt6zGbzbFXgFJ58kXabRWsymB5gAud5PVEkApc",
  "key40": "4UE63ybzFBX65aAam1SLgQzeDgEquvVAmT97AgPe3q1Sjdx4ANRbRR1EeCMuEf9J2pJDLxBwZ6ACAUCCp98wm8J6",
  "key41": "64tmWvLfoL9Kj2491EJUpL2YRiehAx3KLdqNX6MkyctHeZup64uue9cE6rjoAKuH7neRgScrgnLmvAR5cn94h2Zb",
  "key42": "5sshPMiLMRXgjT87etF21WT9BG8KFuDwjqb9tzUSSzJhBy7pdmRK5zrMmmgQZrJ8zWQJH9ktaqiRf8Gr91HgfBwE"
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
