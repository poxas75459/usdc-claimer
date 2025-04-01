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
    "5717hPXPeF4D62zRnxaqstpveCNPzxGQSXfLBMj1w1XNttYjhrVwAJrkKRFpDYpYDPLkXwvBNKHMw15zmY5sMMGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbnLCivmd9vWNYvqZz9rykD8HpjsAXyJ6nayLyhEjKJ4cHooczQ7GoJzuMFkbJS5FaLZcDgwMymwtk6KT3vTmiY",
  "key1": "5LaMQECSvQ8Z6THARs4vFWyg8hnADh5SGcSCwZrMPDmTsvSAywMrwXjaUhGAbjr2hwTgCZgKXTJn2NqDfSdTnaH8",
  "key2": "4hnoXN355LZMw6xZenBXD7xdU3sp68oZnJVWJgurjmkwoPdhTBHRqDRStFCMXc9VZhkBUpcic3hpRfR6RKgb4RZS",
  "key3": "2UKdyp943aDReMyA5Evo5voUmvBCHt63NrZLBMVywfu3WGKimVsERihbF68VU7AqHZQAcxjwiMgNfhjKsyRE178v",
  "key4": "4tmVmpjaJCRL9jBE4fPp5HwkL4XZkgtE2sJHALXzN95EokwEM2favy81TwhjpzsuPZDCWoPw4s6K51PafRVjRruQ",
  "key5": "qAp5X5AxfJvKUch9RbXb51sUtRQxytshmx1CwCuYJpYtXss2y3cgbyJrmiJLMiuo9VmAWFrdTuYHeeJrSsdobgZ",
  "key6": "JPh5AhYDmRjTuLZN3zFN7F3ZhwAGenvcGA3Nfmhs25meAGpMnv1vagf5ss86ZHJ7z8hqEz31hHnoJCDibVoQJjx",
  "key7": "4boCdrRpzLeAnfvwQpUygbFgzLYi1eeY1Jnngh9rxkmmGevhw9KUxFDEbxdkSE2BV8aYTnvN8VocKizibsVvV2Bb",
  "key8": "3XuyArLqEfxjrVaEsvCb4PNfJrhzksnyzNkRFzYEUendXbo2Ag8MCJ8wBjmH7z8pTafRzENcuENXjUFJhoVwCunu",
  "key9": "26ZprQx7qRvdLDSg3Hi2mMjC284TftQcqJrugh1GZ2TgukX2QCWg4BsjudA7sYnyWMq2cC3gQEuv4QZenJPE2fYf",
  "key10": "5JAzZW3zyEJ4ysgmWdh46Ke2xtpzq44EGoQwvLqPV6DRw4iyj39SzkEZ9vs3ax2Gw339EdjgzCwaMASPuBCapiK6",
  "key11": "5bSr49Ka2xZ8KPzf8c4rGMiU87VK9yHeYi8bRKwg3J9fhVxz9M8QXH7d8uiEhqCKJ2DaLb6gTTwrhVYcJLpTgZ9P",
  "key12": "2jUSjCWSp172A7SsUQ4ocLbzy4nKi1MmGhqVpy2qjWqEtwMR7x2XQ1fZGengGhuLfd4Ru6zTyGaMtianoRTj4BcF",
  "key13": "cVbcoRYn7CzuaCfTCB3t7UffKhvrvuFr4DGESZ3DJFGGQGtnksiUTHmsE8BqgsQyc9V7UKf7LhmxDuShGGcLCHN",
  "key14": "3CWh2pmK9kVAGE4c3kZPWDf1zdJRuG9TZce69TvhDPydxBDDuf137eEKgfH7uMSYdVvjPWwiafFvbXmURXGepPR9",
  "key15": "2eBXN42Twm6dLExNm1j3GDfwEXxGsRdgbc5CzmKzxZdHeAAfbtfPy3KSQxFaQZ7B98NZkae8N4sgriN1qPR7uevw",
  "key16": "EKQh7QExLpeMGCSHjyUsmzR5Z3EeaCgEoRKdu8qx5QSxnMPzjVWBPfc4Pi35pB4EocNyzaJj7sWaUckz1gkj2yG",
  "key17": "JA2hQZQLkibPwCYAPDB8zJeHY3a2zNuNzehfXKFae7aG3UmrHeoED49ZVxjCzwR7VefbP2gpqRLPkk4tpAhBest",
  "key18": "2XLzG1Kc1FofGsyNdCL7AYdvRgPCiFSY6d4QBc3jEgiY8sKMrf44HZxeWMbwNsRajLfUiaSfawBk1icKG4XZr4BK",
  "key19": "66CSRr76GeFCGYHtEYN8kj4ThABugwJFrjmVDmYvPtvpoHC13ezb5cnYvLDi1utN1BngcuLWmaFBp5f56BPuizK6",
  "key20": "2iLonnQ1Ban213bNkP9UgZR8toS2W2wePhnHMYW2weyPdWDJCJ5NQvYVeHUrAsWJrZKFhAoCuRuiJWJ4fi1vs1Uc",
  "key21": "w6TU7G2hykQmddNh81KnEF3cYtYRxyXR3UefmqtnwqBPDHnC1vpw6STEVqQRuCv6WcxAMvgjfiswwMHtbJ34M1m",
  "key22": "MSiuyTyckq3kUPqiYgy12Gft8MWNyr19MbwGQnQzCqF9kMV7sUCE38DPBVj8bbQfKPmxpVQVVryY3ewn3DJmajY",
  "key23": "5ao4szgf7PaeJvDSVtwrQazavjpN8bnWWwWrwGVBEXXUyuQgRGqt8cTMkNQjmdd3bAZbeBtPqp1DfYwdxeSpZxmD",
  "key24": "3V4rMqMeyM7mLsyX7taWz2E4ipieEzbs9DoYUWPZtxZsPSqsJsDuL4K5R5zRSGTQJhN2fuzayorwkv5ruJGzPgx5",
  "key25": "5MW4bVMCKbtEo34YUuPFwv9Mijmx5E2UiXYTVYFdgziaR4eu3FPGh8c3V4FVgs81fvreC4mJkHKosgBXkW3yPA33",
  "key26": "385d6BH1tFooG47oJzVpEADsnewWUXRCWaps2hnrdG7Zq3jpP1H7tLZRAUMSj1wvqk5SB4zoTjLBYsRqT9at6Zjd",
  "key27": "HNioMZk5vDh5A4U13QBmjHNS4SnmKaX4RGSvYoFvMop4rRJoQ43r3nxfS7Nh4q9FX69qkwE4v6PYYaMidgZtMrR",
  "key28": "53eYYnhErJa2jdpcSQ4i6rb1BMsEFX1dRAK2r9Lq8i551NNW8SNBw3YAjn1qAv2Atk6cC73oKhsykzRG1iPYghoJ",
  "key29": "4JViNS5u1tPxQsXgc2hiG7w8epPobHPhJybD4UdjFQnFMJFM4GWxMSNvGt9fvWVKTvVcA4qQojsSaGT3eRRoKZK",
  "key30": "4Ycb6J1fqSxs5z2D9FfhBUPcb3Ut7YGPQNjy2EdngLeG2JPREeRTh268bfvRZMpHQFmTRCk7qYKpcDBu1ueeAars",
  "key31": "3YPNBqh262rMzAGesrSZrwvVAn7gmEKmYbCcDPLaBT8NB5gZXFeSNjB9LTszNhCpxFMLYERC9hxRE2hmzhTE2RqX",
  "key32": "45WEFDZY5iZrgbDiTVM7MntmDVwLoXpXLGC2qevCqjCknpkpaBKMTCSQQMDnuukMJYwe4BrqsUsL5DqdrpFcLxkv",
  "key33": "2Cu7TRnJJsBscMd4R8YT7KGqRMaZaFbfrzJQhH3v2ALyjQkD4CYrQ2rXAA1XaPkK52wGfkSKNmmgbPjSZ2a4u2qh",
  "key34": "2SHmM3QetmXpeeS6sLihPkgUawJLw4Sncd9L1RNa3hJZ34jUbo86aU2DiouaAPw5YTo47ELqUSvko4indYqsJaVH",
  "key35": "irYodPzfTHjeKvzcmrn4LJq6HEoVxqNjx16kX3cjFWV4pYfKgXaGyv3B6tpbnfKX9SYjjPHz6ok4beWgTfmS7xX",
  "key36": "4VK9rQJh18bYXZDP5b6KnnuWw78Q8zHkuT6PAT1Rx2FjGqnWWCpRSxAf4ySvqKNQjbxqUyLmkN4sjqpDbgCWGtic",
  "key37": "5TfCAv1BMvtiCmXXm9sMXEksentAFCHDkrpejdriZ3Qgw1RbXH6NfTgzD72gRuN9ezFdq3bt62adTz5XNtS2BfsJ"
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
