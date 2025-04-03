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
    "3HRXL5j5KtWgLzwFw23W2dNQorWeybVPrqSu44H3f6GFLBfjdziWVNfR4X2swstQaUCM6w1MS3EmpYF1JM23sAts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAR8PpUXPXsCUwcZ3XjmaA1BfWQjjVZeToCDgYsfJ3XUUcpFbMWkbSQ3EDuNUaDGv42RWpZrAdM4ESqb1NyWkEW",
  "key1": "3byseNf9YBS6vCZ8yFmkTAmAzDnsUECY2w3afQRFDRzXGiu6AwgQKjoHNwrRLUDm9wZW5hmV9ie4x9ZUahWKsnyf",
  "key2": "4AqGvb9uDyk38Au2Zv1jBzDJtZuC7st2CZtohqHohwTyhsb5TNNJ2bjpLLu9FzTTqGwLzB2i5D8Wpik7GjZfdXMM",
  "key3": "3orLyWpPDsrhzvwZLfppUbqCUG2LxzG7QZssgSc7zWJeq2GpmYwHmQk8hyKv1dXQxqaNKsigzkuSSJvDry1daP83",
  "key4": "2UJA5agViDmRMhWNEAW8RS9GYKPg82J9HKT8pHoBVe2QcKffyGspvf21tQxGGphuaX4BetXUEgCo5DSjcdiaGXv8",
  "key5": "3BXqcRrp9g4hAKDng85iwt8AsbJfbcDeNSTRefTvR7EWLtCGPBdgBnQo9GhrjNAqP8Hi3QcQtdrQAJgQMGZRbFt",
  "key6": "4oKxU5UsXWpkAaBJcFH8FwaRwwnVuH8dwwiQS68S6uJGD5ZZUqMZ1fWfMwisXWxqqzoPWAn7kaycwiGE3do4er7f",
  "key7": "2PhiMwq6YSU9fj45i2e7haRhNNGfF2LFtw8tF4JUNh7We9g2KWP2Y28swYtvrdyeUppgSN9UJFyhxp8DgHkhoaPp",
  "key8": "5AJrvPEheE4nEkac9A2xJ8qkjMVKEdDoPNyYfimzffHgSQLXV3yFVv9Zy5GbGVsEc3FyUAxUC1mmkUUD3h3Egvzo",
  "key9": "4Vb6JdL7djsYfZS96s5sHQ9K2BnAdJdwZHrP1d3dnB9oWcjrHgYpoFDwH4kVa4R4S5qbxgPzxigrAQmEsDZC8xtC",
  "key10": "2mzZW68TtrKT2JhWzWfTVrhgg3XrkEmz2XE4NFQq8AhqjNwHwTfW1xTg3skELWgzo2xKsSp4WbWnigmB8gnaVgCv",
  "key11": "MSMDGHfQKwP5GHZtUahe8PhdNzrRdXC3zPgofzmrEaThQi1C2zcTWtrL8xCfBteLShFFkoP3KBETsGJBX3KthqV",
  "key12": "5zafnVpks214FLMEQ991QRUrU4FBhsA62qLS7kBACcztXSJmTD3RtcQP9ctdZBW8NKKSZwVtFCEsR143rTA9au4f",
  "key13": "2FVDc5HvgubBSHVHLRCaFeo42Znn6QweyRe2aFJemXKzhrRV5NFSddRaeCPMsqVzzzHPeXXjLVTzwURnEqGcw3ow",
  "key14": "3ruCd2PobkcqN7o4HqkaPxcmWUJLdF6xeCUonuQynXQmh2w1FRZa1ZAVe1WgJoPc329peUBHFHc6wZrWX48boe1j",
  "key15": "2F8AnQn1E6WrotrMMBLy7bJuBqrobFvZduSQbrvvdQ47suwUnQP2cY6p1QAAgEoCj45WqqGRrSZjWAo2eudwPpKS",
  "key16": "SMrh6j3ArvCQXjVGp2K12WLB4rU2F2yvnkoYFL2t7m7vrRZmiTkqpNyhTCKcvGwJmGc6ZcJnzVxtGmWkXzDxfYm",
  "key17": "5FKT5LaMxLbabWhh7vvdnN1atJBCVzgTTBZ6peNJrHTYgKQs6S38X6fPkV6RKSVdrXcv2JL2mLWux2jC7PqzEy2N",
  "key18": "3XwaSfnB4Q4vHAQQrWj1LgKvA3KF59oGDdNagDfNBDJGEUexyTChrfzuTdxpRUFiVw4ifvUPBXaeSfFk1XWydTdX",
  "key19": "4XbE8uA8o76ZsQs9aMeHyn6ZxifjQcZkXg1gUcYpv3R87FDX9RhgSdp8KNBrvEDXwQU2AnNGMdhTEfsjfCXjwMLS",
  "key20": "3ME52ed95Vt4vCSseigfx3AFDQ8K2yLAErN3nR5tAfPdzL5h8rpbFXSLSxD71ibJhSdpwYLfjE3P22TvqjUoh2t2",
  "key21": "5twRoXYuui3VD6UUjS9GRriLooQUb3ywVEyRQ8rmSK1tvtea49fcMLezJUJGtJNYogpevDz2ShrbmMGCUiBbqKV8",
  "key22": "6SEzTLXQLXLUKum12RyKVBpdoJmBP1HyGvox7kTHohnSpPXW59yEiXzaLYAybQoijGCskS4wGSt1BsGk5tQMGem",
  "key23": "rsZumavn8V68dwjgHn9y6x6JWoMJ1nfvabjP4Lj44ckHXTZjMpvSxYki3TGGTFaQ3ZJUPKdbSum7yBsV2tApwqt",
  "key24": "5E7B4ynRZLxAxzCbtjVaAkg3qzyFtaY3fXeyUWY1isQTRHA7AoyJGrz8qNxo5s13qhiJLLx15C3HGqi18Bq5kdki",
  "key25": "5xhWZDYYywjG6LjHwf4GHPxaxjkDahwSvxj88niGjEAijV5jkw1hxTNgYre2tQwt9XBHmsHHwqsKouQb4w5rFN8p"
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
