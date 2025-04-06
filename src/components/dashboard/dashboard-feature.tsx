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
    "4Vi1Uqdw1CXfG3961A2a6x4NHSkCszzCabtjrUxpFzs63SU2dakBUjbYg3sLJN9uW17tW6xD2Z8TVHAvqAgDxGLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFifoXAfbKhRVDxV7UfJUKtK97kPfmeqtpUi7zEC8MCqSn3eUpyd69yQSY8oG3AFhAgehJEw7u8n7L4xLkGcRDi",
  "key1": "3pnpVVJUjZDYnmUHPGgmmscz5UMiC4mCnxkHNE4cwi8NhqA2GqLe3YBQ21PvQHLbTUeS6trTYoSVJaYk5SzBWvt4",
  "key2": "3BqZQ9L6rk4S9TM9sYeAzvmJakHxRJgeTzhkmnudmLDmHA88JBt7KRvcCrnARQ2hCA6kkZB2YfMi46bL33f6cLT9",
  "key3": "4NVcUVSayiYEpW1MQnNNAzkD2vFyvckLzuF6h3Cyz1f4WeCkZwz24iac1i9ZQQq6oBnofjmaGNrURtyUxASVHysy",
  "key4": "3dknvKtxqJUc9FTA1szL434mxhi53AT1xcuJ19XHcWs84KAYYbTRmVQrP9P1G3ERZwHm5AEw4fqDXZvbeZWDnu3p",
  "key5": "5ZveacaCpiVkrjPNz1YrTfuJ8WWZXUM5CVMdWwvbXuMxW6PdfAgMJ8w955FUMNdkSFQ1WwJptnDALcU3UtHX3nBY",
  "key6": "4ky7r89QMwsNJVWqkN4cdN5C1pxufThNdZz7KSADKZnAwrZgP5E2zhdtAbJRBXRoPd1WBhjtUMq5QzRzLwdy2qaf",
  "key7": "5Gtv36G43AXCscXpo11AEmuEzioiSL7SJx5oJWJfLn35kRE4Pb8tGaa91Mzd1cAktHbJibSQdrjWk5puh19jgyi",
  "key8": "3pJhX3bHgcmNC2A7CyofsJBQpj89mvvAAUXAXDhBScLBAohKVA43MzqvkR1T41nbf785V6q1yNF4ZBFUyZCDYk2m",
  "key9": "53TCetKXfj9tD7LNWnvAatp2ANiWg9zzofipRSmp6PusAZiWobZkJRDwMeTkNGiRMB7xHu8ypsA63PQTJm8epJkR",
  "key10": "3LP1xxEXTYK2YckvMScg6hUqN97hZUuR7yDDHoHb4bGgBnPzHqfhYPFuAB9QekYXxzuR2VohpCmMnvZcDAn4Nqx8",
  "key11": "3rR5kFXYwgex12jZShrtLbHFaQY9SFQZyAFEMAfyWukaiFu8yBQXp7C7Mhk1zi7zVh5rq16QoacCyStLmd9cJ9az",
  "key12": "W2A1YX1NQyN2MoPMNezos778ZkRixqn2GGnpg3uaz17KGij9Ukdd4RLgRnNRz7VeuqzjfHxoS6Ku1ygLqyCYvbQ",
  "key13": "2sf9KaBVnxuUCXGc559vAKyAWBfFGBgTSAuyvTX763mE9iFRoUJ4Vr7FGTLzJREmWWmEjU23j7fgeF7Qq3GUu6EF",
  "key14": "rtitU7SnEkRbjyEV1pxpsa215JFfN8iD7vTKsgqZX9uAyNn3ND5N2G1ik2Bc7WQZa2QEZrrQfxfs7QrhkuaLDyh",
  "key15": "2ACA8ZegdmFyrZeXRaUaqNQytcCPihVSA6USmNQ7XGwJMY1UwN25Wm17c7pzMDFXFHSsYbsUjSwQY1BBSHeXHfa5",
  "key16": "5wSNqSujQo5r97XkNmLy1ucR916E6bMohdUqcjjdVgisdtcF2GDHN49vCz1vsUBPtJfWkzmRW2XTtx8j4w9FSTey",
  "key17": "58fa7M6gLr1SZa1D6Krqwb77n3jCbrJtJ3Jb2PKgJfuypvTQ9CNq3xfqtWm6xR4pUjahsvrB27SMM9aoAn8Hwyyz",
  "key18": "3vS6QxKXEz8ZoK9UAGbCbrSzQCccPob7irjmD827ma67nmSXqbSGSvM22B4PGvq4BTnqdmXUCUqS57n6QVyenVx8",
  "key19": "33bSvHoatUSq85wtFpj3xciDXLjfqUm1RThH1Rp82iR91jZEnnN6t1Hv5wH2TNaYQvazPBywEJ4FYKAW2naoHJkm",
  "key20": "3joFJpzdLgmYLEULntmkPZMjM8XhqdaReFEot1aDEupDh7CKtFiDZ55Q3J6CnfPMQLLbx3TWfN5sXKzCE4M69yJS",
  "key21": "51YxYpbRrk73rMgTXMhttD9AtaL8QEZTgz5kVxf7CQqHU8qcqWkF67YNJ8UNdeDT8R9HR2w1c1ngZ3XzStiM91qr",
  "key22": "3HndRUDsWM7aRFwDMHww1f2EHFu9K7BA2VMm1yMBDwxCcGG52rVA4fLrVyYYzt7TxCpysqi9xm3vARmQJo4Ddj2E",
  "key23": "48eQ28XKZTdayjYwdWyaaRZoCo3UKpgDRQdHDyFEpKzMK7wstFjdoCMoWUnUqeMUXdVm5mUPakxczjbyYgFbW4AL",
  "key24": "3Ut4zMWpoejS7Sc3p6mfrLGD3xVt1SV6XvPudf19NjuS5QZPYg8cfyLDFhoKByiBYwLyHih9D6cWk4zedHtGA5TE",
  "key25": "3BNyNHt6nYGVKQMCYExqMQ4Bt8qxGPH6Pzfie6VUYM1sjmpi5AJ74mW6nNnar6uzrC1ZEEs8ggLEPnZZw3yCkr9q",
  "key26": "5cCqAkPNqc6V5H1KpTRZGMjVb33ct8NnCPxnAYoT5jaDqXLHy64tLgUs8H63Zg27cUawN9jcFRX3r2uecytvowv7",
  "key27": "2447WSJrmrwfm4k8UvP65FTaAYVYAqw8G1rEtPQbTwzb7Vk89RN3YbN6sSP1ocn6CGmDQWhdBnKdHm2Wec8tkBQA",
  "key28": "xDbr66LfWqsW4mGzSrivdYgGEYn83wrzk5UdkpbKdF59NezftuJekBxX2sh8NtbA1URt4wL4qMXVGcRtjpqu8RZ",
  "key29": "4JVurxyVJhL6qswctEPXQuwAdfJ6cRTKr3mGtSGFcCkUPd2SdygpF994JWgnv9QjMkKDuLRsTxBkHAM5e53eXGpq",
  "key30": "3QB5gbETBs9cdmXuHbAWdGtGPfskGreP6chfEdY5bBcy7rquvmWXBakBmGDSgh4GhbLBK2XjgsjfXWtkAXvQre7F",
  "key31": "2mza1J4K9m4JmrpEoRGrM9ARc7rouG7Kvd3b1J9gcMwuzG4eWNVqgvUHiS8oTLx4t2t4YzbqBJpArmsmdETBddhK",
  "key32": "39SmoBRh9c4r6ejXcLCJmTHmx8GX9d6BGMFAcrqejVtKEcA7VpNoYM1WfgCF1ke41wMnV3HNcJ7LCxeccNJjUTiu",
  "key33": "5t4UGNW3g7P3LXDrqvUtz9kDirUVDB7zUUATeQ65yLrz78fa888ewRC8EBeQCMLpsXYNUhgmuMueeCxaUGhJuFs2",
  "key34": "3WCf7Wp7Fv2piAMjNraAE4zCL8EuUKhn5vTjPnDAWYDzvUK4CE45sX6LkPtnxQz5dfWA5gfcFkFdzuXZ3kykgPjJ",
  "key35": "4UU2Ty7mvE3KrGjv8WNUrbAi8tH18VEZpRVcjvqacF2W2ETAEVL2khoyAtmzhXqtbaip9KPdqnN3vYCEMauvsFDB",
  "key36": "5zo1nqhd7GEpPvpBzWpHq6oyfKM8j7XW2RkzELqgVwMKq7jEHx45C4BKGTEbTB6hTxfwqTCMYQEcsXo4YxdrAKjp",
  "key37": "23JLHTXXw6pXeud8qb1tZa2fuzf4r6Enryjwnow2jopBZQdAbCJVrzUnzurWqv7VBuHu2kSCQTQLuaWi1QVTaA6m",
  "key38": "4Q3F8gLMrem4CMi9nR3vRH2jPyFZPUrns4U5iCFd2HEQGx4gXfCgQA5GRsn1Rb4LpfJ6kYRgvejPGumvuKdAQWbk",
  "key39": "3qnAeKk3iVwNic8fjGxdXe5dY8vrzzDoixPpxs2uYzmFd2WiidMvH1moyPqdFRKk8m7mQ7VBTHmdsttbFR6r4gj1",
  "key40": "24tLaS4rfLD2zg61a85ormA6UPdqj4teQ4j2a5otbbVK9KccjpYwYjEEyRbPtQ6qqgPm5eVYJ27nvq23uSEvzvxd"
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
