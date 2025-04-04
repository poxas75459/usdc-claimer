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
    "56gaMG3HCwuBeSniuGwscvGKguFrif6ZAZhY6ao9LsgWXZUY21KjnwHZBfockB8pByA7tFuitAJYrwtB6GFeeruM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MSYaPxCc7DZUdA4KWxNyaE6cpjfKLiSsgxEaz4JTUkS3x3CrfQt42YWwukpyvcBAb1QwWJoxXTH6xBi7F1Ng1xw",
  "key1": "3iPWeNgqv3gJxysdT3hvk8aHf35RsJMMocPqSp1VrrxKgeevB6VwWSJ9Hf1sJ81wtSTApyuSeBnFoAYSFb1h4csG",
  "key2": "2FocdymoYfWASV4pSjdhZN4BZmPR8h1B1mWwMyDxFAKb1omuZPaSTKT9H5ejqx2LjriXenccD1R9b4kYJH7FK5he",
  "key3": "4p33MbT1d2d9Z6vYU3CYRgY68KLMqUG6ejbvxYRsnKdkZHbf3j2ecDymgC5qUhocCJgyAY1mqfPvAW1twL4CjnrT",
  "key4": "34XoWTbf14fW3qnAkhGMyJZkHqMmkTkR8khitCftaE4qfea5uqE3tcSgDt1VTCkpGJ7YLkyo8NdqAaoutw417jpC",
  "key5": "4rjDBM3gzpUS2FHvbYQ5FgRhP2T3onswbpnfo8rU4qxyiTpmsgf6qaAqEG3vhBVppmrwXiZuMrSzMkYujvgq1Z1u",
  "key6": "25mVx3CQEye8t7tym2Zqr9onwvUPksyJiQTyBaQyRdP5be8P8BBaSsPxUq2kiChU2esognvyv4fPFDD1pZ2uGDDb",
  "key7": "4rsK7pBq27GDUqkpu4hXMLLxoNM5LbJGtwcu6S7TAJqhs3PkaTMLMW9dwPDMtqN2XfkNEAmoaLjZjXbJKTJ2ZtFL",
  "key8": "66GVtF5nXVt4Kz6PDTqSMf4JUQ3q1nk27ioZVmeGPLiu8SuNKutWjieahbrPtCMKc98JSqNJtpdS6AyvC7po91th",
  "key9": "4R1d6SFpwssPNo1RJ6B8vokJFsuMRVYjwhQCTXLEuUW7RZEeFxQfYzWX4A1tztk2Z1gBhzSfm9h9gkKeY2DGiom4",
  "key10": "tgi86F7Pt5WvTa5UNZnEJBwJHhaR8c5C78ZLBmwP8MyHKxDDnAqS2t6uz3DCP6FG1nYmUyJVkSvxtSos5PLbNPJ",
  "key11": "4xGD9EsZNFe9Tzm2BeovaaCP7yPGuKWsytTDG7t6SWCRyjTf5TYi9ykGcfpB6aXL6k5dvrsHpTVZnqKV499wxPjJ",
  "key12": "5hbg5JiGtCTjPE7Z32mPVt3285Pmanrk49y7HdNsRboUxRMo5WgumoQLGRcHNUxBgkQmzUYvBQozLL7i8qWMfMTa",
  "key13": "59udZDoQuS7VPUFvfL5PZWdH3h7CwgR7DDRo4Qdg46PuVzsbbZKfRSbXufotbXhrMECkvCR4QKErTnDxYBAtVBBv",
  "key14": "4fM2Z8EHNekjR4hJAsm6LkMRq7ajyX4rLQbsN1Cdew5zqMdApUCw6qsj74C7wes8V8Y46QddvJtwZvjyM3MHNTC9",
  "key15": "4wh5uxq6zqsmGcC9S4nyZ5KVLJdXrLwcBTP9xUtcYjz37QhaUPxbzdJhY72errXtWLtw3arS9gawSjgrepxiSMeq",
  "key16": "5n862bGvyB4M2St3rfSAs6QKZZo1vUPGYm4bKMvDSnKobKexFG1eLhAeEVZiTfTNtokrZNUAYYnYpieC2ice6dRa",
  "key17": "4nFkhPe5MPLHP2U5uFgypRzt58rucpfjJLQdyuJ5Zf5zGJY9NHo3rWqYca1sQkaFnEBxxmYQXaGAVpLcxB42yEKX",
  "key18": "9MM9WpsZHd4UZx9FXtgK2ZJiWFQjsTSDrFJvfd86D7UPu22q8PivLYXuBm39rxogAEPmVnRgmspMUFXxzQPWmvG",
  "key19": "goRHmR6SivJd32qrhVogrrVbcFwxZ72xHrsmNgFNWQ8NkV67MCBgMXiYTwHbJWdEBAPRidB6mtGqSrvypwTbCSF",
  "key20": "43qBZHJsbUoanSxcYqxAMkABd3xs9xJd16GaqgrqDLjUGkEGUcDWTiQJKxPbqFUsDReRZFXipJrPSgFb8yLCjenn",
  "key21": "1t449xHh3ECsqV94hEdZartrbgKTdAp8ubqG6xhQ6mTWrczwq8Ta7sGnHZDSSL9Tpbc2h3DxFa9ARKinvUWryww",
  "key22": "2WBhLwmv1iw6hj2BN6fk8bQdedWVKZ6pePYBWYdFDkJ6fzKcjunAGdN6XVHVeZuctYd2wyZJUY64nFeetH1F5kzY",
  "key23": "3oPoqcgaUNVCoeEH7L3gKB8F8XFBSoJetZs92FJCM6oKQsX9bWDjdrW4J1YgYCxekKicx1AKSRCdiYALZyDvk3AY",
  "key24": "2fbBvfi8krEdagTN4K6KQdqwJJRXUdGBRramLhJBzy1o6ZpVuXVAfysFkLHyVz6LRRwGWuoHHkwn3N2s81SeJ1ox",
  "key25": "4unL6g6QgtWnFpyvaHLitzMahmGLfHuqNcCQjeWJe2T8BQqZAJaFwEx2gbBgd3GbrgraqAS8UMkPubpsNxCjcNEy"
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
