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
    "5uSNXc1iCBX5XnQJ3fgP2j2RzHNkZHUMK87Dvs3QvFXtnkD8Tb4Je5LpA5zJ3nWZYmrm8Mm61Yw8yAgZW4bjhx5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzfsTAKvB18pfVWtgo6TtfAUEshXeb2JCKMgefbc3mnfqTArmgRJCimBWy2H3eZVtQGtijP28RCv6AYNkxJ3R93",
  "key1": "42dFztQRDt5xVLp5VJ7CDAW44hd8eTCCJaVAzMshjFHXuaJdXh6Em6ug6SeTi3DHYyGB7QyWYoBVJyxfLgmg81T8",
  "key2": "5NtNDS7nS25pQbxeuZK1EdP3LMZ3QobMrjgydpjbupdis15hJ5mAob1mhRFh6jZvVrsnY6iJVQD29XYcGs1NnPaK",
  "key3": "41p1MeksaFzV9DBi5NLQpzpP6Demx5arVbDZUBUdyNKAekhAeHVj1pnuic6aedN4tDv9iYNbeyFYgKD8Q1kzbp2n",
  "key4": "5cjjUGDRoShdNfN2btBB434VbMfPTWraexNhdizor28CSoYeRRx9ZuRNiZgHCXpTdePrzbo1JHekmA7suKUJvgi7",
  "key5": "5amM1E2PhfrmNnZYhTuPkCv8kaKJjGifUtbTPLiDqi9yLC8XMLMJNWid6PVdFdvCBvnWTqQaBetPP6ZXuRwbssjX",
  "key6": "bMsrVQRjAqTKrzLxvYoS5daUfrHcw9rv6jXofHvJB76n3jrLbTwvfTkgeMCgoDt7f9ehykMcXnRQdqwqrdXpNq3",
  "key7": "5TB9nYfzawPSNYMMnDcJZtBbwD7QuYgF5uajFVQSwFsrrSfbYsLrFqLrF7U6gpP9GVBEzL8nU18FraP1qNzpHrRx",
  "key8": "vWZyENdsgszaiWqpcp2191Cp5fAcbqmayWBiwwxoZcUd7dDfTBz23megJ5FXPsTBts6R52mBYSEVV7jtj8qYbxf",
  "key9": "5V8s9UWCrEPY9A7n9B7CEPrE5pYLPQA45UAwcdpKxh8FhooqpPcF3eQfiDbWzQpL6mPT6wDnwUNocjLsNRzhdTBN",
  "key10": "2sk7JnJJC2SfkVYxHnrKHJ2sUnrQQM8fBfqrN7fvca9T3RLk2rNugNxaTM9o7oDgt8UkXVgtoDZ584m35zxGWwYb",
  "key11": "5PkPX47uEdSTGaienbBQ9ATL7S7JSszTKWFH21YmnPnocU29XP8xkU4MC36bGGDAoQJkv7bf2juwcxjxx5y2D3Gw",
  "key12": "2ChruPnAgztaYAQv9x4FaoYNjtV68ZhCfG7ncKEsrfiXTKjH5YjW5Pqu53rNR4vugfFYx5gdvrFtZTYXxJA62DJs",
  "key13": "3A55EKQRduJDygjeCHRRgc7mSGBBgC13sQqNqqjT7c2D5g1FoyJRNiafV1NJVQFwkb5Ka4CqtCzrqfG4aFMMeJLW",
  "key14": "24Vec6isAh5EWut2nBhdKNifQremDnat85GQXqRc7dJHggr3RmRWtAeBJKqjLo9854P8Ug3Pq2FHo3HPkPcD3zR1",
  "key15": "4pvarj581YhDUQod6VWFoBUv63GKYj9PSgt7C5RJFcvkZj5YB8KJBSdPgn62tA2HZkCwkdAbETgyXgrcSf9xEyyM",
  "key16": "5TjEkFt44jzVK3AtD17bATTwfyJu9ao9K4GxYJnZNW8mnGBU5mkffeLcAJjewn1Smk61WzXdhuLY8wiXDE8hPYCF",
  "key17": "2ALLMGTXT5zNFhe5QhvgjmBxLBhVQS8Ku5y7YC2QZrvsFqoArDrh3NdsWuVRXRShr3y8FxvWEnQcRWAmdpYDF23u",
  "key18": "jkZNenUcLgnEknGLHJehQK6vbskWRXGEPCRMc15cmfSPTkHznz235YTBwX9yettkHiLBVDf4nuh36767DxqNtDW",
  "key19": "2x6kPVtyajbv9oVqjxeW6yXLYdW8y6bdohBw6EgYubaZZh6FdtUd1ySfSAnWuHHLyuKH72FjRWivMJayvETHQb85",
  "key20": "2jVJYTXmucrGrgknry57Ey9XzfXogmHzSjMfWCD53KSKxnAeC9BLUv7RkbqP1Vh8pkDJuBp6HGotcz5B87s2mcqE",
  "key21": "39FmCmiCJHXG1Z4azJ7bjaTze9g3bnBFtRgpN74ywYyz5M9Ey6Te2SkQABoaECuzfBeN6o2GjWYS26hiQaLTaSZi",
  "key22": "n2jnMW4YHKxw2EuuLdDpATnizGSq9Mj1r4C8DVwm1cKdLi3egXZVZdAq89yc3UzzLRY1M3D1QZ3QFJwJmSDA1ge",
  "key23": "2S5pMfQ7StS9DM6cN6eU2kznfbCpoumPG3LRVXt3fowqSJQjzPBAfeuek1tZVa4d59f5VQZDCjjZ2JCMdryKZrj9",
  "key24": "5zaZzzyyVwf8R437mi3dtB6kbGyGX5qL7BRNki8Ukezj8DJ4LymjsEvaVbNPFWXWSHm22n2fGao9rUEyXTeeFkQC",
  "key25": "5duLnXR78KQZYgLc6nZJkvPefkXBncVCXCniNx41BAzjt7EuVBdUYHVDTVa7SRmtniwT81kqhCtCmYv852zvhLmp",
  "key26": "5hXBtwL78Wyb8QXDFPhGTRSLAPeJAurBDNSU4Mo3vNJKTTFTDwausC2xXD1T2zYyz53b7iCSgZFoS8qvgmmDYzyo",
  "key27": "5mah15N8bG4oXv88rNZRiQyHAruhyLEz7mWFzJopVG7DBs55rs6YCTNfbtYFymG9rd4DuZSG1snTxEpFjpHyscmf",
  "key28": "5YQAk1hxTv87J2q4PJuwJpeTJwEtapXNQeJqAxST62BRAwNG128xA6pdK7tvZkqpu5yAhCshxpvYo4GFW7pfgwko",
  "key29": "588M7V1z4pZNwy6cQffgP7GrmKmgGNqTt5XBfT1gBfbkYH5qq9eo9euyKapPHR21uS9hfxLDpWQ7MnbVA8ptog7k",
  "key30": "3HFoovgqhzezJ5YwaPNYawPrNZRZ84pYKTTxuvAYhbNxJ8qnoZmNVSDk1ii7ayaxPsVw4tdDzNVBQuW963AcDzcz",
  "key31": "5jwupLsJ5SUhzYJRmjjfx4XvBpHdQsd1cECu8ygeXLBghkhMggUVyzZD14NFt5i24crnBSUAV9TrBuwPjN2CQPpb",
  "key32": "rTSkAmnf6UwvtQoZr4EKT311Wj6Jf5wPxRzqRHPBDiZnPniJ8onw7uTLKBPpXLwgaQBZuBZAdqEZHFYdXCGx8gN",
  "key33": "GsEuHRmjEXtjF76ZH8F1Ch2VH3jSeQvaUB24sRi9mrgbp1Q1wcTjVYsbSNyAWvyrZVv8YL8suQVSVsVfmpTAngS",
  "key34": "4G6Q7W4Wb9yL7cB6u6zPd2xDboFFJtaD1weZuoNtMxEqQwBp7DN3dH1dEGKYTR49pXWzK1b3PHiTRCeRPMPeT8q9",
  "key35": "2GCaz1nnB74rgFiuQ7axW9eekpu7acDKi8ZmC6ePrBoB9HPJSVPfcbaCTfTMWXPaToxuAmQpxsGH4gEguZj2emmo",
  "key36": "8GNzbU1NK4ftr7nXLtB4uWi2uoYXHfRdfZTaBzVQJb87NtWH15L8sZoPC31CZY3Jm8w7Q79HauxucVwpUs1KodB",
  "key37": "42tcfRxQZ1fd63xAc425HLUwg8xFFWyDF2SJWJxBFL5u5E9FJwzUZAJiMQnyzCpcHAu9b5WbR6Z9n19cXwwjLduL",
  "key38": "2ZYRHpwTLKp8qbXCnZ4ndRiwgxS1o5WUEKwCSczCxf28ENA5neXQyRLTXHeEWd9xRXkfFrQcW2LY2Pgyauo7xWFC"
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
