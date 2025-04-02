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
    "2vTTx694mZbRUeQCPRaLxjCGJ5qiciEuvBVgF5tFSmE9WCq7X8Ban81pkmfnKABx55M3FvMVo1dqU5WyiyYkcWW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P7wvwi1XcSiBsoQLctTrvitt7rAsAY8HnXp1LNjAiN4Grv93MA6MuYirmSwF8mHKijsdmCzxnguaqFew6u99tBZ",
  "key1": "uyutyvfZ2qxFx2JmxjvEAxUW2kuxguLQ6pWrjKj8HEPvYKVMBGkKG4t7Xf4RAnGhnkZYXLa257623qHw7bUGEN2",
  "key2": "33XWJLBHbUcKgufsZixa4Y9jRump2J5iebSFRxFCUm1esk2LGGdGPmNF5UniLk5qeojGpwzXanGvpVarX9jRbz19",
  "key3": "UuD2vvB9vgfxTKW4Pwzg2aHVv7xy8mrEEa9Rnhf4AMWVGdAsxi6ovHiZBGNK3qY7M8CwTXvPFCvUB6gMKxUAHDQ",
  "key4": "5MCgWVmWpTaPSyDPmU4H5mcf23pp8Vco8TrniezrsECfRVTCkF6HtTANb7Fs5rRQxjNgWEjBVdcHimbHX4bJE7nT",
  "key5": "44ZQjowJBiXfZTXVfXVoKx8kLounx2WVDon8WeU7nXVYyNBQwfX5c4UUNocjcDZygWJSbKujD2WJDM5KqWopZA4X",
  "key6": "5QP9tsMcgzZtcUpngjXwapn34tsvnrBuGFtRnTxJ7X5ZxSrGA6asSTqhYkG1EwjwnDmKJhPfxCGp2tiqeLzafL4U",
  "key7": "5iqVidRSNMGnY5j6NbfMxZfA8andiQhyg5PkBB1wfQ3L7ubAwFqTakdeBSzgkg1ps5xC2B7eDS7iVrXtvARGPxje",
  "key8": "2Z1Vddh3fh9RYvWW1ivPRUoCaVbjPShdWBvCdznXXZwMJ8A927C99csSYFcuEtbi8EtTLV32KEab8EVN6RSigNRd",
  "key9": "ZYvJYFtzLUNgBHJA7yFz1mA2nJYVXx8n9vBiWJMxCy1opLztXx8KFQuhgwN64JkPU8VBhvS6RRKQFtPNANqZuuk",
  "key10": "4RgYcZKWvbSaNhCjNtx3tsx1Yoih9G53Effn9R3j9oXbNHygQdPmXkcy8ffoCs4oDBmBGBoP8wy8urz1c4ChxuFk",
  "key11": "mLAnjRDnGA7uTkdiv3wsDRxqQjydpUJijdkLWPqE8MZQcd1vtbQ2brUQABkf2xdZtsGpDoEgMisLiPymhGw7BFg",
  "key12": "46uVD7RAJK2YgS6GSbT4uemvC4aKjss4joNcYxaKnJHVsBj1Rvoot9iR3sMwaaD8t5marMEKgp6uKBWd1zLz6PBP",
  "key13": "CJAtDSZASXWhk4MJFWzPgAjbKSxzvTsJzuASUpkSNrLCRS2rDiHMzf8iU5efzQn7BZg8eJSFUoySJPUaxLhxUyA",
  "key14": "4inv4TGYX5zkpkiNFp6KGpweQ1NDe8N223ShZd9Sjju6E96RNHh7pXRUhM4taYXfz3pP7GtTRMRr9Z9CSKjpb9JA",
  "key15": "55RJgV5aigQdYBz63BWJrexteRjFwSJUAkwhPmEyJ3j1Me5LEnntRKxQ43GX5orAj9NL7R7tV8E95eT7iJyFTvay",
  "key16": "Mjcw6JoBJY1FUaehYL5WskRquCy9K9Qn91XzAJD33BKjLuZj35m6UkiHd7kJ9uc7iyXcN3KXMKFW5nzX6bvGjfM",
  "key17": "65DCWicMejEmPrpSraNW1cr13JkMtqw1CamEHfQJMGGftHHJCvduvm3wNuZKXtYSvZ5Rf8orLEGrUVc19nVBhgu",
  "key18": "5zXfVQMfXMHk6wA9Khk2aUiqgkqDfKEc8XVqpamVKNN5KpS3Wpj4HdXhohJQZ7WYarRmiajtpVuXw3WrpZNvWCvs",
  "key19": "5eyGJwRPJb9wGjdJe5DaLSiMDzoYitevrmvtRP6hG9XV8Ei3RkLw7r3funs4AyF2KAkQXERp9UD68atcbDpZi6U",
  "key20": "32HaDcyoN3ApMX8RAnE7zqmnuMZi3Sv6qdTRCmo992hVczf2xTzdFcwdqRzjycsWnAUcfsaxwDkMV714VgwjvA1n",
  "key21": "34h5zk1uing3rswWx2K8vHGDdVyHKEu9Do7yaAQGyCNoUPWj5zZGvdoaoDSvtMfYdTzE6uieuQAnEHWZgMBrPP3k",
  "key22": "5MrFbzhPAfaNXvdz2PfNNPutCau12GGVst1VHF1nrJsQmH1iJxdQiCCbyzqhTknfHviKTBhY249jwZ4VWffNZt2r",
  "key23": "2mgAwLqZahMpd8jNZZUvQG17BGADqCzaJtqtqWCGxBkPEWV1ExCvR6EZ1tV4YydGCMh6r9A1Q6ZJ4DksJoYV4tNr",
  "key24": "fnMXayDS6vfuBAFr91zeMsUFD5Ug7UAmukHv7xU1cRzMuCTGVARxrzkwhARr7vwW6pfyUhhwC2mbgUJ8nE37A7c"
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
