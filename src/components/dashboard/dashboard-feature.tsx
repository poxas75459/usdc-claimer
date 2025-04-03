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
    "5j4pnreqyU9CFPovZcPWa5xg35t9gcuckD9mFkj4E3hpfC8s8JbkSDeAUVXxKhRuev7y8GYxsSzUhTYXiwWhrbXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yf21qqFNu1BCiY16HhtjXMatPpBRLy3GR6VZG7vaoAn5jSU3wpUAnwATgL2TZGosutWUmse79ZZjxHxvXqH6tiM",
  "key1": "34WbMTzyCiDCenyNGPe7jsVsVZmg6XRLKN8PZdDKeZC9pGrjepmGLSs5b2gMSmEtSyZh82oJ7vvBoLBs633gPZdt",
  "key2": "48RpsspuXtkuCXoMgrBFJbEMDejy1pcpauNPWXvs6sffzscNB9RGPsjt31QoeVeAFbz8wGBh7az4ZsJ6asw1eTWU",
  "key3": "5wqy3t3q5Fs5PUtZfyptdFxcHBS1osVuCoCuWkZo8hZVefDk4a8o7v1CvzfGkDwq68fBZ4WEazjZ23AnZMBx3Rj6",
  "key4": "4eUHjbmkxZfp45JcxECHtbqBMKhEkZNagdrTkocFvLnT9qb4KY1U3V97Lnmhk1CFkut2jSDUGGsWnrL2yAZhCyw9",
  "key5": "5hWyks1RY7CDUBs6viUFQSEwtPBq2tkndcfkuqYhzVd5etUHbUGMpPqTDTi73JnadrpdbVGeHcWNgYjnnmu8xd28",
  "key6": "2rkxLjFTcqmZXgX4u5XfWkasrxiPWA4puQZFq4AHGB7VdGPYvrK9Mqdv5ycHbKESVohLYBEa2GX5dBVkgYb8TeLH",
  "key7": "2hZ6H2Tt6eQDGHw8ccpEqNsW8Qw3X8bynKEbJtaLFk2CM91MK1MHqw8p5owA8SASE3rLaeaeiFu7u9Qp95722gRY",
  "key8": "2hrFW9h6Nf9qh2PvcGiYqdWL7vbxBRvSz1wvnsW6AmghD7BVnbhYiRNRNZfxD4H9BKqe1WYhta6CKQa7Q7GKQ4ZS",
  "key9": "2mUU6tL32EyzhbfGX42tEVider1b35adVroVsMd5RgxMspakLpS8sBarvsZXHCuvDQUY9FUD4u6wUCo6AEr8fTB",
  "key10": "3FzaFKcUHcS3RNn9uXZMh5GnTUAmeuHuZ9D3mZURyvoTdot7bcBq4Z82BxCTk9yRdufFfiHFvuhFREGgkWRpZWRJ",
  "key11": "2rEJMgKTNwUCE4HikRxA6PuVtBf8G7ipCVYKgXFySN8YLaFTRk2X1s7G1o4dQKBwBgrphJ2y7od4QjXXHpfz9HuU",
  "key12": "666147EacXjudrEaAvMRLXMbJYk66kQmXCoo5mjujwV45DifWXe3WrWS1pJnqXerMuS9AdR57ikS7CfyXTEiRPyb",
  "key13": "5LAU3WtG9VPWizdMUZu1DBtaqyaPo4V5izgcYGmBTzdN3t5jYtjywx4UUETgUxEaHtTmmYKRGWYf6huRdm8xiqQ",
  "key14": "2ad7Cno5iECAgXJnBTnBpWezdKxZMULr1Uj1iWvxa5Ti92N91xYEUe7arAicAa6PJ233CWKXfeV8uzhp9B1Vt3YE",
  "key15": "5pKKKnUNyhhoQ5sh72yEx5u6B7vzd9zrnQAt4X5BYgA5ib5U9XuATAZVRtmBDkajcG5fsEySiL5Ya5JtcGdeEYnE",
  "key16": "3DC9huQMUmxkxEpqXqjVCRDGXXmNTcjXiGLJrqLbkVS4cafGDCvRcY7YmvR1Fef5BSjTQMK6jt6PxBkzTRCyqAxE",
  "key17": "JqtzvXJJLLZ4rEpQd3zX1TrMEQBmthPMe6Fhy4EhKfyhi9n9kabHcxR8wxJ3bpJkXS2s4SS2EeSp7EsgFQyEQmV",
  "key18": "5w9n6jcb1FQ6G6F77PQiW6JZjmzrRRmn6W23jqvs8mn5rCDCZcWjAfHgTto1eD2xzHRvCUvA9z3KhPiKjYJKtG4a",
  "key19": "51zAt8CMpKFmws4gJTn96cA7nqBdYMZDSfWdciX8GidJzBQzaZaDFKyzAbkaWqF59ymAuyFGxMSY9ApJNXF3JnXr",
  "key20": "5jKbTfUCCZp7mQgdgVeaPZrQNi31T1SRpbojYzgHFgqrVYDFWebkAhTiLjh7W4crivHCew2TutixJwZ8jBkFQFhx",
  "key21": "3FYSiaurMjJ49y7KaDJX3VLa1X7HF3wJwViGuyehgPhcTaYJgTXRbQ74iPXYQPQf7H1efuQhQjsuAJmPqj9u2zrk",
  "key22": "qcPqZsTsDZ3UJRifCFBrJNi4VikuZTkfN8VvzZahuGkmcxEiSAofqGF6ub14KvWxdk3A4G1SuYBivQ6JDayZ78d",
  "key23": "2etG935t5y8r5ivruuDeu3joevGj6FL5f93VynaWbdYUchJKVVj3GuVnVZ7cqiy4nJrsXgAizv9NMVPcaNG9Xa8t",
  "key24": "2iezCHgEEJ447UZF233thwhuFy7gGFTQ6sMkLjpifVdeemmwkGxoeBBEarzy4jbuEVWrPuvAjvUQV2p4io1Gc7r5",
  "key25": "2QHJbmRkfRWeQfSa48Zx7J35pWo5wn1jmp5rJ2LWiCrApCVf2KhTJa6FY61HCkEdX21JwQeFgXpcxyoMdkbUW1kP",
  "key26": "5KT4GDfdV37CeGTmA5Gy7m3kZ9xv8mhH2cvFbrRFboufnYte4kWATMCroQVxDWdo2bByGiWA2EUUM2tPtY4Wf5ic",
  "key27": "4ZE59UsKQu75qAmgBNxgaawAaPLEab3L2PeaxT1VD85oaLNmgJm69knC5LRNvUCsPMTzVQr1LXtKzryfLqnopsBQ",
  "key28": "5MjFuafh9Dp8Fw1Tmm3noQBsTV9kLuMa96Pp13d79van31eW4ecfpuMXqxpHzAyfNJnVKu3op8aaWNfdc4Ewhbpk",
  "key29": "2sBbPxE2HaKWSSNDi22eyWKne5kFsW4DMjccKLrLNZqGWqCgEWWxPhtvnRxdsUy9KPRBw6nhc5FzrNWXuD5Kzfff",
  "key30": "5yBGFFdBCkgXMpFshmjuLj3u8583DgwLqEpP7fTtuLJGNxRsZ8CGvuvdzQuVZd5ju2vxJMrU9xrbmak5kuir9MPn",
  "key31": "38FMQhZGWeMinDHzU67sibwXWq16ZVLzeMVL3vfdytPsS1VZmCCpcj9thCkUaWfSUp2rKm6vNUbimPJ8Lo7ELNuM",
  "key32": "Ger6vP6Y2Bp5jrXg8M5wgGquib79beR7MnNyWaYz8jBH3eR8j7oLTLsY5NGUEV8YCS486SkZiPs776tad7wMWTn"
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
