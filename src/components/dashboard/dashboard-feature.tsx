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
    "4JSmvdfMJGS4aFDo8Ld7NqzJdyYjNkrSaGw6yLxpDu5tnQqhEWYpTPQCu4funrq9tTE83z4Dte6BH35WWBFb23re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjULVng17GBDB989JNCvkRX9tRrCckzM9DfKrEwv9AYVdqLCWEkDLsFvxhEPDgnNWTdGrF9UjzQH45UgzswxDvA",
  "key1": "3FU8e6T85SqUqZtejPHN9kSkkshzsVc8JMmDKVm5ZEUCdKiQiSTp6vddHbtQ7F4iK5ErQooKgwe6TFGgfX3UiUhy",
  "key2": "4n7SgUMC3fsbb27xp16FHAjHVkepfqKYKHak7MzsB1o24LssgdhUkUdewMVnHZbkQSMBgUTj4j4SeqgsKEwFwXWt",
  "key3": "5zs63fVPRrNNM6KYBVzFyT5xLZA5B1sE3fQAgg7wZPdYMp2k6ZSiGqzzBTvnAyXGMziEHrV6xWbyebPKFDDDdumN",
  "key4": "2WYVjWSaH2BoRa3p1NQG7uJtEJGSeCG5aDkCgmFE4kg6tXYo3JoMCecmY1zh42qRbjDr5ZoBvwfiTkjTz1J8oSL",
  "key5": "5gvg8rH35xR5F8mBe4xbuFjJ1iWtHoEn8DvymW5cDURpGniYC6zy8JVMiX1PM55r9W4FU97V7hgiqVYCKJZDgmcB",
  "key6": "128vXe9Q9zj7FUPW81WEPP9h8DQczpMYNQXnEmyf2sJZQKYd4mGLNrFEeiSM3TqoSLCr5fYRJqeUC4JwfLzr9gJA",
  "key7": "2x3diZHRZtxas9zSC7swDS9cVFz7JsBgXvWyxcWry7H2m3zb1HXjqKQd4uQCy8vgdTDgBw1HAKLjKqpYxDYDt5wt",
  "key8": "3Kz93KnZGGzF614e32hwfBSugDiGFFAtTgtSADjX5BeN56vEhmZChc63Z1uQRfhBZxfaYqR4XXReFFJPcqxPB7tk",
  "key9": "5d3UNs1ZEKBKZW9EK5DoAMQ1UdkCSwxAw9fQeNJRfxNXT3cn37sAxwkQeTHe97eR6g9DsMKW1VvyLEgSLqmD1GgJ",
  "key10": "Nf3z1BBFZQoJ8C7YL2BMLAVmTGgoJURgA7i2JviSKxJV2rJJS6vWz9LFZqKumuJrZso6eNmmQEEnkHbzxgsRFYa",
  "key11": "gGoM9rWaA7tt8tji15X4ELF8f1XXCgUaDTafqKnfedoZfeXX8fAzXhXu5jszQEmzWr6X6e8xbv296xGtgyzuxTY",
  "key12": "2ZczZRGAn3jGMooYW9eeBmNshR3ttNvaAYNDuPrvXvuJkVpWRNcBx21kZrvUYbrsrG5uBMXhD8VRcd3qAMMUG9PL",
  "key13": "2BGg1irhbm82G1x9mYML1zXaoP1ayubjLC8RZt96ULxvCiBUcExwRzoomcv2ej6A72NHw4txCarS9DqsJd3eCt51",
  "key14": "4hyxw96PraRUzoXc3eHhAQtPLdtpTja1jYse2nHGT44QTdNcMtMrfAhXVcdd27B9eJmRSVwFDmUZc3URT61Ac9t2",
  "key15": "5rJiwH5QVvLZrWPX94UC3zDW8XLm381qpzvrPHMZeR1FyidFxjGv2PP81G1xyt6CsBMihkwh3xYSUQXzk4PjMZSR",
  "key16": "5r5CKn9eCwftFnGq1G4tHDEeR7RydDwejj7ibgCHCgffB7RnPnzDFVNyUBzPeFDonFcpX7tkPQdZk5EyZftgnAS5",
  "key17": "Hedjb6ToBa5XqwQhNqay7V9dkBifgM4o5Nk6TPM5hmrY5nhKXd6U8XTqh8pd4DZJXFEv8C85aZCUV4sGGXchRW1",
  "key18": "5asbo8Ne3Y33pQ93XMZ18hVybdtuUWhwL8dHcpA21L5t5DfsVNUuupsRS9srG5KsdiX9hpsa8RQmLKduEoMKnS9P",
  "key19": "2bPrHBxXWxuw7dkVzNdx5nHa2bWrxrELP65sYJWWFBbEKbVhuJpakBjTv9zfhyA2RhU3GbBU7pemK166BJAkY8a9",
  "key20": "gfYwmC7wZjGkCbgHbH7R4C9szQZAff2NDjk9z42Uh3FbjebwGmkH5KM9WidWL862Ls7NLMwqykYELmCnrBRfNwm",
  "key21": "cgsSDjJytGtJrFo1iTvf4uxJ4nw1yUEarUSn5JK2u2eEtC8cKhPxH9tCG3Co5dhp3r9wT1GsbkE24KdpdQnDwHP",
  "key22": "2wSXLN5FfQ9suAVWztEEkbRL2ezaMuWM9ipBCevZeaGEr5m9iyZLxaW5gAW6ULXowZviWHxX6smPPxYcs2xaJKk4",
  "key23": "pDgvWxK6BGb5DAdfEGHn3vwWxARd2FPzw3duisit7HnsgeoFqfGqSFGgzhaiG1WACZBE3xJ9jnm3zcKr3J6gUZj",
  "key24": "WVBMmBUbbRK27Q545cXu5ZXXQ1Cv6AVY3SFvV5j7V3DxeJT48eRnfp4htwgM26t7VABk26jbkGXdKqx9xZjrUJW",
  "key25": "5Gq8rE9FBweDjfm9P2Av492Q9JL88fStLU8UZ2VLDYctR6A8g4bEQkwKjCmDv37RdWLYZVTY2oMAxEMowprKe1be",
  "key26": "5ui25U8zWDd48idMzS25gLYPAJ4RfWs8n2YpVrd4Mi2A5kXkYcbUE8fWSy5hNVREnkvgMqrRJFZwzBbkRirexoVU",
  "key27": "3EmRMxaLccVdBj286gUc1ostTcNZDdAsbCkFwc8LscLmLhazCRLZpdERPEtyxoayQZt3kHE13C2bmwz2PDzaTEnx",
  "key28": "5CSJDBozHGWK1ZGDYjX1xhjGMFtBpGPDPmdp3zk1XkqAGjPRDsxkXYiXYxien2F7h6BKxy3j7rwgLyHxphzRJzrp",
  "key29": "GouxEFeS7cuarV8APkU8zANhAGJnxKsv5GLw11KZEnXTcTTgJz3WSeJXxmPQXSgcdU2d3y7b7Bh5ck96kqDG9z3",
  "key30": "g5KK45J44bXAX1CJKniHDLDQREEh9o4ibhZzW7xRyuFgfFBdsn8E3HwSHCUu7FCfsRxguGea7accqfhacdoGr5i",
  "key31": "4FzVPCxsTkKJFTz2o9ZwyRBBhbAxKAuLAoyVF5LvfLhLUvqYab5dfPZXR16xDzYTwbHCQPiuQhBLi97aCKct2nsi",
  "key32": "YzkB7zWy4qDNeb1zo9Gb4nQvC7YPXnWRPgmHwsEjcH1XFsYbe9cqTNa2r1Ud7oNKmYAB3VrHeUGabrETh2cgvLJ",
  "key33": "54vdGxjZDFYSgPxkd3sfQQefZQn8vcsuhPxd6T6naf3n1anw9mCUEyvzLNxYuUrmTymPXJoXRQUHwgWoKqkNyrEm",
  "key34": "5DEMhgcnUHjJx6RD7LTpPZxDtbgRm7u4d8pr5T9J2ogKtdGaanb62keLiyKB4XKjo7wR1u6g3TJ99LtSQPAgGypG",
  "key35": "2ABj6n5Laffw8b6gFxJrPtJVmYwUcXVMcv2grbLZEqR7UXTHzYM13iyNqQU9vQdQL9gSA3cFewnDxrYzotN8Bscu",
  "key36": "67csNGNDHBzqqVj8ztibJZZabVM1uWukBVi3W9LBEbqDsEzYMemu6Zx7WC8d8gkNofrSGEbCYWEiDkRq6zVDBRKf",
  "key37": "262HjuKsuYax3CyFwg3godyRvvw2uyAGN7uQwXTyGq4hyaqrgfXsxm9Y5HNUm19d7HYpqhtwpPrfhRPDNWCJJkvd",
  "key38": "2YVFkomkn2QQ7ULYALFEydq1RQ3yQspgGYLFUZTw3EhHDYgfbzbkhVUrhSBCqjGy8rvMkwTuvNFSVcCgvduPGYBG",
  "key39": "24HycKjykcShUHusq5PkWbW8NqzWPBwzWAYEMNCY13BDnVEPoGDwvPoEU8X8xrsHrno3C7NvzgUAvb6pFpW8DPtk",
  "key40": "njXXfrdaUYocx5YC1HYGiJQuZCz6qajp49w1Z8V34h1PQDHMoDFmHG6n9M6stgKtMFV9EzdjLYzP2nJdsbGeFR8"
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
