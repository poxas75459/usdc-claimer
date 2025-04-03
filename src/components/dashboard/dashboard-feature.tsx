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
    "4cx8zBqgAWcshK2UULZmFcZ9fhGuqKzJ8bLhBoJS4gwHy5hLXLKWKYqSyAUQHnd5Eek7GSgVhjRBUAiN3sKPvwHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dp4eN46Y8Vc8YQAP1s7ZQmeFxDzuXwsuxEbKtG8HKBTv1T8NJpgRAUTWPziMgz6vb8QPRsCimb9AJ7Nx5zJxiwq",
  "key1": "4XD7oTrJTuMqWvZTg3Lx5VcdkmgAegCNkVwTFYvbuJMLhQQgsntgBwT4qRyK6MgMdZ3MdtADfhMGbEtsddPN6ZYG",
  "key2": "2K4Q3FVUrRzBkcJHo9akhmi4Zh5dE7Lp7zxKqyXLCnpx6ZDHLMM7MW87ZkEncTkg51HY15iq4vzb48W85eCjE9VZ",
  "key3": "5DuaJNWzQPiJYrk2eDUa8KYQ6VS4JSnzdkjzx8LXE3TGBCirFBoyAfTqNPDfR9CCP8X8jxgZ3jweUW5zMhDqLhQF",
  "key4": "3QgxfeMen3hd1pBiJqjjTVyoiZzWQ6dAf2Ck5oePapj4fqEjf9V6mJgQeXtuDkJL69LcP4fb77oCPaahjT8vEN61",
  "key5": "4ffyEMdhCyKG4BHrhR1g2Jmo7LwvyZZjVkRgqjbVvVTndAqHcZiYGETapah8Yt3ELJSftGm3qLGDhBR8j1NhUSsj",
  "key6": "2Y9L37tvT3AqzGVrjo4eL94XiDn2cfGAVc8dshXPJCnAJ7JMo6QpgsKfuBxsM5Q6NCcnKtYhCPqNjn8bFPDKf5GM",
  "key7": "3J1zBPboVUtrRZ4QHUR2JPLtK5veWrCxb9183pkFbTUH8rySaQFp1HafiCgdmwV6jb1GEPBzKrvKSozEJbALHkdm",
  "key8": "5PRdgEvF2zMFjjNZNfM7Txuj2pooWmvgrje1mkFm3jkc7M8ogQVm3SnrEahS6t6GHFdwxtGrBXhS1a81JxtQWU1o",
  "key9": "46KcKyC39981d9frG7tHPVHztHYtwq4ee8MZ6BpxPUHDKHGnS52EtMMZa48k8eTmNAvpts3ybKzoeqNbuZZTxaWu",
  "key10": "237M249rdKWxNABEjdRWBwxJxLZ9974tPw6ARsZqYE7RVn5ct5CstYKS1wKKrg4qqGrX8AqCQam9k9Hyj3cfpA7e",
  "key11": "2ug4XF2PuBwU6jaMqkvHjruQS43DfHWHPZDCRJadWUMdfWHXC3sdUzNWXxXZhRa4srWHRUBVCZspBremBiMCrb4J",
  "key12": "3t2UQiVoZGQnGggWoVeV6jyirPEQjoTgbz7CXP6s9EXk3Zy1JD7WDeVeL4jpdTZ7VEDG8VHLVG8U9ABp68cVtYHe",
  "key13": "5xeoDt3zqUeRiBvLYJLsh2J4DNWcGZsQdYDrWhekBoK4K7gcdj7eauF8JdMum1qHVFC7LYktYENGhgZhrAFZmRBZ",
  "key14": "5pqVFMstQRY2hDRptbCW2gdWbJ3jcE29vmqkxYxtkz6G2W9vQChaA2grAztFP2m7TqwKxNrZNJYJF66dn6sYjwRD",
  "key15": "evNH4q3zCimkkd4v8QoM5ukT8UL9G7dzmdmh3qxaH3752iNsBoct7eu2mfBBah3zx3kUwzKQhP2CWFLRRkCFE6k",
  "key16": "3XZk12cdv9JczENoDCbvsPtg44mVRCN9nUS1QXxE5HuWmq64Jg8UUbcmS7jnLpb7cH1Mcgxj5wD1sZz1xKuppxMf",
  "key17": "4K2FmPmfL6EPgUY6JcCpkG8UPgjCtJFGPTboGj8QipMSipUdmVRxfoygPwKdrCviQ8nE4Y54btSG3AAZLbnMtXrB",
  "key18": "XjnHYQgGZqKZY4rzbHBgVeM8n8WsvEMMjKHobxDjuut4TCeTdMqk3AUjEBmK8sGoDRSeHzjNDMHWDrvV26wABdE",
  "key19": "5TyfWG4pPruApkFmr65HRQ9DajVf75HxbVmfUQijGZcU37UpR65z2C7p99LFWMFCBqR7Z2pG7mcHPftTGcUBgu5A",
  "key20": "3VxSH8QNA2imfwPQw2h52gqdd6e7YPviwET4STohMaUVkbAtPG3G7vy7swbX3Tu2DLdbRvqa4Vh6fkoW45v35xac",
  "key21": "4pAJmYeNoKMcHdi5fmJWmREjzdJ9q3AuDPoLdxKhrxbVrThGJUXQGML2XcQ4RZ28zrWCBt5m2BFUvacp32x6DCNc",
  "key22": "2qB92c8SWPL9gPm3H7gjDgkyZo8hoi5u85Y4mKeBgFpfZQza6LtMGAZPpvbfNgVsm3FvxJzhqwbrhV5gqGEM3eT5",
  "key23": "3dWMHbNvMciiUNhVYv8HJC9edky9G1GspVVrw2ZNqrWQAgLFv897NuxxSQFSHUGy9HRd7ZrpUHKGbrMX1qo44Tdc",
  "key24": "4wDs6d2mJozQRDU6RgRQrxfoQvAERz5X4QTZ1kvtEyYTheMNfw7zJQ5EP4bYTEYEkowzddMG15TvLCR686BT3cVb",
  "key25": "3e5myUkfyiwt9w7p6UT4FxGCQGShV2EJfY1CVhJ8fY3UCVEat1AcWegjAPJw7X6VMg7M1ZDBGj23ZPt789p91PEg",
  "key26": "45obMtFinDzjRKP23v1wHJavvYZAsCKJ4NxYRnz9pZZmmcf8RnhP1ioM3WPBgxwRPw9mJepCsmSX6sCR5uVkWp1s",
  "key27": "5X5BcqyCUmHEojeN7MgoFvkmXTPoYjjzhVr4pXJDH6tuKG6THaXfTDqWZu1us6WXFiV8GgHwzBqus8NvcNbLxPAC",
  "key28": "42n2y4GKbq5mNpmsP8ny7hpM3CRyj9hi7u2dVZ5Pa2WZwdPabBFj7p11UGNYfGGvPKsDoU6NsbDgFqH9vKNVjay5",
  "key29": "2eUKy13qFWa7jBjusVxCXmDCewNURgVrWfpBQpqLBsaaAGdmbddRWPARkuG3yQ3vLkyt7KNAoUWFjwvuFickghG9",
  "key30": "3Z1RSEF5BGQ29gpY3DkxBb33YTovCzy2B9AzgYYUL8zsbhuv6VpTdgC5sTPCf625YuDzvEXfJ1wSLpR8Dj19cmvt",
  "key31": "2e82eJdXGHFTTAELuakf2t6hZtcPcoF6DcYNyF4DnsgD2sVQCjDjd2ghRDaqz6nsmYFWPwCn4ticczzHmEqcKBKT",
  "key32": "5oG5g6yaz9urm5b2EH6LbfV3FwMSkJReVQGVvjuyQJQhHvk9dncMyAdT6eZxut8ZirixBBFWvHqBDpngB4gAcCda",
  "key33": "5LDF5Km2pKYTzx9di6psjWzxtTXEjJiDDrUCZ6TiWo9z5Cs8FhEvKseuehtXaF785VUHs7X5xTKMC6uQDsqrx6V2",
  "key34": "67qqAsihuq7tjhgn3VYstpGLJYrxG9Kmk3oDsMBWmXkURzTKzF9gW5LsLNaAHAKEJJJnqVi1jCALXiN3Z4HMUAmm",
  "key35": "hiF4fn7XVWKShz5cPpW5chNXTkmtwN4mS2ibV5NZJfFGF8MbbUWHEJbLs9KviWsEHF8YU2rNkdwyfyktXVXSAvd",
  "key36": "5vjDeceJC7BkQX6MtKXeqXv9YvYJgx4eD2WXiJZjo5MDMPj3Jh8P1dSX8wPowW38QkcWNnUZJfurGSEdYLt4m1x4"
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
