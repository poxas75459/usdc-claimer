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
    "dKT8p8tkbPVwWRJxkcqTqaULHn6yPZWSr3wv9A89NKfKWibiHsdwZkirf7je75HNXtaXNZE4Z7FHRqj1RcuekR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpo3ZkEyEz63E2xSdVGc3nRs5sZH7z3d8P6VprZ8NdjSfrzrJZjNTdEFSr9esZU4pw77ofDP5DU3byebVASG6wG",
  "key1": "3faVqjh7afpNKjdtLEd4xsq74r2s5ctoQcX2g33gUeHyenCvq8PkJ8ciPuXmiTuLEWjC3zL94ohSC9AqR2M3NNuU",
  "key2": "5Mwo7wjCFjxGsLxRHEwNb9gvs2eq3fGEZT5CEgMMBgdUZsqjYVqoR4z5FTjyKZchh2D9Mwp3DxhTT6Kpp7GCiEgX",
  "key3": "4RxJLNVGUMXC6goHS4R2NcTQDANFpDh6ndridAjuM9FmtNKgjmfrPTdzmEEnL8jQ9Byx2u8xRevmP7wipem9RFH3",
  "key4": "KXLgX3R9F5pn7J7DXF5ddaScNhodGpU8qhzfV8QsNmd9yu5d3H8MV55ZYP2TUmafhidT3CA6dZCJYHoZfJqWAs4",
  "key5": "3nydssE7AZGsHbxyDkQ5yacYcHG99tzeVziTiySodX2umuwcZWRLhGoJMkfGVGEocarVu65snRXuo8sD3WWeQCdk",
  "key6": "UbDBPxqm2eYy2PdgWer1nzhGdP6oYRZcL82AZ8L6fpq9LyPYf7i93bFDou5pwsbidYj4vHSY5Qto97gdTi7AFrn",
  "key7": "x39J4QKgerUmY4vSoPkC7gKiuG4JQ5GoSmXgz8JivXNAtTq9s25Wq1L3zrRReYHBAdozWKp3xuJWMLVxTRXMWao",
  "key8": "Kx9BP9JHnDHZzL4Fx7j9ToyuPu5NPVdMa9wRhQYPu9ErpWKcxq8ohCBP4j3xCT3CG7xZ7V1BS3KD1m2LrJnNctH",
  "key9": "qwm8kdp81F9G6U7cGvKvwuoSLXW59U4yThh85RN2ZtCMxtLyjekEzcG4PGE6NLVxECsy6yVeadku4q6ZuA7dR71",
  "key10": "V9mZBxSNq9YTprPTmi8A6nZVFv21KpVexPUnqXcLh7XjeF4LkCcVm5GJpgCYXn3bJNixyp1pww7FxhzopCkJiJ9",
  "key11": "4pYE6VV3cN3fZC8iKmtsaA7LsB1r8kDGqN9KSfGMppdBVCw1LuPRAwSXhYuF6zC82aW11VXzjKDLKYLV1adq5tZS",
  "key12": "3aHz9nWqEBHMYeJdiTCh8x8dN1cqK9aWGEuBZoihh2E5LhNEyrrLTeQn1rAUinvGUzC4pZEgExHveQuuEGKRJQaJ",
  "key13": "5sxNpwBWWe1pnKV1UDFRSVfKXhur669zzXHQEXRiyPkefZGe513oyE9QrwNYka3XKid1YFKTNCbR5i24iYBQrwi5",
  "key14": "2RTzJX5ASAA9ZUmGxQDNefjefQ6AWdNDvUVq6BZEfWFdGo8FfMggcCT6CcyBNNAmfEjQkx9ES8mZaJ2sLrd6Gvvx",
  "key15": "qpBLbgVpF6rnmcfCZVUZ7YfiVXo9kZbqpa4CVzmFzeesbjQsaPJNbQ2QtJkDvJTuNtTmg3YxRQuocSTt8MQqnyL",
  "key16": "62VjoyjiRPmEyGMrGi2P7QkJvkCt2xDaLGdtxq9P68d5nmrnsbxSxMkSrkPfMUy6voXFdbV3wW8X5zD3BENmyaHo",
  "key17": "2Lx2XiDNbuPpU5bYzVynUXMo3pDMzfoyimJBpQrLPz91eBuge7DA8HNhJZPG2Jut3roUz7484YcYpqW2bx2xzFfU",
  "key18": "DwpFNDqx5gHfdQk2jf1qZvAaJA2vWqSUcQLPRBfEhCe5RPHHAg1waZwgMp33CeVzyTdToSHKEEJWtHQApcsiT5P",
  "key19": "4Qc15gqEGJcrkYY2DwAgYrXT2wc2fAvA6gJ2jzzPfTsTW5H2NBsJqPsHMrcQQQqqzmZKVd9GwXureU63PAXcaieo",
  "key20": "5STKazoWfgTaZmxTi5r4Q8Q8f5oidCjTE44iEJu478WrWZMx5FLHyGV7wiqYmG7ovEqVXyStGBAwPU4zNfNZRdyB",
  "key21": "5uUZ2AGL5GgJYa1ZYTjiq7M9Q17sXLKq6NGLfkw6TeMX97VXAKyr7b9hF87huD4B9Zw6Fqj3gJXbtDyXSCcXRhck",
  "key22": "Ek7WsRrfY15b2Mm9NCTposZ6Ayu9JX4HQP9fCj5Y9APD2icso66F5p6vouCFLqFwXuQ981RKaNmNcS7miDfZjvP",
  "key23": "4TnegjGHkRmoKfqG6PAfytaPZvUvrccYuXAYTH5BoufTbXBDGfBUCxSZH7a8p3RF2q9u8AKVYPGdaMRzuitX34Fz",
  "key24": "3tmcdtQzFrw8Cezarnqq7qxzW6zZ7rq6XwUcVQM418rU78A8LCv7Q9ekVkJ8MotVihCMSn3MFHB6kB7GdTsEnkz9",
  "key25": "58zTc7J9gXVV1jc6mzC4B4roFtoy6uCYVwYaQT47mkmChoAbihvUkistovaQwxNxszGq7JK8VcpvrjhmsETYgwGZ",
  "key26": "2HvwNonxVWU6cdV7agqf3VahKfZ5ZfBNwxc4Bo7NYhRVt7xrrqzdRtFcPjnu82a4JZaufZsjgJxkrw9soizupt3C",
  "key27": "5UibXnLSBj9x3AWiYKYDdNtqxX9N9omzi5xxZ32FGpNDm5AHcqvMb8thBJCCuXv8aaX5j6g7ezz97m78S2KijuxQ",
  "key28": "24XFTXMwqdD2QHHLKpSqELF1ezxswZKXqG6T4Z3JY4UkJQ6dyajUUMbU5euiDq98DjrkceUVDdqH2Ak85XH8H6LP",
  "key29": "5473BugGox66QQCvNMKkDLpB7W5cSCKkPvpjfrXEg73r328FdsJsqciR9QBVjZGPN7QC4T4ywAvnEp1yU7ubnjcY",
  "key30": "43VaSiMCJ6rMFRfNTf8MqsyALrwEEx17j4JtfvG1uFgvxtnoKiCXyRqXxPxY55qCCK8Y9pSjs14TPcMiHX8KhNyR",
  "key31": "5KEUGUqUgjkrPs1vsgoJqKrKRTqRY7DEFeVCjczSj1HaGLYHYgyFMMgGCe8jWaAM2Ex8TpbvTvKQ1A8wjPpc6bWw",
  "key32": "52a8Sexr4jB2XaLwJK6dxXB3QL1aFMPn9fg2zPZipSWDRWPnqLf8BT7DaduenJYwnx25DbL2pnde5ENutXWLFktP",
  "key33": "2b4TZrmuFsJ3CQ9oDJwquE6ztcgnQdCetbkCoo9SmdpN1objq2jVng2SfTqJfLSHEqzJppfqq2f3d7sBwQD1z7a9",
  "key34": "xJvzdqjiRCuHgxcxZiNyN71CATGFKmwqvE5jBGTsjY1ogR5RmPDcHmNkbFqs6MeUy3HzwSWkKW9gE3jdh4GNrFT",
  "key35": "jRn2qGLfQYeAsQ9dsdbsppQemtrL5y9Zr7e4xSNMQkF24u5zhYUKAbBm6RJs2Sqv6CMokZaHuN6eTHM33mrUScE",
  "key36": "3DeFkCJvdssccUmGhsSD8yX7EZkMcs366QvcNHra8c6AmQdWe3sXTPve3tPTZwGMzaWeorVPDpmhr94GzkoWdnhy",
  "key37": "2YcA2Ghj8VL4iagi7nqEQrqt9YnjicwdXpcZpxLyLY3eWie826tPuAoJDXVcThJRBHo4HJDZv2GSkqsTtYsnZVyX",
  "key38": "5E2qZZD2YPExkdrUGEXpEtVHNDo5uNkJPtQj6M8A5QdcqqPVUg2VEJsAirEprvTb8JsDxVtwnXUFMictw3vt3MJs",
  "key39": "5hmz9CQM3pcTNMREPr3HV9Z37aRsVhxCqMCCUvRfFbCxapFYYKhyCCh1uJhpMoLoRKJnwZ7c5PVDuiRnh3qqpZMc",
  "key40": "ZYXRoQG5ydk9UxGzHWxWE5NVHSsYwQ2Lncepz6BPvmcc1nryLHpjhL4pwS6nQQNq9S3Mt69qqcH5irD6q2RCrbm",
  "key41": "Ccd1KaoWcC7VE85ijSQh37F7dRgHiTDQ1Q5Ynr3wTLQrUQPxgX7KV3FGT5FaSJab1Z49Y1oEVz7uswVTGQfngzA",
  "key42": "AxeR36y5Hry3ApMJmrrCaksb42XoXXP9bnTxKjL5Bhf9xd2gnsq2XqmVo4sp3c3H5YW5ShabZo2PdD6vfP1sJ7m"
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
