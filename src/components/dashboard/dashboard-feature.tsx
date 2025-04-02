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
    "4Lz9oQm85dKmrPMBo8TCGJjkEF8ZF5oHfCXwFGEXsFEe52cxF8qJUEhnheJdwEtxQZc7TUhPLtauRwy8AtgLi9bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fk7dcdfymeyKASTMDnLfRYfdZxZtKnhQZEdQeU8qgiX7j2vRPNJZMJEMjyV4BwzecWCJesy9ubMaGEWMepUFf9m",
  "key1": "3eUGrgLpJ7ET5uaBKjzwSfizZpTJBeWsVesrXMRCS7CUUy6RrqdbgSQsAUx8hQhXESUm6n5bT25MPJiKrmneZxTQ",
  "key2": "PAPGzH89TkoKreUZy3ksR366vewLCg15VrF5A76JTVrak2qqQm4SSXKP7gYpFrfGrFTdkJnqtHsD7hL7zrzx1Bo",
  "key3": "44xyJYwvVgsSdCDxGueLNiax5m9WEaBLYEJMUDWtaB6MKZMqrJsmNZvnAEJfGnRPDkB5oX4YD1xrJk8deri6F4tw",
  "key4": "4MyPumEo2DLRyk9qffcf1bDg4bWVc9tu6wHdmkAX7gXcXNQoVkSTLc9sUKacrQwQXxQNZiWMSseL24ohLHiLTLTF",
  "key5": "3HYUsmWHGCcSnjvuxB99kN2TzGp1q5qGPLna2PdGhCFWk6jxUQeQCEWrGfkwLszkvw2nzK49JXYEs3TEZKUGKo94",
  "key6": "7VzXTfDcMCL3Syrz1PX8a6QzLtEpJTR3FEBW7MqbBrtyLmSSsmcrzF3hCRJfzGQx8fmS94SJn8cX83n2HzQx68m",
  "key7": "53ytFmjGPqiauXXSF6Y2XeGheDPRJbv3VYzwNEBNiW7HkkYMYA7PbpdkQiKrxEPhUANBMbd2TTZYtJgn6xHdiVdV",
  "key8": "4CqxovzbDjoYW1UjvBShQQZ3a2R4QpfKzxZhTyfcUUfh72XFw5pqcx5S2coNe8VZfjQ4akrmfzVK2pRPC9886URu",
  "key9": "5P1Yy1CMNsVjt9DwwR6ftrwXCKPWBKtaicpSFuAabuXh3EpXwjZ9mGe8PNzHdTRE58MbsWyA7sgGR2uxBi6sDYT6",
  "key10": "5eP3rLAGJwngEYS3rKnDTMtcy2PbhEXnH1FAw75SfRck2uSNBP88us1qjVp1raoxRMsQ7ezL2YaKHcEcmkv9iYUx",
  "key11": "2XByH3pDoz9UDm3DY9ZadSmtsPs3347jDELdza4cLSSSfuET8qSPgPhmhecfCaJWFp3CxBqj7v8ea1br7Hb2W7bR",
  "key12": "cw5PdTyCAJDyQQKBEcAd7H9GUgY3BPDf5eqU7jJf7TnX65PSGhNDp5W4N7xTJjCKGXbFnXBi1ZSJHhw5yVA3jSW",
  "key13": "2kwRgmcctMAJT81kCqkUrRRu2jphavStjfeimMfm8U43Z2PFZ2mXH4HpTD1Jormp7gf9FeMMV51SpGASWQGeRu2Z",
  "key14": "g11AEDU3x2q8t1E3UoEsY89BN62CpYuAfMoNEHH3y3eLmTVtwMCGLw16h65Nw2S2GjHsu2VXDwARFn5bGatgB2i",
  "key15": "2MuNx3e3KHoggCLSjRDXZ83iwHU91TfqyvihhjkiEocjmbtFoDiD4hCTiEbqLVomHsWVxRXcfQF4mpPDS56oHXMk",
  "key16": "2wtn2XH5AVrysn33mqHSNfd94m8LwDn9mwm2g14wepE6Y41UTbGMj3hkUw5kXbnyYtNRLNEKbcoUUYGfCJSfUJ7X",
  "key17": "3McSULV1C9Xmn4VsniHJyDEuNnX8toQwtHbrMfxjCw1jdY3TiCr3rcvKdas5Ee5DAFsybM3JnKHNcKk5xVV8Vnpv",
  "key18": "2WcRFQXbqPtnnUYKBsqoXR9ZHiW6Mpi3aCVHBFtcbLbJPKMttCB69jv6aiZ9dhhcqzk2JTF9fEtCFnZXy1sugFJZ",
  "key19": "37dhjhkvF9EptrJcMYKQVxMvYV7mQZxpFqwY9esvkKDwFL2kMA4SGLAZtRwCKQtr2H5jVuerdDHn4afMi4JxHZRL",
  "key20": "2bTbMNrknpgEXULsBz9Eq8zyx56d6KBugGwYFSQLEPgZ25QwWTHejM8vLsSEgAQWLuZWWsHJTEmMqdM1vHvd6hRL",
  "key21": "5NpRTFbYxCkwmcMRNG2v2RKdCxAiLbWuUeGk3r33TeaRedvUXsn22qNET9jUfCVhotPvwpyXf4eUvHqEVqFHwPj9",
  "key22": "3pEE1gvR3iecGrugraAQGi5eNzKgPvCciTHpWSQGQYDZPx6QPykn7Q17JemRM4XxWmkqDpVFPDJrXaCvq3PSbs8Q",
  "key23": "4ZpKvA3oRyhXmBikr2he32UQbfb71XyNSNuivGHRk7makdF2cpkhCqx91u9aG9kaB2UWCmpxFPsZtxdzCRAi3TBr",
  "key24": "3LCkqfJGBBAVoyEXz8Lkbox5Jx4pXirGsv1md7foFz8e2WonPSzeztMZ4zfSzFPtEEJ76jB5o7Dqx94GYnJfy7HX",
  "key25": "38gbuY55P5y7ByoSCDrhjsrVBGxX746ai1BjFf7B2VDxYtqYauEWhzZc4xSfZX9KD5gjmeuJjyf1fmwPYUJXnKgA",
  "key26": "BuNG8bhPpkotpSLrq1UsqKC1w8YuSehHPhbY3vohMvuamSMhXPmdKc34TF2Lhq2F8jHmw4ZUXqAMeC273ahyzHa",
  "key27": "4wpjVPGLfWKBFNuCeFuAfeUoA549tCNdEABKN8vVvSfY3REG3TyGDrQonUHJ9za4235hfRu3S6q91qH12Mzjr7fw",
  "key28": "BA6YeGc64tmhHPsnEhvmNKox34Aa8aRuEGUuvqFQewtwxAHqY5YTz8BJwL7UkmwYe1Cc3N3yBL5PeizFDqrYCVx",
  "key29": "5WrFcAR3j75aNtuRt2Nsztwdp34vHMebikTnkuucckAVa5L9pnud5hm3Gy27qhTGbUAg7sipucsGEt74aPVYQNff",
  "key30": "2ZZkJVyHrSGzTEYa1xRQF9m66toB1DVT9ktHLmj6AqQQ2EgMpaDV5f2EYdurXjm2tP3MnuxJwvFFfLmMDSpBHJZc",
  "key31": "3BL71ihDp6aE96tfxDdUcKXPQD6mT7sz7sys4B3WCwES8yVNfyjXCgRav4tC1vo2nhYLaod4DtJoXxTTfbGZ8U2H",
  "key32": "4xYg5PEv7K4qvDe9BzaFP75XCnCeXScQM2BRSNUQXVTujhaxb5wDWsf91Y3QqzUx7Lw9gdSu3Q1Nqmsc1mpnHM5Q",
  "key33": "4wL1TdXXsAe5Zt8w9fsVcCVDLXxeu4niYBoicW4y6vrnxqyjB9Z4vxVFJGpNgRywDUHLcW6EMV38Pc94Pdpo6m2X",
  "key34": "4BuArdZ1KoCa3WxSSCL1zwyCexbhRcZddcYqUVjhRbpEiHEdxBpBLyF3BQqs86DJybiFxXCDLx6R7p1bqe8Vkd3X",
  "key35": "26DjpcCGncBLDoHhmcD4q3a9qU87JRoix7JcYLcT1PHJ6BX7MKyQccnLcvFj6zAmNNYZ3zdi5jjD5q8hvzqY3qvF",
  "key36": "yApbBe7QHqsH6Z5Q5fKm5cYak66uShemGEoi68q3fDQPfBenCcrMY1eNd7Hb9TjwfJmPiEw2nvZQYdNR6EVLGgG",
  "key37": "2XKoyW9AXixzD937K1kW7zyc4dUA2jpEubCTgiNJNqveimbHbStFbn9HoeLyfnU8AdfL9zd2MWBgy8iKY4kjbksx",
  "key38": "4vrCbSeNPTrzTMTQe7ZmHKmGx7ayD7vixch7yN885gQfZLJjPoiNDL2C4AvMNQhGmnHXqzkWhwAWSUm2rFtxPiez",
  "key39": "2iVEiWG6pRryZ66jn5V6GQX37G7DFt3KDohRAnYZNK2CL8v8pGH2QAv3SYxB9RL4u22JkNcpKYwswAhozuKaUVxB",
  "key40": "334kmdeeRaaQ5zR7JUiZVDrhww9Uey2eBAAp3gfKvT4KimdtwrrrV6aVAHFxaRh2eJLVtJHkaXKrv6PwdLKJbY4k",
  "key41": "2yxriABqs6Lj7U6RKBxXKX9TmDzxSZm8yQXb3mh5GnEbbht6LCmrrfMkXCATdLEvWZ3p9ZbCi9vVntbUxXdYHxri",
  "key42": "qrP9H3FKkN9zdMnbxU2iDMd5cvTCzZqNFVZdwY2CdDfQbrzpX41nY2KkpBcgXmaiNmVZbBP78cfZknNed8Wp42Q",
  "key43": "8GUodxtPwuanTXQkohUuqMj26ovy2hmqgXUsPjSpg9FC15hXDj5faiqwihtKzkeWF3N4wEVeFJG536m6NwLTP1t",
  "key44": "5xaNQnbJtY7YnijjuGg9rv8jrXGzQreTzKDhHaZ7q6DLyoAUYtJJux5RoNNLWkAqH92VTkNrdZuVqkTvBt7pSfYT",
  "key45": "5269aAMmoUaTB1tKfK4p68xShAWAiincfAgEEWqmEJR4Qy97iLJQowJcp5MwiF47nf2mh14NBQyvEomsNzSaNPoG",
  "key46": "5LMkg42zSqnKiLxLbe3Xa8kAPsxC5Rpm3qEHnLz3qo4DdMVMSbYwBCKeYURkK2QJA69EbAJaGtq6L2z5NuG1gG3F",
  "key47": "2MvrQ4iq7ArK1ds6fF8JFkYoeEa1fJsCeMjykWsexGdhavi1qZ73HjvVP433LpvtH8KryNZDDnNwZFRDsi2SmBfr",
  "key48": "14UAxDQbzPFuV1xNzCUJxxsGmptpCE3DakW8AFAsJWKAkFeKVmHtJYPCKqzWMyLe6rJsC9AfPb1N777jPYMN8wK"
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
