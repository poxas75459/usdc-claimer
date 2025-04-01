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
    "4btuWQCmgu5o1PhwrqM6myZburJm2RwFYN92ogMZzrG2xT3vYrktJfcGqT4Tyxrf9ra4T6eZu8qG3wKmYuLccVjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDq3teU9aqMnoYzNoQyAMB3xvrqTvdxzn2DBJGNe3syFdWwXHFEh4boNcRmBLGAGSo1cKV5T5CnGHnBMR73DpNW",
  "key1": "4E2pwqkKzAX3U9mSPwKn745VMJf6XQY35SC3myJa6LDWvBsFaM5dRkxppuUVfh2VrE78sKuLjZfS1U2xpTibxxtn",
  "key2": "mCWYLtAus63wZfTWe8YZVhWqWV9q2b2fvFQ7BkmNQSZwL7mmwELnj7wTUTMQQZd2CEjQAXtqpB2v5hqCf8U5hwu",
  "key3": "VjpJaFLMgXBci73YCgLuKxgCvwDkvXMBhstDHWtnsg2HbMDwebbqPTyBddGZbVHgCPxzvVp2nhcEX5K2t2Jx8tC",
  "key4": "4Xkh3bCNCiBtQgRcbAnhemjEumVXTBE6FvMo2b5ZNVhE8kiq6MiZwfcwrXTowcTfmBCyWbp8mok2CeGR82uZqSdA",
  "key5": "4iwwAYXb4WS6S3WXJt1JgjKuq28rGKdJXCbBou81L6kkYD8ZjvCHYWPmXadyPCZGkReX56RXiE2XsQUTWXfdAn2h",
  "key6": "2YmrcpqvLysatcJo9XLVdek37koqnizspW5nKpqqrSamRiPD74UoiDUxGRJeoQjJEGSpMSskYRBM53xBCXeWFu9G",
  "key7": "khPrcnL6xLNNTu4MAFLQjMRn7RShvNb1tEo2xYXVLtnBZLQxNCrQXB7yHKogwHoJUGewvTgCF1e5RET5g7m5kbB",
  "key8": "4n53FxfSD8ZpVnb9Eusu9EhbL2f2XULyBqrwdxLYMPEYvLjquDfi4EBoBvVpPzCzUx8YGpkugoLbbEHfkDW1GhB8",
  "key9": "WaM4Se1FawdYCpmFYpd59bqJDwDaFhrAFe1z4mULVcVgC5v4shgLX5D9VwWmBTKGGjEpKrvCCVR2khAtr2FZzg7",
  "key10": "2x3uM2G5mdQAgi7y2MEKFdkGKHq5Yq7q3Sy3Ktee9hpjhkhVMNKfttSBRRrgyy6RvLmBUh8sPWD8mCvEknd8PfSt",
  "key11": "3KkbtFdz6em53VwkNrxdqaVi27zqSh4NBS1agkgVaKjRVACWubYsbg5PjPEw5g6M91Xrdtw1SHMNzCau94GFFDJZ",
  "key12": "3LTQ8VGEq6MG9JVApdyxHx6iNEtVt1UbNn42DZAxyHsukbVhPrvvp4nhoGAbbGR6BMf2GD6kdCSbBVvYrNG3J3Hf",
  "key13": "2Ym8mmu9MpcMTjToz3NZTAaU6U9AvzQc1Y4NEewPBgG5GKpWZKhV2hQ6KrHSErb6fRrk5RvGSDciUupShaPmPv6F",
  "key14": "3Kp8z8s7xyVJCpyRUGWYiTq7sFQ2F1WpsBkuEo8NAneiXtKaGyx6UhUgn33G1JqNYswTBQ7j928z8Pp7rDdkA83h",
  "key15": "4NjkKh4nTGAUtyDa1E1wiGKTriQkHZJN6pj8hiEYogSiAo7S7ce12PJLE5K8vw4DGWToRutizq8YjYAM2ixhAtBE",
  "key16": "2t4rPZbVbDLGyWVYk7so2LcXVJfxYEW9QpprK9FcosPmmPfLmVAXs4z6drd3oqX8BDu73BSiaQB27kaQ3jTm5Mah",
  "key17": "QRa5ciGT5rxZwBF42TjE94g6ZCTXoVuxvR68LuNXfjphZRhiXw7KfZL3U5K34Eaz1wXC4HitLjrASQLcZ3CugvG",
  "key18": "3qMP6rXmFwJcgyLFzzzQTYjTwJ49Wo1548bvZsnqnUzqS5R8e7wLRF1gFRovFDhsuHF4WUssc9CMyNccLxHmEKbU",
  "key19": "2huA9v7BaAe3BNoMYr7eFHUQccFxLzW5DwnZAFM7zSuZCqjAt4GtUxrcWN4jBsK3TRn2TZwHQh5SugwkXnGt47Yt",
  "key20": "3BM5VGu8v9SUn1HFs7b9rH5V776iNEtSNjNqio6Fc9QLTzcrVRREQE3HmYRjZwm1trYa9ow7m5kcijUJchcENS76",
  "key21": "3XJwqbBDYGWR9C9ZdsEVJHuqKL4AcNUbRw2y9DTkffSV3J4a69d919bQ3oEFZheqeSnMQ2fpxAig6SdJjzFvXvMv",
  "key22": "GLY5uUSXnhB2qXMo5sn9D2Jr85LLm5gdG474LkG83vsbL5tM1Aug2fwJi2UZPVuE8YSHA8sG5wCsDNzvHzuHtR7",
  "key23": "56EtrGcRq66ACMNRt4jSsRCf4d5xiFVNoJghJv5MqLGFVnDHvtjfhN11BcthfQUxAfWbYBD6MhYEcCZrhCQJoMyw",
  "key24": "35mAyUMoyHxuZnemVzhjckxspJJhGFALYq2XUrN2RS7vsQ4MxkKm91fGQTyp8FKPmFpiytEo6jJ5z2cCNavSWpvw",
  "key25": "4aqzBa5xFmKi9nUytQZiVWpMZ5a1PtLF6QMf77LNdJ6Cwa9EaTFBUeijmCZmDf4Uc6SYnomk5yBoYGMqaFgkU9o2",
  "key26": "54kEX7LcmR5FCykaq5xB7ZzNmST9nY9mWqP4PjPCMRtPeEgY4hPBuV6hAJNkTQoCte8Ui3BerAoPDHRokWMb6fUd",
  "key27": "mNvawVM2D3wfidSWnT4CCRDDEsZgPGrpjbxihRvMFmYfHrwAzqTAr3nyPrAnzfPC5jpxaUxXzw9nUf7zt5b9jeT",
  "key28": "3pqfvjbWzd2rXUW8FyegQtziJimu9hdD6VvCqPa48FsiiopD6oTci4XHtokkbys9R9miLmoDuufzPrte1maZprLg",
  "key29": "zTc17hNqHkhrwCQ3hEWfU4tKMvnHUwkHiDebz58hLN5M6xqxnMurL6wh32QXBz6GEwhvuHMwXWencQyK3JU8ThX",
  "key30": "42fR35GqhkaJPyWMDTKinRS3MSEjgUiemQBjyduvgmXa3kDuXD17Lfei176GTe5Q8ga95vTn4Ma28xgLDpwEHBAf",
  "key31": "5Y8BBq81nfLy9wnKMyKa3Wco1FWkPuaJCPzyUHAWk1WXBQkCRY7vtzEDZvCo28o6FqZNGkiroLC453s5xrPpERvK",
  "key32": "3HqCzSuNxk1DFiKDkKP37XbYMFk7wnjuZu5LhoeC4fr9EgDBiaTHx5LjuXX5njseSNJvtLBgeTPUAyTANEKHafYE",
  "key33": "33NUoM3cVERZzgoqWxDDJn9HCgmfEQPGqAsWoL8MRMV36qGk6asnHU2R84BhY8vb2PFhcHGhDtUB9tVkiYn6sZp6",
  "key34": "4jQuzmVyFtV2A9Sxm64SQJHTUNDPok2754xXD6LedbkSBGFUYNgr3tbTr5HE1QkiJaP3mYTrfqJ1ymY5kE66tc3b",
  "key35": "3easMKzv4DXkrhBjsqNcQYSj69585fwFPdzessUbNqckeA9hyBnW5kfQZLvUZWcYQ9NnW6jMBuecWxfwSoddszxU",
  "key36": "cpxkRqBfeFLjQHQmLPHWN69BNeU2BzPyTENPt8Ussog9k4YtU2oYRSFAb8LwrqQbTUXX68CnbKcWyaQaF6EkQDH",
  "key37": "27vJSMZshzPrcgXgbE4ZGJR2kbJy3HKz42LrfbF8aV6cZtVHoMq34RcSeicTtLUR6jfeEihiwBLFqBzn1hYgpsET",
  "key38": "5KQFiub38BgC7XWp4Bb7ToTUUSdBXMyEuQbKD8cDYjgY7gAfqNNf5TfUwuv91yoV65Q4qzhEKfGYrihMeusRNbp",
  "key39": "4Q6Piqp7iWk8fWEh8dSCBHWTqEVA1dS1QW8saZgPRS6naGf13nSf8hrzcPgJwyxcdopRw1nLR2GRK2Xmf4jvyTJk",
  "key40": "MJ3j68X3PziwFoFz2A4ALSS2vvB6kL2X7kyvVMkN3ZpmGPyPWC5iQTsABT7H9Zum94yFBheKRBGNVyZswcqLgbU",
  "key41": "3Wc2aQHZ8o1JSXU8Ho5vrD2DzquC3yMEd6pkA9bUEsDJwG6GqkncnPKK12pap4eCPZdCk3YK78Aj5vCb6GMTs3vX",
  "key42": "2d2QzabfhSEfKw3z1gXpSLmLBni2PWB6wCUbiwGwu2JUmzijzet2uoEhHPQYxWNErXJf31vSPRoQ4qbRzkKL4qpt",
  "key43": "5jaXUuVimxMfapu5XaCjFcPWRwsMY85HG8sq7Akvt1j3kvF6k93yrYcM3YS9avwq5RTg3BikNhYKbNgdUymPx5D3",
  "key44": "3PGCL3xq2iYEbNSHBmpMpBA17CF7aXQJVzKsZPDf7ycv568bMs2h7B464efzLfAfLBWDLDAYUFZ5P7JBkuNPDbGA",
  "key45": "3KtWVRjfjHLbpxs8AkB4CZjmqaY8NWcBwhnd5tEPozb2W7XzgDAou3ywcd7n7ZquKsQA4KiVX2xhHXvdLjMkmG6D"
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
