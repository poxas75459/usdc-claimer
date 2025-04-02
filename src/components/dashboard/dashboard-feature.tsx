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
    "2CDjgrfm59oj8rJQsFBpBT4Sz2Sb8bQuJkHifLDpWz3hXUpKZUwwv6PoXm3a1b3PYShXu25kv4TWUWmt9Gy67YYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239i76VDxLbDrchyTh4NetGp8fVjj2a1iPn33eZZSyn19Q8d4DCq2gUk24RWUi59LBizKAZ7436zQhPZY1drhmDg",
  "key1": "ELpbKcNTehV7cfbnyRyxaKhGA8khFgcGwgp6n5e1uG8RdAnjNG3TfYJhuFULt4paT51NANeZG19zCEtbnWQZau3",
  "key2": "ZimQ94PC7gHLBy95W9JfKETUFqKrTVjSnozBvem6MMgBY7duDTsMYeKZGfTakRZma4iNZCEWrdT1YKWXjPcBMWz",
  "key3": "f7q8gPTD3aHdWiqUrFk48sDP5nPWa9pduvM5rWa2NJ6dSAaQfWfkUAfKyy9PSzNZaYbYePbFmo4yWgrg4oc6R7c",
  "key4": "EJ4LprZz29PMNQJjsPYmxDUwWr5q1qLgBKmfbd744PnHhTjFWqYcc4wvUAX5mSivsDTciiqhoQge2MEdRc26pbp",
  "key5": "48C12dBa6oCMHeWGazTFveBtfab7ReDG3bme8YrnECm7FqebrscsdPDLbnaC8dSRHKzZYj81uH2WGZKFX8S3s5zu",
  "key6": "3LJKUjRZEPC3kZh1wrmmRGjRDuobGa2MAMmmnp36UtRzhkUrgd6Msu1k6jGvq1397T3zhXECp5PW3xrAvkhaBZLS",
  "key7": "Ysiqzj3aN1kQarQn6FcgnAQYKwV8G57uGJMjDFsTXM3doqp3umck3Rqsknyoom5xGqdjv31Ug2QKnea4TkKVbZL",
  "key8": "4WPwB5hkEsSLW2hi3KKmR6axQ4gyZdCW8NAubUZSvwbkb3TtsoWeU526CAmUEmQKFtaPiy4MsJmYog16Td8Ty36t",
  "key9": "4Hzn56NiJUvY6WM7jPpWuj3LYkEvevd2STFBG3L34VvEAEu1P7PKYMicQjRCVWudSbAEDFyNSQMXHcmR5fB8BEEh",
  "key10": "4HWFEhGRZ2qKJf5fZmyKFn4H7by2nN5JmDAWBTFh9PCNnwG9pYebPZFUfuUWZtqxEyhsjKVPtM2LDNgBeDDrBnSM",
  "key11": "3qQYTrfLG3B8tVRLPxcvKqoMV538vLi91exEJEeUKe1iQisUrUauUhYTFp3WeyPsGtkzdYBBfR9BKzhbn9ykbfg7",
  "key12": "3BP4ozo2EYVFqAmM38sKgBsFRjskePV9Zz6VCykhPEeTiK7iVVYv5PgwehrGYHTXL2FdbNi6g41f3PDB7s4p4cXT",
  "key13": "5Zr3uzVQhQK6Wa8ANrvHLVV5oCAyR1Ry9o9ANUoBHpNRMCvrMAeZyeu6473LAQ9pdAn5Jb8RmRxZmDu6hJAozP57",
  "key14": "4tGXTbBimYmXvSPAKYvCgryYjsq2PejgzfgA7EcFHQfmE7qZ77YPa7ozwhpW3gGwppHZ5AmBKAcj7zMxz4mYuGet",
  "key15": "4AtsUDZX5ncFqB6VjRTFYcyjaM6UqZHCECWzrpEfVyXsk8kff5mXBSLFNUnWnw2qttYTdZd9d4eLBH7JsFmNSadP",
  "key16": "5EXS5Fcs1vfCMbQCDZTa3jg6Ppn8eTAzkczSJ83JvJ7Nd7d1Gg191Yjoz3upDALgWX4zTQcw3LNEVhnKD3HoR6G1",
  "key17": "4gQa55j5By7CDrRZfLsQGYVoHzmYyEdtRVPvqBR7P6T5TPF4VJR8zRa6aDAGNQNBkXzAwaq3bkWJ4Ga7dCYks1Ko",
  "key18": "ZgvsoNSoT4fKEfRJrtU7U5rwZBU7BWGbZo1xPuzDvf5qibBJW3LpBvZ2UWB4cenUMhmHMEzSkLdQdQJsKA4dQD3",
  "key19": "asynpEeuzsDTBMJ76BDkEUYzX4fh9RdzMeqG7vNMHkdWx8qqJU9m6JEnCaJQPQDcUVqVmgiE184zyQ1uNesKW9j",
  "key20": "zBazHTc5Ferb8TVtpiY68hYsmX3bSBw5prJWbbpHRJxZZBRAxWeVJp162fxjan7z4cqvoXmbqd1pAqUnAQPrsee",
  "key21": "4fj6co4yZvbQLYUaby5DLFbdrSZftZfMVrvEEyjCNCNZ1hx8MmtVDEJEiiq8jiZxVseLnn6dyUaDvPMihK6zUUST",
  "key22": "2xieW6aJBwXbdQB7sezRZNW2gsCZ4BjEjEE4NX25yr9SwbSvz4avS3nfEEXkL8yEEbc7CLtGof27jLDXn4s1peaa",
  "key23": "2HdZLH5dZhhWcrMDZAht1WcTWCiirzde32QwP3z5RkjAmkWp3FF8sTeVgUqh2fFTrfnu7JZuH3wdcRbnyC95N3EU",
  "key24": "NPQTYAEYse2dXnZnZJXSVESwDcYgUoBK91AbQrPLNhBk3tuNMwUKARRK1CgimAbNo8jrXKH6qHkNkUeWRtdnoaz",
  "key25": "FxuD5YAJB8zxFAkun5jGeJikPq5GgG4vt42CAs27ND6WsQaJ6PZgKpyES8i6e64C5gbuwhpC4PTKETzkGdncxLE",
  "key26": "3mfvizU77RgS9zcBcKxzCUHnSvtrEGjEFJxfpyPGiemfk78T1BoHka5AGhbonwffjnjQpdD9kfM68qJLrcX2Uhjf",
  "key27": "3qc2C6fd3wwACU39aVPt3wAkcRHY1MEuYZ7PTFQgQoXXmukpW1zLReuSJfpF8YV1CJrFXAULG2A8j8Jy64tv4iFN",
  "key28": "46tGdCdzfGPkqULqBwvuqpqy55vHiKUSpWu7ABu77dji7WsUhhsDj3FwzXykyzpQZGHmouqpudfETEaLRjNkJ9h5"
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
