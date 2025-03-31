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
    "42KbjKEgrkhZ3BgW9nHDWvcRA6PafqNa8ePC861e7aGZ2YxDX2rbeAyAxbVgvXnBxyVWALHmV37Uu7Zz14iRsmcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iSkPLmkuz3NJGJRys8S7ixXhQEtovZckVe1mdeFs8BENuZDf54XxUc4JStTryW18wXpv34Hpsx9Roc7x6UXrdn",
  "key1": "3ngUzRnBHBxyeQ3qCw5h1Q5cenC9kZfLavzMGeokqenyYmcg2xwZ3TaZgYaqziFpLQbTotVoTtd25Q9f8tELLySd",
  "key2": "zWWSGWt1gPyvy49Ef19TP7ixiBRr5Ymr6KXR3eQ4v4wkMiZ9xFghcFaXYRaKWqjYF181ToCX2fB4jeJkbMgr3gU",
  "key3": "5wca3J4b9GfeM4L912sRH1M6mCaQKPb2A4Jzb9LHNYALWzTD4cvYRoAsTLC6JdFEyVGkhvFKLa5xC3wmABR5c6B3",
  "key4": "2VHXffSxzZB61rSq4NQtcF1SYpSQTFvJ81Ty8JPCMsexrvVjiR2DkSsH28Dc69zhKjqA15xbVYTVp9kJsf8QyHgc",
  "key5": "EFbBg5jgUp81ndcHHzWFzFR5p25VPPxG3jkJz62CWTNLDfyF4vjjnuRyb4DLssqWGMrTxNNKqgxg1kCeag9F5vu",
  "key6": "35LfGuMA8x9CrtuwNTHg5QiQP8Tu6beLgWV6bVVBYizbBAmei2QKja63HnnXXk4M1U7fTmr4e59y7NTY2wrTcyKr",
  "key7": "5Rv48CK5sCKBrop9w4UG8VCF8g1Moamg1jrwQyj6RgdL3i9ULKkg7vzaZszi1ZAP4wJKo2idr1gxQWRmqeepjYbV",
  "key8": "2EnKv96MvN1hJxPiF6YgpCkNjv2ZGz33xG8w2xniMJGmzEKaLki4bCJFZxsCr9LMMPaHRhoSSRDKapJnwJwr3fcf",
  "key9": "5kLKQf4jPNX93ukbiwPydB4ZFGSm9smgMuTn48CgjTXxcPow7u2ytJvGQRVpSh1UFScAAYgi36ttaEFT6jCMWHtT",
  "key10": "nTR6ptxQK5MxE8N9YAajArLNjeLsQmxxrQyZiqZwcrdFENNgVTiGa9YQMrYD5wBAs25qsTRiPvzEseyfGdmAYt5",
  "key11": "3Fmf4DxhcMRLEz3wRpZ9J16tnk7j3iMaKyVEmFrXKJ3QdtNL7qsBpUL5hKmkPrhy2WRGt4XT5ZHgvXkgBvSUeCTd",
  "key12": "3LgqHfULtkE2DFNPfcLHPbScm7ZJYKbvDCDXiMvYPY9urzuzpMRjTLyDZ5EL3WKFrUFxmBLwTisNPhBto2RjTkW9",
  "key13": "DViXzAitw9DjcP5tmrbmVhXkUgTAaxdAXiegEzhuXRaMZh2maueYpzmL3KpofUvMMQaAqgEA5wK7aZVguiSshDY",
  "key14": "3XNofhfDWf31RHjt1EDhVxi6htJZqSdDPDvUEFUsCvaMMjUidLW8N7YwbPSSFZPeLPRkJimagbKtJ3QqhGr9yPMD",
  "key15": "2KeCEYSFm5PC8oZgh1eX89Ry5DsXgDqdSd3PA45wLFhcBA3yJxfRvmfPUbvz84cCLLimrffSBG35VTjb6bb4xNov",
  "key16": "2xpGZyvwfqsK3vrD58g9W5T5srRhkxFqb37VdoUWDzFokzQ1JTDfhBr82gTaMgUJCHJRG4dGuiGGQk32FMkjc5J7",
  "key17": "3aGMJM3SVFJECRqZVppSt3FHapvWPWofj8joGhDdTiRkLoDEHbHi1bPjbyMEZTMDT61xpjQtu5GWbuztfUe3LF8C",
  "key18": "34LYJzGZSxQMvRLmXCMcYDe4pev4mhHi7WPvQ3eHQ7ZfH7JUJ2roAwngNyQzGhEQE2admdbKSDBXGVdiYMQ6oW1x",
  "key19": "5Bax8J14VSLqWwo1qW5392NHRKdrTTcgsTCP7rmNvetdZC5nnBDziYARwB18RHtARmv3UrMw1CTPQd8EbPqAYuHf",
  "key20": "3b6t8isdWkEbaEAdx3hPgzkuKAdRuv1TDNqQxFNWHzSKqu8qQNwx511k3Zd27Q42bhCvr5dzrisfFggWSbD3TTpj",
  "key21": "3LRMayUKiszANmEHmMRWWF1zXiDby58GyPxQjs9u16yitEA1TEDqt8jgC7XTLrGXgtZE8QDaGje8NHBqPigeMiiy",
  "key22": "4hSLyrJgb4UCTVQ5fmGtV7hwLDWMwC3akCzNgK6jdGJSQxWRDWxnNASn5U76FpHmr1e3FARZP4W6jygweHU1g8n9",
  "key23": "5E81YpXKhFugNYTA8yn28kgGH8YYRjKmhgGqKbx9UR8VsJFqSmVwKm6NgSF1CoqreNSvxdz7x6Dhrk3V6y1xiG4i",
  "key24": "5PEJG4EotTxQHPfuxiGEVHWUq8DMz84n9ZGDoDto8EEbzEZGkw2tYGjPUK3c2NNYq1LeKCVPkvzAwXpbfd1fXikj",
  "key25": "2AZeCAhvyY1q68CvWwNTCgus6wNW3fAbYjTM6sZZ8pRJSwgEajwyuVqNegJjBQpG69cZkVW6rPG65u1pu1JRqu9c",
  "key26": "2xb6J5kW2oZ6nKeNf7FPKbtMFbZND9hfbMGqp3UfaKooPeaMsYVk4Tiq3ocECfMa9zAk6zg6BdZDJQyMKBEJteWb",
  "key27": "2Bz5mg7Kb2mk81dPjnHwfB96KjcUsuWLbvJfgXJFtg5j3CfFmHBbKApU3wcD7VxoR5JSdsiPEQmZpg24tSrL2eVR",
  "key28": "5RZLymFCjAQLUWfpqTQJ5StuTrPcJAz1HZnybYgkAFoLhAvquaEqD7hLJSdUKY1pfBwgA858XSMMTxMyV3vXoEck",
  "key29": "52Kd9tMUFLoWmQGS574M9QFEXaJVrMcm9T2m3jSTr9WMZhEdMFeFcM1jt9cEkY5jWbZcX66UrugMSwaZ3UTRLs2y",
  "key30": "4Nk16DMMPeHHE13wrfPq2GAo3V9cMTHAjphDYXt5HYgzMuwHPSGbzR5SkbaH15Y3bbc46WuLSAYxobpkfpPmRuHf",
  "key31": "2RhgdvYgeiihmz1MF66AsHJ3qPPpk1HM4xJDehvPPeGvGW3wciQGEQqAcWLFfkqzhTfiWuDow8X9cxPwc834Ytng",
  "key32": "61WY2mZ4V8fVRYzKqG4WYRuTeLTAqcPYFGriZy5mZtYvssLZVW3aX7UsmeM31QLAa29T9Xkgh5Wz9oPqCiBo7JrV",
  "key33": "3PmjdkQHHg8KST3mYJyiWjRbJXQz3CrcyqwQhWpPG1E8xix4EaXmaKJE8Gwz8KmbwN1Z2hoLR62xERgozqNvChmb",
  "key34": "5esNVWLKKmHcGHPkTBP2HrA3eo6WmpVXhcW9pGGyX4tVxPdTUmnm8Qp7wCAsuWPMH3d23mUnqequT5bSLbawo7eb",
  "key35": "5MC5qY5RyBCuN6MbqiHi2JGCfb9xqsrhYghb7Qy2T174Yq4RVBnAbxL19RCpxKeo32zC5ih447kFZaiZvzgHgzC4",
  "key36": "5Wddmn64dmLoT8AiXhTSfG183i2mgkq37AQFwq684TegdpFY78Kcc9uEA9WS7imAgkxJam5k3buu8LYTW5nznQrF",
  "key37": "2JYd5df79qDZRh1sDTcCJUjxQz8aCBmfdE6nDjBSeNhosGdrR7yDhzgzzmWqLw55vKo5guKqjJaYQt1drog9i745",
  "key38": "UYeRWPUUymposH3aVpNFGAb5k7ybUHznTVFNgKuzDhtnesQyT9gFJQAKpgaLXQi7GKv1ZpHFmqZLF7cTpGxYfPk",
  "key39": "5c42LFZy1ocdMt4FoTM7Q5dPbP3vvUNhnY9k1ncerB82Dxr9fK4gCUuJvHVNyDnZUqaztteoRhrXQSboF7uyaK2K",
  "key40": "mEF2h4fkvU4K9kvekHNSJQXD5sQ255PPfVQFnP5vLJfajwWg8bqoh7xVJm1LVTSyGDPYvTSdxJN845jRxigbKiN",
  "key41": "4WNex9dbijoY5sB2UShmVYNKS3PqZYgbvLmXnAcU6cNyJDf4GtyzJ9pFk5kt4TJNzdH2b8jXhidBFy6VshGG2uXi",
  "key42": "5QDGiVTcbvoWFNryxgquaTP9QM75pZ9XK9ASx1PQ8SvEz3WnAKWD81hDtM4z7uPRLcxuVpjYPeCpYDTWwPd6yKsq"
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
