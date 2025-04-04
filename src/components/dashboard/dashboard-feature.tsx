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
    "3NbDKguqkyCu1W568cE12rm2hYtDyaXk3aPx5Uszf8xYyJoBpcZ4gpNp9PKc2zicCLxCu6BMqraFY5N1qQHKA26y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Sm4JTSqQUZZxr6RwjdrPLks8aASHrb2usWZVyRXUyNUsshb5mH2TwxEfNRx2Fxdm2Cu5qLUUkCgwCKERwHHqTk",
  "key1": "5Wa8YnZGWc7aMH9hsY6TEvh41cLY7CPKdF1K8wxVFAZ9uawmAeSeqUyexAEPv9ineHxQkBHh536YzXPLwvg47kPC",
  "key2": "5Jhb3zs2XRgbPYyzXpive92NGdjKiwMqwKpmfitTtPubthKThuW6NaDNoiMDSstc4XRRvwjCCCgPg5VF3JnBbwNY",
  "key3": "43CcWHJrFWW9AAbReQpNWSK8hPj48KxARLPs5iHkmsftjDc7RXuUozVQJBiLLDxHkdA5ENRP9kE4esDS5JUqpBfY",
  "key4": "44faHGFLVzMLsiJTcGo4PuwTVbhPaVVVjhP2nc5Tev4RqCafqKxdr9N2cvHiTexN7wcyPSPctt3xsGAQrJos62FM",
  "key5": "5yU1KDHkLJnamSz4Jr3o7zwJsPowEVFigikUNFT8119mUqQJeUFc6yDp8pSUHAr9dUhiKFnWbMTwqZXfFJCpQivn",
  "key6": "3QX3A7x6A1jYZ2HvxgZUW7pvFxdKwgTatY7ePA7a7UJ5zmPPt6regM9qoxki2ju4GBmeipEZkhAuff3iH2RuoNNi",
  "key7": "5iVwEiFCCUEUZURczCLgbBT2EWTeWXULBuHUknjb2V8RtLzKix9u8WQ19R776p9wxhu52FKuoRnrUY2Bb6CNahrY",
  "key8": "59zXv7qGEaNbPBXN91jiTL7JUwNm8MvYuHQDFjDQ8m2WdGiXew1iVU427Xot8kgBoifzAa8oE5gBYgPZTZau1VKT",
  "key9": "4rNhAbfxxToaiBAR9QSQP4mZojCK2HadP6VbFqms7eQEwLz6ksToW5GYTD1k9pcfFTJRoYbWoAZVgjjG1fMTeyhD",
  "key10": "ezVVg8zkh3Src9gcNCHxiAH1eXK4UAQkesHGGadwR4u5Ru7ouukjEmwnpE5fGtGqW51d9hZ1ZYJD558fvVHHwQx",
  "key11": "5PuFaqBrJAJLN2LSdjHrbdyGfuetY7DcjCwwvdbHJgLNfbqfHRqQuhhKVyX25bCAcz7QHi3LwTR7kk3neLN6rUgF",
  "key12": "2bQ784pomNwshxRgjv3Ua8bJYbFsNNu6yphVFiXRedTkHDB2WNNtUcXk39scaQoYhdZj6GqrhkBES1L6BBgAfKww",
  "key13": "41CoGfKYToGe9i5t29MhDKhTdpENgNES94RsgurLqEWFvbq1JXia3MU3bvgx3e1qaWVmTvGJC8Fi4Bhnqxx6dUn4",
  "key14": "3fZakUirWy6Z4nvrVyZr1Z1kPwmPuyPWD9vbdm5TcbtLLREfEGosAXSq7ceLoMqFC1HYKxUz3pN2SowL4cDevhfG",
  "key15": "2Wxrb8XMdqyKiK8NMv2bfksvqsrKuDofFd1Lqd5ysMmr7BhXrtmJjQhiFmtmZuQRxELUkyHsgvTB6pMhmamWbz8d",
  "key16": "5Kj3jJyYEUhdtk8856c9eCpm8LTVRt1K3KVDM1kcLQ2hrBdmrf1VMtEPPqeTzq9WohAvTkKRhX6YDu4asCp7EmJF",
  "key17": "3yDZdyn13SvtaPGYLKA3NGXpXMCDB6SsDjZvQDxrvbH2H935RFQYmTEFuqpWeRkMg1fsiEm6KuuWjoaTxFLYwPqZ",
  "key18": "2DDGVPB7DDP7BmMyTR2vmsZ1crBakkiNFkYcpsTJuDzX4vAU8iHiDhP16vk8uDgkZne4NzwEfwTLtY2KUyYazetP",
  "key19": "rdaAx64zy1NmW8rY2DM7P5E3j3JpUS343u1fL5aFVAm8vrd1FXaxT5SnJUdcfX8rcagcErw3xvw28U4TqiyYAps",
  "key20": "2KgVB3dCjH5yjTgrSG8BoyEbq6padhsSXeL5FWE76Qq99zsv2ggWYK73ns4Um8hMproBDHue6XFE9qCqSCmh8cjX",
  "key21": "2eJwUj9gsUtKCSpPiu3sbHJKeYohJoVov8ezzddECPs29dR3Xy6UTQCy3oB8PyQsCdPAeYZErsUZd8sBWX7FvqXd",
  "key22": "HNtjb7DvfwYH3XwyhhDkCXK85FrizFXNPJxNPgErgoJibxmDQm5kfcf2UnXeDr7Me9Lzk76ZbC28sY8mKvpXBDe",
  "key23": "4HudgXoK3uoQS9Bo9VU9enV6uczzLAmNzPHrsFGrkgeYopGbuaP7S72tYsPgo7UEBHMcfuzszit7qQCeUnwVaJQC",
  "key24": "4ETznLufri1Q6LvkeXHEEmFGxViYCguYGPRUKXGrJMgyKsjwzR23WqNWnoUoBuG9U7rR2869KHQHMN3rsmfvEMau",
  "key25": "24eazc8D4DH6ewyCTNHwg6wNscaXbJx45Uaq3dw4oj1tAynwAo1v2RbH1BoY693GD7wLte9EsnqH1VwvUrHFN46W",
  "key26": "4SsLHeLnUCasaFPgXzmPsmyxKH8aN2Xa3sMKxEeij6QQ5MtesyTmuZMF5ncve7zSW98NSnd8gmFqLufUPnC6erV5",
  "key27": "nQ6wCM9MZCJZUWN5CUHfb9GzW3XCMVc8rtJFUB6QFzq5JFJh7CYFsq8PgtkaCFuTGYErWWwcUroEWWu8qzWhzfq",
  "key28": "2BBtyoURZK9GKHwxi6UrYYTYkYTtsMKu2wHDEikwZTyamWarKkp5VV57LsJ8j1KwkY3LknypQSZCYURhDGzFdGgD",
  "key29": "4wTvnpwf2kciA7pLM4XV86Y6JJFGwGHcobmuugj3ke3t8tRb1GWz4vMDLCgA8gQC4JNMewzfjRHMQiehexW3RRP4",
  "key30": "2vnBtpJ1f8nBh44jrbNypiGJA4CGpsMiwtvtAd1mMVqJhy3DnUuSbqW26ZeQMvqTmLkrGjtWuBjNbGTmANAPyCH3",
  "key31": "5dyrFiAtvp4PaPBfugXFT4MijenWP6cUq1SC57su9iC5vfXabtryPneSZrQ8MmBJhFCLPmGfGDHmhsnkJNJiYzL",
  "key32": "91YMKcL4sCwA84vs7jHQPNPSoSVc1J34PFjkdCKscHa5mvZzGCfW2pGTY7snaw2DLLyJptU1wEoRrEuu5788snD",
  "key33": "2Ly8UxFw2eeVDp2XKSf1ba6Ahrn6boFZLbakGiYvNSY9pesG2nKn7jxPuf8SdSqoSgViFWN3qbLVFdC9wRqefHqo",
  "key34": "2Gk92BwD6n5Mb1gWzKFDk6brvkL1BxRy7XjyQEs2zSHvULTxfTbPW7cQxNakRfrH5QQkW6N39c6QpoePMFH3TyZw",
  "key35": "4R4u3ZhbSymoTTaTAbMV5oM4uc6jryKE3H8MQT4XvFjpSWXWyxeGmTRXo7sWqrxMv2jcz2juuCYfeb5wqG3RkAyj",
  "key36": "5r8YJDbcKRL8p3Uk8k3E1we8SoL7watmo1xJN4cXGsHND1KGD18juMS9YvEkWnD35W5hXMmhh4LZQJuA9x1CvBdM",
  "key37": "6RMBU3XpAhNJoVDqzBDuVGPnKYukw6JFbPXUWYvYBZd7a9g8K6MXc1sc7um5kiWaYDUABxdtcNP1eum4x9HLaKg",
  "key38": "4N4xtMQnoE9RhNhMsS1nzp55G1yeuAGH8pGV9tKCxWGaJ8rB69sdL3spmvGF6Zk2cUr99uHiP8acHwbbqFJqppMu",
  "key39": "3RwUi9HbXJoKNyhTnUgQDtRJWazR8tv7MF86jfM5X2BCeHs1DdEwU5K4kvfFH8kixHezy7xhHa2T9K8LDeZByWjr",
  "key40": "mW9vHqYnbhyTNx2xYE5sav7mUoBFZeuRcmW3Sd3mwAGiqSQ6HH4z7NdpJz5R7X7p9rsDg5EjaUo1aUiWc2Bs897",
  "key41": "41WTm91hNUiH1PQTB8r4WjAMjw4mEMMm8Fhryk44MSguEYTDfaTLNFNzkdCWFBwj4rnVMPMdap8eXzZX8QgEAy9i",
  "key42": "5k5iHokK6YX8swKk627H7yZjBM9G1EmSgKeBvJeoCMFgpQNYYGzKiEP1TyUJVNegGFTFzY2dDeJpJKPPEu1nrZn8",
  "key43": "3iTrCmkYuaahTAs28SXCMpE4uLLvbvQ5Ezhq3phunpZeLYmoLLtfXaEotqZgz4wPs6YHtQi36krEJga7kxDgz27C",
  "key44": "4e56je9zYY53oMtdEUZCk9HKdhGCXrSn7m8upSpHvs8XNvzEawiFfVkzc6WQWLdeVbdM8ieWLzS4mDrnTzBrwB4w",
  "key45": "44YKWTKEJ2H666AhGCsepcM9W4dCKNkPBaPdyTiUtRsngTTQLT6w8CUmRVrm2eAmiNFyrouW6pparaxBxoMz1fYa"
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
