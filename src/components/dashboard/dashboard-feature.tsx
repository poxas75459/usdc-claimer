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
    "4JDxz53Mve9CMics9UkW691DPa59qgRPk759wbrLoL2utCnRwn1Hyv9Kn1dfpEMmv3oRURk2PLt82cHUbKtSevhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMMGPyQtXUPXJ25k7SwKj3cpSiP5zW2pjYSZ9ARCw8RdpmAbN4UJx3usrDpdbMEarpCv2BQmvrqqpPk37k7ndZf",
  "key1": "43EuGunfSwqcNr4Fv4j2N8BEGnqDm62kqvm6ihNxfVfwgkeyyFNfppPbV33azwZLPY3UooNguSNcjGPdQA8SDBA8",
  "key2": "3mPwG4xv7JYB5Pq1YLpYg5JoHR9gdfkbtc6D48BCBYTkBCXRW1NpRH7wnUAhSZXxCGEFkhUd565caQNUDE4rYE2M",
  "key3": "3YxrahiwG27JyWNDdezc3zd6r4wQFqkiwzcx5nhMqepNdcg4kH1iYb3gBBdom7Euu433ErEYWsBwioZVW8DVx63G",
  "key4": "3nEe8Q5sQVeWcBy5VjZQP4pfXyMXJxdAWjY6hcrEn2d9aUELnTKwBiq1UecDayqvoVXAza5mKWN4qm93euz7BuCa",
  "key5": "U6hWhZV2KdWzU2irfJe7zWLToBpEaeZYXf7f4Q62sUzXN8Zw82gA139p4ahoh8UgDatbdDQM4SxNspkp2L854jU",
  "key6": "2cwcDQ11BwiEDZ7UkDnZAm3NBbuezdNKu2ofM7p36izv6iwT1xGPw1SQoV9NhZsQcYiuZcXvSxhfsFKAxQwwx9G5",
  "key7": "3npLzmPL8A2ej9DeRhz4n4EMHRD9HzmHzQ6z5eRJxAAxukg4Yn5BQ2ENVVHvdXy1tThtwnZtWaKxPxdWYzD7SvLK",
  "key8": "3DpUqc3XfKGYvC5on5Kv4izgy4NTtDCssZ9ZdPJxH3FFmaepbWY5u7gFoDV8ZVBJZ2xk2RmhDN6CoM221LxJXpe2",
  "key9": "4a1hLT283UxBUqwDb22cffHL5f2pcgANU3t5TJeGfvRJ5qJeaZqvPZvDKyf1JUnzhiaSBqiUzPVT7Z1EpegPBVyZ",
  "key10": "3wgr1cX98WzM2s43yJZkCPbbHfDwsXVXgPfMJjxY5JWzFGifyc2tR8ZDucKHfZffnhEXe8qBAHMUfCYrQwHfCuDB",
  "key11": "y3nCyBwXkj9w5pSoELcH664ioDnQhgUFfoq46UWZ7czWf6RNshAANoxVduzaPZ3w8xcFrbLR4nk6wmG9cdYEFYX",
  "key12": "3d3WbkhY8F68NNWdToEr8sAi8qS24ZjtTQMYULuTcgm4K5M8fD838SECiUDbWuzHMSoqatPCbGDVZBiGFFQf8j7F",
  "key13": "zLfdAvLrkeuaVM1pNd4mKjCtScD582iwDVhVCW1cLRyxcWwEnCfN1rA8aZqfG1hpA8nXoyzVQaPjgpf5MenHQtL",
  "key14": "5bqTyTB8tUA8iaR6QtfRgN7acx11PjcKSJ4dyJnY4SvD1AthSZ2a4hJu7uRLCizuYnnvKeEAoF5fzXWRvfuNBYdJ",
  "key15": "4BiBvbhjG8GZvnsJhZ2ahRDoC7duUDkBxA5vznLDDyoYyxNCD4y3G2YXxmkbm1YVBK52C4eEWDU21a28rj88w3g2",
  "key16": "2UYSu5i5BTM6hRB9tUcpYp1GquEn1vNrR4TfTBbsRLUT6M34zHDDxXrFwNgFdMGgYSRJm4BEXazHhRCoci6qrH7C",
  "key17": "4NZutXSGhfB5ktLDAFRoJXXFzV3FxbGPKbuQK5DwY42HhoE4pP2VVjHEjhmSfNtQqYxbVchfL9Mqb6VnhWta8bJ5",
  "key18": "B3ze82UbLxjCrx1279wcJ79MjXUTwNsmkJsnD9Nnu8dmavkS68BEUr7PHchrnWPeZFGzj4MejEQULmTJkCqjhC3",
  "key19": "35HarmTm1MbvjVSsjtA9xJNQmBQWuS14LWVmD1GEDZDo6bxBnxCiFdjtce1xWNvGCDKoCVn6PQU9oD5kPhDbMzJw",
  "key20": "b5oioopxyvRU2S2AGdvqC2irKLXuKiz5Lc2odZymsgxbg1jHLQNqkHhuSg2juopm55aFRYr9hiHgLDJBarmhrEV",
  "key21": "eQ4AQFahpkNP5D845hzS11QweAyA5quohywoKJsXK17c6YkTgBxE21Njr1sCxkjQwpJXCsoi56J65AWphUdoYvp",
  "key22": "5vQar4vLnMfehmXN6womRujqhjt823PEwjzgVT9ociPVjV9Sd3PcKzEeLT6Ho6JV7zUFNJboLYNhBy43rmbckLeP",
  "key23": "xKXTxSCMXv9wQmTMSH6SyiuRk3sEgG7oRQVa8TiK4By6YSxMh691ohJvEiH32HAzKMuYDFJ9vp6ZHSyPtVHGHYr",
  "key24": "2VvMuWh8M7qgWRdoKdQTQ2RNJaVMycu2maA4mz7chYitCDwY8qA5cGgoUzytAbD6ojZqg4mvEXqhsnjuce2k9yhQ",
  "key25": "528H5Q7b2RQKjBBYuJwMCdEhvm3LZNenWf9CGYcyfD2GqqHGiGwpJu5qHGgJtCbQZMqnVwHwWrnq7PEKDx5THLNW",
  "key26": "2ZTapuG64ep6q4p6greTYaLWELptw6A7krtoqExkyoob5di6pk3M8tqVAXbd5qTxscqt4yBhA4sSehQ8uqrEqj3",
  "key27": "4kkyU61naAcPkcxj7vBnUKqPHNJUq7toT522LHLbkZqM4mCp594F4L8BSTBD3A4QfCPtgTHGtCzkXSfZZ1g9LHaR",
  "key28": "4qPRPxKesZH9yHqh7kdc25ciEJcSpAwNLTcu9FSexmFZ4anC1P8RZCtTUAYq1QwSRjTQDRig7gEFBFFqcjd577ai",
  "key29": "5uMU4tmB1tXJgfqWwdW8fSj75Epksv2Dh71RFNjhaKEEX782SXMFUPNB47wgY3DAqcmEwDTkNjCyT1eFCTg1Q9RK",
  "key30": "5Zs8XLDZTPH7TJjXdcUrdd48BWG1oqQTLut6MipKmPtG1h9npdhWBgEGP6sL6X38Kt9vkfXnn4LkmMJ6CAT5hitd",
  "key31": "22dWsqrRSLRo2Asy3J6E4wkNmCDbdYtx3m4jCiq9zpuYL9Qj7xCABkeTh1ahxYmuUu2sNCWTPjXqykGBh1T1EuTF",
  "key32": "5CTdUL36h3ykHgxcuRUgkE72RvtkfFwnS9VDyucrwhynJWioqQArEMSdiFTkUKhopGc9fXhtGCFkNvcfTQK53cPw",
  "key33": "2wWmfHUscWGczuzRgcGLnQdfW994VDBZK7FwPTWyPMaKtn19hZBLc6NmYcLjBLwwVtAQCyawMBUo8qALLwLyZs8Q",
  "key34": "2eHH8AoxSXdmnRrUwiHBMcav2KfuVFSSMbb8xLdHpfS3pynsnC7XbcpmDyK7RruztEkVfSpho8PdqP564AhP8xyk",
  "key35": "2fTePkpB577EdXuqmPxfySLfWcJk2aw5EY8AnnU9UBXaykQtF5cBtfUs7h6NtY6XM3MP38uXxjGcRYxjkp6UKMFA",
  "key36": "2rVcHB6MhFCJ39Ft1uTmY5xnJ97gsVLQoRLVTUCUykpHGkvgi8JBWQJhkyZXuPDtoBTq2oHgN9nGViXhcve67oA7",
  "key37": "4H4EWfbLT6crSnhR1wnW87Uw3GkEezQxMF8yF5a74WYeVfTc51VomziAFxR9EivxbMJjTnK8DwJWGvJyrnpzpKYF",
  "key38": "3hWqMcdNcMggdqSYrbWEZDeYW6h2fAiy85Lf9rAqcDgtaHGiWmCqU3uwDsJt8ajkEjV1CpRX8qxVDsTtmTw5PvoR",
  "key39": "3JD6cdmaBnxkDj8W1db7wUUjPVMyBK9s9y5bYogzrTUdxD6sYXTj1TMGCUZcKGxnaJsTPDfrbpzYC7JGoz3Tt5ej",
  "key40": "5NFsUVKKZhoHRqBLQT9gcrFLLhtjaLkVuDVTDAtSMwF1UhgZAErxvcSWDRkeVfLHtyAsJfL6oXBuBbQMp4WF7x62",
  "key41": "4HrvNaWzpCnY6KPqkeCEREWzX5evkyrPV5DFWXT7VmyGpizUTdQbWg39bdFo7reLuYTi2P5qxYG4CTyG89dMfkyD"
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
