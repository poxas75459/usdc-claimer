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
    "4XBKHn8rJYgzAN9EHDkjk1unhwU5yKqaZvyPxrYJHVvbsXkv4Cq2hjNWPvq9hLsBwxW17QH6Q5ThvRJbEb1qNaWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRy5qeq1bCMdB7qSJwQZAfbzqsCEcM9Qpv3HzzicotuRZM99BG1zsJqbxDE6wETk3TPfRQanAF1VHMPtoeWoPWf",
  "key1": "4nJeJYUBhzauSTstCSu6HbmmUqepsJDALY9rVQLDxEnzQ27kv4KaEqLLTV9JgAfiQFfTJ6KK9ngGiXCRsfsyuFsr",
  "key2": "4e1U1nME2ufejceCEA4BpufEkGwTNGdprwEMnPJu79WipKyHxrwsGLyZiofyjthBS4fKSPJAnGJ3daujDJ1qawxj",
  "key3": "TKLCXvm2pQGY3yM2f4HUAbyjoqQ8sFuwxdk9SHjCATWoccPW6dtiPgPcsqGuRe1QQTUL73QRBAHnjXMx3ECXnSd",
  "key4": "2gccPx2gPX2VPV7S6KbLBSm4UW8SHnp1vtcTB9m8rNCSwhc61VC5X6EPA4ecYyrVnaFpC34TreonhvTqCV7ozBJE",
  "key5": "3VN8fk71U3asnDdQQSZUyj43iHQGAH6DKgYbGJFCB4WjNAuJ4hQLDmhwsyw26fsDoS1kBDyZnDz5j5xoGSw8YfGU",
  "key6": "Jz9aQdgZcrhnodowjMHhnCZ6tgBcnWhsaaBFLBBoumGHemHCu3zxRBHR6R6oqfGVTiJUgbobQPtRgHMeMm3B8H1",
  "key7": "4KE7FZ3WL4ruiECWjfYrt4tRe5ty1U2Cw7yTfFzp1zRUoMpJ8iFrMRMgct3ZE7fB7btGPYYTdvoTy1x4oU57eN1t",
  "key8": "9XCx1dbbh2hnXCMkW3ZnpR6Trq2qHUib9tmYwbiyBUovNhsHLmZHjqMusyrWyj5hu3vCt6DGqW6u8LmsqMAs4HN",
  "key9": "5t3Hg8nnkAW9BTbnG3UaAZNL19yEGEq1dqa11ipCW6rYEkRaGHoi315H4DftFTUmv2wV9KTDczGKGb4KJHXEdNoQ",
  "key10": "51eQVh2BqwXRdFiCYBxHqgszD2LscZLqWuQo8KYaQX8v6C5trQDMfuLhq7m6DtenkfPUJX64GMa1TJzMWMYLVzKD",
  "key11": "56n8DaZcYPHN2mDgz33m1F6wTXuzAWdWfiNpKrReh2n5Aoz4AE8j9xok2PWeBQxyWnHBhWUT1cd6bPr17nRTLYUN",
  "key12": "5rmf8eX36mhsssoztTrUav2nr2bMMm8CGTJhdiA6mBZHMuFpbDkhGimVpRAMz5eni4pQsHaC8g1ZpG6d5JXNhbyE",
  "key13": "yQqzn2ogmZ4iozv9ceuko8aZrKRuxEYaHzRMY9RGfEjCyEFGS33jVJDqCh3P5CH4LyhsCAxuJBZP9J8T5zL8jBM",
  "key14": "2duom5dByvRe98GiXezSKDMJmsVvkTFJtwKpWCAnD87JsrTueTxjpc6KXSQxZEchQbsi84MfRg1zDjFj78L5Ttst",
  "key15": "4Y21PCwErbgYA6YgnUnxxq2szKfLaW8PnM8J3mcahNEYURUVSaoNFvdNCLZKjtkdKgoYuiPxxMvS3PbptNRmSGob",
  "key16": "3yY6s93PCwdkhzgZ5czKSnUF8aGJXiRwi18y2rumkAfWcZZ11QxczfdD7z6ynnr9uECGLLENMmSrieKCkDnFP1wU",
  "key17": "3dFmUfJK7gV4P8ztndvN1ZcrZMRTzrrfYg6m8ef3xtfjMqEBNzk8oWFi2sjji6h2wkPhXirgWhXWYEDFy8hgGgmD",
  "key18": "j7FcngtxuJPazEYVJzmnD4Y1UETVRGqYwC6BpZV1MgX1u1yhZRiosakmUowqhwZcqNhnB2sjg5VEHrPDEjrDVD4",
  "key19": "4DKvSm7ZyQHuWbiTsqfvy4xQ3XUWJqEprPBT8nEHvqjbKJL11rtQzPCwvq86YqUWj8Uawe2G8vktc7aqZF1x5VjG",
  "key20": "3RKxiep4WMVHKV5JeMw39oHZGQbkNCYbVCiwZfbpdHqYMG3T2XUuFfB5wvjK9PeZjG176AxH3FZySXRGkMCJTtR1",
  "key21": "2uaBBTCDKnA1Mi2xZYkFB3AwFxKoHyAFtzHE1vrqMULbQDDnJv3Naq1jP431MmZDChpqMgce18Yp5teu5yNqDkkq",
  "key22": "7V7g1vgbowa4YedXLDPXazbZyjQxommSy7NuGjgxqn3WfUpiVoF5LQHbtbstpQ7nt7NSwzg3t7Drq2NvkzFe7jq",
  "key23": "8QqAovLnVoAdpsMC7E339k4omyZExA2n3MEeEAf7jsQAcHA7NLXThf1ZpWQjfw7S8kGpc44ZJBKR9GQzGHhVspi",
  "key24": "3d7MExjjKjA5bEoupSVyxiPgeu5NmFXxFuqhjii2eS2i3JBofy3gm3rv5VakzkNHjqRjiNcutawYMFgm6iwvaVeV",
  "key25": "jATK5EVFaA9YGKdHT1uT2qcavD71UbJBtYbmAUUyyUBmnLNuWMHaKVvm4EfZ5wuA572Y2iLZLKxpSiizNsz4xm3"
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
