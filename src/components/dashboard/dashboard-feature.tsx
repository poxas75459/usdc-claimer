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
    "5Pd6KEKh8Xi2s9ZAJLCHgb2RwR9wZFmZVqtXxPdE3EKCG9acdhTh41NRd3vZA9HQGyv4yrfdFbUrB5GtLp8yYtuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPDqnmmr4HHisteNX1y4Ky3HaAmo8SoC41hzgng6bkqKvppuF92HxwqakxFZJVjm9rBsiG8xxGTN6yWqowE3rXF",
  "key1": "2YcCfLzgXZEBkgbPtRRLvfeXKWSBuYxZY6V62GAM3ZSswAWLkS4mAjT6Gfi6d91N6Ts4d6W2XQ9P97Kd6qjYFfVr",
  "key2": "o6DZ7amPx9ip9U6ybSEhKc7wAx3LnMszH62p5HF6x3VnnsvPCaNukg9jEEJ3Tj9KwjFXjBCH4U7MLi3ETpC7soh",
  "key3": "5aQaNx78mLz9KVRABqRmLPMsxC8qbYK9ie3M7Rvxzkrp6W3o2xMoQnvnYd228YctadtcbdviMgJWNUwxAszmVM8j",
  "key4": "2p9FGM5EVv1FmZTDzRwLUfynjFuLpc2r36o5KrxkEoCm2YufFUccy9xvfJbgfLFgU6raTLs8dwMU3JxxkHHozj9V",
  "key5": "4BZrdYQ4PKMKztm9gCxzUfZJZqsKmg8EF5roQYGLkJeUrat75vn1xBrzGKKfocwT9AFSNN1LHUTQX6rh8UnZh9qF",
  "key6": "5iWJfv9fYfna3YiK8bHawLGrNtamhdYTweo3Kohaq8FoHWghctQmr4uyuXnqekmqYBe7HXTKnfwUQchF6t132oSb",
  "key7": "2Np8SeLLQ7X5fNEqPizKYEAKSD5cajq2EUkhAejjuftTQzKSF6VQZgzKLeYjWwBt6r28K9TGBd6Kk66TyudL4n8V",
  "key8": "2tWaDsXSEQFkDgJqud6aT2jJr6kazKYyAg4h2giH8eF9ByXMofvT8HzEXjKaYGSmtkG5khnvEqoAZVFJaX35g9UB",
  "key9": "5H3CvE4u4onBmvhutQQU9oAjLbwFyR2WLvuvFYjsvfFJVy4GzfUQxrEi7fXZG1yGHGVMvYZEfTs5ZJp9qwrwUtmZ",
  "key10": "2ceaQr4sQS6UWjhHoRFd4wTsMHarVos7LUrSLgv4fm3WVWH3vJvXZV5eJPBUUT4VknsG3roMtD1BpiCegEdvSVLy",
  "key11": "4Fk8hTpoAZkQoJUjNxDTLShCbrbft5KjhhQLpZYfvHubbfkLZAphuffmWJCVSca8DhmgYjVAEjrQ7TWKe7Wu8A91",
  "key12": "3WM9J5wgSttg12oBAAkHXWtVABFeUw8ASwrrY5XadcmnCufx9Z2dyy25ky3KUa6wyXLuUzkLadg1EFZa1vVyhMJ5",
  "key13": "5sB2EkG8jGwRbMpW1RXgFqLAhraxLnJZAcKKbHoLMhaVT4R3EQJT1bdnEr6GnoAUXFdZV4TdFiN3ZqjxamDH2WZY",
  "key14": "nQ2wEHPVWnSyTqgfDR4wZUkGXDUH2tttuYH1ih5HJvpb72iyFCMU9FMCNX8enY6GVagn7bv62dhYt5bBszkodvm",
  "key15": "4a8GGCsiLEaZgzioDa4C7qirpHSTvbfaP8krFMjpzmood3DeuTbbJLKaXyjZr4woZpUHDG8CmAuuEt35y4RCD9JV",
  "key16": "5VnLWJqvy7HFPpctPBKK4AE31ejdNaUkhm7MvCPk6c24LMeHbjgNPjtuHpdxLsXyFppQJqsC2SX4SN5KRYFrYeuk",
  "key17": "5nGns1VrdB4aLjsTmppyQeKXw7xiZ2kz69Wxuj2Jh2Cmxs2jmZnUepYWwFZtBfsTrM33WPMgoC3nuJg4gvgkjUhR",
  "key18": "Ut5GugE2wShKafFNUvjAn4Ydn6wdBmVTfPLgbnfSBP2JFCsGDqbFEEsbXfASSQercfPX49YtuaLZ6katf4C2xAG",
  "key19": "4mXLBRUffpNaS249oxDqQVwr9yGa56J6w6s5HLWvFBzGaRYDmHyYkLP9wbXutqeYqrJQaSDTHd6jSDkebsKq39yA",
  "key20": "3J3xP39kPYbbG98CvXgBtnpd3qQWSyW6qMkncsNHWrJnLGjKUctHgG9Ni34SUEjci7e24rjVSzXMjBj7REvtqwJc",
  "key21": "aZCJ7XhYvNcZrxMyuKCTa5UyEP12mBjZWiKx7SfBAfEXa5wBqbYzQHc69WoHT3MF3Ed6vu7C5AF7psWXSNbHzVK",
  "key22": "4HXxhnZHtZGMFVucVtETVLFo2VNzt1Qs52bqFVWzJmLUXx9sMgv16wqKN6vSa5mpbNaT6Rha12VigMy4E7EFRphW",
  "key23": "EKrZMGf5DUmRKvSsBRqvmHHxog5dXBpYeG2CT4PwKmJMBqi3sNKqdC1k4sn5w5YSxdG2TQKfjeRcscs8RAGpmgC",
  "key24": "9iWfsUDFVgugELvsFZBUBUQjdhMAFZ8XVfm8jCw49dJCfVT2b4hfLfDQc1XKEissL5mFr7sKW3PoQ9X2UKU7Myx",
  "key25": "4UHaxReH2V4APBfeCJCPEAjpP7x4cVcUL1d7JM2L5Nu9URVF6EcEjf71StBCQH7rUkweAqhL6wTs4Dm7YyhJuD3J",
  "key26": "5vJp9pdVQTdaFnDTmT33m6MmTgzzLdkhFUtsNbgRjDqDgngZRPRPAvXLji76qxc3PTnKXMqJ41b8kh9WrLB9Q6Wm",
  "key27": "5XT9Fdu4F9EaGzzSSMS3fAFgdZhfjWQMLv6eet6JMfbeBSQgXnyrEUmG4p3j1pLvWPJwfFx8A782V1RaNWnJxbKj",
  "key28": "owy1s7trL3MjeRuqPGL1kgYmtL4rYGEJ9tiHiy8DScbxN3vZeLtGnZmTahgWK6xBAUsMQYooJpdqqva1mDXimpk",
  "key29": "4rCxTDS8g8Q6qBam14nX23R8kKgppmp5UP2fu4jsazj9LYVusP7yRu3XWDpUHov5KFzuLz3HVLrUayMcFe18GUHM",
  "key30": "3BMDMPVTqhmN96oTBmH42RPW8noAGPuhCJoULoNJfDU5DsTf9irkfr2YMU4QVcZFi2oFT6nmrk1KbTaeMGHYXEop",
  "key31": "5qpFgjBw2YzPDmdDwt7Ldv46REjt4Ah7ohoW3Q8kawDfUS6de5LYjsbHZhnEoaFFeFgYTdtifW2c2Eer8Cy1GNAd",
  "key32": "PVG34QF7KJwvoJ9cE1C88Pm5jM8YVb7GNQEyTvJYWxyxAmzFxXDyMvW2KiUCQqSPL8kcvBNXQhcSutkVMAgForM",
  "key33": "2hgfiTzAywsUU55E3596npW4wz7in9NafKu66wEX4ZLbNHUMAABhpLEx4kcerbCFPhgPnMjjga3ZANixguRC1tNY",
  "key34": "35oyvXGUBNKeaxBHmDc95PmjhuhEMaMyKHZykYyZhLFfEtyXJZFUHTcNH3HZprrdjfRgpmUeCF4tGGZ9w3rDnA5",
  "key35": "5joykyZv8gDihYgRtgUb1ZzzmPBJR6KQcjYJ4iuyU6C8kYXkkMCdEU5ixR9AdaqRDedjKcn49HnqcBnS1wxbsNAg",
  "key36": "3ehhq8aH8XqokG2ABGEEqrnbYxbDP5S3SjmavRQw5YpEH5CHJiE3yhUsx6y2k8rK9cDt7bSVnkaax4M8aSLD2AnK",
  "key37": "5SQ156mmGiuxGJte69W7cGKb36UvYS1ANygryDe5PGxj25VKNmG76r9LM46PaqHAyhjQDwjyyX4ZKMWKxEsAmDVa",
  "key38": "2tEybAWTHa2MmAnwx78RS2eTpRpDuZ6eiS1dPDiuLBXFxzCTjN2ePW9SzabKP4amFQzXqyE5te9ahxViCpYQV54Z",
  "key39": "FgfhRhWFt5ZyZVpdJXE5XVgoEhvPsUdcvVSmKf121NzVg88ZhYtwKAigw6ycxtyAc4pkzrNpHkQYMbpphV2S6rA"
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
