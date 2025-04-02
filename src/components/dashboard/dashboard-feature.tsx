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
    "3THjDZSfvbqxV5ADwxdWkXc6RSYzpPEE31LFkQffDRmaiYhvHfFDNbV868JGN2CBEA1sJncezQ1vGAcbWfgheC6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qn6N8CvgUnTjUBYvqUSYESN5e92GT8zV1hBppUoNyrdZjoFzK5dBjLNyTAY2WyS4PoFNHBFe1zswtBqzWmGxDSt",
  "key1": "6TaheQQ9tjd6bj3WRPWHSKJqMwXZVuDEVYLLvVFgZ44w4QGkH4umZdmoQoXKqJ3EtGpHAaeGsbiVhtGnCaNbfsF",
  "key2": "2RosxKV8hHJBAev6BDh4pEhXMx7EZ1aMN9vXphM1xweY8qNmCMhuWpKJnbQtBnwVaBsiQFpRrVYKgcAvgHRc2ktM",
  "key3": "3CHn7dZyAf1YQ99U8UHraC5j6afH2Ws8QP5ZezdG9hiQDhcG1GRa9Y4EZp5dVVSMzXE4QdNxtTb47SkDzsMFSGdf",
  "key4": "4NmgSh5zvyZ1qFtDaNWahzqq4b82XWq4yAMnXsvpatEGvC2j7MjxcWBezr8jo9KmndEE65HKhSyDHtJoPjT3XySn",
  "key5": "5iaN63NzVRhCNaBkpm67pwB5B6SrAEpc2f1eftRxot4hVkwnpcKJaEhxrWigdPu2hxcYtjj49t6HKQmyoBnuYytd",
  "key6": "66S6t2L2qqPeJLtdoccpLUPKq2Vu3dJMW1YoKkS5RCvo7uTpcCwG4R4aZQHHsy7RJbaSKhdQ8jrQmSCurSgJbccW",
  "key7": "3MFFBRKSf66TeJjRnKx1cGmZeYsVzKBm1Fj3woWCKEcuWZDqqEERoghppXska7G364VYrozPpvFJAYGbSWVhmkEB",
  "key8": "3PpyRevNvd1SbZePEMCV5JtcPT6JcQq85mY1ahvatLHnaUNf1xRv3VDgKJNom3gAqc8M8PuLsXQ7SkwtVagWEGJ6",
  "key9": "29nMsvyE1ovXZrFcDLcV9XriR1EJRR2MnkReMH8rKQVKq8Bhi9bzmaFKNHVoSG6T8xvdhxujCyXzYTh4M1RHRExm",
  "key10": "3iF4gFXMe6AEGeNgyoA6EMnP5ZZ35MwsCW5BjmrF7up7eBw3U6scze8jsnNsDCsRaK3ABgiFAmDa3MuPUjm9LgjE",
  "key11": "msyBStXTCnDGfNKEqKn9AJd6at76vjJuaiFfLDZei4R6kdf68dvzsNG5Y7P85XdcGNGwXc3GNKPKVxx9ZdMziVd",
  "key12": "314cw9AjF6BZTgJpCNgEbBTSkS3gxAQVVMWHDk5V1HNbnyXRVrhvrcDMTtKt1nwUWE5Gzr2DDAd9vDbXvyNqPy2U",
  "key13": "5ybTeQXttoxNZtAmyGYUwjnT8w3HisuKoJYLXfN5ZQsP8rvgXBRyxptCYRGnPRGW2XgLWPyyrMF77AkNwvfWnbXV",
  "key14": "5CbGa7bboQtUatRTNWpYVKggjZP85cUUGjqFe1ekH7z2XjFYYkL3K2BDANhUsS8ReW9GnVZdnJg2mP4JKKKcKzv3",
  "key15": "4e2AHdvXsLmZArdtHJkn5jLXTBMLRVmZ4sZbJgUfsAVYMWnnq6Pk2vp6fEADp6o5ia26PWPFZ5ansruS8ATNCXPm",
  "key16": "4cFQBhzbRyY23TDs9M3AzFJnyt6Z7fv6mwKtbARgeobpUaV7MXNg7NsPL8QH7nfXbe3er4fLMTuHNEjHWBu9a8HZ",
  "key17": "3XqZytYSzJ4jHw23NyxDHUfoyFNQeS3RRep9qmNycUZwQu91ipxjUQzhVbscAKjUYzme6g796FfZy1FDTaqMVfUb",
  "key18": "8B4WWQhuPMrgRuRxVoZeqrsEphju1wSEPGZnKWwFR542yHnP1gDbzsrbpX7Ggk5HT32Jp18ebsomtFVs9TEjVxX",
  "key19": "i6VGfWFXvDk9AZN4HE1iikyD8QmbWgmdwsNE4mqqumzzJLZyAUCcz44kL1BdVHtQS4xwYw1rP5PQPpafJLnY787",
  "key20": "3H5h9fkGk3oMqEPVrsGP4KZZXzmjbVk7NDMwVAbMFSPkLNy5zvoHb8kgaJ7Nwh8PKpDmXE6ZKqtEoU9xYP2xZpwE",
  "key21": "2njcW4igPZ5ugX8akb5dzHPSQqey1uyrepxEcdLF5TQ119mfdT4Ww9Qdxh3XKvt8HmKtJPEMpqdVjisP5bGXAQ8u",
  "key22": "2sRbX22MsAT4cJVzZ7hsjVchrGAp49gprjvmMSzZY4sDRn65tcqzgifHd7dgYBP4oVM5YfizxwrGD81oGkDsn2qD",
  "key23": "3JN87s3JqYakd8q8CF2qj3yN4AWb3tmHiCXFiahSKQqBn7gsvSQETjtWUnZX8wP381nKZ6U5piUEX1ApR8fxLyzU",
  "key24": "66AybJBJYgyc9gHRtQfzjKMShhQNa28W55UWhJBWEHXZwXPCT18X1fet9nzQtnNSerjHs3qYY14VuLroMn32su93",
  "key25": "4eesitJnybEQKUoC76WcbcRHUsYw47tTWC9de2eHTw7anJUeZbp9r2BvKkChYVhAzuPaJ296eS2oF33HEvdjYCzV",
  "key26": "3MJ6nKa1UkVkuEjWbEMyN3KMspjmpqey2qxJirh4uoFnF3AfhzSaYAS6xyBZcTTs7LMPn7wsYFYKq2KdXSdQeQUo",
  "key27": "3eziyGqX3Hx5bKHF8mpErzb8hbZpssHXR66Jr6Qh3AG5tsUWhcJJ8iUbRXWtp9tB8inh3doq9RfgCjdhezRGAPVU",
  "key28": "5b6PaHccTiiJd4XpHbHifA1RMDLjP6YcT587C2bjhLfQX6T2NsriM4PhBtzDKP3wK7nKaDoQ2qB7cSeYCP8YamhM",
  "key29": "wPqo8suqbW9FTf3mWCrPq9HxnUnwedKQFexnqKySRgAFDNayBrTuUTEksCpCZCuQoFGPmb9WL1mvuVjWPMzarHP",
  "key30": "3LRH34TnZwXur3zN8C2VP5eWCp1iEVAo5xGUCWyJWufXuNsGF9rDZqwVkQAQgYzbS5wsxuW5AC1VwD6jBuMurDfh",
  "key31": "4dB9DUSGnxbTKbharzniLiYWmvzTLHyRCFmaFQ9M1ktSHkkyFHdbWuvLBBxZpY8yQPFLiBoyT4V1jJcyx249pmK2",
  "key32": "492i7uEyVqxfXw44qFZyzZRyZsHdKiBiekgz9wyQpL4xjNHAVqwZx4M825T77cQ7KYf8pZ1KKFRQgLKmEAyZTHpY",
  "key33": "4Bjw4wunUMBRoJWQDFjYYJ2cbXpctiTfbz1hgusHgebeCtLD1EvNkA2C6thmZgBNHf7CpvWdaBdXNXkbzT3n8KqH"
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
