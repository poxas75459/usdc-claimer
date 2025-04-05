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
    "39preywLYiEU7r1yVwdNFZZEPdDxcdt5UHbMYmDMbr5WZ1UNMWcZ2wTd9sRXSFiGuLJ3KP8F9LCWj8wFhy31znVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnDheXkg5Mn4YbtYxpeM7f5yNH1vVNbL9oApSRmJ33ajo1Jubf4r9Uj4HYkz2kJZQYrH5WUCwZBdHTyZXES9iht",
  "key1": "WcpSvU6annYLijeEe5CtvSwuVH2nsZ1jWmJhj9WcRk41WxvAS7tGZ24pxGYShhP4ZVivYYEsyXMhD66jxNFG76v",
  "key2": "2guZ8iFPvLnrwLKUvZrGqPx9deWQB3b81xiGUiRFgnZTVKDo75nicXeyVJFJSc62xGQw24AtKTFwx9BpNzWiV1hQ",
  "key3": "4KqY2MmE4hqX7LkWgkTQU1BRkSSuhrih3pRZyd4QrtEygtKJoSRZrTnkmewBvzwSoYv8pS49Xvxr9Ebz6QMALpTr",
  "key4": "3vQcc8qwi2X1CVD1i6X5wcmQ5jdhsYqyEkh2Aswwzxy5PiKMNvsDdgeUf8Y93exCinX2zNHEqEkvL7kmS7uswNvT",
  "key5": "61zLyLJ3gXNV4bkigWHRfD5uKQ8kQwydygBYccKS46vsYfpxbR1CZVjW6BxCWq15PxWQvQEWNHnoYruU8KTQpfje",
  "key6": "44474bfDA1Q6XkLBnMF1m2wniJufyPAZMWymZ614QPL4eRRocswhXw2dEQriMf4xGup3y67ZcmiCZQrqZKMWiWvN",
  "key7": "4QaYfa8iS18rN4NkNdefvqwPWVcXcCTpXckxiVbum2pUHJcJJaP9YbkUsNkmZA6YC9rm7gAGk2d6xFHdDgW6wYbB",
  "key8": "2j2A1zq4kyDjYHvqG6CSdocG1x9UFq3MNjMkVa8SD1dW1x5EFHc7MTV8cknyTKSvpSSjqNC3PKd5SZcAnMkFsqrW",
  "key9": "2ADoCEEiWH4rHndWsVXUG2nsLFkQdJR8zNC71v66h6A2g4ae4bTmpNRoSRqVrQ4BtnMZAW1pVPd5Tgst7BVdbc6d",
  "key10": "2bKEosLz2EpqNwejUt1CxR8YUFTTv8uHwgAnXJNGPVmhN82VTvpKmYAH3Wa6YCCe7g3qj7dcXx7CnmtpbsC85Fy",
  "key11": "2wMjzkk7SAajLeocvCB2q51yBEvVWwKmtrsg5Gx8Pmey8JHveBpvy7pejxUa8gtMBU1iTt3v6SiBzVmXuYBoZDFi",
  "key12": "5dKJ2mBCFksoR3obrZJT8zMRJ1CVf7XsfPtyQ3WUFfPyJq14iPiKhNBgk5zSCVhGQmhCgUJLmxxFnSaNW6xT556h",
  "key13": "su95bNhnTgLYgzK4T4kgtoR8xWoP5RvvzqKnSynXJqBY3DZJg4y8pm4Yk8c9NPth6AsVHvUhes6pk6VxLKp9gjF",
  "key14": "2Gf7tvCkQY4rLicTPdm2rQL2198BQLTBkhtTAALicxhVnGxJs3FMY8x1iBFgVm4dnkqDFfvCQr4FEh2GxL9a9Yng",
  "key15": "55nKr8vHH945QiMCymk6tcbKJfRcu12PRkUtDgT9kUVF4E1YRi1Ee6KyKW1mXL1XfkGp4aQXXtFBbTzRgFAyT9PL",
  "key16": "3WL56dG6MqH4zmhcV5W4nvC2sXizGozUvY4az1X1BQzTZf31G6J9VLfRY4NTx3WLaRb8n2HPCsZ4GBsLmFsWFdws",
  "key17": "3hTpKjjsDkSUFBzC2jEz3ko3Lgkz5LxCzH64TVEPMSafCaUKHtuDDXEnsv2WRTVotmCPEovEmFz9HUXURm5N25m3",
  "key18": "2wwNpfQwGjVoWPoYieGY4VScmj9ngKi1U6XsWQ3gttawKmBTPPFWfDgjPTw28PExZViSJ2YR97gnGXEzhmAxTrLB",
  "key19": "5FjYevoK4cN1Vs2uQmoyswCALXiCtbHM4Jof8FD4m4LTZR5BJDZ9byAoRiFrzSmJAK8chr64UZzD9sehBJmguuNh",
  "key20": "4HVgefEa3bte8kofrQTGjts615PsPExW1KbgAkdgGbbfsvypw8JoUjyH8EecoTz8GaxfuSn6zJ7ydhPQdfmPgUdC",
  "key21": "3PHdh8znZNS9UN85AzzgPmwucaHyBiGHqHFFTPgXbtBAorg6Faxib8xbQhEJfdJD9LrG6kjgq5FqQdiQHKhhKPR6",
  "key22": "33iQLZUj8abQ74xs8pzircWT2riBL6vgU3LYFKMjPFQ7W87ne3SDXgQ2RgtkAGe1Z2Urevb4ipiCuLs6RHLHzSZp",
  "key23": "4sUrNRu6XS6r27bLZHZ5Mft59tbhpfZz9yPmpx6qaTjQFoyXw8rTsnTocLmPAJxUMgaxApt9HpDXqhzLnNnBUZMt",
  "key24": "4W62pVnZk2ofN6wrPAmKar9HKbpkWz87e3xRLDDaVcC7bvmd1zyUqjxqSxCLGVt8SXVQnnB4rPY5iaHeBqLANUaU",
  "key25": "3Nz9eRnEANvQEi7yDD5pLEU4ahgLQeLZhjVmepDhqD38ZZ8rfK2u77qpsTjLcAxavfsoVgEGnjPAt6ZoMdNinh1b",
  "key26": "k9Qjtq4d3vcnrY5pZrE82L3T5SiEYa1AMpMJAT2gwWt5yTTBov1m8A64tA1HSySH13HavDTCYuit9H897YuUQ1B",
  "key27": "5a9PZ9QDBJhaLMZwNqmm21fMg5W93Zr3iErmGvDT5QZ8PbZcoiGpDuB4YaJBhYKRRz2okrJj45sxqvD6nEcUoST4",
  "key28": "4bn1f79k4EfVSQv5AXhTnGvCRfKUVbrvQL6K8XbirtUadBxjNQBGj2Kn4aULFntYQnp1F8FRADVr9GoBttWYqkZS",
  "key29": "wkFpMk4HW6EwZYryZoQWaiKLk8xfn43kzjuwd8bf3aqpNyyqWKJdHBvuZBx19zBHphFD62WYUYn8BKBV4hgFot7"
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
