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
    "1PZsAG3ZGKxYg4dAScLpNRLiuKkDvhpnr4geWVg1JiaUsjPKuoLyFTFveHbYMHJTwWrsTgxawYDsAqdxaHK6gbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVZWLfsZHrtUriKQVEam17oTuXEKRHf54yaLd1Gy5NbAaz5ZSPAMNZyTt7EojTYYd9NTTZn9N9wsm79hV2N9kSx",
  "key1": "3b3FfVAWKTmtrLiKzcBBwzcJKY2hz6Py35cGJpxsXg8pAXPnJtWRC1ordUSwYBSTK4iXzAWM4NScfGqUuyKubuxP",
  "key2": "3b2LTCX4fCeb7mC1cFE5Wcx5Ff9J6h3ZTMobU8WnPToqFdMJHeHRatFQonR1jJo9WWpQycdV4e2jpWaXM8RbUz8D",
  "key3": "2ZyZYRyVNgDErbWteuafpdMJ1wUtLQ1fSgqsqER2UYxjZSxMAaGAxxYJDXA6opCemkxYMyBhDp91CbCamsfC3Rg4",
  "key4": "22jHE6Vmgigpje5Bb6rVKRpgVJipviWyQCRoa3D6g9XbzfMbZ5ZGQv3TPzzKf8hXPENXqRcWo6H4yVwRXwf6R6WH",
  "key5": "59Rf2WnaYGkJNfUR5EEUMDoaXGBCvR5QWvCbfaGFYDNiZrYkdUcdtdGaiuf7Ry77uD8UDssRp972DVgTFfZrGhPw",
  "key6": "5xvbmqfB8KmBqkJXqdJGHoGij7CsQ46SDWQFLQH7vgTrKSCpYzGWVdHYmr5uFzVUwgXhtyy4JHx1bmv9xbdz5ghG",
  "key7": "3G22jboyXvCtESJPdicvu476vEFoTsqY7Pe224ARGRWFZReYeSNKp1HqVtf31LHZfc2mtSKnRssg7ZbkPM56aBXC",
  "key8": "4KobmqVbn9zZZ3SQqrGR39rbrH4P5rqogzeZdokKdS5awJsjVPWiiZkvnbjTdPreVSKVReqVzQcjHtn9bCJCuk7D",
  "key9": "2rxes6gvZDVpX8Z9kWA31bS1EMqxtvtJBvQsfM2eURmdo9zeNAYfXvcZNFonSmiHtfJRbhe91KBEo7AMGA5GzS2c",
  "key10": "4jCKQNueoWjLBU9msT82CPVgp9a6bYnT8YDN6hfFHvdBJC9xv6exXL1ADWHirC4ZdUdcR5yuweq3vfZQM2XzGtHy",
  "key11": "2sA84MRTRYPxMSNbjKXqX32AtPVg41DpjhV42FFn9ZiAttvAe3HevZACcaH8zENM9ybBWtir1XbDodPzBirc4LAw",
  "key12": "31xKUki1sdLaLGbmWS34B41jotWbTYtfWFPvzxw1sFFoBf5zJ4NQhoEfVAdXBJCDvJaXouDiKZgd2Eqns4kfEkks",
  "key13": "56pgzrtL7oaGkS4ak8FRXDaSchbFCrshxDiN7mH95nyPcCBYUwbHSTMjqoMRg6S2uHH1x1CneWB4vQWKL4qnjSdD",
  "key14": "55ADpnBuT9s3zm5fSFGdqQhiLHYGcNx5AvvWg1CaiTTsTrrfdPqf31eFFLojC9nEukVgCycHSRLSwZ28kzB3fUYW",
  "key15": "5Zkoes7fqp3Zh4tZruNUK3p7S6T7tQ88Tk2kE63ePkrddeAz36xfiHvRB2VhCHhHRjFGnsj2Gm1Cprh5bJawC1jJ",
  "key16": "2GdB7bKoFKSxUYxWXQfdMrX8eQ68MhY1pJbERn1kUmjbVjogAQ3sMDsLHm9trKjbhzNBNrcgsaFVYUeQADd3L98M",
  "key17": "5GWPzv1BHQ4CcQ83syX5Cx9oMx9VsLH3pA6bGMZMvVF3XjvJHh8aJMHkj8tZW64Hi21XGeTey2UWCEu5LjZ7eJa3",
  "key18": "2NKKCxgcGzYFfVM5m94SfLQdXueXQ6Y6wHAU8Ng6Fufim9vyYQEhtbN8tVX1JL4kre2Zj3eePJcQGCi8ehaSkqfn",
  "key19": "Fsbu2vFb2tK9pJWs9MDeBcjYXjjSw4MsZjvcQR46bquAAFFLfEELQtsM7zocZ8gqN4wAJ1KFJdzuJwRnEv5jBNq",
  "key20": "TgRYbGJ7J9MRLmLBSrLzmpRz8KF98uwPq6Q72gvZ2AHmutLjBoYVJUJGyfoPWKo9btfrrBQ9NJgjnyAe7VPJ8Z6",
  "key21": "22bTXRV9XyGmN7RG9ydT9TCHi5yuDCkvKXPvbLdLn5NfUG5vFASpow36LrjJL3xNR4MeNqWut1ESyE4QPbvaDurv",
  "key22": "2QFmnyBMryxATWWzWaK3ZHtenUCg3hAhapAeoxekwPrEgvWrLA1xbzghDiMth27VY9SktxxkyEbCjaLRDjZvAiu3",
  "key23": "gnNs6ALGoNHkvSTLyfvH4VA44BbchTFE3voSeUKkjLHsxzgYVe2EE2LrsTk6674sGPiEnNB2nvDN6DUcTMRK2fH",
  "key24": "5RCmq5zypdRzRYVKm3FkjAvUu1kEtKjbFPiqwgQwjizHEoxHjpKKPPkQTDjGpXqkBiDa5N7a5ppcBMHMWH4o6Vk1",
  "key25": "4fXNMW66bjTorzuxTGkYjmBf2VFxGQDfjrZQ6hbXBXZPvLKH2e1EtKqWysmmdtiHRg9afXN9cApSv6kPSSTxefLj",
  "key26": "DBmVEyPFYJcttTh511SBkiLjdkTx3fFHPV6tbHWDrRmD7XfF1NH97mms3eph9MvEvLswR6tSSVnq2UCvugBF3G7",
  "key27": "3fNGcGvYqLGtbN5WMFQRoWJh1C2XEERrBV6nDx7xTdWcZ5L9MCSAAgBynzdt1YJU3XDUbSEZc2ctRN1ZEyVTreXE",
  "key28": "2KpWLhtrbawdJ7eNa6oVV3nUz7KtfuV33kgbGyVMmrTeHM58hggV47nrQ37tvPNMKdGyCx98nMsS2AVuLVb8AZKo",
  "key29": "4gfo7U59ukVmmkPbfyahQwpBwRYqujCWUV42UvXStf8FD1URdA5jpGaV59K2Y4Gz7TuCX1yCtVySJmiEtxtPJ4du",
  "key30": "4D3bAbcziG6ZAx9QedUCWmyXc8JbuRg97bfvpqkwt2oaCf5kbKHkuFQgULg35FsmsFujv7hmdsgKRWxZxhuPFtUc",
  "key31": "2MkwHSirTSMQHcfwjtcYSYG8pHZ83Ed7Uwcde3DLzkj4A9zWPbmjW7zqLcMBEBeu6idWSbbC8pubQvkXLgnX8TLa",
  "key32": "2vRy1xYAzBj4Pwob2YU3iz5VrFuQPRGVPaCTwWKxdXBua32JsNyPNRP8jjcekAbTWTiyPN97hn8HH9dcsaFReKTW",
  "key33": "5swnADQ54pTWy8nTgTSmkV4voJRVMzd29Qjed81NpGUhBj1Fri7uoEoJmEDLgwZRiuzHJtmasAFirT56vKLKcD7N",
  "key34": "4T8utMFqKrFV6QukuuE3CUiev7mduRNb3SCiEbRyZYMzsnbCRtbc3qCT7PJVqjm6FgMLxrxykLMQrsW2L1s2fVH9",
  "key35": "RuNbbfqCBC4RYKwwaVCh7jat2oE6bL95iZf3cu3EosBFn1gWSU3zoXT8K6Qyg2cn6KVoQ5M33eH3w8qk6TBrKvY",
  "key36": "2JNuMGwtL8H7FJM4bMEFJfWYBBwsW9dcwVyFNZP6koTLHUbU5hTrp6wCkCr896wLzoGHEzabpcGEuDrR2sdKhuut",
  "key37": "MiggJsbJESTa6xBbU3TBW1hNn6KncqsKnY2CA17HpqsAfLNGcE4oaccdiWdo9g8asSN5ZhbdP1yaBtuVcyLa6Z6",
  "key38": "34EiRqiRVf1M31tHmL2WmHyRxf7mfQYTncrYWrrDenXZPJk5QJQDKpZSLMbjctyNKkBMmm6sTuppyyqyL1sLcofF",
  "key39": "4JAzgLt4LxBaJs6nKpBg7VCsnbUu4rxTyz9ms19pGsVzYeQmgqUJC22zzbZqvvM4MSuCNNMMPcoLays1bH5z4Mef",
  "key40": "3mr1g2aqa829NLYQUoXQXPrr1exPZpi2D9Dqt1mKnXXWpshDNEtn9X9hqUQqGPvU23Cq1qnctbQhURttGyBmzHnQ",
  "key41": "4BdttzeeRLJS8JdekuqcLMXmo8aHACBndz6KwHeyg9zVzCqHeiR9BZ5eoVvXGToVCjS2bzCR1ky2vTLmVSCTM7jV",
  "key42": "483Y5ezGg91HjTPP4mhgZX3e2Fg7iDJviPUscs5bEX8bqXYcMnuoFRpDfvTWd1KjPaVpHWQv34VPcEWqoME6fsjf",
  "key43": "4foeAWMQQizvumsfUBnqtNzN4yMBJcDiB5GuLGWpLTLUaBKFbNMTre7ebpc7g8NQyMFgeAoPatvevhSxH49bMAvy",
  "key44": "4RQFUsS7YJXfb66MZPd1R97tadXQnXW5SR5DhdxtD5MVYYx8AZiFt8wtRdCs3Hp7T1hXVXyWztPSTx2XpkuM5VGB",
  "key45": "4DcyJcH2QKwfGDvxEf6vV11KkidQaU7xMKdaoWJPgzC2ertRu393m7oKyYRcg4EkcXHiuzPk52rL5Abc4CrbBdyM"
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
