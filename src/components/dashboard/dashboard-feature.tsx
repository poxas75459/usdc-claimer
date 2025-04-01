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
    "26WFd2ypVYmfoxAcdiZRCTbG8kdZbQqMwbCXSY4B3giRgdYzRw1uyxQZtVhEdW3GfdoghMCaHVz85PgAbANdBohu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSrmnKzK2VqfBX8ahLQEat5fxEVx5AiSqTSeEAEXBrDuS9MhZiC58CatArUezsFABQk7wGi56G6LHSm3F4bsJbS",
  "key1": "2WffxoEGG8BtZY2o7eo9tS2HtUBYfrQH1MftdFQ3hrYvCPsDAFPCAWMZYWVMt3WnYjpmzog9AmYjQ7kUvxe5Q8ZC",
  "key2": "2bmgaSGwenMqv2psXtHwQd4gJJeAxELC3XLiJTdq63FodDYPN4G5buxufuYJ4vRVYq8qMUWR735y5ofDJSNvrwsa",
  "key3": "4HQPUUpkzvd5hxdXTGv4fgAxsa8v2XFzvHG2ZmhgPBohycUfUhgMPoT4TNHCoNiJrUsFWFNA5rRDiRhEgFtw7mwm",
  "key4": "4LgKVk64bgcqgX3c28LNPUrsLdGmexLh8MpdYatXQpiJHDFMSEGLdPD7AYWVZdF7hrDdMN4UguquBPeJtcpU6HQu",
  "key5": "5zBfU7MMsZUaVUj57UBXgCHoDSXmg7YqcH2Vhyih5bSEDyHarKzDUq7cc2auDfkLcr9KJambxF8LKdbvsYVQtCot",
  "key6": "5fkA4Pb71feeaKCFCXeKgdabTbmQKvqUZrqN7ns2o9Vcy5jYr6zdzxCsJBTuAjaxCk7LQdEnEJu7XvabYJEXGSNq",
  "key7": "54QEiQbfWxBPdBqYDMRu39qdtLgjNQpjtfGy4TQxZ6QrszjaxE7WJZitSLHJodzaaegMtPeL5xRtve4CDwGB98gG",
  "key8": "JgePyxQs19CKNKumHx58TZZC7snv3VokMsKiNfdFVYXLsHnCYx1fNNyoQWzoZfUwqq6Aj58atUzPjbEWZL8JKkC",
  "key9": "4NnLBuHRKbJXBSj4Ji42YWaoeDJPNqaohb8wR9xwVFv24ijNentsHq1CzBsAGsEX1vsrZqsCzNKX5iV7TfLgnKi2",
  "key10": "3ifLv1FRuUdT6sJfKaAuZLiWXZvFr7gSqhiANj2ATXfbBHEfsjZ4BX1y6oxdTrthuuAhMN2y6yTLc6UwekLXbDCc",
  "key11": "BA4X3e9RyvzutRvhamPaLnH5n22s7KoDxg3wz6F7vfWPQ6ontEzWDpW8nFvFpsgAe7SUPGQcoeECrTP1nG2vgEH",
  "key12": "3kFAza6BETACHhxQbcaHkNkctCzKyig96F22xgyKrgMkiSdJ9RAsyL6wibTkVctevBBrHMmjYhJZSFmYbgm2v1Y6",
  "key13": "L2RuQiKz7vyCt3eAj3gdQsvhAWdHm4uoQtHXuDRAShd8qW88FTSGtSiFz7CuMVCF6wiXnDDKxccDfx6fNXxnmdY",
  "key14": "43DPZ9LqrwGwEomKp1M5WTwrCmpaNUCutbvGU8KeyMSUxEV6EonJwbMe8CRCYMzgE3tF3ZB6ak6m4oknJKnTchTJ",
  "key15": "4URnEsf1NFftbo2knt2aj7ktBCwGftP5tdWofAb1meKpTyBiSWzfRQMjBHtiApfDAsajF4eGjABmXTGYCtJQqTFL",
  "key16": "6AJ3ceaxhhUEmn6pnbDqGtTA1phhu76ePuwisswwVvLiiF2R8k5fGTi3pshigM7J39WW4HEAo4yiwUnafW8vmob",
  "key17": "An5a1zcCjA8UEYpgTn2vDa96LZfVzz3WUiF1RntJH7pPrzguh8E7TVsiQB9ux675R3ELiyPHTvqEWg7AqTdAqwh",
  "key18": "51LcTioKHdkSm6dnmM55SVQGkttx5LMotgVV7F3yRJF7oGZW8c4MuC3f8cVzDZmryAJVVcPQZMaLqSsg3UTdXJe7",
  "key19": "3v79FL5Jdof4nSSNHEYsNLJF9SrCFJeurcjqmnza1YexNbyU3yQiDxzHeYRsrsZTKbS6YaPrX4pM91XpbRajEZ2B",
  "key20": "5XFpgkaw3jzFP1ANDJq7csnht1G8dLTNZw5JHTw54WoC7uuihCcjNvURqZpoBfHoWV7tTqWk58zbhhWn3mYkPeu1",
  "key21": "LeS5PpjKKx9DKUCpkcL5evZjQpoUAdU4fW3BoBuyv9VQLWReujmGdzyKUvaBasPVnthDhbELiK3aXgm9z7ywBrz",
  "key22": "62Zt3sd2qc9DeFxHhT5rpjLsD47Ce8ucSg5YgzzXfjptFo6MwspEnXeKJezcobG3doMHDB14JF53tZWNgEyUEpJV",
  "key23": "21gmUYXFrYmUD7RGeHWipsFm93F82BBJ7sSnfUywSyjkYpyR4pcHBBDCTbo9PtaKUH1zY1whnbwQJYiC3weGYCns",
  "key24": "Pqt97EZuhNwu8aDJuZFAQXZVDZu38EopnkN6f4JCgjnNarN6YTV8RBKMfDZ6F1Sav4UijekWqhNuwXAPogz5uAd",
  "key25": "5dA7QtdR4VBXYogrxibnsteJQYfEtEbjdBjgs6nNKE1yz5B3jJQgXonxXF8NLyph56Q3KDy4kpQgFL8a8bPqEwsr",
  "key26": "3ychX4ovdQaztaU6SAUKGNKWUZ6ENgrpyamDpiqpnMPWFMTUtYDSGSvomdfdKcP8brLNsFQKbUvpG5rd16XaJAVD",
  "key27": "3jsG9GNpaCwzj3hGBuffnSczKeJPQVFH9Zp1f9nQqPTnM8fBEXsfntk158CD34UWbksGH7azoPkvPvBX6gfvgnEJ",
  "key28": "4621T5DL9ZEjWmQa71yvsqYFRErCRWPxsptguuBCmS53rF7cQDEQtEXiCFxxnUEYjqWEf5tQZX3sfETuHNEgqrXx",
  "key29": "3eXKdp3URsraP6xuXiRmFoKm5jZ8tvh8Gk5VFMNhHycst3XodPHXFbLnWRK9ESK4zbMAadh4BHBT9Z6DnH8FBmqX",
  "key30": "5KunXbPv8g6DECqGCBJ57WeUPnrVpDXCcq7srsXCfZWYv5sbMHAVYju4iPnFdJBdDBYrjStUUx5cXAExYiBxJwET",
  "key31": "2y3mFyBTZY1aZnA1LpGDEMnMexbb38UxepcABennnWnH1CUJ4fPXf14XGmEUnKdx7VKgXXso5wx3kK5vCRzWXxRR",
  "key32": "W5ZYuYHC5uu64XqFZGzXVxazY8kjopDjMMWs8nCxEPXnQ3rYBgLWRPX8Prh7eYCusT7UknrmHCiXNfE328YgTpf",
  "key33": "5m1bZxdpaQ1k59Hr2X4P8Ee8izT9fkCRq4Jc8chVwBBj9NXHMjAA55ZcC6esH3JWB1Cmtm9ri8SUGzrDk7gdSAoM",
  "key34": "2gWdeHDYhoC3So17otze4AAW1A2i6uNrTwZqZ7q8QkzsrbQha1uKezGUvK4PH89hD14SHHoQdS5HNBEgQdiy8rdZ",
  "key35": "5BF3jUwCjkeaCEFS11x1AaGeohPsgnZrSzh4jiwXbSkqdYMYyijMLEirwJH8kfnwM1MugrWhFQutRuErQ6UtpGhv",
  "key36": "2iCguNJvtry8TLsRsPtpg9fhXUiX7oXwG8eMySEbuh2mSrC14rqm2CURoiFkSvMz4US46mcvD4krxrwXo72SkmAY",
  "key37": "52jkr9y2b7TShRpMe4aFnVutBK1mGvMBn8quAmq6gYWgKQME87cyKu8LcjFw7LFnL4zvaeQGCDULpK9SzRcsMkH3",
  "key38": "4L9aLegp1yC7iLRU1Fd1kp35mh7XbXFZ5NN2Mjwy8nFQSRhEXz4ddkD12xXp1PKLn6W4AgwuDtnpogYV4a6a9E7c",
  "key39": "4hQsjDGsvy8fjRb1herj4KtnjvB3qfk9AekJCoDgjdSDuMUAbb8t7S4x67non9EHsPTnNRvbDTeMfktfV2nrCW5X",
  "key40": "44b8e2DmbCKSxWQK9DXuP41pux7nU8JvQsf1pvACbe8VpDyNzsuQa5KmF2TdeTqohvTHtgB1rjfsFJ7FXzdzynGf",
  "key41": "2Lc3XhX1Z9kP1iP9EwypnzeoVXJSw79y1N4VgMfGT1Y2LhjwW76WjkjkdWCxBoatFEHPjABoERRqT7ENMT5mXq9k",
  "key42": "2pAEnF8qeYq22JEdZfRqP5fLHsqPiMKMKs9oaJgVQ7kxcW8fJeJrZ1vwsyESiVSJtanGZSoosCbpTigtHWuBzAQg",
  "key43": "4c3W9g4Zy9uVNDXR2gRnTYnCQrvGPWhhomRXTAFtgUdsodcYiM9ZEguqobhKMCpbv7oyskbaacuYAB7wsLDRPU5G",
  "key44": "35Nwz16VjdEx8QYaNjTfDwFsWZZQ4jQzjWYEjcqwurAbot6m7GNvKML6qBbABFeD4wS7ZQQwrArcHR2dcgZg6dnF",
  "key45": "4RtAdj2qXzcH3JXcZvpzV6Vih4tq8VpDng6Ntn3aU36CyZja9jm87zc7EqCGrpFZpJ4dLDEFnB1518arT4KTJi9B",
  "key46": "3d5TBjjrgxuMp5KKnvtpH9SAMeuysxwjw8HZadRM7rQhgTmeUtu7EjG11a7ViAJ25UjhCBqTWa9qdT9G4TsabgNM",
  "key47": "2NmgD9KiNW7AUnZCaasNcj4wZ8UDfjgkcDfHGr5rFxuf7hCsQktY7q2E7ydKi2ZAnhcBCaGR3bEU4Wh77MdcHXab"
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
