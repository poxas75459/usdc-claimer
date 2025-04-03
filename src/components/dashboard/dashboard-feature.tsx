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
    "66aZnMVtHu94iaGsfrSUX6rUBoNQ9e8zmbhfBsiJcAWcD9anRJG9s2dfZkATYza3rF98qCG9HP1Ew6vH4w8gM57h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHpLamA8tVgwjXb6M1wQmdNfAbeWAQ7Qp1b3NjZvEbjBgCioosTRv8FkRgwN77Dr6rh8EfyKbiizciFjQm84jAq",
  "key1": "3ewGp8SEBV9ob8SVjEouNySp3RQXe9TUqqNn5vfr7RWzUy8vQCTbFQ3JAdZ7h5FzUyd2DseBCatFZg9npXT6gsCM",
  "key2": "5WkVAK7Kw87yrkk3Yi3nWFa1BAUs9ogFsbht5RJtqxG4hy11R2y7N9A7ApWpHQcPX7EYWfFMQwtNj4BvzL1mEghb",
  "key3": "5qRxV5QidfPGuYEh5qXBYC9uxuUmzqcDUq6Yx5wdrSjaK4uWAUxbjnoRjWiYhnuYDqAgWtNS4pVjD59DYVJJYfGv",
  "key4": "33pUEpVXrFFqFknYCXKttE3UUyDTmjUWNJ7oksGbhDoj2KuC2NrNZeuDbyJkjNWgfttsD1tnLXPwmgExw5dqhxWR",
  "key5": "456PiMPggYHAoBZDRtRt8MXn1rwVfLRCpXwkyNeP2FnNM8JNF7d2cSUTWzSoojPfHjF6avKPj3QQ8Vk5M8M5t9gk",
  "key6": "46qBYsUtwaY9aeuVgvMjPZnv8YtF9SFLg3th9DidBCh5dWW1nnAF9GNJyNGbn1E8k5WcV1veypPCAAsdPeLT32Z1",
  "key7": "GRK1nHaT5XutMN667g2qmBwAo7t7UjJqSyTtDEuWdYcKfZwbUcJpgrpRqqukErx7qR823weFcgmEyXQSrPa1WBn",
  "key8": "2jLhJjX293dKg36Fd7yxJz4b7gbVGM3dRRXmzC2zmxsieXEFNMStm4g9fmxtCoPX5AYFTXNhyq2sDezBw1WpRnFA",
  "key9": "5CZSehaL97u14d6FjenTt1B31tgASdyLgJqe1GdsG2SXWiAL1wrtNN5XiLYapE8JTUuiUY2hbxQMgZFwmdeQM4Q8",
  "key10": "4Eg9WLcebQDSqjiVpG75XVkwCQdTGtSG8fgCvz8azYQwF8Gwdtecmb5goCaDWAVJFW6Ynx63foSUhueTohooctah",
  "key11": "2pjdxnjuro9yoJRq1wLzZkvESpe6du3C2aF8bgSFNqQNuR1hRkW9k1uHyGNvnfmowSun2mr4tkaHJ2fesDgpVEx5",
  "key12": "488dMXS66A27LfwD38oHmx5MZBcWw4EhBN8ZfFUiSpaJfiJ5kyXHkEoCzWTaSVKCxNvNBdMpxWPqBaPta7bwgtxW",
  "key13": "4fTmhDvr7yrcEzVAD1EbLhePNH5oHsKgg9RyTVHiqpZzNEH5fdKPLuyF3GdTn3w9nHdWmWzWKSPxbcN5AuKiRkLC",
  "key14": "4bwXjuiMHYgB4tQn9hpATheTkk3cBoEzeYhLtiXW9u9dVZ4z3cnvd5WiXhhY7axXfaT2oLCGYQLuJY2v3YZhjv5d",
  "key15": "4VH7ZiGEKe7TDP86Up8UASYqGq5nUSNSmatcShFkc9jC9vMWcgdHXphmV44R2LtLp9veVkd5ERdF1oS9dA9KNRom",
  "key16": "38SUUtJpwAheCzJW5tJ8w4sDT94QPRytMMnuP5iJst7PqKiY374rdEbmfKx63ynXoqcBGhhKpMTANpFP3JXTbatG",
  "key17": "26TRuTCVsBxyMuKdWqtQnLM5g3hvHZXLNnsvZcxhfHsfGGTSXjDsGEFr19DYpq8wSkTWC3EM4QSeWZvUz2AqKQJZ",
  "key18": "3exGySfLWjZCgs4RL5911iGt4pkLYVZvPyQ2izxLTgGNaxyLkYbgs9J4D7TZFAscHa9CAbDog5wGGc8iLVtX2GFt",
  "key19": "4fXiA4DmTfRhL2D8d4TJXJ2vBF13zHf66PZYQkfxr6GRfnNU9f2Sn6Cz5Ghqc9MKb1mTDaySsRbNvZz1hjHNMyWY",
  "key20": "xZ5h2FPNad4FjLpX48HY8uSwcCkrqHBLYjbf81cgnnDxj8KcrSVp4CvoMJ3CvJBgZrzjLXrGoZmnbdV7Mg6QamD",
  "key21": "5vLnPZJUZRyqBoZwVeYzpGa2vjGLfQY2b8Z21vMKbZ63vTqenrvJspvkmg58UzdVd14s7i63paMkWNMewit1SWP6",
  "key22": "2KeUehLw4HMwnRSjR8FoUzyLTAsjxfjFi2odtN7pjiHxJWmZbzsvRZvczSYXNv5Mib1LSo3HBELk8kUnbo6eK7CC",
  "key23": "Do8tUpQ81JnitfebvQV8D4R26svdmkCCHVWRDv6aUC4tVG2MmkDdwj9Y1ruxZNFD1NmicfkfWpysBvmfDbMhDUP",
  "key24": "49WVDgVQdKE2TFxCrG1TLsrDGP8spYcGfNV7r7rsSySZcZa43noYoLGeMdENdPNwr8G4wkn3iH2SEm922y2ob3kj",
  "key25": "63v8escAxQog2PGfaH5yE8rivtaoJr184Ssm9T1jHVwPnFPLAXLyTHQVTPkofyuC42C9cCKyBziBDv9NXFtSr2Lj",
  "key26": "2MDXH2tgPYnjzZQvg5R2LU8DheR4u1Yh46oqT2qF2gUEaLUwyRWshEtrEyyuKpEqaJj6rtpagVB4gWjN68tUMZK8",
  "key27": "Wccw2GKSgh6y8xy8adQ2yjkyTBU8PziDqPqRQzAPD9uMHrYFUwBFuXNdhUpfxWzNcxdX96fFHoK9fySM36kLX1U",
  "key28": "4NVPYNqjB5CCfT6mk2WrhdZ7TSo6VjyAAoA3eN5ikTvDUK9PBcCgWJ2oLjYQmaVSKeeKkHU81EkN9oebeGcecXEf",
  "key29": "643JRbNFxcko2DpVo7jPcwvDN3jcbMKYWP3FjMMptucpmum13r7ztChtZPuuRon9oArkUVWVg8isvHi4x2Ddhdbp",
  "key30": "5msp751mUcHRhmxSsVwsP33sKYMz5RyBYRSDpqBn2QSt8iXwRo8AUTHW2Z6pzEDtfnhWVyGFoq4m5b8fufRMPhaR",
  "key31": "61dPccp4YdPrrUVzwZruL6tsmNZXvFAn2dg1iPsrjqvWDTxueLTahvNFnzGxwikNMRX6U9e2Vqp6hNBAWY7jyEk3",
  "key32": "4ErWphNbe4xtzGQ7ZcGiEeLqhd3sfFrSs5716kDtf4HTdTTKVjQ9wgUCq2iccVXGsRLY5nG7u55j2KRQaN1UAa4u",
  "key33": "msLi2CRWoo4ApaDKJZHnwo8KdZSRQ9L85bMmxXDzusTqt5uvP289oeYP2M4VMpGXUgfBqAduKK4H7EumopZU976",
  "key34": "U2yt972VtdusG4fFMxNnKdNmhXWpMrb3vi27JAwqZQfvRrMRErBC6QgyNwfgSmDfBh8DWtYWJGFypjZVAt2po6A",
  "key35": "4CySfK45LYRjWqHv9cGHhf1xuf9sgzFB3pSBif45y9DTkuoM113iPRqB9oEPNfVoe7FM96xaGwaRKpdWXFP3doGv",
  "key36": "3AH4BSFWgWUGYRXhPdnyasuVcMTM98FE8VuLo6tArqeh71KCDJw5jZmic9i7sadqBKr1LWDdAREEsk36d2mHDqXi",
  "key37": "1hYGtMfBKcMFcXtr7xPL2M7MHeh7SvC2xewCRWEzMYAph6RRjrdpRWjJ2C17s4HEVmDyNhWc19PGnsjNbZF1Fjc",
  "key38": "3xbXtLoBPGjjjEVSYhoHCNMXauEDVhYCStr1W9rHfsdJWg1st7htFhiWzqYXPZfUkYWVsdBjCvBN4E3eQUiTKtKr",
  "key39": "3entXbv47iinZGbVmZSeCjdfyqz117FLcK1PPLEz4iTv8z936DULwvq5C53abFZRnt65A1bciWua8jiz4ZyaaFf9",
  "key40": "23GCyQ1gbQQyvYsahKnbAqUFJETenN6KgJK25KbSFxjSPb9sxUuKXUebubUD5aaegsw7tYzvqU3UDLqDswAExiZV",
  "key41": "64WjkDqqZijYBCXNKesGJtQSeMRem8Nigw9FkzgxxKym5e4X3U4e5VdMZQcQkyTVDgvogbrYdDWLsmUejJFPD5rx",
  "key42": "48PX7PMS3B2kb7iSnu4RjPqctkXurgMwqbdim199uuCEt2UDRaoNEvhE9FNQtdKfqhdTEXNQ6CkWTSL8QpAYPWDu",
  "key43": "WChaUvG3pkqaoL43hhzLx4EKTeGf9LSjXV3QxCCYuyVGztqXL7mxYM8EEDLP1EGPvcpChb2s28KDNcGT7s5h9jn",
  "key44": "5omUBTge7EsPiRFmQbzp4k2cDhQLBYeShjxCeSEAe7MW9FAAJoqBknv6427hXpA91zzb2TzkJVYxbxxAdhKopd7J",
  "key45": "RzqPGdaAMHzHpU6RuhygAf5N37jJ7afKiaieebYzuZY4nFkruk9hP6Shr2DadvhzcE4Q2R2N6dVhXu1aaWpEZ6v",
  "key46": "21WxGqDmGUHYSCuWwdJNFnmrCfTHNeLVGAuTYVcZJvNQg1pDFCtpLEwG29quqtpt1ScS5mAh8RnJPpMhDxTDPf5B",
  "key47": "3R6JqQhdF2oC35VikNrSBHWtq9YS8AdR4uoPPSEcjoJrFsyWWfLdCYe4c9JLuSs3QxLtyTdyge1xZTrxLZCbEz7z",
  "key48": "5Cv2ZGbfcLF77CwNfbU2dFUMUCv4dDuEAJeehqbx9gwvAEdUnbCdzv6RTbJFA6ZpyCRnuffociQedKM6cSdTovz4",
  "key49": "26T7Ur6LRrEEZpM3FUCtoPtaBmLv2562jjB3H7SwYn3w5H27cWV22MVHVYaRAzWtu8rtJFCDw4RQSnzZQqDLvGQa"
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
