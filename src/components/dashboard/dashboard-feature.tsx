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
    "33bFaMqP9RDk2safBA9gyQQbz35RL9WctqNEEQCCq2CUZnVCC7KPqGQKcNpMAkCwTsVfD1hPU48AH6HFJ1oSqCtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523mL7AWtpN2Na9p3DdrUxTs1iGk2mXAoaEEFLnV6jCuhHXoYWSS39Uzu3XYwu3EF7msgoG2u9vfNYPCDHuhBmUk",
  "key1": "3zxAHxNMWRoe8TXi2ssSkcnHb4AGiEG2g55wKyyHLpDAbtickvWUFtC1WuMhCvg87BJE1vHjNBQt67566ay7pHHz",
  "key2": "26tL3ZUTAdoWc7SdRvgFdzTbs4CY3wmR9uqia761X1oSVrqTj3VNkyJu8b9EB4aXbaK4oQ2itpsqzAPKbidHhgmQ",
  "key3": "3JEu8feiCxrNC4KmobzTXhxBSSsNiVZkRsQ9nmR1JTpLtySuCw6VSfN9YNbxptAN4iF27k8UzDnLdLaZpcS2WWS2",
  "key4": "3DSe1ckdFYAbDkAHpq46Hs7HYpG3gTdD7KQ1YezWGzG5MAzRwub9xox4V8unJ1ZiDx5bQTNk3wJ4Pis93zhct1hB",
  "key5": "39xoqUGnRTsA9AHaHWAJ721a4Dnq9hPj6HkdNpveTrBWRLUYXWa3oWbCmKp8j3cwQPREyQvw7HmNmREztE5zJVnk",
  "key6": "3fumgkGi84cHqJj6d4n8NEKcuv7TJsMtQDQN3u3xRr9E2uQzbNuyoWP3Aw52HWfm4YN2vcezHGbJ467HQA6xfLEM",
  "key7": "5Sm8YAZRbBtZG4fFdHNimLGyhuNLnbBjuqGRuYm8HG4TEdSZBCVBjTrMQYuutvKxmqRwsLXmeYTmNSNa85qNxJmW",
  "key8": "4c2KPFpJyz9h915oWC4skuyTV6wJjpe8ewxXvmh6r7t2A3t52B3RRCakwVPg3ETwZLWCvRx8sMEnj3tFnUyJcXq7",
  "key9": "5pyYbYxaDdCAVL44GbSaPCBB4SYtJBgQp5gmQ5fMzLPYCbdfcuJbFjdu7m4zMqShtZUNL6hKdvXaSQAS8gNmi7KH",
  "key10": "5pwmKPu7G6cBmfovGQBA8eQmDTKLMeZd7pXSfD1jywVmVa3o9drtcKCNpNjyMHe818YPSZTxEvDnMjfBTv9NGDww",
  "key11": "4AxzDXcEwydu3SgFrHJD2wauo1pjPgSH56WT1eV8dwh8RXFBpAzjNXSxjCMHPFqESaMcFSvCDF7sscaeQ8WLErLF",
  "key12": "655cGTFqJ57cxgPdhZKGbHKxsAXQSVZXeAweBEHYJqjVJmqvKPhtzEhfmF9kJmCHDsKqKpxZsxafR2xT4itF9g9C",
  "key13": "3U9JLRtWi7Wqctnjrhoy6G8R2EQmvVpsxdYqmQj7XGdqKXktNmtK8oVw7swznxQwJfDsRzvLL5M8eid7MY3pG4qy",
  "key14": "5D99bfw9xSMWHHAfQXz8ECZu5hMPFg11DexYoDuZTx9SH8YHFVwB5jnRVDZsxrmPH7euhb2Cs3t1cWq4qZYuBjum",
  "key15": "dctpzrnuvz3A9eVPXDebjZevcqzx3iPAhz7jZUtDCoLgApBhWNT1DTvK1S2978aJNBMrUP93rfkTKjkCMpSjEY9",
  "key16": "3ARsvwZMBAX31YS8DDdWPqzDaJvnZrsi912cgzREg4xfsvRmuJbbqayxMP6UtTPcNMUyf37aKVrCcSGcajjyFJsG",
  "key17": "5obum9HYN4nNbTpM8CDcLfYGj2xXEeVaRhrmNrbvN5dHQbFmhyWoYugMY5aE11Fj3DqYQeedjaRwqN1MqptvNGTF",
  "key18": "2guqpa8HD8p1wY1uWYVirsYRs3PQAqhJ7nWxjcBi1pn9XS5M7K1HmSggUw2o1cdBQueGs1deXdZFxevVyMyJSWMv",
  "key19": "2pWNqb6wqfVEDxHDwh1sD62DVCs3PSykbn8Z5H8GiS9j8Af7T79tNXkm2wfpZigziYzWwpc44H6GQ4XVvRQ75YSs",
  "key20": "5uAAKtYEYj688KLKhnXU9a5r3aSxfiVqP2LchmVda7cgEAkexP7J1QmWJmhkKpsCHdxscNRNkpcYCFr9TKhFMBJH",
  "key21": "428wzgMCgRCASnRMYSMLQXccUs9nKpBASiDLBXfCvxdqStfVJx4pfpS6tzRV3XWkVcBBf2iSdqbVpAXsEYmGFxp2",
  "key22": "58x3nbjXeZ7KPos6Hpz4jiLxkbxVek9AXDSoqAZhAioHAHRSgybYJ5bkMg5mfyRp5KYKaAhhVxvPCQCCposnJuzG",
  "key23": "2uTrrdSrYNa3eAyuDtVx1iM7dd6cZpbuYWX6dt988YhuiMeNihNBzQLiDHLidQ5i3iXWe15uuxWx5xstp2kJagEM",
  "key24": "4PdAuh6Lbkth7dqF1LGzzmRxi6kXuQftx9LsEfo3kJg1U6p5kAhXczWhqfrABxiUAdvjNbJ1AjKdvUYcfzUwnu3k",
  "key25": "2rPcCuoJKksMsuTJNmC2CuAAGrSuNy61zMN3QbmRKNxSjbzVsTieg9DLqEZN8aUay8VbMK8qFLDHgM3cwLw8XQ5V",
  "key26": "4sxmJCsKgqFSh6rgk7MbCsDEM7XKcyWSus97AquukrPbiETZ3MEtunDrNW8i1EFUqoFiXPTqHK8zZgm7ZXWYtwwZ",
  "key27": "uN6GMH4ui8GwhAQTEQrCCJXMjekKnxYwW5dqr7zQZA8okoSwEmudXTz6MZpsR7F6hYzXunE87XygERFo3CY58yN",
  "key28": "2KR4kAQ6k4pvKjtqSdTXaZXkKfpELAhsNHW8gcFnRYkpn9Y9B7exYwxXkPtWQu6Pep9jZZ6wcbUmsxxH3yd7mASY"
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
