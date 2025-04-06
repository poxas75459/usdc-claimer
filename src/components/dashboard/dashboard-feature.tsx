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
    "4Dk6LwFKLF9zZ6L7HT8NNCEkdzbZG5h31vmzvsUTR9SrHy5KcPdNyVkQzSyUiykcgoDKpzvuYNmVm6UaaP4pe23p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBquwsUobhbzMbKL1bcjWogcgNaoZwHwBGMT5z5tgExtjtpuoqbQf9szKqHbzJQL6LridnfGK7EnLfgcdGpDDpN",
  "key1": "4Hn7r5A73tY2F7X9QjzzPV6X5c5r7CGJ6Uy7cmtP2hJdTkUk2TrgLZtEYP2NvaaakZWYb7N4TbRQjow7iaYTbnF6",
  "key2": "49wyMkQt7savok9CuoFxQmZKRxe6cz8T9qGoDHmpz4xj8F6G7tSf9pqU4Rgz6R8Kw4wt4My3RJB1mKFzbhoq2FnG",
  "key3": "AYznBVFNungcdyYdWHWr7yuhASZpAa4t7pDdS4VxRPCdY5EeSiCzUjtmqJZJkVFpsRRorUKnDGEzgXLB3RQicPZ",
  "key4": "2Ajk1yuzSExsEwsYGLsLdmGUXVGrkhmF9dmXZGiyncuJSjtN63LVmXaQL6b8F5qG8DbhXyXRTuFfjGcga4yH31V2",
  "key5": "2kcMR8WGbJSGyTMe36DrzG9CceVDD5ccrt58o6LqbmTkAYnK6bJMZcTG8AeRza1tSSZKfuJ8wbmb7j3qDA6Dox3z",
  "key6": "3iv5kebRWw9NHv8VsG5xGdo1nKQweZ8mXoDSMqVRVQf1qvJgP5iBVpbPdvwLg3bLuLFUdrpo1UcwpLww23imcqLR",
  "key7": "xXTssCq1ZcLttVs7wbg7EgKbqaXiWbAA8AgoktHU28i82TcjtsbxiGfy6HRW5kn1fgvu7w7N6UCEGmkLcNUgDAj",
  "key8": "5NhgEMj3MSe3Nv59StoRgNkkCU8UE87SB3eeAf88ojmhV6nkMPmeGcLX9GbrNUCdoM8sZcwnL7CQrUTSiWmEMCiJ",
  "key9": "66ah1RVBQ943ZaQptNY6DhjF7v7RZXy1zq2MphK2Z972fjYvh4SAKEZ1o2Wu48wKVp238Vrq7gFSKCVatooNniFV",
  "key10": "3Y4TyQ27VYQ35U6BoFyA7k7WXb2VQL8x87rg5WxJehe1pYsk1CV4LR8fd9vsaxsBP8fXoNZxRyo54ApviRZaEnHy",
  "key11": "33UMfjvqyzKyXEvEXmfyEbTuWNmqp8PaUHuhSAvxhhYzWPDjD5kZvc3Uxh378hu2uU8amXyVoZR94ppwoVDn14WM",
  "key12": "58BUhM55yrFrwLLRy5KnNRZR9A8v7fz1XceSWFneMFJwoVPFjYUJtbSmcza8FMTdLiaaUVcX5yTrwapgr247oVgp",
  "key13": "3kmcFgjxM6ieYoovv69fm1ChUGmi2RpACUWh25jGANKSgp4WVDp6xpmSHwkkd6LTpNeMaBhdiapMw1GtQdnHReNm",
  "key14": "7tNNfCoVW3TufcmBMqyAZhEUAf7APFiwbGHzFMcBKCKnE8djcRgWagRJUE6kQf8xrsEF685BmA5uZEBfvPnn414",
  "key15": "5j7cT5aF1SiAvV4kd5LtcTJK6T5fzXk4TDQ1bYtzRJXL35hUg6QMtzXpPoBAwWt3Paw3grzoBf9ABxLgBvAVduxM",
  "key16": "HiQ4LnGFgBUEyPXk4zBju78iE4LyNWo7QGtcS6rfpo5onvPBDUhrfcREQRWbbE9V65Tq6aDFW5KiYea5en9q2wt",
  "key17": "36s9gNLbMg7VmnvKDKDj22HGhzSKts96MaSzEAUC5gvvUm6Tt89ysqeRh9Wzw1PQD9EyGnrmfRUDAAdSZiXmZebB",
  "key18": "26h6BPtC98qGCTh5Lhd7KG8xJZS7C5xZdzj9ZyPkvo5pgALvncb6ZKbvtHHA9YxjGEvESYnjP3nvnVStfuEzvBHx",
  "key19": "J7ZMDmyW14bYEeLp3cGgSXzr6YaDXonfucicjXEAi1pYD5PBCB9C6uRAU5FwDWfBaExJJ2YzJ8nteGenEFNGAPR",
  "key20": "3fCJcUC4i2654iT9tTMY1WtcTZhQSZvTg1QXG4dCUqdNKK3pysiMgGTRV99d4KMyia2SDX8YMzuoaXBixjDScetr",
  "key21": "497ZshiydxpV65EdvTsRWL21iWxEgJ3wuk5ALwtAYsLBgD9JZqdKoZKNp41t8n9P7tmv3V3nrdCgLivMJs92rjxW",
  "key22": "2nWc1xqaB4UQrLnhfL8TpkcwkEFbBo26oWVKmMdPDMgp8eBRwWeqyHWo3djzPCWshEyQkEouLpa5tzAd87DUpNQW",
  "key23": "4sz8z8R56HquxfKWM8V32xXxqxk9nP5mnqy1vbRxQroEJdxwyuKE2pfQM9bgU7T6t62QdUDky71cjWcYk6pwKcci",
  "key24": "nYw5UzYC45cmARzXdWCdYh5s9iqftGsF6XBjqR4aWQhd3umMa6RkyXiatKbLh9aG2ng1jnv4kNdKxQJCTMxrMne",
  "key25": "27xVKfKFp5KEJGiZAsdRGGE2un9igHp9TE4xjdhYmQFp33NhZ9TxNfHwrSZtn1zaWe7hdU1znqsvqhEExBCovAfr",
  "key26": "4EuakRY1duvv85Xc5stL8zvW1FyNn8xEAXGqFDGhJrfZarQaZ8VZ81Kqmer5u5Qvmjnf8kb3QAuGEqsJLwNrbMLP",
  "key27": "3Z9w7HeubgDqUP1q5ipNwKsxQRDCSfeujnpdTvFhggmmh6yPqBTVtNNWhrSfqximAV4RFG2fTSj5JPketno2Wuop"
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
