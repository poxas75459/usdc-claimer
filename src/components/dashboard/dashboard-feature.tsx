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
    "45oDNaJLhpYzKGzA6pkZaGqGV52NxGornnZn79gXbyibNHSXYAF645UmZ4mxKqkKnsPfp8Ne3G15qjSVvzeDk2ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aoUM4WJMBEZvz6u1FM8ZG8MqtNH8VbYvStx4FVyNksqJUDZC5ufFA1HeFjbVUCeCc1Z5TnmnRMwZEWngobk2ze",
  "key1": "5w7cw2z7F14R6NnBChK6jt4CpiRTXYZf1NKKUXWiFNrfdMhnwFZ5BvpaFk8ScMjT9FerpMGeP6X9jjPNadSo4nYS",
  "key2": "4enwHmUtBEggVUzdEZzvrE2FSPPpQw5Au1ipYzSYkuhhmfR4iqmskfHjg4cbnsLavNtTqvrtEsDsL1si7njuFVoM",
  "key3": "4fyPdK7L9sNPQ8VD2Yxz95GJaVurbRLUthVeX3cEUP5RfkHxT5ep8RbGdrJw7SpkZNAhYE8YE2pNSLSaQuaswhgf",
  "key4": "2JwSXCSsWENFuecGnJXAu3JGgB8mqyswZCEdTaZfoASKhXxLwHPqk7UkJ67iy8dnBvJzkxmFA5CzpqEywqg2jdyu",
  "key5": "5PjUEVwmvBipHetPAzQYaN4UX5bKuVyqPae69UDezpnt3Nucz5G4yh9b85jhhmu5oVi2qbFRdX2Kz5ftQCb2abN8",
  "key6": "2asoS5woBsGMNdqByx6bQ9hAPMAA64TkPNsJNpnSrqMbDePhkse2cSmrd21Bo4VYnALUcEirxPhuK74Eaa5sXQk3",
  "key7": "FnsgiuMNfKAafJB5BTGQEPeygTCwzd1dQ7Fb9XHeEuMEDMCrLL7Bb98i3EDpQJ2JyKzoyQJUnJZXGoWn6xgZsyW",
  "key8": "5AJonHbB8HUTzpbRwrPeggKtPuZvrD9PtP7eM1xgpbBTLkDro63evZDVbG5BJtLSKGLbra5ZagHLD3qPMxqT7fb8",
  "key9": "ihVwsGKvHLja9dawSoRoy52g7dEoeVyisRVeWh4uJoagSmPAJppR4zk9cJaQftRvgpW2stjyvKFYi6V25TGGSjz",
  "key10": "3QV7qen7xS7sKvsQsefHveefXDx2jWi8urZnwZtDYVoY3i3HXqBtLFxnweB8q6WEHfwzNQiXFt9UPo9mLzA1VkGD",
  "key11": "3bwJzkUVMKppNr2ATaW8geAZXjFQLTEvqNx2xYxdv51xwMvv9ENq9uXgHs2ipqcJzeyyvsaL72QpfVdSDJ9CTXLY",
  "key12": "2wvepfpLhQhaxEDgYQhCesZ4gMfXpx9NETb8ZbPL618gDsgK6M1qX6MzpJBXCUdGjHkqEASuZW1kZPbEyLLw9r6A",
  "key13": "5PyAkJC5yFkfGXtfBg9XSxCKdqVWfz9ksCWzBbnhowiFDkAequK76yzMsLheafkR5EwRVxDRw251kf4kAHWW31Hm",
  "key14": "5AsbWuJn7Jone9GkcVCWQ2rUNGYvyqsFEZbcu2mZWJQ98Hm1mYoMM5Sfs95ac4K3E9C6oV49igKCJmYrknHbMwZF",
  "key15": "48fx7YR9iKL7BwX7amRiLRHyCpf8b14xesDGReZHwb5HRriGUCtXdrEkF3ZT2hjLg5Yv64uPcdM6zqFb7hBwgco9",
  "key16": "UErRDxTeTCUABt2DoVuih9XwRZVBrBtGut99vt4aJt7xfB1SCtnrgL457Jr85L4c6dqW99mgcTfwSKiGiQZmduG",
  "key17": "tDFFVSwEb69BRsVJ6kWuYAYka97zNAczVoqeWELx3Ms79o9WJjfjUMyNDJbwfcgqVubqxFFqfHcSPiUUAEf98QM",
  "key18": "3Jh2dRzTacSucqTNviQ6REpoNPfcH59N7RjXTEbFfGWuaf45oXnTuBrqpWc6txS9GMwFqdTegRq91fCQMgFCsbsR",
  "key19": "45g8uXWUuG1urGSQSiio5LUtsLwQu3yrMo6bJsXXkHFvd9Xd8qZJ6i48cLhtUPntTrLa3LCCJtrYEtMKMcr11ghe",
  "key20": "4K92eYtYjRU6noBtYHk3z2pZtux3F1iJKReBhTUakjfNBRA6mUny4Lt7WEavDAr93Ymbv8Na56UgcuEPuqpbXMvH",
  "key21": "5Fs9GsFwaakqc9faRH82sLmCGdGj492LhmVsyWLre9moDHo44eHPTaC2YManurNiCQdsfBnt595Dihwg4uFLNnpF",
  "key22": "61Z9RbHLLdXmkQ1b9BTi1ZwKhN4RmfsbkQBf7hjZncqnepr7QLJnUrdygqzVLf1FLrgwFrAUureHF9fcDjHhr4zB",
  "key23": "4oZACT2SFE7cdicscDBHdhqq6p6VXmqhetx55JyiuhghMLjSYC5NzQC1auX6ArP3N1AZxo4SHREBuu1AHcEzMozC",
  "key24": "2GoEANNrSDdgD6Rf93NjFhpjAGSkgLheMJ5uNhUerebYi81UyC6icwnipV7QnjkivD87bTnaSpsW7uKTBa3iBkBU",
  "key25": "2oCkPENF8ptk2fmAckiomRhR6zTHxGWEynZzeL7n5raRwuDgSWQ5CMa2wjbFJR6NvjoeaZwWTyi6CDauTRw4m6os",
  "key26": "2jSuc8X6axQJ88zLgdD7wFqTQu4NBgdLi7PmMx2gnUeSZcZzJ2SBaCGp6RZ1ebLCSUwkjtHFM32dWYbBmDaVDKx6",
  "key27": "2QQHeJQ118rM1FHoEBHyTEMuiHCnYc4K7MYmjHmo1sH4Z1GBjS5SdM7r9vh2qKu6f35oEsvUfg1LCQ27adDgNCpr",
  "key28": "g1iaHPrTt58WKq9iwLc3H94gJneHfMu5gHFUUfHqHeC8LDKrmNX9vaQLrT2W4F3WTRx2cm2upPYrjtkoVFMtfjp",
  "key29": "4qBDXfPZZa9y91nw1jXAXmCjvVu31xCC27tARJ7dKLA7gbJ3wTuskyCAKXHy4h6iuZ2pNt4boNpmCV3EHn1MQ3Kk",
  "key30": "4gTgvaE8f6gG6g25gGatMQpmH2tEXXHvDAsEi6spXDJzmh8sCG2Rs1yPCe3s6RkVGZYoEuqmfWVaSN936Xby76W7",
  "key31": "7vWUwga5e3XWUfbxw4zXSNnqiAHDLbwTqHPmcwvs7HdKo6Ge7QZs8CvG2pL6Ab6TKk7W1USNXZFBJR76HxV9r5R",
  "key32": "2D7kdK1xTQPuC3dnFY5FekJJiTmuJXkXVQSUsEV5bRzMDfUJ4cFk6PphB6SfHYq8eACMsBq1D9dLBKBSFhJC5o5S",
  "key33": "2rhbrwsVELA27SASNzAaAJmLiJtFdx6v7p7NkBiXHrn9YbUVs9JoNTBu4izwjtdhrJ1huZ3DxngvPxwmTxrzYzMA",
  "key34": "3c4vacJSRMwVyvGhR5UXyJMLMNeBMEuFvcnfUPZuhBNQ31uRpR995pkQLJXN21GobyBtqgrJhPYmwY784Um64XKZ",
  "key35": "53KmjGae8bqU5b681Apa9nKvn9GYFG4G9ABg8273XGKqgEbA5Bbn4pVhLHprFcrajJnDwfd15HcPW9f9VQq2Qhbg",
  "key36": "5Yadx7EPW2NY9mLWnvbwugS2bXcWuKV7Zk4zwuYFUSKWPEV3wT8bSb5L4uMnNatAGPLtfu6CRpyzFG68htnEUm3z",
  "key37": "EXtmd4sHhTSqbmeSLzmYWW32mScdnYxT3mXr6sXZdaj45iJhNL1GqzdiTsxyFTBTPsM8erQXAnVt9z6t5boJ486",
  "key38": "3S7YKPCMzDmodRTv3WxHt5dHCZZe2es2NJaAf7MBgAGqzkQ9dHykkoDKk8s9vZPCEAv5rTwHRuSw76MntEs3Mw2h",
  "key39": "3jEGwN4RH1vgbPhQoX1vuXtTHw7coeLFap1ZEWoRawJ1BB3jTdJBaVZNzMtwA3RxaVQU8Aeixk1jkgH8UkKdfsv8",
  "key40": "vYFrNtm5eAHsgaqGze4YyLJrRe2LYw6zZLtkhYhVMQ3Bi3NNHTpAHJ7BYtcVtAvpsZQZRqTaukGimaTtWjceRQt",
  "key41": "4MsK7a8jKutmwSe5dbAKcLRsWAHdwfKVQqseHC6umsPkHLXez7XamdBycaPFDq7BtiKaK4UjBvMZVxL9KaEEfEKc",
  "key42": "66FMJiX6uTdhS3CBUGxD74VC2nUywPdREo83afvwCk17NLEgnHrCLLrjGhFnNgFgspTfHH6TNsNaHxfLrcRp5tYp",
  "key43": "j5LXmUChwRcJwXLAcm9yXiYBLXoKzegw6wABqrgWkDMQdon2Zmt6djuwouvBtzbZ8pDShE7pST8C2eAswWvRbVT",
  "key44": "5dhLrzNzAaujTG7sbfZwv9j4NNnVatF3SutKiytFUmawLcxPqX2kk5KLZxP9UxvDH5USMw2vjEc4PAhostrvbvGm",
  "key45": "5kf67hG6JQRpNS2nEGaDK6kXA3MMort3aEjv8HaysTqMsTZdf7xYQVuXB6q23jPrrFSZkH95d3HFYneouwSy8ehE",
  "key46": "3BcTDUuxiCXg7aKnWrvVLHXQcpqkua11jBf5cQEzX8Fin8BTs2vzgWzgMmG2RcTUFLWVPNMriFaPjAfg1YKxMcbQ",
  "key47": "5GgtX6WKyAvS7ZtJGJQiKx6XYBGuM5G11LDv1BA4bjgFdiR3ybCGHAxRQYSdGwG99DBMByCGnFxRhMwQVmR7Sp9F"
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
