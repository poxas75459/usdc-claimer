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
    "YzXSrfvfZtBRGq7XCfhz7FDwwKMqvxX2kXSd9sNc5U5WMeSLgcG1h63uSDtT26a8DvocwjNoUUZVgtBauf1EJYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MKsTH5SZWr6NJV7BvstXqELKPwdMvKoVsyVMRJV3RKass5B8z1eZAR5BhCgNDtRHGWaxjiq4Cme7Ws6tBZgR2Ym",
  "key1": "1nrGxgaSqvETyr64bxtUkxnPcpdqMjLM2mgQj9gAdPYx4wxeoZ114aqXhYBS1CRkXuKPCD8CdH6dRUvzD6XXbz2",
  "key2": "2DZE7NrrQm12pnTrd9VAxJ3ZzBUYMUu5RJDHFPsn1mRpsbVXmdrKG3tHv5irNXUmKEZYoEpSCCfzqTFfUaYj3R9B",
  "key3": "4gNoVgYqUFNcb8fmYGCsugr7tEELVT2iLViGMycXhYZeep9DLPcZoJx4U8okQLYhsBpSzbGEa37ntSzSjvmp1dnB",
  "key4": "3H3xrcdhYZNMGHPkjv87VsTkvBXks3GnAvMLi483Govze3t3A5mgKaquU4hV4AYFbTA58xrFCSfchvf5q8o25bKE",
  "key5": "2bksKY4foFrVTmLHhvaMvV8N2MffPZmRghJY3sqGdAnw3BBmovGDkXx6c8XnHN5Ra4ezf8JDm31EQioSQhG1L8yw",
  "key6": "2q3L4fcrv6UmC9YAESR786MBV3jDz3TX6D7GzyiaYD35vHginn6EvWYVhM2rcJ5wb9XgGUSwak7eiLeoP7BqZxEE",
  "key7": "oBcGj3QwY3vhdYeAhB1xRXy9u9WuJXHAerRqwGQLY2P5nGEndGUJ3NCb6LksczKtcYFME13DyzPL1LvNJ83ktZT",
  "key8": "2HyH2PskijB1fN3RR6XkzThz7TwoWYxwvQwkTJyLoedP7Gi3sRz9g3LEysaF4aF7Uka11SLY5MDNNiY7sBznWZBd",
  "key9": "pkRFMJAWN1ZK7eeRZmCSMURXff4A9o9KMNAf2EBQ8v7QJZvBwJnz8W7jeLHzakeQwz6uj1bfV47bZ2RFayV5B19",
  "key10": "Cy7QMgshhGyfSoUGuBwRvKh6wWJMAM4eBDqnp3zbXuyvb7an3hRy7qcedHinwTNfqBaAP6BpSFJ8WkcDSfcNSot",
  "key11": "5yHoogqZTubAXeYmU44gBEzaRV1RZ9r6vj9ypVA9XuJFDLmcdBwduMQAjn4i1btiTRQSMEuWWXQtYUMiGvBGhnrb",
  "key12": "4xoG9kDcGv4h47f1BsnMYBgW3j2c4pvHCoCCBnjNaQ91v3wEMM4peVr8MKGfS714YyP55GSEtqt4rQ8tLroMWjhz",
  "key13": "2869nAeu8GBVyVnmLn5BVg4ZFdUxqRR8fraUbvcTPr3JWszgbGWvEyDd3Din4HRSrCUPMvWgRvr2L1ye5FjsRfDS",
  "key14": "xfZWoxKGyeY92oLAatxu7SKASY56RoUcDHAfuCQF42MrdejMe1BZUkLdPR1joCq2RXFhRKsoraEjhG9rY9hzsA3",
  "key15": "2dr9Kbjxa7YkAP33Yignn51PevPfoxCwGgvHVVRCQYWy9xKyoMScToDKgjFEHbdsLhUFMpXdSySjuG1fZXdH9Yrs",
  "key16": "4ZMMWLUJRqXV4WRR1vSPQ5DwQyRJ763aWzKocxgFW1wwuQYZGvMLj1fyGQzeixyzAhFUgH5TLJAWacmWf5TZvgPL",
  "key17": "5hVNX6kAN98vTwojXtj6fezTnZG6RdanLbNEkfLd6yR7jRpHzryvzPHgqWZ7AUkGf5fJWAzTujhuLxu59oT72nax",
  "key18": "4Bfc3qY5JidQszow2HC43TCc4zZhraFaQcZpFREf4Pqw1V4q3zc9S6kMgHFZDFwi9xkyhqJoERAMHHjn1h5deHmf",
  "key19": "TJ9YrGzkh7QWHv3VWrrgTsjZenyWv2zZECVh5oA7BTRHTx876TDT2tq59LcwVW4E8LkynaBi1jRYRhCKNSo5ESW",
  "key20": "T4rXzZxEbRGU3Cx3BDkqibUutp115cx6WDJbszpJPKKX1WAeC17aSfxnWqTSE8GxmHiKjegA3Agy73DpJSCW3Yp",
  "key21": "63LStk1vWnt6DHXUP9nSqnRB71Tx4ruDF3HXKY77NNALJpnrnfKaJaGajz67wjrrPG8BH6DUB8KFe4i9WsisnPoh",
  "key22": "4BQJHrt2GXtEbUz2vv3PmfHkLQAr57LWHTzUX42ikQzvRE5ez1QAwhuwWNRWY3tLHGrqLd1C3UDmrZGyrJPSbYre",
  "key23": "5RCpsUVZzAFqFkw1pKqdVvNoai8VAgauGn4mKCUasr3VwLEwRPK9WzRxfyH66vrWhupBTin8CW64k3vvgHhmEXC",
  "key24": "5HMftKnW7krTpMRg59FQN6Y6neov9mVWtk8vjV7AoYnk8vu3oZg6topiiw9CfDpxkw7pDDYCDWk8vL7HSbdRXvpf",
  "key25": "4f12bkhv1gfG6EfiP2WFE1S1ri6W3TC7Tbmy1QN55KCkhXYjxkDbV9RarHgTUE3Do9MNXgtm5K711L1sQe84SMrX",
  "key26": "5Abac1bWp68QtLyYwCtNaFNT7zzNsJaRy9HXYo2dxjGSKaV5fVtidTzuujWyb8GnweXt5UTCH9H2R3Tii1yNw9R6",
  "key27": "4eKBysqZAwR2LMMPDnH1G5AFj2AfvSPBrKypxheuDXecFUWxuJJ3KCT9CUY59yyguixu3v8Q26b4Rfqn8dM2vPyP",
  "key28": "21Wtu2TJj8zz8DPZVicGQ8CnSUzTncBEnPsN2rAjCebMt1zPct7yd4hWRyfL7tNgrFJTTRCZ54Rp5dfogAwX6eEi",
  "key29": "51toyLFHHfDviQRu4LLB1HsmcAH9FXehw66kPsRYbGiovFJMJH1bsB988N9bfc2c1Qc9WVycDoV5oiNAg6RguRPh",
  "key30": "2xh5EKfqfEZshou5Q4RwunPjBkuf9dYJyMqPMnTHJLM8kUBsZtkE87pjkDSi8qPVotwdrMGtRbfWVmC7V5y56XET",
  "key31": "KLFtFBjasN7a9ruMqrfygySpLXdkXUPjJP9LZLoeqFEXzNURqCGkTocr9AQ4fXVSPdHWbAHUyUKEYMtFGTSqDNK",
  "key32": "3ax4cR6FT7ySpaExnWM952Hb9nNE2PRup4WYHVxRs8PtNVbChHbLeQN5jLGgWZmDA44q4vFEYHvEqsWkeZ8r6qFt",
  "key33": "6f9aE4S7hfgA27RXXpLw6QxUJqsgDngNyKBoBeCufrXtPFph9xv3f8VEbM3Cr1Nr92c25YfHBK67BNu4XQZds8u",
  "key34": "4hVt78aVUjE8UWMza3GrmdCMZSpxVjhMSUastNXSgxh684jRERh7zSdAfuEfa3mtinY9sgZ4UsYTxRKAAk4zDjC7",
  "key35": "2R1BUYyQxHj1GvaSuyaZ3Qr8NCMp9XhM3dyrsNSLN8YFvjiG18YJRLMPH1tAyHG9eBHLwDm9mCAWJb2ZyyHtUcFX",
  "key36": "2gpSZMRhTX5VWmtt2SDuBWfYgm3ZCrW6cB4PfhHC1mwD12KqLrMiJigDpndu2tfstBtYmnSQkffRwtd2CZHvHuYt",
  "key37": "36Am6g18ExWAFd6SzVv8bdSuT9V4Lv7v35PJBh3yyWJ4kXJEfPhfuCGMTXhSQHygUfijtrrUzgVKJBF7rWY9DXgC",
  "key38": "21WbRkHF9tuA86JUypbZTm2yESWiE3fXhXtn8KFLDqqmKoRwznjmnZFsuSecQFmCXH7BdQ3ose3fsBNDfmxCBQKi",
  "key39": "2kRScjebpAQuTbyGpSgWUjja5oJXdu7gNwZ2bDben4kNfufTaQkucGBiZvpEUSQ2mPeBTiiQ59gPp2DeRF7YYMw9",
  "key40": "3cZWPrmWVYmxnxg7WobSat5ogHm7awxa17mZwJxGmtw4xL8MFDKqb1jnBVtSc3tbfj3JMJd4nFDJ3HcLJjkDoGp7",
  "key41": "2vpYbXCrNYo8NHG2P1Ha9sL6FMYcvwRyu3ngpFKdpjDJdjWPWFtRtaRMLkFCWvH3wToj2jhz33sqigrZV6AGuezX",
  "key42": "oHYvaV1YFp7KD8EHU1aKDFdidxzM9fWMA986Dyk878N2ATcj4DYCQ7EiUpdW4gNfTdEqhci11KG3NXLAAMZpnYV",
  "key43": "2heuYyBK7er6evGDqLeuDhXDpDA2XFPvaLgHuAA6qn4Lb3r6b31ootcr4Z6V89y1P3DZW5BirEcF2Q9RYVkvLd3n",
  "key44": "Ut4drZi9ZhYecYDZnU1XYkDZsQcywD8GMsjTBYvYniW7rypTXyc4Mor26ZiM6DHms66zCTSiFbLr9QcUCyYEqiC",
  "key45": "3z4TPkX9hEEQ32QG3xKtHjZz2fAhTD4A34weJqe6Dub77Bpifgyz3UTmnVydwYp7HcFQkcEuypGqoWrMg1dj9F6R",
  "key46": "2J4zrujiGH1sqBhqoMQxH338kQ73Mwevdp3Qg2B7xEHboMEMGDVVkxCDovCDJ8om7797UqRubhEtbBvn4mDhBNPY",
  "key47": "4oKaqHnnXXjorhrit4oAc5qob3eH8HtKM43Qax954fdEfCB7FGopXhDGdWo8P9bdzPvsZJDAF9KcXDxyFxSNGJz",
  "key48": "28grrqnQS7uSsxjT95XHpez4CBp6zcEgntvd3N4CZJvNdq9cNzyGp2dE4WeGgCsnCK3tacWDsSQxfDn2yQdUhWny",
  "key49": "5RQhfJ8zgjzxtKrr1QDW5cfUj9i7wgENknj6zX8hEjDHqmh8RUfKjQUGi5vxJ3BZNHfwm5jUYSWeT57r8XqLfe71"
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
