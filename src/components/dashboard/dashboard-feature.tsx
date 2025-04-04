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
    "3eww9ExHiB66adWZjqkTdMSXkTKKm6PUkDfh4mdyBVSz2Gw78vB8Hf2sqM8sbjRsKTKY1N1hzAtiCJVWAwoY1YoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqSKPKtaV4fAX6Y39oy5zZW2mHbDsJf8KaP7koM3NGoid5wXAx86ggm81Zr91CAHAMBmtBcwYMZV3a3EkMgKiYz",
  "key1": "3D6h8XnTw3BHhEAYVRCUAm156YQHTP5acxAPrhqYJozqnUT2jngTbWEWhuyDfK76xQZ2LuZgMcx7cwfpd1cZgQnz",
  "key2": "5hDkhsmTY43odB7VvXrYuP7gEF5Uk1XFR1HMjpV7qg2tNcNd3TtBGJbVwKBPWqXfvJLBBp94dnyaA19THAE5LCrz",
  "key3": "24b7oUtqKMziBqTwcYmwpooGGAYeniqvdFq1EEfxM2sb1szXeZUDAtJs4YYSQAwivYcbaMbeAnXjq7g89WKtBQZu",
  "key4": "4QWcUCo4Qx8kAJDxr3Wy9bMdqAvaMc8s1QSoJReKJKhNSktdgELEpQqKcXe3iaSW5mJTszVoyr8jQ3MZuuxYT7qh",
  "key5": "2iMJuzvisikaNGkAVuDe5RrbPFbHFricxtPBJba3fWxPNNy3wHKi8KZPRqjLVjgeEMADeEb3Lb7agvkftR3gjvr9",
  "key6": "oScziwc3r4yR5Nu66czjaoz4YcunA6Eyq5EGJqC8tHGMEZKYPv6bjkajPSCYKqMZ6t5mdhCPoad2cu6oMkx81HT",
  "key7": "4oEoNckeooGjtS6yeL34XFheTuNGzqefGNZUKkahgFF5Z645fuAmTzEtDRymUGSaFo52BBFTzGqAJoJrbqzLJ85X",
  "key8": "3Xx25LNHSSHSQEwTpNvsVJyuS687mvynrSSXUjTLFPz5rY9HHYf4mkX1orJVocamUSx43xJ9QH7b4RCtcDpRMTqg",
  "key9": "3szuWp4FmgS9puc6kQofrkFnWQWA47WcRRY6VpGuBsWEhDaCw9PxsrFvsbcgvVb6B1WDwAhGp2wG6ZvF1CdSD27B",
  "key10": "JETKj1FSTJcjGiD8NZzBoViYS1wjmtSsxifh9g9tQsPdthLVdo8XAKqCo6ajU1xpxLYHy4AKhoWT9xzxAuDdiUi",
  "key11": "4EY9abKxCLXrHr7fFRzLoaDFC2n8BMitmctaghyZWnkhPc9tRxFWy8RPR5qmXVSgMCzXwBZpDhhMgexiLL2ZBcon",
  "key12": "3tsHe1SyscarZoHPA9gZekVeLgQxiRyM3ocukPujf3HYJ48GvCgLHjCwhMSBL4dfcEpNGaHdZNSD5wJ9akC18REy",
  "key13": "4btYnHuSk66Ws7iSxZxWgNVWpYErpKLFNDU2Eh27mm4FtQ9Tqiwf62YDrkupEDFBQvkY9gtTaaHWW7dhHLi5VrEf",
  "key14": "4KVcx1Kcm7ZwPMpoz9YpyWXmWNLmj2k8rX8ywSXCS7csXnWm2qdGT8ZJgPuPn9k9yiMx2X7KRTfW6i2u8VF6Rzz4",
  "key15": "2V6dfmEx8nfctJ2Y8WNnKHr8GD91LgA4wNa9ByUe8kn2RDiz2AYu8MbBu7kvouJXqLj83MeVhb4ZXaq8Q56GAZWL",
  "key16": "5CbECXq7riGygyCKo1TSS9oNiVqbTG67tPfm5b3aGwWLNzbMMzZPYgoCcaU8fW3eXVvHA7Bn1he8jZ9kEY4Anepx",
  "key17": "2LUc1n3cy8DpqjgQdBpEDJytoNgkuRwRLYhdgi9BuoVcQbHm2dmV7LkRtssv5XtoiCKer2Xmh3ggct3ZB7Cuhoit",
  "key18": "2QkYgE5yJZmQLrvSyENgmUmNhuLYCH7Jx43HnwRYQEWDQUmRdSvXRHxT1pa7UPAbwj9ZXLzxH4AvbqDGKowqw1Yf",
  "key19": "4h9G5Stsu6SgZV8APv5cgivvNAoV317rkK6mjmmBx5KD6qUWtnGfJnJaziN9qJ7zHxmuCS6UsDdkGY68PjzbTdXV",
  "key20": "54YrW1HTh8wyirQTQKB3KxMZq5fuBbtTGKdt5RCRbjjWVSFM3ta3bgzp7Aj6UwY9vLyJHv7Ecyp4N2gbHi1bLiaa",
  "key21": "5cfjeFnzAdooGcFyKvWrqsu7ra82KCp2seNoNHeWZFqDRcRRtEzPYEt7WdtfdMwXCbwfMqjjhTLVTvWMnrQD2nDA",
  "key22": "xm9oypEEqLncwrQdbW89raDrSxey2Mr2uVEzzj9rGDwWcqjucWPBT66ywDtEqB4Vv5xu3fFRq7XEVLq9vVxq5sT",
  "key23": "5ZNGefr27gbR8zwbmFAn6tCyfvYjqtftikFUWQMnLPh8JPBRrkx3pZG2b6QnurKc1b34S8Fd4ZnCvtCtHvbKYAfM",
  "key24": "33NB9wjTuuMDZb7GSsXuG9X8c9QoWFg7Ez6cQbGUdiSKnUmsNAXMqmjDBNWijU6h8ciTakNysyYUnPq4KgL4wr5w",
  "key25": "4fNVY123mP9qQCn65kURoeEkaGDSMV6qXVSqftMMxVL8Mz5xL4rtJjqpwAkxpd3i4Q5QkJvDD2qicoR59JDbkfyb",
  "key26": "4xmP415MB2qsEAXuWbXX4M3DECJbjMjMP7YqPz8MeqS9i1qsEgUvCJTFSqTKSEzn3vEFjB6DbR3W51PivbX7ypf5",
  "key27": "ExWwVUzDntdVvipwzF3PWsL93N3SeLzCRGrWwPdezqnMvKhxUTCdSNgJAptKRwB5k12memqGcKXJ9guAA57ovJY",
  "key28": "5aTsfM594TwV1xKg6SLg6DAJ65EVjps1wCvHGrqHawNvuzfmzkZjNacfQMD3pBJbSHBmP23LNDN1JignnJm8GtQQ",
  "key29": "UiDuW2F3VsxpcMnp6FJvef2aE82Xp1fdhkYBCXxDYK81Ja5BgAmME5rfjLGibrzb2ELVP3V1GNtRTbUbz8hKCVd",
  "key30": "5kEqXLRqDxVNAuDJicpBHkgXoQ2C8qqDuxnaPRgza6eT4sDWE2pk5ZwzPRgF3rrYaFRN92CCfuK8SBPjZLZfJnRA",
  "key31": "63VGXEbLa7CFDkGxyLQRhmBSRmyQsVz396su4n8mVR4zueKJbPCkree6fgPL6pxqGqXEczBMELpYEPq1dutF9ksP",
  "key32": "4fE3c1pD6yMkXqdJPFEHn7zKaoUrm2s8aa13LeGc6VnVvMBg2VVRQzpCuex7qJCPNJbeJw9giZbzZdNLp3KKjBKX",
  "key33": "5DX5RTDNvvkxiW67NV4gxjkiRPa5cvrGxCVzCPDhSTAgKXN122tj8B3fLKBLScoKJ66NZXVZ9ZTYuY8L7JfjWm8Y",
  "key34": "36f13Sy8nsnToufdkeqfZgzrmq8p2hK2xCi8KFQhVnr7qVEmSRScFg2Gb3ygmVktwH2DV51v7TJqDXLh2p4BvN6J",
  "key35": "2PmfavwbpHbQbW5fgUV76dkmFS8BAUnU8SG9X8r6tcKhP3e87uyffPb5jYBsa1zACpNqCWvR5dPQ5yWLoFadqGPZ",
  "key36": "3LPcSHi4MjdpTwKFiFXxsept5QGeiB8sYm9eLeQw4evsDad5YeuegVfvw8yg7KxQjW3VA81EcfbA9x9qXvvee7Uj",
  "key37": "2dfQL7umtgJi7fx8WbxqYyb3kkwq1PegFDCajhqavtLVjSyp8nEgQc4JHg7ckQYhdWyZiJULbM3bkj7JabcaXN6Z",
  "key38": "3gx6PU5jBuMCTxrWiABt1SyPYCTFwk62tVSFLbPZrWWYB79uN1niuTkdpGMGZnm2GVopVRaGrdue6b9PXAYTVBnj"
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
