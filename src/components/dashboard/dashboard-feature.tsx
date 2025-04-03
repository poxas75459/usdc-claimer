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
    "W7qkmMoq18bQA2J4XswEQxubLrMeKwofPWhXkbxkhY448DEz1Wys8dHGUWKbbBCmJnNfy9tubdnp7xoWM128k7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1Be7f7TChtNLPBwRbB69S4zthZYMhGj6Xnuj157jexhi6XaJjWvfauBgHNm3mEQj36PhzAfS5hymEYyY8Q2KQZ",
  "key1": "3dwxV7eKMRWGajqHpxTvLGUy6zHzt8X24St6z81iKYJjZwHceS5eSg9dahDjjPWuA6ikLgeADKtsg5tsfZGyE8j9",
  "key2": "5VjVV9dEQn5dVxLVqWJFGTF84Q2uBnhRjAsjCz8ev6FJYXbphZmQ68z4AeBHh6JxCgdvCUBMwSq2dL6iYQu1A9eL",
  "key3": "4iXGoNm14TMiBHDbfBx9yTeLAiq6foTxYqiVVj75bFHutbDzFm24xMxwpjAPZ3xg8tRTYseu7KA8wLqzSRoqpxKZ",
  "key4": "671QUJ1yAE7Vi9wbNW6UCP2oe5M7W8CNug6qrcJg7azx4hLg9yBCyoJDZb8vVpF7wGEgBVhBDUxJMbf41hMf9jKT",
  "key5": "2M4P4Ngchdeh2y1P5yVqvQHfDoQ9LcpZWMhyAHGGkPtVB5KYnfi5yupgK4wndJ5uLwKeMBrS5M3LdH2p2MvuKN8Y",
  "key6": "hvTgoY3DXn7uXz3xsDEXCsQPfAE94LnKtGLBX7R86utBWzVh88c4Ahorbj63iD1vo7RgrKDFdq6uiTceVqrf5A3",
  "key7": "5L76kGkoqh6Hmrpvw7od4sgKeKPrqMnodeNfRJsEQuK8HcNVyWk1jYKMQhhpLcyFVeqiMZ8ZcWL76yvjmFMdZMjn",
  "key8": "2jwQjwrE7cqzzk3Wnq27dNCiydGVgccFj5CRkyDCEEueVrDQ6ErK4nZk7o2gD3MBgmzhoyvhgQVzV5WZuCZefxtf",
  "key9": "5G5TNkRi2va8PcZYdztcrCh13ZSoyRMtQqtHLAvWf2DGrZsBVBi4razpCBHicyBoG1XRCKk41HCGqSqiM8zjjwbz",
  "key10": "4rFP3dknsDXpsPhzEGjSEVnfYDhP1oRb5AtSBCn9cvcjAfPWzvXsKcLhvpmXgPFdh6nbgdn58MWBB9VHTuminoUo",
  "key11": "5X31i7jFDc1T6wfK9FcCAvC82SthzhZv9zw7YXEkr37EYHJuA5DqgvCqs15XrbzjvVFN7xQP6SkXLmfdP5afbKcB",
  "key12": "2iVGPKZpc9hdfVuso59bG2ec76gYY2SMsJLLaptFaGDzrauFZrzx2X8TpGJQxRdr12PbfH6aRHSf45wzy2UZuW3i",
  "key13": "hZcfVwNz8oz3r3kzfe3cNQL72g6GYAMuxuMDhgWySZ9F5zx8FXCuR7HM63t1jNhqTrcwUgx6cScv3VsEo7FLuMX",
  "key14": "3v4WpiT3xtnBj8QGh4DSyhAdkj2NxL3GdGYrSihNF55hsA1J4ZDGdCRJo9KNani4zgVWfcvUJiUEaQs8ua8Rdsk8",
  "key15": "4vXT5ZcV4v2WF6YTDQHaFuicur6Y1moFnbZEhvdVeCctYRwi1vr6G326xvusUzZjS4QF26u6WcD1NbfB7eYi1RXk",
  "key16": "4BNGU9wGLodUuqxPeG38bmdHQtFBaCbmhJ7Lpv7zyL62opw6X8Qipt5dpRfvYZLAZnm8iuYVfSha4tQTEnE3i2Z7",
  "key17": "4izQ2RQk4bnrSGrdPb6QECAYAg6ccg4YfFcDtpLU3Dxx3rqPHcYrZTY2XEKQ6RrJ58GXqtsApNqTDtnRN1h5K3RP",
  "key18": "62bg5dfEHPArGUmffXW9K3bCJ1PsTX5sckrK6Vj8HreAbY3rhCe7G1VMb1mEpMz4tRnTugGLd264h6N4EFEaM9Mi",
  "key19": "4zjEyvFwwdNfCb7Mho97L7V7sG2zLs3tJaBr4ZtD1mHqTcB12Xg11q2uh6FfNqpZtpQR1hfpp8jX7ZLQHgV3Pa1z",
  "key20": "3j3VZizmAYzVGDxZ1mHR5QLR4teEp6wxkLPVp9Yb9akBsBwhTsr6va54kD15PDUZCUSLFBvTgqyhk6D2K7aZpc39",
  "key21": "2MQos5zoaxLKychQxTFBnHm6yt714kZW9jA7JyqQQme3NV4REaFACuirGX9HZv7eY6AE5R1uLPu2mPwBhLC9RaPf",
  "key22": "fqMqs8drr8NTSvFt9sjjfREXxn9kvgi3Fq3rsNyiWcFhttDhudTLBavzPcV76d8GRyfjyR5HUMZuB223sGWL5gq",
  "key23": "zSwSR8qGoyG1okgkaEdG51bP5g85rSMNtcLWKwkWFsHXu4NDhs8bZ6Y2z7GjoJSf4tEnWssTJJj65dEEwttPurt",
  "key24": "4dxjSbcWKtudpw9P3fzU9rehi71y9mHPHQ5DfYh51jnWhGGUqeVXyXKyX2B4gtzfwbF81pW9j3KEJFcTtMX7Bwpb",
  "key25": "EdxwVVPpZKxbRy9sJyYX5UAgkZqAiUviXoDjbbJM52qmKE4EPnRL8jUosn84gGHFFdBJTbmtTcPnQyBKtEJWuAb",
  "key26": "3izLjxjm78SLoN3pU4CcGFdKu1s1obsE8Ck43TYhWtT9j8yyomNWts6M5RMYvXyTMjRAphFREHFjdwCtW2Do4K7e",
  "key27": "2BF33jdtymsLsE3cCWq55FU734a3BQAyegZqzUAqXoAaBLXh1FpUggpbZQuK5vF1H6qssAa3nGE7bS3XvDn23Eqz",
  "key28": "5FGsTF1FG1gRqA62oEA2bsvZWBFnGfYVd6sqkp4Kp5MVzghnrXUS2AvkY8qFJw6nRW1eoxFFF4bWSFX8KQYG1L5o",
  "key29": "XaPPbwM3ddKAswd5eGTw3UnDqcD9ZiknQxRenbTw4RDSmhp7Cm6zwJsfN5NmNhdzwX6zbkbpuX1eZMXYyb4ELP3",
  "key30": "26ikVSaV5nLHqpDMfiaa55nHm7EmkvFpyJvvAPD3YvRGCoajYaxQhRbfmDfXWYwAk2qGGxq3dRhH8CxTG23UZjom",
  "key31": "4ESTRwrgX5mpnWzs2j5RXF3efTStzQQdXjBGYvBd1zagLV8vFEsFM5j6TK4xkTJXNJhnS89utpeXPg2ohiRykc1",
  "key32": "5X57AbMkXHHGC3ijxdXkPL2XoYWWJmqBFK6Td6kZgEbUuek8AGuto3RjqEkK9bXCnuNQQRvtC2WTUoqDgcy3JDL9",
  "key33": "4uRKF2oKgJop9xeiKUrRH3817eGCLgZMeMuuncDxHphDRvGUE7TbhWtkCzipqUgWDv6ukLfqKqqeNwn6sMNeQt1s",
  "key34": "E7hN9y4Hy2XwMRhWhCNL6tzsxzy5QjLpajchbCzuZXUwschXBZvMWpD4zYTxWqGACY9fCZNLBKzTqjirHDeApWz"
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
