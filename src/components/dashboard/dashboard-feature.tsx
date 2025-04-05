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
    "4YieHxTVg97vgvKDiyMK56JNKFQe2eLRamT7hdkwVDR5z8EW4eyhSTZte5xgW8QpwdVamVusaLEU5ehMJ8op8Wuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JpK3d1PX6JPKnEtNJyZSXi2gpoWm3TEWyevxqGBmAoataPxQ6aHFBrTembT86t7wTKMuvmba8YXRqCfcjuxFqC",
  "key1": "7KS6M5AaDmt6C5CDW3uY7kAoNh3cNG26tNUfv1MQrDxBU23jcqxMoxqtYK1bdiXrEkHLkCjaSiFmsVMND6nsUL3",
  "key2": "2f6qfBJZQFbCroZM2y48J2RcsYrRTwb3VDYRP21edpYsgx5R8y24YSaAYsnFAxdS2MqStKbZ6ztfPw2keMcLewtk",
  "key3": "2C1rwicTA54Z4Eb6hCs6pipD4fU79tFwxPEBDW3JUMorXruqc3VNfrf4cZiFNguMzkcMu3WW5nzdYSSX7PAXBk2g",
  "key4": "fQ8qDm4W5b3ECxfGw1Fz5x3B7UiyT7wKsginVaPZc3ShpHPVe198pxwsSQeoYU2i8socwHD2jcyQA8wyJqMyYXB",
  "key5": "3ptY4YpQnhZCHnpm6Lsp514Pvuari9iDQirtjYWkgHj5r7jGk4zCUH2S7Xdb6Bm1WFg9edj7AedBQxQ5txS43qkY",
  "key6": "5vJz8CQJ1YwE6ywAysK8dShciLZ166HWwc1eTsCsiGHg38bLKs6DyweZZVktuMvPTpXaw7fruSsvPziP6W5LEkEP",
  "key7": "3BD912tebGECv4TUKPGU5qfbz1JGJAsC4GM6Vxjrr2GNpEt6J8B9n3eLvWWfJryzZmymMDnpb4HCrYwB4c1vZM91",
  "key8": "4NhpVW2f9DY6TA545RyENhZ2d8FD4ACNQZiM3atFYuNX2Lh9FyNiB4wDjoRx7sbfunZ2kjo898PNhbto3xR45uRM",
  "key9": "2hdxna4jCsHsMKjgsjtuQBgQZaXfsuTEP5f5Xq4BmpDQiz26Cj77U3fCEmUJoSymcCA7feXhC6tgHNBRvJcLTeP9",
  "key10": "5nfXafmCF5DcdkL9GZcbEr212xbYtLSEDWx5Wixv8FT5Eo5CWphZniZiUmY5BAo9TmaA17AfchfctkXXpFbriWus",
  "key11": "5MUc1UpHdK8RLHtsXMuMWsedCeekipLM9ogJWt1Bgys3bQLcJ2BovwxVjD7UWnuks3mQE7daKJfxuR7r6tKBDq5K",
  "key12": "2mCBEPxAgrVTjYpCX1BfrXZZyo5U22DgdBHNLxoe5waK5a2HPNqkAtbxo1L6x6xe1a47NiCAfBHkN1NY23iANRnd",
  "key13": "66W3BGRETKzYqCwquK9CCioxcTxEn1CpQ4628xxMRPH9s6FA7VTVLvqdLC1F9jzfgj9oq7Xtp5fKpUAUwR8rSuVs",
  "key14": "37HHmoUFR4ntqQC6CioNCyvhg4uMNMc8HjJQw89fQK7ibvaEYDduGuaMJr9TitNS3ZoG4bpvNuPUag1nZGGn1xUx",
  "key15": "2v8rqsPWEK4ESkToeYqDoeiFZrJ652fGEzfYB5dnERcSRtAUGq6LgptewppA9yrDN8xG2JCSiUm6mNyERmmQgaUN",
  "key16": "S3qNi4Uu5ZVKPpmrEXnWX3zzHifoRJHjUp79sSCy2ZigVRUg3jS92tnWBz4z3HtvxMTn6qfH13m8J99mowvJeQQ",
  "key17": "3EVmjThDFYWLS8Q9nVrpdNddyrWFgpSR9TJJEYDM3W6y8triC5KVwoj9enY5e5GXMgzond63uAfocgfbgVo4bXe2",
  "key18": "5YDrKCxQoDn8TdQgR5oqTYqQb39WVTZgpj55CnBbCiNzenrBVrUEhkUAo1rsRceZ7wx2RfbnKwETA6dDLc3DL1QQ",
  "key19": "2jfaQTA77WrDuqLiJzrT3LP2NkZnFvf4TKsP38vkPv3tV6sCPc6okRvjakH8gxh6GVjYnrPKdWy5YQN6Mr1xJe2v",
  "key20": "5rURYQSbYhYU2Ma6BozbE34ZJaMkc7TzCVLWyp7upeNxoGBAYbJuuyUubX58gBTz5spCy2EKns5yPyzGxmfMsVDU",
  "key21": "d5X7z3JxKxEEPvnp8ajJtF6C7oGcffmVaCNm9Bw54jNCjVd77FanCKrrKHx8aCfsTwdeJ6NLdPrrvNLrKCGjsvH",
  "key22": "4vhW4w6tRLQMVqULUVHNfuEHkTDHyEL6eNpZrcNjZZmL15DsmaQKdT2S1L8kNCykraBs6oipTxMJxdeWRxB3gUTS",
  "key23": "4APmjbjkDAmfrHuZtKDXBq3QkZ44mdHhNyXwVkRq7vSP9uJAFH6vsQdZM9FYz6SQ6wUL7Bduug1nzFXyQtCGuSxn",
  "key24": "2RpC1qUtWVANfGmStmyisfXYjGLDd431v3LWxhVp5mJ5RTJ9xaHbZmXHA6Rw18YLwJwTqfkih2WfaTuFLMfW9YHv",
  "key25": "TdHXwa3zWAwLKXNJutec3sUYjsjW6yj43JCffgr8aBWKLh1LzoGCVoVXJxkeHTiV58cF5bTEiUKcvUHExVzmUdr",
  "key26": "gesBusnReJviBw5syTAirLV8VyaMcaSvjDdksEmRFaDU7pyNAtHrkGjELreTtLa9itwcABEXSMsgs8SAzCy8217"
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
