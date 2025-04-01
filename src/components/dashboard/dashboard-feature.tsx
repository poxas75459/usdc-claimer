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
    "4omdKjje12DvCDoC2jp13gFSK1uY2hsC3zKngPPA8Yzk46PRy6skN6jKjmSq6TER9mh7xUWoFWwwd4p6rBoJsi8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXBpdqnwTHP5GBcLoV6adwWBZzscPRh2YMPPXeM73hV9kDVZSfLUGHoKUb7ZrgNieEHSM4RK5dY12B3cZW9zbDe",
  "key1": "2tzuQV7mougpopQsTXEAL8xG5pf936f82wQQDXdVUyxyfvcQPvpbZ1deyEGbBvqCHjvLyHhaDZr1ur3tjz1T1j7o",
  "key2": "4NAB4E3rhvNbqv5dxYqpbArt4sVNQn3owgQf26ZdVtN49rX2jeCwwah98bW7eWeugCrKKikgVQKSrzvHX2GiUCpq",
  "key3": "4CTiw6KbNw8V6i4fmttut9cuHzGejLk7Z75nA6Z1KX6y5fQvdCXC75s7GSpfjEDMAi3ZMmXpCVHR4qbBN3HyxkGu",
  "key4": "3PHVGr3sjbpTjd9SmHW35vvjLFknF5V2ReDGG5Gv8Gk5KCHbw1DmvaYQawNLDpN81EQQv8FQTokupu3tRHQjWroH",
  "key5": "3tVuowRRZzo9hdT2Ss7kavd9q7hhcDzqACmjEdW35Jza3LQCZbAGKAgxkuFXousrTpsWxBsnpyZueTyJpVFPLXJQ",
  "key6": "hiUkpLLy3WmrYLYicF1rQce5tAFvdURry5MegVv7QmZd54uhaDf3c2TotGmvEKzGtpSDm7tgNRCq6g7MDZihkAf",
  "key7": "4niCV6WGFaBAe8gDBLkEsDfFsWmm46KNtmYLf42LQ4JpNVHtRJ2bknXoeAMapmx7xVdgy4JpKjRmqa5NKGB9M859",
  "key8": "27GfWRprwdXPN2AQjnsfcGwafSu73MiYWUc5YS6QztaSDdUYcho3mrQVz4Fxmpq6PKz3qMQj8vziMZNaDEFR1Scp",
  "key9": "4cTZK4YmtvfTxEs5BNE5NgJFyH7oQxNQvrHogu8Rw9Ni9ybQD3gnJrh5Dx87bksK6vFj8xSrSMyv2rysjTyf62DC",
  "key10": "4AqU25LzBmrTrf651FwmHtyUBxWxRKMQb1EgGErZk7TpHuT3Z5cZDdWQSYSkcnf53rTx8QcRMPRuzK9xs2tkJ4oD",
  "key11": "2Gf62K53Qf83XU4qsi4zWiaUcbVMg7gu4CPyTQFo1gYJJrBCantXy1YbqBDLV91Nw6LdYW2RCEY9Z54gBH6iVUTe",
  "key12": "5qtephMiicQMA2jhUNZyHqKktNsQikffD6WQfEK28ZbCWygMnNifgzJ7tfjFd3ieAR9NYTp8mBT8oPHf5mkpgkmN",
  "key13": "2ArcLhN998RDSKjXotnemd5DoWMNGdR92tQtzmg4LxhBS6yD9mWz6ktvYtk73FrHvCBHJKoXdc4dWwrzrCxcUqCZ",
  "key14": "2wf46vGuGi2rFinas6RnVWY7JsScPvUDEHdDvtjZVHEHiLp4DbPZgrMCFZNRFSBZVVENVieB4hZoaxgZdCbXMGzW",
  "key15": "2zYMkteZwtSy29Hn9v2egnjdksYXNcq1fgNTnckTtF4Wy4TT9WtiJ3wgNKhrBSMupAoWrxXFix1cFSpR2H1kg1zi",
  "key16": "WPWQcMVbX1BXfTjz5Ty3XGXmKsnFpgJq4Gy1YFRB9SXZ7sJm6fX7YDYciMhBBqMzeBeBhSu9P1xNHgnXyqNeqY8",
  "key17": "jSPn3KrzxAXz8WChDUCoECHkAetShAG52agiHWfGRxxWmD4vud6mtT7KB64fopDVn6ncrBjYtJJovK7M9aRBTep",
  "key18": "4fD2xVS76nUSFBuUVtShcuUGJLb7DfrNnLt7iMNRyERrynAzsKsC4x8oUXRA3hyCJH6NkcP2FJE8xq1iWpAXdoiT",
  "key19": "4jsM4fAR9wyWYtwYXQCUznpWxr5BH6DFhMMuoCW9f9XxrA8c5CaVLxFfhRpKQCxYCnNdaTj625L5fxJ46fCKAaPM",
  "key20": "4G7jzYkpGd8bKhy3twcYk1pbdbHEMMuurUmBAUAzFsCGktHYh8uhdeQt4YEKJZ2XTb8HK9yCYEpCGd77pGHsG1vq",
  "key21": "2k78YZhxKJSrZGZnhzNVi5qpv78GsuUavCupGftNJ4G5EgxbdA8X3KRAgP7RwhQqCmoMKTNVNH9G1pAEBrgvXN12",
  "key22": "3biXFMu2dc4Z6t8td4aFXkgx4LydAvUMEQbXUzsVCub8pdK8u6yy7RrKGKmkSNb1LVnBkbiLLSWV9ivgQghdCbjR",
  "key23": "5PT4DDmDtucPtVU1Ex3u4ovNc4KfsSmZpGNLdj55wdrW96kft8KNw3etFtWQPzphKu7xYMUwUYcnJhGbaou5yT4R",
  "key24": "35eKiLpaZpgphnqqV1bUQPC6rk65k3SEGggC6CVnn9xKCANCZTqzzhvsxYonsPJFYVzRqmmZFi7LSAFHRmJhzih",
  "key25": "35aPkvc1MX7wxAXkF5XG36rTo5fHPUXQEPXXAk5L4hbxWCY6xDrDmGHJ3KCtN7WMkgaznHY5RBkyKhbX4CemmucW",
  "key26": "3cxkwv1859nBfm7tgH3MXBwkAsCKerowQ2tLVhZsRnZqqSBSQWUdhabxt25pgPiyMphsXwXsy6TuXxtB62NcgvQr",
  "key27": "3B21GCtQGrqixJYsY2QhhAxqGXyfdKEaQqLpt7ro6Dr4NeKoHF1CCfrpMadD5Md2hneLrDAJZ1SGhjKjMswQdyP5"
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
