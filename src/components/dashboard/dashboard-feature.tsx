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
    "5tZkX7GahNxFWZaGvAx3HxAdeK2ybw8a16ohdnkYAk95T3iRXsTUECRn4AUfWpLNqhMa1k1mBxJUoVQiic9xz9VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kmb1awk12Z8wxhzDui2HyY1rY7ejrZZkoRPescdp9WXZEkLYM8KYh712YGnzmdH2L7S6qs6tJhCez7Ur3iwQJPU",
  "key1": "doDUfJdxiCC2JDks3dPUtvtkyhT9zmfuRxibzrMhKpWkAGovt8gb8aWvsLf8o2kvAw1cHWDdJDDU2yeQLaxYzT9",
  "key2": "5yU18oMJHxpVJGGXUJGuSvnRnNjhtPB3z33riT3qn1Yr6ogkYPaa5WSseRiM5Hjj4zkTn2PZSqWtsUpXrBq6QCje",
  "key3": "5WHm4unUzpbzYrVKyryH52E2jgqFeiNTc5i5insTTLKRoyeD8hqyRMLXFc7BjmB6zkGBZ9S3M2UbZNS9XhM86kr4",
  "key4": "2oUQPZkbpG2KuvHun9uQ7uYnH3pxhRDBnLW9WuTQHJhjedPXYQx6RJ6tRVeE1PP5kGqPFEebQzYwbowMfzXDExXU",
  "key5": "5A2JD9knmc2mtKJaM6yCzGdArUkUkm4if51wKQfFV7orSs9mmw6vts8pdyUhPQ5gDuwL8Wyqgr2q5HSrsfuaBXtF",
  "key6": "4hgKCgkNijaErLnsjKWKKfyuXCdDLndapQKFhDYPC21gJSSYKxkV3m6T2MfyJzccPKMMm6hryRe6CuYSUPtrxgcP",
  "key7": "5x1xkzCBud9b5xHWKjnjqeynK5GPQuhDFGTzMYTAMkz5hGKRn3xfKK9AdkuZga7s4KNFwMpQzAKwg9TTLoeuEAFJ",
  "key8": "3gapdK5aPEk7QhSPV6a2eMHPknAXy8EjTnMkANnokDZmzx2RusKxmoQUeRMgzgqKUbf3zLMqYPns3gDK6JphkS6k",
  "key9": "unR6yEFq1GCaumw3c9eaQat22Ut3JhK7a62kH3uaCm5RKQBppsLMzAm6eAr93CbaFgkB3YAJMdV9ERmVLAVgqBB",
  "key10": "45t1PeuxrBcrC9xZ2hd7pZw93awDSFocgzBP2NNrQg3qhEzYFGzH7bjzkh3iS69mAeePGWyBw4yW4DPvte9JZDtH",
  "key11": "4SjtviNX91DQCfJFkYt3WERTK4EPgzuCjTCcWfSzrUJZ14KRAwzMiJeBLeMAkDT2tpmfkPVZxCfTFJVooU8UXJUV",
  "key12": "5Pp5hFNWVyE1BVGpvyVuNRioAdCL74MvuUrWmfu4hboubLAYd7UcitRVHaJFxp2XjwHDdJgai61zv73VLMqzcFbb",
  "key13": "5rEeXwTq4JEzAjV77RcaPnBssWLQVVoRCBD4YkZMu9NnvfvjoqGQQHDe8t4UGjEo6soR8LbEmqRHu7HXSVovQhtm",
  "key14": "4hsCPnFTrkddVJBYtEMbJcB4KygYrRoiatSyZR3zZM28gxrjxxevTotoEgjKaDr7fSqD1TZoRBZeb6si9fPeAUBG",
  "key15": "2NRrAYTp8XrzJGWQiLnozWfEH6c3XRHTRvPHZWcGgPPuCG6brBibdncYXQ7rpJPixMgivdhagYCC7gjDKPc6PUwx",
  "key16": "u1grgNeJmyjtNaaZh1y7Vh53Kujjk157bzPqjUh2MeHoXhXkJ1k6gQsqdEu2axLjew3vEXGDSkFyNGhodMhAJML",
  "key17": "3m25rL48M6FoboRw9M1KrD1rYtnkY8xWn4JieYPyyuwqjDK4ksDu7RtEBgP2adUkdfvpyB2MXKX2qi4zF6mBk5zv",
  "key18": "5eZofSKAkAfGis1n3ahZh1TPvppjGvbnj2chRkkxoG7S54PPXQhzEnT3fPoE9TwD1oBAyRKd5NynwF1PiTa5mwwd",
  "key19": "37ugDjsvQ7SuLjdyfP4ka4XA2HmZTKjGw4biyFzc3BMmyGWpqxse5xpzqbCG5gG4FtxpMaVDvGjUsSGiNMjSXsN3",
  "key20": "5pQ5cwLjRgjUbET6TJ6VSVRBTYd5BqaJKYXWiLAyt3wUna8wqEDNW1tS5UjaXcSNFdXJe5oowZQ5zEcbSCoCXUCA",
  "key21": "48M6TkLDGu4LZZ9FKeLNcrTCYM6Nv2QhTui6oCnf3Ke7ForpPNgnPsF2Mh4xPjgpMW8i1AmfaPUUWYvyNRXQGSc6",
  "key22": "2uSTCfcPb4Y1iEezpBrPr8kYib9BRSGNX3iGRLF4vL3y5vc15skqABGhKN7SHgS8d677uD8rGt3iE23ir565PxTk",
  "key23": "2qENZdxo37EpAKkjgWNSZcaToXyjPUc8iFG5bVLZUcjJMfoN4Q7YwGKRx8ZYD6D7ct2UjNmsdHVxnhMGAcJSnHPj",
  "key24": "22kBgDfLqfNZ4335ofkQKW1gCMb8FMwWPfmfkitHsGvxDaUK35RPiEwmSHb7mnaUHD3bsNAZQFsSX8Av7PMEfVJU",
  "key25": "5yKVqGGUj6e45v2ECiF29V4VDdiAtGwySimEPH2E86BPEcstvu8CAmsvJbxEirWE6FBysuuQN138YBnzmWeoEo31",
  "key26": "258AgYBM5oKmoXdZVMwi9Xe9PUQpDHEKR7j92eQxr2suV4FbHeeqkgAfUhGWBY5qHEZrKJo3GCKoiBWbECk4cQwW",
  "key27": "4kVNPQ28QrHMsP3F1fp5CWYHuMUgCLCFsyVdWG8bH4NBLsARAUQ153gqzLcmiM1hDU4YTm9GEMTrCHTFFp3dxJvM",
  "key28": "xESGuQSStt69o2yuHyXpEkr7QramtcMhC2REwZwHTcKV9VE1FPr43TLMZJUaK46MEL8WCH9ksMAmDh8BTP6cedn",
  "key29": "4VJkzykjug4TgYqRpyabSCzh9UjFtLY6JAvg3Uvp9SSmY41jZKtAMh8Txmtx1q7UhqqnCUDmPEbTse9gB5qPnLdH",
  "key30": "2FR7AdTrrqPzWzxDbZfe72PX89PZFSvFRtrWMLTXreKabHGzu2cJ74V2hdjU2hubizptRWXgxT8GMrLuYQJuAHZA",
  "key31": "4MzNg6TcM8ybzbd7agg8ZXYgkmFfumQ6zPvPNtrnjzuyxUYntvAqRoeKPnSTveVTxTUMp3wRaeJ3f133ko7F5voW",
  "key32": "48Ef155dWSyUt6qzQH3BPB9TCJTcHp3VXNaBQ3GAwwQaRK9obXksxFVAiXGnWdEU44WUutDsB7AUfWyM63aMjRdx",
  "key33": "4bKFwNmbXYPvPfBDTFnN7dFMJUuXB6ML1bEk7TKZosRameei1g9ShnyWh2Tu5keYduJqaJ7XBfx42mHx7VbrsUxc",
  "key34": "4FBWPMLLwe24vGJNqqTruqN15H9F7U2KaKf14nXQm2hKHN2adMvBrH1iohSSiwsVsWwXf27x8i8Jx5coAQDhWYVE",
  "key35": "WZkv4z7ZhkY8H1GEbjCwgAVM1LBYCqBk6DMC5HuhEwZ13hka7jYLFWUi49eamUCTVPrwamtu2TDVMZWHrEsrhNE",
  "key36": "5QgTbK4ahqxGB2coXoX5pLdsaGgbkEGezZAs6KsEWG8nq5CtriWXT72MzGHKrDQaYSQyP32AAtEJvaTaCsugPXQs",
  "key37": "4v2bb2v9UjTneiKXMA5PfNjeMFHsNF1enNyverMeta6cQ5SDefqjFHtTdtWZM3GcocbNkkQwSjs2RBz2UykmYsRW",
  "key38": "3LNWepfn15uJA4s8faT4DaSj4phsw3M6wwG7oaTPWqZobNnUVLNy4WfiUhZmNViNkfx82LgjibojrnSu9a6uPvqF",
  "key39": "5SsHhj9T8D5HNtWDVcef77TxETFm8PGM3hTQeDX65mnrwFCS75paGumeyYEe9KSUfuYft4PKNfC8iGe8WMkeqDkC",
  "key40": "cnqy17Qz4gzSo7aVUXjKZfMNgSPNvRVU5mXYhju2BvdE7ykmGSLtdwvgoyBTyYTCrzTDiMdpymjFavNMTEKpeT4",
  "key41": "4NpJKoNxcam388YDBFrcdTkVxNjq2czPXD3Lnt67AgY8sa1qP4DH3bUYLbYJ17rUrpa3dXFCwwzgMetEZdrabsD3",
  "key42": "3pq6VT4DRCrQ4vpfxU9UwkJY1TmVJXHQf696QTcji1tMDP1ynTSrZe3pkAVU6fZpe866WiCnEEJDWc4J9SoszbTA",
  "key43": "55zJP5kq8FfRVAzEzryjjFb3HSr2C4xyzKsoRRNmcW2smKygsS1hEyPD9R98Yyjc4rqCYsTBVL7GSpXxatpRGCHc"
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
