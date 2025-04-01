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
    "5h3JYiJ5JtuqQhdSajfgus9Cfp5SMCVseQZhqoDm85gdFb24MtBQUwwU7WMTpeiuEhhw7gNqiHCdMWxqsyYzNaBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SV7mTbDEanzVr4dV5Tkr8eWdoruzgD8xHAAoW4a6NMRDGHbDLksfFzbp1KEEKwzgFRYbRBrsxUYoirZYs21JSpw",
  "key1": "3xYGpkoWW47NvkBMBE9Zcg6As9orksRzKEvGDmmCUSatBLk3aW1j193vwbmbjaPw5jVu2DvXJeUDiGsHjmUbPURt",
  "key2": "5red1NtRvVsSaZ6m8cznDkmfwQYRSLbdbZ5dyhYmt3coEqsigcp5mCUcFawWDfbLsHRSXBCDCar43tjJRz7tM5Yu",
  "key3": "5LyZCnopj9trdVrq5C8zW4N7regk5wdcYC3BEyWSgTa5SzeqgUYPUyzrND5aEoN5STQKw9SGCZEpGzGiH2F9eU92",
  "key4": "3G7FWcbqmx2cWY9vFo2rFEmSinDBTaw8x3Mh4kEredvcjsTfqdehbvmSzVuSQwDc6zeWbJXWNmzXD9X7iHtFQqG8",
  "key5": "2fu7n3T8MpK9cCUGyavii1yZ8PGxReNUhsKb1SHJHp1WDBQHnvAKAUj5oYsQFvMMgx4Y58v8bTRczUFRDoFc6gGa",
  "key6": "5yGedCGJ1s2emaCXZ67GEZrRHQyMojpPYf7U6Cz562Fn8XqaiNdumMJftpusgixKsSBwDfvX4cKVkUxs3VQNrSSU",
  "key7": "4ikMXdpCGqXr2FMTPRy7CrMBjm4VLTMeJqt6k6QwGNZqhEQ2snUUprkarHB3783j2LyEwmW4fmwqx52KT9iaZjYE",
  "key8": "weHHgWdRbWLNEB9sqS9tNSQntd6jfEcoiyQZMJDEGv8i3YNBNJW3Z13f1RbCAskgqXhRLQr5ikafdDiBCNWaRfV",
  "key9": "472NbpqAuKVhuYcwwEd4qz96rQTQ87rWJjYXrDq7tiPkXtRaGmYc5gyLV2n8DL9MFcsy9phepMFyhsyoWsCiRaWc",
  "key10": "4yMCyj9LPcjrpXgMRUHSSAmMatW2eFcozDzhzXFyAr1zvN2UPGdVc2vz4KZ7beRntXXNXJz1peRduLQ7qZb7rcwi",
  "key11": "25sVD4ZND1SVg8qi9wBo3PVSvMXAHwknnzpENb2fRaW9h69DcAnTN96rUAzjVgF1d5ZJBCC3vV1ZaDKQAuyUkbLM",
  "key12": "58QpbdYbFkxTEF2onv7FhAAusq2B8QM4qYAJMZwmZ5Hrd8NkHHad7JB7tZ8gFW8xq1kgogYCKwUjGdgePEYXADbj",
  "key13": "2UAUUBa2nE63jVZc43cLjCn5nhFvVDvgDkYxPSVdy8QcgxjxBq42qVno29tNwfog4e18MpBRdCGK24gRGoUwaZPf",
  "key14": "YYDr2tfxgrrgEtS2f4pGhFaHcMJPmWzHdmTResPKkHpVVU6hvYz9YboTqTcB7JmoCL5govHwbSExdGUNnw63q8j",
  "key15": "3AUpYN5aZHEDUfLWciYomHFrXL2cWezwAdzE3UFNpJjFfqH6QsbnLBJeMin8JAmTR9mTXweLtCtLFjDTKFVDocCK",
  "key16": "5LFHDJeGAuTZA8MUvT462qjcJbyZydPorSAdFaugaFfFhogAMWxapytgARvjn4viPRGPi7sq9Updx28B46CKqdTb",
  "key17": "2SGrKohofipt3LQfc98Jg2jqCsXQuyQWXcX31zcDH5mi9Hw7r6vk1ZFCg8HY8LsacawmTs3waLLCLCGZ4PgjMDPN",
  "key18": "2t5mjEV7YwWewgpdn3WFw3uu9ZJaG3Mm2hJQqyv9urrM2yixZ7nSsy4BUXBXNDUn6NBXDr7JQ8cgfAKs2gkWTJkU",
  "key19": "5NdRA6k222RQdezy4N4YwTSdoPmjiksEHkFEv1G8rdwy5ejGuv2FCw6wD2ncN2UFRSVbjjKbFH2pfW1iexTcbLPn",
  "key20": "38qCmhXdtifzpZtQ2Xbx9k7fu5ebwbxoULF8z4xu2riHKpBFZWRQGiZFPLVoVjoTpBYVp3CvjGk7ukJtscTa7AJL",
  "key21": "466XckiQ46SskzWhBAaZFU2oG9yDANH226f9R78xKWaJQ5fsN72ArhLZoLgEBBYJzViyBYgj1dJtmzgEqTRxxT7p",
  "key22": "4N1DGG8G7eywQH4kCNgwHGr7Nf3Mrx7yhhv2vtEu6RdmfVXf7TPxHsrheufx5WM7BT71kavy3xhAqQpLUNkXVp8M",
  "key23": "2zK7Voz7tbdZPmTJv2Pdrq2URYtoxC2VYrYKcz3WRwph2AhDg9HhPskGLLNhNGimGxKjZENGXv133ttSyF8qGBBX",
  "key24": "4eCithcerKstTsTBwziioAqJfYDXuMc821fCeAe8xgYgTP8fSNMpvpmg1YTgaQd8F2KFx8nxkdzWnunckTvSDSDp",
  "key25": "489bVvnBTnhjcC7Sh3Rmt9PDWTkcFTTGJswhuj5B5EdhgoTnZPyvpixzdgjETEtV6bUoAhke9xexWrfEjizvXKNx",
  "key26": "5tBXfQpfaeC9DnBgWAZCZajUBwpaZrdkLGQBfUcAYWBcHb8sJ1rGBmR8emX5zEmeRUGGz1Whh1PXbCuzLtCY9wWZ",
  "key27": "3rA86xw7Pj9MhsEPpg5vKM6LBUgnLhFPfpUUudGs3EQPVvKj9EXhf9vWEsZrVvsaExrJM6EtzMWJS61umvgKgghH",
  "key28": "66oeMhThK4tT9jxYmJb8rjc7pA2cXKPDY7rJWGuqtFaihycVKLVkXBnSiHFE4WbbQSkFfwrgsC2G5LdA5qVYrE9F",
  "key29": "53GMm45FWMB6iYHhCJN5UVSeocvwKrEdXQ8R42uQgtCHdpZFcBKYhBuxmghHg6NKDmyfZB7KpdaUnmAWYdi76NTa",
  "key30": "3XBXX3R3MQqyxvDX4kukJEuUZgt34JpA47KKzT8vsoPE9cJk3FniSBtA2CM2BBLWptYb81jQPUEiWHBAdGTKJY3z",
  "key31": "5LFx6GpxgVLaUgWmCFAryist2g3oZgMch1uFpu8HGBH89mV7xJdnSxAd66z47pTRM6dKijRhj76bCYmPoonqBcwr",
  "key32": "2ZT72vZGLNmMzRkwbCjfUoJSRqdFuQfQC3m3Lmjy7xnbof3qMVJb5PR5KSbgvahWECPC2aMWHsG2PEE81XzUyNbF",
  "key33": "3tzTnqkmfZgn5oKo8ZevYTV43iBWGPyT6jRwYaRLm2CtxfebvNNa2FfdPsSiSUjJzpPcSGBRokXuuEQPompHCqED",
  "key34": "5E29pauAZnqmZmweADt8WnsJtoDd9actEHPbHdNjExfAgcfjoqaAdz13S19oQHnwBN58Pd8RDhTky1ztbomSK15",
  "key35": "58XyjzRGM7q9C119CCpd7kFAkFUeq23v1GaFEF4DArNDzQrnFTQKsgPQg4Et8M4Jo7UtrWFvkvMMdp3QsaqN4X5Q",
  "key36": "4eDpSLzMjsm1YXQx7tYw8sWv2VsvtLVtPokopdFtMvb7h5hBCT2rGN56HTGsyfTYhtkmWjt9AwHg2wCMzBREWRHH",
  "key37": "5VXa52Mdw6A5AAuwq19WRz4eo3tt33xWHYRpGpFW998YWSyRegpTjVhFtASxzTSJLEqykqcqxBtpVcTkc7ZqFFZ6",
  "key38": "3iohAcG9ChFnSQ42xkFJdtknKMyiaS65t8wcHfmMZGv47bpmC7JKActiwkftKWwdRKabgCiJSnL7oP7e21czwBze",
  "key39": "2gFid6UKH3jgh3DwxnD4cHse9kxT64UpEQcGc8Szihbeu72cqy5mg6Rj5GyKJcknYTzNBZsqEghNSoRtFituqdkm"
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
