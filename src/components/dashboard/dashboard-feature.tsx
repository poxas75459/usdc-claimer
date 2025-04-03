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
    "5GBw7zoskihxg9BxtEDfSAiYwpGJstjoty9gaagAi12G3B9wbWCz8Y1SHRohreuKVRn2ngmtv2pQZ6DWdfsTvtf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFF7qeM9Bx2oScgxUUdhmEYpiU5KNsLxAvtptF2BN7ZRyr3MJxMqvpDy3nhfWZMdUSVDgj4zNfAm3C4WcMGeh6S",
  "key1": "5UVjhZmbedzZL5D2ZkTifdw8GdsFst1yNfc11HTLdnRvAgyqkmFHCehLVgNNCQ1VFNew2E1EW7QSA3mKr39tRit3",
  "key2": "4YQrWjzQxamkXdTdaD51wF8PNBC7v9qyrY5koWmVTd4NvC8yQgRKKa19wZPhhgCBPDxUuZ5zbMCs1tznbXqDgrfL",
  "key3": "2dWe8LwqomfgsanbbovirCkAyV1KqYzufbtaKLkPkut9Y5USnbNSEg4qPtwjJL9HEDwP6bD8a49XuDqSjP2x5PGL",
  "key4": "36MDDX2xp45P4bWRYNzRzgvoq2cJGBcSwzrJJLaDmsRng3zXv9Xg6noGVusDeZ3B7pVoyKoXy8fcgB6J9UGYo9gu",
  "key5": "K5AAwZt6o8saUqD1neUrWE23nruT9gXngLPSqFirA23D2jUcuAuopfxF727fHcFco2ESxQ5966SDLuHApAjJ74m",
  "key6": "4Ag3fPJexRQVyFhpgcerM4quG84WEjx7yBsCE3gYcWWsrhgucFYh3Npbbobyxc339hWAC3y7sdt6RKzrSwGWjDuR",
  "key7": "2Xd5MkCPHNrfWXc71n1Q1EcFzGgfoyV8Ra7oz5dJdbuQVWgxy6MmUTShFbm9vV7EWdVhQXpEYTbZSUxd4HkMXoaz",
  "key8": "w7EySALRdxtWzvJrNpjt6HZinwj1yWkFR8hYBkqiz8w8Kms7pF23tTzHWXdM8jsshcXUh7faBW5pjAGbg66MFtU",
  "key9": "D3FDg9Xsdhdr731T8nUSknvhF5Wy38RVtLZxDqVXvr2BqVGreCEfjZdib6MnkuC7uiemxFMRsiqJD1BgEn67cPb",
  "key10": "4yFxT7YWAZNGzFV19ATAEEPiUNaz9rCTeQB7BXWMynv3M6Amh8VjxSbgRg7tb19vpWkK426PgZPTX2QXjRUVLAhP",
  "key11": "2KWbizfFMrxvuVZ8XbNTK9P3LiXZuEaRT4LShJPi4dbs1PPD1PUauek19RwhPa7Xg2Lvj2D8jnbj1yQEjk6UMvz5",
  "key12": "4FNJ6BhGw51GiSTM5yZNdqkxdnxPBuye2QLK8NAesmRRiNco8sakyVgAa9pKdtVZS77oXP2u2iT1sEJ4ULYmxZ3w",
  "key13": "4ZgJVfiYZda9gjddNxBb4C5PjVM8K63FRVxZoALhYfEKVDJMC8Fsofr3jQvdPXgscdngYsKf8FX6P5ceKCzjVuWY",
  "key14": "3pnb2dhRPKevEPdgWYT71oLki2UqRpPDEbAzAJYSkyA3Eqo6rbCZpLsh9L5Yb4HDXb8Bsp1kHHzDba2LcCTHHjmq",
  "key15": "58z6A6BEznqAEVAeHwJwmY6tFXCYQM8PQUDeaMtKQJzWG5UixpX8aPQ1HRQ1JSi336LHs72ctrs6gZSpPo5LaCvb",
  "key16": "r4zRjDSN2L6KMhRuG8pDqb6RVH4yudvComWwJ6PCKWV2QCZQS5GUPBmiwvfozfX4BqkgdzPoYCAovQzu7vkenrX",
  "key17": "25JgVr8DrrmgirniJWrUoEhp2ZBge4BUHCbdEciNKuuWouiP23z5ArFg1yhisXSzAdhGC69TWEKypfdM3HkfnwnD",
  "key18": "ZdsPR7MtRk15pH9TnXWxC6id3AFo6J8ytmgo6FBGoLqbAwoYnWwJa2awiHRYvt4LWa8SWMSgfeVdqJdvgvuV7RL",
  "key19": "5vXk5LKih4KRq6TppE4fmhT3uAu3cq7Aj8bHaHrPdWp6Tuk9gMne3MFJ3abQ3nnAPQYXxzAyuRL337Xzsoz2YxZy",
  "key20": "4GfGYuGntwDvAiHmFJrq3H7ZrUDXQ2mgPZp2D9mg525hSVFcxCsWf1ZUHJmJdsuQSEtEF3ovAj8KVTHdEvaKtnLx",
  "key21": "5qT26ydzmuC3FL97UbTMXpXJAnquqgAS8koinUuPQ5Yz6CXswnBgRMiDyiDr6WrLxbx19gbQGw1u9wpm8a8id4R5",
  "key22": "ktU1Gy4wPqysPyF4gue1AJoLaVfy6uTfUHvuj94fyX7agCAkVGBkQTDLVnwmdPnBfhnijNDb2iLQLtpWYYJECRo",
  "key23": "655hEoqpaqFaf8MNR2z3omUUzehdgVHZ47Jru8xEAZEDy7YCLDRAm8ehk5dmWJmJqZpNZ8WmmfdwRpEwpuXsvT1k",
  "key24": "5SucyF41VP3xJAeTgN89s32BxKtZawAtktNaGuaDMwWUqxE8qWj8kQBYuz1RvPm1Q2d14jnf4jPFLP2Gak4geHqE",
  "key25": "5RzMtbkc9wEpU1uXBzcuFq524UTpicoJnZkHkmu3oC8ru1ugiexUhPzYifVn4yuRgMuvQPHBW2kTP1X42guCiUHK",
  "key26": "3hPuHmBDorJ6TXcxJzeAU39qu9pix7GFN16msXEMgzX71NHcfaqkDTF5YKF7gRWjYHDuAjn7nfXLdMKf11VKpJaV",
  "key27": "2BwjxTd4544YgQS2o6mFAkvTjvbdSk5GhYRLAd6WkNLGe7cwbn4WyefCuVnCHUTzwBGwvrxH943LPLnEJYmvQ852",
  "key28": "aN1Pox95GzGASqFFB6yEuMXB5uudqFKKwCNpSHYpiNEXkQvD56xVjMjtBCXefG1oHqRNJT8v2AB8cEzZtrFwKke",
  "key29": "3xQw9Cm5vF61KwneeNDEgXibtbAyot3mYVT54xbk7QfvsRN4qe62L2WLJM7e5LhLsqs2Fmz3ZCcov437yR6CsUbJ",
  "key30": "21hogZwjZHH6pinqiuurLNUAG4iB9p7A8CEdEPEqZxUYa1jxfPNDmUS5TWxSuxccfnQYNhTrtSerUR6wAq6XJ43v",
  "key31": "d5xiGQUqztCdh1nUcCpHVEkVnsCa4abMjNPkAC2zBNGMq6SxagzWwLvBAmHyx8cMm4gh5u9rKfnFTiu1yeQNJGC",
  "key32": "63XtoTLwMrKtvKcGyxFP6D1M61DmKQMMbFnRRe65AjKCw4wjcaGwNWmLvyuoNGG11dpCYKmA1HKQ3mmHoHimNmLV",
  "key33": "4mz4k1yAsJFxMCs2PaoPR5zFqyNKM2nEPVYUjA6xLMNUudNBSjtq4T9PMjYcFG6j4hmH7mVmrtx9woW5mtd3XXYB",
  "key34": "5CBw3Agzjq7A1fkFJ1DTuSQtCJBdKBUEm1Uyk96avHqeCJYJpbAN2xbi5PQki1yP6r5xVSaR7kBnayUyiWCmxrxE",
  "key35": "3ud1626kWEAWxtLQ4j7hbuhR5ApNPn6kpePJzp8iN4xC8wy2quBdN8uunvCCA4jWBMyYnFTcqhu4VmjkFhLhsuND",
  "key36": "2DWaGpHSUjMcPZDsyqZUH369kWsE3ZbNhR8wZR9JdBUDL4W4573GLz1g6bmKQUf2yQudj1cHCH4H8c97Da9Sufqq"
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
