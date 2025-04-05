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
    "2wpcgoxepz6e5HbZPb6JXYWRRLNeTkgCBUGpJP4X6U1EqsDqeaYhMbjYzHMRBuyJEW634DciCtXbWCYXCQ9ZnaPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1w3QGjC7XvGXVnc3LeHk5FRoNDq6ZWm8mrgPmv2xWo9S36SGkpUDLuwWXx47dUK2xT6i3Bkh6ownAQcnH9yF56Y",
  "key1": "3L6njPHDg7psHYAA4k7MsNAJ8krTiRjGMJhv3egp3NB4h2vRToiraV5Ur2ViJT1fhLrDSxBDvNM6Zk2L2JAKZc3n",
  "key2": "EABVahkD8xvLCHHw6atHfjZpmmfs9pp9cxA7R2rjG5JHGNcESgNeRh2Pp6Bstx6kRRSZmdBNUda7T3mHzmKSwe1",
  "key3": "63m24ifzxcrUd8KnAwf7Jd5p9SEjxxDzbHL2XjVrZyDctqnCWNp1cszk8pbv4sSDqw311xF2pY1TR9L85vy7giXD",
  "key4": "YLk77zEPoh5igEmwFBgR97NSoWptwv2rb1QPkiQFcBgHCFF6jNLPeVdFvpYrhnVg3AqXUJB2tS7wkxetkDbfSZ5",
  "key5": "kCa4jN3zijLwsNbcGo365j1WxjAtDyNcSsjP4gjZk6RzBHf9y49mFeuWsG5ELnCmPzWpcZZGnYoukpmV4emu7Si",
  "key6": "HDexpKfTBxvDpZNQ3kSG4grrE1cw1Wv5wivLHx3CGYBmdowakX8d92HscAyyFRcqD8aYZbncQReNRsNo9gQu8DJ",
  "key7": "4d8fM6G1sg9sGPMYsV8ApVn3tU39yD47cYWxokDcDsZUkjjqYcxsxRSCAgojBSfTRguJr7acSH4XVWpDu1hteeWZ",
  "key8": "2Sh8kiy2uu4N9nPur3BBwTc3AUso3JpcfxgX95EqzFjxbrmDNhgGVBzLL6JaJqs1h8shjQR9A5tGshBwhrkWgnyA",
  "key9": "4QtBKjKsxtsaGe8AcG6atQM9i6AZs2xjFM3apS2iRjjfEkowKyk2JXn3rGG13pTW9xpZkMn8ymQuAJBuTZEtG6QZ",
  "key10": "4W2fBGFAMxW3mQzttwhDTJBsad9i7a2pSGy8gzJ3PBY4kgUyFjjMqrAx7mxJqckymL7aBkiNSn5LRCESBaW8fswP",
  "key11": "2n67sPwKgvus1a5BLTndacnyrArSd8LjEbJ1SEjLhsrcYGY4RZVBcDfcFtmLwVmMsJGZF9x5LKNWZrRFsdj29T8A",
  "key12": "26fdMhzWRwoU2tEt8xdzedeUFJSxn2EARbteEqqxDDmEEG8BFFKxz1PuFvuSBz1iWcppbppaJ3fhtiRCGpgbKZwW",
  "key13": "2Ep7JQhCAqPghij41bvHHbbQa7gT1Wh73JPogz24vKu2TcpckUc5FqnTE5q2dkzUbNpwWzVy1vxMkH81Q51H9DB6",
  "key14": "E8XzTCWJQtFWLMAFbC6MyMeF7923LWcmUWRp6bREiai5QbN1gThRuVyNNj69Q3nEiM9TLAKdf5p5viiMLU7qdct",
  "key15": "apckVBzvRZJkiHhHWxdE46qCikmjw7dqjkr4H1oFcucT58jT6VMPwmbFndMWR2GgKpr6bKPdrXTbDjh1eQwUzVN",
  "key16": "aGKa39DhvAe4b1i5jqAYvVoy7ej7ZsD9R7AVCBZb6E7ni5hSfvzuNXmNkY72PkUBKLADDK2ngwrw11DVRNTzhUF",
  "key17": "ws4CTR1sttrnMKJxti18bsJzSCjp4VmTtqQ3U7tqJBUqbgXf2SZKmVGbGVRtkZbTFBLYS5xs2cMv2ouCFermKbW",
  "key18": "4tq9fqBn1tjJw8Sbq4eYyAS7kh2DY4vH1CJL5VjfCr59XwTCTzP379y8jsDXydphG2TZp3WFdoWiLj9wxnwttysb",
  "key19": "4j5TPtAPVZc94YccfnEFweAuToHm9yspgM6efmtrogGKhmWo1DLW6PuP4NX2kHpMzY2iXVnmdoez9LWbDQgJkcYM",
  "key20": "53PWJSHW1WUTUpeqtAMFt6YZ543HvN921p6wu4CgnobdTcNj2tAFBpmsfEaG1od7UmFdHUd4xPhJd3jXjucxMN8L",
  "key21": "3yDDADbTCEC6ibtA4KUztY5KQWUavLJd9VLKcvDUPVhHQZPFE7wMhj9PFETynTX6Q6bhGFjn2d6VHXDUL9V5ankK",
  "key22": "5eoBDbN6seovw7dutznAFhUfRh5yANqwCN6TE9dGEL79EshRcM7YoMGkbCZW9CtGmCTzsjL1qhkcTfuziAVrHkLV",
  "key23": "42woBLGP4MewqiqYWRqsNxRtDdBjao8FKA5aoytWektPRMT32SDD3edAiJ5G8ZWaTu2MWpoDpP6ztLUAGkBvCKZp",
  "key24": "51f41SE5Ue71BjumbbmdMsjBUBRAya8u6ooySacJddfjjT4sAogRC6ZihA2ddjRmfQjR1B7PFHJgc9j34oLxGLPa",
  "key25": "55Qpk5nDwqWBUbGbQX3rdvr9T8P1GsquvpvRQrGWHSe96V3fUGFvcNf3KytQBWRH3nfCTos4JCLARRfu5kF8GaPy",
  "key26": "9C8e4QiKwHKrAPog2nW6j7vVkbV8XTQTH76M4W7npWcCy84nUfjAEHEYr6nrLvB4vUoP8UNMm5PsJLBcK47qJwm",
  "key27": "zZ3CicRE77SqGQEBEdvLW4gH3uGEYo4mJixNAdgHcoMMxYvrjUcNdiH3Mk4dWu5LHW7n2TTKKBW4jjbXfhuXnZW",
  "key28": "PtqWzYeQNnSHGzqGobWQEufmedqXHjVQ2CQVf1PiRCqU65gdiuCLx22Psi8a258nAUDC3YPCtuMuHM1nUYJ83sD",
  "key29": "3g3SxYWw6BrLxqTMmyBq6j56VDDfPYegqqFis99Ys8UfYS7UTjHNgWT77V1Zhvvambeg1qqFvgAiSAZSz9epLYUk",
  "key30": "3m3TQqRrmQaMfqiGYLvu5Hd7976zkc3Q6FWHisoTjhz3DM839oZ3US4dEHyderRuAPmxS92156ApZCbQrBqunRvb",
  "key31": "4GDf34J6AM8z4y6K5Kgasnh9BNyL8DAeXsPuSBkA7ReH2TbnqZumXRSJ37Zu7GXpXM4jAVmh9gZApihvsNRsbd1o",
  "key32": "4CXckr3Cj3onCVmc6PWqHyLatiM9tMxSTiz526NCUfbhhUjjbkx8jd1aNyBvvZZE6ReGKg5sadCCqwmrgrBYwPPt",
  "key33": "5yf82bnM6Ygx25rpsN4i5DFUqGgGWEwnxjG5ZCyEKT58uhkYPDVzbwf5zSNoV5PdWpWgS5FpwgRDhDyHhTeAuFNi",
  "key34": "2gXqRUDX7Sh9aiPm9pb7gbhNfLXY4rLBf2kBVAB8QHP9GPkKh8JdbvkLbPVt6q992R2FbgwfmfBr15MHhRJcsLRd",
  "key35": "4zhzEpZ8G1YEMkockyXQKZVjz982rDXTMeh7kTezsvh2S9mGgeAjzwJpc7B4pc8j4X6cYkPd94rAxMvtTKrAtnrm",
  "key36": "zn5TNgXCnHcnoiyBQsJbCeUDJgMM9hBn1VEumS9icihrC8EH81zi8kxDGXVMs3QquxkhVWvbCuAdGFCXguZVpQc",
  "key37": "3GrEqvjNnEvee1w7zmZ3u3BpQQyL4711M53vTqtNCpP6HSyx5YWGw38ZQ6xKBToUzVfKtuau7zn2YRFQc496Hnoq",
  "key38": "skNDRxg5GcN3dXQ4GxrYi2GhJWgMTDrrYVDVoQrSX8B8LNofVnQEmbe6omAXcTzo7Wcq8fAAEB5Mpk2Ka295Khk",
  "key39": "3HApg5DzQChavEsmXjxJkg1qf8TipWqcvfeX8mbJsjJZypdWxPypTtQvvZrXuUruK5emRywLKLbsPhZq8iPr9XJS",
  "key40": "1We3afL8WSRzdcpdP2H4F6hMVGsxVCavUkEsMrNhcFivVM3NYDB8iq1Vz6BLY5zASZ6xgTxTLtvXeuJatH8BNJV",
  "key41": "3ubJRySYC9MJsq4PWKS2iDYr7eEe8w8XPoN9UnS3Q7zgDiRhVwJjRjL12wnq7VonBYcNmBqaQqPWoWQVuFPi2woC",
  "key42": "5tYAeUu8rNvEQM6iTbcPJg6HxjEYVcZ5Vu3TzG8fj3jR4Mz21qzrg4SdYwLcT33GpZU1u8ULi4ymZ4vNbNXnCYgj",
  "key43": "2waPUuNtPhmgLaz4uX5tTCmzJHim4cj7tAXrzBDa3WQzay7UhKdz7owh6fRyp7rBDjZJP9nkyagETQ7JtrNdrqXm",
  "key44": "2tyPVFXjSE3viEnxj2xR9HL6piSk7eoYuTzeEzBmXz5mC4vBUoe65j2Wzbe4Ms3BTepuVXsTSEJtz6G1KcJMnZJr",
  "key45": "63We3Tu2Mj4P5uxRYAsqAqBQjSVa3T1aikpt2XtrH9F6b3MpQGbZnHWT8rUB2qTS4gbt8BXfrACPdUGrKRzdjKGV",
  "key46": "2oKYBeqNF5GzvKLGBbeaH6dXdexHAGrFSqUfMZwfdx6siWPeg5JxjvC2z12vXFi8TQqMYfbqFimfohVvP5cmppa2",
  "key47": "4EpnkYeYvusHY1QdzsoPoU4LCsKSuZi8YEUKUSzMC2YLjXAHgmxxYatYRpLtC3nUb3848EM4DZgEPyW4FTkLxHnW"
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
