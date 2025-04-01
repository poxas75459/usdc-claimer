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
    "3fcjyLB54aRrHqs2dRnm7VgRbsHczMD4As4H4NRnbqyvXkegWGQsFVJn1qFsQ59ttFRCFsL1yivMkeHdLJauudVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTo198zPAG1Zb8jzaQQYxjeLA35ihquLvW1DZGRhZK7UFTetfnv1NbQhv664cEDEWTyzXXBRLgs3VcZEgBCbvLd",
  "key1": "2g9bygLg3RKK95nJToM7uYwc4KtCymoKPLyCCkDv8t71z1RAt6mUBjmb3qeJnTX8cVv5J1yeyHjC7nb3C7aRzY6a",
  "key2": "36hp6kFp6xSqENmGxDx6tnpmfKUY2Esept9oF7wGFTY9xpsgh3rJLXBxvj9S3uH7dVWtYYoRNba88PQTHv7erqjr",
  "key3": "4K8GpjVTpa8RPSrWgUSZNAyiXcm5u728K6wAbxievgNCzrkSDzSdJS3UAvrfzgMrGLgySz7AirAJEwYHAwVe3teS",
  "key4": "5Wg9oHC4X3JVDA9wFUxfmydSp45cGsuK8NWrGJsPPir8ReyZu7RMT7Cap8ikUF94jx5eec3vk4huk6v9nf9UZqz2",
  "key5": "3d8aSmtZ9MreK6HfXc8Sa7JscUFMDWPvoyEeNBBGNCmzyfL8qthxoBQzBLGYsqCdUswTUoNDKzw3REetuAg5BzmN",
  "key6": "4UdFrAirZvW1cG2DJisxQf9uAChnQkJCq7QPVGyUxn9Sy1coa9eRDFoHYuVrRZzPLWx6ZgHJxC9wH8zSBGR1xhjt",
  "key7": "2FZ7u9oCYj8eZkaZ5mAPkkUrDAcQojAsVtmtrE879paeA3b7J5Y3rd1RWQPq5pffNdm6o9LxYEPktb3aoja6TBuW",
  "key8": "39BtTGUuGjvziW1rRXh3ieJqfcL1JxYJVU7Sc2RNSKhFgNrDRMdCayne7GR6iJWAaFGjdNCLhpAbS1b2RQSrLuWA",
  "key9": "2v2VF625PHqxmidvcftYDxsVLd5GKVumwRNgMjtxfSpNUkR8DFCpgSStsAn8s1mYDZzLXhDFDPvaVxFrnQ5LDjxW",
  "key10": "3HyeNjuFKhTdBiRfnKZqUdUeyxBPUnHN9L3ZxaSgTiXdKBuPrQuLx8T2gJwApcEWEmgMufyYU1fdAziWrShqtvZD",
  "key11": "4Sh24ECHMZXMcx4fhvFt8zujjMyAh9n7sqWuPuTYMvdobDpWUYjwbrH2uznKrjschYWXw9fR4Li7c9K8Hd7Tyb77",
  "key12": "33CnaeRJgnYkZJD9WUHzwBpw79FKY9WKHWZimuKFWKTiMy24Gk6tuedJH7FA4ADWTbcgFejEA7phrkSpe3DfCCXX",
  "key13": "3dB7MXrRaEg4fiw6hmTRokTDXQmz1GcXkmmLtLmde1LFc5oodio5NkzXFTFB3qZZqhYtNGGPnZq33dtq2WezUmo2",
  "key14": "2mC22e2Eq8pRQR5Fh38ATqxB25JhV4yuJghaN42QHAy3TtgMhs43HzXANxwyXiMTr16ajf5L9E2UDZVzrdkmbxNH",
  "key15": "2DgFfmB8e6qhwgVYuAH9hAGfKMw6im57JnxrhDnEn1SJuyF5VmpJXfBHSbQzhCMAnRvLQzrBNUEqqcbigJnxEEPU",
  "key16": "3py3wVBFC4H15dasawCtHf14eSSAJTHwWXEm4FGPTKHuv2Gg5eZWePnere7o8GU8ehk4qcNTbYzWbLGwE9pExdxB",
  "key17": "4a78YdajcjFbKMHwTXbwGgrdWTncoKzoLVLgHCnjkvSrNUAMAePqUBwWKYn4f675EEfDpeu4UC181UboSL845iNb",
  "key18": "2H66NpwfuJcTwN9qYvBJHNFpbvzciojjmQVcn6XYojX3EVoFHvPPNrjmQJEbQYVSSDrZ7FVPP33CLiz93yqJQBBq",
  "key19": "3JLR4NnPudp5KomobWf2JL4nhnuU2ud8uFapBysUnpBkq94LzqJ1g9xq7S3Fg56SpJBuPrLumQpN9azEZx7ZnWDk",
  "key20": "7xLTiMN6t4EQd5Y38MNaX1EUCDFRXC2C8nBJ4mPmLrKFbajsu6KEccFLTLt39bdXnSFcmDx6pxfTrpLCYxQ7hMi",
  "key21": "4Giznn8rBJWwwDtezvwhBnQiydKX8ukufScU6UM8tSDXYocSJkkfzUV7okF83n4wZLRu3xq82GudAnQTacmjsMx6",
  "key22": "4nYFHYD1Da3Xwf8JvpY6o1yqynWzo3AX72Fvt87sbwf7rnHgS5HabxnDbJyu1k1geDXBEztQbbwMACdAZg4qbtQh",
  "key23": "3pFbqyoKJvBTAj3L8dwchbMZLRfwcMzUkESbVk1bfwd4uJyk37x3CCxV7eGFLmgXtXbFPReYDMXfT91dYzaMrQH2",
  "key24": "woysgMQamKmmZ26pP9qrFuf33XDFNskQZf6yoRSMLDoUp7dK23ECjzYgXhvQWMBPYVJJ8kHabQjn4fbC1hq8K2V",
  "key25": "4hpfw5hu1MhwrjUTpf1S3nV9eqGVLM2kr7NkRrQSWKqjcxJD3kWy33UtXvdCJ42bcRxkH6VH9bWdHKMBAZLE6TXT",
  "key26": "2PZvGHL9jkhvo2Xf6UdxAibqQ2KkHVn19SHQvMNqddM4BYzqUxgX81mJcpQ17tARRsmnqXVqnUTuwJK6kG9NxNw4",
  "key27": "4yF5PvffMq9h73TWL4Skt7CZdpXDqf4VfVAGn3mwUWG8bgh13FM6AQqEVvSdUicfUZfi6n3LyjrqtqdkS1ZxFDPT",
  "key28": "3hneuHH9Kuu6ENXAipQV8VX85An1vDwrHWyhVovCWxEskScjMzppQvcTxifoiB9xvWbPPGJMrKRBCkSNkChaoxu6",
  "key29": "3fXRPkMGLBJ89RdiFnqG1GXWWJaDyDY6bvAkpXrtkhvtnMmC5ddXaegCbLpyLEknQgkwF4ewRmQCD4aaPiBjQr2t",
  "key30": "5C2soPBoXJuSgFPJMyUfQNeS9GsVE7aYmcQPo36vfiZucR8dkJYUXcBk4D1TetUXj7An5pah6gQeJfrwKef8srSV",
  "key31": "27rWszvhgd4Ydd1XcTScNzUKTFTkerUq7455yYkHkPkZdwPF6YVToyyFcUMcLyV5wtsWARhz2pSCQJusmk7oZsmc",
  "key32": "JfgS4a7ycm6tKho4oCBFr56sLG9fHLDxFpKizqSjkyh8dbXWjUQYKjZZbpadtEM6zs2vCq31RpNyfucTMv3unXa",
  "key33": "52JBU6iBGv3R6ae6eyAFSP7QHr2EhbmmhSADwJEquj5qVxqch4kSz3L6HaDnNEW297NbC1n3oFRR777Mef8bbsVq",
  "key34": "fVzYrQMjDx9ZrcAqaq2x9zxhcSQYXF9rcuqtpjjf2zcWxFX2EStAoEndQf4QDw3S8z8e8PHjcBKvr41VYndg1ZP",
  "key35": "4HUn4Pobguey1Ut33ZFTEU5Dm6niKskVML4ZoPWzLqESboznHGMwF8rpeKCDvnYWqLBaBq4aBTF5p3bTYZQaYpLV",
  "key36": "25RsChp7xZVhjJrBQT6JnNUKQmMJ7UQunt8HWVZUk3bZQHHX8YdJ4bTMRAW27jsF9ryvi9pApJPEzruZFdovGKe3",
  "key37": "wVbwSPL7KCR1F1nJvTQFafoPJCPrh5FcVJRd3aVFYZiNJ4Wu4KyFKvEo8m8fVmkQVKSsTb8w9LumrLAknDYSwZe",
  "key38": "34RzHHhRPeiBS8eM2jsw7TSDSBhobx6ZMrm3Ly76xfnRMLDYL5hpgV5Dqks7XcpKPymEvD1Kd9gBEvKL2EZGLBNi",
  "key39": "4w64e5C3s1Db9HYTnV1rG8gMs9815nTwb84zP9Lfmx3kkaBPCEi9fhmAT4J7AKiMhsAT1CFbzgoXQc3xkZSRaGGG",
  "key40": "UDhqXRhLdaXE5X6HqkRK6NUd9pT9K9FGgZvHnV26fge1bpyG1Bq4uMAPyYEGyFw73DLWnibxmAwuVgPMFEvzpyf",
  "key41": "2Qtjf5WpW7XFrA4BfaAqTqNsUu4nimxzZ7K6qt6oYfvNuETpX4Ad8NmsRBbviNVZQ5aMCmJy8Eg8ibjtpVBFaevb",
  "key42": "2SvLAR8ckyD5MBkecgNCJV1Xh6faG9RYoVWdYKHBiKZ2aX2w8bwKjpiSys15dbfZR8vNx8QY59TAPNVkgrurciBA"
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
