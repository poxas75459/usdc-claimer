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
    "2UE8CQKSUnmUyVFgftZYCxeTxFcy72CwMCGNUrL4UArQ9LnrVguhwhfedutAssaJmnxjsmKqySG8pKLrqjYNzdJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvVh1NEWnsu8zT9HFToPHbiuFQJTnHd4h1wh378NZbs7rJpkRytHqbXSWVQ3nJ4pyjAEakPjoD822pdeGcGfLJV",
  "key1": "jNz6TuRQexy3mBh42WNR3YFBn9qgu3oB9HejjCDkp3cEcYeiSqbA6ixALnkDoskhSzkoJdfioySPQTGRkykrSeN",
  "key2": "29ejhb2JcJFvFaY2M5j3TUSEYTogGGYi2jBPQThxSMPSsByyBM3XTAUDYhTMRYpoZvrZJRGUE7ao9M9nCcZtW53w",
  "key3": "1WbvH8MRtxXy6TqTPJELaEJHp4HH5wz8FNfWnGUo4FwD2WwWSA1hQVLR8RgvBJwge6Xat8NgHqVUoQnwVebfbzA",
  "key4": "3DiZZ3qUzrC7FSmi5YX6X7GkkjCKXpfnxgwiCx8BCpCX5HP8UDGbFrThsbeU8t9KTnaxBipoXrTSerdMjTuvrFDn",
  "key5": "gNwYUJDEDAYtF7FaFhVPraVjbYyDsJLhCtrJiqjv8HY34c5b4bBn2mwiP4EVSrs7bWCJK2gzkaS2Dc8P5RJjSFR",
  "key6": "5z4YMQRYaNkYfKfpMPbPY9AHC5Emn3UNdVz7QL7u9h1Tt8x1jFVAYFc3CVdh6okhxnx82b96HFFahrByPk1jJVPy",
  "key7": "2U4kzQDYcRi6j3yo7xjj8wczHKu2wwiV5rLcujr1hV63LAB67uNLTgTMHBteNw5BdxxvRbnb9PHjF7Cm8rdmLSpZ",
  "key8": "3idcJY7TrqapVAadK57J2779od8NxA9k5wsCXiDNW5eWiLj8299ch1TBt2CPeWYdQpQ4sCEF1s8FqfkJqtqW7K2D",
  "key9": "2EKNwgQhpsmN3uAGtYTf1EMWp9HuWuGNWBZCqQgucvMEEh55PCpD2K6w6LKw15uUc9vDZWN5KSeYn7u5cX67bF2v",
  "key10": "CHaXX1acUaqdtZQst2DLEnduvbpDoc8ECB1HkGjEMXsTT4nCLCP3jT13kqofmaLuhAuixLTTVVHRx9jvgcnn1xd",
  "key11": "EJKGz7qEefFWMtxMzcix2A9CHHCJJnnVbwUkUftMKSW3DQpe6Go2Yb1LCCKQVwm2WXPf9JNBdwoykhuLWDRFivE",
  "key12": "3SwbNjKN3kWnmM1tgJNGNjvxACqSiujakvQs8tqEypFo2LGiZP9gZj6Lrp8bHyeatkQ7sLbd2qhfigSSjShDoVkQ",
  "key13": "4i6akSAWPsD8bSgp3u8iPaL4Hhwvc4z5cXEmLWJArBrFyZNNdXGUXT4vmmahTXwTPcmYEFdCxKXDdKGNWjNX3qmu",
  "key14": "3rPHvQgRRYTcfKCfQw11YdoudQvet7x2H4ikqyTsMHjbJ9YkJgAZnL2LrgzjwtuKpJuacB9hbMtNRs7fXuhP9Pez",
  "key15": "wJ3nzantDfWYMuDG4peGg2AD6mwJqaRpsLMdqGwjLYuZfF7r3G7dUkzmKwPd5WZ3x2gP5PrRRfjXg6Hwki4Hdih",
  "key16": "3RZ6U4Vqz9oJ2iMso5i4ZqMEHCHpSSPfCeNB8ZakEgmrtndhJTBtspTeZYXoRRBFLqovJMfTKMr6ZJtv3e6zWKCF",
  "key17": "3Q6bR3FkRcsaiHyYx5B5PmCMoJF5toUVgd6zaFPKQdo8a6N5pyLSnUTgdp4fgdsvwmw7e1djbKBbdk4f9hqWJxAy",
  "key18": "5LYo78noN4mzQUvgDs82Y6ATwKdhDAvB71Yn5x4exZ8Dj59L2ThyyYURdctosBTsjvaTTJCKoL6LMQ35po9o6X9u",
  "key19": "bFDHnWho49WAhPBmYRHecDWJRqft1GuiEioymxeYPtWCDG7MxQ7XkeRDhBxyTACS5KERt6TRCcmzEv5ct8L4eYU",
  "key20": "4fcKdguYa7u9cz1bh69fH5h3tjCQ798SQUQVD71rpjytWTDmuqMNdZvuhq3Kf8HPP1pP37kdKUSXnaQGCFA3uJA6",
  "key21": "4Mn31SWH3cgH5JjiMGSmviqcLRhsW117C5qdaAGHkuGEdjvkWiu1y7UDhupJxNvRXdM3kwACi8HJ2w8Sc3jrGuxS",
  "key22": "2y6W4kzqPmmAfxcKEgjShq55DmMPSQyGrtGWAgfgq3JpT7yMvhk4wTQvqW7jNoBF5MpMQW76JQGo53kWGcFCHmvY",
  "key23": "cuWn954NPrKow9BPRobDSodmNjV2ZhU8yVj3YAqQzGxp8fns4cgLCHdhy6NLvKQjkmLJ72byyazAr26nTNyRQWf",
  "key24": "3nh9xPBLgipUQZwqkHV7M2UGYot4gyJJdCMA4jVByCgvfh8ycxxT1VvyyWaciXzX9HBJuuwZzf3XU6r2v6AZsdH6",
  "key25": "2CxVWHoNtceiq3BGy6gN9Hcx5C5ps2Lf4bhewj8NGT1qLQxVShDY5XEdMf2jFZTWEYfUwVznK1tNccmGct9rWyng",
  "key26": "52b6L1ZGC5GE4QQ6vJqGovP7QKYoCtqPNxQFQueykvh6iTX58z6C7SnWmsfp17pdqyqWqByuJcJX4ZtKrHiQHtmH",
  "key27": "4nQjeh63xrkDSLw2XMafE6JVHNJSaLJZ5MCQ9TU2WXQwtCuw1WTpmGgrunnxC1AuG3pDxufEVVwQuwFQMNL867oW",
  "key28": "5i8JFs6VQvF88VM22J7p7fF3hdtQTrkKbV3VSPrCFYiX1bvvDzeJm6nLQ1rdwRkxxPAoPkazyNm7SdYcUsJbVCsZ",
  "key29": "5hy8Pi98Ex2HV5X4Eh7mSdY7FbwuUZSDRjqAn4N2v242urAWrpPjhKfWZdAPfQULj7yQjtLRjand5JATXwvc37Wf",
  "key30": "PY6hxZu5V3b3NcSdJXHdyRTXzG4eoN5gowFtVbBjyQ6mrKnwCg9kCCc7B8u8E4YNM1HbcbHSw972eXs1RPNuFYQ",
  "key31": "3CPZokCpffo1N3DpvkTXKN9pjcEVh77GCYbsHpWE48Ec8ErhqX6sNhft9sehX7j9w1wkBrKRkDPmQHVsuMXbUn9a",
  "key32": "4VmHwLXbgo9rCxwtBHnRi4e3EQQ3qfdBnV9b2M4PFxNogHEirtMKuQwzqeFPVCrJAYnNv1HHr7m61ZdeARsWCM5u",
  "key33": "4wuecEz4qm3T9UoMBdxK6NvfVZhhfv77rW9tnD8ofzoRUFNcNw4bTNsxQRYuTWzrjUrnVtV86ro3MeYppZB1Xitx",
  "key34": "5Eb57CauH3HLAYLUQbBmtVd8nvkNRnWQyZwjDFTP16acFAuPTt18cu1oC7rdrJ2Fo3ePSFSZbtZUTBH1PznXKCwN",
  "key35": "7f3gsQHWnQqDJSEEMmk5n7RpvCQK3YHChRb5NjM4F5bkJqEmBCNteD6xDYZCoZqeqncuuyPhSHaqKJ3yRgyLpGS",
  "key36": "XkuQ6wCiCfFN4ofuubnwKVP1GvZWTAtVUiXWWkETzczmBsNNKqAu6oaozqiaRYw2CM288UJpNujWWFEKfes8wvC",
  "key37": "3ndpqcb2XNnN3Hmk8HdksWVco7p3i8s3KJ2xun3dj2RePGh3nSi2rPAoBwTtqjmHfESvK99EkFdWwqY7VfDnoMQE",
  "key38": "2rcqt8MiLtw65DMrd1ya2fVJ8tVtoazKM79ajLJVYvSb2DwHmWTVd4bC8MopW6dsc3LSfVEKhazP8g7CFteWjrLg",
  "key39": "35JVUooXtdenAGCAfVAFyXJ5fqKfsKoRmrPcwauTosj4VxX98tuuLgEy5BS23Uj3c8kVLXxUxXRf8iZyqFF91xao",
  "key40": "2a6pL8BFLhbnhmUVmPRpbajhCsiSJAacL8WxNZHVkvAZ3SHhprEn8QYpqcNmCf8r6HSa37DehZMTzPJBEPxLjmpp",
  "key41": "7QkP7BU6yJhsg35Mm3N4DHGt2NXCeypub9aCccsXHzM1QS75Yj3r4yGb5CG5TDYpRBDTWzvSvKB7khV1UHAiNXC",
  "key42": "2NeNCDB7jCLfPEnafzk76Qx8F4NR4e7iKi6Py2RWhbGnwQ2Wj2BQxHiSqAyiLuNeF1B2VsBKuF6qTGnHPV2fU5Jz",
  "key43": "Ps7o7AgqQS2GHMPJuoV91oEov3YNe3CqDfQf4ZJBEqvGfnBxgrrroevusmHbxRRhBtYSc6DUXLfNW5ZvH6BB9zN"
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
