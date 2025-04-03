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
    "4Dn5rX2KC2ppEnwGtTREN3g5TTJ5daKw8FNWzYgrBE1b4pSY3wR2LTvpgDEnRGFojahzGSqNha6va6wn2JtkdDor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSXu4FFtuNzKegMdmXdh44NV165YcDJ2xjPE1ZhdUEgPHeumNVLLDkqF483pEsmE9odu9ZpJXTHYC92P5UQf9Tf",
  "key1": "NnSYRqX3uA79vK4aekea1uMieN36qSYWRaJSjVfXLETkTiVAm8Z2W8Nde3cwDFYQmMzpBUF3KvX2H2fDmrktdqk",
  "key2": "2pF1nu2dtiXZpAom2PdPyLsMUchg2ACEKbJ5mtaPe7rwoSkYoDToiUGHQTTuLM81JbFe1PppaY4ZZngKJWV9NGLu",
  "key3": "5RtoiUQkhd26e3DpGVShnPdzsC71ryyboeuFkqhKvCawM8UEWdGifRzFrnx9J39tF1DrixMehpn4Z6xMyEUeALfE",
  "key4": "BWhqtouZJ4roxEdW4LTQTBULyzWvESTG22zznnt3n1eF6DbowR9SfRdXAmMVvGhcmUkdtrfWxFk4fxoBd9cEypn",
  "key5": "DuDQpieFHVqk4zWPwqVeoZmxoBEwuNnsB3mQfqjKfWZsx3mXRV9GFKZ2vLZ3T3reBDBBBCb3ybJqEu4EE8n88xT",
  "key6": "E2vCUJ1EqoHvqVKz5DZZfLtKPtZ3EWmHHCvHBaW5BskYjAKBRfnviviB4ZV5ZojnP1B6ZsRPN7CWJCktqNFDvAo",
  "key7": "Cck7Tkf3GD1JgWxESrh969rwtJfm4MrRUDagnpuDnJ4FZZG2uuCte1ompznRhzFXLPsjjSMGf7rQkaBGSPD877D",
  "key8": "3q7jESW9zQH8s9WDyS3rExyxyHu2Eob4tkCSrLiGMxqpVSKN9zy3p4B9yVvHNQUmuj6TmszdA2qfejVYAZkTF4DA",
  "key9": "2iqxTr6USmJK5b5ukzKvcQTvS9jVP3xzqEj8CE5PBEF5PHbfqPaX4339RHe8PaeL2nefoYVMWqfLi2D9sjHnE2Gz",
  "key10": "4hsbi97DXnCHepG2axppUcQsHkQbjgmCRzqsrZc6gieeLDidREJDErsFzRHLxgQKEwEBzK49rKnzWF9pvmWRDArS",
  "key11": "4e1qZ3nr5TXuCpb4aGaNfLzpkcZftvftbBiLbRxrisTt2JMwb1BCZqMox1Bc8aQSNibeEVXUDyJwPCyzyV1ggtb2",
  "key12": "5qG35XR4D5xQDkX7DGXZpfRAAhzgWvu5HU8zoAHzw6otF18SFgv35W9X2GSEb8FWDBEwgMrcLBhrHckZoChs825f",
  "key13": "39NcSrL4GSHGQCAF83e5CpXMpJBgXXeTQ3fLgUp9SR32mbpDJR9xAMG73112v7aCQXqRsexSoXXotHnXtBntidoe",
  "key14": "5Lucy5NX6YrHkBUBkYKEmYz3ZB4bcibSKugVQ3LndPeJdfsvf3HnFDQZJ2KfCjAsUGLNr8SKKR6CtK1bnQGZRiZb",
  "key15": "3LtepUbJ9ANBYuVRtTpKkaFhuW2XPXayv83rQPo22pUihJWrxsY2CWjWZVemB97dDFPiJrRsTAsx2LXgJqnENcdW",
  "key16": "KJD2KecRyk6N4Nvr4jD3zMU188EPWSd5wdwVbpQbRACgvqhzpFxBwCg7v9wGkGJ3x9edJ6aPftxdJ2qUbdEwykL",
  "key17": "3dBo1YtYEe9QbCHY94gy45sbmGM2ncLLFmUesWu7wLVa2SQgYj29zeU7esJssFJaR55mzD5k7AjdvCwRWX9eE3Xq",
  "key18": "xG1LDxz8b8meepBFjPDBrmXkqzQaoe7SYx7U6t3vDNjcefKtkUqjj8Rji9LAF9v1x5axnjeErczZeoTogduhw5Q",
  "key19": "4sCPYESJFG8ahQHcm4Bwo5LCn5yNJ7XYSq2PbUmxAzBgUiG3UNoAMhtXrPA5eRjGyMFSKX5Qnjv3vysiWifNV5ij",
  "key20": "4kf3NfAU4KPhVSuULLTTLinFG33Vv5cnBgLC1iWvHoZoPUM9hpP1uBY6EZiZ8mtfurbrjairqBjouHBdkVRMTi6d",
  "key21": "5A4svkYu1aSvcfrStDH2QpNAJCnxcD7WoJUmwxg5QpUJceeNSbm9M4Pui8J9cvhykYrT5fAP8NV2Gfmwi5KxzpeG",
  "key22": "5XKv9hv9j9vNrYuLAPhDbLSHXm2k2t16Zzed4zJSYVpYMvy1Ux4vzcBPmExaE16WvTu2JBFnmpsaSrM9hPJ5zgu3",
  "key23": "43WeAx5gShaezBFJCrzKoxAPG1kxPQtny2fHJNf2tBuoLy5AiY2C9kdvHX3MPMZtrPksLZRmpRhwTT4dd6naUjPq",
  "key24": "B726mpUGcam1UZjeWvENbZ2S4GwaCqHt7Su6M9xUQfmAiy1AGeHSv985SuPxAhaK93QcarhUFPUV52dyZqgZDst",
  "key25": "WNZgeywcnvSFQDPaRgcxPMMMLnhJL46UsBoui7jf8J2eefMesuvPhmNvBtyxPHZRq3djGGZ47tdbstZQApyB6hJ",
  "key26": "4HKTnf3kSmmwtQy5feCv4crStPRjTRe5TPSFbB2uKpCwAbJAC87fJaUZFLKoUXiie57x2cZGqBtFacdQDRDP3ccB",
  "key27": "5SHDV8wrmmYoj1WYuAcKsYMZKioYvzeJ32j179pPDidc2nStQCkqJDQPPWtXpvsx62P1sbX9JaLdX7LXp49dPcu3",
  "key28": "2Z1yXZwo9q1ALZ8QN2r8QJFFumUmbQVHFV5f7tpDqjr9xvsBtScCgKnx32g2RnHTeXcAK9QRWigLz6BLiKryXfLw",
  "key29": "57J6jDgyFo3pgowgZBg1Dq2TVZqindYdrVSLJx8S1TSCRaN5ny1owF9RHgRUMgCKrZvEP3igZi3L5qFbpFg8mkt4",
  "key30": "3iY2L2YJE9HiT7TXWNPK8QX8LkGPvJCgwikA4AudQXnjKDEr1ddDYbK1Hns5EJFc69EmuQXDEKgziAFLd8Aw9SpA",
  "key31": "4ZRSTTsNKXPYvtQksNLDjfe2LZHacFG1dFgCHQh94JJbufaDNSMdxDi1gZAm6UwxjBnszmtn2wS7wR7SZmRJ1SKz",
  "key32": "4qCCXNUr6hA71pQtAa124YzC45eGCRDQPVVNYb1KX8kwR28jNyh5YoYE3UyfeEEGDG3Eu4mdWAbuE3vNdypcSKNV",
  "key33": "5dL4chQC9CFfEBEGUV3wMEHvpm9H3gg3umAZK4EZozKwSPNtGLj9vkn7MbZWfSp7HG4xesAY28WkBrKVwjY4sAnE",
  "key34": "2hTv2PWtqsWz6Wmi15Ckh6AdT6HM8nbdM9C3NmeXrr7uUSefkpcyUVBbbutP5v2idKKgCprZ77dU7cS2pS8gJ9PM",
  "key35": "3osFV47NdHm2yaypJvNiM1WyB5AzgSaSbX6YL84nBsJuWbnX61cNxJWTBAgFU1HtwygT5t9gqzTNaBLxVD9AhWvS",
  "key36": "2GX5AWrKCHkeYwZBtFAHpkovbKL4xo4W3RSDdNuGfFPHikWVCN9YihiMX6weDbyKL87ve2VuCVj7dHTSTaxjTfDh",
  "key37": "2ZAtydYByFg1wz7d8QMetxL5SKLU77cb4eh3bWdETM1GrsEVaMUV9Q51ikdWQMSkskGRTvqePMQn7MqUYBRHKv3f",
  "key38": "3FQAHRteuXxuULmomtaHaxsevKxuD8tcYsyVfKqKggx6ndhncrqrzPSXfRbSUYZfZLkoV9wuFV9hjd7wzfwoK1d9",
  "key39": "NKgcR3dN4agLYjxVYr7eXX2YzwQrAWtKBwD7r1WTuFhVniAJymhrRZFFTStum8Hq7GqTxHjUdkT3MwV8ozUqwec",
  "key40": "2AvjyaFHxLuwLkoVPR9XHs9qYurdjbDZSNpxT3ms4MymE7vuC29WYW5kazebxdp6mU1VwGeRsNejYKt2Tyk5VpgY",
  "key41": "4Qe27eN6KeBxDRvGw85gCH7imnovVgfby6Y4Yyk5nyPry7Xnfro1HPnqr8RmvzW2xxnaw6tey1LTGVMawwpzHZki",
  "key42": "253MD6DkS969tPqdzyvsNFqLnhkfJK6uA7ESCzREdYfvLy5kCzaG4QHMoPhuoRHBsYdJ1zRF79jqerBQyKDKUNJZ",
  "key43": "5mBDeChM8vuf6mZM2os7mstXm743RvdLHy3LGNATMq1cdG5kS1E2spCXqgftsodXKye2VLTj8fXEfYtVBPEvtioy",
  "key44": "2PpQgdgFsG4MLpM2sxi1u16WBtG8u9uiqTngbBv328e5SW2uHyrS92mGP56S9LPdKbtQ43ZDWWryRban3z361dMq",
  "key45": "A3BQpaptTD6sMoatoeK5HBmUfHm2SYxc9PXqoqBj6Qpe2bkqCpeC3kkvmh338QUiD62NkY8bM3ghUfbZJShNEX6",
  "key46": "4svHBeNXXibrkjh7YAWKrivt1FPdnxV9FNTT9nnyHTAzviZnR5BUmymb9xjmBPf8GGnMTXtM1GkqSzJKLdL7Bcep",
  "key47": "2U4xMP8yNeKDkvn7f61eEEDY6ZvSLgjaVHNoLZbe5hQNNWzvanJ44ztBCWyBjv3S8FNi66yviKkgctmrNVcaX2bv"
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
