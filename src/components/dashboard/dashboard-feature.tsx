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
    "3xWfRnVRr7BQ1iV3zgxc55K7suhRUoLYbqiJ5rGgCwQFif4PgtxKMT4rafSKw5GP87HAvqXoaeDLRJwXR1wh9pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48983fz2VHNHuvNia94zravx24X2ifaZnZ1t13jLemZXXbscdGZB5QZYHXXEkLcktefp6Gj7HFnPFgesQ6n6CYZY",
  "key1": "4uQx2XgCwxYRMN6Mt4nvHp5kYnNMDH24KMmYkTujvuBSPVtKsdFGMjdLsjeSzBvx1eDjv4KG9sC7Cgi8V6N36qyd",
  "key2": "2LwRCKi7bUpyDxRCqQ1FSdFhziYwqdkcx9kfMW9HcmaMqT3PerZssJDYWGMEAzheSiEZ2kQ3sbP6ucWN1pSdtcaV",
  "key3": "21CfqZSuxfGNHhAYWDWHPns8f4qst8QuUd1ZwrnGHBKgkYYSXyNugwHTRVaoUNyZ1X2teQMCYaSbxHknV5aN3ToR",
  "key4": "2nKZX8tvjuGFunEwNxhFe7KxDNauBhKZ2NJysU14bJ7RrsU2hiqevC594JN6Tku1hKTeMJTnuV8zjCkaScpfWrgE",
  "key5": "4cWj9zyvrvs7TMFnFbGHxXLVAYmmAB2TLqZSpTFRpqVnYSZpCA4Hjw7ofgnSxSEHp3HXdEWxKAS2o56qytmxbCej",
  "key6": "jhc4KWT2xcYeDmkMSMdkvR15QxGPXAbQQDZENB746R3JjBcxtxkWnd5dGtSU89a2aKV7WkH6A9AojPaBAYTxAkW",
  "key7": "2Y9JVi6rvkUqKguqnCd8No47r2n4UTycrG481fTycgg9MG3gjNC8ksK52cgq97WhywH3Q4sLaBcRMgQhaCbMSKdq",
  "key8": "5YxuFyfyCBJ1xgjtsn7ksLSmNLSqokjPqf7Ui4iP57JkLMnsA477uKZ4tuF9Z99NuDXRhZ37gCtyNnR536ziyaEj",
  "key9": "3ErZ3peeG6nmhqfzRNy1yafNEWBB2uSY7vB9fjdBSbQQCTdJ1p41FGuzcDLnj8rPgAJcNoPz92b93YWqcD8KyAfx",
  "key10": "4DmdYPTKXS3CXLBtdJB6hY4HFqRfVJkBpFS8Bnq7gG7T8wupwAJQaX96bi5DCAripNtCpjoaEDEanEnbZygrFVh7",
  "key11": "4xkCGPTYKqsYLxcyRaJMsxJuPJuQBWMEV2kMcYFWaHRchEEvxgAprSi5HCU419kKKxzcPqVvWsF56FSMkv7Emwac",
  "key12": "26WKVt5ewXMY4WLgoGLvTDvhPjmQUSkzGk17PxyQVF4VGLuvtiFHNLjAw7rQjXSjvfSq4bsf16VVZe1asMLZtTas",
  "key13": "AUruUxaMNPVbkg1N8qPx5KTDX7CMwLsBmMRX22VLjS7C48WRjxyMjnWWWbt2EUFN7yciRcSjW11vNiFRMwAoH5Q",
  "key14": "21xxzEhN9Za2WhgC9x6rrQksTCAvf2b7wZ88j72fy7Ve9SPhNZ5EwvW6JoL6RJTf6Cfvqd83V7FPSRurnoCEETPv",
  "key15": "5r3tqUjcNVXNVZkD8hHH7Y54rvjhMH1SUz3R7fmkScHtEgEUAEcEdwCAjJwTv4nhnQeNm2EvHkHiXexU7PwNvWYr",
  "key16": "35pYrp4UgqNwobLFMB6HqDfh9fkwAJfgi1HJA4uiFHJCqBsKKGUBuPEC4gHf2u3cqfkVMzBZK78d2sPmettTxgeq",
  "key17": "3XnukrqHrzBnQGRoKPEfNmFeiETaQqMk2MBJy5n8ermBmqpSLrhFgm1qvjhfFpTPdbLapmACriqQac8Ue6EENaLF",
  "key18": "2GciTce4i9iqCYEv6HVJMJUMPCz2MfXUPhFg9t8JvHon96Kaj8fjkAjko74pRE7tfdnuHso7w7MMZL1ts1qWTgmJ",
  "key19": "3i5FNph7hpaXBhsMVrfjWWCjSqjNbU29C18f8y8Dk2ZX7sWrghCHWC3CciEhfzeDE9vyKS9wZvN1iTybB9VjLQxE",
  "key20": "3qW5nBHeR7zYqJdp2V7WkdCAC6SWvnBAzRQv5s6XjR6YfCZV7tMpPCF4tRbWFmDWRULenYKXjvh4RTHA32pTV5Li",
  "key21": "54b14cLQCHoC6E1J9J3uzfueA72imvooYFL2bYs6yAuQpoR2AzXMLvRyjuV3LtjUPnkqn5bXk8nGhGkKkHQZXb3A",
  "key22": "EDETYsBnpSBb8EPiZoqWW5BiztJGRWNo6tMeGGXJkat8g7zpWVp3aaRKYM6vFqRdjRywSzMo7mv1TiB1hMXtvrh",
  "key23": "3iZTMSUn8pgNMHfoY3sCHEzLWkVbEvQDLwhwh7dfQSoaXj7ixF3Vq7CvFjL4d3SKzJk7oGtGJ11p8xCXvVDK48U1",
  "key24": "2YbpHAcfzVHcwVStMVH5EvhWwHSLXtSU7wTcr9tm7sU1Hm2jn676BX9hZAB1ZzvJcH4imi2mpYa8NyAjyUE2JPLR",
  "key25": "4RKRGDQ9sZB8FFhpqYnawsvU2DicVuZem3m858gZBmLPvYE4QBpEJPG2HoPjSnmkVWYdBRguNJM4ZdLvagjzkg5P",
  "key26": "5pWc9AaNHnUEbhpq5xrADtou77q8aWdpWrgrpdmBTSb7wssS9HvtYidxTdfWiAWy4ckhHhDAQBA9zmGUWFmxsWsf",
  "key27": "2KLc3EdefDXuV8jFqzXLJRyakkguR7FMMreaXLEdMchQT43qpiG1cEfwGoTp6n96zej3cReBSZQqg1eck5KJbR4p",
  "key28": "BYEgUfK12i58JUkohymUuLk2dFGx8dL2XCJtsT1YNsTbzaizEbAFuSGpiVFJTXjDmqDy7KUinRz4zfJKUdw3KeW",
  "key29": "3vxw68TPs94XNqC6VZJzJDUvZ4LW3iZQk3ouU6iFC5k28jfteQnn1AJKnTyRfAz3kx11ZBrZc4hnfh4dszcnmmp8",
  "key30": "2yjvLnVxdwbmVZJKbCYzU1sFK8VBSszetanrbhkWBHkDr2am9XP6BpiQ1nWsYECcrLUKRoTwmfbDVK82WdLvJN4s",
  "key31": "2LcctTHpBavgVt9JuDLRDyqcyeP74EA1UVthA3QBUrsi6KdH3DdayiqpBjQEvRq3bbSmgFCgUpu2eoXixtvPusjL"
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
