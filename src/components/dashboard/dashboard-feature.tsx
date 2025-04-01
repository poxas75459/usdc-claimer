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
    "4BL57ykcLDrdGmU4FiZUVCS2tRwV7xwojV8LQR4uopC582PbqgyDJjf1xx4Udbgb5u8d38ENTHc73kFVpaGWMZqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euBQzJLqZbJ9vcAiZ7o9fb9igXNbPRuvdkB7HhSFodhqLzmYBNjYY7FXaEACttGH2YEN28Wv7eF2n4R91ErmjHW",
  "key1": "4uTFoFjdFVXhVHw6oNZYVKvQ12oa8Gho7C2qPHLksWWaCJmvPxJXw1S6P9tU3m75BX44p6N8p1oyfKHVEDjN5XXk",
  "key2": "5j4hwcGcVrVvzuJzjx9mNFUUARvZihX45tf9d9SqxDbV2616KJaqjA2D5jvFfv8Zuqv8F8jNwWgpeSgWAPsHBtRo",
  "key3": "Xn1CKRPNoTyMtcp91xuBUqv53WHYASokqHjMGRF7DJ3WyQRLU9uXbpKYX2t4315jk8LErUq9oC3hNF9hpa9nGhs",
  "key4": "4DaLeqzY5nw45nyJNFmBQ5YJ7Xypv4LGrAZAWYhZbr7UT6haFCy91YTibehBrbc3PU7jW4g93NexbuKedgzEsBWz",
  "key5": "HkKZPjxdPjpYNnLuCAD3529bgnwDCiqSxVZUEsh1NutGSd4kgXsqHyDNyY5CEf4LhF13FDjw6BjYX37GSZDdonZ",
  "key6": "4hCq6vw9AkEJyNk4yXEN1eT5nRsWBJZzGR5QkNowKBXWW9XoENZECNG8aPHLgJdRK4A8ALohJw4nWbwB3N3JeiVk",
  "key7": "EiP1dH1Hp7eaYiE9Tr9Y98zri9fZDWwMNa8dsP9ZGzmfNzGQW6p5zxvEdPZwkWFkT7XGGc2mCKKngmtTwxjkCkn",
  "key8": "4LXaMXr7W1HHUYeftGGPSwCjf26GCcb5Wi1gbhErffK4aMM2DXYngQXoHbpMCyFmvwRZkid68jnWKRc8Dwd3mnhc",
  "key9": "L3EycoyUJQB7XthstgNChFUiPveJUHDnwYRx5vaK3g3fjnuNvmGvU2WdQsBccqFkySQmKPEB9sQemuLneuwuCjv",
  "key10": "4iCuhLJCBp2S4dMZ41LMS174rHBqdxPA9vp6xWb2GbhSr4UHyn3d592bJjZ4N6JDtP49GyYfDJB35qiv3kzadqvV",
  "key11": "GdJkhiGMbFW6Bya3s49hEat1i1ZsbYpD3TgxiNMJy57m78SzEBjbqMrarAPEycoPVCsNWTon95kFnpt5s3gDptg",
  "key12": "2DtAXKKjAKJJt1VBhdFpovwBAxtk6rU7gPfLYpWwTNiusvLETn7MPPGLc8Cbm7SJyLiYiFKcqSVAAavEyGoVZVUM",
  "key13": "33tjTC2MdqrFVCvBfM7fvzmPJjRNjdEpmobQjg735hpKr7uddSz3jAnsuuin9gdThqHNoxY3xUakpTsv8ZvNQ9dT",
  "key14": "32Xrj3dmjGKpbaNtUTQctctqhzmL6jinUBcPQz84rhXFKjRBUpFu9D5NwNkVZNiDRRCKHLmVfUXLdRTyqvpT6Lvb",
  "key15": "4UGEg6JXbbDugaB3LpdiX7CrZa9MZkjBTcWxdgSh5hJN9tRvdVvxPtA7mf2GVtV1b9KGQydMK8M7mGDHb8wfYM3i",
  "key16": "5Uz68Krh5PX465Cvjwu3d8WWDPub9iqJ6urkkNW8GS6R4gcimAnMhJ2YxvXXLsmDNuLXYdPyKWhKGFRf4gyjBWNj",
  "key17": "2wUPgXXtmCSEQczDpgZFTkn9Q2a3q6NQggCTJCQ9jJeKVLLEbhJzjXnUGGkzc2Vt1yfwVnZqoio8cNLJEfTyrZUb",
  "key18": "AoksRWugjqAkGdA6woE7UxC7L7xs6bWg8FcDYF1kHC9YVMsgD834pFbtLTeqsJisA8qXVHu3SU9Pb7YYBp1AEUc",
  "key19": "c4Bmmcxs5hfU86Jttg3cYJkVVNaqmDKhy9dViHo8Pv81DxAjdzZPimYMgXEvTDK9xsJLCDi9umVSJqze4G8YACE",
  "key20": "126kzbjAeKJqpFVzZxauapszHL1UgYvacgH6VaNyDoGymHMW8zw28bfio6NVAEcHMRBrzMxSF3i5qhRWf4yCQba1",
  "key21": "4TzquWKoQBQSZWkMb1mHVUq9GWu3hr3WyKHTTfMA4J4u25iaUGfNyJwZF7PJoUkLhVHTbydHrKCWsR8y7BJVCiKV",
  "key22": "2cA4MdXYCdGRXTkPQjxUuZZTxkKTqH8eVrBP6m6gvtep1B2cd3ozD9zfg4S9uafEdJHG19swX6Pc8p3Lts576W3U",
  "key23": "2J2fJeQUxnJ4pPyed4QkHyDFNtbwnZUjBoaSqc4FawqNpc981yqwEmFvBiVJcLScPwsZZkS9Ef9y9YrAwz26EYru",
  "key24": "3wdPWZ1YEvvWoPHoi85QbDQvNfuVvHMqC6YvoyLXB9c5PtBesSQdGjwXBnqm1y9GUNHUEymPrUUDQkYqZDo5Q4hy",
  "key25": "5emDAXosFXv41Pxxb5FVqXNX2BbqoN4fTYKqdovswcrh87yT82BHWaQ8adWEo2ysbuhQ6LaGhjz1YiJP4g9MWfNZ",
  "key26": "3ysKngNgZfGRcXLqTqhoYDTEPLAhspwxpSFoPNX5HeK4EmvMWWsRsULBzvhKXfecu6B5urEp6uSZnaxkQLnYKm6B",
  "key27": "663ofwRNR2N7PU7qPygr67Vob74hN46nRu24x618bc3e4vYu5ecsh12rMvTgpoMjyx2TAnQbQyZbACRRj7At2ybf",
  "key28": "41pmjp6s4pGNyjBRBA3ovsmM4c8iNPw83DWGmqsXvpgNRGLThjWbEVCWUu2tTvqEfSqTPqz1q9Lr8PBC9Gg3hZmJ",
  "key29": "3VfKDhmcM4RNoQijRn7Cu7h8AGWvmShHyjKmg4c6BFXGLn9RFqy1GntAXubKZapzMTdrQqHFdeHpK7wDUG3SGW99",
  "key30": "ZfLEkKzrnoA7M4LoWVaECu1oKQ8JaB9mb22qHp5UsVj5f3WzqbpCx6DCa9sRhjEHKso14GN7mkhN2pLjwzR3Q2F"
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
