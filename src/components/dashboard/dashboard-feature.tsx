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
    "3wmuXQifgeSZK9oPE1dZ9S2WbkNK4c3yfoaPd8MNbHcqDsVJzmfwXqzZ2YMbUqAuzXpGTX7vV94CFehA3mWepi5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631dRNRovqnF6Gz88uVS9EDeBAuwPNz5CTE4E26Nzqt42thS9UZaTdHuwiQQPeYSsFVen1eDTJEz4rjktpecxf4P",
  "key1": "43epsZg1ag96upogDDgGvyrN5u9misoXaTCxHQ8Av4HSHJEHEM7QfcLvbzdjU8rFWo9TaUGwDrzgjfnwVgqsHi7r",
  "key2": "3EQsBAt6BaRm9w4sqk2TehncZfz8L85PCDf9queLKUfM3WnYHBY5SjqKimrtvgviKMCc3AVUiWwZQekZzKPtqgzR",
  "key3": "4divefRi4ugnhBhWMp3zMLcYbRLy3UVg3optCh5xX3DjNAnwpdPrpb8Ljia2Hw7PXP62H31VZD2Lgka8kS6QhzV9",
  "key4": "5fh8qfiHcTTvRbJwem95jAE2vQV66EraV1RnHFyvZryqDMKo9o9w8tFo72QjwrVc4ouZhUeYd4yzMMMzYAYrywVP",
  "key5": "3LFqTicozwHQ4Vq7AuuhXxSUe8HUn3nKTNCUeK3jW82h3zajWs5chQ6r9hjELd4eekg6Fqk9kooaBD9DyWR7Lw3z",
  "key6": "xmXksbTMadPv3Hr57cp36WEM3oRnna7gFY7QnXJYVjbvQKKrDwKcY9MH2LzAhg7JryQDtR7irpgLyErUTVzZpc1",
  "key7": "5y8crBth7jRE49q87LtkGUWaDvaAEt8FUDLVUQfjCYuWYpuotnUsNdqA8nQfTyksvKQQ3hbcuY4kqxB531TJvoWD",
  "key8": "35ppnqr3nJo2x2APXq2SBm1r7nf8SGp6QXmMdZ7vsrvGjjU6GYvrUcC7u95x8hDFn7VxPjcX5g6Cm6PH27tpSDDw",
  "key9": "5NEpaySVWrBCeBDe2rY5MJTPkLaRsENrkBEd5LoCMw6X8nJ1sWgD9UZF5vmtfaQFvdwujzoyv2GETJxACx6jS9nf",
  "key10": "4yYf3Dw9UBYyoXULcWq8V6gXq4x5xDA58KTGh8tgwndg8L6U5L6CUwz3fJ3SfhFmPEFHWz6mEJ73SaoxNxR3tfEN",
  "key11": "5sAVnr8fZnnG6digpVXprKJBmi5dCc4h2PHEBswhUz4q9d9bSdJgqCfidMXmNRN6bwZ867R89vUrJgnLFj2eyPb8",
  "key12": "YaicRZ4atiFG3CvLEjTBn152BGyQp5i2X23mtqnRyG3o5pCS6M1XhENtr6mXco1wULzXPa7rPckUioKBvCJya4Q",
  "key13": "4FcwcGtpaUvhvmFZTvcF3PeFpdDzsR4cctHtCbVh9XBpmkWBg2L7GNxfr66V32n2uJcaZig6A4JC57Lj8Zps3K1m",
  "key14": "FedRvWTbAvjUhEyrerTyW5wwmCyt2tfV6nLZvmbBFdMCpRt5RrXX8PTa29mjguxuutprCz8LY3f3CYRBJH5GiGj",
  "key15": "48ke8vkEQLcyYC77BnFTvftZ9NRZntx62zjuYk72NizHhWGEysPxFPtZJt9BfmwSFkR1D9qFioXsMy692DjSCctw",
  "key16": "LYn3YTgNqBpffbsfy5r4Qw2kcdc95efQ4zPcMtKLCQouq2tcBSr8rRDmb8BwTaAzSG4m1Eo7tG8rstpFatMe9aC",
  "key17": "64zSbGfq2BJ8rRhRS6boTUFcUckGmvm3xiFbhzQY19GTrtN3Bh9r7x8bAZXSSp7qpSYCTeLieaEyX4SEczF8wFWx",
  "key18": "2vzDcZNJJF3dtbvniydCUUpxsuGjTn7WPVJWRppyb5h67DLjhETYxKLD1v3ncLhk3EgkaM9A9eLDbvkpHzLcW2XR",
  "key19": "4sTjrvte32ruJHGUfAMdh3uyVrsdXAyvbjK4FzTJyDnyLLbf25xo5sK1RKdZ524jZNxYFyw6dYioxaYdQ2x3atUr",
  "key20": "2PFz9XVFuqbyJ49oahtToazXDKB9fhHY8bkZ3BL2vKBScxJsXqrBS9MtRWvVNGLGgRG6wTr6gCoB9GGZSDW1tR4N",
  "key21": "4du1MMmuCzdXiSHisYn95g7mwNTihSrCozYpHZSsFjaGfqm3tW1UH21FJxvsbXniG6wdzvzkWMkMBmJusBKDgxr4",
  "key22": "64S6UGK7WQs2yr3TUbcMh8PDoWQibFCvJmbygEttdaBiS5vZTthF5R7YwUBW263iDvXHuVahffAHKK9JkD22qzdW",
  "key23": "32DYdgkiZK5fB3k5ziZ1EFv8Ak5qsTv66Wz6UacZTycMJUtFYhzcmRcNYSVuAWwDcMCAZmcEpzGQFFnSN1KgMSYz",
  "key24": "QsE4v2WMvtHrD7MuYRFA87kSvjkzkRPDreFvdL9FqSey3kHiiF8vBtHQ9Jt6HuUuFLiedxWzrUazz3CmH7gkTJB",
  "key25": "4dEhugjJ3jj8xweYk57JKWgCp6PYb97sM7psd63R7m3g6hWSXTF9YG1Kvqr8DuXmKvvC6QPEUKEF5HQSGrM6rSub",
  "key26": "3GupUNF5wC3EGWuzVbH3wGwLU1hf6prdqaQNVGguN4NbSLNsm8wyCFu4WsehsiMcv4BWa7aJtfxLTT6DLzbrzmpM",
  "key27": "mXYTHDZ8S8mhJ7NQjk3YeDC9p1VXNKcRi6SGCLEWJ7dyiGqcYMbqhfCLTrjPGPZ3SRBDYtEmRJYZ6iLbt17JZ4i",
  "key28": "2sJwZzXNmYVU4ebWzs2W41BeV1vAZMVsAy8BXBw4N2wZdTZ1ZyqEeihfxoLMmKSkfeDVUYsA3YFi81wnekfderaG",
  "key29": "3GEyfkGmuvBT7eBhCd8ghqS5mhYeTTDR4EDBezzyFYndqpMyX2X8ycSDop2iyZ8JfNPA4TaVBnGi5SpvifKLWYaX",
  "key30": "42mJWasKNB48enKvBzxgFiY8sbUJsqSHQLbovF9fQTpHYfDgvA4XeCUScdBedoHXgGityc1PxXi5tpHixs2SmCu4",
  "key31": "Qz21shLyaUtLCdXLHxX5F6vWtNBW8WCRXD5xZMB63e1sPDbfy7o43tCS6ef5kgFHriXBWoJL6j6qf5zJeScsfxc",
  "key32": "4hexWnjuTXvJjGUxyJBJvrLuGQnRBZYtaHZdN3LwgnFxK5z64tF7WSMZg4KZctUmGxqUHwBusDjeWT3AHnWdiFsD"
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
