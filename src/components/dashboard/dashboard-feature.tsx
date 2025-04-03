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
    "WZh5X3Vu7MRs94eP25wCexYdeJmxU4icdYzYiBwzB1ofULDMERU6FVUuk9tvDnS1paZaYejCPTBTmjXJrqPaNR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQjAcGLoaUHH3gWmETuLBhmGGhqjDfwkQt16zZzPV7vZszHm54BYKwtHDNPNmtyRR32ifh3rxj1yBEHeavf5z81",
  "key1": "4ozcraoqswXJetRnDFE3PZzRGcmuMUeQ5ov6DXARc113JFvvrQ7y4kF1LhJ429mFewadeuVM8wFbFfedMSLE5Pfi",
  "key2": "62q3FbT9DLA5XWsktT6Rgx3Xf4PYnjvoF8c3KepLMrmJbSHS3fSuCjveV1sHdxHF5XHsn5A39vavqJpxPrW1851z",
  "key3": "2rqLk79uFmG522G2SFJhEj3aaUz3oX8RsefoLZzrUV7173Cd7cwe53Z1mb7VBafgm3b5B4gzJcw2k2M7Y8ZuNkXr",
  "key4": "5AoinYXVMYQuQrkRZc3X6pzcTUDdV5VxZwi6uwGjSEoiZPaJ6v6nh5SdhkySRfeMBDPGKGKJtePU6845QCRMNobt",
  "key5": "38GT2j9scoZQmc6W86HMNKaNWycfRLJLRCxEpU3qwkLW5HH4pp9xMCMmoDhBDVdrq1huEZc8QenMgxkVbRbJ6zxC",
  "key6": "5Nje7CWTrafqGmm12XcaKy2esZmrdx57oxDihJCTVfgGDRzKmJJh7fe2ByzRXgrXrg9SmdGALSyx2VcFdegCNNJY",
  "key7": "2dRHyHLVzXaYedQZrR5nsaPHXYAoYhdWNtfqAKaUgKrobC8XbkSYjEybLor4FCgzaohyvLiHZ7iJ2JWHvWRqgoGf",
  "key8": "4fg5P7oZ5kyeuzsKoNXH1aHQAavJeCN7KoJW4KYRWuRYkaANiAxECoQKZRRsZf8qSdzi5PrfQfkDnMQZzuUSyZff",
  "key9": "56yHRpobDNUpmykwpR7Aa9jEUjKonXbX9WbxGABzbjUyG64TP1hVTTHn2wJgFZuTQi4ozWAnK7eG38MMSsgoksRz",
  "key10": "31T7KsLxJamf6XfBd6XHBYLLFgGAuy3e3kdYZTmqRLKwaHVWiE4DBvBrZcR8BJiE7EPDjsCHJ8KsZLNvh5qpiQiL",
  "key11": "3cFNLrdBfRVoZATo4QrZQ7c8XBjTuSBE3NwJPskVr46ZNEnuPQ6EPFgpqpki91pFX4gwrx9TkLkejqSfMCy8KWn6",
  "key12": "5ojpe36J7AXfsmtQ9u62VyfrW9hDZWo9PZaSCMbNdBz9tSc41RS6ErxzejvtEVqJoUtmjAjdkvyMNqjpB8qP2jXF",
  "key13": "GqHHbDkHgJUD4r7G4ATGPFsguX7gBBxCtXuqgQ1cUDvqkkjyzRGFpS9pc8d9mGNh2afd8tNn7ThH5oUFbRnjpD6",
  "key14": "3mFVKKM1vGNiBbzZivRJdV7wfbametuGZAuZ97LPz3qT6FtYd5pRt3apkG38ryyDvEtk7x6PaUoH3ovRnSChGjDU",
  "key15": "3teEUMrH3RiZSP1ZwmTEoGthHnH8Fsah2ZtKY7RTNmqX8LZ43kzLy1jis9Cdbpin7naeJiQquCcgng9vST2pSMqp",
  "key16": "62TZMns8nYAe8tvwzoTdAqvozp2JDMDUDHSZCVF63bU8GKU4ibM6cbEXnwzNQJiQvC85AH8Nf1irP13izKbDcc8v",
  "key17": "4P7zrSVYhzWiMwr2K38u6D7WpHUYRWNVW55A8LeokUCNP9toMeSWJQ2ejeoqGCJ7zh6dBHcUbEGh5eUJ6sk8gJac",
  "key18": "4FpqoNLsBQ9Z44kHTgYeiNofAhZZPZDusa84hwgw3QHje9SycLMN4oHdvARBNHZJeDi3F8xmn5TMfwkKRr7fY8GE",
  "key19": "qvVDx5KxQSzTfi9VYLqHkLgJTRrDdA1EmFzk8WQocHUJareUxPuDQxSr8LGf2dvJLYR9tTpN2i3NwpcCeFZSmev",
  "key20": "b3voxqc5nrfpdCryhPo2BdEhWyXtqarR9w7ZtnSaG97C3W5kvQhhRUXZC3z2c6ks7uGhGuUL9gPEhv6jVgmWqJB",
  "key21": "22CfmTACkGPHVqwNbGD14juma1MVcX8qsbS4q1TXQHJyyiEqH4LMtd8pDBzoCkWkcrATEUyaddrgNm7jWZZ5tFZu",
  "key22": "36AXfAYCcfNmsdpt2wrVkxucWjzr5rqxBeqtb1EYPggHSpPXonayiPBMcYA421En9y661agWPQFAKUNtvqVLj64e",
  "key23": "25vCBjdJppTmCLMUjoERLDrTk38mBwoiQy5JXxUSMvrdzJihRzpzXxEFmEgEZCGAWEGsSST8kA4uPnrBwuTy8bbv",
  "key24": "3KKbswsUyuXmQosTFBhLKoZiGZ98sFPoyCtu9SVtAmP1aEC83Chf2fR4yQw69Q5rEGT7Eq7Mq6fNzwXBojCc9U4o",
  "key25": "aX4pPMNcgQvAJ4wtC4VuPpodHKs9MY3yVKCC2fVuJLm87ZNWr9PZK1JXhdkX69kjjgpGQCe56HReyqiwzpkejnL",
  "key26": "4KrEyj9e7AHTAo4JfmvCXnxMptHtboKc7Qp2KStB9977XL36CCi5c74k9SUo98cWsAhE2v8brDWf5K8fZiihQG8a"
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
