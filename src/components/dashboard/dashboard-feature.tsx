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
    "2GwE8yRyWCKQgNeqLGnWzBUfKUB1xbeYdxRxnuELVkrYJdWdZEJX7Yvb6acg4XshY3FuS7LLhh4QME14BjvZahkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49capzGY49oGxSCpGX7r1zeHeaAqx99MN4tRw3BcgtgiRp4jtCGyJLLtrk76L7WbYJcaQNar2N99Dr5cCrCcncp1",
  "key1": "41zsdG3TcfPGKwcKxRRLozLvt8bceUpnArigS3thWFwD174SASm4mDB3ZAot97rb1p8BbvbkjqYWJLKWPKdEKaX3",
  "key2": "5Ru9PW8JYR5YGHGf8oDXww8auFAGdXK68199JruLMb2LSN27QC7MELAN3RuPypRSvoKuY5skG355jAAndBhoq5Qe",
  "key3": "5LjTSASJyuhfadShgbZnK6MDn2Abku5yaT5Fk8YeNRGFBCKpQdQkfsD4Tn9rsy2xwqZg45BcsFXKrz6ptFYezgqp",
  "key4": "2HsFznuXXr7bpbmijpU2EZBsCB8p1cUXZG1nLjBBnWVaHkaU6MqmAYVPaNZaD9eC5GSnqSgosLdJ4BAbxTgcW2Qs",
  "key5": "3W4PDi9jJWxV1tUGXu2xexroJf4iSoacks35rgUwRVQn8R5Mqz1qYQaGx88fVfqkz2cwqqomc517798BtSZKZd8N",
  "key6": "2F4zQZrFzuzUV3nZiiANbHYm86P57VovBgBaBR5iN5ytSxEqVpxvfuaFjADRkGA4u9BBY218wagNM7WvsvC83cAb",
  "key7": "5CH9exYegxynaWxBcfhqjfL3uMPr9mKmcyzhiaSpb69RBAJkRJBzVUEZNfEA2gtT3kGyLAvsq5rG7cu1Ka9tEQsF",
  "key8": "5ZVFihRWZ5YsnSihgVpNmfPTsbDdeyLRqxCp8WFz2rrhjDM9aqW9E67wE17EAZoeFrZ3qy8nNxKjZrbbLgkSLQq3",
  "key9": "4Hdc4N4ohvt5cLQ8gufH7JowSkhjA6GPJdZfMwQJKeDbbPznq7yzkszezpFi5q1FtG2pAe65PEsZgdxGsUWMZXGA",
  "key10": "H6fJci7oNcHMMT7dtPg3qPS1ud3ufrVZuJnWBQuCHbnA6FLj8ACTRFyxeENd7iPGFqnAbBhCdMsjcqBCAFEPkLX",
  "key11": "4EW3Uitsfk8XYisVBrDHC4scowpNmAEHMdAYUgtDH3T7iFg8x64zdd8iDNxqZ5mubPZCM8YQY19H9PizfGJbUSpv",
  "key12": "3nHrf7AvhHT68Q1X7gfmB59iPLfZrBZvEBWadEoUTkBKSotSNo8AQkgWC1b58YyCgzDmpUgFrLSxSAuxfp3a28zr",
  "key13": "CStxftkejFE1QMq5Yh8W1X9yrjHUq7pAcWEbcduJ9tky4nqqFaqXQ11zmKtCXRZYjYzocShCcQJVKWcVDmHQmyu",
  "key14": "3nFMTvBSgPsaeTxr4Su5GByuxkkoDYwgHP7ihZTzrCvjn32YopvH9zWmPFnr7SBj6RfpwAZMU2JiCrtaJVdb3KBg",
  "key15": "5swUHE2fn6YsNLNjqUUvbF4SeVPxNv7J3b4mTERGinfWGMrhqboyPAfgoTdF7qGj4qe3RfPsLBYWfmwTqdTvixS3",
  "key16": "2gHQagWMkupKZeYV4z6tfRr14Co1LhEPRsc3RFHB7nN4rddsb7dHcGjb1PDv1wX7R2KcsfZGuGuDwNYohLvuVNJU",
  "key17": "aWCcaxvEZAsTxTwc7qwLdh2HjFVq1h7cpRcYmv2fVbfWEMUXMemBqynui8zKyGoshgBVfyrkHjHuSKpAcN95EjF",
  "key18": "2uYRzLCjdjgqwh6V7DT1fAS4pfZhbLV5ML8Shi81zhtbaXv9uDUdeEPAwZNq2AeKF793YSuKh4zSXm7vThHmXhET",
  "key19": "5cFCKHfcw5F4r4ytMjg7LCTxcTST8L1xUrPxhULphRzbPwNgxsxJSCaqM8LUuwvJ2eVcWr8d3sBvXp2rcJFzSR8e",
  "key20": "5VJXEdNVfvYaAeg2Ck2mqPSG8iPEtX11SJaCbX32F3UrKnQNuHV4d5Lm77sybm6v9AHj2NTtT5fNt8Zn43XwWZpZ",
  "key21": "4n2SjobQ2oDRLHTqhHVBSPCxB3vwGiX7ob18H4rczzB8o6UUaSicXvFPVagnBv3MmpcgRQviNFhxJLfxtiYjAJpo",
  "key22": "2GMQVXDCKCwMWps2uK4yu6RTBGcWM7jaULePs9cPU2bc6mMiKvFxowYYYmiWUkXW5YVRN6Kpe4wodM8xciZ1rskf",
  "key23": "5WXXb73rDn8i6bgwduDAWyXPETtvaEw69geFqLzRpuMWwQbv17Kevv1NszTUWrETGpQES75o5uJhDKKKJSzBdaBH",
  "key24": "5aT59jU7P1Q8GAvysF5KQyRJ6UYhcKucKNZC8SDZ1WVt9EDLyQZsN4v9Rwb81AqBvehS6r8Z1ZPKV8fWxvMqcytN",
  "key25": "4EgUnLqM6vAYcFumgQp7fKvBHBmSKHW37X28rBJyQXGiuwUtgHcEfeLWQPWkYq9MNncGgj29TC2pPm72o1yUTCnD",
  "key26": "5ekxtRtc3gDqhPQhX5UzuNHcM5wndDvQ6SEa1spsHu7bY41eaLM5M7AaJHJ3sE2KnMS1QRCHW8N2FoNfkuAiyswD"
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
