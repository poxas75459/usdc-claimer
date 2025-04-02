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
    "Gaszp9o692rVkEQv2H14yaTzBqdNv19zqYi82yZbJpxXrpC1Z6waZMPb4iW5ofSbdLbA512RQwsEJMs1Jzenp3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8AttHsYigCn3MYGbLNdu65i3WZeG4MWXcLfoznNXM5RivjajB6hCSYdvmpaKnkVmEgFKDJ6qDda9uSVik2j7WF",
  "key1": "2dFC4ct1GimG7YeN2iUQLut1RYXhjWdBTJa56chgMdQCXEiUrdxVQM1MgMRBcmG1akLcPGo6MZbnh9rRxrAhXkbp",
  "key2": "4WXGvwsb4V3zzDvHUimuged3BXaNPKJBvsLq716FpSK6VAGKQUnzRzvkvjK9wzRVmU2LCpD3XGyswcnNiJfSbVRj",
  "key3": "3ryrwxhXbxP79cmATuGLt24Gax8WEELMXp9f3poewyMrMv7VGkra1aNFb8DXUQJp1WFxQ4NVjyfFjvesT72dU8KY",
  "key4": "4ecaV8XCRd69hXyM35QPFv8c6QTvhyUAt1zSS8Gim9pTQeX4oAaHT4K5FxvAcUx3ziyijDKcqej9u6b3cEB51Ywz",
  "key5": "3otcvmzq6qJfMNQr8VTbqSfjrXHE89tiYxymrwvXgPiCZ7VTjnEvatE2PuMEzeq2Psoxomf5DQmJYurwXziE6cdS",
  "key6": "5n7MnWHNA2rEgkvxgjx2CwEwxhbMh6PRD2Jmy1MaYvexXPmymNof5RVWs9ubtmzHxKF1HbFczTU6b6CcFD38USfE",
  "key7": "4Q2MB3bYNNj9YRa5dZHWbzjtGWxUrdxyiwQ9Dku7tvBrbzbWfyhoWfzp277XJ9ohnGXaHDQCgBzGPYJdsQ5ZixaG",
  "key8": "5DfD43VpmneFH48ovTZ6NZ6Vfhvok3KeBnfqwgsDuK7Xc8yvaaTAaqZvvf8EJhxny7jah5DFwsaY1dxeRgZSsLGd",
  "key9": "SvUNxW7fxMKLGAWaFKsMYmidU5zCfLSihZqMS8yQDKBNUcTz89fhgsw2JCiBGXs8ExpGwspUQy6MB3xzsC7gFpL",
  "key10": "3hBegWmQeZggPnAijjTenmbNSHAn9Bqt9kNEzADz7pvbmZH4V5ZEk4pM2cv3i62yQdtruRpUCFQP2aZKPGmBMFT7",
  "key11": "591Rsv77patEWxt5tZBECLxXHZg6itiQ83v9VqSunq9kLXid2NNLkRpeayBoTMtgu6vVSdRsviMfjphq3QqMsBG1",
  "key12": "3qdwTDnrzKZFf1nxjD4SgCehicXgYgTBBTCikyuDNmwMgdC7F1iwXbcXiLSkZ1fhFesK4oA6hkixFubWFjEzQkty",
  "key13": "rR6bXvheX91qPHWBcSMPSPXnQQmNEsW5VpGGVFHXNdp1KfFe4KDoVHt6SXHP533UoFPgwaDNui9TBi8Di14W5MA",
  "key14": "1VBA328UmT93aCyQXdhiAwdmMp6oaBNHgS4fCfuniL4j8yEedsN4c5SrG4y48gEewhs5fu64fA29CPN4mwaf4qD",
  "key15": "5fPxiAp6nmisnA5kn4WGqGDJ7cc7uWnAZaSa7qJaxjQopkfB5ixYCLoU44kmk57YGw9JD9L1d9iu5dtcYmrqMLZn",
  "key16": "4qvxTJGk1xGDSey1cNvkUTc8TFhcStGMKn4F4fJMvXAVcpXpkGbAmGofDm1QF1iWgoRhmAmt7D7eSQtAsjb6JQnM",
  "key17": "Q6S8ogF4pxoAgPkVQQ7tXrJ1XuwoM2oxActjNF8XHHDQo9Cjnv1ScTx1eF9WTzWsfErdHy3cCvcMs7WGg6o72mp",
  "key18": "TH3wwGjy1cEbo1jomv4sHtcqrZ8hVrA5KU2JRiEkauHiSRfqMsZ9nzWzro7jybGV5n1XUsj1zQ6gbj9hUbTf94z",
  "key19": "SU8z4KqncqFMCn6TH6SqCvrSBau9oAmSGtvkZdF4UEE1ttvQiW22UWXrEYUWdLhuaxkmhqorfG1TxbDpFyhmWzS",
  "key20": "53wAxKgzurVxiUozUQ7K9nm7U9A1dbDBk1ED6FgEEdK3tTNTQnP2aMVpFpUffbovpUCCs7AHbZGYpc97u7PaSvNA",
  "key21": "j7LQqHi6q8tLeHKyxuJGDcCePk4Bz1RQa6yKK7xJSQhPfPdTY1msQkHqS3AHhjEsGfKGJtmqStNZrQB8euGUcgy",
  "key22": "3YoCbY4qc1SYLgLGAYjUdM1EbJdUBC7nfoCNJJJwBoHz5J6BpoihpskuF7JMeuR2umjgyQVKjQKVmVWztqxB3bcZ",
  "key23": "2VqtCeijm3EQLZ5QRhdomQSBdJa24oCjRtPXxaikNN3rDhPX8fgphumiTF4FgABp6YcKfji2Wp4FifqQyL6xkpmD",
  "key24": "4f77UHGmpGEctE6ECQ2EKcf2nJNVtQ93P4NfSg6Mnk7KuzPo7o7FWUWLW1rYkTpV2xQZNdEKE2c52Py78wXYi3AM",
  "key25": "VvGYYyyeJhpbXtzY3nVKWRS1XAMDkE53mQv5nrwxZraQH9J11rkfBfz1Koc3EwfgKHtrGunzBPL4zp7Y2fNBECh",
  "key26": "21B2Pxb6sQMSeKt8Mp8u8huJPXVZpiUPURGeSXk8Jv9ah7yJtwYf8X8ZG3imBBKBSWse9X6K5dFDasntcRUxRemP",
  "key27": "vz1MH1Ynswshcvgqq25hRuhqWLgB9h4BTws6vSaKb4xHVG8nTphKuN7QxfsxmhWx9Ej5SPq6jDntvCqUFnZfgKe",
  "key28": "37ebXPJZZDWd2aVpRoTJd9MgrsP7TpLKg7D7mR2PhwNyYFWmRfH5jmo8gneoJrksm5xyBb39Nd7JmgYLaJAjDRoW",
  "key29": "3Jxq1Q4E9MvDftR1TWgRxKq41WzUaDdRqeQEqgVTMMiKH4RzRGd9mcNvUMEbtsCg5RSsMKHW86DeJarxAH9TyvSL",
  "key30": "3r8GXCwTKLsgcr2dXkXZSzRzt1JTyWXqVEfnV7pagnF3VY8iDbbah1GhRGiSwoGzRrepeAymaf1naC44JGNY6UGG",
  "key31": "2Jsu46sL8URcDZcK69eY8AwPpPvnSHFhY8wGBBVHsc97kw4CzJKHFBnpA1DkLg8BNwgAtBFM3qnW4X2tKv8GoFU2",
  "key32": "2dRwEGVZkUrNbxLRKN51tYa6qgWN5MLBd3AFpQQGVfH2hSyjJazjsfoA4WQfdDzpohQBPjTznj7MyZZ9nNk1hKeG",
  "key33": "4iGcgz3avup95AAMdRnYqTwF2fNQKXoav3uoFmXpaebrSmTdpFwNz2ZgXBiZXxufNb4qU3Ao6urvEYvbbTjw6Hrj",
  "key34": "554gnH8qcyCPiPMpQToBaKnCTf7aSx6bkjdpdLBGUiG3jE9xzmDsTHhsHXM57s1ACQ26GHrMEBJrHV6WKPWRtgng",
  "key35": "QAVDdbfUnSdTSfLDSCsi8y1pw1RDPBeqYG2SxQHHwpDLPfqtaeu1fNujFYxx9dpQscGoWQJV21C5ajE4SgXg2HD",
  "key36": "5mKzyV7C7E1jJcnLGwmoe61rYM9cxg9Sgd8VigYfbeVZ251BmEgpmmTHLdWCxEzSXNGbBDEgjReZBKQn1EpmtZ9b",
  "key37": "5etpKBkRxVis6oefQDQYkwukSKmBZhkPC4GLwhYj1oW62esLaYNnchGgujHfwNdkD3ubAhxsLe3VieX1bcnu2GQ3",
  "key38": "2NELbYB8EmdX1n355srTJMoQykpKivtbbKqFKohns5v4WXmNuxmGpFQHeRpbbsGT72p9uVmvfNPmbgY4FCjbyQrw",
  "key39": "2pZfZji4yx19biZpxMvfQBvH1j7CyeqxD6VhPJVyirwAQGdKM8jR3VREDYitr62dnPm991xfkJkGJ5VcVkgSoSK6",
  "key40": "4zLEcWAPBqncygsHARXC31VbB7Txzv4d2Z3Scu8XLoGwo5xedYaK5mxUcXRNFpXMbZuBi9iXrBMYgZNh78nPhjpS",
  "key41": "pgUM7EUQXWzDGTCXcseF1MWVtKFH3ZTQvbQpe6fRzi8nsEULxRYirPdjGPsWLVMNaHaKUEtfySayqHMq3i1rCy4",
  "key42": "4h5tH2KbbM3UKRExjewS6GtSKyCC3hZkabaXVJ8nuGBG6nnNZHFbcKfpSL289Ld37QyFCuBiZvLU4gmfJGehEkB3",
  "key43": "2Ggite8eWmtWrbmfGtjxvSei97fweMpt6qUKTWGqNB6Uf6hhT93FJWkiuNPU2gpMASjmFWj9t8N7MYUgpS6EeweE",
  "key44": "3Zt5y2jAPvvnC1y9vRdC4MZ8DjUYuUt3gYbkqtrmGDeXYSoX1jFYSJEjbXDFmvaX9yuwDgkUYoDpAdzLGoFNohU7"
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
