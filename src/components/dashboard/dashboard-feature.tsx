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
    "4vZK3k8oQL28NRkNA669kDjhgHhTMzyrqNeQzwKU2wGwwNWD1mKmYyt7oLT6KgWoKMWGiqJxYWyDtsV547UtW252"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zsmH7w9D7LaHRBm5AK9EZFusYjKxZUuTf7XS2ZjVwqPvVqDVQg7XZWdugKi8dMR8ZNpjhzubLvmRPxqk1LaBpa",
  "key1": "3F5DKvZMaoRdkWd9H3v4PWiMRykYit8hbSNBRfBH3XcWtuPZR151Hx8Y7xTXFvubGJF71zqJqzq1p5JMvVXPnoQi",
  "key2": "4KF6U9QgB9eS9rXfgPZkdS6wevKFNDB5fotAFU1SQco2XRN2q5b4LbJj7WX2jafcUPM19T4XxXVTEfvYp3sS19EW",
  "key3": "2rSGTG9uA5TvRA43M3PqZvoBhSjzosp8Ru5yQtL9kVpcbxdTcFWox3vZckfdum18e8Rk981dW7JAg2jQMW6ctGDX",
  "key4": "5Cvm5BirvzPhvJG7PnS4xxhDKxkS8A2Mqpkgq19u2yo2UTWesGhDtRtq4nifjrRuatZKRbk8uhb8caNNWAX9TBRZ",
  "key5": "4eSFDmGqoA4dMXyVs1XDZsyuYmUKt8zknTFww5DndHz1LWYuy9UGYRH1NpYUqLRgmpdJWK3Zj6MK3zXj1VCLQy6W",
  "key6": "5PgV6GU9U5b8EJwxgq972dWQkfXn8YY8AgXXi32Rgo4v2UR6m4spoQYmMwfikqpMwbmQ64JfQZSfH8oLEB8JbMCW",
  "key7": "ChEV8Ds8uwnUkrhr38gTKEVnH4R2oukZfqs2KayTPfM7iGaDj1qoypWCSd2t6gJDZPJ4PRcP13HSdEQPNmZY5H9",
  "key8": "53vQDSzddKUVQ5UsYVcWmAobmk1c3V3HgeZqmUiAfDJQ7PcMpKjVSL4G8T45rm3tgLaThTQsC8Vjn8pgRcRnsjc",
  "key9": "3yhi7qThLRTgxsSzBoZcc6NjuZifdAqgaD3RrcyexZdApdW7fzahJQYHxpaJbptWUHdDt1i5m1sxWkmAXCWLPeJr",
  "key10": "4NUr9regSfWJbwV6wUgH9PJ4ndGL772j1RhMBYAgfNoih6ji5GDoFhsu9WeoAtvJTeS66PBMBAYWqhktfDJJ5uPJ",
  "key11": "2yXygKy95P2AAgRKtFAS1t5spFAJFyHc1RdEFp3TBhcCigh3rzgDvDFw7Scte9rhvYG9iuLZb7BSsgngf2mg5FgY",
  "key12": "4bA3NXyNccnPfuDEUXGu9NoQrjyVgR3ug3YwHQxqZHBFXMqmBZbzVCfU4dzpFpDc2jceYtf4K9kYPoN3Zm1ugEnb",
  "key13": "2VuRvxEwEbdKfbnHc1BZoQGkbiakPembGdNHEeTC8dNnDCjHANBRUc3NnZSFtE5akgRHFa825wBh2y3Fr2yZwSy1",
  "key14": "4LBQKrvTQj1NcXT5PoGrdLhB3tPemkRMgBaLGm1HsJ9v7YqatTcby8D6JFD2CUhdj4Z3ecj9G3kv14wqY92NkL1C",
  "key15": "2azjLY8YHHErgiVamwpLdZ15TT7DTNpFyMXkr6xguT1WgchcQMsh6YUhRUWbGPBVBzJHFtHwewoosnSRHAoCSSEf",
  "key16": "4yUdJBnvctirjYgm4kbZWqdRR2gYd1pZXGvhpk85FBcwSX3jdXLg2xpL3gjt6fCjhNSbPWs1BQz37PBLY32iYkSb",
  "key17": "3n2VTGfoGsTN4CsdvBD3cksK8gxo7nufGZk2ga6Cjdc68Zc7LrVWtnabihUD1xiVtCzbcqwSqKVKhYhRfBo6eJZg",
  "key18": "5JuC4L8djeL6bcyu34io8ejnqqWuXXupRKECbH36yb6pV6vBqBKv6NTf8X8NncF4x8qfwULkHPQzditXm4H3dYWX",
  "key19": "32Aj4HK8WXr6uEjgrWDx4mTA9vusTPsnvt5KveKYwFY1Qqw6r7nafuHQK6iX8jNYeFuB9aDeMSqaVz5kkCMoxQw4",
  "key20": "4k7emfWFtFaQRmsDJGxNJV3CxHrY3Wb5JE9LufuUuqZVYihB59qM6oyjNQF4aJ62HCNAkfEpCKUEpp834cqd1bJ7",
  "key21": "4SFLQ78MGq8edXSn87NiMkAvP9ropYc5gCcx7QYiD7kV1X74TfWzYUpZU3j8GuqF7omdni5GMoa6FvKbBEaNpVLw",
  "key22": "3wzEfkdjztF5UpqHtThxwNpuD6MR9TnXJAe9GkNa6VHBWBbJFSaYk8hYdTxTcw17eFFbfPeas21ayWqqdzZCPxYx",
  "key23": "2QE5iJp8WfxxoapvjPyoNEnBhay2oCZwrkAkSK88ngvwQuBzFVeHHmhNTJPrdX2RF5DybjmyqejazNmF2KLZpw1a",
  "key24": "482x67jdGcqP1gfVEdb6UTk2Y4WnqREh4eTDYG7HFGGQV2fXJ4iPPtzUUuX2bQmARYtqCFEmA1rQP8wjeruHKFcL",
  "key25": "3wdRtEgA91wsCHEX1kGnEpjbmJdNvwZNYMcKgaG3pcWbDYpEMqKLAS2Mzk7hubWiAPZ1Fm4Yd6Df1Puc4xhu8Api",
  "key26": "cKTZTmj1dbxvYsXrikz7bPzKTRTUsMjmu7XyswGUoZg8XdydtCXuiowUBGLKwni4UnP7JSytJvE1SYMYG2EAES2",
  "key27": "3qBnavfbtCE5d9yoLWKBHECr3Q75vwCR4xJPMkJUVEdc65vx8JvoxHLNGL1k6cb2n6JtPPgyxSFdrFAyKXqwLziS"
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
