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
    "3h9R7Q27ocRQR5Rjb2NDoqzgDHBvdnyXXGjYFRveCy9u3hahtmp8kdik22J4TDPzNqtD9LwJvQZoS3cBzkBCpo4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cb1gpdr26brNXfJtECywG9JoeJktCoczJdvQ5it3im8HKZvfM8K6HppVTAERz7ePd4CQ3UVsbEbBKAfSJCo8k8G",
  "key1": "5o9UDNEZ3P9A3UvRtRsHAVsMkwLBzbaFrk2941xuuQhRuUNKWXXY37JDw6enNd7HYDeyhJptH5jAdKseRWHDnCKA",
  "key2": "4HiH4vBuVr5DpD9oUhRn4E792aL5zQEfEefyhfeQjkhxhFLfoUbaAKdBq2hCFqyvtRVnNZd8rc8w25AJoFqbDaVR",
  "key3": "4ddCUB6XgbtbrJpYznQjwG1bPCqp9JJ2GYkkr8wqfEMkpwL4kBMZfGkZPfZuxxKaE7yUAr6Q6bkGzSK6ee4uMFzG",
  "key4": "2p8gKiApMgzHQzXASKyeJ3KjNfWSvEkJ7WV7zSYvxaYfkznCSfrkubqNSaSZEEdJXsuEfNGP42MJBCEM4hjsxSvQ",
  "key5": "4h7BYCuQuJqdMwaw5bmEqkJERjRApSPQTMTFsWCs6pKMGMYYef6HoVPxYWwyNnvUW81csfmYX53uj5Ai8qc4jBCq",
  "key6": "5iAsdbuR8G7ST4v1puMpYDFu8ZZvuc8BZ7iC86HT3Jyo56bScN9PwDfzrWyQkn4M3J2phchk2HZreLcaA88xqzFH",
  "key7": "4dxApnm5pmHCQXtKF6ABd1wTsHaxxLFir3jg5ukmqk6kSthcgDJBe7L23jFi6K4UxZZpkPvW86uL3GCQ9twksS6J",
  "key8": "56Azg243tXrcofPbsJJYjN7iFGrNzjGW1ybfgQFR7TWT4UU12jMiGSpYDSTi19uUHcWdJrCTgQgYao2APG7Nh3DQ",
  "key9": "2h8rTpYWS1t6Q5JX97VreYzvXReMUFiwzyiUXb8LhzS2dkW7tRR2Cq64yRD2XDUHVUZirUvnoD6h1v1MURLgQB2H",
  "key10": "2vcPFiQpZLtcM65wYt1pLybHc3curgWNhme3A2DaGFzkAUCoKH925EDo6TKtJWgJD9Ay86GKNv9d5ef9JDD1Lrqu",
  "key11": "5gCFASUFZR7Ebgs6bgjLFtEbTjRAm44g9TpHSFvaSwiUHSKYNLTegyoZb4EAoTEUjX7vZ7fL3gSoW6EKRVjFmzRP",
  "key12": "41d7wqRH8XucPcYESUjbHfkh3uBbBV533hoJKZZapYkZjzmz5h28rGpgZMawazYEZjciFoM9kHmSBaaKBAzDvUUc",
  "key13": "3zSkGYEJy2LDFJdLkZCvFvrP8i4twVZFC8GJELCTVFRB4xhfg8Ukvms48YoQBp3anDov9b6zwyFcrPyQ3JVcDeMi",
  "key14": "2VcCxfW5iEvk8tD7NGKRME8PMRqUkzxbNMX54dWUxnFhACSNMALCs6yBkKtxrB5mzHHiPGPKoTMg6eEPifTVmF26",
  "key15": "FzWZXJC1QeyWTsVnYLj2e4xBWYZ6mH52Demi6gLpNkL1GUNDSYCuB9WUFLGX97cDwWDjp9NYxZ7C2ReRKm915LS",
  "key16": "2dUdjo9Zh3RLiknRNdf29fdCXR5NdYWEzvFqYWGmrpwsedL3w442ytWYUysj3pdWwgYjwDZxkdw4uCTDLrJs5gRM",
  "key17": "2kpmJkMCMCK82onZstfH6QtMNRi3eTRQrtpxFQmbFH7tfEzxe7UyAE1isqA7UmS7Uk1ZKB533dLzquNAT1jnXdXa",
  "key18": "3Qu7uLxB2ZBEXRXXM7QKxyVfnYyrpjBSFhFBC17v7hE8m3LobGLwabicDsK3qJPJPQtVr1rfqapjX8d8m1t5kLMW",
  "key19": "5ojfWkoqoG295bGV7miZ7tkAt39FEv8RsxvgmPZsTPo8Syk1dbZuQ7aPegmF4dPWKLbJL2YH3uYVEyJskqV6rBBn",
  "key20": "4EW8jfQ2A9Lbq1gQjqoB6Cfg3Cgc47TFampeG5EYfsTCtDV73QUpxbaptsDSKC5SNhhxgCA2E5ohYmwzGbUVAAKK",
  "key21": "3Du1QsdsJpR4ZqZZ33ciCBRm5SAzK1Y9gYzfJGRYFNodihGwKowaYN86MFe2f7uEFyqoN9KH2q3MzN1jGowVVLW9",
  "key22": "2py74jM1ANgpjehjALhk8hwMGzke4NbgxbCoRMPQx4HrCKAUGe5NEZYLC7GcqnxTaYuk5tFQU8LJa6cX9AesAwEk",
  "key23": "3fw2K6gxbEdrArKcZnA5QjwRuuGFBgNEgta3Fg1Y2vtu25Xi1YeKMrjdbttVSb8javND98EpaPjXr62eAkDeLKf6",
  "key24": "4C41m16YA3xFqDExupHzWpHauMys13Uw3kNYnS5gyKLeCTcW3GYX9sLPqLvu4JWndWXYdX12JwnYuy7R1YdzGu7Q",
  "key25": "5N9MrnrVgKThChoZcdBBj21rVRuqvfH1AmCWx7RvywLHshSGLWpB17CUNnnCudPYYaxP3H7FnshEsjvxhWrjAvZC",
  "key26": "46r7gA87ykCBhBVPoMr9GU3V5zJGJwYgLxFZUKKqRF9bzx2hZeMgYSEBs26PX9jYwCrWiPN1m4YCEh3cttDBcoSR",
  "key27": "5wJ7Jfxz6jPs16A55LjicSdMFr8Rpe3QgLLqCkmY4UapLqDpko2ChacFdb9w8FNGixRvbWGKqWR7SLYMPpbKgAPV",
  "key28": "VYi8KhxWWnRF5FQFoQgDqHKtrfdxshVU7Wd8Tbec4ryJJM7JcDq55mmXgXE5vKJwrzdFmZaPtmmZMw2bAhLYyz2",
  "key29": "5LTSvY93ggy8ZrnrQN5ih439GjLYm7CTFojPuCJbitfQgHmrFr85kg9fa7LbLsYKmjrhd4pPmSRoRnzML4spgcmS",
  "key30": "vJn3mF8dXHxKmQdh8V5JAEqekemPEcQPZfMxn7Dwx1aK64ZsycAqbnYhRfcCeYXfK97Yjro18GBJTJQ3e6wsEr7",
  "key31": "2KuPkQXZscSE69DfqDGNWyUhsaNLK1MGZaPWmaiMMeQbJkXKKkaqTeqR4YvJ9t2niUk9heX7jQdpcsTrz1Vh3r9A",
  "key32": "W5Zg2pG5ghF6AfeE3GcZPx4gSaJxuFVMfMNuQ4aYZCVvqSymAv7jhSMhwGYqzqajTSkLwo4Ny1j1JgwG8HM5dg9",
  "key33": "3J5PoqHVKf12swxhA5z5ZzZb9Y58kgRo6pW7RZ8Xxos7yv5hsi8YRHtB43Y1Smu8hqgrwzo6Jn6X6Drq2UobpeqA",
  "key34": "2HGerbA4xfuSR2kUx3vHVAeCCiuf32cAdPXwD7zGtV178YjwwvgYNhQc9RpRrepvpT3SPzzF7GtU5Km4DSJEgjPG",
  "key35": "3e1JFTDXQDeUEpPWgTke7mhKthWA7qbrdBLiu25Mn7Ts4Tueim3juvEWotgp2H81brMHsL66sWGG3L34heuiYhXB",
  "key36": "3twh4B7JMWT7ztGGp6t8R2XAt5x7j2tRDV95cEyWhybCDMcZ591MckZ4247XTh6Ss8Fx7b9Jm97r34jzQCUGpTAy",
  "key37": "FSHnWHRt32yxAz5p5QyifQH9EAvQ12pZHWhqeHxFRVdQgmSTyZoTupvSxCFswyCKqTrCC5kYuuGq2d4FnTLVY6o",
  "key38": "xLEWCKYkDQa9vcCEs1bJyrW7qYRCVubWZcts67QDJPCHyjJAUuRuK5Wz8cmN1Sk3X4f4EvXKshrsbXjbFUJfd1T",
  "key39": "49odY2bcicrfFUmsVkX1cZ4V3aBRRAotKTjqgg2ofqj83JRA8E6KNn5iBFWQTpz3Zgd5nfsNJzJmqxUhrx6JmGVg",
  "key40": "2ZaDRS2Wkh23b7SHmzdTopSirsAV78jgxxmCH9ry1M7rNXQ8CVpppLv5XwuoVpsS5487Zbtfgqb5yGEXPnHFkJXM",
  "key41": "4kAABZxoWh3B5rtbufvsnW1ZFeSQWbWpVVXi8hBm5wo2uXVS4rCLoVnw43XLKFCFec7Xz4YNkAwHLaa9Pys8ErRj",
  "key42": "3nySjgqr4nYrYcDztfzTyrNAwEKFCLnT7i75cFBg9Zs6xhN78c1aXWjTBJkyffoRPvE2rBc5SFrZzH6REigGNRFK",
  "key43": "64EcvA6Myv1GCvoLqVKt5p6wQChUgnUPs1cP9a5a5n2kuQUzRpqTki1ozR5W2Y8CnfYFn5Xk9CCyNP7xVnixtfbe",
  "key44": "4aWvi1iKD5maRrYZHamnTe3yxtxMC7BTBmDBZAsjWwg3wJN36hUiBFcMQFiXp58iNbRnuM3oZSCpfp89VgnUqNG5",
  "key45": "w7SgZwh9NLvAbi8R84RaqWuPTBywPuMpnJZSHogLWrT3KKzUMSa9jNZEsct8CPDT1DTZJLxLSGqd7yWsnRmTuvr",
  "key46": "3CbBFwQstL4CjGLDfyvKiMXomgCKyGyHLvs9EchbjzDvhTz7HrpLAk5Q5uHvx8rda4UtHsCa1nT7YTeBVXearcDT",
  "key47": "3d4GywRQTKrAqqE61ccBHVkys5y4QMTeuCz7nkZf2jytBYymkkKXiiq4yL6o3aZJWZkwTQ7HHJ1ZL2mj4moYLs8n",
  "key48": "4KpWGM8q2oJxwQLcbsdAE4a2W48TxUqNczrBwKwQoqrLG72TCceytnShPEVKZvhVd41bLJ68yAj3LASdmsUoy8e",
  "key49": "5jh4Vuo1TreT4ZyejhSDUDkXxwVc5NuUPMVR7e3kwKaAPKjvyxPyfzLrEiomtSxAXSVZA8zBJ7g2mFo1rfCFY6QR"
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
