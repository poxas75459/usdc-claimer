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
    "3RJ9hW1Yic1dUonbLHaGWgBfBzK9iU3ZxRrTDcmyy9wdo3ifAekGMRRbn8XARzpBjLT9riStP1Y7fDyY3YwATgrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHDw6VEgKUa6HBsQgAJCv7Y6U2BJVN7r84taqUt5uG238eVADFk4cAeWhE6yYwsiXTQPtk2cyuobQr9GJUWFrbA",
  "key1": "2dpQqS56omyAu5rnKBN16W6x6jEVuHCPWxgNjKi6TksphmwXtvULadeQ1WmrXFdLefmNfyJzgsSkypxdsvsk2cDB",
  "key2": "2zawH3RWMXafU6cPgr3GJqquNg42ULtNmig1jmFJrxoMnL1RMETsGFVMFuvscMnR2DwjFdeKSXH7Ztxmc1BMHvs3",
  "key3": "4zY6KYKbztYtmYq2KnhZB4YTS1otvKLQRnDuuUeJoC5c6zMbBkZ15rK8MYdVBQZCxVuJvL8WQyovGk33SJytewri",
  "key4": "2SfmNTeFWFdw5bGAPNxpMyHcHBycfT9ge3pfnyjYkGcxwKzCfkSWkUcZK11V9U2Ht3fu46EM16wdzDQE5fD5D1ub",
  "key5": "28DbstuxEjqtZVgL1irhgT1hCUSiATqYLfDmZ6MqCtBDAxLiH9ecfLcMM26wYpXbzxcm2wJqg6FCKT6PX4YhhfCr",
  "key6": "5RCqoFboEpZGSVwL6rFVWxJeMtuc1AwzQdsH6TPYbNm2gK5zyy62nLXsbkj7GtTajTMq59Fnm6UuYbGbvSfD6dT",
  "key7": "35CGvQrHLVpNHipYYGxwzwyED1sE8i3GmP4ggK2TyKy85tK2AkpuSP9DT9TorXLyrTtNqiA5m5gZnt6kJsbUFXid",
  "key8": "5UuKurF5TKLSaUwoU2x6XajMnrEmmCACqfXMXL3xmbi6UBY5HF2w72x5aT2NTtEH2t78MQCPBzqmLF5WMLSdzy1q",
  "key9": "3WnJeweLLMyV9sjjmfhUEWXV4Q3chiztUejor7TsR7swNkJZmjRfjCocyUfYsqYdJJ769xozWbZ6frja7CrQo6qQ",
  "key10": "c5ToFKzynsQtKHXijq4dK9U9h1WBDeemLxZkGhaHjYVoFgF6RFduvezKgsaztApAsPpShRSCxHfuLCPEPfbyvXw",
  "key11": "5cFHVyn4zrN9f8wH1E6qo5xdhqSGUTpDEPd3VaMo59WToizLaycHQfU7rPmZkKNW5FJFN7mPwKHfSRPWeWbPdAnm",
  "key12": "4Qt1vdVQcnAQH5NviwXAkd64rdJy4JVo1nBsEFZGX2QV9bq2Rsx1a5AqCoUEZ2nsbCToXrGRjyq5wG8BbpREtfAd",
  "key13": "2C4wu2mhd36fn1jMYEFz3ev7FXDUyzadsKBTZXEgvEqnvMYYjrPTBuFAbJDRPGrFkbgCcFpFfSYX13u5x8ShJdVG",
  "key14": "4c92hiZYjbR622BwDucukMRy4SYEE4Lru2k1fnFzCyWavgRBWCXLXXQAxAUhk97xApSxpb3KhjJgoKHNTQ8eNHY",
  "key15": "2of7LhkffpexQyBzkkqH2zbJqe77bNB3VXxQApWSpQEHu3Xwv9RqwSuhB3AZiivWFV2U9A8VpC5UyaayF4BYLtXg",
  "key16": "5fwNtwRKPa6oReoskaiDpANbzkTuoMXBJgULcYRXcNDFA49m85hsLHehULAHVDJ1psqEwwV2XrdTayyztjAEpMAn",
  "key17": "34LUyW5KMqxX9mRUHnPrHPuCo5iGbK3hWH71S8ixEdm9QTrR8cxoVxmtAk3NyATWJ3ci59VtAyCJ6aKbJTJ3spUo",
  "key18": "3Ffa1CBjHqrdyj6Wh1ntDAC5VSnmf6i9G3Y2knM38sufGzpMufisYtDpczHGSBNyNiDKWVPaJEW7EqHCg2aUqukP",
  "key19": "2CutxKcezVjH4hdKNVmmHVfUoi4YteMV29nN6qkVCmzT6AGphta1WLMB2gdrx7nDjpBqh5UuxSVmdca7r2kBDmxG",
  "key20": "5ShDFGtJnfqMe9X1sxhUq7pPq8GpLtCqHgcbhAXmMYUHTUhCmop3MtTi4th1TFVUZRAHpEG1HDyS8mkjkgvTnLjX",
  "key21": "48Ajy8hb91wnLZruWJMycKeooiNCT5EMd5aHZxmRbAjUi1F8fdWeYmfEaG3adjerybky5SF18VibLpi3MySawjmS",
  "key22": "4CGgAcpMAZCEQTx5vNoj7K7o37PxJA7PcRVLLHvg12ztwgLnnSX7kx9NpuvMSUKDnTEewBF3AmKaPfL95R5yZiTz",
  "key23": "oj1Enz5KJjB4issVwS79BGNBJ4Sueq4TkTyFgMMUd4Sz2gMzZ5KvtV45LimYxjC6ozcNgTmK7UbpbaV3u7EjyEv",
  "key24": "2D2wsnvsLE2Y4o12wSwxyTZbJdAyWD7yimtusVjgcEbzPK3cfYg8anZbf2BGzmoYKWQS27oJZwm22hEM2C41z7C9",
  "key25": "4ExqQknBdi3UUYMW8sdWWN6fTqF3noTVRqXvRhiKRwvXogKY84c7C5seNLSFALfTKBUydDGvBGnLC6nasKwu9pdb",
  "key26": "2N5Fw26WQBnuRWAFJZkzFhWsLu2Pzk1ECUMTzN92GUBaEbJHh4SokMyGc7jt3uVatXgcaknAoWmvQ9bKbREPURMq",
  "key27": "364MpVERx5TxS9qx4c84m3GXzb8gwEz4BGRAEU6i6juZPxTuLX5b8mRYWyuVYrTVZbEY1aLFcSyc3qiFFU4AkJ21",
  "key28": "2TcZX4QtbRqnbv9GnthXbScLhyA4ryBEQ5ideCb57NuvDo575LsdLHFcGo89kJzTi9Q7GssXXctLgkJx3gD2eUuc",
  "key29": "3Y8QqEyUPWhC21Kcjow5BcDmY7WpQKs6httfRHh4bssLqwNRyrjKYWAnBdcnqouPx8oVFUuH4BRFhVRGdvjxastg",
  "key30": "2vz3TpRuA4gHi6XcMkzG5mmR7aPsq2w65Y9DSynr29boLHLpYD3znwqmLwzYS7ag7EJkvY6SAxqZqXinMeetN6QQ",
  "key31": "5N4jd9dU6m55LBxLK5bzuQizdav984UNidFz43se8XbZTSMH6ZcPMdSSzphm6QdizaMvdsqmLKxRpaRCgzYQNYFV",
  "key32": "3ABqtZgUEbo3NhE786fCCLrJuMqSF8dMYUz4TmagjDjmrvY7suHH83cFz9aJdnskWLXjDGz7CZPiNDQP3MCStFRV",
  "key33": "6mKxxnMpN1GysABVRLtgqiCmtMo2fYCfGpppcPrc3CKycLxpUfpBsjF8WiZpVFopnLww92deTFQJzgj9XTxbgNj",
  "key34": "425wcA2YtVX9MhBRQvTtdhnAuuJY89c8848XAVbQGyCz8Nf1hHnQbvktWV9RHW8wWC5ETVJud5H8ZMe7YtfAFjRm",
  "key35": "Di8FG9HM9NckmeeSPcGyEYDNCPovAaDqgqWPikXfaDHmTPW1kfvcbyQDEoDan13NnRRPHHRh1GRvb2VhdZT9noL"
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
