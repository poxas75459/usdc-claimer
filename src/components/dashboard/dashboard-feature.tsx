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
    "3XTQZzoCzDHFgmDhiz2c3DxuUvE7yXftBgUL158qhkGvXmZFSx3KreAjtU5SogUiYntE6eZHRSgb7MkSYZEmPv3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4xY8e8XbLYjag3B8YjLFh561kwGq6oLdU66KsqkrVpu9zrrMdbsUovRuDF8TRnRBfNk8KvWURS9eYy4xNvVJkR",
  "key1": "2kucgtRUt7azhPXcHdgiU5KYC4u9SCR6iVHFJ4nQTbw2wCYXTvqNSFs8MpvZiUz1YSiE5Hxq3Ax8B5sABVWFtBKC",
  "key2": "Pe4tjBP8vGYyeNt2ibyazBWW1UipKfKCg5pDSNExspVzV8wX8k6ZXvZuiJKeybHYaFTiWygNPL9pb2kigmCamCx",
  "key3": "4WzUeLWxJBKVSbnH27bb8gnL8ionoaP57Fa8B4qUXD28onpVMP2a1hePEhwHcpjWkQtkaF1iYTfqYiNoirGqUjSj",
  "key4": "4PTET6tWeiR2tN8WgQvz96SLuCQDMGNhRqriAtq2ng8C5CBtQH73ej1T2tGV6a1rAnQzoJmnCsCTjVfxY7rPDmFm",
  "key5": "5jJhw9zXXwd8hApksoSV7wQ8HZT3KyepsJ2rzWykPv9y21NGuyWeXtHwTAQiJSfeU6ureu1Jq82otp4dTb3qG1Jc",
  "key6": "9P93vEvDDNCuj1PMJtJnfXn1u7EGKf1bVKktyG7xCQvDxArtQGU8yKjTgUPH6a6F5kVyQ61PobLVZBQBi5Gq2Ko",
  "key7": "5Dop7YAV2ACd5BDDyet2pYeSwqvNY8iFk1eMRJptavy9ZkUZVQ8hvZfgqaZip7xzjrmHZHHVXYXYXR4TrUdWqxVG",
  "key8": "46p2DC5gA37J5pFA5KqCw1ACo2rUjzjTcUC9TwZ9A8kUMxFyLG43pULsL7cu9HSQGt2Zgj2U6Cb3JwtiDF3jsVPR",
  "key9": "4yFav5g3CszEMTrmXRPBLBVTTEjkQWe7XVCNoWV8rNaanymZYHt3mfFoSnvmABgd267frrLX5xwkbqAu4QAZYCNF",
  "key10": "3EEaByBqD6mFAxJfEdkWM5Pf5qH4VQ9niXRjGkNFPc6QUmXFzyX41gDMCsNoD3pCQBPjwdw3sKe4SGY3CoM3feG8",
  "key11": "4iSYuvxd5NvEt9YtFAXkueZtuSyLs46ncy51XiKKSLKwrbPJyhGqpMvPHW6w8m1qXgGaHbmpFLjZjXvjEvetnHay",
  "key12": "2k8ZT7fZKUW63GcEYiBeyYZ8SE7MUQM7mcqagv5wBa36VqpEb2rAjAZXotrS2ZGwoCfF2FFx2BK8RmtgATpWYhVh",
  "key13": "5vAmys8462NM8sDVVPuvrh8GWaoPYEJyF9AVEH9csi8Sb6adBE6tRM85Dc5bCzu6jbStQ7LRY6t3h9iDroqPqPNb",
  "key14": "2VxRUMvVtNv4tPv89YQdfqKS8cejtBusY6usNdjAH7M7JLyoCFsQn7AAFZTsx97vKkr4ufT32w9WG9MAnGPJ9Fi4",
  "key15": "2vq1u5tWVHmiQaNa5qgQ6BNLQ7d13RvCpzX9zyPwa2xNBxru8LtaqZTH38LyNiiprjcj1xYcyA3oU1nDbjBwsp2V",
  "key16": "4EmBz5DCYX3mLCtid1XDChxxvGDvLiprpUsGqscJZ53GcA7J2VbwWA1TWUH2gGPC7HL5DyUz5ukB5Gi9Gaw4PVBd",
  "key17": "BUnbY8uQzzmSp2VTaXv9w7iFWmcwfDwRXDgmGvWG5Mv51g49GEiP8RHkck83cu3FWK5z4pwTGM1ETLKeqQKJUDg",
  "key18": "2VWQEUayHVXjj3xyNfuzo88igxtuYJFxyNKTWjnWJHinhGgdrsmwD9Pvc8KG3RMPKsYhTAqPYRTuTosGx2tu2zyF",
  "key19": "ra4V6UhHzPvjNR33xdkhg8HF4MhpNE8oS41sFjUuNPA3eNPMXpuuFxoYkP7EYHzQiiGgi9FXXwvLRUdeuFKr9v8",
  "key20": "3ZQii8bXjjQ75HYodLQQKyqQjJHKMQo4hwvGo9yYA3CohPuboZ4aWHEiNZ1rXVyNkhbyyUhSwn4kCjxGccKmnsH8",
  "key21": "3wkqtkhPJA7Akq6VqqgY1ozqLAWEpDD1LYZzEAH9633Ybwn6MLmnStJia49DbDUWcD6Q888oN5yb88KP2gYrCLqp",
  "key22": "57oLDDxY8pbz59pc6Ddf6X9wX6G4dpTmN8ek6iwNdjvRmay8kZoZxh1gfWDXKoRmZhM1D3xGoGhRyekRcLfQh6R7",
  "key23": "22SU9B4avAkG7N2pdtnZ4WJy2eYjDnw7DVmWVFuE2aZ4s3612aSJ1ZUMy381NXuYdLLesj33sSZYAcRz3oFoAwha",
  "key24": "2CXwokosADBVtF2h87kiJAPeMLeB1gKEwYZKp9hJ4bFwLBmeHUbL3CKsV8bchyDuWffbv7Bsw8EwzKqq42XfA8Lb",
  "key25": "34gyk8HHZoniymGCXidz7W86uQEMA2asvxu2vamFqJ9qyjQ55y5NYEthNBYaDJ8ZhzgMHRVdZKKuUYPucLAHhmNK",
  "key26": "26kMYDJBJqwvKb6srYGy9D55mDYiuquSwbfhPfaSsQdxBkvr5K8LzPXebTA6yj6CLZ67gsjy36hHohfMvhwBmHWn",
  "key27": "3u2ymzFCkuWR418gNjTUw1VTX4ipqdTdRG2ycExeuHTaMarFzVvirR82597jnokuCoN5YvibmVvaqDwwyZtkqJRZ",
  "key28": "31r4x5GZHzKSmmKjxB7yJD14ao1AnLJPox1UJPSyn36TsB7SrUQbvi3mSgApNJm9hoM1vARJzzbdtwGN59Uej7HH",
  "key29": "5TSHr7gdKP1kCYWXsppaRkhSdHTymL23hepSKhzRK4ujb6NPBBS38qKLJ4wG1X5E2ZgrfFabLdwHzeXau3uk8kXb",
  "key30": "2bf8GrffvsdD8d2BHPPr3wQsmdTbTQPgr2FP733n1qgjmBuQrBbmtEX5kGh6LsBKEZiUVtqb6zJvuov3jMXQf16B",
  "key31": "4QD6YTqwK7LNDQAbFx1789jtf7qCJpEHdMZ9GNHBnGvKhEt6xU65woExvHdUKmERc6AfFa2cWeUxXod1KNXebt4f",
  "key32": "4c1MkYX4a2jiCQj8cSnzyh4v25jiwMLpp9wVpGcNADRjbC3p2JKWvLHSGwMaUgfpt1ySEGyZ4rGL5f5Arb9Twd5u",
  "key33": "td9EBumi3uiKUfhtycTsvpP82uCwmiVQvPRAEWL1qdpEbqsiG1ctjn1uZXypg8ewjtxknDSEBxaFFxhPepZTVRt",
  "key34": "3hYQN2SMXSP29eF3e9QUoMfNwp4Q1fbEk2nyKGVDRonJt4FZM6sbvJ5Dqv1LUjXHUEGJV6B1veR235frLsy3ZEhM",
  "key35": "uLJpy7v8qHHggiRVMVqoTUehnx24o4nCpiPc5US1WikReA8evbNJUAcQFq4m7btxuAuxZY5WYXTyAP5NqqjWF4W",
  "key36": "5AcfePikLWcfKRSDDHbmvFsQo4M57pQB8yPNEaNfeypX887m9VMp9yAbcxtzK5KdSX1rtBKyF5UDWyyEWJyju737"
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
