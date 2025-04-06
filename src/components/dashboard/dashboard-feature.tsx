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
    "48yv6bbErsY8p2GEbR7d1tbrSXcSZMdUhhJGYg7TVFFjBJLQ8FcAXXUm5xdHWNNDYUWGXqBp4aS9YGQsFZd7J36V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCE2kZ84c41eNbxhfaws9BQtENU859TDRHzidjhyoW797zSscUvkk6hTQ4HZUf1tqg5rFQMxeEYQ7wMMbsEd6Fr",
  "key1": "4T71VsxnsZ2h2HFGLyJkCX88CavJ19ZmnPPLjGj992rijH4VB12qSdZje96qhuHcfLEsA1NhkzUgTZceupefeub7",
  "key2": "4SQN49csawVY494wVt4aDKGkL6YSzusLfk7ACHcR3xKARnpzBtyDA4fpNn54vAsB3WCNTaiBs7zpLjurvQSacjvw",
  "key3": "2DmyNwfibLvEKyBwHKauG4y8NjUbtpS9kD87CTaRt1Bo4pb6mAHALUxvChzoDmmH5kgGQP8rxR9CSN2wsBATwyTa",
  "key4": "3kkAT6bKLucP3guARCbG2tTghgF78e4iPeB8tYAVvB1tNsX8pVDJ1WeLaqbd2yghmpA2dSgbboMcMkCPyynh3vuU",
  "key5": "9HiNJx7tc5FtNdmqoHSCA6XURpnTytTi3Eg2YnrCmArs7gWeFCxPhGjzuTHohT6APK7XNSfQSi8iQSZpGfj2n3o",
  "key6": "52jKic1DpBAg9tE1XwCZZ4RWeD4fMg44TnnEj4nwPVM8nuprQCqL5LUbnbSR8KiBy2wsCS2Hda5i3txL6YaHtFAB",
  "key7": "gJsuuCSqTNo13EPnTuXHZU9hBTHzZE7SSxXkELexMmG7mHcuwdyikpbBcnzU53WEYZ6hnHDYBJeosJthTDGsNib",
  "key8": "56hKdHR8rVyXHLCmrHr9RRSof2QKziWpY9wTzGgnYcmcgZHRfxmG4a4YHvBiivQUSmEgVK4WMeCeeP6sj68FRRt8",
  "key9": "527t8tDBsNJGtGCzrXQ5xsnyiG1K62wf9WgVy6cJov4Dq4kYxDLz3Wz6mMtFuyqNVNkoRt4AhNkueDL49NtARuot",
  "key10": "2vVJ1bFeXrGkDH6PEmhUpDCpnTRHkqBsrm7R6We1WoAsMUCdjuVgR9Xcu1TZdzQJySgxJw5iAuW9x3yWCBwwQvfE",
  "key11": "3TdW45cxG39Gcqr59Fj7ArUvs113R7DtC6pmP6Bxi8SLoncHX2dySSXUi9oEg4FZPTFpVMBb3MA1GtNpxc98UFDR",
  "key12": "5G5JgFKJterh8JqcEX3bsW6pCjqnvsQJh9c1R5nPYsYRvyQyHPDtwCcN7TFBto16E1qaTWZneZ1RDCtuoVxBsq5b",
  "key13": "56cDbjbUUX1XdsnTtitrma6Q2LqNd5wSyYBPGSpPuQLWRzcJqcPPAzMYqdH9MmvJTneoJQ2h1dFBAqsK8RDFerNZ",
  "key14": "572dt24PLDXGvTDCGSp5Cv2MXot2pWHTSx5t8pAGhNFGUPaVYvrsBMpNzQ74CLfwW5JyHDhwp2ZZdd6RVJuF644L",
  "key15": "44pGn4Tvj6p4Yo3zqdF7yA8SUbqDewSF3HkKY6EWBqgaSqZofgt2UbEBk7ysFtdaE5i36Ld2Hyhasw9Hp5jygYPh",
  "key16": "KoGjpr4VCqKuNkNrjBVeueVaExUEk3ukKXQX21TdEzULEV1SfUTrnK5vZZmXNQpe9pcrbcazUJMnDRLFHvynoPt",
  "key17": "2VB8ENwvs83J1JQbFyonw7PbdTAYhoRsaYRpYPCTsceQKhQSpRjdabALUqTbr1KxkRmBdzTB8xCmosQJ7H7oXXaK",
  "key18": "2SxonPRWZ7DtSkfttJZu1giz23RZyWCLo34GkrSo2eDcRbk5c36yxV9erYKwgHypWuk8VBZFaoZq2d7KDGCLtPKc",
  "key19": "3Mb5zxKfa117JK4pDhA5LWGuSjsztmz3bkGpakPzn7McX5hAsYmnsnauTyRWhdHmxsNCCSybXvjDLqtt3Z6xTaFi",
  "key20": "z9uCdSNU7Z3XPi3MkAtJgpmWgh3Uy9ecRhp5fZ7jq6M8mZRVS5XR2CWyfhTNZf5jnDMDxKAwxUNXDmGeUizYBbM",
  "key21": "4M8GpmgL1ZPaNBJKASKUpuV3edWCatxzQNg57Vp5a9CeaT7ryCyx3oXtefyevNAkHn2rP4dSvVn6u7RXwm2d7RLn",
  "key22": "4qVnYvB8nT8vgq3Lhsncxyg6SRWaRjqHtQxLsyTj8jbFwrg1s8Bnzk4L9jSEaZKLeE9ggV2hKatYcu8zdHuPt7cs",
  "key23": "5NWrFu7vr8XT8PDRi4fQJg3AB6g4Z1NC4tAiDVu9xypYxoqJubpwPf4Q5MuVXc9kDvsaP9NgWjfVL268WuUz6Cku",
  "key24": "2yKfbtCLxoX1d21GPPC69LNYjBdzG3uWWQhfzEEf3xnYWpRkAUNtGMwdyqJV2adYArHyPRJCYvc8j3Ao68BRaJsa",
  "key25": "iHQSgpZ32fKPwtKuuwi5mGJcC3ueUmxEvCjfQcUsf1EDNeWnTjixYfuuD8z3HvrqyUdRAbMTnUqucyStSEZD2Vp",
  "key26": "5ZhUo1Rgi2zM68eaEmo9yVcKydbyu32pnLAg1vniEKUDCVx4pegyvsUoUrPXdpydnmLbJqHq9vv1nmbAWY1Ceyty",
  "key27": "3VtXMLMbjSCdZbWmz6EKPavjLDLDvVmYz5y4bQKLJ9hMwdt4Ni7iRJm8rpJdTabTMJregdFb17gGaFmbBJTnhxTt",
  "key28": "4P4AnkSZSMVzQYjJXJ29dAjUqN9oyVVJuxSPpuxvZD1bgcvCN2WHqNjJZmvVk9gwDWSzRKbsCwTgaYdx4xsMxsq",
  "key29": "2EdvTC1gD1Kgs3AS5n4Wazze1B42Av4AyZU2dKD1R7qX7Sd78sDxXwJtj9arroyi4vANTogSnY9WLg8n1VunQ5Ab",
  "key30": "5UXZFKzg8UcRf1s7UV8Jg5qu7AhYVSW6uP7UNKDNjB5NzdqU3GtpuWFi4uHShzjukcSGX3e3z42Y6oZoAevDzUGa"
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
