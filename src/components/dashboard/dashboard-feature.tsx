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
    "4kCRwLMhoUQbnY4RKqYv4qFkasLqWvDoMoCKcEfu7xWEnDwbJhRstbRXM3zFxBKDVC4vmGHcZNQY9VwqvYJbWLon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReJcc5zAkb61x9EEY7ULHFXaTDexiAiMTnMSvcmsCHLaTSRWNuQs6frHrhMXNZr6ZEpmASZbqtznVtTeG1j7Z7L",
  "key1": "KufHL2JNSWVVHtNVtPcLMbcrvcC7JvRfG5wA4aUm6HixUUZAz29PxuuZV87XnCLezGh7fXCGpgvSMqq6tAJaLzB",
  "key2": "5mk96a5YtokuX5nY8uCkKZxh32DRiQaXNqFJJzeDawt2mHb4oRc9dWSxZNzdi8qS68r2UKGd6L7qH68CkYWRqv9L",
  "key3": "EYQ1zkvtEDvM2Lfk817VwCynQR7kLp49yHVA5FXwGXUmUvk6dJx9wJFffrSV9TLc3iktmUCvE4aBaNr1m9X2iSY",
  "key4": "4ugNBUW91JTQ9QVH1LNZSnrdkPiNrXm2Dw8tUHwcdshPmLbxpgmkZqdjqX6Z8eHbsgqvczkGiftmLnusfuWUbbz2",
  "key5": "gwq9cjnuFW3KAR46cMjAwBCEJ6T4tbtxrvughuUszJ1UVxpdH339RxZWHXxwdXV2cw3H6FQPRbuLR3UWtwXDQfa",
  "key6": "49Mk4XNiRAmE6Adz1wiijnmjiRcC4n5mhapswVnjEnQzHmUczyEsA6Xv9K1kdtK5th8VHxCGh3e5a5VwskBnAmj9",
  "key7": "6D3L5o7iQuSWCyGWDmTpbfMPvppyVexjV3aco6K8RUbj4T4KDA3p9aH9VcxuoXrSstaWt2fWKGG9kvkVwvKWJNX",
  "key8": "57AUbMV8BcoJ8qRigbUFiti5RK9BVDMagZoxPgqzt29sHnk9oztxY2srJnWmfJYbPxwGAqDJ4QjCPfCNUw3QBUbi",
  "key9": "K7Ywi5Xy74qikVPufFB6pPsLGyoh8a5eULV5Sw7ZonZ6kBLSAvdSQo9NzQiPwa5A81EzQNSbJraPKhukGCbJiF4",
  "key10": "3iJ54ULYy1NPWSX9Ugc3rZ6iSXSQYoU11goJjro2FeWFTYyHpqafN5zRrcJwFmQALC4kbE6hwy8MHbHd7LgkTS1u",
  "key11": "2yCi26CBizxRSJn1ninuNmmtGoSL3UtBamjG6KBs1FycGrmk84cBwu2Hiw1qCJBe51rvtvkXBgzZ9yBqgVbfHEuo",
  "key12": "39Hrn8tCxAeMp4trBntYaNAyCVTgvj5U1QGZuBSeFLzopstAmTjzesSBuDd7jT6gBxZys3H6D4i3QUF2rrYaPvv",
  "key13": "55reUWzoJLcQVAZYfXSmA5jXxFTm1GgfdPWcrHjXXfB8MupZeDEuYoeFhAuZgZnngUfEeFnmfYc82XNYmj2w1LrF",
  "key14": "3w2sdRfkUEH2jZTMjxywQ8P4zagMuYZe2vj1bsVHuwc6hEKRmivHtgkXt6DaCM8CBmb9Nqn3CDD1psLaGYQLxW1K",
  "key15": "XVipHw5TnJqpLK6cm3u44bgUkJS7sMKtthq23tzYETL7NXUQ4qWH91g5fq7W53y2A2W9zo6wHb266avbBRBmG8L",
  "key16": "2qpDGWnfbN3UezSM66swDA2bYrjav9npDPP111unjHKTPsx7KJcSpQsQrpGiqqGxGJd8uWJqSEadyYpZbMKkEAF",
  "key17": "3YgPvsCGLU6vKVK8fn6q1SyGVhsVPqwNvuqNjxG6rYKzP9irkUp9bmZbkmAUmbPewjBnsxtUXwK1cb1cJozrj36D",
  "key18": "DCrZk8pT7BusssoU5cB1ns7UM3ybTYXkUK38McGyJfYbVGk4emtniVopuGb1T3dc9KynTHCX5wgf7Yn7Wz41nfs",
  "key19": "38JwxsGXZjomyGtrREdKA9NFpbgqvtsEmYbDAMj4y2RrVygTFWnggaU4yuFbGuSuZ5P4fPVLQF3c8nuPDD27XRV",
  "key20": "5Ta1vurLymiz8iQc1ZCRAsVj5Jk9DgLVZja5WQqiFDc91GZxeoegAeapCQn1N1tZXSPezNZsnm51bdh6XyeCpjBf",
  "key21": "ynqSJVGWJVUEAy1KmartZCapaS9DoTfzd76Fr7nHBn6b8tSE41aaqARYtv5Y171quTMWY31bpxrNgGwp399Bq3Q",
  "key22": "577VGrW765jk9qvn9gdB7YACy5gqU2NHq8wQvWhUB8eDjsbk6DJDVV64dfkBE1SpenLSkYYHZxNUjQufyss62ALs",
  "key23": "2ExngitUKTqrscMGPEkK2DAQhd2KqM5AZWGzT4xvRBzz9Yaa3541U1hp8fobKkVQxgdb7iZj2LurUdEgZ432JXC1",
  "key24": "34h5FhWPUrBBBNJ2G7XuMmY6Xkz3pcKAZnQXwPx2pi57iC9ChQxCuVfQ79yzoVo5RLNoZA8Y2QvBR7ZgUv2yiLLR"
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
