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
    "3U9ZhYdjDEZWBwM8yA7jjc5RwmyhGKGZBzR67BJAytQLawneSAcNpVM9PTaFRNAi86vADKC8DoVeD6SXsJQYVVHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yW454Qkz3rHL1FJvjoUqGmPscX1ko2r8ZMUbKrW1GCr4DsWKY2VE2rxy5U754AqGnUeUK9PjnZw5PhEe9ERBpf",
  "key1": "63ezyyvuimRg8mswpATX7zsb2mdjCPRjwypeXShp5CmpgBTBLL36cog5cboDG7j4Rta2icJqZrvhMBYTvpTwZuYk",
  "key2": "cGtNDhaiL8C3W774mPL4inzv9Rw5G3xBiFUdFq4giX2WHXzTiktZbkbmSrXYqwQiHg5pKJcMSPBnFzgBqbnhcwc",
  "key3": "2CuZYhZTSBBR2onDLTsQdLQUmZ4tAMsYQQrXtuZomhgF7jmPo82VgtJw1b7fTpJBGU7ogETe7t3DPo1uyhTKz29T",
  "key4": "5UEHoemeUUFAxDwnkFcAn6fq8e4ZU5zf7DxbE4rN5GbmaRP4AKVbHr4kV5jFYKF8WjahhtHpjqs9J9ZNoeAeLMjw",
  "key5": "47SR8gQq6JX1ZDUBp3Fx6yhCAr2hMveviK8aPae6j3efPavfC5hYPr4QF46grgdjnWhkXJyK8fkWnQpzpaUKy9Nh",
  "key6": "4nm4uQm2UH5Z9PH1XCEKHTnbi2AFrEufJ5wU2bQR9YW4VLaNGvBDG6Ch3kKwEcpHXmnW14Q5ue5f4FyjLvygUxbF",
  "key7": "3H26qdA1WjbUFw4q96GncsFFCo2Yid3h2L2AnXXdufLbEmGT6frLxjxRbU6ACRxfJxyryoyuBXEXj5un4UfkKsJE",
  "key8": "4kBYvRBG9bidFdpNv7tJfraDhotvkzcynygC7bcLXhw5v6BbME28STcFtheC7Zi2ta8T6eTKkRgrkmaGi7fTLXqx",
  "key9": "5AiRTUdJFhvU9TEZUKQhRLaeAf3C8DG8DEAcc7XMBpkRW2kJEqdALCLp2gsXhGtnGAZGdP9B4YCFAwHy4hv729CB",
  "key10": "55PPkrptuKUtuLSEwmBAkc8JrHbRk26RKKJ5cEco94onHDce5Ad99RyoLC2QwEJFLtVxmHsgXaR5krziJ999EUaq",
  "key11": "2cgEvxqRUiPyDXdK25ZGHAAGGEXw2kMXT43wu4jSzgcmV4LE321gHiiCPkAYv7hyeYSe5rqVet3MEB5My3Aac8rV",
  "key12": "3sBYGhb2qiqdxPp36dug8aQoWMJoMEQ1yB6hVXEA1UDGfhXW91YqgBsHPYXYQ26EKUpgeoLL6eSpwTuXSsP5xiAr",
  "key13": "4iEpuhda5PYnV1yqiKH4eU3vcj1bzqNnjSB9TBurb1GFp4jxgUfTQ3RTVAv2ngPMbMdUKpDyHNFaQJZdj37Sy8S9",
  "key14": "usDLyCWiuyGDHh72We1iZujizDHaW6RDeJubq9j3zciBqBSgP3PgYFcSqMXchQCxWCqLh85SjtfE1Q6naiTNveT",
  "key15": "24xwz3nJYverjhstuPWkZYMbzg2ruCbqmTav6y6YupH6iH8UXjkd5Asknpz4xjrmYscYbYby27JQCcDqKA7RGYog",
  "key16": "2FyDSEjh7vdeFZgwNjYVuJgVXsttU18yDMXghUF3DZDyqtbC7UQJbSAHynTJrZvC5omJUBewDa2E5LtyCdAV3yyz",
  "key17": "RqZmTYyHC6DeDeEQLWQ5AVd1qJGa8gpfoDwUkbdeECH3R4Lk8qKjJiujUPEw8qd9mSgm81A5U4hi8JRDmE5x6FZ",
  "key18": "zTvMiZVV9NwjjEEhJTR6X5g3dk9UhvoRbBNjvkNVfLAzNqpLNSqW2dZFZbh9i9zd9WKY372ZGRHFBUMHyhozrpe",
  "key19": "4kZKxgRtEQFAh2Zfiik3JTgLnCWeCoNCxJzwAtmba4kCVpYNrqnhfyPUhpnnNKF7UpNzTqvUxVybNf9YPRNj1Gvw",
  "key20": "3XVJubYDqdqjurCEJePMvQxMi3Y21xQbuYdVRTyZvEZbGrDG5FAFACWDkCuehL9bZGfs3p3scqmQTEUMZGdTx19g",
  "key21": "3rg586HRcgfoNCJtZkHncY7ZuXSuM4mPhWFfnuj39ryLLc66PAtxERL9p1zCzeAva11DJ4eHCQZ47daCPJJWjNks",
  "key22": "PvFTmpv1BhDhBr7556BQmjRh1bw3DNjEEfWiDmrY833VrFozLxiVJBEzdk1BHo9FYBpANeJezEp7yDVm1aAoP1Y",
  "key23": "4sXTCcYXiHaBqafh8Nech8uK4TCESAwwrNQEtBbEYfJfT7Uy7rfrC67FvXiVVGzrAuCBUHagPaTffamWoDxTVWg2",
  "key24": "3VjZu9LmUSpKhQwB4KcRWERBinsrwwFeSprRXUnK3jVBcj6hqc2y3jcNoddMzER2JUJcoYfTH1ZzoN1gyU9RHTfH",
  "key25": "232sZfamRuy7BuMjErexxEuA2YA9JsNQVi4uVBFHkynSUFV512QhdX1yct7gEg8k6ayuqvHTd2DTbnU4wfUM9ViR",
  "key26": "2yFt1umPeRUHtf9n2tBJDr6KtuSFsK84x87Ui22rM7LZWDKkqSaLmKT16chrD2qPu98ECYKiyMLWDMN1ydrxg8e1",
  "key27": "3kqKA5J7YSRX4GCnrHrqczrNRKwZA2L9sAGpcedD29WpKzQGabKJC3fosJEFeKn5crdwFyzAfNsYviByski1iaYu",
  "key28": "5Fzo6UuqFvkXm43GoFLZzWrVJNnsx5DcTM4bH44hPBJDqnnjHyPGQDUMx6EyK7LSAE7XnoYhr9s5jVm6WsRyYoRt",
  "key29": "2w4gc2zi4vGYE9GrxS4JDpEj78swgaJAmruyc7s5SUZu2xAz2EpKdMbYfbCQK5VaiTCcddrFm7cLwbgdGpLNfxCm",
  "key30": "62kPR5HmrHE8AZBDX36SXRshoAWyj2WQo1xsLvdD9uUCBLZ5m5fYb6koVzcMyEkPKwRBqMuT7z8GRerkBSK2fb7K",
  "key31": "5nACaPEDF1ALjKjwUDjSfQ8p7Q152ZgS56sk1eYfLqeSiXZRJmz9LU3LDAE6iXeLi7MUk5p8mRBN9ShVoNQmUreA",
  "key32": "3iqxsCmpbp86TA1NBtxxsTFG7Tzt5xBNE4FWeswwyj6LXvV5dQKHofKByZWh37d6DfQcR5ocYMoWg9HfYUWEi5Kz",
  "key33": "3CypauWn2uB8tZM76FSvAgScyhRhu28pUMiWy15XF3SnVGaTrwkDTm36ngNHukoQa9wE9DhFd89E5tSAJcbcMyA1",
  "key34": "XYtcmH9SJP2UW9mD1fbzVHAc8U7ZuB3Qk9TdduCEV7UdJSvLgBp1AN2pWVXxExqi6N9Ra7fApadQ6zTRn9aoF5e",
  "key35": "3maH7vAsC7YyPZUMwWaiMmdqDMS75saepwhXi9VNBEMnBknRyirv3tpsqJCvPz8HuUn6Nu8YXnprzMBqRJVKSh5b",
  "key36": "3QvnYLEDWXtmAvo5qrZFYtyiMFbzvL7K3z215iAcegTgArSXUVDNAwtVQ7SvYVM9yuR2WraDRX65mQP8ZJB2gQbL",
  "key37": "638ZZTDCdWKkHhSLWDw7cwK1R3dA9ZoyhYSPCswKGY8Y2dkUBL6TkJ59TkAGQxYx7pzTqQcJn9V1SuzdEZfGpHMc",
  "key38": "otfoEbbiLujLuqr6mXoyF5aCj7iX965jnz1Rcf4pZEnv4xLAwFQ93Z5MD8cw8NQFg5sFc2WSG9njaMvTjvqAWtQ",
  "key39": "22xbV2BVhvRWfCGXgAx2JcRBiKGtBm6N1kXLf5Bu6TDAmkGwZ9oTFXLMKXYJjB1eEnLhmwBgEcSjkur8j5b1rwxr",
  "key40": "3gXFP47jMb1UrBEYH29v1f7uNgnxteBCpDGr4hWcpGY8yVfxpBBGrkFe91kC3f3eBZDvFd7yDRjBmsUkJRbpnBcB",
  "key41": "2SQHPyXS4ZqpU1jSg9RjfRKaePnhB8C42X1SZz6Pk5PjEaQ3Na2PwDTfkwhSu1dMHRMSKHSEcLD1Wgz7tVngZeeg",
  "key42": "4X4CVQ4MoNn11Sq7tyyJHvwmW1PGvASg7928NvDwPX7vZJZY2R7XgqszgfSB5txdhQ7YHTrqC74uj2UYE6wBXgAX",
  "key43": "2E7e3WmEx4tdaVZ58TXzpRnpubV886emE7mj77oq2bmuHacPF6pyQHwHF4cpGCBeyXtKrXTN4xiUxqxBV19s5doA",
  "key44": "56Do2rnNAXSRqCcKaRJssccTUJp7Za4MiPtpzMfxzmawGK4umqEaapMXESn71wNNuFKZBzjdYfyVn6ZcmDQBwZHV"
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
