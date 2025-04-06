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
    "595MeGjhejGY3UNVxxzQkjVFvNdH5EZsm9dJw6kv97m1Le7xNLj4hHqPunUwhTvfJRb5RunyKkGpdb5vM4U5beko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m45qyykpQUwv4iQKAhCx3NQ8ezQBeid4J96BwT7dzC64JAGaMGiVNAPabeK3RzNLLKHbZtrhLu4WL2FJgmyFVav",
  "key1": "2RU1JSxfXwSvDFXtS8bQmj4qduxsjwsrKQBcwm8XaHnK2WZM2ug6SBPRPfpbEQMpBNYL1ZmNtEBzpzesqX4zndyo",
  "key2": "FqHhEUy46w1m52K5XApM3Ze6g1oqVrsghxrqnJVCuJ67hV6DbhYXMj3EUjvYzPKgj2q4ps4y652giyy6812Yei3",
  "key3": "31DekjRCFfnhJZGTRv7j82dcPXAL8AFxdkYQYjLDDoZte6MMfdUfwJz8d5MPf2pT4vDYBiX61S25iUagGfhsQ64F",
  "key4": "Y5iBGVyjKBADgUfTzRB7ad5YsUsAfNXH2HwX4pGsbbu7Zy1B6XEDS58p9gNsnbjmhVg4GwSvHWa8uDxpvNkWPgb",
  "key5": "3Hxz3MQCUi1bFtK2mjJa2jnqAXaSYz8X2C5Yw22771uQPm1xvtb2akfhjvxJJoZPvFGkkWXrXmYKhbayuKSNRXiM",
  "key6": "2MVJ2FqfSvbwvq6p8TERJqdJ7WjPKseKufEuZaNHZqqCCUTXZvsUNia698NLcLPfWdEttqLPML38B4NtrcfqqB8A",
  "key7": "5a9YKZhTPayX2mGCPTxhmufTboRHYxytbVomdLznnR5figoGGKSntA6wv4PNAAXwPe7gAkRynEXqBu3bazRrQzQC",
  "key8": "5nyteD65N854CDgTcxwgCbJb8C3mZFv6xPVFfhBDLwpxTzK255HBtTJ3x5q4mMtqu2pbWB6dDk1KznQKXY1a8yRT",
  "key9": "2QyAGFYQhy84XGaaQHmvKQ6xDXgXi9fboXWEnyF5Lz8bavZH5Qd6V4T7fLdt7GYzVM39XbjGtwQq57cixhTAz5PR",
  "key10": "4KBdiHJJNkeVg9zzm84Fbfu3pvjuZM2KViEdx9aU7RJXioZ4SZ4xHsHkmFLaWxNCeFXtnuTWyn3qJECpVPkaH2ST",
  "key11": "5oD3CpKYTFCQmNEEQYFTSUqYYoKSdXdpNrG28r9FpEx983wAxJEDrZ1rLe8D97hGNAoWFWbwEVDUF8VTAuVXs44W",
  "key12": "2y9u3AC2nrcVxkpLgqdWFJqUZpjYzk8yvsYLdawAA96djJZjsDqjXGiUjZ4VaTqwrXMWy6f9Kusj59NDhyHMffq4",
  "key13": "2CTdf7AzRc2cxMKrypopqL6WAZRpYiRQ7kcKrqUCZJqEjsnvVUWTjngBjAazopaJYMAskat6JjC6KSURxo7ZzwUd",
  "key14": "4co4SqtUZAWyVYVmk4JasdxVVofivkdgDTbn1ETMSQUDhJKUaKL5S8guSB3cWuYNxsZbLu3KLtJmJVrE1R9xuG61",
  "key15": "2WfQNvmP7sn9hPGxZTveoH7XgFpiDLeWbzHcK17jXbdGKiaJWZdLh4ViEBYRtKJZuwLuztgt2yvVZMH1U1kFdRXe",
  "key16": "4EjLr3hBpSToJTi5jxhVu2gey6UoJyDsUHs7XThy7eKMScuXZfbajmUwrPnT7Mw6esbgFBRBrRfMXVzJMfAUBzCX",
  "key17": "4afBmgok91NR4Gx4AbUiaXATX8E5iXjQnhg8iUBUaErRoRyLe9QgZg8QNfxC4itiqUnqduademLz35xRAz7GthBf",
  "key18": "UeTsvGayrykJorXuBwgKi1EdJH9F78Ra2LML8pn5yS5b3BQDFPGcvDZgDkwfyBidQMsKg9WWFRfx1qNweQ8wbr1",
  "key19": "4gbxXyroJTDGAQesv1YX99gKvvj1nEMKQRWPfSrCtgmYs9S7u86jxmTNvSwXMVcwGTszjwqqz7xZbmxvP4BMqhty",
  "key20": "2rMjKHGrpC5UzZH3992KFeKnagZ1Fj2sFonq9oTpHtfhPmSRkEcbLYH3tByxA5Y7cw38ptinTKNGBNd56APU2Fnn",
  "key21": "2Qu7P678C4Gt3qYbxXPjG2LhpwBubnL6UBwmM47KZUvFiSnfehPvxqX3oPVKVqajHqD3ZkrxMehVyxgPrxVH13WH",
  "key22": "3HzEwdSGEAvP6QyMDpuKpwCkJ2Qa4WvCyomdPbJChWd3tSn79UE1NZ7RBfcbQJN9ma3HLZxozwUgCbYuNGF4HN8c",
  "key23": "qq7wxXFNZRVNikPpktyM3EtfzN4Rjq23bowePzBcBqwNn5JW64Y2AnpT8L3pyYPJJJgnepCuc4eAVpp8kYuhTaj",
  "key24": "GFzeiYb8oF7Fd52bovrorvVVrVPWAunSuquLtnwFRy5Xxre6FincPJ1jExYkUfrCrBwpchAczeZYmN2anyEaz3D"
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
