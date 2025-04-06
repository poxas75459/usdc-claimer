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
    "37esDyxYGiWM5fbdQfMU8Y8cSjtYjkfjAEDxoumpPFnf4z5JNqfkz6RBNUbUXLv7bKMonAXHGKvHsUHeyyobcAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwugyo1HXvb4KG1sgaYGveTJWzG3FmbUPzCD1eiy6WN1jawkiBJ5XXUQtWwrX3ddToKzm9dQzeF7sSQZQzv7Fxj",
  "key1": "5ax1tZzAy9DN6WafmgX7jDHGhGeKnFaYDVSitwsRnm3kFKVge4fgoftscND8btUuexsYAJWd5KrL8b5Cy34iUnee",
  "key2": "3ZNyNVSSVeRa4JwBRREkLEPrjv3te62vKhgTMVJHtJ4JtRDKJmjMrkQaASNcMS1RfpKGj8EekvNZtpKjG5kofvNc",
  "key3": "5BNVhJW5MUVZEs9fa557RW1XFnfLq449xjcwCKuHx5MZp3MfTaqCFV3euoGt9jCUR8WZfinNMwQ979oVpoCqfwL8",
  "key4": "51FEigeGHD2sV3FX335mwgZGGN1iJbiNQ3gYdBb9rKFidq534soTGrRUREzFj2M8ZhPdokvqJHJLz8SGd44Cc667",
  "key5": "5BgnA75FknwcbUbtNZR9VGzwrBYTpcdB8oVYBC6dMaUDw6yz5WsVvwwr2pgyUKvg8yt2eKcqgBkysf3GnUzGWTdy",
  "key6": "3wonJ3cWXa1pwpa3GvHijVBdKsUPJhQEuBjgZBjaix8SEugNcKcquiGecyh9161R7U6kbJAU9Djwdi32dNJfoiac",
  "key7": "65V2J1iVw7Dse4PMv3u51sahj1wnjwFgDLoqtVTUxB9K6zYGUaCog79pne3m7SsXygk72Q5vmFBKF1tsKhPhbTX",
  "key8": "5ERoc6JnG4PHuZKUjGV1Q1Y28MvMvmHmR5z9N4fjr3iGNMB8Jyqswf87gE35utabzYphNvfNnSJgk4cD75PHVzms",
  "key9": "4gwaHtYaesSdAYsoNxTNwURGdLKEGugvBRWvtt2tXbaLvd1eb3g9w62oeJVZtkn8vb2C2WdyveHPYvFG9UYTTqGQ",
  "key10": "xvRtoffNwv9kc6LUDWVH9UARsGaYJhrYeH7QBeXCB5LKwDmJQyHyZpK6eYUqpKyKST6Uj7KmqEMs3ETZyZeDNjK",
  "key11": "6BkHm7PBtSnr6be8kbqWSZ8L4w2roAT6G2PpcE5HfVGKXYp1bDo9GnZ1dUCdc1HAfT8VVToZSRpJMiriY42tz26",
  "key12": "3yhwgEfLrQc2cEVjQrV5QkXuocqbx9hc4TiEogMjyf44UjNP4qvK1NkS21Sd9VUU1D19RLb3ugJePEHoaa7KzA19",
  "key13": "vWdEgT5CF4pLjremWfaoc7uDmujKUxPdgQwSQWCGiMxroj3bfHk1W3GZXt3yYeesSbKnYETrxgLmabk4UMg7Ccg",
  "key14": "XBAAvMe18d54kiBhQHVaMiXKjKzkjNXh4uDpbTGxYk64P3JxtiexSdnVwB8hUg7tqvKn2worU2cz3y6kBxPGSRX",
  "key15": "3gXM9Hx32LFfx8TAU4JndZYmZzMbJxn9bQS9TzBxjxdUjJDK4i16hD2aWWJNsgcBa7UcEK89oq8AHHJAeMWbrz4J",
  "key16": "47MxFZZahysQxtPLK9oYmLdQz3g73vbVNwMN9HMzBJbxUvKqVYPAr1rBTNyMSzcAGKCzK6d5R3UQW6dyN2wcFiKj",
  "key17": "2ccuqDX4a79cm1sktLvi5RGQRY8o7t544LJZtuMfbNKiXygBkf9jSJ8SaRzDS7fuTCDqhYSoLSr7zxGRTjaEpGpP",
  "key18": "2LKgBph5GkZ7pu7pGLue6AXeS2QWqMWyFD5Q8ZEb1jYhg6pvVj1gxwCBV2vr5zVCgfZxDs9UZ6EJta9bqoyzxNrH",
  "key19": "3zE2t6zTovCLPWqzbwNCjjM4jRiMZPbnnEWwYSzJj86u9A9ZaaKY1ixopeGfzmvn8mDXUDdqHySF8GN2AdSmtMUL",
  "key20": "2kWJVa2R5oMxVWMF7JbXqSWaKs2R4mTPQS114AKiQv9HG6g9EexiE1s6fyPPofoouidjyTCQJLNHe8TURjhfzibd",
  "key21": "3sS3DYM3Tj3QuyZqUuboXcJqjevAmnTgi9nC2hUK81FeyzcUJRXqRdxnmvRqEaiie2ohAaVdKRL9vrWry8X5D4rK",
  "key22": "5Pr22X3MjP2WwWMh1Fj1PUGg8imccLXyWsFLbR3sGHJMr3CAAdgtf7pJk3RLTWwZ3JTwrY4pDbhDZHKPwPfTWXLv",
  "key23": "3s6itEeV2aDLx29JXB6CnYKczFsfjqgaXEcgbhtVeETt4t3rhuYgXi6YfvPxtMgUFb4SYgrxycUARSbY2umiLQmw",
  "key24": "4JHxhxSBPSoqhA8krWgHg12cYhwd3zcD2mhGw9i5wq4SMQMBSE37E8gcroT8cuMpw6SEwZni8oHEgFDH1Ees3hDR"
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
