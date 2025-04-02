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
    "32JH31HdNDgMu58RX15hWV3xkLKRa1Lt3upya26s76Xhcd4TceoXgDjVeuymU9Nsr3qgnrP4uCvPJnm9jsGWqCNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664GGAYsq5UzhYBi2iWBU5jQn4wTHUr9XzvCDeY7K8h2aF5DT8D8rbXRfRa9okz12yidDruXQnjqXVLJkS4EM2UP",
  "key1": "dj5XUk3bN6ARuXbf7ZHoLqyFmVSBzgB3bCwSo3YBqD8gGaxCmrdDo6eXGbw3xdSfBPNKFdVeiSC1M6aVAtuqPXS",
  "key2": "5FFbrXXfm68WpMoWh5NEp3kfDWbruFNKcUTFZqAoM5bRQGDAe9kKX1HTqCUGuFz9iR3sB2k2G5cPYiUh4Ly8HuqH",
  "key3": "4MYXSChuvTHtGRzb2Lxo3hsDth9tGrSbDMqDPqMUzNyGJuT6t93jXRNQXDwCRFWbRsF3QTBjkDbdFY8UvfbcYkBP",
  "key4": "4bJcgcmtuh7Sxu3fEKgk4BdSHsYzLAKfP4zDWZ5J5QWZgjgRJeH8SVH8cX2wQztixBATVuV6iVW2Noqxm9ogJBUh",
  "key5": "4ETVKiZEcVshue24hjsEZ5yZHATA15mQuqA5p41UZctmwXb7sAbyynPi4TRZ3EdZvM6qjRSZj7NCvziC3K8KFqrE",
  "key6": "5BEqMEsP8czQGrYQ4xUbm43gects9oxkACEt7WTpyWagQkXrG8tn1cY9QDeDTr4AjagsSEbXinH6H6xm6743gy7C",
  "key7": "587oAohztYpyWh3BPW3potB46DvxMUodTFE2hiTuf5PE634dAMmn4EZpuekeNMH7bpCqZs8KP8Lou8Z8i4Vc4wn8",
  "key8": "5m5Rmz2sy41yWXUgzYt7AZ65QzkW6eqKMkTawAG7FhfvthF6K8VnCMWo6br8DUvF6kuXJgjeMJnpKdjiRYCAE2k7",
  "key9": "3CKtqXryVvRQqrrRZjQTc9WpzPX7gwqCtyQhuU6LnWRToSWBgaNjh3DkoyyrPk468VTArcWHkmgVqvmGMKjfwm9X",
  "key10": "3J6SCXtG2tJZLguG1x1x8YpS32q9gRFf5sYBHyw96K9chbBbahEdtzGBTY6rj9ht1rfMZRAxNRXs9NLUBgsY2fps",
  "key11": "4f4yEtT9MgTcBJ6Pk8GXTu4dPgnvm1SaYqQTxP6QVb7jj1eQe8riv26U6M3r5bJopkvphTGXXxUT9zUSZK8hvPHS",
  "key12": "5T8hBwipChZXhTrSqGK97Ngwey5gC4daDDtBkULDuhBjJcobmT8cbhHk9Hm22MEp74MFzy1KPsuayK9mHPa2WtyQ",
  "key13": "mxsSoLiC5u7SCTpjw6HBjqJbpJMF4fzWcWSCj23ZfNC55pwHSRxQKYAMFjhgiZwM6kNjC11h2xrTfD9qL5D1MnX",
  "key14": "2hqQB7X1yNAQLwr5KuLGzsNUjEDNXADoivy9npKJ9yThWucTp76EGpGDBGaUjkSr1ShJnxCEZk4oqZwgWGGGu4D9",
  "key15": "4GpFDNXdrHD6ZLUQhxA5HKySsmZaLS8GRsr9i7AmmwxN9aRKbPejauWccFBa5evTSxAq1AATfW8KxEANVvXQEhdn",
  "key16": "3ycJbwTwXRmqdtZ4aZeaoLVjqZnmXijA5BcDRuG6R4UMcnHHpxzuBvUBGuewmjPbkW4LDpVCPAW1zVH74L6JSabS",
  "key17": "2g7D8xbTyXjPfxGSEbo3QWM9ddgQiD689mB8QRpqCVqPt3sexbMYEbxG9J56SrzNXrLsSafZVgKE7tthJW8T8Rdo",
  "key18": "26ud56RcAXXz5mUKPVtBjjMz6cdLFX1qFji2HBscaQzEqMt28qJovhbwNVeeNVojaEM6F7LifdnGz8jKdUoFCZVK",
  "key19": "2bWWX9h6ug16u75FgLYFnwXEoFqUxuB9F5sPFBeiGPCvBCumz5WWAV1hH1SHP7ZLzv82mHC3FPiXxjsSUsqBNPn3",
  "key20": "2FAn9psyjZJsZjk9o3eoKPhPrKRPF3kGWApcKP3CpD7ZFUUcWxrNn8oJkkFz1G4kUo67EkTKEzDqXq5Ye2BKE6NQ",
  "key21": "5Trz92aemuNEArj5T1ijMr4YdfzoLDAC7JmrX9EiM1JD3wKbvaEy9KWShPbqYo29nJFPCeeoMNzDS5F3wtQtc8fa",
  "key22": "4z43wLt8skh9DCShta5iUx75AYXhhRSCDnGafBn9PpzH3zp8E1KBJBJnyidz7wdgjBPX3e9z7JRBFjmtf1NDpFWh",
  "key23": "61MUEDQE1198h9HTmRYRpzfaj67CXzagU5aPRu6cyoDVnxS8Btdi7gksNgReVkZZcuZSxBk2ebx92J6VEx2uF1Gs",
  "key24": "3GAAuKK2F2MQqPkyWWbZdj6WnXL4PJB1irbN52PwfRRzcdzbo5HvEjPwK7BMYy8ekYELGdtSDsx9WG2QeGheov2w",
  "key25": "3oJ4JNLJgRm86CMM74BcXXACEnXSea9eyEmYfkTsJpZWxGim6o8w6RD5TQzknac2jRN3kaZpD2eurmQgBERMmoJT",
  "key26": "5MJ13gBrf7CkgkyMfvwxtDC1iHpVrmHL3QvKzgURZQAL3qFhptzGXSxn7AeNmaN9RKBjyRDMxL34GUGVxurpbDzV",
  "key27": "3maGqnEbMowHEhu7LThMZJEhY6ZwojfNbWkpfzEfjpuQ85DdgFksoWNjSYrxoMF4WtuLYBsKjQtzoSHVoDsATvQc",
  "key28": "hSUXpvFfCau8KDUxB8XDhrkMemXMHrrCx5LLDg84HuauPFMNJJu5qY83Z55zab48Y19Nz27KF22gTLPGYk5bQLr",
  "key29": "3XicZsutSfjBbPJhYz4yr1prE5iGHSxfQjaLj7VmTsxfHT3sMqmWEjFjtEHSZZhc8K7TNZeEs9fjjFPdjAQc7u6D",
  "key30": "UhdXEPkezDzRUtmLs17S6N9dWw7Vp5Wib3TmnS6msUynBPdNUeiaB1RAds7NsnXQdGJFu4hqGfQoBvxYnUBTY9Y",
  "key31": "2kqUniGviPYJWNEnojcJ9erM8eLWywrA5ckmZt69iFMadbQDoLX1uNzPzQmL2f7z7kf8fev3a6rheuhgg6UYBhsA",
  "key32": "27uGBZA8bPxWndGosSLr81WkVU3yKxK5rrxBwe87TrZ9ToeTTgdfefoQErUB1sREta6BRFEeKeC2CkyKVh4zvumk",
  "key33": "6445w3jmWjn44Dqf8mZU8g1yvjuXra9aCeUoswGGrh7wt2tDmKJbT2zAELBnDWs6v2vYZ9uHppfL68D7ppdniwg3",
  "key34": "64acN59UEunhANWsiXX83tjwoai56BJXLtXQvmAdarj1bPjEdsoMTAGNRy6excoLNcmGbsoekYHrJpJxVHFmRzT",
  "key35": "tiiafkPPPar6w2eY4LXTDS6VcUJ6NPuSHRpmtgge2fWSyz7h1LUSkjLoD74pS1zvfPyYuL5KcybTJLLJbYNKPcv",
  "key36": "59gKq4SSRjNUDd7MF7GXCzL4cSfLoexcW6wg93DWjnGKGPXKKGKBSKr3CzR8dybn1TNPXSGDrEQEFNjQnEVFGJcQ",
  "key37": "hDXUZny6f5ga9MUxbMveeyaou2A4C5YKe7U6fwj8aP9L9cXtip1rRE5SHjGFKW3e59k3CK4Q9Aa5ntvjDzCW1Km",
  "key38": "4u1S8vaF8TfpEd8bthwZPPyJsvhJuJJkSiiPXwKeNKijUhyHJtvXM6XT6mWZ6715oxsrPyrs93QK25g3V4pehoym",
  "key39": "3vkGp81jFWNce92pANUrYfYh2DVKwHQSDpTt3QwKcz1iUdLk52NyPwUsgziL1rosgvqVZHptYEugfyLyDaRgs9cq"
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
