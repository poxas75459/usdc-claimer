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
    "eLT3aNmHinXcTeVzYC4KQGh5dMfZeYgUP3e4Wfkp5eAoDW6reqfuJ1ZbVaXrHMR2s7FdQkwfns6WcCSjhSkgyad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAtFSqHLuE1NCauooUDYh3kegLzNFbG79u2Ak73w94iwK66qqzorTwxnPsXJRk7V5dtX3qtfcTZKpBYaQpThvR6",
  "key1": "47ks3y8XCbvWAsioivDbikU2Ek4gsugCHmTJAsMRiX3hFHcLu29xVBejeDzoovyqhbPBeJzhkbUqVMVYvQ6NyAWG",
  "key2": "4rEsHHTyCh7gTiMsEA1uuYYaJ9Ay3zxwnn7kzmqTreaBTCjMKmE9EYsuStYFYuYUUAw6dXbV28gdhPWvESzMMqg2",
  "key3": "M9uxaqwKEiBYnztZEqC5sy9zrrcigzz5gEyv8vnsxYK4bwRCAeHXbkTbyqpBgzrPrQjoPj92DfagEpWoBwvUVAN",
  "key4": "4Kv9AkLzJVvsCyDXtpYc6YzqkBhgauj7eQYe5K3dYLtW7obgFGg83Bn5zfbuV6GkBkK6w29xXVugvqAcqwYiYWac",
  "key5": "7JWR5tvkv5xNbBygHMCrKdnAGEHfhg2rjx5U37TuHriZPdg4d9jWVeEhg1ysXyPf6rrdbyA8e25Kxpw34GougLL",
  "key6": "61tepbkwqMAo119aaCNgNuUBUCDqjAyhthauEgntB6cBLBrbttJND4YPqT2r9knSe7da6ix7EASkxEkHh2fiKMCf",
  "key7": "aKduDNb2N2WadaBcVwCCQ74AepqGSCpx5TR9ioYqHcSMAixNRyE5Wn9Ubfcne77mjazhGnZwWU7pk4DDj1cpxNE",
  "key8": "4dV74cPjQWEMEMxsS86uZi9axNTz2ZqrkZYwS853bpQ2GWntXD8yNVok5tf1UPDZsctVu9HXXXPxu2orAgtD8zUr",
  "key9": "4ggyQyE8QxHc4ujpyPznqCCo8h5P4wmywyMFKRmSygC996BMJ7KeHhNinC8AhatEQ2m2iU3JXN3nZ6816vdx5eHv",
  "key10": "5NYVGxmTjCkHhnwQ1PqnkH9Rt5aU1ksxdTMpBxEv4cTprHwaHwCcRa5oR8Eu1RjDKyhqfjq8vigxtPNvnMvXVPmy",
  "key11": "329Tm2nrs3pF195a3huhfHM8Kq4sTdT25D858TiMhWmTEZ7SfAd4QhzVXSUcq3Gg9Zs2TtTUwtJf5jckBbm2TU4q",
  "key12": "4o3FW4EZV3bG3ZDiUtjZCMPw2sSkmxj141BL3xCpRdw2zhydWfjfub5ZPgi3L1hj5gbz5eibippZSg7xgaWhPZzu",
  "key13": "2jjuGemyDZy4VBr1Dg7LfsHTNxCyuyXh31C9tJzxc4rEwMwXwRqh7FK8J178pBDeW3oABfrjqNKHhHCqyJsQFAyp",
  "key14": "4Ft3nRwWhq4rSWMy3xJ6bnRXG7pKT5M9zcjDEFyMj5WFoKccndLwP18V54XigQvmKYNCkovTSRf5ELaiePcgwHky",
  "key15": "3JUES1JkS5VZhdseo8jDKtGt3wbsCtezaGwYrf46ouetVpB8ULgG3udDzXth8UY878N2tMktEhPq2AWv34w7EHza",
  "key16": "5zWvGZ5kkkd5qVZPBGPzPoZ9bEcWFes2PyojfaoKorbjnQDj3CT2q2taSDv844hudHo53qanDy7dh9RcHi7qhDYe",
  "key17": "3eGu6Bi5J75NwYtrBSdKkFSEQevr3cKLGB3k9oeABQohuiKJ15g6YszqbLUySD9c7Q15YtFkrqcWDk2meEXyVbV1",
  "key18": "2bTbBimeZSq6voyGncRNy1uYpqNMNjrngDYqfHraVHSDxxKTSCfXBonx5Mi5LEAedWUZBncXeNJYY2aF3KkfzBDi",
  "key19": "29F1Kk78o4L8ZHikL6phpDUtZQ3mixBbpQWBLR174jGWhToLtKhXsDHzLaGkPYX4V54LTebxuaLX3dAMrKL2czk3",
  "key20": "63kHqrbHyM6iLBJUB1cAZEJMZoBGRF6DX75K7KZbyUUn9ioJ3GM29YFvRLKkMxRj2cK52rJWd7ZjVjvQERBW3KQW",
  "key21": "5qGGMmMCDxtFbHTNz4a9t7XVKFnPTWQJKEunTFuMRYw4NpiTPj9uSRrEohhdLEpF8rEk1QhkRj78j1PXhU1AtDeV",
  "key22": "3ohS3VqiiXUBtXuEn3abxZKfwWfSgvJk2g6GHrh61UPWPaRRHoLx4BNcRRnjVLd72Q29fTy3Z3M8ZJgepZAKbMb1",
  "key23": "5cFLgh71vjxutzrxmTvZTXjvVoszhxwsjQ1CHzYNNPG9ZDMTLK9aV5hRPP38WzpUq2Fz2BJ5cePf2SUSKbKWLXXc",
  "key24": "dB16PEF2xxcW2QBmMJcYM2r4Uu7sanzV1Lor4EEgSj12oZW9HgpoCA1FKHVQMDMi28m42wBaiacdj4iWQJSauWq",
  "key25": "2FsShstYokx1jDxqxGvNuVXrabBCGsqW9FkiyeQcvYv6Qrdmy7auA27sqbQxY1439xuyZMGvAAByZbVXgPA1sSvr",
  "key26": "3wtppeFJUQ1g83doqDoj1Nun1jiqKR9ARjGYbukm2gjgJw8xAeLeTFjBuDZZGCdc2T1hXZSE3DvhMcr33trmRivs",
  "key27": "5cMSX4XuLSiUu9oEjRmooAmKeWitNnN5bRcTCG7ok93VGTM8ZXbRDZBhwk6j6fJctiSJPWtQ6jnmzQZJTUQrUivm",
  "key28": "4S72NpnabxmCbCzFo6NvShf8xmN8Yqvy1VsZ8Pn1p2uB7zGa9jFjQidLpcLdzZXmg891nTXWcfbbJC8SchBmjint",
  "key29": "2HZZfjzbUvat9sLUqY73nAeqLjNzVi8iRDK7vqMHm1fUcKeALcxtZwAcXT3MiWqeiVbTTvyW9vJfbVVqm8s6fvCo",
  "key30": "3LfDYPxYobBTMnmW6FoHnbAesK9cPYaAr5FMDP1C4n2KZx71FFwKozeboTnS8N2kQyGYL17tWyJGKpvYDYnXUAeF",
  "key31": "5mbbAWpijT5W4a46jDwt4Ah2iS3oMyC9vWu2K2uE38Be2zx6oknkh53MFfmDi8rwmutLVerwrWq8x3U9MAGB4eb8",
  "key32": "TTeYZAYVinqZpxDxxVqtGv4q5i1yw4wT6D7hVc7Jq8baeCfqfnqeRbJPbeM86RVVc8iRjxAS91RPRgV2wtTUsXU",
  "key33": "3FtdZMbYQnvHHfVfgCqQmwSwt9RJEzo3gYiqgGiLrvNAUYAWeczjLSoKuDKMgYF6dU2qxb9Ho88CT5DMrUrbxwNk",
  "key34": "3bE3x5LBWLxiXmKiDeHy3uHUUkCq3iQwi5mH6KrR8UKXxwFQSUFWUkH2Zw8wKL4bF1tyQ7eVVTvn7q9nRcYoDmyN",
  "key35": "7RG326Xyysu6x3GvHwErGtirDqkHmaQgZz8yC4sXDr6ivmxkVLAneiDe6rtbpqrRNRnZ56iaS9KeZa4keUegypM",
  "key36": "42NGjcEKoRPZ8MEfzbPuxftpXtgsNN7vNa83LX7UHHSgmCe9VBWDeNPDN387S4aqGDRf8AUjS5bkECL39kDsisDg",
  "key37": "pJRytxoqGzFHEqguWABNCUuhbKp74Jop6KHtmxMECgt1GDJdUvbKXLWpYJkY1WsT8hzWhKgn7XcuzwnNkRXUyZB"
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
