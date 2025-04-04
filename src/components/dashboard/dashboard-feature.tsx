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
    "5f7E3sdPaaACZ9Q9UJPJ23dwLDpiW1tX4FShDiKJFdru4UQjjdsRRYDCKDLL3aUeCGwEshG9YjVN3B4NrDtxoB67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXPPLNXDZNmwZZiyowEAQkwbDb9UTJC3KEYg6KD5N3xSxzfeHeHrcW4c99wNhLCcY8o8B8E1GMicghpa3nkCtYB",
  "key1": "3jBLg7m94KQazZX4EWVEFUbWyjf5ySv4waf74uRC9yvVdFa5xogAVM4BYKd626agfF3dgHvYt1BiB1Pu1mkCadCX",
  "key2": "iavSnvex8pYYgvKvV5RPA4C7ey94P7nMaoRxz9habCxEis7fkCiTy86en6tpACpQjv8jpq9jiZ8EG3wbGJk3je7",
  "key3": "myGhRyAVTjTXD9Wi6gPjCBiq23voXSdzhFxHsHzVPrQsNY6SrnQqL2ic9XFsbZ6pswUbcnYHNFJWJ6dNeE6tX5o",
  "key4": "3xVjMX4jRMNFVtgAWR52ry36s2ipcdFXT5VyXUZ7D1isbast7DQQmXmXoc2y3fJNNtQVYTxDAhuvfrQBTakvZiNa",
  "key5": "TxLcrDFfKAWT5c43qeXxjEJhqhJxJGyUGN6meVgJGDnsxrEt4qAJNxg7bTtrj7x25KLWHXXULh2VpopqdZJtVRV",
  "key6": "56dEgbTwNKsbGkAGp4hiUX8xiNTJriExZPJKMZmA564hqqbtwY3QrXqvvWC776pEgG5MoNRoTCTDtQHbPgUrGrYd",
  "key7": "5i9mxwdpUfgyDapNZyqP74FiQjtYqAL7MB3SafEUFRKAuaNL9a8yYH3tR6gkzuKYFbUGHDnpL9v1o9M1BCCn1v7R",
  "key8": "8XxZCpGVsEbMQA87NKC2GhnL1gwgUvN9Mka5LxKDPiD13JWrydo91ezmYrUkEXyxgDQ1D46XKF2T692y7a6HTBs",
  "key9": "22CA8F33Z6Dv2WB8VYWyPbqj8cB3ihGGazP4PeXbfRNbNXiWp3pMocnEVEyaL3hgrMED12e2HESDuNqnVsaf9PDh",
  "key10": "3PgLygfqf6pA8Tz4FnU7H5kuuHQj5QyiSdkH9QMYLCf6kt5bdxA7fGkjT3y5Ex3mA5udBadkZr6mMfUuP6TrujiV",
  "key11": "5jagyc5QapWCZuP9jCcmzmSigUDp4Uymk3GF2qei9SeodpEQgQgiHoZdSrBNnFR2kKftkMGTP1j9PGMsX1q5F6uR",
  "key12": "32QtTUsadrL6Akh51jM6JhufEV8bJAFAYXedybvVDXr9wYTLs4WZohe4vXV5bbfiabgJkzU7EDehaXLwc5A5RhhH",
  "key13": "6AdhhTbXU8FvGGfuB9GDU9VXgKYpm3PzV7xYTLjKhH7Xt65UAZfUaZwQqtMDUdSz1fLNEhsG4bcfz6iXrR9PCSs",
  "key14": "5tzBy2vd8WpcqZZbMrx7EE1E42US95Km3huexSoQG9papXgafhYrnesVVmM7wKWAuUacDyMQXx4xdKHUS53sz6Br",
  "key15": "5h6z3Bt753L5LmmEh42bKZtMBP1uBFoV5kRai5rK44dTaGK5n7EnAHHQ3APtujf4F1a2NnkyPR1srd5MFGDeLcnW",
  "key16": "28gWqMmvDFuVQQsoknFrm4FmXqbL9edp8X5tggzVsDou8z8UD7P1dxyDm4nNUpT41hBUgasi5bxjR4Y492FdZMkL",
  "key17": "2UjvV29en4KcbDMAJydM9D2cJmw81h9m5UHu3JPMQiUgMuYypufemeJTtTzaBw6W3BSA4REAk2sp7CyujrE3jmdb",
  "key18": "2khrcaSayxPDN9Lyt4vJQWHjtCLF7E4bx8mEuSLfJN4sXSLfeBAVg7ot2kuJ9CMmDGnjWpeZgwb6Y63A31ZDS8JG",
  "key19": "XBxoxQiiLCcb3uEYdJjafKFfBHTPmgVt37mDEhM7X6oup2sT5nJSnsxmuW7SM3CH82rMfV1fDgwjZcCjUrkCkhv",
  "key20": "2wrdPejz9ak3hemLgEHxWaUuKUFRkRhjR71W4ysVPWiyJqFdPKJk8dfx9euoW5fzxGj7ZEhX3pp8YwT7L2NePqd1",
  "key21": "57298rPSPAzvYpA2U6EpdfgZRKBfN2ffBdBfL2gzUKtDeiZhf69BwW8vZyE1Nh41otXU9fbESZPJ2FMLGNXXVZ9b",
  "key22": "35yRd3scDqSshe647Y7cii8pNeh9VTR6R7yC2TmXMtN1xq8KpbrXacyvhARH9wVv3UxsZtaRoYgv9hkfDfWnqz6f",
  "key23": "3BedxRr4eYdDb8nRcWC6CbSyXj8FrdsySvAACgeKx5H9hA2FkafDjaRbGgq38Q3gvFcmREeuGqSrqsGu3VyQFXCg",
  "key24": "4YCkPmmsMzJm8LG3Fm5KVDTSqLXAqW7CzwPCuDeSDU8Den4DRDhrZK78SHKaz53pT5SPPzsrELtoEkDNtbe5Vg3u"
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
