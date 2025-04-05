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
    "2gX7v1j8SAP6nMN9wWCYB3shKqnL3P9vinPHyTQwUUWNQjvoMDS3z3iLyULB1GpWWAM23MTrwZgdjugJv4WghX76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8LLVAVhswBcz4YmXQsHYRdeBWFWJnP3HAouKCZYAusr4x6ARfvREwij3GL8VCdQKaLMcCnYXgYVs73hPB1GJS5",
  "key1": "37QCnNiFQHvXfHUh4uJhooMh6vugZMWPRXT8d2nCy7K1Z3Fo1we8odoTbvyTgGqsYhkQNfMAJzpZQQkXKYFBsaaZ",
  "key2": "62M4S3DJd2FBPBR1C1eny3AeEeU8vx622MroTLnamcNbnUFVibkdjcx1FySn3ai5uyW3g1GAf1tHTMutPwEVetqw",
  "key3": "5tWSP1cUFMfa8h2Qk6hU2fPy9DYSvKYx25WsUYzTBngR58awy6FogtDkSM1TFHkrRfUUBN59dYjEryfthouC5qWn",
  "key4": "3CKeGYZEC2zSjev6Avg4ef3FqrQUnSZbXnnUcRQDJZgFr2F98CP5SLqQzaTe9YAqFETiMm2oCGpBYtYSzWYm8Z4L",
  "key5": "4RVhkL17qXoXWQoqQvTttRDGoPW8cc1e1uzWYAwPShdwb1FsmkgcZKw9BVk5LuVeTuSvjUNVpX6joh3fJSuSdZHg",
  "key6": "26moVdYorYeCDtHXem5WtMZKW4DRKWTw7J9hS66esAz5WshqAFpxQHZXxcWEi3qQ886ofvjr5QAskUAvdrWgEpzD",
  "key7": "5hmE6tThjTuGf9DbvDKmaHNc3SNeNFEPCQawqL3NCkYpf9tTTji9zxmfmVhcURgekXE6zEb3T84THCBKXMm9yeJq",
  "key8": "4CPugHKqeKzRyp163zrd1bYjczvPwnDCQGdWncZ6hq19cx5TF7iPEHoxcws2L1ckZ8hARcG8ramcRonZh7HDPVSf",
  "key9": "5bxLjsxdsVT3B7fjKPrrAQ7tQQQtCxcHZ6NEXHhhRiRdmY82gFVCWBKXNzCM2gYZACf4BX8xQg4zHyJFJwp3D6KA",
  "key10": "4yMYW5zRAUjn8Leq2AoFwp3vhWj6zWfH9QodzNriAurdMEWkmwoyVkWKm2bFntpoWxdzqFJQFme31NixiY9SK2ye",
  "key11": "5zH3W7RUEAA78JVCsq8ETjayZQvMPLwfTcc13RpKFJe4vXPDwqzYGsBhLpr7PAACVgxGr51YYszRMZrqvCLS9q4z",
  "key12": "1UnxazB1cSjNhz1w9Exy4WkYPJvpcCujyf9CbwRJZcXFvYHtMCyUArmYnqoRDVtGqLrWcYJPu7Wif352LKxHypf",
  "key13": "67hDwnyrwrgcLe6SGby2hbKsGDKcZj1NNheR4GuA8pqAHFv3BVFumGZa5Tzv4JhcDLqgnJc1KRq2ZqbuUUmnFz7w",
  "key14": "2wV3JpKD3vpMY7nsRs8H6fiQYeQWFVFEXFV9Rhu8pUrDiiV5ZGMfCcrHUVqf5HG2k4ugsf6Jc96jnpQwhqqaj2kY",
  "key15": "2Ft6cWdfLHemKJFo9KFowmpiXJc7D1eZ5prYo2qULY3ni9NFUvUt7HespSgHY5LsUWBDz5qE6yvsKxKvvg4JWRsi",
  "key16": "atk87KgLnry2pazhnPE15p4saiZo9kdBkjhACG3KKeMrQ7sKJC2orKUSXfxqXnPUPVgNsFMwKnkBUUMbrcc88do",
  "key17": "2ETz2zZkBEqW2YQi2rvZ27Z2BAtmob9CgsBDevSgm9EaQMxSgTCohXCPqCTWKbH7NDv6PGcBr1G2ASF5PWNghF7X",
  "key18": "6LwaZg9wVNH4M1UwvBaWVNGYEf3HB52N9Wp6UC4cN8WGEHxCnhxhkaZZvEAgZucApxfQGT82ZVXB4EtigFfFX9A",
  "key19": "2JPEiP2jYCxnrucZtzSCuAHk7XCWaZVz5FHvTD3AU7cSuicKkNdrcNFNj6YrB9PCQ4bvf2S2GzvhvBfGt9MxJJcy",
  "key20": "5d1ecufWp1uTPEAvRUCMxfwqJraaU3uVwqKyo31D4L83LLfY5aZ1r7szQmgWsmvBke1THgABLLyoSmpgS3GRK7Ht",
  "key21": "FDuT53yJiMvxddHEfgZhK68CXheAWT8pC9nKy1SNkQHqFc99trqwkbAfm3sc7C17pt2vcq8rLBAuR8nqVikAT66",
  "key22": "2XxDVbnEje4m46XEat88s1Jp4gQ1gZDZW6Z1pWfoPPsGEKjsMRCxkUZkGvh6GTCQfGbnxhCzV91V9Xq1q1NNs1md",
  "key23": "4qaE4KNhhPFjqAN1wKRdFtZRfjAeRyiUk48UwMqu8HM6T2miypsLorY3fG3HN7Eh5zf9azrAKy6zYzdhjtsG2oe9",
  "key24": "4UUwVRdSKe5KqurAcHumLpZ9XPj6e6yR276QebGQRvoxAJXjZgrFaT2z6efWGDTf5NUoSGVmRNkdwnjxDEY9GkW3",
  "key25": "2y8uEwFy4bCxdQGNrqFtCGLZcNrBzf96eJLFizRgHFuXCVHfWSwHqPAhRodG6BWBHSxGoYRRmhvueXZbeskPV1wr",
  "key26": "4GWrT3AkeUwtfSRetLLHCjgCMgtRyhrfftkZKQdeLu7DMhqYNhs7VwnzKTJ2522NJmqxSkthDDiktfcpJFaC1mJg"
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
