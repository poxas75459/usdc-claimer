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
    "5bNGisK4rYRVgJjYN12gYyo6GqsL8BmgWeTAiLPYQkczU8231obbogTYN2xShPbBVSXkK4bAbZgxU4RaKdQ4F5Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ydtvqfECETD3V9WuE8EdVdrqXmGUb114m1aMFu6xQkiRT6fTb4QdsZzJUxvznntLvio2M2acdnFTDuFZLDY9epQ",
  "key1": "VVVRF398kiP2pAd7F8HbjxLWLYhYn49SvYE3vR5Fb7RCM2vgq5cX21qUUkRUq7H5ZXf71J3GcsUKCXq9GbzAB7W",
  "key2": "4t9HFd6u12henDkbFnrbfWrdC2FJUWqmtjaGLVAbTkRHWEyHQvFXiSuE4VJvqCsGiQDns25Fnss444nTnRcB6Fuj",
  "key3": "2Nkrnp4XBtKEfQXroag5VAfAy8Vb27YyqkVA2ihtt6aJVL8McmoTa1SQpHHw2gwUkRkr4DW52CGcA7MfWHcjPEvp",
  "key4": "ahgthPRiH5eDARQAZAA6wexWo8EKRZcG1142eWKCJ3529MY1WiL4hrFXLZMe66hWCTcmq6AYBGRmojMtA3FSb4R",
  "key5": "3kkByYoPUxNtmboxZhTNg3YNVaziQY9sDerV7vWRnuYWdDPFsTSNRZKWvdD1Hicau6p5WdvdwKkeueKn6dXuyMG6",
  "key6": "3g5wWEg7qWWYeQZEPG5LcHRsmKn2fw9Crn4FWSpQJ6vDskQunkDfzUqLbfMnb26vSRB4hqcWrUZz44t9TNk5hXsz",
  "key7": "21jEJSvd34z4z5c9qCaUnhogbCaZkwonoNM7whKzgL27Q6BAyN8xYT8uykafy7VFwGEuG3nr6maNkxVsqRhqSENm",
  "key8": "3TEBp6H6fm5GHS27imGRUpqPdVR3dVzoakrcbBXFioU2FfHDHRAGKtzRgRoaYbLrekboL3Cf8UdSs67BwWiFPPoe",
  "key9": "FLK4jLELQHc8tWRqg1KGjYDivTgNvTZ8xQJpBrQovAy2TRVqz8tVCgi4hAMRP3WqmGMFM2YoJ7bDcMLNgxPWUrx",
  "key10": "31jc4vkwDNtcn5grJAc2NGoF3tEyGutDeMm9zzAJL5SG3513f8XCJGULjePYMHEZP7fD45nAxAdxu6caBCeTt8G4",
  "key11": "2jkftaBqXumgAAR1hJmr4pXC9tLkjCdbGLKe8aqUq9Yq3SwwFsj5zMpk2kDM9ZjWhv7gcHm2sjq1Tc8ZXcLQS3XB",
  "key12": "5skSMqznVupb6hgfyixsew6gvt7Ahwo74JiDY2RN8kJTLPXkT1TrhGEPmTwhKAZQN8fkuowM3KAfyM4QKJesJrpC",
  "key13": "2mzUCFPTyEE6W6n4bD9fbWsLFkm64EZ59Y5C1sXnrB7eKCsj2mtwapXGqdKXt8ALB2HVR1dgtxZtD8yqGfoCmrPR",
  "key14": "4BS8KoEj8XzR8vFY1mqcLM6HwBsoJ4vaRNuKu3Kd2qi7N16dZ1pgt8Poq4NBt3jb4418nxCjUAahSStCJb9NcaxJ",
  "key15": "3bArq7piKka7PqGHxznYmc3YnaZEyKv4EgvmEDxUZC2aiwoktJCC51QBWGniLtovjSuvBSRnmku1hHR4DzcrmaCA",
  "key16": "32aRbeVczXAiKtBaWdsrmLSePQ2gMuxjvhnRQggX8nF5R3hXtoyJF71JEKk9WKK84jVgqngkaBmPuYddPAS9jf3g",
  "key17": "3pR3v183QR9pVKAxjdcdKFCPRspS7STpS8DMmBGDeEWb7T1dWtU7HAUjsJ1UXNCHhFXxXVUSg3LBQCAhuzR8JyA6",
  "key18": "3gRfhgFwR6JyQFHGZE7wVgNMhfR6NfNoFNXergUkzDX4aLebop4LeENwNCcDw6caaY6pBDb5aWNSbnvfquzNKftS",
  "key19": "2fwfVBV3yw5BjNHduwJqPRSwcmoqTBYRGJUbcJCL1wTALBQUS2j7GXYbkPygjJeNGFmS99ME9BYES8acBz9eNQof",
  "key20": "sBbjgiBub6wG61mD9fsVuUUzdHWAoC2keYaq9TgtoGbKuHYMxjm2i9nCnUmxaN9YZKdShG5KrBtNY9LH6LDBvWk",
  "key21": "3xQquMVTLPQc6amHY4XmuSxLwf2HawGAZAJitAxjyRhAbRxTWkDKodcgK9oEpCGGfd4hXqqwgCeeL5ATc3jLQ3qQ",
  "key22": "5VugBCt4SFfRkDY9NWMvrfGAUnGoN8WMb3fEJwgKk2n1Pi4DHbMNSUf4WMTQa99HvAXfNT6EMALKWGXzxA512GZf",
  "key23": "5VyXXgf1qoK7u7YmxATYkdQh87aUxeAdJ9DBmm29X5nGXPCZ57dw8hZYKpoEYn96D4PNNLDKmREBEgZnL4bnizi8",
  "key24": "5ffS7V8hxgVdV7UYaQQpr44tUEEdwCbp3iTTFSKRGtrSBy23r75Y1fbub56fqSS1Ni4TQsTV9eQtPoNPjFmduDtH",
  "key25": "5Fy7o7Pt9tLrEsw5G76bhpxYfPZ3pko1sJW19QJJSJLrAdJByLqq9DC9JaYN3XZSZZzq97RKasGxnCA5wo3CsbuP",
  "key26": "4H7RZ9EwwQFfQkfCT4F3NWfWf7ZmRt4FbPxrTbXpHcP8RgF1HdMRfdjiEWoZxv6dcuY3DBJhv9iFen5GDULFN5mX",
  "key27": "2BeC99ssxNqzxfQp79ah7FpD9x59E6RkZtMgxabT1oD3ov4u1kRGfbgtt8Ckdzwg8u5tDQCt9gHh14Jhoa4LF4cP",
  "key28": "2E377ypBLsPLn7KPQn3qHH5sqLj3VFVjPt1GQLQeZRurFJXnnvd6JL4kX8yLXj82V3YBweQdnSFqTv4J6yhhrobL",
  "key29": "4sn9gZMB5zjbHKc7vSSVDXqbzrQ1R87W1BXYiq1KWMUTo2FNxiKpv1SnD795yXZ6DYCwALLsnjQ3rJCgeqxQ7t66",
  "key30": "3oaBRyUE1CWwT28C7GXRLncARkUu3QBCJhkmYh3MqWuzciwvssoJXzdqeLpiDZKgRbfaCCb1t7b9hrKgrXhSmueV"
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
