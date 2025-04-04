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
    "5arCKo5yeyagVzV3wuGo8FZuqgArXeop9jb9w67uLJ2wVrA2cNRbuMzeBxBEDhfem7Wxe5mAf5ei8q5NybbbpsKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uLYSB973tNpnUfQeCoKc9mw7jEsZEHSxHXZFkscw3ck5S4EEYpbxvMKMJoVqPGPTY7Ye2RWfqtbZDr4av5RJ7V2",
  "key1": "3EfG9cbBCEtKDdjpydFPib1XRvGT5NvH8JCmWJnFkkPXm7EN749PYzDcmTNzFDRYdTUnedqNh7o7ZY6dVNdT7tCY",
  "key2": "3Sy5feB95icaDcALKrGJg61yc7uGAecyXK6dcyiW3NDYR1s1a2ZSuq8Jki9eK88AMQ5hc2YM93cwgr7QVWTswHXj",
  "key3": "4eq2oca4NPzrj3fv3iXGGLhY8SZMke4ALci6N6oz2YxiLjbwwcAkKL2CLM9oZpcKmUBJmkBcanCuPab9ionp2MNq",
  "key4": "b8LSLpdpEKBTEXToqLQnRePwWyNMgpXikYACtR6feby4vnyAsM8Xc6vrGVJp4ARryUWZfJB7eN91gQUSbEPWP1M",
  "key5": "3ZfJfoNtk43Uwb7EXtS7RDJo7Ta2VoTmvzpJxQxszuXjEK74LhCb3kJNXnFSXk6HTEoisQuDg7VzWcr6PAAAzsWz",
  "key6": "33WnMmAbrvQxpN6XEWsgZk7bLGAwWjG5CfEegtDjqww9NUBtR4qesHVmDdRJXKFateL8P5nsC57bCVmfowGfv8RZ",
  "key7": "3M7T55Z9fzqFYCacW272Ut4SFWCKrv7fUAjXCNeUmif7uBSau5W97u2f7Bsp9CxLr4am6jXBeRSnnavgazENEF4a",
  "key8": "LgSU6yZXNc9idXQbpYSneWGY427Ekc8BSUKLRwhaCtgg1etZ7cZzhvBqYWHgP8tYzE7yaGhGaCL4FMPU9Te3DTP",
  "key9": "4ykVgS6rsHfzSw3btFKw5gNh2iAJ4Dyv5jvUi9D2oczaYdycSHwahT62EcC1rDCdSfgyoebocE6AMkoTWVrFcbUy",
  "key10": "3knTkjggUYLUrVcrxFDVVQResdVGawFiy2mGLDmDF4zBrA4sYv3ydK4C2GgBsXxwKdNefSbwUAbQgGsE1h93hikX",
  "key11": "3Yp3kW1Nguhob7SwLZ8XVCjbAephEwPHzZZjPSizdYhaDvDazwWWFSq2ASjBKFBadLkHEQ3u4XmPMcak7rakQz6h",
  "key12": "3Y6GAesYKnYuPwExgiisrkpaiPQETbJkSacjjTvp3TuPxPc2VXjaxeVTzrCdnRj642unq21YBubaTPiHEuzcGQn8",
  "key13": "2DiPDHU4kEvDuAS7PBTsdPVeN4EG6DDPiAq3SqnGDNgY6ehorvc9tyzgBY3tZ6f5N5qmURM7PU1qFU3WNYzjD98W",
  "key14": "5iUZy9pcjXSeCL4RgbiSWiEmRT7A5xgERGNPdWnZiXXrkgmyrNkQgZG2hfEur2tUZ7xAkGa5Xki41BVZsv3q1aCD",
  "key15": "66gUL275KgaDt3qY4f4jui8zPYACtu9hRs9XNDMuSGPfQvCf1NyMK5TgR8jFfsiAdEh4Bgnbf5c74zgX75e46auB",
  "key16": "4j9i4vUBb9FFs71jtxwfVtiDw9u6CQm7q8s41UurSeesrn8TAbHmqWTndaVf92BXNfqusKRDWHMthEjwDjebGqpb",
  "key17": "4YH35AVBpUswmoNkinXGkDoPuegpnhEaAjgHxRp4xgVZZJiQsB5shtk37kP49KC37mq3bGK5BgMTo86LFWqmDWUy",
  "key18": "2AdfAzoamA34SkvV5KJ6FA9aeibiDPr2EQRMeDwaykwLtAkWm6bmZsph6L9HUM7QmfhfDL5TBui8PWgptANTuD9L",
  "key19": "bgxWh2yw2xTVLndxX3jGBak3RQpcqTb8noQ5fyviFHN2L7jE1tQAfsRH4Y6YKh67nP9QrhaJut97znAUmqHCDz2",
  "key20": "2gTqt8WLvV9qgDii4ipVqdn93SjC1WVMvtgiJDAxJmUD9p3D9FNbs1vAsvQ5et586Zqv4RP15HRv7DyvFE5QjVYh",
  "key21": "2i2ySTrH3hm8Nr93PvtUN9NsyXsK1k832Crn5kHQGv6iBWDxQ7AKyVqKDz62oLqUirWar6vtKfkL3mEoFJNrd2YY",
  "key22": "nHcWZkJAdGx5aVAG8Zf6dMUguaQAC4K5T63pWxqm83u6nZV6kTjo4hMhehg64TwsXLRX8U1f8f39uVyN97hWN1F",
  "key23": "3Hqg3Xvan1cJD3WNbUQhcGF4tySfRNvYqpZU2KZGQYDCTYsz4Vhn31tYnwHNjEBtkdGrB4GYCrQgZbFVrF3Wxbvy",
  "key24": "33vBkfpiHWBDyWNK8UWhEx4Ccrkn3CkAd1Kn5bcRJdV8dFtPtGwVTWJXk2T2ch4RD7ChdhqgTxprRdmEv4Y4tkej",
  "key25": "49icov6msQxkeXDgKeL328GWQJfq9MzzGZ6kKKrrVoxkGPkkxkzUsiRxYcnkGfwpQHRCoxrEUrruxGAbJ6stiGTd",
  "key26": "3LnojxYeaH3unEiy2RDkJnTKQtCWZaUeoC7U9Y1j7k8U1xwHapdw9MotEZd8inRRSaeicVBoyes5QP3AmX1BLLto",
  "key27": "3z1ZmR4HJdU9cUg2vrcJWzDH6H45B1e88xDs8y2wQ5mq7BMd1fQU6mNd2wJGm3gmj1LBF3Ct8mkRd8rbHwDJzTFc",
  "key28": "5VGY1Q4sc97RoW8mZ7NiCqqDMZQtXvtJbHYAYRzVP9EjwPgApsDPiQ2PyEX5eXaLEdrjohjagkbhkDBUZV5Bum6t",
  "key29": "ww6VuYpMUQVT5z65m6biiBM252yGHjZsNu3ggB7siyHPtLrxjjzB8Kpu8m549RaZ4sCjK7qCenvNg2aimKizGtp"
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
