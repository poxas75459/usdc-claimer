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
    "4nRhZhKJm6EZ2szyHPtqes42bjecauyA3Vu56vETzd8R9Beigzk34FfWqks4Q29LSRfRVgArxmmx1tHHgGDFGjc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hooayRPfd32JM9L6UPuLfoxjashYd6Xega1uoTZpaWEt7A3dHRPSyw7vkknjw39nTiLrmEBDo8PjYBtHLLpoRUu",
  "key1": "565bTVx67EH4rbRwWY5cS3oLmNcbVWJ8p1FDm9oUJMDafMaFU7THUovmuQ6FG1Thwj3nVavvwhnxWX8iKUeaqmur",
  "key2": "pM1PXU4wQFKEXY6AKwqE7skVuSb4oVDbJiwFuBAgjNSTQxELh3nS5AUKnbV4PgNiBd7Qx3iWPRCBQVqEvjkUL6Y",
  "key3": "4ox7vvzXPwWzGyQx5894YJf6KUHJEC2xckZ7qPp6erUGSMj9fAbqoo6grV1wRpvgJGPcUj4XPiCC5PwGMzoQ2sCn",
  "key4": "2PfquaG4Zngk3xw1vm1B4dGWBxSUVdGpdXJe7cFimmaazBcjVrGCQAz5yxXozv5CA5PZwtpGj6woMNx6JA11s1YR",
  "key5": "4gyHatyYxywtEze6QL5PWZkC2Ph3xUuKgcBww6Jm9dAYuvpXFUuYDgj5mvHXX8Pq5dhTHyRZmNwi8bAjmoQYKwMc",
  "key6": "vRgv8u1JBEEVyRT7tLru9Ad9E9ebU71ZocpGR8NC2d59Sn88GLoyrjYnswjpmFpzi4Ffrx8JNc8MLkiVCc2dH7V",
  "key7": "3qki4PdebPqUdMwY7URbWta8EncvWRZTZ1kZK2EA2TafNvJ73CsuSovWU13gde5sc1pJWwH8XrvTuQ25qUi6xW9X",
  "key8": "4E7MMZBE6fB9RNptaAiv9gBFcKs1iYWa8pjPGaBkk3ENR5cHpZPcF8v9LYGELNmJigv1gQ7PmKGmv6QqMcUPBUTc",
  "key9": "3DakadmJWtmNCHBnYaj6RSFXd4onCsH8qT1kjniQUpvMEU7xjqCrS4nGbCpw8nigmFmvfGDNzc4m2KMRfCBCQXJz",
  "key10": "5Vov1qczJXMJCttJMU1GSzoEhFroYSpUJ3ZiUsFNeKtFVd7RkeQG9DVBjfLSpBPWyStQBQ6rzcHWT1m5LBGmMbdJ",
  "key11": "64WFzyQsiYuEPtkw47dmzrbwXt6VCNwRHLcmCWn7qkHvFtif8wpH5eZCiLw4acZfvBSNhUiCWLqGFDVFhGQe3G9V",
  "key12": "2NPNTthVeDoiCmN1fLLvJh5VSZzRiGQceGQwiVcG9mpGz9U21Dqd4n72YDbigxriApqKPtyFZzCCjrzqdR3BsDic",
  "key13": "48wYQg2cJFFvZRdTmGdxiULErTUSQXuPZLVVEKi92MVpPMPqaJaygUnSbhdzeAPvZKsTK8xgS1y5K5nwgDrPCgYW",
  "key14": "35v75CQZvjrcDbKgf4NogsXhQfR2EsEKxdZQsSdaQF4U9fhMkPySuFhq2VJZ4x41HU3JGfZmoDmsxfne2gV1dHbg",
  "key15": "2mghMNfswvoMHpCeioRz5RXLqnMGyk9Arzi3S8cmxq2PJKurU5tWNVnbxLkTv2G7NeXZn8zFri6w7UvbEygAVn1b",
  "key16": "2zuc2giMc4K9HBjdLcApF2ZdaW9QkVaeRvzT5jq2r9sdUiToTJAsEXLojvRdrMz8Mud3tJeABsGK3wBaVxfPHRhD",
  "key17": "4FSrTBtHb89DVSk4Xn2vQ4qZYC6UV9DBMivRojJXoaSH4iBsdipM64YWCzVPRkgwRxF1PSsqpLEBLsLEZfbkJXc8",
  "key18": "5rryMCCyDdLWtKvnDeQB9myPCg1gE66Yck7QV2CnLEhPkXub5tAfemoTjwqdLT8Ya3NVYiMx3115d2eeko7aVcAE",
  "key19": "hKNy8PFjjGDM9iykfEcJtf72qE6MHLrba3ccxAz7vr1ySHX6BvUb49ZxgLgYLHZQPzoM8FCiQY46xwsUxtRrATA",
  "key20": "2DZyuAgznk6FH8LTvKU53zZt4UkajxSBjBfdrthW4QdAKXM2Vy6bj1U9u3BpB3ByvTuUrggdRyqsxQx8SRyHc4vb",
  "key21": "4nfo3L33fsWBh8j4d6em5GMR9CfMVv8szsXk7oFbbRtk3cac5RLbSSr37xgi4mPXySkDoBV5cqgCFQ4LzRvpWYKF",
  "key22": "odS8GdXpsJhp3bQE3tpCjb57uw8YttyV3j2cag7pwjfnSNyALq9kr6UiN2gBSr9nmZLy9eHty2aVSfQ88BBWoxp",
  "key23": "vLVWPVAMmm9yhhFjsxYadp1Q9vTib8SWsYXsTXvG5jeXQp89G63wMxXW9Ks3Z1C1yNfrsz3rc6vaberyD3s2yv4",
  "key24": "3qzU2YoBRGEtNnbj3L2hsyx8DtwrRMW6MjuHGpydPKAWzt9yvXzcPiV2BrDkMDz3yNrGFG8uMGvZeXRMHLSHs7oy",
  "key25": "3gFZhvBBkmkox35QQGpUGRKUwqXPVnfef1ZkwphNg8fwvhPWv6R3QagMkwWsN8mwwZaCSzCbRq4o3ugomSY91GcT",
  "key26": "3fBT6ZSfpxQWhmA1LimPe4zzaGi3L39URuNEsZmuJp6vVfYKT3eYaQYG2ZHVdfjYmGVNDfmrPts2FXwwNuhKmfUG",
  "key27": "x8hMLigjUyeNpus7U5dMdVTFdFFDQGfLK8iaB49G5iB1Xxw2WyEWCKVzatWMyjCeLEMG7cUUKikWAgUwnEr9EVK",
  "key28": "2MzWzcY9795wfCUdyxQfR5q36nrjizg51UCnhrJBHuCzsJPFBgQq76aJxA2UWqep9mAdFfHJDCKEzEbDDq35u7MQ",
  "key29": "5SzXR53fU6BKKfNV3HLuwEKHSQ9qNcUsdSeeE4quRtQvnbkWwKZfKGjbDHnwRreGzTdZ9tFWhPD4kfzq1AfRoo9b",
  "key30": "4SWvo1CjT5vqfk3WrKQYnn798xaaLsf7st4kVEXZxTsTGoHpuS7af2oRm7tgpnB2RWmg2MnDtsCvW75QtQzJLnrB",
  "key31": "5LsiTwL6HEtbUXjECyhyGN3JFv1pUYMUQbKt2JzqDh6RpQjGpHUz6qZWF9AFppzLGB4PXdq4n1CS8VM2T5i2suB9",
  "key32": "54Ly7dLj4Z8Yy2kxN3BcXWuekXUgF3h3u9fKrg8yUyVJcpH8QevpiVcSjPqpK9GQkgMjWykNeyA2aVKnh6mWQeLv",
  "key33": "5FmqGi6Ae23dEzWhgLWMogSnvHYYJZoQ4jrndLBfEoR3de1u3DSQKneXjoWZ3dC6ijAgXfpt8aLhc1weCEXzZR5P",
  "key34": "3TTJSbP3tuzWyhrKnrpRjmosnbLZdYL7nCqauP6b2zQMu97JZwAyoJv98JBxwyL436dKuUHgBxJ19GMNrZQtTUYT",
  "key35": "2KzRNne4aYpKhaZrkUuTZ96fyYNY1NfK7He7Qr1xjnEs3J1Q1yvuYwGuEH1MFwfzSWXVpMD3Mno8yenBDrdXvbpm",
  "key36": "5cSwp7YPyCmEuLm2wpsdwEF8AN8uQgZgBRBwwkZsWGj8jH2GvjZ34tmoZrJJwPGecoFSbhA2ZvhJvTY3vbLRJyZH",
  "key37": "2BuNz3iLDC12uW8gRh5DJNuikTUkmp8uJFDgiTova54V3tfmKNim5x1Bghzhf6DgXgnhS7bw6137M4AtdKyJXHa3",
  "key38": "48DAPZHkpgnVyUE2K5wh7sSwAF6BkYUnkERNveoavDdz24NZtXtWqb1wR9ixXZJmN2NTA3bM3DxN4GXF9wXQUuQ2"
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
