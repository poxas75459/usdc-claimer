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
    "4MXyg4EQ2At5AQYqHD7xSVCrX7fQmCZ4DQHUeZWvpBiqK5mJ6MM1QB2bCRyo7qTDC4XdLxkmeB8V8NhV3XnvNcLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZDehQ4CvjkmKEuzoP8NXgUxKggGX742aMdtgWkH9iMo7ScHSM1P25Z4cqVpjUaCPhsiMZZSaTpBTEK1bBt6BRJ",
  "key1": "5RoQdj9QMVHdZHWNDsv7v2GmdWLVZKyRtLemZa6TSTjw2rkYrWX9UiejmKSQy5wJeXmjXs5KFLmdebpF7TvsLFN1",
  "key2": "4nrr5FfLPoqeaXvKZLZ5z213q6LEyQEjHNK3LaxNKT12XZzAVE5vDr42s6rJGd6Kwsm9vE2wQ7UEXMC9cMRt8DJG",
  "key3": "5rDvPqmkBuTeGvHonhknAESVX9TV1GdiUsz5DJfJd9Z9pv2LJVX6ipK927eCkzaXGrpGyLF2dJTr2ZYSiohX16Jn",
  "key4": "5Uhp5DSym29Y7fbhYNoDpyAUEkHxdiN3DWWzS8wP6roe9ggPom7Drfqm4q5GfST2oxHvoX7Jk9MUVhtqEJqsWhHf",
  "key5": "4b8KkP6DMjWFmA7CnAVGKfjihEZTomJirmyDcb4pCb8bakzy5xLPtefEuAEBZQsMubTASJh7iMfdq5wysKLd3mYK",
  "key6": "611QKdXgudw6w69D5RvJZSMSrVHddzZRZbmZmubppm4vtJN6Rynmk3k3gFAMTco4uVJ8BXnZUSnRL14Uyc53L9cr",
  "key7": "5XUc5QTvAghUtwR41kDyGRuMtPLwN5eCAwbUL6XsNDdVJUDFqeGmYovEyM8qMr2NAeiWd5RA8yewetbsJS25kNtm",
  "key8": "2TuwQG67UtQDxN3mCchruUj4STfPL2thXyWjW5faWpxNJS1jJXxmXUh9p9dnktikzSVB2NGsHnULnDtgZndy92B1",
  "key9": "55xbum8bDHym3oHjBNMK3dWAyuorKzmB15Y3rtpiSRnU5inVPz8xyHFnQALAGF8pXnXMsupDzbeogY784Q3Hh7C7",
  "key10": "2SepmEV8z4cHcubBVFEuGLa7kgqpUbHY6Bx4hnKaXgBKBDvc2MLYEjTbsvTZ73dCtQ17JEHCxW8tcZAo314L6caJ",
  "key11": "26CZB9YPS9dfbMTNTFtmp2CNePatBFDXrAN1RS7aHE2QALvyuYBeCgWLgYthJM9CdDQyACeTrAWWaz9SQoDmnaYD",
  "key12": "3QDhb3h6qPx38Q5wy9StNaGAWa9m8BWsQLWh8s1GzQwR5iihCkH4wKYG7NxXApoMhGMygy1C29HpzUuYQ14LYBsE",
  "key13": "288SG67cvBqJQ2nHnwMD9H5J8uvp3hiGnM3B2b57xSZMw3sh4qqKwzMB2EQduNXHnC3xYmzFVxMhYgNFo4BacSTN",
  "key14": "63xCPviSPRh5d2YTmi2dk8r71PFqVcBHFYFYmUddiVbq9NM2ffE8ZrVyrekE4UaPadMWsdVQH1Kw2exMdDBZtJci",
  "key15": "4JrWAKMink28Udu9iix9p3TCpoDytQMKJhoXoRqU61mZxhduVprvckxTT5VXTsHeoce3jPGaHE73JvTunP2aXdVn",
  "key16": "4HGq2roJ7qTTLtxihU6DS3gPM15MeDX7okLKh15J6KZtAQPwjW7Pp8PBkvgGN3Ue63MMeSDQLq8e7e4vrNef1CDW",
  "key17": "42iof78qJfE3PvPoWbk8Tde4CJmvEAG5GdNxPo38VGyXcxQfY4ivC6MZKX6sznX98bPZEiRJDsBuTqPq9zdzsa7T",
  "key18": "3KjCWLhX3TrpKBnTJCEqZYgqwz7B3zhLLrqJyRq5RmBNk9ij43NkHEseoob9S2n3E7eqVY8DtDbWz7hnSLyGs1Ft",
  "key19": "3ftUasFDm1Kq1zcTAhoeEk1HH5Nffbga6Q7yyxgAKTLRxPd4EKKP7V8NfSEbBrRT53Y3Qwk4GHf9S9BrzvvzMQ1P",
  "key20": "4Q3ESmZvzaTcwTenomsrMDvKa4BpGmdrVaEfp8uurCFXGFBTLJMK8ArvEJrcuXffSNQgCNSLB3kHtYTHp3JztMN4",
  "key21": "3Gn1qrkWzcLR59ijtC1YxKvkNF5yNtoN2ysqKXhrQrTJ6nnNVzTjqVc8ugxZLa9FTgisTGZvahWo87yT8Vupok6U",
  "key22": "4FnzUxv58afiqZgjjEq8K5bizKkbtx1biVpyYMc9hDtLKzoHGXtoyW7KJA89u8Yd41JkhYc72tfwAabhRwkQ1KXr",
  "key23": "5Stsy6sjFhCnetsp7pSat3WQhw26VLPZL2UYUEJWCi4bYrZH7NUu569p6N4vdr6xpkMxLCgcMwJg5j1hK7WHGj8u",
  "key24": "2fM3VZPK6gSkU4vQ2vawqm6kDEc6NrxgFNiQbzZw4TwYY2dUBYz8uUwKfSdkpJZATQYLhc8wekt4VvKJQu4JtjAG",
  "key25": "8XVgifsCGzL1UPtWwGRYYiv2bgL1j4B8ihzeTAP4nHfBNXKCKFsH7McH7uwAn4iRZcFgoWJyALtEqRawyLVUzNg",
  "key26": "4guSnHYLztX7MBzVCm6CG8pu3Q1kfn7KBmDiFC34rgQnMP76uAXDEQGZYZsd5c9JsBp1LN46bKZQU3dPPjVt8D8C",
  "key27": "4XFUtMKghQWE2hF7Drkv9YM7Vdi7x5PXyDJotZebkz7AsHUSLus4pz9qRVLuSzCeY1yL7z4Bjudja6ytVdP7xDFr",
  "key28": "3mvNigVaSjCYfn7vKwESf3cd7RDbCsVmQ7cHBXuqd56KknFeXYT9yRSex2v9aNdQJRTUic2U6FMLB6bSrRPpsLrB",
  "key29": "QkK6iojz3pT3hTku8KquV9PApKxWRoYmoveRvAAJBcVUtXuG9zdMrFGYJGPYwFsV6hoKLuf2Zb85eZMGzDit8H5",
  "key30": "5RoLJN6hiVz6v81yP1dFTtqdHdTGCvAKWwZnWkNKDwYCiZigPXsuTpW4tKHTuVUX412fgF2KFkGD9serwBHD6xgq",
  "key31": "5rTc281kMv4PneysRhdrqgqsvZPxZL5ZB1Lbh5RxWCkW9kmsxKgDhGHDSYAQDYpFVCwhSpeYzzxnZ5bWHR3xEXta",
  "key32": "4ER29UkBu99AkzD1dnRDy8rfa2SUpaqzyD5fazTMQPEFAY3AutrqHmikZWfxeaeRNJPJp5aQEVXLWEk214eKz9vq",
  "key33": "3HGrKTgFGZfmtKnKpzbHR3uN5f7CfMpMHe3WLjDcLYZxWpQYXtQwKL3M91LNsxYhaxyq66Mb6CS5qzn1aZQP45Fd",
  "key34": "49rnH4E8ZRzqdf1NeyfuecD4Z1ogywYiYJQFDffAwWECgySY1SFfSTG7nQGcKhrwaps7kDj5g8UXnsA6iHencoBk",
  "key35": "5SMitxKsq1QqSPYXyp5CfaGW7nQoVy63py2H9zMjhkjGeKq87fp4uYxYTkzCqKr1DyTB7grH716cDHeohyTH3NGn",
  "key36": "3QBWzFEQfoWKkHrJZaS8FUVc1cyCYVSJUdxiNxaPNMJHnFE8Z21CFdDWAnRJbUFxr2P7huZb6GpiZUrz963BUbmS",
  "key37": "5EYjyyDaGrm9ZYzMXGobKSPx3Scm5nhoWVNWNVBEDpZBGEjg67jSm12QTpoX9N2kLZzfHozEe2WSk4JcJsnaWJVN",
  "key38": "4eicSuC1nxMwYRzZRNxHE42MQsK8H9MsBsHjsB6M2N6EBfG11RFb5fHdj3v7h6BEQ354BxZTv524DanDGPCapjDi",
  "key39": "2QbEfmq5AAHZSuk67dA4qEXHdH2XL9NFCdwTYmdmpVM13ZriV8AYKcYJXqrBj9ae3dUfSenDefaaQ9bG5YuyTr49",
  "key40": "4w5to3RGhNCe8pQbUjQCJhJaHvWW3HPR7jjcc8qo71ai9iEV1TxqArFFMWCR7LksYTqkMe9HYszC2hmtmXDzv9yd",
  "key41": "3nh7T8LJSU8pZFjbzCt6pgbqmoXmGVDDvDnWHdQEp8au3HP7KSVCDGZyWrzFT36xd8N9GZFTX5VjzzoLW6poxZE3",
  "key42": "3AJNCaR2T9Ji4SL8RYDAK6hGS8En7inmRgL7H1s3SYjTkq3brZhkdduCr1kHTS1t9bTTFtW2pPCJeFVuy9k3kXzA",
  "key43": "2WMdojkJqgzjnDsHHh3e351g6dm443b856uFSXQ8YEgt9mRNdxJMV7QurYMz1fcxAJcrMSh1LfA5rUFrkdX58Gco"
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
