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
    "3scEgziexMzpkyYcbtbzXGrCB87iGK3EDTWv8EffhwSczMzgNhMR7QrVuc4VaWCgYuq6xnzmVdU5YkcdeEtuufV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdLe8i5XJvqBz3m5HvX2k5SVuMDV9NkB6LWFydRZKMN5dnwaYh9BxKSVoPsjQEnUMiYR9scASWFi93SnowQv7LR",
  "key1": "2uh7cW1M1pPyxhQotZEuHyqsLddhKTyugHVjoHW8XRZrj7tD1bqqoSHyRzHp8VqYhazoPBHyyzACnxcGEkBnw8Wd",
  "key2": "37QCfdqUjonRBcKysywR5ex91mCh9gzpzZHiAtjqxciqrWYUmBoQUoon6j7vpvercDz6peWN1rvqysyoT6qG6SNt",
  "key3": "5eJ2UGNkPXiggyuw3rNtwqHkHFYnHmwLPQUxbcS37tUJzjhoVYjuKMu6rDnNHv7vjpNyy1vxe8dP4HBP7G1jGdXi",
  "key4": "45FSwE55dSvuhEdnM4r81nm5VCchDkTxb3gobYJ6bK1ZL85dT5nrCNkJ8KDFVmrwjM5wLzy6Xdnggqzb7H6AqrnN",
  "key5": "4DDtrEUMoajrvryHZeiJkAPNfpBB6Yi42255AHdBQ2ha45UDQJEJmCjTT31eUyfuUojDJjQjWMeXVEpAEcPDi57v",
  "key6": "WKKpRSTcjiitR5NWuofyjxkzZXX73ARu5qeEW9fZcH8qcypvtGsbjECXzTUp5GgwU51eyNLxkRQPNLfJ4YdEqis",
  "key7": "3pPwTZh6oWHForAGHZZ9rdQ2W4kbDJ1jx4o1HdiTccBnBL2YdJPoHd3DcdpNeTc1DgrktMisENsfmWk1kiAriL1R",
  "key8": "2UanEMjb7183c9wQV2ivEEWjgiYDyHozaWocQ7pFa2qgNwpXHTg7Zvps8qXAnL4nRE3jpHUuKx6ie9amfiusnCWu",
  "key9": "4F7wJrmytGa89SVsSbBFx2RYCQ1NaShJwCnDV9YvgPos5dXRbs1QqCuw8WKDAuY3oG7PSE3s1p8Kyo6HrKqCNEmA",
  "key10": "3XdfftNdsVe3Td8yzGkoSQt65ss3xMavSDN8X7hPzVXyJNonivwfiaAWCuixnYf95VjKvrFS1KomDKd5ncKGCTsU",
  "key11": "2YMZfFeaTrTbvwv8z1WyJed4YEbzfeBJEqg21QVCE7TDTtvek5W6oBVXMsjwxGQKW1BcCDG1vxxirvgV7MpVT7nU",
  "key12": "4FrtvycsNgDuUr7JrWJundNCotFbrEjMSQTvxyjs8YCmrYMGLnuEGYkCuA8YsipZ11ddwQys7hwf25xKbk5xB7Bs",
  "key13": "3rLyfcj3LfbFNpVhtCVYAZoDXmEyZjX9iepfeJRcaJENnemJYoimkpi3qrJqesBa44xTuZwjFjSqEaRfiRw1T2WP",
  "key14": "4iVAy2jaW3R27tUJMjfS87XMma3PsnAbdUCdHcJPkjatv9PVyeVyFvkAYwKuHg3rEHqSfQEoJMAnht26Dp9npit3",
  "key15": "2euoVzZWCtdAn9g3bDXH3VFkdMuM1FqbA9qDcLBpNchvemSB3qdjMrEKv2RES6LpcidodJ67f4kwABSZvAXaocX1",
  "key16": "49BdVVfgcqAXVX8LMh3KjufTtHHHYwHyxV4VeudLb3wcbxE2UTU58rdH6ERFdQygYKMjQdbxkUxDNnZbdZdZNSkr",
  "key17": "XQKvLNfDTceoweUBXpA1MzgsTXuTfSz5SL3jEL4jrdXZqMzM7eFgK3YLZzkFmxhb38mS6Jfbez7UgtztfXxCiNY",
  "key18": "4XonhvtqfkMn4J6Vpar3WgKRN29ECkZPt4i7D5LpheKVcbCFBwBWXveghyFE3DP4CSJSrGS1wc8DHGjJdKrg97sF",
  "key19": "5XfqevoFmg3q4PN86rFt8iriWPFgJXYa3HiU1kZXg8MjKnnasU4KvMFnVdmuYPNLaaNfqGCPG6gEG9S78UULp4dg",
  "key20": "42Snyj5KR7y7Bygg7X1DisM9dkfVryCGsVrdGuZabg9vMYAWhykdQP6nnEZmdAP6sQtnVudvfgE2TonMHZHtRf9D",
  "key21": "dWW13ELwjrkDR9VnsTv5r2qZAqjRpy6bbLzB8aWpbRhxZ3tp9MQJ2Cj569czeAca6Newv13wNzTi5Jg5QgNFAYX",
  "key22": "5Htx8JsUyyrgWqwQhpYqYcyMAMmSP37WZ9G5i37kMWEBzbhCpGjKcx5ggq4bMkPK1SfZBW4afhgzCw1GPRYjMSvv",
  "key23": "3i17gxTjDFP7R6frnKCSuW1Bb2N7Bc49t8miavhyTb8Lce85FSYG4q5XaHgyiGMudG7JJGqvVvwvbxqKCmEh2gFL",
  "key24": "55waGwU8hQMj2X2QcbC25VNZ3TuvnWLZJtRyzLWs4dbrascawtBy4Kntapa2GKZC2jsW3uDNNS63GvWU4hSTJgxX",
  "key25": "4orFhrtzJSAkqYNwAoy8vTDGNxCvoYZk2hWuTpRQLfDHLvq5tvEmAY44GA2UBPnH9NfKQ1qN38aLhCnJ7NYYrfeN",
  "key26": "49dTxWzdewd4RkyXu7jzFajRrFAomLuvGBbhDnUNUboukvNfvJz9ygdkQoCDvHgzAF8y2AU51ZmwYwoVaiykzcus",
  "key27": "3a7J6u9pParYzZATmDYbZbP1yoDwwNNxCerw3gmW5jKGxfnycXnAmtr1WZuVKdgxUWLudSRPq4JnLzFpXdHex2fv",
  "key28": "pTYT9mevkSrX8Gyd3QnmHJ16Df6RoHzABeLjJPHH92QTaaTuseoEC7uyWnfZ8JoYYu3KjDbk63W115tFCRQFf9T",
  "key29": "H4RRZ9fCSGYbvPnrXuBPDFq3Vkq72LATbhkFW6ytxt8ynP7FdUrZMPNiGNVfKY5JZSwNoUMFCLxqA9AwzCETzSz",
  "key30": "4kk35qufeb62GaG5SzWPpLk3snpuPjCdxazacXYUu8AkvbGiqkEzsT7KjD3kfErv7se2YHuoHbpLXcVShyt4NDCE",
  "key31": "5FTJDKJ7jGgb2SAJpyuSnzist7p7pEpRWsx6G2ExqkNXEMqf5XYyLDSzjWZwCTvBqa8KvPywzhVAbu5UFQsWmhnL",
  "key32": "2sQQgovYBaZvmSHdEqjxaZUsPJwEfEDUVDsrR7hSH8YEhzoDQj5XU8wZKQhdouWYZFMvJ5LQWDiRDY2Lo6pF3mX1",
  "key33": "4ArCW9KYqsJ7tYhxwmGxLzmFADCbwHmEKUzqRYXP8Hjyr8aLR5Em7DkFP2G75mLQHLCEGMk1KNkQL6UT2hfEMvvh",
  "key34": "4Nj7JWcWA5tcuL3rVofhdvxSF3fwJ366oCMyjRx7Gkxrd8x23RWg9GUGPRH3zKV1tQ7UoFST3xUJcwCPbQGBZSVq",
  "key35": "44dEaE63sPx3fmWXX69TqPzA8KEUH5dULXgRTh9nSRDqmPbvbx2FLRuEQPsfxPKTGLKzqB9h1uLqFJNro8dkXoje",
  "key36": "42o8f6PayU5rj449aUE7TwjYvaqh2KoMzha3ummV161zoxbzGSmJws4oiVbF3Tm7RCcp3fxt5favtHvU5FpJSFbV",
  "key37": "41v51v4JvXzMCikYNfcpHTeDKNHY7iLxr4JMxwf7UBvaoqXGrkfXWd6NqfFwnJi5enWPrJMKGzCtjuM1iJXokwGL",
  "key38": "4hri4rkVuFjYiXuLhvjYaEgWRMurt7eZ7pPa4eRDCSi8hxLY9axtakto8qYc3Aew11Hafev9jX8HSCaM7rt4UAxR",
  "key39": "5ssmQTuTq6Ma6JWzvK8XXpNdsBNSKJQ5btnnVvTwff4v9oZaKMNpgJfWEbuEhWoLSEgvrcSmd9W3UNVYgmtiX5po"
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
