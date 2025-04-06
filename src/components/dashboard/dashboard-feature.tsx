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
    "474RU1R4F6TntsQV78Xye2j3Z3HdQaHa5DLYvDbRdqHXe9MFXwMeDz4abgymaEkbumsHAWqK1y5Azp3QUbWHYAcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tthrjYj7cC4Vm3TZrGFz98u153btZpW8mJBHMjdfHUBPVxQLmSwhq6ZUVwkxZSBqD4HoVgUsRpQR7MZX3rQRFvm",
  "key1": "nbu8nRaukk2B5KjCeuxmKedSnfNQ9KCVuNmv2vtMn9odCoVix1NBESWZ9pC9djbZDik3Pr7oA5p5ERXQdyD6SdH",
  "key2": "okGeFMWvNAac1MCsYDN5hvmAvcAzKqcbU7tvuTo2qQ2pDXayFATAbkRRkQj4neLUv3hzL6TXRBP4TCFdWWVje6b",
  "key3": "63s7CRrTto5vSvstQ2gsiwU56kPZx6WYDrUaYxuTELpJsfHLo6LmiC1sNbFQm1y3XLr5C5ARTM1R3WtrtFdXRRKX",
  "key4": "3QNqZSJ8p7EXFPFxtqxE1UcWQRMpf7nk79trruUsd8L1jfhPhRiZRRHKhVHTvkaR3rENbS8joF21V385s2Mi11hE",
  "key5": "3G8nho22WVfLATwk8tScsJrJpJ7RB6zHfpYnxTiPBDgT4nkzqj8QrEnM75hk35UGPSnMsftU365Xc51jii5N15AQ",
  "key6": "3e1AmwkVh7zCe42LzS7e5Arb9FncZ8gAovFp9HX976BDdycFdWS7YaXY7zNg9NpShEbPUdq9gDcXckCwKfEfm52G",
  "key7": "65d9AuzEfdeeHx6bRJnKL2K5NvfN7fUP2a16pF4VabmvNhYfUJTnFYuwA47BeKnbekNsEb4NnHmSidiKHKteG6dW",
  "key8": "m3gnXcc427omB8ZkszMDUkzzy7HPhGw1fCq1QemvSEHF6aRFiBGQ2HXKweHSD73QQsh24gmvzUrt5D5YzxnK9Vt",
  "key9": "4m4a9sdc3SgXY1Kj9yF5rRFGL15DonUF27pQNYZ25jRoVFGTq81UiUPbAJvUYg9XARzzrogewddStQGd4JWJHmAi",
  "key10": "UawcSqSeHeZhK6ja7EnMc3AkkcQVb5udCwaMkFaVKnG8w3XgVnnW5vjNZTobeAMDkCSBsPnoAn3qoQWSeucwHap",
  "key11": "Uwf4RxxY2xYVTshaTH1K22tVTS5CHaJDpwxpDepyEtpTtv4BLmYAWEBowN7cuV5D8NHuJiK7jZeLaeoobdaJX7T",
  "key12": "42zJZmJ2etjG6PpizpNqDB1zzfwardK7HjvtU2DHjNj2uoos9VkicTwsUCzacUkgTjKaYDNjcd69KS1vwpGiTJFc",
  "key13": "5VbLbLEqZkJc71VkgJ5RdM5ittebBQVmkafTbScarCrwCePuupBPSwNmq4qPiMUF8inMgP79ixVqF7g5KAaZA5Ft",
  "key14": "4UkiFi7oLgjD1py7AnE9JSAmz345aQEuPYaQojJWKoUHacfcEFu8ECH2ntLA3Q2SSBvwszjQUo5vy1fmWeKXkdnz",
  "key15": "4bBV95BTem5B5tHmsDbGhVZNCDrGYcfFHR8s69vRFY3XF88kBPsoDzizaibjGNNTeWcRyHN2DRkhiQfMyBDq7kgG",
  "key16": "4TBBaiGXta8EGuX6dfwJsGgbhuoFSnRyBSf4cy2hCU2tcs3TwEbmpu9ksLQaStk7vUm56sc4ibd5Xp6w87a6MdXk",
  "key17": "3RVYpAMvac3VXjmduSTtm33aYw6VQPkBgoMXqWxPPU5NGnwNHy3Zm3J74Rh3tWn58hW8aK7Vvg97JUfcDUWnzyZQ",
  "key18": "2rHd4yNMzBuPg4cueN8pmKaYEodBh5Vc9Zpa71H71mWLkWDQNHiX1LisajdaGgHsv1w1rxJAn3JAixG7axkcWANA",
  "key19": "BdGYDaUxYa56UthWPYsxXzgYaEhVCDLLFEQp1e1Ph73eUwFVWteuGy1M3cPYW6dHtoev6Vat6ajMPEcvk3vWJEy",
  "key20": "5W25fSg4QA4HzrW2MopC6zABGSF2LtKRNXv6CLjWQkwiPJS2TGjN9rvAsTVLVQwg9mT37vfc6MZmXpr5g6jtsm48",
  "key21": "5pNgruLP5wHQLQCu9R5LGDmo35TVMeCaZhCVaEpFTqJbYSMCtVoCpCtBaxckjdcpXui4rxKtB42cFAPZk8P8d9Um",
  "key22": "M9KqNaptjgPgQQrmPzt4H3rjiqeBBR1iaHDKLuJMKhKZVvxvv9ZMP3FyWhetqD3tSX94t2tUzkMEBtYpoj61ZGY",
  "key23": "93q7ZXxQ99cZkQ8z87vNgzjncgzX1j44cBC72mdELp7d3g1MTe6XCRF2ArzLNNfM92DZC2E8KsuHBsxDwBgE487",
  "key24": "2TpfnmZxn8Nm6FwgzgtZRzHUoE6xZnc9vEPnuSwXzjLug1NEKrDcUvaEoXzveasHUGMB84pHUeBo4etmts63W2cg",
  "key25": "5pHTjfUEizxbK9JGwTJ7mXYa8AhYHfRYcpxg5gpjZ994yfHG1HjiYXvjVnDmTpjmfeYN4UY9ZADUSqcykKRzTfG4",
  "key26": "64CNtrAx4xNkenoTwkKoDb7okGAYgyF4itXYhqpm1sbWUj5Nw8Vho4xw4vpZ1ywychyPm4fBuZhbBDZZNPuLuneJ",
  "key27": "3Kz2oLRkTcyouKtqcBpUkeSPVhwryLWdWhr6RaukCXuR96SE5ZobTYbtv47vMwdZt69Lg9gFQYEERQrntHJRtiJ2",
  "key28": "2gx92cNQvFhDagcW2uUApxn9TMUQKZcUTah3X17xyKyT25E6yWRYwwyB4LsACpE3qq2qAW6QGy3cP4zSaHvnUerF",
  "key29": "2a991FWnjroRy9Xh57BJTPtrpgWNRMgtvZKno7oChhbXfL4chT1fcpajg1YPnbCkZe43bFVQsbd9jGz9xUAEVduG",
  "key30": "4S2B9tZ5HFiYRa6FT2T3VtKLREkwjX9NENcQLZiDD35mBk8baCftrCPzv85whNxWLYvW52gEj4Z9eNv7FPkwFNQn",
  "key31": "4zZVp5nHzMMMmY1tSTd6tcc45TncvdyqqE7PfigqttPcNY7dsQp6Gja4oADNWD7aH6zRrRo4qK8GL6jWf1rrGwKm",
  "key32": "sVYLNsXiUSF2hsRQ2xeRfzdJUdjs9hc38Q3hJezqBKhaYKu15L7qqJ1j9cZMYDXtoBRxauDr938c6ru1LpaEXZ6",
  "key33": "4AZJ2qTSE2TCZVWpUvXKuwgJggR8X6EiHgMU4qnfx8ZwZb7dkvW6PmuYbndhEyJF9Acwewi7ZgXmkbLcZjRLGFZQ",
  "key34": "2QyLNvUZ5ihiGtai1PJJcDwkhty3wUQEqxTjn4ESdwQQPuCY6iHmzXbJzCkGLQ5nGv4mTZGuXMnb8uXxwxZMF6ke",
  "key35": "gPuHbBdGpjucjUZdEfZ3zpcNTQJ2Rzsz3Yh2rX9U1xTQeMQB5ukqpELUtXpqwr9zUYNJAVZTAMJcRiuQzqqv2sV",
  "key36": "49SfyFPMH4RSSXH71rD3gzLHyXq9HeDGp2kmTw2yk1bypWrWedfVeR26LApr7hxeLfZAXc9b8Ee6Rn3m8g5LNob4",
  "key37": "1WV8JM6NMD8bZF8Lwd6bsxtG2USNVqchHsHjQZnLURAXx8xtvNzgoQRnDrNrNKwiJnUcsJ6DF9Rck9xTmSqKhXq",
  "key38": "2bMdFo83Nd4xEczXsAhoUtx3PMwTgHaziWosWvEzTwLUFrrjrCL364v4aRDsNnhZo1BW14UzQcFV9RXmJ9NkGJiS",
  "key39": "5Qx9tUz8ujinNrDh1J5DuVNNoDLKRTfRAaPotBUsfCabG3LrmBGj8wP3QnZ6XoMgAo9YyzMqVdGPCoYcSQK6vhST",
  "key40": "5nhjDCRKo7YRVqkrYNam4SiJGTyFCYZebcoAXsLe1JSFnNkc6ErsZ6rCEKnGnuwY5wheQvLpKWbDSWz5AjxPqLbE",
  "key41": "3j24keYgBHbCgKkqJ1SJG8PEEtU6KvZTzCGrapzJzRDZ3N8hxRgAKLUSLMbBNJEjRNP4gDmF8Arff9f6kXQK2eRv",
  "key42": "MGJG5jQgodH45xANpnHKwRi6F2sUfwdyFxWaUFYUQvfU8Sw7orfqEuSqhAfY42wnVdWd8C74bL2nz6jZAbgvZCE"
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
