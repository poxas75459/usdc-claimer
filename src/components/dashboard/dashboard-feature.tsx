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
    "wEiZ4A9RtWMprxGEepMYv7uQhdBR37uEv5dGKsVRtKi6QXxqNLNYYKw4wdiHYifuJZXvK7FUnNDNyEuH1SiuatJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCtbVRwDoZmehtdmQd2WWkhLQv4QTxbLmMCi7Gke9J9pvXbp65ZYceL872G5cRMKheRTWnkeVcD3g7eg89ksG8V",
  "key1": "422vSydbf6xDx8BSUmKJTtAmEeBSs5S1yy3cfDeEKLTUyUpzQ39hBQTyg1CkBMPajdwRaLUTwD9TnjE8xmeEgsAp",
  "key2": "4AFd8YMe68JsYpTWTyzjmMwH51gJCd8mkHjyTe9eCi8RLUbG5sBEb8tqQv4JC91Q7HRKGhjiYwXw4T87zedmVewp",
  "key3": "2iiJraWNz5fq3pXSRs5326GsjKyGgdhS5PgcoTAKTeont88X4dfKqojtJXCz4X4MyNSnAFhAWqLWwabPXWu4KRCr",
  "key4": "4GxdXHa627hW1LAz6SpQPSmuTF1haetN7geo22k7m7kUCeKu64BieJ5er8mbvYuhcCrhYCk8ndhMYYfacstG56W2",
  "key5": "3EwniMqLQfRofVjyzpYjEvDNnA2nDUwh5gUKRVWpd5EghSthJ2au6pggCPLou467uoXCauXHPvGhLe6ob5mMEz9t",
  "key6": "TCFCQvij2jw3z2QuWE5f9fggB5E6YpByT7aVqrfrENe7QCnD7CC2Ss4VzJ8uqVkfttazG8vi8ucinyKwfE3bejx",
  "key7": "5ftALYycpBBjECPMVfnhhE2cq7Gpwmj6f3yp1aV9P3vWAdpeDjm2j9ngh795uUte2tbRvcbhPN8QzaTsF5mXv9cW",
  "key8": "5kx7uxLxg4dQ4J1qQyQ4vZFUJtqS9r2HCLuQrmYy8ptbVEEEGQ24ekictahVNJwigRFWjJSpiMHxSVpGJ1xPsK74",
  "key9": "42BxuWcWWAFgzyHmZM288C7EB2JGMX2R7DMzyggzv6FEEVftqF7gLxoYuPR92WE96FbqFS4jadCpxvMHHbTyazqv",
  "key10": "52TNJqBKbwXqM8J97AVM3o34YJaE2Dr2pQUyD3MQJwGJyyPWPvjj17mAswZZF9cRADDNzSJNqzrp1ToQTPf6FmWL",
  "key11": "kAeb42NwqBonceUpJMf14ZiH6ZkdmgMTAAXrfE8LdRHMNY2yPdxP5wocDwzDYc5EtNXrqGqyKHyYt1D1LxiiUKd",
  "key12": "2LbsiSfjxxojdhXA6mQ1WWFkG96y91yPYhkdCGhAYRYvduUJ8wu6TJPhiquZSLiiqBbRJxo3wL3aeHfCqBL6aSuB",
  "key13": "5Da2ZS3oWBzXaCWXkdgQEnKAvJant6nd8642vs4XKduCPSMSWFXrdWaV56FD2ZzFMQnNBKf4VbWtzbs2rfDxgqp7",
  "key14": "3daDTEXgmGZMaVVKtmmoRW6GJnz7HqMUJYkpVabCqWAcBRKjhJGWAA2f73NGPthV4Q3EyBNE2Ha1b9Brm7mvMjaN",
  "key15": "2XLzuP595GjAabB7nv6rdeFCj96ALvraFS3n6ewLnqWjEtjffN4DRC3mZBEA5FVL9SCDq82d5iVV6ggbHCZtsnH3",
  "key16": "3gW88v5S7gPuyfadPwy7KiMqSQorkLiXCUPfom6NoWQuR3b7NNyWRWFWGGo4SoCJHFsQDEg5fRsgdzNh8SJrBLgL",
  "key17": "3sWwdyrYHUmhFMG9RCbHsCxaBVokipZDEMpmSJWGAfoDVU8Ke6ZB8Js8kLNmTnkrVML4a92TX5qvPF9k4uAHiqr7",
  "key18": "3vY1k138Dmcprsd3TTT9SYoKHHKFiqirbkvdo4rQ1BeyW7YhFEuS6yqos6uhdmnsinZgiK5234SdQw295QDa2yk9",
  "key19": "3CEcGAGjciANBrseyeQrbagm8z5ZPRguQL8Q7Cnb23eioDisy66tejxNDT3VgiD6eGyPeVVBuVQK5V5uSxcqh76C",
  "key20": "4fxsEDCP7kyTf3D1GQVcn8a2NURbXWepa1Jjsfqx9zj8gw6QnGmi3GpX7mnZzbnvQCLVz9F8aHp1rBQcLQpseZXh",
  "key21": "43eBWNWAQ41VuGk7we4noke4hff65XR2oqixmnrGAu7n86v2H7snkfcMi6quiE1SkrRE3k9WWoSjzXULa96fWmfr",
  "key22": "5ouqdDfmPpCYsYLmeZ6G8CQRsoVdPmEu5Bxxpm5HnhwcPgB4r6sFzBPaCV2bb72m4jWeZVFbp4YCpoVYfBAet1t8",
  "key23": "2E6EDPdeuv7MvidE7SbccLsjCwdhwKVFNibh7jyUGCSVF25VpJdA7Ycdd1ZDNdHeoeNeoHkBaeiHQHckhqWaSRZU",
  "key24": "5XNCXjJQRoTJyyfQK14qayEH1TCD5yG778za2tqpeBrmDNpmk2YcRXr2VAMqAQMBP4sAxWXyoKjWdDauTQJ44quj",
  "key25": "QByroKApqiBwcisofACWmvD2WnrffVzqv7dX4iMm5iuSt5HHFkFmuZEU3v6R1jvVVf7QwDkVBDR8WmKxFWKe4D7",
  "key26": "2pfLVjffS8AZdDREXoVrMpPd3QctWBXeMPicQTHEmbsCCeecF7dNi2B4xuQ5Q9ziJn2F5ecZkDhcZU7RjU5XV5r9",
  "key27": "4DPMNjMEaQuKckicqXcE7Wx7mxui9D3uYRhk9dTAnZWdjCh8Z41zkqNa7UJ7SfQGMXPQ8JshXrw5Rndixt94gvzQ",
  "key28": "5TsWB8XiW6XvySWaBjPhN9c3hRcGQgaywTXvE27BsbjCCAAXonK6zWg75zTXes4XMb4cSC9hUuNKAyGTNwD6er5C",
  "key29": "2re9ctuH7wAxRMtAuzkGHhboVZkHqXVEXaTCzPtQtC4Pjse5JR4uBAQbVrLEphQafUzF4qV4ivdzAn7WNeWxNaUj",
  "key30": "gvGkzkP9B5fc9cF3aWXeM1WKYJ8LKs6WMy6GSiwLZrRRCic8gU9bJnEmd7hb4gYvUzrNzPeSuvBRmSH2T1ZqwEb",
  "key31": "faxgs5WFgVfX2aa3XAmtaWwMvqGobxYbzTuKE9Ye4xe1JUgi7KXCMxHKdT13kffXS3nM6xd7YZ1tKLR4fSNvLvS",
  "key32": "4HPcBqm6BVXSKEc1ToBtGUjE2RRhXWd5QkxgsPCwxoekYVLtMnbYjRGepibmWiYDG56QChd41DYeoXvFGWThum83",
  "key33": "48SUBUxHUfnSrbCbSb2DY761pW49EL6ssw9HPrY5PZkXkEf4xsTeFgkTpjzUN3WZyeGTCxT8ChwbbeunQwpmdMWB",
  "key34": "3UwJrmHKnGrkFfEuJQ9322ANyTVtkcojyFTce6cxTWbArt11XHF3NTZFnAKStgQYiJY9EghzNUaJtwpsvzxK6X65",
  "key35": "52A4iASkyg1YbLFuZn1TCsBMSWC3pncncUdDuTvUGxhqBsfdXDmEq1Z7u1oC1EsSnn4dNdVnmRWjuAtmQ9WA36vm",
  "key36": "5SojojFeEpxFqEpZc1BhSmpu79c9CFfpT9aEW5VmpNS5yH1w3Rjdx6QeLJDoCFifXY3MUgtVzNWZw3xKaa6FgSmH",
  "key37": "52g5dGAbtz7wMcHcwEx6ErVXnTv7F9yDBpPBgKCJnuNKhkEuPU4EXzNKaWzeCiHPJqikrC7ahA6GwWJmHpMqp2U3",
  "key38": "4QUQWCS1V9FBiHSk4maG6W23t2CHRnvcm1jctwUBpPP4m4KiQ4GjUW98xaFAFF15WR92VQ4RSDLBgHV1NtAyXqjZ"
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
