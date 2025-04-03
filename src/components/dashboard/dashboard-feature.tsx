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
    "2VsSY9NL7yMKwsKZB635v6Kn14rmXpFRzp4ZKCKPL8sDDbG4jVHhagFzbgUgsnw7LEK3gyVPqTBZiBPvzvWY3qGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aRKFzHxHwZYzRCzeUNRcPqNG96fDTQ6FWKASWRi8UwthxyZoEmGUq5v4tYqLuuUpEH9YXup9pzKqHfRerWeQEN",
  "key1": "2rWudP79rDPySBBbGCRZvA5zcJhhtQJzMTvSaeJhkCozr37kRsbnj4NxvT3Ujhwv6hJmyLWyuAPrnYJi6Wy2V8cf",
  "key2": "4eSLT1soqe3pKQybRYQurSJEKkAWojKrycbAKrYr8mYnJ8ueBm569fF49mRo7sgCu1wdKThJUW9LfN2ydhgxmymm",
  "key3": "2zPvnawUj4giys8JnYVUhJFAo2sU5HRSXKx2C39tZCCwif4NEYWkgAKZgqfFYgvz22AyJrmevz81RBtD36SGtPJd",
  "key4": "5JABefiJG6ZxEefnTydwwU6E13JbgY7JAVCUZF9p6XRSF8bSVokBYidAVSXZ45xQ8CopKQcQVE2daJ1stCA3FZ7G",
  "key5": "gJKqxTkQPyEZPfkT1hXTqNmteJb81DrsPuPE38gtoPH4es6u6HMunAdmKSdZJWeQA8VT9T5pV7Xbkz7cy6UBCs2",
  "key6": "21ZZ1gyjBakdCMdokenp8a8Xw7xPRSK6Tr3267v2X3TvkEG3jHqSSXMm1TvFrwCy83ybD6U4HVSLnBkow1sDwC1S",
  "key7": "neEw6A15KpvZ5hSPhEiAwJHv35jXuVwaCsfMnQeA8zxK31jMt5CJ5t5VZvh9neKkoj1V4cPRsdywwqxqXcrMmFz",
  "key8": "72TX1U5pTwMxxLEUJmgr1Uvs2dWeRxLgM9RbuS7T6yj4m2V5uEuAyS7EyD9AqbgaZfmw7QvWF5AL6pdgahZyd7M",
  "key9": "5kG9niu3fcZL3HeAKM5tPB4dzkuciaMzxzECU6LoLRPUJXBwZEKeQVhKADcT8dFzgJCxmjQqoKRixC8zx5ZWYsuZ",
  "key10": "4vJtkz4vaHAjGV415DxpFCPG36kLq2Axbyvp12Gd6JqRnNjMmPFnxxF9XvGQFM9bGPhNXhxJbfNP1dVVwGp75wtH",
  "key11": "2e6JP2wXGGmg3c61PHscBabNqM9fVMwvW5tRqhEL6boTwg6dZhWkoqx42dHiijhemVAmWUTDttKw2YtgS1zPmFfE",
  "key12": "R8JTbuaZZXzMoFjaWfsFJWMNSxGUnqH6Fi8R5zs2GmLdQ9bxNwx5MGbRTE8HvQbYWQtTiN7qg39bWQHE4zuRerM",
  "key13": "5oB87tDh9hdfMy5GTsPPg9m6EeuUVVm5rYTrfX9dir61k6XHhaWwZTHtwnHw2swQthk1tj2BWAZeLcKbyqpaSJvB",
  "key14": "424UEpQDSgCJsYsgXtP7jgbo8XJYcURd3HU7cKghRvkcrh2LeK81fZL4iNyoq1qV9c1HtL4RpDGbjngvzG9QKP5T",
  "key15": "36Cj3R7DoBQNfR6VVRDX9hLTk9fHPSMCNTFNsLkuTLVcMrRPDBnDhJ4k2urEuQFan9RKjVf6pPVhH6pzHjrFyT7s",
  "key16": "2qB1k5qDpQ4Ad8gkkEfn7hrcQxGEUZYf9n4BEyLDYZznktbUAi922rE2yYKUKZh2j37nqiJZZaYKVkD4yudGCFvj",
  "key17": "2jD4RkLoiXrLm3YZNRaJfqcHDjsh4a7LQ1FfWLggmFL3uE3F5MJxXy3SB8QpbswacWEKNChUgtUDprR6VwT2vF3k",
  "key18": "2ZmAdpjWdhBQGNRsbt8X6EeP5Jn1dvCVWh6yNCvbYkvBpzTEqQ2PTxCcfdfk9VKFZumZfQFAA3XRa1Q3hnWMUu2e",
  "key19": "2EznB7anG6zMQ8UbyWgcq96twZF3BgzLBuNCWzHAsa2adWefXxB2G22SaActbeMQWms4UZNTrGi6qBxz3a162sDm",
  "key20": "4LQLt4dPgbTv8D1Q9k6T6Njtc2EZA9TSHWFbcikgPgrZ48c6iLsDwxNFCsg3dWS2xC81NTXcHRwwsUBbahpE5siT",
  "key21": "2k1oSt9Eqp3whR8nUtxkpbfwLpojVn8SV15LxgqdWHBMimgFz1WthP4WBuHg6NrSear5XxJeZw3qbceKShb9ocnz",
  "key22": "2Jqp1DSTCtNooqufdgPQjHBgRrtubtRfyJFiqNpDzQwHtcfbA2nzE8XiUhWUNNfYX3bfZcj9gStntEmnFF5w1asw",
  "key23": "oSrj6Vbyvb4T2PYz3JT1Mr5BSfu7TbGMSXnd1yM2CS6vAHSLSmVALB3c4PA6KPWEJHust2ttqZn2enm3MJ2DzW8",
  "key24": "1LCUQx7T5DP3X8wc7gHzDyDtnzVaeZVF5Ry7guFKsbVFQp7QrJA1GCEVMtLRm3s1TC8Sk1kB75JtzbT8WW8ZzYi",
  "key25": "4zAHbkgdiVsmytqXos8azn72N7hncunQEWDFTAdDsH5u5hzPcrpMYKEAGALJKcsyy4zYKTv5HRvuPo3KTEq3h5TX",
  "key26": "XEfKcZhKtW5kuA694EnJNX4rurZGtG8dAjNgUxLUG1HCE1D1ZHTmuwryhMBpi44enruNn7D3r8TpNWwcn6wTpco",
  "key27": "2djUBoUkErmJciPM94YxXk82wCg726ggj7qUvyyunFy35ciCEMEqoXRQ4Bq8YiWuBEww3SMcvwGpEQe1U7XAuCTW",
  "key28": "3XJTnSwmmA8R7g6HERyGfedP2hsCc2pLVAXfw5DhwE8AAEpCu2SpJYfJ6SmdsUe1EksL25zGPcmaGDKvfbkSF5Cq",
  "key29": "4KZ73G7vHKXhTfVBVuxhSLmF1rttBSEAALgihjJdQ7MQkjRyqUp54NqC4VmuLsmnJ8CEr5ZnknzTeMtqCWFVk4Fs"
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
