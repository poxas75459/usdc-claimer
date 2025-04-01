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
    "4XHznpBectCzSmuv463pq4L8YP3daRuLoeg8Gcs7BKGJ73XwaxQx7t8Dwk9vsp2kKY2gUntxdBrbp9TDAj1DzPXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyvXBNyxAYL4RnWLb8zRJv4c7VJDkDfSsGHBJact2kx86MgAsCrxaJmZLfJQqwHgvUco9xfs9UTYxVtbNCDrSu3",
  "key1": "27MYzvf4NPtWmEdSrDhGd1nowMSwj979NfccDo6zLGY8vyaySyW5E4FkvPmnBtNHDDpUeMRFRjf41NCtdcQQpcJL",
  "key2": "2NfKXTBxXWCQqWmGRC31q8kQfKgy3CiVYqGXwK5pPjLEb59Vr8HC3PryjuWQy5cd2ADzgZi93hByBMJAZSnNwFTQ",
  "key3": "2y3L7TReF9wTGczPPk5AhviDmNKaZZRoU8kqp8T9cAsoP9vtEGkuG6WG9Y3PqnSbci56YcF89TYscpY4auXXtPbV",
  "key4": "3JE18SttAG3NNF7L8nvhGdTdxqhVVNHf2Ga2S77xVJCHj9i9d2Qvbo75cc7VF9YLGcWXP2B7S5Xmrhx5YwGANz1Z",
  "key5": "5W8B92yq4STxCLXPVJQE8JShR1LfMpZSRdz3m6xvgGd27Gdpb2diu9NHXuC6u6C9jJZopv9o6Y8wpRowL8GGR1cK",
  "key6": "4MnqP9R5CPAoXhmjhf9DoRFjujnVBuMwHYoNvS6No4izvuhZrqWyvj4SQfNv1e6YwbyvBo9g5FXdTaU3EqRQrUTv",
  "key7": "4FV7hxqbJeW4TcJSJhya6ZRck91iC3G3gzABwUMgCEiLvAbQKjZopbwPpwMuV8g9wHZyaTPgEKmQdSsJcCgDEHHq",
  "key8": "3Ue6wd4taNYeGgYPW4z7VAqkZFYfNhtimLBizaqGobBNw6hgZCa4FqZbB9FVyrKNHU9VGhPL6S2cvB46q4PHzGZE",
  "key9": "5j5Pbpqw8W9Sw8MorsyxHfFZpcJ8bpYR4r4n63BfyAMGH7XmuxuV3AqNRMFi1HEYTh5s5vxrc3wAXQYawrYAKawn",
  "key10": "5UXDwqSJPfroJRKpEfY9bXV4prBpcnHD1AG8wvrHF2Sa6DuyL6sH6LhycwFf2hRFSq5KcDpA5wUow1DepUdvw3ZS",
  "key11": "2JgTSPCxd7qx6Agxyda7YczSCviXBQucMZwmCUdnxA9xwuDdxR2aAanWyNvZCQN5GagRmZf2U3whshZQ7jYxJ4Z5",
  "key12": "2aS27MsaYBrbiDS4NawQZvfMMMPZ6HoPpsrrqty2ZcDiFb33G9HnjybAa4dB7FSLgDydbcT4FSkVEr9EpMqbcwoo",
  "key13": "2VpCAzpQ3T4r5AgXaWRSoDrY3hQQa8nKGvGwjqnyApa8S3U3pKR42NdjMjzVANp7KdpWwungkTBbjfDC1XHcXoju",
  "key14": "5jjNE3vtYUMj6Feb5SDwA5ipB1cwWw4SpkX2xtKS8c5yBbaPV1Nm4XgGjayj3czZtdXJJfXieCcWJYx7YWtvU7zz",
  "key15": "5yDwxYAPDfS7ctm4bDNp5bnFUKSTw8AvHDi3PLnrzSxADJgDabg2xZaPeCdkNtrcRS4ZARJNz7d8wTqEeh9bULk1",
  "key16": "2AW9zyJ5Uvddbag2jEn4Rs6dPu9qQzTzygUBMKJXNUtz75nDdkmvB9K9MyedqY5gAd1ZnB3XJNkEhBWm8Nab8YDf",
  "key17": "4Rkza5GvPwQMhz7wodiqtUHs1Wa2Dqa9peZ9Gs3oyheaTydUjtVpromNsqnyBQuxpyDR5H45nSKXEeCcjZRCQSNz",
  "key18": "5B12eAyareTh1hLyyUJtm8xqFyPArDih71yp581HrFVy1dssg7voWcP15xDGdoqj2EqHWFELPHNtHqHnUBfocBGt",
  "key19": "4uyvqTFZ3RmyXMEzLJZaYB91F32KERsaLFXTv1JLNEVN83M5jQKMQUDSonEVtR63Fj6MXywZYWCdXG7uwUZtCEee",
  "key20": "3mwPB4W4N1zNNAZSXFKACGRTKCw3djDS9jxTzWT5egHvFrDBnSfbuLU6mZSxWNrddbf4icMKTYsoRqYPbzEwhjS",
  "key21": "2PbPLRat6WSeyhR5FPAd9RztTgwdDKvDoDUjcKrXNwZ4BS9Fq3Y7Y3xvg4Mfu2UwV64hpyaRwRURGnCiNszYjcME",
  "key22": "3WiBXmtc1JdyaxZUhAVHekG1pbAQmXXbszAixu4ZyyZz7SauySS37M6DoqVEaxh1Vc2WaQJ8n1rtKXygJSHuHWzB",
  "key23": "5tfsBaLQPhTPVSD7Ye937CiPAaqakWjmVgTh25G4U8t4QpQF1SwmA9xhi58UEQn8qaaARFcs1F8641qEaaKbjQGe",
  "key24": "2J8uFRbbWzJfQe45qDbkyc9e1cSJbEUAwPP6qU621YNtYZZbVSsokoxB6sra4vqKmZVr6yRVwHefCdcaSqLDtxTu",
  "key25": "3fUvkY6Zjhp5mF5KVGJueHWF3xLbYJtSiT3eoHnEDZ2ubRDDh3MHEYUmxGtiwGkYdZx3gTdZJNKiwiczQZZDA8oN",
  "key26": "24b8QgF5dTtou9PZxbpc9oXycjJpefBrjjcfVe2yNnMw8tCJfBsjh5K6KPy4yFqdNmMu5ncPscTK2Xw6Gewyms9T",
  "key27": "3iTW7bpEyxnCg1wpJBhqtaFwdxGTcfckuuSQpcwTDjEFwd2455aMAfF1zBL8CMMt5AcZ1fvMyyAUkQtLFR5QzxLZ",
  "key28": "3ENuUE9MtFTzpbXwMuFzqb8pmEA8xo5zPbFT4aWU8mvijwwNhbUcftQc3daa9pEp27F3dRnBaiBaFobd5wZmYppf",
  "key29": "2FtC8n7oGeQ4A9NnwjsSEjm4CWfnbmc7d63xX3oucQEUAFy8WQDFh7AGpMUTZr5eUx1vgV8Xb7KZYGGkLTu8GStP",
  "key30": "RqN8cgnqp4WTYmfXyPTEVBZpt9Tu9DV4E73EBWfqRZ57iCx2Uh2rFWZ1K7KiDMm19FNspJKQusE5dzvN7HmBEvr",
  "key31": "4mY7ic3rQKdsBtpVfmqCK7EDPWA43GF1qPX7pRMFUZKtdRb95M62oAoxUZzNuvZuefgpXjWdBwh67Xhn6LjjXx7p",
  "key32": "2JYeCSXEBfVgLtaF9G81NhVPvk8DscUumGF5dDvZyTgMbjKfiapFdwQ64nPQaLWgt51Axe9ds9DJUQ8LrLVFwQKp",
  "key33": "5VMqU2GzYyhDhqnmHo9BJgCMxnXV2toXRgjfuUGRWYct71mcVFfhRc3eruGCTbC6H8RYYZ2xCRj3g1RqaU2Qmj9o",
  "key34": "4FvMCnFqbzLQCeKVuBsdejToRAXGbpbGCeEKn6kwDLYj1aRhe9Jpz9imTyy5QWn4ZdEwV1h9W9KNFVALyPAdsJAN",
  "key35": "2DH1oQfoevwGfHrpm3tzhbQCe7zT3mKmWmaCgcwWNRGhVjq2xtZ8L4vknZC4qpDX19aSXHQ3Tqdwg1ZWnAakY9uw",
  "key36": "5jyVWTh3yaCFJ4wvUY9Au7F7yNd2qwUreiHtAat663MAhZ7K88pY43pK7kQf4HFXE2tYit59CAxSfdqRK7vEFvF8"
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
