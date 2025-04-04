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
    "29NjsBbm2kgNCtZgrahuhKpwU6HhwcBvCReYvLGBsqbDe7H6BDaesQfwC3aZuWMp3caWsWQ8YS9GCpzmCVJK4bYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zR2kgJaEcvP9kyjCCzcoa42FMEM4pzMpDLgBW9GJGXePPUnY3RMTkvDqieMj9jjRnprsRspueiGfkJ3xidz3kK9",
  "key1": "2hxNBvtm3ExxksFT4q6kX574wprqjUnjuurcmM92dAA1tdbdjEnYUaUqjY876c4gSc9nJ7tWxy7gxrhYaEibywJW",
  "key2": "4JEbnc7opYfj26F5rZxiZ9yEAqjwcg9BENsSUhJGT5hQ2ddtyQFQRUxU7FrbfrkRMcCwq7aTLMFFr9tNCKbWkbQf",
  "key3": "351ZZYZkzGpuSG6NKq3TvPJF1mwTX7ReNEFmcsYcyC1r1HV2AGnM6GodS5uf8Pdtghg4aj8Ui7YhKWAJKvMmZQ49",
  "key4": "5gxpeMGZ5YJsTZwJdYYfJ4WKd2yQPNm9ybQk74cVLTAZyZGAn2fhBGUnU2g9WnQUCu5LFuAzXm245coUHpsvWsiW",
  "key5": "36JRQLXREtB2sk8rNhtExp5SJB6AQ7KUN2kjvvKjhRt5zdb5XZjxaiReV63mwkU1zZtVvSD5M1BdK24yYEDLMZmq",
  "key6": "63oEDnfzMZYei8PRydMhJiao64FkiUvvQPwqsHmhH7GaC9FA5UzCL5KhGHFW7WrNiJ4pa2phzT5fpZB8qMLicFvr",
  "key7": "2mXcK3Z3nBq5jG6dBmr9uzbXYu1b3DzrdU6yvwugcLpjXFNGPEBFn1gEzb8gQj5EDeCMaNC35MqgQGc9EzSM31oB",
  "key8": "r6vPKquGQGogzYGb4FzrB7b2XHXUr6YaLpZxhKfo9eWZEcfkvtxRMkeicx3nzx9vR6Tb3AeLZ17RfjQ4B7ZhPHS",
  "key9": "5qxqs8ztTC54WWNrtENft23ug3E7kCC3RakJQkZmmVFWfQJHAAxtNALSTq6nkYroW2LAR44YVC6mbW2FgcdoeYVA",
  "key10": "4e5F2TaGgZVsGduXmc5NfySUyyyUChfUMUi5GBMcbp6Pju5vDTrLYwao7n4YhWTApp8RCRKD6sXUGFABNdecbyk9",
  "key11": "o2ZypoTsiwFJrwJq5zu8FBRPRTksmnbrDDRVFrzrtNHpnC5oHZJdf3FUZ48Eq1kVnU7JFj4NhgSPwcQoTCQ7QSM",
  "key12": "2U19Z4LzhtBhPiNpZrHvzirPJe3fJpFMG93E7x7PiCkeXVTM7KWbf8ZQgXS2UKJFdAwfAdgkT2L1GdUzo7ZXB2Tx",
  "key13": "4UmVPRfpjQPifrozfdGYP4uwA6QpdMAJrvFqwPPHCG8H7t63FYgeG3tNb6bu6LDNLzRxB6qUAA1B3YZu5UJ3Da5A",
  "key14": "4LaKA325qynzXBiWv9v4aW63FvpE7bXrqookqdfQcXwoJnonbrZRQP58TtcEfT9wpr4YXJjn7TCK5bNTwrYaaCyT",
  "key15": "xAZX9d8KuXYCuPiZQBLdKXWatZ6UsCyvC2N7DAkCE7kgSZqMMGhMPzMZWjrgZwEBerP2ctgbfyvKtr9RN4jWEBd",
  "key16": "55v7er8Zeii7t8kDDEDLJ9d3g76mMUhZHnDoBDDdE5KRvpDoifMfkU7r2KFYo27gPPdcXJhRLVhKJUmw2PrnABoB",
  "key17": "5cgqkjBbQvcz45FDXmUK4favuEmXFiSfL7WTkYbMvuZ9yTn8xWUH5VkraLTaxoXyAGckWvszhSxdVkDTyzbDvhvY",
  "key18": "23tcUyvUcpAjg9nDbxhAGVFnLj2rYHzH5ZfoJpGjKL2tftp6hxR4bcYpawUbP77eHPW1svPv3EtMTJU7sJEcfYFo",
  "key19": "3sTuvEZHe1nGAuAezw2MxHp7vNwDVR8W1adHXdCpPoZKYdnbEZqVcDuJa6wZaWAKoNqMLHqQVgh5Mhghcef4tJDB",
  "key20": "2qcYy9GyWKXgyMFzxqFDL2DJVpdrubYzYShLiRVJY8ribPKycB3yrruSTkRxvDwDBWf1s1iCyBQ3HMkvxUng7Dt2",
  "key21": "5tJKV7kzLCj58sRfYMPAtd3kbfmZ5TrHne6kNXrgjvWpUywqLkts1McBwEHPfcqWPBZ6uE9TsHSdgeFgkPnpRELg",
  "key22": "46GKtZvxKUYBJUbnDvGD4gbP9LcQUCYEGw7BkevHtazkRZfe8PHBxfwq1fBBzW3UEsx2iXTyAUwgpLDK9XxcrjJe",
  "key23": "3nNkuLbAZUfWGqdi5XA41RGXk7MEnJbf1KNKib2tg1GBLipJ8ah7nAswFz1oE33ex6tqa8LJGb9tU9bBmQJpXMUN",
  "key24": "vqUxRzEEjse5jVQoXabxQtSMDVGKWVbf47m19Cp1x9RvUcZWS8hYSDnRTWF8jSzH5q1rj8zhDcGcJoP7tPp6427",
  "key25": "5SXm1LzEpM3mfkXsw3caPLy9qw8dGBofxzQY9Yy7PMcJPfR24qpDD9njwBtxE8xFz6vikA1sHGYbFuw2aDd7se9J",
  "key26": "5cMgoef7hSVDRummCauCNYwP4jqHCPXDMhucYBeTrEGm1pAtxZciko6kN7ybighpSrNBEEFQGkAddWMNRvxeXPfc",
  "key27": "217tbNiC17whcVLtR82AuJYzTokt16zqKDX7AVNBVcD2bnJr7JNxvMeVtqxQBoVt7Smv3J9Y5g2d1seu3vGn6hbp",
  "key28": "4EbN49LVBQnuvZHT4sz5ZNZdekmaX3SxUdT1Zf9xMWoaAvczPDprgoDf5fExJET7BfnvtHy29MG8ii9s7SymX1BQ",
  "key29": "3jCnrddBQmfpxF4XqUAAcBVq2xnRJfCB8CG5pwCVwtNCnf2Ff4rTPtQexkYX1H99wgipV8Q3gYgUSD2jKDpnfzNa",
  "key30": "65XhPQ3sPRPBGJU3oEiA58TF8U4noSSA4Gnk9ae951D3Ko5ePNYZBz79JbeUJu32SRGuDzGx3VpKCp1w7vkBbd9A",
  "key31": "4x44e9uR4b52xyH2kSH31TFooHdkxkwvphjuJVSdipdrK5Li48Nqr9dzuaByNyghWRipZUTYh4CYfMrkp8ezNuda",
  "key32": "2zS7byXrTdZjBP2aurQnHgXsd9Kz4riDRniJMftBjqTmynvfATJE8hwn9Rrmg9fB6CLoHGhjGEgfwN9ExhfjDZfL"
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
