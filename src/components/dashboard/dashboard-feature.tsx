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
    "2Y7LTeC1YTapMUQ2kHbmgRjwsxtt231jvp9SQjnC5Ep6doTBpHN1WTE6NfgrpBcHLwtWuare5ngePF8TFW2XWzWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjDxNyGjJ4vWNkKikbfovYAPrfCTHUMZW57afmEXnYdQbsdCXyd8kSdo4MzHpXB5S5XZNv3iMW4jQgALXV612QV",
  "key1": "42pgurewG3CrvhX8uqucCr25dceb8tYo5WyEpktgPzyGyG66HVpE9WurW3au5scu6DUevPBxnkwiYDKySp9pCb8e",
  "key2": "wABjLsyRm28amSjTmuxpbnDTG1jyhXLtVRiV1Aq2XdxT94neGho2rNDpV31oathCShP1bNnmhTUDrgx7cU9Exjs",
  "key3": "2v9ichh6EvnmGYuV1np9iesBTN4n5N9jFcZuxVmaxGdNuKmCWj3FAqd7oGQSqZkR5jSZFKDuAWMuV8ACtykLPmeQ",
  "key4": "tA5i1d5F8U6PqEgu1GJHbXK5L2yr1KbH4qQMUsyvmDQVanyZ4Thf2v1MC4yCVMi8pXYpiCWCkagWJKf2RvGE83w",
  "key5": "Yzsi4JkPV8A16MGSob7UJoVRztkM2YPdWrdhpybrJ25cmc8URu9cmu6XNDTYs57JfK11XRA5uKCBHvXzcSRAUKi",
  "key6": "3r4CdaCtT2W39zvZjEBDtFe4NXm4H53bUiGkmCcenHfhgYv7pnGLXR6rMqw58S6V7Ywbo4ojq1TFcP1oSGJF5vUr",
  "key7": "3VFruNkMci4aPsVq5guwXneywuZtW3xjZgLyJynQYgNrSvVdaLaL69BiuChPj7Vgg9k9KZy9V7p18NiNzMwoLC2y",
  "key8": "4QH7EeoB2yoVGQqK9pqwiUnKJZJcE7KQuhXPSQzPhjGvggH1v6D4zsR2ZCT2k3ZAtzKBD5BjD6Xk8QxQmYC2TKm",
  "key9": "YWZFDGstpaXzNYUcu9fUbxht2oaoA35VNTXcuu4guCKknoMhDJxKD3pjWHK7Xj7qm2h2Fe1jDW7F7eyeCwqZmeg",
  "key10": "52eTBoD6YPTMo5t5nkp2sXZwhSDWJE39TnttikNVpnRmpKS8eDrQYFZ8YX2vEG1dqo2KwKdG7f5CVYF8EMpMiL7g",
  "key11": "36oZfGEdaDhQoXLCjwXcRK2FgBHtya3r3wbNrJp39Nfw1Tn4sj9r4wwgnXbfjFUMw8q6vF1htS8FPuXhNQjkqmbb",
  "key12": "3m4wd3TaQwsLAKEva4KPgtBsCeUEV6MLFv9oJESKTmTVwm7YDSrXQFALkasoACAPKCe4w9xeECU6oUpuD9CAMcR4",
  "key13": "4mqUMZXzjc8Er89owwwPfD8sDPvdpRyN9wGjCM5jvx7JY7DgK7rTVJJCTKN549PPvBVi36tp3FHtqVreDSuANbTB",
  "key14": "3YRXGKGKCWqkJ821kbzRbej2BZ9LPfChwef26FFYEU1x4JHrAyQeSaTP4SsHstYnfMpSxzwcZ21ULSQdv7JJgofs",
  "key15": "x4SRx3sPpv41RM2q5M4SXkoRBQ78k1Vu4YFXQ72JoETUDCk7zAKYAZGP1SZgJ5jo1tvqohRaQHpFmXdt2Wmt5He",
  "key16": "2xvuUdg7pjPjRef8GE7QnjBMoooom1RC9yywLwjJ3FY3FaCXmA8DYGVajB4anviPhC84NAvrUszMvDKfjLPMvVBh",
  "key17": "5aQaYSZTnUL7vCzUkHFAxF8rWDTUJWS5qDGk1BQo4782oZwaqJ8o26VmqweRS44Nd3LxbJjWfQDA7yPb8f25KHAC",
  "key18": "2C4dR8UYuPd2ukCkYkZsHVK2FqUJK592hJwX4G9SC6tNuRMpzgR5rMNBwQbgkogs1j1qyQXYKYAPaJXfJj71TSbo",
  "key19": "4N7ztMeJmUxLiSx8ZWTDieMZXHbFsUWnW8JFExFPk1prpvyTJeQfAq5YUy2uREeBTd7BEN3JQuggkmDJksDfNDav",
  "key20": "2guGf9qdQRcrYZrPxn41nwtMQsH8Vmb814keof4EnMuKa7jmjZySYuDYAdKH4EK5b2wnajxZyAy4ByGANuXs1Acm",
  "key21": "4ypakh9MAMmfgJ3XiwxTWB8CDDdFUKwZ3h9icA7AUkvFVqEk2BfKRUw3Sbe1AeeNtkEmpUTuJXaMjGJ4AcZvyedL",
  "key22": "4yVi6keGfKagxWz3gijAavr8Txv8fn2Msu3VRPULWcyuypLaYKdSz9cjJmD9Pw3nKH8HqTaLesMYeZTDa6t1LAGN",
  "key23": "3Vvqa1PEWNJhPv28fsXX2MfTzW3zkKSDM6izwrEFsQ4W58Me9GS6vsfsf2XypaVtkjUUqGAjQ1SNDVMS5M2dhk2s",
  "key24": "4KyCSecLPuZmC2TeSt95bHS3TD7WqMBZX1hHz2shEbtbc8NVtCB2PB6FZ1M8bmoEk9JbyW94NNBVHq5E5kqRswSb",
  "key25": "55s9FhedTEVRnSA9XGQVfEiMhBXFgCL1ewq3GShTbmsWTayMs5QT9j6cGHaEb1A6PGKPAtoizust4YumEjmCNMzr",
  "key26": "3LWKxocWd4vYGcfBKFuKUx1729Pfp47PuN2qtjHBtnvJ9WB9kEgHSheppGFuzyX4LrTz2RrHCmScBbfxnVDMBwWe",
  "key27": "5fi4BA1oAHFydTz8mhQcnGfguKbJuPru9nGFVAckYLj9Rm62dyFvxSoir2DkgQNVy9BY9vLmYVr7mWUNxpS4jGHa",
  "key28": "3FZRPZdgq9y6cvNSnb5aSvVXd3KMDvxpapaZLLy7YNZGzuJKDP32LbVQQchRBrY244foDwqrYgyZ4UzTxGUaJEiQ",
  "key29": "3n1y1D6JyF9NwswmDL8bR5kwuV25iKi6LsfHED747bwwzFfDCJZFPm5SRqZqYyrZ9Ka8byEyQt8ffuN8MPa3Dxjd"
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
