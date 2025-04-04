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
    "4jd6DoGVL1wh6EWyBK8QreL9kCWbAvKRQqtmy8us29bu8i9rNFw12HeFT8doaDnP2LHiqKXXUqkfvpkesm7hd81y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DJVyRfgn9EsWawPJtmyTw8DgLiqJXhiZw5SY6i5pnE1iVKx79uVJ52MdNrmqSjRojZegcUUC7uZXf7KKsnhF4P",
  "key1": "42ixE3E4DxwiRFHe9m1gVW37cXXARDKMEgo3utQX3BUP2uxKMDLortokUFBK7E1ibeectinJAd2mHjLv9v2Nag1g",
  "key2": "5QX9urXiXa3RUsVssiQAG2pkjSDCAiKTAWL5FwocX4EVamA5qaGrpGGtHSE5aeR3s7z8q2CkRwuur2rHKc6ATU93",
  "key3": "Lfo4CHoQnvrAoDJvcRHXcsQBhX1NVPUdLm67spuGX8uSUbYmEMj7bHLu8X87Zvw2HKEaK1VivVPzkX5ctqc511f",
  "key4": "oYkVfVz7Szx9JgbV79NR2b6t3UxgyP9k9Dx5t2KKdTrfkzyc8D2JbyrFqemcguqCpTBQSRvvLciCYvs38sj4hzC",
  "key5": "4aeKSgBd3Eq3Fp38Zbv6o7a97EGrNMZzYMcL7SRb7tSVWUuVxFdXwkqDmRv4p8WD6cHKZDATarrJfy49sofRFVdT",
  "key6": "4Bf9GFhqSYP4UEfK4eHrSxs4UcDpmgxRugTux3QvE5PerP8UR2vVv58et7nrvGYuggfuYxxaGhYb9WaLYmykmCbQ",
  "key7": "4YLRVjRFzG6Qcm6LaBJjc7A5j6ngmbFva7JxbwneTiYvQG4pSDjn9Hstk9ETthmzWD1Xa8JUWenkFQhaSdp1oh5y",
  "key8": "NXrfzezbobmdVi6eLbrLAKaCYErB9SZkxcdktdfpHjZ6zqxUgcBgbfxk71gQz1K2ipbNFzhhFEqq76tY772wZAx",
  "key9": "59Y72tnQBcak2MBUDCvnv3PunyfLCnRwqpZFTq2EMwimKqNWZLwtF2qU4nWqULbVAKPqZzJCSRo2v1hhm8M4BNYV",
  "key10": "3ag4KkaYeuNwH6j7LiZSP9NE5bFJRdPAGXEb417coHwtRRs4dz1Q71RBjY4TQeKL8kAvDBvx1CqfZJ1a4H5bHn12",
  "key11": "eJ6p2QsN4vL6o77bEfDxiXovKF8v8LvKrh8edSy2qdwBx6aebgicyi2SXmxMrMpg8u68ToGAjpDcd63JRqMroXf",
  "key12": "4fCNRHr8d7FfkEo6VcgbJtHDjgWfEMiV6FVrpUAGheH3kgphCESqw9zKFB9JnDjoAnpXSwKWyiashy7RMxD9Bsk1",
  "key13": "ix5aFUnv5KiMdNTJKEi85vj2gv5cSKGgBKFJMGBoHH2apZR9y9MrJ8vtR9JTfNENQ3FSYGZq9Wc5UaNfcXB31zy",
  "key14": "4NKxXaf3x3ush8BoqLoKEub8TftiMB6BUbvq5MTaTRvdoC5U6t7xGKK2JpaFdC74w31b8TZeDbH3sGM56AaMhQHC",
  "key15": "5Ap3pGs8UgNtAsnYZpcYnEsTuNAWvdhgUvjQxMmDLygJDX6DsGLTf1HVs9mxkLJvCAUZzMK4fpANgE963QqHmdX7",
  "key16": "5tqaQpwYD4GsjGrpjCwFLeraUMb1zXHVkAFBn85AGC243VqhuMrtPSjn3UW2vNPtdjxrssuR1GegSKQGXopdyW6t",
  "key17": "5ExQoP39qDTZpTwuPUximEhaE47r2SXjj8K7PwiWT5gKGDXbdxE5F6PLybbPRcNpUFjHXMxLV14uw2uz5dCBMeLp",
  "key18": "PKBQqmxLH1qjK7d3QZFoxEND9PRbbGUp5dKDMAGuQaohqWeFD24aPf2xXNZDtpmu94KPWKrMZ2dP272mt5CxEgD",
  "key19": "59tErSA16LrT3h1ekqgPohYxBHfHrqF5xFe8B2Z2vnG828RsDFjcPo5gcedUWZJkJUErgZktq9m4fRTJmxoga3Fs",
  "key20": "3xEbgdAu9LCEgt59VR5qVghsWpJWJbJRnR4y22tFnDxKa5kFJMoHNrn5kNVVfg1HRpPTh5VpXbb7Hjhng3QPFqdF",
  "key21": "2V7aZUqzvhEykeoLTMcZAoop7Vo7kXnadmTetMtr913JhBFBrabCZ2XQJMM2Pague9E4Kf8571uAuCrxHx5fsmRU",
  "key22": "3GULvKxToTchtSEt7zvj16v1yp578bAr5WaovC6bRsGvGF16ysvdDAXAfwyexjPuLBeP2GvUfh2HidbY8kYnbC9K",
  "key23": "3adMyWdRGPze4i9VvhUMRmMyrDURHFQ5K1iC5Fb2dmqqhVwoQp6qwe4CP3ZhzZb82ArYD3CFpxYvXAg4Pi4w9J9k",
  "key24": "4JecxchmyUMMKgc3LpskTVFgWZXJcWS7oEpX64Yc4V1UfBvBZqkCRPt2obD7YegAPqv7PR3y5BA1ExcbFPCjkXDM",
  "key25": "34dABHu8eAppp7yTXc9bTZbF4Z1GTTxDcKRKwknueqnxDzvGTufiCbquvYKKJQg3M5SxE4UxbEKfP9eyj58BKdui",
  "key26": "5d5DbkGS68rG5c7mLCwHrYaWDgGxyse6Fd9ZCBtj6oKwnYWDN2jt81AzGfbFZGDjMWSig36DFdY6k7P7N9LJXLxT",
  "key27": "5STLuxYxeMbb3cZe28BeKqpbDVtQTeBWBtZ5aXvBfw25gH2AZ389Bo1XDYCdUZAg5VSGEDXZ42b6XQswyzdC1Ehn",
  "key28": "3K5ZzHkj3w2hhqHfa3S6th6x4yohGWZa6roJi152XFxuRQDXex5UzkY8XmfB9NtHeMNT79dCkVWVPK5ZQa1a4Gj6",
  "key29": "4tV3k1pD9YPFZmG5PQfmp1JhqwJPKha3NNiEHZkSyS9MnaJaQpafBjEiZL4jDk8m2pYtUJ817WHwXAssNL9fGXr8",
  "key30": "3q4LSWk6CaUSxgwPibM6nFnQq9Q7q4EUrgfD5PoHfRYY3wPJckSTFAzAHU4yt9e4x9y3bTLbydi8BbkYtwXRJPVi",
  "key31": "2Av2DDFCmCsDgk4EmNp7TAEZTuoV51CAUkYxuzF13Dj1TQmwyeG7zZNyFhKyfZ23KQxf3a3fTauXYRJEgZgfjKHZ",
  "key32": "51ZycgKr8C3pfXbYfprTh2FPqNSRVkJDVchUWohzQNinH1rQwRfX9XqSrtbRGBWLpcsMyCwRHmxPrDozsr7qai79",
  "key33": "3j9HVfQ2VSBRZin5zHwQUBPb2CSxT5F1w5V4vBXRFVM2LMdJfVN8kV2GpWpfGziJkjPz9J31LiFg4vnPDkkLxx9E",
  "key34": "3LNTarPHpKBvPY1nzucBNogwvUheAcZXdWqtJCzZSqXbZVuB8HT3gSK1LARq3SCZNbDCQerjzgQrhNeVM42frLvS",
  "key35": "YgCYahfk8ftzhHgFCTuU48RfgiRzeHSuUD5nK8oVnNE1vvk6GJVaVx7dB3ihPpmQsiZgmkKtjt9RhrLij2vp2ay"
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
