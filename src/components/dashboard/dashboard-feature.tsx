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
    "2zEtbyrWbj7MKqxRy6tgagNoeF1MHsWKUqH7yqDM4TXrW1Pe8xVvsVsGN9ULa1yyHfJe6iwgxfv3pmzBnRjRRTon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KKHRH6v4JG41tYTL5QGcXTpuySUUqn9DHkCiLqzyBJh7adRjCEA2vc27fAEz5SyMVRz6sQYk9RVjvdYKxwc5mxG",
  "key1": "37Nbp89M9QnCX1dMxeE1o2M7H5SbtXW6jgZ3QY13KaizSVPvvf4BJPbcFjNAfeqM8RxCYS5iPaQKwDEp65tcUU4s",
  "key2": "FmyTYdfE9Qh1LP4zRgftveRdJiVsvpRU3dM2EddnquKzytB8EWD77VrARMtNikGLVAdgAQAvPnL1LwxGroBiVH1",
  "key3": "4c7svBtGbdyceKgKoPnNzDpXAyuGr7GXHzKqMPApQKgbyhzMmTdcN3Yzqtye6QaZvaXoSQRp39Tn1tSYKDpux14m",
  "key4": "2yrUSQAgk6u781JEWRrDZg4jzoLyUeetPfxdTCpyXK74NhTuELeBK8GxiMBMH51BxUHTgNszk5ieqAt81RUTHjPj",
  "key5": "2qQChrxr8M6zvGcce2CmGkyY8KqaT3viUpVx7TdKHC5vTTzsizHddBSWa6FX8shsMTNAzqTDHn3ypjW1zHyYnxam",
  "key6": "j1UouTpSVPiQMwaxPkgBP1chLQe5Mv6aqYgXa5TZKDcSLR2h1ixAPH1hbYCfUnqDNrqfZtBn9R8yLNcvPHfQJDt",
  "key7": "4xs3ajBz65ock6mCXnFCXW6ZjDYcqZHo6XdukvdLtHMjB1FSSduWGbeCzMpELJTzMCdtekAGSXUyGMypFYNaqEF2",
  "key8": "3osXffQRaFyHfnM2PgrwygFTqL2AbFmULsaBx1bmRVEKEBLiE6zJA9HHiSjJqf1qwfkX2QW34vFsjWHjGgQA8TRV",
  "key9": "2DN6RMf3HVsBkpcy4gytRKP7sAcU2zKTBzPHrSDJYaTitEpNRhFjqyBi7ZozVYosDhrLYG2YpQJK4UCqCNFMEACk",
  "key10": "sKTb4EMFzeEKXttSBCDrQBEZY4CQWRQSu4x9NMmXYqCspv8nst9xfWZEetBLtsosHNDAjBjSK9GtAnHNDDzpK3p",
  "key11": "364ZBsyf2xv1weM7PDo19d1wWUuxynKmydVowHPGjuszhYXkesZHtm6qKMZQbQ9bNeuDghWwd9YxWBPQTDCRC1dJ",
  "key12": "5j1jJjZczN9hadtAqZGjoQsV4XeHWS4kiWhS9zTtT45eTyWDZUeLT1cLxghjFFYT8v2K6Xh6mrwusrbLmEk9uRgy",
  "key13": "3PyKBf1dzsPiLoSJ4enxeYTSXPxDNzWKdUTJCQLLYBK1HfegCpv8oqY5iHUrFuWSmdf2gRTQrQuqrNwTgz3DZk8R",
  "key14": "5Z2JnsXpoFFkfGvgyudEnQj7sR5wmEbKmLDZYi8yobbpgsSr4eKB5Rrj9Vvu5F1abfBSwUztoZ1jtUtMB83snyVu",
  "key15": "3vbvP4sFpcANyU4kcR1rh9aEpFEhSWVfpU9aFrBkrdrsWf2vpSZPauti77vAK3F6wFxaKTci6FpGUjwCxGgQjUw6",
  "key16": "32AuwgmT2vumZ9XiosyxkqmSkjR6kcxEHopXcEhdTNUJtgQMwDxdNGt2DmELzJdeHuKe2iQqAvMQSM2WQcRyLkpP",
  "key17": "3pbiQ1RyC2ykQLqUbmaxAsaEJ4PkwsBj2hmq8HqpLn2kPoc6U8uEqXUZKsmTdUBvjx6QLcYeoPXvbwZm5UaQ7SFK",
  "key18": "7iYqZPPA8pry3aeLVd3bDqk8mYVDNGHdBUw3vuU87cHwXEYugNtGUqASZKTZ5xWVY32tcvDiFgsrfNmvSjQwiEf",
  "key19": "4g3EUf3nbmE37ayLGxNdjEHS5TkWtEFVuqVkvXcoQHcQm1ke4U4FsKrvxH42CN4xCqtyMy1V4QQQwUrWWZp3WiiM",
  "key20": "25aaFrbLT8WGB8AQ2EVZ5TUgfxv4WEnLjnhs1t3tNuwZYusABFKka5gcDZqHCQowRNq1URKdbYYfJkAndYdDkbvv",
  "key21": "9mCspyZKJwKrJN4jXB2Z4hugbgoKTc818nf1SBoB8HBy4ccMENsVkJiEW3wP4PYrXWdaF9dqLNW99NcpXYMNFeW",
  "key22": "31G2TdM6nM5woTSfowRUSYMHAkaWkTfh8D8RBdcR9Mk9PJYweF78m58vPyo7SxTvJ8pKmcjxNGEeaJ9wAZqeKgen",
  "key23": "27Thwwvj5ud5EawnZaM2vARw3VQqmddQZKap35LLZQZqNFNrGFr7wX8kb5MqW1oCF8c4GYe6fd4Y89KUjKDxoFdy",
  "key24": "4G5NSAJUoC4nonTHR4VbrdrvdoMZXK581dLFuJuEg2RHUYNTKJrX87YRwzvm5mEV2hHwzJRmZewugDA2SGLByUMx",
  "key25": "4jKtucdX4EvEvqSgz8tTDztrp45xCCEPqhkRYqMvwcmMJg9Hpz61zsUxo9Q3t38SeGKPtFvowfGAGzPBonRrpjdU"
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
