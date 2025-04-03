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
    "4BJfGncLvgvR7vzWAujGjYGpFG5A5K7m17DoXZVwhs6wRecD9pJAQvjyBEZkm7KVGQRZ7pWPpQGT8tr2AkDJTG4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gULHdQfx3iXwoKNYBwKciWditLh38aPsqLV9cDcnCa3ynkYZfix7zsud2NTG9wJfgX5Qs6FPP7BDT7xDswMBmc",
  "key1": "4H5imZZzP9ddX21eDoCRg9WNV8iQJaECGyG6MDTPDzBvk6pkfYpFkj12FQFzSRnYDz8in6X9PCEDTQP5yqGNkarQ",
  "key2": "5RZDGCKAHzCvETKbFDAa4iS7MG3QiqfchYuuMu99s4xMchxeSnxdcXXGQQjHAjbWfKtdsS37SK3kmVPEMYFeWgz",
  "key3": "2TJPLexrBXEpbK37rda1zo7g8YkPsbkBDrHD5Ym51tYZL31EFfRNs8U33Xx9X73requ1N9iQgcrALv8A3FcrkvGf",
  "key4": "576gVAjHE6uos7be1E24NtEhTh9YGETj2vCG1xPgJcnDbQqZCGh7V1gtSJpb1c9bnttGovadTZH9g7ChMeuBrKCv",
  "key5": "4sajgt7tiKvewEXXDofAXe7TXNxcvFZPGJG6Wo7y5QvQpXVpjE1i1kZYtdHsekRdSct6iKtuVfKvpgKWkAPeNeRF",
  "key6": "355TUxRUWwZrQBWnPNTS6Zj7zY21kfGKpJRYyooJP8q3oeHHHr4w4UEHVtKtDBYiz83xwPhhLqe8z2ipobyTErbu",
  "key7": "5HD8DwJeVxLSSjz9xs5Yx4JTxX7VwgAQzgjmvatXNufoQG7yMH4zB2mJ5Nr8WPCPjQdhvQhmnPLTmisyJNU9R8Gh",
  "key8": "5PXcfR2cgUkssQiBH2RdvSBkpaBzZ85osoLWdthSUicELhzumbR5QUMHEN8DEsuQNiqaUdbznJqj71MVsTVq9KQQ",
  "key9": "5ZwaT2oPmsmbu4EgYu1HySY85wLXRK2r81S8NZXdhFW8TRrN883drnMufvARSZMBH9y7LojdeHdQu6t3p72Qb1TX",
  "key10": "57PL4KBHZWSLtfKbbgexQWkkawM6fUrhtkzJbpbM9b7ooHERbQqZoKMgiSgdbdPKuQ6eQsuDi3NF1hTihdn6kKef",
  "key11": "2bW13cE3xMKMnQYCGinASfzLBoxEb3WoPJNxEUASH4QhoN4jUjLpuGM1FSNv9LVb6Hz4dKMwLnWVyyPbFbaKCuJh",
  "key12": "ZiDV78kmwmqzjQiv1UvD8ZA4mgtrxrZJ4jFgvcQATUH9ZfSPr2FBU1YGsG2U6DtDV9x8J8eiQqGbLbdLR4TwuZN",
  "key13": "5ZFijGkn1kLXrrs2ScBTFJEFF7xtiRWBKvnY7xRXVTs1LimPLRw6Sj55oJ8MnPZKjAHH5ckvDXY8aZ3fJHpmUG8",
  "key14": "5fWadKy2pg2oJzy9SZsgobmy2u6SoyHL6kMBTgPTupPQJQudM7bXK5b16evoxvjx91ZMPvK1wJJARatYfv8XndqU",
  "key15": "A5DHFjpMGUQXhAyu3qsbFULR1gh4cBF9GY6bGDMD22YPRr2VivWX6WYaStT6u96pQjw3DPLea36PJXUhu5Y2Y2w",
  "key16": "f5AVUGp1H2okQfs1zeNxZLmcSaZkJjSYH7uNXMEiy1A1yNSjSqaxWjr2mVTPpxYCk126WRYGm7F6hkEBGvoCfjK",
  "key17": "3vcEPHHRkiLzLoJ24vScEdNZzk1XEMTrDDcSu4ua26tYbhHfn1fQUEuKigLevo8gaGSmqPGNUSWr8PtyuLdNCswL",
  "key18": "52AZ9uacMhzWQXmLLpquRsNXKsSeNC6wrkFcZ9SqPp8n6A7go9JVAVNDxVxT1vW9r5cy259hK2udaLBQQEgYbFRE",
  "key19": "4gzECE5bKjgEWtpBP5KfB1vXMWDKb16XAchm4oNxBNx8SR2goLz311jLza5bQBoT9w1hJRpHorQkXhxPTkvrrHuC",
  "key20": "47nR4i1vE2gmdXfHfuqZrXMS563AeQ73Mg8ToQ6FLASR3V8u3CFv3Z9MEbFxQ3uAit1HRqbo9rugMFPGFMYFemEp",
  "key21": "4Z2bVDacNMaZfbZys5xvkkCsqSjkosBXNQSWnQUYuj6Xq42SjnLiYjk6nYMWBam1EnZiEuqagQBVjRUBgyA2TYoa",
  "key22": "51RE6DCJecm7ez9dsStATi6H3MF7Sy1gKLbSxFjnqEvh19axWijXNju23G8sTz4USgRd7zoZgZfKD67GvAHpYGW8",
  "key23": "5QLb9hAGm2sa4r2qUMnuSCPstAFbH2sAqRpWRerN4Z3YEd2r32QnoeJm3c7MxgBfG6XHkrGK9hNtsT91drZmudtw",
  "key24": "4J6vcB2yXpPWQtNqg5XLoaEABTi1iihiBBghniuiNq828oeu59SwB8x3e1RBPycQ8PWUHSHVkm7fD5VmWPJcGWQW",
  "key25": "yvMtf5YPEJ6VAhjw17iK2QgbnJ1LjD1DYZ4fKHNqFST1FQwWrfzFguTpqqBcP76Dmr2H1ABmnDzcuE4cqoucxDG",
  "key26": "37P8HYCPFJfZGHsu29exRbLE2YcodPBaTh9FyHjYThcCZnJwzYoeH9YTx4ZbKQg4Ns3U5ScMPMPBRLU7SYvQRMNy",
  "key27": "3VBTBZvp11Du5ZhfjQMyLrrkeef9eerboW3edCDi6MgxCQjwpW7ie39mWHZa1xfHpsyKM4mgdNBwRUVmKXUoeGRF",
  "key28": "3eSRTRvo458BHKfr9dDw8KxMZrSyzK3mSntUA2rrpR5otJNzQiaTf7KXVCds7uVar2DKtqjp5ACpaPBXsX5nY4pv",
  "key29": "2Kfy9QBCoWePK9DzCwTHLoKxKj35B2JtRorgbwMAL7bLaep1H7LsZTqKfMWHkoFsvrGRURoMNfsmJfptFpXhug5B"
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
