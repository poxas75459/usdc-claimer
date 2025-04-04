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
    "3iLzwDRF1ZBZSZUyS5wPGe8z783Bk6KWkCpkh1SSnMp1yUnuUWNYYoAmhgGr6nGFkDhX6TD3g9a9826xB47UAQf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8QtX1iaxkeLiohMLrwvqzTzz8bC13o1e1MM44UfAhNn9Nku3u8j9qw4vsneaSdmzXQQVe75GT3t3JAnGkJgmF7",
  "key1": "4nXs4vc3e4uQYT5AhdzvcRoPdXzh9SVyKxvvQC8ovpPVnoujLeRHAQDXPYBtBX9DbYCRD8a91kEA5r2bXy4UiSy4",
  "key2": "5SFAHByjVTJiVX3qiiU4p3EGPKUHKsiA4qCKprvvvK1CZ2Nz6Jq7qzcdsqxDZQxrb2NfgTU4rMpUNJtDH8YkDzX1",
  "key3": "3vqhRebuHm1wF5FdM2UXuTwzh9SpUjdDuUhNMQ86T1G5ma1pTFyhBBjiSB3Z4QGGD4j5qkijyQWeoqBgF8fzp6KL",
  "key4": "2tvpAZdijQSo2jptVZvJjbhk7URwqASVjvZZKDeds6VbpmnFGDf77ZGiE59Kd3xrYFa4Akaf8J2itMSncuDwkbHi",
  "key5": "5oyPnBziKhAXx6DhSURT8VUQdj8pAJKpJGce1kWedfgvTnCSEfEJGLXmXrd55yZ2fpMkBC7pWkEmavGB5Y1N93RZ",
  "key6": "3w6fXkDuVt1qRJsS7Uq35zcM1NanTPtv3hqoPGkXdkBWgs1W5qQ2pkseM7Vzc6dcRRsG1CxvmasC1tFmFzEDDNv6",
  "key7": "2ydQLcfAcySUhaXfvrFizRmoc1ybDWPbHz5sYrYePiE7RPGoRARVVT6zmwdannrRuiqEpAh29hjskjKWA1PwXy4A",
  "key8": "5qLsKrBy6kT7fNE69uYm9Lb2QuqMu4cJ9v3dQaTzjqqVG2Tkm4nGZPr9eJAsD6CvHZXqQsWqxYkfbXTjm8PYXqTG",
  "key9": "45wddLMqqZfNNCMegsR8TZ3cnX33jF8cYkYDcGfzNohTeYTn9sEgSa1k1bpC9KTpTRDZYvJoka1sHa5e7C9PNX5n",
  "key10": "2XtPp7nUdi41fTsGw3sAeDWkh78YqohgZPfXFR2VAytyHPMJp2ZP23mvjWvSyw57QMCGTSF8826PmpTGZWZNz34v",
  "key11": "2E9fWTCRCqWw2auyYkquimKpehB2CcdRWdB71xVMsoBgoVxsnT9K8JYfsnREdCYf42tR9q1vHrb91XQ8kkyxVB51",
  "key12": "5b9iWMqzs7tYTCngyy12hpmwaZye1zYnS8NWMrLvD7syRJGQXtL4oxnNjyfKdriy8RJzfeQrcYicsDzWwAxjg7mM",
  "key13": "4XiXE9axug1Kp5DVPibzWj4GsFxPNv2niBqZjdPSty1WfPZiW6fozgHNr1ht21K45FBnrYWTLWJuGm9gB1vtRYae",
  "key14": "n53xZiLYxizHZJa2ph1kKf9FBrv54p7ccwq73gt2RZ6BMAeVdKijhgh1iYAsQ4uthVZ5Bd8NDeMLKaXFRcLgGck",
  "key15": "4Pf32ZvM3SXWoAqxSKhc3avQ4nc5zqLcfqFfRXkRezkDWhaADfYA6yhASngNgzVrHnHYg5Y3Wtf22oSpEpkPhJFX",
  "key16": "25Vv4vRRmwRGb7dEnoYkh9g6FK8j3vH8HUGZRcYU7WgzeYKrbq1fhh9JbraQRhHQCsgjSXrAPqdVxbfJT7SfCut1",
  "key17": "5hmvU1rpPrh2VA4YP6cXD8KuF1dFo3bqqW4phkUUX9bkYYQUFuHDWkPW88jFs1dqi3o1Zf6qsF2DDghgwSTri8qJ",
  "key18": "4wujRsUZkM3fZXGSeBXVECUGZWttiBRY2CQR8vV6mdv4U2E2g62at2Qi1v9tTtrvQ3YniMoLqr7g1dmJ4XwKWb83",
  "key19": "pWoXMLcUF568XNqtjHD8hAjTP8yaCXEtpYuqEMui7YxmTY1aVJubiFowwpiKrKPPMRo6FcvsW9Ng96F9jf7y4uK",
  "key20": "4drnqn4VL5gXDJBG5oQNc25fJL4sJTvxTotXcmWbfcpGJ95EpJLxEfHgHc1boBircfmCDGFcvcpzTDQBBo2wSS2C",
  "key21": "3ycWunZbPUfHP4a6FuwSPJJCq8Mm85xEFZGbbiG2mEPhUzu5ej65iGMXQrsD9YjiC9G6U1GrimWekApUbEkg8AjU",
  "key22": "265VyRggoWcHh3mZQiJpFCTMSEiduABaaYPsj8dYZ8tCSYXZYL1nP4qPRDvTseczDKCYkX6LueYepDtKyMFWdacw",
  "key23": "4VZF2b45B9ogkB23h2xqtYGYvp94UtDeY3bznWT7vun8fXEh2XukbYP4tkRYDWWjwRwLhoaEvYtU9TMdob5LRcfe",
  "key24": "rSqBeN58adRdLKigwX31SpZkqcJdAxQC2yfdrqTYQFRSywTsqUgWjnFd4Jkxy22PxteVF2JwaPdvPQPYHCqtcGV",
  "key25": "4hYS6LzgX82V5XEsqUo4kRwj8m1jx3Te5evKiRHYNzi4vX8WycStde81hvdQTELe8GD5xhKNkr58mMJ7yLjQ7uNv",
  "key26": "4SqHTz9dKbCqXucWJ3J9oCCbWq12vvZNaD6jG57D5fEx5j9ahnfpojX1K71i7QLdcCgpzmL9jyabESdszcJQPis9",
  "key27": "24SQUhPzezfUv5zcUtW2fxPiJuL1GiCJU517FB4MDFS7pkWov89kFjNNpUqwUzQL4tCyfMr4aHudknvjhusMVNyy",
  "key28": "2xzEdyPQ2XN8F4mR9xVSBTBiEidBZAXAZ6SWzSv3XFqQmBSbunSBs8UiDdjL9Hnr2vB2a2SuQjw9Ge9AQLcu62KZ",
  "key29": "3R51EYSNemKoiuvFrevxn31DJ7trxhLPi9qpCt38SgjTEGtyPZFMY4uTcfAPBuAUWJL545YtM6tCy7TpuNvG2pn4",
  "key30": "28EdkGy3UheGK4j1ZufhXir8Xh3goHMfZDR9h7PxbESBKGH2752Pi4nDjyLKQc3rKxJ2WjmkXX8iNAJUXPyzUqTn",
  "key31": "2wgkAvRP9zbysb9JzW7iK63RtDkhv8U8af1wGdJkpAeBUBogh4QSfys2GbPwGEQXcnyn5HUfPV7uX8pzHRLawfTj",
  "key32": "5UN7zHddYniF8PryCog2KGpKZNgH9FH1fMaj2iW61wtvhpbs7wkDRWxHNcDCziGS9rroZVHS2YyWNK3e5z2T5s77",
  "key33": "3QXXRVKgvqmEtThrvzxYMgmm8SmQcTbh6hzioXuzeaQDYNsBpHVx5WWshJunLigkSrWNGxHzLxJpFdnv71rbC5vW",
  "key34": "58boD1QWsEVsak9GXWFvNJZoRny2V1hiM2ZkULXYCA3mtte26ku6zqVya1nk1QdcRcus81iyDF9g5LGAENpQxR5j",
  "key35": "5EuezZ6UohgMyWPvBadudGrjxTKubUnr7R8DteboJ1e5LvQzZgLLXLNrGke7mnHBsENK2ENeR5e9RbLjUdSqL5VC",
  "key36": "GaUqG5f5Fm3rrk2XiuNCHPSb4iybEiBjEhHF17EiFkaQeBBGeKduu9x4rrReRNfqK9M3hLMQn85inW8YDs7dbYx",
  "key37": "2HExGceU1P2hAXUZ2w9k7m2pxmnmfddjav4SFqTSRuT7P2VR7Por5K4tyn9MR38gv73VaYCfJMjVqFa1jNEuZSMy",
  "key38": "5kS1wZLXqV6f5G6LgySjecWa6dtLyFyYCx7Fmzn9vahxjXqdKedpHxS7yTZ5R6y9cpEE2LozuD9cRDFGpQqW4F3b",
  "key39": "4NTU38VqkDQ5Ce7vqoteQkM58oyU4W2bpSoDXe5vHAkvb8C8iURgQuv28XfvNSpZxfH5xVvxkCxgD3sW3xE7DdmF",
  "key40": "2rhvvkyYS7RjfiuMvA2rPJ3sXFzoLZiN5ULbujz1ARMZgrAbRW6gczj7nxsaC1qpq2jWySME1UPRYc8X2HPAar54",
  "key41": "2enkkV6t55U2KMYS2LDW91kfi553VUR2PbmVmeFdWSu9ffsKTGokJZCNMCisT2sZK6oXeHB4sgiFSc2njr5BUa3H",
  "key42": "55U19RshorSzucnXFFtz5qFDjfuRHKEusyktKMUaiZAJQUaRZ57gMHb86YsPPDYHbH7GZg7Hih3sWEaiURFzZa9g",
  "key43": "w288p3WxNhoMa24P6c9qhReTgib8ekSuvCoXhBZD4sCQtoR2FDnrDBw2LpEzcahAP9ZocffdacfL96noxjvXGc9",
  "key44": "3BTaRLnPcTHL4m8gjuGCg9QPzHK12FwVvM8FRe21QNJfAR6uA3YXyH3v4MjXeqGN9VYM4cGRCiP8cJoabTPyXGFM",
  "key45": "mNQEEEb7bHPRKWKkTeuon9qR8pbetph7zVMqU6eujGvVdXtUjnb8fjKc5Lp1D6yMG5h65gfDwNYgkaXpEMSVbPT",
  "key46": "3tP5KuL4gTHGXwrgG9sf8rYZ3wWuYTxmM2wnv9oNQj859vAGgaMWyjMpPEBzKVcf2RKci7yXobQwumdVJm5ecYHg",
  "key47": "2T1UH1VxoU4brfXwERgnC6MuXgbDgTmav6MhLvSxFdA5HiswAHCAgFsJCDueXirL86PudDdZD5ecCBX426ANZY3d"
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
