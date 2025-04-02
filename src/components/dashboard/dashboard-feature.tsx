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
    "Wtdw5ZyxFV9Yn8KbGZGfQzbf52zwubYTXtHwvGyKW7nhLrE4gBN8k9cV2RGwhnyCXNfeDU5gP93kg9phYUKSo3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phhPAYenU8MpbApBYvJAYgsQaVH8NfPaMzaa1vKxDe5Dd7FE8WbaP7F7FRyrra5V66WzngjeZe92E2waSzFoRet",
  "key1": "2EY74iCZcJ2iubMEdVm5kaoQxekBpBQcL1UCsfU1jX6WwwJnUsSrZuFRNtLDc59FSG5HYatYeyppRFnSKapMiwP2",
  "key2": "2VF1L9qTaFgXTQynk4cA2cvEEdX6kYBNM2X6qk2shbFcfuP5tHAL4UfNoofFCXEaswDqYQNF9fUyYEY11Rhaw2ye",
  "key3": "5vnejhAF6b3HdeRDaJ8rFHvXAn5VC5UJ9XUMF4FrjmTTmunyc4VzL1oYaGNDNvsJM2fx93XgCAmYAweTyCZftLZ3",
  "key4": "3juJRGpFYTzVXX7rJwS7w4QzqQYq9cRiPLaF6xrh3uZtGortpDqzZ2YdsUsvuMpjMnQzxp4wPExqvvk4kVqttU7f",
  "key5": "4CzskPq6sB9oH6sLYB1yavEWotrVyysJpcZWMmQSayN3vjnp6qZpvQgRYSZbM2PMFQd1jGCfY5W5SUc7fnN5vTXr",
  "key6": "5VJJ2N7adgu44WVH8eUef6S4G6K17NUk56bhE1PtrdtPr2YWWvdUsiAyMop3ps1MHsAeU98tSL6jrRo8ctFtnaAz",
  "key7": "5YMWKyNREJ7xq8Ft3MWPjuBbCAMngucCMTVtGjBcvqPkBxS5Zpixv6QFJHz9NBt4mumB2PeStBtQ694qHR3tnr2A",
  "key8": "4sB2oCnBvda1Dd2gnPN6cEsvJb1F6NJ77VoZi25yte8XYak1JxGEXU8cvKm4VT7pRxZAjxHmW82nfSKmhLKvshfs",
  "key9": "3Jc34vYMy2VpEVemqZ7z6c96fWrd7CEVCLbJginA1cfcFNWrPWHbfGo4atLVo2AhUYbjfBXMyQxWjrDBNZCGQ3Sx",
  "key10": "3cmyCpf5TMNJ5HoKLLswEwkvRFxP1SnQYd9LmHB16cotTuko2Pp7eY6VGz2UQS1uoSQXJRyMbCA7wrpcA22gFFP4",
  "key11": "5EnZZE24vqiDzXUBHB14s9gVdDNgdKZNPVWn7EB5xBJL2PwsD4nJbCM7VizCdSTsziTv649WZUuVQ1L6xejXjuMW",
  "key12": "2yuP7zFGKfK2VB7cmgXw9ZgGz6XtK7Pw7Px2HzRKL9tNpwDezn7FBmqYaRZ4EDLeqcUDUT7zdC2LJ9qaTXEzYdes",
  "key13": "2WDTifiYbgZEwkQSJqcYz7X8p22DcDtiJ3KN35WZaML72feNXLgCrZT4G7zQ7ygKAXAP47hGVfdnyzyDpZB8mXoa",
  "key14": "4aSJixWRETr61v8JGr6xdDFozEkj47qZh16c9pChRyVSSpiNARLnkQV1xEK2d1HvgSeTZ8AqPog4HNvsrqY2hfRs",
  "key15": "3yFJGVLc3mp5UdDjxvxesy9LL7Tbc59dfi7G8Ho16sgyQCU3tpzr42X7dvDFVyu6MuxzNFGaUjVtJ7uLuygVFjhr",
  "key16": "L1c5gUivfRw3egTr16QfY7eEeRh7rdspShqSDVRFFPb7Ce16gxqFUQvMyaUqR2macfF36CDzacRejHNXbbhWqpw",
  "key17": "mb7gREH7kmJLhvoCY4TpbgvPna2GoGvkLJREzXsKeqt344ytXqfr9WGXoNwE65vEPg4mcib9fnJ4EhRLr42nwGq",
  "key18": "3UmPyhNoPdwPH1umBD9KeAgozZswTsQC9UxVhr4geuZw4p3MCqpvegZvTvqCWYWVDLfuEnHrF9h6G3uEBfo7dE36",
  "key19": "2wf6zMDEo7kiY4u4eboGbFEZKrec6fDmz1Qp5R7YXZJn57LTyPGYmndT3UhBGjRHYv9QZpuZrxSbjmyNorkJukmF",
  "key20": "2q8X9NuSifkUTCPpHMLfZ4JBjMWKYNrBA6iytwG25Hnxtc1n4ZNwumSKDtMxhjv9CN5r6eLJknR4fYLPexXpNBmv",
  "key21": "2jeJNtqMHwTkF64gNjLxvi1c2PbDzFJRs7u4U4J4cKKhkQBfJ1gA5pfVuTrRbfg3VQjs6scAWqFdUi1jM2GkpHdu",
  "key22": "64qEt9HacMLoKz36cr8Xn22ozQm9ycgtWhVtXELzeRnj6gf8jgaDxQUjVDTzn7QAqUbQUQvWdrADTCproU6tmMJf",
  "key23": "2FVLxCxnBqSxfn4nrmqbH4vDti9mA9DNRDnDTWso77L351E3BeNxZJv45bzRNF8898Z4AQsNozwr7gfyEnYuUh1W",
  "key24": "iiijthFxzEafguUp3YtP1efv7Pyb3xuFc5sbtLHgJN56t7ambEeZTn6xLGZdwLLU1cKEBvr3hbCwSFsKvi13Xtd",
  "key25": "2sfZZ1ZzdnqzgmV4FCBbLtgUfJ1fQwFuZgiLS4gPtnS2U52u78uAJSMwcUzdx81hhnYJ7HbEhX8p26SkpqmT57pB",
  "key26": "2qrNoZdB2qun1ZDSB77kHy9ofAv6mVsj6EoBDHpZvc4GgfZ58SJZiG824XvpqoJfjGzdpJse2ZHBNyfRYZpJfnFH",
  "key27": "3PHQJnTtMivkX9Qrc9TipWjjPXND7oskjHx7Q7NN1nLGD3kNfwruvxyjzgpJ3ydv1DF2Tuk5uRo9Fi3qS2XnpQuj",
  "key28": "2xn1cJkmTDbZbveX3ZoZHGhHx2ZwyLEATwgEARhsz1a4uQtfE85mv56m8UgYzb2c7zvadaxDapjsa8WfqhT2HnLA",
  "key29": "czpPPb5yMzYCYb8ubkmW8j5rFzXGY49MXdWqWUQw6BokZBJCBP35aFiHasn1oswPXZuppv75jzzeac1YwuJ5qH5",
  "key30": "62jbyr41PhgPMYCm3dPJmUkuSbrNygCSZryMFNeCG6x3m3XjHq4ZjUChra2bEPQUrWpowDNjQv4RaoGW5DXbrvwV",
  "key31": "NiRLqeafTU3X7CMnRYzn8pzqyYPwddJ7Nyt675zndyTkaSNneBVbqvSozuyP4bz833xk14ZFxx33qP9PtWZM3gT",
  "key32": "3UVRKwmD9pveuens7dT3fudwrNY4ELRmcvSczinS1VDim8UaT6eN5uMUkg8JuL8KYCYLssY5WZ4hyMRNoSrymrRd",
  "key33": "2jWvHEujepb9AjnmQnkvZEJeWW9haEAtT7ERxYV1eHk7bXB7vXYFPY8hsUur4myHKWzvSVzx4zf9baxM7h6cqP3q",
  "key34": "FXAcvHTZFhFqgCA53WG4vSFdHiD6ydUALJZ7oANTyr2pDfc3MiDdJWejDHM1Cz5tKUFjj2fkhT68GZUQFSQKAs1",
  "key35": "5mDWNdfvfEKn6N43QdQbMwRadtEHhUni74KmreS5R5D7r4rsPMBYoyJWUkpfqYk5jG1PuN2hdv9uqvmodZdVPE2X",
  "key36": "65z5GKsZ9oGix2uhKEUpfiyQJ6YN4PAZGws2wbnRT7KwBY9AvA2LQWRGForwozWHMbCnrnSqJwo992w7KZidimbK",
  "key37": "4DqGxJyZLsuscyS47JNHXVB3cavQCfwwd1V1uAueSKoZ5eTSJXmHs94oVFWtn8HKvCxifM2oA8fXBjShXF7Rjz8C"
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
