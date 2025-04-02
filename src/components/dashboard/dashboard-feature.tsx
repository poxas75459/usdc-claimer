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
    "3uPkwGxfL6ohD7MPGGwGk2BRvnwtJM7URX2hWhjFUG7F8zGzZGMZMqv6DmLa19NQStEbv2knBqNJLXHdLE22Wxqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1iA23UwDJbJbZ9GH5kLYsPQFez9mBUz178orwL2gPqDP1H3KPSPYRKNsskTzJhYsdaSbghYLfi3Yanwds37nuN",
  "key1": "21jXR5jw1qtHqQVAJcLHXpzdruVPWUvCoYPtz1sAHVUdCdR7KocuftUeekMizWLEPpo3FQGyCKRTNt8iauTN8fu7",
  "key2": "5G9c7syfa558ugXCvgdUdM3swC2bBdTZYAm9z7kE4MQx8TiaRhcwCMjLq61MnEYnThHmYVwmAdiRGhPv3RvE7TvD",
  "key3": "4FeXuAF9kMbB7vWY6yeFvTG22mR4tLzX27JCVfutaEox6oZgYpy2kodcPuXbrUaqR9ukozTGxyND254fLm19ruh2",
  "key4": "4e4pjjAg1UAxKJamtq3pW9yY8SAbtwHTr5LVbuU5KW3Me3kTnnM1D3rmKD6e6i7crD6YKm8UQ7oy1bhpqEgMe457",
  "key5": "3DGPaPAxqMZSyb1FwyM7hFyYhV9o4sB1cUmuu1PdndQBxUscFUwaT4qfV1oJvkKLMnPcz8NeCyTmhTJea1akA4Qf",
  "key6": "6145dQzDCxN79o7SMun1zQk7D6je38mvaYpXdTExbiCWGa6iq6eLek88awJ3kWVLMWXM851PVNGQ9C6hNjF7HKRi",
  "key7": "2uqNihSy8BGEYVBpnTP8tfGYGGsaTUTHQE7QjzzcHZ5hYuvdR7c3hFww5qbYxHxYnc3Uv3YcrnmhnRrXjDFVhc5J",
  "key8": "3ggKTAdCUDQLuzSr48MkXjYB1PfCuwC47zM7syNpEkNcSnwhWTxKsLgewK9TuMR6UgJq6BQ1WqEqesRmYBz6xLYX",
  "key9": "XQS6ngQYohbjHvSjCPkFkuf34VZiLYzXshPcUEVL46751eEDKeHfUBi5Sdyqrd86QfYwZT9umis3JQQa2cyfUoP",
  "key10": "A8oesYnp2bYfwoirUGdQmPGMQtujQAcyT7v2QhY6kfXp9tTLPaEbfBoxqyj7kNDLWQFPhfhTQbNfBbVeRpvrJES",
  "key11": "3bsCvDeN8aSPo18Bv5VWRUaygFCPwWMoThNUS7FvYUBNXG1ULaxZgHAdj5mqsh1vHXMZ7Xb2MQYjs4aWig1pukNa",
  "key12": "3AaKkJ2L7H1nmKkzF5mqkVQUrTR5idSB1gNNhp12U8gc8cR321Pcyvg9wuiXQbYRo5w5ZWq1989MGiU9nk9d2y92",
  "key13": "5NtNPj1rdTev9tXq2Pq69R6SqK3UTdeLke9HucEd6EvMwraZTqLN8SPgFnYLafb9tRKp8q7qrqaG6RARKe5nW5G9",
  "key14": "3iqk6qw2FKoDbTS4n82XxncSWqTpR87Wj3PDaT2KPSi9vxnaCX3nMnQU3YhDGNBdh9rYXsN5ZAYnRJ1jy5kJUtsi",
  "key15": "4KoMaBB8Ru3AikeZn9y6NjyXpQxcPWNsQtKvdQseU8eexK86k8nQdZsG9sxHsZFLA5AyyGwMYh3iTPxEEZsRz6FT",
  "key16": "4zdGmESwxNW8psRyUAY13su4xyCkbWaukZuTo7fEkKsRQD3YjuZFpH2TMrwwu3cXVHqcuGkSRTrJ1udYJYBoyFpN",
  "key17": "2UnpmcfYsmFXjDQx8gPJA1ihAN7cfQ8QMsv2jeuVNCpaTorZ1TQnyrAuWTN2tMczgqThU68MtskexVfz7Kebjq6y",
  "key18": "2cZmjMLXvjor1TyepQ2GRk13kEwXVtg84VdAXCx7X9h7N5JTtRAVqJmBsa4cuhBHHL8JCArYpKetMPo2knH2VdnL",
  "key19": "5ddYcjhdpfd2kjoieFSJMJSFFGBVgiMc7ukcxgmurt7HbztnVkPxD67TxwFnVEQSM4c9wx46v85xSJywwbKhsRcc",
  "key20": "2XKcqL8harzqpenfXHrqVXNkjPPWJ9j1HrphHHq3n1hHxMwcJAYg3VJCQWx4Ex7uUvTiEdufhc7rSoo4adRhSTxA",
  "key21": "5VV94Uz1k6s98CmeBFpu3Bi9eGPtrTffpVdMCh3Hk4bRzUH35KkSEmk2YypNPcZgsykCW7kcwPWyoQ7qYFeHcYLx",
  "key22": "554o677ucynFQsxzbh1JFULiMqTjZxVY26Ahdrh6M3QCKN7xCSaMdEgVdUpJvN2gvUDhfsJqVLfJXpN7adBLWu1t",
  "key23": "44mkH3YLyNtG3PhoxbyyRa6YyYpLArRYXb3KszSr7zUXr2pRyrVC4T27Dognn3KQfSUhyNwPhSoqRDGF4qS4k1YQ",
  "key24": "4RHREitp6SFkx2zbyhMuucM6nZkhej8sAfwFngk8C1dH7rLYq8mxdaiZC8WHcMqbLXMNZM14cAy9xKFRYawTs1Pw",
  "key25": "HvbwMWnJ4w6izE2KskZqWdLoVjtEdkkV7wTrSM3Hz8iE3n59btukUu2QcAmVWaBKQtComPPwyo8UTLbbw3jpfjC",
  "key26": "5Hk9xJ2Z5v1KTDeQyjMk3KFA1XBug9gkhzuUVCN7yAcrb9SMAEJLV9rTMuBftYLnaXvaWsCfUur3sPw2Ykmiqhc2",
  "key27": "2vWZriSiLXLntSd3WuAjvxme15pia8XrKvHH1g8kYZWqxVVmtQHR9jt4doGJdqPBJB7AUBQvrFyVVkoYVbsYy1gD",
  "key28": "P9Hf7voL8Gjw24odTi4J96ixPJ2DXdrq8uuGBjrshtTDEByt6dV1hM4ySCnbatHvF2sWPgfTEqF7P479CGGdUYk",
  "key29": "4PwUCCaJEkbLrfzQehwCTtW3oFSgbro5bPMJzDi7QBRo99gZHsi2AcZCgpWEFaUyzmyxozKeBtgxTEsYvP68tBMq",
  "key30": "5tj2v4uKG68n1PQKLy6bwCwpebNAj4sw88s7oWrAShxDBe9YdSri243kN884WqobvhU9h9uutHc2WTsqSY1TJTVH",
  "key31": "2LdLbbRADpehwUZPA1BaUpzjGi4V8JwgrTcdLkEXhbwnK4tBFPsRWbZrpfwdrr8x5QAi2zG64mpvS8KsUqzNBkWy",
  "key32": "5QKbDengxZkLv94uEjrA2SFE6sEGTzYLPbsDBv3zhpaczsLL1PxFo1kSKvayMb9KxRUSkaE8SX2PYoriMh7UMdjN",
  "key33": "2SBLDorwnTCqZq495ZTfihP9gLHwmghvb46ieQn3RpFeNkmjTr88MFMFRq2W1QZnSgV4DhGP9vXU6h4BQWjZFeN5",
  "key34": "3XdkHLbSo2TqWJh1tni8AiXPLSgJmAzN1ZdUFrrwaB8jsAhc258dCzZpUrTy2UsKgwexo6Zari1JvZYWrekyeL86",
  "key35": "SGiXuYo7kwEZxWn4WZZmVavRNVCfrdBFfMHfuqB4K6tq7KeqkD6McgFqopMYoLS1J7xuezr3hHJ2ce9u9DQyGTB",
  "key36": "49oMKNhP7kpr5ungWiFNaxPK7UzYXL7fhQY1Um32nJPWPRK1m7QH9wTHNJZ6Baw2PALRZGs9FMk9bkPs5uxDwHnw",
  "key37": "2TSkUyA2NiYfZMtYLjALYHfQkTGBy9kPtYeeF7KqiRhzJZBngzVPuVFPPSfUfT9KNP9bhrRZWdbxxV5sYcpvj9xs",
  "key38": "23aYBNcxQ6pJkftdctjWoHUQ8euZXRHaipSNxYyUb8D9XkcFCeZ2qC54CR4g8stk5J3uRAFZfBN4ZqLLeQ63cwzv",
  "key39": "5nUvbSV28jr5FRkuqAsB2iqJ1ywu9yxQaDdWxpPdAbSFLngym5nGQ8VL5tEtergd1bVBAE7EnGRQGWgF16nXipec",
  "key40": "29Upk9PGCjfN8cjeC323xr37pdS6qkm99kXZ4THxLPfX2heBuQeB5avBBSYowXahoeAQGP4Xsvv3u5ubiotZTad4",
  "key41": "5spmNVNAy4de5wEqYcvzafyMEXatGhJE1jqZtYkaFuH4NtYw9NEGkqNcE7QMqsBKw2ahiydvcSiYLGGrmPn2bPf1",
  "key42": "5aJVvwbxUVFvAq7XxJNvYsUkindfNGG4PAzot6rdHVB9Zs1efumvDbrXgfH1HpVFApAsawAmyYX7A7ZQx9kdEwP1",
  "key43": "2wUhyw3218fKyzYvxrVtJyjyQBWAxJ8dTHgfbyQEbSJ5ddBME6xDufGWmnXW8gskRYpiSvb1QKoMUCzTDSBZo49D",
  "key44": "2ABRomxKBY8svgaX4feZG753n6SBWyKawFz1RK3feQVCmFBkpFWNbV257ST4ai57HF3C3XTJzNYhLmWwnouYvGi8",
  "key45": "4MjZonWfXorUtq1LGEYpHWaKHeKEMjMVkRUdF1rV7xmHfXqXkerm6MiwYpAfHwDuu5Y6KEwS1BYy52XwTNFPDC81",
  "key46": "3mpQsGViSdinPp5dXN5aTERZHM2EQAUGhCpYGQ8cqR46Y9mJM4JGxA2ogKU2sXden4vyC4VTXnc3849BwDYH9whq",
  "key47": "sxBeyGpKRHABYzS1EbARezD7CgfSkam9FhSKGSWoLR7JXDBik1TKE2NyHKv4snuPz5G7QVTjVg32aVt41C4i6ov"
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
