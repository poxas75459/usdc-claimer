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
    "G5BTTKQqwgy49MsjrXKdspBSxBjwJupnUFkVfxHTXTofzzhvRSnVDoABSAEZ58KAoKBqfpC8cwc36JWmu8a7QkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KqfjRRa7Bp39wU33ucXqZ5NKAD5CXu6cYdcuBmCgt1HCiUULZUabgNHKrrn8QEptXnNmLZrw13PBR2z1gGWSWe",
  "key1": "2Z5kcwEC3HZrf6Tk2NTrGrV1AyUGJ3tSpsW8Y8W3ZtWVK4bRPpYY3mJuLU6UrKZnSmbUcnYpvD2rNGmii2f6PgxS",
  "key2": "4BPvEHtnGjFquGxHta3hV6kFD5o492GexfoNrHDxoDjQevZRG4r21Fbj3nM6629ufR9fCSqxUGz7ZZBMjS3wpsYg",
  "key3": "47diYVKJ9aJYzf1rYps1N2uPTfLj9hfhVeanbgEZKbiWDT4QGLjoQagXVVGAdm71BGPZxkWVAY47rhjZtvcsurMi",
  "key4": "5UfNqBA77L9DLwLeKuJVXu34GZmPMTEWLmddUyU3bjsoVX8WButGoSDMjZoVjjsefP9cnFUTV5aDUpXQ2yrDUc3B",
  "key5": "3BRhtvGudxtKVQ322qUkmcX5zSB7RchJtGCnYEFg2wRv77xNjnrH8EBhTLMsv7zKY2Z4cHyctpLqa2LY8fgoS48x",
  "key6": "636q2pkC5udPWY97HvgEdwoH7hFcMUqRX3gGnBaaHWraBdQuAd1MY6XRU5RYyEW8eAvyCGqMjQKvfgDZaWpu5aJw",
  "key7": "22LNcLJvZqTJTzQDFVga12fFB8YB19ofPsWVCNCQrcwAAJWdaqykTHTypsXwnprhitSks3r9MTmTZWXxoTtgX1Wq",
  "key8": "3RYQgLPqHwPfW8Rh3BN2x6D1PDVFyqzid2J7pyYMMN1uwJanbLw13jZcRheYjkNd6s9jEgNgoNGjsnkEfXNaqVNy",
  "key9": "5Kcv8UhPMtHCdx93epJoJqsbJDe9LHwSyHW5v1RKzsDoxyQJFb7bsrmNzdUYttvUKJoNWnNX1baEjrr9bVWycMy9",
  "key10": "5XtjgP3vXvHewFrNq7yGLbRA4KWHsbSdpzCckQ7y17hCcxALNGRpExoyoD2o8pf7aDumT8svYTn74M7SBsmPrRYB",
  "key11": "3SUNiZnUmuJ8yYADTPDzo7Hbkg6ghuHcBpg3wndr9W6KrSxLgtqq2yrfWhBKLGnJUVuexWuXqkdCyWMs7XmDBWdU",
  "key12": "pkT8DtfAUGCW6dSm7YGmypCZpraSRw86CRfuGzoXzSWgQ4uGP6svTasb6k99J2pzdirYcWnsFpjTft22cy2fSTE",
  "key13": "5NMg1YAsm1LEKWi1B2e87ozqYRTubFnQNEUY1Jj6Tt6SBak9aQD6nBRsdwSNSmqVkmTHKNSHmeTTGuBQDmgaf8Fn",
  "key14": "zsWBoodk4yJbyS3tQy2bQk1H9vUdM22SaE35eXpD4rQS3ikCHuGDY8q6x2UUMvnbjqFjYNxCrvmxXWgpXjEEzbc",
  "key15": "KTCWtrwsWRvdEfxMxsEbhq9Nex1L9tP41nxxvBDUtJibBDVZHHhMGVRbFQDzz3nMbfDU5cqmCHcAckMYGiNwKrv",
  "key16": "yJqmVmiRyghsKbW4LzDB3DKeNF45abYVY2xHcKLuvQ84Khwwuo1uU2grQBZfR1Gnk5tmmPUm44jCgrypik5bev9",
  "key17": "3J8MF14ytppwBDFx92GKLCJU5oKBRi3n2fc35v87kZEyi8HKidZXjtv1cbLygVN2X7bhZc7wDNDCgLqDZx5bjv8Z",
  "key18": "7DYohAKSRn9vSUFq8gc4xPZapyuhFs1xnsAJwphgwUepJggzFxowFrg7iw2zkkvQPywga1EkARJhY1q9VKqE7Th",
  "key19": "3DwKJU1draaYjVrios4kbdPp6k9HoJR6NEfpUihs7aTMqUXivexj5d3vP9G6pqHpdPFv3n1w8dhMcyZs92vbC4hh",
  "key20": "2JZkQpjGbqyzCdxF9dd5aaosTasjVNuZaSnJ64ba6KfxNsqx467xNcYaK3mEmPkfXaJAbTgEkAkKJyBzk4ju1sFC",
  "key21": "5RN2NtYBhxxdxPcXQ8i99u4VAmmHnmYqkDq1fF1d1VMRWm8Cq2hbfMWBhnz5sKzGzkV9ZWn9YmoXkPAPgmp7z5M9",
  "key22": "4FnGuA145sQyKcU1MPTQ1nU95ZYZAwnfc9LBhqUt6kKRZkdofjKHvSJCbdv7P8jTxViLsrkyaxFE5tTrVy1AtRoe",
  "key23": "ghHDsg91B3QDK1fxDX9jbU9sAi3ytMuFLxDNTr979YLaPUGaaEnHQoXAsWEdKMKZErGwdD91qmKga4pHGq4FF1Z",
  "key24": "rVgismAyFpSap9BJAGQxMbVHCZU7tC8kGV8GUEgbhQtqRg1fJ5oNDous67dVJhBkFepu41u2tX8c4MpAnnTvyiq",
  "key25": "3QzDpEXbUf1T9PqQuP6ogRbDEDsCkthHn3bzLL4k8YbTa8qVGcqmTcbaa3BemXACQ6ShyFizYXB1mhaA8eew4XHo",
  "key26": "25sQkEFbQVZejwXyDoCTFzcP2DYoeo3KnnJAswvRkswENeC2ECXkiafu6R1qNPxYGZxV55w9QpugeNygLA7puPqS",
  "key27": "45JkFy4SWquqpKXwtYN6wsBTGSPWZLo1EDDPuYPnLHzjfg4hED5uc7372cmZKeEYh8YprwidZsc9SXZXKyDKqcid",
  "key28": "EsfXR9U7oDkkeNuS6bAN8nMTDP3aTjfBcrum7sHnXcVwc9cQ4CbJXJJb1QG6XLFzYSFMYuFhMwPP2ZZJPmtsU5o",
  "key29": "5K6ABHwkiwq7TAKgPfMTgQcnazChB3X3tUaUPiNbpmqfvAQ56mFW5G1aApbpuf3jZf6qjbMJF26XVig95gRuQx15",
  "key30": "3NVCtoeyU4z7dKZE51VWs8tAAduLd1ZWBRNTGadKmWS2G19KVTycqtik8Cf1kAv72ADLwSTBt3Fs6726BujHnGbH"
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
