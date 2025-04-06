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
    "2b28NfgSv7BQ7vzVMEU8rzKVTbJHyFbsiZ8ijB3tdpsRE953Txd7P8sUXtR4LeoXcyphKaiRZ58YYsQbAfSxmNKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zktiFyc2EGXdG8ku9R9cWmGyHFW3Tuz4CXUMTgBbtwnmZUM3QgocdrPJzY42cNBSXfif1mVs8eHcAWQ4VAanqAh",
  "key1": "3JYCWzwAcfkFKVqKTmeSXKhvrS7hczwy6QNzs72yDfzV2gnio79kxQQRBY9x4txDrvSGiMr87YdkA9qgvCB5buST",
  "key2": "wq7nWRc5WoQZxvNYUbGdtt8aubDYEGpXy5z51Cr8sdD7tbVFAqGrLLKKZ9tL4rA3x2QnEZoWcjoDqnRB3Wc6pts",
  "key3": "43dwz9brHDvqkDgz7MpRH7WypQXUBQfKiXp1E5TdwzEzMRRL6wM4qjkYbqQc376iLoQAdQLBirvp4tZDXF6so6qe",
  "key4": "45UWauNQBtU2S7o83ZKfE7St6yeYBhggVcwEadcEFPdEvLiSutpbVKj7Fniipsf1pZWL22jUY7nqf7HB7LEdirqq",
  "key5": "3xqRxyViTcf3eh9P5A8n5qi7hNYui1kZB7uzM6Cdkn17ZS4L1QibzyfKS457ykCMkxRwUEpTJyFzgE8QXVov67oN",
  "key6": "5iZsCrCba3eh2njXiKVX55t2TcCeqerArLGK9ZwzyrAWFHopPTZESVL7iS7yehqGWcpiGNpXrt4VuCHicyitCjJh",
  "key7": "23BSy5cMqBigtLLFJYQn1wMyqXs8rKB1dyrXiG4GJD9HcaPbFYpFAHgVQsf1qNRLN7uwr4xvTZjYxFNtkuYcSjUq",
  "key8": "3UobXJjaGiUbUFr3RP4hZurUc14g39WkPwy75nMnyuHMJqcycVggqWCFYVNfR8wUASiNHhaJDbdDy7RntrJQVPhE",
  "key9": "2c359BATWo7AtwBerEGvCq8tUxtF4kmSQkotGQcw4rKu1gBmwoB3Jyqc81WBc9aP3tfwdVvYknythQegBKGNHfxf",
  "key10": "4CgERxd2DTpUs8wkPB4uVbJVvnjTMnroSRm7vpZngm2ySRJcQDZ29QXBuGQMW2CWbsnynEy5sPMjZn1xFBsJyeGa",
  "key11": "3ZPsRHrn92c4QhbH46kNeHWX8p7b1d1AhGucYq7HT8bLHr2i42cJyFpWhHPnx5rbhiLsCtUyJ8zBFESSS6SuYJWG",
  "key12": "5Yd7RUtMjbVkHxoGv5cdWcLQvb6kwBbaQDJ6ZcR4bNLerPtdVxvEWhhsMYU8kF2e6qE6cE8Axzo5LstwxytUqEgC",
  "key13": "5Y7DA9sbXSBaqt9VP3DwfyinEDaSgKsRyBJnbupkcjKnBAuYXDzgQaThwenZAbU1Gun5dBPQLMxuumvpFYhD8YYx",
  "key14": "5f5NjNHadkNKsjVmoswhqUjV7ec7g1KfKETh5ZU7MPcSiEUTgiR2gi8ie1PHXr7kSXBGcipA3ty4599jAj3yi1sX",
  "key15": "5cuBcyTUDd9tEyVM7JPV28kCyx8TkRsXqAYWfBkrBCe7oPENanSuAGwAVyYiJryDrq3ZKsRgFtRonpdcuP6mLuGW",
  "key16": "56rLgrYXvGMGXv4z3mPsgbTGyvCfCNNjdrz13zxiUN48K9VQYBeui7raSGYMHfxQiX8Kn2Lq1PoAM9oayZPobUz4",
  "key17": "3Z1cWgbfTmDyc5e5Y6qtpcGfbQEQkUftCXiJo75az5RLGhzazwJyEsuRuLgp3N6BDxEuhXSSC7Q9eySFMYVD4gbj",
  "key18": "2iwX2p4VdSyEC2LbGh1cT4NTxzA2hXc1PF22ZGzYwwj6zdTwJhYDkiGtBetgn3Yw5m21RAx7DqgcZLKMXjBhAMir",
  "key19": "4bJAEq1pcg2Rwuak3M9xzPmHLv42ymQwphTpMXgXcrjjWRBm9Mhe4E2LHdo8hhR2hmzX4QasqADHpBp3jsCjwdrt",
  "key20": "2PpQgCajcrfWuVj24MctkddC3Fwrrnts5dF76brDwJoUyycBsGmjxcwGf7uuQztrNeuL6QJLmRpf8rA8cZh6Mrtn",
  "key21": "Gnt8KyBw1ERiBfSCxiVyAyLeZKnqs3Qqorb4Ke7aCLzoAHVnnoAQnkxJZS4gKoseVF1dsQ9BSAtWQXmEi3Q86yq",
  "key22": "3gJeKzuniaEzHiJqdGn9SrHzjEb7EwJpx5dd9U3B2XcYXecJjgyBSXctGeUbZ5hBmSsBBWAdtjAmyYGTn21SRBP2",
  "key23": "4wghk4tJaZ2Q5xRQebXTWYVCqW9j6nHG3LCBBsTihhYnRvy2nm8ruk4LS2Xb8dnVV4dKovhJwPMn6gbmSkTjTirU",
  "key24": "41g5htXHcchqWzhnYF4Tr9m9MHsrbc8rhFjZ1Tv2uHLKTNT6jUDewsVRqFpaJ3tX9hrazazgGV6gEU7wnXgQpopY",
  "key25": "2n49htfEQjVyrk22AkeD3qqHSZrGy7irJHa87yGkKiXWgrdfr8i7vT4KAgkGow3he1vqQwpATQXimoUzaqC8r5ng",
  "key26": "3g3xDqWsP5dqQT1c5rqtxp4GxpcmNbxy8Qst96TWnMokmPgJYNa2RxRLqkFXpnz6hJB7zQmU8YotCJq1mqxBNVsZ",
  "key27": "ZXjvsMYzCNeE1f2ytBVmqhLqyzBvFSgGgyMhixMS9dbc9fx6oP67UQciZK3esiXvybqVb7ArM31x5ReW6oEwSda",
  "key28": "4UYyXuXLswZTKq7UcJmNBGPJGTaAvTXYPm9abfRMy6XXBS9Mxt8L5y9LyMAKKyhqQXGwBgh77C64Hn8dHHLbGv4c",
  "key29": "2ne2qkT3kLdUX5RuSXMwrMPWombtB6UjYCNwpETD1bNrPsK9ste73Nwqjo2wGBN7NsrKxWTztcYz8g57Zw43oUq7",
  "key30": "3J5iLevAK6Nn6ztjnJWJCWztpWbTdU4XeiTfdYpcLWJbLd7Ck7fqHgKNEuas8HsNNna45upb86PQfDnNFAzXC9YK",
  "key31": "5fc2jK5RqCvA5WohrwYxUpJzryBd18Wfn8rLSsybKa1YAVn4kCgKbXUFbEFQfEFWKd9QqDxbWVkptB7vJMTmV7wX",
  "key32": "4SMXMPVjjejhfYhFqRNUQRdwpddGUVsipWnN4gUgFfVxqyq2LN145NagV3WpTBqAv6XtLRabMLaHCt8J6W6nPpii"
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
