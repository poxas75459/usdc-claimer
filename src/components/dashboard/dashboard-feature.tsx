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
    "4wjTqjKhMkoNzaVZ6oCuspgxupPV5MqLVttcCiQdRQpwo8x7TtNNVXM4gERcP2SyodBBQLgoNupCcKdDyZhhWW1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrQzC42TLJtoDZvjVNgMcDZrbtb9icHAdExHegTPGJZ8vtLRhzFLzouCnzpVn5YsZ61K3wSRwTf2YjjgoPHxXuD",
  "key1": "2JkttuLFxjjD7MoKEmfaKx1r1QJXSkhUeuBgxCTJ2MUdgr6wBE3UUm48h3LJtJDQMyvU1HFRWg8DMh3JKju7iK1M",
  "key2": "xoDd7hnFAvpVZETMZyZZbjwM5xqzLMuqX3vEcVvTvzgf9s88ySaLo1ChLoJup91WhD7v8eS4SbBAbXadzJ2wB4u",
  "key3": "4rmiLmjtzfwjFjjMjEbWyxu5DDy5XBL3dASK5dNW3nWgbaD1Rsn9zKah4Bu9qbVA3KQCoYuTgaKy8aCzGzqmaVpz",
  "key4": "i6Vv5z86cmESzbQ5UNWR5pWL5sXYzXWVrpFGmuMC5TYRhxGTQtX2QAJFMmST6WEuMHHGGPtjWEw6BqtBfGyf3rV",
  "key5": "5LMPvZAMxNLopaVP9zU7mbqgxy5R3LWm32NmL5Ag3UMPv7gHtT6uECVh9FMhk4K7cGSzqWuo8qkUncrLdeisQz71",
  "key6": "3H84fM5P21K5iYPC9GmFViAjv6kRV4DHUBJzHM9Bu8km2zPfxLZyRPcdAXRemTWtXZuUHEuXVa58UrTjY84huVVt",
  "key7": "5uNycQGG8yc9HrqfdmztJ4fh5JykCpqVXxeqAk8b8NfSfds5eCx59kjipfqnc52sYRazq6eerFVLNEqfsi3Uvndc",
  "key8": "2C8Gi4JkAuTN7mTbbjBbeqEDnte389s9TWrhHPRRiKAXBMnGMHUmSsxZXRWQqJuwqcyeZ12ecBjpJCQ1518jsbJE",
  "key9": "y9AoJGNnqZqrAEbXPAaiPgAGBDQ9hVpzUyWrLumnW2v2AP3qMMusSxd3iFwam4Qbk7GFHQmqEjLApgjNPbGsNKm",
  "key10": "zfxFdGQDnfLeSc7TzhCUHDLJug2Wzhw6c3F3bf2o37rMzWYkwteYVXuBiF6VPyNu1Zx9Xuxzyonc2deKthCkkKQ",
  "key11": "2kykNXiF7DvuicCkad2BkHqCM7Y7PWPi79sFiKQCr65RRgSmyF8fKkQSpw3W2hJPrNJaHRwQu6LLVKzxysMq9F5C",
  "key12": "2yMKWtMFDqyyamkmkwJNcvuEPoP6ggfxLkE6PJvvW5kpD4rEWAuptoU97MrG9XCDZBmTxwpf2bf9nDpy9mLPCVyP",
  "key13": "2XKbk3L6QatyVfu37FSCH4a2rwE1cEYUd1YvBXDR31fvBx9ituYLFh9xyCyyJnEFxgj1xfPkRXhJKYN98sKyfFVE",
  "key14": "5oG1uHEcMigFHEYviGchTGTdtSmLJxjerbUjfz461U9D9qWsDRMDjujuB4adBrbAFDf61zNGEeCLXW6tMFuCUBoc",
  "key15": "iHcZ6uPUzD8yRHmMJNhAEC2atKGM713kzneLxUw8q5N1ZwkC8zB6DrCbLesxUDKAK2HCCjz3im8bkS3LrWrSQQX",
  "key16": "WVCZnVG1cy4MjsFuSdGKM4ppdf3pML7wZMcJi6g9gqmfL1zrGUdT7m6ME7pLzzUks1THVQ44JmZMZE1XM1He11Z",
  "key17": "4ANLdLshzqJii2uuGRE7caek15A6uwojXdfWMtpFEr1VNGgoPmbAfw67pd6Z91qVZPNtEzg1KGhvDq3kz7YAVPKq",
  "key18": "3NEue72usARwKbq6Xv1SjFRHea87e2honbqeCweD7fHUdtDnvD88fnoFy9NwT42eoXxSenYCx3eP5iqeC1miXuab",
  "key19": "4bmPYLfhfjq3JxnefLLuZEhxoMu63LdScxAHNQjG5sw8ypswkPvGTvycwioz5KpNZ8MkqvG1QQ52TaUekYdqBWot",
  "key20": "4p25w5wjpoxNK3NJmVfLLRRDUXsqiVA7cUm6SifV1ZdJAknz7MgPg8LTHRZtYbvnFRj3Tjukm7KYn28xvoDFnRA4",
  "key21": "2PA2AWQrZJZGWNY7oYd1n4q6GdxFXakFFQEK6ubwMcrAuq5PcY2ScekxtoGVhJTJ7gSSaSgxVffYA1eWXtcYW2cJ",
  "key22": "5ccgyKkzCxGysEDWk4iHNZmumTT38KS5nB6EgPnE3ykScE5K8f5HP3skxVJ6BxQo73QAtPKWVrWEmXgtBuy9eBLw",
  "key23": "5b2SDwBwV3m8LjPtjYA7sGiuGbk2gWTcYmT7y9hbYW2G1ZBKS2kQvEGgkcCY7xpuvkSYnspxGfsLAtTZBnhZK59z",
  "key24": "2nqGmRKdHG9iXAQXMd64BLEXTWrQz3qJMpP7rqy5UMobA9ooW1j7aunHML19Gkgy118ewNTV98RAbbgzPedY27fq",
  "key25": "36eeADvFLPLMWzRsRGFtR222Z97h2qZHFMUbpbxuNm98X8F4XeQTSruo8TkSHhUjJbHZyrPw5XwgP6oVBFEtF6Dr",
  "key26": "5ep8i3HQD28gspfbCLq2j7j6y2KD5cXec8Bh6uySZXonMYa4yVrtaPk1UswgNZPoFXi48e33e6ESAVwQTivqbLMC"
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
