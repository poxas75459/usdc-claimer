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
    "57a1EJh3iokAsJvtkzu3twLgG8oFhFdLFCVT9yL6M15BWei4GEtwaKsDeS1iHTYuVyGdECGFeZ7hZPWppBvkqdHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzbTbyLNxsbXhom7wtD2Pyim11cfwM1jc4eoG85aDQufnu23JobYCqM82jUgZ7NtzEECP3thJZvgUctozwewR4s",
  "key1": "3hTDE1hnRazLjBouCviu17Yg9J6crh1GYwbVFBuZo2mjuY4qKMbL5sf5waFryf23aqAJMJanwBmK7LsXehiYAJEP",
  "key2": "3kiYFoi3pYYnRaicVA4vM7FGU75XyWhjH9gfmqL5rstppsg5Ae86NPw8Y9KRTSmWfc8cLfPyFgsoF33oKE1nF5YW",
  "key3": "1kvkKH54MQhutkcRYtJLughT1Ya9FLxKcqhXXbb34nNrW6Y2ZcoMEjG5uywNd2YVrVo31onVXQzVTtWRyQFBa7c",
  "key4": "3h857DKD8rT8R63wPEiBddBZct8t5E7nYdmKTkF5yrFQxsdbb9TVLhCNnFvELLoPiUeaxwtqsAvT4PdtwXfNhEgW",
  "key5": "Rf2T4JAF13wxCwDvYFuHR6t8Pj7y3qGt5A5cwyopKBm8grbYHRxNjsB5rWtn64wnKyTFKuxjNswbYMjwgiypezn",
  "key6": "2oNNk2b49ZgGDXfDYqPGuVidbT5Dy9qz5dnRG752A3hsvuFAiBWUYV7MWPLHhdzCGYp6AnPx2pVAK8zdZZ1JFvDe",
  "key7": "2NRD5PAAi5HAxyiJqMzPz63yKeXKD3ReaXxAFu6VHQ5H7qWTQavxqKmPqcFEHB3c2gb49azA671t9YrBksoRirE2",
  "key8": "3P2f9xKKQKuV76bTqGZwS7MZGmqGXdMRgpoBsC4A3xsLU2r5iKHHGmNF26H1QZhSF8yjA4gmi3KWje4sgiBFr6JX",
  "key9": "D76PzEmHEMBELnj9rhqGLSuKkRmjuLc13jpUg2JmZfHEBuQvWDLWHGVLMHGgnsCbDBRkzDuuMD9iHKxZbKkcyeD",
  "key10": "3ZWzDAQcxGjvCnJWxSCKzw13esDTzz6PwwS2ySNyYvmKEoZ72Kr4CtzbxbpEpZKgfeWLpZ7MaHtSGgzvW1edpipK",
  "key11": "2KXi9BLd34rBGFEreLREk8gAoz4bKEphMGr8DajfkcDxVX95rPRsvocLY3V2RuYuvzXUu6W7CQSayTqRFurswKgF",
  "key12": "4BKiSfSsYrfP3QhMa4LSHUcWDk8NpBFCK5PnbLY3KrcZzTKAkGZyj1M9bZ7PHAmXE1FaiaxUZieGjh9UXWbS4hGX",
  "key13": "3SauMmZjyyKktvmz63HTeCAteusNLhfQc8PRJ32K9vVqY3Z8QF6XkjZBkcuviH6ehNs9iyp6vuN8G7Wq9atZdxQ8",
  "key14": "5XsMLPDhq5rQZkLbXKfAx4NkSpA94FChVS49fxQdbZBRyZ2r3nUrBZV2pPCSeJBrDzw8Vcht8AC3Pu4y9mWChq6R",
  "key15": "5Z3PioH4uNXci8xPwkezECT9RjqPVYfDK3VgtJHohhF5GAf33T9fYxudXgwueHUWhrkKGXrMEb4hGbU4RdJ4QZta",
  "key16": "3dDqEopkNdXHd531uBx1qPNdFktrc3iadCTKhC2wvMN37dqPBXVVFtHXdcFyUhWG4ysUs9GEsHV1KZJwyayL5TWa",
  "key17": "2RRBswcMWGAxvHPP3nvi3e2deARVvSCdoVatJM2V4PbXboDGAyzxBYbzZzv1UMbrakG7e2gQjxq1H4gFBLZ4tyGJ",
  "key18": "4Pe8aPZWV8WkMCyihgaej8fssAyr816Tyjuc5T5Xp3skUGVpY8pX4zqCTX41hZCQMHNVM5JYkULBQMfMXwi5WJEd",
  "key19": "3LQTY4pnuQbMUhKmrcYJZWiit3W922tNxyrwEWqUeBTnR8Atot3s8YJ3MiDRMsH1q6ovt4dA2d1A6U5z6p2S4XzT",
  "key20": "3uwFagm6sNbQ2Tgq61isQH4rGy4ug74nFaNtVQKFsSyKf1pP9NAi8NFRfr3w6WhQq2LPnwCsv11GdGm25wwcX6v6",
  "key21": "4TPJkfv8vamh5SaR6TjZ6HXoi3jHRLZGtDMx35H5xJeBZJx7nr29k1Szdk5Ws2f3BpQ1hBPrx8aNE3HzLQMZjha",
  "key22": "My7X1r42CE3TbeuJ3uoaMksL1eJqzZWzc7FRVPMd7PZF1cdVuQpSvxKc7WCXXvE4tt8j7sE5S2k6tjPdk3GJu6P",
  "key23": "FGynRc72zFcHhyw34z2bk4fk9z3Ga2L2u5n713jXMZ3MNF4tGDDdFCNmZjuMrTesTMs1TnZTjFCCKj7KutDdSW1",
  "key24": "5NV6CqgjzPGVu6LdYqN1XNkPehDbktgjeZe73bQ8v8mdMctGt1gBwbfonP7r1RaM28RhfhtAUqoCEw3mbckx22mo",
  "key25": "568ZVMVe74jeZyA63PurAvsPV2Nqrf4HkMTePJi5TmHebhRKaf1DtTJz64cnimKXMiwaeKJwKG78pLDZp5wnSEZt",
  "key26": "3uPtiezJzzVX13DZurkHsPA9MVwGszND9qkhavn49TAgYZE2f11bLTSroiw8qQQNz4BmXwBfnAZgXYRMRKJsbRJi",
  "key27": "4cyPHHLHmGjwKCsW9TdRg8MM86VzJaFF5by4UaiUG4BaP9PUkpN7ZtLKaeLgWMsg79JsU9v62fELk5qqP7v7BSB9",
  "key28": "2dWeddVHYX7uy189j4pqTthi41oRDQFFz99FjJVAYeCqS3rbAsMPcnWnYpPKdtGH2RhbGCV4uoiYQR65gpio5iZP",
  "key29": "5rNajJrxdMMis1GeeB1yqAiEvgt4W8v4GPX2dMdJUFZvfZjHsp9UAaauuaJJXyZyiTLYKtCy4XYF4JMQyXAw8J1S",
  "key30": "nTkaBeR9NQNufxy4cc2CLZfmWuEf339doufeH1zmS87K2FqtdgHBgt6FKYhDeh1aroTK86enybcmp4qDK6RnJzi",
  "key31": "3ggpAnJ1Wd8v36QQzTnwYX79jA9jHU3mRyZRxCf8Xgoh3Hz69NwyiqMoJr4oKUz5kVBQQPduaCDw9nByJb8E4tzK",
  "key32": "4ukWvyj5kN9QMQGU8YFeSaTuMXJVqT8nn4yWDNUDm7aUMo3dhepfbdn15Zz8xZvNkrdQDJKhhUSuEUJMLiVnsnxH",
  "key33": "38nYNbzv7T2eXDZ8VPSpQotH5w8tzj3ewmJEMrHQYQ5Y3Je9jys4QoxMKk5bxZDfhnpDHatpPgDNeZ1PaLt8j6Qc",
  "key34": "2LYTy3t776Yx4V9ENkvF8Tf6qSub6rBrP4f5zxRgPtkX5FsweANN9ug6Xg3TAAAXCdpc58UxDrk3M4BfhNG4N9ys",
  "key35": "33KW9PoBYsQDsRoz95ak2pGsjLiumksAKFNiqxJW3avPbvQS2ja19pYifyFwc9aMX1VxCswx6Z5kFKvuPrFB8P1s",
  "key36": "2Nyq7ApjEMfivjXb2FTDExff1pV9AncS1r99JuxYQqgkvuTXFwQqUffS2wad8CCVPZYUPiT5EGA58r9tp1JJJ4PX",
  "key37": "295tbxAgoaAQXAcUBoXTRyCLXEHozzX8qPHnHDMrSHQ11zS73LdG8XZQUB5HxBLy4zgmNfYUmiiFPT1axzyNHncp",
  "key38": "5wGdPJL82a7Ln8ewRjiN17TAQbBB4HT5dmU5qGZSR9xvujpouKdujJ7KyssEzMUxAP5vNnrCm34ZdB9iGBMuKKPm",
  "key39": "4vKuVy7UWPJimU22mETsyZgdqjrfh2pSLMx51QUPY5EdaanhXYUfVsKfZ7m69As4yVg9myHzuSZQeJhW1P9U2zLJ"
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
