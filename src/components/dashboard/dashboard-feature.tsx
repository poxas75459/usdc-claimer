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
    "5DWVFuSatAJP9XgkhvJxoHREiGvZDpP222BcGwP6C4t95T1mySSwGJ3Jw3e9GgudPjnzNVw1Wvvige3Bfdj8K8nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xLGvpJDVpE8ELWb93APcjGmVjAqM6hrXukTHs26jAy7vSt8DvLQEqQa1BnLdPLGm4dDS58eS37eKMuSwcXrj36",
  "key1": "2PUjVt9DhP7PuLr7PrQisPFGFimnrDsrfKcgQqiweemSfBrjEThBVHmUviiX1svC9DZzVTntFDMT6yMgDhLTGs9F",
  "key2": "59ZZxhnagJNpfwKfA3NHrbWfKnZhN7FYXjFmk8A5QrP8bNqbUdQoGY5g5YfdBSesw5WnKDcevquzset2hBShvf8g",
  "key3": "Gn6VvqjTA66ftZHTnhAxT8d8VeUKQnpEJ6L7bhDHbsiJXfiTpVXh6Wy7P2XPBTKaE3ytXA3tYYvC2JAuSFqEJYA",
  "key4": "3hEfjtUg8NphT7m8bPHuWdrjHoE6WrHFtNYEogRwBf33ZnE6MzrnHeh6cXYecqJBWbwuynBoUEE9Nn2guZsAoqon",
  "key5": "LXHMdDHMPusTt8MFREeNQKvrtTcS1HNxJFTxqF5XzUqawEgTT2obB6vpFW4Mwp1HGbKoEYyYEgvWo3zE6chRRWy",
  "key6": "tiJTDQHxYBEAaJ4TjnYBPtsdL8CNSSua6wRsdtqUjnyHRUeAs3nPiz5qLp8GbEMcvwvXZv2dJpP6yXB16gZVYri",
  "key7": "Tr44bPmTbn6p2TevKcQLprH98QY2LRnV65shQpvtrnuvhG5QFCsKpKCanePfEji6nmqfENHwLNjLZoL5suyUhpj",
  "key8": "2gfbrMpnX7KvoD62umQFE13JwiY4DVJFgyd94qyZ9gWi3DgBMR8jWYWiTggcgiQ3yqnP6k7wuXHU5LPZML6wnZFH",
  "key9": "2TLhNQwyyysriWAGhciGdZfCzaC3nzmY54Xv6nfJqEKAnG8qD3ooq9MZ3YZjif46XWHgC5oJmzP4QW6J6XDb5F5h",
  "key10": "RZNoxgREsjFB8UUXtUXnGj3sFbo8pd6XGT851UKWPTcqTwfMEz4Sv7tSXZ2W8nkvhdVsyUHcp6PaTjkJHoqKQmj",
  "key11": "6ae1Y1vrnuxr1Rqkpwpv232zTeyaqtJrJKarSjaHjYxD62ucMFMpfJdY3dF4eNkWMpjednDvymWncJu8e3Jd6vN",
  "key12": "5JqPomUYECMJNz3bQBUQJKKRj8hapJwr6x62XGeimPZUMGWCQyfWQ1fs3DFy5A5wtMbwAgCqebq89g1PViDnHbx3",
  "key13": "5jtkVUccoHbkMHv8iMToM3nw7BhSYXGLkkaQqy3eg2mmPxtFt7As9Gc2u8rfKmU3oGwz4CK55CG7K4NanNE9LQhq",
  "key14": "3e8xz2mUQbSYiykotmDCce5VDXA23vvtfvi2w7k9Yyo4kFRuXq8Tj47RiZY8CVbc1UxoZbPzfbaYwpp3GYq4mLtw",
  "key15": "3RM7hYmtLX1d2ZppXv9PyygttiDHtwZpWHxcKft88T6KMLcceXGJ8pG6nHmUFevpBJ4MYCVP5GyMpKqis4TBjkeV",
  "key16": "41CMrT9dCtrrm4HdhtrqKDKZsBFstKCq2uA4LU2DhRNn84eSepk7rsTmrJPkZn7Lp4ncCjqtyD4LoEuxsMWefa4z",
  "key17": "2MTCQBnww4RFUEjF3Boqc2zjSxjqeKsbiyGbbbD9Y4bmkZHaqUA2sHWAxSRwycxpWmHKaNXi2v1HdU8CN3UZAqLa",
  "key18": "5joQEAmgrdPQ28F192fhTqRVYBdZUkv8xuaTTkRAF7rmLwbkS9Un3KPf8grDUNgKy6BMDTmVZEkiEvcWxxpFy9ij",
  "key19": "3ZaqESXrReb1aF43xYzL19ewy7u42kXiW2j65DmfuBDsYkLyDbhTojpz2Hqfa8RBcMAyF9wkQnri9jvbTpAwFyfQ",
  "key20": "22qrUA7ps9B1yFKH6Tt4vCS7GZDgmzb1Wd4bE1DM5HqhBiwGAaymWog4hvE6WdKzer8ctzwvrPYkCZstTnXaYeyn",
  "key21": "5uEaxCYxVnwQmKeMJqiPDfUtyz3BRYSTkx9APpGRd5iNSqGtrRBsdZkSPWHxwKYQDD3VM3EdjVhaYH66geU653mg",
  "key22": "3ByLkdQaWmQBdiUqYqVqDAbW57oybpgaGCVAxjSmMSJ75UrH5Zb1H6ctqWhyztbYkXA9nftHDYL1MwNdHuP4THXB",
  "key23": "kf7mAxchpGb3UYpkdJcU8C3q1uEzWMhHME5eNoK4G3h5r7EgYZ6vjDdLeGxzMyywS85P8vuqYrk8xRu5dSYDi1F",
  "key24": "21xFzedXf5onq61d7omsNgk9tZ4tsGF3eDwkp7JbAZT6VBQmQ6q21BMfhkGg1sTusdhALN4PxnMs6syMHe9nWfLx",
  "key25": "mfrY6FosR4J5dU2Bcyh1RaFDfQW2JYTUHtnFBwnZHjY392qjTF9aySPqY2n6Eo5zubYbR5yz6HbeMMV88kKmEqA",
  "key26": "4RHa7Pk6DkxWMfuHjvpH9eT1EEkEbYCYhn8L5fpi774yFCzFfDGFEDfiygLSzrNcXBTqaZeRetfMLYGU2ri3kaP2",
  "key27": "5717VnJTMJU2B92HYPnmR12pLxchPbAjCpawbf4bGjoq8SHQAUkPvCkqNiq2rgTduJDSEnYRS2n64DttTvLKFpWq",
  "key28": "dXPUrhKiZ1kiiHsezsiZzQjVQJ3cWUjiohY5Bjs9ygCTLjArX37VJ1vBvHY33R3Zjwu8PEyzWQiRauT7cWUJSpe",
  "key29": "RG1JkCknzH1r8PZdsoVLVa3HzsbRqYDgNyYGh4MrTpMr64uKBnWJLmBGWFUGgDNhfanuQUZS8GLNKvdy3PdTx7o",
  "key30": "4uJHmLyddSwiv2eRaVKqBhD5F4RsURZNQ6zosstcmdzTs8DHqbNLfdDv74CRdKMwVBGfdNdMRcHc4xGqqevsn89h",
  "key31": "28mtCE6tgBPgEkZU4MCMQsnYCsmHvj817Ukk924gsQosdD5Fz4kk6iiFHjnBQCZcciK4g6SeNMjfLbuxz4NffBMa"
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
