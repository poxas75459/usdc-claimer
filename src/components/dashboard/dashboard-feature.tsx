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
    "WbDuGU3hJmWoUeEQodSqhqxXwaxk2sBhM6r2zij6paFEPt1BLgPheuGxWx3dMRGZm5dL8dSH2HArbDabDbe5i8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9M2L14p4C7jjFP19LwnfPnTDjSwBC447TAF5n2EN8S3tghReELL93nfWEUereUVFzQvb6ztZeBWxaTNj2ae1HL",
  "key1": "W6no2MAvNKZ5GzrTwQ7qaMi1NYGDvjXiLVVCsUGB8VLwhiDpKVPJ3o51P6S1qXt3eYH67dti5GzUd8PadW6vSEv",
  "key2": "9ZMXrSZeEj9g19J6fXeFeUjZMshLg91GUA5MbYKGMLf2s37sGj46jHtXR3MiDeNA89A8RumCkb9yw5FniKR36fr",
  "key3": "2XoLgKuQGPLHmjNm37ybq43Zbg6APXS4RJRSP8MsSRMngDxraxyZU5348Gpw7xs1xuEbb2ZNTzArDRjJQZGTQ5pH",
  "key4": "VhPXxvTjgjUWbAXnD4nrZSpjZci8qXAzbQnKRk8v4bvkBSumrcBw3dyJH8mECZWHWjXkwWBSmM4nVmtRg94EUoa",
  "key5": "2fBxtNnrSjnDoWDiMgzmowxauws3RQMtKBA15gYBVMLX52Bc1WRJj7um1f9knzJfjYkzP5imHD2fx5YsKD6RBXgE",
  "key6": "2bXmNwAnudxZscUDmJfGtGaqQGLSmq7BVjd4ehwzwhgEAsMWgWSW8Kg7A7KA3E4dZnoxFjXJrFiPTfLZZrjLtHdL",
  "key7": "4uEdkKPX6LaqpLsv1vZj9NzURarLtGSwxKYPT2krmxSKVa6ygk82ZfhLZ3SWyDAQHcfShMWxRZ7KWs1DxkxPjxy4",
  "key8": "3WJ71QZ3o3chsdoGpzNa2nvmMeWzyM1vrmwuts6JTo34fQqYEQowm6p56ymSraRDgjZb6bGTkhFmEvddr5MWHh4t",
  "key9": "4Etq4ev5pbdxxGxfXZrmFZwnbY91YAZYDAh32Cz4vvTrnZrWRFEqwxV7GHcyHdbRKHXZAdvchm6SJjX4h5XjFkDZ",
  "key10": "xsBro1F39QcTXBD8DaDbfan9CcW6HSQFWrv14hc3wtGYXy5qqBYwefJ9N6oDDfmmAG5P4Z2GDnpQ56yKuJAySph",
  "key11": "2VjnpzA1qm1skESpDBsLCMEvxjpmv5ZbQzZhG1VGR69BHpNqvxSLYukE42XooqNunMPDPtbnBe5yHVhngzeU7rx8",
  "key12": "TzxnX74pKupFHuEKQRFgCPWqskVQ7HPrMgQCPXVP5YpnBvva5DxJEdUCZsdsX6FhzUgPy2nhgFErvuNrkwLUhYc",
  "key13": "ri7uczMcnZ6J7LGH8GKMAy3qMUaSH7TomZD7waBfrGayCC2sus9H6272xgqFGuc3xVMmigSSmSDAX8HqnViAR2f",
  "key14": "4x8z1JW62Z5bpkEwjg8SUTGLbE5BBCDcVbkPvg5JSaHcDwoYVQRLewSgrAWGvHKDsxYaM8rrCobtyHQNnWS11Mcv",
  "key15": "NhQ8cWVxvmo4oPW8rJ14fxvYnhNdEPekhAyF6w2MBqsdDVF2xBySx9eJKtqidPLT3YdHFRnwYPCLyCngJt7K2h3",
  "key16": "3DVjn9ZTeruHnsiu9yMCYMfMFMKdPZrCqKtpyRxecpA8q7haXzUqB9WBECgvG39NtetL4snaVXRcx4xUaBY5gT28",
  "key17": "5TEGF9hDSJGwBnj79TBQWh9bpVCD2u9yXuRGPRVM7U8AoFhYmZVuqj4WhkxmHEcxRybme5kmD7JnUz2qikvNaQjm",
  "key18": "4zQa3qmn8wxQavEJtsPoSGBNmBdB6KYTDxFqvb3uJotSRz9qchjuGP2cMfnGBKWLp6UG1MEGSxN4eEj2hcckWqGW",
  "key19": "qCjg6cHeRtujrUMAjyHqVZ5jR8X293vJKRP3SSqS4JeChH2aWqWVZJ3TUG5WyfDvYhNW9cEU9ALae4iywwddEWs",
  "key20": "2mxkb3L1NLhUzeVwduPq3pRPDkKt6rXfoNE4LiJFBmBB3mnPkMkcqqFvmuiNgQ5D6Pw7ERKXgNCnvgiVGhnNPUFD",
  "key21": "4TLamQXs7JLK2y8KTYoydda6WguKmfNfVa7PfEqg9iwAJW58hBH3LEmaekzx2cZrPtoEpDggLvtJUmT79AwCdWJP",
  "key22": "GgaXUJiqbtpXrh6HuRUigm9xkUm1eHiePFYRoFVizLugRrbaoFTZeZz7ThRV7wFrnDdx2Q3sCoWK1tZDoRDYBNN",
  "key23": "2qXn3BnWpiQaFLcmbXmW1iJmrF2fsrr6iLx6ZNo2siwPBS5rdmiYnCeMydJBiPXTCvgScfeJSrymhaSB4SZkb8dz",
  "key24": "3YuMKYGht6FsXepQ93hSZBMvCnajWG5yJwnAUHdMq3Ca1umuSsTGvgUVKuJrq3WewEAccbDaMMyTS1rntNn3fvtY",
  "key25": "YVEb1SmSst1GYZnDWmQv1GVPBC4X5sbiZyHKoXc8VUhTJiaZ2FaHfVFZpseWkDabb4o4X8UhBRFxw9xxgFKsRAL",
  "key26": "42uP2r3TUymD61JbXFQwpau65k7d9hWHWTvh9hif8Dop7NKFsFygybStDsGJarDngps18gThWZtPaXoQQ8eX44x3",
  "key27": "4MwyANXH3zcNdZ9JcWWMKVs9kBrFJYvXwaRXXkHgdAApDwfTx9QHEqcq4aoPsMkZjCboFq35CpgZUvQGYaAtsacz",
  "key28": "2YTrQQkE1cGsWrzF9w2Gj1Ns6gJsZn1DdsYWooRh2BA7dXX89U4667LCLm9X65XaxkVejqJTCXZyEzPKjcZxrqNy",
  "key29": "5f45ac8osvBAb2bUremHD6tSniyzYvxMvLm87suFYvyjvA9V19T1Me2urcGtRho2tPPssdH1Tj8NbwJKnNCVyh26",
  "key30": "4jzuadMSn9t8rSY5W9vVDSfXHYBcaLgG6uYDRmmmDwNaRM8VhwmWnabrEcBEgPCuuxY7S6cRWH1oJVuGrABnfMoL",
  "key31": "2BismTfusJPDoCnL2ZZt1b97jqARyPs5VYEw3B7ExjbdDZwNLp6gy9Cy9hCtqoKJEKuvvgzrfX1JtmT8G2GjoYtA",
  "key32": "2Nmfrv8GqMKyxyn43tEyU7Cj5KCN4DCQz9Er1igvSGTXKJ63tGMGL7TJRipxyNbRC6jetYfXVBACc1JYeYgC5C7c",
  "key33": "5fYzuiGQe4VtfdqaAV14TJ6XVNeR87ooeNBDp4TVseZVvNfHsebHsM6tY8gg2KUEYJ69LrgyKLEHSqd5DWpRsp5R",
  "key34": "4BwiZv6KF52ZfouJnsyiPDt4AqpfUFKucFQVnjd9Y3iZZ2JoN1xy8rodKb6d794krHFKEyDuANga43M7Hkp4NMnP",
  "key35": "2uK2geYTnn2kNSoTGNWE1BT2HRWFA89N6xa4Z2SUQi7zpDJAiALTjyQVHaAiuAHMgJMLjhDHNpfwkzAf22Kmyu13",
  "key36": "27cprDDA33cUF95KtypvwQSTo8SckdstbQB8US3Sqcrt46qEmvqnVjmUCPcLnaSnj4GpbgYyopJ7nR7CCaBWkEbv",
  "key37": "5kFwjaErLLaok4wMzFh6a9dTjqSUDwWjotLnbkTjo1A4YSU2s5yBDWdfss4HiA6Gk6oKb7PiM87qnw9ggXPS4Coq",
  "key38": "4bpYveQZ7KjNSFjqMdAWfq1U1Xgv8hq89NnMbsVLRtFzPQkKFs4KECuyBLNJKH4LnCRtNfUENcu7a5qyzvcM9tC7",
  "key39": "3yck5VuT5iqHQMXQ9c9J9JinafVqoGLZd3DtUoHwysUSThBuf3yJ73JmuCA9jnBGP7finCxhNFrToJpvf4rXvQgg",
  "key40": "5TXS1GSQpJKzAewiz4UZBAHzsYBuHs38A5UVUDiX9KumHYNBg2Gb4pTtSWwsysdLJPGkiWVBi5BN3vVTSrD8LNxi",
  "key41": "5xSiSFgCHA3WT4p9pjzJGv6PmFmF9HptQep9YCvqZQM4QLBZ8dF1K3Q1MEMYAaNGFt5FfFrSiwNeZ29dEhPXTDJm",
  "key42": "ZyGr6utgjfCkvanKFpRaek2VFWHiDfoqi38FmCbNgBREbnHrgZ1GjoTrYW8NDFCFcK5aCg5EWo3ji3vMixatsfe"
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
