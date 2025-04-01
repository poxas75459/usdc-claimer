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
    "5kYot3uZujnXDDcBzBjckdCGwma1Nes2bJr5F2K3McFL32hztebHD81XLMCmJvALfzyQR9D4ycVdB2f2HqbHDzjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htPGiQYsmaHASHGueTw9pwV6p2AuNijCbbwi5AJbtevS1CxPwe399JzK3V62b9PJsWJ3m8WWRfAFTexoeJ13rRX",
  "key1": "5eE1AMwhTiFCdpgi63yHrRLvFn4GmCrq8tPSWTpGLKtDqhVJWevoyeK1tkRv9y8ceiHBYfcgzHaXUCqjbMpJ4GD4",
  "key2": "2djS4ZcaFKyJJiFkacNLG9h55qvVG54vnPTf43jaU6JwHKUXMmi5AQYbLVgUbWQapZ91B6Hef788JJ5x4LHE9Lwu",
  "key3": "4S3uKEXGb6MN87z7Sov1nosZAqG5nk1hw5iqZ4H4bePcesZSqzrJARwB3o93AdwHZFQCCnmJCXRu4NAMSSHWR3yn",
  "key4": "3MhcXdf9XiZyomCpVkKs4943F9uMDzyNDZtLeindwZtdWbB5ZBQZB1MzgG6ePDC4918UwTP9zWp1PxHY96r3Euuw",
  "key5": "4DgQGXuFk6Z3HjJLkwqzBURp8Seu4KKrq7iuoJEDAnQtRzA9DbqyBuakTv3u1ijvVDx5r8xEUr1gPSkHByouRHiz",
  "key6": "3VYnA3quimv11WfvxW4uhG94oxeaXMxNHfjMcwVY7gcJavhJ8NELhtSNpLYJcVB6knbcwRT8U6cR2d4eGvSefaxd",
  "key7": "WpJibGSbzeN6GLn7ZRgqEggL7fPFsNAUzhvzaT2aydWo6rSwMwaGJiFDfb364gZrZLHr32kTbY6bkMynLLVewK1",
  "key8": "J9ZQRaVvZX8HF4zNtaFF1Aqfn6HJWQzyFJMyzJZVXH1EkvcihW59YQmBU31Rm5VLxCctbFVgYWSouFD3x9yGxvH",
  "key9": "57nXbqDhZT9wgFLscdsRKxVPT5sJV244o2RPb4qisYUJT6TsM3cuqy5CAYfbKo6stkchmJHpW893kgQoCLMwiKtF",
  "key10": "33DYcUMjpKBB1MrGtLZpgVkPrVL6BbAdK6KqT3jM7j8DzAhJsimAiukqMyatR1xE4uSQ4CZ4dPJ2sw6oKyotskdZ",
  "key11": "2sdiwJm8KnZAD3WAikTKYTQX5hbWsiNcmRivq4MMAnKDGzEEsZgXAx68kZ14vX8in3YcCL6PXY9tku4LiXAVdJAC",
  "key12": "3vc3g67iVGh7hKLUGcnnKzoo5U7jMvWwUKQVpHrmUR98wSTv7oLZwVYj2PSWkJX7NtUt8mz3FsMTVBcnrcQTceVp",
  "key13": "NZS5B8TzanWpbe5NnmhYJjEK5dHRBUUw3scVETPV5JUAU1cmwwGHgiWb31KY2k2uTpFBhRrFMhGgGRGeYA7J9i3",
  "key14": "3vJbZ5QotGHNmBnDbLjdWyB8LMAsLwsNSQejabiXk3Foe67s4RyhpLN2jz7BnCcEqGTzjfNs6rELiQQGNLrRmYu2",
  "key15": "21To5ZL6VqFEZRaM2yx3ztgUbjdz38UgW2iUCfi6BXUpxE1XrcVENrKyM4y92FHG7bFmJMzjSvgoqE372ajVYbzV",
  "key16": "j4BeVkZrMGGAfGobWVjZ9NxCJFC2nBB7MAGkJ9vTZ9fsJXGzi1vppC4bBrntRqg9og7i7yacUxBHtavzXweax7D",
  "key17": "2SqUKAHEmdzmSQWVqJWCnyUhTk6JjRqZwHojqMdKpSM7rviLdTYkVRx3VPoNb98pwrRyuSjqa5g4in2D5369Zed1",
  "key18": "5d4sQYEePTZBv1G8tBYrXm6PExVu1VQD2AdrCxCK5ZCFndbHYAAUfMABuWiXKwdHzpD89sfqp8dTDxG4ExSay9Ds",
  "key19": "3UNyxMMNzTAQf9Zqdkhf48AeoWyW1GwMQkr1VCntWcvh3qkiqop4PofH3SNxEgPyYUkyQhf6ZUZEt4xm73JcqotR",
  "key20": "4BMQ6eKLafuLhREhKU7zvEwjmb84TJpdmdLgiNncorCPzzj69z4kQcnreBKnF945KWiVAAvVBMRHig7ozy7CHrde",
  "key21": "4d9dJjArW7o2o94xgdS84frFxppSnnjvyj7ppTd5JVj6FgkfQuudVgxy8hCF42TucNmTgRJLCWwitE25R8bmbsyP",
  "key22": "CFFe2iQWF82MHhcLm9XKRFBvgSGvb7khipb7nF3rpE9i67T1NtaZiqKx1McqWKM5Q7VxiuEb2DqSBjUgZwDNHPd",
  "key23": "5mqWQJdMxnDqVRztXng41bpK2AyLpyv2yoyJTk1D8fTwbfpPbggSbUQDxriV6aZzi3rcTYcnfXBay8HPD8CaNHkZ",
  "key24": "5MZCWF5nAgDs15K3rcvYST9hVi9AFhXtetAgWhw7DUVX9QxCyeXv4QXP2LSu37UWfAbgnL936BEDgi1ZsoguuExS",
  "key25": "3N9Tz6iTzxA1rV9QuiTGgdic14TBAfj8u45kDnbLjTzscLahLrY8aFVR6LJVzB69GibH5XU9tQFUMC2VDtJZDLfY",
  "key26": "63DzAfyMsXKtrJE5ryrhYLr2sdSVkp2xAhRqrMq6bL3YRXQxEV9z7yfh9bExCDdke6FAwwvVk3KfkorL4AdE18N8",
  "key27": "YYvgRcp3Xi4qYE2uJKdEYX33EG8Kd7t9mc46wxeF7CUpED3vbvYUvPz4CaPHJJsHCt4UTGPaxbnWy8jUhBLTEs6",
  "key28": "5nK3fWrb1qSZRfj1JRFmQod1nGjvjsDSFq1MUb6oBVYXPhrmGjAr13U7fRSZtNeCCud24g3VUqpiaD49qBKFKJEb",
  "key29": "2Vv8ch9qDLHrQEyBBxBsngHU9hfy7sWzafnFHju59xjyRkyq1E5U839x4vRRtuAT2TATB3qFWR85JVdHhZKidxgc",
  "key30": "3jNpNBDBzaVC58HrCVtGgkE2AWr7qvheTBhnzFcbfdhnVw1cWSr6VYpU2E9EZM9NCFrDEgtHMKSGH9CGtVN9V4zH",
  "key31": "4ujbAtpKbaDas8Dx2Wm9PyeK2SUQ3rdHN2fTXmYzNGvohogKoLKQSAjf17S2yw6tkKyuH7cuKNonASKnACUCp2Zn",
  "key32": "21ovyTJMsxTJ7VN6e2iNA3gc5H2YnbVxtqcekNNVwkXRdj68SysW1WRGis7ZMHEyMQrbgBLzK894TGHgsYhciA3g",
  "key33": "hAyqNja3umup7tJu3sgE5bh5RX2CbDNV7T4Hd96enQECkG1fv3inHSDaTnUgzj98ZwzpCwRTaTVqJPYU6xFLh8Y",
  "key34": "5PNuzg5nmcSWKg741Fc1zTPSX5CsNc2Gmty6tpSxt8egSzh3Q4bv88PJPP8WicAa9UFf3ykMmwpf6W4hJjUE1wfi",
  "key35": "2tNiELyeVGuS9xcdJGdFfPfdgAcGhZHpLj24ZUy1PtL6T2hrcQEy9EUDG2zB3xZ87bFnYwdyCU8FQ3ApDYRTEd8Y"
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
