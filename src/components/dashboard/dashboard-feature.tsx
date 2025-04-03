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
    "5Kh71TewrNFvMJJMV88msy1uiiZvCnXFMkn156HFPqDisbURagk7kZKGaBqCVDt23cVmMigeRxTiXCZ6gjxdcGCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhYGePUrAbMSyaaryWxj5eGmoXB85jJmGA72hVpWDnR8Mzpr2BJoVc1MtGWHTnu8bJtdmc4BvGtNJyP1sjzshUu",
  "key1": "5Jww5xUWaZfAG8MuJDBXwh5QjkmR4UXPMbLihbbC2rL3BBy656fNLuTSAdHgHWAWLJ6j6GE9vPUNwDYT11M7eyjx",
  "key2": "3t2YZwwmtMsqaPvj5TcTs37ksiacKouK7DXHmrtpy9vpgBGLdCGwP8tTcUMnZZt5rP6QF8zPxVM5dvnKyf4HzEjm",
  "key3": "5PTi9KsVSYSgacJycpHQMa5w83XRStXwdxcYdMrV7shaPJSdjt9WdrtyoShtLi1TqBjBFViJZTHweLyMytfcdkyE",
  "key4": "3rmLZ8aHNRKNdXqh2QW3QaS8bcGqbgG35Z3zf9yPWWVRVxtkYA6XN7me7ByucSbc22KpWvdyBL7eShStZYZ4DrSu",
  "key5": "4Pm9vVeUDCVBHGq2f3UXzAgu4dP2G23tWoBmdf47w8yDSjjdVB54H4dZCXoAtgEHjc4SyCsBm5dAkLiNQtNJ3wvv",
  "key6": "4xLhZafMMaa8fKzEnVqCqWA4TuWTW1jEQqsM3cNbEb6MC2HeUJPGgXq883k85yrEvTzDesKFbQvgd6ZV6jFc8wSE",
  "key7": "1WdaLxEMTnB5PDY8Kq7HF5LcLdfaDbnENgttY32PmY2cjZTgBHyKb81fUXssX7g332Dnf5hDdKSMmSgko6QmFGz",
  "key8": "4xYCH3oX1bejtqwHFZjhTabUuZHH2487HPtYbut7mVnejKvB2FgzU1dsszLG1FpA9PzkW165GF2A5NrGbf4Amh5N",
  "key9": "2D3eGsad5Rqh17RkcDofGuDLFTq3zvfagbS8MGzXkT1vxbBKYT5i4K6eraweBf1FXre4VJqs8mhVxNp7jnMJDkFo",
  "key10": "2nKiYD6Qjzi7D7UhutTpWctjBAwsTEjDa2XF454xTj2W7CFy57MtRg5eAkMTwedS4q3Muh9rkjoRnTY14mpKqChp",
  "key11": "2cNdLrtmoKpRjTyHMS6YM99AuCiMvAJRGDnA1CV8cHVw5P9yd4BUKPMewhEdPcfqJU1WoJAYrVqzYhd8pceAoRFF",
  "key12": "r7fKgykruX3Rspof4D6hjMW4rQQ3GJY9aYBH3iffLXiGZnQgtShM8nohusd7Ub55uXHXv232im5DuJNtwQCPc7A",
  "key13": "5GYaviDg6LYZk9ZyVWmXRwq6p36NpsS2bZLX78nsmYPWEYk3ihtR9Ko7eGwxyH3aSPnLJR4ZqcbkrQKpoS7zHxyK",
  "key14": "2qrc6pye8mDhpokfpUAbxadGEis63KbbJqr6dMMmbd4J2sxx4p2Pf2qypyB2ViN6S4eAyaW8oXtWqFQURtAReWnp",
  "key15": "4kRFNkCVSsZQu4rZeHV2Mumd2bCqQF1oYviDMucoZVURzLpXZR9fxzT22yq34uobTb3ymcwbroBM7GoMZyA5CCBi",
  "key16": "4fBDhyN4e1KtCYZa9eKznV3fuSGkWVAWaPcKCy2dx4njZrNVHRDoriQVyWEQYABfVLA7SydnrsGhrUVWxyaZe7jo",
  "key17": "61hEjZpb2cwkqzQbNz29oqXr67kbbYwTVNg5fpTiBHKYueCuukC1RbEmaHXsUgjKhxrxKvuSxK7dEgjVkpkjpbYY",
  "key18": "399PBxHu4x8eKXNgQ68HRbzKtymRFKJHRaBEZ2sQZNeiuzM81z3EuvrLfYw1ox7ePAvxaNnh7bAwa8sjr7hgBiZv",
  "key19": "4VhsY4rYto5ctv6z7LWMSn2MZS4vN2BGHqZG5Rp8gqP5iiNNYK1gGdvwW4yLSEdWEM6tBmACY9SWADQURteozQoZ",
  "key20": "4nUGta4aZE3j3Xn9CPpz2KfnCccahL7hN7Di9h4pmy1R7Roxd86nBawnZFGD3xxoKqjhQrtR8gTdpnQSzNnapoMB",
  "key21": "2u93RaEgMA88LYs8aapKSWLqQtD85pyKWvmMagJDtrNmZ6cLqyJ77s7x6wQWLdDGU8DKW8NL75Phs7rhPTh8Qd5c",
  "key22": "hXDMC67oGmA6Gjw866DbptEUmKyHqM8dEh937jV97ejQgWveaGaXRJzjNobfTbDTpyzqpcJmQ1AeFo9xqM9SvvG",
  "key23": "3tDr6GnPLEdAbXuUn29nqphEAeFb3xpW88Q8VSxXLrovZpVuKGKdhoxL3ZVx1o6kLsriEGXXzYBGkT1vZJrGemgj",
  "key24": "MGJagj2hirabxQ7pHJCXjqNZXxGWHBRrvZRnwDojzZXipUKRez16YhKKv3fYdiAbpyUixYUm3un9A84Wr1RMFK8",
  "key25": "byG4sd4zHFaShzEzgpDruRzWaUJfLJZ3ES3ghimoAByDLh5HHFKt1mprsWi1qJJqbZVPuYvTywvBTCAu3ZkdLZB",
  "key26": "3hJYjmWcs3MGU2uQLScSeBuxtpvSDBgDnmixt3Gs1ZcQaH7fD4WCWm39T3sD14dWA1Dv1bTXaGxSJTRNTi5TUFhh",
  "key27": "4uBjMJXSfC4H5b7uNQddJDhiZGQhdCN65oG4yUX1BKqgtgsnsX7HxHEprUiVArdexnPZS2g87ybyraMQm4Eczg76",
  "key28": "3dNQR6JBkCGJqUak67Qyf1XiEd9zuybGp1x9vY5XmrF6sSuqJTbRYcYgNviSgXSiDEA1FdEAtVpLvK9kqkCFxdWz",
  "key29": "4FPQd8PJuRSyoE1uxLQgUMRCxHW9BymL3aQvEWgD9cyLHysYSov1EBdNGC2Hg6xQdDRXexfM9Zo2RiyBZd2sinVW",
  "key30": "3nYFqH7QDVba2oWj9USp5tJXa7hQaCoUYYrhGTR88H5fVCUetAA1UgygRNbHWeqth3hnfgUCcW6R7EsN9QmXJck8",
  "key31": "4yeCrAmB3wGbh16QwURFuXC5GTYe4VnVTQ1DgBPubcyeytUniPZEcgENrE7g211MLNqcf4ez6EZNyaiAPab6JTnq",
  "key32": "3dNU58Qwwv4qLjfDapPvf6Uh126wUYxQ6GSDCX4cXXxc1oitFtDUaCUQUeUoBwjfo3YW7myrSh9DFipsCHt1TXKs",
  "key33": "36TasdLwCLqwScbQvKrXn8xowZPagRATxwYduSwYT1ubSsJUExP5AtrS31dMTc2eCU5zFgU6onX8QKzAyJ3qtHfP",
  "key34": "32F7vafBpDGExLHBUV6rDLGswS8t9ugbgPQWBHpkhsynh3EjkbRsqHyB8Q8gXTs9xXSsdP1aZ5nFJ8C6JnpzB2DL"
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
