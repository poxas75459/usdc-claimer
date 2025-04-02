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
    "63miZRSCsLo63ZjqyKaoXxcnJZMBJ8zQJNyX9CAqUjDc1qVY4te6bmEb3tQQ2DoHViKyd8fdTc56ZFk6vYqosQ54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tyo8kGyxcHEqhHGqSxiKq3AtCcNGjdxvdnuhf9n9HF2hxT4Jaa8kci2YTfvk1L2KQ3cw4t42Ae4QeUmJfrGxX8L",
  "key1": "66CbUqTxz995ezo3JH8aCxqS3gD9q43Tq8y3QUxGKtT8ywsJ5FVcpi9uY4ciQYZsHhDTW9RA5AW9Zh6FE5v2mjEt",
  "key2": "qanhvAPyj8kdk4qBvNFS3BNm8onhb71UWXEiyHVWdPESXqr1MZDJsqtqRGShpVvasr5tTgXqV3KxLut3QPnQYtN",
  "key3": "4BkuxSLpuyG9cEyRsHS52dwZaWccPDTFPzbM49hUXnBMVeVaAPiYFouFfxY9DR9F2WhrLd5QAkTiv3ctvqogshZu",
  "key4": "62ZAoW5ovfk7Kr97BKXZqim1qeMfxoxk8wKA5NdumfSVcRJT5UfEMJanocTFDoo7HryUw7wUGsSQvYiwtGauKK7N",
  "key5": "2imMERhw8MAdxs3DsVP2j4SGSSscrBeeGdKEBMWX9HsDKofCjjMQZ7qm3mrGKhn1UqDcc3mt5HfwSKRcyMvywBGp",
  "key6": "bWbTZqYhLtvHDPDKbsFDwyRNExfBwQ69v4K7hWSJfVC7n3GGEDGxEckQb8wSwYCtbH1yQH1imXbhiPyK7n3989g",
  "key7": "5XLcrrFcM9LbFhaxWQhpdSEpYsmbhvuChBaNfJMmQEmrY4HSs4xhQDNNHhg5ytcYFyAstbNjLiYhKUQ3aVAwwxMz",
  "key8": "5mytmVz69T9HWF2nmbdZ8fXF5vcFPCYd5NP5FyVEt425NGoDgcpqS5iajSZKV237icgStRUYMQbFSFYysmUvb7n7",
  "key9": "3gQcDUoepRxKuZhNpvbZtWrJbmZbG4JAW938MCeTW9eBG3V91WQBzHg1mNFtexdxdww5LGCvgnKWKKdcdzs3Dd7y",
  "key10": "3YFubHZ9FpdYT2JVyBYntcSBrWxyEt3AH1ZRS5pE6NuHxX6sqUbJbKEWkEgZgmDjwU1bdESqwBke6BeGEgwE4f4G",
  "key11": "2pERxhSWvvDzznw48NGUaq9SYuPmDCBM3NQ3bdFXf5MQiLA5yw9JFFcZnbneaeRciBozaesjBTnNu829mPXpYXhJ",
  "key12": "2DQT9ydjDLZ2nQ9igGdAz5Uc5LuBxxwHUK6ohmytDjZX9kC82R6kVGPdWRCPB4mtHRz6kiVrvRF58mLVv8BsVqrL",
  "key13": "3k7bzDBiqWkw52CG6Hb4yDg9vY6yTgnHrjmKp1U2GoZpDqPFb7bKDiSq21h6AaFwM6RPAfdr5fMHRBS4xJG5tbVE",
  "key14": "51jC3B7qBRAi5tCEyYu2G431pRS71Jpwbrv2ccqwTdJm5QwEhPWMN6D9PxZHBUsSGb79o2CZcbDZDb3NLimZMZbM",
  "key15": "5eeVAo7cEMesuDT5QGRLVw2DEk9tNG2Ct4yehYV5cw6q8eC7ZcFobQCWxaBESbEZmox7PTnniZFTdREmQesxbgqV",
  "key16": "5tHwMc7KKQQHBrG3LHPexPqfMdPWHLjfjJjDD9sxu9jB1pqKa9oTXpSbeHomtFWUwvv2Ao9xWfL6vibYAazTwVaK",
  "key17": "3rP71ryAQAKvQyv6Yy3ekU1BvRw9cCYBjNT6xShXtfZ6vJTjCGt5RPfdnMX9UxuidRRuFoxehu1g42YVoEZgxn5X",
  "key18": "5FCoHGJNruVh28ycWjeHLJHKQjErqtDHAo9BuUjihHiRHN3i2YGsBHduvLifjpP3ggQHNckXEiwQyDpu8LwewGG5",
  "key19": "2AynN4ukf6fziY1J7kunKFqqb6qKKgU3nBt7TNkpz8Hqx5zPnPkk7t1JBRFHnUKNS8LW9WymnPi24mziHCnrmrfY",
  "key20": "5DHZfCo5zg854dyT4LH9MZd1z2GB5rPojuQSDDaoDdEwyWerBFGu9TPyBAQPLahCiehxQhC9XtsAnFtZrERByhCQ",
  "key21": "uBpnEBRks8EKGGuDvgKXCy2xmyD576hpaXpADn1pqxAyjN49jBCMMkfyvUZHyFHbMVNDFnvAR6A7BCutct1Agoo",
  "key22": "4SLQXVFSvyXxRqkg4vXDK4cHW6nwaQRNaLR6Jif61bdd38dpKTA23XWoNazAcwaBfMVuu55eY9sYtDjcYWU8FiK3",
  "key23": "RRcgoyUNrmiyGkbzTaiAdwidFG9EqAkmFX6cwPAhz7vADjYPJaUrCuGkTDgTQSBEV4APHrcuWWdcoySb5YVmW3B",
  "key24": "DD6GY2xmBuBkrCwBkxBh28wcFH4phTxKAxRCr5pnxXVncwevNkNNMgxKKjmbURXpSb9DhQywKXV4soVpkxbHxiX",
  "key25": "5cbgDBGZWjzUdwVeEQErGg89mbS8HpK4uh8E3v7ETe8QTLUZ7jCd6geTVFfBm4cMqQgDEzAhMUhhKvPbLyS3VupH",
  "key26": "3vvLrPWPLUGKSMLNGfieoPyS5H77Qw9t728PnS7BwdgFhQFdBzQjUnoZHxo6fNYvbKMYLtZgSBkDHxp2baD7j8jU",
  "key27": "3JqJXiiQ1Et2wdyCqNFV9mbJzEieCPEfcDdLzdvH56xYGUswTE53VuxRDysLPnQvqMWSafAjDF9YyYBLNPbwA1ed",
  "key28": "4tLjgVnQFboTbTxsPrCH5ABT7qFRus1BYdvWpEW53xq3QhucDAixazeYEstDGbhW2fm4SYA4s5YfnEkAfwgSjuWX",
  "key29": "oGvHi9mqkHuRGmzDESNkZsEiDuiySS9AWsXBfcGgETJb7u3vEz3yjtTUdSyM12aypzA9tc2LnkFNaWoqhhtJWnJ",
  "key30": "YDPdbZo69H9QN72LhhYzG7z3oLgYuXu52uXTVHixr27dyt3fKRdk1BySucJdKpMjmZs93LPtGtiK2vueBce6W3o",
  "key31": "5KrYqN3VcRyNThStDtFwjLX87DBgdYgNX7drQsvqL3tMBRSE5bZc4V7Rua9aXqdhX1HWmP8vMDLxUfLCMbtz4sAY",
  "key32": "3n489cyCraBnyoH6rKS353sCfNuDLzZciqGxKkwdBg49ZXzNuz4YuCEhSNVxv94zyr74tyBk5abUyRuLV92QBqeE",
  "key33": "3n7BAZyp4br4NQJefpS3FepZBf194gGbJs3mP8buZPSAQhciWhMavKLkx3PhxqzGRkZWD644mwkmc2CAjS8AbHKL",
  "key34": "2ZDFZsDcyMCtZzgffPfU62L7K2toeZLH9B5Wdpud3CRqf2grAKgdcFE6sWiAjyjdFV25vcwK48HiyCYx7ubE1Lmp",
  "key35": "4bp42UeeJhZQgX5UdLsas4VNQArwWBBHh1SFHFtDhgqX43gL3FpC6ttH3Pzd54pzDL8ABSKjWBpdpAGUSNm2Dt6q",
  "key36": "47r8QA5sKb5Y3hRNiKWPPA8ZFpHKP8VYSDtqu2zkiUUWuRs6cmAhsxmXWkDwRdzoScpuwTczN3mc5H1UdLYPTVAQ",
  "key37": "5HUX5gtkCpm2DSxfoR9wXqBuWQukthgBGzdXPyZr7G8Nv6F6Yn6UewM215cPRdABkvqJY4kuUDB7fRGyigd1xWC",
  "key38": "61FyxKfAqiydoN4HW1vwZ5jhZhXkUAyUW6BJuMmKDx1Ao5ZHAXc1JwVX1Qt2XPHEnLDNdWmxXc19JBU1ZcvAzanm"
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
