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
    "637JLsKu3psdSevqqZ3Uda76nkQL3jnKAX6LAeHQajwf87T3AdfKxxVJNxQhK7WoUvPFZ9mWMpm5By9tn26nY9Df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1rfZX1BZMmQZYLc8hVcCi5bxB1Zrspcj3aCkBWNPAn22meQbvCf2ixo9T4sRBuYJZ8wjbp8c4uocPmERtVAzR2",
  "key1": "2HuzYfSrj8qDxMLaFTggzYBbZUpc19QoMZPsVcusB7mGFb6xjEc1Rn8wnSPLRsU9vpraZfqgPtinFeGY6kRhm7tq",
  "key2": "2g5Rv6Xj5RURYx7MsAnyjj9jLVXnqYVzH7P6ecUKJbrE4q8fXKx7Qa3vPxdGASMNJs7P8vDU3AMaehfxBNnKFbcC",
  "key3": "495fbWrMeYHiNUBVrnQuXLRrdTKCPL7Q6NUUQPhfiri7bQxeP397FwfZKGt74Pisc9QaQebBYBFv6JgcUCZZQDVr",
  "key4": "X9iLsTRwav5vHH7NQ6NZFntBfDYydtkFkcbwBNKsbHbVbb22N1uageqDbuzYNjowJBzgFyBMTrqEdHyXJACt1xU",
  "key5": "3zJgDhC6pvKtUgY4cW5Npj2hrDxPoGsXmbhbgj5nYj8WtnhbAxDhLxEHeVoJbxxCjwgN1wL6AezhFzxMhUYo1ds6",
  "key6": "2SbS6ipvXGg2XfcyUC4HxWproRax4ymvTc1WY8ZbmewyZrqTCJphSQGaePPVVsN9AvDiUrSXBey5bpXAqN4oMAa6",
  "key7": "45GpiU1KLWyLEKU5ZZErF6pYAhWAvFBfP9QAoXiYa55uF2xqym3kHqEftDnxUCmoBXriC1i41FLxnDQhZRkaB5vy",
  "key8": "4JZhZMTVcPG9B57f3UHtL5HLVV73pWh2gKWTFsZiR8gi5C5DGJKQqYB86F7zqK2yBJchQkyQdnKMtFeHQbEN4Nmm",
  "key9": "2uwoW3YMQ5zqBL1annf7WfxezVvembzhbPbxUiKquhR4VC8PrbnuC4HBn9oEixoNHimMwvsuH4ZzQ2XuuNfrSYor",
  "key10": "2mFEDDp7mbtDK8NmcNbzViy39rm57qMXBHsqst8FB8MDLYsqJzQwfA8xvqexf63kDAdd19h92fdWbpoTk6veZpUJ",
  "key11": "mAGZWjLKnwabfJFdJZfYaYYVgcCY58X2uiXNR7CQQ1NKEbXUuNLqTjkxMbamiAJKx3UCR9F4Jb3o9j1LBgk9PCr",
  "key12": "4Y5kNShSmKQR9XqXH5KWJjnAfzgbeQfEL9XFHPn3EZLxHgSxw3sg3hd3zyXterSYcmDQRw8xMmDfHvXd8N9EqEpK",
  "key13": "mj7VBik2jH79W1PQGF6oRhZkFagpRMCVtZ8K6knzXJXYLFHNZMtvRhLdzY7KZmbHi5Lt1E6KdkHW9Ck1fhohJTk",
  "key14": "5CK2UvoRPDGi9Jo5npLatTHZjQ9aVEn7Voi6j5r2m6rc4SfeTDAGdX7h8QcDS4pEBEH6KQ3ZdhvZWQGVKSDaKDZj",
  "key15": "3W5gqbXk8uvpEx55NjGsRtNHMHFttTHAXSybyUcyGt7BxECw6g77tUX3osSiYkcExhC8r2zUDhtYnrfmi9o8Wfte",
  "key16": "3USE4kuo7EKVwHmFUADHSctHUioSft9rMDSgwAbsJp3MEcUvBMYnDD1jo1mDJrDDn6GKeKbetcXbWs5DENYHrFZu",
  "key17": "3Xv3wWcRB9DgTm9o3Ea7sXxCwFmqML8cGQjvJjkREBBHq1y6XKbjDvZ3hTBnNp8ZM7bzS3Ry1NW5e3KT9RwffP8Q",
  "key18": "au2pfLjx5o3C4wQFBqWFHzCf3t2vwvzX2espqZuozoWMoCukJnAj71AVDgYEwcvsATKA28QrYs4eVsuqQDgGE3t",
  "key19": "3dbb6nx5fzrXcMYPnCFhsMExdNxgwH1NfFNNRWyZq1CyuKJXZyvLeWZjyT1bJTm8jJzbvWnU2QwFzTmbjMwz71zo",
  "key20": "5pfJtfNbLgg1gu7JSm8NV86HKCs8q6X7CLzyybv19DgjSPWhNrsPM4ErQWeMEKk3xCTPyZsMji6zNuUnaw3vuGHk",
  "key21": "4he964cDKFSA1Ru1J2kx79K3gWRcBznRRkdvvRNuCG7qtY25bxcQ4mQNWqJ8Ce2SidBoY9jvJbDyso9e7pmozpJB",
  "key22": "3FUn1GZ2aEnn9Jpb7FQBQAx5iCtQEFj2LcG1vzpsWxK8gsEzQxLQh3A2HAjTnHveBwSu9baMLPvhxfaqedhsXa9u",
  "key23": "4T6uS49tnto14vckRbXPZX7NxepiA3XZ5htTmLzfj87X4b5WZ8NhDjcA7m1YFXgMKBfRVytymyEJDWbwmLdKtQ9J",
  "key24": "5mbqougiooJjiXwafpXpwfMHUGj5dYmKJLMR3HeX7vGsW6tPnKnHn1hZKELrxnv3E378Qphy1WNoeBEyq3SQZyUQ",
  "key25": "3MeUywHAFpGWXN82Tb7VkeMq5b9tWxkekbo5vDExmhczejas39z13sedqy2nns5UxT4L1ez8qbcegotfHEw8XiWJ",
  "key26": "keTJ3cCVLoAm7t77CF2GnYx1gVvP1zzLuyZULKXq7ZvkFwWDKy2KHpVkzX2gCrCES3Kn92p3e6LFU5FzkE2u2CQ",
  "key27": "3W9uSao96CvWHqwQVVJLvL7jFg4gytnS5XZqE6E8rMTv8AQSPPpiQWFVKwp1473tRqxTxstFjQLU3w37JGdAzust",
  "key28": "DCym8HAwj1gHmFaHCyFR6EadVW8GF7hbq63RiToKkNh7LQpjprFL7kfuf647vSVA8VbnvRdf4EpfENiVj2mQoqB",
  "key29": "2iXJHqADHkNth6hSGep2DyLFN46vD27ye68LHeqDTEq2TU5x3hKrzyRFBaHVNoJLUugDA9P2575WEbBCnvZ5Kd9Z",
  "key30": "5ASjGs9spfiaiiXZ8wukLGV8FijMiMB6XppKDp1YSsvJ6vd3YMDgHrAwqGQa1923VjQ7zVYTTrqSt83Vu3oXi6Co",
  "key31": "5TnNCM9UZ53pJe9H29V5bH9PGJFyUetRDoznF9tUxU6zYQNfV7AAqLKS9u1NUYPLtmnqPdifQpZtJetQ6UY6Vfru",
  "key32": "5w2xWcFcaTM3DkTEjrwbpYFjrY2JhA8qrKBCN6Dgc1yQq3pZS3WQCAGdEd1GJBRquL1YWX85TfV36z4cQTCe7nWq",
  "key33": "5K438D8PrzpuRE3fgybmVsEFyp1QmYDnJnuW16gMFHP9pgpjwb1acZBLLmv323WwgoUyz46Nda7jeEdzadT19JNZ",
  "key34": "4B8ksf19rS1phV3qDmwQbjnctLvSRrcCf93Vr9okbGXu67HisSCgQgM4XTGVERiEQhZD5nFvZjduNoUvxytU6Kx2",
  "key35": "4stzWdZ3RfLX3f991KJd5Azij4eMnzrpqbfrCFBoQHWJvHGVNL9sKjNFVBRL5yfRLqxwkc5oy4L74jRC9qGrvSUw",
  "key36": "4Ztevqeyp6HitB9NDRgwk3Kt1tLAHbkmvHvfh9c9KiJg5vFqoDDZeNCVQXSckyiw3b1bbXR1P1rAc6Rg5VCtz72",
  "key37": "4A4w4JWKC6hLZnRYhe9uhKvr4tc4xWguJuQgRLei5aocsR358Vz1watT1SFEM6bYjeeDbeBFohnZQWxQ7L9pp45c",
  "key38": "5rXGmYHizz5MbgR6H1nstAF6csHoJVxoACPSffazxgi8g4jQd6E7nHMBd7TFuY3aCutVdSAnouTfiNsLw1YHyCAk",
  "key39": "5riZzsPCJUz7ppATSbFWWCKoammWh5mG82pV1jMDxsBdrRcV2bFZCUL4xwvcjHRH3NDwHBiyjP9Buwnx942z131j",
  "key40": "2oaWT7HcaUkV6cJmtXww7FKCiHnezNMyEs9kTSaZRZz41Uyn1PZchan7n6s2VejJe2p9Zcbn1oCvYugyyppaqKE7"
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
