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
    "2oL2XdGGEph9uwB3Yj8c5KiigV9BR8XGfTF4MjqkQXb4aigNtGnvC7pBESEFkxkfHdnc9TDJjtLbA7yPV47LFhua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495zmkUUghW1d6tWL5539Soh45GHX7VX1tiQ1dWVdJFJXnBteZW5YwJqhpuHyqQUJ9pjvHg1eg24iSy9AVLDcocT",
  "key1": "34sjVHczLd53tSTmiAax5gWEVaMjGsxKS29b3tXv2K5Sdy6j75pMpaZkA4KvnC7A9qoXuw5tPVcwjWyEPkAP697n",
  "key2": "3jxxoEjyhREGSZuGnfnEtM4UbBzU5EN2rX7MSK7oSo5CcWf3kcZc6Xzf7xiADmSYmee72A1i17UqxH1j84tay6Tr",
  "key3": "WC15e4nedU9dcbJ32WuJuUrmBMxzQFVZN2cVifb1UETbK63uvxAL5jRN3ur2z9WZ8uLaGtdSGB3UZU2Wa9D7N2X",
  "key4": "3r8Gv17j33EeuN5xc1vWfamm8iCFiVB9iGgLLxjuVrC4swn7WmEgALYYXuaxuV4HAToVtLqCsFefXahkG8mk7Wrp",
  "key5": "2h8jJ53Kg2K89bhrA6MvgowNqknrRzeRfq89KZRfo3QQE5Y8mWyXKw6aD9NpR4oBA81LUZy47BxURs4P7ohid58N",
  "key6": "2LV1tWkhoD81MoQJzDQzZ4VZUViZBkDj2vaDgd2ESBcgfB1UNZcUdkrG3VQLx92Co1996Yhom9U94eRxi8HL1PmK",
  "key7": "49a6Nv5gSxb6EKXQ78HoT3yo8tjqyNNkUeJWggS9K65bENnA9Gt72cboiYAuaF1pdT78s2Vnc8u2wTU2oPvM3YWX",
  "key8": "pgiGgazqrkoyPYziPBw9YHq3VUgbAY8tVLGncPA4C1Q8CRdK6qobHwZm5ncyJQAX2gnYHuA1NsNfsLzh2g7Dpfj",
  "key9": "4Z98idqJnDc4J2V3iuXFuoXW5gx4CVW8BtSztRskfNJTBnhLoDp7aV9EwaXhhgcwhN4M9c4DeST27Ns7dJkgiQMj",
  "key10": "cm1ntqxVaYHqd3FEV11tBPgAMvpAnwMb5R5rpdmfomzEYV8Xa7hryfiAzgjQcAu8rDbnfYGjvaU2xFYnofhNZHe",
  "key11": "3QYW9puJLLgT5pB566zuZixAj78wHqc2d1Spg6g8BRzmSEbYtWBJL7mQSE62JNJNW7hqXEMuaZNXLCn6s27CTmzW",
  "key12": "39sZEwRaLHDMQkxydUcup7Bb3aGp79T8bczPmK1uPW7oiJSC8RYcNjX6bYRBDmv3i6JTNs7uMPUGJjG1U6PhdaoY",
  "key13": "2k3BatJhhnGiUC6RrNg5FUdAmpb4btMiofzo3Wz6Ji14djnKEdWyqZGtc3SHutf9hBHByT7vcm7Mse87NSbmkycp",
  "key14": "3Fz9rXYUZYN5ryer1zvhnx9MRDXH2n77x8R8ty1c6tj9XpL6YLSrDKfiZVhrL3YPhMvhhe8y3jG9X7QivpveF9LV",
  "key15": "27AMXioR1eY5kH4W2KCUPpSmieXcLV5s97cQpA2mUygS8KjJRaLd7rfyxKJEYjsXsLF5p9SqNXYt7YFi9iJ7uPjC",
  "key16": "2w8h2yexVuaXoRfXXd786Pf8DrrYJyBxC53SmJspDiR9CXJLLEmaYzTiwCHDdtPu2RUNRcJSBEomZWa7SjHMcnr5",
  "key17": "61xxjUzFJ48XH8gGu9ep3sgN3qqXnUw1ppxVfTiUixKFpm7dB77BbWYN8X3nGD5YLsZzsbmAbLEDB8gaLpUzBFBN",
  "key18": "33KkNHqjXRUxc3HdfB69Bz9hneyGovPqi9Y2udkTS1nnDDRL2V5mEUP1A9hV5Skt5hnVpauonceeZBt9hCuue8X1",
  "key19": "3z3F7dntrG9qt74Bwuajz51cTAneb1njk8WVQ73jFtge6rgPUKj8vnp8QZKgQBzGQvzKhbidcn3gyFKcZGbet48E",
  "key20": "5Tvd2ijGxfA6an6zeRBgf552tLTmTkgP3CxDZk7yQ9H7eYN54AbTurY13KjDtfD7dvyt4b6nnzRUXXhhG5TYxYPN",
  "key21": "3wVYFJK2uSRZukRR6DP1oBpJ2R6coDXgkUhjDiwYyTqhPLhjcViqA8RGKDdX3D85EHXUP8S1qui4bcoPtcTi7rkC",
  "key22": "4owqyhFwdueBjqstTGLUJBG4s7Xe6VohbSVMaqtAnvRXwqt76WujueQBLFvtKLdS8NhuayxkvDoa7SgfJbTCwjSP",
  "key23": "414cA8k5b5P6PNwpUSK6Xtq5dfJozu3FWdPjt2i6cCyEQugsCvD9CsnCQjPZpVgZC5EGqZQTSmp1PBj2JX7sskEi",
  "key24": "5GNNYEqrR9mrvjTUm2NUjSwcBqZ6PrH7pwZXu9ZXzVL9wb1uX1rqsyquD6jNGLmZSGHZyJ22NzgPZu86q4EnGJ6k"
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
