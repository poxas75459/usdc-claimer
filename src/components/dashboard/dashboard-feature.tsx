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
    "4yL2ApwpzBcb2zyPcEZp3CS5kCntrkk5HhFNGAhKwL793pDsjU8nYEWsnH9XrL9xgwJhdDB96Xb2tRr48pWX2U2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbSXu9A2LnjcfDJzvtHSbcoRgwWpemL7gFmB9gtinkHUKuEdogWcPMC32iexyYDccE2cdPP6LpGhXue6gRyjfgY",
  "key1": "5QSPZm241DBhRmabdvEBikCjCSie3sQ3QrbZdfHPUaqjQpdqRUv7hDjbBTBh7yxHZnd9vzey5JUT6gezYK6GHkkh",
  "key2": "2qdEsta8j8N8dFwSahP8WAFFw8DUCzZFzVULcjoaJf31SFCm7auihWpR7F6NyeGM3ysh8DXjYWi1mJ3rza6BGZJj",
  "key3": "49MQGKvsYTepLNa3UZoGDijCipL4eLhJJMMa49Qog7Ctn4sH5PEZMQH9x3GvoAAzADF8QGXmcS5HXmtLFajkknt1",
  "key4": "2GxmafkDvCLe9zCWMm5uJtmzRC9zFAVLCpiVwLRGEnGHinTmnmj6PyoveQoycuyoJu6gW9BpfMkfhLXZTMfbcMPR",
  "key5": "355UWL2xW4ShHY9UYH1xK5YycyCpgqU8AytgADCkAwbz4jmUpArDS3C5rFaZJVzN83sRU9rZhR1ZVhEwqx2pXdYJ",
  "key6": "4wVUzHMnkoqZM3EF2DD3qt9SN38GbuyVE9wbBJotiB4CmVYrHUebCh6C85AcKVqDBbrDosUYrjAg24PaWmguAxgb",
  "key7": "2MqB2xHbKFBANb9iDsoivuqrRV36si2ndkSpxJCL3zwmTZ874KNgRLAVvNK2fYjS57UddDkZipt3ZPumRqiTHrmh",
  "key8": "pXDxjWZJ2dx6kEmv2ua51ePjkSG6PWPQ55XoeZf7edPXn9h3epLPswTnu8mzwGaiLdBPkxDCWr343c87UiihStA",
  "key9": "38tfWVAN7fmJ6bBH5PYoGXMf4NSjfsi4i32SE6j9SjubiGxaJJfBQgC6UHweDS4tJb75LhmhNZiTESpgRDCm9wEJ",
  "key10": "4t3v3FeCuZfkyJdYFLZW2bAB8tLFeN2eMQzJAUZTnMm6tZHsv2QbeP6pZjKqsp9XAaDiWhPfY1sA25P6jLUMomcq",
  "key11": "4xggkJC14SkFsGWnHYKth1ukWWrnjx7kENjXBLaF5jKF8zaPrNEnozm1moGpz8c3JRHzLByDdUL9TPGjzBTS9QeW",
  "key12": "BtzqaX8U6vuPny3zR6zZDEchApauQkkrsH3KEzehFB6jNtaePBqzAJq1ni72itWo7HvxQHqs18EAhySn1vrqKjS",
  "key13": "4zYmWgsy1o9HyxtF7TttKHyS9PytJaeTevqEv1PKFPUTY3u6vE6HoG8d6dxibmNacP2M5tiQC2tpj1GkzpBTybti",
  "key14": "61acwdC7STsaQjtZztCiWZyQ3VBeiMLSUsDLP6wKFuY1bi6d6aAheBt1v8DrFHv5yvMSxiAAtYnjAE2a7NkBFuzf",
  "key15": "5nYS2Aa2PKyyjXEyvm8vUBZxsA9a3kbA5P7Fxu5LudCAaBCgiJMZStaEN8AhEwxQsgarTDx5VsXbGKUmXjWt5NPe",
  "key16": "5i7S3sNvGWWH8VMJZLKcnSDscuxDE2Q8XyEisCRB6tSnxG9ypv68ccbWxqjX3a9Exb2y6FMJQh4326PFjP4uXjYt",
  "key17": "2GBZqJVrYtoi7cstxnEvenUPnbd96iJo6Z3sobrYm3WhbbR3RkZycFWZuxiL17VgywtwDYhZ2bvBRf53seeHPWFo",
  "key18": "4Ve69Bi8YpYRohmyAmzLtKMcWtwpyK3FXbndvJxujPGq27tXvrkBLscCnfcMS9bPAnWGRBshUrm8SE6MmjdwhJ1Y",
  "key19": "5n2xJNDVQEZnDAzZVYTuuuoKnmod8VatMRS7tQbvZym3CAGeAMvdPMe2gBqdie1gY8jowz6mRFof4ZjugpnVenCy",
  "key20": "3xmMuMDrZvk3L8DVK9DDPMcEn2wxkjN9Df1Nf6c4W3CHqLwAoPEwBq2ymKfSVqQ4UPvCG7HwFvX8njBPwh9zhrEa",
  "key21": "2uaVW7TKbsG1GWzSmNdoHcXFgzbY9iNrMbgL5Sd2LvNDpsEJgJKFGtGSR3uqx5qPUStmtC6PJmK1sP5UoEMAJ8W9",
  "key22": "2fLNdi3xupe5afhrBTmurNHmZdvC63EraHYFp6YoVHjjooSPt58a3Z3FbBcRYg9RtVDMmZqSH1CoWLcaNYZzemFq",
  "key23": "4yp4RwHqSzGYQjgxBeVn2J6jTkKg6ssHJRuRJV4LqAVw4EkCdKu8ZU3VQjiJfbhCkxp14tsAhpBDTk6pWLPJP9up",
  "key24": "3AY5pSrY1MhJpZLLs4KCggWjozP7x15DuBVdvWgAMdLZsAJgvn46q3jVtDGg6GEZg87Ao8StntqjSx4xsWFCdjCV",
  "key25": "2sM4Y9oevnnTa9oZdMzYh76To6SM8o1ndGnsxPoczue8YdwR5P5mLXUjgvW8nUgzBaasUZqTMu9AeXRiEJrgtvo8",
  "key26": "2Lfj4MYPmyMKiH5ntFgeLTxY4Ct3Lzp2V3qLNpNmrzYkMzUSStJLWzT8EuyVADfAeCHRZdLRjT57KDPqhurVcnDA",
  "key27": "4D4TFi6V81TmYoLgnrRe7ybQAt3icMSEwc1vRb3JacF7eUTtG1rWHuXJerrLmBHV2xQeF6SFRYoqVNCYMxnk15mP",
  "key28": "61WVBQDBw5STab5sXEKB8HP6XcQUMHw8JivtFCrcft99PPR58k34218uwNQi9VdPyawaUFiJCNn74jLUj2TqHba2",
  "key29": "mZuqyzM24DGG2eKQmwYxYAUZuz7HtPib2hiNuTnm5LxbUHAjr5pJRvVLfZ4GAfBgvtBrAfGvYJSDfmygjR9yTGz",
  "key30": "5ybDdzSXnNhVPAC4bYx2nKrcH38wB6Q8FSbsxqN8hDKZ5QBAQyaiNwJ9CukMsJLEi9rKdD7aW7MFKo1avJD8hDxf",
  "key31": "4AtViYTANkBF4xq3gkDdR4RHp26XBqLrh1nVcPD8EFgpttXVbYwnSFfFuiLBUCtpTTymn3SbpisBqv8RP56rj3No",
  "key32": "2kTLA21648nFiRGDaCoJu8MWD9765J8sYQ2yVuvnWRKgztSR1jzqbTJrcsA1X5TTwnRkdskhF7DrRgQb7iYFXw6x",
  "key33": "Gzyn8kqPRgFjRSFqgiupt29mxkSenh2WXLo5kLG62RG2uLh8oVteBffWtC1Kn1repzdhS8pyMK7goDzoofMmL2j",
  "key34": "FvxZRpmF9m2oKv3V7yMmd9HsZoVYx2jTRiJ81WSFx4rUGNPdFVFmYg2UyTQUCUMEei4z3ZKTxniwwTtJ5USwfX2"
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
