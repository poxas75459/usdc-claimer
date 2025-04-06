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
    "4yLtASbgtzKMaapBNkUz1kLrEg4cGjCd9NXwgSFtnyE53ypzk7VrUpG5WASfh7D8H7Gyc1rjs9N3RGvXEJDGa4Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kr5J6vc1UshthJ388W7L8LkTmyk4Xo54QG1ot5wyPTPnpqpm2CBEe47PnoYygZeqNfS3yNiq8SBGoJTHP9Qj6yy",
  "key1": "26XgP7jBS8Y9unu56QVtRkAXFBkBKExkEyfLrtHSCdhrz414kbrjFxUJjdLXZ4XjC2QToEmpcmkbfi3HKcFxKQb8",
  "key2": "4Q8FxgQ3SY5fGigTGQNUjq8vLmRTYjZFrWFBN1agxa742WjHy5F7U2cuL46e6a1wXxJc2F4HWL3M915xMpdBvZgu",
  "key3": "2Y64yS75ui6U3BCwyPSX9HbEMBqRv3JTCyZLWsDWaXPLw1ZzDJ2uaL4c2mpshZSrJe1TqP9Hnga1H6tkHKkTEExH",
  "key4": "5dKjqjBgMpVR4fin7mXF7JdovUPxNs4HgNm8AgbwMq5SpDFnLtwdXRPAGHXMC16UpYVMZu3u3HpyZnn7Tue5G4mn",
  "key5": "3Qc198kRQnorVkQy4gzWSFKwyspS6Vok4tHcMieaXf183dU1jFHs35RvVRiNBL3bwKxFY6gNgWxrdCQica5sfYbE",
  "key6": "4JL2B9UouCb3jYVFW9ABpDs2JBoWJKcr8KvWS43dBheRCKxi8Z2xVwo6gD4fe8xUVAnKdc9UWfoLX5TGbPg5FDGm",
  "key7": "7EACVWM4Yf8LhMyzkzWXnyiREfUM6fdevumWHuDYUSXQFThe5mDg6XnjwZzT3KvSungest3sVoU66LzC39WVgNt",
  "key8": "5T5JkjDEH9TbzMzVQg4chUaapVE6mvRF1u96tueNFTCAQxss57XEkqz6uu1RC57jta94JzjYKhL69zx5hiGARjpL",
  "key9": "2fHSS6nXicfPBYUcugCJXQHPE8Pwbm8pBBJWJmNbVSKvMTZovEoUoVibYPdBWJkdSD3yrxqdX5J9xw96Kc822n8i",
  "key10": "snYifMxEE2jgMLqSoobdBfrZKHyAcu5vAVkphYtH6kk2WV3QKnmXtvGdJQeBssGMzK3oTL2Xmsd21P3644xEke4",
  "key11": "4AT1FQGRPcAiMwCXvCniFic6bPX5bzYQUruDMsd7m9pfU41p2qDp3QxRJ4juqvvgBRURKj9zEAYvt1DuFSjE3J4W",
  "key12": "5txzPFvsAdVH5srreUxxGpg3RqNkvr8yobSY1u6rBc5bgJ9YJPFKsMEFm4huSGskcYXjB2CRyu7MSyR2TJudVt7d",
  "key13": "3zishkJX5XAHLz33MBu7PxwNe2veTheK5p7CMTEFP6fFDMAZDMirdmuxSSvpNVwgtQ4yvi3BJDYkdusPZ6LwuATt",
  "key14": "3tYWpwkeW1k6zjkZqQaK7kaD55AWUz4M8L6psxeJuzS1xcZyYeLkVjFU2igGpYGXM7uYDMheMT1gHvn4uTrWrKfP",
  "key15": "3jLmziyY5Y4WyxWeq4ZZxkmdQaFTvwRXwuDytKNL3qCqZGVs6ph1zxZbDococ8Te4Tc4RjyXszxzVvFshcQxhbQQ",
  "key16": "QWk811BXPCjxctEaruT2nLqh2ZphMBkkfdi2TETmz2ieD6TiRRY27ms7GWqJcjBEzHWSYfz6hUGEaeToTcvjqfa",
  "key17": "iW1eJH4RhbhEnqVyVDhbtxsYEQnDs4SXru4gnoWh3nL2u2yKsxyHDDcYvXaL4CEuZtqjuCTWNUqvDmarv2qJEtc",
  "key18": "4ro12o1Bx7j8jpLiJdFu5x4ovTd4yPyG8gTT4pjaxwNh5b4ZF5FADPRv7wxY8HXsSbiP9AhX1sWyzURgHoKvmDeT",
  "key19": "3Tji36YhyAtdcobkUcsiKUcNzFv4rpXatU42brvo9wVbndihrfiGzX18pTfmB3WYZ2g2rAwRvFRLGhLgWcy7ohSo",
  "key20": "ghh58ARXAGCEL1NXKeuCHaBWXszBaQbtDYfCayZFcmqX3w78JTw6q4Q9tosDqyBHTt9g4S6wwbYBTVHMtnSY1xA",
  "key21": "66oBUJcFQoE4sJKSfCXC5PsS7JnaetKaUkuer6iCrbvGTP3VzoFjRpZpZYSMrXUjUzWxS9LzU2HZv4W8E1uFjAc1",
  "key22": "2iAJs2u3SSceCq75uvFuHHCRX1Xu9h3njh6WMwEW2GpFgQaW5hwKybEM1wm7u3ph4U3wLYoEgdwaedCqjTomETgh",
  "key23": "T3DD3AvgbJMuJutvVsbAB99gX6pDBQY9AN3JsytPSwDVuc1fNChQ46BK2iTm87TLVs3A5gRk1iVBmrAmkMGfMqb",
  "key24": "3d8mwj395y7wE5qpMqoYhotzS742Z6B7vYx61j4NhMf1zcfhmG2FEMr7SfViYZrug2TPAiKWp3wMNXZdA6GwcT1U",
  "key25": "2wE4aiX5eQj5Y1fTiLd1zaJFCtpe4U2p2fqgYNatfAZRLdmrFtZ23PCtmuh48v9X9yXs4dDjGgRvVxeETv8Ath27",
  "key26": "2wrDw95YcUCht9m6GWN4HiPNJD5LykRpxhLJpHKDVb2HC2Cg6avG5Cu8is2jXKgYS7NLyi8QHsto7UVy9TxGzsja",
  "key27": "4N7qqrxfB4MuMUri93m4hNsqryeiHaAphfMfZbe4CNFdW7x3cHXukGC9657CVvbwW4vCAQFZxmCjwpwuepDBtGZN",
  "key28": "Uy8o74KXnG8wr3sKpyuU21DJqC7CesvKK4pfxB6USECkQ97S3Udah2VLMVkQ2UbWCtQbAJG6WYkcrY1uuZoFsXm",
  "key29": "2W3NxnAM4Zauek5u3rncHjiedbm7oWzhZcBndk5PPo2sH1KYdWHrQpFyvT1J2ykhBcE1oYD9rNTaVzPb7Eqm4g26",
  "key30": "38hi6noQJg7XTx12HHBV4Km84HjBxrXxWHQ2hWtwXgTxkKwzvTCKeDm96Rkzt6QPf3izgx9ECVgfmFedGePhnV8F",
  "key31": "2sXWFj6QJ4HuojP3bMhEPsiee7JFSdchP6VTezSx1XTpCDx1dSLsebhjnH9QvoXmTSKsZapAVgmpvFgEhGbNqtid",
  "key32": "32162kYtyPBUY4P6DaWcyK2xTHojLS5bviKzZADJHh8gYnVhxdUoYe2Z2ap1rJhtKJrVcja4K5C62k5Qcqx5cv41",
  "key33": "dXiZB9HUKjrJ1JwXj5oSnkRD1QrXzrp7AtwmpnnTa8rGHkTMf598MKqMeUjPwEbQ2xHfZnDuLcYwatKYjRhRU2J",
  "key34": "3CYq6ZoZmDVAGkZLxwXbUj1iKaMf8uvkC74zcY7VgfFGRN9AzY64cpD9JJhwSEnTi5fxRU9Fz2RQ1pqLzhkoXMrZ",
  "key35": "31GFWkEwVdwDjJn65vPSUTqj51DewMMAaJgFCyFFk181NxYWyspSbccjrmsK1nBKAWodK1tDZMnHSJDWXKqiDy2Y",
  "key36": "2wMskfLVQ7bY1xS6wuNGgEsdxXXh2nKePoZNJn67U9vVun4yWyqZSjRRf3TbCw3bbcRvh3wufr9Twge2QuL9DrTY",
  "key37": "4V87kAATaWyWyx4oRRukZCmC6MJoBZNxYAhppiVSbrmzSyc4TJZthoR73uXtAFq7SX3NbR4AW1Q8foTcSnQ5MS4n",
  "key38": "4B9KbLHuGW4HRvLyWJwovK4ZHLkgJZPQM2DTMvMLZUe3M3g6Jv9PcH5RzbcN2rVjyUwzmRBQvo227tvBUtWtmdZy",
  "key39": "3X9VbsxLk6AptgGwuYDhHUbRCExQ5nnu5Rv5rJy1GJdkfkUYtFdZ2f27VmzzN4nffHDHzd2TMUWYEeTKmfYEjAz4"
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
