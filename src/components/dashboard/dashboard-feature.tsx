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
    "5pcExkYSHL8eXkqv6Zg7b9iHpUqdLGCs6mdupWbfS2g9j2kfhtpCEbKxE2QD7d1Ne4ckrQwYFZjpM7e9EmX4dvLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGXSBc6jGypbaEtBH7CzyQXbMv5tXd8wVDCGJT4trQp6mqETmmB8sBtvvuemhk7gdnqPaXnFzBHFZ82W9Z9JocZ",
  "key1": "Bt5arvj3UVPJMAJYuWFirrKST2odfetWgBWmMn9rUaKMLWQbbsoayFU3Qn8HHWt9m2CQZpouhJDkJcU2tH7xR6M",
  "key2": "2XWkkmeDX6r5V6SP1dXK882UDhSiWyGyMfxpZZfTi3MdjUPh1DihDxbz34iSyim87NbvdUZZ15DHVTgHjjspi4P",
  "key3": "H2dAy8E5R2qhERxr97jA5R9BPmMvhAXgstb9Cte3SZEEjWTGjKMptN9ZvZ4dBQGr2B3Wga6KM8DSZo783jpR9oW",
  "key4": "3NsZ3Uy39QeMhbnbXW9smpBe7LQeq42NmVdRQEccqfJgke4HmLUCmGkiRAjjEWN42gAzYTQi9iR3nVh2kGL2RE5q",
  "key5": "i3aSf7J56aoZBoHQR11o4Bd5LpqVjQaxf7xH39ZdaW72Td6ZipjZSxCUxP54RZfGiTsDDZQWFPS8VWsi5Gs1zS5",
  "key6": "5D6i5rzhRpfu368f6LeEUnUYwqQWjXSvHoFBZU2Xf9jUjw4cx2mrN2tTfex8XyhbC5VcjAc8RTnzW9zRHZsLgmu3",
  "key7": "5nyx7dUweC11oDrxt5b2Z3zLr8YRmCs4m3PdGhkjcSN2WyB1ijJXhZq2PEdbwpNGnMv1PTU7WtqvYjQVx2f1tr7B",
  "key8": "2CFgn6AoLU6N5yMCZ6itTyWvz27HmXQ4TUuzYZY6dKPFGJ9SDvGnWWWbwnnQKBjHvhEsnX9U1JENwSffzQzp1cb3",
  "key9": "2NVMzvgFSmqP1YroZWb48k52pH2hozTfVSaNbhoAUS6S2Nr7vWQ4Hz9fr4MQkXGvpweMU4uP7SZDjv43PLuRYHuB",
  "key10": "U5uVLEYh4Yd7yQaUZ6kKpTMP9Ej7Thht33m9f8aAcdrDDLPt6ys6HiMbuaHQuAnLbrcJNG8zwfhGeLCGS58gGtQ",
  "key11": "3Z7BWju8dXcKkXurfyiH1sgUGUD7s5XM7RauGGMuRSHwpeCJw1mMGUYsBCBUwYHBs3Ra8pejzxFBL5JZP7CRuMVi",
  "key12": "5qH8s47houqqVEmvDVSeAvy3ZtvsX7pTB4X5jaF7zjBmSA9geVG1UwTbdkmH2bTya9KryeYXidcA6eV2Sr2td76G",
  "key13": "5YyXTjxUNVJrEJY9pnMCHfocJcGiz67eAwUqefEQ684nswdCjxPJ3K7enyyWfJ1kGVdNJY5V82xDpFiXSWXJt7QJ",
  "key14": "65TLB9M24vvfH3uGp1fn6En2UmVBXBa3GBC2wZ9Q8CMVqpkEna7epdoaDKbDjM116QEa2hLZZa1z1kCUY7Sf88mu",
  "key15": "3UQvnCaVkBMubehcaNTfQA76pR8nw4o9VU9UUL2tU3eoZyrWARcPQZ9PGehisNK6gVm5EfUH5vr8HxqVPoUbErBW",
  "key16": "5ihfU6bSEoJKFMWDEyZYUTAqapWh7az73iyFJWoT88BZGNTYthzanbLzfrkdneJQ4FhBLqbi2s8LhoQWyh8yJp3N",
  "key17": "d6jWqzzD7ELVkoggiddym2mWrvg13KkEQyAUG6MC4LdVqVPLhfUHBea5Pzb9pdepcCzpYyN3sxzVJiZ1DgWHsDC",
  "key18": "4dH35XVvJypUXXRyBPYhVszfhmxK1qp427yABURBW3n19Ke7LUjUtQos4a2rV3axPTbGpUzjMhAYcGYSGQGtmUuM",
  "key19": "35Nuxfq4C5Vakjdd4ae5XHLM4Ta9S3sTXsd2rAbDAu4SGyu5zsiKpH15U58GnYWdra3YpXWvEcAKBByJpgGh1WBW",
  "key20": "5avL7T58JhSnigYPb6VxDYKGyRmv9xxjS6ex9ayJpJRhbsPXYN1miYpWYTweDEiyPUjMdPcaSVLXcmVur5aiVXsu",
  "key21": "3pG85vyQNwjga2rj7AGDiunPFHvqt7YxEbE37CsuiappzL2uY3PybLfpZbW7NJHNQ1CXNDkYbZTSLf6r5RL67akL",
  "key22": "2HjpvpymBAc3GuW1iVHtfhGuUVggNRSWSc88r4tx3YabCdr8m61ZMaurvfHPt42Qh74rqKjphJCtUKorZxapnSPw",
  "key23": "4Hqx2WP9dbmCgSx67Q4fVzNUpAsjcVyYXZsevdqucbqVJ2AsKgF1HyZztwMzffrn9HYY86JDHaWGTZcDDogh3ueW",
  "key24": "3SburLN6VBwjSQS7s7dSBNPvuKYKSnssx7ZTsrgSqFSXT6LY5sLqS5Yp5pJHzq9qqk3MLPG6QudPAjwkt5F4d3kk",
  "key25": "5zTCLKMgeSyJpX3ZFvSgbLxkU2w75mzkZuaTR6KnyV9okQJdz5JSDT7ZeDyzHe5Uw9stJtj54GXNvhCmRRQxRPNs",
  "key26": "3mxv8DkgrC8XLnyaGvDBhwUm7oavsy4mbDPALT4x4CW17jCUGrXj4rQ42HvZu1dzCop1kBRjYRWP9GwPUhUgvi4R",
  "key27": "3grgW7HPpyfNbyMUGScuXYYkLAoMVcyTCesQvj9qXuDgcwf92jRDURU8oJkHJjhEAi9syJPhvym8XCVpsTvxgteE",
  "key28": "5ZUFjGhYFg7aweQ1jcBuNd8yrjSYfhGZ5DG2Ue6yDV6XEUNwSJHVFpcKfWtj3FW58soZD6xUe9c3F3BrXv4KLQLD",
  "key29": "5J471P7cvBzXyEe377oRJ7UXTGuaa2ciTBK3R9yzRwp3LiQ7h9ZR6hkED89XxBHF57dopnfySWf5fzkjjFQHmRaF",
  "key30": "4cLJ6WgENGgQB9ohu2JXHGQa7tg57LGUXhZTKsrQhxbEjXzDdLF3cKw2ykKDfc5uhwFWVexWo45yi4rHPMHiNtt3"
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
