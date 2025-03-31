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
    "5mbiGqpHi8w4Bzb4KFcEP2fAcuUcSimWVAp9qGp5SExQxjEStvU2iKnBEnaThg4Du5KkS2ZZ3bUQi7hqFWTKmq29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yrj7MborzXazZg26qjCMHmHwu5yabkbj5jL2vdpLhAAZ7EzhVfcFabEu9zRs34N386ck2Gqi3jxyM1znReqCtRb",
  "key1": "9N3JpMxDiwsMye1Lvgsjju37TWDaE3wBjg5hWhtXFymuGSAJQF1favrkWn5xMvWhwpwKrZHMCzKtsW6C3BkHXuK",
  "key2": "5KdA33r2JNRnF4RDx4FXTibUAriubPU9vdqoWvJEciJu6xXnQjnLj3u4iFJF15ReXkfdtdZLrJeGtJARrH6VbQtS",
  "key3": "FiJCCcsa2EHCcpAr1ki3TeivtzJxkT7n26HVPMMcNw6vBohS6Jx84Bh2e5TQ61TxQSa1XuX9fe7ajacNmvRJrEM",
  "key4": "37CUjFxXqzhsFti3FfXLwVWL1yYEowSaneg1L7ZraypNggPswwcwFAVQgNMZrarynjixPgvFMcg74PSA7Etza7bH",
  "key5": "4HuqEAFoSVtkoiPTcN5NdZhPzcNXR6usYV1n2Lmw3Tbm5VsYqWpCLqtAduLVvNMpibwjoesaGJGLKeWyqBmZNtNr",
  "key6": "8nnoy8cQk6u525CQ9JPrzz1HiD42dhEuSrJhVrUoLi1jHA5f8RKmQs7SHxyH81zyCaFYeUqAddF51oPsTDs5vm7",
  "key7": "2fNE2aiJjcRMtJBtKSWex2HjffecuDjmBJ6jTcdDyurkHkXiHu9iEhk6G42gczfE4c8v9Qt2NrSEQfPUkZS2p2Gc",
  "key8": "3YWh4fsJhNoSoZ4vvPbfCMaCDs1U4Kru7oVsLkwWnULwjSNKD29XgHvXrYqd3KLv6RvnRETcoDtXY4kdztGX9Pjz",
  "key9": "5nViDEa2XaiZCpZkNb1RDbndpBBn3AH3bofoLof7CxvUsoSt6PavxGDs9VZiNGvwnAFc9VNcTFdQwUGaN3y6n5Jx",
  "key10": "3yA4Hu1gXepmLWeujteKbV2hxkkRkoYViiq6kZ4NAat99Y7xCKDpVdot4d9yCG9rpBGzD3j145et6nF76upKrPqw",
  "key11": "3m6aFx8vav23JXhJEUa5swXZnffo5zHtKz34qmhw9cZ1JdVTkQ5qRWr7mm2GM4No1ducmvmG4wK6sy6vDQbfwuj",
  "key12": "DbXZ5D8htqVyvBySD9DrFmUsM8S7kY5ZvvTsjFeeQ6DYisUMt3gMvtKF4A3XAN5SLkyueypbH3tFxpjL8D47gPd",
  "key13": "2j9QWgZ4n529sXZhmzKjUgsiVRvs1eakfx7Q2pu8uYTV4UxGxAq8GHfrap4cYHg5wF2iQuWHiaoABshPLNaEgRM3",
  "key14": "2xJgk4CixQ5GuUZ4uNQJM6R4t4SdDV2EpG4oMakdQFNf4MJBKhkjy465DXkASv3KnHHnb9JYroyZmuUr4D61h6Zw",
  "key15": "jyt9wKKNWuKQiF4kJCuXzpRjh2ymbpCRLh38mg2fTPnsQfjdLJE5VL4f2Ft5S3enEXSaU7o46EnqmfV59dMUATa",
  "key16": "3wy9rbY2GLqnhpEtizQRcC6aPANKt4cJmGmRfXVhfTyEFZxgvUz8BFg2GAxu4BWUyGgP4ewiEHYUwEVSfSzbBRjX",
  "key17": "34B2DyEBNNaJrYEotrQaR5Gx5eKLJY6AxfNeei8sWZ6Qngzu84iYMG7Pc2Xs4sHSAaJns4fqxrSjAcekzQpxrrXG",
  "key18": "3azLrnUy68ytDPnyyAQwnP2UyoSGmoexsNn5TfZLowbkh8XuaZnhNTQPfDTfSFLmUzBAuVcyxbnqmrQrVUVSTxws",
  "key19": "2b3dGn5tsk1bp3sCUjcCpxmw3yLPLeKpzcxBZg6g6CQCbXc6swjPDKFnFLnWWSwftrUCkyKKETzH4PXjpv3cFN19",
  "key20": "2z1BCPd6tEqkPNGgYmZDDvVvZkHm1Nwqf2wQGTaA7sgvb4fFsBdYUP64hmRxctwLgspNsn1mZ8us9uusHFKwx4f8",
  "key21": "3WjmyLnFH599p3PQ73EqQP2Xw6AtgFGWdY13jMdVLnVpY2iT2tV5iGSpxFtPTc3wEEXzDVRBAJYHiSWqwni6Tp1v",
  "key22": "2TmnfaAht7LeUfniJ4rz6CAYEv49WCAoWt4DHyq5kgnZCgMV6T6agNMdE9ip8xfC2raudVxn2jgig1FDHphGCvUs",
  "key23": "2DGWCr533YopWFMTEyfkTrrhHaTKQNxn777N1GhVREt6prhv5k8SdwAGXGKgzn8xt9QSZMqrXdhoGKB2QmsxBQPY",
  "key24": "2hoSKykinHncwF9fB558zoTFQWYdCDA2AtQTKrAjbvDJXzoF7wSpHF4TK4vib9C63xxjF9ye64ksZG6QAyJbSijX",
  "key25": "23jEcCgsBZw1ZcahnNKcEks9PrwCFr2BECHUqMKWZHeMeVPAS3w4XSc5AWhbmezi1vAJeUhkkX3duxkjZRBRX8hu",
  "key26": "3T4wZ61zT8c1zbikjC4ZgBpveQsF5NFJCYD4Z884syWibQEgwRvmZBKVHFPeh3NWSm5oYD9hDVuW6Z3fd72MTvEE",
  "key27": "2sRJnK8S2ZRrBH6iTuweJ3MEZBjVLJ872UJtq8TGeA6c6MNmmQBJd8y4xj9VAVPbn2p4QfLkQnaz6MTMSVfHuDZE",
  "key28": "44DzJwyyaMokFYrRnU32VSXz4RRmF5ub89EPJRfRjFjmhkDLJ3fcUFf1bNHvM9eu4bEQBRuLCp5EDqd7DgTpxuVC",
  "key29": "2AiXe2nwEf9TywyNHYrWy7qUH8ncP3C5bmbsveWyp3qjrPpGedSg5a2TFCMA1JFD2NkoLB1mzULT3cdC4FfXCaUH",
  "key30": "4GjncHSKmQ6mp4S7QE4hddpUnzLX6gHY5DRjYgs1CG16DwaF3HFARRRmfu2254g9dciCjeVrvp88L3YQW3XpnEoQ",
  "key31": "3cbaBZEpVkrJwuycj3M8bDRJNWRgdTnx5brNz7UjJMRJeartV88nk6PBHFzwa9KKXyfz32t85wbo64f9FQMHfCo5",
  "key32": "32Dm1afET9Yj3mKBHCMmtYMHd48FhNxNXaxoYoyGUWbpSDsfw5YXg4EhB2vMSZKct5f1EXU3Z7jHUwGmzqrSw7Cx",
  "key33": "5wWtu4DDPqXUTbBQoDQXZyfk4LrGfky9Ga4eG3XsPnM6UmAJu6WhmUnzn7dUXobZcq9eCu4bRWF1v61u7RjsmxMw",
  "key34": "2UqQn4h5Ypt7UWLfXLJqdCzT4gpmmHQMq2YurJZviEn7Y6T812RHhMroYajNqpcCdHh21reE7p7TUh5LzWhVMnWK",
  "key35": "4e3YDUoAdGxqGYR39NfwdYPuAaZZEzEwoiEpAZtRQRkNQ3U1fVCS13VqJcrNJVPFKoqLwTAakbqnjBtXcBBuC8NU",
  "key36": "5ntXMJK4DXmUHGHwyupSDfH337i6cPVSAZHp9pn7Z8wUUbi7maaTCnxkbasiYQgH2z9RYkshirdDZgE98ZjiQgiL",
  "key37": "r7uPCAstcjsWqG46dMYLzbztJW67YhW5tqBkDMWP5eKGdDj22hSucrrkfoRLZzpT5QcdAF1N1eAreRwKmxZRMns",
  "key38": "Kkr3AEaxR6yXQCm7rA22yd5m5iyxdY4TYpJEXRjfysy71h9QBjnAnHZySrMVqyp7xgAJFmmnUYsbFKRtUYoNUZN",
  "key39": "3owdoD5kAvxuDJTVB7G9NyueXt9cNu2f8QaMJBkivkA6nneJtnxgoaJeFvVuckNowAQsczvbvFCuyy4aWq5C78dn",
  "key40": "4Dp3256VUjrudbquvDvLpG68jvaacFyVoGTtJqemdDVSynUpQVMxayDEFTgoMgobWJhnvhEPVsni4ybEhYaFEfKZ",
  "key41": "34B8bjWrreVTpueNMz1eE4tqQLNNRoFGdQxsGzMUnJPyyAxgVhEvksF9aHbgBKouSQKDHhRFdjJJdpm9r8tfZqFE"
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
