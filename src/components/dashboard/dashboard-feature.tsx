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
    "5s3iXzv4Rs3NvYvsynqofQBXLUyUicPZqjwxoRP9ff46j3aEhjarr4XQP1k13pBBupXv4jGSukLJKe3nFkVr2FNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvaFGFybm1mXCZZCEfwX2a6N3h8qEMR1AMyvirDnBNfgti28FzL5ssFnVQymdcvezzyHBkQFMsGSkjrb1uDPQbA",
  "key1": "RgVaA9vKJF963R52WVhNR7wwpHKDh6dy44fGEiN88yHzQLdF7iaEVFphXCeCtLE4yKCAT3Yv9R5ck13c7JG538c",
  "key2": "4deTfzobbFvuDaXb8yZTs5ycYMgthhcfCtxUmDn7mGVasnZhY2Dj3x98Ym1huMieVbRiSV5QwStkqBKPCznVYQ3S",
  "key3": "M4eANNYS38oRfxTykV2U4D1K3dwxSVkdcKn3UUVfAMfYLGC1sD5isSyMBgrMidTuXNiH4UK5TXNnm5NMXTA21AJ",
  "key4": "3KceGFZA6NirMQbbhxvWM6p2a6YMdi8uGY35Kho7oKiHipXbE8qXP9LiK2JhYuE1Tjd4BXmRjuPCAoz8PPi6MZVh",
  "key5": "4WTENwqwpJiLJq3EbLmx6SxdWgkPRorb5ctYEiSv1R1d8Uc5ch6qLt8W7fzbVA9VmcrxHm3PScHk4LPdHvFXuFfg",
  "key6": "36kryKqffW39VApPNHNHYUu443kSwehyuqKBGk552MAZ2tRgSertGXfZZH4GsyMxFjXjmyfyj6qrZZ4gGzVXRREe",
  "key7": "5DZZiQYTbcCu8sDq7L25dX15oKY91jZCY6zfWAi7kGSSQF13yARZLJrekD9aeJUej1hkjnj8pNUxr786c4dQJFzh",
  "key8": "41VSr9QZHqcJWv1hM8Z6BESe6gokMuBHF5omLuY3gGsNUxofyX4vWWp4XYfEDiPfvLpz8cTnGBHzZDhMZZ2tocj9",
  "key9": "2smbiobzJDHRJAx1ZY1sRid82XE1CMqhAeoAwyN8JDNhYhfyLpKZR8G9HPs1MghiLxV3eLoDyNPSqfXWMk6c328f",
  "key10": "Q2SG9zgg31dc1L6dx48PSy4CdYABtiEebWFoYjPA3RNVu9KwXQUVuRPw2hcGAKT8YeJfBjwswnM9WkMM2CSuRxY",
  "key11": "fbYnE9m2acCtaPFLtPy7W6Ek1C8Kk8oMMnMBL2hbG59ywWUDqRX8d43FECDKbhVxs5AGAXoeWvCom4fcuZcTPxU",
  "key12": "3FvNeS1jzSuA1xBE3yLHdKJuHnqWtPYed345FS6SQ22KgMihZR7irC7yJdXruj4WinWA3QMBScRJ6wt7ozQ8js9R",
  "key13": "4A4qHrm6otfwMsEpeN5YLq8bJN2bTz1SJnZ4K57UwoLS87siVCBTKJ4GnLmVC1B5uzbGAF63s9sawngfyPzVxqWe",
  "key14": "2HDZaQ9XwLDpoRVcpbqWZDNrstmk6zTJWSkkVgeD8LUCZs96UbuqvtCBfPEKjjeW5cuGBjGvTjXUgtCHzmpjYJEz",
  "key15": "3iGpGikX3744RzbnZF1LLEbE11iprYkxc8rPsyD2xiA7v6MhyfMi6AYmfFVwhN7BwvUyckPF1wM4kfoeqdVoox46",
  "key16": "3a1e2Ri1JuugoQV8S3Vb3Zodwx8a5M5TSZwkiGScXVLGZ3jbTaoQMmwMzZLKxMQSJry8kmQmTjy1FNSavyfBt6V7",
  "key17": "2vkrCXHq23biRTztyDkMBLx9X9sinkhVN5TLCy6SMs6B5KTiZwqHdpxbYQVRzNnqCWogBoZEz8ZdukizwQRgirdR",
  "key18": "5LSi3j2M5jd9Uqud5CFRcgZ2HibkUG5mW8aDuQMSsv3e9cJRUnFndZeTiprjzkgy2zTHcUHqD9tF1LynW8ZCPLZf",
  "key19": "52jFEsvQje1xwCLDnTzLSQGpcw2N9911g5zB5k9BtPXwT7q6nnK2VKKbm3jVjwomUD9SXQvkXWp6zLTdDrS11NFR",
  "key20": "5eMqa75A8zHA1WhqzcnZb4qRVTL8r6RhiaUFmrPPm5vvFdS2J4fjgDNve3KeMozY6xNJeV8CCfHXQicyGnQxfQnS",
  "key21": "5hr1rZsZyYYVzb1Uvf6amkudZrxE1XtTSzuPmburzcpGgLvoz7dQJskVxp7t7NemvAcawn6EcBVyj11YSj4JkW4B",
  "key22": "4kcuZXQoYP4XAh93eSD79CNsYz2wXdFgdMtEUJgtUY4JHtuWzUzomMB6m9LFeJ4U32WwdxCPiyiJUeVws7h9oG8d",
  "key23": "249K5cnKCB5UWGuEBWLpD8YFGiqzwr69iAxdaxMRETRZS5JkDTnDKoJqz4TNQMQbMAvpptyLNVCtiymYRo1MR6Hp",
  "key24": "2a6KjZQby1Br9vAZmBLHkwtLzsbsE857mumPdQQxpcYArnkq9Van5xza8aXxWLYJhPLLZ68Suwx9KgpjyoDbunBH",
  "key25": "335aUuE3nNoeG9WKWrYwvmJmxH7v1qhdfv8TfsSzLan2uiPYvoscvMQBaKswzJ1bt6MF8VNGg3ohjk3p1cbe3pJR",
  "key26": "5Nvqybq7ZCKaxi8detKUPceicAhEEiB1X3in1Uze6AsLKPmTdJ98wVZMHC7j2ZFc2CWLFrZDC6yujsB4VGLKsmot",
  "key27": "5a57jnJVU74sNTBXzoTDKUZ2qZLPWmdw72qRLccxL8XuB1mZyqAXYvw3LPQtG2eH1LSM5G5YSTqc5oX2wX8p3uSm",
  "key28": "38keoUtKn12qvANs3HLw1QkWj8Kdq8pmB2dctsT1KtSWxwh1fzoP6mu6Hsn67v4VXxopdZpbcvo634BMFrfB44NV",
  "key29": "5PpQTkKEhgrnbTeQH8MfBPQpdw6b7Magwbn2rCUAWS1EVpzs5nCt9kZCqUFCtg7D6XWUj9xenwJFSDTJiij1ufKM",
  "key30": "5wSwz4Goy9oyBgpUKvmKrBAFiFZth8RsowpkfPQ6SVZRPiNA91DTDPNXUivAY6N8uuLEZarkHfqgs1KHXd5LsWYR",
  "key31": "4bTTDrC7oDYwcz5Gw3UaYcYGJsq7u41LcpAkgEMTkj3cGmzETDM3fFYQCvUSM29Hskoa93F4VkjkSVNm3TqLSPWq",
  "key32": "5DSbAXoJ1KyvyGrobC3dnpqrcibbCtAGbhoeg2Q1MVf1MmJZzWEYEQFMu1tvunHP9CiqQeTGxuyrn5AXnFJKQMUt"
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
