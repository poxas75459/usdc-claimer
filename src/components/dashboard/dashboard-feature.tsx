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
    "xLcrSSMMKgeYoQdDZGxyTUi65SMj8R317qSxn2g7AssyhzbLNrCZ9fRxC8nmBwZFEFc3CQsgdhvxxQ5smVwBAN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Y6fS1QGwPq48YCvrgh1WDPau47LwhrLNEV4qdNsYWEikvxHsS1KHeC26FDTJvwGwZq3isiT3WMSZoRkNFKtTTA",
  "key1": "3ZGDNnGPfeJSaBSUvTJx967MJhRiu94ewHYhfZNBedcPPZWVj7c5GHdvFgbqsVbDwxGPfJSw82XK4sZNvTkc2gtr",
  "key2": "5RYwT3efhhCmM9KFduQE5AxkN14KbSVMetas9sPb9RUy1Tn1grPp4eFsZsSTkCotTy7yFMzDcwAkLZqtGbfNuFer",
  "key3": "2ZNZJHiE4AXjFmmUBLKZmtpicnSo4npmY8dP79b3DEFMLSxD4PRjFrHeweMicj17zVh11Jrr3ZQxFuAqsi79qVMg",
  "key4": "KW2Ykq947CbESaJoxubAgddwtEET4XUjqyv6fqoSHXPSmUpd9WCr9QpnY2fGDucmBdAui5EvnWzVJHbP7x9hAVZ",
  "key5": "VZgWUUpYJRjMH8UkZpWwUhDqc5ZuqPWqH5QBtfUTHp9EVeWc3Zv328inKnLJAwZk1ykgvQxxwJrzhWSsPwv5TA1",
  "key6": "Dm4GpN8Zj1TaG9BRHVEi6gpJ7jTDqr4M9W9YTZ2echywjVMTG433QkXGzuamme8McxYLLKnjVyXhtMqggacX5x7",
  "key7": "4HGHiytCShPeUy5D29xA1it9u9NDmrgx6vC5XZKTLRtpkY6waP1y6nLJ6RL4CQaVm1xzL42mcaKcgCWB3yYGhAVq",
  "key8": "3kZY2rJfgRYXQzzVcztqTx6HMXB9PTKQZ9UkRezKhQPLfF9u85eNTwbNxPbGcfccUTvb4MgiiULJrKZhHfjjNApb",
  "key9": "2PYBGSbhvVQX5LGQuQMrzgaWupAyXq3MsXScCBkST2QkkKVcdN9DfzfguJBLtnr7RyAr6rx9ddhxPYhR6g8MjRgY",
  "key10": "4RZ1cGCBEpXFBo7K6pkCWDhbURKQFtSqALVdQ9kCgb3saM6phxucQZ5anVUyGXKd2FfEPHH9rHbuZiiwtZfRvvS5",
  "key11": "25RfCcaaL5GGeVbL11phhvH3UKroZ17NQUVCfADJw4GspaicbTPr943aAsyawo1Nt9JfF1Bw1pdDnRJU2AxRH8Xd",
  "key12": "3Lvc16ujfzhNZVZnd5xn3k4XYbox9v7mhmX4DtbKib54CskgQjdHQeUiXdGxHjLRVMiEhC5HFA1LMHfGHJ3oh6wy",
  "key13": "5LXQyoPtKuKREiZCbNtjiN9DpYAeLmstheLKUw89xTgFcRtoSNn2aNDtnRBHuhPgkXANm9KuRE88zv2Z4uLAJbFf",
  "key14": "5mVGSJPsPA122bvCRTfta4BdPhHGFpj5zMeLgEXmChPk8E2BPgaYb48AG3vdwfQonXruzV2E9dQtJz4b9GC4fNhR",
  "key15": "2S9zeogEQY6bQJwEkec6FsDYTGd2iKKvnx2Xjc4VKixKxoaGpN3FgqmbD1h9fySMTLvfPWLxM3aePegDxfkRjsaf",
  "key16": "3xRjh778ySMxKnypM9ptzH6P4Cym7bgR2aBEwyymNFVvySPjeeHTmmFi9PPR2pZy5DnuYpYdHj9epqswe7yjAxBS",
  "key17": "4diKkJUwYoWbSHVhrCX9z3MndFCtHAyf3j7PNsLvG2YmCQyrL66dAAigEs3drpUKgSQJaWBBNj83ZmRcXE6Wf846",
  "key18": "4THTLQuXT1PLubXHaV19xPdQockDpZX2dgJCFrLPwVZ3XWTMeJf3MXnEV1bSnxPVfxWcLesUzjxbM9swupkqAmXx",
  "key19": "36HQULpyYRW7tSHS5EW3zjYSzTFnTcwdtJkiBTL9PrrLLv5EjULxLesfDWZqHVHmosyaAr9CaGdQpPCK6Ra1qijR",
  "key20": "4RnyfW7owhJNDEQqWg711kGbi8DjJPCemgzimwDhmhySVGWzDBbQoiJRUExHTAsgTe7KnNtZiHrvNM5JexikYpDZ",
  "key21": "3KUY82nbAEq5C8Pkr3LSkn4xuwtp1SCWvHkswkEy1hLXoUhF6U2vPSJazKWAq9ULrdpjrQY5CtcfdX4Fw4qrK9ac",
  "key22": "TdaQronHpexNnVnY7rLSXjVPhUkyp9xHuSgdNTAWHsXjN8zZNsArNpKGgyiwHbaocUMaU6C6vCMqUH9ALBme3Vb",
  "key23": "38UG45C4x8pnZL2h1ELM2cTKHugMSRVg3aJdZcFHvH8XumnFM1FBxYYjR8XH5VfMboXNd32pUWzdkNwa1NziyCpj",
  "key24": "59vuibuBhayB5LABh9SapxZs3kZnag1yKriCx6msUs2L5rdXEdcRb5J7TYzQedvDzXfQKnFd1ECqf3RUv94fQ4hg",
  "key25": "53mqPMN8mkGSWA2HYb3TXrVXLTm97RT3aM3bGqKD8e7tt6Kc25vsvwoybZnBVZ8ujHTZpA7AtHbSR1RvkazfogaG",
  "key26": "5EA1xmyJgaiGDWP6ct4NU4inPdp4i8eWu4aHVpcKofJtSDdJDY7s5B5LcaH6cBdAWwftLhzeVUv2pN9DUCaMc6JW",
  "key27": "mX5VUpPBGJtBDnvBmPz474KuMRbDNwn9cmBPgYsZKzbbxVFU82oUACJvps621ynJoVJ5sEpHsg7oqag7nC4SP5P",
  "key28": "63T628y3irBThR9xufrTdAuFNhP6eZRzVQ8PK8QPaneE23jKgDVny1k5FnPPCZsiguaG2a4C6odVHRdd4C3MLFyE",
  "key29": "BnZWsjpm4qJTck416HmRzyrwnZTREAcZ4vy5A1ZZ9GtR9cdfQm887nMn5ytKAkN6nsNScQcpNEcG1xrcYjyyzcJ",
  "key30": "3TSFWaW2GQFS8xCRAXcSyAeJ1ZQqm9ncJjJd5cRo752yzhtFNnZdNgGzbBwB5kuBi8GUYJCriwxyHFaVeR7jUzc6",
  "key31": "3stQsZpHyv5qpnXH4Qy1yyFq668q38fzoWiDphn46yrWb5WRwN1hT6wuAiggTPn9JFUtzfTygs7T5LTW7aoAARKv",
  "key32": "47aJrQEDNdv9yMyngediEjCaMUNNJE2zSji8g3YkwtqVzTosfxGXfG3bB4rdYwGv1DGh46SGMPkbavhK7UeZCwkm",
  "key33": "23c3DK9mLJqeMW3ahD5E9xm2b8XDsAt3Mq4pSkCCn1g487FMDhrF6SSc8GEq561y3XZ5YMbse3YUH2icgo2Vz32v",
  "key34": "3Q87n1JMY7kPj5dSjdp8PHfC6Qy4jWym7TUu3LcuuypemqVsa5GCeDA6RL3XXAa1C3Pua5gf7ekyzVTs4UHXqBY4",
  "key35": "5Qvrrb3iKW13nffheAWdCfDXdkaTpPcyewmrccUPJhAC96BNiiLGmKviD36Y2R5T6pnHsUXwd1BQqfD8rLT8cwbR",
  "key36": "5jXoqSduYBJaRBqKRG1sLD5PwpwYYD8sJhUWo8HCPiBL3ufRabUkwDa39kG1pzYWtjk5RvwNuAjBVjAXWZ4PnaJQ",
  "key37": "4Bif2rnxC6bsyF77ZE8ffFRT24aRxP9EaGCoSRAdJ562Y8q7Vz6ZtzJyvZq1F7Bn6qKk6ASpq25qgMNifiRGq7R4",
  "key38": "n9r9LZjm8Ka6bLT3CBz5YULJtCj6UdC2Sjr47fskEpAt75cJ3YS652kRw569SJAN3owXMp3dbwESz6BqzcB8SGS",
  "key39": "5cS9HVhPTcYKyVAmNFaM6ekUWf2FKju3tRAZiBMyxmN9ESkiKRXjVuWgsXFfgKyJQVPLmzN8p6ghSCXRrU7xvU4j",
  "key40": "u1baaD6XUNYHtMhShjPG5buNrTBxMbzLsbfb2KG4rTRpufXAdH4fC3DMiRNaFpFhHdM2198T7BZL3cptA2KYo1P",
  "key41": "EPKS6fCnvvWvQKe6K9cXHhBG4s5fYyAXcUoo5bAa5vHZzQQMt1nSBgx1d9QQYUBWMYtFPPvVTyoXHXsqbtsKBKh",
  "key42": "4nbN5vzyohSpsT9ZiE7o2Wpamw5L9jvGDKRP7pSRdWRD7uZwr6AHLRFtkbQft4kxQ5xA8TvCcPYW5UMUavXN4ec7",
  "key43": "5T1bPoieKcFP8VEPqh4cHY6Dqf1yhggFXEXrb3EjcoNDWqqc3s5L3q4QNRQWcGcaSsaPkE341qeXnygnciRSkF9m"
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
