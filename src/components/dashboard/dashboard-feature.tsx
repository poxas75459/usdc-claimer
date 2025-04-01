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
    "4JUTSB6GKJP5AruLQJ7hnwCcQWkmMGeh9qgvf18Mro3MN81n6utuByQ1x3MZ5u1ey1Z5wzubarZiutGYCcZrbeaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxZhu1EbMmayEJCk2EBQZQgsociSjNQvvtvu7DbpACRbzjmRFqbR52NhBaSmphxJXwEJS6fiiZCknAGDVQEWaDr",
  "key1": "3QbaAZhz4SYLh7PZFLDLNRKm9BXWnEPKLGFip4fS7Hv4L9BNtW95F5sPmEwgxNzdixwA9E1LkVHrgBViRM5k4Ad5",
  "key2": "DRHzZRHhVTyYshRnWqcbaEzH44w1p32F3uGeN8ppGVQkq7Z6Bb9P1zftxx7csMt35dbAWjnLcjXHgEukhCqsyuu",
  "key3": "2X8mGxN6NfocMnJEk1APGdxjMbkyY6xgNxaxcvCVe9z77sdUFoSw8mn6wBYTXMGjmQxCYBiofzLyC4Dxdo9NwXjv",
  "key4": "WwNqR2v3fUdsMBBXLyHLVgShTLQxa8cT72tKHcUGoyV24zPP3SfVtbiGxRtA3vSrZ661VNmXdC23u8mUNMeAkuG",
  "key5": "45UW1b8u4PyNfEQ8XLSgMykhVVroFrAYG9zdV7x69MtMsHcb4tJrkjyGvrzKYcC1D7JqYHjuYECiKhH32x8ehoDJ",
  "key6": "2uQj9AY41E7SM2rKnHNc6eDbbRDDMoficJ7PsYYaVzfyTqEivJXmuHTeqm1bUDpycY4JVvJPtt2scxs61f4u9Kv9",
  "key7": "2eeTBQ2eZGbhbkJ2wUiHXXFihDFHwdxAQ78GErpYY4vD4BZSNGddbZcxzaggzJB7iZKD4aVnHvYAQuAM1GAhArJ4",
  "key8": "4UxUvxNYhncja16PqKevjAiHPawaCnoYFsVeP2jXMXAf2Ah5NSmxbsPGs86XHG4DbuNh3Mjp9KTH3WX2wSYXmCez",
  "key9": "24qeMSfC5emi8LQABtLuRaVSm3oSBBVEPLZnpK3o9UJDyescNCZkbjay9VZwNVg7mo1BMrtk8spQX7ZHYwR78oVA",
  "key10": "57pVdv992fc5B3EjcHp98HZnfhPkV8qPeUwWYSy8McPRDUFSdSj76f2T7ansznpe3TWfVXMPPUiTcMCsVq5agH9J",
  "key11": "1pWC9vXLBjrYaD4S6UYLSfKSf6mkAgiLYvyjUu57yqcfTFRj2siNLLkHKeA1dpBiPsAHFdW3MwSaV2TvvnBK4HM",
  "key12": "3oqYQnfAc1cjkTKxARwdrbHphqxMuW7LZcMiHBbg1GMvMsCaHfMrB1wk3nvyZzu4qN3Du3WFaoEZKkmkRLSqKnMt",
  "key13": "2PJ1zt5dtuQYyGWbTwpbVzDSUrY33t37uPLq7UmDKqCeCPJPPpiXbJn1c62WGKuTJtanf8N9xLPkcC5X3x8hxYdT",
  "key14": "2cyAFxSSUczr4bgxEczEKW3SX3CptSqwaJC8HS22ehmvvWumvbrP1Len91xeKzQtNx9Ec5zcUtb21N1q7eCs1fAU",
  "key15": "4hJXoZdNdzFo36cxBqCGsAkPWDPtw8RUdnuiyLYUouimsnHoc7Lyn9tU9PFPvenTR9zqjH9g6gFQRQN4bSAP1G6r",
  "key16": "YBLbtqQKNrWKongWc9nMdsY83d1DFJs22DNzzUzqnMNG7Aaojhna6XS9Md21zUuyE7XjtX6bKr3nVKSPBVHbatf",
  "key17": "3bw3PgCQbNJ7iBnEEyq9kbo5H6gi5v6Z1ufsESDnZdacwPD6TAiCe83BPbuLVqog8FnXYSpVsG8za723KUcjAA9S",
  "key18": "3TG2QoJTVoNkLhguBSa4JnhkhTx8UAGMBxHNMEU6eDaMvFqGoutuEbts8RsMU6VppfwXw8CQ6sjcnmf23nZdtH1h",
  "key19": "MTKu1Xe4q6YQi6bMR3WiD9ae8CEu5H5PdaGE5crEZkuKQgYX9BmVpkcQaR7AqLc3h4oF3xDGWABV5HmtudEaP6h",
  "key20": "3mx1d2DoL4Rw54bovKK5NKheWf7FsWrgYpYsC2YEMNgQWuS4suUYCFEwyZsPWJubM7Po9zSausunqGWPyPwimQqM",
  "key21": "5qwx9qpktakDsW4aE23k8csWQbj8oHJougfEvK5mMHZz2FD6QZzwmYZ5HwiHARBvTXMzUbwszgi237i1kfX5bwKs",
  "key22": "25bP6my1igFXEKU76erqP7NyRbuy3KmcNLx4xGBhMK8CBB5FBWp2bVkafPmQ9c4EX89VXZjtcLHstFK8Cvm7exyu",
  "key23": "2KpNFBahKUcJpTBjnN2pBvNN3ZRurxD5TF3fMiXqybaLnx2ukGetGeo6XoxrMZFDG2jetydrbLrJJR6jHZYRL1G2",
  "key24": "4HKKwskiWktQCCq7nKnGnkdt5H6nkKCDBMEze77FFEaJdKJWwF1EhF5AbUsQmF72MdMvs46QMwBDK5bwWw4xG877",
  "key25": "34MxS6onjcdNbRgyMmDsfarhRXHgW6qMmvhT8wUaSHujT17cYyrJNgnajYhexY247xRjtQWNtqsea9Qy5v8tDfK6",
  "key26": "2ameJqADqVGGG115JywknroBU3LrxZSTyG2sbtQG12fvR7fCPq7CESmgvyBXATCpA1ZRfsGVQXVgC43F1crwPCtr",
  "key27": "TE3NyAZmg8S2YyQUjhbf7yLqYByunuhggU9JsxZNfRFueN7EoEMYT9mmKd9ovufUVdendMXMw9jc2GTL54TjAsf",
  "key28": "4QMqsRjBFiZ1UT9X2G8vEuykfv7KYNBfKrckTYFsbvrAsYxqaUput8pbuAYEQ3un7WjDoYWJGwLcVheenMH1kKy",
  "key29": "4MujHxkaxo6KK5MpFMD8U6tFL9ShJJKZwcfRKbFUBHWhEbSVuh7dC1R8xuxbyLnzpbtZXjhiyijWVCjNF5qjEhV2",
  "key30": "5N6j7xBgpTfCB1Ek5be7sZ1uiggXhzYpsLCoKZFK2zMsWeEvHPoGFhyHmM72TH4Jct75wb2mYSdB42nPMcZWYV8F",
  "key31": "4QAk8Xy3H6BoNyL3gkxfcfEyZvdVYDSsthQXreEam54ApLgAs2VW4wiQdYKCzRuCVRiwvCGhvyDi4zg4NtQPDk8A",
  "key32": "aQQMjHnUPhYKF3wBZ2A8fB2CQ1arEUoEZezcgTSug2jjP6EEj1QGqMM5yk8AzGFgQjejiLZkJkn67yfJ71vTGyA",
  "key33": "2e9HdTvAr4E1w65hCKV9r3x82GCSQcsnbksMV96ufUF5tCtkgwXf17JYTXVm5isNBLBxQDKphSyqL5jVF2jEguXH",
  "key34": "45F9BMthXSJ7MJw7yRJNj1WuWfrV7s3E4ZWqY89GDMECDWhrLrEYsPuFCiSfUb5ucNf77hBdZtu6QhLkbQEu8hUf",
  "key35": "4t6QjbtfTs1M1jnzoKyd6CGsgxfHpAmUvUf2iGL5kyTJNDX1PUKizeGnnSvue9qmK2GzWqciEcqgmDsH9a4FJWUn",
  "key36": "5JMrG12utwXxcXKCYVmLf9XBEWtfDEadZyKEoTSr53hBhZZog1E4tsqk2WwTpcfvDrMaHhsRAqPSBcTiq3zYBHfm",
  "key37": "4R5SczxsGgzwU2WKHTQ67qhVmxD7Z1m7CceKPXQssyFb5F5y3RPoiL16w4HkNCnmyz1TTPdnmqqAndHiPtj71Cti"
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
