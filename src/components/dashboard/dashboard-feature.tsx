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
    "3miDkDLA2yEi4fbmA32bWC9vS1n5XNkWqrGLCefPQpWu4NobVqHzUsJQbDVeWv7eFPwYK4QwSQfpXpGatrJYGQh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ynM3pXUgTK1vsE5imbbocVLNJek3b3FjibZv4CLVU39eozjKMfg9p4aQj5JVTTq65TvmHkrf1fgyPTvDPMEi9K",
  "key1": "5bDFARaq3TKPj1rMgmCxZhCBuyXmhvK4aUrE2Q49xA6rFBmNS5BHRRMt5dnA6pJyPnQnSmnxomssA1budAsWLJ3e",
  "key2": "4FZZFjTYCR5EiXPRUmAQn3EZK6R7SjjgDxL4ZmaWHAzCpvjXE7pWK8EBHtiBEqby3bJst9KFjCpdXTtsr5tzLibN",
  "key3": "je8TANBGBN8UycQegNqfYR8EikBEwBsq9zqcL4pMHip4E4rvSR18ooveonRbCn2FMER9dwgicHqi3tENiiMQZhS",
  "key4": "3AgWXSjC3stgnW4aqCrdWMpzuUcc6gjrAEJ1u3Hchv9kgky4tYgikuhhBZyTNx84FbPWirEUe4X7CrcVoWrQegaP",
  "key5": "4mYQ5Yx3XKGphzr8U2gMk9w7KhmuhgJjqrEqbyUGyHmbj9CD1HTqmjmrXuV9t2Ljrhg2WjTsgPfwUwQy2gE7oB7K",
  "key6": "2xprDAxVCqezP7BDwYLZcWMb9f5QYjB91Xm2p2nSA7GkNUdCMCsFsXBH5xMFrrEuoYnLnhnRafJQ5qXTCWMGhNSm",
  "key7": "2dzBPHw3qB8qfuM67KZqBDyRsuxovLbhfLTxTXvhCRpKfF51kCkxTTrRd8hL5nRsEo2TVwtGVMKsqpirgwdR3JS8",
  "key8": "2pFEDrJn9GsqH4egeQVPBNdjBizVRkiBhPaAYoGCnrhxCNMyKnz1yAUsZFMFcQGx3tVXS7uW64aKemCKdvvmMu3d",
  "key9": "2pw1vVVkmhsZ4aAq6CFQVmzRGo5X5Ra8eqRXfewekWfNQ1e5wrhvsFFs4tWannHkFz37hQA5xzCyvZcegpDqT4QN",
  "key10": "3GNczsZT14BNLj5A24y5c9tzsVDrPsUu2LXsb9jgGSYoj3VYv3TGaTkF1XPi7KqG4seN9BPy1agGxnZgp1V8vHJG",
  "key11": "34f7zXF4mas8rYXC4XBwiU5v7dWQMvWoB3ZmHyjEzoqyJ4cGx5c3pRioBRJP7YUtBcfMbQHTFAmpJdrcv2nWrL1D",
  "key12": "33ETXiMFpKya6cgh8xnojje6hn5t8NiDjydjeGBRYGKnyGLZ1KafBDuKJnqYyu9XxgRFQibhQT8DwNYoa5uqB2fW",
  "key13": "x17TTzuwsgw2NffafWX6Q8KdyrZNPUqY7VRf7ixQi4QkKNqj3KFH4RB2VyCU7zTFFusVwRyGjAkhvRjZ3un8kgc",
  "key14": "4r7cSuKiD737rFxj6Xz32jWY4tpHpaaa6wLyUqa5Mhd8LA65TzETbdWkWagkP2oUoNvPnMJLbrU7dkF6bqP7QrMq",
  "key15": "4FP33NMucdkNJya4rczxC8w6k99sSuMnaeS7msXUQQo19aDVP5eGQDfWBGASQEwqk1eQ2JfSJdv6tveu3shf68cw",
  "key16": "63dPWowGzRLgbtbAx8EtxJ8dax2GVWUAaK4wamjdctJCnLCKHizbgESriP2PZGhCaZphBwzgm5GryEVun2NHYcT8",
  "key17": "3AtKHb4ScTq29Qm9KGaFAcuZa8Dks4s7KuKwJNftqdC4EqpJhZHgFCaWNsGR7HGrCNNH48j1TqJcxnXZ5kvuEjLC",
  "key18": "5rZxp5DZPHfSXpexjnw8aK4dYMb8Zp7nKWM3ZgotBPftnv7sRmG7h6rLyatBQYC84Ks3uKXRspDqXMSEFko1LYzc",
  "key19": "5U3iN2xDkc2BdihSv14QTn6d9ZdpWhE9qLJRjam2q2wu3AoGX4faHyoABzWj9HA2cewXf5MStVoRR9tPby2NPyy3",
  "key20": "3hqa5FQMWrbo74AYkfVpkS7S4ESRYtjduHUDRc9Dd2AAGdVa9Xv4xzQDkgGymx4AtDM1zjanPK239AQywk93iv78",
  "key21": "46n7CzHvkL5mNfssUbWPYbLhKtf5sEcC2BiKTNKRYZpee71hhHRYJSiRUipUzX2f9sYSp7t8jjPqizKGyoUANjE3",
  "key22": "3G6whoRG1TAZh5cKdD63TBahKW2LETZRdBCMQB3Uh5JEddwBboWWNELzCT3nPBMhj7qvxTfceB4jtqTCAUPbSfsy",
  "key23": "5ZKaxoVpXvgCeoR6Nkm2oHEpLyuVdY6HBX4i4MuhDk5mutfA9VhspsZSLPdBgCJtKCHNqmgbwRAy1xHvMerpX52G",
  "key24": "4pgrxMPKoFz2NHh3KK7rzN5mRmiR8uWFEFSVR8gEdPFj4cCF1FWB6e249RnA9ELZZvTW6XC67w8EMN3uJLiuoiRb",
  "key25": "3CJuNWii3WWUWhJcmMJ1zuG6MNBwsvXZvxd9WJPpHqYsQWy28ECyiwLfLVmcuixYqkAMQA4y3YwYm2Vz8Nyvpupt",
  "key26": "3JzM6Rn4WMvopJuHQVYwWbw4hTbE7dHbE9hhymFdw4qz7QJ8GxF3w1S8Uicjubq5BxYB37szkosNigQUoSr2WDGe",
  "key27": "45RRLJNYuAZqySYRqy3aDy582sxoGvLzAvAqgEUz1j4Sea6fnhckQ1o2Y2tjfjEbrtoCWXsFDaVG29fimEGf4Sjk",
  "key28": "2RKPxAmhgjVh8vagLWb5Wj9RiyKAN5SrRqD7xF4MeADsqW2zcbbE2USBmWdpdznvjLuTWWDsaxRJUDUAof4RQ6Jy"
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
