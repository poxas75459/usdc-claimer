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
    "4xiBefpnvc9VSRPQxwabhNDKsYik9x5ZucyFaQjQzvv4An4mcHiZmQW8ZrD7xWUzQZJ1UJwC3dVeUJArNnZcc8nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NiFTVqWQF5khAnvcuAdodCBg4sv1Dgo7g3AtgKk3tVHfapZAJNBTjvwTdmYjvYzCqba3gsBRyd6QjjkNSoLENEy",
  "key1": "YYeSdG6aBGf2htjhF5F3Sgv5fxCbvWAdZzduLrz8aTLRre3wHCJW3BmWaznqQMgfb8bgyb55U2CsNzMbdN9JdYg",
  "key2": "5MvN4pCMMSuZ4xK72ppe11F1Rw6mXG9FJGvZco4xFocgemEre6u9Y6iNAzqgMvRvHyfY4NG6C5muaeuc6HXrm5Rn",
  "key3": "2kzZti12hTm67WaJLhepLwn4HytHNLcRF2yt3t4DXuCbvcDDKqYEGfBcY4G7dLesKau4DFeA12URV19kepzD4gC5",
  "key4": "67VNYuWw39LJhhgBEPGEfwt2BTDGTHWDnTkx8EhC3uQXoCjajtToxgraBh3oh8HbNmSN8vBXftGConYyCtuFAWPv",
  "key5": "V5CPvrL3LUjf5dkzPcWfpdU5dQNqpZiTwRwhHysS4qVhxnV5LFR1bjkkLqkzyrd6s8cQi7QhznNXMtkzB3Z1XYY",
  "key6": "21thWhbjHGcaHWWMcJMUzpzGwHYkJfNqZCp3D3FV466ZYyibezGHWHH87TFt2BBSyhtmSbLEdWrB16XZJ7qftNQU",
  "key7": "2hxRHvqhBSXJPwfPNVcFBefyDcmQpp3pqyLrGPXEQaPregeHHmEnpHyQxFNft7WQjYMyWZJSHP98rcPEmV3j3Hpr",
  "key8": "4JKvQVKSymXhyM2XUpqPHKeUDvvjLPM8xzC317XfYqhePJSnXq6kpJpsTJcnqmhudbUE2c77gKkdASWVehSLeMgo",
  "key9": "4sez1jXAfcUeVpmE5oiJPmxBVR1A4Zkac3eXKghBBRUeB7hNpiVKHFgdbLvCMrkcCMiZqXs31dWLMZDqjE6VoVXX",
  "key10": "nMXkE4Dy6AU6AKJUMgMP8YQfF8Mf37bqCWE3xNWFdnnMheVDDSf3K5qTgbj6riAMagycJEEWbxDfvARukE7kYg9",
  "key11": "yjRi741hAFxNVtQ6Lc355Jv2ANGFEwvXjD8dzswsw1cwUh8wULpEFbv59uHiUku7mpHopPGTBSoEJiV8bC8iPJZ",
  "key12": "2ox8S5UR72rpkD42RHaUHcnaLec7MkiUuoEBF8oTYngcRdbtBCtUdYLZvTqr5MjRi8zpAKxzS1gECcJEy1U2f22R",
  "key13": "37PuppRAScNEtLk6cb2TasGcUzjZcAFwtfVY7cyHYx6KNA1At8YhaLTir6UmRxL8pUs8MvKemcUVgyMUgmadPN3X",
  "key14": "21SGUwL8KxS2xz3hALWK73h5XmfTAmexqHqYgMdHMYcG4nC5YjDePGamtBDErKVKDYtCyJDhtWHbv2EW3WEZH49C",
  "key15": "5yxQ5iB4vAX3aPefboY9y5aNvp69b6vnARcXo6VfJSxNkD4fkDBM8pZYNFBM72fySkpZYTQcpw78maheKw5NUoGL",
  "key16": "5mHSMpxcdvMTBdGK2wb7a2gKVhCj4MLy3FV5cw29hdowSPsWQHVTGmakWbnYkEj2kVreCtAygnubhpdfzBT6QqQX",
  "key17": "5e1G1wMWEecNTWkJvWcu9DiifqrwbWfbipN2zUuFapYK1qa2M5arGbHprZwDgHR2XSzyomvc2pXD1tzfV2Q4ByQ4",
  "key18": "JhhLeZLbu7hwSmYhseh1rHtD5capvQrEbEgG15GkY3QpuEcTyCtxKwhr1y9Ys9xBsK8Jsf3G32DWSZwfhEihHyE",
  "key19": "trLN3v7WweHkQJrqvmaxBtk896ZAXYniSxHEBrcZT5gYfhjpYNYN6u7spEd49SHDL2htfyUqDEJSTtdeJPZrSTH",
  "key20": "2ndMgxfEdfUc59hFrcNHmmfwjjdyX9MYDsMMfyfDEy4TMn35aEK9ecz8KqAXDdJbLcY2yiUjKjv3T6GA766hrwyR",
  "key21": "V7pfVkXaHfNqRYxAgq8ZwZRSspsDVp7j54ujo7WdzR6mrAQavJ3zBU5bMG8MwH9tyE93TRhdHHWDNN3JZ1ujbdt",
  "key22": "4JADfqgtFkgTDpiaPTRheEUeRwg8fv982r6TG9qhjdtYztTmXroMmRFBWpLTZ8cDmFoPtEGNxxm9P54YJmhCST4M",
  "key23": "3ofwoSoDfq8TFTDWMbQeXguSefxetZ947kEqyiMYHP1SquezBZPF2fHKbYX6eo2Rgrfd8Z8HtmWrMwEBvjVJxBwc",
  "key24": "4yAP7BTKq3vUxqan78jZcCbUCWe84EkVCfFNi2gmQ6LTKfB9v7PhEeBC57yMkTkgApsWLeojRhMdNxxuRtW3hJsM",
  "key25": "2HFwWqcxK7p2y6Qo4uCp9x15ATCG7REif8FZ3fVAqWjHht58n4s27CDVC8rWwgj52hqxMuNvJ23gdaUs71W1oNQx",
  "key26": "3KTzHaVy8AeJHN7yCxmBUs7xaKGxPUP99hsP3fJMpkQxnyA5MiXiKMbE1bBKpJRn6hBv14rxsDHFwvSghPpmchvY",
  "key27": "4QbRC6HfghmwyX7AeGsUR4d9XvLhoo55nPCf9m3vh5LhYActaH9PkjZgtu1Vv3vpt2nHv5c3mrRUjqzYqSfCPFnN",
  "key28": "3NQBVYr6Nb8eAUqH4cnX7XmgfQ5vJZ9EM8f9RzvjoQSBztrpz5HemmacLmXZnAWVZxL8QvLhfHCMMwygiU2ryhm1",
  "key29": "2rT94AXfBb93dt1EouDzYdrZHnnM1w9sykyZmHU2dm9VTM1F11JL4JJiLwcWVAKMsATSd1yW2MUxE9GcJmWeCKmz",
  "key30": "37RtpEZEXeWh8DXQe6WDAuzJ2FC34vrpuBpEc5EchcNxn6HeGhDx88NHzeHsQXZWEYau2m6khtTqJZ1AW9Qbt7aa",
  "key31": "4PRuDDGAukEDqCeBPBCUqJfy1J6k9YW5SMf5aiqJvuvp5Jwaf1UZidzx9TJNH2xy16E5dmdW38cq6mUNiGiYbc1e",
  "key32": "TFLerfyMQQupLZYeBcdRM53dkJRfrK8Ybm4p3DfELWGB3km2nmpYfsq56PNfrZ7r5U91SKb2pWav5nxAg9inhYu",
  "key33": "5MpUBPGrhygbXPccE913BFSnFLdMZa8j1m1ohn9X7pieRUnEWNf4puYpfd7mm5xNjdUs2Rnn8sGCgFpoX9ECS5Ag",
  "key34": "4qxFsm8RQvHxVi8exF42naRMdeB7uPqW7bhQ4CxZj38NVifdgsR7Km5NKyMQ1cd9eSTiGTfwgNVSy5B1Yy4HpcSe",
  "key35": "2f8bR4EduJLZo7Y914pUVSiSguFgyNxSMZMYTRNhtHPDKnGqcgBLYYPiZ3A1UJw9KUj6UKhHsNqTHNtkKzU8RzUn",
  "key36": "5Jxn7MUdQKdqNEfQvBXPHrZPAwCRFHE9k3dP8LcKdnUv5bmWStLrKfy6W6ZzZueHTrKnis6nyRWZf6rLsQ2ir6sP",
  "key37": "3EGsbmM3VfMtUZuimydCrbEKX7ALJ7qgdmpTXge9f3nEeK1YoHChWbcxuCyz3WDsdi49w465HLsgahWxHYw3Lwik",
  "key38": "562oTQUaZ6qf7Lkz92mVoYzAhmEaWqyLoHfqYsrkyjqvQK9rKFYEn7YwV3BEQNH47Gp7uB5PEexWNWjSrEpsi3Tg"
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
