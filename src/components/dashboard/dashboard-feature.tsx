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
    "hhzAdUZcfYofujpz37ywt59NRjMfbmQagcWWPpDFMqFaodTjgSjfdFu9p6vjwPaum62ANV7xqBxCfnqiiHTEP6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bb1ykh6Er6RUfnQhQrSGMF94C6RCGfx3Y7JmJD62uHqad6nyfX3fupyzQT7DEH1DpULNydHUMSv8CUfL19AyJgX",
  "key1": "62Zo6N9cD3sPx6M3HGQzKZCV7eydxepC3MBnodSwUyEFxhCVtdwfJiZHGjQacEvCVb4nmXaWm5EQDG15BmTeqVZx",
  "key2": "3b8cAGUQHkBHne8k61YcmDDz4TDNPvvjYtxh3BpcAYfr4g6TkECNDGmLscrBfirfFCrfcjpKWqy6FhEWbAEMiq3K",
  "key3": "2suPDaTPvKHUUAwJDQnyzVzBtDVf9WtiNrijArbuDLXuQnXZrBBR389K1KEGkCDnqQ1NBpchfg9ECpJDAHN9aMqK",
  "key4": "3z966UoYHRzb3FvVuXUDv877TDfrtkdf5bc4hwcQ7CagaJuaYC9cmsr9Zq1qAQDT79ZpdYn18BBvZDzvGc2iDsb3",
  "key5": "nbvVmx81B18gvXAjeWMyNjftw2Y7tUosvu5nkCgCibFsHCbfFw4NjAJBTXNden2FmYr54YPmAHU6VT6G8GN9GG2",
  "key6": "4sd5AxM8gtfJXbWuj4Gcof1VzTpas3n8pkEb96YiqDdVy3QnKXbH4fYTUgFnRwJ4NdUaSaULH9ppmm5h8X1athUg",
  "key7": "4kK8q7RkQdujHEpcvJzDWPgWqDy3WRzPTjFcHxJnzjk7tDRNzKKpgJxSiwhS32aS4XnkScQnsHTXcwYFXVWF5ZBy",
  "key8": "2vsbuJZ823zQinenETTaWX6ai6wkBN47MV9qB3dvck3uEPx3msuxHXrxhmXSp98mKRgwvHMwnkHGENHhra95CFND",
  "key9": "5btXTSUJmq1jTETZRPFQU4WEW4MqgHVPVdJiPdDvrjJhLJ9QFBQ7LvMfMKxyp7TftdrhFdGxbztDNtkHJxiF1udG",
  "key10": "xs2xndXaNr5WYsrkyqjW1C8Qccveong2UcAnLzx8j7akiBm7Y6T1gDzgJ4TB7REwKtH7y2ZFgKuxFY29AHLwnqd",
  "key11": "2JAm2XY1sfkmC5PFN3P9hx9zZMTSYv2MoEd6JnbtNA3Rwnc2xwxQVNMf3Jp47UKgBqmkoGTPk4AxpTKSrW58hj7J",
  "key12": "MUCMwFMMPYjZaBMfatjjc9Su28PNNU9ZEXZY5MGKgY8ibvVn6p3N1P9wtjCT1tEmfDYBi8WbENPzny6PMoSug7x",
  "key13": "2EoEDvcWh6VsmF1JFXybyRF5sjQHcsDxyAF7Uus6o3TbeEwQM9tYJBzMHizAnoL2JxtDsPwNm8AwzCZJMRSqiD95",
  "key14": "4tUhddSVciZLQQq5zFEYz1RDbqVsCaUm6JyBvcHGFcNu6sTXybWZhPQBhCtHEY8Xyhp8u4QG7DfvybChEjhPgzPd",
  "key15": "Q2Xc6f7rgv8w1VMg6pdJPWzwsiRguB1BLH9Z5eG4TBzUTYTFpPeUBx29F4BFJG9A4XVnwZzWjhxUhD9ag7kRMpc",
  "key16": "5wKLJAUj13ET2yGd1Cbj7gVFXnDhmXmDdJDXHCBkoUoGpdSpHyJS4SfMnWB3kEk9bf4qQ6dwQCCnoVhpWscKPkK4",
  "key17": "5YGRdXC7vpwbXagUSbHPZ7w6NR5mEp4jbdkRy2DgGvWUCgJxV3xXQT2s8kUhYPgy6w23rdQB1FSR13BDayejX2TX",
  "key18": "2zU7GFVJps7oVuBLjD7wKJ1Kx92s1Lh849jnaZ2NkGtTNfC8tyWmK196Ej2sXDG2HqLgNedHU3DkLVZKQhVrkPKD",
  "key19": "54ExT6D1BrjW6GidSHLRhXUsR6J3rBYEoCY1uQeWfGbg2ZSk2acDbLjTz12opG7KAeBoHZfGKSS6CZjzwcfVYtRh",
  "key20": "2NFFXH62YXRexuvgkHz6dPdJ1TppNGkKhzEH1ELGdAgHnS6Yv7cFgq1FQsJdsyiWBVTL7FnCWTWDz3crhuYhPtdc",
  "key21": "3dFnAK3ahAbMsxq96nhuUnmXfuaxvGeJ9Vy9T1T8CYrUm54rEjWbxeytZnSThprGD3WM8mYN7GVBPKTSEtF7Vj87",
  "key22": "2EWfuaJQNNiYVBWGAzZXc67NEwKLBPwWDiEGd4phgsQG83RgBAudcwMUEoPUXaYs597VSTrr8SqV5hKnM7YEceB7",
  "key23": "5UTJVHNef5x9fhezhibbHE943mdHwgYpdDSRLJPJ6pB12Ru1JrH5E17g99tFqH56hTc4T1WQK5HQ2de4zay2fUrP",
  "key24": "4NJLGTHGNGJq63DU3i7htPVPv59XXajMZWJtzRZzwohUuQXAxjCErTh4X852RnW66JztisGNE5NwCY1oCuSthrrT",
  "key25": "1Uxs1kujAihUkDRiwzNKFTYBoYWvnVjM2f8aCHuuLLt943MkMvFmF25ogeB5tHCzRKMBYfkHWFyzLmkgYMWVgLY",
  "key26": "4Rq5EFHCbNz8ZF94JsCMNNz9MK5PpZFgNW72Bd6nhFHgpPQx7DW6RpcTHPBoGPcoEAjcLfgXkvJjkLaniT9CCGux",
  "key27": "R76UpqCnmppqnQAgyyohi2pJCLN66x4is8HRX8QxuiSSAMMMT2Qy1dt4i7db7L1kbSLLYomdK9ZkF2LjQG9rtTj",
  "key28": "2uS7Z4qh6FgnXmsE6jvtFPLmJFfxJVbQybviewtSiDQNf5XcgRq2M4vwTD2Zq9mSAMpK2z2ZmhQdcAkzJ33HaDhr",
  "key29": "4nCrSLMB75HhLyr4q2Qvh8aizaQsFgYhcmrhtJSRoFaR5Fi7jnDFp67i4etvqKKenAJhfXaLcAfaAApsHhtsuVHh",
  "key30": "3PUP4QXJDPrXmEgXcqmnKYg3xchhjGgqdF8HxJgCAmx5ZDd9qo22XgPxNft2jR2boXzuKQ8Zx3aG4U3Woavqa63i",
  "key31": "2HNYwE9Gq9zhBqxpEboDGCd4rpN6f23BUoPU7b3rxwMr4kD9BPmHZ5KgLtYktrNpXCNjHzjSSufMFg5fRBLmrNNG",
  "key32": "CEZPgWbP3nL37ALrhSTSTM95pzZqYSwCTzTVHeDdsbnuFkKAvxB9ZLJmWzEMx4usXPbyaAPoSqdvyLPCm7T44ED",
  "key33": "2gUB7EM8jagXoovNP2LThHxmAvtTLvgVXLutBCdR61Pn6XAEfTTnb8RZAFQ8qMcywaSReV4ErMt3WdYyXpGxfS8u",
  "key34": "4aoVoWKQbiBohXTnZnHkbdoVp8oNnuVdehAB94Th73DCvUR7YQ3BVgQr8ZDVUw54nVcY6F9bxQYNeZWdDHgXzbMC",
  "key35": "tsXS38ybLS8wXActmYfx32MNZpXXbYRZSZcunaEMfomkwX3YFhc6GqquqsN7fSwh1SbftahMvkZGHjE5vynB5tW",
  "key36": "4XmBYdBF6XaiGTDndDoeqqGo6r8pX2fAMEen7b9ZxfXNF6R1Bc1ZCqA4ag5oQQrmH1AT5UuD8ifMHPHeDtye91XC"
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
