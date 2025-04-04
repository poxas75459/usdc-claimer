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
    "3Dy7o14JMpAwZxCNLfiKkxwju9cs7VPG6jEWnhmmBFWgfsCyaArgCtrxgBriu19ZaxaXPzo4fFUPjPy5z7C1ve5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phPDJB2Wpgnv7M9u7CUrVwn9czXpZNjiNdGFUCnJjbtjpeoQuNx46Z1SQ5R6YWErtoDbVdYM2hWsKFqMu79cFYg",
  "key1": "4xKRTcAwRGuWjJdZeAhxR6LGiZydQf8KQsY6oN9ggfmSLX3pNj9GcM8fQ9r1K4GxxGNWLREatdfkmfwsNq4duZbP",
  "key2": "3AcBEZWdGwgDx6jRPEJJHCfXM643pG3cKxoHKXT6SqEy9WvmjKWNNvrTZLEAZceFv9G8YZLHxa6NYpRK3jvtUgLc",
  "key3": "5pA144DJnTjWcZPag55h4QAefRwd68fEc41p6q93LTENp3ftcr8kJr7iaX2mjzUnpkWzdjqGEdGSYPDX1NxTeHzo",
  "key4": "2PsAt1A9yoqiGbDFy1Px592m9a4wfKECUdxgsatWc3Jjk4TfLzcmMAc29xpayH7nujBEp2F1oiw48dDwxFWigJ4h",
  "key5": "3uvmMB9QFt7BXmZouqaFrZ3LKHP5UUhY4yQPUvY1Bc5apMhXZrEfxPoBCVjA4BAGZAPJG1XdHS17xBXGYNhixCHL",
  "key6": "2srMnBAdRtQGuqipgAxoXowSTtaXd1VgSCXHmpE1mXshZBdgvN2uYjs2YKMWpQWGBt5eyp1zifiMuVczEWZnW2B9",
  "key7": "4AKQytnz5eVPeqXNrRdDaP3hfdrBaF9fF55BTsGXVD9HzFizprxKQxcQFLXHjKU3JKMPqyiHihHaT1hyKGSK1GHz",
  "key8": "5nZzuBaJjzJ99kD1NrLwPXpskfoLJCqGJAQ3xFQ1amW2qJQbP5nRCWDJJThqr1mffyPRRdizYdHVz2bQZj87JHs",
  "key9": "4sRNEV1CACTViT3NVZ3L1LwBiP1MBuFXKA6Fdvsn8yJFRVNFnqU5TZ56iLua83auDLjdJeX7fe33cBE1Dk8HEgfk",
  "key10": "sd1mU1yDksnWFU9pRP9EgsnywpvLiKyS2d6iDuu4GKNaSMG7LFteqCbRwQTerZpXyvpRt4XYRbozdaRRopgC1Mt",
  "key11": "5a517rFSXctd7LQx2sJp98Lj55iZXMbEcCECafLLjHLYfeni2AY4ctLU6rLLn6C877N8n5aeZ4Qr22F7tq9FEi7K",
  "key12": "xi4cEwttziGfbsZsT9bqTdzURyFuZy6aWqDQovJbBWSyYjN3RVivqwFcU4qTWN888rHvNSq9CciD9LUNCfw6zxy",
  "key13": "4eLiSR3tmw8AaTnthZ4p5FS86D72dRJxy5piQdhXgUJgVw9oJraRiUAapdFoJvqpCxhzyMt1TyjmQSZL6AhiNfuk",
  "key14": "rdvDPWGVE5JympGTPTjAmtpmoWCqkGFscNxUYM6NiFCNur9rguR12SHfxAjm7ENjvUUgb8xo3zss628KDeva56Z",
  "key15": "daQCP7q7YcEWyoPjASR4zCitHRXNHRh8HQ8AR2VuBmmxeygS4MEtrAUQ2AM1w9ctxXkGaHQcx6LpnDhGN8GitPk",
  "key16": "66wiejrspoxSumb49R2pp8q1324ACEPTPkdoT2hZv3HbUZpd3M5v2ay3bwtDEZ7PoK7985yu1BY76mZ1tQvfCSaL",
  "key17": "3DfPqEsqoCTR4rLJiURP6b81UqyvKYps3omb1eaNhjvfFNMuejT4cH57M38MEtgu8v15oBoPogxjhQ8hNaKEe6Ky",
  "key18": "2EuTLukFnbbKNpz7Lc3wCXVvDFahFh3nVvpL53C6E6irTn9aEoPEXDfkh7oCy9bcPEegKAoZn2S9qGbFXqUKpLMw",
  "key19": "4RcW225NJkdj1mbDUuSr5Uq6wYPMoKcGeGprJhExdQypk64v1TeawUynMjqKwy1XF93NQAwN2e2hL2A9KYugV8V",
  "key20": "35BvyGD39NUiuAWkcx2yDYUZmVdq7GeCsM8tBTJkPLq45MZh64pV3bVivfRRSMpWUEXFFir7y64nxgmstCpkcjmV",
  "key21": "3At28vdPhe77wdBzYCkRSajd2rcs7bVjnhixEyHJL1p9RL3pZzp1YRMW1UZcFKgTmLGYUp9mxnoX7XpU88mbN9fS",
  "key22": "C9YAEgwkDg2vYTP3gZbns37QxVfFMsaQrxkeWSeGRCjiJhGcRHQqvdwLNq5HpEd3m6x2staZk1aR442VVdRkYxR",
  "key23": "GLzd9N2Mp3ugBneFxH4EacxbKEXA2cA4rkLm6qx8mTCW7Q7FmAazPsWJWW4SX1fzK6aSQxBRFov2ByEemMt1jqp",
  "key24": "4SVj5Gr886eam7cqv5v6ZURKxnwX5gj6iowFQfRvAwM2MezTkXtFKeBG756uBfKFZprNxEogx5PpEW8fUwtQxhV6",
  "key25": "4PQ6fkmpUymSQwaUSXoC76yV3MzZedUfqR8vt1fS9NuUeikBS9dVkSD1689MWymFr2MuRZyyAC7yMwe47xrtPHL",
  "key26": "2ppBKtgcywWQKpjJ5WA5es4ycd2dz4f5JY8M5NRv33AWwPWoeqaQa6XgfiKi7bi3yAC59c5GKWTbH6HnYiedD4rX",
  "key27": "4jQx6Kasqo62Hdd6BZP723oSdg77YjDJKbgQwL8FrmAdPm6DyZUuDRCgzDbpXRnQVSn1Yf9SNQFAZf9fq3eVCZAS",
  "key28": "48nsPhaizppohxtZ8FWLYqHryfdskYXgxV5tsvpSLR9fMTKrcsgmyodisWqz1r1aRSDPUvau32B1rGPyQ8nqGxyQ",
  "key29": "4Zeti8BLSvwNTRA92ev3QR22YzaXnDqB2WuQ7hEu9982dmYZzmMa1nxiuKU34aerAxXoRq6oj68fGwsEh5LvSYii"
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
