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
    "42ox8NhPLcyMSFNKJC1AjXixadCTbGQAswxRNHomQja8GMG7B1rZ5WEmPBU2vKdQCPEHkhRHnuWXb6U7iuPjGyZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nqfeo8WhaTVyvSr2DYnPaF1rHdAWvVDa7vtK7oh3YRP1dcCBTpDvzgKQyMPmMHWHd9yWK24kr2hqmgXBBc2faWx",
  "key1": "3AdDohGXk18N5j7pc486UcJF7vDaTUYjnqAMu8HdWRLp6kLNQMjqsqBDvJPt7mSo21inrCZ5BoRNdTYSo7Jgcstn",
  "key2": "2RTHMUedZLJDj5y9QUBM2h2K49otA7uzjuHoWL4Yx6VDkuouaddcebsaJSD6osBwyUGts4a3qVGnZ6CmKhMTv7uN",
  "key3": "5cj18UUQhV2VsA26W6uRzeqYfaxtQSCbJeaQwAHGsutJeNux59NhNzxHhfuU457Ntrbcm73m4mZEoRNCUuAgGnex",
  "key4": "5gU7ho7NBRA8Tci1AMFBasVU19qeiQ4h957v4iTW2w9jsFv3TtEG5Dh45HsPR8S3XnxDnq4iWKKbZwRjpvJAonM3",
  "key5": "65w8Zqv2S777dQD9p6oo3qADUAnQWERe3ubvgrQSP4STBeTFXkbfoJLD33o1vdfouRdfBPhEBHL8w7N7a4ZSGerh",
  "key6": "387wjDK1QVAjWZ5honxcLDCRCB83k9UNrHgdMjyQo793GFgQRw26rS4bQijE5s44QaybysczkpFy6Ziuf3quq4a",
  "key7": "34wqMjYxs4trjNjYKZ9sLmMphGRsDX5aQhhXj9PCQuJ8HbrvtcCCnXnFhpuVuGpNQTb9yFsUiQSEejo4BhCaQonT",
  "key8": "2NG9cavDFPCvmkMLbeNttnEthwWDhXqym115JiQegE4cc7KDxPvCktrVuydtWquV1o7chhtRdd2SdRx3LRsjLuoS",
  "key9": "zXxxH2unLsATpjndr1tUfNdNc9mr16Y99BWSeCz2a7PL2wn3eRGprLb8SdcqSF2PH3mTeQLj2Qsenp46KKgt1p2",
  "key10": "5SzYEn6KLT6vMBxQcx5Rs1rbFv11aRJpd4QgAoyENhuadGF5Tj6nKvCKghTkKM7e42utMGZugqKnShuWd5qLRxS1",
  "key11": "mzdfUHu75UMCVYFe77v4vjeGbxyvvZRh2YrJws8e2QPAqyR1aBi9Ed2u9XLGgoRdfXa4mtHJ1kxbfsSaimnGRnG",
  "key12": "5xPGH2uKR3SPvVLpc5peqeZxaRQKqaYNpbxuGj4tMhy3d8HNDaRnhFUXcK9CkavX4cF5VAg9JhgoprACLvsUaf8v",
  "key13": "B9Xwie5MabcQ7Rj2MZhTQmbfF6SAwdM4JMYMKchDJP6pE8ftPiRVaAEaRaa5sypmzWPDXNpBczkpzwZe9ck3dnb",
  "key14": "22EYXH9v8KqzQgip4hjjNQAsarXky5fE5a7XnqeCCWJN2gizgyu5ckJKMZJnC9teG2McUPfPYtCqinfukcyJ6M37",
  "key15": "2vwuLZV8Pz1cVy7zC9j7CTy77LsKW5KRgYPvd39tBB5PxSJmo5LbzBPjdg63SaYrRnn9Ld4bJ9iaboUer71osLcs",
  "key16": "5nhTc1vBWaUW7dF4x4MjLXGxD7kSqrHSXvppZYXm1cS9Pdwj1LDfaw5hfPdg5r3ommj8uiWJqUkTMWKeZshuKLcG",
  "key17": "4mJzjrZJTYTJfDT7RKE8SjzgMduTs1vup5RBGnvJcBWBftd4P7BzXS9EvTdV3cFGd1xJrEjYeheBRCAUfEWSG7YU",
  "key18": "5j4ZSTB3PwaipRvbMV2cgu8ZYK4KMRL7aAcTfPsPyJPgMRGauhL7YsrXiuafV8CndkBRv7NARmWUHdt8GipBkNgq",
  "key19": "4NMmpi4jp2ffpZThcxCLrCXSiNZXncTMpXoeYrMDHGHWwzgSENwm8RUcXNTHw2MGAhNg3L3p1UAMmoz3DCbdfUbw",
  "key20": "3bQdJJhEAUeVLiRTauupTbjsircJxqGYzgnCp2WziBekrBcFQcrg72bsrH8ULpeFFXRtcjPi77s2mywh4ecVAQaV",
  "key21": "2nB9NvJh38TDreMuevvtj9L2Epv4a3Lqtv6AGcFHPp5TfxNqMrCFvdZbqBHp5eRSJG3HQC7M92DxdL3x7LpNBdyf",
  "key22": "3h33CUGXoiXx3DYiZeF2DdXT8qeLc9Zt1wFCWyfB7LAa3aGQPkfbK9Xp8iMpMmhz2jfWHgQb4DaAoeFWeohTWfT8",
  "key23": "3WmoeW6nbgxxk8nSz16LLZkw4rQYqun1f28gYt27KbxvW6UfGoT2HJWvM5jhZRYCgwreNc8hgMdJh6eW6dNWZENZ",
  "key24": "3nEfyL7Y7ApPKtF5zfgAWA7bbxdWSeQPrzM2FC8hWcKnphhvxso5yFLCtHV1eQtHBg4rFRPckDnGwkMRjsxg2XvB",
  "key25": "3fCUY3qj1KeT5D3XW2ZSqwJdHXznnrD9rTNBP5CEp46JoNK93m5LLdDNTc8YT997uYQjjQwtR1KdqpmwMhDGHtnp",
  "key26": "2zm1JdX3cYr5AbnMJhZgu4RNWHtwTwaDGP8S3LZmH6G1FsopP1Mins85Wi2kCceTtdo7s2XDuxnrEX2e2QWF4jbu",
  "key27": "5KeKgzVNhymg3ZwrfHHbQPckHP9SjytCjUKQZNhYtSf8W9G7JKkiwHoziZPtAwr6XBdcvmh3gQsXg4J59ap7StsA",
  "key28": "3B6XK9kqqqbfHowdpcns1zSFhj46GLYGrq2yob82Dv6ybawCb2EKY6qm5kz5jNqQAZjDCJ9z8FJFVHFPzS4tPFxh",
  "key29": "cPJhQaVMPZHWdrUP6wNG8zZPbxVZysd7gtHsmzm4Lmtkrrjmt61X4BB8RYwqGfspddZUHMaeYh4V7Wog8nL2Bhj",
  "key30": "cgJdBQu2FZJPVsZcvk6xUCpHcRBuUhN6xbv8fp6ZUzeagC9kJYL4fCP6qXfEztzdy7FTF6UGR7shKvc2XTyGnbT",
  "key31": "3NSZCq7NDExo6zqbqGNuQNoL97eJwxzsVGwbF2L7pGVoZfn63QJgGCM3Dqk7ZwxyHpTPirwtJ4GznNs3iUP1jT4E",
  "key32": "36cRpT2DeKiJgHNQoizkJeFWYJs2NuH9ymKrXG9DghhURYKZ7wQ6BLXugSZaXEx9H7y7bH6zkySaR4NqRwikgf8k",
  "key33": "c1R5M6VP7qQqehbRRQ56hWtqMz4vcXaDm97YHrHq6gYbWs2QEJ6v7GK9R97hGG1MEyzBU1cUFqN8n5cjKZBRreS",
  "key34": "5opS6wmv1FrccH6VSPhnLjCLGtVdBrpBkVnp5Cp9Zt4VgQWDHKZdmb3FfnFNVAsbbzA1Q7W4iEKigr3nWu5S1aSx",
  "key35": "3UGmULmaCEWEFrNFMs73eT4yB4juTbXEvKCndkQLGWMcfbD2c4R3pT9CzDV5HwqbD5s5YY53tT9PS8gjw5PvCYS8",
  "key36": "5GcytmLoZX9VpGhhHDLssyb9AH31QHXaLh1zMozpvqYLnd9VMEdq6dzVMBTzTTyACnzQFmKasCByjTs1PxJt7EnY",
  "key37": "4RtvVAghL7nMAaiwnhtEz9KHh8C3QFvJHRPuPM3Z4HSTzKc4MZZsP9yE2mFUPLr572cxDbe6Rc4DpHXjrnwpFHch",
  "key38": "bN9HH72m8F44AEx1DXr7G3EychZ17AFZ1JYUrU8xD6aZPFrC3tkX9Sc4NZjPp4YYfwwpXxLxhBFHehwqz8xB7ka",
  "key39": "4Pe7CXRw3xeUqwmJr81ixZAHnj9cLuC6uwuQGWxNnLYQtJ6C6CTnTBAqAJfpyqwqi3yREKoXD116VWdQNmaKG7GA",
  "key40": "53ZZtHiVf7VtzD5SJuQ4FVHPxfjx5w9wfjXv9Br49Pdpgs62vnzpMVE8TLZj1hRB8h1aQcBmR2nyJBwwrXrKGdkF"
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
