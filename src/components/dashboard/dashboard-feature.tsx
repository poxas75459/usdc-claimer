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
    "YtsXucfN5DcYVfCdEhekKGMDUsjhhtzZU211v2azKpxTSd2VoVpPxDXzS4LNYL9wktwwKx69XsiALecPJi3XHu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9cNDW9bBdpFHqv9H59DgbnZTSaHfiogHh6Kr11GjSSDPHXR6d43mrxRnvGwn6sLLpKVMMZQm44ew7zfip9rFUh",
  "key1": "3qfQeEsSS8j6eFaKppHqDk55rPBtR2HPkkNqVVHAkiCGmEQzXb4ET8SmYxNusP7C8cDJrxrLJVpPexygeor3co6Y",
  "key2": "3hnN8XHhnuPmoBXe2NCEMZqvfoPyx3eg222zcpGypey2hJBh7kiX8NYYjSMi2JeTiU2G7swsP4T7p4SttWxbjq9c",
  "key3": "4QogfFQAJeHkL5dzA9yUVqCtS5nXjCaUbSbDjk5MtMtskMFcXNwqJMueKcjg8bRVWjXfexUxKvXLoMeoVFnJddbG",
  "key4": "65iHiYSujS941c8aB1oz9czdpNBnn7Grnjs4DSgoyih44dWi19Yjcc2q9FuzBYwVuiUz6TxLYgvgQCbYFSGuCc6Y",
  "key5": "2zMk4J27i22ZMKAk72ykE2bKwn3beExDf86LhDehfteZgQ7kfczJBS5wvw7YajQv52mrA3RyFi5vr2QbMDB6wj8e",
  "key6": "Xk9KiLC6BnbEgoUtprTFnso58GhsHqhVmmfN2ni4Q9QVUHW1rwYZzsPYbvQ1mmDjf56tvHoaMAZHmj4d3M7Jy3X",
  "key7": "4S1NwU6igNzGGU9P3jiC2uMpUqsxqXcygYxk3ssyho7NRweUvX5pgrqrNdab7Ery7JtySLd4fxFtpKk4D86x7nkU",
  "key8": "58coeyBz2z7U3oiHXjLabr2dkjPSRoa5vFZuvEQfUeMUFJNAtQm8NkVuRYDpuP2PmN9hxk2kNL328FBBDk3e7Guk",
  "key9": "3PFswmvfRKcyX7drNXhQiv6upDXnccgM3M42JMz3CNDVEXhqLWyfmBJR2UzdhHkQNLCCbNcmMVW8xg8w9eTHfYRn",
  "key10": "3PpN7dEPxafMkHVQNsea9sXV9kdcqxvWbyKVDQaXw1W3kcWo1yoUbcJeuUqsaQ8ixFEHBenrbrZJfqpGRFhYuAvZ",
  "key11": "5qg8rX7Nv4NYgDuUmE2HK37EXBcQcudmp32pBYcKNM3yArgh9x5xEz3e7JcGvarYYbkdqNFKznje2vRbp3xgJVdi",
  "key12": "3J5wG8BADD1CCC5MAtNR39xXVKVRHuv1jHzBNn4GspPpLMfQdNdTWiHAwdRoZcJVA2DjoCzAgtNR5mwEv1k8iym",
  "key13": "3NS66HmdTy4CfeVk282gpCPEWwKYjz1zMavVaepEjMrZ8WghwLU6igQ6MCwPgjMmSZRUu3EyBb4JcjRr2DXiVDi1",
  "key14": "5kRiFBRVM5ieeURRijWcxWjw9QRQVXbSEohDJTgJsaBjATkqBA4rXzHTk7ZGYZoqC4pSyPyR1c9ZafemFjhrYnRi",
  "key15": "5QoaQWUwNegRx4zVWW5zNrZXnxATCgFk67MX82bwzhqb4iUYeQPR5hJYLQetfAN3o37LYspiNdFnHLj6E7ur1KLM",
  "key16": "4ZYn33ATTYZuzFdFQyYHUwaRQmayQA3pAW2v1v9hZDMVJbGgMSiCmfXDfumGgiG2XrSTYw6tPEax729fwsw2v4od",
  "key17": "Mzm5pYGDHo6jWGrJSq1a9h9FJ8Ney7SHzNW8tQgjLXqWbMVkUApZJuuHrQoSo7nbbjfFToPKKsvX1TRbrpt8j5N",
  "key18": "cnExbcQPKrDGUwoRbr56D9AJrC83awWeGwnGW2E68j7hbd3AnKBLM3dUkbLxF4rRtUHqikhKoSprgorKYXPaz36",
  "key19": "61aMkt7xKi3ZrdUbPYiwDDwHgaw82S7pBtiEoT6BcCaceZoCkLxFrjLFj6BU9asEZNTW6MhXVZuWyJzoJSddVc5J",
  "key20": "6YJxzkpubwekUBYz53KJQ7KfExxQtgYcnJQHrzYcxV8XELtZAQpEZfUG6Lv6ks4tqBJxgBycmyF4N9wUDUsJFY9",
  "key21": "5DKirowiWCv3Peh1rQ9eHPnwkS1JVa4daxMVza4nzkPAWe8p5MM7KSu4LhpRK43JdQqHtLDqY4G7VdZqALUebEYb",
  "key22": "36FStL5pnJAQGMNufgNA7HEHa2DkjuBm6FVPTpiy7kyeNgmxWj7YVZKhUsQUkuSAqRW7ytyGjA82dW6nCLk52oRX",
  "key23": "3tJQXbNBv44pmdgyam1MMN8osbGXta1xZDqkg4MjgTteJnEZxBLvvm3ZsHm98k35X3EEe9GJJ8z9KHGR5usbyL46",
  "key24": "pxDENcapTUKMQSoywTfWZPTzdwLx8L7mzi5pnEoeQs4DKqxqEqfrzW4SzeMZ4x3KB7FQyeNMxd67PCWqMFgaN42",
  "key25": "2MZXodFWfGNSQY8BxemhnCeiQN5CLrwuif9kjjb6AgLJ6eQh1pqobA98gBFNAertLytJd3RedKmVpSasNHE2AzkQ",
  "key26": "gQxgzwwrzQUpgzvn3ue7VKgNc6HxgfQ4pk3WL6rtxXQYQQJwipM29bv3fScyFEWovV4PZ7MzC1yM9Qmtzrw4qdq",
  "key27": "67J74sAdYjEjnMZNL9NjJLLRX2bA2cAXYEKPgs4B7q4LzMhMSpzBQuyAZhf2cNF5PQtqFXPudCpggXjHsRnt1rxM",
  "key28": "5q2zTFGGchFpQx8EgTfLMie3URJsMmVE9GgeLzWXpRT2sgRUDNHpX8DWH2fhy3rHsd5ZBpQKtY1QKTfG5HjBc9kN",
  "key29": "ZyoB2c6VjbrhngTxrT2H497kJsHDqgYJ3pjSPfADzMDSPrychpHweKaGEaWB73ZR2biFmWoUE4NqmSuJWuREtbF",
  "key30": "4jLEsXpFjvSR67Rb83m4yLPHXEEiHt75Ue3UzG8i4qShn9iQ6PgE4UfphMYpfPpfDfk6qhHiL1fa3gbtnLokZTm3",
  "key31": "4LQA1weFL9CqSdmziDPtCbq34dFCVECfeMk6TeFnX2AZ1Y1bDxEVzHBBGzwbpR8do51AsyiFJK6usVS86oWSyfUK",
  "key32": "2x32uCBoGQmziCNm589AXXEb1FmtG2VPYRXurP7qh9Khk1hTfDBAsaCdRdJK9KqKitFXaM5kCNUnWSyjdvg2dpLD",
  "key33": "26oVVEd9PnEmP2CDEgQfHezjo76ivXxAHfv9YNQ2NM3EMhXt8KvsTHUTEspZ1Payj4suPH6tttaBrZTuNHhvx9qa",
  "key34": "3jG67c3bxPCM8bh74BdpXW7JNb2ftYtWWwcbZHcSHNpfv4uJRWyT1FUWUGomFy3cKzcdUJ1KfR1xB3i7S4h4J9nV",
  "key35": "2GGgWyTe6zMu4iv3W5vdVWUj3PStz1VX8KyMEYV7WTKKUABiAAciywji7XSwnSUVK81H4aso8GKn4ALwsyZ6N9d2",
  "key36": "23cfTSTFPRWjckqpm3J8pZhQhJaZHN9eycH7UvKoDHp3mDtYTneKuoxYnnzaxMY7hn2qHsKh7usLmTxm8nG1pGcF",
  "key37": "2DJZZRM6cVC6ATpNrd7kUp1gdy4qneQPq5inFX7xm81r638ZxeMzqNEhyKQEGRaUhx4TvvuA2vL673jmRfzBnHRy"
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
