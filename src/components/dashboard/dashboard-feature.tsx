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
    "5VF3Nau8Hpz4vuwJ69ExWmX1gKBMo6ZjNeVjSeo1x2HNQMhESxTLhKfG6n6AEnucviGZLDWpk44eQTm4hThGmmzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r43cx6Hrki9bE4bBDdPKSi1kZu3bbi7vWmZVXup5KNGZooW2m38TnsvSqJMbmieftkJJGTMswQGptFJCJbZTdCm",
  "key1": "2BLCV2nCpRCWWLgMQ86XvJZFujqeLaXafhdZU7g42rXicQNtZbT2G2iXCAALWQpPG8CC1Xe8dsytbSzeFXJQhMk7",
  "key2": "4rzCDkeKfR49qcL48Pib1d2dCG8fxNvYvNjJPipFGAbW6jYC4ZUQRLyAz2e7kQ155rWra4pFpT7MzKKD3XpTjZBV",
  "key3": "2KsHQmwDbL7mko7Wff8XpvMuEAPBcBuKjVajnTks4EqEuKKYuVZ2qJKHwd6noLJfjXA2JSwL6k8dwEFZkk2H8LRH",
  "key4": "5ph5ZeUFgPCAUAniPUiqg5SPRyMSF7DUtC4ewA9wwgF8WSwLAZ5F7v3BzcH93EGGPg9oGGnWpN8jrJpkciAzNs3L",
  "key5": "3rnM3Rs7ftDviNd5aSQ6FcbSSWB1cSmMfLvBs2H1xkTYRtyBwJNxPhQBYhoWUm3egmAZPw3syc94MuQXhzg1b54C",
  "key6": "3Fx7dw1qxMV6aEjKRMAmxoiLbVz8ffjTpUiDYF1vNEx7CwNUUsc9q39YvkWn8zn9wy4FhAhjiUmEXNvHb3ddwkwc",
  "key7": "3g77c2zXdsVEXWpDUBpMLo1acphXN2ncBjoyWCFdxwFmPGfVBGDCaPraCMkPZX1TWdrwkMzMP1w6GKVvoJezGhVn",
  "key8": "jLd2rVmDGb7PZCo4Lueo4insgLNKYpC4ojed1vFPXSLuqfBroZdbi3F1UVPh6igB8vn4UfyhqgKjQfqVR1SxEQa",
  "key9": "XVC8y2vjyW5wTexd2iDc8dvykKzvommQgLoHpxJkNey2oGWdit2GFfScSnSBraPq7ue1qgn4M71YMMPufv4hCbV",
  "key10": "5QfoYTbyvYqZyTJ3W6SWewSmqvXDRMxoGwQi1rRUks9tH3E4Y4g7E44uc1cL2tFB7rfddq6hvZ53kLAk5h7EoFfv",
  "key11": "39NiAeHP4ZmCWrdMRUcciAkUHcqSgwCvnFZfBrhPDWWN4qX4gBdbPw4D8Nfhra3wdRvaZ3uS6hrijopV4FSWnfso",
  "key12": "3HMQauvJNzFi5zwTMJDaPMPecAAwXL1PxppSyuKAiRRFXPZTvhFMKUC82uG5mReV7enSQPDh3Kdra7vPaU4CCwPC",
  "key13": "54gDux73hig9ki6mH3imn6zsTsN2WSPqvGonCUEbC7KTJnM6PrHjfFZAUstcCScSM1xLyxDDV4haYcSznZurdWqN",
  "key14": "24SawPry3nXmev2rXkhvh6b3Q5HqdFn2fkiStwGLx1R9Xfa2Vx37Vtb3MgPhgXYBc6TMBLZQAiKcjWYY2CmpZhfq",
  "key15": "4hbNTSBo9KZ4WABsSdVsiJcp6H591FMYba2Cq2NE3nuao4UJUFK7XYWrHqVMWR4w5cA3eBGj3KxfNsqb15GzHU88",
  "key16": "2qjLt6kthSCSGKRnFDz4KeVWpUjBao983gYk9CTU1nrYxfZWGahG8DFhmXLKaBpXDerht3VKKhiTxdrVYBktdCfr",
  "key17": "Q3K9MYqQBcvbgzFJPMyvy1zkfh75RwiprVZ3eN2P1kVDSBWQT4yU17Y34xGh3wQQRMniDZ3vYWLYTpA6NVWjSz4",
  "key18": "3GjXmcH8DfCmgvQCJBqrLrYxGEaeaofDZUZj5v2AqReaQNsHSZv1C5cpsFB87JVkXXP9MfxSmwgb7bSMZypDN2Gp",
  "key19": "5dt9UZtJiuBJidQp1HZ9pDweYqnnq3dkKRgKpPTtMLtsSmN4zXoZv5G5K1YmaXDWp8f6CrCaSgdAPkULuF8KHQgS",
  "key20": "5w2cGyWsBbxr1L9dERdjCqpxKNM87SdMB3g9QCqHCGerfrZWrUevMABYFgoZd2e25tH5MympaTwNji4petE5C9zG",
  "key21": "5haSDRDeZpLstAWr3a5KPwtGPV2VcgS6Fv48cgJx55b6zh4ST3hePdpt8CYj8pNZJ37Ubih8mgZ3z55hfuKDjPtC",
  "key22": "3EiGqqxE12M8bVMTY1yqVMPq7mwnzE6szK1USsXjVdk541g13b8NgSzM9k85abDjADnZppoFdMyk6L8hNfzd5ufE",
  "key23": "5Vj3EqkLTEuvRDvbZUQrsmHBLDDqEdfKAhPJuQWC29g7EZo1v6gFsqfRthnsbcmumgYQ1QqtiunfqXShxaWDZjAe",
  "key24": "3gyWNwXwXxBTbANt8ZMJjED6P3PKQ17kh5DEmK1NDNYSgsjzqqDQXzUUxMJPXZYC2yttretWrfGAP8Z2TAVcrKUv",
  "key25": "3FaZZ4UNmv8DrfaknNmSB8JfDD4idaZYJLDhQvxqUMjkDfzW5Q7RKM68bW55gLCcHzr5BQsCXUzvezmxbKENLjfh",
  "key26": "HWTkXQrvZUTybJYs8zUsDan6Wrfeuv4fUKwaPCSsDgvEL9gnvJM3QZXe4XdMhM6XJtNWaEYLqcTtRXRpmcYPvYt",
  "key27": "3TNayNb7yfYANuEKbLRgyxFHm1YnSMFDVhEvMmaNvaraUc9aEjrfPuAFTsCuPxdVhWPnSEdWpm2DaxdVyB8oticP",
  "key28": "5ccaK7rmA77cerqMbEjPrfYrEZgQACNSoDV3q1pvUFTDhHDsWmaEFgyL3QVzw7xE8NxSi4Zf4PSYccNWsAWzTSVN",
  "key29": "4dZZdP7bwSxqszp3YZbWdEhhLX7gS7u8YbWqo8oB8Xi4pKucAoaAkqmAm34vTgGgAsAWA15VXAPfqN7JNE58KewC",
  "key30": "52qcDicCvN77Q6kfjfG6PD3GkQRN9ryW77Dd55iq8KzXRBAhJ2CHWcrGMbUPZ9fQnCvvRxDN1N8Nf6a4EWWKJXFS",
  "key31": "5b9669faXA3q7DBoQJbwm7bxPJJbAF5N3f5ZikTv4o7DuUSmhp48XGechRr2GdMGtcHnR7kzHnX6u4nw2BF8xEje",
  "key32": "3UViZgyFkQC5Zh4kCJpbxmbmNMWqyMtGhiWCPBkQYFT6YBEequ1ru7SzqgdG23pLuWUZx9uvdWmw69s8cfMqq4ph",
  "key33": "du7egyJ8SHijUeVvmNaVoD8jwwyy6jEqLkz2d1dWvHumZkAxh2TCf6sPXBdUf7jyYRe17JRHDzEcC3jXAEvVzxa",
  "key34": "3PeiwL763j5Nd75i7H65mmRjmZV4KZGYWPq81vhRBqx4dHwuySQtxW2ocrm2d7siJHcA4YgS7Exdyk5Za6m8SbC3",
  "key35": "29szbZuxpAFs5CEn3yZkc9fmv1XHUvCZJWMkVNiUKprRgLK8gsBr7J24MKMGwm4WEZZuREcdR3uaL7f1mqnP8EkW",
  "key36": "4WnxFCas6JK7NSnZgetL1R8dVvMm33GnFjFruLgMoVdqheY3q7jqfmBVswsFPbovmqJYAmyZ1h7iNYV8mevHGTEs",
  "key37": "uoiJPjP68DVUDSh79jTmLY52wc2bDXR4cX4YBcfZsbyewRES52AgYaDyaoga4h8iFmhtG4J44WktgsZaysugu4g",
  "key38": "5f1YC18KR53MXcweczXx22SUoiP3mb116sCBPniJsC2UncDv997BqZiWB7UqfpnLGt7dYG6tKV2gYBCEyPyLagfv",
  "key39": "3q8acwP5WwZ96PZ2LGtmsBV57trX6EX4Yv4jSVdnEHpdiXzLaaBPt2u2W5mRrM4gdHDEeWUm7EhzVgCZY9qmH1iq",
  "key40": "3oqEpT3vTwfRkbErP6mCz4Wr5XdFDrffxxrmp3SzVAdLvcSwejtssV5rgstpSoACDE6vweNTMfBnZyyJmjMA9kA2",
  "key41": "2yxo8BJRD6xyXiYx3SFnuheM12RzrSUad5bBfmkvVTBNjCqYZu9EgEncWAedH4JETv4taDBfYN7CMatZA6L7khz3",
  "key42": "5Lab6bCGDpL52iwkE3h6n3TqUY16Aifc6mGoUsVn5GeUwdgBxVc79X2prscgpnUA4dbpSi3RKR8xAeyFPNEm6UFN",
  "key43": "2svZHCBx5CwQkwBFNcNPQtLrzZ9ZpVocwqzmPVKWmGV1w66tStPGoXM8PNTdJmfriEFqxniXBnr9HvT66G2ABcbe",
  "key44": "3CCYZjXUPbgQmFsPgkHJUczXthYq7QhsRQqZNJw7A3cohFrgXoc5ehMgos41wxiKqVfu7EV3KeewMTrtHfkAcKao",
  "key45": "2bRnmFfxN5drAPY9qAb3B4eVjnXyC3GGhHRpxWNzoxYqRkE8NGJxpFqBcpdn6ZiGRcmGsFkCNJ1jS8L7wvZCSHTm",
  "key46": "34CrML8EqNCAnaDoQNoU4gFemCdzLVV6k3afDVNjHZzEgkUFpVozuCEgvgVoGCgt2kksZcfPBtBqaaV4DjZLXJsX",
  "key47": "57yoHaDY771Bw7L3ef3g7Rf1ywSd7pak3DWnvaSaozLqYVMmjcoM3XaeyZhCcyf1y2YLth1rkY63vHQvEdFX99mq"
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
