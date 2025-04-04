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
    "5GByAWrRS4mgJ8UDSCsK9Jo5Zva1jwCKRCHox6BBLaSe1WAcVuGXZYTHbdtbDge953zYa73SnhPAhyimSqC6Lrmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPka9DusFtic6svN7sxVZDJ3xrCAwcnPM4FTEU2VSaZqM8hqJ4DHpEWoGqth3JAHDWsqT6parXUG8g7atsTeg1K",
  "key1": "4yMHNHELV4ZaGDMyDJhgw5z8PxuFF4UuTPVAnrz6gs6TxGaM9kxNUtUtLmXJQyckQrPGugA3gV8siAynsdX7LWgg",
  "key2": "h7ZRavwCTUEnqKFvto2vS3iLDkjGAPEfgLcHuGyJEu1q3w2ZRsQQ6FR9AWE4sy1QzrCRqgVALsz8DjVJc5eoyVe",
  "key3": "3BNbHgCsnAVRDiunwyTgNMquehQ4b6xdHxxsarWo2yaKF3jS7QKkBTnCwwowLanKfsNEuiWieF2gU5qzSHntEd2K",
  "key4": "4p4HBnQbK3x7Z4H7iafXnwKqTs54qCzWhwShZ9a9rKhWXabQanMCFg755BozSkM9cZCa3jiDXPdveuwKReDQwZey",
  "key5": "2kwihxVhspb4sVVjGndr8scKS6LJmjoA3QVbfqGkSXTx5qtZjqdPQLhYwYsa8GmLPas1R1hwGfDwmtBqLqdBcS5Q",
  "key6": "66J4oSMfLhbHz9tt6yfEQLNsovJq9wR7kKu1S3QNGzm9wxydrhGePWnf5Zjk6YSvLMCegpuuKoVM12GCcK5vcryA",
  "key7": "65wnsEvr2WKoTqnigJk1NnA9rArVYVecyRsANayo4bEEZPRJPhQk87EMyHik4ftbEWkUXfD95gvMdBUZ8shNXtLp",
  "key8": "LAfHCAM57yHj8JSJy1XcU32Hpuzt7qR93Ta2DLak6DPBNoqijPqorNFUQ5oWvdE9GnkuCENvw6eJGAX6kJPixdm",
  "key9": "3rGMurWEjF86L2UCyPwwJVeatyqbmk3fotNBy5NwWo1t5Za1XQHVasS4d3wAPsJyUzfQ16fncamh2XxdiGBmMbb9",
  "key10": "2DJkxFyH8gxgVALSoghyRwGGGW5RGsL6T4Yu55gQzBPYHBNu27XaD8bpZmiLna75LJBeJox27Wz8Nu2Ym56xCbS7",
  "key11": "ovVhbiG2FVM9hvQCqumcQspuHZFs5wWrExtFK7L6xAvwxveJBF4BQEZXDeWNs3J2bFQi6PQzMuAYF7VeVo62Vmk",
  "key12": "rkjaEnoNsw6xrm6zHRFTcByzS7zsdHHeLJ4J76CY1DCCBKDfGKMWEw2QH9tX5EwuKZhPjqHjN3WAdxKeJ7GmMBL",
  "key13": "3XRCbiL4WUocZ7cuGPR8DZaqRbn5E3w1tL76urSFdk79W7iA39RSdzyHCsAQdHgifcFLXfTAMW8S1zjPPUthoCcU",
  "key14": "3VxD1TrDS8ta2kCZYc6hMd5w8f3EDxgkHZAnFPwUkAk25uMADgqdSprHKXuXxRHitypaA8MSi8jfRxugAEJ592p6",
  "key15": "2gYXSnfDLuNDvYbGzfnZFmX2mfkwDU9CRnsdfuvJebhwMBDZB9LAmY5Ti18Z5Q5X2pNec6gVDi3Q3tjGkXgd8WXT",
  "key16": "65x4jWRcmAGvC6ykECoC8uUDAL9p1XR6RNnCgNVrF8XDbBH4r3k6m73EfbSSK7LDv3WVMhZkuVwAT9FTJ8GHubPn",
  "key17": "i11kjMTo9jGbTDG3cHUrGDo53EsXPZi2BuqJsQMCXgVYaKMhbKTifFpGTNUpjANhUQLarvtbf1KqvLsHBpcTrmh",
  "key18": "23pZzDBxRCi1TaqL7VLpVgYKvwL6B7Rh9CHChh6y6MEd7BkcGLS4zoEtys2LBxhkcTuy7hgV33Wqsd9hPJyk8N1b",
  "key19": "3X36JKerN4dzvDWPG3UQmhRPPFUMvXpMTBQMNo5HanPWcyKb4RQt7bi9yZvKp2LWFM2D64iemrGLYXgKZpKMuHWi",
  "key20": "CXEj5rtwSPQMxemd4c9tPvzidKWeHxcWCdELPFqFL5hCwzQ8uGqYeWx8WKcfmaB4vHA3KxXDWWys3ZJGG4Reroh",
  "key21": "4nJHVg7uq1b5Ubs5qHY7Rm44tiS3saKD7NHAwmCaijnTDkLrkqxUfpekRg1n9C2yrWhVziN7w8B6aj7RWKSnecMB",
  "key22": "5NWAjxUNAJRSpdSnRxMrXBhcMgEmWKKgdQsKJwyEbf8CuZonsVar39zNZLCAG818M9e6SzGczBr8A4f91d9Ss6G",
  "key23": "2BgunR5Gjihi5YJWBTyAvhS6azU2SZhJBEEsFGBgJcv3v9reJ56o756PUNSJrZYiebR9qG8dFVmo1tJPuWvbE5Qw",
  "key24": "5FEqq7PNAfFDpdDBi1dfm4RQvQKtBHqoe4NuLGcNxwcJAXdYfwNkgmWdXWX99o3gtGG4HZCyfogDnFa9MQkuG98c",
  "key25": "Ajnz29JQHH5BxiANvpgnuqqSC2nPyBosF5TcYAd6gc2bNEYShULkQmvFUzsd2aPMNPUHPJuw9h1rgitV655RWom",
  "key26": "4w7Jyk7KC4HFZeanHM8aTeEqQ7eKuvS4v7ocYC1vVsU4zMD3ip9s4WnLuSknKbZM5AyAN58wgQBxNciW1TpDEmWu",
  "key27": "4JvB344de1m4gCJwdNQicf8MaBCUF4LZfyy3sFxrDiUiYQMECXUYgZcUkBhStenZCq6DdmeXNRp6PJpyfdqb2esx",
  "key28": "4eyYzjHpeNhwN4xfxbSnxZBQQejuKxwBNBa1CUtpU6TQmH46rSDa4jsfjvYWLrwu2UfEEPGjNHETCr9K4tM9whjF",
  "key29": "2dEFUrq7mTv493aAhURzGssyCVYFFQ3jLJQh5ok6jtRMoM2wzSp92soKEWTJBbwhEhT26nA63Si62QEcnyCX4Pkp",
  "key30": "5CsRopoRYYqjKEgXB3Afo6UZmLeTmKHsawtvtyzdgaBiJ5RxAg8df694i2rxMsRZkv3P5FVqgYvraCceTGgqBHSh",
  "key31": "cvcGKwngfBAhJwmSFPy8iNPSiQfvkgXXnbiyfWu5QuraAwPgjkFPzHXCee3uCtoKafjSMeSBo1g53DD7QUe4zi3",
  "key32": "5ZmVkfJiKCamXEb2aNHZ5jRPyRPFFTbKgPxiqyQ8gKRqUdyosXDxJzdzi1JAZkk25zXLDeC1jiWX1QCeMrAYWYSg",
  "key33": "2hxf5dj9BUa6XHukTivByci3emFfs3u1BuBwMVoAMLrzSXovPyjQLpCC4epGiSXpvzwckasoWzMXvakEXkuADZwx",
  "key34": "5wQeU7hCo56QBqn9vhJngXtMhyZ2c6s5khd1xsWTi4C4yPGYQsafZfXtiecojorhH3j6XSkJcb5PvHzKhp1U4LH8",
  "key35": "4PmPbBrYMsYSz3nXJkg8N4sppZN4gZe78WDMDzLrxZwyA6bJZJs4h9ECJFzctty9FgtWQFzujJrwTUJ1DYaQU6m3",
  "key36": "2nkTB7kxnfJdtuQEEVozZ8oJJkbbLBuizMthJMUGWuKmzuTN9gCM1MJDbBDC5joeiwrnwDE8be5jkzDnagEGqxAX",
  "key37": "2D8L5y6kLJS4Vejr5tGraXRbZohgsbnCTUnEbk2BMCxx9qfztjUQxCeLirguhghEkfnZWBZDesyr1vvaqZqca1bx",
  "key38": "4vhUBcR1Spyxtr9rs2z4wCFF4y48nEKs7m7nCoEaF45y9sBcdbWfJVTYqt1Hr6hCudCPywJnMNp7SJkbD3Th3dSX",
  "key39": "4EkQYV6w8XSAvHz6LBtDrUqXcZwonSiiLC3ai7ynuij2Q5Qcs9R9oCAUbWUCz2y17hNPRsVk74bnrUf9DvDq2M1z",
  "key40": "M4MCuPhxYb9wbBu1GN6HDimETzCvHjmPggUNGJ1jsDYAW8iq7gSv4ZaY4qb7ZcbaR5mJyENJp9WSMqVbRPcK1xi",
  "key41": "34BYqAGZQFj58QRjawJVC1fwpNBv1KKnvXzzhWUyZMn6TgisxvmWLjHbhKPvoxcb1XDrRqPKxCYSGpnYA6TKdkVJ",
  "key42": "51VjyQCpsxApaiVfT6mRmEfonX9ShqtU5WRnLQWNdpXudbg6SUPgFnkr5oRULScFX3xt7A87gtpqh5TMzBi2h1ng",
  "key43": "4MA6GMH1JknAwvki3e9L8r3DHcJhMXFCRBnVsKCPfJXB256actnZq6VPvTKiCLTg8iPZbhuSvtPnQtRrTbXuCHTX",
  "key44": "8MPBoUVD48mJ2E85CED1rUiUnsubrHDqiqgTBaPiJoyBCBGFPWKn9SzXnuhu1dEy3QW7fBkrQLU5EMjnbqdCL12"
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
