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
    "guYUbdvgj5sLi6Xcqksg6N75W1aGPGwhKMkxRveN44yp4gZurNU6ESek4UafQJPVapp1AhhkKb7zZKFY5W4jrSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddqXwQHSgqnVoFhvXoF2tVJrGrbpBdkLfPSRqBn9p5gpAVc7Vw6NzZx5fLyTqsv8uCj1KE4f8LmTixisDskcWkR",
  "key1": "35Qz64RmZQb9MFyJAQ5ETvLwsZoRfHEHMgQbQRspgVpPZLZV5r5StpXv88aedgbnjDATSeLXSqnmzr4y3s5R8RJu",
  "key2": "2t995LN2hWSSnWvVVo6p6YNEgvAiRWEBHmigWLiEHn4MHBKJEDj4HRxjhZ7NfWoMhNCqKxUNmKeKXWrnebA12enw",
  "key3": "3vf92AcLUoZLuAPdVdi7pb25VSTsjrGVK3e85w22NQ7VpRzSM2MvM9WEJrnTMsEPMdbc8qKxhtvNEfUgCkKnT9mR",
  "key4": "2H6q4ywfWxtH8AzvJ6Ug2FGygcnUnb7gRqT2eqV7p8LD1r7S3hQaVSvwwAtaMmUktfAc549UczuamBC26BjDRW3Z",
  "key5": "2otePyvrKmLffYSbLbwh8Rz4KFDokrw3EJZM6XSPrLbVJUDALkfPX1mCKTyuCKaZir7fsQ8Qqorb1dB4k27pcLKp",
  "key6": "3wq7X61VZzte8YbMLHen9oxMVcEwxyTeytnqbciGxoXmR6V1wAQwLTxu2KqbeEB6k6yApRVD7xgpN6faRNo5fhqL",
  "key7": "4nnzMpnRfBfbzKEdeR4YasTXXF5Kxt6GgsU9AsH75set2KuAFzB73aUZfyR8rDHD5er2zrUYeD6YB6k4MY1rSLmP",
  "key8": "4nq3RzHvpB8Gym4ScAZZV88Z1N3yzAGmUUGRodwN39nZZBtfU3sFVatCnTZvvffJhhUBtr8GNesQHGWLyYyb7UKp",
  "key9": "2JG8o2inyEbVh1hvUThso7ETSfkJ2eQ3p1r21dSWyWHHK3Y3CYKEFci6E4hMggPt23k3C7tVpFxto5Hgjns3Pvw7",
  "key10": "4Dpq6SCWTZ6XjbxfU3EGkCJ2ADFoVcMewptyVJpsWQdTQkk8KA9QGav2j9Ya9QHbks9aLaV1E5hjkkPje1gQzEAr",
  "key11": "3KtkKCh1sDNXftneBExzTwF9ki1VXTdyrZzhLeMaspBsLXJAzpHwBPZdFAdGSTie2bmxNNdYYz7QPaixh1ihULTk",
  "key12": "3STK7Xa9VSCdtmeoEt9aSsFNEoGWx2K46Qw2NjCQdx3wZsZNtXdYadGorz6vcWWSmhbmD7LqtAZkxEUKBG4qAAqA",
  "key13": "5AA5uuUp5JR5jDNxfrqpHrGfLNBu9gjGwboDzEqHMjMdKPPf2XBeohvcu2KXSK2az171NW4cu9e2ehR8jkC4cVom",
  "key14": "3BDFQ5zbytQB1pnZBNM1uCGYPNDz3F4uoisysSkvZL6B4ib7qAQXLY6i1bNp4iAfkbXPZGnuPG7QHCctTgJ38PyJ",
  "key15": "3fPNWBznkKG7CKD8Ksv9dA7YijJ8W6dmLn8KS2ceFkEgK1QDa91AGULV4y3CZUnXN8EgXfuRpxWwcqD4b43JfBYR",
  "key16": "2386AKDhKxeZhS9EaCPzZCYmWa6mkCeWAVwC6mUwawR6KQBSqw6J6sEDsZ4UiEhsDdfb2YJyJhdDraJM4Z16ZQuG",
  "key17": "3hzqxBSpJy5DXocrjj7SdYQ8Xd8HE1EpsqybVG7mK1dzaYjiXdRWZLtMVAPgx8ghcxEuugHDsBnkABQsocYLbFQs",
  "key18": "2sYKgwuGRtEj6JRozs2rcQx9oqE5zxit8H4DvHMmWoHCb2o2MBSEa5Xzec9BCrEuGnDw7T5Zr8j8qZ1TzrEYBt8q",
  "key19": "5DqcreP2TJ6bBEZEcD1w17fpoF6PfaHnYe8dXnbwyZTdTkvgyPG2jZgQ383rv62djyZhFiqYvbP1U7vPRyUNMJQV",
  "key20": "3EyHCimQpqwFTGpUUYYsa1JXSsivnUxzTNiKWs1ysiV1BLKcFYiyCP9nwQwabWL7LLYxuKN3TsE8MknyAum2cv8j",
  "key21": "3yg3jJQ14dwvvCECeqyqq5UmwEzEgAMxP4YKPiyXMv76VaqfP8tPBEL8p1tUYgeDGKiiaCMe7uSTHSd3VrckFoDG",
  "key22": "fFVrppJX74E4E66Z9178kmGArPdryWNCHt3xEwFDLpa2ogBT3fK27SoJRKcViWKngZdSySukzfdGx4wB6M38M6q",
  "key23": "3Ti2X91RUfPGmU9Buwp7hqZZQiuTmT6ugSszW5H4GYQWkToHvDioNQc1SW4mjLLqf97pQQijh7V4iWN437BGArf4",
  "key24": "5DibtZeDjyQ421qjFyGqezgVmY1kest37iQZhHW38YsU5j87CcR5XNNoCJUUZdrCcNqwZHHHs4u2vCaKzsGEGaNU",
  "key25": "2ZRPNd8oBaY2CgeDn26F3HWqDRxmJbVkUWbjfbJpj9Zvtb94N9mMG771PBBTbrVNPSxK2bUQBDyFT8cjJUMhiZvS",
  "key26": "32S8SRjpnXBicWXzPVUD2FVCBgdUy2t1rVYcFq266EMnJU6j7zAQTfLMEumqveXxxGH3whUcu2TgN4s3R9GP25Sa",
  "key27": "4AFhVRnQ3VZu9qPUgNwTHPBySP1rHSKFk68EcEgTSJS7bV3mWUU4R2Yt6x5NsHNoKHSTdDwDx4FkGRd44et2YBkj",
  "key28": "2G9JURAUfjPK5EgKCfvMP6LqTa9nghQVxpkmSrTbqhaF7Pi7VJfiwGu8eCge2UDiybyhTwpwLx76LJFMiFM9wcet",
  "key29": "2d5WKCdPtCNVKA6mr9FToUu73PjccTCBYLBhSnA3Rbie2spJ8iSXDsJMT55AeE2BGPuYs1cPNjRbqBRmERgNdaeF",
  "key30": "4LcQf1EZKNGvrxYvytN3ELuUvxfHDuJ2rJhugrVJKMCtYq47bwUposRJtuTyUPGsmKXg67XLt8FmaHyXG61aBRhk",
  "key31": "54m77cpanrhysAWRDw4NNxNsYBxsJ3tVu2FkwfDxBZ4hQLy7HE38EZ1Kkas5nAeaUAniVLN9EdMkuF9PXM9NDD7U",
  "key32": "2yBosecx1Fj6xmenjWHmZ44So622hsVaDpYbKPCW9jpZfFxfJKiKPDu7yjTCJWgjqMkGSZTgmR1dx8EcLT9vUQ5S",
  "key33": "3vWyw8i6g7CMsdcjPTboGaivJ6Z7TrsWyehKUdax3rvf3PS1P8SahvSXbusTeAx1imKnU9NctmJ7vXg1ghmaijf8",
  "key34": "2EEj1g7Zk3MDiCePKnZg7XTseEfRRTYnL87ZSKdXpNJ6U35G8sF1vCsoe7SWkK22GsrFVMyhTPeQRuPrgkWkT7KJ",
  "key35": "G1CAzy3fxfBFu1zow5u5HMshdsMiZBNFEexCQU75qDfzFo4oMqzxyLtUBvTNqA261JfxcSkNqLwmkuDXzqVVynu",
  "key36": "3AyXVow7JqpZ2JJUPdCauQL998h55iEWE7X2WPZ1yYNzxFig2qyGSpmLGqTbyhTGhQ7T4xeXbu8hihmHqvTUY9ky",
  "key37": "4hZvq1i37hakL6mWMwbmt7FA2QjcudwUCzKFYRcVdWMJcwbPKdNNPbGH3ZpDtabv1zVSfVEenvTSKGxUHtP9Sq5W",
  "key38": "aDeSGJBp8CPAdg3scGUjH2AEVWe1QazBXZ6CJhrs8RTCUJbwrnW8uwd4JHQf7y6uvvDRdJC2RLjN2DYcrduwisn",
  "key39": "4St4gyUXRbzevqUKFmSP1YN8CLXT7UebNmkNfbRRCwNcqm2eVkvjdUh5BeHxfzZgzT57LYFMHxvHFY7xBGvg51i",
  "key40": "fikuPuD6LnMgX2rjiy6Bp6indgi18FCWk3nZArLDVWiVpk7HSqqEXJDLDrNec4g18RCsxdSDzvWFDeHApumYWsz",
  "key41": "es5SBeDrfcNnF4k8pZeBcPjSpZZPMs1XWXGjVK7jE5BSqJfGRoBBLN2rk8pyZuDGqPcLfyRuVMNfQ7XVrTvmz4n",
  "key42": "55HU9nN1X4N6nEXnktfsxZvcEcLrLcNFueRNakfoN43ScXpuffYsd1gXh9id8asTi9gVxw2Ltc2DEXkWmLyNqV6z",
  "key43": "46hzCSY83mj4t52KGTzeswtzeUrkGqDJYR3x23Ka3tkh5Wo8YXayrM8pHBhstgDe52xTdZ1ZhPsHhrWFz5Y2rgSx",
  "key44": "WewatnJW4DFH5V57Wcxghod5A3ax5B77ebz6G7EZbZt7vhERJmKbjTb2dv63dnhrt2cUu48oZ8LX3tNj3f82n1z"
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
