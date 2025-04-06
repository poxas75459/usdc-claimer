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
    "3hx6xNYgP6tbUvWz6xoKB9J5hMuiHcYimgLwYS2d2qLJUMkuRVLoMLuH2yva9A27S2LJjhsoLFNuXn3j4swWiHZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59D3Q3KiN1qygyLn6EZrEPo3MgbMoQxeqNvfE6zPbNMv3gRN9jbMazUtQvWb1z5WJduP4KPiBkKAAQCUvKprN61q",
  "key1": "4FQiTSS2gGmzdVsLHPPvKbZgv7diMkqrPKxtPtjB1smnZNaoyyj4SQxQnyFNjxAMYuxPiL5GYGCiXXeJb6bTR9pM",
  "key2": "2qqzg4TjvCqfko6qAw8tFz6MpyXyazoHfiw5VaAAPSEiN86PRxurpu5h3K2xGsobCdzVZV2Jn5XxrTK3mwFjyzX4",
  "key3": "56XyCUG5qEepcVwEgyUNMf94b5Qpj6T4EnkLFP9SDSHS7jqLm7dcLFkLa5Nx2cgghzc29Y2V4jwAx9R8V2CD3Zwy",
  "key4": "4KFwgfgHZMdzU7zixzPpgRKLDdh1M2w3DYf7PBNuCfskjT1Bv6yaTZhEG1o5yPeKX8ozrnU6jEe6X3MYFAaJFVnv",
  "key5": "5GBJX17iQkiMkZDiL5zKf7LRPCgtbo72zuzcsNWu7CEQsKDBoSsKABPCe5NqRSM2SWWWWCGYpS7NdrZu1wyKwdng",
  "key6": "55azKpBqEaMtL3JbX5mx2wL3YUZWEQcfDFD1LCxh789eGbSTMrZsKwXABv9BCAkceQDXADL8Fzv5LQBk2TafU4cE",
  "key7": "xBwq56TE9tGfihQvoZJQbQx5eZf6dug2R6ML8fhgdSZVEjELkk8kcDqMb1ZqWJRf9kzWhFHvDQoqQWmQqHa9P8X",
  "key8": "2Asg3fpdJDSopZSNojftayhm6SrERxQmZ4M5erZJPpnag2TePQnbBZxnMeLuCEeMii8j9CHC5q5VsCBux6ooBgrn",
  "key9": "3USkMYTNR7USKqDWZrFcLsviSGdTNoPwP21bY7o7mv2DfAjwVSPf2uP4xjTTKVRci6vhvnpEmYkjXeY5J5iE5Ub9",
  "key10": "3KVZc3smkeSNS9P78gZ9pWS2UF4esyt2WtiKtodizUwTzuy79UN2KEjtZv3kZLv4LHL7SofZuqnxbK5pcicnUggp",
  "key11": "4BgiNYv37aWiyXHeh7BgUwKUDJMMPJ9xKqy8wtbyRPUzQBi6rUVn1Aa5a7fVPcG4LZQLvEtZwsNyiuyFVPVxvpoF",
  "key12": "2RM4wxUKVozpteDq9AtG43DbXakr5K5AwxxKsm1wa1RazxraiQoaosdqcxxHwXhQZ8s8BTPQJDJZ77wMYpN1Vd91",
  "key13": "59N24GgTbhMMymUH64YoV7HFASJskjkMA1qW47j7VdBLf3693Zj1dHuaoadhGMv6ihQGmmhrhyLvPMC1DFrz8if9",
  "key14": "GDwkH7tECuShSPNRVQCHUCF8AJvNbYTz4dUeFG5VpXRVxSNYg7wbeCJvihT7M2rLuADAKhojkEFn54h1k3je38F",
  "key15": "3XxHrsBM2yXqcCbWiDpdMLbdcKXCLEfXCYyYgtVQ3oBxwdBtVALNdb3yW66CwRE5hj8RjXMexfewJiURgZV7Eort",
  "key16": "3EUbQmftzGpS5Qq43PgTRsVmLukHz1v5PixaNLD1fLqYKZHxHtFfyvzuubxMEGZBycJnRobPZZgkajtaPmu4Ajys",
  "key17": "24EHfPVKwnKz84FgupsByqHMpEocvaLACgNRnxRByYtr8X9BvhrzGjNkDdo47V5tbRmNTzvcmJcU7Mo2ZEqnnohx",
  "key18": "SmSgj6Lj5FRz4d6Q5q6FdzZJNAoBWAZBXR1wCZpZSmSpV5THpFdTfRMVwRnfxcwVRmqCWhTvvEaEutKrum1iMqw",
  "key19": "zGLuw5EGukJUtoNWLqvdcwctdTZbSPLTm6eqvQ6iGobRXuWMF3zBN8qU3fFHDe6AHhkCneALT3yy4WH6c4r9Udx",
  "key20": "43woKeW5t7K67CpcDDBtCdfnhjrZuVDg47VD1qWPJzAWAUC8DDKiNbtakAZtuv9UNvrFJ8tEBZp8arbH3cc8Ewiu",
  "key21": "5q13Q7b2YRjWPtbT2sTFCsU9967ifxCW8W65s7G5o58hrzMYwXaL3qBWsxzKcGf9vuN38J59G2hS1EPhxDeFssBk",
  "key22": "2iJT82qcFYgPpbPDmsCkrXXjUZ8MMfzdXV8g24qkboBi7dH7LU8HMG4mdCsV9pRDCb1855G72TnZoRL6qDgPenVj",
  "key23": "3cucgZuJpPUFkPnnd62YmgfVdH6V2bUmkQ82yThjSSUycGmrsmdjArWjQdB6hgTTRwcQoMkc27UYp7BZG8FbiZTR",
  "key24": "5TYgEJc34Jv55sETpj7YvqcrxQNZUcYVN6sEaQRjJjgT4xKtdf84qt21pRHxJeWeEA1TYw6G55kkrW4M3TrRhu78",
  "key25": "2CWHCDUP3mrmwoSq4NaTYCwVAcRBP8NaczZy7U1ksuKaHi5fLmqVZTKYMgS5ukVX7hFW1CBdftf5vYHK3RpnJWA1",
  "key26": "BurViJE1fx5jkT6d9bpYvRBauTpeKijzJvZRG11Lt7BtkjAhLWWdw5YRuGHDtH74yPFWJfxvKdWa6X3xqS9eKpN",
  "key27": "fh2AeoJVQagnJDSw3tHpo98dWJkREZNGjfeh6DbY2n5AUYq3m2A1gFMnD8CyTUTDdwLiTPiQwa6SnA68i7aVS2m",
  "key28": "3i5wKLLV2BvG71G3MSfbUfngsne1VtZEBiuCc9faSXNUKbJPnd1UJk9m8k4H7Q9dXthCrhb64yawZsQ88TgWvuy6",
  "key29": "EyM7JHRTeZUutC4JxEgfpz2ruSVzKdqzhowJm2DQveoJm1DyBsTBUrxsY9fZwSBCchyqpWJfsAD2ZUKkrixYPNo",
  "key30": "2RKt9MYbQkBp1rG8kPcH9QqaWTSmhEAgTPf1UzkbuUrYPqYnXZ3P18R1ayVMQDWKw2mkAxN8Rq7C3jJzw9V3Lcbi",
  "key31": "5a1YWwHKcSe2FWoMKGkRzswNULGPagYycCRTkBkLBdj6fzTiaDsBrboSZbj1q6vp4WBUmDpEQtfQ1GGGZ3vk3GJu",
  "key32": "3XGcMLX7eP29nvKsVUA2cZUP4fU43W7p4n1Xi1krudbdVxxMusNdd63ryCFfyPTK8W2SQUQSyD44hKizXJMnvcTY",
  "key33": "3NP5Z8Wy14NyGNgy6HrUnQTEesxAjLBNtgcjchGNUQ872PWYodNUnATdkV4VVjWG3Sx7ehqw8utSxkJtAH1XAB87"
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
