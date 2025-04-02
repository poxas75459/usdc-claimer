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
    "4BNL6suCD2m5sUGYemXn4F2wXV1LfysyVKwuPFdmzNAbDrog7PYwEPdmSGVoTSHNTHbr5gyukXoNkaonq7N84Rk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XcGdN9kE7nDrjUS4Ww2Z7gxmWfERUGA66jwQPTD2ArdsZxNRXCQfT4ZndKVsGCCyiLpJJzpoTdXF1mMBA8LvUDG",
  "key1": "5roFTbAwsTY84SvThmy8YrBKfmdnGd1hP9vxAJkwq7ptBbByLYaLmwgseufAHh3XojqgaZw8TKW8zn51gezrmNRB",
  "key2": "Dc2rjyDN8xKEMfj9VYJEdNjwtqGNxU5PfidtJp33K7EsGathcEiEnyPbW4f4227ez9h4zwnuybF62QgwVMo6yrG",
  "key3": "4SFK9MBjpzCBSq4CvTnZecRdX7Sjhk1bdw9gTf8mBbSCvUcaqSXXFhQ1YeBNamD1zivSr963a46d1gpVXX2iEfcg",
  "key4": "3ERKCA1J66HR8Vd2FbHbVV7Aa3h1zjutBhYxJBSdszKt4ML75GzXByjCBKjcpUrCabbt77TVEopuwgPiWXZVLq7V",
  "key5": "48byqreYAr2stiSGj2RNkWwczP5seiz24ASZhuzu6Z2t1UX9YKL75XB7c6J6cbKgb8eLQ5zK42Ro2w9D4MM2SJwq",
  "key6": "2ki5xhsJKjiSZhLhQiFEs2XfbfhAJTjMvhrtQNchArrDgjeU9DkxEMWarWw3TYHB7znwZka1rSYfF4jtsjbkx43E",
  "key7": "vcGdZ7BL2s3ue5smSVvUn4DWyuVkYj7oDBPvwdrp11XWcrvdxtAJN7KtNQm9nRZKZMB9xT8s3y1Xc6xoJSyakPS",
  "key8": "3bdkTTkYz8uEGu49CtexVLnCGLJW7VzarKDBC3AqbTFHfmxRTT2uCjFBUYUvXpm46phps9dzhjRvFeoaQyaV1wAi",
  "key9": "4dSD6yzogwawqKiFeZnoxF5qFJBk8Jte6QDJw2m9m1r5PLTaYd1kLL1FCp9VicMmwSML4BYE9Lu7W4iVHwaZ9TcU",
  "key10": "4Mt9Pf9DivBUCbTiRy94dztdPciAc1UZCjfRppEbn8Yt5k55PDaFaps8RSmUSmcFCeoHEaLsvoryRXzZEZMEDGVh",
  "key11": "45KPE6HD5FR1smFdRPKKZ13rhtLHJPEf8XK6nH4ZfPcU1E6wjWV1oAH8q8VNWAEPV1wYPsAkpfVCrtLTN7VCPJUK",
  "key12": "4oCZmRdJSJAmbJVVJUssvzHbQ5uJPk833AYobTv8uw1AYqjzo4SiF3HSQ9NZbvSk33JC4m4fGrRfbK8KpmsXjoot",
  "key13": "3EvdJ67NJPsK3SLEQZ6zrxKRqRnTNFgANd5feo924DT1xx87R5WhoghkJrmH34RrSVc94B555xpBq7edEr6mc2BB",
  "key14": "RmuSZSViCnLKwnPmLC4rpK5suUZCQFGCfE9DSuf4UafwdMFaop77S3cDFeviNsHFkt62HpBebCn2zwTfLbtkneu",
  "key15": "4p6rGP4dvXJq2gsqPn26nShszrtzeeXxDScSSGmAGUdEcT3aR5hm4FeEURbfFDFdeP4B2AdrMsVyqMRMspdCkHjC",
  "key16": "5tGtfmeqYHVeAtaWdkoks7Lay9jFuH6HbiikUCcVu1Xkr8YPuaZGAJkTcu3zdrQ1cwUcAgE84N9nieGmmTijbGcH",
  "key17": "32ZGGBd2128i8ye2bDsG8xX6duQn3YTWycbqGyFRVtqSgCnVbEhquigJv4F4Biu35Ha27kgotz69PX5L4Jk9XUD4",
  "key18": "21YoyTLRpzS3qX8Wt5MTGMxH8guvsCVSHVJ2QyqSMainHBZAE9DuRoorubgaTYPtKTW4Zo9jAXkj9bgrGm2WazFP",
  "key19": "YVVyMVt98gthobT6Zq3y6v7Cb1qiAfaLrih2HRdmw6mUBNVNFxGX2we3ybUKTmMLmvtBPsjpyKRGAvcwWTL7t6Z",
  "key20": "vxaaQ284UX4jSGuLFK4nar7CVtH9ZSDH5JAiAZaJProzg6nfZ59HmKjWECX8MwjxYdYU4U2nB2E2hNZE6bdeaoE",
  "key21": "3Tf1BdHuxnULpigURxKpncsKo5NnK5Fh6Q6hJSHKd8d4y8HHZTi411WLDGJT3KyubuKvVR3d7QF1pHu92JvZRUCU",
  "key22": "3bS4sxLZAWnd5pZqm7H7fD7J6gErwmetSQJW7XthrGt2vELbyR5EPXzbF22AV7c583A9mj4jLaVN5RxyxsuuP1Sw",
  "key23": "4aEGdnqeVE3TVmbJjYrMT63jYedqigvLF1f8W4ooQ9RjiWdMQdSBwMKXY8jUiPGe4gBc9Nibt7cpzw4mf5gTm2fT",
  "key24": "jvjB4WaSnSyME4LNxd1szRNexon8T9JbLS4AiRRzL4Ssj9AjXq9ADHwrzS8P3EZyiFC7GYNACP35CuSSDBuRqLy",
  "key25": "N8Cpfo72LQCKmPPvD12Rb8Eatd3Q4JdFtyQF3rg7ih1LBgZRuUTX4sfjNo7aHK4kTUbVSsB84uXP9x8DkZmq3p7",
  "key26": "3Jx7NVwMGCAARqUzUxM7E87mkWJQjk1KvppakdWridjKUAvm6VpG2q1WK6iWf1GMaPnHpayUTgHR6XyTVcmAGAp2",
  "key27": "4s4qzHZyBy3jk28nHGxDLjmdXxjrYWdT4U7iaqgfY7fGHUSp5gRu8cPkyiQfrn4X6xEyq4QJrYEzApyPAcw9fn13",
  "key28": "53sZr6Y6PZPrx749S7C2LYvVCpUyq1ZdhCYARvm5x9NjkmkvkXu3h1sVGxZe7ya8FjAWo59enTqruKfusbPjaeJt",
  "key29": "3yXUbWuCxDLDzqzrEVLcEe2txtauxzuYwtcX9M4A3LeJFL1uemuc7EBNXJKZ8U2z1buTmAjMFZvNnA9MKbqk5Vmp"
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
