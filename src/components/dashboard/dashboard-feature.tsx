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
    "63UV156x7QwFjMUPgeLd649aTP8QXZtQDgGX4qTvW1gLG1F57yP8imR35rXCeSknKUZJ9j8qgpf8MUq3YCexBBDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhXM3UoqsSJ5kHzYD6ATs8Avwct28o5CL8P1mPC5G5xLbt9cWd2xhUeFF5XTaTUt34HbHFnTzRrR9ACFaFkySYG",
  "key1": "4uTjsuGqEVFCGTd2h4LRGkJd8jqGZK2sHHnnLcaXHyjPQ7YqUbgrF3bKsBgzDGiuL4u4jTmh3A8KiXccrXY4otxK",
  "key2": "3E531NgnwA6QZEYwevREpyJ4RmcWiUEpNpFsVCU2E25qnuDr3dEH4JMbTBxpteEMetqbMT8otG4kB7tontvnf55y",
  "key3": "4QmGDFGytQvRe546NmeGiCUad7qqZJWShzuZzR1hRiVki2Qqnr3oqv3CCdFoYQH9wjTTEdfo7ABGABJrBfLqLL1k",
  "key4": "4g96Ex8HnZZefDz5EED6GzFNP3Ne2SzmL5ykuEbqwZmqgCbRqZKUkYQu6iMyENPsuytq4us9eoRcx9bP4Eex5b7z",
  "key5": "4rqbj8a4QJKXAn6Q62RE9DawK4SFZ5RKgKSjRaubSwagD6Fnu7KZEGiJFxAatUkFjDFaS8giev4joe9gCYf1h5dV",
  "key6": "37vU77VRRuiK7P3en4EqmVw4ntfeEL5oYMo9NQJcf1sSGC1irCHxWByY3Ltzyr5GHoxTChJFPKRbL5BBhJHkDC58",
  "key7": "3MxvYwMhV4r2wgepDsdjJ6vMRRSX37cv48xvWqQZX1piw1Ji4m8HEPfteguVTAMsuHhxqJRwxMK5jzDGsp2VrCRD",
  "key8": "2dH42jtLJCZBRSkis2NuQRX3MkPKt947fcehMikn1WuLWDw263YGFnDL1pF5MnEhTuqxtgXrJjefTrgCrKYoz6Lm",
  "key9": "5XYyKcjGA73ZnRkwcwGxCKwuinFKRpMTricNEKDFQJRMYRCY6DDvmWnmvdLiBZoVDHLSxtMZrpuUEihnUkn9Q5MG",
  "key10": "2vLoaCnhCz67seK5w1FhFMq9ErZbT1QTasmAFRVSDdcPCT4MTHUzjhBVHY2tyMB3wNLSoQQAh7sqyr8jsboQZjTg",
  "key11": "wzw8KJ71ErWtzHtQe229JALoiutsSqS8CpUw76UkmmvPx1s7GNnTRuU4u3JqFvfSFr97TVMmdNvXDMdf8quqXa1",
  "key12": "4x9rEgoVvKwGgPDXckdD9RHk6u353z9iQpjhso2Qdqdt4d6V7b3XkXfqiYct2V6w13PjAZitEYwHaJnKkeCx5mrL",
  "key13": "2hLV1NzwwJWuobrfSi1kHnr2NdMKLhxCvGKPv7TMZeEHcus4h1UcSbJB9LEhTu8rNkNS3AigMJAPnfzf3JTVPx1F",
  "key14": "wpHTWjhSMYgepGQuYX1HGX41vKBD1rGLxSgaBUebjwsU8FChxj6k5m6NC16MF1isyWHjXiiqxJ4odSjY5z92GsH",
  "key15": "4StUkzzwySiEENoRQoGrSqgje59deW1BxB9TLiiKpHEWgqt31zVTUH5cydDw5MJEpFm7QQQqj7Drp7npsKBE3Dbk",
  "key16": "4XZTpNmUEXXetByz48n4K37dqBbbpRGJvnCfbXSZCSpXdoRWpai43kJr7w36hEKqZhbwSw9umNvzgkj9iYNyLcn1",
  "key17": "2M6LWvPtjwrjKNBGbHytxhvHtpXwsSWvKRUDxRp7Hs98A2fq88H6vmGSSYaPSC5MDjvexMtSBMBrWydhk3eMUpHq",
  "key18": "3PKy21xeusFP58Wv4YVZWrTEoGN38DaQ6UkbvZkQp9S6fx8JyKVyXhLin4FPdLgvv6nKuCLHdJkp4VrnQtP5WHJu",
  "key19": "2FvWBcqEe4YhGaPVbcXs6nsJDHQJdp7S4XkuQpHwaFiwEshkpEJahJjqZUdTnrSNbZh3R2Dyb8DStZ2tVPbUqjSC",
  "key20": "35bn3VwJvGHTgyr62aA3via8BUzZjtAMe8vgLZQ3hiQ53CEqW2Aodd8dv4Tj8DXSLC9njZFVhPyevh9MZG8RJJcu",
  "key21": "Cn2zF1A4wUeYhhtLjHw8SJrRckRA4uCU4taRCbMGrzAC67gEFqsvPTSyYfpjhgfv8F7hQFtvTgwT33pUjHbNGPn",
  "key22": "62bfConLMEbNhkejAi3NmdnsbcUhcaf4xdj8wP89kG7pTB83ZjbXkNjAWoK5VBnveEfJzdYUmZWbiEyryNUH29ik",
  "key23": "5cVZjTPA9y9zpGNi3ZJPn1em5XpLde5dgkofqmgcG6699ges5NRj8ucwnzk3ZH7HZJ6xMD8Cfbsa1sBvZEF6Ae7e",
  "key24": "4eGhEs8xDg2Gdbat3aNfmSA9GNAxBnYBBMYbA4zG9fR6JzxA2wfkFq5f4xH1Vi2QxWFjE1gA7VpqZKpw7C6ET4Pd",
  "key25": "3p2ckmCMFfswqo9CKQqfoue4jXqLqzLHSE5wnHaUj5kRYGpzhwciGPEoVErEfsCqBdNkM16anpe4eEbufZy3uoW2",
  "key26": "655mhq4BYzUXn3pDHsFrSggPAnq6NaC4M7X1fJw5ddccEpda8V9paJdSwtQUoutTRXGE4QvzSSRRWTV1FnWWivYd",
  "key27": "1ni8PoDeXX9TwcTUXAZGVBJGmaqaqTk8TgAvLYkJANQNWQQvuGwv2Yw5rxMjBhbzcPrWCNt3VbXBk53QqoeZNCz",
  "key28": "4NM88doNhXBymZYfEeoHdYAY49xbYG3PhNWnPqPsTXF9obDmczbJUoVGQQAe5oFpCXpBTDKYQzbA89nSx6t2PBjB",
  "key29": "5jj9bAZNV1QNX6bwFo9BCaC2jkfkBsZgpKvA4eS6s7eGXw2Z5iXSDPebAg3zxS6eTcXZ4hzTGy8jgENcpNfVFegp",
  "key30": "4AGrFyjEYgdKwPsKALzEBocRSxjJQxrw6XJqobj5ohhSpwLELAXUH1fjbMQeWBPho1x7PzH97Uo9hJPsNLjE1M9Z",
  "key31": "5Ueu9jCtKbAE9xiXau9AtFETKRvyEZA1ZRZDDv1aPmjbH6ubugf32x7PBSYTkLwVUyTbG4agF7vALg1pk4mh4P8p",
  "key32": "3w8jsywFenoa99fzn3EyQYCcLFYHEPweyLqEt9PB3W5kjv1Zuowkq5TweDcgM87KSY7r43P1rNYJVgU8oZcWTeEq",
  "key33": "6v14Q77cS2bThovtPvALhfdiVtWqqMDETYQQ3bdh9y5esrG5UjkkLuPFnDFZt3XywX2YS3BjxyHvnNyMXv8fXCP",
  "key34": "2cvsLHn79uxRhdMeKeP9L1hYyqhraSo8UDRKNpLsp1QnWJyfBvD5JFWgT5BFXvST4C11X9dLmcq59Wnmcg3nE7z3",
  "key35": "wq2WZp3xFazP9gj5HsYgECBzthwo69xGMjjvuTKNgZKRSJXrhnkvFg2sNRnEVMFwuA45yfU2zrtPHY9xecUyF8Y"
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
