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
    "5prAsbMmvnuXYvSvkaiU533WvAmzfJPK262CBk4WDpuDy8ND1vKu8Urak5rBzNs4FDxazAkS6NxhGmfsn6iLUBrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgoK5ao7M6Q6TLVEvVpLW8XZggsXmJL151dSpYQ461wNxvP4ythr5QBvm3iH8gsn8ykE3KCZVKM5p3tpVPjZ418",
  "key1": "2WfQ62PLmvYjKE5KWT9uuyUEtsQnke7ttg9CYsFmazxJXGp16QJcBoacxRsWCR9hYfqzdsA1YjWjPASvhHXkwQr",
  "key2": "5GQNd8KFAf6WGLTtWYBEeKRgp3nw64HiYEDL5WmRQxsgPqFx5akLKX6B9inHuXYC7ESgxERmZSVgj3Acei7xCK9t",
  "key3": "2ZDtn2ec3924KbUMbhxRkKikVZ3ymB4v57RWSGVucz48jG6FcZZs4UKhTLounP2agCJaTGTzzSqhnVuv2epdDQcS",
  "key4": "3nowKGBcyj4XTHxEykbCjdUNaLy3WQyrh6XH6uZLm6FzTZQrvCTnJ5h3G8s7KsmkZi3fhg3b2EyyssNX1rPFyDYc",
  "key5": "3ZHfB6X5Fkgn9bsdDZsQ3W6XEigsfmhAMqPmXFtNsvMec9gNKN5wuPguGSb7BraMP2u1vKRATHwzpLa9fqbyikYe",
  "key6": "3QuueaJb17h1Pctfv1XrofXGQ1ZN4CdPatuj9XPGfKeZidHkE6a3S41EzbMuwMxDHc5HDep1z772SnkVqCVvZVHb",
  "key7": "3CPTsf97wP8NrMnABWmJDJTykCM8a5HsUQk8mZ4LW5CviJCVN4RjPVUH9n732zmFTXuXGFA6CMr9D43KuRsipvE3",
  "key8": "2sELuGp15DHpX1hR743JpsvGY4pgfF8LSLsWxtd1y8NLS3fCUtQKe3uZ9zH6kJ82iEgADfr13SrposEpUsCxZRUo",
  "key9": "3RZQ2S9ENCj79j1qQkEM5YNsH9A9JQyHp5HzxNKLwvncrZ2WE9yGhDkiRJH7Bm42PpUk3zucZr1JzG9Qorecgamh",
  "key10": "2J7kE8w4R8G9fix8C8LVGHCqcGHUTKoRsN5zBgUrdBEoihcmaThFDxDxgdzZiL4eG7aPKXddzHGAkdFeHRyxioC8",
  "key11": "3TgFUhxer5J4AMvWGNgb7aiYh3qNdP3ryQnataKKWKL5h4EoRYG8wYo2ti6kNzR55mWbacKoQH1Vp3vde6EP5xpP",
  "key12": "3hz7GKZYpscSV2Ak87rwkZ3QMyVQCbesCUnjGNx55cQTmrF3cFJxmuKKnt4JQAtLcoDbs1bdX5Giy7FRhnx7TMcJ",
  "key13": "4ZD7qR85Pe7KJZyh6MtCtqUrMQ7UWDj2q11JNJASwQPRhsaQEA3UEajG1SVsCkE1qp5w4JPMuS7UwomdSRXZ2SJT",
  "key14": "4oqT99WDYRMekzQet5qDF31pgNQZHfxSAyZjJreMGjkeQL9KHH91WasycZynZ8gtj9frwoUaMYPR7R1DpzpYJkRe",
  "key15": "5ChogYTkxULFk7uBc2UH6FFF9voHqoeunzNYs6ZxF3HixQGusRcdLiSzjXhk8MGmmZ8DKs7dC9txkkZfKspXLzoy",
  "key16": "4HNYEB7qD1RET7ZDxytGB8C1PQAx3CYUyscP82RgBHAhd22fBhdWAZaXekTQVhH8Z1TmgP3cy4zWxSra4Sfq3y9U",
  "key17": "2sCKXBPhSvbdMhUKjbN8gzYMUeoPe41TmKdfzi6fujngcLi4GwLhXvzy5CP6UDCEMc7UbjLfXkrnZPaPMPAPDXKu",
  "key18": "2ecGzn74dycXJ4CkJXubnEjh6UC5WhSdcHSPPkbB4XMZEPTMxnUwQ4uKmHuTtNopaBzaigZALDPK9d799U3BPvL3",
  "key19": "3Qnjs8H8Pgo7NRFbiqMzDugohmqTQxUYHP8LwH6CqsXhtxS5axJRmvio1EqcAngdD5mwNLhZBKkVdw6DN9xrPMWd",
  "key20": "56fCNGwxMtrdCFL6U7zF88Vac7xJGYu6Wyjur7y9NqAyaqzAvRiNf9BUhbdij5a3HK3FP9Gkpw8AktWrYWrp8a3T",
  "key21": "h5s9wRget9dbQPCek2MzcyKexeyWqbrrEEvh65UzoULNrgih11HuTvLYvtT38KUKgUZMs2X7hbiNh6783bFvbeV",
  "key22": "BJnKD4nsQHv2ZrTnYjjozmJrxoXKPK3TPLKp7vMoDs1nKEfMg7ptfRKAKYxcLbV9bmXMWW1a7KSJQNJTYFnxaKq",
  "key23": "4iAp3Vfd3HccUdVYfeZBHna1B2maJFBrsVf4oXX9zEXcwaJmBP35JEkyUbLKDBQ23PQyvQNq7vV3MxA82R8hBkMx",
  "key24": "3SVc43hk6tmPHXc3zAVfUZkizN4CQFF5Sn7NoX4kcW7iN9tGCi1gxyAgKECgEB7tYmgi38XYGXuCNoNLLqnacZBH",
  "key25": "5J8nYo4PcLtYF334Zv72MhHjMjNYfBJJa39NDhHJgSsWjKzAWUTw8ENKu4QUsdG5pdzs6dMRgoNyqWLDEnsLjxsM",
  "key26": "2oKpyBEEUy5HZCyA91FXkhjF7bUXhAwKXrXj5spyinD1Emc88WY9MaHMm16Mvb6KaQCmYKkznYxkkPMGtjtSmFkR",
  "key27": "49wCSHKyywAzgyLu5G1b5x4PtS4oHF2v8VUM6D7Yk9bPfL1kWnyYnxQ8tgdQQBx3cpXcUnjRnBpxUVBhNoDqreDC"
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
