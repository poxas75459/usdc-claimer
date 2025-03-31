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
    "5WA63GWeGxkrv8W5fRabft6NpuB7GMgYokz5bbow2yaDZ2FUzZE6QvtKNdssGwQvMUd1JPXnzMdQSzaJtsjynHBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R61z1JiRWptMGTngChhxRFEuP2HWsoub6WxWq81smrrRd21DxzZWibxdKujws6D74n3btXVwWDFMzuA4SQjzHnf",
  "key1": "2Fdm2rgRaedezHXMKXGmuE2KK25odCDib4LvjQzDXJ6dn8pyFb5Ld41ia9uNkg2B8XUEHiWi9XQAjzvoCTREqyvV",
  "key2": "2KVjxCbhRssEk5TSP31C5ZvmjXiVLA75GRJSsESXVxfdNPERLM28yGtoRfbsXqzqgLQJYjgnMoSjoP3P24yGA9hQ",
  "key3": "4gp5Nc7bS3L4s9W6isQSRRPL7x1uPB1zbBB9CzCuZrfh7jcDno7pGCKr6cAideVi74URpnwpBMy3DiyZ32cR1o1F",
  "key4": "5AEgVmvkkzP4jtdrDAkAjPjXDQSWQZz5993wz5HCQUNMfGQ1TNExwC6hXqqjquNBWNQvRHS9nmo61xriNcSEfBwY",
  "key5": "4utR5sWdSDCQmpwX8tqWjWkDLjpftiNiA3fhWJ5oxY95uRJxFA6XqQ3Q9ZqZRBpMT7xJhNopSMZGUbXXeGdoxwDg",
  "key6": "H2jF4ZQyAtdyrpdD7UKGgqBUfuuonhBRqihhByv8n7zc1GLmJU45rLaYGXPAnfsPeXU5cbCHrvUnzNWx23EscTg",
  "key7": "3jfziofDW8TZWfpADeM7wdBTMv1TsGTnFUrfLS9rsJfSYv4LNJwKLYKhtvhqdkXsTcNnQv3ptBLJFNwVfDC8fXFM",
  "key8": "27qF9z3tZso2653v3kJEAs4b3V7ujsmLz9nZ1xAcDNAeu9goWWqzaGgXaD3SztEoHY5vSZ6fc3FhSFsKxArANP5F",
  "key9": "5cM2Bhsh6GURnHXvVU97Evu7LngwYrWbc6CYEnDn7zC7eWwJtPopAeNQBy6qZE1wcTKL538s5T1m1DMw8ojtdECd",
  "key10": "2X45SV29oRXvdHf4RPQKzWPupoh3SA5gwLRgwxFRZoWbhnrf5b7cASCpEstf1ruy15gaJRjZNKDdShxaoPqS5tFe",
  "key11": "5ZT4Z2XkVY99cncaTbGKuTT8toXA13SdzJTNDUyzmwynCGpyBoB9MFcKxPE8DhiG3NwUEzJMVD5opzJg19n88DDt",
  "key12": "h7SUdE3kmfd2VrPoMviUo2c62BvWUdzrVvxXF9VF95n84G2Vis3P9iNwcNPHkQQMABsGeSB5uEKCZu5M99jKVAT",
  "key13": "4kxyHXYdkSb6FuKQsbBS74qz3d4FR93B6c7EiftzS4NmoCatM6v8EgVtCRFSYdEEocmsLgSA8WKV3wn1gBuSQziJ",
  "key14": "4xLxm8uZSLEFFtTqVMQ3dDc8pM7W1qT1xgrhCNNvMu8dXFo7ehPFETwqfivH9YuvZTA5fSdnLXVUKeFWrxMz16DJ",
  "key15": "2gojr31ZV5eypp4Wm52W6o9kGHgmDPujV7yz1JEZR4sHrFCwZcZbRztqJymVUJxjJYY6M3Tf6teWqoYYCkAdNAtn",
  "key16": "4ECL6kWwU6qdxtBgwXbi5Cbx2CuhLeVWSTwhzcnjXRzNXUTSB4ZL2Hv1J6MbCk41mUP2Q8yRzVJhzqmKpQgpDnq3",
  "key17": "2VLYquCAdh6Q2Uc8Ueygg3Sq6wZ6gEWNNiQZqUTEmRZBsiNtUtyonge9xo1aL4DRU2JHqSADPqNuvJik7SqYYLFs",
  "key18": "4bqs7Q8H1faW5FNCpHBcgqm7QmDBph1DfVLG7NRWiseMcjNiPmdSt3i5dYof7wBFVNyg3Ec446c5C46hfMTSG1Wb",
  "key19": "3BePeb953rRBjaqmZfFtqj185qtfuR9CNGiuiLZ1vb2G82KQ51ByKdd7M6sTEVjhxxxwJV6XpXpBxGiL8x6qDa9E",
  "key20": "4QaTSzjQBUrqKuqR7JhxbjvSBxiCH5USFJKvc6Qz7Gscfobz5VV1zFxavRLJKp6itNJg3cngEoXJtD7n1o5ecW79",
  "key21": "625ocY2injZTc5tsove5rvt5jC8CCzyzZX1vGcK6CGhR2KSTbuH8G9bqqSijsnJHxpyWvBuQV2QFU5ZQJj3aF47o",
  "key22": "2K241ivKqUcQvEgxaWzks8TuoZ9g5hGgiLgKx3LsQEP2LWqh6cU6oDP3umTat6kMKeVDjBSpusKo1G8hUqZ8xuo1",
  "key23": "3cubsGaPsFCr9qZkZ98e6XN13NWHkUhMKhf84PEwHpNfGmWQDNCLNk73Sn2vDoiE5jiJpnnNHaMDhMqzNyNXccGQ",
  "key24": "5G9Q48xc2p7DALN5aCVQ16teyHGcVs79hDED38V12pQmqyW4ZVFyMyvr8FopM4iqzdvwnsJ1PCWDKJLwhV4nqY2X",
  "key25": "27JwFnftyvVnHebeZ1CD9E2zD5UvokB5Q8YLqpK526m7YsXnuqdssFkhqNNTY3GZ7H3GdoxuPLeWv8b7TVWvvFmm",
  "key26": "5bpXpQbErM2BnAfjyDyxXPthDddQ5L11KfWshnw3J9Sg73rvRSegRiD4oau2PeqfY2H1t23vQy75wBDmi6gBK3uG",
  "key27": "2B5aYrDwLtqgWwVEXEBRTiUsbGKXbcesAvKouD6hbkG1SK7ccZ6R2BQnAEhUkcZAQh1het4CsdsrHgWa2Y3dCAqm",
  "key28": "mz8fXh89idjyusJqMp6hYk2QJVNUfaWiB1ULhdKM7JSYWU6sJdHzXHPHKDGburdDQnoiLt2NMdKsu5xFYEdk5GX",
  "key29": "48F3uoa8L96XFmfkEpZvzqAcm24jzNVQfNZcEUUbS4qtmuTMmGi1RKdMDjdcRc9eQHFfQsqN2qr8pRgfzZmxTr1o",
  "key30": "5mrKkBvr7DBWiQifzXqouwYBMfKiEPKfFHZHV1hYW1DnHvXkAcpzZAZ1VbsX3NvGmt4ZV2qJGqvBVuNByh53iUez",
  "key31": "3jVASRJ8BGiQKr3fQ5rymg19J76Kcqnb4mXQqXmeMF5ujV8KHVY9qasidRiNXDjQEH4GW3tetdRmWVjByggNwud8",
  "key32": "MZJcNKcLYc3DJfLdEMtywrG8dEJfmMd49FZZYnm4LC1yxyPUF92VV3dSTXQnSMjiPTYnCQJoFFi3HgmxLPHTVUY"
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
