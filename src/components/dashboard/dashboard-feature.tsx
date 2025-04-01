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
    "csmJkCwtNBkeia7mjNVcQftz6HSHTUQXz5M2nAWWFDE5fr4D3eyhTPL6J995KZ75CvGTapCcRQD8BTTJCeDC9JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpUxH7z2FH69L2zEBXSeY7p6XCT3o9nWzJUhxu7BhWAxYjixrgLSbQAfVz6J7LjhHkHjaj1cT3vMwqT2pNAvGDg",
  "key1": "2taq2ziXLiQTKupTRTJG1SbgzfiMhZKfkfVSWJh4CEjE6QD7m3sC3fk3Gm3tHLwYm7ZLJ8oyzwXEELwtmX7p9myE",
  "key2": "2bxMcNFt36y8Eib5sHGfVFtEEoutUbwsQzNTwiugmYx3WQaVKBEig1uk3tGMn5UUVTuZctK3W6PudqXBmSo7XKoy",
  "key3": "3gYZbx4BL8bAFNMDbjCXE4b8nYLT1zAYCpnqn1X8h9uTkx3dcSdUePmqPSnnk858Xyx543H7SpQiaUh17PwVC44B",
  "key4": "2vq6ThWvCBusjAVW6sEEZkk6my1nG4CDrp9s8Avci9CBhef8yoqCPTc9KJxjnfPQgVFkCJDnVbCj4yjx7M24yFHZ",
  "key5": "4MVE3xZ8cgpzrfdKxvutHHWKV9bjLAN3EE1jcXNbxA171MqLuTfaK1xcJyyjZv6f5kHvjt27nxrpZtXRpkkxKBZx",
  "key6": "pT191TLWnk4XuY9AT4CUcHqBxzocCjVreCYjxwM1RSwTadJE2D13tFZyvSMaprrAJF3bpazPtqN3ucDDv6sqNxs",
  "key7": "3LULwougAYq2t8mcHakeEBNjEYd5Gf2SCUfVyEHgxrErVCmw1g85cVvtKMvhR1bkDLjukKUhXwpxKYZVoLdxQfov",
  "key8": "5KUweU8Y2tfkuRqBQy8QJqUae78c45CJX2uAggN2oCJcDn6SDBzbvPeW5MwbsSY9bFaBnjQPbWTrieJ1yPscx1eg",
  "key9": "3RxFfjyjMExexJv3PbX1QC1Q6TXjTuUWv7CeURUoDus7fMW9JgWVCJA6fD7b1VaHUPciYdHbrWDJexMq5wjK8ecb",
  "key10": "2rAwek3WkJgSuJKkh59BUWmAAkecoyxy7fSMu9JqZ4D9hC2m7nYXUchT7o1QBoV9wXxaUtjc7s1rmGDqnVay8hTr",
  "key11": "4pF87wNft7HBiH6TH5pNuXVfYdai3TpgNjEQ5AzxFYbqzu5ydhfb7DUHcqeEr7889FDKs7umXVXqgggHc44Eeiok",
  "key12": "3mDFbrteaSJf18FUbZNcE7cJnV6PQve9gh1gPinArhfzWAkvwwrHs2v9m3WHQ9TwyRgpK6CVFx3yL5HQsh3gXtDi",
  "key13": "4JDEKfWHgHbgwav5cHUdkUVCo6gJSQ3vYGEJcNTydUwLgCXpyBzp5PrSVq6i5evYKJfPkTv9ZZtaLux8fvSKWkHe",
  "key14": "5MnoQ4DAU4fdvvgtuEWHZ4WZSKnWSxttWxmTLRR8EWG6pgKc5vDtRVbdcMWmWg3igSGRRVdiEDGr9m52ruaqaPyY",
  "key15": "4D6BBYKP9E5LXgq78aAAG2f9ryffitB9Cd4fMyyionBr6i4k6FSSAgxSSLmEH6mPv5PzoXvLQe8bPGRfGaxNPKkf",
  "key16": "5Nqrsw3qZDBciSpfEywi7kB1DCiouZLWCVL3KiJZdc64wRZCWHroiFMMnor9wXpkybp9rzLUdQxdgXQCLnSzD8an",
  "key17": "4BjGFfmBkhoXUPPD5jFc5fy3G6qLast4n22KR7S2qKH68kMigeCcuVy92RnimSSeTsXCZspqcMY3xYM5romAZVG1",
  "key18": "2NnzzrCotKSUtGVCjZJc2bvvtcgSd7xuMaW1Tq4HFijZ3gFhVwAZkjSynQkFDcoW8rqNK9fbTp64fmUWA6x9fRA5",
  "key19": "J3GnYyXhvAAxjrKproJj1fw8RyoY2AFG3WzeAiaXaWnaZ6ppMs5qEUjFv98Cp4Xe5vvhKj8d6Xb1mNPzpFs8GAQ",
  "key20": "4AZeGBeh9CcQg3si2v78eaCWmgiQUv5awFgf9Qj19VZPeSE8FzNYKd617CTwLVUGVw6xqZWwePAMGrUjTf4sBrfq",
  "key21": "45AxB1DSGYmF3PLV5evikb2gaWzvJ2fXScEfipsFRfmG35CuQchnYDokBakJecTkbrBSYAKyi3f4GkQRSUirALcX",
  "key22": "2GYSN7morCHt4XjJEUVzaea6X5wqz24ofkuidnH6uT2jFRUZKHnsNzJYHJxfZufKxMfCPwytPGjAhTK1QYbRPM6d",
  "key23": "3hpMby4AxQY9wE9Ufvhb6PYeGEBBBTZ3nAKzGuuq18RC44RGKxrqaoqcdahE8UuaTa6w6XcZU3BFrsft7uyJUrpE",
  "key24": "5K1R8TLD5MamNCFLqnfbdesh8R1uvpGcnbT59Q289g7NqSSzTqJ1eXAJeYRrCnLVSgC5ms3kofNLeEBWEGhqFDYi",
  "key25": "2LiGS5JS8SvN84m8SScjCAQzDFGpC3axyDNF8tVt7B8NssFwmKRDC1nQTaw29ehJRpTqbCa17MgUN6Fk5XiHpZet",
  "key26": "3aKQeKhfkZEqcNzaiSSmrr73VwtwV6FAXtKJ9Jhmdq7mqQ6dYjnpDpd6sz2RxTALtxvKPXFTuFnwKswSbzJod7Re",
  "key27": "2cgj97o6LRNXzR2gj6hSreCv9cF4eWjzCrFJ5hQNNcsTKey2zvvxgxGsyuEQq1MS34vskf4XZ8JmkH2pButKQp7k",
  "key28": "2TzkCETkDrp7KS3otLcs25JYBUAvrYEbfGdGjeA6PnoEanEtoGKj4frBPDKUiscWV694R1mePZzVNzRkFJBmdaR8",
  "key29": "5My8TK61aSQoFi8RKkdGLwPNc2iq7UQjd7HZ1YE3fbFsSPo1nWVZm3jYWzch4ky655mp7sEL9XWyMH98iHhPigmG",
  "key30": "FEFL8mN4d6bCxVS7gcf1dQTgXbTqW4mh9X64EKWUEqKRxJLn4SkTkpFQBGfMZfkWg8dybjTMQX4LxEJqdKtkJ2y",
  "key31": "3KR65rdPp4i53Q72wv3iDZeuRhvzY8SvLkarjff1wT92MqQDCC2MaFHrfaXwRv9TcNgQWmFdkm3vSDWFcVM9vDUY"
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
