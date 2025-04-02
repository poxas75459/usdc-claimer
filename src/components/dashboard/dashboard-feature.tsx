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
    "mq9ZPtH763HpUwbqxQUeeBaht3CQkoUTs6HEwXP7jA1bAWiMiG4T1BeqoofcUn6t8Gzaozrqbbj1YuwWDi27uc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3dZ1ngpsgB1kWxts4TALPY4bXJZhnVSAbVv1f93jtBhyTXmPo9Ng2HEufZKYvQrPZCbhu5r8XSZpAQYEPxE2ST",
  "key1": "4gK5tu5feQRydDUvAhzmYA7sHwtqGt4ivJeGexdaygFoapCibPSijBBFD56VdrzFEmqPcrxHPQEMxDT1w8WLPVbY",
  "key2": "3F3y87skjog8Tpf2HA5CqFo3TaZD65h8RfgzWB1VYuGHTKWwYGxrJMVgxumqHj1iMj1JvSLATwM6XtkYzKgoHiUu",
  "key3": "27hCDZPDLxaGZ7ESYGHLQ8zaz83AZZqMNvVQMjAfPpw5pF5zFbzzhdWDXXs6QHexwpzMRAJQ2Na9CSo3yYt8SEU3",
  "key4": "tXHJaYsa5HRcb7razfjt3GiWMR5oEAvktBHw6Mirk151MyWsfs2cRmMCXXnYGreTxGMLmLZXme58iYREiCDLDGa",
  "key5": "4YSPXi6QC6D1Ewvfh2Nk6Edp5MkM72KF5FqJchnHi95ifcV92W5zkNAybZ46AQtLPUYtitrwbnfVKSXwvcPuLotk",
  "key6": "np1AdJr3UHU7PbhwKPMvidXhNkwrechyMD1PQpkBN8nkFeB8FnmK7DBa7hF65UZTNsGGm6N3pnCtGMhjgY3tuw6",
  "key7": "JgBbBUYEzApMhyyvquidgZwjxdY4Tr94HrYVT5bjvXG6nMDWjzSUTJokdTJF87xyPHyzqn9wxBrEjmwxAzYSGSr",
  "key8": "25sfisKAxnWa7r2NJaMfsAvNyZZKe9VLY9np7AgsxW4DfCWGk2Fr7qyPhh7VJqpZwT3MwepKrLjRiZPCEofhB6ym",
  "key9": "2JpDgChN9f2G1aU4DggtcsY6qRYCmWEcWdrJh1Y7ELt8ioL2VZRDEABWheG1QiP2nw4KdRhByp7W5zi6Q7g52Thg",
  "key10": "5UySMfCfcNzApVRReFg7u8whpWsiVdNTwptnTMy9od1ni9rNMXpsXNCZ8oqiqZUtiY3YyxdESovBJSzCk2FNDT6p",
  "key11": "5bR9heZjUjyxDsfq3HBjTXWD9qisvKfeGpgpXSoFAneDM9sxB2eZterqbd8Y5RCunN6GeEj5KfZpV9PRofkvXw3x",
  "key12": "5rzLE1SMLvxHR9dbvavZu2D7d7cZY5NccAebURAEBDhwovMn7m1cberFB51TxknHVknoh1mN6PRENBah1R48euQA",
  "key13": "35ZWnvdvm6sGuTsWfBnfhRkmVrzzVwnqcNoAgdXoorH7NwP7HtZ4fZ2qbFHcevsajmxwCFzpHopeVa8duPi8E4Y6",
  "key14": "3mLGR6SKEt3JQVGVfjN1faj6z8KHRNDYV5eHe43rdUGwnWiN9Wv8xRnayJA7kyoE16qXLNBixRrQHaHLLyCr5Drx",
  "key15": "55pEhx9PT32fgJpmPrucMCfL1438gasjBzakqknPNxmVYxJpyQyNM7cJBjZJun7wikRjfyckaS1qyY4uwvQ2EyEz",
  "key16": "ts52G3DAetiK2hXBoANiaCUF6grhd5bFBLZTKaCHNT734WzPGDfAwced3kJQ3BarXqnHiWBXgLXQt3mqPKajsCA",
  "key17": "23XcDvAMqtL5KNkjjDaqFMuo7Q9QZNzfRSKceCybLDXDqBuCnWro6qsgK18RbC9NSfjRffFdazCeBvhFMg8yoEiU",
  "key18": "4ZPG7f2K445rFSErBcQsU4CbQd19h8KURZEKFAVKUB3KpnSkcVVx32bZmcMJPBvckWmyvdJ6JJnksnxZPo9bKMF6",
  "key19": "4Ldfuy2RsNYrFmpw5sbriW3jKbWfDt8gLXJCFGNNxPCV1chWqXsjj6ReTExcs8qAwRPqxo2ETfP8sNnVBFdTKLWk",
  "key20": "58AZUo9pgKRG9GBpSPQsMwpLoiBMHbvZzoUM5rvfZkWyNb4LXTsSq4sEreK2VRw6BaLrjr3tohsx7gbGa1mjbdog",
  "key21": "2YiUaCpu47oa63Uq7SBPJLcfQRvckNRuKbZLFBJawtGPrr3NVZLfTsYxuu4SLWBwL47v87TYhU3pAXansYXfPqtA",
  "key22": "486BDX7pYncUwoQbLXZv9wrYt8pdF5t6J9wvJHEZ4h8CqqP7iLDZkaAG6kB18BcguB59BBP3WZeyF6PSg81NihZ",
  "key23": "wwzu9KUbNh586FB1QrwFFpTjq7WSQAg9ZdBNN4QaNNjBh5G5QHf2aRHShX9zvWwsiLJW6L8jBMVfKUhePwh6k8Z",
  "key24": "2vocJawUr8SrKLZJMY2zzBSifZNNXW4P3b9wcHcMnpXfpGWGhUiPkeL9efZnPGqnDjREwamDYnPFiM3NBgA7Xj6Y",
  "key25": "3fw44sqZsNQScHacU2Cmhmq3FNGJSxLVkpJypMQkJu6wSM4ioy3tBipGK4eWVkqAc4ThvE7DWHUVav1E8DmicSrb",
  "key26": "4b4ELeJccenkKv8vC1FRLB6JVWyJtoK4BTNU4MyPFedftcsobRArCe1szxEmmhHryVQFyZPyAgzN8294HxKKPXyU",
  "key27": "24Q75yzBHCFaSxEfbtaNkj36DBK2b6977m2e656odxVBYbXCoXH5dYMxog8apMb2mJa6hR6xtbqV3SgN2C2FbXaq",
  "key28": "wVGMp2xLdrQh5st8UX7uvPqpLeQxg8AL3C64rtfdqWr9oMeqYKh756eD4NTHtgJq3HPKqsQwo8RA4EGa3kXzimE",
  "key29": "3rgeEZRxNwSixxzdmHSWvYifyKAf3kh9oC1rMJ1e7a35p4Wzup3K4HpZLjzHceknwsiRCoHSQa587cdFvSk1R9JL",
  "key30": "5w6AsMiPSwKihigdKJtqyRBB2uUN32daD7b6YHQtwYAXoDSpcQZNyVwRbfzuNsUdWmrkqiniVp6KtTnJGcUV1Zb1",
  "key31": "L2R1R8ivVLtnaebt1H9QShCY8cqCvTGSgD9ahSFHecPG6T3iBjMykjysf19qzXsS3Gr3BTgbhRcYnSL6JAhwTuF",
  "key32": "35twKms7eSu32Kntwvh4BfubvGvU9rKmJDkE79CtVxodpcViVt1GzN5sYmkVQZawb79P4hzq9DeJY7MwstMFfy6g",
  "key33": "3dTvotYbT5R8MPhdMyPQUJAmTHSC8k9KJDdecCUjsyNDbvkyERKDZ8NqF9egeN6nh8dA2JnKtpBq8SNwPpKitoDk",
  "key34": "5F6Dme9TQAdB7ok9rLgEnq1bn4JG1S6udZVJZuVTZoTv3BK6YevobjR3e1Y3fhfbNMXk8rVGcbhnFZD3qa34T3rF",
  "key35": "48mWdcwVCw8EiYundakuAFuwuPh3C2fuzsThR1mLRfXutQPLZfkM9aP3U5JPambbM37j8ZLAJg5DUvQLFQnk5hiM",
  "key36": "5LxWwX4iguD2TsiLVHTRK7tERF8G6uQhP9N5sbTpg4uMXz9jTvn9jBuTtsym213c6FB5YipY1q9XzS6vD1t5CMMc",
  "key37": "2eBKmsVqPkp3JU3y2an48VtwnCsMUzWxxvMAtXhnGKxfnjHrUbNqfiQvpaE46y7PYYY2mhUHFz22X6XTRxX2LRiJ",
  "key38": "5QyG5mFtfJdi1ThdyvHKC2Ev4ejrxtqVEYSfZoHTCwpg3rqUvB3oqkKx7rh1tRVZxppHUiQrc3sLWCSgaapXaBh1"
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
