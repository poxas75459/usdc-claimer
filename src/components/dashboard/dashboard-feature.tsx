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
    "5inBr4tixKKDo6YKuSE6e1ZSs5DmVa1oMqAbG9s6DAqVBF2Hy2ELpsCfeh54z6SQZD93c5F9L5wD7MXKyXGtygCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijryALhnspqCckMCH4WM5uMjfMC93trNDtkTeJFjXwzKvBW8JE7jwuK6BCFXbn1TQg6QpGAZA9aswUxLkNT8Ypu",
  "key1": "ptCSRFricKnWFXjmQ74sr6F1zqwr3vnBvHMY6d5PEHZ7VwjwXUWU8HrPbt3Sq5eu19urcW9kWJe3e7E6yAEPML1",
  "key2": "2MrSA2gA3uQprPE7RkdS1DcprR3QCmb68UbC1niukPPTHopC1LJN9E1iRgpQs3xdCTLJwY9JoC1zB32Djfe9Ds2Y",
  "key3": "oNRcVP1scqQ6Ch3gX787s3Wm1SqV3ErkvpUwfkPzsxvs6DXALrVZpE8rHubHjNAqkn7qgeo519jR7yf2S3iqfkM",
  "key4": "5rubL8U9DdFS1KSDHsQzphMJjAvd8m8GZcmW4HVWNQTaf1wqag7NGNChHCDnhRqBiZShcE2sKFbQfT83TsFCLs6u",
  "key5": "2oCLzTGRyquEVSJvxX3WWkqppGmWdqFbPLNxLystM4mFqUw3PLeDLRkQgvU2kgbDBo7J3934Koj2W5MdQSMNwG4z",
  "key6": "5wFQ1WFxd5jLaJsKS4rwNuD3kqUUNupUPd81GcoE4G7SufbrtDDMs1JxS7yMSHziEs9ENDaX3GdJVB5UAcJBRckS",
  "key7": "5su3e31bMaonDXihd4iuK5cFzWf8zajZ96f2coGv4ULvDLoBvMVKcSaMbfueFnCA8yXJ3duzErkfqwfyipbp9t4H",
  "key8": "2dhFKqmacSp3s1fpio2EMhRnqvwvUhfVwGqr1CURDNba7GD8UiyaDcGF44BwD5bQrK8rRDTCQ9Eeuww4wvFbLLMy",
  "key9": "466xSDF6aMJMSWYfHR7heT31UnskW52dTQFMrpgMahZZdBZKZn2rsbZhQFcfQf4z6tgu8R7Re8aPL71cm4dQHcLH",
  "key10": "3MHpkuqxjHGh2KfGksQPi3kvx6QHeukjjzeoM5DsWVjjPSw39YMmoNAAjojre5xC6a7VK89F1TEABMqDJvfEkfhF",
  "key11": "3TwwgBHmuZ7969Rq1Xna6WQAyMjNy6CA1SUUXMGV5DeVsrkkVxWocTpA9jvMPMCkgKqFXh1mngMMn2MCn2PH1YyL",
  "key12": "2trLGKxZKamYoVQb7HFwztT6dBC53UXqpgVv1HLcrAoqgYToD53NXAzzCd153Xnha88K98A9qknzqWF9XgdvrGm7",
  "key13": "qTLghM6GY2w7qEF3FjH2bR8DXQEnQMo4Cw85GBujaqvjZMARQGKobpgZbGqFmYaLQbEoohnyqAPmPM4TYpeJcvd",
  "key14": "43rSMA2t9ARMGVpDSGhitJS2DnfuroE2nMJ39afGyNyxFMDFMQt4XsoREx5W3LiaXkgFE2eZs5qznL7HjBFfbjGq",
  "key15": "4HsM7J9cYMJiBASwNR41Z7srJE5wUhY3yaAWeTznyxZ2QK8B2T7kqWpJq1wqopujxRt9FUNLn5jAB1LhCQYBMXc8",
  "key16": "4gi3yGW5S13om8CT1ruyAjJbaVMxhfJLHkrFHCUByDdBECopEYTwL7GwtJq4fgkAYvJhBgTQ7MoPmAVoczEZYVPR",
  "key17": "4Xqkt5KUwsN1rJkqRtbCxsmDsjmDYr6LoZMsE57LHGpWVVSDMmvspJPqFzwBg6d4nbHuqdAh7CM4t4RWN96Svzei",
  "key18": "qTyRfYQ4cKbVLjfhj14o3aztNcTMEyqnz4zPem5i3Nosht6FyoRohih7XkYMaB94UXvMQvWaH5gTcwwDstwH9dE",
  "key19": "2oiV18HE3Z5kv8m93DAHjdsRWVxykVGGZYGk93sevqSPQ3wyPjm8ozHm2Cn4LuMv1jXWb1uN5XbANWgshtrgcNcJ",
  "key20": "2yZ5a326ncBws868fRThir4s7b3N6DdnsndHpK5ihfRLsg8jqppTNJSfibum5ceXdpH2XpPEgeTQZttZJp3mC3jo",
  "key21": "2U3pZj8TEUoFBcpyzW3LVwwxFudDJ3eGbDZaULsBJddtxCvWZsHcHzrWvPx4gej5mbZjZrBwfgfYkwN5GAXTo2xs",
  "key22": "3vttFiDAaJ8QrN3TCEERqzETEeNSELCed1BFjKDSu3WRchNfn2tB9aYDaTbPTMWr8zyb2rfrWP4axFM1Fum7qysS",
  "key23": "5SZ6cgygzvffJwbcFkx1y2HmWZe5n5pCofhowD8G5bWrLa1yt8CsqardzQHN1gwhEY5kNReP7sMp8gKLoe1fh5nZ",
  "key24": "38k9VYVVExB2see7SeRvy8GzkpkEGP4BkdmcDSjsxDWELdNk4DFw3xsUwsKgB9bEPSzwq9wT1UkuLTT6Kqe5ign8",
  "key25": "58Mxkp15p1MXpeiVF8CR1XLEo9jMtJN3mJTgcFbDEsm2h8fvEk9W1fEa8JcxQgbb8Dc2v538HKTPy9zvYmi6aiAE",
  "key26": "2jgExNMS2Uj8Snv9oj3CVDSdWUTCzCFcRLfgCkD925Jwe2oWMMtSHnwwyF3DbzmfYxU3HtkRQoiZWCGpiLxZ2G4N",
  "key27": "aFaB7EMVqsP8VZ2n3pDU2t7M9gBRvbzwCtBCuoLdvfkp6G3GqAfeFs7EJwZAiASFWsaHCBNjqMjhkZx9xPxNgpq",
  "key28": "473cUdWEdsTzDqFJn5RtpJfuuDy7Xr782SRHdmBuAdq71kqU7qLtoAnKf4aNVHMhL4mnJLfMJ7GuuyTY1s579mC2",
  "key29": "2aaRTkK9bzW2rC3VVCFbTXBV5GFZf3mPiQFcY8uLSoLBsfxj3mqcgJ8iYrYbqt5bvFKvajdLusLPDv1gDJo5R2Vr",
  "key30": "26wk6So6gQopAnLhiobg8DSFoNPL26eRU9dMbN5Dcp8xVMpusF3vMBskeACBSdkrikw39EtkYBY5Xn4HW9Q6WnXR",
  "key31": "2yQ6CFc6SNk5of1ZogB1GaiU6tJyrZx3hAAA4jGSvDviiZFc58yZag7MY4GwcQjBS8pfeQ35RrDoJqpvp3e19Gzk",
  "key32": "42k5MDVYu1bewi5tbZ9aPzaSs5nKZULxXib9QqKoyc11D9ZGTs3gpGhgQe43WLBPqGUgbaeBRH2KQ5X1BbhGHB2G",
  "key33": "a5vJmHR9sF44opebLe2i22Pxqe276fVjofDWZUAp9EQ1qD5h2mkRJd71LRX99jkGppScJ3BUTwNmzfxBMrDxhB3",
  "key34": "4LBz9aJMXHEYgdZykFjUNd7tPGZxsK3SnQKbpgvt6sLvUfmv5jgseFRe2kkbo9fkb9JWjgdSykyktJDA1eaYvZKW",
  "key35": "bAazQuPiKXYz7VackjFJics6DVZr1ZTBuZqxX7ZaQKmXLPvjQ5Vjm1T6AGiG6QY1UygkrHT2gJkCUsSf1YgMrWz",
  "key36": "42Mtp9QVyp2hrW1ZtgZnNqt2DvjYPCJgWfzetLwhgMMbd1cQ9uE6VspHygHEfijn3FXFYAPcRX6fS1dcH8YKgdbn",
  "key37": "44q5tRGc167ApsQx9D81NbvkjDgsVn2feN2QvTE2xgoG9v1BvokyePF2s4kXquuKczwABK7NntwGJEd8BhwdTzP9",
  "key38": "4335UkZ3bWRSByagQEqzarorjgiXGHRuYmmjnerDrqLdXZ1oAj8beWqEJamxhrd65uegvSVVx7RN9fSjQJYFj1p2",
  "key39": "4VifaEEi3HgrGN1CVS6uCq2vgRt7BopDEpY8Ti8nHNritTbVnY75JPfx4pAymzN8WchWLVNN8tbrhBBQ31F2Yfmm",
  "key40": "2GkSua6ecMpoWSoGzzcnxzao8PphL2vGKoKtRtVq8Nvu4Zd1HSvMuKxZMjAQUAHYBrAsQGUyRway8HfUtpd7oTnk",
  "key41": "4PDfSRmPacDwXszF1VDzHZS13giTRk6L9H7APMHHq2Si69RxvHkoq35ji5PvaqrVBpSKVidi6CsookZ4bTQ4dE7V",
  "key42": "4HdB1iDhk2CZDxWkCqxYQojb3dXNCH7RDrwP1J7chQzKwMzuVZXzMJCrhv2LtLUYSmsBvA2bfFAC7sXkjbJfXRVh",
  "key43": "4LLjdWv5xmRvepfo3PFA7RUR4vDQhSaLv396Y7gxbBomn48EKqSjceMNCPsGEBTqJAceYQPWeuZEuugRJLVYqet1",
  "key44": "2adYucQQVvCVNgSQfPfpBm8PLWvAwt9kUYJwrg4JPyB5M4e7fz5Tf4fEAuq6kuwiJMob1uzq5SLoZAzUMHP21xNq",
  "key45": "44VPFfYUWn3fVP3C52bkWXUf1y5o7FY8Y97cBvFi1egY3fKDf77yQnC4J1VRyyjmYGReRg28qCCAUFDhfFh65qzb",
  "key46": "5mRXGpnPNsishifJcZo2iQERst3kFHUXhuapcnASvEW63k1YbbKV5GdSn7hNJZjruLrhFTAnEZVCnVUnSyakuawX"
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
