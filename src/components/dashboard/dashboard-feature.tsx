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
    "4iEq6a2mfK2bpUnZj8WmES1qkipvFTP6zd4aFwJKYyS5kaPYffWwqysLKWtBZdRjqmx1o6rqUzcGGkorPhHMyoDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BhmPjA6UUp5QSRFw2rs7xeKWe8b6RQqkn4AgqfP1fyBKXibJxs9bFJXj3odwjpWvshhbhNcx29Lxd1nLh2Xj2nS",
  "key1": "3zM4Ddc3hNkGSmbQQAaPvTwan85rLfQnQJVQXrkyNaykn2DStGG2Gd7xuNRP7C5pABgPfoFChYWiyyDhYYjp85BB",
  "key2": "3GwJ6m4KqkHVLocCV9FKBvL45XzUT3PCVESwpXewMUeNtqm3ixud1jUhhkDoQwyyQR8WoaV3z2BXk98VpK3vEPMo",
  "key3": "2oEHyess22aNafxBq6rQ1ArELrJbZAA4rNeSAkYsXvwzzun4zuWmrLsZ9mxDjZTiukNz3PUrWo7Uys8Wnfrv9UV6",
  "key4": "5img4nqERCr17PX84Nopv8JVPTy8i1ckHy7Jt6S9WYxY1eNJMGkdTx5Wm7iH7CcoVKdSXTETvUyUPGLa2MzEzsw1",
  "key5": "jgF29g6c3QkawTt3Z2gq9wroSt3GZEbe6dUhSFse5ZTrDz4hzchGKf98G12bTTfvysmL2aeKb7vrAr8G5qMm75S",
  "key6": "5cGVVAdA3eenM6ZmNghgvMkkjpY5EYYxzwGoGkfGReFdfWGbRztdD8u4JrtWn1ofGGDK4vNDdZFAGjfVhddNg6S3",
  "key7": "55AmCCfEkLNex8w8EojNrW8nvDo6i8XkmqgMEw5f7VkdZxDiGoJc2fKWWU2hREUyYfXfxmMFRW4zYLweXxDmH8jZ",
  "key8": "3e4ykrHiTvHa6M1wQwthGpphfig5ZBTq5LnvHVsj5TtKcYcWrseSb3NeGuJrQ1SS31ij72bzg71eb79NefWijTE5",
  "key9": "4npwo46pvTNohpoMMpZzu4x5LF179G3PZbBdS2tMxTFy3gussg3G5MSLM4bjiT9wkHvmbxRciMVkvVS7GmJkX8tL",
  "key10": "5aCUaDaDszF3tQiebHqH79fcKtg9kDuwZDNPBPmqcDormc4p3zzXACP3iVZop6baau7BGWSxtriyo39Lf8BRNLtq",
  "key11": "4u9cDp4RrPpQgbsSCZdDRn9aeKBm38HC9qHW8LSBUJiS3qirJ3Z4bAKTfg2aGJC2Hf8frLc388V55oucw2h2jTrs",
  "key12": "353htA28LE27kAzUW8au8YKmDXAnsiqFyTu94dVbqZiMcUSRk91kXohjbR7DXthwnzxD5CqRACoqjG9Dx2qqg13e",
  "key13": "3f7si3WwBpxH24Ey5ZFKuY7oksLxZVNYrfAgoiHyt7cgidVAPF5gWVfms5inTrV3UEhreMV8B3QsBm1LiDNtwvX",
  "key14": "4sTC5UV7NYqYdEkPUhwsVdvUEmfWW3rZnoik6K5tMVwvzJRqneeWMktzNSymN6hDsVfVH7x61zL7kjhFcoejh6RY",
  "key15": "4h4746iVG2SpyLBmfLTAjA6fPSzkryf1YMoPMhkE1HPiUu91qFt6fjp7BkfGDqmkj17gRb4KAmS8EfrWwpReE227",
  "key16": "4B3j6i2pGcPRJ7rCPEwr1Sv1SvjCtHfpVH9GGizxkLB8G72x6S2RwGhrfq3tN8x8Uu3LbSWyghXMVtYKXDz53YGt",
  "key17": "3sEjm7ejNY4uYUxf9kEw9xeNbCfKqoB8BX3TCtEF71LehTnGkegqj1YrDvJ8uFswQ6vqx35GMdiFh66s5ajgvAxD",
  "key18": "4zf9aaXuRMa4ERmWSSaqSK6KiLFkgEDX73iuLeYtb4yQvxufZyTXu2cM738C641LtHKn26Wf4Y9Rw15j7HxFaB2G",
  "key19": "3Hcd7hDAoBPEgvELaDkYgi1SgS553QcD8f4SJgSPyjuT2RV7Q69ugT34JRhujfwUcunLFEwLnx8aQ3a1bERmcLe6",
  "key20": "5we5MiR8dEXYnimUZ9647cwEPUEVBc13w8B6ETVSEMSfCFgzu1h6SUk3YFsg8LV918viTyyznL8L1BSX3Jh3EHNm",
  "key21": "5w1VfYVnG8gQfSstGLGpRbtpnR9SFYv3A53hAkMqtzaXjyPquUAqmzbWPwoSmxHpxJDtt6txrNuDxDi7Z9vHJDG5",
  "key22": "4trXJeQJievmd35Ng8q88VjXXWYFrADejMrbRdbSLPef24v144A5o4MtSbDWVtkdPhBSkFqTJQ9r8T7yH53EsEXX",
  "key23": "49zDqWMMRck4ZccAesvDsuo8wy5RkaCztwPgB9DWJeo8ssVoyY1TrwDxrm7t1n5Ap2twRmnsu8A6fNWBNC49GLEK",
  "key24": "2cpvy6dDsNWnSx2hyu9MUryYK17vV5mY5iZeiDFFu3LApnJ2mvhVyjGhBjurgtrrtxBLWt8b5ymkuQkETRUUM3m1",
  "key25": "3X89RYHMCf4cN5MGQPcrj8bLFdrgNWibBMHWYWz477aSMUvHkutE2RjKYegQpZZHrksFymyrjhSCpkcFZeWk7wMx",
  "key26": "2siMfms7mv2Nuai1MaKjfjSByqYAtpzd7HBJLCmuAMPez2ctmQHQELK9nCyeAM5fwxwRtAFDErEeFCqaNMFmU97t",
  "key27": "3nKAKVgGrGBo2xqhGWum7NDSEZLaB6DJFmJTyaBew4KqPPVtwA3Gq4VxEWMK9BB8KHGf2SqjVNKkQ4MCFtqCaQUz",
  "key28": "3LJPQ9MDsB9zMmjR3AvDAERzyQcmVg1ZvmFM6ea6KaYnzskfPebByUdv7fVujQc64rg7hnWEMHNxs9EyJUMi3yWt",
  "key29": "F1ydD9cSwwrisNGtdhAvXXtjMfhoQp7Tk6gPPewpVHmhd6bDnq4qkXm3kLrKERhKuARsVf7SLh3pW2s4RJkuHD8",
  "key30": "2P2UZvEVVGmxJWL7wntdJVhwRP2oLBULMcdNvwm1bWNBFdpm4CbPSwTVRyyXDZ4eQSHNREPZgmhhXwf6mJXyHwcA",
  "key31": "gCoLSAhNajL9QascWVSgeq9gRkYpyV1n3bLLTveeUBJG7MP49h89D5cqmew7QHfJ1oiiLCLwPmapMWcAyWh4qje",
  "key32": "4st8Kcg6EW6w8Ss8dSYBLHPpJjtCqxstTkYUttPn2JVuWwAkcdoLMfCtE2fYKHiDe3iyHyc5UEhPLWFNcgWezrQ3",
  "key33": "WpVsP9dkdvLaZsYb8btD1ig4LdKQP1jAju3JEmUbAn5be2MEanViwxRVs8DQSDxNTsmkTf8eqyUzUckPgvnWijA",
  "key34": "4MG5TvS8GsDS8XjEju12xtBpnHRXns5yX2u9ECNfLabT5ACnHe1vdJGxBHoenZFNvmkY1sUnUzHjL1So4niMgiLz",
  "key35": "2HXG2sExtz5bHG1sezUfsMQ9gQyUYDVtzq3N6CjT63oa8ZBoNeJsBq6GrV1c1PM7SVf7LSxRy18828Lvgq8rJx96",
  "key36": "HXdvkLVLgawia5jMgsbC8bXoaHsSeAr8YFoWwMZrnHcUsTpJiW677HW525WG3Pb2t3YWeY1rb4ik6XE2dG3PWF8",
  "key37": "3tNpZtwyKzsT3HN1wFZgkKuUZpk6JMradt9u2Pv4qF4BN2fijw5r3VRJUKXk7pZoiMG2TeiJCY3f3DvshHesDd6k",
  "key38": "4tbZcdR2KDqUSirJ392KmbyUC1b17JqHZHvfnevtLynraet6C2CtUFjeD6hj5WTiSLcNdD6jjchVwrN9Y4nBY7Gf",
  "key39": "4uto4m8Wi6WYknvABFX4y9NMe5opGxKZoSLB1QMVrfzXndSkqBKmPFZYFSvP8bARkzEyDtUeeTjHvnYEBQqdjhHi",
  "key40": "4kNkzj3QvyxyXE8rT4YFXb9nSZtdaLd4wbEWuw2Hrj4njw8t4Bncthf7Z72d3xCUvU3NfNvEyUh6938PEhRyWDUW",
  "key41": "488xHQovYnqGvdt15wN8n4tz8uFwGndkzWyjKihaSUsbjgWcFqNyYv18gqbmQNyRtNN1fB4upk35gMPh7ghAQXv1",
  "key42": "36LznQg4zNvbzVMpbnDjkCzA9CWuGUUrACYq33rZT6bfGwyXuaYcwGL5uNNF1FvCkFbiCjHfCxbXNecurCDSHmzU",
  "key43": "2fYfz4xtNzDEshafD6SAhbVfTj5aAkfCXKpfo2PLA6onLPGZYEo66JPt1bQRwQhsKgtu33K3UyPQgPnCfnzw4aye",
  "key44": "R79xgDkPKWkSKp1CLHZtfXmD2dcXzMB1hyCHZk4p7Ms1yw1Q3SJetNMrpBMpCaWthrRWDwjWtJx4PfzDPveiAtX",
  "key45": "4WDD2147bdhCi79chXuWkUw2pZtjXaoawMvvs6Spt8iubWfXKvFALiWCpEMLUZH8wi61KXF7iNPeTLF6f1u51rSk",
  "key46": "4SC1qwWhiEjXJRj5Ame2MpAKBjgGPSwt8Js7VTkrPBcBghXNnuvgsjvRq3G2i1m89cNoGfoTBBQXQDnsQiVD3k8k",
  "key47": "3vmtEt9NXofHv8nvxEWn9AMQZkFxBafrncsMDdHjSwnKnTtkAm9gm9B1Wvpx1zaft9ciiNjXJSvTE85Hw8cfgoEo"
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
