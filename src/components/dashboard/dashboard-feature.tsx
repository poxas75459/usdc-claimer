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
    "5D139j7363gg7xpYr8MbV78gMcaN1ug6khphfPnN3z2JZEZQWSwbyeiUn94QvjUQUZYxJmYP7WUHVjCjWbM2TyvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QvKvJjBZUQY2dx2zYtvykhco1JpG74bhQrCXxY11WhjR134xQuEijS8BXbexudKtFEgBKrSFddPWWvtNLxvrd5",
  "key1": "55w79cov2P3wA3YrGTRBxzzNGfkybsA7PTXrrukMK7GoDHna13Nfz4GGswtyh8emuhMF4E18iJusgTz7S8a8XTta",
  "key2": "2nNtdukCWrFxzyUyBnVCmzS9sFnBD5aAUBh2sFfPo6XAqvCgempP2eDE7PvMgJhNQ1seym6svADcYEzUYiZf19BV",
  "key3": "2jeyjRAhRXFVZLHEdUpWKAVGpH9GeYaCP7CSPeEWZnPgGsyFa6Sku1VyFkmy8isyeXfmLCvDVudxkMXcDMNbhXPX",
  "key4": "WDrdyaFNc7mcNx8FcboPB9RWvgStfaf16ww6umdfkwHZb6azUFqS46Jjf8A3BG2JiMzsc9yLoxzqypDCosACcTk",
  "key5": "4CpnAyqKYVt6GsRv9q1cyQmY32aza4xKP5mqirEkK3SYK6CrBMkug1d4sHeucE5kQyqinb5DJLiw3z3n1GASbZVq",
  "key6": "42zY7oW3kCtCo5rNXnmVWLiBGcJzT3uEf1kXJVeu2Ydto1GZuiKhG9Y7g2pd1jzq2FQK3pWaLNrZsKTPdyZKfnnt",
  "key7": "47Va7eD1R3nYetUqgkbEjLrMKEH3shsA4BgCwuNV25p8EuQ1ke8LdqPRYEHVEsAHW6q4wRvPiUSdRM9aEP3AiSuV",
  "key8": "31YuwD6kmjtmjY2YSqrZauvahmb6t7amRZaZxaKKXNTrUMXahzosYxRMQotMLRmhBcvd8gxYXtAvbHzCHnuUghRV",
  "key9": "62ik7Askcm5eFwvLEinmfi2DkfFuvU3VMafM2TPBeWMRvZYyCuEoRnFJDZEA3x4AD1HsS2xRhpe83EPbepdyZUud",
  "key10": "2sMFsajEsjQTvsTBjnuduagYXikwmX82YZqd5qY1zzEby35RPa7QicLJbPdjgp8YCXwPv44Q3QiyCe8gpbQxib4U",
  "key11": "xPJfm2VpBycmXmtfBASPr4uCp9ZhctZg2FjUUcEHfRUVhvaQtGFe3xacLcPYM8GNEFEdSsUiCycia8TFSzQ5hYc",
  "key12": "2MjZCVvLWW6b87TAbY7NPt5pzTL2etQ2saG9MxcgkxaxAM9tTG1TpepKxuzpWNpHysj8xavfQyx5SoMyfoJA7nRq",
  "key13": "54twFUzibQL1yNGuxEuQjMtEu1afrNYrYBRcQzesFCZVciAYz2R7pBhrDq8K41KJk4j431zZjyzSFvxPrUG9oWU1",
  "key14": "67EXuHaa2iyJLw6yHQ5F1AP4iBDnPTRUY6VhTLYWi1hcrNTe8zD5877VfvGV7HWtP4yZQEPpJvP3rcAWbB5viyHJ",
  "key15": "31PbA5zrZxLT2KEjiCUugDU2gFCANcQaqVYFPJj5rMxmQiNChRCYidLCvRTLHPKa8kaHBbkGCR4WJXeesm7Fs1dG",
  "key16": "3P3cBHkecfVm4myT4Rpd4ndCNmGugyYYkzD9Rmk55yCMLiUzRYFkzwSFrAqrDfM8TjshihQTrVtiY6oEiUBTSbbd",
  "key17": "5Ye5GSb5xNR3PSkcnBAtfwEVL5UsijKwHd2Wit8tmRWdE24KC9PHC5aTh27TAqSnseuTPsJJGXWe9BK6TQTEiefs",
  "key18": "7N3HKxafXEjDn2VhFGhCioXuPSfoAYTWzy3zqzYhhMZiH7jqi27g5FvLsEANBiKDbiSwbW9gMrh5XrD3J45HrfQ",
  "key19": "5fBVqgc4V5bA44uEdzYmMRoDuxKwjmQGwpJz7d59JnZXkZztFxw9hbaiMqn4GoJY7i5aGSNufSqdVNuk3UY4Y8FJ",
  "key20": "2TNqXQQhs4U8Jrcfhfa5MwfnGJKTRKwwdRh4Pb18yswvzRrfWJ9wfLWeBWDuefkLvdW2V8wSgG44HxFZEfTXdKBQ",
  "key21": "4p5zmtrz8iEuLHDmB5TzefhnaVhpzE5THkbr4JXxXHgHSRa8d5Z9JVDHdwYHP9yghbnqdmDEd7JSazXRv6tLxRcR",
  "key22": "2eeP7JndvpLZ9vCq9cwHHLJ3ziYyQnLzBggUdDrrMmiPq3aZUY34tdYJA5ki1pSRkWDq5ukUzdManWkr6ZCYAtKk",
  "key23": "3AVzLnzMSSWv1nsqcqMi2c4WAfuUbmwM2Z6ZZvPFAPbQsCVvZuSZEJMQ9p7JgTew7r5qgvNy3Sdb2W98Z7MBsdjx",
  "key24": "LFcidVJ2rdsxatjZFSVad6pE98FdfafABkaAe56LkxZnWXY4sqzDtBuUTiMqW9uogTVQ8dPYUR2QmNcv6XNH5x8",
  "key25": "5D536hipfAwwSpXB992r7z5TYSfVcdD6fxfKHW9ZAHFskWS43yAFvzmGPZnX65Sw1KbxTzctWzLzJXYti3Er8ALK",
  "key26": "3dxT1PFvwM1oZYBCpFcKM1Q12KX9RCrx1GGQz59utKfuK3dADfPxNBmthCYKrwdzphMW7Hnx5XTJLqLfmHU1113h",
  "key27": "27QwrHhhJWKZD9QwtSLXBPuwERxCFtctukoUAchkKnG65wyDDySW7wXk4NFd3kRMBMutC8YUeLX3Xq5fN1YaUWvw",
  "key28": "4yNPK1RHR4wTu3uRbu7P5kta8yQXF5qWjkc8s3GnbmE2YZXcKjhaEXh78ieqGUUevpsvAkjJQ17tAUuzRiy7JaPR",
  "key29": "3Z2sXVR97oXxqgdT6moavxCJNTiDzd2GQCTegEddrUHRhzjj8oGarsfgExnbjMvQUPahPhXqeRDYn8njyv7ajhEM",
  "key30": "f6qs8RwBaqHzA7oN43UF8wMjwxajQkiHNhsHhHzaoQgMAh34WScvTy6oGTyKjz48ZkuGCCSyXJd2bGbP1HcnHSZ",
  "key31": "24ukeh1o2uvssRAQfyAF44JBp65gvczhmVkmS8MNrWouyX7CL7SxEbKa74JqiyguM18hY4vZUaf4QCeDwdgrcmyb",
  "key32": "3YLBgATfuTPcYmPTmhWY1x1mK25erPEVzgNt18cGKHjUzo89VUYF1b3aZrGB27efjjQ6SfdZ3Tyi1AbdriQUsPEz",
  "key33": "51aX9QeHDeoowg8FXBXCaUUxN2D4Ezgho2nP6B9GzjGhXAfRx5GiQUF2pBFGNxF4JmxUc7y5RQ5KpXwBDuB9sVx2",
  "key34": "ZECfLDRJJGmjhXvbMgwxfzdmxqWvPetTVSkuHwTyzfirbCfVMhLeYuVJ6yvDcnMjcXteBHTFAVooJPG8DBtoJJD",
  "key35": "2tKfS2wasUXpZAxh521uDTwsvXRbGYTyZuep3NjEtL6KqzXqT1ubbT6wTsBbxGoxMBsJkYc1B3yk15GXCfT4vxFZ",
  "key36": "4sXQVFCHoxpkKCH7yaid7LHMsv8iMxC9TFpsQdecQREpvRjzYwNiS7aj2KiRohybAqPxL3RJA1HeQwfQ5Z8qTf8V",
  "key37": "2NvXVhdzgf4686nHjRBxGZkUcnJFtSDE3m2NLJCCsgSnrD7ZjVSRFmCQsy7MDHbof8AWBhYEbje97L7QUxPAkCXx"
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
