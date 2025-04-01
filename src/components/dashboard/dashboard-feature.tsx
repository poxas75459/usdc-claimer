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
    "3ndhfN63u5Zw44LuQrSa8cKMS114YgnvSnVkimVe6hzLLPt9WYecNQ2j8Vv2JfS3XbyPJi9HTTWmrudA5gsih2ip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmAZq1VV7qgQyRGpyq2jNzRc5LtPhxeUaiqpfK7n2qcqwQC9qxxP5LUp7Br67redtPnYhVp5jxiYF4QQsdDdkpv",
  "key1": "2abDK1nRXQSuK92voRQsSHkm3cXD4ouCXYyPvAQtHaA6Fwkkhsjm8cWT8utNz3z4no8yTGjsMQ2qVMMK3QFRKkKL",
  "key2": "5N8hkG6mg8AcBsE1z94wH8AebVXA13zDdB8Jt1r8fdU1coNaWHbZ8bGRmMenqAoMCj49nJ8QaKQBoR6P8KsRzxVU",
  "key3": "opcNidvKzFFvejS63cMAEo3AVWaL9n1VPeseoKvZSujrqDvB4Umgomb5XDeA73fdGoRmLhwUZdvjh4MNKw4a4Sf",
  "key4": "5H7Wr5kJtRBE24ckyC6BshisrEx4ujkoryMSyGfPNehdvkQhyoTpvdP5xxLD3WdGLALxM3nn7X68mYsTNHQmbiTY",
  "key5": "3mZx6PQgJ9DChPxVSQAoD3dmnjzi8cmriWCMhEsVwirEVNkj8YSvkLnp86Uzq7H7y6qzgCv6ZUcE8P2TWThU1Uzp",
  "key6": "5HY4Ykq4b4kvTECCWnPSvaMk1mYnchA1M9hgFWgXyZr9FioxZTkA9YbB9p7VTe4f2UJX3pAwUMw8UvZnvHFhKTJf",
  "key7": "4AEWdBPatfGWCmoUSvpUY38oWbHTfhEZeSvAt433P79GgvR2BWMSxqGjCb1b4SqjrwmJbsrST2bK2Zg6ifNaR8o",
  "key8": "3utP6RJ5NeoGEYW4fAdJSq2hCpMCK2g3sHTHfkzDuB85fQLKBMUjYCgc2uB4P8RbG5rGRdX3aPcpQFuGdWwrWMfk",
  "key9": "4KSF75VGxJHZvYLnyGPdngrMwMLPqYKsb4Wv1GiPqg4k6gU9sedfbGsTwJSfaufquTpnJNReCxhipKbSboMEdtyp",
  "key10": "5Ln6HmJdsDsMCNAZA9wpv69xMqCXTLqZg2qyksdsyuKgt5NQuehtjPmxRt4NEAD5ax7cFjucVy3aHS9Gp1CBRjjN",
  "key11": "2avLfPQ5ku89dDNnajKg3YequR6qLrjdPkBQJqMk2d4XT861iTC2dy2Wau9hchWgZD3acbL52BMBfE9vw5Cb4fs5",
  "key12": "4K7A2TWeLGi4SG15EeoGAQK2qqaZT5SfQMvUPH8YVQpFpMBg9KySGJ3L9YuZj3fjTAHR4Cfw9uCW6EVRzEFisjeU",
  "key13": "2GYMzQEs1Xpwx1J9kFVKTT3vY98Fxg43t5Qt5aokfAs7Panz6dEU7QZdGyfY4nyUEG45ZX2nVivdmm8iXyD5h6Te",
  "key14": "5WfiKMWzGmh5BTV75eSVWFdQErUQ8TWjqAceopucUkmZpGsQ91sPAvdDPB1Hj6HA5f5UgUns746ULUQjDzedNMgN",
  "key15": "5CeF5KwidPYWCL1bUuEpuA8uaDsR329KeeSexpGms8HrPbXY4E9zHkXpthogUKUWwfukiGQpEwCAoGBU1HjFu83D",
  "key16": "4nRmBBRdaBPGioRskmo1jpH6BfbQaVxFs4zrCzN62F2hw4omK9jS8tY42jAdnN9UbNHb2WdkjscuPFniWptv4da",
  "key17": "iUTc5S7wCUqbdyKcYsxCz1g7YxX8xWCNay3bXb84kVHPHRYCYdr6qAjijomHq7Y2kmcdMtyp6qeNwjn3XaXe9xh",
  "key18": "3qtzW6q1ke2qbRKZmGHAN9ukhD5RgAM3BweqN7USHX8nHonpFiPUrV7TwKs4uDGmThq34wWGrUkScbpFJCrcsq9j",
  "key19": "4kNPz3TZ2YCLvuCZegYW4FvoJi4ZoBz5hyoksLZfW2qCkWo4k36Ca36Wyj3WAt9aUywVKMvSQV8vMLaN1y2K2bVL",
  "key20": "5UEaQQmTttUKyKBbSTbyJYqzT3Pc4NXBBhZV6UmbwCzoFDQ43ScYSPiVJZ51teXnW6CqruCKqCttYT1XKrnokqW3",
  "key21": "2WNnXVXH9E5JNVb7FZV5KJxT8UWZ1VehPt2Wy9nWciEKouRpgq6CWB8JwDeT8zYVy8uQh7RyyoKDYxDsK5awGo4j",
  "key22": "56tsutRgdwEr6VcuVC5eU9MG3zhhSZ1fRA6D1rTQFWarjNsn72gfbif6dAQ8FCAWSyaEeU5a8Y9cBTxvpsjKScMN",
  "key23": "24y2TSPcRjwAtVKypWPDGUy1u8R2csW2WSMbeTvdt2SVjBjZnegXWktMcRUceyEpQnbW2s4PmxwgvjJDhJ1iCarW",
  "key24": "24pYLJhyX6z2rfdNoGgQv7ZRVBbD95KKngVL2MC3WjNtoPSVgvtpXKtBdq7CwJ6QBtEETWbFWtft2xcj9w3rG4Ek",
  "key25": "5tCpNtiib8trLsWVxMhcDWLYno8rSm5B7c2QpnSheoSBzNXyTCJiAnHpxLBFaw3DXHSWLznPuaDf7CkfX4hub5Gs",
  "key26": "62v9agHUwbSJNBJb9HBsZrE5DDcUCtjywWJnfY937YEUJJTc9QagG889HzWnwkdGyZunCwxZj82xesN4uH5NNg1k",
  "key27": "5LUMPkiP56EQsrF7BGykMRU9YGzYo25UkkBmo2Rv7qCigeGJVxF6jenhB28mJqag23CCsN7cUb47EkkoTBHA5Bxb",
  "key28": "32PHiMYbzLxi2GH4CxwwrwpXbax5gMpCKwWU1YL2VAfgsAacVXhzBRdZu7HSmEQm7xMnpQQRXnPdHo13f3yk1qCn",
  "key29": "PatBgmStEa2LkVMEp5V3yMyVJ8qx7LccBi5pEnSSgrpncjQx6gJSpay3i7jXsmLLkXnmpViRc6em9bVnAtw2MwS",
  "key30": "5iu8LMq8TBMr1jtJsYvsuHUJyYUhQqYF8gsE4vcAh6r77mEEwHXeVLebAoHixhT6ZW6mjeLUmLYkJm6NUKBrWGyG",
  "key31": "3NdCZy432qnq7HxA6L6zFSdHPNzcR3kfRsxCsGxAzURdHAkfh3yAJf5xEWRnhwmQSnab5tDb2kQjMvZQdzcoScAE",
  "key32": "38eH9o8Sh629LtFj3hPYegn8anuFZfZZLJbvzFej3tmWBeHiqzyjZKT8kibY7odNHgfQJmgTK93MzoSJ4jWRuQdf",
  "key33": "4jga5XQ17AJPGEoPkJcAmU44yYeEA91XuaGXD75XyENmDtFhhssJwoDn3RcbLfdvt4HKECinQ6ehpRSVyMGSdbkr",
  "key34": "5M3sEVkVfxvSHukip81RZSnjCinsnhXpZ72ryr6Y4RfyoKavXN5RBHBHKw52Pha3Xi9Z1WyCKwYtendxUvFAL2pC",
  "key35": "63YueAPaEEeCEAUojt8c2Wz42yXcKo8bMU6DtvcoXELAeJ3eeJVwxUnrkUKAxqd16rq5QqS8QJRCtQBGp6gvQLdA",
  "key36": "5ktghiiYnYwPghdTURxViUACJzBo7SzDPYmC1QdtDq2gj3ctU6WcKHU8SxA4xB6dBVgPMfq63HqesCRLQ3n8MUgW",
  "key37": "38McQTcUz9FPMLsFGnN6CzHwEbwaBeVh3NFpjWCti4aCZzgw24VhRH2m15QoRQPijRbXc5XjJQG7iLUevputccJN",
  "key38": "ccAGH8jB4M7f1XLC1EVfRqjLgbMevTuCprjdd2V8hrAE2B3hRpZHS5FoaFDzBFDNvb2tAGUChWcteHwMWQpf9Pu",
  "key39": "4vf6KSAvngc9WaqZMCCkLQzXG94WdJKKwBKUZJESjCD9qpSSqLsJwFcoQbkJnWhyL94V2RFWMJDW8BqWhY3ospD",
  "key40": "7fFZPM3Pr2nLtaQPY2qGpZMKCRf2pMDDNr9cEMVpX8i3KqhLeXeTguzS9tnMPgpU8PXoBBsvq6odJCLoAbp2hPA",
  "key41": "5CnhL7nwuVAow8bSYoftiuzMsxMd8VCBgMHYJ2QzgdWrHd2EHU43aMdkrwtQcSquCrDWnj38crKbnwdVG7ZupEY8",
  "key42": "3HqjXVpKGThnzisfmh83eWACaaHx6vWGr6ubsiJpQifsXGKayB34mk17YKdj7L82rtEi8JfnRN8jqwvXayD9Wu5f",
  "key43": "27Cw5zNM7dBoriUuFh7EwXqgC9toL7EBNK3sTef3eoHpYqL2gCATetfHojGEmowzZmbsHKFxjahcij6g2MGSivoA",
  "key44": "2qYsuKm5XEjCmgoGGW1PA9zsxnBQVQaHj63xja2bfsTCSxxSFFh7xBz9hyaLoraz63h3hbasP7J6Hp2S3uh65xrK",
  "key45": "3X9RE7b3DUo7iesyXCNxdY9MjomordBYwesFVDTHoyN4TggtwdNCD14RvcTiwKQDGRRGmGm6WcsRnDFgAu4t4m7J",
  "key46": "4mTv3durSqpCH83Qim6rGC6ePk2o2n1CbB4iDLQxLrRYjvCkdH2k4NZST9qeLMQ2GBEk2L7tTmfuhGmPCZWCyZX8"
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
