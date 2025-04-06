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
    "2X2SwpEyqeYmJ5JmPduBN5e3j2ZiGCfS8duQg97nPst3R7TrpFroUfaLk4AEBqUs6QGiS1DxNyecqLiydsXNCZWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593h6uJSL6XraFpzWCxfy2VyfJpNSquRqCzqHWBN58zfjQP7cToKcivZps38xFrhkULFBtK5dxYP5DDXJiCK2edQ",
  "key1": "5fAsALPkHXeHPx1iu2uhsFGue9MWySG3eWoQNbg1pFWx1RSrmQRJ3AdcTma4EvHSZ6m8FpLz1DSRiH97vbroKoCF",
  "key2": "3jnMU3zHXYggRz4WQ4kpQsBPpbCQGieMRaisMqSem6Mia7BCrCCxAiYiZS1hPjTJLbxDCKyt8WhFVD3NCBxQneiM",
  "key3": "5SAxj4P3y7CbBb6svooiHw3GqCKNNeLEJuTAJjSvZ2KWBMm6bGNyFfNVqiRSSjZwXBUK2ryUnmv9SEehAKYqv6UM",
  "key4": "wYTSChQoX3R1XGJoLFiSSroCUYLLjG2etB4gd1heRieWb33t6VJEZY3N1eZtvjWGzuLzsh1Qu8arczCVypw31vr",
  "key5": "55dRJx67gDTkvCjcuCFCtFBQz8SVWBeHggtng99rr6hZF8EuNbgS97gvt15kgPkuXn7YeDAiUTsx7PQfWLeXGeRL",
  "key6": "5VmvPGGKsVZUv6EKGFxSLnEseEyNYjykoHo5pKDSgwaAEkJmwFFE1RxnoL3SABbw2W23hteKtuTALV2EwfNYcg9W",
  "key7": "ZmYZywbRDNLbZ1izSg4AxHhb9HsppfbXrLZBtur5zTxL5uguCzXsh93t29LFkfBydrxaJEpHUTuPVzYsT8pnTZr",
  "key8": "2HtDKrRy2gNzTYpbe2dqQ6zsc1Ze2GrSjJqv4WyrUDm39t11pcfHD4NmH59vnWZzMsPHjt9EwHmvc68Dqhp9UrpA",
  "key9": "5X2WuCNUpsW39UZNJ8SoAidu3HSCHCZSWr6S3pG1a5hnuYXpz4MT9mpPwLzcr5Nb4d5XSi8CF8EEP95JBLWNdroi",
  "key10": "5oxL2nW6R2Lsxg7SMceht1TsMEkhe6bearKvotii6TRhftyAmafx9zupWvV1STtgJcrix1J4C2v2hgFxvwzYNWRT",
  "key11": "3eFVGa1PF7nnLzUCaoX2Ski8xYWGP8s5KxSmpAAKTMX92nS1a5k7xKpXLvip6rcaJSaRDPJvHd47wz1bYWG3L9ex",
  "key12": "673po4jMbpSGvjfSTNwbgNyvocoSsQuRKcvkkbb7FhCuxUcV7oL2ph3pPtYF9tpj8WDz2ZVB2xNjoWxZmC16uTrk",
  "key13": "3hvB1dUiSo552HSMeavCthCNfRtX82jwkcZbn214Njz2PsMuNhEmms6LJ1GUasua6NTNQFdHbRuk1G3vBCKvNRjY",
  "key14": "UJoJqQEwBKUV9spx8z8nzYezsmK73WcyzXCsjrsz48shq1Vz7F5nfkwfY6EiHw7MyKEVxRYAc5fm2bULT6YZi8V",
  "key15": "4X3HLt7vsvpaUm2JRPvnNFBEaJXKuR4KPQeN6MTpMy3LeDmawMfRevq79EyWXnGFj4H4aEDfWwS3GctEjZx4rjHW",
  "key16": "3BcxqKrWy5CKfUUnkTDdTV66VLZic2DCHiLJysdf4EqVBgXdTfLEEER8MugoJTaG2L5wrPGSYZkZ2HudUyqxERJB",
  "key17": "2wfVe91RsSiSQdUS4iaxy5aFMBeB4rrrEWxieVoyWKvVQS1fVWULyTYNDQwsX5PwakaohDvxJq4Xwa7ZmEADe3Wa",
  "key18": "41Xww5BWfCmCaa4bpGpfyyyDv9JaRN8i5NENteHK9kMBx49ApZoAF1zmg8hg8jKbWFwRcHtkntdRRHy7PvrXT2KM",
  "key19": "3LpPJLqSUH4iMu9ZuhEWrVZGF4ut1hT1qHi2NzM3kjf7ZpZyBibtEcGuH8Zwesrom6QSR4xksxbDKbK9D8r4iMKm",
  "key20": "5tGEUTbfMEWpM2ks1oy8iRRkiTDp5yPmKFHGbBK2JaYiDGv6CJPuiYHbnjkyE7ME1HwiESE4fGd5i3NfJV1nFjnW",
  "key21": "RCcQqGDv1CmJjphEzDKneSZdLUCEvVqUdPmB2f4utSuS7KuoZRyuwx8k8ZED8W6f54WSYoajd8GbQgZL8oAXU6W",
  "key22": "5Fc1Q4dmueXU1erj1C5YtNKE8cmw3ogGSEFCwCtuAtppJDFgZjjMNAuNW963yKa4FLQCUUrkpv6mf33WUyDFowSr",
  "key23": "25fRq3xDjhf1QmzqQ45iqDCkzkC7u1cNT33LBMg6JUUq1Sq32LTv3s2oEbGhH6zVoAeKtDmDytmK1YNY1vXQesQ4",
  "key24": "33eA2g1KnzqW9fgm48Wsb6BpU1eqVN6QojkuTVtwTAeRMqinNz5M5Pwo9XTJp2GFMDK1C3JzEmsf2qhqia3RhhPV",
  "key25": "X2oLrKuf7JtvhF49idzZnBTL3FBPzMgF971HBdQApzDP74df2W7XukzB51sFXS54u5nQK9VHd6DoDzze3DpHqiv",
  "key26": "4K26XuYaBnpxhThe3rRuXXD3MyinsRSUuKEE71ZrQMiTrdUR2Nkrw49fyLitiRXdXQDPQ7eMXFpKo34dLgnrMadS",
  "key27": "3EwYvdz4aka8cohvYyq1K23UD6mLKREwsfXTeLX8wJmoWSwTRA9LFZXWnbk45dQ9JxYPDEZK1Ep7rCrV9Mv9bQBR",
  "key28": "54HZNH2hCZMPVdwqoRTvpPLNF14TjFkcSS1w3nCGzdFFdQPzitZuiwVAPbWrsEH4dfb8MUayR3vFJQf86KcTY2fe",
  "key29": "5fdHtiM4xiPMcrGNUo8jAmJFwscNVisbEbMSTHbUTZk3TRbGRwN4q4qEwfXjY2TxB3K9fXQkEgijrvAsSy6VLDWf",
  "key30": "4dXbxSJMrgN3YBjAdfw3SmGikMpXUHwAqcCsCKdGzPMHgPKL86vv1qzYUZqx6L7rnW7URvGA5iYUuqgFGDYhL6Fi",
  "key31": "4C6zxnKx1crXxHmE9AC7Eb9shro2QvV3NPyw28JChdHSEXeZWeF9tH1ovdbh54fyu3WSXqKtHQMURwGSMa4rjeLX",
  "key32": "5VDqn8yp2mXvwcicDaFnKHDvjxhSuExdazMM52KCvd6d9K6WKyujWZ25k2RiqmjL3CZwfWaB8KRDwEhBfQr5YyGn",
  "key33": "UnqeCbga9G5APEt7YFzV6K79RaX1NqnDZ3dQZpisDsREjLRA8PvgZ1ZTEKjRXCf8f6gWDze5ty9HK4DF5uLmJdt",
  "key34": "TJdWbSk223EKEC3HDkAmErfdghAhZttGRYcAMQngqW7bjMbP6XrDhD7xCtpzYnE3cXLjq9Ro3YuKSPXJvra62ih",
  "key35": "3QJoEmmomuf66Vzy2XXsHUTpZbMsSRkmUVeM4xYjV5jckz4DRutWKNYfjQVdrWq8rwTTeGSKHyG24QZLuuRrZyDd",
  "key36": "2FEqrq3zCeLAmdR6rBL5wLAyYWMDTLquvjw1LzT2mXGG7DcchWfid7v1afs5tAWwiiEeRGQC1Gx41i36GSYSrwry",
  "key37": "35Lsm1wfipsb8PpHSXf6zUJN9r1LUAjyxCeLtTdToENBor6HGFYxXqpBbpfxp9p18HgVgSahvvJfNRu3JKNbuCME",
  "key38": "53ZfERddNtXW1jci9K33ZVYqKiUa5oFcZKAuqTDDDGkFJRh1iEyKY37CX59baYyknq6kbkQL7Tk7wybc3oDrDF6G",
  "key39": "pHAfQUPJoPdkC7fbeAxjZ3dk3VRT1wJscJM3XV5ZpKCAz6yQrRgEw7XiGgLQZk7sDduP33PVwTPCpcHUi1rSJp9",
  "key40": "2W2xgPa3N8XpooKarsLKyUJaBsPkNVHVZf2Waq86jDNzAx1oP7ku64poTzGjmREeq7uUGwHyPVEcHN5m1SPWRt6y",
  "key41": "4eemnMA6uRtkogJYsYteW9xLJsmRxpARvJgzXKbufqWFJ5ZiigUtCz6fTFnU3h74SNykP9cmM5KjhcqDAy7YsqYX",
  "key42": "26WisNLoNgYiMF7Na8Tr9jqWkkWmq6D9T7PrBiwc1qk4SSaeyzrvuWnCcwevuHEV6striW2UtGiRVgKsvnKUKHfR",
  "key43": "5hyGinKDNWuawj38zDXi6S4uWMHm47BsuVWRVia9T8B2kQD5cMYjCEysPbhS8GzybyL6M34JPrwNYWVYnRjStRRz",
  "key44": "2LkzZ2qFAM3AeZwiRNG8xEcB6w2Cjjkf47bnM6PPX49wiGTjGtwJja7GszPoKr4M8RNKmqyDcRn7uZkK36zVHKFk",
  "key45": "3WZqXKPR7NCzCzca6fb3ESrd1oECJCujXPykaoWSMzuzw4g5n4Xqnr9RSEm2N3qPyVe1Bw9uvae1J5A1ZQmwN1WL",
  "key46": "HFhoKFmcgGw3ey8Vsgy3wxD4JMWEhWFWzKmag14s9uJ5poqTWJPGXcM29VSe73eRC8uYWeMnPXMfeGE2yceDCTn"
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
