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
    "5y1itzPj5R4ekayy3Q9hq53bAH7sRketVci8dFfzJ4aLoBAJKvpxnagaHE1cUaDMtckDEceng2arCghVd2G3aps4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MF3agHsd6asKQnJY66sfcN7E59kKQBVpeyYEkun1226EDHPXvSSQq58RbMZwoR4ruzGHT4t4W567uizYXztgnaE",
  "key1": "5a4JTP65ERouJEhPp2Qhp5auFG1hTLz7yoT1go9t25qy47noXzoyVM9fwYYnQ5LJCjHSA1kGvDTDpX8JPyBfvpGf",
  "key2": "3z8XKCA5hWjctgYno6gdZ63X4cXGEdmdbRo69p4x7hjM9yH4PgZNnXou84sWbK3ZARbzr9bKMWvtVRWAPwXqJmXT",
  "key3": "4Qnjq8PJZ1LYZytvc2cX1az4T6z3FeXj5QB1LZwnMpRTgVnyMfvofcgiEV7MkJer7T559cswNhDq92kWuBZ5HyY7",
  "key4": "UrVo7tumpJog3F9uH13V5zgL4cGke81jgvPUtNf19YrHPJC3xmNyvb9aw1QP9tZqMx4NLc8qFYfHcP32N2JsG4y",
  "key5": "4Xcbx61xxpf1xv3vwxoS4sNurTSJNgTQNbm4uiYiRpFK23vpxv2ipzB8g4DFFLYuaWhwFNTp23sPwFRRY2saeiND",
  "key6": "5QVQDa71q7h8jSdnonqjxaU5rFUf7QLiQuDFiiJfnrXKAR5wYjZ1JjtnmDiDJFy3zsWQUDmUN1YXQVebR9unVRwF",
  "key7": "4cMnZheLRL4GmUwmoA2Nhwtjr5MHrsFWxZu4b5he9mFez7o7fTge5hUtZT6fs83Jt7oUxWN6WVL3u7BCt9k1j6fc",
  "key8": "5p5J5BrqyyrUwtvexDgeHoDcDAMZ55G3GXP4yWo7RqHK3pRrCoHGYrFkzMGFxx4ZCSDrPntyqn6pu7SvU4GJjGU9",
  "key9": "2MWPiiKTwTYyhY12jNmE6smgKuzUqM6VQ7JCR7Z62RNytvB6spPs1RfshTbzwcSQo5LPiZuqUJocTAV5evMsVcDu",
  "key10": "3jpCiZ3gjy8noHfhfTPs43dhdkeBpWZkBhYPA7vmU161guzJ4aVeNwZpYXeaqaixoJBaKgN37VZR7fqvSx1WeMKN",
  "key11": "2G8sAXpNd2FbcYAtjJ5CpgQu6pogdkadKi2nDkBHmbJx42Mz4d7LRjawAqB9dxB9yLPLj73sB7yjKAvZUE2qt1dY",
  "key12": "2WUXvtbEXD1Cip4r9985iPuLkQE7PRnbvcFa8AQtGH7yzWDir5qUsfWY1GZkn9eKLQuTRuf3MiuS8wURcwSztAt2",
  "key13": "4arzrEPQNA42A76yviSu4Xp3CrirwL6FM64ib1dDg1qrc3yHJ2rpWypdzPhu1vUXwqkNxuD43asWLqxnAjyrfPQS",
  "key14": "2SjoAEzukRH5HjLa6HuN5L4gaS4HuPnr6UmVGyWg7f1PQMv6fWbAFpRgivNLFM3RBHD2NSrdaZAZdvVMXaGftVKh",
  "key15": "2tjjmUBDYAdnv5NZ3pSSS6k1cRYVMGk83WarYZ2YP9YjN1Jzpt2TRChy73xWnAdjgzptjy4zaCjnrPtc6mDPagsh",
  "key16": "5HptHAp5zxnwW9YrgjQty33SxH2g2D5Q2g63sTds7hwwHHFoZRzPZ5aNDzxa7X3Jv8FnFktthqFraZZE3a2wvmQh",
  "key17": "njk7J9Z8kqnSVfwhEW9qk8yRB2dGCEu927J7kLxLr1PuUdtVKJHUQ8usY6r9o4vHZdpYM1DmVXf1AQYHXFpP5a8",
  "key18": "5GD9FuSdztTeQBUPJEVrNs84qShTgwHLnJxYHqHLPT2eakcYUjnYPuLgy1455mEtNbLkD9QQoYxXApXivHhAHy7L",
  "key19": "2akM14vjP8jrV1e9NsLvL6DuY3DbuGXqrjcqDmm4WH46XRZSwFJtoYyzzx9RTthzWekNQ2qvXYg6hPL6XDHbttHz",
  "key20": "5APdLodnXA1XLq7GgwofGgwhdvFbrrEAuAb3whjtDHduoaQXDmDycB3G5LtkFxVVscHbFQQVvNKTvDAJGza9Venz",
  "key21": "5K6TWQnxiLRwfxuGueb6atrfjCjaXVQiB31rWhducoLKfSCAggVDbm56PUSyPsMoh8z7brVwhXrdoxxrbf9sLh3G",
  "key22": "4GwK6hdsVkxANP2ZmsQMAVGtLUPcNR824F1zGsbiKuWya2vvXngCuXWdfckrQLYigfFUv9CqgsLNRVveEjrkw1aE",
  "key23": "ppsCCTsrGGGpgV8zkq2Y34wAqBsCFjpSJ8Nk4jENu6XGp3vqDiNHEh4jYwEmt36XdC316UGPJxmN7Cy5pdpxPEe",
  "key24": "YopmPoKFpC98B9CnW1nKpbVxYGshjbhdyr9njcE8djGYzj6PC1bW5wsKqNMJKBrZwWvg4xLF2xwqGo4siMcyEvD",
  "key25": "5DoWrkzJAfXEzGFqkE3Q6SFBnWDUN58gDVw3PCyjAqKWajYtTc33Viamx7HKSWX6ifo9QjFSg7KpDEKZbin3t6xf",
  "key26": "onFdA8BDB3T2jyFFQCjRjP4Ng5EtvTqU2BJxZMZbgFZ6k4NKPCXX3m12ZBqd9VUaMZnVZ2T62AAH5a72KFiTtpZ",
  "key27": "3CgtfhLgVVqWAxpdXq7Vi2jDnr99HUoV7N5VF8T1mC5YMa3ymv6RPx14cmJWVsqifiWa7ZSzzVpaE1EbzRvxbidk",
  "key28": "3P3PhhGgTYRa5XQyWJwynetAqxTBJmQSpVrdcvJjmrrh8QvvJyUwcRYVmmUpds5BNvHgfqSx8AWgtt8Yo1yPy8Dj",
  "key29": "2C7kziV76d2cPLUdPtnmXsLUHiujGiAdBGtuhs3EnoeqacoRtvY8RuySSYAT337PhW5C31eLaGvXAcPSwCfEZdJy",
  "key30": "57b33hiHykVuoYmvcqZ5vwHuzPXdMnzSZtCJqqYMUGRqTAbWryggkHdQYzQzbtRBfBhjtTEKgZYmBqAg7cpZHhDw",
  "key31": "4X7fPqX2Excy4q1trUoy6r1KKEqLVSvLKE2AzkFWePUGFshhpsWaAZAFPwgotdio25pgDTfs5TUE6SwdiJvgxzAy",
  "key32": "2ZMs3mUJtYo9LGXFwm61e9soECzpfXeE9fb24eWiUvnAUeGDZSjDyeKfwNLgSP2Y6PaSCyd7eWZd8UxUpzPSmuww",
  "key33": "376KC7pwAJgMjZoMiqkzct5NGrAxdKs7ktdjenZ8MW7w2NdorkZSYazLqbxmGiMm1F5gS2issz29huetCVjxQi19",
  "key34": "5n9QZyWc5KG8v5zFawR59J2XFVJWDJoKYNHuTpqePxg1DGWi5qXjEpfgSX94ckNrxJUxrrbs1bMnbzD79RGthiW5",
  "key35": "5MxQbNZCGE1G5GmS3Fez4xpp9M2iXh2YFTB4rSDzgMwxoMVmhFmp8SpBznZGiSv8m6aSJGB3H28H157BjW41WX7",
  "key36": "65Q4c9qJUXy2td8ndZiPv6scofVcgtshV1GKDFafVxHhzPcbWq7MJvuWdF2B963CajmgokfzWw9ipiwmRLVBtNdu",
  "key37": "mhNdBfoqqJUtWn3TYSvHS5rJgTjpGc93pTJ5BxMDrcdQrZqzDzJyU8S1HMUw9XzGzbxHZqcHgbZQpysNDwUqMtu"
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
