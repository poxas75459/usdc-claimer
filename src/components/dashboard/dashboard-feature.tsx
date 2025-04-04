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
    "d7PQGWBeGLEHyj5596UpQk9AEg5zswbyhge4YQbX73fYa1vgqeKoXsd9VQDMwgSbufh3RZCHiwXWJXr6uS6BuD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QA1oHwtoifNahebdLaEAUCGkMYiYDBMFM2gWbTXh3FT9HjjK99C8LuJ6QVb2Y7uc7yFpvLpAoFAxGPHLFcxXcHu",
  "key1": "2hVH3CxDiNdV8squ8HVHUq57HH4RtNCZmw1axj57eCP26dStCbec4pJbeJ1mir2R7pkx5jwqT8oJJyqXJi2GGXtW",
  "key2": "5wbLsj7EsdboGKcbTDz2nVdatx6wL71y2Tk19LJ658ZanxSz2L7V8bugeqTepNYp27FDc5ciC1tkCmvfzEwTiYhK",
  "key3": "3sH9imGFyDukannq8MfpBv46MH1hQzGdjQZJJiP7yqVt7pV3JcXtpBUfuxbUxy9rnBaJNUgycG2TgYGNvjzLdGWN",
  "key4": "56o7VSfGSVfMbrddcRB5exBb4zuPfA3ocbGCsdwhWooXgSY5cNRgQrLxH291UXRDUf75En6FoeFXqjLqgYTwV8DF",
  "key5": "5r96bXJ3QcaVUbDcyznxjBHzMCCXmTXWPYGbjS6KyZNQR4bKfb5ppjb4p7YiiwjRVtJQ5jMSyMo1KyWFbjWZN9b",
  "key6": "2XBj8c3uafCeVrXj4Gr1uDh5g9qBaBLnkgFH727vbgjNv5Nxk5PzrNP2w65n4YyZXmk8SPaFwtbRLSGA5REdDJsQ",
  "key7": "8hhW4jpVvcuKgC8vtPYT648QkNTwHnuy2iKvbia28iNqiph7uPsai3jsnDboxJuH7D9Cz3HBTxtQt77JXAuggwk",
  "key8": "tkdmo1EGi6PBAyrt8hRcD48Gc5tKpVdEgNRmeig39vKt5mL8ksRcLR8G3UTp5EQb5j9uZUfkZDmoHhHGw7XW2Y2",
  "key9": "2ruT9zcnBar5CxvbfiUqCiid4KyqPrMNQMbyBedHh7xURjKnmJmJj4rpgTXojbWXMjsJLRTVhvbwsXVL2XLf64qc",
  "key10": "ahJbgxEeAD4FZUKZ6DMHwJVqBGBefTAsZ4Vyi6BYvPeZWCfifvyTWtGmFBy5wh2KKwhFEw9FiuHDh8gkKAVhhvM",
  "key11": "RyBkZa6b5Hqyit9ZNWNJdcCJHjon4DUXovvTyozfXDCtFZvt7dAUaL3ketyHWCmyiUpbZMuQ8SgQkepmviEZtED",
  "key12": "5QJW6xDTkdUrVA68Jt5qZFB2DoUhWzbxXU1JTfQxrAt8gHCfUsHhtBA5nNgNa46PoedgjALR7KRbMyaCkHAuneZm",
  "key13": "5jmu6w9RdmDbrivnc71ucsEPoCNyDRHNhynJRxg5fUejWjrSDS4JQkraDXXnRfGchBjeyqvx2Hqp2iSJTUuKdyxN",
  "key14": "4f6XH83xxTn1zEJ54VQXb3nTnCgJTfizzj4WjpdZ4fSbucseeQ4fshkV2eNNrcsAz9Xq9NGDZgD59MutsHF76eWX",
  "key15": "57XkW5e4dKgPRSxi7Q9RZD7xXqhSdpF2Vv5N7XEW4rTgPYfE4iRxSunDEw9FFTMjFrjnvfmdKv9d6Ec598BqutDT",
  "key16": "5FGYrmNTycGojZBGpkFryUvCUoKTPUyLq6FCfYjFzpGVRDZXTz9o1yKQMMSyDuKGdPoRscJPUTTtqwdwa7BByzML",
  "key17": "wkX2Szqp4tc2VqrfC68jQbkFPQpheH3MUh6LxtzEdn85BxxLd65XZxPRWbPKipPC8aJHxPKmWJmqD9cq588KNsP",
  "key18": "5hMjVv9v9VzyVPykrqPADFyWhNzskJVLwkiaUVB6F6L6LyxXNGr2166SBd7voZnsoT6TVJFkTzMwyYFkP3ak4JbX",
  "key19": "5yY1mK9E6TuizZfQckELuBXbULSuUyuzTW1d6pUkut2tSshVvjdJoznoe7XazU8JdKMPgf5UmKZDvL1U5Vv9rxAK",
  "key20": "4RBMjNokPMVQhQW1KEkxveZrLHjYb6TKVeVV8GNL67fPhMgypExY4sYJK7M8E43mFPCVuT6rtnNPNrrXTNhNwgEd",
  "key21": "56hp7f94N3zRso1rEQxheuvuVtBjswvPmsEfdmRprrKhCQikG4K2xTbEj8dM1siPkhdRsooJwUZPE5rnBYwM9uuE",
  "key22": "3FbnEfZkYzhiPuReiV2yU2RAbiiAqugQ2JedhrDpdM8qaHVYzDCwLfx9KcWYCLp4SwVGR4ivDAosasy5jHNdQ761",
  "key23": "27YnsXpX1Fk1utuToZgNkkWSKhHg8o9RugQMeeg7F4nK27Nb6cDxPCGx5nZRatkFFk4p6SqufNWfAAYjoxyK7Q6c",
  "key24": "2B21pJ83ovCSVMytNBmn5G3ibhe3MdzNr7tEd1U2FiJZ2DD6S5A3nRze9kZfMJkzt33mjSh2w3UQRZu3aD5oXhCY",
  "key25": "3aA5mRpF8VxhKSwiVWWErGYuj2sqeKjLo6LQpE4q4eF8nRLaLQufVd5tkSjhQvdCJkNXrv5CJW2Ktz71WYpGQzcb",
  "key26": "2DXExMHvVMkYj4yyBZbBUgH6y3H9VcEcad9quGf8odLSQTb79qCMYaM6dRBgeHNVNcKYL4hw6kYqiz8C34rd8Jyh",
  "key27": "4XrypqMrgw7NC9WjkSq7wTdejvoHPFtY6WPxUe1djKUjkDNuQNNNgqHrKBtoJnjp3LCo5YRrtu7ryCRftZVoVTGj",
  "key28": "5JgXnx5UqYw37PuLbYCdGw55MAi5mGCa288We6FoNqkRPFHXC7mDtvq4YDmdgXbDi1pedQ5qz1coF4Mrfq9FaajL",
  "key29": "5YYaCsN4ZB3bevE1QLftKixcFC1C7k8NaisXTPZ1rhNkfZUSj732YequUvm8EtVUqpYd82932DGnWGNnKJ9pnosj",
  "key30": "4ZtkY7QCWWjeQBv63yWkkdoyL77d4yLsQTHcqG861Nv1iucTr7FSqvYVbFycd3Md9fg7i8hXRK76vtN5u8i4wLjR",
  "key31": "Dwq8CD7fwv1CGAK4svykvmii3NpKqjZRN3n33k1Fsmb6uY7vcdQ5fT6A96ssyrppDkrHPfx2go9QityzLKY9q6L",
  "key32": "2CcMk22avLPrcqM1kdvJ9YZRrxdMhNKRrTE4i8W3FCG9NNKfCuR5S1ZyGmUtD36n6UE55XMwvCkm4z5gMa8gaeng",
  "key33": "3v4nw3BRkXaBJBZYVwVCYvPqnfG6urHcM81tMfaGS7gws7kEv8fmHXRFjz9uK1p3fvjeGoaqEitSFqebw7h4hm6e",
  "key34": "2NtHKMW5JvQ85vrZWc3EK1qUhP1ewG3ouno4encywQKBNJhpXu4de1Mq2L2o3TxyUGXQsNAstwsNR7pooTKscJrL",
  "key35": "4qcozMFfXKQpDiGSfZEJq8JZoTeBENJE7yrNmH1Ud5rE5hVsircWH1MRszmtdXhxswiABuprNYuYCxMcVjk2p9ja",
  "key36": "5tadCRrQnLmmhme6CxkUJcRKkLXQTVBNm2VxyvHwqnPTTvr6U8YGsA2gLd5yX3aZMBhMk6Hiq4WhJXjNXSEvDRb8",
  "key37": "3gFhZccFNMTko95oKEiE5dwyXqZ4p8MLZBPTwsxfHpux4d3bHpMtjWCHXds7XtaD5iAvMsy7zbw4zciGNyq97zpo",
  "key38": "4Up3Ho4WArBLBRPNijPUecA8TTfAkvAX26H1G4GREHz2mQxD4v76ZoqWGnxm9rt9eRn1cHPNZy4k4dyJ1oyrDcNp",
  "key39": "58BNeTHUo9Q4xTWhLzwHZQ9sm7WFd2ZU2gGyReqLcuNxB7ZW8Gd9GiyARxtEVNDRj3pvWHL9cBZaYLjN4gtothjo",
  "key40": "2tb8FHXFya5csbiggPEkmkzSpRBSVVkr3ZFFubBYShjKzitkVbLUrbBcsaScrtsp2gCNbgvV62VYpQYANrUfvJV5"
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
