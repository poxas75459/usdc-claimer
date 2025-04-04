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
    "2MjGEbGCpzVqnXPePLkNfAz5wsasb3iE8mPoZuzQwzQeUHiAWLPfpPYwsg14udVGUeyEu5pbx22sCF394Y9qG1yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EvA4JG3qxUQ7D14rX8ZLNxu3fLzBK3Fp6YsZ86uHmXiupjmvwLVat7BCY4foTt5R35NUF4jvkQXvXbAcVxhLkYy",
  "key1": "5p2xcNqP97Fv7ahnj7xaEsJHkxqXQuUbaCcFCVoSvdTwMWt6zZkVgSPnx7vUjN1EWbfdNsdc4Y2EwTfe8XrUf5SK",
  "key2": "2HkQcEzP9pTyotJJxz5wmrR3kDLT57WhmUJjyaPi9YnhoSYWnz6RAno5WDsMXTta6wRDbLVtzTpA5gzqu7wQLZ5b",
  "key3": "6QbHq463k4BY5VYZCYPrvjeFZGKdwrL8VspvqxATuMzhECazoQZW9zi3ZYBKQED7LDJFhQU9RChCf3QyNGCzfdu",
  "key4": "5TRZBFJhtofjbKKVRMFG7jfBHzowEthtQxuJpqiHUTqAVCzi21PfLC7EpNeZTWACiGcRvmuzFgE9n7WjnrYKQjef",
  "key5": "5E5k7ms3emGtRxscEao6vf3HNuPexZZDXzYyMLg6oktWgQB5P2vPhU52qENNn42mXWAMigcc2NrYZD9jmm8yWJCf",
  "key6": "3RxQdBZAtSd25MSNRggwddCBUQXX1FCBpVq7xAQfqF9u3XcnKvNfefhutRmgmrHEQXscPUtGSMGoAjSSFDy5DP7o",
  "key7": "264tiB8sYB8tz2fN8kPr6nDQUicCwitoq3yrzREDTh5AMeDyamr4nLL1W8TZKbKNbEasxzkGZg7a9PCvZcLMZsev",
  "key8": "4P16Df39JhfKwA9DnEbjvT2HM3XcSyeEAMiyZaYG7nDRu5GbzbrQKWKG862b2gardFw66g6GrsFfNrGeq7C3wE58",
  "key9": "61GL96EGA4fBUxGJowmFYfmojGidrbGLF31CroPuP14wEaKe7koJX9kS5nWzaJ8q87UnBPfihddB9qZsvXAieTwg",
  "key10": "5V2jeTwJA1WwAgSTcVrH1gFpMRCr9JrnJCjShZ5FKU7tN9tZdrGMduE3GfcViAVBd3KCeQmQYC8ZWaMoEJjTjXcm",
  "key11": "2LvWhMfx89YUjRSvwMszt6izhYY1ufcWVybqtNTQgRcxUKYyKdtjXXMBUvdSLvywULxrVaLBKSEs4rRtxjAGQTcP",
  "key12": "5BF9HiMTB71ktMhFBNLgKiqPwmck9Cg3YcPutacqwDP4tguGKWXz5e9YTSPZDmaKALrBAYXNpG4rJDaquGawKUTR",
  "key13": "1Q2v4DR5FUHXoTk1ZsPzWgB9wsmxYi9uaFfLNprQfC9Ymn5SF9d8h9BqU9SQ5j9vnxTAsEAxJQcwWtW2WuzquPY",
  "key14": "53xUcHfEwjmacvSP1WQj5qR5NJQsy7pTAZxEaNT296LUwWEMWCjGSjTYfLEMffzyAgXx46eZF5NCJBsznUR4M64q",
  "key15": "k6GTDzS12XrucHBpqdw5NxTHMtPgSa6EiRfWut1SGobwS7m9xXDnDQKj8NvHJZ4rYnQFm4UE5htaLvqi1NETdno",
  "key16": "4U5PeJbFeLNjc1H8Q5fdAZdhkjSWHbKrgSbhP6bJmiwqPfM9LceKZmXpDYuE1ew4Db97pth5B7rA7u1SNwj6URFX",
  "key17": "3YTbGU6Lz8GZ4kzSsSubP1KVWeSmCUcKSAq8BCb1upp7onjEL9Qe2UiBfiD6NftuSPeHjKipqmpNg3QwLVu3m5pG",
  "key18": "2aGJfDMpyXTRoMjRHS8urPRuNBxvwgB9LrxzJXQsQBfPTVAyMnW9Z4rWCpev3wJtPWLzKEY4tTWsmkpCiRfgWFT5",
  "key19": "3aw5dtCKMkYn5HkLNvrpGeBQGVjQzgN7mUemC1f5qNvpLQAjQw9DTcMzd5XyeFL2qcbyE5oJ5t976Bh4aswa6Nwd",
  "key20": "2tfb9p2Vu7EiX86tm6QAiV5Rr8hpvDkZv8qoyWYQRxXd8DUb9e77zdbCTzx1pbJenfypjt3ocpKjAxuxtnbTWZN2",
  "key21": "5U873x7LSezpyiRtcUEdPWbJ8PYY4QGxz92HPDq49nmEBSPUwdWWisRnU22RzsWmsU4nRif5LzZA2zrwVUSPAaDW",
  "key22": "3JcoVwtf5mN7xDNyxwfNB9NBCg7F1kyoqPdor64GyFfjLFwH16sw219nSdBMJ5Lg9S3UVgC69Qx3iBFF433sW9Gt",
  "key23": "sDjHFGb7yDGgSh6SNUMR8ymCGzZH3XAMjoea1BqYf4tybQ4T3zhkN7rADbo2G1p31xKYPs2tvj2SoFqPi24zFf2",
  "key24": "42YV7yAndSRu9AV1WEtEMtSWVyunAE55iGeG1tuTA6WJenxykG45P5taBwm2oMK9RrXgagyXxK1DsnFtZadu6wCD",
  "key25": "2H1seigUwRNTbXK6j2FzMSAEZGfkvjBrtSfm4pUBhqFWVDAQaKud8tUVqdTCaBmSG5uTdhZeXs4gqerGJKP9kMpr",
  "key26": "ojZ6cLxxTjFBtX1AgNy3PJcws55f6ZsEBDZ3uZkCFkWG1fgVx2j4BGfKy7a6ugKABzb3fVP7Askmrjnv1fkCRvS",
  "key27": "4g2xo2kUTL52n2RC43YiZJHWHB4rLaoBQ3pR9b396mCkUrHV8zK6GJjoN6RMmqPAwW5j8N9G4jXdEQ2skAY5jTMs",
  "key28": "386wNm74XebJsTPV8eKywEh8kXmpbagVdxYi9VM48yiA8xRqRfzFeKeCiJZ7e1zhg1U3CQkGANYLGXursM45uTAP",
  "key29": "3uNJ3ZJK4TkQYJuMGn5X5p1MEcnjz9oZQVgbLRyZyFDxE2wXRnthbMTCopcq6Fz1CZooF37ArZgwohE9fcXTxVhb",
  "key30": "2Y87kr5XoWDo14qT1FCE1LGuzqr8pCgJSKg82cugj1fscrT8JwxSGoa9ocYBmTVWwVezCTkcB1YFZRJLWNQESMaJ",
  "key31": "48Ffc4T9xWmQnPtUTojLju1SEgwGGkWgg9VJCFcwV8znCnqq3QQNdENgcHX8kfqmteixjpG5aUdxdnr87bLHwMW3"
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
