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
    "3NQWSPbzvRH6gR6bEQBfxB7w9MT8qj74aSKGxGstgFUTbg4dDC4gXMo461d4m4SiTwSBxVNeR6ETzzVEs9knHDUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lnd1kBkzpSLjdL22uqowCeYHZ3iaj32gFVrGagaq7v6CEfBSwXf1oSL5JfCPPHt6PaCrNza6K2cut7MGrTqtvns",
  "key1": "2bG261o8seKLeEutUYtCvCvZrGBZ4N1HbcAPda17iS5CCy1iHZ9yCzsWnTktYhNEWDvXhPoLcE2q1mcPe4UQrr5e",
  "key2": "4QWrhNJNeozAVmbyYVWPRLfhqpzbZsoQio94a3noHEkyN7D68XYtAFLNM6p4NNJTP4VKH8iaLHKwLS57XRC42Hhx",
  "key3": "4hV9CW8dRcwhiqBLhjZ6ZESC6VXL4YZh8NUEq3MGLmmaAbE8k8BU3gV1J2f3WrHEBAsufjDXXP4ZPkor4eYpzYHV",
  "key4": "2zP5HJcXcbwpy7dbED1KoPs5QhQnHfqWRGt1uJu2naGPeZ7zcAKFK8gv5hHkVLQtZGN4riX4eJr5buEHjoK5D4AM",
  "key5": "299ewPfCFKcSY1AXaGeGj8haCPTbZLAcY1WR4eGyS7PGzz1asnd2uFJg6ZuLMWdugWUFNnUTxSyVutmvDC7dxsvt",
  "key6": "prTKFnYxsU7QH9DNFSz9tnbxZkWycTxhdDQVqNEHMfbiD6cvqP8FkkaStZ8vzL7dNeVEDNm9RtYzCJz76qZBKhZ",
  "key7": "34TkbB837NuLjekKAH2oR2aEYH8vhWT5zyDxa8n2vmdioFmqZPgCCtRLfJPquzRqZ3YaruupchibUyA6Ccd6rmuT",
  "key8": "4sSjbBg6k8A7D38wDYVyMrcxFGbZEk3Zw6xGZjcjPoQ8amzofYZzmdtzctUFZfASmyzFrN7puYU8TJSbDPqaxNZ4",
  "key9": "3Zkc25xWqtp3fVcU3k9n8WVtAnWA2bKL72JQ6t7VKo1vbtYKXWaQoNvypWGxHM7BPqeEoF6Cu1ceVEK4PzQAMoTp",
  "key10": "4pvGtjnGS5bRwgqZc56GvD4H29ydMAwYB2dnn7azYrb6XHZtecDP3Ud9yPDtnBxyRrKN5BjkdJJwq1tQKeevN6QM",
  "key11": "ALFN6TkAaRf28rVAMUu4HLJzm2uX7XHq6PivwmdKaDxXEWx5zz17dUXXf2h3E7HkBR3VT1MQRWZJGSsUfTtNg5v",
  "key12": "633Yrhw5qd4dnUtZGTNcyrLoXS65WcTFYhuTVMvMLcTArmGqeHpojVCQY4Afy7Z6cMt6QFPQP2gjKSqgsBF6sypW",
  "key13": "rZmUg8di6SbEGMSqd1mFBH9xJGKuPGjqeQfYyxWZfV2jeyDV66FsnW8JKwod2BpRrw4zLyDAyR642xGeinvULA7",
  "key14": "4qsGDSGJgeWhJGZuTB3GGJxL9iHrqho8xGc7c6PZ13YnC3MiVKY7Sbe2W54FyXaqTAKaxAJ8iz2GRfCudoQ3yKEE",
  "key15": "4hWv2APkKZALyhXGW9WCrWnUGFfmv7jGF9pFSk2GvGDFDU2YefZLQy7dG8kyUT8ZDTpLvPWFWdJfUJMxCTmStihx",
  "key16": "25woBzJxxrB5udnwCGvMfPQmvgTCzMeyZMDzEv5FiPZpZWKtHjdnToZP42nCMzxiqu4vHDo248jQTyJcf4kvh7xK",
  "key17": "5mgQA2M6FMWSGnLM5Ts7a37y3nnFo11SZi6cG4x3t1BzuwBjovZ6t4np7vyZ6bQ4VKCpUS77B6a2y7XbMjGL97D2",
  "key18": "2dEkD4BFJNNqN5bFBmCh3BHeNLvDBqyA8drVHePofqHKSCa6SudrrH5CLM4vykFFrSiDtX8c53We5WuNuDBfWPWg",
  "key19": "5fMtRyyzqjhKsjAFgNsZtYc2k7q3JXo9EoVmtidogBm31Jtk9YBc17tqQMJYFto53LyUoMJHACJL3vq4mExczABz",
  "key20": "4cXpTVpW6J9hNVwNH5sQ5KReGKmNY5ZWqvwgSzxKRsWHiqnuePb4ruAk7Bp7qeiJezBTNjsgYyizHuV7rX9MQFqq",
  "key21": "X9jLVRZiLfX9J1Um9aBTLhcKm4fen47TcL8GXK55AtugeT5aAvrSFzh1ErVfTv3d2Q76yyQwkmAqPzzaizjYeEK",
  "key22": "385CoUYuLuhV32JJmqPAZ3NFocEYwSpUbVVDqxAesLTdv7usXW8Jcnwr7idQjLr9wfgYHXV7b6kGyXWvRyaAer6E",
  "key23": "5Bgb55b8MkPDMWEiQmMP7XdPUmXnkp4MASsPDAT8Wy66UfTSx12KHshhj9GbuP4JTEpuuHiZEyeH2mRCJkqAfaYh",
  "key24": "3S9WozA9WLxr71AvQjfHzZLPvLf27N3LXwacJkBb2B4FDdaYPbK5svTpqNnjFR71fcKbY3HQEa8fpGSmyF1GncF4",
  "key25": "5UBTdzBqYuFQ5s7KwiY7rEhGikq5bXHAm6vbX95D33HtLqdxMbEbpGrg7SaUtNaSkDePQTkb8NX18im8J24UZiPL",
  "key26": "4ASgVkQvk3cYzsRaa3jKX8iBSeUrBpJfpWysvbwyvxmrrcMkTHLnmsYpmtsmGG37s6Z6boHs9YBoAKyukX7ZhFvt",
  "key27": "3kMNBCK4F8NCUfdufSgMDZaN1kByCgD3zFu7E6WQHHZyGjQm6pk28rQLxpvZX5hu9nPyYuJgZTpYot2hFHFmBGby",
  "key28": "4ZJxgJAM9MDHicZKXJqqvV7Aw4PR2AKo8NR1obwN8Bo7yvNLksZV1VMU14qkoGep4tVQs89FSWjNidWpmXL53rhz"
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
