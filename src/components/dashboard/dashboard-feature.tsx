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
    "376cFFK9H7eVWCfNP23migW68iKAHybZFPjSmQSB1HHTWwEvbzoVDs4963iw6caWAXLNMcydiFVZyaxVK9Lz1u7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v3116DoJp7gMsJWhW2NNbYB3Gk2kaNuZhNiuxqUqhKYw6dFLFtCS9aFauy38U1hREk47iFWHx5ecWgKnuFGBVHm",
  "key1": "5rXyta1oXvLzLaW29mpKHfNJgy2P1gULQYgChaxcx7hbJCDaYVwAVGY3WTd7fvroMqnmefrLd99fgdRYe1KYcCtK",
  "key2": "2sXrWmCRbQbLBpDPQf4Keev5UfNeyugr8JfP3u8ow8nyY29AuuoGJ59f4E6DLh9b8X1PbRNP2GypQj8cbSiRcSoz",
  "key3": "5ysYhRaw8jC2Q8oKSXgKQ6teN8ndJJYXBRVjzHeTBuBAJVcupU6Bq7ScyQe2L3qq85jsB1G5iQcs5pYBYJmBYtxB",
  "key4": "KhFh8tKtE7YsQvoNMMCiM9atyY692GbAja71AANgR9SmXFdgCkJdEMagW48xBEgstWsHagNHoWMD8EKToUB4Rgm",
  "key5": "5TxCR2xqaUYcjgrhQ721gp5T2qEdKb5z5oaqBHJLbEVm6zoqz2qWEuDAXAZ2vwF1aiRXhvBN3UEftcxCYLbfczK6",
  "key6": "5iAeS3Xek17XroWkSabpFaAxurx5CkRTMTvAbfpZhyLtzhgotvuezuEhR7i5z5ZcB2C7hDwzb6xuPc8B6yecFxeA",
  "key7": "3GoywzP9sPWkNSeyKAqjGLggqhGZVwksRqaStrBC6EJWpqCb6dTLKPZ34ZtGN1mnyEmGvXbmBtRhTktyY91MnhMe",
  "key8": "3VceXHrAUgxSbZQHykQytyU33KFKk6sA1tqyLr7TFWKK99rosJkBYxAd3etcQ4ago4MEjyRupNGTyQ7AL51enyMC",
  "key9": "3gSjCcXttJuHvDjNciA8KKzMhosofKSysxLAo15A77eXZ4unTFeqY5P3x2Yzs1GGg3rCPzaM9YqQNj3arPzgzPd3",
  "key10": "gfsb7inRFtP3dAdXfcJptNWEfPehcx6PCBujzkYW5h78V71GoegG4FTECcVBrHq5HZZ1BdjozbRsGENTNA2GXDi",
  "key11": "2zSjNXPa1du8e6DQRWv65Hd4E6hLEWV9Dxz37KMZdVZNJm8zJWeEnsQmYp8DkKzHx92y4ddGz98FoRDdFB49aLFn",
  "key12": "3gc9UUsrxEsMwrFzEvkUMNPGVKV3REmYPQWfDJYXxn8gM793yzoRTdYioqcSGH1bhwLPHcm7dppEVHF7c2mpvXCC",
  "key13": "51v8FmuFxk5c3wNjhueAqcymgUT7RoHVPdn6MgFrwc6pd3he2YC4gxSUM6r2dMfcCRHyVbN9WL4pWqZFHn7CtB1w",
  "key14": "2zoNaYYXcqbXsy4L2v5LZ4BtLT5uPP84wg44mV8dg2LPQ1tzYeGwP2qAdMKoLUe5cTH84Y4KLiuhha232yDoQNNt",
  "key15": "29dgKv8Ru28h7t7PPN6hBnvTnb9PMwppB7fht8YVAFkcY3rYNNvtL6gYNn348nfJpi1FS1tzhzVsRSAbEfEZcVwC",
  "key16": "KafyqK2DxmADkjBcFizxy1gXx6VxLzMiYzfgnckP7vwyp5PViCNVp2tS8gJVds3rmYQ3XLDGUAvzTt12KMei4i2",
  "key17": "4L99EAtHmjBtV5skkaDbZjXQ4MSmLHkgtzbqXiFHsxhmmy5WTt67Ue382351mQxBQR9bWyG4YWw7ssKeJsLpfjJ3",
  "key18": "4MkmXFGfD5NuhxhtSrxg2Qfm5XGWE1eMZLXbSw8zYKp1ySm2ycmGYQDSVYjX6fHV89BbB6zpy2Ls6rX1rQUBEc7i",
  "key19": "4g9udTdJtbR5vbyJSeVuERCCMDKagQ8UEKJ7MZhM11YmASK8Tvr1NLGqKv1pYdXoTQSvibzefDs3C9pUdqtfjo8f",
  "key20": "37MNCRBLfRMDnx9Rr8vk7k7mYbijzC65rjJ8ogaK9xJNPtayDxzf6JFzL3ZQiT62d1NmmUznG6fRaHwdcMdRhPH6",
  "key21": "3pdmERRwykNqA1munxHxZk3m1Wd4TeP5AvPjd1Q5NUgQ2u4tKi8rJbo8dc6nZQmkhZkfEQMY8v34RV6mDSFmodp4",
  "key22": "31jSpoRvKxBwEvrtSZiJeQ5zWwZwHt65MVv73AmP6eUC85xH2tuAimfvBroG5318hwxMeTi1izCPoYaXMVfLD6YH",
  "key23": "4ZPr8RmUAQvZT6AU2ZEj3PLauvgVjEFZ31s1jmHTTzJq1aWu7BTPycm6i76oJjEXkaYrsaAyrQqGWBdMVKrefTH6",
  "key24": "5w3t4BJCfvxZrf665ZNqRTmL6vodqwSjiYQXuYWprDLPm49NV21DdyCjeZpKeMCdvzjQQw8VFjDG1w9useETqDCY",
  "key25": "54eLHEMBsFegDsXd2o8WpBgs1ddxcWtnTybZdT7iPheW41w1oupP5zAECYAhsz2ySdcqgYdimt6HbHRbQ6iJvWof",
  "key26": "3EXqKwvXU2EE5qDR2iF6BVC82HXPzuiQP8Bd9BzTJroGcSxc4P42SSsnpazZTfvBgWuDxPEueDsb5cHHjjnmQ77u",
  "key27": "34wj2o5ytvkMscRNMghmbCcmjkZSiKeqHXmDPJEW4Mh5BvCD15GjgUjBACZZQAozwxRKCKn2HutRNcuh2CrMH2zH",
  "key28": "3EmHVFtUPBGYy7BMPPmXQfQBavUpdmkNpEXQwW7UNMaipiw4LbS5ihtBodcxXpTj8JTKy1q6dX4YiAuUPo8w2qCd",
  "key29": "45zk6ueMxRERCzwX1UNyvujPXADdERsMX8dGRZBCFgqRyunccJxqCpW14Xb8Udw9yeFXbZwEQYCMZuvCNDR5n72N",
  "key30": "35xzGFU7L93uhUmwWHjezoYr6YsSAzpGjmjYUaqhR8RFRjJx2NT4xqcsDXsgwpiprZVhRBuFaPWYcx1E9zp99tzL",
  "key31": "3cQkVRMoZwuQWfWGxCr8YKFX3JjEnbka1RJimLhvEymdnjMFCy67ZnrG9pqMEcrD9WsdUWgNp9kwb8GtjntoHkNw",
  "key32": "4uW2KGfiJhgG2aGyLPsCJHxe5igsx8jUkdzgaAtqsQmzFeorrGeJNrXJrGdbs3JDCtJkA3A1SsQweascX2fGf4xW",
  "key33": "jAyQYEBXnYabbQTgaeNvxzFzABFXRf1Rv6H8HeyEWsk9nJMQG5F89EDLRyYpHQoL53xWgwZsobqcQmLmc9Zf6yG",
  "key34": "5qFf56yo8dGwHNAaQ37hcRRjVJie84dBhquN2hpNYwefoD4ng1xCa1SSrXy3EAns5k6CRzxBJKDHEh9t7TZR9tt8",
  "key35": "cqAswCEbf1P8uftGbts9nP81H85vpJRbDPAeaAypmtQVLxYxepkogEp3JsiWAgDPgzRccPSeZS5kYmgH3gjUfQB"
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
