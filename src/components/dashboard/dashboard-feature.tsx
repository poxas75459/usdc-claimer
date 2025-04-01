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
    "4qQNr1ZUFxyARgGwLeTN2eEij8dhCJuy5qzq12QgAanbzF9SWgYeDpH6wzHWL7kYbvm8k81Xio7ApnZf2K5AbSRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPYSLVEYUxJyYzCFDKZK6QMr2y2Z1AtQi43pcf5zjTh791CGFjW32EzxJgrJDFxyhTp6wyJ2w4mNgufUG3B49g",
  "key1": "3HaepTKRMtznx1rJaDaFgYZGWQMdeuLgRWB1LnBTCdTjxZQY5FwkduAycr6oW43KqgHTaJst8TL1nkMMBLkRuvxN",
  "key2": "46GtPuPHRbzvdKWqnEcuPegf9ZP13Rv9UUfYhXvyAisjZ9EiuD9YjwGZjxe5NiEXc9fRTsB7yDBhNL2zEA9fYfpJ",
  "key3": "3W98PxKERo9cNgdJf7rGmcuheky9VHxsKVQEXLDVuPM2AgBbiFgFA2fxZAxBiqa6MFAKDwNffyWSEjmyjHiGmKWP",
  "key4": "4VfdxGaGxq1hYyiQHVqU2wkpjVA7iH8UvFKXGMEP3guZZeMNrM5c9gVvViQZ1G9nbk3qcLHpWrYrPGG42oq1UoQz",
  "key5": "3StpdW16MioN5hpZmEeLWywAhp9LhXx2WAQ8iG2gAFWXofZ8nNAfNGNYu7SmxAqDh9K2RFiXtBfNAcguwQn4N3kA",
  "key6": "cP9mt92wQ7gYj7YfhDS6xKJX2T8XvpvQQF4cPb7Yzc8AfeGB4fYy9f6ZpuotYkQA5CTQ7Z6g9kuqG5DaCF9wo9R",
  "key7": "5NJb4mvYPBYT3pKsPRb6K9ntNay3ynYuUXpUqy1K5SSUs6ao8vx8dJ3NMWGZz4RqpsweM91jYYBc3PgPvG7yg2Zy",
  "key8": "4PkzeXmojJtERed8gu5B2vizfuTseaWJsR8TavVE9hyUkAMx4UKhW7jVP3NANybZtZW9kiuNPr9FbYCUcjikVQS6",
  "key9": "TQ5aV8Q4UVzJAbXZ6VGAUj7r57Tc7ncrcLJZKjE6Tva2yBFgi41w3CmRqR4GbcSuSCE9KyrQiyarK5upG2PjjhY",
  "key10": "4odVpeF1SmwzNngXiSn1S39ZsVrFCVxbjiiqgA2bKD8QeZ37r6PJSAZowE6JrV7TbHN9Tu9mVGe2tihYemCFpvdv",
  "key11": "3L5g2UN5dL17wfBCLgSHJmeCjq3MdxRZNMRu1jBR5kdzBRmL6kFoSqbrBAcZcnLp6uVcjhkkx45FjbQwGS14BPvV",
  "key12": "B3GxzTxDaFEjq1FZMYJ6bHJuMVskbBEuy9LxNkqCeu5FHoLAeBMN3MCB9SjAWjk6QyFpeUu2nnEYZbTmdD869EK",
  "key13": "4jMx4euE1AtQMi5pMJTcStruVHVw9ZTtm6RVvQPfNkdjuXjC9amNAAFyuQApkHuLLaMDVTh4NADwdp9XzuQ2FJHB",
  "key14": "XDJoXRM3tmyKZq1iD1fzGcjWETvfUNGvjrW5ZLZ9dqs9ziSBnaPSsKxR2cNEzDL6PBEkn6n4JsCGDbRnieM6hHs",
  "key15": "67VELJ3hvwXobhHD8g1N6xfhNuxj5XBXo6FF8qBUdsoo7BBJTa4MF9YBn9wd9QSxf54UChQzWYzaqiJJsp3ud9c",
  "key16": "4mMp7qaYwuu46PKrxYxrMAGWwjjLTBgFh5p6pMd3vQAGCtTQ1etBKu4URpVerWCxcbjxWP2DbN6HeVmNXkLpzhph",
  "key17": "5bBPJE3CmcoqnqcPY2t6DN5nMURNx8qx2UsgZYmVuj69it9F6GKDfd71UYZRq5pbL7sMaaUSkD8cgQED7UotK3tT",
  "key18": "65Yf3ZVkFDtSxBdiPktumuJeEXZJcBwA3TWCzGT37vkrcrW3CTHrupa5nSEpCjth58sDdEGEqbdU96nx1ZJTc9z1",
  "key19": "Di7hRQaqYXgJTKvTCgLNt1p9LaWAYxk3rfYo8XRJjb5XV5GJS8nqjWcvz9JtX3xpepVUH5QUbLKjFZje5iBGdzq",
  "key20": "2Y8bQ9V37LJWrKcYqVEFipqk4f26eu3ZNTc2Zh5EeRX6q7rvnxZigPjfw5nHjEvpavR1ydGNMKhbEwCosw6vkfSe",
  "key21": "5dhHnAHZ57CoF51z3rj8vxK94WCpDrvftQ9yxGmaMtzW1Jki2zSL35sxSURNkZGccxe9uo68G567GeBHEkovCNyg",
  "key22": "2r6MaQQgSToy8JBTNEAQ1vfPX5FNEgkxFddCXR4fsKSFmmKZxmg88UxKrsU8mTpW7RxdRnCofM6UBCeySMgoMLqh",
  "key23": "4kRWTZ28g4vnCiKYoUBRsS9hnKU6ADtaxdSMVSwMn35keussMHQzo6KbCJD59W2DQtCA9N2s7h5qJycjLohenT63",
  "key24": "56gZ4vFz263sQ57RwvcxP749tkwmrH5RQXtCop2ajJq59KFPyzgaTqBTsukT4X9MMbJhnB7N6Y2WVts6of4MiKHo",
  "key25": "5ayARZRiNPqnksJx1fdjvwnotKx3ycpsE8CPPLkza2qkZ6gF8qR7i4eJL5R53NEKi5esa6xqtbhc7Uz9UvaesGWU",
  "key26": "2DPv8NuLMKX7Tm13jMQV8cwcRpofePcjP8sThS7zBA9jT4FrXqtFZGWSd2teKu6ytiNpTcVjzXkcsEh5hzkVLku8",
  "key27": "t5FxkViFwVSRmAy5G4TJrbEN7wowS9GWbgAP1zGDfhdHDgtCVrj1nuoZ1DmtEWdeAqJ3sYY2S339vszsXn2HnCh",
  "key28": "2SMuci2yVidk3kyDfwPD19duGxyiTckyLXTXfrKVwrdTHFsKuzxYxeLJneY7x3vMaiabhxVb7ruFYyV7KkzJ9uSy",
  "key29": "5vKiKt1ZQnCTDFvBJt5PWN6vfDJqSpMF6Anm1w72zkcP6N2MciRu2H2VFR67HR7QG6cTumq5agJWuzVGvVnkLqd",
  "key30": "4Npr2kosKJ1kqe4y8xPMztcFiV4Htbyy9FxsM2Cd75aZSiGbTo4ENjhWagwiao1vXP8Va8FYmpBCwtPgvzgUyF5K",
  "key31": "5PxoocBkS24e1LTQjf3kiVyWSkR9z4MrEhaT6UmbNFG6CFNw7JgsU9A7a6Zrf13QTdersHvStaq3QgKZXjMFnSyJ",
  "key32": "2ewaj8yBQ7yKz56UeKEB8MtoPt4oKSejbzCfNNoEiPpE8rVPeAJgRau7VH2BVpJoRYBjvXasG3gaARBfnokB3oyL",
  "key33": "374nEC3HDbYfsnwxSKGkT9WVxpHME4xkuapdwCwCbzM7BX1tQXjAZyPFq7hVqEKttBvsTHGnkBfKX8wbQMYLSosw",
  "key34": "3U7jwcrQVVPeYKLL2nDY2mxYCtwvSNqeLo6C7pAwp73v5E2cPoVgf5KqG6w3UdRZPfZ8KPz2QnismfPVffRWro4J",
  "key35": "4Facto1henrBr6rwL3W5bRp5yYSuMuE8miJP2vXk9ZrSB1o2e9WW1H9ZRL4shR4oBUyyFuzQYia3wTBCkhthRxpR"
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
