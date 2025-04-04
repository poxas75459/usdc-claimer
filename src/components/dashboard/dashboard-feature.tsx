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
    "3SRsy2VGWv3qd7jtqx5E1fSgt8Jjr3D5AxHaHTtf5ctPHjrYsgZxR3c1ykZcyH1yikkgPJk64TC6VUBygYqGmGv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfnZU3wJpNPwWXsbioFVFKBGAu8XZgit5q5hMTUVdYva5192F8vqemRUtBRjSJNmQDc4BiMs1gPvyUvB8fXvfEw",
  "key1": "4AYNrmSQMdFaGt6GCtDn7oLQmhHfQ5gWeJUuk2yZHjDgm1Uqb1hpG3qtdUJJLCg3qjTDbmFLHrGyh9aL8gnaS22Z",
  "key2": "4HSFChLFm5GYnL9ud6UBQuQVFKEZHKWGg1ZiStGJoSF2tgvQmefBhNh7ZrRTX3bjiu8w8pz5iMauppebdksGH8Di",
  "key3": "deTDretuzgY38QHX4acWKoiA5rRKjLTt1NQcBnUQN1QPeWz5927Tm9aHzdvkC3z88nKJvE5Pe2ri372Hn9KFDnK",
  "key4": "3SJ4ZesrCG6m6HGQPY5MPHk95YKqaBFEnRgSW1sPehczCmPmT9fwZ66bv1d854YgnHjnUMGD8pMbH5Z3oJBeo1Zm",
  "key5": "5owUv4d84XBo3swjVhUZxxHiyUqWzZGUETRaA4U8sNBDTnSPYnmzfFu1LbjinfZRF4baWUvnqmY2ZZpY3HdyCAW6",
  "key6": "4RJkUM6eytpndaPrNRPNGShot3pcBfc9iazqFxm1VKt4GVMFTC9KmMtE3gnEx44j4JxcbXrxUmZUBEZgj3dp9nyR",
  "key7": "2BybfZ8UCanD3sT2vJVDUytCjzLwzPHWfG7gh6ziBygoZLVtLBMrGEkHBy2HuWWYujna9yrmKGr2fzanJpWmsFhy",
  "key8": "CBpcYEhgTx7SoATbCszLw1vURaR4S9C7M7SQjfezLATGVt7yJMeMu4x4W49RRHQiNUdW9JcJ89qF4UdnBwFaQdS",
  "key9": "3vrw2APkFrAJwZ7FiMtgmEBVdThrt4LQWza8DLkCKxfdo9eusszrztkLq18iMC7ChZkRSY6UjFgvJF9qiSCCzqMj",
  "key10": "5a4Z7xDghT7t5RwifRssdzkT6irmbakHQwqxqDFWHM3CYY9FTmC7YdbYg61zDYUqMMvXHYyddnPQt4B8PEaoaRhA",
  "key11": "NfwtvukdXkxxj5zezotzwem3b7tpRmQwWTbHhwMLz3bStvmsPmCNz8yHz8WCu92hUVecUUm1Sk5Pw6NjrPMmJmp",
  "key12": "39kDzWd5ksugVawHzmmdwCb7mWPgFAJczJS7vKpD5XMkJ9STux679fZLDR1BzsnKYFpyab4D2exr4ei8arozmC7L",
  "key13": "44a8dsnQG2wrA5jMXgo9Wpk8A6xWvZ7kc9DCYoCGdygoRBNKPdBoGEEFuBUCkGEtJTcXaDUw7tXAPaMjVyxXaPHf",
  "key14": "46QSujpRw2WuUGse95Kq2sQonVc1vP4FPqEzN6ZEJ39AnH7CdZQbbk9vEZmu8jQt7Xt9WJ3DfBJv1GF6j6tKmMsx",
  "key15": "51yvkC1Tpm5yL99gN6rahuDCVCmivy7cD8sA62fTsYQDnfHLiNqDXy9iEk7rkMPAjD3VEyb5opGiQos7bCYd3tHV",
  "key16": "2uRqHffcQuADhRJDsoppJwHsSRfSAehDEXgdEVaQJyd1GdL6CY18EjUd4aGX8Dd9kGZcEtbpT67MBvjuWFLL1xGE",
  "key17": "61ePUXe5g93ih66xhKCXWwhbZaLsrttJFQj3zPMTRU3HVGLULRXfzEYgtZZhehsHJ4kBfg6QMB9LqEStjyTJjBTJ",
  "key18": "5oqwP6UaKgdtpim9YLEKfkKZV7rUumG1Q1ZAtRGCA6cBFKCAAthc4Vn5mzspR6Nprmp6cwnJatTzGAqA3jCrZP9X",
  "key19": "51AHMoCdjqdCikM1guMmMud5csadUitcj8smcAVpdtx5WqSbBJMJavPjKDfd4Ej7u9gbEJAF9EdZPeNaDstbGNRs",
  "key20": "3ckhB74ndw52wJ4wnVaLUmR4wiS1ppFfxtja9sGyrib6nHs7QXmJNBfv1D7BPFrHp6wN2kWy1e4Z2uY8PGvR1WqX",
  "key21": "4aHHgY65YG7dK4goAQ4hP4UtcWXz6FVZk7tkj2JL5UjoaX6qZYrddi3EPs7RS7uTqgu2EVCanScJctccpaLPhQ2p",
  "key22": "2Q6sE6iQ7QqWDroa73ZfziEeU3Pe2nWpetstGAaHQUsy6MMvsqAaZmxtRS2Pi3Pn83cLMCiXvHMDcCfKDBZYwiAX",
  "key23": "486Tab4kHGWQi3u3o8GPup7sXfiKKq5vVsex6wSRunBurr2DHMZP4xzGj5CqNg1etjP5TYfJfEymwHAeoWujYkbP",
  "key24": "A58xs4GaGwxxtr1h7NJzQ9qR8nLn1cEy2cqWNDK3kVV1CZr5FJH79Gk7dAa7x3ATesVEsoFXmEeqmJPMJhE6K8G",
  "key25": "3Z4nXu3sKPXm43ZNifKhn4ZJCWyGbPGRpxgDBurPsomrzPyNDJMMhT6Km9AgQ1PTWMqHqEBGEKdVHpvg2BYB6ax4",
  "key26": "2PWd84UNCFgSgLRiTuJxk8fxtW5BYhtRH2Ri3BizCvGeZqKuKr96KaoTYWGZpg56ojYM9iQcbPjjkKzDB7GWjsNk",
  "key27": "57z6HgKw3zbTceJnoy7D1E6oDxZsWf9iju7ZVWva7Su9K2Ejqndg82bQrUZTdZLd9rywxRtLMS17jCnZ82mvden3",
  "key28": "5VAj4QqtUVSCmmPFM9JMvUv46oY8T31DeVPst1htU3Uy9Ck9cLRApy6pbghSifveaGJbKM4TVasWT1q6SwBHRa5K",
  "key29": "uYSSSx86EJ24a9bKqfqG7v61xffEedvudpiarZHrVQPFyRHaY6MRqRDPzLRbrkYJjYf7pj7gA19pZjjY24Luv1K"
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
