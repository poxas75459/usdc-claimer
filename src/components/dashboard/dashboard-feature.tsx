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
    "2gY7KHNBB7zpwfE31CV4pycn6we98rGQEnK1Qr1GNds6c7vTULnHhmZzdz67bjbiiN5W6FXtcq4T1u8PeQzXTeX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRzJrBTD7xZbYZ5E2mxtsQBH5FPk32h3hhusNQq217NeQQxgnvcH9RQ1N7VQMQDK2HBWhLbWtpbU6KikDX8jjrv",
  "key1": "3sv7qz7Fq5xLLjGnhEiDm9m5oTKG19QA1J17ZxrcQ5CszgwfwZJJP19Lku1Vu6NqV8UFeWocNEHGmPqbREfeK4Bm",
  "key2": "2qmtWEmS6VQsvNDkos5D3pVr6LQxTrWjEzbefco7GS9uTfDf1c9pugKu3bRJVwTaKwNLPV8iLq8uHEDsKsP2o6w1",
  "key3": "2QwecJpaCMCFwsg3jF2cQkmPgToePRfbUDssL7Mdg6JC9xGSUMn6ikxcTZCDrA1QdxJ7AdTwmryfGnVQUCSyCdr7",
  "key4": "3U8tzj3jiWijzAtrEAExBXA5PeRL5JaqphcJwhHkjSkH6agfoBFti4WdfuPQ7qFMNj15RW6FUnzYtUQs8AxBS5fn",
  "key5": "4PafPk8ezu7F1PVcbRENH7qEE496jw5YnpH2wGSoU8sx1T1uuhuPcjqXerSZQZzihT2w5V49mKQUuY82x422hNHf",
  "key6": "3qemMhGsLSD55Bt2XVqkRuoTjKb4wvgaZdk9U4D3gZuUKMKaoWYTBiiRLP7JeumB5vRuynCmr1xkd9n2Mgr3EHG2",
  "key7": "3gziFstYNb47GZwPoyEDYWpSFaPxZqTLSixae8rkmL6vvLtE7abwFfpKGfFsuieA7LDq9Qw7pfkYH3DdQf1ir8xb",
  "key8": "2wq7CdmK3PTToxoFi3wn3YFYimyW6St9aWmGmyMAkxK3oZwLAPRwPF2hyyUPLpC3mfQvksVdau1XrxWmSjrvdBdR",
  "key9": "5ghoyPAvLv9coYbGdih4cpw2aELgEkKifYomyKL6sqYihZk3bb27ch7kTv9yjVrstxVBK3Y4dZoLVkmVh5Bqibj4",
  "key10": "2Cdf5PqhZJJ6Ept1wtjx1nANJamXC6rM1p3j3EEdu328Y83M5nSaNhADjuZmyw6Ge37JpGhgvU3pVcQ3abd2gJcv",
  "key11": "2izZAzCiPCkZyQfGj2xyfffGsBPscoZvrBdgC95rh9Rr3VtoJMnjVg4QJULy9ffn2V1ccgZ1FS97RDcurMfE7k7w",
  "key12": "3gHVSxRDi6ciJDh1122Ew2GFhRJH9UGwkv2DuhZDkCGJLrZDrs95DM5cppELDjJYtxxATpNKf2QHoNxre1RPYqdg",
  "key13": "3VUEwxVTETxjP3w4SE5mBj2gcujFCMa6tXuAhGBCy4i7BYvrktKbu2dhjKvYCJwMpPtDaDq9mWf1nGwKKKGCz68x",
  "key14": "4uTxjj5vncW9tkFzu8Wud23xP3U5Sbo3s2FcsK7PfH3TeVdNHs9rJyVuH3R8L3rZM9rHFcSwXDJ6wrpz63JUQ7Tb",
  "key15": "4JLDvjiQoJegGHfY7ADFN6xXnEf6jrh6BLXhscXbkfh2pgQP4mSHx3ryDKRtY5PXrRBvCpomTFVeQzkFA6TfTzfb",
  "key16": "4fbuGsXfFMTsxUiwmXsrhy9AMiyXFf5edzoNMvsFSapdDBMkpBQXaBhBZ8DDFKAh34yycej8GRET3eoqcxGUniEt",
  "key17": "3KbBNqE8CUd5JB2BVoSBr8jTHkoTvm49JEnyLQUx6e3FdAgnWaMzeSLLUopCc9zxTQRDEDSakdPRkZ7ciLxCFjHW",
  "key18": "43LsxTkm5dHAysKH3D29kgcyQhaWEr3DeM7YyJspMmroiBKXKQKqroFGGkqeEQQQ2hXuFhmuV9LoCV5wSL6tapVq",
  "key19": "5DwfBvL7KPbby44mJWtjXNdq15zPq63qgvbL5dnjUvuhSaXwpecAz2yP4nGJzNazEMXe861PBi9dGXJFQb22rsLo",
  "key20": "3krxCEydYpQ5HTdtQbeKJsEcf5KmaHhy217GG8JbKYBbxsSZMasYnDyQ1pFyrqULtRdvReZJexDG7mm6jXt12Xn9",
  "key21": "oubfRZ1VLLqLC7etTH5k8aoCTaSYPkcogb73uLBt8XqEusb5wRSY2zibCx8GXfAC1cqt76g4rkufTTcvpm8VBUL",
  "key22": "5JTrbEjrFwaYpjygTGE3CTSiB4NJ8aB22WswNf5KgRsYWEHmxzokKx6UEWFWrTm2jbkB4jMT3Nz6MKNgGEYqbYwF",
  "key23": "5GKDbjfP9n6q4CYRCF2AnHyqAZfs3DUu3JwF6rEHp1YPC5ZXM7BMCf47Fc5mxnogwvvGo4omXRAQDmsQxeuNWTEq",
  "key24": "H4o6uPVWj8652ZSPMfAXMTif2VgispmwZ5o6bAituiSopA3j3sNnFEw2aLgBLRyf9anCmdw5vu1Q8zFjy6d38Hi",
  "key25": "31GrMkaADUmVUbW1K8W2YtoN8wNmw5xuFecqamavBJDqWdUQWZGSm7nRkE6gJ4hyiNceSUWf8DGDXUCdexBJrYtF",
  "key26": "5V4AVYSHaK468BcjJhDRV8uetsDnNsNVk9MVrJ3HJE4PJXijfg4v3uXDKR7WJKHnDeDZCyNRTajJ7q22VWbSpjkm",
  "key27": "5B8kRC6JeuRhvrB9hVzMzcNHAu25sPz2RqRaqCbARtytwa7TT2jqoTKmg4RJefX8DuprnWj1G8hZXaUpe1kqkekU",
  "key28": "5HoBuGK2fHUxsRfTXqrcoVdVSiHncpLpvWAkWN6BzLtMqETkbxptdU23qQf3AVBPpzvEbvHYceRRVqSm29AyN1qD",
  "key29": "237WwH2iYUu2iecKMBBRZi1SYMuFeRBwfKK4ikTBTfpPU7Uf784Q9fNRMQJkNrakDN1Vfm5JuRXT1QwkMVZak4Pw",
  "key30": "3yVxMKfF6EwiacpJJbGbK8uxoD2wknDg1DphhhTo1zWVL5LyV2bKWyvG9qvZjX2A9oHmsndtFjA8P3jXdsZJYAXN",
  "key31": "3WD2CU4ch7wHwMrHwmnPUaWxev6gujeypwit1f7wMrFB4SWSJe7xdsYwr7VXcswqWevXwr898xerZHkMqVPihDow",
  "key32": "5J9X2EetgvXUSL114b2pXpW56K7kcrymHBTRUdQSayUxQKkXdzzrfv31tZLaSNep59h6SAdQmgZatWaiU13uz7xn"
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
