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
    "5nxBpL5qeXXbQKyvxfTaYbyFrSN5mJkVs7wLaaouqVbN2NRn5XLKQAQDBMmTKvFAUojX4txJk4JxPpJCgNeeTxUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ff7zNkFqrMv2faEQT5BkcoMQkRCbCxYSZ4i1jAmhVZoEn2FkmuJDBThVabA76zQht9gispbN63sRddyhWTiAmDa",
  "key1": "4fiPkdh6p2ufQmK8TNuZgtUMLybkv7L8Rzp6uzmzwjThDiMm95edLM6FSQ9A7xducaXroRQhM36tX67dxhfvGbqo",
  "key2": "3cK6Jp9v9nQW5HSwzKjdJa5WKSR1z1rxVy3hgUppLGTcAumVJqtvN61o8EPXt3JqPTcVC7ykwP23nfUwL3yw5dP1",
  "key3": "BfenTLUrgtie99quzibyExahcdwv8kRQv7qiMJ2g2VBZfk8HvtbyJn6QzYmEPrnCqP1GqKoCbczd5CyrL1mdUR4",
  "key4": "3BREx3Bs14DZmRgMxWToFUNRNc91VpMq67U9zevovV7CrCqLLGWvSrjM1HJCfFxA2bSmKqJq3scYCWtmyyCvURmS",
  "key5": "4imYG67hofSLKt1dBxYtjNX7Y9UXzY8waejbCmMV7fEKdfBE9gH3ynJKHARXrN4ibCp12zk6nwE7CZktekzRXu1k",
  "key6": "6vAhY7vKUpGKb7MXnhwrgoc9KEEzcXSRTHB1ER7zuuHGkvXfjHLdMp5SeoB2ht5LLd92YfbzeVAKkrihv29ztWr",
  "key7": "4jbyLcu7JaYqWcCvLRCXyU6T2AjtRPEpef4sTmECrP479R8rXcJkskDm5pZmzPF4gzPwe8boUUvyK7ggVzJCwseu",
  "key8": "4nP7xopaJ9AQKidLwFnBVBDDbCsG6nk9BtfpXVQ5FRKyxzx66VuQCDZpKbvK3Rs1wYon9cmehEnjcqfKh2uWqgLC",
  "key9": "3Ff4N1nDNzTEDvb2s6gvxVz2Vj2Kc1vuxSDomGCWNFMgcyEphhLSPYHki6mjQRWXVxsw1scvFgTm6f1rzF1cB57M",
  "key10": "2fWVCFrze91LHAj38xK5A964NUN9K7n8fb6ntcXG3Vwgou46MjseX1jTitcVqethY4EedNZPi6rsBGhrQ8QXXVay",
  "key11": "qrs8g3kccc3SQ47vBZc9UdjJybWobQxMsZ2iZ7M5QPiSKcNbYwAkjSYxCC82fUWBVG3kFPJytxZbMURKm54FJLn",
  "key12": "2BGLsNCkqPMzHNUMh72pTXjShxqfSAiuyt9rEb1YxKAbTdViAY7NCms4uDZ8y4ssBmRcsB9LzNWs92NYj5n5dc22",
  "key13": "61aUziwkyyvfvN8UdWm8dzXkvhKmCY4g9kSJKgn33erncPv8aqReGGczE7xHKDJmXnucYo3e5s2eMuc84Xf9r17H",
  "key14": "BRvFw219qbbLv6tyJGGwctfxQSXP4hEVVLYYWWWEMEDwPthMiKmowJfsPcBDHEWS6ZEzfiSBDy3dPdfwG1R1Dv4",
  "key15": "4HECy36dgM3SV5WjDhaKBD2NheYN1iMPiRuNYRwaCKUD7uge5wTEryutQC2kFdkaKNueeVQxpqBQM7tWDohQxjHR",
  "key16": "2xtve7GnmJnS567ovMNdBHCYhsADpWAUFFeRkxRsyU1W1FTH1JVshpj6Aut9RpvvkLZrQgkavqboxtmvKvFgddjq",
  "key17": "5WEzhNMxrbZhXirXfyYWpGtWEcrTkrhjTTece1ZDpUu5664jSawgJ8GAJGPqCgfHX6KBsxdRWcBRSWhK8qpP979y",
  "key18": "42tNmbDj1fzFLG44hyUfbQ6TQzz9vUhvHcEyAqPe6L1S7ta4wjfGohx2uhjzKZ5hzG5q5XAyjc4qFHAEPx22BcUi",
  "key19": "4XW1hjtmubZmCD9KMiZooN81hTQLG5kbxyAsqoD4yLewbJibAzEaj5jNkzboUgYQgAmCMX95arvq6rBfy8zu21TK",
  "key20": "4UmrfLQ7MiLNKAGL3SyMehKXsVKyXgdyMQjTY4fxvRJauWvg7f3CjgM4LfiSn96b8RYWQhLSagBzMQLzVY6Whcav",
  "key21": "67AbiuDg7b2Kj3s3RFeLUu73Vj4Q6vh2jP2sFKVoZARqA3EDbhsgHmDZewzaGofamA7WHj5vdznFESySfwmZaiFG",
  "key22": "raqYydacQ3EBvbojcVfuRJJjJbRBWMiwqLBMGV8MDJifDzowzCtVhkHs5ouEuMSdCGHUE7DTrdsA9UTLwWYmLcb",
  "key23": "3RjPKgsmHQQo2yr1yKC5t8YtzFosCtXLLUcdHfXkwrh2CuwR9RnKm5GVKK3CBR42MtP9oxbwLUskJLBcxMroPMJm",
  "key24": "4xwt9rbS8aef4AqfnupfLKGMJmDbipsARgHriS7Xi9SCg3LvpRuhW1fGKpSumYLrXojqAdVYJfMDymRn58teiH6F",
  "key25": "jNiebS9pnAb2dBGwCUtCEmJXk9kVJZhQ2ZnPJwCEGdMXpg9DQwXGuBCHZEwXRa4iMqdZ63R6cV8PSV9WJYHqdXt",
  "key26": "4scELeCjUhKJ9rASKMWL1f4XynedmewFxhqkQQX9FgmPb2n3baeDQyu1mWAQ19EnHJoKKNp7YFbWj4qGArbSzh2S",
  "key27": "492h59G1s7cwLWiGyzNuUS2Ub9ewF9uXZoXDEePauRc3mQVH7oQ7gnKBiFh5ZkoXJLoUCF8bydQPseajkM47Ka7j",
  "key28": "3WZ91hudLEQhMWn1jjATVkZvUAMWkMPviKCt9taMtHpgAAJ4DJpmpwv9bG1zVdNZcdJotDUDKZFyPtDTgsEw7TWX",
  "key29": "EZpdky8w4P2nBdCn3rgauLt1bf9PReR8A1EbSMiVFvj3se2a5gjG2jW3i9Hq7gJ6EbZACdhyEYPrapyWo4aLy1f",
  "key30": "473hMTcop2Bgi6dwcniYq9FBsY9h3BezxB8KmmY6HdYu9wGfRrZ3nBHER9oBzpFC9n5Ks2Saurhv78Y3Z2pJQbu7",
  "key31": "2vFK2vhtHoNmSJQgMH4TSSUj8zwEyoN5iTKKQ7Q6Z4aNkWCDVFDkBkoEe4FCeQgf2KMRQNDbPoZ4MqVXxRMmo4GY",
  "key32": "3N9DKHjLBVrjPUWpwKGYwrwE6bqEVG9SfsxiFUjagKpn4jot4RWg3FjNzrJvF6ZQbpiYykUXAYMZEJnyK3KMYhoY",
  "key33": "2ZpLBVXUf1LzCCGCmd7PuZTepFzPpvvzSztpkyp5kMcvEDxpW5SLTRnxbU3RXTMuCgWwXAbPTnsX8FW2V5a6z2uo"
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
