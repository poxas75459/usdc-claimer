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
    "xqkg94sGXSXYQj4UNn8LxRW1eUfbtK5z26gTdpxQj8m4pLoYTw3dAc1P6DdPfLD6ENCp6nHmqUaGawFuHhJEFWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHLbLCgGBMaY3PKed5vVcPEAao7BQHFoQ1Xht7cxy5rGqWXpTGcVKqHdFH62PgvSER5rF8mXwhX9LfUvKyMEgLV",
  "key1": "bLGK2mFdgsYMBbWb9iMrijgvwDYHmuj9UpDtn1HYC9SfyB17Z3PfqZsqWAR2uw9DJPndwYsYwQq89x6iwB2jE66",
  "key2": "2SZ5dpugishRS18GpTqZWrjyQuf5S4JcT1uckxqqEM1uYYopCzXjaLkKa7zbH9F9fLyGb9tNKnqXY7UibPQCMpXx",
  "key3": "3KPJpJCh1D3QgrZ4aUe86TmjEkckSLHUnkGiBtU2kFojHqiRq3PE7vPxMFuUmiAw2TAQPy28aytkH5mcS1YGvVen",
  "key4": "2ThTP3Ln1pJSFGcw8tmxm4FuCgyuZ3zMdKLQnX2b9zYFbzucoRoPrXRLWcPcvTZ88qbYhpFWewLmysZGH8CPBJaP",
  "key5": "2wJdnQBsuJ53CrkBKFmG4reMsrYT9YXJVwaLZ5dD13PKPUBzjps1A4HuDSnXXZ63Ukr5zxx6mzVaaRQo1RYh7qto",
  "key6": "3zyuknWBi3tjjarNL4vgLhq6bX7QGR9dZWX5DUq8QQr7UnHb2egcfgKfFAap7pYUb6pDPZqPrw7tfHNBgXwPbKso",
  "key7": "SCUDYk3G6iMcTSx7aK3935rXb37yQGns8Pt3kbEWtaN37CMsuhtaVsbASQ86rX4T5UheUrEwfeCE8cyWigtgcBo",
  "key8": "4sBeAdqnWNiTExSz8xf1WcTR1d1S9i2FBh86edac698GMVcRyu5PzwHgZRqjzV6XvUcV8BLPTDQMaiNmXnxibNHW",
  "key9": "3GVi8JyPdig3jca7eAUkZNHWBBzc9jjikhWqJCvKmsQX3iXPoSbPUAvn5FppkyB7wJrKSWTXFdC45ebbZDF5VJku",
  "key10": "2kzBEMPytRygyEaYv6wVGLG4Psx7q7nE6UqRu8grg9AKMcynp9ySS75Xb169SQwjT1YaPMv9tKXUx87dhgmWSFfJ",
  "key11": "2AUqyBHd1WPSFCuL9F4Yqb3TXMwWTMP3q5s1dG4tHLinU57VTxXCHs1WdsD3C1rBNuGitNAqW4fcktx5Yrtu8AGp",
  "key12": "2N61r3D2fA9rYXw73HWjz1jUsunnCndbT4vdX5Fmb4W67DB8zXZkmhLU5iRZfyk7TDrAXjmwd9tEXAU3KzayKui4",
  "key13": "5xraFYUCy4gGyNgubMKAfGoRaNShSf7ZXbnMgiwU3zUeYt6dUPPUppaFfXnRBHLxPdPJt38L3WfJM6jX3W6ddvn1",
  "key14": "4VebynSXzfJ7dPWWUd7DsKHK1nFFcEtCdW18Hyuaf2sPkJpg9x8djwbTbzjTzdbQ9UCqLG47ydNEdEWFFrAtZ7xA",
  "key15": "3x1YLND6WAJGJPBKwpKjJQtV2icDBAagddxjxoBqWHvFLPXHf4vwb4TuAeo2VKoEbW5YBSURBNn5TUqMf5dWQgCA",
  "key16": "zeTV8Yxh6rqhDxqNi57zsWe11AWWQCjmUKPANTA7ikApCPmZmHpDtsEKb2RFE5geioggmNn8H21xyEZZm8KpR7e",
  "key17": "5PGmtA4VnphxjbmPJk5r2PowYcB3m2NzCZbmeZKUfViS8VKk7w9CDsgqQiA4f9VDJEpvaboErFVHMXHfFc7pJZ5q",
  "key18": "3Zq4kqD3rEqaJTKcJhyTe54kgc1qpyB1gDH6Miy6VfS6yvXLrNQ4b1Pt6Hk9vrfrTMXhsMHgSA1mBCXtmJFcfBhb",
  "key19": "5gurgM5x8mt2rSHHAPQZx3L6GHszqaE8v5X4F4JLPJY2Se8ZmU7h849faHb3NXHbWcVRfzTwb4p9n2HCEidPKj17",
  "key20": "px1YUp4T1Qsp542MuiuDbes8ZBhWD3KjGepmzi2FEq9cYm4ZbuKUWaYd7YcXViWbMwsJzGmLhMYHmyAoN6DntKD",
  "key21": "xMWyxnWSkaguZERuPNew9gDWn1qHQ63uqYpu1M2QdiNhGYLsqPMGBYscbTeqCjCFBXvcDHx4g4Mn31W1KF7nD6i",
  "key22": "2MTwM1i3nuzS1EQ1uReDnSTunDh278mNEySeCs8oGV7TQfUJRtvshoKRHEyD5BGXSWDJc2ro7NcGwLVYLX7GfFE7",
  "key23": "5oK7SG9jqBciajzibjSAWQwyHGwKFCeWA2BRK5Uu1VL5Gss8T4PgQTSLrkCxsJVsFdWK9u83JVXAU2kG99aQoy4u",
  "key24": "4zjjtXMhmbvtDYpdWqBcMaHiE5YUghK1Ne1VttktCaRCAhrT9SCNBDnsXneutY6oTYRaPJbKV5wo8iXQhXDgNtuY",
  "key25": "5FCZroj1Q5ApzrTsXXnSqXyTW35EyNTnJ7SXThKhKzjJePH3BZmZFNEDurqRwFX1QwyCRbNYQYEJqAR3GNUsGNUE",
  "key26": "2pPKPdG3SzhJS1EdcSPQAWe8vnZw5UeaG7uGNHLavtyEvkYLAPZC8U6j4xtvwtFjdgssPjaTbK4evbWLZwNtTibk",
  "key27": "2pbAsYMhmEyHb3r4sX9rjsAo8egrGFGJCExJNR2rQ4P5xDTXZWutsFgkkejFven35VwTZzpmEbM7Nzvr4SW4Y68j",
  "key28": "2mTen48zHyecVHRnx2E76FbRWkDwJfwHhJzZe7LEHRXuCVe9NUyiDaZpEDReiGfZhWTQuEsGd6C2uuYVsSr9hRBw",
  "key29": "4Ey9kxLpRnsKW2EWSMT2dQdyUappsQFwBLQSJ99TJKdjp4M5qngrMcrUpGXePTVumQiR8zoMhJKqwyyFBnBjS9p4",
  "key30": "22nmmuJyxyFnexVpeyv26wiQQDPS328CJsPftoUHXcvdXZVHAcqCsoANTH8QM4UFqGkUrbpXJcwQi7Xa5EM9zd66",
  "key31": "4YsKzb5AGyL8aszuWZRvS8r1EpHkweScEHh1Uz5imLEo7hiQ1Q2BLdbBEBH6cm6MYTVveJ2fmdai7q8n7aWR2vy4",
  "key32": "5Ee7EEEM1aUpRvBK1wmNcYf2n3xD88kNXXcLRj7T8gajJ67gCwYfv2JmUbtQSGWWjAskKZ8N3JVFKiDhWKL3CYfm",
  "key33": "3pR8yTaSwvBHznYLMXT7DrVZgK4vZBHSzKZW9SMbbWhzJKfPjMj3LrgD4SyEsuiiBLAFecNiVc2YTTHkpwmsnXan",
  "key34": "3THPDvnDP4LETrG4bNyngj82L9EEsyYTnpKoRK73U6wK8MmLpE2hdacbDf1MpG1CRUSHzSNwDr7RJzrDgwM75zhC",
  "key35": "44eJgbdizvLrqE5SHucZPy2qybYncDmWYGuDbHDCkDSTi8iomb4GwBH2L6Ei5MnytzXeKbYjGd3zR7rAN5w4nYRh",
  "key36": "3fWtK8E1CfAK6BGkcJc2Y2wqwzzNHVx1o9PcV1DpcuHoDfMuD6sqZXqGwQXUP6Mc6djmdhoJuAE7DNV4f3aouC15",
  "key37": "wZaMLKZbre7GdQNfXVAox4J68NMEoRBDDg4V3qyovEAPoa6CoyZ5em12KeDZa9gE1Y5FfRaAdq4k1fNZ3yxmhpb",
  "key38": "5kPKS9mBrHBRLYkUujWPBV7Dc6BACj4B87y3UrSAsbpF17RdRLLzxoxuVUpQQopUq2sjeYa6tZe4B8GUYkJPk627",
  "key39": "3cJwdQvMqbjRVFUW6pB8njzYajTwNreKYA2mhK9yxSUBfAPKtJkKm5Pw3xesmEWWHtZ2rQoJ8RfLhecWd4CXib7w",
  "key40": "3vLeapuAatjabMYTJShaeB1ZrrvfZwssKFRvSj9QxAhBU2WPiU6WTaBcSqXpK2rRwSoUHiVEdQkLaa55sP5ChXxR",
  "key41": "5hu2PPt155syYjXc41CuwgA6tRB1vsFpdFec6fVzfQXyYqUA7NLrANrEJR9mg4uEvgsV4vhQwXStHRUZKiv8FhjC"
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
