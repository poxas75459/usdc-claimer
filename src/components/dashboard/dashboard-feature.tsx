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
    "2fw7ausYUfmgfg28Dj5nMvhfMHuHTtnsUHAgc3yeHG7vpWZGS7Uo1sghUgvmyqCmdBLHiSVVYwMte5uD2cA8rHbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYmwkHFRNrFUSLKK4wtpiTAz8bo3Fc4ppqFdeJtreW8kxNv9CVU3ncehbHZtkupokYkivryKMbiGXQ8FWkYanAF",
  "key1": "zry5aLQyYYjjdZSwu9szUJJDWHLz6mjMwPYcBsirw9y63mW4SjW8HbGJUFZo5Rpex24rPNTAxzaEENdP4mkZutH",
  "key2": "5ft1cyYgcbDK5tVeT28iEbSf9TwYE1FNSbaX8KDno1vUKUu1BNJzSAsRAM1LaGYod6QMcFcgfJUCG1XkRfGKtK1K",
  "key3": "3J39XjkLK5P7NgaEZYDSkzXYDKgha6mxwHscm6GfxRQmdfqRGUc4Js78DHQ3HKng7AfJ18WZ8YgCvp9Ws4toVA66",
  "key4": "2fyHg2Pm6mLqd9o8o3Pf5PEYBpFRjELZ4jSDLW8ot6obDnLDhskuCrraHU2CpsowhA5hzbgznap8Q8fH9fNmFhVD",
  "key5": "zt4ityCmog3LZ5KC94pRpwCJwR6qFbhSctyuPj6ig7ZmAzGKQFaysz3WcFSYhYsDphSF24wKMD7aE3kdsYvK4w7",
  "key6": "2FXc29bGt3ubkA2EVdxodV2w8ADwRcH9Z3CmXdqN8Z16s9ywrcXqbzZM1i9UJyeH6sooUXCRPeJhehg97DqTvyHi",
  "key7": "3nQm9bnmbR6aQh3p5TA5EKKXgz9DBUwsNU1mXG2tHN3o9JG75e1XX4Dsg7J4Gzripv6aJCQ28k6bdAFvKK73cotZ",
  "key8": "JPX9SKieby6mvCHgRCvQ7aEM4jxyxQRJwsFVpWsnUHydMjen4Z2zpMb8RgUd7FadFjEyRwchegcNjdQcvUFna96",
  "key9": "2E8oeUUEX8hqwdJ5w13S62eoyiWuwHbc3ShXgrSKEAfgSNCWtve4okmbjfNiZvCoyN4KwcYApmz2qUqF8rc5oBE9",
  "key10": "5A4XLEZp7TdBpDE75FoMVod1JYkdvwyf9eDnNXX4X1Y8tGKTNtEJukDqwxam5zj9wQxhMNu5XGrXyQQ43dzLzym5",
  "key11": "DkW8nR9Q23onmcxWnNC7ram6ZZATPtYMpCNDtYRcx6wcwVb7TR6BbEvLiR5vrWi7MqetCJcFDdRSKjNgURmYbUD",
  "key12": "4aUTD4jGxj2pQraGCBZQxMMKDPHskSnfqcfHwE66GBYSuvA8MhA24omjvwhMNGxDndU7mn6WqHooqBiGvPXECAkd",
  "key13": "2vHCBpQQpX9Kxmfmsf8PjxZ5y9ww7t9PTwpjVuEwXkm2oVRgPaPWAfnLp7B7mjPZvPo1EtUeG32xBjSJAfhcZZ6c",
  "key14": "2iGVPRwXRDCFZfuNSxvt4UwvWCSimwpD4QU2WCZS2ozF2j6hWYnAUdHk6KSAUuC68Wnn6pL4v7X7mKSA7TZABjeq",
  "key15": "4iktN18tJ25yB6FpDeXgFEQxeyCp7NZWrurVaHMoWMwjdpL7oqaXdQoLDJU3oNuTMHdP2Rq94mZS66cqWi8pdT9a",
  "key16": "3BwyJ91xbDSMgmUHWQEAoUVU8DpnPu4jr6wnNLJkQhRcVmPQic6Scm79A43cA5CSB4M6eYPGQ485gLwUHuf9ggJR",
  "key17": "4Jq4MFjnQkCTKULjdubCo5RLm3Z9gaDwiE7AVnEL6tWhFxqHqYSXwxhczPGwiK3eAM6ZbovQepPhjckpXMSDGaAm",
  "key18": "3PGKEMTAvSxueKgUR5NGexJJWKnRygDJQ9JXDuhiq7oBozMmCMTsqZ2agf5RUthADwh9ZuhQtNUHN4qjquDB5i6u",
  "key19": "4AuLDeZwgRq83BUrdtnHqgKyiSAcP447Rn8JQipsp3p33RKNFr8jBhjscPjFg3V4RrQZpeb57j3dhGvgjA29pueB",
  "key20": "4Gb7KjCQ4En8Kh5AjJ9EPQVYBeupso8Y6vuaDcocdmomKroHW3PQYeVZZSj2rJ4KP7TA1xPv5mvdzHnw17pn7aBk",
  "key21": "4Tg3hJ9e8aDRRQZGUCEakLbchUKntZgZfsviHaEdmSgddLF59v8jNXW6xrs3BoyPgBaZKNgQeZztuDNdyL7Yfw9w",
  "key22": "3SUy9VuTrzo2i4z3EsyTybpdAUehZHfw1MjdgouF3jw5RRbfM6Ky8rVJNZ4nnMwJ7xsYMwPPVWxbyytpJXQjthPi",
  "key23": "fanU4noT1xLEgdhbNbwo4PWu8AHzcMS15x5vHZT6XxCfgEU8WC2DLxn3JuAJ2yzqG7wiCx9igzZNctmZfQKnmbD",
  "key24": "4xTt5Ub577hE9BZ6AGj84zPpzipJdRnHvrgPD1AMC4gEQyHWfrbeCDZBRmAs17BAadTonKir79zsygCfGJkiR73Z",
  "key25": "2emuVQJFMppTEL3QGCoPzqifQYGUaCHLWLgsQCthMpBnchKo3RhtoULFbcmMPEgmc44tmJ6tr5pbaVHVMtAEDp58",
  "key26": "3hYkuDiT4cXeUajmZuhVDCC51Pm3pfi4CRErkwsNCEb1kkMexihPe9MT69D5wcLg1Y4fp1wKjJxyKQQnwwhMUfuP",
  "key27": "5onh5Fa3Bss37L4nm7zZu13onqWKFwizPFq2a9X3UphrUDmHqBafsHQavyfbNKyTtGEAeNhh9UDPXPugDeEA5hL2",
  "key28": "1UfPSpzVCJg3mrLmGRoDMPz68FfYiiw4xkwaUoFBLK6iRHSKpg68TCfzzLtuNMb8H3q7RQ4kZ9o9qKbEXLSaZMg",
  "key29": "2hm3YRPRRNSGE1n6A3jMDeQRZWpkjBa4okBMtkryk6ukUSRrpe2N1gqA87Tn6zMS6eYpyrCVMfkmipJ5BGFYcJR1",
  "key30": "2xoKsxrUG4n76HBiMyA3K5F6GZpLLtMj1RWcrRDPkmhgLGgvkZwAVLRPDNb6ee9AHf1Udpas31dTP9ySePYdauiE"
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
