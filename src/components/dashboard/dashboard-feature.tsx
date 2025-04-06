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
    "2AsRpWpgEbrVGwmx4RLXAVGeNYucx9FsxCxRYRp5PGHcHUyHm5ZUFnXd2zTm1yCLkB37SX6ZCCm6cUbv549GoDjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQ9mziEziYBmsVXa8JeWW9TNygVQeJwBYgZebnxDV51bQaTdEFo2ajtRk4bSRUcJzm428xzQVeKQvn4D1dRaP8U",
  "key1": "2TnEGLHgJejzMfrP7peSsqPb5XjpjuF4SXMwuHq4THcHTu2mdtPvfxYhUDiaxCbidj6oF8fs1eLWkFhrYys4Pfzx",
  "key2": "32vamLLeXH9gWweDvJmCrR1Abq9tVArnB2anrqPTA3r2UCKNW2c586zZBNbpphBL8HJbopRGTauMBV5qtCfJub7N",
  "key3": "2c2YooeYRxLb9UyeSG2nvPGzYcN6NuFcNgPnYpUdLnRcQPXjF13cgcXtb8R79h42FBYFDnbZxDmvxcpyYeaodWnP",
  "key4": "5y1vRsUVKqRWwLKimNXs5Qp14hMSph2H8FBg2iKHUvLeAP3VCDBgZnC84K2wRQktTs5Hawzf2UTCytvr1tRJwNKF",
  "key5": "332Vb7cSNAgcjCEUaezTg9htCvTwRNk6bQ72PxcTUzkEdcv7zMdrCW3Haj6QGX4LaZM6uaKCLMFaFfpmuzUjDuG8",
  "key6": "5PhhQqHEZGKoX3ReXhkWtbPDgFS5xV2nymb3qZYbGUnvgrVborHw37ej2tjkdB8BTyt8EFo5T7jFonWP2DgTC3qC",
  "key7": "4BhL4c2wL2BDLYAyRu8qH5VSjSr6fMSKqTq36JTaeZjYBCw9MANQczdaUYi6vqw7yXMaLMmyw8bWyk6t3Cqh4SNf",
  "key8": "3ctPPiRMHn8c8Jyfet88Cy61taQDLmVNWAuvqZmyKCKu3YsGbroW8LkKHkzUD2eqyqp1DSRMAs8thyEjPpvTd9w2",
  "key9": "43P38Q1wKTVqLivfphyMsHtbBmLjttyzv7RcVfgC6rCVTHiiex2tXwXkXHMYnv7WA8NwyeuU7csTfWPMWZRsNKK9",
  "key10": "3UTWrhe4J4B7aWfjPPAgxKnnisqw25cTyyxpCzASfUMy8joGYxZqnnkjucDyqFJgxcwAHBfeVYQ2DYAJgw5fh71V",
  "key11": "56wh4NFd5a6VRGi4QuoadrXnpnYveJrwhDsxE1RcGfX6Erd83ihEKSFvy9zVaekdPi8EsYcoJLNeZkd8ETjpiCcn",
  "key12": "25iw5AkzcfR45DAo8ZSJieEsEqbV28nf4uuz5khwbiBKkspCr9V74pp41mPmNMsRKvcCMx8yW8M97Hv3sKaMb2sU",
  "key13": "5P6rCWgR3DP6KUgPJcsGdoCqkuisv63Xng9Bb66v31ztY7k3o55YxQY45U3BGsb4kXt3gPVr8yZBfRJz6CJe5ctB",
  "key14": "31PqUQS8jsrozdcAnSPPTZpnjybNwat6dGuSNzxwjvthbhqWLpm1cyemCehcUtHGcw3CZwSn5KRGxahQpY6938vs",
  "key15": "3tXsExmghmhAnp9bLmv7zCm1yGhGzmRzt3urPY9SKAmQ8qtHPYx3MNrgaTLGcL9sU5ffUmxRBD5z1y5UdUbed9Uc",
  "key16": "3yn7KKKRZFQsYMwf6JKaontJbwSatWTG4dR7d7fun9B3BxUXWFBn8iqQAN21zT6LQMXPa3k6X74iadse44puY9ss",
  "key17": "4geZ6dvD3MCk33KcU6RWsST5XACaPZ1PJg8ABdchLYSoqL72j7n48sCuUmKWjDRPkHAZNJnYzZCKmvchLe3U6tnQ",
  "key18": "28V3Ju8sv1dEkrd3XdgMH6iBnct95NzZJHz6Xr1vBoPoePmAzXoeTD6GV6Y1JNszd6i6M256DsgHhz5vfwL8ACG5",
  "key19": "3an6bKmpbwfsn5HZhJN3untNp3nodGTTHJRrSzRk8Kh3BncvtytNmcrpNQ8AicpL9RbRSY6ewpXbmEnXS3xeXF9m",
  "key20": "61kSKqZtpdu7Nijg6HvYAQAy8ieKBQKbcz41PWQ3HuUTh3fJygV2XnVuJ582rokKUorvpFBjhdDd9VU4Fi9sE95b",
  "key21": "MHzjap3wRNp9RNEvqzZbQucPKjB1ykUmbm4zWaQ9KLY2SmDyjNySKDmSc9JDUGZfA2o3huCYLwqPoRzmjtQ7sum",
  "key22": "3j9kMamcWZUrqZXB8YBZsqdVSFFqvYHRdPq1wU71MUBak9sn4Ga4Tm8PHMwnPqWW3gpVsogg7nSFb4qnWmjR29g8",
  "key23": "45fBvGzHatmRDwaHtivogFPjSbQPfhomq2WNiGTNtoSmDTwZz7SWo3oLPSqwtLs7cjG7JvBAem1wREjCJfsJgPr",
  "key24": "5onWKgUtAXM5upUbftZZd3tKKdTireAipNe8EGnZgVVZNhqirs38oT212B3XC4AvRg7Nf5ttePsUD2updt9dFN3F",
  "key25": "JBS6HaauGXym3AnSibWw5Df6XfsNrBUnK5EjRou1gcdBVwzJwDurB1Yw7MqE2cuqaUnFbHo5zyf7YWWKZf2qgtC",
  "key26": "2oKe2sTt1jkDdvFCUeLiGV6fZjZ1bztbJf5Rq4PNSGFdocsWh8eKZiNKHfT931QmeJTB27BF6NkesFAqid8PY4i8",
  "key27": "UkCQh4vYxSwQPxefh5FVnmMer196xSwypW3PGp72wdidoNB49e38vS6iweweVPw1GN3Bboy9LRuVxWdVPCdD7Ze",
  "key28": "3Hs6cWBPLYnFLaPWev3bqT6KF9feTdMHV3dhbNH1LVtwYXyxvZJpvyuajHfNRrDmMUufESDt83qnyX5Z16QSU7sH",
  "key29": "32Lvfe1U99LiYEov51qimiCxnz7pXzurEp4TFV2ZarQw9Kt77cFPfRRPHQYuPFVqWBtJWyjAe4QfPtgSfZRZWiJu",
  "key30": "27RTvyNGQLwTyAjDJXopATB64AdBxF2B1fL5X2nS4zHrzcm1Vdtr7we7EK9UwotGJUmwUEr4BwgFPhsTQdWj9AfE",
  "key31": "551gXHzAVE7B64ibPJStHqnZqXfcBeHk2DKExhbaaDadTyGD6735uPUcZan4VipwFY3sHWELeWst8nTQ1mJnGWbr"
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
