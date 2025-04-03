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
    "7fEahFqGFZ6L9nmDQxFaWXZZvZf8vdFjWcaEzfmuy7pXbK3w7VuBqth2QNaB1k6U17JK4s9HR2ZZAe7UCv5YD5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543zvCSFhhtsLKUsXXYsXZZLhPnt2gJtjiGs3baPxXdSddC9BDjnFUh1EWiPTRUnJscjBSFotRJU6EFsHccs54cX",
  "key1": "3etMj2bYXPZrw1ZyAebNn5m2BRQCAZuG94VLK8n73H8kat4tVHCRdLSTDd4skZRNsy5vCfiaCoc9k6SPy1dxTpUR",
  "key2": "4PE9knzbR6Dk5Dt2VfY5876hrsGQH4fyiaYM1cQDVbGXKBoureETsc5AzCnbYawxnKRWyokpTpC4xQ9GnCk7s3vB",
  "key3": "22m1hcXzdf8BBnAE6qXdzuRxGK16ELWdCizbhQJS8NLkwa7ufQE7HiDETWGeX14qNXZLCj7HcG5qB4fev7jPSvBR",
  "key4": "4Du1ezt8HQmaUaP61vGL49SjXMMo6Ftf6omd8jMHR9MxPF9T64uDZJSCYbBvZTnbpJX38q2vWc9ED2XBhLpbrgh3",
  "key5": "5woQ39TVheTPaAaMKK7gGmBZk9Smgqv2Sv9QSFTq2JZfLax6E8FHUsWtKLqyoDAxmxAe5TfdgSxVLU1JuSqffd7S",
  "key6": "4WntqSpEWnpEC4vB6KhXQbBigTBWdJxFZDCUrdUX5mNaUhZUe4sAxe8FqEAGgepcwXTxRpGPKSXQ5CYjvW5n4Gto",
  "key7": "kzNm85Z4Wh1e5azoAWmheLVeRn1cCqWafsMBFiQfxsnZS78F8MwJ1kgALA2Nko4Y1b2M5LkNDEU5bqogeAwetL5",
  "key8": "4czpFeuxCYdftiPjsqTKJYsnxuzJqbjFdNFQb4GbrbiwjhgqxL7fxHm1BQFupD1airNZWiW8ZUZLEuzXXRg9Nx7J",
  "key9": "3ANSFiFu2ycSiUoiQFxPQFX8EwCzMwe3Za8LiAf223bRma5G9A3LXkFycAtTgcWNxVW6zwgKbY7sC5M2AuMZw8MP",
  "key10": "kFtCz9pQTYwPggu6cPr49B1pMiQV2VnCwWZtxboBFGXJZYHSWGykFsLS3JFB5eF8pPcbqdigSGJi1QmMRwsCtMC",
  "key11": "5fhY4ipDmbKDr17bGfLPdgEK2kNZeuXWbg3UqexsWQUtvUSigBMyAaA4g9TV1dtsMzecifLsERiWwh9VbUUWmdcc",
  "key12": "xjW2VJWSkKhC7qdN7SYaP1mEcuvvuPtMo7FUaeRCVne6wg8UF1vFuJjCzd4YVzPFD4aermGWBuSfwk5BFoC2SSJ",
  "key13": "3VdV2rzpcbsTeLGc6vsmYbA1Q3ELejYoLbKRJirPRwSH6CbYWr6CjgBU8TB6utQLEQYpzmCiMARZgHmMfUZDH3hj",
  "key14": "5vj2zvd5Kp5hVgf2M4SCMkCYTmcsYoe1wxWVbjRPAPf7Lkf5RLzZwxhRWoQaKacT3ZHCrQ2U4CQ2j6ezAEfQhcpr",
  "key15": "5Qdh5Pdw6atug4TDiaqFQK53rn2RmUa4dtS7JZdhuGEhHGXWujxvsjbyu9nxi11fEzftK6CF2U53uXNffQJTGapU",
  "key16": "K5zScwyspM8eQCn5B44NmhdkhPFvPcguKPJwYWd7ZfzwCT8pk5hrxEHMhwxH5FpiLMwK1AHEvK9wuGVHvxFAxN3",
  "key17": "vkuWT1nsKUF4CZCZpmBZfxYKag4Kkm7u7yJgK7PsR3PSoqhd85LPKTZfqJKrWZfkiAkiSnP54oNLdponzTZ6As6",
  "key18": "bDnu1uY5LCtNwWRXfqhwHAQYwi4U5NuDxWmuizTedSR21PvFM3dQBKyAS4WXay1PPZa6gJWyhKEGhU7KpyBzPFC",
  "key19": "2DNHTkMLs7cc6C8NMFBymBZ28EvWvV3u7FUNrKqoq3MYTvWm3YyT2LHoKdwv66mEq6cjjcD7ZfCRzTrvotGhzcuA",
  "key20": "3EAakuAs4YQ1a5moq9Ds66FSVhGt1XxgXQXSC9uvGeBUzRB4kTrZr7NEBDsFnAzRgzdKLfg89XrnmyW9f5o2DLtF",
  "key21": "54zT43tX7Sa76hf5gFZz5cDk5QuoLs6dVztf17WNyv6oqcDxquyV5A2bc9NJobb54kwQ7WZZ3WEZnsAZmkAY4r46",
  "key22": "44uubcNpGsVMfvrfgeU1P5nwdfJYfMcYgJcruKctQSdBbm7TdQ2XWUukjqGdm7RxUKfrnmEfrp5XD1xR8qvMpHKV",
  "key23": "3o2Pmu7RJZf5af9tsrfe4Sv4SF4mqirAytR7Xqaq59Nieui735TS5Bh8Nt5dzW8BvMXyuRvmcNB7tcBvHMgxqg7y",
  "key24": "48iBjPDCe9mHCVSXSKkRPKPipWabUucA2RwBzo6oGBKzTW7VzW7ZfZRMKyHimQAjw2why9puQuQLeK25idLR7Rsw",
  "key25": "5AFhar1hKrJWrKYEFbb7KvLLwC1iSsGj58xrcDGRmqKLHEnXtTKFx5nw5XeQciqoukTDhXpP7dFj2shuv5upU4x6",
  "key26": "4e5rDMrV6YiwwifbbeqeDd46aBvwDNiW2Htse2NrWoFTCFCAY9S1LM7PgNH3erq4vC1khdpw5rboUiFjBmVHbHZ7",
  "key27": "NKtp9VkqF5bbpXKtFeCEAF6sAkeMjBMfxFLziHw97eRuuWNVSM6p577czkc3zd7hZ34ddA8jVF5fyJgqKtJTR4T",
  "key28": "3VZehVw8EnzEmPL9p5JPBHAiieUBzr657kNEeWZ31xXxxPp9UQ7YfBJL3Yqb65AbLKrPNuAjLXqeg6qHCV3ae6f6",
  "key29": "2KktuhVjtStHbohNdn2gFbB4dB1xA5iCMNDACgQvVe9RDewro5QL7dZWKLhhPAmpqmD4CvdDezhCPa1carLgmeYt",
  "key30": "2W4PjoEF7v8s6o6YFYT8pafLPfvSHy4wBB6vtjCYXcDCyPLX3BhDwgri4GEWWnKutEa4EnDyaYZiTapkQp8Tz1Gs",
  "key31": "2tuJvzjYrVEAYqxV1mJ8rUS4ST421AfmE9wjiW32nRKsVBuhDMjrRYDLjjraELRUC7pX9zqbRJSSQUCba8ksExZX",
  "key32": "5AgrzxXvLiV8U1cxrTTAvt12xFeduR5xF1xQcuH1n1cSa1vaqncSFJc7C9iNgn5oifCRqTrnJEECWRHrwh1SqZdp",
  "key33": "4U1Tm6MTmY5A4uWRdoTUW5jswfMyPCAucEBa1gfJb1rBzTsrvUpAQcy39LompPmup4Fm33VFfa8T2MfSHvKmvwwm",
  "key34": "65GtBiQtxQtKiBkJTcm2s8oi6dLnWEHz67Jp8AB4rJaywfbqzGassbWpE8QnVzRGfcZriCGMTogPWDxKjGGSoM6k",
  "key35": "52g8o5mxg59gfZv4EcusVn3qwAu4JEJ6HjCFQeskLrEd1uWcmGsF6Avm6PRbXoduGAoaZcm7YucaHLSR4BXQiaix",
  "key36": "2oVjr8xXrAuZ4HcUeVHEQqzwepkcVDV3nqfWbS57r7ADBqdVSUdPPY8HpXyTEEuSZQJg9ESGrqhttd6NC6muswsW",
  "key37": "2o2zLzGu3NKLNjvN4vyKbJf9sUDkAFaLcCscve2Jobu7KUn9hzYDd7wFMAqZ3GvecFwxCeXyqaxis3ZXBPHTAQVk"
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
