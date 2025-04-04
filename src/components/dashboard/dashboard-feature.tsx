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
    "5RBW3bw9GMzvtSZsM2Ngtuzcvr6ojjp5fTwMZj9pDrWsnCzzKA2Ezhu6hVNM1DD1Ee4ckmY3RWNkktEcQ66WrHF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Mu3ANVoGJ5XL9Bb9JkDqHA5dTUKHFSJtCWqdxLQhNBvxhERqYMWrC15QEwgCNNa8KPbQ2hD1DZcQuJeFqZX4FP",
  "key1": "3xYZcdLCTif99TqymDvtQodi5XezoqoHqCzHBS6upjJE8oZTJe9peytyGxR4CvfZDJ9jVa8yyoqgqCgN2LFGFUb2",
  "key2": "5yHgAuKQ1WKpKTq8mJx9ZKPS9b2kt37K3XzaPRh65YY6PHZcnGPso7KYwRstsGZbUMab9mjnpWneaDyGtPa3vZob",
  "key3": "257dSu8QW49yoQnMHqF3F7ayu5VzqevRMUBVv7CxrKipdPZLbLLxpEN9MhdekFAcc9W7zCZNZKvior9tCxSfweum",
  "key4": "2x8mNomJ3NTFUmK1kwKDSSaEYDTygPQAWerr1VG7gSFd6TJqCrJjU5TZSjc6iFFoq48TV7RPrmz4i6kvcUEtYEyc",
  "key5": "3eBhps27b8AaFKXzEYNjCFub8DaiYUkxTi3jar8m7eJDiNKqrc6SvnGZnzuyKXAswV5HaVpZx1zzgp2GQdzkC8Gg",
  "key6": "65F5R4JZ42S8izaquEGxiwbLuyYq9aomKiUAG62AdxJAv2Va4z5EtwXL7i7Vu8eJN3Z71fALgJ2AdKMfbyEmBdHQ",
  "key7": "hzs4BMkH78rmXdKLCYMzaezVRdoW2oNBrV9YMaVDH9cXcJ1PL6yKSMcgGpUB88rQw23Si6kJKu6Fs6AujbTawZk",
  "key8": "5Biema8iBmVPr4CNZkMo4Hnr4zTfFxE1RTXpdhfRwiXkBhWvqhwYcyxuzVNr9BAzhQCX8aBHBEVeo7yE1HgjDnag",
  "key9": "V1MQvQFFZBo7xm4uW97Y9UYRXPDSKXP29BVnY8CCr1agFkkhAKHNqt1J8hDusSSjBmrR5rann14WXuCzjk7tVTC",
  "key10": "523nGz7shPj94VMwY95e6VCk43RDPUzKZvzJNUA79EXbhU1EmrbCWHfsN9kWf8CAcWyJforec4h2BQCWXgtQGYiQ",
  "key11": "J2Dd7qgLFc8M6sJv3UpdNF3fYwafLzMAmzfLLJoLjrLJiCJ9KPf5sRpHv5TiFc7CC6yfWzNPtqSg6e9sHdKDmBb",
  "key12": "38Pj5c1wqsduJSrJJcAcVPd3RJofRaKTM5989VdFw21v5ww32FBYSZ7vaUCy6gDRbHpifGM7Cg12uYXHu3bXtvys",
  "key13": "3srnQcmcXMCefM5i2P46844BMS4P3owLmkxcVdS5wp7URAUkBQA4AG1bqP7yLLJ9UR6H4HpSvFJHNVRUaeDVzc6B",
  "key14": "2uL9qtcgtcxjctWZthAgTq3NJCHTkh7g8CaUz7hPtDcP7SRCTHG8LXKCVp2pysby4qDuneB4F4UHgfQwoJ1Rzd22",
  "key15": "4ikYgJv9MowaKmMBoz9rr29oZDTGpWaL2UF23idRRtfELReiC1uyEabPNWYywDnvr4z7MDLjx1KqLcdc6mekUjpU",
  "key16": "5V2RwMc7ZHokgg7ynJXgPyt61z9RRECv2a2aQ5tqvadzEkQTdYGTcHWNijHuMeRtZ8SY387sC1ixZCs8hTQmzJA4",
  "key17": "22qJd2skoAnd4KrNcSexwXkK6sDNL4C4yGw1ebsGk9NvDrcrLgQ7jQCUQiLPZTH9XsX6Ym7SuTizoo35DiAXuB2b",
  "key18": "22Av5eKbBUzmFaK1e7y4AJy28Bzuyu3gxFGFhnNW6ovJSFZ7VSziaRFSzZVGk81W4J831MPbtCBQJLmcKxDrRjc8",
  "key19": "3xwLi3H65fzM4VhQTpHknmPzaaY3tAstux5RAWQxDPk2vxQ6phGkHSXoMNN5CkxXnUxvGicJBRkAo7ykqA5j2SP2",
  "key20": "3CqNDY6CbwDGMYt9Gjc7o4muc6MY428pwuz28EQPm6hPWgViMtn7F3VNG8MBLqRML3LTni8mZUcwUXtVgpnJCcBP",
  "key21": "4v8TfzGWrx5z4kGS9gD3ZbUyYRcZVRx92hsPQ5v92egiQgsmqEP9paFooWZzdnYHQ1gPrk9ZycoLED8LeCqJ6KrX",
  "key22": "mZgSD8m7tEZkUCRV98UU5mRT1pSCfEK7YmRcgef1TSSoVJKc2eKob3eTsAyoYWhQXNBF3FJF7yzMABdBPRRr6UT",
  "key23": "5qjM2W8fwEbLqV9g7VVb8ZeszED1dyd5viyN9vKFnxFCJuxvX45K1rEr48nnizapAnyrdV4zq6dJ8TMLfaRUjqQy",
  "key24": "43KsmPnSzeAzWz8mYLAC9Vs4YnhCxbNFCgA7guXB7sjnetGwqtxLUaorwm8zMLmjMxnFBsMJYsduqjoxevhuM3W4",
  "key25": "5x5ZvAVNUAbzzJDDPLXCxbxvjjhiNz8s2mTP6CawLMiF4X45Sp28WYMqenVxmgvPzHST7sdkyCutUqtkctUxgMAX",
  "key26": "HrSdKXXVe2Xb55Rq7heAN683cnXgZ8pb4x7JLvXMHQwwqego5UBymAT6ziJ5eQwovSrBV5kTffQsKtAH4D3wR6j",
  "key27": "yRCJo1R8hNevgtnzyj6us8LD4ATUmAna3RprwSo2ryJ5MqEQatiuqZPir5GL8ycTE5LasXFFbjozQjxJ8ASyyvy",
  "key28": "4N52JLmn3n56fVsNoByTethbarjc9e7SGrTuVTtV28wL9ENPYYZdB2aSZutum5zEJ5eKAHrXyx2XKuekEsqDEn5n",
  "key29": "d7PbXSyLsio99FmirVUAUjjXFq5VZLJDU1FjsAJoewmhRHQtEM9tR9Hz3tGgTtZzCFP6kjnoiYLj6ZvMLXWiFha",
  "key30": "4jabGdK2o36QNsZS9b7L1ujEWUWNMfvMcmuydE3LbJTJBg7Cwma9onj1MK3HdVVWwBZ3mMgjgzLAdFYtJHqzcxFG",
  "key31": "3sbmz5zDfqvpYQPHBWt6VPfCWQRB7V75dwsXaRRr842MHqsWnzcHaLA6Dbn9PNXxTDwkA5SPAWzjMssShEvWgH4V",
  "key32": "5XLPcaXLwxr7eT1KdFcj1HRjwTKzcfv8NCYAyR8toSNngNaiWSMCcgUpWXDi71rLydHN5BypLG1auHqM1o2DexhN",
  "key33": "2PZo4sHUuGLrHXYrAtyBPTtYFYakHkHHzDUZma2LrXXXqzVZ1xDSFQUVTBb2JGwRsG7Ps1SLGLxnqDEXWumHofXn",
  "key34": "3JAijtaLBjPNiuznDFKqBdWMKg6BB4jr2j5Kpbuuse9oAmGP9QLXA3hxtpuGeJiZ6LqrwCrkxXf7MPEMhHnTKr8U",
  "key35": "c5YdeQuqDnG6UcZ41RvpySSJPinNRYs98hHJ6hCVguWWB38VZ4dnBvJgLXmKsA4whKbVmtWwkRHQ5CPMtF3e63L",
  "key36": "2Ja9ZCZWh7qcKz1CbdCQ9gLyCHqfruRkVeiN6kL1XHGBW2axuAfVTZnLiotixzh4kf2BGGrd7mcQ4RiymwtpeU6m",
  "key37": "jpG3ksBpTJYcXEzpWY8XehjJt2U87VhoaWC9LHiC3pP61jA7rYfr8Rgs74LNLup6nj5mTGep17cxAoGJkJq5jYh",
  "key38": "4Xhgjr89ZwQqQFVW6NDypV9bCKiCNq1r4kSn7SAyzeQ6dGbXZayyPBydY41P4mmSsTRsHGXfVRV7CNuNh7Pr3A2G",
  "key39": "5Wb5j2Bi4tQzCK1mPuyRNbq8czCXQYeeoRJCYG7Zzbeptc9L1ra2wByDnHy9uMCSN5HR8FzqpNaQvecm5evkNVgH",
  "key40": "28HdotuX7waaHsaCKEwwQvXPgEax54qeVeEf6PkN2FtFBrRxgTCtUSdNpu87k6QUCgGtq1GDUHZXut855QxXXxvb",
  "key41": "3a28M51CeTE6Ms6P2cYg6wRt1qoqBQsswJo6KmUuzoyzFaZxQgHGZdzJBqmW649fSmPQgbMeR62mPHQGsUVVbTTy",
  "key42": "2oRqw6U5L5p9KhpqvsZxS1yCAjHYikSDPmnqwzLTkdPnK7wGGWQ8BjgeogZUawVi5dPLDJPpPgZb154ciGAKDDmk",
  "key43": "3h3PchkPaRiUK5a3PeUB2bh3qgapX2AaFT3UPQdcP4EvLGF1tRUGrRCUPiqQL3RTn1zwBLHSJ1tbPSVcogoKQ1in",
  "key44": "3898QcnUod4fcwQct8KYqWLBNyRxtdgaHehZQV9XSyK7Jmb52WYo5BVcNphic9WCEUE1QGWSTU81RhjVT7u5C8Pf",
  "key45": "3NPjgYGzv53uy283ShMBgyEQMJoeUhCzoUAhwfdWQoVd4SHaZr3jXNjd4rz41AUidhGtNYFuEFRvKVDKM7doGXGm",
  "key46": "65wHtg2bVZ4fVxTSzBFT9g7nL7cAeJnkVPfSicVQWJi2QmXHQaxqwUefq9aTaVjHrmiDsYgo8rwY1NgN4SKuFYvK"
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
