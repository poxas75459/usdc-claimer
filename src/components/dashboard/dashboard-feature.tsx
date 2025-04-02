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
    "4bMPcBfTUugkwFotQs7VBbyW5inHEs1VcjzjyNnNCS2k2g8uvcxLceN7ZWCwMKj2XGM5UkGbChZAjRzfsQnU8tqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWu1Ya4VVCzTfLC52ktqZ3CgTVuiVSzPCxnfg88Tq1FQgE9orXCDYqsfKBGU773Bm4vaXLTURDd5nT7PAYA8zpf",
  "key1": "5CYwX5rP5XmuerQQ2NgMEFiodz6FW5Ex1yt6JNTUhVGhmbT7XV79MnJQxPQGuaj5jDg5DuCQUs5WwuXtq57jtQqN",
  "key2": "4Fs98hgqGzhn9sZFjvVNekv1syeFtrviZTRVfpre1FufDMdV7mT3tfBreJLigeczJmAE8NJWG4hZb7gJFExevqL8",
  "key3": "hjjr4tdqeX2h35fYKNxb7TEVq4S9bn4bNdJ286qTZ7NFYFLintzCoW9hSu9njP83SeYBC4Jxt9T3zcqh9jaKYCL",
  "key4": "3r5gnnEJ1G71SH1E3AP89Z6LEYvPvMf54EF4opgYwboXYCKQet8j8VBsiNhAL5S1CTDL8RyaTp3MwVAh9UeFiFeY",
  "key5": "MWhE3icr5fXPzrBj816uoprNCnkTbbJFRV787KQkqyhWRj93bCytLumKdiQ54BZptx5SBXHS2tbV3Kgtqx9avPU",
  "key6": "2LpV3Zcffyqsk1xaRK8sCf4qzaJyQeZz8dv4GQTgiALm2b4SjVVYn7WUEeGSX97TAZxdcLnpe8RznWXjvbp26tUW",
  "key7": "31NvFQ9edxUeYmiavyVbcYHbAEGWHY2k7sk2joZeE6LEv36nHVgaFbCnZLCCfkZn2Q2b8W8esfBwhJhR9d8omAko",
  "key8": "5L7dzX9BeZ3GATVyHNCSTCGcQpHmP5FopMo8RGAmDSRyWhMFbmtJgYQA1r7RaubWff6LZ9xKqG2QSv6DxQgNxcDJ",
  "key9": "3NwJGPN28BMjDQRAbgife18xtegbygfYoHVCgFqXCkCEnYK7nE6V1Yia2V9W6P89GZM8wEy2dEiQQNvEJGPNo5Ev",
  "key10": "5URmvNcaL2DjZcK3G2wAL9r5RiwkvhU65S8L9dJEw2jnCJr8H1jjFdH3ZNfkiSwAgv8tK1xU1zXhLCogXmcJjmKY",
  "key11": "289r5eJXWGfTAwsqDN76m7RKzCSbmfH1Y6vkB9CtS7u539BVVUTdf9s3rnc8YnHM4jSdJGhuRDREaVLm99Fjoera",
  "key12": "MbsNzYv6kphmWEB1rUjqfyKheZwngHMA1ZeDnPsHZc7ZDBYRDDFuBF2bDB3efLNtvmgKNWAxbEF6m7B5X4fdmNg",
  "key13": "22mRZY1i4zmWjYc7eKW2vQ1acF2oAGxsNWuNtfd126xkfe5rovx1PSDeugQ2bxtRCedGe4dh8JMNXyuv1L7ijiss",
  "key14": "24vitkDXHh5N8ZAuy13bjf9SbMuPXVANBYkBz9GxgzmUcbY4xdhExRVYa1WqLt2zYrV9Uh2F7g8KMozJwAPgL3B8",
  "key15": "2v2jLf59ShFXUkhpr5uNa58zRDiZUz6Rhp9Y4KUsmmDiYDh55KAVoJQ2rvkt2bFk4FLWxCjs6SQYn88gYoQGsAc5",
  "key16": "n5cR8BQj87uyq9cwM6tUKuq3ZQTas4WeSHK7zj8PdhpJEk2rTaqeB3ZadQjB6Kfpnou4XbsDVuFHntNNyyL2Ds4",
  "key17": "437Dow8C4muUEV23BWW9mMeL2UG1qWZo6aPEFNkxKoWS7FZLFganPujeqq8VoMA9Fs2rTgotgFo8skZ92pmTro3g",
  "key18": "3kALjeQTYs8J78zDwhxbNRYLJM82s5Mtadcpk7XqtANVddCim2z9vSUvkUYa8s8awcRdY34EVwatNCYx9nCSVTf7",
  "key19": "5NGX7AZSMftkxzUeSaCbWRuZLjagBhZ1WLzoMunHTdGH7yMNfe2ucfdAFXmgr5aBDEy4m6LXeKFMctqo2crtVndm",
  "key20": "5QZbsrBZipZAUU7RxSPESVgLz76RiVSfakKJtm3i6m4fffJeVQxECdi9YaPBFrYwyNMRQtNTtCs3nnxsthKMaagN",
  "key21": "5dAxZdMNB5oGmEVVFzVsQkHXUrcTgMHXCajUa5n2GLjV9AaqiqqExAcvUdAAw44ugjR4j3xNFJ49dHe9RhyjbaCK",
  "key22": "29TLVjMUBq9wi3weQyQiGSFvhWoZqgpEWJq1A6dLaTJi2ZnCBVT9EVhRRrW3dbgFELxNXvACrL6kNWJG8YS4eVpE",
  "key23": "2ePS7ScdYjSxTUMWXMmtDUA3fDnzWvvVhdZwXsgSEDX4zFRQEJjVRMP36xweeCrSVGubvLP7W3six5oUR3mLAMax",
  "key24": "4tAGQEHu6kHsFHmU1AU1qAdAWodVS9DaNRFUm68QaUAeMFVDEfWP2hQdtGXtkHZzjLd27bTsnar8rJwVyfzeFJTC",
  "key25": "4KdnXyf7XEsJaxup8HkGbegHgfQfuahC2sgPecp3181JYaxpoVeJWkQsaMedMickav3EaTpbfSguW67ibqdAemoL",
  "key26": "2gL3A9jt6B53Sd6QkocL4PpN3pWQLc4t5QtXVd5DzxF3exhAjoR8usNphbJkhRVt4Q99WMg187rpU1PyiMsnUuZ4",
  "key27": "4GLngAy134gMH1fZSDAK3Rjuw528qvWz3K3PkE9Lr131494YJRGkEA9ETqnFB9n4XW1JRWEhHcMq3fQpCFGR8eh1",
  "key28": "22JhYV36sKUdTPJyJ46geqwvhTX1abdfAokTGTmCLqEMFrA1DCBdn3imaJ9fvZ8nVRaFGsntJqx9TSVLTm9dRvea",
  "key29": "5akkxZEB5na5s3VLsPCB7U6cYBF2vytgQ89yuduSNVZXTuqN2u51s1LZ4XwApf8n3anbDHfFaeVi6i88NzxEw2DN",
  "key30": "4JMXsdBJq1qGe9pQ47NHRRAnRht9Gh9ucAZ563MsU8f2Tp862KvcZDpUHzuMvAA24C9jeQo7iLf4HKZcZMgTMZfq",
  "key31": "23mxsxBdzaYGMvozHatZbQSHzxN6czE2qyp55udzQWboMmRqp7eJQxYBYJoBb5rEdRKMzHe8qaiLMCLCVenJAQEb"
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
