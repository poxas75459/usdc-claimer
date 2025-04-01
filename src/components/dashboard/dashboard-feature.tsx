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
    "4v3nbrkp4ZEmgm6Nrw7S4uPyEwS2ZKroGc6e3v48j46Q1h2jDz5nsUQ1tTfmCY5CdEFzLGR6Qpoix7AqPZ7aye8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzXWoAqg4DLy6Vm5EhFAuX6wUUPmG88dGGngxMSnfAeXt4rTft3Wq8iE98KjKvXVS1WBFiEsdWSW15htmorwU3e",
  "key1": "5ensUgSs5bHppWFGtye3aPdBEbBZyGYZzbuJnDcfz2Hj9eozd97hnfToYs8ktEWqvTzxKjnrXh5SpUb7Rvt1ZacH",
  "key2": "2PDq3hrEJuAFZ5ucyMLSCZcjSrDbJPCKR32pS6jmaS2pp6TNeHa19D9DFNdFAy2YCbnBce2HVowymtm6Y6GxUy3z",
  "key3": "5kapQ1SVKd3kFF9kZSo7ESrbiXaeV2eErKuiZeCZjRDpuZSM89nFysF6qJRkE23qVQe1APZhhWFKzqCp6sMs2LmL",
  "key4": "5B4jN9gA2NBKVpPxZVbhU38sKDnmR8tTrUzTSckHBYbpu1bpWdXKCXuvbXRiNgexQSq7UoyEowGxQr1MmHpYSz2n",
  "key5": "3UHXPCucUsxcDVfB4juas7LdJoEfgDbDXcpNAndKST1BjGoyPvYbgPEpRFXeM3uQtWeHAhqPgS6mLUqReUSfgy2i",
  "key6": "4zEXKM1mEck9yHKkNifnpz1Xfg8chj1duWHrmKAAUY1TiAevWgQCXG3aqs1Se1HVezVpoqPDC4nJ8iakJ1LUsjfA",
  "key7": "4TcutkcCEWy1fJyKszycTBt5bJShdT58dof2SB2d3zgP9K5F2xwT6mpfjrMpPgAWEMzM5iCZcT3WnvStNU9ABE3q",
  "key8": "457oJ3RUm46UbALosimQXoZ6ybAqiu6nDuCEanmWi33adrt2an9NgMuWS2juCuBhhEKiimGhgaU2RwBAE2fjEp1g",
  "key9": "234BiGpDqzoPCmPb1hHW3Kf7ho7i5doYqECTBRpw353BRee4RKRQsnZxMqtiRzqWST1QrQkW9w7rdf8E1rNS5C5L",
  "key10": "4Hip6r4Wxua7r5bEYUrmAGUCvhiDGTrKcCirapcFzTA2SQLUNzGtYCfGwbUgrPhMKsMcNAcGqVMan4tcwTP2iMcB",
  "key11": "5Vopn24xXMFn28pGX3XM2mz6qYfjnt7MqdRTbJqiaZbBF59MzMxHfxYFuzyhPYekiXwuvtynWD5YrKkWheeYoVUc",
  "key12": "dsRrzP5BDUX8zYgbz3F42T71kPThwg14eWSWpSTfa5YLi7nsMmXbrGNperR4kAZxgYoUxHSBHLS7DcvxkaWfeWe",
  "key13": "5PWNQF8rsYqzNqgm8LaA7AwZBP1EBfBC2CNb7xkfgJme7eDSKQAcnXfvqhDrkjNUs7tZf7jRv5gZnKrRxK672n6j",
  "key14": "5EWbd1rkDxzVps76Maj2zhkrMQGh3vEfpeqSNKmt9Gg2ueME62aYDZdBF3PCZqz7fEGVrqfi1GRTZzxVLuscAHF7",
  "key15": "5kMX6yosX4undF8LzeRUeJFGi5FbcgXpAjzxXMUoJwGBxEqE1uCWg9nsvDdaiARLycBRB8ic2aBZy9Ew8kFejmf8",
  "key16": "3nbDnmqBA71du4iyRr2k4h5c1RjaEPy8AjfP26P12QfFpawYTDth2G2xN6jtK8p6Pu7qwueq4TGTNZKEP2QLJScM",
  "key17": "4uGWB7RpeQ9uFGmed9iRtT5dYs29FpLgP1dJturwYzDTNhdnuTQueVi8U4dQ2EsPc1JCJphsWHT3TJqDUqAEkkYD",
  "key18": "e4YrzxJ5hBLD1gyKSdFmSv2CPviPVB1kGPoD5tyX7te3BajxTuRRximPRnoFERhWV2PxZrJQhz997K2Jbv1stPv",
  "key19": "uLnWTxAhs6aNk8K5onX2fyHY1EDNt9GhWzPTxxB9u186cRD1KGrhRck2Y4hZByqNo8wS9d18HEmexv7qhKSGjff",
  "key20": "35Ph5RjgGUoAjVMsJYAxxisEsCbp2uXEYb2Gju6gX2osoxCYSernfoWLfYLEhoxuTgcHRRLsS8et2TvUpC2ryodE",
  "key21": "UtdN1NDxKmXjsJvCbDjhmkt3M5n1583LA6jH1dArCDStaqNnecJB739k7sEjYjYJyac4U5USLqsdxokvmLmAtxj",
  "key22": "xywsGNLNVikqqCoHEBroR8FeBEuC4Ytaa8fmj46RDXUpLaHpGgimiFAjxqTpfHi6wkcqKcQv5o5zAkHQndHvuCK",
  "key23": "mzRh7dkDiiuc9ZYhCupaS7QP24N7NA45nkXKpaPq5HF5H6nBCoDQZrd9Q7SuQ9VgVdQ8woKpR8VJmsW33dCQ3eT",
  "key24": "3jaE7frhBfhEucF9MG7mhWXCNdBBkvnxpExfxW8raHjjuoKdhR9X4huyJFkdtCT82RomPB7NXb3ky53SgzYEsQio",
  "key25": "5ohoFXSzSoXpubjoWuuSePdHD6spu7uLDgFaAdkKVrM6Fni1dcxEmZStwjJLUZxcoE9QFKUtFPi9rcjwhPaTCQa9",
  "key26": "4qURJoThGskm88KuzLkVuRNQdfWmJGGftn3hZQvnjFk7AUBeC1H8KGCMqZGg4fP5f1FX9vmcsH4kwNx8rXhC5r9V",
  "key27": "5ifYCU6Vwktzr1b5sojipL5rjgLn2NkHs9GxH7EmfFrSnzQh24giKZA5jnQMiZ8kxkZ2AoQCbKGKdU8qYUebDn5P",
  "key28": "2YWa9GZNQdDxoF9aWd8uqEabvi8or9wnSkGJNxfF3brxNki5Tuxbv8pdKhKSCCjHxictKJYhpsLRCXUe6bRS7Kxf",
  "key29": "4R1bT48EnKbYPwW3tqNR5mB76GLuYp4VecveVMEov4xEhfc3Abejsw7tKZ1nHnDxLqqo6Q4atAFZCTvUs4onQWyy",
  "key30": "3LLGrfzwMcjmkXBUMQ8VgvxCh9MRYsHHSNu1zZdFxce4QoZ8aMhTmrXHA7HqNYwDAV2uYEj9tedWyGoZmYw6Dzj3",
  "key31": "jEXYrr6mWaKosFx6as6YiVrwbNmWKP3LaUfBYQ4THduhHnCKkFRvTELa4293BvSm9P3xD39d4BBj25ruiQNpzAx",
  "key32": "ETaGAG44VJaP3P1q4NWzX9tpPyEX3JDKJQBsaGTjGKdgGouR8WN8Q3tsb11dzV3E77q4oxbysYX8NgvTez5D9Ye",
  "key33": "4WfvqabXpAkwAYbufjm4b8Z1ms5h9J9zsmNTUT1zYs6bLMfQowix8XuhU1CUxvcvv367hNdKsY9QvEUxUNJ3hXsA",
  "key34": "4XjoMuCUNYzMYS5iA7uaCHrMVncoGGXW3TG6QLbeC1X8nHmuQafLm3iCe9t8MWNGPK9SmjViCv8UmjkTDk7CczA4",
  "key35": "4Rii3cTvrZi8HzNXK4SoEzs6HSKSW4feoBsTgqd7ourSvk5bxwRcdqW9N4WmGHtQwmnasP5TuXftfEe7uDHD52ik",
  "key36": "333aKqvNNLBSLn83dGsrEoENLUD3igaqc9fVgzhi8eYf4vQmwaZ8oWpGhfY4euu6bWjM7LfX5hwAQQKgcmMfSrgh"
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
