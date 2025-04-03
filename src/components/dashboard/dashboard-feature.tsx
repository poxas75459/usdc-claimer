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
    "5PYmK8L7zUzJtNFr16G3cJatTU8PpPTUv2Lkzf2DnxZyRizUZ5o1M52uQdC87qmFNHPCkXEjDKxbU5yekckhsqnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwMjZQ7E4iEEFNzMxxWdp2BnciQLnLj99PnCLUYDjyYfAwEXEEqYFsakMts23w3AzUvdfYpL8hQrNT1DTfvofZ8",
  "key1": "27nkGMTpihN8yfJcVjhEMBZyNC5GvsfAWzEsv7NpTYHhS3yCSjThdCezfsTemzUEJ3pT1LyZ28g5pgEFZkoqKFjB",
  "key2": "2R8piWfxiVYUvANSprxwX8NQ3EmLvSBGuhzEbGJErBSaEjp5oj1zJFgLQzmu6CcmEhtiLteEQQzABtDCDrva34UP",
  "key3": "5WVY6drkKE75JDY1ZAWsyaYudKd25XHijakdz4HzT5CMYuSJz2PvUtymz9xj9T9R1oxaDnPPv59bipw2G5Cy8WcX",
  "key4": "4QiGz9nEsBMeGAWQhqbpjuqzvLUBBpQ33jApxiMTb9QXvNqScsmTNzK9SSGo11JmDcnfDSAUmqbPcrzcD5qdDPEj",
  "key5": "4NhrZsDSYmnWDRLyVufFrApGgSWES1iw629XCay5YyGf1CBnANAqYRsaBvnnrTHFwZvmeQKj7SbbYKk9nqiWnHgt",
  "key6": "5pcXBTh3tuhZTXRQx5UfzxC9EmN5fGFvQjRFp7tuSZBrU1UYo6ZGaXUHKxJZzvDwrQ4AKtRFM4b3GPp1Z1VVcU2S",
  "key7": "3HBnzjMxFxuDk89F4xiLALXZKmuszKZQcDfCHKZSfZq48xuY1omgvM4ViWsH3MA6aCk1yP39nLJj44skCYQWDrk2",
  "key8": "3i186NtVU2Srn14VCWukSqnc84kGHzpm1mCv5Z84TZmgbTJRhkcdRiTPo9MvaqPPs7P8P4zWVwTPHL16Z3SxtcpU",
  "key9": "WDxhPXX7r8xX6pLKx1UTTpUNABwCjFAv9rzxD1FZoQWhpSCHpaU5qqzzSpPGxKfQtQpa33Wr5rZHSzcptnqg1Wr",
  "key10": "5vWzMwKCJez3KXMVFZy8nidj3m1JsGtEiwRoX5KM6sMiBbUaeo7GMg8ihEL5gvgzkmRWhuGXNhvCkQ9GayFiLaoo",
  "key11": "2z296ekCDjZ11aVMsZ9qF7wEWhb1jy6dYXDnkf9Nyqpbah2XX9xXyXrhJvCbgqdUsBQ497GPM6pbWkHgoFQHWe55",
  "key12": "2qFDCEioF9dRqf3UxU128XhtK4PrbinxnHrkwve8pWmkcRfnKzS3QjLgaMZY98VSmkjKYpXvKCJA6tcwdXVgkcU3",
  "key13": "2F2dt14mSxVgAw8AgT2LXJPCB3K9zXphfN6oMdVMhkb1WJhU7sUWG22bnA4Df7dM8zC7LDHWz8yaq7rM1Rdzhz82",
  "key14": "4EhRmZsvvbiisuvRxCAF4TMcuf2QmTmy7fhFcTu5sFdFZygAiaHRyw8ean5ifhtsQiMpd6h87C4NfR7E4zrx7pVD",
  "key15": "5MW7DrbcEf58HMKKKqPCPXwC7k5aUDtHRUAcA7ZyA88Mw7mHnjKwAjDdS6tGji3pxhzeZfhzVvQhwB1Wgr8uoE2Y",
  "key16": "2rGsfkdM23CodNb6Bo7AHWogsVQZL8AsPxp4yj1KUomVo1YH6JeiSjdzLejcrtoxxkX1CXPbuoGJRVmN4abX9X1B",
  "key17": "3uu2sjdJhacaxjSkVF15BNogAJUEHsGWUqeBS2MGbAYACSk4EMWtCXyy6mJZXW1pSfjCe4pbK7mCcdBThkWok6WE",
  "key18": "8NG1bCmQZxpvk4XmH4CCL68TtjJF1UEQMLSnUVpnm4iLhFfjFuk3BA5W6Qf54bxHcQvX7TreTkALQi8tcxaieyH",
  "key19": "2SRyLGDMQP4TqcLB5QEGsavSZQzuf7UmZdVTYALXUeuitMhc2nEy5enaebDMWdif14BP2DpPPwi3L2UDBSxAyf65",
  "key20": "3jNTFu4vXqynWcQZXK7avfkTFuWsRQqEMf4JB1TCaGhBSv6NLoBB877weYd7JRyifMQzMCVWDzooQhqdmrDXgcSP",
  "key21": "5CWCiTuhqr8Z8cYFV8c8UqfT2z69jDoKqH4ASxxUUbHXdRasruUQ3WvmtjKeeaCUXx6iw6Q6u8TNZPnUWguSwDN",
  "key22": "2ceXrWQ6qiEh8aaXCyT6jNpkmXaBX8dqv4kwwPSMYF2cBZRUnr1M3uf8Vk1ZiqDDwXEGM7MjiNoyKwD9ZNWHu5xd",
  "key23": "3hhNyzkrKr6rxe7XJ8wQf7bguNTGXns9b5F2pKgDvZMybMZYtoqzFjtBEkYpKMAXMd2Zkm7dZqYtij2bmyER8LMp",
  "key24": "3iP4xdkiG2EuJ7JXaXWE2LdYYE4eL79zwsoc2XeAm73dfYjLUJJPbuDuKCiCkqTzrCazxk5EHNFbWj6iMFmHmYts",
  "key25": "4wGPkTzo8ugX6uuQ8GsAPkeBMfRDchKHymzrDbMxuEdDGpRGP1itsK3E5VPzs2o1tcHnQ5FHPnVZnQ1qvZj7tAvT",
  "key26": "2CH6GFtP5XDGji8RW82JWdhxL3j3Rt7qhzYsd865pUUANYsXGWkh5DfYghnDbakwcFtPM2cyBaXgDkxKU8NdWtMY",
  "key27": "4cVhPwhy45qsUdF3xkDCE7XDG2PuMYy5wSBERSwdphgT1pg3VbQUibrvLRJDXbnJah9QjDkYf8C4rHwiYz31UhrD"
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
