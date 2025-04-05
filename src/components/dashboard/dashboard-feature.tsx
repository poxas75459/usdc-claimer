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
    "2QYWNoGmSswg2ZYh6Mz3KKTGTRPbEFnWZcyydkdyWWUftKF83aZVAbxaD25syUSxe1WY8XW3xZDKuRZmLdSg3vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxhtEdcyLEsgDSUfKJ1ZQfQEYzvisGn2vp6zE6LnMccQtPXiYP1wjB4abKJTtxzA21C7ytKcujrxLugJDQpBJ8f",
  "key1": "4KC1Z1bo8nEQSw5NEtGB4vLcBQc6cUqBNZ3aWyMG5bHEgorNLmMWMQwR39D8sMscHTi3fo26nhJdtX31qcfAUpi9",
  "key2": "4PLSPBP4ABchEL2X7oJ2aTQL9VEQEf6H84X5ALYrScc89b1qLvBEMXwaAnQY4H2XAFNAUpAax7ep2Zne1bc18Cff",
  "key3": "2wX1wqUBJMiMLF9p7h8KtAVt1DuNt9vRMkDNxjUvknj9SnikyW3ssytfm1VYJpfXxuwPqTDATJgn3y5LGDFxUoDP",
  "key4": "4rQ9hKfSUkPSAkJSQGdzFav9cXUWK4gcn1M3etk5FYW3n8fYqJGQMRrM9jt9e9wn7v6xUXstYLAdSazChjeUiTiq",
  "key5": "vA9RW4kVZkNKzaF1AS6yKKNs6sj6bhdNfJX4fhKp8VC2EynhRwvgCSypj46k7zrCTfczC39JF3L2KQtJykodgU5",
  "key6": "4tc6wVxvBaUsuhxZd98oZjvRLziwNt7Tso5r5s11VrQDpk9fvUNdACXb94QPFmpFKHr9yHiN9th9e3CEPCgG16fM",
  "key7": "5yQjmHbyGNWiQuzeAb7wYxPxmaGb6VNfZ666uifESweLyKmYyN1uBUSmTnERsVXoRi2bAx4nBHNJGwBCe1usoorR",
  "key8": "2QHnUbJx2ydT21K55gHZVxtupEsa8Rx4Gs23g4cwXDnNV1btaguUhxEp7bXukd9XaRGCpgUWiaSZuRm6Gqag6q4z",
  "key9": "4E9GLSVaPhSJ3aQEySstvJrQ4xnrijvCanWdkrz2F2mV7Ew2ouCrPX9twLyqWLbcuVbuVQWprg52xpGQEQprRYuT",
  "key10": "Gz8mbej8nE74GvfuRKJGU1rojkqgLAQ8xanDKK737tmukFVZivyZUrEAjf1NdAtH8fPvScTjtqjssYZf66zVNKr",
  "key11": "2zfcTfDbr1vfVUCa76vX8fTjgYYMHwJVCHS3z1sGhxd2U61RdAeKpdWLYo45r1kA5virQkpLGVYktYxVT5cgUggo",
  "key12": "28gXVJQFpVrNmAmM2cfpsKCanwNzDSfr893ky6XrbmgN2qqJXnvK7FWsnufAWTG6KoGQq8x3KR8ibbE7mNAebVe7",
  "key13": "NfrHbQdYtUYMQLnQ5CRi4uHqV9y7tiUcumTM8bFpGh4qoLxs3vRSPvdsXWSFHJvuRa3fSe3ecQgpqdkatkmueGh",
  "key14": "4ozkBz6BHyWP4XQExS9xugTEeQX4rbciNQVUKUswGEXGZ56hEPSHMPMmEDyPeXN399UpGp6AcXViM6GzZWi4xEeM",
  "key15": "3YWww74WiQtTDyfiCrKYTtrAt8BxMZ6nj4YyoHriiuDqtyUfswYTQcpMzzVZgEGsDVzufBiFjjCT3ptHjpKmwbex",
  "key16": "bJcSCrSmYVVR8UwDp1Q9y1f82N9EdQC2ShXWAy7mYpPBTL9F25cHV6qh35CWvvyXHn59iJfznayy7XDrVDGxB9Y",
  "key17": "3uG7wBPxpEEciDY4S155Vb7Gp2UxEXxEXyuMmSgdeBKDbKBbFhU5HVhbEZDTnWDzM9QX4xyaxyFpomqHGd7xeMCH",
  "key18": "3jbDPYPGzNfdNF1uHAMFvkdj13ZAAVDNPKK7PjcXUtKsmcJRzC2WWcvmztMHvaunFMRiHUQE5ZbsDdf77DU69tm8",
  "key19": "4Kdyd13ModkhAH1u9wntnSdWZDNnyupHNiLKpeETVfWyMvDLoPeS9j2Pbmz8hfA1yy2aHWGUuxdng82dVRRP5kkD",
  "key20": "y4Dt7v4hr7KvVhWgrRkijxtB1wmqEsXUQBy6dv2aJu29LkmNbP5z8rxuuj5z2L43Ac5W8zPryWcwznZVx9v2uyH",
  "key21": "5MnzEn1HAUFSaRiks2SndBUMaFY4gGH8PToAncT9fwWwhsz4fD7EoxsLwytz5qBigVLzSSkkyEMeAUWHedTSjx4u",
  "key22": "2kv1JUQvSsTEThcpXQnoRNs6NZfVQG7S48VKP7hmsEEXTNSUXTCyfDDdBWPShsExB3mNQ5LVQ61f3eECCYVKRAMG",
  "key23": "cYxkTupXo2FxdKnsULF4LDDZ6TScvPaKduFjepH35cKuEM1LMn4H5EqjDanA7WrxGKimC72tCVhYH3iNXj3Yk9d",
  "key24": "4o7ZcMw4KTcYSYdoW3Key3WRZnzR5MPcP8H9cCD8iAb7wGPs4vG3eaXKQzjaTefo9jw7wbMd7AW7ZKySvUD4T9q1",
  "key25": "5pecX51w8qgNiyrhNhkVMHqiC7bnK58vvSm8dEJ6SCMCU56R2pZc2QcAY2Lg1TXv6JsMyTi4SK7B98zUeaDaRfvf",
  "key26": "3WHyjE72R7ARrg7g8ZVhysF6XTj7J9QgmY9usvSnkxdd3ySe3vpiJ5f55SurojUNguP7GDDh3LUmVfZndmtWWbBk",
  "key27": "5UoLbaJoqHm4jULAE4LZN9HfN1p5FdkerRCBqANjBvdmhU1wtz7iKewVZXaahK7j31ribHW4tuiGfEFYPe17HH4R",
  "key28": "5z3Ui97b37V83hRSxthEJf912rkv4wpDqwNHVtXsGXBSEgVw6bDRwmMF4voSCB9jSuYZFFxMNdmj7myFNZsAGyJd",
  "key29": "4dyGw2GiHHhF1EtPVLfKiwUG3eycvoqTGrE27AjTnrsg6trF2fsqtKeFXyKCpSprzKwcpWQ8qRYVmBKfbRNB9F7V",
  "key30": "gdBUwsk5UQuJ3M5gdLFFXZSPVDo6c8FtTj8ToVzMWWBHvkFuikHnNPSbQCkjg9YyLwzR46BdNsjvpLAP4qon5am",
  "key31": "54rsZLSu6KF89SVwm4kCgJZvQ6ib2uHCstjGfqe6QnJuP46hyNsmaNpA3kaWPbmiG7WUb77mg87WLjYRcG3fBCEs",
  "key32": "32Y2WJMi6JLxHzQVDu5EizMRkS4h4dgaURWEGCLeUw4MTqgXYRfyFEWNVH9yd8NAXXMY1cfUffPs1yukCMEiFCUt",
  "key33": "2NbuHUTNHAFPfrn2wTprBRJqzdo8MQfHaT4koy16bR3X4bRKgtLXXzDV4TYTBdsNKgQpNmjwiASSUYrYsPjXE95T",
  "key34": "GtQq9fxtK2YuZAaVhq9kixaFcMbjhrzLPU83N7nfo62bxiZbV6viHpAUmmASSvDT5XZmA8bY34X5KKue5zVRE4z"
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
