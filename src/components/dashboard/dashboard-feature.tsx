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
    "5zzpCAs8rPWou5HwUpVWqXPzv7ESxBDmkZ6FJqmkaF5zxQCuHvRxaX6ewpBZUjBcz1z8wfE1Lib7AEBq6aSHM6u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNJ2EmDfFvmM4Xyq2USvnPQ15yLkDd7guFFSuoMGomChebnhM8G2Sgwqj9V6v9kVqwkoUYipdYM39q5T2nQdrvM",
  "key1": "63y7qkUsbTHDW81xJoyaKPd3qHPsXyBKVyMFvqAQHvkDbfpoLX7vfnZ1g98uFcjsPEkjCaAKPGeWrrRugwPVLKf8",
  "key2": "j9v9aJKZhqUGZNQc6nUUGfSYDHeWrA39zYkrnF9bWL8F5ZCZtcCVQu4ufwvmRGrcd4mu44GMiFgLdWhpxzmPEeF",
  "key3": "52bg5FyyurkXBgesjnCo24dt75NcY6zyRbMqbwy5Y3GLPp5qEzoU1jA87FW1sZ9c9maiVqW49aaXtpUArWni1Uzt",
  "key4": "SHkNTZ8keS3CEc1PJdHinstUGVZqqdXC33rMQTv6eD46ThMev4rMDBcExzyo2ZkUsSCgj7hoUwVMUa7pKaM2Aof",
  "key5": "2XUwSkfCE63P8Dkehj5fRHHQDbdS5JZEkubgxUcdhJK1WkGWS7zBkkAiszue3JN1hReaPgX6CkBfbb6LwF89jz7x",
  "key6": "km495mG5feuoPJvsCB9Nw3z8jjXZoUJcEByYchkjtoYpKNnrP1Rf5apXMrLWBifrU1yNQdap3XKZrmLhYdyM7KU",
  "key7": "5cVwYFmWeypi6Tf64w8GRZkAeyMph7PWwaTXfyFnC16NpHywKVHwXzYvvnzMjB2HkxVXj3613xDg39sBZKRr9sKS",
  "key8": "5HKz4NXfXGMDF1hqRGEzNRY6n39L6oD69kMt5KJVDtdKfucjhaMuffFus3ohfL1oWcs2SuEHgMqX3xyBrKdksAAB",
  "key9": "4ETpU6hERg7Wb9pnJjKu9ENrKjgvenm9WpZB1g8xLawj4cAPcpAarKiJUMyYJyy1rDdP4S1UXsKAxhpscDsNAF71",
  "key10": "2PBur1ZDrJAQViF3a33Jb2DwFhcbqJjSMUQrHJFhcAY6KF12vufdxnoztDnhkZ2Yw8rLUbA5vLsG2KgfQBNiLQrY",
  "key11": "5bpoNoq3c4Vrj9Tnw4ARB3mmt5YRUJPxT98SCcpnhyXXTy7V4Sr6Qnd5ykkgLMwQfKtDaBkVEibZkmermRuAcP9P",
  "key12": "3auehPBPkMdoWCGEEkYT7eWXvHxoKddNhjrTpmpJ9SSWSGVhPQN3WcWQiu5RSrZAkGUBzJuTVb5dihRQx29pY6CL",
  "key13": "DiomyjTUmdfECPtqyfsh7nocqfo2Sz1MGuoj1GjmGx1XBgGnWqUiMBm15GEyLZMGRC8x5ZR3LhofrTtaQ4NoNfj",
  "key14": "3VB4cBhpjxi2EoCjEFXGDGA5vLGwjqQL4qknddGoeGDDuz98sCyJL7e9EZTPV1dY1jaXrWEoa5zc7NaaYUWnm6y6",
  "key15": "2XKgMCHFacdkKr6C8WdqYRZmuvoQJTywmwLP6mA5xL9rVeDkv7dkabguBK93zKAx9Tq3khPjyxM3N3w6R9wrD3Vg",
  "key16": "5oemW8HPCqJvLfjGE9nRkAy4bCgg5cToXEPW2W79DQDmrKyRt9g76vQ29XvmTxAaSGxF46WzUo1C2dnjHJwRSYeX",
  "key17": "2H1f1iCo9YkXKwjrK9rJCYevHBPb9SdbWkP2uD24MYAJSgqHWPyNz657tFH4nf2WXJVLBF6xjo4wLC3aFvEXLm6V",
  "key18": "3RPz68ZNeD5DKqQHTfUYnT1xCZpd9k7utdKqBpVV2qGKr1AQkzJAB5GBRsjg6G8B8g9Z6kSquKJDSr4NPaLwcrhL",
  "key19": "3uHifc8xe4qB48xqrymJnFuLwZM8Da3jMTN83nLDtM2LLer6ycxCnTc4qKTBw8bm4w5QHAPxUrdFGpPi9Npr2p9C",
  "key20": "5vbUsdson7NFdT2fHxxjo3qYPoAVEVDawB6fxXuQU3XSjFhSytjrQHBQBcbwoq5Aj5cgpiEXZnmG8ALECKhxUawr",
  "key21": "41anBoFVpHPVeFyBNPq7iswM8Hm19F1gpsXjgxjQVifbuowHHiGRQZ5Y7cT8oosvkpJ4xVzsEDfQHWtMiGMdTtff",
  "key22": "24VF6X9MMdSTwEGgDkY4kdoqh6vgUdjtWk8Ai5Le3Q8MKwEVX5BaHBFk2BamNxTm5wBUBe2uqHkGUe81BzBaXMmi",
  "key23": "PiZYokj1FS6ohgScbYbtbHWB3LKetry7rzafS6DmPKYc267z6DJ77TmRtm3zWv9UeTYH6eDYFBLdzWbcQ3VyuC9",
  "key24": "54qQWxTiifZUzFvHR56mDXEWeD32ax5YXNePsgWVAwnvXDa5TcYgcMwBDuAP6BG2B7jEFiFBzWs5aTH51xm9Q9iz",
  "key25": "3192RdrCmViaBb4bYXLQwi1PCuypBrh3KFE1KqZyiuzYzHAqvmMW6J7AFyd4dxQRHv6MBiRWSejUKncs5GoTAC31",
  "key26": "2rPrghFSbzDvcDnsBja6sRNRYVRz7J4wnCcDyXuMmguUJPqzf7nzUWK1wDfHrY5wQnb344eg7nN9ScVy2W5upW4k",
  "key27": "3p6d2LXwKZn9nEtiMxYfYLYf4MYMps7KsWmaygNY1kTUq6SMUmqkuXQ6NfrqDHiLPhKSjAyzToaFguQVZKgd69uo",
  "key28": "nT7E9rLKBUEX8yT4zHcpNRYgD71hnu7QRU8i2VTr5eN4XKFCPYetn1B8545e1NpyyVNjemE1McXWaKJxDtNDCDM",
  "key29": "52wNv3oVeaf7VuYE282SE8vR29YHhQjBFXdjp3WFhG7aNvV8sTS44WzHVGVGuU5GLzNfATpKBoLGNTguer478D9S",
  "key30": "66dgGqjXyodpX87WpTmKtCc7hyH9KYx8KBj8DjjJmL5jE6r38wcxtvPYRUi8AAEBSAv84todVyxqD5R6oSx9WD78",
  "key31": "4i7QH73zUq2CmhbSWNvoreK19mbZX4tHb2kCZ5A3NoxCHec24fjn9qxLcnbtY5GiBMMZnPo3CCsHv1puXzCCu4th",
  "key32": "67Fc5bb3UjSEnwNjGqEFMxQjti8fDLzJk6G7RkpK9FAwxfk95RSAe7HfAQRxZt1fJfPsJZHo4GvT3DPMJFy6jGCh"
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
