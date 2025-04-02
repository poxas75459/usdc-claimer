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
    "62evba3mLZppjfmG23zP1WNYWCGrQkkCp6BTMP1emSbQeC69MgJLdN1RTEVHaqPXmsx6n2fha6ym4NuoC6hz18F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbLQ5Mf7PFTf8Zetoac467DL9ZBg5KRgJL51JNbsPV8uVRF6CfPm9uEbrRtiDVdL5LM6jhx672k698Vx1jfpyqP",
  "key1": "3CrHwv4QLC5GLxw7k6sR5xxXT5PbehcmgMGmj36jhnQMmVZUCqDsfcpyJAFUD17V2pyksVWPseApT5FyXxFVaUqh",
  "key2": "2qYWPhZX8BRCWif5Nh6CwxDN8YLkcGmHrDZEupWjw9dxzqzXoPVXnsHyc55wJqEHHBVuGoaJgpLuJTVMSp38XP1P",
  "key3": "KbHVprJpWvfFrJjRuTcLFJTbHb8FyRgbzLCuU2erBFrGY2NjCz66HoVhANiSQGueqkALpQ5evStuFyfvS3ZSSgM",
  "key4": "38pfpUBxS9AS4xo8sTQ8qcwMxm8qZVyefnqLMwFA9tUB3sPHeYAQvow15cXtNMDornekePDtYqbLgGsqa7PPBZGx",
  "key5": "5v7vNeVi9VtLzaEvKYQpKEKfppLcfSA7rTCd27w5wqdUYaAWFRdJEcyfg6Maa39EqjDk69DyyBtLdZay1p5m17n1",
  "key6": "587M93pkp9wwc18PgEBuG9D2SzY1eqq2wUA9LRhdDSYFa57q9hpmjDpg3v8FL174bLdtRXCmTwsUf7F2q6gkeQya",
  "key7": "2q8nZjkU6ZkH92AdQUcyd6L3TGEphuq5rDTH4qHEAeCz8JAgjCDZzEVx6KcATKQMxWKZFT9iRM9qqJqUQRMHufnH",
  "key8": "5dTaH5SQynSPX2uGz9hZuh37oZobo3daZDgpWCKAFKzdUMcnSHstL3AESVBWWj8vjGiwY8E9Lsc6aLVFTQp6p5NU",
  "key9": "3sL7hxSuCMiLmMUFK22o5D584NdphFekcGPmHozpRgU6MsNkGbSfoWpyTLEnEPQyHZxhPf5Ey6DJaJNEcuv8tTEa",
  "key10": "2mRQEr8TxicVYU6VsGKbyAQc9UqQqcXVywJgKgqMyUbARcZ5yZHL6HknJkLYobK5dPFcy5h78Tf2nyfJZEB3s7H6",
  "key11": "48bA6bdhApNCJmAWbWAb6NVSdUbdhZoEy8i4jqEtELEGvM32DKKzrqRiPBusCNrKFKJjPy8W5xjuc9UWa8BD3RUJ",
  "key12": "4jUkccz33WgSeYqDCDoQXJgMd3rWJdY2UVzKGo9s2TT2YSzuKAgbQuVJpsPN9PcXjXaBJjyokGh5L3DbfgoNmoyV",
  "key13": "3vdhR2ui87kKaCqqjC8darBvXCgS2QL3T9LtJNbEFqo2A1jFDGxMYbh7R7nmZCwEvQ2i6PBnTUAKVSp6dcbVA341",
  "key14": "5taSTrA7jirJEzkXG6JvFX1k3QpPTwQgcGJRHASGWvd9KzdFXJa9ce5UALzLY5bm4FnQHHopAFXdUxau6XkX9H8o",
  "key15": "ViW8ruZWL2cAEy1zut6S5aeUHX2GESsFMH6CyqbjkSSdW4GsBWevGofFtRJEUYtrfrWGi7pHgeFBZy3QuSFAJxy",
  "key16": "3FHUj28QvsgwQK7D4gMULgnXX9VfVur57yXVA5bNF3Ht84reuTUzaixpsLY7XY5SQ1jRVvLW8Dqav9YDh6zxfmU",
  "key17": "4o5cKaVMuXcXzncYgARHXKr3d3r5Rm1wt9xjc45kzoGbPfkj8WX4wrWEurwqvmsC6FuHnds5uGTguPFk3RYYB3Ab",
  "key18": "63TP9dyEGyBQj3e17G2L8iJ3XTnfuEqnLrQfXwmddDFK42vqmiZtVuWgEuZXGkF9QW5PYdnfgm9L1XWmYJvZ7cdy",
  "key19": "34vHdMaE4Yoshc5gJfEvaMh1CgH3hK32NpT9D5R5QBeWH1MjQ3hfNDGSuPG5XY87yDCnEthHVdAxyCJHuWiBbJGv",
  "key20": "5iGB6RK6RhyiPd2jyZ3iwbk5F2MhNBDmsCsdnoyKp5WvfHhFhFy7yvr7XUkqLE4WJEoKueehwjgWCeCgjg1mQLu1",
  "key21": "vwof66FBkCENP6hokk7JoxJ9uPNP7tSuxXfb72SdueCFGtZ8sXT292Y2LUg2TXVbtgHA7oq5oCDg2VWtqaKSD9F",
  "key22": "3HbySCmAq4z2BNvjg1FqXP4w1idBB7KXGj6zGBvuH4T8ohe9MWTD5e7mMUeE94HTBRDjXtYjD5GgL2D6Sxe3nupk",
  "key23": "5UpCx598d13bNwF4ExoLAVbRZnKfpf9cMo25fjNnsrk23d3DXPBfoh3woJdEBMGceNtKqJWXtSnSFov4UAXbdsBv",
  "key24": "2osy4ayeSgKvgjHaU4eafEZGTcoW6RwuN4kN7446yXqtwdpC7muaZAV7e7QCTermpFQQS9C2KeBXjCZEqqTWQdn6",
  "key25": "4MdnmKUSjf1xve2kjuWhHkssohoqBeU1LkMqAhCFzJuJMUBNsgp8u4FT13qrRrpty4vyo8ZoeY4dZGcMR2QBALHf",
  "key26": "3qyFbFTs1fw5CWcXv3vtU1S3MegvbzQMZPHr67YpqCUUrFBRCfF9zWFg4DpTjm366srgY1iAomdNpwaKHdhXgKir",
  "key27": "5PEMZ2LNNcD8wTjnyRxvYAHAxqnAaTVQGH9gopmLGHQAPm4y1TpaP2WgUDCAA1gYK5eAiZScfjZqwxM1WymGBvpK",
  "key28": "UqR4b3XP6Mwap8h8XaXNFZMmCWUSh11uwMAMRrkesmnELkfutuPHaT6SVRmgRGExhThgLU4SdUe6BRu87qZdh5R",
  "key29": "5efs4VrtiGzDF2bDnQtaiwczQNTmQEkULJ3uQP6nWffPUu1b2LHwcAbiaLnyzrDZSvhZYNdP4vsEV5XHQEZjGv4p",
  "key30": "5ZShybsUmLDQjrBSJAYb9oWGeazhUg2NacjFaTWw3Z1J7NMP2ZQKBgVzTzrd7Qm9STRF6f3NKZaSfUsv9d3KcYRK",
  "key31": "w5MnG17VpQRrBFYCxKoMtrQSjTAbcCd7c4LjxHtCF4t8WpvrN7rRcHEwcx7cYUZEZsndh27VBq8tWDJyoZRafxW",
  "key32": "2PmXtm1z9Nmv9othyVSvm6fBa2fnQCo17dcxYR83DXpkLxr8ZXLkK4EyTS1JtoXt7CskQ7yK9FhHVQ8hBJredvP",
  "key33": "jVr4G8vUoCZNd5mMtCvLeKrbjsxUKBUU57v2gWmwEksHdDaZZtnVELB4qT3nJG6W35X5AULwJyfEPvLknwuN32K",
  "key34": "2qU3oaHjCWPVEejYGwXc6AQi8dHbPY3jQa9fNp7AM4EBUvFEXLZyGehyipmCcR4y8aXdsRKLYS5ED3eTLAAFtzoC",
  "key35": "2FC8idmKrEkPRw7VZimEGgW2vD4N3XNaDiQNFn6SKKDsVy1GXrgFrWjZpg5xZujeST2tcXQE9enzBMVJD8XmG7BG",
  "key36": "3SZueyaNK9PanSSDbKMNUkFEVhwEAwN56QWVknG8Jqt5ssUWtNsFFSQJBgy5D5LNsQuiUZdKPtHtdMFn3kB9rQiP"
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
