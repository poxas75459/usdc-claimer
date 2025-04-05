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
    "2hfuPGD7tjDmmdHsEjH5HijBeDBHRwbuqE1roECzTeSZtGjJN6mQTK4q48XHJ3EstzshTfsCh9Sp6z5ipjv4KDgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hT7Z5ggzuhTHRCGNXdEEzTVV3E8bTw64rEjq7kvSP6f29jgjLcwg2Q88pPTpbL2tF5hLvG68RSUzBpxY8bWv1Nt",
  "key1": "2Q4kx1VvZL1MSZydhxGn1B7GTvjSS6JjzuG2jaY4S7Ewy7MFkHmCZGxU9HsH8zjkek2bp5cNdh5XZFU9spWaFnq9",
  "key2": "3AukpQPQ6S9RfjwBKEFJPuacFhKAXkNeCDGqMVr5eBxVGUicaWPHBHLGCvrGjjgbatxZGXHCn6qjSd59NmPKEwVh",
  "key3": "LuuX35g7Yuy494H9mATKY7pDvuJyD2HYLkFrSd1G3B5k7GNNe2rr5CtKM3Tsap2K7zvPvEPYWfUf5yjWM9qW4oy",
  "key4": "5W8owroGWA2soxx6TDqnJ3uBdHaYYdY4hgTMcwh56QPSPo43tWLL3XThuiNZopJyLbgW2TFALrz7TJnBua9QJNrb",
  "key5": "36Lb8zVNfN1WDK8kALgGqrkGLyou2CjQHdb5QoLVHR8Wm4qV2vqyeCP7KSa3WnF3UY41tCyGpyjmAhCjUMF9KcM4",
  "key6": "3KJBJDEhVe8jFuuacXSQPgzR2oXNqz3atcCDH8ozLqWxZdB9NnX9E65BBhCzGvGDdMYmRRnseMUvoaddZkhJSuX9",
  "key7": "3vJVwud9AuoUgQpfDFX1vJSrbB7qWC9nN5tNGiUD2kqKvdinqoWimXpwXBwoJj2PFGsbLLUQ9SAX5bHt46to1GdR",
  "key8": "3uMLwmz5HXQSgtdpxGiGnqLg5HRQA46krh2vmiM6bnVSoqAHuc2j56ohRjKqicGuXgJWvG9TrxbHTzotxE3bduJd",
  "key9": "4xmkTdTYG6NT8q5Per4ke25tKWck5ndsyVtyoc9FdQG5HpYRzhV42iQrT5QCNjnkSUCKLZrD5ujynmejNRpRnzku",
  "key10": "31kZKNc5zYZPC25V2k8AH4B6EBgcq3gY1faLqpuMmgFpzjMpZ4kZWCFMPyibw2jZzXt7XN3h35dsSrk2y2GGJnzW",
  "key11": "4m93otZ5koxih4spkwHqb4qvXDz1WKAHhmsfhAyfDivowGapeGKH7toTrrpoSJt5DTUGhDizypfayX6eRWD5T3Eo",
  "key12": "2y6o68zgFPJer1ZFeyx7S91RAoxzBHZwhveHa1ARZTGiTsvnZcKVkHg1cFSG3K1mA2QryfXyaeAme7gTjPsJceXJ",
  "key13": "4N16JAznEYF7pSDsQfEAAdMuPUzGJNdkBvBKJmnMxXPT5pWmFGUuFASN4GhVLs6FpwZej94oyL4KKnM3Az6hcJjk",
  "key14": "5Pd4TbzgUNunjddpqn74GFUF4Bgn9ZXcKL8tvLTfExCwPnU8x5rCyXk6DhkoZv2QfEPP7EwSh6won85vmoA74my7",
  "key15": "4qpG78cUzMEdcDuabYfDDXjos3r3guDtX7ycYmZCRkwSQxh7mbavNcBQmtstAjrFsbjC5nuASH4hruVjHdyYAUFk",
  "key16": "2F7SNqRuT7AREnPHXvHgtbofWXkdne8w9wCNp3Fmckw5keL4CFug2LUpUTMD9TYK9izkHR3bJVMVXxvaRNta83Xn",
  "key17": "3QTZN6MendfUjjUpQc4TU5MABagrb3kbnBF82Y54qHbf5oNSmy42DhbuE8WtLzrnhJi1sGBHzQGjv8BURBKKuq8c",
  "key18": "35skThrqiHdgx6b6f1k13iZLpddojsaLGaeY9Coz4RnJyroxmfZYGZMgTtWHKuE6Wum45pKiSH4YqvcZJ915yEB4",
  "key19": "Le1JRTmz79U5qYEh4RkzFdJyCgUtwKN4CEKuy7z5dZKTSgLWxtz5e6qZBEi1i7MCP9e1W5bDTgpCpw6NRN5VNNy",
  "key20": "3LHchAH65o8YvF3aUMBMeTKuD4UsZ9URFuwUHFWFBRvwhGHVAr2kMm3qXTyHJU3rZmi25o5jQSwDNuaur6a7BqZf",
  "key21": "4rFzHWkeTWkvGvdBveTVKNdH233KBp5F9i8DM6iKNjxbZYvWSWJ4gaWEPyRaZZ3v7nX6SAAQ3puE7u24a8cxpxbu",
  "key22": "29xXWgHv7cK23VLCG2mnLGKTU7s1jRFXBd7mVH3kUfA2vrntLJz1hqWVKfqcLpaEWWzXt62jybTu8XmUCpmA8vn4",
  "key23": "2TtQH7FdX8r5qDHwBH8kbvH11jiWgctJVoJNr8Qo6AnXjeUgjeURmxoiZ5uSPoQo1enCCrb4NVCHWeBn6V4wprxA",
  "key24": "2vQ79RcJUbSxw6aKCAHbfHWjvXMpCWXSTPY8mrye1jBQgA9FUpLm7e7fcKvu8NBhHdjd4GNry14nd8bMB3Wkw7gP",
  "key25": "4oZPtzxn4iXf6rVGeQnJd85oZR5NSBHFhPoeethBvpYZxrYaEzegtRb7GFVTwCXtLKtXQaEjJKctxxBWiEXZVpKQ",
  "key26": "3QYZKreaZeGUjNgNb6sAbSt3NCzDr1bN7wrTPhjYMGmEoPbjakigSLthXW5kyLSxGJT2BHSvSsvnF262uxmLBj29",
  "key27": "4pT4LwbUogZ1Etnm4QbkUJxZ8gKNHAtMzWQb3npqNYoRogmNZyxVTcR7CAwXxw19mq2kZ1EC8SXFyniUzuN3NDci",
  "key28": "2NQLUQn2qtPWpqFUnRBKLrNfhuCRzprNRm4e4tbAhqsJzs9JWYoQ3RbPhpqp28FHgTP3dMj9spX7QPMqScfGNQUg",
  "key29": "3PHsd9QfRuFA7bRBHhVAHgzzn1e1ByDh7GMkRyaTcd2n6B4VqTSUBdRegPteJCnMM3CP8ofv1oKh3Da9DRM9c1i9",
  "key30": "5MnCfv22q95WzmDzXcNZN4Kk7vJWj7V7ri2jcLXgczhaSUutzUdFGaunkRRH6KHJVRwVUSX6n7x3ebAXg2xurRLu",
  "key31": "2hSjDgx22dZQqpzUQDq9U2khEkYgvtD1DVk3BSumampZh41zCH4RRa8j4ZSCZDjBydfXvxRq9C6SiDFdCEt6XU8u",
  "key32": "2C9DE1cuukMpGC5sF7GHqedxvkyKa3K19VCCTxbNbrEGfm6qr7WLk556DS4Z7aoR6jaByg4Qq7BQi96LpHWqzc1A"
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
