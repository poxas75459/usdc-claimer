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
    "3R9P5FwomWmBEJQEfJoN3LFfSM1KmY8RhGrWy9Eu4PgEfyTHHeP3koUK7XvvFFtiKVbXCdjNewguvnHLeqafvbFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrrUADQ2jZwxAbGbgksFbS8cg7Jyo3vZ9JAN8WhdHCEUbXsTbfs2qzcrQWjjbX8vEDB3Prj4ZAj9Nt9RPQ5DEHj",
  "key1": "3kuXsSEEoNY82jR52Lzk2dzvF9aGwhVFMiLTEc8rRShWzASsJUFcmnyvHr4MS8QLLJd9Ay86tVqcqEUFKCrArdeA",
  "key2": "613651GvJUDYu3bUyxrJjZcD2edaj1iu23CkjBCAQNdJhpnJMNottqr96b3nsM8pLs6uxJRaJPPKoCH6faxZxJL9",
  "key3": "4LVVCdeMsnN4Ew5GeA2WVUMRBobsSTuaX1p2V9n92WtVVvF48RD9PV4KReB3zkViiESEspTbN5AHgDSzzbPCMc3m",
  "key4": "4sen67NV6DANqgb5cYdHTedVM9zDCb7mV3RbA7XE8gwV8RYXRkSZMov34CdKPzqBGK6bPi1yBXpRAx15Xr6DtWNp",
  "key5": "3PEXQigVkTV9aoBfdAEBDG2r8TK5ssUCLiUTSGoaUbEpKa6kXFCXCPHj1pi8QuKo5CTpHUGD41Hi8sYpp6KooRmp",
  "key6": "2Q8dYqDujvLJ9cStEC9iWTgS86s8CKm7mJLrLD6z9e44o7RVxFQc7xmhwRFxAjkXfJKPpALSCv2fPjqN3oaKjiRp",
  "key7": "53kvZuDy6AbXvYsmYGARYNzcZskfvW57V5bytjzi7f87QoKp3RL6go3oN97LtMYAZ39PR5pbPsEbHw2KsQcUo6fW",
  "key8": "2b6G2cYvWNk7M3bK4gmdVJnueGNae6AhEuT5ZX36RWAvZs34nDvPX9gCWLysWJjPxfLAhoNej8pwzTGUAU4umoc5",
  "key9": "2xktxfJvFEXkY433fjUfMoKkmVKGmKfyFeJxjJXF6hM8CKvF1VxeXh9G1AqaJeYVStiMZ7T5nVSg6z5Jd28qqkYe",
  "key10": "2vPWgHx4JR1YbuPKMteNJzGDk4Hi1bow8Lw2oifHbJVQjHVe18sTKw5bnmfroepNnWghCJtbsJjKjZbScvJdxv52",
  "key11": "4T9WrGHbisjKtBQkAXPU12JnMvAJfQKxqBeCKAouFQbxPdE2CPqk5PKBt9Lybg3scyPK3DXRmH3Z7dQ41sqTuftL",
  "key12": "qrLtw3K7gdbNa8VD1TyjQCXWsd5YV4gSgAsxgag7SYBkrphvj2XP7Z75VbfVdAvyQNxqPXoKkVHmY3kFNRGU7bq",
  "key13": "36L1e4dNhdhyYznD3cNyAHGLTcUAS5wthj5UdSTJ3YN8iTGVy5P1r5T8iR4rfZ4ge26bCei91gdCXkp2Rao53ewm",
  "key14": "2JUskfufxBEUgpH38sUqqk9vYtKMFSqQrufF1yS78Ru8EGhE5QvsmDWsULzB3YdC5swWwnhp6fZgNLuUrxpPSmYg",
  "key15": "3aRDRcHfiBFuwEMcgUuZH7jDFqM35PXKPC5VCcv6G26HbX9aJupzKhcUVUdxLNmR79n7qtDpPBBFvCCQGoaLGNEB",
  "key16": "2aZtGbGBJMWCe9Yp7Yd5aZ43h7mAozYAVJ1wDBmCXwmvynm7E15bLvyBCnyNtbmATjoaVHhQSBNPZDrjUnRi4A3s",
  "key17": "5Gf1r6WkpCBXZhChwQszzWuDPCiVKoUqUyG5izTT9uq54JASBo5n28kREYFFboUK46pxz6ZMFYVgAuvYUa28Zc6",
  "key18": "3iSsyTuNzoGXRutysvJQK2nqVjR5KfxsAdwN9jTzMRG9kPkRbsg9VYgqm9RG2Ec6EnefmZqrtw9BSABdaxJuasU6",
  "key19": "2ptme4W1CnBVQ8QBUZAau8QtwyjUyHR1TrPk8uvVMghpLSQCBXeiVHkBmbRnnz2kq86rTDzCegPCJS8ej7xFRMX7",
  "key20": "2P6p7F9qR8vaZmy4x4iPvuXZuDPUbMztoX4HqcDx4w5cPM3khu6M8HeDLRyD949U8aL4UVMS1NaZmtj765YAJV2q",
  "key21": "5SggEU8dYCPyLVSH39rgouDxKHGmfujxbJUd3y6CjVkXRKmR4VjVWs7U1pnFY5hLcrWrvpdQtWJZZNe9fZrtsnHZ",
  "key22": "3ggfVQAH3ow7YeURJKFiP2wERungMA9f1Naq3BqAijnDxqs2v9JHpvWxrifi18NN5YXzvsUcdsmL6V1HTVFQ1kvk",
  "key23": "4fz4fw7Xfc6NrLvCu7vctM1aSpd8UskGt5Se7TNmFJ1xhKQtU85suedN4fXdyUEibd8AmdBVFNJiKZgG6hjzByto",
  "key24": "2AQ9f6zuyBEg84m6FfxHHZVWNQ4A6jZGvmFfhhRTbXZrtQLVKrQPnt6C4TR3qpyADZxXm9BZaGYnZXbzWCUfbstf",
  "key25": "2ap6ComPTs82F8k2eaYrbyStAch1KPBc7wwD5KMtzjouKW9jaBbPV58Dw1QwvxQGfPU3mGafgqAaaqfmq8vfQM3R",
  "key26": "62SkbzGK6Cazvc54E4Gu3DFoZmrCobPP6VgFqmoikTZyU72BdiLbjarJXBhjsotYn8cXEJnaEa9LpKiuRTyg7iqz",
  "key27": "3rwQ5PWa7rDUFGvno1nBuY6P9VHKbA1wvXeZR4cinsb56J1Hd8XBNAXKGcNUr7X8PKBvMnFkaN16BcETZKoEoBdf",
  "key28": "faoC2T3LEMnasHHk5QXNTXgp4yvu2G4ouLNHVbtqP3GVqeKdc29pQa7Bq7mckdoSGcxxUQecBYcJo5o2oLKaqs3",
  "key29": "4okgMbg5FtEZuDAVSrXg3q4Lqbe8pV8M4BENWdyktAVxjUzqbr6Z1GLi1JDb1vvddfXPLvqunEHgKu2N9kaUT49J",
  "key30": "FjQwdU2DvavUXQCExJJimEmEa5rP1JbvpjutncHfNzGXv9qqQzYqHJuervZ6qDVguUmaSNwonjYU4w5zsDdXCtz",
  "key31": "4Exf8Q9KHAU5WAk7bSJu4GQjQ7cjh1rJaaG74LfKtjHF2esNdDXya6EbqcEuH9ZDzQL3HvCvQqaJrWqrZ4AXm4Wu",
  "key32": "3JM6xHhBpAAvxGyvYeaYDWmjB7t8SKhkU4UycQhLRMVhQxMrqsfoS8xCSRG1ZWHHazg1VZj32UAx9MW35v2XKLHX",
  "key33": "2Zd3umCUio4y3Xo9jy6mybMz1ZfJe7LC5Gn5rSP5JGSekJMq4Pxeiy81gmNrzjwqMZMWFTknb8TjHCGg5Z9QvCx",
  "key34": "ow98e9BLH7Ac9SmJ3HAXrcoLc5opWLo6i8ws2jQYr5sbQm9Lp2sD5hfXRGGMSAjeFmxicVPFUDeMRpbHuf9bWm6",
  "key35": "5SAr13Q3jGGmThttFwwwnBHL2FNLEMTCyLSZ4EppezASHH4okU1bTMRzL4zBQU2nKp4YqkQD3z6sUbrMhc51AmSF",
  "key36": "38mE22zgrfbTSybehHSQueYgHSmFch651A59vtNwc2VKxtCyiSYJpVDdzbGhZs3RsgGAfiGhwu1Z84LyzwYvmzFS",
  "key37": "SThAUFvDYaMtCCYG9PqxbTvBqDawKhea8uzFhS1GUTMwDs4kz82VPnbMLQDA2sjq11EJnkDypc1NsdrN6piDsYF",
  "key38": "59Ca2ukkDYmn8WzegsW3DgRZbSRLnN5L2eywauSA9eag9EACxCx8xsoh79XKMHGBW8Bxmbt9KWMDuujbgWRMsVvQ",
  "key39": "4PiZYvbSe5nkVa7NSa3RP1YLm8vvfBAUiQTyTodRFwkkaPCaxxc72FNGFYGYRTsJmvDtyGJpWcRxKdH8m88AruwR",
  "key40": "2Z2pNXznUtAZJpXcPQyrc1uLfM4kt1SoHNYNhz4RUTSmWSwi8adY4sSMdzUrxxGsE6FnKvdnh3G9X3AbhcPEag13",
  "key41": "36FtMQNN1L71QCyxqmMxd9jtnyEpw4VhfEoFjaURPE7oLNgEBtioDF3HoFu9hg7iezSEFfh4goh9mpbXZEBYhPUx",
  "key42": "3yy7PzydctPQZLbNAo4rKbDEghYkRSDzvGGuZiooytS2Fh5j85b1Zx24MDtRQVuNgxH7s1qKxn7FmqUnJBxJ5oeo"
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
