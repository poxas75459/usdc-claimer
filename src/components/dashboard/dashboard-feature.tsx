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
    "21XE69byQJqdUb3SnLt7g5YoE9kYrZRjhCiGvm7korPYhAyW6RQedPCBqDtWZu63TY2KpHzYbZigyNfmGDAT17SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bv46FEgBNkuu3ziXHhTbEKHtXD6ywTEugCPthbeNE99x9yt5sgGpx2ToMY3Yt5QV9zJjFpRK7wH2wnsWqccZMud",
  "key1": "3njPN5vTdCpFpwtRXZ8VzubTeVXeDMkQLFqpsHxrq1BwkX5DVJ6FB84JvGShvc4KyxDTD7JE6ZfSNrj1Xd66h3M4",
  "key2": "4QtKSifdQazdKoUG7duk1twZ3CBcsDNmeU4X4y2Wt7jcxGmFyKQdWLgBCvzekYv75tsdJCRkyszpk1HkbgFhxDB7",
  "key3": "4Sy6AdXDxz92iQjdi98eWRrYmChVLritivYkGs7VF7DjcYDDLkY5jcQcB8VtFd6t4KtXwHqWaeftgHCFSCH5Bmhb",
  "key4": "57ssVg8uFRNSeAcdf87x6cXyMBVSpvEZatLn3NLL5MqHMS2kehPLxQbsg9oon3uhd2zNT3ZxnCS2G7kaGZBCVq3U",
  "key5": "3ZDncfY5eUQbqapEWndnKaxRLrtE5RX4hN7ttcZzezQXQ7PknRvVoEEeDdMQuc2BRqDfa3j7gWKS1jy1gtS8X4ri",
  "key6": "51cUjP969tfJAbAKPuyvzRW8oDjYRQLcvTcnPwUTvmrEi95TA7Yjh15QP7sKPjgj5qTqvAfMdGkeio5Xunei6wKW",
  "key7": "5NdUWw6hD1DdJyF9onK22MaUcLJJ894mv9C7PjJzBLLGGTNQQtdRrk7JqqMKf2Tdqj2V27bhsRhunBpn7UHXrT9q",
  "key8": "2sMShidtXnjcc5UGg5bHR1YUFMBgiJaCyNJXiMWu3UvjQ13HQm5FSwCkfwiEWfzKRckgiizLqpHi6LLpojYyzuY6",
  "key9": "58wLpRYfRBEj4EfNokNrns5Zcxrz2MgDZEaxKFTyjx1MzQn9V7pQH1yqWok8aEfzHcezkfbg151Q7b53E59Jsgrb",
  "key10": "3vdxb5AxAsgdNcq7FRsZERfVgwCfXvvH8cjtrKDihNNPv5h6geSyXk8W94zeT226P8cuLW7jkAAeBYysgEfD2eoV",
  "key11": "3qXGkdFaRuCH27cFqPe3BehBeJErRhsarMixeXytyycv7v5DEXtSi3T7S7dDuGSMdfYVmSK9aM8CiPsiAn5tMK3x",
  "key12": "4c9k3TrK13JyvqFu24kWpVGmz6Jw4zBb4xPNf7mZVj8LomBfAaWthpRHHhEghVUVQgiPXt5EGo538WK81Dg3XnaV",
  "key13": "5W2diqoELLsUN3eQM94CGw9dNbzXfdUhLrN9bEHp2h8QHwQLRectJDqygr5iw7WNCdRY8SiiiPiMNDL6GDjRz6Zn",
  "key14": "5dDLt6Z1UtsbjG78pD5EP4c5jYYjnjEpGHZLdMHekZymE54M2QAJ5pzrDH9R9ZostSQy9EvinKsgmy1cqDacRe9v",
  "key15": "5FosE7rU3kXQpux7FaimWknbkYUPKJwii6c9naqRfcCayUKCGVtmYxhhtAkr9bdruiXqNeWDgfnuYXuZDGCdgNQe",
  "key16": "3LEgZRTqHvsdE4T6ifSpauMBKDVAbbhARH4g8uADKRRKuVTizArhb65WyL4t5ePtKYEsvqR1fJ43MXWHeCCL9LxY",
  "key17": "22Yhp34DjEDhc2L7iAmePD6vWVAsJcyP9aDvHt7hjzooWZR1htgmWvrCwMHtPhKhELXoHB5PpXf7JiMJ5UuSqELH",
  "key18": "52eXG47qkhwSJpRsPGYS5YDKMApyKBNCHirwRypNhoCXrx4ATyjEU7pgk2YPu1puXLtZGhbexppkjU1DuTBLXxC9",
  "key19": "ba7hYj8VnR77yAzARXuJ4G5xHUpR3TouyUL9HA5xTv4T8H5XfbMckSUpgMDtwJ4dNBANKmCXQZJNGJU1n6HSXZj",
  "key20": "33w7Lwo4zVmgZ8ZzeWgmiBRoF8NeFpLs7m67rErocbDPggdzs4qd1WuHwQYvDvUNvhBjVsqyjUhEfTMXrs4i161Y",
  "key21": "2NngZ7iGKTiFvRLvfPYDBHdokqYBMVc37KoTmy3kCopqF1TWa21Gx7Ms3xKxzqwfqNoJH5oZtLtocATFrXBp1BFC",
  "key22": "2KyGe2n7HoaBbJkF17yCopUGUZjeGxRpwEb6oFke9Ah8bSZg6AXz6zRxxCemL18AU28rnvrqrgdfzGw4zoNdgqKF",
  "key23": "4WSZZrespQRvFVHYrZHVhnLcRqfZLmU9GkGfYRpRna6831CPvfU4L4vk3CZRUeT7aCVH4qxRv2RAz76c4JQcUmW9",
  "key24": "322LKEDEFQH8SYCVF1JJKjkEaK3p4nbHb6NvFrb1kPyS6y5okKEDXKZ9Y3GpEa9j8dg2b6nmu3VPvdJkUnVoKsX6",
  "key25": "3vufuNB4PpmYLP53C4PRdKQaQR1QKsgzWzHpa11utMqsnCEi3fyW1QUaAAwXaJD3xP5SBPhgimdermXo1Vc5LR3C",
  "key26": "yyfyqUBT8GN2qFJmw7vbPUin4QW3W8PdqNTJA5H1AgHQFGh4DhBgdzK8JQ4zbY1aqDG7PD6EdVKtU15r7wJyoPK",
  "key27": "5ekTR7kFod2AbrpEtDdpsRpuWXLg8D88K6MBmivToB94TBFJC3FxCjhfKiBVaFBCasSonVexp3CTrmAoikUxWs1s",
  "key28": "5CFPmuPxiL381k1SdXXyHwcJMKg6JghwDJgBTB3mfkYP8ogH1N2ZxFUwsZTrKGnE3YBdDehLtxkvbTWV6ExFHpW7",
  "key29": "664PUo6q6s5SLZXCeyjcerDYU5eBSMoGJeFvrm8AWdCfi74syjr5rkYxBVztzDHoEQ6wiPcvXVXbiSVPbJArKzrs",
  "key30": "4t2DVb94oJU8CpvExNfZ1FTCHusZN3vFWvUQejtRRgoUVEQsFjWRsAGUcHZaS4gADHsYktmEwAwHxnHhoGiGcArk",
  "key31": "3c298azgpnomK8TP5GEF44ZUHPKzkcAQUPuVCQiYJz69oYLo2yvwgZ3R66A4HpYaDxMXzNmzECFxcc2fBWPJmDnb",
  "key32": "27CzQEvcxBv3zbBXohq8QyFScGUXdGhLFP8GDZnWZo4WveqUVUYNAEDcytHD8p4LgqCuYL5MwD8CPSxiBYYZkARi",
  "key33": "3X48fHF6fminekN5JMk5NVi3QrXrdZiEKu4yEtW3ZG53HZ8xdGyXzQ49ySavnb4wFoyGeS7RJpSoUsWCMGk4m2zE",
  "key34": "4v3QSerYhTQDgrwDTbe75XT72zbAezTAZwRyGPrAAUvMjVe7TkGUEGcTKhJF9BB9hq7jbforzCNr6Wr3Neh7H9n8",
  "key35": "2PRVDsRzMSUzuRtjYfkr69mVo9tgZJKBxnS8MNkwD6szSXUfwD9pY5LFHb515dySwmhi5PY3QAjR9ztuddNnZuHA",
  "key36": "5crczP2nZnkEhJgt1z6ktUh3KeJ3apf2K77QMuNN321s7SMh6vfsuuiXW6bAukgmBfsLA873BAaWuKLmp4zQmhGN",
  "key37": "4DgJCRc1yo6et7vz97jRsK867v9JGcoa7rTGTbCd3UWzsxpyP1xvYL6yxp4pn3NhEdSmeAcr66EL92GrypChnjVd",
  "key38": "39XLyZNkRCGpSt8SZQZ9uJ7ZVvtaP7GoqXWEAszSmRb8bwn7QqS8Bd4Ew27MbFGwdJidfkyruDyWCMz74LX3Nhxx",
  "key39": "4AfATjpaJBFM46Dz6S1gvi77KRDSa8z9er96cqf3YfM6w8TeB7PBYWwHgYjCwrEf2nNCvaVWnHCHSnLNT366dPGX",
  "key40": "5chm9mGxMzuAQk6BritMrvH7FpQ4PBrx74F4zutgytqW5MHwAhGgGtFAqtWNEM2zcQ7Dc2JjK5JjGHBnW4nbBEcH",
  "key41": "2cmZdckqUyEAqBypAzBc94P9XTdjW9i2Sz7fP93W8v19A28grUKNxeqcB8brVEaDkDdBxkVjzktfsnWfFuuDJcN9",
  "key42": "3uyAy8n7CXtYuPpUXxWM2jXWoWZLrtUo9YaraXuvvKqzL3jmFLixhV8ctbj7DJnNc4ev8oQn2HHyZ9JjfXtKegem",
  "key43": "BbWYQx6vWoUGThMGEwBxcdMSQnUVKtn1zMQbrrVFgUVZexijuEKKKBF189L867NViMTvofxZ9FyFfik8En92bfx",
  "key44": "3FHo6cN8DeTCJVhztQSkFqwttjDuj3qWzW9D2Akz5GnnyFXmBF7mitDSLm6SqHJBgrhDae7bhPQF9G6m6iBJzVa2",
  "key45": "4thPqvSHT1VFaE5KRBh3BBdc6o6j18EKrBgVbwuPeqYPxnv1RjRsqKKmkAV7s3YgTLzM58jykx5bSVE9TjapYnv3",
  "key46": "5gXHgdwNUKDpCoBwdioq6fGVRksKW8pzktXnRW4rYdq3FaWUo25g1c49tz94ti9R6FTxevsbYyV6HogqeCzCkCqR",
  "key47": "663eYZB9byJYoxgm8Rqye5incneAMh2SGUa9vTQSm4R3q8F5izb9RsiyviGkF7KDwrtAZtcsA2RM3oQ5VbADtaMu"
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
