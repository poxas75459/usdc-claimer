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
    "5eND56Jvk9rC2mjgweM4TYZqjZ1n1g9PKNdoPSw1VCRZLXXBZgJjwnuXsoCdKMS4Y22AioPTQkrBAqkfFW9hfSTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTe22TrHh19Lg493HqHckAbJ9hQBVYruvvzr5KAjAuZQDkYnK6DJLBw8KwqyUSTwGVTVefKceLsubYy5coDdztQ",
  "key1": "5sgPRXmz3M6JwxjpoYD2aqZgAsVNVMqtuoADWekB5vQb2LX1PqA96yxZSwitE3GExK4EPDSmaxHCP9vwX8wF73Ef",
  "key2": "2WDoovEsQqdXyjzzsgPqA5Ac9kkQaDh3LRC71fcg1CwhZw7mVUUASgw1LCWUZiemZS11nvgGbGHe3VHFkCUAerGD",
  "key3": "2s3wa85vkAacqWFiCmPBvuCgjnbPj2KHCcMgkyHntb1EQtxFRQmGgLAiUj1BxJZ13vkqswHMn5YWRxTrwLn3zLNX",
  "key4": "4kY3PcKXpVpGBc7dFWAT1R4RSEMkbuAzHbvqHbbbshL7Pc48DBDiYkRAPAqLczp5a52MF95mpGXXjm2P3t8pUhW2",
  "key5": "61a85oeF68CKZEcFHS5g628SsCey88yb7wCLaX3dAkhMT5gUP8BKYkTt5EHGRwHbQaTsjEtGit9jkDcLkXTtuHsv",
  "key6": "5iXXfCGBeGn2TgSnC22bKNYnExdvwdwEyTTGutCAzLfTNAHqc18izH2Ybj9itAA9MBezVJGa2crufqB6BRDcLXSP",
  "key7": "xoLce7wy7Qp9UJ3DVDH4CKAPof1aMvtDLR68RiVEZ2JzPi2epAwUz62YeqKbkjRD2fazZWeUicACXxpNjbdC9rf",
  "key8": "5rBfx7hU9mopyRRd2FYdJCRWS5e6M4tEZNNJhK5BBc75EQFJpJiuzhCuwp8GY6feaPHs6N2AxswaZpzywtBGEtrM",
  "key9": "4qADoeksqQBTfu2TBeqX9rhunQMZGBKGwQSLS3RNgYnzwTFDMWVYD5UtWcq2WNZVEzuzaXDrjLKbDPYT61U13Jzq",
  "key10": "2Axnd7RpuXRjVrQXCiZ8aNEwzNLktnxaqk5J26PU49WmRbam6g1XQDs5bS9iuek8xSihZf2BH83Ac7AGpZ2R5Zop",
  "key11": "5QPw3RZrVB7oS2zkDwdsHL4ZV2kywWxaPLVwu657pX4dvz4NyQFUVteceJk3nEyZk6UdN2a5Vgy89CssHGXVPuMc",
  "key12": "5b8oMEFZwkA3wLQMfVWCrDnSnprgmQvZ79Q9nHvw4Rd5BbwWoDThkMdrcFhcX9GaAh8SFbMBKTdPX2Gm4NNBEmfz",
  "key13": "Ue8S4eNSGyTfzoFxgX6kCUDmi6KGyE1FELnsF8ehEThTnVdDyN4MsBwD6V5b5orHmLUbK7t6imX1QZVp6UhvXWN",
  "key14": "3bxyuSPZ5qiuF7TRHL3EpU86psMcXEchxjogBoiaPjDhwBmyMz9Fwm5UkapPmB8KxMcXEBmejJ6gGtetRKQUPojV",
  "key15": "2QmbkNaD1mJ1c6KtNG2AQgnr3g4dpvZyv8roCPQLfqfkmoPj4kRBJLdozGHM7PEYkVCUozG11svoMopB5j7qXH4",
  "key16": "35H3ET7nPdGRApSAwdYSjBbaAU6fJpvWmdYeGVd7kBDdywGN2Kzpf2SkEU3Coff76tz3D8NzUk6X54yx9w8zeH2Q",
  "key17": "4HqRKEG8RtvktYSZnqDCxhYbzMe58af1abW6BQfQcvTYeFbt2KRtmbigio1tPU1X8huf8UWkK2i46Da4MP7tMbdW",
  "key18": "2q77yBXG3hyxX5G91i4t9kUoLB9guAF4Ru5E7qtcqJe9Zt7dCpiJpMQGY7GNYNMQJNssJAzro1fuKbrBCz61ryto",
  "key19": "3n96V4QongwVWPo2nCMmpokyJaLM2ZV5bCxuadCwFSAnNgi4Nc8gV2bZGFMuknsQnL3ZqDwGZaE5hmjXdQXEjUTb",
  "key20": "2e1pGXULu5EJg9qUeQtRbW1trxwUgvYjAZQ34FKvHyPuyC12cUDLLuryakUV9KhKs8ZPWsp6MSfSFq4ZUjewpgMc",
  "key21": "sDKzEYyy1Zau6zeRBVgbimFMaYfd6v5na76hCpCKkpJgNjZrfEs4mjpRhdp28JLwkDE3MPbWybdeo4Rmotd6noP",
  "key22": "5PaSvSbxT5drvT5m7M3VvqyyBtwqBHpDmbCdWKcF5nG1npema3VM3DJQVq2oFzrj7DPLkTWN9vtvzJR9rxzDZ4BS",
  "key23": "rf6wVLXSzNYd31mDNvv5K4oG6qKgsbqs8oRupSyyJ4Gk2qNXmEfYGTXyLFa5Zyn85jg741dkkSh8WxiaDuzByzL",
  "key24": "ytUpjhLnJXrLrdvrvm1R7iAfbvwTXdSUN5Wef5uRwKJ3a1RWjAbusssT8KLQrvdxt86DYoQCKwbfcyoSX8DuAyC",
  "key25": "449KGUJFUZaqGkRVxsSCqDZetvZyEb1piDBHJSwPDoWPeTm6R2cKZ82L1kuABtPopuShB3zkanb9m1n6DTwpuo5k",
  "key26": "2XmNLe9B5q8UKvykyAyTQQJUh4bKRH3zoJSrLLTKciT6diexxyTFCu2LLyCmLQSNuH15ZGGqms7V6F3mgK1fMRfW",
  "key27": "AyUi26XWXVf5d7Zq3oosXs7QFp9p4Z5nQXePYkZst17WmEwZ6mVmM2TGJSa6F3bLuELuLxcFsnTgYfRqJhYNLHL",
  "key28": "2bqosuuR4LujX6kVuscHQVPdDDSy6aosejhXejHoi46AETFhqVbCD4w1f9QiVykMHTBHCV8TNJjBrbXcVseatck",
  "key29": "24HayPZsXq5x4eEcSY5otehQp7nRdLGjugcDzw5FWw2vqe5XvQ2JkHc4qUf4vHeqHAigZKmZFWoc5NikxwypsMCT",
  "key30": "48f86NTB5NzzRrGD4KjQHmSnRENt24oEKAAt9tbKm7xZheL4Xq2r38Wu7wBQTrTsFMjrSU5GZZEt44H2iFeXLm7o",
  "key31": "5Cyig9rv6k1Bj2Scj24kjS4WhKNHDfQUeg9QLNtXFVhTTJXfimtMXFo9McbMKXWsqxXj8vWXjHyYDNBkj5nNtLNC",
  "key32": "3QAVVTpYnSWvvFss9EDUnCKrWwEu3uHDLCaehBQ5Jq18vnnNPLVyh9niVSomnhTBSZHBQa5EirwBavMyT8PX35dX",
  "key33": "36tFhupDa1bNwfpMxT47uaKNJriB3iAqDGPQdawgg1uoqCXHzCKyJg7SoHyTpYvPjzWvYfgPpU4b5FePi6GXeSj3",
  "key34": "3kLuQrZVit718r5CMtwhe5xMn9ymGy68FQJKAwi2yUiEX9bxbbYihpUd8tWPSQWcCjPsXXRq8V6GYtdfjLXtV9aG"
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
