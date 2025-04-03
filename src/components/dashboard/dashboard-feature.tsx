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
    "5A5xYjqcW1VCeHbZBXXh4oSHuX2ibzTRuWkFHTw6eBjfD2pRKMP8JH8uHCg2qgqngoELymmhv4cjChxZsXuzU5Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxd7wG6sMiFMCr76oy6NcXEDT58jqggLhNHZS472TArQu7uN36YqNfzxiPTbmpG8iMrRWjConLTcUxWQigtjtVw",
  "key1": "3Z9qzGRULHbtfT6LAweacsKhTgbYocEZf9wcR8cF3DE2PBuZqGAWnfzEDkb4QgJdmJm8KqeafFDGduHa3REoQRiN",
  "key2": "4TLNBrqhjRiChSrgBRiKxYDpUapvsKqcJxYYLZZ5Z6SBLTxT9F99bRQWNoSL9vs7RTcBE952c4LoEo1nvufHg4dk",
  "key3": "4m99stDMQa7L3Unh8ZAHCw77X7iGRuit263LhwYruG5hY7hCeyqYTbpNDApPamvnjKnZSikAaFg3P69RzntzaWLf",
  "key4": "iRNiUTBwTc7e6aV6uXqN8GrDpWm7EWD3dyjJLZebjzy87wRs9S1QdqtTCc6MjSrVsj5ioAnTf2RLEbYcYcMEpua",
  "key5": "48PxSPodMtCkdysbiTK2wRsiR2LiuuEqUerCQ3SZzdroiiZeCNgZjcuvUzS3v5PiiymPhDgqqhNS2LyFDtvigZcP",
  "key6": "uYcPYwidaMxZLVQFCT95Q9NzzvqeRnQzhFgebWov1hYPdnHArgcBtw3FkgUgaQF2Yamqoa9gJkS7H7yk3xYbWzz",
  "key7": "5DWdAazBfkypGRofUoMzMGwpLJeHLCMcHW2m4ZkFJAXpY8aDa4XYCe69y5fCTYnickR2x9NM3itmhZec7uWNCDo5",
  "key8": "ngSupg49vXfQHAXiTMPki46RYpp5qVypmDtkPQA14LdFteFULncMXKmoK8h7sXDT8ujTAy8VLinpwSWenagQerg",
  "key9": "3zoRXXE4ga18RYKf9uDSUKqtPKgdzmGLYJiiUNYxRitNyNruaNBfbSaJFBrxP4FWySvZh4GwgzFjF88Vsyrfkezm",
  "key10": "4B8byuoaVpL5V4DSMRWiTwyN5rdsbB7dq8wfzNpHnNgZuTNUHJ5bZftMP3BhhTs4KEjRicDzBuDUuyre2pNKKKNL",
  "key11": "31SBsqZKW9zTW9MC1XTxTmnqxcuG8xH1X2Nx1WMZcUzmx151QiULNSX3Wju1QzQmZ2E2rRqxmstgrY439u4xDren",
  "key12": "4nUfzx36kbdXcgx85WvAFfdS95azmUghqP81cyHqLSV6zvwtaPBvZJTFm7oDnDGjoCJcBkdMdtoNjCKKWyU4T6G4",
  "key13": "2cfXCFYQtVSfpPuQ7ZhKZFGAGHHrW86mpBwmW8HQS16pW1jgPc86G3FNXF5g6kZJ1EXuakM7WXhfH1ekoVPmpdYc",
  "key14": "5rssyY8az6U4e5MKgc7CJfarCzB2YZBfq8zWsRfgeagJbWFJjf7CCiqhzyH1C25742RBKBPJdsdPV3kJywc2Wgev",
  "key15": "3wBYD3NeJMVSEZzhFu5BPW9RYouTbDdeq874McFc1b5nkwX8cLep4x9q2oiMzPfC2tTQufaRU34XRZu4WWZkxkRi",
  "key16": "4axJwkGcuk6UWViAoQnGrS8w88cVt4tY49XC4Fe6C4dGito4aC41ANXRHMQcn6etuvMHM1Nptp4f4XGbSjZVoCYi",
  "key17": "3pNPpcawuchu3fiwNxECPHza8wp2WWLxRMpiLfdaURbnrRmSkyD88Q2FqwZ9F6Af8fegfKg7CZ92H6vCxUwc1Cxg",
  "key18": "2YNubhVrYfB2SYKn2eSWoNvmypKaCAFVn2vp3eivjpV1EpL6zvrjYnhbT8Ckn8VaCjddFkHwJbUYdXV2ZMsjNKoE",
  "key19": "3TfZcgUifKFTVyZpSi8RiGLJfh4KVkdbXkEaaZYJVqYmdED6WgTXUqJWPiijmss5fhNq9Y79RzdkVsMuzpsJyBCJ",
  "key20": "3TDi6kMvpSjcn8mcU6p41V4KR9pTcoEUkA1FeASSiuvx4YJwfN9jDV9bavyoBRGRrcxsQhLcXhEnirDnB6nepSD9",
  "key21": "RBJzZ9K4EPyNvJTco2oxFzHZ2GCz4du6k1J4UHCC64xhgSCpHVR1pPWyyNHP4F6GGnyQW97Dm1oxGZaQvQSCwxe",
  "key22": "3F7QesC8FPGy2xnABm1pVi1CaPZQPF1d5asmfHtikRfCjWjkFLVVYtnfj1fX744VevDk6F4nMRCXEC1m9p8EvHiX",
  "key23": "2sqz8S9JXC17HBnGPj4CcM8euZSxpv7XsPC13rWnk2EpZtUXQtGrhWqvxv3rwKzZWJBHh45vAdCXqAmqxwGE75Mr",
  "key24": "5gGfLCNSKFgwBceF4zoMei2dNDTtD9PM9Hjewt6ZpujZJpQGLe5C7tQ25Akcf6gkqrV3xKpBWzK9pRhL3p2rsrJv",
  "key25": "M1BcqpanRcQMMxyFabhou6qB1gETqd3JZRzvaYL766DtQ7y6io43UoKzgz3Le5JA2nWjH4XCMNTqusVBnXfzppZ",
  "key26": "4LQQ4WqvnvZvRM5PTAnbYRzfED1Q5apZtiW71ixz9efBHPxbnYxTKwyk2FY99QHn8u79pFsRRwT8jyErziAcwbPS",
  "key27": "2ysEJdeB4Y6oaTPTC6cW6KM5KpRBZnCXReRbccXQ5Qc8PHPjWeuMMDjVtjDR8fA5ZrjKFuZh3sxdY6QAgJeT2xZr",
  "key28": "41vNaeHe2rkJnMppGSiszi7JUMGfGbZq3VazVPJ724CQAhoJxPE71RP55LjKUvKg55cbGeRAU2M1DKuq8evW2z3n"
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
