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
    "36VZ8pdKWyBsEuN55VjNi9GdBXR7pQY1GvCz6nYwHouTyUBJ5hLF9EHU2SyFbHzdQkG5YyUPYNRTtgqGg1ME3HV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AnX3HwVhGhPaEJuxwLUhX8UDizXmhVHmPfRvyCFUtmb3nmnVLGRvtM8W9KVvjQmmyKaNwoPz1p2mzBbFBhP94ti",
  "key1": "5H3tK7uKJc9ktg3q1jDrQ17mEfbtjTGQ2EMDNnso8qRfyuqSB4wG5hQcnHVBBA8qVMwD1q71wDWHvRv2Qw3UEofw",
  "key2": "cqktTL3nE8g87jFipHabSdUgydzoTfMwicsQSS5q43qroYpcrAL7yZ1ittYPDh3pU4As6UN12tKWEH1MnSfXR2Z",
  "key3": "24FppND7AHFmHYnVev2Pj18xCRb4DpkW76phpM7Ezfu51UtN44cwQhbX7FAHHpPn2HowzRzKeStJbdJ3vXEj75mQ",
  "key4": "rX3xqZKRYx1HLAs1qj5HmerryFSe64p4Xygqy2H8exNDUeoji4ciuV2RboaFxbDQzizMD9wMK9HNjFEYinDwhfD",
  "key5": "5aGYxbmwy8RSQQ7u51rPvdYqbx8z8SpcaW5HAPYjyQHrdg5SFbFNn8HSEb3HyMqTqgkZhfrwZgVcN7rJDp7QDaRf",
  "key6": "3yDKzbwHUiQwxQFZQ8K8PBz4K28bKFgKuXXkz8PaNZQ1bNaDpEsa4EfuVAEWjuZ5thv1yrGXxUV1UAqWk6UDtxiD",
  "key7": "3f8XRY9EAEMhtaFQCbqHinR1DD7zCD19x7Pstqpma8xafEvi2ihaNSGtbQJgufZy5E6qi6nhPd26MgKMwvdcL97J",
  "key8": "wVPmy7H52RAzGzT35RRTvzNuZo1m5wCwvLKEs29CNoTBJsmGmf8KxsM6Yi95bYLthBJwd7s1YVFKBbiMYzhucLx",
  "key9": "3MqXCShRrHa2Zs37qwJLaVUAo6U4KpNz1uw1xD5R8knUy5awiipan3tvgw9p3WfKGrgDAhpuvkjQunGuDfUFBm56",
  "key10": "ifgmNZMZwuVHKBSfDHm7yedFjy5ciKxs7CEcGeGgBqFdCy4TBNTsKdXE7SE8jR72hbMQKSrpjnXgkfagQijHh2H",
  "key11": "4DLXCPnUmb4GUpvH2xKGqnfqQhBwCxJGhJdGCqNzTrEXhp3uTxgeRyiyig91Pv148pCNe6ZnsGfQKEMyc4xy2eg4",
  "key12": "4Tp15RY8ajoeLqe3imCsiPqRfQVqbkiZeBVchhc6CTHqEbdpWmCbH5pQ4XEdhtP4wUtNyFAf4X4P4FKTGHdjRPrn",
  "key13": "3ZuHrB9D2pcU344fYB17YKKPgXndDdaZTpg5iRaCZZYLzN819hdG1C57mPqRyKaNB9eTMCNfetBZmg7jWzDjNJir",
  "key14": "KwkdzjVYgfQ3KZQPiTYuuiWnmJ5ukH9WFoztYPnCb16LoC27yzo87XmeyzEd6V2g8nnVZEeskQ7WPYYr54eLAWK",
  "key15": "2UsSmgwu667UiQghVfj9mfiP7Jb6ADZT5MSSGZYfhzzTCRvSNsATMZqE6N6f42w2yYzEMabAxohLZX676F1WqkuY",
  "key16": "3PGcq3SbRGvY2kvVwwjpZXHbZQ16YxTUjfKn3pNKDJxkQd76VcfGvDRRWyEfHbPS4NaMx6i7roUCnHAE98eBPWNR",
  "key17": "5kDpbRRbvrRamF363FJmwBhzzG33hxz1g23N9siD9EjZtXjcWEmQpbxtSYdaV3satjS3RDVnschXFGEWNTEjPDzt",
  "key18": "RdMNfE1RUCf46c2N3qRU5mhg3ofVFcgvPEaDem9497Ybk1ejCdR3KydHEUBhdjHC7VrE3bNPT1p7SZjSCcofd9Z",
  "key19": "4Mcae1GYrr4eB3H8yStny8xw967XUPzHo3HFYQR4DcKaHZouhn3Kiec4NfVjzmHSDyGXpfVT9RoHVY7gMPBNUrRq",
  "key20": "2PxSatJKp7FpJ99VNQQTVpknfKhMGPh4ENqTMqmS6HGzcnrNi2bR9dgXausyUy4AmGDFjC96ZbwCG2fqjrHfsp6i",
  "key21": "2MAjDa3MpwXwLNVHX4dFeGzdDuhQeUYtW44Ybpai8mhcVFsf4UTs4TiiBjf8YA144F1Fy8fGg4a3DHiRTUFNLrNw",
  "key22": "BVACCWbPHAGHF94d6sTTYJau8mb2saPEyC6qXBH5eCZKBiZxHjvPzj4wke4U4sRpPcuFaPGtKqYYDJ499RxRTCE",
  "key23": "Xx7avme84ds96nuayPJkxPYeAdo3gs3sd8CNwjRVzSfzpejNCkjZRg4gCqLzWdSDsCez2psPDGurk9ntFJKDkoS",
  "key24": "2wB1gXpk3BoRSdkm66PkMmDBCbNZ6cBM9RrRKEi9iaaPgaAuHU3A8YB2amChSexNSdSEExcR3zFkdtfYZ9Dq4Pri",
  "key25": "4xdgPoC5gQxqFD2GkPDuRkbGuZJ5EUV6CaFHxBuuKNzF8faRapcV6tqprUDE4YrPqRttNMbeZXzWjCt7huGvnj1q",
  "key26": "3y44TGWq9DefMYb7K2CfipdmTDrPm8Vw8JgSr3oh7yme4LrKxnnSxfFCVavc66icw5nY3kT7hqrvWzHkFe2QzCSo",
  "key27": "39MRPTgCrasMFpQtcJxa5S6vPXgYt87cnj6AFQceg1Ki3dnSthjp2GdYpFhSJq4iQozxWfThdx5CW4iBTna9krWq",
  "key28": "3X8bEsZzsUo13nWcuBy3ja8LdYvxRm4qRgQmZuMR8vSUrTQLeyiguwyeNy97qKbH46crv34BGpTJkbzPDSiNorfH",
  "key29": "21JyHzKugF848i6BkJs2xTMtWXEfCCH5NU2z31k8tdEpCxr6rqu67SmoSmjy7MKSGCwLNg5LyocLfVBcDKPrh3PL",
  "key30": "4iybb2ZJaW3tpmuxcP9fe9MvWr6CK86mU89AqXnyxaNwiVDNbeSEZCGR6YEMB2rR85RH2gJLGan1zTnrbntqu6c6",
  "key31": "4VaqdbDdprtrR1TexkiHFpvg9dSYyhx9tzsAaG8Ka2RqWmx5EgT71zRf5Uv7EgSwDcbpziuZRXiueXWa6b6y6pGp",
  "key32": "5M9rSwvfJwypFR1zj8xf4vhkgCUZusdRABeLttZNUkZKaAoE81xGEUZxS4dCGnMcXFUeoyFW1hmGr84sWyhv5rGE",
  "key33": "4R9BjDPA3z3FxUkTdu4VspPDrDr5Ay4rEzLycxQ4v2yPj1vUqFpcujtvwiFtwNEkXZvGU9KXrqSLDjL4kKwuxC9W",
  "key34": "47SidymRSWXP2YGSh4we62XqmtVMdKsEciBHf7nE2VzfJi6jZsXqTZF4ta73bkVuW9xBZmBvjmae57qLUxVKFvSz",
  "key35": "2mY7wuLDnZVBPxuoQBLp5anyZjoUz3WF73c2zC81XK795x3uN72SUzYMdePJEhCknLznPdhvMd3vMDVCBbuJe9pH",
  "key36": "5BsXLuJoJuaFyXixWCqZBEUc9AKhYjyEqgCJdUcdnih5QN57dmwYzV1HAfQWjGACfTrCCiAevPfdDR25ackw4pHc",
  "key37": "2joN24jiFtcEgsA2qWsffUJ717gwCaxFkQjNXgiPoSq5nTwQ9bjpBubJdB4mMFw4TdHSjBvdLxzg3EGrKg2FvSyA",
  "key38": "4xMHkMVuTbx2uMFNcJMkbwS8wmJXpjx62tui5Yfc17cqCtE1uHpvWDhP3LSNm5rN9W431KLwMAyNwrgv1MMDiwXi",
  "key39": "31hXnjckNBsCQiN3iEsYCS3nx3sBU1FqLrFTwDt6MLVKFeATKeEU4aSvJkhv1x2ujjFvcd9Et1TxzDsY4Ze2YNxh",
  "key40": "21JHcmBRHfEGkudjBV6dygzYreby5H2CoQHa2TnM4Cpo6mEi1V6fQDN3FSfGfYZ8Axd7p3u8bR4nNG8H9t9XHff4",
  "key41": "43vQYkejZ7pzbhTfTRuY7k9CeM3TP5rwkddd4yK5cN215s74N96GWYE6aZ9sjaX811qHkbRsaaVnV5piFamEjQFM",
  "key42": "2LYd8uPg4tZ64QddgTkq9PmbuCe6AULRW5txvzD6ejsZsE18MNUEdfbDzcweKQh2NTtrTfNLAGuFCpQ2HYSLse1w",
  "key43": "3Ztpi7RqmzqRrP5SQegGLG6hBUFx9PcNXQbPLjhZuFDtwHjV6rXkNSLLqaK2A99gGpTTuw5PcYtCcQZs8wC5cu7q",
  "key44": "3ztRDrf1vCQkwgs55txP39CkNAokps6HhTnsjm9Xmp4jJvBnaYFqtJFyZLvs5rFuoRWZ8U7iAanyVtbP5YGt9Cr",
  "key45": "46FkrTzUgYKzrmFjVtMoKMwGBz41GLGKr7TfERDW5bT6eD19CWUDaMsmpTv7LMDHkujbCwoPqV8HNi6KmjngRps9",
  "key46": "63EetA3TQ7zHmJ9C2gLCsr3NtbNmY7tFvnTfU6KetuqBQHiBWiYrsHghPwQY711N8XVRJJ1L8qswrgqDzDDV25Ap"
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
