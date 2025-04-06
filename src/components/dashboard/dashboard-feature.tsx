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
    "23fRHVoD8nDV9SU3wDZ1ry6xHCYcJf3eEUJEtLUkjFXBz9pAZXRFfgwsf9fmB2Ugt5EFUDaMwJpUwgfLPogukroi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDeB8MG7xPbGYHKaBb4579dXbzTAkbdqiqYHoRyBMgVgRgrtmgsEp9xTSZr5wMnTmyMyR9vDdio32C5DY9DGb2j",
  "key1": "21ZqZkeTWBTyddq6mnMAL76aapJAAcFkUgNpk5nufax3Zys9UpbWfaDgk3vCQ5M3Dft5zNLWv18URWg1dxV1nxfv",
  "key2": "2E8cpy3RdNxQHq3wnxXUJwD6YEXray8mvBnAD6PoVdLtJKpn8vZB8Wd9fayWfsDk1wFyUtvHSeTi58yG7a3219K2",
  "key3": "4tY5XQje5cAJ72u4h2uaVvyimWiW4Cett2bW9cVvVEMwscKqLksNJhmusBVdhfyPF3wE99fbU7HTXgasmWs8NNna",
  "key4": "3WYMeYZWzXJL75WHN9qBMxgTZLBkEXUxuBKSGWTkmoecKfFBRCd2KnFPH68JT5MxpVPUhvnoEbcUX5Avuv6iBg9r",
  "key5": "3N1Tgt7CGZhhkQSDyhoa5j2P8h1FZFg88WBWyYwLzrqvcAHV71C1w2vXtKKegWW9PUfdYKZYVbjpYWNpbrYB9Kkg",
  "key6": "5eYPhD8y3rqo3cescyYfzBp9b3qj4MDRryFJhJDsTdmrkzY1vrX1M4ikUBJWpYvGPceLKf9rFBmuq2xe1fAqWYVC",
  "key7": "5fZoApZ2c8S3R3UefkmWGGJMfQU8UiowMBRQtFVKxtEqbuDqDmSQytepdx2RQs1BP5wDnTSXe9JzFfeZ5dyHtaTg",
  "key8": "vNhSKvA2xWQn2rYomAuouaSxNp7WqAGeGQ2qtX6crxfWAayLa86wwhQf9XJt9hHWynj9FCMfP898dtKMo5wuzVf",
  "key9": "51z4m8yBeMamjEJ8rpVA47Hd1YVFmmeC5BJ3u7cbvN1YLhNkQsA2X6ckmb6ixwJsgrtpSQ41SGyVhwjWMC6wt7B5",
  "key10": "3y3c9e6qPMSixTFeP6dPhTnHDR3hqnSuX5DaR5QPic6mEpjqtp1FNhKooMQEnJs21mnxVnAdTGfoQjw5devYXYFx",
  "key11": "U9T49tvMq8u8LY1x2kG9gSn9Nqi37WXM8tCFdiqmZfJkERdESMNUzcD1FEmdwdppKeXBntfjTJF9qgNbzYKvYi2",
  "key12": "ZQFo7XYgtSQeLuxe1AvD5YTfQwi8NKLTgh4N5fpEC5L4yLPK9kPEJSVRoSeNv2wBkRgbom5QsFR2db71CMeFxvP",
  "key13": "2SCVqXjVVRufE39QXbZNAzZrdHo5CdQmcUTnxYUrgZB3Jv5uRQL92HiUgKzbnP2mkGT6r9SBACQZUJKT4KyMiJsD",
  "key14": "2XCzALag4GMXi6a7FrjjWssJ5cYo7CzzuggwgiEpUD4aLMWZj4HVKNn2UxNWRCZFgBG3fuL3wGeVBfDuNWf6HwD",
  "key15": "4dnx35dsec97u3PVsTdtue6fihDr8TKhTvgog45hswqaRsE5LzPLMpcHHvvE9mWuMUy7xRBwMFGgnHN44n5aWt3R",
  "key16": "4ubEusEJqh3w6EnpUs5qZxZnZYV9jzaJa53ebkQ8p9rL6svMQz4uGzZxSCFNCKgEHxC1bidBuWZe7zCshvsaWrbh",
  "key17": "KRXe1Pztj5HafPLAiRVkqzs8afUQTWRBHSdrmzq44kdZWixj7ESZv5HpyYqZbNiBchn9uc5cKDkYsdupNbt5Hk3",
  "key18": "5gW2jrxtxPV3qb34WrzT8gHQbsB52Y5HHBYyYM8vJUZQHKuUkYSeJEx6zJtNRpLBrh14vLxqTFS2FZscMwPexAC2",
  "key19": "45QPi6azJiqPL3H7SrQRHWnDCtaTshgZEcbWytJzQ9brJXvFYwBqC8ty4qLmNWmZapqkPHCszCqqQJFnNuAzuvMs",
  "key20": "3cGRh3kd88H3YSUotngGRQnHUNusLQgiMjzMyFL1DDXNX3udQGr67rzHSiZwthqBpLNut2h6QTdE5ByVY9dgq461",
  "key21": "43PdmuRnXjeUuH8hNmcBv1xiqwhruNZ9YJwJkriuYLetRY1uRph4QNxMCAWdyRBfPD351tZhCKexjW9Q9RSPoXxF",
  "key22": "4PbdAjSALRPfvQAqGtry2tcBDpP8tmsXXPxwuJZKVnEgiTXLqsPQraZs9YySmZsBVwf4LKdFPdbRM5HWuLhTzmgV",
  "key23": "4q3HHPP8nxgoir9qBd1o4T9tKNFsiTGCUvWzWWZgREEipJUTDLjwiTpHQgrq6Z42QxT1Mq9G8GpudP7AaRBQFHQP",
  "key24": "5PncM7DPFVbz7Y2s4XvMSmiHRSZZeBoCvLFvasrrad3M2ifUP7wL2evmFmWC2XWaSvPutA1qJZwnA7syYo2ub2BG",
  "key25": "24HaLa2PZB97RNKtjxsMVUvE1wsL2WfzAUkZAqshcXWayzDczLje3aZANFdBjHPZJzatqvDgCW3U4ozfqHCwp6Bd",
  "key26": "5weQAxbV2BPx3WT8S8gXK4asEgTToYk7umrVe7NxBMbofVL33Z1Kq3F5tTnkjNNxFJhqTa5aK9eoppJAbzwSyCR2",
  "key27": "2yb9SQWcf3HjkxN7Dh9JqxC5T9vQJWxGTVRHr2WRFvYrhVhc4eMWSTqyERbV3LunWaFjq6zJAbLFCsBLZU8BPfxd",
  "key28": "3uW3fggUUmVrzJPVheWP5DRXnSNWVMDunRyCdP55adzmv8AEfeXWPpPFKxFTLWT6nSKt1DCogdkaHPZcAt6hbi4R",
  "key29": "2trp9ZChDCiN6gHW8ZyyK9mJ3dR7VMUEsjFzRaibjV5sYF8cVomzWk2kpqa4awsfVP3bkctHYdAzDtXaG6Qfk7HG",
  "key30": "4wZvN3a36WVdAZEJkS8PY3rJwqJ61LB7XpvZM3ACc1qQt6XWTG9NrfZVbcEmJUfXrHHyjn6xLWEf8h1eLFEYFkog",
  "key31": "2tB7aT1ZgzAmELQ3XVcvYu5dXkAaVYYpaoAHaQ2dnNxp3JhvbQjp6YjNuxny6HCRMrSX4CnX8xYhvCDjJDF2B8N8",
  "key32": "Na1QGT3a32qAeHaQVUnJHeQiwayi9UvwJatoMYAwgfgAnTSsksNen4Tpa43EzdMigV8QSgmNAi7FLK5G1BJUqHN",
  "key33": "58kYmTYfgMQ8TgATR9cXW5kXm6inyt6RpdsKSqaAXZkbAnBZT7pMHjdG4DicAmWpZ3hBjMz72MBwBFX7Hd3kjYwK",
  "key34": "PidYGeB3gVpmeHNnEmerMZeZvEPHBhd5CUCXL6toAfCoCpQX6ESNfcQGngq5a3PHPyiaCxCvJ3tXaaCJtTTxZih",
  "key35": "2i3aVSnX2TxgCsJRuv5S6yw7wFua1UXpaAEqvU5WkZnk61CwZVE2TRiKH92h7DvfMwCpaZUN8rwKb3n8XMBibiYV",
  "key36": "55c8dcdWGzeFc5AZhDtCvDJFDDYFTjn1f63aqErNguYTeH5PVG8PpPQ88a7H3hTFaofEiAWEyKXWvAEP7yGEPDRs",
  "key37": "5YiKRpGa6YgKKFKCdEA28yif3yJHU1dmN2cxRRhu3Jso5CTVegqJqpeeQFdXQGAgtQB2xBH9CP7As9gBV2dxx4FW",
  "key38": "5BqPMLUGniV45Ty4yhhqERGYjxUspVCVWuC1FiA96e6r28YpAX7cLqs9wGxZ9EZnWdwKJikb8wKH7MZyqDaBDrUD",
  "key39": "2vGawGNFvJgzDESMMDdVnBv2DGUYZ86hKwYRsBviBBe9X74W4Phyg96kVa4daLbGMqqzLtHMfVdNKjcMNfcvmFjG",
  "key40": "4Pv5GnAws5Xaa3pizLVH4MgSotZmCnqCqJMKWKtn33u173fw9pisKu9ZamqP1YrwSW4UUVXVbn8Ru5iZWaof8mc4",
  "key41": "UD8oSeNSZQpipAGv16DMZg1yB9Ge2u9nmwmzf1xmMC6BE9Eqg93fFY51haDKF4g8LC48DpveFHW1YSA9pknx1NK",
  "key42": "4ZNgtKK8EjciDawbzxpdsZUVfpUCWgJf53Mg56fdN7c3NHCfz5Wxaj4JqckCU2K8CYKyNFkZDb3MhTYLTXRHQRFB",
  "key43": "3m6gDNmbLD74wsMon2QHwFUN8qX3ZqZHqpi2xVSDEysJQmJ8rx51DrmCCq8us1bWHj8HVCk59rjfMQYJMpsmXnVF",
  "key44": "4RsvsDozWr5vio9nZzArEBb9j5jWVAXEwnQ3K8sxKYESsWNFY27u67e9ADxgPFGSfEXqSEapUrxhxuZQcNNQTZ82",
  "key45": "2kkzWmTnttTJuHVrkJMbBNTDFB7qWrqdLqg84yeuLu2jHx1vTGHDQQd1QZtwS1bEW851iQsHUBmXZ3V63V9Kx61E",
  "key46": "4empckgk3rwJDtbnNgFJ2chruAq4CvdpCmEh7oK2ehufXBVoZCB2Fh3uYGoYpL5geJAEKVZ3sYWLUYawaTvjkm4n",
  "key47": "3WvVnswoSLwMrNWYvcWG9qaqkdGNka8rLwmYVbucMeXLjmwLX9E9fayni4SvJ84HTyT2bezJ5C59JhVcxpJuxo48",
  "key48": "zacLy8bYuxGQdNqxotHhDoPRth2EuCov5RtSvAdKuuCuV8Mqzw5F7BAoae4pUoAL3y5oPGPDjbhn8DaUG5dwvzy"
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
