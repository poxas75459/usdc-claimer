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
    "pdZC83VvhRNSLQSucsJkMhs2XFuMDXrqszNMSRHtP6QMyswdsPcUUkFySNGHS8cbPHyANExwTLc8Ao3MenkBaXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVk79cy81quh9kuR4Pt98AC1NfzUZyYX9p8QuUeikefRKNd4DekjVqem8vf5wYNLgyNKnjMEmcQbZTbfVTpyEQN",
  "key1": "J2rStVdauADGnUNxLjZBtE1yKC9neR9mY8Danvjq7b7BZ4jLPo9g1zzsGrTVXa6KCCRUsrmnHw9KNeKwP89mCUg",
  "key2": "353xVTtGKbYmd9Pd9WyfmxA3FEKioaWfSARf2jMGw9Jtcmp9f6aj2qYNSxe7HQFFCjxbWijBdSL4KnVNaScvduHk",
  "key3": "4xc7uxP3yzWxeVnpometBtoJzf2TCMAPQNXiWoWzDzyodhHNmvZwVNLCSVE6nYncbRWkwGvX6JSJyDMDpqNdJkdf",
  "key4": "3s1EQWVQsgDAgHCcXbtffAqq1DW8gnXDJWSc8eMZ84ngKc2VNTAbuniTbUTEM9krtgqZMXXs66UcNceiWnauFtdw",
  "key5": "4mb1Mm1dnq3DpspGb1ueQZwoUyfZ8o3XQ24xBMiKxkAeZWCda91fyZKMzS78CFynNsxtCAfujeHc6hsKJTbR4nVe",
  "key6": "39BqMiXoGcx4Sf8Fes7GkJqq3TeiHQiVANNXvJmS2G83tAunvoHMHpPF9E3ApWm55GykWAhEpNSL5RRgFFuULczf",
  "key7": "3g2tsvWiBt7TZ5R84Txxqu8GD2RPrZsZWbFTrTeUuM6T7SSqKTRbqgTr5TvCg5jP9Exbwb2MfFpsLNNZqpZqFw3e",
  "key8": "5C4qnBUzHJCQaXsmmMeJXJMWbWYSMQg93Rmt5MdedtpXkbbGSKRJovdJNhJV3Y8M5phn4EYBiHtbxiwnkDQ1N7AQ",
  "key9": "3xAwsR2dYRLoSmVDjWxn6fYaEbzzHXBg1ET7eijQTTsMXqTfBVCdz5fbkWfhsx2iFgHtQBqJDTPb8KaZP7ps6fhP",
  "key10": "22oeDSpdTjL946yrT5wGqpBGrgmYRoqrhAsAehaKVijsYdgvd7a2JPFN4VT8os4a9Ur3b71gbYmhLQEyEVoYqGQd",
  "key11": "39zi55raFcM2t5LHCuQvJZRCasQVcKrA8XfZ7YRiX3igrxf9YqkQzsd4n5xzCuzsNMF76MVkB5vyni6JAmp8ArfX",
  "key12": "4bTESiopQZgpRwMwKo2Fd5Rxxpz7Rg82eoayc4kDFQjLhvWEhTchc8b2GeQxoMxbtPey5FvP8H9FUeTnmGxCDbec",
  "key13": "4ggTLiEA18VV3BbQGWDWxpVBKVci87BSdKrFgkXe68uzufZV2bb568sq5ZNSSv7wog378enFEyvJ7617fwSjQSBd",
  "key14": "4pSYAgUP7ZGwz9YsB9mcU1hHjF1sMNVvtpjszg3JBpuzeNh1VDThtPLdE2D5MHUkJEBn5jt7EMZQyhDFZi8tfLWE",
  "key15": "5vKg279fv7mKeNhS842jxiVYUmypPEV6J8aqPXDU9bVJPQvkdQcez1ADjmdjagjxyp99mgEWSmosDDK1vatPpp7B",
  "key16": "3ovPB1YNUsFDBAuT6rMwBMVDK6ivvCnMQnYafUyBXKUDYv4efQzckpQrGKoKrKQFDcu855uTzcht7qx14A18Fuxf",
  "key17": "44zF2UiRcCzFnjfduqohoQPhFh4M1kk2bsJ4omV5kDAsfSgXBW5Tf1NBQcGcX6LBihvEancD6gNx6XT4dtk7sxjf",
  "key18": "27JGDRMu28gtqUj1bSAvfbNTHVarQek777w7VSZUwRyAwEStfzyVZd1h7zLMEyZ8RvctmgYKVnoyRkTzZd8JgDp2",
  "key19": "Ge8KhK7L6YMW6nRQ6DKjQC7pF6fDAdh1NpQgzDnaK48hDiABdQKvyDmRwNiafVJkmyEw6KQSos36ddBjAFLDVEb",
  "key20": "xb1hp8vc6dSyBa8nUREFKMQk2DzWwhhPt7zyUy7FZLUeX7yL2xK74gTdRemRvwirFbLvDAjz1TZvR9Yv6rCytPx",
  "key21": "34FmoNPv3LR3T2AiDznq4AZCRSy4xs5A1mNTVmwXLZyrE9Zt8XG81PzF1fZPdRsnNnmzuMuuKnohozR5kF1kvhBn",
  "key22": "mo8wgAMWkaVqhcW6rr94JJgxshHXKv8LqfmFqCUEwjQV9xvQvt93pJfteYW2hyVwgTZDFg5gHeXuugSCpMvbkqB",
  "key23": "4pUf7eHpanEEyM9JaYzxc1VhzNuzgHX2qQtYtktGRAHvKHG5b1WrVq2VHfFFfj2dktDSQxxJm8VQG37QPY3QRVP8",
  "key24": "25S88TGDJQ41DXLXsn9bEFqjUaq64VhNPhLs2frZzFZXKNKu1FuFf1pQEpkpKDgcbWfB9d3Yxc6cDEbZmmjTxUjX",
  "key25": "3x9vy5Q39sstcTXLYD6ufx81itEinLqis3V2X5N4JZZiFzKy7fzYBLDjZHjbgNYzujhYL33R3gvDotGbvvshzAFT",
  "key26": "3mhfJULLN73W191FRwSoi7whxp3z7NG5aoxaJzg7vLuv7A14A75toGyUphSrdpj2VaUA9vSq12X3fPHNfJc86e34",
  "key27": "ZzhX5cbzyvGm6GctwpCGyJtJCZVSXBmg52yNjrGR1wERLjjHoRHRmF6wNAeEoksCnXncs8Q5eoqwbe2dacnUxcE",
  "key28": "3Q2N6yVQ7ePoG37SnaJCojw4rH9Tax5DvNGokZcFCjXNRVRBjkM6yH8Xu7zzKzRbwWGNJ67Nq12BzwAdcm9GuQ9E",
  "key29": "5m6gmd6NjLMN8n82VXayhfibXoNSrKj8ohFH1Y9eUu9k5dnXDAygA2A8Y7L46xuC99miV4i1VY6zY21PUbtC9j8S",
  "key30": "4rb3qRzFBix2YFS53qYUyGT1z2if83mpvQPZMvZmA4phtMB7jbw71tdhjYSWPYUu5VJ5mgYCAzNRFCYEUxT5z8Gt",
  "key31": "54YzRGBFSirU4B4sHFZKSTGRTKbKY4P4tgRXAQAnTAsNfgm5kHNtDjUMFnq76rmG2E1kcftuEaUmN8ddAYSXKMak",
  "key32": "4cP5Rfcw41Wn3jEAJNJNEKMT37c9T2tMBcN2ZavvmafyZWV3yVk41GGnTeNnYRzD5HLTcWBVryNd5mmnubiaX4MU",
  "key33": "3w5uyQJ45Cfih4HSvXyTJmxXztPA81KLwx9Fu4JsM4zcnDU4CwPfi84r7MujwNtaQYXU9mjBDf2YiXfyUSh3jbMT",
  "key34": "2uHdMnTxS7s73KCf5TuBnXLDVDSXa1RCnemhdXF5Q6L8qxbiceyLtQd9VPoQx3WewPgV8TUUT696sjYqNxz1GSd8",
  "key35": "39RcYd2PuG1sJJVLy83TQCtMsPJmXnZvDDX6jA8csNYWZ5N1sLQqr3dBoBSLiEq2V27wFcj5Y9FF2oKprdDCeiru",
  "key36": "32eNVxJsmYnX2Gqgig8MjqV5fctEMiJHp5QFfVTQAw6z8ec3Yzd7HQonkK9UBVHqpBttjdGwHzRX1qc1vCHskzrf",
  "key37": "2z6Brh5zcxVgEs2vS4FaKyz5YWKchL7b6MqSTvnfqBnbwWGB5QwrwrjmW1n8ixHSrc57hBFCvbTLbpxdSi8N8Huz",
  "key38": "3Q5xTzp4d69uaEK5snzTfswCT1pzEx7NFW3Rk7NfSH9NVnatRfDfXsfxw9cf8M64Sx7bd7KaWdxbPqcbwyxv2wYf",
  "key39": "4Ji514nT6QxQCwgPvwgpWpv17heqwKrw9zzUioQfqv6tZXCvVFoZLLDBMkVKbrtstJiXNunmVakeym3WjneFuskZ",
  "key40": "4SG83YfquLpvfedG9kE1ZrEnybkwbXZBLBvjL7qDx2K5BfQ9A7jSS7wcoGDzPncEeZHKa3JEPdFQhiS97bmVZeAE",
  "key41": "6qb9Cpi6uBQQjV7thEhBw1QqED6kz6NovpQKbtY1zXNFEnjPS3V9h68X1sGi1PbczWgLz5sk3j1oHAM7F58iTq1",
  "key42": "4CTePUzRVVXnsibheF3n3V3Qsp2Lu9r7ms7NVAe6YBx19AUTPsSWsF92oyeXGcTVfgga6kZFNVLTF5wjtwkWPEwE",
  "key43": "5oAkw12vVXuVCzufy2MNWPLWpszwmiGtj2TxpTPZQVRPqXvLLERG52vMgmsSuYxHocp4AguxnMyVa9xewMqRap93"
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
