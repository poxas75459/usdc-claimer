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
    "4UFC7T2bNaepApynzHhWAwbFV2Xk4GZuwcigffUMvHdiDuMGFUv3Pqz74nbG3q1WzD4uWnBcok1Q1w8yhopZMLYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c68qpw8o1ar34DNHZNsJUVsHBM1DNAGc1VsEACeM7EzB3pbAkjMcPsH138qBE1aSRzrXdAeeumTumeGjPvgTe8J",
  "key1": "4YicGV6Zb3YuL6w35paZteJSuT7F7k4jKQb5vv6GpcQsda2qrymhrYkL8nU8DADW9GxpNFS6ogzKihcDScYbtZGd",
  "key2": "4oiRGovq5p95cVFRoTWTiqEBo4H3vKn27JySkM5CtzMPgbfRc6274f6AqBwDeM5GmwjXyS6nz7fT169XVYPmkYx",
  "key3": "2A5MHGP2ckweeZhSYWHoS3Z7yeep6SWehEMChkFWaNLjhdKjrPkmtCiUkL3tnT4yaJVqS8g3ud6WNe4sPEKoErx1",
  "key4": "35RGquZBHFCynjUNHEzAfh5yqS5Te3xJW5aRBvJnMAB7FGRvZxEZPC7DiAnXtLZgRFX4dFqu3gzbBYsNcn85xVMh",
  "key5": "4Vy8S1PKmrXMzxSpumXbND4N94oueK7W2o6RdzjkFT2QbEUFuRHoujobeXp5CUPayYxeMcaRyj2wbTdbQzp1pCfQ",
  "key6": "4NeA1d7SBPpLmRxPvqimywkK3hpbrVy6V6b6jrff6jS3SEe1ewh7eywrLjAsfescS6pYjRBdtPiUYqWtqwKMQMuG",
  "key7": "5C2bqWD9DsjsKYekDcPHYhaawS8TW5NxZbLyCFCrqeQi38GvkY3nTX4TFsKoFjFU3R9WkfMuTTyQbHA6Yzhdqa9x",
  "key8": "5XzSC8h2wgVshvE7mD9oyQV7Z9A8CgYLRVHx1SjginxV5CiUGJCU6bmiAmDWjWNoYcYthk9wyv71DgzW4rUDaHGn",
  "key9": "42dDCuzccWAWdgeCqaRv7bKohfh2r21kFePpz7K4jNWjJLQhZ7Q7BcofZu53iQM1My4R1CxwnPy5Gte5roW4G9yr",
  "key10": "5tXwLE4uMvL71nvx4dzjzYfSHfbDb4N3hHkwn5oji9t5frBaDWK57gzDBCMR55uh8W5Y2iz3PPWBhkLFGUprNhfm",
  "key11": "5ym7cKTD8pBoTkRvS5Dg9kaZqfvnZwVq87bdEHSJUFmpeQn3zrDjxuxHzeaR8BZxTnj813Yq6EmppmvAuh1rn5uc",
  "key12": "bGCazRo8HJzC8KmT8ghWSJBr6s72QKQXjT1KYHXuvCRzD5V72bjcLvnp8ctegygCRWt8Gzc6hxtVSgUF9BczE1y",
  "key13": "FBzfew76fcA7KeT2mm9s19U8Ve72q4kPcMXfFSg5qeBSjMp5d7855tE2Xu8GcCFUNxfeXQahW3mWanSnuV1agMT",
  "key14": "4tdYi6PyS8FCHS3PaWEgyAfBoie7yeyj9AyfecqzKxUKK6pApmBFcriKjJrV661DMCX3QUKVTkMfqrBBePw7zHqp",
  "key15": "4sezP9FX5RqemFF6Cfgunmzab9t7PhhcZeh25rzvfYfk8L7mWNbXGzPL4G53tJ7FNznsd3YDnbCkWqAhAHA89WUa",
  "key16": "9g7SC691K6VxgahyVLNDFfLysVURVJMhxrr4esdwXz9ch5wrEdegRFNyYpTzx7CCyimQey4F1gBAkRzWGoZvdQu",
  "key17": "4jyFiCKfjmtKCw3cfE34DTCasnxAHtEJCovYUV5J6Csfrj7zkE6dhTPnUAAjTrUFv7o3iWSLokerXgsAJ4LY5evC",
  "key18": "3UN3gwgBz7UwSHCP9VPoZoxh1JZXKSUFissG6vsDBDCC1Jszp3hxXTF69QNnrwSCDNZ8vtv4PGBr3LromgHYHBPb",
  "key19": "bHwNmN69NUWPihHvNWR6ExkzHHaKG75ZZoqHYH8v9prqrymdPXnehtHRTJG1z7CtZVd7LM4mWxwDWfdXCxSeQ4m",
  "key20": "5jDvffaWdsYLd1oGKaLBBqhnieqtm6zTJ9iGeNVXVYT5wxXbfFPu96gPmihAXyYhDEQmeEsCux4cWFGDyTsDNcFw",
  "key21": "5k7fGPAmt5t2rQqyHU97VMF1zv5BzgfpS9fqZo6zsNSR4oVwRqp9NxJNswFNKZLJpSUzypQFTHvRmJPLU2PUgbhC",
  "key22": "cixV1UyyQmov8ih33zvgxazEG7sfCXNZxxDGivMTQm78DFZHNn8gV886Wcd4eYbj7eHQRPgzW4dS5GKyQqnfbMX",
  "key23": "3hG8AV9VAZtHbbbQcrsgLqW5Ysg96vu1DT6ybrjk3n5cvARY2zfC3qbaaKDhz2hxSGb5FV8CThH6Y2h4Pg313PVQ",
  "key24": "4TAC86NF7j6cmPH8TioeQxSVSKQn6gXifUxueFYwiqfMyYU6U8QBgQCP9bpmWnhQTWY5wfALWdXPHZGpjpD9ay9k",
  "key25": "2tN6MqAT7u6DHfoC9y451bbicktDA1MRroVDJbD9ZX3N3aHFV7tSqVtc82EtyFfSxeeucRUnuPxqFkii35HZEquL",
  "key26": "3Q1K6sVpCAjGHSVD91S78uXfUkRxpLeTW6SbNypS8RjSbaPP8Q6DCvPRPRipEYF181Hze7Ww6hpwq7ugMmLkKsJh",
  "key27": "3HtB5QeYg8U5kR7E3qAvGo6GTXPyEdzvUMHZjPL1DPTdn9SjMjunkMERPguUWnUNNbPwm2333zWmqYtyRCSad92L"
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
