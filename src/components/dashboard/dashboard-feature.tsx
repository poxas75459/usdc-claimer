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
    "2nsJZtC9djRxdiVqS2S1rEFnSMSy33euHWTaYJNXqU8oNs4MiPLMafMzisBNxjjvHsPWw9zaNyZxPseJ96EubQ7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKiLqrNZENCdhAHZWorrbBkzu5kLHfaYjs2FpP8HP1T677K3YhSEDgwzLavXyQ8BTDtEadsqjRjERecfBEJ6jSv",
  "key1": "5Bn2hUoefz7Ap61miAqu5Jfk9exAiW4yHWdn9m1KyXRqqhmfteDnQctZVar6RpEEfvobKZWpuD7YF5mQoHupi86M",
  "key2": "5UUt4BV827Hna735FTabaHZzaGbBvjPcrXYeznHczfgYHvGVvmiLDCFxXEeqMakLoHTWx9NU5RSAPFgLDzEiF9uq",
  "key3": "5ePH34jU55kE8xXCtuyCQ9gmyothbyYJtQbgH9N9aVHkD19TtMdC2Pqd1Yb1rBt7qjiAPK8rgtGf8a5cm3Puf2sB",
  "key4": "QUo7aiB4WgHAkuDk9qM8vatpCcaNADgLwQzm2TuQL7h6NidDM9FvY7bxu3N7tbMM2JmHA3HdHbomWgKeWEzWMST",
  "key5": "28BndGyZPqxgFhCU7KFM2auCmzyRHNKMTUzGLRJ4fWnjte5EzFxQziMJbABoxWEQWmSJKbHmsRPQkBoPrq6KQ7PD",
  "key6": "3kCpnConzCcwJAUaeQPMRA19FnHn5ceoPY7HiGosi33mxNk8E62G8kEDQsv5UG5VPososCNCgyRRvo1JKem8suUz",
  "key7": "5dM11zcAvHSoZTHiBvJnRyRCd9ywvQXyg87knjUmZEV7WWiUYEQJKJyAH99FgDf8SRxXwhYVocnigpX8ooxw5YrD",
  "key8": "omrHn2h2iJwStXLpTjicQ8EKExKvJgdb8RiTLdsMioG1DESf7mCexNQo8gYmJ7aeJpovY7QERyms3w2R8MqpnZb",
  "key9": "58MxJXQ9nbCym6GN1117DpsgAGT4Uy95E3Y63kHgykBx77aCTbpuKHDksABaawZUrfsRe9XKRSjBC9E4dRwaTspP",
  "key10": "Kg2CRDnMMJ5LQBBWB27dTQJgfQWGkETPJ7pr1b9T9PsS3cPjRGR5feUPHURkxEtfL3o1TWXL59uqMEGwfHaUhsJ",
  "key11": "bbZEkN5SxnVmK2KBnvAUvhtpo8qi84D1oaVpE4LnqcisPGhesqmNcB9E4M2nwo4pqTT6NM3hRgfChhwnNpcckGh",
  "key12": "5dnnyrGmxnyZpX9TuRzSCgZn2f7X3XGpW6NgF26BguY81aWngvgGTF6cd43rWgv1YDGPuW4ZajRqEFFo9abGVKSe",
  "key13": "3L5A9R9846qK5dtBJrxxnKUi6FUPQ5PmfXQDH1hYFKNR8UQ6qTDxjjXQvypZjtZ9okKU9vWy3nn1aBRFjYAXcpF5",
  "key14": "35LPvsUNZEjwpNwRqZNmZ3GzfjBk7AgvXN9To3V9bZUFHR3XTpDHGcqXiUGYkqasaAptUTbRshVkXY9b1D5d3P2D",
  "key15": "2F4nnaWTkdZi2NG6KPpB6efDDNjadndp9YwFZw4WCeZGWYpTbfQox24pqhGDa45PGAYveKbdxsbr5nqrdPSqziNk",
  "key16": "3tSu2iPBYQXxjaGgWtESUxQzKTgUYawjm4uwt7pAw2fzHUYNw9T2vE7qExyA36EzaoKXGjzvDfsyUb6G2fmPpcJg",
  "key17": "2fdSVNfcCRL2C7xnLrJQA6eikBowbDixfacvkLQZFagp9dJx3temP1KnWQgXZTSnf1fUtbYwyqBRunaa3oMbcqmD",
  "key18": "JFCGZYFAEcfw4tSnQ8SP52HmhYMBB12L7zuFHmd35xWb8Wq4YYeCKUswo7P1e9X6YymMPC93Y49FEzqER3xqnN9",
  "key19": "2pYKeegxQFVigrY7hbhMF3suVLvsbHkKiaYUJmp4X7e9RzeonDLQHeSpnhJVRnPaRK4vTeskusk2iPBQ3iMCMwEM",
  "key20": "Q5qhssBGcc8aVEYB2F4dfsdE2ebGqjq8hv8Mr11R2SZqf8j2JHC81kbSnGKsH2MzFjCjTwJFFhXj6fpaJhZJaJj",
  "key21": "2Rbs6zVHcvoo4pnSdqWujXdiTt1HdVX6eij6kz9eFttiTqbegxdR7zW12NYa6wgoWVWDrYwYbUW9LdD4A3aNFMmS",
  "key22": "4rR9a6t7wVe7siZ1msGHTcje1nxhVoRkhUJCSQhQJBoB8GjJ9EcKPSNMzdGTqV3JUU6vXX9KeN54wP23Wdt4kgkj",
  "key23": "5B8pKEfncKGksZYkPJUDvo9NmSJX5UHa2gwuRTZfgwgrGCugXHtxyu8W7PD749QoMf7i1nLWF9DLCqiGbpsEXTy7",
  "key24": "4C43C9yuukeneDHiqGyU7YUwXFn8bgyUbHZrrYnNfVT78jUJ1gnZ2G7f5yXKrZRqJHpfsedmZNVh4hUheuTGw4ZD",
  "key25": "SkRjgJjydCZZmmHaiRkj173JXUzC6n1tuzDqaMV1MT3EHkoiYPmAi7gCNqAWdvosherkQaipfPWZbnVL1r5vSAN",
  "key26": "5BY9HrtPQ4MoACLKLJxEhuyrGvNZ28jPLX2UJAzis9CJmLgTJYZsbzdQRG5yr4HWVQP262mv1doi5ssVGdhBfUz2"
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
