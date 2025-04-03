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
    "4MsDTmA2HZr67mzLxMhigWBQ8ess8UsTuwjdn9Tj277Mc4gsB3YoWx9DyxVhF72StufnVmQAgv5qP1JsLyes7JvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5TTWL3fJjecSRBD7pCgPBxC1HfLHv5BfkpZicTVXXsxasDuyZCg4YwnQ2WqbNxE7mRJXgEK1mVEFhyHeMeXqAP",
  "key1": "28sUtB5wPG9DGygq6Y4QhucCHX2hryFkAyHC17PTthsL96fKrBS2SD4VYBkGJfPfsqKmXeSp6baRiKdkTLwst2BU",
  "key2": "2qwiedyec4pWYc9zSRtjAXP3J7QexFJgcxA6aKRXMN3tAY1MDpqgN2yz7Nav5y18v44c9ftTzLRBAHjzhNeigNeE",
  "key3": "3TNYei4HooAfrK8qNvX4n2HYGkhC2WvoE99JneEWCCZeQ8aonxY42YbJa4dktvx6mpYDJukqFcusVR87KanfEex3",
  "key4": "5B4zb2DMkC9UmrJbSjNxF6btQYrS6pJ41EyQ1S6FjnciMRijH8uvbRx1h7jW6kEB7GC8pGzr3MReJ5KpBt29t5aH",
  "key5": "34KQ9BxjDQBj4DZZV5L6YxTkTimWaC91oMVTh2iAcCQstbqmmoEQAMwGaX4CjXqpFi5E82CWYsKZYPcMFxXToDG6",
  "key6": "5xCvBDBwAXSVRfzAoWYLbvsd8GwPWX3Tge65QT8op9cmUZFM4Jzp5SGeVgAHie4thZ5FSvAqp4xtGHTZ8dH1gKyu",
  "key7": "5211Gzjxpr3xfwSf7CZTtp588DhWtSB7pjd5S3KKjVErdRhHW6uAT8H1ghb4XHPDaBWWBZZCz9WNuVMtZ3HjFQgU",
  "key8": "2eQSWkSgYRGrxm3azcsjvCV79CKLFLjmPGkbd8FtsNAm5TMGcdAArK9x1goVNEVxyRmBt7vsfWY2R6oHFcxNDUdD",
  "key9": "35qU4v6RSnEJSNB9Z3Xkv69cQCKPruG6rTY1bN6E9tvnJQP95rYXcE3pzFcgLayK8MrvRFBJGk4QiiDuaazTvPus",
  "key10": "3EP97gJ4U7sWTjmDFH8sGHWbrBDafzySqRzdshz8adCSweo7pJE1owvrcbjaPwKeTLCmxqQeQ4XJNJaTC62ktdcy",
  "key11": "4XxgEo6KbeZ3GVCUjN9XXqs2pmgGQbsqYyoC2Q56qieaFarnFT3UEuf576yJ8w7XjFc3uRwqbA5BSLAbuXehaXGE",
  "key12": "24hMPqUix9j2oaQ7w1je2yJPFsVhE76n1zPpydeumzx9wx91QdQYHXnMbGY3ALd9ZKFAJPdJXNcmQCYwZ5aCxxFZ",
  "key13": "58KCrJYqwtZ1ofSjf4iJnku5aBU9W5oVeNv9BLYi3sMbRtTkD1dAEZqioHSJNWaCLxhTo3PAYphz5xMrtkgfPKUv",
  "key14": "3EZXeN9VMYvvtUxdfNB4zSHT9Zt4EW8oZM9SoZVo94ChdX2zn3u8xTWy6a699B3WguMAuBwx58CWSNk574Z2WWh4",
  "key15": "4Myrg6iKctoRGsyKtk4n969hFmfE86zeZjpkmZetK6qfaykxJoXxuTKvkmDc3qBXpdh2kzz9QK81HbUgN6bF3mrC",
  "key16": "3AZxrr66HVXbwMDXRRUdvbLCpjRpMqpYoppvUKxZo1XZNVGSssBgWapUpQBdtdyHhuaA8gtDSxbSWgTajhqgHNbC",
  "key17": "3vPdM62XA4ukKDfRUU2xwitr7B3s4dG8CxU7ws2dgBB6XSp8K55fv3hJ5kchkx1CqZAwDhoGqLyGkMdw11tMth6L",
  "key18": "2XpMshUC1MQa6YBJByE3zDvV55KZ9C5WvoLgJ9zZqNpkjtJVoRyrScppxuyuBqmosLcSmcAJAH2Y1Khgwda1hj6V",
  "key19": "3QAPFxuViL9ZXcJzhbbpY72EHhRMP2J2N7EdrbuP6ZyPLGqorU5YSKf3B9fXQ4M3y7BatZtLvit8ZXgwKUyWiF2",
  "key20": "42uTnNiV1AkKn8GLFZRuPFbRnG7dvwdsaZPfUoU6Rp4xxnBckQCwQEzr1J869XzNJQh491xAQuWgZtSDLSWg9AUT",
  "key21": "2ebZ2aVP39quf9qdaqhNasp8PVBwami3V5At5ExVJucybtKT9YRZeJdJqDmpyYv44NAUsyskjnieYkKRgMiYcCTj",
  "key22": "5GnJMMcimfPYyhvYWk7GzSuxfc1gPA5wNiRoJuYo2SRQXMajRvP8r6YNvk4quWT9r3YpvY8RUHZijRxnCQpjrg3B",
  "key23": "5GWxhBioia3W7hgwWN7dbf8jUwhZpqQbPde7buTQBMHrXuFaHBn6tqpycQozHnRq4YsLr11Ck2EiJUhav4qq7gM",
  "key24": "5dpYJErczhSLxiQw6Wd43waDE6BSRWPK8KjHsVEMHoUeLfBsXSkEoFVtCipYzhaC7pnDDoVcRmjdCsyxcToUJAPQ",
  "key25": "5xCRtKm2yLqPN3MCfqPv3z2d3Yjjy5vNionu8z1Q2bKPcHTEWfZkycVE388oN6cj4FqMT2gKFEe47Zocis9CZ2fM",
  "key26": "4UedAmxJyVuYoiY8iuBDyr7Hjee1A2jaUiqPdwGEsPcn9pz53tJr1DxQhozTBShRujfYoZ6XRfCfkzxdNGzXfCRu",
  "key27": "fcBHG53WfXe2zeBJbRFFcUyaLCFhqDdvYbZvtaNyjbFfxTEzaHerKW6Xe8V2Hdk4t7khXdJforPYquEQ2qjuy33",
  "key28": "2ApDGPcWfsMDGbi6nLpjWJTjBx65D5BPBzgvi5uKqxSrnAAPBJEUGKVp9SEMjPJPEitZpYhciBYKbyjSSnCFgbi4"
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
