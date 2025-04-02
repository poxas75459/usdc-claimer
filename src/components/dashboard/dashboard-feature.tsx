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
    "4yewaB5gHHd9qjngPcCBt5HiNhQU588Z9h57c1ZwuTKhnV24ea8fcUte5remxbND2YdNC3iMPnYheJrGYVUjXoKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3rVzop4AapLWHnjku6kx4Ay5vdNoPQpsUe8GcKPCDWRJv9zfiri3fs8LpB37Cwa7LV9q6UpQRdbWHTKsNZhuFU",
  "key1": "42KyC8mxEAYd6xmaqApxSYSercVJLCrcyiuBEGUb779EvKxdqUVBKSUuzt1qq4oxozFshfZ8npyygE1cxt9oTDnP",
  "key2": "Agq3z6wkA2RSBPgKu6zXBY8zsYGCci8c6bn6JHmXj5ddjNXX2HwnuSEDs4w9jy1JUSVHEMUtEL7R2Q3AGrifvSh",
  "key3": "5AZheJZzxsLhpqToxmB7xyV6Zj1sBk614eCEws1quNq5TecbDsWEWm83BBKAZtbDCce9jhpDUNZ15RmsznJ9LGhJ",
  "key4": "3rrYjpjA4cMTY8iUePBUutURE5bRkgsQ1x59T3bmnV38p3u3nWYehFJjbCLgzBB3CpKaYNAooxCKw5fPuxF329nk",
  "key5": "3SfoNem53qYinVaMiALUw79ycdBzbEHt3fP6TSJ9CBUcLuJUxu5JWRh3jzrfKUDweEuoN71qgCeiigV5tW915DmZ",
  "key6": "46beFCL1JESPCx6mtKvdPHTwqqNprS8mRBaCqmZgpecv68rSgx99xEedoyNp2XJc1KU2g43xnfRGGjHpTZVii5Wz",
  "key7": "5kMN7vYmr2QNBUhj36g56mTbZgP2HbW6r7FVVFTMR2q2xmvTtJGNtPvnbx32HQUaX693TgXcLrvTUwxVTht6qudD",
  "key8": "4EVBaBe9C5sSTAr922g3uehMN3JuP7pmAz1BZw7f8rT8BNCBmsg8Pi4HkNo8vpYrcyRANcHiNPbLaJiRPHaLML5e",
  "key9": "55hhkyA511hCaeF7qd963p6Zy6X4qqkHvUtGRQ8hgYjP2wdwzm8GbynAm62bSKgmJPgf5rZYkA3Sax1w4pJeuMBt",
  "key10": "5RtgQGghxtifbtTVcCQ2YYHenv6VFA4FowL2bxhCLRVScSKKX1bEJLnQgwMx7dLPQWZmgJSGxE9iPQDEvj5UyK78",
  "key11": "3EGj18wVz6T9BeMFtRJF9zeq1fXKwxtsNuNrU6NQnpabvhfL5B43B4PbwWFkV6wdSQhM2cNyASSPAKNhSxLX4Uxs",
  "key12": "5T2fr7TZeEqEQYdZrQTyegH6PQHjkuoxZvKoqsZyfZgp4s6vBuYRXpm3MSrfKUxgpbdfeznL5HsqZReuj6rgnGBR",
  "key13": "5Z5xgcYMCLX3VxD74qna973owvMmf2esbxwQGwRJPPzSpbQxKvyvXM5RzCvDRzU8trVC9eyPRFTJPfa3Dgam8SRc",
  "key14": "2uv7Ta4L8euGZBZK83xd5U1MoQVd5oPMSFi5J9kj6rg58Lc1zkhAYMKbkBqkrqUMohRbiL17jxcYYXUg9MTPc1vV",
  "key15": "5qqLSV5ayspr7Teo9zjYyGuSoxPGtamE2rSqctgzXpGMfuzLr9eRTYtP81Z2y3vJwwBK54Q44UxKzMthAzpT3AVD",
  "key16": "47WymAJvJKds4e1pPXGUzMX37ytQ5zegiGrqBjgUB2hki8oSsWp1cdiyjd5pXNk3H3D9mJ6mX17f1zoRnbjXBYEq",
  "key17": "62vGpaCdLQQ8d93xg6tWYDWdFPQaT9s7WdL9F8Y1Z8b8Hro6SFFExHm4ZnUMiP8nN2rVdWx1iB9YM2g4LfKKe9Bf",
  "key18": "5e8emqsNXS1DxbrBhDLqWZG2w6ACzCP7PgWR3npYvbCAPc2t1ch3cRw4PqL5joG1aq76t4oF64fYaTGq4emWCLoK",
  "key19": "2UjmqBjCSV5CojTbkLJfqYgX9EQF6sME4onWHy9PtJMp8gK2mis9KvXAcbq9cStzfowcR8pR9UiN43VS4yHM854e",
  "key20": "4La2SNkcbGQs4VaPuiXQ1tLb8E3YqSquvfHurLw7qQRf8FHRERtYoo148bVMbUAGNu9nvbykDe6i2s1HbfUPtyKT",
  "key21": "5nT15dcShhmcE9PcG8xnLCNdZBvZzqqqzXzC1uEuwVuGd3ucfYQaQviCqFBFZCMbjH15eGuDkUTn2ChU1JucN8cs",
  "key22": "WXTs3gJfhQ3eUGApzZNy15dAyF1WY4M5uL3jigQF6ssRJc4ds62zLiMQ1A69q1p485Li15zeBjudfPmenWeCFqT",
  "key23": "KzQRRgHv5u4vwu9nSzKkXg1hFjfy5v69SwxTFHkMq6F2A5uBUEK4WrXUC2j1u5wvnmuNC7gTphyuHNLJTZZv5c9",
  "key24": "2EqHUvwDror9TaitVXzfsCVq5wHivuTp9Ko8aTyWSt2YyfoZzphKUnaA19fHxJ2bXiyYY2qn8XBqiuH1wuhfXCLZ"
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
