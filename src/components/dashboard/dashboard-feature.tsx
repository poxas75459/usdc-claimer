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
    "5hQjTgzmJF3rRqHnwWAUmGmyuSp1yToJCrMxtoQpQ9zCpdCegXeScpfvajwh9QUqgqSRK3xPTnWK4mDsJANmY99H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qdxKLrUb3QhrYnvFndGQK4RfhAnHc53y7riV7DT5Y57UjezcZwbQsXWS95djQpM5jFQNoPKh8yA9PfRFyuPcn64",
  "key1": "5vL5e3SfF8fuGKHDMhTAw6nFEw8LRHruVP2gu3UViuSC6E6DNeB6R9i15Pny6z6JtgbkgKUAc3vnN7VZwoqd2JJH",
  "key2": "fxo8Ls4WqdUUxjcMrZoUoq16irEb5pakPrTZL1oErZPiWNAfxP9dCJiHfZ183iia2FGGDhYZNF5aiKdaz8hMWja",
  "key3": "5S8kez1hrrvij7FYazAyx34m4AHg5Zqyy5TQzJgYBW7NgaaoWpVR9Us9qW5QDvguRnC9gbfS27myTnePoBrXGjMW",
  "key4": "62WpnEL4ZvJowtbkYwFGgBVnqnbz5BVLKpTbcXHwZFHTZK9Uy5Hv6XyUiLTMhPG4NftLnLTJAcJgNDp666PxA2Dx",
  "key5": "4tEGW6DjyTumkzGUUJKhpwnW6apxLSCPrLNe2m19UbwtEC5zcG71cWmmSUZDU6khcoZcjJZvyp5VyNkZPUFLyxVo",
  "key6": "4Y6BuB3cFoTZ762SXiK3Rq4BTwBtbnih1erhmCjkP6LebPPrpz7sTmrLqeS46YSV7z2cGuQugG6Ggwb39uXNvLxR",
  "key7": "3Lf6hA6B7q3W2qpDKvEzJ3ynuVexsEiNn8ZJtcpGXbXGfUcUWS6hZ1Sn6fKJEWKHtwyE66bzGmLxS6ZWsxEJgnQG",
  "key8": "663LB6nRsz1kh1AdWagU1MCXo6T88GRRQJjBkWj2WkwsM7puURtoUvvSTK8aTVdYcHHP84GGb43gHiFVmrz8mzD6",
  "key9": "QJTxRo45acacrAdXcwviD8ZpaQkbUSGyUEfWj8rSjkW3mJWRGAT9Yvp4XULz49fWpgKtFYGXqEnvCtDccKMeVPA",
  "key10": "25CZrdwVDztEt5BPRr9CE72SvJStnstWR43wduc5jjTJn2UyHetvTeufVbfbMWdGRiqmGiorR2LsRvbgMaowJJPa",
  "key11": "3wX7qF24s2Y2DKhRtm9G7q19hMtRvap5oiSdCfJFjZjcVERxzxeQFuBaDRLNJvk5XE98UZcFvd2jKG584jKvUckz",
  "key12": "5SXprHtU6djAhyp5vE2TWt4YssTsyUZAUT2rxpiuqbJYhMgqc832oHHPxV6krLtyw6GTjznX55BvzExYS3Y5ewb",
  "key13": "4em2UPtpzaNXu2bHyvVMLuw3ydNtwppGX1GNfLfxc6boWbxxbNG1UeQT1YmDH54GaAkgxqpf7ZcVCmysaMEXYdPw",
  "key14": "4c1MMd8ugqb272ZV5Yscvc2d65B9ywmB9ZZJEuf4W1rwMJZD9WqnFqWctBRSKoeCFm8CsHjwRUb9pSw3Tba23CyW",
  "key15": "2CAc1rN4exkYeMXgDb74kHjupC9RsNe7V1fUxdxJceY4tRYNurYupkK4ZnXsqWaBTsT9pTmXzdptF4ZHDSzGundY",
  "key16": "5RJfk4LN6yQnJUMNnNBtwHVhuWYaQDzhxxECB3Avy5aC7J2DntqA3vVYihfWA2FNL5CKDbZHwf4tm2eufbXSeEHa",
  "key17": "FHZJ7ick2KrqTfMEAdrYQ1UBq8aDGMxDDcWp76U2y2MRnF4BGaDV5v1bED9h96pr8E6CZeseSLHeZd4LWymmKZJ",
  "key18": "3Ly7CGxFwTcPmNuhk2p1o9ZKRrBxpwoRUDxB5j2BTyB6pRLDJn937Pup4TjqaDQJVZuvP58ibJX1yQFNgkkf9vKe",
  "key19": "54X7TMMtfxAUCtqncCRFaScS6VXLHc18FTuuajaw6z2EjFqfGiR2T6bzaKm9rn4jjsQGmeqJkyBGraD1sEa2Jz8y",
  "key20": "5zaHWEzYFt4Pwu85Q4YixawNSfNv96wHHSaHQkCe6fjdgLsv2bs6hVEXZLaJNQfZjtDxCMRcRTpqpeWsmg8Qf87s",
  "key21": "3BDTCUxga3u67uiNMwT7GS9vGafAt4fA4XWNkNY2cca4c1fq48UATo2U2Xq6GF6urcvB6ADCVHrMD9kvSszLNVa1",
  "key22": "99hFYRRQhDrfqSj3sVGkWj5zjCrL2aBBAQ66bkh1HVF8FoCaja7BhDnmNCo2K84ZEZ3v6cU4LBDCE9VjtVGF3Gg",
  "key23": "QZvpg7sjJseqibRbUJBPdCAtTzqcyVCHXXWvBJHH25ubdSgV3GukyTVTV9f62XMfbsMTRgxnwSCDeG9RVXu73By",
  "key24": "5sbNfgNSDd1Y1HMLDs87ad3JTrBXLTn7L46GZfyU1u5YrQozZ6DB3oodyFKP48938cJoRsydVBjg8E1yxynF6k73",
  "key25": "2oCLCWRtUH8ULuQy1JVsF4WwZZtuYrfEN9ZJvHSUKji4Q34YwU4snW8xzv9a2FopqBMXU1kXcnywSwxUG27qPqmi",
  "key26": "2BiQoytSiZ88dhqRaFq5X9qdqnK8RXqgM1JKmhqyVt4rL9UVqQfN3XvaV7trCdoY1JK2THkzRBfP4YxaJDgjvFfu",
  "key27": "4XmciB38Tk85eCmNsMRmetWfLZwgX8Sakcey6WappXTp7xtaA7dxhazPd2roK2yM5CP5Ap7s6XD6HJBE2C8JADS1",
  "key28": "2ZDo5NGZM72iBgiracmT9RcuPn5m1kk8P8arKWWgMi2DiAtRVYXexsih59G8UEU5UXRnCBPhCsGBWYLx1JbhZFDJ",
  "key29": "3me8DHRUaFmwD4AXpZkVT8snauUDc4EgqsA9vAd88u6iXksYMJLyJbPj3JojsoDPq48FykmBHU7ick22qkVnackG",
  "key30": "25m3DDrNi6t5FGb1rSqy545MD5AaX4vC3wm6RKkvLtMyktUv8h2Z8TrthXyYUxVd4chE6FeCwD9tzEENhs7KMFCS",
  "key31": "52aszBbrJ3h9hXmeV5xG6XLWFnmoXu41wHwQyJB6n4EGVsEXa7oAgwxA1tQDVw7Lt5Zzi7QQNiSWF5LeCuMZ7iwu",
  "key32": "KdsdjM1dzAx5RALv6V56tXCt3wXycSaigFfyfBjQtKLxDUmFc4JwU9Hdweu74NCmgYYHMqGcpJJx27UwDRkrqwu",
  "key33": "3nxPrEnkeNomT2zGif4moWNczkZhUft6QUZgV4smC4PwaqECb6W6SQzcTs17xt3A55LNTVnvooTi3nmp8JjcSVWd",
  "key34": "3NSaCu2ncoTBamhTDRbiVpMiHAzsx8DnouxLXGdDdnqFBzL59mxKydv9ebHZTYDGHwbNKkfeCxwcEnRhw5zFy36K",
  "key35": "5MBUKbjmC1pfju1ZAgQ2xykxG6TdPqTh1d33npWCxfe3J8LaZWzULSVWAZaCKYDuLNU2nPmPoitfHTh3NCRjUUb",
  "key36": "4JgzPHCubT6b9ZYu7tWXXwQFGqdaTG7t7VeNs2iVkMfh1NZJPmXQy3DYJ7mGsfVbu6DkyeCj3DRW79btWCWasyQ2",
  "key37": "5Ce7DrLZizA62ugFVE3uTSSDdJh78hTPv8DgJrsCuYeUxtor6dRE3UMMunYNbXrwM8XmAPJfhejpNppkThotuFPM",
  "key38": "3GSr1nvrnhQd1KUJCdw87vJagaj2BZHMh3GxRdDqJTo5mQtFiHf5kC66QUDUyT8CGNxrYqtad7YU6DRwbW4yMKfi",
  "key39": "3LsPB56YPjmJsDdFH1MDXGay5gU4eCAmDwrQXxBh4Ny45BfWD7YyP9U4JSPoBMhvwV4nzMABEUXoLpZTAUgpE4h9",
  "key40": "4ZvWMQALuC8kwk6N5VmURpiMRVaxDoumJMHhLZwFKiKPrS9CSRKJYVLi63RMVeekWLLgHs1wAaQhSWf8hEiXYa8H",
  "key41": "2mLULiRb9KLWTnxdPBQYm8mjGFagUPbKsk3GJ3XarcLmuYHam2NkNQgVSA3UdCvdy5NnC39xAHTppUEY1yMngqpd",
  "key42": "3GZCfeiDB4XwZYDBcFDAgkvUKmWt85nNfpuQk4kAepZnKfzeHg3os6NaT8WRyqXmtuH5Wx1TU32A4n7VsDbvLJ97",
  "key43": "3gg7PMuvfNWB7obnv3vFxjYYbcJq28kKg2mZsbKuRyVtgZ6NNRMEWxpCCcTwAFj6ccafdeuhuHH6qRLtu6tRHpTx",
  "key44": "2ZDa4LR39ecGbecaqZUJ3dVAFncTLCSjxEAaccjtyLE4brF8FypmwVq77pUaAsoe8rSNf59Vq2D3vUc1tvXZZwAN"
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
