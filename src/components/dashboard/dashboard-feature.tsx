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
    "3guiBBKtsCbuLPxxgpENikn2UAjuCj35YEiNKpd1idb3HqYxr5QttURMHtjT5q9MbXAXge4TeoNV451GJvwQKXXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k41bLxRy2MToa3a4iUAVKvLeF6p2s5CkX9ftnNpgFivPCJZsVbMuAW8MiS2nhQHkV2JyR9WcaLuDmytvEHGXn8E",
  "key1": "34fj8ATboDfE6nurCAeNz2pkK8rbfBhyFPj7PCfm3JVRQ8W7g9MBDU81tr2NJYpvkRdwwcGvan94tYdeyjhE9kJg",
  "key2": "55r7GxwdgHgHroPB2ccGtUCi7hDaRvFhMazWSbLp4qW6R721TpNwa6YaoHZKBXKSojKnKLFMTULo4kQKYaFVLStP",
  "key3": "5CcSqFQuPa45wN8xFEDs15RVnfbBD24VUfXf3msuxMypbLy3hFK7b5M338xFo94Y2qDfNTgEP7tTaTnQds82m2uv",
  "key4": "QwzQ9A4G4t8YpVq7KCt3255yJ331Hpy36nrSqXzLooBDXKA3bKhYU3syxXESaNSEsUMSUDMdkmJMDkLASsA74h4",
  "key5": "8LAKwcFkGiGcq2kK6xafWbU25QQzoKrnS3UY1gBa1E6Giv1AMytgDUYrQsKuEKYC1gcvbCy2ndwXGqrS7JUidr7",
  "key6": "3bKkWrQxX4m8RGoDdmF7a3fQnimZE1pat4ktpuK68DFzXReXrvrMC3S3ZiHaUBgX82FgGxL5z86z5qTWq33abJSj",
  "key7": "4XWK3dd8qLpyyHdvzLtmwMn2vmCtgKn6V8PzNLeDwwdCWUScqB8qBvhQCQjvwxDixkz2CxHrct9R7PKUHkdaBFcn",
  "key8": "3V67KqJksbftd6joEC5jrSo4hJrEi3jn317mYK1zwDfKPzpoye8vUfYb4MfQbs6DvWRmH52EqzfkX8XZHBUN6isU",
  "key9": "5t3t72QYfvC5Rxte1zLRHcV5Q93bYzbRNercanEPeByvYEXonVMDCQLzoV1DCnMHVQUUcwf9FdSTaXXFTrnBDDmg",
  "key10": "3aXxJ4ZYuseTUeZVxdK5QjTu6JnFkZCL1WwaND6R8G5bytWWkz1RDMTYgUwXxrFWLNADR5pZFxcQ6wn5BC3s2wuQ",
  "key11": "3Yv7Y93YPYpqepgVrr3gACK8PTdaWu4e4gjLBnXD7C3HhSqLvgAVTJYXxXEYbqDLxCevg18jkddUcmPYqGMAtaoJ",
  "key12": "Wdj73vrB8AicY1spwte7XfY6aFEAR4KwhnsktJGjntJ2C97NS33np9EQRixp8XsHrq3zmUnHvJnhUSLnwexymV6",
  "key13": "38b8Nt9BV5t3DahMCGtCdhCP7uTaHbrqj53QcJMKR2cHxBZDq6sSGVmqvBeb9aYmgV7PFjCCKEtiSVRBSC446aXD",
  "key14": "Y48EoFfbkoSuGQHxvSdDUJuxZ11v69V7ReEEGAunZRRGoRteKNG52siA9ZTDke2Y7qheCVGUi7RE1ZgvtrKp8be",
  "key15": "5tYoaZ4Mw3YBcWcYmRyvM6UoqcTSzKug9vxxV1XCMVksWzmkK9XagnfDPtof35A1r8dmm9UtKuNyXoeVdq3UyXkY",
  "key16": "572FD6LadceYA93wWDyhLMW5Ajv8cBp7x6dMvzdWo9tLC4kKSc6UmecFgcsTPVoBTAq2n7mpmCZjNBBv7WGq7CM8",
  "key17": "5Bu4rvQxUhzZ7Lwb8orMYWXkrU6Xs6z2DViXPyj5NWgsBDJNZS7QJiCuzZfRWEX3ha8TvVWDXEg7E6hV5JWigcp5",
  "key18": "3mY238QARhPYsMDStdNmW8BRRhuw1BNE88n7zeRQjzEeMubxBvBUgbjbQXftaRcSqVwF6wpVJnaUHz98xEyNEpNj",
  "key19": "3Bud6gMkHVD1kZjT16Bu3QXVbUPGM5k6CGZZGYje3pNwJ2NNu6NbhjvqgWFbwUFNQwemvskJ7kxC1MkZirvqVtiU",
  "key20": "5HmVx2ySmeHLGUVEZPH4i6Q68U2vrAdKQRm6bREvrSiF6xJvdjHJt5CWUDG1VoYURdNL1Bh94WzCQAAwDC1gYusV",
  "key21": "4ZJ6LGwpjvbuvoMjS8aaxWHsPQXCfqL3VfTJuRJxygfwvRuZ8gzfSvVVrD4xhbeL8Ab6WJJpvntsgQ21YRUc3sCN",
  "key22": "33DJxKHDZaa9Mwmh6KKBrPKJUADA9s5viiKwHq2PLfPXHu9g4Y9MCHccrWVowsu2sJ6YdUbAknMMjWR5VXdbGq2a",
  "key23": "3n4KKtHNeJAhQwsbW2aW4weP3WoQ5mzqLhCarnUiz8oNQJUBRdzGEwLvZy8bwTyNcWu9ySNrQK4hV96sZ19YnxyV",
  "key24": "3wyNvyh9hTCtBx7dXcELfCeM1xmnsc9B7dmhU1BbYRFGGKmvPkqY99fqH1K9J3x8aGCTrW8ywDuofutmnfym1ifG"
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
