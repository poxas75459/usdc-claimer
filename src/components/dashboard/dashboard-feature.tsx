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
    "nfD2RM95feqKVZCeV5yqMe4HtrEPXEKaCKY9jTmhT3j7RDW9KnQFjoBbst7Zd5JC6xA5PT2KzQUZq3wF14toNVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvZxtmUF7B6iFshQEr7cunMNZSebrdruioRCEK3Q6EmHWpjpzsynyewUg2WeyiCQ1VCwjgrnVmudhvfokdph8rZ",
  "key1": "ziR5BBTeAw6cF8kFf4f78x3jiYr4qdc7KCyiZkGT5siGA6SxkqJLaQZ9qZKWRrrwzzXdpaMBCatzS3zWk79Bgzr",
  "key2": "48FxWYYYErEHFdPVi95EkCaKptRipdtYi23y7NrsGpGBPtN3A3fp4AxgRRCMrsQs461ujhiz79eFnCZ3axFJUnsT",
  "key3": "23akAQXbdrdyTJYoEjBc4pWcvprG9SBmtGqo6G4qDHwQnhdbeM2so9WZXJcKA3bC3xDr75iiAK376X5UU74wVL14",
  "key4": "62Pv1Sf8DiCM2rhPVvM1JYQLcBUhCXg5HnfLrQ5baM35YULoTLJGKinc3NgqSZDzx3KAHZvUH8q3PR6qyxCVJJFQ",
  "key5": "23jWya2RaxN1vDmyDuMwLB6Zk9fWBjCVqEgFRGWKqX6HDhMKTLtAHbk7vKWVBU3f3mxhdW7DZhmHAQGVHmDqChQH",
  "key6": "4aSasxAJ8b99gxQgdjyFrtGTbwLFErsAfavpjdMXzRzh8VwoxTbCqXUEnC1jVYnU6E9Qd9WTQkWhVoKkce2HENx6",
  "key7": "55qB8mUUbyZHqc2vHuRNxMG1fowAAsVDC9spLAYyz4eksbkE8CCgqpgy3sgVwy2EXWugVe7Kw7UynRgBgVwmJS9R",
  "key8": "5K6ypdnjFtFHJt6SNqZVuGJDnTKVXf3nYhpGUie9GcrXdWbhSWxBgVfsghG49QyHHrVfdYEQsy7JeXd9nveXbZRn",
  "key9": "2KgNCnLvuinnWW5CtEQnRCPHGWBXm62Dq6fhzVxKKtNJXruHQTfBKMSmmTesJuD7GonfmkVudVwFyGX68BUFfD4n",
  "key10": "4qUbjzyNpfZ3zWfoXkE9Z9V1xDArRhK37ZpYsz1NK1CMUxeQCzJhNYEerAFpy2pJCW5xc8BBHbp4ZZfaM1RqDFov",
  "key11": "4AbHvd5j42pTPwySpaTeUxkZEFE6SB7g31yAEmH16qXCx35dSktWsE4mwYL4ewfaAEodY7g8qorruPuivmDpNNfr",
  "key12": "2fzwqYHcr19BFQsDHyMQVm6gNdcGiKhngadswR3o4gvTBooizbzK4FTqoKi5tikBhtaHebN2DuyRvQqLjFC6zMnS",
  "key13": "4AwEfvfgidB3Rf7WS9wDqVneYefnGKLJZBx1xK8UhQ6PznfkywE4eSFYLguGM4Y3X8wg24iV9SMUyo8aFfEbyqEK",
  "key14": "5UQwGgap2SiiRL6LwSaW6S7xY7PGHXmYR9cgDfHJHTVd4NnTqftbt2WVUxpU4D1dicfbDb7nk69CE48EPQrizA7o",
  "key15": "22YuRPb1WHuEzzZn8ozhbnvFAKPaLnkwP8wae8iFr9XnhZdSPkBev7WEkcXPMfYmjP9ECDBweGEnqXZ3DQmoxFwf",
  "key16": "4x13sUS63NPKCpo7kR3vMmLfXYZC1mieqGQerbzGYnmgG6uCwrcMNcdh6C5oR4Eo2ZQdL9FhgtNfBWNMZvCn9uXq",
  "key17": "PTorscWrMB9iHq2rMiFar2Y1AjZVKVBQ3gky1pbsTTLiK2zZdL57VJpP5LedFvQesqANKQSegBptqPKDYvT8LsC",
  "key18": "SX9GvFovF93yd4nedKUdPLibnjNn26DKZQQ8xqWHzGZFGzGBC8J2Ju3EuFDHxWdWUuhJ9VL82LRQAJ8gFJnHMai",
  "key19": "zosFpZzwfitQ3LqoF9WjeAtrsdHLQS2G8hiWgf3BnprBZo5WWRAiz6okfgBmYFouU5h6A8eMigaFJdKRJCpymJu",
  "key20": "3D34nN4YCmuTjxnrVTXZTcAbjkjVhDNC8vZoNTWz86c3gBqZkqCeTjzNx3VLPVaD2r7QSpvzARxMFmZEbtEWq7Ya",
  "key21": "5GTQ74mVa2ubEfhPrT9ke4TJpQg7itWtTfE539bWm9YDf7fxJHYqZj9ErMTpirsGZhRhhpaft4xzCAbs7tiymFmb",
  "key22": "2NqY3pUcc9EEg7hNGJsvRCtiVMnSPraw2q4xPeMPMwDHohrkcqSoxaxqvgJHsjgQQo9K1wW6bp9wkcRvAP1Cvjcz",
  "key23": "GNJzKaxYbBmYqi8n5GdJyZzdkbgi2TGiCYkZJViGLGv7si8WtAdmVgoFm4hSZMtMvzW3wnjMRwrLNMZHZGqc1K1",
  "key24": "64A2J8ANFYfwjTYEN116Mwa4LbBMNJy2DsqzgipEAAuwci91A1oxTcrbKes5ZHjbcxohRvpGnyDCQNNgVHttUJmz",
  "key25": "2yT99zTS7C3kDUuNg8M5Cukdx2RapKSeAXEC7ttnWw4LCefMr4YHoU2pLDu4kzDpfBegsC6weBsD9ZkTXNDPoaQD",
  "key26": "4XmEdYgowXnr8Mc671rc1mYrC7vEhRx9V14tjYFpgzrYGmZY1bLrGT9Ycxw75eWdgxJdgUwkwX9WW97WtXyfVRge",
  "key27": "5NxUHinMWH19eeqLAYDf3XhnUiHJiShQHreYMjWd2pDsuumvcByQb597GcLkSnCGEW2fFAp6sZrwEmYTBXyeNdVW",
  "key28": "2nRuR7Ak1KWofdioTa5nuGcv3q8DCm7FDHJGJAKfdkDKphLbdVAa2jV5nWZN4qWqcwdRjv2Ky8sNQZHr2wjRERsT",
  "key29": "hRj9G18SoRsmna5hfDNbeVio4Q2aFPjwU3q8JTUb2GqPnsoqnZ6Y2ReL8ezmQLT529Swm83roPtystytfCtudDr",
  "key30": "2mywrcnqscyoChsfj2uDHzoNvBfRLAU6F3NLUXm2SBxdUqh117V5AChA3D3LAdiALGYnDQVFtFcvTwV4Qh2mZsVS"
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
