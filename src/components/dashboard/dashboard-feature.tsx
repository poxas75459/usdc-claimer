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
    "62NtTXwqeFRMAEFqkUdRhLWoK46Y1CrNNTKkABp1TzQX9F4LTqRY4SyZ8fTfZ6uWsP5HnXRWxnxanFMhyJEznYsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CTxx7wPVTzsBVryKd3KewpNCPDnDtbcbNrfivrtZfCt4dWVb12TWEJyv5oqUc6nQLZv2oj2S61foEsAzRbWy86",
  "key1": "URFbWyh7G2HKk4cRjaRCwnSim8Mqewb5VEnzoVBWaNMfQ1LKfZfN4TAMcjgrS5ycZp9iuQrdfTZzbk4GcMcf3oA",
  "key2": "5AqHkTLkeVYUcCApRHBAKesa7T5mRf6Czj5ftK1PxTBhpDmoProXKTQbkuwXDqanqqnPsBzRTgJACPK4j7MpFMwQ",
  "key3": "4bGFJ7tqDapLmkFWbTBRRtrWuZKmEjH1sQBciJQbKYf9CRp7ruBPFAC1d4zxYmrAzEKPwgX6hNrTYMb8fdWm1v64",
  "key4": "VaRbTLoAGEhpw913Mmjmq8NmpBFu7anNeRM9EJdsUtoFWaLecaqTu8yPVngYicaB1rdaixwWnU6bJdJ7jkXUSFj",
  "key5": "2XSpDvCJ1DHjB5rWD8GeYG8X9AwkyzJNbtWmbA9ivwF6RHhnBTayzk8bqp4gKXPN5AXjiqu6NhegipyuNbz5oxz7",
  "key6": "4zDANqxKaafi9eyrsRKWcMk8bzrbksPZVpyrrFXCtGEduF3YDRndX2NfyVGVPVbtjKqo4VRw1jPX3D6N9u82DhPU",
  "key7": "4c2SsCAG5k1ebgZvknFY6Ssf4dJroM4MazCmXHTnV45PJJap778cKuzPtrk5v1JmB9imAoMD2cqurfxRU6w8vZct",
  "key8": "4dvKeFG7QrMgqb37ukbVywK6diA9NekecbJexicfW1sMAf27tEE7zZAsN4rxEjMNHB8puqWGRFLmMKQFCT326Z6C",
  "key9": "2xkXULySptMKsz1xzSuPPGAFsD2aeXATypeMGTxYBLiJu7SiSYGAAVZA51byQExx6bGDLQgD7RrwzjyNqH8TgC6t",
  "key10": "nF2TJVwvbKmdtfqGNqVjachYsLaxotxqvsqc7HXA4hwhN5uebS3JZ6LEkJiERCEJMFPT2VPddP2ny87sSjubPia",
  "key11": "36YpArZwu5HGcCQ1c7R5TTqjcdrS14mw1vrswXSgGp1AWvrb2qD3S6D3sffwYJBpyKJmEDYNGSaQKqkBrbPGc4ws",
  "key12": "4PWg2Sv2mLZfLJjRAKwCZC6MWzmwumiP3d1xEUd4q2VZbxdXSBk5k2iMDbLwemRHuB1m7qdWYnTFS3eGHBLPAGAS",
  "key13": "3cDZVYQ8nEMGn1teReo1wqRmmkPsY5SFrSmv7gYASs5UBe114UJeHYnqZpgJqC3VmSwRacghtKG1DPEVDogaCn3k",
  "key14": "2DJM6WvvYLmqCwQeZE4yGdXifwKp7ZVducCU1wQ28fiougcmEAgGdSXJyAZ2ePJ4Cm9G3JPCAMgEHPJ8E4ZnnAva",
  "key15": "2VCA5KaMg2ABzdAn27mchyfmh9ZrN6gUxbTM2iYtkxBvwfPPVHdzGrYAZDKLdrNmdq7UJiqcD3SVajKWpxW8EJRw",
  "key16": "3ydCXnCZ1eLfgVL5u7QmvwDF1EZgDLHp8o3bEmPvLdWBzydhtDt6PCYSAwsTd9cartrDWTS7Hg7Ay37PeBMK1nfS",
  "key17": "3hUBFwti87JsFTYkNCtqbxYwfzLjFMadSNqLP6pmKBQDFGhbE8aWn1BZMt7LYj2xnciiwCdDLd3UtKJDQagt5ATn",
  "key18": "26SRFAU3aNHLvXeCPagMXap3fSvS3GRunFZu3kXj1FTd3YRSX6V8JhXd3VTezK3T1NdcV1V3EaeqH1Q3LT7wtrkv",
  "key19": "tx4pzFDkyfYtW4aWih5VMTUrrczkSBqBxnuJB6C75WYrTQWBLQA2bYj6dEfTfqmFfyYHFAibCvBUqPM7nUzYfoe",
  "key20": "48tF7gHLwCHpBafe1wTTc85XXWVP7rgdgeLUJx8c9yTEYCXdEj2LBPjDQAMraRZDJLt9rhp7XfA1A5Gwv32S6Wca",
  "key21": "3BrKYFkbziJPzZZoeobLC4WCkEMuuzmmjgZjUpnBm3FxJ9GSXnP6GaCBvCqaTJUD4sx9ZGrYS9xaqWHSXLzVMLLA",
  "key22": "4o14b2bwCg7CyNm3kJVS7wrzX9PKsWpTjtB4iHkMXKdxbhf9gVTWcTnngcfxDX71RmhGCxe7LF9y1i7etVHWjwW1",
  "key23": "28H5zaZpFMiWQBUJdReAy3vPXLxRsRqhmQ1DpNM4zorp6j6jtAGnUq8DUvh2BQzophNv9UVj81WnunkNAHmBmjh4",
  "key24": "3k2QzorQ3XUfmMvdVmmfbojCGDF7DA3Z7r1SAdw2taJzumXGCYWXBun7gkJeoWKvfjkdoMn3TZLE5uzi8oyYmrDS",
  "key25": "2E1GdcuXrFYjrquCY8j94PD7G8ViHScqP8ca1FK2VL2E7C51JMcKjX7tkuXpMf6XPf7BcHeWWyxXkpMbWi9aMWQT",
  "key26": "5wKWSWKNZXJgBPMuYJLMe1w6EvQHfqHhtaKi7eq2fwuJtVb4SNSqMrLo92uUw1AB6FMc1rzVEfyWqZr62FaSKMCs",
  "key27": "3rsvWU5Cu1EKJ4eAiRVFfUMmQnEWQuZczQWvGPDF84xEfGYV18TNRFu3oRtpjcPBia54RK8Kx9C6HHrpWxDq8MtZ",
  "key28": "5zVTgFk92R4mg3z5q2P1iu2vE56z29rGmS1fGe6oofypCYLPrb7QcZ6vyQvHrhyZjfTr9JZb9bSoFjpkBEC1g8cQ",
  "key29": "5C4FNRN5W2SQVrKTfNvhtk9BnhKDxkTJcZzrZqvHqUnUq5J8GY28ynRgjSNgYYLCUZQp1btEsucd8CYaukSjs8Lm",
  "key30": "5HV9gQ5hMrHdrEsibR6uzNW8xiGnZs5kEpSsUp6pdW3TaaBY97peLmiKnKxSVRDNBQMBrJxtMmJyHZ7bBwcY2fEU"
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
