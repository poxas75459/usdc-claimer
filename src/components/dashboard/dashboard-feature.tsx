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
    "5C66QDScPwNsHvsMdn7xNaE3T1gKRRmTQgp7UZGw3ZG4bgvizouJ45Wpnu6wev3J46r7nUS7BFaPFceJ3oT6Q7FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmmLneekX2DXPKmvYabbYFv1HZEPT7S9AMZdeQ69ey8AGSiHXzxH7JghFiei6N9LwNbApRcNj8MRL99sdZfYp5v",
  "key1": "2K93HGVxdZYXhXhnBPtotMmJyf1xcN5pX9BK5kaYSzdhie22pFzCvVyrP5NCQCR6LAPLxu7sPCAfnjXJEcGEoXs4",
  "key2": "67kbk2xz8EYhf7Y8EZkuC8P9f25V4b9YxVEn7STropomvBx5aVEYUfndi7jUb3R4BgSbBZzAK76isavFQaYyppCP",
  "key3": "5fNVCBYBqUmE12MPW75vAv26D2VcfbcxJ7M1pieR1t67Au8kziyxMqUGz9xB8CA24QAxqW8r9Yjq9ghWY92Cvn7n",
  "key4": "5eR4APDfraTvQLqw5Ymo75Ac5RtoskhndFj5PXPfDBQJgbmjGLSVHJpkPkXRrZdAnZWeqKktSHQ5cj9oAHZmKej5",
  "key5": "3wqXJZMmDvxHMGt3dZsDR9KoK1T4EbGXhEy5G6KQqohc35sSffNRhYqJV1Kqck3pGADpdu5HRyoKZJNGxwHiA9EM",
  "key6": "CmQDDBzyZv4j5XCk26Kta6YNvK6eQAjJMQGCzAcWYqwDpXgQDSVM7hUmdgdaiyYPshUeC6g8z4etu5WF15Hucnp",
  "key7": "3z4Y7MEMptWfiP4g9ysTiYio6zvpxuYnudDv91XniScVYUbe7cfG3gqtKTKWqgAbbhe6FWwmhQydkaGzSmjbMwBP",
  "key8": "3ks3ghbLH2cCYsc9SbKLRTwxk3ZY3KoYRqtvLabAfjVBQJLzEKWgMprFUuae8qcAX2iGTs8qvhAUM85PmdwJMBPw",
  "key9": "2W3mwkLnA5aDPLuvwb3ebMWrMRdQu17HiUby7329uy8NCnPQJsM1TXqVEBuSWBQTybzBvnBxdBxRVQ5UoE6tPAqP",
  "key10": "667FHFCNX5Sqf5uuSfyec3ktMkvbaza7KhDpxyjJaxGxxCyCfvLsMj2Emfh4dX5BR3S1fZCryH4yw94MmGqDBAnq",
  "key11": "3efi77FHYeEBSrUciNZsjNTAW9q4ipvRKntKdkNJ8CYFnii9MXzFozVxDQ3GUoNWtNyrxoWUqCnecSzzF1RPcuWu",
  "key12": "3LRKwfYajfRCNqqBqcDCDnbNqkvaTaHapLLtwC8K6yoCo9C1UvGbfTQAuq7VXuh1NapU3UK13JvUfJuBmdpgNYfa",
  "key13": "2Hsvu3UohC2trQ7MmeRgE6hkscEqs5MZf4nzEt8BT5rUyPmi7cHAAawzp6bRLu6pc6BtqHyWn7Ck8Hk27Q2zhcyN",
  "key14": "2PNNRRhTJKeyqtFZnWEuiqQCexD1npUjAcsUzhrArNgYTFFnusb4ysb7B1aW9MaTuMkngfsmx78X5uPrpHvjKHMk",
  "key15": "4Jxn1WR3yFV25FUQAbyFAxRzDzM4sHe3ZGytguUmYVRWtA8MgkJ3A2PgBaGPFyxQwL1Pt4pzY3sBZ5RqMPaE8TJf",
  "key16": "mHxWv88hTKRm8jiAodifu7MXDNnmLCrviGALRwvWUZ3Pppy4LKSGj25NAdNWzdAoXGSonrMteDTFi8F5STf9uY7",
  "key17": "5eByhefWXHphLgCBXYJR4Arvr8VCxW4PuEKBw4qVHRofSfrMjaW529YXrPbeywrRzdECxXVEabFVtPkj4jsLfnDg",
  "key18": "574LsUewp2FxphiWEbrjTM33z7bDGqAx2doiWUtJf1teEVUAMENgAt9B9epx7eMjyRP6LEEGJ6nAmfYuPS35abFo",
  "key19": "4Bq3ksVnDdsHstsf2PFNL9nN9DeVhQyq7J8EvRBxBBK8dhiLtaLB6AnBACh2uH7RRkpGaYBAkTP8JJHkUVeaMAKo",
  "key20": "9KKotUNruvX5T47oaAmM1iMavwmtLF3UNd5pFnDTUY48LkLFNme8bLqwEHZ5zHCTssHqkWFCdhkBj1vgSjxXBqJ",
  "key21": "QGkFuYsVG2RA56qTdaSGUm8pmSjt28PEy9RffYofvSCvkkuBNzuVFAMY9r9aFaPwzitZTnP4XFfey8wZy5wWbyA",
  "key22": "3RW9n6LXnXfJNLsnFQMx8ZuV3pD1bkwJNTA25MfM1JkVWyZbgSLyx4STByAjbFJ8k613X2FgSEHKuJeu8kwJYoQy",
  "key23": "fSAV2k6zfk9UHo2WEnJdX2y8dzCrGCykns9PXJof4wnuWDW9tjGwVzPW9bALBDspGC4M7yxcrD1H1Av4pQVL3c9",
  "key24": "5PBH9ZEJP9DEziv1pdRKT7CnTgAuJ1vUum1VwVGb1gYVZ1NoWwCv4okMNQXJ88ay4RBgBHotaK71VTQCYCVCY6NF",
  "key25": "5bVAMyHGPLbscKLHiVqJkt6zQqKRb9ZZYKa4fjh8pPPfPPqRroLdrc2JVXXqPZXr8b1MsH8zDBCH3fHs7CNufJZV",
  "key26": "a5Hb3c4U9Q4JKNc4hbUWYWdsqFcS6obd2fqQEdwQmnp4Vwwk1xEtCMyFJKJVcohHToxCzCPahnxHFFtqvZXLtu8",
  "key27": "8kfx2aJsmfwBw3SGoEX59J8fXvfrN7LxFzG75krb4mWJSchCWeJJsZ7zr24U4nHtCKEUgNQT656HJabtfLGUwgD",
  "key28": "BSdvQG95jBNK3StWQ8XF3RcEBhvwRgGHtgS8f4vDrpbEfetpKGbFfkZpQBJqKUQJ7jo4kdZJy9Go6bLELDfEmcK",
  "key29": "54C3LE33KRQM895q8QV5BWjhecKnumGPWP1k36mtzbbRizviWfd3iuLX4Jxiu5bZeYBhqSKp42FYp66ogdrNx44H",
  "key30": "5a7z6sfwLfqyEUshufcXnmmsWriCnQHbGswqMB4dr81ayXpJaun7uQRi62owmDn5EVmbWMacjZW6nmYwp2LCMKbz",
  "key31": "4hwVJ7VFrPz9vJ2sZ9MWw2d9FZ6GuBisUczPYaeSVFT3NiaXPZRkh2CqwbZ6F2Z811ds2m9ZYX6PdshvoUUMzLEz",
  "key32": "3bge8231k1A25q3C6MseHkgKXPzNi92UQdKQp9H8CqUMEZFuUDYB62u6kChY1TEor84KBW9G45nCx9JzESYfY6uo",
  "key33": "4QMEu3LAPNe5JxjKZa4TX3MsYnTWiciJoVQLpUxJrHc3Lycg4fu4VRSSqabBHXCLiqz95u3oQ3tKRVUacdHMP2VA",
  "key34": "Lv6ZkicF62tLrJf17SP9zKPxxcJin3c8WoLQg9V9ZxGhwkZM9W3qpSxqbmPLJzxsBdMdkYwPdineVuD5ZomqCfp",
  "key35": "2KqR9kBB8jcFTMiBgcZL4vvV8rE7gyG1rbvpPCU26BMLtKSKJ5Jd6qZ72Qp5cAhPsmtEnm8PErswuVT9dp2Wok4s",
  "key36": "5M8aq6n3Y12yvJbtp65Ubs6gpuGrS1aL8uaAd1WNmkQqDQngG8tLw4nj8TTcyroZfYwdEMB7LeLUfdpyNQhVWZdX",
  "key37": "32yB36xfN81rLVjHg59NVjrdHPCeTe8GRB5Sh7VXMRxPU5CpbrvTZMpa17EjTD65L8fVV5WnMvzqVvKqA17pgQEe",
  "key38": "2zUbKRrn33qLm7AwEw9YYjQBdoarcUazh4645V3u8hSN3AZhtMKKGKBPtjv1RNHpXB2R52FqdjSnCz1LHqS7xiWh",
  "key39": "mcPTwNSdsbu8RdTYrmQ9igpcUhkEhi8CjfZxH3CioqAijSVytt62NaYzrisQrQ1zN9KPse1WNyfeQTBuQpTdxVw",
  "key40": "QNZMhBG2nsGpCjHmemnP3vREw1ZbrkFKjL4yoLtXEmmdgs4Lo4Gs5FGb71KQxRfYhFn6eqRQEQxxfQFpjsRMhaY",
  "key41": "3WKcaLpFZbuMM4dS8qCZYcLy3M7j69uQmMKEx3z39UZy58fEPm2UuQTvKPM6THg7rFxwrv5m8qrje3WJSCcgZSpi",
  "key42": "5vedbnhFePCqYeuXj1mSpQtKeeVVBQ2m8J2jPGRu1GpEJAX8Js6hnJDtGjY3iK9J5DoyhXrNTjkHyWzSncXEBJTb",
  "key43": "GYBkCtzVPpcv6bT6DKutnZ7TQ4dTuKNGkFBDCCx7uWfBC8tzgFjfkKNjuJpahVWYSKyqpfC92B7jaTmQEoEvTCX",
  "key44": "2ykqmz5XSDpG4LPNoqkzn8Wrt8RqJxP139i6b3viwrjntqkK2ZnWtUPBw5V2Aru9CLB6NNSdxY2wwf8bnKQbY7JN",
  "key45": "cuWSbJce5fSdVU4KyFR3mWwEeeyrEyESQdJYWocK6srK6UP7ZS3s9MvNyMSBPuk3iPU9u9Dvav6Vd7JsavK2hH6",
  "key46": "63UrcenKYbutHfHfzWweQyzxGRncComGXL7Rxk4Ecq62QwMdgqRcqdaBNzo98Cs3q9e25rb5E4owSb8xcp4YmPcF",
  "key47": "5CwY9hY5mT6R3ky9ZPUdgFsF6LehX3gnQ8LYZqnWdDQVX9oPMyjsdN7GoLLr1Hgo7nCJY1BHgbSWEojCEqc3rRR8"
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
