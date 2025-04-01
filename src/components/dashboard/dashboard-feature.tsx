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
    "3U89Tgqa149REBW7tdwY7jaRXJkMRDNgaUSV3BrgTSv1WRGXZed53AZXA6FU7FLBmqNe5CPUakkhGfpoDwYV1c18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCcwphZBSJkJ7JgdYvfCCcVwkf32Mr1zBpjUDnpY3EXuSsgt1GsniMis1ra8ARCmhBZ6TS8VhvXopt3iKuSZowX",
  "key1": "Hwde8WB66nSwNyJdRQogmrR3dwHVj6YT72TPptXmpUKQSv6ZyCFM2ZF67fdzC9QjAJrSt8e7woeLgjbH7pFpiRk",
  "key2": "4uu2b7ejRPAc1r3PG11AwpYm6wQBDE8g2z6KfmfgtgvvhwCgbgcGZMR5RY5zVay5kzvje8HySvwgdRNBLjtgsaev",
  "key3": "341GJtYZqaPReXXPmjhNfg8FuU8yqcLkp2UzhZ7wr1ubP4jQ9TJm1yGdX8LN3keCGQpNgUR7gmm88oBeG7bFtHxf",
  "key4": "2C4bEaNi5roBKmtYNG94GFSZKGHCtQgzNavhM6wFhFMZ4Mc6vp9SERfQyWhM1foBkckv7Zgsb91NCF1GYd6Zemqa",
  "key5": "5tGRKNeu9Mzim7mS3GW2bfVnUNpg1DzNzG362yVogK931vFKV8uGGvDRRLQKQy4EsVLLukspBSwK8y52ibuN3D1K",
  "key6": "4oKZk37R4gtLoXmoiyHvaRvKHeLyeUd8gzfB8Zte7UR3XKwqjxSK6x1ob1y4QXiVsSHfCvSzffso2EckDEAcftuW",
  "key7": "5sq7uNmkaf64dCrgDnrrPKmnyEeR8Zncumfvpe3WSewomjbtCqVsFAKnEvCdib7WZtW8bvHv5ix93seyvRN84qHy",
  "key8": "4PFwphT5y5YwzwQVigGpu6brU97aA9vqCaKB9VewH2pNoYx7SnQKvMUnwqHy36jTQz8x1YzANUFrmixqtddYJgHw",
  "key9": "26euDRrrMQGZ9bQRQkgypiEKvK75YBRkC9qsjDWLhD9HbgW6FnQa1Z7EpXhpb1QhYqdN6uAgdxqzPmDL1WmCGfam",
  "key10": "46aTtJD3kKgcqAqGUKsCkJ8RvwhsjcHY47m3N2FiGxwL2sxBrHaBqngRxv4P1uxuvYFhrcpQddmUefjDw2vuYMYK",
  "key11": "2f6t2tXesqVVHEEQvhTbz5pWuhr6swxYR6c4kMrh8ZNAwszvWEL9cMtcETqudG3HmuLmuXFBdCydUwj8E1cewTZT",
  "key12": "31v9n13keSkGHJg6uuyGCZKHw3AWGiXhcnejV1SL2skJUTWrs7uNKVAQ2st3RsicYCu6TnAgeoVyXJgkHKQrwzuM",
  "key13": "QhbkAzN1a4yvoXJ8oQttSeMw1jbCbuMMcdSb28ACtC6h7HBp6rv5KerSDw3McavUZMcvhVFQB8JMcLtmwdNLPbi",
  "key14": "4NvPvMCZF26fnM1Ftd3yazkPybHajFcBFawGHJPhrsMgubCeG6BtnU8wE5sruUF85pBRK73sYEVRZuoawjAqYReT",
  "key15": "3BxoJjERT7v887SyotHpKebadGW8FWdsxgameZYyc312ikLvi9b9hBQ59B8744ccHGyehHai6i4xrLEjGhzn8i6b",
  "key16": "47Qr92SxtBWdjZ6HRmgDosZvtydTrBDDnf5RsH5HLatFV4jVr3HZiUmb5SgGUwmiYKG7vPQMKj2NArrWiKdPxC2p",
  "key17": "3K6r69ZDs318QmuBHq1GoeDBbCbpXqFJRkAL91NxSbD8XmwKgZxGS54rUF4X7Dyh83pxhFhj4GMbEEJdPvDpuBHH",
  "key18": "4MCq3D5WGYEmLWU3Dtfb39sttfhrJtPQVF8cnjiy7DReFJ7KEDonCJhvuys9NK5qjFCY8nmYa8pjEJR2vG9qDv19",
  "key19": "3FUBi4XwJq1XPT3kFGUku7Mi45viDqWKsVaJtFzj9vwrvURXJ7UthjB2m7G2UCP6Dsk2C46KaGAfJ93KkYtb5szH",
  "key20": "36DsA12kD62scyHBZVJ2a4to6a4djEbvtoBhp2BfLm58K8SUHquMvdXpob3fXErXbzKsweumMhp37Y1haAMkQPk9",
  "key21": "AGZjVDgjMxFXPyvuWo6jL29EQCHZR587nYiP6pG9CFbGirfRY3oajCfLs8WwHaBWDpbHuEV28rmx68gahaYZ7FB",
  "key22": "2sCnFq63AgrCsAWDAtBZwtn12oVfYhPge61pyVrWhqesKqvXrG6Ptifd1h7Tb7hrmrWVnkceQqktYR3UxhsWnjWZ",
  "key23": "vDBur2ZZ1b5h1SFXKGqzGfvwgA6j8F7gxCaAnjLUFBSdhJFMSRHK2CbWrbyG4pdwrr6g93XVanXGFxSorxmhree",
  "key24": "2wGT7XWiSTEQNk5iM2xqyarFzfzG7qTU6LfxrSR8HyESQUPHv8SQqLsuw8xdUJRR1TThzphM1QfGDXizfHBsW3iG",
  "key25": "4o9atLMhnnqcJ5qHegHtFTQ15zaPJYLXvKRUzQUAcXyqv46w6vGUr5GjcifLvoYEBezR6qiJsjk1cJAGCiFByZLk",
  "key26": "4jsFoLpse9zRSNCY3j2RgbqSMco6n4tqCbgaufih8L8uUX5cerxvuV1u3mT2Y5QUTgdZC6zPPb1VRx7em1xHZuWd",
  "key27": "2ssPN4ZsRj35D7Z8ct7KYhYijkVHvhBfDgY4Qda1VsZmTEtxrSDzU2E3276jW4fWcb5mAcvSFqeTsHFY56hrC4UB",
  "key28": "2sCfGp8vdJhwBV8WWSf54mmqBqoytiWq3H12uR8LEg2Nz8adEkNEGJSTpuJPqkgzmx1JYwhF4WNqTNGgCi1Ztse5",
  "key29": "43DyNwFyzySLveYLHvqey6AbmbmLqPtoj5Kf1QZ9XiVWNSGdbNDsjumxFtg6gMWBsF4rh28t6ay9gY6eyThS3dCH",
  "key30": "4VP8BxpAwFKmWpX42SaHoWwnFMCxShdvVs3irJXW2VASXF8jzq9VTrHoT75YRKi6uhXVRVSMFN9eKKHfLmMyc6rL",
  "key31": "3WdBvy3hxW8kfEKogurz2tEtVaKRo57xxcYE1uMHcwC1TbhGEspb2NwA6MyYF39XQbSZmjz5oJepPNSQfd9N12Lw",
  "key32": "4HZB71K5BK6yDg8ZrC7VAVkCZmFQPVgjFbSsK9hYfH4bqMr7ZdUHezfYk8miJh773dGJ3pGHtRCpjF2VbzfRhSFR",
  "key33": "BEHHo8qrmaVuv6xDeKxRGtTzMf3dKBGDTYiWo62aDMFm2rb2niPQuCkr9sVsYU1aaBdgMuE9jKViuKM3kWrFB6X",
  "key34": "2FVk3WVpE44AdWzDDit47LqDHEvEYyKk67Xo2V7te2MqP1ZzjGE69AihbmjYKsdnUvsnSf9Q6JhjCgXAQcjvzJCJ",
  "key35": "44PrKfaT2tSZpBgqpX1zdtVgwur9VsBvntioLJCVRV671C8i3SkpwrymxkK8H3Wc1jCPGU5f7rZ8c3i6r1ZBGDnN",
  "key36": "5pUcZHLbZCfWe5TX5frnMvZj942nLEtJq8bGRDFeoApFKYCT1Ch1AYXcmXe7PqXMXj5z7ubc621MgapbPNbE1xH6",
  "key37": "2kyTb6tbVh5tDwNavrVEwygRmVn7ySsvyUVmuA47LZk1xXze6NvLNQu7CXZHJK46SKcw2WsmyBaAbKvFD4rYeytc",
  "key38": "bfkZtQ4thGdHeXkZieKfnkv3aEJGYJVGiikGxGhtkRhEnHuFSJv7z5RiD8F78aikEun8PcUpNcV7JxKf9Qt6zUg"
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
