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
    "8XZdKUYWDsAacnFbcL4dAkR4eLeMgMTjV57N24mhEpAuoGuCG5F1vY7bmb86briGBQTTLtyGkaTrsB5MpVM5kPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgcxK4t6s433zvvqRzBXWwpEfR43xvqPphPAPZBmLZc5AgpT6NN8L2AtKTVyqLYUjX9svGnkJBLzBmnmHRaYrgZ",
  "key1": "4CzzwBu93QbND98P9snzBVUT1iP6i6pnnE5P4TPzJCZrn8isZ22B1hRn5kZuTvJGBKpT6PsoCbBYjMYGm265enJW",
  "key2": "9rrm1vaUoT5CuavzVnBagZzBmjfMKC6duyjvf2cighjnbFGXyyHGPuQGxRCH2QdXgpXFaZSh9YQ1PZ4cz8tfGEF",
  "key3": "2nrpB4ktXRBrxTPkR6zwjHuLnUbBJLHUYsVSrc3fSKYj9G9FcTr3MQi9wDPV61gsC8idWiXXaQDZAH25XGvXjoGd",
  "key4": "rwoK4P3hvZ2QzGyeSBxNm4Swss7V5Jiv46dmRU2ff8QALDxHBNzU97o4kuem9epEMorTRZCypArxQVdU3qCFsnb",
  "key5": "3RkMsayoVwyg8xkrFYAvwMBdz32QDcvAch3wvyLo7RMxWiTcLtMXtBtxn494ANi3wXVjBPqGxgJxNXgN6jL7fmce",
  "key6": "63iJoVUtL6QKWCZ2Py6FhVanw6XgCDw2j9y51pMvMcKjRBEGoJ9VnHqW4XePNN7TFzTfpnvYr5JzZLSfXE4AhiyA",
  "key7": "2pTEXwpPYYRMG2YANK46he5pyJM9CQjiZ7EpxYkVvu1M9oe6AueSmLwHvzp92kdL4v69zkWq8aiyV8YYRAJEgxT7",
  "key8": "3UTp7XfNd3yCRwWKaYJttau6Bv8zf5hJBxAvJDYhVvNo1Pfu9D4FLsxckCCZjnB91UjekkJym1HM9dRAtFnoe9rJ",
  "key9": "7TCyk1rdkFzmxjo4zXMtTmUhB9s9DRLYVmdtKKZzLd2oqzDCjqJKYxS2DnhEw19f5w7oTw9vPZvZg47AqNH9mqf",
  "key10": "5SwmnRaA7ix2G5wFoDyzEyzcwBzND2XSzAov97mYrJ9bMy5f4PSGpFv8Fp7MKEnaySN14EGhQKYR9kda6V2WpWyv",
  "key11": "82ScsNApFd4STKKCs3N5WrWKsmmi6MDBEgCzBNHiRX5sqEfBu7xtCfp5r6bez5VZYUm9z9Nf6ufYpxiTRDw1cHb",
  "key12": "2jFP7DqHogBNs4bMB4xaSHaQzn32CAjtAHH6geDovUuwi2aeN7cirP2xC8VQq97TVCkhEMC6VWWMRxUGgGuZsySD",
  "key13": "36b5x62kCGJUtSF1TQRXRwEtbhZdYM1qhXCWfV4iBMGFyfx3L8u5QNp7HqiirHzz1rWuRpCNPj5V52YxKP4So4Rn",
  "key14": "ahpYKWSfwB2FmBnpY6BaoxVfPNVhWuFeB6prspotZiwb9rfU3CYBnEJGCgEsoZrU1boyVxsau6tnQS8pQDML1zf",
  "key15": "2gBA7KLHXpjv4Azw3pJSyMFPXLgZonBuEz12ZdLJDyFpycQYZ46AzaHcix7fwxnjDqZ9yYxtBd3ebEbq4aUfeKoj",
  "key16": "2NhxxVs3FEgYEkA9ZNjJxJwYkZEPq9ZrppDh3w1vddLcqhhqsQSwziciGsmsJcbDQupsZmLb5T5JCdG5fvPxRP6N",
  "key17": "3kNWKCN1bDLqEnBEDNggC4ZdnenoP4CJMQ1o5BBFcBMdjkhwz32pLTdwzUkwc6oPd7Cs1MqFtkKEYj2RtvT747LP",
  "key18": "4fw3kky9n7DYCuR9SnapKb7CX1ALL32k755Vy2AzeEc2z2t5C6pTewTFDejpKeedLr8BPKgNbrRDgT8L98kuD3h2",
  "key19": "3YURcNvkEtsbjtEuumUNM4zoWGjM6h9ZdefFkuUbCmp3JYu2zqxBCioU2tzHyCw69pRfFNCxNd9pexBixQYGajx4",
  "key20": "3rr85zjTsnqSTYJkSfSJuRWj8iRomv4et8VB5L7C1EQog9UTgEZ2jHvVfSnNR7BTW5wc7d9hZnZ52BZdc433JsAe",
  "key21": "5mUam5SHpH2f4EZU2hbPNejvRNqedFqW5MSrBas9zCFdKqvgrd1oBDZqg4wd3prXsQnh2fMDvycd35ZMUZuNjkMM",
  "key22": "45jEdJY8uUZUz9uC2vv8mTdgo5MUbgjmb8HKeR3VdVoap9tnFKpngXk73pTUhzKsRNBox7Ui8k1cdutuqDorFxfu",
  "key23": "4kp494HuBw6NVWfmRdc5JhGQtZERySzCedt6u6bCYBzYN9Fgikdi28awUVR2ZNG1jPovTya75Lxp9ExWqFXz6vVK",
  "key24": "2FiAT92rSCnwFeb86xKCDtiqYzNb3i3dAqqhJeg4Jhh3cxvDmvc4dqJw7KH6umj6jxtzRvGDUXwy7Uo6Ys3rnJVj",
  "key25": "2exe3V3BniGs1ma6kb7uRqfYhXb4bVF7vtwndMxTjVg8cymsAFNge2b1UmgQbEq9R3PdekWb17A9vUQtQkL3PbiQ",
  "key26": "SDQzQgVTExTEw5W1wkbA7uf4cTFMBtwuW8G2qVomUyhYC77HTeLuP2iDukSQEtrX1bqai5zrRUJrword6GJKeN7",
  "key27": "4W59fk9We2e7aUQc7G4eyM9intKgopWPdmzxWSCPV88kbhJEHVcMdoytiffVdkGzsZzVxSB4siYfMbUi3xNQvoRJ",
  "key28": "4fegmnVHD1P6tMa1MriMRzH5UJxWTVXGsKHAB5FWbLBt225MU14z9pH6KpoxqNKMuUEtg551CqwpdUDKWe2jwv2P",
  "key29": "3FHX29DSAYRAan4M79WkcFsCAGfcpR8GHeQqbXnRiYPHwMY95dzDUMgdVf62yiABJzAYP9EjAhmSvnrmzvogoLjo",
  "key30": "62B1eGDhH7FTCQ4n6NfxoQcuuNC6yDz1qwDuVvbpFuiX2wQLspFWvncmPP1ubWUnRnCrSUoRXhozJdi1w7mq5koz",
  "key31": "5GPdkkRV7LHfbFjQ54oBuBTV4bwUvQgpU2EdcWChKSqE6PDxp8tBb9UKjkjmDCN4zWwjpLzWxG7K4QrVbdA9zzfW",
  "key32": "4XwvN9W2vCiZmKuENmBjnAemtuFjwgViJXd2SwwuNb1DvEmaCvTqEQfYroPhNvkQVQnt8J5iWDuVLB6PMXxamtFX",
  "key33": "415Z7MfVUdvCDpGqxsu25uxarMFv9SN7Yr5JX4hXqJgkXGnAaB2862kcWmUxfAdmLKS9BG4Y9TF9HKb5QYnK3oK3",
  "key34": "5HiPR2NVupNtmGq3QW34brLGuYwkeXnvX7h7ekbAK9GAPsbVVDmSd5gQrxho357rQTgVo1jBnonPQDpvY7BkRax4",
  "key35": "3HbUZMMxKK59zcynRjq5Fkh2Rfn2Ewv3xuKFQVmkSD4rSLjBwPHmRo6ixux8LHovq9rtxoBtFWjeHGzCzbgXwxQX"
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
