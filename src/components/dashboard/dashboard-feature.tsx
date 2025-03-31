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
    "39JtNXrcqMPP243zLTZHPekwW2afEPY3JtNUtqyxzvULh8Kr4p2YPASK6VFq5nysTSbaSv5pxXQUdhdABwdKdpDo"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4fa8DpLquTteouB19UnqfAW71ZrmGd9JjbLi7YYsJ5U4zNkkUWVze7rer8rvuyvsDb6B6egRgvGuXfoLvEEQzi1S",
  "decoyKey1": "63unBQY8iYBbU44vdjmC5t7zwPdatj45PbgsaZaEZMVkLm2H7WHHWHsUjh1qJv6KXBVmdTWyehEdztNKhADh9tcm",
  "decoyKey2": "2htX5aonpMk3W5rwfZmi2jumt1KbjEqUvPNfXSLg2c6ACqRMuToVZa1UidwQ5mZL8SsMg5fGqJcPgqtBa3AQ4E7C",
  "decoyKey3": "3AzfdMaoKmbB1Vgp54PamTnJ34jp6J4VHcyGLRssdHjxw7XqryJiqanyUog7GrKV89Ls2NTKBUhMQutKA6d13GqB",
  "decoyKey4": "5ByhHN42wiCJhfwv18Kik7PbFSEbzAQRgNhP6f1vgnj7rWht2zv1PbfGLKYRmi5hB4HRHHnJvaWdqmr2R8XvLSBj",
  "decoyKey5": "29GesfUskBVz8vuyY3TDdZLxh5reabpkWNXH2U9zECQMp4apeQyB1MMd6fUTkCHxHQELknCpdWjJw3zncWn4eerx",
  "decoyKey6": "5gwc4aSPnq5gVKF5BX7YF4z9F24KCVGzKqyQBqjg3qrwBjdBecPKhtBVc28sjA6scE2yZx4XPbXy2SimvfcR2scu",
  "decoyKey7": "2sLWsoTr8zekYHtxW3z3KJKKJsuFXuzHCp43QYtz1q2LV7scnPbmrkxegMEXoSVf5FgxJkGkiEbq7PA6xHYuwZg4",
  "decoyKey8": "4SukezLyL3bHQsn9PAGdEVXDxwgDbbrzXdyXT1HTVXWRgvot5aJybm7LievP1WqAXztkkA4XLZPp83jChQzxEGMU",
  "decoyKey9": "5r7FHUnBAWMaMBN8dHHSSJh2ZyqEMNY8VfFP9jozvyY7U47SbWAKjMK15SjgXX7sKosQPVMBkzee6ZHAC9BQszNk",
  "decoyKey10": "3zidui19kW5dxG8rwocXPnzm3KwuMPQuji32CppL3cJpy4g4fBzxCEBzFeNyW4vRBuUBWWzc1ZoB4M9u95yfztgs",
  "decoyKey11": "5S5AK4HjLadxQ6bxkBNF4kkCW8zSGAKfPZV3AQBK3CeDTYg7Tk9cNayxWpmFskcww6ZWHS12N4Hbie6rf3sdZUTV",
  "decoyKey12": "5d8BAjMBRFZ5XnLcNEjN5SVRdHkgRqBVTfE1vfz88eTSn551QhxvNWNdfa7yLJzyswdWsGVkEhin41fF4gEaesGi",
  "decoyKey13": "4FEDqfVb9USDCxoCjHaQ45rXDd8AcjzXuwUtGsxQio89AGZJqnJd5kPEMZ5yFWjWaK4eSvfrdsWa3SEnrhq2oGUo",
  "decoyKey14": "1NCGBtwTgfdZgyVp9Nz47Sa89KpHJ87A54fcy9dKUpaMVKhatQTCDQuWJXRjbkVnsbyxWjKgRGWiAKgLVPC95BS",
  "decoyKey15": "2LAEFjGXWK6NdRkSSiH5jJGC18Z38sZCJim5nevFH6hoQ4n3aQKY2gJNGaPNjcmTYwpkcwzY8bU7w33epcczia9F",
  "decoyKey16": "3wwwKQKoUvtXdqra76Ftqv9qK4Kvo4bqa4h1muygsS9oiKG6AV484U8pJS94Tsm1qTDwW4Me4VL8NR87UdMUDQs5",
  "decoyKey17": "3rNwRUF7bvqRt3ZJbS12XNnPYgSrwwWJ5EmjyFfHqVHs1fUDGPw9Te2x2bfozwknzCp39ev7Tsj2XFGbxW2or6Zc",
  "decoyKey18": "4DRfaE94jS1QSEzgFhtPWvFYpoU5LEd2u8788uG9QdhrennP1piP3GfMfadXNrcXGd7A5UK7JvsVbHLHdstf4254",
  "decoyKey19": "4MgRAx1PU9HbzaZ6n5DFRZKjdV3KrmKqx9LPETca9ZCbgVTb6uxc26mQeB37m759h7XsJWor3e7adXheTCRzgBKG",
  "decoyKey20": "4PU62XF68kKfa2qqDyeXkZ6J85oiwZomWNqY5fJLjufsTzFCSLvKB7VgmPQ8GEM816y64HbLFN7rS7NE73454G7Y",
  "decoyKey21": "5kxQRmBA8hJJizzov8LuVNqkejsYeQ77FB2WR8pEyjFkAP6ikpYwQZbUuz8if4w1nyqzFtcyAt1QC3U1rFd8NLtV",
  "decoyKey22": "4pkUwzuJRqPMTYVafNPqQn83UWmheLsxJCWVnfHKPYKxQxNty4kuUL1o9UBCNbjW6ZRGDNFiekAK6P6ztAGfVnuk",
  "decoyKey23": "2UoR8TTPsesSjRubrux7VcUtBwiGQFdVMr3uscPQUGgR6jVMTEz38umJvuFkoqPuDMhLZh4bM6f9qDqasC5v2cLy",
  "decoyKey24": "2DBY1p4WBkp7WXum8gQW1U3Jvb8cdGR6yT6arqVt4FgqEknzGogTL5hDSmkjX4Z8n7XwDZmBiGmh92NFwiBtHc3u",
  "decoyKey25": "UwJFCYBGWgvXbJuf35g6JMEheTi922qj2vmMxAYRfBh6ZCZoPb9iwxTqpwCGPWRFciGjKxWH7q7PodjcQiSp7j9",
  "decoyKey26": "z1srGmG3mX6VWRxASz2JT72sQnAuj1s5vdUf5vgJ3KqRf1yfkLWvsvpFyFZmxzKv11ABo8yFw2PJkYkG82WBWp6",
  "decoyKey27": "XLuKY45DfSc3bphipXsjnEBjgz8jv7BYtPhp1KnNwPC13L7uG7wwg16ePFuAGrQPFHkVLTKWGHVaxt5TVo3eNxA",
  "decoyKey28": "a7zhmUJVb9gUamY6ANNJ6xK9EzaDM9PJZNBpGcw1S3t8KAqZz6NGGmRB1CVR2ndJ25PPHHY59ai7Jw1qTjoZhdW",
  "decoyKey29": "5jJpb6vpkujQBgTm9ihVqmrCpS9WjvbVdwwihVFi6AQXbCGXKVDrj9L4jRrsMy13cHoXcR9L8bmVTgy1sreHrK84",
  "decoyKey30": "AhsPrKquQ2TKkDKyhvhP4QUqu3JYzXmwSxsh92E6NJpVS9zVgRHHkaD3SAhfc9jLDjVb8y2T4BrgQH41AucLc3e",
  "decoyKey31": "2waUJAdMahN4WRcQFMGjLW9daoL2Bu6vsR5m3TMRoS3kNmFBDdhxkGBAaCFtVu7Eo9P2Po1qTE7PFRRPofSeL3SX",
  "decoyKey32": "4m9tV8nRdd1ho2xD84a8JTWwfcd1JWdjEFMvX1tWWoo2fK2fi7FMKrxTk7UwETY49aHvr2Zh1biMJZfPC4CP6ew8",
  "decoyKey33": "3aSLYnVsBVUzJhuzUoM7MZUqkgLAFrPnxPAJ6vw7KjJgfKtPkexgFxCPQJpczTHAD2nZyiY9pUD4oiCTKCLxSBQS"
};
// DECOY_KEYS_END
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