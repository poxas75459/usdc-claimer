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
    "32TXSDceKaK1TPHVA6UR4YnsqkKb2Q4mQVHKNLzBuYB1yc2opND2kTTRLMkpczVnfQhQ7RtXduHRJq1m7Zoz547z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoqbtA5Qt521NUZBMuAui8P8c97dHrMrsMVPvbVejT4LMGEBtxKNchBwh2aiQVQ7reEyciF3WHTcXKCQJCX3WwZ",
  "key1": "39Z5xXYsJBkoww5qGnmhEZzj3TSdxejnJhi7Pd3HphoErua6NAFrvoMyiUXr2dxrfVF1rxYYEGBwMffQeuJr1cqp",
  "key2": "3UH23N22ntpnHGx54FP2aKxGCQXkHyXjkzkKZjvSUuTZrWuWX24nWoSDyWEwukmVrdvw9yNuah4cLcokKbtBoJ3Y",
  "key3": "27NBKTeDcstwN34bKoJyZ652xj3G39DDFxU9wxs7Qw2cbJtHwySqErsqmnkSmdxbZqPARQQrTEHrCbw3gb1LPRbf",
  "key4": "5CkBM1aBPQBizqK7SvyPpQdUU8v8JC8QSKRt72N1b4JCTBBZtKjV7yMF2p8Y5hQRJBpWQEo7JsSLsSL2vDogS6rF",
  "key5": "5H2ieMy94L2x5XkD4jj5mS2k9wSnmGDySRjGfXckEAHJUESMptaePg2pNXYhCGXBTC6y6MyHhaz33eGoTaUoGjax",
  "key6": "5gg3gKLxY1PnWMDdv7GKZqxFGmSfNJKuztgSccs6npusYQXiKCxD7376CkzP6eg6mVKyp6Q9S12XeXeuqTaA7u3p",
  "key7": "58iiFkM264FzmasPVDRS2oahkV31kbjMTBrRWBG84RLk4qLnAeqvMmn1rc7YLqUz4yFxPBGeb9uq9UuHMhmu9UsC",
  "key8": "2TRmUSVJbhk2q6Vh7GPhKki21YYKm7zrtjVH1q2ckK6QaGxafDvTk7gjfYYhXztaeAtpvu1GAe5PVm1ez9pxyZyM",
  "key9": "TngY7Rn7UqdbPuKbHGgqfKxmtJbrLyXHKhbTw8vZVr4Fu1tXECxk31uDpYvvBHefQZHjsV8zpUhiDp5bGbeRLG5",
  "key10": "3J5odbjqMCtH4TJS5LfudQcVFi8ydyHJUJMidpaFvSgZXyqEb4QhwYf7Mps7F6sdTCrxaabDxhidcwJY5fxeGpaW",
  "key11": "27DAYB9C3KRR5g4kGJM51m6PPYqLphxFrSdaYJpAz83v2FUEFpzsj2VkgAfLp9GS8zXtXUYAUcHAf7ENuU34jxNy",
  "key12": "3UioHu36c1Z1Jeka9s6MzVLMxGmFdPjuHb8VKLwa4cVN6HrkqQrmZiWhCfuJmvtmy3ew6RsfS4bg8g9Wq2ZmA83s",
  "key13": "3YQU4p8fhNAfgE8mgZkyD9G7z4jQneqG1yeP5W2pWocoLkZZ3pDancDzjfwxwz9XaBjBBKGNnNQkkBa5U1Kzpe6u",
  "key14": "471hnYYt75u83LNwsRxBhQ7EuPab32eqheBVAsdyy2nSX2Z6mGi8p86pcVYVJQuasDq8rCPVnoWhkaXiCy7KYs6g",
  "key15": "5Akm7GMKrikAwGLL3oNSDjVesYNgNdyvBf9oEfxtn3CWyE5kTKLTeFYNS9WG31XT3ZtXvZeKCNgjpSas2gbxVgA1",
  "key16": "2d3kNYUjcaKUY34Bqo3TkJ2a3B7YBxe1XZGK3HKAqSzH5KuCANa3TfzwTERp6Gz5tGbzr7stpS2jV1WRKybe8YkM",
  "key17": "5ac5LSoYFWBzAPAZHwuNnStdd15VfAw1jJcabWY3BQWHtDG24ESEgdBrxeU7UnYvDDPWhC11ohQACCKdUcPVRwVu",
  "key18": "z2g9dFVYwbsHdC2gTd8c6iPxGq1zPs7YUbCcbboTkHqRaPWNfomV2Rtno4FQS2Q36G4DWzEuhSsU13YjDEsJ8pr",
  "key19": "8QAepCaCAWaGvWYqewt33zJN1HNLwZnz8wtDbFtut881k8aCSEWQMjNw19T5k2A13EWmecEcsQMWbYBEhXdU9ab",
  "key20": "nRRqjMj87VEzxvzDBVVLSMvWGyhvu7RZ6SWQw4UVenaiKpCYdHxhEVTM5QyKapJRdqm5QQhLDquvt4pir5cVBC5",
  "key21": "3mRHgeqPwcWKVfCXWPv6q58nABCenkDhTyhE3Jxc8ZhZkfEzCc3oF3Rq82nWTWcHCJEzLXy4zRBwEMtwtd3cNA3C",
  "key22": "G41SKRVNXYwCZQtWPDddyshfcCUh4ifwsDrEQmYrov5uZznQKQACC8NNr8tUKHgWR7WNW1DVhBqsaJkLjodYB6n",
  "key23": "3q1gVBaYkmGV1CG7waAdULjuHTs57oQDrBP8nz4du3qZh7tFg9hiBbJYNEPJDWUV83LW7MidaQ4oXXLE6ihhT8sZ",
  "key24": "2biG6sajU2uDoSeQmeZd3Yh1eGcTXtzjHdYwS12ew3HK5BanscUGMPreqij658QCdAsRLfWUpLY9fYpYzUScXZHw",
  "key25": "BUbkpE6WooxDkCpTwdiBsxi4y2gTd77RKeE3T26Jss7mRN6PHjPTRaXVgib8oWh6mF3NYpMxjxtBLAU6emCWvgt",
  "key26": "4E3rFfx3MG24AEUcNEz963wtngfpW5miXwJRTmk4wuJjRfbF1ey4WnuxPpma18gUcP4mGWsGEP5iKEEJptpo3cp8",
  "key27": "4et9SqEMy4XHQyAKiN6SsQKSArHnuCgSYFJ25NNrj8NAAephxpNSonYMcMZUmej5mozN3GYoEpJAivpmzp25d6vN",
  "key28": "3j5tqpAyc7QRFhiDNGJtyADMGDSXF9AQ7EdffMiyhpD4cxGE9WgyZs4BBrJYqLPpKRVmUF9cu9vvS6PCEw8bXito",
  "key29": "5vQ9dv31MNmdeBUt2qUhGEkPbUjLpPGXruDpEJtiCvqWLHJYg49pTrRJHHm178DyEt5F3aCnymLu2MXW686uBjT1",
  "key30": "4DuDA387Vh2pbVa7oigmxC5AkkuQ48JY7JMsW8JAqAtYx6RArx2xoMHgPg9ayJEi9oJWcwMGp9fuSMhAX7rzyqqX",
  "key31": "7o1bMjvX2AegtkUCMk13w5AeM7ATTK9uRaEhcYPxCn3e1ctmF6ctsoAUAYohBr1zuh78yAqgW9ozxAA2jqqX1Gn"
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
