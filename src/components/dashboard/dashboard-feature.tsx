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
    "pNh8Ccqy3aDRoz9ny2YraCfxmbkvniu4sdnB6jkCfEha6eKZbZhFBMW1qA13PhfWmeP7WgB9pbm7kxkn1kY8fPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8iFTZPGV9qWTyKnsgXgBEXYn6FDv6P95rqtZCwABgmELsFs3XNcdxuG84qZQ75tepirZV48iLWrJ8cdEKoh5S6",
  "key1": "RZP7XCePgMbJBoD7vecgKHoZbUPfQuE5UVwi5H6hDeFWgYbLsGpYK415T7sBy46bmchHHSbyNcq7P9PYxpm7PQd",
  "key2": "2Y31buwD5F3Aj5EYMgwKdv5WzBYMHQmdQVNrkyeogfXaLs2ZarH9rr2YS4PxDvqA3gjFEPH95wkpLMG5oNhND7FG",
  "key3": "5xCC1ftboLpTiG4QYz2z1vDr8T7SuRrBnrQ1Pgje1NggTwakqALKEyXmE7VLBgDSWMb17giW2crBoquTHNLjVwx7",
  "key4": "4LkmkW2r5BqogkmdcebeSMGeEbNE18TuBfTeD7B6AmVYkY6ixkCJSSMYRd2Pt57bzTTEiJjaN7WcP2ULnusKXo9Z",
  "key5": "2anyi8bsCsNTmxKHqHEEzKwjoqnyBSu2Vi82tncQWBKoL15dKo97rs4Ah9AbyraPPfwtMG2GSDqwRejbkGffB9SQ",
  "key6": "5R9V7z2Yj3zsoMAjniaSrYxMpGsaYfqgNKyF5msstQbRqpqc9PKt21aDXACek1MR7yBHHwH7uVCp1i8VGrbhcCFT",
  "key7": "13YGsjndM98gHhSfrz6GCuhEFnpGHB375GrxYxxadLRZGrkHZ2A9H5LQsxfkGVinhP6FTNcuKQdSCqnUqGEBq6b",
  "key8": "4Cje775QkZA7uCDtK6o8CyED65LjUzYtj1KwZRq3PCQ8fjjan788nAtVAVVtUJAZAPH729twgA7AdqJj8ZZjRJG7",
  "key9": "5eFV1r6VRLcveGyiQRxmUNFHHmgBUuPUCfCVQGp6bt1Aj3ZoCSugh59c6Qqeop7QNtedGsKZog2m5PVoQywPWSQ3",
  "key10": "38FJPSPF13r4xQFZeBkpnGqxLQbVbTbgxfZBCZP1SiZf5JDHkitAC9jYqzZxuyxdN59xCTGi81Lcma5AvaVK1vZc",
  "key11": "4gFawT8rvkboHconBhcxSQZQ8bj32xK6k6Pcoou5WV4L3vh369JAyNge3RsSb5gSTUdZryWJoVizxuLCVkkpTL9D",
  "key12": "2FTfj8wdUhVV4ocx5JjYtqkbGs7VcaWP9htGZ8XLssF5obtSV6b2TeRDSsJtXuduzQ6DSYwJBgUDXZaGrVBMErGF",
  "key13": "23SwiVEGHCUMHdepx88SkKMPUSz65iA1D7yFF4rTBLdss3RCWd14Cwyp4uyyDdsZ7RsU2monNWuzpHJkUVZxqKQF",
  "key14": "DzP3Hf7nAkbF3ofACLLu1pSLQntdqCMTY4XaV7Pxe4X1mBAVJ5yvJeWFDRZwUJExSxH3n3buiUb3tfnbRKMJc6c",
  "key15": "3T9DNx4Ykmq7xgWqDKe6CEgNba4kB7XeyY1XUZbHDm47ZbdXjgd7GRxN2bV8qRQm73PjfLMrgXQprVXaxAdSDco3",
  "key16": "23qtjHmDACkK4iDMaJM9s4kVeJoYwdomWuy3ZU3GZRBWS14aSVmpW1zL16cmQvkofmkKDgMp1DCiLFw2RA482vYr",
  "key17": "4uPTuAccRop5qFYDf2Mqg4VHCKTGcAqokcbYogiautqsMh1qybcjJQVTM1ArKqRrSDTo7DmjMn3xvij9war55CKE",
  "key18": "2k2yZCmkT8YtD7EMCSK1sEQNvsv9uSDGG8xg3UfMupXFqs7cnkAG1YVvMEiakaqPqjSVughEUE2Y3JggHd5wbZdB",
  "key19": "43gFhXHT9bz3AM2acFujLcTNVUgMu1AgxVrhUxdUTGaDU8ZiKhAwvdgQVEM5yw5biKDRt3E2dHaGN3gV4UCs7JA4",
  "key20": "2S3E36wNpTZ5h8L1oyrT2vnjFWmMDiYww1dVoaMKNarFH1d9f39Y4gLeTAE9FJnfrYix2aY9TgAJnUJf2VCjX4JC",
  "key21": "26sxVZSk9UYrLDQ2gctKwvjvEVMEeUDPwTQrDsKNq7KfxWmtgmfAWPnC3qchyLT4xa4RnhJk6QyfR8TUeKdUfvj1",
  "key22": "37FRXsaCww7X6YU5wSmKMMax37sP2bNF7zTUr3vHDZDDW6smTepF17J6HcJknvMrQojS5xaWaEq3pyx41UW9mqi2",
  "key23": "jAqV2dZ8KT2qrVwC9z5sG2ADhu8Rink67LczLgxJe51mxtwWtcrmiPh2HT4xfLqr2H1zmqpokFcD9tDi8TjL2tS",
  "key24": "4Winh2XvbGcMGzDmohSvL4WNz7qaRZhuiJaRMNjkN8XYrahsLzf1zDxRkL692Ky7GDdXnr5r5P4ZfGVP9bBqNN17",
  "key25": "2WJdyyvZCzYAGvBnQcMaXcDPHfGNo2RikWzNLnn2GLPzVbKFbHwCbAEMffSAg1deYbEUWb1WH68ZArin5Grq2Uxq",
  "key26": "57YdZCy3gfMN779NjLLv66UbiJRSCz88WkrioKG6QqVr9pQXmHLHRcjCixbivgr7A4Zx5R5iACbvjkXpQ5cmhACv",
  "key27": "QJHeub5j8XGmrSRrRGPbwmvpa3K1mkBn3vkU5T4YKE4CKC6UWzJE5r8aFoWERARvFDBHE43K4o9fQq3Dtm7hhau",
  "key28": "3yXSKQaj83Mz8SGVNL5ciikesTttjWodTjjYZBZt28ALUrUaAty93MP1m2psSSPZFFNMxzMn6voqBscwAK4KtJG9",
  "key29": "uot9S3LgmEazKK8mP7HZ6pxv26GLrHkRxq9yAGFeCULyye9E7PXdbCRnxZRFJ5p37KApaWgd7ntE488fHDG7o49",
  "key30": "4TT8x4eXDa9THtB6diHJcr96wxmhY7Ybxo1d4iQWdwyCGTvcaykqs8pnZWbW8CBqHiCUL22JyLxQUg2zK4vRcWN9",
  "key31": "5msURjPJQpXsiSjFstnqEF7jVM9DnK35ZnvHi1cBgpT7CiHn68U8w4LQjc8FVEeFBmYs3DCW4UaSsFWsdq5qkwQx",
  "key32": "5JC5hZ3NZ3FofhLrKpakYCQHnuspKUFbjoEGt83CDhndcVRev1nb6Hd2LosrUTBBgS4y9xcA2Bu3W8dRjGs2h5TF",
  "key33": "61kqmE3PKDNWsb7nvG9BP31HSKBLp4Fcef64t3DK7RxbokTTK8jU6U9eDgURsPdnx4RJRWfwDfsC8JNCih1NzoBu",
  "key34": "51g4jdvvoB36gYFN1UUskpH55f7tKxmxjyaCzKeh9fdSPTzvwi95FJSv3H8ACxkjH15ZcSSacr2aiUoYtrctq2No",
  "key35": "2wZMdC7iW9CMSz5jedS5B3srj4TKne1LBpuA8fTujyekWCGtXYrffXVUqCcvZYVdSmD71eWJmB41Av9715frj2ps",
  "key36": "52rrDWxMDwE8fM1QWgPXkK6jdxMkaRGQ7PtKxtCDkqoPK2viz59MKod3bHSSwMEKcb9FKroDMWugCEMcDsyYkGTc",
  "key37": "2FNxX62cTbHtpG7FVLpYW14WBV5vUnxok62XSbXUGA9N3T4TN88SJLtTEuA5oupgLXbd2L6NsdzXFx9YGEvH5a1m",
  "key38": "287bC7mdUEzG4KJKtie3bHRMVCxpKToymmpjsCBAbikJtX8jQhexJwj63EZvF5dbxQr8qH21xvWx1i1XCtMbh3C9",
  "key39": "3y6zvV1XQVh5K88tjviKQiDDK8nP7nz17EZVnxrxbtzDKc4R2ZfKt92BvabQXNkMgiUqdmHjkkr2vqnquvttpefU",
  "key40": "4wr77VSjcPtEUN97NVUt6Yoev3nufP7t449LqQiLPijzk4C89ac8zh8cvzTCeBaZg1GveUQCLYrGApRP17N9Ke9W",
  "key41": "3PvKMk9nGx9G6zZzLYNA18GVux1xuee3oBejJZeAzeytQwRpeCEWFAHK1NDwcnPVSG2siVT2LsaHEDrQWyUJYqjF",
  "key42": "T66jbnWatnFpq4AfubPoTnoCtpX2DUefooNhaDraw6P5TF7b4pzr7Rjmf2mMv1iJeVEYGxQBm4SG1HxyPj9ik1F",
  "key43": "oXekHMCufy7fCsWkVtSqkJyzUUxkpLco47L3zK2hG54CpBj1FvK5yiKsraopw7QWyYeVwfmo4BXPqwWqtHJvipu",
  "key44": "3vjxcKMWhDXiQ7HSz3zXxHhSWdd3VEGkE1Wzbs8PTnbyc9Tf74b7Hm4FHBfKiEGNk1Uy8as6mYra2Evg7qBYrn1r",
  "key45": "51YubzZjr8X55aDbUs8HKcL9dp2HnDPu1DocHZidr9A8SuojZugjvbyTUtGetCUh27ezx8huyFv8KD2Be7r2zKa6"
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
