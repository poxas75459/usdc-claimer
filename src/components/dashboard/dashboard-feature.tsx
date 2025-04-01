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
    "4KzodUk2kRN95hUQtDtX9w2WWfjk1cqJ7mBETjqbgSo5Mpb3zZ9hN4K3z9n9SfK9e4oyNiniZ5DVWLWHnmUoqLHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gUCSNSSdFbPMtudiAGs8STkEqYTAxwLW6Bti1njCNm4SQe4sfPZDzGuhJtRpJBJSpdPfVEva153NeViRbwvnhK",
  "key1": "aZnZ3HDdVyRSHRymKWqfcFsSfNs54Bkucdq7fhBWbXU9AZCitN3Zmo5gcu2vHiWTJTCy3KxVar1ArL63gSZhxCH",
  "key2": "2EJth59xtZcHMqHN5AT9ZgrNcjG8RkM4TfDiApykdc5YRxGLLmcs4KHnZ7RJaHEMBtxLDeY9zuwMPphwKHhEKVE7",
  "key3": "34q4QdVKNg13eGyu6eEwv2jxaUdxrNjTC4soUH18CAW5jSrqHYQgG4J6NRipaAvnaQJThn38FqtGkif5Mzc8uVbF",
  "key4": "5mSKkN4FQVy8SBiezcq3FDCbVCXchs7DjRbRukJMb9HkArVhHfRH1kwa8Eca2hnwZfV36aHwk9PGEE4uXrSiswoU",
  "key5": "6LmRQkc4yQ4UHTAQbLqKq2iUcvLjDgFjDqua5ngfwHNn1BAAcdsM6uSGoEPT2bcTDvjqfhoQrSLUy8dsY6LAgwF",
  "key6": "5ty4XT1ronqH8R8u29e7HT9McXvy6aH5uGwYGirsjKo9tSAY7ykzY34by3NN4fsDnd5HhZgaAx5LohdaKLfbHkKx",
  "key7": "5uqSzaMedU6b58BtST6eNLqogxjv3Zs3nehUDc2vrMHzQKcbNyWRuuKpsCXiWVXQDV9Zyx14QRL81tr6rtuaSuso",
  "key8": "38mSDKgqzMXM27mmvzZdkFUHUwo648VUUBxDEEzFETxiXzqCyL9DpQPoBc3EbAf4LZRLXZp5RXjcW6zmpz1Wpwib",
  "key9": "38N9d5GQCt2Edjezcsbvg6Yp1iQm5QE1MLkegatjebvWTs2CspmJrt3pjzomqWrrNmkHzeBvmg9ktNEx68pM2DDs",
  "key10": "6GaJ59T2LYHWxqXmDBrmrmhvZbpu1wEEStR6si29iSzjAx6VnxNv4p8KeQVpCFWEKmosT3dEUqTn39KvNJiLLe1",
  "key11": "3PoLJZhbRdXV1mQjuSGHXvpa5qndmJr1APBy3GnpZ98pZckcJs9hT3waW4ua8sMYCK6jhKUt5H2CwBy3unWGuws",
  "key12": "3wZp1yTVfZfg7w2epTLcNbMja7vwoTE4HAjZ9K4bZKFPRyLR2iwQjqxb14dujcoQc9ToEjcHWEYRYSkUtrAqC4JY",
  "key13": "hwg1L1LqL9HE3k8TUnZYLi4SxnGUZNwQEsZH3mh7uxqXWd5XBCm2nZrcdzF1DdfY8KsFGV6wy5gR2cWGtE6hiZ2",
  "key14": "TTevb6UZN7VvGxAiUf5q6Ri5VYwGhRbUfLZYTWugVjQrt5cFxPRzHXEt3tTkQBQ7Q7yB9VTdg1K4r4atTCDNoFE",
  "key15": "5TGAGmpQKWK3sgGpepgce1EHtmY6WC7fWxzchN6EHWcwvtwXi5sFEbTNZN75JpBoFYi9TiTQtoimCtDmsWVWqM5C",
  "key16": "3ikDz2L56VddRG5o7HuHVCRTMfAQJcDRoRjHxz5hVaW6ZKtYGuggGKRhmfeMPddCgksBFbNTCFokfbAkN5EmoEeK",
  "key17": "e1YGXrQqJhYf37da4uPCZGuJmd5sewX3Rzf1wch3D1DLJ83kPkSijQvVCAeXUw2bJCVoMLUgZRDMA5318wdD2Sv",
  "key18": "3SArGARQjkC1J8BPXmVPpAVPHyWP88eCSkTwxeiwpnob84F7CECcyqdk77TjFrjoMQMQb8XjDTJ8azMU7MSJjoxQ",
  "key19": "4cfNnphRwYtsBSgH5iyGoxXsrcAQmMKPPhXdYnhyoJ4omL9TjLtbhnYwb57r3DCP9CQtvgMPEWNjiKuCnSCQcNUb",
  "key20": "kCqBLHYftGdEwCbkd1vnufxY516n2XYcmPEhfr47T3EMW1MVv6ZzzFtYkHcecXWk3j7MrAGrZ6kr8FRVGo81AsT",
  "key21": "3DwydD7WhuhKMp2wBrzAc3LVXzq4Kpxc6hhHyuVZGzCfMC6jKWgpSqFcaPe6UKu52cEz8aJqSgfenxWgWbhjVuvY",
  "key22": "axaKy47SqYwpoaadQdzK9FU1EgpzzHvAvVUbxSwwxFcStYrFNQozxnWsnDhwQh6A3K2MeUiNSM8BHpLMpQASFEQ",
  "key23": "2dJg4GNZbqkFtrYpTvukJpESuZWjiiq75YCToyviCCpxGrJ3LdwRd6wD5GG5wAi9sagLmsCKsLwBAhQGrWrkupoZ",
  "key24": "2ifUrH6Q1bYD3eKxegwYQBLbtnWSMzTE48g7FxEyQk64w5HnSGqLCuDjdM5bG3nBYDVpuHciPoSagtjcwMWBG3eq",
  "key25": "bWmrsM9C3bhdS8jUh4iNKKY97S7p69uQ1ZF84Cqm3VUz3niWBLsBsneiwW3Be5oSPoqo3zWmHRLp2JtGv2ViaSx",
  "key26": "3otwmHiXhAJEUH6L6Hvk2RwHUu4A9YE3BVyte3rU3JqbzW6L24RGrYPMAPx2eqbwpqDNEztG1UWhQehVpuv97MoD",
  "key27": "2viBVZfWRz8Let7XSpgTT8mENsbHwDcg4F2AzsDVaFhRzPgBwnQzi5Tq4r2orbFmBEb65ey1CmMRZc5SajwX1uhq",
  "key28": "44qCtbe8wQcJtZ9Ub5gX3nrknRJZU8agsMUyAcDBraFhjPZuUMHsro2JLCqSZqaTYttcnUWD8U5WuqLjBnsnNqvg"
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
