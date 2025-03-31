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
    "HrW7sbDy6jrD36c6nz7HKkuWzVVj284JkaYJwketxdcKByF5EGbVQTsftsSRXFGgXTCLAXcVC57kg7bMRusFScu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8mPDcRsabQPid9dtTdMbTxWtUvyRcB5eNTRE8TnwfDsobZGe6WawRBwKAuainpfJFrzcSyhAjGtiyGNe2ML2vb",
  "key1": "2re9yrAp7r1KRq5s6qkwywuHJkNQRoV4cSNFtw8RzY8JvfhCN5BBcYUnjdEzz1tHXRKB9RVvwp7C6hdfeB1JjAEp",
  "key2": "3qqsjmuY74zrc3wF3EjbBnPEPVHzgBxWqXQ51H1W4haCW5PLCrgRh9NCWHJPEyTCuv9rCCmNz6EEoTCkaHoJYZBb",
  "key3": "5NqJjm5F2iwnwfV9qyHwEQker7zQXwHKWLFVktxruDpasTeYMHPaf6koG4XsvRaweCQvXi1CTuCMebwewcWeiW11",
  "key4": "5BCxQRzfiw2SSZnyS9HasD1UQsdNtSKrhtbxn6yo6oHrY7MZoQTgJEkCynyJCrwTBYMXyihEXMAxUfpRwfDNRhof",
  "key5": "3BySyWbptGkJTknrd37c8G8r5As95quBdmYj4jKEu4w12nf43X8AxrwF1AkfiPKX2ZqxuQ4hU7dPe2KkPcVDtwiJ",
  "key6": "5NnMnhmEwKXEwumbNJd9Utw8bcF3BGiEbDpTwZp9JqJ93jRNVtwHAUyR7Q4V5bi25o7XLE8sG2m8EAN2HjxLZ14X",
  "key7": "3JHCANmRSYw5JcsABcRUFdZJ84gwFxTkMSYhGJPmR1ZDnq2rBfejez4nhZEtwqYSGPHNdcxDTeGsdK4K92Ze4abB",
  "key8": "5QYKhx918HHRgQ6uiyorDFMUdHKusy2z7VdiiMY4AyCyTYMw9rpUQwV7YrfFBbmRv3rJoCco8VEL18BroWczLon9",
  "key9": "4H2afEEJQGFVRqULKHDNXZQTUWfft8XSGtMDTVqVe9CzwaiDEbM1JNk2UHhAnYdz56BnnXbcmiaigf9jFZapXf3G",
  "key10": "4ExNgx2gxgvbbwQVBunygL8HYMvsv15gc7MRS15KHe46CsZRH3dMYtSALsestbzFyJ8aPT4Sgvdf7frZQwP4QFK2",
  "key11": "32kMc5MGESAsKUXRdxnf3mtEP71ddrjp3DuqgfNHNDNScv4ucra9nodT51udf4wSjYG7GfFaRa286SQrgAapa1Lv",
  "key12": "9Z7JciGEdh7ggzq2YhW9gbX8uZe9PdAGZi2sPh8gpdz9La5xFQr6wfhjTKRNSsThwthY9kUgKW8gyMGn42o8MJ5",
  "key13": "2bV75ujDt2X2KJRCZXEEAir6XGUySkdnrVZeE5qVS9gEVWxFWiiEVYwyqHyLpBe6TetknRpVgC414qXFiEqsfavF",
  "key14": "5iyBYErUQEibbTFtEoYxF9WS6wi4bktEQCwQjEoK33xn5kDMSmryN8gQNuPvDgmuUa7VzgjoptoCMEezyb1Svz8i",
  "key15": "4XaCT4G4f6ks8NRyMcpXVEmHgrqKRUZ8tQbdUqeHtgmWDjZ1qNFAt4xFezTJxBirxvi86qzDfctDxc9PxbgRwVeG",
  "key16": "3ssYRWF3PazJFCJN3unrTFAaKSEmhJ9umkXXPrtrfp9G3adjQmjhvq517VEbBDgqHAJUfTNfupb4Z47EbVtYuDFQ",
  "key17": "65zMxqTMvAB4nsBkHMWAyGsdXaBpujPVjr5Nv1dWz2ncbag5zAgsSMzotuDNjLVRgaPsVuaEy4cJhPJV5TviZQUV",
  "key18": "5kv5qMc5dD7sipbBA95Xga2GZ89vgHXF2L1cMzJLpus9ywviP5WXos6dtkgMbr7n39gQWbre2rPpYbAz5KCxtDkU",
  "key19": "67qYb18x3D86YgX2vq5RwYb8oW1ved6vWEUAarKNzVHc6Y1CdFo7nMeyPU8Ju6JyopqE4eov7x6EVLgzdbsyq5xP",
  "key20": "xDgBsDexw2KTH7iX5wxvVY49YrcXMvAjbURJSeUXNbrzVcd5ZWg81a6MvV84cjXPAhbbCQY1rbnofrBnUcrZxyw",
  "key21": "25uApcW5bwd281h5ciBMYojDe1jQujaoDg9XQLZ1bCbV2BmPR59KQaxkzTAtSp1vyA8Yg89ysKMVe3uRHtD6d22X",
  "key22": "5ruomYvXqrcY4Nf1zt1UYRJdaKMJ1C8ndCiMTnChQtzjV1VQwKxFG1quCg3oZHuxsTVajSQeYLbK8tCiB67QcKT8",
  "key23": "32ZG6iS9M37b91pqWYcV2yazkL6xnaFAKsaCg3hsdQDkKfM3Nxc6ytTg1pJRiJzPZJS81HAuL7U8m18fc1hssTmT",
  "key24": "4pczMoTeGtXimo7E9mjDxccR5ckThrLZhfv3HTjyi1vfNqkDinFAChhwvr2CQAKQXkpQ33cuGXms11SoCb5J2F6g",
  "key25": "2ksoCfLxypRWCe8f8KxiDiWDQfBmioZfEL5xhHNjMsV36tXPim7EwkJP5WaPWo6q8bo2aVPZG2n5q9wKkdAwrPPy",
  "key26": "iLJvX5zJFFaHgJLeHB19Siq7KKrPYyoKdAmo5QnUFWXg6b53HsAKjNAPzeNc3zegJHLmPanX7xnqu5AEPz3EPgj",
  "key27": "4GxqpVnQJm39y8n9Kf2yEdTqq9WqUA58actaSEY3jLmcZRbcpQLpRrG7S9NqGw2igZVrysxMk3AwawKLmQRXmJuR",
  "key28": "4jwBVXMxeC2kAtYeJ3AaMDJFX7Y4H5ZWSkrk9xJ1V3XMXcjg8Z62kaZLLmKH5jME8E5f772BeMVtNHG3PsHmQpiF",
  "key29": "UQTLm4zXZXUJJx15HvtLHWwZEvfFiLyqb7hLDLfaUsKL47BqZpQmb3D1XYQH5Te17wvz9Npxc5YEoWPCkrv6Eie",
  "key30": "5gV89AMLoh6BjXxg3oHH4cFnwJtz6rbJXiHTpdkuVQq82zqqowKdDQHnxY4dKGiKX8TckPjFCfEfp7wsghMrhf3A",
  "key31": "5KbHUTFSRi8unqAxppdsNNkB4zFjiMMyKgcPcTSiiTAYoFXqpQpa6T1BYV6zdseujukFcTGK6VuT5zgZ5uasmEZ3",
  "key32": "332s1c8d6SCgLY4WF7jUmVeJSWrGdqS6MuYyNKfncNFuBSeaNyyu9Ujw9YPL7RF5NdteEhfFnQuRsKaBrFqL5hXa",
  "key33": "EndMWXTt4QQV8zHRjHjGmiAeTRmRJx9rDsmSaFLsRnjSrp83yn8N56H7Wbzgq1JNCcKph822ajDCVepNxhfiHHj",
  "key34": "2RnNFJW3hz1jPEfSbrunUWPkqxvg5xyk715kFq1bfy6wkaCPFtAxyZjpd6kzFCr4kSCAB8ANHXmu9afvXGdJoa3q",
  "key35": "4WoLFiPWscd9prsnjpbZxz7GmuRi29WVL2nm6wM3JKZiYKVh7jeM1ygdXGVvuyYvisVK4E9cgjoHDccyQmpDa7yZ",
  "key36": "5EFMvegFJEocozTKn5vwJzWGrWS68JttNUVWJMtEwKVvnK7Sd9kkNngg4txbZEvLA298cvjmwhpmBwJqSq3HeubY",
  "key37": "3tVMCp8oiFAPv15HxSaigYsTv38B3RpbNWWQpoRCSLMPC3Z6rs9Se5gpk9hwX7rAeC3uCypucHAqH64PyZPjeFhD",
  "key38": "5CjPrnFCTAJGYYeXZT57Ch9NUfnrA33jijqdnm7UzEp11ES9m9obMXP8ZdoFDFMFXDTH2phGUP6VFkYnNudH7myU",
  "key39": "4YrXaWzZg4RqV55kxsQmuKmuBEw2vQqS8SWKXDoh8bgsWJLjC9YjYsrHjSC3yZXXrAAfDcHPPAuFn2FFFEHkB9fS",
  "key40": "8nmWUboxAYtjJWC5mCBNU7enEA51E6gESD97Hsd4bPUv5vbX6xA3khDtpiqaRjxWqnZGQxuTKugiSdEgWC1wEfN",
  "key41": "59ejihX2ScPxnyTEpF4nh9Mb5fGJqNfpwrX65VVcAcsgtrasiXXwj8WPBjVcD396Kt5tc2DCNhifpKcnw44PaGna",
  "key42": "37kWwjjtfQac2qdeYrUjuVdwU6mHVXMCGeN4k7XzFAXmNtZWsaC3m6DafyL9SeCuiHvk6rWkTJbE44WvufJLzUUb",
  "key43": "3t76UqfXFE2ANHBHf6UHjLLSCRfue52KXQDdF5kQhN1TU4jPku2pXJXD1harr4PLde5doY3Eopjdgf2GnuMpWGv9",
  "key44": "3avdWL4XyH8wh7UJzyrRtY43CLnVxPofddrCR5V7eHRmzSGpydmBxfBPXCtqroQb9GpqANtEp8PBDhVbxFv1CPjF"
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
