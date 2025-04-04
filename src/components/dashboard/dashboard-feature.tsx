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
    "27VKTw7w4k253dgSQvrsU7NLwiHQo6Uuc5r9myhWi6GWzC1fYyuiWpCaYkrDaaPkvFm9AWLJtaikEV6Zx73pdvLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MFhzy3SXgt8RaGxSEtx4BiWZzguJ3E1HWLKg8wgbGVE4frdRBp8tM6q5AN1pjosqxjRgyQzKfBvv5PSRc1nNPG",
  "key1": "5qacXCSnUbZgQdqLA8UXEuP2iKd4EWGPr2ngy5NW9VbNnQCJRJ75gcknKrsVMYetmCrihDcyjtCsCErF3d9FAY1n",
  "key2": "4ULFkhn9RKDATTpaRLkHoJAqmCCkfsk2armmvNkU8twzdnwDbjUnRd7r1mwNgf59VYQoVTCScG5YhZeXujDmBGw2",
  "key3": "Mqtjfeumhs2bxa38JD5xu2ufKQs51tnoLt6Zf5Mk9fnucmFFvPUcHxmqHckuzGd3YAjBq3kb1oijYhwAgZmzFAM",
  "key4": "Wwutr2fT6qZBeZXVMe1sxxBWbnsvbYnBc5DXosTzsSET2fJqaHHvf71kxxMeHDDnEqAaKdiHcPZVwhgkUdS31Fo",
  "key5": "YourzGwDGsRAT433MddxgugHBGgugGsCHBhPZDvAsM3BKk8aGQnXbyPiWLDYgwhFxLgmxKpf7gYvNS99gP4wevw",
  "key6": "MxokSHcVkZHjzjBYNgcuiL5fi55CQAyVRb3d4229TJPFLeusuX5v2w9jfZfdRVe8o15uBF3Wy6pwuY7pR1ibT1H",
  "key7": "5Q2gRzjruCtBEeMyeaZmn6H5pXN67nS8jjDW7XfrfHyFcL5cYBvJuVSeSazZuSS7ZTkxqqwzvT9U5GjaW1pPA2F3",
  "key8": "48KjejM4JjjfwSmjLZqZastYtZ7pQjmxe5J6LgyD9MeFK99EMjvGZJUf93YAoboM4ZWsnpHHdw2bubTkmajKJfCr",
  "key9": "3mzaKSSqVWEEx24x1mKS5EmzmyTYLXNfa267eNv2fmahvp7inEEGcp9mgGQN5kAwSfaCDBruXB4tBoGAH7imJGav",
  "key10": "5qXAVjGmXKN7xmpeZt985gTPTmR1WJdXdyy2jLVbS6tz2eAqFrVq3m7959PyGJN68u9aFYfyX1vVmAoZiHu5Jfwp",
  "key11": "3xH384EGbzX9FJyykjVtAZ3H2uksXGbUm6Neiz2TpR9wQnATAsKBgmTpVnvrGJZF1QVacq68Ham9FEGNVRTufjjW",
  "key12": "4tuL1ZLSYXRP8f2SvdbAUNUYob49FwQ4KSDVL3ASS9dztQpW5Cn3u3yWD3xSJDPSL24wQLKhsWaZVLmPXJYmTDNd",
  "key13": "u1orWx6phexEWU8feWkxeVBDk8Gcz614XpoU7G48eWhgBqtV419k5JcqZNiTkVETcRBCVd5hVWrivfQZpNQ7Uub",
  "key14": "5XTGyCBNQLvmk5W7yEwKatbUxsGXSTjT7aKDjLgUtHRd1A86NQNKs953kHRKMvxmtyS1wZ1fxj7QztKMTKqYcqr1",
  "key15": "3iCqW5B5BiHJ3oMzpPYXDiec57RQ1G6UZbqfE8TbEq3UDRKSA5TfxLdc9MhyuWS9zkidWAmX3c2dv7vEPsBpT9Wp",
  "key16": "2JSyvey6sxCKLzEzrRiVEVkTfRPEsfEB8jbKettuABnRiXGrKLbGqXBxWjJbvHx3qhpnqaQ2PMRm86sTuAkwoDKv",
  "key17": "4kAuw3hW7o56fiLUMupANuyaj7hqDfiaAW8Sdk6F6SMYofbUxzc9rNfPrvaYfmexm67t2e3dY5jMHgXhK27WAqbn",
  "key18": "4B2gwZtSnpJHQS8Z8nk41Ft1r27uCfMLAQX7ZCX6y9qSBdYB2AntKaPXUHLwHTpVmrU1Ns7bDKJMzzf2tGL7DH1C",
  "key19": "2ZbCpHjShtTPeQDDM6XgrmzpjbHbEDsAGEFtjVkmW2oyWudmqHksisw6cB1aDLVJZUYpeGKrMMuU3dAp7SmX4p9P",
  "key20": "4ydx7wXL4gcopaYW2bYSCQF7KqRUWmGdXSbjHBmzaFSy5cFbGxDUgrgVhMcQkezf6LB4kmeviaY979GEJdPWoP1w",
  "key21": "S95af6VCyKs4toYzbLMvgQRXrvsCtFgrx3RkwwdqSgdXeXzcah4TTFwVMkvTvjsUnrTXic8buLfYtZdk46XrUyR",
  "key22": "29VT8yaNRZCP7qdWAkCmpHdf5w8QM2yf1dQXw2Sk6n6daPqm3ro18NAxZH1wZ91ChTjk4FwRdDaNm96ASPG1uSmm",
  "key23": "E6bSKGfeXdbUvpyX4hwuzYHf48eXr9a6LpadhCTTryskLJGjA2UTxjRx7nfL6AUTzd7mQwYqZtceaA9fr5KaG8w",
  "key24": "M9tmVixrJEBQQuAiYvhS9XGtsvZFrq94vUoDshuyjgY37sSV3mwz5ezvfU84yrW7K8BjWtCf7gas6JDTDGC8H2n",
  "key25": "4cLUJdf72vxfo3KSm8wjB7NoL8JSqbro5nzcMAUtbtNpYF9TqUt8WBAk3kUSWV1RMu8gD7FbjYvjkHmf321fZGwh",
  "key26": "fQZmGwXb3CDctAmDDPjNyRz9661P3dWhnTunC6CWJKQPSCqtsDwJBeevRWuk1SZQvH11PZqw2gL5hBB4bpLEhft",
  "key27": "5uc24yprziByTH5Wi8UiScLFxxsUdAMap15byz5xC75bwt8y1QXytsK7wCVfaGSZHpHiudUjt9C22wFXJbVzVi3j"
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
