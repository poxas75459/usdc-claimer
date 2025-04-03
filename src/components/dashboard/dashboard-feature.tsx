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
    "hateRQYWvy6SHrWAnwwuvikgUEqmCwRZfCiQsqmxXGdKR42ieyXQE792KXyJVXSeNrSDm7gB65euiQizo7KjuNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1X4FFbiAKyXGp2i8pPbxZ2JXherrnUXA5GU4sokpwFGepmkrV75vvFaTSWHZNk2VdyJAmNC6anqdh3CGe3d1Bi",
  "key1": "3v4uCY3vQgChyDcRonpTZS2gt7StnfHt2jE4DPE9hbLufXJWy7Q876YAsW5HVutHGzibggZvFb77TVax3G3YHZ2K",
  "key2": "2cHtoPVjvepADa9kE4K3u9kHNTakJvWUXP25d51AxmhZENBvniiCK2JL1qCA9gxn9j7ZrND5oq4baV2q11y5JSuh",
  "key3": "2o3G9i3vxKUxfLbwZVp2HrzhLD65JonpYE22k92oDqPhcpbJVSQZ9oW6jjrkxVcsYj2YMb8YfAaMxaJTGZJVs7ox",
  "key4": "uQ3q4vN6aWV6QrXnezVtdKDunkhSokksZ3neSrcHzadtXYEjvotu47m8ML4tHz22VHsBdRfy9usdKu8WxGKD6r2",
  "key5": "2iWLQzLzxwDkkMhY4zoAwzx7Pf72nyyjNRuEfizFmFzigwfj5ysqZJPLTSXGxzihWH8459xPbRMNtNd9ft9rVaG8",
  "key6": "4c8aYFv4jhcNk1BqfsL3mWZmJwdpqAbi2cJfrV6PAub8TX97cABbWSM9H1EpuTtzzgh1JhxgfQ1ZSJkowrHupEGD",
  "key7": "55BxZ3vBpWTm4YeJDCY79ZXpq7BNJ3t212q4CADHx4iTsr6MbdYFxpW6D7zKZsb8N2QchEBDP9v29XT6X6WybE7f",
  "key8": "36vLte2by8GqMeXvwqajpBZ1yT4jvqP5FE5nobBVKDJvneEzcGY7cuaL6r9XZjeFBjGS5ye7Ajjn6GdoRUCnZuqX",
  "key9": "3DUAcb72SRk8A6TvCfnD6QaCgTc7r6VHqAhyRkJWCxNxZjHgYLjwkxwptZhhycZegftRDRNDfMw5Qc1ybhgCEyeF",
  "key10": "5uo9B4FNeX4V6ds6xZ3bDEVjokRSmSWoiEtaz9FtFXvAsnUFZtEk5WoQiD3gq2Z6zprnMZnPfMNW9pDrea6WTXD5",
  "key11": "4XyT1G6XxFjAHyzQzBBUL6PM9CFAH1MVLFAkXs6JYdc6tCduU3rCvin1oHDspXXu66pv6xab8MRJ4y8N2qAGGYow",
  "key12": "3kgqWakwfb1W8QhoA93Xdy4gfV56G6R5qvVp6pYy9fjPfthroyxnvmRmFVqLbBnCoGoe2Rri9jNwt6v7UpAmKTZM",
  "key13": "4wMx7cVjh2pCibkz3nknaDoXcxfBou1LvGmY29uHGTu4ucrFJTcJYzUqRuKJtviB5rBTanvnKdszD7Wy5pwG8Kff",
  "key14": "FXCsvj3oSiEU1xQCmFYuWSwjqv871HwuwoGusfyc9U3Jrj5tVpYxR9kahH6id69hUEeftB16N2e4zufW1HQupTc",
  "key15": "5jngp79a7hnPAvU1mm4jCkGMUHbKEtVfkNWe8iGXTWLNntThHGrqSJsRKQuCZ7CfuyVmZWA1okZ2JfNCrbHtJ65S",
  "key16": "4gwjGDQ92D5dJzW8yj5hshi7CyD4GNYHXs8i63HkXsRje4HA4UYqJSHaaYtbJBkTKFAdjLG7TDv3AJTnYKxxAEbU",
  "key17": "2CSZ5KqMtAS6hk8kFgVg1uF2bQHjGh3Bkm4kNAiMAmg5rCua2jD763XdtYNf3qtgvMu6ww9pQBJ23GpkyYHi7rZv",
  "key18": "Jyq9FHB5TSZJCnbjweKAt3DRhZyxhaKesYPGnoXEubHiuLGiDM8rjB9ZT9xu1gJRePp7mvMukCiKaU4oSR1rAK8",
  "key19": "22d2iwo8C8MN1ATL4KCF4mBATFM62yBvEtkybVdLGHDfWpHapvoitd3sEAibXJAXLPR1rU2dUBVChZhPLYxP26kw",
  "key20": "4PgVCtdMJMRKo9YLRxJbfHTH5N3S954hsZGUjXPxeaLBAJWt3W2VsG2bggehBoV12epLM2KuUYLFX7T7hSsZEYQN",
  "key21": "Zk2Z8f1ngz65PucxBNX7T6LUCPcj62ZKKQ5GovVzAY1FEwPwDshXRf57mCKn6gqTkDSqRD5GxqAjjrPuksT7aeF",
  "key22": "3zfTD6y5MJeGboxEw5xs2V87hkMdK43BEp12nvobgKDVzZ2xPK2r19Hz5Jx9yi6c5uP7oynqQ25iHF43r4E9yGiP",
  "key23": "3Ljsmt91jFadNYg2RciBAYqtgSyF3Bwe5fj1XWoac4rGMX2pgN24h6bG6NaCaPbUXuqLXJ6DwRSj2XjYJfycTxMU",
  "key24": "ztWouxZvnwUPk6uHWB7ZKEMoJa9Pwj34bKst4NMA8YZyC7voascZMoLZaa3gjkScrucvTHY4TccdxjnWG8UuwGh",
  "key25": "41jSBHN2mr1A6HXgFsiS6QzVoaG5jAs7edYw9PoNrtRvY7UsypidBgARwzqJMkSycB6GJKNfgKJEugS7BDZMCY1k",
  "key26": "2pca93yogWd6T2SeypibhnKAaLShDz12hW3e27h5xJR2u4M9Maxk6j19SoCsqnBj4rjp3h8o2zyBCSVgTCigniaX",
  "key27": "4q2ZWZA9qPMT2BiLHAP7FdwYoV4xh4VteXyrX49U1JXkey9GLsqsBCroxhydNMtvpJ4Qxd4GRnBeg5jMb8ABVHou",
  "key28": "5DcRcnUXZmbP8bBqdpZvLbT8uRY9hwuY619vHK25C8kKcfu6wiR37QB7JAUJ79MBPVXWAZwVx61ZLdNdEANqV1Z7"
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
