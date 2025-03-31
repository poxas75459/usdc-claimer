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
    "2zE3gynbqsiRB9LKDWACLzCUXdrFUkc1usn77ZcCsVQegcPLLvVxfYB9X1taoDd5nmdi6o6LTjBA3CfN2Kzi9PyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XN3PEZpEKtvBfZnsXry6aNeBwvqHuJMG1ob35GU1BaBVVa5nkifi2VhBeLkdqDTVvHAKnDZyCZciU4AtsXVfmQh",
  "key1": "5HUUraQqkPegGq1pGQLzGAAFWFhDVyXGzrg9y4dmtRKS6wkg8HapmWNH3UfvEBbd6PGghzdcFS4T9eCxt9QNNHPt",
  "key2": "2yUrKjcucXbofEsc9hPEhycsZUEwYba1U65bMj1z8drkPjEm7oUByNRoFamgBhYwGyrX3QcbU4hSEmvjgap9eTyG",
  "key3": "2LtWPHKdPBmw7JFaKFS6zaBd2m5dy7mek4aA9osFUjFjcpmYyEzCMerhN6ZMXNCjKqz8XucDi9ZXdRCkrQhnUjxo",
  "key4": "3fQdYhQ6Ui8PhsqRooW9qK4KrLAmRAk7j3LS24na28rYzeZjN23v5Stcxh5eurdNu7PYnemRML2qgQDhmrpXPGFi",
  "key5": "T9Wm9edMq2yYnBSxBQHVNcAxyFVqDgiXpPK6z8DaXJR38JUNk45Kmq4YxevS1sfo4UTxK8JL8o9wSP5CvXh6mxH",
  "key6": "4qLqe2eUJqLm6yALhiQyjTLbZyMCHrDohedVKinDMsKE3D3B7vHLZzkeXWrZXSc9JdoAiFpJaeedDontwew2yCBF",
  "key7": "62MDPZo4vD5KJrvBMvooR27X3bRwWyfD13e1p8wJXDcZ1QNYk2eRsxPJvzsyUWse52WEEQyLpp9tGG1Wyip2RHgk",
  "key8": "7b4MqEYUSMMLWPmE7P3PgVuZV8jrow6QZi3uNiEmwW46j7SwngysQXNcNx4KQwTjrXcShHGkQ1uMpSnHyPwG89z",
  "key9": "2hX1M6gPrjEdT7R2eNDAncCNSWPRJApVnP7LXzneNsfVKo7bvvCgTGgSoCakpFJjkpgas2sRL5JpVD66GxGEky34",
  "key10": "2k1M4s4P8TWmXgMqw5bnAersWYQcwHNwM8zteusKfvHZCbPSanvMMUwiG4KweaqzA2yqBintjxUBGjkU8guFtUEU",
  "key11": "5QEQ6jjSUWDpcaxatjz5F4TjEZ1ag7sKJBkXLKUrnzCQK6AABnMycTZBJbYhtGbYcoMad1nV8yE8aH6z4anRCMHs",
  "key12": "2DTMqqzkUzp3neANKCu3oAefc338R1v5suCWzV9s2xTsZC5CWnihMgU42vX1e8XcejwMbjmk4m2qc663tiiDENYE",
  "key13": "tXjgxvwJdewpSDAQ3DmUC6ujHsDm4U8tYHvRyegQLyphVoYLwm9qD8FPNyUNKL38eB6tdSzbgfwtgqbSG1pi2kN",
  "key14": "371dEDKxmw85C83qZabaisdkv8YDn8tBuiHv6sgsTYdFgVCUWpxwfwpPHzVnRTqQP4MDWkr97jmuafVc9egdTT24",
  "key15": "2UpK34brtYfQX2mRSZQEmzKSbqqJB8cTS9C2GB7fKB7Arpqs9FCjuqDA4qb3CpnJ5FSxa7H5fKYCNLyHUb5uVFCn",
  "key16": "gZyhodsLEuFmPEP829DGwaVTvRT6amnbVxjXmL5QoMWDvvHKfJJtR56PD1MzRXd9QjEt3xv1uqrj5EcpkrkoQfW",
  "key17": "49jK9mQbbkU1CfKVhP575Z4JMuV8HkuAUprqTnMpD86ueW9zQmyR6GCybJLCUV82FruwyfDj5nmeWMCMVq37pKZs",
  "key18": "31ZSLJW11yC41uKPUS3vuNJ2YwScBbVZeqTWUpph9eb4NvtGD69Svb7jzV48GyEkrHp2bbyfEVsZVUF2DYRpSdpf",
  "key19": "3cDsfENUoE5QTRytY4R63p89RAZ2HDEpNJs798dKvTkHDVe9fueiott9Rf16hvYegGbtDofXUtWgGPUcJpAbbVt9",
  "key20": "oenHcYt6cWdJddj8zGMXrbWw8UMUBLfscEu7if6mxurRTsHff3Jb5xBSLqjP4uDus3GXn41z8jf1km3nMTcJqqy",
  "key21": "4XrDgWYam9h3hksZF5NjGHCtpi5fYJrdW2J3fKP7dCxEXEnSz28JkmeSsiMtv5pB2Vp88PiZ9FGEzNdmypvKYZKD",
  "key22": "tnaUjPpESWczWkCPhHza915TBiyNZRNLTQorpPbbrajUhfMAbSkX5uqazGXeBpAxrcQ1QDn5RKEzF39dtGzdDRb",
  "key23": "5zZ1uq1CBRE5BJWQEnkzCp9YNt4ezX1QwFvsfADo9KMmn5etMaY19TodKepQREbUiFuQ7stBuwaCqxwTAVdVKZRk",
  "key24": "xaj9TXBDMgQeeTKqKPQEVTUuMHDUPFEMvZg9MewSdpPbuEoGYDZYjA1pNQ5oZZWbWFZCAKdrX5BZMtuuMpYLWsg",
  "key25": "5gC7kP8BsWPGACg6kvHbsgXGQMqCLiL1HaFZFKVoTAfhtfRRfCJVD21TbnQddqMcKBstSwzBXqcTNmWEbyo729yF",
  "key26": "2nPYbdPbJDYFMbqqWc35JVZABScg7F7WKDjQuGRYUM4hYPPKu61hfame5jaComQA4anLbvfivqngwGMqSs2tZXGM",
  "key27": "4aL5ipqZAHiPrpJVGs8JSXyd5xwExfXm6vtYHR6xM1gba5RXXbAarK53M3waRsafUBWsWwj18o9rEKNdqJxS88Lr",
  "key28": "2jCf6arx2uYnNDckHfmvJ3zBa9nHdzssfzJHcecq8bZdunE8ujVKt4yo4KC59xrQYEQDC2bGtfKUe9vDJWMS6jKQ",
  "key29": "4GzCKhbU1CV2jWRg4QFdjauWyS9oiLyLvh3E1JT9Umcotswicc6xbY7DrU1n8pmpZ68ygCmEdyuabBpQMUyojLpJ",
  "key30": "2pgy2RPJ4mrsrT94PLDdG8jUEyeuLm2HgPydMSWRvTCtmPjpaFiqFFzqiNTqNkCqWb9fnujBLdGwuvnoqVr631Jt",
  "key31": "2eZjrb9bDZvkZEVY3FGh6Xn2C2iWWJc9jS6c54a1cgQg8wQMSddE2SvcjC29yAbjKYPohWwDic3SjML3sMMsdo6P",
  "key32": "5duzf2tE6LgcRkJuY4GP8LcWkdTKrqLM5Y4uDBovm9PxiuEadkZ2M72MH3PgF3gRTgkTLLwjcUWnhzHbXs45XfAL",
  "key33": "4t1BvBxF5nHtAXoPgh9kCoTtMFTwgJk2LGfkwjeRKGFg9jtpDecJV3z7Mfgqcf2nSe8d9MGvmANbNAoyp4mSPUTc",
  "key34": "5Kz8tA3qp6yzjrammQsGHoJ5AgvyGk9WtkqawqUtC8QwMr1En1fcxxwkBnLc9Dz7nskA2zXrpSoa78m7P6o4tMHo",
  "key35": "3ZXf9gCsqjJ6Zxty8w1J6Wz2f23go2xNEiW2dDKVDkXcP7hKMcr7v3bvW2EYCUi24VxaZTc8Ee5YyRdEW3Jr7woV",
  "key36": "2U8CKiFuNvWAj9UEzVgDWcdNkcmztXCik4ztfvgvycSVmpKKhZFeJTAU2sZe8kMJFUMW9ov2NExbtfju1M5coxJW",
  "key37": "2cNY5EguEfPSdSPwqbUWB6Nm1fWy3x585xNjUGNQjyYfAB77s2nShg8642h94A3i5A6WAS2j7bUTCN1pEQQD2xLA",
  "key38": "HePcxiHTQECoV2VpSQ9SJL1yDaMdkK5JbucLbB56T7v8brWimBQGSVTChrCvVzZRNXBtEx217ZZKP9xYbA5aXDq",
  "key39": "2UVXgBEquePjy3rXYHzRVcLEet85au96M9Fp98qqzrkSPDq5PZvfo5J1GFMt5NCeUGTFuAMmqcCFNDcGWCpiCiH1",
  "key40": "5M5G7MaYuN86wxcQ82tvRiD46hx9jBNUctaU6LdWoXo1jMaeX1a9LZxgxLZsSZRCMUVaAZr6vSeimW7s8B3W5toK",
  "key41": "2gsRC3oRqQk3zxPzZB68FEHcYshaDD9cqcK94PdDXrwYTvXQZDyVDL7h88DefJcGmgZgfajwsMZZu3ovvC6K2KkX",
  "key42": "zYMK4ZQbuXXVr26qfDHM1yXTKAaP1Q9KP4Expb3DMDiMZP8p61pCjcF6jhYP7VTKSE52DSmvq2rn8mYGSBfEEqb",
  "key43": "ot5ghcgqu38xPDsdtubSPTxeoi9ECrV5nbDFFyBQg7ayfAVzgkRyUXUHJQdKjHgqDM2kron125k73zManzKj3Kx",
  "key44": "58Fr1cyoqKAGonZwydBbXAJP9jXVNnKdWSFTabtfNc1kf9uD4dY6irar8GfJysgJupKTExf3owNQAqE79Ts3qPnC",
  "key45": "5t1TPmXae8XHE9kuwTtyXNpBA1tJHSsiJ6eF1FkWqw5WndaTuCpDrNvmC8Hf7XydRwWPcgnBVhEQd5GkzEJgKeM3",
  "key46": "5Xru4ZzSxV9PYst7qKbcETbiQCiwK9gb3pGX4tGijGpZiCXCPpWgTQw8nuF2edY5sN1ZpUUzeZKPXdiFvS2iJ8Py",
  "key47": "AD8xs5f4CqWUJB83x4nbXNuS41VEp7VMEp2x3aWByDd7DHcpfzgLiDAbCWVpajC8f8e3DV3sZ1MpYmgJQUy367j",
  "key48": "22YFcS1CD83CY7jEM3CHqHCamK6SihnfRsLVsFf5H8yisS1Hva4rif33Ut8PpU7REVoimtLKzVproxCcGi8LYjNi",
  "key49": "34bUF3VRaECwa7DKccb1w4huLBpQHVARgANU9BFj6gH2kGskJ2rWUT8Czse2kfVrwwApcGCCs7AskJeqFAYWNd7g"
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
