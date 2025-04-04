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
    "63fVH7zecXYgYNMGBKULQCLJteaj9bGGhCPSwGsuEh36BEo1st2PD82eiEnfexVZf1AzzQDExDRoLV8x1Z6qMQ7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qxr27JSTF8jZRsqUZz4f6FCYBxbWtv9ZnsHZmPJ73sB5XUkSboiMSbkPbBvnBm8CDJBgiGSmHCrpMZqW6RTn28",
  "key1": "32eELn3ZzHCKaSzEWVc5uCApK2LemUT31Hb5PypgULujkwVbzdXJLWiYFD3K7CoeVrxNAPxuCstdaqmUFc5WXkYt",
  "key2": "3LqAJDcd5BX1QEkpTs5gqWKKdup5jPkghd515wJG42XCC5EaTc3dFNeWNMz9HAbCLUnJsNgjtRYcMGwS6qG1jjTh",
  "key3": "646s7YhySv5tcmST2tuFiRFDSjqYHDEPts9oW6eHZngwHxWfU8iVxNsVkFaT8yBgQKoPFktL1YrKg8WxFbLob2zy",
  "key4": "2ALzcHTbTXDa5V99Gm18QvaekNwrUUVHyRankT5mKGvknj8NHJYm1oQooWiCdYheLTA81K8G9SbRP5iGVQHH17fF",
  "key5": "5RAzQHSemqHswJY2iE7QvZGmRkhfmqtcXYhWhR22nX7hMiBUwAYR29pMB8xaztg5zHxVbt3vTFnBisC8w3BNAosZ",
  "key6": "4wVEejGCN2NAKFNYrKbPgU5w53oVNwvccBHSDwDHcRo9GaGfGY1gxYztbwbs6rX8KzEemqCcBfZLc23S8qAX42mX",
  "key7": "4RMjP5ib1exSdMRNpBZuqzNyYvusdyXUjpBaUhaodogFyUopgubofgM1A1uNuX8yzWc6DxgRx4Aie3ZJzStTTRzZ",
  "key8": "66H7PFseA6vLGyfQL6dmLRRU3hnnNmcSDnABaPx3JcF3QcQsSM8CPXcActohw83cs9rAHaYB8uEsmAedw73chW3X",
  "key9": "3Wj1RfHxeBMjTg1NMJjWxkdrPG1bfnpmJPJnrrVht7WrrzMGdBiRQWbFUcrtt3kQEpXcAsKoGG9FeKpDtmAys3xZ",
  "key10": "CKVXBJFLBFhp81iWd4GCB29U9ci9kYBsCPcJYQo6gMzr1wmJ9FJoMS9x3NKQkHmjzVauN3bhjvoSKqwsVyn8QwE",
  "key11": "3QoEXeU1CW4k1VMN5E7H3E5RRbc3vGnLMC64XRnfskKf66udVmuA698B7NhdZ1G461qu1D9NRUevAR5BXsytAnK7",
  "key12": "xZiCvmAY1VhKJRf51DvuM6M4HCzrMCQt12q3QAt8ud8cEqPwNbX5BW13Ssdye9Ux6gkLaZDJFjpEymzywP4EryF",
  "key13": "5VE5fbzwYGYfpt9SCiBicoNN3hbr3A2GbdXMGRM7JdaDu2Qortsw8SrAF2awyRycVNkhEwtWToqky1nV3aYiuY8v",
  "key14": "8zSTvFkmAecaujQfDojHioAv1MwvHqpRoX6Fu2axiyrxuU8V9bXFvLNB9qWzP4nsXN5CdnC6zKEMTsGZZUbF1QE",
  "key15": "3EZmKCVAtgrExRc6cS69PaHBh3P6yaZWuHZudLf2dCGfJiZM866uwYXHx28zKowwaDHQ8GRtYMQYp4gabNBb8xHL",
  "key16": "6QZqHwUPqkKJyNBZoanuhCxj1uAEXQ66rjJNmUVy2Wqic5PwKpFbJ2HvaGhLuWKx6LdbgbnUsTpjAkBoUDhxoD5",
  "key17": "8b3gL3Rpb3Yaear3ZrFGvMN1U7mkgKA9WhvNwv9aoqvxgPRN7tnqGXKx9R6AnQtoce6PSDjpbvCXk6idzfRPxAS",
  "key18": "3b8gaf4rj4XFD8n84BereUPXEooDkzZTdtekWkwsd5XNSZbhB6Ax1uviFZt1NqRELa8GfA1rHDkuKrH1XYqBzMRo",
  "key19": "2PyrBfVBVXvJnauBY2yXyhxwGjxewS75qEfKyxMtYDoDMkZhEnN8UfkcdvdwHJcc3JxwqDF9TwknAXpKNenmMvbN",
  "key20": "4MaoaozT6kW5BJ8V4M5CfAXKin5F53Z9Q4V4HPXGqDKNzj9znsLN329rkFbwVKxDR9DvPziQABVwjPp5Zt6Tme1v",
  "key21": "47BF7hTFggqxaGzcKBVTAsysttJrQVSZ4HxhH63f4tEWWG8hBydxCDV3CpecRb9Fg9GBqM6PLVbNysaQeGUFRJaz",
  "key22": "2xtsXk2KsfYsCjPuxrJ4UtkJVLspv6dFmipY6Wcus8rDys1Rnq6ZmAuXQ74XCpa6EMbgHr3ZZHdtxmavnkG8kVnW",
  "key23": "4Yv5xrWfm3uFCTCadqpwwra13Cy49NFRn7TkyQD5ByAdtFn9Dwgr964xYoCmmwUr2DvfkDVgvWv7ZMdPeVE5NhAt",
  "key24": "2q8AH3qCiLtFgbBSrF1iwxQxiA3BpsxmKswST6Kc2inmGUeLSU9zjXfLzoPR4x44AQi9XjQSxRk3jTYPtczX3jSY",
  "key25": "3cjhoneoUTBZ52C7aoyNRYhtet2MYMVmKzMGGPYgJPJ8BwyncJUXbGJPWmNoS7B6ntnP4WW8jcrBnxaXV59LTm3U",
  "key26": "5sizAwE9BEfMUbrKjrgbUPwXR7RWpnt1DgpHR8mCWRpHr1hym9jZe9hHmxHxaXgB8mABf3vUERFkCgeSF4ayGMqX",
  "key27": "3XhHrSPNbFqg6XSKWtn1SXogYN1Sjrx9NzMP4KEPu6wfRDXd4a7MjDGLnjV98vaADqXzChHPaywRD16YzMkHjv9K",
  "key28": "2ouDa9SXo3YCp98i7NubjcN4v7x7ndiqwc5MAofkjwtxyxZX6y6frgrKHZwKriru3teBDq6DyVca3d5gGMLXunbp",
  "key29": "qs2Fazt6enx9fCdbGaqkhVa2z21GHxgyaKHq5HtcWBUMsrom79PYXai8t8j1phYRWW8vidqfFGVCSpDis1JPn9M",
  "key30": "cEWCQgJZ3fXrA1gbnqW8adQcnA7dW7HEKHxu66JG3ouhCNfLpKB8sCseAbBkfma93pgEmCavoCAWyWyQ57ierYz",
  "key31": "5d5dSoN5JtbrLL2LL8d2kuVHZ5aRGuHFEadM7ak1X2S2xXiyZLeM86Tkmo2KgBvPfoovASziApk6qxUh2tABVGnr",
  "key32": "3wRdUZzphYx23jADBtsE3mTRsa43H1sTee4EVXnovzTN41ARR8pSDSCbmfNLbF2CH9kAKKH1zr8YaDxuycKYQdKM",
  "key33": "5qEWZJ78ijJTajeZYbSvdDBPGHDTzStSv7P3exoN1BFRM1dtqdzmu7i2UDH1VzEt2ffXq5kYLtQppudTV9mPJ1H7",
  "key34": "5at5re4At8wyrr8oG7WJDnQVw9y9tRXMfeTHTJiiGvaVBhS4CkpLbH1N6Eo6espCqf3ctKkJyLHWtuu2pgW5PXzo",
  "key35": "4mjSBhUmZN3Y8WXgV8RkVbSm9Uw2bdX55T21LfB5juSjETmHvJxdQUSmJ7GjHp1srBwh1msC8Siu5mxkJfPiorXB"
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
