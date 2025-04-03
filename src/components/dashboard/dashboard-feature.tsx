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
    "2GN1dTRKhL7qRpkFmsXac7rbJjY5avxWazmsqPs3PmCo8fCBsupwG2APvSehBujJuKfLoP7jMJWEd8SfNYonMxfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3148XGQU2PUzYMFWpts3CMTQPriZJ1Liev5WVq6RE6ME6CMq8qX7JffMU5rtrxgMFfLKsY6YWyQveHSvpsJyXhcQ",
  "key1": "355Rq2wUF4m4SXZkpumEP8aCXJE6v1uCmVmj8fZboKSq7bvdfwY6nbrqeCgoCYN3hwWmgwCfZmyRsBHzTCyYQpkt",
  "key2": "5QuFT6bDXPr3v4KiJMjkDaP1ShWkTAEk2qbKqY7osJBE89G3VAnkyotDhdXYQt8qdMfC4MXoioVPizfTsatuKAiN",
  "key3": "5BnuyKoC2YaLbTC1VnSGncQWWm9usVpxYv3HVVh6ZoBPqGBJrNR1tpjcaxQ7MGjZRxMi52HejNtyYdCQn6fDMG6n",
  "key4": "4nPyB7CJTLu6E6UKqYjZa6SnnCZPmpvAuiVPrBbWsFegekbgK9TSCJjPH29ToD5NjRFg1pfDLtEq4QcCkXEGVLpY",
  "key5": "2SYzLyzpYZAsjGaHiEgP7TpQeDs9UUA9X7rH4QrZ8AZ81vrJTUpECbj6RcYah8oZUmmCMZGCNzo8fvvthZ8U2tZ7",
  "key6": "d5UVvRHd8CJUkpCKY3gk8qGsEsw4A1mYF5MxfDWT1Lz6FNyHNGLVjzYB3cucGMFdMNDxraMvL6bDyzy1iD1EQgS",
  "key7": "61ELtdXoNUbSypuHSv9g5nBjVJKJrWNzrvnBrzX24bAf4o5HtkeRFvQtBGezNejg551w9a6oSiNqp9nwmzXuzH3g",
  "key8": "5LiX5EnT2VXRTd6crQNPVvheZ1Cph2mvtM7kojPU8Mo3CsE6eKU3Y36euUEXbxBsq54ChuGv8oaFTwwsReiJEg6m",
  "key9": "3wnKbnn3vPKfVqJ9TQEyxwn46JLLM2TPoi8WrBXq1FpxKeh31FKz47NEZnuk2k7htqayBbdcP9AL59Mso1BnNdNu",
  "key10": "3aN9oux8G5Ryn4MxgU59R4xbXXeu2iPCp8aHadr3maQu6ZBSTQ3g5jGt8pYdsrcDDzufPNTwe34y3T7LTWAW6HX9",
  "key11": "Vm9M7UBBXgi5tWExmKHhHKXzRXcAx41WBi6wvn9Ri76ki5mUD8CVG1U18phQHeCTRcBxHZ1VfzZnRaASoD19R6y",
  "key12": "5TpnH1SeZPeuYEGmf3W3hGCWCUSAw6JCfHG7tbMmoNwhNsraFJBZSqiL29nGY1mpJv3zBV2MoXV1iQ9JpuY5rUCX",
  "key13": "32b5t2h4FofVscbPcutkMtX3G2iZJMoPHpN8iXL2KzTYrQsVwqfbocw4JoszSUReQfwKm1snUGjcLwTcJcFgZvX9",
  "key14": "45fcuvSzD6nNMhbrgYk8XmWDrYZoyNUM72v5mTApqTSrGeFiUVUyfSooNPhQSiduihFDWg6Q6WKpxnQvdX2XwEx2",
  "key15": "4Zt56Ey1dmtQrFZ9pbebYZ7apPmWDEMpp6Cm7skVjfiW7hhLYi6jgiurmXxFsDif57V2iEhktkcP51hCdmEBYe4d",
  "key16": "4DDcLr8SkU5ENJN6zgDvQoSeV7oVpHj1QQPGbrtv4x8GNDq1zYjaGKuVwgP1AWhgQwoN6b442PzKHGRchokpfWxw",
  "key17": "5WThVN1Qi7YyxAYwHqAgcqJ9nhurAN7ZQrKyxczV6i2q8yt1JDjacpWdfjDUX3q3nPC6DHMKSbJZETohZcAcw4tj",
  "key18": "4BMncrcoCXuoNTypsaUBTneYXzM4xGVAEtKmKGhgpJSWApGfHcb9Es9Kasog2DJfzYGxZVQ5AJsiHmnqw4EWTsc7",
  "key19": "2TXNemZeiLHjPLsm2Ec32FauHNx2sCjFGuYMmxVe3HZtcgduFXS27G5shMhPWizJftKPWAdc4JQ96WX2tPYcQGN2",
  "key20": "bFWjJ7j89PzXz2xDN6JaXLfkmKosZwwTgn6pBnda4Wu2nkEN9degJBaBqt4s1qoqMHiMQXNLtNZ8zxVohjVKTJK",
  "key21": "iMJKffP6mHVLaDPvuNg9sUPZqFASW262QBeA5hoGaD66W6XGAMbtCshfa4tEHcUjdxbu9vMK15CMtae2Z5z9SNp",
  "key22": "5FuZFSQMNASXnJW4QVKuT2khsupY382bNwU8fvEpQ5Sdb56gMs1ZQr3JgF9L6VrMw5uAy9TTx6iizdSYWX5dqTVD",
  "key23": "jFVCi2HChfscTyjkBEFCYX3SpRfgQ98sJ7qzDoWdNeRbVmcZQYbeMgpymaY6UXaw4fAfkdpTAmNHVFGGHsUe4qJ",
  "key24": "L4gbmSPwbLBT8EMoadMTYa5xH6HUYVWQYPJz2Hgwm1Vn7cyFUWCcCePj6esNDZgAZ9tPuBzHYuh1AvYXrN42fkf",
  "key25": "5zoNHh3BxAyYcPhPUT6gXyR2ZMPUNNFqjFTzMhoxaFMfqVFtSTYuZLf5Nw4p6Jww8iPkpwQ4axmi2j9mncTfvUQZ"
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
