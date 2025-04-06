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
    "3owwRVXHDVRc6iVfmBCEqhw8D14kJorQ5UhAEKVyFgwZ9kZXTmuVredVzqZA9T6zGN4EaLoWdeaXwgoBZwkyHVGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MF9oye2SaGvJNYX8RT5mpiz4yFiranh5MdKpeJeFcouRM6WobY28PjFtJ6dTm8hrGEjv6rEpFaH9AtzpC5LsJzV",
  "key1": "3cwCCVmkSzc2X2y4pZ31DQc5ivxF5BT6WZuYpFfF8RNFRaFqRc7x2htKksv7R5UNB15uqftJeDs1j4zW2TFRHdPe",
  "key2": "63BybznCqntPtcasxoJ3DmpxSVuiJw4dsihj5rK7rWvw1N32vqseemgDzykH7miGcTRBQg3RpHLhWqj728iX6SDP",
  "key3": "225Go24YV4xWqSYvA1XmB17vt7bzWjjCgpEB9e83rLQURaeXWwZdAijLA4kHyBxYRFonUPHs8hvPhJdzA62BGn7q",
  "key4": "4PHCUtYxGy6vkf54ECeNCSJexLxtr9BEXCBPNvrK2kRnK8gEXq4NUd6zngH8rtAq2skgRDDmGhBroa5YqNmc7tUU",
  "key5": "3Ke8iHFG6dkWgnyK91r4mB3wEYYuhoYFfzEnbqCSnHjfu4ZGdRGwEzEMeob2D6ygz7rNt7d6UTUNVqWWNWVNLTcz",
  "key6": "i4RBtPgo55J7xB1M8oCBWhNPkYRSMXQuJvhvJGNiYNnos2tAXGKGbXQDQ7hDGNGYuyR6vuVJkYEZxvF77moq13w",
  "key7": "3TVWVLPXrnWfMDkUTXoutrWAV3mqzzgbE7Na7sWWsDka4ZLa8sfcm53YJ7xiARs7mrw9fipvYXwpt4TJiGdo3XaJ",
  "key8": "4FHwcuVMz5fS9kdsXkZUv6efZNrsMYt8ceixEw4uWmtExHeU1pLLigZzuiFaRoCKbKPU6vz4JK3KMyKDC5sa8Tba",
  "key9": "2JwKNFHTKMJtMi4hX63H5ofShJoVFzEN16U5FQQNPp7YFCoFYdEzSA3MjgT86uios2CHQa81ywheoUMsiYB6Mvgj",
  "key10": "5dSePrGYRkepxo9Krvwh8D3gE3MpCD6bTKRfpzV2AB1HgTLs57D1xpj5CqafJvWauWXF2zWKLxUZZkKvaycCgvvB",
  "key11": "37sudfkdAiFKQBMH6sez1tSDp138wWaScP6EZ5bQCjoozA1kVZJvhgaQHsZkESYG4bHTdrDTHDsT4w7S6oqjYnbq",
  "key12": "3bFZtLKewCBazafBkHAqd7f32Kvktaf5UAEbKZv4KALjTr1S4JjywUcHJwCjUrwVewb6pnv5Mfak2fcUpfEbcNmh",
  "key13": "zs5StFQSb6PqqgSpyzAuX1Z9B4RcEa5xLU7wo2srwEV63wMzxa7wQBoKkvsTvG5HSpQcpwzR2AY9mjeiSZk1FW4",
  "key14": "5s84n1UtFdHzqi88jZUSigskAad8x5H788VtTXmYqNNMRBUQ4mwmAyjUQfz3RrAw8jm5N3hpucoXwwUWtdo5f2yj",
  "key15": "2C9Anvqrys3TFpujUsJoVz2RLZQsJGL1T86ib6VM1FC1iZ7ay7p5TrVs5wHLVsuEe2Rk6YApWtsKrd6qj97rhBdo",
  "key16": "2ootGhbbK9SK8a4MNiUh93kz252pZRv8C3ydZMez22JFyZzvjmkATvob53KBojCYRJigw7QSHy9XjZGdBY5cw5y1",
  "key17": "T8epANhvnnVt11EEEYwgTyLFFM9vowgUK8KUrZqsrogfw7YVNk8vM9d3CtJHNPPXupBGqdRfd14W2HAHjvNTQFo",
  "key18": "4NioWhDxRuPk4YRMxeA2AcdWAyJo49ipy68KVRgvPSu4GwMGoMPvCVQfgsvKG5Nz6KRik1q1x5D9JCCejTyNzqYC",
  "key19": "313u3zcLHw34zzCCEpB2iwq3THYxX4ktUDYnYiow7yiyJASNhid3zMHWMqUMxWaz4KhDzJnadsAPazBUpCZxGZZ1",
  "key20": "53rfb3b39Nq7VKLoqtQNFmeF8dYGqeg1L3P94S3JFxf5f5Sq6GLaYu8SnAuTTfojNCRHWbbBPADsGksxMMg7h9Ui",
  "key21": "63qboPyWvq9h46QAJsRJwoz9hNgt3dD9Zgi2TnB6x2S3iTcD14DjRotUFt5EccgAfU8sVKsxvCmXA7q1eDEGzNFX",
  "key22": "5aV85sUK4oNCHi3wMrHsK3ahp61YD6YKvgkkBVck1yzDsypJm8fm9TxnWc8Ddabw33Tx9D5nuyneEBPn39NBbfdu",
  "key23": "4Wjn5z4YNkr1Z25U9AGCvPq4DYVM5vbpiduv2TYJXUCPPL11EZnakUCVaAQJNKThAZrbgSwNmSbuNYb5i7ExjiU9",
  "key24": "5PciHTudBEUJdrpX6J26EyKpzeNuMvL3yPcKreRYKTNDa37exs4oL41Kfm7TmHJgwny7r4c214mUiuwc9Zfwh1CU",
  "key25": "3EEyTFZj73ojdKXoa8snGg9CKdDqmG4Sj8MZCs3ue8Mvmd2rjZiUjptPFpB34rLddsSsfDdjYXyeUBzsSVLQCKUU",
  "key26": "3JjvBEhghfSNYGGWcaYag4iPVtWrmpFeVHCqq6MjD7wrDbCyYtGxsVbB56wJg5BMougcRkC414MUHLS9pU1R5mhR",
  "key27": "2hFC3u6Poo3vkiQM7781mrzuFyi3D1f6G7ioucCqy9EoNaUgZM5o45eHr4M9t5jbGaHN25kDuBe9KjxXvVJsXh9u",
  "key28": "3LQsnMSTYb1YE6uAF2uGPdbYnK9n7ChUrMFpbo2mfEgaFK7aHhkL4GWbWSJsns71PbNu3nc7otEuq5J7xQWgaWYz",
  "key29": "TyKm9MYBFkYSDWNuPZWaRc2avE9GmRED7NHQ2t2ZA85a1ArYzBizBCThVPcdsnWz8XF4r4Yc2ExjtTPZ6WktXQk",
  "key30": "28fd7qqyFJ5FWqbnjqDyttn8EwsBecAuias71A1g99JyHf4TMK1dmyQEFXaPvdt8gZoXnTWbeEjQz1Athibhh8FV",
  "key31": "3arqzkKtYaXD4VYg8FTb9LkDm1iajyVebZRwX9knB39xn4tjvppZerrRyo6UD5h9XkRWTCjhaDGkf93X6si3m8Px",
  "key32": "5fobtoPDmaUtXpfswTsjMkoJcGDt4NJ7bYqViZ9fxmBdJX7mBXrg7QVcmDtp4aFQrrCsybNj1kWVsX3kcC5v7B3f",
  "key33": "38E8UCcuFpJrUJngmZ18xvW4qt1scWPZJVbdaJH1bDVuQ5JNzo4QzYHHcCzfiYWURcKwtxgqZqsN5DwwaLqV5YBv",
  "key34": "4UyVHu1WgJUhJjqcJHz6bdd3YprCe3t7jyBJDkaQDTpUMCVShbwEwpTHotL4wgbTa6FWvNDuHgrHpN8VJQ1qVxJw",
  "key35": "3zzVswUZs5hjd7UDb2434B5SZnh2R2M31vKNhUgp7EkiA9a9ne5VXkbEk1G3nZHXA2ECz1on4zaHaVGpBwJMSxLe",
  "key36": "5XMGCmTCwEN5W37Sq197KGxCxiuT88JFADSCE8s5SVwpzPJfeKzaUNuPvDF8YdBJeZAXDnUdoMcJMVLeZDpH8Muz",
  "key37": "2dGP5aFGVUMmUiJ3qNJybV35E4yQFXU7mM8DEMmjcgghjKy3mYJroptwFuPuS89n6Nhkk8uDQKZfYp8ReNZbHJM8",
  "key38": "5JJm6NuYBwygp112Bs9wrx7eQ6FYFBgEqdTERbD6Lo29dE7QM65hgcdKPLKPyH1coEjoYiXRomSSv3PiD7UosQvi",
  "key39": "5tSY2we27818XQWjrXmSfR5gia4sBAi38AjmvW93v5qP4ZYPSyjjXudqLK188BSex4e7fR6mwzM13TC2hPVYEEY2",
  "key40": "2p3My1H8d9ApHSAKx4yTZGbZaKQ6b8mwxihdGXhzSBTZofVS1Zp8oVpXojRavUowEL3A743yjmW55jgXpZRbmbjs",
  "key41": "2MYbmAhdDeDqVtp52sRcBvhhSJyR61Auw9w9dTdKDqe1Az1HPiQXZvvRv8NdGPDjB4wSi6KcC9qp1oUezLoN4GcM"
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
