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
    "XAHwCR2kiCgxDh7MAMm6FGVDDXw5J4gtbkndpYjanACndQXGSxnMiWodVvhfqwMEaMrVxRe3zUxhhMVzCtT7MFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEdRNRbopoQ7nKArWqBtNuiQUFzQDjpEwNkx8FSPgfRzFw3xar59zyi2ssmywNZQEKgdWrYJdzZW7iKs3Ai7wRo",
  "key1": "5sQU9uiJRpATYdjgpH8ZsWqvkbezbDRbXZG15BCBSLVzaom15S6TnhbFzkhSRJnTpBBGPX6rLivjqqzXAnRAwqFt",
  "key2": "4fwXitKtVYQ6KGi8RHwgftFJxgTjSiuUbQry4G2tFKLJjWjLjRQFVG3NN4mx8F4HVES2FUNux5KHjPxSQm8BFrGF",
  "key3": "4FUPpYVpmsXBujvErYgBvateoWbFhAQD4bKHzZocuh9cWSkwRXRtH5UJDvypSHuyBCYGorpZjxFmDoiXGsCZAwyy",
  "key4": "XdYgK2MZcXrS6pTg6Kw32b1USAVkbKhyauszt3GdWxdNp67c8qJweoiwQsBY2siRtrX71KhsoNwDy8UpacRHh73",
  "key5": "PRtUWf9ZCTkhYs6b9raLrkWvehhj6pDDZY7vBiwDdteXqxXUJbSMzfL8UwephL2E29M8jQRxuVPP1tbJjvrmzED",
  "key6": "3cnthcZkKw2ZYrvpUwmLo4D9UnWbeW5B341NwYTaDdm6sjFRWBmbVwnR9wiHErMwtd9cqpMrXmioiGjAurenk3VS",
  "key7": "9J5c1yvcy6Fu2uGxHMywAiJ5xoGrfVKHDqEEc1nAemfAW1JczCoLQwZjuYdGsa3ZHUjxNG5Tbgf2uB1uhQnzE4S",
  "key8": "61ufgn4ZukFhdT5TvaPnRQ7oHnxQNQUmN3VcsywVhMiFALU5qjb5MH6ibXsimCpdR9gdvDKRwLGunpeEznhdDEEX",
  "key9": "4TJJ6Vkik2kDhGY42Dr7PVXyQHyw5mn3kv4wwV6PjmeHKv1WZ1BDeYQPY1xvKBL4MekUS6HKfpE7phtoMhSckRvm",
  "key10": "2dSDDnNSJsNg4YeSRGRbi7fkrwKrecHDv4yjdh48PJV8ZAQJykmevzWDYfmWm1GUJgiPeEwP5R5qGnTMsUKoWDPb",
  "key11": "5quoqoQmpgp9TFk4txznPpCJ1kG6RaoibWJ7isdkxGvEKmyjtGVDRt3PQ3aJgn2ZVBENHudRfdpUHrSaCoUd41Ek",
  "key12": "27s4vBTQT7jkuSKFuWLTimidSmMT4niGaJ4CpjFf86kCW2Vy3Qt7NRXkDgxtpFYk7eykRxn5r9Amazr6SrKsp3xg",
  "key13": "4My5m9BAL3gZ62ArrmzLFkGeA4dENN4C2i2MpiD9Psfoxtk7U7w7pkqshXF7J5cEUoFTT7nwMEUdNk1wS9wyGQ36",
  "key14": "CSE8UinuMYEm6oWM8CVzM9rP2JqAkpLTXMW5uhtBEawJsmsm68Sne9pUtGHCnjtmgSR6y1zXZgcFZ87XB7yE6QF",
  "key15": "5zkpbhwPKiUUqyPsKnKxgYpJuy3YnxQ2CS6q1ijMt2Vz9x3mTZGEhH71fQjULVN7w5yRKmVzr43n2TbQ52K57rXH",
  "key16": "4CP7TKSJFWYzxUD9BmnuLncHkEZLn1jE8wg9XhRtQE4xJSUyCym6WBGCZUYpPY77pMm2y5LQNBS9WW2VezAwERmJ",
  "key17": "5Ho1HYq3YsUS2gA3oznWY3MbWTDzQY26VnUT4GMxnJzxNPZbp6LM28h69yhPfoiPHJMsXmig5TA1Mtb5uB1jpmSx",
  "key18": "2UqeedhJRhJbkvuMqGCA9dQRK2rwdvtUCDHjXoYNqfaCaahraGWFv4d7R9CSRkMDYoEi6JfFH13QTEzyzx8TxwXy",
  "key19": "4Ke6buaXC5VCevKDN93rwthxEKFNMs6zCRWXvqwr1WftcaNeKxi2eyzD62cZ4GQBY7Xvq8KNkzoziSHyEQMm6F5b",
  "key20": "25UL8hWmQaVqFjVXhLCGnTUPei9Drnvv1K1uWT5KQ74d2ixm6zEzPEkJTEjPwZErUvheJQrGDga7qTTgnJ47rPuf",
  "key21": "2JESHRXyW1G4cor6rvdKked4Vmjk4HJZRvFhd7u1mqyKam8LBvUHmevb2c3MsC8Bp6B3RCGe8NAncPaRqAELDPkb",
  "key22": "5wEmd9YxuYCJ7JmVy6c3YJf5H2G8zqAqtFK6uezRaDZYwzEEUZ1t2E4AEgHoC78v1cRBDhkcx59WkSB8eAhJCQGh",
  "key23": "2tT9f61GsKHCVUgqLUiKbzr6rymXRfJvBfqniGyPwFidRPc9aRhNEz81AxJodsLWimFMuqr2MkLnTqZBd16ARxvo",
  "key24": "Jpg76xZzuTyBWJPnk7Qq2Kwm8BaYeBmWoDFRo2RyM2bbHtgHoBPwEWJuPEfk9paptMpSy88hvpCLZQf6m2nz4h1",
  "key25": "3CsfzHMkrvsKBxYJjSvoBeXkXy2NR3ubXrg4hN43GNDjEyhXhw5FL1yDUKLtCVyyZ7W4an1C8V5yKY6dteo7eRFD",
  "key26": "5pLcaSRs9WCj4sqoQa3fzP2kZM3Y4m63fUqxtEvLuau5DqxjowBJ1jyCP6naZhooPKE5ndAv4YVHowrhuMAciRDb",
  "key27": "4zGwpLwr92DJvfCb8NUKd1rBQwFsBtSyHuftoPe3VxRZzsSaAWRms7riwj3vy1nH12XLmqPwfbEesqtrJC6Y37kC",
  "key28": "3WoRrXWaJJTPThRueLoHk5XftdQKZ4XSHr811gHhRPJgpKiJZqRWSR6FbYLUUy5orDd7qUqihKxGZsyHqpKo9jMM",
  "key29": "5uXsDHBK2RRujtCjEFwLeq2xY6k5nQTNTckeC9d4S6qNni8i6MV9fLhgNCsymDx1R7ceTyfK9EJvsUG1J1qZokMx",
  "key30": "xtp16mT1fn4nGrfTEjhd4Q3rm9dM5QcLdzGzPdiWbzhZZs7gSogCD5PVKw82ubau72W4K8MKKMD7LpbuM7SCaSY",
  "key31": "5Q3Ed64GWfEyfRFr7jrsd4EdzwtACo6BnKDS1knr1oGMCNdgC9oYsaeXEGZpfiyyuM9dFSxTrjHaJzX6VpAUQidm",
  "key32": "2JZLJNHoZv6TVcRU2tDQDv6TjB1d47Br9JmG5yUZuHE3AS8py9ZHfoax4ssWCQtV9kRT9q514RgWxSP2it962R9o",
  "key33": "21ymwfXGm3oPgwZvgB4CZvmo4ovoP5gMxX3HNTUccv6yGtEnA1AZUaqZc8VL8uL2BSaQEF1JSeqxd8L4TFbnzkZ1",
  "key34": "4ZCfdzz2ghxQjv1jgzrizxVKFPAsD9y8kFmJ4ckrSa9vf2K1KZSM8zYXuFpmxbWSLwwUgj1tyQ5EcicMjtY8xFeq",
  "key35": "2tBiHUEnjTYsiF9nMKbyGyzfzp2eNGgGtiajZCgfFxbW9gAm6tWc2PD8aEUSHKuVGrbyUnAE9a6Ajzuwa5paeCGS",
  "key36": "5WuCRADkjcYAKbPS5ZX2gQncpFyeipamZAcmnrVbYRz9rqr3ePPTGBHnni2dwCFUqWQa2dDrPU5xgq8peAENYRDv"
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
