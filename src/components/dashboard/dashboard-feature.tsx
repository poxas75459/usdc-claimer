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
    "5otKMYNQgfrwTwCqiSN5opt71ErCgFM5nPpFMj6dY8VkoBViB8GRpQck3vTAggHkAUZLAS9oR5FrfYXvRyDgoNdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kosjrsnnc3iEBreUQPQ8gnBJhfb8bv5kmANaifpTQQsFGG1PTZvDc6ANALnFpYd4vwzqUwPmbn5yLpfVSsNimxi",
  "key1": "5Cw6LASw6ykvg3Pq4UcCvE37kAJvDFiSwRD7Qjb4MNj3McM83HbW3mW2V8yZgW2WKsqV6qJ2icZBQdxzdVeQxZDT",
  "key2": "5wEFMw9xQnjspy4pYvqxim6kqQjJAKo1xHjibA5XJu5XJqvF5NyTTpWzPj4UYFB4obGGk52665DpUuiBnxKchjD8",
  "key3": "5CYJe9CcP12kzAmY7t9nkHJfLmdcf4QAozYpvDqbfBCVGjyTXHAhVvVQJZBy4RK7kvXTeDj9voeBG4L23zGBzTdW",
  "key4": "4fuMSz9koUPcwyLGa9beujsKRZJFc17b6ahLtXuKKKRcyLXiCgJbfnPDJExGCoLx5LiNrUchGnb1jXhjw48177pp",
  "key5": "5asX22KF3yN8obeH8FM9STqLMZTfmiV282g9dx55iwD6CeBUugj2HmzUJUpEXwVNr5i2b3jUJ9b1KdSzjHCWxL4q",
  "key6": "5XDiGGJN5erzCBGiDk94tx9x5tqTGve1asGKzsbPwpfqx2ov8ot4TXXwKHD7ewgz8Bg9YarMMnZugVgZYumg9C9K",
  "key7": "51jSvGCcJ5UDdjVsbxy1h1yTqLQRAUW7gFqop8bSPZjocRkYmUgnGoLMwAGw316S7vMMdqpQzfr1Bc1rTAsG3HXp",
  "key8": "cfhyXDb8ho9aDFx48oxLG76V9eqdPquMQghawibPbXkiEwz11jAAp96BU8PMee4MSKDg6toc7zLu9TCMGEnUxiY",
  "key9": "3FseHhS5eKFPXqMNgLuckyQYDq3ABpeiSY7Qx19yJXenxku6yMdhvXyLAmzD4nyR8RBcW17UeqKCfGcfx6LCtGj7",
  "key10": "2n1Jod1AHjtYXZYqcaQPjBEEQxwm7TJdxQnmCGSo1qYUZUBUeh2aS3g9ePb7EeCm32hCGP3NiJM34j38HsGPK9Ba",
  "key11": "2iHDYsMDvxHHF6wKXmi3jxRGX6HorDZmm579t1DrZBpL4wPjik8Zem2fMjHkb4fQNEJhUyiNbsQefBwSey4w19w2",
  "key12": "2mmAs9FLSkRy38Pxuzm7sMRYcVXgdvhti2qH9ZrYrATZRZcLFr11wdWifTZ7qVyEQ3vqoSLmFCrEm19nakY3WSe9",
  "key13": "2i39mVNXeH2aQLUHUr9VvvpbEwvWPjBcmFCVpURnMB8MrF5iTWY13EMEppEwp7KDngNrsnE3qSUxNe4RtFL1SwrJ",
  "key14": "5bBeA8bCVY1yrGCuc4bHWRi2UcVYQyERWf6Pr3MpRD1CLT7fDE1ra6SbnzhZx7wuEiNgfq3QMNBuQ4UwvMQG6A4e",
  "key15": "XtFAR7a1Rpp3QcRTMbmVQRufVrY8w43JHwFnpY3ceuYVB3vBRPnVagXLpgEg2EuEiRARw5rbjJKxQak3rxM1k9P",
  "key16": "34pADSLsoVdz5jxKgbxkjdNeDV6hUdzbJQ14cVoi8TsThNPjK9qeatesGUmxKP1yc9StYZzkXcDVqD5zqcc8jvDo",
  "key17": "oJtC8ZqiYqTUx6XGKSdsenQeDfE36YrNNWNTUtD1py6HsANKsbjVYMV36cubKAYByhpKtJcqpEKua3GrGsoizLr",
  "key18": "n89QjfDwCxVKvA6pC9fLTghp8KQEMdMnruzd7SHwmuGH5dttMv7VV5hj73VM47xiCNNzktKbuUZ2r5FNDDBHXW7",
  "key19": "xR97RT635iyxEuWEXMmAHPmGk5jGqz65vcT6bHDa4cnzu8J4cdaGs4WEiVYHhXxS7CwjJw2fiyW29Krhc3L8C1S",
  "key20": "u3qwiNYMg8y1wiVkcaRzMfHyGtBtX1vZvVmCnLdkcEZ6ERWmtiSMGhZZA4G5p6fegeQwmt498Cs5RchGqdH62Vb",
  "key21": "2SzHTNR3jkJGnDtmN7vTf2ecQjKiWe4bghYqkZnJPkKDgGuK5YYm9Wvi9cUfX6t7VRYb4rpNaD2kpXqyUqHjQLbQ",
  "key22": "wvEd9eEa3voTdvabPcqJRsoLCwNidjvPFwZLds5yNdrFB8ZU3MKMQpnrTCayjetxUXapPgCvb1bQ75LptgckZEy",
  "key23": "2jhCx77Pcpa9cxBVaprDF3e8uUkoCgWFqME6j6c7v2nx9eDF5XJJfyZCkk54dR3BndJtejK7EYq9M2px8x684mVC",
  "key24": "2EVCQdPCv14k3EaM3b27zZGuMSG2UCX861VB3mK9bBazn4gxf9QcvtdZ1Ep7vB7rC5Sex8xKXVX2dMhNztobRoJP",
  "key25": "4ngZd9uYFaVwxQJWHfWqUKFnEozwbof8F1X3cEjg9U4tiEPrJNrAeW855NQzm8WBUptehfZd7SeiTBVytHZxfB1f",
  "key26": "5tXuhAn41vQHg5noFW2PqnogZoYPwExTfhcQUD7Vm4tabBaeYXEg3dLjdBni2yRoBV7DipdyLSiLgxzyQesAQfnu",
  "key27": "5mS8fi4dfPTe3PYgjDakhkiD9cRxWPzSBCjoycVZuQ2y6rEhsa5KhYzuzAuj9E668okHQWj59o7HzW3Joi9FCm2D",
  "key28": "vev5jN2mKq3cqDZkiJjmrZo4VNRBquXuvfhAY9f7UcQF9YFzd6ZGDUnaZT7VseEz2dUVCbYEaYv1vMXNKYEsiF8",
  "key29": "2caJaMCwg24HUWki3vALBN1jfNknGu7nEGy9A1psv1C8QzprADACyxYRe5r5CxfpdwsTkCoxwgjzWz2qH9ctVNyh",
  "key30": "4MamJghXw1Kyey4BwXLD6CSoVi3xg96KgL3sDoHisATxd6ZKXFCjYqeJGfzPnMyC8usm148BSF6NASCs9EFReekf",
  "key31": "4WKYxgDJGFed1gZujq3GHxJv4Y3k57QVwMSHo98ESMoP9SSHsBrjfU3NmnNmTBxCBU5Wpb7anaiin3wTnrJqPeK3",
  "key32": "3uwwynktCFoLRQfom7UFrHpSgzRMjZtFi8HDo8kGf3kzx8hexKJBtHzUKCmwFwyKNBcHRJi6WGSKasHj3ESHKBQJ",
  "key33": "4T49KD89EDwMqHYfiWKeujEbkVbFfBdjGSQ3EwCmxiKoqbacYXvz4d22W6CJJ2zzUBTYoZUFviTB2maEmgD1vQfE",
  "key34": "5UXVauetkX13GSMakDXaKuHeoDHkirpLf7A9E3Y1BiyJZkNXmMtZqSwFJ4wCuNTKYxm64z92ymG7LCzcJyvEBXMU",
  "key35": "25kmXuYtPo5syz6MswvoA2E5ocQg6STusU856ihwX55dVKcixdSrmhWaeurXdVHU8sqC52quChLWAxoWPkbMZq2g"
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
