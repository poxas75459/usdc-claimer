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
    "f2S5VvKFsoBkPTQ3XxzXqm2jdsRAJsF3ma4qZDfmY7LAwPhhVNRsoLitQHRH2pFsu7JBExJUG98qJj2hFdm3btC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aK2YjSWdFuQfQFqGZUEGmpQZkN6HfZSiBUfz5CfiboewUUcdJgfF4NvNcAU28RRCGzqmvmTfPcz8iG99d3YYKug",
  "key1": "4PAh7AGL4JdUBvTwd9ARWpXc3hFX4pKB77Tv595tA63soFmCEd2QLgEawz4KQGv8EVbzYFS9DRDgkypF8SFJPDP2",
  "key2": "32sF1oeX1zGKMuLEc9W1WcTumfmmGxi4uAsSu8sjLVzb7mmpLcRMoqxu4ZpCkSMa1x2iKhQik6WH3ykdj8K3eLYq",
  "key3": "2ERuqWMCf4SHgepebCe33ubeWD8kiTmuiitVpVGntX8oPCUV88gsDf36GtBmiu13Ky4FrM62FJHNXxGquKm3qGzv",
  "key4": "3xJW2NzMqAGZT7FiwAgwvY2HfMvC45QfoyWE5t18dyYa3emvXcXWCHFGHP9o8BaSf12mzfrnpP8ZGbiueDbZ7Zoz",
  "key5": "5DA3KHSKnQtaMNcZgAGPQpgfd1dWLaHE1xAt8NUHU6R8q721RY1MrodFLtdnMgtTXiA8tVScqdE95HsogthGfzrZ",
  "key6": "4LF6PwnxLS9TQFGUGTf8q29wfzmqxzRtEHJtPAFLk8WowL7jVDfWPW4KugbXMLMuX8emhZXAUT3z9bJ7XGK7ZZ2h",
  "key7": "4K1MQhM5zs9WmEWe9rdnHaNT9pJLeQcKv8GdH5rW3qY5C9ks2pSLziRZ92GS2YPPntBrQ3dLRBhYGr4NQyEn618H",
  "key8": "5EKtubGFzbDwCKa3R9vbVxDQ3vQ1MawwiT7vbjpHL3x3u7jCKQ116MFmj1ZXtvSvm1wUNtjVpwRhpKGXWwsfQNyw",
  "key9": "2a2deeZRVhTLjCMmzzgKQGWbH8HrCf8b9u8mzrW6o4MzsNnHW91AW3oQwVgSdRKZ1z5JPu925ZcZmYbrcpESB4ZZ",
  "key10": "au8iVryiD5qpWsYo6LMt45w8MckmBm9KQ7GYb9S4X4tkiYKhDiSWNgksAK3e171ZrMFQaigzNtwR8mW7Q5rqozQ",
  "key11": "2zbV671uRMw11RvdUp3yzHHhUqoCDwAgBb9GvLyUUm8NGUB5xXz3jHcgkfEuRnrNxfro3rkFfTGaYeh7zGu8XJJk",
  "key12": "2s3ZycGg1FddU5uxJHqRtjpLTKJdtmKwDVHThgtyNQ5vNq7jJdNMKZvaUCvi3XbzEJMLm7tq4bzMoB1qsidRvjhU",
  "key13": "22UMQruWS3kQp1P13esesav6shmhiKPx8nYKav9xRFaewmDbpXMK2iAjKVTqFyQutREQoY8ahjQE4Zr2FMMd3BRv",
  "key14": "5pbvsSmcF4GbkAt8ELVhNpoFabRbTsBkLB6TdSMXmWyv4Knutpa8knN3VmVQ8FX5hL6URzW75fZ75zgmtHSgkTEv",
  "key15": "4Y5nybLHYrkYZdHZr5CyeNcZHLTtuYgKEZMBiDFUPAJUf3k3bAX4AtFfgP6E9HpKhUabnbGCvmBnMwxduFuB2kpn",
  "key16": "2v8jDX8fqwaQ5MN9TUFX7RGegR4EQtjkJxUjJgpXW9E8Bb5uLGKdZey3ew3tiTayNEG65ixwMxGXEUboVrSw8GZb",
  "key17": "2ASV34HSgt99TsfB1GuUf6eSMhetnNDB19rca6k6Z9WC6aq54MWJswxa52ChNb6QrELzE2YMyz7qSgNaDYhag3sK",
  "key18": "3MDdQhzSxxufZYBHi5JBtZKuVYrxwd1d8XvCtX2RBkrw5dXuMPiPChXizq7zrNthyZVfVfPnptMR2CgYrzCQQ8A5",
  "key19": "fPNezYjBywf9Dc2YD8aXr6yn964sCgCQvTuwuwY4MzxoqiuKAYsACNtcMS1E8n7VMLZCKCPUo9USgxBcoSnZ7ef",
  "key20": "24LYaJR88mzDCRC2U6Xk4edtsFdRLrpVWjh3ec64Y5mDeYJKZthxfABkPX7mXZWQyVzMvhGBuAqnAejVMqNzqfM7",
  "key21": "3i1325ZurjEDPj3JifehjuZhS1Yv7T5Axf6jG6gXjypP4B3N5C2igvMAkNYqCWDLPyNLkBoUoev3UcoaKdxVcx7z",
  "key22": "24zRwAMQkXawdMCvg7nwZv58bMZZsRk8C3CxL94EHTCd8n3B4kGwyWxnSgpY4k1ZJSL2jnkkMXr3g3Y8EWVqid9v",
  "key23": "3qThs1JL8mj282YaSfKe4G7EvLQ2Z4XXEaAp4F5M77cbJP7eH9r6cTMGoK9cDWJKy4va8nPF7J1HrvNi1PW8L9rS",
  "key24": "5v9vsR8rvcXMCTbcrcZFHhoK2fdKgQ5c2RgetMapPoKNrjj57Wp2KrbtVE4K2Cnyhh5THDSYyVp6qYbnkXNr8QRt",
  "key25": "3D4FtxrWj3nF1qsZ8c1XxhgHvhEh4ficSrpsEFdcF6tVL9ia46Afrfw2oeMdQxiBZos7ZcvAzsE7DLJfYhFvj11h",
  "key26": "2fd8DHuP9EPTUnVGUwEdkWcvU7ah7sKSCMWWmREtZYSgVJ91L9YbF7eyvJfGn2s5mzRiZYQSCdPsALxbwy2sB4vn",
  "key27": "2pDwWWHdeoeAgKJ72UGpQGgHMhwDqb9vkqQNqCqDGMahfueXn9ekxkut77W9XNNUpURUPVSeLfmqTmrivRh3wFBC",
  "key28": "4DaRFDeCw8ZHEw6Jvngit9c7xBHqjYX1P34vqTRjTTP3stBfJt4S7XyFsgC4jBhoJxCfhr781LRrDKBHJ7rHU3xd",
  "key29": "rhtnhbqgqjSyCEXfEYgnLbMT1JDo5teivZgo9y1P4H5KoPn82tiAbHPqeXRifWxW3gLDG69G2ybzhh8rCwW8X38",
  "key30": "3eezV8fbutHggrs5Q49oygEZVDuhRLEdxr9TUAS8AJVmxF6CT9ztwRpYqzzYCoG9hNjFY1zxw9auPzVSNPUMRP51",
  "key31": "5U1K8vEyuUgf5uu8rxwiBfNnGVX6h2evGgxZSms3rggm7gjR8AzMufHHFE9MsXk7z5Hme3BVT6sRB3R3jAv97Bme",
  "key32": "4QwU16DXpmRe2uhormB34i2jRxf6MX5PC7WEEDDSEGVHQg1otktJEUdYxV1WYHZW1EXPcovcLcUzESvzS5Az2spq",
  "key33": "uLYU6zRsKsF1RVhz9KJ5mMi1ds7A96Ks1VuRwg5xYectMnjQU5EscA7fEvea51UX1UfNKVAC3HAGjwNLVGkPPJc",
  "key34": "4LWphfj2qxffVkXQiSFsfrkJWfmDMGTqASGMg5reaa6DkZrtBDWT8o4rDycFfhLJ4Y87wwonAeQEGBay49X1MX9V",
  "key35": "4TtrQNjNPY87a25AkM8w8cU2pQ5vFfqULVuJMEAM2HouhjNQpdvTS5Bdxy1MsRZRPfuP2d3kxbAMJ6qxGquiJhdu",
  "key36": "ndeuGHEYrxuhnrGgisD1UcGNfYTaRCJaBam4JqHkXabCdv83gKpDvMrmjJcc9XzfD7LpVp7yFNE4q8gpwC3sYoB",
  "key37": "2SqD4rJDUbyJfBEz7DqUDZfnTd5AjS4oyGxo7RKXnW5cAqX1Kk6MfbJTmpb6GJuiqE7jT62V43fxLLfahwELwYqR",
  "key38": "4PiY13H2NXKC3RHzGeEKP8CtJzUP9X1VFyAnmvPdqW6CcNZ2f7TGWwGwXJnb6V2ouG13NYpqzeAzL9BPL5hmFJaN",
  "key39": "4S6hrWtxhK8ZaU3XvJPox7WySwsjXsDkChVVdvZsVahXd1C4rXTKszVCKRFcFWKc8AbDMtdR3CJVT6pcCFvec85T"
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
