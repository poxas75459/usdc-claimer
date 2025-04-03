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
    "43ZeCdahmNy9N8zpWmidBHFCqBwVrYkL7hb9kwsQW5R56Yvv5PchNuNHmSsmsQqb5wJZXuXcKaN77d2K1SF4Zx17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387MwjXfukr32YxhtxXYWZ8nJVcDCMvdgwT7R1s7QyniKyvjQBdnvNsXVfMvXRtRn15NFi6sNHunU8TPza5XankT",
  "key1": "5ZHLwzYBJ58BffSCntNJ9KkV7g6iBqgBwaKt6utxsVoTw9NdEKRctRdukKBdYpA8bPG4KNuWFBcg8nkap1777QMr",
  "key2": "391hM8iXff3dCLxuqqayuvxQRTXF1bwHYMz6wD437KpwPoH5q3vULHWYCQFMhNxTkqxe8F6wxdZDwEVegAa59Nzt",
  "key3": "4XYNne96WjidPcRtZVWFZcK7iXsvZMUqsKDjmvCQ5qn7VNnbeTzvx7Z5bczDVuTo5hPhPckkF8p2CKr3cWedK1c6",
  "key4": "2HQfUvZEx63Jmf4Ycqqc58ztgjsDS3HqvKSBPTD3ws6J8GtZBtqnkb2Pm8uewVfUtTiQhjVoM14pPTkfJQD5njPb",
  "key5": "2P1jNuMhpdmsjtAPQy7LBQ1LsmoMuzSm9ntQCuNDu4fpYdiSyhho8RKkiZwYuGiK1Z2Lqen7CDdiSHyESkdBgpb9",
  "key6": "3ZgSx9ufALNsH5FbtxGHUvLcTgZvrLXidzPXA8SFVbVb5zkkTxp4Dxh4jmPwVXShxf6WhtCVARosA1QjuCnGpL2Q",
  "key7": "2tTrRu2DN3oxMJyZyJf4amw6jP5A4ZP11zNdRAxUr8SrxdPta7DSqyjJqtXwt1nccyg3vhinm6gNciPvTvuCb9Lh",
  "key8": "3hyZU2gtZA6CQrH48hV4Duh8uJ1kdyqqfUkRtjHYKcWMMp1fHdHXsTpAQbt86rKGAGP5NDtcVs3Len5HXnhoHXiJ",
  "key9": "UBUL7FQkPNGsgPCcXRG7Z6zuhUcEEquKTEAjtjusZauof6wCbEvkmPUSMHm9uoBzEDdpxahwLmrrkkjgYjsCrJo",
  "key10": "3T8CEzAg4Chokjf1LNz8PmvFYaqoUj9E2G7mQCpYM3pS1o7Kn1BorjewcR3S4JXqv5EGgx4v2hFoZ6Cac18LDHqQ",
  "key11": "4Ju3ubahVw6NjnvdgUJxqs6HzZ2svNcTEcq1ZDGrHG8FBwYAf4rRWtF6HxbYtKFK89jToqrvU7NFcqugbWbqZrZw",
  "key12": "4LhMCP8njwLpEYm1JbczCbjX37FW5nr5bPJmfaU8RAAaCbLiW2VZkhiDSTHNtLhy2z3svFS3wEQhCHj8XjZD64kf",
  "key13": "5JXF2Ghxndyu76exaJcvDhmtfq3axttAEjq3A4HwH2swruaVdMANBaxXEZRE7hqP1sFhUQknd3PJicsfrS5rZc4k",
  "key14": "ejJ5DvJEsrYtvfvSAg9oXPS3EcfZuTpmbQ1Q4oRKPGTVRL7gBiB1SVWxpdiRFQBMvFxUvt2TTaW2eDefAGziyCU",
  "key15": "d4kRds6EaWuUssgRUohrVS94S4Q3Viu9SptgJUTcffjcG4ogbqRkNExMxewi7N5YHyXPJxzFH369qX1atZVWirP",
  "key16": "RY4eFhcvZsYYjcu3S45FDH9CK3bj9u5jA7b3dCtT6pEWQARWW3TBdvSFshXc4An9RwDfcZQfSYMeiDFJkSoe4MP",
  "key17": "5iiC89U7RCdKkv4qRh2yYEzfhQ9KcTishfGguAcLvwsGoYp1aEgVDt7wnfCMCyYUBq9yrYAQgnY4RdKaiTyX5TWL",
  "key18": "4ZRqiPJZh49kcdiyKuvS6hAso4mWW9TPtu8USL252zdLL3QD4Q1voEAeBthud5umWSXW9GWk84mvfXBEmZcPmNJc",
  "key19": "2vwCNnDQoQ9diydiYV7FeUe4gyaCpdgvxH36vh52TSS8SpwPsdFqgBX3XJGyiVeupThQuQ5xwhgj6Wpk3dLH8sac",
  "key20": "5dAFJgQnRKKvkTzP9Q4Nh8jkkxaVPAmdo2HopHKLUQK1Auv1Rx1qjmc9SpxG3qvcnFL132cXBmW3W8q7jDWvJsXw",
  "key21": "2Eyk56hVHDXrk5s7z2b5MqXcYD2RWXomPAqWCQMgVvDt9kWYZT5qYfgRrU7J9LqSBdRtH3Zb9UNCgrT8RUEm6zQD",
  "key22": "b6KjYB6UCs5yhN8EuJaEMBhK7stxwTYVEoNggLr6HcYAE8DVoJVB27edVefuVm6R6oj5gkYrvYB54D3tjnmDtvp",
  "key23": "265dgr8YEDFz8j1U6fLLv6Bxm4Gz2UnMMh4w8i2Az672oiro7FDuZYsT9MEHb4oexh4xMYPpZBk2ujxzncYcc7Mr",
  "key24": "3Ltrna3Ag5rLx1zFNxXJkyeBcN1HtCwERiXPKm8yWtvtkogSvhDsUUZ9JHKgrhHrUNtjzbY5dYp93Epzudysriuf",
  "key25": "HLy8nZEu36k2HtaL5RfnXSXCM6mTNChELZdGChMDkGGj215tfRa253dC7NsuBVkgLmjkhE6CeJqMGhL9WJ8MCUR",
  "key26": "3Rksw85GMbubdhoQPMHvheJBMdee288ueQR9D2Ey7xFwFmSH6hB4ZMRanZ8TFcVaehVB5mwoBwp2mpWobFAQForf",
  "key27": "5QM2auY2QKp9iJjBoz8e3usHrPoepAFnXoFMmvqksYArhmCiqFxQnqHRKfr5V9TFJ96nJPErjNHmQ3Tpo4KD2XEE",
  "key28": "59M9fkge3xV6mfr3Z7iVY12qzYxStg29fdqJd8vDXkid7KfqDQBX93qFo7YBZCJsKwZUWCv9d1Hdd2vYm35broM1",
  "key29": "4WGB2LhdTgVTfkNcCtWB2vALVZ64JhMGjHyH1pPrJe9F8uRCre5ZSRJvVJ65jha3x7WsQJbR7NZccV7RJMuAAotQ",
  "key30": "2H7aMwW95jSajz9QRQFxDYf75jFQmb7y44BfFiGFwGvzkctqhdxoDH8VHmMYy5MjidXCsjBiXtxHiC5hkLDir9Hv",
  "key31": "4JMbwYeZRTi7Hz3AQroQw1oGawtW6XGinD8HDSD9T22t2BhRxuHu2FyXLj2WL1kYihvCRS42ZuRMDGDWgV17ZJDY",
  "key32": "2skj1k9R1gMud6YqcX9TFQsakq74anBxtGjrrkktZL3kp46gLhuaa3peCrUbw3wq1MgZbRYWZsNA8KpoQntx8Eqs",
  "key33": "573ZYxFR6LvaLW6k5dfTAbc6ug78hEgEmNKmVmvgVdKTDmy8p3SC4uEYxdhN4grSgodB7GFGgofCNzgwZTipqdqg",
  "key34": "4mhLtTQX5t6Dy9Fv7k4gUYXc8vAUW381fsKwo6YpVzWMUjBnKUfKiQgFHeLh26rTmy5NZ2vwDmEzKFgRi4cjvXGW",
  "key35": "2y66Ykg9yk7irCeqRCH8cgAaKBr8H1LLQN3JpzQ2161DoLDhp6ahqbYbNGTaA5xJ9qCEsU3fYnL6i4rqMRVWrJiw",
  "key36": "tzUAMz9U7KFsMQcucHjgSuqj2NbkAorTXGb8MhSdPuV3YZPpsBF3hD86r7jmsgkSgRSzEYNwTpr8WvTL5qukWRc",
  "key37": "rUSRGHRh6toKCWqb2KumnxxyxETnLN8ynd2fdzmtePz2NP4GTTav8NkrfthyVbcYhZAWVr7KrnvTB6Vf2kQCDQ4",
  "key38": "4yqwyCS8zXBhgU9GvGjpFnMngHYkjKGScgnDXJQXbahu3QJ7PnxYvxq5fz8VbukWMNsH6Ho2iM5nrf6ApmvmSVWf",
  "key39": "4P9iUoTNTxP34gvPvSYdV2VPCJ5mASuC1V14Sksd9NM6c57k4cDctY7zyHbe7rL5M6DLMFscM1XBeKFef6d88By8",
  "key40": "27S3imb5ifP9hV6QeiTHvCG1tV3336NQwFyrAe8rNATcRkTbciTMgUbNav4extD2NpDb6auM2vw1BinnCvPVtBtU",
  "key41": "HpaLmGKVH8dq8rHk7Kmr1jQDQphqutZ1zHEw2ocZjmbnwCPfFgGjr8D2D4oZVu9knQG3Fqbed2VbpXF8odAEmDK",
  "key42": "63mKFw4q3c2TfSSyFbm4yyCSRfxnKAUoqWTQmKiQZExUQWrTYrFgxcZPBfDM6bff2ksoGZWLN6Eokb123aLx3wJv"
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
