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
    "4kowJGrfqy5uReyf35H5hXFZHYAjaCzkZY2oVAg3ETufhpgWurMqb97UL51LCrM9put5y5oJfpVxLCkFAJN6kCF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpkyiSqV3WPm3k2R7dYdYugozNnUpAHnFmgibuLWfaSf6Qcsxq2mhy2F4GXg6fptwPiShFzR4q8NV1gTUEoP9dL",
  "key1": "2LQxkJYMkmjE2ULVSUQA9hQLStsAnFNywwngYjSajY8c6t3Vwy1imKCHm6PrXunoGEWNyUzCUxjGsH1s2edzkrjo",
  "key2": "3ZEjjSb7ouSJJNG3JySZeqV8oENz8rCFJ7bzgQP8764zCcuAxiu5qYw5hbGpLqpVqBouTMKkeeiJ8B8mM9h3FiB",
  "key3": "5VAh9qApjnpiwS9C1yC4ovsdqaRsdAbS85iWsj9qbkqERUojKhCoL9y5GManj8JcUz6UaAtrXcMsHWpzG2EfhNNS",
  "key4": "5FAMjye25c7UjSsahGwX6K3fM1582oV473y2LhPiMp3dk5CvZefNHBNjNj9TCZGLonBMHtZnzpHkSCy3N4qvdAte",
  "key5": "3WUHMjx7jPRhLGjGMEFumfKyky2DL1CCp9YvACmB6KUW6amDLMbJGxM3aE71XsAP7U5qeKQBFGHdQR9t1uY1k5Pa",
  "key6": "2rDpP1MAFRDmLE5VKTv7tc4py96J9R2HqxQacngrPgZxCDdnTWGx7NtEHtL5npGee91zAEu5xZmAFWdrCfsiGEyZ",
  "key7": "2DshViefybFwS1LsexJU2XQQyvWinmxnUXmJ54J8QRTBUB37jraA4UGQ1owAY4h72S1EUfJFatEneivPZ5cHWTzG",
  "key8": "5WQCg8ubnyinjZWQmRp6Uvs928HRcMQ5mPhFZRoV2VWcMNGnJLNwwHtkAnHyKvUfGvbNEUWAyrDme2Q5qEzr3qwb",
  "key9": "2fQEtAET6eNTNuyo73QWtkUhp5JfJfobmwniSu5C1Wvt8bRkFjoviK6YxH7UixegY4AzL8mGcatxWro4zSjRxEc6",
  "key10": "55evrj3GXdg2FqwCRSTJkYQGF63Dd1qjytAbquaXNUkJkjFVvQ2nLjmb1Jqo98RJLMS5bHSeQnGjCqDYqmDtW59w",
  "key11": "5n7xNDjeCHKECsSBX1PSiVfskhUcU2BZcuVypDbNaxsWMSvyJKUFphRppRZsycs3ZDoMSmbgSrNQP4xN8iqLgNsf",
  "key12": "48uBNt4nGNXhQehpiHNGAcH81MhEDPzdi7gSnHzFAJ8hE6Cb1jqJSPusgwfoN9wzvpoABRBf9XX8nYXR2s5yT3Pt",
  "key13": "4Cr4wy5n3pMPHu1cA14Uu4qXo4aq1Lcx3arCXd2Mb14ZBGJ1VKV74dddmdL5Yv3VzsmU6MMBX9GmN9tDqArQwv1M",
  "key14": "4tNBbmB6QFSKu5kzM49F2LGkmzRmEVZfKZrRucg6hhAvFnt571gQJ2Yg94E89YRxsewY92a5tQLwQSTcAYoDwMae",
  "key15": "42sThYkS3FwXHgQpgG3ZWcJtvNiiSTDLta7aXftsoe9eygEeBJcpzkdYe2WKKcF9jWEs4BLy94Vv8Da8Wc38hjxE",
  "key16": "563vBhnyuEjWWgZn5UMSynjWRbrGdw6Y8Ubmn4QuV2uu4jJogHszSWDfJSMCciFozYJ69ZTehgyZiDRCg2Vbp1Ez",
  "key17": "3yT6D9BesMUjA8AGsL8nwKQ7TXHzKMToCbiszytQWmYfvFPuSrw32RyJdVF5n3qUo7YUNWaZtPiLk2aX6QtrkH5",
  "key18": "5G6mPkUTjbyCGRPm2Ps3iKKjRUhYDPkwMnjrChPz1RCs1aM857gdaE6jeJ6hfNRkDoxa1dsvYbzAx4WuwanRtyZD",
  "key19": "HRFcvtiFT2684MLcNatfpZB2eS4gjmSsz938a7xYZRCN5hSN3AWP9pC6un2mqXskU5FrS8v45t32evipQhh7HFM",
  "key20": "5cLtvSHkNJTJQgp1nhhC7DEAHX4u4Bsj8jEP3WR5UzMHuphzZ3hQsp5AkZYogZEV3mb2rczwbXjWtRnhhty79RPu",
  "key21": "5i2DdjGeHkrhVvDKuxWZwprBDmTD2jwveeamKb5jmsYVjXkUdSdgPAKAArAUj6JAnuhAnoWUoRgL1VmSbSh98mKu",
  "key22": "38VDK9xsKbmUFBYcDcoiKdqbvkTr4WBZkvmCoAH6tsd1pSHEHB2tf5qYd95bkrhGp2oh9uMb1aQZG4CjsdYgUWL7",
  "key23": "614pKoVQgLvYjj5FREFY6RNeqZ4HU2ppxxb8Kqbj7ocpjZ57AvF6uwgYrAW98JQ1fe1PqVy9sYg4aYwsNd8Zv1LN",
  "key24": "3zFP1PjFZBPTKMtYtxZEdoSKpYoQKn5GHYxeFPE5TisPC9cC91tT56WVHoAzRpwqmc5VMfYjNphi1f3yyRqiYjvA",
  "key25": "3PaCbicCnnJ1HKvBcaHJJ25jAKGUXVbXU88JwAvPwT4aSSHGZPLwDCAoQC7dFxCGbtLoRguNThECu82rSyVqd182",
  "key26": "46AovLEfXKqbDd7nGag172nZyRgM1DQcqwounouJCzpMmxnjkZAdAUh4USBQ8s3UqLsMTnhiQyWzzRKDAJqbSzuh",
  "key27": "5SuFjAwQdgxp3aF1UqBoGMEHhJ1KJsZxC323JVvSN5MtXzB7c8mSuua5pKFT2BWrH1rhihQKrRFhJJTv3tkqfz8p",
  "key28": "62eoW8vjCZmpDRXgG7gP3ycdYT57ycLVsJZiwyJNGq9kUktwdhkCswsNSxehhhEYspWLZ46CiCoLeRq4Sb9wjE7R",
  "key29": "27qU87ruVopDps7AsWN3wTVERBaq8G6gzVvja12jf6Tuy7reQv2Tiyr2PSRwGfpXQyWkPbo3cGuWdMZ5khgk2ndr",
  "key30": "4wsptbnU3Qj6cwSW1nWs8cJXwbZhpNmZeEcWxaVwr6z2Jp2b3QyrxEhGBRkJ3xse42vhmguqGn7JL2ZUQpTj1NNv",
  "key31": "5XHr1CWjf3mcMPKtFDpwnmF6HREEjEKsukZurRvXnSsNGbEZ7RwTKx2dsZaZwGgDb1ji43Fs12fP6HC7ES1HREcv",
  "key32": "5yciTFQrzJximY1GbFUMLJfF2RQYYmHRiUPcYHpUYBBCTwzHD9PCzhkEQDCBDJjeJ3ChqZHmdLo8dXhvRTvnwBZF",
  "key33": "2n45NQ53Q34PHDRMdBvfxQaACJNcBdTsX5LCiYUkLrYSdhPxknuAPRN6ukuJJuUmyADH6EkgVwP1omzPG9u2LpQy",
  "key34": "22yGr5dbVJqvz8tEW5AJqCzmjX7qDZn3XghSnwyDdtpygSvrcjwnBGGiKob8en942pvx5XSAGfdvyEexmEsvDUh5",
  "key35": "5b4RnNQEgGbq74VkcXaEcXXsXwXob6Qmi2B3yRt6emtVbbxmRwqHK87bPTw9S5u3FyCMLMdpPTWxZ2ggTytJrtUJ",
  "key36": "yaMAKkp6cb8aj9AqzJjcEZE46CdJo7RWxZnwpTs4AMKN2XrJK2hn8dWHxBtNzx7Q1Zi6fKrdpHaxNncs9C8jCbR"
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
