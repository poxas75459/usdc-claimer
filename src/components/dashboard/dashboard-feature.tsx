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
    "4KCknBjkmgQikw97cbJpSrgJQdNTNsarQUqQ21E1KDkHNPZmYK1GkJ8En1pWeoqfih4cM9GFc4dvwGNo3CHwjfKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qv7iHubeYQmFa1Q9foStfN9gsSJMvyCZhXp7uUsf1GET7XPiFdidqbw7SDHTPoQNAXVmpEsPgr9yp8jiiZ639ey",
  "key1": "2BzyQ4kCZC1UzQxNEML5ACfNykkeHb1NGchUnsy1uRtcuZJtGMrvCtJS9zBxiuzowhFfXG9UJyoLnfWnzH93xRtj",
  "key2": "5NHVQbKt79Z4qprSLjQYbT2ZSTAp1JvmwGw8cPZhp6MjppCSUesdyip4JzAiyPu6Ft1CVp34hTJHcw7F2JxcqNHg",
  "key3": "T9DQKazFKE8GVtVd7FbFbcCYxZf57v7RqfmWuaWWq5AvEqvCFeLUhFDZ7DkZJQofTRmrtYgcL2HfA8oeh8cAD2F",
  "key4": "2LoRcXhfDai89wweSgWZ6Va1NniXJqgUMyLyigu3fP3tZB4Vg8URLQ9MwAamYPChpjGxUMRF2w9mPP62Hnjw1fiE",
  "key5": "2pm4C5eX22nFxNwUFnrDGDa9stFvmZG814VKui42susnJfRmntFDsToyh6XVjpnoufZb2e5DjJTKWdAbaNdVtDZU",
  "key6": "2D8iant9mhHGZFgrmeVxTsWivxbjqtmv5RnYiQEM866BV9c36bLd7Nubb3ykpH5DKxiQ4NKLNknqCMykCFQNqyBb",
  "key7": "RbHwWwueb76nPbgMf4LPfacMFpd5RoyYnkTNNgnAwyDfiLazKKuPPBd26pbifumZ9mcCrZGvM1cQsSJQzbAC3XU",
  "key8": "3aEvtC75Jj7Av6uW5vxCGweMw9pBaxwZyF8n9xQ6YsrBVCD9zmcDj9159FMG814HLZmBCceKeA6EwrK1WXjuFnR6",
  "key9": "59wCoiQhB2W4kqP4sjT3Uc6nWPZF9bGbX1W2DeZU7gN1QYUZbEdiSWwAgn5XorJXHGzgwJN4K9mooHwXgpQHFS9Z",
  "key10": "3nCGR8JsBM8G5ijQFz4JWcP7EQCGSpmMoYieJnEPNmA1e7bpRKJnSjGEhSjLrLPKFxMJg8pRmV8wepHVWbtTdJ6E",
  "key11": "3mpUjX9eN28ebtfcyJkxqRj5k8XE5qQrgDdND9UdRq5w75nRTME5NTWPbWFtHDgqH2wZ2kT6TULtTUGfWVxKGUrK",
  "key12": "3rpLuYrQSVAAHgbzepZ8xgzMavdYg19CCdxMZwh8DasxwP9PFFqd8sSTpQDknFLRPwbbvkmSJUs5nxxcqjUik77N",
  "key13": "58pjDGnMhVUVwEeK3riUhjC6EejkvHFaYG4ZkRE9Ex7HQn58X1V848LHKyuo6ANuakDTYr3vDqWtsG24pauMQJL6",
  "key14": "5uXPMtGzvae3h1EFT7WAuXbX8KoN9Aof2vDcfo9hosgm6V4QB8beDxj17ZeVgnc8HyS4YCBARvVtgTCRSPUaH6WH",
  "key15": "66zymDpXTvsfFkN3joziSo9Jziq7z4KRLdRgj2FDrnqhm8wvcgoZBDu5sV6YRQAsqM4Nd3xxocfMgX8NKd5Mf3sU",
  "key16": "42GY17L6zeiyFNmNWbpr1oGnZbnnzyRobHkjrsEQwR7KnoK3TcBtyGnZ42dasFHYScNxahfG62iup43pdvfxNVYP",
  "key17": "3tG8urNbH1KyGdYV5z5pQc9AN6SyTtN3SsbZAo7a7nWRaek7kuCt5L1oxh2JsvuRZ7rD9iPd15KVDWiXwvLHE1qW",
  "key18": "3ypj4qkPeTaJgaJEnCt4oeSogVhGTUSi5ZJbCfL8BWWGE7jjYm4RUapDsaAhcTikAQ3CoKD9xcg4Y5rqQbXiLDjw",
  "key19": "3BszozTWRDBbv6umQKY3onxqbbh6Hne23caovCbGcGmDxVVJ7eoViUHGegGENsKrcnsVPfDod9YvwhBhu5CZCbrB",
  "key20": "AYTUSKYkth35ShGwxJQ9G9sUSR9F3KRs8e3BGvNU5C5g2FGUHrg4PUTSdupQgGfvcbhBwzvCv6Na7f6NBjqD4KK",
  "key21": "VXnPAv87A7ZUwe8RdQ1Exy2BTQMbohjS5ztwMgk1GFdLkBEBtaqMdZNJat8wGVuGmnDfzEGeWZMUWNxqkYGFzqV",
  "key22": "4yEQjRQWjqCp5C2D8kzmUeGNrN537EbSB72xUp473dMScLVcdYuDj4TfUqT6NrgHqhD69FNhvDq9zmY7AHcKqEpf",
  "key23": "3yqLx3PVgC9oHBicuxjgJmJJ5KgqQBQabgDcPqM4RgJHH2HiwVtQCR2FjeRUoi8SdrWVkaU3Z5E8E9QwpcMoaTD1",
  "key24": "2d8jqHzC2kCCkaJLpey6GEUbE4EuJp1aAcLzgJ4arnxZDvXNw1NCRnqeoHFezKiYcpAZ3wdVWQfuScHL1Ef5DLAG",
  "key25": "5nzQWrW6k7tUb7jbnhG9KAyhvBwzqvcg5as9T32hQafz4qM85z2B7XTEZD2eaoLnFxTTPmHQ57UsCAoJEKyG1tuk",
  "key26": "5wiSzTmfPo9K8psPFDFjg6PjKBnQHz5GEqTkuv7oVCjHRQkPhDzKAUGkEv4AR3PwMzNfgLkc4BWu17RCwQaRnkv1"
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
