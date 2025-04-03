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
    "3djZ3nRD2sh1u6AGhkgiV1rSQKzeVGiyctLNwREwQGRP5nBrRrmikyajRWYhxVa7uqqSEMapYpGju6TZCf2h6dxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fpp5URkUubxQzSmrXgHSEgSGHoTxUnDEh7dhJwpgwyedemessq4mL1p6NQj2VGKY5tcZfrBhCbR1McNy6Q28c8F",
  "key1": "TurG51afLWgjv7T4n8Cv64f8SG7BYga97jyZujqAQvTtXynEWBznrM4VZXZ16osFqxQqvH7dZAsKgbfrhbZRD2B",
  "key2": "NaPjbDy7HBJ4tL57cfCd6mkfzP2cybtwkLgfQPEmYNtcxpcBaWa6wjFEAC4itsSwN9hMVichCHEDJq8rhtc1Mh9",
  "key3": "3U9QMwttY5bWM3FcbQijnsPa116DdVZiLWNFT8tq1SUgBTGvTGzHaSYkLkHGXGDwCBdF1uyuK5wsgJvJoqEpoxZH",
  "key4": "4qhTKmahvghWAn2YNXNm26bcYQ4knH5Vzx9b4cNXayKkCLoWXXMPWKXxV8gk7hC5ywvF2Y12HifZNvRencXsMVqC",
  "key5": "2FfTRBKRGYRG9NUr8HVacVGzaiKJ2Efh2BKpgWFQqeatzc4rh9M6WsEEFtNDaFTqRZcraNLxXThyQPv527VtkMs9",
  "key6": "eJBoFba9iyWfX3tmSJ9WPjJhvuv1ucY7Zr6yZbB9Sg35cMewLUhZaqnXxAYcgGRoCoHaX49riyHq9QPkYcrgFVM",
  "key7": "4NdwUfuiAJRPrsKdeUKFQGdRf5yJLuua5wqZ4WWLRLCkuesxRduLzEiQWfQ6sXmWDbAXzPAuQfSB6hgRPjErAjtn",
  "key8": "2VE4Ye82VQdRcZZ54Ks6GCcfr3Gh3Fqkeq1JHAwvepcJk1m2UrtCLMZ3RDq6cYjCJUcDu1PZKF4hPyq2DV4v7GXv",
  "key9": "3ngxY25XjRR4NvijbW97zr8djjpaAtqJrzSpfVR9tVieN6KU6S698nn22mG715u1MYG7sUQMJ6K2cyQ83R9NrMtY",
  "key10": "2PnioVwqC2ck5JqAXhnfMwfDVuQuaD4BVeK16fDkrQ9bo6Kb5XqbKRtiGve6NKqLmqK5eUd6BRSJBDVSfYXBrx2C",
  "key11": "3fGJTGPTBy6xymCNmJhpJQKjG2NidDfu3H69w4BFmFRWxx1nNunqe5TvbrPFzk7gV6pmJaSn9UJF9DaCdKoqN5T1",
  "key12": "T4pY863htnQNPtwLnGa48ipaK2KQqhmXJLom7127VsDnrbvFMYhEzrDs5zPGL4uNBM7anYXhtVuWgf1Unz5zgPh",
  "key13": "4UKmakhJG8mR5XUzAH6iEZisBPHHmGZszahjeSZd2qEMTZZVakToJ3wjT7fSdCPsyEX7h3wcTYfgsdmCxARtoyyf",
  "key14": "nhwdjJZ98xuJXtQU1g3MhRRmVfbVxnF7bseH8VdZDg9KL31NJJtjHL8iDgHHE7AenZugC5ei8Ge7Arj5iXsBaaW",
  "key15": "34HmMTJA5iQfUJvxRsPVV7KbNfHHozAoHnKYkrk7TdBjxvrQ4u3nShyu2emm1ihcL44YGUDB6sExVJFeKT4yCLcJ",
  "key16": "4SCGa4XrLV3sxR1oxDQXU9dUSL7Wg2syqZ7TNpqqqdScLu8ndLw7NwRj2LyP67em4K6TfXLkrEqsn3U4nU5dXVUC",
  "key17": "2yG272uZG9V66jUGz6nocViD4EGh7YjRUE5o7aJRNzuse7oHYBtWa9oi71szB8J3m7mRS99X7kN9rsA56sSJdX7G",
  "key18": "2yFBxjwwcEPSJKpJRbBdb2FhK6p7iMECwdJvBZZDqjEwMzqPsbsUczZ3C7GQkNwUjksg7yKXGVr1Uzcw8DJ6HSEt",
  "key19": "2WGEGXKV6e5kxMpZjv7TunUsPpk8DFjjxNXkesCoSro7ZUqDjxo9BZjuRWJijjJpnF2MLiXEiJS6UVp7foH5P5qy",
  "key20": "3ohs3ZnBqeocXhP4St3jLGDpMDPeqrLZz44UkpzZZkG2Dq17qh3wvUonVgrKp3nHiqedttwDSFYonvRbnmVoz8nX",
  "key21": "366W6pmYfvntpBc1sUmHRBSaEZu5oj8HhK8yVkyNEKWsHaq5hrEwWm4Fc4ockNVVE3zq7QKXZgK2rWLY34Jfzwyb",
  "key22": "5y1T8JfghrsFmAhpiGWYa2zAYmduXCGv2d1zVXhZEmE89CrHgFrd8PRd1XHsu6d2svUdKxywEYvat5Cbi12opx2g",
  "key23": "5fv5ZkDxjafc9gtyn4KnkfSwB4Wmvfka8D4BZmjiFy2yDTwkDhkRhdn9kq6RtaRjSqhhpmW165dTa8LGsajCKmKZ",
  "key24": "2UewK3odJQHJvbsLiHFLYDE1m8CzqMuWZbWrFNkhgho84K8VbhgxxspCGR3M2JGhVa2ekYF9x77o4LTx2KCjx6vZ"
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
