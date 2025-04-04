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
    "56uALVKJQg6iQeWJ4Z3MnRPP8t6PJnPTCc1E65Ngsa27J3QbnHL8TVaGCyAU6c7tCkFV8tNr6jzNYAVjJnUpNxeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uiqnDZ4CL4zNdcbQVio9bTuwfvowoPuKzt5AYcbFhHFwUHXZUhKsFpzHX7K9asyyeuWBY43W9ZY2RCZW6CLB93",
  "key1": "6ER7sjKdgm6ti3WM7KvyaU631WmvoxFi58EBh8rtoXW8cSHa7gB7CQyLMXNE2yNbWa8x4HhG7gHaBAiALbv5TJX",
  "key2": "4P3ZR6n3dAvuHj61axV5frW3RR7uTvcbTkkzzZJUNt1KjU6Mr4qo3U3AVNadKB3552DkdnMGZkwjt1QNQJ6y9JyT",
  "key3": "3QDFuAnEYzGV2xZfCi8fDMrLHtmjumUpFma6dwb5xHMJLhNnGSc7uUjvsvCBFejHiA3e9fCaok1wAMUn4hn11oeU",
  "key4": "4bMCvRFVfv8qhoCnALUFXhfAck8sQXGXR2YymfCGfu8LcPFj2c18CkGaoptYqMHjgu5b6BPpA1aAtT2EJrqZ3uzs",
  "key5": "5JFBQrsvrB2PetVStVEuAuefXcKUSYFNjyAjCUHhNK7PxkA2Wf3CjbGJgpb87a7qHhKawnQp8v3ushT1oXjjUyk3",
  "key6": "22hmYuEJZiMnnf9uMqvqfdkYsiquVktDAid6yY4XrPMWoG9mhc8hcHLhKXz839PKhQuJfqe9MgmbYYpE99TvbnDJ",
  "key7": "GbJfyACJEMpheyeM4MoNjyfE8r1v31prJ84HrPgFMGbcw56U6wkFD6P5zyK39a6Y2xuH44SQLSh7yamHM8bFSGZ",
  "key8": "5kYcTiG9TRut9PCzLTJwgyeX5Ph5kkyH858TrjVR5cVbzLGoXE2CJrz4U1qCs9H7mKFX6UaPqcpEoYeb8eshjqPc",
  "key9": "5xcexPW7xgKLaPMGgdFMK9Hy5yFy8BmVu9RryRQjk5MRTmWCEUx14V8FENcjBPR1VFKbTJf2ZX2hWpkGsy5FLKVt",
  "key10": "U8uMK4McwLDkA7qChuRsEfU1n9cEZ4HJTrr41DeCkwoLEP4qKsono8tAf1e2xRWGw2GcRjCNYCshQKoyzAqYkmA",
  "key11": "ox6HZqizFociJnCQauiwbx3mKdpHCxcJff8VU7qiwTZN41pWSzh5dESL1xzxnyhjTgfb4acb32oThHXMoqTRjWC",
  "key12": "5QGRWe89Sy79uF9SetqGBosNEXDGUZrzBZ1Anf3QqYpNX3h21ogCZiuptxsKHZFtc9P3aHHDXrE3Fr2rPJhJxT4M",
  "key13": "4SAnxsUWpePY7LzXqzWvLyPu4CTbMoZnxg4MCxv5yhJXqJ5STjjbacZKKUor8aeomd1ofmj9tFUcoCyESmFevvnT",
  "key14": "3t7VPzq7TTUAFdPV7vqziTPD9RMWpT5P3kp8uQxiVxTsq9LGpcQrCHmC3FgVraY28yx5MGimJ33oQoWKkvK5BNAK",
  "key15": "3PB7wFNHPRy2nVmsmpusYFw7n2zhfQSarhiQSxEAyx3HKXsHGjmnEBaYQLt9hD6CYjrTGAss6TWQXetdBiSBU4EK",
  "key16": "2s2XHpXRYpUc6dPbo5Tjp9RqA9ePKV4ZmpxweBqMpjEghbetpuDwD29KvBEA6RSbJJ88FYK2Pish6f2rZmvnqwuC",
  "key17": "1tiNWBtubxkCtyE7e9Vnx73tsEEpaJadYwSyWyT5gfsh9vWQF4HcFb7ypbYWDJsSjAgKQ33vCmWwtKv7pduuS9E",
  "key18": "3oCbXu9koSkTAneWSnrbxJYwQ4YUjRzQAMUMou5FSsdSRsodSZtxahu4anC5zcEAXzpkxDQCZf169Hyfe6rdHHAx",
  "key19": "2RXvXuQya8WJbS3HV5AfE4PczqnzNBVJ433xnkvGaVa5FjnSny4apxbKkpUQvhcehQhUtocXu7eFHqbSFc5HEVF4",
  "key20": "4tVyQkfyaAen3PX7aWZVQYGGkh6kJwcYYR2Shhu2srwzx6nV9um5PXwuZA6gNt5znbu9uRX9aAPmF3N82mXvpv9H",
  "key21": "Te7iQEE2tNj6pXMLU51bEPvu7ba7BuzhXEx7bBWdoMpiS6dUoYCihwhBPtTuQR1t2YySJo2NQDobkAcLb9pBZBG",
  "key22": "5a7eA9GqKRXKxYmo93UVQBz9DqpiouS129iFNzuNRF8MHFjmiu1ex4MetMQ7HY8wxPvSMwp9UVcUdQCk3VSATBwE",
  "key23": "2KJSaNkLsorPLedmxGwgAAcJd77fsQZS7PFiQeZ78AX7MGFGbHGryYETNRCVYcgko3ssxxoHTtHP1jstj3Jcz81o",
  "key24": "2mYe78rHW6x4bxtbFd8tC148vzc2wmKamZvUvZ6YUCi32g8TnwCGryDWMf2MtwyWb72Fezg32dhHj8HWwRhYE3TH",
  "key25": "45ynWpm5PsdfmWQdZm8xo9KMrG8PswkiDNDPkt7pQxqcyn8aHLsxv8k93GahWFUr6vci1ub4c5298vWQa9rTLspR",
  "key26": "2Fz5u6X5LFRuePPbFNkjPpiNX6CL4d6PZMacT6jKd6mrCr9gco8APeJhwW8MNWov5QfNbuvARi5mwCi1jWrWkrYt",
  "key27": "4jZS7LgvK8e72N6pUpttPZjJnaTmav2FY6Mvh4Ke87VSiUxFNJyLVUpgbC17yLD7CLuCZYeqPPaWBP4oGT9RHnSS",
  "key28": "2DgwxtfFrUErHn79Hqgo7xJGutTRgmn3KHFnFzUL9jc36TpMX9wENS6Knw6xyvjE354GMarHrAb5fFEecD3sewpf",
  "key29": "c7NqucULNTeNAbB4MbPCCYnW6Zy8sizrZYYS5b4mXtCKZY4yCczWVC2LyrHtmEYWAEPasqxSHdr6ptMLzmQmuLa",
  "key30": "cEKSpLbe1mWwY49urSJBJm6P4hkeT15nJ5mCy3C1F8wb38NaVqseGNH6U1R4Hv6fskzREAUhWV2uHDjgVR5CrRu",
  "key31": "DHBjtBC84U6hCNnVMzbvGxcGCjJCA4WuBugrdnPyG2QFe2wuNj4FnVA4kuvMB6DNoczkTqJGSKBrWU6nLp6id47",
  "key32": "5GDLLzYizLgiC4PLfeabjryCVReLQsUMQD7g1YRwQsRWfcjAuXRdsTgvL5qrXm2uvnGyuyLqQRSKmtHfSRMLLWav",
  "key33": "2iGvP3NLEhmmQQ81nAzsaUR57DSxfwSn9BF9JypDCoDtbfVkPxndpT1y9ywQV7cmCaHMpYEV1KR4m2Z1sScihVLh",
  "key34": "5aGzybQ9J8b9Uu8QACwmukPnBg97NM3gzNSGXduPYevWeQTNczNMA4zjLo7Ne44m7qCQjnFNEYtD3Xray8Jw8n5X",
  "key35": "5a9rz8WBCSxkZK4gC3j8y4Gtd7zbC4oxXBFyr7hfFJgVWZMQ1HQB2yaQFUCMVp4S3Aqj4vtv88bsvitKD8Y3mMTU",
  "key36": "2cM5ox5C1XhuNag3SfLk4XtVksKuQd2yUCLNKoqXw5jgjjqGJvY9fPz6EQ4rn8ZMY5ig8sCXC7dtNFHwcuDKZoNA",
  "key37": "sYVKtT358xh3SN9ggG9i8oojQzARCFNEGUGUb6QWNDFdEREJteeNHRZgJgiFiB84rd1Wmau6HTPZz4hjRL6fYLa",
  "key38": "3LyGt1WpfDGWVUTH3JzZP6hdKVeDDczP71guziTvbZv1KbnvNeoke7pvEn6jKj1yarBnXtTgE5Q41nVqEHd2Rm4j"
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
