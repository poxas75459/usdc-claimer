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
    "3HGkmxgjizc5KgYKy9FB8fuWHMSSNHkQfV5GBCusnS2NY8kAcmycCUqWYZEb4uJ818kKk37oFUtxVTQHzSGs4oAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqTNfWU47zWrA4cJQ2CodL7bvJkjtaC2oST6UwYomYofrJyopYPGDuhUUfwu71RuAPTTwDQeUezHYK6DX31ZaVg",
  "key1": "4GD9AGwgVQZef2AnH3BrTNGMwGD5c9KyEcCigADpLUFvYTaDHXNmASgpvMarSdFbPM8JpTCx7WqYAcxoNK8CFD2F",
  "key2": "4fvk3uuiJVzwf8YUcEeVNcohFeE4ANcn3YQN6TRvhz1Nu2Lb8R5wZWsrKGGy9uMivKzzMz7yt9q5VWdmmqTzqeoM",
  "key3": "L2eCmY68mP6ikkADcDZcwnBN3RE7p7JvKMzt2EGz1cptMRQ9jHwFpLXAuawwD8w4iSemi8hsd4yY2dnacbR9NtH",
  "key4": "5f1cHYtkgTskJAvZ3C6napA89JF9wAhnHRcVee1MPpvGP3iUAUQYzp6fxqENL4KCCo5sSuvvcLbsUhJjCc1EvzTC",
  "key5": "21RgD2hKvgqDDjKww94PT3KVJvbGwyu9QS1AMoWnyVm1nT8xqQaGAig5T7UFMqHu9D1j6k9PqDBp9e2JRj99vjZk",
  "key6": "25WorCb2Wrck9pzEnyqxJtPBwJ2wwG9cmE9icJk9uanw1PCxwgaFm9QmAENUH3a4kkbzKSheEubxBADAjCij94ZB",
  "key7": "2SGPuU4uESbouUvpyk3YBnh8WVhWkwAW2fmLn1FSooMeLjRmw4fAYPFETxaKqrHYC13o8R2oqCPTseZ5yFrQ6qun",
  "key8": "5ti4he2HRxqhpBUJmgLEgzgzLtw6VjxiwPit9vNScNkqyKLNy89vXRknMpUyFURd9NCc1nHK4CYSXbB43w5Xk99Z",
  "key9": "2fSwq4nEKygmjWfzE1dDZWMHWzpibgAqb1PGR6GJccgDejYHDDF5gNhN8bb9UY32AsA9pFbm7QPmMhjuyDZbbvx4",
  "key10": "2FLaDXkjPXt2vCu2aZZGMNm4VMtU7wvT5hvRCcaLK5CJCY6HZYkGkfPQ8pyozdagLqnN16Aaev8iKFzTJQvQG5gj",
  "key11": "5Gp9zAFLxABsK7RSWhkFFmr7U31W4bojaF5k1TVNT1zh6jCDoYi3f7tzJFkF3tKJnCyGHYNGB5gK5tm5Bd8YhrTV",
  "key12": "4LQt8RsM17VFKW9tXBXhdfzkLNNbQkHfmu35fGji3YLMdH69qNni1zXvBbuR3CW45m1tuYNqTwLJVqH3wYE7N4DL",
  "key13": "2wQCFW4A9DuZPAzugYn8SxW346YhUehuG5avqi59ZpaFGV984UjVW7nu37VNSCs39jAHDUQ7brKHc9P58qymmBcf",
  "key14": "2Hf8ZGwsRwKL35tB57szpdq7RohkHXyVd2JJUj2L4pZACpJ4cAyYqv57Wc3UkR34pDFeWyhibke3VCYDDJQDvxpP",
  "key15": "3un37mbJt9LNsLdUSpRsU7k1uzwEYqMsrh4DhyBSXNJfBiz3M6wnNX8kXYmvEHmHX8xMovHZ6yAAMK4tLVPGoAjS",
  "key16": "5igwhqta9XDa6sqkyBHYmmwvPHzEZBZEqsXqFdM4WzuW4KY6N5eEcxGc2aHEqMNggnSKuJ7rWsAyyLVu7LbF1bm6",
  "key17": "SA3nYUyirAs5RQDVXyfFKZJBvpBWSN9FPtzfgFXnUJdqasVYgQQWDgJcEmLPPqW3FyS5NBrpUKnbKJ3qb6jVdr3",
  "key18": "55sh9jZ8NLUmnmsN9euSeqtvAN4fK6brS8eQFWswdBCwFmzjgsAQiAujXE4BS7nGjFq3JgN3WdVVhfUgsxegb9zq",
  "key19": "Bcwkmtk3eyQdGC4sEcsczPnYPcS2s6TtXtxiBwJFGrTdf3HxfobUu9CpdbQu2Y8y9KcqU7CmRiw8Q8dC87wzNYB",
  "key20": "7XZJRXKkk4mu8e3uAaredrXhhEgxPqu2JQ8icGN4B7GsRNPmyQWcMXN3CdQzMzW7UyFiyHZAaFyj8VLEQfqC77y",
  "key21": "2Gb65fFoC8ZVSrkdskqi3WAvQwR2hQtE8qc3u9jaXczi7SCT5WKTQ25Bb91x56qhL6ktFztdc882atHezt6Vdq3J",
  "key22": "JQ4AQuxmVMXQF3uLPNYAcgWuM79cKYUA6w37mKgBy1KaEyAVCj2aURgaVEwdzTa9nx89RC7HKRG6zhnbzenuydt",
  "key23": "5CZjkMySi2sWAiEM6L7RFJThjWjT7d9aCzKY3SeeGBDowGQUcGfM9eyrMCATp73rcT3nPKLKmJL8QWf3m6RCS6vH",
  "key24": "3UzCQZXqjq7cmoP7pp9gTcMtPfsCdsmC1aEbckDnC7anLKkoTvCtvnaiNSwknHn1Y5eU2hUNifdKz3miNEFqce5c",
  "key25": "5v6SK9YZDvQtzJ5x3EKMduRdopaeqq5NsWG11BBPvdT9FwGvibmVsZXpmXidWrHLSfK6eQZomFM23u8NRX58iVDk",
  "key26": "3Q3MxGJQa1jc1dWqyVTEKttYpcyPEDKNG5KRjbvcRALGqzfZsCZ2okbm7GffZcbGsCVim75xP9Bh9MTC3thvUWNs",
  "key27": "33JN1sYmr8h68Q2GGKqLJRpc1wfKdLzwnZgvF84ZsU3JqppRcD4KGMkjRF16aLR5LZRbc22X6ZDSyk99gsfhvhn6",
  "key28": "5X3nXmZ3fNShAVKrLWsDfQ2BpojwGwALLrvFJxSukT72qusN7wYjUQZD6fwnpyr44CTWS1NaiW3cc9bcDJWAXrY9",
  "key29": "2nPz1zLY7qDpbtGeBJXRQBxX1SZ9RQ9JCJepHjfeLnsCf8bFsb7iFwJr8ZCCRwDNLnfQju4ixuyokc7MvUCx9zC3",
  "key30": "5phVn8ywKqvdvQeo7zyFgynfsu2hjjqPZd4t6JX6UqsUFYcFSHvXESUCtBnkvBfiwu7guvdiP9mq9tSfLKVKGEQo",
  "key31": "51U1unTBmw1YX4W4HZX4c9714CeGHM42bMDQyGi8MTDbTZbTjnDThpFiUBUtr7gLb7AjeBAuh1pSpeA9cPjTxtpG",
  "key32": "5p4aS1YFjGcKe6sdZ1XLkdHdU6NegH2baqz53W8ZmymF4Tj5mZ7c6hNF9E2cgdVnRUnYEJ8JbLZQ14MiwUz1ihup",
  "key33": "32AVZxufwZWhSgqxhjQ35duszMDjDD5viTVtTgWYecjYSx9x4W4GUE34D6XthFqbfZrbmVAP3skFZPEdH6y6j1U5",
  "key34": "3jcUHWsFXSuhbik74BzzX9RzcXqRNWZQfpLHWAxBjh3JSr46C3BKTXFmZJ1njJCTauyvF9RZ8vkKe6dKhBKqM1ar",
  "key35": "4eRXZGvpsDHuZrRkDZSxmRhA57Y9MU6S1Nvk6Wu4vuDfTQ1Cr6n356mhFc2Awx1E2vaGUq45JaqNWzXEmDX5ByZy",
  "key36": "42zTWKe8kmonWRhiw2SC8ySuUwm39A2xQmomptUNsT3TSe5F3NifHsMh25Tjseku9vgXHs9m4Dabbd7UAhHyfZcL",
  "key37": "3Ntoyte1evPzkusVhpPCvJcrEUucMdmbxJtq7zEZAKVqUnHnAmMUcMwyg49gao6F6FWaYMhcejBFoTMdnjHESYJu"
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
