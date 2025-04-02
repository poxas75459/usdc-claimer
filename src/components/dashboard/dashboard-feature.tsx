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
    "2LxgJKQrVVPhjHbsyDPdeC22Ln1xcNFBZsE9CikAxgHy8w41Hfqqb9ssavrdzJgBCahY2p7pjpsQgxdx5tre8tmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyk4BHPCD5jzVJV36KsppfmfQ7sLBP2sz9wSmTgyL6MfpRaLckG8MpYz1waZTr1CHsXVidojf3o8RnQbyqACPBP",
  "key1": "3n8k3bueHJpoGrfvWyvGsphDNB9fFNkew9NLQ9nDT6ksYpqJhaTDSLvk6F3dbxAANttyYWp8SaNz4uyVrRppFXao",
  "key2": "4VoZ1sx3kEE8mY44FTHy1xCxaHUwsE1v6WZVwn6Txj1SjVEdYqoK4UYPJGsjbHSMviMKK5ip2vYGvkv2eFiWNf2m",
  "key3": "6YH1rJj1Txyw13gYCkYm4CHtvnGmuYWGowDNXP75CcahaxLJY9ojbAQboFic5MRMJaYDwTZHy7n9VCVGFBzCcDy",
  "key4": "JguiaXekJ31bW7GkTMmUjPkJHFjPyriHbB2tPKKbMv8a1RPqZn3wXuNnYaid2B8G3UwkPtUrUmwndvczERpc1He",
  "key5": "r11WVWz1M2uUFoZ2aqogKEzvxmMsjPi8xKJiVzT8rQz1516eiYDdEwLAEN1wuveJdXnTP59yC97egwc4EMMxaYx",
  "key6": "314qtQxqtpyuGn4ytmJqWt7GxjvZj33WfgXvjK4VVkHeUFavLTpvTdXLG6zapDXsHr8jSvU85GuK8qwiVt5oJn76",
  "key7": "26wBsp8jejkQwbyAfBtguwP2nqFXs3ChPBNSMYNhXqjNBJY3y8DJMVywWKtpLfGFyHpNBbej4ELuXg9aibZm2YFB",
  "key8": "3MkojEt59s6h3G3bakSuNo4ewMVF1zVnVCtChjstoHjZWhNZCCr3twbnUiYRhUqVwgjRrbcRMRxup3JS1fpbCpz3",
  "key9": "634K1Mcc7peEnKJ9UAJa9rnXhaA4z41QN5EQ3D3LB3RhggwVgSBtYJWYNFBZDgrhvPxp2o13u78fG7w2tJ2icSvm",
  "key10": "4RxudqxafmScairpFxGpCN1C4PdYVfpHG6LQ718A1PQPweyKoT6FScXKKyBMqhR4ez8vz6qr1F2Tq45PtbTLT5K6",
  "key11": "4ftr9jFtnHtF5wf2FcmFYQP6Afb2QHaRvBXjHjNAdwzZzMyLomQnWnzcqmqVqYR5bzAWoqMmCzHS6CV2QADqrFGg",
  "key12": "4jxPMUJhWkdguydExKWeGjnMaohkKoQLuUfjW4XgBrkPAip8r5KjAAPq5YpCBJR5BXn1HMj7WZbjuzr4y2u8ATqz",
  "key13": "4fjupYwhxJGpDiLYYznvg2cwgKFxvdL67TYRCi2HK9X5UGndR5YRqgbNbkXSJPEzY8ij2QzrivbqcX6TSug6wu7Q",
  "key14": "2gU6MwFzjQipFt2QBEuyBB4q3nDm9fWrTyHSQgDfShV5SmfJYEA7M3gdnTK5EQFdRxFE5uAvUMeUXVKSpxzq3zCe",
  "key15": "2Mi8Z6Lm78qGNhGYNtDgcRHSoTtg8DysuyFuPShWBCtkpBMWQVHNULwncsjh6Mpcg56SjdobijxoKn9tdMMw2JeM",
  "key16": "4hi6DTD25rrxYuGicaewxBTPzFkXeVH8iigcaXqQqMenMqcNG3Xtj1VNhfBdoSMtYvT1bk47Zd84TGXnHVGoMK17",
  "key17": "5cxZttErU2fTWE9p9erpbDtGqvYS6tDcRzdm8YLKUcqPrXkLGSvLp9vXU53gUmXbtzKzwB3UrK2REUKJrNyQJmVh",
  "key18": "4VsYpoK1DbUTJrXCafXHR4zPRZiehAcGBVb1VxyUd4tGvBjurmXDQKWsn3R4N3TuUzcYRzMA9cmFofwhnkK8gd5d",
  "key19": "3Wz63TVsSHoZyhsYJyqJsof6TKMW1kNXBqHP3LN7HYdravkn287H1JwUfH8tYHg2d2j2m3zPdVKeYgT8CFTFdCNs",
  "key20": "25BVuMk9evpFnm2RrTXGEu73Zz9g7MHaFZYYfZ97fxYh8BbfZ9jmFRXfh92GhgxVJNKFNabiPucibto38tuNNq3N",
  "key21": "EWybc5eCGxWtTxvMaNigJ7eSeMuLroZUPmikWLDhi4sEPitXETtUDvfiRpyQTsPZ937crK8fs4vguAjhKfzCHNp",
  "key22": "5SJMkEW5jegAxiormKTwah4Pq6Yu3gwiVhPv1tk9xFnoqub3ftp7b7gxr6ChNwohYFQAp8kMXEcVdJLWyhqFUPfM",
  "key23": "5u33PJpGR3WCVerCdThXvHRep5ZhJBqykxGponqt778ASeHH6YTokbtRZjJen3fNYZCM9PhwpHrrboF7762bpGAH",
  "key24": "Di2hRRSm2bGGCweXzVEUvRKcPevYJoQx7fzAcBheJB42otEeMWpKFPvuHzEMtddNbuBha4a9j17CbjxsMFz2oiJ",
  "key25": "2mLeAVghQnhvci5V2Tuwkej3gMWvUJSHwXfPVNmhvBnjjtg4eufbVeUVxmQdCq4jDeYsgDP7Bnv3X1eYs3VkwxhJ",
  "key26": "3yZSJvmKyAhaQbHxQ3dWBDybUtDLeQFdAftLzeFopaEvAzvXpH599MQxvg7WUVun2FgarLJcq9ggP4Fy6gNTnByP",
  "key27": "4TQWHFvHdkoTmHRrvjiVDNkc7rqdV2ZqGMaaM4zR7e1bQEebNpJh6Qq94stQrZS6WfmM4f76wcLuf9GczZKrDiWB",
  "key28": "3EZZkRL1bvUu8y5HanqFkYJD1qMrB43aCGTvGaJweqfGybTdQ3cBteP9kMJZku7tKZYqzN8akS9crG7muuk533kn",
  "key29": "3KacjprzHTS8DTzykbZzeQo5ENeVvzzNHEm4sMyg3rik7fekWNSR3ukzL2g5deWgWmc9AAdGjhWmLcsSgftF55cx",
  "key30": "4WXa2gpJtcqm2t4BmkSg1qm8GNTBfzfPJ5wdBfKBAFheJBXavqUoXn1vPB6PhYfvXoGf4unJ6CYQZBrv9roXCuJ9",
  "key31": "fVXn9u85dzrJLesPCi8DSDnzKd4g4BRAHcvuqHaDfimRcgUZ1o1ArXGxigaWAQdKSqDeKVhGeLZejPZZLfM3Bue",
  "key32": "nciStUaX2hFkgFk7qoqmrguk4meQrCb32vhq7xh6PoznMeTJ5LfvqNs2Nrrrs4HVNV9UaSZ54GYjVT9VjYtWDTa",
  "key33": "4Qra2X7YyZuh49HnUSS4gFKxLEe24WfhyhyTH8wr6SBiTQtdoGnB2URPxh3jv1amhrU7RPtgZbGZgz8e5TYvKsad",
  "key34": "4TZN6NfBvRjAwTCMAmurHgiEn1FeeoWxQzA6QmBV2ntHoAbzZXNtATqmCHaf3CTcdwkwEjovSv2iNg5VeuWKN2u6",
  "key35": "ZbaDZEpdH1cKLxqAQf9i7Uz7Ko4R3NdMdES295V38Z6KMyirLzdK2xMxb2pGj3NiXhUvjeAgWRuxxDTKtPaQknF",
  "key36": "4maK1K4Ng6bq9AVPzXy9tBA5mXjknL57DkYam1hdX2TaVTiFEGwcorQbzTANa92gKTHby7jMqvhprZ1ic6TZnH9o",
  "key37": "3EeUzVSQJpYG5KggBoX1QTbzQapdtNh11GHkqwZJwaXjtrjHNSgzZoMnQSDAZMyQCzYhNkw83HP1u77uHsc98npT",
  "key38": "ZcsbPiB9y5VEkacWT7eT9w7Bdns9nLbtHn37QkTU2Nc3EVG9SgUbfYaXAfzGtwYt8XQeSckSYhs4kHCCgxTHeQP",
  "key39": "2uH1rp845b96nP2oUiAnR6HxiKy3zQ5EWAJpHTEyzd9gfxGSMkMR2CZiipHRBN63or9EcnAiZckuN2NGZGDekGpJ",
  "key40": "3xZx6AQdkvcXqEooQfM5jWUxrc1dsWr2LqiMGAHs35M5MLrEHjf3GyiEBv7ZUGXHHx5tZ91qcWpwx24KAE7k4buz",
  "key41": "2hxBELTu8z73iocUoFVksHbNnCG1BLCNbedCSybDwJ4xoPA9eGk255NPidWSKGnrGSpexeSyZWXtaiHkxJ9tQ28p",
  "key42": "uoetJxfbUc6JotwBT3CM7FNfjWAvo5ZokVUjDnUtZjfEte3XTA3giqcESQsTmLNsgPkhNALQ3M5D66Q4bZBp6ff",
  "key43": "63ioxqFARJciUP6thp55G5xGiFePS9qwNzNW35YQYRbxgsVdKgRETu7Nv28kKkcQjy9yZkDMQoeatSLC2HXnZEi1",
  "key44": "2XmYEYPiyuV2W2hEju4hoBCienLaSwKeatNSy3VdPzqFTFEYuc9Hj9DDZhhmCURpik6Dnq9EbrXgmYUAekQUGEF9",
  "key45": "48rgpeVkgKNq3sgw6X3dbVKymEEZesgzLi7cXuop6w3KNNrNAudyo9QoQvFxyHtd81GVs3PUEnLPXdxK52YRs5yz",
  "key46": "3NjsATNiXRp8CgwfgQAc5VpSTvbtaokWQaJWz3Y4c3Zy9Ey1NwXj71ojjDipDBVretHaLjQxV37FaTyoPFti1D7c",
  "key47": "4j2g3TN4B1Rovf81io83TyDCkFnsMopjkxvvhfEMJSmMbArPV3MUmAyn2EktbcZUdZRRHisbpcGdcDFhkkJBYMfx",
  "key48": "29Bn9gafHZxnJ8mDDWnHTe2zVrDRRA98PsEeah83k4Z75DyqxWKd5shNzWquHTnuThXKBNiP2PNzm216Fp87Dfvz",
  "key49": "2tiwuWMsJ47tBH3xqAhEWpuT1G7vD1hFRpBYR9Nxrmdkccaz9TmJrQRqSkGQQL5PLYcQZ7zVUW23NZrCUHJfzmZP"
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
