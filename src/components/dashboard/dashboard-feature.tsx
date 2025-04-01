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
    "5ZVr83u7DbCtDrN7S3TuVKDA47rNxU2A7XytNHLMi2esxh1pNqg9zUqChmh51xdFWp7x4shy2b9yhMepyzwfYS1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238YAfJFLPCd2kmcwiUGwuSZpdyVE9sRkHdiyFCkdJdYExVs217NZtuLSdS7nRLT5xAspmPREwQv4c9iTKWCGXn4",
  "key1": "2zNmmG3zLwE7ysHp6EsSineedFD8nmPnVd3jssD9FwHmqzmsbuVRk71jqUsb15gPtMRsUbfyxxZ6T6AsYSJc8HzN",
  "key2": "2BT8ooJsZrEajsoHB7WXX5wC79kzCvxUshNagEVYnyuZkiar9szPVecoARsAo1dYwbKNjqKEmTzQudDr4qdaKznL",
  "key3": "2sruUtTLUCXS1VNm7tnMbkcPW8MFu8hHFMJT669Kw3BetzFTxCUcveFM55XYpAVAbA8xpssMMRSG1pAHW3LjLxSg",
  "key4": "3REATK8fPPFfPaRecCMr8xbaac3FxSh7tZF6k5eVjGpi7CgwZjFWRnsGMh3WEtH9rKexLj2oEW8x4NnTCwF3yQGg",
  "key5": "4N33RfcDP2knTY1QaZTRazb7YT9gRVwEHXaSeRoegkejzzbT4gKLoMPwkYSYmvf2btRg7QQ9CNR4GkCks6aLgJaL",
  "key6": "57ED8Nc2kq4vV8T6zRTM5DMiQ1tWE6uaK7m7qoMLTuvuWeHz1nQvmVZucZv1RfRBnPkqWo3Vp7dMs8KgCSdCjZCi",
  "key7": "RFt3XAUFTfiB7tkqfQRUpcQeESibZFnbEY5iQ2cZSkE71DTQiE2qWnZQf9Cxpiyym6ATR53bipWiYEQDiWkQBHo",
  "key8": "2zGtJBYXCGUktcTatzomqekqHv9EMaZNMYcws8drxTwpa72ygnYBvyvy2R7UY2nyphbsfv9pcQL6VV9gguTNzqZb",
  "key9": "58LKkzUf3y7HHcmdoMpEn3QUEYpGGvqUjV3mhpv7joAH5DPwYHhZyDENN3QbHdfoBH1ZadhZkJup9f8cKF4GG8vi",
  "key10": "5C5GEaQVH15JEwMRTXxdcYrHsm6pKM25AB98GWSAnYLTco2iwsU4EGu3dBiz9pNCZycmhX3pnqvvqSbbLwjPbimR",
  "key11": "54eNrBnDMrdUxGigMKHPmkdHt4neqUKHD7eemGzygSa8AqHsvJUQ5m5KgGyGnBCGGnC2KaBXChhys5QMgnEHVcDD",
  "key12": "2zMhw2FrSTvg5EkCUUTkBayzvXUmaGBnf6QeAsaUXF5pEsXtAvLXXzgX85YxVvTQwofZ5CSxGFVBy7GmQLEkpbZK",
  "key13": "2UXGXdN95KWG39iyDYBHumNcPPMHv5MdBUgMgSP23yqswnua9KLgcuYLT4GkFSZU7VRB76BoK15aCYHGNmdtX5Bk",
  "key14": "5QEF2qK7LyKrGaLbr5kaXZbmGTEjpHFXa9uxZ5ZdjkboUVjgRipp1e298HuBGe3cG5jJiZdEfyBGcX24kdMbqpPN",
  "key15": "2AiuDwKVLedc6g9aVMqGdPuAqseX9yaVYLVY6Xtq65vCbb5tXPMYFLz4UuKKiFYQMM6YMYZiPVAtXgLksaJaiSYR",
  "key16": "2Zw6LXHcZJMgEuveLFJzytYU84AZjJFM4cGGNXB8EToWKGo1WJZZ9qx1wjcjgAs7G22FSBf1Gvw5hgxb11rmak8f",
  "key17": "5FfXnrZevXUFiV4qkQ3WHu9iF7fjbcPTqJCdKw5FEU5aUPQy6XPAXymqGr6qcM3A9w922kZXrgSnJd7e9jFYHZjR",
  "key18": "5No2UuqQGtRim8j1DGM8Ei9AHqwWUGv6dfhDG5zMpTr3ERcUXGZTAfesA2MSiyAA6fE71kc55QqiKMSTuirM9QoD",
  "key19": "2MMtVuVeL4quYwAT5ZcSM34Rn6jeScbhxe1xQbbkigX93CxoJXmUn6c5ZC5GMhSajeJq94ejjNozE2WDC43bHN7j",
  "key20": "3XJt1JBVGr3iXaw94uVG2yVfrkM9u4b2da3ZZ7c5B55FBNmpZ2Vyr9JNkNqH6xaniRVetPW3jjvRmGCD9eNRXSU4",
  "key21": "pL5ApUCMGvqDyvep4shbZtMQC3FDrEs8ux4o9TttXgM6EHg1N5W9iL5ixMHL2cAteahNCJSbswJZEpLjFrgFsjx",
  "key22": "3NnheKgH7vYmW6SDs5H5ifE5cytfT1j9MutGxXGJ1DvKDmTwz1umgDXs1K4FpGfrrDa7a6o48P5g9bSqtW77mKvx",
  "key23": "VuRf9zNdciH5nARFyyYGmKUbfVsScvfFZBypXSF7jW3Nw8js9LGbEFh4g9D1K8TgorMVnVeQ7g2Rs5RvXniXWdh",
  "key24": "5vM9RgJRZiDHfzJogbawXZYoVoB5tSCuVySYp67SCprEidaLUiKr2vfiWPwqrQWFv1KY1jAaEGr7nS5fDyqvfKJ9",
  "key25": "2REpKfXHmCYPMLkYb8LEfA6GvdzFVUDS4Xk9VYd6yz72WUs3jPYfmiFqYKooWcUDwLQSSUVK73Q37m6ChMhuzNyz",
  "key26": "5tU4CqYpJ4a7DVSfBBQuZWTENYpo2dqwFVAvdnrgMuABS5LEyTcyQVT5M2zCYbbcSoSTsfuKkNqdjH7K6u3vw6Fd",
  "key27": "5gVJhaCgx4ug95cKhoEh9ApcXL8d7ep1BkesRnj2JyBYJZGgTmcyjfqoG5acUQetZVJx1faydjq91ReYc6Goqo1Q",
  "key28": "2SMjosxckfVtEXnbNjFtR3Feo4kGo5FEwpVS5f24siz2HRHY8UikA8B57MEWdvT9LAZJDyB3KM2E8gYeR7G6jjqm",
  "key29": "348DPuBzsQ68YbHrSp4VREquqzmd8jz4oWdNZjP5h7D6vsqD4FBe8TVTznmPPhypUEGDwQ2ru95VuoUhbxSwY217",
  "key30": "4QcAkDNQg2BQaNxbH88RFRpbbmHzfWibf4p42uSrVCLCHiBgCJjwDRr6EnsyWeoUpfrdiYUsHtKwyAnbeRgauRCH",
  "key31": "gjwqJWzMwkYzLGhe4PU88YWFCA38Fnxp894Yb1g9ZBiNLcDmFMdNQDd7gMvrHi6Bu4esrtnARjWuiQCrfm8PrWr",
  "key32": "3R3UJ1uxVEQ3KJjuC1obJQK2H4RXVTBNLAibFcUabyMjbfUzfAxVKa8CCwhcZVwQGAn7iPiF9Cx7tg3Hovg56ze2",
  "key33": "4DUJmVSzhgqLLhfb5tsfnwiKnV2DWoXf4FrMtmBD4L5yy5J4wMUeWt5PCrAEcYBBawGNGAn5mYWcVmVKVFNa5KXy",
  "key34": "4zBg7fh9gAiH5vDoa9hV5zThF2PixUGes7g3fqFwF5Y1Cki5R6HnFHxFECzD5myrvqf1cynT9mDPyrV493ZFruq1",
  "key35": "2N7TVwcYHuHJ1ZZBS7JMXYXKHzzaxenoib68gjqasCBFToQNSipobvn5L7yU7EHUk1gbyfscR6ykDMxCeMBdAdsf",
  "key36": "2j3TwSg2g6pWrLsqmHbQmtiXSNNs6QA7b2NiGzGbQdQwcGhATb8cudw7VdmLhFckGyqcLrao1VZ8WerkNqr25VTD",
  "key37": "5s2weQd9E3Vz4bYfwQWtKkHX4s9hKUEWaQsSECcov2CZu5Mjw7PNRpoCwj9P9WSsLP7gu7U4UghceS7xDjCoHneF",
  "key38": "2HxzriVuPaaT2viaqV7UNpCNzBwAyarH9P3FN3tL2BVQSi8uk78Ydc9QXRGwu6eGCCU9pwqrfmfzqxxGfw69NU1q",
  "key39": "4w1CLnCXkCjrpAs14L7tS3BCyZQGn4FuKf99RRyXrs1C2Z2A866LVaPDzVP5jdw4Ev6jmdSFivum3CRra6mCX5rM",
  "key40": "2bhYC78GQq3E3TqGTiddtmkqXmf94dUHDhrANFg8S8gyXGnECMqisN9WHGvESyVxm2qsNmXrqkRvZWKw49tQwK8E",
  "key41": "2R4gKPqGU3hwt5yZUX6xVM6pBAq3XC3QX3hjYHLd4bAH3Z1yqmjYBSAwtkZLo8yV32kydc2frZmjhYBgBFQVeEpx",
  "key42": "3eZDnxzhJzfkdQ1NpB2KCTeoa5ZCEdXPZRaf6wiRd7UYSxJiAZDb6RgBiwXtFLNSuBFYHwb8PLfSHxb7CuyskhYF",
  "key43": "5dMbqtFT4weeJGPy9dFmrLAec9LhNn9Px4TdqieDtjRAxbY5EwmQ4oaJ6XAoMWcDWRqMr1SFHoq7zioxodX5zgwg"
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
