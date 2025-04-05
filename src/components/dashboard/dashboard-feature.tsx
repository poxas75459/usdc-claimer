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
    "5L9EqBuSLFJFMY7MPLCht4zGnrvdGs1n7G4GqBBjsDFqcBQK54iDsmesxAJBbNcMtcoHmt5XD1FMpcDPjoVFuQLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vy1fNcqBpcZCE5HeJE1JTbdkX3w759M8aXCM5Yqtm1ZY23fyBAhquH83q24aC7b7vdbhQhWwkhkPpjG7JrG8af",
  "key1": "24aFoqDbj4UYbCZixCCrvnmuZkziLVKy4WQsqGMa56GWTFoNWgkWSDv9kYbFZsF77UBkwp5VcbNbo4jmDiGkn5BM",
  "key2": "34MTT1L8UvvmGM41gSMsZn2ghKoJA2mLrmkMLGbUCNwmmVKWCpLvAE8gAM1h2Ue6YjPdo7CfVJCjLyfsCDEJuW35",
  "key3": "42bb5sBHV9xYFDgTKFq9nuvhGRyHNE831wwUdD6VUe4d6fwbVYzqJ8jTEHMEsHcDcui8iDR1ke3mUdVFHvN1J8ss",
  "key4": "2w53Tis3V9JgM48g6CzYL2i3yYY8jrJSERVYHimJXWLMRYC1PkoprV4fwB4SLfv6EQC4vyAec7CWETpDchZWsGb7",
  "key5": "3M6f6Ha4aLpqb3beEoRjeHSQkwkJ33ncgMdg3Cj9vPftJdRWacDEsrN47snZTkRwKwuSgdEv451HT7m7EJqqCf7S",
  "key6": "4kp4Vtb1FqxMXs9tCbsKy4sQXDjApmuA5J25tPqNAy6XFav16NbiDGiXN5Tg2tjgpVH7VkApC2RM4isaPexQMUo2",
  "key7": "4CSecLjaN4VmkHnfgJ7SDUr6fyJFLQt7GLNKGSbuGhFNzTPTUD259z9ExqhnMuEBG1gAVnvW8hohXCFD1LmiG1Uf",
  "key8": "5iqT2CpPBf1tvsSnoDcqv1nXvfgc3cjHhMJRv66rWnhC9sAmhSfUUZx5JQ94xPEDRsK9TxNjBHTqVtKZQ55X3Nph",
  "key9": "5cMtva7wiws5DPfR3yXKjbtvWS7zViyTk5tZda8MHS1uFRG5Vdvzxy1vxoC1bQpzcySP4sk4DwNSqERR38SR2UrH",
  "key10": "2wz5hfmEP2NCzzo78uGr81p8XZb6rt6DGYYAFP2VQDU3CwXA6Uw76tDAh68LwQxisuqusx7kKJSjqkUMfsVAjGGH",
  "key11": "4MnXsfKvt7CVS9uCCZDqpdZptZ6fAEciYJs7vWqZuqDUYM4E2jnaHAZiDDyy7nfzdoJa7Y46me5fvDkZHty7teHK",
  "key12": "2LLBZyspVqYFtjGmisVBL2R9KCnwDsq5tf9pvVqZfDonyPd5TrMPk8AbXBoQydqBqau7V4AxyVDYBAyGcF5gaK7s",
  "key13": "63rXLig6hht4e1azPdR1eArR8bdT9WFaYU36rRvgufjYQyWTYKFBFxDmapEjFiNsGmDMw7penJD3EEa2uCFw83at",
  "key14": "5ehHUBrVcqNvZ32TivFeV7R7z66vkGEz4yh5A64EnvBcSjXvnVxBgSw2g1LnoBt7nehFPMvtXtFxF3DrWritaoYp",
  "key15": "3CDCmxddZciEmbdWGcXZ5ZhbxuZJypSEPkGftbmR6evWd551AsFNd3JAKqFCQBKVwZbDb4JyEuRPv4HDiutFr8M3",
  "key16": "3rnRfTQXMbboGrGahjBJvPnuuVbLjctPuTFc4aP1avbRNiVNAH8x9iuwaaFk65pnCtUjUfY1DTXWDF2s9i9z9qwF",
  "key17": "4Akijk4zcjyA46dBafShr932SNaSZro7n8qvmCjpecEqhEcZ88dBqga4xi6pevTVNFBvZF6jvn4LKQHfyent2cws",
  "key18": "5jaaTswbqcqo1XPEEnxTLq3iFzZ5dcBdMHWJqia7JeHca3YNLsvGzNcVHNa3x7fkrWywmsQv2qQS3YUigrPgUZDX",
  "key19": "25EjUTqab3ZnAJk44erNcfK2Rk9qxxWUi86xoVk2Ha1gMA11W4g4y9tBekqL4LAoqKvGzciY2E7fKyVF8PcxSgDQ",
  "key20": "2dsGEebKcHPWEB6eC9fbVhQPimzbHz7fTMaujmydHzNrGpGBeqPN61pQVvNT5eTsP5MvWt44JHSDTvyQpFcbuiYV",
  "key21": "64hakibF54qjgPD8DyLpUvQnqU4EgaqindzVoE1oCnkJP744J6P4AxQgECntyx4v2gzdVfxeV3VWan4YaUBER6TC",
  "key22": "4rJTsX15RoNkU1kbqadZHuyGNvHJgXobpvSAP6jLyYFReSxLUBvb7kXwZooi2YicS7hNLPNSBNhMD6RPbDjnLRf8",
  "key23": "21ahaEPzTPUXdkn3mr7aSBtcBYQgJz6kymsGMzZGPffT1f2BL78M72HxcJDkADaYrox6tF6D2gBhA3U61Dp7xTvX",
  "key24": "4F9HR3uX63JrCdUcqaKPKUzGV82yoL9Fs7CCEcfJp6tHSdQ6UfsJmWnA7ScxJniFXPt91NQYas53AsyVFa4cLoaJ",
  "key25": "3sSNgS1ZoGy3p1iAYeb2sLJVNkazFC8yQoyBqFSnBN3iNxB3c7ybe6i6hjFoYwKKmZULDT6fbwG94d6ebhiaKEaL",
  "key26": "2n74iGgabWMfWhdkv5PQEmT2HPGKSXXhmLK6Y613CtdVwyPRca83VuW1v1EHBR8B3KQLkQcppBXNUd8nkhvdV1ia",
  "key27": "42Lqsksfj3xbc7VXBopUxDrRmZRWGDVAVa95gdnTc9UgNUzewQkUyrpvgSz3jzFCFLLxNWpo9YWrfayrnSsovfiR",
  "key28": "3aWigfXa3U94GapCFAfehNRDEoTa5Xip7s1qjj9ZNNhPkpdUzG1UhjvcTbmXHMDEUgYUNaNGeeWJL6HmXQDcm4J2",
  "key29": "4nJfFMax6ZVSweQe4qSGp5ASNjXDYtQLUmmKXRFKvNnCXzWLJUq81W1k34FKnCXbR9ME9vuuDc1WHb1Hi6t5yemd",
  "key30": "5LDFYcAtLLPnYv1h9QtZ2YR8epmAN4geXnKjXrmxZt6AwjHZsiWHrXHNs7Fa55JCRvZiQKH4qnpsXUjrR34tiKah",
  "key31": "GbMgrCvyn9R4bdgEaEG6dE8L9MqLGh5NszuHfDmjk3GHBPHfQtxWyvn9JGVzj97VwnW72CtA6iPHByBWkyzcz3Q",
  "key32": "4RMwHUaXmk22e3GF3YscdfkXhFim57fxnzPhf8y3S36uRjEZ269i451wMmpABRtiW9Yf5NqXWza45E7aZCzBWAxX",
  "key33": "4YSc2NpbNThGfnjU3GiwDygNDWQ9Fyf1tP1ob7VYuijuFDy93kqQWa68WmQ71Esotsi4xDEZj7JoxzyMKrP9L8Xq",
  "key34": "5S86U93Wo8dZcKS2DhLyFPu39AwVL44N6WxCRLYbz9w7PqgewwXZ5bsLcSSsFkJQ3AnJXPGMMqHV6V3TLVhdy3jc",
  "key35": "GM5bn9JMfN5WvGJPsAv3MJQKK16KuuUAE5KVdkjhM1T74aLMrTbUeY6R9Z4chuqpnCuiVcPvuhYsPpSLf3pkjie",
  "key36": "2wT32c357jeRCnqs1SrJfm4QnmkcdjxT9aAEPWKufp82vdAPrqKnMLZ8gvbMUadSzB7bJoFr4AA3pcff1syRaMcu",
  "key37": "3MTsmMB7v9UNDfJ5Cc8UHWuApJx7Qja9MKzfbAV9voAJfwLt6nwgRBULNbFDvW3HFyLfevVoRtiACJsztehUJRW8",
  "key38": "32psZ5F4JmvSTen3KQvDjThNK2cHYd8gPHDMXMvVQPKBJiNAbtqBxHFxREMuTkcHZKHZiddEJhGvNJQXnFrrdt7P",
  "key39": "3EtMbwcdMfqj4FDTHKCbcATKRfn4r658RmAh1zf4WgP1c9j7KojLFtMnHoX5KQZZ9nSATVjU5CUrHsZxVLQZ1dTY",
  "key40": "4vTYzkmunrMde5x6tYAZVP5D6ZUog4ZtWMBgn8GLd24xnuii6rZikvVkPTySNoY1TTJdfsS9gQtZWwR1h3shJjZ4",
  "key41": "aopD2mDNBfwe2nX7t1RqgrXXZPt5L38UMouvVfZ3dKsTCekWmFmtPmaBhZZ1JAxgdbaXGe94qpXonFGZ4KxR6Bk",
  "key42": "go2ZMiKHEX14YnQ7ZdymphmVeHdmeNmFLCGrNDXtT9SScGjuzraDn8R9dXV9AjHF8BtGUCfFEUYgQZBXjPgYR3T",
  "key43": "4PHpHeBN7KLwhEM5CFUia686hUmQ8RDNGARNzTM2o6SLxtjpU8W88Y4BM3LJPyM8TYU3KXff7G4Qk3o2jp8Jkxtv",
  "key44": "zSvkVjct15gu3oxX83SukHdFfQESxqg28k3VW6BYJtQZvq5zAeUUmCfmULMxXNucsXxhFq4GdPH5b8J5RnGiKxZ",
  "key45": "6drsA6pBPzA7bgfyG4Pfdvxuu7xePnksPH3RQJn5o6CxNvSVuXGJHZGsow28APkBfGMq369SdzCDJGTWkFfByEi",
  "key46": "4Ez7ZN4JfApN8XDWD567cjy9kJK9A78zSM9AqqvF7i3CuZ7P9kE9XaLwbN9iK9FjkRKvTRhjmDEwbfGUYE51T9ZS"
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
