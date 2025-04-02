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
    "3oJrMpgwksbqQkVr7UzXdBs9hZBi9RUKE2Cj9UATqMkzdbyZHjT2iDCnSvwjYE26XiyZ9UosqGBN1wFhWEST9iD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuzT76trB6Frfa8MuhXNourN5akVQwBKoqqW47J3cWknbS2qNWmJRq3MeaRycjePjiCeCxS31MRouj3XbpnWjXg",
  "key1": "29Mr6wwZPVDdtALTXM2hnchtNdH6gQP6kKfB7Q3QSczcePbAygfzJuhuqnoyeABCanrRBnzZ2wGUMdC9MAYDQTAw",
  "key2": "orYqhYSDGtiuzzShLt7rMr5SohG15DVuLcrutFAB1wgk8aZLEWfhoLLUow5yeCUUpHVGJc5wEGHLnzPfNTW9GiA",
  "key3": "4H82dpAS8WVHhhwDvEqFu28yLUN67Uh8rMqj835bGcZJ6sJkupWp3i6bwMEWrgBH1p8aVCiFmtZf3Ar1FXRjKqah",
  "key4": "2kUbpNBESzSWetuinoELwoyp6ucG9vYaenLAjm3JLRSHY4pN87Nr2XoPFkzouExA4Q1b3Q7tdDgxW5bxMEUgjzj",
  "key5": "52kXTKhveFEpmbPTqp4uXRsg1c2gdE3cboZ7TRvd1cuYh2jzxkrLdKW3AraPpNUn2YaRQdbqQmcEp7CZF5JUhwhc",
  "key6": "3xrM7Y2SSMT2N7XH2w3iSpJLeVbf4ppCYEoUhaG8ovQ3denL41kwZUZHekcPeayGS3gxcj49bJL6WKbF5wYRwjML",
  "key7": "5z8L332xMJ2Zk4hFutBxBtjZt5nQvPmLhV3TuuxQKMzuiyGqHXKrz1qQHnvDwqukBt27ParUsyMohQ5Rv64ZLg7J",
  "key8": "3ZgX3ZaYxWTvsUtvLX8mgG795givQmv2uWbciYzg3ydTDi8YrTBvTupvZsChHhdJhCrNn3Vbbodj5gX6WPWCQ2i5",
  "key9": "ZcCJ3TqRfYewKNkNkJpBfL82uvCuVPSxKWMLi7ewzGHQNNjnT1ZtcPsuGMFXfZDRHCLRn4NMA28R2gRWCBmPjwF",
  "key10": "2vFYxvt6RGo6G94awjEWgdS8ZChH31fHp2toCiQCyVsiwYVQMsu5rGbJ2sebKSzGoiGSPBtvdLrwctwgfJRDhtUY",
  "key11": "3tbQ8S76VQJRYzTAKNPnmTPWhLDvbAYJDvaZNvSJ1eL4YndDPDTqE9boRDDRBbfuZ5se4MLohn4r9Ab4Xs925M2s",
  "key12": "Vow1gTAmWECLKftLp2yxckZaveT8vtzMtJZaBKt1sLh2ZtW2fhJqbJe5tQ3szLcKfQtXWzfE7vUy7Zhco6neA9C",
  "key13": "SWWSt2kkDuC5w6BE5UPMacUQjxRi9foSKPmAmumMLWJnov1YiAeKTQ9Nsra4Ahwn15nNoDZ2N9Q6nc7zDB7xw2U",
  "key14": "2hxvCX5xRyLk5xBtzpvdypDGKzUdQA1m1GtsRcdtYptckdhaUkcjLmcvojfQ5JMM7AgMd5VHQLgXoqDanJfqkxHC",
  "key15": "2EXd5ce5yhFZJ6yBUvn5QDpXdaTWZSg3FxD8H1BB5eNpVDwM8tJ4qgG8vQJrqi8nTtjzSZxbp43KP332c6MkfHAf",
  "key16": "3LD2q2VBDSTpomx5ekEEu7AmFex3aeQwXPYRgJgppBFCi5TatwtYWNvJfcyGXBB8Xz1zN9AgCfPCMbvNq5pkcrxu",
  "key17": "42KF4uWCVBwDYfC9SS7y8mYuyy114JZ7fGngrvEbfdUjHT3LnhbqmkXkC2sXeqDpjFc89TCMtDBeKhnU2GcT6C8v",
  "key18": "3ojgxWTRUdyK61zRdZHZxRCSLX4eJee9xBzdadLcY9Uv4DwJBPUNR2Q5rYoTeBBrKG3F92aoNFWpBPH6zaSu3BzV",
  "key19": "2HY3mkz5LjvkMTzWZFN1i5mgfSV7iXhpnbGYCZpF8KSBct9UJAW9tohyH5g5pU6jHeVAcXoBQZkHrhnpeSHarEJe",
  "key20": "v2CpVphhz8qMoYZrMpZXbAEGg58cvsjbzPTyQhEmNWxVQayp7SCLcFpUgmGHfDoajPXtiFmm1cqDnHrDifdTGDj",
  "key21": "4MqUcUDtWfXdSP3HagxWeYi3UVsYQpyZF112VhgmdvLUcgru7qcwRRBQYoaoxZY7eh51tS32fa4gBJnD1rXhHaun",
  "key22": "3QrJoJhj6GWTL3uxtyYJAtR35wh3MjNK4drQ6SPJY5VZh9e6pxJrDoMnnvkHWogkLvbhwAbFqu1kSxTTpxZsbCcp",
  "key23": "3YSHnXgDaGbTbsGvFYU2h3tUFrCzGG4BjTQsb2LbgPiRCA2s7oH7g4iMwKf5e33Xvs9jgMwY7CBTRgjRaQf49UiS",
  "key24": "3KNDWhBSkyYGB1HWo8qYUT29B2HvB3BuVpihyWcVbZgthXnkwdQoksHv8WtZczqDnQ4nRUu56jaaVtt5FqKTMjp7",
  "key25": "2SFoRouAhTpViNq8wc2QVNZqCi76a9BSbuS9vjyvUS8ZFkV6hcfmkFsAr3hKnNJRfMXH1j7wWyc5rktKDDmVDLPJ",
  "key26": "27DcMv67JMBArJYsEFv6FGYKN6JEhwBJgm9RMnqJCRkN1CK757FceeEpcM6rrT3a8TyYzMwX9tnPzCnNSs1i4YcK",
  "key27": "4YUqxYnPhixSDiANuE3eq43bhVtcGMZZ4QE8vvMKeCXxd5ePzVbWn7xTF59oVhu7pBVtmhX4kuCenH2pJJpt8yWc",
  "key28": "JJ968kMKCuaqUNamSnNsydoh1hCcNsL2794XYahQXV4yBDVRraPpsCDBsAfNN9UgdDZL2ax5YfayYfFtYtSzbbh",
  "key29": "3Ts8S51SZkdchMLXhMzp5Y7FdeHQQD8vsMfLqZaP5b9BzYBBDj5oFiyQYxQQoSx126Q2KAeHdz6TqG5bt6HCEbEA"
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
