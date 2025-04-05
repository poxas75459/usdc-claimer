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
    "3xndc1hNW6UKFoKH1RjbFt9QMMH1oZ3Er9FGN9WbrCVyfeyHiaWdM8Abv3g6kgQNy3p83vmBmWVWw2KKb8TP2D1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KxFVezWfhiVC6LG9r8yjW17R252bHtccMpxBeH5Sr4Dz7tT3aV2iGjY6ypsUbakgPc7RR1X67uJ6jNygKjeyGrs",
  "key1": "VWxv9S9Js22QVLgK46wXGCcNaY7RYXcwCedzCfnzYpW6UHa2e5jmM9Jup4vVmq7EWAzzygTA3aKM1bnSeh2mY4m",
  "key2": "67MzKTtXaSHiibeW4jhXrwD78YzHPBv8mbBNCtc88eyqaaNn18kUbbzkBvXtTVd1MS5jbmzFa1pyn9Ho5F8YZfxD",
  "key3": "5CzPL9odDAB4j3KL4MkAAFLXZoizmxyu1LxZ12PazAdwj8M2uAraVw9vpK7PTd8f3QoRPUFWqvdKyRyP56wsHbeQ",
  "key4": "4CbjnHzH2BeFZ4wCyTp1etjzR7MLDu85sn78aDHiWJjfvy8mBVAKnruuqLimjp45f6RjpPxZTcDkgNJbGY2pcdTA",
  "key5": "4j5EDiU47MwNwHpLecsWiJ7zwMTfc8HK6xAbDWxGvkc3pJGN4oqnX2CgDygxuFj65mteX2GYaVNyiUTGuV3JoDkj",
  "key6": "iioecq2SbKK6c4uwEzZTJgLBXyrHzwvipNEV4bA7jh1h5HjWRrP97BcpXvqXGTVfotvaby6TdsYJ69pYp9hRyai",
  "key7": "3Xdm1dkWQVQNurkuajFW6GJruCow1muyc2rhjeauBN26oNhyK8KLc4vF14yApWu93E6WAGNxXCXdJiV5kFTSwHgp",
  "key8": "3fVWRKoxosw6kQbrSVvY6aYp32AxcmXcg2q5m4fgdgoQ3YzQeGRY1MNHaL7AQqdW4Z2Y2ZeP5a8Wj3mYJLfeQy9e",
  "key9": "YGKUT9riZao1iMjMWKKGZkvye7AVL387BufouTxLVSzZFig1muSeFetjoTguZy8WHyJPrGxpNWEKk5c34qkLFfs",
  "key10": "3TgCYrQcham9BkjA8e2xPBQXBiLz3Whhng6Lynxtyp9kaFtCPhzNHMwu16sPkkrD4dLrcVbZWBDUoTpVU4gm8VtV",
  "key11": "3VcXhMx8uxRyXLpGuD5WGibf9qd4UGZ1yZP8MFBP4SZpTTjXu6d89ESK5V6kJFf1AXtf5kDZgi2jQszn3ryeW9iB",
  "key12": "3Pg27NQEyNUG8Gc9TcJbzecgQH2P5rdfKEzH9rJsHTuqFiaWFtmM7Sfh7BmUvTc9z2hZxL4psmrx3D71qyjFfTv5",
  "key13": "4LCd7T5wKhGKr2KTtZbwjpCYqrkU3X1YsVsGXpAgTcGQiLNAhC8RMmeGkGi7m1myjCm1HUNhoeKyM15EyNDE68G4",
  "key14": "3GxveqTmS2NbM4GonArP7BsBcpgzcc2hqYnRUtBhCDMQ2t6VA8nWmKyNvCtfBVuRhjmk3Yi9Uy9c1w7QMLkWXS9q",
  "key15": "3MDYtsX3ihyF3uGP8JkPWvGZsEZNAwQbipdM72JKiG2YmHEPKvHNrUxvm4S4TXYyWBVG1TTTf5d6YMrYzY9S8bHp",
  "key16": "JYDpJGZ3UegSNcuRarcCAthog2ytajGTMBszi4Qq6VxRmUjgUNJDWdMGGtD2Ets67vW56wNr9CqQAwaXsikT4iZ",
  "key17": "5hirVFhZpkZu3cJX34Db3bzPC27oWHtriy43ZU4eSLqeuKhEhESA8sXmSHZTZ7Saks8zkHG4rEbnsuC9oBRdqoTj",
  "key18": "2X8q5Ltmd8WR61AtvjxDhcqytTHkgWs3fC82E4wq5bp8vjhHmwCWSesLcHf2k6Gn8rpyf4s563888PanY6651YHA",
  "key19": "4jyauUByDNREex3LBziTyGUgPB4v6Fafq8F6Q1taapidrhbi45GwbfHH4eCs6GfvsjP15qN6PMmq1L6p4kEpzjQf",
  "key20": "5hgHdXC4dVyDqYJBp96CkdzH6Rrx224bpGqNu25uTaGqzZyaWHaAM4jDL4XrtPRSPgzwydrzM36H8SJHDVSxCDpD",
  "key21": "2UXCAdQC9Fxd1ZJpLJXSsxp7DLYBFcaeQQi82ghkW4Smnr8odgWnKK7BumSdeFa2uDKZV5kxuD1ugfkBgvtzdq2k",
  "key22": "2VdoXkRFDzkQ1wrEDykHCaiJh2NtqontdnpKMgc1iCqvGLNBRbuhUpyX6ZLmo5E5CvYxoP972xfd62jwHTcMNR7f",
  "key23": "3SwcDQomD4UbG5BG1RvtaoNdUeTrznvdw6NcxnDMcvMQoFG6wertoUa6J73P8x5HdSMhFKorXfUKgbLWtUouE3ta",
  "key24": "4XPrqSvdZgnUgc18bp37gAkbVsQM7nXKsrGhAMgv7vbL7HbdR1kQgekfYtRHLineNHhP6KPUQWZNHt2ytFtVSxah",
  "key25": "5dkEYZ5bNRW8RCifxgVej8ZLU8GZqLB9NsmpWMVxFWCCXNnRpJZvEkJCYpDsTfu23SjfKMXzkRboDoAw8FVbHkpM",
  "key26": "hdSLph4itSDUFR98DZiHgdNemUYqNTnbcySKecU7E732h3gFCxbr9Pg4AasacvHkr8dd846HGJzBdYJadGndhAj",
  "key27": "AttQg8Wtg8rezRNgbapPb1sKN2mXdwkqzuxzjZbYcnQPHxLGg2Tj2ooCPxYQbkSKsysEPSfs5MPsX9ZueXhqPXF",
  "key28": "3R3yWBP7s3F7pYFuPYhxrCXMoEzYbT417gMzT8t6xsnQqKR4WNYQFQEyKJHCSSE2ubB3FQzgeLM2FoJBdkpTySQT",
  "key29": "3etmnyz8pYygPcpMsmA5YKV4rY7nPJoH1cWLQQCxqnvKV6GNaoRp2jQnsgZQAcSZkSUpNLco9uaE2dJGBZyfyAKf"
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
