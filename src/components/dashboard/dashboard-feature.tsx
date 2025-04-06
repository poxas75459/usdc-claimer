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
    "2DShv5kH6R3cXa5zEdDgUC4k2uoSS5sqjZLqi399RZ5c2Q7xMLw4hEg3h29d6jJpRwpGWjSsfatBXkHKzSJQ3htk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jsiSsPcAfcSew6oGJd3cem4ewGL9EQo3kPhT7fWj2igchYe7D4CHvFjMYuJqCwKARAGnRBR7LSnsWp7nfxRU15",
  "key1": "XrLtawawmybPjkqQKjiqxURpCRtxJvo2HGrXHmbL5iEznuxSgrPJCSACi5Sm11FgfduYaorG49rJzGjku6xLUS7",
  "key2": "zG9eGEtWrfS9szSYLe82FkJwS9E8GXVbSyy2HQJN1EebeJcsxkjRkihNPHUzxaFbPteMaXabaZ6mswura31wGk9",
  "key3": "3tAcb7rkENtyg6ahdZWPw8EmSTPG6GTU2HC8re1v8RQqcGhnK97c5LtwRyvapFUx9CJsj5uSoWrVe7HvfZy43c4q",
  "key4": "2yX4kovVuYJfzNfemBNSuJd7axdcJQfRXL94kq33mLf92KQMKDJLEGXB87QxU46kP5CaEsAeCUwykmnWNrhjDhYE",
  "key5": "3GungJEeHcyAuvzUEKLfwNrFCN9xLFsnPZBuPwK8B9Jq3YTQpbVMy2x3C5Y5wk2ejdXNy87J6ncGnZYwSZbT5yVC",
  "key6": "3Wy2CyBDKEEfftqVvthjtxzkYGmQTJeeiAoEF3iYLJvvimUrUNagmnayNr2icy3bSMaW91oGaJRhQdYpWpxyTTMr",
  "key7": "bQTG3j8stLQQgYYGtTLG8ASwYpMPTTT69G7MwFFBtbsgwiTpQyaqmEfk7kTY5949NkMxvjqsLoPGohqyuowoBin",
  "key8": "ftFGLhVBDomzj4anae4KZKVGEW2xJa7PG1mfxXQnvGwEFGfd5iyjPAWt17ZJsT6h7AZhdCsP8W7fkA7y2XQk5nd",
  "key9": "2BRyMdVQgJTUqdScAL2gyvC8a3nxvxba3o3pSd2gc61yWPCzpqz7fqrSXQ8r3t68dHDeo9sfjmYJqXKBedVEgES8",
  "key10": "BYaLJBkSVdHcZSvXTziijvFzKqzchvgjXT23igepZoPJcuKvKy3DGZ1UDQaWJG7mKXVwf6ehUXqgxAxZAwMjTAM",
  "key11": "5G1FApiQ1ov8comwT2i1wHGRj2bD215kmbKMgvQNT8zSJunX9nY6qv4yamUnDutr7L3NdkJoa3XzqyhuhpFAzyMq",
  "key12": "4j7nbgvRNVdzqsLNB6MqXsXHfMhzfjrniW2AfwFxjh3QmbcvVTikaE8jdDvy9VEX8mYt2BaSrrNFvRUFakf2G2FT",
  "key13": "PkDLFRf4DGYWFRVkSzbwsRdKeE31EYRTmbezP7FMK2Q4M7rtx34zSfWR3EWTq65mBxWcMuS8iKv3fXjUum3GWEr",
  "key14": "3SLukchnDWRrXntMQe1yFKhc6DNgFeYYqTTBTDLvdzkRR3PB6YWfvAkwSCeYsvdZ9AT3j7CK8krkkhTuxwVu1UJb",
  "key15": "3385hCWCYvEnAvxWqV9MkmDKppGzY1fJQw68jdzvqVYy2Pi6uv4Ldybd3SiYzgC44ssMrsNAsGEiyMQFoiscLar3",
  "key16": "u91hg6go4oG972zcsVXNRfuJwr1MkjV46AyNkoSgZtdaHdeH67b2Nu2vMP3Zcf2bcXUKKPhpoEXrbLvVYvGbonP",
  "key17": "5u2br64SJC9ALXcETNWiUeU5kM2J3T29oV4NdkY8u9UfyYoiZe2GneVDNGq1A2PoNvvHHnZ1p1yMRuFfuBmKYjWk",
  "key18": "3qpsKS3ru9XPufZpz8nH5zQhxh6BgFCnQNd25QuoHjs9PgbD9M8vyPhiz2ibrAVkzvRiNFj3bSH3xeycvsj6kgSh",
  "key19": "3TE3CwS4JUeBxsTZEd9hfEYTZeLrY65QdBjEDyudCaUZPApMJCG8EsgLwQFnwjrUTGZYGpQ6zu16ZkPLTJXHQejR",
  "key20": "kWxYw3i1CHyCj8EHq6jRGdwWVW2ApxMw5SPD68TbvmpBhrJFwj2cDceUEwzfLSRi41FqeYdE13R94LrZE3NqMQB",
  "key21": "5jDKLYPoMEg84t6fYUxmgfu9UH86TQjK9fVqm5Zy55yEFBsctXkky8Eh9MpeqtJri2GwCLNGKjPsMFJShsXu8zw1",
  "key22": "3H1mvSApdJkYKBjjTGa24wLpKnkzZGippCvtoxb151cRN1zeAPzhMzwWuzuq3tWAZH6RA8EGp3VJeRNwCZVmg4xR",
  "key23": "3qq4Fc1Z4D94qGRZ5uCynBRygQJRM1K823je1op3YVPDhULPcoAAudjvjvjL9TAQ4uCXJAYB8JnqhFuXfwgPtKbw",
  "key24": "45WoGZc35Zf3VAZM2vJnSHms84CJCLMzKdBcMbYyKG4jRPgr5gEXmnzd5wwE55RmV1YHQMv35fzogg1xfRzBV6R",
  "key25": "5ifFeAeSw9NzgzmfFmtXucn6iZo9ZpY1rTJRLqyUZS5RQhogadzPxft8yGE6QxkkbG5mzHgfvGzETonzhGxzD6Nv",
  "key26": "CgT8W8aRaSjwpuhUKvuXrWX2AnoYRSC4yjChX5sNEQkTXeCgMRdUzM375vPCbbkkCdsZ7r9ZhyguFgTNg2YhTMC",
  "key27": "4nmHPTtn7wF8KCD7FU96tXpAnMGWnrSjru4CZaRD6CfZvgdJ1k87gcfR5udTBpM7q6V37hkhXuJrhLLK6aYdQYrh",
  "key28": "5Ewm7h4iV8Fuyf468d8eDZhDa5RnkCtvJRwP7jH5Fu33hVqru88DUFKUPqq1sLWcUtc6E9qo9P41efmjkxP7qmJq",
  "key29": "3ARpzc2GXTFGe7PTW3xVr75gZGudqbtqAHSvez8FcRpZsyfej4CJrUy4QVCky7XCvUE2UGq6YHghat2qqGG8v7PG",
  "key30": "4sJxqM85q33GER3WfCgtgBTWAgQzVb9rs3ZFkknU4vVhbFFR9TSwfm5cuXtGxPi4Ae4HNkHaC8cR747WSCSBTbnS",
  "key31": "64HCLfTcQxQnMsV2rwnZvr3nyKwzzFm4de2xRHfLDCZtGUJ2ZSDJ9dYv7biuVuR6DqxGpjHhykrEpwDECeWY8tNT",
  "key32": "4RAPWyxUqqciXnZtJ4jYnYSzP1vsapyVKKuoGqw4HFFJCxkHxWHdvP4TjBGtWCruiTVVqtmgGgRwEJWGasHg6bv7"
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
