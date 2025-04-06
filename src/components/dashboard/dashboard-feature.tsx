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
    "5sfd3swrkHG5dgGD3874SEAGCcyRiFh5e4eb1QVNJKiX3yUnkThsRaV5MLdged17FKRcZpcZ93PQcohm2ThY7h7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSUfkrVJJ4skKHvrN27jAF1o8etfDefYdZQatfHQsVHVh7QYpSgadMEmDSrGttsBrioN3BzFKpmxgCV9cUdehwr",
  "key1": "4THx1b98uX8qBL3rUmFfPWvGuUAncYSXZNxN7WTMviSupN2pqfhwxoSdbeYavNotb51wMMFKvuwo6pQ1Dh11Taav",
  "key2": "2HusPnGzEJ9Dx13zeW1uhiabRmNrCg6t9jHZ3nfWAJxF5YxaEkVtgvEqskfdssi7yM9d95MStdXRNr5siSGYB9Sf",
  "key3": "3xFzmv9eHmrJhmtMgscjsSeZwtzsRkVVm3oc1ZdyVrVpkrrguRqzx1jSEsRvwjxuTNvhEsAcQdmJbea141yUbfD4",
  "key4": "5xAAAuQ2pRs1E2sJ9ytW9FnH4XH1bC2W5egH3Qz4aizZ3HKYtxqKV738sUcW62Da7hP4ujwsFnEWKMLqVySeGQFs",
  "key5": "669o4Vde4jn2eDLyFfaV9xoQ28epm8ncvtykhhG8RhTRgdbiLkaknU4pw7tTpCLXvo9QzRzUN19v7wvW3mde1pDB",
  "key6": "rMxe3S15KP3gqe67iJzcnZX6wty6C4cjrH2GpoPqA2CnUjoFRBmTJhRhrvKcWBFP8XkVibKXzbMNX9FDQZ2U57S",
  "key7": "qV8FQZiSfBJDzUXDRkznahyskGedQ5sBETMvvZrPwg1etUh9XtDYY7tpRL7uhZp46n6W1XzeWWtA9cHfnYk7P3U",
  "key8": "5jEimKPsscwhiknYQuoAAMfYderkTQc88zQaEyqpREYAyr89ViR9Axj2stXxgA5P5kHqzqmCVKbvBJsDFU9hV3xL",
  "key9": "29ESmb5SysywnDTmS7dzwvFngSUHR8CsWARtvWnJ69ncNiNhhU9ZiVXGeEyf6Fmi4vf5Avj2Q9Kkeq19LuE4w7Cr",
  "key10": "5h35x2bHkPBNEQsmTrfreanhpXGJX7gTC2N1xEtVjLiZFzeYiBWbL1XqwFWEEvvpyWRpXzFgC1AZDBBkRkAoACGa",
  "key11": "4ZUEDUEcHywZJZCLENakdQfNCwkZvnuVWqWzN33v77xzQtdiiV4dprRJkXexCurWJ3kqLXJcWwVbcqcKepJvRkbm",
  "key12": "5FtrgDai8BvP4ZHfS2rzU6jE115BJCL9huLr7YbsL2PbKtihWxHqbTrFZSK5Bpvsu4TgtjmLFB3CVghuiGVeoU97",
  "key13": "2GGGoxck9FnAATBwDDUs6VqczNs3MBykdzK2Vq6rX1ETVNMGCvit6WfQ7ka8j47nqedRtoxYrR9T6upN1dSz9S8j",
  "key14": "3at6MbV77dTPPLFjs6rBZjAbBtn6PqmPkEpxQJgAxZKbFxfwWsXv7E1BRKFZCwXX9XYptD83YRFoTKxKjHRucgbD",
  "key15": "57ACtJnbhvDqPrjC1NJGDo3ALU1sJ8GUZCLq5VkJ9kVNwSpJK5PHhFCctEf67kmPYxreHj5DbMMgKCR9WGEYaqtR",
  "key16": "4Bj17gnhgd1CntWNrHvt9Sh7eMvBXErwqNpvw6UjXyRGqRczs7edn53TAumCBzxAJhvRo6XZhVC8oe7UXYDJ8FWZ",
  "key17": "55rzNPViVuGEEmncKzDrRKeozpB52TAztoTPsYpX1xrL9ZQ7X5koWpuJtdpBnmkjBW3PA24NfSiAVaq2EStcJywY",
  "key18": "LEpd7TLrzrBaQPghEPFP8y8oDecSRJ2wKXPutE3UfdtXraGH9eGKiX2zBApYyhGf71pAM9BPjm7rq2NUSQgSkew",
  "key19": "32bb79Xndekkimp37DfJPdTHa254aCE8Yq1MerDkjRJ9inVrMUCTAEsbuAi5SHXuZqz2ftNt6S6vbAhj7qTzqcB2",
  "key20": "3KGextBBjqhg3voeNp3t5LVJEQ76matEa9uZUDUxHgYRFhh43h1XLWZfAf5cGv3H62ACTvfhGU6pSgduS1Y9Wtxf",
  "key21": "3V3WW7vUH7NnMVkVV7zJPmkKgmHv3VzWkgf2w6sjf9GiaEBYoPRgYVQkMEGBvfeXbLewoZpCZ6qEi7XScAfL4Lpa",
  "key22": "5kx6FmAq97PaQt4v7AxoYQ4PvapMp8fDEGdFKc42XLHG6tqM6eECiRaaUzXLv1n47mgMhcBn7csXrAikcJimVWgB",
  "key23": "hT7oMB2J6TWwCriQnfGhZzyop6Z3DEbWhQqxZEj2x9AtbBZ6m98z7CskL55DHo2B7msHtBLUH5mSEfEPDXGKAeS",
  "key24": "3ePbQTUcdaiAJqeg63hyXL1W567s2APhcG5sDg8cs5mSgas7qSTEdJrzxr1PQh5heCvttDBAoNb2C3cVGnGCASZe",
  "key25": "5FQLUnWQzVHzrQWqR1Z2E54tqZgFqyzi2TqFfybtkHBdjZt2P2b6bmizt6gG5Avn29dRZSmjTCop2MjeGLNwPYqh",
  "key26": "2Sp1nBvvWmNwBUdx1XhwnkM2UUWMt8VUT8a3WZ7jQ2YgRbXY2NywjqP4EFDHkXg7ZEhVfd7aUi8xnpJ8D61MET9V",
  "key27": "5vfHKqZiEduF9ixJwtibyhhVcRMfQFZqvJGUb3L1rRDVa2coHRreU4pmALvdTzPWpc8jrz5F2yNZCAQyQQJksTY3",
  "key28": "4ZizRyXxCxrD8xQ98mu4kC57bsjBvwgUZSmnBE5eR4xJVdCAUBMhqTa8wgya1AJXNWQHxVUQtuGEQScoaJo8nmKe",
  "key29": "2xUgabRcwHctzSpNCkBDuBkerwkGhcKTaNfhn9rUEbxLmTrduUaYXyCbpGArfGhQ4Us2qBGqbmhDKsAuYGy14Xu2",
  "key30": "2TQspYbTfv4tS3dFZ52vhPHdHxuQz8R2EShm7SAy2DLHGy8uFLGN7GNTy2xxBLEThWpazqGafwQ56R2Ami8x7XzU",
  "key31": "3JtPLLMduzJQjtE3X1ekqc2idagKMpEeKGgwqgweDLCTn7R7kDUrFZPv86G3gXcxToDfhJdLuw6Biz7zcKyKhLUG",
  "key32": "4wrcL8Q78TMfVrdsrpv2afB8emzw5qWz2dE19fyXhpbxoRXPTVpYsXSbbLnj3dh46nwfVyitdQov1RCwrBAQHaz7",
  "key33": "Ky2uAk19hLSDmA2AWpTiQe3HknzTd4uEcMWSqrzR959CfnC7811NYwz5kBxvMnFbSmpMiwxXapLczPbDdL8d8Wx",
  "key34": "4sVxc9Da5epBtxF84iTdjhFqfc3aduGW36nAXjShh9FaEbWmd4HnghGB9aYQiBMSaSXk81zmHR5ha3y87CJKToq",
  "key35": "cmKR6GeA9cvYPm5YKtrHLDe1cQBcW1qWk9hSodCTSg5th19cRkyiWegaHxG9CEfJMzn6zGpQFkGCukA97eDxeTq",
  "key36": "23nULJ7uLqbQxdgqtr3nXVqNmzkZW4TWXrJT8Fg2sWmgcGsdAwmw1WqfEeaPqR7rixNp7Q1gCpUdX7WVCtqcCBHW",
  "key37": "2K2KY4NfWnu8W7QXJU8zFFTzXKBYk1R3gUuhV1W99ko2rBHPLgYFjaNCvESiSAv9yocpf1QVGnXa6nHKGrme1QPv",
  "key38": "39spuHyYsZJnKnMcL5CDYHPJrNVxHU3nm2X4mnnPSA2ZFPgSMzxWSZc2aNnqDK1kGaU7NNujXrfbyaRQXYTcRP2J",
  "key39": "4B7FCp6dPk4mxXZU5RXwVvWcX9j5UFEPrw7GboQscaZZPGcAAvEnkX4vYAcfQJfGUGz2nEb1KJuzXGgiTzqrhaxx",
  "key40": "551pwWTAZykTxesbBq7ubK5hH1Cs5ZN9kmao1bafqrvgWEXXgHgNovTmVSsxdK34wEKBqzKFgPNqDNySHShTGkNH",
  "key41": "ZhRywZvQonqumjYoRQHxo26NZ2yTSqptT7mfoViCCVEjUFnUgLaAtKDMd9BKyRRs2rEiVotAMSagwG77U6qbG8s",
  "key42": "2fbiY7QRoY4HU8PeJpowBhfT5ScoKBVkDa77d3E7SKQjgdfi2qEHBoeZNWcDpUwU4Y32HuVGebrg5qFjU4SroTdH"
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
