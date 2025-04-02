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
    "22n8A3cLEC32gkSstUe4Dncj2CGomB81omR1ZufW7722KEF6YN2txgzdiGTAVf6RVkCHPjdaiFSQqToSxYCWYy2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rMKMQCA7UmWUoTPNsmq2GrQ1oBckieSQffJTugmJq5vXj9zghN16ZVVBFEQpRWX1zVp3AQSNT5dohgUdjWEsWmZ",
  "key1": "4DV4JudBn8Py8wnZJgdnugVUGsAPGrVq3xgjV6uxWSQnFh6bbBR6zmSAZwe6sVeBsMpb5FEVhwUp5TozLS8gnXzM",
  "key2": "2KEMW7GT93GYKZXYgn3YpgszZGa3mgdJtvMybUfL5Bikwex4BJ4bQ6fXkZ4PR37VhYQexo77PEMAkugarR4SkdUW",
  "key3": "2RzK6gmobWgdrjizDrozfpLGZgyghiva6FdtqNnQJDZJH1g6ypWkgp5dDL8ESfCpotoHzmeDV7y3gicwaqBR71W2",
  "key4": "2R2mgUz3pQrHeBhfojSCnBEMY65FVM1bW4WUpqZYGuCVDSbv86sv1tDJqjmRoRKSFfQFBhPAwEUaZae4zLXVN812",
  "key5": "4s4AoszeVuZY3hDCfr4osdex7fmX7CbW3b1q1xhqYUjbS5rghSKcCRVm2xBmMDoof7eWwX8PhLkMYyBu5LXpiY5q",
  "key6": "3sH7b6XKzUp56veK42kkmpxgFQy7mWZyttDmv2Ncaj6QoUDiYYwQQELnTtngZcpnszy2d3SVVScfoWk8xACtWuGA",
  "key7": "4FrtA3X5PrE8RwiK7ef2vuLKRGBF1SgmfspTxRnM4FuNzkjg37xNWYTyjA96cDW5vsvsCUceTBWY18i6NpRD4Vm",
  "key8": "X43a1mtwsxdLr6TNPWbGvnwbqSGykYxURk7LDuzrLFGFEExvxhjByWtqfgsHwSGW42NFjyRMY51NLXpSnXkeVwD",
  "key9": "MgzgMKFcQ3ZgFogpC2FyWZu9sVhums6oX4iyy81dN3SBQaxXoLGumxdpehSNfZV7TJ4UZwM7b9tvkm1Yip3yHD8",
  "key10": "4QRDHvjK3QnPA4Byvc8zYyZKsPBveotXoXqQZ7gMHqsjiM3ULyVBCV8qoR44b3B4jp3xr1tWCbQaVsxChHovoLvY",
  "key11": "5FMY3P2VfvyfnaCJfcMf8ZMWcR4HEKZ52SCKmqwyXkGvXHqJ1Sut5nvscTUwmBBYciYsuMAPvsMYAFefWiFzoEoP",
  "key12": "61PCC9W7ZQTRoZe2hTEZphLjexfvpUwKiYmezf2G9gqoKk5DAVw86cY9EKnLttSWMrScxWpXkz48YEq7Vsiq4vUd",
  "key13": "T45zgPtaE9mYG2uDyLkBi1tsUbGgRqvUs7zz8udiEvr9WhTYKnSaVA9J1BvEMzpq7YkqjZaNj8gk1qVaTFkAw3C",
  "key14": "AQGQscLiQ4xBE4a5Crq6DGoztYCo2gtGoqTEcB7L3DgaboZuZ1wPQ1Sa6LJBwcLyDzh9RmjLHfrYBrUqrJJYEN7",
  "key15": "5iYJX79sPpNgYd7YSMH8Se3tbRC5QZq3kCCPC3xznHXsiLD7t5LKrNaARqGUkNjjpXBTtxEbCKsccUyWdCCUaTTD",
  "key16": "3sU4fLCzezDoDniFBfLiTodG3pe8j6hQWPVEKzWiK4vVnfPCyeDCRftEYX29KoWyutR5kHeYobfhfq7TYqvkP6S6",
  "key17": "4e4AgFRac4QB7imPtns8BQffRQnPCtFZ7vAfxM1hRA8M5gurK4NmvzbVaTVFHcVPJNFU7wdfYNi79LgVh43rXggM",
  "key18": "645cT4WrPT2onompNofBpFsDdG8MzvuG44bqznH6fgobxNqLWeRL9Rgg7C7d7RF3PtBam1q1g5SQ75LpHVyaBZBd",
  "key19": "5YBxAuyi1fFi6bcA7UTs3URfe9L1zi3cCQAXumCL83hEUfv8p6gkSW7JPMhxjfByw6dwDuabLiVentgeXhiNp71k",
  "key20": "5HMe1FviT785AgeQiKCUkcCuBnKUpbJyjhD5NzYugvCsipL41VFq2AK4NFx9ChTMj7hLLgw7cPKeKRt7uuyXcXcY",
  "key21": "5d3ZeFcRP79uEH73icYh6KGyidmEXdLKojcUnPZwTjbgaHZ2Bi7eRVVCC65FQ7fvSWiRWnNEfjwhtVN2tnvBat9r",
  "key22": "Z5snxxNFcX9AXpGmLLAqBZ3zLwXxQuu7gPqq9K9KuYgPZQAc15CUdkbu2J1NvcBA2SXFqhm7q67EW9Xb5dK5XKH",
  "key23": "3582e1RTN5E8qMZX8EevtcqjfSGtyururSqPDFjaZB4P2FfS7pWhQSRkAG4GVWhQzLedhzndCe94D4qGyYsAvfiZ",
  "key24": "43Ddp865gPFvCWFWLGJAL4oMKkuNckjEGEhXD5yHhkL3949pNjLJPG4LUkr2TuvRL2QvFMKLLjnbPrepmNSmZCnj",
  "key25": "4F5w9MToHf7vzZj8FjHC1uanDAoKMLiu9anBzj6c4upWqCNGwduV5eroHdn65WGQDhL4y7kprk7qiwwAVWYx1sz8",
  "key26": "2wd8YG7d2MRDzr7arFA4nCYoviKCZsRbshE3g5ku5Dozkk5psK4SvhMMki1d7Z8ievfLbUUsrGFzHY4r4EukzxYF",
  "key27": "4aheZkNC2spaLhBp6kGiMkYbxe5wFxADDztsyafwBza9SGjbhydWiVeDjA9TxdJw7Zgpgjdn1cy9TgVpocM2FnZ2",
  "key28": "rnRqyMskgKQzqsorrNJCqHvMo8mqJbCbqjueRYDWuaddnHoGme4bD6wpt72RdsYRLgaSbuRGdoPAJZffirgnm64",
  "key29": "2oW3FXAgcdDEYNciM6sWM7Dqx2Liw3u1F2pwQkbFBVCBXR644HE7dx23jtL9RJg4RMmWxJwM6eu8r6WDLvkN6uNa",
  "key30": "49Jo5Jiv7T22MS9wwwKm3A62BYdV9qgUjzZxeq8e9DkFSfMEGutZNLG7s4qJTmJDRcyqxeKepnU1phC3jUZRo7nH",
  "key31": "3NfpgciZkwiLVy7zzP8h8deVdvkDiDLsMfZvmuZZwoZk2WZHgopxzATqW9h5nSSNa2kfwjbHxh5YBV6FhapzZaNZ",
  "key32": "57nYeYax4FXf3VorysBsP14z6tBFATjL5xwCMcBqXZ4N1zCArxnhStQb3cwdtbcb8uNerNwz3APsjQKYmyhxuwrh",
  "key33": "4dNQXYucWWmk6Hbwn1RCP8nTzNaLSC52rxDqEZXDxqg3kPJy7jhN4NHrAZ449hdtAXq5i725iLVpz9Hf2oCEUecb",
  "key34": "2LN7xMtA8VzFLkjM5okdbYPogCUEE6FRRQVkzSBdU43GKEE7WnjHdSBuEsC1SkXvGWNjsiJmqnYMWnYvhsqKD4sG",
  "key35": "53NMPV4n4VEPvQmQtb99ed73eqJwvtiWAFSVJo8Eq61tob8d1c8NH75jCZSTUjfCVSnWUi395cfHQnpvabTLqdqk",
  "key36": "4ZFiBJWVRmDqEoMApdTGF8vt8Vmg4LDiD5jx5PnRGSFGcPd4TyMHgEngnmmqSwBwzheJPvLxXccJr3Ch16gVFZbx",
  "key37": "2r2r5hHhRHdKu5t5B4eThuSFNgWs4fJrBJFoLYhn4HMTwdKuMEMUPYWgWmmpg4nrCJycbSqHYGfQG1XPrqyrePno",
  "key38": "5Z3Cc4e7cwkvp63XZyNK75Dm3qknroG5GjBszt3tY1aeYofdDBKchTEiEwHvcmBhyrgcFMnbk11Af683eF7EzjwG",
  "key39": "txi5mSb78fg8qkKFksb4FfJ8tmzDoeaDggFUSVns33Pn4puSRPEiP3f9Geh9mW1rQnF4zQKHPd2tS5F7P6gg25D",
  "key40": "343EU9FezPBhAV6szUj5KSWsxK8Xo4WkUnjwM45M8jkEg6ZFUEJqxE37qtPP9psdiHKERzefKjgkJXQ3RN5iMdv8"
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
