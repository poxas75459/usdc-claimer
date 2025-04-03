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
    "452e12n5w9P9ecwsLAxZeEJ8uXzqgzyp5nMoR5NrYEshky6XXhf1P1o9MezGJwyDTLHKxKutMKbdB7ks7hNH7Fu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtJrszRLZbZWmiw5NETcvRKi69wb3akQjVbxNzU6imcG7rfsp9fJJLkSX8ctYB4FqLssQurjVVFCfzp7JDsUvtb",
  "key1": "3bZNiPwwpLJvcz5jWp5haDiBe4FkzqHeMAHGHXhFRc4M3HXpRAbeoc3yFQJWC9eikKf1xmdZ4UhrUawEdB6sXZsR",
  "key2": "38jYhQrdxF9arn7zr8Ce9MLNMN15ZjyDdtknixGwU1XSuq3AzvLq2qyrNDH7dNtmmB1GEXtN5nciwVTSDGN3Ke9D",
  "key3": "5bkc7xUEo89SR6SQwDEXP6TZut5q1zx9c9Vj9bkGc98ss4M1boqf7rnmrDzGR63G1vXHbxDgYY6bsvxPB5cdfR8M",
  "key4": "4ZuHWPPG1BxSb1fEFXxcChXZ5nRZjLDhEcwpRDuy6N9u2fRXMWnFrGiSVfEENe5FLKmWceoaSJNNHTyVgZACszK",
  "key5": "4WNZQixCCrPdDy2ikwfvRFdrLs4JPc8SwULi5echeeY2JWMQ61QPwiWRvjVHqhh2SGTZQttZVz8Fh7jmnb9fvFvG",
  "key6": "YHyooSV9qisZWAkWSRrsFuDsLZ8s9x67TyN5AbFKyewNNmYJWRkbxuRw9LuTZFxJzU6knF1TYexmqe5Xw8Q1HbS",
  "key7": "TxUbPfEvwtcE9hWoBKiQvfcghAjnPDNVWWPeGBQ29RukPeQPKExjfdAcc96FUiNVuyamUPG4y7MFiTuDuVSzPxj",
  "key8": "3YE9UCdemCdtrgWUxqZDgbDAaq1wD4GxWxFWPFcFJPZqpYZiayq656fnNnTidAudzRU7M21LBsqqRhHEKLAoQq6z",
  "key9": "4Ru5AgP8fGNLe6mU7SNZuHQKc3LV8AzwFUJmMPRkKZwgACGoz9Ce53oJoeQ9FgBQ7suFiLjZS3mdzjHGhYuErqyw",
  "key10": "2iquP6xMh1NgWsKUntw21Yz1XERNT7A6D4s1RmRkk8xv5zZ7qD7zgRcCLGc6b9iXkLHGPhkQCTUBJDXXMKFuMwt4",
  "key11": "48LySMabVVfyNca7WoyjkM7fyLLJquieUsYr9fNqs6vJQ8zwe9BMMYbEJKyKTxGVs2S3zQB3KWC777eEHhmKstV8",
  "key12": "2U5Zfk4GMJzmW9HPzUPepkeYsHCLVb6QUUQsdrmfeBfbSqWVbS7dC8BhTzh871zTJa4qDDEVpgLi7bthBQXmjsjG",
  "key13": "5DFsuJ9MSxChMyRDkdZUqpWbgExbrfVbKtg9myjZ5eqTwSdVawpWAN8d2q5WVf2qQrwbwmGeTcS2RMgSBsJBguby",
  "key14": "3iJGXpTe69voUeo8J2xPBxZdVBuS92BPZHbR6CNRB8EW3xhPE5XgG41PFh4SFhDhkeNvAMWk2Pp5uY2xUxhP78VN",
  "key15": "4H8XpmnknBtixZGuXziKMJoH6GWQiv72V9kj5HS4x7uW2UEDMsUkn7CkhzpWvjUjxrmw8w8dKZXdjh2fBLTdKEdt",
  "key16": "5vgi7VJxHaQpgxFUx8aocVigRtGkMHzN5MM4oJFjjY4nqbLRQ43RDCQABW4BNrSAwo4nUrMMognGCemrA2f2hv3r",
  "key17": "65uJT89fSydyZpCWxKah9H1rDu5xAq1mwrvExshom3DkcuJMr3sw3JhFXSKdr68nytHmhH4qfvSDYg8ugeUzrpyb",
  "key18": "4vd3NfCr8fyW5xavAayaAt4MxhM826ZofDAk4Thd1EYKLXXxAQbzyftP8idQH1dHpTWueKPeDpw1VVjU65hL3fZY",
  "key19": "4tJN9PCaaLqgbv3CSRW9irh8zRCk24C1UtZptm6vFpeWRJy1Nq79BcYKUoecVkjbv7qsZM8ab4FngiY2xmJxebg8",
  "key20": "M2bqQAqKLPeJLreAMQ5hdjNz3o3aaHZCNS4Ar7vbn3gDCs1UBo2kxbKLHuhk3ryXSpM94NhbnVTHigexKZXhZWu",
  "key21": "2kQKTHs5yUtrcoknVydp6qmTiMaBtzt4dTw9N2Us46NamSHt7ZC4ngghDpPypcupzFQMB3jg2nazaPK52jVN2iBM",
  "key22": "5w8AfcwmtMVPiPzZSrd6nR733CrePznBF3AaBBy1Wo5x4R2nDXMkKSh38q5cp7nJoFjj7oqV8uwFYKtB6RPS8iMf",
  "key23": "41kHmg6VSRrBcX6gNQwYbuketCjk5Ea9eW1nY7BiTuqhYDJNDmCNWYTkzZxGdo6gBHm1tkL62ihjg2KPzYKmicuw",
  "key24": "3gn4seq4ZCdCqwcryb95QGGht34mbD6Ep5U8tUngmKpPqYPJqF1NnbjKgvbYJPnxpmLpjki8nPu24Z34g1Kh3uSW",
  "key25": "4HSRsS3zLYmaaRkPySWZp44WGcnPRg8rWNkZPtZ2qJSA8bg9F28MkcqCPY7sXXWkpHAb4AcA6Nwi2hitMQTrLguR"
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
