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
    "3bkaWUBfw3FAnkqWADzJUhgs9b3EZWDZhTxayPXWWmNZSSZ9P3ts9ZkBcrXQMTapm1bzi9Ywv2SqLyTwLoSBp2hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t64DK57PFtH3PWHgJhDcqrjruRGxdLan9RsJXaqsAtPFQ111ZDUcQp7Sonrqkn6RDPUPcxpeJczCbYNSjuXmeFh",
  "key1": "2r3yiQKQXSABVEdB1mQ5jfZc3bvCEvWK5cJyL1zEvKrwzpywCnia6ATKxc6U45V1SFmNHsFg3cxVmaqaJ6nd3YvN",
  "key2": "4QDy71gpKumA35Wc6eJpcSCGimeqbDSaaZNPCKtkrpawVCBi1fbHWv6FJCiBbq3gbX251Fqe1W2UDB7FWp6LpEaS",
  "key3": "r3LffFwg7daRhGt5kRULL871KtmGVcNcX17WWJnLSt63dSYFRGkfJiVQzDSPs5zm8PbQ9kyUZx6gzXFnfkvjwkd",
  "key4": "yXtmAAJhb3DdnVX3GAyVGxzUC1219xFJCMDqEFRaegGg8d2Q94hS66vNNhMH6auyGJqfyRjNipT8XByuKNbZG5Z",
  "key5": "5Y5iirCJHjoSRKEkL6CXm96EA6xVWxhmZbWytPpJb8iEDdpWhs9KYGhgapaAeCjbP28Fe3Q6kVkoQto9DdoMozqX",
  "key6": "3dbBRgtwWsrfhygs5vF43AGK66L5oZfsT3GjrG8QATywSBb61rXFgub7wg5ap8DyNAqYsg1qSYUM8S7YimBjk3cv",
  "key7": "5GKJZEDXdub4J1aPyq9GyCWtnxpE8DCXyojFu1duyhhPQtGKTZc2rMPouN5GaP8ysL9thnEEt85AmnrxLsgDWNnT",
  "key8": "22Tp6ygWPdoV97YpcBkESfUJ7c8wS8uhYhrkY638zsVD4n9izQDMS89a5izHsgCuf9DwwHXMAtYdS3sFdBJ1FMDR",
  "key9": "5655956EszaakJtfbHgH7ZATREANHDgSsJqPAuLprP9Nu2zfRjXBjEGNoJCo2jKBBcRq6dU7rM8SqmhUGTbssz3e",
  "key10": "3EwFGFWZPJ6Bd7CoWjeT7PLfUvuMKopTJePHVzFSUrx8p8iq9Sb3gM2iY4Fd8wv63qFHmWb25Bd1NuGQ87M3M8bz",
  "key11": "2FVbuFeekCbwfVejSq1Cvufm8hwp9c6DMAG2gBmpaoGj7zkBPmosAMNJj7dm2RGDMdxFtsBZSuDu6BuyT5tTKv1S",
  "key12": "2KbTExR75WqbTgWCAzaV1XMvfdPwLPs8mRYUtJ6VPuPAcr4koZUxjWLzowTCyd525r7H8ZamEcQVEQHLqe1zrJUe",
  "key13": "4GbcMTd5nq4FHwEDJ7eBgPEmJAjwNx8Gbzi2zLQm7zJrctpDsk5wVv8g43WD9mHEgSY1ihFeakaU2F2U6PRzU7NW",
  "key14": "oeevHQvQynUdkApSnebu6JgzLQrdZPVaZfxNGN9qmAoncychyUBL9BQHzSgxbMuXYyTo4Jig3MtD6pWVXmWcKXC",
  "key15": "5745HFSQ4WT9bEQdf7MaFjH8y6NZ5u1k9egtoxBo4bd2CCGwmVUetR3hKrUS2vLK9vGiHiz2szmmJrwfCeRXePmt",
  "key16": "4bGB3YPwAnHGkJsihCZzQP2Mo6Mf3Q9iKhwosekBYPg12FYxp6VBV3KU1t7y2HtnRAmZGW2cB3Pvh2STxpAeNXLJ",
  "key17": "27fXr4HCSWdH8YqvHP2PDmW9wdXiBbtofkWjuagtDA4dAqmhDisjNw9bt1gkkpEz7Jm4nBUQHjogvxaEsY7Ku5sA",
  "key18": "5nvQhRFpvRd4Wqhzc6YQEPP5PrBtoM2nRBf7LXdDbvocGrAQ645Jcm3PEU88FuVvY9vbHjYDYSCuGzfo1CMMEoSg",
  "key19": "2KzcjPkAYSyBG2RTnLa5sdv2YB8UKZpyDB5zngTpRqCN2N82WGfMiymHc7NzhmLzb1YQvwrVm6ANn9PcgRvRQsdw",
  "key20": "S2f5XFM3DvE5xfk1rjd6k2LjjTVGdbWFHuFXtc5egUgDPM6Gad4CCPJZdcvzmyT5AXB9Q2grwvMhh9SbERWCnWW",
  "key21": "2v8oEqz2opzvoFbj6KTZTwzzycNEcRsvYxPpW2AT4Q5e28h8CP6TrW3nE37HK2BNs43ghj7LLtgCtpCNWKgbUMAS",
  "key22": "3v8W6yFCb1wUTQmEMQnmEL199Y6XndtXLMbiBdk3xeZdREpBypzFgpVVRtFZorgyoicBNuhTipQPNad8Sm3A74sD",
  "key23": "3fxsVf5FWfDZHtS1dYrTNhRtgM8zxuCz9HajkeVNvAeCYrMc49YFs2XWx4K398bLTd3BQjwM47ZEoLKisEQXMp7r",
  "key24": "4nZ3XwGPfqUwvKyjknA9Dfp2iWsfeEQBizMwzCR3ssCjwxkLZkWGzuzTw9tifnFxLbaWcuwXjcmwwSKXbvr6gYbZ",
  "key25": "3tMyq7zKKdzjfHQCAKn1GrAZfxs8sXYHQcWtahzhyJfwhuPA1GD4HvamH5otWtsfhkJPCzueC9KZsc1iJzeqYQVb",
  "key26": "58Qpw2DPT1BQ41fuLxydommNokp9iEwNb9Txo2WbQCnNjkMeKjbEZGhJRzHwtKWCZwGtGxjurW6czBhtFZXkRUzw",
  "key27": "5QfzjUhTjyxGX3B5DtYuK6ZYZpe4t9LCfjCJATaJxZiCuVPCpv5XN9mzoRjkpMRNr7CE7VRkZXaEPsRYGaovoxBU",
  "key28": "2k7E2nngbuBWi7N4o5NMbs3yTveDA9TqLV8LdFk3XsdKPm46Rrn1Am7MjaUasvdsGqxUDqbVURY5Q4iTcywE4fGv",
  "key29": "V93V6rENvoFSRMBEi9xGENq6RbRkUAHMei2e1oePNYpr9Nj9ijuTNYHn4DuiiMcf6CrZNVQCGDvBiBpHLgLshdZ"
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
