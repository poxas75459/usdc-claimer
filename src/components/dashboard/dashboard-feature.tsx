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
    "4azHtHmQ8J5wWhgz7981nwctHArA9fYYqvbTjWLcv9P4XSLs1gXKgFLhbx8gQbjx8Q3qw1sdd3BPJ8crMozz8r3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkoFdU74dZWFcpzEcyKc47WjuhpWgGvxKcfmkMMoWFXENpQbadXnA2qMq52yNLmwQhM4xSzUvrE7Rrwt6KVdQyG",
  "key1": "4jcwquFE9Bz23kcFr34vkHGiYieJhiMWGYngYPcoMBceN5Zy9bfZHFFh789VMy6XNe6FWv7f6qqbakmBZ54W7Qwa",
  "key2": "28iFuxNDCH7EWVY38iqg22YgmsKjMnt4d2LY7zDLqFNWACmUmjBPBwjGHJnaWNsibCy5foxnPv1PNKhk3kN19cpq",
  "key3": "3699t7FXbzPnH9YTXn5K7YZvgQ2noahWoFEdKk9cEQUrwKCekoe9rjURLtyBjYPpi47nUvr8Yz1ovEbB3BTUaH5g",
  "key4": "2BuwswdCfN2LQbyxQLyVrPSUgrq2t5NGTQQWMMaawFAPpGu1jDzbRzhdwqAjvrTNtou9bahbxALpaHAwuPDobMeW",
  "key5": "3TLx8u2BNMF5TPkXbs1vE2R9Px1q8kuRcCC9McZwvU5Gcny7E9seaenCnNEJsSq4icjtBcQTC1bSNn38i2twEwPM",
  "key6": "4VfcZRVMzhNPtgwfHqaHWLKL3UJuWUD9f9EhTXhii6prxtX3qJdnaebzhR8JatUGPuBT6jAYfbr5Q36GwW5AVLev",
  "key7": "5tM2EN13MR1RhRfMRrEiurenRbiQ569AnyjHo9rTHDbbsP4sGAGYx9U6cCrJHdGedWvKbkNPjXmXbwg8T5TFn6WX",
  "key8": "Ne7H1fEpq98wZ2ieSBjKvhVEB36YJipxDqpHBiFZYdySdHJ6aU1Rd2UQfthc3ZXLkxBnhYX6SLoZzAPkP4bGVGG",
  "key9": "5N43oFZADaEX9eGEjV5dS3C6dZXJmFuTWqiBLQtHEqULiLFdGLUZVBK2dzLwJ7uaeRTX61mjZk9ZVXDpMHwcaUxT",
  "key10": "25xVDurGdhwb5r6paqi1MMPuVjwc1bSN2d1kNYs39v5EPToX2SdEDXBTkvMRgdRZSMGA2mQuv2jKb8HJhu4hbjLe",
  "key11": "5kdG3dLgwSNk3TozeieBCgz8ZVu4RnisFdhUQERSZMP2FnpMAp5fabwHwjaM5mnD3YhfEHugMw6wYpjEUCzjXeF5",
  "key12": "4358sfrsZSkgYtBDozFV2y1QGutJ6rsAaDjs2QmvTXTWYrn2JHPBReWcU9cYKZSRMU234KiUsnJzUb99QA8qQuwS",
  "key13": "wmZMLfAgmqA53iSx7FBaiBxbv8tZDHNxuuehKkjxrR3Pm9moPji6iBsJxQJeagwBVZ2mh8hjTo8ebvT5LYCeUTt",
  "key14": "2xKC226vQH6hysUYuBqFEGwtM565W5gtBuZNwoQdwDVxahhKBVjNPFD9ZKFUA9XUSvcfeWThrYWxwQZgqdocNb1r",
  "key15": "cVbRoJJBq43sh3S2NoAzXyn93ZUQRZzDRevJASC9f4aY5duxQLeYTAzEjR7SdVKZps6PGmzMsncvXHogntUaYeY",
  "key16": "66u1gdk9o8wXdoGzn5sFjBR5NZGHg9DzyAYiKhFVBz7uny6K9J8RUy82SRtFPZvEAVKoFPUGK1PGFqJRKwU9zjcX",
  "key17": "4JFkX3iHDQBrgBm5L5NfxpBbHqAv1SxRhgSw2Zg7C5m2qCZLWkFLMLYC25NHFcwwZMx5tGxdqtgr9KVZQ3oxkxbF",
  "key18": "4vKwfojkSXPZZEFXzvPFNyM7wVkFJPPKuwdVktn3x9jFm8zT37hbGPKdZL9o8M9QHfvSGmVSt5N2exB7XfcKvGE7",
  "key19": "4HMBQwsKA97gqrnJbAuPmrYtG44YrcKac1iJosSCdtmm32E6P27ozNGAfLstedz3pgwactM2hgxx3idbMyR2j5Uj",
  "key20": "3zmMeRtRYWTr9FAAu3Cs2SroWXjrZWv3RSPJ96dhCLnQjSWWUfqZc7ZQ8prL8LTDqY1bsL89KMNJN3Z6BeWFdJv5",
  "key21": "4dnAJx4X3k4BpP6SNifGqq5jUr6DpcB5m4ep4v8ZedyT5nf8ingJwfy3vd8JeV48Q9uPHUyTzjbN2FXtnBvR2K5Q",
  "key22": "7JB2KWAWeu3h2K9Pff1tYnJ3fmtiTmuHv48gp6ctc2QYJeibfACLSKN5mtSPeR6UGSU95bw6X12R5W1epzVyBvL",
  "key23": "2we1X8mgMnuy9kLaMor6hvr7mKyTpJ4q3fFmf7jtLHTDkNyVdcjivxwvfeUw3HTFE8D4vdc1wHxdhabcBohwaiL5",
  "key24": "2cVJ6YAKXgvC5bWPKqp5DdJT87jw5MQzHgvittLw8x2yesBSEGim8jSckMdQeL96CVD7Mqhm18ogD4tRWcHigNci",
  "key25": "3zMdRsXkYLZ4D9sdKSFS94D7quYJ4r8nEVPZhG8f1dUTvoYPPgq44gevdfTozuYVNxnaPmMYxRoAe8S8NnkHwPD2",
  "key26": "116dZFFTqqcWSKvnH8ugLWwF7D2cJMzhNJMZdTVPZF3fbXXobrMGiSyGHRVT1vAYuXuftjoLLLbmChJTeoCd12z",
  "key27": "shcTb6YTUurCi2h28P1HRTgpzEDJAYEreNt8Zoa5sNK58fXzDyYnKa4hLGxGfwsHreggpb1uA7W6uhknwCJ1c6d",
  "key28": "4jhqwvEmPnKmBBHXbJEMCK432Zh3NoAVQyGNfqRcPS3VdyMjGhstKv3uT1RRMtVyBUh5AcmjCZSPP3XpdChcXyb9",
  "key29": "3aw5DbvbScBwJxxPomZvcW4E3yD3k4P3dk68KnxvFKPkwHAvafMQUvmfJCSsXY35jW4giucHJr29kEw1PZk5Vz7b",
  "key30": "4YWXgti9fkU6wVNXwe2FPAGVWS3HLiYwGZ3tAY34xGEiVAt8LWxxU7v52t9gESYHWj4th99CdWSyDvx3xUNiiCd",
  "key31": "5n4oGQ3cKkttDfVhk8iBJG6rd37n9sowzNP8h1uvrkixXdiWiRsyCbx5UVFJvazKKSs7iBkaLtrF8CmigNLFiPQA"
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
