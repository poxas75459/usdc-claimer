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
    "bSwf2ZvHALm2Zft8xSuLVdm9dizjWGJgjXj5YZbynf2bpBkn5LmyHQbLHzuTYANc5xMMtyZDH9Jj4arW2vGxGdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7mPZsFanvJ4Vx2cYddNGz2F9Y41A3YctFxb9VvPsQ1ZEDx1rrziSJPEhXj4Ph7SfKma5eFJrvqWmMwibqCTbs2",
  "key1": "3fkhkyMgGQVgCsZzc6YP8Nz3nCvA6M47dyMheUEWx6kGW5niR7ui4VTQCgGW9SBa6JrHjGrupFH7mrDg7S47ha1U",
  "key2": "4Q3JWhoH5cGY4k2gxWsvVjxVEkiFoKaY7fj2K8YA3P5TAa9hMbf34mLMrnzJtY8ZyafVocKKKf4tHdNBXW8Qxp5r",
  "key3": "4TNB1nayh9CgY4rA3SfZXMvcjDfXr6Z3t4vTcE2hARNnAejnHHXdM3GWrZhEAwadX2McXwxrMChUAncR9JnqbqW2",
  "key4": "pqwNYNqnKSpdg9qTeAo6dvbQUoJDGpx5JqBGesEWmQAMVwCvzMZEVLy8CW96VtjagNsyUtDhySSgXpbd4qd2mF4",
  "key5": "4FGkmrLE9yZ5ttdVndKXK95RfDpdAX2frGTpZUWgnZVfzMMbEnqCuaykrHanHnyggtQ6R4ZXVa6z5C7H2VFkqgk2",
  "key6": "3crGeraA1Rp2czqQ5r6BWkCWNwHLa7bEbrQhioNbSUAYez7PDAHWj79Rn3v3xmBi8U8KoPNEJTPYdzYeUS4QbJMS",
  "key7": "3FxoS3UEUcctjyQcfsLZJtKm872A9oePtkBKe22zsvMK5DNNPLtwCNfsvAjdMNYm72JTjpS4dERCK6jJ1MPM2Nev",
  "key8": "3MRsbapxeNYMkHFia7zscTHA9yHqVQfxoPgu2pLjca1VaL646jMJ7B5JNsdJLoD5iC5EdrJseBbKTitSAvfXP6Lv",
  "key9": "3FywnAf1hhQrztLNtRABHMnPdPpJBAoG69BE8GfETzJuBAJ41WVDFas617DrMga5RPmfr6cP9KZoLKF514nkoVfa",
  "key10": "4oLmbjogjZmARRuK9ncNtJ7nagM58BkU6wFVEQEDTUrNjMajyTcXRESa2YQvx55wdV8gPENsL7FMYWL4VJkYTJ4r",
  "key11": "2ZWFxSFv6VmGcH4BTeSwqcYi6sHuGjXQL8ZfEMtqwTDbE1fBdB8FP7QzWRrUXtmRvKwqDtM298tLUPBmnkeTp4nX",
  "key12": "2KshEFSsR7iZ1rBdS2YFJPxpmuQk4Z7VAH7ZsCPJ8nSh9Fdej5T48cfjtXAzAdQYFH4wgXB2ofTEuhTT9uX8rUeS",
  "key13": "5yHjJCnYmdrw2U3oX5v72jN6fjnbFNowR92ChRNnmN8F8NS9guEP7UBKDL2jhXae4WM6NHq7VYa1Q6aQ9qtboXJY",
  "key14": "5hbnTsVU8YmmYSv7u8y5BjwbKTX24M2VTJtw1g7z4aRfXYVo1KCMbsrqs2A9LiMXurmA1y1fn5LFhapVkLzgpH18",
  "key15": "4T1c1Z2gP8bjxrnjYkee4MFHYKcxfYaXfZ2mTUEmtizkK1iDNuPfezuD8VJ1bVzyyVeM7nGJuKhL1uWoUDmK1pk1",
  "key16": "5EWyYpoy2FghmMzsbv8KSX1owmApHsAWdCzskR3xjxGjiE55RRiSk18XdgbujQXBXvYe2xMyUKKUbDrWYPDh8HMB",
  "key17": "3TcgYuZD1gxGQ9UWpSfVSHdgBW9NQZaeqeP9XzGRBQ2U3djf5GcSU2iE68wcSYtT6DYswTe9cLYdYFc4U1eDQm66",
  "key18": "2QX3ur47NZtYENsVVboSoHDLxNrWhF6wKoPMUitNgYstwgeXXs35XLFccP1xZ1VhsJhYz6tPWw9Gk2Fc8MWce1EW",
  "key19": "65AKDUQdx1o6Qos7UUjYa4TXjgMuunp83bK8TkeTbiFmRzWAHhZ9Nwj248T2SKzSD28enRYeuuoyicR7bA44KVGt",
  "key20": "3tsEcUF4Sv7oBRnGNvk1c68PEn8RN8DNq8bAxrqEA7WfrdXGAaBT8Brusu76tJQi9T4Y1zB6AyfSyjv5KjhnNqNf",
  "key21": "2QhBgBRTgF3xyi2AXynAuL98QbnK7XtS2XGd5DjQvuR8yGuZvGnB4KvLuePekpfEDuCdjM3faQNbHz6AANsvoguy",
  "key22": "37pydgGSVefRggrPwbEWNJ86tZk6Vjg2ep86doBY2PvZediL7uBgKDf2931wRcsdwWPvJT8iyKvHNqKMNsrn8jCH",
  "key23": "46tdQh8K313bvPqgJ1jjnnNeoPnzwrm8PxFkem21JtT11bC6Ndi2kJgwkaiF5BGWitjXjUkeUXBLCp4PftiSfK1s",
  "key24": "4fJ9wbvUTzZXy9r7jkEWbS6omB59nCsEwdYuH35UWZiVT3Xn1EPGPbTgEYZokguuwFWtY47VUmGkKbuZcQdT5Um8",
  "key25": "29k5FgbmDX6idodDRUkA6c333RS59h1qpsdzXar7G43xCrEG6wgqPbEgZK2r2AqwiABPQdugzfMDFxuzNBN89KJw",
  "key26": "2945j29qWtKojxksSjpMYceRB33Gdqrn5zsYGaj2dMtrJq1mA5R8LSqan2cRREAPGvUZSTHw9GL7LxZLhXnmgEqz",
  "key27": "59S6FqNEwrJazC378DzivL8ppjU7AtcRnQXRrHtYpTepswvykAdNnn69NXbbuznVgvmHvyaisxh9QDPurND87Yed",
  "key28": "hCgT3bCjb1jVSDxNrYyF5pE7mn9tP5b1ZeUZrK6BwiAcZi8wgrkAyEYmVs2DUy8xqcfaJEScY27H4bYSmgfrzuP",
  "key29": "4r66uC36UtwthwMqNj6hW43FSfguUdWgHZydSLdvDYL8NmGRSuiPmgRdavKYSjDrSbmwDj6GQfaEzKPpo12QDHS6",
  "key30": "33vWXXsjD8vLjvyGUSAywggrgjwSLkJ3sTfD76zemiqAHiE7k6t51XCf6UdyHmQbypCYfx7K5AomWZ6sMH2ovZwB",
  "key31": "3pmJ53F9KVUGB63cxxXApVDzkXEjEw9peNntmwCMWQCQExauUXUg9huoHktBfFHqW28h5nxHuC7NvibHa6wGDqzK",
  "key32": "5xzzZpEtt6EFkjiJM3coaZYzsRx7xQsZYR2hfDSPjugJj7dwUSpJDn2mtnonThAF4e52XRYpa9mNpd867fEAHWaN",
  "key33": "2tuXcweekkxAr2R55GbqyfgoWHmHp3KAhyFBfV5Zats3GZyMPdQfR9ruwSNfDwAsZv4LJHTiKBvhrvVynbD8b1qs",
  "key34": "F3kMncgMuEvQfMo7rHuroKSCohNsE9gBhQCX4MVeEfkzd7d9Y7JXVrmFpuBWX6Sbd72fFPDfEBUry9i8uAzCmoH",
  "key35": "4rtArsXJSWoorFWtRhDijGstsXTDvDrgLjyeJaVxBMc3wS3ocbbeEvxPiY91LEjR6wJKcoDZ2TmKUxMYPXsL9n75",
  "key36": "23YRXSmMkzzLHY4LF7ZQVd9dgQRHM9zxo247cgMJ3Kt11Pe8AHQCwyg1c6WP9S5R18pTCCvSiwjN8vWpEmyEyJin",
  "key37": "24fx9UcoNEFvJdgYheum3VTjXAa3ZU8PAuu3jFS1ydDj6EGSQqpiSMdjUoxU2EdtwzcHhP7t27Ua5fCB5d37nGC4",
  "key38": "2T6roKujaafkH7QkeLjFGY3VoPD8TVz7K5zaXmbs7mZhprqJhUj6Ar7S57NQWnC7YeEUjuaLDqgzzY67NuWAqj15",
  "key39": "fukvPbZF1eNQNcMDZYF7n8WVqVZVvdGtP1RNJDvbLjwCV4L3h8ReSUHEUYku6JTTNkd1WdjBvsqoD7D5o3771AC",
  "key40": "3Mi8bsxrDmF4GEDB92NNe6isk34kzv5Eu8Jf3yXnzYVbqjGc42P6Y2FxKHF81CqXpp5K65YCWezkMbX8EQqAuG1k",
  "key41": "46455G7YDoeseZKQusscq1kd8arxNECUARgmtn6o3YEhTA7QGRsmQUF3MVbqQTP68un4nQS5j2sSwRfndHqLpTMm"
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
