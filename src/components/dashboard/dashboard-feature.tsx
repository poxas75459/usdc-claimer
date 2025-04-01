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
    "4zJ5vaaDC4nbf4wqhujF2nLy6mRPFpihVZyxPecNdRcgj93YMbQejy8YbUT513jyZctAMWB9iHW7RF17Msfk1Vuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zn4Fm8oqBhw21bRTNCBor9CNVGuQYe12hL3ue8cq1ByukZFALPJhjeDNXgP8U5dPq1PN62cqZ73QNXWqmQTp4Wh",
  "key1": "4nzBf7xU6gnYoBxAAnYS8mJ2qvQTTbWuZ9qzcHaQht8g8WvcEaxU9BXb48HqsURQeWjgmGSSdg4CoiGbuHXUiYN4",
  "key2": "4nDtHdbGX7suHctynnMNTejvn17fTn4Yg8axPAaExdy45N7KLr3R9ADK9mbRmGfKabPNBv6YYN5FZ3TDyMsvr4q7",
  "key3": "jKHCmR1TGH1uG47eb3617bX9pCVhgQVUVRaK4geaqhvLiBJDJwMwAzX5bPUPaYJErJrzQ96FdXTGrdJuA26PTf5",
  "key4": "4mkzpt7rc2tvMjFeoS4GfHkYSyYPUsjeUHwV2m4g7xFUNda5Pf88ddW4nGTgAUaZMaUxLnX9r5fzbML4ksddXC3V",
  "key5": "24VXo8sEgMdwtk7W5u8yCSrpHx5i2Wej7oHHkSYJwuSNLmHeZtDXoLuWmNWmfovwoq3bgSBdUAfiDXBVvkHo24Dw",
  "key6": "3CXqkKbU3jgiaYmkuVmyMTggyuSgM6jxJmyutC7Buru5Z4akofntbBhiL5GBguyFr6B8TCixusSEprcTJN6iEHq7",
  "key7": "3hW5q5cZQXvaqinbt92QeMJEfE2fUyw6hgeyAZSTUzDcZmDG5vt1j9vg5K9mpVRAGu9ascqAaEHLmRmGVP91kkVi",
  "key8": "3ESsrxExKsyCnkmfZUAuxp3Uot92xPxoKT7GyYfwyyz9o2Yk5Z454VgWB3ptQ9JMmkVJUEc2SURFoDEnqP7c4EoW",
  "key9": "2ZZoFPeDuQbMfHsPkVieuexNSURNnqaoj56upTSnLPpatmPvMMXgGrAdP2uH1Mg4HPzPUJQNbHabT3LJ9v19PGVS",
  "key10": "5UBtm7rA58cf3Lgd7xLzj4tgrTPrxfoMYDCco8A1cFziNcH3KXYvPwyW1SRmL2rwEtRVR6NVTNcpFqRQ76vE6Gge",
  "key11": "5qbrT4SBTQv5LHHM6UBgBLTpJKCxRbuuySveyvEyD4jrwdpJ3MGTSHKN5HpBMEfsRrCZmuvhP3ajb7AUz8b9TXR",
  "key12": "4RiQEPQoCMLgupojkb9p7C7ZEGsQZ1XujC8cwgdnWPGHfW7kLZBptbcswjowWHZuBs5o9x8ah68rTqrTL4pV2V3R",
  "key13": "GcFw6PW4sxCFi4bCELLCmzu48Qoy3a1zphwskVKPCj6mVFd6kAvkTCWdr54EdcLq9MB1SUwk5ewtxnhnLqzahGu",
  "key14": "5crMbdhYM1t5nW4k7fZ3WQpWR8bdPdHguVv56XZ71MbVVo6KdsdgDWWHmz453P4RuvWnVCNh2iFeSRDvLnX8KiFM",
  "key15": "4TTDWf6ayjZWpVyJJLoxY6FKnp4jpufvfZs2TLaC5Yjr2xnTxve8P4g5qbbaHT8GmTBZAw2droASxeyRrPQTxbPh",
  "key16": "2W94C6M1cRTiVVR18xat2UB8BXGvVG3uLQtA2qocGDGVPfUS76XaJGRhGWZi4irkWTyfWAFiCYKWJGXL1oLAJUY7",
  "key17": "663gTwjBN2jf2mxh8t35u9YzdKqq8jKjaNTE2u5b3ABqDacgfaNLNgVBCAweEFSxR6ASbG87pWrDEtPo4Dvo7fAa",
  "key18": "67qw1foZRsmtYWDi2Qa88rhGaUkk1YEcd38QYPHxyX83MH8U6951EJy2xvATGMbHabB53C5aT1RM9Qcw4HApqxiT",
  "key19": "31b9AEDjGCHeiA8q36hmTcCUwtis9br29LqWED4U3zFDGWv2svTwUcmz9j4RvCMcbsnLcsSGJrPyuAFvxDSFGuq",
  "key20": "61eDiW3YUS8Y9u9aV34jyjF5jNrf2yieVgAb2xEeyUwVSFAjnnn5Z6VU8616Yqn6T1GNj92uczezARiwChZQNbrR",
  "key21": "2mMjPArxgMn4dYxZc15BFi5b49oKRmCt1up3RSHQ1nnM3vuubRTtngca2gU4x9PqMSGkoLBHE7FhhAALrvhMY71E",
  "key22": "45ajAHZTdZXFdEsE2U1Yv1S7Y5EjEp17QF3QBhfBoyWUgZq6pXUNDrMsEdFVuC1z9hBLCF75wW3AhVw6rNwtJ7nd",
  "key23": "4LfT1H2tkzXQqPE6uj4JorZM2SzKWesfnETrhcFpaqufXp7NqGazQ6GL5FkKvCeFo3tDyaZJoDtbSDq3MSaSfAAH",
  "key24": "5p1BURb8dWcKeDKxEyLGqSyxDGeigRz7cbJ1ToSHXPkZwkVx7tLLwffLnS6tSj4jfgLcZshovxzyAtmdgpFdPV8W",
  "key25": "2TRX5AGu5XxBCmMkSjLqrGJ4NGaUQfJusSnenxnPk6f53wnCbD7EM5JBjFZQBCwmTkkLNRTEU49KHmqyY8p3icEo",
  "key26": "5t2m74HhhNgk5FC86AJUX4KuNbJgUf2nVABDjJrw8vGxkepqiqVZYwTfcwhEcTMM9rUVuty58tWfqGkAbqNGWX6T",
  "key27": "4xu3Ku8JiiKLhZVat8JdhF7Y6gqHdChUMx8cgKEsLAhtCk9ChcnzMoaHuyHJo6AcYEB42baWaJQwUtWb8EsEhjQV",
  "key28": "3E6gEtCdpP59ZypCbkk6pWPfxuxRkkdvfNcXZnAiTTaP3maXW5zLs9UJZqdpTNRaDGrNyVEbCgp4AaP1sAScdjWp",
  "key29": "mGDCnw4Rfo4GzRuYusHdnoeVAJhk8xA2iFjZnprDytJDMhEDWmTCAccXMvzdqLR3bhSjPDbkbs6QRsYD6Jyjecj",
  "key30": "3EMUwBws9sk6hJbq54t1kRA9wBS5bMgbcAtXpdzwZGHdkUvA5abCAgU9FvHUn94hDzV1rBsocNQadGPvCHpcf9K4",
  "key31": "q2GLzq6KBueLK7mhvxXcdWWtoHE8GiJrZNRrdCPvmU732uC12LdAQWHCosT5SyX2RasLUZ6wFMjEzeX9bp5PNGZ",
  "key32": "5AGA1ijYFa58P13TMUUk4BYHkoKHp24MR8cxhbqYzj4hU1ApPa3Qp49USJtKDehu4jKHDXPfPJjL3LYJxYN5h451",
  "key33": "wp5ShgjJrNRqiDsWvwb4iMDyYv8kWJCeCc1AWdeAcB54uhuJKpFMrbGaAA4iiNgddNkA6chbfrbiiU9xGT46f6s",
  "key34": "3YtWDpVP9DRySsgqjyx2H9sSyECN6YbG4TLg411nbNMczkfKfbHaKevij2QLDY8XpRzUp6oZFyyCbXitBTCwQfp5",
  "key35": "DM3aedfVDVvZ5bwy2BRY139xa6X6uBRyEHrZcgU19bUHN68vLwSpMSpRe4JgZqGfE4f8d79rPV9wFs5KCE8Aj8P",
  "key36": "4cYwS3HPxAS5BR5q2XEGj9EXBghsskQJ677RQbsKGmhMZ3UfL3SU1TEPGnrX71xf5EWJ9iFQfnPGfDb2QsLxp6De",
  "key37": "tQsnRRVAESfm89YZ2apS4TgccnUBtwb2FRHgWZPhCeXhzZndmwjfpeMWfLqZSgp3zFe6hdzEUahUaMW9YaQVz9E",
  "key38": "3TiBnNithTBYvfgnTVdMjrAg9tmYRPrjxUxVfcyvceBYXq1piHNqfaChntJJ3rub5gbLwdeaoWiZVP72qm5XnPjT",
  "key39": "4Grm21DsEtqtoNfyQWdne47uLCJdYVKZ9kx86uEgyVYgdjaMwgApaxGVeVgXpnsvVzgAzYqU89xuddADSpmehd3",
  "key40": "4XKSpYutdFXf9wxKzh13BwX4SvTGmF7fgoRmYtx6j3aLdL3fHwcGV1qSCVEd9B1pQ3AT5hPdMhcTUqBTszFyF9JH",
  "key41": "2AFrYzy64b2vm7KJBUfUvGcABnMLQgGecuqTcj1RE15esZRobP1jjJyp1q1V9syAW1LaE773FT9Kq1rrTdPjkDNE",
  "key42": "44CrRrUVFskddZkW7BPSTCJeKJMasGmrGv5FDJfD6ji2pZ2zTEETFLsaJbRKh9FD62GJ2PpiFG7TijUHH78KD57r",
  "key43": "5n1jSSDJUShDNVfBNydNtuqD8ZzfS9QWAuLf3y7gVnfAGBTiGU3NvY8rik2vyHsY9FttvuzvAdpA5eY7XYHkvg9s",
  "key44": "5Q1kZycfBKoJNJDp3YLK1C8WXVeg1Q2HsqaiXqbBhL3JEpZSwtpjXsv9o5yZk9hn8TedxFWDRLEDW1qcjWpCNvEM",
  "key45": "5vC9YVAXdvKQi7fdMU8WfCEihw9zw8NK4SwzVEvJ9XVejXHe2n5pJ2gwZHFKsVez5JEAvtF5B93rkJmLfiZZM6up",
  "key46": "4T8n3CoKS5ABZySEfmTyxdWmjj2auMuyt3RJyivu619itoqTCiBhwsvTG9VqbWjsmEP4fHqbdGn9vwoqKnbAsGZ3"
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
