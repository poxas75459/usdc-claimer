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
    "aJL8PM4tA3eBgW8EK1xxrzxnUkok8hgASJycaKAGTqxzpm44Wt1FJw7Dvpq1coYAkYxXoUM2NSJx3mWaD7ogZSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtRkMquyNXm8YPJAAtz5ug6ZmNwTBv8rx7mfiewykadU3uTDk2ctaSGr3WqM8A4eSg9Bv4MAMd2oSRAm8gnLWPn",
  "key1": "3Ex896MK7jddDAVWEAmx5xcGtLtcGvXjr7nAR5drP2h1kbQAMRcG3sakxxNVtkVes89c44C3FNeuWqEUFt5tNPs7",
  "key2": "5NauruH9eALmNTo9kbGFy3PTiPRmxBBCxZecLKhsw3H2efcL7FBfKMvxNaP99SpvKNTuP5dxxBz6k33HkQfqxmMf",
  "key3": "2CvSxgxFfQaE1J1ceKzwDegE97j2Uvjks7Q5nRUixVUuTGJnQJH4dEB6xQd29hQNca6j1oQWwyvRB74CC3q6agv1",
  "key4": "2x86C2yaTWcQcQGdYupBNZU1UEg4msHPCQxNMEomMLCpRS2mwTEuPLhBHqDhRooEKEV1EoUXRZPAjWg3TbeCpPMu",
  "key5": "3tS84kfgzJhjDb9EE2QJzbjNXMvi36J6gkR18nytLxU81cTF4WEXtCWho8iZRhNxf3mRiwWpiJGBcNy4EdKWrdGv",
  "key6": "66x2TcFRVRp6Pe8iM75omkLqxj4YeTYujYpRgg4vkRHQEoPN8f24WpW4aJa63r6iX8G4LCpzG5ZkUMRJk3r4KEzi",
  "key7": "5x3upfFjTjeTb8w2qWz8BBNTEB39ivycE9PSHPVyFNpfY4MDvW3CXgiBaxAbEUN8Kk4Ts8tT1xKkvDm7VMAp9x8F",
  "key8": "3thR3RLkR9LG4Xeh53AVB56VtU7kA6U61gffFsSLCWBW4oN8z2mGe5cssDuhSQAixU5CFTcvsGijabtqEpCooeS5",
  "key9": "4KFLjbVpdvG1pPbZULre1NdncopWcoeqxVrBd2tP9ZGgUGA7M8g7cWZ1kAYoJbptVVrjAKY7yA7t3Z57CkYWykwn",
  "key10": "64gtigHZ6MFwQ3QoXv1S1QthHcMhy18zo1YeFQJaXffC3vmdFksHz8epaddKrAMwHdcpAQy2SPrqHwM6HDmrNtRw",
  "key11": "5WirvcJfiN5c1XTTGGwtLPgqXVupGKQT5T71vJcnUAkAvhebT5aL9vmcjxzVdacttNn1si4GvE35YpTTWwYU6TQG",
  "key12": "4kZayKpupLS9hHD8FNbkWv73oLQsFngZFpC8nSGe4thHeTSUV7NMYqwwPFdqowMCnJpckPS8gBs5DB5sYJfero6a",
  "key13": "44kjoWoHH4mLjaP7wauNUchVegJdgGdxMeVForcr4fJtoqTFPVXoDaNMUfvEEa9Ns8CpcLMiMxYFEiBK2FnuzYBU",
  "key14": "UMTQFHP26wAmMB29Rum1pD4pywTE1YLJTcnBNk2oeGxgAebDJow9hwDG7YAFwKqVkYTT44vC7D8tCwbMezHD212",
  "key15": "5rE11Nq72P3hiHbZDKK7LvzPTBUAE7E9c8f9sSwB3tRoF5bShxefzVGLByfWXY8RaLaNMw1PUCAPTJDkMkEkrz2n",
  "key16": "5vxi3WrssDUHxKCJgJZjuhjtnDYHKBC87hSbfCcsgEdDbSNNnRM3skzgPzBmbrK3TeCAeGKcgoATXXEqe1gMQwR8",
  "key17": "3j1CEarLiShhTL8ezmssPifqdB44wXwKBGuMjk5LxYCQWsmD4DJVtD2vVcvjBWY6SQZ4VgRvFh8BB3yNpfAzQvCs",
  "key18": "2UrGEpJU2VRQkgKn8wQBeWCXfDSzSYQnuGqbF1cUUDs17s5gRYkGoCiea11V1revxq33GDDq1WwcGj6erkWUFYao",
  "key19": "22DZrCg5a2xeFLxEVwouCEig6MdHjt7BYwesHinCG8Q6Yj3cAHR9cosfdxBQ3mFZrATPzZzE4Dy8WZzfSE4D6vSn",
  "key20": "2HDikR8yUghsrQeTG56oZaYRAzVAjeFjzQ2WLEBhS5hYkUVENkPcwQAmWMHyQuKM8Au63q65ygrmCkM38m3wYtGe",
  "key21": "35eXQFaxsaJVxsZ14ZdvCNm7U3FwhH6Cr634z5fnoySoMzhYXgigkcN5fg63VtnwTZ24SidZWawMofhuF8kjj48R",
  "key22": "5ecR8ivL5i5enVr2uU5P6mzwRwnvELqnF2o1vV46xGWbLpgGpWCbgjtKPk4ESGRJQmaZ9KwvHni2EAKgDStmHN64",
  "key23": "3LXeHagx7fTG2JuQ499XZ65BFy1Q8KqHSmB4bHM5jVA8gvz9X8DnPzDFigJzin449MM16mb3PDRZ5NaZRYYNt15U",
  "key24": "5PmRq5de3SZCYbbwifKzDVZwtEcPWXyoskr4W7Y4HGRFyiCj8XjTzfruZ9FLZNPrSD8wQjG9rQVtDzhKwsqk9pzu",
  "key25": "2rFbjsdUG52xG4QZMgHcKRPYgxTvPPVrSUYzhUzd2KPt8YGGXDmMniWVkmVbn6HimrQzzDpmcJS3k3otGSFsBL13",
  "key26": "4qbtrAkpWyeTEiSurXrh3GFQaLCNtvbPUpzef5B11UjcxyzoC2Eci3Ez35Bhu6QDy6LPv2sViHjYpH8hC5ctbSgQ",
  "key27": "3jqPWpTpUNB4vmbaP8B63q9hbwqNtuNRvL8ewmfffZ3P6jBPBjyooVUiG2Vc42z3EWgyueTE7vttAXqgjLbHX5rX",
  "key28": "2cFoibEPiKfcYc1rNqxvGjEAci5t2mCjMtKQhqaQfY9oPKKYcHcBkDWusfvUHuRhkarmBjJwTcDDo1dbjAFr616i",
  "key29": "59fTei3S8xbjior79fe9p79e9B2Ebs6wFY9UN3QaofuuTD5zNFrBM75DgnS6qFT7eNiY3JgLVBTZDKhoxRxLmATj",
  "key30": "6686cb23qU9VdXtFQeWxroVaAK3kyukqDKLybuZ1z1X9otgHeFvFFBSVwYKXJk9Q4vokiUxYqvUd17v7PN7b9oCE",
  "key31": "5KzSzAxqeRcML1iYAzWzGmoLhei1UsA26r1hvN2hswbGR8TMYJGMfhrF4Nv437mV2Bf8pYMWdG97nRJ2nUvucWe7",
  "key32": "4uSpLq275dZomhnj3GjvWQRNhG8bKGJXhgafeRXdkGD3vHRjZAcdTxnBjMmWJzJTG9NoLsSgYBiBvfD7qKUEv262",
  "key33": "2nYa2hEud9zfBiXCs8ZqagZe1PZDV37D7jkGxptZkCEJMsF2paqwrXDNfRNgmBppPm8t95Ex1zPdF4RvP6ycEkxZ",
  "key34": "2kX8JJ2dNbjSZ41PNtvDubHWZdDRm6GfwuMpSaBxX1axyHzDahN5HNTsdLJyPFeH8Y6yxTywxWCzXw17dLe3fTMg"
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
