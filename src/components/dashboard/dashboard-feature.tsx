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
    "eMZRuQnFvkEwVPzxFxkcWXp2YJt9PryDU6UAo1xszpQaFJTmfLaQQsJYf4p5Kq6XmL2CB19QR5XxnVJgaN6Ef5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ka4jFDdtAypDwz6fWywTBV5WTU1hG5QSYqsr3BBK4kbza7dS6MJQ4oqLgiLeSUfCmz8tG59XNJ5i8Y2iJUj5XVJ",
  "key1": "4AqEXHuLDV4HqP1VUQu4bKDcoLbv5jGNLkdQvwaKCvo1aaKeTvN62dcT7XvynfxdNiU8yTNuougeXiKcyM2E5enP",
  "key2": "4CJtMdJQNxbNkQBuH8co4hVkQmKqwtkJYtGpAGxDEKU2nxYLmyTWr4ugz1J57ut8ZNuv677PoosWyRxv7aGW6mYE",
  "key3": "2r7zNqmm2djSADaRMFSbqKy5VaYmY7d35JtTS4S7iagUoADQ4q48ACbeyoSghABq7ZEevmqbcq6kpRhSFToKn4Th",
  "key4": "4eeRtsH242FLkmuorTEBVNc4bSJS73afEd8F4AsRVNziheuZNfRbySrkD6zRWfS8bUv5bT7FoTteMfhWCA2yhwY9",
  "key5": "57pYmgd1T2SxJg4Z3fKBL9mw2AjpjK4fJTM9oLyMvXdLnpWZYgSE4nQoeyuYrBJQLQcCoSeBzUC1Ch8uNxA2qfqX",
  "key6": "H2r6cSMCJYAusUHJviARZE9cAX8mMCqYPnmbVKovwKg3d8JrktvvhrkBXfQYghsCvxccLZXR9ekGCppNKutQuDV",
  "key7": "4Uy2jXtyTxnufARsRGJMCkfume86eudhXtrWYeoGBvTExLwVwBGK9z9S6XHG2244BZ95L7mCrRWLF4QuHRViH4rz",
  "key8": "49iEZgJ4ou7cGYh7PAj8CaYUcgqBvYnD2n8tcxPmbCT3mzV5PiSWJWzAraBqaAEkaab9aRAdZx5i3kJz9R365D8Z",
  "key9": "3jsPxMvEshCpcx7M265mz8HGWJUuC7EVwzWeeP4DEAuwchmZKizSZVyzAXZYmHKCxBmv3LAUQgmueAzjS69Srpmw",
  "key10": "2NVVqW6KKmBTnSZXLeRFQsvPVFMDwD1dDkUHpzxKJnymDkLpLP5CpcRj1XPnDWV3iGedX49JMddZ741enbqah2sY",
  "key11": "5huJgetUUqJ2BpQ7Wc9XFFxsWjubvUMiDbZk7wijYbKcCDS5g9DsDozoGx5eiQTAWuW31afYHmRU4M1Xh9nn6prQ",
  "key12": "5CW5ZfuaFeJ2AmRUVxNt19kYxzcEGjfFP4gPtaonLskc7rzVTEAXYJGChi6uALySGcddAuGB8vf1rebKNcBouoii",
  "key13": "5VGBKetnHdZ5oP6PDNerrA6Zt5yDGJiXJueQL2xbVwPmAEU4Zfnjb8W7TvY42eCYLvt48MW6uu4UScTU3fabcFCG",
  "key14": "468c191bntCfQvJ1RdPWTDJPKBDEhPD4y2RWDn72UK8ifMK3thuZ997PirSwoNad4yn9JNbjKFKscuri3mqsUULZ",
  "key15": "3rpExW4xDcDGUgAEhD1hAP6U4PaNgvzz5Q6x2SgUcTXNLKz39KPBHJJquox9quqK6NmPjyD11jz67qvrVLEmfGD1",
  "key16": "5EXvX4H9yKrRToubU6HVKQAvwdRCL7YcpvPyKzpC7vkxvQAvZbxPK3kS4e69d15AQxD3LHppNzhd8fduUQJydzYg",
  "key17": "4DTGMKdJBUmnEW1didDGg8BJasNdhjWqS2f3HcGe4VvRAnBR4L28KPxBVECC7cNftcmRdWABhjpN4Z19v1o6mgWr",
  "key18": "51sQHBhXG66FgoaYN6Aeubhj3xVXnJDdbLw7jgpf8CussyujekbGRfr2ANUNbg3dwzqXWXtPXM8a41oJuhWDazW",
  "key19": "3mFLiqtsuD9Z9h5XmtPapJdU4g9L5eh8ZucY9dwwEwq6UQAgvkYahdnVHyCz2coPcfRuPD9HPPy2HnWbz6Kar8yh",
  "key20": "5BkbdvMkGD4qDPcG3ErqTfSH9nGEoZXYKJ8RYSxBE3FYuj9JiHo1aKv4yh3YNF5X2CoodJpr2hmU21w531xfnR75",
  "key21": "5KNTDr8AGWjqveLSNo87Xr7KkTjMt2JuyZBv4fuzDeFZ3F5GcQZpPCwRwg2V88XezGBtkaeSLiXtod3n8YWGVjPC",
  "key22": "5BHA6J4CbXRBnJ6VV3Ft4szYomF3MVd5igoCWZb8kFrjW8CkbFyaxtD5ZLJKRFxZVR6S4ezvkhMxuvvtTVVwsDK4",
  "key23": "4jo6aHAehjKdC3RHEoi5DwYcU4UaJUAWR3PRhFMmyBzGZuQYApL5ssTk1ksfCktUq5Thed86HNVbNLfrzq8MCHuv",
  "key24": "odf9YPTs4Jd8Xzaw2cmtMWiCjEsY3abDBYczzE9GPhCQkmQVrK8wWhDztSFZSigpvXdcKcgbXonUjcguPUytV39",
  "key25": "4VWp2fDhpjke47GvDTUXrKNoyfD7DJC53uX7jFmbZEbzPwbzkm8kB7Uz1zDabsxSFXevRPU7MFLJSXEAxUg5SWc7",
  "key26": "2My5pt5LcGW7QPg5AeZdkZMDj9H8fXYMFSsUh99tpg7YJUTsg1BEnQv77LHNKMnwkuaYjmchovoj3SVXNCiKpcxu",
  "key27": "W9mqzU4GU6AmAu6Yz64zSUZs7T6ud8reqTxCDEcXWwAAiMYZWHqCHYTAkuDsy523czgy9QZbw1ayyorBmQJc3hg"
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
