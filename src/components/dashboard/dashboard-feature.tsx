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
    "3pWCBDoy6aT2JnMacyBRUGBppwAc96YSvHXFewU9ZSfWY3Z7B2BBFUkP7k39P4NRNrniVfQwkG6zHqnDVWtBsJ7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37x8KgYSfDfMjrfyVMnVFWewoFh1NQSSd9xCfFgrwvLxnQiRNuhWnVn3wMVTGopFkZYxLktMMTHr8g3k8zZGAMLu",
  "key1": "2f9j7ZXGch9knUMpeBpHVzhUDk3Jbh3dqes21CGTF1LuUsX24ojMhCVeqo2YDmLN2N9n7W7AvkHsjJMRcRWWL7Q6",
  "key2": "4BTwq7Srw3uZo5rh3wqeKC8S2EchyC3fQb7k4cB1ZMtyTQyDX9TTdWnVBBX4qVDJpS2B9yM3xc5diihTnniobVcT",
  "key3": "5gUGYeU7VpW8ds38GmFRyxTjvJwuovij6Gxv2rzoAwqisa2as4FPNzbYBmbuXX4bhbgPNWDarXkjsSZeKhctoEaf",
  "key4": "4dU4gyxK4yc7Z6Xq8wLQzLm5C2b8fEccEE5U5Bi6WqbyUquEamH9MA9FmmE97SrxaKUbmp8jYQLYunFqdYaMCTZu",
  "key5": "47JvgNyHgMmYgALzcjrB7jFC8ZtfvbEyKHE8xQY25wgLj5Nf497BwfqbXMzhMAyX9RLkFMoZzyrErVDNZmSKErXG",
  "key6": "2u1dUfFSx9VtY5DBi6Eq4yw9PXct3A2F2M9kW77jiXEXCmnrxc7mckFjSNT9EppNfbFo42QUT7WJ6oF1jZCqSkNB",
  "key7": "2RgPSeyBrVaufApiXtii1PLW63Tg8LRfHEm8CQSWDcmHFt8uQ2a3oUMyXHMR9tBSe4YXdm3Pyv3iJ4chEjbv1aSd",
  "key8": "5YzxM6iBA4gnBqq1ajEuyxk9fQ3FqBnxqhEu2H7wMekLCFPBdXZCAF93idfTbVTebBFuNdMuJNsL3JnJo364CX3e",
  "key9": "jzNShxjZ7yNSFvyi4yFiAa7Pf54odJe97Ftau9aP4ofB5uzKpdUPui4vNab1MA4soXGoqy4avu2hK8MpDTLQafV",
  "key10": "2i8fKR9NWUojRZmAHhLxRcE665P6QH4TPB4vu9n73HyZYJQnt1scMmURmsWxsVH6VY7e3eAR9VP7godHHtZtJxuc",
  "key11": "2ZmMmmsruBuneTNziYaAAHqA8sD8NvXAXuKiT3x92Xx4ebtbaa3SxBHAUEJSn7fyCkvK46h8X6VRkrHCpeq9aSMk",
  "key12": "5Xs8htp6gGq8c5LAK3Ryb8AHH82FUhNc9sAH62otH7DgVjePUESw6W3qJqZV2hi5nmRZihwdyEvTv9JKpCVM3L2v",
  "key13": "XyFBYf7gCLbigNvbfEF5GBTEXw1MkMF85jT49nJYwQiHbA4pxLnrRuZPbQjXpv8d4s12hSigXgpSVc3J2nz3YGe",
  "key14": "2K5DgTfNVrG7Zfz6HJ7E5oUeb5DhzxA9o1eBGes1FXQHbUJewMnnQM5qrk1zttWpcyYkaKSQZjxR285pA1oaeMLi",
  "key15": "3oNNJBN3evkC4fSeQPGVefdmWne1d7Tx6XnSY2yyXC56FWim5RyEhiR9RNndx9qHtjzviJ4iwc4Tn3Nj7oe3qD8E",
  "key16": "4C5dJKiKSjbn4rjDHvxgCFt7kvYEZysdBNYPTXXRjAg8rpWGcEUZS7djA7zHZ6kzHwfTWmypU3Jh36MK9SW6rVZM",
  "key17": "2QvDeXqtHcQRLxzQkX9uenhwmznCsou2s62axWTFKCzVMVR4otYANADKNbn1zjW9TqsryCn7hT9tgHJhE2qUGDEw",
  "key18": "3RzBw5vCXMkZ5Vm34WzYfzrpPtNyXTCuJEuQzbwB2KBm4oGaXJDLbEkUqmFWu6Yz5MqWo12GNfGTbexQBRHroZPr",
  "key19": "FrpBMgg2GSggLqLz1YGmdg1CBRobHVVL2jQNvg8auk4xAR4f4ZookoBjaiAkobiSpU6bZtcWqRfsHDQVBKmWhf3",
  "key20": "5L3MpznMrUfYXjpDpTWAhgKFukBpfAqUpFz3yBiPWnxiidHGEaME9tCbJS7qw6jpo4kAz5XDcNJevY8A87aR45Az",
  "key21": "5J1PH28RkZKzUwM98dcfS1za1y3QXy7V9hZH1yMtqw3s8XNkKaRadeanUKxehMx2osUmDH7M4d1L7AZAcVB4rXTn",
  "key22": "4bBGXT5cz439brVeZ5CHVSoPmCV3fEfFwxzLjqnoaHHQ2EsVQxnM8WNQKq74Be75SDwCRh4eSaqseaQ1rFhFNkP5",
  "key23": "3vExeGVQDFqqdarjKwE7LKR1aKF5UFcYnu4dYejj6mQ6xUALDHvDxKfTLSTCZc16E4WrgN7iuD5r2uGjsGrw3Ptp",
  "key24": "4t1uuGcgZ6xjBK3oAeQMNqAYMdUeJAdzVWCQ9nXDNTqJBTMipCHFhaazBvshr3vVJtYgN3oCuHh5hD9zzF7A6iec"
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
