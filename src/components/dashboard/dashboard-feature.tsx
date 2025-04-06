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
    "2a4o2GWU9WFcGDa2bGgzmQyr3Ho87Uyn7m5s4noz247SsobjD4fRPJQmHCvzMX17myTfW1M8de2G65LXto1CMvS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYvUey6mLi4kefUeKHt8nVh4knNFMV7VMCv8MGYBaF3uHak25dGYXtqNs5cvzKVcgdJdWbdzQ8xvavTHgt7r99R",
  "key1": "3tpJCubw182zCPFpPidX6acbxNFEyYVJB63hAFAGhvZfv47oc1BhXifaMFgooSbYikGf9R32RzstmC2XTkP58nY8",
  "key2": "te6CSNoeoB77d52pRkEHZgY6XzvtESmkNQQrjd359iDEfkyMQLrQ3bHLBtb1gwquwXw9ZzkxHQm5dimxBH8vmwQ",
  "key3": "2rhUUyYwrQXEi6RzP8kd3FSu5BJYHdEB6wETS9MHEpwhePzwBDxU232wYg4kY1STpQBgKKGbuRfaKfm2ffL6bJyw",
  "key4": "4QCxhRYfSKaBKJ6rzbKtRDHMoC8t4yuxGHc7PczQFVY7ZSQZMYNRmM8ZixfQ13aZKKbDf3a4wwnjyhvH3AMgoNy2",
  "key5": "4eA9bGeUow2VxwMrzEi9PacjobZwL3ihLr3czGEEWZGfiBB2Mc7fPtbXGqXmdo8XeL6aAKHMVPn1BoPZZa5z4gXs",
  "key6": "3sa2Yq1daPzwVrzFWbUL2VTzEfaAv76rGFqaXm3sSVZsH2UYCviZPFf6chFzEJdpiZu6JjyGxjUZftsWHhoRsut2",
  "key7": "6uwaTZeA27orRRDqrymVMffVHb4sxQPqfkjgUKLPSwu1y1ymxzyGRiayowrZcwmFLzTT6ZHEUGUuCWCNy3UTwcT",
  "key8": "4mi9cjmTUE3ok7GgJHcFPdvYswW8Uzmb9W9iySwbdxFuzrtmE6eBxk31iKiPZGhPeKRoFS1xiZeiGiNErcRcF3wM",
  "key9": "5KrkEcLviSGoYSWEqNoGhb5TDv86C8e1M9wzV38XmQkEkcUfaz4SjPJ1Wu65wD9d21RDEzbtuwvDk5j8TV5Aesy4",
  "key10": "3GnDCU3cXe6hNzqqwPiK1ngAWZf8QHQceTLaUDtnhUKpAJguWdCFv666yy3JZNb5kAVvdc9XPYr1rPofZYEu2cvC",
  "key11": "4kvWEBMhj9HH7Dbc47t5Hx5SnvRQ9q5Ra2q9eCyRw3xP43AJgNbRFxvKS47BELAZvy8ctZUezrQGe8ArFZ14MTbR",
  "key12": "3a371ouCPat3rNsVZ4mDUaPTb5hiQFrkZWxEjASR6KZEsfZnvnsSXVRvDfGuf9AvX9qwFpyyoTTrYoXWWThm2x3L",
  "key13": "63UFKT2zgt2Y7MW9QTRk2doMPbTSiTNPUsjiPwZ4bAMHjywzCksReP6i5g8ySTBKnygvHvx8JtqwJPwWkSEB2tsx",
  "key14": "wqs1T8N61uCnoJYDnQJNC47yFpYNrSxXrJiWnWmNUaWVgeuMm1zoFuwYeXvK9kQD2rZjwkAs8nXz7vKGCmwsFmi",
  "key15": "56Fwipo4tMG3p1doK8g1TY6Q9t35VdCnE6NUMQFqcctzaALw3Y3S7VsRtjomDsK9SRwnA5idQUbtX8Qny6xhyS4B",
  "key16": "3u3qbuaZ2gKBHUcPwQkmduSSmXsFLoFNpoR1VPY1eBwFcPoWVLDxzpMALFNmoUNTYhBe9YQvbFFQPDqsk888mJkj",
  "key17": "3XDujW6Dkmw65AXwHRiCnP7iydgYFjRAqAjchc5dcu1KhQy3bAxh8PiWdN3ANznMjQbjUStvrMD62H5bo3XMSDnK",
  "key18": "vcQzxruWyjuZ82mwQ5d9X3bPmgxgjUWvENdfDdtyZpFHcne3fGqhvbZ8XG3ZanHnKkRaPAnHbChYnzpNUJL3VbR",
  "key19": "49hGX7dRkeXuDaaBYG2quJQS3siwXEhCMXMFPuKMw68j8SEm4ULTRFAMxnW7mknJFbQ1zLAFs9FRFUBz6QvvWLq8",
  "key20": "oa6uNeBZBTWbpwKDoXzWu5iaa7eZxTACC8vzGwR7nA5F34Rv2vjo2kHyoaVp6C5gj3Sbkx9MoF6bLuqqHVvxzfh",
  "key21": "3PW3Uj2HbLDbjKJSfHbhXhsgwYEiLkmDiadKT6tQbt7BP6Y47eCDXauGNqhgzUQAUCERaGbPZbmFmfZGg6Yh3QcL",
  "key22": "4c8eX7KJf16uCdp7hs7KxMfsWRzGgVuMbCiU6a2eccPsvmhkkCpgenXXQH9H53Bct66bPqWJUwF8AVu2bWfXrxF7",
  "key23": "2iZWuJ8JtxWuaVADytevUWyQLTdxLVAHgoBGYe8naAw81kTbub67bEqxWcAq14GqvRsa7PWXLcNgX7ouFuJ7KCZ5",
  "key24": "5k2KvqAtHX9vWHRScLqAFoFKaY423wCBLxx8GCNTrAtkQUAZn6N7Giw23RZwEAJf4mcJ6PadDwurRGJutJnwoo7A",
  "key25": "557TAoMfqSk95poAi4wxUVr58ZZrB8hsxc6acoJTpd47e5kacVDcYjdepr151pi1GHnLAPhWy6gKyATkkdvumSrt",
  "key26": "31b9R37RvMgYp7hYQBF7PbC1LuuDRWvsSgDCokjdAjweYFYR2SXYm7jRTGqvNZ12e6QXbptkL92oX6Phx8Jxw38s",
  "key27": "4EbJjBFXsd1YBvucV5N9MQ73QzxN6s2o6BkYWfwNv8RNB4sULuC2mB3yb4e1cMrfK2MtmjhPieHj66DijUkY444B",
  "key28": "39UZQxgVkbWRnmutBMETj4jZBpyC3jBA9qh8enjSu7rh4unto23YHFhHfigp5MjdAzwQH8YeR2AeBdwPUsDawFZ",
  "key29": "3rySVu9NpgDbEMq55d9pmd8KMJywHiiGhA5eRwBe9BcQ62hYvgajhurMfhJafeMgtUmJcvLegyHpw9TTq8EkWGeP"
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
