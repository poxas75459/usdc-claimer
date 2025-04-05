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
    "3m4ANAV41KLtHGsNZoZwJHEVoSMy5HBmCZJDCXAk8KCfGasDAYx3rwMLbrnqJGDVgYkHVwGvb43ps9QDZwk7vKb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeXPUjWqDQKUzF8X87jicFVTeQAPk5xJ9m8MyYiUwUyFvCjgSHigh5jCJ42aFrkS493r4maqCNUqoY5HpuLZRws",
  "key1": "4CjQq2KcfAM8gqAmd8XY2ZBMqNa7g8gnvokd9GB5mG5ogRztSN4ACBhHgaBUAV8sWFyRkU5KNHYMUWJbUyxJpUPZ",
  "key2": "5gcE6qv4ZgjeEy4w6tinU4PHxazu1Kbm7UTrLCoQTDPA1G4EkLMxPv5KHYxcyECx9JdWa8NN1S4YtJgvL5oxCV8z",
  "key3": "23szKeP1aEne59vvwefde6CLiKsdeTf5qLA6vqjJ8PTLzLxRSx4fTHiZwRat8yd92wTytxDU7r79j9SftYihyxuf",
  "key4": "3kXCybskTuNUpaDjqQHUKBcbGX8pg5MLZtEtpvwTwpiB1zc55bFhb1xvrJv8gJBBCibQ6j2tL8Rs9Tm8ntrU5qMn",
  "key5": "3c1c9Lgkc39mitYUHq5toDd5derZsFQnoznMmcRtxw2Aej2SMStZgrHTMhSzkLVdwWz7uMwZxd2diZAfAponRfvE",
  "key6": "5DQB6Djgj2YS9Nd2JnD5uY1P25Wa3Dtdg4nswxrVZ3cP9MXUEp1PupjqEe3xjSzMeABhWNRrvKha4VQpN9LBNNBP",
  "key7": "4ipJqqsc6izuHq215hjvtKNyfKrM1iP2g7xbxFZ7syPKbGQMipkU7Nm2Hd7RC3W1ZosGGdeNnthZ1XxzWnbBM9HC",
  "key8": "9BWmcxDdJCtqsWvuWCikwg3mS14EpeZmDqntGdM1ktDhPMEoNHzdFL13Qn4GMB5S65bS9UsrHCgN2JD38tPEuh5",
  "key9": "27CTvNRPRaVzBrKnJYUqxpedA3p5qaUCKTyRAQwfbm4cZSkximSaYkk67x7kg7mEGVjtKNLErDA47iR9p6GteS6W",
  "key10": "FmkgKSpgViHESs2hMUqbhvrtayTNDkwyCwiAobM5W27iPhW1ArxudcLQmpNFstjgCkUkdutKYtrDkynn3EoXZtR",
  "key11": "21AFBQQyJRw7g97HdvRRD9P1y8riPsdBiMX6coahY95BBrdRuvQFTtx7ZQQBywg4adK4ZbmbcrmHhYNrXKvbseGq",
  "key12": "3gh8GKXf1ma8paTBQbstGwARR8BvU9k4koojT9ZebywsXKs8JcRWH3V4PXNcMBEczV5d7p5doRvMEXV8YXEeCpFP",
  "key13": "2NGqaR1r2Z2QCVLRM5ChHgajc9G5zhg1NLBfPS4Jw3FQr7kmZbDoE5Dw1Hqf8C29oPndLkkQDgoavXyDvHkco8gw",
  "key14": "357CyfZWywrhSjBAXWDgJo2LcWXo6EuY1SQR5QvxSCLnTVsJxER9t1gir6ZYyCCfKzpvJd1u5YF7iYqGp9hZXYpj",
  "key15": "MSxV9cRkUq51hv3BTKpmteRmHV15RZ2gFZ2cufYSCV6A6rRK4V4tuTZrbaCwEJXvhhV6V7t7KP1qCMdfj7kiavy",
  "key16": "3WXwWsyRKxyeHvZ2Zxr8VK8BnmHWNXJbdKJ7eSL5z99LymxtBx5SMySJmmvJS6WSi4rywkeRBkRD84uK7Ln8JVwj",
  "key17": "mkBDe8HG6oG7AoLQ1jD2jDpT3z1cP4TyEH2euiJdEZC5HrPpbLieF3BV4jNTD5sNNgGK1owVEiUioB3smWGqcyy",
  "key18": "wB4xH9q6ESHChHGC1A1bAfaL8dpuBXNitoGjzMNjWkJsK9t9AZ8f7dJCgMEdmDQEqRp2YEfkCL4jKyMXMU6Xrvs",
  "key19": "673tt7HmTk6zHDBtrYWd2qrssWY1LbkffVDixFP7gjbQb75AYCQCL1qmUh1w9nNhUnkjTfjZhuHGKFJwcDgo35JP",
  "key20": "3upWcsXQZNQsKpBiEXQBTteLAwFEKT4tx1u5zRqUyqjoYsWQjyVFy6MrT1C1U3bxqLmk4CSP5Px16Cj8bxyZVJPZ",
  "key21": "5Aj6aWdSJeuEDtxhdmfCPF8Ecw61vVvBKdPRhgPauK1Xt8zFZkViJ9ZNWQNQfE8ZvRMw7dm1bTrTe1bTN2RMwLda",
  "key22": "57wSYq1Vr2cjAArwgaLTNTWDo5NFZ5SK3gQyXzbbYVwgrny3DbqYbFFV44yDhQt7D7zPmUMh4Rsx849JqfRehWK3",
  "key23": "2P4thgJEE7qzqbRouYaz8N1DDe3EvkVaCKaee2DmWJVcVQUZb41bFq3AVqA8ztgUxumjYvihhkpLfUBJtcichqMY",
  "key24": "4TwYfCwjreZ9pJXNbLomTRTtByLqBioht5s7B34G5dtzKtXV692tPLsN2Peo96gykGGwNbXRT9jNsw2Mk4nh8jG1",
  "key25": "4Q41cDs5aPnrTJA6MSnX12hb1QTAoQWFCzq1uKKS7H9JdNQA6XYDt5bUvxfnQwcPVLj4o79kStoFX5ByhV7wMUxH",
  "key26": "4MpxuH2xzGAU4dzzxx8SnLvStEn2qtnLeaoMimnoLXkeuv3NVEpaMo2hwPmcJtLuTt3bhJ2nxjvccQPAgs1NgQut",
  "key27": "67bdKdrNa8qABHYazzZ1mmuSoK5STbySrk6Gs7Bjuv81bun63bnzLnJLU8xcezprVhMcKVEDY9EprmNXXDQLhtvk",
  "key28": "zv4ixGmVhJqo1bUNDVR9EcJcPiJ6k5wUe8zw6FHSR9FdF4C64LKjffpuPFVCH2tkFtT1iFJ4izCet8ZHq8DFpAb",
  "key29": "5VDntNLjrVrJmkwLBXVn6amyeYbyo5fG4PP1nE9ePNCYrQJLayPdEDTNXk13T4BdHBKRZSv5Z1ZzhbXorSvzUq4v",
  "key30": "5fuT2YGffHZFfmyL5Kx27fhfopSdoXVeiQ9RSAPuddhYXhei5Ax85T1mAAzMSFz5bHZqcwQBDFPsetdi96Qz5gDe",
  "key31": "KwX3F7ZN1cYtQy9ep2M8eiejvyEmxNoi6VP3uDMdaEHHjVYzLzY769G326X9PdgXx6hZ36wnxKQCEqBbiHpke9S",
  "key32": "4vREUBXwhdTuXKW9uLF5isBUgA2odwx2BQP9hpWrFza2pySQhMFWrwAXtXfhNQPuixow8XZ2t8s5R18znKKr36aM",
  "key33": "2APeY7uiMWhbAhwwYDJivLHVvhJRgnpSeYAo91w4vUN5jXaPmXQNUfvWi12PXnwUM4RCNzVSr4DFyPWCPfqWqXFs",
  "key34": "36qnYzoErQqdM8NimLPQn7WDLbqBxUSjWtoFcgc57pfMT6QbbDvE4LgbC5mpu9kqTZSFBZmNvFibdfZ9WrLEsX3k",
  "key35": "2VePrA7oqe6pLKboBgxEt7fxddQKV9adpi7bCGHmWL9SWgzCK3n71bgwXqDgmwsA5bG6Cr6j4F95FJBJawvHj4Bb",
  "key36": "2dFrEvn7xL86FpW5p6A4wxNHKR6A9h1NN4uSdfvBUahMaP7f8RpHM3UP3cdj9AKv94T8iSNC8EsUBy9VwEjcoPbX",
  "key37": "4wrJ34v2Sn73tktxNGwzRNz6TJNGj3vpCVKusMYcPJkUpgJYaqp4GQdzEQg6hc2eCoVuNGStsRoYH1uqJk7VfmA4",
  "key38": "p11y7qGnF75FYtKDFNGE7ZkB5MkCDwczjfBBb85uW1nuJPJgAso1yf6cVZNGuWuSi7TC4JkezJCb8hjqfuFz82G",
  "key39": "5tNv9LEeU5VZBXqLR1yNkhrBpf6G1fAhotQREninBaC9dhweozuohQjj3XXbYCDT2QZThTqHVaAi7GZvBaKdbQMV",
  "key40": "3SWKkXyJNxb34stnqzQC1rg6hPnk48DCpzEwtwN9ZDCHMPk4sRLoHVF4e6qUHZWw56wEt5pC5v8E7rYZ17XD9gAt",
  "key41": "2tWAdEmotw9v53T9s94eYt6jTLa8AfifKA22NpnkPeaVpd7AMpnL3B2sm8JkSWXdWswGEWToY8SmJsKA8efgMYN9",
  "key42": "3YqRRZfCQ3pyH5sz9YTFT8Hrh3yXyPoHFrZs2HMyVL9mZzEr5Uks7yrsk2SJb1DNqtsRGUzYTZGebDhYR2BU6g78",
  "key43": "2syxaieSCSQdEHM62qgb3x5uWNFsymL2VckekNc1CAeYp757DSY1Qo1R3Rd4fWr6T8Krw6jYyvHoGYobscpLUkF8",
  "key44": "yYyYBP7S7f1122dJHQFzeUtNyho9ZqVDeVcvPFh8eUsySqE1owQ66m8a6rYRqnk4kKHyyBmBBxEXc4WMeryBkRd",
  "key45": "3AewLEAm7o6BMxtTsbn6u7wGvKf4g94YDc9xawJH8S7XuwN8PZt1NRAjiRZMfLHFgAHRfuDbpk5myxrYfvvuyEwM",
  "key46": "2Tbe6RiSZiYaG5RnvCzrFpa1E8H6anXiMxQbjHMx2VvPsFtXinNtePRVcY1ecbURjwxrVjJVMiMQDdGs2cqwvzbm",
  "key47": "4ytq8cDahWJc7HPBadv2xyYAMTryRJs3tNwRo8kkyUY3x7SAZYnHqvKDFPnFBG4TATz8npnmYSfM6ZwRd2MNF4vz",
  "key48": "4FbDauN1qpwyPsozMnodfd8B6vEb3DsGVpvysmcQLgxLFM193gRetAmfG2yC2Zku5ozS4Df5bxkKxGRibnKUNpmr"
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
