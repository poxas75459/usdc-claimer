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
    "4c6Mx38vETz9KJ4uHvZDsczp9HwWSzD4tzS7W9DiJXpg5JxEZs5MYL5aeP1UTfBYVq1LTgK3XTHMJZNvzVA8bFCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9pXwTzrR7p1k5LpYP5mMp8BpJeSVjw2ixY9AETYF1SnL89LnDdG6Rhr9QkAFWStGovoJhzig7eutTLoBcyyCxZ",
  "key1": "2QRFbk1d7ArtgoDi6jkKdyyNVoXjhYVk2YZUC7HuHmH3xgWtZfVcJegYioa52RtVj9GL7rVNPLWs5UsJg3MG32tF",
  "key2": "7MfnZFk5zNPGLZ3tWQSvXfwgtdSU3EHDti1AvRtgj7JKu9wZMEX1URxj2rmpJqSbq2kwq4BvuwNbLm2EqQ7H183",
  "key3": "F6DbngU3CU8yMcdJar471qkNX84nQW2XXwiSLqaZFQaeMnHZri2e5xgqBR2ZX7jL6of187cdqnnSS4Eg57sMUbu",
  "key4": "5LJ1f9QLQijvnVkSP74wJ5vsh7CCtm4jnNgto4aXktfj3DQFaTNW6CguWHx4Zi2gF8uFQnQP2UiBs3Nhu41pfm7o",
  "key5": "UrEKRHXGrmfUMs4f2tey38fMsAgYDUGcBnVb73VrWvNT8FeHroM8BQixMR2a6365EciJamENBmAyMUdNj5uSWR3",
  "key6": "3Y1AnmDseoNcb5L5aLcXoaKWH78LvdUd624LGZW3ueGxukmcViMH6FEZ6GDTyWcDruUD79XyRZq3DYiqvixu62G5",
  "key7": "65NJa4A5sfP9QBjVcNGtfTeKAnDta92T14JXXfWzyCQAFvsZcakqjCNrEyagVrvaCbbYx2P8eLn2PMRa4T23BBbR",
  "key8": "2L1dhCr3Z2nBtBFCpfFMCDyt4NaMRQD99JcM7PwHaa86GJNQT2n9Yw43SGoe4uuyoFxTmrNBFpRAzwxFHzbsQHWP",
  "key9": "26YJo8sri55DRrAXzy39rsqoHXQNyX2HPHstthvFiqEP8XGQoqGp44TPs5AwcbA9X3ANb4vaxRL7MeKXAyq2mSQg",
  "key10": "589bKsy4jafDGhPFwQ28RYJWziEy3WT1V3UoncENX3obeXcHUThMuBjXx1pHe4vF77FCJ2gwEYMi85SEUXrv7qCn",
  "key11": "2PMJsN6sYJ9Tkh6TUY8jGJcUE6Xp9Jmn35qqvD8ja1dgkjU4fGRYhAzUffRMuz46bC2iuzxa9HnJML5ZKrv1RUKr",
  "key12": "45AdrsWs7J3zm7kS9yqcJbtRneMMBwsfViifYdLdgHkLZJvmDyYgF3cgdvKfq9Pqb1A8cg9KAUYmLv8TQeEtjRZh",
  "key13": "PjLbCJwYroW8EzUmkicpVnuCVPg9Umgvj6hPSmJm7CYiHK6DWhHQi7CSkQsLJ2VpxJtQdvPzwNuGzfEQmqqUc2u",
  "key14": "4s65z4JVeprrUF3vYsLYNi4sjVXzBUMUbqJgGNDB3NAHtF7FBrmm9DPtzr4PMEa6MFaoCFUSue2zTwNRZNc8SauF",
  "key15": "VAtg67b2byRxGjZe69Szd26ogSX1M7t5eKbDaM2edrsZd4C619c3idJtHMUYPn78M6Fp3WQ3ioMof29s5hVMapS",
  "key16": "3jsv3Bw2CDrMmiNP9jKkSqS4yQWqjhL2rEhZHuymxAVzru3QPhw16qcXJEJiMoa2RP8XnLdyzgeKMgz8aBAJNhhy",
  "key17": "3VSobmPd1LwZdiEcg28U21u9n2BCwhTAF8PbAyDLBKxcVXwStsF6Bd9rR5qfJkTptckRF8wQRswxrGrgi53Z1qrw",
  "key18": "58PB7mrLAt7Ks79ZKSpCxRDQdXbukocbkZ8i5sG8wxS5X6LMCoCmYyu8c3GL8GCQ7mPd1QKxnRSAD9jWHdUjtapQ",
  "key19": "ToxMNpraLmv1YsqRSj37JSTpuoARHyRKjgtnqgTxAqK54fYz1VJys2qor68yaDaHWSJn8wrVHmnegezEQg1jqBL",
  "key20": "3GCCuVgwnawnU2jAJ9VBoLSmifUHk8yjDa62Qu2XFvKvBeLQ3E7E1TkvVAPN83VujpGKr7dthvNvj5p9qgrPwvrj",
  "key21": "5AhLjdy6RqrMsPeuLtoCytJoS429obNfQFVuuZecEcCAMmUuyvsax542qArTK752JVU3CwVDnRmeRyYzDZSJB3nC",
  "key22": "44bzemPTeapEUXMxpPgXTmoCFku7v6L991ZuR85cFtMycDSKBZFhzBWeoH5ibUoLAHXwcMR5ZUzDzoNH5c23eRmj",
  "key23": "4HF25mSfVWUvQMTrduCwQBK3DZoqb4iDU6vFg9SbqHE2kbrMAg6QAM9jRcGAzqAKNXWTg5NW15m82oPtUYi3Br3M",
  "key24": "3nw9scd38JHLotSsTUpMuwDoeaVs83GG93xRQuYW9Db78fstomkbS18izsuZ5eEjm7YmTor6NFjNt8CXq7mHsMaB",
  "key25": "3PNV94uezDnRWSSeSmUTsZ7caPN7UZAJBk9BrFyma8Gb1dC6136NvwTMkC3iQDBoTaYsmTzvTArqFPuJDuafLPTG",
  "key26": "3eRPMa9KrjnRd2GmG6XtXquaEQqecrCpsdJr8wNLUPBHSkm5zarZneaHo8K4bEZ29jiUcbpU7S5U1vo9iiFa4P7e",
  "key27": "3T21wiLg99UNzw1TtQeageGNBgzN1SeGp92y6c8ku8iRfYvZxqbeGeLBGSGzzn4DT7puUoYkkbWT6eQiptLd9BEZ",
  "key28": "45bk7S4N7goN4TzaUPwJEFgcviSZ4dZX6prR9FYDzMHNUhBvMC5tkQH4qNdgFFeNamQpZyRVvYiemPtRbAiKBfUo"
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
