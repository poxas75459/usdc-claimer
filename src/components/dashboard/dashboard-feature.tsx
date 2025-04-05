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
    "5KbBVE7AH8syfs8vV7Mdx2tVLWa9mg5hnBzX8ebq31Qi9wYM6nfLNsWz1GJ3cS8xidFYKvv7zUFqRdZmTWSQhq17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EAW7U131Yb9k2Ktg8qMP74oBLSbU4kG281LXsNJ1vBVegfuxY37NUokQDVYN49UxBcCVKkfru6oLHiV6pyDzuG",
  "key1": "8bFqten9qdLW2sHK3HXrZmxxdFVVNoNP8EhTNpHN46EjukTpXLxdpkbPa2T5fcufRcgCs6YhYTVdYv17zwNL5Ec",
  "key2": "1dPR1Yba5m93ajbSSCFdfcfqvAKV48uWnmzkw3zi5ht2hs6Lq1pSWd6cKzw55p6azzurZiuhTnKZCQpQ6Mo6iEk",
  "key3": "4mGuLmY4cN5WRFUMe8P9uPAFn4e8KQr9pWLc3FYETHeTn4vz6JNL9dBs53vC6QUgsUsKHpAsAL8ZxoBe8YBWsqGd",
  "key4": "tSo9oKWW11FqpxaBMi8fkgwRoQz2edg5iweN7DHVp6hzpEMyhg1fCiJuAWqxGPS8qS5Gg8AdRrYSnKMySgDs2Qp",
  "key5": "3pXV5wGULoNqUamakYjdacnY8EjMQkEY2LJcZX9abtwsNm2kVbY5GWUcZKJuxiBn5iusrtWxzwS5bSfxWZQnwtYV",
  "key6": "3ocguFCcBa44VxR6ZnjLvGrMQDhYQ1b3jgeiYixm3wWQ4RNRfhchuTxujzw2FCk3MPy2xETrQ84pyJKC43kPQ4bZ",
  "key7": "JwwgycxcRH5C9ws9gDL2iFDtTwANg4vieFw6b8mQvPo4Sw1XAWxmd9UiCjS9EWmH4P7GTGbEJEbRA3uLNFLjBVE",
  "key8": "4GmnZHmfxRqAZr8jxL8JsVXBWKrLWqnPYc7uPMQ18n9zNmtPaRZGDiySfhBxzp4X2mNGvvkgcYSkwKEdALvcFSGT",
  "key9": "5ATgPhXEpZehcaV2PYq5WEzJQXmnLCK9fYN4XNoPV2C3N8TKRHNo2ktgDJFShVuninZeE3j72gMAAiCaJR7f3JSK",
  "key10": "26ZorLJcsoRYszZoqWWtpV2bJM5VbzSUBDHzpfs3radxvTEDavMg77UomcTBwS42jTY97PHbJC4tzL7VZhziJVvR",
  "key11": "SwtHhjPPDdjiB9uacqKfj7iwypNr6rh3SRApYxxPqbpSEoNgMqf2TRFaZCFaShtMgzxt7nSqTJQVWv23bkiHAqc",
  "key12": "5kVk5obTLQGwBWwvHY139rAPviSo456r7yoMXsDCJPxpqPC6LnDAYpDvrndSDjwC7vYygERGbaQ5rM6ker8GQYBt",
  "key13": "484M5qPN7yiKPZDP7fkPbZd5FUecpQkGnL7avdx4DSzbRDTqcHqftRGYSPZid1aSjreQUNQTm5qY6S3mf6DwvbsM",
  "key14": "383vuDJ7RdP6oxw1j8B4gjdaZCaAaDwifAe8kJqxU3RgTvQF6EpwAC12pQMh4dknkJFcPNAjhDpopdmPjz42dYBm",
  "key15": "64iVWmYvnME7aGEvTX7qfpK3trNx4xPdd8fuV6L5uzaw18q1WAWDJYM6oJEsrJbATumPb913yBM78strftyRuLY",
  "key16": "4xrcNdUWbnCFi5anNQFkwTSmcgXByuH1TSG1w1n9QdGC2QLF26TECUzDh7pcxUTZQcNpWDwbR49cS1mvQ4V9s6xa",
  "key17": "2xWrnqgydX9AfhXMq6W3GDKzvZQzExKQjU22H41ibhRLtKVbbSKku67wkd3t8XxLajJHfdtZiTbEV2ZPYutQzYzm",
  "key18": "dB8dXeyQL4KCyrTgz6U2Mu4rAfVdAkqB6kszc3o4vQutwg1NsdBJ9ibLMaRzFmjYhHVoaRFgwNbLV5C3xoxnZBm",
  "key19": "44ynvDj6NxApX3pqWeHPe7QLMCJdWL55yYKogcBh34D7H4FTMzGCgodCJgHyNcUBM4cKvg8HJtSvpTerzve6HrBu",
  "key20": "PnsjhUm9KKd2nKHbMNxsmBm6GNaqrFs7A3UpSme75Cv6NSxd1mhokXDXdTDtcyE8Nk2fusWhH9h9jgzoA4my2bW",
  "key21": "5GzbCqkuaaNSJ4tXvFFU8muKuZWVcWNZP3Te74Cx4YUBR13EUngERXJaQ8VozS9WG2YKrmWquLs69mXmawQBvMQE",
  "key22": "49zURAnrmFx3gAUFPpjqVGgbqQxpt1qEUjfb5uAvTBo98suYPg7km21a2YodPbmD2UQN3D9hd3JhqDtet73cHi18",
  "key23": "23dYu8X1zQxXeLwnCfYiVziUb2XMwhXbgRdVUAsVMTF5vBgUFYdzP1pbFx15h8eHQkmSx6JXzrzczhFvCLiFZv8z",
  "key24": "5cYgi9srG5RvkzsKDdCF2A9YVWqXbPpeAw55hhhjRxMb6RLoMq3x4eiVXhyRGMyQx5YCDYrgoiyGUXzeVyCJRQAt",
  "key25": "3s8aNpW6MTJrBtigJ4VkE6tug1LiowkCt5ZsFtN9fxF5h1HtKGnA1swpM2oVt7mbGRnpkf64JPg8w6yfNCDWhbnZ",
  "key26": "hvD7mF9Xi82BVcY9jtyWnXw7GZLWfRv7Hjsq3XdiwE6tyrmvSfecj7pUB5skfUQ5S6ftPWs2hYE24W6NbGNGsFL",
  "key27": "2rh5xpBF6uNVR5x4DyNBAA7thD5r61hoaV27NPxpyZ5nKRsgPUYC1JWc5R3REw5f3LUgNmE8caRkRpcFej3JksYN",
  "key28": "houcF58v3yAVSp8BXBXgtm1NwXUSJUEjSsNW9zADzdkToSiLqQ8RTsokGeVx4JWCL8xz3Npg2s35iKR7kMLhWeL",
  "key29": "5DmsZZ9ptxw6tiWuAfeedCTGpe5fticUgYbVG27595FNua1Ksn1WhL3bucbwFKUMJt386dxdSJVwRdgs9a3CMQrD",
  "key30": "47NR35Nxkh8LwLgvGJSNiLDCVzJG91hdAubcXfyt4gZ2Vn6tE1r6sBufauxNo2LMwuz1SS4kmW8jhfQLBKMQoJvM",
  "key31": "3z8r9FUqVSz11HL7acdam58XGib9tjAokp9RLaPEJPAotDouEsVN5aHdkBRLy3KcvVxneFRmkTfXFrn5nDCgArW3"
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
