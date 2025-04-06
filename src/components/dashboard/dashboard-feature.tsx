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
    "3747yMkAyRYZPwHkJjrxfcog3HuU6MK7P75kWcCiiAeQpgjRXxbd5GoAsy7HA7hz4n5PiiY2avFGg674zFacwvJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJRnjg6h3uGxWGxncD38TPM377bk9s86GLWKARDoEhWY57jfPo3SXYpZvVkmYsVZHMKs6GN72DXtchpw6UB1M5C",
  "key1": "59S9w7GjHL8uEdAo8W3Sz8jWMGda3S86HEJ3j914KwsSGZN5eaAE3579kPJbhu1c6rromRpG1thEhWR4VgSCbA36",
  "key2": "39y12kkj5PEfs6cKwYPv6P6QQAr89U3hQvdtSj6kVaWxDSJzD2Rrzi7X6d2oZmU2SFiq4qNSFTZNW6hBqHYvGbLW",
  "key3": "3j5QxGnv7gRQn6ntPgE6GmZsCTKn2FrCuxxo9jQ5iLA1PqsB4rp5k2oLSYTov67G3NAHvUfJwCQv9LJ2WHkqPDT",
  "key4": "5Kw35abVzJjVk3ufv7A2JC3TUE1YQTcxdahNh2ACPgRb6CBb1siKw88ykbBsbLLS35i2oHz6FkBHhGFJHREPosEa",
  "key5": "PjnJz2BRMsLfRdmhFL7H4Q6YnmPMFHia2aLx5qnvjo9cEj6iY59RPjqqYQwvhMhv44eDnFSW3zPuSLdNLm3kSmv",
  "key6": "33wktkZhABND5jZFjP4Ws3Wg2kHmAe9cuBysWjXaN8a8nQ9jJV2RnR3VhA7GR7CrAjDnFdfCSr7fdqgnqTQ1DZf1",
  "key7": "3zmJKaXZKj7nJT69SLwU6Fr8e7XTLFp3sn62su7joQJt51ZgLhbKi4w3ZwLJRRr6G7ZXSXrLQnYhk3Y1b7y6C5em",
  "key8": "21pUacaQb2C5BJVJChyfiHT3pmaPWBj22uuRsD7o78eYuEQN6pZ5eYWkkTLJLd55anVi3Dun9VNMMd8bWX7pZgkC",
  "key9": "pkJo7UU1M3TrNLEXDntHzL4W6j2XBtF959TKMFXYwm1raHVMK174t5Whj8pazNcYQpSMa6HE7RR59iXa5bZqHFJ",
  "key10": "26hwavQEiHmZ5K5v4Tq1cnBdNG9jSA5Ysfi9SmRZMLjt6vmh6DGF8yJpJ1kr9J8mYqJ8At74Ln7qxkMhaNpHo93D",
  "key11": "3QTbhs7U9i6Q2ZaS2URqi7g2AzrS1mfF59gNnZRm9zUGRWLGu2LYTfGmDHsfd2oBvPzRPmREhetz9WZtLs2iT9eS",
  "key12": "mQmYkTS8MEGZ3AsTiRkxjM65qZVxFnAjFQanP8v4oMv2RrMJqu2u8Cs4SKvZUJYjUfa5SBk64K96qxxsmFc29DF",
  "key13": "58rBZuYxrF7Hj3kxnM6PrwsSyapW2PKj8qjbmqtugPgh4Vkq44Eeo8jTML58ccvGjAnfLyrbv1V2weLXbMwuWVFX",
  "key14": "3xrxVoWd6imcV94Mg3n7oxRFUp5xfTwsZB7XzAgnzfsoW54VGbZKwrLKCcwZRnb35TM86EyMoyKX2k5BvkYg35Xa",
  "key15": "5B63jv1TD4wXSsZUWPkbUuWB9GRwM765SxbqgBPzoRzcKRXsJkwJhr7UxqKcCeFCmT5ZpCd2wg6FziAQLrtSg1rn",
  "key16": "44UXMkKku1q7NAoqQTKiF7nu2gAiVY9nYn3njbUPHfqNqZapzYhnMpwhZX36bDaDTiHSK122ra78Qp7iotyTyrBo",
  "key17": "3CqujfwmPM5Mjcu25a9V7yAPBocKRJCGgokvikdttnnjgHiA2C84RYv8mnEvhUws2coKCsqHEgoZ6mtru5qRYfWd",
  "key18": "4vKP6U3Gc3kM9aoVEf8q2VxaAtSH5uWZNkwtg2yR7nj58Z2qBXPsFoZSqYaSzLoRhrZrxohAxkYgkutGbFchP8sN",
  "key19": "5hyUetC2XhP9q7dweKnLg1YNcKYzxVev9K4TdtNzsCHF7jkf2fNKP6AvRs4CN115Mu9GTiXpbsM6rGwwc2Gz8t27",
  "key20": "4Di3HXwGVtBiV2quiuTpYuAgaZp4DHGHFYeSjEbmFzYYEeJAzsVvpwuGx77ikAGgK4J7gEaingv9cqR3AtB1NwW5",
  "key21": "5ZgQPs5ju5vCtGTEGPGrqjpWezSvxgEYzgYvgY7KM49QLXPddeh8Jf1AqYUiCS9eqD4ZVjQpGNUMYa5Tt6AWNZ1Z",
  "key22": "4vszxSYWfjP1oLJABCXn1GjS63akwf4L1g1ViVtSytHNJiHZDqfJSpvLvXAeaKZpPZCufuujsyftot6obJ56EkwM",
  "key23": "2HZwAS9d61Tm1zimpqNgfo8wf3XosykoJD6amFcCs86QDLhH29XsBtnYptE5eZdpQmuiqVbfABnipPXgXVSRJaDw",
  "key24": "3Es2SqDifBcRaeFrJg7nbAmeGdf5FSwnbHEh1mUwNmwK2CfUKeh2eaDvW9xtBDr3XJedqkUnNECotyqn1rkQu9R2",
  "key25": "5ePQfcoDMCTwjXUn7CGd3uv8kmCbbDswXaLGmNSRNhe3MSMqZqfJWXLVSC2GvdLcPT3GfRR5aEzxZQr1each5NFm",
  "key26": "3rv2tuKRrCK186bTi8b1JhSdreB6vXMkzaTYcPS2XSKSEzUW3VE39KeftiafNajxQ1oTGpNxxucKbDtCNiKVhprq",
  "key27": "o5HMxwSxKjXTobHiwiKvgyK2oN2S94xcdobMP1ocweC1NehYRqcmFGCCbeu6fRG3ML7aBVRXTzpdXASWzDQ5fQW",
  "key28": "LfsM74BCSN2Mo7TJ3EUHN794c9Mr67h7YG18bNbha5WA26xYVSfTzyYhqwryQ6VyhymRN8LW3vYXNvGUDZmujHh",
  "key29": "3kAMi7mTRyuayynuChseo2BVZ9soA9VKbWPY4kUBkHCdk85HmCuPQywGBd6YMDPQ44cTjkXNoo68UZQmaewqnq4A",
  "key30": "22KwzoBveAhcvQnzRUbLAYAma2qd56KmCCLXVec1MSMeBcJ1zseA1MpZi99DCW6ciu7vPHxb1dvvHWsRvuCvZwuF",
  "key31": "5M667c4nNZbh2frH3NWBXhJSG1uS6sW9oQCFjqtcqzU418Sxqf7QxPM16v3924aRjmDuBTXrWrmnThrLnHFhZbTQ",
  "key32": "2TS8Rt9wcBKU5HSFyu2Qt7fHqj152QYE9oGtkyT7NTpTfzFbyCKLEad6JzwmWGVp6yqMtRcsQRgEVpbowTEM7bf3",
  "key33": "55qeGksSpRRVpgSNaLv5xBDbJGL3mco1mQA5APajURemRsQjWvdXAE2UQ8sZKiLUSwJGHQ318aC2afLAjhm5VSX1",
  "key34": "5qEytvtWw8NHR9fAjTLBjRS25ia38st8hmfzouQ4wWR5S2Kxas5xZpnL5ZCu8p32iS5UDRajbPtWfDzBKvVpv6z9",
  "key35": "3HfKM6xf8u6oaumRG2qvsamdzhoGnuYMszws4AwbvHCZngv5HaqSrHXTRR1591qPr9QHwupEhFgmfWvpQhUYMmQe"
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
