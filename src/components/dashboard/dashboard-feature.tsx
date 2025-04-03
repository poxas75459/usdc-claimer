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
    "3QbrMrknsTb76H69CT5w8pEGsbmGKTmMLntktPWc2EEqxSa83dpp61fVMh8PuCzZo6DcHzGsdX16wGavQpC7QcaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndTHrnDMXF67psC54oETMWoK5YWPmq8hj5QX6CQqaT8gypUuhmcodjw6ZBccwXLR5MLtE1RymG2BchyybyoEZSC",
  "key1": "5G2s5r6MaYLFAEBXU8aN6JqAh1zSxnTVuZxStTj4rRBXZNozkgupEkUXwWTr4qtusUJPVP5DuyDmucqUChK1xKND",
  "key2": "4B1m8jdiAixxsNKCe1AJoLVHPtzq4sE2CsnqgnKBfcpi8q9Brq8zXynqSxRh6BcidNQG2bUaNwdFnZT3xL9QCTiK",
  "key3": "nvsYHCuB9hxi9vXsEMqaPcndaPnWMc4vgLteaVYNmsukunYE7dWThuHmjXZMfs3fS1LJXZmKnCy6djfvd9xFsYQ",
  "key4": "2Ssva68sCj55b7WzQW4QcXzWHqctz92Bppo9qxrA3CgpUX6CQ95tw1f9z3KePuKetAmhdLNz1KgDwEq5ENN8oyPP",
  "key5": "5PZ9Pv64QpxyjKSh38dNtf59SgCFpet9rnPvEdE3SbBppZm5LgPUUHZzM6azMbhxRHechjhcc21z3Xa3cxDhbiQB",
  "key6": "4siixyKurYwWGqo9apXqfFjyDgg11tUT6xJDoWu9rznCz5WPKWw5H9Hd2fuKdh8UWE54M8eB7PAZWV98c6Jn67vJ",
  "key7": "3oo56PhBWT2c4Yudnx5HjVAuU5GttWyMoYmM1bH1Fh2AFve2tJo7znMdvWbMhTWx6Dvr9fWeXqCjKS6FoRGdQCyT",
  "key8": "5M5AXsDzhG42QBtskHxzzXydxDQoSnCLqoRAxM5o9QfNaTedr54a6wcYbwvWXTtPM2XAvs6nYRT2AyurSgW3ffja",
  "key9": "3VreydUfvJ7wx67PcuXaWyrqdGxw71yA9EX3xUSKCEXcBcQfhhwxPpLFhSPq6DeGYsZbVdhwF9bu6CYbJVeak7M2",
  "key10": "2DQtDj9zGVV8F1UCULYaCwRJhHhtquSD3LUfy3RC4y44ea6pCMnHiNmQVDYN4Fiefr8AZTbtJNdW6gpS9hC9WonH",
  "key11": "4dd2nwDZjdFYfHgpQhzCgyPzv89RoADnEqdFWvSfaSanR5RetEcenLwAgUUQ1DWEErr9g3mnv7R67BxDf8mhuyWJ",
  "key12": "47pPzqTmDSUNNmnQR3mfFJgvEPrnGEad4aADXWqUBrcCaxH4C1c5uv6mJhb5hhd3mHjrhDV8x2eC3iLmTbs4kYvD",
  "key13": "3sBoh2HG9ZX6TW2ALZd8USbjScBUoRJtk13HaKsRFFqfqFJh8Pp23Le5pZqM5LrnD2ibLnLcrWNdmCPpRVdztcZD",
  "key14": "5FtWE2svzh7nWCwrih8CTmrbJ67VMDRbfAYn5t8WzvB7wGC2zAXPtnnm5imenZ7qSJkt5PqBzJjM84LVnTmuogEV",
  "key15": "3ZgxqZDFNgrkzSt1TahtRddDHCwzxFyqMHRZ3vmHh3df57hcVTjU4waxEqzCZLLjK2EnFX59vub6GCN7cjxoLDrY",
  "key16": "4YB1H16Wzy8aRpkhyPPRcA5js6eyyRy4qxg4o1oTWxNKLVeJM1aqki8Rxp7tpJryG1Xeh2sfqH5jPQXLc1hc1sNb",
  "key17": "3EL1vZrWSnrrGKmjF4G8oxDnggvxvyUxKdzez9wVtg4msoQT8EEoPpoWqyAZDyqR87FksKmyBbyXNJjQTctWBdCz",
  "key18": "2QqtEn2YqUU4to9m1BkuLNdPP4MxMs9LpmiWhqWV5HVPWFw68ddHdzg7i4oSSgbydeZrtBsQ22PHZEQCkiuQhWXL",
  "key19": "4hKguYjiCTK9iugnsgXjJb8RsKVvatR3fkoAxsJrPrEe6GBkatQz1NL2TqE38bctQMkn3MZrJUVvMY5dVyGbjGTq",
  "key20": "4qeSbpzVHf6pYKAUJ8dFRuAzvZCbZyCPyUgieFKH1GBgMJWzzSc8DdNxCHAvBdovg7wZh8yHwRir1dzTrS7r79Bm",
  "key21": "2CxkWHG12N137s424GTWMpP5JBP8Lv1Mk773bV6TR1otMM1XBaVqhLQe1awTFGn299NDzHvsktdN1G8fApWoiQEB",
  "key22": "jgBAzmJomxDRnBzP8KmYXP4ixPS7RnpZ4mtCHJcXA7qw7cvkt6BpRgdePCvtFqENnT5QZtPczhBi9GJ2LDzU2wR",
  "key23": "4fPyoQQxE2kXyyzd6a4fLqww5P5Jn36eTsBtbXWy2F9PQgxinRwUSRG823MVKDTBZSkxxS2YLCmVbY7YUcJYrxkj",
  "key24": "3WsNF48PQ1UfdZLDUwoihheCoTDFSYYso9Nw5PZQK7NtM1YsFrRuNL5nwGRcidYtb9VRBpdDWeyTvVaaxtzuKDSz",
  "key25": "3agg1ozsfcEeYABMRc6miMMUE5pv6eBMmFe5STqc3VSsqicD6o6dgFLs1imSiiX2ULvd3mfVXzRB6sRHcMo1RYcZ",
  "key26": "2cjbsBg48aXdXsYic6aW4vp8U4Eeu79uTEviTJcqsvMbG7R9ZfPT8zVUQrz5thESRNpNuXqQWwTqUnZTBNcDzFsj",
  "key27": "5csvGw7PVGqyac3kvViYs9mXgnSuxSewhnKxbu7iU5yw4spYSFXZTXghDNNnjwq1ceFTcguRvyVxvUvVvAgFb2Ww",
  "key28": "2XZV2TjTwKrz8bE5PdbGMYb3xNnw2SzAAyUx5eCZd8rANoyQCcxLojAFmaKMWvpgoQ5s9wP4z1fftC9VqRHKHuaR",
  "key29": "3MZc5ckgPVWKAQvmKf3dKs4cuoEPfKvnnMan2txeLQgRFbsTWZNE22GH4rd56y6c2QT6ruvYGFZm2zyym95MYSuH",
  "key30": "29eZ4fda1nZH9d3VRHZu79W56vhju8QjJfiynYFcfr9gYBxHLyqANK3QGUvdD3kEig84GVHAssouPTqK5JbFbK9N",
  "key31": "67im1jRp4nkK35gPv2qBfiXmUhRtCwf8HZfjkvteZKRQeSHksRuYGDCjkAtaTctU57aweew8GJ8qiUNUjAaq974u",
  "key32": "5p4PWFYBvaxpCWbznvxjy576bDyiqSTxwjj31xKNKmQPDF9359hMYUnhy8zmn7TvrWmPzY1R1G5wKbwCtj5HmZkm",
  "key33": "3hrwjPzDcU9ZuxK17xYK9UfEAToVGgPBmXcQht1GTRbNU7MmnPJjHzixZ5eQ77CDHzfntw9TWDRvbu33wAXkSqz7",
  "key34": "46zdQ9F3PyVt19BEJWoFZkfeC3xsdJZGefdeX3mooNqSZWUxECzEt251oTU6GUCUr9ULqc6PnihCXesU1x3LY9Up",
  "key35": "5kHBPENKnYUtM68vb9vn3FJsUZycmALHut4kuiWPTku3xadhVepLwgwS4ZvjFmRP3d5VAck1rnKYkypip955w7jv",
  "key36": "3cCdNsTqZmFpxU4JbApj14WLh4k3obkhD9TLnXDQdgNwMcoScGzyQdFthmVFjDBsVNPMDyGaCNRr66HfyXbR7VcL",
  "key37": "tCrnyrvLqvLA6ZmrTix2aJoj2wdSaXsmKZi1V11zPEEkFDJKZxVDWDwNzLmQ4B17brNSrE5ngmnfin1H5hoPcxM",
  "key38": "ZJ1z33FaSgQy8fFwm5wejHwJSd3hJ29s7mfUjyqkRYBZ5ogfpcqQr66d4HYddGdaizL9mJCkWtpUksj6X9fBLXV"
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
