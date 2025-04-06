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
    "5MiZ3yayApa1NCXVRHPMSn4Znsx2jc9gNK2J3rBGwHLPDBdA919LsvuVzBBK56iBHsHXCxzo1iXGgrzd6MMbcSBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMMgN1NsgT2u7L1H1tbWycNB75DkhMkwTM6HYurP6D93NbgbX4VNG8pQ2Jh1vT2VWxe44wNaf7ccNpeYUhVLFxb",
  "key1": "2eEAi4JGdfJFf3MsjjuUBBXSHh47b6ocTjivGaEHtirEdMzXVCwmasi8WontmPbpSF6sSmJtrjxydD5muceuSzc9",
  "key2": "4FKXvfXCoBLDcfxTnmycnznKXBRKh2zDPfpeJ3FAm528xpGE5pz6C1HZGzzBAyN2edHDN1f91VXTgPqTeS8DpdHr",
  "key3": "2F7WEN15cGigucXYQ84sr6TVvC3ccCtKMAJbD2LriLm3xR1ZjsU11UJsk1eEGtGhw3nys9to5m7mKaRam4VUJ2cP",
  "key4": "4t2MAZJB75ABwKk7k9wcRrAWjjXfA8tnKBumk9jPmz1vAFoqFet18uK9bLzuRySUVRaYqLWf17CvD3K7JJrq6E2o",
  "key5": "5yL7pPpwZACnRHXkXtBJ4MDirgHmTsmQYc8k7ue76tvejUePFVH36imXXFGRXa6T5e5eaXAiKWL6Zvc5ukXSYiX9",
  "key6": "2gPY5zNh9HgB6maZTHaVan5R34dujpdRyirjAZG1TDbk5TvG1MomChu4XcyJgzSQvTjgerd8nSs7Z2hfVQXqnneg",
  "key7": "5CRjRpDydqiZBo5uZGUD8QXcbkCokEVwjtW6oXN49y9kxpu7pZLZ1FPjy4cnpdzKFAFd6yGhNxgCujfSpSRTUVfW",
  "key8": "4L5HpCkQBW6d26F9NA11Paxcpk8bBruA5q7jdqJjDEoYCMd6Xj4rVYGs9yq8oiFXoBWKDaFdhHj6QceCwqg9ryaw",
  "key9": "YoUExmrHyFYozcXyez2Eaxht48ArhSaaJwifpQiEhjUcU1ZRN2eSK4uV1ioBR1EHyNyzwtht9Hma19NMMUbTji5",
  "key10": "xoKigsKYsESufxb5ZbPtk4gyav5obMM1JBrZetSBNtbzynaTpBYd8Vzc5S4cAyA6U4sYTta6jh5vyk8DX22TESN",
  "key11": "2dgstmvdTGfy15Vf6M29qXfVsS3L8bK1rt7KZ64nfq4ew53JefYdP4W2hMxG6XvFdwvr4E4w9nMoyY76VVL91BYi",
  "key12": "3Zr1q3ZfcrZBHLsiipP17wqb3ExY9m7jCKKqHCfibwRe1Uprsxg4NGQg9QCZpLtgA2PXeHKBeMpTLoiWqCQa86B2",
  "key13": "4uSU7canDUyWmkx1NGv6S4MwfKCuXFZ3gkoupRvHy74vxbdGK3oii1yNWJkHgnxDB6fG8vhpa3p69kDspzrskKfn",
  "key14": "4NZVDMohZ8qULCybQCvETXxbuBj3ZZc1FJk8d2kcBacveh6F453D7peJHf3CLwP7uuNZUZhV5ksYdUE8QDpcjrMy",
  "key15": "46vVe5ioYjcEEMAML4bTN8H7URucjgEGGdLhtiKqB4i3oaA5kz2NjPa1aTf9SJMwSHKv9Uk1iQH1hSoFWF6YcKL2",
  "key16": "NEWK5sbghxsV94A2qbRRNNUDLYGe2x6tbC4zDexDipAccedzSATd9pD6FNUHgvapYymrn9oSB1APQXZbRVmPkTq",
  "key17": "4g44KWh2iUzgmpEmzdP94LTPTtRCJjEYLcLW4veGJCZ5TSe66ThE9y4pkpNzudHuvFboXMYk2weL5Lwpd7iF7pQn",
  "key18": "cwmEy3F6QcRuMCdcyG5NqQZrW5iWVdXWowrrbkovJvzScjYeadBvHsJ25XQP2FBGZxcY6h4Fx3hCdhmUTdcfaXT",
  "key19": "5cUrBhTfwEKhHCj2LZuLZmihSLRqzDXT2WjvSW6udtgf3K5NzkM6hfXCButVcyZKRwmHMiSyi7qHk3bpkAhG77Pz",
  "key20": "5nsUXiZYmwbCPf5gQc5e4tjAJ4yMF9FGwx8t6tY4cw1U5afZykrLCXGyhrPJ9EHaeo5CtxRN3HMEonLtY5xuNTjf",
  "key21": "5Yk2X4bNkzgN1TUGzdNjN65DRgPgrNdWpc5n1o56MjhiRKnEANjnAXCGZ8PzLYGWZzWzpxngYn2mipzYTfA91tES",
  "key22": "5aJfP5yxmbn2PCNeuk9DyR5c5qHE3UHtTi2LzS7iAy534ppm2jg2x5qQsdWoc4TcLnChFFa24aNXANt6zJP775GY",
  "key23": "7matmQgB5875SCTUkVqx4LT72gwGPuY6nWmRyozWB3bGJpJu6CQR7Bh8pmdVSXrtyqF9b6bSMt6jQ8AvgsUa3Gd",
  "key24": "HRJFPk6Xk5NqNvm5aFLRsgw52unv3oGsajfag1LVRFp8U2z8TM519BAoxjbcjFTQs3npYUzfpcbuFiHoAWUM5uy",
  "key25": "4ef8uL8cmmuzonWZW6zJp8gUECNBKFqxTHF1EbbeiNG3q46cg6thuggCj1pEf51P21gug4xfqnR1iC1CpYzDxL5F"
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
