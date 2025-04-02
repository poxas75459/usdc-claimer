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
    "5YuqMrDGZuhDDfWATz3tBkzZmh3pZVWuQ2yfUJ5U2JK1uVZJ26qxZps8XBbT16MHkdNpZ7qDYVMcZFrFmD5a8itJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bAH2Wb62mNbqonXQs4uMSRrAZnGqC41SgvRqS7WZNoHbbsz2JpXxmN8KSk7696kPSdcipMamJWPc7MmFBQZFcQ",
  "key1": "3cqM4fit9JFMXMe2x64VJdAxbT3ozCh78kp7oJp6bGvhuA5ad7L9nDhWNBiuhb1foYFnpmWvG1JAzCLx8LFibjti",
  "key2": "31Y1CboByM14Ex53hf2fD6FAVaog2KUoacVBUvy9B7sv5joKgRixLrcCamNuBnJcCYkCL4BxV1m9jghgect9Pq8r",
  "key3": "21JTyEceKqe7hGejtnEdxHJfcf82wWkG2Cju6Ds4PLn5irp5q4ANYupEiQaGUZZBYrgJE4K7gHcboo9itszhJZWe",
  "key4": "CNtVt7z8magZ9bijxoaLZ8Q1ZjK3MiFxBgAaRmFzjaGDU3vk66tarRwibgAihqNK4TAG2s4W6ZcwjyUJpgigNUQ",
  "key5": "47uUzAxREYEEo2MFGB99ULvgjHFjxC7eVz8qMPJuppiaFUqLNSwjJAajhCqN9AJLi4exhTFy5U9yWMDfH1dJgkB6",
  "key6": "rEJW6U7hpNF5mzDgeWFpc3CmiaQwoM9aG4sEFZTuGNh6ARXQibe7AbxeHzAR5vobWYPkYtDytGfkZfytg433Jtr",
  "key7": "5ng3Ek9PnuAzxhdGH64kKJMVZKgaQfvVZP8iji94DYwZnCbi5Jb6nEgBPV4b8AgbrmXi8oG6HWGQNtDZ9bmoV2VN",
  "key8": "3suUNF6xnYD4TYVQ43HqCoF9z7GD6sxbshSQSk1H2y7y7HXcWUD4Wx8c1RAkDAFw6ZgS2DA62NQt5ghx8FWDHftf",
  "key9": "3YNuDbs6FnQSVQ3Ro2aM1ojEMQkhPynjun6YCmeygSoGdyphnkmYFwMjrx1Ma3d9wai85BFcn9ojQfKzWBKb89wS",
  "key10": "3Qz3mxuBD2eG4MMeupagoSkwegtL39krU1By8FncKANCeZwTzcbSFnUy9Gxs237Dziizp2xYAeerCrcqPCgMhnse",
  "key11": "2bfFLiPcMsHgJvwVm9enEsM4GfavriPuTqdUXWgXEfBiEzPymGUTwNjdL31AAFQ9pLSLLUasC1jXNQU6DmBaj6ck",
  "key12": "5q4PwLvvyBK18wGEyU9s33rNSpeoFsCBiSCmnjQpRa63QBTLTBYfkyjidEsW9tk1JfbTLSQmaaEUGdQ9hSuSHNWo",
  "key13": "7ZNpn61QwSUKxRtTQy8B7tzbFwJJmCEKjXnBm9u3rPnafc7paFhWPzQksySnkaPCLR4zif1wKrDBNmJfhSvSYma",
  "key14": "5WwX45C4ovKuRjvVdkk41cyaAjQqsn8TVjZrDLeYWEnb8yT5qtWVAhzUDq1vMAPhGTBNsSCvs2bXUdKnzQPmKNa",
  "key15": "2WVNMxo5nMFtucBxEf3os9zzGXAvabBcq2JW2iHf4CrVVVg13Z8kwYhucBcxyvqW8nibEFfgy69Mpnz1ixQFVJpU",
  "key16": "3zhdyNmSh61WETSHiNtgy6HU8xvYvc4HhzNakyKkdFMcqoFPNJtoVXLbiWLdTEkaM3eYUejjqX5WtoZDCrqmC3Qi",
  "key17": "5wFobjqix4kzs6bWafioL7ZgubwPJAccqufBowkf7qAaEwnzo96nc9FoHbWeFjnVKgE69wXfHs3dV5EdthuEWQ3J",
  "key18": "bhusaapbpYU6EM3Sxeg8FaAgNBA2Y4TLpdWHoB78EsKn8Ag3fhWxETDLxivdXq5gSrK1dvt4BwANiNk6LPdBpDm",
  "key19": "5PSA7UWHgGZdGVYHQzAYUjf88WCanbW7QqsZ6Gai3x5naU9pApkZ6QPFAwSMTT2GTNULgrEaPrHGWA8iKNAA8qwK",
  "key20": "3NpWct6eaUY9s56a4wwPUVuCDRiwN9fMre9EwESSNExv64RSGUBWj2WZWZ49zFnRTM2vDoL5BZUyizBZ5An4EH9M",
  "key21": "4XsK7ad7EdDtyFpaH9jDcbf3iG8W9ycdJw4nQc2tVKWwaovL9VXFaYQ8qM119djcoWEA8c4G3hEsQNwRXEq7peLS",
  "key22": "2pupfWsqg8dD2rnaWFkS2j2xwdh9PRF7wpPuV4jLQ4iYD9K2LVt4NtdiLRsZ9GAyupUAx9QqpJh8mzn9Vo7HKiRf",
  "key23": "3DsdFu22vGMCAMAJuwZKfuhu5oyUMHQ6DeJYjMpmrkzeWjFXEL4TL2eMptMDGuBSWCzwtskzWPbRoqZw8JQXjcTG",
  "key24": "58AD74o6PDjHx26FQhRRNAWhV9UgC937Xv5GjVYqVaxHM5KJfdaFGEcbZRRgbyMsV37AurUTp5cmG3v1MwfniU4W",
  "key25": "Rpwk43uWvBUDfiYXvSwDLag4H8ZjZEuc6mQUAKUFbGQksq4R3vt1oyLbxVokhGH7sQnYfqmP7EJVJ66qZvjmXeq",
  "key26": "2ErEMntUrKkENctQdgV6mBXMmbB9fWPjndoa4NSLYoSHhTuFMYNGQBZdcQRaiFcphteBZNfVsA1oQQw5Nt1kHAHe",
  "key27": "X1JkiCLwKGN68qxcDBnc1FHQjAvYuLJyWeFt8gG4QwQoguf6r2Vnf8JijiR7gaQByNp4tJczu3qPjmgb4jWN7JU",
  "key28": "3sq7N7EzbHJmCJRM8g5LjfC2ZC4uroyERURi5GxYQHtwHBhtmAi1912f6Wo4EPtAFsdwP4ZfVLc8SZzb8ErFSJzQ",
  "key29": "FhWycdLoTyHxKZpqUGdaFRApe91hbK7X79mbRtARLA4B1hkWJnk6ynNNX1kZZu5PDo6qeJHEBpcuHKQxSQxw7HX",
  "key30": "2rvowxB1BguiXAmr2EPWrVSryxjDMNF7ouYqNC1RXP1EN6EvZ6361cmk8NcN5Ug5SqxLtPHw96F2qD6QE9PqPws6",
  "key31": "4mvqZHnWNn9P5wA3hD7ztHXWVANgD9zgF9YcYbsJYNUj4CKUd6FjHxm9MoevWewmG724uWtLphSNfoFNsGznxyeb"
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
