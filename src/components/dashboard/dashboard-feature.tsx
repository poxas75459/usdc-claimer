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
    "KPncooem636Z5UpFF6baMZModqwP6nJ3rxR1YTRPstXdCnLfhPMzNuyMPaNuLGP7t8eZPNJu5XR6eJwWjAgRLTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PGoaum7SentsqkKSBbtfxdFqpmmozZZp3tBfAz2vVTQbfWg4jKMD6XVYGwA9FrdVVoWjUDVkzszwX5dLbj8EqR",
  "key1": "2GDXfibSEHw2Q4Q7beaHNT5GXMyD8KCqSkNqToa5no7dgQgUVGGb3Q3SHoPyEZp5VLQ5Qzdj4EatEPXQmYtzn4W9",
  "key2": "2xGPHKDo48QKBXv26kL2XRoFa8k3a7c77tj2QM4xcjrkVyos4SDW5eLJcwK28ETrGWjHxPTmzGToUy4udfD8PEkp",
  "key3": "27bM7JCgF5jowEhtoMpM6FwsARxDjjNjtSiavUQQrQyRvbRqd1ToezD28gcFt3eRB4N16jJb3o8C5c2EBSkDhiUF",
  "key4": "3sGNRK7jxBxfd7UPCqu6Ag2knCPcm5K8QqYa9nuAarjuZSb9Pt8CRFiusHrsnrDBrHdiAEdQRXPuzTNuw2ffqwfy",
  "key5": "5fa5USjVSmbfL6K2udf4WXXTRd2BJrXvpXxZ8qHtddR3T34fsFtbd7HosyDt7Lz72HcorrEHGEhpHz94WixYvK3N",
  "key6": "5dMm1Lg1a6ktYRZukwcs9V3namDjSk8XtgDkSgEacxDtLACXdWWLrgrgHT8ayzTACQP3kXtVgGafi7FAk5zvCmgS",
  "key7": "591Tr5W7FTXfxAFvoJbK948EigLJwj6uPW2VwfauvytBexnNRu3r2PXePWRKyZXjwzJoZ2fGYRWwfA9Gz2ptUii1",
  "key8": "2HEEk6vgnmSqiBzhNbpCxYkezdP2yvJM7UxZdNr7tnZJ5NmS4Fn2kjS8DkpnfQ3SVNK15YErKBxWELkWz75hN9wa",
  "key9": "3gQzJmfvGeVmFuitaNCjvuVK5W9dGeGkdsaCpAedMVpt6MeFQ4qqpvnz9LKYdH3G6zi4RJzg3yn1TeumeRBQHRA",
  "key10": "yDy8xTdJoY4odcFitKqojLK9MUUjXSdii8hTagAetmg2UQUiXYshXWfLWB4dp1aT3mPbEp7rFG37uS3tQnNMVUU",
  "key11": "5UiVSymUDDcJ9jiH6bcFFtT5j9k5V9f5mgc55Fbo1aBfmSRmctHpWHe5MyYM8Tm81hY8mpCeqkfnRbAwesnvqbnB",
  "key12": "39nmrJAUzBK6u6ZvVB327bLDoVvFXjUhxbVeDdS3vreBeDV1BxGJvy12CYHL5RPKbJsaUHUfa82kZqASo3oWaCw7",
  "key13": "yoqbZi2R36dbYKvD74TZYpjY9qjJW1dE5FShLTwbgNHSwbyMv5punVtCsvaRBtNy1LQRMPVurb2bkHYNgnUvF5t",
  "key14": "5TtSdEN5QS1Eeva3GnfP1oiMC5k5VGQWM1fUnoVE6RrJ55TY64mRN7Y2eRevLBPP5aNph5f9kx9PuAdzKE6WopDf",
  "key15": "2wZ76CCivNWpACFCT6ZbuvtbfUc3Chm2Dp2A2DEYrAEFhq9Gk6AAJgEwz2injPU9vfpZ4kJBroe2DvGsNqnVbrYL",
  "key16": "3z5XpQQhtGSdkHyDXSUjtDcQkNR3yBhAQnPywpe6ESLk3M7EKZ7Lf9q3y7rs9GXByD7bwY16jEdPHQxPfQsyhp3x",
  "key17": "gJGBCFfFhHcqyCsREfrubQja1QaaZ8FgYZWHCykFQJ1nEgux17zGrbi65rieNWfGh1YF3oBMfdVy6pzjQ56DJgi",
  "key18": "3C35PRZUZnmajRa35TmpGWZE8fxoJpG44ZzCfSnKQyytZfpkkQn88cPW8VzGhoVsiAjsaF3FgCCXJy3PsxEyxMXx",
  "key19": "5MbRkGZ4DzaHuNMd6tLJsDfeBu7zDg5mChNna5gGvHoem1B2iTfsdKiuB6J8dqmUa5Z7oj2diQkkr5hv1LHYKGt3",
  "key20": "2Mmjc5HE5Z6rSCLQx8Z2BWgSgEJ5WZYxtKzwEyBrSk4ZLzx9QD8Rq8y5M3nuBZt391RS5axMSS6W1fYU42ACzMRA",
  "key21": "41yESvshV1eDvdfbgS73tmKYoKY6MyRpA9jEBg51EWqVyfpXBNQ8cD1qiGQaxaLzSFEK4TcTYNzqXYgQ3CaU64aY",
  "key22": "5rk81iawMvtysPTiLLhfhWLG5nyP3ciCbymGcBzt4yPrR49wqvWygbDNmAMmxz5VEz5i9tXz4AV45GkozdnBBBcZ",
  "key23": "32iokP1Nf5hq76tnkACrbhWvzAYLx3vqgb4FNeLngRDJXTVCBUY8yXPKccYYd4oaAcKrk46sbwBA31YuZB649N1d",
  "key24": "65vCLLv14Lfdtqs7ppKfLB3gB7ajqFdvTtcjnFyB8AYMBjeh5N3hwmQveK4iJzGY4nysBpfzn56enR5SA2EyBw5R",
  "key25": "3UTMriXb4mYiZJ9Xw1YdjtcqHZkCNY5PJB6XYeqBudXz7xqQ8QLA8LPqoHnCezD7r23e3mXbE5tuj5sokfNeGH3N",
  "key26": "3r42fvo6oxDiUY7XaAGT6Lh3oCmwwJs45Ra7eUMxJfcTRRzrrSYq4HcGcTFMnM1RngWPRx2bczetpcTXuaVGJmY6",
  "key27": "5osNa77wqkJrfr19ZWA3JHjs1Z7Rt91UKjghtthdTrzWCDSPoC7d8DxYb15Zj7qxk3vUb9WaFzY2c92j9GVFnRCx",
  "key28": "YMHBXrLCJiW1zKmjeQDFE4xx95UXTxKwQx6Bu142W6GGoRR34gMwoUnRFVvPWAzubck4MQNF1awpJ67QuyQMwHt",
  "key29": "5HGb1Mij7cL9Ujrjt2NK8zUg9JgKGixpUEXnCiSmM1f7ZZrYA2gxxxoG6GbPLirh19Dd5imjwQABQXSaTY5RYtV3",
  "key30": "2JppzpMxZ51hLjhFK4jAnA78HAyg2bf8b4BrqjEMBZXBMwKsDymfCfNf2CRrbx8j3HpxD7HYrua8bgoqJ76gyu3m",
  "key31": "498ELDGW3W8FWMRKsVrejCR2tA4Wwtyvvaw5KcpkfnL4CNPZidTResa2t8tFBt9BtmH9XuBYXmjWF5U8YRabSEci",
  "key32": "3Nx4xLZkBbDj7R9EuhuzrxFM191ymfs1bfmxA2FjYeSoUTgpaxcpUt4YkhLYH5BASAUGkARyEiAZHNMJmqFbCpdr",
  "key33": "3EuqyY7StQcxc79SrudnoGsD8wp6vrzkp9n61v6Ws8PvyYRmLy97DWxcwwCvBZLGbsbt9V7Za59frsQnNtuVZZna",
  "key34": "51D9xcTn9Ro6C3Uud3Z4ecRFUGcdUtaLUQj5gGZjREQcpTZUKM9BrUKJAou8H8d8AJHpaXAWKqEYXVyPBBW5LP99",
  "key35": "4vnYseTgAEQvNpdzkGf2trGkBj2adDHniLxxfxfe87CBrXKJiR3FhRxSinQu9iUnQF4nb3xCgAsPKUbyCAgHAVxC",
  "key36": "4cES1Hi3Bn48UhXniBymW3NEXnHXnHBd96zS6AxHfLHiXXhBMJKTnE7nUokWBt4XgwNhH9P4SxdFFvBJAj3RmuQi",
  "key37": "67cJhr776555jdARuQ59oeDHhXCPF7Xp2FUf8oCN8dhmZBKj96qm7vkTFTtVYRAzALNvDRP7AjxYAAVNbnyR2DKW",
  "key38": "36owfDvdGbv986FGR4dbgbV9FUSj4C25DTokKxrVysXqhimCkx3HLo3jzXezTFFU2YJqVH2MazS448e5Af1CerfU"
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
