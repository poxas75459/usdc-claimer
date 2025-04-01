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
    "2uu7o6L5sSmV32e5TgZKrWNdr5oW1tWCNWcbpQGdfjxXL2p3K4Hkhrt5Kc8brAp6fvwCJHnc4C41NN1gi2bybQBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52GqLdWSYtxxnpHiXmQshVvhLhEykTTMRTXBEnqoDAhbfDkisAWct1A17YDVAHSAyZENUoVwTbLeqJxEooDxQWeA",
  "key1": "4bjyKt5zx3fwe45hoi715kWneJbY2sKSrc9ypZjyQYKxkQMxnK5XNkGuuaZBk6C5fPfGgu6XDn7Y6XvLv15aiEjK",
  "key2": "2grqBcyy87ZwTaqfVL4JtZKhVgRDZpRDXzyFZTX6J5v3RfNCv3CEhWBQ1mH72phE3c8d1Bodmf1KWE7MxCi5wGj7",
  "key3": "5mKmjhkusPDd63oiM6p6z6dFkp8PwKqh8JJ5LHzftZgQrRLqmNssgroNPcSKxhhV6o4emipqradu4dEpUAJMPmnn",
  "key4": "4dns8ABs8kk8jep8vC13zHHZzYZr1MoZQWjE47DQKWKu5GaFP5HyTARiCpP1YBqpjkUeYtW6bynabP2veVc9EK8j",
  "key5": "3dsaBfmhXHhN6DYmYuPaPg5fxWhB7coE3uDWDu4WwwEzh3ECwUDxum7k2BdG8ASEMA1U1REhb7XXpPWVhwR9k9Z5",
  "key6": "3ikVB6uYqNXPpp1NPjZAFSaMNh9f3esg37xthvbqudEkyyTj8f1E1XuxFMpPrznxqqu4f8Rgv3CmyRTtEeoRns9D",
  "key7": "4LqLrf4UM6suLAmNxr1cxfR6XiJCnHcJq4zTMjVw2AEY7FhSSTy7ebALWMPvg4gvhPPdHUSqCek9EzyVBNigV7Vt",
  "key8": "3aub85uzVXYPdnEwg5CKVQDZhsnjgexYh2X3y4js6s1EvKU42JMVmvx8wXbhs3dUAUx32jJEvYjrrEUiWD85jKks",
  "key9": "3P37LVzLSN4TjjZPw4XVMkh91Jp4aA7Lncx6igKPzeA1ite8RfKeAJ3itMPgKudPJ4ieLbMZJpD1F2py7roJXhQq",
  "key10": "38nstahDGGv4eQSxUnSUQg5ecE1UiaUUcti4P6f9BFzu7kL7XpGckG3jtoi5nXz94ULFNsdtxpd2xWaHx2iJKjaC",
  "key11": "2tVygqZZXrDaM9xSa7vYJdWJKucRfv7edu6J4SLU3z7bVDhmGxcB3ZkJe3RYHqb4UMkHh8LKCz2NnYiZSu6gDFLD",
  "key12": "4vnMdLdf4vfTfXZ313ASEB2KXE9mo9YznMJRJNs65VC2iNwvfj1sLQ7qQ17m2ZMdGiPVWtnAnGgvxjTRZDqMTKrG",
  "key13": "4Xwmg1WdxCfeNz5zRZ2STefW7vC6wCbT88NBQfnr8L4mwmerRbFWopFAxeqM4993yDaghSni7TdLWvZBp4ajALck",
  "key14": "3G1SXek4E6AsV3qRrct9uUrFFPZrgBXSbHZMBfmKV9ii9twYP1MFJY41UkRwmziLcFxyzKCLX4fojwAAGS5Tvw8S",
  "key15": "5QreHd8nETw6iQgs4jjbym2Hgwjqke8EaaCybyeTcVP8tyv28PSD9QZKPEYYPAajPh3cBmpvT6RoLwwqPJm3nxea",
  "key16": "5HBZJjZq2VbtzzQLPVqXtxq1e1wp7vRhP5szbibLjRi4QqUAVn5NUr5me7iJwY8Jqzpa5TDDdJwf1TjgdjE3oAgj",
  "key17": "2TFJWVoG3k1PhZtpSqcE1672eJrosADHr5roJr9RENmuKbcZw3whBdgNyZS2e7wU5mR2NpejdWyJSvX7ofCt5kEX",
  "key18": "4zFguy1AyZK87di3E5cz9uYfcr3JhEWCt2gW8UqFgK9bKzzia7pUb4QxfoiWLm28i9g6pbwP9UinMaeHimrCV93q",
  "key19": "49fgWmD7cFMytXhn9f5c2cYwX1M6gEKUL19YgGSsdAtJixmiCJBSepdBfMeJChc6Y9PkCG8qm6bRYYGiSVnKp9ja",
  "key20": "5X58fSS2JNjj5h1iTfMgTcCF66ANvH6QTeZjmwdSzQCAh332SWwNNJtUKvFfSNtjv17tajPRHr861q38RZkT4Ug5",
  "key21": "2QW36AjJGDnKQmJ6fSC71HNRTHL6aqb6TNGqmyvG29zLd6KYM3sbv3DfNJQwcDKivRzQTW5Xwsxgy9UZT6kaJCTZ",
  "key22": "59gJjd94J7Rpmd8NzHAjNoKjZSAszBmyT5EwTJJcQ2JTGsFmm743wBjaHYpNfF6FgQJG9NZakyPBQu7nqJL7ecgy",
  "key23": "gpCVjdCfCpmY1zuYyGdJM7onPULgPKA69rtXas934aTiuuFX6Uf5aJckwJW5ArUj1CZkkZ7igMNwQeVGa9ALRtH",
  "key24": "ZiMhNfM87dX2kuxBXeGt6AsgBYYjsdjvm7CQ6a5yMUSY2H5CuPAEUSZbS83rZC1qspnw8JpMrjNXBAUb8xW16Kf"
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
