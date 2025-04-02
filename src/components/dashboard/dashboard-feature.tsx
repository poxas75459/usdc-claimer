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
    "4J3cJSQisLfb4w6QYzhaz6aViVn8pdPRwUj2nsfwq3QaxoFFWGYk3SiCA6VrjPukyAgyKsfmEv5J4vy32wLVWtup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2z8GdW6rputJZ26ZVkeKvMZPvs3fvrDSWomhFincfsxXxZCbUUvHGvAZxPZ5PsMKvf3dXbQkFAk4tgCb9yPKFD",
  "key1": "xxJ5R52iR1udDkxAKt281GwrnMyeEVGZfpCHGMCycwgpSJZYDr9FdrGZccUd58L7zrHpUkxK7rWggcfg3uHWvWd",
  "key2": "4P4uDu2TEy5AJ4HxRvNVxakkHD3F8BjsG8TTjaKZBQGhe6nV37RSWAszGrCEZpaJsKA9Urczdc5w5oevU34qfHdA",
  "key3": "29LvTxpwJ2CQJBwu2oZBR5JXf6HKYE15VAVYAUbJrdRRe7i765AWjH51AuYLBY625tnM7uA6s6SVfXKgPPNbtvYi",
  "key4": "5TgoNG6re55wwb28ScRCFgjA7mEvKreQ5nzJQvojkUuDEBNpmKCQnCkucCRXMevCoTzuw3GgJW9qg4G7NYH5H65X",
  "key5": "5SjPRqKb7wWoHHeZo5yBkHLG7EJuVv1CYqV7uyELJwR7WqvpV3qatvVmBx82S7FUpukTciXyjaMPg156GeYzPckt",
  "key6": "3diMigqCKSX8SeYJRwCM7HM2nBtZCSTSLqPxzetuPrArtdA3MNFP9kjAwKH3tF9RDh31qK5E6Fe5i2Tjyiijf1FU",
  "key7": "bPFYqe9aTDw5myeKUY3cKx4Yewbnd7sRmVtNZBejf1XZoXhzEGnjYGGeoga58eUfvsztoHUVR1sBKhSdkT6niKY",
  "key8": "4LpRKhZcbJ22EJfmT9Kz3dPz9chKd8Mxf7J1pYfNtzp6oMuoDF7NFHQYGxZn7jaNXecSukR9db6oEWzEJH9chngb",
  "key9": "5LXMFFPg8K8Mz9NXVp6HQqGMjVbPaBaxRHPp8hy7oCBELUseSVur8WiiU5Rxc8AVX3eXMtZbwES7kcyEGFSHj1sT",
  "key10": "5xfbcSzShW8q2mMWApzXRcDcgd3vVD2CqajgGAKdrsRqdBv2crA5ZEMHU4EKzs9W1iUUwUaAXjVWydxEs2957B2U",
  "key11": "4pVNAzZcj1xKDTsneLh3U9SFqKijXZPg539MwfMrx7MHdUKmLFDFTYDv9tYRsQ1a5PQ5Fx6HXf71MQnrmzBs3su9",
  "key12": "bjutRivLpzshNeSsBqXoBfXxERKs2ebyCjhNXgYMS2SFbYYj8d7bFuixMh1RwsPaEvvSe4JvXRbsnmbHNuAqcgg",
  "key13": "3RwLJNQYa7Em4tCuxm9M39VGbnbMLULoCQSLjf7pVZTTRB2zdBPKLsYDbEJtFoiYamxpqY5AfyiPpSHiHFsmrrkz",
  "key14": "232Jb8izbRVHoUo7tk9FNnZth9RH2coexMRHubbsDpwh73XsMmbcSU4gYXGfGSsZhAdCDcQtScGkxMYHEkxstf9Z",
  "key15": "5USUViDR5NyousDDU9mJJ1Ej7DVqCddR7sasrXRJnpSCoAAA5oj8v9fenZ2qtki8goA5wnysDiJ3ifPctsZrfzNy",
  "key16": "JTHTsbdWbQsd2AFGBSgptS98wNGKfBRDb5rGbQAZvqRjY9Y6mafyncziFTqQiTbxJMbGap1EWYqGRS5TDF7quEJ",
  "key17": "5MwHKZuH4EcFAp6s8Dij9eu5mWSFEEmRKp3zoeR9yfbbDDxXdTm5zB6bufGF7P5F4V63NiAb5PALmCQToe4R7WUa",
  "key18": "4C2sYtb1iqVLtCuLfxabGPBMuzEuXkS1bvYBXLnRHmZX5xn19fhyGAF9xSsXuNh7qsFdVkVwBpX9uXppZqzEDcVB",
  "key19": "2tC11WPQwPGUepzEF5TV9Kmv5qLbQ2VUv1B7rG5tHBRJevCCN1W2C8n75hq2X72rFsVTcTtXgzdARW7Gwo9YFD13",
  "key20": "fBNiA9PGCyAsu8vYDhjJBGi8wWyHLKKFzKLojsUnzeCsMaKnVsaeopju1pd42p9T18oFQC4gs2BLRXubhVfNxKY",
  "key21": "4W8ZbxNEQ5Y6vFMaCEUEiZBdRMCXKthNtUX7oPC3g1xmQS6rwUVK4LgqWHmBmp2hgvrD3He6KHmCwFD2gEsowTmX",
  "key22": "3BJEsZLgwvNxMAMLu5hVqa4iF8wAb2FMc5bKohBMfiCzciZCEsQHdwemiEVhdnkUGGavoveyD59nn3y7TBMkZZWW",
  "key23": "xSdDmEXUx487ZdJqQcDCRVUBcWSFbBpXkpkDjSukwDmP9Ds6d5oemvSFdGmHLfM7zMTT9TcZkp58tjX4d37UH2R",
  "key24": "4F6Gux7TzSaPoBdDEkoL8QjvSR6gWtYCYdUdnEKKkUNhELmjyF5JHUeAcbxLfdVZRDmPSz9n3CnTBTgpvYK2Dmrj",
  "key25": "FrnhNzQKKS6cpbpfipuvbfVeDGTrLhhq6auKudqWxWUSEsDXFhSY1qwsPfE5Uupqp9trtiNvWSrz1sHRf8Jd7Mm",
  "key26": "2tdAk7raA54jbrHf2Qa3XDYqxSUMu1yQr5Wgcjb4SFTF55i1c32x6ASfQVR6RnWnR27BEDg6dAkVeRm7PMA2Hmbd",
  "key27": "5EqQymk6yhEpFmBQmY8vMzU2rJPWxTUdHkK4v3e4koNoY3r8FgRhTXKxFMrsDyibkHDokYdPPo5xaCo9GpdLngAT",
  "key28": "3Z3G6YUtKrxAvXvLZyDmqTkcy5Npdk36FKBC6RZZLErwo8BMSB26fW8Wh2sim8VyVWyQHe64E1Kv3KgMhB7br5zN",
  "key29": "MM7rGfTytwksz6NXRt3nWV1qjiWdiE8WqqYNQRW1ADvgVYLhPvbrr9Er7YJmLJgLcuWvGCDJLk78GfcpM89J7WQ",
  "key30": "5KsNTcmttejp6Zw7aXGoivgqUy1RntPUH9tHBusrZ6gPw1h6mp674JW8YvZVdkjL4HSjDZLj2mCCMWDR5EYi6iRF",
  "key31": "28iMLdfJP9HjtcYHAWjYpoEMWEYDTUPCARnT9FDXTueueVPNv9WMKMU9iRFatAEcTatij13TaZGwhoCFtsFtrpJx",
  "key32": "2mMQW6g9pEyVZnAeVy6TSTMeeQmXLG1XNLRVh7pAxu46LHFnAKagKE4SRBgKSyiAKxkaehEtPSNCfBWFhbJ6onGJ",
  "key33": "aPrDr4hZeHx9MTj4LT2bLYr1aS5oTwkSjfGhRXSJAMz5FR7U9XRpwTawaZrKMWXujBrDVCZEhcJK6wMmDR4BVU2",
  "key34": "VLCTAFx96za7VTjQmC9DBuaUufz7hEEVgS3HcD4jFuTXzwq1ihPQovuJfaW56k5DMBEHmupNWbjxM7eBnzfwaTj",
  "key35": "2fDV5SN2HSpvuAgJHYwt3ZdjU5VR63FF33zNY7LNUn1TJXjHPhsg61Qt6Kabk8V2BEiUFonZdYPwcnwhp45pHvGj",
  "key36": "5a9maV3CeEpb5WBAiUQiSFVedCNcmcVWc2mAVzPQrjCiyWmvfXZjYWeXq6jnQm6xDZUyW7xtYcDRrQsReVrR6PRd",
  "key37": "3aGgjjnMkrw9Hmzx1qW1T7eZ8S3xdqNnzDJ7JQNLZ5Nrnw6o6unwR2HUyy8YiaV6aye3syqjxjR7xfWrGoty9fwu",
  "key38": "2Zo6dBy9CyB8pK1kxFxJ73HnUkAoZrBrj7wyNxM4LTAkdwE3ecuecgxD1uCNm1Ji42GUZV5k9z7o3X3cnS7XMZSE",
  "key39": "4BsS9TQ3xNSpZfptVT2XmEHqFb9znyjjc3HMPBqgVGRekMB6VMxnxTVaU1UAXzWxLNCA3daGJeaGgvkmKgeGqzXz",
  "key40": "3UMD2bo1QXpVziLsJ3ig6TWxMqH7iuHJRHmEibVEB7VAm5T3e33oJrYd6T7T1vnf9zuys8DJqkf34FN8JeVJYUzX",
  "key41": "5FVQRFiwB1kYZ3fARY3EN7SFMYsvLadCsi15gBL67oxrd1YGBjMvJVutkX7yS4HhodQxPGhY2YSkhCXGEGM4uwGa",
  "key42": "3d74jr53Nd1FnKeQ6qgd5jTwLL1dQcnKCUkAG1rjTdxdJRLFmxTA5UbodtvHBmN6GGR2HHemGE3ELBVF2yXADLSf",
  "key43": "4pbXKMeSYD7djZULnZdmFTmjLEh9Yhfn73GbdWGpt9KshA2oSr9GJGz81UYCKTfzDXn28LZcYzXpjYwYzmJRCq9S",
  "key44": "3vh1Wd5NrtXKVQM9RnkZ96QnJRnuQPY5y28pb5WjgVd2USvk8LVgu9uaumMEp3urgFm94k7QfKKTEJvTAvamUnR6",
  "key45": "28fqNWYRX4R9TpQybY49t3NM6URgoqkvjjYZPE1VcW7h96K8PMYkom6rxoF6qud3BCduSG23qDSn6akPtB7DFkaC"
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
