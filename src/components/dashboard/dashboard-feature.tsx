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
    "jd1BAgVtWYDzQxsFSX4r4SK8mMo7XmsB5woc38ayoTxmAwtV749mPpwur1REPNhNBD4zdkFjHRC2CKMQsjsBYx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FgMbePTrwc3yWjxhpqwUC31MUamZ7LcNLtywmff4fWs2eXXMGZt6jC64N9YVGhamsKiQ6cpjvnNzqR6bFXZGGKD",
  "key1": "2yBNwawbeRBhHg2YAFhxgLWYGEXnfdfr29d1vFmw73kx1R3HNhTY19NU7DydvsaAQrdBKbLVz2JsPFKvBh6mERae",
  "key2": "3AXuBovQcrwyWz8E1YsA4HjR6maKVqwCJuYuyNJGnTdWUFpPWUmd6cJWnfavkst5yzjRPviN8Zwm1mzrUx3E8fg5",
  "key3": "44m5XZdXVQTc3urEGRHPeTxZf8DVzFraR1QoeqESWeqkvE2moQt1waFZW8M9B5Q8GHcZjMVWezjB8d5QR956BeAe",
  "key4": "8YkmH2JFkVjQNeQG3SvGyhpZh75kRhUDDZV2SW15pyXaKc3iQ9raaJ1rM6cNKjUQuBagrbYoHqgbLBa5ra5s9mv",
  "key5": "3kkoG6GqstJkQJCMYPn4HkYYj8WhAqiaZeDkyRMZse65BFZdwdxMZXh62D2nAtHnuGY2Uyfd1FqPx5GCkKNNiD1q",
  "key6": "euHbaw8GSGz15afjaX677mC6puBsKn3wgVZ7WJFxeFtXkkXF2jTnnQTK3d58YeuLt5g2C4xZkVHtvaTECNnH9Cr",
  "key7": "5hEuzxzKWNjKxT3EFCErSdAmWYP9TtoeMcjyE1eG47pND5XawtuJcnVsPpwLR9Uq4XGU2fhcbUXnjoYu97gG9ZLM",
  "key8": "4EQo2YLTabJiwaKG3XDc5HaJQEeAM4UEzRsEAX6bpY2BPnQGXPzeawW56YEBE22jrbAsMggLBSSMaFKD1xKa7HP5",
  "key9": "2vgVAzK8fq8sVghGZx7zgu15w79fFaQ8Hr9z1ivyAeGfMqG4kwwqyQx55kC3JSzs1JarDnYtYRi9s1E5w2nPkkw5",
  "key10": "faz681ZdA9B7pnTNbUeWiRWtEUw4iJZhecZxsYR93awpVj6vBBBzDmaaLt7gvYsLfuA9YvbEqseoy1gG5mGPHNu",
  "key11": "5DU7novYv4V22YeHm5aCnPoiegAFmfwebFpCFCHYucDXj42xDWxiaBavcxUjYsyMAbCxAMeFrY5wQTHBf3oSgKoo",
  "key12": "JPXgNBWLAj8cwEJ4BEyTkSmSbsatZ4nKz6rPpJJvWkwfeVFvu48LwA4Fj4zKxCuRoFJcuU8sfsRs5EY5TqQedER",
  "key13": "euB3aeUZZG2d3FG7zPNMHMFTgd64JEFfSus7Xe8UKkQrCSaA38kmdowAkCVg9sCdpQgdrrGNHbcUQnWRu4fCWap",
  "key14": "ig2hYrCF76EE9a7C7v1aZV8C5H7amx7nHdETdtemBq8k4tRoCGsZvGvbzbnfEsvQJDaAGvomZUVYEqnT9YTKHaJ",
  "key15": "4SdqkPC9YmddCBiwRz94tJuEmYfqjG64D4QQcanEEPVWV1gxJ7jSfJkW8bz5vAFiWRh73mdgH9JPsAnBC1sYtqG5",
  "key16": "23JRCr1PzE1TBMaY5ejMpWvbBhCp37aBX99Za56ZZEYXx1VM1SML66EdWv6vsyer9yfMK5RUV55s5d54X5v99LPP",
  "key17": "5RwAvRkbsHxiyNziL2anG2ZPahAZxFWcEGguys9H1YPJBAxFGb4ZLn7xw238hyQ87Luz7yXgb9jQtUkRRdTDikET",
  "key18": "5yMrwSXHSMfb3ZAKZNNK87J21tP3wtDK627MQHLPRLoreodGaB9TARBUwx6VjeTGdtXPVAfUx9N6EQLHcJEeTwG1",
  "key19": "2nVKhJ2NwHqy8ugw1q9ac3CWzE8evxM87Jc64uFuNvndqnFAB59UZNcJV4UUVrc4n4f4CPEWeNRVxnTrGiZn8MVm",
  "key20": "2Cb4LyTr7vFQ3AoG1aoywZipFkhW2bBq4ZHeC8LVtoDYUfRymmLkD2hzuDLbbsv8GXHUPKGhdSK7eshAHUGNxNyf",
  "key21": "4Zin8EjeCsNuYkQPrAcDTkeLLRSB4gdy53zLBsimQ9URUCMmpq622JjbjRoq2GZoDKh35CFZCbgDQ68tfYNQ5pqv",
  "key22": "jiu1pvcvAQALxKv6ENkJi1kbTiPWAjaeuPb9t3b8yzfM3vpbQjd9hhByioZWF8eQpaTVWiUhEBGpVmPqLiL29hj",
  "key23": "5gAKrABq45VCjG6whmr2eyLG66czg7fe6dWUZitWf2vhUB7cf7pPSvEPkGwKAPehUY3LgFpFNVpNUUA3udWmfCP",
  "key24": "4xMsRM4Zru6PLCgDyj1aqUXauv3fnxzbSJpL3bgcihNTEqmCWHVUd7ELiLqLRmzDnK2LZYK4BdMaXc64b4N2Kger",
  "key25": "5n5ZPyey11FWo8ufjYdpSqY7ekuqXtBt8mGxDbULuE4BBE1zYHDcux41RDKrPn7FGxdKW5bcCYGgsD6ihnYYEon6",
  "key26": "5yJShuPxLsajbETb6qqMuwBVmnLzfiT3QzigB4rk3XesiqMxXz7QRkR31tcN2JtNrS5kDK9Q8sspjtAYhuuGF9F",
  "key27": "4UBE4q2ryXXjnsuuJNEEKCuHw7MiD5Sr7voeFXckQNx6dq24NXBaFVvQc17yVz68Fh2qaKCfMdnKVfh1JGMWfq1A",
  "key28": "3FivXTeTUtqeSxfSxgqgG4Sa1LmpgmHwU98XNk8Pxw577axkDx17zG89ob75EaAq8NXTXRYDaogDhjPpiuPNo89G",
  "key29": "bjetaXQ731neRYtYpWPo12qSAhWVxYCkjavwv1nNYM3bko46AaZkNdwsy7KtQavEnQ1ar3vfF8JEgyBLVboZER9",
  "key30": "3ifs1GvHQcb1gamvRZSLxtzv9p2K4ptBfTAa1Cpg3nyVGporQYmfqp5QpboqSuyHuJbpHK1h2p8JeULbixrBRDsn",
  "key31": "3FZNDt6EMQ9sMaGeZsqxSAC8PToc9PiSxLzxW5x6oGNipbLeJ4qjYhJAXRNWBFNoqo5veiMjLEbZLpCfiDSWVLjy",
  "key32": "5Dz8hfAANua4yYwxX27Hf1oXP9haRrnz6vu7cRkHt5Fup4kxoLkhPViivJmtrFnZeC3UaauERjJXNWCooU2b7EW2",
  "key33": "HUieUtgZR4yTipbXKw9cy8bWKv4khEZmPqHFyQVAVxWPtML2qw6xAvkhXszknMRrsNzN2FoX4oHHuDNi6SH3TPW",
  "key34": "2BY88aXKJ3uD5QR6YnBiEcpb7DA1d5NJZhPBPYDft7qnSZF5xYy8pGGvx6TwNDHzqrA98pnk44LdpRmXuK8ZU5ti",
  "key35": "B3sUNBn9r54cdp6czHpxAf1zRbCgmdurKcy1emrhwWPtuoPMfet8HhsnyJnwAxEYkY8ESZTHBgAbTedxoTDVQcz",
  "key36": "22exjwbCSCqEi6WHitADqFQtSPxQoYLbhxnPfG2NG3K5DNWszgDwY8XR3rFoJuT1ZL3kzmUztqXenH7tGYYzCamg",
  "key37": "duWABsptzU9wB8vQEQf19ky8V2oh8c1kkxQs8JEZ7i5r63LTGFwffqgL1gS4bYPX1uKYe8va8MXLToKMNTdk3w4",
  "key38": "3n4rxMYbk3h2vwmaNghpXJkXNem1KWXiLaHvYE2BXYKdhjH9JBSafjJWDvJVyuQex2S1ZJCSqExy3e3Xo62Jwp2C",
  "key39": "3i2fWGLcxMgJKpcX6riVP4gcAq1diqXkB8hKki6VfP9PA5kjkhss61WHr2NnqPUuZcjjhxDtCE8d5sH6hDwWJntZ",
  "key40": "2XviSaSa2sBZvAfu3aKgPzPzwzZr7W9dRBzFVuy7eoGPncAzxTKwQxhpkyJh3L5MnsKVRCFpbTAthazBCkmuJ46G",
  "key41": "4wdpzfqxugkXU8rzPb2J1UPLo5FnWmnvL6PGMJ1ArY3J29KW936RV1iSEfyDiGdhGfC9uzhbrX5xE1fMraiKjEMk",
  "key42": "5VxN8Cxws2LrtHedJe72uXTxN7vSCYP7F94f2y3fRopiecRkd4GXFs7esU6x9XGFvjk2yobBNZPeh37pub39Hsow",
  "key43": "5jDx3Zpcj7gKeFjuQE48kdRhFxGu4AHa1nBoyHW8pWBovhW3PUDDkwqJ7rdPFBtMtxszmqF5rP9H5dtZrwjViudt"
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
