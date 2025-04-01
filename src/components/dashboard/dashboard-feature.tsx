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
    "61R8B2k9qo8s6BNSukasNn31PZyfLw9y2FdHYpiJLwc8Eu3iknMDCWyehEi7pcCypFRqoiatbynfgUdYjQuq6NnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3B8TQAhigQtJCRog3PmkZo62NY8tCL67Wot1u7fGFtZWTarabmuEdPLPxH13DJU5Z6NNYyMRsrxJdjAUhbPfJw",
  "key1": "3TpwAaiJtKjLhN7atNA9xxYQuhB6MSiM1G2isuyj632VgiHqWMKjqRUthYLXU6qH9Mqtx5jcGeG4XUMNhNmDe8vd",
  "key2": "615NiKJrR3xxYwgZNTrEwhc8w5EgBv9kA9ihg5zT5rTJfpQHoWpzqpL9vDg3DSRpn7oob5AeeGvU36qPcDRBV3MJ",
  "key3": "e9PDQ9yFAiZYx4cpXjjufcqSeZzUZEovB7t49m84xLTtowgDbfjTzXDDLof6hiV1hbFiZXAButKkppxuaawDUTU",
  "key4": "2jRH5sauPHauL5QJvnRHYCYyjYPbfoM5r7sYY3TQyRARaU2wR2KBbHyJcakXsG2beo4nfktqD47Qv6sEfFAh78ue",
  "key5": "4yrMmfLuAXYtGwZxq2DxAWXr6FkUdCTy2dS7XD6aPV29MJBFryzaZKd8Gh8642Q841A96mmu8a45WZBMMbzTncR",
  "key6": "5LmEwFtDQn2voVaqRqAWmTqed7ZbNZbjfWftcfs7qWn7ALcVpv7PgVuVixTYm3W4jVH7u2e1Rxda8fLd8tc3pSYY",
  "key7": "3VkK8tLhLXbBAoxHAD87KiMPY7Lxv8gsLMdKUCFAgCwKwtfm7PF9DvwenQrXQSAy2eHBdNwfX59e7o4y66Da2sQJ",
  "key8": "4hQtCLMe5a9T2P4Vx96egHSk7bqxvnRxCxyUW5SgqXk9nRB6YELo1rDMSV6EsTf4d9nu7YbywF2VJoeqJU2dUCce",
  "key9": "8PXzRiTmzpNqMCnd6MFjxvxSjeHSA3TxLB7yxt5vpyB2B4kZbSbtvmYs7rTrFWgryY3wrSfbnW7V8aHXVSB8HHZ",
  "key10": "4hA2LC8YhUKbegCT5Zqn8uvq8oqm8o5fnJbwYbztBYr4ectyiWpkLjuu5kBtoAuU8P8qpZYBt62Mfrv5vy7DhdX9",
  "key11": "Lsc8rTrBrJPzztr2kQMBhd5C8RtfTC6Zg9hipyZdQLSTBLXsy6TovgY3MAUjAdmMA6q98qfao8QFC65VPiaSFBr",
  "key12": "18Hs65kjvqBrQQhygUCiAjupxUJyJECroaVeE8tr3WuQeh4ai6Ku9uKM4vfpSYxiw8TjJFajTrYuV3PMaWyvWgz",
  "key13": "5WU26o9pi8e4cjGrBmw8kY6nnoe6eBeZVeDYGD8NaQj9mWUqrsBQE1Ui72a7w4EBx4QaJivPhjbfKn6FLUfKSijd",
  "key14": "QegzE5AnAkArCt313HbB5s6WtjJWKq2cXdAokmBZGCN6Sj9zbt9V5yKCeTFBL5W7tMGoVUhrLBF8HH4zWnx7nXp",
  "key15": "5MWpHoRyj7ZsmeRQqdx6SvAACi5yrmHRYrYmySUES7WKHU9Kss9i2j6TSuPZMRSCvGcCipDnBLryhPguJSdNTN9D",
  "key16": "3Cc2wzf5J9R9kssQhCgXi98uAQEjf2v5BLGe5hDrHhH5EtB6hYiWWzDEyjpNMLTno3uoPuyLpqDaReyXi8cQ7WAb",
  "key17": "4fpGQTKfJ7C5M1z4oLkPteLhEZMNzmgpHaoSsyFq87DxziGbUovyGAax38Qec91rrhoGF9GWHvTtrKL4CG6r4FTd",
  "key18": "2jkvQaNRMUK5aJBQ5NDyMBY5nPD5cmEq4gQgEEa8hVjFmfxL5EyZVGJyRr5DJimosFhsgzfserAWUkpmbepFFqVR",
  "key19": "4fMLnNjNFjnrkdRok4q8qfd8ZXA22qAZX2zAn6hMxoyKxRurv2RJfYaYBecm7wFiM9HbD4cS6QkrxNeiq7TfhgSP",
  "key20": "4E7qV53y8zcumJX9gbssCUkUpX3tsXNvjz4nyefEQJCCcSKxPJiYHkNUKLsvNsEwPrx3SPnwfztMfMuHBVAPQ6Go",
  "key21": "3ThuzXqQ2L6inMtsz54P85EkZVJbEVF5sEpSw3uMd2Mbsp6uQcj8vu5wV2nhxpfoEctTuxVZnmNyx9SSDhNtBKNe",
  "key22": "3bdLNnzJRQpKTzpknYVyUGbPdoBRfNinmWtYKERJ27wjsQ5fTePkQhJEqcbdkBoev1vXS3z1vyqx6GXrvTJMmwRW",
  "key23": "ReZ4UUjZHMnz4NWpcsY5vq2Ki6u2btBcrEozjyG7t77SCrUaxzE9CPpA1FnmabbNur49Fn6wyBoL6Wys9tSiega",
  "key24": "4qpJkqDU1oCctGvaJMrf6Rsdvza237C7Qk93h7rEUVeRWAH4uFzFeMMQDvf5XQ6tNJXxLU3WY66oyGeUwmqi8Tak",
  "key25": "4pqRiJRmWXLHpC9j7CUJkYSJAarhPDFSCp4Rv63Ff9wnQXZwnsqXfcjHZvFKQap38wRRd7jH9RgJv7tYUgc65J1S",
  "key26": "4LdRPjqYTnvS2dfuYhoKQwbuuNjuAekjqXG6dhUuRhk6kecRcUNqfZVW15BYownsRs4WXtaEbNfog8fdYZ3TwTFz",
  "key27": "3gcWrp3GnF93tc1CAumknXb8o9iHAj5SzCHTfrKiNRJ15NoqeAFaRHeHWCXR8P3N5ptt6VQrTuu6R1TvxE9ZfzAf",
  "key28": "4wHuQbDwFUVx2mgpKGFvYZtbsYLorBTHdFxheNJirnMCxyczgZ83yCzDn54QGeStrQFUSbdp3m1fF9F1SP31icez",
  "key29": "5ygWGv4L2pdSKH1G8WhtdzCKC4us1V49kt2k46e2PAG1ib1MhiHr1RHmthKShN6TjWzy566XX2S7snFDpGxv2oCw",
  "key30": "4qVE6ALTr38BQw7Whv6DKqEPbPHsAAFv5tiYb1z2Yg5LYWNct2FDJ8JdUjHL3xQqNYNdT4MNsczFLqBBgF2g3YEs",
  "key31": "4BMdt2KxMRKGtNDry28vZKLupYrRbQADRQdEqeWva8hLV6CWsYzarX55zE8pjMpM1N9jKPMB5HRXsDudUqR229aY",
  "key32": "4nwaiEQqmA21Fa7gt9VzJ2gZoJ3TqMyBEpEsm1WywGVbNcz9EjbZdXFqat81DYWVsZSLV81ZqbqD9Zjs84SwBUQC",
  "key33": "2oz4UnxFa3FMmMbJa7HJY3V2964qwoo7j3duM8Bcb4WavQWSbHWqNYp1MQAT5ubm24G9C3jztgV191nELe5uMU7U",
  "key34": "4oeFU76y2Wp8BTCimftnEG8MB8MLKMrDayy9BQ1iz699P2XCwUc9e6dCXADDGQYQy49HsppbNr22aV31Un3d7CNR",
  "key35": "JH5K6CWGMyjKmLvdcwL3PZKCndY1fez5n64JbjbnVYjSnSXJ6qQBM6e53bCQM6g9Rf1EQybVX6TgtszotjEEWjY",
  "key36": "5zcgF1qeWq9MsUcWVyuGcBxL3hjCz7Wy8Q5qiJNL8jUhNtDvfb8zCQRkB9DArFy7dFwGSA9LcibpUpEzHaPcYNP9",
  "key37": "3pmnXLKMv9sYaKvAF4gM3Panvf9fedP9EnsFgtRaLbYgYLbvRjgkoC5C3F42PfTwid7AR2cNDFiLLWmUvhitkt1f",
  "key38": "3YWjudsxPXFGmkKYaHwTQDXKNr22MM2ESq3kE9sXd7DbRKLhzaqCCgCwC6ZZFe2aTTxAYgfotUvtnX5FrpWaB9Sv"
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
