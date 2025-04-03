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
    "3TPfvw6As9NAYHwoa4yNCzAYiZfvcnn3tUr5rFeZYGZnrM2AYPKJSRbS8azSvMp7hL6PZv5xvmrrVMDRULRkL6Ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "poPsw3WJ7yMFN4MAehtZiVu1KoS9wkMyLZVNXgY1LhBH7X8W5fpAfeufmD56yovmWWe7gdNpfvMJtRQJAGTy15f",
  "key1": "4eFwLrXyWAKdfnpUADKmxU8TcsTeVXSmf1vjgLygZYPz16CeAKVRohfmvtCm8geuoREkoz8zhe8P4ejMXA2n1pGw",
  "key2": "3vqPuXU7mYgiBz2NVuLi1GLDtYJQYdKcnxW6mZyrKVgUKkrKUxB2hGtG8iVk186CcaSbRMdt9KY6qokdsoR38atT",
  "key3": "3PLjzdVniVv7CW6Bbs7MvvjLrqjvjxdFukz75wnyU7MgwJotFMkQZPUJFhP43FJrirZaY63fbMjWHerVQF46JDsT",
  "key4": "4HZ8DPKjKKPdTDbduKNGehVaYG5JVJjbrXWYNNhosjYWEc1kGf2UEquasurfrgVsiquEynHCcQaFpxw9UDgLY8kY",
  "key5": "5ALErupSkYDsmq5wq6N1mSFGcndntq19qyaizTc67pGf2QqWYtPjaUJ7PNVpQ9F5BinrsfcBuUHD9BZJ1awx9pAm",
  "key6": "3G5yv3khG652bSg1AWomJTk4GWGuDaiMyHVT9kMkqn6KeZpveM9nr138cUSTUsFUphYwwW48tAYcm1EHicv7wPxB",
  "key7": "4cSod5r4gPSaGLJrjPMFZP5wgyhZm49pq1QDovvF5YgKcJscfmcBnAqmckrNGvTDhPgYusGdXMxEZMMLSDwwuVXs",
  "key8": "4o12qv7m7Y6cN2iq2vh6Es4QrmNDohSNcjszHnnSrB7JTEcj8wECCV94GVZhF8XuT8nCPtbX79tBcER3BUFvAoNc",
  "key9": "4hxVidLWqoudzTYwVh3XZ3AdGpx4hY2q1rz3d2jGxdXi5K3TzFHV163hPwSzffCWxVYVnunqbMzSrMatUg9xykxC",
  "key10": "4CBgMxRqvYLMM9gMDYtCLG6mH7Gcs25rh7d2n8bRuX1eeNZbwbS7awsWXT8C67kfi7wtBKDZAudTMNZDNC1qFbFq",
  "key11": "22xLh8TgqcuTQBuPKrzLawqcRAKDPFQ12ZU9vtFcGmgYHKgVsi7oj9KGyxf23p8ujdcduULTsvRHThyiiQD2ZWkU",
  "key12": "HT4bzCjhwtjvRwYSZ4yJZXpxkdKckoVkSmxqedk7evG99KBnyVuN77MtdyVwAnMX4LCSkBxTN4XdvGRF3cr7NYy",
  "key13": "2CbAsYZjUupVN9cRrwmpKr6Rc1cNnAN9faNPzn6P26h5qHCUER3MTRxBcnQ6nr7bPJaDoVzBY5WyhETZdndZCm87",
  "key14": "4XgJcQPZq9vv1KE8iuCFa5qYdxt6uiymkZkLxpzGXkM2XsfC57hq5XbRAYgGXkhJ2WDr9UC7GnfcKmojaQJK4AAW",
  "key15": "5KRQgBeEfqexhfJpTXcwnnQucee1ckZdFoonr37NcvX3HchrMHHDYaSjfbL1vXR58ExLL8J49gbrXjpfo1aQD2uk",
  "key16": "3gXVsumwmBR5ftg4e3DspSsdx4WbAKMeAnMuHvoSP4tCL1KSRzzXsuutQzfrDmcWyvoQdHhuupAr1Yc2aDzgQ35a",
  "key17": "5f8XeHL2EnK93iSBVzEA3ZCdKJKMAppdFgJ23QzX2rx64w5JvS9ofz8HBedXZ53sew87pY3wJZ69fibeGfqMPbj3",
  "key18": "fLJ8aUAGYsF1Pvjp9v9UDDFNXhxxhQgeUZLJbb8bpV97LkK2NpdEqujkjnB7o4zKadBWw7M2WB2hLeVKA384hoG",
  "key19": "2UEBQKGWWDVxxroW2hgnE6bEWtyVGcS5BZ7dgKFy6rECcXJQyMcL2dUgLgp34z1naTjLfnKg59DrHTff1zZvEHHd",
  "key20": "2zKXiQibZGtijgoiuqSf1Dg4wiHD6QHMregrqwGfqkive8USEP8rrt1tyPbozSf7e7df93G1DCtUraLCetVLcqdU",
  "key21": "3AdvHqzpke9TJ6X5i2z4b7fzYZs254SZRhhGZ4PoXNGEjJNPZXF5xu63K74CVDxL2j4Vh3X4xwzd37xNj8YE2hh4",
  "key22": "3dsdWGpg1ruXS8Zupzz4HYfoF7jBwpwVWV58iZHYhYKB3o9oAbZMWKBFGwzMH5pc1gQJo5fTdmnWTdgKabKUP4fx",
  "key23": "3STuGhFdXC71TKizi54cBU7t9jJMFdjsdvbxLSzC7GGj3Qmsz8WXk4Q8jmZ78Xy6hXjg3KvaxcQ5Mvw2RoMoJ3aL",
  "key24": "3iUr1gfDqxmFSbZmSH6FBKa4FzJFTDNsPMWyXJDgQVxoFeoTQocT2P176JAWDWrzRV1tjmtCFD4U3EBuCDrsHpyP",
  "key25": "eXTiBKrVwFyj7rvmn8br8bEV893NGCNMM9zhPoT3TFSa71hh4N7MN9zhn452dHvdLFtyfHh2Z3nFTTYHc985k15",
  "key26": "54MN9pNKgYkUfsa1WE2L4tryNAkxPXPBDeH7QijzSZX8wPcu5SQEMLCRVG5AJy2qq1FgMGKqLzYLFVg6o383AC6T",
  "key27": "QrDjQCm9pveRCXXU1DMm2WWhbFZPGvJW4eAk3j1moUd3QucAETWWJz9pPLiA1TFHa7UyPoyQhc14iigHmk4sxmj",
  "key28": "5kwjJ5TkYtG1fVxUV3NR2chmHR9AcND9JUEKjH5zHkT1sHrdiA2GbwgHV5CGKEaLEtVVSpP6vxTGQSAyMPV7vgqH",
  "key29": "JhXUFY8A4wpf8HGPsaowTek1CSHXjNUgKYuEsdpewSbv1K3T64d1hVvG35Zi6k2rGMyktuTX7fTfCXNcUhgx6y4",
  "key30": "7Sj39ajYuMn7d3BZF5Kg8qB3g1uUMdS5dcRzLJutWPBQnA84EttYAThrQ5RmAGHzjmMAFbMZQqyX3WeWxPYe6oX",
  "key31": "8H8WP8fBnqnDkFSWrAUbg6AxHVAB4cC6uZ59EqxRqdjtFtmJWUePdmp95XZMzhG9EypUL55ApcNRUXtwcXug6Rw",
  "key32": "4zKgHGY2VT4hfDB611sD9dEhbtYPgPArjeCSEmpvPEHRKxXVovgByjJ3bqZFaVUWfsQBDiWKjXUKp1DHbsCufnSx",
  "key33": "4YVkfgdJiTKUEn3Uu5DnRrNmAzyAzkAuqrqtA6jSDdJNqoNpWyX3YkNRTsXzRMhMrz2bP2br7vxomxoT2EQM48xN",
  "key34": "2kGw7Mc6W7jv7dESKqCtKNGSF91wsrFJpkpaSEmTt5aFNY6PsJgSW8FA3XCUfAkbtSLjoJEBRAW9u9865jbqCkax",
  "key35": "23U9BBXUkoWmsh9bJvS4mGH1mYn7DY4FQww5BMJ1RZD4464gZcQPajvEqJnjgBpveMjsU42PPVAZ4zPMR9yYMJhZ",
  "key36": "3MHePgvm6EjupuKuzdP417c4vq19Q3mcnZTfFqdTRvFQ2KFZLVGFevB6J1SSn8Dtr5vLGxkqCx6JcSZ1MrxeAV4R",
  "key37": "3c5CzBvA9RBJeRHxpYhcaGWCEUxf6jqwoHztVFMSowze8yRTZZmcjuD6cNFP1rFhi7HFhx292JYE2bmSmuKEWNG4",
  "key38": "3JLbvpECc9nGSuNQPektVYM2VX43WLHncH22B8Bj7UEkchbQBqpbwf1arMDVeM7WaH49FfGRB3v2UDhiv7crwdHq",
  "key39": "5o3toEKJq4mXmr1hYxMG5aUkPiuNkCrtkpgyc5g5r7aBJ9mB7QNNi52XdXEPeRDw2KgajrKSWzyejhLWosYwHPJZ",
  "key40": "4Cxkfwv6XmdPRYuEnE65k3zqYNnYGTR3xGNC9hjCu3qV4Rv5zMrMFhJ2PSvLuoQszMguuoW9YszUHFuetnJrAhS5",
  "key41": "5jE1NN5Hou7EZnPpCikzZiyyukCprP2bwxjuVEw4zBqMeengf5LFkKUUgHTCmPEFRFiLKW3PkRjMpbVPxVM81q9a",
  "key42": "YRgFJmwv6PYY7dwESjLhwGfESYrpnm6dBPCDaZqfxVzCCHeQv9ogpXfUiLpK8qhQJ5Tk8B4qjjN9eDnuSn9zuoT",
  "key43": "TEKR9jymw8xcovKmue1uaP2afojaXimpxMhbVf3N8FVAhX7x5wF7dqGWe6h3xqBhdcUqABUUudYJWfbk16SWosD",
  "key44": "q6HaQkWnSEj8kwhAWTnP5yEferate5jXZVAR85WXhXDNS2u2SuZbMWdtdrBm869ijwKiCXGeotRfgZoBV9HgQSk",
  "key45": "3bKjPYWMBiSGBJEsCe4Chhmag7yex27fUF266zPZg5F7iJZoCfZxPeZM466zqs2UwjqmJUCdrJ6JAFJxxnHPsxk7",
  "key46": "4CSr8TzNjAXN6XCwCpca3SzmLZY9UMNuuW3vcFumBY9KepmCY2GzF7hh1iAFZDw8Hq5zMR3iMu8pMW48a7wMxi9v",
  "key47": "5roxmMBy5Gm83mK49Nxy77J5kDgQQEdRSYP8S1iDvP3Tb2kspyVj6bwVjA9B1qnBfXSh4Wyyn6a5845h3g2EJXrb",
  "key48": "5dRAiijZincPqbR8RkzDWJhKBdo9etvKALY7bTVNwoQxrQ7xd6FMRrRumanC1PSQdkR8hBsLV1BNZDKmx43fCPCf"
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
