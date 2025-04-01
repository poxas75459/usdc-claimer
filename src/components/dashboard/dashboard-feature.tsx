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
    "4r8FdvQpECpc9rQXVNwgWyJz2VwKerXzfocx1qU9n6jdbyVLTbsPQ47LE1vHrfYocScTgtsGACSjFR48FQZWvgnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgUB9gFB3MWpE7K8j8zRxtWy9jBQqc8CUHDtCKFYXmK6DeQsFL5J9GG6QTsrQo34WneXE3Doowv3apJzpbaKotM",
  "key1": "2WJPszgUQiPFntLpu4gigP817yxKuBvPRRV54d2PyizKXPXyVA16NygxRvuxsC5meRoXM86khHtfTsW9VrWHH5P1",
  "key2": "65TPhkiUP4b41UpGns1mwzSAtvw8jma1W5GUUDkuQdTkavZp9kaDYu8zFFiRYn8CcqKdjNoms2pxhZUBUiBdmSZo",
  "key3": "32yCsD6eP6hq6auQtetn6wwMyzB378T2t7pbZXapnefhA7s1qkmXLDq4B51dKVxzwdYN56Tt1iQXSifsZ229zFSv",
  "key4": "5dqMYc5oFZMaEqczirA5Zf5UZE2Q7kV7VF7s65Woij4SpzhjVJUyozm1GUWaTrtDjWbdhfoBYZKqkmudi2zZxwF",
  "key5": "3oR7NQvWNV2MHAicdm1mFgQrHWqofhiDjWmufA9V1KKRoUvMKydV3NFPupUDbwEQbXXzZ1HU78Bj5L7yf7sTZDZM",
  "key6": "3Em35qKKFBPUeU7JN5cq6c6GRBMLvrtFyXvxG78fd1EoDgxZBdzNuZ9oa7i7TrZqdBNP3NsCiiRmBiUVCnH3eS8u",
  "key7": "3cQKGbnR6P6T9pj6PV8aBpfsKc9v3bdMqZj5a27BnHzxrbJcRoYWHHkAELb6AmfgQJhanVRhVuvPd2ZvoQgmrFvZ",
  "key8": "fAdjtac61teUHjDBvaKaMC8jPYD3k6tr1wMHLDR7KZFub3xAB26GQdk3ZMQHy9W5tgQ5kfXKVpAvF5uFQUj7g6K",
  "key9": "4EjngwDBraNd4aB7jnbhaX2cTtSGYEGPaSLWWwsZQXXJ3zATcC4rhFXw1NqNuK6Bcr5kXqhMW5yTJWuavCim4jsh",
  "key10": "2f5JFouHd3weQ7VnoJWgLHtCni1buUHuGd3GPpZ9bNzLKFYhUxQuw5vdiHtwcASsK28H3BUqjdyKMURDNJyxhiFX",
  "key11": "4vGeCXGLnVBfHGtC1Km1V5zmwQapFM4LhBLCQ2ayeu1z6UUTeLpuVNu9X8nkh4h8akqczCXyGAbiQN5n6ai54uyU",
  "key12": "27TTfeQZxC3MaW6s3A5B2LXbPPrxmFXM1JoeiMheGfY8H4zPiYqSDeBECBqipc3VZQ1PN2mLxj9pKeeB8Z2G22Dd",
  "key13": "2r3qQKrbJPefvaPGQk2RJRBFnPzQm4r2CR2xhLupor3xTsBxAvT77oVV9MfcyW7cnhY2nSC6VsCmHYUUSjFeDq3K",
  "key14": "4n3QgUKyacBA9GwPCeYXojhxRDVMciFRHQsyu1e79JkWN9gceP9s2kCoUAsrW5wE9Spg3T1J4pQPLnj9cK1yuFcq",
  "key15": "4eTnFQSES1gcijRfmjoUaZbMS4RkcBv1oszKoEb3c7Bj9mf25rGQwsywPBiWQkJDA8A2f3Vzq8f3iqatctyT8VQ2",
  "key16": "3pcvRR4MkWkfJcUyWwsxVy2onr8BoV6VUyXFhZRYVPk3QydXcKG6JQf8Q3W3jMtbfgXBtJsYkANudZCvfHF7r6Cx",
  "key17": "kSuaLqi9iXneoR1Gc8aba3Csy1Swd8Zmbg5mus3nd2k63zqeVJx8pGCCZLSxAdtkQ7pBt94qx6GM9noGyKnEjcZ",
  "key18": "4EuUPyC47NDyzB9y5X8rXjjw7bQgzQX4jCoGuqnu5JBr45K2qjWRXNbD4muYStDgtkSC1D7UCpS15siCDPRHjNHZ",
  "key19": "3PBmsGrLAFuCEUSNeF9vEBxe5qFkWygaLjdCiFPtsfNcBxyTHhQLrBTSvrNcUFsuxdwu3G5ZwqfKjfU8sg3Vt7xB",
  "key20": "EFJg1vWXDhjXncvoDqPE2FcwwsTW4Va2eCdHNLJQrPZSA942ZQdAYExhxzrXZLE2TpUugavmyUqqqLvfbNSxtqT",
  "key21": "3Nftb5SwmSAWMApjQJDUUn8Yiye84EZvf4VZzAVB6c43i9GSCwE1jUZqq92N61n66n4Jgmu4ZWsELPUX82TJQrmd",
  "key22": "UKdRo1m3tQ8TYDzac5nRuqYg4V7sTEF5E6WQMFrzECcFHWdEXaWjt5zMv5k2K4dS6xpLKaxM2X7T9uxNiRc5NXa",
  "key23": "64GsRktSbh3JpFEUFtRW7TJiRAwomZTKGzyudduHWjUU11SfVy8fr51Rd7WitYiTZbmoewnG8YPy4QuRvGfSUoD2",
  "key24": "3xUs7PZXXA4c9AXzyk1tcfkTYNmj7nphztZUyriL9XiX43aXsh2TrEFiVvtntzyTFuj9mpRue1P2VQvP98s3cruo",
  "key25": "35WtfHJtXR4fhaP3FeUewy7fd1S4R9GfgwoCEo99Y8mtDtLqefkPBrjK4S7pAfYmSfE8zP7qPYjwXyBuNyq9t7zf",
  "key26": "32jiZ591gjonvtsuMJnnkS1KWDdTzKYGHz9XvTSBSXBhWMsyuPvH89ZJQfaG2sLjBCRKPe3X3fLZUfRXopit8Wk2",
  "key27": "QPVDGJP7UMKLCcvSygpXWYcT16hFBVfYiYzRUjqwKDCvTuCthBRqgXMFy5QWzLtfFP5rpfLhxir44SaWDrt249R",
  "key28": "acBYcje6sJkXsi2XbonBUt8QZWZkuV1UCSyekqe5FgneFeSRbZW8UM7PYkebTTkFynuGDXVE8rWL2um89gkajRA",
  "key29": "2CNy6rbSNz3RaBwkFvfHS8xs8Zvy4S1q9VFdZKJxoucqh8yjaa62zR5BM8nUnr2H61LZ8RrTHq9B6JbZX5jXyJDy",
  "key30": "5gpCuXTkumAiuVALFfFC25jwj6jLFkLjwpfGP3M6WHb33iQbKBugJnMDMcgCwBoub8nhxjBPB15KWEyZfSijqoGy",
  "key31": "SR7SyKojaEjK87gT8MpipPPp1hyDVZsorR5AxKBe8ciopv3BPaoShUZjxCQj7d48axD1eQkJYM7HVHuoEUrQ3to",
  "key32": "5mZHMzTZfboFjTyXViS8Y7VskQ2ZVF6S8TbsabEQkKHxgxMJJ1wi2ZdkrpeMm8fBjuEV1cWH625E47kHYzgov2df",
  "key33": "wD4bQuXyqYH1HSVParLd4RCuCzqNVb2Ls4wLzbcvVfBJ1uLxhaamGm8KDDn29dKudCwcHJK2y8T5pGK7znQm42d",
  "key34": "2HVP7vSdHvzDHfahxqCEDVLpszhrDWatuomEzvqd6MP9Z99rdhDhXFLsHVRzdWEoYb2dLZ6jK4y1QXREH3Fzso3P",
  "key35": "TjLrUjVy6QwkxwbEwECvp5C219gRWqw7x6VRH2raKubZ8QBDiB9mYm2HZVeWYuYqUbDwjJNFqpvCnSgXSvvnVgk",
  "key36": "2HpB2usUurQTmHA42gpi4T9kjJUrJzQxn5zgJDsj4nziyrAVSxY3uJqzMFLLAArYR5NqJnRMrcoGPEMjP63UJPrN",
  "key37": "rATWTedMtrm83uYaNZMvwAcggQBtfP8fekzU2qdK36o7zLfL3BK6Nmxx2HLbR1dNPVyVHFs6v8dwhdVSLdZidpt",
  "key38": "Za4xDyUDnGDmdFUwVDzj7z1D9bGFDKSNs2mz4DGmtFxx3PrnEWvf4S9JsRYtpdkCCd3rPM9J8BWwi2a88tSbJks",
  "key39": "jaYWjNBtXd9dHzr2EHjnw5pkZtA2Nu45nYzsBExDTKexbZH1RvVidzYQpyUoNzJjeXWbNRZSwyhbFLso3eJFiSq",
  "key40": "3hiH9v1cUMMVWi9saCh9JfDoVtraVs8jfUCkNSsYJuRZCyibnLq4qNbZcXLWzmRECEAtsQyoWNh2E2CxY8nJxjAU",
  "key41": "2YkZUzQVxZV4oEQKmsSDSPAYX23rnXzoqzNA2rwdgH9NvTLmAVuA8QiSF4F9gjxSMimGBGgqBN5cXx62WfCekJ3h",
  "key42": "2KB2n1wPdjVpJeRvHJ1hzhbysnhPf5zk61ip922W3WY8pLDk651evvorb42afgcxDoTaahKVbNNnQPnkz1aN2Z8W",
  "key43": "2MBvyp21dtJk5z2PJ2kNSdpBtcBNQJRUQfh3n9nq4t523v46w8qfm4GrJo3TixGWDmdsYRB71Kq3qpJwwa2FEBZ8",
  "key44": "a6oAfQPhARdtBKVSTtfEiUDNSLzwTgXmKakCVX9JLAresvmqn7NT177crq6Hjbkys46szhpVBNcjNFcj6oBpgb8",
  "key45": "4VgDsqeF2MnP5e68F7fVe3vHRFHjWtJ6cLGdpYVhvR9w7sG3CyF7nheLEz7kMint6P2MnnTVSMEJwxojwzJp9MpP",
  "key46": "3TojBQZtWw9SCf14V66h8zYqbxUrh2MP9Dq7D551KMKMEYoe5CGTGu3tm2NRcHoAzLJzLtn7HAjcPx86t5uxFZ1K",
  "key47": "2iFpQdjLGtCWrsoEm8bdDV7HsXrWrWt56mJVaqbdNADmKJ6dhdMDPfDtY2xDXGNtXvqombeKVtimM4PDqTXxGjKh",
  "key48": "3KLPGd2GaPUdyust1UyhRVWaFKBJ7ETy5s43wY8yUkGH3SDkTMxw8fWjaGYJGiLFhLiSesxDJ5i1xKCtD1f9aQYr"
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
