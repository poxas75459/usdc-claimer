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
    "3outw23CAkXBekuKKzCXQo7KXCNjPKtdLknVFsVNiqzhgXCYUEMBSXiY4EWyqQZYdptB7DFifh5qTwtzvyvpxeLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pefxuQAMdSJhZD4pHYPSpiHnRqyePWQ9ub2wZYkP4rX1N84ADSdfgo9wzhkjMQd3N39JtRV8hGVkhE9tkRLrKLa",
  "key1": "dooxeiK9dg8kcDiP1WqjHj2kshdcMLbhnGhfFws5WL4UGqYWeRBemyYNw1Ag56bbmbKEM6V3AKcpFsZQV3EHcwB",
  "key2": "27p7RuaxJnQaydL2hyMTvXXQgMnuhgNpkEAb2X7mQ23T6LGcJwPLahVwAhwKmjfEDKe9aiCZNhZhPjfffT4Zt3y2",
  "key3": "5qEFYR14Gc5KpsYyF76gwsQA5fLZHP2ryVLEUG8oCvAqWFkNGNW4X8eUSoAjdddgvnoUtLrYnQ9nYiwVk8CuJVhp",
  "key4": "5WUYGomsDuH4jEJ29p2NHwmnRuaGqdobJDkH2mDfesQxjR3C6WQQkA44yVE354esWVg3v4mMHJQB2rfqq83DXA4S",
  "key5": "bwBBrVYp7HLZCreRFRqWsTaJpJFVmBF9nYKW9qYvk18JxNmcyqMMiCZiLnQuEujs3JPD1QZoNDwcTRhvwAfUkYR",
  "key6": "5Zaui4WsrFLAAPchocLJAeSSAgJoW7MyVBfYyrddyb1YgBzjQ6sW4PfTPb8D8DamRuaTW3qJSLgDPLdxoBdpM6iX",
  "key7": "5Ldi7JSSZu9ojiyTNG3U6zFkrjNePRUrgkhubLSYsosHccJnpqLkVU2UmtLp9mTQXUd7rLqBp3wungMaAg2AMQpC",
  "key8": "PaHzRCa2SagvBmF46mywTquyjSrhnqLdUg4L431fdXKyCzQBgkjdUij4KqTTbqrtMCLHRzfEKpoiw1XXFz9cQEu",
  "key9": "3KviyMSC4Q4kEUa5zXsLjer6ZEpxgF5FN1UEy6apBrEk1vDbPyJtYGXMnsufqR2RSPUjZeWgxNu7oadjidkBDW4k",
  "key10": "4tMajGnSy8XA7M92VC64NDkGhVvFmzN1ggrMGy4wnDvupBo7emCbbDShXzXgqn4fGu5XuV1k8K1AQSeHrxED4XxM",
  "key11": "2z6ZzL3PSN19SUYSW4PiwhJUy8q71bTv7XMLVnwDPDqmuN7wE4FiK8UFYeyLU3eHf4bEu3o6MMZu9AVsyQdvFnr7",
  "key12": "5esAqtNm9JimnAtjzJF9RUJTuZ2HC9uBXk4hP7NQwywbRKQPXaZ2qoFgeuke8p6DHo16B5L7MENW3t8KZuny5V5y",
  "key13": "cazii2TFY51S68Unphs6XaFzcJRXDBhBMVXZ7CkZ9cHLkPjyLepgFXrzyrrCUtmyvUS4P2DFYxQE6yNUztcejbu",
  "key14": "2Jo6B4FZmmusmZA8WJe4emvXey3porMKpNnUrksCJXgMUpQLyJBdhmy5rNV5roBZhf5yWfzLGSRxcdAxbrf2LZ1C",
  "key15": "2taDE3SCK9zvwhCrbUn7szvEYLp3TwGQiGqf64pSU7kNBZmq8TQ7PwR3ioa8ZyoSPEYeRxucT95vfv16npC3Svke",
  "key16": "4v65yuTLYhNp22epPFwC6AmLgvKUnJ4mD4EiktfjX6sLD41oHUNhQoRRzeXQVtp4LGqTMqShEA7JVHKp7aKTGqBb",
  "key17": "qjHcTHJPp2Nj2a4rJMY6Mc2tGDz54FKpPUcTvpUPyNd3Ev8cpxZXzceL3ykpJhkU5mfuWnXBpYAPVfJ5GDAa24G",
  "key18": "4BwqfJfUx8VA7DQ2t35ih9uF2YPtwaooXUcntoB3md2cJjgaubqSCextA26tt1PymzyfbQUBsDEH5hXJEqZYiqCh",
  "key19": "3d8p2VqtVW8hd7gvRfb3bTxu2kqHWBesj9Y6Cv5d431qGq6cZg2gGSEN9c8QjkTqmc1CGww64nLjuzDZRMche9jM",
  "key20": "5Ac3XjtJ9qZZcLSvsNVfR633AnVxXBJJ8E84eHPzyyxNSCpXKNfEa6Wo6FVNgzLKBhELnJgLLCXjoC2yg487Pidx",
  "key21": "3ocZX8nnVZUkwghBVoC33PA2vL6WQVEKFC3QpuBQWtynwP3Vh1oYSZQBfrkKtiGKjFLxBMtoFL3iLjFtcwGPc7Cn",
  "key22": "4E4fRywfdNNa8GndUYsARfXNEcf5dXQWH7iZtJBqGCkUYvDiYKiGSBCSjP1vhpCsW1Bxmc4VcgV3hRJBTNtGbiNQ",
  "key23": "3kGGYR49DLu1PhfSZZXHyY38EDXwymePz7yjfZw9qKqRi9pGkNtcJjvFKL3RiiJrfm5mgWXs4ZMjNtbT3vmt7H6Z",
  "key24": "MARBsaEGKCArhAisfadBGTrThoURgBneyQDkzNrSwqE9Gtw5Vvupzq95h8S8DrbdBzySMR6Kd671AhDoskS46Ue",
  "key25": "7uCDznuTWtqLeqm3xFWuK8fYp8tMhjnAHu4wjqj3cNHXTowucShfLP8uUdq9GrAxq8tAzQu8LvqfvEKkkcUaWhk",
  "key26": "58Z7MynRZ75dYswnMQPrVLJPXsn8f8H199eu3khXgW1xyh5ZDQi5vK8PYa4TqBpQwhuaCokS67Pty4ppH3ukthb5",
  "key27": "4fsJpuriG4sQkEZpraz9Ddm1DQ2pDwFWvFSUYEsiXNMeXLmypDCEtUuUiEdfc6UuCk1H2pBzn9zADD6f6XR8ktDi",
  "key28": "3YiKb9HaaMD1BUojGugiSQwGQ5opV7dYpAJS5Skhw9SxrnmV8zEZmdjEDPg3YXmzztXTSQdQ4r6QiJBpnFiEQZZw",
  "key29": "28nhjeWnnAyrAMmUaSj7hz8vBK1sXaei3nLMNh92mRa772zUGeAi3R46PxQjuXhS87JCd3ckGFE9vgwVRYpjE1CN",
  "key30": "5crTHACJtCvHjauvKv7YSS6Lvk2AfCBFVPK2Y8QMD81rYYnNcRWvaE7wTw6PcptvJRjPQW9Q61V2g9LcFwbxDD15"
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
