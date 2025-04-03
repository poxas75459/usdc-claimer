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
    "3Uvborbqd5XFczfRwEaYPqgkWQsb6MaPSq7CAidPUaSKPWeBPcRrzE3VDA2avCCL18tnpPpG1hhCVzr9XYnp7cQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33tUUY7GyTEwL2Zer9faoHsU2y7STwr8Xt9xAJvzigUyKMgyC4GXzxSK43PdfvaRvBoqLtdwNgj1Epg9gXkkoR9f",
  "key1": "3UbsxUYez2SpREyk8vAuBBzJSRLNfpb1P62vkmGrjGtivwQUE6vMLBa4FmHe55RsLzcTSHCjLRGFGBqnxR8pVnrq",
  "key2": "4o7M5cxwBf8DNv4q8W3wU6Wi5S7XP4S6FM91ZZhcSr8Wv5947aagYoAsanZc9jxEonRxxgMcmKj2CHgqCfCE2ZUz",
  "key3": "3XSbNyt7T3MiximPzNX4iLZv9WPXGPjjvi1PXrePY12Ae5AG6pEZGi4Pk7cqr1nsHGZtTrqvSxob7bpkuNPPUPhu",
  "key4": "4w5jn6miFVYDMLnHcSreJ8fBg18vWnWnTk4n6RqWSGJS95k8TiEZ1CnSfRK8XprfityZ2M47SW9HABjuofyiE58k",
  "key5": "5LQcu1BAxUztAamiqYWwymitgqhoLZhTp5PzAoY5GLRava4PesgnFHWj4J6tprUEN866aoVVsZ12yM4xij51CnFz",
  "key6": "5ay4waQxSUaYxW5XWqBLgiV3Nf2QojyNpMVTMNSoLcWP2T9J3EZHaXw3kwLdmi7tBMtwFhnctGwyeaJX4VrZMtez",
  "key7": "merRBuG7nxaQ1UeBwGmvjmJG56LX5pPj2zd7htDqVJJ7RUo8eiQdV3nqhdk7deDjge2hK3b4wXCg9e2tHvkupfZ",
  "key8": "4hBq9hqLqTQenrp3SZN5xqPKtkR3mWSdNeY4U5N3eeW8XBECo1cQs9vDx4PxSqWh6TmJcVNhTMbJJA7pHvVLopjN",
  "key9": "4tdChL7hp2MjvnEsDkeqRij4crwVfZqcg63GFvTe9Ho29rsyggdKP5HnVzD7SWRpnBpUyLoBT1DerLgRdc36B7kK",
  "key10": "oaNZUvP4LLxKr1AAfLo8e1u1ZvVqvjFt8osDYSAc9ZGYZs34RMTgc9Eu43c7foqTePHxweiCYJt1unZYdDzVaTt",
  "key11": "UyuK4SRJgJZoikMCrTj2VPjrCEx2wNHPK4iGi2LDozgcDpqPB2TxP8x6sD1aT4vbEs17KGfE2fbPhjsr3NJYhUu",
  "key12": "5unzj8c2VRmPSDtJK9MxzYVbs5mPyuchg6kEWnzZwZsaUo3VK8SNw8a2Eu39xsCvjtBEYxFHH4RDqW3EPBUGvQus",
  "key13": "4m4DnuQF4fTtfP1QhLSuzp3scGtSAYS5GRZ4m2hWpxA2B4M1WL7b75RteBhHCopeaqQxW3hocEgYTwmhqTLSGsFn",
  "key14": "5rM87eq7g73EsB3pCmRJT3srXAVv5gWmUgqk4GtrePkLigxBL4t3iJ3ByKxKJYszYv6GsJKrjmhojTV4TgGFwzhy",
  "key15": "moMzbvDHwxX1TnHJQSP3sup2qeZz2tXytX4RWerKwSrCKHqC4D8W9oB9UjeJKLF4hKABLbfUYDQoGjgcfecXHJD",
  "key16": "5Q2SBVGThdsGBvBcBM6EEjYkvzgj4Nnp5GtqtR7iyRimWaTWRw2RHBjVANU3PLdxiEwRHdnQnBUZJFPvcMcAdXZ1",
  "key17": "31W8Sjk8gayRMELpQhPRcax32ptAm5tQm33cNczfw9auiKe7dR7mgyNtLTURJvut8YB4rEH3tLw8bG444TubxVoh",
  "key18": "KabYXbTPoL1rweeTnW8H8fSBPRddKt8wBj92bSRcsSjbi7KmEr6EM4L4tVJaEmq3bommfrEKccUw887a3Fo5yRc",
  "key19": "5MmZx9VULdoxqDsGWFpgU3QaaMMuJ66vcG18e649mRZqDBv6ai4B1BZ2oFrSH5j4uXyEaXvQB2j4cRVcbqYSy6Te",
  "key20": "3N8TEQzJyizLbN3oj3T6HP5CLmsJc5kaLScBc13yZwfR2FVcGXVMFhwQuwUFRPywTdQezurdzAodGKA7zdTiKcLs",
  "key21": "3j1UQAbxfeLodHjjkinr6favfd62UbdFSUcESQk5Taj2n8YKmkP9KrHfVJxBcj6VdLXefmqPjd9fMQBi7VY8iin9",
  "key22": "53TJLVFd7XphR37JT2avQ5NH7KdLXTDAa58jg4Z8D99r8u1Dbb2xpChaRfd8xgMLjU4pYh5FvuCGZrCmKNPM4YCy",
  "key23": "5v3uNHc2UEzZx11vTwNRuAoT169PbgQHLkcmQ9qis7vVP2BhRuMb9p5tfjforMAWKXFh74MzXoFc9d5CNNyPEVAN",
  "key24": "3vMtpaBrLkqb9nG1DHPqJY31w4YHo4ECaFraRmrMc9v851emYGWYVdWmbroLsg1qk5TTjbAYhqA2TCAsJW6LCSU9",
  "key25": "5hwFq3oRef9QyoNiupigForDKz72B7jaBG1CAYdsG7Rgs7FqxVCaF977YGyquihDw46Uf729xFYsfkehibtNvMA2",
  "key26": "3Bn3oJzebqW2dPtbzy9LhsUiRq7JUpC5KUpdJLTVkA9y35Wnc2mSgAmTAaYmBYWB9ywGM77wbbL83AAmMLCyQLUK",
  "key27": "46QvoxmpVLcEn4cydREHFBczeivUQA6Kd5mFwqdNA3kjnn7Gfj3FHVw7BuUoC8i1iX1xBTWXgGRWKadSHhX6J56E",
  "key28": "2qKr3cL5uc1ADT6JVetDBMT7xCotetztSzsd2QKL2CXJs2zuZeoVUfGbzNadVp1Xs9t8ECCtCodeNc3BwLxsM9gh",
  "key29": "4A2YwEGG2iaVbTyMKy3dz3LxprYzDTUcLQ5j3YPBTLNcFJhXdu5yjinPMk5wgiUVKtGtfu85gV94rhc1TY5dUpfQ",
  "key30": "5EqDDtx94Y1NnJKCP9DhLpXXVSrNiznw9jnyS5urE3ZWaGL7g9p7oWPDNRcz8De2YkPENhnzFJNmVZD3raCW6TUj",
  "key31": "JrSWew9thYP27JpvSogaiJ4XEu4u8b4STUeHNxr6R3bzHU5bdMaSfmMzHkQ2mv4dZzGgveVAvfnkj2wD1VYcDRm"
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
