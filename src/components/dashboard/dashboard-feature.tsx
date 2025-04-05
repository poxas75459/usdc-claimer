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
    "5rTaGtAksAHRXDyBtZgbuuomEUcPUgztJ8t3J4FZC8pccatGspt4QnQaMzbUcUftY2w5LVfzAzgKkor1s9JwLa5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w5KpperWCSVEtGMpJzMRbTBM2fuT2DmZFht9ZWoiCS7o5shkatSWtUesj62wHHqUo8VWErAxgSfoVf2A4vFTSio",
  "key1": "4besRtD8XQV7WhAx5kUqg1eCw1ogARi92qLQvm42QUK3U2j8GgXWLEvbXyheJzJBzucB2jriCcYnWkSz6VFR6BW",
  "key2": "5koCaCV55xrDzDC4HAZWfHFbyCSEV6bqNuo77cS7ajFZZa52rKvgrz2rzWpAhCmz7senAJHToUXiJFnGm2YTkQhy",
  "key3": "4bFDwQvESjv7YY4DNNFkmbWGkK1ZxgNQdeGyo4aacXkPtFBRmU5hUdy6xwuYKq1pJAERcqCCP11ZHbL7RZqiBFEg",
  "key4": "3j5b36vqnX5MpqPAvAiFHoV6Se1jHc7GmZizDTyJps1ZdmjWirjCegDehop7mvPKnwNBATLvRffCojWwHbL4gMhz",
  "key5": "5DxnMFBsSfnv6126kZdUKFPi84w61BTH14qv84eqX9azQfGRJnQ3P5pJ5Nw4z2sSeXiB5Lnw766Tb8Ce9oFm7Dc",
  "key6": "4g4CrJRPbQHNAgSAHJ2UFoyUqD3JBKtPxJX6x3SYABdTbz9rVFSjBrpr8Qk8tmyyWTTeTvXAifERcnQ18zhtgfat",
  "key7": "42ZwcrnGpEvsyH8hh7NNxEAQNCj8tARcNnRAph368scwYY6GwhmZeujWq9RyTyvFvNVcBke9TvNivSuy5wjjh7S8",
  "key8": "3uzZjrpkc23rsGrYR6xDEMFgGDCMT2hgTEVjWTkGevNjj8eUS8DPAzXPdEikVh3y4534VfkDSNsn67LWT3U4W9cH",
  "key9": "Js78CmWgbgLnyuLrAdaq5aa1ou1zy8SGs5hMtxBtzZFhUJjBUQBmDhiNhB3vsQdj5hn3xLREUu75bjE9BM8L7cc",
  "key10": "D7XGwerTXAwgtG9kkRbbrr9rbHRT4nBikzJkmStv2it3ukMSknWENWF9FidNsUnNsrBfvhbGNvZtRBs5hKERVtN",
  "key11": "5t11Hm1ZH2WST9J4gMrQCX3dotTRFXuHai7fX37x5V9HbvuD5xWtfGbWenZtp7dSmBt98eFTRyY4z722hMco7Yj7",
  "key12": "35FDSMCpkB4kzbee7aHe6ALMhUndU7MVR9RQqYjjoCr1siLhrmpdBcxxFpnCU1ieV7EPD6aZY298gmXgcDb1M4Gb",
  "key13": "5JDj9KNYtGajJ8S8uJgJRiSQq2GetLPwB33s1Y4vyxBN9WjY4W92znnFz3J1VAdDPrWn6GVpmHV2ybpAQr7sNAve",
  "key14": "3HFzYiUZeZKqzZytMLYswAEqdeC93UrZ2M6A9YNogybSWKd9hyaXTmy6duPYsyAUTAevHtMbKb7wDX8RHZDeeK9q",
  "key15": "3MfwZVVjvJGtT5qZux7t8QPBCVhusotsSwX3JdLsESkoswju9LHEAGk8cp9CMQje9EiCTSVfSMzJb6JS3MRmrNXR",
  "key16": "59XWrJc65PzXykp7fxvYyWsSeq539bP2X2unZ1LsiatVxrDjSTjTS5MnJFeGBEY2koHDDdxkW5Q2pDQcPCkwvWPQ",
  "key17": "4JYUxRUmaE8jTUCS1YHZStrBKXJeW5c3uBWoSAVCjMjKc1PmbXst1R9fvSpWEEVMktHBKRDrM7x39WaVV8WKM1mx",
  "key18": "3RgPUT4x6rvMBbVUsphZgSYYgYwmqUeqGxwnmsk1tDm3iKgNkrwi9vfyN5Xo5CuPcpQUASimtv87h79tA8BkXub4",
  "key19": "4bseUgkjpHW483nGcwV3n9zJtfkaBSzPRjkDBbxdseW5LzGinxWFwN1DkhWFAKB8TPMyNqshVRh1rnVPqdUEeGRK",
  "key20": "2zjKCNtutprBuJbCPdBYd8nY6ygWYbwzkMQswqFp5p6m52QLo3bcKxzg7hiWPB25DFHBG33Pc4Ke4mMXavkWQRXG",
  "key21": "2wnw2hXJ38fexq1dE2LSuwk7GdvNmfQYPPkjsj1xWEiB6X8B6jSzW4Qhfq3xwbeMKoPJpn73ywcgKUPQtnT7gdJN",
  "key22": "Qx9t9STYQo8niismtyrjRCHxejJ2muV31RtMnJi3uCr9QGDyfN1UY2NxBQKoDJkZzFvxUAza6pBXCxP14JzHh94",
  "key23": "2CQB1gtfTDQMqsuVAucYugSpQnGVcXFvXGL8F9Zy7U8tY16YBrdJG9vb6kJcbCR88rWdvvFYhyCrA7BJ8is3tNZ6",
  "key24": "2hBv6HvqMRKFPuYyJVH52Ydfin9mn5TJBigcitAfsYgEJWG8hkXJSaxAYSxdcBjCAEfFXy1FpU2E1Zg6TCy6YyXG",
  "key25": "4ncA3epf58DqhejboiHZ5ZaeDFRemPBkXVqe3jwuKaRbyhQpKVN5ZVc9hXEQZZPjpZDH8tPjsy3FXkVR5w7ycUgp",
  "key26": "5c8S2yiW5pDMBggH45QZZ8obbj2R1u5w4CqtBFpbEFS58FiDRjj72rXfUpvCC6URvPhUjD527NgWC1s85CVzvqPL",
  "key27": "4Jp52YAiu6Gmyiq3CJGFjN1YCYSr1By7cfwRSQe6R5xh6FxGmJu3cFuTfSHTLLE3bqYkq75Zhm1axYJwwajz7QSN",
  "key28": "21T43mREr3UUtuYawTrnJvcchwnAqyuczjrjdaCLBg1SP5AGysqoHYjTGzv7YoiZ93EAyBFsooyqkL1yJotjKmmE",
  "key29": "2HpDW3bx7AjHR1esKgNrm7TJp7xWRaZ648s4YxKwP8xiLkS6LocxwtcauVBCVkJBPYv1zGNbDEUmTvqNukY9KNad",
  "key30": "4Dwx1q6wzBvf5R7ahDsGqM9Y36h7uHtV6kx1Q1g7SbTKB1oKAgDn8nEB7H1d7N4NhGTSRRnkhoxuCft9f17WzgPM",
  "key31": "5WMCcPr5H45ZyxSjSMuyrowYYbqxrj4ekWsDFxfrwyfNYCqsdEDSzai1iDEZQw2acAuUSbFuURBn2Zn65Q3ipscJ"
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
