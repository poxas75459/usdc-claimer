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
    "2HgtCJAq2CGTGhztBiRnttd2jKFf5ANo6zJquBEksWC9sjejxeoTx6eAmtuDUrs7xLRywmwZJDp2SaSVEZFeJdBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waTmuTtx3q3qjgbWHFTYdQqZPw8V4WuP2yFQAirZjxvbEhHSBV2K7V2kq5mMLVsmcoHKbgNCppUZwTbiMLZ9KLu",
  "key1": "3HLkL4mNgEz3oYYVg4jQzd4jAPSpB3MCHQLwsrXsdyLGEgPwXiaSWyHVWSTRgpvx8nGV9Mi58MtGsfpmWQjM9b56",
  "key2": "2NNK1KpvdkLHKn8W9Q1c6uMCjXQzp4Atn1XXYUEAJrSRbX99tSeVC8JiJ7ELZ3vSWvpqf2fjUYyqmC8oNmbF5Etf",
  "key3": "5LBnHuuHpQR9KxXFSLABUop83zd9vhyKzZH1hXgsPP2QAhWYTBaEuz33Ni9H2oVj8Q31omd2CZEusNHvJH6XaEZT",
  "key4": "HVr3msVdsbmpo7PUNoJezG75qGDqLy7UwRrLHwbnP5gvT3HmTCGRr9JNeK2AB3cycZ7wgT8SoUwCH53t3B2wY45",
  "key5": "2gSMVyrG2zzubv2KXUadJ8eXTyWQ5b4MbzsVAwX4ZvgJJLoMFqNVpv3MB6EAMbYRMQUU75mVqQ7RmVkohwRyEuMf",
  "key6": "3gpdfWRaswBEXH7a2p95Xh8Rp8Wr9DXa8K8YrSVtp1X2mQDAsRgVZtRe9XTDnChdLWbWNtwk7uKxvZG4BgjULESL",
  "key7": "4dNTQjpFq31J7j6gj7fRS8rLPxKGoTshj7TPxCL6BrAwznMekFKSQHpP28fVLAcG2N4jV3392nZ7bTwv45JPBFaQ",
  "key8": "5jRvH3ckogLw7bs7wh8FMzShr127UrWNLHZDGvwP7anNqLugd6ce1nkTsFLbCRi5vvFZpB274Di7iU1Ug4aHXwNS",
  "key9": "5jPTtCg9BmSa5jUJJVCAJaJvSJXpaUJNFPfmQXSMnQxA9cqhk7PTcXiYAtPBhMb6a3d3dEBibYodU6VkfqWxV8ex",
  "key10": "3CdKHsC3Keog4egLNHHj33AujjkzFf4XPzgVfRs9BwYsh3fmqdiWRBhycvG6g9oofdBDJRgmxMuyhXpr7MizA2sU",
  "key11": "4WoUSyhpqeGCUGGZ8T67hDhyFkdGbvgXsr3GMeJcY3q4szD4APC143siNekR2u5Ciihz1V1zRiV1SPXGAH2Utqoj",
  "key12": "4qxCCg7hWz9YXd3arjSjQTNYP9ykzY36bqvLkYg6pwuJLLt9LQAjnbEKidLfHkHMQFJRf4WE8LRvyZFfRvMJSYJx",
  "key13": "jjwgDXbPZrgznisxYwF1xJykC1fYAVJGhjDiLgALwt8VWcV2AXHBSgwEb8S43m6zBhgXnDpYKy7XzByrpkG2BB5",
  "key14": "4hW5wB5NpxZMKcwyosc7J1nf4hoZk61vMB1757VpFg9HxW5pCHVW95iPXVgzzb74gfPkNix8gLd2KbfarkfnJQ8L",
  "key15": "4sYCSr2ijcDjBqSqfyZanghEAxWBFn1LK67KPq4mbUTMKMwjvxwRuejKYsSC5fUkYWRhDfTHeg7GahVgkFZ4ZVWg",
  "key16": "3HJfRVBqzVSxronzbH4NMPizBCs81gtz8y5oHDLYSCerD3zZyhWgmVJupZT8RqLpmqLNyHN69tV4DzinJvivpAja",
  "key17": "3GdtfCq18Y4g11E1B7KfzZ3uWREMNJ9XRJhHQcNcVG4RimNZxzhrC8jEejhMAcmTTfTXRekSBscLPMVzz2Jav4DA",
  "key18": "2YeJC1yMVGA52wwjqnj2nM3wpN24XyG4MTEr6yvbTPVfzMhXByALuKcXmt4LsTZnFyk9HsoqY1JUfqoKSMhbhyn6",
  "key19": "uqmmwnNcgndVWWcVNAVWwMuP7sgzLcG93XJdMi8wayxqrFoeBQydEuPdTYozftJ2nWujTcfd8kWb75F7XzfzADs",
  "key20": "2qqjLmDZRvXX5HAB26UMzuH4ymtDrj5vZQAHCAw7j8HCdX54tP1cQ42JMGAD65ZfbbkbMfnA3EgZVrhFXj4Xez72",
  "key21": "4o7P34AyKrao5b9o4Ln3jDE6y5uqWmHMuRXbwVho3hGedcSJ6P64N8eQeCkqfVizm4RPeWNBsqczTTknDNRrC1Do",
  "key22": "3MHTbgkZUHgtLPAWqp99XXxnw1QtuUxXtRhDcdQg3JkEDQpXR1G4tqihCHw6JpmactvdqoZzriTFYieQs7LHA5LZ",
  "key23": "4ciTGZhfSYuTKTBehLVRh49GSm7E6wugWdzeqHnhoHFmRYaSad7BFwdAnE8oF8g3vWt67WgxP1XJBmNKc8Cs2BoH",
  "key24": "4nDtCHmoDe63UEki5Fcchvib4rKLLcA579RxPx78sCQGcdWP99MVTKvwGXbS51u495QSAmUR3tSjageGYtrUWQgv",
  "key25": "kCk841Nr3zKWwueBvutj4jy3qRdpJivTXE5CzUntjYDHkXmrWxAaT6RmthSUE95QndzLA3f8Sjc8SX5H5JbVFCV",
  "key26": "3Wacy4nEuvWM6ojobMwJ1JpmuCHz38y7cEu7Zgk4cqj5RBEMqMKPs8LaUn3xZ3zUuPXVwyrurUw1rdeahajRfmUz",
  "key27": "Rtef8mz3AgwyfrcJrAeXvqeJyJN51Sy1EDy1AW5mv8mgLqZmbyL9ouubYko6C7cEYhaVzAQxKVDuykbZnHKCGjb",
  "key28": "5V3jjVg9jyU96NtiojFSv7mYjb3gGByZZUettayygK7wZ85HR9t4RMXnD4UWnB3ETo7f1Gg9Z2aSHpwynW19MDfD",
  "key29": "3VZsgtaQVEuht7ijuEJMa1obHzpMGXp32GbAu8FdGmxHg3toRFWodcdLD9cJtm9i9a5tj76n6xn9Bnv9RFwV3bWQ",
  "key30": "39buis9jQbWMHVGjjGGQEW5NyXPwcAhEfXwhRxqBUh21ComgGfvGSavuFVta3EFde2PCHX47WfoFsY84nxjsE7Cy",
  "key31": "37gKe81B1PBcqsJtaajxYUFVT4qqzo9Q5U1iUNx2DXxyacw356R1JocGXrH7CkmM325WQKHzoomihBXzwYRqRXak",
  "key32": "2RMYiih1wHcGSCSsRTKBjo6Eru7pFd3NLyN6uC4fkxPgs5vbBLzbtZibSAfmWsXrs4u1zwkGfF2Bd3yFq7892nsK",
  "key33": "3tpdpviE8kpUvYDcbKB87EKMX6uyx7Hd1iu8s4qi4tSB5ayQ6iyxJYF4xmhQdFNg8zx4waPfia4GefHkHJmJjiiF",
  "key34": "5d7tQwEewk9GzuMr9Lbh9ZKAPbkxGar9ZCeiZjra2Ft9msb2gdabrTd9721zmcWQum79WTgP1m4h6sWzyti1DbBn",
  "key35": "49KnxXWncwWLzgtfDSb7FaxAsdBPvT6pX8UhsnDCLdEo4FgBUAnP7YMF6oEP1rocwBSBHxr67LNjFafXUUo4pMo5",
  "key36": "28Z8bLYMRoRtWZAM9i1XGUc5Dim1SkFrWwuUgr7pW8tpuzqVvarkKpqxYzS6XGuYcpXdAngSVtysFJxLiotMTctL",
  "key37": "3RQSThoXGdh4AdmaXovT6iNzvCKPPrYFEvopmE3o2yw5m2voSFaGprNBiVNbcXM85SjGPnurvyU79nDH5s9mKwVZ",
  "key38": "2PhY5hTUHqro4qgdA5txTKiL5c4zf59hWMqrRcRm1umovfEv6j27Lrv3BJkvu4ovSGTt1SkLL69RPsQgyYCiqYd8",
  "key39": "43Aft12RyafR2U7MMmkuwxbKvPZzXU83dXPaMHeycNM2Vj3prBqHSD9GQiQNVu23PeLYqhCjtzG1bG6FRDrXUQ3b",
  "key40": "j3DF7HeWMbqdWDtRh6zgMcLp9v1huZd4WL4BpjKCj5niK4WPHpEiqn6NzPiaM7CXiHrKixR9ZN6x79g7UoDKjHM"
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
