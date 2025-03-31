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
    "4orS4RpmCj2FihEPNudPNQYzdFKFPUPc6wUuiRFwYFj8uj61PK9rg3KbazFZxiAdorwCmM1BJ4MKfFVC65Njfh32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BonnE1Sk9X6wJiAPCgqt2s33tkyXYRCHbCvHj3ubKiFVkhS3xnHYJYvJbUxHkFjYtbT2iHa9wg9LdGunWj3WfBv",
  "key1": "2GALcLmryEJB2REdRXLZihNVTowCdWpEX5vCnCR8tFvykeHbAKZjsKyx9B9aLUmPbR9K4Q7JodYxqtKd6KEy57FA",
  "key2": "4ivzEu7e5BiTGTrjD3JHjccLDsfci8TrgTtAccE5tybsZDiwvo1LU6Gokrc3a8fVxf7PSCZzmam6qyExn3jQNYuN",
  "key3": "HjzL7GXuv96PZxTxPuf97gLyCuzKVhvFUurfzARXoUW6ACyiUQSQiBXJz98SMvHNVFDjzJAaGzFM9WVt83UTVyd",
  "key4": "Er5cHAtS4it5vsTXwnUxFzy94A8SSWyUMWKMGV99754yFL4yiLjLWmTC9FghtY9sRvM9TqjQdVdhyt4w7TAgXqQ",
  "key5": "4DMTqYFMW4b1kJ3uYGLd2V2Eya5w6jg5ERGqZTF5VfoaMu3bsPdWu1sqUw7meFYjJeyBgCSbLx6JbVyDu17h8Ra5",
  "key6": "4QkGmL6oyKgNqF5UmjbGCkNejYd1DrTEjk5uULmvLuexPqum9vf5Suu8jb2Z5XfhH9x4RGz7uAhYvCeAhx1f1Ro7",
  "key7": "2ZuuzyiNkdCLUmtKdh7kvqgyNoQUSihkKV5DexLBDdgf8SLP4uftFbsRCHSJ6PULByyyH7RXL8WSKHut3aGdpHYi",
  "key8": "5b1yU8CRtFUJbjZSh8yeusbg8kmLk6ActL18GYaBPDJFh3KuK9jJraCdPBC1FKh2dFSkRpEs7whbtEskVhfTxcGH",
  "key9": "446ENzY5cF6zMsB79pJFZhsay2aYnmkQp1MUmV1gNhUp2WnbhAdrqL2CKq7FuwCU1tXVVsxhYQ7bsEHu1xYxXZS1",
  "key10": "3g34e1EDkQD2HBCShQBKam9DyPaRr1okGWihDvwHzEfbMN3Hq3bBQCan9AbmBgJRTRacTh83y9YqyiUDTuBy6asS",
  "key11": "5PJDKu65oFF4RmGfmiR9JA7kTLcWF7g4PZBunHuaH6Bm1rXKjYUiwGv9jpErHm9FeaB96AyHks3Wt72YCTUsJE4r",
  "key12": "31xeJwc6c8ip25hRTidBa8Y59nwYg6rSexVhtLPNcnbdLkQh7dzPeyhsW1jstwu5V9vxv5dxDUToPmtDCGcWyuci",
  "key13": "3ZwXQMnU58TzP2qfDQxoUagmxzPT7Mz9MwdduXD2WWuYYHaeB28mgjWFr65mcQHstz38XiKvDmiXCPFHhenGENP9",
  "key14": "3CWcamYu67haFbdEhxp4TFYgvirGfJ9fw3mnDihHp6quxEJJniFpRNa7yzUaxowf6xeEy9e61n85XgF9M8eJ3p3m",
  "key15": "5fSCsdoU23bS2egyTwjAR7SrZTNP3pt2NLCE29f1HrSSgWTvuvp2znXNU5MJaMDfvxGiakHTWB6gFrHZVnUcbheW",
  "key16": "5nwKYddk6KEDYqKZSU6PaCac5PwXVEcGp5VEyxPLPMLg52kiGdtm5YgFqXFu5a8tiLcSjrzoakQfLFKZLvJk1sKx",
  "key17": "yyTRcTiJmsMuPDtT7rVyXJVgibLbFCQPtM38xMpf9RWj3VpfqVd5mtvHBpBAqdBcfRghjeErJQ1GF4MLT5PjM2q",
  "key18": "2cqUKerWs7TYkv2c1MPurAhhb8Aa1bjeT6nsBE8si9nsrWXmb4Vm8tSy5YmcGLNJXJi7QL5iofUNRRNRZrBWykEU",
  "key19": "5LTmS1fTUvsnXPyvm54xHjvMFgbpJv4FqjNuaYBbbG63ZSUesszEwmUEk47WtzFXZZmvfwTF8mozCeTxBccCLYzc",
  "key20": "YveQPkH5AvFDHm4bdvxvUucUxTxqSCYzoVsXNHc4PJW6LrSwB8wHZNDGMiAEHpY5W2Va9ALndAQtHehdLFeYQHo",
  "key21": "2EPSSgUF7LV4YgKPQfLvhRHvmBP8NgKj7my4gKcJAd8ZAtPL4WqyJm15G4gipYbm7QDGx29cpemWJ1kzedpjGNu2",
  "key22": "59EHpF1zR6XVty3uHUF6XeRiGTMqfFKYXPXDFzWDmXX5xv4QD655JJNGGavn6CggjxNwiCscdQJvCd1FVzf6ZqED",
  "key23": "3NYzdxua68WGoek7ZndqsSFhgT2jtbXmh8AzDjbPWUWgzhtgDDUTen3tmxLawQn6uvRXp2pukf35T38ri6uAsrAc",
  "key24": "2gakyLAprBusVu3EjWtfLcN6FYpjQvZ1xYVJH8UML42zsTZsBhUkJmRXhEdWDbdjZgSqfRS7ZHjDZLojp62Ux5rj",
  "key25": "2Mi7tizZ81CXX6DYrtXuV5Ku339g89DpcysopQW8ycxUE3M19ZFZHkbhJc3h4heYRreTMBH7XzPqAxivoKG4uMGm",
  "key26": "2dNTVk5N9Rd7n4E1Eck55Tk2TEAaNF3x8dMVjfSTkMsbu5dKDDJvpYmwLDXVXwUV4hAiU1sNKjNHF284wj4tHMct",
  "key27": "3k5gNopqowjaW2zwBNJkeLWiL39oCjEMC7tvyfhzJ1S2ZgqmtQ7tspJkE9u9jAvrJwSJ8ppwCVfYtQWtFQzYRgh4",
  "key28": "2LjQ6Nfpv5EDvw92L3MKu5pT8Hd5wf731S2eE71kugXdXB2M2hZwtb2svZSYucNnBXU1mBXciCjrZSxwHLJV5fz6",
  "key29": "2T3cbyYUrg44tazp84hYQpm52H6N3upNTfPxbBBs1kTwyBNhmG6EhR5ssBGdJCrk1DrBJkHqXBTwPHtKrJB1UF6K",
  "key30": "41sEZFP2SMaouMQ7YXkjrRxa62rEoK9fUX95zfQiFjG9XJDdweV3KLTuLK17ssh3tfHqcAwnYm98rJL1r28raxLq",
  "key31": "3m1p81dc5fve8paJgQXqpcbyy7ZwmsRnJtnEJbNjnwuytbh6x3VAVb7Ykjwhg4zFD6196NKLQmHHnEgMfng9D12X",
  "key32": "4jRRiVfd5ck1JtcRc1P2aHU8R1vnK6ET6eBy4rBeyxF9abzRxc4H3vV2WfaCUzjMbj26SFb4szjJhiLNVxph4UN6",
  "key33": "4Tw8VXC8t9chcUkSrXjWroRKy7ywmhAHcqtRVY2sNGy7ZfuUh3Mcad9GEN9LDFoHp5or1RMuZforNu5EjVj3eywN",
  "key34": "4C5SBeAZXnDNNfAVUNKJ4RH4yH5eER2JHDMbsoVjLvmNnGG8riyVbtYTGzydQf2BtcNKNzv8UpL39Pm5v7XcxeTq",
  "key35": "2aRaYj8XRfN75hV96AgPqBiynKQTEK7CkamCSEdkb9gnr9jmGvYVCg3dWDix9r2VqzjnLZ8gkqnaC1k3HxPeWm6F",
  "key36": "2KHf5127ejkMtYC22cNyUSNSvekb9vh1B1dUrgjarCNJQAyyx53XTaVSDPBnnq7KXN6C6Sqmg9fRsFgM7rN2XZMv",
  "key37": "Ec7uufA5ZcdwHbfpnB36FYCBsFzTNqasd16R2M9g96BWXKriayjsQgLGCMZYLCHdjNL2n6i5BZZSFQNc2EJCeTG",
  "key38": "2XGhX3tvUU1oGnCiUVD6VozGDJTRQzim9oLEPKYgbbUot9dJW4vfVgJR4RQnAAWn5njcm7V46fQXP7UGyrdeTggf",
  "key39": "31wnZAfwrpthdxb27zJD3EXEhvDSrCmc5FxEpsDvejmEk6krxVhWVR7RpizfQnZe4Sq3WbA9cjAXH8A5pSJtTzPE",
  "key40": "5hciNAaYfVP2QPsErHAiUf73PDaKuqfYsADbriYoQSusqx5C7ahSuAAHJCcbY8yYTCCa8PicH9kJ3X2SPir6HBch",
  "key41": "2vdimtz2DJd6Y9RmXPBfNCowkg2rKH7WnNnHRmMZK63DNa1XutuWHNXodDAKU2PgDsesnM84vvSPXW97A7E4pBLv",
  "key42": "LDza6CXSFiaiS5FuUfKi1JjbhVGv77scZXzy12DyWSfdSaB7QMMxivRA9gxrLxTZwRL8MYPDZQSH2Hc9eRVgpjR"
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
