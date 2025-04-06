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
    "3dxzQAtZK65QKmbzzEXTCfQfoVUoajGiy4WrpLwB23kQHDU38WtaUPGhYdFyN8e3aPQwaopcun5QomnV67jeq97o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Avhm8JKnzv2T7dJcA3DinSCYSVLt5itYHTQFNXUNuXeYwkwVU6eap6ZTjKwMjLCJyZ9vuemXAjGbEPGXwXMfkJ",
  "key1": "8fAG7pzXo4F6SHTLvKw9e2d5WDfr5XCbwPbLLWh7Wd2oUJQWRdxodQQtckJXFbcp1iobqyrQQeHcc8tM614XvHS",
  "key2": "jBx9PHmhVUaAXwNcWu4HhR21eKaRQtmx49p5yNYQFMHWPfBZ6moRSSAkRUdVAyMLYZAZ8f2mAH7T8CR614n885U",
  "key3": "5LKUqKDQaiBFQXw6WStSJZQKd8LjZmwZJoFWCKxKnPX8S56geKNKF7w2ZqRd63wkLuDJ2YxkdWXjwrTbghJrCkv8",
  "key4": "37EZhkJeF6gv5knBGEujhgsT5djE2MHxXbsdx9NDKivodRYELeFaCWFKiryVrNDtYhMzp2CKDCHxstRmhNDsbXLA",
  "key5": "5g3ViqPxbvhhCKdDJyjhFCvERHQSaFba6LDAJMJbFytCTt4PJMWbCKtkkMDKj9gqZjC52h3hKMutJPLzmptLkhNx",
  "key6": "2V4Vm1F8eiHraGJXXtRbi6x9K5HSFvPqz7JT5wGKqU2C9UBRrWNTEJGBbr4hKLfv4N5STAVJkZhMkFZzBXkbsCEH",
  "key7": "5RJgstZCoRwAGfAvTQZwqty1MiW7pkoPY6vwez4G5dvi6JKpQrDForqg3Rz1DPCKjf5cFgCJtSMLKm7TXFFRFDUJ",
  "key8": "656gWS4PxzzDdnukf6EavDPxFaEwXJ4xpVj61abQPCLQLyVj72K4TqMvTQSFBDimdBfRszEJbeABZJMQhoUhps1Z",
  "key9": "4skCxwZZr14mZnZVXud8d9bfWichAtwPGQ6RHEXQtY3pNkx6ZXEbBmjo7FFiRgtrdGfUorhueW2b2tufQRfFwFfB",
  "key10": "4XTtoxNTBN6wFjGxkdxXh7BNwmi4EYTimX4kjpfbaXuYbtkHXwNcXTiNJPNzkz7jYb7ofiX4BPdNEVnRM93WhTQ",
  "key11": "5szXuzDvHFvQLE4CvPKcUbLDyjDNqYb8jYEufni1PogkrMXJwQcxStwDaovHTPG1d7oQMQmFBjmatKQzJvERochS",
  "key12": "5cB2b2nNSHPgaACyZkjfz1fXNrVxt9kbSSLEv3qmeWrRmtusC94GtxJk2zWFcjHwA9ARqHQLkEnE2rXPu1aEW9G6",
  "key13": "TnkcXseNWASM3Q3SKvzFsjSbf5tQQbktGD8iCRoqRMZfQYkuKvUdzNtfvmhAXvkAF6MfHsDYsYUoCdhdDoH7pyz",
  "key14": "3mJvDzxKj6Fd6En5NvDiWYF2buVZqDvbxtTpg8NdyeLN9Wdw1m1xXj86f1KJhYsf32SvyeJohb8B5HsD1LpT6BGd",
  "key15": "3y4ffEfhwJZpzrfJY5XfBWj7UsnKadgfZFGGVWNg8jL7DEnqT4SdDSY3uDDXKczwZTtpX1WuKrBFYeXbzM84owZj",
  "key16": "63Q6wubznuUFrPx4AerCyKcihAXYdMCMhRk75HX2LHDXjqby8ZQp7ELgeDUXsZiFKRdSEXb9vAZn1wD8ca5ZDG7x",
  "key17": "c1jhxb6LxW8GhuFhZPM1btXru2bAWxVJzmczeb1GB5LNvPnLt5xvJbQXSxhmbcLBhizFHug6vy4K86SJh7PPmKt",
  "key18": "5NLJMZ7rXDAPbKQnDKcwtjG6DoUdjTzJEYst4GJTQL2r5zCE4inVWAHEtmFXx1QHPHxGQi3NE7mAxMCtotkDnUJ2",
  "key19": "1ssdKCKegffFk5BVHTEzw8sx9voTUYfaU2tgb3HHC4fvM8juL1LWsgGMZdR68YaYmkNj1NBUSp6JcNgDGucnkra",
  "key20": "4ia5Rsgr14tkZGJroh1o3u6kTCfJ8xwFo8WQ1GcBbA74PpcwNkvtfn9VscFX17dsiGhkd4KpUtq4ap5yoBQ6QJKu",
  "key21": "25oZcgR4fW2mWeKppJqo4FSxzGdovMgG2g2u8FVARWbjhDWWxipq3Ua6dazC9psaMvEEZrfwehBddcdWqpekYJ4i",
  "key22": "n3M3gYWyURqMnZMk12A6RNh9iFdtfEGrWhpmq1ymXcCMK627g4doknopAQnLEFotEYRkh2bj7qbSYg4LsTUyWWd",
  "key23": "2k3UALzSYP2RJ5fFAuQ7xdjfp2a3gbUSG6g1WRChZcsswV4c6kDr3QVvCH2dSeJyVNLRAPEdiQ7sdC2FcHHd621g",
  "key24": "4PKd9voqKiminntsNBxoXAVZqBWNrtK3Dy3N7qoQEnXdCGtsiwqv9D4g7AwdmzmcGos7cBrGzoJrG2w9BDQerc1i",
  "key25": "3rC6utFKydbdpeMgb6a6MGpzcfTua9gPd93vNrZCnJrbRXdL73sFLvQKsBNNPceeqctv2REpbG2VEZGdNTnT5PPt",
  "key26": "3wdusxXx8uw5ss1Jq1FR84Ge6KuAUFds9Lc1ZZTdCWA4zcJmAa8y92ucb8d6nPstERu99KE7SwFBNaYtCBtqvVeP",
  "key27": "4cx7oUPqhEsqUfYvtdVCF9nUkLGZgDGLW1sRN9StUijbcrKEriHj4MmnMUe295aCvwAbvEhCjcacLQnzXgTx5cuf"
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
