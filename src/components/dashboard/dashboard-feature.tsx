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
    "4AEXZE1pNDnSddNAVrCxTAy6cG7y6kGRG8PAcErsRMw37j4ezZw1fMC2DfszDNe4WtyL9HvNWevEBPZYVLsuHy6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sasBg2kpe5jdEr7AvRVwadJvv6xxgaV9XAdTMSbgyMy33pBoKvvJDhECAndPHq8i8ZjBSZjVKmu24Z2mYY4LijP",
  "key1": "2QeFwA5BAB4chjyaeSPeSHxrn5xE7vgedqaS7FaWuNtgvoP3WvoTEoYWVtEFSruffTVTpLYeMUv3XTLUK4XLCxTA",
  "key2": "KSdGTMQ5UWm4chRamoBbceYqLE4u9GLVTSK9g5fMvDD2tWTLCNQb8pz4sF3VWZeZnSFBrNN5gJ31bTzaSyiwktg",
  "key3": "3W21C9d59y86K6nXYya76rYg5f7xZBrAfpwCHZTY9eGvnU2jxm7eeXE2u2ChZsRwxDwghofdkh6vjMRMe9NZo3cJ",
  "key4": "48vqnovK7PuCnj3aP3qYgPwYHfkktQn472Y7E5o6GVQuK6VykXjbyegrct8ekihkpmzkagEyZqpfcDifwXQURevT",
  "key5": "fsaQXRuHgCZavDy9VNVJ3zWAS1CQBEV6mSXSNKH9PRqGTijDnRQN4ooMUXaCcBeKfPSQA33MajriEA4e5ZS2eBG",
  "key6": "4ADtndHRsEfpPYnPeTpqdx66LmrzgbwfEa7rWvvGQFbAcNJs4YxK3zQ1puHyhJaJpQVpu8G1br1kHntGbWH8xY2a",
  "key7": "2RzsSma46AvsY49UKVDPppHjQGjN9Qx8TFtFRPnwPxjgyhixmEQZPvTMFQP9YDZWLvUeBN1y55ZMnNrBc51oBJ9s",
  "key8": "FoqjfnahGgnRtazrKnhsNP1VAijZBXJCaUpfTD5YfAvvh2vjTuzmhCQcxEJFKYW4N3Vebc3jBePr9CBxf3fC9La",
  "key9": "2r8YHJxVzhvEEZSw5NyyC1Tz8btfQW9rF4UMVxNfrQmVk2ew5E5qjTkPixAj2gLUJFEYMqomitVj62traDTnq5a9",
  "key10": "56Wz8n3pFUvKZdHoiVqLwi6C4ZTD1gKhDarsQCi15MGvESCYk4CP5zfJzEN1ncCcMFK8rVBRjyQNERFN47sibZ2G",
  "key11": "4MnF6hVi3znZAa5MNJnp4D57dGDGSKRYRL1MLgxpmFgbTnsXdFrmmy8CsAU8vj1EHFcdx6Fo62tn3eeBKg8CMttY",
  "key12": "38jbnPzKvttuZ1MUP42ZDnxAhiPKJiJUo8M5R7JmNrSyTzCjFV9Rj4DhYMtkHXa8FRAKU9FwX7UnAEM8gVaxenXE",
  "key13": "2dqT1sakXb1Sgt5MzXysH6W9CWhzUn75A9j16xbwNiAxWaaXZUqm9NbnW5PDcLhQavNReey26xYdqqCV5cMeWsFM",
  "key14": "2X3fzCfuMaWuEXFzNzCAbntkL5RaukLncDzTUBL3jQYAyxP5qV8H3pPg1Ltwiy4iJzuzxxQHcwDrNt3EiWp7tLzN",
  "key15": "2mQCiS65ve91Wd1PwHnL22fDUf741bLYzP57Z1NRnwcCzpVgwzmdzPoxvwRtVY2dcPMdvsd9MWq9AtqiSm5NDcz5",
  "key16": "4bfrUdhMVBm9gNvYmJYyX4Se831drj3CbqPoBegzWX7n3RXd7n76AGbdPT8sgGnsPvi8AUivB8LkXba51WxRWyMV",
  "key17": "3FWWUVbGqWtXqCkBmSfYyi6Tj5nLvPu3AbrN9XVyAaTXDnKB15RZ5ewzkkZotgfyjyUC1Dc43dJVKd2k2CQe3tZy",
  "key18": "4UwvW4FTQbiSF7V9ayxLYg2FLfoPmUTYjGvDHX4i9qjnfmGCgjLj6xHZBttXEuEWWVrnmC1v8Vy7ziVjZGzLxMLu",
  "key19": "4ZB2ECnafumUxQSmTA7uc2ArM3ED3Si3txYdv19N1oAZS11n1AxXBBddzvNMjYuCo99LD8m3raTpxXRumcqDYzd4",
  "key20": "5eXTxz4diGcEtTRzpoS4mS24HcuhyrDZH4bgefLzsLoBRHENWPvZ52LWQreR6b1taDQB5ni9rNTUmzuYeqkxsii6",
  "key21": "4apNzpPeCHZtfqDipo6pnh3jDW1s71kitSvTrGoFwaFoXHVp66mLoB8YAdyBpcG6uXVHeuwa4K4mXjtdVwB667vV",
  "key22": "3EGJm1R8v3NrCN9Dn4NV581Yz4NnRATC9Nb7DYwYdNX7PN9TZpH1HaJAUutbcdc8rmCfT6FCSDkiLSMDMCJCYeTv",
  "key23": "SkYgiK14hmGNpWjNEKsrx2o4ZwPBrAiVVTno8eChnatBmMYm3rHHpqWM9fGJUh7Q2P49ojEBt1jsnQhxeJ5Mcos",
  "key24": "B6Xjp2AWJh2w3PupsYtULwXbkxauvGix7wZ3K4xKoB4MsRtqrtxaiLQmtobsogRB2rSiRL43d6isGveRkK3JeEQ",
  "key25": "5FHMj7Z1ajYbjQaV63LEbmcc6RPPZmMCFsgZ1bF51NGwfCuLcLf6jEdm7tdUUxmfYzU4ftyTmKZGm41qPxu6NFyN",
  "key26": "umADAMnkKoGqW879tbkQ4zHYvZaNQNrZ83dvuSeCVLTK5FekhRfc5JroMgSiaUKwmiwg6TMsFRreaQ9CxNwtoum",
  "key27": "uijnmqnPKUiATpSEgJmi54Hkjha532eb2cEw9UBAAnBH7mY1bHCvR2Kc7dexx8DTkdchYnuB5WYNwJufWjpiyLC",
  "key28": "5ZeDAeS4LeqZbD9xmwzfJept9APkkmc6BTEv2VYN7ay4QzUPuSZ7VH2aFXcNGM21xTHEH6ftkXcgYxweQTqTFwim",
  "key29": "3C57S1cgpbEc223PcwfLHN6P4MJGPEevW47nnPm7YyjBocQTkYhMU7pn4qy3hPbDKYbckzbcvdkTUGhMVUK9GRhq",
  "key30": "64W725BR4Sqa4MS7amXVeVnmcRYJJVvqnnGze45H3HjcyFVRH1XHPtc6GB9TG7BRoVvAaZyKjxhFHFA2ZqrK1SVJ"
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
