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
    "4DX4BzceJUKRgX2pLEEayJjrx6vgwPYH4ZQTFyHrTrVT33amVK3wro5mWknhEevZ7TQuN9q191nQvcfRsBAfjbss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnMSbbhgCHjGUeQgDKR6EyshFdMqcZL6PY4BNCG93TJkPLKai52yL87QDtD2PGJhz5StyrFGbTVyY5Zjhd71c9h",
  "key1": "3BXePytwRyHtF378CcEy7rMzRbq4dA5gEaoVprjcSXBJGCiHwWfs5XaMfe5Dtz26Ns9daRXH6BwrnUxnoFgaX3xG",
  "key2": "2kHew6EhqHZXHJV1abcpJJzTsjwgoZE2Avz9pTCTXZHnMhVB3Ebt4NtPbhgFoWqTPqtHYELJCQj7iM5zmTyajF8p",
  "key3": "2EgcLPrLRXfaiWGTtcFnSxxxywHxf7PksnJ1HW52mN4xkHfaeb95HcKEa81PDqbyM7j65Gur6BNMxWKZjLzsp6oe",
  "key4": "61jtGQq8agzwhLUtskRvwb9yEWWuCUjw24EBsTLXBAbRta1MXvuTFix3D36BB658bbJ9o921npzJzqFbark59Uus",
  "key5": "T1tV6rarF7sFcDepoP1C9LACJ8VFqSA9SgAMudJwijpv1oRf74z48oagb5UvmtVStXCAzxrEjKeQKEaDVo2rjtQ",
  "key6": "38L4bLHx87cfVeXy1KNDZfWHDBPpy57BLFaeSfLYbELqTutizdPtHw1Fj8R9ruC1yhXUjU1xHfEGmk4o1MC12szv",
  "key7": "NpB1EJ5ZAKqWoYS6tgCUWUKTJfEtDRGaWXFHuVDizahajmGcp97V1GyyDu3xLKizTy8h3qU1HrjviKuXsjFB8dS",
  "key8": "3bhKmWpoDRANEfRtSxvRGqPwSNW98JGxTU6h5ZkbKYft5PcQHe6cHRXqEUXQA3ECNH9YvTztQN4dvDbvQ5twxVpJ",
  "key9": "aNUiveyCfqZtopnQ7VuaVgvgefKBJVaaVJU6BPCWkJ9ZhNJLvQT82SkBqsSy2K6YxX9UUqFQYTh1jw1M9rShNYM",
  "key10": "2NsLSk6W86DyUFX8cGLsxmorL4Hb7dsZa5C4cLMBJt23hPGy6Yjr79GceFHVxb36HmpFj4a1XyoyxsoP1HSbnH8a",
  "key11": "3v6tJnxH3EYdkbHdswwpb9MtLjAn6hw9GukiGtRNFmy7Barku26of4M1a4qr2kk3aZy3mVskHKsbRYUN5wNEtLai",
  "key12": "yfZRrsqpghqCzcw6kkr3Dpvxkk7EWgM5UUJehieFfhZz5QpgNCPE3oze5tVnQBTVDc7PRTxSxSVDReqVGsc6S28",
  "key13": "4R2wQjsBUfqKBBnCs6QUNSQoSvne5UgxxCtqcUXmqLJmLyjD8RoufC7ZfkoEKVnP78ECXd9sqbyVtsmFDrBLAUyC",
  "key14": "2uam7DANfhEHitZvhgC9bjQDPtguBuBJZY1mkQm61rWtfV5jw6vkkF1vJHfDMgTPefawtn8JUN2Wwxuqnga4ZFsn",
  "key15": "2yBVxfG4qsf9pq1DWckAAPtTgf8DxUxf8HUBrJPaX21UgT3M2Mt2SnVUpET2dshgZ53YgwEW7zUNe47pibwRQBe4",
  "key16": "2QrjdT5Vm322qRq9g4mKN1GCRUVn2GtBPkp3YWjmjpSYeCVL83VWWPM11jZuzMh9CvJTHb9JEnKLc3TWfqBdv8e8",
  "key17": "tC5k4Lwhbe3bbXET81wQi47F3tPF5P3vGgRmdC6KJt9FUMifXhDJcm6m78p265yZFab7XQXJ8jw6uA6QKsdmqg2",
  "key18": "nDLqVDG9Mqea2hcPXSM7XEFmq6RH1TMoNRsj7w4SAnF4q4oR5jYkr9APpYRDd71hkupH9ktJJmFNt1qA4jqdCZW",
  "key19": "3tB5GrNDwLqGa787TqXFQhrnpEhwJ4oHnAfZCWBWHxD8XE5sv92H7yH2AoLSDdJKbwZ9y88BYNiBAi6bAJvwSNYw",
  "key20": "4Dz7zxz6zccky89xBvBPJGYQEMN6HFheKM445zuimR5uQ2GaKuqGFm1PR3DEzhRLVy6xUqbTLZkoMV78sHwu945i",
  "key21": "omke7TCfBeJPK8r8Dg8s4CntWQfVjFXh1MDvrUwDZqvNh6rckMcX2KXnQMzJ6g5w27jamUsku3VovrH6zwMTqMn",
  "key22": "5RsiSGuEybTQrWQ9YevtH7Dqn7zmb4aUUj993FmntN6raT7H3DQuvVioQb4XtZe9VaDSGCSxz1BviQHXNq2xHBxS",
  "key23": "5Wyt6Vsbt5ZUuzs2KgTbh3LRxweeKbnAb6Dd5f32RUBJALZgR22maqWNWnTyStToiSmo7Vm23duDDnzyjxEKiSrZ",
  "key24": "goeFaKzrFxk5uDypzT1EkKTp5WzFPHzwXoPQN55MqAB6ZKgN3CAiqh5bT7o5osHUxZ7nobEUJCHGVhBBPbm8Vdy"
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
