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
    "2ByHTrV6xhNQbyJBsQqm7YXAbpc5gkbcew1Wwp6KaMWsGxa88PYFZNxNJU799L8aZd5SDoqEnmKsPrLNi69Krm2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7v7KKCeenWT7pn3ZfspzFoBjHMm39vF5BMRvwRXP43TrM5SRpvoxxdWEjsBSaPE14PTR98dSrysMkGE1qLPyeD",
  "key1": "4mTCkxFpRn4z9xVKWyepuNG23GPsLRZ8TRb5bnu6qC4hiozXr32Mg6UwhzMWL9gXM1TYbVscBJqYYjFPeFmAaKsr",
  "key2": "3UaQsw2ad16HGkpGn3wBSwGN2vDz3hax4tJ3HRsauuR8aq9RzvJnuE2qjijGQw33cXpZR16nYaqP7MgtxCNb8s52",
  "key3": "36FyWZvziFDfeMXXAyBL4B3pQznP4wR3sLAJvAvLp2FYRnh4mnDzNE2SME72PT25wGYe77fMnNcxziZAq3dFuVWz",
  "key4": "4zZtd5FgcB1if9L3k3XWcKEw8AvnzCRtk9n7HTGGz2iAievmpCTTrzHR8QTpJoZG7EAFCPDKYPccyosWWG7MbiY7",
  "key5": "2EV9cdN7kYZAdEvKdgbc77CjAPn2fyZeZTw2HUThaDZGFMPBbpfeqLEJWLFx2wYTGhHqsogsJ3dETTY3q4mrcM3q",
  "key6": "67WEJSJWsdSTv1dHFaguoutKf1BYNKWR61ndkXknfPK99NPhyaFzQ54ytxTPzsu5GkqCKcjH3fhGZfSqPZwQWdaR",
  "key7": "2vPZfTyEwYHTb8vdZAojvcFgH1GNDRB1Ebgehg3LfPUmvxU4eXADHmiWEnrKEYKLwB7iTqJuNQS36AkiA2zHNzRv",
  "key8": "24xZk6K4jKc7uovxgZg6zo4ZGkG9cjzZxyytjTgukuJeqrb7oRHDBV25UhdPpu8LqAVLk4pgsmcotdSwXtDhwuSL",
  "key9": "5T699vfgnD6Gi3BwUnxQEnUqdAQgqxxdHjEncZiEvqvSKvLEbNNYYWVavx3Vk8LGeVW8BLFsdgtLUwCLYBFiRVCL",
  "key10": "34bbrB9V6LDSo7sqKSwNTgefeXYARHcvt387yDbBryDF8ryviqHmqc7yRvfPWuJTd2YwaHrcqH4Wm9f6iQ9MtsCW",
  "key11": "4fwjUcVum9ZYExzPaLTk1kntSmm8wTSndYd5z6sMjuRnoLCXrro2hbwBc3jSrzTXX6yCSTfuNnm2EmEkguhtxXGu",
  "key12": "5cNgsvqshdAGE1Xs5qFemK17MQiWZj623bRbgYGNqddCooqugcpHW4S3mRxxKCKz5XKpXX1cB4uy864aazGDEtNL",
  "key13": "5v6uGjutJ8d6n3x3Q2LsZCxHaQ8b4BshQyWLwqXmiP8wd1PsjY5gfGPEd6NDaoDZqVYead15ExneghEePJTZKDAX",
  "key14": "23R4oNZS5pBhse2viaNYPDCogMfVe6gv1CnmbDfh9hGrnDqdRB6k7GkV3hGpUTCKd1DJvB2z8XDdJY7rEAU93viN",
  "key15": "2SbT5EEhiKuiasPKgMvDMm412h4sKoPHNjWvMxkKCYLvPAW6AHNCs4fwHXXdx9uGyRe46wePxvxuEU97FnGZufum",
  "key16": "5pGk9mM1TCtXxSpnoLTJUvDT7AtgZnL1Z5XpWx5aLae374b3dSA78aU7vXeZptAPnjuVFitZJNW6GJUdjLzQdfXD",
  "key17": "4Mk6WiqcgrybDatWuvSJSk3wbiD9MYpP4EStttXbVD2RZ5BTU1duScZtkkcpwU6TgdQEtRZKjZqar9T4ZxRbM7oz",
  "key18": "2kEtJPkebY7bhpAfmHF3fGo6JRwUuTooEEkT8Uq3gpaKfvqzuBCcpDmd1B8RvnhG6H5hg7W9PKkMU8NjCrGvnE14",
  "key19": "5oNBf8RckcoWp6Eq9mhYjDRxK5L1awjgsZkL8doubKGPM2ht63eByJ3t469H3q3o6iMCoeLjoExCAdvGGj2QCCAB",
  "key20": "fMRrQ6rXK2NRGPWA9srPPaTkw2Lxz6DDojtucLN2MY5mVdEYPL5KJo6R6CMKNZfYjSQ62AgbwuXdMBEo3KGm9sw",
  "key21": "2v7PxPosYyyrdVYVMpgkk5xhsoRJie9Ycbqdb8hUxdoAXeVLf3u5UXPPTs1qNpvZpTZFWrt9fS5sAdLbVsydi5xg",
  "key22": "AbRnJUK7QtLCbrVFYrirfDURAc4L5E8MfiMC9EiAodbZuv4qxYas9uhwuM9AieiyociU5K5wvFDntzjbyztHroD",
  "key23": "2VuoEfyJYt9z3b9PGVg3RTq7yqQoAUNdFVETLKXVs4uYTGbAju8v5tXhUpGN4z9q1FrzTDNhkE8iYUrzBqD2vB6s",
  "key24": "3Ar7Vm3rT6aj27USUtkEpQPVk6qVtBsFcCGWQq5fjguxXKruuwyrkcduDLgxHXK13WocRkyXpMSejqh9o46mRS3C",
  "key25": "4jpQfu9Vq8mEHqnasxemDEGRtKvhs7fkSnsquVb9BH5wpJNGDTY56KFSw7eukpio4DYvo6hk9u8ooS5byCyE5a38",
  "key26": "4FUFiAE1qEoBrfnAq2samR4ScU1d6whJ6q8ZGWZXqYBhc3YWJq3s4F967HXajjspUMtB4ZUsZZpAFrhM5VRzBRD3"
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
