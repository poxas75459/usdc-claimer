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
    "5AkYFR4RHfZS3hgidUx5uys3FEds11KP2vMBwUSQJx2EXVBgRXjDj7fC4N5zyUhMW2dnpiuqoEaBCN5kjnZxdg4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5BGTYH19MDPj8pReAfCnTZW3Qjz9dgjXrLjBq2duJPiv2z4KBZuKEgyjc8aDqNygW5LwPfF5EV5i854JDMF6mc",
  "key1": "5u6G96DPxKMeVaoPRZkjuxvZPhNob7figHhfVGGDTjB8RHkALczUXudWsktaaNtqT7nSyWdGZaxXbv4JmmRQpr1p",
  "key2": "5WvnJJYFTjTvtby1ryU4RZcBLh6tztvcFmM1TXmWUajnNxaA85EmxvGT85noiAXAtHvDzAKLExT5R6uNCi9U5BhE",
  "key3": "482TK4auySuk8jU4rDpFGVZH8UxtGFtH5xkXvxXWNxxDrX47a66JdjdRxLybUGZPT69EwTKmBJDRPeL6jxExSYYg",
  "key4": "bk5myxJqcbEPaiD9zSp7mDfw3VTctgJuYsEKPAmr9zy3E6X7yxo9Tngi85noazWmnqYZc68242SDbJWvBmAcXVx",
  "key5": "3pcEbK85jpnPXVa4Yu8c1bjtXU4jZmYyxCbdvZXZccGqkRqGRZr1AUrAsLiETWX8fcekApr9ErrqQGdHTkGh98h",
  "key6": "37QpD3NoQN436Eykw9DK7MuSLRpRLFVmzhFMEUx3kT1JWiokG4sAqSNdm4n7jcC3dQSRkQsGzMQk48v5yG5gbJT4",
  "key7": "5kQ6EbJhsEcH3pEMhxbQLYKuP34biksg3XLL9oZVW6zRnYvfbJLJFHMtHDf6KqoF3fcno916KxME6XiVt2B3sF3w",
  "key8": "3URzcfZq755CfYc2emznjstCcns8KtFT38XEja9xPT7UnPG24kLSvbZsS9GQQAHNcPrjnN97DY8aWPFjqfxnEf68",
  "key9": "ZFLqiwSQs4wqibYp4b6CnpFhCz5ohAAWhbP6Y7F1aRtnp4sX5QcwUVZsHbbcBiHAiuxViuU1n9NUUVkZUUa94ta",
  "key10": "2CjMA9BSgNKTEDh3rz8mZ12CWYWH9yNisr6U7Qiu2j6n3zJqprMscGkiinjawxXDJ28ygwsGaLxXjvyV6T4i77DW",
  "key11": "tvCSYbsbcck23t9rchaajgf3DXizuyy8674FyErh51hVxjA99g7wroiBry8nZWZ2eJdMF5a2n2vmpKGwEUtpCYW",
  "key12": "SU7HZ6BwEnKNSo4sCJnP1LAZ3njkjTcaT4HpgnpDtuujftCWeBYotW8XT4gT8g9mTCRXqWMxCjfYx7NyEtGXiWx",
  "key13": "5jLhjwwtjJNdiDJL3ApEnQqdQbvUQ8DBmWY1NtPTV2LhmRZvBJUmAzr7GT7M2qhAeyREeNM3HHL9gdujAvRrAzvK",
  "key14": "2zn9kcr9JwcBZPgZYAGMmEP5bKNRSkMdETJkpWkke3GzLRTN29DxcadmVyMbowVHkMcDjoBgxA4oaNBgztDvX3nL",
  "key15": "2pGGAtmcvrBucvXG7ZtLMc8FuMoAAAFevbEsyHwKtvCfyGohumDh2QdxtUem7dveQ333tvrzDbsmXkpZdVNrhe2t",
  "key16": "eAd7nRzQ7PcW8hyzJMvrXh7pT9MMNYVp7L1mZFdRUCVcwZEbrHuJnYupLMu6ZtE1MHyosSzFtZYW26kcyUMHbJe",
  "key17": "4LycfWy5w9YR4AdrR8vFFnR9hSLjm3EP21ftFPTAE43bN4imTCbsxDeeF5BE36sgSgJ2My9YrzFoqmqRPTLgKJWJ",
  "key18": "2RyS8BtoL3Luvyx5FeYFZeenCufVHyuZJrdKwN7FdWsGMpBFLQS3XVsP5TBDxhyqshDqkoFvJPhsLypn9SdbxdJJ",
  "key19": "3DtBDui1mtqoKyPx28AQByoKVpZBYf2wkEvDVgQBweqwHetVPtFtnG7Eer9Xhpa3mDswdtw5miXxHHh1vScngnR5",
  "key20": "5Cbc44BH7Hbd1h5pcVe2jk3Mv5a69R5VSbcMLRZx6ppDs3wkgaHV9FjgyZryJsM5hBSPEWwcbTfDHNmLa96vKZCn",
  "key21": "MSTKu9FBipLDifAPAC4w1vWL611tB31iAub2cfLToWT78j2MwBQUKSYrwABW3fbhNbWyuPf3fwZXWmNUSfPZaxm",
  "key22": "44sE1GUARETna1BhVAWWtqktx6RGsZbMbSkaF6ZigYESNi9caMijxjYUa7keDP9h4ugfBYidmPt1aknQ4Ux5qY8d",
  "key23": "262gso6gw7WffqavVpkV1b1ZkFsYkXVjEtYpGJ7LBZRN9XXPakqYbebcFPtFNxbnh1nCwLBUnFRGRTBkixFayndU",
  "key24": "yJRgsKmc2kzwk2pcbgPXx7L5snZsFmNRyf7Q9TvrAtjei8azWNb6KwiJMBfHynMvgrT2578gsqUuiGmRMoaP1n4",
  "key25": "3opdgGu5yo5mrssHED4DdQe313edqZxgyRQC2WpvYkCwHwXTECCSWmJSb9LTJc4uPAMcX2UE1fpVW3DzzD3TWZni",
  "key26": "45M6tKz2BzyrAqt4zdzqNG1kM96FTRcsTMQs1NJNSqCUn1awAnDqH23dqzktBYdx39roLK3VzATzVvGWsatkahwC",
  "key27": "4XL96bkgkyoXREJcYNKag7VvAcJ7fvptNNhxr4hMAUF25XG5fy22d8oJKHMVZiiTjVJsXnLfADxCjR7fcVgGbYtf",
  "key28": "2Z8jHbha68bZhskT9dHepM43XQKBTGHUAArazNE17Sq3by93vtkFaANW6Rk5K5NW7SkBrJT23QYSAAp7P1Z2s76T",
  "key29": "4RFjo2nMXtze1bGSCHARwNwcLJFMFytEw4JpTiGJMFraviRM7n5Asb89PQPY3tfFRvcuo9Le8uwFCeevn9H1aC9d",
  "key30": "WY7NMWb2GWkMG5H1vwGZUp2oF3HSTvzd9mXzD538nPNTRKVJ7AaRJZM3gXB8xNaw8kqN3NepQyMkiHgeKWvFx2i",
  "key31": "4iiuX3k2vdoKvev47iR8KFnfazmv5aU4wZwaN8R56z3X7H5vvNZujPWq75yDThvt9xn7oqEztuNkWJcrFkNUUyxZ",
  "key32": "5rN9as5RC2wUQsCXysXhP8Z3qasFx176gRLNrut6xLt4H4RNjBvMzxmqudnaBCbkRisJXiCKoK8ELDWnhB9BwJ2M",
  "key33": "4XHdF3rJkwzuKwtpFD68Ta8iwiT9KEsG9xWQQNckwq4hQAhjcdvxQ9BHZZSofEVWfycffyPpUUCuXoCE6skC5HUh",
  "key34": "NUp5hwC2Dgj6QarxCcV2jvhoQUXuuxgziUks9y1ibabXJCu31dwTKSBS1E6nyo7xUn5iMpaLvvVy32LbvvdKqof",
  "key35": "4woY9b71tC56Txr3KjDKzyS6aWH5syr4g2xVyEUAAqdv4Pu7XmvW27nCc6HnPu8rsFjVpC78Ts8mmuRkoLrr7nFE",
  "key36": "3RbwN8PKxmyUgXtuJjzDku61SAVs7Puw8D9Mh62y6hwtbf8EChU9vYHHbe5VzRLzaAePmVA8fddZjeKDbvF2UQRc",
  "key37": "3ziyg5TD1YoJDpz1shgL3Z7xuVufxCsUXDjHyUfxnzoDdMGDC9ruivd2CAyhKUWAyq6xBYKYtzxPSx7h3EsLdaRm",
  "key38": "5YeZP5i5iewEDeGdX3t5gHSb9me2sZZmtUrfy24vpeatpqD5rrfyHCqjyhQqUz64cCJBg67a7Sci5dtb2ddCoUsJ",
  "key39": "3cfjzXo661ztWhsfnzww16kYhtcM6ah7mxLRSbSbi8zc8joHAL27tUnDMJbWCTJvbW5yqJ3Hw3WPmohkHfVz4AvG",
  "key40": "2SmiNdiUjUjvuiU5WsdDSJxUwmypajuBm8HvtCF2ksqaDst8siviEXFadshttzE7AA9UghUN2DEm8DMZ9Jg2ePbC",
  "key41": "SckzriE3Wms9r1xFmY8RDYDcz4aLsyBLzyYvGBEvZz4L4U5tC7Cir2zRzHWFtBx6EhKyDxz8NqzRsRzPTisxCUz",
  "key42": "kQEfZYasDBHTzPPLwobdfPYEtpWY7qJfTo4mbBi2LxADVdB4bk4q9qPUYod37dxVx38Dg6zwe5aTuwYc5Xr8MiM",
  "key43": "5xe22hKv14A9RNQa7Y181GaV6EbLPWXYkgaVk6sjt8mCkBketm3vwB7vmvWyyWJQEh8KwNfaC975DyxZpgGn8wAt",
  "key44": "4RbiF3GmXKCstuAdXUmkWZPFLQJA5EniCZnqw3NFq8664yJBHG752UaKCEeMdGcxgwG3ra2BtSSy7j6F76phWcqh",
  "key45": "mjz8cWP3hKDseg2zPiTcdhviV45iBTzKADgup8iVco9PaC15RTVFC79WwttoWoDKhh3QMW7pXzqfEzJACntt4Xi",
  "key46": "2mh6Zm1Ffc66Nrisd83aERwsJHkmaVjqKTe5Scmgi1awo23bqPjNjrCukWtLSGdeiWETJRDtXsNZo2o8j7LJcNAa",
  "key47": "4NrecDqRJuotuDu61cLLgwa8p9SXwpSrwtwCeJhDKrHqXZpCA8cBocoLN8LyQ8MiBkJvCJkTxiP9dhaLz3Q6v9py",
  "key48": "FfLtHcResy9sfwpc3vthJPA6Eo4q2GvY2hGmyQdAvkpS3Sv7eUp7txJawGVcXto5i9wf6LPC5zEHjMYCDvUKakA"
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
