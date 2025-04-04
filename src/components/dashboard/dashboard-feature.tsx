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
    "5EGUXDu2BrsgRd6FW2GcHbTMZyjEbxzUVvje9kAEwjFn1sZjUCf8zdH6XVxaMDPuodBECUXhr3MehRn9MTVdpx1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMymrp9k1HW3u5bkbXftffmm4fW4VL16GHoREm6XouGmaXxz59n3KrCMykd4So4wcKCAphhmvP3P7sxmFLx7cCp",
  "key1": "47ZYxzQBpV6ehmWmA9zU4K9PQq2CjfEH35d9nWjHLgRpyo5iKJXcHubETzHHSzAmKJStNKaCnvEp79sJiAng9KAU",
  "key2": "WmwUk1s7DEswEd5TeBBWvy41afFefXUVE9kgpu9o2mLEDHVYPnyXSdV5jCY5AkmtLjJUgBdduKTiFTFpa4wH9wH",
  "key3": "5v6JTUUXNykAP8rRKMMaQbXa4ecuHGzqN2gztuAvmzXsowUjWmtU3dEd6SnHraC9BcUsxEmhhpmEznzLxyNdJSCP",
  "key4": "28TWwT2yA3gZnc29Pn2m3DpiKXc9FdvXGxHbC9sg5W5ipfvi2Xrk2Pu5re5oo31TMN41uuSwrP2VhddETgab9keT",
  "key5": "42cBXfXTCujok61nTXwKfbmhMT2hxwcu1wbtsD92fXvXQwsy3qjWwnnk2dRnBArKNKedDu7nSfrLsBLpXrff7yy1",
  "key6": "2GzkrurhWpZHurW1x9KWud5YDd4xBiofSUQY1dzyaBxATL7A5Aq6TN4UjQFCFSELJQ6gpTDVt9n2Ur65DuUFkxo9",
  "key7": "59RwEfemm4wqBya5D2Zoiunh2vo2C1ZkG7aLBMZCojCtTcbMsiVh791np8ZGhsQJTpLu3ib8wxtFuiRKvXZWDhKo",
  "key8": "AtB3cHLetLd7pv36pqV2QRTrDJzxrez2mANqRPoSSgU8KypEyYR6vRqBYqKV4MvavwAN637C9PwxPyMcSURWNT6",
  "key9": "2h1ntE32B4HCUDeUUPyDfee5UAmvZ2K2SwM5X8JinqmDU3cJranjMTPDfhE5UYpWtSyaLB1W53iwdBbFGdzFiqwe",
  "key10": "AwFXZHffiFCi7d4EJM1dGJ9989mTVNzhHJoMwPgZudZwdxyc2adAFfFgHChaN1Ch6STdjEsk3vXaaaRAepgSkny",
  "key11": "3Tqi4HPdVPAXeGQ427rogpqkfSX3nCBnGZ97RW1NhGPvM6iCQeZjZri4ehsVzqjzfxEZBx5m3uAdRzwAG58RifYe",
  "key12": "2vnBv42jmuCfNgNwX66os9A6BhVFr63zXUF7rg8HPRX8cQtghrXh4swGrEj9jNgEzPnyNGHY6oQZ1JkfQDTow2Vf",
  "key13": "46PG1VhFUwK3ojCEU9ypKS9NtnhabKu5oyuhoaZ87C17cpB7JsE1woPMkQm7VZNWYc2XGzk82LJJgeTrae56gSxf",
  "key14": "3w9U9koB7orgy8yoRDWYXbjKbr9pasdzSwZnbXSzVRrBdYsvnmcTvztfAy2aFVnFbdcSTgw1HGqofbKdrQeorcC9",
  "key15": "4h59QBbsDidjoaBY42dV3FPzFpRZnkXGM4ydrXuUcPfkRYxJJApawThPSXsMGLCHJP4ynSXtUtGRBKxEMQWPKEWo",
  "key16": "2LLs2fW3ZhY1rkEyZoB1PzKxCkF338QCRpF1Hj4KRuNMmH6TYSBtCS5axHm4e9SnKgeVbakbRFvibJLEenQXwcJk",
  "key17": "2PQezivAjd4krVw5EnmaD6wX62eCZu8D81uaoKL6WAyucG1HmF4R7kk5KMmdFxJgHHwWT1KJjeWbKzr7QzErxD5q",
  "key18": "52PaE3NxnigPui53D5m67FxG6HcYNcT9Lj1aSDVBsnqLyU29ZrXoX3UoBMUHNJAVySF4Bc3vhoKCez6kFHS23KTj",
  "key19": "4J6n5xds84iWnjSgaQZEbjMj39m7Y7tLgDgERzdATaFgin4JoPUGk13dnKGXTeh1QLS7zcLLTYghsBp5PM3omiRz",
  "key20": "5CGEy2tQ9Wb1Rbzq45eXgGcV9deVzYHHkzie8xDECoy5eGLsKu9aumP3s2hvQortvZSDoMcFj5bB467sU3qyZ3KD",
  "key21": "2oVJPDCvaUfF1UjQiRnULtk4Q3PyprK8h6VtUyddc7mGyH96MVaYzyq4F7EvhJbHBSiTJAfXphZigRR1bnVmuBqg",
  "key22": "2H1t37jk2xxKAvBFDtMeRswwA8mwALMCJCMdNiSKbj9oqYsdqUCT6V9qMMgqRPGZuAitPxdUDJ8ToAePxhNusMp3",
  "key23": "tYox64HjWTiZSMzpHqZorsxykFPs8tDNBextcJYKRaAdLjDoDB4EeeBkhrQc2KeXRRXmHkZUVh9jccWgsqjo6eH",
  "key24": "3Eg2nRNoQ8oBDbP9Hqeqv3WeMYwdeK9RrdAAVTTvviYuYD9X5wPmBxLMoKkpRTstGTpR2vH7kRvLTyMfihFEujhx",
  "key25": "2AVdVxLbi5XR3qNnRxzwYkUW6j1LZutG9z1usK2HKbm94VQDpUko3fSaeEV6UYu4o3MyrwSD1291R6aouRGtwQd2",
  "key26": "5KykqBSwp2AqY2SbXm1gKFFLfbzbATswcg6LoDZ5zSxySKBg3Qhpqnzb58Bena7usbza27tCFSZCkLzUqkYi5aT1",
  "key27": "KMNFF2yusmgASU1UZ3dj4U4VwVdJNSyWkg912kiHX2JGEWcwNfV3pL6mUzDpWqecSAFqHwqvboVgjcWEmTRhBsf",
  "key28": "3m4hvttXY9Yz8LD54Ccy285Xj6vaZT2E7FgKBrJSLDsMrk4sooo4F1xcd1W3iXFnz8LgmkKbqM1jjqZ4mdYVspfY",
  "key29": "5vrHu7NVfqQZaPiEoNe6Xj6UQiY5PGJiEZ2oMBvHA7V5wkNPvuiPsYDpzX7uGdYbxFRBgMmm2iY9kAquFjxNEQPt",
  "key30": "54e2e6DBwKBrbpj3eh4WmGJ2G5DUkYCQiBUUKBHJQJYqeiBZT3jPWKg9vA9KRX4ir8Ayk9DXuHZ65BfVRFsuXeBR",
  "key31": "pyRWgP66CBD5RvTaHZpToZwDkP1YE3Foa6VdCLzfp4WDzGUrmNzSFhaQ8JcxC1vq9PNTWudDXR5qtcgeb6A2tKG",
  "key32": "462t1NmQG8cTpQpBV8g8SogJZDympo1JaNkEK4rBB78T3WRYBMqTDefi7mZfuZNYmQEEmR44UYAnhwb6vtQM7L6S",
  "key33": "eYNTyxYzvNW5SN42njQ3FSkm8KYCDepQdPaLBDPQozJaACQciSxaLwsPTJujxxtCw6io98y6zcaDCxWsgxzQLxp",
  "key34": "33WmDoxTw3RiRVg2jqnCMAsV3Ua4H7g7KWJGfL7upMEW92yXQjhFVEqaDwxsh5eunnvjPLLgTmFWCTzQhzf2zyz7",
  "key35": "9caiNkxVwk17bHw4F1SBeDqyvh225METX8F7WzWz6ZSfP6Ar5ChSdNb6Qi4AZtkzKNYSXYZvFU1oHe3yUi9LUxC",
  "key36": "5N4xGTj2XMJyE7SnEVEVkjFK4WbvgvVsnX4ZCNoM4LbFP3eYK4vLcVG3Txxea19XSRbBy6VaAPpJ9EZNYHcG6APN",
  "key37": "QQGzqLzwmi41bYarjd5NUFuipv2yeJQKkJB6D78bHFcnY2huKThfqyELi1ResrDJj8z6Hd2QCy2jGnbCMhJh5xB",
  "key38": "2NLqK8ktbgbJ4o89X9HqAFNpr7LBkFdBRvV7v3fFtNYB74zysyjHBgbogjTEYVSUbJycxTKTPrrq81Mz9iyimNzT",
  "key39": "MDnF51HhtLzie9YwEfKqsPpjirPFdsMX4TYRcPGuMcvcdLQ99K9fQ3wAiH4kRyFJpTkwuUaTfKueTEXsBwFiBad",
  "key40": "WRibQv3ga59Ynyas7gfBrH7TBngRLugR4Z6RURwaS4zooJ8SCZNrMqnCLWsAkPMtJaoXfXM3rmFpFb7sNwnfA88",
  "key41": "3LgWpRYcavHau5348JGrTPJMCfvc1t1e2821NTQjw2BT13HPhtJaKLp13zVcE9atVLD3aJwrSHPGzKzZEaaCmvvN",
  "key42": "8jy4LoKREqMT2LtAknyNoUEQFDXkeJcDCYfhXsrXUXPx2zgLEVm5WqAMjB1BpEyPkDoVT5RPNVXNFpzRyUVxSae",
  "key43": "eyHKLSjDkQEj9wPZacTF8TuYDPZYkqswMhssipFcMx2E4jKENm8aga4gqi3rXfpAoESmF1NJFtSYssBPaUQRgTB",
  "key44": "5SRrzPwNNQGYvYCTA595y1EAAWh5RS2p49K8fNwYvHTAPJxk58uKnqLvbqBVdVK3Cx9LUh3CbsTRfiqHH4u4weTV"
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
