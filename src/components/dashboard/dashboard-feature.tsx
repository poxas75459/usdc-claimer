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
    "5Vr8J8mB8pcBWjWQT1vtqnGfH8LTyYCMvK551g3sC9pSh8jyAexk8fcPNiH9dDuoLdbdeU1qH8uGLX5tpZRrQN33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1JNz4nNhRNonRDUc99zXNrEdpgtjpQiR1QDQi6LQsEKEiESMeW66TsK5gUx4WNsPNKqCpds7zupEv8j5YkAeA4",
  "key1": "4ze6VeHwhRTdyT7Tc3dPq4vgpK8xoWUX75fu1jSP8fVoyW62cwA1tE9R8EdbFEtQS7eHTFMKThSp7ruu5mnkcpSm",
  "key2": "4tAVahtAEfNv7AkV98SoqUGFuw6kZ5TFAbJ5mvFUnZpaex3Kb6c3z2qb25xtBpvBStNJ2vnizQNLF5ejf3LbkJDL",
  "key3": "4HUu57SoJtowJeTPiop21ywasdF4XUawfU8MPK2FrCQzSh57sCrCz1yoCjNGX8TdsNTgpqw8WfyCvDfKfJWbdJqL",
  "key4": "2PMtebV72cCUtZ5RNRQ6pZZiGDoN46AmACruZVZbsFhCv4Wp7zBMJ4MESPwJFRTGYFQTGoq4F4CsptcD6Bq6Jm3X",
  "key5": "2nVZjeABCTbBx4f68ksBQbg9LwDAqc1m12YK2jMhLEj5zEQhwYrgucntrJTga9PRZkYRj7uDkzMV1df69aMYK4VH",
  "key6": "3WXiJgV4L3PQQ6DuEk8oiJLQ1Cd8VejDNZuZQ2vZ9a4UyMv7tN1xN8fmpyXvSSMsvJtUTeGvnznnfw4eCLAmWXJQ",
  "key7": "62aNn6X5bUbJUBEyUA9oQ1Khy7bFzyDdfxk8XRBhpKkE7CRGgfnRMXSGxDXXfrkgrJEEvaApc94WAdqyEjd6YB8d",
  "key8": "2yzmLQSgKi2H7rG45AwHxVvu9aA9A1AsmhNfNN3hqf74hZjYNjje6sucRidbtQaeYTCPxMwKQQvLGCQEesg6g983",
  "key9": "64HaWmbyJfchZoBwGZpBZRJULKAfp1CrvkxDhTKHVe3wnSf627CmUnDpoTrU3UR4Dd3QRGohUuY4mAQJ4h4cAUCS",
  "key10": "26y2GXU7uD7prLmyX3xRSnHoAnq8VANZvLSTMeeV4ZMnnpngrxD8XmrnyJEtjXaw3ZP71Qz6SNskWLpSnrFSVm6r",
  "key11": "kojKFoLsaBHrHiurUy9PKqLnTJEjiFitYpwFb4x4CY4j34iycSW1kZ7oLMsWQ9SKq1s2vCY7C5zQiw6ULMByixu",
  "key12": "2bUKvibBtLTn5Nx9UrB2y5GnsqxAy2LADse8ULwRegyduiEfZTu8csLgb4U2JEXR7EJmhYVx17TaUfrsx8R25KY8",
  "key13": "2hdh1VSCJrBpEDFzss2gvytxdaxMvpmc1CuScQXY5EJXGentb685GvRT4r3HvPioxvp2oBHsVD4nFG5bUQVXyhwf",
  "key14": "4yjAK47U9kCKpuUkpVQJc9cJf2zQWXFPjWgUPmy1NRyC8dqJvB331XrBzT1Wthac8W6SqNTMwaAZoFqCsQyHJ1ic",
  "key15": "6717X55BgZYJRzBvGTnZVvSVADnxgwewzntwTUD3pMoLwf8Y9Y3fdQdGVeUDCqB1bQh51CWjc7YyrbVhQ639zBbx",
  "key16": "2Ht3EKqeGEQ9t8QNfwJHG9Cp7mGw59sCaUiJp53JhfspxWgrBphdm3nMDAbGf8vbad7npeDrfMjT76k2g2Gm98PM",
  "key17": "2cnF9op7hm3pmohio7PcyDBxwvY5ZdCiGRDAtGJY3DRA2CuC5dnNE7nrHZSTED9uNaKnQHP7wbkV2QBVesGHqih4",
  "key18": "4ogYQWTTZVBTVoaDXHS75Fxp1abSoadch94K8R8Lbjasrra9sU2szj496CTUyQafiFN2oh1bykBaxBtzUhTiTjmm",
  "key19": "3rH4p9Wnehrxej56TLLAKFYARDJF6jQu9jmgGx5GGutuZeuxvKNmkcUYXXyShqy5DDsvWLFcjmzAG6YAZDRHJ4Ym",
  "key20": "Yz3FiwBhYRydghVhtxdfreQBYUSFTji4LQzhdPiwGYavMHWcnak9kePYWeA8N7uZAzYe4mCvMDZ91BdUMUT3zPm",
  "key21": "4N1nvuRzujH2pc7qcZswzWf6qaPnob5AsgzHyrbb26hfeVxbTreWVEGdu7wpKru3U8KVdoSSx58b6tq4a5YCB2p9",
  "key22": "3miyTRAh5khUg8nrpme5nNTse5BXs3ave82dT4A364oszDHgdMcKiZYABXac2dPPhST7jAqzwDZe4KeUtTcKC9zr",
  "key23": "3RRM8VuxmrYtRhbbG7sakEX9jX5RWxz1DW47K3K7TwyCa3deji23UCPcVMUTdSk4oWJXbbPggd9FCaCeA4Xztf6r",
  "key24": "3ZkaMRroHLrYkQtvm34swCUXQmHtqXz3FLAda6HfkewBkKKfqrsnwdsUzVnMcWvAkZCEJj2QMf9kmJzQ9ZvZ4Ndk"
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
