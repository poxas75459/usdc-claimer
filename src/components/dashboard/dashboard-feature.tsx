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
    "2pwKD6GZuSE9EkyKXVSjYi32gsi8WdD8tvBZSuE2HuMLFvxM2MrsE653Cj7jfoReyY5f9vYGyeYxxiFqxNFx3zhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G81mYhhNtDvU557EhRFyXH9MXDGpHTfvXTaLCXo2maa7vUwR6GGULUx1r3muHMikHcH43nJGyJ87FLqovh1jNR5",
  "key1": "3HJe7vkmGDwWbrbkxyiLaVeou5sLahXYTb4C14o9uVgwD5zWU85wcdmLnRA6PCsguhn2BDEhmiUZuntj1PC5FL1w",
  "key2": "krV5RG52rVBfWaZMdfc6bdcybWu2U872PmWTjmjAU2Q2WsUHcYRV9itDyzxz1KwkCn3jADYWA5EeDyDyBSKtWqS",
  "key3": "r78bakT9AwCGquD2pS4Fm55SdTtz5f4W2rCHaeBHJVxiRGmUnceSUY7XwE6DLckoy6nrpfsXGBq7aq33nrj7dxE",
  "key4": "24nkVt5jWmUbwtov4CPrv8wwtPDcW2rLS54VX7GWUEbBFbEdekfFXqLMwEfRi8x9n2ZKtsH57Ro1tHyaoMAoZxm3",
  "key5": "3Vgb7yc2V9yPucqiiofWFDggCC3c3Hco49XiskA6rwJbcnMurmNCHS5f7W1JdkpHHxcH3ngD5h3oquenmbuSdxB",
  "key6": "3xfxgGZQdLN7k8rKip3L79dppqJnRXQQk2vp1F2r1fbdgZK6Y69bahRETqwTLkFJspAunGgtq9RDHP3rnuHX2qdi",
  "key7": "5oN7bdDm4mm19eBmSU59LbfFqgc59ETiorpn1yHAhebzfTQaL5usQriEh7SVKyWiobidDogizfEHAuux7wm9P9Zt",
  "key8": "4GAFNpVy3qXdV9kV9ajTGhDx6DgnioZc7CsdQ9QwhnUuSwuvtuckoPTibnNWKrbq8efzzfcVax4X8ebSwkTKbhSV",
  "key9": "5i8RH9ok6ze6mXNkKMo2bAzUjVgviAq7TqKP8YoU5EnW4vm9SHd7GtSPmT24Si4EgLNbQgvkUo6boE9GshNNDgq9",
  "key10": "3GoDVXKvFQqkDQvZyPV2vpeR3TazVURco64mbXvZVUePRCSnfhdzzgEhnt7WrUKx1zB41ojL6s48c9JeF5tX2QFd",
  "key11": "2u57owx6SZqeQaVeUKQhC8Lc6AgvKgBh6DU3D4V9bcRAT96sfJbWdNeVcnzSCv5DpNPFK4nuNc581FMjYEZnqFBu",
  "key12": "56ucpLLsfKr1sFyECsSMJ246rtVVKrqhXN78i8VRJqBjYJmBYfsxeJi48eMmMCoSZmKSderdAnc9v6EkyLtvrooZ",
  "key13": "3DiZJixL5jTsVMCmvzbDZn8TvvhmuybuhbZkTvE5JX1LTxvUB7JeJtTpEmdDid4QrzYeufuLJLwwbMiKhT2zokAg",
  "key14": "3EJGd6er5xp2oTW863XvjXFV5nCt9frQ6oEcDk1vXsMpk3H2bemRRfqRLt6Gx69nyJHrRtH8qHYTNxzDyCsrJq4z",
  "key15": "4o2AqSnNzxadcmgAj2gi9qFbfnS3Vix2Pift7ebAtbMKdXbGqX4G5MC8T3BP89iT2xp5TxbW7JRLCxXhbzoSKLdz",
  "key16": "5x3HN6LH7CJ6uZpTj729pB6s57EuWK9G2sMrwYRVoLX458ERcKLEDdC9T3MisrfMSWjbCk2zGE1PZ4Ys5U3jbQCo",
  "key17": "4iSztPVtuz931cr6e5MmrTeuDfJhJxWivbhuX9itmoQQtRJUpktWPbYR7c4nLdAVnfaPvbWm2fSjexgUGFjkhMzf",
  "key18": "2smioWjqQ2fZQa2Vk47eST1FSRgaFQQNxdiu3AbA1etNub7PY4C8FXBQWAo9LLMK9gYvEDnFS3NHTXT77uoatgxr",
  "key19": "tyJW8EWSYWsYMZWYwL6CRZUxbrPdHHKz4bkzQfFeqGRyyz1BnctgHZ868sgZHNDGzufVpVBBd6jSgXTfSAoG5XZ",
  "key20": "3Vcfc9CeBaaksXJmxi3CjhvrDbeExp4tHfQ6BKFQxCFrU2cqETgpY7MTErdGUq1y2VnjbZ5VuqVQSe6CEUCMS8Qr",
  "key21": "5YuKwMPj5XsoBbjE226KGTDMs6da3WTKDPesdAWBvJfBKXpZi5S5VTVwWQH12tQReN2xCPEyyhQ459MMUT3atRpP",
  "key22": "bj1FvyjbLEdBfceBfhLoH8PQ4MjF4Cg8yTyhCSgdLWDjfzwV2hhMpEGhoKDZvWRZ44qmvaqgfZXbH29rQAt6Eqr",
  "key23": "3hpeZcFWfpW96py5XJKCWkYBBQj3EJWiFX5rcyD2ivPgPGEffmefE3TbfKkdmaWK1wizgTimm1maAwgQ9wPhWmc",
  "key24": "3aa5LRBvgzjxA28MRxDJmRc7MCDYRQ5bndscfE1gD7y2G3tLkeJpyrAhAeQb1GhZFgtDQ19tLoSefnqRVgLDM8H3",
  "key25": "2JdGKek8yWL5KnhbBG2X6f9WYpMKCKvesKgJX5rfE333b4YQvsRv1BuW2dWe6DtqXHxz4o59inNQ45brjzd4QGRn",
  "key26": "4g6mJoE6tc6j4G1s2U57hjVDX8Q1KQjMKUiaG2GqmzTLU8fAwAJNLQEEvmuCgaLYCzDcFAQdbZj3Y27mNMnk84W5",
  "key27": "2Vs7PxiQzykqFD8HRka8RYxdgehi26JTBYwd533wRhzSyWoHb9iGfQ1kVfd3xSayNNq9X5DaReQ79BbqMJ5mYAHB"
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
