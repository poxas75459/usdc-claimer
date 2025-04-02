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
    "5Aqg8rn7rtegBkfvpwbCFtqMqj8UiK2dJfXBjrkVFskpqhuU8GkmiqQiQViHh8GDJ9xNLfNNTA7AEdTQnmysp22B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMDV8cCxh5xkone6iigMKvepBG81o5HWLp2vokhgMDBoi3a9uEhvcRyMWHMuN62zGC3ACtStC8S5bkWWLWcFqLo",
  "key1": "SjqJjA5FMyw5Q3bPJXNDT6McZCGFr1iKWxcML2eeo1i7FmYg8xAwqBUjXYSPc1rJUkcuZePPVz3wEGvVJwfK23X",
  "key2": "5cR9DLDsnr3m2MhF1CHsUQE22W6Xw2wzH2p4YWdM2bD4BKAN5GaXxnwQxKV6LNcz5HEoGZoFfsrxCDX2ohgu1FD6",
  "key3": "4huVqUNc5NK7RyCosauPqYsh2u49HVWZAiMV98JneVqn4oPcMeU9xZUk59TF29uH1TfJcyy9zuveZ6HKVveqRrMt",
  "key4": "wYPPAdoKaJMZyh5tm66N82LWXSxoMjBk9wP7HEG5zXoEosq74rgALRzRwQhpbbFWqrjewcVC7eHs7poz2VHShQT",
  "key5": "47GQZB6zkCuZ8eLybDKrs2uwqTu6N9Tsr2jd8GmeLNtpKbo3ASHo2ojz1F7AQBaYWjLYRGp9Uu1xLcHfqECzzZR7",
  "key6": "3S9MDRfyTFisH1GvyKjxMS4bXdbAs1X7gJaRXTKtXBuzDygpi6JVY1NjFMfvSDoomGAKy5DJ9zbi4NCKEZPwaXNa",
  "key7": "45uW7Qcpfg7Wgq1ZhnArkAp2nHKTTDtPBctEhBAHrmfWxPwpK4PJDtZYP768FQTewKSWi5dzEeS3ZRgnVEVxZSEq",
  "key8": "36dAHfiJM1MV6YgEw5ivG7A9Gxrg2seQsmjNkV2HZkssiUMwDjeJZu7t189aB45qnY9X1fPyELYwNbLQh1b38eLf",
  "key9": "4ihd3YxpSDe4pcGV7Tyvyv5mVD1XaQQBnCu3pDHhKfGyuSWCdQeWeCdXTFUsQADSLJdBPdZxpTmAMWmhDtsCQpRw",
  "key10": "2WBAvrZgomtW9r7Q4UM54DYYr1oM9dLfsKkco5Hb329koT22s19jBzQy7ngu7CXpBeR62P2vGxPGut1XrwWCeTS1",
  "key11": "2S762GciAf6YiD4vUq4GbZ612RrDsmGwzs6bXGtPzsYdtZKR685CNKNAmf1y8UovPUPpMj6jtRnE5jHwjULcJ2Wq",
  "key12": "31MChhKbVxheKg8VPMCSFKh6gN2ryJgHSkjYtDd2xbVE3KNYcMUW9hfbvK9C2gTj1zed3t2B3jS7DVWgZs5LYGaE",
  "key13": "hQ26zBNGFHgvxY14qFrrAzPpbbsF2hfY1TYiJKVqoPqHCjeBk7eBD93TBkzbUFoRnDUeGWfj7Qgy2dDbPQstGFQ",
  "key14": "2EHkoiiKDDQvDZ9UzGL55fzaCykGCZxFmAv5NiPfkrG1o55Lb5bjq6VrW9H76nUMQJfP9ygemTvQd3ZSJBbf7uSy",
  "key15": "5wuwoJtwrT5XkmwfjGK8n5NCFeZeW7dZ8soEvEUNQNjCS7K2y38mWB6xLXyL8pTw92SRKKmJy4KFSFQiKrdgpM8j",
  "key16": "5o9QsyyzwFUKpHiy1jnQ6rzQ21BxkHn9T7sVfYMzUbrWGwL7by5dZRYAoMWSYQ3sc4A667viP8ssvhipoGNvPRqH",
  "key17": "JNX5Wx9r8wChaYXy5LgAN8reMHXXjphLiMbBfKv36jybJGpLNJQHycSkmkcLGb5no5zr38b6XNpM8QzqqMytCQ6",
  "key18": "526AYET2RU5UipiLeo5Seq7xLBvJJg66zSePtUZKnjYYC4yz3kLfq9X55RTejaCRoXJ5G3P9tDwxeqgX3MLjmmmG",
  "key19": "59i2HXGLks3FJWe1R3AEhuHqtfQuqKytEZ2CPGHxcvZ7b1NQxnnzTJKJ741XfNXuAYAU7N6Gg1JNrkhD5W2grdSe",
  "key20": "5qV6aUwVikkEpDaPcdQqCtLrUYSVZAVgQczZ2612U4gEfvDFjSMqM11vzSYzk4E9TbLVdvEZib2kg56imNN5LHig",
  "key21": "61KtEQX8Lb5jjFfY8rF1RQeP1PeKJqsFDce2KT9LZFBT1pPi6kvE8zksEnCeEcxW3qFZP39agmwd5L9ZLWWvNvH4",
  "key22": "229Lm2tWJF1LL7Wuh4SwqmzLAkR4TmD5jLVB6mB5HiR9b6TS4DMAHEzsHHQq7XyjwTV6gQt1Y8hhCm1FkYXjuob1",
  "key23": "3dCdQYWrNPRCGbC9LUBZPxDJaxmJQFkRufbtzRHmU3Ea4Efxg94x3CzFhuPLkRePN1LfctjoohKhJoQmJ31wKMwq",
  "key24": "3FZV9Rs5em99xJiueMr3jcmfZrRNd49FfAEVr31bXhDTXhFaS1yXfiWwfE6pJHjp6zar94FghhMt7dXwpuVLCnvD",
  "key25": "2nHR12qxuaX41K2ZhApdXw6TC3AQ8X5KdBkZXokY9xx8VWMNYxRZV7qw4RaX7MpAKG6GTWBbWymMqVuXS657vDLi"
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
