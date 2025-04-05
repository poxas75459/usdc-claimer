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
    "4tjEBmcfMGhL5YDzKF9igNHca33dju4LatoLJDwfqSt1fzeqoFEq8GJhdWyVYJRGugw1NC4v1ek742xnYNepduYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4VLLCXXF4uJ5M7VSbWffVwfoP9XA4hieNFpEa1tfvJKFyxtAD1YZMhcEc7Jm1mmrh4bm1BGzykVv7qcyMksiFL",
  "key1": "63Y3QSJtVWhN6rUwUL2biVEYnMxTkwzrJbNUJEYHZ21DKZvRMcVpXbrBKBWhPmCnQTmCBJinNcWpmNGGmN2wpPv7",
  "key2": "oKGFd2pjkY8mAs41FhG1R4TdbrXbfmAgDw4k9VprJPp3gQtEmYZo5HBxdEC3GhqF6mDzWhWCKdo8j1S83z6qQZ9",
  "key3": "4n4ZuLae5it7tUMbJBhV34nZ93XKzPuDWGrcpLKFE6MwsuEgNo1uQ2am3pUChmRG5yX5267M3WkAz47c8f2oLWuS",
  "key4": "3wfgigb2HWqJ3e1ti7gTBVn2CWogaHaBFAGngAA58fRWnkm6UsDT7use7vKuoaLiVBMMMBvt173QjcrdTJmYP3jr",
  "key5": "3TwD4TQsu5YsFeGFEoUkz5swbrkSrTdUWSVyFiUfY7KZK2vpNSQgP9pHWq7m7CMLtRLXAAx4VJq8L5QXkVZWxMp1",
  "key6": "A5qyzaCko4FRJQ7q1Ry1KUPQX5RLvdGz2Vkea5Nib7wc6cGs2iGU41NEJeBnL7bamgbYSLdMwPA7WvLP9679gw7",
  "key7": "2JkWDXxgoB3B7wVqBrkGDus4dbooTW57zg7PuZt2NSwWhs3qNxQ3dEL5CnHvbZ1RVLVqBMi2hQtNqk4dhmp3vVG8",
  "key8": "2eBxqcayPafovGtju9AW3qnJcZWm2RAypyBrwQys6eUkZ8ujZnxGCErC3Xz2ay3v1ts4hof4wgzyYyKHVxXBUFVG",
  "key9": "LXV5XH1MHY2u5Ag53S9Xbks6CQzw3U2utfBZFfFgsTp51jcP711ipjkJKvxMa6vEEym1jk5XQnVgvienYEtwJjN",
  "key10": "ms2koNVBNQEWfLQnZZZkso88tco9DofNszPcM4YRwsMvgMrZmpPr98dztgjLqZkXm3QEY8zVU5QBqsQM9FEsTqt",
  "key11": "5BgYZFbfQC6XDrzFr5ee3tX87Bd9ZUP2ANLLMBafbqyYxtwvqSvvjYUBJvEkAGA79dYCXxU5SFFZNHc5FQcjdWE2",
  "key12": "3F2E3qEwJAyw5AeHrw5sqYXEf88PpsQS8wndTN1NLvCWRgjKij3QcZE27ZVNwY74zFNXW8A6hbkQmAscRR7MR1Fp",
  "key13": "3YFr5Zk7G4wh6bxKYqSRaJdHRjJ3hT8kt1Qj4LpiTT8sVGu7JWJ8LkgXfBkMuwxs5XM2a1Zy2cDxQGr2cPue29DG",
  "key14": "5jnxMSqAAw954Z5VKZymMMz5Et6YXr1CMvUL8tmvrnNix5JYTX1kUPPsHGqwAPCti8Wo6Kp1y1x3moj8pTDMANzw",
  "key15": "2XZUmdAJrNSQa3fzrL5o1rhMs4xWgbq1ZagnS1wRPaqs2ya5ZMhTLRbchufvq7shVyRVvPejPS4zdGuvCSvTSqcG",
  "key16": "5ERvtZHJ4nuECC7QkMDd2SvogJoS7z9e3Yd8vjJk3Q2dAnKxa1jx61wdDmsZAyCLWsyKa3x9iVpg7sKAkdcJEEoF",
  "key17": "353eLcMMC1r9rd838LLnUevLxDpAiA7jUwkohzeQvFXX3C6XfrU7mNZMDygKkYKwtYG19J5vaWs423bbcBzK6hb1",
  "key18": "2Q1cyn4CfzK3JLdDzTKZkQPhKEHqRLn8bF2DP3ZvW75VG5AUbhrb8x4FZZnALvcDkWSnmVmz32KrcwDvktiiaCFP",
  "key19": "4Xq3Lm94v65CpjzDk8duKwauZzDpKzWtWkbANjG6Qi4h53LQ8NezLRNydDZbKy72G6KW9vPmneLEhtWRQbMDgU5s",
  "key20": "373b93uPmbJp5WdttaaP9KhxhR6ihvrZmgGQQsH47p4vnTpVKorUjEin3U78yNxttdcSHbkVLwmyYdsUc9gv58eP",
  "key21": "4QPnCrkFmzAZXdgidbB6LtnofmkDMHKzLLRwnGAs9PafDWYUm1yn6EScEKvGyo2DbBXNPBhPJw3epAzhSv8tyXG3",
  "key22": "4BS6usDydh3w981gtm6THhe3vv3WCBCj5bdtiDZ1kUBULcEbhgUp6EEu2FkQrjPn3xACHy3TAUC1HNrSGjxLba4b",
  "key23": "3chrLJdCFJFFUe8dvnnvykr3q8oDPKJsHEtJzvE9RdSXigU2eb34X8K3pYu4uBT1JjCsH62Mid5LatYDcEioj86P",
  "key24": "3uytLFsrLPyRcmbWHTZ3Bxs58NfUKugJjtAJxdAatHhgmZW4QrPimVvv8hthKUaEUcgRWBgMmqY162F29xQAQk6X",
  "key25": "TB2TDgFgTPQ6LwGpbP1MPCTRLJCMWUJHxcxhzfiu38KsyNHYdNcTkbYZ5LTXVjvraG8FnVDcSRP2zg9bJw4WDoq",
  "key26": "3cdbZMBwaTkQVupPyrvoyxJv1LjVzNQzijcFdT8vTi4oxKLo9BQW1axjWtsFWJi4kDkvcevf4VxYwE6w7KHVB832",
  "key27": "4zeyydQDRvsBmregAvEGQ4UCLZzVpVe8yx8ftsSVgRkJHp1yhGYFSFmGjWGcLAS8oagca8Uw5M23cHM4iKBuvMfQ",
  "key28": "63r7DbP54NVxKoiXWPwX5Fit1tNdMeQn2vxGLvbft3zp2ieCWBMxVmL43jH6okrd85hvLzkMspkRaTzLNTopoSjP",
  "key29": "2eJU9yrZSNJVXbgSGtykhnECny8CyqJHrWJppe21D8xCdRCFYUKjyDUQ5boT6uqV5Y3kuArj4GiPQbFYeTYRLY9C",
  "key30": "h8kwsZUCHGKyNVLGSn3kRNg2QzQ3xHhFqRAPgCgYwgEKKiLvCqZ7eF6BdwcjiLL4pUv4tnPeXxFDzZMUAJcMzHu"
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
