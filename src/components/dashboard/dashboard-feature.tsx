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
    "3ZjJWFxpJJwLJn7Juq2YYnUv9U1YxZ6rAceFbngdQCj7wUv7mnh1VQJC4DmMqSzV3j5xup5jvw5WkSBsejwD3ggS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jtpeZEzTsNY3yzMhctot9YdUd1jmwW1ve9pHo3ph1MyEt57FUanJeixMW5P4kyu853j4ymxVLrxzY3nCDjEqXLM",
  "key1": "4wDPd4n2MasKaa2QQHB8F4p5roFHYuoETxYuxzGw5AJJKyRxqNutTwpyWCi9P4uY5yrrUvGD3DMzQ9jgkzEJwWwC",
  "key2": "58PYB6CYmm3vXVfGjJ3zKFnGVFcphdUHu96MctbK1sAvj9gmEHWXn7jqaZyUk96u1Aa6rSdgNTZVBhFsZBMyDxJc",
  "key3": "uuU2s3wZUhbYDM2ztiQwBT4f67HiRACCePDMWnz1gHxovhgutJ1u6rMs49tYi2c7ChcisHz1NAZkC9GwYCVReJP",
  "key4": "2CwXCi1VTLVxAhwMemJjD6F9uwuVSYYGvw1yXjT51Ak4FaVnkkppcUHRJHWqUiyo5fpVHd6vWFN3DYdTaJVpWkMC",
  "key5": "3LVF9YzWy198Dk2Ht6YwrtR45jNkigyQrvYK5tuaerhNoVu341f4oY5EDubkeytqZ7AnMBS1Vf6AH996izug1zLD",
  "key6": "2MjcKctyF4o3TeSs7vRdWgZFTytCb9gzqhnmViJEzubdWT92P5tSCpfLhbyKpxXqfm8u1Agqs73B2r5cLo9dg3Fi",
  "key7": "3qvsQPRBV8VVWW8g9VcJiDfwgfSPhGrxvUBC2RqF537Fe4mByhZBFd5pmWDRtmdtcNecNuVrSWEDgm9fhS6a8RFB",
  "key8": "3qBZXxRsQ33JzYs2JNTozeiURutdkrbPakt64qEuE5x3sPhE6NxdEGhfKqfKwJs1uhoL92GZWea2iWvyVAm1b2yH",
  "key9": "4QsZM1nEtnspZDBgyxYjEK8n4XpxmiYjpAab8rPDoXQM3VCi655p6AnYexrmT3cuhkEHo6RU5VZkQwAhA9sq8SLY",
  "key10": "Tzq7cAL8HC2vXmmeDAmLND8Fyb8vTuK4xRBHzrKirDswerYXCYZ7V5rf5M6H9wVmHQWDyt5U5J8PdNJojovZgm8",
  "key11": "2JUKP9UJn1jQRHdUdurQx6q4T1xSKU5LpMP65KKgujhANHghyZbCw8HcJgWvLusbc1wQ8zprSseXBpgPJp6RMKV8",
  "key12": "DmTBuAef5RfUovsdUZCPt9TEe3EBrrvdFc2ZbqaSBJ6xWxBCEhwDLUvAwZc271hjVBijvGjirxk7qqbxEvKR94F",
  "key13": "34R7mdyAYfxUT1JenY9kRVbVXSvqSkZb9KYVk4rYYQcaqqWoFcr6zHEz6MgqNXfdPssYvZ5kSpTFfQQ7Rk24Qxh5",
  "key14": "2qFQVtdaVhhqQc2LodRY9ym4bwChYmdVChbcfSWupDLnxFn7p7CKFZToRscLJtBj6VuiZLmWqZgd9U31KPTjvXVx",
  "key15": "4NCK8y7pnFanPgWw8fETkWzQcpt3o5mVA79AKgxaQB5mY7CctA6W7M1oRDDHcVd5sTaBwtTC1XkrW3GgU5MURdif",
  "key16": "dMBugCnM8bXQapvm4RHdddSBoy55G3UcXMcor9ioPmbzrE1n4J1z8rRV78xzJeitSSuekQVYfgSEuQcCztfKDGb",
  "key17": "5uV9XzuRYqSAmQa5w12fcnJoMiRgRJeZpPFeEhbBZ6G2BrJhB4Yd7wFnv9cRXNcmxntmTw88yEfgqfVgsXF5k2cc",
  "key18": "4ekuAqEEdLfcRSLNaYCq2SNRhwUt9DiUCpuh3eZRB5LZvKLexnJ5vrJUUVa8oFX8qzu33mV4fgyuZCNCiQDTD29r",
  "key19": "5W4p3dCaH9m4ndSRj4Lyxn5q8TYjBNgEk7jKCHH8UL4pHzwsw2PU9GDfQgfk6aCWSsLtLqLh5kBDnJXVqDDiGXUt",
  "key20": "3siwWvVHJFCz6FdrU1cWDWdYZDhoVUna8ywTwBpZWXYoWr2pw5ckuE8d4fWi1sxGXAjqZQ1ZSHAx7cwFao6CvjGE",
  "key21": "5f3v1c4g3QZZ6GScxsTxFMM7Sz9USGCvuC3MWUuQduoZSQdqFhFWkFVQboG7K2TP9GhzjZJNbrVgyoYiyA1siCBL",
  "key22": "582MwJBaiBC7V1NeRKjCFywjygRpL2AaEC3BUyDUt3LqSj7LqkT6TGnwvxtVEPedSTDqj2WXDsKUQ56suHYeE5Be",
  "key23": "5WXZhb3vfrjc9wx3tFdj2twdqpwvqp2qqtL1mMZTtSnGaPjruw38kLSZqZy1Vvajn6zwSyis5R8sMK4xuEkpc2rZ",
  "key24": "5UmBmLSQrLViSmfLbq5cLZH3xpKMqA72Xmn73XPYxMmB2PNQYoEcRzuPK28QG5YsUN9N7zyBw79rGGBjz7W8Kx6u",
  "key25": "4Thh38wsiRcJtUzoKQJCrNuifYEDjGbkz6RdhW6oVWVTFwhtoSvJjwXWnr9FGpBxJJYsQDMvUCkT626vVFLQJCpX",
  "key26": "2ptNUqgjV8X62uTE7Wr4DngNXmj8f5JwSsdLah7n73efRwQUCtXyB9CcGsV8RwXnFCD9wMV9vkDFCja8j26rh3x4",
  "key27": "5bq4Nkz673hZFD8gKsuucQPyZFkYiQ6eBZdThUdtoBQLeaFLJL5hNGSe7E4SuPqNo3h7mecEXBYJbDGUfDyVtbXb"
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
