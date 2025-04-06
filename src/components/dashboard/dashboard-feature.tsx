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
    "2hRXjyZryxGduHjuYQEvsNtHhwMZvdb7LivZhrFkiC4tRW2CbXa9jq7U1U9U1EH1Q4y8uZTo2WbY5BnxXV1x3hfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYx1WruTyhwrWsQkc4EA7vu1jgFaceGSy3umCyUK3yBKJcVRvrdCUAewmRJnrPGp6QYg5gc939G5YhuGtzFbLhA",
  "key1": "5Z9pumQKBfvhuyERUiwbwUCqzr5xcrYxzoVxoWfRsnWke6U1pNpdnFEUDCA55cEpwP367AHngHg5duDwzGvk9pY",
  "key2": "4UzgNZXnW9T7KpufhUzzeQniLvbMvnjjS6kW11E6wvvPN5C9ahg2BQ4fHLdwLr4pmEWtuS2U3sZ1jDzHoEDTFz3x",
  "key3": "gkwfSYq6bAsqt12vvFaRecb8QbMQQojo25LzhS4AYZFkUEYVs6qbxQSUxtiPx65WgWRXCRTdQAe92yySBiwE4TD",
  "key4": "5Z2JY46DNSPS1XYkdNidD425cV2XaHUJND1XHU39Eh8ciwtRB7EZjaBVpYQwByb7734NVxPPMiMbPsrGu5X5rmgF",
  "key5": "5T1djRsSrqr85A5yMxjXE8apvn5746JMBPxAbi8i8gXuTcDAV6nmHCc9VVGtBmgpCmE1k7N81eVnHnJTKL1KV3XV",
  "key6": "3s2ihbsdjytL6qaTsNRp7VNDTT2P6TMeSFRKevBgxbmsztJKTf8SHfj6HL1iNmYbyieh7dSVUh3nwTYNQNqy6Pxa",
  "key7": "3hqjCzVFMqpnKg5XGv7gDCbA6dXWHX5fZSQGR3yMDFHSyu5Z3PbRxw69zzskJ8KBzqPkMmWv4fohNk6Tr95EK9wz",
  "key8": "4YdygLaipkj18bU6kSk6puCzuD7UYH1nDgd48Li9x8azb2TN2oWpyrcnHwoYE756MHnbaSF57t35XjYPBdx1KTgU",
  "key9": "2uxdQFujfBDYz16nTJm1y7RoTx5Qiw8FnQj3aRBAcVNnKDfqwkfJ5LoD3VsisPXvjBv1mJmCM2KPYV5C4Ey3g74U",
  "key10": "5zTVZxzehVfpbEWuTPrH5ErKS5HmrqdLC1yuJ3rYSFNMtQt1bvXJXBG16xxzJY1MLgjabRBUmVvW8aqha4xDu8wc",
  "key11": "2qBFCrVY1LVFxTEyZCPoCCrk4N1aocY9zpjceATPUQaNicEW2ToLgR1FUREP64E2c9tDgna6ctGABYRM3iwRM7RJ",
  "key12": "4qAoQyQHHKqHnPFP5kj8KfVZML3Sofv8kCfpCXDr2MPqahYQgZxgwSMemgp9gS6Bvri3p7PcZzbsGA6UerHsTQUa",
  "key13": "2jXDwMkHUqV2fv1zrV2qXAbTmx2tkByoWEnyWkeZcngEy5D431mZLBemMoQdMov6QrEhyZKNeG6RAN7DDKCHjtj3",
  "key14": "4G4KYLw29YhXjWbYEakG6efXtLoQnuKrcv6p6mfdmxEZX7eW33TagNHB1JkNF21nAk92CV3xyDD2odXwx8kzqXRi",
  "key15": "523B21Dbtk3hrm2No52HGG5tZR5wPfMQ3LLPxCv5fUdr8qmTmqX3zRPtwAxzX3guX4bDENS1Rht2zXEPbvj2C4B5",
  "key16": "2zDq3Ar992CgwkUkz54wmdsGmEhEBsbzw8vBwqUQ9TsdsWgSc9WmVCMfPnAhtVERLWALyhKbK5qB2e8inF1FBXfR",
  "key17": "3yTXVQUL3nCgTPp7FhNr3aLjaVe6xbTuAmgjRwvScjc5Z2b3UjvDVWER9qeEEhGbV8RGAfAH5xhcLbdX5bWQHxdD",
  "key18": "2DC1v2sNnAMGEsUqGnkNCytozD7H6bpumfhcYwaQfwEqQppZ9jkH6phFt24G6ZdToVWXzF7ED88wdAFZ2fDMFtCt",
  "key19": "3FoBBmcJdtHqfRMHeqpjyshKXf2eNNVQvptxXaZcPipxBF32KwLhGwYhSXAfUYn6R4enxnrwPDk8eCXavaro9Wk",
  "key20": "2cJe1LpQebZ7RjZfFGi8mXxmGMZ1JGizkfHfx8QWY84JzgomY8tARcAcU3r3xvpfVrhszRHNVwkG7XXmFJE2ZhCK",
  "key21": "4T2kdwF59FGUq77jvDiMW4WtKMy1JKddT2px9KJfcRhAJ2dLRSNbQRkS29UHD7dk2TwuAsXN9tYfN3bMC4gNdWdN",
  "key22": "3TAbgnUPyUWapghM84f92F9qr2fMm46GukidQXufeBS5gM7YkfqAuodiPpbC8e4z54JB25ooc7ztZ912P97e7fjX",
  "key23": "Ui6j59RMdLvvB1FX48cghDiDs4ECCk7V5dakMtMjE8Xizy1sjPub1mkDNbjBmJ46go1dpxaM1EHgLbuTraXysty",
  "key24": "2CuTJhL8LtHo5yg9ZbEtP6KUTErbpgchr3drEBnjdvmqpXRS15WTPwGdLg4iW4nPvEsJH7BT6sHLWYN4S5qJjxZ9",
  "key25": "2cHokuBqnsyUMVNZp829RtjwCSpynmVcw6X6CgzdmzYbv32UNbQvUEGf9g4fx4WaGLc5wSCgLW9GyChzjSjQ69h5",
  "key26": "5j9KH4wmACe2HEo1kKS3yy4m8iuTZWdMxK9d8ycLm2wD6i2B85TcmvtSeBTStdPbvL2NKUq8droK251k35oVQJg1",
  "key27": "5j3UYcphakhxJpdhTSSLJ9M1s86TbSuvNetNd3p7ELMvV4vG44NK1LqCzC2jHUKE9rM1nY4wpEH3zQGaJofwtCHB",
  "key28": "2FSyPm4TzwNKHrFyanKGqBHQ1nkv8X6KN1kuZfrSECqCLXA2zjBaNDGPvAwUGM9ZYcNwxAXZ8EmP3eazcA9SuLQk",
  "key29": "6399jwKNaCS78v44Ck7oZwBtXs8p9LuUTz7uPXU2VzSpecjB3kQ5AXKy185Xkt8nApDV25rx9mkBFXSHgJwXfwct",
  "key30": "3hQjCyps9yjX7b7xkC13rMkGTWPNmaiv6SfkRPXH3GjK9NaaMPUntrudmZS28y4zgEdkH9c1ir1xjqj3B3Q8cdM",
  "key31": "NtNdJMBy4Ear7dzBUVhctCXsVpZ9EWTDMuy1xjP4MfV6t8FkgkPWkftesdHrP1NzGn98av8UBP9iTigdf3vtFjW",
  "key32": "2qUREpDdvnae3yGiMLUh3gBwr1W3cXcdhSW114cwWgksc42m6hmbVVeu3JFEfBVgJwQgNUv8bC3Ln6YrfT8oCAKZ",
  "key33": "3MNZicmiLQUsvwjiRjcftHC44inu7chpHsCRkFjVBNQv2GrgBt5GGfw56VJPYoWdiupem2tpiqe4VV1rP45DoHct",
  "key34": "5vbvzLwp9RW8JFwPTTD3dWa6oTs12YaTj159ou8AFiFgfV95QJhHQJg5QW97QQuAEqHFX2NxdbD29RZ3tZaHF2yV",
  "key35": "2pp3PwibqgxciCQiKx2BvM7t2juq3q1VaHVpWLNEEeJbZfq7v7r3yApCaPJc7hSw6yguu7U9WA8NuvBo1yziAa5q",
  "key36": "eGdLA8bm4SKqTZtHi2GJv5q5p1DRwabVsP5SBUezMRgaAnmKPiVgKWukSa2swTsniHAT6T9jePswAYtKp3n9ND8"
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
