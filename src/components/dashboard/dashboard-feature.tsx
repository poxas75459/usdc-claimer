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
    "2yiE9NuVpxAQYHJZYSMzQU428qZprssju2Unc8zSiULuFAGx2zGRPtSsS7m6K8zqugvv95EJkjYP9LecjubzDRxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3faPjHEamJj4r12TxEp32bGdUPzFRKeFbwnqMeDGLZiWvXqeMoL5sQ2cwFyb4QDT63F97srNp8W3JVkR7TQ8mWxe",
  "key1": "67Qyh9esNkNJGnpFj8hbEqoAmsjLnCwB2hzhNHAWL1kgpZ97AsZRESXt9NMise1Bcd5yx41e5gWTQUY9s1Jyk7SD",
  "key2": "2LHogi8ao9LXWQQBnEdsSMdassHcgLraSWBTtc8QgN16bJP8r4YXUewUb1KNEZDhPjbBRbPVLsAs5Z6NDQye3RPH",
  "key3": "8KqNKMJCZPHcbMvc8iymwENpBeTzjL4u3g8bANMynZKZHoRLYuTiqhBechfUbZj2WGzsizLx9p7g5Auh8zmtrvS",
  "key4": "2sJJKZzEKcunggKZ8pUtqRrCECs36MNuzPKmsVjfZQebAtEsZxb2Ddhws6EGmQ3GRM8Y9ae9PrmmB29Qmyn1EXTZ",
  "key5": "3xSD2hW5oLuAXxFiVFnBZLfq6CZqkcvxdjMMsKyF42HGyQAFFf6RSEu5MAkzvsEusnYZ64H18ribo3sJEEaRzsfp",
  "key6": "2wuyyBrt2KKtecekxLHjyKutHvPiEyjzDWqrCX3KXkiMBrZ6NiUAK1Hu3R8dcnrASH3A9UB57jXnDqXyZywTjMo1",
  "key7": "1QZevmRQnpJMKSs9z2xByzwUioFZZfvdtKKvDiTxaicgQGEawevwLFcnAhCKhmiqCG2CdRPcxZaUrfkjrXUJGfz",
  "key8": "3vPMHCX8AkN3FxjU7NqKkhNrENiCTn9R9kkLcXa9QRviSwHs7jeYhMHHLsMXWfumYLDg1ivahrCUWboZsbHQ3kUB",
  "key9": "54YkPjeVbhWhrAhj3npfVTNQVKF3RjJ3grMFfM3QizcEAXmZcpTngRkySbBRPUB2VvXBLDEYfbcairVTZN61iBUi",
  "key10": "3ZckZ95MASNwJy4N4uqKzhqP8CgSLMyBPys5cAM9ivqUfiY77AjmwJWYpKwLwzXU9MWCRvEg8Njr86dboQSsrpck",
  "key11": "5jD49iwBb6GmP2HyoSyn46UoWuw6zL695Z1EmxchhbL8YvVmio4qnYoEHZxr7Tyo4TVroDwfywCAyzHoB7rGaxJY",
  "key12": "66LXWVabcjxv1DLKHWKWGCMFFNhCVnST3zLUWTiWEKHMsCHFBN2ZtghyU7oyDLYFbpCsn3qwzpS7U25N96S9QY99",
  "key13": "YHC1UkynD8v6vzFrbtqyJQASruu295gP1bniMUoRbGLWnpaMWJ1YYaCQ29A9U56zdWL7QBZfGAwjbFYhbdZyhNz",
  "key14": "4ftNQQNxqWondKWdQCZbZThe7Xt7hrDrvL4EHrn8nh7tMunuzsMj6TfSASJYjTzXmww4vUgqQJEMUcRN28WYREwb",
  "key15": "5CyHg6BzKgN7BfEfWkaPPwgBWDLmNicVkjbFuV4bG44Vv4HCsthuD8WbVFHDQMfraLpiS7rHeUCkj1gCUmvbzUVg",
  "key16": "41amw84QUKBDifuor9wsXHK4zEhFnWH84ByVK3kim2Jtd3XsYtBugH4CzKeCM8F67UPCvvEtHWjoo1TCohhGwPyB",
  "key17": "5WBcryr32L9tsdjLJXG3gBngVb1z9ZEP2MyTbTubx78iXTJACkWNWErCgc6ULAR8FGZpemyRAc6zKFYTLYZaa8AX",
  "key18": "3ieQxgRiJiGXjS4RiCYwGCPchhSYdt4YgvUuHRsG4yzfj1Crxe7v7e7zf1QXDovuFJQmcHkaK2xo8G9EYgudUifw",
  "key19": "5x5a2CAN7savku2oyqu2kvJhRdeWUMPaMnce8R29nJ41D7pLvunXy7pDGiV8bebR8phQWecsPaVivrggMPgPLETK",
  "key20": "AbetaC9Cwfdz27ni4GciKUMZ1gPyq4dZ83piTC2fCxg5HpgNxSzrvmSeMN5Q74kLnqnwo9mySwkKzCADZB4zjAT",
  "key21": "Z7kqNieUjvGR5uyphyVJVdP28U2KPCteCQD5xjaHUKNxdKg8BQzs4pYrsfEN7na79rDx3AWinczvT2JhFydn3G9",
  "key22": "4kgEsinSDNMxdanbeUVPw3RerSC4BcLYY8voGkoZGBGsLQ1rTTzqNzff9Af1rWQDJ9qhShW35yZgnoZHZXyBdKD5",
  "key23": "66p1sBraUmAmhzCyixCQqQmvzJzeSj3gBy5EYii8tDZbxGgrojEfoyBnMyzES81u53ZNSVV2pnbKJqVioEZn1rWu",
  "key24": "43CG9zvFAsWCQ7BzsySMcrw9iHkxdm7g1jQRTqhdQ53x8WtzTcmPsc9GQeuKaoZy317mWizmNQEmxXYPtanhjoHK",
  "key25": "25bUGw5rsS9pS4hr3r3Hu8nfkheF9empXby9gHU3AT1HXDCncDTzaGKxHTJpf1Jbx5h5tf4FWXcq8i8onZs75dXv",
  "key26": "2v8CKK3Bihdvnj6TTrzU9XiQykagZGd1B3gioA5RNhFKR6jVXGo586ELdjB7CPsZMfXyudgxUAzWrGWvMLLQh7x1",
  "key27": "Hnm5PdRkfhQ2USJYE1LvgHqqiKrybwHjqdmcmMVFt73Z6LLPu5Ntpwkfmm9Bk15yz7exEeYHn6QWhc9NN7VZiEp",
  "key28": "2opES7yQSgT72kxQjBPzcLvzBsy13WSKBA5jvHkUpzgkU1PKFWGwhfkXycd9RU6JKFrdyDHEtK4rQbPcqDq6z9az",
  "key29": "65L1BTsLQrr8umiZp3DZMCaf6N579VK8zpztHk6F92P8dJBtAj5bkiw8zvQ24gVQUgutnqMECUouYDoMbYdRXJu5"
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
