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
    "qt1rWy3WRaBeFSZkYX7NsAAYGTwqn43n9Pfj28FpCcHu3EzeTrsaLU758xKzCmrb6BLL29wWXwv3CQAijb6ukR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3L1qvwm1W1JxrTbxdFWmWdYosRUkUtJpxboj6SDQBcjAfiCCdgsWxWhoXL4vfWzRAtWb1f8d9hV19fE8Nqr7AS",
  "key1": "3oLy4MFUU1q5A1CHVzDPfx9MDNw1MHexhjzJcxwUyxJmn74dWjZeRLabWPcyiPdGzuctepsUQP8P53WHiZkxoSY",
  "key2": "4BcHkWq37hahKksHECK6osBfkNjwaBZUKJq3hak2mEXhorsqMwZSQ8oV3KbmqtvkhCreAeTjofysRGFjXUNBgonS",
  "key3": "5hhCZjrsnciiFo3jBxT6bvZ2LDTfLHPcLjC64Sd2gynMqWui89fPK3FbPQznkDBKG6CjvVnEsKjH9WGKVRmR3HAN",
  "key4": "4RdfQwnePhKodr4W6MAKBGTAtGcVoq19PpVU4EySQ5iSS2T9xRzHsLAHFw8RYtGiy3xZ5sCYXEtz94GjeCUcmQnn",
  "key5": "4kXMrBGG2PwZEzHY9Qn6tdwLMpB6rwBSfFd6MtNfoKFazqS5z28ZRZNJsjaA2VagejiQWJKdMB6jU9ySErCbtuzE",
  "key6": "3PprYhwmiiWq36J6pw383BdKhm14kVK2zbaSYfjbyLnhnt4CzFHjEiy5TNMXHGrM15gxW9wsTk3Wg7hG2dv8tZNJ",
  "key7": "96QQsth8xd4AdaeTDGRvrG5LWvek27nTJfmQ2pMRTotU2ws2rgQf4K4Y5zkMj4VV8RqwbYYehpwoBKHaCiiMXpz",
  "key8": "4GmKexcu5EDD4dpPKYrUdRc32YZUcwcFi3hHE22rxUJSuYyjRN19LbnEtUKSjkvUDzrwGBrXdxUP3Ujub2PiBTma",
  "key9": "52YGAFAufia6wuDkxYbJez6LPFpXKGVypwEqzBrfKCLktALMUbWkbeNdKL67WkG2UKVC5ziHXEWsjSzto8hzYUGz",
  "key10": "4vaKusegCFMBvTEdWKNDMj8tb8FCGbvPdQZ2E1RQGX7vF1Zf2yjbbtgdhfVEa63XX2uFM23LffGUrLKu2uq8d8GN",
  "key11": "5HEiX9kUAUPhBK9GpmbM27rvGdo4DFccykgFNhLmYVdsQLXwSrjqiGaFPzSQT5JHwF2542CFzfYwDW62f6cXu6mZ",
  "key12": "41bkcMCj5Ns4Fsmw9BHW1UrubZfMGCQPp6AwqGidUcTTAAkjvwAaodoaEC3Y2cKD6LA7mLd5VKnWxANx4Ph1CzRM",
  "key13": "3HkqzVgmh9gqCFPvLAuCKLTk29TMSDaD7mzwF7bjd5YtU7jou6vQv7NNaDMRGcCadX7TC28zcXW5Sm6mCaG989tU",
  "key14": "5TzDuiU4BZ88wA2C5CkAc5KE6vh7BhS7uUAneepbXZ1174NUWpTnAaBYjsm7qUyJ9Mz75QzfU9xCMY52FebeEHwX",
  "key15": "9snFwHQ7nhSRYH3FUtZxuW2wv4aJcWxVtQErXvWf7Z3VNmR3KeqLwck1QRbLYXXyDvEVdSiana7GKASie2kBgmV",
  "key16": "yvVSPuUj9fK96nYp8ZPZq4gh5zRnQFmFUbjYzCiRek9nMNTjcmCQfXE6oPjajM2sgy13FyJ3KBiEL2nnnAi1mMx",
  "key17": "2RdtKGwqq7uBQoApeG3J5nuJLTJFFdz1kBBaedeRt6P5VPknVkvvWn8bUnFwwWEKZjzN6bdaCeWRnUhg2u2jmFZe",
  "key18": "2NZ9Vc14uBJRqaQFAjEx9VbGXPQtyHLf7PSmGaWxtVHobrEgnpuBHsNEycGVJCj7YLZwuvMff5WUphy7Q6bahUuA",
  "key19": "2dn2fsCaXqfE9Bnykcn6z2dsjDhdcWi9bBvL9C36fZqvQdGoJJtC8SutfZjjribyU2HHsM2px8vYgJAqzWg89piE",
  "key20": "2GpFkGxza2fxAkENb2RndgtZzXzhWHeq9PEYDyEFjhGsFTxywnVNHZvgQdsDQKuoHYzgyuU4qMGQeUKGSy9cjTed",
  "key21": "4Us1AeweuACN3VcdTUcM8BUeFphx6RFupXvqSkZmFHjq25R34U3MQo7heGCg4hMHEcLubZc3TRFXChSGZpHwAZYA",
  "key22": "3ihAUBD4BMdzW9bGt4GAEnHQ4ZfUBx1wGMewwX7hHEvtg94rV5ZCkz5nXTr62wv9b4Y5DKnzGxZWbho4mCWGWqGC",
  "key23": "YZteGTMShobn4ja72ezod9WfaDuQ7jjBCEVQaZNU1E4KbGcWMM5WY2Yk5j7YJ1YhEuE3SqmsikaEA6qtdarcJ7P",
  "key24": "4DZ9hFpJHBpkFvJYm1iUp7ELn1KMXoVtGtGN2FVNtA8EGxGirifTF2u8kPVN4VjJbdbtrr5CNSctpBNfWodGyDtH",
  "key25": "zJ3sfCVJ9B4XPCipviVhud9gcHXArcKxt4PTor5Pdu2ctbRGgHpX4qcuY3jJSuBup8ttyWmMvkCstJAhSb2DLUP",
  "key26": "4SqdYX7TsCEWgvh4eCU1EqhnD8qp5UcyMi3dcd36JoKirA2PvJKoZqtMFszh8AgGvr5bYwvTuXcBcCgtKNkPXPo4",
  "key27": "3F2wKGwyEnVH2VjuctzqBD3JUoxagPUNxaAHNTpRZkVmQNfqU8zcP6TQobSoJEQhfRbEvZzQU5wg1uawvktBbmH3",
  "key28": "4m9ScDbFgb4FcsH3QuFN8qqTijghFTgJhExeLLpfbXS5RzCoycZ1ZbefhD3wsrKUkYGfctXfshcFwNMoE3dUVjCu",
  "key29": "5aFCtw8bwU4ZbsNVBA6cdciPSZ7PSYTwPpGpxT7X8DqVxn1Esw2zAdh34HVrbacdFpk3ZNdKFP2NDzqcKWLrfPv4",
  "key30": "5vTgg7s7kp79zMTy7AGbmH2AzurZ6iCSKa9yyRZ66S3KLu7x3UohVsz7dBkjzaJxih13yQqMkiSdksgRDzEmkXzZ",
  "key31": "3eoCD1aGYGxDQWsAPnsLmh3iLQciPARuSehpaNb5ckDdn9mXcDsDxZaBrgk1JeG7NjUw59aY5QRriTFiG4Zmi6z9",
  "key32": "5KTkBNncgRT9qajSnZjMiESz7u28XrNbuPTiSUZqtdzuwjr4HyB7G4nY4LkmrMppDoKGmvffpj85tpMMMQxsMhQu",
  "key33": "4T9a7fEvjzduaubuxut3cfg7WRbpGKksZEbFp8t9cgsdNUWmx3RLXDhfMHFYb8T5ZpmkSwMijT22c4TfCnM5bpGL",
  "key34": "4pW5UcenXrSywpeLoUUxZeKRcKMywHttsV1dpo4jTBCCExe3gdBEE9nuk76DfmHJuHin4icBLHD8Qq4cyVroUDw4",
  "key35": "2Wk8rfEbEYmTdjYHoLpgSyEdhwYpDszpWWTUNjZg6SFvf3ZATdW4TEtjrgpqhMhQWW1tJ9mhSEZk6R75bhaxsU8u",
  "key36": "3d1uTTzGGFcW6rZdeV1k334FBzidpwz8tSvzSuzJmA511zAbMS83aJnaH3xgVvkG8QKKq9XYuz4RoAehGd3VKZj5",
  "key37": "2WZRRPZMHAzUac69hgvSKi3fqjHWpoq64XKiW1oNvgaqAhqkYQKwzw8m9YUHrfAUS9skgrUQgzX8xbqUkppqaGut"
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
