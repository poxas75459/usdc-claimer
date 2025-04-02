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
    "2YcfRLFSa5FedxnuNDAYaNbxaRGRykR9d2wPaVebH3VuhXdvZd9V2LDtauYdvMLbKKLtyRh961TA1dPwXsk2oTLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRsrqPbAmQ2o9cUbj66CEUejT3GZJsA7o2GQenjM5gngMK9iiqEGfJPqKtoVfjaiAd6YhkXicBQHewdzztHhd2p",
  "key1": "3mTNvxXBQWFCbeo3ERZXWD99cs4PH16nrCYb5CwQZnc2U5TfnMMcAmhfti4LpV2dWbstsbeLfuV6xZpxuny8teGw",
  "key2": "5wPcfSHhz8y3tYS6gvVyH65ixgkTuHk8o2pfVzShUrzq5awqufXuDmZSo2bi8nncf77hCjn7RvESzWzhVQ4LSAi2",
  "key3": "4JVwzsacXKzppJeRr2BNwhJiW4FkLJegfBH1bD4Y1gmtHpkxiTGGpT2G9pTu3PNZ83wxn22jRbzYMMod6PBWysAb",
  "key4": "ins3BUud8q5QRPhq5MYQaY3WMcdz1VRvM312uNAmEzy9LeHNWHYXanNLHU6aiobjH7Atsp82wog6cvdUkzWVR3q",
  "key5": "zSK3C921MgmWhW9eTtoWc6fK5UqAodSAqvianVhRxuELCgWPHTLPEp6mfiWbBAnp2QTxK8YhGgv8kgGujpp9Ep4",
  "key6": "zz15tobEpVHPzLJHWfKF4Vdp2pUK9KkxT6BZKrXhic8A6Wym57TtNqgCEbjdniV44TaqMXTuKne7gwGiQcTk2mo",
  "key7": "4Y5wB44LRfAWGhqNZMMDzaPjeBjNcRwDEJufJJ6FvWstEomBiSAAYJ1S2A6GV9U51quWapaLCdiT6Mf9XVnp8oqm",
  "key8": "5kxKRWT8d8xUhXNL1LofJCj2Yx4GVRqd341TBWnPyrMeyfMLqVw6oe3zBQVQWV5NL4o2KMyXi5ESSoCTc6eqBU6t",
  "key9": "P1WPtwiMHcYkzkAxRpeERNCKpzCcbgoYxQcMMToX8LpWM9BYqvTEcFFESSpNUxgyWDeXFWDqxsEx9yfMB7dstkk",
  "key10": "42Umc7nSuXQKXhPzpFjCMNszeThycy6ZypXS1VyidDmnkELNc5CLbPyMRdzGkqUG3ymq4o3jvWernqWjtTfGBA2f",
  "key11": "52T1MsJrFRw5VSsQzpJ5PMY4E55R87i7obo37njorMb5Yr4YvWZKdSWR26NQp4EKaoMFyL4x1gjQWifhhLg6bH3n",
  "key12": "46d4xJwLxDjTdsfLjQ2xHCUCkfCtkeh9MAScZ1UNNVTDdF44a7vhX94M3kDfr6gq3byAEi8PAgkwmhoncaBHY9Pi",
  "key13": "5JZXro3YB8UVZf1TDw9GxhrXtnviC1G1hw8ebGavLb4YsKdvw83FPNrnzXnuqXdX1rRrZhWcQdVAiTLHVgZnsgk4",
  "key14": "hMdh1YeVnuxLBtbM7opEa1B6VH2Qtog9HbjKeQHpBqgbibZsw4X9Ru6QmVHDUZ9fLSqgF2KL1oJiVFYPqGzM1RY",
  "key15": "54xoraxP6VXZ5rA1W37ckXn3cHv5efjiYY3z7y83JxmYTJNeLh835Cv3uTSXPyf1DQkREKiS1Nz6dqbDXzvKFkJN",
  "key16": "32MixHo9sExZDGi2fzNyLUQ662ozznk2YMtF4cwgWiCzAGUFu16qCPkXHatx1tWBSoEYwTwNHN3RWyEKoST9zisT",
  "key17": "3jyJVy1aquJ6Nckz4iUDc56rQ25pTQt2Z9tNpTBCpaYZF4BgKckL1fmFmZy1UkUEjY7JVn3vfCfpaRFXMGJXKCwp",
  "key18": "5QsMVnkjGf8JxDcpixPQ3YhGcJBfm9ZeRbJJFv4WdC579np6G6EaNKWTvvGvhvKqC7X4qJPUJh9ACz2VGsWCen7s",
  "key19": "5xNJawfLnjhc3oHEpJNAtLfY9ANg33DaUtKKkrZufcTbCgF4S78rNb1UEtuCyC1s4rQHnnqZHpAEp7YKGfZXPhff",
  "key20": "53pQwjd94MS7zw1ZZAZqEwzqBpbim4Hj1qrWiDi3mTcfDGeKHqYFbCxC2A5MYhfBSJZjgketd5mz7PEnShAZs14n",
  "key21": "3bNCSzBFgbopjnJeCm6KS2VQ99Fsmo4MCRd88NHqJRJkbjWmdYbioaginzgAArQA2GnD2dtpLRxLTSrmYuVTHJ5G",
  "key22": "2RotfsphfQcwTVy83K53yZvQBC8yLyXU3UMCYUogihU41bLouNvD6MtxYCLEM4ktX4WwBkbMxZP4CEBqfwZzvZQw",
  "key23": "a6kuWmswXUxzYAYA3Z9FWiu58jHKrfVTESFoZxDuzX7vMWGA1yXN8mvBwmk8aYoFUuqUqdXaciS4gnyBAzvkpVY",
  "key24": "4SvRdwUKy9VhcMe35CCaPyeyQGmrjqRzhP2RH1UG9zL7zpFsx5VMpTd7hx91hMXoCk56JoiJWGiSKUhVM1FmG96L",
  "key25": "5wZN7Dc8KqinaAWERSrJAkAtHkV4JfQiTdshZDHxVNEqYypHe1DkHCFJwd8mP1fE6DptSzGpGXeHPCGpjMft7yci",
  "key26": "52BCrsrh1qzSwpBQUxyTjuQSG1iY4fPmejGwRKikr2N5VWgo7ze7eTYsdFewNuSLiMopcxVLAF6ZhrymJtUAo73W",
  "key27": "Hvz12gmdBUxrev4y69s1ykXwH5YJ6ttFTf9gWvknpw7jXAzM5Kj2q5JrK6Yu8P6dgg47yM4SyKboXpUNybpqDcu",
  "key28": "4ruJ98UZPkhBcpFSyAUcvTRk35idAY6MncDkkLokUYvgAg5LDaCf8gFskDAjRav6GYpzBhCA6UaRUHgrugFE5aM2"
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
