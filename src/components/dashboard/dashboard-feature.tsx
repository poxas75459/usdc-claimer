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
    "5ZYMJSfS6En54WEjMpzyvGkkbkQuNXQzdzX2i8Eqz7gaWfHcw6vd2zEFkgwhjio5N4CXcxp6NsbXpaYVvrjDoSKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xi21WrL4SVp9x9PFy5rSviy5QKotRkfFTP1C18odAiph75Hx33HGueFW46EFGQbzaAmoARQJwe1oHDvmkXH7SWU",
  "key1": "2iLhyFcLVoidZUN65eiJpdYnC29LojrbregizG9TyaYcgUrQUAg5WnwjkdyGfg5EkQ6ZQ5NkD8iS8MBDiVkgFLUm",
  "key2": "zgCie2KSJDEtND6nAc2gtVZsgmYpBLGezxQUPgQtTRWnqAtVFvpV2yfwkcsCCFrvoqxkxcK8dp149h7JezRxtGT",
  "key3": "5j1CrZymPFpMDhs53ibMpxK21gsnytbXfZeb3NRe7htMMKah9y3wa5Np387PCcu7yNqwXXuwaJHe4qo7QBzy5xfr",
  "key4": "3fYvQpHL95EE9C6yY9awTTD8Snvs26SyMNHtxkYN6rQyVL6c6RhkXHx6sTxcsF4zAM5zuWUQXvkuzUJKZ2CCwP6T",
  "key5": "qKgpZkLaraKNXLxDA3dBCCSHnEFi67oR22XexyUprUsMTesaBovVT3SiVH6La85vAWvkb7teYBFUKaDwRiScnjA",
  "key6": "35PXNApxpR36wN4wHmj3J6qpH4kWhorm847XRZuhNfX4PFW8UPTjfBUuQxRSdMXBfULstqyggbdDnd1w7eJSbTCX",
  "key7": "5nQV6SDp7YQjKXWUz4RtRPEExZa6VFSKuHCq8qALJq9PzdPb2GXrXCtgo13PkyShS7VhbK6f7dqpG4Ae4R6JoD6w",
  "key8": "2uwens2oAWwvKLysLUdyFx23vhGesiYGeBhM4UMS2VcK4HCT3vvCtB4YZqdKpV94RxZbzv111dhW1a2LPEAg8SBW",
  "key9": "3sWYqawVCuRuFu4c5aVvznkSn4xQeJnA8TwxLZET1zW5F4WA6cFLtpDVh5xWg9jeTeLcrM1gTZ6P9jTR6AzPvXdm",
  "key10": "n8Cfnw4Bt9S914Q93WV1hxtdKhspSjpfXh4ybXCXxSYrnDVShjLp69aw5VTew5aSboGdkjWN5WmBjykbgjpqKnA",
  "key11": "4ht7C7c3hGsG2v9MYDwb1WEAWqXHssAhjgRQhAR4CPGncpAU1dZUdymFdLgFQNDA1GKSvQJMZpeRPMfuBhgwmj1h",
  "key12": "54Xk1SgeBDn1nsZA8GmN6NgmUwft2o77F9GCUTCXFL51a3BgcEfDbbZnZf6sMUPgQXeq9AP2VKM3ipZbhnve3v2S",
  "key13": "5L5zgFDwLeFDm6tqu1C8kLDpw7RLU6rDrUdceNqNRPbGz7ntrWAb5eMXxsFCc2xxWtnfAJyP7PGp8V6poyVUFTCM",
  "key14": "5iqDPgApVHfg8CMGYD2urfFhUfyhom1nPgWGrUzBsrYW4aU3U7Ap8GmLfpSiUFmSPiELYd4dNDuHwBM3DbMBj4pT",
  "key15": "v3cQBgbsPsaKFVyJ8ejiTWCi9EsCKLuWbzHRXbiYxQKxNUo2aGwVPxCrAiQsHJRXXE7huUYexZWdciyoyYA7yW3",
  "key16": "4jY3E5VWT1dwW2bsQMWD8MJbjrHNt4s5NEJKB89S9jzWVrRh9k6Vu5oWSKRKxZ8ToNKkK7oQNJHUNiYvMTV4Wbw",
  "key17": "x45ooijTfxjLGjFoWviZzNQh9cnf9Dski27TxJ63qaujiHsMyPDxXrqQ8LrGL5FbV4gwVW34tTpP9v6Ug8w673a",
  "key18": "5KVMtoz7U1NRd53LVEEYQPCWDsfM2Q5V8BwQyKzPQd1zn41twndk2tD2FnJPppjW5nPX2hEZHb5zpS96vnwhzHwc",
  "key19": "4iaQwMsHTghhJMK7md83n34wY3WmM8XtJHmDB4wyuNJrsCykMsdScc5JN5kUT4nxWHzXuKfKsy8ZduBkEBg2LAez",
  "key20": "5KqTwSvFykTmDcnviqW6VdDh3rxRQr32wqVzYL5hKfa9ribMoD1keViMmUqg6dqKKdd1Ag42TuApXU6eFs4JV2XN",
  "key21": "3DZg79JVCP3emAE5sf27JFz8duGw4Sc9dTyYNrJyA93Hqm2cKrDFL6xtsEUwV5isA9MyCcTgGdHc3fSgi4Pv2Smc",
  "key22": "5E1zoTBKM6fzBmau95tXsTqUbThTySoBW8AKnNRv6qPxUyaEd9aVWBNqAAxvgQTM1h6iEH6WrTFK99JPWLU5JMDv",
  "key23": "38pCNt65UMEmb5296V4jrwaDWQ7x4BjC9Aka7FcG3GS78mmmjH6SQ4d5eMBQg8vNrAk1ACkYyNRPnKQpGv8QHNww",
  "key24": "XRwZpJUvjCHwNsfJ1eHgwUHwNbj9sQM1CkHeDdrYxpWUnuYzvDsidpsiotspe5dLdjxDUBmwqgKFNpHtBNxtuKj",
  "key25": "3JqAPJrhpAXC1wQGfLuQnTDdBEerT1V2W3u7ZdwZLuRTNrGat5CWz3qYQ4QxnEeyJHEyvzQL9Z5qowXLagqp7MZ5"
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
