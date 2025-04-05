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
    "2ppzkUT1MvwKuX8Mv75jG9Mp4LRaa6EiLNhJQMxzm4iTZjy7gMbR1xbLcLzs4dcbAY3iXiWcoTpBUcuWcRPiDGE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QDP9NefKPmqVupNxRBQ9wDUu2DFST95UbmZgZzPCPWmabUxSpCq5yGqfs8i9tvLRKDAuQ9CaJ33pZAq7VYoTQA",
  "key1": "26JC9jjGyEH4JKPoZm2gzgNUNkKwBNz1FZqeLoKATYgtTEHxwnSafezHWFmoESGraaBsVoVPLkmqUatjain8KDkk",
  "key2": "4kSJb1CiG7Vjs3LzrfsRfnHiyi88KdnJkpwVRxYGXkwbdUh8vwwUiqn7CAb1pPj9hJacsLxsMHR76P6p4LrmD5Ub",
  "key3": "3ckL2YKWkuuVTbS2Me17xdXWSu6WpJneZK3H5whMT2BrnQwXsgewd5GK5WVdEctQ3gqqsKTvQzjnpYHcMMi3QVNX",
  "key4": "4dbZKquo3HvxATvVvHKxRTJTeQrVjhkvuMsMW6DntEuXMJ3Mb1YSoQ2QTBF4YoQs9Ad5ADboZMZ7wrGWZEvS7qrR",
  "key5": "3micvQL4Kc6Q5mxrdUygye5BcbeZ8wEnWR5mTbCnW4ztVWenhEyu3v5HrvL2iTjk1TgqK8cdt2YVorA4RW99JSBq",
  "key6": "5rXcsjDJ42emx1rKV7qeAS7UEfqB8tLn8MGRufdHfNXxcBL48jfqyb9msWnQeLDoXS678718fKeTobyoeGJV7zHP",
  "key7": "4zRa2kDqvNKLRMyetnhp4vgur1CkR5sLFMDLSN6xwe43LcK1RLLmZ8uzyY8yt6akcMmLY9mdKoZ9DLQFwEm8EMip",
  "key8": "2zYD1HZVbtdyNprysENEwoY9N5pRHZvutaHcydNaXA2rGp7grmarca2y5eyF6ZFjvRvx9V6jBbHbfFt4UpdGFpR9",
  "key9": "2oUkm7VrMU5V27B52WEQkG2CcihqvPEgVDhNGc26PwkZaAfC2ngbWLmFWTFM8L7ToVCbdS6BSeBbVD2GAn4KWcX8",
  "key10": "49PNnevXFPT1nTmSbM98e23CGyAgq1nH6HYWiyJRb3zfL4HW8xZfVR2Xwe6YZd3nDDm1DK9bivstvCeeZbkRkYz5",
  "key11": "2coY8MWQfWZKKiwABRGU8d6DEvAqgNRGR5o3bm5jwzN2FiZ6GiKbz8WpcVPhEtTJyc5dhoizTdsTL4NG8vQaXeTD",
  "key12": "29M4jxnBydhCnKrqWuobhAcyRwWnrb1dvu6H2ZQnPDR6pn2zNuncfVLisspx6R1vKktULhtTV4qfZ9bgRwYPWukt",
  "key13": "5HQYsAgxm1KyUagdumPZ8JsEQDQP6b58awiRvGNq5DHr9CVoeVjLSbfZvLqXXgLZUrTKFcjBEhXZBoioKU4eWSo",
  "key14": "2DW3uBMh6dtm1BBdsZAY4Z88uSxWkPifUMQvjeWCULMg76GHB33s5ALBbmQdeNWtufYKJi8g4hvG1s4dJcdL1AW7",
  "key15": "3FwWJMAFB7kZXmxnn6jLtBssuJ6KPLTznR2q9cLYzXPHkeECiDLNQADg6s5zEwtdyt2ywwsaxohxjizF2NzuQUkn",
  "key16": "5Z7Wz4Z1AFmcBsq368gsbaZ2ZBvkMHMd6bUtJNKsfsTQVKHkGHF2NnX78zD61W4srr9fh8pFTZykgfyEzkrGV9aa",
  "key17": "4hKUeHu5h9HYC3FRQQ16GVR1hL5gN3n7qnsXLhsaicaPrBQJ3kZoGHt8vmYdCKZqB3cVhCjC8iwKnkWFBhYM4PtL",
  "key18": "NMckJAvDCYKzrB5ajSn2mr9UxdZkvs1RawR2rNzjhEAZnZxhbj89hg8dWpnrgJdtduopMHcU2YmCbmWhPdsMV1r",
  "key19": "2jcaWCRgkDDDoXByzTxNtDwD2Q6ma3N4sd3NL9SVB2QV3hJG7Mf8JfBUdaUxj5AHxCCgFptHCxJWCgwTETBa24dc",
  "key20": "311dHDaWuoAgbiaftMZSPnJFy4PA8nJb4cVnDcyBDUUhVfLQMC4hBkLcks1yRMP4P3P5ghWg5KfpkZt9t962539Z",
  "key21": "3vw2TGqaywJWTtx7hogc6hSAWveX5FLUkfsGCbSVsYcTC5MAZfmuDrqqc2Ka1PfjKZ34cyDaxjaJGTBXePZE8xZj",
  "key22": "QrWcfXSkyNjmpNn2EdZ9jLTcGwSfdYnufBCg4txcb4UxFvN3B3XXy1Gi1Dg3xYSMRsdSHaa2CezVBrgQaTcknpu",
  "key23": "5S75se4ghapv8ynYSRhFV2p5ZDpwFoYfz8Lr84akkmzmZFqVaBGRz4noXTwEVXvxV5SFx8xokQa9GrP6kzPTBuuy",
  "key24": "i95Fp8RDeGRTfaKk2cUWXZapfZsPMxrK6qWkZQH1Nggr4Q7EN86hC3vg8KJvPjQ4KZMjm9REYvR1wKszf2ppFqH",
  "key25": "5S9CVRHzRU6vbiao1c7SiNnZ23YJpwSMoLMc7Bz36Mv2X6bVQnzDfW7PZ4Pqws31nJsyEPMuV4opWnaZKi3wyLLj",
  "key26": "3e65f3rB3VvKk8fE5EUe3CMf8567WCq5gLsmUmYG3Uvps39rDvzwPXh7uZn6iUZrFZXQtfTJGSGJPSwPvVzY9HZG",
  "key27": "2j3F9DemugkNAXTmpeYCiAWfKUphnT5CBYnYD5YTNWnEWXTdPsLYHn7FJJ7RaDCDGGA5T1FuybAfPitu2VohRZx4",
  "key28": "DT7GKp9F22y4bwJRWbYNjfq2u33AVQGKNMFBEEJqrsLXuQbkfhcLSsEXbfFBRJw18Mk9xqc67Qwkgk611YGxNHj",
  "key29": "2Q1guxAErRwxmaiKswQbk9SWwKxbeCwgn7tE6iLvEiu31J2inCcScrtFWT7652xBa4rqnoRCdBdetVB7wbNynyee",
  "key30": "662DYHp8PgiNVXtWepUbFdQkLF1DrxyopUnL9XbBnrp6zHAUPX82ZisSMJU7w5siC1pEwhA3RKLt6ZNiX9DSgzTC",
  "key31": "57Sw4kd1orgwYWWfakrtsMgcpzkdS5aDqtqsQGWYDBtd5gWCEbV8MXHnve8bgANriGR2RDB9FTjCTABEWUzykm5N",
  "key32": "9wBJEVa8thkCEGRBQLPueHeRjwEGiCEe3XYTZwmp9AjCviwfcqRb2rv7Rj5W2cvbZWrz9kKBuKa7aGNR5bs5Szh",
  "key33": "2e6ggyaMgN6HVrueGQUnJjHqcaNZarJgEY8EN2khkyqijMfYbzY2FrvcgoHWpLg2e3PptceavBvvbEgJRkP3YXQc",
  "key34": "43sXV6wxgaELfzSMNDSei6xXa9YwUzBPHFAfvMX6cUza3XtirJVwSZAcnV96LndHFFSevua3iBy78kR9EACTw3Ki",
  "key35": "4Jo37nYrP3Uf3YGEGNGHt5UYtmPpmpJLesxjpTeNdp7559mciSd856WW6VBqbbasH257BRma1kwPFDoPJKACGB15",
  "key36": "VWMxNuPfj7wNCYAU2yheQYLpJpBzZS65x3BZhSjyhhKyPCET3SJBCxvhhAukfVqVRBxhRCg9K6Z4PNUmgzVfY6X",
  "key37": "37neU9X9e1SkW2eqJdCs7jVwdbkTX6Q2i9YxjsSKvVpB8FeHRzYVpj53tK5NdGXwY1HueLPJX8YQEg3hBth66DMr",
  "key38": "45Hsm8JoB9qUoWqn34ZHRaTRBRgYCvyejUEDLGRQVSyY5Xgrrevc5Eyi8otpp82stnw4FipFZEmMCQFb4mzjSQHg",
  "key39": "4kSpR21VYjWec8MhKVJSJM5SfLfBAJpBtHuFxmjdbZQPWHoTqKkSEQedrtbKCC2ZUNQpv3twui4Zdi2B8uYwGe5H",
  "key40": "29Gt46EizJ9z2JRSzjoAvCCcnYjmM7RKv35Sxz6SDjM16nM2cAZYehczKLbDLM3mNL5whucWv9xK1tqefYZKb5yN",
  "key41": "4GP71MbRi1Bvxa17nGHsFQSvWzXKb5q1rhJWdMFdLPigACf4ToXvgSfPVpjrj3mQRAZNeEf47Be2oxqnCv2CvQ5a",
  "key42": "MHXnTV6Fgo6vJuS7zSfxbCQvL3E3Swa4TeiSCb9CdXSHXCXq6zkEjxRJsKETeSJJfhCC5wSVQAjUw6eSk3JbiEE"
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
