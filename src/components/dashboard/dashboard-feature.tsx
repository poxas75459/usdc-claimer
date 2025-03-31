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
    "7QF5zCBpexdhrwrW2hw9WDftCu8LRnekgXdqYvE6BZgxjVZxFbojw7mAdWPzZUca2b41bk66cqYqSQ7RKKp27AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhMdhJ5DivB5oXhiyMvmv5jnkkGEmtSP6i4J4zKDcd3WqHkzXK3F1Hf3fRiB337TgWRvbSMPCfexpkdEwr69cpy",
  "key1": "4agK77SDnLNEcireTBtN9BqKJBieqZRbeWcpNzrf4PX8qUUioAcr2Q9EJZZTpyDLPmycpWRJC9N7pPN2nJP2MV5R",
  "key2": "CmaG7prJiAvTR4a7c1MDf18sSVLX527CuuwE7JptD9SUXBPENyWG5gYCsPJ1yMXNR8gDTcS6z791PyXFFePV2wR",
  "key3": "64Vv8BFG5Z4QgXEz8fZzy7uHNPoFGcPFEsGAYUQVYETw6s4GXhfJK6Effq4umuzp9gEaYbQZ1qdCXCzZD36CeCzC",
  "key4": "27zs9qWQW5EcoZ4fdekzyhu2oUAK6BEXYpoJaqcXbkjGS5XoEfwzGC1UZ2Si6ftn8EaC6XAdYbgr11zhVQo5vKCN",
  "key5": "4XR9r8FV8rZBTVrSwFtMu4krgvT7i8E6C6HggdDCiQeq4SXF61fZa5JuJ1BUTZAC4D6owj8ELBbaVFBAAAjRR2Qi",
  "key6": "53wqTeZG1QcmpkgAyuyU5bP7oNtyFqfBdQUXzvDiEuE956faaCpNJqRpHJsy8veNjowZoNofxpSwRxEY9q1UCFRa",
  "key7": "9AvWVPw8pFGrpgU2vL39xZZo2Gmruq3J2RpevxJaD12t9eikYpE7Nhz7oY68iUbc1jaHhixBKazCYWHqFp36sou",
  "key8": "3X4zKXwSkgZV9EF25jkGYE7eRSPaN2tFsPXhhvC6iPkb6Nbz36neRk975Knptc4Yxikz6RFucGW2D2Z2uvAef9QY",
  "key9": "4wWQvyt76N3DfB7E2FxiwqBHqZLubzGPrg6kuS7Ui9hAycve7XjsG2aGYTVXDXRSG2hjeNTdf9nNyHXk2jTuVivT",
  "key10": "A3E1L59GWoc7Ts1ZeDS2SB8Jo6AKAHq2G8orvj4hyoicVPdTKVqYPY5rH5uFPNBu6tKWEPjaTDSnbguLPpBCKBK",
  "key11": "4Qkck97CcAtMLGkZTKiy21xiKG2UUAprEUcYgck1P8CSWsyFzfNrfYALkYPtG6U6w1Q4rwGZjHwa5LG3EN23bNGC",
  "key12": "aEoMjS46GVqt1UjWPwj8LL5W4NVq4KGaWD1aJPDTNiquyhCiFZTT7y9DNboe3csDXMa1i3kC5xV66RzjMw5fthj",
  "key13": "3A7PPr7LCkGXCAdUYbd7Xwjc5q5uFBLD8jusjR6Lre98Q4Rwu3XKzrJF7ZFnzheiY4CaGrKgEuSxiBjewj78uJyh",
  "key14": "2FhmYbsew6HNkaPgZPrghe3tjhDHT7K5cGPeEjLJ2T5DqYyYhJ75yyZELgzyAQG5X41QUXNGNFH5qcG397wtucwG",
  "key15": "yav8XT8c1wcz9x7qbDpjQPbHPmvrZTBdab6vWX5LGUWe3mo6fA3qXRFNaPvbBbBu9Cfjh7uR2Z9KiQFXf6LkfzT",
  "key16": "2Qi1gxPG2jSabVPU3X7wG5DGmPR3V9yEnfddGSHYBizcxJAjtaeohg47NiZGtB9vZJt14Tobc6eXWCK9jxTRB1dz",
  "key17": "5DS1dsBes2zbgtAHq81NXcca6sW5SFdZgcyfCz4Qn5iyzDKEpcRnWKd3PQJhCQuxf1wEUg6XAFhPqX4DJj14LGo",
  "key18": "54iYBdN5bp46DiZ87LxhsgCebgBZQwTBLJVVnuraEhPW2sm9bu8x94vuvy8DtNs2nqas9dRJAAuaUJeSnE2UysK3",
  "key19": "2h6P4csZ83iQg1pSpADLKeTUTs2stXVkyLZtTFMUoDZafV2ScWJUR2hEca41bzjoXc99CmTKSH1y7zDZGXQBaNDg",
  "key20": "4nqiB69cexwAdrHZRVEKt3WKW3LF6i6qyuFH6mZZLUXTNwFSkGXnd944eQxLSkyFQbUpQJGzgSvFbx1it3HVGy2X",
  "key21": "5uGHcg36P6nX1JVS3P8zopmfRJ3E4uxpxiwR5WtjRzeuEne5MfgvPKJhy9HGyB2dF9vEK13LM28fiH9J2qehhSHo",
  "key22": "4z5QFRHambTvz4vyDwCnzfb1bT2xCJxq6XGyztWn5C7zzZP3o75197wyhKQFUqdJpKqELo2HndFVdeCG6dMV7UNL",
  "key23": "5kkSY28h2bBQneUpiVZb1NDvjBC41xn7dEtHDQWPmm5je9etwjL2HxFCM9nKQNvwuShHoH7XkhjizChmLxL64NPE",
  "key24": "46LL2Z9YeNbLwbEraaYoVjSJJ4z4BJAYdnUnthdbqCzS7z6QBomNvtHnx12Hzzsv3UJ1R6ZBjpGbqzGNaeYJuLX5",
  "key25": "ojgJeGJ1Aduxo9BKZyvUU1kovTQSNMq7Gfc9ar3QECdxYyGKpptzAuVbnbgbR2eVNuuL7h7TAJ6Qbj6p2fn5qsN",
  "key26": "aD1c9cmeJQSUVZfrcxJQDaou5JJkG8TKpxVD4eCTnMfe9YehmU688nXoX9X8t8uD9zqPCMnr8ANnK8vzbkoNaMc",
  "key27": "31B8khV1NS2YazCuuiBZiMtZhZcYMx9DzbDwPSjUtXuJYk8tY93QQwDtztTs2JVYjdwKxGTvRkAZsvMoxTTJyWA5",
  "key28": "3C4qTKPXkSuhSYfgM4dk6LbL3GSZfMshCu23jNEn3PWt1HozZ5cwtzMQ63ZR7sB7dgT7Jgg37AG5uf3ymAk1ekbH",
  "key29": "5pns1zQDwGJqjv7MfoK4Do2tJAcCzi7FuQekPbJEk3W6yxGdfyoSYVEgkLDoAjKKq9RPYk2foaxqM8JGYeHeTME8",
  "key30": "23UJ6caKnwzyizHRW4qv6FehqFTVNzv8p6owAtD13nqQ9qiJuXsrPv9N1JvQ2V6C9joLFhKhkLRuY62BGiJJaKKC",
  "key31": "5FTDh16YasLjsmAgx47hxwWPQxEw6RFKC4Vg2G1fueU8ntnXmhUUfzs3muPcERrpXwJUAXCRxdgzQyqkauQkxWbW",
  "key32": "GDFNSrQbGRpUcVRPzJH6YVjDqQXki4t8toURiUxtgZcQHmwy4vVCV2DgWYerGKi5oHdFYnjpdM5RY5R2XvMV3q3",
  "key33": "4zjzs8bDx3cFHM1ibxCnYAYUj5v2VVHFVmFzGTWZBB6Z968fNvcQJngomSBJgyauo4SLkxtVuvouTNMMyL7b7Buv",
  "key34": "ayibt7VAGTbpEAF4THftkQvCHfgJ5aZYSmpDzVC2q1sSdM8TNX66o2x4EdtRyT13pAVhnoMqdEo2yPUygGQsLBf",
  "key35": "2E2xVW6sYHNY7pADwYYGozAvdFvDzGY3bB7pYKtFSsny3mQPZjQVPz3nSpgcs1D8JoYnZWogK1pj5twAEkJzQTAB",
  "key36": "3sUZnSDsALeDYrDZBQ3C6Srqq9HvwHgTX78B8ZKR6L94PQBtn9W1JeRrGKaDrfbMYuqJByXM95NyNMUqLv3f3F57",
  "key37": "2vdoLaHqGuoRKZsX7Me4HVLZ3FHgV9AWUEUYWSBiTp4WLjyWTYVaejuBBFwNeiE3SrVVMYNMQxaxXwpLi2wxBVGJ",
  "key38": "3xUbaUT4TM57MVF8hpS2UGPWe4SHjYEUXbTnuUp7DEejveYk7E55nYSqqEbbkoFhhk285XoUihALeUqZ3rMmsyVH",
  "key39": "4DLfYvoeECykG5QJK5CiDBwxuJqhe7fzomMr3QzyGZzDtXpTP3eCuKCFSkKdSih6eEL7JU9cv3ToN2BtxeoeSjNM",
  "key40": "5HMBxLwF9JU8YWqj1VDLXnCQ4PZVMRVUL7Q6esY1Eoy5UVoaZyLFMcqtmR32jHNLz9xkDi856jRNcSnTY7F43UMD",
  "key41": "5HnQqvY18pn1iEoGWwEnLnvdpLiRDK47CdeszoGvxjDtLh5wWE4xPfRiN7EUdd1DGWLsgEzRf7NAPay97NC9yPNF",
  "key42": "5X6PmiG7fuP3DDmQcdVPiRkL8WSni2BadvihhVX8gBYcCGVfMkrfiPT29D13TFMJae6HFs4NnvfnsFAWuW9Gx9c5",
  "key43": "5qDJhWaP3pyj89PBMTtjyC2QdLMi8H82GAQoqeZeh2yKDYhoV18mpeBFui7kzq4xZwY8rkEqkx653g2uDVprz1ok",
  "key44": "4PEoJQXagPuoe7DynnEjDNSMvDmSMk5nnxUu1c8AzcTKJMWGGDrACXigKMx9ojbDTqs6934Fn8MsqL7dNpWBEMAG"
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
