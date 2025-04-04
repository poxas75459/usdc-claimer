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
    "51gWhz46hSLNHpP4CqbEJUJmRJMuJv8pp6qqAveRet9P4XR2sWcVsTNnjNV1oUwRVi1XqJV4VEv6qGyhxZgdsyVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhZj3BgDW14mrY7wGMfgB7ZYnMCRP8foPPP1TV9nuZdTWL6kndZgc7vdibWRXiZsi9JRK9fSJoJ4bL4b7RHesup",
  "key1": "4pjaay5pbxxNHAPKba4gDrFkd1vDnTkewA1TfA1gumPKT1r8cRnjitYfYtiLgffSpVkuVPUK276tFSPs1xdnihi1",
  "key2": "2KowjgL3fppZ7NvZ1xvqjdyHhH5FKugAuJZgijEpAGm5Yjw8bAbsT1LtYZaeBbnxCo8qfwr4de4ZVQR5CH4X8GNU",
  "key3": "2447FVMHUe9a26G7yLgTmVbL72Ho4BsbJa2qnQ8BShkAR69TPtwQMSpgkPGB8GAgFhv9WgzhGZHGoQSrEDBzrjpw",
  "key4": "3R94e7THAvbvGUrcPQx4LuG6iEGtAuCxz5FwBxyEL4ykpxFxg8821wjP5RcJpyGcsXA8fuhRCCikeFL4GitXLrE1",
  "key5": "43sDu4cAJihMCibLGTSbQryuBhABRGm67aU2SS54rmghz2dvQibzijRomQtC5kz4wdBoh6nmLrS8TDKvQGdjc6ZN",
  "key6": "2zWoVGpGu6pSWSLwe2cPpsN9oDvLPpP1Fm2N4r9FJsT22LcfpEBbWtNxZuQkq4UEd1gy7xJZBgWVrpaXqsHUBdEx",
  "key7": "ifdoVMRUGxE22vBoJ5FDJGv8Z39sWxUvJiGsqraXUFZFjJCErqJQc9uCDAifegGKSjiSGnxCLumbz8PrrqQCSJG",
  "key8": "4EPFtk1ABZ7vSeKniEyMGkqTjNfUXNsYzXzvwMTUwYHwua3jMpJAvuth5SJ7xwLjhaH5rGzvQDRpVUzMtGPrXKWu",
  "key9": "5vwLZaAzHf4chM7e22oHhafcjoF2cdWf2LXsncVQhqi64wGXdDw4Qfsk6wjvGdMecDb7aukSLTsDcvXp5ZzWP7W3",
  "key10": "4ZrHsqSY8UX4hSeoBAxV1fYhVE9kifcdeHMbJ3LW1X2vmn87AqtWK6WuLVDjpEJ3QqeqX59qfbBGtVk7GR8Q5aka",
  "key11": "5UBThyE2dzLqPLdCBqvhN4ZErHypfhGxdgXGukiMEEe2iXfjUZg1fBDnsWt4TNMpbTvL8UYUvjuX5uSX3XiBjdyh",
  "key12": "2QUKxkykQgaLgjcLpdPxYaEUmsk4SvnpMLvJAhJGczWa23akExSMW2PFJy31ALVFdxh4V2goCBsLTUuhr6tfSxJ9",
  "key13": "2TQv7aD3zDxNVPEPhNdTEpRHWpJeeHYZYhiwyJrHhPQcpo1WkUXeYQQ8zQfue5cD2sxGeR7qQjyd9LRME3kwcRkj",
  "key14": "4K7HKCREq3ZmjDbgHSFGWGETcyEXfySc3GB54WFbxiAZArSRL85iCuDHnnUQkeF7PV2VnUoC86T1kCfpRTTLfJDP",
  "key15": "4ck1HZcT4bouWQcvvyhQrwLw4LyPyG4r2VxnZMLHLAvfRoi2TS2Uv298j4UzeEZLkVhvzGdDJksNrRG3y3Pn2aR5",
  "key16": "5R4v5kCpbBZ1qhbSBorHyCB7MQBERW5vf2PKLBE1symg9kD9Vxr2mmVT2xyg5Vui4y8r4nTejAFCnw4Ef8iMVpeh",
  "key17": "5ecQWVWTs7HXdgP6YtyZpajNnr6GbCQ1XUFFdFTLvGJTCeLs2gd4koqQ18SJpE6aoqRv8CwANgYUKrLomaXpohqC",
  "key18": "28eBaYpK9aGexz4FgA2mJtmXShKvvnzyhXNYyyWAYaC2npJiscpTjNgT13Ef2aArCrihzwFWD9zAfuT54iZ1UpZS",
  "key19": "3dhiG9GXEFtDBVyyMrQCdH584v47V4joDLznzPUHQPsn3ZFVr75YPpavSHcUn9RJrqBxCpBCUoMB8XgYUdGG5x64",
  "key20": "4vn3j65zLk2drTepc5sKGrK4xZ19kh89sY6jCF9LRvowTmZVadxgXNqh1VJ6wQnsoCmofEfLv2H78y9HA2hbqxs8",
  "key21": "3FfK6FDjPTgJc7AFFih4HLdwBmGiNBTvALJPeoSp6ZrzRANRdRchh4CHui1pQ4B9H29bh4JsioQQSHVr86WXcFJ4",
  "key22": "47zEfwEPaTm6jpfwJwXFyHrcn7XdVdfSUzJ61kuakKhr7xDF11onf8iMDYL5Jk7WzVqWs4SKncBimRjpru8PuyMM",
  "key23": "3ZM6kjWiJTVuf6gaJLHqcoHKc6B4q1JJoBUyL5wbDPP6KWbYYTJzwPFQgQJGLEbUrbj44Hdjf3WwFSheDUQPAMuv",
  "key24": "LpEWYFdDX7ch5miKYNG7Fw3rQWoacswB5miZRmjw5PjEKc6x7hKkNejryssu3XTgAzimnGDm4fyDrSk346SKP4M",
  "key25": "4jJAV6ZQvjMN1TWBgbmhScgQdn6AvKeS2nuG6NtATG2YSGoTih7Fhw8uzve5GDoTzBEYuGLKtEU8bLgxYhzX5Vue",
  "key26": "2JL31LiUqZ4QWiZofs1Zq6ZA7rvnAmQpN16H3qpXSjRpkzK3FVPKaFX9YaAwsV9WDuyQew7m7bWiEAZ26Rd1nyhx",
  "key27": "3UaTTL2ZS4cCwQt3Wu1TegAdQU3faebikoWxV4oroSFLYjWJuFgtnZHbktT6hZTzagwXQnrRWoba7Djt7qfAbgWm",
  "key28": "2whiDoN84TmESFmENaqv9PpMFoVsxmH7TkyEDo4eeAoiDEZa19VQUavuJHqSSBjJ1tqrdMMxRPuTVm8kkJah17GS",
  "key29": "TSwePZ3v8R4oUMUFUQy9XyWWCo5f2ksutH7poh6xdD7KS6cXc4WPT1XN1oMw1TzRu1CfY19ptoXh3ttDq7aDN1Q",
  "key30": "4qhaB6SjxEm4WqgpUrspMp2wE6gnyfBLFwt1vBaiFxvYsDNVsQk2KcyNp6HjeLeXEFqciXXvsXzcomAvpX4wSEuY",
  "key31": "3jnVssJetRjCyVZZytY8fXcEiDsHaXTBdTJfWVQtj6CVPSKQtKxF7E7hyPzjuUg5ZiNyvL9snadvzMJACMCoQ8aN",
  "key32": "5M8HFgXs5XGSWwE6nU2ieWojfrTCVj5FvrKwSizAn5ETYydt61LhHZw8L68aEfZE1jUUxFsKA4PcY5JtQ4VRQqSY",
  "key33": "5UTdqvTnDL8UYdenDSrFTVCmbYTHXXezTaKmx5VPQQGMBEEiGHi9d5axn7MCZZJgEiLwmDZHrtD5LqubSN9roc4",
  "key34": "2MtERmLG5Y6VWDnmo4RpxzBwYc4ZZpwZANVmu27Fzio8tLKbBaXYpL9g77iqw41fgZo3JRMrgGqX3HVXHp98CTHj",
  "key35": "4MK6MUVNLKQn4d2aDVjTUmtEaw1cfNS2eFc3oDqtBveWTwRK4CXZ8uNw7hwQMMW1KENygMvEPaSCJvfmw9np6iLm",
  "key36": "46DJZ1ccmFn3Bj1gj5j91mF3zj3gRBpnz6uX2oazvXUF9qxV62447EVA5RfUMmiK4URFChkd45z5uZ3nxdo7tVGn",
  "key37": "4hpThm7so9fS1Jry4JiH1ohPZuD4fdqjBMQhgBRtScHhQj3nS3bh4wXCQqgVFr8SLtuPEZk1LuDMkpQxL8B1GgVy",
  "key38": "4nBM5swUEQnrFqXHG49scC2hbVfvB7Er7LsXya1dUGQDFtPDZS4A1ZA2AyK2ntmpQKFTUBkocJ9JsXxjdZuMRgyb",
  "key39": "2opHRooHvwrLwGsSWPs8vcheJw1JLDa9nxepEky3bCatzC68ZMmr7vVt3qMNsYM6ugucPA7TKJbKSwDnwk7eDxmj",
  "key40": "5tzWSH6wX6DeNGBjzomBkDRmgV3m21ippgT8y6HuM68YLRmJwjTmJkmoWxGi8FD1qB76dq8y3VhSmFvi67atQ22z",
  "key41": "fmmQ7nZeQiXahZGytFMQmQzX8jfYJ7VEHtEzzVRpnCiZjG9uQeJEHDVkbyrZfMYmrHpKqwpK11X9WRqfd2JVC9r",
  "key42": "2j5ttBbnyr6Nh4okHx6uA3mxPft6epnGQkCstNAuzp2fsU9XPGZiE8G7cpRKmWuBGGyrmzV47NYdzEwScGFvVup2",
  "key43": "2Pi4jRKG4Zn8ct4z76QEQUa7tGUTGnRbuQB1CdrDHLFSo61PXmvGKdhMngeSzk4VvS8nhDyZg8CUk1LffPd7Qqzh",
  "key44": "2DhdCqbKQvf7P1reirzPfr9XFngrxNCErXZYwWLf6kPKXD8rEN7yenNaTW4wsddSvb5KEBnDcJUe3NDMAhKKYenn",
  "key45": "3VMh9u9QZkWoufCZzf5eGWmV4vcHRKnRfqZSY8QZkcgh3r9J2A92P7fSTR46FSsWf8e9W3Zv74pUSFVdHtwL2VLW",
  "key46": "52YpwmhLgffzX2qwhTzTLAanbqR4pnppVdRHcXL2hP9AnRLEzNLYuEYnakjVK67RTxr5AA63GsPCpxqvbZGaHRvL",
  "key47": "3KAorJvu8SUTdVcoTxdXZ5Pj4BaKrtBGYGeKNyrsSQQoVTL1y1fVFHmib6pggYrcj3hKkkHcimU4NCS14a19Aydn"
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
