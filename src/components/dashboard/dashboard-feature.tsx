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
    "46S4PCmLB9E15TWHwvkgN6xJjSCtoqQKxXXJioZpmUQABJXLFbgNsy4hBaYn2FbZV7WHgMdSPNp7mn3TjXvuYitp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGbtzaZwPZR4YLkz6NghiE6pg4rymwVtSGks4ThPjMxc1KEqvn8eo5BD2XexQHGfpgbTWDez7HsmqaUj9oRqDA9",
  "key1": "dUnA6xQtuuDHiMNV8g4ucGgeAPg2ZRogDXWiaXQwNYjJgB4hzAy43mqaAJv3vCYmPWRMkTgcs1G5iCi2ztF15SD",
  "key2": "4ZrhW1vFX78A6gBRjtg8wzs4ptv6jVZYS6D8J7eVaZrPVcGaSdejRRDWeUe8R8ebHTyo4v7hmcHRX4nnPvRajU9Z",
  "key3": "2ohyXF2QNCrwruXYR1fJJ6QrnLzuXrhAxnea2fFAFo3DPLz3AKz8zupDB4sbAW5HpJ74dP8T3TCz9FYfrtjN5yZT",
  "key4": "2z3F4uQqj6EXxATR4Fk1sYJYoy7WnC39QaaiSPy5JwZmCmrbRjbinumoAHzjsVwBtXosSj4iRfwKsNBG77DS7vXm",
  "key5": "4HgEPE8NcuQH2QcPHCYez9DxD4wcg4zh1NB6ZyTSYosKHYvYdpd15rWNrNDhDYP3Lme1gQ8JJeXnSEkL6XcGymUg",
  "key6": "2DxKbZWJ7Eu8HDU7QcYk1nMyP7EPyzeEiK5N46qwoZsMwAXWia6QaMSaotQcL8ADxv5LFon9HcfTmtwLQ7JVmz9v",
  "key7": "3iSBJsGqws5h5z9TihnvzBTTscLJkeKwZtF581qq6iDXHUpsjTJN4svT73ackRfoJQFJs25gM8jBtQxH7X7B3bG2",
  "key8": "5Q34eo911jBRog1yeoRJ5enkGBH6hVM7jYAE3zBxrbP6HhZBRk51vsxXmsZw4pDoxPoVsGKDysSq9NDd6C38wApf",
  "key9": "2BFqbZDmAXVpW4PNvGoPHy3SwokTBd6y7CN8gXoGRp5os7Yng9hnvQCS4LMwRZcwGofYs7HD1JZZm6BVTRr4PEKb",
  "key10": "544oghb8U7DKw4HmSzax1y3bkgicg8EHrgguCTShPjLtGMtnBxm5Gow7EwoWYNhcov96cJHfSPkuRVQF4WkqBSr7",
  "key11": "pnZaTpGT6jbTKALvmuaJXU4M8jVR2sPT8kDRwAPa3a9LMjQwfaEHjU3sWxCXdJyQAMqrHTh9K9P4nQnAosbz1bn",
  "key12": "2NWqaS6qnf1BEkAKEMTsLRtD5nUCFA3UtGZZhVndktEHsd4qQzodKZR5QmoV56HvNBX6G27atzsa5ZgB6vgo8gSu",
  "key13": "65TXi9cSiFdh3yP1LcFfkWZQyxRz1yegM77jDkQh5eUgkaR1qLcJ8SvdZb4Jm8VYv1Be2W8Zua8JNKK8W1KqR5Za",
  "key14": "2ha9n6ajQSEAXBbfSP7BNJGEcwPWTJ2x4yWcV7JdAjXMrcLFKRPcYwaEZFDcmSx7fYEKmUEVQd9nJ12gAZ831hTE",
  "key15": "2SaEHgwJbqnAkpmEUNwtkpLBP6f2k1AYPp5fsaCQhFqBEqZVB8w8byCg2rRg33ZXTdt9jpHioSCyD2CXJdZp5jwm",
  "key16": "5UMLZz5yK8e7c4XeFeXfVhUn4XXFBdFT85JkkAebMsmrtGdyrGi8GEPchfvBEy4Z58dh4ivT71r7fR5CAp2C3MGh",
  "key17": "4NYqKvBsFhNbjehZAJtWrZEgZGMM35mnZEU3aYyMqMD25mLipc6sQLgi5aK2ofvVadhzUZvGmhMK5X3yRP5zLZL4",
  "key18": "vhRn3JuW1SzdUQfi2y9THzBQmfgARHeDYXYR6NRgkidmncak7wzPC29mj4iUE4y8Z3odkNbQgufiLbusq8DeoQQ",
  "key19": "Ybibh28Yof24d93AFJHqbyBpQTUsenWczj9eGT1Z5AJwGwN8ySCD9myUkZbpLaBkqm4yutbC3UXMzng8s8fYg5X",
  "key20": "5StvT7icM2sRkFv3MWKcRkxvtP323YAXs9tXM5tp3MnbBZXP4bpaM3o4LdFZmDUwm7o8bP39BWexSBAxndFxjVvW",
  "key21": "4DdqpzUMxXF3NueXeneRa85UFmLbHRKpn99b92THcaPrSwFPc6DkfFEjyKECAqDrLqCE7seeRcEhqePz3VvJ2CSA",
  "key22": "4TqYNBB8VHf4CJKTRxrQwLMWJzCftd3mWQRFLm8BnyQ4M9rZ72HaKANoTN48DjEjGMwMHtuw873D7HvUgRHHxVmr",
  "key23": "66bi5uuPjagdvWBWYdCBQGQCKVuaA12RdHHKgvo5SmhzH9T7JjbLZd6MWvFbbRhcdBYaPX72BtWo8V6yxuuQtLrv",
  "key24": "2cn1pV9ZFqcL1F9bZkGF7L49gC1SNV9WXJ6kivNr3M4MPrCihMTMFnjVz6sS2nvVcfshQrVCKMfCjHcTTwqb6crm",
  "key25": "5EQX2qyGp1pTQLUcb9GnPNhNrgrBBmARqKvB58EPqFbJ1KG4eRtz45v4kVhJwsVe9wusrd979NZASiarsYaX8HpJ",
  "key26": "3p9va5WdfPGnxHfh21JhJfeXw5qDR88SrPHroYJ3aXYZUMf2x1y6qNNtmRLLjfpw27DiKP1gN6QQpuYdS1DhvU84",
  "key27": "4BTDFfYPH9hqkUjF8efRPRSLq1YpohECdqB7htheRJJM312vXHgrnGNJfiPiF87kxr3g7ZfLtQvzent5r7fg28oJ",
  "key28": "3BkzBqdLboRjPq2CLA7BH2PK9jUbusMfadrDmdqKgRjpfaTE2uJEpnEXkvqu3HiVtXzWpe56sBYVvFJCXMzpKm8c",
  "key29": "5sjzqYf6biGHRqgz4G2m6bUSdGWH8UtjCu7nExpvshzJ4pzLrcgqXtZba6Z9iH7QpXT8JWFvhamacEkV1JGtRYQn",
  "key30": "3bKhFgysTtdD9RVG7HPXTZsE2H5qLLyaEPg4JKDr9MdaSrQzLY5jrMpFYX41CFe8uhLoTx6BV7g1ai1ZgaeR4e5a",
  "key31": "54ziVGGypFcryAe3xeKwWTby2kXxwDnUm9LwmHPHGrB3rsMufpW3Ko8dcTiv1gA63GU16NAnBy52BDcPrgdkVy5o",
  "key32": "Ly8VnXsXiyYEFWDP44JHgVraoA1GFMw6kRPyHGsBGXPCFhn9GThK2QxcW7RQzn7KEiHH7CmWuTybExspXrzvQ79",
  "key33": "6f8AFGfvnvt9oGT9qiJ7hKmBTBENaSkpFUYrAnxYVZjAazJJrV4eKGs9vNjNEaUof7H5jTk9adepoeuX9U2SL5S"
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
