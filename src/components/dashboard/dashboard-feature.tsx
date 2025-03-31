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
    "5t4RBb5xRrHmX6yUznUg9LAyA4orcZfeecVoJyjY2w5jMTchCykQs79mvEB9QJ8c2Xvt3oSi7wGED6BFnmyHw7jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q9L3hJaZbnqa5QpwBxMhZMXwXr9W8gyto6uToRXaB6pyssdXp3BsoTtBkFB1ciFPuRNKF5Di3okrxAELFSFseM3",
  "key1": "48qGtmXWBnfGwQuN1zABRZjX2UpKYAAL6pXRhWerStGMCxN1rf1JSWCnhg4HWBpk6T9JxuaPSrRp7MY6ur9Uq7kV",
  "key2": "3jB2mGjNspkh1NmW75zvwsWUhQBbkXWgokAq49by9oTx3mMR3xyHCFt87kJ3TNqSWgTNAajE1b1sVYGGp7cKzgAX",
  "key3": "22GR7V1fRRTPKn6ZeWt52x2dTjXMoAaF7qxfW3in4ba9vujMcPbpWGAGsm6wiH95A4MuZQQcSmUhFv9xoyfbXCp8",
  "key4": "5sFcz3zhqaM6LSjn494m18e9uBuzkf3Fggh8uKPaZotGAMkz6umQS1kCzw1rUL19es1n1q9VFyYAspxyaRSpMGoj",
  "key5": "3vSqXmDkXRc191XPkykGKQYyKv5ykRiAQshquUvXKATGf2PmWpxUEVw9xSgprMCuLJ5CdxehEhpu7Q6RZuD75QYQ",
  "key6": "5Lq7JyS6raguuzZWQgxETJhQz5UKvYpn4RSQiUSG4APYDLCiQoB9sUUKRNe5GWCqnskDnamnykhS1Vx47uDjeNTh",
  "key7": "27H9vtjnMVeGCkYjZCotrN6mtoNiyAPPno2b7VnjEdbE2m9d93WU5syXhdZoASvwFbmwADcXXJo5VghbB2K2H7P5",
  "key8": "5CHCm6JhE3UQsnEwauiF6ZFL8VA9sfpwxXhcik4FLPYsAUkuoJHJyWyCcttyXEB8scWovnRqbDibcrWMZ7kZBUjg",
  "key9": "ZHSmnrrrMDoGSHmft8E916pa7Ntr8YikLKDbfGtTrpVxw7Tzs6oYGWdBFAEgPyo64mMdhRKcqWbZqdgMULKa44T",
  "key10": "57vxrHvshenqevXX8QyBdm72CkF8FhNoh6nJGD9WN6VfKGnku7nHyeTYWdQKX8jHG9Z5oVH8Bz5GoMSVas43uQ58",
  "key11": "5UHBjdAfyk2u4VuU6nYqxgcTm2jtpedY7gJv1S5znjbyFH5T6f57cHPCF5HCtCiGdv5kYKc1HYvLYhTpBgohu8HB",
  "key12": "5D12PKAdfLsudgSYp792P3jR9tuUKhQ97vNe8L61qhG2mEy83hGKQFBERFeAavzisz6Z1ZoV9EaW6v3ZXqHPcUwN",
  "key13": "PRSTQv44M5A7vVjTmoXXixFuUtPxzBymdoHthP57jKEsRuSxWbuYv3XoNANojPJVfJ5QS7iJ2Jb4s2CDLK8hL5V",
  "key14": "2G5evViEN6C2A4N1ez8bTm7ZhBLoMvCkUErAZ65w2CQDtjrzgLRJrVEjDh9fNcciQqrDJG4s1NS6yVPEsH2aARQb",
  "key15": "ScFe1RN3GaYRKtQBaVDbu5STphXrsPESHFz6MNTDhWxEPoqmTsgvuJUmwQ18uaeRYJwygyuJiANcuRH3u4aLVmT",
  "key16": "466aJtBWG9Zw7Hc6khKEnhADxWHMCsEmiVhTuWm5hBZVWcERqx8976THW2GtGKpSBPwkG2bAUKyJ9WXjL8CMTkur",
  "key17": "5Ndp1FJfnLN5nbRdyDwZg5sRZSG53X2ejzjtPruKVjkYMzJxpbFL4Z2HCQkcxA1Cq4aDoAKywRAhyqkMBKXY7iFW",
  "key18": "4YsZgmvTq3NaCUVWxosjZprwGDcTFJPHqhnMTwFxf6nFrABEnY7YHMVQENpoHkRzwVu33QcZYj4mqmQFtvSxBzCt",
  "key19": "daA9pbDzjXe9U8K8DeE868aqXVBpHAWWeAYQrPJ7cqTZTrLMhGy1YbLWtdaF6BTG2Ai6b77VAJ4GU6h9itvYvmL",
  "key20": "4BRZsyN3Bau1uABUjaNr96BECLNuQYHEqy7cbRXZWebS7ri59g4gepBqZtsbF13vnwgSshJXe9Phbhw74yWdt1Aq",
  "key21": "3JrwLQ2MiFqZuLNPs3ZRUX9oy6RmiJPjpDuYNUnuHzERPcMqAvGj2WqFywkQPR9aMjn5Ct6j3PvoXJR5ZYixnENj",
  "key22": "67XsFrGtxMaNXXYoqpTkkfwfkPet84yVB5zxnQ8bnbpqrNU3rsW1NBK4KTLj97BNfK3CtEYFKJsT7yMCH7GW9Eme",
  "key23": "ypDgsQHpkwNWWoaMfBWb941ZfSXzqp5aPQW8y6pig8J4NDxfsnuF8YN6PtStXN7upyib7YVC9uxrz25bXp6m3Yb",
  "key24": "2ZBaeQ7As6wXkFuce5xTdmqqH3LM6PrVDZz9Fz4VdvazDyM3aiXZR3nQ5PDi5CE8BAyrQZCsQh9Th9RX7uE4kz16",
  "key25": "jF3LUfmKHtrXVroyVXrfqTLEBKP4v5z34vX9xaXJSRc1BS4LzGSYMPcHumgCEWMPmCWTcms9rGBUF4pbiNLtzvH"
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
