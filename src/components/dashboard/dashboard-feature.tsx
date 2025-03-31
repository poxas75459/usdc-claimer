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
    "hdBCwNfuqyKoCJpKRmuRpv47XMTzbC22EQREmAYx2Whe7eD1Gxb7x4Z8G3xVY5teArgAFk5n6uF2FwjdFW4znQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEYHtcEiaSAJEgS4Sb7hsEfLTgZaUXBGVZstf2Csv9i4jzg3sPdfNmJdsRaLfPiU5ir7J1Eo2hsx5LUBGJWyqsB",
  "key1": "Hf9fPfB5yqPxMAcR5ufZ37hk5UZHq5DxzExfnM13SuiobYU9nv4fvi1LWAErpk2yyQn5tpWhZ2U3BrN9WTECN59",
  "key2": "WQuBXrZsbcf1e5Hh7BDgsFPpu7CbpEC1PL6LuUm7MMpcEc5dVK5utBe4eEKUJ2BBJEjrbGZknq9wZQ2jJcYGquu",
  "key3": "ibSnWrzp9DkES7tf9WGCANSxfT8fkpRvmWrW3gid8gaAcTT2h8UsWhD3bTHPD9qKuny7Q368HXtDpsHeGjtgsZk",
  "key4": "3gvUTGEDjVpyzL65ZVBYh2ev1M2baHDcMX11XDzYnP2B9DQazK6s1gzqK6u8sjmsWtRa1dJqX3c4xs9zkR3vYiNB",
  "key5": "4ZWAQjc4nRfuQxoxUEp5m4LMTJDRk3hk2FuKCM7NzFockq4x6WeXuv4S4xzKTeR62DcV4HZh8rc5CnDUM8aMLBAi",
  "key6": "PA7vYbKYNq8NJWMvKjG5SAN3MhoaF63k9645dPsyexwa8wNGk21eGA2KJrSu2dqLigdHYManbUsUQ2iHrapmfhx",
  "key7": "4N67gfRkxM9K614FMGwkYmg585E837pLZTjANVgSp3GRWJNTFEM8g7MqUHa4fwUNqUjctkLRkAyPDTJ6jGg2rDiC",
  "key8": "4fsr9fDdV1ePci215QduTdKLnWTSkWZeqov7T4MWxHxwUBFntbmL42q5Lre8nM6QB8t6maZxpUQgziQjc3ba9Rjk",
  "key9": "41K37X3hVj2SySwRiwA2F5xFJo2x6fpKdnHH3Vew8t6wVB2eHrYekQTuJdWiAWbiNJ6DJNNxk5x41VXmhnMv8NPH",
  "key10": "4PeFSDUmqXbUJs1SYpkArfWaTvqwtUUkxXhjP9qgE9SBzBMf1WMHV3qLk4Hxsex3PnVaso4cgXF94CJAwawj9c66",
  "key11": "LUWDswvc751kdb2vdiHKEPe4hqN5pPv2LWtdiXVdbMqTKLhRvMPK5kkky5ehBvBKswcCA4w1u6vRSMnydWKCqxm",
  "key12": "5EduZ52SCxdzXoFNuSdB5Mavyxsi8mquZNdUXeTTTRRyBPAuVyU2yc261W9A5nC71YyKfF1HbWDR5jCysnKMV9YQ",
  "key13": "5F8pKEBpYnMdGqPpieKLDitz9NZLrQ9mXEZxLTH9NxzxwvtSUFxNpisncGnavw981LkMiK2qvkf3sGt9ZUJCqZxq",
  "key14": "26ovCwdy9Cqz2cC3KZu9XFeM3x8Kvjs92iAWyYVyMv8yXxghSPTy6Ab7PtzrwzUiq2nKusTG59y53CHHastQ2CZG",
  "key15": "4E1Q8GFCndT4tvCtTzAxixc8WyqyHKJLjcNRAxW3UvEz5o1ZRGLWVbEurnvcYK5kLkYznu2Rbq66j8FN4cE1VzrC",
  "key16": "5JNiv1gU5GnPAmfV3MsCJbhVTup8Amxu2PEPE6KMgzfpYHm4KdoHAJaQwemX4y1yuJZbft2B2JBrcpCMd5PVjzVZ",
  "key17": "53dA8DVLPxYohKkaVmQBehBNyDXHbEG2FowH7MeAsSuUfkUHqfhanmbf9brqXH6ru2eFRfs8VxSZCyYr7RozjiA6",
  "key18": "3wZaqZxpoKw5WFyNt4H3k6uBqvRokf4ZVxKBPNabxUGMEAboqJr5fj2U148A3WMudxFhPaMibwLi58xDXbz2ieva",
  "key19": "jwJXg9i2PxoiVzPbdpBR33AX5fLFFdNsDqFi9cVK1LPmhUWE99hQyVfCy5WbQxvaKgydBLeMedJs9veP9Uw9b9H",
  "key20": "3GDgfxKyg2JA1bSEuvQmZYxLAN5HmpSg51z4xS99hTQpr5m2Lbto51bqBK2NW5npDcUMSCj4SHj8L4X4kX5v3kSe",
  "key21": "XtfsH6UE2HUGJ4hYXksWHdpK8YSz2cnx4MAuesmUw2Ri2emRH12QzCbiHyTASbdDy4Je7McE3HRodJdXUN86Ju3",
  "key22": "2pELbsmcWTzb6truiLk717fKVz3CoxTZjhAk1UZUuS7nRhuHfRBgTEMf22pJD3g6dzvxxn7ufAHeR2nHRDFR7hZN",
  "key23": "gheCWpm5q4iXJ7KTawBXwGtRskJKd7Mw3exqpes4C4iovPnRAJKJZ85cvgECWRtG5HdbRiGm5kbyeaUCGx633QS",
  "key24": "3maSmmZ7R17yyW8xB2GBL4XUCnNhFyzjHUViqzHv2YvsRnUEsGbqvgBgY4zAzXhH36qY5FN9Vh7V9xvh3ANpcbig",
  "key25": "4Ky3bnBw9U1wPwEfTxsxodGhj93y6msfSrBusFMmCPrukcXiwNy1pgy6o6Q5xWrhfotLx5f23S7CMVmHsR3UjSP6",
  "key26": "38tqyEAEQU2QfEgAbA7niFkJWwEksYnKanXCuA87WWAcwvokeJkUn9NYW9cQQtjj4UqFe96enqwXaWHk2YWdrDB5",
  "key27": "4t5yjKUtjNbDgC3p5dgFcgZjnxvMMyxTyuoy9j1DniYjsAZaDxCWXnVaca3MGxu15ziVXgBZtVQJhKwPkQiWVTZh",
  "key28": "2337nTQ4hSa4wZn9dHTWAssBrKKuCSgaooNyijfjko5Wd8fpTboHK74vwSCKdBZGFaYrQ4fUPh8UhPwpzDSUA7dn",
  "key29": "3CmVr3J6UDyhL6eFBC5DCFqkbc9z9kVU51Xvn4CrsVEvu6hiebe4yaNqwZ5jHRUhfKp52zP8XRhn5sqCn9ejwAnc",
  "key30": "3WX1y1JC4yWMr9RXg9EDCgZMqXxNeSjEHdUnXhgGX5Xseokebg1XWjkehSAtFLhPMSDgiJakjsubLPthNEGooVnC",
  "key31": "uDSAqhriHoP2dbUJvpfABrQGcymkdA3XxN3hdeUyacXwoAoKhDWAXRt2tTkSBiNLPNes9LqU4M23MeBVbUSBGW1",
  "key32": "3WvBFZXoVM3jXvrSyGWgP53BqsPaq6sBjTScEutvXZ2n4cDQfJvWRxYzXqm9wTQCH81Y2k1jkjn4TiMZjMNRfbrp"
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
