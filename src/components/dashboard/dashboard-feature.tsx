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
    "3ZDoB1Ln2eYwvHEwBVBJZmfzpKJk4bdD9sUCpnwE29L3vKMv3sP7BPjuHTCuppbD81TqCT1YtNBRHW5ZayF9u7Mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eY8yqpqf8uZCVBjftbsMDLNGXeBPZ5DPtWCZCkyvaiXF4e2mpWkLCtpciJLnTF2Kip3rnagseWpgAbECpjPzktg",
  "key1": "4VNCE4MMHHqhazkNkoduTuALKMhrRBkMtgXDww1odJ1e8hpsMXL61Zvgo3xRhmpTER58U2UpxdGppvsowGv7d9Qt",
  "key2": "54fzq7wV1KnywXr8VAuKx7tQrViGDjRukEf9WNzwS3GMZ4Go3dAu8DpHwLp79m3PBxp7h91TvUbtB6Bge3Za1SQk",
  "key3": "RZWrfaAoV1Y5pksoo4MNh64TdZcUagbyYmscCkoMfhRS9yHFQfRhqmitcjY61XiiAvMqDmg9sdBAmWPLrSWUixd",
  "key4": "FkKXhcaZ4a7vKPqtGFGsGoWxHAy4yT19YGdoKaQnv6AZUB2xMnEfMizDpsPGrWJzSFuLPpd2nT4rgw3aNUZEjxP",
  "key5": "DN44gMC1zj8Gv9aSY1EUZ1rQfnQtFynygumL63ShL2DWAw6tzos2mGfxxpXz3G6RznSDuNpQBBZJvYV4PeSRitR",
  "key6": "3W7hexmCyNWTDxoQnsrukpaZku8Jy2onqfEF2u46UeK3ZnynnJtdHWUHcU61Pc3gQibKmzXgBczbHwMFfJ9YVxE8",
  "key7": "4dHZhyMpFU4WBRcLebPQ2hJywjYkT9NbhBfB2NjizWnbHok9ufECcCnQx5j3QafnX8msxvqGRN4GYxQvURkxL2pr",
  "key8": "3JAcfW57r6Hr8qXYt2ZTKGrG3NZ1A8fC6FriuJBGzfAJJTT6e8QXwzuq3oXHi2vPYvhkAJEPLdpxGRjtaXMpDVvX",
  "key9": "GuwiHwsrUL5dBgwybkNybwFa6J2ifuFUCvxWNjjipYjxok6DX9fZ7RcduuZ4tPWYMg7zgxex2ftTYWx4cftycSi",
  "key10": "5f5jrGe7aWak9888xHoF1uvWQdUzBGkQzkJ6SD57r7GAqwcYzmFV7NQcVqxXXKJ8ECy63EhJFtxiehKv2gwf6tiL",
  "key11": "32T4rNhDG9g9sYSehHwcH9hN6hDg2jfLgekzcikc9k8QXvB347Dg9i7BFVbs6M8U5yRYq5ztAMZRrWzbytuQDYXb",
  "key12": "2Jrs1YRsdcfZRiQGRZCcfrA5HNVTfG57qpbsw1USr9EbnTG9NWxHZb7tM9hfrEsb2XDAMHu7xMDWy2y2UV2mLR2R",
  "key13": "4zKfLhr66orqfAnXkotQh43ETq6yTD7KRN89cNf3SSr4M13HSn93BTCam2xXYN6RzxFG6A7MbUQGqev8SAqqCDDC",
  "key14": "GhDTmjP9GmtFP6cBCkS1Fsb4TWAXt2x9UtFqZadrjf1vnX28tKNZM4t97WkFVZmEjSbdY6NkXCDtkCKSZLa4zwt",
  "key15": "46DJu9MoANEQucncJ1WUKjoeyfoFvGgKFLRBmYSCpwFJUcY2mtMfkxnuDYCDWgpnfW1GRSxmvZGSX8bvhapYbVJ",
  "key16": "n1FXGDfjJM8Li2PmpBJJGhbLBkQFKcDPZD9vh5Tp9yGriSWtUoN6dgXhgEifRC1YjP3detKT2HESemaHe1CQiVL",
  "key17": "GsaDYQ8Fb8GR2zK1q6A3JnFiNgn7cmtVYTPNec6z17uPWwiNWCDaHJCDA7Mv3VFyD2gY7Rj6cNyk3fu52y7DiL5",
  "key18": "4uHyY1daFyCfZsqYBaGjFCoxeARtYRQcFWJAgYamV4QUswmKNLuGEVXpJLQKzNYGhzFJQcE2PpGTQNxTRqL5DHra",
  "key19": "2885MfRZQwGTeKtbLWJdoxBMcpmGvZ1TpHg3cApQhYCsmb6CkTLUY3wXwbErGUnpa8MsXwT3TeE1eyjeKcGK5aCB",
  "key20": "4ADwgYyoRJQB9nWVzNrVEQgW2CeAHzt5YgFZEb4zi1pzTxJgMucejktzSccNwsWwYf9hVzKhHJGULBdVCFkYhnmd",
  "key21": "Nz9c2TK249Sfb4CaN9Acz49ns5Ff7XiehD2Gi4e6eKAhf23dm3NSvbybNGw4r8m8mfmapP8FsFCs1G3u2r9LcmU",
  "key22": "5xbyFJz1BQLBc12ZEzAmo9sAFmeDV29dJPcXdsi44JUHu8TgGwhPCN1zSHrkU7yWtgi5K6k7w2banZm2jL9ScBp6",
  "key23": "2EFz8H4jNng4sowK2m7uPSDawgegCt3AAvtWQU1dy5jPNgzP8gZsSgpVhuqWxWSoTj3boZGugn3FVsUW9HuF6387",
  "key24": "34EcSejV7c7rE5r3xnp1YTQ4M8VqwQ6vwu1tm4ksGFuu7Q1WjctjFDdtoPbTQAYB3ot5hf2x4BuNou7B4CTRjep",
  "key25": "9LUHnhx5ngfiCTXSnE2amLW21SpBd8vAtV82tJZYTgdUjrSjZxNvFnBdfT6o7WBMn4JmUu1uczgyqp82kFPDDiz",
  "key26": "5SXR4CF8HTUEn6pq5XkFqX1kKiReu5KZLYKdYoYcnastcSiHrPKchWejqkVtPRUCBTNJg4k3Du3v8t7LacHFupmq",
  "key27": "XNh3BjzcFbim8bC1wrrJEojjQABNAkYv6kFozJ8ZgjJoTtuowxCeq2VeAFaZwxCtB3A3a8Ar54fiU6aRsU3E3uL",
  "key28": "2oyQd5q39iH52eqSGaXYXviHnrxK4S4RQnDYxrUVDtHpudYT1djZ6qTcRMsvA3a7cEQb7gMf9Ncn3kNFbpt5Dpg6",
  "key29": "NjAF4hq4EWurgX1J3AwsVDSgrQ3Y4nC8hu9QUdSqyaASRAo9XAfciCaNgzZQawnoAmALns8UKwn8Ss99Kgky9tu",
  "key30": "55dcPVSyc8UiVqgWoQizYMfAsNXkbmssChYuoaQtNP4FUBU7PDgnPzPffByCLLy3ujgt1G7BpvnZ2L6HrHAxco3q",
  "key31": "2AHCdyXReMuAGg2UyTSDc3vaoJneno82qTHrz9F6XdAjue24va8ZmTVw1Ceaqvqs55M6LkHZCDCbMNXkDHb88J9g",
  "key32": "5J4cvatk5bwEy3wD1eHGpQkkaGyFHaXfvRbQkrEnckJ4rPBYD9EUYHVjv3bQgLgnasR4DHoddufzba2s2Wp8Gaa5",
  "key33": "5qQ5c92b1jRdUJ7yQSJXeRQNnktuGoKKLxTKv9y8srSVL5cXunNpEDyFNZrPj7io4xsHdthosDg6q2hYTN7VgJM8",
  "key34": "2tyS8zMmnAYeAywCrsDvEVL4VQhUVcWeGsuQfMEDHwgLAn19ooFPWFPPCvXPk73N1Cbcr7kmuqij5DppfxFuCRKE",
  "key35": "4x74R8KzNn9Q3bLTxgPnPCRh8V7ENoFZ83GF93bM65KjMy9miLf959NcfjkESXTZuszN17FyRs3J77QwjK5UFfsA",
  "key36": "3i8GNMeaKRyaHjX62mCzGEVpsbtt5HtjW5fhR9Mw53c9H9mpkt54g8xxUe5ma5XEWh4rnaxXd2nPRyhXNQ8EadVJ",
  "key37": "5a4qh6aJAEnkbY6JtkpavK34XYCQRD3e6aTPy8J6PZhqkLHVokC1dg8vrR5QMieMj6dLSJehL1WJ9ezYk1wSuoxY",
  "key38": "5jJ7ufdjnHd4nVZBuANUikYXc1v4r21o7MCpJ2xULz7fhFCDLo2ANkeLm1esordm1dMDUjXzgmHhAn6BgdEerKEv",
  "key39": "esK4oCZPDW3cBuMNPLzmS8iv1UJzvXiiSYiX7KgcqKVbPZSFg5mSY1esv8xxWsxvtWTXwDfbP2TNVciy65u1XMe",
  "key40": "3VmfdPoicYyQ4Rr2LYKh4oEjjRKDbVGoSosPph1otJ2JreF8VvvGeZP8SC71s3UXzVWUbVXwngt8qA26286rnJGP",
  "key41": "3c5t766fqsw4XT21wkGT3jUcn3Z8MrPe44sRLk1BEvKA34VoxjXGYCRPEPJEgjE8qSwy7K9whZGvHEPpT7xCQKBL",
  "key42": "3jkZ2CHaCFXLAzEHQ2MXo6ycMsQm8RH86msVfq6YBqbQjohJJ634i3VyCkWSuVg39YgsG7mByuMTiUTLj2YcBm4g",
  "key43": "2mdLqASJcAVbtUB2J7p3pyoyJtdcobaGcUqjjM6pg25mWDHkbT5hYzrKyayEFhXJkmxqQ5WDq3ZtaBZ4kxKbUJyD",
  "key44": "wDAovKNw4z5PSyy6MxXMBwxTpw4XgutoVTnhhbipkzM7JPrSL9DDq9YkPNKtHoRWH4mhnEsDQPNmHVXPvj6n4QL",
  "key45": "5cmWDLNoV71RZkk6TeS3BhwyPd54V4d1pwLMwcZvXcFUwRhM3UDHW661Hvs6zWqKyxrx9u1SLppRVbBpTszq57G6",
  "key46": "ZLCsKRQ8WVWcdYNJje4Ha9EMWgrSfRxq2huX525ym7aRA1HpDdmPSsx4Up5FcJWLq5gc3L1AyVmboTpGgVBJxCQ",
  "key47": "2TDkZvLUei7L8Dz9gcrdX1yMTgJBZQSk1L1x5iD3Kg1Aw4hKg91bDNMRpNG5DCioVY8JgYNBeASGXW69kRupRbcw",
  "key48": "CxuwZRqSERmJKZACTGETgtDAsRnv8Z7YMWVmtsZ1YQLFKxikM5ZsU5xWKgNHXAAfUrTgLsynFe6h883dHL6RvW1"
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
