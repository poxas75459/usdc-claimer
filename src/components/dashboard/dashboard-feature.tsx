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
    "2QrpAZG722GZXoa6GwVwKos2njVBQLpQxwHCqFyDnpAsMVFuJxxhUxtsH9izvPzFacxYwrxWgGEZD9YX9juT6D8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MaSuwpYhSqgtqYhNmWyVEqNZnFz2M1apRYQX44CzhiVztkgL4yqEjTysTcqENdeckLuQ92TDo8T69o441ZBQBk",
  "key1": "8UMF54B5vAWWnPZksCj3ictMRi4GXkRDoqsXtpEbZhLGMhMt8mpbRAsZxFemzaqNvXxfZ4542NALMnmsiXVLQoc",
  "key2": "3V3WWipQF8SMqaaPT1iYpVd5aT22q8WDTWihKGma22spuSFdx4sLaHQU1b1XrC5iGTHYnY3t6iCcTP2epXRtU5YU",
  "key3": "545YiKZrShp5tgdyypspvQgDHqhpDjXUSGq1ijJQ1SLGAUCFZ1NoL7EVKAmq9T6PjHN2t4vPRDtve2tBMDsHm36P",
  "key4": "5LWCjwmxxfdenWWAUmSgjnzBsFL2A8tShDoLWg6bytm3USXLPnxmcKtnoWdPjARe24oVjPuMvgbX374ezcpc88A",
  "key5": "243FhPjL9d6wP4X11WykD7tTPQAbH7mxX7DJKhHJGNjagcEdsNL3knEoHEUW1LsHBWDg43hTU2E86Q4kSaKkwCEs",
  "key6": "4CJUbp9fm5722bEkRrLbuVzWi4rh9gysMEh8P8zzRRMgg7Z7ocWFEnEGeuyt4vmgCHEhZowRBpAj7mgPCRaWhFiq",
  "key7": "4Mn1cjRUiraUvxjQMJMoNRH2GKt1zt2TL6h4hoCYvtWRzMm8PE57HdGNP2j2YHaoiuzUCYu2GyNuo2pMZ5G8w9KX",
  "key8": "5ZuLUiierSgqJqnqA6sqZ3AJKcEYVMMTHVqvfpeG5p8V5qfxkdK7Fnp3uh7w6ffLtuqKu8W7ZK94DhCgGzDxfMhr",
  "key9": "21jtedKXz2kdaLEHpYhxJSXJ6CDktd2gtcuRCn8UegbXk2RxQfy4zpAQFcNjJphaDuUTsgsCFLPqZCLeC1N7gk76",
  "key10": "3RwYgytCs2zS8Xo2kFuGQLGQYHkLWTnG3DujQdmQgAAutgPFF21ozmDeykAfXF8u3BvdhB3AtrHpcFzq6eLoTMDR",
  "key11": "3kduaNHkTwVKPxyGtdDtM2nCXSjMydiheJTspibx41o3Z8Zvouyi6UPwhoETJgjiTWMCNLYm2VhaBtLq6DaB6X41",
  "key12": "4vhcDPbRRyWrz1m8qY9RXTK6KuFZKZPhHtAphFbPpuC2GTGGbnqoFnFGFYFRYnJ25Uh5xqJeJH2vKyj8nQWhqxN3",
  "key13": "3P2p2Qt19KWBxNKsaKN2ULYdxC1kL5LRzw89Q3FTtTgLmoiH7Yf5i94xYaWFw2YtwFrBZ8oyAPiWqunJ5Nh6NwG3",
  "key14": "3aQQaVHPV6PyccuLoUHDJ2MF7YJXQEWRSpYM8ytsfgUWkGVUzW76yrgceC2gcdYPpM7JoeUpwJAKur6bfE9GZ44s",
  "key15": "5SJmi4U2VcpArAij61uokLuEtTVTMCa56hFFxKHxeCz7SmFKDxPfAJnLKdS6PT3o7QuMRLYZK3skUQW5KjSvgRX6",
  "key16": "2HCq1YJ74mhacY4udnoTBsdwSvxVZR2uL48TsqTSYKymcot8n2RFcetLETPRpMWzq3EWDjq5ni1soD9JJ5eavcNt",
  "key17": "2MYbJwpc7N8NVf4FEpe35fTTW6d6Rq3JagFTTVYMattbyxdBQhUHAf9e52bf5UeH938fLTdtCvAfGqZB1NhzjznV",
  "key18": "hp3QXvE2DLuV8M2y5x5KaoTi9Ys3EVUcFC2FWFi1qEMDCvLzCy6Nn3FNqkNcMbHx94UNuy8J5M6pcG6aHpQV1up",
  "key19": "4rSXb9Vdv1KWQ7WN42q2WtLyDrFSSyH2Cm6QMpr9AJQa66KadHVDx7DFhkSFJsMRaAvmqegmnu2NdYdxss49hw8P",
  "key20": "56jQu6SHtbYPCk7W3mHBP1yPpostN85zymcVR5rd8zjtf4Wzaf1E3ozD1s69JQQfcLP4tYQxS6CHFsaZHGKFMrsf",
  "key21": "2MXqDDrWQEfCohh1XHB7F1t88Q5SubwRFdXnPZoZbqRs1EFtPecWAKpD9UwLbTEn3PYjx4CSpwAtmgdrxuRo8Fvk",
  "key22": "2ER17Brej6THmdkFR2GwhxNuA1Zg9v5oQbMjL2Fk19NjZQZHQnVLuHY7Ebj43dj2Ht9PJpoqtuJLnEjbqHZCXgYu",
  "key23": "2kRBzEA6yU9JXpvKbXz3JKhvJVJRxnGvT5jjyP79xEZVyPeMLcpdrgxTHwPFE71yCakq4Sy8MtKgGxz7DWbwtthg",
  "key24": "3uRYUTo6hvuGcxPGdazoQAQzdV8SD5QCuy3JFgQFvAYwqXWsimCEf1g7yBGfHAyEMuwjYhR9X2MgqWt3wUsQNVbd",
  "key25": "MRJyKeD3m5Bszr9bZU7W1m9meWMbf3EfEbYxZpkbVuy5fMdxzwdGZXdbChdhs6gEv7nze66UZvJToJevCnBW7VR",
  "key26": "2cpPrjQHmZhgBton92E31eCR6itKwMLrfUZTwAsXj3sc7pgqonvYjiynPisEfBDsA8yWpRMZr42se5CNjYNxEMm9",
  "key27": "Mrjzpg6zGRuDMPepGVbuTtxNotaeNz6x99sQmyYCrrwtSBTUy7D2d9Am7e3Vd4bCtX4KYTvoQKmmkQYj5Z9nCzv",
  "key28": "2W45C99ze7EnJFbzHNjND6BTsP6Y4Uz6ryZnwGuMhxzDgPKN5HRx2zu5iXfmGmbeXmzNVTfEcKFnN51DKsyZisrw",
  "key29": "3x6GLwErBNkisoCbKwWzLrXCRByrniFa3dUQGF3j351NvThvBTnSZKne1yku9PsQp79rHDC781E48o5wkUPNkiVF",
  "key30": "3euYzAYodvQAefPAdGhpkEUq8LnrD9poCHdM4zLFqG5ZhvFbi9KdecGqUgadV1fEw9WBM8REy73tECe1eeAFpdEn",
  "key31": "2sqUMqDLmJvyc1YcjHpr9Xi6QryA4jpsNZ1bm8jjihLLcZ7EGtvWKGNDDRTA7BHwHRYZnDGtpsqvxqq4u1oFBZs6",
  "key32": "VXzgU6nkvBVA6rMfqwRMtTnEcSxHLD6dHjTYxZoFDSDn9hYeqayxswuCoaCngNiGzjtqmGpW52g6RNT6BbRimzo",
  "key33": "2TfKf1DGkLyTackjxKDHDqghTgvb3SukrFeEspKVwMs6KeC6SbKYcQJomUiuGEK9vXbBSVcjJK8yirsR12G14j9x",
  "key34": "5LSPc2oMNkqCsnbqULsVw5EKtX3kgNijdUu2MoWhhWcRFn7khwY356qaP4QuKAXnmpbP9CMbvvwMwrxdnMF7cZ4U",
  "key35": "3LF8pp5P71LbpS5VLo7TBLGcVjbnbqVv2ygFBdQWzi2DsATf3peuCJZzMYsEYzQ7RfoeQpDTUKLeEesK6EmCukAH",
  "key36": "2x8YSjPNMJYxrYmfj1ahNRMyqqg2qnp3rkytdBaK53VLfj8wg7iGjVrjSEXj4NzCKkMSDxeC7Vjez12gYawxYRvZ",
  "key37": "3MGdRE6k9aDJRpGBnU2z4sgq41Ugk7PfQvAM1txT5VZCbKvZZQKna5aaLsWi5btSGQeiJ7xXh49151aN6K9FGeVa",
  "key38": "UucQryt73CmH5da32Z6z58eEfp1krAKUbSUvzJNHv7h7FfbJRM6dyK4uZtQs62D6VwcNr9JYTScdPnwowJw8kMb",
  "key39": "4AswmycsCCcAZTdBjEeeidYdZhRR9FzsiqeG1ARaMLhgsKNHyzeQEQvWuMSKr9VpLHqzYy49Zou9rAYb1QxaM4P1",
  "key40": "2zkAJwaUpMiGX79TxeeZtugRtgjZHfat1mZmTaHzLVif3GkFeuAUNkkC887DEdE5G4oEqcyZ2hr1XMMGBcQQfasK",
  "key41": "C7tXcJk6FFzQYEsntgc9YSoWRNNAngLSSqghe9vwbiZNTe25mEtxKQe26XLCDQwtekgWcHwPGwbZ8FsmVpuHsqB",
  "key42": "5NM1ynuyS4yWWrFPLz5orJ197B3Qzp8hTFhysdSwg9TcBkAJsrHKvj4xkvC7Map6nWNdxoHxeEeUGGEpxkncdtLs"
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
