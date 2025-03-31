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
    "xvGfLu72h3PtYpabaQ6t7S7ZpCUahT2A7NqJF3y2fboWi1Kf1LRJpjLpSMeE7rtgU9UK9g7YFZJWEhGdXYfGKTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YCzVBpmZvyRsXRksmmSUNymQ7WsrgghanCgiqjUq1cSnU7vXqZN3nKrWQ3MsVoP2RDruoNVq5uar9DpGAYmL1a",
  "key1": "2xGeZGv5iykTz23MkK2zsT6a1zkjchqEYJGTbE4Pt56o6uZMmTH2t5DRvr3tAs9UUqS8kLAZCxxoCPGAcHbMC8cK",
  "key2": "5qWhgYpYTyzw9WeW9pJPFD25BmJttcadjRXGaqCsnHBgLrhXEFfd12JCm7gpVnM2sYWN4M82xJRDri5cb5xxnTsw",
  "key3": "4HHupxshRAC9gqmNw9uozS1kyUa9nFgNohBrRmA9son6eVqnxwavrhMuPgq4MQymmWXKkwJLfkEsPuMEVM75fFTA",
  "key4": "kXnPHVsyZM3BbS3VmLZuwLb1pFL5AJxzrYXaiBAA79GcZ5NHfqDCxx5k63Ge8xVKNyRHpGLwyxfHhFhZMtTpfKe",
  "key5": "6758Y3iJR43TMZuPWJZ8PQF8kHD3Niibo9PN1tZCyNnXH989eH8jhfB2BEdxktNqj8fbEuDHy73MHwWHxhyWyWNC",
  "key6": "G4DNrXTH57udghQEBNp4xpCn6zGt3jDYiWqkQFDGaApEC4WJcQmd2jqhZa1DeDVm1wMKutKpX5wuie8fKys2QtD",
  "key7": "bTskh9aoQHQnkbXcgDNy46gcLA6SsQKD8N3meAjJStSVretVs1Bh1qhyihuRL2cV72kCirB5JM6wyES5G2R72Bk",
  "key8": "Rn6p1dNyGqy7Vtx5sde2nYG9h17sWQmZ1UfbBvzF6NNn2KpS9rHxXUyjpQPyQWq2Ak9TCSD1BJZW2UsUpJuo8aJ",
  "key9": "2NrpbRprcAUUoTKV2wHeUkY6tNpgQRZej8RkGUraiCZ8FnfLXUkhvp4Qh6o5Mf8192uamFE4Doi1L1NdNJTcAZdy",
  "key10": "4hQCviee94AT9pNrchUYHaQt546nc4g7MuCscXz2p4mzw7yQzNkghpag3fZVVib5Z8MNCzL79xBfsehjgLRKbv6t",
  "key11": "5iHtXCvD1KVxXiQpZfCqMAWrYYyej3KRWVpWGzm6cM9CLHfjjoqZpd3guKzSHKb9j4k9Q25n7HvqRct1bUApuN1C",
  "key12": "sZ5CzYMnBHZkFDaF5wa9DToBL4mEyrNwtVDKsqqc6S49tDDhwGCgoH8rMacEX9qmw7JazG66ti2GGtnKfGC2zpT",
  "key13": "23KhzVDcB4jcYDbmcv4Rr77hssCMcNT5bmtWKbR8tDSZJuEPuHNGw7A8Ysy4KGJvWot2cmJabTNgZPZCPA7frSpa",
  "key14": "5Pm5ECyY35cstFGUPutcJiQHfjjhihwKRmnthVJmaa9hfrJiU8moWxLcM7dBHuVa9uXtL9YKmEBDBmSc5spATXRn",
  "key15": "5Edoqh7k9yP2gcqjNCX4RaS7ZoCaTTGgxhw8xL8yj7jVQmKxjmcqDASVhoAFqYemvMhDMogBiGFod94vj6HQv8PF",
  "key16": "2MpvwyzYR6BhsuqUJTpfqVmKiUCRrn8VTnFoU1tkdS5Ndj5tFyThGcDtSZeLy3vpX2knnVmnLnfDJLTMnDT7GPC4",
  "key17": "Jj3m1acNV826YicLZpSdW9BtjZ4Z7JaLeBD11HW69PC8v2fvZf9RPPJog6Uy1JRdZXoJ67mcMqTGMZ8XuxjJ4NS",
  "key18": "yocQhhuDRy3n2w6Nno8rxdvRLY1BU6UpeGbAQ7hFxUni92GacSqoPab3ozSfveHLWmUddYFWFLxZSSEoEnS894e",
  "key19": "2MyjgEbgSumw55yxycYcKT5wZK4WbjptB8FXSnVpRWr5BejqzpaNXy3WQ6F5Jb6tPcBJjASQSyGFgAJZs8u1TEzk",
  "key20": "Rm1V3dzcvGHSpegPGegkUMEYfQRL3aaCxiG3EpsLcXwgeE7R8SsZUe2YDp8Y9sgakhkco78S3dhKkUuMLz8G3zC",
  "key21": "2RmEao5fNQBnSDoLY5PMFcqs4NHiWUJEq6JxdL7w5NbwfNUuDFCJC9DJd2r2nJqq2Z1MjHx2zwrLGNAkDzchZjYA",
  "key22": "2xuRcuuzTY8JPqhNcZyPeuMdCxU33iC8amGXVNPg4m9TgP6u2AZbSYM93aw3TcF88P93HqDY9zsMmDsAfFnrvFgb",
  "key23": "4wwa6T5pCBnaKgWxDx7UhdsUdDjpDHV3BQXHGeMTMH6BVdyxoZXHMP11xwwAtJXePq27v6UVXgeP5yGBav2kYszA",
  "key24": "32e9HAwvbCeNKqgZGYuVPYYYw7wzW3mftMgbWJLymVXeGdqEkYbfM8qyDz89RkxFekBWuXqWvZFVHodsxqcxiapf",
  "key25": "5zPPRXjEjMjzpuojCSBnbcBF89b74T1r8QP2PKdTxwcLSivJzJy5j6J1nyoT2h3gFy72uMi8Vt8ir5TK18UsCopB",
  "key26": "3hx6tWbzav2uKDoWZTM6hFMn48dQTryNqsUveQ9XmsqQDxt4W2bHGnHfqcS6RPxHAHiYzK1WLPZjBcFZcrcxgCYt"
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
