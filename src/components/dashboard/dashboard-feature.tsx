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
    "54WomZFEb86ntoc4G6d4GZ5Mo2kpVsQbFb8UcAHjijvLGgKsP3pw22YxCX7VFPwCpkCvneQfJGuikKdoCA8BnqU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Us7hLbNTU22gC3wGNG6mMxEJoFk9LSMurxcaAy458P7AUu88z965YcBuE9B7y8oWMFfnRXsi4qNLk5bKvCENn2s",
  "key1": "5BJi7Akhx5KLtwf4MghnsN2icqWuui9ene2jP8wz1WzVx1NwN8HhMntfEKbFA1B58jW1XCw7rxtie5J728u58VfY",
  "key2": "4LfxUB9YPL76WpCtzD85556JUbbYWk1vWSky8hLFBQTVWbfZo5bDwMAPgMr112QGCLEZLe6nyxC1dHUiVmSUyuHp",
  "key3": "Vu88nVh2kZhNngMZvZunQedcrbsu4UwWGHxy5J83vKmTVNDFEem7NF18EFpCnuMYbkbVC85FUXFDAZPDWtRfgJx",
  "key4": "GgcRyMXNWxpi34eXAjcF5ZxYeYr9z4hM4dDFh4dSzD1DjDGTumZ1LsCVe3EUvN6pDpo5Rs7xsErFVGWjHMSceQJ",
  "key5": "5ZXP3aQUAgzuKANzgkWikPCkBNgUocN7KYrUZucmJoYAXNWhB9hQc86xSS85aK3txYTKCmmR3S4fGbyswCtXTe8y",
  "key6": "3DMMEzpSWenCBHqRqoVBWW5rkTtXiqaz6saSraX9iZbw958HT9dEGoptbF8ZLjNNPfMGgow8dxU2rYeHtx4cuF2Q",
  "key7": "4KfNkwF3Egc3SWm2dkeWbwxVMg7sfMJfHWAVj8crg3vuMszavRaT9n6KcrXFjjoi8AJzCHVy9g6FbgtVX59efwDk",
  "key8": "5gVsSJq9ADY76wPGPpJA2c7YsrVuRAQ1evuXV6WAonWeCWcE7mc7cGVcYWnRWkjWv3FRFok7P9xv2T6wACbpWr9s",
  "key9": "4e6JwoLmTbH73Gp9TkLdy88Bejh89puLqf1zYKXpd9LUh9dCuaYsGmdrxRsiR4omscmNKQhgcpkRRiN9PqjBjZKd",
  "key10": "3cBeY5a7aFv8zjtkDgcgJ7txswsqWoT12fwDRQV21ph9s12QHcSNauyLoocnsEqHz1pqPDSmBW4W13UrY3NQxd6x",
  "key11": "2k1ZVqBSep4oYf8hMLdUtNnrYU48NbEtPGZedgMWkbYkCpCuCuji8jHMxXA9ZGyJJcjwTvDmq4DqKLc3S63sA2Ww",
  "key12": "5Pa1c4D2NJPaSJeU9DGMyRzxrCoweXL91DHztfj4TsxYzSKnP1iHWRY8Z7ahPaNkbNJqL2RAR57jJickG7AJvr3w",
  "key13": "5xqXR1cAwTtpuTrSYvxU6E7CfDgGs98CGo1WSVGrDmPjMfAjq5fFBkuDEf4UXyczfCWs3NVMJEzmgT2c66osv3eC",
  "key14": "5rw74kch8QeYp98fbEgyxuthCtuNNKaQVuEY7agnsLr8dnvMeqwz7BQCF4KJQ3tDMDRAHgMJ2YXJhHjD4S44dgAU",
  "key15": "7CCwvji8nwLSzq9jjjiUfpWQdT9oM86rQehtdPHyiEVG7c4Wtb9uKPCE835BTKxTV4e1wsSCHmJMWkAiCX8pmXJ",
  "key16": "xTcNiVFq33zHR7Tab2opR8iwQ3FBQzFTeJsiodLv2UtaZkqedBhEkZHGRFdUeC2mDdgdMuHhCE7h2aYiHRjKLZH",
  "key17": "PmjBZ6LLXnHecpxVpUsAsbjHBEkJqaAK3Nxi5uBeJefpTEttkc8zexGyXXXza37epXzB8e1zroUdRZ5GoLein87",
  "key18": "2Q3YSLmgrv9QrrgCH7Wmcccd1eVgHr9F2Aepae9yJwitnGkmXmBDnWMS5FDB7gjhVMZ1dzZJDBK3GWDi4KebXur9",
  "key19": "4W1hcnCr7e1wLCfPzjTQzYLgAxPc28YKAJTVRNsQaK7x33Uv38D75D2UakjLNaCU6UJ4YzLhjQ7KDUb1bbMf3o4q",
  "key20": "3j4YYRBNPVGrSGxumx92oEoWZchKMdYa2LUXvnFzTfavmdtqb9WBmX5CKHeJbZEKXjXyzKwQ5XQrHJUXM66qDvSq",
  "key21": "5j4X16DbQccipBxfCmBzmh8M46qL5z1kgPFUjubCoFsPBcNhvKAq4r46eFcYqCrM7rEtkCBxAGeiPAAep5oKcVhR",
  "key22": "2131nJ5Y8TKJzsXxjz3sY19MAFSMZZpPj8hv8QYiTxDebMBYStyqcKybUfZGakCQ8q1BiDtW3NEb6ZwQ9hsBnYn8",
  "key23": "2WVLYEvWcrBfGR1mMHPXTxAbFkkrmjdLhGMREiLJrqxyTmEZg1A9WdT3vkCvRwJe3LDmwHaqJq46QUGqougmm3ok",
  "key24": "4FQursoV2faPCyMUiruzKF4fpgbvpcDexqV9XhhUtuGZKeV3TThk11yebDgu8TCAUUXYSvZeRXAkVbg6LFczhzLZ",
  "key25": "2buvevEwKEAMyBy1t5L5w9xYRc8qq8rSBp7ohiVn2F6KExoeRXo4F68aXa4XQbnCVGJC5maYUh4NacXgdvSWDe2s",
  "key26": "4Fde3tukRW643hXZeCBVTAVqWV6aTRbNRummNBNXnsJ69AnkbDpH4JQufJYcVYrxvVTygGuKXgwjLa9tBvfcxvfF",
  "key27": "46TtKUpdvQCzp8FzwhvJoXL9zLkj2HfQyBxHyeK64B8CrmFvn8j8diaiS89a7Jgu1YE8qmq1ZY1tn1dCs5uhX6FH",
  "key28": "3GKf3dZKXvGnY4yJd8eHiK5NQEgvkyFaJDN7WLJ7cHmAeDtBsYrjjfpCVqjjepG1A8fD2E4DMKjk3eUSNGBUbGQ",
  "key29": "36qP5oxzY7onarDWM5NDJjSCB3LWs3Pi1ZKhC1c3Fp2TV1xwx1iGip1X9vcZmYY9Un95HpPtdPR72pWSofv91XV2",
  "key30": "37FWtXAMjVaaPtVYJz4hASmhkZpy8chNDMaheYdzWiwB824xWEeR7eX5mVCfdz4i7PFPAKCxpwv6hhFAad2E1bQ2",
  "key31": "N4K6S7aN88m29JzY9hwGC7kMYYmMvzwZRi7JbJoza5K5B6DdUHwtaU8c5zkbo7fLkCjtApShLNSthZDvLFPiQgj",
  "key32": "5jEnkAxSh91JYv6DyeuRDtvVL87C6FWy6Uof3mBqCwqPpCLSs7Q68xgZV6xBZaHj7yfBZ6XmCzqeT3dfvUn1pKo7",
  "key33": "2jZoR1jcfWFqN1s2BZ4primkHJMaThtAYRNoACXtrxiT51tnjdTSA2EuFRdwf6AWRyCv8GdWD8Ny3hCAq6QhKCUL",
  "key34": "5ssgjWkVtwfkPUN4HgMg7votLT2DVomnoNvKUsKHQTefEo2zZAsDi4BuK9mvLVFpNrYNKL44brzVj4xaQ8BhqrrU",
  "key35": "4AoESZM4jbYxcXu4t9JxQDmmAzLgWKh6qUL9prVxGYF1qY6Qt2FsLWTmf8ShXPRQQR2gTi7Y391mnywPv6muP671",
  "key36": "4hEHQX64LAbZzqnDm7843w57bHg5gmexfhnAyN7kAoYMePd6QPPK33YELnXW6XZ7uanY9Gm7DZ6mLTUmyRyV6x7K",
  "key37": "4fg7BkSyYX8Xm2G8o8mgMdLS3fWuixcxqJgeyC6eWRpd1HgyHXUr3NWGoGA4U9CZ9NKY4bk2cmh4T8XSvDLpG57r"
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
