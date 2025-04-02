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
    "4LfqUv51Gkj5FQCA71nJZFiZxy55Kt31FJ2wWkfEvuoGrdY5f3J8LhDu94g1ZsXvE1sSBrHGf7AUUSZKNXa29qHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFFyG47rAkoJ1qGfbwVQNoCmFZYGmk1U5CvFu1hY6CwUfFGm9L6GQhqdn91BEdNvPwtaR2Nh9kdQDUUVPkXPRdk",
  "key1": "2ymstsyHRj5mmpkSerE15kCbUgKHaQY9oteri6Kb1WYwCWCnzdmRmEbhHY9cHCZFtY9ewsHpR3C32vAC5uYvT975",
  "key2": "4uNYxtsiLv6RHS11pzjk1PCkjncHdGeN7d1fyJqyufNx46JdN1B1YJcEmCT4TmUB5rifFtMzqJYrM4PiqWzctBWf",
  "key3": "4wdjdQD9vcbYLbE4SWSa57p2cGNeRPH7GS3wUrs5kKr5U52y3q11AzbuY56jDtKXkt7c5B7JCwpPWw9wQLJ4nuPm",
  "key4": "2aX79CXw9h2BGvBXvZ2tB5AKPKomhX61fTyCY1bRDw82xqQ1HfDmcdteX74f81scuGVVXzmre57F82FzCjWxLuqA",
  "key5": "3wae22LNY8Yu3snbjnDkkxzjoVUxsgcpxXA6PebnkE5Lbous5aFHsneLV6CXsQt41yNsk31FyvPBr29QLS6D2ZcC",
  "key6": "3jCQacSM5bxuAngecRPFmtwbqw2pspD6Lh7dbofY68bXbLKiUy39NF833N6p2sHJsQtBKzmNgRpkxwA3Sm8k1uJg",
  "key7": "5GSnogg9VMabmjbiApmQeD8vDkRkutERUvvyoGoNYZDAznMFThQfXMUmfsd6CGMDbAzxzTat1x4n2915TSm3pmdn",
  "key8": "aXuzKpw8EeAy8nW2RVp7PhYsTeNsd8S3mKgo8x6YYCq8VZVu7y2YUGcx5BLFRDntWmDjFe83M7AUbhqaw1rSLRN",
  "key9": "4PQSZzEqmAMY6s8CuPYwzUdDJ7eisZLuEYtaiJH5CKouoF8DxwAyb1PVXNiG1naCQL5JhFMaUtizLZzU7rTzPFwY",
  "key10": "3AsfRBP9ZC3E3iCEkWqXdKsJn9S74WrHrvqjckwUgpXKckM6zhMvSsYBusXpyy2jQsFubVi5kvUBnNNN4c6me54",
  "key11": "7BnYAiQgf9cb2HXhCuweUjbDCKs5vjh15LRS6Xjca8Yjjxn27GZaTzLjmpXncHRNHFqPjGSmG7Xq7yjDcpB8cnp",
  "key12": "3TN3f7FnWZLe3SqYQyUA9jgATYoV5wad9DX356VJuedXuTGDUyjpTCkzuZcdeX75W1czyqjqHMnaqKAc1M1fS6fQ",
  "key13": "KXPTj3EUSMBgCcgivpV4KwtuK9k9H5PDwGyaKSg7HJYGjcRpxCfWzFmbZs7F44qb74E9PkYqVL44rDrdFTsSug7",
  "key14": "3PjZGU8ZNLdXL5yXzMWPxwCCFjgFtmay7to2udn2ZabfkxhdtDuGmAyLkDoHamvakK9RWNZrcDza7YPmUBoQ7fq6",
  "key15": "5xyNGsW2YUmAQUwDXNhUNbPhasLe6DNK8hhomArDH77Q47PBqT4TdPckVynk6nxbstmK2eQ6xiHNwasRWegUBckL",
  "key16": "4mgEuh58DskeHAjYQP1mMFshvKn27TJP95yo2y5QcDVK3hVcM1mbW7vEiA1qLE1vB3u1QTFhMZqdK43nCbPrb5rS",
  "key17": "3MVHcks5DpMv43da5xpRSx2td35DomYxBzny1NbzRTiP7c5h1uXrQrjzspFSFhnP3aBD6a5JxoQWmAwHtw2QEL7o",
  "key18": "sPWP6xxgFyHJGjeZNkvnhgUmXZcDwL4wMjoCd8SYnZ4qrsoSinUayyV7QgyYw7NQ6wvSwvrfy8iKbjM9Dhma5on",
  "key19": "3zJRfzdUWaRZ3gKZnGDpSsYvb28tGQrhzJ5dPWiNbLzoByKKhVho9h1Qw1yogoRJUG6pLKYoynmjxeWHGo21HtbC",
  "key20": "4QzVw9XBiuEHLZTvAXUcQuQxECP87Uv2kZQDKQFzuFuw8QJnhJHKJfRkYam9pvEbhymLDF25ADcXcm1fcWWDsaLi",
  "key21": "4EAHmYvboARBe9CXNrmZdEpUmGEJg2G4Ng8k11JEVZjc9g2pTqXgHsW6tjmqpoXZwVyVp2Qz1ouLvtFN5tx1AZzG",
  "key22": "57bUHqgH8sAYf7TgJ5KdiEk55CUxr2KJxpzMTA9otFgN4mwxywYA2BCaNzBMjChXiNSx41ZuyPvWbfUeK43L1nYK",
  "key23": "2Eh8tRQS21c4y2bhTNmKWkBmFSbkScyEw5TwRjqDt3KxtMf6Rfe1U86mdGBoCSq5gq1zgbunjmREFVMNRsrGWhQG",
  "key24": "3dUP4kn7CsQtnhuidqS6RVUw8H3pMyMmWyKriY3dcAeY1s6JZZUCGu2UAGZs5VVv4gTgR87FeBLx5gePdCJsAaNv",
  "key25": "4UE7DRadHpQ1NVpHJgMAjsmSKrm614gY759xtNTUmNPhbFGWRKSezesjAdRK8zRcEWXMgZqDkEF6LMuacJAgm2eH",
  "key26": "xiAH42Gp9RDzjJMEsfXBdDuD18C1mx1vuji9UQ1i4LeEXZnvDkkjQYMsj5bLbWbubP5ckbmorNkHgVphYpo8NSF",
  "key27": "4FmcZmG7j15y4xq6SGQDTX4Lna8sHYHVmfCc2WS1QGYxqxAx2Q9wmqYiTrx49qNtH8TaMMvmUzDfgSNyC2XSZx8",
  "key28": "5XDJtYB2hCgDR6BgZEaN7Nf72uSDoWEc3iZ4x2t7Fbnexdqv9TTkaLGx8DgJvqZHYRvKWrpvb4d44MJqoMaTQiqo",
  "key29": "t5HSdXv2sxpCn9cPBJR2Ny7hpeH6XUjx25E3HVaCEMEHBbx96GrjZ1LepgFMhjhP6jQvTv6zYMAjm2tmkdudQKi",
  "key30": "qKuCh6PRNscBFhiqMw3n7kTfZtgjmeMHiqA9CEhKSyEA9m73koi2AX4EZGSfjK46x8DozBhQogLwioEo68AGd8A",
  "key31": "RuDifj6cSDn88dKNuRq3pBW7jSuNZb5WEZPS8MyxJFdxsdXNgvdaYr3thGQA8bXHZhQbDEmcWzobLsC3JGwrVwt",
  "key32": "2HcjqqmP7jaWVANCaZo9nF32PZYBSNsR3KXkfE7pjsmBpCYkGF4P7k29ttPtcx7cxh7V4gaDPV4qwx8RHTL7URbZ",
  "key33": "61XwmeSYnibYfd1cH85rp4HSFeB4NsTAXmSs9Gd3cTSr7xfXxrGrfm727caYHw9ndEiWRUMvp7aG67UmekPWR6Qt",
  "key34": "4AQFWxFF96Q5Q3nLQc5ZxSX2CvUSBoE77wifouLrqhCJcnfqES7pB17UeW1Hy8gAdBcYHkAhzHbDakNJ9cajmQ5T",
  "key35": "33PbNaZfnAJU4fVLp9HpgP88fFjZJ3YE9WiuRAtUME1ioYXTnZqvY1cJjsaevipCYLEWvU7G6h6yKtqRTp9phgbR",
  "key36": "3QHeyBCxJxm6sY6ochVtKxRthR5ZAWngRQ6Hv5eapr9X2hLLevraTVdmCfmMV8kMttukoA9d4oefUC7uV7wAbnKR",
  "key37": "2B4pNzYqKBgi9bJHisAE2Pfb5N41UJGwn7XgcMgd8cjAPKdjmYZHwWmyokJ544E4u6MNxp14sUJVBooJ6arV5ye9",
  "key38": "3YXoCVXXvUrqxv5gg3CkAvNkRJyT5mUcgR6LRUuHWJLJPC9YHkba7nPrZWmbBWvzmPjrzJC9gVY4ZoeMGfWHoTJh",
  "key39": "rdqE8vQgDKNFtReavxZQVFBZhA12n9QPUE8M8jjxPonif7zGvH67xNFo8wjmgDBXAWFNFFH4qpKF4ULontgvrCP",
  "key40": "AeVifJxrBNirD2AECkax3ZyDQCLoowFAaAy599pNV53pWRetxZg8WwpP8BZxV5iVNaDRdVoMc186LgfUnsqxaVw",
  "key41": "4YcfzatK8UELmC3Adev3NvdY8Nfyai86rjgZKmiNjLQx4QK78kqY9wrMN6yaFaX1FTXhWTjrUdR3BnJQ7g5pts5Q",
  "key42": "2kbz1K7L4exE9cQBUqACAP6EKwCDsjUUYGUA44AzmHE5z2PgsdJWi6KZZSVKENaPq9DGrAtwvfDZPntPAttHuDuL",
  "key43": "32Paeb7fARUH74QUMAbw2GHSjk8T5yeDmrwPBECnhuCSoSS2RWxTLf4x3MnC8Vcu4Uk7TxMNJ6iSxCtjQTyCfKEG",
  "key44": "5s5beUsVbhSTVL4qntjWR7wEFdoDzyNLSaKtr7VhThDEESCi2rcrhbomEWZxExswBgpzL4jwvw8zyDjn8jNRBBdW",
  "key45": "4Maeyfca1ouhHKcwfhAjt4qL61RBppGzLCHefnxQUu6CPRWX7ziEaDAvyZQDkHPtJYR6rnd5jaMiqbrS7cTKaswW",
  "key46": "5UxbpcVpuA2w6GWAbR8Z663GXFcCtc2pePcvcE42narGzyS6rDnYG3WojHK7FTrgo4XwiJ96YJwp1jFdqakQdQUg"
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
