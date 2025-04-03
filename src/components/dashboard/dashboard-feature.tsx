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
    "5c1Rtq6GSrDcXLAUNfk8uiPejFCwS4PA2anmuHKzhSdSEC4LXZhszFbNq1C6Q8nYV75njRykEMREPu97WZXgHRz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoYUEb8mbmt6EvFyLJTZy1VRYEk7s3M64q8q3Erd1xEz7yctcjKFLT8wwPeg3TfKTirvktfoECejTG5Vb6vphMh",
  "key1": "HNBAQcqiAs6Kg7zvCbfxufqmTsNhuL2vmgsUwjhF6Y83QN4ZL4v2wfNXJFm3XuPwhC1HaeXBgEYKfbvadR3RjXc",
  "key2": "4kJZuvCjw7W9nvw4UPF9s82zeWZHT7ByNRvxRWMrAT2uoKrhtEAMyoWjU8Aj9XaDb5uS73hnjNkEXXa1uXTjFVq4",
  "key3": "5QvRrhSHfwpdLSzMfsgiyJRzTeLWxLgqkTFvaKnzBmmYsLiHQGxEZp4WUZR4b4swXFeC7yo5qGAqmZhF8ZuvvJFj",
  "key4": "2NebAcnTWnHH6mHyftQABeeytugmn2v4xrLbCMjGdUQVKotNpQsaMuCzeUgzUEEfidwYovXYZoCwE2SpbC1qJr3Z",
  "key5": "4t94DEkWvKmT29ke47Jw8J9Nn3Frn8hK8eitEWvSsP1SCSJwhniJgQrrC8U694mfAPN5VMDAHWr66xb46fvyUQYR",
  "key6": "2PCbXQPNcz7MTumw5DPSJPvQi1jvGJtzh4hBD2qTZoSSNGjdePqXzaCJEgkLVNAL9cHajeetsvs92fq6ex2ZU8UZ",
  "key7": "3NX8i8k9aoPwkEMGQz61T8GHPg9xYXv7gj89u8wgufBBzFg734CDvStknjGiPekVSGxxfGFu9JFUrN4xMFmpnWAt",
  "key8": "4FU5bvWgigrD6UDPTbaCHY5n4D5XS3XHqh8yeMVu15fNuf42WGYb6SdhHpK35JBriM2Xb5V58MFBEY7No8Pcr3Gj",
  "key9": "5kXdY7wQ9bLEwFAYNCWWT3EAxm45Zeo3kCxmbYAt2tyheRH1pYVMG4CYBibUnrP7iTEdJr64ss9Ewgu4fsjVPSZJ",
  "key10": "2iozKg8RHBnM4RuAhiy4MTjoXaeqzK7mgxLeMtfQKdyCkXULdHX3UHQFa5X6WwF5YVEdYXUy48Rjfe1Xpy94F8aS",
  "key11": "2UQvmHJSa4Q9NKjrUzSMqpqpNJgXs6r6j2aph56RvafuZXT3zrSeD9qjfKfKvisJtfnBppge7qUKLUEibxnCpUUS",
  "key12": "62ViaG1wg7voiD5ehQghX1R1jY1DYiAV4E9xdAHcv6MLA5VKQFhtHSpHgjAm1gNaPgeJZ6rJsaC8Yw8yNtJXPh53",
  "key13": "2LK3scM6Qt5g27N7dtHgchQSNWpGqEpEMWHP5rZAFBgMgFwdhZXzn5j7EczFT2J3jY8WdxaLBafEjPkQ99R3AHVc",
  "key14": "2AKMUNGFDA68xFhjAorMLbuzZZSC9eLb7RHBznmTW8dxviC1MQsx4tiqaZdB4ry1gKn4GN9h47kV1NQty8VKJqnq",
  "key15": "5MY5GJybArU3TqwQsgdueWBdS5SdPy7rNmjVZyvbQ3JvRb2At5fETEyUaXnY9JNh7qesYRZcGPAADDn4ZJphR4ZP",
  "key16": "4Hdm5GXpMhUYtEmSmkVKB5gZwNcZ4ysisrgjcDgc15DWqgTg7q4E5Q2YZHVUvfWKixzeNS4TTEuk8uCYNj4xxbmG",
  "key17": "2GD96EShJ3Cu33A3tvABPcyVo28sCS5HiNbCv5PzszH53a6fzszEvNn9GNwE5CfMZeRMuxKbQYAunrm4qagAgrwX",
  "key18": "2JG3VQAzmWJ99gkjmYLnKyL9Pn6aKVxvQsNUvdTPQLTtE6LrQm653BZWeQEaQF7tqpSy9uVCBrq4rFHDqCj9YYAs",
  "key19": "3SWu4zLPer5M1aVj5JzgFsRpkkfKT8BBp4f7Jy3RYHrxTAiuJZsyTnWcArceYm5U339Lzg4FLY96hoW8DAgwHBb4",
  "key20": "mDKfWtEQqeFKvRWoPkhNQnMoWgmcoJ6X7Lh7TcgCiFGYdmTsYgipBD69JZiWYgbMMMMPLUkpA1VLZea3wgb2Fzn",
  "key21": "2ftGYfBva6wYUEMyH12ehhu6gBMXe9DCbqvKe8R8rkd61UFDjjnY9EDrxjsoPfy7AthCpGj48dp71S8otd92oTYP",
  "key22": "reTgzG27iT9XmcoUbQdjRwN2vVXFTevNpTwaxR6yMZH6U7Y15ourzdFXXdAuvn5ddAWdkS2QXyEhjoMpwTYZAmD",
  "key23": "3geVYjKA8HucAoaWCXt2JdsYm1WaJ6XvHthGmeqrMhFY9q3QBeH1U5Ff8Daeq7TEHAJCj11gpFUTvrHKM6XRyyqu",
  "key24": "9N1gcypV1da5JPfSxuVZ33AXV1MwbvfjKcB4Dam3rLWPxMrtBkgAMRhCq5p1q8VsNm23Twn7RE9Uq1aRfHNHACG",
  "key25": "nCqqpiRRfGQLshwkZnyy3vWCa8hSkuGFvdWnjgtRmQeNt6445vAmnbBQkPgUWkoV6BvA59f1pWbySrMZGu7vasr"
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
