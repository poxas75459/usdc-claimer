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
    "5Cd7WnatmCwJk62ZWets9NTB62rusyHaVeHVL18Am5ajkaHbrYUxgrL6UVCadrPgxbpQfPotL8dDhU5ywM8ArtEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHa1A5Si6ggCt6Qe3qKytPFpgFecxxELfntpiex7C9NQpV8Mt8NgLHtRxuhdRJYWsR25hrgFw1kro8Y2Vu89EcB",
  "key1": "4TcELBF2qtMbPRzA9BKvpVqGfnh21SVauB58agfs5kB5KCisT5ppMb7YdhXTnHf2vV5SAyvCWVqB6LAjRF1CREu7",
  "key2": "4CgiLLaFcVbd4vS7NfmTrm59ENT1ZAXbe1jbByocG7yUL52zgMC4UaA2L6t4mheTvCuchaUWmc9TDkvzwBi1PTaz",
  "key3": "2DVGgGx1VjctM2MJVgBT6HMAFsXmVf3xzRHDia4FFCqZYP3aXJ912f5PorcUVSwjXZHGsyekxCrkCtMUq4nQVC9c",
  "key4": "5W5GBwMvw2PXeAYXdHCdLTunDas5brbp6Q8kXtqkkbPS2w4Qn3nksLmLjSUf1uSZA8YyyrLWKeUWqSCtnmnWJv9v",
  "key5": "zMDqbRspEvL6CcRyCsKJjHwjtyj4bxLZ7E5iNtbHYFkHJcKsc4QzsDPaoCiqhiwD4kdPPWCFAxLBojWktBDfxnC",
  "key6": "495UT15sdwU8KbLHyBknow1GvmhF8cVguzqboUYD55K4L1cxWnFpHqnACb8RjYHiGV7VbEQH5mjWJnnW2DN7Y99Z",
  "key7": "2ivxuKuHNKL7HtVQ5UoXLe9XmXQZwsKf7gC2LFTCjVD4bTdq8EP2PNtwDcAp82sdhjnD1RW7ujZWth6wz7x9NpmK",
  "key8": "3Jws25ATqtLKP4wpFg3wrcEkQZctJJmTTgy5GhB3s5LsrZFgtrCnPshGon8U1Z3gjSTwPTQ7StaS8k81r9Fvtyx2",
  "key9": "3DGWt1oZ1HkYaEPDDdqtVvFNjpbVqzTBBe7pjhzaUVjdeH4fZ17YNbw7LDASi3bxvna7rWP3hEAE8wC8jZHgLTQ7",
  "key10": "4dAyymWRZZdsoJQ7T3mhWW1F1n9NKXA4pCbVvvYZTJ62RVUN8QiwZbY3ssSzCRZu1hrvLcJVvHLpokTSnXu8GhfW",
  "key11": "5m53csBcYDWfb271hPKrLLzAL3igPHRaGPRA5QXE9JfciXDf3G2nzJa41hJYAbCjbnB9xComKpNBWsRegd8AmRcP",
  "key12": "54D4gd4JdMmzC1PVqYEgCBgntS2N9xv9xTUHTLw1frzszaUFgjn6dpvWvZNFYbpryJAfescfy8DdZ7k17z9RWrEd",
  "key13": "DBu7RZjX8osqZPR2HPddtx4fMBkWYuFHDrnkzLYX2313NrtVhCDWpyCg7EmrvHo5gDoAWyBxByJoXspBU4VZcQ8",
  "key14": "2PvpQHxiisDokVsRP5gX7JnC6NxYfC45CB113vWmGuALWxc1BzPpkQdqEDyQqwyyaMv5GjPBWcCHMbVkGgY6caE2",
  "key15": "4kcG1d2649HAfVxQq3zQiZPGE9ZFazV61hyhTF2cX7SA3Ahgdyn9C3gxgxWWS56ifmQfjRxYvUU7nTmZRJUMcxAw",
  "key16": "2Eo3HtEHMDVeritNQqwENX9qgiXZnLaf8LybS14KKBQe6yBMjmCqE2547uVVqLxEZdSyLY6RYw11tURyn5grfvRE",
  "key17": "5HyS8ejWQAR2SXkfFi9n3wbUFEUuzEuppJMSMSviMGJhKEjoKkfJhwhVyMGxRK5ABD5wUjqnRCv5JTeXy9zW6Hjb",
  "key18": "2Kk6HHjs8YBT9oPDCjN1Ya8rv9JUw7z3KmrAZL7o48s6QJXBV3BZt1dSt1jKUshbFRs547ba9QsTWgeCMqrkLtvi",
  "key19": "5jqdDspsZ9gkokGwteDw8UEMPm1xZTqYdNp4uUCnCoUkXpecERTsBQyBypjfeJ1gT1VbCCFFfikRxSwqjg5QrUzb",
  "key20": "9suoMkop4tumn8c2h3hFSuQ5qoJmU8obNyKYDgcxmkxfrq3jwVNyVkjznNooyLBunaorfgodPhgdoRqhs5QiS5n",
  "key21": "3YAAiovJyHDJfzp18n7rEHpiwwyrEWmwdAhJK7fu5DGgqimLQpokKdWiXdMKgxqfYziRXWuicXiFUpp8pB8piGpj",
  "key22": "2DkZFpwu8fY8rXsU8325qpu15xSgEmFwvMf4ME7QKRweCebmBa6qw6yM4zZUNr6UxLJJfvvrhkymMMGJ83jgVFmW",
  "key23": "4AjNqQsfpyga88xFU1VZH8DKgjGSH15Xs985cAyWzcK5gkvymK4QkeQotYNEnBbEzWrBtp2UbzWiapYYCPaX2uK9",
  "key24": "5Rnu6HrpUGqvykhkJWEVbV3ZDKaZ3n7RQaAJv1fn5EjD3AUuD8YQ8QbcjZxoxDQnTkyUkd2SB2SovmbCPRepht66",
  "key25": "4eeC1wGnrRpAqw8FiGBgcufM3JyvEZstcrFfWpS4X6bWuAnrX3VceJUMwkdRkFNBdWGhssQG38WV5apMNZCVLcia",
  "key26": "2eiVPeBsFngtXCEcXbWhhFAzya2oLLquU82K2h4G9XwLEh2XnHbgpFCqWhpW4gZCLEsfKk7K6aTnhn4jauzNdXwZ",
  "key27": "5mrWivekoNDXoQVEVSyr1dACqYgsVi6Z4s61EGMoMJiGACD1Hm7JvLD5XoEB6HgbpRUbpTPjDZnwSDTKoAZohU7p",
  "key28": "4SXBojc5cwqkWWV62vjQtDTADHBBWvXxEhYDaG19ZT2G8SxpuMNnN4KP4DcH5jGNndbtpLc4Lqofagejn7UFSvV6",
  "key29": "5GtDG2PsjvRA3vEPfZDH7hEGJma8PcB4AFuTDpbUFAWZYePV1wZgRuHZSjRd7eQ1rvXhehwfWyaHv627KxR9iMWb",
  "key30": "5XxUSVaYh3uvDZKvmju5be9CysGd7onqbEQgrKqDrVFkBcQpKCp4Z7xyRdrEANezeLbgBNhCWgaB8cdsfaNwiEBs",
  "key31": "3qrY6cuULrwqbxvtq6ff2kSjY5QukU9zkctmJvwKMsv7eCUKLR6xt9UEkBPWvce9oW9GNG3uqhMDNBA4eV1u2RL",
  "key32": "L4yCTA6dDSX6XpxrFA6Nma4NwR4bmje7YprkGrEBoQzMBjEJfH1tJBL4tUwu6wjWacKbc6swKbprZxRoxZ8BDn1",
  "key33": "2a7m9FEH4Rw6dmTwSrFzZ4mBzKc4sT27DicT8n5DEvuLzryYpBbw56kF62Y47gEkPfM79zcVxYGMUdkKmhjtkdE3",
  "key34": "36B2KREh58jpLayEyEheWQMdWwBMJUjEog6UX6ATUGohHeVH9ebm1KoVAqvn17DRUvNu2MQwYJAvCRqNqKeU4Lu",
  "key35": "444mtQrrtuZz6HrRKKqYt8Duz12bLn43U9nXyAVbteDoUtFFbxtcyz37GjB63iAcTcxx55NQwfruapjRM3ccB9mB",
  "key36": "48d5S7i9zmMFZPRR7zsWnBFArRAX9vAieT8WiWT8dqYZq1CiNn2ftpnwMgmMrfAUEjHE689uWfvgjQgyXr97tJ31",
  "key37": "4YqzvqAkRLt9vkrraNf7Nj2RneRakDFSFVtqMU1ZjeEBgFNmrQAtXwhrmgEnzt4XjdfL3aPt8o1RSJ9uMdCW7wxE",
  "key38": "3fsGPz3WcCn6N5azQTbJWj4Kx7QVGYF2Y1sy8D8uDUkWjKBMMezd2EmXGpjwmiVhQpYk3vrxt5e49cosPuFkMK6t",
  "key39": "3VnEUfDRCAgbSNYbYKQCb2iQJMnswdZv8K3dWZTdR3Q7YNNatxgHgMDgLiaFGa5mqWBvCbV61ohGe4MB27fBEvyH",
  "key40": "vDKy2pAg7TrX7EXprK8m4Ny28EMbhVR231V8tPTfaBRBHVjCApeN7kNknY7LPQK54BX9d7xRw9gucYvHpdNif6n",
  "key41": "2tdak7i5fwY58kYJFYEdeuNgQYnmgS77KenRoVPM8b5x5wB2Sq2ELj2SkCXDTLSntvFV2LYxh4P4rZe4nLe2GmHH",
  "key42": "d9ZMj43fvnwqCXMwRnh4df76UvAHKf9552KPUFV7uGbf3c6LtqbwncvZKy2QqcksvwSW4DCZXTnhy1Eitn5x3Ud",
  "key43": "45zKwKxCgmaU2e56sb2nhhnyqGS88SKtp5AtGJGYiKYn3bdvSwtaWAUph511UUkYSht2kVxqHSxKrJ4uEYkHRhs5"
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
