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
    "TmbpbJypXpfGwz3D23MtdK1RGQSVxpu1MWnxXkrHRNrA6p8TBJuj8UAxixS3iokSh1roqnyVsNa6c99BKJz3BWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ptFAav5NyrWTcCfvvm5L7rkBawTJtStpgGcKUuRwXwFW3TWX2qSwg3cTprHurnN1Nmo6WzTwkaaZJxmEAKe6at",
  "key1": "VLN3VYycheu1B3WzLQp5dwaX7ydRKbcfBSp2CyfnkSTXUutMK7suxPTxwS5SYySrP5AV76oXzfVwygV1LkgVpCg",
  "key2": "5ArntNMFVqfViCTCnNYkCDLkhCv9BfXrt4Dp4rWRgFjaDRRa1EK8Ae1oRKj6t27jnZQAk3mHTLf35r6dQDtLZdzX",
  "key3": "4LWAXsSJRqhyEap658mGejrmjoxyYqpSW91tVCo9wxwNnAcmA7v6SejdUuc7gvQMHMFpP6YmaJdenrQA3fP2xPxH",
  "key4": "5JLeLVnhigpiNtSXyvQkDLEKpwpUpyYfdt1ccKXUDnhhVjnZCbfnA67MdRXJYjXUbuTG2RQRxhG5MMTds7NoU5GK",
  "key5": "4deBdCAVeWxB3ZUwKHjXLzWAAVpTEUGSLpG8VBmw31oPkwGc8HAHMKby97RrVbatgk9TETbmEqMJMv8T2wqThjU1",
  "key6": "3G5CKYfMfXLLu814PgcvGZQMGACp5v7aGSsLdkcNxpfnSXFQFCubaD5WuXwkbYQ4wbYqrsQEGZFxarZV7EEtjhxD",
  "key7": "5hV5C8xqhzrMngQiLQ3ysVpNBUyt8jDuvUACKDcoeJ5e7EpzAJYWRbHEbejVCMdw7XTEzUJPfMXZVq1pHaWvKhwB",
  "key8": "2H3osbtQXiX8DvFGXLZcyafu3PDZvYrZQp6qKHtwhL9VK43gLSmwYsXogwaQEWokHQ1URYNeDZvjsN6xrNe3Xvz4",
  "key9": "28Liu3aX942WQtWATan4KvPGEfyEKF6y6aVmBiHgkXrePV1oDvYkJp3bMrmCH6jk9gb2g6JZJ1KrtRtC315baXbS",
  "key10": "39zARGvsDBXKqNTguzksYtjKtYYheMuJQXPzosZ7KXyueWwJyykrk1mqyoFZtxNHEHni2VyYVibLBs3M2P5D7Thq",
  "key11": "54CHJTvKWNgE7LM8AnkBQTA6snLsExv4h2TqGRp7JWDAJ3NunL1WR89KYQtKntAWP7v8sHrP4XzJ8rMaMnSbYRwp",
  "key12": "34xQk3awZVPEr96HHoxSM2tcTUVDkK26QY3GpE6oFwMknKdyBsPkJkYbBXj89rrdm7X2qQjY8ZFHFiE31sKZo5Lb",
  "key13": "5rUtrBkSghBxyPxcdKfLjCu65KDf5WQrZkFdMHXVDkmcQdyg5txbUAYXXGZDubcjSshDkkCjyVvt31Jf91Q3R9aZ",
  "key14": "4ThpWvdTSfprRuotJuNV7f1eHnpbGTLbUYJ4eF5fAky3BGsmjeEhWhrj7nHZ2hT8SkkJ9RBKXdbV6n7pxFi968hG",
  "key15": "3nydv8Ads5pgHzgB8FfKX1o23JyYnpzwTBHCksJXUb3jPgdbg8dPX42xrh41i98KrYhVnRnxx73s1aC7ec4tDyEa",
  "key16": "2Wrgsph9txpZVsczgkzmA8vDFGA6vbxwSAghATKu4e5PgSqxPyf3qBtZ6dMo5UrnQj17Wy14CyV5rq7p5pEaUJQK",
  "key17": "3jnAiAWUmNVueybQniA8ekPUNSz1Q865YEFkNEBAyZxvPkHRowBVa8UFiruYH5NdaMNBgkaR5Q6Uk63h1cEqAXxS",
  "key18": "5FkeAgi3Gbv4cxRaPm8Y68gtwZnKn6N4iKYTRmCdqsaiueopafSHtpnCa26ZUH1o56JZSwr3AkVjx6XzMsEz4Rir",
  "key19": "34FLDTBwYjFhiMQxz7ZMShqsm5sQZqNPvmabP2SZhPikkn4cVJQ7GnSj6nydVNXpJQdxxuwwPdfCLwCh9HBLQiwe",
  "key20": "3aXKAs1BRJr1Qem4FQNRqBzwYPC8MPiTiCwAPuyrnsX5SJcNFvbaDkHbzb4cg9a5PfATYNc3Vm2uQfU7hydnZ7r9",
  "key21": "3ECeBekuFhLhh3fpUGYgzdBGrw4bK3jznK1Wh5aCAJNkxyEruAbHjKBLnGFMtGUgLh1dzptTQNoHk4wC53CtvHHt",
  "key22": "2DFcCvbTSXrfPQLUJpDy6rzGJN6EtxXw1skAauennDw6tLAEyWBgHsWYpRrAoWKg9254ApPDdoUddGBEMAhv9HRp",
  "key23": "2jZzmMdPuuXw9u8swUD2ySwt9BftD1uGVimMwpsKUuatMC2cG6eEYSPWoDoYU8xDXPbVD7Nvw8BDys4xHLBth6w6",
  "key24": "3m2dKSSZgwynWimiw29z6C9FB5MELGk5Jua8abrsQTSSscaMxoezmnrLKpvYt4BfwHw3y7PbtGcBtBfsEp8LmMu3",
  "key25": "2izR3866JgYHCdpMJPDVDRFBJPyCh33D1p4uLog3v7GFAx6U28cj7sLSZd5cevhd2zKTXXnjv1wjHG3muTAmg7WJ",
  "key26": "39rLDfxccLftzQuXRYYuoN95DhKq3H2zVc6wNdmQAUYbbKp59VS8ouCVYCeLajkSAr4HWgSdH2AxXqmrW2UbMj3F",
  "key27": "2oRnTR8tbm3RwDFxTCqBCZXHBK9pAY1o4pPqvj8hiQnEX5x6mNU17KskxN6bWGTMp7H87y1JHVyBfv7uB6HhjDDC",
  "key28": "3adZhKnXc6G8MKfaV1CRjSTZZj35iVy1chiExKYXsD6zNuuYNNzMQkLTE56xe6KQFaMi4CggmUZQq8qJqQ71bZs",
  "key29": "55dFnbrGxktWoUBD4skz3NKfzm5EttZ3M2q2pNZALeiwNRFAjCcw71JpVYsM9GBoGYciWZMdVXVEQQQsJDuKSRCV",
  "key30": "Ev9VKpGGhnHFx5pNHfP2b5gZdrrgZp9FxaWFRr9EyQGJFXyhHaf1aTbbxTN4NmTeuz3qr6RV1KERp5y3fmZsr2Q",
  "key31": "35qhY1VqDkGTtE9oYqnU8ByvC9AVVAB2tvwD5sf7ak1cT93k7Wu6PFeL84ZZV71iULW3B6MKt5zUMt2VGTPswrXp",
  "key32": "2B2Rj2vRe2CKjz1zgzo8xk5k5iwTqvQ8xfcfNoN7cdppWk6qUtYf48cxDxpxKoF6AFaiRaW9PkY6XBn4Nky3MXkL",
  "key33": "3bSH159BbjmM1NWBH3Wksp24QE1C2YZF3Sgha3uFCnCSn4M3AjBvqN1gwxXRnRmDT9ArBzpEroq7Pf9xfRTR88bK",
  "key34": "67PonEd5scKZCkjfJAmytxZ9yCpjM2P6Sxhyrf9TBefiDsb85SnbivGqxDH7ZqfnfqJgLd86ZJAAWM9EGje6TYnF",
  "key35": "3tcHw8upgsdZ7JYN4qXjRHE7Ni1gWqLnwgT1cUGV6ey4qEiRS9EaYneoH3xEehTqsj6DgcQEPG6qMHemJuWipchP",
  "key36": "4JGjJ39FtU1Pc22FTZYjAxQJ2sJJ6dQBPjoLBbRQSoi1n5fDbWFYtTA81qMBfE2nSjxE3XY4U9v7JMXHjEaoBNbh",
  "key37": "3rXW6LK6F99MWaVtowGXzDMWM1S87UtKy4M8PEbJPVhijwiZdjDAeqQ1JKr81XXk48u1FV7W7W5L7YcprdjAXBkK",
  "key38": "5R8aTarsMRJCVgjea1tBT8qwDKnBgFEAqevMrbCK3xQRy2LRV5wuoHqnU8YNyMeUaqa9ZY18tqyeEbPPav2Bxafv"
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
