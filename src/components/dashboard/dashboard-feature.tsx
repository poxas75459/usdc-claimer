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
    "4xw4DLCAqFjj1RzEWw4WMuSdZ7fVTQYoms19za4kTNRQbJEp5222weEt8LsUDCPzv7RthiZstYq3gnmRAv1jjzmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUtM3i64LKcecAQCUPvz9ngrFX7hshBRfdma4cXwiY16kcsTYQdPdC9kW5JfYs3YpCSVVkPW5RWqyvfC1e8MFt6",
  "key1": "iL6XLcyFvpaRm29RKccas8myJwzJpuYZg8GBz4pA87X6KRdN8Q9RbUcLXPN8DmwikztazCbbbKjVgFS4eTx9AYf",
  "key2": "dVVcLHc4wbz9eLHdG9La6mUNmW5TPYANVKgow1iKSUQrgfDcx66jdofhs3Ch9cnPBDFEh8WwhNTxyAsktKs2yVs",
  "key3": "2bUjzcEvVs4ppcAjDbWU5pHiiYeBRm4pSsNjhWAuc3PMGEec3u6swRAhRycxkkWAmRkqxqQV6KjKD9Q7rXAenaqP",
  "key4": "3FAgnZfHfRAfjj6X5NSnUQn5MR9dtqmCThLa7DSTZXMz5vJvYcq54WBLHttP7KZVpmPaMUuw9rQn29PBrhK1Gdt6",
  "key5": "4A3TtG69DKJ891MnR8RzK54fRYCPcbauLPeUcXKvhydGRFvBG6eN3kBtpqf4RUmPV133qvBWrurBb8XorFkTgjgv",
  "key6": "XPqMf8mNcrPpfEdP2NXtXdczcKf1fx1sJrtvwmvJ2wHmSCzRZm1YdGa9DNxfpkd1VSc9aKupHsrny3XsckRaH8W",
  "key7": "2FwP5saghfg3FmfsEk1TxPHaJxUhT73UTuyGmTz1c2hZP6VrjBQoceJMHy398WfD1Jdxjp9FGmxBkE9JUTDKa9cG",
  "key8": "29Wir82CCCNa8X1hfixnymHvzUiNwxkrn5MW6NdTEkh5upU8Lu9F3Wj9PeeM2S7uCmxWoQP6Dv63oLKe6JmT2hej",
  "key9": "5RCMQUJstm53Cv1T1GJALKBHqKHqfSYsq1Zapu8mB1WQhqbJmkCSe1DkaSJ758zyf234s26tUZTH2pFFkpAppKNu",
  "key10": "2GLgVGYp53D9vxeiYn5F4XAdfxjmoJBG2h2Pt1wTQNZ8uhiowzvsQwLqjoRpGrJT5yHvCfGEmDtUa7XPxLURzFqz",
  "key11": "4tPafn3JFEeyEr2GhSU6G4DALYjtcoM3Dy9no1DiUuH4qdfD5EwHFibQFgmaJXxHpXEcR6L8X5P4bc7D12KPdE5m",
  "key12": "4xSKy7EN23G32oSuH6u6rN33iJ9kDzTnEEAhgTWQrQL4CXbVjBo7dSsGQJsigR7gHWqMDc8VD1Sa6amnQ6Gshcqn",
  "key13": "5xsJXnusDcCmSrSeTo8QqEYrhyzAsPMrK91fx3551sxRBv8tGmy5SbbhA1JT3ztCEiPMkWWEmyk3bDgTPbDJcYcb",
  "key14": "B6EXDSqENhYw2yf3RhLM4ayg1PGNGTygkwQzzQmYqkJ5xEnYWH5izFz5VLHCqyky1UNceo2rXpFhQWsjRK32RYJ",
  "key15": "4GUQo2oKzbc46YBJjmiSCVKtVAxoFuoWdmVPteSmZ97EZwx5iSntnrk6ThG89xYEF1iat2jX9t2GCaCX1tzkHYgF",
  "key16": "uD42Pnx4D9EB82aLrGbYUR3AHmaYh51dn295eZEAAeU9oRX6cMHXB2krb1QLSXhgtW4Je45fXsXkqnokktgoCoK",
  "key17": "nvRX9zwzU6tQiRuC32TG746o2xiPWSYCUPYp6gqJd5J1iQ85uTkMSq3KuHkPayy6dmY4zPnNqUabLJmzwp4fShe",
  "key18": "2wWTY4F3dXX5VQXo7uMgu2ArVuEXAS5thPjRHgevX5XNJktNabb6imK19DyLGyeTwuMRPADT9xb3vEiFDiPMXs7D",
  "key19": "2dXZZzsVDjr4QswQNH4pskjEZxzXvsaqpbGfBH5FnqgbiFcHpMdaaUCKcZt46oxGqa9RXY4E4nJ8nwG36ubf7iAy",
  "key20": "2Uc5ZMZs5BMHM4EhCTTBJLN1ns7jZjhXQtSopB4mCoZGjPobQZ38y3751D1EVbRwdq4Y6AjZKuCHiKwSiZbgPZxA",
  "key21": "2CS5JAEHkj6asGJ5jTkt8gH5p2W1NyJyavNkgTWProQG5nP6gvQTtGNwKD5tkNrnCo4XDdDteh4d9het8Ywa65CL",
  "key22": "4xZRz12FjimoFnkmRDe7KxJxAN7wyHgUPceWhV6FdJjpiz1pKHj3RNrMVu1kw7C8wAhjvpt8xUtQdqcoXR8vL2Ld",
  "key23": "pKeEGS26AogU9Xd9SrtN4vneLAP9DYZqYvw3njrTe9Abu4cZr25kJJ44WmK18SEb9DymEeMPp8jd36zdG6wH1KR",
  "key24": "3sSpH2rd5sLNNcRa8rJA85iQSktXe4GM5YizW2zXEBGHxHRnjtST1dszJXCwQLfw7UCGeahnRKrVKLRy7Vyoq4TC",
  "key25": "kiRJz6fEioVpge2j1PYn2ZCfHZDMnFyMCosWeoX7yhXr6uiYifQ4CX8YGYbPf2wZaz1S1v8EveJGqhEx3ogvpaZ",
  "key26": "2mDTSpTWKe9EKqJqxsmmTEbDxE3wbTUJgYhredvU7tdfcjq8BeJUxHYudrheinD6tq2QxgYJEL25cV8ABMSMEc9m",
  "key27": "5iBZSiiQpkE4TT5hds7pdxaGuLUKUEsh7pi3Snuetvi9hxA9DcZMLjLQijDzeS6dyRmX4eWemy49zqVZz9wTuP6m",
  "key28": "4mt471oW6SDo3YmNsxj1DaSmJJh3Uqug98Eh6CJhbzTYFMmcD7a3uyCRUoGfRan23GiLb67hthLbsWYMmSggyckn",
  "key29": "3nfx8LNGXDbntKgsFuoAeSaSUjSrwB3z7FpGx8g3uFMNGGG3jFLHxdLxRoVioknY7sHeSftUKQ3kXaL7zJUaQhvy",
  "key30": "3wd5PhXvfEL9xnHoAoNHzEcmzUTP9HRWQmSqjF3ij1nhvL4jjxm1LQNCbYkcUGjwVfJBtVuZWZaJjpUMTjF4mnui",
  "key31": "2xsYTYYX5oCoV4BMn6kZe5HsUPs5AEDDDtyyXphKjJVujquYodEAQf62Pop1hCjAcrArhwEG5UR8cJrNzv8CoKL9",
  "key32": "26bDNriZ92u7tMsxfcMqW3JTN1LQxDhtDDhQNooe5rZEBk3pcAj6oaeLmzx3AcW2qNFof5VTHWcKyioaxfAR8pcF",
  "key33": "fXrwaTvUH3XTpmGuFAk8dMvtmStnqm5Tf7dQmeXKX2cctescgg4XvQc5PzPy2tLLoz751EXH9KGwDEv2rkYu1jh",
  "key34": "5GVhZ6uY3YMyfyfYj5yJzc9RCdTzfTyYyqPjCQhhyr7LmMAtSiyDoixNyT591n9vp8W8RtD3jxzD6BML73bUpE5Z",
  "key35": "4fsm3oRGvaU2UCgSs1SLD14Rb6dsLUpJRd263aUTuhBxP8uCCmTFjjS2gFhCGZay8aGVLm2TYL1VbQZMV7E1yNtR",
  "key36": "3g3GvJWdWNJsQHVfigxT5c9HBrWhXmzPTDBQf7q4Ceu7AEqhVq4SXFzFoWex4yhxvZ9fsTe6yEb3s2X6nW3TngW7",
  "key37": "3GYATSo62BsZ9aLzYihjWo6ejz4yPwfd4B6xXpyENHM8HUbMtABf8eeVwS4W1uaHwq2oTEf69b192MVF7agaXMdx",
  "key38": "33D5wf76gpNp4kSzMc8HK1eSgLRtu2mTFGUcfhUKaoyRXGTTGNW4CTgsJqWRUrciwpWoU6mekZBSd9anyyh7HVM9",
  "key39": "3o5Qz2UwjFF7yyZMV78RFKH5DaLttnD2SjwA7cAfT5fF9MMLNokACEQRYbPwP7BCEQrJ2XBcsrFaudqC98LtbE58",
  "key40": "9TfNZQ5dkftaaVh4GXUGN4UeJ8rTNZMPANT7jCouPJN52Z9mBBjh2BrCNHriY9fwKLCro1XvrMr5ZkRaThopZgm",
  "key41": "24uWLoXoRTm5SKurUXe6H48dsQmUTxWY8VeW8oWqEHbjMugAUziEcqQUQtrJocBPkRU5k7rpEgoBewMgdhAzKmeX"
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
