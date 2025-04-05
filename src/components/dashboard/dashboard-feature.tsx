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
    "5bwVbP82FSrhyHHhE4aYGMUhJS8wvD2o4QYDPkpxQ5f6tzo8XRRii3GEGBbgMoZHQfiV8GjRe8UVeFoaPKFGjSG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kBhAZncNLHc1JXJMnbLFPrEUM8xqb2fWwdVk5bNG8WKdSSN6nAbn5rKo1nsTSKQPhvDFaEqhNs8LcDbSbJzeGh",
  "key1": "GSnBvwELBUDEudN9eGik3Gb1dVo3ZoAsABhrgTXE3p59w1CGEgzwj5wcH6NvDYKZGjZYRvnaZtpZjdis8JQbqMk",
  "key2": "5H7dsFJ6fuNBMomjSgR7BvWQANoW9Yz4HkT6ukgYaU3QZLgWRrNR4LH9QJw8WpnWQ966tG7qtpC8jJEvH9VL5vBU",
  "key3": "tcaq8gCox4K4VVQQgQPYL38AaUVCV4ZdWU6j1BwC8wsfUjtCf9bbXKwQWUb1e1kvXvU4PHGc8vQxHMeLpxVny2Z",
  "key4": "22tkJVe44Pd6yoanUqqQymuge5jUMfBv4fFoJ3m3WWa8aLaaSYKrPKWib1a8UqEGRuezcRFkagXJ6N26vKrFrYzq",
  "key5": "3zxx9UGf5ckUGPstqubfaTAMiaFZZTzEjSbwHon4QpXvRc5Q3M6fePxTqBSmM6qGnBCYG1qazHyqgHYmudpSbYW3",
  "key6": "gBkYYuWNMfhBy2h8Jh5waSVhJK87AFAhpHQqLNpEL3phvjXV2vUWuBkcNhs6YFfc1ZYYbRn6ivanx6iQwMJRkgF",
  "key7": "3cMX25Y38bLD7cujZt758VAytVfFmxqvQgJSaKkRscRp8HqzJ2nGCUSAd79sLdMuEKzfDjAqL8jHCw12GPYWNcEz",
  "key8": "5LtdvJg5kwmMTo5e2oHpbThznfrYhTHrJRWRwXeFPZn88SZwYVpsym6Hk3DvuvyrAGzhvzY3qx3cfcweM9QAWmJq",
  "key9": "3HJKFaPg1erxnPUc53vGopi56szMqtX1t4U3CbejXExPCEfPzYqs9dVm9hqM4QC3UjPZJrp169or9YN36QsZXkYy",
  "key10": "4PTQUDWsNHLWqD8EPRhwzwHE33ZoeUDd8p6d4WpAF3VtYWY34T2h3JFEioHgrrDDyghCM8oWZdgK3fCeEeEXmPDi",
  "key11": "4PRcKu2iRwta8tsmxUWkZfvdT58YzoYWQEXUkfZBkXMzn7gxHbeLSZ3cpnSy3ke6gXZnyrsWzbFiy7e8Ls2it3JG",
  "key12": "4N5zx8dwdq3H3RPkco7VUnrLScjhmotBMaU2TJAMFyX6FVachnHJFQPiUQkRfHQWw5uxRUJdvyNKWB2NnLCMoqWM",
  "key13": "5gWugDaXatweug997KDJtLSjSbzGHrsztvxKTak4XZ6iW3K4AAWyEZGwatk6DroQpb3Gb4tkUHYs7AScKChvWzea",
  "key14": "5aFbhwysFJ2366Ckm7ZRzYZ45fc1tM8bbNF9DJR2qk9RBf2JDWusytvUw6L6MHGg87DJYWFSnGRXdtJehBFHRHMd",
  "key15": "mEn26EWdJuQArzxPD45vqqcVFjxxQg9yfRxjA3H6jyULDTFKfP7cwzmdLKS97VfKiWiHwGc9r9swnPtSzKhGsUt",
  "key16": "4cNQqbUJEjcBt4ZzLFcxeC1BjPQp3sTinjBtzHsQJVrTRZFwi1jsRe6KqZ5aXqcVDEaqmyb7wZ4sK9oUb2bWHZ87",
  "key17": "4C2Ej8nNqZHRVhFmRfhjZmExvDGy8WxZ8M89n7nFxHDNnVTpwMFgoGGERtUDnthFMvAj7yywfb4gz5spyuEFpVzh",
  "key18": "3Mz9QSLwosK2MRmvJz6LmRazykQSxxrtWukZy1jFCBJnfCpBEpiEJEPSPSpYmzbWXfSZN67JxtRqceekZVcn26n",
  "key19": "Kb9j3k5qq9d7CkBYSH672Ht8E2HVABkNHbHGoA6dr9D5QyGNkrnXHwnUhDAExbGJZyJx1XZoHVUvpXLKQNZjkAC",
  "key20": "5qCcGjjtdPjPU1p9bayULhDPbxaqF9FXit8Y5XEkUNiA439N5R6nwbJXoP5peYBKtHZLvojnvtsr68nV78LUS4tk",
  "key21": "4yeGrqHbsMTpvNuPvTWBQEoLn8nobfK9mEnGek58qLxnjNmYSMF1DJqvtWBPGyCiUg8WpDjNtEtrHq4KVpoLAkwo",
  "key22": "5mdmqKyApdyvg3ZVPL18FjeYXfSGsVdMB5tAZf43jYNEq2JJeBbqJG5bwpUMNMQV1JaZEx5GhA7NtghzwR1jdj5b",
  "key23": "5ZwnPzadZCYtqE54dkacCdxsssnRvQ9HQg5bvWg8tokAnRV8A6wWFcY9MJNS5rNopfYxQ45eWBoaCuMrFHziPy48",
  "key24": "3T4BahFiKAXjLJV4pBGpSmTh46XpUPQBSiAVaTe8F1rE8V62XNtmnjTDvrJQtCvmGuPWhr2eK3j8ToELfwUPuniU",
  "key25": "upEasyi5uPf4GywBwN4n3XbtswqEZEtB8td67TfNS8ZJiyM339Zhso1BhzxhLZM8pmSN9BSDwjZBmD15M9HuwfN",
  "key26": "2RMGLwjGQpTxdAgszqHNMTdNm6h5GM7vTzpxefACET76xEMY8iBuyLhbH2kbvYdiYRhkVKK3c3wDSuPCV9g3GLJW",
  "key27": "4hVP4PVsuYLwi3uQnYVJDP7dffEx1Pe4nBXdXrayEnMkV3NsqsvLZEqkdBJ4QbCMQnmUHaGX1D1VHVdMuncACvec",
  "key28": "mvkeH4rivRH6Q32NiAKQjvPru5LnavXpoyZVXCuZwy4frczji8HkKLHJ2LtQadEc2hwTcWjy375EKGm6Q7EC5mw",
  "key29": "29CGTTpzcaThCRTSq6suUefeYUpMbmMS9QNdmRy3EoY3LhP2KVneXsXPMWgcD7oj9RFHZ4vfjSFhMWpy7G8oDXYn",
  "key30": "66WHi4rAhGpsew2f2srS6V9xt7e2ktcHFRJeoan2snqXhRbFkz1seFaUWDDdMvwdJ3cdPRkprCufJUbCS9t9GuAz",
  "key31": "4FntGzwam9gK9XpuFTDpG1h6pAwcMZQsiSicSFwGrEQXJsth4pyaL2xCtzYBzCi9R9gn2o7Jj3UK5mD4NHeybzCi",
  "key32": "5zHjfhKUWAkHTw4HPvFibQZQ44qsvmzqVtXfZL9Wk3H7LDMREsjJzLsDvcnsFYEd6CBr4uDccSPPN91yZf3wq1cd",
  "key33": "42p8yCVTb4B2F8cD6hTjSbWHFReoGcM2EAZQLpRkX3qYvsa4UQ5gC5oSaBRdF9975DwnGKMVZMGHzkM9ZspNYcJC",
  "key34": "3Tb4HgDotByBtMJiEhXzFxXu7dc9mAJDBHJ2UvQC4tEuzz7XpF6xNtZsjCdfLRdYnS1r8u5eBMnPVNukVsmVeRTx",
  "key35": "2E2iyfHE4qNLe46RhLxW8sA2VubdUNuKdNq7nj2aB9fiq5Fuw1D7BprN7VZjktQg26Byhk5HfrP4FrzJeQv9Wb2s",
  "key36": "99VGhWiLMPkhYidZk5wVeF2CZ78d7DUUZBR1XAJtXx6dqPDDGwxLPvSuRKh9nJxNGk5ALqrmTAjJ25cGac3nFdz",
  "key37": "2PijUkF52YHdr2DhHs1ywFmMYYn6rtt179LRDkSSqtBUYHd9DumjzjzZyoBp8VFahNVs1UY7aCbntf18WWqGCUYM",
  "key38": "2vjNMDy1hirBt1TB9oQr5f63MNwrZQShcDH4vtK5aipiEiLQQyJjvEy4zLFhcDvqp9avJdABX6aWBmqMw1xGXwiA",
  "key39": "31eT5uoGGT2NmLjJ7G3K29XrgcGAvX7V6cb8RiWCZAhjYkB57bwvKA86Xhu2iYGv2DK5NFH3aHv7M5PmbH9JNQem",
  "key40": "tHpwuHGa7oYLUq7J5X6u66jqNZW4yHjtTc58P4w8tJDR1arYxLMmuBqcTV1vniNzY45WbkTvmwq7hVyfzF7extZ",
  "key41": "4wkED6HbnLSRdiLSGJKmDwxq5xjcTKtoWF81kQmEYqSxduZ4YvMcUUw39tcVWA7LYGepn2fc29cXRBAiNSb4r2FB",
  "key42": "SBpNVQJmixZ5yuBbKD3p8HneYYPPuQd4t5TpsAmytgcmexJPLUm91y8mE8k4s99gfqr6VjMapvaQpqcdtAMcaXU",
  "key43": "42fLTiBQR1gX7p4WB3his3xM4EzNcQwBh75cHUw84J1FPjZA7Rrd98h9AKkKUkx558Ggr8GfNrKEPgckUksgYwcM",
  "key44": "63jDVY1SUqGQEkfzKSHWfCj9VHq5kmwTUNAYZKhbZeKqc72GJroMArskKn1nJwmXv9enFA4oaPDnxbiRreVB853k",
  "key45": "3ey9qJY6ruif1FsLgYy11qHvWMgh6EPWv3KDwPJdR7iYqv4fKaJ6qZ7c1RRn4qA1PozRkbkLedTBD91rbwH1PFn",
  "key46": "5xKkqy3QHqN5XKFYDBcaQZQeCtCsTGhUJygoUk1MD92RkGtAfA8EBa6zATz3h8bMPUFiFfMAWUtEFj1AceaMsEB3",
  "key47": "62SNxpHn8UxJT4B59vuYv6CnfDdaRfrmJS2XoDgtrjmAaoL7UKZs9C2rcRr645XkKYV53M3cX8WpsGvMMXw7HtDh",
  "key48": "23RkoKWHyYBMmDfF1nFE4JFPUiveSvE5HPHLttdaETWAXcvHaMvsqTerN6rPhhc1TjWh9W2xyDA7tcPSpzpF8Grq",
  "key49": "37E8VsrPyEWpo4V3vwuxsGUjseFSmuF5SkVu72TDRyU2c1Fc9PGHAsNuBo6F4ePdpm5QNaudcVGsBxHM7xWmkDnU"
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
