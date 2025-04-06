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
    "5GQZ5QA8YmrL1TgV9xwHXrUVnemMbpG6CU7GLSgT6mvoEWgPpShuBos3QV1HLBTpVqNXZjr1innnyJc35DuPvRS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cbj13AMkFj61codV2xMXFK5iQs1QhbirCJh6S9j4kzvAQx8KptLoRCWqd5SAYPjZKLtejjSZy4KtixHdUTHmyY",
  "key1": "5XLnuofXt3bp27dLB6xSKVmSwoXWUvYdqjuYM53FJMcpPjFRdzvDQfeoPnWyGbMUbCAPma639MSmkV6SKrPQCSDR",
  "key2": "4w5xoMjsqMP3bzDiNxRoepfi5ScZi1AmRQUCvnYMxTaCQ5tFV3qY33zs1QFWqNF9xG9dDZA5hYyc7BPJCVxoDmH9",
  "key3": "3amTTuF5sCoUtErE9JYVN7ff4bLwnXGiGSoC8tzfTneLVKYFEcLFuXJc5UdSYWFjh6S7NAE59EjNGCykgRFKRFZB",
  "key4": "3b63Roi329yDoHRognwX7pofQcsesZSwrcaKrfiz7hJxugj2UgMQassowtdJjBmYhZEZi1WnC82GsXUAaMqLhxsd",
  "key5": "7hwgNirEtKMBRb5LecRNN1EgcJSjA1hm8xRhgrj2gd4Nj9K7f9Bwsqm4WMYCiSjL1YCqTEz6ratdCu3P6tr76A5",
  "key6": "26Ae6Yp3H4QtAKZM8qrwVfF52verV9AiHzv1YkZ6ojW4f9pDGyKX3v6rdpk7txfg6hVf33jhapY9ZrzUdWMxjQa1",
  "key7": "FQRDVBS5ZHkA1AfeWJQusDS12rzESdqGT6Fyd3hCpTAeB7PkQuAPHy8vq8dowcfp6PsHBRf6FxREs7UDor7Jevh",
  "key8": "2frtwQJPb7yqTCkadBMFGgMFLBrXgkqwk7tErj9WZHhcFJSCuECCavw8isqzaNeS3jimVg4HxdLr8Z3bRaH8uKUq",
  "key9": "2mpHGDReELqtubFGTSco4nSato3FCauaq5pV7uiM5DowMqNBkcaHBPNwympDNeFAXqhvgsWxQhZeNtYHcqrGfCTV",
  "key10": "3ii2A4DggPpRuiwHvLsH5dK7aJZ3JqDaokKe9qUYQakBcvi1pjnntzWjMSDWqqWKJHDuhTiuxW8rdNo7DmoHXTsd",
  "key11": "56tZ45JBGGxjs8MS2FpsZDReFX9jc1FNDVNtjuUo4KeCEmFBGWB2gPeUBqVh8SiDgSCmfk6eXEfmU4KruoXfVWmB",
  "key12": "3jEZ5wp9C9uBCCV3RNVtVWLYsnVx9UJJR4hvtMM3urm7aahECiRSSaFEkNa9nQAo8ppMmwv47Qkq8WrXAGuaimWC",
  "key13": "37AGbzcdgeKLhQsh4pLuJHmeaVRistK7exPxwPTeub6dBjvqihS6K4mX6NZx6Yhg9UjjPVR4at5x2gPLnUpQ4wJs",
  "key14": "2R7qifHdEQqC3dxHhDfyVtZ94u1kTHbqYGkD3MuyW1mrwSBksB4GL255XvKvpRdHCYrRBR83AUr2WH6z1wKcxywz",
  "key15": "3s5Y7JUKQB4Z2QAM8eaUp6VUh974H3RUQaZZH8P8GtsPpt5BRSjLx63yNaRnzbDkL5SEYwdG9wB4YtahGV6KAU7n",
  "key16": "7oP1kVxARRmhDC56q7jk36YSu9UzyQ6KwU4VRwLVTvVxrQupikTe5qowkeT7eCSQMKgkHvGGciM8RVCm6wahQ6U",
  "key17": "2EJemNj8HEiwCzqjkzRoVjFfmsBq5S3b7QJBLnntBezb2YZG5pLNDagDHVuDzT2ejZ9Y62Xm2C2XbiVV8S3mdwzJ",
  "key18": "C5y1D3MYdxjCEMsGmQAa2M3638hcc9tS93mh8F8cyKyxt1siLjNgTPiEznWWFc9yvaARzkP3aiR8eF7RPWQjpgm",
  "key19": "5uqihU9ACkYyLcYbGDgK4HzAJXvcn6oXcJQZmnyswhKTrgFtphLjwKdk87tY2vst1Hsi4UGJqvecMgzNgMQCKCTE",
  "key20": "1fta1ZNHyjAHdvTAhy4oGPjmSh8krGQp9SMpPAxaedWUpmMuFEiGmtLLiPhKp1UAQ6L3zAjX6NcbhtA1UwnEWMb",
  "key21": "3jYgVBuajqyUoUJXzXrNtvV8C5gxVtiwqR2Jzf6P6eUhrfR71dvdrRNRF5agJtkHr2SvUtp49F2W4n1HZuqctZoP",
  "key22": "55WXpTdojYRbHPW8KmmM3o6L54BxenKsdgxqDYDoCzy95jRXvM5nnTF4kVr5eEMfbE1QbMbWbRxu4QYGCzqo1ebA",
  "key23": "5xq2gdo4pBc1SYBGgCWND4DP4iMVJvLAgFYDUDyh4znreqVZTuE2iu8jFhrFeRkDRrPG1u2PYNJ3yqFgswkEc4e4",
  "key24": "zLTKN1gDZd941pHcgbDwCBRHRyfW754x7kWuy6TCCjLynNgHCQMRByYu1z2Uo6S764Sd4nceqMkqGfC3EGpmZE5",
  "key25": "5BePUpfXjHuQRwuMgRxK9jJNbrNHPdAsWF1RZcL2aAEvEBsfDCrEhXcQdkjfFAQkoLR6nvgwVkkJHs3ZndbydjK7",
  "key26": "5JQcSJERvRK485WbQ8wxRBtDVBF2YQVS1C7aT7hd3LKqJaygSQD3RQnLWMGHK7vhQdXodv48CvjDtTSY6X7Us9oS",
  "key27": "s3C4oybH5Mc8td9sa7rCuN61BphBraUMB5nnTwAZ4JDkpjgXk2hfGtppXoUStCQSC2UnTrFFiAKU82cuZ1WbwTy",
  "key28": "54E9vpuQVcZWRoZDESs9KExBNt8b4SSW9yskAAioGMKfYEVb613X9Pep9KbFRvsiLMxbkEgp4A1ZQwqVP5eugB2n",
  "key29": "3saGMrKFXafY54kVGGVtaRAyz1drUhPb4BjvzGkQfi7KY55aySdDf8rNSRvCw1LttJjiQXqdBg7muznHHBzsvDRB",
  "key30": "1E5VGqGGcanunP3qPK2n3wPj332FtX51z8BLJVS8n8Rab86rEqttzFf8ikohBXSWjpYoNKjZa4RebEGCix5K8MF",
  "key31": "ZfNXhcbSgq5Uq6bnUuNoXuCbANrPoQMAFcLaygxuUDoiBuZbeun1mm44wMW2HM4VpqjLXGXZgpmTJbSwY3XZxtQ",
  "key32": "5uq6xTV42AgULrUwSQBmHmAMy3ViR1dvpRgxoxPTHTGChHFv848MGG2wH54khciakWAAGM4tXfPx2SyphiHUqsVx",
  "key33": "5zKMZwhnSu58VKDY84xUQp7AgxtM2rK2rDJEaxKDtkFaibLFdrWmL24Y6t9uY4gZzaCezQsG3zzag88skVVJmMU7",
  "key34": "3GEutMG5dN6RgdeDMf868Mtp6LTkH8UvWp7NMBTjZtTLko4iooWeifxFuakV22jkLrivUMxrbvkMqNAhJbckGNeF",
  "key35": "4K2hoWw6BHW1M1WiTKeCXpyzyCtYaQq9No5m4wBTSrMzTb9gRiwXLWfBKbEaVqi7xEEyPLXKxXdpD4Egjp98pFBk",
  "key36": "2PxxYXwk7TDcryw7vrpZGTUwrxKxLMLrKXzgPxUXfpZEE9BWmm7iHFDjooK5bYFRfgc1VnFWhWTi31boAhFKYgS"
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
