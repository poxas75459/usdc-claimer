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
    "3GmnGCFdw8cP28T9DEEuVgwPJkRaSL9LaLsCJJqT3Yw7wrjguNSWf29bLH86DVRJFGb9kA7XzT7WVWAb3iu5ardi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8J1zYkquuYVC996oGpVQcZNMqE5zPoogE2gvGEBgHRApvhGzt4pAkeYPSxpPBPUSWnfM2gqDvdJM1opdyNhfe2",
  "key1": "2zeAJvEuUwCiAMLFBszpcqvNuGhthPeAEuCVG4nwzp2rVUE9A5EPtnZ5Nr8GaLT3btZPzvMNY7fuseJiM3V1dAzn",
  "key2": "38ttumj5XnVVrFqRLn2QKb2tG483w1dWgNTbrKKWeR2N4BeH1txM8QhzAxuWaA5dB5PifD7LjCvqUNT6wJcn4ZJf",
  "key3": "5BjcSjiiaa6AeMckKLyzhhxbhygazFAMRac3QvC5tmRFmrU31aCa76ZTNsr69uKchLjwg8WF3Md3s7YTzfRo7Y9s",
  "key4": "2rRc3YYoNNEu7HqiVeWWffnmYdPfvMpEpNQtaEWx5VVDJHNzhKqJiUwpaFeAQQh5Eg8jZecYoWt3FkmnU8ptM6px",
  "key5": "4Djzn77VCH7CRPdzi39Y6dLb1gLUFG55oRkXREwkM4yEbTy8wxfoaYSNuGzftb9eckbtjg5CP7kVsfdNtX6NhC6Z",
  "key6": "3R4Zm6eqhfFyE2xEgZPXje75ZJdJcgXA59mgb9eSfJRM5HDSzipu9NqdEuv6eJmsigkeeS8iMMdQsazkJnhmWK72",
  "key7": "3dHeuVSJsvg23ujZNNTLr3Rb1CBFMLS3wmV7tPEgw1mbNqmX69xQXpqVEEJcjYjtvK6nMBB7nFaxLPR1cNkC9qDk",
  "key8": "2RNs7XCzYH2bWPUZGGUoneWoZNuh8UnGZSRzYpiTWAgvziY7yVC9MXKT9AnYXB8Y5jn9rNU3amK18dK1j9dQn7Gk",
  "key9": "41Cbg5FYMFKTiXvzApZdGRX7PiPTafjZkNMoK1bFRt16gcn5tEnLgouhtQyD9bFiqjNs3vQWzRV9CyRdpGhaMyWD",
  "key10": "61eaGvj2N6nBnDj2LWpTj3Ud6kFyAaLjt3zn9AukhRpzFUDb8j9kWPXf15vKo5JiKPJhx56nomWztGLa4mUmv4oH",
  "key11": "wy3BrcpMEM9VWcyBeD3KH4YxxvmKphRetCeFuaafqeLXQUzsuZ9mWFuVj9kauAYLVrbonfY7EnKu9zFMoeaYMyA",
  "key12": "5RByB85n1gBwg3jeS8raLFHDksDHv1wLUyd4YTNPPTNiaG4Vv8cfJDBsNyyNWkXX3z2L3fEVncWcgvwyqw2wpwVq",
  "key13": "4yJarDTJqXGHbTunYkAX2Gte2zsZ8AZ37K6bw7Zc7wY9wGHdduECWCKAeuLrWDXM6gpnMFo5PFN48PBnCG3BtiHT",
  "key14": "Gpx8dBcmSs3m6UwwQ3sKbhKRLEZ5qFBWWn3UGYGogZ6yXUNU6HXpc5eVT1EBbFVjw23S5DRUi1LRyqnMqDGg3H8",
  "key15": "FNstFArRj9uASUQy7qzZxbMvgHgjVbQDJyd3JyYvHYvuxzjx3qH8wYbjeHVYHvnYgxG4LEuxa2yLYmAGE5dBqbr",
  "key16": "7bc3vLvWxSW9EN92t3dnVYB9m8vszVrBftG7stALEcADJoRUWnDfb8uuSBQ6sp78PKwWubACvBafoeR5edHnPnb",
  "key17": "B6Lsu5JfossxPLQn91TuaVgThvx1H34SDKn9FCKdtvZtUupaqxuGMuYvkbHmVWDToWLJcoW1Lqa7M2y5MX1NzT1",
  "key18": "3g5mRtARvVqaRDFcKwC7Cv6etNbCj7DrJK8Cp4rjC8LHsf6Dpcgdc2bRoKpbNQq4T1LF2y1z12woUrjVfiwXRDbq",
  "key19": "369sHoGJv3A925csKNhifCrCMbMXwr4j6SCHAjRygEHTprzUXE5esC4vzXEoP4fWmUd293xdJcnuy8eUAzKj7fpz",
  "key20": "2YN3oTqdWgWNgLmdV3jj4UVdmsTQowJjzN36t2DVvXAzbnLLnxwrTNXspLcaF5M5iPbtdiPHZ3nVqekt4sERTB73",
  "key21": "8LoYNVBDu1QhYRSD9xxygRqku6bFHi4v4xiHUqooBE9AybCT57HpKiaYJbpjBwUmYavZQtUtYs3iF8fukYDdxZC",
  "key22": "4sp1rUjPuUGkWaaZskc1thtEWzXZLx1yHbUsu9jZUGwAnYd9mPmtSobDMoogcxdLHGxU3PySVPmJkWDP2Eqwvnk2",
  "key23": "3seS9y1wgq2q8ZtdH8kxD7oAVFtmjUjnpxZm8iB8QNqLgrqbhS4GZEzAuHgwfghv4ztpyTG2RAtNhyAsXm28XKwr",
  "key24": "3cw1xiGXTo5zGgiajt2oUJHi28HY38gkxajPACDE25pfkFPfKAP8aGMDdKVfGKWWeKdmuQ7vf1i4QnCHWo7nTvzj",
  "key25": "2bU1bj1E9V6JL3AmNbWoBHJXVbY3cEu3j6ytLcy8NAGTF5Rf3oQQg6qRzykTd3L4FrHj8mGz6NV2LtXugVwniHhC",
  "key26": "5Ku1tDEsMj3HKgbK6yj31K2ddrLUKDyNtpwWTDy98D3JRuZxDFLiD1aEKV468kbpxQSre8YLweREALHUFQFeK9Nm",
  "key27": "4EQ4baSmfPupzi7CKbMCQraT1ivNJg7Gr24W8Phgu1tJQPacxyZgwTpy6eqvhytcJj27xKFTruCC5jqxrgMXsZ4p",
  "key28": "2mPejU2h6ss4NLyH6sXZVANX9vUWyBbaMBB5fvNsiu1tdX6s1EsQvd28ahVeTmghG4JfgCZ948WuBwyfzoGxWnvz",
  "key29": "2TxWSYf1HAJQvtDcZuMREusHZQsotUhHzRJS1qpbqDPFViFb1n3sajiup47FzCddbXSdELrGegf1bvPpztWncjd5",
  "key30": "2jYxFbLSrAuSNx61GYyx3chK5NyALEzavFpJEV3nbeV7pzL6ia314VtV7tmHeVWSKvoVrAY14TxuYwxvQFY4zmqc",
  "key31": "56NZDWCTgzNw1RsL5T6DdYVk6bBvwHESYjspdXtHryorUr7emi8wanE4UJhLPPem8ovSxL8NJiUMRqnXcWVBD7cb"
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
