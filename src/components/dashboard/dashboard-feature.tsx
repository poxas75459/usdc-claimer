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
    "5v3ngGtFZ3gwjAAYxYhyRz4UekchTSGC22MYQeYzd13mjoZarb9VKMuWiDe5mDWcSphuFwdDmktz7jsQiUxW2AsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5joDwnrQ3U7GsA3NG8ATTh9VeNfEv8hKrshAg3iFA63VYzUtNLdf4b3bebr3vP3TY8weD57AsFYd4uyZMUuwLz7S",
  "key1": "3Ar9vCP6J24EkFrm3A26DW4pDx23B9audJsdaSBaJuvjqRowCJaEGmNpXHnX3bYyU6Lb5rSpqC47WxeQnmQdpkVi",
  "key2": "4y9ZMGTPB7aWgrjWvWUQfBXfcszAW1S7ySqwUi4ukhKstTScfGjmFRGqHT8tY4pz6Uq12HEnjMnzxzzrZGWU1eMe",
  "key3": "22qfG3FxzkLaVcv4PtD9gHt6HxByuRMSpT36AFio6ykbwRJJjYbhX2Nq5c32ALxJojxYdxZcFDpPC4aPNAQ78out",
  "key4": "5oNqHbmvdJz5rvzumGiUG1aDqYgugAN3GqhHTrTfmtpmKQetQaEw1hKMbD55kcYnnU4GPWfZko1d1TkbjzkmzoPs",
  "key5": "hJfaiPAPgdWVKuWEVdUvyyuHNTAUmWL5JQhFtQtasxcebNUQkZMwCj6cGcgT9ADoXZUdnXxDDovP8VcrEidSQR3",
  "key6": "5rQYaXpJWFxgMA85pb1gFyS6WnSV2TCXcviU1kCDpnWY6Q4u9FqgoyfVhiqGEsedXfaQoTyzJtN7NRx8GVn5cxFV",
  "key7": "5ZcoX7cqLLFwxwhtt7ufsHBPFuKPLm2KXHkLte83NHrUUEudDSuQtcguCzzzAQDFQ5LJEhcGgJ2fKEgrGRVoDbsi",
  "key8": "2DySMGEbz6WNGvui9MzYq3bjy7BdWRr6FHqx9XcMkJmWYCVvR29rLxEYaXc4XKXENJoHnXRpddb58V9p793ZPDv1",
  "key9": "3nhsktE66xXg5T7YkxUbDu2dnu99DXKxFsFjCo8pVRgky9N4BmfpsKD789NdXQ9EC7QZmXQE2yoq8KVZF3WUacYX",
  "key10": "2fn3uGKugLQknBuRgzCx235MMNTyKcnsKBniUjekovJqKJcFCqaXGvuJ7TSxrrL1J6Ay249VTxQsRhHUA91Lfctw",
  "key11": "4NQT4svXnRDWF5ZFYRdyD3kePN7J5eksGqMbBKebHz2fyJq48Y7VokBFMyDXkh5XqYC5gnmQ7exoG54MLA8syvRs",
  "key12": "2LKbSEFKYiS8nS5Dd6kX1at1BmjMB35n6Lg9sN96BFd97SVnwEhYUKdbKyKTs4aBePjgboTo83rfDVW5wRyeUzTR",
  "key13": "2Uv5UmVpKi1vAFSUSzVYvntsQ8reJwfenXSZpHv1JXWcsQT2vgg8EhhnYG1Ps4eKhDGTWg5QFLVKJjNRLzDf7sZK",
  "key14": "5ZWtFZwRkrgorrWF4gbHP4Ged59eVCyybjNcrF3dX4YLBWdbwYwtZb2ifQmbsGKpdcQdmMKTktJtLX6e3pHnE1jS",
  "key15": "5pd1LG131TTAjj5fwKnoqEyWzmRHSQXpNpNScTRMcCfuLDfWu6UfGiDN6QiaRi1MeFATEPsBezQDsgZsovY5F7bU",
  "key16": "55RHMcqYTxCusk8A7LvUzmpGPFbvqoiPEWq8R9aNcGPyHwwP3k859enb5XXMQzeU4VYBiigxr1uCkZ2Cbi7h2WDb",
  "key17": "3UMyZSMyk9bqK3UMq15WMqnxkVjL5Nn6Xh4pVRThaAetbiJc3PSMGMtdrtCATs65ap1mnyhJ8tTU3hNcUygGH4U3",
  "key18": "s8UoJrZBdsAV9a4QAGW2qxx7AmujfgbGdwpU8hiqAMW7WobymXbgeRGf2WPhKrof8phYqAv2Fw3Suc7Yf7BKuM5",
  "key19": "2LZYWe5mBvaSJfLv5ogHZ5iYsny8gQvf7krdHYxUmz94njAomzVR9uMsjq4RUWUc8PQP6zTjCj6zJipEeyn36tb7",
  "key20": "3MXeZAEUidEeebDhoX1boazhrMjdJP5iKSBYbPg3of2W2LzwfjAoHXoft69hjx2oQeHr7imZvbX9CvLcobQRTAKK",
  "key21": "fx83z9FuzChA4srZXg2NZHvVhoRZwZMm2A4SJ83WiPfs7PctN23JkTp2mRKf1zLMBSeG5Fo4S8kDeMSXL5VWXEZ",
  "key22": "52XhVLyioAxq79wA31g6hVAiFKKsP81kPN4pemF8QDC12z33cuHFRt6TagG8k5Tre1XGH4TECMSKBg6UVKGpxq25",
  "key23": "5SvhoRBduuiw9N8ghDVdv1A5qPjSomeDru1KXMSzkf7SSJcnt2ZSbAHpoVzQtrtprNWJ9tKXfCheEaLnp8oncSJF",
  "key24": "uqYSgLoCcqHmkjK4o77DVqwcExRgFRNyWhMsDrZSPGrsQkD46jJoqyNb1C7cFvCMRKgRUfEw9hHJdRZER1WHoHa",
  "key25": "2UYwYh5Kv3UUZmX5XymqbCAHjqZCiEUcB9HH1mQzQoHYcC1PPXRfiqkC7ofS7cVREXWPdvNExYX8Szis4CPLLniq",
  "key26": "33S4FRc3k9UkWwxsJhVjKssLgsunZgfc5c8rsKkRMmbCgtKDWyABCYcTeGfK51qGmvZB5e5orQkUWeaiTtMggoCu",
  "key27": "2H2Cfs44BQvTCCLP9wtdbRCbika38RhAzm1bhyJFpYuH861F8z9xGJUHkT85dsfJ4ztzwke7HoCLYzFLfD9v3d3m",
  "key28": "4Y5THMfAfpLUUUFbiYDupFAPuCcWViNjuzvcXdJhLe6H4MJHHJjjhBKb8F4JAJR1PK7Dws5hzUC8ACd7rsS8GVA",
  "key29": "5euGrp63kGjsuSswE4MBgZZ3FRkp74ag1ej7qUMyZQuSYr4HSu3hmMwE3pfb8ZLmLNg2PVjugeyGhftnQnQLaD3o",
  "key30": "4Zy4yjwjjyrceXkgyaM7h3qqbV1JKnTDAC99ayFVUdXfvJxhjsZVXAEyuhveLmfBdbvaJANUhNnsbzWqMpBCChKw",
  "key31": "wvZYxvCxhNi71tWgwgXbT1QdkqpdW2vS6pWpvRSSfQBvjC7RLSwTHFMuXSsHWsA84dyWt3xDz4PHccCZ7gVMLyp",
  "key32": "5CwEF1Tym5QkG9RUrfHFhwXnZFCgpXofvPsTDHT4D3qxpXh14hfxoPEVj626b9HKAp2jaW9WpJUxHmK9erKKGqdg",
  "key33": "4kkAhzCMs9MBSUSyL7WAhjDfsqUuiT4XVZxAcW6xyEF2yps2tyffYjaRQGqREZT8teXBf68RSg4821wAVp1wEHKg",
  "key34": "34N14MW3u4FS6fdnU46a6KPDhA2Z7dbpyhD5WeuLQ5Ts5LEGMT2sxRNNpTMhrdtVZhU5jysZzPQjU49WNXMps2PU",
  "key35": "4xs36ahw43EEXrFNCEmqLESUNnoiHyBkJhTq9rpaMvdZ8tkUrNkbus7dxuMMi2GcEjwGg4KhHKdLk5GiytfsomvE",
  "key36": "2RGH1VUWrT2Xut8QvuWU2wFNqEmi1DHy1xL9byuovYFc9iuY861KpftyyD8NxTZyYS9T8dzNLug8CFA6AmHxAe4i",
  "key37": "5htiKsz1v89ZxeKoPo1KpUTSyKbTF597xWpyqaaadf4fWw82bdfCqFpAtX6pg5BtWKhAjPPPmu9M4n1Nr4ww4FpY",
  "key38": "5u5YitppmNAY2WtvnnrLQCZ7xyTe2k8i1daK5YozxwcsYg68yEBhd3TmKrfrMywtH59tMWKuhp5Kk2eHNv9e9T7t",
  "key39": "2LhrFaMXTNoz1LxLdrVNxNFDRo4DFDxhG26ii2rstd83wTxp74hDdmsncE2DbMY54Mn45X1UHDf1msf4TABE3eMS",
  "key40": "66MYSAdSMMKD29cpJ97uhS5UmTuY5jwQMPvvctWkT3xKd7PkYkq3mbTNYBi5xiYyvntxbr3cxMegDQiwp9sYnNwY",
  "key41": "2YTLCN8RuMZtTNoTC2j3A7gKSeTzk7ZgfrMAcxCA7PAba2Uyw1kuYVohhQtgaqCVg7baHBJMbLJvikPs4BGFQYZS",
  "key42": "2JSchSFgYNPJfqnVHhhGWvyVeidgN5adexkXVeSJ8tGbAfS6nyw4dhRT8qyUo97joUgSmcw4iSi5EyxtWB16zz8D",
  "key43": "26VVAdSNZgg1L6sgq1SFzHLRgvtPJWQvvj3jBDrEQKj1CpnU69rErRzBJfhw4J8YvGaghEYvmVJPrspPiCoJaYj1"
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
