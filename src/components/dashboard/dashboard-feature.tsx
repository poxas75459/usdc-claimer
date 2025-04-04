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
    "5bj9xgmYX3uxdFQceJjBTb3nMwagcYFBoXXDyJnb2GASMTWTt9E79VE6SUftVxGzSZoA3GrWw7CBTBjJunW6Cg4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjh5emPo2BYWsUMf4Co73sxuKrQoBdrc59TkT9c6zGspJEaLaruz8Q7BRZs4ELmTAAKBq3q1gMpSATEojG1D8ZF",
  "key1": "2gR5bgbYRkpefAZ9VyxeF9daxY1GAV9j5tqT8s8kEbuoeYGPWNxy38dGRvJpWDsgqzLJNJEHPaPTuyPwhkVybiTj",
  "key2": "XJ5yyTCg2ZTK1T7525q1zXFvQguHbWTPSsruznE2cqNdrg5SN12sJKq2BdfWHPqKsimLtQJr67REbUEGHwYN9fK",
  "key3": "35JKGk15s6qW9T1zhZ7XFYxwf1S13ucijWTauC7ewsnf3F1cm3ydUR5wiaKwAsg8oaZurB6U95iMLAkzaLQseb8X",
  "key4": "2PZKJT7bSLWpJPZBACH1rWSxKgBjbM1K28qCSRo3sjwBkKgvbZGyYf7zsZEvBKdsLyx7cH1LvgM647cqmxHaXhxo",
  "key5": "5iy2UsrCpbgMRQVBoLFg9N3s6MujvawoarpZz2hNsEok7L2b4o1YAyfwNXbfB1eXbVnhdiJLVpfB9wrERgD46nxW",
  "key6": "61vpyc2fHvysq8gTePbPiPpEyoTBnjPbtPankjLNhTqyuFuV1YjDQFjVNscZfA4fwEC37WcyvuGEfvefWCXWKxrP",
  "key7": "3FEsdG1tnGGYDhDAnEewzEPZa33bgnGC3DqUNFQXrDKbkwtTcT7EcCitdU5S6KLnHz2NTBXQbMAxWTcUq8sK8ddM",
  "key8": "4F77ePYkeyK9q4YAdMBPTfhVXRCJMAXdGqWSp8xyQwrRCN68LSRjukKNEZN4ceyirQxhB59ntRzHe7r1R3EKioow",
  "key9": "5zMxQGLQYzBWsU5DDzT5bBbSwyZC8zxo7mCrjUScmMQd5aNzV9toGLqehuXpeR9kqAhHDKyZmMwM6JeVufFL2CaF",
  "key10": "3u55TUiDd6kd1WjNmbvGJJLFmwctAviy9yDFApfndsRsZoVpyZjpGXFZF1kWLpUf8QQhNfJrbrJgASXM4AwM2LNi",
  "key11": "EDigBqd3xK1q6YPZgZ95VANfgZqoFvnvYzTypmSp9PtvoY84XyWf14rqdqr5x5N195DPgKBRrdv3byYGPoy7pHf",
  "key12": "4C4tP47GgDnZKTCsiHwCMGSS7vJBebzNjQb3kBAqDTVrwmez6aVQSedn3AUwAv5i85dJ48UYhTW9WFB8aH9tCxmP",
  "key13": "DXAUbomFEbBoBrz11Ssrue5YKHyyzByEjrbXTmEpk5mSgBnL92brXwHqrDH2JrnZ7ZdwQGSg9Bv1GGcqD8KGhwv",
  "key14": "3S7otumXtGbr3Tq5GLybmzKbW6YCu9GBdXF5XgRNvoZi8jemfHn4VtEGhkxyr3KBsQjtgcYJesD5x2WxcQJ624eA",
  "key15": "2Jp7iaqcvoD7CBjexDypjDjjKeQEQaXJRNgakVbHgPRARdQYuhs2qAYeYUf6ANaDNNe5aC5wFdZq9yiCYWzyG7EY",
  "key16": "4ZyZp2q4FWhtEtMkZXzFYWLTuCWJwPvbivWGmqCH87AnDfid8X1CC5FdRE2TF5CW7axxix37uJcM2DDf1RWoALhQ",
  "key17": "TVfXfLjxZLCq3QN5UuNh8wNX6heZwnuS8yzK6J3cEdFVDTDuP4wx8fzYPbxRczJfHK3wjWcQDSDRmqMocA4XeRr",
  "key18": "2NaLNsxiWMvkbvbDrTXL6tVjLjSQRQoygc9vm2aPdPB56ffWqu3dURP9Qn2Gu5VYXj3ADMDkKw6N2HugukxWLLkB",
  "key19": "kX5yMHgXmFQew4T34RKHFXTpFLKYUQiB3ZtC7zV36Dr4sxg2TmNo7QKfyxLciJgwns2m4WMVFmq1YbT2G9GWgGT",
  "key20": "5Zw6khNffMdfwfhhusjXFHdZsnW9Se4sns8UtRhpbNaGUum5fbjLfN6YMSFhK1Ehhx7r9EnMpby9eRJGNLeBDo5J",
  "key21": "4CckNFvs5ws38ZBS3UBS2MfwQhtLpw5hxKXqztn6YhsbzeYmg2MA1Yf2Y4yBuQdmRPW5cdbmNVK7Vz2EvQbZ1aVd",
  "key22": "3Maj6m3QpWs9orTwSFsGopbfuQxwCab6QJJhSqqjb8pJfxxagZTk92bCHqFtkg77mw3Rp8GdyoHT6vPFUKwnKNYN",
  "key23": "51fLr825x95XVP3G8b8P6v2VenDASn4N75qggBrgrqFeL5WoZixyCdi8BxDFxyUgTaXAhEvDQtvnKshghaK1yzyC",
  "key24": "3tUxHENd49qpWcHw8mggGnJTgex3npnNvWiTrBjiri3u2urbe6YtKKuHoEbxhtYZoWZu6C5cnYrHGbnD3LY5XoFQ",
  "key25": "45LWKgnvvWSY9t8fyidePJ9VEFjDy4awDDAuqgU9Bn5XvpWjXycdC3B3C93U6erMqCvmZR9993Etq8Ax6gmHmqQj",
  "key26": "4u8vrE7bjKF1h4He6aWB7XsCcTMJrLRGEsNuG6fZEuMQSaNc1mraf1rM58uzgX8ipkt2MHZHrZJDZyiWS6EokLhk",
  "key27": "3GnBFWsJan65yWMTojjEzUu7Pw7Enb6uX9pkPuJFNvLvWH8hNdougTGkw3AWHMq6YxmzV5dYmJDywrH4njRhRgpT",
  "key28": "4brhy1Xi4jDSJMNG3LtDTCNqUHcoCiZJN62GAwgK7eN7dZPcF3CWTqXKYo1gP4jCAg98HZfLVFpZrNbby7GiCETp",
  "key29": "3ReKsKeBbSZfYBNgqjXUB8covan6tb3CZ9FhuKkxayMHiNvoxJhvRKW4BxPn4FKnGjWZRh8Kv9DPXLmpj5xAGf7f",
  "key30": "3KDmaZ4vxrvoz6aEqi71cdo4hGpMVeX46WNeoX1JLAFbjmzPxrdpqfy6XkXSU5YqLb1KrGrbnXRF4GVCHdzmJkHN",
  "key31": "kGNprgQsapzfFpx9ZxhD9d1DMAbCpjDXZeq83u6jgnBmcnNYsNau2cNaNwoTy96JLwb4SVijwXCBq7cuqASUYeF",
  "key32": "3T6HWb3DqQzgjpAAA9tQYHSwhwgT4JHF7KtwvY62qB3fpvqL6bZm6NuTSf2Ay6AodwBEhTEWEFnUTRoszzyLX51Y",
  "key33": "2fWFwS55t4uXgvEVbPsH6WKZ5tUSiFtH3wMizaVPVs4dLsYbhnkBMxghUiCn9dSQrw4BrCvLyn3vC4yvzJkWUPdZ",
  "key34": "64UiWgfzpcpFqkbWueX7HVxRgRPz4REZvsqHVCeFWEaHNo6kGqKp3xd2bJvxYGxfob82hAib6G638D6Go44nNTwG"
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
