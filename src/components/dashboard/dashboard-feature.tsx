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
    "2DV8JJqtZ1jixSa2XhHRVN9tCSHZKmDqSU1YpHhuijtHhbqG4dE2vxKiPPEji8MvYyDXWVmPGmsMdqBFDANbRkst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aMgPzarm8QQerydKBQ3xkvHqZXHyqcthDDfpJKWKoVe2HWc5JPZp5Hs54eNSH2AMa9d1teExu5EGfUc1qGJmTq7",
  "key1": "3PkqsA2YzmSomouf3u1d14PTCiRVMwYzHKfdeLdVvrNadmkBGTfDnzPzT1zrqjYPW2ZDjQKrDP4jmaDZCo5ZwifG",
  "key2": "5nvUou2GdSFeFgvQm9YVVqjvptfayV8SpdTEGQfFg7uXP4mSaNqmG2smn5F7pkb8wmame3EU4KNpxphCFgLmzYBT",
  "key3": "2ry4DUez5TmwTKXHsHNugKXx4GXY8zgVKFgfseHMzn2DXyA2wZUKTTTzk8SEfapko9xQevrAgX5fAQUswmJ139c2",
  "key4": "4gTtPJJdMsaYAu29EGvB3ndXLTqpQ8zEMctqrwKRtzYT6Zz7NaZiaMqz9AKABTfh8Kzaoo728y7xkqiVbPQprHXY",
  "key5": "4A7kETrMq1mxWYxaQfWs8F4oWtCbbW9txV29ArESytoQWcVgQb9XfQoF5V1BsWDov8U6NyCysypLnUvsUC5tVybF",
  "key6": "5ofb9HEtNrUzNxKneVD2VtmCU4tnXV8Q9T6UH9zBRJ53qbdSXxJ43ahZUmZ3kFs9c8JXX3cTm2ZxCP4iMvtxcrK7",
  "key7": "3VShSMVp5tYrzzveti8rBRqsGA8cTX5WoaSejD8q7NYz5NJB4atS4HXdx2TTWrRvaekPmGFNwahPE1BfpmANNUXw",
  "key8": "5WVxmg8ip7aaaFYozjmApsaeA3vzTTmobBYSu7E5K8vqHE1mg1eASd5DPeiMXwcLqsr3MJcNBCW7ax97DBqEfTZk",
  "key9": "2zrhoMzoV5DekkBPvGAr2M9vsHx2xTfBrr7YHsvWmKzYHgXdm9Pc2o1ueXtCgMfMJ5DuuFoigK3mHm9Q1hAmmLAb",
  "key10": "5PSRAMExAZqjTRvg7vqijuUazfRLjcgq6nEdDv6cz2bdrmZUxykfhGvKohCnzGbAFc4gwQNshvS6e2HcUkixjzjQ",
  "key11": "47VjGrgHmadKGgvN2XZPqLKwuwg14szbf2JXs3kAtwHLyg549wrUy9uhA33mmPA9QVoF6TiZdtGqPYHtjjUmsDuM",
  "key12": "NJ9v8aqFjoiSayCy4D5KmneQx4fjV6hH1Bt1ScztsKVf8KF4292ruxv13TqvfSu9oX3M5zu8jwuST5crDx6S6Yv",
  "key13": "29UAaZcEPzYcc7hqpDCk1TvrnrVxWSmMszn52rYspBP71ETExiD4BNkYsARAeTDQCzE9b3P4dZAtD4jKdZuiUAwJ",
  "key14": "3XtvUmvJWRL3NtqTS41p4pmx4V1hn16fh6SujYJNWe3AHMVj3qhgrxbohfLkhobwXt3LabUxeqXyQfd2hzPkY9cU",
  "key15": "4qW4ayZm76kNntQkxFKJfsXxK8EebLjfgb7yat13NKxdLCgD9s1T6HwGy9WFhzo2TENb9CUbjqAHDDumYas8MyoL",
  "key16": "2a7a8tHdEpRQSRMHFUNkoGa9qPxgjVJLpsNWe62xz2oAAFtBbjGuJTwbEaQtBfb3TBm46RdqHyo9Jw39ayaRfcZ5",
  "key17": "3knDScnkSvBXSkUtjJixEF4GgYTc5br7H5raAoWci3h8F17t2rHAhwC2WBpAbQqNPzR4RAxiuF7abKrhNcNQZyBZ",
  "key18": "394AiK1ePjdruRUhYt7ERdcRiGHmPBTJhugHnUyE9AQ4JgvPDTJ89FVj9uUNxeGxCZY2hKPVamrvyx95m4s3eGWR",
  "key19": "2do4ELVZZCW1QktxD75PMQApJVwJr5BHnExFfqT77iFQf7w8kPtQCansmSL6jhhD3xDBXybV9GAWWDW8o2XgGSqe",
  "key20": "zT5TiAJcVLC4CGj7adSh8HNMheNodhrYHPLCtt1JKFP3JMRozN5jmG8swecktr8bPwbFTHAA8Ud6eLDp4jbGe6L",
  "key21": "4i6rzgrurdCsGM5NKsg3oAizqA2Huqd9FKV4xpjCtFtNKn6GBmtZAwgC1AjPQso7QDffRw8jUojfKTgXweF175Ca",
  "key22": "3FzeLxynkjnf5ZEqwHhS7j4R5etk6nRVx63DWVrZ9zzjnSgvWD39eUbsNV6s4ocbYY1naTeTKskjaYV9jaYNsQzB",
  "key23": "2XRGXhJAEYTzCXmdrD5ybsc8NNZyz2XHQs8SJ48BiZUNroWspCDpLLQJweb9F9Y2PEqUYg7C2h3JMVaQSNLrwuYV",
  "key24": "5Nr3hzVs5PQzQWEpMi8JfZFcdLEQQ2r16cauJn3ptTcAAKdVhZhGGjzKFyXJryCfZBgp2Bi3s6go5Nvrf3ydsFH1",
  "key25": "363FSgdoyH4bCLxioNtrukozLZjMwiyHWanNmxaw2BbDGFHTWr8zdCApQiNpFr2YQR3tU9UrDr4YCBrqa1a1uqCE",
  "key26": "3pjkg3pBtMBiWW3jEQgk1Zr4p7Z9FsG9BWHgS8gzV6XLdRTe9ZisA2hGoqKbmUABumpbsEfZ3kvn5r3hb9Zpiscb",
  "key27": "Jvk4yGCHT9W2AjWLivZtK1M5Zq6Ux38NmbcmN29d6KvQpczSBweQftryvBK4LC2gQsAXfX4KPNXUwsaGkisRiaX",
  "key28": "3vitcat5DCDDn6FQymFtFp7FP2rF44Pico6VJwTKFzJYQcbnusCngaxayPXD1nwY5DJGdVek6hNS8jJrJFYmM53Q",
  "key29": "65z7Z3XFnMaz7fD58QJX7Vp4HusiYG5nRs2FQFhuWhWnXvox7wuP4hcNMsoV8ubovh1CpGXCatt9X75akXo7zgLJ",
  "key30": "3kVJa6Vqn2tPdfWS9gTsRsYjWA4JHAeiwMxPd9sgY3DTJjp7pup8zVJwyfkm3q3PYns95XL1CJsgDF7LZZVVN3Gf",
  "key31": "JzCgVZCMjFtbEHY5rxoi5uEz8TBRbdgiLRDzQAGbLyJn72AAWUP9y4hMaGMAmUHzqdtTxMSCN6tTv7GLpAEjNJg"
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
