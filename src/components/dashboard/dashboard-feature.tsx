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
    "yy7BtsCxTrSSzSLrSGPZ6oosvL3Gs7TtGDX6PF8ayn4En8Av33nVjWgWzjCoaoarYnuGNA39S2moK9jomsDWoqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwoSM8tKVW6sZPQoPPscmcErgA1piwocrJY15oDZmvQBtkuouNgY58ANMqLiCwPZSSk22e2UaA89Q2SKHa7KUMN",
  "key1": "Pbyje6vkN4F22WjkbXm6Fg7ZGytQcTFV7jYSPFxqZLA2GZYcpywQsmj24Bzk4HTuhJrXxXoG8zyxmu9iFyi4Hr4",
  "key2": "5mdcJSNsCSUexmMNuzRfAVJnww6D8Lc8TC66yd5oMAt3CE28BqUfrU9pcjwEDMQE3X41XacjQh2w8z77uEbgg8Bi",
  "key3": "5AMbYMBhv43L2kabx8hJM9N3QvYkTCFzy5ak95sx99xtkJVWaq1UfGB1Z4ueZUuzt6mhqWrjdHFf4q3zn7BV9Qww",
  "key4": "63ZoqEzPAQwuAb5pFR4eCvDGJbpSGn5yCnNqVYfAPWLBqeL6aoRLZGJEe8fqiqYn25FJyDLtkhXaeQhivabAMjDM",
  "key5": "4qKGbqauhw96mkjm7XecfznLtRGY88H4GMiJyrLK7kHnU8rFzkvVaagMiW7BMaTCRLs3jX5ffbyEXdHTrtpY4csm",
  "key6": "625gZxfpJ3EYwkhV6vuEj7mhGCmwkA1sFbJdPgqJTuRvKy5XKNC4dmKSm3dH4acN2bjjZ9uGXBBi97bqXwY4ycgS",
  "key7": "21CNsRXnJwF3hhutVHx3p62mVWx5jB49g1nEEV225LdNX4FEMyvM7zM7Mkv2bk9ztYLvGJP7ewGVnCegQszddPjR",
  "key8": "32HX43NGGZVbuGi8Y7wXSePPhHwMvr3k2huNfPEmConKuRU4hvwXQ7n4dey9NFrfYRuvYPrYLP9K3fShyU1rfXAq",
  "key9": "3gwhoozV2WJcdkxTdnyuLEP2H9SMjuc1UaGtDbnvXmdg7VZN1q735JabLRKq7zi6iWT8BAfdPZyz3hUSYsjpU2ts",
  "key10": "4JzgtzG2GDKLoqk2BEXwV2wdvj9HzxsvP13r2dQxfLY5KxkHuiY9purh8TPB8nADhCtEoM6tWgE4kZJpBhajYskk",
  "key11": "4LwTLPUhr2pGp1Jv25aWjkiFsjrwZfmdzYrUVAasqsWE79uywbycXiWifFvf15fY54gq7oLbpkAfACdYEd74dq5f",
  "key12": "TugubAZbeG2MjgSVTPdYovN2UBZ6ecemjoRo3VstP7VVj7nVhfeGA3sFoJx4dyjcZw9Z83a86musEauLuWMh4gU",
  "key13": "5ASs5zfCexz6xatZzqc6cYz6dqSZSKisFhq6qJNKMy8CSt2k1WMCAoSFLvCVZjgj6XozVBrUdFZPELSfprmZmUF2",
  "key14": "3Tpxge8UiuWpbLXRVeBBgQSo1joeae5FkyjSEccjNWYXpRmhMACYVKnYn8UoUHD44piJ4NeYijpCpP7U2F3KbrDq",
  "key15": "5pmu9o3HurskMdvTewc6Up1SMP6BCPAUqkQa8DeBfVosfXr1NQZzHMVBTdiFTWUKQaJUMrNdZV5dDtxLZgfNYY9F",
  "key16": "4KixNjnVA53heDdhJ6D2pP9jvFZvPhXBuit2aA7vVrC2hTkBQkDkdArQKKRnciV7M62Ytv6yXvgRoN4HQfSTqTcq",
  "key17": "5RuzNpQpV8w2EJTYYMF85jsKQ3bWQPmUSwEjnw15EFrT4cSBRnqW5FGKTvMjaSDCVhytPtjbe65exLpdKad8cvuC",
  "key18": "WTAPnpU3X3jBceA2emCayL59rpgwKMEJrWcGFgCzRmJceRZjHm7uvmjAjdW4ixmDMAbnn4jVutatsuJYA4GwZt7",
  "key19": "2vvShAZvRuDE3nux14BN74RwpfruoT7Q1kHkwdfZuRJWGze87nNYUB3qJaGodDZca8ixfP7YziGzXUFE9ejHMixo",
  "key20": "hCVApFpzhAop8nVTRCWhi4dP2pBV1mARgMw2xgJDhwsCFVBzNuS9CcWqgeBbREm34Ge3Q7tYHuuuBtmhFzVasY1",
  "key21": "5eQ6UHqTqGVtzfwZNNjXhnAAyhf3P4v66MPBxKA5pg1p9AdSaSLb4M22fYS39ANXYaR4eEswfvhxxGnJtEsvJQwU",
  "key22": "5jXpnt91q6Avbatir5VzGdFH1ewUGF6EthVCi9XBWNnAbtpdHGWyzxW7BbhCGAKr9bP4SD4u3ESAWB1SwdeP4uzQ",
  "key23": "XaRvxEbSiV9W3ZaJtbyj5ZANH7faM9quUNCMukqZCnL1SUGXNBzjsRtKXLH7pcrAqr7dTiETxYFBWCRrPYaz5Jg",
  "key24": "bFnUTy9QByWQfE2X5YExa8GCrck68QxkSvVSX6E7M2mTVApR8xRgN7DToNNEcF6HYpRWvhRXubrfRk5RUKWZPfb",
  "key25": "2sBkDh2Dw26fyEJ67RW8SpPrqWP4qWjKGFE4y2BFuaUNWETv5iVfLh61WK1ahUswt6HNfbWMz85C719Ww2s8Lfoc",
  "key26": "5z6nVfRnbPoZBYn3y6bpF85HwjXkcEzr8yyQez1fKVvNDT6P4hcowS4mLnuM7Em7th8668TeF6JUNjLMTkaAy9AT",
  "key27": "NMsAsg3oFLtA6QK8BfJ8aCJQa8bgc4ZRi7ggz9oD8cvQJX9wTy6SMv6BoRgDCK94NFQSBGQFs5xnPsk3gTmMmuJ"
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
