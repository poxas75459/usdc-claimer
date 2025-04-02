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
    "4ucaYTB1VtUHEPwkX6GvJ9at7zEvo2KCTo112FQdiEZoxuFykqi3igxUy6tYEE4ZE5ntBLX9Lohjq5df3q2469gC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRcqq1dbaTCvDitZYhJutmNepCTibw4k8CoaBLn7f4oGfD7qG3MZaSCuJuWYYWQ1rsfz7FSchT3EE5bL8AdpUnV",
  "key1": "676PjJuQ12RkKuTLH5sBjY1BGUTadcmGvjAaTfwHsGZpYVihAdRjcJ7EzRdjm8887KEMCEtaexD78sXwg2YT6HCC",
  "key2": "5h2nDhJ6ZKpr9g8htb113eCHUafnNeu7dpfKs5qnjjfYTQpzXt7c1z3i1ADcshfGUHvsogLXfiSzGyuBN94Ckvbh",
  "key3": "3gDzRUQw2GrcBV17XjLttiPjjh7EMCzz1iy5ELHqKSCzeEjWHNaKEjQz2PZ8sswoShZzqxwazfis4ZnbK3MPdDeR",
  "key4": "V2pYqnDUmdHbbrW3bEENG7LSGUVdpP7pCUvDouZcCxBDaVzBZ9mWxBicfA3tFQxp15kr7cE6rVjmEZ3VacAsaZ9",
  "key5": "4vmP4qrbcubJKBosQ7cwYVVRRio6RaFZypFKHaSqwnfxKGacxGY2cX6fxVScjoymhVagxomZbDAGHepWtjDDbSiQ",
  "key6": "xfT6BeSN2sRQrKhtotGbLsatbGohGBobaeLMkqqtcyzzar9qx6yQzuNeWtiuxfKkxtgJHJ8sG5EabCS1ULV5zow",
  "key7": "3hPXc9GC5jn17wjK3kvQeziaqDeGNFyWdgVHYzewemwyj4cPGqMZdNBHrzKV15E3k6t1eHNmCuKgKK4Xr57d49rn",
  "key8": "5tV1dz8QZGrSESguW5rFoioVqmG9TDa5WtecGpxmg4hEBwreBvMMc7xRP4eQ1Jj9XX72vonBsLSdMYZqsC8Z2nNP",
  "key9": "3m5W9wK6fPhBfeByQyngg9FMpBuei9TGkbukATaHj5rcnPpJFqGXHjoyejAXxTT2jufEa339eDW61KCnZjMG3zs7",
  "key10": "Zg3Ae4aHKmispqM7neVdGkJ9iWyouzmkFSKauL8JvtMaQn7BYTWm28J86tbC7Pb38g2bq3U3mw5DoUr7vXVBG6v",
  "key11": "3mLhweYZwkmTD2h179k7PV6WyfWieSJuUgEioTCKfFfQg8ZzfNE2Ph4GK4Qvp3foVdYgVWqTvX1Ce4LDP4rJGrF2",
  "key12": "hwCxnDPSENMujmtBs9HXsfrEJLGFpDc4RXD1qr42wgphsZ1b7hKYf5yvAs4Y9FLB4JapWoGqWvPc9jkpnPJooqA",
  "key13": "3FyVcjDbVaSRgeuju1PPguHDLPaZ4MFXwoyFcZPuynd4qUYqCo6SPArX5nZmUYikUSikrjoUjxeRTg8rxdZQ65Ju",
  "key14": "4f7PLBvp3CnN9sDsR7NwkdrkhB3aVvGzzFr6Gdz1TiecF1ertvQtH9FAJNfxvPYQNAMWMfdsM2hrhxw4Kry3RR7Q",
  "key15": "2RKYcLJ4UVnWvE6cEgNAAofRiRKexyHXvve23tMEWhBQv1E5pFNv1UN2fqiwEiq4scRagxWPFiH9SrAm3L2Sv3vy",
  "key16": "4ev1SGDXoeCcd6rXrioefvUzoLey6nKc6GBQaUqV1LesHfXVwVF4jBDthWbsCy5p2WGd1jakE86tEFCu25jVGkmi",
  "key17": "5GSuVuxtc9nNwSDWFea4aWgVfPvq3ncMpWEzYorRoCc8n6r6FjysCAkMa6fPqVJYGwawibqnZBsjmuCJBkggnXXv",
  "key18": "4WYpfW7QwGiXZRkkFu3DPJzAsjgVFiDz9X29Qfp5H8PBT2ZUZndHQQH67cT6a1oPJs51aH8TrtQVjEmg3QBYoWj",
  "key19": "2AD9HdvNsbM9uQGzgJUXuNAQVNsjmaJXTi5jhNM9Xck6RcCipEEvTJMb9X4t65GxQv4GNn8h7SVdqMNaicyPBfNM",
  "key20": "37rCTtfmTifiDVxd9gSvsZ3r9o9P2EwBQ2mW4cVZkhaJAXJ9CN6tRhGKNC5TnggXnA88PE1exw9eLuN64ggVSxyt",
  "key21": "3QCHoPagqNRJe1XkwLpbmZCiKaYfqy2ihizVTc7ovbJ8ERLuFY6E9nRpoQ3SynSxbwKLQG934ybkFkmYaun6Z618",
  "key22": "3WyDZrUrFwdP4cntmHrNjEkMZCwj6Qnjr4effWs6PwtTCgQG1kR2VyNvpMkr1KmwdHkFeAP6HW76snPGGvkpr3MM",
  "key23": "5AiJfNzZyb8mMDErwJCYFFEDswyeqmGLAR1XZXwi1DejLZV2nGBNmbVs7WNZH9xZiGDMSWRE4RZ1FCCPdS7D3N8G",
  "key24": "3vp4oRhqAMB7wZZyQo4yTjeXosFTErx1HqfgDKUANegePyKL5zP8CnXjjsbcNtxBW2jYTARDnDjvnZRpfTjEbkvM",
  "key25": "5fyiCsFCim8PwY7HzPBmZLGik9f6gS8Zki4bXvfdtEuwfMrBrjekNi5ZRKRXQPKVsbNngCjBMKctvZqyg1y2Qnuw",
  "key26": "3CAuR4bnTYdT3XL8tUDuG1NhGqBCQstqyBx9HhmkAyVgFE5GrG2xUXH8HpA1jwG99PVqov1w2o7QNSvwiAxkevu1",
  "key27": "3qsnNLzWzezUu2j6ZmYdMNjWddgDD2Rg3RyNWNuWaPQHfmc3TQMUzeajDaGHBjxrxA31GrYAmzLrhX9yDwCeFVga",
  "key28": "4y4C4Cf81fXjwtCEayjDSfYrsbVWA1wr4icmwdwu2ZPG8uJiPXj83pp1uGFkiXjWGz65be4CPaRxh8exw3Vq4ij5",
  "key29": "2fJbw5pH4ijj42j2aCFUqazd4A98hgHMDF4QJborfBU96K7JaX7Br4uwe1KLGSDZjZkzWVEvoQ5LwbrzBYyxhcJQ",
  "key30": "3z6thq6eBndDfJATpKWyXgFqj28LkH2doLiJDJCMSepsQUFbosV1T1ifWYzcrD3tLy8pUBNCJ7mCc1FWihv29vVB"
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
