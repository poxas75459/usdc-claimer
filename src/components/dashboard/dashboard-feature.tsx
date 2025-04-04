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
    "aeDZK5XUr3ouQPRcUyksWAieNiSy4J1jYzDem4YwfYQpyPEqfakHxh3YRbocpNuf28BkmEm8pQT9CHgimz4Err8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWnoLwdsLoHnB9nhTLDKnQafZ2H24tYweBbCPUbfRxQT6QQtiNpTkmP7k92NYkTa3CuYNiKNQmwAAXu469XtbGa",
  "key1": "3FWAy1PmTD5fSUddxGmtkYzWJAEhLDRQnbydrJmJARZTdiPgtq5df5R1qfkKpbT3ekVfB9QZ3NSwoy51i8nYdFHD",
  "key2": "5Sqy4LvDNmUfwBwkgJ2acwT91sfSzKuAmwKoX1sdTCbmuJk7BnUycPB72TkWdcnVxeQUY52Wo5m5oqMvBEFj1eSL",
  "key3": "3TFqDs1UGAXyDBXUafZq1KB9wMBVRZqXi4GFaEzhYWTLwzf37fiBcDWUpavEdRHeTG3ScqvDsBvY8sJKdpfU4CaH",
  "key4": "2pb6gnfjSgAV8MnRUE4YXk75RYrKpTgkjPtXUdPnMKq5EGbF8X2xgVKR3qgPZJ5hxELapUcoUyjZ46bwad7wQYXW",
  "key5": "3sVQyKyawm24Dx3yJa5wocSjQNu5RyvH8hLShwj4xvDEQambio244azQr5remRF2cVPDTffaEZK9ek4c7iYoUePf",
  "key6": "4djqjJjNv3RwL9o47i2EhLoeV3ALjKRXncKSwSA9UffLpT9ptsWPKKGEk4oPbnADu8hfoJnZRWaCLuYG5UUyxwpo",
  "key7": "BtCmjSCnEVTJjn1xLFGkZpLnuHthcniygaZDK6TV2UYMf7qVM5Bcd6Dg2YspwC2sU6dFB6Sphw8m5WnT5hCjn7C",
  "key8": "4deBKmFkpwPNPDEH618PzcR6wPq9bXiDk2WHFkZrhczZYyLEbGkCXNten5fvZhryw28VcyD8tBB45FVpPVJgYCaS",
  "key9": "4Vc5xdbLTN6XSy1CNAzkowdjQP1tP4YzdfWRzzVHK2iPNqBusikzVSwUoazQxDyDsnPMHvewLAgLWZeCw24JywUd",
  "key10": "PHvWvu6dnYXYyXDcrBoAH8h7yMkCmNFtCRiGog61cowLvEGgaXi662GuuuZ3YaqT8y4DGag2UdhTELNs24XvRMZ",
  "key11": "5HgxSrNZRdyZaY9jumHh4iq3516zxnNjSHdn6ccbHUxcHiqcfqsKY7XZhtwzFrUJCXspSeuXf6Fiyn29vQSyfx9R",
  "key12": "jkRcfdCKNmw5UPiZtXhUtT8D3aBevyZdwHEsmAGo9ZWngmvvSyuCAQPBQ8iFT4D7uWDATQNA53if5qvnyHAKDJK",
  "key13": "2V7Q5kPS84hW2tdy84QU52fge7jCYbVkyfRmUPwz2PLRTkro71XFt8pdDF8qpKWFfPBNJNut9rP1ASa5bXwiYCmu",
  "key14": "5Waa3RUC4bc79RK8n9uFFJvRCcMganX31nmknA7SWbawvre5DzbVXcWxb76n9Ln15Pj5W3BSL3MLQ2dunVbeH8vn",
  "key15": "5wHmaGgVrKcU1XphZapQPjkQJ7zsWwLDrLF1RTSwxpZGnHi4tnGjHaVr5JMVMBanxawJMbTuyqNpgNaFKDqQQCGt",
  "key16": "3aQ4Qfb9sgdzHtpNsXFZZRaTF9WRqsp6bPJDABKwu1rJ3dmFFhNwNF2vWP3uyyKFqvLuKr1WiSWwjAbPKfAfJQHp",
  "key17": "2R3zCY6NR8FBHgCSx371SPvCfu17cio43CcyoZNkMZQ4jQt3V1od9DMy3DPv8bMDy6h1jkbYLrEafhVAYqw7EPtS",
  "key18": "5KoV2X3uekDA19kYRYRXqcBMPBZS43LH2bKE4FUvFBYD2zeA1gH729CWHjYBvgSAJnyB2KmtJqzQ8vsspjbCbeeM",
  "key19": "5XpsjURsbi2fRygocM5sacmoF6meX7DEHbq8p2AeTHp6Ac9GHczJm3Hvi6iHcw24kYYAw5TrA6uxmKqHoPGMsVKB",
  "key20": "2s8V1JwsqdooAPNDqZnZ5zC5NuGMjFXZ56bV7u56c3DrdhvcvK1aTcyhKdYdqsD4wDibKk9GtAwg7GtVj1biTsHe",
  "key21": "ZwhFL3G7r4SQy3EMxgsa35qq6h89DUvibK2Exn3FhcanRiEz5ZWvh9WfLoUC3NZChLL76YRLWDmHjXPyGCzpwn6",
  "key22": "4cXCmcVyAoaSXSuDJBQQZiERydPZik1obCah35k6G2yzSHKxX37UU26GwrG161k5jArmKtqsoTPB5UG6RerEuj4W",
  "key23": "2xdMbmA9HNUFqYAd5e67j1ffRgQUdcqzLUMkzsX7hqEtH24ByJX4QtyqyvURZoxAAiqkfKUXCMR7pC1MXxtkTPMY",
  "key24": "5Cfynmf9qht9rPyUsbcQCSEos3qQpSox7BtqsY9Q9KRTjGdrcuehRVVaT8ZA9QsVaGQ6GperDupQ5kfQFB9DQqC3",
  "key25": "41A8VhUVeMn5UNBNWTrPBcAGu1tWhSYTFxo6rdHfcviDCVZBKppyycUVWUH2dafcJ8pkqcHZJmxPEi7t4CmxNWpk",
  "key26": "4tM5ZrtBteAh7mLMq6VCyZdVwGdwzoSFWTVG62C7veu7VpN7FiHVbWGZw2eCgsfo2Y8drbKp3x7YgwiW1Nhoy4Qf",
  "key27": "2PQUcbj2FyuKPyfXy6LetSWHXWXms8xFi3WCbn42CduSg8KBckUDaXoF7764A3iDFcP7x2i3xq9hN2ZcSm6i7ikz",
  "key28": "2RibwXWXfhuD39phNZoGSeiN9K5oBQLSxFRTXCn8q1kfRSXVrKxgAYH2BgH1ZfrfhDQThEFJoW45AHfYfWrTC6Rp",
  "key29": "5dYHmX2gTYxb7rxiSsoftQCNpxGfUzKeGxNoSNveWsNcYfM7GAYaZDRHXbxunFURKk4wjYFJ1E33fbYky7vTX8Hv",
  "key30": "3nFV9P64NqRHv9rjY3p2fCgE5dt7i4LGcZxg3MHAuunVyUZxB1c4tgG4R9JumruQr1KoQgC9nkLeXMf367bDgAzq",
  "key31": "4kt6h94dRGPK7Vch64WVLkWmtH4ZRwaRnw4tkXLopM9RVUZBKjkWoPRjFGULvWoLxSWLGcAQrQCNErGa44CT2pap",
  "key32": "ZcV2UpbZXV1Hfrww1RkZCnigUYF16k8Yg5TwZtkCFVHuzybPPupBT869zCFPtLfKXzTnWePWhnSmBiiWYDSLmB2",
  "key33": "2w1zkE6knkdsMjfA1XS52xJMjbofLNXjutweoyFZq48U3yyhrAR98HQXCf7AAKeFbrsB8c72PeZ9eogqVSLvEUGt",
  "key34": "3ohvHmq9RMVsfK8FzRFq36JfuYY4XBYACBwCUJfH1NSv2D5pehVTbz8p9YZPqpBXqcnShvH6tiYD5UHHgjQ8tz78",
  "key35": "vdaKXzr2geQ8BbnRJehjmcWDvuH9MSJR6BnXN7FjzYmeLLUV4cDchXFgHVf5wBwPBmt2atZeJs5hLsJzkGkBz6U",
  "key36": "2aUAT99d9vg1qhH3S1oTQmjaomRBD6L4cQM76TYMeiqnky8MyfW28ACdSZD57nXGe3vW6x3TnWSHESCNyFjN125i",
  "key37": "4qVtScTdzhSSGh6YPsekpWDUou1CDbfQV3og3vp4FtjgdvP1Mxi5G5HBf3qBwWMAzjVLbhubzTftBWvmpVCMLrT3",
  "key38": "5Nnuz12S9AzeF552ZStrKA7v8mgk6YnhPL8W2bTGs6QQ9QU22oUpE5UDFHGfFZaXX8HL4DjiPmaQbFukQ4CuX2up",
  "key39": "2pdBWR9LU5XUtWjHbsGnKGHdPxjmhT1dapHCDT6YRCabgbHRPYWUZpR2uc9NKy7JnxhsxemQ3w9Kqgc7DZgKrede",
  "key40": "4ckqiUj3rqv8dmbibxgqJZnJeEM7NdgAPs86xvR43hpWuBqWLdj15Z63WoJHTUEwVdLbvMkLzrKfCn7Z5GMbrzG7",
  "key41": "3nXxnWWQyZAr2psjERNCLkSUhzWNNBRQFu6bzgksQzVDWHDjczB72smFVVgdTAhCJzkJEnf1EBoy5t5i6q71jEV3",
  "key42": "23jkBJEPF4RNsE6GWw66dmgQ1cRWDyDB355Fmd6a1VaW2fqXpW6YDzr14qkKj2qUgwJeykHs92XyShDAoQJxFxtC",
  "key43": "44N5dWXdb2RkwCwhtyq8UcyocuBSB5r6ieqTdQruTTDBfNGxgDiuuA9qSqLWQozDGEaWMTtcW49m35j766LEoQVp",
  "key44": "5tf61FHVVwdXxq1jURVPWiNrX1srA9JVXzYVTChUssb5jU95gaMeD5MaGgRwLr9nuMdJU8kjxDruL5hxVeGidV5L",
  "key45": "2HLTvR5iZEja2Z4gUZoBUUkKG5k9J3CgS8NXfd9wfpnhCZR4ykXcJsjTzmZhtrRX3bRW7KsrH1XhM5CyLTP1NmUJ",
  "key46": "25EZ7Lzu3niB1fmwfGDbCSwyLz9uQLbdEEneW3gTLnqEtfQPBBoeUnfpF5orLSwwAP5AztiU74MNgDBXDneRNoeK"
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
