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
    "2TvTdzs3JuR64BQ5QDUsJwCoMH8n7jijGWojHSu1Xb5LpByizmFZvxMZx7hJExBiC6oPxBTMcoHgbPkcPxTFutT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6HF8HCgqamJ7iAQL8QHFUKthhqVtJ3FmS6RzP2uHNHggehgnwah8g5BrNsJbKhCwafMXsPz82yaErVoDpqkMRS",
  "key1": "6QTZa5Rg7TfxFduiiEt1epu2ap1rYakGxd7f1kJsZ8J32eeT6R1NCi7SGPLmFZZHCxfJ8NSr6LcPoAkVJtPnnH1",
  "key2": "QKMAoESFj3VrQKB5RRBES8u2WdwpeScPhUkXAADixyQmEXDiKCZgmQkkJXGJnG7t6hWFhVRqXTt5aNmGSveCqXs",
  "key3": "AicfhJZQDhNYTjGhtnRccvn8P8pRRbFT6XNSWw5sspChKRgadeQfd2WeYBw58EP7UkxodkaFSmMeBmkjpEpnxHB",
  "key4": "Q8ZFPeQ9QmvUPj1WPT94cY5FFcn21wdUdQ42Tkc74nPFHmznSxk8MtX965c8wgUq8PBgyv5He2kqCz4szdAspMN",
  "key5": "2hb1fRaC53CLXDhPAW9BwsRsq99qRhH5rtSnaeQPc25hxSPS16kPfoHrYENiAksmhfXn9zdjPMzcjnK11v22urEc",
  "key6": "43vcTzPTnU6sj5GdgyyG193btxeEHho2JdS1CvsGz4kngQ4Goot2CHn6bgxYeVeLduB7kg5P1Fmd3zT7K5ysdZfT",
  "key7": "S43BDDefZEmQM29qYw8ZK6eTzygYL53RJY1Rd4mZVgWyUE5MbfMd4oXgcE8EFfRqh3F38oxSr9cq8psm1C3LApT",
  "key8": "2eus9sKL4cJK7EhvQ87wYxJooZfYE1Hezg13whF45HdJkrycP66AvNMGYFiQZMo2iTdc8UrUvWTx9ZcXyMzBzCPC",
  "key9": "2HKmPmypegzD4kvY2LoaAa53UWoECzN3aB4L2UvQeB1rB1RTaQS7Qi84F4nqMx7TZBkhA1wXCaTFpZPMj42MLd1D",
  "key10": "2ns8F2gMV5FbTjsei38pv4YPM5eXz8cNK2LR1GVLADoptEsVSJvddmCAANM8362x7Q8A3KxdtCq99HUdyukL6eqV",
  "key11": "3D12LxVzg1gw1DgSZHeLFk9aJ33ph9sWQsLnnQLW6PpmiWu1con9nTCgE7TFxzLC1CZXtPzPycBVdUGZjX9rHZdg",
  "key12": "5gaixRhcDPdeFkxRggsugh4LYtdiheNfc7WYdgxZ6FpYZXwBQFmZmdTDEmbf3HPTYFyynptpW9oXznubpYvbTH93",
  "key13": "3eyzmZrci26To7MZ7KYNTsNAoNMWRBzVLZ3P72LkajDZ4YEXUiAz7MiGqvjEj9c3eEioJeHfSpNHpPmXLmY7uUu7",
  "key14": "3yJJKaorGNuQfKC6BovkFpmNNwJ8xLZBFKBQUsJGnYQGjdaZAhgrm3VDpNrThdMxcZumBw4mp4aD7MPAVseHoDV1",
  "key15": "4TD2iG37DDCntDgg39m9mrsBgEQrHLBnw9ZDSGM66PPWHHBaLGsiuEvXnT3hD7RrPJ4KqCSgAmic8CQa8tRKtqoY",
  "key16": "2xt14jc1viFTJQ5MhM9dAeUeHXMeDjkwe72vApDAZHDqmiviXoUf7YGFVQr1ir4mMftKxeSqt8LqTcBY3BHAFuKX",
  "key17": "2GEdT9UzewTibU6apSSyXiQjK6fQtm8E6KdEZA3wkYknkf7MYTfm3Zwrdrrfu7Bai4EU5HeRBNHsKrKUYyLkX4ym",
  "key18": "5nFmytHeQ85BPCkKa12P9hUy6NT1pTQ8EmQGdGiNrQmp3G6BR1kQ5rCXntoWaW999ntSW2SiDwudPkqiSZNdrude",
  "key19": "4UnJ5spE5XAEShWuiGPftJrZqmbsWwpHDYTczZVY56Y2JBKbf9vL1UH3WTng5hYn68RfKMXP6PyPqoT43YoAkTSw",
  "key20": "67amKwkJKNcxFz773LPRfEwrNGQXwaRYNgMFJkvVFzmaZF4suuVa6StvUhrBC8669288rNnY9d9N52rMNGuAHuRe",
  "key21": "5xk2tstm6ZdXSaqv98XAErwbZV7JrqHw9RmQVMWeN81xGxrpSkkhQTHZ3hj6rffoPd84ksmhjCMpCDBAyn47C1pZ",
  "key22": "5241cfj2gjY4g8yAgdNGsxe9GaXVuyjyhM5jaqNneBKEZoFWHbr9a4RUKempCzzaCMaCc55PooCHmrB3F84G9PqP",
  "key23": "66tzSZoVFCYSJ9YHF7tCRRMRW9Yq6S6UvfL4BaiKvK8JMd6Lebcc13XBaprzkBwzE4HqWr62MdGpUbDJud26uTtu",
  "key24": "29UPDYGgLo9SnyAECpfiDX6uad5YafwfASBVAxgS9uD1MVcgFHq2LkNiwnRPQwFdrMqZFk5B7gqSGWG2FZhUPqFG",
  "key25": "3UzdAAN3KyJf7oM3JQuTAzo5SRBGDDHjyyeDkrnZWMLiegPTJ5HX4qp7x9fzhzte5JZJQxrxJpQ6CJLpqmBCKQzf",
  "key26": "4yXNQDMgieuuY7aVcAwYnsTmASTtpJ87NHU4ebcq93CyJJXQo8EEtTZ7KmCoJT6qQ3CKiWJgKFjcupEPkt9Xk88c",
  "key27": "3zUgXxT8JzvvAbC8bwyUGLtPLqHVMP6jhB8dPP34RL7tdpQ7s2L6yWg4MdkZCJXRT4HWnujrq1zJb8N9yvYkFWea",
  "key28": "2aaWruPDGtfGXhfLjs8k7fMnKP6GumfTjxn15QdkXdx8nJQFKAJqhjkmMHxXa3brDvvn3oiz2po78t2EMrd5TkLe",
  "key29": "5MrzDE473SworMihUf7FQKXLCicWhCLxuAqUiw7fBdAqzYK2fR3bWWUdwL7SBnpeKQHnYvQpMyd4xoGbFhZsX2Ge",
  "key30": "5wCxHVYZQGaEDBUpgoB6FU6gEddp7A1BGgX6F5fQQ68CGv367JD4JK6va9iqb1TRuG4iUYwLu1pPgFmzRZEWSBdm",
  "key31": "2GC23HEiydBnhaxsg4Cv2nsdfZfxpGSGbn3ajHLfC5Bn5vhHXqvqJuZrhTqnjb2urJZkiWHUbUX178Wo4MnuvY1N"
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
