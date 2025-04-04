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
    "4hKGRTmQEW7msDtFT8wPd7whoZsbGPUE2eKGMW3N9VfYpe66rCatExzoHV77MW362gXSd5ZH8kHWo3rEVJ8QUgyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dg16EuzVUU4QU7FaToJxDskfw5ox5JL22R5M3Q3VAD4tA6FrM1AHCit8h3zh31UpCK2R46GcQnBgJuNjkNyLtvy",
  "key1": "3NfvC7tL7UHaEw7tcqC7rkiApqUwXMARnvfgVX2DtYW6T2MUrB3uEKnimwoRCu9xVSz7HRuwE4aTDkYyeviEBXyp",
  "key2": "23Q5H27sAguTRFyi2qjxbkh16AhfTnDExfKAQ3ewaQ8VgcBSECctUYWCuvBfkFX7RrYH1R2cj286SeHNVXmvpnFK",
  "key3": "3CyDBq9bqQ153Ng7hyEXmMEitzfpcS3h5ecMFiUdo5YxxCFPGwmM5rE13FpoCQifRfWrzFXKWC6xpBrwipVKSuiP",
  "key4": "3CzGQrnZtvx4TdEZpHeoreerrnSLzFZRuD78vQiR3AgdoYbSWoPdzcTnWFjr3Ti7FfjLrRFEsMCVsqEPU3ZuEM8Q",
  "key5": "4B718WuewReq1BzLVdPcqepkF6tYgZCmVVDMWV1cyCF11KrhtCQ3ZCqBGvGMbbfnsfEuq9CtSDae2zm9WJNFtMnQ",
  "key6": "3Cn7cqjCdWoiqMcJa1wNS89dr1zuUs7fpwFtF7VAEwuMTgeDnpQ4cPbzz11Exq1CiDEoJ6SSak1ZGuvMwFCx4WU3",
  "key7": "62q1AuyQJs9kbwdxjBp1mmgWWkaVDKma5gMqLVsUUoBnLSPZbf9TSS1MGs2RCw3TcuY6yqWtt3zdeq3wmr87Q4tA",
  "key8": "5eMNJ8tkmSvTZhkwG9BUoqBtWfRWLo4THYzovRebFe51ZTdySeZYL1LxEAMdVGXCBaALsPtwpCiJsk6jmTJ93pL5",
  "key9": "tqQ4vjVdD7L1PMEfHSmWjGy1bEVcxjo64SnHG1es6GhBTVnLg5rYbY4iyCtcJZtPcr2jLQhL1fwFteQzPMWWfie",
  "key10": "5cYYUKvXqSS33Rh4TTkcxWe63mMkxgUH2L2n6t4ceuJJ1kFNMgonmxQ23xkko5F6xY8fb2t5JXZzbUmePG5fnttk",
  "key11": "3jZFFZqv6cu77f42KobPFkVuqNkBhnnePn41xRqcV7dtGMBFbykictdo5He2HJV2uP6duV9ZiFiU4XKMHtG7aWPY",
  "key12": "5Z7MdSM73Ac6yrJiEwmEKcrvnkeMRAVqzXPUFccCHvVyjoe8EoDED7zRvjxmDZTeL9bXuiVigYiaceb1Zy4cfyAC",
  "key13": "Qzbfjd7X7dYQ3WSsdh6yqqdrnGVhzw7KEHLtkv5v7zfWZvrCJcj6wsryi5rTU2Aqfu5kvd8DT4C6ZqgFcoKeAfe",
  "key14": "39JNz1LMbJ2J9z62FXW27LNe6Ldh9Hz658YWLxxQDaotX2bZqCXu7QGnLsTwcFsH6wcZyBGidRa2JwCR1GuVvfxZ",
  "key15": "3C4VuTB4sK3VZAeURztV8dYvdYPGDSbk3owjkFuhLZfs6etpbz243aJ6hprKJdSUemPy6ySx3A6JZXQnsuMEFVSA",
  "key16": "3w3asGt3Q79qkGQbgEF8qCuWoh55bd21ExVNwUBMxi4QAJpGUVnkyEtfKjHd1KB58W7dkcc7MVXFX2UGDvwzj4uh",
  "key17": "rdawb3iSM8PfpPSgaSH843xzMq7RpYsGE7mSHyAJZy9gfzPYyiTFik2iPdasaGgcE6yaXm1e8okxp1TFawgNvtJ",
  "key18": "2gbo5b8fBkSLoTddTmdAHUnHUEdrX2JVoVp6MY6EpVJJDZMjpny2wiTFfqXsePbS5t8dbd9jK8Fi7NjB59Zz48uF",
  "key19": "3R8Jfcm5L5dkF9ssR9xamt6LABwyhbUkGC9cxfA16MrBTQ1BTg3BndptTmT1Hckj59wQwTbCFtbGUPyetji4dk7m",
  "key20": "3SKLYKFvNXHgrq7C8KRZt2hKM2Dh96Zgtw3C2NsigHmmfhQmYPod4oHn1qTJdPwPUwwG7nCnkBSfVoK2r782MLVe",
  "key21": "4TRihoLKUeHFFYEAW4raNyNSWRMPy4wFowoXc22jgXfJ3jirKE3D2maRB3Pe7fwyFRJQmRAFfnTegj7pkaYrEyuQ",
  "key22": "3zJw3crKivnQhK4BkcDhpuWANcwpTyQJA1v5oHhDgnyz13Wdty1m4xTLwHdEL1BQ7EKQ6xYrzfSCgXF4S2gpEAP8",
  "key23": "8rPbB55c8F3nKn7HWAWXM5vakSo28cvqaicqNTdkyuNCYG8c6sdyAzWRsRYNYffuoZ7hXtoXAuuMQLsP6qKCqeX",
  "key24": "2qbgvcJ2idnzoSpvcMWDV4qtPBZLSGmNRnkccPC1qmo8e38xq2B1cE7z4ne5ZdYSL9t4qsQowXhvCUc4a3WKbvx7",
  "key25": "2HsrXfGeJd43vZL5RuRgFqbpVJ1aPH2L9ebd58NPwE4SBZt1H2ahZuuxeFj16EKdr7DKvjiEgHTLdJ7ohFDLTD5z",
  "key26": "5CgbwdiRZnr45bjMb5jBv1zWR7y4W6oJ22NenTz9qSJ3m9oBtBRxsFYtAcmkbVAkhvzkeS5RxEPU51av2Cojk5sX",
  "key27": "5YmsvvNRvvyCPgBR49kyuak8qH3jGUEpBxBZKBcTjVWEUMeKb8nDY6JvK1sfkpWmVESm1ndUaDxoGaEZNygAkojs",
  "key28": "5URXacozPktLDtgmtYkR8nwbF9WG811mxCb5JvNVsCnug4cZ3LUukNLGo299RzcsxdUzNANVcqATe6xvdkbn1cfB",
  "key29": "51U4x2j9VZ2Di6dmGNAL6o9gYTiT7Ts8xUn9Ed5vMmUeZqQc9PD3eCcMhBpVFdGewiEX9CKCsmdSrSPVnBDHjszw",
  "key30": "3doTSv7ziu2DE3JCoMNLCCw2EsBZBHKY8eRZzDDhKFftfJFQGo5bUgML9JnmQCVHt17c3BfSzj73aZoAM73CZoJw",
  "key31": "4Q9SYzcu1HKSkeWaYPaaRVSYGsjeKfZJkLEvbY77UWVtHn1ZBsC91VwAqKyVnD1DDAeLLcugmSZmdfaBCbW5DFVi",
  "key32": "pVWMfkZBbh36Y274H64mHTWgnjUJ62YfuAb7ZECmzUKnoCJ73YXyw2xeqNibTnirwv7AV6SCvaaumbSRuvexKvS",
  "key33": "3LRSpjpjPETwA1zWhUKJ87iCwyzyPvhBG3nH1j3Pr9Z4VXdCNfVxWfgPkFndpzRkAuRsZAQguEZrLmq1dZxnUhmY",
  "key34": "2g5n9AgYGoz1Ks6JNXHowcLrG52ca22PFfQaZ5qfwpied6d4DJqQ1U8GX7CcDHohWkDPb4QmpMc7YckMXYM2fSDZ",
  "key35": "3itQPc8FngRuv1Ch87UtwKgb64UMLY93JUTZYQG7fj3gMBqexKLb76EXnRcUozgLq5Q2dYHq5QAsmDxSUiTR2uqM",
  "key36": "3W3z1vB6D7AkV8Q3naq7JfWnP1wtqeQs741JDvJfUzA3UDfGC8v7KHdmZEpU8pAqsoPrdqS1hRgQtcqakcNkQe1w",
  "key37": "4Q9w7HbnAwf5mTYoCXzYCr51RHZFZJroyNfBKRxrkM1ni1i1PBkZoRzb7JjAjdRUwDgXwyWxUt8cg2DyFaa2MR9F",
  "key38": "2D18K2i6QdZ5Jr1xUQNgFFF63M2akH8ZtW1pdqn3zX6pRNmH34s63LrU5d9wyjL72jstJFQD45bX45pr1n22UZf7",
  "key39": "4SAXnXD3HCG28CpRSDAjJUddVMEW68QBk9WdfjVGGvabsptMaBTzmrTCsu7kLWo1ak82yxcqttvJ4HYUcvxTRprc",
  "key40": "4P8oQam3fHYpSNWX26BucXdrFkD4C5ELVf9r1oEuKrF6BHepXYbA21SMitXoZ8vrLGvXFAx5F6rpbSmQWoqwX97A",
  "key41": "2X3qGHrzTcga3c9eTcHrAQy1TyHerEFTXt28ui124BaLpzcgGdTxb21FR4UwDxTAh7uovi4SdWSYPHWMf4sV1ikz",
  "key42": "4Tj25pBHcRWBTy83qBY8MZx6yzMrkJmVqHwiTjwDLYatefzzP6A7pNTDwuJEbgwdS1rpJjor5AENYKBmZDyH94zt",
  "key43": "42Rmp5F9Q8Ag15dedpsNYMFsYUiD4NpCbguXSkysCP5fNN1jewk16XxgGbTHJr8PRHyBEefaApFAZqJAdkE1HauS",
  "key44": "2W3t1tDSMEsBnccXcSdKQKgFqXyFbYTYpfZbWugtArndDnkeKRXET71SqnZMZUi6WxwAUvGGo7vEJ31kD3PewrAS",
  "key45": "3JcHkDWh5a3ncE79FkNatCqd9jJEVpQMejrbawr9sw7AJMB3Rsoor52PLG7xqgJQcQHK6bJ1zDNXdMafHSefzKti",
  "key46": "5J659hd2oe1JVtjwxtRN8fRvQuLW8MteYEh5oMjKoeadt1NirAXAn4APG6auB9C84j6ze23MXwiU1jHTSqo4D6Ec",
  "key47": "3tw7RL9d974WsN13posdQe71By1Tx31P8L5f15LP7Ro3mcRhvX9XEdmbJFEXupLRS7qTFG6pdvGAr5xKD8o2QNP2",
  "key48": "3ki29Sy8F5iCtkPoZrJWmyxJ8Sg4TViESNaeckL546WghSS3iXEvsxThUvaxXYA3sBReJW79CAw3WJyvf27bL9jK",
  "key49": "4HkoxbZ2zqshkv91spWRQnsLScs9J71YeXDoTnZENw9QGohPy9dgDYXTKWFroXg5BKD5BLiUiRtGVcJM9akXYqz8"
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
