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
    "43z2WhSnKStry4R1H3Wyqt5qCaiY2428GS6rAKvN2RjdisJKd1YHfT3RS9GxCF5wk78wvqKZBc5dpkvseg3P79mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fDwzw63QFVSEDkbG4VK1MCKgxwEzdeeYAC5JKLqtiEHYzFEZXiQpANfoJ6ZdGirLpCMF3393dzE9dDFaxDZh2o3",
  "key1": "4Y6QiJv5QV1n12ufqPgwSzcMkLVzgZmBMfvPJDKG45bVwgcc9h6aZeCUDcr4qA8asKA8T6qmzitUaWHY8EcQzVQb",
  "key2": "3Tihk3ZVNLNg3EU4cKtErhx452c31uAjwMHuFvJwv8quTMy4UvqS5EU6uHhp3iGRyNzV7CfdYoK36Byesh2PsSqe",
  "key3": "3nRV7QhyVSrreHUF2Yx3FaU9XoKrpNakJ7jEgEgMyK4hJ8pW98SgmFmQ5ngM7GyNtAWSo8WNnG2Ss4FA67NqViJk",
  "key4": "3gXyBXT6U7VarSNmqo8Z91JCQbrtbxCiGkABbuZ72RprAmrgmTz7q9oArB8vYUAnKr1dodVDm3YXuBawLwMkB9Cv",
  "key5": "2xXDiVKbAo2oxzqwdxXw1BUhyhzYMCFPNhAe66JU8ujoXjWixRd88jTLdJBQUasEkeDW6S9ySLmQ1x5QvdkRUZoN",
  "key6": "mdVhS9m6jVokXhHH4xsRSxDjWRxCQJfAqeoEpoGHr1YKwJ7i6xnWZf2thJCKhz4u6cmYVrFVGhEZiR4vd7VVnbz",
  "key7": "2dTFZkFyAXVQV38guaEtTaNvTKnUgHrBZ1jJL9jZyyoN5tUkyQS2FLCqgwLZX1fWBWUx5j6G7etpPsmzzVvF1WB9",
  "key8": "4sXrTC6ET5kHTZmE7fCrysv8Xtszvs4LABkCC3NYpjdhRmHiXG1sG4bfj343d9jVcdJ3dje4o6hp4ySaBRVvnYTv",
  "key9": "XcNvUH4NeNPyQNmZ8L53Umo5xKKdDRrTiKo17SEvNsnCs86izqoLpeWwgrTXYwCvXCscjY5Sxm4RZEd4QQydZYG",
  "key10": "45hBTX5fmfjT8AAtNMD8FYeDBBSWSbYRUJ31wppge6p9wwXPVc4qXwJuQKzXqKqUwUUGK1VFyZQLa9Uh7USQU8Cr",
  "key11": "3apgvpbCgGQD4uY9uWSoNEBi1MbL5cLu5kqx8ejC3iYnDyfVzmY4rQNMceVGTSPL41w53fXGepdy2ABDi72DwSmc",
  "key12": "3yJsgyR9rhNkRqN7P3PAmtjpThLzPzY8KQWyDFA7DMkpbFAG22xRcS4gVhy543R84PEB45JiEnrjJ6XnXQwqs11x",
  "key13": "3CjpUmUVHuDfid5zTAZPcDdFdDoxM9iaM2MS9aM7syhTB7WZt3eTPV8zGFQQPekE3V1KmxG9zXAR1RAnQuXtiKFr",
  "key14": "3VLppwYEMiHXKY64HhuhnbP7f4YRqAzREzqvUZZV24etcG5iuZaPA3hAJ3LpjVBuTxReFx7FsvJmXyA57EZAzoRo",
  "key15": "4yjtt8bTnJdsZACMtNjSfPLhTjKeMZTH5XzJqbE3ZWh2TBXZk6n9xdZCbobXTyYK1s8xuaWY9JSUoBcro55XfYXe",
  "key16": "4oCLjpdTkteHEWb1KkzRtX1YcFpqtD8iFKZ5hMAzBKbN5GrcZwXv5FSJDt14FX3aWWzGSYEEW8ezGHnQ9LFtRpWb",
  "key17": "5gU9NNwf4eg8NJuRQACE5PT63Xej9n141va1FKjo9eTvLFi1xNqCMm1rfwmags3u6hMcGQxsGDYA8HNmjW4MGZ3e",
  "key18": "47NgdhSvNA4vj8tChF63fgNdzGZHn6Xa12uMYadovu7vrNg1MkqnLUq2Zr7fDK5gkZBr18wYrHB5mAT8mjv442pm",
  "key19": "2JZUZqHPadMsygF4oJQSFzjMfkLSFvim97e6ZAYcbnzzzugEir7jcciMsxnEg8Ex1ZuHbSMEZrrtuG3ZxunTNQQ",
  "key20": "51zARhoJdTiXwCM2o2Gz4LVqerDCq5CMBiizSNx4nUha3q3iDsfP6xbreYCuGcBn6f9Smk9gz1wSu23q9vbfvYza",
  "key21": "4Ce69XnC6WLNCqXQsMX9Va6JLoGWYUbrTnQMAdrE2YRSZ8Jgh7xi5gNBP1AvSdQw2WKPE8FADPZHTnuXkF4BPmYY",
  "key22": "253ScMvtmqprbqAZXNbqBgPfb7qRu6FyhCUVwjoUdVXyTP1EicuY3HLEPE9YMMNvo2kGMzFgkNdis8zQi3pyxo1E",
  "key23": "KksFWgNNhqUd4ZGMv6P66aiPi9BT3TUPgJKvWqxDqzH3iM8d159Y6mQD9MQrqB9by7ewDZEFKj79QM8bPkhSDoz",
  "key24": "MZ25THGW9ganRiFDYvGAPXnxquHKUPzof3MvEGSRYtsffKoMziYofukw5XjAovYf9fVib7qCG1zHrg9nbB6VJtx",
  "key25": "4gcZbm1FTxwiya4ShiiNNd4MmyMN5JBc2gguhZq3xjLtXtPTgK2DvJcdHazxHJsffJjDVrBvRYstmr3mDaXum24e",
  "key26": "547eeps8KghRB52CcgATbBdL2qCf1ES86oFrEsYZUTMFESWTbwEzt6quVATYuBdaMLQsMEXnkpaXrR4HU21uUUJp",
  "key27": "3wmz3uA6NFy1vamQguKqStt3xX73E3dYwBYxwrasi7LW8GuNNN9bBvwAmjUB3QqHw2Nj5SNXBuYLfb1yLiBm2N1f",
  "key28": "5P2cp2bhznVzZwGgxPmY3GbxX7BWJujhNcpVfK7MLViXDe9vrwrF9YukUh6AAjeKL3SkivmnpNourWPwPADFQu1r",
  "key29": "4i3ybkJXk5LbK18FAL175ncJzviCcn7pYFhemApcKM3zJVNKg94ct1k3ERYSwhvzmVSwTAYsGeSErFvywZqHem9P",
  "key30": "4gpfgU68ffwfDZ6nFTZPRi9K2SbedBxPt9P3rzQNcAd8pbLa686fcFZKvykAfEDFJ1FvuN7MbWvDnQqwv9TfzdYp",
  "key31": "3hz4YvEx2agd5bxc8V3u2m1qDrjPQ2qRhARQjNRNMc2aquz1uRGnuXbgKmefyYQHtgMnCth4H1sNESCLiEbv59TY",
  "key32": "3QwoubUdC41xb2wkochzkc1UyfDDrzN5aTzPSsf8vzKBa8hXawiBn827n4wNT6oy7dSExntgk2kYoQL9tdbMWtHY",
  "key33": "5XEckrJ4rokopKVMUQjqAktngXSMigcnxmhRuV4UBDS6V1oaoD1YZVw1SinDv1zgZRTvSb95JDwL9CMjTX4CoQyA",
  "key34": "UfQVRgR1fDBq7vr3k5RtxmpEPpVb9wAhkCcoeShenv5FhiU6orrhVviwiAXJFsH6mc12FYDAb9NA8TVzZApnHcp"
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
