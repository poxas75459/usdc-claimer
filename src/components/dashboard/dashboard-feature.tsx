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
    "5yN5Vz647NA5YUTgAs1b7oH4QS62BpLW4sCpFH4C63Xwa42JbmKucbQCFEQf6i9GznYTXhiE5MctFFcH32hxXcmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZTV8EYxuuabGWASymnEaSLyscobn5fPaxPpwwyaiGkJFT4aahxJHMCakbd7vmbJGgSr6Lfie6m2qi9uoC9mUNVz",
  "key1": "9U1Z2bAZzsoNK3GuivAC8rpwuWMt9YvcjtcCt6iqGUq56LxN3AvUgxMCZZxyTFcncxTSgWnFHoQQXBBGhcWYq2C",
  "key2": "7qM19szwJMNZPL3BDvQsYBEH9wYknoPg9fDgga5nav2AidJfHRokWYmDRFa7b3ZkfnxkZN6kiQfCnHNmZEVLzRX",
  "key3": "2HGfqkSgLEGrUjqsW9PGHadkHn4FheE27U33th16b8mGAE8MQR3UqtW49DMkyiNp6XT29KiduuHc5crr93EN8EGF",
  "key4": "4cdPkXDea8zwnio77rtjRXWsEZbftd4AEzrY8tbXeaYUCAZLrvsETwvtTP5krNoDvzfcvFK7cwMCELVj6V7EDFjr",
  "key5": "2Yo7LRnWmmNWXG4ykpHyBWKuRuZfidWV22wAe9A8vnU2EvkbsSHLhFfqGCvXzsdFb3D1izabXMKVkFGrcAbCo2r6",
  "key6": "47yASdxkaiQxnux6nbPAocLdxK75iWsAJp4CypU5t8QYfwNn9dvuyFQsckFhvpQGEVnbeC4aqpms6o83Z1E9CGmu",
  "key7": "XkaC6LVyNPPMLfUawM1Kj2pm4WXxWimnG4cUbij2h4EezFySnfHVzw416gf6ZZaP8n6eLZgntf4sPf5MxDVp1up",
  "key8": "4UZzUANH13BiMDLv8gNztofx9LobrQdUuwvooyLCBbBN9GFGEB3e2upB5WXwCuTf8Piwud9e3moh5fqrvx6Cr2ni",
  "key9": "5NqgA3iNFhVMTGkEmGhHcMD8x9K8XGhGGFBHN7sXb7bbYkJYqCatVaxThurUf4pAEcYLmSkV3W5KYC1iPb4BCK5k",
  "key10": "3dDmmL2aCRHnuE6g8Xs2W1XB8jjpRn8GoYPWcu8MPTcbystemn2dzWD6jL8zQp3CH1Q4qGqFWnN6aCtdcdaFSbKt",
  "key11": "4JCDijDuGXdUhJpftDouYGWoQ87s3AdEMsCiZV7vKCQJtyaAgJfU5qz6shudLhVVYWq7iN2yjFHy1kFximTVEV69",
  "key12": "58mRdko2d6KfdKTvw6Q19nb8cCgG7uqRSBRJ4KdMLqfzci7RumY386jx9opkxVPy3SCUrbR25hD99ttMSjsGHc46",
  "key13": "5XE8erKSLq2vsWHunecTRDzY53Mxsn1vSqpLG5L1SGcmTscgTLZn84acD3YxDRXpaconNPXH7gsmuYvaGWru9tD1",
  "key14": "4m3Q7JsqaPjqca4v5RqAmhQAYjPL6mTvkjt23V8k49DrjxUcVW7pybCEoxCFogzECmjpLQCh6qGnEUMqATxueqcT",
  "key15": "2BX4k5peJBGqDzERUeggnRPUo57yn7LqQkajeoG2fxj66xJTuUwhUgWEfRoEEy3rYRUa6gSvKvdrXucvPDBUiiZW",
  "key16": "H1qqUKMWFcBBkJXwQJbaBof4shxNZ9VHdQf8g9XPVLZdDVDm6FSs72FdCW6wy3BsLgwYmmqinm1UbC16YfyRBWr",
  "key17": "2iGQTeayfN1Dkx3VD8symZpffXbYytXVncRXE9M6XAh9e1YwoVSUFATuy8UuDp3p1YuBKvqyGpeotqMszxHjQ9gZ",
  "key18": "4PvKXwqRnfe6BcNfx3gHu2HLumWQazswBdVPiaDi9UpFXDjaacqan4imH5fQLpBNo7YSUTrJHsaHPz9SN53qPEWJ",
  "key19": "5PYnZd3M1EhNhdSxRQ4fHg5Z41nK1bgUuWTfyvKDz9GSBeWZBruivG36tp5tR1GJv7myJ2Gtx3SBAi9uji8oZjxY",
  "key20": "3CAyXAvVK6orF2cFAxhzVffDzkB3ubYqBGD62gXPbidF4htwetAnBzzizbDUFiA4da6v5E1UCdgFyBncYp9GEKk4",
  "key21": "3PMNaTAtqexCpuhRPio2FxSCyCv3qisf7M3H1pqJ1knkFDH5GJhFuUWVnutWTT9JUGf753WSiwobPpxNdH3qoRck",
  "key22": "4YHNAbMW2HU3xLJkPYQRWoAV5LxzrDYKBwHqmpDFK9oiwFVx36dH2V4HnUpVYMPQXiRyEW6JnyKwbufDjZNkZ4pv",
  "key23": "4kCxqnJTmNoxwc7uER1TaJLkcxZgr6ZC4QjQKXF7gJXoWD3d91ConPB4tqaRtg6w2cNtsBs34KnGAN9Sc3kewPqR",
  "key24": "3MxLUqezzzpB7wZprZUoRxHyBAFb3RVqRMNqf8oLQHstmwCz4KDUFn4WrEGM41sFSQAcvxMnjHTEbg3DUjcJ24UB",
  "key25": "4F6fLNCGT5iyKXjrs5ejj8qsNu2vbd8U3HaF7guQimDP9EQqVBNV6sXzPd884rywjimFAcsTcefnT9mQdYQcX68Y",
  "key26": "qota3UhUyJi5D4asFMiYLc2JVDLPPwm5ENPC7b2p17ZXuBdvj3YHdu3jVYNSyEZVq2jGN4WNFtgTtB3mL5mppTY",
  "key27": "4s5hKKG5yqrr8636QD8VPzLRssGPLtbMze7KAsQsrNcf6n4f9dEf2FUkJehmvHHZ9U8SaxstnLaganS117A8WsFL",
  "key28": "3njuxpS57rzdckFgeqZQBsggGaUtEE5dxYNsajJZ8UKyUMcLo1bFr3q7E5vNPLYyTneYwbNk8G8PPYMN58bLFPFC",
  "key29": "5tKhpzLH5TzipFjJx5RtALoCgzdzAEhZ1HwF8KwEhJFGmXtYUfeZNYqwCqvdexBvXwVFcjA2DHddho588zB4yNob",
  "key30": "58z4E1XGVfQwx12FRtv9SUD8Ug2gohP1ab2nBjhnyyJU5ZKT3p3Zcn1rpCb33vPV5EvA5v8waYJBhKqASibkTAPt",
  "key31": "245HTCqJRhTQRWsDtmXmo4UEyE3Jj3LRTtwJHdAMqJqKcXKYxHy573NHJnK5Q13eFgnxhbm185hFdnpx4ECiVUSN",
  "key32": "3ez6DMCRG4c9YpAgWqrWyEH2MdQspYdhE5uynyvzgoH21y1Aw51FZnM1TWCKjjEbsQZDiU7FKSAdTm19nH67eFMT",
  "key33": "4xAVUAKRnrcZyypyWVxCjk62ArpZB8D63g9Z87MAw4empSANS5kiwgKM3ExAe7mfgysasCanybtezQaWiqozudfN",
  "key34": "4hPhgebYMDU9YL1jBeVbKRWrgA1VL1gYXXwqtTJaUUSkGfDMiuQtZ2knKSW6B7DVVmV9x4HNA8MyekRkUp4FcPoV",
  "key35": "2GavTVbLyknU8w9UQShkYnXzCP43MUvRdLcRqr9uvzdfTr4QHV1k68y65z6coXc26fKWHWqbHZXvDhethhP2Ypwq",
  "key36": "3Y9xW3TRto1sMzAmZiAChRhGW4A1yUuCrf9H8ragDwsfH5yAZE8R5xct3sLRVVKwnuw8y8yRfZT7Lb4fMdePy4na",
  "key37": "38k29ziYCMi9Ka2VF726D4LKjDP9hL8gmF34TPJsxqTFzJ869DAm3qdFyRp9N9YMpK6QyH1EvzK8sVnoEmL19Jh9",
  "key38": "uyYgvnnGcriboLqcpW2fF5CWULGgbBsnsH2Z8wNXQaCgQUaQ1nTpchZ6Kr2rEJyxPh8gzTnGV2atJPRVHjP6osz",
  "key39": "37ALq5ky8Z2JVqJYSVS3vViQgCsingz1VgoixYEupaGs77LVfW5CQqVTw1dSsT3fGsgfRbBeDVjdnzFnQEmxTeLh",
  "key40": "2SY5fxDWBBmJERhWoRBQSxTFbhmLbY6so7QT3MDbb4cJRfiS6VviAFwC5Fp7DpN93ky5f1ZZe4H3GBwgDNdPNe4w",
  "key41": "3DFn976EzU9NqpxenydWXEGgPnj8FhxzB9axNd5X3ZGW7NHyVfHmxMwpNDWt4ka2rQ3PcBh9dHS44pWEiiVXGd6y",
  "key42": "21dSDooBSjBypYrrvQAtH8q6bH3mH7HMxTSki65dZGY4wBUxbF6HtXnrEYUjnPPHgMXuLkyrQYka2GBiZU1Quzsu"
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
