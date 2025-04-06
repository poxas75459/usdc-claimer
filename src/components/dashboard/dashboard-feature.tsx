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
    "BMUXnLP4ubFRrQtvCDRQormNHfhfTm1g9Rz61jEJeeHcwdFNyjGk6rtgqzXe2HxKAE74bp9foQvbL82JYt4oJ63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tyb7wb6BLj4cgSWQoNREp5nVkFNTmsDDh7QfpWWXTtcvcx5SPFUydwNXVLgcoZp8EtYEYhqkAVDz6QyucfLBG95",
  "key1": "3TtocD3PgBUWHtranqj2tx3vXBUFPtFZ43fdegZfQQBicPu3MCLtLHN6k8LMGceFnrK1EJ5A2sCyqjSYPtfhtTMG",
  "key2": "7xUMbVq9NEfqtkv2affMCh1wBbm8b8ZXRKq1WKZ7eTP7ooVh9SbgDa4gAgyU5FP1kN1EpnGWtgnrgQi7ezJ3pre",
  "key3": "2PFmSw2TzYAN5x7obGLgauAVdwsTHMjKroQdvp2Lx8x6YMCAHACXGSrSAVFUio2gHdNFtBzinottQzebUiGpUH8X",
  "key4": "54kKyuwsifiDkLjM7y4F6wsQSFuBKa16dnBuxEdSNwnbaFbtqVsbmb9K4d51MUx6CZxBPat3cfyXV4qUbReQnHyU",
  "key5": "5XNjLciFXbk8xfQp6NTGjy69V6SPCMi9Qz7PX8WCjBpaeW3xwRzxXFNTN88oQDgfoKtHxJQDT6KfHh5wpakiu5ju",
  "key6": "4sk2HmtNC1h33BZRL8WrZdbTGBTax42AymJE9X3hbYuX7yqu36XxjJfL7b8mvSPANSESLyCdzf7cC5eYTHg3rFgz",
  "key7": "5WMZd9nNFPnzu3wPqeMkPc4mWhyQpTZ3kv4GYwhyJRtF5RH8Xf2SdVxAeVYMJNAQwJzDJyTBa84y86pmS1EwsNih",
  "key8": "3KWQbxnpZG1h1FHUSpvaMRvNc2wzdF8ojTCd9TPsyBdDTyVQ2Xzptg8MXnMTr49bGxGjUdKSCmfZfYLwMqLHzCxY",
  "key9": "4aLRnffBqbB2YR9rd11MbTnxeFsg5HhRJpDoXpyQrf1caUeZhRAnt6kR9PqQA8FPufWQ1sNVjo4aEkgD1u5pw1wp",
  "key10": "54B6B8amiyjZzjxYTeTSF2uYgyAgZGAo7K42JeLth9ppKNWp3WDbnpz4W2aJrQenBzH1RhvSDtgMqLYZsyez3tty",
  "key11": "2h3waG9bkjDbjypGHiE1BVg97SzDTz5hXeCLcWk82sCDNNvurVHHVwWQKkiRpZEGwjbHjSBGqtKaL65BospmpW9o",
  "key12": "4zCY8qyUicMDuMTqGpA4HZyMamaXJuj39fYmb6L2LFkvXTMuzaFSj5aFMjRQBXD6xW3Q6y4PhBFyAnsFpcDFD4Ut",
  "key13": "2pJmWeCi4Tb64hHCZricNr3NGGZzjUQb4rEbTYGNNiePJGL3dGmPTkaP1En2ySR2685TBacige1AjmmAdhmehHXr",
  "key14": "5hD6EYXJt9mMdbKCUxr8AAGAjdt3iyAgXSS2mJRSY8PxbG1P2Qd9n2Gv8dAwbq7usrrQGuYmocxaCnJuT2n1F6s9",
  "key15": "5EmsPrCmJECKw2dMtHZrdonYCmVQyNX7LySu6XbJ7HbCBuWovYRxpyWiwD36hHs7cBZihQNx4gGGxdNHAG5CSmd8",
  "key16": "cLEkicPHUFasoxTV5iE2rSUEDDrj2SibWukQVg9zgbkT5h9FiucXsKhsSbN7pZsqAfSD6vssuM2Wsrzb4w69UAX",
  "key17": "4dh8koCLXewnRWD9GVopy3xjQLxsqLUDuRTgjgWfRYhRo8LZsSVZPXwYG65THxN2SBi91k8obA2L9gXAoENX4JVj",
  "key18": "5haqz1PtvXvP1tUAQG7q8CUVjQtLmSW3WeApUiSFos1cZgvcZLULD7eRPKmAzZWdeTwtMjCD1Tm82x58Yatb5XCU",
  "key19": "3v2WnvaJhW5PArix2VochpsU5pmccPPBMMBrBsLFQhevbiYLFQMecbLNmkU7eaftD6ZvxGxAE4MUsKpPMPjd5S6Y",
  "key20": "3Ku8M4ZpwMkKNdYDAVGrLAaRgeYfFnEQY3StzLvoUkdwx7mpsMJD6zGvodHvfBNvpP8oQhL2ct2DdqHjFCW5L4sj",
  "key21": "65HsKSvqaufxhoaQxgzcoKLeSdVVHvo4Xwk5CdXQD17318qFU4o6GZb1zt2QbKFSdHcgM9Qas7TGcmuSU64g8a7z",
  "key22": "2c9ksfPRuBBgVSmPArLjvMmPKEbSjFeUn9vQmvhMiw8iG4hGc7eGvTiU6fhhPDztiCTieMJxKKLsGg6Da2wyGPge",
  "key23": "33y1jSxi3K3Y2kHSXCaRwoX1NGZ8Arcgainzu1WNzvmrUmFWQyup7XatsZDMEGcN77H83bK1HD5tbwh9XKCJY1rf",
  "key24": "HPKqsrdVHtwLEZ7JbcDvToDkK8iHAUXixezFHV95YxujAs5RqtGMhMEBd4VG5k4QuvLj3W5JoLDHpRUXRehNtGX",
  "key25": "xZT5U7npUN8EQbMBEZmdQWizP9iKpKYNzVzLLBcn4pJh6R2TRNGGQj6y1Sbv82J4Kbt2rx5nsGsWutgAuSa1Q4y",
  "key26": "2e2qrFzHs52Lp6orB397Dj6rHBgGXS6VYUxvygAqGiiEk7dmLa1X4QtipbXCmsvRSzfor7272uFhjNvb1tgD91av",
  "key27": "28z9v4XBHEECqGPezCN3nKa3KYCw7z4VtTozvs3KWfnFwDB6WZksFnjRwkCDPGEEkGb9SSJ78kcD5izzamxwhT5g",
  "key28": "4Dkth1zqd67vKyfHwAYDai2zJyAC2Gv1NBEuKGEBywhqJAypvofRfaVz3qHYYp4RupS1uNTvQm21oRWeuer6maE",
  "key29": "3NwMhuwR6rLa4QumU38d1SE1tvcXE3eaPD9PvduDDrVe8PC8N8J9FxZ3YA8dp9axqepRzXJaR6sNHWRJ3edh6AUb",
  "key30": "w3yMv14p4fGRqj25HER8L1A76geajxHFMdBSxXp2our2jMKyDogzVP3ctzAvJjUbnupPapi2we2aDCrw4cYvJDM",
  "key31": "fnnjHWpj2AYZ7nM8xrYg4auDmX94EHFFtbohxXV4j1pR8bJ5uY5w2efj9edxbfV6jFRskRjZPN6ePf97pGCtuJZ",
  "key32": "5Ss1tVfX3TJ4ctsd3BDUSJ5bh7htsoKJT1ijfeeWyRcEd97RGs9U5Ciu18e5vobk3VxDTXjcPjvfzrJNxF7bAonp",
  "key33": "k2dxqfYhUZCoFvXaXtN5RkkWVXm27eRryZXVhiDiAG7puciY7WJVE6PLstTRLB8467a8DTwPUDFWF43Pt1QEg7T",
  "key34": "Lr6qEJsA8Aqqk1VnmsY27pf3kLMYckGdFXWf1sZa2KgWritsLQE4zADsCDYpRtRK7BX1pf91iowvhYPvWxqv2uE",
  "key35": "53FTTCrNQz7H9dHSfCpFpm8hHFKmXq1cqTFhqAFaukxxKgdYsRFRxDPgsJyxuUynxAmvhmiA1AmPi2By4yPuYcNr",
  "key36": "5DPJbwzt8YgEKTmGtCBgUqyxMeTVq9TgxtMaqiR5qui9zMyvYMeBtygTdS3VgMKieEcvin4ymb8aof4H6JJzrUiH",
  "key37": "fnjWBxmYNkqkPYGffZiRSgyHmXzS3LxTgRceFBfQ998EbqzAvFVUpCnmym1TCDpyXgF5rzLUS3VY13s4vTaNjSn",
  "key38": "K42wxkYGvJRBwxjAsyDKwsB7iY2dWLjFRaWmUNVs6P2m6xRP1E6LQeGUZG9zkRkNcyvm99ZsCvza4CJPWzTEjzq",
  "key39": "4aJ8CdAGhA1kABHy4emCPvsD9hiNcixPqngrXDk4Zad2E6VR3Cv6VSDj2enuwCN5WVrV6XYra5qKdQkFKBcjTRGc"
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
