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
    "2RJoNd4B52qRdYEtWsbipPE7oM32XNcM169PqowjbPGRugvWnD9sAaQUEnbnYHtBQqVEWDcN5wYyTdw61guetpf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGhJWJeHyvVowvZWhnYFrA7FSoBPgnyLi8fDDy5jT55PjGAqU1AU92WQGXxcQrcdnEYkq1Ho5xX21SLDouHDrT4",
  "key1": "dcGUAZR2kKUaCYokYTdjtTXfbv3YTUU4LoDSGYgeA9S5LWUsCtDcAsBDPXGkMar3F5MEmPhKmPrdV7qxQZHSWbQ",
  "key2": "33GVzGar5wK8PQ4Vr2pVKLKCv5mmdrnQJshrpUFFBc3atd8LxyEikvZH7j9onDtuaYVVvzJkpAGtW75rgz622kej",
  "key3": "5SRGVx7bhPuJeK2iQTP9xAsnou9SfDSt1yTSSF3MhC5g77sd8SaXCH2BycEm7pN3LQgBWtigkk9WmW7aaZuTadj8",
  "key4": "353jVNJ9y5vcbbtVNbCwbsGVL9WyxajDKtef48HFABniKAKVeMPG4DUYaNPrtVHJmRRbVBxtk77Caknuy6SgVtms",
  "key5": "59coogdfDQT328sJ3vFnKAQmysuqBp4LNZdsoa5ddiLVRENpewDkNvjmNR5CZqzZKowAQiuD9bq1xwYdsEg957bc",
  "key6": "2Ep8Jmkz5DWHgBosu6aX9hVBz6FYCAEjA9Kfgb6oZcRLpK41a3n7RmyomJNa9doXchFB4BqvypJDADnjmcFPeRXT",
  "key7": "3zB6CizcSWKAXb5AsgYU6iEUPeUXEfxHRLg8sHm56pF2B3zPQdNYK1o7FNXtEwaeoYmZzFqFRraYFCLZx81gFU3z",
  "key8": "sqAR3JAXHPhBWkikjTvSMCEc8kYzSoY5uXiCbJhXMoamdFfT4z629K72qetzhdmVFoECKW3TrN2G8z8VKqw8ux5",
  "key9": "25fBU4tJEEmN9zE2Eoht7dox9RB5SNBM25gtFvpsj9KP2QiXbrpn1BLRRgzR3dE9MYnnj5DRe6de1i4MBycp2m14",
  "key10": "5ggZnp2eRQ1N72jwS6Dvp4CS945fT3sMQe88NWcsHUDeB6UGfHNsu243tqqZuDD8y7XU2iTw8kREg9eznumzvmpw",
  "key11": "a1Uo3mmt5wc9KEYbqoooXRumPv4LW8Dk8YCj4CeQzPfYm8u5FHHMGyUCjBCMTpAS7BU1F8o9vbj8wRLZ8TELaCc",
  "key12": "3LernN2M7z71ecnXPsP2cRDcattCYeAsJoB7WNBo9NehsaM6UjXLLcAzcc4AkXLdz9KuYhmowj6dnNSiViK7cS1N",
  "key13": "5Xzzv5XhVf9EdKVgq3P2sAXN1gs4Q5fmTQeia64TXCGdCa5Y7Eeu8mxawxVhEKjqL7Rabq1QCppDdPawfnkaxqX3",
  "key14": "3vYo7FgkTv2e2cVZtwbbMaRTNt6pKQZjoa77qe5WH3kVUTCq18D1rfWjfZWbdydwfkRC1QUZ4CDy2NZrCBqdDLBZ",
  "key15": "MFmAoMKKNYTz9ELqMftJdRJiCLRuiy1ucoyz9qD6VxUGLG5aNzv8ac79XNGSBcaiwWPqk6mXRNPT7xicukxdasr",
  "key16": "2TtNdHSSjzwy2Kqy8vb4Q4AE7JS8m2xkJSs38mawGPvSSJKSEZdwuS1QYeCPSJ5Zcj8Wa3y27eRVQRbTXayqSVds",
  "key17": "41ic2JK53oZB4Lyn7F4TZ6nXENb171S62QyAFLp5XdqcMgoXCSBfPVNNeEtT2Z7uRBueepwR9hr4iJVT33NQFJ6u",
  "key18": "3CPmCuGUDEuPsdv4sttYuHYy7WHRVmUJJPtk4nmJvP6SZnA4sfvDV3uBxKAmnksq7okeeNxm9bgcdnzSj32iJYSc",
  "key19": "rfdtkHDocTTAw8xGmzeMZums3gZnXzJTRUuqx5ehtJcY7okxM1nUeHXLM7AxtebPVpbPdupTpiiyFUXyumjfwcH",
  "key20": "2ZqhhVMv1TQUnDQ2t66wjkTm3nTcSHpPdAFJrY297a3kAxuMGCevBk1jvA6tFGG7PoL2xvmU8L3hFRFcgjhT9eyJ",
  "key21": "5d8ys39LhbnojM5AAQvskktQXZyt6tpirxCMsj5uHjXJ2GRi3HNvX5YP4zRkLHRHGz9uRzWoznf7sUSipVPyGqt5",
  "key22": "5b5FLfHX7Tjf6aPy8KBhtY7j8a4kexPJ7mzku16jK3i2KboZKEKivDymVyhAFJ65cvKuESqp4VSPqs9QRUjd6CN5",
  "key23": "4CSGUa7MsRpJZkZQBMYikPHQP9zUCoDtvrVQfr3gB1YGnKk3bCyeMn2zBZBji1JpeDoxhq41egNYhJL85LF9M4C2",
  "key24": "kNGeuA4EVGGwWyduCfe7kCdmz1vHxTyKEvVZc4nLdd2pmTdSrogyzeM5Gq7TMmivg9b2FbQRDqXXLzJbsQcjrCo",
  "key25": "4oVCrJvkAxLjbySLEzVz8zg8au48NVpGUUUZLyjL24TnXZFtDNtaFPpQkMnZDi4Q66saaHZ8KQddPEgH9QxujdaU",
  "key26": "3NSjpLZishGvgdNQXB4T5scrPcJhbQmk6doF8VvjTh6gA49FHVLoCGVjoQLPQrLGYTZDgRwkRasrCYcr4kuvrKFj",
  "key27": "4zv8VJcMZsNrRbfoM2zHSBCVUBrCvf4WJ1DL35VnWdnR1uUSzDNzV6AKiXMnSQuWxpBF3tnDVKJBnJhpVamWpezF",
  "key28": "4dSHTCUrD3VfWXF5dV7HF2gJzUVMKZb6JwbdN7UN4JP6DPR5Akn5RFdLwGXdSnUx2e5mpSDt6594gWfLkxcTu2Qb",
  "key29": "5GmmoKoYKCkoYAFRjWPnqawwyyMVb4Qf6EU7zMVQPKrf5LHTgZZQ7ttgVJbefDpQRkPX3vte736jwtfsw8MNaaL6",
  "key30": "kJ8g8bgnAkJTX19QNmbRTNqdU5p3Rhrt8buWmndwefs1e4YQAit2wZPU6ehE68VHsjkWzJtfkGjbfvSnPadZtSw",
  "key31": "zDx6SsjxCf4ZUY2h61B4dXYHfgAEyqCxhpuC39Mwo1US4QbKNi95RhPsG6vfxqf7bMfoToqwM5rtN55hziwzxre",
  "key32": "3PaFGA8HqQGx623yYqW7Xsd2eyYhuocoLg6Lhv5viXZWPnnFYTe7UHRZsxWwFZbBs6chmHwXRhXpjUjLoF6X99F2"
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
