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
    "4sw4uSUq7EQfQNyoJSKJsk6RoTcQm8rmakNku1ceHsYha3AvHSaWLxUASyQmuZ4E13bQYVgH2iWKbtdKmvBcb3f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUfhiTkbVkW7gmm4h46UuEuW2TFcC9hBedEikL8WHFD84DgphjT78CV3CFUDzBu5TiRTQvdYaiNiEsbzmLaBbp7",
  "key1": "4SUYNFWZmivCNNbHagLfKLfzkMT5iMrb6DNtNYDe9fEqzJjYEHYkavEcrn9cFz3gP38WRk8vyQX4GLRUFoXfFNSu",
  "key2": "64sj1kouaSpdRKtJsRWTc2jKh6xDUei5wDJygqJuKfGv9SpqVXhAQgSHmDS3NzftDLSNfConzmiwMrLfsLB3wHmR",
  "key3": "MRtSnQrZBoHHyRtA5MNeHTyjD3rQ6Hx4DfY1vmPvPt1FoTEJgncpW7MTxBz38g3ZdPJsTEmtR9HjM27EGJQXvbZ",
  "key4": "484AD47DTaWbif8EJzhbunhMyqzKM5iM46yBMGsZsEDWKGa8hUtwCjLHkhiZDWSa6MHkQi3CKnrJcdR6X3rmst1L",
  "key5": "2nYczxyhKbX2vT9F8xnd92ftcmVUeu4hwiENwj4LNMoZZAWNyfmzZSfdZc3mADDENZnfPeRLp9xzqkr2f84otFHR",
  "key6": "3JPXyGAaG3vLkDAXBKapfojCEtXwD47p7ACAp8FcoSgniSXch29DgzwMdupeSYhJQsD7LMhuMLaMyCK66mWMzHbe",
  "key7": "4EZYja15o37ZuxudZqb4bz3GRPTsWiZxxrF1cmjLYCg7NWokjfywTAcon1QcMWwUnjacx7FJBzSXrWvqsDo4YBEJ",
  "key8": "5QTJZYM599drwkFABYeAyPxDytabZpFQxffaGRxHj8GJMsRRRUmcKr79KTXmutSGQdPUDXDz8spHDW6hh67gmMih",
  "key9": "4dH5pGWSLw5P1V2NgHLA35A9HukvZbt5685ekT4naKHfs8K9mvK8Hhpg2YH5EddRGkhA1hNqtbgYUL1wvGsuSsy9",
  "key10": "37x5XEyYsfk5PJUjY4sbvzrCXtdzqzf8jaornuQX42TaNCQy42A1HNw1yX6RHSLbhUUXKgwWvY9YVwMLBaiF9jwh",
  "key11": "5mojL17QFZqK77U67dhU87cqFDyyveogmCqRmSmifAdcAFB3zSefxxYhUtpiCWmt6GL5XF4bJrAnZ8DPTFRy2f95",
  "key12": "4kyuvy68b5J1XsLjEFEoi7Gg2Qdp12Vr28gnPPQDZ2NPxJiiQQS2Q7ppkRjUTjvg3BDLVqZsKsSoNXEBWSGA8Kaq",
  "key13": "47YfJjDnZKDq3KA9Vknx2QfXfnGq4hjmwr9tb9LegL5jtUTMEm5moPpogzBFf9bfawRAX2pYB1JLEdJVYJ1q3LYM",
  "key14": "z5F5DfU6ESrrYoKyDGSXMrq6VeAGfm4deNEoQFKfr6BpBBS5uPpHg4a6bKmQwUJwt4f1Mc9mmR92hBpfim9uGhC",
  "key15": "4WopHULnqQectuGahMuocLdQkXzifSQU16aQWTsQiuhRZNAnJy1VikRyLwtLQAkMShLj5aT8z6pdzhwvB5V6eRvR",
  "key16": "3ujmfuygimyFmETxhFTDsiKUTFBy3ospCffEEVnvg8kXHKEUTY1dr1cJRFKopnd3Ebqes5xDFCdJcC7jxs7bE3Ey",
  "key17": "3KpcK2jjgmArLtGxY93L85416wQcqwbjrUGxNXf3x1vFvzCJ9ZR9FyQpSt54C8yVMCYkTeczUeSTAMtfHAThdpWq",
  "key18": "2ptH23E9cmkXfkWQyDLNri6o1HcgiRjstxvVRSnyMeqNMXMw14yNFsn9hu1CR73C8FgnNZhbDt3JAFeWbu9MADLm",
  "key19": "2TWLpaXb4yEGHFRaVdHkQWqHhc6zcgrvBB2Rxh8cZ4aoPKaqjmAaHeA2xEbugNAW27CtbBoAC4JuCyi4ZUdTACmc",
  "key20": "36ugM7449BPDK9Qcm9BFH5YF6VqUmDkQFLH2ExcKUhDQ4aeyrdxHxGjk9W98Ad6n7DBNnPn6ZeXYudbdtfCQgaHM",
  "key21": "5ZHu4ukgee85zSQ7u6RLJuo7tUyPKeecvgG1w92zjPcbjfRwNBY9gG5BbFgKWFdVJ3ZYkhEzNf4s796iBKgzrPyP",
  "key22": "2qRohEkrqWKKX5NAZshzNYpU6M2YZZE9oGCA4wtLY4UDngNrHQNVLTryJXWjGvY3kRFEtxqhYwjse8BR6AXYBB1",
  "key23": "C7EWd5SFPcSXwky3r11JFzy3Ti56bTbuNzWGxX2HVziy4MnPGCu5DbBCA1hzpoU11FRSXWTFSF2Z69Q52SFZg2j",
  "key24": "uQ2GgM6aiQ6hGvpcYVHefdYPxAhQm33gTZBpankbouXA2NWWWM6WHb7u5JYUSTt491LS9jGTNDyRnNZXcpg5oLp",
  "key25": "2eNyJgDPauuk2QSHxvVai4rSUjRCEL2Xia3XFwWGxg8YLouAAfmVMG24eJy9by6r2ZgNnEbA63PW3A7XGnzCVTmt",
  "key26": "5qMmdkkXactZpHGccShvVXXAxpYiXMuP7wB6scycXDSJQ3ur4tng3obpVjX4mGXeGF2USexCJ9RDN8owVEu3j6ur",
  "key27": "vhWkPf9CFaAdfKaNE294e4PA47x8LTMkQUtKMhD9R1vELGNfxkMeqxsXvnVuM3XvnucW9oTKnipo1LBu6PM5yTc",
  "key28": "317yrwPzFjwoRbgvRTRicgP4FmREa6o4fLfqQ475wC1iF1yyGt5rgKCyc5CELc6cP9NLq3UEAfXc6bfhxtPnsNzE",
  "key29": "3k35iAiLvgc2zM44u6GeYwr4ggnpoNigGXj9PMY55RcaZE7ofJsUwsw9dMe4DvcbkuG53m3zhvZCCQzETcSha24x",
  "key30": "32BSfX8iYotC9fB1bGH2t3NgFcQ8sWRXodDYMbF6KTriD7wQTohBrwK2UT3mt2L9ydKu7iPvj3zaKuVCf6mw9zr3",
  "key31": "5FsnPQ1j5dKjJg1Zazpua6eSJuSgVfm5g6ptMchvrgN6qpPZ1hBB6x3Ymm5vf6h5NeWiK74X45vbsWq6e21YAinK",
  "key32": "5tFSzFoJ1GQV9qFdJowD3LUamFtHvqwWR51TQG1xgUjQPhxcG9d7LrrkjtKep3ifZmMjt4MZ1PpjiJqJFJMBEuwN"
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
