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
    "gQwsyM5TtUrveUR89EetxMiuS2sA3oVLL1y5DignDEUwWUDm8cvuwnyyGtXaPJ5y1vW9WBykZbcGF2be7qSv7kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJ6co4yb35SnM8mRSy8ospP2vWsWqdZ6msMHRgHhMtVTuQ26gWieuCFzZ43SAyn8TjHnTxFiw3myjfWtND1DH9x",
  "key1": "4a6quzuBC1acMU2mqPhvb3Xrr1CNXaRDhRhHtEtZKScGa8oLYN9iwuZseM6M9JoKcMX9HHvpACgWvpxxyqi79Kw",
  "key2": "4F8y8xBHs9RkQqmWPvMVbzK8TSajS7GXuiLSfkvA3M4bo3cLS9uuFEFT5EhSgCDVDx4M8LFi4CjYzXuwcRQsU7cK",
  "key3": "WcaJXQePg1QGpTR3uVTvGFh5Hh1sqQUhxwEZHQqu2kPSALU93V3gJReE4CnR7V6KD3AV6VQLFgxksx8dJuUjBvR",
  "key4": "4gXfCYS28EWfBqoz68F3NKNcbUMfZ88hjtqwHL27c8Q1E8PCow4qZfrqvHuXiaqSvCcT4reRypHJAVCM9xXVkVuw",
  "key5": "5im6osGmRpXxXBwJpy3DayMkirp3k5vekAoyLNdc1FSed2deq5FSB8fJ9fjzJ4ijSuauFsLYHRv9ArjjGcg6zJeY",
  "key6": "5uSducoZq2RTogfMknhsTmvQp4rfGsaU3kMWBL5dKmS7xDTV7Vb29MYNgBbafM9psCFswmFgjiGSTtyXV64mTRdY",
  "key7": "3f1coRz1Us9xRakXmdXLgJt2bb9D5hGeH5p2dihnNEm7qZmA8CKnZjN5LZL8jQNiMSLqfetmzJXTg9D3rgKQFQaC",
  "key8": "2PDaej8suq3vtaPSaEV6H5QQiv1M51w2qVCgisgdm4qaBS4r2U8dozxQo6ybdYexb5ANJpU3QjcFKtFkhjPabu5h",
  "key9": "fHP9Ew3h22tm8LSQ4jMJWBGyyYZPaeRHMNdszBYkJ9BUMwjVgqKaWheVsMX4zVbj7p2szDMCZuBH89KrHzHHqeM",
  "key10": "2AvSpeBT3TNmYLEkXDCgqeSJUbctQorYqFLGoZzfw2oG11vYquHryiLTuvmDykpSZju1LWpFtFxcXpFsfekSwHtr",
  "key11": "5KqSvA58vNAvoDSqKA5MCutsPtbHhxHMGJM45RfvNz2EVGPTYbVcfv8LZC18u6bRnF5AaFUMgq7mGMz8NLzL9ByT",
  "key12": "kgu7P2eHzEWYBSfTtkVi27fn4oQvVeApkBzwiXLmCbYvYJjcSNUm9twXRb1pXtURZz9knk4uLjQfgL66LeAPuNz",
  "key13": "3b8URzySJjJQN5nm69jJyAx8AkmXK4hbB6EKgbTSVQD8YUuBNyrCvxZZ3y2bYgKFC9Hf41SngYvfZXR7y3AVT42h",
  "key14": "3MrL3KtdtYvHkWWK7kY4euDALUTp8PMwfbXzf36HGqwtKCXVXQHdHsVQK4ppSoNG12W6shnMDNLQhEEnMnVHvtPM",
  "key15": "5tvwez7vz4tz9JBxtsh6ELf5m91E7VHd1b2KdhNdbq7qM3MdQC2m7kb8SJmsnwN6wV6SknmAcHPgpzE37HbB6BBn",
  "key16": "61fgCkgGZq7X5rkVJ9CB9FSBKpLx4uJ5XgAd3EzG9PWDXv6tHJLakQWhScfVfMvKpKsQBDs3zWgtzeo96tobGYf9",
  "key17": "4FvJ3zJMmaj5eZdoC4f2TGqRQSo9n9EBGEeAJTaob42QGy7nBwJcv4wG9PQhYgNY8WFQkCSoVtTkmsjS5c7E5oX7",
  "key18": "3f1hyYEcovQJqvFuzCcRe4ucvxwgZSzWKnTastNrTaf6u1FT3bCfgKz8wNhXmzehsYhEv1RAz1UhKPAJNcoSqqxG",
  "key19": "5qj7rLgGnoNZNmUgojY7i9X89djumK61YciEKdPbgaN8TEUNoQ7rbdmdzQCaJxdLQAReBFCUUfREQ7C3ZWQ6gqfh",
  "key20": "37adcedbjM137GYyLL3ePZzXY2RVp46q6MLhSkYJ9WG1SB1PArWTqy2ox5MYV5zLobzs9zv6zRbWu9fmRNGBTZcr",
  "key21": "w3eiFAJs33BjLHXzEJ4Bmz99rFxvAvSpWZsGU1DUsah1rvTMgvFTcDcmQJHCN6YeN4wDw9u3VzPcKB4LZA7eh79",
  "key22": "3AWGvDsPF6waCyHfDeWiWG3ngpyuwRvmsiW26jSNzPGVqRGuBCLDvq4xHPVuaJZSS2h5W7m8DzdS1LZ8rTECS7Zx",
  "key23": "54aMZ2HugVUnr4ALn6PcLzDUryvc2UyhhDs2AP8zhw8skaY5kKreYMut2hrMn6UBKvWMM9AZ9BWbGyDdTtF3VWc8",
  "key24": "3SRaxMgus4R4sVvmCsJSSfL3DZXx9tXYEbESMvhR9kipR6Q7mZmXHwLWB2aTVu5xnT1EwTHvqhG1oXFrJnNnHsVP",
  "key25": "5unkHjmFRoPBEF99ix93cwCEXYtnaYXSUXtgxfJkEhkXUwKLDUVteRvvBJQuNnmcdtQvLh6sAsqYZg2K1xYp85sk",
  "key26": "5opNqgB93EFsr6j3WjMnMFFibpvacgYunVDFQL5ihHEptFG75ScY7LYHh6r5vZmQsB7U9DFLhk1rs9KPS5xi1M1A",
  "key27": "X4R51iFBjgLJ4bzShAYwyxWG6z6xNh7Rvj29TPnUMU62eMKVfW71JFjFmKhrR1H6fhxfnMvDUpjT2AB4bPujSq1",
  "key28": "4RJ2BTRo2p3ZZqtyizgNTvfVvo8C73WnxkZh2xw9oHMUnMYdZSvBX9qgJfVV1qhDsEQdhrZ6dLxrv6GKNAUwCnx3",
  "key29": "22gE5UFaYRMkEqGdCNa7GTMbXx7AD3CJfZ6X63M4gMjDhjjjQbm6vbCjznMk8onqYQTbH54UGvwqTU76QGvU8FeM",
  "key30": "GzJuKdzgzpAuU3Em5CmSDoqYJC6eX2WiQ5TbosZmrw66RTCptUMdeNoSdstoyWt2fiuXu5GryyheBvTVfQnSjcC",
  "key31": "4in64Rfj2Yu9sCXtdmJrVwAWUjabiSjwiBdwJyMM5w7udZoWjW2ro8dSkotNcqkartxpHVitEqJMpARq9f9sSaD4",
  "key32": "5a5gwq1rLKoKtF641qE4HQiTAQSKeE6CmjyAZK8uF9w6egmHa2gMATKh9uspMLbWZ2ExTvQi4dJwCqSSmYsGLvM3",
  "key33": "2ZnDRmSsQ2ae1W1jH3VV3RSKNrbPKBrpHpfzZ7NJnU7X2tLTDrJVrSkdotbfBkAs3ppqUSrTMzfQkNyhR8Qm5Rio",
  "key34": "kkcTfmBcSvZFWgFd69J57prhPn7sbLhZwWp1zFaNqpBaxPyLJ8fvSMUDjvgXCjDGvQypEpg7pb1T1YWR7Yqgrfz",
  "key35": "5wdHVGF1RgkWeLrw44oswQyq5fRPqa1jZMADvARC4zQMQPTQL3bfu2kzWHXq8rkgg9QJqAdBkuz23VY6Ni7vC4CM",
  "key36": "4bLFWT3N7B8s6fP3WJNqiSU6sCQk5SdqEzmoRAP3AsPDjowZoqT7bmdUknwJyuU3JwthgkKzzi2LD1yb4ekw4mvb",
  "key37": "5W6rHTz5fw7GP8H44ttfs5vHcPgktTQGpKHZFUkJf4n1Cs2cf9aGGGYi4YrEzHoqkTCjYABX7tSdFYy49iQtJKnx",
  "key38": "8LgsC2kBHgeg1RFqi77DQiaRaCYSbuWWuWm267oSnu6Wz5xakGRm19vL5NvacvoVtB6duykkYStVGLwf4XsqMJJ",
  "key39": "54c55uqhaYVXXpBkAbtr9n5phmi378XCa3BCosUoEuhrq3rWhefk1KVuqDT5j95qBxL8C1p9e2qT52KXkFWVwWta",
  "key40": "5XAFdvizaSc5y2MaozbgcvW64KZ97EjwUBUdW5cky5w1EG9cSDgbcnyvN7XW7V4vYRo2qWdkejQ2vvqtqSfQVCWi",
  "key41": "4F6DVV9t4bej4fvnsVDcPbi7yHkY9NyEPX1VxdhQB6Py5Qa5cJ5AhYyB1K6Qbcqwsmd6kij77arjT4Z6NETtjzX8",
  "key42": "51qzuYemP5sGuoMXAYGZgDB4wtZKoF7qSXzV7qBr3kHaUhSFB8LqpUAYPEvXLwr41imPDGv6pc3kvhiFEX9VaVFS",
  "key43": "546ABQjqGCFb6guFcwHCMT2fJdtoTvVetihba3rQttecwpaZWajeraZHBHLLuQTCwn6fKRXgFbyVDC6V34WyTdNP",
  "key44": "61rmio2momrXrVuJY34XC1bbo7o4RAHoMbL6aV3xNiHummUqkqNV391owCotiGKBSAXuzLqiQ8TiACusbZn4HKeh",
  "key45": "GjMqYH6a2z1ENb3J5PwbmnQr9ihmpDvmfCGc2fxwQx39oE49uuoP9iEaTHHtz9CpnHivQFpAKSziGFEAGbsfU5C",
  "key46": "2k3TZqdeRhAaBaGhDqjUyBqbbtiLSKut6uDGsXZt9zz3ceY6ts55dHTmutdrbtXZto2q3LB4fw8NNGoqPD7eScjk"
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
