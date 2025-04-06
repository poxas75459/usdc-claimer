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
    "645fJxDu1RhXRT2iURgKC56LXL3gazWHBS3sxMMu1jfHiJnYjogQ3caWA7odT7NKtfxJAjHsUT49njHsxUBURY76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHg7KfjyNg8Ebfem4FMXMHCFAbdnyWLnr8dkNyoJX8KGj87dVJDvh7hJ7DAsHXstkaa5gjNxe5uMMiKuko9cnq",
  "key1": "2GrecGwRKwhyxat1hsv9QaT9sod9YDH5h4DMneZLWJBRViofFPFC7Jm2CCChWpynacDgT7c247aM926aHPu6cewa",
  "key2": "5yZBf47eUqJFLKojvhPbAmYBXZrqd4VKtZ7KLWv7YQe7w88YNhN6HYeKzgf5FsjqsFBRaXSBqHLGhU7FcoTuZgxf",
  "key3": "314fmFejWgXTnk3KDTP3vhNQXgRk5TMhyuDCVwUTnX2K1jAGivJ3S4NzeCCj7ssv5GTwkaNFyobovr9kVbVFpmQV",
  "key4": "5KxcGodkgAKHJmJ5egcDeBgkkhA2Uq4z4jijphd7QhM1fNHwZ3pWKCd6QtcmxKYXB9FbgEFdHz4jFMLJ3hmEGWqb",
  "key5": "3ZiX3aQ5UFZpyikKiDNitw5ssaQEexLWic5ZXP64SRumueKiqNP7NYe56K7GswWiGQkB9mWHsY2peAgYbHvskbRX",
  "key6": "2CiTUotE2gZYDr1m3aZoV4B25QCX4DaUu8mrfcKoiUpzMGwmGMhfb9RR8XSM5MuUzKEW3HDmNq4FJ5R7j7DczYf",
  "key7": "4fZvpDW2AfME7kkByghMV7HG68UTWvdJJiaTbx7hEWEmKWNQ4gX4x9PPTgm7eL1RukQ4GwnCd2VqzMpaEfmZd9bt",
  "key8": "2m6VDoY82nUKx7LZwybubhZUdQkHAH5RA3CniXhBKJXj9fe4xfdhrCr5szTNfANx6rE5vygEgQjfy3bEiDfdGKnf",
  "key9": "5syHDmpxvKKR3W86Jg2vEJB6cuuVxuKEPiaGKQG6Caad9TUFedXLtNYgYsWFxoRL6zWw38C4M377AVeW5KWmafKN",
  "key10": "GRgvFVh5q8hsmYXEnXArLd4ncYALFbnR2L2Ey8SggwbUh34Yt3kyyNmwKgm5USDvNYy81Vm8PySRbsprcFhEk9k",
  "key11": "4X2haBHe8D1JHi1PgMW8a1sojV9givk1BJc11EZfHDeYxK8g1mdRNSxK2M29zX8EtouUNG46e4WdRXejX6KTwkhw",
  "key12": "3WBeLrGSRwSxZGXo2D1Y6JQw27WRKPj4B4TiqZE14YRnyyCt2YhE2dLbSRpFVkJWmg3aDwJnrR9GvAdTLRS1MJHf",
  "key13": "31ewLoSQaLfGRrFiQzZvJ5yDU8KJ2Q88VERLkPT23AN1nBJULvHmFwSM58fgqU8d5viXukWZssokN8Cxq2WCtq4u",
  "key14": "4WLGjcSwQFbh1jtM54GQTQ3xaAFPXv4f9GWUmCag6gCXCPymN2ftPLX93y9CDcf1jtBkLu84ya1TLkhnzfw317H3",
  "key15": "4HhNWH5VD1XXUhLVbUUrPTRjFydzWWTvas3aDDDBEKyMVJPt3L5ikRnN1ue4ZERfStPp7zWEGhgqnnY6jXgvLCBX",
  "key16": "5pfMiWpC2x8Bu7WQLGWgDJh43LEuo4q9n1yNnmFShZ4SqdaES1mcJjLeXd5bZTctM2ZQDhQtcg4tJk5nvBEn5KH6",
  "key17": "34h2ak3cyjVryozFbnAe3XJ38MNVDHgEG6Yd3EeRJkfwzzgZdMVTUeuNEcmVdWPhpWjYgah15VWFM7EV9ctMeYsN",
  "key18": "HrHKGoLvACchLXeUbVUvPTcJZrU1AN5wbAWhZg5LyEVbjM9FGamUuqdtUXZnqMnmfwzyDzo7UmrhSKtkTRytdfT",
  "key19": "3NfULpUT3Zxu5sBEqiy2y3nBJSDoYsJsW2icT6C2yi4Tc7tUg653TdBsZUCbv3QzGCRx1BAi9ubJudQNUVP9qTRV",
  "key20": "5EfVowt7URyfcHyrrCZkP98iuKznPX2pM8j9PbjDuToqffm89oZe9idff1Y5JJTVVYEUJr6B2tY9SnQ4VD7oH8MG",
  "key21": "uzabSJrhzUhHfoUDigsxKUmYGQujAN2UjvhXaJka8yco27EW1xXJu2Hb1eYeVWvXnCCRAvMxbGiXC3FHDoxDakC",
  "key22": "18F591ocj3rp28U9Fnb4CzdwzCKfh6zRGHntSkcXk7jLXqhRaHwqng3fBixiNk37PCZBEsUaxzE21e1PW1cVNnZ",
  "key23": "bgqmgkpqNmivj5JMnohh1wBXkWTACVwJ6Htjr6wfZu9U4iQ1eDfEfkhfpHwctBZRL61FLHXyGxhJUbMrisMMHsm",
  "key24": "e3gp3bpda31Nax8nUwxL73QDRi2EGfpHR5KfsyC8AXiQvXBLNGKDQtLK7QUxqxMgsEMn4nJy5VXPxKZdhuwMfwV",
  "key25": "3igabAKtrQfMafxmzzmNQFEjamihr8GehmuMGMTeFLsaEZqUnhUeZ4tQg5CZokRVEDcMGbum2rBuahdDhbCLa3Ki",
  "key26": "5VrZyYVX61QQgDgnFcRW26XM7b5qqnZq6gEdsrs7C7ZXJ6g2dMBZfsJLyGS41LF38BEMZCtXWyma3zfpNhYKXwuK",
  "key27": "5cuTD9E2wuHUNZ7Bxedhd6jK85YKL5k4MsW9gBH9QqfNgWZZpuVwE2HwuFTtFiA1rqJt6ci3P6hFtuMu9E4iS5pt",
  "key28": "3Q3eWhBv7RB4kc7oFL8J7GcgGbF8St6og1tZsWfhYFWy1iR1WzcqDAzkrHoSRZtnzncAmBa35KKgs2i9vYwkUBFM",
  "key29": "2Vp6GfPNLssBCzozB3AWuP6vUkE4fvrXcQhUSCRq9QG5MJakBfdhzJvmeTDkwsNinKJLEHAa1MGpuJrJLPXmqCpx",
  "key30": "334EAAVVL7gZuP96q7phnKA1gBLhMj8bT9P8fY7BvDM783SRJX615yWiMJUa5upkj6yh9hmKvunoXnE6aZrozrbs",
  "key31": "5QkTkK9bprNaKVtKNVeVNNuxNst7DTjaWJetLVByLXh3kqt2VRmMcJ1NJuzq4DRdDQZDeDRsr9XZ9p5fRWgtXMUe",
  "key32": "3ENoNzVqtaZDa7Kq1DtdxkRgXv44gt3xCnD6eXumG1EvWn7TdDRhquWJbyZWgyxYhn3X8sCkPgPEPgYFC53gB3MX",
  "key33": "64akbBJACfr5nscvmRmURcSgUoRtNdjhqAf4dRDAYWevhtHHZf2u9o8iNH78FkDeDdKXeqotk66mCFeTqBayPL6C",
  "key34": "25W391PZ7W9wmyn3VH6gaUH3YSywY1z4RFCNb9AkPuFgaWEUAj8Mu4n71M92DC9TqhTM4cuvq7ZyQiVvZ1hfd6Zx",
  "key35": "2FDYPxdX5sEf5SpefoPRAWEC6ypwdViLuuhUGiR6VERTb8pNxLctogEXBxfwERVMwVFuoYwUMQHNGaNH99h9GeH3",
  "key36": "nPkW2Pg3iWvVHSsYcpc2gz2MUzhzwMgQLKa2j7dPvEsYoYr64esrcKCuvqKweV8ApyiCnSJEee3BvR9nY4ofYc1",
  "key37": "24GJB3iMGCmmkq7rxk4aoZDgtQXExL9Qq2iMXkM8LjULwjpmSfeGP3pyJrta95nBBDCv3hkH8Hd9Q6nQuCyUFGJf"
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
