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
    "2qSet1gs9bAcCBUbA19kw41ko7MdpATNxpRiVkz6diRYC5UduF3NC4ZUnZCdh22mVgUp33RfkN4oPyVsLrZzDR2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tT7cHBLE797RAEEzRELhdJGmA58ULR7shMB3HhvaaLG4NEG7XdbNb24icfgwEuzV4YgDgnUqnPCE3Nyzo3CvVH4",
  "key1": "6EKEuMsdWMWSyy5y4ud7Uyz8bK1GGePKRZ6e2EgQhjehJ2uT5ENSfPPJH8JXLHcS1KWyTAwN5mq9ym73bGpcus3",
  "key2": "52YVSfFxpZzi4xs6zRmWaANsE6jNCfEEzhEnZCRqqZswhwjZCKPeZ2BA9AUXgRmwqUS5cFrVkRo3NURc8Jgb2pjy",
  "key3": "4bpNozGohRzPrFQXwZu6SC7etvJuvaykSLALatQGNXVqXRxLABiEEqjNMpXDMXUEXX7seA4pgBaVKBbjH4ngc3DB",
  "key4": "fPbUCt5ZMFybhp1VHZRrSDQQtbPnWWEDvQZAgnwmrm1yTo2N8PNAj88Jug52SJJmM5eDRTigoN9Ka3mneeeaxZH",
  "key5": "uissXpHNw6BwrEXJsZ4246NdYWHxJkvo3KQBHscPajaAr4CQdxJAkK9Zfg29s46jBTP93gfzP6diBqrL1uix24S",
  "key6": "3pmMgbhJCJN9dHzGwkEDcwt5mXR2GdAK4t15SPf4bHKtdmNduawX8cVsEygBpoix5LpsZrePFxi2PY1rRdF5wHmb",
  "key7": "4hdE8bEBLt2if5JKa6w6LT1aqRVo1YCeNXdeeXrDhNfwBRf56PCMDrGodQEZRRHcWytc41H8dL3xRJDX8HX2rte",
  "key8": "4oK6wSSY482qMD67qnyxKVq9wXgRhY4SHq1oS2F1wAMzp27uHNDZGzFJhnFhLvMfeMCWDf3ArHLDhERtvAVieXDb",
  "key9": "3CjNLDcPawLxNSiNRxNCQJ2h9XHhnJj4gTGTTt6Lv3c1fjUz2bMEK3Mj8ZhtwTq1iPUQdmkCPUTPDEfAvw2Hauiy",
  "key10": "629m6FEYLEoM3x14VADATd8Jf16c1N59cTTbrNsr9Z8EHqE7CxTx4WzruspxxjRVK6s3qbfU286q86buJwVTN9xU",
  "key11": "32S1Vhp34hwRhRnKhBkSzBZfPq5vDEM3grkrYnxvBSACEsKsJVeSwJtppVGPH2cdDyZNwc5TtuHn1gNg9xYMGzrH",
  "key12": "3CmxLbmAwTFMRrh3NooD796pYnUAwWu9Rtv8gzcywjpbhyFAMRShnFZeR7oFmC4Q6gYQ1CmaJLCh9Wj5AfBKw7YW",
  "key13": "kNA27p7iZu6BHyS9Wu5SP6iKNF72vXUYYnLYqBxt1JG1CvWuk9pfs7xmLbd1Lh29sQT3PHD3Ny6mLgzAwYP6zQv",
  "key14": "3aZoZ99YfEmN9d2XerzekJ4P3Cbx7pAGxqazTuxFt8QvQ7LQPUc2UqQwTVxkGRCPnGVNAA8Ss9rGNtrsj8ZLkykJ",
  "key15": "2DNVDSabTDKpyH9ncrhNdVXtJE2w6xTWNySxdHsjjfj6MyUvSa8eifB1BgYRfFFGJLRpEJuP4Gmr1ch7Syp3eZTD",
  "key16": "5pzKGT7QsRzTDYmBd2WbJ8SSK4nmVjtHYBJKWhMtyW6aa49YVisE2nLBGFRya3cwKP6w2AuFTxyvEdLBNk3Gk2Yk",
  "key17": "5bsUqXNx5xT7JAJq8AZepmCTDvPDiJpne1QATeEmqdBCizJFKXffF5GNNESZZ4WjttFiarqqDrYUdWbkoaKSyEKB",
  "key18": "4CYWnJ1uYSB1gwK1rTjaSerWHWk7wCAWRAXSKh3mcMH7oYJrQsRMBkCxxKWUArHXa3R3bz1ZS7gbohP9rcHS88po",
  "key19": "5g22qjzJUSfBbKtDdxaaom4qN1vegK4YVmiiS94g9ZMjAPSgsK62FqL8sa8gHTUSidu6LRXxZgPsytwm2kB5QiK4",
  "key20": "4Upxv9Y6Kjo8kTzY3rBecNcZwGL91gyUqV36U9rEgoGdVuoJz1ZGgf6aWNQ5dnu7tfWsvj7ZGCY2FWTzKR1oizbQ",
  "key21": "3SVV7QdpqHXJLRVyxdiZZ7NVvGEjNcxL3NQkpTuwZixqHq9MwuzGYyxiFEAwRf4z7Yfb5nD1ssvRUhs8nTb1oYMW",
  "key22": "AcUQBnnabW7yqDefKaghtvUex2Mora97DbcYfMHDi9RTSMMZxfQ4VdiJCYAf7c3A16Mj6DksJankHkHCwLDjBcB",
  "key23": "xanWDrQ5TWmSVtiseETs6ovkh1YVEMVobFj2HX8ad8GKF7XELePMwPMxsreLgpgonHxLG2iDR9qHEqp2v8YMZNf",
  "key24": "4yYoi4fGxgKMJYVrB5Nb3CS2zUnyAEtTqkVEBt4F3waizFPVYZ76aQRVGbQP12v5aSH2hF5qQAjcpqfUGnPu2mZD",
  "key25": "3qRHHzhU9wwoJdufG5VUA3KB9Gzh3uNBmBogPPNBRDUWYpUBCAPKGx56kzHBp9eSKRteABa62M5V1TsgnmZfve2R",
  "key26": "56CTtAXAWyGJ5fNgP75MfpsK5yNEdY8Ur7QLLkUqFTcEgbMmpHwRcHZh9mHF7tJuGBpFsUCCJpSzEKYo4zxEu75E",
  "key27": "55bPKjZRE4e1oPtj9b3C7zGoXexqagj3Y3CFcggJwGc9xReZzYoTm9fMHFWJZLxHunHq6NEY6LnAvqf37YuUUY8L",
  "key28": "2VMEfBYhVSbvCzTYWHUXEmfxQAKwoXoU8myJo7ti19n7AwpwpxzHMJ9UUvRZHjmdeSRebtwzx5VJeRtR2us48kYe",
  "key29": "5K4BkZXvF5qtR7y5jTwZANKcv7tMqsnPm9cEUQNcTesUV5QAV6jiHvJTGQQAHMASqYEXX1WrBJJR3Dqajwf5Ygvm",
  "key30": "5ovVBn6AApVBUJASYZt9zEQ9S9K8hHYoq7adTiDnSSNjYLSbKfY88sNkdhMr8ZwXon4XYZz2VfXqr8woV79KuMc4",
  "key31": "65Kx7jBPqR31JqDoddEyPxmpthfRx8wxU6cNh6JPRjqxriD74VjDpE4FS8ULkHA1y8cDig5U1PA5GqiCDThxNuMT",
  "key32": "3V5cLfMbhBAcRtc1RkY1Z5xTB1embkK97JToBtSMiD3gVGRMSLsKYRrsNp1mXYEsM99xQtuhJDUazEe9j8CKm5LY",
  "key33": "22cLzSj2EYajSPXLkhuaGYqWRRQEybwzywUKN3PejxZsMbz5NvxKdHHSwtyA8hUKPb6Nq2xwadwGcnqA1XSeTMsy",
  "key34": "2Br6mDZhTAy8Ny13nZxaUrD7hGSrc3meZ4BXp9FBP7KUfLacDa7XtmynoRAgrq1QtVLagnNNaroKh3oxHgLkMzgP",
  "key35": "5d68JMZpzws1Mx8jNjNiNHUQgyE86X3NZLMbbFtpctJxMzA99JGoBGKSymLXRsuqLQUst9pJyctSdGRGvAYYNHrE",
  "key36": "5keU8BNRDUFGairKbHAwNgJsCPijAaMex8kTvxV8i59oXdHmrJd96HQPt4cUtgWtskYVmFxBNbwvtfDjLYqYpgCk",
  "key37": "4oy3rLT8FgpjxzGunPKCQLdZXrzFcpGfhMWsYZpAJB8vM6eU7P67YYs8S7yu166vNs51Ntxxp5WTr23HRxxSHLpf",
  "key38": "4G7kgbH43qHJG7nYy4GSG5KRDCHDaX9LLhqirRF6dyWAy1oFpjq8TuabcpY89qEHoBZu9YPrGUSxeEmb1tF5R3fK",
  "key39": "42jAoKKj5N7to3QcJL8xguL3279aQjdxZWiT3BxJ6DLs1JicQBbVZg8KMJd6hMujeyRciwFhJgDkYytB97j82Nz8",
  "key40": "52DgpYxW6UueXawgTz4igAkyzR3A2ucTiBxs9UYNg7VfJAswgsqctbDW96BNMu4R8ng6WNidVMx6UjRpMz9Q3Pps",
  "key41": "4chZMAcYpvLMbdEdEeMpsmwFUMGmZPsAg87L7SSozZGQxLRK464eT4NbyJV8JSBriKb6ZHSuHEsna9TkcskUhpAw",
  "key42": "2JqtgLxeNETdG9wjmRVwmwh8Xq2RNfmQxKMw8xKNdojZuQ3rgiABhSktdKMJdcYKyUYaJzBmeYKEXahf4ihzoRtR"
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
