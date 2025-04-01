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
    "TmzhF9AWqUHqYXDJHK8HrHFmgFhtxmZ8HuhjSLsDSNqU7fZeGCSMBkM1hC1JaAeCfVkmL3brAC5AR2TNLxrVZd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgwVqzNzxXCgBqmYb4pjSQFEQtAq4oNpSxmityH9nxgpZjsyEHukBUgDYgLwiSskrtTAGB93Me7KZVMJCAWUQco",
  "key1": "3DaqLAe2xNrd7CTCGktdBgasyrR1Su4hPrD35tskQuRgb4egJDNUSGxpf81ggPMpE2vaPCNP2X9kFJF6Lb27iVxo",
  "key2": "38cS7bp1KwhsspL3UKUU1kDx7AgE9mHpNs1ahcb4HKJsdYnRzSvhe1v3sYkHxcWo8FyCbTawYMWK56pqsEV5Ydxj",
  "key3": "3Hz8XLofC2DreJ5Y1DkoGYyXnBDPQYhCgcdRHe784NBud4qQ5E74tFSJMF9GjDNFr5gS4TzDXb8faH61MQQbv1Xq",
  "key4": "4JZSkajKpgGdhVSaueN88ayBBwTG9NYcTeKWoSX6ncuEeWYeXUWTLtqt5bhtksvcz5D7esUzcoX2vBvoxLLZ59vM",
  "key5": "44dqwqTc3bLjQG2PGdxQJ1EYoMGoNXiCSsNantM9HWDBixJF2kTxtMgR9y6pSojiAtsKJr67vWQobLmohoKWQwci",
  "key6": "5vt7Ub4m28KbQE68V8ugWwVY8XEMSQxrX2v6HPwkEHRZto5uZaVKgWH3gBEUtePog2sHiAGzErCa9GjXobV1bu23",
  "key7": "5bmjvofeFemcgPEBXchMdVJt14eYMHCDrYgGrGmYhUwqnpHtPNttazR3WsDhbBtagZHh5LohBut9z6EMvywNLh9y",
  "key8": "4BbZcnfzAQHgeEtqbB4NsvycYCNnjRbjRL8aZUeUPGA1fvqoc46cHXRuKtL9i8N4f8APeYnaNTJ7Fii96Wve5xA8",
  "key9": "2GT6xEoEXQB9TiLravbsYxu7eYh9PPgUxwpZqay4jz2HZosP5HcoZP7VfPL83a1ExrCakK1NQH25UX7VhZRgVEAH",
  "key10": "2Pm4vS1xmGFX9RU6RiNpW68JWXW5jo3WDwVb2rG3WPhgMop37psyxytySBGBtt4Jp2fKV7NDzrVg8EYE2YNdP8tx",
  "key11": "5ejvHnk6JHWdX1TXeawtBP7sfH3CXvVpL5tNjr45MXGT3pJjBJimZZTxYjTLJ3BwpAjLKHf5UXQ8tbvCsK5HKAsy",
  "key12": "SoGnCuf1o8VM9JLiaEHjaWNSaykP53hEVBBGPykdMpPaP2uUJSVLcq5FN8hdJJy1HXPDEzmqkK5HF35Rp8tVdt8",
  "key13": "TRQLXKVhhmNF6aeNw8PWSYDTyTADTNyGGUtkkhqJSiDCNGAeRiTL5Wbb4DbbkCf2JpJJVchFomfdnuYu2xbazMi",
  "key14": "64C1UyTkWgEgBDUKChtoMJpWLrdCuuAVR1iv5AAUjYxZrxgEGTgAM6Jn8xQtmczHwEtv7hrP1HJqYQrgbgZ9Mih6",
  "key15": "2HbF7V6Rkuj1skoMS8jcmbUE8vRmDHKMcpp5oLjebDDgBtNoes4YMwV8AX3bHS8x3AdEfX3gXhuYqqeLLXfJLEW9",
  "key16": "89BLfKmwuzA1VngZaR5JQ2PvwBDazERAZb8pjRi5QA7PUB6GHrkr6CsfD9TjQYr2ZPjCZjztkXZLYrcXJRNe5EV",
  "key17": "tGZFFWn9DW6wEKtRtiK6Y5enAQ6DQpQYezDQjD7d8iegpvBZWYcz4oPj3q4BfakC1RBc5BMjHKv8QvBT9s76vva",
  "key18": "33AkN36WVwiVxqyvvyAiuUhP8JcRaxDwdcqF23xj6rJNjSoBg6CbXvjua7uuw19qc5f5p4QB25Ky2YYSUC3GMKk4",
  "key19": "2kNyWrVYbhN4UgYu5k96g3ez8jYSLe5uAzasTrzAeHSdUNU19esnD4momyhyGnCD6Gs1qLPk7rNMPyo9Pr7VzDXG",
  "key20": "5UoZkyh8Bg8swttmMgkNXh3dzkCxMots1xzWyxhbzggKX2qojguzuYg6tG5MNQ5xoZTpkKofbivF4MYMJr4vU78V",
  "key21": "PN6d2bEAsyTm2zqVNUf8ah8CgJawgEh4C26WyEu9ZS1tGUUJM4uVW2rY5929oQpbGF2xXChh1oQgnPjhCd3oSBb",
  "key22": "4CEYx7bWyFX71Spn7VHPb7LThsqnSbdBKj4Npq4AdQZcYZk34Sgnh7qL28hdMNKhgWjgsDVLsvLHGuhUU1Y8iMqH",
  "key23": "3XuC2eMMzj6gqaUJ3ZmBDs7SPwogpcQbe2h4ckD7uarNqnAXy89WidwJNdsHLBiNuvoc2mY8kvLZ3WQQWCuAJzCo",
  "key24": "2vJVRWQ4QvaReCYbmdaF866UZEGKVufaMgdopqGHkN2YUjfdNcNJhgyvbxNUjdxXWaY5QtkNy8Zyu4yCA8tmvoxZ",
  "key25": "2jtsHewg5dTirT9wjd2WuFaoBuodwkm9Ykczy3g6BJKvRoG6KqWuws9YsrhsqUjzLc3eXiXw8CUiamLeV5nB9AoM",
  "key26": "fQc9QvRtHvMofWYVgdnWcx6qTMGuT7kb21wSHhsk47scpsDR3bheuWE71dGANNr7hHUD1uyYpD3xHdjm9P8vgHk",
  "key27": "23New7x8udRTS1cdjdZPHBVv3fA5W6DjcDWGHhW7RHWrkXPJhvPgpFQNwH3iHp3g4u4eMNJ2kXZvwdqkaUGyvAa2",
  "key28": "4r5o3CUhuW2zxugBxM6VuptFA31ujCYRHkkR1xCF3WpD33ryBKtgK7iPexQjGJeUCRXcYfjEEY9qpDycKNUmtyD6",
  "key29": "VGyLSCHidomRCSNWnczwNXpc2ceKb3s3BA5ubwcmzbo5WQNYnRcLhdRtHv1CCWwab4WjwTUq4tKqZuW1WgMuucT",
  "key30": "gDtbQTXPAs8ctK3erCNbY9bjCDx5X2t6oDFTPVtTBno2UY9PypUiqJWiq6b5Ru3wawN9ckPUzzYruVccywhdRNB",
  "key31": "ZY8jF1ZpbYuQTz2AVtRbGGnWUDtgTwxuiGTE6UJCcGw3hx4tPfxrHT5cFwoTiETeUGiB16fbas6ZHYHYnKwm8QD",
  "key32": "4RUXeEtax8C3AGZcJjEgcoJbvkJKAYdxYZdHgARq2bHuPDX9MkWtgLyTMxpRg46FSLHmT26vDkCW3yhx1xsPwPLy",
  "key33": "5UU6SKeJTarbyoi5qvn9Duis7f7DBF3cMqcfyzNNMH3VPiMZqT8LqPe2KNXDbgPqjJbykGegAKXHonFxXjr6JrnY",
  "key34": "ywK7uj3k5zj8zkGahTZCks5pJ36LWM3XPEic5Tibb91VSj1XB5fmxk7q5qWZvECX5eZ3msntxSWLvHZXv9k17KK",
  "key35": "5GPo7wgcCjc8HeM9dbD7mquYonHNgt6Kb4oDz5hijfA3DBi8hdRxJYR2vPQhbpowDrjCtKxacvdqktsMQiEhmNYo",
  "key36": "43ZHPe3rZvTMn2tj5yVYgmxNY6E3yFHU1E77J8dheNi9yMP5P2EmDF7N9x5yRfDd8G76rfxJM9eXV6P1DyLrF2kq",
  "key37": "4PGyAV1U6ogDiX98cZKNfQ2NZvzLpPB6ENKeGxT3U3nBdom531VBbkjLVG2pyXCJrDcyeixjwmWJoFobgRL8ZsFF",
  "key38": "ETenh77TfGpTNAfYob2KVGEn4fwUM2TUnai3m1VnzLfiu7L2m5xPCZvqTPf2g8uEeTtz5knNUfwxWZSbXLBJZ46",
  "key39": "3n4KLQ1CHXBDBwy9R7dUWyonysq1LW4s5YE1aLUyHcNX5kzjUheK8Y3vjiJP4Uq9XepGa8i1hLzcZjZUnKwKhV7A",
  "key40": "2xZGKfcHwdZLUDobSKH7AHcNcKYw4gbX9PJjsvZczb4iuP6YmGgzcXZ3pbWhN12zALm1M6pv9XktYjpUkWerYVNN",
  "key41": "BX48x5QbuSwhnoFsoAFRzBhLW4fKcp7JyaU4TDgdGGWBuyhXr7qCThqvaXrLL7NSBRFzLmS8eAUrKfb5GzrSZup",
  "key42": "CMgaMAhhDkaHv1k6YX6VwYJ3qgzUM3W3uJJk6fF3MVakbsWMinp1Q1QDzXyod2xRC3uNDSaN2R3o2MtNjoxgXBC",
  "key43": "oREfPgLA7CYNwypDu74ZoEioL7wn5bUUau3XbZWr8y8aV99LrQAgZYtJ1P2vAo2RTW5X8vzBN7bkJ3xP1gomeGH",
  "key44": "4pZ7BFvA4uyya6z3VdHCc1XiBGYqTV8vQhQfcNDbiYAWnYap4GB1pXuscDAcX5m2oeCC9dKhyfAbkk6Ve7yp2ikB",
  "key45": "5LjPCHcPGXaWMhHLXpJMDxAv4NLXnFPupAqEbR8sQTakeG8NxeD4bC7oUYkdQ8KytiHqNXJhwGDKS9fZQJsqPbRX",
  "key46": "pwRREEGxayF57njvBSYvAH1UDimFhmCC454CWX9bY8eRgANMeAZHrbAMNzDcfXRLXupGWC96nGCvE13KGoK4WVk",
  "key47": "5CSqi6aj5Le5S19gQ2BJpLoXPk8cf5KbKhaPQ9Pxd5sEpwjX3Jt8nxPd7SAzbiQGZ6BYLDcwa4r8cVvtjHmXw5i4",
  "key48": "21s5vS6S4E6mYsEz6MLfx3UnmfzD4ZcupTCHLRDFWvk1hzA9uKGU3wPr7CyRyQxnFxwW9giKBt3FUVVdKF5Kx7AV"
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
