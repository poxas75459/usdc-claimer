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
    "5cFtdFfJLKXmS6b9PEPRsdbfpT2NtpZqE1NS1kxxgEPbszXcGBTHXiyWCkxCeaqHhCpk6y4XPUdfPC8ryPXHg2UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwaqu7KD8Hw7UDGf2HVojqomoq7Ymx5Xa6RsLtvSKBnwmpaQw6rVU2a94H6sAg9ifq5sqEScDWCLawKVVVANt7e",
  "key1": "4yrorCtD6HkzijrHqhzdoYW1iD3s3MGTouo8iZKLnETtkfSs69aWjGFkqQ3SarFbhK9v9iJFq9cN6DvHdLmqyKa3",
  "key2": "2EyXJTVTZdZj8b7sVFtTWGTcH68ppe8qwzmvgZS6XKcm3RZABnzVSL8uuisUd41m5ymiVbzSne9AGWeAxxxtuDCp",
  "key3": "5gWRSKesF9aCznqDTkfGJdeKrQ95QsCmj9oSDZ4cDfXgXE68KdGsMFBsmdLFqBHqbGsspnZY57dQnLYw7r7qyobc",
  "key4": "HEwyoq1i3oMLWvvWjM8tHRQgDgmZ8mqm6pJxGPnHCL3bUc9CMMR2aKdW4UsKwwDQVf2wU5pX4keGP13eqs196x2",
  "key5": "47Df5nUxdBredyifAuK6b7uehJ5WPx9w5952wWYfHviANTzz12rwRWuDWVPpUkJndDRh7NcJMDNXVYFFD7sS2VNa",
  "key6": "3LdKq1r8nZd2rnFhuy91R8iUbPmoqgDwFnJgfkujc568SvJjqcVNrdURSnSQw1XeK98JchEo1nNNHeNu3gZW87Bu",
  "key7": "5AWXYCETD8T2uCW3YU5W5UVfvd7RyPXubkkxKVexKgiGoYiYvjB98bzhfyngarF2ka1pyo2aLqHJ8Ja8THd431Zv",
  "key8": "5cGpYdGmcJrce4sWvkrzLPURQfpzxqjcQrAxnYtbQijLM7nbxeRaTcwnwNWLaPmQtPwRbDoKqVMA2J9sYUkT6N97",
  "key9": "5cDFy8V7sVWuhf5Yu4kfUhjG11hBnBCSUi6KjH5SaVjvgK7mXb2VFGADjLzdJWuuEQmP3pejs5o8jRt9wDqHbv1u",
  "key10": "2yADuWvCe77DhuwTBBWywjfDzeU1HtjEYAq5oLbWFAqXT1vpgpru6ELBJoZGxJUXA1d9TCBLjyCfnb9nuwL9yeHs",
  "key11": "2JNE1f6g1iHFT9P1qRZzCWprLnZswhv8PkggKaPBat8qsbao49tBgjyuyTtxzG36cauAt5WgqWmP5FYSzSExpQaB",
  "key12": "4QcHRufo2fNWjGMYW5GYuPf4dS7Zy3WQuZZ47DVEovGJiS1Zk957m4vJwZCrR8gpSfix95nvyMfnYPtx9cUM9muP",
  "key13": "4adzhw3ykpBn6WFojVV3KLsXnGWbPAE2jQYYamiM5cKesGurWS7drrsGE2WALbKmr8WQn7bTzq4iYxGqi2WPvS1w",
  "key14": "5NbgF2Y2EasvWrDnMgPK5adRa6SKeoi4EHQLEk6Nx4HKJmQARkDuMV4nXsew4AfoDKsxmWHPeRPLfr4BQNXaFe5M",
  "key15": "4Hsux7eh5qDLyknYvCugPqRhZxAkT5HHCuibz8G8j7A1YsNZgPYzrnDvL4JApGEaha8pE1C2z92Kxx6FuQ6by948",
  "key16": "3VDjB5YU3Gdt2RTQ1Zhg3vzZJDhT5ezugrVCPbREhTKM3Hs7Mp7gVyBW7Q87KMQ2twWJS6qxSngpXwcwrk2fsQ7W",
  "key17": "3xkkiL21U5HsP9gRwUJofJANE9V4SN62hZW5Krcopqqjgk3arsLzEmtgdXTLouevJHzjriTz6ZxuSnuAhoN1t5dq",
  "key18": "54GSUmB1bxs5JJQH4Nn7PEkSqoLPffUyNAwvb8bejgVBME3dnVVgMQzES82WsQUBofvvdf54Va4k5rvmCE9XwuXH",
  "key19": "5TKJ1X1aSEbM98NP5TcgwunuVF6oTf4LeBxQLhK2sruCt1WGQ7ca3LazS5YoLe6CXYNWhdsUy4tDJfBeXrR9JYz2",
  "key20": "5Luvr7FnTYmnKnxQ7eHgErTFbVeJF66azLmq9qhdcK4NuGoLiegJZ8QRH2Weqsw4xfYUFV3tTNrLZroGimWgSvUU",
  "key21": "Ni5GTJVA4JdHr8pMPNqHXH7vTN5mubJuDrFbdQX2qk5QHGfeKWJBTvea14t947AYMZUY6879tJyYxTTsGrniRgX",
  "key22": "3LHMeMNyVVQk1jrbyzPVmexhx7PcyJmmh5BTE8ofFXgFSwdf9SaQ7ML3zqxesFvhmxZAeDG2UUXGXvMvyPLQXch",
  "key23": "qffC2acKxdK3jzdPxfezZDx1fx2n8Q9W9pWL5afQWvNxKTtf7MeiLorMEU9ZcbSnmVgzrL13Y3REQno8mH9cnh9",
  "key24": "3EHjKRYr2kaNd6Au7J3BWzT6GNuc2EADy2sXyHx7zvNNMHiD5uHbAAcN5XbjqyC7P4VAnrfUrayHmGHS9PAFTW5J",
  "key25": "3Vm1nubQnxyUrczHKKsK9gjPQ3TbTc8LsFMLt7ofdmgRXvsBvPmFPPBVCYG5LtA5v5jMGMrMDa9ABCiny52SQfyk",
  "key26": "5aCgy27M4ovPPqN8d8ckFvE2ER6jJjSLXiT36TvbBdgotamJfzpoEUxUtYEZ42LKvFXaa2Wv7asb9aer7s15Wh3K",
  "key27": "2x9j7dvjxwGmQMMYTxVcaJzLwPm6JjcvKs1Wh421tvQE14rnp4jEGeGrizbdrnXvBCEb3SkHL4mbN3yS6gohfNN2",
  "key28": "3Gi6g22XhrsJxtY6zqxQkNy5ttfHVtfeEwRtBrPXUWetRhStsZFaV1z8XBy8UCUVvPbJt86RcsoS5EcJ6H6sZwtv",
  "key29": "AeAjypESwKTRacqrm2EHo3HwTTTUvG1xRQTySgfsFpSikwP1qYi4LkA7Zt9Ug9dzWsJp2EYaJoU7BEjVta8vpZC",
  "key30": "5dFubbVzsZCZcq1gA9bwrZPpQmH6F4uRV64ZP3oE7qkD6n1fkuQUiZXY1767mVGad5qTR5uoJ3EoTuzQracMkU24",
  "key31": "2mBr3YfVnk9bz33qS3pBB5gRYcW4ATwN8hEXV7B1ax1GunQUAbeXZufq5J9knrKmKyaAYjmSDjCYmG9VYWgoBQZ3",
  "key32": "3sozyrCuCnJrAAz2rKtoYQkAfgQkCHuHKYRmUSQ4wa4iacrtPwcM88n9Ld9kSmg95x5qKGiC72WpZYJmGPVWaSca",
  "key33": "5FLohjCBM2JmHFVjdVrohWY4s3x5EhThinzj4PyFRGTfEk4kDp1MeTzViNxu4o1aH1rwmGvKfD37LCiFCdLWqQf4",
  "key34": "bJyeGKdqY34X226QtDZHSVaxCXGLbTTGuRumRURzzrskBuk4oZbRwnak2BCL6VPCbURf6SfvrzWvHwAJ7Ju16Nn",
  "key35": "2pGEiMRgbmMzx1mHup5Q2maTTL3BQevDJJzcnJMtGEeoQgRnb9KU4NP2RzsxGdSUmAK4bCVUwZcdyhkk2J4sN1u9",
  "key36": "42HNuWkJKyZh5E65S6FsEeuR6FNynYmrAzQdVjLjiLYEnv8y6kg9x23UqWHMc4VqPSLjCVeGyypG1TQ74aX6QnmW",
  "key37": "26TUaquCgGjHCotK78Ukbh75rPLgAidmZd7z9UCLqvUWxjDN7AanriCAQjeMTX3y4RtiiBEJrRToZaeMb86ERK8r",
  "key38": "2AnxbntFVv8B3qTvJ4ufrEUfoJkaCiPDYA3KRUg8uzYuVKRoJvTQghLVwNjwV4fk1LPZnHRdXxqyXVrbP8N5BWos",
  "key39": "4VxAhiogNczEdno8CAgNG1C3W2wrReCDEqrfzst9xiZumNDyB6uCniBZY3AkTG6JqNeffJy9s7BzDHixnzGL4rj2",
  "key40": "43xVVX6nWcLaLCh1jPcrbKr38oJEuTadXh8pQ92RKgqVZZd3gmmUvqthyygTuMdRGt7NmGsjg3RTCNBdaTWh9pBr",
  "key41": "5QqtEnmpYFypCAkkFf3NRKJghMdjLtQr3h4QQ7A99cHjMJqm4GdtZFXtEYbYBTJEEj24dwhpUddVTinZEoJ99MM6",
  "key42": "2sihEHje2qsC1sALpM4Tz2KY1xomNTRQwsMfP2Bepq4w9kAyT49bkL9nJaESSxucGwgt6CGQSqJNcFU6oK9VvNTC",
  "key43": "owdwbyEzkkvBhib2XDYmkZJkVMsewGxzjxy5YhicVGxHDiypYqMeP1G6ER1Bh2DyuHrT4N67dh6VcpNUVEX8pxm",
  "key44": "3BGqxn56BitNRftw7NUn3sBtGJGi4kMviJuyVX8SY4JZEwhjkDCXwR34TZedgvGoNcfEL7PAKabUDkuFW2oUBmHq",
  "key45": "3oVUAxhzsr9aDo7mAhSuRJ4SxEngipqQ9kTB6KsYULCW3JwmaAH6uYuhHTcPBGNd958fRZ4sCLvZdmitmG5CBACR"
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
